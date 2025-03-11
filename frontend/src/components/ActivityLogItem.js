import React from "react";

const ActivityLogItem = ({ time, activity }) => {
  return (
    <li className="flex justify-between border-b py-2 text-gray-700">
      <span>{time}</span>
      <span>{activity}</span>
    </li>
  );
};

export default ActivityLogItem;
