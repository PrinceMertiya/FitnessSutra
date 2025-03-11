import express from "express";
import { addSleep, getSleep } from "../controllers/sleepController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addSleep);
router.get("/", protect, getSleep);

export default router;
