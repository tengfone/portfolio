import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import AboutMe from '../components/Aboutme'
import HeroSplash from '../components/HeroSplash'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { blogData, userData } from '../constants/user'
import { formatDate } from '../lib/formatDate'

const SELECTED_COUNT = 3

const selectedWork = userData.projects
  .filter((proj) => !proj.archived)
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  .slice(0, SELECTED_COUNT)

const currentRole = userData.experience[0]

const latestPosts = [...blogData]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

const Home: NextPage = () => {
  return (
    <Layout title="Home" description={`${userData.name} - Home`}>
      <HeroSplash />

      <section aria-labelledby="work" className="container-page pt-20 sm:pt-28">
        <SectionHeading id="work" title="Selected work" link={{ href: '/projects', label: 'All projects' }} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWork.map((proj) => (
            <ProjectCard key={proj.link} {...proj} />
          ))}
        </div>
      </section>

      <section aria-labelledby="now" className="container-page pt-20 sm:pt-28">
        <SectionHeading id="now" title="Now" link={{ href: '/experiences', label: 'Full experience' }} />
        <p className="mt-6 font-mono text-sm text-gray-500 dark:text-gray-400">
          {currentRole.company} · {currentRole.year}
        </p>
        <ul className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {currentRole.subSections?.map((section) => (
            <li key={section.title}>
              <p className="text-accent text-sm font-medium">{section.role}</p>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-gray-100">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {section.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="writing" className="container-page pt-20 sm:pt-28">
        <SectionHeading id="writing" title="Writing" link={{ href: '/blog', label: 'All posts' }} />
        <ul className="mt-4 divide-y divide-gray-200 dark:divide-white/10">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
              >
                <time dateTime={post.date} className="font-mono text-sm tabular-nums text-gray-500 dark:text-gray-400">
                  {formatDate(post.date)}
                </time>
                <span>
                  <span className="font-medium text-gray-900 underline-offset-4 group-hover:underline dark:text-gray-100">
                    {post.title}
                  </span>
                  <span className="mt-1 block max-w-3xl text-sm leading-relaxed text-gray-600 line-clamp-2 dark:text-gray-400">
                    {post.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AboutMe />
    </Layout>
  )
}

export default Home
