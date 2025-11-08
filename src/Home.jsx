import React from 'react';

// --- SVG Icons (can be moved to a separate file if desired) ---

const OneOnOneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SchedulingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CurriculumIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18M5.468 19.376l-3.08-5.747 3.08 5.747zM18.532 19.376l3.08-5.747-3.08 5.747zM5.468 4.624l-3.08 5.747 3.08-5.747zM18.532 4.624l3.08 5.747-3.08-5.747z" />
    </svg>
);

const GlobalAccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.52-.52A5 5 0 0112 2a5 5 0 014.243 2.243l.52.52M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Home = () => {
    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 md:pl-250">
                <div className="grid md:grid-cols-2 gap-12 items-center ">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                            Personalized Online Tutoring for Every Student
                        </h1>
                        <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 mb-8">
                            Unlock your potential with one-on-one lessons, engaging group classes, and flexible scheduling tailored to your unique learning journey.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
                                Book Free Demo
                            </a>
                            <a href="#" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
                                Explore Services
                            </a>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://placehold.co/600x400/E2E8F0/4A5568?text=Happy+Students" 
                            alt="Two students learning online" 
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                </div>
            </div>

            {/* --- Why Choose Us Section --- */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12">Why Choose Haven Tutors?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-left">
                            <OneOnOneIcon />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">One-on-One Tutoring</h3>
                            <p className="text-slate-600">Become dedicated attention and custom lesson plans uniquely tailored to fit your academic needs and learning style.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-left">
                            <SchedulingIcon />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Flexible Scheduling</h3>
                            <p className="text-slate-600">Learn at your own pace and convenience with sessions that seamlessly fit into your busy school and personal life.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-left">
                            <CurriculumIcon />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Curriculum-Aligned</h3>
                            <p className="text-slate-600">Our courses are meticulously designed to align with national and even international academic standards, ensuring relevance.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-left">
                            <GlobalAccessIcon />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Global Access</h3>
                            <p className="text-slate-600">Connect with expert tutors from around the world, gaining diverse perspectives and a wealth of knowledge directly to you.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Testimonials Section --- */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12">What Our Students Say</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-slate-50 p-8 rounded-lg text-left">
                            <p className="text-slate-600 mb-6">"Haven Tutors transformed my understanding of complex subjects. The personalized approach made all the difference!"</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/48x48/E2E8F0/4A5568?text=JS" alt="Jessica Santos" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold text-slate-800">Jessica Santos</p>
                                    <p className="text-sm text-slate-500">High School Student</p>
                                </div>
                            </div>
                        </div>
                         {/* Testimonial 2 */}
                         <div className="bg-slate-50 p-8 rounded-lg text-left shadow-lg border border-slate-100">
                            <p className="text-slate-600 mb-6">"The flexibility in scheduling allowed me to balance my studies and hobbies. My grades improved significantly!"</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/48x48/E2E8F0/4A5568?text=RS" alt="Rahul Singh" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold text-slate-800">Rahul Singh</p>
                                    <p className="text-sm text-slate-500">University Applicant</p>
                                </div>
                            </div>
                        </div>
                         {/* Testimonial 3 */}
                         <div className="bg-slate-50 p-8 rounded-lg text-left">
                            <p className="text-slate-600 mb-6">"I love how interactive the lessons are. The tutors are incredibly patient and make learning enjoyable."</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/48x48/E2E8F0/4A5568?text=AK" alt="Aisha Khan" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold text-slate-800">Aisha Khan</p>
                                    <p className="text-sm text-slate-500">Middle School Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="bg-sky-500 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold">5,000+</p>
                            <p className="text-lg mt-2">Tutoring Hours</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">1,000+</p>
                            <p className="text-lg mt-2">Students Worldwide</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">10+</p>
                            <p className="text-lg mt-2">Countries with Tutors</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
