import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 dark:bg-brand-dark">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse-slow rounded-full bg-blue-500/10 blur-3xl delay-1000" />
      </div>

      <div className="z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto max-w-lg rounded-2xl border border-white/20 p-12 shadow-xl"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="mb-4 text-9xl font-bold text-brand-accent"
          >
            404
          </motion.div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Oops! It seems you&apos;ve ventured into the unknown. The page
            you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-brand-accent px-8 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
