import React, { ReactElement } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";

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
                    <p className="font-body font-bold text-[60px]">Experiences</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative pt-10 pb-20">
                    <div className="absolute inset-0 h-full w-2 sm:w-4 bg-green-100 dark:bg-green-900/50 left-4 sm:left-1/2 transform -translate-x-1/2"></div>
                    <div className="relative space-y-8">
                        {userData.experience.map((exp, idx) => (
                            <div 
                                key={`${exp.company}-${exp.year}`}
                                className="relative flex flex-col sm:grid sm:grid-cols-2 gap-4"
                            >
                                <div className={`${idx % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'} relative`}>
                                    <ExperienceCard
                                        title={exp.title}
                                        desc={exp.desc}
                                        year={exp.year}
                                        company={exp.company}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}


const ExperienceCard = ({ title, desc, year, company }: ExpDetails): ReactElement => {
    return (
        <div className="relative group p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-green-500/20 hover:border-green-500/50 z-10 mx-4">
            <div className="absolute -top-10 md:-left-10 md:-top-10">
                <div className="text-4xl font-bold text-gray-200 dark:text-gray-800 bg-green-500/90 px-4 py-2 rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    {year}
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {title}
            </h1>
            <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                {company}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {desc}
            </p>
        </div>
    );
};


export default Experiences;
