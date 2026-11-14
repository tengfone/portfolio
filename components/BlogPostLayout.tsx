import React, { ReactNode } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Layout from './Layout'
import ScrollProgress from './ScrollProgress'
import { TagList } from './Tag'
import ArrowUpRight from './shared/ArrowUpRight'
import { formatDate, estimateReadTime } from '../lib/formatDate'
import { safeExternalUrl } from '../lib/safeExternalUrl'

interface BlogMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  mediumUrl?: string
}

interface BlogPostLayoutProps {
  meta: BlogMeta
  children: ReactNode
  wordCount?: number
}

const SITE_URL = 'https://tengfone.dev'

export default function BlogPostLayout({ meta, children, wordCount }: BlogPostLayoutProps) {
  const canonicalUrl = `${SITE_URL}/blog/${meta.slug}`

  return (
    <Layout title={meta.title} description={meta.summary}>
      <NextSeo
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: meta.date,
            tags: meta.tags,
          },
          url: canonicalUrl,
        }}
      />

      <ScrollProgress />
      <div className="container-page">
        <article className="max-w-3xl pb-8 pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/blog"
              className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-mono text-sm tabular-nums text-gray-500 dark:text-gray-400">
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
              <span aria-hidden="true"> · </span>
              <span>{estimateReadTime(wordCount)} min read</span>
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-gray-900 [text-wrap:balance] dark:text-white sm:text-4xl md:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {meta.summary}
            </p>
            {meta.tags.length > 0 && (
              <div className="mt-5">
                <TagList items={meta.tags} />
              </div>
            )}
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-brand-ink dark:prose-a:text-brand-accent prose-a:underline prose-a:decoration-1 prose-a:underline-offset-4 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-gray-800 prose-li:marker:text-gray-400 prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-gray-700 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
          >
            {children}
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16"
          >
            {meta.mediumUrl && (
              <p className="border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
                Also on{' '}
                <a
                  href={safeExternalUrl(meta.mediumUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline"
                >
                  Medium <ArrowUpRight className="h-3 w-3" />
                </a>
              </p>
            )}

            <div className="mt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <svg
                  className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All posts
              </Link>
            </div>
          </motion.footer>
        </article>
      </div>
    </Layout>
  )
}
