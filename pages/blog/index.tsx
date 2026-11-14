import React from 'react'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import fs from 'fs'
import path from 'path'
import Layout from '../../components/Layout'
import { blogData, userData } from '../../constants/user'
import { TagList } from '../../components/Tag'
import { formatDate, estimateReadTime } from '../../lib/formatDate'

const title = `${userData.name}`
const subtitle = 'Blog'

interface BlogProps {
  wordCounts: Record<string, number>
}

const Blog: NextPage<BlogProps> = ({ wordCounts }) => {
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <Layout title="Blog" description={`${title} - ${subtitle}`}>
      <div className="container-page pt-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Notes on AI platforms, MLOps and the tools I use.
          </p>
        </motion.div>

        <ul className="mt-16 border-b border-gray-200 dark:border-white/10">
          {sortedPosts.map((post) => (
            <li key={post.slug} className="border-t border-gray-200 dark:border-white/10">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-7 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
              >
                <p className="font-mono text-sm tabular-nums text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="block">{estimateReadTime(wordCounts[post.slug])} min read</span>
                </p>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 underline-offset-4 group-hover:underline dark:text-gray-100">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-3xl leading-relaxed text-gray-600 line-clamp-2 dark:text-gray-400">
                    {post.summary}
                  </p>
                  <div className="mt-4">
                    <TagList items={post.tags} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const postsDir = path.join(process.cwd(), 'pages', 'blog')
  const wordCounts: Record<string, number> = {}

  for (const post of blogData) {
    const filePath = path.join(postsDir, `${post.slug}.mdx`)
    if (!fs.existsSync(filePath)) continue
    const raw = fs.readFileSync(filePath, 'utf-8')
    const stripped = raw
      .replace(/^import\s.+$/gm, '')
      .replace(/^export\s.+$/gm, '')
      .replace(/export\s+const\s+meta\s*=\s*\{[\s\S]*?\}/m, '')
      .replace(/export\s+default\s+[^\n]+/g, '')
      .replace(/^#+\s/gm, '')
      .replace(/[*_`~>]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/\{[^}]+\}/g, '')
    const words = stripped.trim().split(/\s+/).filter(Boolean)
    wordCounts[post.slug] = words.length
  }

  return { props: { wordCounts } }
}

export default Blog
