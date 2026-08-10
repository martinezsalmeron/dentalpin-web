---
title: "Dental practice backups: what to save and how often"
description: "What belongs in a dental practice backup, how often to run it, where to keep the copies and how to prove a restore works before the day you need it."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [backups, security, hipaa, practice-management]
---

Back up the database and the attached files every day, keep three copies on two kinds of media with one of them off site, and restore one of those copies at least once a year to prove it works. If nobody has ever restored, you do not have a backup. You have a file you assume is fine.

What follows is what belongs in that copy, how often it is worth running, and how to check it without taking anyone's word over the phone.

## What goes in the backup, and what gets left out

A dental practice does not keep its data in one place. It keeps it in two. The database holds patients, the schedule, the odontogram, treatment plans, quotes and invoices. The radiographs, signed PDFs and scans live as files, often in a different folder or a different service entirely.

A backup that only covers the database looks complete right up to the day you restore it and find the X-rays missing.

| What to save | Why it matters | In the backup by default? |
|---|---|---|
| Database | Patients, schedule, charting, treatment plans, billing | ✓ Almost always |
| Radiographs and clinical images | Part of the clinical record, and most of the disk space | ✗ Often excluded for size |
| Signed consents and documents | The evidence that consent was given | ~ Depends where the software stores them |
| System configuration | Without it, a restore takes hours longer | ✗ Rarely |
| Billing keys and certificates | Without them you cannot issue again | ✗ Rarely |

> **Check the size of the backup before you trust it.** Five years of radiographs do not fit in a 200 MB archive. If last night's copy is far smaller than your data, something is being skipped, and you already know what.

![Patient record showing the odontogram, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*This is what a restore has to bring back whole, not just the patient list.*

## How often: the real question is how much work you can lose

Frequency is not decided by habit. It is decided by how much work you are willing to redo. Between the last backup and the failure there is a gap, and somebody fills that gap by hand, from memory.

| Frequency | Worst case loss | Who it suits |
|---|---|---|
| Weekly | Up to six days of records and payments | ✗ Not enough for any working practice |
| Nightly | One day of work | ~ The reasonable minimum |
| Every few hours | Half a morning | ✓ Multi-chair practices with high throughput |
| Continuous | Minutes | ✓ If the vendor offers it with no extra work |

Put a number on that gap. Chairs times hours times average production is the sum that turns this into an economic comparison instead of a matter of taste.

## The 3-2-1 rule, and why the copy in the same room does not count

CISA states the accepted practice in three numbers: three copies of any important file (one primary and two backups), on two different media, with one copy stored off site.

- **Three copies**, because the second one fails too. A backup disk bought the same day as the original tends to die around the same time.
- **Two kinds of media**, because a single failure mode takes out two identical devices at once, from a firmware bug to a power surge.
- **One copy off site**, because theft, fire or flooding take the server and the USB drive in the drawer beside it together.
- **One copy offline or immutable**, because ransomware encrypts everything the infected machine can write to, and that includes the backup drive that is always plugged in.

| | USB drive on site | NAS on site | Encrypted copy off site |
|---|---|---|---|
| Primary disk failure | ✓ Covered | ✓ Covered | ✓ Covered |
| Theft or fire | ✗ Lost with the original | ✗ Lost with the original | ✓ Covered |
| Ransomware | ~ Only if it was unplugged | ✗ Usually encrypted too | ✓ If immutable or versioned |
| Monthly work it demands | Swapping and removing the drive | Checking it still runs | ✓ None once automated |

## What the rules actually ask for

If you handle protected health information in the United States, the HIPAA Security Rule is explicit. The contingency plan standard at 45 CFR 164.308(a)(7) requires a data backup plan, defined as procedures "to create and maintain retrievable exact copies of electronic protected health information", and a disaster recovery plan, defined as procedures "to restore any loss of data". Testing and revision procedures are an addressable specification: "Implement procedures for periodic testing and revision of contingency plans."

In the UK and the EU, Article 32(1)(c) of the GDPR sets the same test in different words. It requires the ability to restore the availability of and access to personal data in a timely manner after a physical or technical incident, and Article 32(1)(d) requires regularly testing and evaluating how well those measures work.

> **Both frameworks measure the restore, not the copy.** Nothing in either one asks how many disks you own. They ask whether you can get the practice working again, and how long that takes. A backup nobody has tested answers neither question.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*Billing carries its own retention rules and has to survive the restore too.*

## The restore drill, step by step

It takes half an hour a year, and it is the only thing separating a backup from a folder of large files.

1. **Pick a copy at random**, not last night's. The one from three weeks ago says far more about whether the process works over time.
2. **Restore it onto a different machine or server**, never over the live system.
3. **Time it** from the moment you start to the moment tomorrow's schedule opens. That number is your real recovery time, and it usually surprises people.
4. **Open three specific patients** and check that the charting, the radiographs and the latest treatment plan are all there.
5. **Check last quarter's billing**, which is the part nobody looks at until it is missing.
6. **Write down the date, the elapsed time and who did it.** That record is also your evidence of diligence under either framework.

## The failures that turn a backup into nothing

- **Nobody reads the alerts.** A backup job that has failed for eleven weeks emails a mailbox nobody opens any more.
- **The copy lives on the same machine**, in another folder or another partition. That protects against an accidental delete and nothing else.
- **The backup drive stays plugged in**, so ransomware encrypts it along with everything else.
- **The copy is not encrypted.** A lost drive holding the whole practice's records is a reportable breach, not an inconvenience.
- **Only the IT contractor who set it up knows how to restore it**, and they moved on. Write the procedure down and keep it outside the system you would be restoring.
- **The backup belongs to the vendor and nobody has ever asked for an export.** If the vendor goes away, so does the copy.

In Dentalpin the backup is a standard PostgreSQL dump plus the file directory, so you can automate it with the tools you already run and restore it without asking us or waiting for anyone. What the hosted and self-hosted options include is on [pricing](/en/pricing/), and if you want to rehearse a restore before committing, [installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/).

## Sources

- 45 CFR 164.308(a)(7), HIPAA Security Rule, contingency plan standard. [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2023-title45-vol2/xml/CFR-2023-title45-vol2-sec164-308.xml). Consulted 10 August 2026.
- Regulation (EU) 2016/679 (GDPR), Article 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 10 August 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Consulted 10 August 2026.

This is not legal advice. Retention periods and the obligations that apply to your practice depend on your jurisdiction, and are worth confirming with your own adviser or professional body.
