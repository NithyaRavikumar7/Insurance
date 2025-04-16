import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

const SignupPage = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  // State variables for form data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Optional: loading state for button

  // Handle signup logic
  const handleSignup = () => {
    // Validate form data
    if (!fullName || !email || !password) {
      alert("Please fill in all the fields.");
      return;
    }

    // Set loading state to true while making the API call
    setLoading(true);

    // Create the user object to send to the backend
    const userData = {
      fullName,
      email,
      password,
    };

    // Send data to the backend API
    axios
      .post("http://localhost:8080/api/signup", userData)
      .then((response) => {
        // Check for a successful response from the backend
        if (response.status === 200) {
          alert("Signup successful!");
          // Navigate to the header page after successful signup
          navigate("/header");
        }
      })
      .catch((error) => {
        console.error("There was an error signing up:", error);
        alert("Signup failed. Please try again.");
      })
      .finally(() => {
        // Set loading state to false once the API call is done
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleSignup} // Handle signup and navigation
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Signing Up..." : "Signup"} {/* Show loading state */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
