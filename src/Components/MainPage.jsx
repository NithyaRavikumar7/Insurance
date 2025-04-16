import React from "react";
import { useNavigate } from "react-router-dom";
import FireIcon from "../pictures/logo.png";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-r from-blue-600  to-blue-200 flex flex-col items-center justify-center">
      {/* Center Content */}
      <div className="text-center">
        {/* Logo */}
        <img src={FireIcon} alt="WeInsurance Logo" className="w-60 h-70 mx-auto mb-6" />

        {/* Title */}

        {/* Subtitle */}
        <p className="text-white text-lg mb-6">
          At WeInsurance, we turn protection into peace of mind
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 border-2 border-gray-400 rounded-md text-white bg-gray-500 hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 border-2 border-gray-400 rounded-md text-white bg-gray-500 hover:bg-blue-600"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
