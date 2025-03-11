import React from "react";

const ExerciseTracker = ({ bmi }) => {
  const getExercisePlan = () => {
    if (bmi < 18.5) return "Weight Gain Plan: Strength Training + High-Calorie Diet";
    if (bmi >= 18.5 && bmi <= 24.9) return "Maintain: Cardio + Strength Mix";
    if (bmi >= 25) return "Weight Loss Plan: High Intensity Workouts + Caloric Deficit";
    return "Enter your BMI to see the plan";
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Exercise Regimen</h2>
      <p className="text-lg">{getExercisePlan()}</p>
    </div>
  );
};

export default ExerciseTracker;
