import fs from 'fs'
import path from 'path'

/**
 * Reads an MDX blog post file, strips non-content syntax, and returns the word count.
 * Used by each MDX page's getStaticProps to compute reading time.
 */
export function getPostWordCount(slug: string): number {
  const filePath = path.join(process.cwd(), 'pages', 'blog', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')

  const stripped = raw
    .replace(/^import\s.+$/gm, '')
    .replace(/export\s+const\s+meta\s*=\s*\{[\s\S]*?\}/m, '')
    .replace(/export\s+(?:default|function)\s+[^\n]+/g, '')
    .replace(/^#+\s/gm, '')
    .replace(/[*_`~>]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\{[^}]+\}/g, '')

  return stripped.trim().split(/\s+/).filter(Boolean).length
}

export function createBlogStaticProps(slug: string) {
  return function getStaticProps() {
    return { props: { wordCount: getPostWordCount(slug) } }
  }
}
