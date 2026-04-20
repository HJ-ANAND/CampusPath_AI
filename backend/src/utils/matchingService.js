const stringSimilarity = require("string-similarity");
const ItemReport = require("../models/itemModel");
const Match = require("../models/matchModel");
const Notification = require("../models/notificationModel");

const MATCH_THRESHOLD = 0.7;

/**
 * Calculates a match score between two items
 * @param {Object} reportA - The new report
 * @param {Object} reportB - An existing report from DB
 * @returns {Number} Score from 0 to 1
 */
const calculateScore = (reportA, reportB) => {
  let score = 0;

  // 1. Category (Must match exactly or heavily penalized)
  if (reportA.extractedDetails?.category === reportB.extractedDetails?.category) {
    score += 0.2;
  } else {
    return 0; // Category mismatch is a dealbreaker for MVP
  }

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

    const candidates = await ItemReport.find({
      type: targetType,
      "extractedDetails.category": newReport.extractedDetails?.category,
      userId: { $ne: newReport.userId },
      status: "active",
    }).lean();

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
        }

        // 2. Ensure Notifications exist for both users for this match
        const usersToNotify = [
          { userId: newReport.userId, itemTitle: newReport.title, isReporter: true },
          { userId: candidate.userId, itemTitle: candidate.title, isReporter: false }
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
              message: entry.isReporter 
                ? `A potential match was found for your ${newReport.type} item: ${entry.itemTitle}`
                : `Your ${candidate.type} item "${entry.itemTitle}" might belong to someone!`,
              type: "match_found",
              relatedId: match._id,
            });
          }
        }
      }
    }

    return true;
  } catch (error) {
    console.error("Match Service Error:", error);
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
    console.error("Sync Error:", error);
    return false;
  }
};

module.exports = { findMatches, syncUserMatches };
