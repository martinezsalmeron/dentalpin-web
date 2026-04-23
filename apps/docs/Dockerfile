#syntax=docker/dockerfile:1.7

# ─────────────────────────────────────────────────────────────
# Dentalpin docs — Starlight (static) served by Nginx Alpine.
# Build context MUST be the monorepo root.
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

FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /repo
COPY --from=deps /repo/node_modules ./node_modules
COPY --from=deps /repo/apps/docs/node_modules ./apps/docs/node_modules
COPY . .
RUN pnpm --filter @dentalpin/docs build

FROM nginx:1.27-alpine AS runtime
COPY apps/docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/docs/dist /usr/share/nginx/html

# Let Nginx start as a non-root user (nginx image ships a `nginx` user).
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx \
  && sed -i 's/user  nginx;/# user nginx;/' /etc/nginx/nginx.conf \
  && mkdir -p /var/run/nginx \
  && chown nginx:nginx /var/run/nginx

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
