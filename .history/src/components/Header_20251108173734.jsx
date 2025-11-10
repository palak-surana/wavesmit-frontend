// src/components/Header.jsx  (replace existing Header/Navbar file)
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWave, setShowWave] = useState(true);
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(null); // "events" | "reports" | "awards" | null
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setShowWave(p => !p), 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => setLanguage(s => (s === "en" ? "hi" : "en"));

  const translations = {
    en: {
      links: [
        "Home",
        "About Us",
        "Vision",
        "Events",
        "Gallery",
        "NSS",
        "Awards & Achievements",
        "Reports",
        "Contact",
      ],
      button: "🇮🇳 हिंदी",
    },
    hi: {
      links: [
        "मुखपृष्ठ",
        "हमारे बारे में",
        "दृष्टिकोण",
        "कार्यक्रम",
        "गैलरी",
        "एनएसएस",
        "पुरस्कार और उपलब्धियां",
        "रिपोर्ट्स",
        "संपर्क करें",
      ],
      button: "🇬🇧 English",
    },
  };

  const Links = [
    { link: "/" },
    { link: "/about" },
    { link: "/vision" },
    { link: "/events" },
    { link: "/gallery" },
    { link: "/nss" },
    { link: "/awards" },   // <-- main awards link (dropdown)
    { link: "/reports" },
    { link: "/contact" },
  ];

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* White top */}
      <div className={`relative w-full bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 ${scrolled ? "shadow-md" : ""}`}>
        <a href="/" onClick={(e) => { e.preventDefault(); setShowWave(p => !p); }} className="flex items-center flex-shrink-0">
          <img src={showWave ? "/assets/waves.png" : "/assets/NSS.png"} alt="logo" className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300" />
        </a>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img src="/assets/mitAoe.jpg" alt="MITAOE" className="h-20 md:h-24 object-contain" />
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/waves_mitaoe" target="_blank" rel="noreferrer" className="w-6 h-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="https://youtube.com/@waves_mitaoe" target="_blank" rel="noreferrer" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center transition-all duration-300">
              <FaYoutube className="text-white text-lg" />
            </a>
          </div>

          <button onClick={toggleLanguage} className="bg-[#1a237e] text-white px-2 py-1 rounded-md text-sm hover:bg-[#303f9f] transition">
            {translations[language].button}
          </button>
        </div>
      </div>

      {/* Blue nav */}
      <div className="bg-[#1a237e] flex items-center justify-center">
        <div className="max-w-[2000px] w-full flex items-center justify-between px-4 md:px-10">
          <div className="sm:hidden">
            <IoMenu className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(s => !s)} />
          </div>

          <ul className="flex-1 flex flex-wrap items-center justify-center gap-6 relative">
            {Links.map((item, index) => {
              const label = translations[language].links[index];

              // Events dropdown
              if (item.link === "/events") {
                return (
                  <li key="events" className="relative group" onMouseEnter={() => setDropdownOpen("events")} onMouseLeave={() => setDropdownOpen(null)}>
                    <Link to="/events" className={`text-white font-semibold text-[15px] uppercase px-3 py-2 hover:text-yellow-400 ${location.pathname.startsWith("/events") ? "border-b-2 border-yellow-400" : "border-b-2 border-transparent"}`}>{label}</Link>

                    {dropdownOpen === "events" && (
                      <ul className="absolute top-full left-0 mt-1 w-56 bg-[#0d1b6b] border border-blue-900 rounded-md shadow-lg py-2 z-50">
                        <li><Link to="/events/guest-lectures" className="block px-4 py-2 text-white hover:bg-blue-800">Guest Lectures</Link></li>
                        <li><Link to="/events/workshops" className="block px-4 py-2 text-white hover:bg-blue-800">Workshops</Link></li>
                        <li><Link to="/events/social-outreach" className="block px-4 py-2 text-white hover:bg-blue-800">Social Outreach</Link></li>
                        <li><Link to="/events/scicon" className="block px-4 py-2 text-white hover:bg-blue-800">Scicon</Link></li>
                        <li><Link to="/events/experiential-learning" className="block px-4 py-2 text-white hover:bg-blue-800">Experiential Learning</Link></li>
                        <li><Link to="/events/internships" className="block px-4 py-2 text-white hover:bg-blue-800">Internships</Link></li>
                        <li><Link to="/events/mental-health-and-wellbeing" className="block px-4 py-2 text-white hover:bg-blue-800">Mental Health & Wellbeing</Link></li>
                      </ul>
                    )}
                  </li>
                );
              }

              // Awards dropdown (new)
              if (item.link === "/awards") {
                return (
                  <li key="awards" className="relative group" onMouseEnter={() => setDropdownOpen("awards")} onMouseLeave={() => setDropdownOpen(null)}>
                    <Link to="/awards" className={`text-white font-semibold text-[15px] uppercase px-3 py-2 hover:text-yellow-400 ${location.pathname.startsWith("/awards") ? "border-b-2 border-yellow-400" : "border-b-2 border-transparent"}`}>{label}</Link>

                    {dropdownOpen === "awards" && (
                      <ul className="absolute top-full left-0 mt-1 w-56 bg-[#0d1b6b] border border-blue-900 rounded-md shadow-lg py-2 z-50">
                        <li><Link to="/awards/csr-fund" className="block px-4 py-2 text-white hover:bg-blue-800">CSR Fund</Link></li>
                        <li><Link to="/awards/copyright" className="block px-4 py-2 text-white hover:bg-blue-800">Copyright</Link></li>
                        <li><Link to="/awards/appreciation-letters" className="block px-4 py-2 text-white hover:bg-blue-800">Appreciation Letters</Link></li>
                      </ul>
                    )}
                  </li>
                );
              }

              // Reports dropdown (kept)
              if (item.link === "/reports") {
                return (
                  <li key="reports" className="relative group" onMouseEnter={() => setDropdownOpen("reports")} onMouseLeave={() => setDropdownOpen(null)}>
                    <Link to="/reports" className={`text-white font-semibold text-[15px] uppercase px-3 py-2 hover:text-yellow-400 ${location.pathname.startsWith("/reports") ? "border-b-2 border-yellow-400" : "border-b-2 border-transparent"}`}>{label}</Link>

                    {dropdownOpen === "reports" && (
                      <ul className="absolute top-full left-0 mt-1 w-56 bg-[#0d1b6b] border border-blue-900 rounded-md shadow-lg py-2 z-50">
                        <li><Link to="/reports/nss" className="block px-4 py-2 text-white hover:bg-blue-800">NSS Reports</Link></li>
                        <li><Link to="/reports/waves" className="block px-4 py-2 text-white hover:bg-blue-800">WAVES Reports</Link></li>
                      </ul>
                    )}
                  </li>
                );
              }

              // regular
              return (
                <li key={item.link}>
                  <Link to={item.link} className={`text-white font-semibold text-[15px] uppercase px-3 py-2 hover:text-yellow-400 ${location.pathname === item.link ? "border-b-2 border-yellow-400" : "border-b-2 border-transparent"}`}>{label}</Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden sm:block w-[30px]" />
        </div>
      </div>

      {/* Mobile menu (unchanged behaviour) */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-[150px] right-0 w-64 h-[calc(100vh-150px)] bg-white z-50 shadow-lg overflow-y-auto">
            <div className="p-4 space-y-2">
              {Links.map((item, idx) => (
                <Link key={idx} to={item.link} onClick={() => setIsOpen(false)} className="block text-black px-3 py-2 rounded hover:bg-gray-100">
                  {translations[language].links[idx]}
                </Link>
              ))}

              <button onClick={() => toggleLanguage()} className="w-full bg-[#1a237e] text-white py-2 mt-3 rounded-md">
                {translations[language].button}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
