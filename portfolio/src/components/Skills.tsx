import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Layout className="w-6 h-6" />,
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Redux']
        },
        {
            title: 'Backend Development',
            icon: <Database className="w-6 h-6" />,
            skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Python']
        },
        {
            title: 'Tools & DevOps',
            icon: <Code2 className="w-6 h-6" />,
            skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
        },
        {
            title: 'Mobile & Others',
            icon: <Smartphone className="w-6 h-6" />,
            skills: ['React Native', 'Flutter', 'Figma', 'UI/UX Design', 'SEO', 'Performance']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Technical <span className="text-blue-600">Skills</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        I've spent years honing my skills across the full stack. Here are the technologies I work with most frequently.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 text-sm text-slate-600 border border-slate-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
