import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWave, setShowWave] = useState(true);
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const handleLogoClick = (e) => {
    e.preventDefault();
    setShowWave((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

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
        "Awards and Achievements",
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
        "कार्यक्रम",
        "गैलरी",
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
    { link: "/Awards" },
    { link: "/Report" },
    { link: "/contact" },
  ];

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* ===== White Top Section ===== */}
      <div
        className={`relative w-full bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Left: Waves/NSS Logo Toggle */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center flex-shrink-0"
        >
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300"
          />
        </a>

        {/* Center: MITAOE Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img
            src="/assets/mitAoe.jpg"
            alt="MITAOE Logo"
            className="h-20 md:h-24 object-contain"
          />
        </div>

        {/* Right: Social Icons + Language Button */}
        <div className="flex flex-col items-end space-y-2">
          {/* 🔗 Social Icons Row */}
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/waves_mitaoe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-white text-lg" />
            </a>

            <a
              href="https://youtube.com/@waves_mitaoe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
          </div>

          {/* 🌐 Language Button */}
          <button
            onClick={toggleLanguage}
            className="bg-[#1a237e] text-white px-2 py-2 rounded-md text-sm hover:bg-[#303f9f] transition"
          >
            {translations[language].button}
          </button>
        </div>
      </div>

      {/* ===== Blue Navigation Bar ===== */}
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
          <ul className="flex-1 flex flex-wrap items-center justify-center gap-6 relative">
            {Links.map((item, index) => {
              const label = translations[language].links[index];

              // Dropdown for Events
              if (label === "Events" || label === "कार्यक्रम") {
                return (
                  <li
                    key={index}
                    className="relative group flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.link}
                      className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 flex items-center hover:text-yellow-400 transition-all duration-200 ${
                        location.pathname === item.link
                          ? "border-b-2 border-yellow-400"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      {label}
                    </Link>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 mt-1 w-52 bg-[#0d1b6b] border border-blue-900 rounded-md shadow-lg py-2 z-50">
                        <li>
                          <Link
                            to="/events/guestlecture"
                            className="block px-4 py-2 text-white hover:bg-blue-800"
                          >
                            Guest Lectures
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/events/workshops"
                            className="block px-4 py-2 text-white hover:bg-blue-800"
                          >
                            Workshops
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/events/socialoutreach"
                            className="block px-4 py-2 text-white hover:bg-blue-800"
                          >
                            Social Outreach
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/events/scicon"
                            className="block px-4 py-2 text-white hover:bg-blue-800"
                          >
                            Scicon
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }

              // Regular Links
              return (
                <li key={index} className="flex items-center">
                  <Link
                    to={item.link}
                    className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 hover:text-yellow-400 transition-all duration-200 ${
                      location.pathname === item.link
                        ? "border-b-2 border-yellow-400"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

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
          <div className="fixed top-[150px] right-0 w-64 h-[calc(100vh-150px)] bg-white z-50 shadow-lg overflow-y-auto">
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

              {/* Mobile Language Switch */}
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
