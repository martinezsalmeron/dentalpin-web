---
title: "A patient asks you to delete their records: why you usually cannot, and what to do instead"
description: "Dental records are almost never erasable: retention is a legal duty. What to reply, within what deadline, what you can delete, and how to restrict instead."
pubDate: 2026-10-01
translationKey: paciente-pide-borrar-sus-datos-dental
tags: [gdpr, dental-records, patient-rights, compliance]
---

If a patient asks you to delete their dental records, the answer is almost always no, and you have one month to put that in writing. The right to erasure does not apply where you are required by law to keep the data, and keeping clinical care records is exactly that kind of duty. What you can delete is everything in the file that is not part of their care.

That split is the whole job. A deletion request is rarely one thing: it usually bundles the clinical record together with a mobile number used for reminders, a marketing consent, and sometimes a before-and-after photo on social media. Three of those four you can act on.

## The right to erasure is real, and it has a list of exceptions

The ICO is explicit that the right has limits: "The right is not absolute and only applies in certain circumstances."

Two of its exceptions decide this case. The first is the legal obligation ground: "If you are required by law to process individuals' personal data, then the right to erasure will not apply."

The second is specific to health, and most practices have never read it. The right does not apply, the ICO says, "if the processing is necessary for the purposes of preventative or occupational medicine; for the working capacity of an employee; for medical diagnosis; for the provision of health or social care; or for the management of health or social care systems or services. This only applies where the data is being processed by or under the responsibility of a professional subject to a legal obligation of professional secrecy."

A dental practice is inside that exception for the clinical record, and outside it for the newsletter list.

> **The deadline is one month and it applies to a refusal too.** The ICO: "You must respond to a request for erasure without undue delay and at the latest within one month, letting the individual know whether you have erased the data in question, or that you have refused their request."

## How long you have to keep the record is a national question

There is no single European answer, and a page that gives one is wrong somewhere. For NHS dental care in England the NHS Business Services Authority states the figure plainly: clinical care records are kept 11 years, finance-related records 2 years, and the PR form 2 years from the end date of the course of treatment.

A private practice, or a practice in Scotland, Wales or Northern Ireland, works from its own retention rules rather than that one. What does not change is the shape of the answer: find the period that binds you, write it down, and cite it when you refuse. We go through this in [how long to keep dental records](/en/blog/how-long-to-keep-dental-records/).

![Patient record with the activity tab open, showing the timeline of visits, treatments and communications](/screenshots/patient-timeline.png)

*A patient timeline, with the date of every entry.*

## Field by field: what goes and what stays

| What the patient asks for | Can it be erased? | What happens instead |
|---|---|---|
| Clinical notes, charting, treatment history | ✗ No, while the retention period runs | Refused in writing, citing the duty |
| Radiographs and diagnostic photographs | ✗ No, they are part of the care record | Kept, on their own clock |
| Signed consent forms | ✗ No, they are the evidence of consent | Kept |
| Marketing consent and newsletter | ✓ Yes, withdraw and delete | Unsubscribed, with the withdrawal logged |
| Promotional photos on social media | ✓ Yes, that is a different purpose | Taken down |
| Phone or email used only for reminders | ~ Depends whether still necessary | Stop using it for messages |
| A duplicate record created by mistake | ✓ Yes, after merging the clinical content | Merge first, then delete |
| An enquirer who never became a patient | ✓ Usually yes, there is no care record | Deleted, unless a claim is live |

The duplicate row is the one that most often resolves the request in practice, and the order matters: merge, then delete, never the other way round.

## Restriction is the answer you give when erasure is not

Article 18 of the UK GDPR gives a separate right, and it is the one that fits this situation. Where you cannot erase because you must keep the data, you can still stop using it for anything other than keeping it.

In a dental practice that means a concrete, checkable change: the record stays retrievable for clinical and legal purposes, and the patient comes out of recall, out of reminders, out of the marketing list and out of any report that is not a legal requirement.

Offering restriction is also how a refusal stops feeling like a brush-off. The patient asked to be left alone, and most of what they actually wanted can be delivered without touching a single clinical note.

> **A refusal that does not mention the ICO is itself a breach.** The guidance is specific about what to tell the individual: "the reasons you are not taking action; their right to make a complaint to the ICO or another supervisory authority; and their ability to seek to enforce this right through a judicial remedy."

## The reply, step by step

1. **Log the date the request arrived**, because the month runs from receipt.
2. **Identify the requester** without asking for more documentation than you need.
3. **Split the request** into clinical record, contact details, marketing and images.
4. **Have a clinician decide** on the clinical part, since that decision is a professional one.
5. **Act on what you can**, and record what you deleted and when.
6. **Apply restriction** to what you must keep, and take the patient out of recall and reminders.
7. **Reply in writing** naming the retention duty, the exception you rely on, the right to complain to the ICO and the judicial remedy.
8. **Note the whole thing in the access log**, because handling the request is itself processing.

![Patient record showing the patient information tab](/screenshots/patients.png)

*The patient details tab, where the fields that are not clinical live.*

## What the software has to let you do

Almost none of this shows up in a demo, and it is what decides whether you answer inside the month or improvise.

- **Separate clinical fields from contact fields**, so you can delete the second without touching the first.
- **A real restriction state**, that stops the record feeding recall and campaigns rather than just hiding it from a list.
- **Merge duplicates** carrying the notes, the images and the quotes across.
- **Withdraw consent per purpose**, not one switch that turns everything off.
- **Leave a trace** of the operation with user, date and what changed, which is what you show if a complaint follows. We cover that in [audit trails for dental records](/en/blog/audit-trail-dental-records/).
- **Export before you delete**, because patients often accept a copy of their file instead of erasure.

In Dentalpin the record keeps contact fields separate from clinical ones, consents are withdrawn per purpose, and every operation lands in the access log with a user and a timestamp. The code is published and so is the [pricing](/en/pricing/).

This is not legal advice. The retention period that binds you depends on where you practise and whether a claim is open, and a refusal is worth a second read from your own adviser before you send it.

## Sources

- Information Commissioner's Office, "Right to erasure", UK GDPR guidance and resources. Consulted 1 October 2026. <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-erasure/>
- NHS Business Services Authority, knowledge base article KA-01913, "How long should NHS dental practices keep patient records for?". Consulted 1 October 2026. <https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01913/en-us>
- UK GDPR, Articles 12(3), 12(4), 17(3)(b), 17(3)(e), 18 and 9(2)(h). Consulted 1 October 2026.
