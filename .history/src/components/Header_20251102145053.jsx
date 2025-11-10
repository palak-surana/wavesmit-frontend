import { IoMenu } from "react-icons/io5"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Vision", link: "/vision" },
  { name: "Objectives", link: "/objectives" },
  { name: "Regular Activities", link: "/regular-activities" },
  { name: "Awards & Awardees", link: "/awards" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* ===== Top White Bar with Hindi & Accessibility ===== */}
      <div className="w-full bg-white border-b border-gray-200 flex items-center justify-end px-6 py-1 text-sm text-gray-700 font-medium space-x-5">
        <span className="cursor-pointer hover:text-blue-800">हिन्दी</span>
        <span className="cursor-pointer hover:text-blue-800">Accessibility</span>
        <span className="cursor-pointer hover:text-blue-800">A+</span>
        <span className="cursor-pointer hover:text-blue-800">A-</span>
      </div>

      {/* ===== White Section (Logo + Welcome Text) ===== */}
      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4 shadow-sm">
        {/* Left: Waves + NSS Combined Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src="/assets/WavesNSSLogo.png" // <-- replace with your combined logo path
            alt="Waves and NSS Logo"
            className="h-20 md:h-24 object-contain"
          />
        </div>

        {/* Center: Welcome Text */}
        <div className="text-center flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a237e]">
            Welcome to NSS and Wave
          </h1>
          <p className="text-gray-700 text-base md:text-lg font-medium">
            MIT Academy of Engineering
          </p>
        </div>

        {/* Right: Empty space for balance */}
        <div className="w-[120px]" />
      </div>

      {/* ===== Blue Navigation Bar ===== */}
      <div className="bg-[#1a237e] flex items-center justify-center h-[65px]">
        <div className="max-w-[2000px] w-full flex items-center justify-between px-4 md:px-10">
          {/* Left: Mobile Menu Icon */}
          <div className="sm:hidden">
            <IoMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 flex flex-wrap justify-center gap-6">
            {Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className={`text-white font-semibold text-[15px] uppercase tracking-wide px-3 py-2 hover:text-yellow-400 transition-all duration-200 ${
                  location.pathname === link.link
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right spacer for alignment */}
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
              {Links.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-black px-3 py-2 rounded hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
