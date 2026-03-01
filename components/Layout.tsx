import React, { ReactNode, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Footer from './Footer'


type Props = {
    children: ReactNode
    title: string
    description: string
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, title, description }: Props): React.ReactElement => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowTopBtn(window.scrollY > 400);
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className='flex flex-col justify-between h-screen'>
                <NextSeo title={title} description={description} openGraph={{ title, description }} />
                <motion.main
                    id="main-content"
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ type: 'linear' }}
                >
                    {children}
                </motion.main>

                <Footer />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showTopBtn ? 1 : 0, y: showTopBtn ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 right-6 z-50 md:bottom-10 md:right-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    className="cursor-pointer bi bi-arrow-up-circle fill-green-500 hover:fill-green-600 transition-colors"
                    viewBox="0 0 16 16"
                    onClick={goToTop}
                    role="button"
                    aria-label="Scroll to top"
                    tabIndex={showTopBtn ? 0 : -1}
                    onKeyDown={(e) => e.key === 'Enter' && goToTop()}
                >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </motion.div>
        </div>
    )

}
export default Layout
