import express from "express";
import { addWaterIntake, getWaterIntake } from "../controllers/waterController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addWaterIntake);
router.get("/", protect, getWaterIntake);

export default router;
