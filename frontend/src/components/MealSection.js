import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const MealSection = () => {
  const [meals, setMeals] = useState([]);

  // Fetch meals from an API or mock data
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("/api/meals"); // Replace with actual API endpoint
      const data = await response.json();
      setMeals(data);
    };

    fetchMeals();
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Meal Plan</h2>
      {meals.length > 0 ? (
        meals.map((meal, index) => <MealItem key={index} meal={meal} />)
      ) : (
        <p>No meals planned.</p>
      )}
    </div>
  );
};

export default MealSection;
