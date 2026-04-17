const ItemReport = require("../models/itemModel");
const { generateEnhancedContent } = require("../utils/aiService");

// @desc    Enhance item description using AI
// @route   POST /api/items/enhance
// @access  Public (protected by Clerk on frontend)
const enhanceItem = async (req, res) => {
  const { description, type } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Description is required" });
  }

  try {
    const aiData = await generateEnhancedContent(description, type || "lost");
    res.json(aiData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new item report
// @route   POST /api/items
// @access  Public
const createItem = async (req, res) => {
  const { userId, type, title, description, location, incidentTime, extractedDetails } = req.body;

  if (!userId || !type || !title || !description || !location || !incidentTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newReport = await ItemReport.create({
      userId,
      type,
      title,
      description,
      location,
      incidentTime,
      extractedDetails,
    });
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get reports for a specific user
// @route   GET /api/items/user/:userId
// @access  Public
const getUserItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const reports = await ItemReport.find({ userId }).sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  enhanceItem,
  createItem,
  getUserItems,
};
