import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

// ============================================================
// MAIN FOOTER COMPONENT
// ============================================================

const Footer = ({ onBookDemoClick }) => {

    return (
        <footer className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 justify-items-center lg:justify-items-start text-center lg:text-left">
                    
                    <div>
                        <img 
                            src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/logo_jgnqdd.jpg"
                            alt="Haven Tutors Logo" 
                            className="h-12 w-auto object-contain mb-6 mx-auto lg:mx-0"
                            loading="lazy"
                        />
                        <div className="space-y-3 text-sm mb-6">
                            {/* Contact items align left on desktop via `lg:justify-start` */}
                            <div className="flex items-center gap-3 group justify-center lg:justify-start">
                                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Phone size={14} className="text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">+91 9606840892</span>
                            </div>
                            <div className="flex items-center gap-3 group justify-center lg:justify-start">
                                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Mail size={14} className="text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">info@haventutor.com</span>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block pb-1">
                                Follow Us
                                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                <a href="https://www.facebook.com/haventutors" aria-label="Facebook" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaFacebookF size={16} />
                                </a>
                                <a href="https://www.linkedin.com/in/haven-tutors-5b89b638b" aria-label="LinkedIn" className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaLinkedinIn size={16} />
                                </a>
                                <a href="https://www.instagram.com/haven__tutors?igsh=MXRrcmk4OGtuYTJveA==" aria-label="Instagram" className="bg-white hover:bg-pink-600 text-pink-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaInstagram size={16} />
                                </a>
                                <a href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services." aria-label="WhatsApp" className="bg-white hover:bg-green-500 text-green-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaWhatsapp size={16} />
                                </a>
                                <a href="https://youtube.com/@haventutors?si=q8Tr5bEIqM0NHExY" aria-label="YouTube" className="bg-white hover:bg-red-600 text-red-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaYoutube size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block pb-1">
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

                    {/* Column 3: Subjects */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block pb-1">
                            Subjects
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    English & Grammar
                                </button>
                            </li>
                            {/* ... other subject links ... */}
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Mathematics
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Physics
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Chemistry
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Biology
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Computer Science
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Social Studies
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Services */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block pb-1">
                            Services
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-3A00">
                                    One-on-One Tutoring
                                </Link>
                            </li>
                             {/* ... other service links ... */}
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Group Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Homework Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Exam Preparation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Doubt Clearing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Personalized Learning
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Interactive Classes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Curriculum */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-5 relative inline-block pb-1">
                            Curriculum
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    CBSE
                                </button>
                            </li>
                            {/* ... other curriculum links ... */}
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    ICSE
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    IGCSE
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    State Board
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    IB
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    A-Level
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onBookDemoClick} 
                                    className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Cambridge
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-xs sm:text-sm text-slate-600">
                        Copyright © 2025 <span className="text-blue-600 font-semibold">Haven Tutors</span> | All Rights Reserved
                    </p>
                </div>
            </div>

            <a 
                href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 bg-green-500 text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={20} className="sm:hidden" />
                <FaWhatsapp size={24} className="hidden sm:block" />
            </a>
        </footer>
    );
};

export default Footer;