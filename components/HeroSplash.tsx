import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { userData } from '../constants/user'
import Icon, { IconName } from './shared/Icon'
import { safeExternalUrl } from '../lib/safeExternalUrl'

const SOCIALS: { href: string; icon: IconName; label: string }[] = [
  { href: userData.github, icon: 'github', label: 'GitHub' },
  { href: userData.linkedin, icon: 'linkedin', label: 'LinkedIn' },
  { href: userData.medium, icon: 'medium', label: 'Medium' },
]

export default function HeroSplash(): React.ReactElement {
  return (
    <section className="container-page pb-4 pt-14 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20"
      >
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-gray-200 dark:border-white/10 md:order-last md:aspect-[4/5] md:h-auto md:w-full md:rounded-2xl">
          <Image
            src="/profilepic.jpg"
            alt={`Portrait of ${userData.name}`}
            fill
            sizes="(min-width: 1024px) 304px, (min-width: 768px) 240px, 80px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold tracking-[-0.035em] text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            {userData.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-gray-600 [text-wrap:balance] dark:text-gray-400 sm:text-2xl">
            AI Platform Engineer at GovTech Singapore, building and leading
            production AI platforms for the public good.
          </p>

          <p className="mt-6 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Currently leading the self-hosted GenAI platform and its team.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center rounded-full bg-gray-900 px-5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              See my projects
            </Link>
            <ul className="flex items-center gap-1">
              {SOCIALS.map((item) => (
                <li key={item.icon}>
                  <a
                    href={safeExternalUrl(item.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-100"
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
