# matter_project

This repository is an early scaffold for a small Matter.js playground served with Express.

## Current project layout

- `/src/index.js` — client-side Matter.js demo setup (engine, renderer, bodies, runner).
- `/app.js` — Express server that serves built files from `/dist`.
- `/webpack.config.js` — Webpack config that bundles `/src/index.js` and generates `dist/index.html`.
- `/dist` — generated build output (created by `npm run build`).

## Run locally

### 1) Install dependencies

```bash
npm install
```

### 2) Build frontend assets

```bash
npm run build
```

### 3) Start the local server

```bash
node app.js
```

### 4) Open in browser

Visit: `http://localhost:3000`

## Notes

- This is a starter repository with basic scaffolding for future development.
- The current `npm test` script is a placeholder and does not run tests yet.
