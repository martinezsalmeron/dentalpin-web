---
title: "Dentalpin vs Eaglesoft: server-based incumbent or code you own"
description: "Eaglesoft states nearly 30,000 users and publishes no licence price. Dentalpin is open source and free to run. A sourced comparison of where each fits."
pubDate: 2026-08-14
tags: [comparison, eaglesoft, dental-software]
---

Eaglesoft has been the Patterson Dental answer for a long time, and its own page puts the numbers plainly: "A proven, comprehensive practice management platform for more than 30 years", with "nearly 30,000 users". The one number Patterson publishes anywhere in dollars is not the price of the software. It is the discount on switching to it.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about Eaglesoft below comes from a page Patterson publishes itself, on pattersondental.com or its own support site, linked and dated at the end. No aggregator blogs and no review sites: they contradict each other and some are written by competitors. There is a whole section on when Eaglesoft is the better choice, because for a lot of readers it is.

## In thirty seconds

**Eaglesoft** is a mature, server-based product with three decades of US practices behind it, over 55 authorized integrations, imaging in the box, and a training and support organisation you can phone. If you run a US practice and want the thing your next hire already knows, this is a defensible choice.

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the data wherever you decide to put it. In exchange it is from 2026, it is self-hosted, and it has no imaging module.

The question that decides between them is not really features. It is whether you want a Windows server in a cupboard that Patterson's own documentation says must not be virtualised, or a browser-based system you can run wherever you like.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Eaglesoft is

Practice management software from Patterson Dental, and specifically the **server-based** one of their three. Their practice management page sets the line-up out: Eaglesoft as "server-based software", Fuse as the cloud-based system, and Dolphin for orthodontics.

That page also states Patterson serves "over 38,000 dental software customers" across the whole range, with "over 25 years building dental practice management software".

The product itself is broad and long-refined. Patterson describes an interactive tooth chart, image acquisition and storage, scheduling, payment application down to line items, end of period processing, and SmartDoc for document storage. Around that sit revenue cycle add-ons: the Insurance Suite, eStatements, Card Payments, and ePrescriptions.

ePrescriptions is a good example of the depth. Patterson's page describes submitting prescriptions electronically "for both controlled and non-controlled substances", with connectivity to 80,000+ pharmacies, prescription favorites, real-time benefit checks and a Drug Utilization Review summary. Nothing in Dentalpin touches that.

The clinical AI is bought in rather than built: Pearl Second Opinion and Pearl Practice Intelligence are offered as add-ons alongside the Service Club plans.

### What the hardware document tells you

Patterson's own support documentation is more informative than its marketing, and it is worth reading before you sign anything. The current *Eaglesoft and CAESY Cloud Hardware and Network Requirements* guide (Rev 035, dated 03.27.2026) sets out what running it actually involves:

- **A dedicated Windows server.** Windows Server 2025, 2022, 2019 or 2016 Standard, or Windows 11 Professional. Server operating systems are "only supported on a Dedicated Server", and Eaglesoft is not supported on a Domain Controller.
- **No virtual machines.** "The use of a virtual machine to run any Patterson Companies software is not supported." That rules out most of how small businesses run servers in 2026.
- **Windows workstations, no Home editions.** Intel Core i5 8th generation or higher, 8 GB RAM, 120 GB disk, TPM 2.0, and "Eaglesoft is not supported with any version of Windows Home".
- **Wired, single-site networking.** "Eaglesoft is not supported with any WAN solution", and the guide recommends cabled connections and advises avoiding wireless.
- **Weekly reboots.** The guide recommends "weekly reboots of your physical data server" so Windows updates can install.

One line in that document is a genuine advantage and deserves saying out loud: high speed internet "is not required for Eaglesoft to function". The day the line goes down, an Eaglesoft practice keeps working.

The current release is Eaglesoft 25.00, available since 1 December 2025, and version 25 requires .NET Framework 4.8.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontal charting, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in a browser, so no workstation has to be a particular kind of Windows machine, and nothing forbids you from running it on a virtual machine. It is also from 2026, with none of Eaglesoft's thirty years of accumulated edge cases, and it has no imaging module at all.

![Patient record in Dentalpin: odontogram, clinical alerts, active treatment plan and next appointment](/screenshots/dental-chart.png)

*The patient record, with the odontogram, clinical alerts, the active plan and the next appointment on one screen.*

## What Patterson does and does not publish

This is the part worth being precise about, because it is unusual.

> **Patterson publishes no price for Eaglesoft (consulted 14 August 2026).** Not on the Eaglesoft page, not on the practice management page, not on the Fuse page. All three offer "Request a demo" or "Request information" and a sales phone number instead.

What they do publish is a dollar figure attached to switching. The Eaglesoft page carries a limited-time offer, worded exactly like this: "Switch to Eaglesoft and get 50% off conversion ($1,000 value). Enroll in any Eaglesoft Service Club plan for more savings, and add Pearl Second Opinion or Pearl Practice Intelligence for an extra 5% off your Service Club rate."

Read that carefully and it tells you three things without telling you the price. Data conversion is a paid service worth about $2,000 at list. Support is a subscription called a Service Club plan. And the AI is priced off that subscription rate, so it is another line on the bill.

None of that is a criticism. It is how most of this industry sells, and Patterson is at least specific about the conversion. But you cannot compare two products on cost without booking a call, and we are not going to fill that gap with a number from a blog.

## Side by side

Verifiable rows only. Eaglesoft's figures are Patterson's own, from Patterson's own pages.

| | Eaglesoft | Dentalpin |
|---|---|---|
| Model | Commercial licence | ✓ Open source (BSL 1.1 → Apache 2.0 after 4 years) |
| Published licence price | ✗ Not published, request a demo | ✓ €0, everything included |
| Deployment | Server-based, dedicated Windows server | ✓ Browser · your server, your provider, or local |
| Runs on a virtual machine | ✗ Not supported | ✓ Yes |
| Workstations | Windows 11 Pro, no Home editions | ✓ Any machine with a browser |
| Multi-site over a WAN | ✗ Not supported | ✓ Yes |
| Works with the internet down | ✓ Not required to function | ✗ Needs the server reachable |
| Users | ✓ Nearly 30,000 stated | ✗ Very few so far |
| On the market | ✓ More than 30 years stated | ✗ Since 2026 |
| Integrations | ✓ 55+ authorized solutions | ✗ Early ecosystem |
| Imaging | ✓ Acquisition and storage built in | ✗ Not offered |
| ePrescribing | ✓ Add-on, 80,000+ pharmacies | ✗ Not offered |
| Clinical AI | ✓ Pearl, as a paid add-on | ~ Assistant over your own data |
| Support channels | ✓ Phone, email and live chat | ✗ Telegram and GitHub |
| Training | ✓ Customized programs, certified experts | ~ Docs and an import module |
| Open API | ✗ Not published | ✓ Full REST, OpenAPI |
| Auditable code | ✗ No | ✓ Published on GitHub |

That table has a lot of green on their side, and it should. Eaglesoft has been doing this since before most of the alternatives existed.

## Choose Eaglesoft if

This section is meant seriously, not as a formality.

- **You practise in the United States and insurance is the daily grind.** The Insurance Suite, eStatements and Card Payments are built for that market and refined over decades. Nothing we do touches this.
- **You want imaging in the same product as the chart.** Image acquisition and storage are in Eaglesoft, with a tested list of supported sensors, scanners and printers. Dentalpin has no imaging module, and pretending otherwise would help nobody.
- **You prescribe controlled substances.** ePrescriptions with 80,000+ pharmacies and a DUR summary is real infrastructure that we do not have.
- **Your internet is unreliable.** Patterson states plainly that Eaglesoft does not need it to function. If your practice is somewhere the line drops, that is close to decisive.
- **You want people to train your team, and a phone to call.** Patterson describes "a team of certified product experts", technology advisors who "develop and deliver customized software training programs" with an average of 23 years of dental industry experience, and support by phone, email or live chat. We have a Telegram channel and GitHub. Switching software is where practices lose weeks.
- **Nobody in the practice is technical, and nobody wants to be.** That is a legitimate position and it points at Eaglesoft.

A product with nearly 30,000 users behind it has solved problems we do not yet know exist.

## Choose Dentalpin if

- **You want to know the price before you talk to anyone.** Ours is on a page: [what it costs](/en/pricing/). Nothing per chair, per dentist or per patient.
- **You do not want to run a dedicated Windows server.** Patterson's requirements rule out virtual machines and Windows Home, and recommend weekly reboots of the physical box. Dentalpin runs in a container on whatever you already have.
- **You have more than one site.** Eaglesoft is documented as not supported over a WAN. Dentalpin is a web application, so a second location is a login.
- **You want to audit the code** that holds your clinical records, or have someone audit it for you. It is published.
- **You want to integrate and automate freely.** A documented REST API with OpenAPI on a system you control, rather than an authorized-partner list you apply to join.
- **You practise outside the United States**, where the insurance workflow that makes Eaglesoft strong is not the workflow you have.

![Dentalpin's AI assistant showing the workflows it can run against clinic data](/screenshots/ai-copilot.png)

*The AI assistant and the workflows it can run, bounded by the permissions of the user who asks.*

## What migrating looks like

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

This is a self-service tool and it is free. Patterson's conversion is a paid, staffed service at roughly $2,000 list, which is a different offer rather than a worse one: if you want somebody else to own the migration end to end, that is a genuine reason to pick them.

> Step 3 is where most migrations go wrong. Two practices never code treatments the same way, and **a silently guessed equivalence produces invoices that are wrong in ways nobody notices for months**.

## The honest part

Eaglesoft is an incumbent for defensible reasons: thirty years, nearly 30,000 users, imaging and ePrescribing in the product, 55+ integrations, people who will train your team, and a product that keeps working when the internet does not. If you are a US practice that wants the safe choice, it is a safe choice, and this comparison is not going to pretend otherwise.

Where we would push back is on the shape of the thing. A dedicated Windows server that may not be virtualised, no WAN support, weekly reboots and no published licence price is a 2026 product carrying a 1996 architecture, and you pay for that in hardware and in the IT visits nobody quotes you for.

Dentalpin is the other bet: that the software holding clinical records should be readable and ownable by the practice it holds them for. It is younger and it shows. You can [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All Patterson pages consulted on 14 August 2026:

- [Eaglesoft · Patterson Dental](https://www.pattersondental.com/cp/software/dental-practice-management-software/eaglesoft): "more than 30 years", "nearly 30,000 users", "over 55 authorized, trusted software solutions", SmartDoc, the interactive tooth chart, the Pearl add-ons, the conversion offer wording and the "Request a demo" call to action.
- [Dental Practice Management Software · Patterson Dental](https://www.pattersondental.com/cp/software/dental-practice-management-software): Eaglesoft as "server-based software", Fuse as the cloud product, Dolphin for orthodontics, "over 38,000 dental software customers", "over 25 years building dental practice management software", and no published price.
- [Fuse · Patterson Dental](https://www.pattersondental.com/cp/software/dental-practice-management-software/fuse): the cloud product, "Request information", no published price.
- [Eaglesoft ePrescriptions](https://www.pattersondental.com/cp/software/revenue-cycle-management-software/eaglesoft-eprescriptions): controlled and non-controlled substances, 80,000+ pharmacies, DUR summary, and the add-on list it sits in.
- [Software Support and Training · Patterson Dental](https://www.pattersondental.com/cp/software/support-training): "a team of certified product experts", technology advisors who "develop and deliver customized software training programs", "An average of 9 years of training and 23 years of dental industry experience", and support by phone, email or live chat.
- [Eaglesoft and CAESY Cloud Hardware and Network Requirements](https://pattersonsupport.custhelp.com/euf/assets/Answers/5001-6000/5073/Eaglesoft_and_CAESY_Hardware_Requirements_03.27.2026.pdf) (Rev 035, 03.27.2026): supported server and workstation operating systems, the dedicated server and Domain Controller rules, no virtual machines, no Windows Home, no WAN support, the wired network recommendation, weekly reboots, the .NET Framework 4.8 requirement for version 25, the tested peripheral lists, and internet not being required.
- [Eaglesoft Released Versions](https://pattersonsupport.custhelp.com/app/answers/detail/a_id/23400/~/eaglesoft-released-versions---download-links-and-install-information): Eaglesoft 25.00, "Date Available: 12/1/25".
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Patterson too.
