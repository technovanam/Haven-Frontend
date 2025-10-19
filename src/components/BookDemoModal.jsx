import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

// Tabs
const TABS = {
  STUDENT: "Student Demo",
  TUTOR: "Tutor Application",
};

// --- CONSTANTS for Dropdowns ---
const boardOptions = [
  "ICSE", "IGCSE", "CBSE", "GCSE", "STATE & MATRIC", "IB",
  "AUSTRALIAN", "A – LEVEL", "BRITISH", "CAMBRIDGE", "CANADIAN",
  "EDEXEL", "SINGAPORE",
];

// Grade options (1-12)
const gradeOptions = [...Array(12).keys()].map(i => `Grade ${i + 1}`);

// Sample list of countries
const countryList = [
  "United States", "United Kingdom", "Canada", "Australia", "India",
  "United Arab Emirates", "Singapore", "Germany", "France", "South Africa",
];

// Sample country codes
const countryCodes = [
  { code: "+1", label: "+1 (USA/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+91", label: "+91 (India)" },
  { code: "+61", label: "+61 (AUS)" },
  { code: "+971", label: "+971 (UAE)" },
];

const BookDemoModal = ({ isOpen, onClose }) => {
  const studentForm = useRef();
  const tutorForm = useRef();
  const [studentFormStatus, setStudentFormStatus] = useState("");
  const [tutorFormStatus, setTutorFormStatus] = useState("");
  const [activeTab, setActiveTab] = useState(TABS.STUDENT);

  // Submit Student Form
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setStudentFormStatus("Booking...");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_STUDENT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, studentForm.current, publicKey)
      .then(
        () => {
          setStudentFormStatus("Demo booked successfully! ✅");
          studentForm.current.reset();
          setTimeout(() => {
            onClose();
            setStudentFormStatus("");
          }, 2000);
        },
        () => setStudentFormStatus("Booking failed. Please try again. ❌")
      );
  };

  // Submit Tutor Form
  const handleTutorSubmit = (e) => {
    e.preventDefault();
    setTutorFormStatus("Submitting...");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TUTOR_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, tutorForm.current, publicKey)
      .then(
        () => {
          setTutorFormStatus("Application submitted! ✅");
          tutorForm.current.reset();
          setTimeout(() => {
            onClose();
            setTutorFormStatus("");
          }, 2000);
        },
        () => setTutorFormStatus("Submission failed. Please try again. ❌")
      );
  };

  if (!isOpen) return null;

  // --- STYLING CONSTANTS for inputs/selects ---
  const formInputStyle = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const formSelectStyle = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600";
  const phoneCodeSelectStyle = "absolute inset-y-0 left-0 w-28 border-r border-gray-300 bg-gray-50 rounded-l-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const phoneInputStyle = "w-full pl-32 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-white/30 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Book Your Free Demo
          </h2>
          <p className="text-slate-600 mb-6">
            Choose whether you're a student or tutor
          </p>

          {/* Tabs */}
          <div className="mb-8 flex justify-center border-b border-gray-200">
            <div className="flex space-x-8">
              {Object.values(TABS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 text-lg font-semibold transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ---------------- STUDENT FORM ---------------- */}
          {activeTab === TABS.STUDENT && (
            <form
              ref={studentForm}
              onSubmit={handleStudentSubmit}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Student Demo Booking
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Fill in your details to schedule a free personalized demo.
              </p>

              <input
                type="text"
                name="mother_name"
                placeholder="Mother's Name"
                required
                className={formInputStyle}
              />
              
              <div className="relative">
                <select name="mother_country_code" required className={phoneCodeSelectStyle}>
                  {countryCodes.map(c => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="mother_mobile"
                  placeholder="Mobile Number"
                  required
                  className={phoneInputStyle}
                />
              </div>

              <select
                name="class_grade"
                required
                className={formSelectStyle}
              >
                <option value="">Select Grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>

              <select
                name="board"
                required
                className={formSelectStyle}
              >
                <option value="">Select Board</option>
                {boardOptions.map((board) => (
                  <option key={board} value={board}>
                    {board}
                  </option>
                ))}
              </select>

              {/* UPDATED: Added State input in a grid with City */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className={formInputStyle}
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                  className={formInputStyle}
                />
              </div>
              
              <select
                name="country"
                required
                className={formSelectStyle}
              >
                <option value="">Select Country</option>
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full py-3 px-6 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Book My Free Demo
              </button>
              {studentFormStatus && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {studentFormStatus}
                </p>
              )}
            </form>
          )}

          {/* ---------------- TUTOR FORM ---------------- */}
          {activeTab === TABS.TUTOR && (
            <form
              ref={tutorForm}
              onSubmit={handleTutorSubmit}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Join Haven Tutors
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Become part of our growing global tutor network.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="tutor_name"
                  placeholder="Full Name"
                  required
                  className={formInputStyle}
                />
                <input
                  type="email"
                  name="tutor_email"
                  placeholder="Email"
                  required
                  className={formInputStyle}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select name="tutor_country_code" required className={phoneCodeSelectStyle}>
                    {countryCodes.map(c => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="tutor_phone"
                    placeholder="Phone Number"
                    required
                    className={phoneInputStyle}
                  />
                </div>
                
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className={formInputStyle}
                />
              </div>
              
              {/* UPDATED: Added State input in a grid with Country */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  required
                  className={formInputStyle}
                />
                <select
                  name="country"
                  required
                  className={formSelectStyle}
                >
                  <option value="">Select Country</option>
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full 
                            file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 
                            hover:file:bg-blue-100"
                />
              </div>

              <input
                type="text"
                name="expertise"
                placeholder="Area of Expertise / Subjects"
                required
                className={formInputStyle}
              />

              <input
                type="number"
                name="experience"
                min="0"
                placeholder="Years of Experience"
                required
                className={formInputStyle}
              />

              <button
                type="submit"
                className="w-full py-3 px-6 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Submit Tutor Application
              </button>
              {tutorFormStatus && (
                <p className="mt-2 text-center text-sm text-gray-600">
                  {tutorFormStatus}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;