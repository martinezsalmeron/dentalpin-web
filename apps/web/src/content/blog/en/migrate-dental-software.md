---
title: "How to migrate dental software without losing patient records"
description: "A practical guide to switching dental software without losing patients, clinical history or invoices: what to export, how to test it first, and the step where most migrations fail."
pubDate: 2026-07-30
tags: [migration, dental-software, patient-records]
---

Migrating without losing anything comes down to three rules: export everything before you cancel the old contract, in a format you can read without that software; test the import on a copy before you touch the live practice; and never accept an automatic treatment-catalog match without checking it row by row. Practices that lose data almost always skipped the first rule, trusting that "the new vendor will handle it."

You don't need to be technical to get this right. You need to do it in this order.

## Before you touch anything: export and verify

Ask the vendor you're leaving for the full export, not a curated subset of what they think matters. At minimum, this needs to leave their system and land in yours in an open format (CSV, XML, or a database you can query without a license):

- **Complete patient records**: contact details, signed consents and the date each patient was registered.
- **Clinical history and odontogram**, dated entry by entry, not just the current state.
- **Quotes and invoices**, with their original numbering. A gap in the sequence is the first thing an audit flags.
- **Images and X-rays**, which almost always live outside the main database and get forgotten until the last day.
- **The treatment catalog** exactly as it's coded in the old system, not just the names shown on screen.
- **Appointment history**, if you'll ever need to justify attendance or no-shows.

> **The export is your safety net, not an exit formality.** Ask for it weeks before signing with the new vendor, open it and check it yourself. If the vendor you're leaving makes it hard to get a full export, that tells you something about how they treat your data, and you learn it before you're gone.

## The step where most migrations fail

Two practices almost never code treatments the same way. One calls something "root canal" that another splits into three separate codes by tooth and canal count. When the new software tries to automatically match the old catalog against its own, some rows match cleanly and some don't.

The failure isn't that the match is imperfect. It's accepting a doubtful match without looking at it.

> **A silently guessed equivalence produces misissued invoices nobody catches for months.** This isn't a software bug, it's a process failure: if nobody reviews what the system proposes row by row, the error gets inherited by every patient billed under that treatment from then on.

Before accepting a bulk import, ask to see the proposed mapping with counts: how many patients, how many quote lines and how many invoices depend on each treatment being reassigned.

## How to test it without risking the live practice

1. **Generate the full export** from the old system and keep it separately, outside both systems, before you install anything.
2. **Run the import in a test environment**, not against live data on the new system.
3. **Compare counts**: number of patients, quotes, invoices and future appointments. If they don't match, stop there.
4. **Run both systems in parallel for a few weeks** if your volume allows it: keep billing on the old system while you confirm the new one reflects the same numbers.
5. **Freeze the old system in read-only mode** once you trust the new one. Don't delete it or cancel the subscription yet.

## What to demand from your current vendor

- **A full export, not an API limited to whatever they find convenient to expose.**
- **An open, documented format**, so whoever receives it doesn't have to guess what each field means.
- **A reasonable window**, not a deletion threat a few days after you cancel.
- **Images at their original resolution**, not a compressed thumbnail.

Also check with your professional board or accountant how long you're required to retain clinical records where you practice: the rules vary, and this isn't a figure to take on faith without confirming it yourself.

## A checklist before you sign with the new vendor

| What to check | Why it matters |
|---|---|
| Format of the export your current vendor delivers | Determines whether you need an intermediate tool or can import directly |
| Whether the new system shows a preview before writing anything | Without a preview, a mapping error is applied before you see it |
| Whether treatment mapping is reviewed row by row or only in bulk | Bulk is fast, and it's where the error slips in |
| Whether images migrate with the patient record or separately | Separately means someone has to link them back by hand afterward |
| Whether you can keep the old system in read-only mode | Without it, you have nothing to compare against if something breaks later |

At Dentalpin we built this as an import module (`migration_import`) that follows the same four phases as this guide: upload the file, show a preview with counts before writing anything, let you review the treatment mapping row by row (anything scoring above 0.9 gets accepted in bulk, the rest is your call) and only then execute. The full flow is documented in [dental-bridge](https://github.com/dentaltix/dental-bridge), and [installing Dentalpin on your own server](/en/blog/install-dentalpin-in-three-minutes/) takes three minutes if you want to try it against your own export afterward.

Run into a migration step this guide is missing? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we'll add it.
