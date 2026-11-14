import React from "react";
import Image from "next/image";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { safeExternalUrl } from "../lib/safeExternalUrl";
import ProjectCard from "../components/ProjectCard";
import ArrowUpRight from "../components/shared/ArrowUpRight";

const title = `${userData.name}`;
const subtitle = "Projects"

interface archivedDetails {
    title: string,
    link: string,
    image: string,
    tech: string[],
    desc: string,
    award?: string,
}

interface playgroundDetails {
    title: string,
    link: string,
    repo?: string,
    image: string,
    desc: string
}

const activeProjects = userData.projects.filter((proj) => !proj.archived);
const featuredProjects = activeProjects.filter((proj) => proj.featured);
const otherProjects = activeProjects.filter((proj) => !proj.featured);
const archivedProjects = userData.projects.filter((proj) => proj.archived);
const fanPreviews = userData.playground.filter((site) => site.image.endsWith('.gif'));

const Projects: NextPage = () => {
    return (
        <Layout title="Projects" description={`${title} - ${subtitle}`}>
            <div className="container-page pt-14 sm:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-5xl">
                        Projects
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Independent projects I build to explore new technology and solve problems I run into. Most are open source.
                    </p>
                </motion.div>
            </div>

            <div className="container-page">
                <Section heading="Featured" delay={0}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {featuredProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <ProjectCard {...proj} size="large" />
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section heading="Active projects" delay={0.2}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                </Section>

                {archivedProjects.length > 0 && (
                    <Section heading="Archive" delay={0.25}>
                        <p className="-mt-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
                            Earlier projects that are no longer maintained. The source remains available on GitHub.
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {archivedProjects.map((proj) => (
                                <ArchivedCard key={proj.link} {...proj} />
                            ))}
                        </div>
                    </Section>
                )}

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={safeExternalUrl(userData.github)}
                    className="text-link mt-10 inline-flex items-center gap-2"
                >
                    See everything on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>

                {userData.playground.length > 0 && (
                    <motion.details
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="card group/playground mt-16"
                    >
                        <summary className="flex cursor-pointer list-none items-center gap-6 p-6 sm:p-8 [&::-webkit-details-marker]:hidden">
                            <div className="flex-1">
                                <h2 className="section-title">
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
                                        className="relative h-16 w-28 overflow-hidden rounded-lg border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-2 ring-white dark:border-white/10 dark:ring-brand-gray"
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
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-transform duration-300 group-open/playground:rotate-180 dark:border-white/10 dark:text-gray-300">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                        </summary>
                        <div className="grid grid-cols-1 gap-6 border-t border-gray-200 p-6 dark:border-white/10 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
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
        className="pt-16"
    >
        <h2 className="section-title border-t border-gray-200 pt-5 dark:border-white/10">
            {heading}
        </h2>
        <div className="mt-6">
            {children}
        </div>
    </motion.section>
);

const ArchivedCard = ({ title, link, image, desc, tech, award }: archivedDetails) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={safeExternalUrl(link)}
        className="card-link group flex gap-4 p-4"
    >
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5">
            <Image
                src={image}
                alt=""
                fill
                sizes="112px"
                className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                unoptimized={image.endsWith('.gif')}
            />
        </div>
        <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                </h3>
                {award && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
                        {award}
                    </span>
                )}
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {desc}
            </p>
            <p className="mt-2 font-mono text-[11px] text-gray-500 dark:text-gray-400">
                {tech.join(' · ')}{' '}
                <span className="text-accent ml-1 font-sans text-xs font-medium">
                    {new URL(link).hostname === 'github.com' ? 'Source' : 'Live'} <ArrowUpRight className="h-3 w-3" />
                </span>
            </p>
        </div>
    </a>
);

const PlaygroundCard = ({ title, link, repo, image, desc }: playgroundDetails) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-brand-dark/40">
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
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    unoptimized={image.endsWith('.gif')}
                />
            </a>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
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
                        className="text-accent hover:underline"
                    >
                        Live <ArrowUpRight className="h-3 w-3" />
                    </a>
                    {repo ? (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={safeExternalUrl(repo)}
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                            Source
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Projects;
