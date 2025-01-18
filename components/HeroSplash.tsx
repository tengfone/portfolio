import React from 'react';
import { userData } from "../constants/user";
import styles from "./HeroSplash.module.css";
import Icon from "./shared/Icon";

interface Props {
    scrollToSection: (id: string) => void;
}

export default function HeroSplash(props: Props): React.ReactElement {

    return (
        <>
            <div className="flex flex-row justify-center items-start overflow-hidden h-screen">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <h1 className="mb-2 font-mono text-4xl text-black-100 md:text-6xl">
                        Hi, I&apos;m <br className="block md:hidden" />
                        <span className="relative">
                            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-green-500">
                                Teng Fone<span className="text-3xl md:text-5xl">👋</span>
                            </span>
                            <span
                                className={`cursor absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change dark:bg-[#121212]`}
                            ></span>
                        </span>
                        <br />
                        <span className="">
                            A Data Engineer(DE)
                        </span>
                        <span className="absolute translate-y-1 transform md:text-base text-gray-500 text-sm flex-row">
                            *Do Everything Engineer
                        </span>
                    </h1>

                    <h2 className="mt-10 font-bold text-lg text-gray-500 md:text-xl">
                        I build things for &nbsp;
                        <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-green-500 relative inline-block">
                            <span className="relative text-white">public good</span>
                        </span>
                    </h2>

                    <div className="mt-10 flex gap-x-5 md:justify-start justify-center">
                        <a
                            href={userData.github}
                            target="_blank"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <Icon name="github" className="h-5 w-5" />
                        </a>
                        <a
                            href={userData.linkedin}
                            target="_blank"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <Icon name="linkedin" className="h-5 w-5" />
                        </a>
                        <a
                            href={userData.medium}
                            target="_blank"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <Icon name="medium" className="h-5 w-5" />
                        </a>
                    </div>

                    <div className='cursor-pointer w-full grid place-items-center mt-24' onClick={() => props.scrollToSection("aboutme")}>
                        <div className={styles.chevron}></div>
                        <div className={styles.chevron}></div>
                        <div className={styles.chevron}></div>
                        {/* <span className="absolute md:text-base text-gray-500 text-sm flex-row">
                            Click to scroll down
                        </span> */}
                    </div>


                </div>
                <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
                    <div className="w-3/4">
                        <img className="animate-slowBounce rounded-full hover:" src="/profilepic.jpg" alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    );
}
