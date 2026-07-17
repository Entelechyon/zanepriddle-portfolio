# zanepriddle.com

Personal website for Zane Priddle, based in Melbourne, Australia.

The site presents a short introduction, a current area of investigation and direct contact details. Its public positioning covers practical digital projects across software, publishing systems and commercial operations without presenting services or availability.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- npm

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

## Project structure

```text
app/
  layout.tsx                 Root metadata and shared layout
  page.tsx                   Homepage
  StructuredData.tsx         Person JSON-LD
  robots.ts                  Crawler rules
  sitemap.ts                 Public sitemap
```

## Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

The canonical production URL is [https://zanepriddle.com](https://zanepriddle.com).
