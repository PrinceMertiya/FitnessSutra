const express = require("express");
const Tracker = require("../models/Tracker");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:userId", protect, async (req, res) => {
  try {
    const tracker = await Tracker.findOne({ userId: req.params.userId });
    res.json(tracker);
  } catch (err) {
    res.status(404).json({ message: "Data not found" });
  }
});

router.post("/update", protect, async (req, res) => {
  try {
    const { userId, ...updateData } = req.body;
    const tracker = await Tracker.findOneAndUpdate({ userId }, updateData, { new: true, upsert: true });
    res.json(tracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
