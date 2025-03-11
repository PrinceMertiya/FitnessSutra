import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        className="border p-2 w-full mb-2"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        className="border p-2 w-full mb-2"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button
        onClick={calculateBMI}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calculate BMI
      </button>
      {bmi && <p className="mt-2">Your BMI: {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;
