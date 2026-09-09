---
title: "Dentalpin vs Archy: one published price, three unpriced suites, and a contract worth reading"
description: "Archy publishes $899/month per location with unlimited users and providers. The three AI suites are unpriced. A sourced comparison, September 2026."
pubDate: 2026-09-09
tags: [comparison, archy, cloud, dental-software]
---

Archy does two things almost nobody else in this series does: it puts a single flat price on its pricing page, and it publishes the contract you would actually sign. Both are worth more than they sound, and both are what make the rest of this comparison specific.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Archy below comes from a page they publish on archy.com, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when Archy is the better choice, because for a US practice billing insurance it usually is.

## In thirty seconds

**Archy** is cloud dental practice management software from Archy Dental, Inc., pitched as "Replace 5+ products with one cloud software" and stating "32,000+" active users. It runs on AWS, needs no server in the practice, and costs $899 a month per location with unlimited users and unlimited providers included.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it has no imaging and nothing for US insurance.

The question that decides between them is whether you want the practice's software problem to be somebody else's job. Archy's whole argument is that it should be, and $899 is what that costs. Ours is that the records should sit where you can reach them without asking.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Archy is

A cloud-native, all-in-one platform for US dental practices, built by Jon Rat (CEO) and Ben Kolin (CTO), described on their About page as former Uber colleagues who started the company after Rat's wife, a practising dentist, kept fighting her own software. The team is spread across "6 Countries" and "5 Time Zones", and their About page states "Our U.S.-based support team, made up of former dental office managers".

The numbers they publish about themselves are usage figures rather than a practice count: "4.3 MILLION+" patients, "2.5 MILLION+" claims created, "60 MILLION+" images processed, and "ACTIVE USERS: 32,000+". No count of practices or locations appears on any page consulted, so the 32,000 is people, not offices.

The platform itself is broad and genuinely all-in-one. Scheduling with an ASAP list, appointment finder, online forms and kiosk mode; clinical charting, treatment planning, integrated imaging and clinical notes; insurance claim management and billing; online, in-person and text-to-pay payments; a patient portal, two-way and bulk texting, email marketing; reporting, team chat and time tracking. There is a native mobile app for x-rays, texting and the schedule.

Their charting is more specific than most vendors bother to be. The dental charting page publishes "Chart perio measurements, like pocket depths, bleeding points, and gum recession. Compare up to three periodontal charts side by side, down to site-level detail like gingival margins", plus a clinical note template that "auto-populates based on the appointment's scheduled procedure, provider, and type".

### What Archy costs, and what it does not say

This is the part most comparisons in this series cannot write. Archy publishes a headline number and states plainly how it is structured.

- **The Archy Platform, $899/month**, described as "One platform price per location", with "No seat-based pricing. No provider-based pricing."
- **Included in that**: "Unlimited users", "Unlimited providers", "Unlimited claim submissions", "Unlimited eligibility checks", "Unlimited texting".
- **New practices, $400/month** "until 400 patients or 1 year per location", offered as "special first-year pricing designed to help you get started" and gated on "If you qualify".

Unlimited claim submissions and unlimited eligibility checks are worth pausing on. tab32, covered elsewhere in this series, publishes per-use rates for exactly those two things, so a flat rate here is a real commercial difference and not a marketing line.

> **The AI that Archy leads with is not in the $899.** The Clinical Suite (AI Scribe, AI Voice Perio, Clinical AI Imaging powered by Pearl), the Front Office Suite (Archy Revenue, Insurance Verification powered by Vyne, Statement Mailing Automation) and the Marketing Suite (Archy Websites) each carry a "Get Pricing" button and no figure. So does the add-on block holding E-Prescribe and card-fee pass-through. The platform price is published; the price of the product they advertise is not.

That is the gap a buyer has to close before signing, and it is not a small one. The home page's own headline savings claims, "80 hours" saved per month and "$8,000" in yearly cost savings, are largely claims about the suites.

Their AI page also labels its own roadmap honestly, which is rare. Archy Revenue, Archy Scribe and Archy Intelligence are marked "Live today"; Archy Verify and Archy Connect are marked "Coming soon".

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in any modern browser, on Windows, macOS or Linux. What it does not have is imaging, ePrescribe, a native mobile app or anything for US insurance, and it is from 2026 with none of Archy's accumulated production mileage.

![Dentalpin periodontal chart showing the six measurement sites per tooth](/screenshots/periodontogram.png)

*The periodontal chart, with the six sites recorded per tooth.*

## Side by side

Verifiable rows only. Archy's figures are its own, from its own pages, consulted 9 September 2026.

| | Archy | Dentalpin |
|---|---|---|
| Model | Commercial SaaS | Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Published platform price | ✓ $899/mo per location | ✓ $0, everything included |
| Priced per user or provider | ✓ No, unlimited both | ✓ No |
| Price of the AI suites | ✗ Not published, "Get Pricing" | ✓ Nothing to price |
| Claims and eligibility | ✓ Unlimited, in the base price | ✗ Not offered |
| Deployment | 100% cloud on AWS | Self-hosted: your server, your provider, or local |
| Where the records sit | Their AWS tenancy, no region published | ✓ Your database, your hardware |
| Customer contract published | ✓ Full MSA and BAA on the site | ✓ Licence published on GitHub |
| Who owns the data, in the contract | ✓ "Customer retains all right, title, and interest" | ✓ Never leaves your server |
| Licence over your data | ✓ Narrow: run the service, plus anonymised usage stats | ✓ None asked for |
| Export on termination | ✓ One-time, free, written into the MSA | ✓ It is your database |
| Access after termination | ✗ $200/month | ✓ Not applicable |
| Contract length | ✓ Rolls monthly, 30 days' notice | ✓ None |
| Cancel mid-term | ✗ Only for cause; fees non-refundable | ✓ Anytime |
| Imaging | ✓ Integrated, plus sensor support | ✗ Not offered |
| E-prescribing | ✓ Add-on, powered by DoseSpot | ✗ Not offered |
| AI radiology | ✓ Clinical Suite, powered by Pearl | ✗ Not offered |
| Native mobile app | ✓ Yes | ✗ Browser only |
| HIPAA business associate agreement | ✓ Published as Exhibit A to the MSA | ✗ Not offered |
| Published uptime or SLA | ✗ None on the pages consulted | ✗ None published |
| Own security certification | ✗ None on the pages consulted | ✗ None |
| People using it | ✓ 32,000+ active users stated | ✗ Very few so far |
| Documented API | ✗ None on the pages consulted | ✓ REST with OpenAPI, in every install |
| Direct SQL access to your data | ✗ Not offered | ✓ It is your database |
| Auditable code | ✗ No | ✓ Published on GitHub |
| Staffed data migration | ✓ Five-step conversion, run by them | ~ Self-service import module |

There is a lot of green on their side, and there should be. Imaging, a claims pipeline, e-prescribing, a native mobile app and a signed BAA are things we have not built and mostly do not intend to.

## The contract is the good part

Most vendors in this series do not publish the agreement a customer signs, so the interesting clauses are simply unavailable. Archy publishes its Master Service Agreement, last updated 18 March 2025, with the HIPAA business associate agreement attached as Exhibit A. Reading it is instructive, and mostly in their favour.

**On ownership**, the clause headed *Rights in Customer Data* is unambiguous: "As between the parties, Customer retains all right, title, and interest (including any intellectual property rights) in and to the Customer Data."

**On what they may do with it**, the grant is narrow. Archy gets a right to process Customer Data "solely" to provide the service, and to generate "separate anonymous data sets about product usage that do not identify Customer or its employees, patients or other personnel and that are stripped of all persistent identifiers".

> **That narrow grant is worth more than it looks.** Some vendors' agreements take a perpetual, sublicensable licence over practice data for AI training and competitive benchmarking. Archy's does not, and a practice comparing contracts across this market should notice which one it is reading.

**On leaving**, the clause headed *Customer Data Retrieval* gives "a one-time export of Customer Data in a structured, commonly used format at no additional cost, provided Customer submits a written request on or prior to the termination date". Their cloud page puts the same thing in plainer words: "retrieving your data is hassle-free and costs nothing, it's your data".

Two conditions attach to that, and both are theirs, published in the same clause. The request has to arrive **on or before** the termination date, not after. And "If Customer requires continued access to the Archy Service after termination, such access will be subject to a monthly data access fee of two hundred dollars ($200) per month".

**On commitment**, the term "will automatically renew for additional successive one-month periods unless either party gives written notice of non-renewal at least thirty (30) days before the end of the then-current Term". A month at a time with 30 days' notice is short by the standards of this market, where two-year auto-renewals with six months' notice exist. The counterweight is in the same clause: "Customer cannot cancel or terminate this Agreement except as expressly permitted by Section 6.4 (Termination for Cause)", and the *Fees* clause makes payments "non-refundable and non-creditable".

We are not lawyers and this is not legal advice. These are their published sentences, and a practice should read them against its own obligations before signing.

## Where the data sits, and what is not published

Their cloud page states the infrastructure: "hosted on Amazon Web Service's state-of-the-art data centers, where your data is securely stored across multiple locations", with "robust backup and recovery systems" that "continuously and automatically back up your data", on a "HIPAA-compliant Amazon Web Services based infrastructure".

The same page cites "ISO 9001 and SSAE 18 certifications, along with advanced intrusion detection and encryption". Read the sentence carefully: those are certifications of the AWS infrastructure described around them, not certifications held by Archy. Archy links a Trust Center at trust.archy.com, but that page returned no readable content this run, so no certification of their own could be sourced either way.

So the following appear on none of the pages consulted, and are stated here as absent from those pages rather than absent from the product: an uptime figure or SLA, a SOC 2 or ISO certification held by Archy itself, the AWS region or country the records sit in, any API or developer documentation, the price of any of the three suites or the add-ons, and any conversion fee or timeline.

That last one matters for a switching practice. Their conversion page publishes a five-step process, says Archy "will complete the final conversion while your practice is closed", and claims they "convert more of your data than anyone", but names no price, no duration and no list of what does and does not come across.

![Dentalpin's AI assistant showing the workflows it can run against clinic data](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of the user who asks.*

## Choose Archy if

This section is meant seriously, not as a formality.

- **You bill US dental insurance.** Claim submission and eligibility checks are unlimited and in the base price, not metered per use. We offer none of it, and no amount of open source fixes that.
- **You want imaging in the same system.** Integrated imaging with sensor support is in the platform rather than bolted alongside it. We have no imaging at all.
- **You want one number before you talk to anyone.** $899 per location, unlimited users, unlimited providers. A practice adding a third hygienist and a second associate pays exactly what it paid before, and very few vendors in any market will put that on a page.
- **You want a signed BAA and no server in the building.** Their BAA is published as an exhibit rather than promised in a sales call, and the practice has no hardware to buy, patch or back up.
- **You want a contract you can read before signing, and leave on a month's notice.** Both are published. The one-time free export is written into it rather than left to goodwill.
- **You are opening a practice.** $400 a month until 400 patients or a year is a genuinely different proposition from paying full freight while the schedule fills.
- **Your team works off their phones.** The native mobile app covers x-rays, texting and the schedule. We have a responsive web interface and nothing more.

## Choose Dentalpin if

- **You want the total, not the platform price.** Theirs is $899 plus three suites and an add-on list, none of them published. Ours is on a page: [what it costs](/en/pricing/).
- **You want direct access to your own database.** Not an export request, not a $200 monthly access fee after you leave: the Postgres instance your records are in, on a machine you control.
- **You want a documented API on the plan you are actually on.** No API or developer documentation appears anywhere on their site. Ours is REST with OpenAPI, in every install, including the free one.
- **You want to audit the code** that holds your clinical records, or have someone audit it for you. It is published.
- **You want to leave without asking anyone, on any date.** There is no written request and no deadline to miss, because the database was always yours.
- **Your practice is outside the United States.** Archy's insurance machinery, which is most of what justifies the price, does nothing for you.
- **You need the bill to survive a bad year.** Zero does not renew, does not reprice at the end of a term, and does not become non-refundable.

## What migrating looks like

Archy runs the conversion for you. Their published process is five steps: data collection and secure server access, initial Archy setup, remote team training, imaging sensor setup with drivers tested, then a data audit before go-live, with the final conversion completed while the practice is closed. The systems they publish comparison pages against are Eaglesoft, Dentrix, Dentrix Ascend, Open Dental, Carestack and Curve, though no list of systems they convert *from* appears on the page.

Ours is a tool you drive yourself, and the difference is real work that lands on somebody:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

If you would rather hand the whole thing to a conversion team, that is a genuine reason to pick them. It is also worth asking what it costs and how long it takes, because neither is published.

## The honest part

For a US practice billing insurance, Archy is a serious answer and this comparison is not going to pretend otherwise. Unlimited claims and eligibility inside a flat per-location price is a better commercial shape than metering both per use, and their contract is one of the fairer ones in this market on the questions that matter: who owns the data, what the vendor may do with it, and what it costs to walk away.

The picture changes on two axes. The AI that the whole product is marketed on sits in three suites that carry no published price, so $899 is a floor and nobody outside a sales call knows the ceiling. And outside the United States, most of what you would be paying for never gets switched on.

Dentalpin is the other bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All Archy pages consulted on 9 September 2026:

- [Pricing](https://www.archy.com/pricing): "Run your practice on Archy for $899/month", "One platform price per location", "No seat-based pricing. No provider-based pricing.", the included list ("Unlimited users", "Unlimited providers", "Unlimited claim submissions", "Unlimited eligibility checks", "Unlimited texting"), the new-practice offer ("$400 /month until 400 patients or 1 year per location"), and the Clinical, Front Office and Marketing Suites plus the add-on block, each carrying a "Get Pricing" button and no figure.
- [Home](https://www.archy.com): "Replace 5+ products with one cloud software", "4.3 MILLION+" patients, "2.5 MILLION+" claims created, "ACTIVE USERS: 32,000+", "60 MILLION+" images processed, and the "80 hours" and "$8,000" savings claims.
- [Archy AI Agents](https://www.archy.com/ai): Archy Revenue, Archy Scribe and Archy Intelligence marked "Live today"; Archy Verify and Archy Connect marked "Coming soon".
- [Cloud Benefits](https://www.archy.com/solutions/cloud): the AWS hosting description, "ISO 9001 and SSAE 18 certifications", "HIPAA-compliant Amazon Web Services based infrastructure", the backup description, "Gone are the days of requiring a server for Active Directory", and "retrieving your data is hassle-free and costs nothing, it's your data".
- [Master Service Agreement](https://www.archy.com/legal/master-service-agreement), last updated 18 March 2025: Archy Dental, Inc. d/b/a Archy; the *Rights in Customer Data* clause on ownership and the "solely" grant, plus the Aggregate/Anonymous Data definition; the *Fees* clause on non-refundable payments; the *Renewals* clause on monthly auto-renewal, 30 days' notice and no cancellation except for cause; the *Customer Data Retrieval* clause on the one-time free export and the $200/month post-termination access fee; and the Business Associate Agreement at Exhibit A.
- [Dental Charting](https://www.archy.com/platform/dental-charting): the colour-coded chart, "Compare up to three periodontal charts side by side, down to site-level detail like gingival margins", and the auto-populating clinical note template.
- [About](https://www.archy.com/company/about): Jon Rat and Ben Kolin, the founding story, "6 Countries", "5 Time Zones", and "Our U.S.-based support team, made up of former dental office managers".
- [Converting to Archy](https://www.archy.com/compare/converting-to-archy): the five conversion steps, "convert more of your data than anyone", and the final conversion run while the practice is closed.
- [Mobile App](https://www.archy.com/mobile-app): the native app for x-rays, texting and the schedule.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

An uptime figure or SLA, a security certification held by Archy itself, the AWS region or country holding patient records, any API or developer documentation, the price of any suite or add-on, and any conversion fee or timeline appear on none of the pages consulted, and are stated as absent from those pages rather than absent from the product. Archy's Trust Center at trust.archy.com returned no readable content this run and was not used as a source.

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Archy too.
