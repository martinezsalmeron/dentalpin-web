---
title: "How long to keep dental records, and how to destroy them properly afterwards"
description: "There is no single answer across English-speaking markets. NHS dentistry in England publishes 11 years for clinical care records. Which date starts the clock and what deletion means."
pubDate: 2026-09-16
translationKey: conservar-historia-clinica-dental-plazos
tags: [dental-records, retention, gdpr, practice-management]
---

There is no single retention period that covers every English-speaking market, and any article that gives you one number is wrong somewhere. The one figure published by a health authority and easy to point at is NHS England's: an NHS dental practice keeps clinical care records for 11 years. Everywhere else, the period comes from your own regulator, and it is worth finding the primary text rather than a summary of it.

The half of this problem that is the same everywhere is the software half. A retention period is worthless if nothing tells you which records have reached it, and deleting a row that still exists in three backups is not as simple as it sounds.

## The one published figure, and exactly what it covers

The NHS Business Services Authority answers the question directly for NHS dental practices in England. Its published periods are:

- **Clinical care records: 11 years.**
- **Finance related records: 2 years.**
- **PR form: 2 years from the end date of the course of treatment.**

That page points at the NHS England Records Management Code of Practice as the authoritative schedule, and the Code is where you go for anything that is not a routine adult course of treatment. Records of children and young people are the obvious case, and the figure for them belongs in that document rather than in this article.

> **11 years is the NHS England figure, not a UK figure and certainly not a global one.** Scotland, Wales and Northern Ireland publish their own guidance, private practice sits alongside professional indemnity advice rather than under the NHS schedule, and the United States sets retention state by state.

## Why the answer is national and stays national

Retention sits at the intersection of three different bodies of law, and the three do not line up:

- **Health records law**, which sets a minimum period for keeping a clinical record at all.
- **Limitation law**, which sets how long a claim can be brought, and is usually the longer of the two.
- **Data protection law**, which sets a maximum by requiring that data is not kept in identifiable form for longer than the purpose needs.

Most practices end up holding records for the limitation period rather than the health records minimum, because that is the window in which they may have to defend themselves. That is a decision, and under UK GDPR and the EU GDPR alike it is one the practice has to be able to explain.

| Layer | What it sets | Where to find it |
|---|---|---|
| Health records schedule | A minimum retention period | Your national health service or regulator |
| Limitation period | How long a claim can be brought | National limitation legislation |
| Data protection | A maximum, tied to the purpose | GDPR art. 5(1)(e) and art. 30, or the local equivalent |
| Imaging and X-rays | Often a separate clock | Radiation protection rules, which are usually their own instrument |

That last row catches people out. In several European countries radiographs carry a retention period set by radiation protection law rather than by health records law, and it runs independently of the rest of the file.

![Patient record with the activity tab open, showing the timeline of appointments, treatments and payments](/screenshots/patient-timeline.png)

*A patient timeline, with the date of every entry.*

## The date that matters is the last clinical entry

This is where a retention policy either becomes operable or stays a document nobody can act on. To know which records have reached their period, you need to search on the date of the last clinical entry.

What practice management software usually offers is a different query: patients created before a given date. That answer is wrong, and wrong in the expensive direction, because a patient registered in 2009 who came in last month will appear in it.

- **Date of the last clinical entry**, which is what marks the end of the course of treatment.
- **Date of birth**, because wherever a children's rule exists it keys off age rather than off the treatment date.
- **Imaging held separately**, because it often sits in another store and on another clock.
- **A flag for records under complaint or claim**, so those are excluded from any purge while the matter is live.

> **Without a query behind it, a retention period is decorative.** A practice that cannot list the records that have aged out is not keeping them for 11 years. It is keeping them forever, which is a different decision and one that has to be justified.

## What destroying a record actually means

On paper this is a shredder. In a database it is a decision with several steps, and the last one is almost always skipped.

1. **Choose between deletion and anonymisation.** Irreversible anonymisation takes the record outside data protection law and keeps the statistics, which is usually what the practice wanted to retain.
2. **Include images and attachments.** Radiographs, clinical photographs and signed PDFs normally live in separate storage and survive the deletion of the row.
3. **Count the backup cycle.** A record deleted today is still in the backup from two nights ago, and stays there until that backup rotates. What stands up is having that window documented, not claiming deletion is instant.
4. **Record that you destroyed it.** What, when, on what criterion and by whom, without writing the deleted data back down in the process.
5. **Check your record of processing activities.** It asks for the envisaged deletion periods, and the period written there should be the one actually being run.

Step four is the only one that lets you demonstrate compliance afterwards. A destruction with no evidence behind it is indistinguishable from a data loss.

![List of reports available in the practice](/screenshots/reports.png)

*The reports screen, where date based lists are built.*

## What the software has to let you do

None of this demonstrates well, which is why it never comes up before signature. It is four concrete things, and they are worth asking about.

- **Search on the date of the last clinical entry**, not only on the date the patient record was created.
- **Export in full** before destroying, so the record can be offered to the patient rather than simply disappearing.
- **Delete or anonymise a patient** without breaking the accounts and invoices, which carry their own tax retention periods.
- **Log the operation** in the access trail, with the user and the timestamp.

In Dentalpin the record holds the date of the last entry per patient and is searchable on it, deletion carries the associated imaging with it, and the operation is written to the access log. The source is published and so is the [pricing](/en/pricing/).

This is not legal advice. Whatever period your practice sets should be checked against your own regulator's published schedule and, where a claim or complaint is involved, with your indemnity provider.

## Sources

- NHS Business Services Authority, "How long should NHS dental practices keep patient records for?". Consulted 16 September 2026. <https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01913/en-us>
- NHS England, Records Management Code of Practice, referenced by the NHSBSA page above as the authoritative retention schedule. The Code itself was not reachable from this session on 16 September 2026, so nothing in this article is quoted from it. <https://digital.nhs.uk/data-and-information/information-governance/guidance/records-management-code-of-practice>
- Regulation (EU) 2016/679, articles 5(1)(e) and 30, and the UK GDPR equivalent. Consulted 16 September 2026.
