import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from "../constants/user";

export default function Navbar(): React.ReactElement {
  const router = useRouter();
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const links: { name: string; href: string }[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Experiences',
      href: '/experiences',
    },
    {
      name: 'Blog',
      href: '/blog',
    }
  ]

  const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
      return href === currentPathname
    }
    return currentPathname.startsWith(href)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme button until mounted
  const renderThemeChanger = () => {
    if (!mounted) return null;

    return (
      <button
        type="button"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-100"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
        >
          {theme === "dark" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-brand-dark/85">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label={`${userData.name}, home`} className="rounded-sm">
            <div className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <svg className="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.77 340.66">
                <g id="a" />
                <g id="b">
                  <g id="c">
                    <g>
                      <polygon points="127.09 .25 99.46 85.28 27.88 .25 127.09 .25" fill="#10b981" />
                      <polygon points="27.88 .25 99.46 85.28 .25 85.28 27.88 .25" fill="#065f46" />
                    </g>
                    <g>
                      <polygon points="127.1 .25 226.31 .25 198.68 85.28 127.1 .25" fill="#34d399" />
                      <polygon points="127.1 .25 198.68 85.28 99.47 85.28 127.1 .25" fill="#34d399" />
                    </g>
                    <g>
                      <polygon points="325.52 .25 297.89 85.29 226.31 .25 325.52 .25" fill="#10b981" />
                      <polygon points="226.31 .25 297.89 85.29 198.68 85.29 226.31 .25" fill="#065f46" />
                    </g><g><polygon points="198.68 85.29 171.05 170.33 99.46 85.29 198.68 85.29" fill="#10b981" />
                      <polygon points="99.46 85.29 171.05 170.33 71.83 170.33 99.46 85.29" fill="#34d399" /></g><g>
                      <polygon points="171.05 170.33 143.42 255.37 71.83 170.33 171.05 170.33" fill="#34d399" />
                      <polygon points="71.83 170.33 143.42 255.37 44.2 255.37 71.83 170.33" fill="#065f46" /></g>
                    <g><polygon points="143.42 255.37 115.79 340.41 44.2 255.37 143.42 255.37" fill="#10b981" />
                      <polygon points="44.2 255.37 115.79 340.41 16.57 340.41 44.2 255.37" fill="#34d399" /></g>
                    <g><polygon points="270.25 170.33 242.62 255.37 171.04 170.33 270.25 170.33" fill="#34d399" />
                      <polygon points="171.04 170.33 242.62 255.37 143.41 255.37 171.04 170.33" fill="#065f46" /></g>
                  </g></g>
              </svg>
              <span className="hidden whitespace-nowrap text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:inline">{userData.name}</span>
            </div>
          </Link>

          <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-2">
            {links.map(({ name, href }) => {
              const active = isActiveLink(href, router.pathname)
              return (
                <Link
                  href={href}
                  key={name}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-md px-2 py-2 text-sm font-medium transition-colors duration-200 sm:px-3 ${active
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                    }`}
                >
                  {name}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-[13px] h-0.5 bg-brand-accent sm:inset-x-3" />
                  )}
                </Link>
              )
            })}
            {renderThemeChanger()}
          </nav>
        </div>
      </div>
    </header>
  );
}
