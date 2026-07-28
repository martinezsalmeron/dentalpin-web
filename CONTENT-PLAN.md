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

1. **Who it is for** — one paragraph, honest, no preamble.
2. **What <competitor> is** — sourced, neutral, generous. A comparison
   that cannot describe the other product fairly convinces nobody.
3. **What DentalPin is.**
4. **Side-by-side table** — only verifiable rows. Deployment, licence,
   published price, data ownership, API, modules, compliance.
5. **Choose <competitor> if…** — a real list, not a straw man. If they
   have 30 years of Spanish support and 400 migrations a year, say so.
   This section is why the post gets trusted and linked.
6. **Choose DentalPin if…**
7. **How migration actually works** — concrete, with the module.
8. **Sources** — every URL with the date consulted.

Section 5 is not a concession. It is the section that makes the other
seven credible, and it is the one the routine must never quietly drop.

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
