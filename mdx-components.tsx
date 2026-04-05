import React, { ComponentPropsWithoutRef } from 'react'
import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'

const Mermaid = dynamic(() => import('./components/Mermaid'), { ssr: false })
const CodeBlock = dynamic(() => import('./components/CodeBlock'), {
  ssr: false,
})

type PreProps = ComponentPropsWithoutRef<'pre'>
type CodeProps = ComponentPropsWithoutRef<'code'>

function extractLanguage(className?: string): string | null {
  if (!className) return null
  const match = className.match(/language-(\w+)/)
  return match ? match[1] : null
}

function MdxPre({ children, ...props }: PreProps) {
  const child = React.Children.only(children) as React.ReactElement<CodeProps>
  if (!child?.props) return <pre {...props}>{children}</pre>

  const className =
    typeof child.props.className === 'string' ? child.props.className : ''
  const code = String(child.props.children ?? '').trim()
  const language = extractLanguage(className)

  if (language === 'mermaid') {
    return <Mermaid chart={code} />
  }

  if (language) {
    return <CodeBlock code={code} language={language} />
  }

  return <pre {...props}>{children}</pre>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: MdxPre,
    ...components,
  }
}
