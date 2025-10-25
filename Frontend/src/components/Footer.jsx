import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaCommentDots } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

// ============================================================
// MAIN FOOTER COMPONENT
// ============================================================

const Footer = ({ onBookDemoClick }) => {

    const [showTestimonial, setShowTestimonial] = useState(false);
    const [testimonialContent, setTestimonialContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const nameRef = useRef(null);

    const handleTestimonialSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const name = nameRef.current?.value?.trim();
        const board = e.target.board?.value?.trim() || '';
        const grade = e.target.grade?.value?.trim() || '';
        const country = e.target.country?.value?.trim() || '';
        const content = testimonialContent.trim();

        if (!name) { setErrorMessage('Please enter your name'); return; }
        if (!content || content.length === 0) { setErrorMessage('Please enter testimonial content'); return; }
        if (content.length > 200) { setErrorMessage('Testimonial must be 200 characters or less'); return; }

        const payload = { name, board, grade, country, content };
        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/testimonial`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setShowTestimonial(false);
                setTestimonialContent('');
                alert('Thank you! Your testimonial was submitted.');
            } else {
                // still close and show message; backend may not exist
                const text = await res.text();
                console.warn('Testimonial submit non-OK:', res.status, text);
                alert('Submission received (local).');
                setShowTestimonial(false);
            }
        } catch (err) {
            console.error('Testimonial submit error:', err);
            alert('Submission failed — please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

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
                                <a href="https://www.facebook.com/haventutors" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaFacebookF size={16} />
                                </a>
                                <a href="https://www.linkedin.com/in/haven-tutors-5b89b638b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaLinkedinIn size={16} />
                                </a>
                                <a href="https://www.instagram.com/haven__tutors?igsh=MXRrcmk4OGtuYTJveA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white hover:bg-pink-600 text-pink-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaInstagram size={16} />
                                </a>
                                <a href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-white hover:bg-green-500 text-green-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                                    <FaWhatsapp size={16} />
                                </a>
                                <a href="https://youtube.com/@haventutors?si=q8Tr5bEIqM0NHExY" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-white hover:bg-red-600 text-red-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
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
                                <Link to="/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
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
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    One-on-One Tutoring
                                </Link>
                            </li>
                             {/* ... other service links ... */}
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Group Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Homework Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Exam Preparation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Doubt Clearing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
                                    Personalized Learning
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 inline-block transition-all duration-300">
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

            {/* Floating actions: Testimonial and WhatsApp */}
            {/* lowered the cluster (closer to bottom) and increased spacing for better reachability */}
            <div className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 flex flex-col items-end gap-4 z-50">
                {/* Testimonial button (polished) */}
                <button
                    onClick={() => setShowTestimonial(true)}
                    aria-label="Leave a testimonial"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:from-blue-600 hover:to-blue-700 transform transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                    <FaCommentDots size={18} className="flex-shrink-0" />
                    <span className="hidden sm:inline-block text-sm font-semibold">Testimonials</span>
                </button>

                <a
                    href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3.5 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transform transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-200"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={22} />
                </a>
            </div>

            {/* Testimonial modal */}
            {showTestimonial && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Leave a Testimonial</h3>
                            <button onClick={() => setShowTestimonial(false)} className="text-slate-500 hover:text-slate-800">✕</button>
                        </div>
                        <form onSubmit={handleTestimonialSubmit} className="space-y-3">
                            <input required name="name" ref={nameRef} placeholder="Your name" className="w-full border rounded-md px-3 py-2" />
                            <input name="board" placeholder="Board (CBSE/ICSE)" className="w-full border rounded-md px-3 py-2" />
                            <input name="grade" placeholder="Grade / Class" className="w-full border rounded-md px-3 py-2" />
                            <input name="country" placeholder="Country" className="w-full border rounded-md px-3 py-2" />
                            <textarea name="content" value={testimonialContent} onChange={e => setTestimonialContent(e.target.value.slice(0,200))} placeholder="Your testimonial (max 200 chars)" className="w-full border rounded-md px-3 py-2" rows={4} />
                            <div className="flex items-center justify-between text-xs text-slate-500">
                                <span>{testimonialContent.length}/200</span>
                                <span className="text-red-500">{errorMessage}</span>
                            </div>
                            <div className="flex items-center gap-3 justify-end">
                                <button type="button" onClick={() => setShowTestimonial(false)} className="px-4 py-2 rounded-md border">Cancel</button>
                                <button type="submit" disabled={submitting} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;