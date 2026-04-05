'use client'

import { useCallback, useEffect, useState } from 'react'
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

const LANGUAGE_LABELS: Record<string, string> = {
  py: 'Python',
  python: 'Python',
  js: 'JavaScript',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  jsx: 'JSX',
  tsx: 'TSX',
  sh: 'Shell',
  bash: 'Bash',
  shell: 'Shell',
  yml: 'YAML',
  yaml: 'YAML',
  md: 'Markdown',
  markdown: 'Markdown',
  cpp: 'C++',
  dockerfile: 'Dockerfile',
}

function getLabel(lang: string): string {
  return LANGUAGE_LABELS[lang] ?? lang.toUpperCase()
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [html, setHtml] = useState('')
  const [copied, setCopied] = useState(false)

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
      defaultColor: false,
    }).then((result) => {
      if (!cancelled) setHtml(result)
    })

    return () => {
      cancelled = true
    }
  }, [code, lang])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [code])

  return (
    <div className="code-block-wrapper group">
      <div className="code-block-header">
        <span className="code-block-lang">{getLabel(language)}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="code-block-copy"
          aria-label="Copy code"
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          )}
          <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className="shiki-fallback">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
