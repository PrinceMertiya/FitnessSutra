import React from "react";

const TrackerCard = ({ title, value, color }) => {
  return (
    <div className={`p-4 rounded-md shadow-md ${color} flex flex-col items-center justify-center`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default TrackerCard;
