# stavrossolutions.com

Source for my personal site and blog. SvelteKit (Svelte 5) + Skeleton + Tailwind, articles written in markdown (mdsvex). The whole site is prerendered to static HTML and hosted on Cloudflare Pages — pushing to `main` deploys automatically within a minute or two.

## Adding an article

Drop a new `.md` file in `src/routes/articles/`. The frontmatter is required — it's how the homepage finds, titles, and sorts the article:

```markdown
---
title: My New Article
date: '2026-07-03'
---

Article content here. Code blocks get syntax highlighting at build time.
```

## Local dev

```bash
npm install
npm run dev      # dev server
npm run build    # production build (prerenders every page)
npm run preview  # serve the production build locally
npm run check    # type check
```
