import React, { useState } from "react";

const WaterIntakeTracker = () => {
  const [water, setWater] = useState(0);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Water Intake</h2>
      <p>{water} / 8 glasses</p>
      <button onClick={() => setWater(water + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">+1 Glass</button>
    </div>
  );
};

export default WaterIntakeTracker;
