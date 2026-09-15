---
title: "Selling a dental practice: what happens to the patient records"
description: "Records are not an asset like the chairs. What the ICO expects on a change of controller, what confidentiality adds on top, and how HIPAA treats a practice sale."
pubDate: 2026-09-15
translationKey: traspaso-clinica-dental-historias
tags: [patient-records, data-protection, practice-sale, practice-management-software]
---

Patient records do not transfer with the fixtures. In the UK the sale is a change of controller that has to survive data protection due diligence and, separately, the duty of confidentiality you owe each patient. In the United States, HIPAA is explicit that a sale between covered entities counts as health care operations, which is a materially different answer.

That difference matters more than any clause in the sale agreement, because it decides whether the buyer can open a record on day one or has to wait for the patient to walk back in.

## The sale is a change of controller, and that is a project

The ICO's statutory data sharing code has a section on exactly this situation. Its summary is short: if a merger or acquisition or other change in organisational structure means you have to transfer data to a different or additional controller, "you must consider data sharing as part of the due diligence you carry out when taking on the organisation and its obligations".

The code lists what that means in practice. You need to establish what data you are transferring, identify the purposes for which the data was originally obtained, establish your lawful basis for sharing it, comply with the data protection principles, and document the sharing. It applies to both sides of the deal, "whether you are the sharing or recipient controller".

> **Transparency is the item that gets left until last and should be first.** The code tells you to consider when and how you will inform individual data subjects about what is happening to their data. A letter after completion is not the same thing as a plan.

## Confidentiality is the second lock, and it has a different key

Having a lawful basis under data protection law does not, by itself, answer the clinical confidentiality question. The GDC's standards put that duty on every member of the dental team.

Standard 4.2 requires you to "protect the confidentiality of patients' information and only use it for the purpose for which it was given", and its guidance adds that confidentiality "is central to the relationship and trust between you and your patients", covering personal details, medical history, treatment and cost.

Standard 4.1 is the one that decides how big the handover actually is. A patient record is not just the notes: "Radiographs, consent forms, photographs, models, audio or visual recordings of consultations, laboratory prescriptions, statements of conformity and referral letters all form part of patients records where they are available."

![Patient record showing clinical alerts, the active treatment plan and a timeline that can be filtered by visits, treatments, finances and communications](/screenshots/patient-timeline.png)

*One patient's activity in a single timeline, filtered by visits, treatments, payments and messages.*

## The United States answers it in the regulation itself

HIPAA settles the question that the UK leaves to judgement. The definition of health care operations in 45 CFR 164.501 includes, in paragraph (6)(iv), "The sale, transfer, merger, or consolidation of all or part of the covered entity with another covered entity, or an entity that following such activity will become a covered entity and due diligence related to such activity".

Two conditions are doing the work in that sentence. The counterparty has to be a covered entity, or become one through the transaction, and the disclosure has to relate to that transaction. A buyer who is not a covered entity is not covered by this route.

| Question | United Kingdom | United States |
|---|---|---|
| Is a practice sale an anticipated disclosure? | ~ Treated as a change of controller under the data sharing code | ✓ Named in 45 CFR 164.501 as health care operations |
| Does confidentiality add a separate duty? | ✓ Yes, GDC standard 4.2 | ✓ Yes, state law and professional duties still apply |
| Is due diligence itself covered? | ~ Required, and it is your due diligence to document | ✓ Expressly included |
| Does the buyer need to be a regulated provider? | ~ Not stated in those terms | ✓ Must be, or become, a covered entity |

## What the record actually contains

The handover is always bigger than the practice management software, and the inventory is the part worth doing before anyone signs.

- **Clinical notes for every course of treatment**, with the treating clinician named, which standard 4.1.4 requires.
- **Radiographs and clinical photographs**, which are frequently on a separate imaging server and not in the backup anyone tested.
- **Consent forms**, signed, with their dates and versions.
- **Treatment plans and estimates**, accepted or declined.
- **Laboratory prescriptions and referral letters**, which standard 4.1.1 counts as part of the record.
- **Financial history**, which is patient data too and is usually the only part everyone remembers to migrate.

![List of invoices showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Invoicing history for a practice, which is patient data and travels with the sale like everything else.*

## How to run the handover

1. **Inventory the records before heads of terms**, by count, by year and by where each piece physically lives.
2. **Decide who is controller for what** after completion, and write it into the agreement rather than the data room index.
3. **Do the due diligence the code asks for**, and keep the document that shows you did it.
4. **Write to patients before completion**, saying who will be treating them and what happens to their record.
5. **Keep the incoming archive separated** in the software until a patient returns, which is the cheapest way to respect both duties at once.
6. **Log every first access** to an inherited record, so that "we only looked at the ones who came back" is a report rather than a claim.
7. **Agree who answers subject access requests** made years later, because someone will.
8. **Follow national retention advice**, as standard 4.1.3 requires, rather than a rule of thumb from the seller.

> **A dead patient record is still a live obligation.** Whoever ends up holding the archive has to be able to find one patient in it, produce a complete copy, and prove who has opened it. If neither party can do that on the day of completion, the deal has a defect that nobody has priced.

## What the software has to support

- **Two separate populations** in one installation, with different permissions, and no database copied onto a laptop.
- **Per-patient release** of an inherited record, with the reason and the date.
- **An access log** both parties can read.
- **A complete export** of one patient, including images and consents, for anyone who chooses a different practice.
- **A full archive export** in a format that outlives the software, for whoever keeps the retained records.

In Dentalpin an inherited archive can be held locked and released patient by patient, every access is logged, and full export of a single patient or the whole practice is included with no per-user fee: the details are on the [pricing page](/en/pricing/).

**This is not legal advice.** The official sources are below; a specific sale needs your own solicitor or attorney, and in the UK the ICO is the authority on the data protection half.

## Sources

- Information Commissioner's Office, *Data sharing: a code of practice*, section "Due diligence when sharing data following mergers and acquisitions". Accessed 15 September 2026. <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/data-sharing-a-code-of-practice/due-diligence/>
- General Dental Council, *Standards for the Dental Team*, Principle 4, standards 4.1 and 4.2 with guidance. Accessed 15 September 2026. <https://standards.gdc-uk.org/pages/principle4/principle4>
- 45 CFR 164.501, definition of "health care operations", paragraph (6)(iv). Electronic Code of Federal Regulations. Accessed 15 September 2026. <https://www.ecfr.gov/current/title-45/section-164.501>
