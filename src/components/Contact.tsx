
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative bg-surface-50">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-8 text-slate-900">Let's build something <br /> <span className="text-primary-600">amazing together</span></h3>
                        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                            I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                                    <a href="mailto:hello@example.com" className="text-xl font-bold text-slate-900 hover:text-primary-600 transition-colors">buditriono13@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center text-secondary-600 group-hover:scale-110 group-hover:bg-secondary-600 group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                                    <a href="https://wa.me/6281232999229" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 hover:text-primary-600 transition-colors">+62 812-3299-9229</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                                    <p className="text-xl font-bold text-slate-900">Bogor, Jawa Barat, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-white shadow-2xl shadow-slate-200/50 border border-white/50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 blur-3xl -z-10" />

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
