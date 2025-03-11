import express from "express";
import { addMeal, getMeals } from "../controllers/mealController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addMeal);
router.get("/", protect, getMeals);

export default router;
