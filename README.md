# clement10601.github.io

Personal site built with [Astro](https://astro.build), served by GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Editing content

- Name, introduction, links and projects: `src/data/profile.ts`
- Blog posts: Markdown files in `src/content/blog/zh/` (Chinese, served at `/blog/`) and `src/content/blog/en/` (English, served at `/en/blog/`). Front matter needs `title` and `date`; `summary` is optional and `draft: true` hides a post. Give a translation the same file name in both folders and the language switch links them.

## Deploy

Every push to `master` builds and deploys via `.github/workflows/deploy.yml`. In the repository's Settings → Pages, "Build and deployment → Source" must be set to **GitHub Actions**.
