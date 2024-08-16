import React from 'react';

export default function AboutMe(props: any): React.ReactElement {

    return (
        <div id="aboutme" className="">
            <div className="flex flex-row justify-center items-start">
                <div className="w-9/12 mx-auto text-left lg:p-20">
                    <h1 className="mb-2 text-4xl text-black-100">
                        About Me
                    </h1>

                    <h2 className="mt-10 font-bold text-gray-500">
                        Hello! I reside in ap-southeast-1/Southeast Asia with a background in Mechanical Engineering and Computer Science (AI).<br /><br />

                        As a passionate technology professional, I am committed to driving innovation and delivering impactful solutions within the public sector. I am honoured to be working in GovTech where I’ve had the opportunity to contribute to transformative projects that enhance Singapore’s technological landscape.<br /><br />

                        My experience spans leading the design and development of cloud infrastructure for all things Data, from MLOps/AIOps to Data Sharing, where I implemented cutting-edge AI technologies with multi-cloud approaches. These efforts have driven AI innovation across the Whole Of Singapore Government. Additionally, I have played a pivotal role in the Whole-of-Government GenAI adoption, reducing time-to-market by 75% and significantly improving productivity and model inference capabilities, furthermore I am also currently hosting AI events in Singapore and contributing to build a vibrant AI community that drives innovation and adoption to Singapore.<br /><br />

                        I am motivated by the impact that technology can have on society and am always seeking opportunities to leverage my skills to create meaningful change. Whether it’s through mentoring peers, leading technical initiatives, or collaborating with cross-functional teams, I strive to push the boundaries of what’s possible and help shape a more innovative future.<br />
                    </h2>

                    <h1 className="mt-10 text-3xl text-black-100">
                        Skills
                    </h1>

                    <h2 className="mt-5 mb-5 font-bold text-gray-500">
                        Skils are arranged from left being the most proficient to right being the least proficient.
                        <br />
                        <br />
                        These are the languages that I code in:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        {/* https://dev.to/envoy_/150-badges-for-github-pnk */}
                        <img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white" />
                        <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                        <img alt="Bash" src="https://img.shields.io/badge/Bash%20-%23121011.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white" />
                        <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
                        <img alt="Dart" src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white" />
                        <img alt="Solidity" src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white" />
                        <img alt="Go" src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
                        <img alt="C#" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" />
                        <img alt="C++" src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white" />
                    </div>

                    <h2 className="mt-5 mb-5 font-bold text-gray-500">
                        These are the frameworks/libraries that I am most familiar with:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                        <img alt="Cypress" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
                        <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
                        <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img alt="MYSQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                        <img alt="Flutter" src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" />
                        <img alt="Jupyter" src="https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white" />
                        <img alt="Arduino" src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" />
                        <img alt="PyTorch" src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" />
                        <img alt="NumPy" src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
                        <img alt="Pandas" src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />
                        <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
                        <img alt=".Net" src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" />
                        <img alt="Many More" src="https://img.shields.io/badge/...-And%20More-yellowgreen?style=for-the-badge&logo=GitHub-Sponsors" />
                    </div>

                    <h2 className="mt-5 font-bold text-gray-500">
                        As a cloud enthusiast I primarily use <img alt="aws" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
                        <img alt="azure" src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
                        coupled with these technologies:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="terraform" src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" />

                    </div>

                </div>
                {/* <div className="hidden lg:block relative w-1/2 -mr-40 mt-20">
                    <></>
                </div> */}
            </div>
        </div>
    );
}