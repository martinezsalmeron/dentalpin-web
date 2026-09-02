---
title: "Building an integration business on open source dental software"
description: "The software is free, the service is not: installs, migration, tested restores and support. What the licence lets you sell, and the processor contract you must sign."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, integrators, msp, gdpr, dental-software]
---

You can build a paid services business on open source dental software, and what you charge for is never the program. You charge for the install, the data migration, backups somebody has actually restored, the updates, and being reachable when the practice cannot open its schedule on a Monday morning. Two things decide whether the business holds together: what the licence lets you do, and the fact that the moment you touch patient data you become a processor with a contract to sign.

Neither of those is an obstacle. Both are the work, and the work is billable.

## What you sell is not software, it is Monday at nine o'clock

A small practice does not buy technology. It buys the certainty that reception can open the schedule. The service catalogue that comes out of that is short, and it repeats at every site.

- **Install and hardening.** Server, certificate, firewall, system accounts, and a configuration that does not depend on you remembering how you left it.
- **Data migration.** Getting patients, clinical records, treatment plans and appointments out of the old system, then reconciling the totals before you call the load good.
- **Tested backups.** A backup nobody has restored is not a backup, it is a file. The test restore is a deliverable with a date on it.
- **Updates.** Minor releases, the major PostgreSQL upgrade every few years, and a maintenance window agreed with the practice.
- **Support with written hours.** Not "when I can". These hours, this channel, this response time.
- **Training.** Two short sessions at go-live and one at three months beat a fifty page manual.

![Home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*The screen the team looks at first thing. When it does not load, the practice calls whoever built the server.*

## Read the licence before you price anything

Open source does not mean "do what you like". A lot of products in this market ship under the Business Source License 1.1, which is a template with blanks in it, and the blanks change from project to project.

The base BSL 1.1 text grants, in its own words, "the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work". Production use, which is exactly what your client does all day, depends on the Additional Use Grant the publisher fills in.

| What you want to do | Under a BSL 1.1 |
|---|---|
| Read and audit the code | ✓ Granted in the base text |
| Modify it for one client | ✓ Granted in the base text |
| Run it on one practice's server | ~ Depends on the Additional Use Grant |
| Charge your hours to install and maintain it | ~ The licence governs the software, not your time |
| Resell it as your own multi-tenant SaaS | ✗ Usually the express restriction |

That fourth row is the one people misread. A software licence sets conditions on using and distributing the software, not on you invoicing consultancy; what it can stop is the particular setup you wanted to invoice for.

> **The line is running your own SaaS, not charging for an install.** Hosting one practice's instance for that practice and billing them for maintenance is a different case from standing up a multi-tenant platform that competes with the people who publish the software. If your model sits near that line, the licence itself says what to do: buy a commercial licence from the licensor, or refrain.

When in doubt, ask before you sign with the client. BSL projects normally publish a contact line for alternative licensing arrangements, and that conversation costs one email.

This is not legal advice. It is a reading of a public text, and your actual contract needs a lawyer.

## The moment you touch patient data you are a processor

This is where a lot of otherwise good local IT businesses walk into an avoidable problem. If you administer the server where the clinical record lives, you process health data on the practice's behalf, and the GDPR has a word for you: processor.

The Irish Data Protection Commission puts it plainly: controllers and processors must "enter into a legally binding contract governing the processing of personal data when a controller engages a processor to process personal data on its behalf". Its guidance lists the minimum contents that Article 28(3) requires, among them "the subject matter, duration, nature and purpose of the data processing", "the type of personal data being processed", "the categories of data subjects whose personal data is being processed" and "the obligations and rights of the controller".

Translated into your working week, that is four concrete decisions:

1. **Sign the contract before you touch the first record**, not after the migration. The contract date should sit before your first access.
2. **Declare your sub-processors.** If the server lives at a hosting provider, that provider is a sub-processor and the practice has to be able to authorise it.
3. **Document the instructions.** An email from the practice asking for an export is a documented instruction. A phone call leaves no trace.
4. **Agree what happens at the end.** Return or deletion of the data when the service stops, with written evidence of what you did.

> **The processor contract is not paperwork, it is the boundary of your liability.** Without one, every incident gets argued with no document saying what you had been asked to do and what you had not. With one, the scope of what you administered is in writing.

## The three pricing models that hold up

All three work. What does not work is mixing them silently, because the client ends up believing maintenance was included in the install.

| Model | What it covers | When it fits |
|---|---|---|
| Fixed project | Install, migration and training, fixed price and fixed scope | A new practice, or a change of system |
| Monthly retainer | Backups, updates, monitoring and support inside stated hours | Practices with no IT staff, which is almost all of them |
| Block of hours | One-off work outside the retainer's scope | Integrations, custom reports, hardware changes |

The retainer is what turns this into a business rather than a run of projects. It is also the one that forces the discipline of monitoring, because charging a monthly fee without knowing whether the server is still taking backups is selling insurance without looking at the risk.

## An install worth repeating at the next practice

The first install takes as long as it takes. The fifth is profitable only if the first left behind a written procedure.

1. **Inventory what is there.** Which system, which version, where the data sits, and who holds the admin password today.
2. **Build a staging environment** from a copy of the real data, never against the installation the practice is using.
3. **Migrate, then reconcile the numbers.** Patient count, future appointments, open treatment plans, outstanding balance. If one total is off, you are not finished.
4. **Run a week in parallel** with the old system still available read-only.
5. **Run a timed test restore** from the backup, and write down how long it took.
6. **Train in two short sessions**, one for reception and the schedule, one chairside.
7. **Cut over on a quiet day**, not a Monday and not the day before a holiday.
8. **Hand over credentials in writing** to the named person at the practice, with the list of services and where each thing lives.

![Diagram of the self-hosted stack: browser, Caddy on port 443, Nuxt front end, API and a PostgreSQL database](/diagrams/install-stack.svg)

*The pieces you become responsible for the day you sign a maintenance agreement. Every box has someone who updates it, and that someone is you.*

## The SLA the practice will ask about without using the word

No dental practice asks for an SLA. It asks who it rings at half past eight on a Tuesday. Put these five answers in writing and you have written the agreement:

- **Covered hours**, and what happens outside them, Saturdays included if the practice opens.
- **Response time and target resolution time**, which are not the same thing and are worth separating.
- **How much data can be lost** in the worst case, which is another way of saying how often backups run.
- **How long it takes to be working again** from the last backup, measured in a real test rather than estimated.
- **Who owns the server and the data**, which must always be the practice, even though you administer it.

## Write the exit clause yourself

The day you stop working together arrives in every contract, and it arrives better when it was planned for. It is also the strongest commercial argument you have against a closed vendor.

- **The practice holds the credentials**, in a password manager that belongs to them, from day one.
- **Data leaves in a documented open format**, and you prove it once a year by actually running the export.
- **The procedure is written down** in a document the practice keeps, not carried in your head.
- **The licence outlives your company.** With open source or source-available software, another engineer can pick it up without renegotiating with anyone.

> **A supplier who leaves without handing the system to the practice is not a supplier, they are a lock.** What makes your service attractive against a closed licence is precisely that the practice could replace you and lose nothing.

## Where DentalPin fits

DentalPin ships under BSL 1.1, and its `LICENSE` file fills in the same blanks discussed above: the use limitation bars "providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work", the change date is four years from publication, and the change licence is Apache 2.0. For an integrator that means installing, hosting and maintaining one named practice's instance sits somewhere different from standing up a competing dental SaaS, and that if your model approaches that line the file itself points you at alternative licensing arrangements with the licensor. What the practice pays for the product is on the [pricing page](/en/pricing/).

## Sources

- [Business Source License 1.1, licence text](https://mariadb.com/bsl11/), MariaDB. Consulted 2 September 2026.
- [A Practical Guide to Controller-Processor Contracts](https://www.dataprotection.ie/en/dpc-guidance/data-processing-agreements), Data Protection Commission (Ireland). Consulted 2 September 2026.
- [Guidelines 07/2020 on the concepts of controller and processor in the GDPR](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), European Data Protection Board, final version adopted 7 July 2021. Consulted 2 September 2026.
- DentalPin repository `LICENSE` file. Consulted 2 September 2026.
