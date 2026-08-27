---
title: "Staff access permissions in a dental practice: who gets to see what"
description: "How to split permissions in a dental practice: what front desk needs, what clinicians need, why shared logins break everything and what to review once a year."
pubDate: 2026-08-27
translationKey: permisos-acceso-personal-clinica
tags: [access-control, security, gdpr, clinical-records, practice-management]
---

Everyone in the practice should see only what their job needs today: the front desk works with the schedule, contact details and payments; clinical staff open the clinical record and the odontogram; whole-practice reporting and user management stay with the owner. Getting there takes three things and no committee: one named account per person, permissions granted by role rather than one by one, and a written list of who has what.

This is not legal advice. Every official source is listed at the end, consulted on 27 August 2026.

## Need to know is a legal standard, not an ideal

Under the GDPR, anyone acting under the controller's authority who has access to personal data may process it only on the controller's instructions. Article 29 says it directly, and article 32(4) makes it part of your security obligations rather than a matter of internal etiquette.

Health data raises the bar again. It is a special category under article 9, so the security measures you can justify for a mailing list are not the ones you can justify for a clinical record.

> **The question that settles almost every borderline case is "do they need it to do their job today?".** If the answer is no, the access should not exist, however long the person has worked there and however much you trust them.

## Four roles cover almost any practice

You do not need a complicated org chart. A one to five chair practice runs on four roles plus a few named exceptions.

| | Front desk | Hygienist | Dentist | Owner |
|---|---|---|---|---|
| Practice schedule | ✓ Full | ✓ Full | ✓ Full | ✓ Full |
| Contact details and consents | ✓ Edit | ~ View | ✓ Edit | ✓ Edit |
| Clinical record and odontogram | ✗ No access | ✓ Own patients | ✓ Full | ~ Only if treating |
| Radiographs and images | ✗ No access | ✓ Own patients | ✓ Full | ~ Only if treating |
| Treatment plans and quotes | ~ View and take payment | ✗ No access | ✓ Create and sign | ✓ Full |
| Invoicing and daily takings | ✓ Yes | ✗ No access | ~ Own work | ✓ Full |
| Practice-wide reporting | ✗ No access | ✗ No access | ~ Own production | ✓ Full |
| Users and permissions | ✗ No access | ✗ No access | ✗ No access | ✓ Full |

Two adjustments are almost always needed. Reception has to see why a patient is booked in to run the chair sensibly, and a treatment label on the appointment does that without opening the record.

Medical alerts are the exception that proves the rule. An anaesthetic allergy has to be visible to whoever is about to treat the patient, without hunting for it, which is why it belongs at the top of the chart rather than three clicks in.

![Practice schedule in day view with appointments spread across chairs](/screenshots/schedule-day.png)

*This is the screen the front desk works from all day.*

## The shared login is the real problem

Most practices do not have badly split permissions. They have an account called "reception" that four people know, and another called "clinic" that everyone falls back on when the day is busy.

A shared login collapses everything built on top of it. The audit trail stops identifying anyone, one person leaving means changing the password for all of them, and if a patient complains you cannot show who opened the record or when.

> **One account per person is not bureaucracy, it is the thing that makes everything else verifiable.** Creating five accounts takes ten minutes and saves the conversation where you cannot explain who looked at the file of a patient who happens to be a colleague's neighbour.

The NCSC puts it as a joiners, movers and leavers policy: account management has to cover all three, "so access can be revoked when no longer needed, or changed for movers". The same guidance asks for separate accounts for administrative work, so nobody spends the day logged in with full privileges.

## An audit trail is what turns a permission into evidence

A permission says who may open a record. An audit trail says who did. Only the second one helps when you have to answer a complaint or decide whether something was a breach.

What is worth recording is short:

- **Who**, as a named user, never a generic one.
- **When**, with date and time.
- **Which patient**, not just which screen.
- **What they did**, separating viewing from editing.
- **From where**, if remote access is allowed at all.

One rule gets forgotten: the log has to be hard to alter for the people who hold administrative rights in the practice. If the owner can edit it, it no longer proves anything to a third party.

![Patient record on the activity tab, with clinical alerts, active plan and a filterable timeline](/screenshots/patient-timeline.png)

*One patient's activity gathered into a single timeline, filterable by visits, treatments and communications.*

## Joining and leaving, in seven steps

The risk is rarely the access you grant. It is the one nobody takes away.

1. **Create the account in the person's own name**, with their real email, before day one.
2. **Assign a role, not individual permissions.** Individual grants pile up and nobody remembers why they are there.
3. **Sign the confidentiality undertaking** and keep it with the contract.
4. **Turn on a second factor** if the software is reachable from outside the practice.
5. **Rebuild the role when someone changes job**, removing the old one. A promotion adds access and almost never removes any.
6. **Disable the account on the last day**, before they leave, not the following week.
7. **Disable, do not delete.** Delete the user and the audit trail loses its owner, along with your ability to say what that person did.

## The cases that do not fit the org chart

Half a practice sits outside those four roles, and those are exactly the accounts nobody reviews.

| Who | What they actually need | What has to happen first |
|---|---|---|
| Locum for two weeks | Schedule and records of the patients they treat | Their own account with an end date, never the owner's |
| Student on placement | What the supervising clinician sees, with them present | Their own account, no financial access, signed undertaking |
| Accountant | Amounts, dates and invoice series | Processor contract and access limited to invoicing |
| External IT support | The server and the backups, not the records | Processor contract, named account, logged access |
| Dental laboratory | The case, the patient and the dates | Send the case out; do not give access to the practice system |
| Former partner | Nothing, beyond what the exit agreement says | Disable the account and record the date |

Your accountant and your IT supplier are processors, and the GDPR requires a contract with each of them. It is the document most often missing in a practice that otherwise has everything in order.

## Review it once a year, in half an hour

The French regulator CNIL recommends "a regular review, at least annually, of authorisations" to spot unused accounts and realign rights with what people actually do now. It is the cheapest measure on this page.

The review fits into four questions: who has an account and still works here, who changed job and kept the old permissions, which accounts have gone unused for three months, and which outside suppliers can still log in.

> **Write the answer down with the date on it.** That sheet is what you show when someone asks how access is controlled, and it is what reminds you next year what you decided this year.

## What software can do, and what it cannot

No system stops someone reading a screen over a colleague's shoulder, and none replaces the conversation about why you do not open the record of a patient you happen to know. What it can do is make the split easy to maintain and leave a record.

In Dentalpin roles come predefined, every time a record is opened it is logged with the user, the timestamp and the patient, and accounts are disabled without erasing what they did. Terms for the hosted and self-hosted versions are on [pricing](/en/pricing/).

## Sources

- Regulation (EU) 2016/679 (GDPR), articles 9, 29 and 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 27 August 2026.
- NCSC, *10 Steps to Cyber Security: Identity and access management*. [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management). Consulted 27 August 2026.
- CNIL, *Sécurité: Gérer les habilitations* (updated 13 March 2024). [cnil.fr](https://www.cnil.fr/fr/securite-gerer-les-habilitations). Consulted 27 August 2026.

Every practice divides the work differently, and whether a specific access is justified depends on the case. Check yours with your data protection adviser.
