---
title: "Dentalpin vs Apexo: two open source dental systems, built for different clinics"
description: "Apexo is GPLv3, offline-first and genuinely free. Dentalpin is open source and browser-based. A comparison sourced only from what each project publishes."
pubDate: 2026-08-20
tags: [comparison, apexo, dental-software]
---

Apexo is the rarest thing in this market: a dental practice management system that is open source under a real open source licence, costs nothing, and runs on your own server. If that is what you came looking for, it is a serious answer and you should read its manual before ours.

We make Dentalpin, so we are not neutral. We can be accurate, and the accurate version of this comparison is not "ours is better". It is that these two products solved different halves of the same problem.

> **How this comparison is sourced.** Every claim about Apexo comes from a page the project publishes: its own site, and the user manual it serves at `docs.apexo.app`. No review sites, no aggregator blogs. Where the manual is silent, this post says the manual is silent rather than guessing.

## In thirty seconds

**Apexo is free and offline-first.** GNU GPLv3, native apps for Windows, iOS and Android plus a web version, and local data that keeps working when the connection drops. Its own manual walks you through renting a small server and pointing the app at it. There is no licence fee anywhere in that story.

**Dentalpin is browser-based and built around the clinical and financial paperwork** a practice has to produce: periodontal charting, treatment plans, quotes with signature, invoices, and invoicing wired to a tax authority where that is required.

The question that decides it: is your problem that the software costs too much and the internet is unreliable, or that the software will not produce the documents your practice runs on?

![Dentalpin patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Dentalpin's patient record, with the demo data an installation ships with.*

## What Apexo is

An open source dental practice manager by Dr. Ali Saleem, described on its own home page as "an open-source, offline-first dental practice manager designed for speed, privacy, and clinical precision" and marketed under the heading "Free Dental PMS". The footer states it is "Licensed under GNU GPLv3".

It ships as a native application rather than a web app you host. The download page offers Windows 10/11, the Microsoft Store, the App Store, Google Play, and "Use directly as a Web application". The site lists eight capability cards: Calendar, Patients, Statistics, Sync, Offline, Multilingual, Privacy and Backups.

**The architecture is the interesting part.** The manual is explicit: "The server must run a freshly installed Pocketbase." You rent a small server, create a PocketBase instance, create an admin user from the console, optionally point a domain at it, and then enter that address in the app. The manual notes that a five dollar droplet with 25GB "can typically hold around 5000 to 10000 photos", and documents S3 storage as the option once you outgrow that.

What the manual documents in detail, screen by screen:

- **Patients**, with a per-tooth chart using ISO 3950 notation, primary teeth shown for patients under 14, and a per-tooth note history.
- **Appointments** split into pre-op, post-op and photos, carrying prescriptions, price, paid amount and any linked lab case.
- **Labworks**, a dedicated screen tracking every lab case in the clinic.
- **Expenses**, organised by supplier, with a **Scan Receipt** feature that extracts supplier, items, prices and dates from a photo.
- **Notes** as a Kanban board, with assignment to a staff account, file attachments and recurrence.
- **DICOM / X-Ray import** on Windows, watching the folders where an RVG sensor writes `.dcm` files, scanning every 90 seconds, matching each file to a patient from its metadata with confidence badges, and syncing the result to every device.
- **Backups** on a cron schedule, with restore, upload and download from inside the app, and optional S3.
- **Accounts** with two types, Admin and User, and "granular permission levels for patients, appointments, pre-op notes, post-op notes, photos, expenses, notes, and labworks".
- **CSV import and export** of patients and appointments, with the field list published in the manual.

The X-ray work is the most substantial thing in the recent changelog. Version 0.14.0 added the RVG import and a cross-platform viewer with windowing, colour maps, rotation, invert, a millimetre ruler and ROI statistics; 0.14.1 hardened it. The current published version is 0.14.1, so this is a pre-1.0 project that is being worked on hard.

## What Dentalpin is

Open source dental practice management software under BSL 1.1, converting to Apache 2.0 after four years. You download it, run it on your own server or any cloud you pick, and pay no licence per chair, per dentist or per patient.

The stack is a browser, Caddy, the API, the frontend and PostgreSQL, all under `docker compose`. There is no application to install on a workstation, and no application to install on a phone either, which cuts both ways and we come back to it.

The modules are the paperwork end of a practice: odontogram with per-surface state and FDI numbering, SEPA periodontogram with six sites per tooth, patients, clinical history, treatment plans, quotes, invoicing, Verifactu filing for Spain, reports, a REST API with OpenAPI, an AI assistant and WhatsApp messaging.

![Dentalpin periodontal chart showing the six probing sites per tooth](/screenshots/periodontogram.png)

*The periodontal exam: probing depth, margin, bleeding, plaque and suppuration at six sites per tooth, frozen into a dated snapshot when the session closes.*

## Side by side

Verifiable rows only. Where a row says "not in the manual", that means Apexo's own manual documents the product screen by screen and this is not among the screens, which is evidence but not proof.

| | Apexo | Dentalpin |
|---|---|---|
| Licence | ✓ GNU GPLv3 | ~ BSL 1.1, Apache 2.0 after 4 years |
| Published price | ✓ Free, no licence fee | ✓ No licence fee |
| Where it runs | ✓ Windows, iOS, Android, web | ~ Any browser, no native app |
| Works offline | ✓ Offline-first, local data | ✗ Needs the server reachable |
| Backend | PocketBase, on a server you rent | Caddy, API, PostgreSQL, Docker |
| X-rays | ✓ RVG auto-import, DICOM viewer with ruler and ROI | ✗ Stored as patient documents, no viewer |
| Arabic and Kurdish | ✓ EN, AR, ES, PL, KU | ✗ Not offered |
| Lab cases | ✓ Dedicated screen | ✗ Not a module today |
| Supplier expenses | ✓ Dedicated screen, receipt scanning | ✗ Not a module today |
| Dental chart | ✓ Per tooth, ISO, Palmer or Universal | ✓ Per surface, FDI, bridges and groups |
| Periodontal chart | ~ Not in the manual | ✓ SEPA, six sites per tooth |
| Treatment plans and quotes | ~ Not in the manual | ✓ Plans, quotes, signature capture |
| Invoicing | ~ Price and paid amount per appointment | ✓ Invoices, series, Verifactu in Spain |
| Appointment reminders | ~ Not in the manual | ✓ WhatsApp module |
| Patient self-service | ✓ QR link to appointments, payments and photos | ✗ Not a module today |
| Version | 0.14.1, pre-1.0 | Shipping since 2026 |

Two rows need the detail behind them.

**Offline** is not a preference, it is the architecture. Apexo keeps data locally and reconciles later, and 0.14.0 added field-level merging so non-conflicting edits from two devices both survive. Dentalpin is a web application: if the server is unreachable, the browser has nothing to show. A practice with a shaky connection should weigh that above almost everything else in this table.

**Invoicing** is the mirror image. Apexo's manual records a price and a paid amount on each appointment, and a payment summary per patient. That is bookkeeping, and for a cash practice it may be all that is needed. It is not the same thing as issuing a numbered invoice in an unbroken series and filing it with a tax authority, which is what Spanish, Italian, French and German practices are being required to do.

> **Free is genuinely free here, and that is rarer than it sounds.** Apexo publishes no tariff because there is nothing to charge for. What you pay is the server, and the manual puts that at around five dollars a month for a small practice. Most of the vendors we compare against publish no price at all, which is a different situation entirely.

## Choose Apexo if

This section is not a formality. For a specific and large kind of practice, Apexo is the better answer today.

- **Your internet is unreliable.** Offline-first is the whole design, not a feature bullet, and no amount of good engineering makes a web application work without a network.
- **You want the software on a phone or tablet as a real app.** Native builds for iOS and Android are published, and ours is a browser.
- **You take your own X-rays with an RVG sensor.** Watch a folder, auto-import, match to the patient, view with windowing and a millimetre ruler on any device. We store X-rays as documents and have no viewer.
- **You work in Arabic or Kurdish.** Their site lists both. We publish in nine languages and none of them is Arabic.
- **You want a strong copyleft licence.** GPLv3 is OSI-approved open source with no time delay. Ours is BSL 1.1 for four years first, and if that distinction matters to you, it should decide this.
- **You track supplier spending and lab cases inside the same system.** Both have their own screen in Apexo. Neither is a Dentalpin module today.
- **Your budget is zero.** Not "low". Zero.

A one or two chair practice that bills cash, shoots its own radiographs and wants to own everything has a very good case for Apexo, and we would rather say so than pretend otherwise.

## Choose Dentalpin if

- **Your practice runs on documents.** Treatment plans, quotes accepted with a signature, invoices in a numbered series. That is the half of the problem we built for first.
- **You do periodontal work.** A full SEPA exam with six sites per tooth, indices computed and frozen on close, is not something Apexo's manual describes.
- **A tax authority is about to require something of you.** Verifactu in Spain today, and the same pattern arriving across Europe. This needs to be in the software, not next to it.
- **You want the clinical record and the money in one timeline.** Every appointment, treatment, quote and document lands there without anyone remembering to log it.
- **You want a documented REST API** with OpenAPI on your own server, to point reporting or another system at.
- **You would rather not install anything on the workstations.** A browser is a browser, including on the machine that arrives next Tuesday.

![Dentalpin's AI assistant showing its available workflows](/screenshots/ai-copilot.png)

*The assistant runs tasks against real clinic data, bounded by the permissions of whoever is signed in.*

## What migrating looks like

If you are moving from Apexo, the good news is that the exit is documented. The manual describes selecting patients on the Patients screen and exporting them, plus their appointments, as CSV, with a published field list including `teeth/11` style per-tooth notes and appointment dates as minutes since the Unix epoch.

Coming into Dentalpin, the `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the export** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> **Step 3 is where most migrations go wrong.** Two practices never code procedures the same way, and a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months.

Going the other way is equally worth knowing. Apexo's CSV export and its PocketBase backend mean your data is reachable without asking anyone. That is the same property we claim, and it is the reason both products are safer bets than a system whose database you cannot query.

## The honest part

There is no version of this post where Apexo comes out badly. It is a real open source project, actively developed, free in the way the word is supposed to mean, and it has shipped an X-ray pipeline we have not.

Where we would push back is the assumption that "free and open source" answers the question by itself. A practice that has to issue compliant invoices, present a signed treatment plan, or chart a periodontal patient over three years is asking for things Apexo's own manual does not describe. If that is your practice, the licence is not the deciding factor.

If it is not your practice, install Apexo. If you want to see the other shape of the problem first, [try the demo](https://demo.dentalpin.com) without installing anything, [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/), or look at what a managed install costs on the [pricing page](/en/pricing/).

## Sources

All consulted on 20 August 2026:

- [apexo.app](https://apexo.app/): the "Free Dental PMS" heading, the tagline, the eight capability cards including "Global ready: EN, AR, ES, PL, KU" and "Your data lives on your own servers", the download platforms, and "Licensed under GNU GPLv3".
- [Apexo Manual](https://docs.apexo.app/) ([source](https://raw.githubusercontent.com/elselawi/apexo/master/manual.md)): server setup on PocketBase, the droplet storage figures, S3 configuration, scheduled backups, account types and permissions, the Patients screen and its tabs, the per-tooth chart in ISO 3950 notation, appointments, labworks, notes, expenses and receipt scanning, DICOM import and the X-ray viewer, settings, and the CSV import and export field lists.
- [Apexo changelog](https://apexo.app/changelog) ([source](https://raw.githubusercontent.com/elselawi/apexo/master/CHANGELOG.md)): version 0.14.1 as current, the 0.14.0 DICOM/RVG import and viewer, and the field-level offline merge.
- [Apexo on GitHub](https://github.com/elselawi/apexo).
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Apexo too.
