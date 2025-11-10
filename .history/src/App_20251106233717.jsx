import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home, About, Vision, Events, Gallery } from "./pages";
import GuestLectures from "./pages/events/GuestLectures";
import Scicon from "./pages/events/Scicon";
import Workshops from "./pages/events/Workshops";
import SocialOutreach from "./pages/events/SocialOutreach";
import { Header, Footer, StarBackground } from "./components";

const App = () => {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <Router>
      <StarBackground />

      {/* 🌐 Language Switcher */}
      <div className="language-switch">
        <button className="lang" onClick={() => setLanguage("hi")}>
          हि
        </button>
        <button className="lang" onClick={() => setLanguage("en")}>
          EN
        </button>
      </div>

      <Header language={language} />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<contact language={language} />} />

        {/* Events Main */}
        <Route path="/events" element={<Events language={language} />} />

        {/* Events Subpages */}
        <Route path="/events/guestlectures" element={<GuestLectures />} />
        <Route path="/events/scicon" element={<Scicon />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/events/socialoutreach" element={<SocialOutreach />} />

        {/* Fallback */}
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </Router>
  );
};

export default App;
