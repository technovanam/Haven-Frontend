import React, { useState } from "react";
import { Building2, BadgeCheck, CircleStar, User, Users, BookOpen, Clock, Target, MessageCircle, UserCheck } from "lucide-react";
import BookDemoModal from "../components/BookDemoModal";

// Mock BookDemoModal component


const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800 font-sans">
     {/* ============================================================ */}
{/* HERO SECTION */}
{/* ============================================================ */}

<section className="flex items-center justify-center text-center py-6 px-4 sm:px-6 bg-white">
  <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl shadow-lg max-w-9xl w-full text-center py-16 sm:py-20 md:py-35 px-4 sm:px-6 md:px-24">
    <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm border border-blue-100 mb-4 sm:mb-6">
      <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-xs sm:text-sm md:text-md tracking-wide uppercase">
        About Us
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-6xl max-w-7xl text-center justify-center font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
      Empowering Students Through <br />
      <span className="italic text-blue-700">Personalized Learning</span>
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
      At Haven Tutors, we make learning inspiring, flexible, and supportive so every student can grow with confidence.
    </p>
  </div>
</section>

      {/* ============================================================ */}
      {/* STORY, MISSION & VISION SECTION */}
      {/* ============================================================ */}

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* LEFT COLUMN */}
          <div>
            <button className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide text-blue-600 font-semibold mb-3 sm:mb-4 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
              <CircleStar className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Story
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Shaping the Future of Personalized Learning
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              At Haven Tutors, we believe education should be personal, flexible, and inspiring. Guided by a passion for meaningful learning, we've built a calm, supportive environment where every student can grow with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10">
              {/* Stat 1 */}
              <div className="flex-1 bg-white border-2 border-gray-300 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 text-left hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-700">1K+</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Students guided toward success.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex-1 bg-white border-2 border-gray-300 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 text-left hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-700">90%</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Improved confidence and understanding.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 sm:space-y-12 lg:pl-10 relative mt-8 lg:mt-0">
            {/* Vertical line - hidden on mobile/tablet, visible on desktop (xl+) */}
            <div className="hidden xl:block absolute left-0 top-[14px] h-[285px] w-[2px] bg-gray-200"></div>
            
            {/* MISSION */}
            <div className="relative">
              {/* Dot - hidden on mobile/tablet, visible on desktop (xl+) */}
              <div className="hidden xl:block absolute -left-[45px] top-[14px] w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="hidden lg:block absolute -left-[45px] top-[14px] w-3 h-3 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 flex items-center gap-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                Haven Tutors is founded on the belief that every learner deserves personal attention, clear guidance, and a learning pace that fits them. Our mission is to make quality education both accessible and enjoyable for all.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Empower students to reach their full potential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Blend traditional teaching with modern tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Provide consistent mentorship and flexibility.</span>
                </li>
              </ul>
            </div>

            {/* VISION */}
            <div className="relative">
              {/* Dot - hidden on mobile, visible on lg+ */}
              <div className="hidden lg:block absolute -left-[45px] top-[11px] w-3 h-3 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 flex items-center gap-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                We envision a world where education adapts to each learner — not the other way around. Haven Tutors strives to build a safe, inspiring space that nurtures curiosity and lifelong learning.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Build confidence through personalized support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Create an environment for growth and independence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Inspire a lifelong love for learning.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE DO SECTION */}
      {/* ============================================================ */}

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Outer box */}
          <div className="bg-slate-200 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                What We Do
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
                We go beyond traditional tutoring — creating personalized learning experiences that adapt to every student's style, goals, and schedule.
              </p>
            </div>

            {/* Four cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  One-on-One Tutoring
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Focused attention with customized lessons tailored to each student's pace and goals. Tutors build on strengths, close learning gaps, and boost confidence with steady guidance.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Group Sessions
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Learn and grow together. Our interactive group classes encourage teamwork, discussion, and healthy competition while motivating students to learn from one another.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  All Boards Covered
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  From CBSE and ICSE to IB, Cambridge, and State Boards — we cover it all. Each lesson is aligned with your curriculum to ensure solid understanding and exam readiness.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Morning, evening, or weekend — choose what fits best. Our flexible timings help students balance academics with their routine while keeping learning consistent and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* ============================================================ */}
{/* OUR APPROACH SECTION */}
{/* ============================================================ */}

<section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
      Our Approach
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
    {/* LEFT SIDE - IMAGE */}
    <div className="flex justify-center order-2 md:order-1">
      <img
        src="https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/approachImage_ova89m.jpg"
        alt="Student Learning"
        className="rounded-xl sm:rounded-2xl shadow-lg w-full max-w-md object-cover"
        loading="lazy"
      />
    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="text-left order-1 md:order-2">
      <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">
        Empowering Minds Through Personalized and Interactive Learning
      </h3>
      <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
        Every student learns differently. Our approach focuses on understanding each learner's strengths and creating a path that builds confidence and lasting success.
      </p>

      {/* List with dividing lines */}
      <div className="divide-y divide-gray-300">
        <div className="flex items-start gap-2 sm:gap-3 py-3 sm:py-4">
          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" />
          </div>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-semibold text-slate-900">
              Personalized Learning Paths:
            </span>{" "}
            Lessons designed to match each student's pace, style, and academic goals.
          </p>
        </div>

        <div className="flex items-start gap-2 sm:gap-3 py-3 sm:py-4">
          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" />
          </div>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-semibold text-slate-900">
              Interactive Sessions:
            </span>{" "}
            Engaging live classes and discussions that make learning active, fun, and meaningful.
          </p>
        </div>

        <div className="flex items-start gap-2 sm:gap-3 py-3 sm:py-4">
          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
            <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" />
          </div>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-semibold text-slate-900">
              Mentorship Programs:
            </span>{" "}
            Ongoing one-on-one support from experienced educators who guide, motivate, and inspire progress.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ============================================================ */}
      {/* CALL TO ACTION SECTION */}
      {/* ============================================================ */}

      <section className="py-12 sm:py-16 md:py-20 lg:py-28 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[7rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Join Haven Tutors today and take the first step toward confident,
            <br className="hidden sm:block" />
            personalized, and flexible learning.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl md:rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Book a Free Demo
          </button>
        </div>
      </section>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    
  );
};

export default About;