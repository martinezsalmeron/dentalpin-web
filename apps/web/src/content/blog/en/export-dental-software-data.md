---
title: "Exporting your dental software data: the format to insist on"
description: "What export to demand from your dental software before you sign: the four blocks it must contain, which formats actually work, and how to test it once a year."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [data-export, migration, contracts, gdpr, clinical-records]
---

Ask for a complete export in open formats: the database as one CSV per table or a full SQL dump, documents and images as original files (PDF, JPG, DICOM), and an index tying every file to its patient. Get it written into the contract, with a deadline, at no cost, and runnable by you without phoning anyone. Then open it once a year, because an export you have never opened is not an exit, it is a promise.

The format is the only thing that decides whether, six years from now, that is still a clinical record or a folder of files nobody can read.

## An export is not a backup

They are two different things, and almost every sales conversation blurs them. A backup restores the system to how it was, inside the same software. An export lets you read your data without that software.

The test is simple. If your vendor vanished tonight, would the backup help? If only their software opens the file, the answer is no.

> **The question is not "do you take backups?", it is "what can I open without you?".** Everyone answers yes to the first. The second one sorts vendors into two very different groups.

You need both. The backup is for the disk that dies on a Tuesday. The export is for the day you change software, the day the vendor shuts down, and the day someone asks you for a record from eight years ago.

## The law gives you the right, not the format

When you buy practice management software, you are the controller and the vendor is the processor. Article 28(3)(g) of the GDPR requires the processor, "at the choice of the controller", to delete or return "all the personal data to the controller after the end of the provision of services relating to processing", and to delete existing copies unless the law requires storage.

That right is real and it is yours. What the article never says is in what format.

> **A nine hundred page PDF satisfies Article 28(3)(g).** Returning the data and returning it in something usable are not the same obligation, and only the first one is in the regulation. The second has to be in your contract.

That is the whole difference between leaving a vendor in two weeks and leaving in six months while somebody retypes clinical records.

## Your retention duty outlasts the contract

This is where format stops being a technical preference. Every jurisdiction sets a minimum period for keeping clinical records, and it is measured in years, not months. In Spain it is five years from the end of each episode of care, in Germany ten years from the end of treatment. Check the rule that applies to you before you delete anything.

None of those clocks stop the day you cancel the subscription. They keep running, and the person answering for the record is you, not the vendor you just left.

So the real question is not "can I take my data with me?" but "will I be able to read it in ten years, on a computer that does not exist yet, without a licence for anything?". There is only one family of answers to that, and it is open formats.

## The four blocks that have to come out

Incomplete exports nearly always fail in the same place. They hand over the schedule and the administrative record, and keep the clinical data and the files inside. Ask for all four in writing.

| Block | What has to come out | Format that works |
|---|---|---|
| Patients | Contact details, insurer, medical alerts, consents on file | CSV or SQL, one row per patient with a stable ID |
| Clinical | Dental chart, periodontal chart, dated and attributed notes, treatment plans, prescriptions | CSV or SQL, with tooth, surface, status and date in separate fields |
| Financial | Quotes, invoices with their numbering, payments, balances, states | CSV or SQL, keeping the invoice number and the state as they are |
| Files | Radiographs, photographs, PDFs, signed consents | The original files, plus an index tying them to patients |

![Patient record showing the dental chart, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*A dental chart on screen: tooth, surface, status and date. Those four fields are what has to survive the export.*

The fourth block is the one that most often arrives broken. You get a folder with twelve thousand files called `IMG_0043.jpg` and no way to tell whose is whose. An index is a two column table, filename and patient ID, and without it the folder is worth nothing.

## Formats that work and formats that do not

There is a single rule: can you open it without the program that produced it?

| Format | Good for | Readable without the software? |
|---|---|---|
| CSV | Tables: patients, appointments, invoices, notes | ✓ Any spreadsheet, any language |
| SQL dump | The whole database, relationships intact | ✓ With PostgreSQL or MySQL installed |
| JSON or XML | Nested structures, plans with their stages | ✓ Readable and documentable |
| PDF, JPG, PNG | Signed documents, clinical photography | ✓ Standards, open anywhere |
| DICOM | Radiographs and volumes | ✓ International medical imaging standard |
| PDF as a data dump | Nothing. It is the printed record | ✗ A person can read it, nothing can migrate it |
| Vendor formats (.dat, their own .bak) | Restoring into their own software | ✗ Only the people who wrote it can open it |
| Screenshots or printable reports | Looking something up | ✗ Not data, a picture of data |

Radiographs deserve to be explicit. DICOM is, in the words of the body that maintains it, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", managed by the Medical Imaging & Technology Alliance, a division of NEMA. If your software stores radiographs in something that is neither DICOM nor a common image format, ask today how they come out.

## The clauses to ask for before signing

You negotiate this before signature, while they still want you as a customer. Afterwards there is no conversation, there is a price list.

1. **Scope.** "All data entered by the customer and all attached files", not "patient data". The second wording quietly leaves the clinical record out.
2. **Format.** Named: CSV or a SQL dump for the database, original files for attachments, plus an index linking them.
3. **Documentation.** A description of the tables and fields. A CSV with forty columns called `field_17` is a puzzle, not an export.
4. **Self service.** You can run it yourself, from the software, whenever you want. If it needs a support ticket, they own the timing.
5. **Deadline.** If it is not self service, a concrete number of days from the request. Thirty is reasonable.
6. **Cost.** Zero. A charge to export is an exit toll, and you want to see it in writing before you sign rather than after.
7. **After you leave.** How long you can keep downloading it, and certified deletion in writing when you ask for it, which is what Article 28(3)(g) lets you require.
8. **If they fold.** What happens to your data in an insolvency. The answer may be bad, but you need to know it.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Every invoice carries a state and a date. If the export takes the amounts but drops the state, the accounts have to be rebuilt by hand.*

## How to test the export once a year

It is an hour a year, and it is the only way to know whether what you were promised exists.

1. **Run it and time it.** If it takes three days, you have learned something important.
2. **Open a CSV.** Headers should be readable and accents correct. If you see `Mart�nez`, the encoding is wrong and now is the moment to say so.
3. **Count.** Rows in the patients CSV against the patient count the software shows. If they disagree, ask why before you need the answer.
4. **Pick three patients at random** and compare the record on screen with what came out. Look hardest at the chart and the clinical notes.
5. **Open a radiograph** straight from the exported folder, without going through the software.
6. **Check the index.** Take one file from the folder and work out whose it is using only the export.
7. **Store it encrypted and off site**, and write down the date. That date is the answer when someone asks when this was last verified.

> **The first time you do this you will find something.** It is usually the images or the chart. Finding it on an ordinary Tuesday costs an email. Finding it on the day you leave costs the whole migration.

## Warning signs

None of these accuse anyone of bad faith. All of them are a reason to ask for a demonstration before signing.

- **"We give you a PDF."** Fine for reading, useless for migrating. Ask what else there is.
- **"Support has to run it."** Then the timing is not yours. Get the number of days in writing.
- **"There is an extraction fee."** That is an exit toll. Negotiate it now, while you still can.
- **"Images are separate."** Separate is fine. Without an index, it is not.
- **"The chart is not exported, it is printed."** The clearest signal of the lot: the structured clinical data stays inside.
- **No field documentation.** Without it, migrating costs the same as retyping.

## What you can check this afternoon

You do not have to wait for renewal. Open your software today, find the export option and see what it offers. If you cannot find it in five minutes, that is already the answer.

Dentalpin is open source and the database is PostgreSQL, so exporting is not a feature you have to request: you can dump the whole database whenever you like, and attachments sit on disk exactly as they were uploaded. It installs on your own server or runs as a managed version, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 26 August 2026.

- Regulation (EU) 2016/679 (GDPR), Article 28(3)(g), text as published by the UK National Archives (assimilated version, identical wording save for the reference to domestic law). [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28)
- Ley 41/2002 (Spain), article 17.1, five year minimum retention of clinical documentation. [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188)
- § 630f (3) BGB (Germany), ten year retention of the patient record. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__630f.html)
- DICOM, the international standard for medical images and related information, managed by the Medical Imaging & Technology Alliance, a division of NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

This is not legal advice. Retention periods depend on the document and on where you practise, so confirm yours before deleting anything.
