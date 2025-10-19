import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/Home_top.png';
import featuresImage from '../assets/About.png';
import BookDemoModal from '../components/BookDemoModal';

// --- Feature List Item Component ---
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


// --- SVG Icons (remain the same) ---
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
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-16  px-24 md:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <p className="font-semibold text-gray-500 mb-2">#1 Online Course 2025</p>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Shape Your Future with the Right Knowledge
                            </h1>
                            <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 mb-8">
                                Discover a world of knowledge with our cutting-edge online course. Empower yourself to succeed in your career, passions & personal growth journey.
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
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://placehold.co/24x24/E2E8F0/4A5568?text=A" alt=""/>
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://placehold.co/24x24/E2E8F0/4A5568?text=B" alt=""/>
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-blue-400" src="https://placehold.co/24x24/E2E8F0/4A5568?text=C" alt=""/>
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold">More than</p>
                                    <p>800,000+ students</p>
                                </div>
                            </div>
                            {/* Floating Card 2: Collaboration */}
                             <div className="absolute top-1/2 right-20 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-xl shadow-lg z-20 flex items-center space-x-2">
                                <div className="bg-white/30 p-1 rounded-full">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className="text-sm font-semibold">Best Collaboration</span>
                            </div>
                            {/* Floating Card 3: Pricing */}
                            <div className="absolute bottom-12 left-20 transform -translate-x-1/4 bg-blue-500 text-white p-4 rounded-xl shadow-lg z-20">
                                <p className="text-xs font-bold bg-yellow-400 text-blue-800 rounded-full px-2 py-0.5 inline-block mb-1">50% OFF</p>
                                <p className="font-bold text-lg">Premium+</p>
                                <p className="text-3xl font-bold">$160</p>
                                <p className="text-xs opacity-80">/ Year To Get All Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
            <div className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">
                    <div className="w-full bg-slate-50 rounded-3xl shadow-sm border border-slate-200 py-10 px-4">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                            {/* Stat 1 */}
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900">100%</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Satisfaction rate</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 2 */}
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900">12+</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Years of experience</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 3 */}
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900">20k+</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Total Courses</p>
                            </div>

                            {/* Dot separator */}
                            <div className="hidden md:block text-4xl font-bold text-gray-300">·</div>

                            {/* Stat 4 */}
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900">90+</h3>
                                <p className="text-slate-500 mt-2 text-sm md:text-base">Course Category</p>
                            </div>
                        </div>
                    </div>
                </div>
</section>

{/* --- Why Choose Haven Tutors Section --- */}
<section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl shadow-sm border border-gray-100  p-10 md:p-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
    
    {/* Left Column: Image with floating cards */}
    <div className="relative flex justify-center w-full md:w-1/2 ">
      <div className="relative">
        <img
          src={featuresImage}
          alt="Student learning online with tutor"
          className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md object-cover h-125"
        />

        {/* Floating Card: Progress Card */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg w-44 border border-gray-100">
          <p className="text-xs text-gray-500 font-medium">Learning Progress</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">55%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: "55%" }}
            ></div>
          </div>
        </div>

        {/* Floating Card: Growth / Rating */}
        <div className="absolute -top-8 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 w-40 text-center">
          <p className="text-xs text-gray-500 font-medium">Last month</p>
          <p className="text-xl font-bold text-slate-800 flex items-center justify-center gap-1 mt-1">
            <span className="text-green-500">↗</span> 25.20%
          </p>
          <button className="mt-1 text-xs text-blue-600 font-semibold hover:text-blue-700">
            View all →
          </button>
        </div>
      </div>
    </div>

    {/* Right Column: Haven Tutors Content */}
    <div className="w-full md:w-1/2 text-left">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        Why Choose Haven Tutors
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
        Powerful Features for Your Learning Journey
      </h2>

      <p className="text-slate-600 mb-8 text-base leading-relaxed">
        From personalized learning paths to interactive lessons, we’ve designed every feature
        to make your learning experience simple, calm, and confidence-building.
      </p>

      {/* Features List */}
      <div className="divide-y divide-gray-300 border-b border-gray-300">
        <div className="flex items-start gap-3 py-3">
          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              One-on-One Tutoring   
            </h4>
            <p className="text-slate-600 text-sm">
              Personalized sessions focused on each student’s goals and learning pace.
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
              Book lessons at convenient times that fit your routine.
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
              Covers CBSE, ICSE, IB, Cambridge, and State Boards.
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
              Regular updates, doubt clearing, and steady mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* --- Testimonials Section (Updated) --- */}
            <section className="py-20 bg-white sm:px-6 lg:px-55">
                <div className="container mx-auto text-center">
                    <div className="inline-block bg-slate-100 text-slate-600 text-sm font-semibold py-1 px-4 rounded-full mb-4">
                        Our Feedbacks
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Learners Are Saying</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                        Hear directly from our students about how our courses have transformed their careers and lives.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8 text-left">
                      <TestimonialCard
                        quote="This platform helped me land my dream job in data science. The courses were practical, understandable and easy."
                        name="John Matthews"
                        role="Product Designer"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=JM"
                        rating={5}
                      />
                      <TestimonialCard
                        quote="I never thought I could start a business, but the entrepreneurship course gave me the confidence."
                        name="Sarah Lee"
                        role="Product Manager"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=SL"
                        rating={4}
                      />
                      <TestimonialCard
                        quote="The flexibility of the courses allowed me to learn at my own pace while managing my job. Highly recommend."
                        name="Michael Davis"
                        role="Marketer"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=MD"
                        rating={5}
                      />
                      <TestimonialCard
                        quote="Gained valuable insights into digital marketing that helped me grow my online business. Thank you."
                        name="David Harris"
                        role="Graphics Designer"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=DH"
                        rating={4}
                      />
                      <TestimonialCard
                        quote="The UX/UI design course was fantastic. This course gave me the skills I needed to advance in my career."
                        name="Jessica Wilson"
                        role="UX/UI Designer"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=JW"
                        rating={5}
                      />
                      <TestimonialCard
                        quote="This platform not only taught me new skills but also inspired me to keep learning and growing every day."
                        name="Laura Martinez"
                        role="Data Scientist"
                        imgSrc="https://placehold.co/48x48/E2E8F0/4A5568?text=LM"
                        rating={4}
                      />
                    </div>

                </div>
            </section>

            {/* Book Demo Modal */}
            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;

