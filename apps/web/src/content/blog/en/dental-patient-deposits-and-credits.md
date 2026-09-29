---
title: "Patient deposits and credit balances: the money that is not income yet"
description: "A deposit is not practice income until the treatment is delivered. What to record when it is taken, how to tie it to the treatment plan, and the four ways it ends."
pubDate: 2026-09-29
translationKey: anticipos-y-pagos-a-cuenta-dental
tags: [deposits, credit-balances, treatment-plans, practice-management, dental-software]
---

A patient deposit is not practice income. It is money the practice owes the patient until the treatment is delivered, and until then it belongs on the liability side of the balance sheet rather than in the profit and loss. That gives the front desk three rules: the payment is tied to the treatment plan that justifies it, the patient credit balance is visible separately from what has been invoiced, and the money becomes income as treatment is delivered, not on the day it lands in the bank.

The uncomfortable part for a practice with healthy cash: some of what sits in the account in September is November's work, and if nobody separates the two, the year looks better than it was.

This is not tax or accounting advice. Every claim below has its source and the date it was consulted at the end.

## A deposit is a liability, not a sale

The international accounting standard states it plainly. IFRS 15, paragraph 106, requires that where a customer pays consideration before the entity transfers a good or service, the entity presents the contract as a **contract liability**, which Appendix A defines as "the entity's obligation to transfer goods or services to a customer for which the entity has already received consideration (or an amount of consideration is due) from the customer".

How it is reported in your own books, and when it becomes taxable, depend on your local rules and your basis of accounting, so that part is a conversation with your accountant. What does not depend on any of that is the obligation itself: until the treatment is delivered, the practice owes it.

> **A deposit taken and not yet worked improves cash, not profit.** Treating the two as the same number is how a practice ends up distributing or reinvesting money it still has to repay in the form of treatment.

None of this means running the books at the front desk. It means the practice management software has to show, at any moment, how much patient money is held and unearned.

## What gets recorded the day the money arrives

A deposit with no context is a cash entry nobody can explain six months later. Six fields fix that:

- **The treatment plan it belongs to.** This is what turns a payment into a specific commitment. A loose deposit with no treatment attached is the single biggest cause of front desk arguments.
- **The exact amount and date**, not the month.
- **How it was paid**: cash, card, bank transfer or third party finance. If it came through the card terminal, the entry has to reconcile against the acquirer's settlement.
- **Who took it.** A name, not "reception".
- **What it covers and what it does not.** If the plan has stages, saying which stages are covered prevents the "I thought the crown was paid for" conversation.
- **What happens if the treatment does not go ahead.** Written down before, not when the patient asks.

![Treatment estimate on screen showing the planned treatments, the totals, the validity date and the linked plan](/screenshots/budgets.png)

*An accepted estimate with its treatments and its total. This is the document any payment on account has to stay attached to.*

## The four ways a deposit ends

There are only four, and the system has to count all of them. The trouble is always in the second and the fourth.

| Situation | What happens to the money | Is it income? |
|---|---|---|
| Treatment completed | Applied against the treatment invoice and the credit balance returns to zero | ✓ Yes, on invoicing |
| Treatment partly delivered | Applied to what was delivered; the rest stays as a patient credit | ~ Only the delivered part |
| Patient withdraws and asks for it back | Refunded on the written terms and the balance returns to zero | ✗ No |
| Patient disappears without asking | Remains a credit in the patient's favour until it is resolved | ✗ No |

The fourth is where most practices go wrong. Writing off an old patient credit is an accounting decision with consequences, so it is taken with your accountant and with the history in front of you, not by deleting a line.

## When tax becomes due, and why it usually does not here

Where a deposit triggers tax is a national question, and the answer differs between the EU, the UK and the US. The European rule is the clearest published example: Directive 2006/112/EC, Article 65, provides that "where a payment is to be made on account before the goods or services are supplied, VAT shall become chargeable on receipt of the payment and on the amount received".

That rule only bites where the supply is taxable at all, and most dentistry is not. Article 132(1)(c) of the same directive exempts the provision of medical care in the exercise of the medical and paramedical professions as defined by the member state concerned, and the test that decides is whether the treatment has a therapeutic purpose.

> **What decides is not the deposit, it is whether the treatment itself is exempt.** Purely cosmetic work with no therapeutic purpose is the case that most often falls outside the exemption, and it is the one worth asking your accountant about before you set the front desk rule.

Outside the EU, check the rule that applies to you rather than the one above. In every jurisdiction the accounting question and the tax question are separate, and getting the first right does not settle the second.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*An invoice list that distinguishes paid from part paid. Without that distinction, a partly applied deposit is invisible.*

## The workflow, step by step

1. **The patient accepts the treatment plan** and the acceptance is recorded with its date.
2. **The deposit is agreed in writing**: the amount, which stages it covers and what happens if treatment is interrupted.
3. **It is taken and recorded against that plan**, never as a loose payment at the till.
4. **The patient gets a receipt** for the payment on account, naming what it is for and which plan it belongs to.
5. **The patient credit balance goes up** and is visible on their record as money held and not yet applied.
6. **As treatment progresses, what has been done is invoiced** and the deposit is applied against those invoices.
7. **At the end the balance is zero.** If it is not, either work is missing or money is, and both have to be settled before the case is closed.

## The mistakes that cost money

- **Taking a deposit with no accepted plan.** It leaves the practice without the document that says what it committed to, which is exactly the document needed if there is a dispute.
- **Banking it as another sale of the day.** The till reconciles and the month's profit lies.
- **Not separating credits from debts.** They are opposites: one is money the practice owes, the other is money owed to it. Tracking the second is a different job, covered in [patient debt and payment plans](/en/blog/patient-payment-plans-tracking/).
- **Invoicing the full plan when the deposit is taken.** It invoices work not done, and forces a credit note later when the plan changes.
- **Leaving credits alive for years.** A patient who comes back after three years with a receipt is right, and by then the money has been counted as income.

## What the system has to be able to show you

Three views, and that is enough: one patient's credit balance, the list of every patient holding a credit, and the total of deposits held and unearned at a given date. If all three need a spreadsheet export, the number is stale the moment someone takes a payment at the desk.

Dentalpin keeps every payment on account attached to the estimate that justifies it, applies it against invoices as treatment is delivered, and shows the patient's balance on their record next to the plan and the invoices. What each edition includes is on [pricing](/en/pricing/).

## Sources

- IFRS Foundation. *IFRS 15 Revenue from Contracts with Customers*, paragraph 106 and the Appendix A definition of "contract liability". [ifrs.org](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/). Consulted 29 September 2026.
- European Union. *Council Directive 2006/112/EC on the common system of value added tax*, Articles 65 and 132(1)(c). [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/dir/2006/112/oj/eng). Consulted 29 September 2026.
- European Commission, Taxation and Customs Union. *Chargeable event*, special rule for payments on account. [taxation-customs.ec.europa.eu](https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/chargeable-event_en). Consulted 29 September 2026.
