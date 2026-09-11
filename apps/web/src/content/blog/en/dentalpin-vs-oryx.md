---
title: "Dentalpin vs Oryx: a published tariff, priced per dentist"
description: "Oryx publishes its whole tariff: $650 to $1,399 a month for two providers, plus $100 for each one after that. Sourced from their own pages, September 2026."
pubDate: 2026-09-11
tags: [comparison, oryx, usa, canada, dental-software]
---

Oryx does the thing almost nobody in this industry does: it puts the whole tariff on a page, with the contract length, the per-provider fee and the answer to what a "provider" even means. That alone makes this an easier comparison to write honestly than most, and it moves the argument off price transparency and onto what the money buys.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Oryx below comes from a page they publish themselves at oryxdental.com, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when they are the better choice, and for a US or Canadian practice billing insurance it is not a close call.

## In thirty seconds

**Oryx** is a cloud dental platform founded in 2016 by a practising dentist, hosted on Google Cloud, sold in the United States and Canada. It ships native imaging with FDA-cleared AI from Pearl and Overjet, AI voice perio charting, insurance eligibility and claims, a patient portal, and a migration team that lists more than fifty systems it converts from. It publishes its prices, its contract term and a security page most vendors would not survive writing.

**Dentalpin** is open source and free to self-host: no fee per chair, per dentist or per patient, the code published, the records on hardware you pick. In exchange it is from 2026, somebody has to own the server, it bridges to no imaging system, and it does no insurance work at all.

The question that decides between them is whether you bill insurance in North America. If you do, Oryx submits claims and checks eligibility and we do neither, and the rest of this page is for the cash and membership-plan practices.

![Dentalpin home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Oryx is

A cloud-based practice management platform, described on its own home page as "a cloud-based, AI-powered platform built by dentists, for dentistry". The About page dates the company to 2016 and names Dr. Rania Saleh, a dentist and multi-practice owner, as founder and CEO, and says the company is "entirely self-funded".

The clinical pitch is guided, standardised exams rather than a blank chart. Their exam and charting workflows are "endorsed by Dr. John C. Kois", and Oryx describes itself as "the first and only dental practice management platform to partner with the Academy of General Dentistry".

Three things are built in that most of this market bolts on:

- **Native imaging with diagnostic AI.** Pearl's Second Opinion or Overjet's Dental AI Assist, described as FDA-cleared and embedded directly in Oryx imaging rather than reached through a bridge.
- **AI in the clinical workflow.** Voice perio charting, exam charting, and a transcribe-and-summarise scribe that writes progress notes. These sit in the top plan.
- **Revenue cycle work.** Instant eligibility, electronic claims, auto ERA posting, automated collection sequences, and RevGen, which is "a dedicated Oryx RCM team handles billing, claims submission, and collections".

Around that is the ordinary front-desk product done properly: patient portal, online scheduling, two-way texting, automated reminders, membership plans, lab case tracking, a referral portal and configurable dashboards.

Support is a published phone number, +1 (206) 900-8082, staffed "Monday through Friday, 8am to 7pm CT". Onboarding is staffed too, with a named specialist, a test conversion and a dedicated success partner after go-live.

### Where the data lives, and how you get it out

Their security page is the most specific one we have read in any market, and it deserves to be quoted rather than summarised.

Data sits on Google Cloud, "United States practices are hosted in Google Cloud's U.S. regions" and "Canadian practices are hosted in the northamerica-northeast1 (Montréal) region", with Canadian backups kept in Canada. Encryption is AES-256 at rest and TLS in transit, with two-factor authentication and role-based permissions on by default.

Backups run daily and are held ninety days across multiple Google Cloud locations, inside vaults they say "block early modification or deletion, even by a compromised administrative account", with point-in-time recovery over the past seven days.

On ownership they write that patient records, notes, imaging and billing "all of it belongs to your practice, not Oryx", that nothing is sold or mined for advertising, and that "if you leave, Oryx does not delete your data until you have had sufficient opportunity to export it". Exports can be requested at any time, with structured data "delivered in CSV format" and documents, images, radiographs and DICOM files in their original formats.

> **Read that export answer twice, because it is better than the industry norm and still not the same thing as holding your own database.** A CSV export on request is a process you ask for. A PostgreSQL volume on a machine you rent is a file you already have. Which of those you need depends on how much you trust the process, and Oryx has written theirs down, which most have not.

They also state that identifiable patient information is never used to train AI or machine learning models, and that the enterprise Google Cloud agreements behind their AI features contractually prohibit it.

## What it costs

Oryx publishes a full tariff in both currencies, so this section is arithmetic rather than guesswork. All figures below are from `/pricing/` on 11 September 2026.

| Plan | US | Canada | Included |
|---|---|---|---|
| Oryx Pro | $650/mo | $699 CAD/mo | Up to 2 providers, +$100/mo each |
| Oryx Automate | $899/mo | $899 CAD/mo | Up to 2 providers, +$100/mo each |
| Oryx AI | $1,399/mo | $1,599 CAD/mo | Up to 2 providers, +$200/mo each |
| Startup offer | $0/mo Pro and Automate, $400/mo AI | $0 CAD, $400 CAD | $1 setup fee |

Four conditions in their own FAQ decide what those numbers mean in practice:

1. **A provider is a dentist.** "A provider means a doctor. Hygienists are not counted as providers." A three-dentist practice on Pro is $750 a month, and the hygiene team is free.
2. **The contract is twelve months, then rolling.** "Oryx contracts run 12 months initially and then move to month to month", and plan changes "can be made once you are past the initial 12-month term".
3. **The startup offer is only for practices with no patients.** It is "available only to new offices that do not have any patients yet", and the regular price begins "at 200 patients or 12 months after signup (whichever comes first)".
4. **Switching in costs more than $1.** For an office converting from another vendor "there is a setup fee, a data-conversion fee, and an image-conversion fee", and none of those three figures is published.

Pricing is per location, so different sites in a group can sit on different plans. The Canadian plans are not a currency conversion: their own FAQ says the features differ, and "certain insurance automations within Automate are not available in Canada".

![Dentalpin periodontal chart with six sites recorded per tooth](/screenshots/periodontogram.png)

*Periodontal charting in Dentalpin, with the six sites per tooth, entered by hand.*

## What Dentalpin is

Open source dental practice management software. You download the code, install it where you like (your server, whichever cloud provider you choose) and pay no licence per surgery, per dentist or per patient.

Odontogram, periodontal charting, schedule, clinical records, treatment plans, quotes with digital signature, invoicing, payments, recalls and reports, on PostgreSQL, in any modern browser, on Windows, macOS or Linux. Plus an AI assistant that runs tasks against your real data while respecting each user's permissions.

It is much younger, and the gap in this particular comparison is North America shaped. It stores x-rays in the patient record but bridges to no imaging device and ships no diagnostic AI, its patient portal is listed on our own site as coming soon rather than shipped, and it does no eligibility checking, no claim submission and no ERA posting. Its compliance modules are Spanish Verifactu and Indian GST, which tells you where it grew up.

## Side by side

Only verifiable rows. Where nothing is published, the row says so.

| | Oryx | Dentalpin |
|---|---|---|
| Model | Commercial subscription | Open source (BSL 1.1, Apache 2.0 after 4 years) |
| Insurance eligibility and claims | ✓ Built in, plus managed RCM | ✗ Nothing |
| Native imaging and diagnostic AI | ✓ Pearl or Overjet, FDA-cleared | ✗ Stores images, bridges to nothing |
| Patient portal | ✓ In every plan | ✗ Listed as coming soon |
| AI clinical scribe and voice perio | ✓ In the AI plan | ~ Assistant runs tasks, does not chart |
| Years in market | ✓ Founded 2016 | ✗ Since 2026 |
| Install base | ✓ "15,000+ Clinicians" | ✗ Very few so far |
| Published support line and hours | ✓ Phone, Mon to Fri, 8am to 7pm CT | ✗ GitHub Discussions |
| Staffed migration | ✓ 50+ source systems, test conversion | ~ Self-service import tool |
| Published backup and recovery policy | ✓ 90 days, 7-day point-in-time | ✗ Yours to configure |
| Published price | ✓ Full tariff, both currencies | ✓ $0 self-hosted |
| Price as the practice grows | ✗ Per dentist, per location | ✓ Flat, no per-seat fee |
| Minimum contract | ✗ 12 months, then rolling | ✓ None |
| Markets served | ✗ United States and Canada | ✓ Anywhere you install it |
| Where records live | ~ Google Cloud, region by country | ✓ Any machine you choose |
| Getting data out | ~ CSV export on request | ✓ Your PostgreSQL, always |
| Source code | ✗ Not available | ✓ Published on GitHub |
| Documented API | ~ Named for Enterprise only | ✓ Full REST, OpenAPI |

Several of those rows deserve the detail behind them.

## Two numbers on their own site disagree

Their home page says "~2,000 Practices Across 5 Continents". Their About page, consulted the same day, says "Over 2,500 practices across 5 continents". Both pages agree on "15,000+" clinicians.

We are not going to make much of a five-hundred-practice gap in a marketing stat, and neither should you. It is worth flagging only because the clinician figure gets quoted everywhere and the practice count is the one that tells you the average customer size.

The five-continents claim sits oddly beside the rest of the site, which is US and Canadian throughout: two currencies on the tariff, HIPAA and PIPEDA on the security page, CDA codes and provincial billing on the Canadian page, and four features marked "US offices only". If you are outside North America, ask which of those continents means supported and which means somebody signed up.

## What Oryx does not publish

**The conversion fees.** The three fees charged to an office switching in are named and not quantified, and for most practices reading this they are the real cost of the first year. Ask for all three in writing before the demo ends.

**API documentation.** API access appears once on the site, in the Oryx Enterprise block for DSOs and multi-location groups, alongside cross-site patient management and enterprise analytics. No developer documentation, endpoint list or integration guide appears on any page consulted, so a solo practice on Pro should assume the answer is no and ask.

**An SLA behind the uptime figure.** The home page claims 99.9% uptime. No service credit, no measurement window and no customer agreement appears on the open web, so the figure is a statement of record rather than a commitment you can hold them to.

![The Dentalpin AI assistant with the workflows it can run against practice data](/screenshots/ai-copilot.png)

*The AI assistant, running tasks against real practice data under each user's permissions.*

## Choose Oryx if

This is not a formality. For most North American practices these are decisive.

- **You bill insurance.** Instant eligibility, electronic claims, claims auto attachment, auto ERA posting in the US and CDAnet processing in Canada. We do none of it, and no amount of open source substitutes for a claim you cannot submit.
- **You want billing off your front desk entirely.** RevGen puts an Oryx RCM team inside your account doing submission, appeals and collections. That is a service, not a feature, and we do not sell one.
- **You take x-rays.** Native imaging with Pearl or Overjet reading them. We store images and integrate with no sensor, scanner or imaging suite.
- **You want the charting to be the same whoever is in the operatory.** Guided, evidence-based exams built on the Kois protocols, with notes auto-generated after each exam. Ours is a conventional chart that records what you enter.
- **You want a patient portal today.** Forms, statements, payments and clinical reports, in every plan. Ours is still on the coming soon list.
- **You are opening a practice from scratch.** Pro and Automate at $0 a month until 200 patients or twelve months is the most generous startup offer in this queue, and the $1 setup fee is not a typo.
- **You have no technical staff and do not want any.** Dentalpin is self-hosted. Somebody has to own the server, the updates and the backups, and Oryx has written down exactly how it does all three.

## Choose Dentalpin if

- **You do not bill insurance.** Cash practice, membership plans, private work: everything above stops applying, and the question becomes who holds the records and what the software costs as you hire.
- **You are adding dentists.** Oryx is $100 a month per provider beyond two, $200 on the AI plan, per location. Ours does not count dentists, chairs, locations or patients.
- **You will not sign a twelve-month term.** Theirs is twelve months then rolling, with plan changes locked until the term ends. Ours has no contract to end.
- **You practise outside the United States and Canada.** The tariff, the compliance page and four of the features say North America. Dentalpin runs wherever you install it.
- **You want to read the code that stores clinical records.** It is on GitHub, and so is the licence.
- **You want to integrate and automate as a small practice.** A documented REST API with an OpenAPI schema, rather than API access named as an enterprise tier feature.
- **Getting your data out should not be a request.** It is your PostgreSQL database, on your machine, always.

## How migration actually works

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not a single button:

1. **You upload the file** and the system validates it before touching anything.
2. **You see a preview** with row counts and sample rows. Nothing has been written yet.
3. **You review the proposals.** The system maps the source treatment catalogue against yours and you decide row by row: accept, relink, create new or ignore. Anything scoring above 0.9 can be accepted in bulk.
4. **You run it**, and the import executes exactly the decisions you made.

> **Step 3 is where almost every migration fails.** No two practices code their treatments the same way, and **a silently guessed equivalence produces wrongly issued invoices that nobody notices for months**.

Oryx does this for you instead, and for most practices that is the better trade. They publish a list of more than fifty source systems including Dentrix G4, Dentrix Ascend, Dentrix Enterprise, Eaglesoft, Open Dental, Curve, CareStack, Denticon, Tab32, Archy, ClearDent, AbelDent, Sensei and Softdent, say the full onboarding "typically runs two to three months" with migration taking a few weeks inside it, and commit to no downtime at the switch. What they do not publish is what the conversion costs.

## The honest read

For a practice billing insurance in the US or Canada, Oryx is the stronger product today and this comparison is not going to pretend otherwise. Eligibility, claims, ERA posting and an RCM team are years of unglamorous work, they are the daily reality of running a practice there, and we have not done any of it.

They have also done the two things we ask every vendor in this queue to do and almost none of them does: published the whole tariff with its conditions, and written a security page specific enough to be held to. Their own comparison page against Open Dental frames the choice as "practices prioritizing simplicity and consistency" against "tech-savvy practices seeking control", and that is a fair description of the trade, stated by them.

Where we would push back is the pricing shape rather than the amount. Per dentist, per location, with a twelve-month floor and unpublished conversion fees, means the cost of the software grows with the practice and the cost of leaving is discovered on a call. Dentalpin is the other bet: the software holding a practice's clinical records should be readable and ownable by that practice, price included. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 11 September 2026.

- [Oryx home page](https://www.oryxdental.com/): "cloud-based, AI-powered platform built by dentists, for dentistry", "Trusted by 15,000+ Clinicians and Growing", "~2,000 Practices Across 5 Continents", "7M Patients Served Worldwide", "$5B+ in Payments Processed", the 99.9% uptime claim, and the Pearl and Overjet imaging AI.
- [Pricing](https://www.oryxdental.com/pricing/): all US and CAD plan prices, the per-provider fees, the startup offer and its $1 setup fee and 200-patient limit, the full included-features tables, and the FAQ answers on the 12-month contract, what counts as a provider, plan changes, the setup, data-conversion and image-conversion fees, the Canadian feature differences, per-location pricing, the two-to-three-month onboarding and the list of source systems migrated from.
- [Security and privacy](https://www.oryxdental.com/security-privacy/): AES-256 and TLS, daily backups held 90 days with seven-day point-in-time recovery, the data ownership and export answers including CSV and DICOM, the US and Montréal hosting regions, the PHIPA Section 17 statement for Ontario, and the commitment that patient data never trains AI models.
- [About Oryx](https://www.oryxdental.com/about/): "FOUNDED IN 2016", Dr. Rania Saleh as founder and CEO, "Over 2,500 practices across 5 continents", the Kois Center endorsement, the Academy of General Dentistry partnership and the self-funded statement.
- [Oryx vs Open Dental](https://www.oryxdental.com/oryx-vs-open-dental/), authored by Oryx and last updated March 2026: "Integrations & APIs: Selective, stability-first", the ideal-customer-fit rows quoted above, and "cloud-native from day one. There are no servers to maintain, no local installations".
- [Dentalpin licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source code](https://github.com/martinezsalmeron/dentalpin).

Three checks worth stating: no developer or API documentation appears on any oryxdental.com page consulted, and API access is named only inside the Oryx Enterprise block for DSOs; no customer agreement, SLA or service-credit terms are published, so this comparison asserts nothing about notice periods or exit terms beyond the contract length their FAQ gives; and the setup, data-conversion and image-conversion fees charged to a switching practice are named on their pricing FAQ without figures, so no number for them appears above.

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Oryx too.
