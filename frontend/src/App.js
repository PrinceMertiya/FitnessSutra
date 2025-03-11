import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import BmiCalculator from "./components/BmiCalculator";
import MealSection from "./components/MealSection";
import SettingsSection from "./components/SettingsSection";
import ProfileSection from "./components/ProfileSection";
import ExerciseTracker from "./components/ExerciseTracker";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 m-4 border rounded"
      >
        Toggle Dark Mode
      </button>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bmi" element={<BmiCalculator />} />
              <Route path="/meal" element={<MealSection />} />
              <Route path="/exercise" element={<ExerciseTracker />} />
              <Route path="/settings" element={<SettingsSection />} />
              <Route path="/profile" element={<ProfileSection />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
