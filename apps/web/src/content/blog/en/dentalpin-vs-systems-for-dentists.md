---
title: "Dentalpin vs Systems for Dentists: NHS dentistry, a thinner public record"
description: "Systems for Dentists relaunched its site since we first wrote this and dropped most of the specifics the comparison was built on. What survived, sourced October 2026."
pubDate: 2026-09-11
updatedDate: 2026-10-31
tags: [comparison, systems-for-dentists, uk, nhs, dental-software]
---

Systems for Dentists has been selling NHS dental software since 1987, and the NHS is still the centre of its pitch. What changed since we first wrote this is the rest of the site: the specific feature lists, the hardware requirements, the version numbers, the testimonials and the install-base figures that used to sit behind the NHS framing are gone, replaced by a leaner marketing site that states less and asks you to book a demo sooner.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Systems for Dentists below comes from a page they publish themselves at sfd.co, listed with the date consulted at the end. No aggregator blogs and no review sites. Their site changed significantly between our first pass in September 2026 and this re-check in October, and where a claim disappeared we say so instead of carrying it forward. There is a section on when they are the better choice, and for an NHS practice in England or Wales it is still a short argument, even if the detail behind it is thinner than it was.

## In thirty seconds

**Systems for Dentists** is a Newcastle company that has been selling dental software since 1987; its own words today are "almost 40 years", with no "Big Three" or "longest-running" claim left on the site. It still pitches NHS transmission and claim handling, a patient portal with booking and payments, and periodontal charting with BPE scoring, but the specific NHS workflow list (FP17 forms, UDA tracking, eligibility checking) and the ten named imaging bridges it published in September are no longer spelled out anywhere we could find. It answers a published phone number on weekdays.

**Dentalpin** is open source and costs nothing to license: no fee per surgery, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it submits nothing to the NHS.

The question that decides between them is whether you do NHS dentistry. If you do, this comparison is over on the first row of the table, and the rest of it is for your private-only colleagues.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Systems for Dentists is

A practice management system published by Systems for Dentists Limited, now trading from Quorum Business Park, Newcastle upon Tyne, NE12 8BU, Suite 9 Q11 (an address that changed from the Gosforth one we cited in September). Their Terms & Conditions page still gives the registered office as Rosehill, New Barn Lane, Cheltenham, GL52 3LZ, company number 02199244, registered in England and Wales, unchanged.

The homepage now reads "Supporting UK dentistry since 1987" and "Almost 40 years of dental software", and the About page adds "Founded in Newcastle upon Tyne in 1987". Both are softer than the "one of the UK's Big Three Dental Practice Management Software providers" and "the UK's longest-running" claims the site made in September, which are gone, along with "trusted by thousands of dental professionals". The footer copyright line has also changed, from "Copyright (c) 1987 - 2025 Systems for Dentists Limited" to "Systems for Dentists © Copyright 2026": the founding year now lives only in the body text, not the footer.

NHS work is still the centre of the pitch, but it is stated in general terms rather than named features. The site now gives one line each for NHS England ("Efficient NHS England transmission and claim handling"), Scotland, Wales and the Isle of Man, where the version we checked in September described England and Wales in more NHS-specific detail. What it no longer states anywhere we could find: FP17 forms, UDA management and forecasting, NHS number lookup, or real-time eligibility checking, all named explicitly in September. Ask which of those survived the redesign and which did not.

The patient portal is still there: online booking, forms, "simple online payment and account management with Clover or Stripe" (Stripe is new since September, when only Clover was named), and digital treatment-plan approval. The "Document and X-ray access" line from the portal, and the "Same-day editing of notes" and machine-level audit-trail detail from clinical notes, no longer appear on the pages we checked.

Periodontal charting is still named but thinner: "Record BPE scores and full pocket charts, and track change between visits," without the 2, 4 or 6-point and user-defined-direction detail the September page gave.

Imaging and NHS-system integration are now both folded into a single, unnamed "Product Integrations" line ("Imaging, payments and patient engagement, connected"). The ten named imaging bridges (DBSWin, Schick, Digora, Dental Eye, MediaDent, Blue Soft, Pattersons, Medivision, Prolmage, Florida Probe) and the NHS Trusts page's "PAS, EPR, and national databases" and "HL7 FHIR compliant" claims are both gone from the current site. We cannot say today whether the underlying integrations still exist and only the marketing copy changed, or whether they were dropped along with it. Ask.

> **A vendor can go quiet without going anywhere.** None of this means Systems for Dentists stopped doing NHS transmissions or imaging integrations: company number 02199244 is still registered, the phone number still rings, and LogMeIn Rescue still connects a technician to your desktop. What changed is how much of the product the website is willing to specify in writing, and that is worth asking about directly rather than assuming either way.

### What the current site no longer says

In September, the Tech requirements and Downloads pages gave a full architecture: Windows 10 or Windows Server 2012 r2 or newer on the server, Windows 10 on every client, and Firebird offered as a database utility next to the installer, on Version 6 build 6.25.5.27 dated 27/05/2025. None of that is on the site today. We found no mention of Windows, macOS, Linux, a browser, a server operating system, a database engine or a current version number on any page consulted in October. Remote access through Winflector, itself a Windows remote-desktop product per its own site, and remote support through LogMeIn Rescue are both still there, which is the strongest surviving hint that the underlying architecture has not actually changed, only its public description. Ask for the current system requirements directly; this comparison can no longer state them.

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
| NHS transmissions and claims | ✓ England, Scotland, Wales, Isle of Man | ✗ Nothing |
| FP17, UDA tracking, eligibility checking | Not published today (named in September) | ✗ Nothing |
| Patient portal | ✓ Booking, forms, payments, plan approval | ✗ Listed as coming soon |
| Imaging and NHS-system integrations | Not named today (ten bridges named in September) | ✗ None |
| Years in market | ✓ "Almost 40 years", since 1987 | ✗ Since 2026 |
| Published support line and hours | ✓ Phone, Mon to Fri | ✗ Telegram and GitHub |
| Staffed migration | ~ Offered, steps no longer published | ~ Self-service import tool |
| Server and client requirements | Not published | ✓ Any Docker host, any modern browser |
| Database | Not published | ✓ PostgreSQL |
| Published price | ✗ No pricing page at all | ✓ £0, everything included |
| Source code | ✗ Not available | ✓ Published on GitHub |
| API documentation | ✗ Not on any page consulted | ✓ Full REST, OpenAPI |
| Customer contract | ✗ Not published | ✓ Licence published |
| Install base | No figure published | ✗ Very few so far |

Several of those rows deserve the detail behind them.

## What Systems for Dentists does not publish

**A price.** `/pricing.html`, which in September served the Features page, now returns a plain 404. No figure appears on any page consulted, in either pass. Every route through the site still ends at "Book a Demo".

**Testimonials or an install-base figure.** The testimonials page, which in September carried two customers' price comments, no longer has any testimonials at all; it now shows the same content as the current homepage. "Thousands of dental professionals" and the "2 or 200 practices" / "50+ location groups" range from the Dental Groups page are both gone, and nothing has replaced them. There is no customer count anywhere on the site today.

**Hardware, software or database requirements.** In September, Tech requirements named Windows 10+ and Windows Server 2012 r2+ on the server and Windows 10 on every client, and Downloads named Firebird as the database utility alongside Version 6 build 6.25.5.27. None of it is published now.

**Named imaging or NHS-system integrations.** The ten imaging bridges and the NHS Trusts page's PAS, EPR and HL7 FHIR claims are both gone, replaced by an unnamed "Product Integrations" line.

**A customer contract.** The Terms & Conditions page still governs website use only, and the onboarding steps that used to mention "Issue and complete SLA & Direct Debit Mandate" no longer appear anywhere we could find, so contract length, notice period and exit terms are, if anything, less documented than in September.

**An uptime figure, or any certification.** No availability percentage, no ISO 27001, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, in either pass.

**Where hosted data lives.** The privacy policy has actually improved here: it now cites UK GDPR rather than the 1998 Act and the old GBP10 subject-access fee, and promises a response "within one month." It still says nothing about where clinical data for the cloud-hosted option is stored.

**Specific user guides.** The User guides page named a Transmissions guide among seven PDFs in September; it now describes role-based categories (reception, clinician, practice manager, orthodontics, reporting, transmissions) without confirming any guide is still downloadable as a document.

## Choose Systems for Dentists if

This is not a formality. For a large share of UK practices, these are decisive.

- **You do NHS dentistry.** Transmission and claim handling for England, Scotland, Wales and the Isle of Man is still the pitch, even though the FP17, UDA and eligibility detail behind it is no longer spelled out. We do none of it, and no amount of open source substitutes for a claim you cannot submit.
- **You want a phone number and named hours.** Support on 0191 500 6789, Monday to Thursday 08:30 to 17:30 and Friday to 17:00. We have Telegram and GitHub issues.
- **You are willing to ask rather than read.** A lot of what used to be a published feature list (FP17 forms, imaging bridges, hardware specs, onboarding steps) is now a conversation with their sales team instead of a web page. If you would rather have a person confirm fit than read a spec sheet, that is now the only way to get the detail.
- **You take intraoral x-rays and already use one of their systems.** Imaging integrations are still implied ("Product Integrations") even though no systems are named; ask whether yours is still supported.
- **You want a patient portal today.** Booking, forms, payments and plan approval, ready made. Ours is still on the coming soon list.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server and the backups; Systems for Dentists no longer says what that server needs to be, but someone there presumably still knows.

## Choose Dentalpin if

- **You are wholly private.** Everything above about the NHS stops applying, and the question becomes who holds the records and what you pay as the practice grows.
- **You want to know the price before the demo call.** Ours is published and it is zero. Theirs is not just a conversation now, it is a conversation with no pricing page to even point you toward.
- **You want the system requirements written down.** Ours runs in a browser, on whatever the machine is. Theirs used to be published and no longer is, so you cannot compare them without asking first.
- **You want to read the code that stores clinical records.** It is on GitHub, and so is the licence.
- **You want to integrate and automate.** A documented REST API with an OpenAPI schema, rather than an unnamed "Product Integrations" line.
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

Systems for Dentists still asks which software a practice runs today in its own demo form, which reads as the market they take practices from, but they publish no price and no timeline for the conversion, so ask for both.

## The honest read

For a practice doing NHS work in the UK, Systems for Dentists is still the plausible choice today, and almost forty years of doing exactly this work is not nothing. But this comparison carries less certainty than it did in September: the site relaunched since we first wrote this, and what came down with the redesign was precisely the kind of detail (FP17 forms, UDA tracking, imaging bridges, hardware requirements, a customer count) that let a reader check a claim rather than take a sales call's word for it.

That is not evidence anything got worse. A privacy policy that now cites GDPR instead of a 1998 statute is a real improvement, and a vendor is entitled to simplify its marketing site. It does mean a reader comparing the two today has to ask more questions before the first demo than they did two months ago, on exactly the points (NHS workflow detail, system requirements, contract terms) that decide whether this is the right software.

Dentalpin is the other bet: that the software holding a practice's clinical records should be readable and ownable by that practice, specification included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

First consulted on 11 September 2026. Re-checked in full on 31 October 2026, when Systems for Dentists turned out to have relaunched its site: the changes are noted against each source below rather than carried forward silently.

- [Systems for Dentists home page](https://www.sfd.co/): in September, "Cloud & Local Hosting Solutions", "Flexible Deployment Options" and "Developed with UK dental professionals over 30+ years". Today: "The Complete Practice Management Software for Modern Dentistry", "Supporting UK dentistry since 1987", "Almost 40 years of dental software", and the same support phone number with general office hours rather than explicit support hours.
- [About us](https://www.sfd.co/about-us.html): in September, "one of the UK's Big Three", "the UK's longest-running Dental Practice Management Software (DPMS) provider" and "trusted by thousands of dental professionals", from an office at Principal House, Back Grove Avenue, Gosforth. Today those claims are gone; the page says "Founded in Newcastle upon Tyne in 1987" and "nearly 40 years", from an office at Quorum Business Park, Newcastle upon Tyne, NE12 8BU, Suite 9 Q11.
- [Product and features](https://www.sfd.co/product.html): in September, the full NHS feature list (FP17, UDA, eligibility), "Same-day editing of notes", the ten-system imaging compatibility list, Clover payments, five onboarding steps and four hardware specification lists. Today: one line each for NHS England, Scotland, Wales and the Isle of Man, a patient portal with Clover or Stripe payments, BPE scoring without the 2, 4 or 6-point detail, an unnamed "Product Integrations" line, and no hardware, software or onboarding-step detail at all.
- [Downloads](https://www.sfd.co/downloads.html): in September, Version 6 build 6.25.5.27 dated 27/05/2025 plus the Firebird, WebView2 and Visual C++ utilities. Today: no version, build, date or utility is listed.
- [NHS Trusts](https://www.sfd.co/nhs-trusts.html): in September, "with existing NHS systems including PAS, EPR, and national databases" and "HL7 FHIR compliant". Today: neither claim appears; the page now says only "integrated dental and orthodontic workflows" and lists governance and reporting tools.
- [Dental Groups](https://www.sfd.co/dental-groups.html): in September, "2 or 200 practices" and "50+ location groups". Today: no numeric claim at all.
- [User guides](https://www.sfd.co/user-guides.html): in September, seven named PDF guides including a Transmissions guide. Today: role-based categories (reception, clinician, practice manager, orthodontics, reporting, transmissions) with no confirmed downloadable guide.
- [Terms & Conditions](https://www.sfd.co/terms-conditions.html): unchanged — registered office in Cheltenham, company number 02199244, website-only scope.
- [Privacy](https://www.sfd.co/privacy.html): in September, the Data Protection Act 1998 and a GBP10 subject access fee. Today: UK GDPR and a one-month response commitment, with no fee mentioned. This is a correction to the vendor's own page, not to ours, but it means our September criticism of it no longer applies.
- [Testimonials](https://www.sfd.co/testimonials.html): in September, two customer statements about price. Today: the URL shows the same content as the current homepage, with no testimonials at all.
- [Connect to a technician](https://www.sfd.co/connect-to-technician.html): unchanged — LogMeIn Rescue, a technician-read six-digit PIN.
- [Pricing](https://www.sfd.co/pricing.html): in September this served the Features page. Today it is a plain 404.
- [Winflector](https://www.winflector.com/en/), for what Winflector is, quoted from its own publisher rather than from Systems for Dentists: unchanged.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating: sfd.co has no pricing page today, where in September it at least redirected `/pricing.html` to the Features page; no uptime figure, no ISO certification, no Cyber Essentials and no NHS Data Security and Protection Toolkit status appears on any page consulted, in either pass; and no customer contract or SLA is published, so this comparison asserts nothing about contract length, notice period or exit terms.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Systems for Dentists too.
