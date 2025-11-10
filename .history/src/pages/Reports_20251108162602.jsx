import React from "react";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#040015] text-white pt-[120px] text-center">
      <h1 className="text-4xl font-bold mb-8">Reports</h1>
      <p className="text-lg mb-8">Select a report section below:</p>

      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/reports/nss" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">NSS Reports</Link>
        <Link to="/reports/waves" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg">WAVES Reports</Link>
      </div>
    </div>
  );
};

export default Reports;
