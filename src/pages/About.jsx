import React from 'react';
import { Link } from 'react-router-dom';
import about from '../assets/About.png';

// Reusable component for feature items
const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-4">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    {description && <p className="text-slate-500">{description}</p>}
  </div>
);

// Reusable component for tutor profiles
const TutorCard = ({ imgSrc, name, title }) => (
  <div className="text-center">
    <img
      src={imgSrc}
      alt={`Tutor ${name}`}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
    />
    <h4 className="text-lg font-bold text-slate-800">{name}</h4>
    <p className="text-slate-500">{title}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-center pb-20 pt-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
       <div
         className="absolute inset-0 bg-cover bg-center opacity-50"
         style={{ backgroundImage: `url(${about})` }}
       ></div>
       <div className="relative">
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
               A Haven for Learning
           </h1>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
               Where we empower students to achieve their full potential.
           </p>
       </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-slate-600 text-lg">
            Haven Tutors provides a flexible and personalized online learning
            experience for students of all ages. We believe in the power of
            one-on-one mentorship and strive to make quality education accessible
            to everyone, everywhere. We bridge the gap between traditional and
            modern learning.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <p className="text-2xl text-blue-600 font-medium">
            To empower every student to reach their full potential through personalized, engaging, and accessible online education.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
       <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
                icon={<svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                title="Personalized Tutoring"
                description="One-on-one sessions tailored to meet the unique learning needs and goals of each student."
            />
             <FeatureCard
                icon={<svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                title="Flexible Scheduling"
                description="Learn at your own pace with scheduling options that fit your busy life and academic calendar."
            />
             <FeatureCard
                icon={<svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Interactive Learning"
                description="Engage with our state-of-the-art virtual classroom tools for a dynamic learning experience."
            />
          </div>
        </div>
      </section>

      {/* Meet Our Tutors Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Meet Our Expert Tutors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <TutorCard imgSrc="https://placehold.co/200x200/E2E8F0/4A5568?text=Dr.+S" name="Dr. Sonya Sharma" title="PhD in Physics" />
            <TutorCard imgSrc="https://placehold.co/200x200/E2E8F0/4A5568?text=Mr.+C" name="Mr. David Chen" title="M.Sc. in Mathematics" />
            <TutorCard imgSrc="https://placehold.co/200x200/E2E8F0/4A5568?text=Ms.+E" name="Ms. Emily Carter" title="MA in English Literature" />
            <TutorCard imgSrc="https://placehold.co/200x200/E2E8F0/4A5568?text=Dr.+A" name="Dr. Aaron Foster" title="PhD in Chemistry" />
          </div>
        </div>
      </section>

       {/* Why Haven Tutors? Section - Reusing component structure from Home */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Haven Tutors?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <FeatureCard
                    icon={<svg className="w-10 h-10 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                    title="One-on-One Tutoring"
                />
                <FeatureCard
                    icon={<svg className="w-10 h-10 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Flexible Scheduling"
                />
                <FeatureCard
                    icon={<svg className="w-10 h-10 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>}
                    title="Curriculum-Aligned"
                />
                <FeatureCard
                    icon={<svg className="w-10 h-10 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 11l-.546 9h10.618l-.546-9M12 4v7" /></svg>}
                    title="Global Access"
                />
            </div>
        </div>
    </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-50 rounded-lg p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to discover your potential? Start your learning journey with us today.
          </h2>
          <Link to="/book-demo" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Book Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

