# Osvaro Website — Deployment & Handover Guide

This repository contains the official, high-converting B2B website for **Osvaro** (`osvaro.co.uk`), built with Next.js 14 App Router, Tailwind CSS, and a file-based Markdown/MDX blog architecture.

---

## 1. Local Development

### Prerequisites
- Node.js (v20+ or v22 LTS)
- npm or pnpm

### Running Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 2. Deploying to Vercel (osvaro.co.uk)

1. **Push to GitHub / GitLab / Bitbucket**:
   Commit the project repository and push it to your Git provider:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Osvaro website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import Project in Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select your Git repository.
   - Framework Preset: **Next.js** (auto-detected).
   - Root Directory: `./` (or `osvaro-website` if in a subdirectory).
   - Click **Deploy**.

3. **Connect Custom Domain (`osvaro.co.uk`)**:
   - In your Vercel Project Dashboard, navigate to **Settings > Domains**.
   - Add `osvaro.co.uk` and `www.osvaro.co.uk`.
   - Update your domain's DNS records at your registrar:
     - **A Record**: `@` points to `76.76.21.21`
     - **CNAME Record**: `www` points to `cname.vercel-dns.com`
   - Vercel will automatically provision an SSL certificate and redirect `www` to the root domain.

---

## 3. How to Publish Blog Articles (File-Based Architecture)

No database or external CMS is required. Simply commit a Markdown/MDX file to `content/blog/`:

### Step-by-Step:
1. Create a file named `your-article-slug.mdx` inside `content/blog/`.
2. Add the frontmatter block at the top:
```markdown
---
title: "Why High-Volume Immigration Firms Are Shifting to Operating Systems"
description: "How modern law firms reduce casework preparation time and stay audit-ready."
date: "2026-09-04"
author: "Osvaro Team"
category: "Legal Operations"
tags: ["UK Immigration", "Workflow Automation", "Compliance"]
---

Your markdown or MDX content here...

## Section Heading

Paragraph text goes here.
```
3. Commit and push:
```bash
git add content/blog/your-article-slug.mdx
git commit -m "Add new blog post: Your Article Title"
git push origin main
```
4. Vercel will automatically detect the commit, trigger a static rebuild, and publish your post live at `https://osvaro.co.uk/blog/your-article-slug`.
5. The `/blog` index, RSS feed (`/blog/rss.xml`), and `sitemap.xml` will update automatically.

---

## 4. Architecture & Key Features

- **Palette**: Warm Sand (`#F5F0E8`), Cream (`#FAF8F4`), Olive Accent (`#6B7F4E`), Charcoal (`#1A1A1A`).
- **Typography**: Instrument Serif (headings) + Inter (body & UI).
- **Product Walkthroughs**: Interactive macOS-styled window mockups with auto-sliding transitions for all 3 engines.
- **CTA**: Direct link to `mailto:surya@osvaro.co.uk` with *"Book a Workflow Diagnostic"*.
- **Pricing**: Transparent entry point clearly highlighted (*"Engagements start from £1k/month"*).
- **SEO & Performance**: Fully prerendered static pages (SSG), dynamic XML sitemap, RSS feed, JSON-LD structured data, and security headers (CSP, HSTS, X-Frame-Options).
