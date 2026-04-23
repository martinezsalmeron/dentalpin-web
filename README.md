# Dentalpin — Web comercial + Documentación

Monorepo pnpm que aloja el sitio público de marketing y el portal de documentación
de **Dentalpin**, el SaaS de gestión de clínica dental.

- `apps/web` — Astro (Node standalone). Marketing en `dentalpin.com`.
- `apps/docs` — Astro + Starlight (Nginx). Documentación en `docs.dentalpin.com`.
- `packages/tokens` — Variables CSS del sistema de diseño (fuente única de verdad).
- `packages/ui` — Componentes Astro compartidos entre ambas apps.

## Requisitos

- Node 22 LTS (`.nvmrc`).
- pnpm 9 (`corepack enable`).
- Docker + Docker Compose (opcional para producción local).

## Arranque local

```bash
pnpm install
pnpm dev:web    # http://localhost:4321
pnpm dev:docs   # http://localhost:4322
```

## Build producción

```bash
pnpm build
```

## Docker local

```bash
cp apps/web/.env.example apps/web/.env
docker compose up --build
# web  → http://localhost:4321
# docs → http://localhost:8080
```

## Despliegue

Cada app se despliega como un contenedor independiente en **Coolify** (Hetzner VPS):

| App | Dominio | Dockerfile | Runtime |
|-----|---------|------------|---------|
| `web` | `dentalpin.com` | `apps/web/Dockerfile` | Node 22 (Astro standalone) |
| `docs` | `docs.dentalpin.com` | `apps/docs/Dockerfile` | Nginx Alpine |

Cloudflare gestiona DNS y actúa como proxy (full-strict SSL).
Traefik de Coolify termina TLS y enruta al contenedor.

## Sistema de diseño

Tokens CSS idénticos a la app (`DESIGN.md` en el repo de producto).
`packages/tokens` se importa tanto desde `apps/web` como desde
`apps/docs` para garantizar coherencia visual entre marketing, docs y producto.

## i18n

Rutas con prefijo: `/es/` (default) y `/en/`.
- `apps/web`: i18n nativo Astro.
- `apps/docs`: i18n nativo Starlight.
