
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
            skills: ['React Native', 'Flutter', 'Kotlin', 'Figma', 'UI/UX Design', 'SEO', 'Performance']
        }
    ];

    return (
        <section id="skills" className="py-32 bg-surface-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary-100/30 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-secondary-100/30 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Technical <span className="text-gradient">Skills</span></h2>
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
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-50 text-sm font-medium text-slate-600 border border-slate-100 group-hover:border-primary-100 group-hover:bg-primary-50/50 group-hover:text-primary-700 transition-colors">
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
