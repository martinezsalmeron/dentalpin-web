---
title: "Minor patients and guardians: who consents and who can see the record"
description: "Who consents to a child's dental treatment, when the young patient consents alone, who may see their clinical record, and what a practice has to record. With official sources."
pubDate: 2026-09-12
translationKey: pacientes-menores-tutores
tags: [minor-patients, informed-consent, clinical-records, parental-responsibility, uk-gdpr]
---

In the UK a patient of 16 or 17 consents to their own dental treatment, and their consent is as effective as an adult's. Under 16, the young patient can still consent if they understand what is involved, which is what Gillick competence means. Otherwise someone with parental responsibility consents, and by law you only need one of them.

The record is the other half of the question, and it has a different answer: the data are the child's, so a parent exercising access is exercising the child's right, not their own.

This is not legal advice. Every official source is listed at the end, consulted on 12 September 2026.

## Who consents, by age and by understanding

Section 8 of the Family Law Reform Act 1969 is the clearest sentence in this whole area: "The consent of a minor who has attained the age of sixteen years to any surgical, medical or dental treatment (...) shall be as effective as it would be if he were of full age; and where a minor has by virtue of this section given an effective consent to any treatment it shall not be necessary to obtain any consent for it from his parent or guardian".

Note that it names dental treatment specifically, and that subsection (2) extends it to any diagnostic procedure and to anaesthesia.

| Situation | Who consents | What the record needs |
|---|---|---|
| 16 or 17 | ✓ The patient | Nothing different from an adult |
| Under 16, Gillick competent | ✓ The patient | The competence assessment, for this treatment |
| Under 16, not competent | ✓ A holder of parental responsibility | Who they are and how it was verified |
| Parent refuses clinically necessary care | ~ Courts can overrule | The refusal, the date, what was explained |
| Emergency, waiting would risk the child | ✓ Treat | Why it could not wait |

> **Gillick competence is assessed per decision, not stamped on a patient.** A 14 year old can understand a fissure sealant and not understand the trade-offs of extracting four premolars for orthodontic reasons. The NHS wording is "enough intelligence, competence and understanding to fully appreciate what's involved in their treatment", and what is involved changes with the treatment.

![Patient record showing the personal details tab with contacts and responsible parties](/screenshots/patients.png)

*The patient record: where the holder of parental responsibility stops being a note in the margin and becomes a field.*

## One parent is enough, and that is worth knowing before the argument

The NHS guidance on consent for children and young people states it plainly: "By law, healthcare professionals only need 1 person with parental responsibility to give consent for them to provide treatment". It adds the practical caveat that where one parent disagrees, clinicians are often unwilling to go against their wishes and will try to reach agreement, and that the courts decide if agreement cannot be reached.

Parental responsibility itself is defined by section 3(1) of the Children Act 1989 as "all the rights, duties, powers, responsibilities and authority which by law a parent of a child has in relation to the child and his property". It is not the same thing as being the adult standing at reception.

> **The grandparent who brings the child is covered for less than people assume.** Section 3(5) of the Children Act lets a person who does not have parental responsibility but has care of the child "do what is reasonable in all the circumstances of the case for the purpose of safeguarding or promoting the child's welfare". That covers an examination of a painful tooth. It does not cover signing off a course of orthodontics.

## Who can see the clinical record

Here the framing matters more than the procedure. The ICO's guidance on children's information rights puts it in one line: even if a child is too young to understand the implications of their rights, "they are still their rights, rather than anyone else's such as a parent or guardian".

What follows from that, in the ICO's own terms:

- **A competent child exercises their own rights**, and may authorise someone else, including a parent, to act for them.
- **If the child is not competent** and the requester holds parental responsibility, "it is usually appropriate to let the holder of parental responsibility exercise the child's rights on their behalf", unless you have evidence that this is not in the child's best interests.
- **Competence is assessed** on the child's level of understanding in England, Wales and Northern Ireland. In Scotland a person aged 12 or over is presumed to have sufficient age and maturity to exercise their data protection rights unless the contrary is shown.
- **The best interests of the child come first** in any decision about disclosing their information.

So the question at the front desk is not "is this the mother?" but "is this child competent, and if not, does this adult hold parental responsibility?". Both answers belong in the record.

## The data protection age is a different age

Two thresholds get mixed up constantly, and they are about different things.

Article 8 of the UK GDPR sets the age at which a child can consent on their own to the offer of information society services directly to them, and in the UK that age is 13. In the EU version of the same article the default is 16, with Member States free to go down to 13, which is why a practice with clinics on both sides of the Channel cannot run one rule.

That threshold governs the things you do on consent: the newsletter, the case photos on social media, the patient portal sign-up. It does not govern the clinical record of the treatment, which is why a parent cannot withdraw their child's dental notes.

## What the software has to hold

1. **Date of birth as a date**, not as text. Without it nothing can tell you that a patient turns 16 next month, and that alert is half of this problem solved.
2. **Holders of parental responsibility, named**, with their relationship to the child and how it was evidenced.
3. **What you actually saw**: birth certificate, court order, or the parental responsibility agreement.
4. **Who brought the child today**, which is a different field from who holds parental responsibility.
5. **Any court-ordered restriction** as a state on the record, not a comment someone may not scroll to.
6. **The competence assessment**, per treatment, in the clinical note for that day.
7. **Consent documents frozen as signed**, with author and timestamp.

![Patient record with a timeline filterable by visits, treatments, financial entries and communications](/screenshots/patient-timeline.png)

*The timeline: who was told what and when, which is exactly what you need to reconstruct two years later.*

## Five checks in ten minutes

1. **Open the record of a 15 year old** and see whether parental responsibility is a field or a sentence in free text.
2. **Find a patient who turned 16 last year** and check whether anyone updated who consents.
3. **Try to record two holders of parental responsibility** and a restriction affecting one of them.
4. **Read the last consent you took from a child** and look for the competence assessment. If it is not there, that is the gap.
5. **Walk through a records request** from a parent you have never met and see what your process asks for before anything leaves the building.

In Dentalpin, the holder of parental responsibility and the adult who brought the patient are separate fields, every clinical entry keeps its author and date, the timeline shows who was informed and when, and the whole database comes out as a standard PostgreSQL dump. The code is open, so those claims can be audited rather than taken on trust, and the hosted and self-hosted terms are on the [pricing page](/en/pricing/).

## Sources

- Family Law Reform Act 1969, section 8. [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/1969/46/section/8). Consulted 12 September 2026.
- Children Act 1989, section 3. [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/1989/41/section/3). Consulted 12 September 2026.
- NHS, Consent to treatment: Children and young people. [nhs.uk](https://www.nhs.uk/conditions/consent-to-treatment/children/). Page last reviewed 8 December 2022. Consulted 12 September 2026.
- Information Commissioner's Office, What rights do children have? [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr-old/what-rights-do-children-have/). Consulted 12 September 2026.
- UK GDPR, Article 8, as amended. [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/8). Consulted 12 September 2026.
- Regulation (EU) 2016/679 (GDPR), Article 8. [EUR-Lex CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679). Consulted 12 September 2026.
