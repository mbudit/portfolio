import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-slate-200 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
                    <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
