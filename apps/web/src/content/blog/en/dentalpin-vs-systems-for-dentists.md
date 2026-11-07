---
title: "Dentalpin vs Systems for Dentists: three decades of NHS work, on a Windows server"
description: "Systems for Dentists handles NHS transmissions for England, Scotland, Wales and the Isle of Man, and publishes no price. Sourced from their own pages, updated November 2026."
pubDate: 2026-09-11
updatedDate: 2026-11-07
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists was founded in Newcastle in 1987 and still puts the NHS in the middle of its product, where most of this industry treats NHS work as a feature. The company rebuilt its website since we first wrote this comparison, and the rebuild is itself informative: the specific claims it used to make about its market position, its customer count and the Windows hardware the software needs have all been dropped, while its imaging integrations list has grown considerably.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for an NHS practice in England, Scotland or Wales it is a very short argument.

## In thirty seconds

**Systems for Dentists** is a Newcastle company, trading since 1987, now on its second website in the time we have been tracking it. It ships NHS transmission and claim handling for England, Scotland, Wales and the Isle of Man, a patient portal (now on version 7) with online payments, periodontal charting with BPE scoring, and integrations with more than forty imaging systems. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A practice management system published by Systems for Dentists Limited. Their "Our Office" page now gives a trading address at Suite 9, Q11 Quorum Business Park, Newcastle upon Tyne, NE12 8BU; their terms page gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ and the company registration number as 02199244, registered in England and Wales. The homepage copyright line now reads simply "Systems for Dentists © Copyright 2026", and the About page states the company was "Founded in Newcastle upon Tyne in 1987".

> **The marketing has got more modest, not less.** Their previous site called the company "one of the UK's Big Three Dental Practice Management Software providers" and "the UK's longest-running" one, and quoted an install base of "thousands of dental professionals". None of those claims appear on the rebuilt site we consulted on 7 November 2026, on the About page or anywhere else. We are dropping them rather than guessing why.

The NHS side is still where the depth is. The current Key Features page lists NHS transmission and claim handling by nation: NHS England, NHS Scotland, NHS Wales and NHS IOM (Isle of Man), with a line about managing differing NHS requirements across the UK. It no longer names FP17 forms, UDA tracking or Northern Ireland by name, and the dedicated NHS Trusts page with its PAS, EPR and "HL7 FHIR compliant" claims is gone from the site entirely, so we cannot repeat those claims.

Around that sits a broad clinical and front-desk product. The patient portal does online booking, account and payment management through Clover (Stripe is listed as "in development"), secure management of personal details, and digital review and acceptance of treatment plans. Periodontal charting records BPE scores and "full pocket charts" and tracks changes between visits. Clinical notes are templated, and the "Same-day editing of notes" line from the previous site no longer appears, so we are not repeating it.

Their support ticket form now carries categories for "PPS (Patient Portal V6)" and "PPS (Patient Portal V7)", which tells us the patient portal has had at least one major version since we last looked, though the site does not describe what changed between them.

Imaging is handled through a much longer partner list than before. Their integrations page now names more than forty digital imaging systems, including Carestream, Dexis, Dürr VistaSoft, iTero, Schick, Sidexis, Sopro, Trophy and DBSWIN, plus clinical-tool integrations including Florida Probe, Medivision, Dragon Dictate and Dental Monitoring. Card payments run through Clover, with Stripe marked "in development".

### What runs it

The old "Tech requirements" page, with its Windows-only server and client specifications, no longer exists on the site, and we could not find a current equivalent giving operating system, RAM or CPU figures for either a server or a client machine. What the current Solutions page does state is "Flexible Deployment": a **Cloud Hosted** option where "our team manages the underlying hosting infrastructure", and a **Self-Hosted** option where the practice keeps "control of your own infrastructure". That is a genuine change from "Windows on the server, Windows on every workstation" being the only architecture on offer, or at least it is the only architecture we can now verify from their own pages, so we are not repeating our old specific hardware claims.

Remote support still runs through LogMeIn Rescue, described on their current support page as "A small LogMeIn Rescue application" a technician uses to view your screen. The previous onboarding step naming Winflector, and the "Issue and complete SLA & Direct Debit Mandate" step, no longer appear: the current onboarding page describes five stages instead — Planning & Preparation, Data Validation (a staffed test and live data conversion), Personalisation, Training & Go-Live, and Post-Launch Support with a dedicated point of contact — with no mention of a specific remote-access product.

![Dentalpin periodontal chart with six sites recorded per tooth](/screenshots/periodontogram.png)

*Periodontal charting in Dentalpin, with the six sites per tooth.*

## What Dentalpin is

Open source dental practice management software. You download the code, install it where you like (your server, whichever cloud provider you choose) and pay no licence per surgery, per dentist or per patient.

Odontogram, periodontal charting, schedule, clinical records, treatment plans, quotes with digital signature, invoicing, payments, recalls and reports, on PostgreSQL, in any modern browser, on Windows, macOS or Linux. Plus an AI assistant that runs tasks against your real data while respecting each user's permissions.

It is much younger. It stores x-rays in the patient record but bridges to no imaging system, its patient portal is listed on our own site as coming soon rather than shipped, and it does no NHS claim submission at all. That matters, and we come back to it.

## Side by side

Only verifiable rows. Where nothing is published, the row says so.

| | Systems for Dentists | Dentalpin |
|---|---|---|
| Model | Commercial licence and support | Open source (BSL 1.1, Apache 2.0 after 4 years) |
| NHS transmissions and claims | ✓ England, Scotland, Wales, IOM | ✗ Nothing |
| Patient portal | ✓ Booking, payments, plan acceptance (v7) | ✗ Listed as coming soon |
| Imaging integrations | ✓ 40+ systems named | ✗ None |
| Years in market | ✓ Founded 1987 | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed migration | ✓ Test conversion, live conversion, on-site training | ~ Self-service import tool |
| Deployment | ~ Cloud hosted by them, or self-hosted | ✓ Any Docker host |
| Server and client specs | ✗ No longer published on any page we found | ✓ Any modern browser |
| Published price | ✗ No pricing page exists | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published, issued during onboarding | ✓ Licence published |
| Install base | ✗ No figure published on the current site | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** Their current sitemap lists 14 URLs and none of them is a pricing page, no figure appears on any page consulted, and the site has no `/pricing` route at all. Every route through the site ends at "Book a Demo".

**A customer contract.** The Terms page governs use of the website only. A service agreement presumably exists, but it is not on the open web, so contract length, notice period, what happens to your data on the way out, and any SLA terms are all things to ask for in writing before you sign.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, including the new Cloud Hosted option where SfD manages the infrastructure. For a product used by NHS practices that is the first thing to ask their sales team, and the answer may well be good.

**Where hosted data lives.** The privacy policy, rewritten since we last checked, now correctly cites UK GDPR rather than the superseded Data Protection Act 1998, and states access requests are answered within one month with no fee mentioned. That fixes the gap we flagged before. What it still does not say is where the Cloud Hosted option's clinical data physically lives, or under which hosting provider.

**An install base or market-position figure.** The claims we used to be able to cite here, "one of the UK's Big Three", "the UK's longest-running" and "thousands of dental professionals", no longer appear anywhere on the rebuilt site, and we found no current figure to replace them with.

**API documentation.** No developer documentation, endpoint list or integration guide appears anywhere on the current site, and the claims of NHS Trust-level "HL7 FHIR compliance" we previously cited are gone along with the page that made them.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry in England, Scotland, Wales or the Isle of Man.** Transmission and claim handling for those nations is built in. We do none of it, and no amount of open source makes up for a claim you cannot submit.
- **You want a phone number and named hours.** Support on 0191 500 6789, Monday to Thursday 08:30 to 17:30 and Friday to 17:00. We have Telegram and GitHub issues.
- **You want someone else to do the migration.** A test conversion with quality checks, a live conversion, on-site or online training, and a post-launch support team as your point of contact while you settle in.
- **You take intraoral x-rays.** Forty-plus named imaging systems, from Carestream to Dexis to Schick. We store images in the record and integrate with none of them.
- **You want a patient portal today.** Booking, payments, account management and plan acceptance, ready made and now on its second major version. Ours is still on the coming soon list.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **You want the server and client requirements in writing before you buy.** Their current site no longer publishes any hardware or operating system specification, for either their Cloud Hosted or Self-Hosted option, so you would have to ask. Ours runs in a browser, on whatever the machine is, and that is written down.
- **You want to read the code that stores clinical records.** It is on GitHub, and so is the licence.
- **You want to integrate and automate.** A documented REST API with an OpenAPI schema, rather than a compliance claim with no developer documentation behind it.
- **Getting your data out should not require a support ticket.** It is your PostgreSQL database, on your machine, always.

![The Dentalpin AI assistant with the workflows it can run against practice data](/screenshots/ai-copilot.png)

*The AI assistant, running tasks against real practice data under each user's permissions.*

## How migration actually works

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not a single button:

1. **You upload the file** and the system validates it before touching anything.
2. **You see a preview** with row counts and sample rows. Nothing has been written yet.
3. **You review the proposals.** The system maps the source treatment catalogue against yours and you decide row by row: accept, relink, create new or ignore. Anything scoring above 0.9 can be accepted in bulk.
4. **You run it**, and the import executes exactly the decisions you made.

> **Step 3 is where almost every migration fails.** No two practices code their treatments the same way, and **a silently guessed equivalence produces wrongly issued invoices that nobody notices for months**.

Systems for Dentists does this for you instead through its own Data Validation step, which for most practices is the better trade. They publish no price and no fixed timeline for the conversion, so ask for both.

## The honest read

For a practice doing NHS work in England, Scotland, Wales or the Isle of Man, Systems for Dentists is the sensible choice today and this comparison is not going to pretend otherwise. NHS transmission and claim handling is years of unglamorous work that nobody enjoys, it is the daily reality of the job, and we have not done it.

What we would push back on is the framing that the rest follows from it. A price you can only get on a call and a contract that is not on the open web are decisions, not consequences of doing NHS dentistry well. We will also say plainly that their newly rebuilt site is more private about itself than the old one was: the specific hardware requirements, the install base and the market-position claims we used to be able to quote have all been removed rather than updated, and a reader comparing vendors today has less to go on than a reader did when we first wrote this.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

Originally consulted on 11 September 2026, when sfd.co still used its old site (about-us.html, product.html, downloads.html, nhs-trusts.html, dental-groups.html, user-guides.html, terms-conditions.html, privacy.html, testimonials.html, connect-to-technician.html). Fully re-checked on 7 November 2026, by which point sfd.co had moved to an entirely new site and URL structure; every link below is the current one, and every claim above has been rewritten to match what that new site actually says.

- [Systems for Dentists home page](https://www.sfd.co/): "Systems for Dentists © Copyright 2026" and "Flexible Hosting to Suit Your Practice".
- [Key features](https://www.sfd.co/product/key-features): the practice management, clinical management, reporting, NHS dentistry and patient portal feature lists, periodontal charting and BPE scoring, and the absence of "Same-day editing of notes" and of FP17/UDA-specific wording.
- [Solutions](https://www.sfd.co/product/solutions): "Flexible Deployment" (Cloud Hosted vs Self-Hosted), the general NHS & Public Sector section, and the absence of any server/client hardware or operating system specification.
- [Integrations](https://www.sfd.co/product/integrations): the 43 named digital imaging systems, Clover and Stripe for payments, and the clinical-tool integrations including Florida Probe, Medivision and Dragon Dictate.
- [Onboarding](https://www.sfd.co/product/onboarding): the five-stage process (Planning & Preparation, Data Validation, Personalisation, Training & Go-Live, Post-Launch Support), and the absence of any Winflector, SLA or Direct Debit Mandate step.
- [About](https://www.sfd.co/company/about): "Founded in Newcastle upon Tyne in 1987", the Quorum Business Park office address, and the absence of any "Big Three", "longest-running" or customer-count claim.
- [Terms](https://www.sfd.co/company/terms): registered office in Cheltenham, company number 02199244, and the website-only scope.
- [Privacy](https://www.sfd.co/company/privacy): UK GDPR cited for access rights, with no reference to the superseded Data Protection Act 1998 and no subject access fee mentioned.
- [Remote support](https://www.sfd.co/support/remote-support): "A small LogMeIn Rescue application."
- [Software support](https://www.sfd.co/support/software-support): the "PPS (Patient Portal V6)" and "PPS (Patient Portal V7)" ticket categories, and the absence of any download link or hardware specification.
- [Sitemap](https://www.sfd.co/sitemap.xml): the current 14-URL site structure, confirming no pricing route exists.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating, as of 7 November 2026: sfd.co's current 14-URL sitemap has no pricing route; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, including for the new Cloud Hosted option; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
