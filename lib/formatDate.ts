export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-SG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function estimateReadTime(wordCount?: number): number {
  return Math.max(1, Math.round((wordCount ?? 0) / 200))
}
