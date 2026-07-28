# Content plan

The spec the content routine executes. It is also the editorial standard
for anything a human writes here.

## How the loop works

There is no status column to keep in sync. The routine reads this file,
looks at which slugs already exist under
`apps/web/src/content/blog/{es,en}/`, and takes the next unwritten
targets. What is published *is* the state.

Every run:

1. Pick the next N targets from the table below that have no post yet.
2. Research each one **from the vendor's own site**, this run. Not from
   memory, not from an aggregator blog.
3. Write the post in Spanish and English.
4. Verify every competitor claim (see below).
5. Publish what passes. Open a PR for what does not.

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

## Targets

Vendors confirmed to exist in the Spanish market. Research each before
writing — this list is a queue, not a source of facts.

| Target | Slug (es / en) | Why |
|---|---|---|
| Gesden (Infomed) | `dentalpin-vs-gesden` | Market leader, claims 14.000 clinics |
| Gesden ONE | `dentalpin-vs-gesden-one` | Their cloud product, closest comparison |
| Clinic Cloud | `dentalpin-vs-clinic-cloud` | Cloud-native, SMB |
| Dentalink | `dentalpin-vs-dentalink` | Cloud, strong in LatAm + Spain |
| Dentazon | `dentalpin-vs-dentazon` | Spanish, per-cabinet pricing |
| Dentrix (Henry Schein) | `dentalpin-vs-dentrix` | International incumbent |
| Open Dental | `dentalpin-vs-open-dental` | The other "open" one — clarify the difference |
| Apexo | `dentalpin-vs-apexo` | Open source, offline-first |
| — | `alternativa-open-source-gesden` / `open-source-alternative-to-gesden` | Highest-intent query in the whole space |
| — | `software-clinica-dental-gratis` / `free-dental-practice-software` | Broad head term |

### Non-comparison, roughly one in five

| Topic | Why |
|---|---|
| Verifactu para clínicas dentales | Legal deadline, real urgency, own module |
| RGPD y datos clínicos en la clínica dental | Evergreen, high intent |
| Migrar de un software dental a otro sin perder historia | Buying-moment content |
| Qué preguntar a tu proveedor antes de firmar | Ranks for the doubt, not the product |

## Where the routine must stop and ask

- A competitor claims something about DentalPin that needs answering.
- A target has shut down, been acquired, or changed model.
- The honest verdict is "their product is a better fit for most readers".
  Publish it anyway — but say so in the PR, because it is a product
  signal, not a content problem.
