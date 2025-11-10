import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";

import GuestLectures from "./pages/events/GuestLectures";
import Scion from "./pages/events/Scion";
import Workshops from "./pages/events/Workshops";
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
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/events/guest-lectures" element={<GuestLectures />} />
        <Route path="/events/scion" element={<Scion />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/events/social-outreach" element={<SocialOutreach />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  );
};

export default App;
