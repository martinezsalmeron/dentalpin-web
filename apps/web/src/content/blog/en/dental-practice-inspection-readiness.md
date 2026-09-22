---
title: "When the inspector arrives: what a dental practice has to be able to show"
description: "What CQC asks a dental practice in England for, which regulations each request comes from, how much notice you get, and the records that only exist if something was logging them all year."
pubDate: 2026-09-22
translationKey: inspeccion-sanitaria-clinica-dental
tags: [inspection, cqc, compliance, records, practice-management]
---

An inspection of a dental practice in England mostly asks for paperwork, and a good deal of it arrives before anyone walks through the door. CQC sends a provider information request first, you get five working days to answer it, and the list includes your statement of purpose, staff numbers by role and hours worked, and a summary of complaints with the actions you took. The visit then tests whether the practice matches what the paperwork said.

Which means the useful preparation is not the week before. It is whether the last twelve months left a trail.

This is not legal advice, and it is about England: Scotland, Wales and Northern Ireland have their own regulators and their own rules. Sources are at the end with the date they were consulted.

## What the inspection is actually checking

Dental practices in England are registered with the Care Quality Commission, and registration is against the Health and Social Care Act 2008 and the regulations made under it. The two regulations that generate most findings are regulation 12, safe care and treatment, and regulation 17, good governance.

Regulation 17 is the one worth reading closely, because it is where the record-keeping duty lives. It requires the provider to:

> **"maintain securely an accurate, complete and contemporaneous record in respect of each service user"**, including a record of the care and treatment provided and of decisions taken in relation to it, and to "maintain securely such other records as are necessary" about people employed in the regulated activity and the management of it.

Three words in that sentence do the work. *Accurate* is the easy one. *Complete* means the record holds the decisions, not only the treatments. *Contemporaneous* means written at the time, which is the one that cannot be fixed later.

## The notice you get, and what comes with it

CQC changed how it regulates primary care dental services in 2024, and at the time of writing several of its dental guidance pages carry a notice saying they are under review. What the published monitoring guidance still describes is this sequence:

1. **CQC gathers information all year** from people who use services, from NHS England, the General Dental Council, the NHS Business Services Authority and Healthwatch England, and updates its analysis throughout the year.
2. **A provider information request arrives** before the visit. The list is likely to include an up to date statement of purpose, information about membership of any accreditation or good practice scheme, details of staff including numbers by role and hours worked, and a summary of complaints received with the actions taken and improvements made.
3. **You have five working days to respond**, and CQC tells you what to send and where.
4. **The visit** is led by an inspector supported by a specialist dental adviser, who speak to staff and review policies and records.

> **The information request is not a formality.** It is the first evidence CQC sees, it is answered against the clock, and two of its items are counts rather than documents: staff hours by role, and complaints with what you did about them. A practice that does not track complaints as a list spends those five days reconstructing one from memory.

![A patient record with the activity tab open: clinical alerts, active treatment plan and a timeline filterable by visits, treatments and communications](/screenshots/patient-timeline.png)

*A patient timeline, with the date of every entry and the person who made it.*

## The part that only exists if something logged it

The walk round checks the state of the place. The records check what happened over a year, and no amount of tidying produces those retrospectively. Four questions decide whether a practice has an answer:

- **Who wrote this entry, and when?** If the team shares one login, the record is not attributable, and regulation 17 asks for a record "in respect of each service user" that stands up as evidence.
- **Where is the consent for this treatment?** Found by patient and by procedure, not by scrolling a shared drive.
- **Which sterilisation cycle covers this instrument?** Decontamination records are their own subject, covered in [sterilisation tracking](/en/blog/sterilization-tracking-dental/).
- **Who has opened this patient's record?** A separate question again, and it is in [audit trails for dental records](/en/blog/audit-trail-dental-records/).

The imaging side has its own regime and its own paperwork, set out in [dental X-ray records](/en/blog/dental-x-ray-radiation-protection-records/), and the data protection layer in [GDPR in the dental practice](/en/blog/gdpr-dental-clinic/).

![A reports screen with lists and totals filtered by date range](/screenshots/reports.png)

*A list filtered by date range turns "I think we did" into a number.*

## What no software is going to save you

Worth saying plainly, because some vendors imply otherwise. Most of what an inspection asks for is a folder, not a database row.

| What gets shown | Who produces it | Does the practice software hold it? |
|---|---|---|
| Statement of purpose | The practice, in writing | ✗ No |
| Infection control policy and audits | The practice, in writing | ✗ No |
| Equipment servicing and test records | Engineers and suppliers | ✗ No |
| Recruitment files, DBS, indemnity | The practice, per person | ✗ No |
| Complaints log with actions taken | The practice, ongoing | ~ Only if it is kept there |
| Author and date of every clinical entry | The practice, daily | ✓ Yes |
| Consent held against patient and procedure | The practice, daily | ✓ Yes |
| Who accessed which record | The practice, daily | ✓ Yes |

The split matters more than the individual rows. The top half is a filing problem and a practice either keeps it current or does not. The bottom half cannot be filed late, because it is a byproduct of how the software was set up on the day the work happened.

If the practice is new, the order of the steps is in [opening a dental practice](/en/blog/opening-dental-clinic-software/).

## Where Dentalpin fits

Of that table, practice management software does the bottom half: every entry carrying an author and a timestamp, consent living against the patient and the procedure rather than in a shared folder, and access to records leaving a trail. In Dentalpin those are the patient timeline and the access log. It is open source and can run on the practice's own server; what it costs is on [pricing](/en/pricing/).

The statement of purpose, the servicing reports and the recruitment files stay a folder. The only thing that helps there is keeping it current before anyone asks.

## Sources

- Care Quality Commission, "How we monitor primary care dental services", page last updated 16 May 2025, for the sources of information, the provider information request and the five working day deadline. The page carries a notice that it is under review following the 2024 change of approach: [cqc.org.uk](https://www.cqc.org.uk/guidance-providers/dentists/how-we-monitor-primary-care-dental-services). Consulted 22 September 2026.
- Care Quality Commission, "Dentists: information for providers", page last updated 14 May 2025: [cqc.org.uk](https://www.cqc.org.uk/guidance-regulation/providers/dentists). Consulted 22 September 2026.
- The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, SI 2014/2936, regulation 17 (good governance): [legislation.gov.uk](https://www.legislation.gov.uk/uksi/2014/2936/regulation/17/made). Consulted 22 September 2026.
