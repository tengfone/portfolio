import React, { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          theme: 'neutral',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        })

        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg: rendered } = await mermaid.render(id, chart.trim())
        if (!cancelled) setSvg(rendered)
      } catch (err) {
        if (!cancelled) setError(String(err))
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  if (error) {
    return (
      <pre className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
        Mermaid render error: {error}
      </pre>
    )
  }

  if (!svg) {
    return (
      <div className="flex items-center justify-center rounded-lg bg-gray-50 py-10 dark:bg-gray-800/50">
        <span className="text-sm text-gray-400">Loading diagram…</span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="my-6 overflow-x-auto rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
