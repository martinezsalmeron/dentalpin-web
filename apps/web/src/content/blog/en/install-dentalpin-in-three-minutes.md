---
title: Install Dentalpin on your own server in three minutes
description: Until this week, installing Dentalpin meant cloning the repository and building two images. Not any more. Three files, three values, one command.
pubDate: 2026-07-28
tags: [self-hosted, docker, install]
---

Until this week, installing Dentalpin meant cloning the repository and building both images on your own server. Our own docs put that at thirty minutes, and that was the optimistic reading: the Nuxt build asks for 4 GB of memory and punishes any modest VPS.

That is over. Images are published on every release now, and your server only has to pull them.

## The three minutes

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# edit .env: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Point a domain at the machine, set `PUBLIC_URL=https://your-domain`, and the certificate is issued on first boot. Nothing to renew, no nginx to write.

If you would rather look around before committing, set `SEED_ON_STARTUP=1` and you start with a demo clinic: patients, schedule, budgets and invoices to poke at.

## Why Caddy sits in front

The two previous setups exposed the backend and the frontend on separate ports, leaving whoever installed it to work out the reverse proxy, the TLS certificate and the CORS origin list on their own. Three chances to get it wrong before seeing a single screen.

Now one Caddy container serves everything from a single origin: `/api/*` goes to the backend, everything else to the interface. The browser never talks to two places, so CORS stops being a thing you can misconfigure. And Caddy asks Let's Encrypt for the certificate without being reminded.

## One image for every installation

This is the part we are happiest about, because it cost no new code at all.

The frontend image is built with a default API URL. Normally that would mean building one image per deployment — exactly what we were trying to avoid. It does not: Nuxt reads that URL through `runtimeConfig`, so `NUXT_PUBLIC_API_BASE_URL` overrides it when the container starts. What got compiled in is only the fallback.

One image, any domain. We checked before publishing: the payload the app serves carries your installation's URL, not the one baked in at build time.

## Upgrading

```bash
# in .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Migrations apply themselves before the API accepts traffic. Pin the version rather than leaving `latest`, so an upgrade never arrives as a surprise when you restart for an unrelated reason.

And take a backup first. [Here is how](https://github.com/martinezsalmeron/dentalpin/discussions/112) — two Docker volumes, one with the database and one with uploaded files. Both, not just the first.

## What is missing

Images are `amd64`, which is what any VPS you can rent today runs. If you need `arm64`, [open an issue](https://github.com/martinezsalmeron/dentalpin/issues) and we will add it — we would rather build it when someone actually needs it than burn CI minutes on a guess.

Installed Dentalpin and something did not go the way this post describes? Say so in [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Right now, the install working first time is the thing we care about most.
