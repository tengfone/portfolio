import React from 'react'

/** A quiet, monospace label for tech stacks and post topics. */
export default function Tag({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <span className="inline-flex items-center rounded-md border border-gray-200 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-gray-600 dark:border-white/10 dark:text-gray-400">
      {children}
    </span>
  )
}

export function TagList({ items }: { items: string[] }): React.ReactElement | null {
  const visible = items.filter((item) => item.trim() !== '')
  if (visible.length === 0) return null
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
      {visible.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
