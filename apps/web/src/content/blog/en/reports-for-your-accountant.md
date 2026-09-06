---
title: "The numbers your accountant needs every quarter"
description: "The five files a dental practice owes its accountant each quarter, why the VAT exemption changes the close, and how to keep billed and collected apart."
pubDate: 2026-09-06
translationKey: informes-para-la-gestoria
tags: [accounting, invoicing, bookkeeping, quarter-end]
---

Your accountant needs five things each quarter, and all five should come out of your practice software as a file: the sales invoice book with an unbroken numbering sequence, what you actually collected split by payment method, purchase invoices, any tax withheld, and the reconciliation between what you billed and what reached the bank.

What makes this a dental problem rather than a generic bookkeeping problem is that dental care is exempt from VAT. That exemption makes one half of the quarter simpler and the other half stranger, and almost all the time lost at quarter end comes from not knowing which half you are in.

## The five blocks every accountant asks for

They do not change from one firm to another. What changes is the format they want and how late they get it.

1. **Sales invoice book.** Every invoice in the quarter, by number, with date, payer, net amount, VAT treatment and total. No gaps, no duplicates.
2. **Collections for the period, by payment method.** Cash, card, bank transfer and third party finance, each on its own, because each reconciles against a different statement.
3. **Purchases and expenses with the invoice.** Materials, lab work, rent, utilities, servicing. The invoice, not the card receipt.
4. **Tax withheld.** Anything deducted from associates or contractors who invoice the practice, plus payroll if you run one.
5. **The reconciliation.** Billed minus collected equals outstanding, and that outstanding figure has to match the patient debt the practice thinks it has.

> **Block four is the one that gets forgotten and the one that costs most.** A hygienist's or a lab's invoice that reaches your accountant in March, when the quarter closed in January, means redoing a close that was already filed.

## Why a dental practice does not close like an ordinary business

Medical care is exempt from VAT across the EU, and the UK reaches the same place by its own route. Article 132(1)(c) of Directive 2006/112/EC requires member states to exempt "the provision of medical care in the exercise of the medical and paramedical professions as defined by the Member State concerned", and 132(1)(e) separately exempts "the supply of services by dental technicians in their professional capacity and the supply of dental prostheses by dentists and dental technicians".

HMRC reaches the same treatment in VAT Notice 701/57. Section 10.1 says that "if you're a dentist, a dental care professional or a dental technician you may exempt your supplies of dental care and treatment", and section 2.1 lists dentists, dental hygienists, dental therapists, dental nurses, clinical dental technicians, dental technicians and orthodontic therapists among the registered health professionals for VAT purposes.

The practical consequence runs in two directions.

- **You do not charge VAT on treatment**, so the patient's invoice shows the amount and the basis of the exemption, not a VAT line.
- **And for the same reason you cannot reclaim VAT on what you buy.** Article 168 of the Directive gives the right to deduct only in so far as goods and services "are used for the purposes of the taxed transactions of a taxable person". If your supplies are exempt, that input VAT is a cost.

> **The VAT on materials, lab work and the new chair is not recoverable: it is expense.** So your accountant needs the gross total of each purchase, not the net figure any other business would hand over.

Where it stops being simple is everything the practice does that is not care. Section 10.1 of the same notice treats items separable from dental treatment, giving toothbrushes, toothpaste and dental floss as the examples, as usually standard rated, and says cosmetic services are exempt only where supplied "as an element of oral health treatment by a registered health professional, as part of a dental care treatment programme". Sell products at reception or rent a surgery to an outside clinician and the practice has mixed activity, which roughly doubles the size of the quarterly pack.

## Billed is not collected, and that confusion eats the quarter

This is where practice and accountant speak different languages. The practice thinks about money that arrived; the books run on the invoice, whenever it gets paid.

In dentistry the gap between the two is wide, because almost nothing is paid on the day it is done.

![Invoice list showing each invoice with its status: issued, paid, part paid, overdue and draft, with the amount still outstanding](/screenshots/invoices.png)

*An invoice list where every row carries a status and an outstanding amount. The total of that outstanding column is the figure that has to match patient debt.*

Four cases account for nearly every broken close:

- **The accepted treatment plan that has not started.** Not income, not an invoice, not part of this quarter. It is a forecast.
- **The deposit taken before treatment.** Money has arrived and no treatment has been delivered. Your accountant decides how it is recorded, but has to know it exists and how much it is.
- **The twelve month payment plan.** The invoice is dated January and the receipts run to December. If the software can only report cash in, that quarter gets reconciled by hand.
- **Third party patient finance.** The practice receives most of the amount at once, net of commission, while the patient pays the finance company. That is not the same entry as a payment from the patient.

The rule that resolves most of it is to keep two figures apart and never add them together: **billed in the period** and **collected in the period**. The difference is live debt, and it is a number the practice should be able to look at on any day of the year.

## The invoice sequence cannot have gaps

This is the most common finding and the easiest to avoid. A sales series has to run consecutively, with no jumps inside each series.

1. **Use separate series where it makes sense**, one per site or one for credit notes, and keep each consecutive in its own right.
2. **Never delete an issued invoice.** If it is wrong, raise a credit note that references it. A number that vanishes is a question at an inspection.
3. **Close the year and start a new series** on a written rule, and do not change it mid year.
4. **Keep cancelled invoices** with the reason. Cancelled is not the same as never existed.

The underlying obligation is in the Directive too. Article 242 requires every taxable person to keep accounts "in sufficient detail for VAT to be applied and its application checked by the tax authorities", and Article 244 requires copies of invoices issued, and all invoices received, to be stored.

## What the software should be able to export

If anything on this list is only available by copying off the screen into a spreadsheet, quarter end will cost an afternoon every time.

| What the accountant asks for | Useful format | How often |
|---|---|---|
| Sales invoice book | ✓ CSV or Excel, one row per invoice | Quarterly |
| Collections by payment method | ✓ CSV with date, amount, method, linked invoice | Quarterly |
| Daily cash reconciliation | ✓ Signed end of day close | Daily, sent quarterly |
| Live patient debt | ✓ Aged listing | Quarterly |
| Deposits and payments on account | ~ Usually falls out of the collections list | Quarterly |
| Purchase invoices | ✗ Almost never lives in dental software | Monthly |
| Withholding on associates | ✗ Sits with the accountant, not the practice | Quarterly |

The last two rows are honest. Practice management software is not an accounting package and should not pretend to be one. What it does owe you is the first five, clean.

![Reporting panel showing the totals for the period](/screenshots/reports.png)

*A reporting panel with the period totals. What the accountant needs is not the screen, it is the file that comes off it.*

## Quarter end in seven steps

Done in this order it takes under an hour.

1. **Check nothing is waiting to be invoiced.** Completed treatment with no invoice is the single most common break.
2. **Verify the numbering** of each series from the start of the quarter to the end.
3. **Match the daily cash closes** against total cash collected for the period.
4. **Reconcile the card terminal** against card collections, refunds included.
5. **Export the two files**, invoices issued and collections, and confirm the difference between them is exactly live debt.
6. **Gather the purchase invoices** for the quarter, lab work above all.
7. **Send it in one go**, not in five emails over three weeks.

> **This is not legal or tax advice.** The rules cited are those in force on the date consulted, but how they apply to your practice depends on what you actually do and where. That conversation is with your accountant.

## Three questions worth asking once a year

These are structural rather than quarterly, and they save more than any tidying of the process.

- **Do I have taxable activity alongside the exempt activity?** If you sell product at reception or rent out a surgery, the answer may be yes without anyone having checked.
- **How are we recording deposits and patient finance?** This is where the most conflicting conventions live inside one practice.
- **What would I need if there were an inspection tomorrow?** The answer is usually the invoice book and the cash closes, which are exactly the two files in this article.

## Where this lives

None of the above requires particular software. A small practice with disciplined numbering and a daily cash close reconciles a quarter faster than a large one with an expensive system and no written rule.

What is worth checking before signing anything is whether you can get your own data out in a format your accountant can open, without raising a support ticket and without paying for it separately. In [Dentalpin](/en/pricing/) the invoice, collection and debt listings export to CSV from the screen itself, and because it is open source and self hostable the database is yours and can be queried directly. If your current software will not let you do that, fix that before you try to fix the close.

## Sources

- Council Directive 2006/112/EC on the common system of value added tax, Articles 132(1)(c), 132(1)(e), 168, 242, 244, 250 and 252: [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32006L0112) (consulted 6 September 2026)
- HMRC, Health professionals and pharmaceutical products (VAT Notice 701/57): [gov.uk](https://www.gov.uk/guidance/health-professionals-pharmaceutical-products-and-vat-notice-70157) (consulted 6 September 2026)
- HMRC internal manual VATHLT2450, Dentists: Introduction, and VATHLT2480, Dentists: Cosmetic dentistry: [gov.uk](https://www.gov.uk/hmrc-internal-manuals/vat-health/vathlt2450) (consulted 6 September 2026)
