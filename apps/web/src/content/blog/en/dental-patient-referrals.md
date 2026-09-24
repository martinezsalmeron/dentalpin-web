---
title: "Referring a patient to another dentist: what travels with the referral and what comes back"
description: "What a dental referral has to carry, what the GDC standards require you to record, and how to find out when a referred patient never came back."
pubDate: 2026-09-24
translationKey: derivacion-pacientes-clinica-dental
tags: [referrals, clinical-records, gdpr, practice-management]
---

A referral carries the specific clinical question you are asking the other clinician, the part of the record needed to answer it, and the radiographs with the dates they were taken. Something has to come back too: a report from whoever treated the patient, filed in your own records like any other clinical entry.

The hard part is almost never what to send. It is what happens afterwards. A referral sent from somebody's phone leaves no trace in the practice software, and three months later nobody can tell you whether that patient ever went.

## The GDC treats the referral as something you record, not something you mention

Standard 6.3.5 of *Standards for the Dental Team* is short and is the whole administrative story: "If you need to refer a patient to someone else for treatment, you must explain the referral process to the patient and make sure that it is recorded in their notes." It is a *must*, and the second half of it is the part that gets skipped.

Standard 6.3.4 covers the content: "If you ask a colleague to provide treatment, a dental appliance, or clinical advice for a patient, you should make your request clear and give your colleague all the information they need." Standard 6.3.3 covers when: "You should refer patients on if the treatment required is outside your scope of practice or competence."

> **Standard 1.7.6 is the one people forget exists.** "When you are referring patients to another member of the dental team, you must make sure that the referral is made in the patients' best interests rather than for your own, or another team member's, financial gain or benefit." Reciprocal referral arrangements are exactly the thing it is pointed at.

## The receiving practice is a separate controller

This is the part that gets treated as a formality and is not one. The practice you refer to does not process the data on your instructions and is not your processor. It decides what it does with the record and answers for it itself. So your processor agreement with your software supplier does not cover the transfer, and the patient needs to know it is happening.

Under the UK GDPR the lawful basis for the transfer is ordinary enough, because care is what the special-category condition for health purposes exists for, but a lawful basis is not a substitute for telling the patient who you are sending them to and why. Record that conversation in the notes, which standard 6.3.5 already requires you to do anyway.

## What actually travels

Sending too much is as common as sending too little. Too much is exporting the whole record "just in case". Too little is a message saying "sending you Mrs Doyle for an implant" and nothing else.

- **The specific question.** Not "please assess", but what decision you want back: extraction of the LL8, perio assessment before restorative work, an ortho opinion ahead of a bridge.
- **Medical history and alerts.** Anticoagulants, bisphosphonates, allergies, diabetes, pregnancy. This is the part that does harm when it does not arrive.
- **What has already been tried**, with dates. A treatment that failed is diagnostic information, not an admission.
- **The relevant radiographs with their exposure dates.** A periapical from two years ago reads differently from last week's, and the date is the first thing lost when an image is forwarded.
- **The charting as it stands today**, not a hand-written summary of it.
- **Who remains the treating dentist**, and where the patient comes back to.

![Patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Clinical alerts and charting on the same screen as the plan in progress: what you read before writing a referral.*

## What has to come back

Standard 6.5.1 puts it in the record: "You should document any discussions you have with colleagues about a patient's treatment, including any decisions you have reached or changed, in that patient's notes." A phone call that resolves the case and is never written down leaves your record with a gap over exactly the period the patient was elsewhere.

| What comes back | Does it belong in the record? |
|---|---|
| A written report from the treating clinician | ✓ Yes, it is clinical documentation |
| New radiographs taken there | ✓ Yes, with their dates and origin |
| Implant or graft materials placed, with batch numbers | ✓ Yes, traceability belongs to the record |
| A voicemail saying it is done | ✗ No: not a record |
| Nothing, because the patient never attended | ~ You still need to know, and that is a diary problem |

## The half no referral template covers: finding out it never came back

An open referral is a task with no owner. The patient walks out, the receiving practice has no duty to chase you, and nothing in your system expires.

1. **Record the referral against the patient**, not in a notebook or a chat thread. Date, recipient, reason, and what was sent.
2. **Set a review date when you make it**, not afterwards. An implant needing six weeks of healing has an obvious date; a perio referral, four.
3. **Make the open referral visible when the record opens**, beside the alerts, not buried in an attachment.
4. **Review referrals with no report once a month**, the same way you review unaccepted treatment plans.
5. **Close it when the report arrives**, so the list shrinks and means something.

> **A referral with no review date is a hope, not a follow-up.** The patient who does not attend the specialist and does not come back to you is the one who reappears later with the same problem, by which point nobody remembers a referral was ever made.

![Patient record, activity tab: clinical alerts, the active plan and a timeline filterable by visits, treatments, financial entries and communications](/screenshots/patient-timeline.png)

*The patient's activity in one timeline, filterable by visits, treatments, financial entries and communications.*

## Images, without turning them into loose attachments

An email with four compressed radiographs is the quickest way to lose track of who holds what. Three practical tests:

- **The image leaves with its exposure date intact**, not as a screengrab.
- **The practice keeps a record of what was sent**, so that a year later you can answer "did you send them the OPG?".
- **The send is a logged access**, because exporting a patient's imaging is an access to their record like any other.

This meets two things written up separately: [integrating imaging with the practice software](/en/blog/dental-imaging-integration/) and [what an audit trail should record](/en/blog/audit-trail-dental-records/).

## What is not a referral

Worth separating, because they get confused and the duties are different:

- **Sending a case to the lab** is not referring to a colleague: the lab works to your prescription and on your instructions. That is [the lab case workflow](/en/blog/dental-lab-case-workflow/).
- **A patient asking for their own records** is a subject access request and is answered differently, as set out in [this article](/en/blog/patient-requests-their-dental-records/).
- **Selling the practice** moves every record at once and is [a separate problem entirely](/en/blog/dental-practice-sale-patient-records/).

## What the software has to be able to do

- **Create the referral as a record entry**, with recipient, reason and date.
- **Attach the selected images** without pulling them out of the record.
- **Mark the referral open** and list all open ones in one place.
- **File the returning report against that referral**, not as an anonymous PDF.
- **Log the access** of whoever exported or sent the data.

In Dentalpin a referral is created from the record itself, pulls in the medical alerts and whichever images you choose, stays open until the return report is filed against it, and every export is written to the access log. It is included, with no per-user charge: the detail is on the [pricing page](/en/pricing/).

This is neither legal nor clinical advice. When to refer is a professional judgement that no article decides. The sources are below; for a specific case, check with your indemnity provider or your regulator.

## Sources

- General Dental Council, *Standards for the Dental Team*, Principle One, standard 1.7.6. Consulted 24 September 2026. <https://standards.gdc-uk.org/pages/principle1/principle1>
- General Dental Council, *Standards for the Dental Team*, Principle Six, standards 6.3.3, 6.3.4, 6.3.5 and 6.5.1. Consulted 24 September 2026. <https://standards.gdc-uk.org/pages/principle6/principle6>
- Regulation (EU) 2016/679, article 9(2)(h) and 9(3), as retained in UK law. Consulted 24 September 2026. <https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679>
