import React, { useState } from 'react';

// You might need to install heroicons: npm install @heroicons/react
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { PlayCircleIcon } from '@heroicons/react/24/outline';


// --- Data: Merging your content with UI elements from the image ---
// NOTE: Data array remains the same as provided in the last turn
const servicesData = [
  // 1. Tutoring Formats
  {
    id: 101,
    category: 'Tutoring Formats',
    title: 'Online One-on-One Live Sessions',
    description: 'Receive highly personalized attention with dedicated lessons from expert tutors across all subjects.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Book a Session',
  },
  {
    id: 102,
    category: 'Tutoring Formats',
    title: 'Group Classes',
    description: 'Small batches designed for effective collaborative learning, offering an excellent and affordable learning experience.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Join a Group',
  },
  {
    id: 103,
    category: 'Tutoring Formats',
    title: 'Personalized Learning Plans',
    description: 'Lessons are completely tailored to individual student needs, including focused options for specific exam preparation.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80',
    buttonText: 'Customize Plan',
  },
  {
    id: 104,
    category: 'Tutoring Formats',
    title: 'Interactive Online Classroom',
    description: 'A state-of-the-art virtual classroom environment provided to ensure a rich and better overall learning experience.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'View Classroom',
  },
  {
    id: 105,
    category: 'Tutoring Formats',
    title: 'Flexible Scheduling',
    description: 'Students and tutors can set their own schedules, allowing students to book lessons at their convenience.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Check Availability',
  },
  {
    id: 106,
    category: 'Tutoring Formats',
    title: 'Homework Help',
    description: 'Get quick, on-demand assistance for assignments, projects, and difficult school work.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Get Help Now',
  },
  {
    id: 107,
    category: 'Tutoring Formats',
    title: 'Doubt-Clearing Sessions',
    description: 'Dedicated sessions focused solely on resolving specific questions, ensuring no concept is left unclear.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Book a Session',
  },
  {
    id: 108,
    category: 'Tutoring Formats',
    title: 'Global Access',
    description: 'Our comprehensive tutoring services and resources are readily accessible to learners across the globe.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    buttonText: 'Start Learning',
  },
  
  // 2. Specialized Learning Services
  {
    id: 201,
    category: 'Specialized Learning Services',
    title: 'Learning Skill Development',
    description: 'Helping students with study techniques, time management, effective note-taking, and essential exam strategies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Develop Skills',
  },
  {
    id: 202,
    category: 'Specialized Learning Services',
    title: 'Curriculum-Aligned Tutoring',
    description: 'Sessions are specifically tailored to your school curriculum to ensure maximum relevance and direct impact on grades.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Find Your Board',
  },
  {
    id: 203,
    category: 'Specialized Learning Services',
    title: 'Remedial Classes',
    description: 'Dedicated support for students who require extra help or reinforcement in specific, challenging topics.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Start Remedial',
  },
  
  // 3. Virtual classroom with interactive tools
  {
    id: 301,
    category: 'Virtual Classroom Tools',
    title: 'Live Video/Audio Connection',
    description: 'High-quality, reliable, and instantaneous connection for seamless live interaction between student and tutor.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'See Demo',
  },
  {
    id: 302,
    category: 'Virtual Classroom Tools',
    title: 'Screen Sharing',
    description: 'Effortlessly collaborate on documents, presentations, or share textbook content in real-time.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Explore Tool',
  },
  {
    id: 303,
    category: 'Virtual Classroom Tools',
    title: 'Interactive Whiteboard',
    description: 'A shared digital canvas for live explanations, drawing complex diagrams, and solving problems together.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Try Whiteboard',
  },
  {
    id: 304,
    category: 'Virtual Classroom Tools',
    title: 'Online Tests & Quizzes',
    description: 'Regular assessments and quizzes built into the platform to track progress and gauge understanding immediately.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80',
    buttonText: 'View Assessments',
  },

  // 4. Tutor & Scheduling Features
  {
    id: 401,
    category: 'Tutor & Scheduling Features',
    title: 'Detailed Tutor Profiles',
    description: 'View comprehensive information including qualifications, experience, and student ratings before you book a session.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    buttonText: 'Meet Tutors',
  },
  {
    id: 402,
    category: 'Tutor & Scheduling Features',
    title: 'Easy Booking System',
    description: 'Schedule your one-on-one or group sessions instantly and seamlessly via our intuitive online booking platform.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Book Now',
  },
  {
    id: 403,
    category: 'Tutor & Scheduling Features',
    title: 'Flexible Timings',
    description: 'Access tutors available across various time zones to fit any student schedule, anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'View Schedule',
  },
  {
    id: 404,
    category: 'Tutor & Scheduling Features',
    title: 'Trial Classes',
    description: 'A first class that is either completely free or discounted, allowing you to experience our service risk-free.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Book Trial',
  },
  
  // 5. Additional Services
  {
    id: 501,
    category: 'Additional Services',
    title: 'Parent-Teacher Reports',
    description: 'Receive regular, detailed updates on your student’s progress, areas of improvement, and session performance.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'View Sample Report',
  },
  {
    id: 502,
    category: 'Additional Services',
    title: 'Career Guidance & Counselling',
    description: 'Expert guidance for long-term academic planning and making informed decisions about future career paths.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80',
    buttonText: 'Book Counselling',
  },
  {
    id: 503,
    category: 'Additional Services',
    title: 'Workshops & Webinars',
    description: 'Specialized sessions on topics like advanced study skills, motivation, exam tips, and subject deep dives.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Register Now',
  },
  {
    id: 504,
    category: 'Additional Services',
    title: '24/7 Chat Support',
    description: 'Instant, round-the-clock help for quick questions, technical issues, and scheduling assistance.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    buttonText: 'Start Chat',
  },
];

const categories = [
    'All Services',
    'Tutoring Formats',
    'Specialized Learning Services',
    'Virtual Classroom Tools',
    'Tutor & Scheduling Features',
    'Additional Services'
];

// --- Reusable Card Component (Simplified and Enhanced for attractiveness) ---
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 hover:shadow-xl hover:scale-[1.01]">
      {/* Image with attractive overlay on hover */}
      <div className="relative">
        <img className="w-full h-44 object-cover transition-opacity duration-300" src={service.image} alt={service.title} />
        {/* Subtle gradient overlay for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category and Title - Improved Emphasis */}
        <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-1">{service.category}</p>
        <h3 className="text-xl font-bold text-slate-900 leading-snug flex-grow">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="mt-3 mb-6 text-slate-600 flex-grow text-base">
          {service.description}
        </p>


        {/* Button with modern focus ring */}
        <button 
          className="mt-4 w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/80"
        >
          {service.buttonText}
        </button>
      </div>
    </div>
  );
};

// --- Main Services Page Component ---
const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = servicesData.filter(service =>
  activeCategory === 'All Services' || service.category === activeCategory
  );

  return (
    <div className="bg-slate-50 font-sans">
      {/* Enforcing uniform horizontal padding of px-6 (24px) */}
      <div className="container mx-auto py-24 px-24"> 
        {/* Header Section */}
        <div className="text-center mb-16">
             <span className="text-blue-600 font-semibold border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 text-sm">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium text-slate-900 mt-4">
            Designed for Confident Learning
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            Discover flexible, personalized tutoring options built to fit every student’s <br /> pace, goals, and board of education.
          </p>
        </div>

        {/* Category Tabs - Underline Style */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 border-b border-gray-200">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                // Styling for the underline effect
                className={`py-3 px-1 text-base font-regular rounded-t-lg transition-all duration-300 ease-in-out whitespace-nowrap -mb-px 
                  ${
                    activeCategory === category
                      // Active state: Blue text and a thick blue bottom border
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      // Inactive state: Gray text and transparent border for a consistent height
                      : 'text-slate-600 hover:text-blue-600 border-b-2 border-transparent'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid - Simplified Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-20 bg-white p-10 rounded-xl shadow-lg border border-slate-100">
             <h2 className="text-3xl font-bold text-slate-900">Ready to start your learning journey?</h2>
             <button className="mt-6 bg-blue-600 text-white font-regular py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg">
                🎓 Book Your Free Demo
            </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;