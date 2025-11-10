import React from "react";
import StarsCanvas from "../../components/StarBackground";

const ExperientialLearning = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
      <StarsCanvas />
      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Experiential Learning</h1>
        <p className="text-gray-300 text-lg">Details coming soon...</p>
      </div>
    </div>
  );
};

export default ExperientialLearning;
