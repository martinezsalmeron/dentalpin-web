---
title: "Opening a dental practice: the software you need on day one"
description: "What software a new dental practice actually needs on opening day and what can wait: schedule, clinical records and compliant invoicing, in that order."
pubDate: 2026-08-16
translationKey: abrir-clinica-dental-software
tags: [practice-management-software, opening-a-practice, operations]
---

On opening day you need three things from your software and nothing else: a schedule two people can work in at once, a clinical record with a dental chart, and invoicing that satisfies whatever your country requires. Everything else, patient portal, stock control, reporting, marketing, gets added when you have enough patients for it to do anything.

The order matters because only one of the three is irreversible. A badly built schedule is rebuilt in an afternoon. The clinical records from your first six months, if they stayed on paper, do not come back.

## The three things you genuinely need first

- **A multi-user schedule.** Not a calendar. It has to show your chairs side by side, let reception type while you are with a patient, and survive a same-day move without a phone call.
- **A clinical record with a dental chart.** Every visit dated, medical alerts visible the moment the file opens, and the chart as a record rather than a drawing. This is the practice's asset.
- **Invoicing that complies.** A single numbered sequence from invoice one, and whatever your tax authority expects of it. Changing numbering scheme halfway through a financial year is an accounting problem, not a settings change.

![Weekly schedule view with appointments spread across clinicians and time slots](/screenshots/schedule-week.png)

*A week with two chairs takes up more screen than it does on paper, which is the point at which paper stops working.*

## What can wait, and nothing bad happens

Almost all of it. The temptation in month one is to buy the full plan because the demo showed it well and it feels like being prepared. With fifteen patients a month, a marketing module has nothing to work with.

| Module | Day one? | What happens if you wait |
|---|---|---|
| Schedule | ✓ Yes | Nothing substitutes for it, even at low volume |
| Clinical record and dental chart | ✓ Yes | What you do not record now is not recoverable |
| Invoicing | ✓ Yes | Numbering starts with the first invoice |
| Treatment plans and quotes | ~ First few weeks | The first handful fit in a hand-made PDF |
| Automated reminders | ~ Month two or three | At low volume reception just phones people |
| Patient portal | ✗ Later | With an empty schedule, nobody uses it |
| Stock control | ✗ Later | A spreadsheet holds up until the first big order |
| Reporting and KPIs | ✗ Later | Three months of data says nothing |

> **Buy for what you will use in six months, not in three years.** A large plan bought on day one is paid in full from day one, and the discount for committing early rarely covers twelve months of paying for empty modules.

What those three years actually add up to is in [what dental software really costs](/en/blog/dental-software-cost/), and the questions worth asking first are in [what to ask before you sign](/en/blog/questions-before-signing-dental-software/).

## The clinical record is the one thing you cannot redo

Retention periods are long. NHS Business Services Authority guidance for NHS dental practices puts clinical care records at **11 years**, with finance-related records at 2 years.

That is a floor, not a target. An orthodontic patient is in treatment for three years and comes back after ten, and what decides whether you can treat them well is whether you still hold their radiographs and their notes.

![Patient record showing the dental chart, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*Alerts at the top, chart in the middle, active plan alongside: this is what has to survive a decade of storage.*

> **Starting on paper "until there is volume" is the expensive first-year decision.** Not because paper fails, but because typing six months of files into software afterwards costs weeks of reception time, and in practice almost nobody finishes the job.

## What has to be settled before you open the door

This is not legal advice, and your own adviser will tell you what applies to you. Two things touch the software directly.

- **Registration with your regulator.** In England, providing a regulated activity without being registered with the Care Quality Commission is an offence under section 10 of the Health and Social Care Act 2008, and the CQC asks for a statement of purpose covering everything in Schedule 3 of the 2009 Registration Regulations. Apply only once locations and staff are actually ready.
- **Invoice numbering.** Decide the series and the format before you issue the first invoice, because the system has to record them in sequence with no gaps.

Data protection applies from patient one, not patient one hundred: a record of processing, a data processing agreement with your software vendor, and a decision about who inside the practice sees what. We cover it in [GDPR in the dental practice](/en/blog/gdpr-dental-clinic/).

## The order to set it up in, over one week

1. **Create the people and their permissions.** Reception does not need the accounts, and the hygienist does not need to issue invoices.
2. **Load the treatment catalogue with its prices.** It feeds quotes, invoices and reports afterwards, so doing it once properly saves the rest.
3. **Build the schedule around the real chairs**, with per-treatment durations and turnaround gaps between patients.
4. **Set the invoice series and numbering** before issuing any.
5. **Run one whole fake visit**, appointment to payment, with a test patient. That is where the three missing fields appear.
6. **Restore a backup** to prove it exists and opens. What to keep and how often is in [dental clinic backups](/en/blog/dental-clinic-backups/).

## Cloud or your own server, decided before you install

This is the only structural day-one decision, because changing it later means a migration. For a new practice with no IT person, cloud removes work; if you want the data in the building, or the connection on your street is poor, your own server stops being a quirk. Both options with their real costs are in [cloud or self-hosted](/en/blog/cloud-or-self-hosted-dental/).

One thing holds either way: ask for the full data export during evaluation and actually open it. It is the emergency exit, and it only counts if you test it while you do not need it.

## What to budget

Set aside less than you are told for software and more than you think for the time to configure it. A two-chair practice is set up in two or three evenings if the treatment catalogue is prepared beforehand, and in two weeks if it is improvised as you go.

If you want to start without a subscription while the first patients arrive, Dentalpin is open source, installs with `docker compose up` on your own server or in the cloud, and all three day-one things are included rather than sold as modules. The terms are on the [pricing page](/en/pricing/).

## Sources

- "How long should NHS dental practices keep patient records for?", NHS Business Services Authority. Consulted 16 August 2026. <https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01913/en-us>
- "Register as a provider", Care Quality Commission. Consulted 16 August 2026. <https://www.cqc.org.uk/guidance-regulation/registration/register-provider>
- "Supporting documents (dentists)", Care Quality Commission. Consulted 16 August 2026. <https://www.cqc.org.uk/guidance-providers/registration/supporting-documents-dentists>
