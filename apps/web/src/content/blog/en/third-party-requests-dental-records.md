---
title: "A court, an insurer or another dentist asks for a patient's records: what you hand over"
description: "Who other than the patient can demand dental records in the US and the UK, what a subpoena without a court order requires, and who can get a deceased patient's record."
pubDate: 2026-10-05
translationKey: tercero-pide-la-historia-clinica-dental
tags: [clinical-records, data-protection, patient-rights, practice-management]
---

Work out who is asking and under which rule before you send anything, because a court order, a bare subpoena and a phone call from an insurer are three different situations with three different answers. What goes out is the part the request covers, not the whole chart because that is quicker. And the disclosure itself gets logged.

This is not the same as three cases that already have their own article. When the patient asks, that is [their right of access](/en/blog/patient-requests-their-dental-records/). When you send a patient on to a specialist, that is a [referral](/en/blog/dental-patient-referrals/). When the practice changes hands, that is a [sale](/en/blog/dental-practice-sale-patient-records/).

Here the person asking is not the patient. It is a court, a lawyer, an insurer, another dentist, a regulator, or the family of someone who has died.

## In the US, a court order and a subpoena are not the same thing

This is the distinction that catches practices out, and the HIPAA Privacy Rule draws it sharply at 45 CFR 164.512(e).

With an order of a court or administrative tribunal, you may disclose, and the limit is in the text: only the protected health information **expressly authorized by such order**. The order defines the scope, so a request naming one date of service does not open the whole chart.

A subpoena, discovery request or other lawful process **not accompanied by a court order** is a different test. You may only disclose if you receive satisfactory assurance that one of two things has happened.

1. **Notice to the individual.** The requesting party made a good faith attempt to provide written notice to the patient, the notice included enough detail about the litigation for them to object, the time to object has passed, and either no objections were filed or any that were have been resolved by the tribunal.
2. **A qualified protective order.** The parties have agreed to one and presented it to the tribunal, or the requesting party has asked the tribunal for one.

> **A subpoena on a lawyer's letterhead is not a court order.** It is the most common version of this request and it is the one where the rule asks you to check for something before you respond, rather than simply respond.

Anything that is not one of the permitted disclosures needs the patient's written authorization under 45 CFR 164.508, and that includes most of what an insurer wants beyond treatment, payment and health care operations.

## In the UK, the deceased patient has a separate statute

For a living patient the usual route is a subject access request, which the [access post](/en/blog/patient-requests-their-dental-records/) covers. For a patient who has died, the UK GDPR does not apply, and a 1990 Act does.

The Access to Health Records Act 1990 is still in force. Section 3(1)(f) says an application for access may be made, where the patient has died, by "the patient's personal representative and any person who may have a claim arising out of the patient's death".

Two details in the same section matter in practice.

- **Access is by inspection or by copy.** Section 3(2) requires the holder to allow the applicant to inspect the record, or, if the applicant so requires, to supply a copy.
- **There is no fee.** Section 3(4) states that "No fee shall be required for giving access under subsection (2) above".

The Act also keeps two gates. Section 4 covers cases where the right of access may be wholly excluded, and section 5 cases where it may be partially excluded, so a claim arising out of a death is not a key to everything in the file.

> **"Any person who may have a claim" is wider than the family.** It is a standing test, not a relationship test, so the applicant may be someone the practice has never heard of. What the Act asks you to check is the claim and the standing, not how close they were to the patient.

![A patient record showing clinical alerts, the active treatment plan and a timeline filtered by visits, treatments, finance and communications](/screenshots/patient-timeline.png)

*A dental record is not a document, it is several layers. A third party request almost never covers all of them.*

## Who is asking, and what they get

| Who is asking | What has to be there | What goes out |
|---|---|---|
| Court order (US) | Order of a court or administrative tribunal | ~ Only what the order expressly authorizes |
| Subpoena, no court order (US) | ✗ Satisfactory assurance: notice or protective order | ✗ Nothing until you have it |
| Insurer, beyond payment and operations (US) | Written authorization, 45 CFR 164.508 | ✗ Nothing without the authorization |
| Personal representative (UK, deceased) | Evidence of the appointment | ✓ Access, no fee, subject to ss. 4 and 5 |
| Person with a claim from the death (UK) | The claim, and their standing | ~ Subject to ss. 4 and 5 |
| Patient's solicitor | The patient's authority | ~ What the patient would get |
| Another dentist taking over care | The patient's agreement | ~ What continuity of care needs |

The insurer row is where most of the arguing happens at the front desk, and it is worth being plain about it. An insurer asking for a full chart to assess a claim is asking for something outside treatment, payment and operations, and the answer is an authorization signed by the patient, filed where you can find it a year later.

## What gets taken out before it goes

- **Other people's information.** The relative who contributed something to the medical history, another patient's name in a scheduling note.
- **Anything the request does not cover.** If the order names a 2024 treatment, the 2019 root canal is not in scope.
- **Identifiable clinical photographs**, flagged for what they are rather than dropped into the same bundle.

![The dental chart inside the patient record, next to the clinical alerts and the treatment plan in progress](/screenshots/dental-chart.png)

*A request about one course of treatment is answered with the part of the record that documents it, not the whole file.*

## The procedure, written down once

1. **Log the request the day it arrives**, with the date, the channel and who took it.
2. **Classify it**: court order, subpoena, authorization, statutory application, or none of these.
3. **Check for the thing the rule asks for** before you respond, not after.
4. **Define the scope in writing**, and ask for narrowing if the request is open ended.
5. **Export only that scope**, not the whole record.
6. **Apply the third party and exclusion checks**, and note what you withheld and why.
7. **Send imaging separately**, in a format that opens.
8. **Record the disclosure**: who asked, on what basis, what went out, on what date, who approved it.

## What your software has to be able to do

Most of the above falls apart if the program can only export everything or nothing.

- **Export a defined subset**: a date range, one treatment, one tooth. That is the practical form of "only the protected health information expressly authorized by such order".
- **Keep subjective impressions in a separate field** from clinical findings, so a redaction is a setting rather than a manual edit.
- **Export imaging in its own format**, not recompressed inside a report.
- **Log the disclosure as an event in its own right**, with the five fields in the list above, because in a year the question will be what left the practice and on what basis. For internal access that is what the [audit trail](/en/blog/audit-trail-dental-records/) covers.
- **Store the order or authorization against the patient**, not in somebody's inbox.

In Dentalpin a patient export can be narrowed to the scope you need, clinical notes and practitioner impressions sit in separate fields, and every access and every export is logged with the user and the date. It is included with no per-user cost: the details are on the [pricing page](/en/pricing/).

**This is not legal advice.** The official sources are below and they are the reference; for a specific case, and particularly for anything arriving from a court, take advice.

## Sources

- 45 CFR § 164.512, Uses and disclosures for which an authorization or opportunity to agree or object is not required, paragraph (e) on judicial and administrative proceedings. Code of Federal Regulations, US Government Publishing Office. Accessed 5 October 2026. <https://www.govinfo.gov/content/pkg/CFR-2024-title45-vol2/xml/CFR-2024-title45-vol2-sec164-512.xml>
- Access to Health Records Act 1990, sections 3, 4 and 5. legislation.gov.uk. Accessed 5 October 2026. <https://www.legislation.gov.uk/ukpga/1990/23/contents>
