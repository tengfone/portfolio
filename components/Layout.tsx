import React, { ReactNode, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Footer from './Footer'

type Props = {
  children: ReactNode
  title: string
  description: string
}

// One short page entrance; no sideways slides.
const variants = {
  hidden: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
}

const Layout = ({ children, title, description }: Props): React.ReactElement => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        id="main-content"
        className="flex-1"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>

      <Footer />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTopBtn ? 0 : -1}
        className={`fixed bottom-6 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-all duration-300 hover:text-gray-900 dark:border-white/10 dark:bg-brand-gray/90 dark:text-gray-300 dark:hover:text-white sm:right-8 ${
          showTopBtn ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
        </svg>
      </button>
    </div>
  )
}

export default Layout
