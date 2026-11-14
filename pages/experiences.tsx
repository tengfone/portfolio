import React, { ReactElement } from 'react'
import { userData } from '../constants/user'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { safeExternalUrl } from '../lib/safeExternalUrl'

const title = `${userData.name}`
const subtitle = 'Experiences'

interface ProofLink {
  label: string
  href: string
}

interface SubSection {
  title: string
  role?: string
  desc: string
  bullets?: string[]
  link?: ProofLink
}

interface EarlierWork {
  title: string
  desc: string
  link?: ProofLink
}

interface ExpDetails {
  title: string
  company: string
  desc?: string | string[]
  year: string
  subSections?: SubSection[]
  earlier?: EarlierWork[]
  proofLinks?: ProofLink[]
}

const Experiences: NextPage = () => {
  return (
    <Layout title="Experiences" description={`${title} - ${subtitle}`}>
      <div className="container-page pt-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-5xl">
            Experiences
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            The platforms I build, the roles I take on, and the work behind
            them.
          </p>
        </motion.div>

        <ol className="mt-16">
          {userData.experience.map((exp) => (
            <li
              key={`${exp.company}-${exp.year}`}
              className="grid gap-3 border-t border-gray-200 py-8 dark:border-white/10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="font-mono text-sm tabular-nums text-gray-500 dark:text-gray-400">
                {exp.year}
              </p>
              <ExperienceEntry {...exp} />
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

const ExperienceEntry = ({
  title,
  desc,
  company,
  subSections,
  earlier,
  proofLinks,
}: ExpDetails): ReactElement => {
  return (
    <div className="min-w-0">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>

      {/* Cross-cutting work that belongs to the role rather than any one platform. */}
      {subSections && typeof desc === 'string' && (
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
          {desc}
        </p>
      )}

      {subSections && subSections.length > 0 ? (
        <ul className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-3">
          {subSections.map((section) => (
            <li key={section.title}>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {section.role && (
                  <span className="text-accent block text-sm font-medium">
                    {section.role}
                  </span>
                )}
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {section.desc}
              </p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-gray-700 marker:text-gray-400 dark:text-gray-300 dark:marker:text-gray-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.link && (
                <a
                  href={safeExternalUrl(section.link.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-2 inline-block text-sm hover:underline"
                >
                  {section.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : Array.isArray(desc) ? (
        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-gray-600 marker:text-gray-400 dark:text-gray-400 dark:marker:text-gray-600">
          {desc.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        desc && (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {desc}
          </p>
        )
      )}

      {earlier && earlier.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Data foundations and engineering enablement
          </h3>
          <dl className="mt-3 grid gap-x-10 gap-y-5 border-t border-gray-200 pt-4 dark:border-white/10 lg:grid-cols-3">
            {earlier.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                  {item.link && (
                    <>
                      {' '}
                      <a
                        href={safeExternalUrl(item.link.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {item.link.label}
                      </a>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {proofLinks && proofLinks.length > 0 && (
        <div className="mt-4 flex gap-4">
          {proofLinks.map((link) => (
            <a
              key={link.href}
              href={safeExternalUrl(link.href)}
              className="text-accent text-sm hover:underline"
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
