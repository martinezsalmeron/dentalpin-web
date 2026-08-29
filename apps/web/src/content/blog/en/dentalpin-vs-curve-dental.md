---
title: "Dentalpin vs Curve Dental: cloud-only, or a server you own"
description: "Curve Dental states 80,000+ dental professionals and publishes no price. Dentalpin is open source and self-hosted. A sourced comparison of where each fits."
pubDate: 2026-08-12
updatedDate: 2026-08-29
tags: [comparison, curve-dental, dental-software]
---

Curve Dental has been selling cloud dental software longer than almost anyone, and says so plainly: "founded in Canada in 2004 as the first cloud-based dental practice management software on the market", now supporting "80,000+ dental professionals". There is no on-premises version, by design.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Curve Dental below comes from a page Curve publishes on curvedental.com, linked and dated at the end. No aggregator blogs and no review sites: they contradict each other and some are written by competitors. There is a whole section on when Curve is the better choice, because for a lot of practices it is.

## In thirty seconds

**Curve Dental** is a managed cloud product with the pieces a North American practice needs already in the box: imaging, perio charting, ePrescribe, insurance verification, payment processing and a voice-driven clinical AI suite. Nobody in your practice touches a server, and 24/7/365 support and a staffed data conversion come with it.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the data on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it has no imaging.

The question that decides between them is who you want holding the clinical records. With Curve that is Curve, on AWS, and they will do it well. With Dentalpin it is you, with everything that means in both directions.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Curve Dental is

Cloud-only practice management software, sold as **Curve Hero** for practices and **Curve SuperHero™** for groups and DSOs, with **Curve Go** as the mobile app and **Curve Capture** as a desktop component, both listed with their own supported versions in its hardware requirements.

The company describes itself as the "#1 Ranked Cloud-Based Dental Software" and an "All-in-One Dental Software Solution", with "80,000+ dental professionals, more than any other cloud-based platform". It runs offices in Calgary and in Provo, Utah, and states "Over 3,500 Canada-based dental professionals who use Curve Hero".

The module list on its own feature pages is wide:

- **Clinical.** Charting, perio charting with an "Advanced graphical view" in which the teeth "are drawn anatomically correct", imaging that lets you "Capture, store, and access your favorite smiles to and from the cloud in real-time", treatment planning with eSignature, and ePrescribe.
- **Front office.** Scheduling, Smart Forms for patient intake, files and letters, standard and custom reporting with the Curve Insights dashboard.
- **Money.** Patient billing, insurance billing, Curve Pay for "fully integrated payment processing, modern terminals, and next-day deposits", and Eligibility+, described as an "AI-powered, code-level insurance verification tool".
- **AI and engagement.** Curve Care+, a "Voice-driven clinical AI suite" that "handles notes, charting, and perio as care is happening", and Curve GRO® for patient engagement.

28 integration partners are listed across 12 categories, from insurance and claims to phone systems.

### Where it runs, and what it needs

There is no local server, and that is the point of the product. What it needs instead is a browser and a connection.

Curve's own hardware requirements page is specific: "Google Chrome: Always use the latest version, which is the only browser fully supported for Curve Hero", on Windows 11 or 10 or macOS 11 through 14, with "8GB or higher of RAM (16GB or higher recommended)". Connectivity: "The minimum recommended connectivity for the average practice (1-10 users) is 10 Mbps download and 5 Mbps upload", with satellite and wireless service not recommended.

Data sits with Amazon Web Services. Curve says it will "store and back up your information in a Data Center managed by premier vendor Amazon Web Services (AWS)", encrypted in transit and at rest, backed up through the day into a separate location and tested for reliability. It states ISO 9001 certification for itself and ISO 27001 for AWS as its host, PIPEDA support for Canadian practices, "Annual 3rd-party intrusion detection and security audits", and "Uptime Performance Excellence: 99.99%".

It also states, in as many words, "You retain ownership of your data, and we manage it with expertise".

### What Curve does not publish

> **Curve Dental does not publish prices on its site (consulted 12 August 2026).** The pricing page is titled "Affordable & Transparent Pricing" and carries no figure, no plan name and no per-user fee. It offers "Get Pricing", "GET A PERSONALIZED QUOTE" and "SCHEDULE A DEMO" instead.

The page does say startups get "special pricing on implementation and license fees", which confirms that both exist, and it groups the feature list under "All the Tools You Need — None of the Extra Costs".

We are not going to fill that gap with a number from a blog. If the price matters to you, and it should, ask them directly and get the implementation fee, the licence fee and the contract term in writing.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in a browser too, so no workstation needs to be a particular kind of machine. What it does not have is imaging, ePrescribe or US insurance verification, and it is from 2026 with none of Curve's two decades of accumulated edge cases.

![Dentalpin periodontal chart: bleeding, plaque, mean CAL and pockets over 5mm summarised on top of a per-site chart with anatomically drawn teeth](/screenshots/periodontogram.png)

*A periodontal chart in progress: probing depths, margin, plaque and bleeding per site, with bleeding, plaque, mean CAL and pockets of 5mm or more totalled at the top.*

## Side by side

Verifiable rows only. Curve's figures are its own, from its own pages.

| | Curve Dental | Dentalpin |
|---|---|---|
| Model | Commercial licence | ✓ Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Published price | ✗ Not published, request a quote | ✓ €0, everything included |
| Deployment | ✓ Cloud only, no local server | ~ Self-hosted: your server, your provider, or local |
| Where data lives | AWS, managed by Curve | ✓ Wherever you decide |
| Works without internet | ✗ Internet access required | ~ Local network install possible |
| Browser support | ~ Chrome only, fully supported | ✓ Any modern browser |
| Dental professionals using it | ✓ 80,000+ stated | ✗ Very few so far |
| On the market | ✓ Since 2004 | ✗ Since 2026 |
| Imaging | ✓ Built in, stored in the cloud | ✗ Not offered |
| ePrescribe | ✓ Included | ✗ Not offered |
| Insurance verification | ✓ Eligibility+, code-level | ✗ Not offered |
| Clinical AI | ✓ Curve Care+, voice-driven | ~ Assistant over your data, no ambient notes |
| Integration partners | ✓ 28 listed, 12 categories | ✗ Early ecosystem |
| Open API | ✗ Partner list, none published | ✓ Full REST, OpenAPI |
| Data conversion | ✓ Staffed, 7,500+ completed | ~ Self-service import module |
| Support | ✓ 24/7/365 stated | ~ Community and docs |
| Auditable code | ✗ No | ✓ Published on GitHub |

That table has more green on their side than on ours, and it should. Curve has been shipping cloud dental software since before the phrase meant anything.

## Choose Curve Dental if

This section is meant seriously, not as a formality.

- **You want imaging in the same product as the chart.** Curve captures, stores and serves x-rays from the cloud. Dentalpin has no imaging module, and pretending otherwise would help nobody.
- **You practise in the United States or Canada and insurance is the daily grind.** Eligibility+ verifying at code level, electronic claims and integrated payments are built for that market. Nothing we do touches this.
- **You want ambient clinical AI now.** Curve Care+ writes notes and charts as care happens. Our assistant works on your data on request, which is a different thing.
- **Nobody should have to think about a server.** No local hardware, AWS underneath, backups through the day, 99.99% uptime stated, and 24/7/365 support. Dentalpin is self-hosted: someone has to own the server and the backups.
- **You want somebody else to run the migration.** A project manager, a data migration specialist, a trainer, eight live webinar sessions and an account manager for the first 90 days is a real service, and switching software is where practices lose weeks.
- **You are coming off Dentrix, Eaglesoft, SoftDent or Open Dental.** Curve publishes conversion counts for each of those, in the thousands. They have seen your data before.

A product with 80,000+ professionals behind it has solved problems we do not yet know exist.

## Choose Dentalpin if

- **You want to know the price before you talk to anyone.** Ours is on a page: [what it costs](/en/pricing/). Nothing per chair, per dentist or per patient.
- **You want the records on hardware you control.** With Curve the data is on AWS under Curve's management, which is a good answer for most practices and the wrong one for some. Here you pick the server and the jurisdiction.
- **Losing the connection cannot mean losing the day.** Curve requires internet access to work. A local install keeps running on your own network.
- **You want to audit the code** that holds your clinical records, or have someone audit it for you. It is published.
- **You want to integrate and automate freely.** A documented REST API with OpenAPI on a system you control, rather than a fixed list of partners.
- **The bill should not grow every time the practice does.** Opening another chair should not change what you pay.

![Dentalpin's AI assistant showing the workflows it can run against clinic data](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of the user who asks.*

## What migrating looks like

Curve describes a staffed conversion in four steps, ending in a final cutover that "typically takes just three business days". Ours is a tool you drive yourself.

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

If you want somebody else to own the migration end to end, that is a genuine reason to pick them.

## The honest part

Curve Dental is a strong product for a North American practice that wants the whole stack managed: imaging, prescriptions, insurance and payments in one place, on infrastructure they do not have to think about, with people to call at three in the morning. For a lot of readers that is the right answer, and this comparison is not going to pretend otherwise.

Where we would push back is the page headed "Affordable & Transparent Pricing" that contains no price. A practice should be able to compare two products without booking a call, and today it cannot do that with Curve. Ours is published, the code is published, and you can check both before speaking to anyone.

Dentalpin is the other bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All Curve Dental pages consulted on 12 August 2026, and re-checked on 29 August 2026, when the partner and category counts below were corrected:

- [Curve Dental home](https://www.curvedental.com/): "#1 Ranked Cloud-Based Dental Software", "All-in-One Dental Software Solution", and the module line-up.
- [Why Curve Rocks](https://www.curvedental.com/why-curve-rocks): "Curve now supports 80,000+ dental professionals, more than any other cloud-based platform", "We've been writing cloud software for over a decade", "Uptime Performance Excellence: 99.99%", the annual third-party security audits.
- [Curve Dental Canada](https://www.curvedental.com/canada): "founded in Canada in 2004 as the first cloud-based dental practice management software on the market", the Calgary and Provo offices, "Over 3,500 Canada-based dental professionals who use Curve Hero", and PIPEDA.
- [Pricing](https://www.curvedental.com/pricing): "Affordable & Transparent Pricing", "Get Pricing", "GET A PERSONALIZED QUOTE", the startup implementation and licence fee note, and no figure anywhere on the page.
- [Feature overview](https://www.curvedental.com/feature-overview): charting, perio charting, imaging, treatment planning, ePrescribe, Smart Forms, reporting, Eligibility+, Curve Pay, Curve Care+ and Curve GRO®, in Curve's own wording.
- [Hardware requirements](https://www.curvedental.com/system-requirements): Chrome as the only fully supported browser, the Windows and macOS versions, the 10 Mbps / 5 Mbps recommendation, and the RAM guidance.
- [Data conversion](https://www.curvedental.com/data-conversion): "7,500+ conversions", the per-product counts for Dentrix, Eaglesoft, SoftDent, Open Dental and others, and "The final data conversion typically takes just three business days!".
- [Implementation](https://www.curvedental.com/implementation): the four steps, the dedicated project manager, data migration specialist, trainer and account manager, "8 live, interactive webinar sessions", and 24/7/365 support.
- [Data management](https://www.curvedental.com/data-management): AWS hosting, encryption in transit and at rest, intraday backups stored separately, ISO 9001 for Curve and ISO 27001 for AWS, and "You retain ownership of your data, and we manage it with expertise".
- [Integration partners](https://www.curvedental.com/partner-list): the 28 partners and 12 categories, with no developer API programme published.
- [FAQ](https://www.curvedental.com/faq): Curve Hero and Curve SuperHero™, and "Any PC or Mac using Curve Hero will need access to the Internet either directly or through a local area network."
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Curve Dental too.
