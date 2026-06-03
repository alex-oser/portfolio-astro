# alexoser.com

My personal portfolio + blogfolio, built with [Astro](https://astro.build). Migrated from Gatsby.

Content lives in three collections (`projects`, `snippets`, `blog`) authored in MDX. Interactive UI is built with React + MUI, mounted as Astro islands; code blocks are highlighted at build time with Shiki.

## Stack

- **Astro** — static site generation, content collections, image optimization
- **React + MUI** (islands) — header, homepage (About / Projects / Snippets), cards
- **MDX** — project/snippet/blog posts in `src/content/`
- **Shiki** (`night-owl`) — zero-JS syntax highlighting
- **@astrojs/rss** + **@astrojs/sitemap** — feed at `/rss.xml`, sitemap
- Deployed on **Netlify** (`netlify.toml`)

## Project structure

```text
├── public/                  # favicon, web manifest, static assets
├── src/
│   ├── assets/              # fonts (Raleway) + images (me, sadie, favicon)
│   ├── components/
│   │   ├── react/           # MUI/React islands (theme, Providers, Header, cards, About…)
│   │   ├── BaseHead.astro
│   │   └── FormattedDate.astro
│   ├── content/             # projects/, snippets/, blog/ — each post is <name>/index.mdx
│   ├── layouts/             # BaseLayout.astro, PostLayout.astro
│   ├── pages/               # index, projects/[...slug], snippets/[...slug], blog/*, 404, rss.xml.js
│   ├── consts.ts            # site metadata
│   └── content.config.ts    # collection schemas
├── astro.config.mjs         # integrations, Shiki theme, local fonts
└── netlify.toml
```

## Authoring content

Add a post by creating `src/content/<collection>/<name>/index.mdx` with frontmatter:

- **projects** — `title`, `status` (`live | in progress | idea | dead`), `caption`, optional `link`/`repo`, `date`
- **snippets** — `title`, `caption`, `date`
- **blog** — `title`, optional `caption`, `date`

Co-locate images next to the post and reference them with relative Markdown (`![alt](./img.png)`) — Astro optimizes them automatically. Use fenced code blocks (` ```js `) for syntax-highlighted code. Post URLs are derived from the title.

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Dev server at `localhost:4321`       |
| `npm run build`   | Build to `./dist/`                   |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check the project               |
