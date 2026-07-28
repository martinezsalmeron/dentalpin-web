# Content plan

The spec the content routine executes. It is also the editorial standard
for anything a human writes here.

## How the loop works

There is no status column to keep in sync. The routine reads this file,
looks at which slugs already exist under
`apps/web/src/content/blog/{es,en}/`, and takes the next unwritten
target. What is published *is* the state.

Five posts a week, weekday mornings: two comparisons and three topic
posts. The two kinds are written differently — see *Two queues* and
*Topic posts are guides*.

Every run, one post:

1. Read the day of the week and pick the queue from it — Monday and
   Wednesday take a comparison, the rest take a topic. See *Two queues*
   below.
2. Take the next target in that queue with no post yet.
3. Research it **this run**, from primary sources. Not from memory.
4. Write it in Spanish and English.
5. Verify every factual claim.
6. Publish what passes. Open a PR for what does not.

## The rule that matters

**Never state a fact about a competitor that does not come from a page
they publish themselves.**

Comparative advertising in Spain is regulated (Ley de Competencia
Desleal, art. 10): comparisons must be objective, verifiable, about
relevant and representative features, and must not denigrate. This site
is published by a real company. A wrong price copied from a blog is a
letter from a lawyer.

In practice:

- **Prices.** Only if the vendor publishes them. Almost none do — say
  exactly that: "no publica precios públicamente (consultado el
  <fecha>)". That sentence is verifiable, it is true of nearly the whole
  market, and it is the strongest thing on the page.
- **Never cite an aggregator blog for a price.** They contradict each
  other and several are written by competitors. One puts Gesden at
  "99 €/mes", another at "licencia perpetua de 2.000-3.000 €". Neither
  is Infomed.
- **Features.** Only from the vendor's own product pages, with the URL
  and the date consulted.
- **No adjectives about competitors.** "Desktop, Windows only" is a fact
  and lands harder than "anticuado" anyway. If a sentence would sting
  read aloud to their sales team, cut it.
- **Anything unverifiable is dropped**, not softened. If dropping it
  guts the post, the post goes to a PR instead of being published.

## Every comparison post has this shape

1. **Who it is for** — one paragraph, honest, no preamble. Then a callout
   explaining how the comparison is sourced.
2. **"En treinta segundos"** — the verdict up front, in three short
   paragraphs: what the competitor is strongest at, what we are strongest
   at, and the one question that actually decides between them. A reader
   who stops here should already have their answer.
3. **What <competitor> is** — sourced, neutral, generous. A comparison
   that cannot describe the other product fairly convinces nobody.
4. **What DentalPin is.**
5. **Side-by-side table** — only verifiable rows, chips where there is a
   verdict. Deployment, licence, published price, data ownership, API,
   modules, compliance, and at least two rows the competitor wins.
6. **Choose <competitor> if…** — a real list, not a straw man. If they
   have 30 years of Spanish support and 400 migrations a year, say so.
   This section is why the post gets trusted and linked.
7. **Choose DentalPin if…**
8. **How migration actually works** — a numbered list, with the module.
9. **Sources** — every URL with the date consulted.

Section 6 is not a concession. It is the section that makes the other
seven credible, and it is the one the routine must never quietly drop.

## Making a post look designed

The posts are plain Markdown. There are no components to import and no
classes to write — `apps/web/src/styles/post.css` and the
`rehype-table-chips` plugin turn ordinary Markdown into the finished
article. Your side of that bargain is using the constructs below, because
a post that ignores them renders as an undifferentiated wall of text.

**The opening paragraph is set larger than the rest.** Make it a real
opening — one or two sentences that could stand alone as the answer to
the headline. Never waste it on throat-clearing.

**Blockquotes become callouts** — a bordered card with an accent rule.
Use them two or three times per post, for the thing a skimmer must not
miss: the caveat, the number that decides it, the mistake to avoid. Open
with a bolded phrase so the card has a headline:

```markdown
> **Infomed no publica tarifas en su web.** Remite a consultar con su
> coordinador de zona, y ninguno de los blogs que citan cifras es Infomed.
```

Four or five callouts in one post is noise. If everything is highlighted,
nothing is.

**Comparison tables are the centrepiece.** They break out wider than the
text, the header row is styled, and below 640px each row restacks into its
own card so both products stay visible on a phone. Two rules make that
work:

- **Dentalpin is always the last column.** It gets the tinted treatment.
- **Open a cell with `✓`, `✗` or `~`** and the whole cell becomes a
  coloured pill — green, red or amber. Use them only where the cell is a
  verdict, and only where the verdict is defensible. A row like
  `| Modelo | Licencia comercial | Open source |` is a fact, not a
  verdict: leave it plain.

```markdown
| | Gesden | Dentalpin |
|---|---|---|
| Modelo | Licencia comercial | Open source (BSL 1.1) |
| Precio publicado | ✗ No publica tarifas | ✓ 0 €, todo incluido |
| Módulos | ~ Varios se contratan aparte | ✓ Todos incluidos |
| Años en el mercado | ✓ Más de 30 | ✗ Desde 2026 |
```

**Give the competitor green chips where they earn them.** A table where
every green pill is ours and every red one theirs reads as marketing and
gets believed by nobody. Years on the market, support headcount, install
base — those are theirs, and saying so is what makes the rest credible.

**Sections are scannable.** Every `##` gets a rule above it and feeds the
page index, which appears once a post has more than two. Write headings
that say what the section concludes ("Elige Gesden si") rather than what
it is about ("Consideraciones").

**Bulleted points open with a bolded lead-in**, then the explanation.
The reader who only reads the bold parts should still get the argument.

**Numbered lists for anything sequential** — a migration, an install.
Prose describing four steps is four steps nobody can follow.

**Keep paragraphs to two or three sentences.** This is the single biggest
difference between a post that gets read and one that gets closed.

Everything else — links, code, images, the sources list — is styled
automatically. Do not hand-write HTML or CSS classes in a post.

## SEO conventions

- **Quote the title and description in the frontmatter.** Comparison
  titles carry a colon almost every time, and an unquoted colon is a YAML
  parse error that fails the build.
- Slug in the language of the post: `dentalpin-vs-gesden` /
  `dentalpin-vs-gesden`, but `alternativa-open-source-a-X` /
  `open-source-alternative-to-X`.
- `description` reads as a search result, not a teaser. 140-160 chars.
- One `<h1>` (the title), `##` for the sections above.
- Link to `/es/precios/` and the install post from every comparison.
- Tag with `comparativa` / `comparison` plus the vendor slug.

## Two queues, five posts a week

Monday and Wednesday are **comparison** posts. Tuesday, Thursday and
Friday are **topic** posts. The routine reads the day (`date -u +%u`,
1 = Monday) and picks the queue from it.

When the comparison queue runs dry, Monday and Wednesday take topic
targets too and the site simply publishes five topic posts a week. Do
**not** invent a competitor to keep the comparison cadence — a made-up
or misremembered vendor is the one mistake here that cannot be walked
back. Adding a new one means verifying it trades, this run, from its own
site.

Two entries in the first draft of this list were wrong, in the two ways
this fails:

- `charly.de` does not resolve. The German vendor trades as
  `solutio.de` — the name was right, the domain was invented.
- **Dentazon** was taken from `recepcionista.com`, an aggregator this
  same document bars as a source, and no such vendor could be found at
  any domain. The entry looked plausible and was sourced from exactly
  the place the rule forbids.

A vendor that cannot be reached at its own site does not go in this
queue.

Same state rule for both queues: what is published *is* the state.
Look at which slugs already exist, take the next unwritten target.

## Topic posts are guides, not comparisons

A comparison post argues. A topic post **helps**, and earns the right to
mention the product at the end. They are not the same shape and writing
one like the other wastes the slot.

- **Answer the question in the first hundred words.** Someone arriving
  from a search has a question. Answer it immediately, then explain. A
  post that warms up for three paragraphs loses the reader and the
  featured snippet.
- **It has to be useful to someone who never installs Dentalpin.** That
  is the bar. If the guide only works as a pitch, it will not rank and
  it will not get linked.
- **Mention the product once, at the end, and only where it genuinely
  answers what the post is about.** A guide that pushes the product in
  every section reads as an advert and converts worse than one that does
  not.
- **No competitor claims.** The sourcing rule above exists for
  comparisons; topic posts should simply not need it. If one does, it is
  a comparison wearing a guide's title.
- **Regulation is a special case.** Verifactu, RGPD, LOPD: state what
  the rule requires, cite the official source (BOE, AEPD, AEAT), give
  the date consulted, and never give legal advice. "Esto no es
  asesoramiento legal" belongs in those posts.

The visual conventions above apply unchanged — opening paragraph,
callouts, numbered lists for anything sequential. Tables in a topic post
compare options or requirements, not vendors, so the chip markers stay
useful but the last column is not automatically ours.

## Queue A — comparisons (Mon, Wed)

Every vendor here was verified to exist and to be trading when it was
added — name, site and market evidence. Research each again before
writing: this list is a queue, not a source of facts.

**Ordered by whether a post in Spanish or English can actually rank in
that vendor's market.** A Brazilian dentist searches in Portuguese and a
German one in German, so a Spanish post about Dampsoft reaches nobody who
is choosing between Dampsoft and us. Those groups sit at the bottom and
are worth writing only when the site has content in their language.

### A1 · Spain — the home market

| Target | Slug | Why |
|---|---|---|
| Gesden (Infomed) | `dentalpin-vs-gesden` | Market leader, claims 14.000 clinics |
| Gesden ONE | `dentalpin-vs-gesden-one` | Their cloud product, closest comparison |
| Odontonet | `dentalpin-vs-odontonet` | Dental-only, already ships Verifactu and WhatsApp — the closest competitor we have, so the hardest post to write honestly. **Check their pricing page: they may publish rates, which would make the usual "no publica precios" line wrong here.** |
| Klinikare | `dentalpin-vs-klinikare` | Cloud, claims 2.500+ clinics and 20.000+ professionals over 16 years, ISO 27001, own AI features. Multi-vertical (dental, aesthetics, physio), which is a real difference worth stating rather than a weakness |
| Clinic Cloud | `dentalpin-vs-clinic-cloud` | Cloud-native, SMB |
| — | `alternativa-open-source-gesden` / `open-source-alternative-to-gesden` | Highest-intent query in the whole space |
| — | `software-clinica-dental-gratis` / `free-dental-practice-software` | Broad head term |

### A2 · Spanish-speaking Latin America — Spanish posts rank here

| Target | Slug | Why |
|---|---|---|
| Dentalink | `dentalpin-vs-dentalink` | Leader in Chile, strong across LatAm and Spain |
| Doctocliq | `dentalpin-vs-doctocliq` | Dental + medical, positions itself LatAm-wide |
| DentalCore | `dentalpin-vs-dentalcore` | Argentina-first, clinical records + AI claims |

### A3 · United States and English-speaking markets — English posts rank here

| Target | Slug | Why |
|---|---|---|
| Open Dental | `dentalpin-vs-open-dental` | The other "open" one — the difference needs stating |
| Dentrix (Henry Schein One) | `dentalpin-vs-dentrix` | Largest installed base in the US, 38.000+ practices |
| Curve Dental | `dentalpin-vs-curve-dental` | Cloud-only, no server option |
| Eaglesoft (Patterson Dental) | `dentalpin-vs-eaglesoft` | Long-standing US base |
| Dentally (Henry Schein One) | `dentalpin-vs-dentally` | Cloud; UK, Ireland, Australia, NZ, Canada |
| Software of Excellence (Henry Schein One) | `dentalpin-vs-software-of-excellence` | UK and Asia-Pacific incumbent |
| NexHealth | `dentalpin-vs-nexhealth` | Patient-experience layer, not a full PMS — say so |
| Apexo | `dentalpin-vs-apexo` | Open source, offline-first |

### A4 · Blocked on language — do not write these yet

Real vendors, real markets, and a post in Spanish or English reaches
almost none of the people choosing between them and us. Move a row up
into A2 or A3 when the site publishes in that language.

| Target | Market | Blocked on |
|---|---|---|
| Simples Dental | Brazil — 60.000+ dentists in BR, 80.000+ across LatAm | Portuguese |
| Clinicorp | Brazil — claims 100.000+ active users | Portuguese |
| Dental Office | Brazil — 25 years, ~40.000 dentists | Portuguese |
| Dampsoft (DS-Win / DS4) | Germany — market leader, near a third of practices per KZBV | German |
| CompuGroup Medical | Germany — around 28% share | German |
| charly (solutio) | Germany — around 10% share | German |
| Julie (Henry Schein One) | France | French — the UI is already translated, the site is not |

## Queue B — topics (Tue, Thu, Fri, then everything)

Ordered by intent. Work down it; the top of this list is where a clinic
is closest to needing what we sell.

| Topic | Slug (es / en) | Target search |
|---|---|---|
| Verifactu para clínicas dentales: qué cambia y cuándo | `verifactu-clinicas-dentales` / `verifactu-dental-clinics-spain` | verifactu clínica dental |
| RGPD en la clínica dental: qué exige con los datos de pacientes | `rgpd-clinica-dental` / `gdpr-dental-clinic` | rgpd clínica dental |
| Cómo migrar de software dental sin perder la historia clínica | `migrar-software-dental` / `migrate-dental-software` | migrar software dental |
| Qué preguntar a tu proveedor antes de firmar | `preguntas-antes-de-firmar-software-dental` / `questions-before-signing-dental-software` | contratar software dental |
| Cuánto cuesta de verdad un software de clínica dental | `cuanto-cuesta-software-clinica-dental` / `dental-software-cost` | precio software clínica dental |
| Nube o servidor propio para una clínica dental | `nube-o-servidor-clinica-dental` / `cloud-or-self-hosted-dental` | software dental en la nube |
| Copias de seguridad en una clínica dental: qué guardar y cada cuánto | `copias-seguridad-clinica-dental` / `dental-clinic-backups` | copia seguridad clínica dental |
| Cómo reducir las ausencias a citas en la clínica | `reducir-ausencias-citas-dental` / `reduce-dental-no-shows` | ausencias citas dental |
| Recordatorios de cita por WhatsApp: qué permite la normativa | `recordatorios-cita-whatsapp-dental` / `whatsapp-appointment-reminders-dental` | recordatorios cita whatsapp |
| Odontograma digital: qué debe registrar y por qué | `odontograma-digital` / `digital-odontogram` | odontograma digital |
| Presupuestos dentales con firma digital: validez y flujo | `presupuestos-dentales-firma-digital` / `dental-quotes-digital-signature` | presupuesto dental firma |
| Historia clínica electrónica: qué exige la ley en España | `historia-clinica-electronica-dental` / `electronic-dental-records-spain` | historia clínica electrónica |
| Abrir una clínica dental: el software que necesitas desde el día uno | `abrir-clinica-dental-software` / `opening-dental-clinic-software` | abrir clínica dental |
| Cómo dimos a un LLM acceso de escritura a datos clínicos sin que sea una locura | `llm-escritura-datos-clinicos` / `llm-write-access-medical-data` | *(technical, EN-first — HN/Reddit material)* |
| Autoalojar software sanitario: lo que nadie te cuenta | `autoalojar-software-sanitario` / `self-hosting-healthcare-software` | *(self-hosted / r/selfhosted)* |

When this queue empties too, add new targets the same way: real searches
a Spanish dental clinic makes, verified to have intent behind them this
run, not invented from memory.

## Where the routine must stop and ask

- A competitor claims something about DentalPin that needs answering.
- A target has shut down, been acquired, or changed model.
- The honest verdict is "their product is a better fit for most readers".
  Publish it anyway — but say so in the PR, because it is a product
  signal, not a content problem.
