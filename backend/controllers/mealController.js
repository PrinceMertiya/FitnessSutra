import Meal from "../models/Meal.js";

export const addMeal = async (req, res) => {
  try {
    const { meals } = req.body;
    const meal = await Meal.create({
      user: req.user._id,
      meals,
    });
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ message: "Error adding meal" });
  }
};

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.user._id }).sort("-date");
    res.json(meals);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving meals" });
  }
};
