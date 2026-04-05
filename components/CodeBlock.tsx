'use client'

import { useEffect, useRef, useState } from 'react'
import { codeToHtml } from 'shiki'
import type { BundledLanguage } from 'shiki'

interface CodeBlockProps {
  code: string
  language: string
}

const SHIKI_LANGUAGES = new Set([
  'python', 'py', 'javascript', 'js', 'typescript', 'ts', 'json',
  'jsx', 'tsx', 'html', 'css', 'bash', 'sh', 'shell', 'yaml', 'yml',
  'sql', 'go', 'rust', 'java', 'c', 'cpp', 'ruby', 'php', 'swift',
  'kotlin', 'scala', 'r', 'markdown', 'md', 'xml', 'toml', 'ini',
  'dockerfile', 'graphql', 'lua', 'perl', 'powershell', 'diff',
])

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [html, setHtml] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const lang = SHIKI_LANGUAGES.has(language)
    ? (language as BundledLanguage)
    : 'text'

  useEffect(() => {
    let cancelled = false

    codeToHtml(code, {
      lang,
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
    }).then((result) => {
      if (!cancelled) setHtml(result)
    })

    return () => {
      cancelled = true
    }
  }, [code, lang])

  if (!html) {
    return (
      <pre className="shiki-fallback">
        <code>{code}</code>
      </pre>
    )
  }

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
}
