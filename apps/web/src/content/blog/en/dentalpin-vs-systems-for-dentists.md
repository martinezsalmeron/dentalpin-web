---
title: "Dentalpin vs Systems for Dentists: three decades of NHS work, on a Windows server"
description: "Systems for Dentists runs on Windows with a Firebird database and publishes no price. Sourced from their own pages, specs and downloads, September 2026."
pubDate: 2026-09-11
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists puts 1987 in its copyright line and the NHS in the middle of its product, where most of this industry treats NHS work as a feature. Read the two pages nobody reads, Tech requirements and Downloads, and you also learn the architecture underneath it: Windows on the server, Windows on every workstation, and Firebird offered as a utility beside the installer.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for an NHS practice in England or Wales it is a very short argument.

## In thirty seconds

**Systems for Dentists** is a Newcastle company that calls itself "one of the UK's Big Three Dental Practice Management Software providers" and "the UK's longest-running" one. It ships automated NHS transmissions, UDA tracking and integrated FP17 forms, a patient portal with online payments, periodontal charting with BPE scoring, and ten named imaging bridges. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A Windows practice management system published by Systems for Dentists Limited, trading from Principal House, Back Grove Avenue, Gosforth, Newcastle-Upon-Tyne. Their terms page gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ and the company registration number as 02199244, registered in England and Wales.

The About page dates the company by claim rather than by year: "the UK's longest-running Dental Practice Management Software (DPMS) provider, with a legacy of innovation stretching back over three decades". The footer is more precise, and reads "Copyright (c) 1987 - 2025 Systems for Dentists Limited".

The NHS side is where the depth is, and it is specific rather than a badge:

- **Automated NHS transmissions and claims**, with integrated FP17 forms and NHS number lookup.
- **UDA management and forecasting**, plus NHS contract performance monitoring and real-time eligibility checking.
- **A Transmissions guide** published as a PDF, covering how to submit courses of treatment, track UDAs and manage NHS responses.

Around that sits a broad clinical and front-desk product. The patient portal does online booking, digital forms and medical history updates, secure messaging, online payment, treatment plan acceptance and "Document and X-ray access". Periodontal charting records recession, pocket depth and mobility on 2, 4 or 6 points with a user-defined starting direction and BPE scoring. Clinical notes are templated with rich text, spell check and search.

Two details in the feature list are worth more than their billing. The appointment history records "date, time, user, and computer for all changes", so the audit trail names the machine and not only the user.

The other is one line under clinical notes: "Same-day editing of notes". Read plainly that describes a record that stops being editable after the day it was written, which is a defensible design for clinical documentation and an awkward one if a colleague writes up a visit the next morning. Their page does not spell out which, so ask.

They also publish a referral management system aimed at NHS Trusts and community dental services, and their NHS Trusts page claims integration "with existing NHS systems including PAS, EPR, and national databases" and describes the product as "HL7 FHIR compliant".

Imaging is handled through bridges rather than built in. The compatibility list names DBSWin, Schick, Digora, Dental Eye, MediaDent, Blue Soft, Pattersons, Medivision, Prolmage and Florida Probe, with "custom links available on request", and card payments run through Clover machines.

### What runs it

The home page offers "Cloud & Local Hosting Solutions" and "Flexible Deployment Options - Choose cloud-based for anywhere access or on-premise for complete control". The Tech requirements section on the same site publishes one architecture, and it is a Windows one.

The recommended server is "Windows 10 or Windows Server 2012 r2 or newer" with a quad core CPU, 16 GB of RAM and two drives. The minimum client is Windows 10 with 2 GB of RAM, the recommended client a Windows 10 machine with an "Intel core i3/i5 8000 series or better". No macOS, no Linux and no browser appears in any of the four specification lists.

The Downloads page fills in the rest. The current release is Version 6, build 6.25.5.27 dated 27/05/2025, distributed as an installer, and the utilities offered alongside it are Firebird Win32 / Win64, WebView2 and the Microsoft Visual C++ 2015-2022 Redistributable. Firebird is a database engine, and it is published there as a utility for their own software, which tells you more about the shape of the product than the marketing pages do.

> **The remote access is the same Windows program, published remotely.** Step 4 of their own onboarding reads "Install Winflector and apply licenses", and Winflector's publisher describes it as "remote access to Windows applications" and an alternative to Remote Desktop Services and Citrix. That is a legitimate way to reach a desktop application from anywhere, and it is not the same thing as software that runs in a browser, so ask which one you are buying.

Remote support runs through LogMeIn Rescue, with a six-digit pin from a technician.

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
| NHS transmissions, UDA, FP17 | ✓ Built in | ✗ Nothing |
| Patient portal | ✓ Booking, forms, payments, x-ray access | ✗ Listed as coming soon |
| Imaging bridges | ✓ Ten systems named | ✗ None |
| Years in market | ✓ Copyright line starts 1987 | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed migration | ✓ Test conversion, live conversion, on-site training | ~ Self-service import tool |
| Server | ✗ Windows, per the published specs | ✓ Any Docker host |
| Client machines | ✗ Windows 10 in all four spec lists | ✓ Any modern browser |
| Database | Firebird, published as a utility on their Downloads page | PostgreSQL |
| Published price | ✗ No pricing page exists | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published, issued during onboarding | ✓ Licence published |
| Install base | ~ "thousands of dental professionals", no figure | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** Their sitemap lists 26 URLs and none of them is a pricing page, no figure appears on any page consulted, and `/pricing.html` serves the Features page rather than a tariff. Every route through the site ends at "Book a Demo".

Their testimonials page carries practices making the price argument for them, one saying the software is "less expensive than the leading offers in the market" and another that it was "cheaper than the other systems". Those are customers' words about their own quotes, not a published rate, and they are not a number you can budget against.

**A customer contract.** The Terms & Conditions page governs use of the website only. The service agreement exists, because step 3 of the onboarding is "Issue and complete SLA & Direct Debit Mandate", but it is not on the open web, so contract length, notice period, what happens to your Firebird database on the way out and the terms of that SLA are all things to ask for in writing before you sign.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted. For a product sold to NHS Trusts that is the first thing to ask their sales team, and the answer may well be good.

**Where hosted data lives.** The privacy policy covers website visitors rather than patient records, and it is dated by its own text: it tells you your access rights come from "The Data Protection Act 1998" and that a request "may be subject to payment of a fee of GBP10". The Data Protection Act 2018 replaced that statute, and the fee went with it. Nothing on the pages consulted says where the cloud-hosted option stores clinical data.

**An install base.** "Thousands of dental professionals" is the figure, repeated on three pages. The groups page adds "2 or 200 practices" and "50+ location groups" as the range they serve, which is a description of the market rather than a count of customers.

**API documentation.** The NHS Trusts page claims HL7 FHIR compliance and "secure data exchange protocols", and no developer documentation, endpoint list or integration guide appears anywhere on the site.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry.** Automated transmissions, FP17 forms, UDA tracking and forecasting, eligibility checking and contract monitoring, plus a published guide on managing NHS responses. We do none of it, and no amount of open source makes up for a claim you cannot submit.
- **You are an NHS Trust or a community dental service.** The referral management system, the multi-site pathways and the reporting aimed at commissioners are built for exactly that buyer, and almost nobody else builds for it.
- **You want a phone number and named hours.** Support on 0191 500 6789, Monday to Thursday 08:30 to 17:30 and Friday to 17:00. We have Telegram and GitHub issues.
- **You want someone else to do the migration.** A test conversion with quality checks, a live conversion, on-site training for the whole team, a day of floorwalking and a Hypercare phase with daily check-ins and NHS transmissions monitored while you settle in.
- **You take intraoral x-rays.** Ten named imaging systems with custom bridges on request. We store images in the record and integrate with none of them.
- **You want a patient portal today.** Booking, forms, medical history updates, payments, plan acceptance and x-ray access, ready made. Ours is still on the coming soon list.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is a conversation.
- **You do not want to buy Windows to run your practice software.** Their published specifications name Windows on the server and Windows on every workstation. Ours runs in a browser, on whatever the machine is.
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

What we would push back on is the framing that the rest follows from it. A price you can only get on a call, a contract that is not on the open web, a Windows-only estate and a privacy policy still citing the 1998 Act are decisions, not consequences of doing NHS dentistry well.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026.

- [Systems for Dentists home page](https://www.sfd.co/): "Cloud & Local Hosting Solutions", "Flexible Deployment Options", "Developed with UK dental professionals over 30+ years", the feature summary and the support hours and phone numbers.
- [About us](https://www.sfd.co/about-us.html): "one of the UK's Big Three", "the UK's longest-running Dental Practice Management Software (DPMS) provider", Newcastle upon Tyne, "trusted by thousands of dental professionals".
- [Product, features, onboarding and tech requirements](https://www.sfd.co/product.html): the full feature list, the patient portal, NHS integration, periodontal charting and BPE scoring, "Same-day editing of notes", the imaging compatibility list, Clover payments, the five onboarding steps including "Install Winflector and apply licenses" and "Issue and complete SLA & Direct Debit Mandate", and all four hardware specification lists.
- [Downloads](https://www.sfd.co/downloads.html): Version 6 build 6.25.5.27 dated 27/05/2025, Version 5, and the Firebird, WebView2 and Visual C++ utilities.
- [NHS Trusts](https://www.sfd.co/nhs-trusts.html): PAS and EPR integration and the "HL7 FHIR compliant" claim.
- [Dental Groups](https://www.sfd.co/dental-groups.html): "2 or 200 practices" and "50+ location groups".
- [User guides](https://www.sfd.co/user-guides.html): the seven published PDF guides, including the Transmissions guide.
- [Terms & Conditions](https://www.sfd.co/terms-conditions.html): registered office in Cheltenham, company number 02199244, and the website-only scope.
- [Privacy](https://www.sfd.co/privacy.html): the Data Protection Act 1998 reference and the GBP10 subject access fee, against the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/contents) on legislation.gov.uk.
- [Testimonials](https://www.sfd.co/testimonials.html): the two customer statements about price quoted above.
- [Connect to a technician](https://www.sfd.co/connect-to-technician.html): LogMeIn Rescue remote support.
- [Winflector](https://www.winflector.com/en/), for what Winflector is, quoted from its own publisher rather than from Systems for Dentists.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating: sfd.co has no pricing page, with none in its own sitemap and `/pricing.html` serving the Features page instead; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
