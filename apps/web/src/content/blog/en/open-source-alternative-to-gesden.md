---
title: "Open source alternative to Gesden: what actually exists"
description: "Which open source alternatives to Gesden exist in 2026, with every licence checked on the vendor's own site, and what open source turns out to mean here."
pubDate: 2026-08-21
tags: [comparison, gesden, open-source, dental-software]
---

The list of open source alternatives to Gesden is short, and it got shorter last year: Open Dental, which used to be the obvious answer, is not open source any more, and the page that says so is Open Dental's own licence page.

We make Dentalpin, which is one of the options below, so we are not neutral. What we can be is accurate, including about our own licence, which is the part most pages like this one quietly skip.

> **How this page is sourced.** Everything stated here about Gesden comes from pages Infomed publishes, and everything stated about the other options comes from each vendor's own site, linked and dated at the end. No aggregator blogs: they contradict each other and some are written by competitors.

## In thirty seconds

**Gesden is the mature product, and that is not in dispute.** Infomed states more than 30 years, 14,000 clinics, over 50 support technicians from 8h to 21h Monday to Friday and more than 400 migrations a year. Nothing on the open source side of this page has anything close to that.

**If open source means a licence approved as open source, exactly one dental option qualifies today**: Apexo, under GNU GPLv3. Dentalpin publishes its code but ships under Business Source License 1.1, which its own text says is not an open source licence until it converts to Apache 2.0 four years after each release.

The question that decides it is not which product is better. It is what you actually want from the word: a licence you can rely on forever, a database on a machine you control, or simply no monthly invoice. Those are three different requirements and they point at three different products.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## First, whether Gesden is even your problem

Gesden is a Spanish product for the Spanish market. Infomed's site is in Spanish, its offices are in Barcelona and Madrid, and the Gesden ONE page describes the goal as changing how dental clinics work **in España**. There is no international edition advertised on the pages consulted.

So if you are reading this in English, you are most likely one of two people: running or advising a clinic in Spain, or comparing a Spanish incumbent against what the wider market offers. Both are real, and the second half of this page is the same either way, because the open source options are not Spanish.

Infomed publishes two product lines:

- **Gesden G5**, the desktop application. Its own page says it is "diseñado exclusivamente para funcionar en ordenadores PC Compatibles con Windows 10 o superior", so Windows 10 or later, and nothing else.
- **Gesden ONE**, the web version, "diseñado 100% responsive desde su origen (PC/MAC, portátil, tableta, smartphone)".

G5 is sold in four editions by seat count: Easy for clinics with 1 to 3 computers, Profesional for 4 to 6, Grandes Clínicas with unlimited licences, and Multicentro for running several sites together.

Around that core sit **modules contracted separately**: DENTIA for radiograph analysis, Cuadro de Mandos, CLINIPAD for digital signatures, DIDACTIC for 3D cases, Automatización, SMS y Emailing, ONE PAY, Cita On Line and Agenda Mobile.

One correction worth making, because the opposite claim circulates and an earlier version of our own English comparison carried it: **Verifactu is not a separate product in Gesden.** Infomed's page names versions: GESDEN G5 5.54 and GESDEN ONE 1.585.0 are already compatible with the Veri\*Factu system. What you do need to reach those versions is a live maintenance fee, and the same page invites clinics without one to call their area coordinator and activate it.

> **Infomed does not publish rates on its site (consulted 21 August 2026).** What it publishes is "disponemos de tarifas muy competitivas" and an instruction to ask your area coordinator for the best offer. If the number matters, ask them, because no blog quoting a figure is Infomed.

## What open source has to mean before you compare anything

Three different things get sold under the same word, and separating them is most of the work:

- **The licence.** This is the only thing that decides whether you can read, modify and keep the code no matter what happens to the vendor. It is also the thing that can change from one release to the next, as the last year demonstrated.
- **The price.** Free and open source are not the same. There is proprietary software that costs nothing and free software you pay support for.
- **Where the data lives.** Self-hosting means the database sits on a machine you control. That is independent of the licence, and it is usually what people are really asking about.

If the monthly invoice is the worry, price is your criterion. If the worry is what happens to your clinical records the day the vendor closes, gets acquired or changes its terms, the criteria are the licence and self-hosting, in that order.

> **A licence is a promise about the future, and promises get rewritten.** "In version 24.4, the Open Dental license changed from open source GPL to proprietary." That is Open Dental's own sentence. They add that customers saw no change in price, support, database access or how the software was used, and that it only affected the few people compiling the source. It is still a good product. It is no longer an open source one.

## The options that actually exist

- **Apexo.** Describes itself as "an open-source, offline-first dental practice manager designed for speed, privacy, and clinical precision", licensed under GNU GPLv3, and presented as a free dental PMS. Its own site lists calendar, patient records, statistics, sync, offline working, backups and data stored on your own servers, in EN, AR, ES, PL and KU. What that page does not describe is invoicing or a dental chart, so if billing is what you need, verify it before committing.
- **Open Dental.** For years this was the answer to the question and it no longer is, per the quote above. It is also one of the very few vendors in this market that publishes a price: **$199 per month per location on a 12 month contract**, which covers all computers at that location for up to 3 dentists and includes the software, full telephone support and all releases. Data conversion is charged separately and varies by the software you are leaving.
- **OpenEMR.** Genuinely open source, describes itself as "the world's leading open-source medical record software", says "Free Software, Always and Forever", and is ONC certified. Its own feature list runs from demographics and scheduling to prescriptions and medical billing, and it documents an Eye module for ophthalmology and optometry. It names no dental module, no dental charting and no odontogram, so it is not a Gesden replacement however well the licence fits.
- **GNU Health.** Describes itself as "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics", and lists hospitals, medical institutes and health ministries across a dozen countries as implementations. Same conclusion as OpenEMR: nothing about dental practice management on the pages consulted.
- **Dentalpin.** Ours, so it gets its own section below and a table where you can check it against Gesden.

### The licences, side by side

| Product | Licence today | Published price | Dental practice management |
|---|---|---|---|
| Apexo | ✓ GNU GPLv3 | ✓ Free | ✓ Yes |
| Open Dental | ✗ Proprietary since v24.4 | ✓ $199/month per location | ✓ Yes |
| OpenEMR | ✓ Open source, ONC certified | ✓ Free | ✗ No dental module listed |
| GNU Health | ✓ Libre health ecosystem | ✓ Free | ✗ Not described |
| Dentalpin | ~ BSL 1.1, Apache 2.0 after 4 years | ✓ No licence fee | ✓ Yes |

Two of the five are real open source licences on a dental product, and only one of those two is a dental product. That is the honest size of this category in 2026.

## What Dentalpin is, and what its licence is not

Dental practice management software whose source is published on GitHub, installed wherever you want, with no licence fee per chair, per dentist or per patient. Dental chart, periodontal chart, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports, plus an AI assistant that acts on your data within each user's permissions.

The licence is Business Source License 1.1, converting to Apache 2.0 four years after each release, with a use limitation: you may not run it as a commercial dental SaaS. **The BSL text states in its own notice that it is not an open source licence.** We are not going to argue with the licence we chose. Source available today, Apache 2.0 on a published schedule, and if OSI approval is your requirement then Apexo is the one that meets it and we are not.

It is also from 2026, and that shows in the two rows at the bottom of the next table.

![Patient record in Dentalpin showing the dental chart, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Patient record: dental chart, clinical alerts, active treatment plan and next appointment on one screen.*

## Gesden and Dentalpin, side by side

Verifiable rows only. Where there is no public figure, it says so.

| | Gesden | Dentalpin |
|---|---|---|
| Licence | Commercial, proprietary | BSL 1.1, Apache 2.0 after 4 years |
| OSI open source today | ✗ No | ✗ No |
| Source code published | ✗ No | ✓ On GitHub |
| Deployment | Windows 10+ desktop (G5) · browser (ONE) | Your server, your provider, or local |
| Published price | ✗ Does not publish rates | ✓ No licence fee |
| Modules | ~ Several contracted separately | ✓ All included |
| Verifactu | ✓ From G5 5.54 and ONE 1.585.0 | ✓ Included module |
| Where the data lives | Depends on product and deployment | ✓ Wherever you decide |
| Years on the market | ✓ More than 30 | ✗ Since 2026 |
| Clinics using it | ✓ 14,000 stated | ✗ Very few so far |
| Telephone support | ✓ 50+ technicians, Mon to Fri 8h to 21h | ✗ Telegram and GitHub |
| Migrations per year | ✓ More than 400 stated | ✗ No figure to show |
| R&D team | ✓ More than 40 engineers stated | ✗ Small team |

Those last five rows are theirs and there is no honest way to dress them down. A product with 14,000 clinics behind it has solved problems we do not yet know exist.

## Choose Gesden if

- **You want a phone number to call.** More than 50 support technicians with published hours. If the software stops on a Tuesday you bill 8,000 euros on, that difference is real and no licence covers it.
- **You need to migrate and want someone else to own it.** More than 400 migrations a year, on their own figures, is muscle nobody improvises.
- **Your clinic already runs on Gesden and the whole team knows it.** Switching costs weeks of productivity. Something being free is not sufficient reason.
- **You depend on specific modules** like DENTIA for radiograph analysis or DIDACTIC for 3D case presentation, and they are already part of how you work.
- **You have nobody technical and do not want to.** Every open source option on this page is self-hosted. Someone has to own the server and the backups.

## Choose an open source option if

- **You want to keep the code whatever happens to the vendor.** The licence is the only thing that gives you that, and this year showed how fast a licence can change.
- **You want the software holding clinical records to be auditable**, by you or by someone you trust.
- **The bill grows with the clinic and that does not sit right.** Opening another operatory should not raise a subscription.
- **You have technical people, or will hire them.** With that, self-hosting is an afternoon rather than a problem.
- **You want to integrate against an API** instead of against a closed form.

Between the two dental options left standing, Apexo fits better if you want something minimal and offline for a small practice, and it is the one with the OSI licence. Dentalpin fits better if you need the full billing cycle and Spanish Verifactu compliance in the box. You can [see what Dentalpin costs](/en/pricing/), which is nothing, or [try the demo](https://demo.dentalpin.com) without installing anything.

![Dentalpin's AI assistant with its workflows, in English](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of whoever is signed in.*

## What migrating off Gesden looks like

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not a single button:

1. **Upload the file** and the system validates it before touching anything.
2. **Review a preview** with entity counts and sample rows. Nothing has been written to your database yet.
3. **Check the proposals.** The system maps the source treatment catalogue onto yours and you decide row by row: accept, relink, create new or ignore. Anything scoring above 0.9 can be accepted in bulk.
4. **Run the import**, which executes honouring your decisions.

> **Step 3 is where most migrations quietly fail.** Two clinics never code treatments the same way, and an equivalence guessed in silence produces invoices that are wrong in ways nobody notices for months.

If you want to see it running before deciding anything, it [stands up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/).

## Sources

All consulted on 21 August 2026:

- [Gesden G5 · Infomed](https://www.infomedsoftware.com/software/gesden/gesden-g5/): editions, Windows requirement, optional modules, and the figures for clinics, years, support technicians, support hours, R&D engineers and migrations, plus the wording on rates.
- [Gesden ONE · Infomed](https://www.infomedsoftware.com/software/gesden/gesden-one/): the web product, its devices, its modules and the Spanish market framing.
- [Veri\*Factu · Infomed](https://www.infomedsoftware.com/software/gesden/verifactu/): the compatible versions and the maintenance fee.
- [Open Dental · License](https://www.opendental.com/site/license.html): the change from GPL to proprietary in version 24.4.
- [Open Dental · Order](https://opendental.com/site/order.html): the published price and what it covers.
- [Apexo](https://apexo.app/): the GPLv3 licence, the offline-first description, the feature list and the languages.
- [OpenEMR](https://www.open-emr.org/) and its [feature list](https://www.open-emr.org/wiki/index.php/OpenEMR_Features): the licence, the ONC certification and the absence of a dental module.
- [GNU Health](https://www.gnuhealth.org/): the project description and its implementations.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Infomed, Apexo and Open Dental too.
