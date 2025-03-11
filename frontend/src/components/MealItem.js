import React from "react";

const MealItem = ({ meal }) => {
  return (
    <div className="border-b p-2 flex justify-between">
      <span>{meal.name}</span>
      <span className="font-bold">{meal.calories} kcal</span>
    </div>
  );
};

export default MealItem;
