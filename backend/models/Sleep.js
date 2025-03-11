import mongoose from "mongoose";

const sleepSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  sleepHours: { type: Number, required: true },
});

const Sleep = mongoose.model("Sleep", sleepSchema);
export default Sleep;
