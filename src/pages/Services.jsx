import React, { useState } from 'react';

// You might need to install heroicons: npm install @heroicons/react
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { PlayCircleIcon } from '@heroicons/react/24/outline';


// --- Data: Merging your content with UI elements from the image ---
const servicesData = [
  {
    id: 1,
    category: 'Tutoring Formats',
    title: 'Online One-on-One Sessions',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: '15 Sessions',
    price: 150,
    originalPrice: 300,
    rating: 5.0,
    reviews: '2.1K',
    tag: 'Popular',
    tagColor: 'bg-yellow-500', // Best Seller color
    buttonText: 'Book Demo',
  },
  {
    id: 2,
    category: 'Tutoring Formats',
    title: 'Group Classes',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: '20 Sessions',
    price: 90,
    originalPrice: 180,
    rating: 4.9,
    reviews: '1.8K',
    tag: 'Best Reviewed',
    tagColor: 'bg-green-500',
    buttonText: 'Join Group Class',
  },
  {
    id: 3,
    category: 'Tutoring Formats',
    title: 'Flexible Scheduling',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80',
    info: 'Customizable',
    price: 120,
    originalPrice: 240,
    rating: 4.8,
    reviews: '1.5K',
    tag: 'Special Offer',
    tagColor: 'bg-orange-500',
    buttonText: 'Explore Options',
  },
  {
    id: 4,
    category: 'Specialized Learning',
    title: 'Learning Skill Development',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: '10 Modules',
    price: 75,
    originalPrice: 150,
    rating: 5.0,
    reviews: '3.2K',
    buttonText: 'Learn More',
  },
  {
    id: 5,
    category: 'Specialized Learning',
    title: 'Curriculum-Aligned Tutoring',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: 'All Boards',
    price: 110,
    originalPrice: 220,
    rating: 4.9,
    reviews: '2.9K',
    buttonText: 'Start Session',
  },
  {
    id: 6,
    category: 'Virtual Classroom Tools',
    title: 'Interactive Whiteboard',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: 'Live Demo',
    price: 50,
    originalPrice: 100,
    rating: 4.9,
    reviews: '3.8K',
    tag: 'Featured',
    tagColor: 'bg-blue-500',
    buttonText: 'Experience It',
  },
  {
    id: 7,
    category: 'Tutor & Scheduling Features',
    title: 'Easy Booking System',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    info: 'Instant',
    price: 99,
    originalPrice: 198,
    rating: 4.9,
    reviews: '3.1K',
    buttonText: 'Book Now',
  },
  {
    id: 8,
    category: 'Additional Services',
    title: '24/7 Chat Support',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    info: 'Always On',
    price: 45,
    originalPrice: 90,
    rating: 5.0,
    reviews: '4.1K',
    buttonText: 'Chat Now',
  },
];

const categories = [
    'All Services',
    'Tutoring Formats',
    'Specialized Learning',
    'Virtual Classroom Tools',
    'Tutor & Scheduling Features',
    'Additional Services'
];

// --- Reusable Card Component ---
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 ">
      {/* Image and Tag */}
      <div className="relative">
        <img className="w-full h-44 object-cover" src={service.image} alt={service.title} />
        {service.tag && (
          <span className={`absolute top-3 right-3 text-xs font-semibold text-white ${service.tagColor} px-2.5 py-1 rounded-md`}>
            {service.tag}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-sm text-slate-500">
          <p className="font-regular text-blue-600">{service.category}</p>
          <div className="flex items-center gap-1.5">
            <PlayCircleIcon className="w-5 h-5" />
            <span>{service.info}</span>
          </div>
        </div>

        <h3 className="mt-2 text-lg font-bold text-slate-800 leading-tight flex-grow">
          {service.title}
        </h3>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-xl font-medium text-slate-900">${service.price}</p>
            <p className="text-sm text-slate-500">
              <span className="line-through">${service.originalPrice}</span>
              <span className="font-medium text-green-600 ml-1.5">(50% Off)</span>
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-0.5">{service.rating.toFixed(1)} ({service.reviews} Reviews)</p>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="mt-6 w-full bg-blue-600 text-white font-medium  py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
      <div className="container mx-auto py-24 px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 text-sm">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mt-4">
            Designed for Confident Learning
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
            Discover flexible, personalized tutoring options built to fit every student’s pace, goals, and board of education.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-3 sm:px-4 text-base font-medium rounded-md transition-all duration-300 ${
                activeCategory === category
                  ? 'text-blue-600 bg-blue-100/60'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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