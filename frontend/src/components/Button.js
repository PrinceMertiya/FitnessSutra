import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
