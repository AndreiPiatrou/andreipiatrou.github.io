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
description: "A brief preview of your post that appears on the homepage"
tags: javascript
---

Your content here...
```

**Frontmatter fields:**
- `title` (required): The post title
- `date` (required): Publication date
- `description` (optional): Short preview text shown on the homepage
- `tags` (optional): Single tag or array of tags

## 🚢 Deployment

This site is deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `master` branch automatically triggers a build and deployment:
1. GitHub Actions runs `npm ci` and `npm run build`
2. The built site is deployed to GitHub Pages
3. Site is live at `https://andreipiatrou.github.io`

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. The workflow will automatically deploy on the next push to `master`

### Manual Deployment

You can also trigger a deployment manually:
- Go to Actions tab → Deploy to GitHub Pages → Run workflow

## 🎨 Theme

The site uses a custom minimalistic black theme with clean typography and responsive design.
