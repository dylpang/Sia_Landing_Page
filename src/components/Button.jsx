import React from "react";

const CustomButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-400 text-off-white font-semibold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export default CustomButton;
