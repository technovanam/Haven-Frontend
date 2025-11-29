import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { API_BASE_URL } from "../config";
import { countryList } from "../data/countries";
import Alert from "./ui/Alert";
import { validatePhone } from "../utils/validation";

const boardOptions = [
    "ICSE", "IGCSE", "CBSE", "GCSE", "STATE & MATRIC", "IB",
    "AUSTRALIAN", "A – LEVEL", "BRITISH", "CAMBRIDGE", "CANADIAN",
    "EDEXEL", "SINGAPORE",
];
const gradeOptions = [...Array(12).keys()].map((i) => `Grade ${i + 1}`);

const StudentDemoModal = ({ isOpen, onClose }) => {
    const studentForm = useRef();
    const [studentFormStatus, setStudentFormStatus] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
    const [studentPhoneError, setStudentPhoneError] = useState("");

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

    if (!isOpen) return null;

    const formInputStyle =
        "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8b112] focus:border-[#e8b112]";
    const formSelectStyle =
        "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8b112] focus:border-[#e8b112] text-gray-600";

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
                        Fill in your details to schedule a free personalized demo.
                    </p>

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
                                inputClass="!w-full !h-[48px] !px-4 !py-3 !pl-12 !text-base !text-gray-700 !border !border-gray-300 !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-[#e8b112] focus:!border-[#e8b112]"
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

                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-base font-bold rounded-lg text-[#0a2d4a] bg-[#e8b112] hover:bg-[#d4a010] transition-colors shadow-md"
                        >
                            Book My Free Demo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentDemoModal;
