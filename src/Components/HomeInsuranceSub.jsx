import React from 'react';
import { useNavigate } from "react-router-dom";

// Import images
import FireIcon from '../pictures/fire.png';
import TheftIcon from '../pictures/theft.png';
import BreakdownIcon from '../pictures/breakdown.png';
import CalamitiesIcon from '../pictures/calamities.png';

const HomeInsuranceSub = () => {
  const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-600  to-blue-200 min-h-screen flex flex-col items-center py-10 overflow-hidden">
      {/* Header */}
      <header className="text-3xl font-bold mb-6 text-center">
        What's Included?
      </header>

      {/* Diagonal Layout Section */}
      <section className="relative w-full max-w-5xl h-96">
        {/* Cards in corners */}
        <div className="absolute top-4 left-4">
          <Card
            icon={FireIcon}
            title="Fire"
            description="Protect your home against any damage due to fire."
          />
        </div>
        <div className="absolute top-4 right-4">
          <Card
            icon={TheftIcon}
            title="Burglary & Theft"
            description="Insure your possessions against theft/burglary."
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <Card
            icon={BreakdownIcon}
            title="Electrical Breakdown"
            description="Insure your appliances to avoid sudden expenses."
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <Card
            icon={CalamitiesIcon}
            title="Natural Calamities"
            description="Protect against earthquakes, floods, and storms."
          />
        </div>

        {/* Payment Button in the center */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button onClick={()=>navigate("/home-details")} className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 shadow-lg">
            Payment
          </button>
        </div>
      </section>
    </div>
  );
};

// Card Component
const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center flex flex-col items-center space-y-3 w-50 h-50">
      {/* Icon */}
      <img src={icon} alt={title} className="w-10 h-10" />
      <h2 className="text-sm font-bold">{title}</h2>
      <p className="text-xs text-center">{description}</p>
    </div>
  );
};

export default HomeInsuranceSub;
