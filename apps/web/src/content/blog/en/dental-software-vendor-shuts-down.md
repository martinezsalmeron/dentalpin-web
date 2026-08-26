---
title: "What happens if your dental software vendor shuts down"
description: "Acquisition, end of life or insolvency: what happens to your patient data, what you still owe on record keeping, and exactly what to do before and after."
pubDate: 2026-08-26
translationKey: proveedor-software-cierra
tags: [continuity, data-export, contracts, gdpr, clinical-records]
---

Your data is not deleted on the day of the announcement, and your duty to keep the clinical record does not pause either. What decides whether your vendor closing costs you an afternoon or six months is one thing: whether you already hold a readable export outside their system before it happens.

If you do not have one, make one this week. If you have one and have never opened it, open it today.

## Vendors do not shut down in one single way

Almost nobody switches off the servers overnight. The end arrives in three different shapes, and each leaves you with a very different amount of room.

| How it ends | What happens to the software | Warning you usually get | What breaks first |
|---|---|---|---|
| Acquisition | Keeps running, new owner, new roadmap | ✓ Months, sometimes years | Price and support, well before the product |
| End of life | Stops being updated, then switched off | ~ Weeks to months | Integrations and compliance features |
| Insolvency | Can go dark with very little notice | ✗ Days, or none | Access, and with it the export button |

Acquisition is the most common and the least dramatic. The software usually survives, but the company serving you is no longer the one that signed with you, and the terms get renegotiated at the next renewal.

End of life is an announcement. They stop selling the product, keep it alive for a few months and offer to move you onto another product of theirs. You have time here, and the classic mistake is spending all of it deciding instead of exporting on day one.

Insolvency is the bad case. The company stops trading, and the servers, the support desk and the export button can go with it, which is precisely what you need at that moment.

## What is yours, and what never was

This distinction is worth having clear before you need it.

- **The data is yours.** You are the controller and the vendor is the processor. Article 28(3)(g) of the GDPR requires the processor to delete or return all personal data at the end of the provision of services, at your choice.
- **The program is not.** You hold a licence to use it, not the software itself. A company failing does not make you the owner of anything.
- **Neither is the running system.** Even if they hand back every last byte, you still have nowhere to run it if the software was theirs and lived in their cloud.

> **A contract clause is worth exactly what the company that signed it is worth.** The right to get your data back is real, but against an insolvent company it is a claim in a queue, not a button. That is why the copy is made beforehand, not afterwards.

Which is why this article is not about which clause to invoke. It is about what you should already have saved.

## Your record keeping duty does not switch off with their server

Retention rules for clinical records are national, and none of them contain an exception for the case where the software vendor went out of business. The obligation sits with the practice, not with the supplier.

The practical consequence is simple. A patient who asks for their record in three years, or a regulator who asks for a note from four years ago, is asking you. "Our software company closed" is not an answer to either of them.

![Patient record showing clinical alerts, the active plan and a timeline filtered by visits, treatments, payments and communications](/screenshots/patient-timeline.png)

*Years of visits, treatments and payments on one screen. This is what has to come out in a format you can read without the program that drew it.*

## Signs a vendor is in trouble

None of these proves anything on its own, and none is a reason to walk out. Every one of them is a reason to test your export this week.

- **Support gets slower and thinner.** Usually the first symptom, because support is the first thing cut.
- **The roadmap stops.** Months with no releases, or releases that are only cosmetic.
- **The invoicing entity changes.** A different company name or registration number on the invoice means something moved in the ownership.
- **They push you onto another of their products.** That is the polite way to announce an end of life.
- **New charges appear for things that used to be included.** Especially if one of them is exporting your data.
- **The people you know leave.** When your account manager and your usual support engineer both disappear in the same quarter, ask.

## What to do this week, before anything happens

Half a morning of work, and it pays off for a failed disk just as much as for a closure.

1. **Run a full export** and write down the date. If your software has no such option, that absence is the most important answer on this list.
2. **Open it without the program.** A CSV in a spreadsheet, an X-ray straight from the folder. If it only opens in their software, it is not an exit.
3. **Check all four blocks are there**: patients, clinical, financial and files, with an index tying every image to a patient. The [format to insist on](/en/blog/export-dental-software-data/) is a separate conversation, and it belongs before you sign.
4. **Store it encrypted and off site.** A drive in a drawer in the same room does not survive the same fire.
5. **Reread your contract** for three things: notice period, what happens to the data at termination, and whether exporting costs money.
6. **Write one page on who does what** if it does not start tomorrow: who runs the export, where it is kept, who gets called.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Invoice numbering and payment states are the hardest thing to rebuild afterwards. They come out of an export cleanly and out of a printout very badly.*

## What to do on the day it is announced

1. **Export before you finish reading the announcement.** Access is the first thing to degrade and the last thing anyone warns you about.
2. **Repeat the export weekly** for as long as the service is up. Each copy is a recovery point.
3. **Download the large files separately.** X-rays and photographs are usually most of the volume and the first part of a bulk download to fail.
4. **List what does not export** and screenshot those screens. An image is worse than data and far better than nothing.
5. **Ask for the dates in writing**: how long the service runs, how long downloads stay available, what happens to the data afterwards.
6. **Do not cancel the subscription yet.** Cancelling usually closes access immediately, and with it the export you have not finished.
7. **In an insolvency, write to the administrator** with your contract and the reference to Article 28(3)(g). It is slow, and it puts your request on the record.
8. **Only start shopping for a replacement once the data is in your hands.** Choosing in a hurry with no copy is how the next bad contract gets signed.

> **Cancelling payment before exporting is the most expensive mistake on this list.** Giving notice and losing access are usually the same action, and after it there is no screen left to download anything from.

## Source escrow gives you code, not a working practice

Some contracts include a source code escrow: if the vendor disappears, a third party releases the code to you. It sounds like a safety net, and it is worth understanding what it actually hands over.

- **It gives you code**, not your data. Those are two separate deposits and the second one is almost never there.
- **It gives you an unbuilt project.** You need a server, a database, dependencies and somebody able to stand it up.
- **It gives you the deposited version**, which may be two years old.
- **It releases on the agreed conditions**, and those get argued about at exactly the moment the company is at its worst.

Escrow beats nothing. It sits well below having the system on your own server and an open export you have already tested.

## The question that makes this problem small

There is only one: **which part of this still works tomorrow if the company no longer exists?**

- If the software runs on your server, it keeps running. No support and no updates, but the practice opens.
- If the data is in open formats, it can be read. With another program, with a spreadsheet, with whatever exists in eight years.
- If the code is open source, any developer can maintain it. Not free, but possible, and possible is the difference that matters.

When those three answers are yes, a vendor shutting down stops being an emergency and becomes an administrative nuisance. That is the whole goal.

Dentalpin is built around those three answers: it is open source, it installs on your own server with `docker compose up`, and the database is PostgreSQL, so a full dump is a command rather than a feature you have to request. There is a managed version too, and the [pricing](/en/pricing/) is published. If what you are actually weighing up is moving now, the order of operations is in the [guide to migrating without losing the clinical record](/en/blog/migrate-dental-software/).

## Sources

All consulted on 26 August 2026.

- Regulation (EU) 2016/679 (GDPR), Article 28(3)(g) and Article 20. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)

This is not legal advice. Record retention periods and the consequences of an insolvency depend on your jurisdiction and on your contract. Check both with your own adviser before acting.
