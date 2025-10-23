import React, { useState, useEffect } from "react";
import { Building2 } from "lucide-react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BookDemoModal from "../components/BookDemoModal";
import { useLocation } from "react-router-dom";

const servicesData = [  {
    id: 101,
    category: "Tutoring Formats",
    title: "Online One-on-One Live Sessions",
    description:
      "Receive highly personalized attention with dedicated lessons from expert tutors across all subjects.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 102,
    category: "Tutoring Formats",
    title: "Group Classes",
    description:
      "Small batches designed for effective collaborative learning, offering an excellent and affordable learning experience.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 103,
    category: "Tutoring Formats",
    title: "Personalized Learning Plans",
    description:
      "Lessons are completely tailored to individual student needs, including focused options for specific exam preparation.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 104,
    category: "Tutoring Formats",
    title: "Interactive Online Classroom",
    description:
      "A state-of-the-art virtual classroom environment provided to ensure a rich and better overall learning experience.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 105,
    category: "Tutoring Formats",
    title: "Flexible Scheduling",
    description:
      "Students and tutors can set their own schedules, allowing students to book lessons at their convenience.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 106,
    category: "Tutoring Formats",
    title: "Homework Help",
    description:
      "Get quick, on-demand assistance for assignments, projects, and difficult school work.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 107,
    category: "Tutoring Formats",
    title: "Doubt-Clearing Sessions",
    description:
      "Dedicated sessions focused solely on resolving specific questions, ensuring no concept is left unclear.",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 108,
    category: "Tutoring Formats",
    title: "Global Access",
    description:
      "Our comprehensive tutoring services and resources are readily accessible to learners across the globe.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1170&q=80",
  },

  // Specialized Learning Services
  {
    id: 201,
    category: "Specialized Learning Services",
    title: "Learning Skill Development",
    description:
      "Helping students with study techniques, time management, effective note-taking, and essential exam strategies.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 202,
    category: "Specialized Learning Services",
    title: "Curriculum-Aligned Tutoring",
    description:
      "Sessions are specifically tailored to your school curriculum to ensure maximum relevance and direct impact on grades.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 203,
    category: "Specialized Learning Services",
    title: "Remedial Classes",
    description:
      "Dedicated support for students who require extra help or reinforcement in specific, challenging topics.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1170&q=80",
  },

  // Virtual Classroom Tools
  {
    id: 301,
    category: "Virtual Classroom Tools",
    title: "Live Video/Audio Connection",
    description:
      "High-quality, reliable, and instantaneous connection for seamless live interaction between student and tutor.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 302,
    category: "Virtual Classroom Tools",
    title: "Screen Sharing",
    description:
      "Effortlessly collaborate on documents, presentations, or share textbook content in real-time.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 303,
    category: "Virtual Classroom Tools",
    title: "Interactive Whiteboard",
    description:
      "A shared digital canvas for live explanations, drawing complex diagrams, and solving problems together.",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 304,
    category: "Virtual Classroom Tools",
    title: "Online Tests & Quizzes",
    description:
      "Regular assessments and quizzes built into the platform to track progress and gauge understanding immediately.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1170&q=80",
  },

  // Tutor & Scheduling Features
  {
    id: 401,
    category: "Tutor & Scheduling Features",
    title: "Detailed Tutor Profiles",
    description:
      "View comprehensive information including qualifications, experience, and student ratings before you book a session.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 402,
    category: "Tutor & Scheduling Features",
    title: "Easy Booking System",
    description:
      "Schedule your one-on-one or group sessions instantly and seamlessly via our intuitive online booking platform.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 403,
    category: "Tutor & Scheduling Features",
    title: "Flexible Timings",
    description:
      "Access tutors available across various time zones to fit any student schedule, anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 404,
    category: "Tutor & Scheduling Features",
    title: "Trial Classes",
    description:
      "A first class that is either completely free or discounted, allowing you to experience our service risk-free.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1170&q=80",
  },

  // Additional Services
  {
    id: 501,
    category: "Additional Services",
    title: "Parent-Teacher Reports",
    description:
      "Receive regular, detailed updates on your student's progress, areas of improvement, and session performance.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 502,
    category: "Additional Services",
    title: "Career Guidance & Counselling",
    description:
      "Expert guidance for long-term academic planning and making informed decisions about future career paths.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 503,
    category: "Additional Services",
    title: "Workshops & Webinars",
    description:
      "Specialized sessions on topics like advanced study skills, motivation, exam tips, and subject deep dives.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 504,
    category: "Additional Services",
    title: "24/7 Chat Support",
    description:
      "Instant, round-the-clock help for quick questions, technical issues, and scheduling assistance.",
    image:
      "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=1170&q=80",
  },];

const categories = [
  "Tutoring Formats",
  "Specialized Learning Services",
  "Virtual Classroom Tools",
  "Tutor & Scheduling Features",
  "Additional Services",
];

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
    <div className="w-full h-48 overflow-hidden bg-gray-100">
      <img
        className="w-full h-full object-cover"
        src={service.image}
        alt={service.title}
        loading="lazy"
      />
    </div>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  // Scroll to top only when entering this route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="bg-white text-slate-800 font-sans">
      <section className="flex items-center justify-center text-center pt-6 pb-16 px-6 bg-white">
        <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg max-w-9xl w-full text-center py-35 md:px-24">
          <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
            <Building2 className="w-5 h-5" />
            <span className="text-md tracking-wide uppercase">
              Our Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl max-w-7xl text-center justify-center font-bold text-slate-900 leading-tight mb-6">
            Designed for <br />
            <span className="italic text-blue-700">Confident Learning</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover flexible, personalized tutoring options built to fit every
            student’s pace, goals, and board of education.
          </p>
        </div>
      </section>

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

      <section className="mb-20 text-center px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-[7rem]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join Haven Tutors today and take the first step toward confident,
            <br />
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

export default ServicesPage;
