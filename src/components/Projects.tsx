
import { motion } from 'framer-motion';
import { ExternalLink, Github, Target, User } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'RFID Laundry Scanner App',
            client: 'PT. Shameer Indo Medika (SHINKA)',
            description: 'A full-featured mobile app for scanning RFID tags, storing data, and generating reports. This application was developed exclusively for a CHAINWAY C72 RFID Gun Scanner. It drastically reduces manual inventory counting time and minimizes human error.',
            goals: 'To streamline inventory management by reducing manual entry errors and increasing scanning speed by 50%.',
            tags: ['Kotlin Jetpack', 'Express.js', 'Node.js', 'MySQL', 'Tailscale', 'JWT', 'WebSocket', 'Socket.io'],
            links: { demo: '#', github: '#' },
            image: '/images/rfid2.png'
        },
        {
            title: 'Hospital Management Information System (SIMRS)',
            client: 'PT. Simplify Technologies Indonesia',
            description: 'ERP web application for Hospital Management, SATUSEHAT integrated and compliant with Indonesian regulations. It manages patient data, billing, pharmacy, and medical records in a unified system.',
            goals: 'To digitize patient records and integrate with the national SATUSEHAT platform for better data interoperability and regulatory compliance.',
            tags: ['React.js', 'Express.js', 'Node.js', 'MySQL', 'JWT', 'Tailwind', 'Tailscale'],
            links: { demo: '#', github: '#' },
            image: '/images/simrs.png'
        },
        {
            title: 'Hospital Curtains Production Monitoring App',
            client: 'PT. Shameer Indo Medika (SHINKA)',
            description: 'SaaS application for monitoring hospital curtains production, with role-based access control. It tracks the entire lifecycle of curtain production from order to delivery.',
            goals: 'To provide real-time tracking of production stages, optimize resource allocation, and improve delivery time estimation for hospital clients.',
            tags: ['Flutter', 'Express.js', 'MySQL', 'Tailscale', 'JWT', 'Tailwind', 'Socket.io', 'WebSocket'],
            links: { demo: '#', github: '#' },
            image: '/images/gorden.png'
        }
        // {
        //     title: 'Portfolio Website',
        //     client: 'Personal Project',
        //     description: 'Modern, responsive portfolio website built to showcase creative work and professional experience. Features a clean pastel aesthetic and smooth animations.',
        //     goals: 'To create a professional online presence showcasing technical skills and past projects to potential employers and clients.',
        //     tags: ['React', 'Framer Motion', 'Tailwind'],
        //     links: { demo: '#', github: '#' },
        //     image: '/images/portfolio.png'
        // }
    ];

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A deep dive into some of my key projects, highlighting the challenges solved and value delivered.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
                        >
                            {/* Image Section */}
                            <div className={`w-full lg:w-1/2 rounded-3xl overflow-hidden glass-card p-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[4/3] w-full bg-surface-50 rounded-2xl relative flex items-center justify-center overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-[90%] h-auto object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`w-full lg:w-1/2 space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-2 text-primary-600 font-bold mb-4">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm tracking-wide uppercase">{project.client}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{project.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600 mt-1">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Project Goal</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{project.goals}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-surface-100 text-slate-700 border border-surface-200 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.links.github}
                                        className="flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all group"
                                    >
                                        <Github className="w-5 h-5" />
                                        View Code
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
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
