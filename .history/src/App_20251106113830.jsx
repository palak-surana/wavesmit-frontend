import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, About, Vision, Events, Gallery } from "./pages"
import { Header, Footer, StarBackground } from "./components"

const App = () => {
  const [language, setLanguage] = useState("en") // default English

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
        <Route path="/contact" element={<contact language={language} />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  )
}

export default App
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";

// 🆕 Import event subpages
import GuestLectures from "./pages/events/GuestLectures";
import Scicon from "./pages/events/Scicon";
import Workshops from "./pages/events/Workshops";
import SocialOutreach from "./pages/events/SocialOutreach";

const App = () => {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Bar */}
      <div className="language-switch fixed top-4 right-4 z-50">
        <button className="lang mx-1 px-2 py-1 bg-gray-800 text-white rounded" onClick={() => setLanguage("hi")}>
          हि
        </button>
        <button className="lang mx-1 px-2 py-1 bg-gray-800 text-white rounded" onClick={() => setLanguage("en")}>
          EN
        </button>
      </div>

      <Header language={language} />

      <Routes>
        {/* 🔹 Main Pages */}
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<contact language={language} />} />

        {/* 🔹 Event Subpages */}
        <Route path="/events/guest-lectures" element={<GuestLectures language={language} />} />
        <Route path="/events/scicon" element={<Scicon language={language} />} />
        <Route path="/events/workshops" element={<Workshops language={language} />} />
        <Route path="/events/social-outreach" element={<SocialOutreach language={language} />} />

        {/* 🔹 Fallback */}
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  );
};

export default App;
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
