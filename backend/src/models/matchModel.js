const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  lostItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ItemReport",
    required: true,
  },
  foundItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ItemReport",
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Ensure a match between the same two items is unique
matchSchema.index({ lostItemId: 1, foundItemId: 1 }, { unique: true });

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
