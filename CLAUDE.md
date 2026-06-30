# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `personal-site/` directory (where `package.json` lives):

```bash
npm run dev           # Dev server on http://localhost:3000 (Turbopack)
npm run build         # Build static export to `out/`
npm run lint          # Biome linter check
npm run type-check    # TypeScript type check (no emit)
npm run format        # Biome (JS/TS) + Prettier (MD/CSS)
npm test              # Vitest single run
npm test:watch        # Vitest in watch mode
npm test:coverage     # Coverage report (v8 provider)
npm run analyze       # Bundle analyzer (sets ANALYZE=true)
```

To run a single test file: `npx vitest run src/components/__tests__/Template/Hero.test.tsx`

## Architecture

**Next.js App Router with static export** — `next.config.ts` sets `output: 'export'`, so this is a fully static site (no server-side rendering at runtime). Images are unoptimized; `trailingSlash: true`.

**Path alias**: `@/*` resolves to `./src/*`.

**Content layers**:

- Blog posts: `content/writing/*.md` — parsed at build time by `src/lib/posts.ts` using `gray-matter`. Frontmatter fields: `title`, `date`, `description`, `draft?`. Posts with `draft: true` are hidden in production but visible in dev.
- Site data: All structured content (resume, projects, stats, about, contact) lives as TypeScript files in `src/data/`. No CMS or external data fetching.

**Site-wide constants** — `SITE_URL`, `AUTHOR_NAME`, `TWITTER_HANDLE` — are defined in `src/lib/utils.ts`. Update these when personalizing.

**Navigation routes** are defined in `src/data/routes.ts` and consumed by `src/components/Template/Navigation.tsx`.

**Theming**: Dark/light mode via `data-theme` attribute on `<html>`, persisted in `localStorage`. A `beforeInteractive` script in `app/layout.tsx` sets the initial theme to prevent flash.

**Styling**: Tailwind CSS 4 (`@tailwindcss/postcss`). CSS variables and component styles live in `app/styles/`. Biome formats JS/TS; Prettier handles MD and CSS files.

## Linting & Formatting Rules

Biome enforces:

- Single quotes in JS/TS
- 2-space indent
- No CommonJS (`import`/`export` only)
- No `explicit any`, no unused imports/variables
- Organize imports automatically (`assist.actions.source.organizeImports`)

CSS formatting is disabled in Biome (handled by Prettier). Config overrides exist for `*.config.ts` and `vitest.setup.tsx` (relaxed rules).

## Personalization Files

When personalizing the portfolio, update:

- `src/lib/utils.ts` — `SITE_URL`, `AUTHOR_NAME`, `TWITTER_HANDLE`
- `src/data/about.ts` — About page (exported as `aboutMarkdown` string)
- `src/data/contact.ts` — Social links and contact info
- `src/data/projects.ts` — Portfolio projects
- `src/data/resume/` — `work.ts`, `degrees.ts`, `courses.ts`, `skills.ts`
- `src/data/stats/` — Professional statistics
- `package.json` — `homepage` URL and `repository.url`
- `public/images/` — Profile photos (`me-light.jpg`, `me-dark.jpg`)

## Testing

Tests use Vitest + jsdom + `@testing-library/react`. Test files live in `__tests__/` subdirectories co-located with the code they test. Coverage is collected from `src/**` and `app/**`, excluding test files themselves.
