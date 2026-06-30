# My Personal Portfolio

Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Quick Start

### Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to view the site locally.

Requires Node.js 20+ ([nvm](https://github.com/nvm-sh/nvm) recommended).

## Available Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build static export
npm run lint         # Run Biome linter
npm run type-check   # Check TypeScript
npm run format       # Format code
npm test             # Run test suite
npm test:watch       # Run tests in watch mode
npm test:coverage    # Generate coverage report
```

## Project Structure

- **src/components** - React components
- **src/data** - Content data (about, contact, projects, writing)
- **app** - Next.js app routes and layouts
- **app/styles** - CSS variables and component styles
- **content/writing** - Markdown blog posts
- **public** - Static assets

## Customization

Update your personal information in these files:

- `src/data/about.ts` - About page content
- `src/data/contact.ts` - Social links and contact info
- `src/data/projects.ts` - Portfolio projects
- `src/data/resume.ts` - Resume content
- `src/data/stats.ts` - Statistics
- `package.json` - Site metadata and homepage URL

## Deployment

The site is configured to deploy to GitHub Pages. Automatic deployment runs on push to `main`.

## License

[MIT](./LICENSE)
