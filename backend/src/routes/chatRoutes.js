const express = require("express");
const router = express.Router();
const { getChatHistory } = require("../controllers/chatController");

router.get("/chat/:matchId", getChatHistory);

module.exports = router;
