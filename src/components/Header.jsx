import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeLinkStyle = {
        color: '#0284c7', // sky-600
        fontWeight: '600',
    };

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[0px]">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                             <span className="text-2xl font-bold text-slate-800">✳︎ logo</span>
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center space-x-8">
                            <li><NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300">Home</NavLink></li>
                            <li><NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300">About Us</NavLink></li>
                            <li><NavLink to="/services" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300">Services</NavLink></li>
                            
                            <li><NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300">Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <Link 
                            to="/book-demo" 
                            className="bg-sky-600 text-white font-semibold py-4 px-6 rounded-md hover:bg-sky-700 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            Book Your Demo
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-sky-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white pb-4">
                    <ul className="flex flex-col items-center space-y-4">
                        <li><NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600" onClick={() => setIsOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/services" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600" onClick={() => setIsOpen(false)}>Services</NavLink></li>
                        <li><NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
                        <li><NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-slate-600" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
                        <li>
                            <Link 
                                to="/book-demo" 
                                className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-sky-700 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Your Demo
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;

