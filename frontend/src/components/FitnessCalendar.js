import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FitnessCalendar = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Workout & Meal Planner</h2>
      <Calendar />
    </div>
  );
};

export default FitnessCalendar;
