import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Vision, Events, Gallery } from "./pages";
import { Header, Footer, StarBackground } from "./components";

const AppContent = () => {
  const [language, setLanguage] = useState("en"); // default English
  const location = useLocation();

  // ✅ Show Header + Language Switch only on Home page
  const showHeader = location.pathname === "/";

  return (
    <div>
      <StarBackground />

      {showHeader && (
        <>
          {/* 🌐 Language Bar */}
          <div className="language-switch">
            <button className="lang" onClick={() => setLanguage("hi")}>
              हि
            </button>
            <button className="lang" onClick={() => setLanguage("en")}>
              EN
            </button>
          </div>

          <Header language={language} />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/vision" element={<Vision language={language} />} />
        <Route path="/events" element={<Events language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<Gallery language={language} />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  );
};

// ✅ Wrap AppContent inside BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
