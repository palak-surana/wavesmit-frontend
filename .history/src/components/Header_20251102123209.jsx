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

  // handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // alternate logos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev)
    }, 30000) // 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`w-screen h-[80px] md:h-[90px] fixed top-0 left-0 right-0 
      ${
        scrolled
          ? "shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]"
          : "bg-transparent"
      } 
      backdrop-blur-md z-50 transition-all duration-300`}
    >
      <div className="max-w-[2000px] mx-auto h-full flex flex-row items-center justify-between px-4 md:px-20 lg:px-24">

        {/* 👇 LOGO AREA */}
        <Link className="flex items-center h-full" to={"/"}>
          {showWave ? (
            <img
              src="/assets/waves.png"
              alt="Wave Logo"
              className="h-12 md:h-16 object-contain drop-shadow-lg"
              style={{
                filter: "invert(1) brightness(2) contrast(1.2)",
              }}
            />
          ) : (
            <img
              src="/assets/NSS.png"
              alt="NSS Logo"
              className="h-12 md:h-16 object-contain drop-shadow-lg"
              style={{
                filter: "brightness(0) invert(1) contrast(1.5)",
              }}
            />
          )}
        </Link>

        {/* 👇 NAVIGATION LINKS */}
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

        {/* 👇 MOBILE MENU BUTTON */}
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
