import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-100/50 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-sm text-blue-600 font-medium">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                        Building <br />
                        <span className="text-blue-600">Digital Experiences</span>
                        <br /> That Matter
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        I'm a Full Stack Developer passionate about creating beautiful, functional, and user-centered digital solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden glass-panel p-8 bg-white shadow-xl shadow-blue-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
                        {/* Abstract Code/Design Visual */}
                        <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                            <div className="space-y-4">
                                <div className="h-32 rounded-xl bg-blue-100 animate-pulse" />
                                <div className="h-48 rounded-xl bg-slate-50 border border-slate-100" />
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-48 rounded-xl bg-slate-50 border border-slate-100" />
                                <div className="h-32 rounded-xl bg-purple-100 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
