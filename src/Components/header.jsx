// header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CarImage from '../pictures/car.png';
import LifeImage from '../pictures/life.png';
import HomeImage from '../pictures/home.png';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600  to-blue-200  py-10 min-h-screen flex flex-col items-center justify-center ">
      {/* Title and Quote Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Insurance Made Easy</h1>
        <p className="text-lg mt-2">Providing peace of mind for your Car, Life, and Home</p>
      </div>

      {/* Insurance Categories Section */}
      <div className="flex justify-center gap-16 mt-8">
        {/* Auto Insurance - Clickable Image */}
        <Link to="/vehicle-details">
          <div className="text-center bg-white/50 p-5 text-black border-4 cursor-pointer">
            <img src={CarImage} alt="Car Insurance" className="w-40 h-40 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Car</h2>
            <p className="text-sm">Secure your vehicle</p>
          </div>
        </Link>

        {/* Life Insurance - Now Clickable */}
        <Link to="/life-insurance">
          <div className="text-center bg-white/50 p-5 text-black border-4 cursor-pointer">
            <img src={LifeImage} alt="Life Insurance" className="w-40 h-40 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Life</h2>
            <p className="text-sm">Secure your life</p>
          </div>
        </Link>

        {/* Home Insurance - Clickable Image */}
        <Link to="/home-insurance">
          <div className="text-center bg-white/50 p-5 text-black border-4 cursor-pointer">
            <img src={HomeImage} alt="Home Insurance" className="w-40 h-40 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Home</h2>
            <p className="text-sm">Secure your Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
