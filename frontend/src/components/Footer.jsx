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
// Color Scheme: #0a2d4a (Navy Blue) and #e8b112 (Golden Yellow)
// ============================================================

const Footer = ({ onBookDemoClick }) => {

    return (
        <footer className="bg-gradient-to-br from-[#0a2d4a] via-[#0d3a5c] to-[#0a2d4a] text-slate-200 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e8b112] rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e8b112] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Main footer container with responsive padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">

                {/* Footer grid layout - 5 columns on large screens, responsive on smaller devices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 justify-items-center lg:justify-items-start text-center lg:text-left">

                    {/* ============================================================ */}
                    {/* Column 1: Logo, Contact Info & Social Media Links */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        {/* Company Logo */}
                        <img
                            src="https://res.cloudinary.com/dnmvriw3e/image/upload/f_auto,q_auto,w_160/v1764685340/Screenshot_2025-12-02_195148_v0bc1t.png"
                            alt="Haven Tutors Logo"
                            className="h-14 sm:h-16 w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0 brightness-110 hover:brightness-125 transition-all duration-300"
                            width="80"
                            height="80"
                            loading="lazy"
                        />

                        {/* Contact Information */}
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm mb-4 sm:mb-6">
                            {/* Phone Number */}
                            <div className="flex items-center gap-2 sm:gap-3 group justify-center lg:justify-start">
                                <div className="bg-[#0a2d4a]/50 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg group-hover:bg-[#e8b112] transition-all duration-300 border border-[#e8b112]/30 group-hover:border-[#e8b112]">
                                    <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-[#e8b112] group-hover:text-[#0a2d4a] transition-colors" />
                                </div>
                                <span className="text-slate-200 font-medium text-xs sm:text-sm group-hover:text-[#e8b112] transition-colors">+91 9606840892</span>
                            </div>

                            {/* Email Address */}
                            <div className="flex items-center gap-2 sm:gap-3 group justify-center lg:justify-start">
                                <div className="bg-[#0a2d4a]/50 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg group-hover:bg-[#e8b112] transition-all duration-300 border border-[#e8b112]/30 group-hover:border-[#e8b112]">
                                    <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-[#e8b112] group-hover:text-[#0a2d4a] transition-colors" />
                                </div>
                                <span className="text-slate-200 font-medium text-xs sm:text-sm group-hover:text-[#e8b112] transition-colors">info@haventutor.com</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-4 sm:mt-6">
                            <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-5 relative inline-block pb-1">
                                Follow Us
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-[#e8b112] rounded-full"></span>
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/haventutors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#0a2d4a]/50 backdrop-blur-sm hover:bg-[#e8b112] text-[#e8b112] hover:text-[#0a2d4a] p-2 sm:p-2.5 rounded-lg border border-[#e8b112]/30 hover:border-[#e8b112] shadow-lg hover:shadow-[#e8b112]/50 transition-all duration-300 hover:scale-110">
                                    <FaFacebookF size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/haven__tutors?igsh=MXRrcmk4OGtuYTJveA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#0a2d4a]/50 backdrop-blur-sm hover:bg-[#e8b112] text-[#e8b112] hover:text-[#0a2d4a] p-2 sm:p-2.5 rounded-lg border border-[#e8b112]/30 hover:border-[#e8b112] shadow-lg hover:shadow-[#e8b112]/50 transition-all duration-300 hover:scale-110">
                                    <FaInstagram size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* WhatsApp */}
                                <a href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-[#0a2d4a]/50 backdrop-blur-sm hover:bg-[#e8b112] text-[#e8b112] hover:text-[#0a2d4a] p-2 sm:p-2.5 rounded-lg border border-[#e8b112]/30 hover:border-[#e8b112] shadow-lg hover:shadow-[#e8b112]/50 transition-all duration-300 hover:scale-110">
                                    <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                                </a>
                                {/* YouTube */}
                                <a href="https://youtube.com/@haventutors?si=q8Tr5bEIqM0NHExY" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-[#0a2d4a]/50 backdrop-blur-sm hover:bg-[#e8b112] text-[#e8b112] hover:text-[#0a2d4a] p-2 sm:p-2.5 rounded-lg border border-[#e8b112]/30 hover:border-[#e8b112] shadow-lg hover:shadow-[#e8b112]/50 transition-all duration-300 hover:scale-110">
                                    <FaYoutube size={14} className="sm:w-4 sm:h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 2: Quick Navigation Links */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-5 relative inline-block pb-1">
                            Quick Links
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-[#e8b112] rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="/" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                {/* Button to open demo booking modal */}
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
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
                        <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-5 relative inline-block pb-1">
                            Subjects
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-[#e8b112] rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Each subject button opens the demo booking modal */}
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    English & Grammar
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    Mathematics
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    Physics
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    Chemistry
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    Biology
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    Computer Science
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
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
                        <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-5 relative inline-block pb-1">
                            Services
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-[#e8b112] rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Links to services page for detailed information */}
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    One-on-One Tutoring
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Group Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Homework Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Exam Preparation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Doubt Clearing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Personalized Learning
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1">
                                    Interactive Classes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ============================================================ */}
                    {/* Column 5: Curriculum/Board Options */}
                    {/* ============================================================ */}
                    <div className="w-full">
                        <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-5 relative inline-block pb-1">
                            Curriculum
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-[#e8b112] rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {/* Each curriculum button opens the demo booking modal */}
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    CBSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    ICSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    IGCSE
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    State Board
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    IB
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
                                >
                                    A-Level
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={onBookDemoClick}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-[#e8b112] inline-block transition-all duration-300 hover:translate-x-1"
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
            <div className="border-t border-[#e8b112]/30 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center">
                    <p className="text-xs sm:text-sm text-slate-300">
                        Copyright © 2025{" "}
                        <a
                            href="https://www.haventutor.com"
                            target="_self"
                            rel="noopener noreferrer"
                            className="text-[#e8b112] font-semibold hover:underline"
                        >
                            Haven Tutors
                        </a>{" "}
                        | All Rights Reserved
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
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 sm:p-3.5 rounded-full shadow-2xl hover:from-green-600 hover:to-green-600 transform transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-500"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={20} className="sm:w-5.5 sm:h-5.5" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;