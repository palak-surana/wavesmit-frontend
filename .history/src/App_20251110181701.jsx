import "./i18n"; // 🌐 for language toggle

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Vision, Events, Gallery, Contacts } from "./pages";
import { Header, Footer, StarBackground } from "./components";

// 🎯 Event pages
import GuestLectures from "./pages/events/GuestLectures";
import Scicon from "./pages/events/Scicon";
import Workshops from "./pages/events/Workshops";
import SocialOutreach from "./pages/events/SocialOutreach";
import ExperientialLearning from "./pages/events/ExperientialLearning";
import Internships from "./pages/events/Internships";
import Mentalhealthandwellbeing from "./pages/events/Mentalhealthandwellbeing";

// 🧾 Report pages
import NSS from "./pages/reports/NSS.jsx";
import Waves from "./pages/reports/Waves.jsx";


// 🏆 Awards & Achievements pages
import CSRFund from "./pages/awards/CSRFund";
import Copyright from "./pages/awards/Copyright";
import AppreciationLetters from "./pages/awards/AppreciationLetters";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="relative min-h-screen">
      {/* 🌌 Background */}
      <StarBackground />

      {/* 🌐 Language Switch */}
      <div className="language-switch fixed top-4 right-6 flex gap-2 z-50">
        <button
          className={`lang px-3 py-1 rounded-md ${
            language === "hi"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => setLanguage("hi")}
        >
          हि
        </button>
        <button
          className={`lang px-3 py-1 rounded-md ${
            language === "en"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>

      {/* 🧭 Navbar */}
      <Header language={language} />

      {/* 📄 All Routes */}
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<Contacts language={language} />} />

        {/* 🧭 Events main + sub routes */}
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/events/guest-lectures" element={<GuestLectures />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/events/social-outreach" element={<SocialOutreach />} />
        <Route path="/events/scicon" element={<Scicon />} />
        <Route
          path="/events/experiential-learning"
          element={<ExperientialLearning />}
        />
        <Route path="/events/internships" element={<Internships />} />
        <Route
          path="/events/mental-health-and-wellbeing"
          element={<Mentalhealthandwellbeing />}
        />

        {/* 🧾 Reports + sub routes */}
        <Route path="/reports/nss" element={<NSS />} />
        <Route path="/reports/waves" element={<Waves />} />

        {/* 🏆 Awards & Achievements + sub routes */}
        <Route path="/awards/csr-fund" element={<CSRFund />} />
        <Route path="/awards/copyright" element={<Copyright />} />
        <Route path="/awards/appreciation-letters" element={<AppreciationLetters />} />

        {/* 🔁 Fallback (default route) */}
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      {/* ⚓ Footer */}
      <Footer language={language} />
    </div>
  );
};

export default App;
