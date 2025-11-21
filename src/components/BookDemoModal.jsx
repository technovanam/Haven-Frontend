import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countries from "world-countries";
import { API_BASE_URL } from "../config";

// ============================================================
// CONSTANTS
// ============================================================

const TABS = {
  STUDENT: "Student Demo",
  TUTOR: "Tutor Application",
};

const boardOptions = [
  "ICSE", "IGCSE", "CBSE", "GCSE", "STATE & MATRIC", "IB",
  "AUSTRALIAN", "A – LEVEL", "BRITISH", "CAMBRIDGE", "CANADIAN",
  "EDEXEL", "SINGAPORE",
];
const gradeOptions = [...Array(12).keys()].map((i) => `Grade ${i + 1}`);

const countryList = countries.map((c) => c.name.common).sort();

// ============================================================
// MAIN BOOK DEMO MODAL COMPONENT
// ============================================================

const BookDemoModal = ({ isOpen, onClose }) => {
  const studentForm = useRef();
  const tutorForm = useRef();
  const [studentFormStatus, setStudentFormStatus] = useState("");
  const [tutorFormStatus, setTutorFormStatus] = useState("");
  const [activeTab, setActiveTab] = useState(TABS.STUDENT);

  const [studentPhone, setStudentPhone] = useState("");
  const [tutorPhone, setTutorPhone] = useState("");

  const [studentPhoneError, setStudentPhoneError] = useState("");
  const [tutorPhoneError, setTutorPhoneError] = useState("");

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const Alert = ({ type = 'info', children }) => {
    const base = 'w-full rounded-md px-4 py-3 flex items-start gap-3';
    const variants = {
      info: 'bg-blue-50 text-blue-700 border border-blue-100',
      success: 'bg-green-50 text-green-700 border border-green-100',
      error: 'bg-red-50 text-red-700 border border-red-100',
    };
    return (
      <div role="status" aria-live="polite" className={`${base} ${variants[type]}`}>
        <div className="flex-shrink-0 mt-0.5">
          {type === 'success' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>}
          {type === 'error' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>}
          {type === 'info' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/></svg>}
        </div>
        <div className="text-sm">{children}</div>
      </div>
    );
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(studentPhone)) {
      setStudentPhoneError("Please enter a valid phone number");
      return;
    }
    setStudentPhoneError("");
    setStudentFormStatus("Booking...");

    try {
      const formData = new FormData(studentForm.current);

      const res = await fetch(`${API_BASE_URL}/api/student-demo`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setStudentFormStatus("Demo booked successfully! ✅");
        studentForm.current.reset();
        setStudentPhone("");
        setTimeout(() => {
          onClose();
          setStudentFormStatus("");
        }, 2000);
      } else {
        setStudentFormStatus("Booking failed. Please try again. ❌");
      }
    } catch (error) {
      console.error('Error:', error);
      setStudentFormStatus("Booking failed. Please try again. ❌");
    }
  };

  const handleTutorSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(tutorPhone)) {
      setTutorPhoneError("Please enter a valid phone number");
      return;
    }
    setTutorPhoneError("");
    setTutorFormStatus("Submitting...");

    try {
      const formData = new FormData(tutorForm.current);

      const res = await fetch(`${API_BASE_URL}/api/tutor-application`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setTutorFormStatus("Application submitted! ✅");
        tutorForm.current.reset();
        setTutorPhone("");
        setTimeout(() => {
          onClose();
          setTutorFormStatus("");
        }, 2000);
      } else {
        setTutorFormStatus("Submission failed. Please try again. ❌");
      }
    } catch (error) {
      console.error('Error:', error);
      setTutorFormStatus("Submission failed. Please try again. ❌");
    }
  };

  if (!isOpen) return null;

  const formInputStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const formSelectStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-white/30 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Book Your Free Demo
          </h2>
          <p className="text-slate-600 mb-6">
            Choose whether you're a student or tutor
          </p>

          <div className="mb-8 flex justify-center border-b border-gray-200">
            <div className="flex space-x-4 sm:space-x-8">
              {Object.values(TABS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 text-base sm:text-lg font-semibold transition-colors duration-200 ${
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

          {activeTab === TABS.STUDENT && (
            <form
              ref={studentForm}
              onSubmit={handleStudentSubmit}
              className="space-y-4"
            >
              {studentPhoneError && <Alert type="error">{studentPhoneError}</Alert>}
              {studentFormStatus && !studentPhoneError && (
                <Alert type={studentFormStatus.includes('success') || studentFormStatus.includes('Demo booked') ? 'success' : studentFormStatus.includes('failed') ? 'error' : 'info'}>
                  {studentFormStatus}
                </Alert>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Student Demo Booking
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Fill in your details to schedule a free personalized demo.
              </p>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={formInputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                className={formInputStyle}
              />

              {/* Phone Input with Flags (Unchanged, already responsive) */}
              <div>
                <PhoneInput
                  country={"in"}
                  value={studentPhone}
                  onChange={(phone) => {
                    setStudentPhone(phone);
                    setStudentPhoneError("");
                  }}
                  inputProps={{
                    name: "mobile",
                    required: true,
                    placeholder: "Phone Number"
                  }}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  containerClass="w-full"
                  inputClass="!w-full !h-[48px] !px-4 !py-3 !pl-12 !text-base !text-gray-700 !border !border-gray-300 !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
                  buttonClass="!h-[48px] !border !border-gray-300 !rounded-l-lg !bg-gray-50 hover:!bg-gray-100 !transition"
                  dropdownClass="!border-gray-200 !shadow-lg !rounded-lg"
                />
                {studentPhoneError && (
                  <p className="mt-1 text-sm text-red-600">{studentPhoneError}</p>
                )}
              </div>

              <select name="class_grade" required className={formSelectStyle}>
                <option value="">Select Grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>

              <select name="board" required className={formSelectStyle}>
                <option value="">Select Board</option>
                {boardOptions.map((board) => (
                  <option key={board} value={board}>
                    {board}
                  </option>
                ))}
              </select>

              {/* CHANGE 5: Responsive grid. Was grid-cols-2. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              {/* Full Country List (Unchanged, already responsive) */}
              <select name="country" required className={formSelectStyle}>
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
            </form>
          )}

          {/* --- TUTOR FORM --- */}
          {activeTab === TABS.TUTOR && (
            <form
              ref={tutorForm}
              onSubmit={handleTutorSubmit}
              className="space-y-4"
            >
              {/* Alerts (Unchanged) */}
              {tutorPhoneError && <Alert type="error">{tutorPhoneError}</Alert>}
              {tutorFormStatus && !tutorPhoneError && (
                <Alert type={tutorFormStatus.includes('submitted') || tutorFormStatus.includes('Application submitted') ? 'success' : tutorFormStatus.includes('failed') ? 'error' : 'info'}>
                  {tutorFormStatus}
                </Alert>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Join Haven Tutors
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Become part of our growing global tutor network.
              </p>

              {/* CHANGE 6: Responsive grid. Was grid-cols-2. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className={formInputStyle}
                />
              </div>

              {/* Tutor Phone Input (Unchanged, already responsive) */}
              <div>
                <PhoneInput
                  country={"in"}
                  value={tutorPhone}
                  onChange={(phone) => {
                    setTutorPhone(phone);
                    setTutorPhoneError("");
                  }}
                  inputProps={{
                    name: "tutor_phone",
                    required: true,
                    placeholder: "Phone Number"
                  }}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  containerClass="w-full"
                  inputClass="!w-full !h-[48px] !px-4 !py-3 !pl-12 !text-base !text-gray-700 !border !border-gray-300 !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
                  buttonClass="!h-[48px] !border !border-gray-300 !rounded-l-lg !bg-gray-50 hover:!bg-gray-100 !transition"
                  dropdownClass="!border-gray-200 !shadow-lg !rounded-lg"
                />
                {tutorPhoneError && (
                  <p className="mt-1 text-sm text-red-600">{tutorPhoneError}</p>
                )}
              </div>

              {/* CHANGE 7: Responsive grid. Was grid-cols-2. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <select name="country" required className={formSelectStyle}>
                <option value="">Select Country</option>
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;