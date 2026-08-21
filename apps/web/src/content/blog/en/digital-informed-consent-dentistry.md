---
title: "Digital informed consent in dentistry: what it has to prove"
description: "What valid consent actually requires in a dental practice, why a signed form is not consent, and how to run the consent record digitally so it holds up years later."
pubDate: 2026-08-21
translationKey: consentimiento-informado-digital-dental
tags: [informed-consent, clinical-records, dental-practice, practice-management-software]
---

A signature does not make consent valid. The Supreme Court said so in Montgomery: the clinician's duty "is not therefore fulfilled by bombarding the patient with technical information which she cannot reasonably be expected to grasp, let alone by routinely demanding her signature on a consent form". What you are digitising is not the consent. It is the evidence that a conversation about material risks and reasonable alternatives actually happened.

This is not legal advice. Every official source is listed at the end, consulted on 21 August 2026.

## The standard is material risk, not the procedure list

Montgomery v Lanarkshire Health Board replaced professional custom with a patient-centred test. At paragraph 87 the court held that a clinician "is therefore under a duty to take reasonable care to ensure that the patient is aware of any material risks involved in any recommended treatment, and of any reasonable alternative or variant treatments".

The test of materiality follows in the same paragraph: "whether, in the circumstances of the particular case, a reasonable person in the patient's position would be likely to attach significance to the risk, or the doctor is or should reasonably be aware that the particular patient would be likely to attach significance to it".

> **Materiality cannot be reduced to a percentage.** Paragraph 89 is explicit: the significance of a risk reflects "the nature of the risk, the effect which its occurrence would have upon the life of the patient, the importance to the patient of the benefits sought to be achieved by the treatment, the alternatives available, and the risks involved in those alternatives". A one percent risk of numbness matters more to a wind musician than to most patients, and that is the point.

That is why a consent form built from a procedure list will always be behind the standard. The same lower third molar carries a different conversation for a patient whose job depends on speech.

## What the GDC requires you to record

The General Dental Council's Standards for the Dental Team put the documentation duty in plain terms. Standard 3.1 requires valid consent before starting treatment, "explaining all the relevant options and the possible costs", and adds that "you should document the discussions you have with patients in the process of gaining consent" and "you must check and document that patients have understood the information you have given".

| What the standard asks | Written form required? | Where it lives |
|---|---|---|
| Routine restorative treatment | ✗ Not required | Documented discussion in the record |
| Options and possible costs explained | ✗ Not a separate form | Treatment plan and estimate |
| Conscious sedation or general anaesthetic | ✓ Written consent required | Signed record plus the discussion |
| Confirming consent at each visit of a course | ✗ No new form each time | A note per appointment |
| Withdrawal of consent | ~ No prescribed form | Needs to change the record's state |

Standard 3.3 is the one most systems handle badly: "Giving and obtaining consent is a process, not a one-off event", and "when carrying out an on-going course of treatment, you must make sure you have specific consent for what you are going to do during that appointment".

![A patient's treatment plan broken into stages with its individual treatments](/screenshots/treatment-plan.png)

*A staged treatment plan: the thing being explained, and the thing a consent record has to point back at.*

## What digitising changes, and what it does not

It does not change the conversation. Montgomery describes the advisory role as "dialogue, the aim of which is to ensure that the patient understands the seriousness of her condition, and the anticipated benefits and risks of the proposed treatment and any reasonable alternatives". A tablet at reception with twenty clauses meets that no better than paper with twenty clauses.

What it changes is whether the evidence survives. A paper form in a folder proves a signature exists. A record that ties the discussion, the plan, the estimate and the signature to the same patient on the same date proves the process the GDC describes.

> **The costs conversation is part of consent, not a separate sale.** Standard 3.1 puts "the possible costs" inside the consent duty. If your estimate lives in one system and your consent in another, you are documenting two halves of one obligation.

## What the record has to hold to be worth anything

- **The exact version that was signed**, frozen, not the template you have improved twice since.
- **Who gave the information and when**, named, and not just who collected the signature at the desk.
- **The specifics of this conversation**, including the questions asked and the alternatives declined. That is what turns a template into evidence of a Montgomery-compliant discussion.
- **The copy given to the patient**, with proof it was handed over or sent.
- **The link to the treatment plan and the estimate**, so what was consented to can be compared to what was done.
- **Withdrawals and reconfirmations**, dated. A course of orthodontic treatment is not consented to once in month one.

![Patient record activity tab with clinical alerts, active plan and a timeline filterable by visits, treatments, financials and communications](/screenshots/patient-timeline.png)

*A patient timeline: where the sequence of informed, signed and treated becomes visible instead of inferred.*

## The workflow, step by step

1. **Have the conversation in the surgery**, and write down what you covered before any form appears.
2. **Generate the document from the treatment plan**, so the procedures on it are the procedures being done.
3. **Add the risks specific to this patient**, which is the part a generic form can never satisfy.
4. **Give reading time**, and make it a different moment from the one where the local anaesthetic goes in.
5. **Take the signature** and freeze the document exactly as signed.
6. **Give the patient their copy** and record that you did.
7. **File it on the patient record**, not in a parallel folder nobody opens.
8. **Reconfirm at each appointment in a course**, with a short note, per standard 3.3.

## The mistakes that leave consent worthless

- **A generic form nobody tailored.** It proves a template exists, not that this patient was informed.
- **Signed after treatment started.** A later signature documents paperwork, not a decision.
- **The signed document is still editable.** Any subsequent change destroys the only thing giving it evidential weight.
- **The discussion is nowhere in the notes.** The form is the receipt, the clinical note is the evidence, and without the second the first stands alone.
- **No record the copy was given.** The patient says they took nothing away and there is no way to contradict it.
- **Withdrawal saved as a loose comment.** Without a state change, the record still reads as accepted.
- **Signed on someone else's open session.** The audit trail then names whoever was logged in, not whoever explained.

## How to check yours in ten minutes

1. **Open a consent signed a year ago** and see whether you get the document as signed or today's template.
2. **Look at that day's clinical note** for what was actually discussed. If there is nothing, that is the gap.
3. **Try to edit the signed document** and see whether the system lets you do it without leaving a trace.
4. **Try to record a withdrawal** and check the record reflects it as a state, not a comment.
5. **Export one consent out of the software** and check it is still readable without it.

In Dentalpin, consents sit on the patient record next to the treatment plan, every entry keeps its author and date, the timeline shows when the patient was informed and when they signed, and the whole database comes out as a standard PostgreSQL dump. The code is open, so those claims can be audited rather than taken on trust, and the hosted and self-hosted terms are on the [pricing page](/en/pricing/).

## Sources

- Montgomery v Lanarkshire Health Board [2015] UKSC 11, paragraphs 87, 89 and 90. [Find Case Law, The National Archives](https://caselaw.nationalarchives.gov.uk/uksc/2015/11). Consulted 21 August 2026.
- General Dental Council, Standards for the Dental Team, Principle 3 "Obtain valid consent", standards 3.1, 3.2 and 3.3. [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle3/principle3.aspx). Consulted 21 August 2026.
