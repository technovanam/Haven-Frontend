import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BookDemoModal from "./BookDemoModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `transition-colors duration-300 whitespace-nowrap ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `text-lg whitespace-nowrap ${
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
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 min-w-0">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img
                src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/logo_jgnqdd.jpg"
                alt="Haven Tutors Logo"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* Center Navigation (flexible width) */}
          <nav className="hidden md:flex justify-center flex-1 min-w-0">
            <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses}>
                  About&nbsp;Us
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

          {/* Right-side Actions */}
          <div className="hidden md:flex items-center justify-end flex-shrink-0">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center px-4 lg:px-5 py-2 rounded-full bg-blue-600 text-white text-sm lg:text-base font-medium hover:opacity-95 transition whitespace-nowrap"
            >
              <span>Book a demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 lg:ml-3 h-4 w-4"
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
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
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 px-4">
          <li>
            <NavLink to="/" className={mobileNavLinkClasses} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={mobileNavLinkClasses} onClick={closeMenu}>
              About&nbsp;Us
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
          <li className="pt-2">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center justify-center min-w-max px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition touch-manipulation"
            >
              Book a demo
            </button>
          </li>
        </ul>
      </div>

      {/* Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
