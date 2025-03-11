import React, { useState } from "react";

const BmiCalculator = ({ onResult }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = (weight / (height * height)).toFixed(2);
      onResult(bmi);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="number"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button onClick={calculateBMI} className="bg-blue-500 text-white px-4 py-2 rounded-md">Calculate</button>
    </div>
  );
};

export default BmiCalculator;
