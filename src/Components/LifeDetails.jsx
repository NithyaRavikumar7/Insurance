import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import lifeImage from "../pictures/life2.png"; // Import the image

const LifeInsuranceDetails = () => {
  const navigate = useNavigate();
  const [policyHolderName, setPolicyHolderName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [year, setYear] = useState("");

  // Handle form submission and store data
  const handleSubmit = async () => {
    if (!policyHolderName || !policyNumber || !sumAssured || !year) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    const lifeInsuranceData = {
      policyHolderName,
      policyNumber,
      sumAssured,
      year,
    };

    try {
      // Send the data to the backend via an API POST request
      const response = await axios.post("http://localhost:8080/api/life-insurance", lifeInsuranceData);

      if (response.status === 200) {
        // Navigate to the payment page if data is successfully saved
        navigate("/payment-page", {
          state: {
            policyType: "Life Insurance",
            details: { policyHolderName, policyNumber, sumAssured, year },
          },
        });
      }
    } catch (error) {
      console.error("Error saving the life insurance data:", error);
      alert("There was an error saving your data. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="flex flex-wrap w-11/12 md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 bg-gray-200">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Life Insurance Details</h1>
          
          <label className="block mb-2 font-semibold">Policy Holder Name:</label>
          <input
            type="text"
            value={policyHolderName}
            onChange={(e) => setPolicyHolderName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter policy holder's name"
          />

          <label className="block mb-2 font-semibold">Policy Number:</label>
          <input
            type="text"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter policy number"
          />

          <label className="block mb-2 font-semibold">Sum Assured:</label>
          <input
            type="text"
            value={sumAssured}
            onChange={(e) => setSumAssured(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter sum assured"
          />

          <label className="block mb-2 font-semibold">Year:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter year"
          />

          <button
            onClick={handleSubmit} // On form submit, send the data to the backend
            className="w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-blue-300 flex items-center justify-center">
          <img
            src={lifeImage}
            alt="Life Insurance Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceDetails;
