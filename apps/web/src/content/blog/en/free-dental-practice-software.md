---
title: "Free dental practice software: what actually exists"
description: "What is genuinely free in dental practice software, what each vendor publishes on its own site, and why the CDT code set decides the answer in the US."
pubDate: 2026-08-19
tags: [comparison, dental-software, free]
---

Almost everything a search for free dental practice software returns is paid software with a trial in front of it. Two routes are free with no end date and say so on their own websites: an open source project under GPLv3, and a trial that never expires but stops at thirty patients. Neither one can bill a US insurer, and that is the sentence that decides this page.

We make Dentalpin, which is one of the free options listed here. So we are not neutral. We can still be exact.

> **How this page is sourced.** Every claim about a product comes from a page that vendor publishes itself, with the URL and the date consulted at the end. No comparison sites, no top ten lists: they contradict each other and more than one is written by a competitor. Where a vendor does not publish a figure, this page says it does not publish it instead of borrowing a number from somewhere else.

## In thirty seconds

**The only unlimited free system we could verify from a vendor's own site is open source.** Apexo publishes itself as "An open-source, offline-first dental practice manager" under "GNU GPLv3", and Dentalpin runs under Business Source License 1.1. Neither has a patient cap because neither has a counter.

**The best free version of a commercial product is Open Dental's trial, and it has a hard edge.** Open Dental's own trial page says it "will not expire so it can be used as long as needed to evaluate the software", then adds that it "is limited to 30 patients", does not work with the API, does not work with eServices, and does not include CDT codes or ADA claim forms.

The question that decides is not the price. It is whether you bill insurance in the United States. If you do, you need the CDT code set, and the CDT code set is licensed intellectual property that no free download comes with.

![Home screen showing today's appointments, who is in the clinic, overdue payments and recently seen patients](/screenshots/home.png)

*The day view, with the demo clinic data that ships with the installation.*

## Four different things get called free

They all come out of the same search, and only two of them still cost nothing in year two.

1. **The time-limited trial.** The product is paid and the door is open for a fixed period. Practice-Web lists a "Free 30-day trial" against several of its add-on tools, not against the software itself.
2. **The trial with no end date and a cap.** Open Dental's trial does not expire; it stops at thirty patients. That is enough to evaluate and not enough to run a practice, which is exactly what it is designed for.
3. **Free for a category of user.** Open Dental's published fee table lists "Developing Countries" at "Free" and "Dental Schools" at "Free". This is real, and it is the least known free tier in the market.
4. **Open source.** The code is published under a licence, and it is the licence rather than a commercial promise that makes the zero hard to withdraw. In exchange, the server and the backups are yours.

A low entry price is not a fifth category, it is a different conversation. £125 a month is not much and it is not nothing.

## What each vendor publishes about price

Everything below was read on the vendor's own site on 19 August 2026.

- **Apexo** publishes itself as a "Free Dental PMS", "An open-source, offline-first dental practice manager" licensed under "GNU GPLv3". Its own page says "Your data lives on your own servers" and describes creating that server yourself, plus offline use ("Local-first data. No internet? No problem."), sync across devices, automated daily backups and interface languages EN, AR, ES, PL and KU. There is no tariff because there is no product to buy.
- **Open Dental** publishes a full fee table, which in this market is rare. In the United States it is "$199/month/location or office" on a twelve month contract, dropping to "$149/month/location" month to month after twelve consecutive months. Canada is "$164/month/location" then "$137/month/location", other countries "$89/month/location or office", medical and institutional "$110/month/FTE provider", and providers from the third onward "$20/month/provider". Four to nine offices are "$169/month/office". Prepayment discounts run 5% for six months, 10% for a year and 15% for two to three years.
- **Practice-Web** also publishes a full tariff: "$179/mo (reg. $199/mo) for 12 mo, then $129/mo (reg. $149/mo)" for a first office, "$129/mo" for an additional office, and a database conversion at "$1,195 (reg. $1,295)". There is no free edition on that page. The "Free 30-day trial" label appears against individual add-ons such as texting, online scheduling and patient forms.
- **Dentally** publishes its UK pricing per surgery: Starter at "£125/month" for one surgery rising to "£575/month" at nine, Essentials at "£220/month" to "£720/month", and Pro at "£320/month" to "£945/month", all excluding VAT. No free plan is listed.
- **Curve Dental** publishes no figure on its pricing page. The page carries "GET A PERSONALIZED QUOTE" and the claim that "Curve offers the tools you need to run a successful dental practice at a fraction of the usual costs", which is a comparison without a number.
- **Dentrix** publishes no figure either. Its product page runs on "Request a Demo" and states "35,000+ Practices rely on Dentrix to streamline operations".
- **Dentalpin** is published under Business Source License 1.1, which converts automatically to Apache 2.0 four years after each release. Self-hosting is free, the whole product ships, and there is no fee per chair, per dentist or per patient.

## Side by side

Only verifiable rows. Where a vendor does not publish something, the row says so rather than guessing.

| | Apexo | Open Dental trial | Open Dental (paid) | Dentalpin |
|---|---|---|---|---|
| Published cost | ✓ Free, GPLv3 | ✓ Free | ✗ $199/month/location, then $149 | ✓ $0 self-hosted |
| Patient limit | ✓ None published | ✗ "limited to 30 patients" | ✓ None | ✓ None |
| Expires | ✓ No | ✓ "will not expire" | ✓ No | ✓ No |
| CDT codes and ADA claim forms | ✗ Not published as included | ✗ Not included | ✓ Included | ✗ Not included |
| Electronic claims to US payers | ✗ Not published | ✗ "does not work with eServices" | ✓ Yes, eServices | ✗ Not supported |
| Support included in the price | Not published | ✗ No | ✓ The fee is for support and services | ✗ Community only |
| API access | Not published | ✗ "does not work with API" | ✓ Yes | ✓ REST, documented with OpenAPI |
| Source code published | ✓ Yes, GPLv3 | ✗ Proprietary since 24.4 | ✗ Proprietary since 24.4 | ✓ Yes, BSL 1.1 to Apache 2.0 |
| Runs on your own server | ✓ Yes | ✓ Yes | ✓ Yes | ✓ Yes |
| Free for dental schools and developing countries | Not applicable | Not applicable | ✓ Published as "Free" | ✓ Free for everyone |

The three rows in the middle are the ones we lose, and in a US practice that bills insurance they outweigh everything else on the table. That is why they sit here rather than in a footnote.

> **CDT is licensed intellectual property, and that is why free software arrives without it.** The American Dental Association states that "All use, copying or distribution of CDT, or any portion thereof in any product or services requires a valid commercial user license from the ADA", that "Redistribution of the CDT Codes alone is not permitted. You must bundle the Codes with other assets", and that an application "typically takes 2-4 weeks" and can take up to two months. Open Dental's trial page is the same fact seen from the software side: the trial "does not include copyrighted CDT content (e.g., CDT codes and ADA claim forms)".

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Invoices with configurable numbering and part payments. US insurance claims and the CDT code set are not covered.*

## What free still costs

Three published line items move the total more than any monthly fee does.

- **Conversion.** Practice-Web lists a database conversion at "$1,195 (reg. $1,295)". Whatever you move to, someone has to get the old records out, and that work has a price whether or not the licence does.
- **Training.** Open Dental publishes "$80/hour" for online training and "$4,325/one day/per trainer" for on-site. Those are the numbers to put next to a free download before deciding it is cheaper.
- **Add-ons.** On Open Dental's own table, eClipboard is "$45/month/location", Web Sched services "$75/month/location" and AI image analysis "$149/month/location". A base price is not a bill.

A fourth cost applies only to the open source route, and it does not appear on any page: nobody answers the phone. If the practice is stopped at nine in the morning, that is the difference you feel.

## The open one that stopped being open

Open Dental is still the name that comes up most often when someone asks for open source dental software, and it is Open Dental that says the answer changed. Its licence page states plainly: "In version 24.4, the Open Dental license changed from open source GPL to proprietary."

The same page is careful that customers lost nothing: "There was no change in price, support, database access, or how the software was used."

That is not a criticism, it is a reminder of what a licence actually does. It is the only thing that makes free hard to take back, which is a reason to read it before a migration rather than after one.

## Choose a paid US system if

For most practices in the United States this is the right column, and the reasons are concrete.

- **You bill insurance.** This is where the discussion ends for a practice that submits claims. Open Dental sells the eServices its own trial page says the free version cannot use. Dentalpin does not offer them at all.
- **You want the CDT code set to arrive with the software.** The ADA licence terms are what stand between a free download and the codes, and a commercial licence is how a vendor clears them.
- **You want somebody to call.** Open Dental's published fee is for support and services, not for a program alone, and Practice-Web lists a monthly support renewal on the same basis. Open source does not include a phone number.
- **You want a price you can check yourself.** Open Dental, Practice-Web and Dentally publish full tariffs with figures, contract lengths and tax notes. In this market that is the exception, and for a capital decision it is worth more than any licence argument.

## Choose Dentalpin if

- **You practise privately, or outside the United States.** That removes the strongest objection in the column above, and the rest of this page becomes relevant.
- **Your work is documented tooth by tooth.** The odontogram, periodontal chart, treatment planning and quotes are the core of the product, not a module added later.
- **You do not want a ceiling on chairs, users or patients.** There are no plans, so there is nothing to exceed. What Dentalpin costs fits on [a short page](/en/pricing/).
- **You would rather not depend on a model that can change.** The code is published under a licence, and that, not a sales promise, is what makes the zero durable.
- **You want to integrate.** The API is REST and documented with OpenAPI, so a website, a reporting tool or an external calendar talks to the system directly.
- **Somebody can look after a server**, in house or on contract. That is the question that really decides, and if the answer is no, the rest of the list does not count.

![Patient record with the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The record holds status tooth by tooth and links every treatment to a plan and a quote.*

## Five questions before you enter the first patient

They apply to every product on this page, free or not, and the order matters.

1. **Do you submit insurance claims?** Answer this before anything else. It removes most of the free options in the United States on its own, and it costs nothing to ask.
2. **Does the price include the CDT code set?** For a paid product, get it in writing. For a free one, assume it does not, because the ADA licence terms make it unlikely.
3. **What does it cost in year three?** Add support, add-ons, extra providers, conversion and training, not the entry price. For the three vendors that publish a tariff you can do that arithmetic yourself.
4. **How do I get my data back out?** Ask for the export format in writing, covering patients, clinical notes, treatment plans, invoices with their numbering, and attachments. Ask before you sign, not when you leave.
5. **Who runs the machine?** With a paid system it is the vendor and your support contract. With open source it is you. Settle that before the installation, not at the first outage.

## Sources

- Apexo, apexo.app, consulted 19 August 2026: https://apexo.app/
- Open Dental fees, consulted 19 August 2026: https://www.opendental.com/site/fees.html
- Open Dental trial version, consulted 19 August 2026: https://www.opendental.com/site/trial.html
- Open Dental licence change, consulted 19 August 2026: https://www.opendental.com/site/license.html
- American Dental Association, licensing for commercial users, consulted 19 August 2026: https://www.ada.org/publications/ada-store-products/licensing-for-commercial-users
- Practice-Web pricing, consulted 19 August 2026: https://www.practice-web.com/pricing/
- Dentally pricing, consulted 19 August 2026: https://www.dentally.com/pricing
- Curve Dental pricing, consulted 19 August 2026: https://www.curvedental.com/pricing/
- Dentrix product page, consulted 19 August 2026: https://www.dentrix.com/products/dentrix
