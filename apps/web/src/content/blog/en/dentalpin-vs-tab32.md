---
title: "Dentalpin vs tab32: a published tariff, a Year 2 that doubles, and where the open API lives"
description: "tab32 publishes a full tariff, per-use AI rates and its own cost calculator. Its open API sits in the enterprise tier. A sourced comparison, September 2026."
pubDate: 2026-09-09
tags: [comparison, tab32, cloud, dental-software]
---

tab32 publishes more of its commercial terms than almost any vendor in this series: three plans, per-use AI rates, an add-on list with the unfinished items labelled, and a calculator that prices a competitor against itself. That makes for an unusually specific comparison, because almost nothing here has to be inferred.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about tab32 below comes from a page they publish on tab32.com, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when tab32 is the better choice, because for a US practice billing insurance it usually is.

## In thirty seconds

**tab32** is cloud dental practice management software, founded in Sacramento in 2012, stating "1,000+ dental practices" across "40+ states". It is the whole American stack in one subscription: scheduling, charting, imaging, claims, eligibility, payments, ortho, AI documentation. Alpine starts at $125 a month.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it has no imaging and nothing for US insurance.

The question that decides between them is whether your practice bills American dental insurance. If it does, tab32 has a decade of machinery you would otherwise have to assemble. If it does not, most of what you are paying for never gets switched on.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What tab32 is

A cloud-native platform, founded in 2012 by CEO Kiltesh Patel, headquartered in Sacramento, California and running on Google Cloud. Their About page describes "tab32's team of 50+ across engineering, data science, product, and customer success" and two products on one codebase: Alpine for private practices, Summit for multi-location groups and DSOs.

The numbers they publish about themselves are specific, and unusually for this market they include an uptime figure: "The platform delivers 99.95% uptime since 2017, with full HIPAA compliance and SOC 2 certification." The same page states 40+ US states, 11M+ patient records and 500M+ treatment records. Their home page states "Trusted by 1,000+ dental practices across California, Texas, Florida, New York, and 40+ states."

The feature list is broad and genuinely all-in-one: scheduling with an ASAP list and waitlist, clinical charting with odontogram and perio, digital imaging (X-rays, pano, photos), treatment plans, insurance management, claims with e-attachments, Stripe payments and reports. On top sits a pay-per-use AI layer they call PiAI: voice scribes, voice perio charting, eligibility verification, ERA and EOB auto-posting, appeals handling.

They also claim a set of firsts on their own About page, including "the first open data warehouse in dentistry" on BigQuery. That claim matters later, so hold on to it.

### What tab32 costs

This is the part most comparisons in this series cannot write, because most vendors publish nothing. tab32 publishes almost everything.

- **Alpine Start-Up, $125/mo**, described as "Year 1 pricing · up to 3 providers", with the plan card stating "Year 1: $125/mo · Year 2+: $225/mo".
- **Alpine Established Practice, $225/mo**, "up to 5 providers · same as Start-Up Year 2+", adding guided migration onboarding and SSO.
- **Summit, "Custom Pricing"**, "Based on your practice needs", for multi-location groups.
- **Usage, on top of any plan**: their home page FAQ gives "Claims processing is $0.20/claim, attachments $0.50/claim, and eligibility verification $1.25/check".
- **AutoRemind**, the texting and reminders add-on, is "Included Year 1" with "500 messages included per month", then "After Year 1: $69/mo. Overage: $0.08 per message beyond 500/mo."

A 14-day free trial runs with a card on file. There is "No setup fee for the Start-Up Package", and the Alpine page says "No servers. No contracts."

> **The published $125 is a Year 1 introductory rate, and their own calculator says so.** At 15 appointments a day with 70% insured, the calculator on their pricing page returns **$311/mo estimated in Year 1 and $461/mo in Year 2+**, against a $225 base. Both figures are theirs, not ours. It is a rare and creditable thing for a vendor to publish the number that is larger than its headline.

### Two places their own pages disagree

Neither of these is a gotcha. Both are things a buyer would want reconciled before signing, and both are published by tab32 on tab32.com.

**Online booking and ePrescribe.** The Integrations and Add-Ons block on the pricing page labels Online Booking, Patient Membership Plans, ePrescribe and AI Imaging as "Coming soon". The home page FAQ, meanwhile, describes the product as including "patient scheduling with online booking" and says tab32 "offers built-in imaging, patient communication, online scheduling, and real-time analytics without separate add-ons", and the platform page lists DrFirst eRx among its integrations.

**AI radiology.** The same "Coming soon" block lists AI Imaging, while the platform page says "PiAI detects conditions on dental X-rays" and the About page dates an "AI radiology & orthodontics module" with Pearl AI to 2023.

We are not picking a side on either. Ask them which pages are current.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in any modern browser, on Windows, macOS or Linux. What it does not have is imaging, ePrescribe, orthodontics or anything for US insurance, and it is from 2026 with none of tab32's fourteen years of accumulated edge cases.

![Dentalpin patient record showing the odontogram, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*A patient record: odontogram, clinical alerts, active plan and next appointment.*

## Side by side

Verifiable rows only. tab32's figures are its own, from its own pages, consulted 9 September 2026.

| | tab32 | Dentalpin |
|---|---|---|
| Model | Commercial SaaS | Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Published price | ✓ Full tariff, per-use rates included | ✓ $0, everything included |
| Base price in Year 2 | ✗ $225/mo, up from $125 | ✓ Unchanged |
| Provider cap on the published plans | ✗ 3 on Start-Up, 5 on Established | ✓ None |
| Deployment | 100% cloud on Google Cloud | Self-hosted: your server, your provider, or local |
| Where the records sit | Their cloud tenancy | ✓ Your database, your hardware |
| On the market | ✓ Since 2012 | ✗ Since 2026 |
| Practices using it | ✓ 1,000+ stated, 40+ states | ✗ Very few so far |
| Published uptime | ✓ 99.95% since 2017 | ✗ None published |
| Compliance certification | ✓ HIPAA and SOC 2 stated | ✗ None |
| Imaging | ✓ X-rays, pano and photos, built in | ✗ Not offered |
| US insurance | ✓ Claims $0.20, attachments $0.50, eligibility $1.25 | ✗ Not offered |
| Orthodontics | ✓ End-to-end module | ✗ Not offered |
| Open API | ~ Listed under Summit options only | ✓ In every install |
| Direct SQL access to your data | ~ Summit data warehouse only | ✓ It is your database |
| Long-term contract | ✓ "No contracts" stated for Alpine | ✓ None |
| Customer agreement published | ✗ Not on the pages consulted | ✓ Licence published on GitHub |
| Auditable code | ✗ No | ✓ Published on GitHub |
| Licence over content you submit | ✗ Granted in the Terms of Use | ✓ None asked for |
| Staffed data migration | ✓ From Dentrix, Eaglesoft, Open Dental and 20+ others | ~ Self-service import module |
| What the migration carries | ~ Last 2 years of appointments and their records | ✓ Whatever your export contains |
| Free trial | ✓ 14 days, card on file | ✓ Full install, no cap, no card |

There is a lot of green on their side, and there should be. Fourteen years, SOC 2, a published uptime figure and a claims pipeline are things we have not built and mostly do not intend to.

## Where the open API actually lives

This is the row worth expanding, because tab32 is the vendor that claims openness as a first and the detail is more specific than the claim.

On the pricing page, **Open API Access, Data Warehouse Access, an MCP Server and Custom Integrations are all listed under Summit**, in a block headed "Available Options". They appear nowhere in either Alpine plan. The Summit page marks the same two with a star as what distinguishes the tier: "★ Open Data Warehouse (BigQuery)" and "★ Open API & MCP Integration". The Alpine page names no API at all.

The data warehouse itself is described generously and it sounds good: BigQuery underneath, "direct SQL access to their own data", connectors to Tableau, Looker, Power BI and Domo. It is an enterprise-tier feature.

> **A solo practice on Alpine has no published route to its own data.** No API on the plan, no warehouse, and nothing on any page consulted about exporting your records if you leave. That may be answered in the User Agreement, which is the point of the next section.

For a self-hosted install the question does not arise in the same form. The API ships with the software and the database is one you can already connect to, because it is running on your machine.

![Dentalpin's AI assistant showing the workflows it can run against clinic data](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of the user who asks.*

## What is published, and what is not

The contract a tab32 customer signs is not on the website. The Terms of Use say so directly: "If you sign up for one of our Protected Services you may be asked to agree to a user agreement (your 'User Agreement')", and that where the two conflict, the User Agreement controls.

So the things that document does not let us check are absent from this comparison rather than absent from the product: contract length beyond the "No contracts" line on Alpine, any SLA behind the 99.95% figure, migration pricing ("Contact us for migration pricing details"), per-use AI rates beyond the three the FAQ names, what happens above 5 providers, and whether you can export your records on the way out.

What the published Terms of Use do contain is a content licence, and it is worth reading:

> "When you submit Content on our Services, you grant us and those we work with a worldwide, royalty-free right to store, host, reproduce, create derivative works of (such as translations, adaptations, reformatted versions and anonymized or de-identified versions), publish, publicly perform, display, use and distribute such Content as further described in our Privacy Policy and, if applicable, in your User Agreement."

Two caveats, in fairness. The same paragraph opens by confirming "You retain ownership of the intellectual property rights you hold in Content you submit", and the sentence immediately after it says "For some of our Services, your User Agreement or settings may narrow the scope of our use of Content you submit". A dental practice's User Agreement may well do exactly that. It is simply not a document we can read.

The Privacy Policy adds the retention side. On closing an account, "your account will be deactivated and your personal information and Records will be securely archived", and "We retain archived information for a period of five years (or longer if required by law)". Separately: "we store indefinitely non-personal information, including Connection Data and de-identified health information".

We are not lawyers and this is not legal advice. These are their published sentences, and a practice should read them against its own HIPAA obligations before signing.

Dentalpin asks for no such licence, for the straightforward reason that we never receive your data. It sits in your database, on your hardware, under your law.

## Choose tab32 if

This section is meant seriously, not as a formality.

- **You bill US dental insurance.** Claims with e-attachments, real-time eligibility, ERA and EOB auto-posting and an appeals workflow, all priced per use. We offer none of it, and no amount of open source fixes that.
- **You want imaging in the same system.** X-rays, panoramics and photos are in the platform rather than bolted alongside it. We have no imaging at all.
- **You want the price before you talk to anyone.** Three plans, per-use rates, an add-on list with the unfinished items marked "Coming soon", and a calculator that publishes a number bigger than the headline. Very few vendors in any market do this.
- **You want a published uptime figure and SOC 2.** "99.95% uptime since 2017" is a number almost nobody in this sector puts on a page. We publish neither that nor a certification.
- **You are opening a practice from scratch.** Their own answer is 2 to 3 days to go live for a de novo practice, with no server to buy. That is a real advantage over standing anything up yourself.
- **You do orthodontics**, or you are a group that needs cross-location scheduling and centralised claims. Both are products they sell and neither is something we do.

## Choose Dentalpin if

- **The bill should not grow every time the practice does.** Opening another chair should not change what you pay, and neither should adding a fourth provider or crossing into Year 2. Ours is on a page: [what it costs](/en/pricing/).
- **You want the API on the plan you are actually on.** Theirs is listed under Summit. Ours is a documented REST API with OpenAPI, in every install, including the free one.
- **You want direct access to your own database.** Not a warehouse tier, not a connector: the Postgres instance your records are in, on a machine you control.
- **You will not grant a licence over what you submit.** Read the Terms of Use clause above and decide. Ours asks for nothing, because we never hold the data.
- **You want to audit the code** that holds your clinical records, or have someone audit it for you. It is published.
- **You want to leave without asking anyone.** There is no export request, because there is no export: the database was always yours.
- **Your practice is outside the United States.** The insurance machinery that justifies most of tab32's price does nothing for you, and their published market is 40+ US states.

## What migrating looks like

tab32 runs the conversion for you and names what it converts from: "Dentrix, Eaglesoft, Open Dental, Curve Dental, Denticon, SoftDent, Practice-Web, and many others". Their published scope is "the last 2 years of appointments and all associated records", with imaging migration priced per imaging system instance, and 2 to 4 weeks to go live. Pricing for both is by enquiry.

Ours is a tool you drive yourself, and the difference is real work that lands on somebody:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

If you would rather hand the whole thing to a conversion team, that is a genuine reason to pick them. It is also worth asking what happens to the appointments older than two years.

## The honest part

For a US practice billing insurance, tab32 is a serious answer and this comparison is not going to pretend otherwise. The claims pipeline, the imaging, the ortho module, the SOC 2 certification and the published uptime figure are exactly what that buyer needs, and we have none of them. Their price transparency is genuine, and publishing a calculator that returns a number twice your headline rate is the opposite of what this market normally does.

The picture changes on two axes. Outside the United States, most of what you would be paying for is dead weight. And on any plan below Summit, the openness that tab32 claims as a first is a tier you have not bought.

Dentalpin is the other bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All tab32 pages consulted on 9 September 2026:

- [Pricing](https://tab32.com/pricing/): the three plans and their caps ("up to 3 providers", "up to 5 providers", "Custom Pricing"), "Year 1: $125/mo · Year 2+: $225/mo", "$0.20/claim · $0.50/claim attachments", the AutoRemind terms ("500 messages included per month", "After Year 1: $69/mo. Overage: $0.08 per message beyond 500/mo."), the Summit "Available Options" block naming Data Warehouse Access, MCP Server and Open API Access, the "Coming soon" labels on Online Booking, Patient Membership Plans, ePrescribe and AI Imaging, the calculator's $311 and $461 estimates, "No setup fee for the Start-Up Package", the migration scope and systems, and the 2-3 day and 2-4 week go-live answers.
- [Home](https://tab32.com/): "Trusted by 1,000+ dental practices across California, Texas, Florida, New York, and 40+ states", "Claims processing is $0.20/claim, attachments $0.50/claim, and eligibility verification $1.25/check", "Yes, tab32 is 100% cloud-based dental software", and the FAQ describing built-in online booking and imaging.
- [About tab32](https://tab32.com/about/): founded 2012 in Sacramento, CEO Kiltesh Patel, "Series B Funded", "a team of 50+", "The platform delivers 99.95% uptime since 2017, with full HIPAA compliance and SOC 2 certification", the 40+ states, 11M+ patient records and 500M+ treatment records figures, "the first open data warehouse in dentistry", and the 2023 AI radiology milestone.
- [Platform](https://tab32.com/platform/): the capability list, "PiAI detects conditions on dental X-rays", the Google Cloud architecture, the integrations list including DrFirst eRx, and the Alpine/Summit split.
- [Alpine](https://tab32.com/alpine/): "$125/mo (Year 1) for up to 3 providers", "No server hardware, no long-term contracts", and the absence of any API mention.
- [Summit](https://tab32.com/summit/): "★ Open Data Warehouse (BigQuery)", "★ Open API & MCP Integration", and the BigQuery description quoted above.
- [Terms of Use](https://tab32.com/terms-of-use/): the User Agreement clause in 1.2, and the content licence quoted above.
- [Privacy Policy](https://tab32.com/privacy-policy/): the five-year archive on deactivation and the indefinite retention of de-identified health information.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Contract length beyond the Alpine "No contracts" line, any SLA behind the 99.95% figure, migration and imaging-migration pricing, per-use AI rates beyond the three named above, what a sixth provider costs, and any customer data export on termination appear on none of the pages consulted, and are stated as absent from those pages rather than absent from the product.

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for tab32 too.
