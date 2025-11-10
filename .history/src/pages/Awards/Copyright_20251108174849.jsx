import React from "react";
import StarsCanvas from "../components/StarBackground";

const Copyright = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center text-white space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">Copyright</h1>
        <p className="text-xl text-gray-300">Coming Soon...</p>
        <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Copyright;
