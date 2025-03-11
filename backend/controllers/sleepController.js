import Sleep from "../models/Sleep.js";

export const addSleep = async (req, res) => {
  try {
    const { sleepHours } = req.body;
    const sleep = await Sleep.create({
      user: req.user._id,
      sleepHours,
    });
    res.status(201).json(sleep);
  } catch (error) {
    res.status(400).json({ message: "Error adding sleep data" });
  }
};

export const getSleep = async (req, res) => {
  try {
    const sleep = await Sleep.find({ user: req.user._id }).sort("-date");
    res.json(sleep);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving sleep data" });
  }
};
