import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWave, setShowWave] = useState(true);
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto toggle between NSS and Waves logos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual logo toggle
  const handleLogoClick = (e) => {
    e.preventDefault();
    setShowWave((prev) => !prev);
  };

  // Language toggle
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  // Translations
  const translations = {
    en: {
      welcome: "Welcome to Wave and NSS",
      college: "MIT Academy of Engineering",
      links: [
        "Home",
        "About Us",
        "Vision",
        "Events",
        "Gallery",
        "NSS",
        "Awards and Achievment",
        "Report",
        "Contact",
      ],
      button: "🇮🇳 हिंदी",
    },
    hi: {
      welcome: "वेव और एनएसएस में आपका स्वागत है",
      college: "एमआईटी एकेडमी ऑफ इंजीनियरिंग",
      links: [
        "मुखपृष्ठ",
        "हमारे बारे में",
        "दृष्टिकोण",
        "उद्देश्य",
        "नियमित गतिविधियाँ",
        "एनएसएस",
        "पुरस्कार और उपलब्धियां",
        "रिपोर्ट",
        "संपर्क करें",
      ],
      button: "🇬🇧 English",
    },
  };

  const Links = [
    { link: "/home" },
    { link: "/about" },
    { link: "/vision" },
    { link: "/events" },
    { link: "/gallery" },
    { link: "/NSS" },
    { link: "/Awards and Achievment" },
    { link: "/Report" },
    { link: "/contact" },
  ];

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* ===== White top section ===== */}
      <div
        className={`w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Left: Waves/NSS logo toggle */}
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300"
          />
        </a>

        {/* Center: MITAOE Logo (NEW ADDITION) */}
        <div className="flex justify-center items-center flex-1 mt-4 md:mt-0">
          <img
            src="/assets/mitlogo.png"
            alt="MITAOE Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Right: Language Button */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-[#1a237e] text-white px-3 py-2 rounded-md text-sm hover:bg-[#303f9f] transition"
        >
          {translations[language].button}
        </button>
      </div>

      {/* ===== Blue navigation bar ===== */}
      <div className="bg-[#1a237e] flex items-center justify-center">
        <div className="max-w-[2000px] w-full flex items-center justify-between px-4 md:px-10">
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <IoMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-wrap justify-center gap-6">
            {Links.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 hover:text-yellow-400 transition-all duration-200 ${
                  location.pathname === item.link
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-transparent"
                }`}
              >
                {translations[language].links[index]}
              </Link>
            ))}
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden sm:block w-[30px]" />
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[150px] right-0 w-64 h-[calc(100vh-150px)] bg-white z-50 shadow-lg">
            <div className="p-4 space-y-2">
              {Links.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                >
                  {translations[language].links[index]}
                </Link>
              ))}
              {/* Mobile language switch */}
              <button
                onClick={toggleLanguage}
                className="w-full bg-[#1a237e] text-white py-2 mt-3 rounded-md"
              >
                {translations[language].button}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
