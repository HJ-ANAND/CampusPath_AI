const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String, // Clerk User ID
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["match_found", "status_update", "general"],
    default: "general",
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId, // Could be a Match ID or Item ID
    required: false,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
