import React, { ReactElement } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const title = `${userData.name}`;
const subtitle = "Experiences"

interface ExpDetails {
    title: string
    company: string
    desc: string
    year: string
}

const Experiences: NextPage = () => {
    return (
        <Layout title="Experiences" description={`${title} - ${subtitle}`}>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-body font-bold text-5xl md:text-[60px] text-gray-900 dark:text-gray-100"
                    >
                        Experiences
                    </motion.p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative pt-10 pb-20">
                    <div className="absolute inset-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800 left-4 sm:left-1/2 transform -translate-x-1/2"></div>
                    <div className="relative space-y-12">
                        {userData.experience.map((exp, idx) => (
                            <motion.div
                                key={`${exp.company}-${exp.year}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative flex flex-col sm:grid sm:grid-cols-2 gap-4"
                            >
                                <div className={`${idx % 2 === 0 ? 'sm:col-start-1 sm:text-right' : 'sm:col-start-2'} relative`}>
                                    <ExperienceCard
                                        title={exp.title}
                                        desc={exp.desc}
                                        year={exp.year}
                                        company={exp.company}
                                        isLeft={idx % 2 === 0}
                                    />
                                    {/* Timeline Dot */}
                                    <div className={`absolute top-6 w-4 h-4 rounded-full border-4 border-white dark:border-brand-dark bg-brand-accent shadow-lg z-20 
                                        ${idx % 2 === 0 ? '-right-[26px] sm:-right-[26px]' : '-left-[26px] sm:-left-[26px]'} 
                                        hidden sm:block`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

interface ExperienceCardProps extends ExpDetails {
    isLeft: boolean;
}

const ExperienceCard = ({ title, desc, year, company, isLeft }: ExperienceCardProps): ReactElement => {
    return (
        <div className={`relative group p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-brand-gray border border-gray-100 dark:border-gray-800 z-10 mx-4 sm:mx-0
            ${isLeft ? 'sm:mr-8' : 'sm:ml-8'}`}
        >
            <div className={`absolute -top-4 ${isLeft ? 'right-8' : 'left-8'}`}>
                <span className="text-sm font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                    {year}
                </span>
            </div>
            <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100 group-hover:text-brand-accent transition-colors">
                {title}
            </h1>
            <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                {company}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );
};

export default Experiences;
