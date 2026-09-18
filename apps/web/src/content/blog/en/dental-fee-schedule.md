---
title: "How a dental fee is set and how a fee schedule gets updated"
description: "The four parts a dental fee is built from, what the GDC requires a practice to tell patients about cost, and what software must do with quotes already out."
pubDate: 2026-09-18
translationKey: tarifario-clinica-dental
tags: [fee-schedule, treatment-plans, practice-management, dental-software]
---

A treatment price is built from four parts: the cost of an hour of chair time, the materials that treatment consumes, the laboratory invoice for that case, and the share of whoever performs it. What the practice adds on top is its margin, and in the UK nobody publishes a fee for you: private fees are set by the practice, while NHS charges are fixed nationally in bands.

Below is how each part is worked out, what the General Dental Council requires you to put in front of the patient, and the half almost no article covers: what happens to the quotes already out there on the day you raise your fees.

This is not legal, tax or business advice. The regulatory half is written for the UK; if you practise elsewhere, the arithmetic still holds but check your own regulator.

## The four parts of a price

None of the four is a matter of opinion. What you add afterwards is.

- **The cost of an hour of chair time.** Every fixed cost for the year (rent, salaries, software, insurance, equipment depreciation) divided by the hours a patient is actually in the chair. Not by the hours the practice is open.
- **The variable cost of the treatment.** The materials that treatment consumes and no other treatment does. It is the smallest part and the one most often left out.
- **The laboratory.** It arrives invoiced per case, so it belongs whole to the treatment that generated it rather than spread across the schedule.
- **The share of the clinician who does the work.** If an associate performs it, their percentage is part of the cost of that treatment, not part of the margin. How that is calculated is in [associate pay](/en/blog/associate-dentist-pay-calculation/).

There are two ways to spread the first part, and the choice is worth making deliberately. The simple one divides fixed costs evenly across every hour. The one closer to reality weights each type of treatment, because a chair does not cost the same doing a check-up as it does doing surgery with two people around it.

| Part | Where it comes from | How often it moves |
|---|---|---|
| Chair hour | Fixed costs divided by occupied hours | Once a year, or when the team changes |
| Materials | Actual consumption of the treatment | When a supplier raises prices |
| Laboratory | The lab invoice for that case | When the lab reissues its price list |
| Clinician | The associate's percentage | When the contract is renegotiated |

> **The hour you divide by is the occupied hour, not the open hour.** A practice with a chair idle 30 % of the time that divides its costs across opening hours has just calculated an hourly cost a third cheaper than the real one. Measuring it is a separate job, covered in [chair utilisation](/en/blog/chair-utilization-dental/).

![A dental quote listing treatments, the total and the date it is valid until](/screenshots/budgets.png)

*A quote with the date it expires. That date is the only thing separating a price you offered from a price that still stands.*

## What the GDC actually requires

Three sentences from Standard 2.3 decide most of what your software has to do.

The GDC requires that "a simple price list is clearly displayed in your reception or waiting area", that you "give patients a written treatment plan, or plans, before their treatment starts", and that the plan includes "the proposed treatment; a realistic indication of the cost; whether the treatment is being provided under the NHS (or equivalent health service) or privately" (consulted 18 September 2026).

And then the sentence that makes a static PDF unworkable:

> **"You must inform your patients immediately if the treatment plan changes and provide them with an updated version in writing."** A plan that changes mid course is not a note in the record. It is a new document the patient has to receive.

NHS charges are the other half of the picture and they are not yours to set. The NHS publishes three bands, £27.90, £76.60 and £332.10, with urgent treatment at £27.90; the page carries a last review date of 13 March 2025 and was consulted on 18 September 2026. A mixed practice is running two pricing systems at once, and the written plan has to say which one each item falls under.

## Updating a fee schedule without breaking anything

Raising a price is easy. Making sure the rise does not reach into quotes that are already out is the hard part.

1. **Set an effective date**, not the date you happen to edit it. A schedule that takes effect on the first of next month gives the team notice and gives the front desk time to close what is pending.
2. **Keep the previous version whole**, with its end date. Without that you cannot reconstruct why a quote from March says what it says.
3. **Revisit the parts before the prices.** If the lab went up 8 %, what changes is the laboratory line, not every fee by the same percentage.
4. **List the live quotes** still sitting under the old version and decide what happens to them before the new one goes live.
5. **Tell reception the same day**, with the list of what moved. A different price at the desk and on the screen is an argument with a patient.

> **A fee schedule is not edited, it is versioned.** If the price of a crown is overwritten, the practice loses the answer to the only question that matters when a patient disputes a bill: which price was in force the day they were handed the plan.

![A dental treatment plan split into phases with the treatments in each one](/screenshots/treatment-plan.png)

*A phased plan. The longer it runs, the more likely a price rise crosses it.*

## What happens to a quote you already gave out

This is where a badly built fee schedule costs you money or credibility, and usually both.

| State | Which price governs | What the software has to do |
|---|---|---|
| Issued, still valid | ✓ The price on the day it was issued | Freeze it until it expires |
| Issued, expired | ~ None, it has to be redone | Mark it expired, never silently revive it |
| Accepted by the patient | ✓ The accepted price, in full | Hold it even when the schedule changes |
| Phased plan in progress | ✓ The price of the accepted plan | Apply it to the remaining phases |
| Draft, never handed over | ✗ No price was committed | Recalculate against the current version |

The two green rows are the same idea. A quote you handed over is an offer with a date on it, and an accepted offer is an agreement. Software that re-prices an accepted plan because somebody edited the schedule is rewriting an agreement with a patient.

The amber row is the one practices neglect. An expired quote that can still be accepted with one click is a two-year-old price landing in this month's takings. What to do about the ones nobody accepts is in [following up quotes](/en/blog/follow-up-dental-treatment-quotes/).

## More than one schedule at a time

Any practice that takes NHS work, a capitation plan and private patients is running several schedules side by side, and the price of a root canal depends on which one the patient walks in under.

- **Each arrangement brings its own prices**, which the practice does not negotiate line by line and which change when the other side changes them.
- **The private fee still exists** for everything the arrangement does not cover, and it is what applies when the patient steps outside it.
- **Someone has to decide which one applies** when the plan is created. If that decision is made from memory at the front desk, invoices will be wrong.

## What to demand from the software

A fee schedule is live data, and most practice management software treats it as a flat price table. These are the questions that separate the two:

- **Does it keep versions with effective dates**, or does the old price vanish when you save?
- **Does an issued quote keep its figures** when the schedule changes, or does it silently recalculate?
- **Can you see who changed a price and when?**
- **Does it hold several schedules at once** and know which applies to this patient?
- **Can you export the whole schedule** to review it elsewhere, and to take it with you if you ever change systems? That is in [exporting your data](/en/blog/export-dental-software-data/).

In Dentalpin the fee schedule is versioned with effective dates and quotes keep the figures they were issued with, so a price rise never touches what is already in a patient's hands; what that includes is on [pricing](/en/pricing/).

## Sources

- General Dental Council, Standards for the Dental Team, Principle 2.3. Consulted 18 September 2026. <https://standards.gdc-uk.org/pages/principle2/principle2.aspx>
- NHS, "How much will I pay for NHS dental treatment?", page last reviewed 13 March 2025. Consulted 18 September 2026. <https://www.nhs.uk/nhs-services/dentists/dental-costs/how-much-will-i-pay-for-nhs-dental-treatment/>
