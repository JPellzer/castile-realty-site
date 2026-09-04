# Castile Realty Group Website

A modern real estate website for Castile Realty Group, specializing in California-to-Idaho relocations and Treasure Valley property sales.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Routing**: Wouter (client-side)
- **Server**: Express (minimal SPA fallback server)

## Local Development

### Prerequisites

- Node.js 24+ (or use corepack/npx to run pnpm)
- pnpm (or use `npx pnpm` / `corepack enable`)

### Install Dependencies

```bash
pnpm install --frozen-lockfile
# or
npx pnpm install --frozen-lockfile
```

### Run Development Server

```bash
pnpm dev
# or
npx pnpm dev
```

Site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
# or
npx pnpm build
```

Output is placed in `dist/` directory with:
- `dist/public/` — static assets (HTML, CSS, JS, images)
- `dist/index.js` — Express server for SPA fallback

### Run Production Build Locally

```bash
pnpm start
# or
npx pnpm start
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_GOOGLE_MAPS_API_KEY` — Google Maps API key (optional, map will show placeholder if not set)
- `VITE_ANALYTICS_ENDPOINT` — Analytics endpoint (optional)
- `VITE_ANALYTICS_WEBSITE_ID` — Analytics site ID (optional)

All variables are **build-time only** — they get baked into the compiled JS during `pnpm build`.

## Deployment

### Render (Recommended)

This repo includes `render.yaml` for one-click deployment as a **static site** (FREE tier).

1. Connect your GitHub repo to Render
2. Render auto-detects `render.yaml` and configures the service
3. Set environment variables in Render dashboard (optional)
4. Deploy

**Build command**: `corepack enable && pnpm install --frozen-lockfile && pnpm build`  
**Publish directory**: `./dist/public`

### Alternative: Web Service Deployment

If you need the Express server for some reason (not required for this site):

- **Build**: `corepack enable && pnpm install --frozen-lockfile && pnpm build`
- **Start**: `node dist/index.js`
- **Port**: Reads `PORT` env var, defaults to 3000

## Project Structure

```
castile-realty-site/
├── client/               # Frontend source
│   ├── public/          # Static assets (copied to dist/public/)
│   │   └── manus-storage/  # Images, PDFs (27 files, ~50MB)
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   └── contexts/    # React contexts
│   └── index.html       # HTML template
├── server/              # Express server source
│   └── index.ts         # SPA fallback server
├── shared/              # Shared constants
├── dist/                # Build output (gitignored)
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies & scripts
└── render.yaml          # Render deployment config
```

## Assets

All images and PDFs are included in `client/public/manus-storage/` and served at `/manus-storage/...` paths. No external CDN dependencies for site assets.

External images (Unsplash) are loaded directly from Unsplash CDN and are not bundled.

## License

MIT
