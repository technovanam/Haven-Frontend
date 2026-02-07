import React from "react";
import "../index.css";

// Maintenance page styled with the same theme/UI
export default function Maintenance() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-lg w-full border border-slate-200">
        <svg className="w-16 h-16 text-[#e8b112] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">We'll be back soon!</h1>
        <p className="text-slate-600 text-center mb-6">
          Our website is currently undergoing scheduled maintenance.<br />
          Thank you for your patience and understanding.<br />
          <span className="text-[#e8b112] font-semibold">— Haven Team</span>
        </p>
      </div>
    </div>
  );
}
