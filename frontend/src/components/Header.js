import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Header;
