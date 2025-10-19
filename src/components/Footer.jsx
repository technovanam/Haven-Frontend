import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { ArrowUp, Phone, Mail } from 'lucide-react';

// The list of syllabuses
const syllabusList = [
  "ICSE", "IGCSE", "CBSE", "GCSE", "STATE & MATRIC", "IB", "AUSTRALIAN",
  "A – LEVEL", "BRITISH", "CAMBRIDGE", "CANADIAN", "EDEXEL", "SINGAPORE"
];

// --- UPDATED: Automatically split the list into two ---
const midIndex = Math.ceil(syllabusList.length / 2);
const syllabusCol1 = syllabusList.slice(0, midIndex); // First half
const syllabusCol2 = syllabusList.slice(midIndex); // Second half

const Footer = ({ onBookDemoClick }) => {

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
                    
                    {/* Column 1: Logo and Contact Info (lg:col-span-4) - UNCHANGED */}
                    <div className="lg:col-span-4">
                        <img 
                            src="https://via.placeholder.com/130x40.png?text=CLAPS+Logo" 
                            alt="Claps Learn Logo" 
                            className="h-10 mb-5" 
                        />
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

                    {/* Column 2: Online Platform (lg:col-span-2) - UNCHANGED */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-base text-slate-800 mb-4">Online Platform</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Home</Link></li>
                            <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 capitalize">About Us</Link></li>
                            <li><Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Services</Link></li>
                            <li><Link to="/contact" className="text-sm text-slate-600 hover:text-blue-600 capitalize">Contact</Link></li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 capitalize text-left"
                                >
                                    Book a Free Demo
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* --- UPDATED SECTION --- */}
                    {/* Column 3: Syllabus (lg:col-span-4) - Now wider */}
                    <div className="lg:col-span-4">
                        <h3 className="font-bold text-base text-slate-800 mb-4">Syllabus</h3>
                        
                        {/* Nested 2-column grid to split the list */}
                        <div className="grid grid-cols-2 gap-x-8">
                            {/* Sub-column 1 */}
                            <ul className="space-y-2">
                                {syllabusCol1.map((syllabus) => (
                                    <li key={syllabus} className="text-sm text-slate-600">
                                        {syllabus}
                                    </li>
                                ))}
                            </ul>
                            {/* Sub-column 2 */}
                            <ul className="space-y-2">
                                {syllabusCol2.map((syllabus) => (
                                    <li key={syllabus} className="text-sm text-slate-600">
                                        {syllabus}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Column 4: Social Icons (lg:col-span-2) - Now narrower */}
                    <div className="lg:col-span-2">
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

            {/* Copyright Bar - UNCHANGED */}
            <div className="border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-sm text-slate-500">
                        Copyright 2025 <a href="https://clapslearn.com" className="text-blue-600 hover:underline">Haven Tutors</a> | All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Floating Action Buttons - UNCHANGED */}
            <div>
                <a 
                    href="https://wa.me/917984141033" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="fixed bottom-20 right-5 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={24} />
                </a>
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