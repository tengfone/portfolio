import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe(props: any): React.ReactElement {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <div id="aboutme" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        About Me
                    </h1>

                    <div className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-8 py-12 text-justify bg-white/10 dark:bg-black/10 rounded-lg">
                        <p className="mb-6">
                            Hello! I reside in ap-southeast-1 with a background in Mechanical Engineering and Computer Science (AI). As a passionate technology professional, I am committed to driving innovation and delivering impactful solutions within the public sector.
                        </p>
                        <p className="mb-6">
                            I am honoured to be working in GovTech where I've had the opportunity to contribute to transformative projects that enhance Singapore's technological landscape. My experience spans leading the design and development of cloud infrastructure for all things Data, from MLOps/AIOps to Data Sharing, where I implemented cutting-edge AI technologies with multi-cloud approaches.
                        </p>
                        <p className="mb-6">
                            These efforts have driven AI innovation across the Whole Of Singapore Government. Additionally, I have played a pivotal role in the Whole-of-Government GenAI adoption, reducing time-to-market by 75% and significantly improving productivity and model inference capabilities.
                        </p>
                        <p className="mb-6">
                            I am also currently hosting AI events in Singapore and contributing to build a vibrant AI community that drives innovation and adoption to Singapore. I am motivated by the impact that technology can have on society and am always seeking opportunities to leverage my skills to create meaningful change.
                        </p>
                        <p>
                            Whether it's through mentoring peers, leading technical initiatives, or collaborating with cross-functional teams, I strive to push the boundaries of what's possible and help shape a more innovative future.
                        </p>
                    </div>

                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-12 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                Technical Skills
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I work primarily with these technologies:
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                                        Programming Languages
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Python", "TypeScript", "JavaScript", "Bash",
                                            "Java", "Dart", "Solidity", "Go", ".NET", "c%23", "C++"
                                        ].map((lang, i) => (
                                            <motion.div
                                                key={lang}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <img
                                                    alt={lang}
                                                    src={`https://img.shields.io/badge/${lang.toLowerCase()}-%2314354C.svg?style=for-the-badge&logo=${lang.toLowerCase()}&logoColor=white`}
                                                    className="hover:opacity-80 transition-opacity"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                        Frameworks & Libraries
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "React", "Cypress", "Docker", "Postgres",
                                            "MySQL", "Flutter", "Jupyter", "Arduino",
                                            "PyTorch", "NumPy", "Pandas", "MongoDB", ".NET"
                                        ].map((tech, i) => (
                                            <motion.div
                                                key={tech}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <img
                                                    alt={tech}
                                                    src={`https://img.shields.io/badge/${tech.toLowerCase()}-%2320232a.svg?style=for-the-badge&logo=${tech.toLowerCase()}&logoColor=white`}
                                                    className="hover:opacity-80 transition-opacity"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                        Cloud & Infrastructure
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Amazon_AWS", "Microsoft_Azure", "Terraform"].map((tool, i) => {
                                            let badgeUrl;
                                            if (tool === "Amazon_AWS") {
                                                badgeUrl = "https://img.shields.io/badge/Amazon_AWS-%23FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white";
                                            } else if (tool === "Microsoft_Azure") {
                                                badgeUrl = "https://img.shields.io/badge/Microsoft_Azure-%230078D4.svg?style=for-the-badge&logo=microsoftazure&logoColor=white";
                                            } else {
                                                badgeUrl = `https://img.shields.io/badge/${tool.toLowerCase()}-%235835CC.svg?style=for-the-badge&logo=${tool.toLowerCase()}&logoColor=white`;
                                            }
                                            
                                            return (
                                                <motion.div
                                                    key={tool}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <img
                                                        alt={tool}
                                                        src={badgeUrl}
                                                        className="hover:opacity-80 transition-opacity"
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
