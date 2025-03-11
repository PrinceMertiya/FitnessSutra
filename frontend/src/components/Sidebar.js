import React from "react";
import { Link } from "react-router-dom";
import { Home, Settings, User, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Fitness Tracker</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Home size={20} /> <span>Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="flex items-center space-x-2">
            <User size={20} /> <span>Profile</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="flex items-center space-x-2">
            <Settings size={20} /> <span>Settings</span>
          </Link>
        </li>
        <li>
          <button
            className="flex items-center space-x-2 w-full text-left"
            onClick={() => localStorage.removeItem("token")}
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
