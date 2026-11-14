import React from 'react'
import Link from 'next/link'
import { userData } from '../constants/user'
import { safeExternalUrl } from '../lib/safeExternalUrl'

const external = [
  { label: 'GitHub', href: userData.github },
  { label: 'LinkedIn', href: userData.linkedin },
  { label: 'Medium', href: userData.medium },
  { label: 'Buy me a coffee', href: userData.buymeacoffee },
]

export default function Footer(): React.ReactElement {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-white/10">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{userData.name}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Building AI platforms at GovTech Singapore.{' '}
            <a
              href={safeExternalUrl(userData.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              Say hello on LinkedIn
            </a>
          </p>
        </div>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-5 gap-y-2">
          {external.map((item) => (
            <a
              key={item.label}
              href={safeExternalUrl(item.href)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {item.label}
            </a>
          ))}
          <Link href="/blog" className="text-link">
            Blog
          </Link>
        </nav>
      </div>
    </footer>
  )
}
