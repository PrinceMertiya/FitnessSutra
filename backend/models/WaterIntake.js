import mongoose from "mongoose";

const waterSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  waterConsumed: { type: Number, required: true }, // In ml
});

const WaterIntake = mongoose.model("WaterIntake", waterSchema);
export default WaterIntake;
