import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLogin = () => {
    // Perform login logic here if needed (e.g., form validation, API calls)
    navigate("/header"); // Navigate to Header component
  };

  const ForgotPassword = () => {
    // Navigate to Forgot Password page or handle recovery logic
    navigate("/forgot-password");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600  to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin} // Handle login and navigation
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={ForgotPassword} // Navigate to Forgot Password page
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
