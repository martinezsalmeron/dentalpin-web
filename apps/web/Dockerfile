#syntax=docker/dockerfile:1.7

# ─────────────────────────────────────────────────────────────
# Dentalpin web — Astro (Node standalone) multi-stage Dockerfile
# Build context MUST be the monorepo root (to resolve workspaces).
# ─────────────────────────────────────────────────────────────

FROM node:22-alpine AS deps
RUN corepack enable && apk add --no-cache libc6-compat
WORKDIR /repo

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/
COPY apps/docs/package.json apps/docs/
COPY packages/tokens/package.json packages/tokens/
COPY packages/ui/package.json packages/ui/

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ---------- build
FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /repo

COPY --from=deps /repo/node_modules ./node_modules
COPY --from=deps /repo/apps/web/node_modules ./apps/web/node_modules
COPY . .

RUN pnpm --filter @dentalpin/web build

# Flatten the app + its production deps into /out so the runtime stage
# doesn't need to understand pnpm's symlinked store.
RUN pnpm --filter @dentalpin/web --prod deploy /out

# ---------- runtime
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321

COPY --from=build --chown=node:node /out/dist ./dist
COPY --from=build --chown=node:node /out/package.json ./
COPY --from=build --chown=node:node /out/node_modules ./node_modules

USER node
EXPOSE 4321
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:4321/ >/dev/null 2>&1 || exit 1

CMD ["node", "./dist/server/entry.mjs"]
