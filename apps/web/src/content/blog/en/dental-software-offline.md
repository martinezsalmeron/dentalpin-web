---
title: "The day the internet goes down: running a dental practice offline"
description: "What stops working in a dental practice when the line goes down, what keeps running, what to prepare in advance and how to reconcile the day once it comes back."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [business-continuity, infrastructure, scheduling, practice-management]
---

If your software runs in a browser against somebody else's server, an outage stops the whole practice, schedule and clinical records and charting included. If it runs on a server inside the building, you lose reminders, online booking, e-prescribing and probably the card terminal, but you can still open today's schedule and write in the record.

Which of the two you have is the question that decides everything else, and it is worth knowing the answer today rather than on the Tuesday it happens. What follows is exactly what breaks, what to have ready, what to write down while it lasts and in what order to reconcile it afterwards.

## Where the software runs decides what you lose

There is no single answer to "can we work without internet", because three different architectures hide behind the word software and each one behaves differently.

| What you need to do | Browser against a remote server | Server inside the practice | Program installed on each workstation |
|---|---|---|---|
| Open today's schedule | ✗ No | ✓ Yes | ✓ Yes |
| Read the record and the dental chart | ✗ No | ✓ Yes | ✓ Yes |
| Write notes, treatment plans and invoices | ✗ No | ✓ Yes | ✓ Yes |
| View x-rays already stored | ✗ No | ✓ Yes | ~ Depends where the images live |
| Reminders, online booking, patient portal | ✗ No | ✗ No | ✗ No |
| Off-site backup | ✗ No | ~ Resumes when the line returns | ~ Resumes when the line returns |

The row that surprises people is the x-rays. A sensor can be wired to the local network and write to a folder in the building, or it can upload to the manufacturer's service, and from the front desk those two look identical until the day there is no line.

![Deployment diagram: browser, Caddy on port 443, Nuxt frontend, API and PostgreSQL with its data volumes](/diagrams/install-stack.svg)

*The browser, Caddy, the frontend, the API and the database. The diagram does not say where that box physically sits, and that is precisely the question to answer before an outage.*

## What breaks, in the order you will notice

- **Online booking silently stops.** Nobody tells you about this one. Slots simply are not booked during those hours, and there is no way to know how many were lost.
- **Reminders do not go out.** SMS, WhatsApp and email are sent from outside the building, so tomorrow's batch does not leave even if the local software is fine.
- **The card terminal depends on how it is connected.** Terminals on the practice network go quiet; terminals with their own SIM usually keep taking payments. That is a one-line question for your payment provider and it is worth asking before you need it.
- **E-prescribing and insurance eligibility checks stop.** Anything that is a call out to somebody else's system queues up, and that includes electronic claim submission.
- **The off-site backup does not run that night** if the line is still down at closing. One night is not serious. Two weeks with nobody reading the failure emails is.
- **Email and a VoIP phone line are internet too.** Plenty of practices discover at that exact moment that their only phone number ran through the same router.

## Your vendor's SLA is not your line's SLA

Ninety-nine point nine per cent uptime sounds like nothing ever happens. It is 43 minutes a month and 8 hours 46 minutes a year. The 99.5 % that also gets published is about three and a half hours a month and nearly 44 hours a year.

Those figures cover the vendor's server anyway. Your connection is a separate contract, and a standard business broadband line usually carries no availability commitment at all.

> **Most small-practice outages start at the kerb, not in the data centre.** Roadworks, an opened fibre cabinet or a seven-year-old router appear in nobody's SLA, and they are the usual cause of a morning without a line.

## The outage kit

None of this is expensive and all of it has to exist beforehand, because the moment to go looking is not when the front desk has four people waiting.

1. **Print tomorrow's schedule before you close.** One sheet: name, time, chair and planned treatment. This is the single item that turns an outage into an inconvenience rather than a lost day.
2. **Have a tested second data path**, a router with a SIM or a phone hotspot. Tested means somebody has actually switched it on, not that it exists in a drawer.
3. **Put a UPS on the server and on the router**, because a live server behind a dead router helps nobody.
4. **Keep printed consent forms and blank progress notes**, the five or six you genuinely use.
5. **Keep the day's phone list outside the system**, which is what lets you call the five o'clock patient.
6. **Write down who does what**: who calls the provider, who calls the patients, who is responsible for recording what happened.

![Schedule in day view with the day's appointments laid out across time slots](/screenshots/schedule-day.png)

*This is the screen that has to be printable the night before, not the morning it is needed.*

## What to write down while it lasts

Working offline is not the problem. The problem is coming back and not knowing what happened between nine and one.

- **Who arrived and who did not**, with the real time, so no-shows end up recorded where they belong.
- **What was done for each patient**, in the detail you would put in the record, not a three-word summary.
- **Lot numbers and references for implants and materials** that the software normally fills in for you. This is the thing most often lost and the hardest to reconstruct afterwards.
- **Every payment taken**, amount, method and which treatment it belongs to.
- **Full details for new patients**, because a record typed from memory three hours later is a record with mistakes in it.
- **Who called and why**, cancellations included, since those are what throws out tomorrow's schedule.

> **Whatever is not written down during the outage is not recovered afterwards.** The software comes back with everything it had at nine o'clock, and what happened in between exists only on the paper somebody filled in.

## Reconciling the day once the line returns

Order matters, because some of it depends on the rest and because the temptation is to start with the easy parts.

1. **Check that last night's backup actually ran**, and start one now if it did not.
2. **Create the new patient records first**, because everything else hangs off them.
3. **Type up the clinical notes from paper**, patient by patient, the same day. By tomorrow nobody remembers what an abbreviation meant.
4. **Enter the payments** and reconcile them against the terminal and the cash drawer.
5. **Fix the schedule**: no-shows, cancellations taken by phone, and anything moved to another day.
6. **Check which reminders never went out** and decide which are still worth sending. A reminder for an appointment that has already happened does more harm than none.
7. **Keep the paper until you have verified everything is entered**, then destroy it like any other clinical documentation.

## What the rules expect you to have thought about

In the United States this is not a nice-to-have. The HIPAA Security Rule makes a contingency plan a standard, and three of its five implementation specifications are Required rather than Addressable: the data backup plan, the disaster recovery plan and the emergency mode operation plan, which is:

> **"Establish (and implement as needed) procedures to enable continuation of critical business processes for protection of the security of electronic protected health information while operating in emergency mode."** 45 CFR 164.308(a)(7)(ii)(C).

For practices in the UK, Ireland and the EU, the equivalent is GDPR Article 32(1), which lists among appropriate measures "the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services" and "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident".

A two-hour outage is not by itself a reportable breach. What does land squarely in those texts is being unable to reach the record of a patient who is in the chair, or losing a morning's work because nobody had thought about paper.

This is not legal advice. For your own situation, your compliance officer, data protection officer or solicitor are the people to ask.

## Five questions for your vendor before you need the answers

- **Exactly which parts of the product keep working if the practice loses its line?** A list is a good answer. "It is all in the cloud, don't worry" is not.
- **Where does the database physically sit**, and what would it take to reach it without you.
- **Do you publish an SLA, at what percentage, and what does it pay** when it is missed.
- **What happens to reminders that did not go out?** Do they retry, disappear, or queue up and all fire at once.
- **Can I export tomorrow's schedule to PDF or CSV myself**, without opening a ticket.

The answers to those five say more about a product than half of its features page.

Dentalpin can be installed on a machine in the practice, so an outage is a communications outage rather than a records outage: the schedule, the dental chart and invoicing stay open on the local network while nothing outside is reachable. The terms for the hosted and self-hosted versions are on the [pricing page](/en/pricing/), and if you want to see what the setup looks like first, [installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/).

## Sources

- 45 CFR 164.308(a)(7), HIPAA Security Rule, contingency plan standard and implementation specifications. [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2024-title45-vol2/xml/CFR-2024-title45-vol2-sec164-308.xml). Consulted 13 September 2026.
- Regulation (EU) 2016/679 (GDPR), Article 32(1)(b) and (c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 13 September 2026.
