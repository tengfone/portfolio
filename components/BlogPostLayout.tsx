import React, { ReactNode } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Layout from './Layout'

interface BlogMeta {
  title: string
  date: string
  summary: string
  tags: string[]
  mediumUrl?: string
}

interface BlogPostLayoutProps {
  meta: BlogMeta
  children: ReactNode
}

const SITE_URL = 'https://tengfone.dev'

export default function BlogPostLayout({ meta, children }: BlogPostLayoutProps) {
  const canonicalUrl = `${SITE_URL}/blog/${slugify(meta.title)}`

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

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[15%] -top-[30%] h-[50%] w-[50%] animate-pulse-slow rounded-full bg-brand-accent/5 blur-[100px]" />
        </div>

        <article className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/blog"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-brand-accent dark:text-gray-400"
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
            <div className="flex items-center gap-3 text-sm text-brand-muted">
              <time className="font-medium text-brand-accent">
                {formatDate(meta.date)}
              </time>
              <span className="h-1 w-1 rounded-full bg-brand-muted" />
              <span>{estimateReadTime(children)} min read</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {meta.summary}
            </p>
            {meta.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-gray-800 prose-li:marker:text-brand-accent prose-blockquote:border-l-brand-accent prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
          >
            {children}
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-brand-gray/50">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Originally published on{' '}
                  <a
                    href={canonicalUrl}
                    className="font-medium text-brand-accent hover:underline"
                  >
                    tengfone.dev
                  </a>
                </p>
                {meta.mediumUrl && (
                  <a
                    href={meta.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-brand-gray dark:text-gray-300 dark:hover:border-gray-600"
                  >
                    Read on Medium
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-brand-accent dark:text-gray-400"
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function estimateReadTime(children: ReactNode): number {
  let text = ''
  const extractText = (node: ReactNode): void => {
    if (typeof node === 'string') {
      text += node
    } else if (Array.isArray(node)) {
      node.forEach(extractText)
    } else if (node && typeof node === 'object' && 'props' in node) {
      extractText((node as React.ReactElement).props.children)
    }
  }
  extractText(children)
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}
