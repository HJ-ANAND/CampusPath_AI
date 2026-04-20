const Match = require("../models/matchModel");
const Notification = require("../models/notificationModel");
const ItemReport = require("../models/itemModel");

// @desc    Get matches for a specific user's items
// @route   GET /api/matches/:userId
// @access  Public
const getUserMatches = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find matches where either the lost item or found item belongs to the user
    // We need to populate the items to check ownership
    const matches = await Match.find()
      .populate("lostItemId")
      .populate("foundItemId")
      .sort({ score: -1, createdAt: -1 });

    const userMatches = matches.filter((match) => {
      return (
        match.lostItemId.userId === userId || match.foundItemId.userId === userId
      );
    });

    res.json(userMatches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update match status (accepted/rejected)
// @route   PATCH /api/matches/:matchId
// @access  Public
const updateMatchStatus = async (req, res) => {
  const { matchId } = req.params;
  const { status } = req.body;

  if (!["pending", "accepted", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const match = await Match.findByIdAndUpdate(
      matchId,
      { status },
      { new: true }
    ).populate("lostItemId").populate("foundItemId");

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    // If accepted, notify the FOUND user that the LOST user confirmed it
    if (status === "accepted") {
      await Notification.create({
        userId: match.foundItemId.userId,
        message: `User confirmed they lost the item you found: ${match.foundItemId.title}. You can now coordinate recovery!`,
        type: "status_update",
        relatedId: match._id,
      });
    }

    res.json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserMatches,
  updateMatchStatus,
};
