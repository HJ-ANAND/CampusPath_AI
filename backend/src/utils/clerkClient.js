const { createClerkClient } = require("@clerk/clerk-sdk-node");

if (!process.env.CLERK_SECRET_KEY) {
  console.warn("[Clerk] ⚠️ CLERK_SECRET_KEY is not set — user email lookups will fail.");
} else {
  console.log("[Clerk] ✅ Clerk client configured successfully.");
}

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

/**
 * Fetches user email from Clerk using userId
 * @param {String} userId 
 * @returns {Promise<String|null>}
 */
const getUserEmail = async (userId) => {
  try {
    const user = await clerkClient.users.getUser(userId);
    const email = user.emailAddresses[0]?.emailAddress || null;
    if (!email) {
      console.warn(`[Clerk] ⚠️ User ${userId} has no email addresses in Clerk.`);
    }
    return email;
  } catch (error) {
    console.error(`[Clerk] ❌ Error fetching user ${userId}:`, error.message);
    return null;
  }
};

module.exports = { clerkClient, getUserEmail };
