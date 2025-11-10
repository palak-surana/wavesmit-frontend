import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ for translations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWave, setShowWave] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const { t, i18n } = useTranslation();

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

  // 🌐 Toggle between Hindi and English
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  // Navigation links (keys for translation)
  const navLinks = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "vision", path: "/vision" },
    { key: "events", path: "/events" },
    { key: "gallery", path: "/gallery" },
    { key: "nss", path: "/NSS" },
    { key: "awards", path: "/Awards" },
    { key: "report", path: "/Report" },
    { key: "contact", path: "/contact" },
  ];

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* ===== White Top Section ===== */}
      <div
        className={`relative w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Left: Waves/NSS Logo Toggle */}
        <a href="/" onClick={(e) => e.preventDefault()} className="flex items-center flex-shrink-0">
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300"
            onClick={() => setShowWave((prev) => !prev)}
          />
        </a>

        {/* Center: MITAOE Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img
            src="/assets/mitAoe.jpg"
            alt="MITAOE Logo"
            className="h-24 md:h-28 object-contain"
          />
        </div>

        {/* Right: Language Button */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-[#1a237e] text-white px-3 py-2 rounded-md text-sm hover:bg-[#303f9f] transition"
        >
          {i18n.language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
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
          <ul className="flex-1 flex flex-wrap items-center justify-center gap-6 relative">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.key === "events") {
                return (
                  <li
                    key={item.key}
                    className="relative group flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 flex items-center hover:text-yellow-400 transition-all duration-200 ${
                        isActive
                          ? "border-b-2 border-yellow-400"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      {t(item.key)}
                    </Link>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 mt-1 w-52 bg-[#0d1b6b] border border-blue-900 rounded-md shadow-lg py-2 z-50">
                        <li>
                          <Link to="/events/guestlecture" className="block px-4 py-2 text-white hover:bg-blue-800">
                            {t("guestLectures")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/events/workshops" className="block px-4 py-2 text-white hover:bg-blue-800">
                            {t("workshops")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/events/socialoutreach" className="block px-4 py-2 text-white hover:bg-blue-800">
                            {t("socialOutreach")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/events/scicon" className="block px-4 py-2 text-white hover:bg-blue-800">
                            {t("scicon")}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.key} className="flex items-center">
                  <Link
                    to={item.path}
                    className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 hover:text-yellow-400 transition-all duration-200 ${
                      isActive
                        ? "border-b-2 border-yellow-400"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    {t(item.key)}
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
              {navLinks.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                >
                  {t(item.key)}
                </Link>
              ))}

              {/* Mobile Language Switch */}
              <button
                onClick={toggleLanguage}
                className="w-full bg-[#1a237e] text-white py-2 mt-3 rounded-md"
              >
                {i18n.language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
