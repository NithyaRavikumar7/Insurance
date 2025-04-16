import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";
import Header from "./Components/header";
import VehicleDetails from "./Components/VehicleDetails";
import HomeInsurance from "./Components/HomeInsurance";
import LifeInsurance from "./Components/LifeInsurance";
import HomeInsuranceSub from "./Components/HomeInsuranceSub";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import ForgotPassword from "./Components/ForgotPassword";
import PaymentPage from "./Components/PaymentPage";
import PaymentConfirmation from "./Components/PaymentConfirmation";
import LifeDetails from "./Components/LifeDetails";
import HomeDetails from "./Components/Homedetails";



function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/home-insurance" element={<HomeInsurance />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/home-insurance-sub" element={<HomeInsuranceSub />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation/>} />
          <Route path="/life-details" element={<LifeDetails/>} />
          <Route path="/home-details" element={<HomeDetails/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
