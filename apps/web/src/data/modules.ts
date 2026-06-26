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
  | 'globe'
  | 'whatsapp';

import type { Locale } from '~/i18n';

export interface ModuleEntry {
  slug: string;
  slugEn?: string;
  domain: ModuleDomain;
  icon: ModuleIcon;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  features: { es: string; en: string }[];
  screenshot: string;
  extraScreenshots?: { file: string; caption: { es: string; en: string } }[];
  status?: 'stable' | 'roadmap';
  /** ISO-3166 country code for country-locked modules (renders an "ES" badge etc). */
  country?: 'ES';
  /** Set to true for modules that ship a custom feature page instead of the generic body. */
  customPage?: boolean;
}

export const MODULES: ModuleEntry[] = [
  {
    slug: 'odontograma',
    slugEn: 'odontogram',
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
    slug: 'periodontograma',
    slugEn: 'periodontogram',
    domain: 'clinical',
    icon: 'chart',
    title: { es: 'Periodontograma', en: 'Periodontogram' },
    tagline: {
      es: 'Exploración periodontal SEPA, con histórico inmutable e índices al cerrar.',
      en: 'SEPA periodontal exam, with an immutable history and indices on close.',
    },
    description: {
      es: 'Una exploración periodontal completa que vive como sub-pestaña dentro del modo Diagnóstico, junto al odontograma. Cada sesión es un snapshot fechado e inmutable: capturas profundidad de sondaje, margen, sangrado, placa y supuración por sitio, y comparas la evolución del paciente con un slider de histórico. Los índices SEPA (BoP, PI, CAL medio, bolsas ≥5 mm) se computan al cerrar y quedan congelados en el snapshot. Módulo opcional, se instala desde Admin → Módulos.',
      en: 'A full periodontal exam that lives as a sub-tab inside Diagnosis, next to the odontogram. Each session is a dated, immutable snapshot: you capture probing depth, gingival margin, bleeding, plaque and suppuration per site, then compare the patient over time with a history slider. SEPA indices (BoP, PI, mean CAL, ≥5 mm pockets) are computed on close and frozen into the snapshot. Optional module, installed from Admin → Modules.',
    },
    features: [
      {
        es: 'Captura SEPA por diente y 6 sitios (MV, V, DV, ML, L, DL): sondaje, margen, sangrado, placa y supuración.',
        en: 'SEPA capture per tooth and 6 sites (MB, B, DB, ML, L, DL): probing, margin, bleeding, plaque and suppuration.',
      },
      {
        es: 'Movilidad Miller (0–3), furca vestibular y lingual/palatina, y anchura de encía queratinizada.',
        en: 'Miller mobility (0–3), buccal and lingual/palatine furcation, and keratinised gingiva width.',
      },
      {
        es: 'Pronóstico individual por diente: bueno, medio, dudoso o sin esperanza.',
        en: 'Per-tooth prognosis — good, fair, doubtful or hopeless.',
      },
      {
        es: 'Chart SEPA en 4 filas con heatmap y marcadores pastel.',
        en: 'SEPA chart in 4 rows with heatmap and pastel markers.',
      },
      {
        es: 'Edición tipo hoja de cálculo: navegas y editas cada celda inline.',
        en: 'Spreadsheet-style inline editing — navigate and edit any cell from the keyboard.',
      },
      {
        es: 'Autoguardado a 600 ms, con guard de cambios pendientes al cerrar la pestaña.',
        en: 'Autosave at 600 ms, with a beforeunload guard for pending changes.',
      },
      {
        es: 'Prerellenado de implantes y ausentes leyendo el odontograma del paciente.',
        en: 'Pre-fills implants and missing teeth from the patient odontogram.',
      },
      {
        es: 'Slider de histórico: cada nodo es un snapshot cerrado e inmutable.',
        en: 'History slider — every node is a closed, immutable snapshot.',
      },
      {
        es: 'Índices SEPA (BoP %, PI %, CAL medio, bolsas ≥5 mm) computados y congelados al cerrar.',
        en: 'SEPA indices (BoP %, PI %, mean CAL, ≥5 mm pockets) computed and frozen on close.',
      },
      {
        es: 'Render de fixture de implante en lugar de la raíz natural cuando el diente está implantado.',
        en: 'Implant fixture rendered in place of the natural root for implanted teeth.',
      },
      {
        es: 'Dark mode y layout pensado para tablet horizontal en sillón.',
        en: 'Dark mode and a layout tuned for landscape tablets chair-side.',
      },
    ],
    screenshot: 'periodontogram.png',
  },
  {
    slug: 'pacientes',
    slugEn: 'patients',
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
    slugEn: 'clinical-history',
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
    slugEn: 'treatment-plan',
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
    slugEn: 'calendar',
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
    slugEn: 'budgets',
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
    slugEn: 'invoicing',
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
    slug: 'verifactu',
    slugEn: 'verifactu',
    domain: 'operations',
    icon: 'shield',
    country: 'ES',
    customPage: true,
    title: { es: 'Verifactu', en: 'Verifactu' },
    tagline: {
      es: 'Cumple Veri*Factu sin tocar tu flujo de facturación. Solo para clínicas en España.',
      en: 'Comply with Spain\u2019s Veri*Factu without touching your invoicing flow. Spain only.',
    },
    description: {
      es: 'Módulo opcional pensado exclusivamente para clínicas en España. Firma cada factura, encadena registros con SHA-256, los envía a la AEAT por SOAP con tu certificado FNMT y embebe el QR tributario en el PDF. Cumple RD 1007/2023 y la Orden HAC/1177/2024 desde el primer día.',
      en: 'Optional module built exclusively for clinics operating in Spain. Signs every invoice, chains records with SHA-256, submits them to AEAT over SOAP with your FNMT certificate and embeds the tax QR in the PDF. RD 1007/2023 and Orden HAC/1177/2024 compliant from day one.',
    },
    features: [
      {
        es: 'Cadena SHA-256 firmada: cada factura enlaza con la anterior, libro fiscal append-only.',
        en: 'Signed SHA-256 chain: each invoice links to the previous one, append-only fiscal ledger.',
      },
      {
        es: 'Envío SOAP a AEAT con tu certificado FNMT vía mTLS.',
        en: 'SOAP submission to AEAT with your FNMT certificate over mTLS.',
      },
      {
        es: 'QR tributario embebido en el PDF (verificación pública en sede electrónica).',
        en: 'Tax QR embedded in the invoice PDF (public verification on AEAT\u2019s portal).',
      },
      {
        es: 'Worker periódico cada 60 s con reintentos y back-pressure según `TiempoEsperaEnvio`.',
        en: 'Periodic worker every 60 s with retries and back-pressure honouring `TiempoEsperaEnvio`.',
      },
      {
        es: 'Cola de subsanación con motivo de rechazo y reenvío `Subsanacion=S`.',
        en: 'Resubmission queue with rejection reason and `Subsanacion=S` retry.',
      },
      {
        es: 'Mapeo de IVA a clasificaciones AEAT (S1, E1\u2013E6, N1, N2) por clínica.',
        en: 'Per-clinic VAT mapping to AEAT classifications (S1, E1\u2013E6, N1, N2).',
      },
      {
        es: 'Asistente de productor SIF con declaración responsable firmada electrónicamente.',
        en: 'SIF producer wizard with electronically-signed declaración responsable.',
      },
      {
        es: 'Almacén cifrado del PFX y la contraseña con Fernet.',
        en: 'Encrypted PFX and password vault using Fernet.',
      },
      {
        es: 'Banner de caducidad del certificado: verde >60 d, ámbar 15\u201360 d, rojo <15 d.',
        en: 'Certificate expiry banner: green >60 d, amber 15\u201360 d, red <15 d.',
      },
      {
        es: 'Entornos prueba (preproducción AEAT) y real intercambiables sin redeploy.',
        en: 'Test (AEAT pre-production) and real environments switched live, no redeploy.',
      },
      {
        es: 'Soporte F1, F2, F3, R1\u2013R5 y anulaciones.',
        en: 'Support for F1, F2, F3, R1\u2013R5 invoices and anulaciones.',
      },
      {
        es: 'Retención legal a 4 a\u00f1os garantizada en el modelo de datos.',
        en: 'Four-year legal retention enforced in the data model.',
      },
    ],
    screenshot: 'verifactu-dashboard.png',
    status: 'stable',
  },
  {
    slug: 'reportes',
    slugEn: 'reports',
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
    slugEn: 'modules',
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
    slug: 'agente-ia',
    slugEn: 'ai-agent',
    domain: 'platform',
    icon: 'sparkles',
    title: { es: 'Agente de IA', en: 'AI agent' },
    tagline: {
      es: 'Habla con tu clínica. El agente busca, agenda y cobra ejecutando las mismas acciones que la interfaz.',
      en: 'Talk to your clinic. The agent searches, books and bills by running the same operations the UI does.',
    },
    description: {
      es: 'No es un chatbot pegado encima. Es un agente que planifica y ejecuta tareas de varios pasos llamando a las operaciones reales de Dentalpin: pacientes, agenda, recordatorios, presupuestos, pagos y reportes. Cada acción se vuelve a comprobar contra los permisos del usuario, así que el agente solo ve y hace lo que esa persona haría desde la interfaz, dentro de su clínica. Los datos del paciente se tokenizan antes de salir hacia el proveedor de IA, y cualquier acción que modifique datos se detiene a pedirte confirmación.',
      en: 'Not a chatbot bolted on top. It is an agent that plans and executes multi-step tasks by calling the real operations in Dentalpin: patients, schedule, recalls, budgets, payments and reports. Every action is re-checked against the user’s permissions, so the agent only sees and does what that person could through the UI, scoped to their clinic. Patient data is tokenized before it leaves for the AI provider, and any action that changes data pauses to ask for your confirmation.',
    },
    features: [
      {
        es: 'Hace, no solo responde: busca pacientes, agenda o reprograma citas, registra pagos y saca la facturación del mes, encadenando pasos hasta cerrar la tarea.',
        en: 'It does, not just answers: searches patients, books or reschedules appointments, records payments and pulls the month’s collections, chaining steps until the task is done.',
      },
      {
        es: 'Paridad RBAC: cada llamada se revalida contra los permisos del usuario en el punto de control de ejecución. Nunca hace más de lo que esa persona puede en la interfaz.',
        en: 'RBAC parity: every call is re-checked against the user’s permissions at the execution chokepoint. Never does more than that person could through the UI.',
      },
      {
        es: 'Redacción de PHI por defecto: nombres, teléfonos, emails e IDs de paciente se cambian por tokens deterministas antes de salir; el texto clínico libre se queda fuera de la nube.',
        en: 'PHI redaction on by default: patient names, phones, emails and IDs are swapped for deterministic tokens before they leave; free-text clinical data stays off the cloud path.',
      },
      {
        es: 'Las escrituras piden confirmación: agendar, cobrar o editar se pausa a mitad de conversación hasta tu visto bueno explícito.',
        en: 'Writes ask first: booking, billing or editing pauses mid-conversation until you explicitly confirm.',
      },
      {
        es: 'Playbooks guiados: resumen del día, preparar una visita, llenar un hueco, recalls pendientes o presupuestos sin respuesta, en un toque.',
        en: 'Guided playbooks: daily briefing, prepare a visit, fill a gap, due recalls or unanswered budgets, in one tap.',
      },
      {
        es: 'Briefings proactivos: resumen matinal determinista por email, sin LLM y sin PHI fuera, con la agenda del día, recalls y presupuestos abiertos.',
        en: 'Proactive briefings: a deterministic morning digest by email, no LLM and no PHI off-site, with the day’s schedule, due recalls and open budgets.',
      },
      {
        es: 'Cmd/Ctrl+K en cualquier pantalla: abre el agente con el contexto del paciente o la cita que tienes delante, sin repetir nada.',
        en: 'Cmd/Ctrl+K on any screen: opens the agent with the patient or appointment in front of you as context, nothing to restate.',
      },
      {
        es: 'Modular por diseño: consume las herramientas que publica cada módulo en un registry compartido, así que crece solo según instalas módulos.',
        en: 'Modular by design: it consumes the tools each module publishes through a shared registry, so it grows automatically as you install modules.',
      },
      {
        es: 'Agnóstico de proveedor: abstracción de proveedor LLM, con modelo y presupuesto de tokens por clínica configurables en cada despliegue.',
        en: 'Vendor-agnostic: an LLM-provider abstraction, with model and per-clinic token budgets configurable per deployment.',
      },
      {
        es: 'Todo queda auditado: cada herramienta que invoca el agente se registra en el log de auditoría.',
        en: 'Everything is audited: every tool the agent invokes lands in the audit log.',
      },
    ],
    screenshot: 'ai-copilot.png',
    status: 'stable',
  },
  {
    slug: 'whatsapp',
    slugEn: 'whatsapp',
    domain: 'operations',
    icon: 'whatsapp',
    customPage: true,
    title: { es: 'WhatsApp', en: 'WhatsApp' },
    tagline: {
      es: 'Recordatorios y recalls por WhatsApp, y el paciente te responde en el mismo hilo.',
      en: 'Reminders and recalls over WhatsApp, with the patient replying in the same thread.',
    },
    description: {
      es: 'Módulo de comunidad, opcional y desinstalable, que añade WhatsApp como canal de notificaciones encima del gateway de Dentalpin. Envías recordatorios de cita, confirmaciones y recalls con plantillas aprobadas, y cuando el paciente contesta, su respuesta entra en un hilo por paciente dentro de la app. El núcleo de notificaciones es agnóstico de canal: WhatsApp llega como un adaptador conectado a Kapso que puedes quitar sin tocar el resto del sistema.',
      en: 'An optional, removable community module that adds WhatsApp as a notifications channel on top of Dentalpin’s gateway. You send appointment reminders, confirmations and recalls with approved templates, and when the patient replies, their message lands in a per-patient thread inside the app. The notifications core is channel-agnostic: WhatsApp arrives as a Kapso-backed adapter you can remove without touching the rest of the system.',
    },
    features: [
      {
        es: 'Conversaciones bidireccionales: cada paciente tiene un hilo con mensajes salientes y entrantes en orden.',
        en: 'Two-way conversations: every patient gets a thread with outbound and inbound messages in order.',
      },
      {
        es: 'Plantillas HSM aprobadas, sincronizadas automáticamente desde Kapso y mapeadas por tipo de aviso.',
        en: 'Approved HSM templates, auto-synced from Kapso and mapped per notification type.',
      },
      {
        es: 'Ventana de sesión de 24 h: dentro de ella respondes en texto libre; fuera, solo plantillas, como exige WhatsApp.',
        en: '24-hour session window: free-form replies inside it, templates only outside, exactly as WhatsApp requires.',
      },
      {
        es: 'Webhook público firmado con HMAC-SHA256 por clínica, con manejo idempotente de entrantes y estados de entrega.',
        en: 'Public webhook signed with per-clinic HMAC-SHA256, idempotent handling of inbound messages and delivery states.',
      },
      {
        es: 'Hilo de conversación en la ficha del paciente, sin saltar a otra herramienta.',
        en: 'Conversation thread on the patient record, without jumping to another tool.',
      },
      {
        es: 'Resolución de paciente por número de teléfono al recibir un mensaje entrante.',
        en: 'Patient resolution by phone number when an inbound message arrives.',
      },
      {
        es: 'Gating por consentimiento: solo escribe a quien aceptó recibir mensajes.',
        en: 'Consent gating: only messages patients who opted in.',
      },
      {
        es: 'Secretos cifrados con Fernet y ajustes por clínica (token, plantillas, firma de webhook).',
        en: 'Fernet-encrypted secrets and per-clinic settings (token, templates, webhook signature).',
      },
      {
        es: 'Arquitectura de canal-adaptador: el adaptador se registra al instalar y se elimina al desinstalar, sin residuos.',
        en: 'Channel-adapter architecture: the adapter registers on install and is removed on uninstall, no residue.',
      },
      {
        es: 'Permisos dedicados (`whatsapp_kapso.settings.*`) y UI bilingüe ES/EN.',
        en: 'Dedicated permissions (`whatsapp_kapso.settings.*`) and a bilingual ES/EN UI.',
      },
      {
        es: 'Envío de prueba desde ajustes para validar la conexión antes de usarlo en real.',
        en: 'Test send from settings to validate the connection before going live.',
      },
    ],
    screenshot: 'whatsapp-conversation.png',
    status: 'stable',
  },
];

export function modulesByDomain(domain: ModuleDomain): ModuleEntry[] {
  return MODULES.filter((m) => m.domain === domain);
}

export function moduleBySlug(slug: string): ModuleEntry | undefined {
  return MODULES.find((m) => m.slug === slug || m.slugEn === slug);
}

export function moduleSlug(mod: ModuleEntry, locale: Locale): string {
  return locale === 'en' ? mod.slugEn ?? mod.slug : mod.slug;
}
