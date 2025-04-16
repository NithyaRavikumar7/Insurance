import React from "react";
import { useNavigate } from "react-router-dom";

import UmbrellaIcon from '../pictures/umbrella.png'; // Add your actual image paths here

const LifeInsurance = () => {
    const navigate = useNavigate();

    const data = [
        { age: 25, term: 35, monthly: 759, annual: 8683 },
        { age: 30, term: 30, monthly: 901, annual: 10287 },
        { age: 35, term: 25, monthly: 1070, annual: 12231 },
        { age: 40, term: 20, monthly: 1376, annual: 15723 },
        { age: 45, term: 15, monthly: 1915, annual: 21893 },
        { age: 50, term: 10, monthly: 2639, annual: 30160 },
    ];

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-600  to-blue-200 p-8 min-h-screen">
            {/* Title and Description Section */}
            <div className="text-center mb-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Why Health Insurance is Important
                </h1>
                <p className="text-white text-lg leading-relaxed">
                    Health insurance provides financial protection in case you have a serious accident or illness. Health coverage can help protect you from high, unexpected costs. With Marketplace coverage, you'll get access to preventive services — like shots and screening tests — at no cost to you.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
                {/* Table Section */}
                <div className="overflow-x-auto w-full md:w-2/3">
                    <table className="min-w-full table-auto border border-gray-300 shadow-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold">Age (Years)</th>
                                <th className="px-4 py-2 text-left font-semibold">Term (Years)</th>
                                <th className="px-4 py-2 text-left font-semibold">Monthly Premium (₹)</th>
                                <th className="px-4 py-2 text-left font-semibold">Annual Premium (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2 text-white">{row.age}</td>
                                    <td className="px-4 py-2 text-white">{row.term}</td>
                                    <td className="px-4 py-2 text-white">{row.monthly}</td>
                                    <td className="px-4 py-2 text-white">{row.annual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Icon Section */}
                <div className="flex flex-col items-center">
                    <img src={UmbrellaIcon} alt="Health Insurance Icon" className="w-32 h-32 mb-4" />
                    <p className="text-center text-white">
                        <i>Health insurance coverage protects you and your family.</i>
                    </p>

                    {/* Payment Button Section */}
                    <div className="flex space-x-4 mt-6">
                        <button onClick={() => navigate("/life-details")}
                            className="bg-gray-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 shadow-lg">
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LifeInsurance;
