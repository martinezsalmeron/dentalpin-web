---
title: "Dentalpin vs NexHealth: a front-office layer and a record system"
description: "NexHealth is not a practice management system, it syncs on top of one. A sourced comparison with Dentalpin, which is the record system and is open source."
pubDate: 2026-08-18
tags: [comparison, nexhealth, dental-software]
---

NexHealth and Dentalpin are not the same kind of product, and almost everything useful in this comparison follows from that. NexHealth is a front-office layer that connects to the practice management system you already run. Dentalpin is the practice management system.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about NexHealth below comes from a page NexHealth publishes on nexhealth.com, help.nexhealth.com or synchronizer.io, linked and dated at the end. No aggregator blogs and no review sites: they contradict each other and some are written by competitors. There is a section on when NexHealth is the right answer, and for a large number of practices it is.

## In thirty seconds

**NexHealth** does the things a record system is usually bad at: online booking, digital intake, reminders, reviews, insurance eligibility and card payments. Its own homepage headline is "Automate Your Front-Office", and its integrations page leads with "Keep your system. Lose the busywork." It states that "10,000+ medical and dental practices run on NexHealth".

**Dentalpin** is the other half of that sentence. Odontogram, periodontal charting, clinical records, treatment plans, quotes, invoicing and reports, open source, installed on a server you own, with no licence per chair, per dentist or per patient.

The question that decides between them is not which one to buy. It is whether you already have a record system you intend to keep. If you do, NexHealth is a layer on top of it and we are a replacement for it, and those are different purchases. If you are choosing a record system from scratch, NexHealth is not a candidate, because it does not chart teeth.

![Dentalpin schedule, day view, with appointments laid out per chair across the working day](/screenshots/schedule-day.png)

*The day view of the schedule, with the demo data the installation ships with.*

## What NexHealth is

A patient experience platform that sits on top of an existing electronic health record. Its own summary of the product is "Scheduling, intake, and payments that sync to the patient record. Every appointment. Zero reconciliation."

The products it publishes are Scheduling (online booking, waitlist, one-click recalls), Communications (messaging, automated reminders, reviews, marketing campaigns), Forms, Payments, Insurance Verification and Insights.

### The Synchronizer is the actual product

Everything above depends on one piece of infrastructure, and NexHealth is refreshingly direct about why it exists: "Most practice management software wasn't built to connect to the internet... The Synchronizer bridges that gap."

It describes the Synchronizer as "proprietary technology built by NexHealth to work independently from health record systems", meaning it does not need the record vendor's cooperation. On the scheduling page it commits to a number: "You can automatically read and write to your health record system within 10-15 seconds for most integrations via the NexHealth Synchronizer."

Two different counts appear on two different pages, and they cover different things. The integrations page lists more than eighty systems marked "Supported", including Dentrix, Eaglesoft, Open Dental, Curve Dental, Carestack, Easy Dental and DentiMax on the dental side, and Epic, Cerner, athenahealth, eClinicalWorks and NextGen on the medical side. The developer-facing API at synchronizer.io says something narrower: "We sync with 15+ EHRs behind the scenes so you never have to."

> **Dentalpin is not on that list.** Consulted 18 August 2026, no Dentalpin entry appears among the supported systems. The page does carry an "Other" option, which says "We don't have a dedicated sync built for that system just yet. But you can still use many of NexHealth's great features." So the two products do not currently pair, and that is a fact about us as much as about them.

### What it does that a record system usually does not

**Insurance verification** is the strongest of them. NexHealth publishes "Verify insurance with 1,200+ carriers", says it will "Automatically check patients' insurance up to a week before each visit", and states that it will "Save eligibility summaries to your health record system automatically".

**Payments** covers both counters: card-present terminals in the office and text-to-pay links, accepting "all major credit cards, Apple Pay, Google Pay and Affirm". The ledger detail matters and they publish it: the payments page states it "fully syncs with Eaglesoft, OpenDental, and Dentrix", and that for other systems payments "won't sync to your ledger just yet".

**Communications** covers reminders, two-way messaging, review requests and campaigns.

### What it costs

> **NexHealth publishes no prices.** The pricing page consulted on 18 August 2026 carries a quote calculator and no dollar figure for any package. What it does publish is the shape of the contract, which is more than most: "When you choose the month-to-month option, you'll be charged every month. For our yearly subscription, you'll pay the full year up front", and "There are no cancellation fees. Just provide us with notice that you don't want to renew."

Adding sites is a sales conversation: "Contact your sales rep to increase your locations and upgrade your package."

Three numbers are published, in the help centre and on the payments page, and they are the ones that decide a monthly bill:

- **Verifications.** 800 a month are included, and "each additional verification is $0.20".
- **Campaign SMS.** 5,000 "per location every month", then "$0.012/SMS message". Template-based SMS and two-way messaging do not count against it.
- **Card processing.** 2.6% + $0.07 on an in-office terminal, 2.9% + $0.30 on text-to-pay.

The developer API is priced openly too: "Usage-based pricing at $0.10 per API call", with a free sandbox.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want, and pay no licence per chair, per dentist or per patient. If you would rather not run the server yourself, we will run it on a server that is still contracted in your clinic's name, for a fee we quote per market.

Odontogram, periodontal charting, patient records, clinical history, treatment plans, quotes, invoicing with audited number series, payments, recalls and reports. There is an AI assistant that acts on your real data inside each user's permissions, and an optional WhatsApp module that sends reminders and recalls and puts the patient's reply in a thread on their record.

What it does not have is the entire front-office half of NexHealth's catalogue. No online booking page, no patient portal, no digital intake forms, no insurance eligibility checking, and no card processing: Dentalpin records that a payment was made by card, it does not take the card.

![Dentalpin patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*A patient record: odontogram, clinical alerts, active plan and next appointment on one screen.*

## Side by side

Verifiable rows only. NexHealth's figures are its own, from its own pages.

| | NexHealth | Dentalpin |
|---|---|---|
| What it is | Front-office layer | Practice management system |
| Needs a record system underneath | ~ Yes, it syncs to yours | ✓ No, it is the record |
| Clinical charting | ✗ Not offered | ✓ Odontogram and periodontal chart |
| Treatment plans and quotes | ✗ Not offered | ✓ Included |
| Online booking | ✓ Included | ✗ Not offered |
| Digital intake forms | ✓ Included | ✗ Not offered |
| Insurance verification | ✓ 1,200+ carriers stated | ✗ Not offered |
| Card payments | ✓ Terminals and text to pay | ✗ Records them, does not process them |
| Reminders and recalls | ✓ SMS, email, campaigns | ~ WhatsApp module, two way |
| Reviews and campaigns | ✓ Included | ✗ Not offered |
| Published price | ✗ No figures on the pricing page | ~ Free self-hosted, managed fee quoted |
| Metered usage | ~ 800 verifications and 5,000 SMS a location, then per unit | ✓ Nothing metered |
| Deployment | ✗ Cloud only | ✓ Your server, your provider, or local |
| Where the data lives | With NexHealth and your record system | ✓ Wherever you decide |
| Documented public API | ✓ Yes, $0.10 a call | ✓ Full REST, OpenAPI, no per-call fee |
| Practices using it | ✓ 10,000+ stated | ✗ Very few so far |
| Auditable code | ✗ No | ✓ Published on GitHub |
| Works with the other one | ✗ Dentalpin not on their list | ✗ The same fact, from our side |

The green on their side of that table is not a courtesy. Six of those rows are things a practice needs and we have not built.

## Choose NexHealth if

This section is meant seriously, not as a formality.

- **You already run Dentrix, Eaglesoft, Open Dental or Curve and you are keeping it.** That is the case NexHealth is built for, and nothing in this comparison argues against it. Replacing a working record system to gain online booking would be an absurd trade.
- **Insurance eligibility is eating your front desk.** 1,200+ carriers, checked automatically up to a week ahead, with the summary written back to the record. We do none of this, in any market.
- **You want patients to book themselves.** Online booking, a waitlist and one-click recalls are their core, and a booking page you do not have cannot fill a cancellation.
- **You need to take cards.** Terminals in the operatory and text-to-pay links, with the ledger sync published per system. Dentalpin has no merchant side at all.
- **You are on the developer side of this.** A documented API over normalised data from many record systems, at $0.10 a call with a free sandbox, is a genuinely good answer to a horrible integration problem.
- **Scale is what reassures you.** 10,000+ practices is a lot of edge cases already found by somebody else.

## Choose Dentalpin if

- **You are choosing the record system itself.** This is the honest dividing line. NexHealth does not chart teeth, plan treatment or produce a clinical history, so it cannot be the answer to that question.
- **You want the clinical records on hardware you control.** You pick the server, the provider and the jurisdiction, and you can point at the machine.
- **The bill should not grow every time the practice does.** No per-chair or per-user licence, and nothing metered by the message or the eligibility check.
- **You want to audit the code** that holds your patients' records, or have somebody audit it for you. It is published.
- **You want to integrate without a meter running.** A full REST API with OpenAPI on a system you own, with no per-call charge, because the calls are to your own server.
- **WhatsApp is how your patients actually reply.** In much of Europe and Latin America it is, and the two-way thread lands on the patient record. See [pricing](/en/pricing/) for what the managed option costs.

![Dentalpin invoice list with issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*The invoice list, with the payment state of each one and what is still outstanding.*

## What moving between them actually means

There is nothing to migrate out of NexHealth, because your clinical records were never in it. They are in the record system underneath, and that is what a move touches.

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

The practical warning is the one in the table. If you run NexHealth today and move your record system to Dentalpin, the sync does not come with you, because Dentalpin is not on NexHealth's supported list. Confirm that with them before you plan anything, not with us.

## The honest part

For a US practice with a working record system, NexHealth is solving a real problem that we are not solving at all, and the two products are not in competition. The Synchronizer in particular is an unglamorous piece of engineering that exists because desktop dental software was never designed to be reachable from the internet, and building it independently of the record vendors was the right call.

What we would push back on is narrower. A platform whose whole pitch is removing friction from the front desk still routes its own prices through a sales rep, and the three figures it does publish are all overage rates. If the meters are worth publishing, the base is too.

Dentalpin is a different bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All NexHealth pages consulted on 18 August 2026.

- [NexHealth home](https://www.nexhealth.com/): "Automate Your Front-Office", "Scheduling, intake, and payments that sync to the patient record. Every appointment. Zero reconciliation.", and "10,000+ medical and dental practices run on NexHealth".
- [Integrations](https://www.nexhealth.com/integrations): "Keep your system. Lose the busywork.", the 80+ systems marked "Supported" including Dentrix, Eaglesoft, Open Dental, Curve Dental, Carestack, Easy Dental, DentiMax, Epic, Cerner, athenahealth, eClinicalWorks and NextGen, the absence of any Dentalpin entry, and the "Other" wording: "We don't have a dedicated sync built for that system just yet. But you can still use many of NexHealth's great features."
- [NexHealth Synchronizer](https://www.nexhealth.com/features/nexhealth-synchronizer): "proprietary technology built by NexHealth to work independently from health record systems", "Most practice management software wasn't built to connect to the internet... The Synchronizer bridges that gap", and read and write across dozens of systems.
- [Scheduling](https://www.nexhealth.com/features/scheduling): "Automatically syncs your schedule with your health record system", and "You can automatically read and write to your health record system within 10-15 seconds for most integrations via the NexHealth Synchronizer."
- [Features index](https://www.nexhealth.com/features): the product names, Scheduling, Communications, Forms, Payments, Insurance Verification, Insights and the Synchronizer.
- [Verification](https://www.nexhealth.com/features/nexhealth-verification): "Verify insurance with 1,200+ carriers", "Automatically check patients' insurance up to a week before each visit", and "Save eligibility summaries to your health record system automatically".
- [Payments](https://www.nexhealth.com/features/payments): terminals and text-to-pay, "all major credit cards, Apple Pay, Google Pay and Affirm", "fully syncs with Eaglesoft, OpenDental, and Dentrix", payments that "won't sync to your ledger just yet" elsewhere, and the 2.6% + $0.07 and 2.9% + $0.30 processing rates.
- [Pricing](https://www.nexhealth.com/pricing): no dollar figures for any package, the month-to-month and annual wording, "There are no cancellation fees. Just provide us with notice that you don't want to renew.", and "Contact your sales rep to increase your locations and upgrade your package."
- [Included usage and overage fees, NexHealth Help Center](https://help.nexhealth.com/en/articles/11584920-included-usage-overage-fees): 800 verifications a month then "$0.20", and "5,000 SMS messages via NexHealth Campaigns per location every month" then "$0.012/SMS message".
- [Synchronizer developer API](https://synchronizer.io/), which is where nexhealth.com/api redirects: "Query normalized patient, scheduling, and billing data from a single API. We sync with 15+ EHRs behind the scenes so you never have to.", and "Usage-based pricing at $0.10 per API call".
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for NexHealth too.
</content>
</invoke>
