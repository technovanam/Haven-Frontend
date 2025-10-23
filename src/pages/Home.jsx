import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquareQuote, Heart, Shield } from 'lucide-react';
import home from '../assets/Home_top.png';
import BookDemoModal from '../components/BookDemoModal';

const FeatureListItem = ({ title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-white bg-blue-500 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-slate-600 mt-1">{description}</p>
        </div>
    </div>
);


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
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18M5.468 19.376l-3.08-5.747 3.08 5.747zM18.532 19.376l3.08-5.747-3.08 5.747zM5.468 4.624l-3.08 5.747 3.08-5.747zM18.532 4.624l3.08 5.747-3.08 5.747z" />
    </svg>
);
const GlobalAccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.52-.52A5 5 0 0112 2a5 5 0 014.243 2.243l.52.52M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
);
const TestimonialCard = ({ quote, name, role, imgSrc, rating }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-slate-600 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-slate-800">{name}</p>
        <p className="text-[12px] text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

// Inside your Home component, before the return()
const testimonials = [
  {
    quote:
      "Haven Tutors made ICSE Physics and Chemistry simple and engaging. My concepts finally clicked, and my grades improved drastically!",
    name: "Aarav Mehta",
    role: "ICSE Student – Grade 10",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=AM",
    rating: 5,
  },
  {
    quote:
      "As an IGCSE student, I struggled with balancing Math and Biology, but Haven Tutors’ personalized sessions helped me manage both with ease.",
    name: "Sophia Thomas",
    role: "IGCSE Student – Grade 9",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=ST",
    rating: 5,
  },
  {
    quote:
      "CBSE grammar and vocabulary used to be my weak points. The Spoken English sessions gave me the confidence to communicate clearly.",
    name: "Rahul Sharma",
    role: "CBSE Student – Grade 8",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=RS",
    rating: 4,
  },
  {
    quote:
      "I loved the A-Level Math and AI coding classes. The tutors made even complex problems easy to follow, and the support was outstanding.",
    name: "Emily Brown",
    role: "A-Level Student – UK Curriculum",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=EB",
    rating: 5,
  },
  {
    quote:
      "The IB curriculum can be tough, but my Economics and Sociology tutor helped me understand real-world applications. I scored higher than expected.",
    name: "Daniel Wong",
    role: "IB Student – Singapore",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=DW",
    rating: 5,
  },
  {
    quote:
      "As a State Board student, I appreciated the flexible schedule. My Hindi and Mathematics tutors were patient, friendly, and always prepared.",
    name: "Keerthi Raj",
    role: "State & Matriculation – Tamil Nadu",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=KR",
    rating: 4,
  },
  {
    quote:
      "The Cambridge English and Social Studies courses were brilliant. My tutor explained every topic in depth and made learning enjoyable.",
    name: "Olivia Green",
    role: "Cambridge Student – Grade 7",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=OG",
    rating: 5,
  },
  {
    quote:
      "Thanks to Haven Tutors’ Canadian curriculum lessons, my child improved drastically in vocabulary and writing structure. Highly recommend!",
    name: "Anita Patel",
    role: "Parent – Canadian Curriculum",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=AP",
    rating: 5,
  },
  {
    quote:
      "I joined for Computer Science and Programming skills. The tutors are skilled, encouraging, and up-to-date with modern coding practices.",
    name: "Arjun Nair",
    role: "High School Student – Coding & AI",
    imgSrc: "https://placehold.co/48x48/E2E8F0/4A5568?text=AN",
    rating: 5,
  },
];


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-16  px-24 md:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <p className="font-semibold text-gray-500 mb-2">#1 Online Tutor</p>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Shape Your Future with the Right Knowledge
                            </h1>
                            <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 mb-8">
                                Discover the joy of learning with expert tutors who guide you every step of the way. Build confidence, sharpen skills, and unlock your true potential.
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center space-x-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-300 group"
                            >
                                <span>GET STARTED</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </div>
                        {/* Right Image and Floating Cards */}
                        <div className="relative mt-12 md:mt-0 flex justify-center">
                            <img
                                src={home}
                                alt="A smiling student wearing glasses and a plaid shirt"
                                className="relative rounded-3xl shadow-2xl w-90 max-w-md h-120 z-10 object-cover"
                                style={{ borderRadius: '10% 10% 70% 70% / 10% 10% 60% 60%' }}
                            />
                            {/* Floating Card 1: Students */}
                            <div className="absolute top-8 right-20 transform translate-x-1/4 bg-blue-500 text-white p-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
                                <div className="flex -space-x-2 overflow-hidden">
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student 1"/>
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student 2"/>
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Student 3"/>
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold">More than</p>
                                    <p>1K students</p>
                                </div>
                            </div>
                            {/* Floating Card 2: Collaboration */}
                             <div className="absolute top-2/3 right-20 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
                                <div className="bg-white/30 p-1 rounded-full">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className="text-sm font-semibold">Best Collaboration</span>
                            </div>
                            {/* Floating Card 3: Trust Badge */}
                            <div className="absolute bottom-12 left-20 transform -translate-x-1/4 bg-blue-500 text-white p-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
                                <div className="bg-white/30 p-1 rounded-full">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-semibold">Trusted Worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
            <div className="container mx-auto px-4 pt-30 sm:px-6 lg:px-8">
                    <div className="w-full bg-slate-50 rounded-3xl shadow-sm border border-slate-200 py-10 px-4 transition-all duration-300 hover:shadow-md">
                        <div className="flex flex-wrap justify-center items-center lg:gap-16">
                            {/* Stat 1 */}
                            <div className="text-center group cursor-default transition-transform duration-300 hover:scale-105">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 .
                                group-hover:text-blue-600 transition-colors duration-300">100%</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Parent Satisfaction</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 2 */}
                            <div className="text-center group cursor-default transition-transform duration-300 hover:scale-105">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">1K+</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Students Mentored</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 3 */}
                            <div className="text-center group cursor-default transition-transform duration-300 hover:scale-105">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">12+</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Learning Boards Covered</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 4 */}
                            <div className="text-center group cursor-default transition-transform duration-300 hover:scale-105">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">24/7</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Support & Guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
</section>

{/* Why Choose Haven Tutors Section */}
<section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl shadow-sm border border-gray-100 p-10 md:p-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
    
    {/* Left Column: Image with floating cards */}
    <div className="relative flex justify-center w-full md:w-1/2">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=2000&q=100"
          alt="Student learning online with tutor"
          className="relative w-full object-cover h-[500px] z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300"
          style={{ borderRadius: '10% 10% 70% 70% / 10% 10% 60% 60%' }}
        />

        {/* Floating Card: Parent Satisfaction - Top Left Corner */}
        <div className="absolute -top-6 -left-20 bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg z-20">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            </div>
            <div className="text-xs whitespace-nowrap">
              <span className="font-bold">4.9/5 Rating</span>
              <br />
              <span>Parent Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Floating Card: Personalized Learning - Bottom Right Corner */}
        <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
          <div className="bg-white/30 p-1.5 rounded-full">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="text-sm font-semibold whitespace-nowrap">Personalized Learning</span>
        </div>
      </div>
    </div>

    {/* Right Column: Haven Tutors Content */}
    <div className="w-full md:w-1/2 text-left pt-10">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        Why Choose Haven Tutors
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
        Powerful Features for Your Learning Journey
      </h2>

      <p className="text-slate-600 mb-8 text-base leading-relaxed">
        From personalized learning paths to interactive sessions, every feature is designed to make your learning experience simple, engaging, and confidence-building.
      </p>

      {/* Features List */}
      <div className="divide-y divide-gray-300">
        <div className="flex items-start gap-3 py-3">
          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              One-on-One Tutoring   
            </h4>
            <p className="text-slate-600 text-sm">
              Individualized lessons focused on each student’s goals and pace.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-5">
          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              Flexible Scheduling
            </h4>
            <p className="text-slate-600 text-sm">
              Book classes at times that suit your routine and comfort.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-5">
          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              Curriculum-Aligned Learning
            </h4>
            <p className="text-slate-600 text-sm">
              Covering CBSE, ICSE, IB, Cambridge, and State Boards.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-5">
          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              Continuous Support & Guidance
            </h4>
            <p className="text-slate-600 text-sm">
              Regular progress updates, doubt-clearing sessions, and consistent mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          
<section className="py-20 bg-white sm:px-6 lg:px-55">
  <div className="container mx-auto text-center">
    <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
      <MessageSquareQuote className="w-5 h-5" />
      <span className="text-sm tracking-wide uppercase">Our Testimonials</span>
    </div>
    <h2 className="text-4xl font-bold text-slate-900 mb-4">
      What Our Learners Are Saying
    </h2>
    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
      Hear from our students and parents about how Haven Tutors has made learning easier and more rewarding
    </p>

    {/* Testimonials Grid */}
    <div
      id="testimonial-section"
      className="grid lg:grid-cols-3 gap-8 text-left transition-all duration-500 ease-in-out"
    >
      {testimonials.slice(0, showAll ? testimonials.length : 6).map((t, i) => (
        <div
          key={i}
          className="opacity-0 animate-fadeIn"
          // style={{
          //   animationDelay: `${i * 0.01}s`,
          //   animationFillMode: "forwards",
          // }}
        >
          <TestimonialCard {...t} />
        </div>
      ))}
    </div>

    {/* See More / See Less Button */}
    <div className="mt-10">
      <button
        onClick={() => {
          setShowAll(!showAll);
          setTimeout(() => {
            if (!showAll) {
              // Smooth scroll to newly revealed section
              const el = document.getElementById("testimonial-section");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, 150);
        }}
        className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
  </div>
</section>



            {/* Book Demo Modal */}
            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;

