import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  exercises: [
    {
      name: { type: String, required: true },
      duration: { type: Number, required: true }, // In minutes
      caloriesBurned: { type: Number, required: true },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;
