import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout title="Page not found" description="This page does not exist.">
      <div className="container-page pt-20 sm:pt-32">
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          It may have moved, or the link may be mistyped. Try the homepage, or
          browse projects and posts from the menu.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center rounded-full bg-gray-900 px-5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Go to the homepage
        </Link>
      </div>
    </Layout>
  )
}
