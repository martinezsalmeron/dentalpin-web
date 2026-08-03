---
title: "Verifactu for dental practices in Spain: what changes and when"
description: "Your practice is in scope even though dentistry is VAT exempt. The deadlines are 1 January and 1 July 2027, and these are the only real exemptions."
pubDate: 2026-08-03
translationKey: verifactu-clinicas-dentales
tags: [verifactu, compliance, invoicing, spain]
---

If you run a dental practice in Spain, Verifactu applies to you, and the VAT exemption on dental care does not get you out of it. Your deadline depends on how the practice is taxed: before 1 January 2027 if it is a company paying corporate income tax, and before 1 July 2027 for everyone else, including a dentist invoicing as a sole trader. Only two situations fall outside, being enrolled in the SII real-time VAT reporting system and being taxed in the Basque Country or Navarre.

This guide covers what the rules require, what changes on the invoice your front desk hands over, and what to ask your software vendor before the date arrives. It is not legal advice. Every official source is listed at the end, all consulted on 3 August 2026.

## The VAT exemption does not take you out of scope

This is the expensive misunderstanding, and it is an easy one to arrive at. Dental care provided by dentists is exempt from VAT under article 20.Uno.3 of the Spanish VAT Act, so many practices assume the invoicing rules do not reach them either.

The invoicing regulation says the opposite, and says it explicitly. Article 3.1.a) releases most operations exempt under article 20.Uno from the duty to issue an invoice, but it lists the paragraphs that are **not** released: 2, 3, 4, 5, 15, 20, 22, 24, 25 and 28. Paragraph 3 is healthcare.

> **A VAT exemption and an invoicing exemption are two different things.** Dentistry is exempt from the tax and expressly excluded from the invoicing dispensation, so the practice still issues invoices and therefore falls inside Verifactu.

Article 2.2 of the same regulation adds to it. An invoice must always be issued when the recipient is a business or professional acting as such, and also when the recipient asks for one in order to exercise a tax right. A patient who wants to claim the cost against insurance or their tax return is the second case, and in a dental practice that happens most weeks.

## The two deadlines, and which one is yours

The calendar has moved more than once, so anything written before December 2025 has the wrong dates in it. The dates now in force were set by Real Decreto-ley 15/2025 of 2 December, which amended the fourth final provision of Real Decreto 1007/2023.

| How the practice is taxed | Deadline |
|---|---|
| Company paying corporate income tax (Impuesto sobre Sociedades) | 1 January 2027 |
| Sole trader with business activity under personal income tax (IRPF) | 1 July 2027 |
| Comunidad de bienes or civil partnership under income attribution | 1 July 2027 |
| Non-resident with a permanent establishment in Spain | 1 July 2027 |

The dividing line is not the size of the practice or the number of chairs. It is which tax the invoice issuer pays. A small practice incorporated as an SL has the January date, and a sole trader running three chairs has the July one.

> **The rule says "before", not "from".** The system has to be adapted and running when the day arrives, not starting to adapt then. If your vendor is the one who updates the software, that conversation belongs now rather than in December.

## Who is genuinely out of scope

Fewer cases than people expect, and none of them is a matter of choice.

- **Anyone enrolled in the SII.** Article 3.3 of the regulation excludes those who keep their VAT ledgers through the AEAT electronic office. It reaches few dental practices, since the SII is mandatory mostly on turnover grounds, but it can also have been opted into voluntarily.
- **Anyone taxed in the Basque Country or Navarre.** The regulation applies in common territory, and the foral territories have their own rules.
- **Operations that do not require an invoice at all.** If the rules do not call for an invoice, this obligation does not reach the operation either. For a dental practice that is thin comfort, for the reason above.

Outside those cases, the regulation covers the invoices you issue, full or simplified, whoever the recipient is. The simplified invoice your front desk hands to a private patient counts exactly like one issued to an insurer.

## Verifactu and non-Verifactu are two ways to comply

Here is the part that rarely gets explained properly. Verifactu is not the only way to meet the rules. There are two modes, and your vendor will either pick one or let you pick.

| | Verifactu mode | Non-Verifactu mode |
|---|---|---|
| Records sent to the AEAT | Automatically, every record | ✗ Not sent, kept instead |
| Electronic signature on each record | ✓ Not required | ✗ Required |
| Hash chaining between records | Required | Required |
| QR code on the invoice | Required | Required |
| "VERI\*FACTU" wording on the invoice | Yes | No |
| Keeping and producing the records | ✓ Already with the AEAT | ~ The practice's job |

In Verifactu mode the system forwards every invoicing record to the tax agency, and in exchange the regulation spares it from signing each one electronically. In non-Verifactu mode nothing is forwarded continuously, which is why the system has to sign the records electronically and keep them for whenever the tax agency asks.

Neither is the "right" one. The practical question for a practice is who carries the burden of keeping the records, and the mode is what answers it.

## What changes on the invoice the patient sees

Less than you would think, but something visible. Article 6.5 of the invoicing regulation adds two elements to an invoice issued through an adapted system.

- **A QR code**, always, in both modes. The regulation calls it "the graphic representation of partial invoice content by means of a QR code".
- **A line of text, in Verifactu mode only**: "Factura verificable en la sede electrónica de la AEAT" or "VERI\*FACTU". If your system does not forward every record, that wording must not appear.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*A practice's invoice list with the state of each one. Every one of these lines, once issued, produces an invoicing record with its own hash.*

## A treatment quote is not an invoice

Worth saying, because it saves work. The rules talk about invoices, full or simplified. An accepted quote, a treatment plan or an internal cash receipt is not an invoice, and produces no invoicing record until it becomes one.

![Dental treatment quote showing the treatments, totals, validity period and linked plan](/screenshots/budgets.png)

*A quote with its treatments and validity date. This document is not in scope; the invoice raised from it is.*

What is worth reviewing is the exact point at which your workflow turns a quote into an invoice, because that is where the obligation starts.

## What the software has to do, not your front desk

Almost all of the weight here sits on the program, which is the good news. Real Decreto 1007/2023 requires the system, on its own, to:

- **Produce an issuance record for every invoice**, with the content set out in article 10: issuer identification, recipient details where applicable, series and number, dates, invoice type, description of the operation, taxable base, rate and amount, total and a timestamp.
- **Produce a cancellation record** when an invoice is cancelled, instead of deleting it.
- **Chain every record to the hash of the previous one**, so the sequence can be verified end to end.
- **Prevent alteration of what is already recorded.** Article 8.2.a) requires that a generated record cannot be changed without the system detecting it, and that corrections happen through later records that preserve the original data.
- **Keep an automatic event log**, required by article 8.3, recording what happens inside the system itself.
- **Sign the records electronically**, except in Verifactu mode, where calculating the hash is enough.

Your team does not need to learn any of this. What does have to change is the habit of "fixing" an invoice by editing it, because after the deadline that stops being possible and becomes a credit note or a cancellation.

## What to ask your vendor, and when

A ten minute conversation now avoids a scramble in December. In order of importance:

1. **Which mode will you run, Verifactu or non-Verifactu?** The answer decides who keeps the records and whether your invoices carry the extra wording.
2. **Do you hold the declaración responsable for the system?** It is issued by the company that produces the software, not by the practice. The AEAT states that someone invoicing with a properly certified system does not carry the responsibility for that system failing.
3. **What date will you have it running?** Measured against yours, January or July 2027, not against the vendor's own roadmap.
4. **Is it included in what I already pay, or billed separately?** This is the question answered too late most often. Worth checking against the [pricing page](/en/pricing/) of whoever you are evaluating.
5. **How are credit notes and cancellations handled?** That is the workflow that changes most in the daily life of a front desk.

> **The declaración responsable is signed by whoever builds the software.** If your vendor cannot tell you whether they have one, that is an answer in itself, and it arrives in time to change vendor.

## What happens if you do not comply

The underlying duty does not come from the 2023 regulation but from article 29.2.j) of the General Tax Act, which requires systems supporting invoicing to guarantee the integrity, retention, accessibility, legibility, traceability and unalterability of the records.

The penalty regime sits in article 201 bis of the same act, titled "Tax infringement for the manufacture, production, marketing and possession of computer systems that do not meet the specifications required by the applicable rules". The word that matters for a practice is **possession**: the infringement does not require anyone to have falsified anything, it reaches holding a system that does not comply.

## Where Dentalpin fits

Dentalpin ships an optional Verifactu module for Spain, switched on from the product itself, with the hash chain and the QR code on the invoice. It is in the price rather than an add-on, and you can see that on the [pricing page](/en/pricing/) or run it on your own server and check it yourself.

That said, the decision that matters in this article is not which software you use. It is knowing which deadline is yours and having the conversation with your current vendor while there is still room.

## Sources

All consulted on 3 August 2026:

- [Real Decreto 1007/2023, of 5 December](https://www.boe.es/buscar/act.php?id=BOE-A-2023-24840) (consolidated text): scope in article 3, exclusions in 3.3, requirements in articles 8, 10, 12 and 16.
- [Real Decreto-ley 15/2025, of 2 December](https://www.boe.es/eli/es/rdl/2025/12/02/15), BOE no. 290 of 3 December 2025: amendment of the fourth final provision and the 1 January and 1 July 2027 dates.
- [Real Decreto 254/2025, of 1 April](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-6600): the earlier amendment to the regulation.
- [Invoicing regulation, Real Decreto 1619/2012](https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696) (consolidated text): article 2.2, article 3.1.a) and article 6.5.
- [AEAT information note on the extension of the SIF adaptation deadline](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html).
- [AEAT · Who is obliged and which operations are included](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/cuestiones-generales/quienes-estan-obligados-que-operaciones-incluyen.html): obligated parties, the SII exclusion and the foral territories.
- [AEAT · Certification of computer systems](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/cuestiones-generales/certificacion-sistemas-informaticos_.html): the declaración responsable and the responsibility of the party invoicing.
- [Ley 58/2003, General Tributaria](https://www.boe.es/eli/es/l/2003/12/17/58): articles 29.2.j) and 201 bis.

Spotted something out of date here? The deadlines have already moved twice. [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it.
