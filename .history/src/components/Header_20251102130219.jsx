import { IoMenu } from "react-icons/io5"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Links = [
  { name: "About", link: "/about" },
  { name: "Vision", link: "/vision" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showWave, setShowWave] = useState(true)
  const location = useLocation()

  // Change navbar shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto toggle logo every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Manual toggle on click
  const handleLogoClick = () => setShowWave((prev) => !prev)

  return (
    <div
      className={`w-screen h-[80px] md:h-[90px] fixed top-0 left-0 right-0 
      ${scrolled ? "shadow-lg shadow-[#2A0E61]/30 bg-white/40" : "bg-white/20"}

      backdrop-blur-md z-50 transition-all duration-300`}
    >
      <div className="max-w-[2000px] mx-auto h-full flex flex-row items-center justify-between px-4 md:px-20 lg:px-24">
        
        {/* --- Logo Section --- */}
        <Link className="flex items-center h-full" to={"/"} onClick={handleLogoClick}>
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className={`h-16 md:h-24 object-contain drop-shadow-lg transition-opacity duration-700 ease-in-out ${
              showWave ? "opacity-100" : "opacity-100"
            }`}
            style={{
              filter: showWave
                ? "invert(1) brightness(1.8) contrast(1.2)"
                : "brightness(1.2) contrast(1.1)",
            }}
          />
        </Link>

        {/* --- Navigation Links --- */}
        <div className="hidden sm:flex items-center gap-3 ml-auto">
          {Links.map((link) => (
            <Link
              className={`text-white font-normal px-5 py-2 rounded-lg transition-all duration-300 transform active:scale-95
                ${
                  location.pathname === link.link
                    ? "bg-white/20 font-medium shadow-lg scale-105 border border-white/10"
                    : "bg-transparent"
                }
              `}
              style={{ fontSize: "1.05rem" }}
              to={link.link}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- Mobile Menu --- */}
        <div className="sm:hidden">
          <IoMenu
            className="text-white text-3xl cursor-pointer hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
