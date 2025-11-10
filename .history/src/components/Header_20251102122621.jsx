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
    const location = useLocation()
    const isHomePage = location.pathname === "/"

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
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
<Link className="flex items-center h-full gap-3" to={"/"}>
    <img
        src="/assets/waves.png"
        alt="Waves Logo"
        className="h-10 md:h-14 object-contain drop-shadow-lg"
        style={{
            filter: "invert(1) brightness(2) contrast(1.2)",
        }}
    />
    <img
        src="/assets/NSS.png"
        alt="NSS Logo"
        className="h-10 md:h-14 object-contain drop-shadow-lg"
    />
</Link>


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

                <div className="sm:hidden">
                    <IoMenu
                        className="text-white text-3xl cursor-pointer hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                {isOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile sidebar */}
                        <div className="fixed top-[80px] right-0 w-64 h-[calc(100vh-80px)] bg-[#030014]/95 backdrop-blur-xl shadow-2xl border-l border-white/10 z-40 transform transition-transform duration-300 ease-out">
                            <div className="flex flex-col p-6 space-y-2">
                                <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4 px-2">
                                    Navigation
                                </div>
                                {Links.map((link) => (
                                    <Link
                                        className={`text-white font-normal px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center transform active:scale-95
                                            ${
                                                location.pathname === link.link
                                                    ? "bg-white/20 font-medium shadow-lg scale-105 border border-white/10"
                                                    : "bg-transparent"
                                            }
                                        `}
                                        style={{ fontSize: "1.05rem" }}
                                        to={link.link}
                                        key={link.name}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-60"></span>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
