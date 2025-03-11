import React from "react";

const MealItem = ({ mealType, mealDetails }) => {
  return (
    <li className="flex justify-between border-b py-2">
      <span>{mealType}</span>
      <span>{mealDetails}</span>
    </li>
  );
};

export default MealItem;
