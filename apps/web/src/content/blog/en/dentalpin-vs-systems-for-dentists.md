---
title: "Dentalpin vs Systems for Dentists: NHS transmissions, no published price"
description: "Systems for Dentists handles NHS transmissions for England, Scotland, Wales and the Isle of Man and publishes no price or hardware requirements. Sourced from their own pages, November 2026."
pubDate: 2026-09-11
updatedDate: 2026-11-28
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists has been trading since 1987 and puts the NHS in the middle of its product, where most of this industry treats NHS work as a feature. The company relaunched its site between our last check and this one, and the old Tech requirements and Downloads pages that used to spell out the Windows architecture underneath it are gone; what replaces them is two named deployment options, Cloud Hosted and Self-Hosted, with no OS or hardware specification published for either.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for an NHS practice in England or Wales it is a very short argument.

## In thirty seconds

**Systems for Dentists** is a Newcastle company, founded in 1987, with "nearly 40 years developing and supporting practice management software" by its own description. It ships NHS transmission and claim handling for England, Scotland, Wales and the Isle of Man, a patient portal with online payments, periodontal charting with BPE scoring, and integrations with more than 60 named imaging and other third-party systems. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server if you self-host it, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A Windows practice management system published by Systems for Dentists Limited, trading from Principal House, Back Grove Avenue, Gosforth, Newcastle-Upon-Tyne. Their terms page gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ and the company registration number as 02199244, registered in England and Wales.

The About page now describes the company by tenure rather than by superlative: "Founded in Newcastle upon Tyne in 1987" with "nearly 40 years developing and supporting practice management software". The footer reads "Systems for Dentists © Copyright 2026".

The NHS side is where the depth used to be documented in detail; the current site states it per nation rather than as a feature checklist:

- **NHS England**: "Efficient NHS England transmission and claim handling."
- **NHS Scotland**: "Reliable support for Scottish NHS workflows and submissions."
- **NHS Wales**: "Integrated Welsh transmission support built into your workflow."
- **NHS IOM**: "Connected Isle of Man dental transmission management."

That is narrower than what the site stated when we first checked it. UDA tracking, FP17 forms, contract performance monitoring, real-time eligibility checking and "HL7 FHIR compliant" integration with NHS PAS, EPR and national databases are no longer published anywhere we could find, so this comparison no longer asserts them. A dedicated referral management system is still listed among the practice-management features.

Around that sits a broad clinical and front-desk product. The patient portal does online booking, account and payment management through Clover or Stripe, patient-detail management and digital treatment plan approval. Periodontal charting "record[s] BPE scores and full pocket charts, and track[s] change between visits." Clinical notes are templated to stay consistent across clinicians.

Imaging and integrations are the one area that visibly grew. The current integrations page names more than 40 digital imaging systems, among them Carestream, Dexis, DBSWIN, Digora, Schick, Sidexis, Sopro, Trophy, iTero and KaVo, plus roughly 25 further partners spanning clinical tools, payments, referrals, reporting and patient communication (some marked "in development"). It states "Our open API already supports third-party integrations", with no published documentation or endpoint list.

### What runs it

The old Tech requirements page is gone, and with it the Windows-specific hardware and OS specifications this comparison used to cite. The current Solutions page describes two deployment options instead: **Cloud Hosted** ("our team manages the underlying hosting infrastructure") and **Self-Hosted** ("Maintain control of your own infrastructure"), with no operating system, CPU or RAM figures published for either, and no mention of macOS, Linux or browser support one way or the other.

The former Downloads page no longer lists a build or the utilities beside it. Release notes are now published individually; the latest at the time of writing is **version 6.26.11.3, released 19 November 2026**, with no system requirements stated on the release note itself.

The onboarding process has also changed shape. It is now five stages — Planning & Preparation, Data Validation, Personalisation, Training & Go-Live, and Post-Launch Support — and no longer mentions installing Winflector or a separate "SLA & Direct Debit Mandate" step, so this comparison no longer describes the remote-access mechanism, which we cannot currently verify either way.

Remote support still runs through LogMeIn Rescue, with a six-digit pin from a technician.

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
| NHS transmissions | ✓ England, Scotland, Wales, Isle of Man | ✗ Nothing |
| Patient portal | ✓ Booking, payments, treatment approval | ✗ Listed as coming soon |
| Imaging and integrations | ✓ 60+ named systems and partners | ✗ None |
| Years in market | ✓ Founded 1987 | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed migration | ✓ Validated conversion, on-site training | ~ Self-service import tool |
| Deployment | ~ Cloud Hosted or Self-Hosted, OS not published | ✓ Any Docker host |
| Published hardware/OS requirements | ✗ No longer published | ✓ Any modern browser, any OS |
| Database | ✗ Not published | ✓ PostgreSQL |
| Published price | ✗ No pricing page exists | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published, issued during onboarding | ✓ Licence published |
| Install base | ~ "thousands of dental professionals", no figure | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** Their current sitemap lists 34 URLs and none of them is a pricing page; `/pricing.html` now returns a 404 rather than any page at all. Every route through the site ends at "Book a Demo".

Their current site publishes no testimonials quoting a price or a comparison with other systems, so this comparison no longer cites one.

**A customer contract.** The Terms page governs use of the website only. The onboarding pages no longer describe a licensing or Direct Debit step in the open, so contract length, notice period, what happens to your data on the way out and the terms of any service agreement are all things to ask for in writing before you sign.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, including the current Service Status and Software Support pages. For a product used by NHS practices that is the first thing to ask their sales team, and the answer may well be good.

**Where hosted data lives.** The privacy policy now cites UK GDPR rather than the old Data Protection Act 1998, which is a correction worth noting in their favour since this comparison last ran. It still covers website visitors rather than patient records, and nothing on the pages consulted says where the Cloud Hosted option stores clinical data.

**An install base.** No figure for customers, practices or users appears anywhere on the current site. Earlier versions of the site stated "thousands of dental professionals"; that wording is gone and we found nothing to replace it with.

**API documentation.** The current Integrations page states "Our open API already supports third-party integrations", with no developer documentation, endpoint list or integration guide linked from it or found elsewhere on the site. The HL7 FHIR and NHS PAS/EPR integration claims this comparison previously cited are also no longer published anywhere we could find.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry.** Transmission and claim handling for England, Scotland, Wales and the Isle of Man, built in. We do none of it, and no amount of open source makes up for a claim you cannot submit.
- **You are an NHS Trust or a community dental service.** A referral management system is listed among the practice-management features, built for a buyer almost nobody else builds for.
- **You want a phone number and named hours.** Support on 0191 500 6789, Monday to Thursday 08:30 to 17:30 and Friday 08:40 to 17:00. We have Telegram and GitHub issues.
- **You want someone else to do the migration.** A staged onboarding with a validated test conversion, on-site training and a dedicated post-launch team while you settle in.
- **You take intraoral x-rays.** More than 60 named imaging and integration systems. We store images in the record and integrate with none of them.
- **You want a patient portal today.** Booking, forms, medical history updates, payments, plan acceptance and x-ray access, ready made. Ours is still on the coming soon list.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **You do not want to think about an operating system at all.** Theirs no longer publishes hardware or OS requirements for either of its deployment options, so you cannot check compatibility before you call. Ours runs in a browser, on whatever the machine is.
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

Systems for Dentists does this for you instead, which for most practices is the better trade. Their demo form asks which software you run today and offers a list that reads as the market they take practices from: Bridge-IT, Carestream R4, Carestream Sensei, Dentsys Edge, DO-IT, iSmile, Orthotrac, OrthoBridge, Pearl, SOE Dentally and SOE Exact. They publish no price and no timeline for the conversion, so ask for both.

## The honest read

For a practice doing NHS work in the UK, Systems for Dentists is the sensible choice today and this comparison is not going to pretend otherwise. Transmissions, FP17s and UDA forecasting are years of unglamorous work that nobody enjoys, they are the daily reality of the job, and we have not done them.

What we would push back on is the framing that the rest follows from it. A price you can only get on a call and a contract that is not on the open web are decisions, not consequences of doing NHS dentistry well. In fairness, their privacy policy now cites UK GDPR rather than the 1998 Act we flagged last time, which is a real fix on their side.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026, and re-checked on 28 November 2026, when we found that sfd.co had relaunched with a new URL structure and substantially different content, and corrected this comparison accordingly: the "Big Three" and "longest-running" marketing claims, the detailed UDA/FP17/eligibility NHS feature list, the "HL7 FHIR compliant" and NHS PAS/EPR integration claim, the "Same-day editing of notes" and per-change audit-trail wording, the Windows server and workstation hardware specifications, the Winflector onboarding step, the Firebird database detail, the install-base figure and the price-related testimonials were all removed as no longer published anywhere on the current site. The imaging and integrations count, the NHS per-nation wording, the deployment model names, the current release version and the privacy policy's legal basis were corrected to what the site states today. Several of the original URLs below now redirect to or are superseded by the new paths; both are listed where that happened.

- [Systems for Dentists home page](https://www.sfd.co/): the current feature summary, support hours and phone numbers, and the "Supporting UK Dentistry Since 1987" tagline.
- [Key features](https://www.sfd.co/product/key-features): the NHS England/Scotland/Wales/IOM wording, the patient portal features, periodontal charting (BPE scores and pocket charts), and templated clinical notes.
- [Solutions / deployment](https://www.sfd.co/product/solutions): the Cloud Hosted and Self-Hosted deployment options, with no OS or hardware specification published for either.
- [Onboarding](https://www.sfd.co/product/onboarding): the five onboarding stages (Planning & Preparation, Data Validation, Personalisation, Training & Go-Live, Post-Launch Support), with no mention of Winflector or a Direct Debit Mandate step.
- [Integrations](https://www.sfd.co/product/integrations): the 40+ named imaging systems and roughly 25 further partners, and "Our open API already supports third-party integrations", with no documentation linked.
- [Release notes, v6.26.11.3](https://www.sfd.co/updates/release-notes/v6-6-26-11-3): the current version number and its 19 November 2026 release date.
- [Company / about](https://www.sfd.co/company/about): "Founded in Newcastle upon Tyne in 1987", "nearly 40 years developing and supporting practice management software", and the "© Copyright 2026" footer.
- [Terms](https://www.sfd.co/terms-conditions.html) (still resolves at this path): registered office in Cheltenham, company number 02199244, and the website-only scope.
- [Privacy](https://www.sfd.co/privacy.html) (still resolves at this path): the current UK GDPR basis, replacing the Data Protection Act 1998 reference this comparison previously flagged.
- [Software support](https://www.sfd.co/support/software-support): no uptime figure, ISO 27001, Cyber Essentials or NHS Data Security and Protection Toolkit status, and no install-base figure.
- [Remote support / connect to a technician](https://www.sfd.co/connect-to-technician.html) (still resolves at this path): LogMeIn Rescue remote support.
- [Pricing](https://www.sfd.co/pricing.html): returns a 404, confirming no pricing page exists at that path; the current sitemap (34 URLs) lists none either.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating, re-run on 28 November 2026: sfd.co still has no pricing page, and `/pricing.html` now 404s outright rather than serving another page; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
