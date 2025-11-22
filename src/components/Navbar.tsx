import { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-gradient-to-tr from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-slate-800 tracking-tight">
                        Budi's <span className="text-primary-600">Portfolio</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <div className="flex items-center gap-4 pl-8 border-l border-slate-200">
                        <a href="https://github.com/mbudit" className="text-slate-500 hover:text-primary-600 transition-colors hover:scale-110">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/mbudit/" className="text-slate-500 hover:text-primary-600 transition-colors hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:buditriono13@gmail.com" className="text-slate-500 hover:text-primary-600 transition-colors hover:scale-110">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-lg"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-600 hover:text-primary-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                                <a href="#" className="text-slate-500 hover:text-primary-600">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-slate-500 hover:text-primary-600">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-slate-500 hover:text-primary-600">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
