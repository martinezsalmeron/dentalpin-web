---
title: "GDPR in a dental practice: what it actually requires of patient data"
description: "What GDPR really demands of a dental practice: why consent is not your legal basis, the record of processing, the 72-hour breach rule, DPO thresholds and record retention."
pubDate: 2026-08-08
translationKey: rgpd-clinica-dental
tags: [gdpr, data-protection, clinical-records, compliance]
---

You do not need patient consent to hold a clinical record. Article 9(2)(h) lifts the general ban on processing health data where it is necessary for medical diagnosis or the provision of health care, and Article 9(3) adds the condition a dental practice already meets: that the work is done by a professional bound by an obligation of professional secrecy. What GDPR does require is a written record of your processing activities, a contract with everyone who handles patient data for you, a breach notified within 72 hours, and a retention period you can justify.

This is not legal advice. Every official source is listed at the end, consulted on 8 August 2026.

## Consent is the expensive misunderstanding

Most practices keep a folder of signed consent forms and assume that folder is what makes the patient database lawful. It is not, and believing it has a concrete cost.

Article 9(1) prohibits processing health data as a general rule. Article 9(2) lists the exceptions that lift the prohibition, and point (h) is the clinical one: processing necessary for medical diagnosis, the provision of health or social care or treatment. Article 9(3) requires that it be done by, or under the responsibility of, a professional subject to an obligation of secrecy.

> **If consent were your legal basis, a patient could withdraw it and you would have to delete the clinical record.** You cannot, because your national retention rules require you to keep it. That contradiction is the clearest sign consent was never the right basis for the record itself.

Consent to treatment is a different instrument. It is about the clinical act, not the data, and the two are often signed in the same appointment while answering to entirely different rules.

Consent does become the basis once you step outside care. A whitening campaign to your patient list, before-and-after photographs on social media, or passing data to a third party for commercial purposes are not the provision of health care, and none of them shelter under Article 9(2)(h).

![Patient record in Dentalpin with the Info tab open: demographic details, emergency contact and medical history showing allergies, medications and systemic conditions](/screenshots/patients.png)

*This is what the record of processing has to describe: categories of data, not a list of patients.*

## The record of processing is not optional for you

This is the obligation small practices skip most often, almost always for the same reason: someone read that organisations under 250 employees are exempt.

Read Article 30(5) to the end. The exemption falls away if the processing is not occasional, if it is likely to result in a risk to rights and freedoms, **or if it includes special categories of data under Article 9(1)**. A dental practice meets all three, and the third alone is enough.

The record is an internal document. You do not file it anywhere, and you produce it if the regulator asks. Article 30(1) sets out what goes in it:

1. **Who the controller is**, with contact details, and the DPO if you have one.
2. **The purpose of each processing activity**: care, billing, scheduling, lab work, reminders.
3. **The categories of data subject and of data**: patients, guardians, staff; identifiers, health data, financial data.
4. **Who receives the data**: dental laboratory, accountant, insurers, health authorities.
5. **International transfers**, if your software or your backups sit outside the UK or the EEA.
6. **The envisaged erasure deadlines** for each category.
7. **A general description of the security measures** required by Article 32.

## What applies to you and what does not

| Obligation | Does it apply to a dental practice? | Where it says so |
|---|---|---|
| Consent as the basis for the clinical record | ✗ No, the basis is the provision of care | GDPR arts. 9(2)(h) and 9(3) |
| Record of processing activities | ✓ Yes, even with two staff | GDPR art. 30(5) |
| Privacy information given to patients | ✓ Yes | GDPR arts. 13 and 14 |
| Written contract with every processor | ✓ Yes | GDPR art. 28 |
| Breach reported within 72 hours | ✓ Yes, unless risk is unlikely | GDPR art. 33(1) |
| Data protection officer | ~ Only where core activities are large scale | GDPR art. 37(1)(c) |
| Data protection impact assessment | ~ Not mandatory by default for an individual practitioner | GDPR art. 35(3)(b) and recital 91 |
| Keeping dental clinical records for 11 years | ✓ Yes, under the NHS England schedule | NHS Records Management Code 2023 |

## Which regulator, and which rulebook

The article numbers above are shared. A practice in the United Kingdom is regulated by the ICO under the UK GDPR and the Data Protection Act 2018, which keeps the same article numbering. A practice in Ireland or elsewhere in the EU is under the EU GDPR and its own national supervisory authority.

What is not shared is retention. That is national law everywhere, and the number below is the one for NHS practices in England.

## Eleven years, and it changed recently

The NHS Records Management Code of Practice 2023 sets dental clinical care records at **11 years**. The schedule notes that this changed from 15 years in May 2023 following legal advice, that it is based on the Limitations Act 1980, and that it applies to all dental care settings, including FP17 and FP17O forms.

Two things about that number catch practices out:

- **It is recent.** Any policy written before May 2023 still says 15 years, so a practice handbook that has not been touched in three years is now describing a rule that no longer applies.
- **Dental finance records are two years**, a separate row in the same schedule and far shorter than the clinical record. Deleting on a single practice-wide timer either destroys clinical data early or keeps financial data long past its purpose.

The schedule also carries a separate row for children's records, retained until the 25th birthday or the 26th if the patient was 17 when treatment ended. Which row governs a child dental patient is worth settling with whoever owns information governance in your practice rather than assuming the 11 years covers it.

This Code is NHS England's. Do not apply an English number to a record held in Scotland, Wales, Northern Ireland or Ireland without checking the schedule that governs there.

![Patient activity in Dentalpin: appointment scheduled, treatment plan created, appointment completed and treatment carried out, each line with its date](/screenshots/patient-timeline.png)

*Each entry carries its own date, which is what lets you retain by episode instead of deleting whole patients at once.*

## The 72 hours start when you find out

Article 33(1) requires notification to the supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of the breach. Miss that and the notification has to carry reasons for the delay.

The exception is real but narrow: no notification is needed where the breach is unlikely to result in a risk to people's rights and freedoms. An encrypted laptop left on a train is not the same event as a patient list emailed to the whole mailing list.

Write this down before it happens, not during:

1. **Who decides** it is a breach, and their phone number. Nobody convenes a committee at three in the morning.
2. **How it gets logged**: time of detection, what data, how many people affected, what was done. Article 33(3) asks for exactly that.
3. **Who files** the report with the regulator, and with which credentials.
4. **When the patient is told**, which is Article 34 and only bites when the risk is high.
5. **What you keep afterwards**, because GDPR requires every breach to be documented whether or not it was reported.

## Your software vendor and your lab are processors

Anyone who handles your patients' data on your behalf is a processor, and Article 28 requires a written contract with each. In a dental practice the list is longer than it first looks: the software vendor, the dental laboratory, the accountant, the confidential waste company, whoever runs the website if the contact form stores anything.

From a software vendor, three things are worth having in writing: where the data is hosted, what happens to it when the contract ends, and how quickly they tell you if they have a security incident.

> **Running your own server does not take you outside GDPR, it makes you the one responsible for the Article 32 measures.** Encryption, tested backups and access control stop being someone else's contract clause and become your job. That is a legitimate choice and the right one for plenty of practices, but it should be made knowingly.

## What to demand from the software

No tool makes you compliant on its own, because most of this is decisions and documents. Four things, though, are either in the software or done by hand forever: named user accounts with role-based permissions, a log of who opened which record, a complete export of one patient's data so you can answer a subject access request, and retention periods you can set per data type rather than one deletion switch for everything.

Dentalpin has those four, and because the code is open the security measures can be audited rather than taken on the vendor's word. It runs on your own server or as a managed service, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 8 August 2026.

- Regulation (EU) 2016/679 (GDPR), articles 9, 28, 30, 32, 33, 34, 35 and 37, and recital 91. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- NHS England, Records Management Code of Practice 2023, retention schedule for care records. [transform.england.nhs.uk](https://transform.england.nhs.uk/information-governance/guidance/records-management-code/)
- Information Commissioner's Office, the UK supervisory authority. [ico.org.uk](https://ico.org.uk/)
