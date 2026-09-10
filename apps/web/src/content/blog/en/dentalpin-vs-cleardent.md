---
title: "Dentalpin vs ClearDent: three ways to deploy, one Microsoft stack"
description: "ClearDent sells on-premise, cloud and hybrid, and every path runs on Microsoft. Sourced from ClearDent's own pages, specs and contract, September 2026."
pubDate: 2026-09-10
tags: [comparison, cleardent, canada, dental-software]
---

ClearDent is one of the few vendors anywhere that lets a practice choose between its own server, the cloud and a hybrid of the two. Read the specification sheets behind those three choices and every one of them lands on Microsoft: Windows Server, SQL Server and client access licences you buy separately for two of them, Azure and a Windows imaging workstation for the third.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about ClearDent below comes from a page, specification sheet or contract that ClearDent publishes itself, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when ClearDent is the better choice, and for a Canadian practice doing intraoral imaging it is a short argument.

## In thirty seconds

**ClearDent** has been built in Burnaby for the Canadian market since 2002, claims "over 35,000 Canadian dental professionals", holds an ISO 13485:2016 certification and a Health Canada Medical Device Class II licence, and publishes real support hours. For a practice in Canada that files insurance and captures x-rays, that regulatory position is not a marketing line, and we do not have it.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it holds no Canadian device licence.

The question that decides between them is whether your practice needs a Canadian-certified product with a phone number, or software whose price, source and database are all yours to read.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What ClearDent is

A dental practice management system published by Prococious Technology Inc., trading as ClearDent, from 166-5489 Byrne Rd, Burnaby, British Columbia. Their About page dates the company to 2002: "In 2002, founders, Shirley, Peter, and Alvin saw a need for an innovative and intuitive dental practice management solution in Canada."

It sells in Canada and nowhere else, and the product is built around that. Their own FAQ answers "Is ClearDent designed for Canadian dental practices?" with "Yes. ClearDent is built specifically for Canadian dental practices and supports Canadian billing, insurance workflows, and regulatory requirements."

The platform comes in three deployment shapes:

- **ClearDent On-Premise**, the original product, installed on a server in the practice.
- **ClearDent Cloud**, which they describe as "Canada's first true cloud-based dental software", running on Microsoft Azure with "continuous backups in three Canadian data centers" and 256-bit AES encryption.
- **ClearDent Link**, a hybrid that keeps the database on your server and "securely connects your local server to a cloud-based access layer".

Around that core sit ClearConnect for patient engagement, Online Booking, ClearInsight, ClearDent Mobile, and ClearVault, a backup product whose page states "Data is always stored in Canada, and only Canada" with daily copies and "Up to 20 copies of data stored at any given time".

The clinical side is described concretely. Digital imaging is native rather than bolted on, with x-rays that "float" beside the odontogram and are "automatically rotated, mounted, and labeled by tooth number", and the charting is colour coded with templated clinical notes and referral letters generated without leaving the odontogram.

ClearDent AI is the newest layer: AI Reconcile reads insurer EOBs and posts adjustments at the line-item level, Ask AI answers staff questions inside the Help Centre, and AI Insights turns performance data into suggested actions. A further set of partner capabilities runs through the ClearDent API, and their own table marks several of them "In Development" rather than available.

### The certification is the real difference

This is the part of ClearDent's pitch that has no equivalent on our side, so it goes near the top rather than buried.

ClearDent publishes an ISO 13485:2016 certification covering "the design and development, implementation, and support of dental office patient data management software", and calls it "the highest standard of certification that a dental software company can presently achieve in Canada". They also publish a Health Canada Medical Device Class II licence, and a note that reads: "a dental software system with imaging MUST have a Class II license to operate legally in Canada."

That note is ClearDent's statement of Canadian law, not Health Canada's, and it is worth checking against the Health Canada device licence listing before it decides anything. ClearDent links that search from the same page, which is the right way to publish a claim like it.

What is not in doubt is that they hold the licence and publish it, and that Dentalpin does not hold one and does not claim to.

They are also a nationally approved AGD PACE program provider under the name "Prococious Technology (ClearDent)", provider ID 321224, approved from 1 April 2024 to 31 March 2027.

![Dentalpin patient record: odontogram, clinical alerts, active plan and next appointment on one screen](/screenshots/dental-chart.png)

*The patient record, with the odontogram, clinical alerts and the active treatment plan in one view.*

## What Dentalpin is

Open source dental practice management software. You download the code, install it where you like (your server, whichever cloud provider you choose) and pay no licence per chair, per dentist or per patient.

Odontogram, periodontal charting, schedule, clinical records, treatment plans, quotes with digital signature, invoicing, payments, recalls and reports. Plus an AI assistant that runs tasks against your real data while respecting each user's permissions.

It is much younger. That matters, and we come back to it.

## Side by side

Only verifiable rows. Where nothing is published, the row says so.

| | ClearDent | Dentalpin |
|---|---|---|
| Model | Commercial subscription | Open source (BSL 1.1, Apache 2.0 after 4 years) |
| Deployment | On-premise, cloud or hybrid | Your server, your provider, or local |
| Server, on-premise or Link | ✗ Windows Server + Microsoft SQL Server | ✓ Any Docker host |
| Windows CALs, on-premise or Link | ✗ Bought separately from Microsoft | ✓ None |
| Published price | ✗ No pricing page exists | ✓ $0, everything included |
| Minimum term | ✗ 1 year, auto-renewing | ✓ None |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not public | ✓ Full REST, OpenAPI |
| Where data lives | Your server, or Canada on Azure for Cloud | Wherever you host it |
| Export on exit | ~ Once, within 30 days of termination | ✓ Your own database, always |
| Health Canada Class II licence | ✓ Published | ✗ None |
| ISO 13485:2016 | ✓ Certified | ✗ None |
| Years in market | ✓ Since 2002 | ✗ Since 2026 |
| Install base | ✓ 35,000+ Canadian professionals claimed | ✗ Very few so far |
| Published support hours | ✓ 8am to 8pm ET weekdays | ✗ Telegram and GitHub |
| Staffed data migration | ✓ 20+ years of conversions | ~ Self-service import tool |

Several of those rows deserve the detail behind them.

## What ClearDent does not publish

**A price.** There is no pricing page on cleardent.com: it appears in no sitemap, and `/pricing/`, `/plans/`, `/price/` and `/cost/` all return HTTP 404 (checked 10 September 2026). Every route through the site ends at "Request a demo" or "Schedule a demo".

The contract does say what you are billed on. Section 3.1 defines a "Subscription Entitlement" that "may include, by way of example, the number of software licenses, workstations, named users, computers, data storage capacity or other applicable metric described in your Order", so the unit itself is negotiated per practice rather than fixed.

**An uptime figure.** Section 13 provides the products "AS IS" and "AS AVAILABLE" and states that ClearDent does "not represent or warrant that the Cloud Services or associated websites will be uninterrupted, timely, secure or error-free". No availability percentage appears on any page consulted.

**API documentation.** The API is real (their FAQ confirms it works with on-premise deployments, and a partner testimonial describes building against it), but no public documentation was found on the pages consulted.

**A count of practices.** The published figures are 35,000+ dental professionals and "over 2,000,000 patient records". Neither is a number of clinics, and the animated counters on their home page for retention, reinvestment and satisfaction render as zero without scripting, so no figure could be read from them.

## What the IT specifications actually require

ClearDent publishes four hardware and software specification sheets, and they are the most useful documents on the site.

The **On-Premise server** sheet (updated 16 May 2025) asks for "Current Windows Server", "Current Microsoft SQL Server", 32 GB of RAM, a 1 TB SSD, TPM 2.0 with encryption enabled and a UPS with safe shutdown. It closes with a line worth pricing before you sign anything else: "Please ensure you have acquired sufficient Windows Client Access License (CAL) from Microsoft."

**ClearDent Link** carries the same server sheet, because Link is the on-premise product with a cloud access layer rather than a different architecture. It adds: "If you have more than 20 workstations, consider purchasing Standard Edition of Microsoft SQL Server."

The **Cloud** sheet is where the interesting exception sits. A general workstation can be "Current Windows Pro" with Chrome or Edge, or "Current MacOS (beta)" with Chrome. But the sheet lists a second, separate workstation profile, "for Digital Image Capturing", and that one is "PC (Gigabit Ethernet)" running "Current Windows Pro", with no Mac option at all.

> **So even on the cloud product, the machine that captures x-rays is a Windows PC.** That is not a criticism, it is how almost every intraoral sensor driver in the market works. It does mean a practice moving to ClearDent Cloud to escape Windows will not escape it in the operatory, and the specification sheet is the only place ClearDent says so.

There is one more scope note on the server sheet: with a virtual server "your IT department must properly configure it, as ClearDent will have no access to the host server. Configuring a virtual server is also out of the scope of our services."

## What the contract says

ClearDent publishes its General Terms and Conditions in full, which most vendors in this queue do not, and it is a mixed picture stated plainly.

The good part is data. Section 4.2 says you retain ownership of and all intellectual property rights in your data. Section 4.3 grants ClearDent a licence to use it for four listed purposes only: to provide the products, to address service, security, support or technical issues, as required by law, and as you permit in writing. That list is closed, and nothing in it licenses your clinical data for model training or benchmarking.

The counterweights are commercial:

- **One year minimum, auto-renewing.** Section 9.1 sets a Subscription Term of "the period described in your Order or a minimum of one year", renewing automatically unless you give written notice at least 30 days before it ends, and renewing at "our standard Subscription Fee for the applicable Product at the time the renewed Subscription Term starts".
- **Cancelling takes a form, not an email.** Section 9.4 requires 30 days' written notice to notice@cleardent.com "and by signing a cancellation form that we will provide to you".
- **No refunds mid-term.** Section 8.1 makes fees "non-refundable" and the subscription "non-cancellable during your current Subscription Term", and section 9.5 works the example out loud: start on 1 January, terminate on 1 August, and nothing from August to December comes back.
- **Thirty days to get your data out.** Section 9.5(b) retains your data for 30 days after termination, during which "you may contact us to export Your Data once", after which it "will be deleted in the normal course of operation and will not be recoverable".
- **An audit right.** Section 16.2 lets ClearDent verify your usage once every 12 months on five business days' notice, and invoice any overage at list price.

One clause qualifies the data ownership above and is easy to miss. Section 4.2 continues: "You must not permit any third party to access Your Data stored in the Products without our prior authorization, unless that access occurs in a manner approved by us, such as via our APIs." You own the records; reaching them with your own tools is still theirs to authorise.

The agreement is governed by the laws of British Columbia, with the courts of Vancouver registry.

## Choose ClearDent if

This is not a formality. For a large share of Canadian practices, these are decisive.

- **You are in Canada and you capture x-rays.** ClearDent holds and publishes a Health Canada Class II device licence and an ISO 13485:2016 certification. We hold neither. If your regulator, your insurer or your own risk assessment cares about that, the comparison is already over.
- **You want published support hours and a phone number.** Weekdays 5am to 5pm Pacific, which is 8am to 8pm Eastern, plus Saturday emergency cover, plus up to two Saturday emergency calls a year written into the contract at section 6.1(c). We have Telegram and GitHub issues.
- **You need someone else to do the migration.** Twenty years of conversions, a team that extracts from your old system, and validation done with you.
- **Your data must stay in Canada and you want that in writing.** Azure, three Canadian data centres, ClearVault backups "in Canada, and only Canada".
- **You bill Canadian insurance.** Claims, EOB auto-adjustment, automatic deductible calculation and provincial fee guides are built for that market by a vendor that sells in no other one.
- **Your internet is unreliable.** Their own FAQ makes this argument better than we could, recommending on-premise for "mobile clinics or practices in remote regions, where consistent connectivity cannot be guaranteed".
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **A one-year auto-renewing term is not how you want to buy software.** There is no term here to renew.
- **You already run Linux, or you do not want to buy Windows Server, SQL Server and CALs** on top of the subscription.
- **You want to read the code that stores clinical records.** It is on GitHub.
- **You want to integrate and automate.** A documented REST API with an OpenAPI schema, not an integration you have to be authorised into.
- **Getting your data out should not be a support ticket with a 30-day clock.** It is your database, on your machine, always.

![The Dentalpin AI assistant with the workflows it can run against practice data](/screenshots/ai-copilot.png)

*The AI assistant, running tasks against real practice data under each user's permissions.*

## How migration actually works

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not a single button:

1. **You upload the file** and the system validates it before touching anything.
2. **You see a preview** with row counts and sample rows. Nothing has been written yet.
3. **You review the proposals.** The system maps the source treatment catalogue against yours and you decide row by row: accept, relink, create new or ignore. Anything scoring above 0.9 can be accepted in bulk.
4. **You run it**, and the import executes exactly the decisions you made.

> **Step 3 is where almost every migration fails.** No two practices code their treatments the same way, and **a silently guessed equivalence produces wrongly issued invoices that nobody notices for months**.

ClearDent does this for you instead, which for most practices is the better trade. They publish no price and no timeline for it, so ask for both.

## The honest read

For a Canadian practice with intraoral imaging, insurance billing and no technical staff, ClearDent is the sensible choice today and this comparison should not pretend otherwise. The device licence, the certification, the published support hours and twenty years of Canadian conversions are things we do not have and will not have soon.

What we would push back on is the framing that those things require the rest of the package. A one-year auto-renewing term, a price you can only get on a call, a licence stack you buy separately from Microsoft and one export window on the way out are commercial decisions, not consequences of being certified.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 10 September 2026.

- [About ClearDent](https://www.cleardent.com/about/): founding year, founders, Burnaby address, "over 20 years".
- [ClearDent home page](https://www.cleardent.com/): the three platforms, "over 35,000 Canadian dental professionals", "over 2,000,000 patient records", the FAQ on deployment options and Canadian hosting.
- [ClearDent Cloud](https://www.cleardent.com/dental-software/cleardent-cloud/): "Canada's first true cloud-based dental software", Microsoft Azure, 256-bit AES, three Canadian data centres, the SOC 2 aligned and ISO 13485 aligned wording.
- [ClearDent On-Premise](https://www.cleardent.com/dental-software/cleardent-on-premise/): the on-premise FAQ, IT support requirement, remote and mobile clinic guidance.
- [ClearDent Link](https://www.cleardent.com/dental-software/cleardent-link/): hybrid architecture and the cloud access layer.
- [Clinical workflow](https://www.cleardent.com/dental-software/cleardent-on-premise/clinical-workflow/): native digital imaging, charting and clinical notes.
- [ClearVault](https://www.cleardent.com/dental-software/clearvault/): daily backups, up to 20 copies, "in Canada, and only Canada".
- [ClearDent AI](https://www.cleardent.com/cleardent-ai/): AI Reconcile, Ask AI, AI Insights, the partner table and its "In Development" markers.
- [ISO certification and AGD approval](https://www.cleardent.com/iso-certification-and-academy-of-general-dentistry-approval/): ISO 13485:2016, the Health Canada Class II licence, PACE provider ID 321224.
- [IT specifications](https://www.cleardent.com/support/it-specifications/) and the four sheets linked from it: [on-premise server](https://www.cleardent.com/wp-content/uploads/2025/05/On-Prem-Server.pdf), [on-premise workstation](https://www.cleardent.com/wp-content/uploads/2025/05/On-Prem-Workstation-1.pdf), [cloud workstation](https://www.cleardent.com/wp-content/uploads/2025/05/ClearDent-Cloud-Workstation-Specification.pdf) and [ClearDent Link](https://www.cleardent.com/wp-content/uploads/2025/05/ClearDent-Link-Specification.pdf).
- [General Terms and Conditions](https://www.cleardent.com/terms-conditions/): Prococious Technology Inc., sections 3.1, 4.2, 4.3, 6.1, 8.1, 9.1, 9.4, 9.5, 13, 16.2 and 17.9.
- [Support contacts and hours](https://www.cleardent.com/i-am-a-customer/): weekday and Saturday support hours by time zone.
- [Data migration](https://www.cleardent.com/support/data-migration/): "20+ years of experience with data conversions".
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Two checks worth stating: cleardent.com has no pricing page, with `/pricing/`, `/plans/`, `/price/` and `/cost/` all returning HTTP 404 and no such URL in the site's own sitemap; and no uptime figure, no service level commitment and no public API documentation appear on any page consulted, so this comparison asserts nothing about them.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for ClearDent too.
