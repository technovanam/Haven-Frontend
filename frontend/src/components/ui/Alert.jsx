import React from 'react';

const Alert = ({ type = 'info', children }) => {
    const base = 'w-full rounded-md px-4 py-3 flex items-start gap-3';
    const variants = {
        info: 'bg-[#e8b112]/10 text-[#0a2d4a] border border-[#e8b112]/30',
        success: 'bg-green-50 text-green-700 border border-green-100',
        error: 'bg-red-50 text-red-700 border border-red-100',
    };
    return (
        <div role="status" aria-live="polite" className={`${base} ${variants[type]}`}>
            <div className="flex-shrink-0 mt-0.5">
                {type === 'success' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                {type === 'error' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                {type === 'info' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /></svg>}
            </div>
            <div className="text-sm">{children}</div>
        </div>
    );
};

export default Alert;
