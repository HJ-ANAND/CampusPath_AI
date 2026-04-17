const express = require("express");
const router = express.Router();
const { enhanceItem, createItem, getUserItems } = require("../controllers/itemController");

router.post("/items/enhance", enhanceItem);
router.post("/items", createItem);
router.get("/items/user/:userId", getUserItems);

module.exports = router;
