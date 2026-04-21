const Message = require("../models/messageModel");

const getChatHistory = async (req, res) => {
  const { matchId } = req.params;

  try {
    const messages = await Message.find({ matchId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getChatHistory };
