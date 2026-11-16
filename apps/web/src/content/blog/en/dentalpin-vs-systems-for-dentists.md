---
title: "Dentalpin vs Systems for Dentists: three decades of NHS work, no published price"
description: "Systems for Dentists publishes no price and, since a 2026 site relaunch, no server or hardware specifications either. Sourced from their own pages, re-checked November 2026."
pubDate: 2026-09-11
updatedDate: 2026-11-14
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists has been trading since 1987 and puts the NHS in the middle of its product, where most of this industry treats NHS work as a feature. Its site went through a full relaunch between our September and November checks: a flatter, more generic set of pages replaced the old ones, and some of what we sourced in September (a Tech requirements page, a Downloads page listing a version number and a Firebird utility) is no longer public. We note below exactly what disappeared.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for an NHS practice in England or Wales it is a very short argument.

## In thirty seconds

**Systems for Dentists** is a Newcastle company "supporting UK dentistry since 1987". It ships automated NHS transmission and claim handling for England, Scotland, Wales and the Isle of Man, a patient portal with online payments, periodontal charting with BPE scoring, and more than 40 named imaging integrations. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A practice management system published by Systems for Dentists Limited, trading from Quorum Business Park, Newcastle upon Tyne, NE12 8BU. Their terms page still gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ and the company registration number as 02199244, registered in England and Wales, unchanged since September.

The current site dates the company by claim rather than by year: "supporting UK dentistry since 1987" and "almost 40 years of dental software". The "Big Three" and "longest-running" wording we quoted in September no longer appears anywhere on the site.

The NHS side is still where the depth is, though the terminology has changed since September. The site now describes NHS England, Scotland, Wales and Isle of Man transmission and claim handling, without using the FP17 or UDA terms we quoted before, and a referral management system for NHS Trusts and community dental services, with "workflows for referrals, multidisciplinary working and demanding care environments". The PAS/EPR integration and "HL7 FHIR compliant" claim we cited in September is also gone from the current NHS Trusts page.

Around that sits a broad clinical and front-desk product. The patient portal does online booking, patient details, account and payment management and digital treatment-plan approval. Periodontal charting records BPE scores and full pocket charts and tracks change visit to visit. Clinical notes keep records consistent across clinicians; the "same-day editing" line we quoted in September is no longer on the site, so we are not repeating it.

Imaging is handled through bridges rather than built in, and the published list has grown a great deal since September: more than 40 named systems, including DBSWIN, Schick, Digora, DentalEye, MediaDent, ProImage, Carestream, Dexis, iTero, KaVo, Kodak, Trophy and Dürr VistaSoft, with one more (iDixel) listed as in development. Card payments run through Clover, fully integrated on both on-premises and cloud deployments, with Stripe listed as in development.

### What runs it

The Tech requirements and Downloads pages we sourced in September, with the Windows server and client specifications, the version number and the Firebird database utility, are gone: the site's 2026 relaunch replaced them with a login-only Customer Portal, and no hardware, OS or database detail appears anywhere on the public site now. We are dropping those specifics rather than repeating September's numbers, because we can no longer verify them.

One thing survived the relaunch: Winflector, the remote-access tool for Windows applications we quoted in September, is still listed as a support ticket category, which suggests the underlying architecture has not changed even though the page describing it has gone.

Remote support still runs through LogMeIn Rescue, with a six-digit pin read out by a technician and a small downloaded application that, per the current support page, "runs on a Windows or Mac computer".

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
| NHS transmissions and claims | ✓ Built in, England, Scotland, Wales, Isle of Man | ✗ Nothing |
| Patient portal | ✓ Booking, payments, plan approval | ✗ Listed as coming soon |
| Imaging bridges | ✓ More than 40 named | ✗ None |
| Years in market | ✓ Trading since 1987 | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed migration | ✓ Test conversion, training, go-live support | ~ Self-service import tool |
| Server and client hardware specs | ✗ Not published since the 2026 site relaunch | ✓ Any Docker host, any modern browser |
| Database | Not published since the 2026 relaunch (Firebird, per our September check) | PostgreSQL |
| Published price | ✗ No pricing page exists | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published | ✓ Licence published |
| Install base | ✗ No figure published | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** The site's sitemap now lists 14 URLs and none of them is a pricing page. No figure appears on any page consulted, and `/pricing.html`, which used to redirect to the Features page, now returns a plain 404. Every route through the site still ends at "Book a Demo".

**Hosting and hardware requirements.** In September, a Tech requirements page gave Windows server and client specifications and a Downloads page named a version number and a Firebird database utility. Both pages are gone after the site's 2026 relaunch, replaced by a login-only Customer Portal, and no hosting, OS or database detail appears anywhere on the public site now.

**A customer contract.** The Terms & Conditions page governs use of the website only, as it did in September. The service agreement itself is still not on the open web, so contract length, notice period, what happens to your data on the way out and the terms of any SLA are all things to ask for in writing before you sign.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted. For a product sold to NHS Trusts that is the first thing to ask their sales team, and the answer may well be good.

**Where hosted data lives.** The privacy policy covers website visitors rather than patient records. It now cites UK GDPR and PECR rather than the superseded Data Protection Act 1998, which it still cited in September, and it drops the flat GBP10 subject-access fee that Act allowed. That is a correction on their side, not a problem, and we are updating what we said about it. Nothing on the pages consulted says where the cloud-hosted option stores clinical data.

**An install base.** The "thousands of dental professionals" figure we quoted in September, and the "2 or 200 practices" and "50+ location groups" range on the old Dental Groups page, no longer appear anywhere on the site. No customer count is published at all now.

**API documentation.** The HL7 FHIR compliance claim we quoted from the NHS Trusts page in September is gone, and no developer documentation, endpoint list or integration guide appears anywhere on the current site.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry.** Automated transmission and claim handling for NHS England, Scotland, Wales and the Isle of Man. We do none of it, and no amount of open source makes up for a claim you cannot submit.
- **You are an NHS Trust or a community dental service.** The referral management system and the workflows aimed at multidisciplinary and community care are built for exactly that buyer, and almost nobody else builds for it.
- **You want a phone number and named hours.** Support on 0191 500 6789, Monday to Thursday 08:30 to 17:30 and Friday 08:40 to 17:00. We have Telegram and GitHub issues.
- **You want someone else to do the migration.** A staged onboarding: planning, test conversion and quality checks, configuration, training around go-live, and a post-launch support team for the early weeks.
- **You take intraoral x-rays.** More than 40 named imaging integrations. We store images in the record and integrate with none of them.
- **You want a patient portal today.** Booking, account and payment management, and treatment-plan approval, ready made. Ours is still on the coming soon list.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **You want to know what you are installing before you buy it.** Systems for Dentists no longer publishes server or client specifications at all. Ours runs in a browser, on whatever the machine is, and that is published and verifiable today.
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

Systems for Dentists does this for you instead, which for most practices is the better trade: a staged onboarding with test conversions and quality checks before anything goes live. They publish no price and no timeline for the conversion, so ask for both.

## The honest read

For a practice doing NHS work in the UK, Systems for Dentists is the sensible choice today and this comparison is not going to pretend otherwise. Transmissions, FP17s and UDA forecasting are years of unglamorous work that nobody enjoys, they are the daily reality of the job, and we have not done them.

What we would push back on is the framing that the rest follows from it. A price you can only get on a call, a contract that is not on the open web, and hosting and hardware requirements that are no longer published anywhere are decisions, not consequences of doing NHS dentistry well.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026, and re-checked on 14 November 2026, after Systems for Dentists relaunched its site with a new URL structure and more generic pages. What changed: the "Big Three" and "longest-running" claims, the FP17/UDA terminology, the "Same-day editing of notes" line, the PAS/EPR/HL7 FHIR claim, the thousands-of-professionals and practice-group figures, the Tech requirements and Downloads pages (Windows specs, version number, Firebird), and the old onboarding step list are all gone from the current site and have been removed or rewritten below rather than repeated from September. The imaging-integration list grew substantially (ten named systems in September, more than 40 now), and the privacy policy was corrected to cite UK GDPR/PECR instead of the superseded Data Protection Act 1998. Office trading address, registered office, company number, pricing (still none), Winflector and LogMeIn Rescue were all re-checked with no change in substance.

- [Systems for Dentists home page](https://www.sfd.co/): "Supporting UK dentistry since 1987", the feature summary and the support hours and phone number.
- [About](https://www.sfd.co/company/about): "almost 40 years of dental software", Newcastle upon Tyne trading address. No "Big Three", "longest-running" or customer-count claim appears here now.
- [Key features](https://www.sfd.co/product/key-features): the feature list, NHS England/Scotland/Wales/IOM transmission and claim handling, periodontal charting and BPE scoring.
- [Integrations](https://www.sfd.co/product/integrations): the imaging-system list (more than 40 named) and Clover/Stripe payment processing.
- [Onboarding](https://www.sfd.co/product/onboarding): the five-stage onboarding process (planning, data validation, personalisation, training and go-live, post-launch support).
- [NHS Trusts](https://www.sfd.co/nhs-trusts.html): no PAS/EPR or HL7 FHIR claim appears here now.
- [Software support](https://www.sfd.co/support/software-support): no version number, download or database engine appears here; Winflector is still listed as a support category.
- [Remote support](https://www.sfd.co/support/remote-support): LogMeIn Rescue, the six-digit pin.
- [Terms & Conditions](https://www.sfd.co/company/terms): registered office in Cheltenham, company number 02199244, and the website-only scope, unchanged since September.
- [Privacy](https://www.sfd.co/company/privacy): now cites UK GDPR and PECR, not the Data Protection Act 1998 we quoted in September.
- [Pricing](https://www.sfd.co/pricing.html): returns 404 (it served the Features page in September). The current sitemap lists 14 URLs and none is a pricing page.
- [Winflector](https://www.winflector.com/en/), for what Winflector is, quoted from its own publisher rather than from Systems for Dentists.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating, re-confirmed in November: sfd.co has no pricing page; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
