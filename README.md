# Engineer's Blog

A minimalistic blog built with [Astro](https://astro.build) and deployed to GitHub Pages.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

```bash
npm run build
```

The static site will be built to the `docs/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Writing Posts

Blog posts are Markdown files located in `src/content/blog/`. 

File naming convention: `YYYY-MM-DD-title-slug.md`

Example frontmatter:

```markdown
---
title: "Your Post Title"
date: 2024-01-01
categories: Technology
tags: javascript
---

Your content here...
```

## 🚢 Deployment

This site is configured to deploy to GitHub Pages. The build output is in the `docs/` folder.

1. Build the site: `npm run build`
2. Commit the `docs/` folder
3. Configure GitHub Pages to serve from the `docs/` folder in repository settings

## 🎨 Theme

The site uses a custom minimalistic black theme with clean typography and responsive design.
