import React from "react";
import Image from "next/image";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { safeExternalUrl } from "../lib/safeExternalUrl";

const title = `${userData.name}`;
const subtitle = "Projects"

interface projectDetails {
    title: string,
    link: string,
    image: string,
    tech: string[],
    desc: string
}

interface playgroundDetails {
    title: string,
    link: string,
    repo: string,
    image: string,
    desc: string
}

const featuredProjects = userData.projects.filter((proj) => proj.featured);
const otherProjects = userData.projects.filter((proj) => !proj.featured);
const fanPreviews = userData.playground.filter((site) => site.image.endsWith('.gif'));

const Projects: NextPage = () => {
    return (
        <Layout title="Projects" description={`${title} - ${subtitle}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                        Projects
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Things I built and shipped.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <Section heading="Featured" delay={0}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <ProjectCard {...proj} />
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section heading="More projects" delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(idx * 0.08, 0.4), duration: 0.4 }}
                            >
                                <ProjectCard {...proj} />
                            </motion.div>
                        ))}
                    </div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={safeExternalUrl(userData.github)}
                        className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
                    >
                        See everything on GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </Section>

                {userData.playground.length > 0 && (
                    <motion.details
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="group/playground mt-16 rounded-2xl border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-brand-gray"
                    >
                        <summary className="flex cursor-pointer list-none items-center gap-6 p-6 sm:p-8 [&::-webkit-details-marker]:hidden">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    Side Quests
                                </h2>
                                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    Prompted into apps with an AI builder. Worth a look, not a measure of how I write code.
                                </p>
                            </div>
                            <div className="hidden md:flex -space-x-6" aria-hidden="true">
                                {fanPreviews.map((site, idx) => (
                                    <div
                                        key={site.link}
                                        style={{ transform: `rotate(${(idx - (fanPreviews.length - 1) / 2) * 4}deg)` }}
                                        className="relative h-16 w-28 overflow-hidden rounded-lg border border-white/70 shadow-md ring-2 ring-white dark:border-white/20 dark:ring-brand-gray"
                                    >
                                        <Image
                                            src={site.image}
                                            alt=""
                                            fill
                                            className="object-cover object-center"
                                            unoptimized={site.image.endsWith('.gif')}
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-transform duration-300 group-open/playground:rotate-180">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                        </summary>
                        <div className="grid grid-cols-1 gap-6 border-t border-gray-100 p-6 dark:border-gray-800 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
                            {userData.playground.map((site) => (
                                <PlaygroundCard key={site.link} {...site} />
                            ))}
                        </div>
                    </motion.details>
                )}
            </div>
        </Layout>
    );
}

const Section = ({
    heading,
    delay,
    children,
}: {
    heading: string,
    delay: number,
    children: React.ReactNode,
}) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="pt-10"
    >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {heading}
        </h2>
        <div className="mt-6">
            {children}
        </div>
    </motion.section>
);

const TechTags = ({ tech }: { tech: string[] }) => (
    <div className="flex flex-wrap gap-2 mt-auto">
        {tech.filter((eachTech) => eachTech.trim() !== "").map((eachTech) => (
            <span
                key={eachTech}
                className="px-3 py-1 text-xs font-medium text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20"
            >
                {eachTech}
            </span>
        ))}
    </div>
);

const ProjectCard = ({ title, link, image, desc, tech }: projectDetails) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={safeExternalUrl(link)}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-brand-gray border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-brand-accent transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {desc}
                </p>
                <TechTags tech={tech} />
            </div>
        </a>
    );
};

const PlaygroundCard = ({ title, link, repo, image, desc }: playgroundDetails) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-brand-dark/40">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={safeExternalUrl(link)}
                className="relative block aspect-video w-full overflow-hidden"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized={image.endsWith('.gif')}
                />
            </a>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="font-bold text-gray-900 transition-colors group-hover:text-brand-accent dark:text-gray-100">
                    {title}
                </h3>
                <p className="mb-4 mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {desc}
                </p>
                <div className="mt-auto flex gap-4 text-sm font-medium">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={safeExternalUrl(link)}
                        className="text-brand-accent hover:underline"
                    >
                        Live ↗
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={safeExternalUrl(repo)}
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
