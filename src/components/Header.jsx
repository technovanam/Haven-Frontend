import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BookDemoModal from "./BookDemoModal";

// ============================================================
// MAIN HEADER COMPONENT
// ============================================================

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `text-lg ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  const closeMenu = () => setIsOpen(false);

  const openDemoModal = () => {
    closeMenu();
    setIsModalOpen(true);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo (Takes up 1/3 of the space on desktop) */}
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img
                src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/logo_jgnqdd.jpg"
                alt="Haven Tutors Logo"
                className="h-10 w-auto object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* Centered Desktop Navigation (Takes up 1/3 of the space) */}
          {/* CHANGE 2: Removed `absolute`, `transform`, etc. Now part of the flex flow. */}
          <nav className="hidden md:flex justify-center md:w-1/3">
            <ul className="flex items-center space-x-8">
              <li>
                {/* CHANGE 3: Using the pure-Tailwind `className` function */}
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={navLinkClasses}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right-side actions (Takes up 1/3 of the space) */}
          {/* CHANGE 4: Added `justify-end` to push the button to the far right. */}
          <div className="hidden md:flex items-center justify-end md:w-1/3">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition"
            >
              <span>Book a demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button (Takes up the right side on mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* This uses a simple CSS transition for a smooth slide-down effect */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 py-5">
          <li>
            <NavLink to="/" className={mobileNavLinkClasses} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={mobileNavLinkClasses} onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={mobileNavLinkClasses} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            {/* CHANGE 5: Styled mobile button to match desktop and be "finger-friendly" */}
            <button
              onClick={openDemoModal}
              className="inline-flex items-center justify-center w-auto px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition"
            >
              Book a demo
            </button>
          </li>
        </ul>
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;