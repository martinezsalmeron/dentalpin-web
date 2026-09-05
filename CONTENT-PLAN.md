# Content plan

The spec the content routine executes. It is also the editorial standard
for anything a human writes here.

## How the loop works

There is no status column to keep in sync. The routine reads this file,
looks at which slugs already exist under
`apps/web/src/content/blog/{es,en,fr,pt,de,it,pl,pt-br,es-mx}/`, and takes the next
unwritten target. What is published *is* the state.

Twenty-eight targets a week, four runs every day, weekends included:
04:00, 08:00 and 11:00 UTC take a comparison each, 16:00 UTC takes a topic
post. **That is about seventy files, not twenty-eight.** A
comparison is one market, a topic is every language the site publishes, so a
normal week is 21 + 7×7. The two regional variants do not multiply that: they
inherit the parent's topic posts and only get a file of their own when the
market changes the answer. The two kinds are written differently — see *Two
queues* and *Topic posts are guides*.

**A target is done when it exists in every directory it was due in.** A
comparison is due in one, a topic post in seven, and a country-locked row in the
one its own row names. Partial coverage is not done: a topic that reached `es`
and `en` but not `de` is still the next target, and the run fills the gaps
instead of starting something new. Without that rule, doubling the cadence just
means the newest markets get skipped faster and nobody notices, because the
target looks written.

Every run, one target:

1. Read the hour (`date -u +%H`) and pick the queue from it: before 12 a
   comparison, from 12 on a topic post. The weekday decides nothing.
2. Take the next target in that queue that is not done.
3. Research it **this run**, from primary sources. Not from memory.
4. Write it in the languages that target's row lists. See *Which
   languages a post gets written in* — it is not always all of them.
5. Verify every factual claim.
6. Publish. Every run ends with the post on main, never parked in a PR.
   If something needs a human (see *Where the routine publishes and
   flags*), publish anyway and flag it in the notification.

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
  guts the post, rebuild the post around what survives verification and
  publish that; tell the user in the notification what was cut and why.

## Which languages a post gets written in

**The two queues localise differently, and getting this backwards is the
most expensive mistake available here.**

**A comparison goes out in the language of the market where that vendor
sells, and nowhere else.** Someone choosing between Julie and us searches
`alternative logiciel Julie` in French. A Spanish translation of that post
reaches no one who is deciding, ranks for nothing, and still has to be
re-verified every time Julie changes a page. Three vendors × four
languages is nine pages that exist only to dilute the three that work.

The market decides the language, not the vendor's nationality:

- Gesden, Odontonet, Klinikare, Clinic Cloud → **ES**. Spain only.
- Dentalink, Doctocliq, DentalCore → **ES**. One post covers Spain and
  Latin America; there is no second language to write.
- Julie, LOGOSw, Veasy, Desmos → **FR**. France only.
- NewSoft, Doctusware, Simples Dental, Clinicorp, Dental Office → **PT**.
- Dentrix, Eaglesoft, Curve, Open Dental, Dentally, Software of
  Excellence → **EN**.
- charly, Dampsoft, CGM Z1.PRO, EVIDENT, ivoris, LinuDent → **DE**.
  Germany, and it carries into Austria and German-speaking Switzerland
  without a second post.
- OrisDent, XDENT, GipoDental, AlfaDocs, Appuntoo → **IT**. Italy only.
- Estomed, ProDentis, Medfile, SmartDental, Proassist → **PL**. Poland
  only. Verified from their own sites on 28 August 2026; until then
  Polish took topic posts only.

**A comparison for Brazil or Mexico goes in that market's directory**, not
in the parent's. `blog/pt-br/dentalpin-vs-simples-dental.md` for a Brazilian
vendor, `blog/es-mx/` for a Mexican one: the vocabulary, the currency and the
regulation in the post all belong to that market, and the reader who is
choosing is there. A vendor selling into Portugal or Spain stays in
`blog/pt/` and `blog/es/`.

A second language is only worth it when the vendor genuinely sells into
that second language's market, and then it is a **rewritten** post, not a
translation: different search phrasing, different regulation, different
"choose them if" list. If you cannot name the query it would rank for,
do not write it.

**A topic post goes out in every language the site publishes.** Backups,
no-shows, migrating without losing the clinical record, cloud versus your
own server: none of that is market-specific, all of it is searched in
every language, and there is no competitor claim to re-verify per copy.
This is where breadth pays.

Two things that look like translations and are not:

- **Head terms.** `software-clinica-dental-gratis`,
  `logiciel-dentaire-gratuit`, `zahnarztsoftware-kostenlos`,
  `software-gestionale-dentisti-gratis`, `free-dental-practice-software`
  are one target each, written natively, naming the vendors that market
  actually knows. Translating the Spanish one into French produces a page
  about Gesden for a reader who has never heard of it.
- **Regulation.** Verifactu is Spain. The French equivalent is the
  e-invoicing reform and its PDP obligations; the German one is the
  E-Rechnung mandate; the Italian one is the SDI plus the Sistema Tessera
  Sanitaria filing that every dental practice there already lives with.
  Four different posts, four sets of dates, four official sources. Never
  translate a compliance post across a border.

## The two regional variants

`pt-BR` and `es-MX` are not languages, they are the same language priced and
named for another market. They inherit their parent's dictionary and only
override what differs, in
`apps/web/src/i18n/{pt-br,es-mx}.overrides.json`. An override equal to its
parent fails the build, so the files stay down to what actually changed.

What changes, and it is always these four things:

- **Currency.** `R$` and `$0 MXN`, never euros. A euro price on a Brazilian
  page reads as a translated page whatever the grammar does.
- **Tax vocabulary.** Brazil issues `notas fiscais` and the module is
  `Faturamento`; Mexico keeps `IVA` and `facturación`, which it already uses.
- **Head terms.** The clinical record is `prontuário eletrônico` in Brazil and
  `expediente clínico` in Mexico, and both have their own URL
  (`/pt-br/funcionalidades/prontuario-eletronico/`). These are the two terms
  worth a slug of their own; the rest of the catalogue inherits.
- **Everyday words.** `celular` not `telemóvel`/`móvil`, `computadora` not
  `ordenador`, `contador` not `contabilista`/`gestoría`, `tela` not `ecrã`,
  `por padrão` not `por omissão`, and no enclitic pronouns in Brazilian copy
  (`nos escrever`, not `escrever-nos`).

Blog posts are inherited too: `/pt-br/blog/` serves the Portuguese posts under
Brazilian URLs, which is what hreflang is for. Writing
`blog/pt-br/<same-filename>.md` overrides that one post and leaves the rest
inherited, so a Brazilian rewrite of the migration guide does not hide the
other four.

Two things that stay Spanish and Portuguese from Spain and Portugal: the
`/es/` and `/pt/` copy. The variants are additions, not replacements.

## The words the profession actually uses

A post written in the vocabulary of a translator, not of a practice,
reads as imported however correct the grammar is. These are the terms
that give it away, and they are not optional:

| | ES | EN | FR | PT | DE | IT | PL |
|---|---|---|---|---|---|---|---|
| Odontograma | odontograma | odontogram / dental chart | odontogramme | odontograma | Zahnschema | odontogramma | diagram zębowy |
| Periodontograma | periodontograma | periodontal chart | parodontogramme | periodontograma | Parodontalstatus | parodontogramma | periodontogram |
| Presupuesto | presupuesto | quote / treatment plan | devis | orçamento | Kostenvoranschlag | preventivo | kosztorys |
| Agenda | agenda | schedule | agenda | agenda | Terminkalender | agenda | kalendarz wizyt |
| Historia clínica | historia clínica | clinical record | dossier clinique | histórico clínico | Patientenakte | cartella clinica | dokumentacja medyczna |
| Gabinete | gabinete | operatory / chair | fauteuil | gabinete | Behandlungsstuhl | riunito | gabinet / fotel |
| Higienista | higienista | hygienist | assistante dentaire | higienista | Dentalhygienikerin / ZFA | igienista | higienistka |
| Recall | recall | recall | relance | recall | Recall | richiamo | zaproszenie na kontrolę |
| El software | software de gestión dental | practice management software | logiciel dentaire | software de gestão | Praxisverwaltungssoftware | gestionale odontoiatrico | program dla gabinetu stomatologicznego |

Two traps specific to the new languages:

- **German has no single word for "clínica".** A dental practice is a
  `Praxis`, and only a large multi-chair centre is a `Klinik`. Writing
  `Klinik` throughout addresses roughly nobody.
- **Italian "studio" is the practice, "riunito" is the chair.** A price
  per chair is `un canone per riunito`, which is the phrasing a dentist
  in Italy recognises from their current contract.
- **Polish `gabinet` is both the practice and the room.** A single-dentist
  practice is a `gabinet stomatologiczny`, which is also the head term
  people search; `klinika` reads as a large multi-chair centre. The chair
  itself is a `fotel`, so a per-chair fee is `opłata za fotel`. Prices go
  in złoty, not euros, or the page reads as translated.

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

**No em dashes in the prose.** Use a comma, a colon, parentheses or a
full stop. The character reads as machine-written to the people most
likely to be evaluating us, and every alternative is clearer anyway. This
applies to every language. (It does not apply to this file, which is an
internal spec, or to a quoted source.)

**No marketing filler.** Nothing opens with "Descubre", "Desbloquea" or
"Potencia", and adjectives do not come in threes. Say the concrete thing:
"docker compose up" beats "una experiencia de instalación sencilla,
rápida y potente".

Everything else — links, code, the sources list — is styled
automatically. Do not hand-write HTML or CSS classes in a post.

## Every post carries images

A post with no image is not finished. It reads as a wall of text however
good the prose is, and it is the single most common thing wrong with what
this loop publishes.

**A comparison gets three visuals**, spread through the piece and never
two in a row: one in the first third, one where the post describes what
the product does, one in the second half.

**A topic post gets two, and they illustrate the reader's problem**, not
the product. The same screenshot works either way, it is the caption
that decides: an invoice list under a paragraph about numbering
continuity is a guide, the same image captioned "our invoicing module"
is an advert in a post that promised to help. The rule about mentioning
the product once, at the end, covers images too.

Markdown only:

```markdown
![Alt text saying what is on screen, in the post's language](/screenshots/dental-chart.png)

*One line telling the reader what they are looking at.*
```

- **The all-italic paragraph straight after an image becomes the
  caption.** That is the only place a paragraph should be entirely
  italic.
- **Alt text describes the screen**, in the post's language. Not
  "captura de Dentalpin".
- **A caption describes only what is visible.** Any claim about the
  product goes in the prose, where the sourcing rule applies to it.
- **Numbered lists already render as numbered cards**, so every
  sequential section is a diagram for free. That is one more reason to
  write the migration and the install as lists.

### The screenshots that exist

In `apps/web/public/screenshots/`, referenced as `/screenshots/<file>`.
They are the demo clinic, so no real patient data. The interface is in
Spanish except where noted, and they are used in every language, the
same way the home page does.

**Only reference a file that exists in that directory — `ls` it before
writing the image line.** A missing screenshot is not a placeholder in a
blog post, it is a broken image on a published page, and this table has
already drifted from the directory once: in August 2026 eleven posts and
the home hero referenced screenshots that were never exported, and every
one shipped broken.

| File | What it shows |
|---|---|
| `home.png` | Home: appointments today, who is in the clinic, overdue payments, recent patients, day timeline |
| `dental-chart.png` | Patient record: odontogram, clinical alerts, active plan, next appointment |
| `budgets.png` | One quote: treatments, totals, validity, linked plan |
| `invoices.png` | Invoice list with issued, paid, part paid, overdue and draft states |
| `patient-timeline.png` | Patient record, activity tab: clinical alerts, active plan, timeline filterable by visits, treatments, financial, communications |
| `ai-copilot.png` | The AI assistant with its workflows. **Interface in English**, so it fits an English post best |
| `patients.png` | Patient record, patient info tab |
| `periodontogram.png` | Periodontal chart with the six sites per tooth |
| `treatment-plan.png` | A treatment plan with its stages |
| `schedule-day.png` | Agenda, day view |
| `schedule-week.png` | Agenda, week view |
| `schedule-canban.png` | Agenda as a board |
| `reports.png` | Reports |

**The seven files listed above as pending were exported on 10 August 2026**
and are in the directory, so the posts that had to describe those screens in
prose can now show them. Nothing is pending today. That does not retire the
rule: `ls` the directory before writing an image line, because this table has
drifted from it in both directions.

Need something not on the list? Take it from the demo, log in as the
demo admin, and drop the PNG in that directory rather than describing
the screen in prose. Exporting one of the pending files above also
unblocks the feature page that waits for it.

### Diagrams

In `apps/web/public/diagrams/`, referenced as `/diagrams/<file>.svg`.
`install-stack.svg` is the self-hosted stack: browser, Caddy, API,
frontend, PostgreSQL.

One SVG serves all six languages, and it only does that if **every
label is a technical token that does not translate**: `Caddy`, `/api/*`,
`Nuxt`, `PostgreSQL`, `:443`. The moment a diagram needs a sentence in
it, it needs six files, and it is not worth it. Say it in prose instead
or use a table.

Add a diagram only where a structure is genuinely hard to describe:
what talks to what, what runs where, what happens in which order. Light
theme colours, taken from `packages/tokens`, because the marketing site
never renders dark.

### Stock photos, when nothing else fits

When no screenshot or diagram illustrates a passage and the post would
otherwise miss its image count, use a royalty-free stock photo:

- **License first.** Only images free for commercial use with no
  attribution required (CC0, or the Unsplash/Pexels/Pixabay licenses).
- **Download it into the repo**, `apps/web/public/photos/<file>.jpg`,
  referenced as `/photos/<file>`. Never hotlink: the remote file can
  change or die under a published page.
- **Record the source** (page URL and license) in a one-line HTML
  comment next to the image in the markdown, so a future licensing
  question has an answer.
- **Pick a photo about the reader's situation**, a front desk, a
  treatment room, paperwork, not a generic smiling patient or a
  close-up of teeth. Screenshots and diagrams still come first; the
  photo is the fallback, not the default.

### What does not go in a post

- **No AI-generated images.**
- **No screenshots of a competitor's product.** They are theirs, they
  go stale, and the comparison does not need them: quote the page and
  link it, which the sourcing rule already requires.

## SEO conventions

- **Quote the title and description in the frontmatter.** Comparison
  titles carry a colon almost every time, and an unquoted colon is a YAML
  parse error that fails the build.
- Slug in the language of the post: `dentalpin-vs-gesden` /
  `dentalpin-vs-gesden`, but `alternativa-open-source-a-X` /
  `open-source-alternative-to-X` / `alternative-open-source-a-X`.
  Translations do not share a filename on purpose — the directory carries
  the language and the filename is the URL, in that language.
- **Translated filenames must be linked with `translationKey`.** hreflang
  is built from it: every translation of a topic post declares
  `translationKey: <the Spanish filename>` in its frontmatter (the Spanish
  post itself needs nothing, its filename is the key). Posts that share a
  filename across directories are linked automatically. Without the key,
  each translation looks like an unrelated article and emits no hreflang,
  which is the state the whole blog was in until August 2026. A comparison
  written in one language only has no translations and needs no key.
- `description` reads as a search result, not a teaser. 140-160 chars.
- One `<h1>` (the title), `##` for the sections above.
- Link to the pricing page and the install post **in the post's own
  language** from every comparison: `/es/precios/`, `/en/pricing/`,
  `/fr/tarifs/`, `/pt/precos/`, `/de/preise/`, `/it/prezzi/`,
  `/pl/cennik/`, `/pt-br/precos/`, `/es-mx/precios/`. A
  Portuguese post linking to `/es/precios/`
  sends the reader to a page they cannot read, and the build's link check
  will not catch it because the page exists.
- Tag with `comparativa` / `comparison` / `comparatif` / `vergleich` /
  `confronto` / `porownanie` plus the vendor slug.

## Two queues, twenty-eight targets a week

The three morning runs (04:00, 08:00 and 11:00 UTC) are **comparisons**.
The afternoon run (16:00 UTC) is a **topic** post. The routine reads the
hour (`date -u +%H`) and picks the queue from it, so every day, weekends
included, produces three comparisons and one guide. The split follows the
work: a comparison is one file, a guide is seven.

The cadence doubled on 30 July 2026 and settled at four daily runs on
3 August 2026. Nine markets at five targets a week is
years of waiting for the newest ones, and the arithmetic below is what it fixed.
What grows is the number of runs, not the work inside a run: one target per
run, still derived from the filesystem, still one queue per run.

### The comparison queue rotates by language

**Do not work down Queue A in file order.** Each comparison run picks the
language with the **fewest published comparisons**, and only then takes
the next unwritten target inside that language's section. Ties break in
this order:

    PL → BR → MX → DE → IT → PT → FR → EN → ES

Skip a language whose section has no unwritten target left, and carry on
with the next.

This is still derivable from the filesystem, so the state rule holds:
count the comparison slugs already published per locale, take the
smallest. Nothing new to keep in sync.

The reason is arithmetic. Queue A holds 91 targets grouped by market:
19 Spanish (Spain, Latin America and Mexico), 20 English, 11 French,
11 Portuguese (Portugal and Brazil), 12 German, 11 Italian, 7 Polish. Taken in
file order at twenty-one comparisons a week, Spanish fills the first week and
the locales that launched most recently, with the emptiest blogs, wait the
longest. Rotating gives every language a comparison
roughly once a month starting from week one, and Polish, German and
Italian lead the tie-break because they are the newest locales and their
blogs are still empty. Polish and Mexican vendors were verified
on 28 August 2026, so neither language is skipped any more. Brazil is not skipped: A5
already holds three verified Brazilian vendors, and their posts belong in
`blog/pt-br/`.

Count comparisons per directory, not per language. `blog/pt/` and
`blog/pt-br/` are two counters, which is what stops Brazil from looking
served because Portugal was.

The old ordering was written when only Spanish and English existed and a
post in the other markets could not rank. All those sections rank now, so
grouping by market is only a way to organise the catalogue, not an
instruction about what to write next.

When the comparison queue runs dry, the morning run takes a topic target too
and the site simply publishes ten topic targets a week. Do
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

Same state rule for both queues: what is published *is* the state. Look
at which slugs already exist and take the next unwritten target. For
Queue B that means the next row down; for Queue A it means the next row
in the language whose turn it is, per the rotation above.

A target counts as done when **every language its row lists** exists.
A comparison in A4 is done the moment the French post exists, because
French is the only language that row lists.

**A run writes all of a target's languages, in that run.** A topic target
produces seven files on the day it comes up, not one file on seven separate
days. Splitting it seven ways would drop each language to one guide every seven
runs.

Two cases produce a subset, and only two:

- **Catch-up.** A target published before a locale existed is still "next" until
  the missing language exists, and that run writes only what is missing.
- **A run that ran out of room.** Seven languages is a lot for one session. A
  run that cannot finish commits what is complete and names the missing
  directories in its summary; because a target is only done when every due
  directory has it, the next run picks the same target and fills the gaps. What
  is never acceptable is claiming a language that was not written, or
  machine-translating one to make the count.

**Polish went live in July 2026 with an empty blog, and German and Italian
started theirs the same month.** Every topic target already published is
therefore "next" until its Polish copy exists, and the first topic runs after
that date are catch-up runs writing one or two files instead of seven. Work down
Queue B from the top, exactly as if the targets were new.

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

## Queue A — comparisons (the 04:00, 08:00 and 11:00 UTC runs)

Every vendor here was verified to exist and to be trading when it was
added — name, site and market evidence. Research each again before
writing: this list is a queue, not a source of facts.

**These sections are a catalogue, not a running order.** What gets
written next is decided by the language rotation in *Two queues*, not by
reading this list top to bottom. Grouping is by market so the vendors sit
next to their competitors, which is what you want when researching one.

Two things the grouping still decides:

- **Order within a language.** Take the earlier section first, then work
  down its rows: Spanish means A1 before A2, and inside each section the
  biggest audience is already at the top.
- **What is out of play.** A vendor whose market speaks a language the
  site does not publish reaches nobody who is choosing between them and
  us. Those vendors sit in the blocked section at the bottom and are
  worth writing only once the site publishes in their language. That
  section is empty today: German and Italian went live in July 2026 and
  every row that was parked in it moved up into A6.

A5 covers Portugal and Brazil together because they share a language.
Spanish is split across A1 and A2 because Spain is the home market and
deserves to be drained first, not because the two need different posts.

### A1 · Spain — the home market

| Target | Slug | Why |
|---|---|---|
| Gesden (Infomed) | `dentalpin-vs-gesden` | Market leader, claims 14.000 clinics |
| Gesden ONE | `dentalpin-vs-gesden-one` | Their cloud product, closest comparison |
| Odontonet | `dentalpin-vs-odontonet` | Dental-only, already ships Verifactu and WhatsApp — the closest competitor we have, so the hardest post to write honestly. **Check their pricing page: they may publish rates, which would make the usual "no publica precios" line wrong here.** |
| Klinikare | `dentalpin-vs-klinikare` | Cloud, claims 2.500+ clinics and 20.000+ professionals over 16 years, ISO 27001, own AI features. Multi-vertical (dental, aesthetics, physio), which is a real difference worth stating rather than a weakness |
| Clinic Cloud | `dentalpin-vs-clinic-cloud` | Cloud-native, SMB. **Checked 14 August 2026: two things this row did not know. It is published by Doctoralia España SL · Doctoralia Internet S.L. and its own *Sobre nosotros* page says "Clinic Cloud forma parte de Doctoralia", so it is a Docplanner-group product, like GipoDental in A7. And it publishes a full four-plan tariff (Mini 29 €, Pro 49 €, Max 79 €, Enterprise "A convenir", all al mes + IVA), so the usual "no publica precios" line is wrong here. The decisive dental detail is in their own plan table: "Odontograma y periodontograma" is absent from Mini, "Consultar" on Pro and included only from Max. The published post is built around that.** |
| Software Dental Julia (Grupo Kalma) | `dentalpin-vs-julia` | `softwaredentaljulia.es`, verified 28 August 2026. Cloud, dental-only, sold in Spain only per its own site. **Publishes prices: Basic 69 €/mes, Advance 78 €/mes (`/tarifas/`), so the usual "no publica precios" line is wrong here** |
| Nubimed | `dentalpin-vs-nubimed` | `nubimed.com`, dental vertical at `/software-clinica-dental/`, verified 28 August 2026. Cloud, multi-vertical medical (dental, physio, psychology, aesthetics), a real difference to state plainly, as with Klinikare |
| DASI | `dentalpin-vs-dasi` | `dasi.es/software-odontologia/`, verified 28 August 2026. 30 years, 700+ clients, Spain and Latin America. Advertises a free tier in its own page title, so it belongs in the `software-clinica-dental-gratis` post too |
| Dendoo | `dentalpin-vs-dendoo` | `dendoo.es`, verified 28 August 2026. Young SaaS on European AWS, 120+ pilot clients. **Publishes prices: 20-50 €/mes (`/planes-precios`)**. Small vendor with no legal entity visible: verify it still trades the run this is written |
| — | `alternativa-open-source-gesden` / `open-source-alternative-to-gesden` | Highest-intent query in the whole space |
| — | `software-clinica-dental-gratis` / `free-dental-practice-software` | Broad head term |

### A2 · Spanish-speaking Latin America — `blog/es/`, and `blog/es-mx/` for Mexico

Mexico has its own directory since July 2026, and the hreflang for Argentina,
Chile, Colombia and Peru points at it. A post aimed at a Mexican reader goes
in `blog/es-mx/` with Mexican vocabulary (expediente clínico, consultorio,
celular, computadora, contador) and pesos. A vendor that sells across the
region without a Mexican pitch stays in `blog/es/`.

| Target | Slug | Why |
|---|---|---|
| Dentalink | `dentalpin-vs-dentalink` | Leader in Chile, strong across LatAm and Spain |
| Doctocliq | `dentalpin-vs-doctocliq` | Dental + medical, positions itself LatAm-wide. **Checked 20 August 2026: it publishes a full four-plan tariff in dollars (Gratis USD 0 with a 30 patients/month limit, Individual USD 19, Básico USD 29, Avanzado USD 49, all al mes), so the usual "no publica precios" line is wrong here. Two more things the row did not know: the legal entity is ZOLUPRO S.A.C. (Peru), and its own terms give a fifteen-day window around cancellation to request your data plus deletion within ninety days. Electronic invoicing is "Disponible para Ecuador y Perú" only. Its tariff and its funcionalidades page disagree on whether consentimientos informados are in the Básico plan or a paid add-on; the published post states both and cites each.** |
| DentalCore | `dentalpin-vs-dentalcore` | Argentina-first, clinical records + AI claims |
| Odontosys | `dentalpin-vs-odontosys` | `odontosys.com` (**the www subdomain does not resolve, always link the apex**), verified 28 August 2026. 25 years, claims 400+ users across 20+ Spanish-speaking countries, cloud on AWS. Argentina-based, sells region-wide, so it stays in `blog/es/` |
| Dentum | `dentalpin-vs-dentum` | Mexico, so `blog/es-mx/`. `dentum.app`, verified 28 August 2026. "Hecho en México", NOM-004 record, prices in pesos on its own site (they render via JS: confirm the figures the run this is written). Formerly DentOS; no legal entity visible |
| Medware OdontoWare | `dentalpin-vs-odontoware` | Mexico, so `blog/es-mx/`. `medware.com.mx`, verified 28 August 2026. 19 years, CFDI 4.0. **Publishes prices: 599-4.499 MXN/mes (`/precios`)**. Multi-vertical ERP vendor; the dental product is OdontoWare, and the post is about that product |
| AgendaPro | `dentalpin-vs-agendapro` | Mexico, so `blog/es-mx/`. `agendapro.com/mx`, verified 28 August 2026. Claims 135.000+ professionals. **Publishes prices: 299-4.500 MXN/mes (`/mx/planes`)**. Heavily multi-vertical (beauty, physio, barbershops) and Chilean in origin: state both plainly, as with Klinikare |
| — | `software-dental-gratis-mexico` | Head term, Mexican phrasing, in `blog/es-mx/`. **Unblocked 28 August 2026: Dentum, Medware OdontoWare and AgendaPro verified from their own sites. None of the three is actually free, and that honest finding is the post.** |

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
| Denticon (Planet DDS) | `dentalpin-vs-denticon` | `planetdds.com`, verified 28 August 2026. Cloud, claims 13.000+ practices. The US cloud incumbent for groups and DSOs |
| CareStack | `dentalpin-vs-carestack` | `carestack.com`, verified 28 August 2026. Cloud all-in-one, claims 3.000+ practices, sells in the US and UK |
| Sensei Cloud (Carestream Dental) | `dentalpin-vs-sensei-cloud` | `gosensei.com`, verified 28 August 2026. Carestream Dental's cloud PMS, a separate brand from its imaging line: cite it as Sensei by Carestream Dental |
| Practice-Web | `dentalpin-vs-practice-web` | `practice-web.com`, verified 28 August 2026. Since 1988, claims 1.700+ clients. **Publishes prices: 149-322 $/month (`/pricing`)**. Shares code lineage with Open Dental, which makes it the natural second post for the open-source angle: verify how they state that relationship themselves before repeating it |
| tab32 | `dentalpin-vs-tab32` | `tab32.com` (**www redirects to the apex**), verified 28 August 2026. Cloud, claims 1.000+ practices in 40+ states. **Publishes prices (`/pricing/`)** |
| Archy | `dentalpin-vs-archy` | `archy.com`, verified 28 August 2026. Cloud, claims 32.000+ active users, "replace 5+ products with one" pitch: the consolidation argument, met head-on |
| ABELDent (ABELSoft) | `dentalpin-vs-abeldent` | `abeldent.com`, verified 28 August 2026. Canada-first, claims 5.000+ practices, sells both cloud and on-premise, which is our own deployment argument stated by them |
| Aerona | `dentalpin-vs-aerona` | `aerona.com`, verified 28 August 2026. Cloud, UK and Ireland, claims 6.000 users |
| ClearDent | `dentalpin-vs-cleardent` | `cleardent.com`, verified 28 August 2026. Canada only, 20+ years, cloud, on-premise and hybrid, data hosted in Canada |
| Systems for Dentists | `dentalpin-vs-systems-for-dentists` | `sfd.co` (**sfd.co.uk serves a bad certificate, always link sfd.co**), verified 28 August 2026. UK, 30+ years, cloud and on-premise |
| Oryx | `dentalpin-vs-oryx` | `oryxdental.com` (**the old oryxdentalsoftware.com 301-redirects here, link the new domain**), verified 28 August 2026. Cloud, claims 15.000+ clinicians. **Publishes prices (`/pricing/`)** |
| iDentalSoft | `dentalpin-vs-identalsoft` | `identalsoft.com`, verified 28 August 2026. Cloud, claims 2.300+ dentists. **Publishes prices (`/dental-software-pricing`)** |

### A4 · France — French posts rank here

Unblocked: the site publishes in French since July 2026. **These are
written in French only** — see *Which languages a post gets written in*.

Every row below was reached at the vendor's own domain on 29 July 2026.
The claims in the "Why" column are what the vendor says about itself and
are a reason to write the post, not a fact to reuse: re-source them the
run you write.

| Target | Slug | Why |
|---|---|---|
| Julie (Julie Solutions) | `dentalpin-vs-julie` | The incumbent. `julie.fr`, RCS 838 336 246, trading since 1983, self-describes as "un des leaders sur le marché des logiciels de gestion". **Checked 10 August 2026: LOGOSw has acquired Julie and says so itself — `logosw.net/faq` asks "Pourquoi LOGOSw a racheté Julie ?" and states "le logiciel JULIE reste maintenu et continue d'évoluer". The published post carries this. `julie.fr`'s own mentions légales still name no parent group, so cite the acquisition to logosw.net, not to Julie.** The Henry Schein guard still holds: no vendor publishes who the seller was, so **do not repeat the Henry Schein attribution that circulates in aggregators** — nor the "Logjia" entity name, which only a trade publication reports. |
| LOGOSw | `dentalpin-vs-logosw` | `logosw.net`. Claims "Premier logiciel agréé 100% Santé, EBDi", which is a real French-specific compliance angle we should meet head-on |
| Veasy (Groupe Visiodent) | `dentalpin-vs-veasy` | `veasy-solution.com` / `visiodent.com`. Cloud-only, sold since 2018, claims "plus de 7 000 utilisateurs"; the group claims 10.000 chirurgiens-dentistes and 500 centres. Acquired by Cegedim in Feb 2024 per Visiodent's own site — the closest French analogue to the cloud-versus-your-server argument |
| Desmos (Orisha Healthcare) | `dentalpin-vs-desmos` | `healthcare.orisha.com`. Web-only, claims "plus de 8000 utilisateurs au quotidien" and "le logiciel le plus utilisé en centre dentaire". Strong in centres de santé, which is a different buyer from a two-chair cabinet. **Checked 13 August 2026: the "8000 utilisateurs" figure is not on their site today and was not reused. What they publish now is "600 centres de santé déjà équipés" (with "plus de 700 centres équipés" further down the same page) and, on the cabinet page, "plus de 18 000 professionnels de santé" for their dental solutions as a whole. Two things the row did not know: the Centre Dentaire page publishes "Engagement de 48 mois" next to "Tarif sur devis", which is a published contract length with no published price, and the patient portal and quote follow-up are sold as options rather than in the base. The published post is built around both.**|
| Doctolib Pro | `dentalpin-vs-doctolib` | Enormous brand recognition with French dentists. **Scope it first: establish from doctolib.fr whether Doctolib Pro is a full practice management system for dentists or booking plus agenda, and say exactly which.** Same treatment as NexHealth in A3 — if it is a layer, not a PMS, that is the post |
| CS Trophy Gestion (Carestream Dental) | `dentalpin-vs-trophy-gestion` | `carestreamdental.com/fr-fr`, verified 28 August 2026. Desktop PMS tied to the Carestream imaging ecosystem, Sesam Vitale and 100% Santé. No discontinuation notice on its page, but check that first: the vendor's visible push is toward Sensei Cloud. **Skipped on 3 September 2026: the whole `carestreamdental.com` domain sits behind a Cloudflare JS challenge and returned HTTP 403 to every request that run, on the fr-fr home page, the product page and a PDF on their own `globalassets` path. A headless Chromium could not be used as the fallback either, because the browser cannot negotiate TLS through this session's egress relay. The product page URL is `/fr-fr/discover/practice-management-software/cs-trophy-gestion/`. Retry it; if the challenge still blocks the run, skip again rather than sourcing this vendor from anywhere else.** **Retried 4 September 2026: still HTTP 403 on that product page. Skipped again, and the run took Matisse instead. Two consecutive blocks now; if a third run cannot reach it, consider parking the row rather than retrying every rotation.** **Parked 5 September 2026: third consecutive block, HTTP 403 on both `/fr-fr/` and the product page. The row is parked, not deleted: stop retrying it every French rotation, and revive it only if someone reports the domain answering again. The run took Dentra instead.** |
| Weclever Dental | `dentalpin-vs-weclever` | `weclever-dental.com`, verified 28 August 2026. 100% cloud, HDS, claims 2.000+ chirurgiens-dentistes. **Publishes prices: 68 €/mois par praticien (`/tarifs/`)**. **Checked 3 September 2026: the MacDent line in this row was wrong. Their own *Notre histoire* page says the group still publishes both, "le groupe Dentalvia Medilor, éditeur des logiciels Weclever Dental (anciennement Ecoodentist) et MacDent", with an agreed reseller network for both names across France, so MacDent is a sibling product and not an absorbed one. `macdent.fr` itself could not be reached that run (connection reset), so nothing about that domain was reused. Four more things the row did not know. The published tariff is per praticien with assistantes included, which is the number that decides the post: 68 € for one practitioner, 272 €/month for four. The HDS claim on the home page names no hébergeur and no certificate number, and the privacy policy cites only "L'hébergeur de DENTALVIA"; the mentions légales name Hostinger, but that is the marketing site's host and was deliberately not used as a claim about patient data. Ségur, SESAM-Vitale, odontogramme and parodontogramme appear on none of the pages consulted, though télétransmission, ADRI and APCV do, so the published post scopes each of those to "non nommé sur les pages consultées" rather than asserting absence. The page also carries a rare published service figure, "Temps de réponse hotline 5 minutes (temps moyen constaté 2023)", and fourteen named imaging bridges.** |
| Matisse (Substances Actives) | `dentalpin-vs-matisse` | `matisse-dentaire.com`, verified 28 August 2026. Since 2003, hybrid local server + cloud, HDS, ISO 27001. **Checked 4 September 2026: five things this row did not know. "Since 2003" is the product's heritage, not the publisher's: `notre-histoire` dates the first version to 2003 under the name Dentavie, the rename to Matisse to 2010, and states "Reprise par Substances Actives" in 2020 followed by a full re-architecture. The visible copy publishes no price anywhere, and the boutons "Essayer gratuitement" and "Démarrer gratuitement" all route to a fifteen-minute Calendly demo rather than a trial, but the home page's schema.org JSON-LD declares `"price": "75.00"`, `"priceCurrency": "EUR"` with no period, no unit and no scope: cite it as a published figure that computes nothing, never as a monthly rate. The strongest French compliance angle is theirs and it is in that same JSON-LD, "Certification LAP avec Vidal et Ordoclic" and "Agréé Ordonnance Numérique (1 des 2 seuls logiciels dentaires en France)", the second being a market-wide claim to quote and not repeat. The backup frequency is stated three ways on their own site (FAQ "chaque nuit", cloud-hybride page "quotidiennes" then "toutes les 4 heures"), and the HDS claim names no hébergeur and no certificate number, so the mentions légales' OVH is the marketing site's host and was deliberately not used as a claim about patient data. No install-base figure appears on any page consulted (the home page's "des cabinets satisfaits" stat renders with no number); named client practices with dates are all they publish. The +20 % devis, −33 % no-shows and +3h/week figures are theirs and are scoped on their own site to "constaté en moyenne chez les cabinets équipés Matisse", with no method published.** |
| Dentra | `dentalpin-vs-dentra` | `dentra.fr`, verified 28 August 2026. 100% cloud, hosted in France. **Publishes prices: 49-149 €/mois on the home page**. Small and young, no legal entity visible: verify it still trades the run this is written. **Checked 5 September 2026: the site is up and the tariff holds (Essentiel 49 €, Professionnel 89 €, Cabinet 149 €, all /mois HT, 14-day trial without a card, "0 € Frais d'installation"). Six things the row did not know, and they are why this post went out as a PR rather than straight to main. The mentions légales are an unfilled template: "Dentra SAS" is named but the capital, address, RCS, SIRET, TVA, directeur de publication and DPO address are all still gabarit tokens in square brackets, the page is dated "Janvier 2026", and the footer phone on every page is "01 23 45 67 89". The hébergeur those mentions name is "Lovable Cloud" with data "dans des centres de données situés dans l'Union Européenne", while the product pages say "Hébergé en France", "Hébergement HDS" and "Archivage 10 ans HDS ... sur infrastructure souveraine": no hébergeur certifié and no certificate number appear anywhere, and no "Lovable" entry was found in the ANS list of certified HDS hébergeurs that day. SESAM-Vitale is claimed two incompatible ways ("CCAM, NGAP et SESAM-Vitale intégrés" on the home page, "sans jamais remplacer votre flux SESAM-Vitale" in the conformité block) with no agrément, number or CNDA date named. The install base is claimed two incompatible ways too, and one of them is to their credit: the home page says "Nous préférons annoncer ce que le logiciel fait réellement plutôt que des chiffres invérifiables. Les premiers retours de cabinets pilotes seront publiés ici", while *Fonctionnalités* and *À propos* both say "des centaines de praticiens". Their CGV art. 10 publishes a 30-day export window after cancellation, which almost no competitor in any market does and which the post credits. And `/sesam-vitale/`, `/portail-patient/` and `/conformite-2026/` are client-rendered: the server returns the home document byte for byte, so nothing can be sourced from them. No parodontogramme and no public API documentation on any page consulted.** |
| — | `logiciel-dentaire-gratuit` | Head term. Native post, French vendors, not a translation of the Spanish one |
| — | `alternative-open-source-a-julie` | Highest-intent French query in the space |

Checked 28 August 2026 and **not** added: MacDent (absorbed, `macdent.fr`
redirects to Weclever), e-dent (Belgian software for the Belgian market),
and Galaxie (`openxtrem.com`, aimed at multidisciplinary centres de santé,
not cabinets dentaires).

The French e-invoicing reform is the local counterpart to Verifactu and
belongs in Queue B as its own French post, not as a translation of the
Verifactu one.

### A5 · Portuguese — Portugal in `blog/pt/`, Brazil in `blog/pt-br/`

Unblocked: the site publishes in Portuguese since July 2026. **These are
written in Portuguese only.**

**`/pt/` keeps the neutral register; `/pt-br/` does not.** The shared
Portuguese copy still avoids the words that split the two (ecrã/tela,
telemóvel/celular, ficheiro/arquivo, utilizador/usuário, equipa/equipe,
faturação/faturamento) and uses the European spelling where no neutral form
exists (`contacto`). That rule applies to anything written in `blog/pt/`,
because it is read in both countries.

A post written for Brazil goes in `blog/pt-br/` and is written in Brazilian
Portuguese without hedging: celular, tela, arquivo, usuário, faturamento,
prontuário, `contato`, prices in reais, no enclitic pronouns. Same filename
as the parent post means it replaces that one post under `/pt-br/` and leaves
the rest inherited, which is how a Brazilian rewrite of a guide ships without
touching Portugal.

**One queue, ordered by opportunity, and that puts Brazil first.** There
is no separate Portuguese and Brazilian section, the same way A2 does not
split Spain from Latin America. Brazil is the larger dental market by a
wide margin and the vendors' own numbers say so: Clinicorp claims
100.000+ active users where NewSoft claims 2.000 clinics. Working down
this list in order means the biggest audience gets served first, which
was not true while Portugal sat at the top for no reason other than
having been added second.

What the country still decides is one line per post: the **search
vocabulary in the title and description**. "Software de gestão para
clínicas dentárias" reads Portuguese, "software odontológico" reads
Brazilian, and each post should use whichever its vendor's customers
type. That is a per-post choice, not a reason to split the queue.

| Target | Why |
|---|---|
| Simples Dental | Brazil, so `blog/pt-br/`. 60.000+ dentists in BR, 80.000+ across LatAm |
| Clinicorp | Brazil, so `blog/pt-br/`. Claims 100.000+ active users |
| Dental Office | Brazil, so `blog/pt-br/`. 25 years, ~40.000 dentists |
| NewSoft DS (Imaginasoft) | Portugal. `imaginasoft.pt`, claims 30 years, "+2000 clínicas", "+6800 licenças" |
| Doctusware (Imaginasoft) | Portugal. `doctusware.pt`, cloud-only. Same publisher as NewSoft, so the post has to explain how the two differ. **Checked 11 August 2026: two corrections to this row. The "desde 1997" in the site footer is Imaginasoft's heritage, not the product's: `sobre_nos.html` dates the Doctusware project to 2017 and states "Em 2025 a Imaginasoft adquire a Certain Cypher e o projeto DOCTUSWARE". And it is one of the very few vendors in any market that publishes a full tariff (35 €/mês with 3 users, +8 €/mês each additional), so the usual "não publica preços" line is wrong here. The published post carries both.** |
| Codental | Brazil, so `blog/pt-br/`. `codental.com.br`, verified 28 August 2026. Cloud, dental-only, claims 20.000+ dentists. **Publishes prices (`/preco`). Checked 31 August 2026: the range in this row was short. There are three plans, not two: Essencial R$ 89,90, Controle R$ 134,90 and Avançado R$ 179,90 al mês, with 10% off annually, no implementation fee and "Sem fidelidade". Four things the row did not know. The plan gate is the number of agendas ("1 agenda/dentista", "Até 3 agendas", "Agendas ilimitadas"), which is what makes the post. WhatsApp, SMS and Serasa lookups are billed per unit on top of any plan. The home page labels "NOTA FISCAL INTEGRADA" and "CODENTAL cobranças" as "Em breve", so neither vendor emits NFS-e today. And no periodontograma is named anywhere on their product pages; their own blog treats the word as a synonym for odontograma. The published post carries all four, sourced separately.** |
| BlueDental (Morelli) | Brazil, so `blog/pt-br/`. `bluedental.com.br`, verified 28 August 2026, CNPJ 65.441.255/0001-35. Markets itself as 100% free, funded by Morelli (orthodontics supplier): the one genuinely free vendor found in any market, so it anchors the `software-odontologico-gratuito` head term, and the free-versus-free comparison has to be careful and fair, as with Appuntoo |
| INTELIDENTE (Grupo LUME) | Brazil, so `blog/pt-br/`. `intelidente.com`, verified 28 August 2026. 100% online, 8+ years, unlimited professionals, pricing "proportional to patient volume" with no figures |
| Clínica nas Nuvens (Bionexo) | Brazil, so `blog/pt-br/`. `clinicanasnuvens.com.br`, verified 28 August 2026. Claims 35.000+ users. Multi-vertical (dental, psychology, general medicine): state it plainly |
| `software-odontologico-gratuito` | Head term, Brazilian phrasing, in `blog/pt-br/`. Native post naming Brazilian vendors, not a translation |
| `software-gestao-clinica-dentaria-gratis` | Head term, Portuguese phrasing. A different query in the same language, not a variant of the row above |

Checked and **not** added: Globalsoft (Oralcloud, Portugal). Its site
returned HTTP 403 on 29 July 2026 and could not be verified from a page
it publishes. It goes in the queue the day it can be. Also checked
28 August 2026 and not added: Odontobox (`odontobox.com.br` does not
resolve), iDent (`ident.com.br` is a dental education platform, not a
PMS), DentalSpeed (resells Simples Dental, no PMS of its own), and
EasyDental (`easydental.com.br` returned HTTP 403 twice; retry with a
real browser before adding).

### A6 · Germany — German posts rank here

Unblocked: the site publishes in German since July 2026. **These are
written in German only**, and one post covers Germany, Austria and
German-speaking Switzerland.

Every row below was reached at the vendor's own domain on 30 July 2026.
None of them published a price there except ivoris, which turned out to
publish a full tariff PDF; see that row. The claims in the "Why" column
are what the vendor says about itself, or a market figure that still has
to be re-sourced the run the post is written.

| Target | Slug | Why |
|---|---|---|
| Dampsoft (DS-Win / DS4) | `dentalpin-vs-dampsoft` | `dampsoft.de`. The incumbent, family-owned since 1986. Publishes two products on its own site: DS-WIN on-premise and DS4 web-based, which is our cloud-versus-your-server argument stated by them. **The "market leader" line comes from third parties, so either source it from a KZBV figure or drop it.** |
| CGM Z1.PRO (CompuGroup Medical) | `dentalpin-vs-cgm-z1` | `cgm.com/deu_de`. Sells Z1.PRO for practices and HIGHDENT PLUS for university clinics and group practices. Its own page says a standard price is "not possible" because every practice is individual, which is the cleanest published quote on pricing opacity we have in any market |
| charly (solutio) | `dentalpin-vs-charly` | `solutio.de`, solutio GmbH & Co. KG. Sells through `solutioshop.de` and offers a free demo. **The domain `charly.de` does not resolve, always link solutio.de** |
| EVIDENT | `dentalpin-vs-evident` | `evident.de`, EVIDENT GmbH. Claims over 50 years and a modular build that "grows with your requirements", so the module argument has to be made on substance, not on the word |
| ivoris (Computer konkret AG) | `dentalpin-vs-ivoris` | `ivoris.de`. Splits into ivoris dent, ortho and clinic. A per-speciality split is a real difference from one product with modules. **Checked 13 August 2026: the "none of them published a price" line above is wrong for this row. `ivoris.de/preise/` redirects to a full price list PDF (`2026-7-preisliste.pdf`, valid 1.7. to 31.8.2026) with a monthly rent for every product, module and service. It is the only German vendor in A6 that does, and the published post is built around it.** |
| LinuDent (PHARMATECHNIK) | `dentalpin-vs-linudent` | `linudent.de`. Verify what it is before writing: PHARMATECHNIK's roots are pharmacy software, and the size of the dental line is the first thing to establish |
| DENSoffice (DENS GmbH) | `dentalpin-vs-densoffice` | `zahnarztsoftware.de` (yes, DENS GmbH operates that generic domain), verified 28 August 2026. **Checked 3 September 2026: three corrections to this row. DENSvisuell is not patient education, it is the "Detailbefundung mittels moderner Zahngrafik", i.e. the charting module; patient education is DENS.marketing. The user count is on their own site after all: "Mittlerweile verwenden über 2000 Zahnarztpraxen in ganz Deutschland das leicht erlernbare und effektive Praxisverwaltungsprogramm DENSoffice" on `/gute-gruende-fuer-dens/`. And "no published prices" is wrong here: there is no price page, but the home page links three PDFs, and the Sonderangebot one is an order form quoting 9.900 € Aktionspreis (regulär 13.900 €) plus 290 €/Monat Lizenzgebühr, with a full module list. The two others price support and training by the hour. What is genuinely absent is any system requirements page, so Windows-only cannot be stated from their site; the published post says so rather than guessing.** |
| dios ZX (Spitta GmbH) | `dentalpin-vs-dios-zx` | `dios.de`, a brand of Spitta GmbH, verified 28 August 2026. Sells dios ZX for billing and practice management; its historic strength is hygiene documentation (dios MP), so establish the PMS's real weight before writing |
| teemer (ARZ.dent GmbH) | `dentalpin-vs-teemer` | `teemer.de`, verified 28 August 2026. 100% cloud, from anamnesis to billing, part of the ARZ Haan group. **Checked 5 September 2026: two things this row had wrong and three it did not know. "No published install base" is wrong: the FAQ answers "Wieviele Anwender hat die teemer Praxissoftware mittlerweile?" with "Wir sind stolz seit geraumer Zeit die 500er-Marke geknackt zu haben", and that is users, not practices. "Young product" is wrong too: the same FAQ says "Die teemer Praxissoftware ist bereits seit 2014 als erste cloudbasierte Lösung bei der KZBV zugelassen", which is the strongest single line any German vendor in A6 publishes and the thing the post has to concede up front. `/faq/` is where this vendor puts everything worth having, not the product pages. It is not quite pure cloud: a "leistungsfähiger PC" in the practice runs their healthconnect encryption layer, and "Klardaten verlassen niemals die Praxis". No euro figure anywhere, but the formula is published (one-off setup, then monthly per Behandler excluding Prophylaxe and per connected Standort), and so is the commitment: two years, auto-renewing by one, six months' notice, which is two and a half years of lead time and is what makes the post. Also stated on their own pages: TI complete, VDDS Media plus Sidexis (Slida), CTAPI, VDDS-RZ, "nicht modular aufgebaut" but Online-Terminbuchung sold as an "(Add-on)", MKG "aktuell noch nicht inkludiert", and a published downtime of 0,213 %. The honest verdict for a German Kassenpraxis is that teemer fits better today, and the published post says so.** |
| ZaWin (Martin Engineering AG) | `dentalpin-vs-zawin` | `zawin.ch`, verified 28 August 2026. Switzerland only, 40+ years, claims 15.000+ daily users, sold as on-premise ZaWin or ZaWin Cloud. The German post already carries into Switzerland; write it for the Swiss reader, prices in CHF |
| — | `zahnarztsoftware-kostenlos` | Head term. Native post naming German vendors, not a translation of the Spanish one |
| — | `open-source-alternative-zu-dampsoft` | Highest-intent German query in the space |

Checked 28 August 2026 and **not** added: stoma-soft (no German site
exists; the only Stomasoft is Czech) and PraxisOne (no reachable vendor
site; `henryscheinone.de` fails TLS). Henry Schein One Austria
(`henryscheinoneaustria.at`, Power.Dent) was seen but not verified: a
candidate for the next extension.

The German e-invoicing mandate is the local counterpart to Verifactu and
belongs in Queue B as its own German post. The dates come from the BMF,
never from the Spanish or French post.

### A7 · Italy — Italian posts rank here

Unblocked: the site publishes in Italian since July 2026. **These are
written in Italian only.**

Every row below was reached at the vendor's own domain on 30 July 2026.
None of the rows as first written published a price, and that line has since
been wrong four times: XDENT publishes a starting price, DentalOpera and Dentus
publish tariffs, and UNO publishes both a licence price and its canoni. Check
the pricing page every run rather than trusting this paragraph.

| Target | Slug | Why |
|---|---|---|
| XDENT (CGM Italia) | `dentalpin-vs-xdent` | `xdent.it`. Claims "more than 8.000 dentists" in Italy and is the only one marketing itself as native on Mac and Windows. Same parent as CGM Z1.PRO in A6, and the two posts must not repeat each other: different product, different market, different page |
| OrisDent Q (OrisLine) | `dentalpin-vs-orisdent` | `orisline.com`. Publishes a whole product family (OrisDent Q, the cloud OrisDent Air, OrisLab Q for labs). A suite sold as one is the closest thing Italy has to our module argument, so meet it head-on |
| GipoDental (GIPO) | `dentalpin-vs-gipodental` | `gipo.it`. **Checked 6 August 2026: the pricing pages exist (`/prezzi`, `/prezzi-gipodental`) and list what each plan contains, but carry no figure, only "Prezzo calcolato individualmente". So the "non pubblica i prezzi" line holds, with that precision.** Ownership: the site's legal entity is Docplanner Italy Srl, and the same group owns MioDottore, which GipoDental integrates with. Verified from their own site |
| AlfaDocs | `dentalpin-vs-alfadocs` | `alfadocs.com`. Cloud-first, positioned around the dentist-patient relationship rather than the back office. A different pitch from ours, which makes "scegli AlfaDocs se" the section that carries the post |
| Appuntoo | `dentalpin-vs-appuntoo` | `appuntoo.com`. Aims at small and medium practices and markets a free tier, so it is the one Italian row where free-versus-free has to be compared carefully and fairly |
| UNO (Dental Trey s.r.l.) | `dentalpin-vs-uno` | `dentaltrey-uno.it`, verified 28 August 2026. 30+ years of dental software, claims 8.000 professionals, cloud ("MyBusiness Cloud"). Dental Trey is first a supplies distributor; the software division is the target. The product is UNO: no product named "Evolution" exists on its site. **Checked 2 September 2026: five things this row did not know. The site sits behind a SiteGround captcha (`sg-captcha: challenge`, HTTP 202 with a 169-byte refresh stub) that defeats a plain fetch: retry with a cookie jar until a 200 comes back, it does within a handful of tries. It publishes both a licence price and canoni, so the "none of them published a price" line above is wrong for this row: licence "a partire da € 1.900 per 3 posti di lavoro" plus Start-Up da € 26,5/mese (max 4 posti), Full da € 76/mese and Full Digital da € 130/mese (posti illimitati), with 12-month financing or a 36-month BNP leasing. The asterisk in their plan table means "Attivabile come add on", and both "Fatturazione elettronica" and "Invio telematico Tessera Sanitaria" carry it on all three plans, so neither Italian obligation is included in any plan: that is what makes the post. `MyBusiness Cloud` is a cloud KPI layer over a product licensed per `posto di lavoro`, not a cloud PMS, so do not write it as cloud-native. And ownership is stated on their own Chi Siamo page, not inferred: "Nel 2015 Dental Trey si è rafforzata grazie all'entrata nel gruppo Henry Schein Inc." and the informatica division "è parte del gruppo internazionale Henry Schein ONE", the same group as Dentrix, Dentally and Software of Excellence in A3.** |
| Windent (Quaderno Elettronico S.r.l.) | `dentalpin-vs-windent` | `quadernoelettronico.it`, verified 28 August 2026. Desktop with mobile access, claims 20.000+ professionals. Aggregators attribute it to Zucchetti while its own site declares Quaderno Elettronico S.r.l.: state ownership only as its own site does. **Checked 3 September 2026: the ownership guard held, no group is named anywhere on their own pages, so nothing was repeated from elsewhere. Five things the row did not know. It publishes prices, so the "none of them published a price" line above is wrong here too: acquisto "a partire da 750€" (with the first fiscal year of fatturazione elettronica up to 1000 documents, Sistema TS, 6 hours of consulenza and 100 SMS credits) plus assistenza "a partire da 200€ /anno" or "a partire da € 50 /mese", two figures that do not reconcile and are both "a partire da". The Italian compliance set is their strong side and is complete: Sistema TS, SDI with ten-year conservazione, and a dedicated Referto FSE 2.0 service whose page states the 31 March 2026 obligation. "Quaderno Online" is remote access to the installed program on their server, not a browser-native cloud PMS: do not write it as cloud. MIA is a paid-looking AI telephone assistant with no published price, like most of the 39 servizi. And no page consulted publishes system requirements, so Windows-only cannot be stated from their site; the published post says so rather than guessing.** |
| DentalOpera (MedicalOpera srl) | `dentalpin-vs-dentalopera` | `dentalopera.it`, verified 28 August 2026. Founded 2017, MedicalOpera srl, Cervignano del Friuli (UD). **Publishes prices: da 88 €/mese on its home page and on `/prezzi/`, so the usual "non pubblica i prezzi" line is wrong here**. **Checked 4 September 2026: two corrections to this row. "100% cloud" is not supported by their own site: the word "cloud" appears on none of the pages consulted, there are no system requirements and no hosting or data location anywhere, so the published post describes it as an account-based gestionale (login on `gest.dentalopera.it`) rather than asserting an architecture the vendor does not state. And the 88 € is a floor, not a price: the same page carries "Nessun modulo nascosto, nessun costo extra per utente" above a MODULI AGGIUNTIVI block of eight unpriced modules, two of which are "Poltrone operative" and "Sedi", and closes with "non abbiamo un listino fisso". Three more things the row did not know. Sistema TS is covered ("Sistema MEF TS: Invio telematico dei dati al Sistema Tessera Sanitaria e MEF") but sits in the same feature list as gestione magazzino, which `/prezzi/` sells as a paid add-on, so whether TS filing is inside the 88 € cannot be told from their pages: the post states both and cites each. Fatturazione elettronica illimitata *is* unambiguously in the base price and FSE is unambiguously an add-on. Clinical depth is real (odontogramma grafico, cartella parodontale, cartella ortodontica, prestazioni per arcata, gestione per riuniti), the only install-base figure is "Già scelto da 600+ studi" on `/agenda-governata/`, onboarding is free, and cancellation is "senza necessità di preavviso".** |
| Dentus (jErgoSoft Srl) | `dentalpin-vs-dentus` | `dentus.it`, verified 28 August 2026. Desktop since 2000, claims 15.000+ clients. **Publishes prices: 33,20-135 €/mese (`/it/prezzi-software-dentale/`)** |
| — | `software-gestionale-dentisti-gratis` | Head term. Native post naming Italian vendors |
| — | `alternativa-open-source-a-xdent` | Highest-intent Italian query in the space |

Checked 28 August 2026 and **not** added: EasyDent (`easydent.it` does
not resolve; the EasyDent that exists is American), and no Italian PMS
named Julia exists (the real Software Dental Julia is Spanish and sits in
A1). FELG Dent (`felgdent.com`, a Polish company with an Italian site,
claims 4.000+ clinics) was reached but its Italian product site was
flaky: a candidate for the next extension.

**Sistema Tessera Sanitaria is the Italian compliance moat.** Every
practice in Italy files patient spending to the STS, and Italian vendors
advertise it as a feature. Establish what Dentalpin does and does not do
there before the first Italian comparison goes out, and say it plainly
either way. It belongs in Queue B as its own Italian post.

### A8 · Poland — Polish posts rank here

Unblocked 28 August 2026: every row below was reached at the vendor's own
domain that day, which is what the rotation was waiting for. **These are
written in Polish only.** One market quirk decides the shape of these
posts: most Polish vendors publish prices, so the "does not publish
prices" line that carries other markets is mostly unavailable here, and
the comparison has to win on deployment, data ownership and openness
instead. Prices go in złoty.

| Target | Slug | Why |
|---|---|---|
| Estomed | `dentalpin-vs-estomed` | `estomed.pl`, verified 28 August 2026. Dental-only, 20+ years, claims 3.500+ clinics, hybrid desktop + cloud + mobile app. **Publishes prices (`/cennik/`): e.g. a Basic licence at 2.000 zł per workstation plus 73 zł/month service** |
| ProDentis (INFOTEL SOFTWARE) | `dentalpin-vs-prodentis` | `prodentis.com.pl`, verified 28 August 2026. Dental-only, 20+ years, claims 3.600+ clients, ISO 9001 and 27001, integrates e-Recepta and e-Skierowanie, which is the Polish compliance moat to meet head-on. **Publishes module prices (`/pl/Pages/Cennik`)** |
| Medfile | `dentalpin-vs-medfile` | `medfile.pl/program-dla-dentysty`, verified 28 August 2026. Cloud SaaS, multi-vertical medical with a dedicated dental module and landing: state that plainly. **Publishes prices in PLN (`/cennik`)** |
| SmartDental (Software Clinic sp. z o.o.) | `dentalpin-vs-smartdental` | `software-clinic.pl`, verified 28 August 2026. Desktop, lifetime licence, written by a practising dentist and positioned against the cloud: the closest Polish analogue to our own self-hosted argument, so the post has to separate "runs on your machine" from "open source" carefully. **Publishes prices (`/cennik-oprogramowania-stomatologicznego.html`)**. **Checked 31 August 2026: the "Windows and Linux" in this row was wrong. Their own requirements page (`/opis-programu-stomatologicznego/oprogramowanie-stomatologiczne-wymagania-sprzetowe.html`) names "Microsoft Windows (wersja 64-bitowa)" with .NET Desktop Runtime 8.0 and mentions neither Linux nor macOS, so Windows-only is the fact. "Zaprojektowany przez lekarza dentystę" is on their home page and did check out. Two more things the row did not know: the licence unit is stated as "Stanowisko = jeden komputer" with modules priced per workstation, and the home page ("Instalacja i migracja danych w cenie") contradicts the cennik (first hour of remote install free, 300 zł/h after). The published post carries both, sourced separately.** |
| Proassist | `dentalpin-vs-proassist` | `proassist.pl/wybor-dla/stomatologia/`, verified 28 August 2026. Cloud, multi-vertical, claims 670+ medical facilities, bundles an outsourced phone reception service, which is a real difference worth stating. **Checked 31 August 2026: three things this row did not know. It publishes a full tariff (`/cennik/`) billed per *kalendarz*, meaning per specialist schedule: 139 zł netto for the software, 174 zł with the chatbot (promo, regular 209 zł, promo runs to end of December 2026), 559 zł standard and 839 zł premium for phone reception, all net of 23% VAT, plus per-unit SMS, telemedicine and API charges. The wording on the two reception plans ("+ oprogramowanie medyczne + chatbot") does not say outright whether the software is included or added, and the published post says so rather than guessing. It carries the full set of Polish central integrations we lack (System P1 with automatic zdarzenia medyczne reporting, eWUŚ, e-ZLA, KSeF, fiskalizacja), and it publishes an unusually concrete security page: two physical servers in Polish data centres, daily backups in a separate process, tested restores, external pentests, PN-EN ISO 13606-4:2019-08, and free admin, accounting and reception accounts. No parodontogram is named on any product page consulted; the dental depth claim is scoped to that. The honest verdict for a Polish practice issuing e-Recepty is that they fit better today, and the published post says so.** |
| — | `darmowy-program-dla-gabinetu-stomatologicznego` | Head term. Native post naming Polish vendors, not a translation |
| — | `alternatywa-open-source-dla-estomed` | Highest-intent Polish query in the space |

Checked 28 August 2026 and **not** added: Gabos (`gabos.com.pl` is alive
but shows no dental product). FELG Dent (`felgdent.com`) is Polish, was
reached and claims 4.000+ clinics, but publishes no prices there and its
product site was flaky: a candidate for the next extension.

The KSeF row in Queue B is the Polish compliance post this section makes
newly urgent: the vendors above advertise e-Recepta and EDM integration,
and the comparison pages will want to link it.

### A9 · Blocked on language — do not write these yet

Real vendors, real markets, and a post in a language we publish reaches
almost none of the people choosing between them and us. Move a row up
into its own section when the site publishes in that language.

**This section is empty.** The three German rows that lived here moved
into A6 when the site started publishing in German. The rule stays: a
vendor whose buyers search in a language we do not publish goes here, not
into a section it cannot rank in.

## Queue B — topics (the 16:00 UTC run)

Ordered by intent. Work down it; the top of this list is where a clinic
is closest to needing what we sell.

**These go out in every language the site publishes**, except where the
row says otherwise. The two regional variants are the exception that is not
worth a column: they inherit the parent's post, and a variant only gets its
own file when the market changes the answer (currency, tax, regulator). The problems are the same in Madrid, Lyon, Munich,
Milan and Manchester, and there is no competitor claim to re-verify per
copy.

The exception is the rows marked **country-locked**. Compliance is
national: the Spanish, French, German and Italian rows below are
different posts with different law, different deadlines and different
official sources, not translations of each other.

| Topic | Slug (es / en / fr / pt / de / it, or the directory when the row is country-locked) | Target search |
|---|---|---|
| Verifactu para clínicas dentales: qué cambia y cuándo | `verifactu-clinicas-dentales` / `verifactu-dental-clinics-spain` / — / — / — / — | verifactu clínica dental · **country-locked: ES** |
| Facturation électronique 2026 : ce que le cabinet dentaire doit préparer | — / — / `facturation-electronique-cabinet-dentaire` / — / — / — | facturation électronique dentiste · **country-locked: FR**, the local counterpart to the Verifactu row. Source the PDP obligations and dates from the official French sources, never from the Spanish post |
| E-Rechnung: was die Zahnarztpraxis vorbereiten muss | — / — / — / — / `e-rechnung-zahnarztpraxis` / — | e-rechnung zahnarztpraxis · **country-locked: DE**, the German counterpart to the Verifactu row. Source the obligations and the dates from the BMF, never from the Spanish or French post |
| Fatturazione elettronica e Sistema Tessera Sanitaria nello studio odontoiatrico | — / — / — / — / — / `fatturazione-elettronica-studio-odontoiatrico` | fatturazione elettronica dentista · **country-locked: IT**. Two obligations in one post: SDI invoicing and the STS filing. Source from Agenzia delle Entrate and sistemats.it, and state plainly what Dentalpin does and does not do for the STS |
| Prontuário eletrônico odontológico: o que a lei brasileira exige | `prontuario-eletronico-odontologico` in `blog/pt-br/` | prontuário eletrônico odontológico · **country-locked: BR**. Lei 13.787/2018, Resolução CFO-91/2009 (NGS2 and ICP-Brasil) and LGPD arts. 5º II and 11. Source from Planalto, the CFO transparency portal and SBIS, never from the Spanish or Portuguese post. **Written: 30 July 2026** |
| Expediente clínico dental en México: qué exige la NOM-004 | `expediente-clinico-dental-nom-004` in `blog/es-mx/` | expediente clínico dental · **country-locked: MX**. NOM-004-SSA3-2012 plus the LFPDPPP published 20 March 2025, which abrogated the 2010 law and moved data protection from the extinct INAI to the Secretaría Anticorrupción y Buen Gobierno. **Written: 30 July 2026** |
| CFDI 4.0 en el consultorio dental: qué tiene que salir del software | `cfdi-consultorio-dental` in `blog/es-mx/` | facturación electrónica dentista · **country-locked: MX**, the Mexican counterpart to the Verifactu row. Source from the SAT, and state plainly that Dentalpin does not stamp CFDI today |
| Nota fiscal eletrônica na clínica odontológica | `nota-fiscal-clinica-odontologica` in `blog/pt-br/` | nota fiscal clínica odontológica · **country-locked: BR**, the Brazilian counterpart. Municipal ISS rules differ by city, so establish what is federal and what is not before writing |
| RGPD en la clínica dental: qué exige con los datos de pacientes | `rgpd-clinica-dental` / `gdpr-dental-clinic` / `rgpd-cabinet-dentaire` / `rgpd-clinica-dentaria` / `dsgvo-zahnarztpraxis` / `gdpr-studio-dentistico` | rgpd clínica dental |
| Cómo migrar de software dental sin perder la historia clínica | `migrar-software-dental` / `migrate-dental-software` / `migrer-logiciel-dentaire` / `migrar-software-dentario` / `zahnarztsoftware-wechseln` / `cambiare-gestionale-dentistico` | migrar software dental |
| Qué preguntar a tu proveedor antes de firmar | `preguntas-antes-de-firmar-software-dental` / `questions-before-signing-dental-software` / `questions-avant-de-signer-logiciel-dentaire` / `perguntas-antes-de-assinar-software-dentario` / `fragen-vor-dem-kauf-zahnarztsoftware` / `domande-prima-di-firmare-gestionale` | contratar software dental |
| Cuánto cuesta de verdad un software de clínica dental | `cuanto-cuesta-software-clinica-dental` / `dental-software-cost` / `prix-logiciel-dentaire` / `quanto-custa-software-clinica-dentaria` / `was-kostet-zahnarztsoftware` / `quanto-costa-un-gestionale-dentistico` | precio software clínica dental |
| Nube o servidor propio para una clínica dental | `nube-o-servidor-clinica-dental` / `cloud-or-self-hosted-dental` / `cloud-ou-serveur-cabinet-dentaire` / `cloud-ou-servidor-proprio-clinica-dentaria` / `cloud-oder-eigener-server-zahnarztpraxis` / `cloud-o-server-proprio-studio-dentistico` | software dental en la nube |
| Copias de seguridad en una clínica dental: qué guardar y cada cuánto | `copias-seguridad-clinica-dental` / `dental-clinic-backups` / `sauvegardes-cabinet-dentaire` / `copias-seguranca-clinica-dentaria` / `datensicherung-zahnarztpraxis` / `backup-studio-dentistico` | copia seguridad clínica dental |
| Cómo reducir las ausencias a citas en la clínica | `reducir-ausencias-citas-dental` / `reduce-dental-no-shows` / `reduire-rendez-vous-non-honores` / `reduzir-faltas-a-consultas` / `terminausfaelle-zahnarztpraxis-reduzieren` / `ridurre-le-mancate-presentazioni` | ausencias citas dental |
| Recordatorios de cita por WhatsApp: qué permite la normativa | `recordatorios-cita-whatsapp-dental` / `whatsapp-appointment-reminders-dental` / `rappels-rendez-vous-whatsapp-dentaire` / `lembretes-de-consulta-whatsapp` / `whatsapp-terminerinnerungen-zahnarztpraxis` / `promemoria-appuntamenti-whatsapp` | recordatorios cita whatsapp |
| SMS, WhatsApp o email: costes reales y entregabilidad de los recordatorios | `sms-whatsapp-email-recordatorios` / `sms-whatsapp-email-reminders` / `sms-whatsapp-email-rappels` / `sms-whatsapp-email-lembretes` / `sms-whatsapp-oder-email-erinnerungen` / `sms-whatsapp-email-promemoria` | canal recordatorios citas · The WhatsApp row above covers the rules; this one covers cost per message and deliverability, and must not repeat it |
| Odontograma digital: qué debe registrar y por qué | `odontograma-digital` / `digital-odontogram` / `odontogramme-numerique` / `odontograma-digital` / `digitales-zahnschema` / `odontogramma-digitale` | odontograma digital |
| Presupuestos dentales con firma digital: validez y flujo | `presupuestos-dentales-firma-digital` / `dental-quotes-digital-signature` / `devis-dentaire-signature-electronique` / `orcamentos-dentarios-assinatura-digital` / `kostenvoranschlag-digitale-signatur` / `preventivi-dentali-firma-digitale` | presupuesto dental firma |
| Historia clínica electrónica: qué exige la ley en España | `historia-clinica-electronica-dental` / `electronic-dental-records-spain` / — / — / — / — | historia clínica electrónica · **country-locked: ES** |
| Abrir una clínica dental: el software que necesitas desde el día uno | `abrir-clinica-dental-software` / `opening-dental-clinic-software` / `ouvrir-cabinet-dentaire-logiciel` / `abrir-clinica-dentaria-software` / `zahnarztpraxis-eroeffnen-software` / `aprire-uno-studio-dentistico-software` | abrir clínica dental |
| Cómo dimos a un LLM acceso de escritura a datos clínicos sin que sea una locura | `llm-escritura-datos-clinicos` / `llm-write-access-medical-data` / `llm-acces-ecriture-donnees-cliniques` / `llm-escrita-dados-clinicos` / `llm-schreibzugriff-klinische-daten` / `llm-accesso-in-scrittura-dati-clinici` | *(technical, EN-first — HN/Reddit material)* |
| Autoalojar software sanitario: lo que nadie te cuenta | `autoalojar-software-sanitario` / `self-hosting-healthcare-software` / `auto-heberger-logiciel-sante` / `alojar-software-de-saude-no-seu-servidor` / `gesundheitssoftware-selbst-hosten` / `self-hosting-software-sanitario` | *(self-hosted / r/selfhosted)* |
| Cómo organizar la agenda con varios sillones | `organizar-agenda-clinica-dental` / `dental-clinic-scheduling` / `organiser-agenda-cabinet-dentaire` / `organizar-agenda-clinica-dentaria` / `terminplanung-zahnarztpraxis` / `organizzare-agenda-studio-dentistico` | agenda clínica dental |
| Lista de espera: llenar los huecos de última hora | `lista-espera-clinica-dental` / `dental-cancellation-list` / `liste-attente-cabinet-dentaire` / `lista-de-espera-clinica-dentaria` / `warteliste-zahnarztpraxis` / `lista-attesa-studio-dentistico` | cancelaciones citas dental |
| Recall: traer de vuelta a los pacientes a revisión | `recall-dental-revisiones` / `dental-recall-system` / `relance-patients-dentaire` / `recall-consultas-de-revisao` / `recall-system-zahnarztpraxis` / `richiami-pazienti-studio-dentistico` | recall dental |
| Consentimiento informado digital en odontología | `consentimiento-informado-digital-dental` / `digital-informed-consent-dentistry` / `consentement-eclaire-numerique-dentaire` / `consentimento-informado-digital` / `digitale-einwilligung-zahnarztpraxis` / `consenso-informato-digitale-odontoiatria` | consentimiento informado dental |
| Reactivar pacientes inactivos | `reactivar-pacientes-inactivos` / `reactivate-inactive-dental-patients` / `reactiver-patients-inactifs` / `reativar-pacientes-inativos` / `inaktive-patienten-zurueckgewinnen` / `riattivare-pazienti-inattivi` | pacientes inactivos clínica |
| Primera visita: protocolo y qué registrar | `protocolo-primera-visita-dental` / `first-dental-visit-protocol` / `protocole-premiere-visite-dentaire` / `protocolo-primeira-consulta` / `neupatienten-aufnahme-zahnarztpraxis` / `protocollo-prima-visita-odontoiatrica` | primera visita clínica dental |
| Presupuestos que no se aceptan: cómo hacer seguimiento | `seguimiento-presupuestos-dentales` / `follow-up-dental-treatment-quotes` / `relancer-devis-dentaires` / `acompanhar-orcamentos-dentarios` / `kostenvoranschlaege-nachfassen` / `follow-up-preventivi-dentali` | aceptación presupuestos dentales |
| Deuda de pacientes y pagos fraccionados: llevar el control | `control-deuda-pacientes` / `patient-payment-plans-tracking` / `suivi-impayes-cabinet-dentaire` / `controlo-de-dividas-de-pacientes` / `ratenzahlung-patienten-verwalten` / `gestione-insoluti-pazienti` | pagos pacientes clínica dental |
| Caja diaria y arqueo en la clínica | `caja-diaria-clinica-dental` / `daily-cash-reconciliation-dental` / `caisse-quotidienne-cabinet-dentaire` / `caixa-diaria-clinica` / `tagesabschluss-zahnarztpraxis` / `chiusura-cassa-studio-dentistico` | arqueo caja clínica |
| TPV y datáfono en recepción: conciliar cobros sin cuadrar a mano | `tpv-datafono-clinica-dental` / `card-payments-dental-front-desk` / `tpe-cabinet-dentaire` / `tpa-na-clinica-dentaria` / `kartenzahlung-zahnarztpraxis` / `pos-studio-dentistico` | datáfono clínica dental |
| KPIs: los números que mirar cada mes | `kpis-clinica-dental` / `dental-practice-kpis` / `indicateurs-cabinet-dentaire` / `kpis-clinica-dentaria` / `kennzahlen-zahnarztpraxis` / `kpi-studio-dentistico` | kpi clínica dental |
| Ocupación de sillón: medirla y mejorarla | `ocupacion-sillon-dental` / `chair-utilization-dental` / `taux-occupation-fauteuil` / `ocupacao-da-cadeira` / `stuhlauslastung-zahnarztpraxis` / `utilizzo-del-riunito` | ocupación sillón dental |
| Control de stock de material | `control-stock-clinica-dental` / `dental-inventory-management` / `gestion-stock-cabinet-dentaire` / `gestao-de-stock-clinica` / `materialverwaltung-zahnarztpraxis` / `gestione-magazzino-studio-dentistico` | inventario clínica dental |
| Esterilización con trazabilidad: qué registrar | `trazabilidad-esterilizacion-dental` / `sterilization-tracking-dental` / `tracabilite-sterilisation-dentaire` / `rastreabilidade-esterilizacao` / `sterilisation-dokumentation-praxis` / `tracciabilita-sterilizzazione` | trazabilidad esterilización |
| Registro de implantes: lote y trazabilidad | `registro-implantes-trazabilidad` / `implant-lot-tracking` / `tracabilite-implants-dentaires` / `registo-de-implantes` / `implantatdokumentation` / `tracciabilita-impianti-dentali` | trazabilidad implantes dentales |
| Ortodoncia: seguimiento de tratamientos largos | `seguimiento-tratamientos-ortodoncia` / `orthodontic-treatment-tracking` / `suivi-traitements-orthodontie` / `acompanhamento-ortodontia` / `kieferorthopaedische-behandlungen-verwalten` / `gestione-trattamenti-ortodonzia` | software ortodoncia |
| Citas online: pros y contras de abrir la agenda a internet | `reserva-citas-online-dental` / `online-dental-appointment-booking` / `prise-rendez-vous-en-ligne-dentaire` / `marcacao-online-de-consultas` / `online-terminbuchung-zahnarztpraxis` / `prenotazione-online-studio-dentistico` | cita online dentista |
| Portal del paciente: qué debería poder hacer solo | `portal-del-paciente-dental` / `dental-patient-portal` / `portail-patient-dentaire` / `portal-do-paciente` / `patientenportal-zahnarztpraxis` / `portale-paziente-odontoiatrico` | portal paciente |
| Encuestas de satisfacción que la gente contesta | `encuestas-satisfaccion-pacientes` / `patient-satisfaction-surveys-dental` / `enquetes-satisfaction-patients` / `inqueritos-satisfacao-pacientes` / `patientenzufriedenheit-messen` / `sondaggi-soddisfazione-pazienti` | satisfacción pacientes |
| Reseñas de Google sin comprar ninguna | `resenas-google-clinica-dental` / `google-reviews-dental-practice` / `avis-google-cabinet-dentaire` / `avaliacoes-google-clinica` / `google-bewertungen-zahnarztpraxis` / `recensioni-google-studio-dentistico` | reseñas google clínica dental |
| Marketing local sin agencia | `marketing-local-clinica-dental` / `local-marketing-dental-practice` / `marketing-local-cabinet-dentaire` / `marketing-local-clinica-dentaria` / `lokales-marketing-zahnarztpraxis` / `marketing-locale-studio-dentistico` | marketing clínica dental |
| Duplicados en la base de pacientes: limpiar sin perder nada | `pacientes-duplicados-limpiar` / `deduplicate-patient-records` / `doublons-dossiers-patients` / `duplicados-de-pacientes` / `dubletten-patientenkartei` / `duplicati-anagrafica-pazienti` | pacientes duplicados |
| Migrar de papel a digital | `clinica-dental-sin-papel` / `paperless-dental-practice` / `cabinet-dentaire-sans-papier` / `clinica-sem-papel` / `papierlose-zahnarztpraxis` / `studio-dentistico-senza-carta` | clínica dental sin papel |
| Exportar tus datos: el formato que debes exigir | `exportar-datos-software-dental` / `export-dental-software-data` / `exporter-donnees-logiciel-dentaire` / `exportar-dados-do-software` / `daten-export-zahnarztsoftware` / `esportare-dati-gestionale` | exportar datos software dental |
| Qué pasa si tu proveedor de software cierra | `proveedor-software-cierra` / `dental-software-vendor-shuts-down` / `editeur-logiciel-ferme` / `fornecedor-de-software-fecha` / `softwareanbieter-stellt-ein` / `fornitore-software-chiude` | proveedor software cierra |
| Software libre frente a propietario en sanidad | `software-libre-sanidad` / `open-source-vs-proprietary-healthcare` / `logiciel-libre-sante` / `software-livre-na-saude` / `open-source-software-gesundheitswesen` / `software-libero-sanita` | software libre sanidad |
| La API de tu software: qué deberías poder hacer con tus propios datos | `api-software-clinica-dental` / `dental-software-api` / `api-logiciel-dentaire` / `api-software-clinica-dentaria` / `api-zahnarztsoftware` / `api-gestionale-dentistico` | api software dental |
| Cómo evaluar un proyecto open source antes de confiarle tu clínica | `evaluar-open-source-clinica` / `evaluate-open-source-for-your-clinic` / `evaluer-open-source-cabinet` / `avaliar-open-source-clinica` / `open-source-projekt-bewerten` / `valutare-open-source-studio` | software open source clínica |
| Qué es la licencia BSL y qué te deja hacer | `licencia-bsl-explicada` / `bsl-license-explained` / `licence-bsl-expliquee` / `licenca-bsl-explicada` / `bsl-lizenz-erklaert` / `licenza-bsl-spiegata` | *(technical, EN-first — our own licence, explained before someone else does)* |
| Montar servicios de integración sobre software dental open source | `servicios-integracion-software-dental` / `dental-software-integration-business` / `services-integration-logiciel-dentaire` / `servicos-integracao-software-dentario` / `it-dienstleistungen-zahnarztsoftware` / `servizi-integrazione-gestionale` | *(EN-first — aimed at the local IT provider or MSP, the natural distribution channel of a self-hosted product)* |
| Self-hosting con tu informático de confianza: qué acordar | `self-hosting-con-tu-informatico` / `self-hosting-with-your-it-provider` / `auto-hebergement-avec-votre-informaticien` / `self-hosting-com-o-seu-informatico` / `self-hosting-mit-dem-it-dienstleister` / `self-hosting-con-il-tuo-informatico` | mantenimiento informático clínica dental · SLA, backups and updates agreed with a local integrator; the clinic-side counterpart of the row above |
| Ransomware: el plan de la clínica pequeña | `ransomware-clinica-dental` / `ransomware-dental-practice` / `ransomware-cabinet-dentaire` / `ransomware-clinica` / `ransomware-zahnarztpraxis` / `ransomware-studio-dentistico` | ransomware clínica |
| Accesos del personal: quién puede ver qué | `permisos-acceso-personal-clinica` / `staff-access-permissions-dental` / `droits-acces-personnel-cabinet` / `permissoes-de-acesso-equipa` / `zugriffsrechte-praxispersonal` / `permessi-accesso-personale` | control accesos historia clínica |
| Auditoría de accesos a la historia clínica | `auditoria-accesos-historia-clinica` / `audit-trail-dental-records` / `journal-acces-dossier-patient` / `auditoria-de-acessos` / `zugriffsprotokoll-patientenakte` / `log-accessi-cartella-clinica` | registro accesos historia clínica |
| Radiografías digitales: almacenarlas y compartirlas | `almacenar-radiografias-digitales` / `storing-dental-xrays` / `stockage-radiographies-dentaires` / `armazenar-radiografias` / `roentgenbilder-speichern` / `archiviare-radiografie` | almacenamiento radiografías |
| Escáneres intraorales y radiología: integrar la imagen con la gestión | `integrar-radiologia-software-dental` / `dental-imaging-integration` / `integrer-imagerie-logiciel-dentaire` / `integrar-imagem-software-dentario` / `bildgebung-in-die-praxissoftware-integrieren` / `integrare-imaging-gestionale` | integración radiología software dental |
| Enviar casos al laboratorio: flujo y datos | `enviar-casos-laboratorio-dental` / `dental-lab-case-workflow` / `envoyer-travaux-laboratoire` / `enviar-trabalhos-ao-laboratorio` / `laborauftraege-verwalten` / `gestione-lavori-laboratorio` | laboratorio dental flujo |
| Varias sedes, una gestión | `gestionar-varias-clinicas` / `multi-location-dental-practice` / `gerer-plusieurs-cabinets` / `gerir-varias-clinicas` / `mehrere-standorte-verwalten` / `gestire-piu-sedi` | software multiclínica |
| Los números que tu asesor fiscal necesita cada trimestre | `informes-para-la-gestoria` / `reports-for-your-accountant` / `rapports-pour-expert-comptable` / `relatorios-para-o-contabilista` / `berichte-fuer-den-steuerberater` / `report-per-il-commercialista` | informes gestoría clínica |
| Teleodontología: qué se puede hacer a distancia | `teleodontologia` / `teledentistry` / `teledentisterie` / `teleodontologia` / `videosprechstunde-zahnarztpraxis` / `teleodontoiatria` | teleodontología |
| IA en la clínica dental: qué es real hoy | `ia-clinica-dental` / `ai-dental-practice` / `ia-cabinet-dentaire` / `ia-na-clinica-dentaria` / `ki-zahnarztpraxis` / `ia-studio-dentistico` | inteligencia artificial odontología |
| Automatizar la recepción: qué tareas se pueden quitar de encima | `automatizar-recepcion-clinica` / `automate-dental-front-desk` / `automatiser-accueil-cabinet` / `automatizar-a-rececao` / `praxisempfang-automatisieren` / `automatizzare-la-reception` | automatizar recepción clínica |
| Qué ordenadores necesita una clínica | `hardware-clinica-dental` / `dental-practice-hardware` / `materiel-informatique-cabinet` / `hardware-para-clinica` / `hardware-zahnarztpraxis` / `hardware-studio-dentistico` | ordenadores clínica dental |
| Tablets en el gabinete | `tablets-en-el-gabinete` / `tablets-dental-operatory` / `tablettes-au-fauteuil` / `tablets-no-gabinete` / `tablets-am-behandlungsstuhl` / `tablet-al-riunito` | tablet clínica dental |
| Turnos y ausencias del equipo | `turnos-equipo-clinica` / `staff-scheduling-dental` / `planning-equipe-cabinet` / `horarios-da-equipa` / `dienstplan-zahnarztpraxis` / `turni-del-personale` | turnos personal clínica |
| Historia clínica: qué anotar en cada visita | `que-anotar-historia-clinica` / `dental-clinical-notes` / `notes-cliniques-dentaires` / `registos-clinicos-por-consulta` / `behandlungsdokumentation` / `annotazioni-cartella-clinica` | notas clínicas dental |
| Alergias y alertas médicas: que se vean siempre | `alergias-alertas-medicas` / `medical-alerts-dental-records` / `alertes-medicales-dossier` / `alergias-e-alertas-medicos` / `medizinische-warnhinweise-akte` / `allerte-mediche-cartella` | alergias historia clínica |
| Pacientes menores y tutores: consentimiento y acceso | `pacientes-menores-tutores` / `minor-patients-guardians-dental` / `patients-mineurs-representants` / `pacientes-menores-e-tutores` / `minderjaehrige-patienten-praxis` / `pazienti-minorenni-tutori` | consentimiento menores dental |
| Fotografía clínica: organizar y proteger las imágenes | `fotografia-clinica-dental` / `clinical-photography-dental` / `photographie-clinique-dentaire` / `fotografia-clinica` / `klinische-fotografie-praxis` / `fotografia-clinica-odontoiatrica` | fotografía clínica dental |
| El día que se va internet: trabajar sin conexión | `clinica-sin-internet` / `dental-software-offline` / `cabinet-sans-internet` / `clinica-sem-internet` / `praxis-ohne-internet` / `studio-senza-internet` | software dental offline |
| Facturar a mutuas y aseguradoras dentales | `facturar-mutuas-dentales` in `blog/es/` | facturación mutuas dental · **country-locked: ES**. Source what the insurer requires from the insurer or the Consejo General de Dentistas, and say plainly what Dentalpin automates and what it does not |
| 100% Santé et devis conventionné au cabinet dentaire | `devis-conventionne-100-sante` in `blog/fr/` | devis 100% santé dentaire · **country-locked: FR**. Source from ameli.fr and the official texts, never from a vendor's marketing |
| GOZ und BEMA: was die Abrechnung von der Software braucht | `goz-bema-abrechnung-software` in `blog/de/` | GOZ BEMA Abrechnung Software · **country-locked: DE**. Source from KZBV and the official fee schedules, and state plainly what Dentalpin does there today |
| Sistema Tessera Sanitaria: l'invio delle spese dallo studio | `sistema-tessera-sanitaria-studio-dentistico` in `blog/it/` | sistema tessera sanitaria dentista · **country-locked: IT**. The post A7 already calls for: source from sistemats.it and Agenzia delle Entrate, and say what Dentalpin does and does not do for the STS |
| Faturar convênios odontológicos sem perder o controle | `faturar-convenios-odontologicos` in `blog/pt-br/` | convênios odontológicos · **country-locked: BR**. Source from ANS and the operators' own pages; say what Dentalpin automates today |
| KSeF w gabinecie stomatologicznym: co się zmienia i kiedy | `ksef-gabinet-stomatologiczny` in `blog/pl/` | KSeF gabinet stomatologiczny · **country-locked: PL**, the Polish counterpart to the Verifactu row. Source the dates from podatki.gov.pl, never from another country's post |

**The queues were extended on 3 August 2026 and again on 28 August 2026.**
The August 28 extension added 32 vendors, each verified from its own site
that day, opened the Polish section (A8) and unblocked Mexico, taking
Queue A back to roughly a month of runway at twenty-one comparisons a
week. When a queue runs dry the fallback rule in *Two queues* holds: a
morning run with no comparison left takes a topic, and an afternoon run
with no unwritten topic left takes a comparison instead.

**Extending Queue A cannot be done from memory.**
Every new vendor row must be verified from the vendor's own site the day it is
added — name, domain reached, market evidence — exactly like the existing
rows were (and two of the first draft's rows still turned out to be wrong; see
*The comparison queue rotates by language*). Head-term and
`alternativa-open-source-a-X` rows need no vendor verification and are the
cheap way to extend. When either runway drops under three weeks, extend the
queue again the same way: real searches a dental clinic makes, verified to
have intent behind them this run, not invented from memory. A target that only
makes sense in one country goes in country-locked, with the country named.

## Where the routine publishes and flags

Nothing in this list stops a publish. The post goes to main like any
other; the point is that the user hears about it, because each one is a
signal beyond the post itself:

- A competitor claims something about DentalPin that needs answering.
- A target has shut down, been acquired, or changed model. Write the
  post against the current reality, and check whether an already
  published post about that vendor went stale too.
- The honest verdict is "their product is a better fit for most
  readers". Publish it anyway, and say so in the notification, because
  it is a product signal, not a content problem.
