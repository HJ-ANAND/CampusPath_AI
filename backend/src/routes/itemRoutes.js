const express = require("express");
const router = express.Router();
const { enhanceItem, createItem, getUserItems, syncItems } = require("../controllers/itemController");

router.post("/items/enhance", enhanceItem);
router.post("/items", createItem);
router.get("/items/user/:userId", getUserItems);
router.post("/items/sync/:userId", syncItems);

module.exports = router;
