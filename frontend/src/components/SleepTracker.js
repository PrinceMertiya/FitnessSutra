import React, { useState } from "react";

const SleepTracker = () => {
  const [hours, setHours] = useState(0);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Sleep Tracker</h2>
      <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className="w-full p-2 border rounded" placeholder="Hours Slept" />
      <p className="mt-2">You slept {hours} hours last night.</p>
    </div>
  );
};

export default SleepTracker;
