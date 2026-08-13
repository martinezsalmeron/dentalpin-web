---
title: "The digital dental chart: what it must record and why"
description: "What a digital odontogram has to store tooth by tooth, why the history matters more than today's state, and how to test the chart in your own software."
pubDate: 2026-08-13
translationKey: odontograma-digital
tags: [odontogram, dental-chart, clinical-records, dental-software]
---

A digital dental chart has to record, for every tooth and every surface, what was found, what was done, when, and who signed it, in a consistent notation, and it must never overwrite what came before. If yours only shows how the mouth looks today, it is a drawing, not a clinical record.

Here is what belongs in that record, why the history outweighs the current state, and how to test the chart you already have in about ten minutes.

## A dental chart is not a periodontal chart, and neither is a treatment plan

All three are drawn on the same mouth and answer different questions. When one screen tries to do all three, usually none of them is current.

| | Dental chart | Periodontal chart | Treatment plan |
|---|---|---|---|
| Question it answers | What is on each tooth and surface | What is holding each tooth in | What you will do, and in what order |
| Unit of record | Tooth and surface | Six sites per tooth | Treatment and stage |
| When it changes | At every finding and every treatment | At every periodontal review | When quoting and when delivering |
| What breaks without it | You cannot say what was there before you touched the tooth | You cannot show bone levels moving | No sequence, no traceable consent |

> **The chart describes, the plan proposes.** Marking planned work on the chart is the fastest way to lose track of what was actually delivered. Planned goes in the plan, done goes in the chart with the date it was done.

![Patient record showing the dental chart, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*The chart sits at the centre of the record, with medical alerts visible on the same screen.*

## The smallest unit: tooth, surface, date, author

The notation most of the world writes in is the WHO and FDI two-digit system: the first digit is the quadrant, the second is the tooth. WHO sets it out in *Oral health surveys: basic methods* and points to ISO 3950 for the standard itself. The same manual explains why examiners call tooth 12 as "one-two" and tooth 38 as "three-eight" rather than "twelve" and "thirty-eight": digit by digit survives a noisy surgery, spoken numbers do not.

| Field | Why it matters | Should it be mandatory? |
|---|---|---|
| Tooth in two-digit notation | Ends the "upper right molar" problem | ✓ Always |
| Surface | Separates a new lesion from a failing restoration | ✓ Always |
| Finding and status | Caries, restoration, missing, fracture, root filling | ✓ Always |
| Date found and date treated | Two different dates, usually stored as one | ~ Most systems keep one |
| Clinician who recorded it | Without an author there is no attributable responsibility | ✓ Always |
| Reason a tooth is missing | Extracted, congenitally absent and unerupted are not the same | ✗ Rarely captured |

Those last two rows are what separates a clinical chart from a drawing template. A tooth marked missing with no reason and no date will not help you plan an implant and will not help you answer a complaint.

## Today's state is not the history

A chart that overwrites itself loses exactly the information people come back for. The question that arrives years later is never how the mouth looks now. It is how it looked before you touched it.

The General Dental Council puts the duty plainly in its standards for the dental team, at 4.1: "You must make and keep contemporaneous, complete and accurate patient records." The guidance at 4.1.1 adds that radiographs, consent forms, photographs, models and referral letters all form part of the patient record where they exist. Contemporaneous is the load-bearing word. A record assembled from memory next Tuesday is not one.

> **Correcting is not deleting.** When a finding goes on the wrong tooth, the fix is a recorded correction with its own date and author, not a silent replacement. If your software only offers the second, every correction quietly destroys evidence.

![Patient record on the activity tab, with a timeline filtered by visits, treatments and communications](/screenshots/patient-timeline.png)

*The same record seen as a timeline: each entry keeps its own date instead of collapsing into a current state.*

## How long you keep it is a national question

Record retention is set by national law and by your regulator, not by your software vendor, and the periods differ widely across the countries this site publishes in. Two things are worth settling before you sign anything:

- **The retention clock survives a change of software.** If you migrate and the new system imports only the final state of each tooth, you have kept the chart and lost the record.
- **The legal minimum is not the clinical one.** A root canal from 2019 is still relevant in 2027 whatever the statutory floor says.

This is not legal advice. Check the period that applies to your practice with your own regulator or professional body.

## What leaves a chart useless

- **It gets drawn but never dated.** The picture looks complete and says nothing about when anything happened.
- **Work is recorded on the tooth next door**, because the person dictating and the person clicking use different numbering. It is the most expensive error here and the easiest to design out.
- **Missing teeth all share one symbol.** Extracted, congenitally absent and unerupted end up indistinguishable.
- **The finding does not link to the radiograph that proves it.** The image exists, in another folder, attached to nothing.
- **Corrections are made in place.** Nobody can reconstruct what was seen at the first visit.
- **Nobody has ever exported it.** A chart that exists only inside one vendor's program is a hostage, not a record.

## Test the chart you already have

1. **Open a patient treated years ago** and ask the software what tooth 36 looked like in 2023. If there is no way to answer, you have no history.
2. **Change a finding on purpose** and check that the change is recorded with a date and a user, and that the previous value is still readable.
3. **Record caries on the occlusal surface** and check it is stored as a surface, not as free text in a notes box.
4. **Mark a tooth as missing** and look for where the reason goes. If there is no field, it will live in a comment and you will never be able to filter on it.
5. **Open the radiograph from the tooth**, not from the image list.
6. **Ask for a full export** in a format you can open without the program, and see whether the chart comes out with its dates or flattened to a current state.

Step 6 is the one that gets postponed, and the only one you cannot do once you actually need it.

Dentalpin stores every finding against its tooth, surface, date and author, keeps the history readable on the patient timeline, and hands the whole thing back as a standard PostgreSQL dump whenever you ask. What the hosted and self-hosted versions include is on [pricing](/en/pricing/), and if you would rather try it against your own cases, [installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/).

## Sources

- World Health Organization, *Oral health surveys: basic methods*, 5th edition, 2013, chapter 5 and reference 18 (ISO 3950). [iris.who.int](https://iris.who.int/handle/10665/97035). Consulted 13 August 2026.
- General Dental Council, *Standards for the Dental Team*, principle 4.1 and guidance 4.1.1. [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle4/principle4.aspx). Consulted 13 August 2026.
