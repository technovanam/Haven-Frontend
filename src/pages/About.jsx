import React from "react";
import { Link } from "react-router-dom";
import { Building2, BadgeCheck, CircleStar } from "lucide-react";
const About = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="flex items-center justify-center text-center py-6 px-6 bg-white">
  <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg max-w-9xl w-full text-center py-35  md:px-24">
    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
  <Building2 className="w-5 h-5" />
  <span className="text-lg tracking-wide uppercase">About Us</span>
</div>


    <h1 className="text-5xl md:text-6xl max-w-7xl text-center justify-center font-bold text-slate-900 leading-tight mb-6">
      Empowering Students Through{" "}
      <span className="italic text-blue-700">Personalized Learning</span>
    </h1>

    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      At Haven Tutors, we make learning inspiring, flexible, and supportive so
      every student can grow with confidence.
    </p>

   
  </div>
</section>


      {/* ---------------------- OUR STORY / MISSION / VISION ---------------------- */}
<section className="py-24 px-6 md:px-16 lg:px-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
    {/* LEFT COLUMN */}
    <div>
      <button className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-blue-600 font-semibold mb-3 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
        <CircleStar className="w-4 h-4" />
        Our Story
      </button>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
        Shaping the Future of Personalized Learning
      </h2>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        At Haven Tutors, we believe education should be personal, flexible,
        and inspiring. Driven by a passion for meaningful learning, we’re
        on a mission to create a calm, supportive environment where every
        student can grow with confidence.
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-10">
  {/* Stat 1 */}
  <div className="flex-1 bg-white border-2 border-gray-300 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
    <h3 className="text-4xl font-bold text-blue-700">20K+</h3>
    <p className="text-slate-600 text-sm mt-2">
      Students guided toward <br/>success.
    </p>
  </div>

  {/* Stat 2 */}
  <div className="flex-1 bg-white border-2 border-gray-300 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
    <h3 className="text-4xl font-bold text-blue-700">90%</h3>
    <p className="text-slate-600 text-sm mt-2">
      Improved confidence and understanding.
    </p>
  </div>
</div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-12 pl-10 relative">
      {/* Vertical line connecting the dots - starts at middle of "Our Mission" */}
      <div className="absolute left-0 top-[14px] h-[265px] w-[2px] bg-gray-200"></div>
      
      {/* MISSION */}
      <div className="relative">
        {/* Purple dot - positioned at middle of heading */}
        <div className="absolute -left-[45px] top-[14px] w-3 h-3 bg-blue-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
         
          Our Mission
        </h3>
        <p className="text-slate-600 mb-4">
          Haven Tutors is built on the idea that every learner deserves
          personal attention, clear guidance, and a pace that fits them.
          Our mission is to make quality education accessible and enjoyable
          for all.
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Empower students to reach their full potential.</li>
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Blend traditional teaching with modern tools.</li>
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Provide consistent mentorship and flexibility.</li>
        </ul>
      </div>

      {/* VISION */}
      <div className="relative">
        {/* Purple dot - positioned at middle of heading */}
        <div className="absolute -left-[45px] top-[11px] w-3 h-3 bg-blue-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
          
          Our Vision
        </h3>
        <p className="text-slate-600 mb-4">
          We envision a world where education adapts to each learner — not
          the other way around. Haven Tutors aims to build a safe, inspiring
          space that encourages curiosity and lifelong learning.
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Build confidence through personalized support.</li>
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Create an environment for growth and independence.</li>
          <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> Inspire a lifelong love for learning.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* ---------------------- WHAT WE DO ---------------------- */}
<section className="py-24 px-6 md:px-6 lg:px-6 bg-white">
  <div className="max-w-9xl mx-auto">
    {/* Outer white box */}
    <div className="bg-slate-50 rounded-3xl shadow-lg p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We go beyond traditional tutoring — creating personalised learning
          experiences that adapt to every student’s style, goals, and schedule.
        </p>
      </div>

      {/* Four cards inside the white box */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="text-blue-600 mb-4 text-3xl">💡</div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            One-on-One Tutoring
          </h3>
          <p className="text-slate-600">
            Personalised lessons tailored to each student’s pace and goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="text-blue-600 mb-4 text-3xl">💡</div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Group Sessions
          </h3>
          <p className="text-slate-600">
            Collaborative learning that builds teamwork and shared progress.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="text-blue-600 mb-4 text-3xl">💡</div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            All Boards Covered
          </h3>
          <p className="text-slate-600">
            CBSE, ICSE, IB, Cambridge, and State Boards.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="text-blue-600 mb-4 text-3xl">💡</div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Flexible Scheduling
          </h3>
          <p className="text-slate-600">
            Learn on your schedule — mornings, evenings, or weekends.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ---------------------- OUR APPROACH ---------------------- */}
<section className="py-24 px-6 md:px-16 lg:px-24 bg-blue-50">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-slate-900">Our Approach</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
    {/* LEFT SIDE - IMAGE */}
    <div className="flex justify-center">
      <img
        src="/assets/approach.jpg" // 👈 replace with your actual image path
        alt="Student Learning"
        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="text-left">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        Empowering Minds Through Personalized and Interactive Learning
      </h3>
      <p className="text-slate-600 mb-6">
        Every student learns differently. We focus on understanding each learner’s
        strengths and building from there.
      </p>

      <ul className="space-y-5 text-slate-700">
        <li className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p>
            <span className="font-semibold text-slate-900">
              Personalized Learning Paths:
            </span>{" "}
            Tailored content to match each student’s pace and goals.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h-4a2 2 0 00-2 2v4h8V6a2 2 0 00-2-2z"
              />
            </svg>
          </div>
          <p>
            <span className="font-semibold text-slate-900">
              Interactive Sessions:
            </span>{" "}
            Engaging live classes and discussion forums.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A3 3 0 016 17h12a3 3 0 01.879.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p>
            <span className="font-semibold text-slate-900">
              Mentorship Programs:
            </span>{" "}
            One-on-one guidance from experienced educators.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* ---------------------- CTA SECTION ---------------------- */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-3xl">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join Haven Tutors today and take the first step toward confident,
            personalized, and flexible learning.
          </p>
          <Link
            to="/book-demo"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
