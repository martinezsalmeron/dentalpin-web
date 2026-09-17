---
title: "The dental medical history questionnaire: what to ask and how often to update it"
description: "What a dental health history form has to ask, which answers change today's treatment, how often it gets reviewed, and what practice software must do with the answers."
pubDate: 2026-09-17
translationKey: cuestionario-salud-paciente-dental
tags: [medical-history, clinical-records, dental-practice, practice-software]
---

A dental health history form has to ask about diagnosed and chronic conditions, past hospital admissions and surgery, current medication by name and dose, allergies, pregnancy and breastfeeding, smoking and alcohol, and relevant family history. It is not a form filled in once: it is reviewed at every visit and rewritten in full every two years.

What follows is what each block is for, what happens to it between visits, and the part that decides whether any of it works, which is what the software does with an answer that changes.

## What the form has to ask

The American Dental Association's health history form covers current and past medical conditions, illnesses and surgeries, the contact details of the patient's primary care provider and specialists, current medications, the reason for seeking dental care, and the notes from the dentist and patient conversation.

| Block | What it asks | What it decides |
|---|---|---|
| Current medication | Drug name, dose, since when | Anticoagulants and antiplatelets change how an extraction is planned |
| Anti-resorptive and anti-angiogenic drugs | Bisphosphonates, denosumab, cancer therapies | Risk of medication-related osteonecrosis of the jaw |
| Cardiac history | Prosthetic valve, previous endocarditis, congenital heart disease | Antibiotic prophylaxis before invasive procedures |
| Allergies | Drugs, latex, metals, anaesthetics | Prescribing and materials |
| Diabetes | Diagnosis and most recent HbA1c | Feeds the periodontitis grade |
| Smoking | Cigarettes per day | Feeds the same grade |
| Pregnancy and breastfeeding | Gestational week | Radiographs and prescribing |
| Admissions and surgery | Date and reason | Context for everything above |

The right-hand column is the whole justification for the form. A block that changes no decision is a field nobody will fill in carefully twice.

![Patient record showing personal details and the medical information block](/screenshots/patients.png)

*The patient's details and their answers, in the record the front desk already opens every day.*

## The four answers that change today's appointment

- **Anticoagulants and antiplatelets.** The Scottish Dental Clinical Effectiveness Programme guidance (2nd edition, March 2022) recommends confirming the details of the patient's medical history in advance, by phone or other remote methods, to check for changes that could affect treatment. That call is only possible if the previous answer is recorded and findable.
- **Anti-resorptive and anti-angiogenic drugs.** The same programme's MRONJ guidance exists to help the dental team assess an individual patient's risk level. Its scheduled review, completed in March 2024, left the 2017 edition extant and added a supplement with updated incidence estimates and drug information.
- **High risk of infective endocarditis.** The European Society of Cardiology's 2023 endocarditis guidelines recommend antibiotic prophylaxis for high-risk patients before dental extractions, oral surgery, and procedures involving manipulation of the gingival or periapical region of the teeth, including scaling and root canal procedures, as a Class I recommendation at level of evidence B.
- **Smoking and diabetes.** In the 2018 American Academy of Periodontology and European Federation of Periodontology classification, both are grade modifiers: fewer than 10 cigarettes a day against 10 or more, and HbA1c below 7.0% against 7.0% or above in patients with diabetes.

> **A risk answer that lives in a scanned PDF does not exist.** If it is not searchable and does not surface when the record opens, the practice has the signed paper and not the information. Turning an answer into something the team actually sees is covered in [medical alerts in the record](/en/blog/medical-alerts-dental-records/).

## The form is a living document, not an intake ritual

This is the part most practices have not solved, and it decides whether the rest is worth anything.

The ADA is explicit on both halves. Active patients of record should review and update their history at every visit, and all patients should complete a new health history form every two years. And responsibility does not move: staff can help patients complete or update their forms, but the dentist is ultimately responsible for obtaining, maintaining and reviewing current health histories.

The questions themselves age too. The ADA's Council on Dental Practice approved two new questions in January 2026, one screening for mental health and one asking whether the patient has taken a GLP-1 receptor agonist, with updated forms available from 24 March 2026. A form printed in 2019 does not ask about that drug class at all.

> **Two years is the life of the form, not the life of an answer.** Between one form and the next, the per-visit review is what keeps the history current, and it is the step that almost never leaves a trace in the record.

## The legal layer is national, and the questionnaire sits inside the clinical record

Whatever country you practise in, the health history is part of the patient's clinical record rather than an administrative extra, so the national rules on record content, retention, correction and patient access apply to it. Those rules differ: retention alone runs from five years to twenty depending on the country, which is why [how long to keep dental records](/en/blog/how-long-to-keep-dental-records/) is a separate post per market.

Two requirements are worth designing for whatever your jurisdiction, and both are written down in the countries that spell them out:

- **A corrected entry cannot quietly replace the old one.** German law is the blunt example: § 630f of the Bürgerliches Gesetzbuch allows changes to the treatment record only if the original content and the date of the change remain recognisable, and says explicitly that this must also be ensured for records kept electronically. The Polish documentation regulation gets to the same place from the other side, requiring that entries and changes to entries carry the identifier of the person making them.
- **The patient can have inaccurate data corrected.** Under the GDPR that is a right rather than a favour, and it is routine in a health questionnaire: an allergy that turned out not to be one, a drug that was stopped last year. The French regulator sets the clock at one month for a response, extendable to three depending on complexity.

This is not legal advice. Check the requirement against your own regulator's text and your indemnity provider's guidance.

## What the software has to do

- **Keep every version, not the current state.** If the 2022 answer vanishes when the form is updated in 2026, the practice can no longer reconstruct what it knew on the day of that extraction.
- **Date and attribute every change,** with the person who made it. An unattributed medical history is a claim with nobody behind it.
- **Turn answers into alerts,** not free text. A flagged allergy belongs on the record header and on the prescribing screen, not on page three of a form.
- **Prompt the review at every visit** and record that it happened even when nothing changed. "Reviewed, no changes, 17 Sep 2026" is a clinical entry.
- **Separate what the patient declared from what the clinician confirmed.** A form completed at home is a draft until someone reviews it in the chair, and the record should show which it is.
- **Identify whoever answers remotely.** A link sent by email or text has to reach the right patient and must not leave answers floating loose in an anonymous form.
- **Export it with the rest of the record.** The questionnaire is part of the clinical record, so it leaves with it or it does not leave at all.

![Patient record on the activity tab, with clinical alerts and a filterable timeline](/screenshots/patient-timeline.png)

*Every entry keeps its date, which is what makes what was declared then comparable with what is declared today.*

Sending the form before the appointment changes the first visit, it does not replace it: that protocol is in [the first dental visit](/en/blog/first-dental-visit-protocol/). And the questionnaire is not consent, which is signed for a different purpose and covered in [digital informed consent](/en/blog/digital-informed-consent-dentistry/).

## Ten minutes to test your own system

1. **Open a patient you first saw five years ago** and look for the medication they declared then. If only the current list is there, you have no history.
2. **Change an allergy** and check whether the previous value stays readable, with who changed it and when.
3. **Flag an antibiotic allergy,** then open the prescribing screen and see whether it warns you.
4. **Send the form to a patient** and find where their answers land before a clinician reviews them.
5. **Search for every patient on an anticoagulant.** If that is not a query, it is a filing cabinet.
6. **Find the date of the last medical history review** on any record.
7. **Export a full record** and check whether the questionnaire and its versions come out inside it.

Nobody tests step 7 until the day it matters, and by then it cannot be fixed.

This is not clinical advice either. What to ask, and how often, in an individual case is a decision for the clinician treating the patient, against current guidance.

In Dentalpin the health questionnaire is part of the patient record: every answer is stored with its date and author, earlier ones stay readable in the timeline, anything flagged as an alert surfaces when the record opens, and all of it comes out as an ordinary PostgreSQL dump whenever you ask. What the hosted and self-hosted options include is on the [pricing page](/en/pricing/).

## Sources

- American Dental Association, *Medical/Dental Health History*. [ada.org](https://www.ada.org/resources/practice/practice-management/medical-dental-health-history). Accessed 17 September 2026.
- ADA News, *ADA adds mental health, GLP-1 questions to health history forms*, 25 March 2026. [adanews.ada.org](https://adanews.ada.org/ada-news/2026/march/ada-adds-mental-health-glp1-questions-to-health-history-forms/). Accessed 17 September 2026.
- Scottish Dental Clinical Effectiveness Programme, *Management of Dental Patients Taking Anticoagulants or Antiplatelet Drugs*, 2nd edition, March 2022. [sdcep.org.uk](https://www.sdcep.org.uk/published-guidance/anticoagulants-and-antiplatelets/). Accessed 17 September 2026.
- Scottish Dental Clinical Effectiveness Programme, *Oral Health Management of Patients at Risk of Medication-related Osteonecrosis of the Jaw*, 2017 edition with the March 2024 supplement. [sdcep.org.uk](https://www.sdcep.org.uk/published-guidance/medication-related-osteonecrosis-of-the-jaw/). Accessed 17 September 2026.
- European Society of Cardiology, *2023 ESC Guidelines for the management of endocarditis*, *European Heart Journal* 2023;44(39):3948, antibiotic prophylaxis in high-risk patients, Class I, level B. [academic.oup.com](https://academic.oup.com/eurheartj/article/44/39/3948/7243107). Accessed 17 September 2026.
- American Academy of Periodontology and European Federation of Periodontology, *Staging and Grading Periodontitis*, grade modifiers, after Tonetti, Greenwell and Kornman, *J Periodontol* 2018;89(Suppl 1):S159-S172. [perio.org](https://www.perio.org/wp-content/uploads/2019/08/Staging-and-Grading-Periodontitis.pdf). Accessed 17 September 2026.
- § 630f German Civil Code (Bürgerliches Gesetzbuch), documentation of treatment. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__630f.html). Accessed 17 September 2026.
- Polish Ministry of Health regulation of 6 April 2020 on the types, scope and templates of medical documentation, consolidated text Dz.U. 2024 item 798, § 4. [dziennikustaw.gov.pl](https://dziennikustaw.gov.pl/D2024000079801.pdf). Accessed 17 September 2026.
- CNIL, *Le droit de rectification*, on the one-month deadline for responding to a rectification request. [cnil.fr](https://www.cnil.fr/fr/le-droit-de-rectification-corriger-vos-informations). Accessed 17 September 2026.
