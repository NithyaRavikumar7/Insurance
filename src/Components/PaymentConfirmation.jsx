import React from "react";
import { useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  // Retrieve the state passed from the previous page
  const location = useLocation();
  const {
    ownerName,
    vehicleModel,
    year,
    selectedPrice,
    paymentMethod,
    cardNumber,
    expiryDate,
  } = location.state || {};

  // If no state is available, show an error message
  if (!location.state) {
    return (
      <div className="flex items-center justify-center p-10 bg-gradient-to-r from-blue-600 to-blue-200 min-h-screen">
        <h2 className="text-center text-white text-lg font-bold">Error: Payment details not found!</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-10 bg-gradient-to-r from-blue-600 to-blue-200">
      {/* Left Section: Payment Details */}
      <div className="bg-gray-200 shadow-lg p-8 rounded-lg w-full lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-center text-lg font-bold mb-4">Payment Confirmation</h2>
        <div className="mb-4">
          <p><strong>Owner Name:</strong> {ownerName}</p>
          <p><strong>Vehicle Model:</strong> {vehicleModel}</p>
          <p><strong>Year:</strong> {year}</p>
          <p><strong>Price:</strong> {selectedPrice}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
          {paymentMethod === "Credit Card" || paymentMethod === "Debit Card" ? (
            <>
              <p><strong>Card Number:</strong> **** **** **** {cardNumber.slice(-4)}</p>
              <p><strong>Expiry Date:</strong> {expiryDate}</p>
            </>
          ) : null}
        </div>
        <h3 className="text-center text-xl font-semibold text-green-600">Payment Successful!</h3>
        <p className="text-center text-sm mt-4">Thank you for your purchase. Your transaction has been successfully processed. You will receive a confirmation email shortly.</p>
      </div>

      {/* Right Section: Message or additional details */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-6 lg:mt-0 p-4">
        <h1 className="text-center text-white font-bold text-lg">
          Your payment has been successfully processed. We appreciate your business and look forward to serving you again!
        </h1>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
