import React from "react";
import ActivityLogItem from "./ActivityLogItem";

const ActivityLogSection = ({ logs }) => {
  return (
    <section className="mt-8">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Activity Logs</h2>
        <ul>
          {logs.map((log, index) => (
            <ActivityLogItem key={index} time={log.time} activity={log.activity} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivityLogSection;
