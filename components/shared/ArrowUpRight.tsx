import React from 'react'

/** Outbound-link arrow, drawn so it never falls back to an emoji glyph. */
export default function ArrowUpRight({ className = 'h-3.5 w-3.5' }: { className?: string }): React.ReactElement {
  return (
    <svg
      className={`inline-block shrink-0 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  )
}
