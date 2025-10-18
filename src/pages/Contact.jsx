import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import contact from '../assets/contact.jpg';

// Reusable contact info item
const ContactInfoItem = ({ icon, title, value, href }) => {
  const content = href ? (
    <a
      href={href}
      className="text-slate-600 hover:text-blue-600 transition-colors break-all"
    >
      {value}
    </a>
  ) : (
    <p className="text-slate-600 break-all">{value}</p>
  );

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        {content}
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setFormStatus('Message sent successfully! ✅');
        form.current.reset();
      },
      () => {
        setFormStatus('Failed to send message. Please try again. ❌');
      }
    );
  };

  return (
    <div className="bg-white">
      {/* /* Hero Section */}
        <section
          className="relative flex items-end justify-end text-right pt-50 pb-70 px-8 sm:px-16 lg:px-24 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg leading-[1.3] line width">
          Start Your <br />Learning <br/>Journey <b/>with Us
            </h1>
            <p className="mt-4 max-w-xl ml-auto text-lg text-gray-100 drop-shadow">
          We are here to help you learn better and grow stronger.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
            {/* Left 2/3 - Get in Touch */}
            <div className="lg:col-span-1 flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <ContactInfoItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  title="Email Address"
                  value="geburtst834@gmail.com"
                  href="mailto:geburtg834@gmail.com"
                />
                <ContactInfoItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  }
                  title="Website"
                  value="www.haventutor.com"
                  href="http://www.haventutor.com"
                />
                <ContactInfoItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  }
                  title="Website (India)"
                  value="www.haventutor.in"
                  href="http://www.haventutor.in"
                />
                <ContactInfoItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  title="Phone / WhatsApp"
                  value="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 mt-10">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right 1/3 - Form */}
           <div className="lg:col-span-3 flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send Us a Message
              </h2>
              <form
  ref={form}
  onSubmit={sendEmail}
  className="bg-slate-50 p-8 rounded-xl shadow-sm border border-gray-100"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left side - Input fields */}
    <div className="space-y-6">
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

      <div>
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

    {/* Right side - Message box */}
    <div className="flex flex-col">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        placeholder="How can we help you?"
        name="message"
        id="message"
        rows="9"
        required
        className="flex-grow block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
  </div>

  {/* Centered Button Below the Two Columns */}
  <div className="flex justify-center mt-8">
    <button
      type="submit"
      className="py-3 px-10 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
    >
      Send Message
    </button>
  </div>

  {formStatus && <p className="mt-6 text-center text-gray-600">{formStatus}</p>}
</form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
