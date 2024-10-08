import React from 'react';
import { userData } from "../constants/user";
import styles from "./HeroSplash.module.css";

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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-github h-5 w-5"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a
                            href={userData.linkedin}
                            target="_blank"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-linkedin h-5 w-5"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a
                            href={userData.medium}
                            target="_blank"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-medium h-5 w-5" viewBox="0 0 16 16">
                                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                            </svg>
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