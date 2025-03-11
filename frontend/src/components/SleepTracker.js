import React, { useState } from "react";
import TrackerCard from "./TrackerCard";

const SleepTracker = () => {
  const [sleepHours, setSleepHours] = useState(0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Sleep Tracker</h2>
      <TrackerCard title="Sleep Hours" value={sleepHours} unit="hrs" />
      <input
        type="number"
        className="border p-2 w-full mt-2"
        placeholder="Enter hours"
        onChange={(e) => setSleepHours(e.target.value)}
      />
    </div>
  );
};

export default SleepTracker;
