export function safeExternalUrl(url?: string): string {
  if (!url) {
    return '#'
  }

  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return parsedUrl.toString()
    }
  } catch {
    return '#'
  }

  return '#'
}
