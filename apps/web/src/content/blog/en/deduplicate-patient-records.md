---
title: "Duplicate patient records: cleaning them up without losing anything"
description: "How to find duplicate patient records, decide which one survives and merge them without losing clinical notes or invoices, and stop new ones appearing."
pubDate: 2026-08-26
translationKey: pacientes-duplicados-limpiar
tags: [duplicate-records, clinical-record, data-quality, gdpr]
---

Do not delete either record. Pick a surviving record, move everything that hangs off the other one onto it (appointments, treatment plans, invoices, images, consents), and keep the losing record archived and linked rather than deleted. And fix the moment records get created before you merge the first pair, or you will be cleaning the same database again next year.

The damage from a duplicate is not two rows in a table. It is the allergy sitting on one record while the extraction is planned from the other.

## Where duplicates come from

Nearly always the same five places, and none of them is carelessness.

- **The record is created before anyone searches.** The phone is ringing, three people are waiting, and the "new patient" button is closer to hand than the search box.
- **The same person arrives through two doors.** Online booking, phone, walk-in, a message. If every channel can create a record without checking, every channel makes duplicates.
- **Names are not stable data.** Married names, hyphenated surnames, initials, accents that are sometimes typed and sometimes not, Dave and David, a middle name that appears on the insurance and nowhere else.
- **The migration ran twice**, or it imported people who already existed in the new system.
- **Families share contact details.** One mobile number covers three children, so any search by phone returns four different people who are not duplicates.

## Search by signals, not by name

Listing everyone with the same surname produces a long list full of false positives. What works is combining two signals at once and sorting the result by how reliable that combination is.

| Signal | Reliability | What it is good for |
|---|---|---|
| Same national ID or insurance number | ✓ Very high | Review these first, they are near certainties |
| Mobile number + date of birth | ✓ High | The most productive pairing in a practice |
| Normalised name + date of birth | ✓ High | Catches people who changed phone |
| Same email address | ~ Medium | Families share an inbox |
| Phone number alone | ✗ Low | Returns whole households |
| Surname + postcode | ✗ Low | Neighbours and relatives |

Normalising before you compare is half the job. For names: lower case, strip accents, drop punctuation and hyphens, collapse spaces. For phone numbers: strip spaces and the country prefix, then compare the last nine digits.

That is what puts "O'Brien, Mary-Jane" and "mary jane obrien" in the same group, which is precisely what the front desk search box does not do.

![Patient record with the details tab open: name, identification number, date of birth, phone, email and address](/screenshots/patients.png)

*The fields you compare when deciding whether two records are the same person. Date of birth discriminates best and is the one most often left blank.*

## Which record survives, and it is rarely the newest

The recent record is usually the one created in a hurry: the name spelled correctly and nothing else inside. The old one holds the chart, the radiographs and eight years of history.

> **The record with clinical content survives, not the one with the correct phone number.** A phone number takes ten seconds to copy across. A dental chart with twelve treatments and their dates does not.

When both hold real content, break the tie in this order:

1. **The one with clinical notes and a chart.** That is the part you cannot retype without losing dates and authorship.
2. **The one that appears on issued invoices.** Repointing an invoice is easy, but the fewer you touch, the better.
3. **The older one**, because the record number the patient has been quoting for years is that one.

Demographic fields get reconciled one at a time afterwards, not chosen as a block. The new record usually wins on the name, the old one always wins on the clinical history.

## The merge, step by step

1. **Take a backup before you touch anything.** A merge rarely has an undo button, and where it does, it does not undo what was already printed.
2. **Open both records and list what hangs off each**: past and future appointments, treatment plans, invoices, payments and outstanding balance, radiographs and photos, signed consents, clinical notes, lab cases and any orthodontic treatment in progress.
3. **Decide the survivor** using the order above, and write the decision down before you start.
4. **Move records, do not retype them.** Copying a clinical note by hand changes its date and its author, which is exactly what a clinical record cannot afford to lose.
5. **Never renumber or reissue an invoice.** An issued invoice is a closed document: change which patient it points at, never its number, its date or its amounts.
6. **Archive the losing record linked to the survivor.** Anyone searching the old number has to land on the right chart, not on an error.
7. **Log who merged, when, and from which record.** Two years from now that note is the only explanation for the jump in the history.
8. **Re-check the medical alerts on the resulting record.** Allergies, anticoagulants and premedication are the first thing a sloppy merge loses.

> **Invoices are the part that does not tolerate improvisation.** An issued numbering series has to stay exactly as it is. If a merge seems to require reissuing something, it is not a merge any more, and that decision belongs to whoever keeps the books.

![Invoice list showing issued, paid, part paid, overdue and draft states](/screenshots/invoices.png)

*What hangs off a record and cannot be rewritten. Before merging, it is worth knowing how many invoices sit on each side and what state they are in.*

## The ones that look like duplicates and are not

Merging two records that were not the same person is worse than the problem you set out to fix, because it mixes two clinical histories.

- **Families on one contact number.** Three siblings on their mother's mobile are three patients.
- **A parent and child with the same name.** Date of birth separates them, the name does not.
- **Twins.** Same surname, same date of birth, same address, same phone. The only case where you have to read the history before deciding.
- **Children with no ID number.** They lack the most reliable signal, so compare name, date of birth and guardian.

When in doubt, do not merge. Flag the pair as reviewed and ask the patient at the next visit.

## What the rules ask for

This is not legal advice, and retention periods are set nationally rather than by one European text. Two things do apply across the board.

Article 5(1)(d) of Regulation (EU) 2016/679 requires personal data to be accurate and, where necessary, kept up to date, and requires every reasonable step to be taken so that inaccurate data are erased or rectified without delay. A patient database full of duplicates fails that by definition, so cleaning it is more than internal housekeeping.

Article 16 adds the patient's right to have incomplete data completed, including by means of a supplementary statement. That is exactly the position of someone with half a history on each record.

The reason you archive rather than delete is the other half: your retention obligation attaches to the clinical documentation, not to the record number it happens to sit under. Deleting a losing record with clinical content inside is a records problem in any jurisdiction, whatever the period.

## Stopping the next thousand

Cleaning up without changing the intake flow is work you will repeat. Five changes that actually break the cycle:

- **Search before creating, and make searching the easy path.** If the front desk has to type a full name to find anyone, it will create a new record instead.
- **Date of birth mandatory from first contact.** It is the field that turns an ambiguous search into a certainty, and the one everybody skips.
- **Normalise on save**, not on search. Accents, stray spaces and country prefixes get cleaned once, on the way in.
- **Make online booking match against the database** instead of always creating a new record. It is the door that generates the most duplicates.
- **Run a possible-duplicates report every week.** Ten pairs a week get reviewed in five minutes; a thousand pairs a year get reviewed by nobody.

## What to expect from the software

A safe merge depends on four things: a search that tolerates accents and variants, a duplicates report you can review pair by pair, a merge that moves records rather than copying them, and a trail of who did it and when.

Dentalpin has those four, and it keeps the merged record as an alias of the survivor, so the old record number still leads to the right chart. It runs on your own server or as a managed service, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 26 August 2026.

- Regulation (EU) 2016/679 (GDPR), articles 5(1)(d), 5(1)(e) and 16. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- Commission nationale de l'informatique et des libertés, text of the Regulation, chapters II and III. [cnil.fr](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3)
