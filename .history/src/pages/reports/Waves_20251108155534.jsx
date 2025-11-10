import React from "react";
import StarsCanvas from "../../components/StarBackground";

const Waves = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">WAVES Reports</h1>
        <p className="text-gray-300 leading-relaxed">
          This section provides yearly reports and achievements of WAVES club
          initiatives, guest lectures, and student-driven projects.
        </p>
      </div>
    </div>
  );
};

export default Waves;
