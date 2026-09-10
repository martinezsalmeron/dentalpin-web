---
title: "Dentalpin vs Aerona: per treatment room, unlimited users, no published figure"
description: "Aerona prices AeronaDental per treatment room with unrestricted users, but publishes no figure. Sourced from their own pages and contract, September 2026."
pubDate: 2026-09-10
tags: [comparison, aerona, uk, ireland, dental-software]
---

Aerona publishes the unit it charges you by and never publishes the number, which is an unusual halfway house and the thing a UK or Irish practice has to price out before anything else.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Aerona below comes from a page or document Aerona publishes itself, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when Aerona is the better choice, because for a private practice in the UK or Ireland it very often is.

## In thirty seconds

**AeronaDental** is, in its publisher's words, "a cloud-based practice management software solution that delivers best in class functionality for clinicians and business owners". Aerona Software was "founded in 2003 by Brigeen Peto", shipped a desktop product in 2005, moved to the cloud in 2010, and its own pages ask "Why do 6000 worldwide users choose AeronaDental?" The contracting entity is Aerona Software Services Limited, registered number NI47827, in Derry.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it has no patient portal with video consultation in the box.

The question that decides between them is whether you want a hosted product with the front-of-house layer already built and a monthly bill you have to ask for, or software whose price and source are both published and whose bill is your server.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Aerona is

A browser-based practice management system sold into the UK and Ireland by Aerona Software Services Limited, whose registered office is "2nd Floor, Embassy Building, 3 Strand Road, Derry City, Co. Derry, Northern Ireland, BT48 7BH". Their About page dates the company to 2003, the first desktop release to 2005, and the move to the cloud to 2010, where they describe themselves as "one of the very first Cloud-based software solutions available to dental clinics".

Ownership changed four years ago and they say so plainly: "AeronaDental was purchased by Soho Capital France in summer 2022", and under that owner AeronaDental is "part of a family of European dental software companies across France, Portugal & Poland".

The product comes in two shapes, AeronaDental Single Site and AeronaDental Multisite/Group, plus a Patient Portal. It is also sold well beyond dentistry: their own "Who's it for?" section covers Dental/Perio/Ortho, Aesthetic & Cosmetic Clinics, Therapeutic Clinics, Foot Clinics and Healthcare Clinics. That is a fact about the company, not a criticism. A vendor spreading one platform across five clinical verticals gets a wider install base and a shallower dental-specific roadmap, and which of those matters more depends entirely on your practice.

The dental depth is real where they describe it. Their perio charting page is more concrete than most: "Our perio charting offer best-in-class usability and readability. Offering the ability to chart pocket-depth, gum recession, mucogingival junction, furcation and tooth mobility." Orthodontics gets "full tracking of referrals and easy sharing of treatment reports". The Patient Portal carries online booking, payments, forms, surveys, "secure digital signing of patient consents" and Connect&Consult, their video consultation tool.

The integration list is long and named, which is more than most vendors publish: imaging software with single-click access from the patient record, Stripe, GoCardless, PayPal, Dojo and Worldpay for payments, DenGro and Boxly AI for leads, DenChat and ViveoAI for patient communication, and OrthoBridge for orthodontics.

![Dentalpin periodontal chart showing the six measurement sites per tooth](/screenshots/periodontogram.png)

*The periodontal chart, recording six sites per tooth.*

## What Aerona costs

No figure appears anywhere on aerona.com. There is no pricing page: `aerona.com/pricing/` returns HTTP 404.

What they do publish is the unit, and they publish it three separate times. The Multisite page says "Unrestricted users & devices ensure that your team & business can grow as needed without your costs increasing. You only ever pay for the number of treatment rooms that you have." The same page describes scaling as "Simply add or remove treatment rooms; users; and change payments, prices & treatments as required". And their partner programme pays referrers "10% commission (of the monthly treatment room subscription, excluding additional extras)".

> **A monthly subscription per treatment room, with users and devices unrestricted, is a genuinely good commercial shape.** It means a practice does not pay more for putting a tablet in every surgery or giving the hygienist and the practice manager their own logins, which is exactly where per-seat pricing punishes small teams. The number itself is only available in a sales call.

Two other cost facts are theirs. The partner terms name "migrations, training, SMS credits etc" as "additional services provided by Aerona", so those sit outside the subscription. And the same page defines a successful referral as one where "the Referred Contact has signed a minimum 12-month contract", which is the only contract length published anywhere on their site.

That last point deserves care, because the Online Services Agreement handles term differently: it says the agreement runs for a Minimum Term "as set out in the Order Form" and then renews "for successive periods of 1 month or 1 year as specified by the customer". The Order Form is Schedule 2 of the published agreement, and Schedule 2 reads, in full, "To be added". So the schedule carrying the term, the fees and the number of user subscriptions is blank in the version on their website.

One more mismatch worth taking to the sales call: the contract prices "User Subscriptions" while the product pages price treatment rooms. Both are published by Aerona. Ask which one your invoice is calculated from.

## What their contract actually says

This is the part of Aerona that outperforms most of this industry, and it should be said before the comparison table rather than buried under it. Their full Online Services Agreement, with five schedules, is published on the open web at `aerona.com/terms-conditions/`. Most vendors in this queue publish nothing of the sort.

The clauses that matter to a practice:

- **You own your data, stated outright.** Clause 5.1: "The Customer shall own all rights, title and interest in and to all of the Customer Data and shall have sole responsibility for the legality, reliability, integrity, accuracy and quality of the Customer Data."
- **Where the records sit, with a rule rather than a shrug.** Schedule 4: "Aerona uses Amazon Web Services (AWS) to host its servers", and "All EU data will be stored in EU servers under GDPR and UK data will be stored in UK servers." That is more than most cloud vendors will commit to in writing, though no AWS region is named.
- **A published backup policy with numbers.** Nightly full backups, "Full backups are retained for 35 days", point-in-time restore "within the last 35 days", customer files copied to AWS S3 in real time. The policy is explicit that this is disaster recovery and "is not therefore designed as a method of archiving material for extended periods of time".
- **Availability without an SLA.** Clause 4.2 promises "commercially reasonable endeavours to make the Services available 24 hours a day, seven days a week", with a planned maintenance window of "9 pm to 12:00 am UK time". There is no uptime percentage and no service credit anywhere in the agreement.
- **Support is business hours, and more costs money.** Clause 4.3 includes email and telephone support during Normal Business Hours, defined as "9 am to 5 pm local UK time, each Business Day". Beyond that, "The Customer may purchase enhanced support services separately at the Supplier's then current rates."
- **Fees do not come back.** Clause 9.4: amounts "are non-cancellable and non-refundable", payable in "UK pounds sterling (GBP) or euros (EUR)".

The exit terms are the ones to read twice. On termination you have ten days to make a written request for "the most recent back-up of the Customer Data", which they will then "use reasonable commercial efforts to fulfil such request within 30 days of its receipt", provided every outstanding fee is paid, and you "shall pay all reasonable expenses incurred by the Supplier in returning or disposing of the Customer Data". Miss the ten days and "the Supplier may destroy or otherwise dispose of any of the Customer Data in its possession". Either way, "all customer data held by Aerona will be destroyed within 90 days of contract termination".

So getting your records out is possible, chargeable, and on a ten-day clock that starts the day the contract ends. Diary it before you sign.

## The two things their own site does not answer

**The API is behind a password.** Aerona's footer links an API page on every page of the site. That page returns "This content is password-protected. To view it, please enter the password below." An API clearly exists, because the contract's definition of Documentation includes "user instructions, service descriptions and API documentation". What is not public is what it does, what it costs, or how a practice gets access.

> **NHS appears nowhere on aerona.com.** Neither does FP17. Their own site search returns "Sorry, no content matched your criteria" for both. For a private practice that is irrelevant, and for an NHS practice in England or Wales it is the first question to ask them directly, because their marketing does not answer it.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist, per treatment room or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus a REST API with OpenAPI in every install, and an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in any modern browser, on Windows, macOS or Linux. What it does not have is imaging integrations, a video consultation tool, a patient portal of Aerona's breadth, or anything at all for NHS claims.

## Side by side

| | Aerona | Dentalpin |
|---|---|---|
| Model | Commercial subscription | Open source (BSL 1.1) |
| In business since | ✓ 2003, cloud since 2010 | ✗ 2026 |
| Install base published | ✓ "6000 worldwide users" | ✗ None yet |
| Price published | ✗ No figure on any page consulted | ✓ Zero, all included |
| Pricing unit published | ✓ Per treatment room, users unrestricted | ✓ No unit, no licence |
| Source code | ✗ Not published | ✓ Published |
| Client platform | ✓ Any modern browser | ✓ Any modern browser |
| Where the data sits | ✓ AWS, UK data on UK servers, EU on EU | ✓ Wherever you install it |
| AWS region named | ✗ Not on any page consulted | ~ You chose the machine |
| Data ownership in the contract | ✓ Clause 5.1, stated outright | ✓ Your server, your database |
| Full contract published | ✓ Yes, with five schedules | ✓ Licence and code published |
| Backup policy published | ✓ Nightly, 35-day point-in-time restore | ✗ Yours to run |
| Uptime commitment | ✗ None in the agreement | ✗ Your infrastructure |
| Support | ✓ Phone and email, 9am to 5pm UK | ~ Community and docs |
| API documentation | ✗ Password-protected page | ✓ REST with OpenAPI, in every install |
| Patient portal and video consults | ✓ Included, with e-signature | ✗ None |
| Imaging integration | ✓ Single-click from the patient record | ✗ None |
| Payment integrations | ✓ Stripe, GoCardless, PayPal, Dojo, Worldpay | ~ Manual reconciliation |
| NHS claim submission | ✗ Not named on any page consulted | ✗ Nothing |
| Staffed migration | ✓ In-house UK and EU team, chargeable | ✗ Self-service import tool |
| Exit route | ~ Ten days to request, 90 days to deletion | ✓ Your database, any time |
| Fees refundable | ✗ "non-cancellable and non-refundable" | ✓ No fees |

Aerona takes more green marks here than most vendors in this series, and the ones in their column are the load-bearing ones for a working practice: the portal, the imaging bridge, the payments, the migration team and twenty-three years of trading.

## Choose Aerona if

- **You want the front-of-house layer already built.** Online booking, patient forms, surveys, consent signing with an audit trail, video consultations, Stripe and GoCardless payments, and the analytics on top of all of it. Building that yourself around a self-hosted system is months of work, and for most practices it is the whole reason to buy software.
- **You want a supplier who publishes the contract.** The full agreement and five schedules are on the open web, including where the data sits, how backups work and what happens at the end. That is rare enough in dental software to be a reason on its own, and it lets you read the bad clauses before you sign rather than after.
- **You want imaging in the same window.** Their integrations page describes opening a patient's record in your preferred imaging software with a single click and saving new images back without leaving AeronaDental. We have nothing equivalent.
- **You want somebody else to do the migration, in the UK or the EU.** Their team makes a point of it: "The Aerona migrations team is all UK & EU based, which means we do not outsource any aspect of the data management process", with "almost twenty years of data migration experience" and migrations "completed with no or next to no clinical downtime".
- **You have more staff than surgeries.** Per treatment room with unrestricted users and devices is the right shape for a practice with two chairs, six part-time clinicians, two receptionists and a practice manager. Per-seat pricing punishes exactly that practice.
- **You want a phone number that answers.** They publish both, +44 28 70002040 for the UK and 003531 566 7602 for Ireland, and email and telephone support is included in the subscription rather than sold as a tier.

## Choose Dentalpin if

- **You want to know the price before the sales call.** Ours is published and it is zero. Theirs is a monthly subscription per treatment room whose figure exists in no document on their website, including the contract, whose Schedule 2 reads "To be added".
- **You want the API without asking for a password.** Aerona's API page is password-protected and their marketing answers none of the questions about it. Ours is REST with OpenAPI, documented in every install, including the free one.
- **You want an exit that is not on a clock.** Their agreement gives you ten days from termination to request a backup, thirty days for them to produce it, expenses payable by you, and deletion within ninety days. On a self-hosted install the database is already on your machine and there is no request to make.
- **You want the source, not just the data.** Their clause 5.1 gives you ownership of your data, which is genuinely better than most. It does not give you the software that reads it, so if the product changes or the company does, the records are yours and the system is not.
- **Fees coming back matters to you.** "Non-cancellable and non-refundable" is a normal SaaS clause and it is still a real risk on a twelve-month term. There is nothing to refund on software that costs nothing.
- **You want to name the country and the machine.** Their UK and EU data rule is better than most of this market publishes, and it still stops short of a region or a data centre. On your own server you know exactly which box it is.

![Dentalpin agenda, week view across the clinic's chairs](/screenshots/schedule-week.png)

*The week view, which is where a practice actually sees whether its chairs are full.*

## What migrating looks like

Aerona will do it for you, and their pitch on it is about where the work happens rather than what it costs: no outsourcing, an in-house UK and EU team, and the line they put on the page themselves, "The question every dentist should ask is where is my data being securely processed?" No price is published, and their partner terms confirm migrations are billed as an additional service on top of the subscription. Ask for the figure in writing before you commit.

Ours is a tool you drive yourself, and the difference is real work that lands on somebody:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

## The honest part

For a private practice in the UK or Ireland looking to buy dental software this month, Aerona is very likely the better fit, and this comparison is not going to pretend otherwise. They have twenty-three years behind them, the patient-facing layer is built and integrated, the imaging and payment bridges exist, somebody does the migration, and the contract they ask you to sign is on the open web where you can read it first. On the evidence of their own pages they are a serious, unusually transparent supplier.

Two things are still worth weighing. The price of the thing is not published anywhere, in a market where the unit already is, so the only way to find out whether you can afford it is to be sold to. And the API, the mechanism by which a practice does anything with its own records outside the product, sits behind a password.

Dentalpin is the other bet: that software holding clinical records should be readable and ownable by the practice it holds them for, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All Aerona pages consulted on 10 September 2026:

- [Home](https://aerona.com/) and [Dental Software](https://aerona.com/dental-software/): "AeronaDental is a cloud-based practice management software solution that delivers best in class functionality for clinicians and business owners", "Why do 6000 worldwide users choose AeronaDental?", and "No hardware costs, no licence costs".
- [About Us](https://aerona.com/aboutaeronasoftware/): "founded in 2003 by Brigeen Peto", "In 2005, AeronaDental was launched as a desktop software solution", "In 2010 AeronaDental again evolved to become one of the very first Cloud-based software solutions", "AeronaDental was purchased by Soho Capital France in summer 2022", "part of a family of European dental software companies across France, Portugal & Poland", the Derry/Londonderry headquarters address, and the DSSA and Innovate NI footer marks.
- [AeronaDental Single Site](https://aerona.com/aerona-products/aeronaclinic-singlesite/): the product description, the feature list and the integration summary naming Stripe, GoCardless and Dojo.
- [AeronaDental Multisite/Group](https://aerona.com/aerona-products/aeronaclinic/): "Unrestricted users & devices ensure that your team & business can grow as needed without your costs increasing. You only ever pay for the number of treatment rooms that you have", and "Simply add or remove treatment rooms; users; and change payments, prices & treatments as required".
- [Dental/Perio/Ortho](https://aerona.com/aerona-professionals/dental-perio-ortho/): "AeronaDental was originally designed with dentists, for dentists", "Our perio charting offer best-in-class usability and readability. Offering the ability to chart pocket-depth, gum recession, mucogingival junction, furcation and tooth mobility", and the orthodontic referral tracking description. The sibling pages for Aesthetic & Cosmetic, Therapeutic, Foot and Healthcare clinics are what the multi-vertical statement is based on.
- [Patient Portal](https://aerona.com/aerona-products/aerona-patient-portal/): "secure digital signing of patient consents", Connect&Consult, Design&Sign, online booking and the Stripe and GoCardless payment description.
- [Integrations](https://aerona.com/aerona-services/integrations/): the single-click imaging description, and the named partners Worldpay, Dojo, GoCardless, DenGro, Boxly AI, DenChat, ViveoAI, RoboReception, OrthoBridge, Dental Audio Notes, On Hold Comms, Wrights Dental and Psynergy.
- [Migrations](https://aerona.com/aerona-services/migrations/): "The Aerona migrations team is all UK & EU based, which means we do not outsource any aspect of the data management process", "using overseas developers and external agencies are not part of our processes", "Almost twenty years of data migration experience", "Migrations completed with no or next to no clinical downtime", and "The question every dentist should ask is where is my data being securely processed?"
- [Terms & Conditions](https://aerona.com/terms-conditions/), the Aerona Online Services Agreement: the contracting entity "Aerona Software Services Limited ... registered number NI47827"; clause 4.2 availability and the "9 pm to 12:00 am UK time" maintenance window; clause 4.3 support and "The Customer may purchase enhanced support services separately at the Supplier's then current rates"; the definition of Normal Business Hours as "9 am to 5 pm local UK time, each Business Day"; the definition of Documentation including "API documentation"; clause 5.1 on data ownership; clause 9.4 "non-cancellable and non-refundable" and "UK pounds sterling (GBP) or euros (EUR)"; clause 15.1 renewal "for successive periods of 1 month or 1 year as specified by the customer"; clauses 15.3 and 15.4 on return, expenses and the ten-day election; "all customer data held by Aerona will be destroyed within 90 days of contract termination"; Schedule 1 backup policy (nightly full backups, "Full backups are retained for 35 days", point-in-time restore, AWS S3); Schedule 2, which reads "To be added"; Schedule 3 employee access ("Aerona staff do not have physical access to our servers"); and Schedule 4 security, "Aerona uses Amazon Web Services (AWS) to host its servers" and "All EU data will be stored in EU servers under GDPR and UK data will be stored in UK servers".
- [Partner Programme](https://aerona.com/aerona-practice-management-software-partner-programme/): "10% commission (of the monthly treatment room subscription, excluding additional extras)", "A successful referral means that the Referred Contact has signed a minimum 12-month contract", and "Any additional services provided by Aerona e.g. migrations, training, SMS credits etc will not be included in the commission structure".
- [API](https://aerona.com/api/): "This content is password-protected. To view it, please enter the password below."
- [Privacy Policy](https://aerona.com/privacy-policy/), last updated "6th November 2020": it scopes itself to "how our organization uses the personal data we collect from you when you use our website" and names no hosting location, which is why the AWS and data-region statements above are cited to the agreement instead.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating: `aerona.com/pricing/` returns HTTP 404, so no pricing page exists to consult; their own site search returns "Sorry, no content matched your criteria" for both NHS and FP17; and the ISO 27001 and PCI compliance named in Schedule 4 are attributed there to AWS, not to Aerona, so no certification held by Aerona itself is claimed here.

A price figure, an uptime percentage or SLA, the AWS region or country holding records, public API documentation, migration and training fees, the standard Minimum Term, and any NHS claim capability appear on none of the pages consulted, and are stated as absent from those pages rather than absent from the product.

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Aerona too.
