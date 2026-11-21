---
title: "Dentalpin vs Systems for Dentists: NHS depth, and code you can read"
description: "Systems for Dentists has traded since 1987 and still publishes no price. Its site was rebuilt since we last checked, and some specifics it used to publish are gone."
pubDate: 2026-09-11
updatedDate: 2026-11-21
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists has traded since 1987 and puts the NHS in the middle of its product, where most of this industry treats NHS work as a feature. Its site has been rebuilt since we last looked at it, and the two pages that used to carry the detail, Tech requirements and Downloads, are gone along with the hardware specifications and version numbers they published. What survives still describes a company built around NHS transmissions, not a side feature.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for an NHS practice in England or Wales it is a very short argument.

## In thirty seconds

**Systems for Dentists** is a Newcastle company trading since 1987, with "almost 40 years of dental software" by its own account. It ships automated NHS transmission and claim handling, a patient portal with online payments, periodontal charting with BPE scoring, and dozens of named imaging integrations. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A practice management system published by Systems for Dentists Limited, trading from Suite 9, Q11, Quorum Business Park, Newcastle upon Tyne, NE12 8BU. Their terms page gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ and the company registration number as 02199244, registered in England and Wales.

Their About page now dates the company by history rather than by superlative: "Founded in Newcastle upon Tyne in 1987, Systems for Dentists has spent nearly 40 years…", with "almost 40 years of dental software knowledge". The footer reads "Systems for Dentists © Copyright 2026."

The NHS side is where the depth is:

- **Transmission and claim handling** for NHS dentistry across England, Scotland, Wales and the Isle of Man.
- **Governance and reporting tools**, described as supporting "operational oversight and informed decision-making" for multi-site organisations.

Around that sits a broad clinical and front-desk product. The patient portal offers online booking and appointment control, account and payments management through Clover (with Stripe listed as in development), patient details management, and digital review and acceptance of treatment plans. Periodontal charting records BPE scores and full pocket charts and tracks change between visits. Clinical notes are templated to keep records consistent across clinicians.

Imaging is handled through integrations rather than built in, and the published list is long: dozens of named systems, including DBSWIN, Schick, Digora, DentalEye, MediaDent, Medivision, Florida Probe and ProImage, with several more marked "in development" rather than live.

### What runs it

The site's own description of deployment is less specific than it used to be. The current Solutions page offers two options: **Cloud Hosted**, where "our team manages the underlying hosting infrastructure", and **Self-Hosted**, where "you keep control of your own infrastructure" with Systems for Dentists' software and support on top. Neither description names an operating system, and the detailed hardware specifications and the Downloads page we previously cited, with their version numbers and bundled utilities, are no longer published anywhere we could find on the site.

Remote support still runs through LogMeIn Rescue, with a six-digit pin from a technician.

![Dentalpin periodontal chart with six sites recorded per tooth](/screenshots/periodontogram.png)

*Periodontal charting in Dentalpin, with the six sites per tooth.*

## What Dentalpin is

Open source dental practice management software. You download the code, install it where you like (your server, whichever cloud provider you choose) and pay no licence per surgery, per dentist or per patient.

Odontogram, periodontal charting, schedule, clinical records, treatment plans, quotes with digital signature, invoicing, payments, recalls and reports, on PostgreSQL, in any modern browser, on Windows, macOS or Linux. Plus an AI assistant that runs tasks against your real data while respecting each user's permissions.

It is much younger. It stores x-rays in the patient record but bridges to no imaging system, it has no patient portal, and it does no NHS claim submission at all. That matters, and we come back to it.

## Side by side

Only verifiable rows. Where nothing is published, the row says so.

| | Systems for Dentists | Dentalpin |
|---|---|---|
| Model | Commercial licence and support | Open source (BSL 1.1, Apache 2.0 after 4 years) |
| NHS transmissions and claims | ✓ Built in | ✗ Nothing |
| Patient portal | ✓ Booking, payments, treatment plan review | ✗ None |
| Imaging integrations | ✓ Dozens of systems named | ✗ None |
| Years trading | ✓ Since 1987, by their own history | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed onboarding | ✓ Test conversions, on-site training, go-live support | ~ Self-service import tool |
| Deployment, OS and hardware specs | ✗ Not published | ✓ Any Docker host, any browser |
| Published price | ✗ No pricing page exists | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published | ✓ Licence published |
| Install base figure | ✗ Not published | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** Their sitemap now lists 14 URLs, down from the 26 we found before, and none of them is a pricing page. No figure appears on any page consulted, and `/pricing.html`, the old URL that used to serve the Features page instead of a tariff, now returns a 404. Every route through the site ends at "Book a Demo".

**A customer contract.** The Terms & Conditions page governs use of the website only, and no service agreement, SLA or contract term appears anywhere else on the site. Ask for one in writing before you sign.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, including the current Solutions page where a hosting SLA would most plausibly sit. For a product sold to NHS Trusts that is the first thing to ask their sales team, and the answer may well be good.

**Where hosted clinical data lives.** The current privacy policy is UK GDPR-worded and states plainly that it "does not cover patient or practice data processed within SfD software". Website hosting is described as "SfD-managed servers in the UK", but nothing on the pages consulted says where the cloud-hosted clinical option stores patient data. (Worth noting: on our last visit this policy still cited the superseded Data Protection Act 1998 and a £10 subject access fee. That has since been corrected, so the criticism we made of it no longer applies.)

**An install base figure.** No page we could find states a customer count, a practice count or a range of group sizes. The vaguer "thousands of dental professionals" figure we cited before is also gone.

**API documentation.** No developer documentation, endpoint list or integration guide appears anywhere on the current site.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry.** Automated transmission and claim handling across England, Scotland, Wales and the Isle of Man is a built, working product. We do none of it, and no amount of open source makes up for a claim you cannot submit.
- **You want a phone number and named lines.** Sales, support, training and accounts each have their own published number, answered Monday to Thursday 08:30 to 17:30 and Friday 08:40 to 17:00. We have Telegram and GitHub issues.
- **You want someone else to do the migration.** A published five-stage onboarding plan, test conversions, personalisation to your processes, training through go-live, and a dedicated post-launch support team. Ours is a tool you drive yourself.
- **You take intraoral x-rays.** Dozens of named imaging integrations, with more in development. We store images in the record and integrate with none of them.
- **You want a patient portal today.** Booking, payments and treatment plan review, ready made. We have none at all.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **You want the deployment details in writing before you sign, not after.** Their current site describes cloud-hosted or self-hosted options without naming an operating system, a server spec or a client requirement anywhere we could find. Ours runs in any modern browser, on Windows, macOS or Linux, and the requirements are the same everywhere.
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

Systems for Dentists does this for you instead, through the published onboarding plan: planning, test conversions, personalisation, training through go-live, and post-launch support. That is the better trade for most practices. They publish no price and no timeline for the conversion, so ask for both.

## The honest read

For a practice doing NHS work in the UK, Systems for Dentists is the sensible choice today and this comparison is not going to pretend otherwise. NHS transmissions and claim handling are years of unglamorous work that nobody enjoys, they are the daily reality of the job, and we have not done them.

What we would push back on is the framing that the rest follows from it. A price you can only get on a call and a contract that is not on the open web are decisions, not consequences of doing NHS dentistry well. To their credit, the site rebuild also fixed something we flagged on our last visit: the privacy policy no longer cites the superseded 1998 Act.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026, and re-checked on 21 November 2026, when we found the site had been substantially rebuilt: the sitemap shrank from 26 URLs to 14, several pages we had sourced before (Downloads, Dental Groups, the old NHS Trusts and Product pages, Testimonials with price quotes) no longer exist in that form, and the detail they used to carry, hardware specifications, version numbers, the "Big Three"/"longest-running" claims, the PAS/EPR/HL7 FHIR claim, and the "thousands of dental professionals" install-base figure, is gone. Everything below reflects what the rebuilt site states today; where the old specifics could not be re-sourced, they were dropped rather than carried over:

- [Systems for Dentists home page](https://www.sfd.co/): the support/sales/training/accounts phone numbers and opening hours, and "Almost 40 years of dental software."
- [About us](https://www.sfd.co/company/about): "Founded in Newcastle upon Tyne in 1987, Systems for Dentists has spent nearly 40 years…", the Quorum Business Park address, and the absence of any customer-count claim.
- [Key features](https://www.sfd.co/product/key-features): the practice management, clinical management, reporting and NHS dentistry feature lists, BPE scores and full pocket charts, and the patient portal's booking, payments, patient details and treatment-plan-review features.
- [Solutions](https://www.sfd.co/product/solutions): the Cloud Hosted and Self-Hosted deployment descriptions, and the absence of any operating system, hardware spec, uptime, ISO 27001, Cyber Essentials or NHS DSPT claim.
- [Onboarding](https://www.sfd.co/product/onboarding): the five onboarding stages (Planning & Preparation, Data Validation with test conversions, Personalisation, Training & Go-Live, Post-Launch Support) and the absence of any Winflector, SLA or Direct Debit Mandate step.
- [Integrations](https://www.sfd.co/product/integrations): the imaging, payments and clinical-tool integration lists, including which are marked "in development", and the Clover/Stripe payments detail.
- [Terms & Conditions](https://www.sfd.co/company/terms): registered office in Cheltenham, company number 02199244, and the website-only scope.
- [Privacy](https://www.sfd.co/company/privacy): the UK GDPR wording, the absence of any Data Protection Act 1998 reference or £10 fee, "SfD-managed servers in the UK" for website hosting, and the statement that the policy does not cover patient or practice data processed within SfD software.
- [Remote support](https://www.sfd.co/support/remote-support) (previously `/connect-to-technician.html`, which now redirects here): LogMeIn Rescue and the six-digit pin process.
- [Pricing](https://www.sfd.co/pricing.html): now returns a 404, where it previously served the Features page; and the current [sitemap](https://www.sfd.co/sitemap.xml), listing 14 URLs with no pricing page among them.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating: sfd.co still has no pricing page, now with 14 URLs in its sitemap rather than 26 and `/pricing.html` itself returning a 404; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
