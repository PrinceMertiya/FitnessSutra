import express from "express";
import { addWorkout, getWorkouts } from "../controllers/workoutController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addWorkout);
router.get("/", protect, getWorkouts);

export default router;
