const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  calories: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  heartRate: { type: Number, default: 0 },
  waterIntake: { type: Number, default: 0 },
  exerciseTime: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Tracker", trackerSchema);
