import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PaymentPage = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const { policyType, details } = location.state || {};

  console.log("Location state:", location.state);  // Debugging log to verify state

  if (!details || !policyType) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-600 to-blue-200 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Error: No Policy Details Available</h2>
          <p>Please make sure you selected a policy and filled in the details correctly.</p>
        </div>
      </div>
    );
  }

  console.log("Policy Type:", policyType);  // Check if policyType is passed
  console.log("Details:", details);  // Check if details are passed correctly

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-600 to-blue-200 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

        {/* Handle Life Insurance Details */}
        {policyType === "Life Insurance" && details.policyHolderName && (
          <div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Policy Holder Name:</div>
              <div className="text-lg">{details.policyHolderName}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Policy Number:</div>
              <div className="text-lg">{details.policyNumber}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Sum Assured:</div>
              <div className="text-lg">{details.sumAssured}</div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold">Year:</div>
              <div className="text-lg">{details.year}</div>
            </div>
          </div>
        )}

        {/* Handle Vehicle Insurance Details */}
        {policyType === "Vehicle Insurance" && details.ownerName && (
          <div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Owner Name:</div>
              <div className="text-lg">{details.ownerName}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Vehicle Model:</div>
              <div className="text-lg">{details.vehicleModel}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Manufacturing Year:</div>
              <div className="text-lg">{details.year}</div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold">Price per Year:</div>
              <div className="text-lg">{details.selectedPrice}</div>
            </div>
          </div>
        )}

        {/* Handle Home Insurance Details */}
        {policyType === "Home Insurance" && details.propertyOwner && (
          <div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Property Owner Name:</div>
              <div className="text-lg">{details.propertyOwner}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Property Address:</div>
              <div className="text-lg">{details.address}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold">Insured Amount:</div>
              <div className="text-lg">{details.insuredAmount}</div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold">Year:</div>
              <div className="text-lg">{details.year}</div>
            </div>
          </div>
        )}

        <button onClick={()=> navigate("/payment-confirmation")}
        className="px-6 py-2 bg-blue-600 text-white rounded-md w-full">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
