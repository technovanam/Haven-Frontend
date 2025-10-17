import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="flex items-center justify-center py-6 px-6 bg-white">
  <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg max-w-9xl w-full text-center py-24  md:px-24">
    <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
      About Us
    </p>

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
      <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-3">
        Our Story
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
        Shaping the Future of Personalized Learning
      </h2>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        At Haven Tutors, we believe education should be personal, flexible,
        and inspiring. Driven by a passion for meaningful learning, we’re
        on a mission to create a calm, supportive environment where every
        student can grow with confidence.
      </p>

      <div className="flex flex-coljustify-center md:justify-start gap-6 mt-10">
  {/* Stat 1 */}
  <div className="bg-slate-50 border border-gray-100 rounded-2xl shadow-md p-6 w-50% text-center hover:shadow-lg transition-all duration-300">
    <h3 className="text-4xl font-bold text-blue-700">20K+</h3>
    <p className="text-slate-600 text-sm mt-2">
      Students guided toward success.
    </p>
  </div>

  {/* Stat 2 */}
  <div className="bg-slate-50 border border-gray-100 rounded-2xl shadow-md p-6 w-50% text-center hover:shadow-lg transition-all duration-300">
    <h3 className="text-4xl font-bold text-blue-700">90%</h3>
    <p className="text-slate-600 text-sm mt-2">
      Improved confidence and understanding.
    </p>
  </div>
</div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-12 border-l-2 border-blue-100 pl-10">
      {/* MISSION */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
        <p className="text-slate-600 mb-4">
          Haven Tutors is built on the idea that every learner deserves
          personal attention, clear guidance, and a pace that fits them.
          Our mission is to make quality education accessible and enjoyable
          for all.
        </p>
        <ul className="space-y-2 text-slate-700">
          <li>✅ Empower students to reach their full potential.</li>
          <li>✅ Blend traditional teaching with modern tools.</li>
          <li>✅ Provide consistent mentorship and flexibility.</li>
        </ul>
      </div>

      {/* VISION */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
        <p className="text-slate-600 mb-4">
          We envision a world where education adapts to each learner — not
          the other way around. Haven Tutors aims to build a safe, inspiring
          space that encourages curiosity and lifelong learning.
        </p>
        <ul className="space-y-2 text-slate-700">
          <li>✅ Build confidence through personalized support.</li>
          <li>✅ Create an environment for growth and independence.</li>
          <li>✅ Inspire a lifelong love for learning.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* ---------------------- WHAT WE DO ---------------------- */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Do</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            We go beyond traditional tutoring — creating personalized learning
            experiences that adapt to every student’s style, goals, and schedule.
          </p>

          {/* Unique Layout Instead of Simple Cards */}
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                One-on-One Tutoring
              </h3>
              <p className="text-slate-600 mb-6">
                Personalized lessons tailored to each student’s pace and goals.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Group Sessions
              </h3>
              <p className="text-slate-600">
                Collaborative learning that builds teamwork and shared progress.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl shadow-xl p-10 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">All Boards Covered</h3>
              <p className="mb-6 opacity-90">
                CBSE, ICSE, IB, Cambridge, and State Boards.
              </p>

              <h3 className="text-2xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="opacity-90">
                Learn on your schedule — mornings, evenings, or weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- OUR APPROACH ---------------------- */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Every student learns differently. We focus on understanding each
            learner’s strengths and building from there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning",
                desc: "Each session adapts to the student’s learning style and pace.",
              },
              {
                title: "Interactive Lessons",
                desc: "Engaging, practical, and focused on deep understanding.",
              },
              {
                title: "Consistent Mentorship",
                desc: "Regular feedback and support that builds lasting confidence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
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
