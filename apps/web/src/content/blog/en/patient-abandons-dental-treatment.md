---
title: "When a patient abandons treatment: what to record, what to close and what you can charge"
description: "How to document an abandoned course of dental treatment, close the plan without deleting completed stages, and claim only the work carried out."
pubDate: 2026-10-05
translationKey: paciente-abandona-tratamiento-dental
tags: [clinical-records, treatment-plans, invoicing, practice-management]
---

An abandoned course of treatment needs three things, and the invoice is not the first of them. Record the decision in the clinical notes with the date, the state the mouth was left in, the risks of stopping and the alternatives offered. Close the plan without deleting the stages already done. Then charge or claim only the work actually carried out, plus the costs already incurred.

This is not legal advice. It is a reading of the official sources listed at the end, consulted on 5 October 2026.

## An abandoned course is not a missed appointment

The distinction decides how the case gets filed. A treatment plan that was never accepted is [quote follow-up](/en/blog/follow-up-dental-treatment-quotes/). A single missed appointment is a [cancellation policy](/en/blog/dental-appointment-cancellation-policy/) matter.

What makes this different is that the work started. There is a prepared tooth with no crown fitted, an orthodontic case part way through alignment, a laboratory item already made. That changes what you document, what you can charge and what clinical risk sits on the record.

> **The prepared tooth is the whole problem.** While a preparation is unfinished, the notes have to show what the patient was told about the risk of leaving it that way. That sentence is the one most often missing.

## Records first

The General Dental Council sets the standard plainly. Standard 4.1 of *Standards for the Dental Team* requires you to "make and keep contemporaneous, complete and accurate patient records", and its guidance at 4.1.2 asks for detailed notes of discussions with patients, including "evidence that valid consent has been obtained".

An abandonment is a consent event, not just an administrative one. The patient is withdrawing from a plan they previously agreed to, so the record has to carry the conversation that went with it.

| What to record | Why it matters |
|---|---|
| Date of the last visit | ✓ Fixes the point the course stopped |
| Exact clinical state at that point | ✓ Tooth, stage, temporary fitted or not |
| Risks of not completing | ✓ This is what makes the refusal an informed one |
| Alternatives offered | ✓ Including completing the work elsewhere |
| Every contact attempt, with date and time | ✓ NHS BSA advises noting these in the patient records |
| Whether practice policy was followed | ✓ Required where an incomplete claim is submitted |
| Laboratory prescription retained | ✓ Part of the clinical record |

![Dental treatment plan broken into stages, showing the treatments in each stage and their status](/screenshots/treatment-plan.png)

*A phased plan: when it stops, the completed stages and the outstanding ones stay separated in the same document.*

## The sequence

1. **Write up the last procedure performed** and the state the mouth is in, before any administrative step.
2. **Try to make contact and log every attempt**, with date, time and method.
3. **Put the information in writing**, including the risks of not completing and how long the practice will hold the plan open.
4. **Check your own written policy** on failure to attend and short notice cancellation, and follow it.
5. **Issue a closing summary** covering what was done, what is outstanding and what the next clinician needs.
6. **Suspend the plan in the software** without deleting the completed stages.
7. **Charge or claim only what was carried out.**

## NHS England and Wales: the incomplete treatment claim

This is the part that does not travel. Where the course is an NHS one, there is a defined route for it, and the NHS Business Services Authority publishes the mechanics.

NHS BSA's guidance on incomplete treatment states that where a provider's contract with the commissioner "stipulates how many opportunities a patient should be given to fail to attend for treatment before a course of treatment claim is submitted as 'Incomplete Treatment', these contractual obligations should be complied with". It adds that NHS England's guidance is that "the provider should have made at least one attempt to contact the patient (letter or phone) and not submit the COT claim for between 6-8 weeks to afford the patient a reasonable opportunity to complete treatment".

The claim itself carries three entries: the date of the patient's last visit, the band showing the work completed, and in the treatment category the band appropriate to the treatment actually started. The bands are not interchangeable. NHS BSA is explicit that "the band indicated in the Treatment Category must be the same as, or higher than, the band indicated in the Incomplete Treatment field".

> **Two details practices get wrong.** A patient who misses an appointment but wants to rebook is not an incomplete course. And once an incomplete claim has been submitted and the failure to attend policy was followed, a patient who returns starts a new course of treatment.

Outside the NHS, and in every other English-speaking market, there is no equivalent tariff instrument. What you can charge comes from the treatment plan the patient accepted and from the costs you can evidence, which means the lab invoice does the work the regulation does elsewhere.

| Item | NHS course in England | Private treatment |
|---|---|---|
| Work actually completed | ✓ Claimed as incomplete treatment, banded | ✓ Invoiced in full |
| Laboratory item already made | ✓ Prescription retained as part of the record | ~ Recoverable where the accepted plan says so |
| Work planned but not started | ✗ Not creditable | ✗ Not invoiced |
| Patient charge | ~ Calculated against the band crossed | ~ Set by the plan the patient accepted |

If a deposit was taken, it stops being a [credit on account](/en/blog/dental-patient-deposits-and-credits/) and becomes either applied payment or a refund. Chasing what is still owed afterwards is [a separate job](/en/blog/patient-payment-plans-tracking/), and it comes second.

## What the software has to do

![Patient timeline showing clinical alerts, the active plan and filters for visits, treatments, financial activity and communications](/screenshots/patient-timeline.png)

*The patient timeline with logged communications sitting alongside treatments and financial activity.*

An interrupted plan tests four specific things in any practice management system:

- **Suspend without deleting.** Completed stages stay billable and traceable, outstanding ones stop being either. If cancelling the plan is the only option, the history goes with it.
- **Timestamp every contact.** Calls, messages and letters, in the same record as the clinical notes, because the claim and the complaint both depend on them.
- **Keep deposits apart from income.** Money held against work not yet done is not revenue.
- **Keep the record reachable** for the full retention period, which has [its own rules](/en/blog/how-long-to-keep-dental-records/).

In Dentalpin a treatment plan is suspended stage by stage, so completed work stays billable and the rest does not, and every message logs into the same patient timeline. It is open source and the [pricing is published](/en/pricing/).

## Sources

- General Dental Council, *Standards for the Dental Team*, Principle 4, standard 4.1 and guidance 4.1.1 to 4.1.3: [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle4/principle4.aspx). Consulted 5 October 2026.
- NHS Business Services Authority, Dental Services *In the spotlight*, Article 5: Incomplete Treatment, October 2019: [nhsbsa.nhs.uk](https://www.nhsbsa.nhs.uk/sites/default/files/2019-10/October_bulletin_Spotlight_5_Incomplete_Treatment.pdf). Consulted 5 October 2026.
- NHS Business Services Authority knowledge base, "When can I claim a course of NHS dental treatment as Failed To Return (FTR)?": [faq.nhsbsa.nhs.uk](https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01765/en-us). Consulted 5 October 2026.
