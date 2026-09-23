---
title: "Referring a patient on: what travels with the referral and what comes back"
description: "What a dental referral has to carry, what the receiving clinician owes you back, and how to find the referrals that quietly never returned."
pubDate: 2026-09-23
tags: [clinical-records, referrals, gdpr, workflow]
translationKey: derivacion-pacientes-clinica-dental
---

Four things travel with a referral: the clinical question you are actually asking, the part of the record needed to answer it, the radiographs with their capture dates, and the patient's medical alerts. What comes back is a report with the diagnosis, what was done and what is still outstanding. What does not travel is your obligation over your own record, which stays yours and keeps running its retention clock. And the clinician receiving the patient is not your processor. They are a separate controller who decides for themselves what to write down.

This is not legal or clinical advice. The regulatory detail below is anchored on the UK, because the answer is national everywhere else. Sources are at the end, consulted on 23 September 2026.

## Three different things we all call "referring"

One word covers three situations that are recorded differently and in which different things come back. Knowing which one you are in decides everything else.

| | Advice only | A single episode of treatment | Transfer of care |
|---|---|---|---|
| Who stays in charge of the case | The referrer | The referrer | The receiving clinician |
| What travels | The question and just enough to answer it | The question, the site and the images | The full record |
| What comes back | ✓ A written opinion | ✓ A report closing the episode | ~ Only what is agreed in writing |
| Who books the review | The referrer | The referrer | The receiving clinician |
| Who keeps the record | Each keeps their own | Each keeps their own | Each keeps their own |

That last row is the one most often misread. Referring does not empty your filing cabinet, and it does not stop the retention clock either. If you need the retention periods themselves, they are in [how long to keep dental records](/en/blog/how-long-to-keep-dental-records/), which also explains why there is no single UK number.

## What the GDC actually requires

Standard 6.3 of the GDC's Standards for the Dental Team is short: "You must delegate and refer appropriately and effectively." The sub-point that matters for the record is 6.3.5, which says that "If you need to refer a patient to someone else for treatment, you must explain the referral process to the patient and make sure that it is recorded in their notes."

Two obligations sit inside that sentence, and practices routinely do the first and skip the second. Explaining the referral is a conversation. Recording it is a line in the notes that someone can find eight months later.

Standard 6.3.1 adds the principle that sits behind all of it: "You can delegate the responsibility for a task but not the accountability." Referring is not delegation, but the direction of travel is the same. Sending the patient somewhere else does not end your interest in what happens to them.

## What travels with the referral

- **The clinical question, written as a question.** "Assess LL8, recurrent pericoronitis since June" can be answered. "For assessment" cannot.
- **When it started.** The onset date changes the differential and is almost never in the letter.
- **What has already been tried.** Which treatment, when, and with what result, so the patient is not walked down the same road twice.
- **The medical alerts.** Allergies, anticoagulants, bisphosphonates, valve prostheses, pregnancy. The highest-consequence items and the ones most likely to stay behind on your screen.
- **Radiographs with their capture dates.** A periapical from two years ago says something different from one taken last week, and without a date they are indistinguishable.
- **What the patient already believes.** What you have told them and what they are expecting, so they do not receive two different accounts.

![Patient record with the information tab open: contact details, emergency contact and medical history with allergies and conditions](/screenshots/patients.png)

*Allergies and medical history live on this screen, and they are the first thing left behind when a referral is written out by hand.*

> **A referral letter is not a copy of the record.** They are two documents with two different rule sets. You write the letter and send it to a colleague. The copy of the record goes to the patient when they ask for it, with its own deadline and format, and that is [a separate job](/en/blog/patient-requests-their-dental-records/) that is not solved by forwarding the same PDF.

## The receiving clinician is a controller, not your processor

This is the expensive confusion. Your software is a processor because it handles data on your documented instructions. The oral surgeon you refer to does not follow your instructions. They apply their own judgement, decide what to record, open their own record and answer for it themselves. They are a separate controller.

The European Data Protection Board sets out the test using an accountancy example: where the third party processes the data "in accordance with legal provisions regulating the tasks" of its own profession and decides itself what data it needs, how long to keep it and by what means, it is a controller in its own right. A clinician diagnosing and treating a patient is squarely there.

Three practical consequences:

1. **You do not sign an Article 28 contract with them.** What happens is a disclosure between controllers, not a processing instruction.
2. **You need a lawful basis for the disclosure**, and for health data an Article 9 condition on top. The usual one is Article 9(2)(h), processing necessary for medical diagnosis and the provision of care by a professional bound by a duty of confidentiality.
3. **The patient has to know.** Not as a tick buried in a generic consent form, but knowing who is being written to and why, which is also what gets them to turn up.

## What has to come back

This is where most referral loops break. The letter goes out, nobody has defined what is expected in return, and what comes back is a text message saying "all done", or nothing at all.

Ask for these in the referral letter itself:

- **The diagnosis**, not just the procedure performed.
- **What was actually done**, with the teeth or sextants involved.
- **What is outstanding** and who is picking it up.
- **Any new radiographs**, which are often better than yours and which the patient has already paid for.
- **Follow-up warnings**: what to watch, over what period, and what would count as a red flag.

> **The date the report comes back matters as much as the content.** If it arrives two months after the appointment, the patient has already been through your chair without you knowing what was done. A referral loop is measured by the time between sending and the report landing, not by the number of referrals made.

## Images should not leave by email

Attaching radiographs to an email is the point at which most small practices lose control of the data. A copy leaves with no expiry, into an inbox you do not control, and it gets forwarded and ends up on somebody's phone.

Realistic alternatives, in ascending order of effort:

1. **An expiring link** generated from the software itself, revocable, that records who opened it.
2. **A portal the receiving clinician signs into with their own account**, which turns every access into a line in the log.
3. **A DICOM exchange** with the imaging centre, where that bridge already exists. That is the same plumbing described in [integrating imaging with practice management](/en/blog/dental-imaging-integration/).

One frequent mix-up worth naming: sending a case to the laboratory is not a referral. The lab works on your instructions and is a processor, with its Article 28 contract. That workflow is in [the dental lab case workflow](/en/blog/dental-lab-case-workflow/), and it looks more like a referral than is good for anyone, which is exactly why the two get conflated.

## The referral that never came back

No practice loses referrals deliberately. They are lost because nothing is counting them. The patient did not attend, or attended and the report sat in a tray, and there is no screen anywhere on which that shows up as outstanding.

![Patient record, activity tab: clinical alerts, active plan and a timeline filterable by visits, treatments, financials and communications](/screenshots/patient-timeline.png)

*A referral recorded as a dated event on the timeline is what lets you search later for the ones still open.*

The minimum loop that actually closes has five steps:

1. **Record the referral as a dated event**, not as a loose note at the bottom of the history.
2. **Store who it went to and what was asked**, because in six months nobody remembers what the question was.
3. **Put a review date on the referral itself**, not on the patient's next appointment. They are different things and the second may never exist.
4. **Review the referrals with no report back, once a month.** Five minutes and a list.
5. **Close the referral when the report arrives**, attaching it to the record, so that the list in the previous step keeps meaning something.

Two numbers fall out of that and are worth more than a referral count: **the average days until a report comes back**, and **the percentage of referrals still open after ninety days**. The second one is uncomfortable the first time you look at it.

## What the record has to be able to show afterwards

A referral leaves two trails, asked for at different moments. The clinical one, to know what was decided and why. And the access log, to know who opened that record and when, which is the subject of [audit trails on dental records](/en/blog/audit-trail-dental-records/).

One case worth thinking through in advance is the practice changing hands. There you are not referring a patient, you are transferring the whole archive, and the rules are different. That is in [what happens to patient records when a practice is sold](/en/blog/dental-practice-sale-patient-records/).

## What to ask of your software

Three things, none of them exotic. That a referral is a record type with a date, a recipient and a status, rather than free text. That you can list the ones still open. And that the report coming back attaches to the patient record instead of living in an inbox.

Dentalpin records a referral as a dated event on the patient timeline, with its status and with the report attached when it arrives, and the access log sits in a PostgreSQL database that is yours and that produces a standard dump on demand. It is open source, you can host it yourself or take it managed, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 23 September 2026.

- General Dental Council, Standards for the Dental Team, Principle 6, standards 6.3, 6.3.1 and 6.3.5. [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle6/principle6)
- Regulation (EU) 2016/679 (GDPR), Articles 4, 9(2)(h) and 28, retained in UK law as the UK GDPR. [EU Publications Office, CELEX 32016R0679](https://publications.europa.eu/resource/celex/32016R0679)
- European Data Protection Board, Guidelines 07/2020 on the concepts of controller and processor, "Example: Accountants". [edpb.europa.eu](https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_en.pdf)
