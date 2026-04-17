const mongoose = require("mongoose");

const itemReportSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["lost", "found"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  incidentTime: {
    type: String, // Storing as string to allow flexible formats like "Yesterday 4pm" or ISO
    required: true,
  },
  extractedDetails: {
    color: { type: String, default: "" },
    brand: { type: String, default: "" },
    distinctiveMark: { type: String, default: "" },
    category: { type: String, default: "" },
  },
  status: {
    type: String,
    enum: ["active", "resolved"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ItemReport = mongoose.model("ItemReport", itemReportSchema);

module.exports = ItemReport;
