import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Target, User } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'RFID Gun Scanner App',
            client: 'LogisticsCo Inc.',
            description: 'A full-featured mobile app for scanning RFID tags, storing data, and generating reports. This application drastically reduces manual inventory counting time and minimizes human error.',
            goals: 'To streamline inventory management by reducing manual entry errors and increasing scanning speed by 50%.',
            tags: ['Kotlin Jetpack', 'Express.js', 'Node.js', 'MySQL', 'Tailscale', 'JWT', 'WebSocket', 'Socket.io'],
            links: { demo: '#', github: '#' },
            image: '/images/rfid-scanner.png'
        },
        {
            title: 'Hospital Management Information System (SIMRS)',
            client: 'City General Hospital',
            description: 'ERP web application for Hospital Management, SATUSEHAT integrated and compliant with Indonesian regulations. It manages patient data, billing, pharmacy, and medical records in a unified system.',
            goals: 'To digitize patient records and integrate with the national SATUSEHAT platform for better data interoperability and regulatory compliance.',
            tags: ['React.js', 'Express.js', 'Node.js', 'MySQL', 'JWT', 'Tailwind', 'Tailscale'],
            links: { demo: '#', github: '#' },
            image: '/images/simrs.png'
        },
        {
            title: 'Hospital Curtains Production Monitoring App',
            client: 'MedTextile Solutions',
            description: 'SaaS application for monitoring hospital curtains production, with role-based access control. It tracks the entire lifecycle of curtain production from order to delivery.',
            goals: 'To provide real-time tracking of production stages, optimize resource allocation, and improve delivery time estimation for hospital clients.',
            tags: ['Flutter', 'Express.js', 'MySQL', 'Tailscale', 'JWT', 'Tailwind', 'Socket.io', 'WebSocket'],
            links: { demo: '#', github: '#' },
            image: '/images/production-monitoring.png'
        },
        {
            title: 'Portfolio Website',
            client: 'Personal Project',
            description: 'Modern, responsive portfolio website built to showcase creative work and professional experience. Features a clean pastel aesthetic and smooth animations.',
            goals: 'To create a professional online presence showcasing technical skills and past projects to potential employers and clients.',
            tags: ['React', 'Framer Motion', 'Tailwind'],
            links: { demo: '#', github: '#' },
            image: '/images/portfolio.png'
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Featured <span className="text-blue-600">Projects</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A deep dive into some of my key projects, highlighting the challenges solved and value delivered.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col lg:flex-row gap-12 items-start"
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg shadow-slate-200/50">
                                <div className="aspect-[4/3] w-full bg-slate-50 relative flex items-center justify-center p-8">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm tracking-wide uppercase">{project.client}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Project Goal</h4>
                                            <p className="text-slate-600 text-sm">{project.goals}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.links.github}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        View Code
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 font-medium hover:bg-slate-50 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
