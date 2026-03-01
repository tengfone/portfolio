# tengfone's Portfolio

Personal portfolio and blog site for Teng Fone — built with Next.js, Tailwind CSS, and MDX.

## Tech Stack

- **Framework** — [Next.js](https://nextjs.org/) (Pages Router)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- **Blog** — MDX via `@next/mdx` + `@mdx-js/react` with `@tailwindcss/typography`
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Theming** — [next-themes](https://github.com/pacocoursey/next-themes)
- **SEO** — [next-seo](https://github.com/garmeeh/next-seo)
- **Analytics** — [@vercel/analytics](https://vercel.com/analytics)
- **Icons** — [@heroicons/react](https://heroicons.com/)
- **Deployment** — [Vercel](https://vercel.com/)

## Project Structure

```
├── components/         # Shared UI components (Navbar, Footer, BlogPostLayout, etc.)
├── constants/
│   └── user.ts         # Single source of truth: projects, experience, blog metadata
├── pages/
│   ├── blog/           # Blog listing + MDX posts
│   ├── experiences.tsx
│   ├── projects.tsx
│   └── index.tsx       # Home / hero
├── public/             # Static assets
└── styles/             # Global CSS
```

## Pages

- **/** — Hero / landing
- **/projects** — Project showcase
- **/experiences** — Work history and education
- **/blog** — Blog listing and MDX posts

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Blog Post

1. Create `pages/blog/your-slug.mdx` — export a `meta` object and default-export `BlogPostLayout`.
2. Add a matching entry to the `blogData` array in `constants/user.ts`.

```mdx
import BlogPostLayout from '../../components/BlogPostLayout'

export const meta = {
  title: 'Your Post Title',
  date: 'YYYY-MM-DD',
  summary: 'Short description.',
  tags: ['tag'],
}

export default ({ children }) => <BlogPostLayout meta={meta}>{children}</BlogPostLayout>

Content goes here...
```

## Adding a Project or Experience

Edit `constants/user.ts` — `userData.projects` and `userData.experience` are the single source of truth for both pages.

## Deployment

Deployed automatically to Vercel on push to `main`.
