import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    const [language, setLanguage] = useState("en")

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "hi" : "en")
        // Later you can add logic to change site text dynamically
    }

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">NSS & WAVE</div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/vision">Vision</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>

                {/* Language Toggle Button */}
                <button
                    onClick={toggleLanguage}
                    className="lang-btn"
                    title="Switch Language"
                >
                    {language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
                </button>
            </nav>
        </header>
    )
}

export default Header
