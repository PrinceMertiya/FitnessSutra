const express = require("express");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
