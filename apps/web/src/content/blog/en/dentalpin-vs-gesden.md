---
title: "Dentalpin vs Gesden: what actually changes for your clinic"
description: "An honest comparison between Gesden, Spain's most widely used dental software, and Dentalpin, which is open source and free. Sourced, and without adjectives."
pubDate: 2026-07-28
updatedDate: 2026-08-15
tags: [comparison, gesden, dental-software]
---

If you run a clinic in Spain and go looking for practice management software, Gesden comes up first. Reasonably so: it has been on the market for over thirty years, and its maker, Infomed, states that **14,000 clinics** use it.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How to read this comparison.** Everything claimed here about Gesden comes from pages Infomed publishes, linked and dated at the end. No aggregator blogs: they contradict each other and some are written by competitors. And there is a whole section on when Gesden is the better choice, because there is one.

## In thirty seconds

**Gesden** is the mature product: thirty years, 14,000 clinics, more than 50 support technicians and 400 migrations a year. If what you need is a phone number to call when the software stops on a Tuesday morning, they have that infrastructure and we do not.

**Dentalpin** is open source and free: no licence per chair, per dentist or per patient, with the code published and the data wherever you decide. In exchange, it is from 2026 and it is self-hosted: someone has to own the server.

The question is not which is better. It is whether your clinic has technical people or not.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Gesden is

Dental practice management software from Infomed, in two product lines:

- **Gesden G5**: a desktop application, requires Windows 10 or later.
- **Gesden ONE**: a cloud version, reached through a browser.

G5 comes in several editions by licence count: *Easy* (up to 3), *Profesional* (up to 6), *Grandes Clínicas* and *Multicentro* (the last two unlimited).

Functionally it is a deep, mature product: clinical records with an odontogram, a periodontogram with evolution comparison, multi-cabinet and multi-site scheduling, budgets, a full billing cycle, insurance claim assistance, 150+ configurable report types, recalls, expense and supplier control, and an orthodontics module.

Around that core sit **optional modules** contracted separately: `dentIA` (AI radiograph analysis), `CLINIPAD` (digital signatures), SMS and emailing, `ONE PAY` (payments), a Dashboard, `DIDACTIC` (3D case presentation), mobile scheduling and online booking. Verifactu is a separate product too. Since August 2026, six of those modules (WhatsApp, `ONE PAY`, Image ONE, `dentIA`, time-clock control and the Dashboard) are also sold together as a "Pack Premium" bundle for €99/month, with no minimum term.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your server, whichever cloud you pick) and pay no licence per chair, per dentist or per patient.

Odontogram, SEPA periodontogram, scheduling, clinical records, treatment plans, budgets with signature capture, invoicing, payments, recalls and reports. Verifactu included as a module rather than a separate product. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It is far younger. That matters, and we come back to it.

![Patient record in Dentalpin showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Patient record: odontogram, clinical alerts, active plan and next appointment on one screen.*

## Side by side

Verifiable rows only. Where there is no public figure, we say so.

| | Gesden | Dentalpin |
|---|---|---|
| Model | Commercial licence | Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Deployment | Windows 10+ desktop · ONE in the cloud | Your server, your provider, or local |
| Published price | ~ Only the Pack Premium module bundle (€99/month); base licence not published | ✓ €0, everything included |
| Modules | ~ Several contracted separately | ✓ All included |
| Verifactu | ~ Separate product | ✓ Included module |
| Where data lives | Depends on product and deployment | ✓ Wherever you decide |
| Auditable code | ✗ No | ✓ Published on GitHub |
| Documented API | ✗ Not publicly | ✓ Full REST, OpenAPI |
| Years on the market | ✓ 30+ | ✗ Since 2026 |
| Clinics using it | ✓ 14,000 stated | ✗ Very few so far |
| Phone support | ✓ 50+ technicians | ✗ Telegram and GitHub |

On price it is worth being precise, because a lot of noise circulates.

> **Infomed does not publish the G5 licence rate on its site.** It directs you to your area coordinator. What it does publish, since August 2026, is the price of a separate module bundle, the "Pack Premium" (WhatsApp, `ONE PAY`, Image ONE, `dentIA`, time-clock control and Dashboard): €99/month, after a €29/month launch promotion that ended on 31 July. That is not the base licence price. On the licence itself, blogs quote wildly different figures, from €99/month to perpetual licences of €2,000–3,000, and **none of them is Infomed**. If that number matters to you, ask them.

## Choose Gesden if

And this is meant seriously, not as a formality:

- **You want a phone number to call.** More than 50 support technicians and thirty years in Spanish clinics. We have a Telegram channel and GitHub. If the software stops on a day you bill €8,000, that difference is real.
- **You need to migrate and want someone to handle it.** 400 migrations a year is muscle you cannot improvise.
- **Your clinic already runs on Gesden and everyone knows it.** Switching costs weeks of productivity. Something being free is not sufficient reason.
- **You depend on specific imaging integrations** and they already work.
- **You have nobody technical and do not want to.** Dentalpin is self-hosted. Someone has to own the server and the backups.

A product with 14,000 clinics behind it solves problems we do not yet know exist.

## Choose Dentalpin if

- **You are uneasy about clinical data living somewhere you do not control.** Here you and your server decide.
- **The bill grows with the clinic and that does not sit right.** Opening a cabinet should not raise your subscription.
- **You have technical people, or will hire them.** Then self-hosting is an afternoon, not a problem.
- **You want to integrate and automate.** Everything is a documented API, not a closed form.
- **You want to audit the code** that holds clinical records. It is published.
- **Verifactu without an extra product.** It is inside.

![Dentalpin invoice list with issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*The invoice list, with each one's payment state and what is still outstanding.*

## What migrating looks like

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two clinics never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

## The honest part

Gesden is a mature product with an enormous customer base and support we do not have. If your priority is someone answering the phone tomorrow, it is the sensible choice today.

Dentalpin is the opposite bet: that your clinic's software should not be a rented black box. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge for yourself.

## Sources

Consulted 28 July 2026, re-checked with no changes on 8 August 2026, and again on 15 August 2026 (Pack Premium now publishes a price; `gesdenone.com` was down, replaced with the equivalent page on `infomedsoftware.com`):

- [Gesden G5 · Infomed](https://www.infomedsoftware.com/software/gesden/gesden-g5/): editions, features, optional modules, Windows requirement, clinic counts, support and migration figures.
- [Gesden ONE · Infomed](https://www.infomedsoftware.com/software/gesden/gesden-one/): the cloud product. (`gesdenone.com` has returned a 503 error since at least 15 August 2026.)
- [Pack Premium · Infomed](https://www.infomedsoftware.com/software/pack-premium/): the module bundle's price, terms and contents.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Infomed too.
