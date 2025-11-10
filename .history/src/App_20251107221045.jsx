import "./i18n"; // ✅ load i18next config

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";

// event pages
import GuestLectures from "./pages/events/GuestLectures";
import Scicon from "./pages/events/Scicon";
import Workshops from "./pages/events/Workshops";
import SocialOutreach from "./pages/events/SocialOutreach";

const App = () => {
  const [language, setLanguage] = useState("en");

  // 🧠 Whenever language changes, update i18n
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Switch */}
      <div className="language-switch fixed top-4 right-6 z-50 flex">
        <button
          className={`lang px-3 py-1 rounded-l ${
            language === "hi" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setLanguage("hi")}
        >
          हि
        </button>
        <button
          className={`lang px-3 py-1 rounded-r ${
            language === "en" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>

      {/* Components no longer need props — i18n handles language */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* 🧭 Events + Sub Routes */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/guest-lectures" element={<GuestLectures />} />
        <Route path="/events/scicon" element={<Scicon />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/events/social-outreach" element={<SocialOutreach />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
