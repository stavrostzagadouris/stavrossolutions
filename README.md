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

## Changing the look

If you clone this for your own site, styling lives in a few places:

- **Colors / overall theme** — the site uses a [Skeleton](https://www.skeleton.dev/) preset theme. It's set in two places that must match: `data-theme="wintry"` on the `<body>` in `src/app.html`, and the theme preset list in `tailwind.config.ts`. Swap `wintry` for another preset (`modern`, `crimson`, `rocket`, ...) to recolor the whole site.
- **Page layout, header, footer** — `src/routes/+layout.svelte`. The top nav bar (site name, GitHub/LinkedIn links), the footer, and the centered content column (its width is the `max-width: 1000px` on the content div) are all here.
- **Homepage content** — `src/routes/+page.svelte` (intro text and the auto-generated article list).
- **Article pages** — `src/routes/articles/post.svelte` is the wrapper every article renders inside (title + date). Article typography comes from Tailwind's `prose` classes applied in the layout.
- **Global CSS tweaks** — `src/app.postcss` (e.g. the blockquote styling). Everything else is Tailwind utility classes inline in the components.
- **Code block colors** — the shiki `github-dark` theme in `svelte.config.js`.

## Local dev

```bash
npm install
npm run dev      # dev server
npm run build    # production build (prerenders every page)
npm run preview  # serve the production build locally
npm run check    # type check
```
