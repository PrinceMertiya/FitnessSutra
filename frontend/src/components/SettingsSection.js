import React, { useState } from "react";

const SettingsSection = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Settings</h2>
      <div className="flex items-center space-x-4">
        <label>Theme:</label>
        <select
          className="border p-2 rounded"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsSection;
