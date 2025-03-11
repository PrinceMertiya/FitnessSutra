const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Sample Dashboard Data Route
router.get("/", protect, (req, res) => {
  res.json({ message: "Welcome to the dashboard!", user: req.user });
});

module.exports = router;
