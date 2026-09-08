---
title: "Dentalpin vs Practice-Web: published prices, Windows only, and one clause worth reading"
description: "Practice-Web publishes every price, has sold since 1988 and installs on Windows. Its agreement also licenses client data for AI training. A sourced comparison."
pubDate: 2026-09-08
tags: [comparison, practice-web, fullsteam, dental-software]
---

Practice-Web is the vendor in this whole series that puts its prices on a page and then argues that everyone else should too. That earns it a comparison that cannot lean on the usual line about pricing opacity, so this one is about what the published price does not cover, what the software runs on, and one paragraph in their service agreement.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Practice-Web below comes from a page they publish on practice-web.com, including their own Master Services Agreement, linked and dated at the end. No aggregator blogs and no review sites. There is a section on when Practice-Web is the better choice, because for a US practice billing insurance it often is.

## In thirty seconds

**Practice-Web** is Windows practice management software sold since 1988 to what they state are "more than 1,700 highly successful clients around the country". It installs on a machine in your office, it publishes a full tariff, and it comes with the US insurance plumbing that a practice there actually needs: eClaims, eligibility checks, ePrescribing.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it has no imaging and nothing for US insurance.

The question that decides between them is whether you are billing American dental insurance. If you are, almost everything below tilts their way. If you are not, you are paying for a large amount of machinery you will never switch on.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Practice-Web is

Practice management software for dental offices, installed on Windows, sold since 1988. Their home page states "more than 1,700 highly successful clients around the country", and their Serving You page puts the same figure as "more than 1,700 dentists".

The product modules named on their own overview are Appointments, Dental and Perio Charts, Treatment Plans, Imaging and X-rays, Accounts and Billing, Management and Reports, Patient Texting and Reviews, Paperless and Online Forms, and Dentist and Patient Portals. Around that sits a second catalogue they call Smart Tools, which is priced separately and covered below.

The clinical side is not thin, and the periodontal chart in particular is worth conceding properly. Their page says you can record "calculation index and numbers, probing, mobility, furcation, clinical attachment loss, gingival margin, and mucogingival junction", that the chart auto-advances from tooth to tooth, and that it "calculates and color codes the percentage of teeth that have plaque, bleeding, calculus or suppuration" with all historical measurements viewable.

### What it runs on

Their system requirements page is unusually direct, and it is the fact that decides the deployment argument.

> **"Practice-Web runs on Windows 10, Windows 8/8.1, Windows Server 2016, and Windows Server 2012."** No macOS, no Linux and no browser client appear on any page consulted (8 September 2026). They suggest 16-32 GB of RAM on the server, 8-16 GB on workstations, and monitors of 19 inches or more at 1280x1024.

Their free trial instructions fill in the rest of the picture, and they are more informative than the marketing pages. The trial is a download you install "on a workstation or a server", it carries "an entry limit of 30 patients", and the installer sets up **MariaDB version 10.5** locally, with a database path their own instructions insist "must be a local path".

That means the clinical database is a MariaDB instance on hardware in your practice. It is the same basic architecture we ship, which is worth saying plainly rather than pretending the difference is bigger than it is.

### What Practice-Web costs

They publish everything, and they are pointed about it: "why is it that other vendors don't even disclose pricing on their websites? They instead ask you to call them for a 'customized solution and pricing.' That's code for they are expensive!"

The software itself, for a first office, is "$179/mo (reg. $199/mo) for 12 mo, then $129/mo (reg. $149/mo)", with "each dentist beyond 3 increases price by $20/mo". An additional office is $129/mo. That price covers the software, installation, web-based training, upgrades, the portals, Practice Analyzer, mobile forms, online registration and telephone or remote support.

Then there is the second tariff. The Smart Tools are each their own monthly line:

- **Auto and Two-Way Texting**, $90/mo, including 2,000 outgoing texts a month, 5 cents each after that.
- **Online Scheduling**, $119/mo, with online forms a further $49/mo.
- **Smart Caller ID**, $119/mo, with Insurance Verify a further $49/mo.
- **iPad and Android tablet patient forms**, $65/mo.
- **Online Patient Reviews**, $69/mo, and **Mass Email Marketing** at $35/mo for up to 5,000 patients, which also requires the texting subscription.
- **ePrescribing**, $59/mo per provider plus a $99 setup fee, and **Teledentistry**, $49/mo.

Most of those carry a waived $199 setup fee, a free 30-day trial and a month-to-month contract, which is a genuinely fair way to sell an add-on. Insurance claims are billed per transaction through DentalXChange: $0.39 a claim, $25/mo for attachments, $20/mo for real-time eligibility.

> **The published price is a floor, and the arithmetic is theirs, not ours.** A single-dentist first office that wants texting, online scheduling and tablet forms is at $179 + $90 + $119 + $65, so **$453 a month in year one**, before a claim is filed and before the $1,195 database conversion. Every figure in that sum is from their own pricing page (8 September 2026); only the addition is ours.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in any modern browser, on Windows, macOS or Linux. What it does not have is imaging, ePrescribe or anything for US insurance, and it is from 2026 with none of Practice-Web's thirty-eight years of accumulated edge cases.

![Dentalpin periodontal chart showing the six sites recorded per tooth](/screenshots/periodontogram.png)

*The periodontal chart, with the six sites recorded per tooth.*

## Side by side

Verifiable rows only. Practice-Web's figures are its own, from its own pages.

| | Practice-Web | Dentalpin |
|---|---|---|
| Model | Commercial subscription | ✓ Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Published price | ✓ Full tariff on the site, every line | ✓ $0, everything included |
| What the base price covers | ~ Software, install, training, support; the Smart Tools are extra | ✓ Every module |
| Deployment | Installed in the practice, MariaDB locally | Self-hosted: your server, your provider, or local |
| Operating system | ✗ Windows only, per their system requirements | ✓ Any modern browser, any OS |
| On the market | ✓ Since 1988 | ✗ Since 2026 |
| Practices using it | ✓ 1,700+ stated | ✗ Very few so far |
| Support hours published | ✓ Mon-Fri, 6am-5pm PT, by phone | ~ Community and GitHub, no phone line |
| US insurance | ✓ eClaims, attachments, eligibility, $0.39/claim | ✗ Not offered |
| ePrescribing | ✓ $59/mo per provider | ✗ Not offered |
| Imaging | ✓ Imaging and X-rays module | ✗ Not offered |
| Periodontal charting | ✓ Probing, mobility, furcation, CAL, gingival margin, MGJ | ✓ Six sites per tooth, full history |
| Data conversion | ✓ Staffed, from Dentrix, Eaglesoft, SoftDent and more | ~ Self-service import module |
| Conversion cost | ✗ $1,195 | ✓ Included |
| Free trial | ✓ Downloadable, capped at 30 patients | ✓ Full install, no cap |
| Auditable code | ✗ No | ✓ Published on GitHub |
| Contract length | ✗ 12 months, auto-renewing, 90 days' notice | ✓ None |
| Data after you leave | ✗ 30 days of access, then deletable | ✓ Your database, indefinitely |
| Licence over your data for AI training | ✗ Granted in the MSA, perpetual and irrevocable | ✓ None asked for |

There is a lot of green on their side of that table, and there should be. A thirty-eight year old product with a staffed conversion desk and a phone line has solved problems we have not met yet.

## The clause worth reading before you sign

This is the part of the comparison that is not about features, and it is the reason this post exists in the shape it does.

Practice-Web's Master Services Agreement, published on their own site, contains a section headed **AI POWERED FEATURES AND SERVICES**. Its data clause reads, verbatim:

> "Client hereby grants Company a non-exclusive, worldwide, transferable, sublicensable, royalty-free, perpetual and irrevocable license to use, process, analyze, to host, store, reproduce, modify, create derivative works from, transmit, and display Client Data for the following purposes: (a) training, improving, and enhancing AI models, algorithms, and systems ... (e) benchmarking and competitive analysis ... (h) providing Services to Client and other customers; and (i) any other purpose that supports Company's business operations and service delivery."

The same agreement defines Client Data as the data "input by Client, Authorized Users, and Client's end user customers who use the Services", and requires the practice to warrant that it "has obtained all rights, consents and permissions necessary to grant the foregoing license".

Two honest caveats, because this deserves them. The MSA scopes that grant to the Services as it defines them, and nothing on the pages consulted spells out separately how it applies to a database sitting on a server in your own office. And a separate clause, 1.5, covers Anonymized Data, which the Company owns outright.

We are not lawyers and this is not legal advice. What we can say is that the sentence is theirs, it is published, and the obligation it places on the practice, to have already obtained patient consent for it, is one a dentist should read before initialling.

Dentalpin asks for no such licence, for the straightforward reason that we never receive your data. It sits in your database, on your hardware, under your law.

![Dentalpin's AI assistant showing the workflows it can run against clinic data](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of the user who asks.*

## Who you would actually be buying from

The name on the footer and the name on the contract are not the same, and both are theirs.

Every page carries "Practice-Web Inc., P.O. Box 4678, El Dorado Hills, CA 95762" and "Practice-Web Inc. © 2026". The Master Services Agreement defines the Company as "Fullsteam Software Holdings LLC DBA Practice-Web (ThriveCloud), a subsidiary of Fullsteam Operations LLC", with legal notices going to Auburn, Alabama, and their responsible disclosure page routes security reports to an address at fullsteam.com.

The agreement's governing law follows from that: Alabama for US clients, with Ontario and France named for Canada and Europe. Fees are "nonrefundable and non-cancellable", and the agreement disclaims any promise that the service "will be uninterrupted or error-free".

## Choose Practice-Web if

This section is meant seriously, not as a formality.

- **You bill US dental insurance.** eClaims, attachments and real-time eligibility are in the product and priced per transaction. Nothing we do touches this, and no amount of open source fixes it.
- **You want the price before you talk to anyone, from an established vendor.** They publish the whole tariff, add-ons included, and then defend the practice of doing so. That is rare enough in this market that it deserves saying twice.
- **You want somebody to run the conversion off your old system.** They name what they convert from: "Dentrix, EagleSoft, Easy Dental, CS SoftDent, PracticeWorks, MOGO and more", plus Dentrix Ascend and Curve Dental. There is a free test conversion first.
- **You want a phone number with published hours.** Monday to Friday, 6am to 5pm Pacific, plus remote access support. We have GitHub and a community.
- **You need ePrescribing or imaging from the same vendor.** Both are sold; we offer neither.
- **The office is entirely Windows and always will be.** Their requirements assume it, and if that describes you, it costs you nothing.

## Choose Dentalpin if

- **Your practice is not all Windows.** Their system requirements name Windows only. Ours run in any modern browser on any operating system.
- **You will not grant a perpetual licence over your data.** Read the MSA clause above and decide. Ours asks for nothing, because we never hold the data.
- **The bill should not grow every time the practice does.** Opening another chair should not change what you pay, and neither should adding a fourth dentist or turning on text reminders. Ours is on a page: [what it costs](/en/pricing/).
- **You want to audit the code** that holds your clinical records, or have someone audit it for you. It is published.
- **You want to leave without a countdown.** Their agreement gives 30 days of access to your data after termination, and 90 days' notice is required to end the term at all. Your Dentalpin database stays yours because it never left.
- **You want to integrate freely on a system you own.** A documented REST API with OpenAPI, against a database you can reach directly.

## What migrating looks like

Practice-Web runs the conversion for you at $1,195. Ours is a tool you drive yourself, and the difference is real work that lands on somebody.

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

If you would rather hand the whole migration to a conversion desk that has done it since 1988, that is a genuine reason to pick them.

## The honest part

For a US practice billing insurance, Practice-Web is a serious answer and this comparison is not going to pretend otherwise. The claims plumbing, the ePrescribing, the staffed conversion and the published support line are exactly what that buyer needs, and we have none of it. The price transparency is real and most of their competitors should copy it.

The picture flips outside the United States, and it flips again if the AI clause matters to you. There, the insurance machinery is dead weight, the Windows requirement is a constraint, and the licence the agreement asks for over your patients' data is a question the open source answer simply never raises.

Dentalpin is the other bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All Practice-Web pages consulted on 8 September 2026:

- [Practice-Web home](https://www.practice-web.com/): "serving the dental community since 1988" and "more than 1,700 highly successful clients around the country".
- [Serving You](https://www.practice-web.com/why-us/serving-you): "more than 1,700 dentists around the country".
- [Practice management overview](https://www.practice-web.com/practice-management/overview): the module list, and "we don't hide our pricing and force you to call us to find out."
- [Pricing](https://www.practice-web.com/pricing): the whole tariff quoted above, including "$179/mo (reg. $199/mo) for 12 mo, then $129/mo (reg. $149/mo)", "each dentist beyond 3 increases price by $20/mo", Database Conversion "$1,195 (reg. $1,295)", Additional Training "$75/hour", every Smart Tool price, the DentalXChange rates ("$0.39/claim", "$25/mo for claim attachments", "$20/mo for real-time insurance eligibility check"), the support renewal rates and the "That's code for they are expensive!" line.
- [Security and system requirements](https://www.practice-web.com/practice-management/security-and-system-reqs): "Practice-Web runs on Windows 10, Windows 8/8.1, Windows Server 2016, and Windows Server 2012", the RAM and monitor recommendations, and the HIPAA guidance.
- [Dental and perio charts](https://www.practice-web.com/practice-management/dental-and-perio-charts): the recorded perio values, the auto-advance, the plaque and bleeding percentages, and the charting capabilities quoted above.
- [Database conversion](https://www.practice-web.com/practice-management/database-conversion): the list of systems converted from and the free test conversion.
- [Free trial](https://www.practice-web.com/resources/free-trial): "You may install the Free Trial on a workstation or a server. There is an entry limit of 30 patients", "The Installer will install Maria DB version 10.5", and "The Freedental Database path C:\mysql\data\ must be a local path."
- [Technical support](https://www.practice-web.com/resources/technical-support): "Monday-Friday, 6 am-5 pm PT at 800.845.9379, Option 2".
- [Master Services Agreement](https://www.practice-web.com/msa): the Company definition, the Client Data definition in clause 4.1, the licence in 4.2, the Anonymized Data clause 1.5, the return of data in 4.4 ("no more than thirty (30) days after the termination"), the twelve-month term and ninety-day notice, the early termination charge, the nonrefundable fees, the governing law, and section 16 in full.
- [Responsible disclosure](https://www.practice-web.com/responsible-disclosure): the fullsteam.com reporting address.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Neither Open Dental nor open source is mentioned on any Practice-Web page consulted, so nothing about a shared lineage is claimed here. Uptime commitments and the number of Smart Tools included in any bundle appear on none of the pages consulted either, and are stated as absent from those pages rather than absent from the product.

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Practice-Web too.
