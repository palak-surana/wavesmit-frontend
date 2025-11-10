import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          WAVES MITAOE
        </Link>

        {/* Navigation Menu */}
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>
          </li>

          {/* Dropdown Menu for Events */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none">
              Events ▾
            </button>

            {/* Dropdown Box */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <li>
                  <Link
                    to="/events/guest-lectures"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Guest Lectures
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events/scion"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Scion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events/workshops"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Workshops
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/team"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Team
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
