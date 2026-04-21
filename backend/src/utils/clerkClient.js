const { createClerkClient } = require("@clerk/clerk-sdk-node");

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

/**
 * Fetches user email from Clerk using userId
 * @param {String} userId 
 * @returns {Promise<String|null>}
 */
const getUserEmail = async (userId) => {
  try {
    const user = await clerkClient.users.getUser(userId);
    return user.emailAddresses[0]?.emailAddress || null;
  } catch (error) {
    console.error(`Error fetching user ${userId} from Clerk:`, error);
    return null;
  }
};

module.exports = { clerkClient, getUserEmail };
