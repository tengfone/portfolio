import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Self-hosted through next/font in pages/_app.tsx.
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Neutral greys so text sits on the near-black background without a blue cast.
        gray: colors.neutral,
        brand: {
          dark: '#0a0a0a',
          gray: '#161616',
          // The one green. `accent` is for fills and for text on dark;
          // `ink` is the same hue darkened for text on white (AA contrast).
          accent: '#10b981',
          ink: '#047857',
          muted: '#8a8a8a',
        },
      },
    },
  },
  plugins: [typography],
}

export default config
