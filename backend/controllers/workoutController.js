import Workout from "../models/Workout.js";

export const addWorkout = async (req, res) => {
  try {
    const { exercises } = req.body;
    const workout = await Workout.create({
      user: req.user._id,
      exercises,
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: "Error adding workout" });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id }).sort("-date");
    res.json(workouts);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving workouts" });
  }
};
