import React from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";

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
                    <h1 className="font-body font-bold text-[60px]">Projects</h1>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {userData.projects.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            title={proj.title}
                            link={proj.link}
                            image={proj.image}
                            desc={proj.desc}
                            tech={proj.tech}
                        />
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
            className="group relative block h-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800"
        >
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                    src={image} 
                    alt={title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((eachTech, idx) => (
                        <div 
                            key={idx} 
                            className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full"
                        >
                            {eachTech}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Projects;
