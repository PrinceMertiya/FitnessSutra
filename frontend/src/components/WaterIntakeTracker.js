import React, { useState } from "react";
import TrackerCard from "./TrackerCard";

const WaterIntakeTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  const handleAddWater = () => {
    setWaterIntake((prev) => prev + 250);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Water Intake</h2>
      <TrackerCard title="Total Intake" value={waterIntake} unit="ml" />
      <button
        onClick={handleAddWater}
        className="mt-3 bg-blue-500 text-white p-2 rounded"
      >
        Add 250ml
      </button>
    </div>
  );
};

export default WaterIntakeTracker;
