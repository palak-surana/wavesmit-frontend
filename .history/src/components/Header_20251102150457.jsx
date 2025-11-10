import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/wavesnsslogo.png"; // ✅ Waves + NSS combined logo

const Links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Vision", link: "/vision" },
  { name: "Objectives", link: "/objectives" },
  { name: "Regular Activities", link: "/regular-activities" },
  { name: "Awards & Awardees", link: "/awards" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full shadow-md">
      {/* ===== Top Accessibility Bar ===== */}
      <div className="top-bar">
        <span>हिन्दी</span>
        <span>Accessibility</span>
        <span>A+</span>
        <span>A–</span>
      </div>

      {/* ===== White Section (Logo + Title) ===== */}
      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="Waves NSS Logo" />
        </div>
        <div className="title">
          <h1>Welcome to NSS and Wave</h1>
          <h2>MIT Academy of Engineering</h2>
        </div>
      </div>

      {/* ===== Blue Navigation Bar ===== */}
      <nav className="navbar">
        <div className="hidden md:flex items-center justify-center gap-8">
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className={`text-white font-medium text-sm md:text-base uppercase hover:text-yellow-400 transition ${
                location.pathname === link.link ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden">
          <IoMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* ===== Mobile Dropdown ===== */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50">
            {Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-[#1a237e] hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
