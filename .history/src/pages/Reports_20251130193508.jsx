import React, { useEffect } from "react";
import NSS from "./NSS.jsx";
import Waves from "./Waves.jsx";
import StarsCanvas from "../../components/StarBackground";
import { Link, useLocation } from "react-router-dom";

const Reports = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If route is /reports/nss or /reports/waves, convert to an id selector
    let target = null;
    if (hash) {
      target = hash; // e.g. #nss
    } else if (pathname.endsWith("/nss")) {
      target = "#nss";
    } else if (pathname.endsWith("/waves")) {
      target = "#waves";
    }

    if (target) {
      // small delay so DOM is ready
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    } else {
      // default scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-10 text-yellow-400 uppercase tracking-wide drop-shadow-lg">
          Reports
        </h1>
        <p className="text-gray-300 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">
          Explore the yearly and activity-based reports from{" "}
          <span className="text-yellow-300 font-semibold">NSS</span> and{" "}
          <span className="text-yellow-300 font-semibold">WAVES</span>.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-8">
          <Link
            to="/reports#nss"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            NSS Reports
          </Link>
          <Link
            to="/reports#waves"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            WAVES Reports
          </Link>
        </div>

        {/* NSS section */}
        <section id="nss" className="mt-12">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">NSS Reports</h2>
          <div className="bg-[#0a0225] p-6 rounded-2xl shadow mb-8">
            <NSS />
          </div>
        </section>

        {/* WAVES section */}
        <section id="waves" className="mt-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">WAVES Reports</h2>
          <div className="bg-[#0a0225] p-6 rounded-2xl shadow mb-8">
            <Waves />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reports;