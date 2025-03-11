import React from "react";
import MealItem from "./MealItem";

const MealSection = ({ title, meals }) => {
  return (
    <section className="mt-8">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ul>
          {meals.map((meal, index) => (
            <MealItem key={index} mealType={meal.mealType} mealDetails={meal.mealDetails} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MealSection;
