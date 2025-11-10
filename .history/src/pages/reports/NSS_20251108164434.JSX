import React from "react";
import StarsCanvas from "../../components/StarBackground";

const NSS = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-10 text-yellow-400 uppercase tracking-wide">
          NSS Reports
        </h1>
        <p className="text-gray-300 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">
          Explore detailed yearly and activity-based reports of the{" "}
          <span className="text-yellow-300 font-semibold">National Service Scheme (NSS)</span>,
          showcasing our contribution to social welfare, environmental awareness,
          and community development initiatives.
        </p>

        {/* Placeholder for future report cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-[#0d1b6b]/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-semibold text-xl mb-3">2024 Report</h2>
            <p className="text-gray-400 text-sm">
              Summary of social activities, awareness drives, and cleanliness campaigns.
            </p>
          </div>
          <div className="bg-[#0d1b6b]/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-semibold text-xl mb-3">2023 Report</h2>
            <p className="text-gray-400 text-sm">
              Highlights of blood donation camps, tree plantation drives, and seminars.
            </p>
          </div>
          <div className="bg-[#0d1b6b]/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-semibold text-xl mb-3">2022 Report</h2>
            <p className="text-gray-400 text-sm">
              Overview of community service and village adoption initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NSS;
