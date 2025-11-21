import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

// ============================================================
// FOOTER COMPONENT
// ============================================================
// This component renders the main footer section of the website.
// It includes:
// - Company logo and contact information (phone, email)
// - Quick navigation links to main pages
// - Subject categories with demo booking functionality
// - Service offerings list
// - Curriculum/board options
// - Social media links (Facebook, LinkedIn, Instagram, WhatsApp, YouTube)
// - Copyright information
// - Floating WhatsApp button for quick contact
// ============================================================

const Footer = ({ onBookDemoClick }) => {

    return (
        <footer className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-700">
            {/* Main footer container with responsive padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

                {/* Footer grid layout - 5 columns on large screens, responsive on smaller devices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 justify-items-center lg:justify-items-start text-center lg:text-left">

                    {/* ============================================================ */}
                    {/* Column 1: Logo, Contact Info & Social Media Links */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        {/* Company Logo */}
                        <img
                            src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/logo_jgnqdd.jpg"
                            alt="Haven Tutors Logo"
                            className="h-10 sm:h-12 w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0"
                            loading="lazy"
                        />

                        {/* Contact Information */}
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm mb-4 sm:mb-6">
                            {/* Phone Number */}
                            <div className="flex items-center gap-2 sm:gap-3 group justify-center lg:justify-start">
                                <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium text-xs sm:text-sm">+91 9606840892</span>
                            </div>

                            {/* Email Address */}
                            <div className="flex items-center gap-2 sm:gap-3 group justify-center lg:justify-start">
                                <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-blue-600 group-hover:text-white" />
                                </div>
                                <span className="text-slate-700 font-medium text-xs sm:text-sm">info@haventutor.com</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-4 sm:mt-6">
                            <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3 sm:mb-5 relative inline-block pb-1">
                                Follow Us
                                <span className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 rounded-full"></span>
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/haventutors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-2 sm:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaFacebookF size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/haven-tutors-5b89b638b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white p-2 sm:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaLinkedinIn size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/haven__tutors?igsh=MXRrcmk4OGtuYTJveA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white hover:bg-pink-600 text-pink-600 hover:text-white p-2 sm:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaInstagram size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* WhatsApp */}
                                <a href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-white hover:bg-green-500 text-green-600 hover:text-white p-2 sm:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* YouTube */}
                                <a href="https://youtube.com/@haventutors?si=q8Tr5bEIqM0NHExY" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-white hover:bg-red-600 text-red-600 hover:text-white p-2 sm:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaYoutube size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 2: Quick Navigation Links */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3 sm:mb-5 relative inline-block pb-1">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                {/* Button to open demo booking modal */}
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Book a Free Demo
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 3: Subject Categories */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3 sm:mb-5 relative inline-block pb-1">
                            Subjects
                            <span className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Each subject button opens the demo booking modal */}
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    English & Grammar
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Mathematics
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Physics
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Chemistry
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Biology
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Computer Science
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Social Studies
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 4: Service Offerings */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3 sm:mb-5 relative inline-block pb-1">
                            Services
                            <span className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Links to services page for detailed information */}
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    One-on-One Tutoring
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Group Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Homework Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Exam Preparation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Doubt Clearing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Personalized Learning
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Interactive Classes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 5: Curriculum/Board Options */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-3 sm:mb-5 relative inline-block pb-1">
                            Curriculum
                            <span className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Each curriculum button opens the demo booking modal */}
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    CBSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    ICSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    IGCSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    State Board
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    IB
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    A-Level
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300"
                                >
                                    Cambridge
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* Copyright Section */}
            {/* ============================================================ */}
            <div className="border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center">
                    <p className="text-xs sm:text-sm text-slate-600">
                        Copyright © 2025 <span className="text-blue-600 font-semibold">Haven Tutors</span> | All Rights Reserved
                    </p>
                </div>
            </div>

            {/* ============================================================ */}
            {/* Floating WhatsApp Button */}
            {/* ============================================================ */}
            {/* Fixed position button at bottom right for quick WhatsApp contact */}
            <div className="fixed right-3 bottom-4 sm:right-4 sm:bottom-6 md:right-6 md:bottom-8 flex flex-col items-end gap-3 sm:gap-4 z-50">
                <a
                    href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 sm:p-3.5 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transform transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-200"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={20} className="sm:w-5.5 sm:h-5.5" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;