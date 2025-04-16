import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import homeImage from "../pictures/home2.png"; // Import your image

const HomeDetails = () => {
  const navigate = useNavigate();
  const [propertyOwner, setPropertyOwner] = useState("");
  const [address, setAddress] = useState("");
  const [insuredAmount, setInsuredAmount] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission and store data
  const handleSubmit = async () => {
    if (!propertyOwner || !address || !insuredAmount || !year) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    const homeInsuranceData = {
      propertyOwner,
      address,
      insuredAmount,
      year,
    };

    try {
      setLoading(true);
      setError(null);

      // Send the data to the backend via an API POST request
      const response = await axios.post("http://localhost:8080/api/home-insurance", homeInsuranceData);

      if (response.status === 200) {
        // Navigate to the payment page if data is successfully saved
        navigate("/payment-page", {
          state: {
            policyType: "Home Insurance",
            details: { propertyOwner, address, insuredAmount, year },
          },
        });
      }
    } catch (error) {
      console.error("Error saving the home insurance data:", error);
      setError("There was an error saving your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="flex flex-wrap w-11/12 md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 bg-gray-200">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Home Insurance Details</h1>

          {/* Property Owner Name */}
          <label className="block mb-2 font-semibold">Property Owner Name:</label>
          <input
            type="text"
            value={propertyOwner}
            onChange={(e) => setPropertyOwner(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter property owner's name"
          />

          {/* Property Address */}
          <label className="block mb-2 font-semibold">Property Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter property address"
          />

          {/* Insured Amount */}
          <label className="block mb-2 font-semibold">Insured Amount:</label>
          <input
            type="text"
            value={insuredAmount}
            onChange={(e) => setInsuredAmount(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter insured amount"
          />

          {/* Year */}
          <label className="block mb-2 font-semibold">Year:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter year"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            onClick={handleSubmit} // On form submit, send the data to the backend
            className={`w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-blue-300 flex items-center justify-center">
          <img
            src={homeImage}
            alt="Home Insurance Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
