import React, { useRef, useState } from 'react';
import { Building2, Mail, Globe, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import contact from '../assets/contact.jpg';

// Reusable contact info item - Cleaner design
const ContactInfoItem = ({ icon, title, value, href }) => {
  const content = href ? (
    <a
      href={href}
      className="text-slate-700 hover:text-blue-600 transition-colors break-all font-medium"
    >
      {value}
    </a>
  ) : (
    <p className="text-slate-700 break-all font-medium">{value}</p>
  );

  return (
    <div className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-900 mb-1">{title}</h3>
          {content}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const formData = new FormData(form.current);
      
      const res = await fetch('http://localhost:5001/api/contact', {
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
      {/* Hero Section */}
      <section className="flex items-center justify-center text-center pt-6 pb-16 px-6 bg-white">
        <div 
          className="relative rounded-3xl shadow-lg max-w-9xl w-full text-center py-35 md:px-24 bg-cover overflow-hidden"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundPosition: 'center 25%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/60"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-md tracking-wide uppercase">
                Contact Us
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl max-w-7xl mx-auto font-bold text-white leading-tight mb-6">
              Start Your <br />
              <span className="italic text-blue-200">Learning Journey</span> with Us
            </h1>

            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We are here to help you learn better and grow stronger. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div className="lg:col-span-1 flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send Us a Message
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-slate-50 p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      placeholder="Your Phone Number"
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    name="message"
                    id="message"
                    rows="6"
                    required
                    className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-3 px-10 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>

                {formStatus && (
                  <div className={`mt-6 p-4 rounded-lg flex items-center justify-center gap-2 ${
                    formStatus.includes('successfully') 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {formStatus.includes('successfully') ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className={`text-sm font-semibold ${
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
            <div className="lg:col-span-1 flex flex-col">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>
              <div className="p-8 bg-white rounded-xl">
                <p className="text-slate-600 mb-4">
                  We'd love to hear from you. Reach out to us through any of these channels.
                </p>
                <div className="space-y-2">
                  <ContactInfoItem
                    icon={<Mail className="w-6 h-6" />}
                    title="Email Address"
                    value="info@haventutor.com"
                  />
                  <ContactInfoItem
                    icon={<Globe className="w-6 h-6" />}
                    title="Website"
                    value="www.haventutor.com"
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-6 h-6" />}
                    title="Phone / WhatsApp"
                    value="+91 9606840892"
                  />
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5" />
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
