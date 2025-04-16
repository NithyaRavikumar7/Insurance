import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import carImage from '../pictures/Car2.png'; // Import your car image

const VehicleDetails = () => {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [year, setYear] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const prices = ["1000", "2000", "3000", "4000", "5000"];

  const handlePayment = () => {
    if (!ownerName || !vehicleModel || !year || !selectedPrice) {
      alert("Please fill in all the details before proceeding.");
      return;
    }

    const vehicleInsuranceData = {
      ownerName,
      vehicleModel,
      year,
      selectedPrice: parseInt(selectedPrice),
    };

    // Send the data to the backend
    axios.post("http://localhost:8080/api/vehicle-insurance", vehicleInsuranceData)
      .then(response => {
        if (response.status === 200) {
          navigate("/payment-page", {
            state: {
              policyType: "Vehicle Insurance",
              details: vehicleInsuranceData,
            },
          });
        }
      })
      .catch(error => {
        console.error("There was an error saving the vehicle insurance data:", error);
        alert("There was an error processing your request. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="flex flex-wrap w-11/12 md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 bg-gray-200">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Vehicle Insurance Details</h1>
          
          <label className="block mb-2 font-semibold">Owner Name:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter vehicle owner name"
          />

          <label className="block mb-2 font-semibold">Vehicle Model:</label>
          <input
            type="text"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter vehicle model"
          />

          <label className="block mb-2 font-semibold">Year of Manufacture:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter vehicle manufacture year"
          />

          <label className="block mb-2 font-semibold">Select Price:</label>
          <div className="relative mb-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-2 border rounded bg-white"
            >
              {selectedPrice || "Select Price/year"}
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-gray-500 border border-gray-300 rounded-md shadow-lg z-10">
                {prices.map((price, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedPrice(price);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                  >
                    {price}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>

        <div className="w-full md:w-1/2 bg-blue-300 flex items-center justify-center">
          <img
            src={carImage}
            alt="Vehicle"
            className="object-contain max-w-full max-h-full p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
