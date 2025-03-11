import WaterIntake from "../models/WaterIntake.js";

export const addWaterIntake = async (req, res) => {
  try {
    const { waterConsumed } = req.body;
    const water = await WaterIntake.create({
      user: req.user._id,
      waterConsumed,
    });
    res.status(201).json(water);
  } catch (error) {
    res.status(400).json({ message: "Error adding water intake" });
  }
};

export const getWaterIntake = async (req, res) => {
  try {
    const water = await WaterIntake.find({ user: req.user._id }).sort("-date");
    res.json(water);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving water intake" });
  }
};
