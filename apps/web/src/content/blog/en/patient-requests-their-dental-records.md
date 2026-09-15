---
title: "A patient asks for their dental records: what to hand over, how fast, in what format"
description: "What a complete copy of a dental record contains, the one-month UK deadline, the 30-day US rule, when you can charge, and what you are allowed to hold back."
pubDate: 2026-09-15
translationKey: paciente-pide-su-historia-clinica
tags: [clinical-records, data-protection, patient-rights, practice-management]
---

Give them a copy of the personal data you hold about them, normally within one month of the request in the UK and within 30 days in the US, and in most cases without charging for it. You can hold back very little: information about other people, and health information where disclosure would cause serious harm.

The hard part is almost never the law. It is that one patient's record is spread across the practice management system, an imaging folder, a signed PDF somewhere and a filing cabinet, and a complete copy has to gather all of it.

## The deadline, in the two places this post covers

A subject access request under the UK GDPR is the usual route for a UK practice. The ICO is unambiguous about the clock: "You must comply with a SAR without undue delay and at the latest within one month of receipt of the request", or within one month of receiving the ID confirmation you asked for.

You can extend that by two months where the request is complex or the person has made several requests, and the ICO is precise about how to count it: "You must calculate the extension as three months from the original start date." You have to tell the person you are extending, and why.

In the United States the rule is HIPAA's right of access. A covered entity "must act on a request for access no later than 30 days after receipt of the request", with one extension of no more than 30 days, and only one, on written notice explaining the delay and giving the date you will complete it.

> **The clock starts when the request arrives, not when someone opens it.** A request made on the phone, by email or on a form is equally valid, so the first thing to fix is where these are logged and who sees them.

## What a complete copy contains

- **Identity and contact details**, including changes over time.
- **Medical history, alerts and allergies**, as recorded, not as remembered.
- **Dental chart and periodontal chart**, with the earlier versions if you keep them.
- **Notes for each visit**, which is what was written at the time rather than a summary written now.
- **Signed consent forms**, with their dates and versions.
- **Treatment plans and quotes**, accepted or declined.
- **Radiographs, clinical photographs and scans.**
- **Lab prescriptions and referral letters.**
- **Billing and payment records**, which are personal data too.

![A patient record showing clinical alerts, the active treatment plan and a timeline filtered by visits, treatments, finance and communications](/screenshots/patient-timeline.png)

*One patient's activity in a single timeline, filterable by visits, treatments, financial movements and communications.*

## What you can hold back

Under UK law there are two everyday limits, and neither of them is "anything awkward".

The first is other people. If the record contains personal information about someone else, a family member for example, you have to apply the third-party rules before disclosing. The ICO notes that identifying a clinician is usually fine: "It's normally reasonable to disclose information that identifies a health professional (eg a doctor, dentist or nurse) carrying out their duties if the information meets the appropriate test."

The second is the serious harm test. You are exempt "to the extent that complying with the right of access would likely cause serious harm to the physical or mental health of any person", and if you are not a health professional yourself you must have obtained an opinion from the appropriate health professional within the last six months before relying on it.

> **The serious harm test is narrow and it is documented.** It is a clinical judgement about a specific disclosure, recorded at the time, not a general reluctance to hand over notes that read badly.

## Charging for it

| Situation | UK | US (HIPAA) |
|---|---|---|
| First copy of the record | ✓ Free | ~ Reasonable cost-based fee allowed |
| Further copies of the same thing | ~ Fee possible if excessive | ~ Cost-based fee allowed |
| Manifestly unfounded or excessive request | ~ Fee or refusal, and you must justify it | ~ Not among the fee rules in § 164.524 |
| What a fee may cover | ~ Administrative cost | ~ Labour, supplies, postage, summary only |

The ICO puts the UK health position plainly: "In general, you cannot charge a fee to comply with a SAR for health information. However, if a request is manifestly unfounded or excessive, you may charge a fee to respond."

HIPAA allows a fee but fences it in. It must be "a reasonable, cost-based fee", and it may include only labour for copying, supplies for paper or portable media, postage where the patient asked for it to be mailed, and preparing a summary the patient agreed to. Retrieval time, storage and overhead are not on that list.

## Format is half the answer

Article 15(3) of the UK GDPR states that "Where the data subject makes the request by electronic means, and unless otherwise requested by the data subject, the information shall be provided in a commonly used electronic form".

HIPAA goes further on electronic records. You must provide access "in the form and format requested by the individual, if it is readily producible in such form and format", and where the record is held electronically and an electronic copy is requested, you must provide it electronically.

A 300-page PDF of printed screens technically complies and helps nobody. If the patient is moving to another practice, what works is readable files: the data in a tabular format, images in their original format, consents as signed documents.

![A patient record showing the dental chart, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The dental chart inside the patient record, next to the clinical alerts and the treatment plan in progress.*

## How to answer without improvising

1. **Log the request the day it arrives**, with the date, the channel and who took it.
2. **Confirm identity**, and if someone is acting on the patient's behalf, keep the evidence of their authority.
3. **Ask what they want** if the record is large, without using the question to buy time.
4. **Gather every part**: practice system, imaging, consents, correspondence, billing.
5. **Apply the third-party and serious harm checks**, and record what you withheld and why.
6. **Send it in the format asked for**, with an index of what is included.
7. **Note the disclosure in the record itself**, because that note is your evidence that you complied.

## What your software has to be able to do

- **Export one patient completely**, not an appointment list and not a formatted report.
- **Include the imaging** in the same package rather than on a disc nobody can find.
- **Keep subjective impressions separate** from clinical findings, so a redaction is a setting and not a manual edit.
- **Log who accessed the record and when**, because the disclosure is itself an access.
- **Store the request and the response** against the patient, with dates.

In Dentalpin a patient export is the record, the chart, the images, the consents and the quotes in one package, and every access is logged. It is included with no per-user cost: the details are on the [pricing page](/en/pricing/).

**This is not legal advice.** The official sources are below and they are the reference; for a specific case, take advice, and in the UK check the ICO's current guidance, which was last updated on 8 December 2025.

## Sources

- Information Commissioner's Office, *Right of access: what should we consider when responding to a request?* and *Health information*, guidance updated 8 December 2025. Accessed 15 September 2026. <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/right-of-access/>
- UK GDPR, Article 15 (Right of access by the data subject), as retained in UK law. Accessed 15 September 2026. <https://www.legislation.gov.uk/eur/2016/679/article/15>
- 45 CFR § 164.524, Access of individuals to protected health information, Code of Federal Regulations, US Government Publishing Office. Accessed 15 September 2026. <https://www.govinfo.gov/content/pkg/CFR-2024-title45-vol2/xml/CFR-2024-title45-vol2-sec164-524.xml>
