/*
 * Central module catalog — single source of truth for mega-menu,
 * bento grid, feature pages and sitemap.
 * Content synthesized from /Users/ramonmartinez/Documents/dentalpin-landing-content.md §7.
 */

export type ModuleDomain = 'clinical' | 'operations' | 'platform';
export type ModuleIcon =
  | 'tooth'
  | 'calendar'
  | 'shield'
  | 'card'
  | 'chart'
  | 'plug'
  | 'sparkles'
  | 'globe';

export interface ModuleEntry {
  slug: string;
  domain: ModuleDomain;
  icon: ModuleIcon;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  features: { es: string; en: string }[];
  screenshot: string;
  extraScreenshots?: { file: string; caption: { es: string; en: string } }[];
  status?: 'stable' | 'roadmap';
}

export const MODULES: ModuleEntry[] = [
  {
    slug: 'odontograma',
    domain: 'clinical',
    icon: 'tooth',
    title: { es: 'Odontograma', en: 'Odontogram' },
    tagline: {
      es: 'Un dental chart interactivo con dentición real, superficies y grupos.',
      en: 'An interactive dental chart with real dentition, surfaces and groups.',
    },
    description: {
      es: 'El corazón clínico de Dentalpin. SVG interactivo con notación FDI, seguimiento por superficie, grupos multi-diente, puentes, ortodoncia y dentición decidua. Pensado para usarse en consulta, no para impresionar en una demo.',
      en: 'The clinical heart of Dentalpin. Interactive SVG with FDI numbering, per-surface tracking, multi-tooth groups, bridges, orthodontics and deciduous dentition. Built to live inside a real chair-side workflow.',
    },
    features: [
      {
        es: 'Notación FDI adulta (11–48) y decidua (51–85).',
        en: 'FDI numbering — adult (11–48) and deciduous (51–85).',
      },
      {
        es: 'Estado por superficie: mesial, distal, oclusal/incisal, vestibular, lingual/palatina.',
        en: 'Per-surface state: mesial, distal, occlusal/incisal, vestibular, lingual/palatine.',
      },
      {
        es: 'Tratamientos existentes vs. planificados.',
        en: 'Existing vs. planned treatments.',
      },
      {
        es: 'Grupos multi-diente: puentes, férulas, múltiples carillas o coronas.',
        en: 'Multi-tooth groups: bridges, splints, multiple veneers or crowns.',
      },
      {
        es: 'Edición de puentes: roles, voladizos, conectores, iconos variantes.',
        en: 'Bridge editing: roles, cantilevers, midline connectors, variant icons.',
      },
      {
        es: 'Iconos SVG realistas (tornillo implante, cámara pulpar lateral).',
        en: 'Realistic SVG icons (implant screw, pulp chamber lateral view).',
      },
      {
        es: 'Vistas lateral y oclusal armonizadas.',
        en: 'Lateral and occlusal views, harmonised design.',
      },
      {
        es: 'Historial de cambios por diente: quién, qué y cuándo.',
        en: 'Change history per tooth — who changed what, when.',
      },
      {
        es: 'Integrado con catálogo de tratamientos y planes.',
        en: 'Integrated with treatment catalog and plans.',
      },
    ],
    screenshot: 'dental-chart.png',
  },
  {
    slug: 'pacientes',
    domain: 'clinical',
    icon: 'shield',
    title: { es: 'Pacientes', en: 'Patients' },
    tagline: {
      es: 'Una ficha completa, con perfil médico, alergias y alertas clínicas.',
      en: 'One complete record — medical profile, allergies and clinical alerts.',
    },
    description: {
      es: 'Ficha demográfica y clínica unificada. Las alertas aparecen donde hacen falta, no escondidas en una pestaña. Tutor legal para menores, datos de aseguradora y consentimiento RGPD, todo donde lo esperas.',
      en: 'A unified demographic and clinical record. Alerts surface where they need to — not hidden in some tab. Legal guardian for minors, insurance details and GDPR consent, all exactly where you expect them.',
    },
    features: [
      {
        es: 'Perfil demográfico completo: nombre, DNI, fecha nacimiento, contacto, dirección.',
        en: 'Full demographic profile — name, national ID, DOB, contact, address.',
      },
      {
        es: 'Perfil médico con alergias, medicaciones, condiciones crónicas y alertas clínicas.',
        en: 'Extended medical profile — allergies, medications, chronic conditions, clinical alerts.',
      },
      { es: 'Tutor legal para pacientes menores.', en: 'Legal guardian field for minor patients.' },
      {
        es: 'Información de aseguradora (proveedor, póliza, cobertura).',
        en: 'Insurance information (provider, policy number, coverage).',
      },
      { es: 'Registro de consentimiento RGPD.', en: 'GDPR consent tracking.' },
      { es: 'Notas internas libres.', en: 'Free-form internal notes.' },
      {
        es: 'Búsqueda con autocompletado por nombre o teléfono.',
        en: 'Search with autocomplete by name or phone.',
      },
      {
        es: 'Ciclo de vida: activo, inactivo, archivado (soft-delete).',
        en: 'Lifecycle: active, inactive, archived (soft-delete).',
      },
    ],
    screenshot: 'patients.png',
  },
  {
    slug: 'historial-clinico',
    domain: 'clinical',
    icon: 'shield',
    title: { es: 'Historial clínico', en: 'Clinical history' },
    tagline: {
      es: 'Datos clínicos normalizados y un timeline que se escribe solo.',
      en: 'Structured clinical data and a timeline that writes itself.',
    },
    description: {
      es: 'Datos clínicos separados del registro administrativo. El timeline se alimenta de eventos: cada cita, tratamiento, presupuesto o documento aparece automáticamente, en orden, sin que nadie tenga que acordarse de añadirlo.',
      en: 'Clinical data sits apart from the administrative record. The timeline is event-driven: every appointment, treatment, quote and document shows up automatically, in order, without anyone needing to remember to log it.',
    },
    features: [
      {
        es: 'Alergias, medicaciones y diagnósticos estructurados.',
        en: 'Structured allergies, medications and diagnoses.',
      },
      {
        es: 'Flags y alertas clínicas visibles durante la cita.',
        en: 'Clinical flags and alerts visible during appointments.',
      },
      {
        es: 'Timeline cronológico event-driven, sin tocar código existente.',
        en: 'Event-driven chronological timeline, without touching existing code.',
      },
      {
        es: 'Documentos del paciente: radiografías, consentimientos, fotos.',
        en: 'Patient documents: X-rays, consents, photos.',
      },
      {
        es: 'Thumbnails de imágenes en la lista de documentos.',
        en: 'Image thumbnails in the document list.',
      },
    ],
    screenshot: 'patient-timeline.png',
  },
  {
    slug: 'plan-tratamiento',
    domain: 'clinical',
    icon: 'sparkles',
    title: { es: 'Plan de tratamiento', en: 'Treatment plan' },
    tagline: {
      es: 'Una sola vista que une diagnóstico, presupuesto y agenda.',
      en: 'One view that ties diagnosis, budget and schedule together.',
    },
    description: {
      es: 'Fuente única de verdad para "qué necesita este paciente, qué ya hicimos y qué queda". Conectado con presupuestos y agenda. Cuando envías el presupuesto, los precios se congelan automáticamente. Sin sorpresas.',
      en: 'A single source of truth for "what does this patient need, what is done, what is next". Wired into budgets and the calendar. The moment you send the budget, prices lock automatically — no surprises six weeks later.',
    },
    features: [
      {
        es: 'Vista única diagnósticos + tratamientos propuestos + ejecutados.',
        en: 'Single view — diagnoses + proposed + executed treatments.',
      },
      {
        es: 'Enlace bidireccional con presupuestos y citas.',
        en: 'Two-way linkage with budgets and appointments.',
      },
      {
        es: 'Lock-on-budget: congela precios al enviar.',
        en: 'Lock-on-budget: prices freeze on send.',
      },
      {
        es: 'Unlock + cancelación con traza completa.',
        en: 'Unlock + cancel flows with full audit trail.',
      },
      { es: 'Archivo de planes finalizados.', en: 'Archive for finished plans.' },
    ],
    screenshot: 'treatment-plan.png',
  },
  {
    slug: 'agenda',
    domain: 'operations',
    icon: 'calendar',
    title: { es: 'Agenda', en: 'Calendar' },
    tagline: {
      es: 'Una agenda drag-and-drop que entiende gabinetes, profesionales y solapes.',
      en: 'A drag-and-drop calendar that understands cabinets, professionals and overlaps.',
    },
    description: {
      es: 'Vista semanal y diaria. Mueves, redimensionas y creas citas arrastrando. Detecta solapes antes de que aparezcan. Kanban por estado para los días caóticos. Conectada al catálogo: la duración y el color salen solos.',
      en: 'Weekly and daily views. Drag to move, drag to resize, drag on an empty slot to create. Conflicts surface before they bite. Status kanban for the chaotic days. Wired into the catalog so duration and colour come for free.',
    },
    features: [
      {
        es: 'Vista semanal por gabinete o profesional.',
        en: 'Weekly view per cabinet or professional.',
      },
      {
        es: 'Vista diaria por profesional para detalle fino.',
        en: 'Daily view per professional for fine detail.',
      },
      {
        es: 'Drag & drop para mover y redimensionar.',
        en: 'Drag & drop to move and resize.',
      },
      {
        es: 'Drag-to-create en huecos vacíos con duración precisa.',
        en: 'Drag-to-create on empty slots with precise duration.',
      },
      { es: 'Detección de conflictos y solapes.', en: 'Conflict and overlap detection.' },
      {
        es: 'Ciclo de estados: programada → confirmada → en curso → completada.',
        en: 'Status lifecycle: scheduled → confirmed → in progress → completed.',
      },
      {
        es: 'Vista kanban para gestionar citas por estado.',
        en: 'Kanban view to manage appointments by status.',
      },
      {
        es: 'Asignación de gabinete diferida (reservas flexibles).',
        en: 'Deferred cabinet assignment (flexible bookings).',
      },
      {
        es: 'Strip de profesionales en vivo.',
        en: 'Live professionals strip.',
      },
      {
        es: 'Integración con catálogo: duración y color auto.',
        en: 'Treatment-catalog integration: auto duration and colour.',
      },
      { es: 'Zona horaria consciente.', en: 'Timezone-aware.' },
    ],
    screenshot: 'schedule-week.png',
    extraScreenshots: [
      {
        file: 'schedule-day.png',
        caption: { es: 'Vista diaria por profesional', en: 'Daily view per professional' },
      },
      {
        file: 'schedule-canban.png',
        caption: { es: 'Vista kanban por estado', en: 'Kanban view by status' },
      },
    ],
  },
  {
    slug: 'presupuestos',
    domain: 'operations',
    icon: 'card',
    title: { es: 'Presupuestos', en: 'Budgets' },
    tagline: {
      es: 'Construye línea a línea, recoge firma y exporta un PDF con tu marca.',
      en: 'Build line by line, capture the signature, export a PDF with your branding.',
    },
    description: {
      es: 'Planes de tratamiento que el paciente entiende, aprueba y paga. Workflow claro: borrador → pendiente → aprobado o rechazado. Firma digital, PDF con tu marca y bloqueo de precios al enviar. Sin discusiones tres meses después.',
      en: 'Treatment plans the patient understands, approves and pays for. Clear workflow: draft → pending → approved or rejected. Digital signature, branded PDF and price lock on send. So nobody re-negotiates three months later.',
    },
    features: [
      {
        es: 'Builder línea a línea desde el catálogo de tratamientos.',
        en: 'Line-by-line builder drawing from the treatment catalog.',
      },
      {
        es: 'Descuento, cantidad e IVA por línea.',
        en: 'Per-line discount, quantity and tax.',
      },
      { es: 'Totales auto-calculados.', en: 'Auto-calculated totals.' },
      {
        es: 'Workflow: draft → pending → approved / rejected.',
        en: 'Workflow: draft → pending → approved / rejected.',
      },
      { es: 'Captura de firma del paciente.', en: 'Patient signature capture.' },
      { es: 'PDF con la marca de la clínica.', en: 'PDF generation with clinic branding.' },
      {
        es: 'Lock-on-budget: congela el precio al enviar.',
        en: 'Lock-on-budget: freezes pricing on send.',
      },
      {
        es: 'Unlock + cancel con traza de auditoría.',
        en: 'Unlock + cancel with audit trail.',
      },
      { es: 'Archivo de presupuestos antiguos.', en: 'Archive of old budgets.' },
    ],
    screenshot: 'budgets.png',
  },
  {
    slug: 'facturacion',
    domain: 'operations',
    icon: 'card',
    title: { es: 'Facturación', en: 'Invoicing' },
    tagline: {
      es: 'Series auditadas, pagos parciales y PDF con tu marca.',
      en: 'Audited number series, partial payments and branded PDFs.',
    },
    description: {
      es: 'Facturación con numeración automática configurable, varios métodos de pago, parciales y edición auditada. Generas desde un presupuesto o desde cero. La traza queda; tú no tienes que acordarte de nada.',
      en: 'Invoicing with configurable automatic numbering, multiple payment methods, partial payments and audited edits. Generate from a budget or stand-alone. The audit trail is automatic — you don\u2019t have to remember a thing.',
    },
    features: [
      {
        es: 'Genera facturas desde presupuesto o directamente.',
        en: 'Generate invoices from a budget or stand-alone.',
      },
      {
        es: 'Numeración automática con series configurables.',
        en: 'Automatic numbering with configurable series.',
      },
      {
        es: 'Gestión de series con historial completo.',
        en: 'Invoice series management with full history.',
      },
      {
        es: 'Items elegidos del catálogo — sin texto libre.',
        en: 'Items from the treatment catalog — no free-text drift.',
      },
      {
        es: 'Pagos parciales y saldo pendiente.',
        en: 'Partial payments and balance tracking.',
      },
      {
        es: 'Métodos: efectivo, tarjeta, transferencia, seguro.',
        en: 'Methods: cash, card, transfer, insurance.',
      },
      { es: 'Edición con auditoría.', en: 'Invoice editing with audit.' },
      { es: 'PDF con la marca de la clínica.', en: 'PDF with clinic branding.' },
      {
        es: 'Resumen de facturación por paciente.',
        en: 'Per-patient billing summary.',
      },
    ],
    screenshot: 'invoices.png',
  },
  {
    slug: 'reportes',
    domain: 'operations',
    icon: 'chart',
    title: { es: 'Reportes', en: 'Reports' },
    tagline: {
      es: 'KPIs de facturación, presupuestos y ocupación. Sin paneles que mareen.',
      en: 'Billing, budget and occupancy KPIs. No dashboards that scream at you.',
    },
    description: {
      es: 'Reportes claros sobre tu práctica, filtrables por rango, profesional y gabinete. Sin tableros imposibles, sin gráficos que parecen una atracción de feria. Lo que necesitas para tomar decisiones, en un vistazo.',
      en: 'Clean reports across your practice, filterable by date range, professional and cabinet. No dashboard overwhelm, no charts that look like a fairground ride. The numbers you need for decisions, at a glance.',
    },
    features: [
      {
        es: 'Facturación: ingresos, pendiente, cobrado.',
        en: 'Billing reports — revenue, outstanding, paid.',
      },
      {
        es: 'Presupuestos: pipeline, conversión, valor por estado.',
        en: 'Budget reports — pipeline, conversion, value by status.',
      },
      {
        es: 'Agenda: ocupación, cancelaciones, no-shows, métricas por profesional.',
        en: 'Scheduling reports — occupancy, cancellations, no-shows, per-professional metrics.',
      },
      {
        es: 'Filtros por rango, profesional y gabinete.',
        en: 'Filters by date range, professional and cabinet.',
      },
    ],
    screenshot: 'reports.png',
  },
  {
    slug: 'modulos',
    domain: 'platform',
    icon: 'plug',
    title: { es: 'Sistema de módulos', en: 'Module system' },
    tagline: {
      es: 'Una arquitectura de plugins real: instalas lo que usas, quitas lo que no.',
      en: 'A real plugin architecture: install what you use, drop what you don’t.',
    },
    description: {
      es: 'Plugin architecture en backend y en frontend, no de boquilla. Cada módulo trae su manifest, sus migraciones Alembic, sus seeds YAML, su navegación y se suscribe al event bus interno. Activas, desactivas y actualizas sin tocar el resto del sistema.',
      en: 'Plugin architecture across backend and frontend — not just on a slide. Each module ships its own manifest, Alembic migration branch, YAML seeds, navigation and an event bus subscription. Install, uninstall and upgrade without touching the rest of the system.',
    },
    features: [
      {
        es: 'Módulos declarativos con manifest validado.',
        en: 'Declarative modules with a validated manifest.',
      },
      {
        es: 'Ciclo install / uninstall / upgrade con restart.',
        en: 'Install / uninstall / upgrade lifecycle with restart.',
      },
      { es: 'Seeds YAML por módulo.', en: 'YAML seeds per module.' },
      {
        es: 'Migraciones Alembic con rama propia.',
        en: 'Alembic migrations with their own branch.',
      },
      {
        es: 'Nuxt layers auto-descubiertos en frontend.',
        en: 'Nuxt layers auto-discovered on the frontend.',
      },
      {
        es: 'Sidebar backend-driven, se reconstruye al activar módulos.',
        en: 'Backend-driven sidebar, rebuilt when modules activate.',
      },
      {
        es: 'Slot system frontend: módulos inyectan pestañas y vistas.',
        en: 'Frontend slot system: modules inject tabs and views.',
      },
      {
        es: 'Event bus: patient.created, appointment.completed…',
        en: 'Event bus: patient.created, appointment.completed…',
      },
      {
        es: 'Tests E2E de instalación para cada módulo.',
        en: 'E2E install tests for every module.',
      },
    ],
    screenshot: 'modules-manager.png',
  },
  {
    slug: 'api',
    domain: 'platform',
    icon: 'plug',
    title: { es: 'API REST completa', en: 'Full REST API' },
    tagline: {
      es: 'Cada funcionalidad expone un endpoint. OpenAPI generado automáticamente.',
      en: 'Every feature exposes an endpoint. OpenAPI generated automatically.',
    },
    description: {
      es: 'Automatiza lo que duela: importar pacientes, sincronizar con laboratorios, integrar con WhatsApp. Todo Dentalpin se pilota desde la API pública. Es la misma API que usa la app web — sin atajos privados, sin endpoints secretos.',
      en: 'Automate whatever is painful: import patients, sync with labs, integrate with WhatsApp. Every Dentalpin feature is reachable from the public API. It’s the same API the web app uses — no private shortcuts, no secret endpoints.',
    },
    features: [
      {
        es: 'FastAPI + Pydantic v2 con docs OpenAPI auto-generadas.',
        en: 'FastAPI + Pydantic v2 with auto-generated OpenAPI docs.',
      },
      {
        es: 'JWT con access + refresh tokens y RBAC.',
        en: 'JWT with access + refresh tokens and RBAC.',
      },
      {
        es: 'Permisos wildcard (`*`, `module.*`) para roles limpios.',
        en: 'Wildcard permissions (`*`, `module.*`) for clean roles.',
      },
      {
        es: 'Event bus expuesto para automatizaciones externas.',
        en: 'Event bus exposed for external automations.',
      },
      {
        es: 'Misma API que usa la app web — sin shortcuts privados.',
        en: 'Same API the web app uses — no private shortcuts.',
      },
    ],
    screenshot: 'api-docs.png',
  },
  {
    slug: 'ai-ready',
    domain: 'platform',
    icon: 'sparkles',
    title: { es: 'AI-Ready', en: 'AI-Ready' },
    tagline: {
      es: 'Tool registry y cola de aprobación humana, para automatizar con cabeza.',
      en: 'A tool registry and a human approval queue — automation with a brain.',
    },
    description: {
      es: 'La plataforma viene preparada para trabajar con agentes. Una registry expone acciones internas de forma segura; una cola de aprobación deja que un humano revise lo que el agente propone antes de ejecutarlo. IA seria, sin teatro.',
      en: 'The platform is prepared to work with agents. A registry exposes internal actions safely; an approval queue lets a human review what an agent proposes before it runs. Serious AI, no theatre.',
    },
    features: [
      {
        es: 'Tool registry: expone acciones internas a agentes de forma segura.',
        en: 'Tool registry: exposes internal actions to agents safely.',
      },
      {
        es: 'Approval queue: humanos revisan antes de ejecutar.',
        en: 'Approval queue: humans review before execution.',
      },
      {
        es: 'Base para agenda inteligente, follow-ups automáticos y clinical decision support.',
        en: 'Foundation for intelligent scheduling, automated follow-ups and clinical decision support.',
      },
      {
        es: 'Sin teatro de IA: se envía cuando se envía.',
        en: 'No AI theatre — we ship when we ship.',
      },
    ],
    screenshot: 'ai-approval-queue.png',
    status: 'roadmap',
  },
];

export function modulesByDomain(domain: ModuleDomain): ModuleEntry[] {
  return MODULES.filter((m) => m.domain === domain);
}

export function moduleBySlug(slug: string): ModuleEntry | undefined {
  return MODULES.find((m) => m.slug === slug);
}
