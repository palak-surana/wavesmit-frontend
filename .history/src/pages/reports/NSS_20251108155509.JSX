import React from "react";
import StarsCanvas from "../../components/StarBackground";

const NSS = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">NSS Reports</h1>
        <p className="text-gray-300 leading-relaxed">
          This section contains detailed reports of NSS (National Service Scheme)
          activities, events, and social outreach programs conducted throughout
          the year.
        </p>
      </div>
    </div>
  );
};

export default NSS;
