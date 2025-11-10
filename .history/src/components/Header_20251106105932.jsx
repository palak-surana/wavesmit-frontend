import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWave, setShowWave] = useState(true);
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
      dropdown: ["Guest Lectures", "Scion", "Workshops"],
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
      dropdown: ["अतिथि व्याख्यान", "सायन", "कार्यशालाएं"],
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
      {/* ===== White Top Section ===== */}
      <div
        className={`relative w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Left: Logo Toggle */}
        <a href="/" onClick={handleLogoClick} className="flex items-center flex-shrink-0">
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300"
          />
        </a>

        {/* Center: MITAOE Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img src="/assets/mitlogo.jpg" alt="MITAOE Logo" className="h-24 md:h-28 object-contain" />
        </div>

        {/* Right: Language Button */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-[#1a237e] text-white px-3 py-2 rounded-md text-sm hover:bg-[#303f9f] transition"
        >
          {translations[language].button}
        </button>
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
          <div className="flex-1 flex flex-wrap justify-center gap-6 relative">
            {Links.map((item, index) => {
              // For "Events" dropdown
              if (translations[language].links[index] === translations[language].links[3]) {
                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 hover:text-yellow-400 transition-all duration-200 flex items-center ${
                        location.pathname.startsWith("/events")
                          ? "border-b-2 border-yellow-400"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      {translations[language].links[index]}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <ul className="absolute left-0 top-full mt-1 w-48 bg-[#141433] rounded-md shadow-lg py-2 z-50">
                        <li>
                          <Link
                            to="/events/guest-lectures"
                            className="block px-4 py-2 text-white hover:bg-blue-600"
                          >
                            {translations[language].dropdown[0]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/events/scion"
                            className="block px-4 py-2 text-white hover:bg-blue-600"
                          >
                            {translations[language].dropdown[1]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/events/workshops"
                            className="block px-4 py-2 text-white hover:bg-blue-600"
                          >
                            {translations[language].dropdown[2]}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                );
              }

              // Other regular links
              return (
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
              );
            })}
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
              {Links.map((item, index) => {
                // For "Events" dropdown in mobile view
                if (translations[language].links[index] === translations[language].links[3]) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full text-left text-black px-3 py-2 rounded hover:bg-gray-100 flex justify-between items-center"
                      >
                        {translations[language].links[index]}
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            isDropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-6 space-y-1">
                          <Link
                            to="/events/guest-lectures"
                            onClick={() => setIsOpen(false)}
                            className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                          >
                            {translations[language].dropdown[0]}
                          </Link>
                          <Link
                            to="/events/scion"
                            onClick={() => setIsOpen(false)}
                            className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                          >
                            {translations[language].dropdown[1]}
                          </Link>
                          <Link
                            to="/events/workshops"
                            onClick={() => setIsOpen(false)}
                            className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                          >
                            {translations[language].dropdown[2]}
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular links in mobile
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                  >
                    {translations[language].links[index]}
                  </Link>
                );
              })}

              {/* Mobile language button */}
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
