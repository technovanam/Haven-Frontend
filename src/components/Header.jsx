import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // 👈 adjust the path to your actual logo file
import BookDemoModal from "./BookDemoModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeLinkStyle = {
    color: "#2563eb", // blue-600
    fontWeight: "600",
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[0px]">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              {/* Replace text with logo image */}
              <img
                src={logo}
                alt="Haven Tutors Logo"
                className="h-10 w-auto object-contain mix-blend-multiply"
              />
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right-side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden bg-white pb-4 shadow-inner">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="bg-slate-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-slate-800 transition-all duration-300"
              >
                Book a demo
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
