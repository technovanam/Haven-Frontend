import React, { useState, useEffect } from 'react';
const StudentDemoModal = React.lazy(() => import("../components/StudentDemoModal"));
import { MessageSquareQuote, Heart, Shield } from 'lucide-react';
import { testimonials } from '../data/testimonials';

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const FeatureListItem = ({ title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-white bg-[#e8b112] rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-slate-600 mt-1">{description}</p>
        </div>
    </div>
);

// ============================================================
// ICON COMPONENTS
// ============================================================

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
);

// ============================================================
// TESTIMONIAL CARD COMPONENT
// ============================================================

const TestimonialCard = ({ quote, name, role, imgSrc, rating }) => (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} />
            ))}
        </div>
        <p className="text-slate-600 mb-6 italic text-sm sm:text-base">"{quote}"</p>
        <div className="flex items-center">
            <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-slate-800 text-sm sm:text-base">{name}</p>
                <p className="text-xs text-slate-500">{role}</p>
            </div>
        </div>
    </div>
);

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="-mt-8 md:-mt-22 bg-white">
            {/* Hero Section with Slider */}
            <section className="relative h-[500px] sm:h-[600px] lg:h-[800px] w-full overflow-hidden">
                {/* Slides */}
                {[
                    {
                        id: 1,
                        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
                        title: "Shape Your Future with the Right Knowledge",
                        description: "Discover the joy of learning with expert tutors who guide you every step of the way. Build confidence, sharpen skills, and unlock your true potential.",
                        cta: "GET STARTED"
                    },
                    {
                        id: 2,
                        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
                        title: "Expert One-on-One Tutoring",
                        description: "Experience personalized learning tailored to your unique needs. Our dedicated tutors help you master difficult concepts and achieve academic excellence.",
                        cta: "BOOK A DEMO"
                    },
                    {
                        id: 3,
                        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80",
                        title: "Achieve Your Academic Goals",
                        description: "From exam preparation to homework help, we provide the strategic guidance and comprehensive resources you need to succeed.",
                        cta: "START LEARNING"
                    },
                    {
                        id: 4,
                        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=80",
                        title: "Comprehensive Syllabus Coverage",
                        description: "We cover all major boards including CBSE, ICSE, IB, Cambridge, and State Boards, ensuring you stay ahead in your curriculum.",
                        cta: "EXPLORE SYLLABUS"
                    }
                ].map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Background Image with Zoom Effect */}
                        <div className={`absolute inset-0 transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
                            <img
                                src={slide.image}
                                srcSet={`
                                    ${slide.image.replace('w=1920', 'w=640')} 640w,
                                    ${slide.image.replace('w=1920', 'w=768')} 768w,
                                    ${slide.image.replace('w=1920', 'w=1024')} 1024w,
                                    ${slide.image.replace('w=1920', 'w=1280')} 1280w,
                                    ${slide.image.replace('w=1920', 'w=1536')} 1536w,
                                    ${slide.image.replace('w=1920', 'w=1920')} 1920w
                                `}
                                sizes="100vw"
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                        </div>

                        {/* Content with Staggered Out-then-In Animation */}
                        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                            <div className="max-w-4xl flex flex-col items-center">
                                {/* Badge */}
                                <div className={`mb-2 sm:mb-6 transition-all duration-700 transform ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 delay-300'
                                    : '-translate-y-4 opacity-0 duration-300'
                                    }`}>
                                    <span className="py-1 px-3 rounded-full bg-[#e8b112]/20 border border-[#e8b112] text-[#e8b112] font-semibold text-[10px] sm:text-sm tracking-wider uppercase backdrop-blur-sm">
                                        #1 Online Tutoring Platform
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className={`text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg mb-2 sm:mb-6 transition-all duration-700 transform ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 delay-500'
                                    : 'translate-y-8 opacity-0 duration-300'
                                    }`}>
                                    {slide.title}
                                </h1>

                                {/* Description */}
                                <p className={`text-sm sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md mb-4 sm:mb-8 transition-all duration-700 transform ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 delay-700'
                                    : 'translate-y-8 opacity-0 duration-300'
                                    }`}>
                                    {slide.description}
                                </p>

                                {/* Buttons */}
                                <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 transition-all duration-700 transform ${index === currentSlide
                                    ? 'translate-y-0 opacity-100 delay-1000'
                                    : 'translate-y-8 opacity-0 duration-300'
                                    }`}>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#e8b112] text-[#0a2d4a] font-bold px-6 py-2.5 sm:px-8 sm:py-4 rounded-full shadow-[0_0_20px_rgba(232,177,18,0.5)] hover:bg-[#d4a010] hover:shadow-[0_0_30px_rgba(232,177,18,0.7)] transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                                    >
                                        <span>{slide.cta}</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById("testimonial-section");
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 text-white border border-white/30 font-semibold px-6 py-2.5 sm:px-8 sm:py-4 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
                                    >
                                        <span>View Success Stories</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex justify-center space-x-3">
                    {[0, 1, 2, 3].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-[#e8b112] w-10' : 'bg-white/40 w-2.5 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Statistics Bar - Overlapping */}
            <div className="relative z-30 px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-24 mb-12 sm:mb-16">
                <div className="container mx-auto max-w-7xl">
                    <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 py-8 sm:py-10 px-6 sm:px-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                            {/* Stat 1 */}
                            <div className="text-center group cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-[#e8b112] transition-colors duration-300">100%</div>
                                <p className="text-slate-500 mt-2 text-xs sm:text-sm font-medium uppercase tracking-wide">Parent Satisfaction</p>
                            </div>

                            {/* Stat 2 */}
                            <div className="text-center group cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-[#e8b112] transition-colors duration-300">1K+</div>
                                <p className="text-slate-500 mt-2 text-xs sm:text-sm font-medium uppercase tracking-wide">Students Mentored</p>
                            </div>

                            {/* Stat 3 */}
                            <div className="text-center group cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-[#e8b112] transition-colors duration-300">12+</div>
                                <p className="text-slate-500 mt-2 text-xs sm:text-sm font-medium uppercase tracking-wide">Boards Covered</p>
                            </div>

                            {/* Stat 4 */}
                            <div className="text-center group cursor-default">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-[#e8b112] transition-colors duration-300">24/7</div>
                                <p className="text-slate-500 mt-2 text-xs sm:text-sm font-medium uppercase tracking-wide">Support & Guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Haven Tutors Section */}
            <section className="bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Left Column: Image with floating cards */}
                    <div className="relative flex justify-center w-full lg:w-1/2">
                        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=50"
                                alt="Student learning online with tutor"
                                className="relative w-full object-cover h-[400px] sm:h-[450px] lg:h-[500px] z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300"
                                style={{ borderRadius: '10% 10% 70% 70% / 10% 10% 60% 60%' }}
                                width="500"
                                height="600"
                                loading="lazy"
                            />

                            {/* Floating Card: Parent Satisfaction */}
                            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-left-20 bg-[#0a2d4a] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg z-20">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5 sm:gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#e8b112] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        ))}
                                    </div>
                                    <div className="text-xs whitespace-nowrap">
                                        <span className="font-bold">4.9/5 Rating</span>
                                        <br />
                                        <span className="hidden sm:inline">Parent Satisfaction</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card: Personalized Learning */}
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#0a2d4a] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
                                <div className="bg-[#e8b112]/30 p-1 sm:p-1.5 rounded-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#e8b112]    " fill="none" viewBox="0 0 24 24" stroke="#e8b112"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Personalized Learning</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Haven Tutors Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <p className="text-xs sm:text-sm font-semibold text-[#0a2d4a] uppercase tracking-wide mb-2">
                            Why Choose Haven Tutors
                        </p>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-snug">
                            Powerful Features for Your Learning Journey
                        </h2>

                        <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                            From personalized learning paths to interactive sessions, every feature is designed to make your learning experience simple, engaging, and confidence-building.
                        </p>

                        {/* Features List */}
                        <div className="divide-y divide-gray-300">
                            <div className="flex items-start gap-3 py-3">
                                <div className="bg-[#e8b112]/20 text-[#0a2d4a] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                                        One-on-One Tutoring
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">
                                        Individualized lessons focused on each student's goals and pace.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-4 sm:py-5">
                                <div className="bg-[#e8b112]/20 text-[#0a2d4a] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                                        Flexible Scheduling
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">
                                        Book classes at times that suit your routine and comfort.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-4 sm:py-5">
                                <div className="bg-[#e8b112]/20 text-[#0a2d4a] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                                        Curriculum-Aligned Learning
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">
                                        Covering CBSE, ICSE, IB, Cambridge, and State Boards.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-4 sm:py-5">
                                <div className="bg-[#e8b112]/20 text-[#0a2d4a] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                                        Continuous Support & Guidance
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">
                                        Regular progress updates, doubt-clearing sessions, and consistent mentorship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white text-[#0a2d4a] font-semibold px-4 py-2 rounded-full shadow-sm border border-[#e8b112] mb-6">
                        <MessageSquareQuote className="w-4 h-4 sm:w-5 sm:h-5 text-[#e8b112]" />
                        <span className="text-xs sm:text-sm tracking-wide uppercase">Our Testimonials</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        What Our Learners Say
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
                        Hear from our students and parents about how Haven Tutors has made learning easier and more rewarding
                    </p>

                    {/* Testimonials Grid */}
                    <div
                        id="testimonial-section"
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left transition-all duration-500 ease-in-out"
                    >
                        {testimonials.slice(0, showAll ? testimonials.length : 6).map((t, i) => (
                            <div key={i} className="opacity-100">
                                <TestimonialCard {...t} />
                            </div>
                        ))}
                    </div>

                    {/* See More / See Less Button */}
                    <div className="mt-8 sm:mt-10">
                        <button
                            onClick={() => {
                                setShowAll(!showAll);
                                setTimeout(() => {
                                    if (!showAll) {
                                        const el = document.getElementById("testimonial-section");
                                        if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
                                    }
                                }, 150);
                            }}
                            className="px-6 py-3 rounded-full bg-[#e8b112] text-[#0a2d4a] font-bold hover:bg-[#d4a010] transition-all duration-300 shadow-md text-sm sm:text-base"
                        >
                            {showAll ? "See Less" : "See More"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Book Demo Modal */}
            {isModalOpen && (
                <React.Suspense fallback={null}>
                    <StudentDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </React.Suspense>
            )}
        </div>
    );
};

export default Home;