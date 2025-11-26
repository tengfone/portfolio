import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from 'next-seo';
import SEO from "../constants/next-seo.config"
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import SkipToContent from '../components/SkipToContent';
import StructuredData from '../components/StructuredData';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SkipToContent />
      <DefaultSeo
        {...SEO}
      />
      <StructuredData />
      <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
        <Navbar />
        <ScrollProgress />
        <AnimatePresence
          // exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Toaster />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp