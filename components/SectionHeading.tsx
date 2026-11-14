import React from 'react'
import Link from 'next/link'

interface SectionHeadingProps {
  id: string
  title: string
  link?: { href: string; label: string }
}

/** Hairline-ruled heading row shared by every homepage section. */
export default function SectionHeading({ id, title, link }: SectionHeadingProps): React.ReactElement {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-gray-200 pt-5 dark:border-white/10">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {link && (
        <Link href={link.href} className="text-link whitespace-nowrap">
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}
