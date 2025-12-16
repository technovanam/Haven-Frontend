import React, { useState, useEffect } from "react";
import { Building2 } from "lucide-react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const StudentDemoModal = React.lazy(() => import("../components/StudentDemoModal"));
import { useLocation } from "react-router-dom";

// ============================================================
// SERVICES DATA
// ============================================================

const servicesData = [
  {
    id: 101,
    category: "Tutoring Formats",
    title: "One-on-One Tutoring",
    description:
      "Personalized, private sessions tailored to the student's unique learning style, pace, and academic goals.",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 102,
    category: "Tutoring Formats",
    title: "Group Tutoring",
    description:
      "Collaborative small group classes that foster peer learning, discussion, and healthy competition.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 103,
    category: "Tutoring Formats",
    title: "Online Tutoring",
    description:
      "Flexible, high-quality virtual lessons accessible from the comfort of your home, anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 201,
    category: "Specialized Learning Services",
    title: "Exam Preparation",
    description:
      "Targeted coaching for board exams (CBSE, ICSE, IGCSE, IB).",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 202,
    category: "Specialized Learning Services",
    title: "Homework Help",
    description:
      "Daily assistance with school assignments to ensure concepts are understood and work is completed on time.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 203,
    category: "Specialized Learning Services",
    title: "Language Learning",
    description:
      "Courses designed to improve reading, writing, and speaking skills in English and other languages.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 204,
    category: "Specialized Learning Services",
    title: "Skill Development",
    description:
      "Workshops and courses focused on critical thinking, coding, public speaking, and other essential life skills.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 301,
    category: "Virtual Classroom Tools",
    title: "Live Video Classes",
    description:
      "High-definition video sessions that replicate the in-classroom experience with real-time interaction.",
    image:
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 302,
    category: "Virtual Classroom Tools",
    title: "Screen Sharing",
    description:
      "Effortlessly collaborate on documents, presentations, or share textbook content in real-time.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 303,
    category: "Virtual Classroom Tools",
    title: "Interactive Whiteboard",
    description:
      "A shared digital canvas for live explanations, drawing complex diagrams, and solving problems together.",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 304,
    category: "Virtual Classroom Tools",
    title: "Online Tests & Quizzes",
    description:
      "Regular assessments and quizzes built into the platform to track progress and gauge understanding immediately.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 401,
    category: "Tutor & Scheduling Features",
    title: "Detailed Tutor Profiles",
    description:
      "View comprehensive information including qualifications, experience, and student ratings before you book a session.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=100",
  },
  {
    id: 402,
    category: "Tutor & Scheduling Features",
    title: "Easy Booking System",
    description:
      "Schedule your one-on-one or group sessions instantly and seamlessly via our intuitive online booking platform.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 403,
    category: "Tutor & Scheduling Features",
    title: "Flexible Timings",
    description:
      "Access tutors available across various time zones to fit any student schedule, anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 404,
    category: "Tutor & Scheduling Features",
    title: "Trial Classes",
    description:
      "A first class that is either completely free or discounted, allowing you to experience our service risk-free.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 501,
    category: "Additional Services",
    title: "Parent-Teacher Reports",
    description:
      "Receive regular, detailed updates on your student's progress, areas of improvement, and session performance.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 502,
    category: "Additional Services",
    title: "Career Guidance & Counselling",
    description:
      "Expert guidance for long-term academic planning and making informed decisions about future career paths.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 503,
    category: "Additional Services",
    title: "Workshops & Webinars",
    description:
      "Specialized sessions on topics like advanced study skills, motivation, exam tips, and subject deep dives.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 504,
    category: "Additional Services",
    title: "24/7 Chat Support",
    description:
      "Instant, round-the-clock help for quick questions, technical issues, and scheduling assistance.",
    image:
      "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=600&q=80",
  },];

const categories = [
  "Tutoring Formats",
  "Specialized Learning Services",
  "Virtual Classroom Tools",
  "Tutor & Scheduling Features",
  "Additional Services",
];

// ============================================================
// CATEGORY INTRODUCTIONS
// ============================================================

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

// ============================================================
// SERVICE CARD COMPONENT
// ============================================================

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 text-left">
    <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden bg-gray-100">
      <img
        className={`w-full h-full object-cover ${service.id === 401 ? 'object-[50%_20%]' : ''}`}
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-base leading-relaxed">{service.description}</p>
    </div>
  </div>
);
// ============================================================
// MAIN SERVICES COMPONENT
// ============================================================

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tutoring Formats");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="bg-white text-slate-800 font-sans">

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}

      <section className="flex items-center justify-center text-center py-6 px-4 sm:px-6 bg-white">
        <div className="relative bg-gradient-to-br from-[#0a2d4a]/5 to-white rounded-2xl sm:rounded-3xl shadow-lg max-w-9xl w-full text-center py-16 sm:py-20 md:py-35 px-4 sm:px-6 md:px-24">

          <div className="inline-flex items-center gap-2 bg-white text-[#0a2d4a] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm border border-[#e8b112] mb-4 sm:mb-6">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e8b112]" />
            <span className="text-xs sm:text-sm md:text-md tracking-wide uppercase">
              Our Services
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-6xl max-w-7xl text-center justify-center font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Designed for <br />
            <span className="italic text-[#e8b112]">Confident Learning</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Discover flexible, personalized tutoring options built to fit every
            student's pace, goals, and board of education.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CATEGORY TABS */}
      {/* ============================================================ */}

      <div className="flex justify-center mt-12 mb-12">
        <div className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 border-b border-gray-200 pl-6 pr-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-3 px-1 text-[18px] font-medium rounded-t-lg transition-all duration-300 ease-in-out whitespace-nowrap -mb-px 
                ${activeCategory === category
                  ? "text-[#e8b112] border-b-3 border-[#e8b112]"
                  : "text-slate-600 hover:text-[#e8b112] border-b-2 border-transparent"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* SERVICES GRID SECTION */}
      {/* ============================================================ */}

      <section className="mb-20 text-center px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CALL TO ACTION SECTION */}
      {/* ============================================================ */}


      <section className="py-12 sm:py-16 md:py-20 lg:py-28 text-center bg-gradient-to-br from-[#0a2d4a] via-[#0d3a5c] to-[#0a2d4a] text-white rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[7rem] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e8b112] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e8b112] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
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
            className="bg-[#e8b112] text-[#0a2d4a] font-bold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl md:rounded-full hover:bg-[#d4a010] transition-all duration-300 shadow-md text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Book a Free Demo
          </button>
        </div>
      </section>


      {/* Book Demo Modal */}
      {isModalOpen && (
        <React.Suspense fallback={null}>
          <StudentDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </React.Suspense>
      )}
    </div>
  );
};

export default ServicesPage;