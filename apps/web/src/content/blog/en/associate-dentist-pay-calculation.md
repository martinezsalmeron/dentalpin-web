---
title: "Paying associate dentists: the arithmetic your software has to hold"
description: "How an associate dentist's pay is calculated: attributing treatment, what comes off before the percentage, billed versus collected, and the monthly statement."
pubDate: 2026-09-15
translationKey: liquidacion-doctores-colaboradores
tags: [associates, reporting, practice-management, dental-software]
---

An associate's pay is a percentage applied to a base, and almost every argument about it is an argument about the base. Four decisions define that base: which treatment is attributed to which clinician, what is deducted before the percentage applies, whether the percentage runs on what was invoiced or on what was collected, and how a treatment two people worked on is split.

If your software cannot answer those four questions line by line, the monthly statement cannot be checked. A statement nobody can check gets re-argued every month, and the argument is never really about the money.

## The percentage is the last thing worth negotiating

Two agreements with different percentages can pay very different amounts, and the bigger number does not always win. Take a treatment invoiced at £1,000 with £300 of laboratory work.

- **45% of a base net of lab** pays (£1,000 − £300) × 0.45 = **£315**.
- **40% of the gross base** pays £1,000 × 0.40 = **£400**.

The lower headline percentage pays £85 more on that case. This is not a contrived example. On crown and bridge, implants and aligner cases, lab and materials are a large share of the invoice, and there the base swamps any sensible difference in percentage.

> **The higher percentage is not always the one that pays more.** Before arguing about 40 versus 45, write down what the figure is applied to, then check the software can produce that figure without anyone retyping it.

## The clinician belongs on the treatment line, not on the patient

Attribution usually fails for one reason: the software stores the clinician in the wrong place. If it lives on the patient record as an assigned dentist, or on the appointment, the numbers go wrong the moment somebody covers a sick day, an emergency walks in, or the hygienist does the perio phase of a long plan.

The clinician has to be a field on the treatment line, next to the code and the amount. Three questions worth asking before you sign anything:

- **Can every line be attributed separately?** A treatment plan with nine lines can easily involve three clinicians, and that is normal rather than exceptional.
- **Does it default to who did the work or to who owns the patient?** The second is convenient and is exactly what produces wrong statements.
- **Is a change of attribution logged with who changed it and when?** Without an audit trail, a legitimate correction looks identical to someone moving money, which is what poisons the conversation.

![Treatment plan showing its stages and the treatments in each one](/screenshots/treatment-plan.png)

*A treatment plan split into stages, each grouping treatments that may be carried out in separate appointments.*

## What comes off before the percentage

This is where contracts go vague. "Less laboratory costs" reads clearly until the first lab invoice arrives with an implant component on it, or until reception discounts a plan and somebody has to absorb it.

| Item | Gross base | Net of lab | Net of lab and materials |
|---|---|---|---|
| Laboratory work | ✗ Not deducted | ✓ Deducted | ✓ Deducted |
| Implant components and aligners | ✗ Not deducted | ~ Depends how the supplier invoices | ✓ Deducted |
| Consumables | ✗ Not deducted | ✗ Not deducted | ✓ Deducted on an agreed basis |
| Patient discounts | ~ Must be agreed | ~ Must be agreed | ~ Must be agreed |
| Card processing fees | ~ Must be agreed | ~ Must be agreed | ~ Must be agreed |

Two details almost nobody writes down, and both change the figure every month. The first is whether deducted amounts are taken gross or net of VAT, because a lab invoice of £300 plus VAT is not the same deduction as £300 all in.

The second is who absorbs patient discounts. If the front desk closes a plan at 10% off for payment up front, that 10% can come entirely off the practice, entirely off the associate, or be shared. All three are defensible. The only indefensible option is not having decided.

## Invoiced or collected?

This is the decision that moves the most money and asks the most of the software. It sets who carries the risk of an unpaid invoice and when the associate actually gets paid.

| | On what is invoiced | On what is collected | Hybrid |
|---|---|---|---|
| When the associate is paid | ✓ When the invoice is raised | ✗ As the money arrives | ~ On invoice, adjusted later |
| Who carries a bad debt | ✗ The practice | ✓ Shared | ~ Clawed back afterwards |
| What the software must do | ~ Attribution per line | ✗ Also allocate payments to lines | ✗ Both, plus a history of adjustments |
| How easy it is to check | ✓ Easy | ~ Moderate | ✗ Hard |

Paying on collections sounds fairer and breaks more systems. To run it, every part payment has to know which treatment lines it settles, and that is a different capability from knowing what the patient owes in total.

> **A £3,000 plan paid over twelve months, worked on by two clinicians, is the test case.** If the software knows £250 arrived this month but not which treatments it pays for, a collections-based agreement cannot be calculated and ends up in a spreadsheet beside the practice management system.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*An invoice list where each row carries its payment state, separating what is settled from what is part paid or overdue.*

## Treatments two clinicians touched

It happens more than people expect. An endodontic case referred internally, an implant placed by one clinician and restored by another, orthodontics run by a specialist who visits two days a month. One invoice line, two people's work.

1. **Agree the rule before the case, not after it.** Attribute to whoever completes, split by appointment, or split on a fixed percentage by treatment type. All three work. Improvising case by case does not.
2. **Check whether the software can split a line.** If a treatment cannot carry two clinicians with two shares, the clean answer is to invoice surgical and restorative phases as separate items.
3. **Record the appointment, not just the treatment.** If every appointment carries its clinician, an appointment-based split calculates itself and stops being a negotiation.
4. **Write the awkward case into the contract.** What happens when an associate leaves halfway through a long plan is the clause nobody drafts and everybody eventually needs.

## What the monthly statement has to show

The test of a good statement is that the associate can rebuild it from their own treatments without asking anyone. That means every line needs:

1. **Date and patient**, with an identifier that opens the clinical record.
2. **Treatment and code**, as it appears on the accepted plan.
3. **Attributed clinician**, and where a line is split, each share.
4. **Amount invoiced**, before discounts.
5. **Discounts applied**, with the reason rather than a lump figure.
6. **Amount collected in the period**, where the agreement runs on collections.
7. **Deductions**, each with its description and the document it came from.
8. **Base, percentage and amount due**, in three separate columns.

Underneath, three things that are usually missing: a total per clinician, a section for adjustments relating to earlier periods (a bad debt recovered, a credit note raised), and a figure that reconciles to the period's takings. Without that last line the statement is an assertion.

> **If the statement cannot be recalculated from the treatments, it is not a calculation, it is a number.** The practical test: hand it to someone who did not produce it and ask them to reach the same total. If they cannot, the report is the problem, not the person.

## This post will not tell you what percentage to agree

It will not, because no official source publishes one. The figures that circulate come from consultants and the trade press, cite each other, and age without anyone revisiting them.

What can be said plainly is that comparing two percentages without comparing their bases means nothing, and that the practice down the road is not a useful benchmark unless you know what it deducts first.

## The tax and status side is national, and in the UK it changed in 2023

In the UK, associates have generally engaged with practices as self-employed, and HMRC used to publish occupation-specific guidance that made this straightforward. That guidance is gone.

HMRC's Employment Status Manual page for dentists, ESM4030, now reads in full: "This guidance has been withdrawn with effect from 6 April 2023. Please refer to the guidance within section ESM0500 of this manual and HMRC's Check Employment Status for Tax tool (CEST) ESM11000 for further advice." The page was last updated on 22 July 2026 and was consulted on 15 September 2026.

The practical effect is that employment status for tax now has to be assessed on the facts of the engagement, the same way it is in any other sector. What your software can do about it is narrow but real: keep an accurate record of what each clinician actually did, when, and on whose patients, because that record is the evidence any status question will turn on.

Whether a given arrangement is self-employment or employment is not settled by what the contract is called, and it is not what this post covers. **This is not legal or tax advice.** Take it to your accountant and to the official guidance before you sign anything.

## What to ask the software for

In one sentence: the clinician must be a field on the treatment line, payments must be allocated to lines, and the monthly report must be recalculable from the underlying data. With those three, any sensible agreement can be settled. Without them, no agreement can be verified.

In Dentalpin, attribution lives on the treatment line and payments are allocated to the lines they settle, which is what makes a collections-based split calculable without a spreadsheet alongside. Everything is included with no per-user charge, and the [pricing page](/en/pricing/) sets out what that means.

## Sources

- HMRC, *ESM4030 - Particular occupations: dentists*, Employment Status Manual, GOV.UK, last updated 22 July 2026. Consulted 15 September 2026. <https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm4030>
