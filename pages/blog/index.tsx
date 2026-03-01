import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import { blogData, userData } from '../../constants/user'

const title = `${userData.name}`
const subtitle = 'Blog'

const Blog: NextPage = () => {
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <Layout title="Blog" description={`${title} - ${subtitle}`}>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[10%] -top-[20%] h-[40%] w-[40%] animate-pulse-slow rounded-full bg-brand-accent/5 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl px-4 pt-12 pb-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Blog
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Thoughts on anything.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 pb-12 pt-6">
              {sortedPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="relative rounded-xl border border-gray-100 bg-white px-6 py-5 transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-brand-gray">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-xs text-brand-muted">
                            <time className="font-medium text-brand-accent">
                              {formatDate(post.date)}
                            </time>
                            <span className="h-0.5 w-0.5 rounded-full bg-brand-muted" />
                            <span>{estimateReadTime(post.summary)} min read</span>
                          </div>
                          <h2 className="mt-1.5 text-base font-semibold text-gray-900 transition-colors group-hover:text-brand-accent dark:text-gray-100 sm:text-lg">
                            {post.title}
                          </h2>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-1">
                            {post.summary}
                          </p>
                          {post.tags.length > 0 && (
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-2 py-0.5 text-[11px] font-medium text-brand-accent"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="hidden shrink-0 self-center sm:block">
                          <svg className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-accent dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export default Blog
