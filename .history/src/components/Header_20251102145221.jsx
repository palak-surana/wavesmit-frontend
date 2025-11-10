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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showWave, setShowWave] = useState(true)
  const location = useLocation()

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto toggle logo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Manual toggle on click
  const handleLogoClick = (e) => {
    e.preventDefault()
    setShowWave((prev) => !prev)
  }

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* ===== White logo strip (Logo + Welcome Text Centered) ===== */}
      <div
        className={`w-full bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* --- Left: Logo --- */}
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300"
            style={{
              filter: "brightness(1) contrast(1)",
            }}
          />
        </a>

        {/* --- Center: Welcome Text --- */}
        <div className="flex-1 text-center mt-3 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a237e]">
            Welcome to Wave and 
          </h1>
          <p className="text-gray-700 text-base md:text-lg font-medium mt-1">
            MIT Academy of Engineering
          </p>
        </div>

        {/* --- Right: Spacer (for balance) --- */}
        <div className="hidden md:flex w-[100px]" />
      </div>

      {/* ===== Blue navigation bar (below white section) ===== */}
      <div className="bg-[#1a237e] flex items-center justify-center h-[65px]">
        <div className="max-w-[2000px] w-full flex items-center justify-between px-4 md:px-10">
          {/* Left: Mobile Menu Button */}
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

          {/* Right: Spacer */}
          <div className="hidden sm:block w-[30px]" />
        </div>
      </div>

      {/* ===== Mobile Menu (Side Drawer) ===== */}
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

export default Navbar
