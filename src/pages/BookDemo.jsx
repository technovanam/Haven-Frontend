import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

// Reusable component for "How it works" section
const HowItWorksCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg text-center transition-shadow duration-300">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-sky-100 text-sky-600 p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const BookDemo = () => {
    const studentForm = useRef();
    const tutorForm = useRef();
    const [studentFormStatus, setStudentFormStatus] = useState('');
    const [tutorFormStatus, setTutorFormStatus] = useState('');

    // Handler for the Student Demo Booking Form
    const handleStudentSubmit = (e) => {
        e.preventDefault();
        setStudentFormStatus('Booking...');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const studentTemplateID = import.meta.env.VITE_EMAILJS_STUDENT_TEMPLATE_ID; // IMPORTANT: Use a specific template for students
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, studentTemplateID, studentForm.current, publicKey)
            .then(
                (result) => {
                    console.log(result.text);
                    setStudentFormStatus('Demo booked successfully! ✅');
                    studentForm.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStudentFormStatus('Booking failed. Please try again. ❌');
                }
            );
    };

    // Handler for the Tutor Application Form
    const handleTutorSubmit = (e) => {
        e.preventDefault();
        setTutorFormStatus('Submitting...');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const tutorTemplateID = import.meta.env.VITE_EMAILJS_TUTOR_TEMPLATE_ID; // IMPORTANT: Use a specific template for tutors
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, tutorTemplateID, tutorForm.current, publicKey)
            .then(
                (result) => {
                    console.log(result.text);
                    setTutorFormStatus('Application submitted! ✅');
                    tutorForm.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setTutorFormStatus('Submission failed. Please try again. ❌');
                }
            );
    };

    // Icons
    const fileIcon = <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    const userGroupIcon = <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    const desktopIcon = <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                                Book Your Free Demo Class
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                Discover how personalized tutoring can help you learn better.
                            </p>
                            <button className="mt-8 inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                                Start Your Journey Today
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </div>
                        <div>
                            <img src="https://placehold.co/600x400/e2e8f0/cbd5e0?text=Student+Learning" alt="Student learning online" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Forms Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Student Demo Booking Form */}
                        <div className="bg-slate-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Student Demo Booking Form</h2>
                            <p className="text-slate-600 mb-6">Fill in your details to schedule a free personalized demo.</p>
                            <form ref={studentForm} onSubmit={handleStudentSubmit} className="space-y-4">
                                <input type="text" name="mother_name" placeholder="Mother's Name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                <input type="tel" name="mother_mobile" placeholder="Mother's Mobile" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                <input type="text" name="class_grade" placeholder="Class / Grade (E.g., Grade 10)" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                <input type="text" name="board" placeholder="Board (E.g., IGCSE)" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="city" placeholder="City" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                    <input type="text" name="country" placeholder="Country" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                </div>
                                <button type="submit" className="w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Book My Free Demo</button>
                                {studentFormStatus && <p className="mt-2 text-center text-sm text-gray-600">{studentFormStatus}</p>}
                                <p className="text-center text-xs text-slate-500 pt-2">Our team will revert you within 24 hours to schedule your free demo class.</p>
                            </form>
                        </div>

                        {/* Tutor Application Form */}
                        <div className="bg-slate-50 p-8 rounded-lg">
                             <h2 className="text-2xl font-bold text-slate-900 mb-2">Are You a Tutor? Join Haven Tutors</h2>
                             <p className="text-slate-600 mb-6">Your next opportunity awaits, become part of our growing tutor network.</p>
                            <form ref={tutorForm} onSubmit={handleTutorSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="tutor_name" placeholder="Full Name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                    <input type="email" name="tutor_email" placeholder="Email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="tel" name="tutor_phone" placeholder="Phone Number" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                    <input type="text" name="tutor_country" placeholder="State / Country" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                </div>
                                <div>
                                    <label htmlFor="resume" className="sr-only">Resume/CV</label>
                                    <input type="file" name="resume" id="resume" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"/>
                                </div>
                                <input type="text" name="expertise" placeholder="Area of Expertise / Subjects" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                                <select name="experience" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-gray-500">
                                    <option value="">Years of Experience</option>
                                    <option value="0-1">0-1 Year</option>
                                    <option value="1-3">1-3 Years</option>
                                    <option value="3-5">3-5 Years</option>
                                    <option value="5+">5+ Years</option>
                                </select>
                                <button type="submit" className="w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Submit Tutor Application</button>
                                {tutorFormStatus && <p className="mt-2 text-center text-sm text-gray-600">{tutorFormStatus}</p>}
                                <p className="text-center text-xs text-slate-500 pt-2">Thank you for your interest! We will review your application shortly.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-12">How it Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <HowItWorksCard icon={fileIcon} title="Fill the Form" description="Complete our easy booking form with your requirements and details." />
                        <HowItWorksCard icon={userGroupIcon} title="Get Matched" description="We'll connect you with a qualified tutor who is best suited to your needs." />
                        <HowItWorksCard icon={desktopIcon} title="Attend Your Demo" description="Experience personalized one-on-one learning with our introductory session." />
                    </div>
                </div>
            </section>
            
            {/* Need Help Section */}
            <section className="py-16 sm:py-20 bg-sky-50/50">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Need help? We're here 24/7.</h2>
                    <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">Our dedicated support team is always ready to assist you. Reach out through any of our contact channels.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
                        <a href="mailto:help@haventutors.com" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
                            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            help@haventutors.com
                        </a>
                        <a href="https://wa.me/15551234567" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
                             <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.502 1.916 6.335l-.975 3.545 3.637-1.125z" /></svg>
                            WhatsApp / Call
                        </a>
                        <a href="tel:+15551234567" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
                            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                             +1 (555) 123 4567
                        </a>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default BookDemo;

