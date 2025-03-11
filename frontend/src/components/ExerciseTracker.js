import React, { useState, useEffect } from "react";
import { getWorkouts } from "../api";

const ExerciseTracker = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token");
      const { data } = await getWorkouts(token);
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Exercise Log</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index} className="border-b py-2">
            {workout.type}: {workout.duration} mins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseTracker;
