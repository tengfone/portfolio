import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import SEO from '../constants/next-seo.config'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from '../components/Navbar'
import SkipToContent from '../components/SkipToContent'
import StructuredData from '../components/StructuredData'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'

// Self-hosted at build time, so no third-party font request and no CSP change.
const sans = Geist({ subsets: ['latin'], display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], display: 'swap' })

function MyApp({ Component, pageProps, router }: AppProps) {
  const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <SkipToContent />
      <DefaultSeo {...SEO} />
      <StructuredData />
      <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <Toaster />
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MotionConfig>
      </ThemeProvider>
      {analyticsEnabled && <Analytics />}
    </>
  )
}

export default MyApp
