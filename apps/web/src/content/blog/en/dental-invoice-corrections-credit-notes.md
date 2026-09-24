---
title: "An invoice you already issued is wrong: credit notes, corrections and what software cannot do"
description: "How to correct a dental invoice after it has been issued: credit notes, the 14-day rule, numbering continuity, and why deleting the original is not an option."
pubDate: 2026-09-24
translationKey: factura-rectificativa-clinica-dental
tags: [invoicing, credit-notes, practice-management, bookkeeping]
---

An invoice you have already given to a patient is not a record you edit. You correct it by issuing a second document that points back at the first, and the first one stays exactly where it is. HMRC puts it plainly in VAT Notice 700: a credit note has to show "the number and date of the original VAT invoice or invoices relating to the supply".

That is the part that clashes with how a practice works. In the appointment book or the clinical record you fix a mistake by changing the entry. In the ledger you never do, and in most jurisdictions the software is not allowed to let you.

## The first question is whether your practice charges VAT at all

In the UK most of what a dental practice does is exempt. Schedule 9, Group 7, item 2 of the Value Added Tax Act 1994 exempts "the supply of any services consisting in the provision of medical care, or the supply of dental prostheses" by "a person registered in the dentists' register", and item 2(b) extends that to the dental care professionals register.

So a great many practices are not VAT registered, issue no VAT invoices, and never issue a VAT credit note in their lives. That does not make the problem go away:

- **A practice with a taxable side is registered.** Whitening sold as cosmetic, retail toothbrushes, room hire to an associate, a lab selling to other practices.
- **Every practice still issues patient invoices and receipts**, and those still have to be sequential, retrievable and consistent with what was banked.
- **Every practice still gets it wrong sometimes**, and the question of what happens to the original document is the same question whether or not there is tax on it.

> **Exempt is not the same as out of scope of your own bookkeeping.** The VAT rules below only bite if you are registered and the supply is taxable. The numbering, the audit trail and the "never edit an issued document" rule bite regardless, because they come from your accounts, not from VAT.

## What a valid credit note has to show

If you are registered and the supply was taxable, VAT Notice 700 paragraph 18.2.3 is the checklist. A credit note must "reflect a genuine mistake or overcharge or an agreed reduction in the value of the supply, and be issued within 14 days of the refund payment being made to the customer", must "give value to the customer", and must clearly show:

- the identifying number and date of issue
- the name, address and registration number of the supplier
- the name and address of the customer
- a description identifying the goods or services being credited
- the quantity and amount for each description
- the total amount credited, excluding VAT
- the rate and amount of VAT credited, in sterling
- the number and date of the original VAT invoice or invoices

Two details in that list are the ones practices miss. **The 14 days run from the refund payment, not from when you noticed the error.** And if you genuinely cannot identify the original invoice, the notice does not let you skip it: "you must be able to satisfy HMRC by other means that you accounted for VAT on the original supply".

> **The 14 days run from the refund, not from the discovery.** Paragraph 18.2.3 ties the clock to "the refund payment being made to the customer", so a practice that spots an overcharge in March and only refunds it in June has its fourteen days starting in June. Agreeing the credit and paying it are two dates, and the software should hold both.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*An invoice list with its states. A credit note does not remove a line from this list; it adds one.*

## An undercharge goes the other way

Paragraph 18.2.4 covers the debit note, which is the mirror image and gets forgotten because nobody enjoys sending one. It has to be "issued within 14 days of the increase being agreed between the supplier and the customer" and carry the same identifying details, including the number and date of the original invoice.

Note the trigger: **agreed**, not decided. A practice that discovers it undercharged cannot simply raise the price of a completed treatment on its own.

## The rate is the old rate

Paragraph 18.2.5 is a single sentence worth keeping: "The rate of VAT to be used for a credit or debit note is the one which was in force at the time of the tax point of the original supply." A credit note issued today against an invoice from two years ago carries that year's rate, not today's.

## The cases that actually come up in a practice

| Situation | What you issue |
|---|---|
| Wrong amount, spotted the next day | ✓ Credit note referencing the original |
| Wrong name or address, treatment correct | ✓ Credit note and a corrected invoice |
| Card payment already taken | ~ Credit note plus a refund; two separate things |
| Treatment abandoned halfway through | ✓ Credit note for the part not provided |
| Patient asks for the invoice in their employer's name | ✗ Not a correction: the customer would be someone else |
| Same invoice raised twice in one day | ✓ Credit note against one of them, not a deletion |
| Deposit that later becomes a treatment invoice | ~ Not automatically a correction; depends what the deposit invoice said |

The two rows people argue about at the front desk deserve a sentence each.

**An invoice in a third party's name is not a corrected invoice.** If the care was provided to the patient and the invoice was raised to the patient, reissuing it to an employer does not fix a defect, it invents a different transaction with a different customer. That decision belongs before the invoice goes out.

**A paid deposit invoice is not replaced.** It exists and it stood; the treatment invoice picks up the balance. You only credit the deposit if you refund it or the treatment falls away.

## Errors already on a submitted return are a different job

This is the trap. Paragraph 18.2.6 says that if you "have charged or claimed an incorrect amount of VAT and have already declared it on your VAT Return, the remainder of this section does not apply", because "you can only correct an error in your declaration by adopting the appropriate method of error correction detailed in section 4" of VAT Notice 700/45.

In plain terms: **the credit note fixes the document, the error-correction procedure fixes the return, and doing one does not do the other.** Where the adjustment is not a declared error, regulation 38 of the Value Added Tax Regulations 1995 puts it in the VAT account for the period in which the price change occurs: the period the refund is paid for a decrease, the period agreement is reached for an increase.

## What the software has to do

- **Stop offering an edit field on an issued invoice.** If the amount is still editable after issue, the software is the problem.
- **Create the credit note from the invoice**, carrying the original number and date across rather than asking someone to retype them.
- **Keep numbering continuous and gap-free**, including for credit notes, so a missing number is visible instead of quietly absent.
- **Record who did it and when**, because "the accounts or supporting documents must make clear the nature of the adjustment and the reason for it" (paragraph 18.2.6), and six months later nobody remembers the reason.
- **Show the patient's ledger as a chain**, original and credit note both, not just the net balance. A correct balance with the history hidden is precisely what you cannot explain later.
- **Keep the document separate from the money**, so refunding £80 does not rewrite an invoice and issuing a credit note does not move the till on its own.

![Practice reports dashboard](/screenshots/reports.png)

*Reports are where a gap in the numbering shows up, not in the current month's invoice list.*

## The order to do it in

1. **Work out whether the document is wrong or the supply changed.** A mistyped name is a document defect; a treatment nobody carried out is a change in consideration.
2. **Leave the original alone.** Not the amount, not the name, not the date.
3. **Issue the credit note**, with the original invoice's number and date on it.
4. **Raise a corrected invoice** where the patient still owes something, rather than trying to make the credit note do both jobs.
5. **Handle the refund separately**, with its own date and its own evidence, and inside 14 days of that payment if a VAT credit note is involved.
6. **Write down why.** One line in the ledger, not in someone's memory.
7. **Tell your accountant** if the period is already filed, because that is the error-correction route and not this one.

## What this article does not cover

- **The quarterly pack your accountant needs** is [a separate piece](/en/blog/reports-for-your-accountant/).
- **The till not balancing at the end of the day** is not an invoice error. That is [daily reconciliation](/en/blog/daily-cash-reconciliation-dental/).
- **An unpaid invoice** is not corrected by being unpaid; it is chased. That is [tracking patient payment plans](/en/blog/patient-payment-plans-tracking/).
- **Bad debt relief** has its own conditions and its own notice, and it is not a credit note.

## Where the software fits

In Dentalpin an issued invoice stops being editable, the credit note is created from that invoice with the original's number and date attached, payments and documents are separate records, and the patient's ledger shows the whole chain rather than the net result. It is included, with no per-user fee: the details are on the [pricing page](/en/pricing/).

**This is not tax advice.** The sources are below with the date they were consulted, and the answer is national: a practice outside the UK should start from its own tax authority, not from this page. For your own case, ask your accountant or HMRC.

## Sources

- HM Revenue & Customs, *VAT guide (VAT Notice 700)*, section 18 (Credits and debts), paragraphs 18.2.3 to 18.2.6. Page last updated 25 June 2026. Consulted 24 September 2026. <https://www.gov.uk/guidance/vat-guide-notice-700>
- Value Added Tax Act 1994, Schedule 9, Part II, Group 7, item 2. Consulted 24 September 2026. <https://www.legislation.gov.uk/ukpga/1994/23/schedule/9>
- The Value Added Tax Regulations 1995 (SI 1995/2518), regulation 38 (Adjustments in the course of business). Consulted 24 September 2026. <https://www.legislation.gov.uk/uksi/1995/2518/regulation/38>
