import { Routes, Route } from "react-router-dom";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";
import GuestLectures from "./pages/events/GuestLectures";
import Scicon from "./pages/events/Scicon";
import Workshops from "./pages/events/Workshops";
import SocialOutreach from "./pages/events/SocialOutreach";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Switch */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => toggleLanguage("hi")}
        >
          हिंदी
        </button>
        <button
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
          onClick={() => toggleLanguage("en")}
        >
          EN
        </button>
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/guest-lectures" element={<GuestLectures />} />
        <Route path="/events/scicon" element={<Scicon />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/events/social-outreach" element={<SocialOutreach />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
