# Cloudflare Deployment with OpenNext

## Overview

Deploying a Next.js app to Cloudflare Workers via OpenNext. This doc captures the setup, common pitfalls, and the working configuration.

---

## Project Structure

```text
repo/
├── apps/                  ← Next.js project (deployment root)
│   ├── src/
│   ├── wrangler.jsonc     ← Cloudflare Worker config
│   ├── open-next.config.ts ← OpenNext adapter config
│   ├── package.json
│   └── .open-next/        ← Generated at build time
│       ├── worker.js      ← The Cloudflare Worker entrypoint
│       └── assets/        ← Static assets
├── docs/
└── PRODUCT.md
```

---

## Required Files

### `apps/wrangler.jsonc`

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "uwidev",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-09-13",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "observability": {
    "enabled": true
  }
}
```

### `apps/open-next.config.ts`

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

### `apps/package.json` (scripts section)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
  }
}
```

### Install the adapter

```bash
npm install @opennextjs/cloudflare
```

---

## Cloudflare Dashboard Settings

| Setting | Value |
|---------|-------|
| Root directory | `/apps` |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |

**Do not use** `npx wrangler deploy` for this setup. The `opennextjs-cloudflare deploy` command handles the Worker deployment correctly.

---

## The Problem We Hit

### Error

```text
Service binding 'WORKER_SELF_REFERENCE' references Worker 'apps'
which was not found.
```

### Root Cause

When Wrangler doesn't find an explicit config, it auto-detects the project and tries to configure it during deployment:

```text
Detected Project Settings:
- Worker Name: uwidev
- Framework: Next.js
- Output Directory: .next

Configuring project for Next.js with OpenNext
```

This auto-configuration generates a `WORKER_SELF_REFERENCE` service binding pointing to a Worker named `"apps"` (the folder name). But no Worker named `"apps"` exists on the Cloudflare account — the Worker is named `"uwidev"`.

```text
Worker: uwidev
        ↓
WORKER_SELF_REFERENCE
        ↓
    Worker "apps"  ← does not exist
        ↓
    ❌ Deployment fails
```

### Why It Happened

1. No `wrangler.jsonc` existed before the first deploy
2. Wrangler auto-configured the project during deployment
3. Auto-config generated a bad self-reference binding
4. The binding referenced Worker name `"apps"` (folder name) instead of `"uwidev"` (actual Worker name)

### The Fix

Create an explicit `wrangler.jsonc` **before** deploying. This prevents Wrangler from auto-configuring and generating bad bindings.

The config must specify:
- `"name": "uwidev"` — the actual Worker name on Cloudflare
- `"main": ".open-next/worker.js"` — the OpenNext-generated entrypoint
- `"assets"` — pointing to `.open-next/assets`
- No `"services"` section — no self-reference binding needed

---

## Deployment Flow

```bash
cd apps

# 1. Build Next.js
npm run build

# 2. Build OpenNext worker + deploy to Cloudflare
npm run deploy
```

Or as a single command:

```bash
npm run deploy
```

This runs: `opennextjs-cloudflare build && opennextjs-cloudflare deploy`

The flow:
1. `next build` — Next.js builds the app
2. `opennextjs-cloudflare build` — OpenNext bundles the Worker + assets into `.open-next/`
3. `opennextjs-cloudflare deploy` — Deploys the Worker to Cloudflare

---

## Key Concepts

### OpenNext

OpenNext is the adapter that converts Next.js output into Cloudflare Workers-compatible format. It generates:
- `.open-next/worker.js` — the Worker entrypoint
- `.open-next/assets/` — static files served by Cloudflare's asset binding

### wrangler.jsonc

This is the Cloudflare Worker configuration file. It tells Wrangler:
- What the Worker is named
- Where the entrypoint is
- What compatibility flags to enable
- Where static assets live

### Why not `npx wrangler deploy`?

Wrangler's auto-detection can misconfigure OpenNext projects. Using `opennextjs-cloudflare deploy` ensures the correct deployment flow is followed.

---

## Checklist for New Cloudflare + OpenNext Projects

- [ ] `@opennextjs/cloudflare` installed
- [ ] `open-next.config.ts` exists with `defineCloudflareConfig()`
- [ ] `wrangler.jsonc` exists with correct Worker name and no `services` section
- [ ] `package.json` has `preview` and `deploy` scripts
- [ ] Cloudflare dashboard root directory points to the Next.js project folder
- [ ] Cloudflare dashboard deploy command uses `npm run deploy`
- [ ] First deploy creates the Worker on Cloudflare with the correct name
- [ ] Subsequent deploys use the explicit config, not auto-detection

---

## Troubleshooting

### "Worker not found" errors

Check `wrangler.jsonc` for a `services` section with `WORKER_SELF_REFERENCE`. Delete it. The Worker name in `"name"` must match what's on Cloudflare.

### Static assets not loading

Verify `"assets.directory"` in `wrangler.jsonc` points to `.open-next/assets` and that the build generated the assets folder.

### Build succeeds but deploy fails

Make sure you're running `opennextjs-cloudflare deploy`, not `npx wrangler deploy`. The OpenNext deploy command handles the Worker creation and asset upload correctly.

### Worker name mismatch

The `"name"` field in `wrangler.jsonc` must match the Worker name on your Cloudflare account. Check at `dash.cloudflare.com` → Workers & Pages.
