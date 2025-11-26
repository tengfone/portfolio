import React from "react";
import Image from "next/image";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const title = `${userData.name}`;
const subtitle = "Projects"

interface projectDetails {
    title: string,
    link: string,
    image: string,
    tech: string[],
    desc: string
}

const Projects: NextPage = () => {
    return (
        <Layout title="Projects" description={`${title} - ${subtitle}`}>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-body font-bold text-5xl md:text-[60px] text-gray-900 dark:text-gray-100"
                    >
                        Projects
                    </motion.h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {userData.projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <ProjectCard
                                title={proj.title}
                                link={proj.link}
                                image={proj.image}
                                desc={proj.desc}
                                tech={proj.tech}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

const ProjectCard = ({ title, link, image, desc, tech }: projectDetails) => {
    return (
        <a
            target="_blank"
            href={link}
            className="group relative block h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-brand-gray border border-gray-100 dark:border-gray-800 hover:-translate-y-2"
        >
            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    unoptimized={image.endsWith('.gif')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-brand-accent transition-colors">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((eachTech, idx) => (
                        <React.Fragment key={idx}>
                            {eachTech.trim() !== "" && (
                                <span
                                    className="px-3 py-1 text-xs font-medium text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20"
                                >
                                    {eachTech}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Projects;
