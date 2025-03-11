import React from "react";

const TrackerCard = ({ title, value, unit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value} {unit}</p>
    </div>
  );
};

export default TrackerCard;
