const express = require("express");
const router = express.Router();
const { getUserNotifications, markAsRead } = require("../controllers/notificationController");

router.get("/notifications/:userId", getUserNotifications);
router.patch("/notifications/:notificationId/read", markAsRead);

module.exports = router;
