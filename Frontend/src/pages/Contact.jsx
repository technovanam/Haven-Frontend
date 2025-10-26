import React, { useRef, useState } from 'react';
import { Building2, Mail, Globe, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import contact from '../assets/contact.jpg';
import { API_BASE_URL } from "../config";

// ============================================================
// CONTACT INFO ITEM COMPONENT
// ============================================================

const ContactInfoItem = ({ icon, title, value, href }) => {
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-700 hover:text-blue-600 transition-colors break-all font-medium text-sm sm:text-base"
    >
      {value}
    </a>
  ) : (
    <p className="text-slate-700 break-all font-medium text-sm sm:text-base">{value}</p>
  );

  return (
    <div className="group hover:bg-blue-50 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{title}</h3>
          {content}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN CONTACT COMPONENT
// ============================================================

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const formData = new FormData(form.current);
      
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setFormStatus('Message sent successfully!');
        form.current.reset();
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      
      <section className="flex items-center justify-center text-center pt-6 pb-16 px-4 sm:px-6 bg-white">
        <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl shadow-lg max-w-9xl w-full text-center py-20 sm:py-24 md:py-28 px-6 md:px-24">
          <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm border border-blue-100 mb-6">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm md:text-md tracking-wide uppercase">
              Contact Us
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-7xl text-center justify-center mx-auto font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Start Your <br />
            <span className="italic text-blue-700">Learning Journey</span> with Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to help you learn better and grow stronger. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT FORM & INFO SECTION */}
      {/* ============================================================ */}

      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
            
            {/* Left: Form */}
            <div className="w-full flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
                Send Us a Message
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="sm:col-span-1">
                    <label htmlFor="user_name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="block w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="user_email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="block w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="user_phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      placeholder="Your Phone Number"
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      className="block w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    name="message"
                    id="message"
                    rows="5"
                    required
                    className="block w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto py-2.5 sm:py-3 px-8 sm:px-10 text-sm sm:text-base text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>

                {formStatus && (
                  <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 ${
                    formStatus.includes('successfully') 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {formStatus.includes('successfully') ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className={`text-xs sm:text-sm font-semibold ${
                      formStatus.includes('successfully') 
                        ? 'text-green-800' 
                        : 'text-red-800'
                    }`}>
                      {formStatus}
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="w-full flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
                Get in Touch
              </h2>
              <div className="p-4 sm:p-6 md:p-8 bg-white rounded-xl border border-gray-100 shadow-sm flex-1">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  We'd love to hear from you. Reach out to us through any of these channels.
                </p>
                <div className="space-y-2">
                  <ContactInfoItem
                    icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" />}
                    title="Email Address"
                    value="info@haventutor.com"
                  />
                  <ContactInfoItem
                    icon={<Globe className="w-5 h-5 sm:w-6 sm:h-6" />}
                    title="Website"
                    value="www.haventutor.com"
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-5 h-5 sm:w-6 sm:h-6" />}
                    title="Phone / WhatsApp"
                    value="+91 9606840892"
                  />
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <a
                      href="https://www.facebook.com/haventutors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="bg-blue-50 hover:bg-blue-600 p-2.5 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/haven-tutors-5b89b638b"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="bg-blue-50 hover:bg-blue-700 p-2.5 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/haven__tutors?igsh=MXRrcmk4OGtuYTJveA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="bg-pink-50 hover:bg-pink-600 p-2.5 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 group-hover:text-white" />
                    </a>
                    <a
                      href="https://wa.me/+919606840892?text=Hello%20Haven%20Tutors!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutoring%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="bg-green-50 hover:bg-green-600 p-2.5 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-white" />
                    </a>
                    <a
                      href="https://youtube.com/@haventutors?si=q8Tr5bEIqM0NHExY"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="bg-red-50 hover:bg-red-600 p-2.5 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;