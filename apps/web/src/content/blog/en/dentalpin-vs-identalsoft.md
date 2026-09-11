---
title: "Dentalpin vs iDentalSoft: $395 a month per practice, and what the order form decides"
description: "iDentalSoft publishes a $395 starter price charged per practice, not per user. What their own pricing page and terms add to that, checked September 2026."
pubDate: 2026-09-11
tags: [comparison, identalsoft, usa, dental-software]
---

iDentalSoft publishes a number most of this market will not put on a page: a Starter plan "as low as $395/month", charged per practice rather than per provider or per user. That shape matters more than the figure, because it is the one commercial model in this queue where hiring a third dentist does not change the invoice.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about iDentalSoft below comes from a page they publish themselves at identalsoft.com, including their Terms of Service, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for a US practice billing insurance it is not a close call.

## In thirty seconds

**iDentalSoft** is a browser-based, cloud dental practice management system sold to US practices, founded in 2010 and run from Milpitas, California. It ships electronic records, charting, native imaging with bridges to sixteen named radiography systems, unlimited electronic claims, eligibility verification, e-prescribing, a patient portal, a KPI dashboard and FQHC reporting, with free and unlimited one-to-one training on top.

**Dentalpin** is open source and free to self-host: no fee per chair, per dentist or per patient, the code published, the records on hardware you pick. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging device, and it does no insurance work at all.

The question that decides between them is whether you bill dental insurance in the United States. If you do, iDentalSoft submits claims and checks eligibility and we do neither, and the rest of this page is for cash and membership-plan practices, and for anyone outside the US.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What iDentalSoft is

A cloud practice management platform, described on its own home page as "a cloud-based, all-in-one dental practice management software that unifies front office, clinical, billing, and AI-assisted workflows". Their About page dates the company to 2010, says it is "led by a team of serial software/SaaS entrepreneurs and backed by prominent healthtech venture capitalists", and publishes four figures: "15+ Years of expertise", "2,300+ Dentists nationwide", "100+ Hardware and dental devices are compatible" and "10M+ Patient records stored".

One number is worth reading twice, because the unit changes between pages. The home page and the About page say "2,300+ dentists" and "2,300+ Dentists nationwide"; the pricing page says "Chosen by 2,300+ dental practices nationwide". Practices and dentists are not the same count, and which one the figure refers to decides the average customer size.

The product is browser-based with no local install. Their FAQ answers the hardware question in one line: "iDentalSoft is a browser-based software, so you can access it from any internet-enabled device."

What is in the Starter plan, per their own pricing page, is more than most vendors put in a base tier:

- **Front desk and patients.** Scheduling, reminders, patient portal, two-way SMS, mail blasts, reputation management, kiosk self check-in, teledentistry via Zoom and patient statements.
- **Clinical.** Electronic records, digital charting, treatment planning, native imaging, a 3D odontogram, referral management, online forms, clinical notes, implant tracking and lab case tracking.
- **Billing.** eClaims with "Unlimited Submission", electronic remittance advice, insurance verification, auto-posted e-EOBs, medical insurance billing, payment plans and online payment processing.
- **Administration.** In-office messaging, employee time clock, line item and running balance ledgers, operational reports, user permissions, location access control, and 2FA.

Imaging is where their integration work shows. Their FAQ names bridges to BioPak, Cerec, Cliniview, DataGrabber, Dexis, EvaSoft, Florida Probe, Paterson Imaging, ProImage, ProMax 3D, ProfSuni, Sidexis XG, Trophy, Tscan, VixWin and XDR, with TWAIN support alongside, and invites practices with an unlisted system to ask.

Support hours are published: "8:00 AM to 8:00 PM EST", with a stand-by team outside them, on a named phone number and support address. Training is free, unlimited and one-to-one over Google Meet, "no request limits", each session recorded and delivered with a step-by-step PDF.

## What the $395 does not include

The Starter plan is a floor, and their own pricing page says so by putting a second list under it. "Tools you can include in your plan" carries the AI X-ray diagnostics, AI note dictation, AI perio voice commands and AI front desk, plus e-prescribing, the KPI analytics dashboard, integrated VoIP, electronic faxing, WhatsApp, Zoom and the payment platform. The block closes with "Contact us for package options and pricing", and no figure appears for any of them.

A third block, "Setup and Support Services", lists data and image migration per office, additional custom forms, equipment setup per office and a view-only mode. Those carry no figures either.

> **The AI is the marketing and the AI is the add-on.** The home page presents the AI tools as "built-in dental AI tools" that "eliminate manual steps across clinical and front office workflows. No third-party systems needed." The pricing page lists those same tools outside the Starter plan, and the integrations page names BetterDiagnostic for AI imaging, GetHelpDesk for the AI receptionist and Dragon Voice for perio dictation. Both pages are theirs. Ask which of the two describes the quote you are given.

Their pages also disagree on what has shipped. The home page describes an AI Dental Scribe and an AI Dental EOB as current tools; the pricing page lists "AI Scribe", "AI EOB & ERA Auto Post", "AI Eligibility Coverage Update" and "AI Voice Confirmation" under "Upcoming". The mobile app is "Available this September" on the home page, with no year stated.

The annual option is published as an option and not as a number: "Choose an annual subscription for added discount."

![Dentalpin patient record with the odontogram, clinical alerts, the active plan and the next appointment](/screenshots/dental-chart.png)

*A patient record in Dentalpin, with the odontogram and the clinical alerts on the same screen.*

## What Dentalpin is

Open source dental practice management software. You download the code, install it where you like (your own server, or whichever cloud provider you choose) and pay no licence per surgery, per dentist or per patient.

Odontogram, periodontal charting, schedule, clinical records, treatment plans, quotes with digital signature, invoicing, payments, recalls and reports, on PostgreSQL, in any modern browser, on Windows, macOS or Linux. Plus an AI assistant that runs tasks against your real data while respecting each user's permissions.

It is much younger, and the gap in this particular comparison is United States shaped. It stores x-rays in the patient record but bridges to no imaging device, its patient portal is listed on our own site as coming soon rather than shipped, it does no eligibility checking, no claim submission, no ERA posting and no e-prescribing, and it has nothing for FQHC reporting. Its compliance modules are Spanish Verifactu and Indian GST, which tells you where it grew up.

## Side by side

Only verifiable rows. Where nothing is published, the row says so.

| | iDentalSoft | Dentalpin |
|---|---|---|
| Model | Commercial subscription | Open source (BSL 1.1, Apache 2.0 after 4 years) |
| Published starting price | ✓ "as low as $395/month" | ✓ $0 self-hosted |
| Billing unit | ✓ Per practice, users and locations included | ✓ Flat, no per-seat fee |
| Price of the full product | ✗ Add-ons "contact us", no figures | ✓ Everything in the repository |
| Insurance claims and eligibility | ✓ Unlimited eClaims, ERAs, verification | ✗ Nothing |
| E-prescribing | ✓ eRx with EPCS, as an add-on | ✗ Nothing |
| Imaging | ✓ Native, 16 named bridges, TWAIN | ✗ Stores images, bridges to nothing |
| Patient portal | ✓ In the Starter plan | ✗ Listed as coming soon |
| Years in market | ✓ Founded 2010 | ✗ Since 2026 |
| Install base | ✓ "2,300+ Dentists nationwide" | ✗ Very few so far |
| Training | ✓ Free, unlimited, one to one | ~ Documentation and GitHub Discussions |
| Published support hours | ✓ 8:00 to 20:00 EST, phone and email | ✗ GitHub Discussions |
| Staffed migration | ✓ Their team, one to two weeks | ~ Self-service import tool |
| Availability commitment | ✗ Terms disclaim any warranty | ✗ Yours to configure |
| Where records live | ✗ No region or provider published | ✓ Any machine you choose |
| Getting data out | ~ Export and backup on request | ✓ Your PostgreSQL, always |
| Minimum contract | ✗ Early termination fee, term on the order form | ✓ None |
| Markets served | ✗ US practices | ✓ Anywhere you install it |
| Source code | ✗ Not available | ✓ Published on GitHub |
| Documented API | ~ "Open API support", no documentation found | ✓ Full REST, OpenAPI |

Four of those rows deserve the detail behind them.

## What the Terms of Service add

The customer agreement is published in full, which most of this market does not do, and it is dated "14th of March 2016". The contracting entity is "iDentalSoft, Inc, a Delaware corporation", and Delaware law governs.

Three clauses change how the pricing page reads.

**Section 1 counts users.** "The Service is available as a paid service with a limited number of licensed users ("Users") as specified on your order form". The pricing FAQ on the same site says the opposite in plain language: "the number of providers or users does not affect the pricing. The cloud dental software charges a fee per practice, so you can provide access for all users and locations without additional costs or hidden fees." Both sentences are theirs. The order form is the document that resolves them, and it is not published, so ask for the user count written into yours.

**Section 13 prices leaving.** Cancelling before the end of the initial term requires written notice of thirty days plus "an early termination fee equal to the lesser of either (a) the remainder of all payments due under the contract or (b) the equivalent of all fees due over the three month period following your 30-day notice." How long that initial term runs is on the order form too.

**Section 7 disclaims the service level.** "iDS makes no warranties of any kind, regarding any specific availability or time of access to the Service", and on data loss, iDS "may use reasonable efforts to attempt to restore such data from the most recent working backup" but "gives no warranties with respect to recovering or restoring any Uploaded Data."

Section 2 adds that iDS "may, in its sole discretion, adjust the prices, functionality and number of Users for the Service from time to time", effective on a subsequent term.

> **Read section 6 next to the pricing FAQ, because they are answering the same question differently.** The FAQ says your data "remains secure and available for export if you end the subscription" and that "a full data backup can be provided upon request". Section 6 of the terms says you own the Uploaded Data, and also that iDS "has no obligation to retain Uploaded Data" and that it "may be irretrievably deleted" under their retention policies. An export you request is a process; a database on a machine you control is a file you already have.

To their credit, section 6 states ownership as clearly as anyone in this queue: "iDS does not own any data, information or material that You or others submit to the Service", and "all Uploaded Data will be deemed to be owned by You". Section 8 leaves you the intellectual property in it. There is no grant to train models on your clinical data anywhere in the agreement, which is not something every US vendor can say.

## What is not published

**Where the records physically live.** The home page describes "private cloud infrastructure with isolated data storage" and their FAQ describes database segregation and encryption. No data centre, hosting provider, region or country appears on any page consulted, and the privacy policy is scoped to the website, cookies and advertising rather than to patient data.

**Any uptime figure, certification or audit.** No availability percentage, SOC 2, HITRUST or ISO statement appears on the pages consulted, and section 7 declines to commit to one. The Business Associate Agreement is referenced by the terms as part of the contract but is not published.

**API documentation.** The integrations page is titled around "Open API Support" and the hero repeats it, but no developer documentation, endpoint list or schema appears anywhere on the site. Custom integrations go through an email to support, a feasibility review and a "proposed solution" that may involve custom development.

**How long migration takes, exactly.** Their FAQ and their home page both say roughly a week ("typically in a week", "migrated within a week"). Their data conversion page says "The process is completed within two weeks and delivered on your scheduled day, with no waiting list." Both are theirs, and no source system is named on the conversion page, so ask whether yours has been done before.

![The Dentalpin AI assistant with the workflows it can run against practice data](/screenshots/ai-copilot.png)

*The AI assistant, running tasks against real practice data under each user's permissions.*

## Choose iDentalSoft if

This is not a formality. For most US practices these are decisive.

- **You bill insurance.** Unlimited eClaims submission, eligibility verification, auto-posted e-EOBs, claim status tracking and medical insurance billing, in the base plan. We do none of it, and open source does not substitute for a claim you cannot submit.
- **You take x-rays.** Native imaging with sixteen named bridges and TWAIN, and AI radiograph commentary available as an add-on. We store images and integrate with no sensor or scanner.
- **You are an FQHC, RHC or community clinic.** Sliding fee management, UDS reporting, CMS-1450 (UB-04) claims and HL7 integration are a specific body of work, and we have none of it.
- **You are adding providers and locations.** A fee per practice with users and locations included is the right shape for a growing group, and it is published.
- **You want e-prescribing, including controlled substances.** eRx with EPCS, described by their FAQ as a native integration and listed on the pricing page as an add-on. We have nothing there.
- **Your team needs training more than once.** Free, unlimited, one-to-one sessions, recorded and written up, is a better answer than most paid onboarding packages in this market.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server, the updates and the backups.

## Choose Dentalpin if

- **You do not bill US insurance.** Cash practice, membership plans, private work, or a country iDentalSoft does not sell into: everything above stops applying, and the question becomes who holds the records and what the software costs over five years.
- **You want the whole price in advance.** Theirs starts at a published $395 and finishes at a number you get on a call, because the AI tools, e-prescribing, VoIP, the KPI dashboard, migration and equipment setup are all quoted rather than listed.
- **You will not sign an order form you cannot see first.** The term length, the licensed user count and the early termination exposure all live on a document that is not on their website. Ours has no contract to end.
- **You want to know where patient records are stored.** With Dentalpin that is your decision, made once, in writing, on a machine you can point at.
- **You want an availability commitment or your own backups.** Their terms give neither. Self-hosting gives you both and the responsibility that comes with them.
- **You want to read the code that stores clinical records.** It is on GitHub, and so is the licence.
- **You want a documented API today.** A full REST API with an OpenAPI schema, rather than an API described on a marketing page with no documentation behind it.

## How migration actually works

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not a single button:

1. **You upload the file** and the system validates it before touching anything.
2. **You see a preview** with row counts and sample rows. Nothing has been written yet.
3. **You review the proposals.** The system maps the source treatment catalogue against yours and you decide row by row: accept, relink, create new or ignore. Anything scoring above 0.9 can be accepted in bulk.
4. **You run it**, and the import executes exactly the decisions you made.

> **Step 3 is where almost every migration fails.** No two practices code their treatments the same way, and **a silently guessed equivalence produces wrongly issued invoices that nobody notices for months**.

iDentalSoft does this for you instead, and for most practices that is the better trade. Their process is: send the raw data, a dedicated migration specialist runs the conversion with the most recent and active records first, you keep working in the old system meanwhile, then go live with one-to-one training. What they convert is listed as patient records and family accounts, treatment plans and clinical notes, appointments and recalls, ledger and financial history, billing and insurance information, and x-rays, images and documents. What it costs is a line item on their pricing page with no figure next to it.

## The honest read

For a US practice that bills insurance, iDentalSoft is the stronger product today and this comparison is not going to pretend otherwise. Claims, eligibility, ERAs, e-prescribing, imaging bridges and FQHC reporting are years of unglamorous work, they are the daily reality of running a practice there, and we have not done any of it.

They have also done two things we ask every vendor in this queue to do. They put a starting price on a public page, in a billing unit that does not punish hiring. And they publish the whole customer agreement, which is how anyone can read section 7 and section 13 before signing rather than after.

Where we would push back is on everything the order form decides. A published $395 that excludes the AI the product is marketed on, next to a contract that counts licensed users and prices early exit, means the real number and the real commitment both arrive in a conversation rather than on a page. Dentalpin is the other bet: the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026.

- [iDentalSoft home page](https://www.identalsoft.com/): the "cloud-based, all-in-one" description, "2,300+ dentists", the feature lists for patient engagement, clinical workflows and practice finances, HL7 support, "private cloud infrastructure with isolated data storage", the AI tools block including "No third-party systems needed", the mobile app "Available this September", the FQHC/RHC/CHC block with UDS reporting and CMS-1450 (UB-04), and the four onboarding steps with migration "within a week".
- [Dental software pricing](https://www.identalsoft.com/dental-software-pricing): "as low as $395/month", the full Starter plan feature list, the "Tools you can include in your plan" block with "Contact us for package options and pricing", the Setup and Support Services list, the annual discount line, "Chosen by 2,300+ dental practices nationwide", and the FAQ answers on per-practice pricing, removing an add-on, data export on ending the subscription and the view-only plan.
- [FAQ](https://www.identalsoft.com/faq): the browser-based hardware answer, monthly updates, the sixteen named imaging bridges, pediatric periodontal charting, clinical alerts, eight operatories per provider, migration "typically in a week", multi-location data sharing, and the database segregation and encryption answer.
- [Integrations](https://www.identalsoft.com/integrations): "open API support", the named integrations (Global Payments Integrated, TapPayment, Worldpay, Birdeye, Tebra, Zocdoc, Zoom, BetterDiagnostic, GetHelpDesk, Dragon Voice), the imaging bridge answer, the eRx and EPCS answer, and the custom integration request process.
- [Terms of Service](https://www.identalsoft.com/terms-of-service), dated 14 March 2016: sections 1, 2, 6, 7, 8 and 13 as quoted above, the Delaware corporation and governing law, and the reference to the Order Form and Business Associate Agreement as part of the agreement.
- [Data conversion](https://www.identalsoft.com/dental-data-conversion): the list of what is converted, "completed within two weeks", the dedicated migration specialist and the most-recent-data-first approach.
- [Training](https://www.identalsoft.com/dental-software-training): "free & unlimited" training, one-to-one sessions over Google Meet with "no request limits", recordings with PDF guides, and the training sections with their roughly sixty minute length.
- [Support](https://www.identalsoft.com/support): "Our standard support hours are 8:00 AM to 8:00 PM EST", the stand-by team, and the published phone and email.
- [Who we are](https://www.identalsoft.com/who-we-are): "Since 2010", "Founded in 2010", the venture backing statement, and the "15+", "2,300+", "100+" and "10M+" figures.
- [Privacy policy](https://www.identalsoft.com/privacy-policy): website and marketing scope, cookies and advertising, the seven business day breach notification, and the absence of any patient data hosting location.
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating. No hosting provider, data centre, region or country for patient data appears on any identalsoft.com page consulted, so this comparison asserts nothing about where records sit. No uptime figure, service credit, SOC 2, HITRUST or ISO certification appears either, and the Business Associate Agreement referenced by the terms is not published. And no developer or API documentation could be found behind the "open API support" claim, so the table row says exactly that rather than asserting an API does not exist.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for iDentalSoft too.
