# Capturas pendientes (los placeholders desaparecen solos al existir el PNG)

Deja los archivos en `apps/web/public/screenshots/`. En cuanto existan, el
componente `ScreenshotPlaceholder.astro` los renderiza automáticamente.

Resolución mínima 1440×900, PNG, Chrome tema claro:

- [ ] `modules-manager.png` — gestor de módulos (install/uninstall).
- [ ] `api-docs.png` — OpenAPI auto-generada.
- [ ] `verifactu-dashboard.png` — pantalla Veri*Factu.
- [ ] `whatsapp-conversation.png` — conversación WhatsApp desde la ficha.
- [ ] `gst-invoice.png` — factura con desglose GST (clínica demo india, `--lang en --country in`).
- [ ] `recalls.png` — lista mensual de recitas.
- [ ] `migration-import.png` — importador de migración.

Hechas: home, dental-chart, schedule-week/day/canban, patients, patient-timeline,
treatment-plan, budgets, invoices, reports, ai-copilot, periodontogram.

---

# Backlog — Fase 2

Trabajo fuera del alcance de la v1. Cuando el sitio esté vivo en producción y
se haya validado el flujo básico (demo → lead → email), abordar en este orden.

## Contenido

- [ ] Casos de estudio / testimonios reales de clínicas.
- [ ] Pricing page con toggle mensual/anual y tabla comparativa de planes.
- [ ] Integración CMS (Directus self-host en Coolify) cuando marketing no-dev escriba.

## Marketing tech

- [ ] OG images dinámicas por página (`astro-og-canvas`).
- [ ] A/B testing variantes hero (GrowthBook self-host o Posthog).
- [ ] Plausible self-hosted en Coolify + evento conversión form.
- [ ] Schema.org adicional: FAQPage, BreadcrumbList, Product con pricing.

## Performance / infra

- [ ] Lighthouse CI como gate obligatorio en PR (bloquea < 95 en perf/SEO/a11y).
- [ ] Image CDN (Cloudflare Images o `@astrojs/image` con Sharp).
- [ ] HTTP/3 en Traefik Coolify.
- [ ] Logs estructurados JSON en `/api/contact` → Loki/Grafana Coolify.

## Docs

- [ ] Búsqueda Pagefind (viene con Starlight, activar).
- [ ] Versionado docs (v1, v2) cuando el producto tenga breaking changes.
- [ ] Diagramas Mermaid en guías arquitectura.
- [ ] Ejemplos API OpenAPI renderizados con el plugin Starlight OpenAPI.

## Seguridad

- [ ] CSP estricta con nonces (requiere middleware Astro).
- [ ] Cookie banner GDPR (si se añade analytics no-anónimos).
- [ ] Sentry release tracking + source maps upload en CI.
- [ ] Rate limit persistente (Redis) en lugar de LRU in-memory.

## DX

- [ ] Changesets para versionar `packages/ui` y `packages/tokens`.
- [ ] Storybook para `packages/ui`.
- [ ] Visual regression tests (Chromatic o Playwright screenshots).
