import React from "react";
import { Link } from "react-router-dom";
import StarsCanvas from "../../components/StarBackground";

const Reports = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-10 text-yellow-400 uppercase tracking-wide drop-shadow-lg">
          Reports
        </h1>
        <p className="text-gray-300 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">
          Explore the yearly and activity-based reports from{" "}
          <span className="text-yellow-300 font-semibold">NSS</span> and{" "}
          <span className="text-yellow-300 font-semibold">WAVES</span> — showcasing
          social impact, innovation, and excellence.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-8">
          <Link
            to="/reports/nss"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            NSS Reports
          </Link>
          <Link
            to="/reports/waves"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            WAVES Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reports;
