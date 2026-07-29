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

type Localised = Record<Locale, string>;

export interface ModuleEntry {
  slug: string;
  slugEn?: string;
  slugFr?: string;
  domain: ModuleDomain;
  icon: ModuleIcon;
  title: Localised;
  tagline: Localised;
  description: Localised;
  features: Localised[];
  screenshot: string;
  extraScreenshots?: { file: string; caption: Localised }[];
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
    slugFr: 'odontogramme',
    domain: 'clinical',
    icon: 'tooth',
    title: { es: 'Odontograma', en: 'Odontogram', fr: 'Odontogramme' },
    tagline: {
      es: 'Un dental chart interactivo con dentición real, superficies y grupos.',
      en: 'An interactive dental chart with real dentition, surfaces and groups.',
      fr: 'Un schéma dentaire interactif avec denture réelle, faces et groupes.',
    },
    description: {
      es: 'El corazón clínico de Dentalpin. SVG interactivo con notación FDI, seguimiento por superficie, grupos multi-diente, puentes, ortodoncia y dentición decidua. Pensado para usarse en consulta, no para impresionar en una demo.',
      en: 'The clinical heart of Dentalpin. Interactive SVG with FDI numbering, per-surface tracking, multi-tooth groups, bridges, orthodontics and deciduous dentition. Built to live inside a real chair-side workflow.',
      fr: 'Le cœur clinique de Dentalpin. SVG interactif avec notation FDI, suivi face par face, groupes pluridentaires, bridges, orthodontie et denture temporaire. Conçu pour servir au fauteuil, pas pour impressionner en démo.',
    },
    features: [
      {
        es: 'Notación FDI adulta (11–48) y decidua (51–85).',
        en: 'FDI numbering — adult (11–48) and deciduous (51–85).',
        fr: 'Notation FDI permanente (11–48) et temporaire (51–85).',
      },
      {
        es: 'Estado por superficie: mesial, distal, oclusal/incisal, vestibular, lingual/palatina.',
        en: 'Per-surface state: mesial, distal, occlusal/incisal, vestibular, lingual/palatine.',
        fr: 'État par face : mésiale, distale, occlusale/incisale, vestibulaire, linguale/palatine.',
      },
      {
        es: 'Tratamientos existentes vs. planificados.',
        en: 'Existing vs. planned treatments.',
        fr: 'Soins existants et soins planifiés, côte à côte.',
      },
      {
        es: 'Grupos multi-diente: puentes, férulas, múltiples carillas o coronas.',
        en: 'Multi-tooth groups: bridges, splints, multiple veneers or crowns.',
        fr: 'Groupes pluridentaires : bridges, contentions, séries de facettes ou de couronnes.',
      },
      {
        es: 'Edición de puentes: roles, voladizos, conectores, iconos variantes.',
        en: 'Bridge editing: roles, cantilevers, midline connectors, variant icons.',
        fr: 'Édition des bridges : rôles, cantilevers, connexions, variantes d’icônes.',
      },
      {
        es: 'Iconos SVG realistas (tornillo implante, cámara pulpar lateral).',
        en: 'Realistic SVG icons (implant screw, pulp chamber lateral view).',
        fr: 'Icônes SVG réalistes (vis d’implant, chambre pulpaire en coupe).',
      },
      {
        es: 'Vistas lateral y oclusal armonizadas.',
        en: 'Lateral and occlusal views, harmonised design.',
        fr: 'Vues latérale et occlusale au même langage graphique.',
      },
      {
        es: 'Historial de cambios por diente: quién, qué y cuándo.',
        en: 'Change history per tooth — who changed what, when.',
        fr: 'Historique des modifications dent par dent : qui, quoi, quand.',
      },
      {
        es: 'Integrado con catálogo de tratamientos y planes.',
        en: 'Integrated with treatment catalog and plans.',
        fr: 'Relié au catalogue d’actes et aux plans de traitement.',
      },
    ],
    screenshot: 'dental-chart.png',
  },
  {
    slug: 'periodontograma',
    slugEn: 'periodontogram',
    slugFr: 'parodontogramme',
    domain: 'clinical',
    icon: 'chart',
    title: { es: 'Periodontograma', en: 'Periodontogram', fr: 'Parodontogramme' },
    tagline: {
      es: 'Exploración periodontal SEPA, con histórico inmutable e índices al cerrar.',
      en: 'SEPA periodontal exam, with an immutable history and indices on close.',
      fr: 'Bilan parodontal complet, historique inaltérable et indices calculés à la clôture.',
    },
    description: {
      es: 'Una exploración periodontal completa que vive como sub-pestaña dentro del modo Diagnóstico, junto al odontograma. Cada sesión es un snapshot fechado e inmutable: capturas profundidad de sondaje, margen, sangrado, placa y supuración por sitio, y comparas la evolución del paciente con un slider de histórico. Los índices SEPA (BoP, PI, CAL medio, bolsas ≥5 mm) se computan al cerrar y quedan congelados en el snapshot. Módulo opcional, se instala desde Admin → Módulos.',
      en: 'A full periodontal exam that lives as a sub-tab inside Diagnosis, next to the odontogram. Each session is a dated, immutable snapshot: you capture probing depth, gingival margin, bleeding, plaque and suppuration per site, then compare the patient over time with a history slider. SEPA indices (BoP, PI, mean CAL, ≥5 mm pockets) are computed on close and frozen into the snapshot. Optional module, installed from Admin → Modules.',
      fr: 'Un bilan parodontal complet, en sous-onglet du mode Diagnostic, juste à côté de l’odontogramme. Chaque séance est un instantané daté et inaltérable : vous relevez profondeur de sondage, niveau gingival, saignement, plaque et suppuration site par site, puis vous comparez l’évolution du patient avec un curseur d’historique. Les indices (saignement au sondage, indice de plaque, NAC moyen, poches ≥ 5 mm) sont calculés à la clôture et figés dans l’instantané. Module optionnel, installable depuis Admin → Modules.',
    },
    features: [
      {
        es: 'Captura SEPA por diente y 6 sitios (MV, V, DV, ML, L, DL): sondaje, margen, sangrado, placa y supuración.',
        en: 'SEPA capture per tooth and 6 sites (MB, B, DB, ML, L, DL): probing, margin, bleeding, plaque and suppuration.',
        fr: 'Relevé sur 6 sites par dent (MV, V, DV, ML, L, DL) : sondage, niveau gingival, saignement, plaque et suppuration.',
      },
      {
        es: 'Movilidad Miller (0–3), furca vestibular y lingual/palatina, y anchura de encía queratinizada.',
        en: 'Miller mobility (0–3), buccal and lingual/palatine furcation, and keratinised gingiva width.',
        fr: 'Mobilité selon Miller (0–3), atteinte de furcation vestibulaire et linguale/palatine, hauteur de gencive kératinisée.',
      },
      {
        es: 'Pronóstico individual por diente: bueno, medio, dudoso o sin esperanza.',
        en: 'Per-tooth prognosis — good, fair, doubtful or hopeless.',
        fr: 'Pronostic dent par dent : bon, moyen, douteux ou sans espoir.',
      },
      {
        es: 'Chart SEPA en 4 filas con heatmap y marcadores pastel.',
        en: 'SEPA chart in 4 rows with heatmap and pastel markers.',
        fr: 'Charting sur 4 lignes, carte thermique et marqueurs pastel.',
      },
      {
        es: 'Edición tipo hoja de cálculo: navegas y editas cada celda inline.',
        en: 'Spreadsheet-style inline editing — navigate and edit any cell from the keyboard.',
        fr: 'Saisie façon tableur : on navigue et on remplit chaque case au clavier.',
      },
      {
        es: 'Autoguardado a 600 ms, con guard de cambios pendientes al cerrar la pestaña.',
        en: 'Autosave at 600 ms, with a beforeunload guard for pending changes.',
        fr: 'Enregistrement automatique à 600 ms, avec alerte si vous fermez l’onglet sans avoir tout enregistré.',
      },
      {
        es: 'Prerellenado de implantes y ausentes leyendo el odontograma del paciente.',
        en: 'Pre-fills implants and missing teeth from the patient odontogram.',
        fr: 'Pré-remplissage des implants et des absences depuis l’odontogramme du patient.',
      },
      {
        es: 'Slider de histórico: cada nodo es un snapshot cerrado e inmutable.',
        en: 'History slider — every node is a closed, immutable snapshot.',
        fr: 'Curseur d’historique : chaque point est un instantané clos et inaltérable.',
      },
      {
        es: 'Índices SEPA (BoP %, PI %, CAL medio, bolsas ≥5 mm) computados y congelados al cerrar.',
        en: 'SEPA indices (BoP %, PI %, mean CAL, ≥5 mm pockets) computed and frozen on close.',
        fr: 'Indices (saignement au sondage %, indice de plaque %, NAC moyen, poches ≥ 5 mm) calculés et figés à la clôture.',
      },
      {
        es: 'Render de fixture de implante en lugar de la raíz natural cuando el diente está implantado.',
        en: 'Implant fixture rendered in place of the natural root for implanted teeth.',
        fr: 'Le corps de l’implant remplace la racine naturelle au rendu quand la dent est implantée.',
      },
      {
        es: 'Dark mode y layout pensado para tablet horizontal en sillón.',
        en: 'Dark mode and a layout tuned for landscape tablets chair-side.',
        fr: 'Mode sombre et mise en page pensée pour une tablette en paysage, au fauteuil.',
      },
    ],
    screenshot: 'periodontogram.png',
  },
  {
    slug: 'pacientes',
    slugEn: 'patients',
    slugFr: 'patients',
    domain: 'clinical',
    icon: 'shield',
    title: { es: 'Pacientes', en: 'Patients', fr: 'Patients' },
    tagline: {
      es: 'Una ficha completa, con perfil médico, alergias y alertas clínicas.',
      en: 'One complete record — medical profile, allergies and clinical alerts.',
      fr: 'Une fiche complète : profil médical, allergies et alertes cliniques.',
    },
    description: {
      es: 'Ficha demográfica y clínica unificada. Las alertas aparecen donde hacen falta, no escondidas en una pestaña. Tutor legal para menores, datos de aseguradora y consentimiento RGPD, todo donde lo esperas.',
      en: 'A unified demographic and clinical record. Alerts surface where they need to — not hidden in some tab. Legal guardian for minors, insurance details and GDPR consent, all exactly where you expect them.',
      fr: 'Une fiche unique, administrative et clinique. Les alertes apparaissent là où elles servent, pas au fond d’un onglet. Représentant légal pour les mineurs, mutuelle et consentement RGPD, exactement où vous les cherchez.',
    },
    features: [
      {
        es: 'Perfil demográfico completo: nombre, DNI, fecha nacimiento, contacto, dirección.',
        en: 'Full demographic profile — name, national ID, DOB, contact, address.',
        fr: 'Profil administratif complet : nom, pièce d’identité, date de naissance, coordonnées, adresse.',
      },
      {
        es: 'Perfil médico con alergias, medicaciones, condiciones crónicas y alertas clínicas.',
        en: 'Extended medical profile — allergies, medications, chronic conditions, clinical alerts.',
        fr: 'Profil médical : allergies, traitements en cours, pathologies chroniques et alertes cliniques.',
      },
      {
        es: 'Tutor legal para pacientes menores.',
        en: 'Legal guardian field for minor patients.',
        fr: 'Représentant légal pour les patients mineurs.',
      },
      {
        es: 'Información de aseguradora (proveedor, póliza, cobertura).',
        en: 'Insurance information (provider, policy number, coverage).',
        fr: 'Informations mutuelle et assurance (organisme, numéro de contrat, couverture).',
      },
      { es: 'Registro de consentimiento RGPD.', en: 'GDPR consent tracking.', fr: 'Suivi du consentement RGPD.' },
      { es: 'Notas internas libres.', en: 'Free-form internal notes.', fr: 'Notes internes en texte libre.' },
      {
        es: 'Búsqueda con autocompletado por nombre o teléfono.',
        en: 'Search with autocomplete by name or phone.',
        fr: 'Recherche avec autocomplétion par nom ou par téléphone.',
      },
      {
        es: 'Ciclo de vida: activo, inactivo, archivado (soft-delete).',
        en: 'Lifecycle: active, inactive, archived (soft-delete).',
        fr: 'Cycle de vie : actif, inactif, archivé (suppression réversible).',
      },
    ],
    screenshot: 'patients.png',
  },
  {
    slug: 'historial-clinico',
    slugEn: 'clinical-history',
    slugFr: 'dossier-clinique',
    domain: 'clinical',
    icon: 'shield',
    title: { es: 'Historial clínico', en: 'Clinical history', fr: 'Dossier clinique' },
    tagline: {
      es: 'Datos clínicos normalizados y un timeline que se escribe solo.',
      en: 'Structured clinical data and a timeline that writes itself.',
      fr: 'Des données cliniques structurées et une chronologie qui s’écrit toute seule.',
    },
    description: {
      es: 'Datos clínicos separados del registro administrativo. El timeline se alimenta de eventos: cada cita, tratamiento, presupuesto o documento aparece automáticamente, en orden, sin que nadie tenga que acordarse de añadirlo.',
      en: 'Clinical data sits apart from the administrative record. The timeline is event-driven: every appointment, treatment, quote and document shows up automatically, in order, without anyone needing to remember to log it.',
      fr: 'Les données cliniques vivent à part de l’administratif. La chronologie se nourrit d’événements : chaque rendez-vous, acte, devis ou document s’y ajoute tout seul, dans l’ordre, sans que personne ait à y penser.',
    },
    features: [
      {
        es: 'Alergias, medicaciones y diagnósticos estructurados.',
        en: 'Structured allergies, medications and diagnoses.',
        fr: 'Allergies, traitements et diagnostics structurés.',
      },
      {
        es: 'Flags y alertas clínicas visibles durante la cita.',
        en: 'Clinical flags and alerts visible during appointments.',
        fr: 'Alertes cliniques visibles pendant le rendez-vous.',
      },
      {
        es: 'Timeline cronológico event-driven, sin tocar código existente.',
        en: 'Event-driven chronological timeline, without touching existing code.',
        fr: 'Chronologie pilotée par les événements, sans toucher au code existant.',
      },
      {
        es: 'Documentos del paciente: radiografías, consentimientos, fotos.',
        en: 'Patient documents: X-rays, consents, photos.',
        fr: 'Documents du patient : radios, consentements, photos.',
      },
      {
        es: 'Thumbnails de imágenes en la lista de documentos.',
        en: 'Image thumbnails in the document list.',
        fr: 'Vignettes des images dans la liste des documents.',
      },
    ],
    screenshot: 'patient-timeline.png',
  },
  {
    slug: 'plan-tratamiento',
    slugEn: 'treatment-plan',
    slugFr: 'plan-de-traitement',
    domain: 'clinical',
    icon: 'sparkles',
    title: { es: 'Plan de tratamiento', en: 'Treatment plan', fr: 'Plan de traitement' },
    tagline: {
      es: 'Una sola vista que une diagnóstico, presupuesto y agenda.',
      en: 'One view that ties diagnosis, budget and schedule together.',
      fr: 'Une seule vue qui relie diagnostic, devis et agenda.',
    },
    description: {
      es: 'Fuente única de verdad para "qué necesita este paciente, qué ya hicimos y qué queda". Conectado con presupuestos y agenda. Cuando envías el presupuesto, los precios se congelan automáticamente. Sin sorpresas.',
      en: 'A single source of truth for "what does this patient need, what is done, what is next". Wired into budgets and the calendar. The moment you send the budget, prices lock automatically — no surprises six weeks later.',
      fr: 'Une source unique pour savoir ce dont ce patient a besoin, ce qui est déjà fait et ce qui reste. Reliée aux devis et à l’agenda. Dès que vous envoyez le devis, les tarifs se figent automatiquement. Aucune mauvaise surprise six semaines plus tard.',
    },
    features: [
      {
        es: 'Vista única diagnósticos + tratamientos propuestos + ejecutados.',
        en: 'Single view — diagnoses + proposed + executed treatments.',
        fr: 'Vue unique : diagnostics, actes proposés et actes réalisés.',
      },
      {
        es: 'Enlace bidireccional con presupuestos y citas.',
        en: 'Two-way linkage with budgets and appointments.',
        fr: 'Lien bidirectionnel avec les devis et les rendez-vous.',
      },
      {
        es: 'Lock-on-budget: congela precios al enviar.',
        en: 'Lock-on-budget: prices freeze on send.',
        fr: 'Verrouillage à l’envoi du devis : les tarifs se figent.',
      },
      {
        es: 'Unlock + cancelación con traza completa.',
        en: 'Unlock + cancel flows with full audit trail.',
        fr: 'Déverrouillage et annulation avec traçabilité complète.',
      },
      {
        es: 'Archivo de planes finalizados.',
        en: 'Archive for finished plans.',
        fr: 'Archivage des plans terminés.',
      },
    ],
    screenshot: 'treatment-plan.png',
  },
  {
    slug: 'agenda',
    slugEn: 'calendar',
    slugFr: 'agenda',
    domain: 'operations',
    icon: 'calendar',
    title: { es: 'Agenda', en: 'Calendar', fr: 'Agenda' },
    tagline: {
      es: 'Una agenda drag-and-drop que entiende gabinetes, profesionales y solapes.',
      en: 'A drag-and-drop calendar that understands cabinets, professionals and overlaps.',
      fr: 'Un agenda glisser-déposer qui comprend les salles, les praticiens et les chevauchements.',
    },
    description: {
      es: 'Vista semanal y diaria. Mueves, redimensionas y creas citas arrastrando. Detecta solapes antes de que aparezcan. Kanban por estado para los días caóticos. Conectada al catálogo: la duración y el color salen solos.',
      en: 'Weekly and daily views. Drag to move, drag to resize, drag on an empty slot to create. Conflicts surface before they bite. Status kanban for the chaotic days. Wired into the catalog so duration and colour come for free.',
      fr: 'Vue semaine et vue jour. On déplace, on redimensionne et on crée un rendez-vous en glissant. Les chevauchements se voient avant de poser problème. Vue kanban par statut pour les journées agitées. Reliée au catalogue : la durée et la couleur arrivent toutes seules.',
    },
    features: [
      {
        es: 'Vista semanal por gabinete o profesional.',
        en: 'Weekly view per cabinet or professional.',
        fr: 'Vue semaine par salle de soins ou par praticien.',
      },
      {
        es: 'Vista diaria por profesional para detalle fino.',
        en: 'Daily view per professional for fine detail.',
        fr: 'Vue jour par praticien pour le détail fin.',
      },
      {
        es: 'Drag & drop para mover y redimensionar.',
        en: 'Drag & drop to move and resize.',
        fr: 'Glisser-déposer pour déplacer et redimensionner.',
      },
      {
        es: 'Drag-to-create en huecos vacíos con duración precisa.',
        en: 'Drag-to-create on empty slots with precise duration.',
        fr: 'Création par glissement sur un créneau libre, à la minute près.',
      },
      {
        es: 'Detección de conflictos y solapes.',
        en: 'Conflict and overlap detection.',
        fr: 'Détection des conflits et des chevauchements.',
      },
      {
        es: 'Ciclo de estados: programada → confirmada → en curso → completada.',
        en: 'Status lifecycle: scheduled → confirmed → in progress → completed.',
        fr: 'Cycle des statuts : planifié → confirmé → en cours → terminé.',
      },
      {
        es: 'Vista kanban para gestionar citas por estado.',
        en: 'Kanban view to manage appointments by status.',
        fr: 'Vue kanban pour piloter les rendez-vous par statut.',
      },
      {
        es: 'Asignación de gabinete diferida (reservas flexibles).',
        en: 'Deferred cabinet assignment (flexible bookings).',
        fr: 'Attribution de la salle différée (réservations souples).',
      },
      {
        es: 'Strip de profesionales en vivo.',
        en: 'Live professionals strip.',
        fr: 'Bandeau des praticiens en direct.',
      },
      {
        es: 'Integración con catálogo: duración y color auto.',
        en: 'Treatment-catalog integration: auto duration and colour.',
        fr: 'Intégration au catalogue d’actes : durée et couleur automatiques.',
      },
      { es: 'Zona horaria consciente.', en: 'Timezone-aware.', fr: 'Gestion des fuseaux horaires.' },
    ],
    screenshot: 'schedule-week.png',
    extraScreenshots: [
      {
        file: 'schedule-day.png',
        caption: {
          es: 'Vista diaria por profesional',
          en: 'Daily view per professional',
          fr: 'Vue jour par praticien',
        },
      },
      {
        file: 'schedule-canban.png',
        caption: {
          es: 'Vista kanban por estado',
          en: 'Kanban view by status',
          fr: 'Vue kanban par statut',
        },
      },
    ],
  },
  {
    slug: 'presupuestos',
    slugEn: 'budgets',
    slugFr: 'devis',
    domain: 'operations',
    icon: 'card',
    title: { es: 'Presupuestos', en: 'Budgets', fr: 'Devis' },
    tagline: {
      es: 'Construye línea a línea, recoge firma y exporta un PDF con tu marca.',
      en: 'Build line by line, capture the signature, export a PDF with your branding.',
      fr: 'Ligne par ligne, signature du patient et PDF à vos couleurs.',
    },
    description: {
      es: 'Planes de tratamiento que el paciente entiende, aprueba y paga. Workflow claro: borrador → pendiente → aprobado o rechazado. Firma digital, PDF con tu marca y bloqueo de precios al enviar. Sin discusiones tres meses después.',
      en: 'Treatment plans the patient understands, approves and pays for. Clear workflow: draft → pending → approved or rejected. Digital signature, branded PDF and price lock on send. So nobody re-negotiates three months later.',
      fr: 'Des plans de traitement que le patient comprend, accepte et règle. Un circuit clair : brouillon → en attente → accepté ou refusé. Signature électronique, PDF à vos couleurs et tarifs verrouillés à l’envoi. Plus de discussion trois mois après.',
    },
    features: [
      {
        es: 'Builder línea a línea desde el catálogo de tratamientos.',
        en: 'Line-by-line builder drawing from the treatment catalog.',
        fr: 'Construction ligne par ligne depuis le catalogue d’actes.',
      },
      {
        es: 'Descuento, cantidad e IVA por línea.',
        en: 'Per-line discount, quantity and tax.',
        fr: 'Remise, quantité et TVA par ligne.',
      },
      { es: 'Totales auto-calculados.', en: 'Auto-calculated totals.', fr: 'Totaux calculés automatiquement.' },
      {
        es: 'Workflow: draft → pending → approved / rejected.',
        en: 'Workflow: draft → pending → approved / rejected.',
        fr: 'Circuit : brouillon → en attente → accepté / refusé.',
      },
      {
        es: 'Captura de firma del paciente.',
        en: 'Patient signature capture.',
        fr: 'Signature du patient capturée à l’écran.',
      },
      {
        es: 'PDF con la marca de la clínica.',
        en: 'PDF generation with clinic branding.',
        fr: 'PDF aux couleurs du cabinet.',
      },
      {
        es: 'Lock-on-budget: congela el precio al enviar.',
        en: 'Lock-on-budget: freezes pricing on send.',
        fr: 'Verrouillage des tarifs au moment de l’envoi.',
      },
      {
        es: 'Unlock + cancel con traza de auditoría.',
        en: 'Unlock + cancel with audit trail.',
        fr: 'Déverrouillage et annulation avec journal d’audit.',
      },
      { es: 'Archivo de presupuestos antiguos.', en: 'Archive of old budgets.', fr: 'Archivage des anciens devis.' },
    ],
    screenshot: 'budgets.png',
  },
  {
    slug: 'facturacion',
    slugEn: 'invoicing',
    slugFr: 'facturation',
    domain: 'operations',
    icon: 'card',
    title: { es: 'Facturación', en: 'Invoicing', fr: 'Facturation' },
    tagline: {
      es: 'Series auditadas, pagos parciales y PDF con tu marca.',
      en: 'Audited number series, partial payments and branded PDFs.',
      fr: 'Séries de numérotation auditées, paiements partiels et PDF à vos couleurs.',
    },
    description: {
      es: 'Facturación con numeración automática configurable, varios métodos de pago, parciales y edición auditada. Generas desde un presupuesto o desde cero. La traza queda; tú no tienes que acordarte de nada.',
      en: 'Invoicing with configurable automatic numbering, multiple payment methods, partial payments and audited edits. Generate from a budget or stand-alone. The audit trail is automatic — you don’t have to remember a thing.',
      fr: 'Facturation avec numérotation automatique paramétrable, plusieurs moyens de paiement, règlements partiels et modifications auditées. Vous facturez depuis un devis ou à partir de zéro. La traçabilité est automatique, vous n’avez rien à retenir.',
    },
    features: [
      {
        es: 'Genera facturas desde presupuesto o directamente.',
        en: 'Generate invoices from a budget or stand-alone.',
        fr: 'Facture générée depuis un devis ou créée directement.',
      },
      {
        es: 'Numeración automática con series configurables.',
        en: 'Automatic numbering with configurable series.',
        fr: 'Numérotation automatique avec séries paramétrables.',
      },
      {
        es: 'Gestión de series con historial completo.',
        en: 'Invoice series management with full history.',
        fr: 'Gestion des séries avec historique complet.',
      },
      {
        es: 'Items elegidos del catálogo — sin texto libre.',
        en: 'Items from the treatment catalog — no free-text drift.',
        fr: 'Lignes issues du catalogue d’actes, pas de saisie libre qui dérive.',
      },
      {
        es: 'Pagos parciales y saldo pendiente.',
        en: 'Partial payments and balance tracking.',
        fr: 'Règlements partiels et suivi du solde restant.',
      },
      {
        es: 'Métodos: efectivo, tarjeta, transferencia, seguro.',
        en: 'Methods: cash, card, transfer, insurance.',
        fr: 'Moyens de paiement : espèces, carte, virement, mutuelle.',
      },
      { es: 'Edición con auditoría.', en: 'Invoice editing with audit.', fr: 'Modification des factures tracée.' },
      { es: 'PDF con la marca de la clínica.', en: 'PDF with clinic branding.', fr: 'PDF aux couleurs du cabinet.' },
      {
        es: 'Resumen de facturación por paciente.',
        en: 'Per-patient billing summary.',
        fr: 'Récapitulatif de facturation par patient.',
      },
    ],
    screenshot: 'invoices.png',
  },
  {
    slug: 'verifactu',
    slugEn: 'verifactu',
    slugFr: 'verifactu',
    domain: 'operations',
    icon: 'shield',
    country: 'ES',
    customPage: true,
    title: { es: 'Verifactu', en: 'Verifactu', fr: 'Verifactu' },
    tagline: {
      es: 'Cumple Veri*Factu sin tocar tu flujo de facturación. Solo para clínicas en España.',
      en: 'Comply with Spain’s Veri*Factu without touching your invoicing flow. Spain only.',
      fr: 'La conformité Veri*Factu sans toucher à votre facturation. Réservé aux cabinets en Espagne.',
    },
    description: {
      es: 'Módulo opcional pensado exclusivamente para clínicas en España. Firma cada factura, encadena registros con SHA-256, los envía a la AEAT por SOAP con tu certificado FNMT y embebe el QR tributario en el PDF. Cumple RD 1007/2023 y la Orden HAC/1177/2024 desde el primer día.',
      en: 'Optional module built exclusively for clinics operating in Spain. Signs every invoice, chains records with SHA-256, submits them to AEAT over SOAP with your FNMT certificate and embeds the tax QR in the PDF. RD 1007/2023 and Orden HAC/1177/2024 compliant from day one.',
      fr: 'Module optionnel conçu uniquement pour les cabinets exerçant en Espagne. Il signe chaque facture, chaîne les enregistrements en SHA-256, les transmet à l’administration fiscale espagnole (AEAT) en SOAP avec votre certificat FNMT et intègre le QR fiscal dans le PDF. Conforme au RD 1007/2023 et à l’arrêté HAC/1177/2024 dès le premier jour.',
    },
    features: [
      {
        es: 'Cadena SHA-256 firmada: cada factura enlaza con la anterior, libro fiscal append-only.',
        en: 'Signed SHA-256 chain: each invoice links to the previous one, append-only fiscal ledger.',
        fr: 'Chaîne SHA-256 signée : chaque facture est liée à la précédente, registre fiscal en ajout seul.',
      },
      {
        es: 'Envío SOAP a AEAT con tu certificado FNMT vía mTLS.',
        en: 'SOAP submission to AEAT with your FNMT certificate over mTLS.',
        fr: 'Transmission SOAP à l’AEAT avec votre certificat FNMT en mTLS.',
      },
      {
        es: 'QR tributario embebido en el PDF (verificación pública en sede electrónica).',
        en: 'Tax QR embedded in the invoice PDF (public verification on AEAT’s portal).',
        fr: 'QR fiscal intégré au PDF de la facture (vérification publique sur le portail de l’AEAT).',
      },
      {
        es: 'Worker periódico cada 60 s con reintentos y back-pressure según `TiempoEsperaEnvio`.',
        en: 'Periodic worker every 60 s with retries and back-pressure honouring `TiempoEsperaEnvio`.',
        fr: 'Worker toutes les 60 s, avec relances et régulation du débit selon `TiempoEsperaEnvio`.',
      },
      {
        es: 'Cola de subsanación con motivo de rechazo y reenvío `Subsanacion=S`.',
        en: 'Resubmission queue with rejection reason and `Subsanacion=S` retry.',
        fr: 'File de régularisation avec le motif de rejet et renvoi en `Subsanacion=S`.',
      },
      {
        es: 'Mapeo de IVA a clasificaciones AEAT (S1, E1–E6, N1, N2) por clínica.',
        en: 'Per-clinic VAT mapping to AEAT classifications (S1, E1–E6, N1, N2).',
        fr: 'Correspondance TVA vers les classifications AEAT (S1, E1–E6, N1, N2), cabinet par cabinet.',
      },
      {
        es: 'Asistente de productor SIF con declaración responsable firmada electrónicamente.',
        en: 'SIF producer wizard with electronically-signed declaración responsable.',
        fr: 'Assistant « producteur SIF » avec déclaration sur l’honneur signée électroniquement.',
      },
      {
        es: 'Almacén cifrado del PFX y la contraseña con Fernet.',
        en: 'Encrypted PFX and password vault using Fernet.',
        fr: 'Coffre chiffré Fernet pour le PFX et son mot de passe.',
      },
      {
        es: 'Banner de caducidad del certificado: verde >60 d, ámbar 15–60 d, rojo <15 d.',
        en: 'Certificate expiry banner: green >60 d, amber 15–60 d, red <15 d.',
        fr: 'Bandeau d’expiration du certificat : vert > 60 j, orange 15–60 j, rouge < 15 j.',
      },
      {
        es: 'Entornos prueba (preproducción AEAT) y real intercambiables sin redeploy.',
        en: 'Test (AEAT pre-production) and real environments switched live, no redeploy.',
        fr: 'Environnements test (préproduction AEAT) et réel interchangeables sans redéploiement.',
      },
      {
        es: 'Soporte F1, F2, F3, R1–R5 y anulaciones.',
        en: 'Support for F1, F2, F3, R1–R5 invoices and anulaciones.',
        fr: 'Prise en charge des types F1, F2, F3, R1–R5 et des annulations.',
      },
      {
        es: 'Retención legal a 4 años garantizada en el modelo de datos.',
        en: 'Four-year legal retention enforced in the data model.',
        fr: 'Conservation légale de 4 ans garantie par le modèle de données.',
      },
    ],
    screenshot: 'verifactu-dashboard.png',
    status: 'stable',
  },
  {
    slug: 'reportes',
    slugEn: 'reports',
    slugFr: 'rapports',
    domain: 'operations',
    icon: 'chart',
    title: { es: 'Reportes', en: 'Reports', fr: 'Rapports' },
    tagline: {
      es: 'KPIs de facturación, presupuestos y ocupación. Sin paneles que mareen.',
      en: 'Billing, budget and occupancy KPIs. No dashboards that scream at you.',
      fr: 'Indicateurs de facturation, de devis et de remplissage. Sans tableau de bord indigeste.',
    },
    description: {
      es: 'Reportes claros sobre tu práctica, filtrables por rango, profesional y gabinete. Sin tableros imposibles, sin gráficos que parecen una atracción de feria. Lo que necesitas para tomar decisiones, en un vistazo.',
      en: 'Clean reports across your practice, filterable by date range, professional and cabinet. No dashboard overwhelm, no charts that look like a fairground ride. The numbers you need for decisions, at a glance.',
      fr: 'Des rapports lisibles sur l’activité du cabinet, filtrables par période, par praticien et par salle. Pas de tableau de bord écrasant, pas de graphiques façon fête foraine. Les chiffres qui servent à décider, d’un coup d’œil.',
    },
    features: [
      {
        es: 'Facturación: ingresos, pendiente, cobrado.',
        en: 'Billing reports — revenue, outstanding, paid.',
        fr: 'Facturation : chiffre d’affaires, encours, encaissé.',
      },
      {
        es: 'Presupuestos: pipeline, conversión, valor por estado.',
        en: 'Budget reports — pipeline, conversion, value by status.',
        fr: 'Devis : en cours, taux d’acceptation, montant par statut.',
      },
      {
        es: 'Agenda: ocupación, cancelaciones, no-shows, métricas por profesional.',
        en: 'Scheduling reports — occupancy, cancellations, no-shows, per-professional metrics.',
        fr: 'Agenda : taux de remplissage, annulations, rendez-vous non honorés, indicateurs par praticien.',
      },
      {
        es: 'Filtros por rango, profesional y gabinete.',
        en: 'Filters by date range, professional and cabinet.',
        fr: 'Filtres par période, par praticien et par salle de soins.',
      },
    ],
    screenshot: 'reports.png',
  },
  {
    slug: 'modulos',
    slugEn: 'modules',
    slugFr: 'modules',
    domain: 'platform',
    icon: 'plug',
    title: { es: 'Sistema de módulos', en: 'Module system', fr: 'Système de modules' },
    tagline: {
      es: 'Una arquitectura de plugins real: instalas lo que usas, quitas lo que no.',
      en: 'A real plugin architecture: install what you use, drop what you don’t.',
      fr: 'Une vraie architecture de plugins : vous installez ce qui sert, vous retirez le reste.',
    },
    description: {
      es: 'Plugin architecture en backend y en frontend, no de boquilla. Cada módulo trae su manifest, sus migraciones Alembic, sus seeds YAML, su navegación y se suscribe al event bus interno. Activas, desactivas y actualizas sin tocar el resto del sistema.',
      en: 'Plugin architecture across backend and frontend — not just on a slide. Each module ships its own manifest, Alembic migration branch, YAML seeds, navigation and an event bus subscription. Install, uninstall and upgrade without touching the rest of the system.',
      fr: 'Une architecture de plugins côté backend comme côté frontend, pas seulement sur un slide. Chaque module apporte son manifest, ses migrations Alembic, ses seeds YAML, sa navigation et s’abonne au bus d’événements interne. Vous activez, désactivez et mettez à jour sans toucher au reste du système.',
    },
    features: [
      {
        es: 'Módulos declarativos con manifest validado.',
        en: 'Declarative modules with a validated manifest.',
        fr: 'Modules déclaratifs avec manifest validé.',
      },
      {
        es: 'Ciclo install / uninstall / upgrade con restart.',
        en: 'Install / uninstall / upgrade lifecycle with restart.',
        fr: 'Cycle installation / désinstallation / mise à jour avec redémarrage.',
      },
      { es: 'Seeds YAML por módulo.', en: 'YAML seeds per module.', fr: 'Seeds YAML par module.' },
      {
        es: 'Migraciones Alembic con rama propia.',
        en: 'Alembic migrations with their own branch.',
        fr: 'Migrations Alembic sur leur propre branche.',
      },
      {
        es: 'Nuxt layers auto-descubiertos en frontend.',
        en: 'Nuxt layers auto-discovered on the frontend.',
        fr: 'Layers Nuxt détectés automatiquement côté frontend.',
      },
      {
        es: 'Sidebar backend-driven, se reconstruye al activar módulos.',
        en: 'Backend-driven sidebar, rebuilt when modules activate.',
        fr: 'Menu latéral piloté par le backend, reconstruit à l’activation d’un module.',
      },
      {
        es: 'Slot system frontend: módulos inyectan pestañas y vistas.',
        en: 'Frontend slot system: modules inject tabs and views.',
        fr: 'Système de slots côté frontend : les modules injectent onglets et vues.',
      },
      {
        es: 'Event bus: patient.created, appointment.completed…',
        en: 'Event bus: patient.created, appointment.completed…',
        fr: 'Bus d’événements : patient.created, appointment.completed…',
      },
      {
        es: 'Tests E2E de instalación para cada módulo.',
        en: 'E2E install tests for every module.',
        fr: 'Tests E2E d’installation pour chaque module.',
      },
    ],
    screenshot: 'modules-manager.png',
  },
  {
    slug: 'api',
    domain: 'platform',
    icon: 'plug',
    title: { es: 'API REST completa', en: 'Full REST API', fr: 'API REST complète' },
    tagline: {
      es: 'Cada funcionalidad expone un endpoint. OpenAPI generado automáticamente.',
      en: 'Every feature exposes an endpoint. OpenAPI generated automatically.',
      fr: 'Chaque fonctionnalité expose un endpoint. OpenAPI généré automatiquement.',
    },
    description: {
      es: 'Automatiza lo que duela: importar pacientes, sincronizar con laboratorios, integrar con WhatsApp. Todo Dentalpin se pilota desde la API pública. Es la misma API que usa la app web — sin atajos privados, sin endpoints secretos.',
      en: 'Automate whatever is painful: import patients, sync with labs, integrate with WhatsApp. Every Dentalpin feature is reachable from the public API. It’s the same API the web app uses — no private shortcuts, no secret endpoints.',
      fr: 'Automatisez ce qui fait mal : import de patients, synchronisation avec les laboratoires de prothèse, intégration WhatsApp. Tout Dentalpin se pilote depuis l’API publique. C’est la même API que celle de l’application web : pas de raccourci privé, pas d’endpoint caché.',
    },
    features: [
      {
        es: 'FastAPI + Pydantic v2 con docs OpenAPI auto-generadas.',
        en: 'FastAPI + Pydantic v2 with auto-generated OpenAPI docs.',
        fr: 'FastAPI + Pydantic v2, documentation OpenAPI générée automatiquement.',
      },
      {
        es: 'JWT con access + refresh tokens y RBAC.',
        en: 'JWT with access + refresh tokens and RBAC.',
        fr: 'JWT avec jetons d’accès et de rafraîchissement, plus RBAC.',
      },
      {
        es: 'Permisos wildcard (`*`, `module.*`) para roles limpios.',
        en: 'Wildcard permissions (`*`, `module.*`) for clean roles.',
        fr: 'Permissions à joker (`*`, `module.*`) pour des rôles propres.',
      },
      {
        es: 'Event bus expuesto para automatizaciones externas.',
        en: 'Event bus exposed for external automations.',
        fr: 'Bus d’événements exposé pour vos automatisations externes.',
      },
      {
        es: 'Misma API que usa la app web — sin shortcuts privados.',
        en: 'Same API the web app uses — no private shortcuts.',
        fr: 'La même API que l’application web, sans raccourci privé.',
      },
    ],
    screenshot: 'api-docs.png',
  },
  {
    slug: 'agente-ia',
    slugEn: 'ai-agent',
    slugFr: 'agent-ia',
    domain: 'platform',
    icon: 'sparkles',
    title: { es: 'Agente de IA', en: 'AI agent', fr: 'Agent IA' },
    tagline: {
      es: 'Habla con tu clínica. El agente busca, agenda y cobra ejecutando las mismas acciones que la interfaz.',
      en: 'Talk to your clinic. The agent searches, books and bills by running the same operations the UI does.',
      fr: 'Parlez à votre cabinet. L’agent cherche, planifie et encaisse en exécutant les mêmes opérations que l’interface.',
    },
    description: {
      es: 'No es un chatbot pegado encima. Es un agente que planifica y ejecuta tareas de varios pasos llamando a las operaciones reales de Dentalpin: pacientes, agenda, recordatorios, presupuestos, pagos y reportes. Cada acción se vuelve a comprobar contra los permisos del usuario, así que el agente solo ve y hace lo que esa persona haría desde la interfaz, dentro de su clínica. Los datos del paciente se tokenizan antes de salir hacia el proveedor de IA, y cualquier acción que modifique datos se detiene a pedirte confirmación.',
      en: 'Not a chatbot bolted on top. It is an agent that plans and executes multi-step tasks by calling the real operations in Dentalpin: patients, schedule, recalls, budgets, payments and reports. Every action is re-checked against the user’s permissions, so the agent only sees and does what that person could through the UI, scoped to their clinic. Patient data is tokenized before it leaves for the AI provider, and any action that changes data pauses to ask for your confirmation.',
      fr: 'Ce n’est pas un chatbot collé par-dessus. C’est un agent qui planifie et exécute des tâches en plusieurs étapes en appelant les opérations réelles de Dentalpin : patients, agenda, relances, devis, paiements et rapports. Chaque action est revérifiée contre les droits de l’utilisateur, donc l’agent ne voit et ne fait que ce que cette personne ferait depuis l’interface, dans son propre cabinet. Les données du patient sont remplacées par des jetons avant de partir vers le fournisseur d’IA, et toute action qui modifie des données s’arrête pour vous demander confirmation.',
    },
    features: [
      {
        es: 'Hace, no solo responde: busca pacientes, agenda o reprograma citas, registra pagos y saca la facturación del mes, encadenando pasos hasta cerrar la tarea.',
        en: 'It does, not just answers: searches patients, books or reschedules appointments, records payments and pulls the month’s collections, chaining steps until the task is done.',
        fr: 'Il agit, il ne se contente pas de répondre : il cherche des patients, planifie ou déplace des rendez-vous, enregistre des règlements et sort la facturation du mois, en enchaînant les étapes jusqu’au bout de la tâche.',
      },
      {
        es: 'Paridad RBAC: cada llamada se revalida contra los permisos del usuario en el punto de control de ejecución. Nunca hace más de lo que esa persona puede en la interfaz.',
        en: 'RBAC parity: every call is re-checked against the user’s permissions at the execution chokepoint. Never does more than that person could through the UI.',
        fr: 'Parité RBAC : chaque appel est revalidé contre les droits de l’utilisateur au point de contrôle d’exécution. Jamais plus que ce que cette personne peut faire dans l’interface.',
      },
      {
        es: 'Redacción de PHI por defecto: nombres, teléfonos, emails e IDs de paciente se cambian por tokens deterministas antes de salir; el texto clínico libre se queda fuera de la nube.',
        en: 'PHI redaction on by default: patient names, phones, emails and IDs are swapped for deterministic tokens before they leave; free-text clinical data stays off the cloud path.',
        fr: 'Anonymisation des données de santé par défaut : noms, téléphones, emails et identifiants patients sont remplacés par des jetons déterministes avant tout envoi ; le texte clinique libre ne quitte jamais votre serveur.',
      },
      {
        es: 'Las escrituras piden confirmación: agendar, cobrar o editar se pausa a mitad de conversación hasta tu visto bueno explícito.',
        en: 'Writes ask first: booking, billing or editing pauses mid-conversation until you explicitly confirm.',
        fr: 'Toute écriture demande d’abord : planifier, encaisser ou modifier s’interrompt en pleine conversation jusqu’à votre accord explicite.',
      },
      {
        es: 'Playbooks guiados: resumen del día, preparar una visita, llenar un hueco, recalls pendientes o presupuestos sin respuesta, en un toque.',
        en: 'Guided playbooks: daily briefing, prepare a visit, fill a gap, due recalls or unanswered budgets, in one tap.',
        fr: 'Scénarios guidés : résumé de la journée, préparation d’une visite, comblement d’un trou dans l’agenda, relances à faire ou devis sans réponse, en un geste.',
      },
      {
        es: 'Briefings proactivos: resumen matinal determinista por email, sin LLM y sin PHI fuera, con la agenda del día, recalls y presupuestos abiertos.',
        en: 'Proactive briefings: a deterministic morning digest by email, no LLM and no PHI off-site, with the day’s schedule, due recalls and open budgets.',
        fr: 'Points du matin proactifs : un résumé déterministe par email, sans LLM et sans donnée de santé qui sorte, avec l’agenda du jour, les relances et les devis en attente.',
      },
      {
        es: 'Cmd/Ctrl+K en cualquier pantalla: abre el agente con el contexto del paciente o la cita que tienes delante, sin repetir nada.',
        en: 'Cmd/Ctrl+K on any screen: opens the agent with the patient or appointment in front of you as context, nothing to restate.',
        fr: 'Cmd/Ctrl+K depuis n’importe quel écran : l’agent s’ouvre avec le patient ou le rendez-vous affiché en contexte, rien à répéter.',
      },
      {
        es: 'Modular por diseño: consume las herramientas que publica cada módulo en un registry compartido, así que crece solo según instalas módulos.',
        en: 'Modular by design: it consumes the tools each module publishes through a shared registry, so it grows automatically as you install modules.',
        fr: 'Modulaire par conception : il consomme les outils que chaque module publie dans un registre commun, donc il s’enrichit tout seul à mesure que vous installez des modules.',
      },
      {
        es: 'Agnóstico de proveedor: abstracción de proveedor LLM, con modelo y presupuesto de tokens por clínica configurables en cada despliegue.',
        en: 'Vendor-agnostic: an LLM-provider abstraction, with model and per-clinic token budgets configurable per deployment.',
        fr: 'Indépendant du fournisseur : une abstraction de fournisseur LLM, avec le modèle et le quota de jetons par cabinet configurables à chaque déploiement.',
      },
      {
        es: 'Todo queda auditado: cada herramienta que invoca el agente se registra en el log de auditoría.',
        en: 'Everything is audited: every tool the agent invokes lands in the audit log.',
        fr: 'Tout est tracé : chaque outil appelé par l’agent atterrit dans le journal d’audit.',
      },
    ],
    screenshot: 'ai-copilot.png',
    status: 'stable',
  },
  {
    slug: 'whatsapp',
    slugEn: 'whatsapp',
    slugFr: 'whatsapp',
    domain: 'operations',
    icon: 'whatsapp',
    customPage: true,
    title: { es: 'WhatsApp', en: 'WhatsApp', fr: 'WhatsApp' },
    tagline: {
      es: 'Recordatorios y recalls por WhatsApp, y el paciente te responde en el mismo hilo.',
      en: 'Reminders and recalls over WhatsApp, with the patient replying in the same thread.',
      fr: 'Rappels et relances par WhatsApp, et le patient vous répond dans le même fil.',
    },
    description: {
      es: 'Módulo de comunidad, opcional y desinstalable, que añade WhatsApp como canal de notificaciones encima del gateway de Dentalpin. Envías recordatorios de cita, confirmaciones y recalls con plantillas aprobadas, y cuando el paciente contesta, su respuesta entra en un hilo por paciente dentro de la app. El núcleo de notificaciones es agnóstico de canal: WhatsApp llega como un adaptador conectado a Kapso que puedes quitar sin tocar el resto del sistema.',
      en: 'An optional, removable community module that adds WhatsApp as a notifications channel on top of Dentalpin’s gateway. You send appointment reminders, confirmations and recalls with approved templates, and when the patient replies, their message lands in a per-patient thread inside the app. The notifications core is channel-agnostic: WhatsApp arrives as a Kapso-backed adapter you can remove without touching the rest of the system.',
      fr: 'Module communautaire, optionnel et désinstallable, qui ajoute WhatsApp comme canal de notification au-dessus de la passerelle Dentalpin. Vous envoyez rappels de rendez-vous, confirmations et relances avec des modèles approuvés, et quand le patient répond, son message arrive dans un fil dédié à ce patient, dans l’application. Le cœur des notifications est indépendant du canal : WhatsApp arrive comme un adaptateur branché sur Kapso, que vous pouvez retirer sans toucher au reste.',
    },
    features: [
      {
        es: 'Conversaciones bidireccionales: cada paciente tiene un hilo con mensajes salientes y entrantes en orden.',
        en: 'Two-way conversations: every patient gets a thread with outbound and inbound messages in order.',
        fr: 'Conversations à double sens : chaque patient a son fil, messages envoyés et reçus dans l’ordre.',
      },
      {
        es: 'Plantillas HSM aprobadas, sincronizadas automáticamente desde Kapso y mapeadas por tipo de aviso.',
        en: 'Approved HSM templates, auto-synced from Kapso and mapped per notification type.',
        fr: 'Modèles HSM approuvés, synchronisés automatiquement depuis Kapso et associés à chaque type de notification.',
      },
      {
        es: 'Ventana de sesión de 24 h: dentro de ella respondes en texto libre; fuera, solo plantillas, como exige WhatsApp.',
        en: '24-hour session window: free-form replies inside it, templates only outside, exactly as WhatsApp requires.',
        fr: 'Fenêtre de session de 24 h : réponse libre à l’intérieur, modèles uniquement à l’extérieur, comme l’exige WhatsApp.',
      },
      {
        es: 'Webhook público firmado con HMAC-SHA256 por clínica, con manejo idempotente de entrantes y estados de entrega.',
        en: 'Public webhook signed with per-clinic HMAC-SHA256, idempotent handling of inbound messages and delivery states.',
        fr: 'Webhook public signé en HMAC-SHA256 par cabinet, traitement idempotent des messages entrants et des accusés de réception.',
      },
      {
        es: 'Hilo de conversación en la ficha del paciente, sin saltar a otra herramienta.',
        en: 'Conversation thread on the patient record, without jumping to another tool.',
        fr: 'Le fil de conversation dans la fiche patient, sans changer d’outil.',
      },
      {
        es: 'Resolución de paciente por número de teléfono al recibir un mensaje entrante.',
        en: 'Patient resolution by phone number when an inbound message arrives.',
        fr: 'Identification du patient par son numéro de téléphone à la réception d’un message.',
      },
      {
        es: 'Gating por consentimiento: solo escribe a quien aceptó recibir mensajes.',
        en: 'Consent gating: only messages patients who opted in.',
        fr: 'Contrôle du consentement : seuls les patients qui l’ont accepté reçoivent des messages.',
      },
      {
        es: 'Secretos cifrados con Fernet y ajustes por clínica (token, plantillas, firma de webhook).',
        en: 'Fernet-encrypted secrets and per-clinic settings (token, templates, webhook signature).',
        fr: 'Secrets chiffrés avec Fernet et réglages par cabinet (jeton, modèles, signature du webhook).',
      },
      {
        es: 'Arquitectura de canal-adaptador: el adaptador se registra al instalar y se elimina al desinstalar, sin residuos.',
        en: 'Channel-adapter architecture: the adapter registers on install and is removed on uninstall, no residue.',
        fr: 'Architecture canal-adaptateur : l’adaptateur s’enregistre à l’installation et disparaît à la désinstallation, sans résidu.',
      },
      {
        es: 'Permisos dedicados (`whatsapp_kapso.settings.*`) y UI bilingüe ES/EN.',
        en: 'Dedicated permissions (`whatsapp_kapso.settings.*`) and a bilingual ES/EN UI.',
        fr: 'Permissions dédiées (`whatsapp_kapso.settings.*`) et interface multilingue.',
      },
      {
        es: 'Envío de prueba desde ajustes para validar la conexión antes de usarlo en real.',
        en: 'Test send from settings to validate the connection before going live.',
        fr: 'Envoi de test depuis les réglages pour valider la connexion avant de passer en réel.',
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
  return MODULES.find((m) => m.slug === slug || m.slugEn === slug || m.slugFr === slug);
}

export function moduleSlug(mod: ModuleEntry, locale: Locale): string {
  if (locale === 'en') return mod.slugEn ?? mod.slug;
  if (locale === 'fr') return mod.slugFr ?? mod.slug;
  return mod.slug;
}
