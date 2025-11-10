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

  // Change navbar shadow when scrolling (optional)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto toggle logo every 5 seconds (keeps auto-switching)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave((prev) => !prev)
    }, 5000) // 5000 ms = 5s
    return () => clearInterval(interval)
  }, [])

  // Manual toggle when clicking the logo area
  const handleLogoClick = (e) => {
    e.preventDefault()
    setShowWave((prev) => !prev)
  }

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      {/* ===== White logo strip (only logos) ===== */}
      <div
        className={`w-full bg-white flex justify-center items-center gap-8 py-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* We keep toggling behavior on click for the left logo image */}
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <img
            src={showWave ? "/assets/waves.png" : "/assets/NSS.png"}
            alt={showWave ? "Wave Logo" : "NSS Logo"}
            className="h-20 md:h-28 object-contain transition-transform duration-300 cursor-pointer"
            style={{
              // neutral filters so both logos look natural on white
              filter: "brightness(1) contrast(1)",
            }}
          />
        </a>

        {/* If you want both logos visible side-by-side (uncomment next lines) */}
        {/* <img src="/assets/waves.png" alt="Wave Logo" className="h-20 md:h-28 object-contain" />
        <img src="/assets/NSS.png" alt="NSS Logo" className="h-20 md:h-28 object-contain" /> */}
      </div>

      {/* ===== Blue navigation bar below white strip ===== */}
      <div className="bg-[#1a237e] flex items-center justify-center h-[64px]">
        <div className="max-w-[2000px] w-full px-4 md:px-20 lg:px-24 flex items-center">
          {/* Left space can hold mobile menu icon */}
          <div className="flex items-center">
            {/* Mobile icon (visible on small screens) */}
            <div className="sm:hidden mr-2">
              <IoMenu
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          {/* Center links */}
          <div className="flex-1 flex justify-center">
            {Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className={`text-white font-semibold px-6 py-2 uppercase tracking-wide hover:bg-[#283593] transition-all duration-200 ${
                  location.pathname === link.link
                    ? "border-b-4 border-white"
                    : "border-b-4 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right empty spacer or icons placeholder */}
          <div className="flex items-center justify-end w-1/4">
            {/* Add any right-side icons if needed */}
          </div>
        </div>
      </div>

      {/* ===== Mobile sidebar (simple) ===== */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[110px] right-0 w-64 h-[calc(100vh-110px)] bg-white z-50 shadow-lg">
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
