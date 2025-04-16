import React from 'react';
import { useNavigate } from "react-router-dom";
import HomeImage from '../pictures/homeinside.png'; // Path to your home image
import HomeIcon from '../pictures/homeicon.png';   // Path to your home icon

const HomeInsurance = () => {
  const navigate = useNavigate(); // Define the navigate function

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600  to-blue-200 px-4">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-gray-900">HOME INSURANCE</h1>
        <h2 className="text-3xl text-white mt-4">SECURE YOUR HOUSE</h2>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img 
            src={HomeImage} 
            alt="Family and House" 
            className="w-full max-w-lg h-auto rounded-lg p-7"
          />
        </div>
        
        {/* Information Section */}
        <div className="w-full md:w-1/3 bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={HomeIcon} alt="Home Icon" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Home Insurance for Owners</h3>
          <p className="text-black mt-2">
            Your home is your soul. Why not protect it with home insurance from WeInsurance.
          </p>
          <button 
            className="mt-6 bg-gray-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow"
            onClick={() => navigate("/home-insurance-sub")}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInsurance;
