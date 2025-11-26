import React from 'react';
import Image from 'next/image';
import { userData } from "../constants/user";
import Icon from "./shared/Icon";
import { motion } from "framer-motion";

interface HeroSplashProps {
    scrollToSection: (id: string) => void;
}

const TITLE = "Hi, I'm Teng Fone 👋";
const SUBTITLE = "I build things for public good";
const ROLE = "A Data Engineer (DE)";
const TAGLINE = "*Do Everything Engineer";

export default function HeroSplash({ scrollToSection }: HeroSplashProps): React.ReactElement {
    return (
        <div className="relative flex flex-row justify-center items-start overflow-hidden h-screen bg-white dark:bg-brand-dark transition-colors duration-500">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/10 blur-[100px] animate-pulse-slow" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 z-10 mt-20 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mb-2 font-mono text-3xl text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl font-bold">
                        Hi, I'm <br className="block md:hidden" />
                        <span className="relative inline-block">
                            <span className="text-brand-accent">
                                {userData.name}
                            </span>
                            <motion.span
                                initial={{ opacity: 0, rotate: -10 }}
                                animate={{ opacity: 1, rotate: 10 }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 0.5
                                }}
                                className="inline-block ml-2 origin-bottom-right"
                            >
                                👋
                            </motion.span>
                        </span>
                        <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 font-light">
                            {ROLE}
                        </span>
                        <span className="block mt-2 text-xs sm:text-sm md:text-base text-brand-muted font-mono">
                            {TAGLINE}
                        </span>
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-6 sm:mt-10 font-medium text-base sm:text-lg text-gray-600 dark:text-gray-400 md:text-xl"
                >
                    {SUBTITLE.split('public good')[0]}
                    <span className="relative inline-block px-2">
                        <span className="relative z-10 text-white font-bold">public good</span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute inset-0 bg-brand-accent -skew-y-3 rounded-sm origin-left"
                        />
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-10 flex gap-x-6 md:justify-start justify-center"
                >
                    {[
                        { href: userData.github, icon: "github" },
                        { href: userData.linkedin, icon: "linkedin" },
                        { href: userData.medium, icon: "medium" }
                    ].map((item, index) => (
                        <a
                            key={item.icon}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${item.icon} profile`}
                            className="text-gray-600 dark:text-gray-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 transform hover:scale-110"
                        >
                            <Icon name={item.icon as any} className="h-6 w-6" />
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className='cursor-pointer w-full grid place-items-center mt-32'
                    onClick={() => scrollToSection("aboutme")}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-sm text-brand-muted mb-2">Scroll Down</span>
                        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20"
            >
                <div className="w-3/4 relative">
                    <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <Image
                            src="/profilepic.jpg"
                            alt="avatar"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-2xl border-4 border-white dark:border-brand-gray"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
