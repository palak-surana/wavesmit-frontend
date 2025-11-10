import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home, About, Vision, Events, Gallery } from "./pages"
import { Header, Footer, StarBackground } from "./components"

const App = () => {
  const [language, setLanguage] = useState("en") // 'en' = English, 'hi' = Hindi

  // Function to toggle language
  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div>
      <StarBackground />

      {/* 🌐 Language Switch Bar */}
      <div className="absolute top-4 right-6 z-50 flex gap-3 bg-[#00000080] px-3 py-1 rounded-lg border border-gray-500">
        <button
          onClick={() => toggleLanguage("hi")}
          className={`text-white font-semibold ${language === "hi" ? "underline text-yellow-300" : ""}`}
        >
          हि
        </button>
        <span className="text-white">|</span>
        <button
          onClick={() => toggleLanguage("en")}
          className={`text-white font-semibold ${language === "en" ? "underline text-yellow-300" : ""}`}
        >
          EN
        </button>
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
