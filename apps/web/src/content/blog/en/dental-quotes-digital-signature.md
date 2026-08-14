---
title: "Dental treatment quotes with a digital signature: what makes them hold up"
description: "Which level of electronic signature a dental quote actually needs, what eIDAS and UK law say about it, and how to run the workflow without paper."
pubDate: 2026-08-14
translationKey: presupuestos-dentales-firma-digital
tags: [quotes, electronic-signature, dental-practice, practice-management-software]
---

A treatment quote signed on the tablet at reception is valid. Under the eIDAS Regulation, a signature cannot be denied legal effect just for being electronic, so the real question is not whether it counts, it is what you will have to prove on the day a patient says they never agreed to that figure.

That is where the levels matter. Only a qualified electronic signature is automatically equivalent to a handwritten one. Everything below it is admissible, and the burden of proving it is yours.

## The three levels, and what each one costs you

Article 3(10) of eIDAS defines an electronic signature as "data in electronic form which is attached to or logically associated with other data in electronic form and which is used by the signatory to sign". By that definition a tick box is already an electronic signature. What it is not is advanced or qualified.

| | Simple | Advanced | Qualified |
|---|---|---|---|
| Typical example | Tick box, finger scribble on a tablet, a reply by email | Signature with identity checks and integrity sealing | Qualified certificate on a qualified signature creation device |
| Admissible as evidence | ✓ Article 25(1) | ✓ Article 25(1) | ✓ Article 25(1) |
| Equivalent to a handwritten signature | ✗ Not automatically | ✗ Not automatically | ✓ Article 25(2) |
| Uniquely linked to the signatory | ✗ Not required | ✓ Article 26(a) and 26(b) | ✓ Included |
| Later changes are detectable | ✗ Not required | ✓ Article 26(d) | ✓ Included |
| Recognised across every EU member state | ~ Case by case | ~ Case by case | ✓ Article 25(3) |
| Friction for the patient | ✓ None | ~ Moderate | ✗ High, a certificate is needed |

> **Only the qualified signature is equivalent to a handwritten one.** Article 25(2) says it in a single line: "A qualified electronic signature shall have the equivalent legal effect of a handwritten signature." Article 25(1) protects the others from being rejected for being electronic, which is a much smaller claim than people tend to read into it.

![A patient quote showing treatments, totals, validity dates and the linked plan](/screenshots/budgets.png)

*A quote with its treatments, its total and its validity date: the thing a patient is accepting when they sign.*

## Where you are matters more than which app you use

eIDAS applies in the EU and the EEA and it is directly applicable, so no national law has to repeat it. Two consequences that get missed:

- **Cross-border recognition only comes with the qualified level.** Article 25(3) requires every member state to recognise a qualified signature based on a certificate issued in any other member state. Nothing in the Regulation says that about the levels below.
- **Member states still control formal requirements.** eIDAS decides the effect of a signature, not whether a given document has to be in writing at all. That question is national, and in some countries the answer changes what you need. Germany is the clearest case: a private fee agreement has to be in writing, and written form can only be replaced electronically by a qualified signature.

In the United Kingdom, section 7 of the Electronic Communications Act 2000 takes a different route and settles admissibility rather than equivalence. It provides that an electronic signature "and the certification by any person of such a signature, shall each be admissible in evidence in relation to any question as to the authenticity of the communication or data or as to the integrity of the communication or data".

> **Admissible is not the same as proved.** Both eIDAS Article 25(1) and section 7 of the 2000 Act get your signed quote in front of a court. Neither of them tells the court to believe it. The evidence you kept around the signature is what does that.

This is not legal advice. Which level suits your practice depends on your treatment values, your volume and your indemnity cover, and it is worth confirming with your own adviser or your professional body.

## What a signed quote has to keep

A signature on its own is decoration. What holds up months later is the bundle around it:

- **The exact version that was signed.** Not today's quote, but the document frozen at the moment of acceptance, with its treatments, its prices and its validity date.
- **Who signed and how they were identified.** A name, an identity check, and a record of what was used to confirm it was the patient and not whoever came with them.
- **When it was signed, with a time that someone else can rely on.** A timestamp stored only in your own database is set by whoever controls that database, which is you.
- **The technical evidence of the signature.** Article 26(d) requires that later changes be detectable, and you can only demonstrate that by keeping what allows it to be verified.
- **The copy handed to the patient.** Without it the signed quote proves the price and proves nothing about the information given beforehand.
- **The link to the treatment plan.** An accepted quote nobody can tie to what was actually carried out will not answer a complaint.

![A patient treatment plan broken into stages](/screenshots/treatment-plan.png)

*The treatment plan in stages: the work that follows acceptance, and what the signed quote has to remain connected to.*

## The workflow, step by step

1. **Close the quote before you send it.** Give it a number, a date and a validity period, then lock it. If it can still be edited after signing, nothing has been signed.
2. **Send it through a channel that leaves a trace**, with the document attached or behind an expiring link, not as a message saying you already discussed it.
3. **Identify the signer before the signature, not after.** This is the step everyone skips and the only one that cannot be reconstructed later.
4. **Show the whole document before the accept button**, so there is a record that it was available to read.
5. **Sign and seal**, then store the signed document together with whatever is needed to verify that signature in the future.
6. **Hand over the patient's copy** at that moment, by email or download, and record that it went out.
7. **Archive the signed version as immutable** and treat edits as a new quote. When a patient wants two treatments changed, you issue another quote, you do not touch the accepted one.
8. **Link it to the treatment plan** so acceptance and delivery live on the same record.

Step 7 decides whether in two years you have a document or a spreadsheet showing the current state.

## What leaves a signed quote worthless

- **The signed document is still editable.** Any later change, even fixing a typo, destroys the integrity that gave it value.
- **The signature is stored as a loose image.** A PNG of a scribble pasted onto a PDF is linked to nothing, and anyone can paste it onto a different document.
- **Nobody kept the verification evidence.** The signed file survives, the record that proved the signature leaves with the vendor.
- **The patient never received a copy.** The quote is signed and there is no way to show it was ever handed over.
- **It was signed on the front desk device** while someone else was logged in, so the audit trail names the account, not the signer.
- **Accepted and expired quotes look the same.** With no status and no validity date, the list cannot answer the one question you ask it.

## How to check yours in ten minutes

1. **Open a quote accepted last year** and see whether you can retrieve the document as it was signed rather than as it stands today.
2. **Edit a treatment on that quote** and watch whether the system lets you do it without leaving a trace.
3. **Find where the signature evidence lives** and check whether you can export it without the vendor's help.
4. **Ask for the list of accepted quotes not yet carried out**, which is the same data your follow-up depends on.
5. **Export a signed quote in a format you can open without the software** and see whether the signature is still verifiable outside it.

In Dentalpin a quote is closed with its number, its validity and its treatments, acceptance is recorded with its date and author next to the patient's treatment plan, and everything comes out as a standard PostgreSQL dump whenever you ask for it. What the hosted and self-hosted versions include is on [pricing](/en/pricing/).

## Sources

- Regulation (EU) No 910/2014 of the European Parliament and of the Council of 23 July 2014 on electronic identification and trust services for electronic transactions in the internal market, Articles 3, 25 and 26. [EUR-Lex 32014R0910](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0910). Consulted 14 August 2026.
- Electronic Communications Act 2000, section 7. [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2000/7/section/7). Consulted 14 August 2026.
- Bürgerliches Gesetzbuch, § 126 (3) and § 126a, for the German written form point. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__126a.html). Consulted 14 August 2026.
