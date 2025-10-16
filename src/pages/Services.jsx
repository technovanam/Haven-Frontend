import React, { useState } from "react";

// --- Heroicons (optional for CTA icons) ---
import { PlayCircleIcon } from "@heroicons/react/24/outline";

// --- Data ---
const servicesData = [
  // Tutoring Formats
  {
    id: 101,
    category: "Tutoring Formats",
    title: "Online One-on-One Live Sessions",
    description:
      "Receive highly personalized attention with dedicated lessons from expert tutors across all subjects.",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 102,
    category: "Tutoring Formats",
    title: "Group Classes",
    description:
      "Small batches designed for effective collaborative learning, offering an excellent and affordable learning experience.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 103,
    category: "Tutoring Formats",
    title: "Personalized Learning Plans",
    description:
      "Lessons are completely tailored to individual student needs, including focused options for specific exam preparation.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1184&q=80",
  },
  {
    id: 104,
    category: "Tutoring Formats",
    title: "Interactive Online Classroom",
    description:
      "A state-of-the-art virtual classroom environment provided to ensure a rich and better overall learning experience.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 105,
    category: "Tutoring Formats",
    title: "Flexible Scheduling",
    description:
      "Students and tutors can set their own schedules, allowing students to book lessons at their convenience.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 106,
    category: "Tutoring Formats",
    title: "Homework Help",
    description:
      "Get quick, on-demand assistance for assignments, projects, and difficult school work.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 107,
    category: "Tutoring Formats",
    title: "Doubt-Clearing Sessions",
    description:
      "Dedicated sessions focused solely on resolving specific questions, ensuring no concept is left unclear.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 108,
    category: "Tutoring Formats",
    title: "Global Access",
    description:
      "Our comprehensive tutoring services and resources are readily accessible to learners across the globe.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1171&q=80",
  },

  // Specialized Learning Services
  {
    id: 201,
    category: "Specialized Learning Services",
    title: "Learning Skill Development",
    description:
      "Helping students with study techniques, time management, effective note-taking, and essential exam strategies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 202,
    category: "Specialized Learning Services",
    title: "Curriculum-Aligned Tutoring",
    description:
      "Sessions are specifically tailored to your school curriculum to ensure maximum relevance and direct impact on grades.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 203,
    category: "Specialized Learning Services",
    title: "Remedial Classes",
    description:
      "Dedicated support for students who require extra help or reinforcement in specific, challenging topics.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1170&q=80",
  },

  // Virtual Classroom Tools
  {
    id: 301,
    category: "Virtual Classroom Tools",
    title: "Live Video/Audio Connection",
    description:
      "High-quality, reliable, and instantaneous connection for seamless live interaction between student and tutor.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 302,
    category: "Virtual Classroom Tools",
    title: "Screen Sharing",
    description:
      "Effortlessly collaborate on documents, presentations, or share textbook content in real-time.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 303,
    category: "Virtual Classroom Tools",
    title: "Interactive Whiteboard",
    description:
      "A shared digital canvas for live explanations, drawing complex diagrams, and solving problems together.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 304,
    category: "Virtual Classroom Tools",
    title: "Online Tests & Quizzes",
    description:
      "Regular assessments and quizzes built into the platform to track progress and gauge understanding immediately.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1184&q=80",
  },

  // Tutor & Scheduling Features
  {
    id: 401,
    category: "Tutor & Scheduling Features",
    title: "Detailed Tutor Profiles",
    description:
      "View comprehensive information including qualifications, experience, and student ratings before you book a session.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 402,
    category: "Tutor & Scheduling Features",
    title: "Easy Booking System",
    description:
      "Schedule your one-on-one or group sessions instantly and seamlessly via our intuitive online booking platform.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 403,
    category: "Tutor & Scheduling Features",
    title: "Flexible Timings",
    description:
      "Access tutors available across various time zones to fit any student schedule, anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 404,
    category: "Tutor & Scheduling Features",
    title: "Trial Classes",
    description:
      "A first class that is either completely free or discounted, allowing you to experience our service risk-free.",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1170&q=80",
  },

  // Additional Services
  {
    id: 501,
    category: "Additional Services",
    title: "Parent-Teacher Reports",
    description:
      "Receive regular, detailed updates on your student’s progress, areas of improvement, and session performance.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 502,
    category: "Additional Services",
    title: "Career Guidance & Counselling",
    description:
      "Expert guidance for long-term academic planning and making informed decisions about future career paths.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1184&q=80",
  },
  {
    id: 503,
    category: "Additional Services",
    title: "Workshops & Webinars",
    description:
      "Specialized sessions on topics like advanced study skills, motivation, exam tips, and subject deep dives.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 504,
    category: "Additional Services",
    title: "24/7 Chat Support",
    description:
      "Instant, round-the-clock help for quick questions, technical issues, and scheduling assistance.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1171&q=80",
  },
];

const categories = [
  "Tutoring Formats",
  "Specialized Learning Services",
  "Virtual Classroom Tools",
  "Tutor & Scheduling Features",
  "Additional Services",
];

const categoryCTA = {
  "Tutoring Formats": "🎓 Book Your Free Demo",
  "Specialized Learning Services": "📘 Explore Specialized Learning",
  "Virtual Classroom Tools": "💻 Experience the Classroom",
  "Tutor & Scheduling Features": "📅 Find Your Tutor",
  "Additional Services": "💬 Connect With Us",
};

const categoryIntro = {
  "Tutoring Formats":
    "Our tutoring formats are designed for flexibility and personal attention. Choose a mode that fits your pace and goals.",
  "Specialized Learning Services":
    "Programs focused on skill-building, curriculum alignment, and targeted support for every learner.",
  "Virtual Classroom Tools":
    "Our virtual tools create an engaging and interactive online learning environment.",
  "Tutor & Scheduling Features":
    "Easily find, book, and manage your tutoring sessions with full transparency and flexibility.",
  "Additional Services":
    "Beyond tutoring, we provide ongoing academic support and guidance for students and parents.",
};

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 text-left">
    <img
      className="w-full h-48 object-cover"
      src={service.image}
      alt={service.title}
    />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="text-slate-600 mt-3 text-base">{service.description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tutoring Formats");

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  return (
    <div className="bg-slate-50 pt-10 pb-20 px-24 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 text-sm">
          Our Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-medium text-slate-900 mt-4 pt-6">
          Designed for Confident Learning
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
          Discover flexible, personalized tutoring options built to fit every
          student’s pace, goals, and board of education.
        </p>
      </div>

      {/* Category Tabs - Underline Style */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-3 px-1 text-[18px] font-medium rounded-t-lg transition-all duration-300 ease-in-out whitespace-nowrap -mb-px 
                ${
                  activeCategory === category
                    ? "text-blue-600 border-b-3 border-blue-600"
                    : "text-slate-600 hover:text-blue-600 border-b-2 border-transparent"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <section className="mb-20 text-center">
        {/* <h2 className="text-3xl font-bold text-slate-900">
          {activeCategory}
        </h2> */}
        {/* <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          {categoryIntro[activeCategory]}
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg">
            {categoryCTA[activeCategory]}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
