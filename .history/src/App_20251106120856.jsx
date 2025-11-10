import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";
import GuestLecture from "./pages/events/GuestLecture";
import Workshops from "./pages/events/Workshops";
import Scicon from "./pages/events/Scicon";
import SocialOutreach from "./pages/events/SocialOutreach";

const App = () => {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Bar */}
      <div className="language-switch">
        <button className="lang" onClick={() => setLanguage("hi")}>हि</button>
        <button className="lang" onClick={() => setLanguage("en")}>EN</button>
      </div>

      <Header language={language} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/events/guest-lectures" element={<GuestLecture language={language} />} />
        <Route path="/events/workshops" element={<Workshops language={language} />} />
        <Route path="/events/scicon" element={<Scicon language={language} />} />
        <Route path="/events/social-outreach" element={<SocialOutreach language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<contact language={language} />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  );
};

export default App;
