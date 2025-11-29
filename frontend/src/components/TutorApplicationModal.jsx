import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { API_BASE_URL } from "../config";
import { countryList } from "../data/countries";
import Alert from "./ui/Alert";
import { validatePhone } from "../utils/validation";

const TutorApplicationModal = ({ isOpen, onClose }) => {
    const tutorForm = useRef();
    const [tutorFormStatus, setTutorFormStatus] = useState("");
    const [tutorPhone, setTutorPhone] = useState("");
    const [tutorPhoneError, setTutorPhoneError] = useState("");

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
                        Join Haven Tutors
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Become part of our growing global tutor network.
                    </p>

                    <form
                        ref={tutorForm}
                        onSubmit={handleTutorSubmit}
                        className="space-y-4"
                    >
                        {tutorPhoneError && <Alert type="error">{tutorPhoneError}</Alert>}
                        {tutorFormStatus && !tutorPhoneError && (
                            <Alert type={tutorFormStatus.includes('submitted') || tutorFormStatus.includes('Application submitted') ? 'success' : tutorFormStatus.includes('failed') ? 'error' : 'info'}>
                                {tutorFormStatus}
                            </Alert>
                        )}

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
                                inputClass="!w-full !h-[48px] !px-4 !py-3 !pl-12 !text-base !text-gray-700 !border !border-gray-300 !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-[#e8b112] focus:!border-[#e8b112]"
                                buttonClass="!h-[48px] !border !border-gray-300 !rounded-l-lg !bg-gray-50 hover:!bg-gray-100 !transition"
                                dropdownClass="!border-gray-200 !shadow-lg !rounded-lg"
                            />
                            {tutorPhoneError && (
                                <p className="mt-1 text-sm text-red-600">{tutorPhoneError}</p>
                            )}
                        </div>

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
                          file:border-0 file:font-semibold file:bg-[#e8b112]/20 file:text-[#0a2d4a] 
                          hover:file:bg-[#e8b112]/30"
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
                            className="w-full py-3 px-6 text-base font-bold rounded-lg text-[#0a2d4a] bg-[#e8b112] hover:bg-[#d4a010] transition-colors shadow-md"
                        >
                            Submit Tutor Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TutorApplicationModal;
