import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">FitnessSutra</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="block p-2 hover:bg-blue-500 rounded">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/login" className="block p-2 hover:bg-blue-500 rounded">Login</Link>
        </li>
        <li className="mb-4">
          <Link to="/register" className="block p-2 hover:bg-blue-500 rounded">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
