import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/About.png";

const About = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="relative z-10 text-left max-w-4xl px-8 md:px-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            A Haven for Learning
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed">
            Where we empower students to achieve their full potential through
            guidance, flexibility, and innovation.
          </p>
          <Link
            to="/book-demo"
            className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Who We Are
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Haven Tutors is a trusted online learning platform offering
              personalized one-on-one sessions, group classes, and flexible
              schedules for students across the globe. We blend traditional
              teaching values with modern digital tools to create a seamless and
              effective learning experience.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our mission is simple — to make high-quality, customized education
              accessible to every learner, everywhere.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              What Defines Us
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Personalized one-on-one guidance</li>
              <li>• Skilled, experienced global tutors</li>
              <li>• Interactive virtual classrooms</li>
              <li>• Flexible scheduling and customized plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-8 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            To empower every student to reach their full potential through
            personalized, engaging, and accessible online learning.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl">
              <p className="text-slate-600 leading-relaxed">
                We envision a world where education adapts to each learner’s
                pace and curiosity — where every session inspires confidence,
                independence, and a lifelong love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Personalized Tutoring",
                desc: "Tailored sessions that adapt to your pace, goals, and learning style.",
                icon: (
                  <svg
                    className="w-12 h-12 mx-auto text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Flexible Scheduling",
                desc: "Learn on your own time — mornings, evenings, or weekends.",
                icon: (
                  <svg
                    className="w-12 h-12 mx-auto text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Interactive Tools",
                desc: "Learn with digital whiteboards, screen sharing, and real-time collaboration.",
                icon: (
                  <svg
                    className="w-12 h-12 mx-auto text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h18M3 12h18m-9 5h9"
                    />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {feature.icon}
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Haven Tutors */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            Why Choose Haven Tutors?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Expert Global Tutors",
              "Curriculum-Aligned Lessons",
              "Affordable & Transparent Pricing",
              "24/7 Support & Guidance",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  {item}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Experience the difference with our dedicated approach to
                  personalized education.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center text-white">
        <div className="container mx-auto px-8 lg:px-24">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Haven Tutors today and take the first step toward confident,
            personalized, and flexible learning.
          </p>
          <Link
            to="/book-demo"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
