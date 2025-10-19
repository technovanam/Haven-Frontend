import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, BadgeCheck, CircleStar, User, Users, BookOpen, Clock, Target, MessageCircle, UserCheck } from "lucide-react";
import approachImage from "../assets/approachImage.jpg"; 
import BookDemoModal from "../components/BookDemoModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="flex items-center justify-center text-center py-6 px-6 bg-white">
  <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg max-w-9xl w-full text-center py-35  md:px-24">
    <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
  <Building2 className="w-5 h-5" />
  <span className="text-md tracking-wide uppercase">About Us</span>
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
<section className="py-6 px-6 md:px-6 lg:px-6 bg-white">
  <div className="max-w-9xl mx-auto">
    {/* Outer white box */}
    <div className="bg-slate-200 rounded-3xl shadow-lg p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We go beyond traditional tutoring — creating personalised learning
          experiences that adapt to every student’s style, goals, and schedule.
        </p>
      </div>

      {/* Four cards inside the white box */}
      <div className="grid md:grid-cols-2 gap-8 px-24">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            One-on-One Tutoring
          </h3>
          <p className="text-slate-600">
            Focused attention with personalised lessons tailored to your pace and goals. Tutors build on strengths and address gaps to boost confidence.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Group Sessions
          </h3>
          <p className="text-slate-600">
            Learn and grow together. Interactive sessions build teamwork, discussion, healthy competition, and motivation as students learn from one another.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            All Boards Covered
          </h3>
          <p className="text-slate-600">
          From CBSE and ICSE to IB, Cambridge, and State Boards — we cover it all. Each lesson fits your board's needs for strong understanding and exam readiness.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition-all duration-300">
         <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Flexible Scheduling
          </h3>
          <p className="text-slate-600">
           Morning, evening, or weekend classes — choose what fits best. It’s easy to balance studies with your routine while keeping learning consistent and stress-free.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ---------------------- OUR APPROACH ---------------------- */}
<section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-slate-900">Our Approach</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
    {/* LEFT SIDE - IMAGE */}
    <div className="flex justify-center">
      <img
        src={approachImage}
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

  {/* List with dividing lines */}
  <div className="divide-y divide-gray-300 border-b border-gray-300">
    <div className="flex items-start gap-3 py-3">
      <div className="bg-blue-100 p-2 rounded-full">
        <Target className="h-5 w-5 text-blue-700" />
      </div>
      <p className="text-slate-700">
        <span className="font-semibold text-slate-900">
          Personalized Learning Paths:
        </span>{" "}
        Tailored content to match each student’s pace and goals.
      </p>
    </div>

    <div className="flex items-start gap-3 py-5">
      <div className="bg-blue-100 p-2 rounded-full">
        <MessageCircle className="h-5 w-5 text-blue-700" />
      </div>
      <p className="text-slate-700">
        <span className="font-semibold text-slate-900">
          Interactive Sessions:
        </span>{" "}
        Engaging live classes and discussion forums.
      </p>
    </div>

    <div className="flex items-start gap-3 py-5">
      <div className="bg-blue-100 p-2 rounded-full">
        <UserCheck className="h-5 w-5 text-blue-700" />
      </div>
      <p className="text-slate-700">
        <span className="font-semibold text-slate-900">
          Mentorship Programs:
        </span>{" "}
        One-on-one guidance from experienced educators.
      </p>
    </div>
  </div>
</div>

  </div>
</section>


      {/* ---------------------- CTA SECTION ---------------------- */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-[7rem]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-bold mb-4">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Haven Tutors today and take the first step toward confident,<br/>
            personalized, and flexible learning.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md text-xl"
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
