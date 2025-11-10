import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, About, Vision, Events, Gallery } from "./pages"
import { Header, Footer, StarBackground } from "./components"

// 🆕 Import new event subpages
import GuestLectures from "./pages/events/GuestLectures"
import Scion from "./pages/events/Scion"
import Workshops from "./pages/events/Workshops"
import SocialOutreach from "./pages/events/SocialOutreach"
import Contact from "./pages/Contact"

const App = () => {
  const [language, setLanguage] = useState("en") // default English

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Switch Bar */}
      <div className="language-switch fixed top-4 right-4 z-50 flex gap-2">
        <button
          className={`lang px-3 py-1 rounded-md text-white ${
            language === "hi" ? "bg-blue-700" : "bg-gray-500"
          }`}
          onClick={() => setLanguage("hi")}
        >
          हि
        </button>
        <button
          className={`lang px-3 py-1 rounded-md text-white ${
            language === "en" ? "bg-blue-700" : "bg-gray-500"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>

      {/* 🔝 Navbar */}
      <Header language={language} />

      {/* 📄 Routes */}
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />

        {/* 🆕 Dropdown Event Routes */}
        <Route path="/events/guest-lectures" element={<GuestLectures language={language} />} />
        <Route path="/events/scion" element={<Scion language={language} />} />
        <Route path="/events/workshops" element={<Workshops language={language} />} />
        <Route path="/events/social-outreach" element={<SocialOutreach language={language} />} />

        {/* 📞 Contact Page */}
        <Route path="/contact" element={<Contact language={language} />} />

        {/* Default Fallback */}
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      {/* 🔻 Footer */}
      <Footer language={language} />
    </div>
  )
}

export default App
