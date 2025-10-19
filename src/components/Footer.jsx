import React from 'react';
import { Link } from 'react-router-dom';
// Import icons
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6'; // <-- Corrected import path
import { ArrowUp, Phone, Mail } from 'lucide-react'; // <-- Added Phone and Mail icons

// The Footer now accepts a prop `onBookDemoClick` to open your modal
const Footer = ({ onBookDemoClick }) => {

    // Handler for the scroll-to-top button
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-white text-slate-700 border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    
                    {/* Column 1: Logo and Contact Info */}
                    <div className="lg:col-span-4">
                        {/* You should replace this with your actual logo image */}
                        <img 
                            src="https://via.placeholder.com/130x40.png?text=CLAPS+Logo" 
                            alt="Claps Learn Logo" 
                            className="h-10 mb-5" 
                        />
                        {/* UPDATED: Address removed, only phone and email remain */}
                        <div className="space-y-2 text-sm">
                            <p>
                                <a href="tel:+91917984141033" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Phone size={16} className="text-blue-600" />
                                    <span>Call: 917984141033</span>
                                </a>
                            </p>
                            <p>
                                <a href="mailto:hello@clapslearn.com" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Mail size={16} className="text-blue-600" />
                                    <span>Email: hello@clapslearn.com</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Online Platform */}
                    {/* UPDATED: Links changed as requested */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-base text-slate-800 mb-4">Online Platform</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Home</Link></li>
                            <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 capitalize">About Us</Link></li>
                            <li><Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Services</Link></li>
                            <li><Link to="/contact" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Contact</Link></li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} // This triggers the function passed as a prop
                                    className="text-sm text-slate-600 hover:text-blue-600 capitalize text-left"
                                >
                                    Book a Free Demo
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Syllabus */}
                    {/* UPDATED: Changed from links to plain text */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-base text-slate-800 mb-4">Syllabus</h3>
                        <ul className="space-y-2">
                            <li className="text-sm text-slate-600">IGCSE</li>
                            <li className="text-sm text-slate-600">CAIE</li>
                            <li className="text-sm text-slate-600">ICSE</li>
                            <li className="text-sm text-slate-600">IB</li>
                            <li className="text-sm text-slate-600">KERALA</li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Social Icons */}
                    <div className="lg:col-span-4 md:col-span-2">
                        <div className="flex space-x-4 justify-start lg:justify-start">
                            <a href="https://facebook.com" aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" className="text-pink-600 hover:text-pink-800">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="text-sky-500 hover:text-sky-700">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" className="text-red-600 hover:text-red-800">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-sm text-slate-500">
                        Copyright 2025 <a href="https://clapslearn.com" className="text-blue-600 hover:underline">Claps Learn</a> | All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div>
                {/* WhatsApp Button */}
                <a 
                    href="https://wa.me/917984141033" // Add your WhatsApp number here
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="fixed bottom-20 right-5 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={24} />
                </a>

                {/* Scroll to Top Button */}
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;