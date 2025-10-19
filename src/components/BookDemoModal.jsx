import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

// Tabs
const TABS = {
  STUDENT: "Student Demo",
  TUTOR: "Tutor Application",
};

const boardOptions = [
  "ICSE",
  "IGCSE",
  "CBSE",
  "GCSE",
  "STATE & MATRIC",
  "IB",
  "AUSTRALIAN",
  "A – LEVEL",
  "BRITISH",
  "CAMBRIDGE",
  "CANADIAN",
  "EDEXEL",
  "SINGAPORE",
];

// Helper function to auto-detect state/country
const detectLocation = async (city) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1`
    );
    const data = await response.json();
    if (data.length > 0) {
      const address = data[0].address;
      return {
        state: address.state || "",
        country: address.country || "",
      };
    }
  } catch (error) {
    console.error("Location lookup failed:", error);
  }
  return { state: "", country: "" };
};

const BookDemoModal = ({ isOpen, onClose }) => {
  const studentForm = useRef();
  const tutorForm = useRef();
  const [studentFormStatus, setStudentFormStatus] = useState("");
  const [tutorFormStatus, setTutorFormStatus] = useState("");
  const [activeTab, setActiveTab] = useState(TABS.STUDENT);
  const [studentLocation, setStudentLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [tutorLocation, setTutorLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  // Detect city changes for student
  const handleStudentCityChange = async (e) => {
    const city = e.target.value;
    setStudentLocation({ ...studentLocation, city });
    const result = await detectLocation(city);
    setStudentLocation({ ...studentLocation, ...result, city });
  };

  // Detect city changes for tutor
  const handleTutorCityChange = async (e) => {
    const city = e.target.value;
    setTutorLocation({ ...tutorLocation, city });
    const result = await detectLocation(city);
    setTutorLocation({ ...tutorLocation, ...result, city });
  };

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="mother_mobile"
                placeholder="Mother's Mobile"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="class_grade"
                placeholder="Class / Grade (E.g., Grade 10)"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="board"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-600"
              >
                <option value="">Select Board</option>
                {boardOptions.map((board) => (
                  <option key={board} value={board}>
                    {board}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={studentLocation.city}
                  onChange={handleStudentCityChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={studentLocation.state}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={studentLocation.country}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
              />

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="tutor_email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="tutor_phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={tutorLocation.city}
                  onChange={handleTutorCityChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={tutorLocation.state}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={tutorLocation.country}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                name="experience"
                min="0"
                placeholder="Years of Experience"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
