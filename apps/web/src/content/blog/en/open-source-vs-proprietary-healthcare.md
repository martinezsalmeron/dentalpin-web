---
title: "Open source vs proprietary software in healthcare: what actually changes"
description: "What a software licence really decides for a clinical practice, what it does not decide, and how to check in ten minutes which category you are buying."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [open-source, licensing, procurement, data-protection, contracts]
---

A licence does not decide whether software is good for your practice. It decides three specific things: who can keep it running if the vendor disappears, whether you can run it on your own server, and on what terms you will still be allowed to use it in ten years.

Everything else, the price, the support, the actual security and who answers to the regulator for patient data, depends on the vendor and on how the system is deployed. It is not written in the licence, and treating those two lists as one is how this decision gets made badly.

## There are three categories, not two

The usual conversation puts "open source" against "proprietary" and leaves out the category where a growing part of the market now sits.

The Open Source Initiative maintains the reference definition, currently version 1.9. Its opening line is the one people forget: "Open source doesn't just mean access to the source code." The definition also requires the licence to allow redistribution, to allow modifications and derived works, and not to "restrict anyone from making use of the program in a specific field of endeavor".

The Free Software Foundation states the same idea as four freedoms: run the program as you wish, study how it works and change it, redistribute copies, and distribute your modified versions. For freedoms 1 and 3, the text adds, "access to the source code is a precondition".

| | Open source | Source available | Proprietary |
|---|---|---|---|
| You can read the code | ✓ Anyone can | ✓ Published | ✗ No, unless escrowed |
| You can modify it | ✓ Yes | ✓ Yes | ✗ No |
| You can use it for any purpose | ✓ No field restriction | ~ Some uses excluded | ~ Whatever the contract says |
| You can redistribute it | ✓ Yes | ~ Under the same limits | ✗ No |
| Meets the OSI definition | ✓ Yes | ✗ No | ✗ No |
| Typical licences | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Vendor EULA |

The middle column is real and it is growing. The Business Source License 1.1 publishes the code and allows modification, but reserves certain uses, and it says so plainly in its own text: "The Business Source License (this document, or the 'License') is not an Open Source license." It also commits the work to a genuine open source licence on a stated change date.

> **"The code is public" and "it is open source" are not the same claim.** A vendor can show you every line and still forbid specific uses. That is not dishonest, it is a different category, and the only way to know which one you are in is to read the licence.

## What the licence does decide

- **Who can maintain the software when the vendor is gone.** With the source and permission to change it, any competent developer can patch the system. That is neither free nor instant, but it is possible, and possible is the difference that matters on the day of the announcement.
- **Where it runs.** An open source licence lets you install on your own hardware. A proprietary cloud subscription almost never does, whatever you pay.
- **Whether you can audit what it does with data.** Reading the code is the only way to confirm what leaves the building and how often, instead of trusting a sales answer.
- **What happens in ten years.** An open source licence does not expire. A subscription does, and it takes access to your charting software with it.

## What the licence does not decide

This is where most of the misunderstandings live.

- **Who is accountable for patient data.** The practice that decides why and how patient data is processed is the accountable party, whatever software it runs. In the EU that is Article 4(7) of Regulation (EU) 2016/679, with Article 24(1) putting the burden of demonstrating compliance on the same party and Article 28 requiring a written contract with any processor you host with. If you practise outside the EU the citation changes and the principle does not: the licence never moves that responsibility onto the vendor.
- **Whether the software is a medical device.** EU Regulation 2017/745 defines a device as "any instrument, apparatus, appliance, software, implant, reagent, material or other article" intended by the manufacturer for a medical purpose. Intended purpose decides it, never the licence. Other regulators word it differently and reach the same place.
- **Whether it is secure.** Public code is auditable, not audited. Those are two different things and only the second one protects anybody.
- **What it costs.** There is open source with expensive support contracts and proprietary software that is cheap.
- **Whether someone picks up the phone on a Friday evening.** A support contract decides that, and both categories sell one.

![Patient record showing clinical alerts, the active treatment plan and a timeline filtered by visits, treatments, payments and messages](/screenshots/patient-timeline.png)

*Years of clinical history inside one program. The licence does not change who answers for this data: that is still the practice.*

## "Free" does not mean "free of charge"

The Free Software Foundation opens its definition with the distinction: free software is "a matter of liberty, not price", and you should "think of 'free' as in 'free speech,' not as in 'free beer'". The same page notes you may well have paid for your copies and still hold every freedom.

In practice the money does not vanish. It moves.

| Line item | Proprietary, hosted by the vendor | Open source, on your server |
|---|---|---|
| Licence | ~ Per user, per chair or per site | ✓ No licence fee |
| Server and storage | ✓ Included in the fee | ✗ Yours to buy and run |
| Backups | ✓ Vendor's, on the vendor's policy | ✗ Yours, and they need testing |
| Updates | ✓ Applied for you | ~ Yours, or a contractor's |
| Support | ✓ Included or contracted | ~ Community, or a separate contract |
| Leaving | ~ Depends on their export | ✓ You already hold data and code |

A small server done properly is cheap. The time of the person who patches it, watches the backups and answers when something breaks is not zero, and that is the number nobody puts in the spreadsheet. Before deciding, it is worth reading what [self-hosting healthcare software](/en/blog/self-hosting-healthcare-software/) actually involves.

## How to read a licence in ten minutes

You do not need a lawyer for the first pass. You need to open five things and write down what they say.

1. **Find the LICENSE file in the public repository.** If there is no repository, you have your answer: it is proprietary. That does not disqualify it, it just tells you which questions to ask next.
2. **Check whether the licence name appears on the OSI list.** GPL, AGPL, Apache and MIT do. BSL and the source-available family do not.
3. **Search the text for "Use Limitation" or "Additional Use Grant".** If specific uses are carved out, it is not open source, however public the code is.
4. **Look for a "Change Date".** Some licences convert to a genuine open source licence after a set period, commonly four years, which changes the long-term calculation.
5. **Ask whether the published code is the code you run.** A repository holding a two-year-old version is not a safety net.
6. **Ask for a full export before you sign.** The [format you should insist on](/en/blog/export-dental-software-data/) matters more than the licence on the day you want to leave.

> **If you only run one check, run the last one.** A tested, open export protects you in all three categories. An open source licence with no exportable data does not rescue a migration.

![Practice reporting screen](/screenshots/reports.png)

*Reports are rebuilt from the underlying data. That is why the useful pre-signature question is what format the data comes out in, not what licence it went in under.*

## What changes in December 2027 in the EU

Regulation (EU) 2024/2847 of 23 October 2024, the Cyber Resilience Act, sets cybersecurity requirements for products with digital elements. Article 71 says it applies from **11 December 2027**, with Article 14 from 11 September 2026 and Chapter IV from 11 June 2026.

It is aimed at manufacturers and distributors rather than at your practice, but it changes who you can hold to account.

- **Commercial software is in scope, open source or not.** What decides it is that the product is supplied in the course of a commercial activity.
- **Non-monetised open source is out.** Recital 18 states that supplying open source products "that are not monetised by their manufacturers should not be considered to be a commercial activity".
- **A new role appears, the "open-source software steward"**, defined in Article 3(14) for entities that sustain the development of open source products intended for commercial activities, carrying lighter obligations than a manufacturer.

The practical reading for a practice in the EU is short: from that date a community project with no company behind it and a commercial product do not answer the same way, and it is worth knowing which one you are installing. Practices outside the EU should check what their own regulator requires, because there is no equivalent single date.

## This already exists in healthcare

It is not a laboratory hypothesis. GNU Health describes itself as "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics" and lists deployments in hospitals and health ministries across several countries. OpenEMR presents itself as "the most popular open source electronic health records and medical practice management solution" and states that it is ONC Certified in the United States.

Neither is a dental product, and that is the point: the licence question has the same answer in every specialty.

## The question that settles it

There is only one: **if this company disappears tomorrow, what is still running?**

If the answer includes the source code, the data in an open format and a server you control, the licence has done its job. If it includes none of the three, no contract clause will stand in for it.

Dentalpin sits in the middle category, and it is worth saying so precisely: the code is public under BSL 1.1, with a use limitation that rules out running a competing SaaS, and with automatic conversion to Apache 2.0, a genuine open source licence, four years after each release. It installs on your own server, the database is PostgreSQL, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 27 August 2026.

- Open Source Initiative, *The Open Source Definition*, version 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, the four freedoms. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, licence text and the "is not an Open Source license" notice. [mariadb.com](https://mariadb.com/bsl11/)
- Regulation (EU) 2016/679 (GDPR), Articles 4(7), 24(1), 28(1) and 28(3)(g). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)
- Regulation (EU) 2017/745 on medical devices, Article 2(1). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745)
- Regulation (EU) 2024/2847 (Cyber Resilience Act), Recital 18, Article 3(14) and Article 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847)
- GNU Health, project site. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, project site. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, LICENSE file in the repository (Business Source License 1.1).

This is not legal advice. Whether a program counts as a medical device, and how responsibility for patient data is split, depend on the specific case and on where you practise. Check with your own adviser before deciding.
