import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary-100/40 blur-[120px]" />
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-100/30 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 shadow-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        <span className="text-sm text-slate-600 font-medium">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 tracking-tight">
                        Building <br />
                        <span className="text-gradient">Digital Experiences</span>
                        <br /> That Matter
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        I'm a Full Stack Developer passionate about creating beautiful, functional, and user-centered digital solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
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
                    <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass-panel p-8 bg-white/40 shadow-2xl shadow-primary-500/10 border-white/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />

                        {/* Abstract Code/Design Visual */}
                        <div className="grid grid-cols-2 gap-6 h-full relative z-10 p-4">
                            <div className="space-y-6 pt-8">
                                <div className="h-40 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-100/50 shadow-sm animate-float" style={{ animationDelay: '0s' }}>
                                    <div className="p-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center mb-3">
                                            <Sparkles className="w-4 h-4 text-primary-600" />
                                        </div>
                                        <div className="h-2 w-16 bg-primary-200 rounded mb-2" />
                                        <div className="h-2 w-10 bg-primary-100 rounded" />
                                    </div>
                                </div>
                                <div className="h-56 rounded-2xl bg-white border border-slate-100 shadow-sm animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="h-full w-full bg-slate-50/50 rounded-2xl p-4 flex flex-col justify-end">
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-slate-200 rounded" />
                                            <div className="h-2 w-2/3 bg-slate-200 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="h-56 rounded-2xl bg-white border border-slate-100 shadow-sm animate-float" style={{ animationDelay: '2s' }}>
                                    <div className="p-4 h-full flex flex-col">
                                        <div className="flex-1 rounded-xl bg-secondary-50 border border-secondary-100/50 mb-3" />
                                        <div className="h-2 w-12 bg-slate-200 rounded" />
                                    </div>
                                </div>
                                <div className="h-40 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-50 border border-secondary-100/50 shadow-sm animate-float" style={{ animationDelay: '3s' }}>
                                    <div className="p-4 flex items-center justify-center h-full">
                                        <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-10 h-10 rounded-full bg-secondary-500/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-20 animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
