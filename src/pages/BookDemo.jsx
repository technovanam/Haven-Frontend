// import React, { useRef, useState } from 'react';
// import emailjs from "@emailjs/browser";

// // Define the two main "courses" (Student Demo and Tutor Application)
// const TABS = {
//     STUDENT: 'Student Demo',
//     TUTOR: 'Tutor Application'
// };

// // A list of countries for the dropdown. 
// // You can expand this list as needed.
// const countries = [
//     "United States", "United Kingdom", "Canada", "Australia", "India", 
//     "Germany", "France", "Japan", "Brazil", "South Africa"
// ];

// const BookDemo = () => {
//     const studentForm = useRef();
//     const tutorForm = useRef();
//     const [studentFormStatus, setStudentFormStatus] = useState('');
//     const [tutorFormStatus, setTutorFormStatus] = useState('');
//     // State to manage the active tab/form selection, default to student
//     const [activeTab, setActiveTab] = useState(TABS.STUDENT);

//     // --- (EmailJS submit handlers remain the same) ---
//     const handleStudentSubmit = (e) => {
//         e.preventDefault();
//         setStudentFormStatus('Booking...');

//         const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//         const studentTemplateID = import.meta.env.VITE_EMAILJS_STUDENT_TEMPLATE_ID;
//         const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//         emailjs.sendForm(serviceID, studentTemplateID, studentForm.current, publicKey)
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     setStudentFormStatus('Demo booked successfully! ✅');
//                     studentForm.current.reset();
//                 },
//                 (error) => {
//                     console.log(error.text);
//                     setStudentFormStatus('Booking failed. Please try again. ❌');
//                 }
//             );
//     };

//     const handleTutorSubmit = (e) => {
//         e.preventDefault();
//         setTutorFormStatus('Submitting...');

//         const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//         const tutorTemplateID = import.meta.env.VITE_EMAILJS_TUTOR_TEMPLATE_ID;
//         const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//         emailjs.sendForm(serviceID, tutorTemplateID, tutorForm.current, publicKey)
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     setTutorFormStatus('Application submitted! ✅');
//                     tutorForm.current.reset();
//                 },
//                 (error) => {
//                     console.log(error.text);
//                     setTutorFormStatus('Submission failed. Please try again. ❌');
//                 }
//             );
//     };

//     // --- (Rest of the component structure, icons, etc., remain the same) ---

//     // A consistent class string for all form inputs and selects
//     const formInputStyle = "w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500";

//     return (
//         <div className="bg-white min-h-screen">
            
//             {/* Hero Section */}
//             <section className="py-20 sm:py-24">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
//                                 Book Your <span className="text-sky-600">Free Demo Class</span>
//                             </h1>
//                             <p className="mt-4 text-lg text-slate-600">
//                                 Discover how personalized, high-quality tutoring can help you or your child learn better and achieve academic excellence.
//                             </p>
//                             <button className="mt-8 inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors">
//                                 Start Your Journey Today
//                                 <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//                             </button>
//                         </div>
//                         <div>
//                             <img src="https://placehold.co/600x400/e2e8f0/cbd5e0?text=Student+Learning" alt="Student learning online" className="rounded-xl shadow-2xl" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Forms and Navigation Section */}
//             <section className="pb-16 sm:pb-20">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
//                     {/* Course Category Navigation Bar */}
//                     <div className="mb-10 flex justify-center border-b border-gray-200 max-w-2xl mx-auto">
//                         <div className="flex space-x-12">
//                             {/* Student Tab */}
//                             <button
//                                 onClick={() => setActiveTab(TABS.STUDENT)}
//                                 className={`
//                                     py-4 px-1 text-lg font-bold transition-colors duration-200
//                                     ${activeTab === TABS.STUDENT
//                                         ? 'text-sky-600 border-b-2 border-sky-600'
//                                         : 'text-gray-500 hover:text-sky-600'
//                                     }
//                                 `}
//                             >
//                                 {TABS.STUDENT}
//                             </button>
                            
//                             {/* Tutor Tab */}
//                             <button
//                                 onClick={() => setActiveTab(TABS.TUTOR)}
//                                 className={`
//                                     py-4 px-1 text-lg font-bold transition-colors duration-200
//                                     ${activeTab === TABS.TUTOR
//                                         ? 'text-sky-600 border-b-2 border-sky-600'
//                                         : 'text-gray-500 hover:text-sky-600'
//                                     }
//                                 `}
//                             >
//                                 {TABS.TUTOR}
//                             </button>
//                         </div>
//                     </div>
                    
//                     {/* Conditional Form Rendering */}
//                     <div className="max-w-xl mx-auto">
//                         {/* Student Demo Booking Form */}
//                         {activeTab === TABS.STUDENT && (
//                             <div className="bg-slate-50 p-8 rounded-xl shadow-2xl">
//                                 <h2 className="text-2xl font-bold text-slate-900 mb-2">Student Demo Booking Form</h2>
//                                 <p className="text-slate-600 mb-6">Fill in your details to schedule a **free personalized demo**.</p>
//                                 <form ref={studentForm} onSubmit={handleStudentSubmit} className="space-y-4">
//                                     <input type="text" name="mother_name" placeholder="Mother's Name" required className={formInputStyle} />
//                                     {/* UPDATED: Asks for country code */}
//                                     <input type="tel" name="mother_mobile" placeholder="Mother's Mobile (e.g., +1 555-1234)" required className={formInputStyle} />
                                    
//                                     {/* UPDATED: Grade dropdown */}
//                                     <select name="class_grade" required className={formInputStyle}>
//                                         <option value="">Select Grade</option>
//                                         {[...Array(12).keys()].map(i => (
//                                             <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
//                                         ))}
//                                     </select>
                                    
//                                     <input type="text" name="board" placeholder="Board (E.g., IGCSE)" required className={formInputStyle} />
                                    
//                                     {/* UPDATED: Country dropdown */}
//                                     <select name="country" required className={formInputStyle}>
//                                         <option value="">Select Country</option>
//                                         {countries.map(country => (
//                                             <option key={country} value={country}>{country}</option>
//                                         ))}
//                                     </select>

//                                     <button type="submit" className="w-full py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-150">Book My Free Demo</button>
//                                     {studentFormStatus && <p className="mt-2 text-center text-sm text-gray-600">{studentFormStatus}</p>}
//                                     <p className="text-center text-xs text-slate-500 pt-2">Our team will revert to you within 24 hours to schedule your free demo class.</p>
//                                 </form>
//                             </div>
//                         )}
                        
//                         {/* Tutor Application Form */}
//                         {activeTab === TABS.TUTOR && (
//                             <div className="bg-slate-50 p-8 rounded-xl shadow-2xl">
//                                 <h2 className="text-2xl font-bold text-slate-900 mb-2">Are You a Tutor? Join Haven Tutors</h2>
//                                 <p className="text-slate-600 mb-6">Your next opportunity awaits, become part of our growing tutor network.</p>
//                                 <form ref={tutorForm} onSubmit={handleTutorSubmit} className="space-y-4">
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <input type="text" name="tutor_name" placeholder="Full Name" required className={formInputStyle} />
//                                         <input type="email" name="tutor_email" placeholder="Email" required className={formInputStyle} />
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         {/* UPDATED: Asks for country code */}
//                                         <input type="tel" name="tutor_phone" placeholder="Phone (with country code)" required className={formInputStyle} />
                                        
//                                         {/* UPDATED: Country dropdown */}
//                                         <select name="tutor_country" required className={formInputStyle}>
//                                             <option value="">Select Country</option>
//                                             {countries.map(country => (
//                                                 <option key={country} value={country}>{country}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="resume" className="sr-only">Resume/CV</label>
//                                         <input type="file" name="resume" id="resume" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"/>
//                                     </div>
//                                     <input type="text" name="expertise" placeholder="Area of Expertise / Subjects" required className={formInputStyle} />
//                                     <select name="experience" required className={formInputStyle}>
//                                         <option value="">Years of Experience</option>
//                                         <option value="0-1">0-1 Year</option>
//                                         <option value="1-3">1-3 Years</option>
//                                         <option value="3-5">3-5 Years</option>
//                                         <option value="5+">5+ Years</option>
//                                     </select>
//                                     <button type="submit" className="w-full py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-150">Submit Tutor Application</button>
//                                     {tutorFormStatus && <p className="mt-2 text-center text-sm text-gray-600">{tutorFormStatus}</p>}
//                                     <p className="text-center text-xs text-slate-500 pt-2">Thank you for your interest! We will review your application shortly.</p>
//                                 </form>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
            
//             {/* --- (The rest of your page sections like "How It Works" and "Need Help" remain unchanged) --- */}

//             {/* How It Works Section – Stylized like your uploaded model */}
//             <section className="relative py-20 bg-slate-50 overflow-hidden">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//                     <h2 className="text-4xl font-bold text-center text-slate-800 mb-20">
//                     How It Works
//                     </h2>

//                     <div className="relative flex flex-col items-start space-y-20 md:space-y-28 max-w-5xl mx-auto">

//                         {/* Step 1 */}
//                         <div className="relative ml-0 md:ml-0">
//                             <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border-l-4 border-sky-500">
//                                 <h3 className="text-slate-900 font-bold text-lg mb-2">Step 1</h3>
//                                 <p className="text-slate-600 text-sm">
//                                     Complete our easy booking form with your requirements and details.
//                                 </p>
//                             </div>
//                             {/* Curved Line to Step 2 */}
//                             <svg
//                                 className="absolute left-72 top-10 hidden md:block"
//                                 width="300"
//                                 height="150"
//                                 viewBox="0 0 300 150"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                 d="M0,30 C100,20 180,80 280,60"
//                                 stroke="#94a3b8"
//                                 strokeWidth="3"
//                                 strokeLinecap="round"
//                                 fill="none"
//                                 />
//                             </svg>
//                         </div>

//                         {/* Step 2 */}
//                         <div className="relative ml-auto md:mr-12">
//                             <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border-l-4 border-sky-500">
//                                 <h3 className="text-slate-900 font-bold text-lg mb-2">Step 2</h3>
//                                 <p className="text-slate-600 text-sm">
//                                     Our team connects with you to understand your needs and schedule the demo.
//                                 </p>
//                             </div>
//                             {/* Curved Line to Step 3 */}
//                             <svg
//                                 className="absolute -left-72 top-10 hidden md:block"
//                                 width="300"
//                                 height="150"
//                                 viewBox="0 0 300 150"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                 d="M300,30 C200,60 100,90 0,70"
//                                 stroke="#94a3b8"
//                                 strokeWidth="3"
//                                 strokeLinecap="round"
//                                 fill="none"
//                                 />
//                             </svg>
//                         </div>

//                         {/* Step 3 */}
//                         <div className="relative ml-0 md:ml-10">
//                             <div className="bg-white shadow-lg rounded-2xl p-6 w-72 border-l-4 border-sky-500">
//                                 <h3 className="text-slate-900 font-bold text-lg mb-2">Step 3</h3>
//                                 <p className="text-slate-600 text-sm">
//                                     Attend the free demo class with one of our expert tutors.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Light background decoration */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 opacity-80"></div>
//             </section>
            
//             {/* Need Help Section */}
//             <section className="py-16 sm:py-20 bg-sky-50/50">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Need help? We're here 24/7.</h2>
//                     <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">Our dedicated support team is always ready to assist you. Reach out through any of our contact channels.</p>
//                     <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
//                         <a href="mailto:help@haventutors.com" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
//                             <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                             help@haventutors.com
//                         </a>
//                         <a href="https://wa.me/15551234567" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
//                             <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.502 1.916 6.335l-.975 3.545 3.637-1.125z" /></svg>
//                             WhatsApp / Call
//                         </a>
//                         <a href="tel:+15551234567" className="inline-flex items-center text-slate-700 hover:text-sky-600 font-semibold transition-colors">
//                             <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//                              +1 (555) 123 4567
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default BookDemo;