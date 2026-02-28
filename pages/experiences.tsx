import React, { ReactElement } from 'react'
import { userData } from '../constants/user'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const title = `${userData.name}`
const subtitle = 'Experiences'

interface SubSection {
  title: string
  desc: string
  link?: { label: string; href: string }
}

interface ProofLink {
  label: string
  href: string
}

interface ExpDetails {
  title: string
  company: string
  desc?: string | string[]
  year: string
  highlights?: string[]
  subSections?: SubSection[]
  proofLinks?: ProofLink[]
}

const Experiences: NextPage = () => {
  return (
    <Layout title="Experiences" description={`${title} - ${subtitle}`}>
      <div className="flex flex-row items-start justify-center overflow-hidden">
        <div className="mx-auto w-full text-center md:w-1/2 md:text-left lg:p-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-5xl font-bold text-gray-900 dark:text-gray-100 md:text-[60px]"
          >
            Experiences
          </motion.p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pb-20 pt-10">
          <div className="absolute inset-0 left-4 h-full w-0.5 -translate-x-1/2 transform bg-gray-200 dark:bg-gray-800 sm:left-1/2"></div>
          <div className="relative space-y-12">
            {userData.experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col gap-4 sm:grid sm:grid-cols-2"
              >
                <div
                  className={`${
                    idx % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'
                  } relative`}
                >
                  <ExperienceCard
                    title={exp.title}
                    desc={exp.desc}
                    year={exp.year}
                    company={exp.company}
                    isLeft={idx % 2 === 0}
                    highlights={exp.highlights}
                    subSections={exp.subSections}
                  />
                </div>
                <div className="absolute left-4 top-6 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-accent shadow-lg dark:border-brand-dark sm:left-1/2 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

interface ExperienceCardProps extends ExpDetails {
  isLeft: boolean
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  isLeft,
  highlights,
  subSections,
  proofLinks,
}: ExperienceCardProps): ReactElement => {
  return (
    <div
      className={`group relative z-10 mx-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-brand-gray sm:mx-0
            ${isLeft ? 'sm:mr-8' : 'sm:ml-8'}`}
    >
      <div className={`absolute -top-4 ${isLeft ? 'right-8' : 'left-8'}`}>
        <span className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-sm font-bold text-brand-accent">
          {year}
        </span>
      </div>
      <h1 className="mb-1 text-2xl font-bold text-gray-900 transition-colors group-hover:text-brand-accent dark:text-gray-100">
        {title}
      </h1>
      <div className="mb-4 text-lg font-medium text-gray-600 dark:text-gray-400">
        {company}
      </div>

      {subSections && subSections.length > 0 ? (
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
            Focus Areas
          </h4>
          <div className="space-y-4">
            {subSections.map((section, idx) => (
              <div
                key={idx}
                className={
                  idx > 0
                    ? 'border-t border-gray-200 pt-3 dark:border-gray-700'
                    : ''
                }
              >
                <h3 className="mb-1 text-base font-semibold text-gray-800 dark:text-gray-200">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {section.desc}
                </p>
                {section.link && (
                  <a
                    href={section.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-brand-accent hover:underline"
                  >
                    {section.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {Array.isArray(desc) ? (
            <ul className="mb-4 space-y-1">
              {desc.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                >
                  <span className="mr-2 text-brand-accent">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            desc && (
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {desc}
              </p>
            )
          )}
        </>
      )}

      {highlights && highlights.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Selected Impact
          </h4>
          <ul className="space-y-1">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="mr-2 text-brand-accent">&bull;</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {proofLinks && proofLinks.length > 0 && (
        <div className="mt-4 flex gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
          {proofLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm text-brand-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Experiences
