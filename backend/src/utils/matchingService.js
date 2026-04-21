const stringSimilarity = require("string-similarity");
const ItemReport = require("../models/itemModel");
const Match = require("../models/matchModel");
const Notification = require("../models/notificationModel");
const { getUserEmail } = require("./clerkClient");
const { sendMatchEmail } = require("./emailService");

const MATCH_THRESHOLD = 0.7;

/**
 * Calculates a match score between two items
 * @param {Object} reportA - The new report
 * @param {Object} reportB - An existing report from DB
 * @returns {Number} Score from 0 to 1
 */
const calculateScore = (reportA, reportB) => {
  let score = 0;

  // 1. Category (Fuzzy match — AI-generated categories can vary: "Wallets" vs "Wallet")
  const catA = (reportA.extractedDetails?.category || "").toLowerCase().trim();
  const catB = (reportB.extractedDetails?.category || "").toLowerCase().trim();

  if (catA && catB) {
    const catSimilarity = stringSimilarity.compareTwoStrings(catA, catB);
    if (catSimilarity >= 0.6) {
      score += 0.2;
    } else {
      return 0; // Category mismatch is a dealbreaker
    }
  }
  // If either category is empty/missing, skip the category check (don't penalize)

  // 2. Text Similarity (Title & Description) - 40%
  const textA = `${reportA.title} ${reportA.description}`.toLowerCase();
  const textB = `${reportB.title} ${reportB.description}`.toLowerCase();
  const textSim = stringSimilarity.compareTwoStrings(textA, textB);
  score += textSim * 0.4;

  // 3. Color Similarity - 15%
  const colorA = (reportA.extractedDetails?.color || "").toLowerCase();
  const colorB = (reportB.extractedDetails?.color || "").toLowerCase();
  if (colorA && colorB) {
    const colorSim = stringSimilarity.compareTwoStrings(colorA, colorB);
    score += colorSim * 0.15;
  }

  // 4. Location similarity - 15%
  const locA = reportA.location.toLowerCase();
  const locB = reportB.location.toLowerCase();
  const locSim = stringSimilarity.compareTwoStrings(locA, locB);
  score += locSim * 0.15;

  // 5. Brand similarity - 10%
  const brandA = (reportA.extractedDetails?.brand || "").toLowerCase();
  const brandB = (reportB.extractedDetails?.brand || "").toLowerCase();
  if (brandA && brandB) {
    const brandSim = stringSimilarity.compareTwoStrings(brandA, brandB);
    score += brandSim * 0.1;
  }

  return Math.min(score, 1); // Cap at 1.0
};

/**
 * Finds matches for a newly created report
 * @param {Object} newReport - The item report object
 */
const findMatches = async (newReport) => {
  try {
    const targetType = newReport.type === "lost" ? "found" : "lost";

    // Query all opposite-type active items from other users.
    // Category filtering is handled by calculateScore() with fuzzy matching,
    // since AI-generated categories can vary (e.g. "Wallets" vs "Wallet").
    const candidates = await ItemReport.find({
      type: targetType,
      userId: { $ne: newReport.userId },
      status: "active",
    }).lean();

    console.log(`[Match] Checking ${candidates.length} ${targetType} candidates for "${newReport.title}"`);

    for (const candidate of candidates) {
      const score = calculateScore(newReport, candidate);

      if (score >= MATCH_THRESHOLD) {
        // 1. Find or Create the Match
        const lostId = newReport.type === "lost" ? newReport._id : candidate._id;
        const foundId = newReport.type === "found" ? newReport._id : candidate._id;

        let match = await Match.findOne({ lostItemId: lostId, foundItemId: foundId });
        if (!match) {
          match = await Match.create({
            lostItemId: lostId,
            foundItemId: foundId,
            score: score,
            status: "pending",
          });
          console.log(`[Match] ✅ Created match (${Math.round(score * 100)}%): "${newReport.title}" ↔ "${candidate.title}"`);
        }

        // 2. Determine who is who
        const lostReport = newReport.type === "lost" ? newReport : candidate;
        const foundReport = newReport.type === "found" ? newReport : candidate;

        // 3. Notify both users with clear, role-specific messages
        const usersToNotify = [
          {
            userId: lostReport.userId,
            message: `🔍 Great news! A found item matching your lost "${lostReport.title}" was reported near ${foundReport.location}. Review your matches to check if it's yours.`,
          },
          {
            userId: foundReport.userId,
            message: `📦 Someone may be looking for the item you found: "${foundReport.title}". They reported losing a similar item. Check your matches to help connect them!`,
          },
        ];

        for (const entry of usersToNotify) {
          const existingNotif = await Notification.findOne({
            userId: entry.userId,
            relatedId: match._id,
            type: "match_found"
          });

          if (!existingNotif) {
            await Notification.create({
              userId: entry.userId,
              message: entry.message,
              type: "match_found",
              relatedId: match._id,
            });

            // Send email notification (background, non-blocking)
            getUserEmail(entry.userId).then(email => {
              if (email) {
                const reportObj = typeof newReport.toObject === 'function' ? newReport.toObject() : newReport;
                const itemDetails = entry.userId === lostReport.userId ? (typeof lostReport.toObject === 'function' ? lostReport.toObject() : lostReport) : (typeof foundReport.toObject === 'function' ? foundReport.toObject() : foundReport);
                const matchDetails = entry.userId === lostReport.userId ? (typeof foundReport.toObject === 'function' ? foundReport.toObject() : foundReport) : (typeof lostReport.toObject === 'function' ? lostReport.toObject() : lostReport);
                console.log(`[Email] Sending match email to ${email} for user ${entry.userId}`);
                sendMatchEmail(email, itemDetails, { ...matchDetails, score });
              } else {
                console.warn(`[Email] ⚠️ Could not fetch email for user ${entry.userId} — skipping email notification`);
              }
            }).catch(err => console.error(`[Email] ❌ Email processing error for user ${entry.userId}:`, err.message));
          }
        }
      }
    }

    return true;
  } catch (error) {
    console.error("[Match] Service Error:", error);
    return false;
  }
};

/**
 * Performs a deep scan of all active items for a user to find matches
 * @param {String} userId 
 */
const syncUserMatches = async (userId) => {
  try {
    const activeItems = await ItemReport.find({ userId, status: "active" });
    for (const item of activeItems) {
      await findMatches(item);
    }
    return true;
  } catch (error) {
    console.error("[Match] Sync Error:", error);
    return false;
  }
};

module.exports = { findMatches, syncUserMatches };
