const express = require("express");
const router = express.Router();
const { getUserMatches, updateMatchStatus } = require("../controllers/matchController");

router.get("/matches/user/:userId", getUserMatches);
router.patch("/matches/:matchId", updateMatchStatus);

module.exports = router;
