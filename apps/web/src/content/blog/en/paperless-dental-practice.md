---
title: "Going paperless in a dental practice: where to actually start"
description: "How to move a dental practice from paper to digital: what to scan, which originals you can destroy, and how to do it without stopping the schedule."
pubDate: 2026-08-26
translationKey: clinica-dental-sin-papel
tags: [paperless, digitisation, clinical-records, records-management, gdpr]
---

Start with the paper arriving today, not with the filing room. Stop generating new paper first (consent forms, treatment plans, medical histories, lab slips), then digitise the back catalogue on demand, one chart at a time, as those patients come in. And before you shred anything, separate two questions that are not the same question: whether a document can live digitally, and whether you may destroy the paper original once it does.

The practice that starts with the filing room spends six months and a bulk-scanning invoice, and is still printing consent forms the following Monday.

## Close the tap before you bail out the boat

While paper keeps arriving, the archive grows faster than anyone can scan it. It arrives through four doors, and they are the same four in every practice.

- **Informed consent**, printed, signed with a pen, filed in the folder. Highest volume, and the one document everybody wants to find when a complaint arrives.
- **The signed treatment plan**, which has to be retrievable years later to show what was accepted and when.
- **The new patient medical history**, filled in on a clipboard in the waiting room.
- **The lab slip**, which comes back on paper because that is how the lab sends it.

The first three stop with tablet signing and forms the patient completes before the appointment. The fourth is not yours to control, so it gets scanned on arrival and attached to the chart.

> **One month without creating new paper beats three weeks scanning the archive.** The old archive is sitting still. This week's paper is not.

## Digital is allowed. Destroying the original is a separate question

Almost no jurisdiction requires a clinical record to be on paper, and most say so explicitly. What they do require is that the record stays complete, legible, attributable and available for a retention period, and that requirement follows the record onto your server.

Under HIPAA, documentation of your security policies and procedures has to be retained "for 6 years from the date of its creation or the date when it last was in effect, whichever is later" (45 CFR 164.316(b)(2)(i)). That is the documentation clock, not the patient record clock: how long you keep the record itself is set by your state dental board or, outside the US, by national law, and it is usually longer.

Under the GDPR, article 5(1)(e) allows personal data to be kept only as long as necessary for the purpose, and article 32 requires security measures appropriate to the risk. Both apply the moment the folder becomes a directory.

> **Scanning does not reset a retention clock, and it does not create permission to shred.** Those two things are decided per document type, usually by different bodies: the dental board for clinical records, the tax authority for invoices, and the terms of any insurance contract for claim paperwork.

| Document | Digital original accepted | Can the paper go? |
|---|---|---|
| Clinical notes and charting | ✓ Yes | ~ Depends on your retention rules |
| Signed informed consent | ✓ Yes, if the signature holds up | ~ Depends how it was signed |
| Supplier invoices and receipts | ✓ Yes | ~ Tax authority sets the conditions |
| Radiographs and clinical photos | ✓ Born digital already | ✓ Nothing to destroy |
| Lab prescriptions and slips | ✓ Yes | ✓ No independent evidential value |

The honest column is the right-hand one. Two ticks, three qualifications, and a practice that pretends otherwise is a practice that shreds something it needed.

## The old archive: on demand, never in bulk

Scanning twelve years of folders at once costs real money, and most of what you scan will never be opened. Pull tomorrow's charts instead.

1. **Take next week's schedule and pull those folders.** That is twenty to sixty charts, not twelve thousand.
2. **Scan only what has future value**: consents, accepted plans, referral letters, clinical progress. Not the 2014 appointment cards.
3. **Attach it to the patient chart** and check it is readable before the folder goes back.
4. **Mark the folder as digitised** and move it to a separate box by year, not back into the main archive.
5. **Repeat weekly.** Within a year the active archive is digital and the remainder is patients who have not returned.
6. **Review after twelve months** what nobody touched, and decide whether it gets scanned, kept to the retention date, or destroyed.

After a year the cabinet is still full and nobody walks to it any more. That is the difference between a paperless practice and a digitisation project.

![Patient chart with the activity tab open: clinical alerts, active plan and a timeline filterable by visits, treatments, financials and communications](/screenshots/patient-timeline.png)

*Where the contents of the folder end up. What matters is not that the document is scanned, but that it appears on the patient's timeline under its own date.*

## Scanning so it is still usable in eight years

A bad scan is paper you no longer have plus a file nobody can read. Five decisions, made once.

1. **300 dpi bitonal for text**, colour only where colour carries information (clinical photos, stamps, coloured signatures). 600 dpi quadruples the file size and reads no better.
2. **Searchable PDF with an OCR layer**, not an image PDF. The difference is being able to find "penicillin allergy" across eight years of documents.
3. **One document per file**, not an eighty-page PDF of an entire folder. What cannot be cited on its own does not get used.
4. **The filename is not the index.** The index is the patient chart and the document date. If your filing system is Windows folders, you have built next year's problem.
5. **Verify the scan before the paper leaves your hand**, not at the end of the day. Blank pages, double feeds and staples eating half a line are the usual failures.

## The four documents that resist hardest

- **Informed consent.** What holds it up is a handwritten signature captured with biometric data and a timestamp. If the tablet only captures a picture of a signature, you have swapped paper for a JPEG.
- **The accepted treatment plan.** It needs a fixed date and fixed contents, because its whole job is proving what was agreed. A PDF regenerated from the database on demand is not the same artefact as one frozen at signing.
- **Supplier invoices.** The one category with a defined route to destroying the paper, and that route runs through whatever your tax authority specifies.
- **Anything a third party signed off site**: referral letters, insurer forms, guardian authorisations. You do not choose the format, so you scan it and move on.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Invoices are the part of the archive with its own rules: a tax retention period, sequential numbering, and a specific procedure if you want to stop keeping the paper.*

## Paperless is not less data protection

It is more. A misfiled folder is seen by whoever walks into the office. A misconfigured digital archive is seen by whoever reaches the server, from anywhere, leaving no trace if nobody logged the access.

Three things change on the day you digitise:

- **Permissions stop being physical.** The cabinet used to be locked. Now you have to decide inside the software who sees what, and that is a configuration task nobody assigns.
- **An access log becomes non-optional in practice.** It is the only way to answer who opened a record, and GDPR article 32 asks for measures appropriate to the risk.
- **Destroying the paper is itself data processing.** A locked console and cross-cut shredding, or a destruction contractor with a certificate. Not the staff room bin.

## What to expect from the software

A paperless practice rests on four capabilities, and none of them is "it has a scan button".

- **Any file can be attached to the chart** and shows up on the timeline under its date, not in a separate documents folder.
- **Tablet signing that stands up**, with a timestamp, storing the signed document as signed rather than regenerating it.
- **An access log**, so you can say who opened which record and when.
- **A complete export**, in a format readable without the software. A digital archive only your vendor can open is the same locked cabinet with a different key.

Dentalpin attaches documents to the chart under their own date, stores the signed document exactly as it was signed, logs access and exports everything (database and files) without asking anyone. It runs on your own server or as a managed service, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 26 August 2026.

- 45 CFR 164.316(b)(2)(i), HIPAA Security Rule, documentation time limit. [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2023-title45-vol2/xml/CFR-2023-title45-vol2-sec164-316.xml)
- Regulation (EU) 2016/679 (GDPR), articles 5(1)(e) and 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)

This is not legal advice. Retention periods, and which originals you may destroy, depend on your jurisdiction and on the document type. Confirm both with your dental board, your tax adviser or your professional body before anything goes in the shredder.
