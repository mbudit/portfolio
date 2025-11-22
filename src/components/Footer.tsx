
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-surface-950 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-primary-500/20 text-primary-400">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Budi's <span className="text-primary-400">Portfolio</span>
                        </span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/mbudit" className="p-2 rounded-full bg-surface-800 hover:bg-primary-600 hover:text-white transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/mbudit/" className="p-2 rounded-full bg-surface-800 hover:bg-primary-600 hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:buditriono13@gmail.com" className="p-2 rounded-full bg-surface-800 hover:bg-primary-600 hover:text-white transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Budi's Portfolio. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
