import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-sky-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">✳︎ logo</h3>
                        <p className="text-sky-200">
                            Your ideal partner for personalized online learning to excel academically and acquire future-ready skills globally.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sky-200 hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="text-sky-200 hover:text-white">About Us</Link></li>
                            <li><Link to="/services" className="text-sky-200 hover:text-white">Services</Link></li>
                            <li><Link to="/contact" className="text-sky-200 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sky-200 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-sky-200 hover:text-white">FAQ</a></li>
                            <li><a href="#" className="text-sky-200 hover:text-white">Testimonials</a></li>
                            <li><a href="#" className="text-sky-200 hover:text-white">Case Studies</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                     <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sky-200 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-sky-200 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-sky-200 hover:text-white">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-sky-600 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-sky-200">&copy; {new Date().getFullYear()} Haven Tutors. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" aria-label="Facebook" className="text-sky-200 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                        <a href="#" aria-label="Instagram" className="text-sky-200 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.002 6.363a4.92 4.92 0 11-3.483 8.822 4.92 4.92 0 013.483-8.822zM12 15.462a3.462 3.462 0 100-6.924 3.462 3.462 0 000 6.924zM16.338 7.32a1.245 1.245 0 100 2.49 1.245 1.245 0 000-2.49z" clipRule="evenodd" /></svg></a>
                        <a href="#" aria-label="LinkedIn" className="text-sky-200 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

