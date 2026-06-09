# CSV to Pivot Table — Developer Guide

A browser-based tool that lets users upload a CSV file, preview the raw data, and build Excel-style pivot tables by dragging fields into row, column, and value slots.

Forked from [Sk-Siva/CSV-to-Pivot](https://github.com/Sk-Siva/CSV-to-Pivot).

**End-user guides:** [English](USER_GUIDE.md) · [Deutsch](USER_GUIDE_DE.md)

---

## Framework & Libraries

| Concern | Tool |
|---|---|
| UI framework | [React 19](https://react.dev/) |
| Build toolchain | [Vite 8](https://vite.dev/) |
| PWA / offline | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (Workbox) |
| CSV parsing | [PapaParse 5](https://www.papaparse.com/) |

The project is plain JavaScript (`.jsx`) — no TypeScript.

---

## Prerequisites

| Tool | Version |
|---|---|
| Node.js | 18 LTS or later |
| npm | 9 or later (ships with Node 18) |

No global CLI tools beyond Node/npm are required.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server with HMR
npm run dev
```

Because `base` is set to `/csv-to-pivot/` in `vite.config.js`, the dev server serves the app at `http://localhost:5173/csv-to-pivot/`.

The dev server proxies nothing — the app is fully client-side with no backend.

---

## Build

```bash
npm run build
```

Produces an optimized, minified static bundle in `dist/`. The output is a standard single-page app: one `index.html` plus hashed JS/CSS assets. Any static hosting service can serve it.

Preview the production build locally before deploying:

```bash
npm run preview
```

---

## Project Structure

```
index.html                    # Vite HTML entry point
vite.config.js                # Vite configuration
public/                       # Static assets (copied as-is to dist/)
  favicon.ico
  manifest.json
src/
  main.jsx                    # App entry point
  App.jsx                     # Root component, state wiring
  pivotLogic.js               # Pure pivot aggregation logic
  components/
    FileUploader.jsx          # CSV file input + PapaParse integration
    RawCSVTable.jsx           # Preview of uploaded data
    PivotConfigurator.jsx     # Field-picker UI (rows / columns / values)
    PivotTable.jsx            # Renders the computed pivot table
  styles/
    styles.css
```

---

## PWA / Offline

The app is a Progressive Web App. On first load it precaches the entire app shell (JS, CSS, HTML) via a Workbox service worker. Subsequent visits — including in a network without internet access — are served entirely from cache.

The service worker is configured with `autoUpdate`: when a new version is deployed, it installs silently in the background and activates on the next page load.

The manifest and service worker are generated automatically by `vite-plugin-pwa` during `npm run build`. Nothing extra is needed at runtime.

---

## Deployment

### Base path

The app is built for deployment at `/csv-to-pivot/`. This is controlled by the `base` option in `vite.config.js`:

```js
base: '/csv-to-pivot/',
```

Change this value (and the PWA `start_url` directly below it) if the app should be served from a different path or from the domain root (`/`).

### Uploading

Upload the contents of `dist/` to any static host (S3 + CloudFront, nginx, Apache, etc.).

### SPA routing / `.htaccess`

Because the app is a single-page application the web server must serve `index.html` for every request under the base path. For **Apache**, add a `.htaccess` file inside the deployment folder:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

Once the PWA service worker is active in the browser, it handles navigation from cache, so this rule only matters for the very first load of any deep-linked URL.
