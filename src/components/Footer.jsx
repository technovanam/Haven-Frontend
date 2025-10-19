import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = ({ onBookDemoClick }) => {

    return (
        <footer className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    
                    {/* Column 1: Logo and Contact Info */}
                    <div>
                        <img 
                            src={logo}
                            alt="Haven Tutors Logo" 
                            className="h-12 w-auto object-contain mb-6 mix-blend-multiply" 
                        />
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Empowering students worldwide with personalized online tutoring across all major curricula.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 group">
                                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Phone size={16} className="text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">+91 9606840892</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Mail size={16} className="text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">info@haventutor.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Book a Free Demo
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Social Icons */}
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block">
                            Follow Us
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                            <a href="https://facebook.com" aria-label="Facebook" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                                <FaLinkedinIn size={18} />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" className="bg-white hover:bg-pink-600 text-pink-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" className="bg-white hover:bg-red-600 text-red-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-sm text-slate-600">
                        Copyright © 2025 <span className="text-blue-600 font-semibold">Haven Tutors</span> | All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/919606840892" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
        </footer>
    );
};

export default Footer;