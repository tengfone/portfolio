import React from 'react'
import Image from 'next/image'
import { userData } from '../constants/user'
import Icon, { IconName } from './shared/Icon'
import { motion } from 'framer-motion'

interface HeroSplashProps {
  scrollToSection: (id: string) => void
}

const SUBTITLE = 'I build things for public good'
const ROLE = 'A Data Engineer (DE)'
const TAGLINE = '*Do Everything Engineer'

export default function HeroSplash({
  scrollToSection,
}: HeroSplashProps): React.ReactElement {
  return (
    <div className="relative flex h-screen flex-row items-start justify-center overflow-hidden bg-white transition-colors duration-500 dark:bg-brand-dark">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[20%] h-[50%] w-[50%] animate-pulse-slow rounded-full bg-brand-accent/10 blur-[100px]" />
        <div className="absolute -right-[10%] top-[20%] h-[40%] w-[40%] animate-pulse-slow rounded-full bg-blue-500/10 blur-[100px] delay-1000" />
      </div>

      <div className="z-10 mx-auto mt-20 w-full text-center md:mt-0 md:w-1/2 md:text-left lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 font-mono text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="relative inline-block">
              <span className="text-brand-accent">{userData.name}</span>
              <motion.span
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 10 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 0.5,
                }}
                className="ml-2 inline-block origin-bottom-right"
              >
                👋
              </motion.span>
            </span>
            <br />
            <span className="text-2xl font-light text-gray-700 dark:text-gray-300 sm:text-3xl md:text-4xl">
              {ROLE}
            </span>
            <span className="mt-2 block font-mono text-xs text-brand-muted sm:text-sm md:text-base">
              {TAGLINE}
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-base font-medium text-gray-600 dark:text-gray-400 sm:mt-10 sm:text-lg md:text-xl"
        >
          {SUBTITLE.split('public good')[0]}
          <span className="relative inline-block px-2">
            <span className="relative z-10 font-bold text-white">
              public good
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute inset-0 origin-left -skew-y-3 rounded-sm bg-brand-accent"
            />
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex justify-center gap-x-6 md:justify-start"
        >
          {[
            { href: userData.github, icon: 'github' },
            { href: userData.linkedin, icon: 'linkedin' },
            { href: userData.medium, icon: 'medium' },
          ].map((item) => (
            <a
              key={item.icon}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.icon} profile`}
              className="transform text-gray-600 transition-colors duration-300 hover:scale-110 hover:text-brand-accent dark:text-gray-400 dark:hover:text-brand-accent"
            >
              <Icon name={item.icon as IconName} className="h-6 w-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-32 grid w-full cursor-pointer place-items-center"
          onClick={() => scrollToSection('aboutme')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="mb-2 text-sm text-brand-muted">Scroll Down</span>
            <svg
              className="h-6 w-6 text-brand-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative -mr-40 mt-20 hidden w-full md:w-1/2 lg:block"
      >
        <div className="relative w-3/4">
          <div className="absolute inset-0 translate-x-10 translate-y-10 transform rounded-full bg-brand-accent/20 blur-3xl" />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Image
              src="/profilepic.jpg"
              alt="avatar"
              width={500}
              height={500}
              className="rounded-2xl border-4 border-white shadow-2xl dark:border-brand-gray"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
