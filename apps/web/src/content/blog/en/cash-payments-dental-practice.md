---
title: "Cash payments in a dental practice: the threshold, the instalment trap and what to record"
description: "No US or UK ceiling on cash, but a $10,000 IRS reporting duty that counts instalments across 12 months. What Form 8300 asks and what counts as cash."
pubDate: 2026-10-06
translationKey: pago-en-efectivo-clinica-dental
tags: [billing, payments, cash, compliance, practice-management]
---

Neither the United States nor the United Kingdom caps what a dental practice may accept in cash. What the US has instead is a reporting duty, and it catches treatment plans rather than single payments: a trade or business that receives more than $10,000 in cash in one transaction or in related transactions must file IRS Form 8300 within 15 days. Instalments count together across any 12-month period, so a $12,000 implant case paid at $1,000 a month in currency crosses the line in month eleven, and the clock starts that day.

This is not legal, tax or accounting advice. It is a reading of the official sources listed at the end, consulted on 6 October 2026.

## This is not the daily close, the card terminal or the ledger

Four things get discussed as one at the front desk, and only one of them is a filing obligation.

- **Counting the drawer** at the end of the day is [daily cash reconciliation](/en/blog/daily-cash-reconciliation-dental/).
- **Matching the bank settlement to the day's takings** is [card payments at the front desk](/en/blog/card-payments-dental-front-desk/).
- **What the patient still owes and when** is [payment plan tracking](/en/blog/patient-payment-plans-tracking/).
- **Whether that cash triggers a report** is none of the above. It does not depend on your bookkeeping, it depends on the total received in currency.

## A dental practice is squarely inside the rule

There is no healthcare carve-out, and the definition is broad. The Form 8300 instructions define the term plainly:

> **"Trade or business. Generally includes any activity carried on for the production of income from selling goods or performing services."** Performing services is the operative phrase. A private dental practice receiving patient payments is a trade or business for these purposes.

The threshold is "more than $10,000", not "$10,000 or more". A single payment of exactly $10,000 in currency does not trigger a filing on its own, and the next dollar from the same payer on the same case does.

## The instalment rule is the part that catches practices

Two provisions do the work here, and dentistry runs straight into both.

The first is the definition of related transactions: *"Any transactions conducted between a payer (or its agent) and the recipient in a 24-hour period are related transactions. Transactions are considered related even if they occur over a period of more than 24 hours if the recipient knows, or has reason to know, that each transaction is one of a series of connected transactions."*

A signed treatment plan is the clearest possible example of knowing. The practice wrote the schedule, so it cannot later treat each monthly payment as an unrelated event.

The second is the multiple payments rule, and it puts a number on the window: *"If you receive more than one cash payment for a single transaction or for related transactions, you must report the multiple payments any time you receive a total amount of cash that exceeds $10,000 within any 12-month period. Submit the report within 15 days of the date you receive the payment that causes the total amount of cash to exceed $10,000."*

![Dental treatment plan showing its stages and the amount for each one](/screenshots/treatment-plan.png)

*A treatment plan with its stages: the figure the rule watches is the plan total received in cash, not the stage.*

Splitting a plan into sub-threshold cash payments is not a workaround. It is the conduct the related-transactions definition exists to capture, and the instructions list structuring transactions to avoid the reporting requirement among the violations that can carry criminal prosecution.

## What counts as cash, and what does not

This is where practices over-report and under-report in the same week. The instructions define cash as US and foreign coin and currency received in any transaction, plus a cashier's check, money order, bank draft or traveler's check with a face amount of $10,000 or less received in a **designated reporting transaction**.

A designated reporting transaction is a retail sale of a consumer durable, a collectible, or a travel or entertainment activity. Dental treatment is none of those three, so for a dental practice that second limb generally does not bite, and the instrument only becomes cash where the practice knows it is being used to dodge the report.

| What the patient hands over | Cash for Form 8300? | Why |
|---|---|---|
| Notes and coin | ✓ Yes | US and foreign coin and currency, in any transaction |
| A personal check on the patient's own account | ✗ No | *"Cash does not include a check drawn on the payer's own account, such as a personal check, regardless of the amount"* |
| Cashier's check or money order, no reason to suspect avoidance | ~ Generally no for dental services | Only cash if received in a designated reporting transaction |
| Any instrument the practice knows is being used to avoid the report | ✓ Yes | Named expressly in the definition |
| Card or bank transfer | ✗ No | Not within the definition |

> **The personal check line is the one worth printing out.** A patient handing over a $30,000 personal check is not a reportable cash payment, however large it looks across the desk. A patient handing over $10,500 in notes across two visits on the same case is.

## What filing actually involves

1. **File within 15 days** of the payment that takes the cash total past $10,000.
2. **Collect the payer's taxpayer identification number.** If you have asked and cannot get it within 15 days, file anyway and explain in the Comments section why it is missing.
3. **Furnish a written statement to each person named** on the form, by 31 January of the year following the reportable transaction.
4. **E-file if you already e-file other information returns**, that is, if you file at least 10 information returns of any type other than Form 8300 in the calendar year. There is an exemption where the technology conflicts with religious beliefs.
5. **Keep a copy for five years** from the date filed.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*An invoice list with each document's state: what a filing needs is the payment method behind each line, not the yearly total.*

## Outside the United States

The UK's nearest equivalent is the high value dealer regime, and it does not reach a dental practice. HMRC guidance defines a high value dealer as a business or sole trader that accepts or makes high value cash payments of 10,000 euros or more *"in exchange for goods"*, and states that businesses are exempt where they *"only receive payments for services or for a mix of goods and services where the value of the goods is less than 10,000 euros"*. A practice selling treatment is outside it.

One date is worth putting in the diary if you practise in Ireland or anywhere else in the EU. Article 80 of Regulation (EU) 2024/1624 sets a Union-wide limit of **EUR 10,000** on cash accepted by persons *"trading in goods or providing services"*, whether in a single operation or in *"several operations which appear to be linked"*, and it applies from **10 July 2027**. That is a prohibition, not a reporting duty, and member states with lower national limits keep them.

## What the software has to leave behind

What decides whether a practice can answer a query is not the rule, it is whether the payment method was captured at the moment of the receipt. Three concrete things:

- **A payment method on every payment line**, not on the total. A receipt reading "$12,000 collected" with no split between currency, card and transfer cannot support a filing decision either way.
- **Instalments hanging off one plan**, so the running cash total is visible. Twelve loose $1,000 receipts are precisely the view that hides month eleven.
- **Receipts retrievable by payer and by date for five years**, because a query arrives about one case, not one tax year.

In Dentalpin every payment carries its method, instalments stay linked to the treatment plan they came from, and the invoice list filters by state and date, so the cash total behind one case is visible without adding receipts up by hand. The code is open, so this is audited rather than taken on trust, and the [price is published](/en/pricing/). What no software decides is whether a report is due: that follows from the total received in currency.

## Sources

- Internal Revenue Service, Instructions for Form 8300 (Rev. December 2023), "Who must file", "Multiple payments", "Retention requirement" and the Definitions of Cash, Related transactions, Designated reporting transaction and Trade or business: [irs.gov](https://www.irs.gov/pub/irs-pdf/i8300.pdf). Consulted on 6 October 2026.
- Internal Revenue Service, "Form 8300 and reporting cash payments of over $10,000": [irs.gov](https://www.irs.gov/businesses/small-businesses-self-employed/form-8300-and-reporting-cash-payments-of-over-10000). Consulted on 6 October 2026.
- HM Revenue and Customs, "Money laundering supervision for high value dealers": [gov.uk](https://www.gov.uk/guidance/money-laundering-regulations-high-value-dealer-registration). Consulted on 6 October 2026.
- Regulation (EU) 2024/1624 of the European Parliament and of the Council of 31 May 2024, Article 80 "Limits to large cash payments in exchange for goods or services" and Article 90 (application from 10 July 2027): [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1624). Consulted on 6 October 2026.
