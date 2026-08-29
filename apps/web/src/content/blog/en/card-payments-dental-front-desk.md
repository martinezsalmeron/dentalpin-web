---
title: "Card payments at the dental front desk: reconciling without matching by hand"
description: "Why the bank deposit never equals the day's takings, which three totals to compare and how often, and what to ask an acquirer before signing for a terminal."
pubDate: 2026-08-29
translationKey: tpv-datafono-clinica-dental
tags: [card-payments, reconciliation, front-desk, practice-management, dental-software]
---

A practice that takes cards has three different totals every day, and only two of them are supposed to match: what the practice management software says was taken on card, and the terminal's own batch total. The third, what lands in the bank, will not equal either one, and it is not meant to.

Nearly every front desk that has given up reconciling card takings gave up for the same reason. They tried to match the bank deposit against a single day's takings, and that never works.

## Three totals, and which pairs with which

Separating them is half the job. Each one is produced somewhere different, by a different route, which is exactly what makes the comparison worth doing.

- **Card payments according to the software.** What reception recorded today as paid by card, patient by patient.
- **The terminal batch total.** What the terminal itself authorised since the last close, usually broken down by card type.
- **The bank credit.** What the acquirer pays into the account, on its own calendar and with its own way of taking fees.

The working rule fits in two lines. Software against terminal, **every day**, and they must agree exactly. Terminal against bank, **once a month**, and they will not agree.

> **Matching the bank against a single day's takings is the impossible task that kills the habit.** The credit arrives late, batched, and sometimes net of fees. Comparing it to one day cannot come out right even when everything has been done correctly.

## The daily close, in five minutes

Doing it in the same order every day is what keeps it to five minutes, because nobody has to decide anything while it happens.

1. **Close the terminal batch at the same time every day**, after the last patient and before anything gets switched off. A terminal closed whenever someone remembers mixes days together and stops being comparable.
2. **Take the batch total**, broken down by card type if the terminal prints it that way.
3. **Pull the day's card payments from the software**, with amount and patient.
4. **Compare the two totals.** If they agree, write both numbers down and you are finished.
5. **If they disagree, look for the transaction, not the difference.** Sort both lists by amount and the extra or missing one stands out on its own.
6. **Fix it the same day**, with a note saying what happened. A variance explained tomorrow is a variance. Explained in October it is an argument.

Step five is the one people skip. Hunting for "we are £47 down" leads nowhere. Hunting for "there is a £47 transaction on the terminal that is not in the software" finds the patient in thirty seconds.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*The day's list of payments is the figure the terminal batch gets compared against. If it has to be rebuilt by hand, reconciliation stops happening within a fortnight.*

## Why the bank never matches

The gaps between the terminal and the bank are almost never mistakes. They are how the system works, and knowing them saves calls to the acquirer that lead nowhere.

| Cause | What it does |
|---|---|
| Terminal cut-off time | A payment at 8:30pm can land in tomorrow's batch |
| Weekends and holidays | Friday, Saturday and Sunday often arrive as one Monday or Tuesday credit |
| Fees deducted at source | On some contracts the credit arrives net, and the gross figure appears on no line at all |
| Refunds | Netted off the payout rather than shown separately |
| Chargebacks and reversals | Turn up weeks later with no appointment attached |

None of those five is a front desk error. The ones that are sit entirely in the other comparison, software against terminal.

## The variances that really are errors

Between the software and the terminal there are only five common causes, and all of them are fixed in a moment if they are caught the same day.

- **The payment nobody recorded.** The patient pays, the phone rings, and it never gets posted. By a distance the most common one.
- **The wrong payment method.** Taken in cash and recorded as card, or the other way round. The day's total is right and the reconciliation is wrong.
- **The split payment.** Part card, part cash, posted as a single payment.
- **The half-finished refund.** Refunded on the terminal but never reversed on the record, so the patient still shows as having paid.
- **The declined transaction that got posted anyway.** The terminal rejected it, the patient paid another way, and both entries survived.

> **Store the terminal reference next to the payment.** The transaction number, or the authorisation code and last four digits, turns an afternoon of hunting into a thirty second search. It costs nothing and it is the only extra thing worth recording.

## What taking cards actually costs

There is a misunderstanding here that costs money in negotiations. The interchange fee is what the patient's bank charges the practice's bank, and in the EEA it is capped by Regulation (EU) 2015/751 at 0.2% on consumer debit cards and 0.3% on consumer credit cards.

That cap is not what the practice pays. The practice pays the merchant service charge, which also carries the scheme fee (Visa, Mastercard) and the acquirer's own margin. The distance between the two numbers is large, and it is where the negotiation actually lives.

Published rates show the shape of it. SumUp publishes a no-monthly-fee plan at **1.69% per in-person payment** in the UK, and a **£19 per month plan that brings domestic debit and credit cards to 0.99%** (consulted 29 August 2026). Against a 0.2% interchange cap, the difference is the price of the service, not of the regulation.

Bank acquirers, by contrast, rarely publish anything and negotiate per contract, so the only reliable number is the one in your own agreement.

## Passing the cost to the patient

It is the first idea anyone has on seeing the fee, and in the United Kingdom it is not available. Regulation 6A of the Consumer Rights (Payment Surcharges) Regulations 2012 states:

> **"A payee must not charge a payer any fee in respect of payment by means of ... a payment instrument which is a card-based payment instrument as defined in Article 2(20) of Regulation (EU) 2015/751 ... and is not a commercial card."**

A card minimum is the same idea wearing a hat, and it invites the same problem. What is allowed is the opposite move: offering a discount for paying a particular way.

In the United States the position is different and turns on both state law and the card network rules, so check both before assuming anything. None of this is legal advice, and a specific case is one for your own adviser.

![Practice reporting dashboard showing activity over time](/screenshots/reports.png)

*A month of totals by payment method is what a terminal contract gets reviewed against. A mis-applied rate shows up in the pattern, not in a single transaction.*

## What to ask before signing for a terminal

These six questions move the real cost more than haggling over the headline percentage, and the first three decide whether reconciliation is possible at all.

1. **Is the rate blended or interchange++?** A blended rate hides which cards are expensive and makes it impossible to check whether the interchange cap is reaching you.
2. **Does settlement arrive gross with a monthly invoice, or net of fees?** This decides whether the bank line can ever equal a terminal batch.
3. **What is the cut-off time, and which days do you settle?** Without that, nobody can say which day an evening payment belongs to.
4. **What is there besides the percentage?** Terminal rental, monthly minimum, PCI fee, per-authorisation charge. Add them up and divide by your card turnover: that is your real rate.
5. **What is the notice period, and how are rates reviewed?** A unilateral increase on fifteen days' notice is a different contract from an agreed annual review.
6. **Can I export transactions as CSV carrying the same reference the terminal prints?** If not, the monthly reconciliation is manual for ever.

## Where to start this week

1. **Fix the time of the terminal close** and keep it the same every day.
2. **Start recording the transaction reference** against every card payment.
3. **Compare the two totals tomorrow** and write both down, whether they agree or not.
4. **Dig out the terminal contract** and work out the real percentage over the last three months.
5. **Put one day a month in the diary** to cross batches, credits and the fee statement.

Dentalpin does not talk to the card terminal, and that is worth saying plainly: nothing recorded in software replaces the terminal's own batch close. What it does do is record each payment with its method at the moment it is taken, and let you keep the transaction reference alongside it, so the day's card list comes out without exporting anything and the comparison runs against a figure nobody rebuilt by hand. What each version includes is on [pricing](/en/pricing/).

## Sources

- European Union. *Regulation (EU) 2015/751 of the European Parliament and of the Council of 29 April 2015 on interchange fees for card-based payment transactions*, Articles 3 and 4 (0.2% and 0.3% caps). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32015R0751). Consulted 29 August 2026.
- United Kingdom. *The Consumer Rights (Payment Surcharges) Regulations 2012*, regulation 6A, latest revised version. [legislation.gov.uk](https://www.legislation.gov.uk/uksi/2012/3110/regulation/6A). Consulted 29 August 2026.
- SumUp. *Pricing* (pay-as-you-go at 1.69% in person; Payments Plus, £19/month, 0.99% on domestic cards). [sumup.com](https://www.sumup.com/en-gb/pricing/). Consulted 29 August 2026.
