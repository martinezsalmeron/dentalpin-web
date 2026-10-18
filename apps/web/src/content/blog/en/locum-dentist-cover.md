---
title: "Locum dentist cover: who can stand in, who gets paid and what the notes must show"
description: "A locum needs GDC registration, and a place on the dental performers list for NHS work. What the rules require, and what every note has to carry."
pubDate: 2026-10-18
translationKey: dentista-sustituto-clinica-dental
tags: [locum, gdc, performers-list, record-keeping, practice-management]
---

A locum covering for you in the UK needs two separate things, and most practices only check the first. They must be registered with the General Dental Council, because section 38 of the Dentists Act 1984 makes it a criminal offence for anyone who is not a registered dentist or dental care professional to practise dentistry. And if the cover includes NHS primary dental services, they must also be on the dental performers list: regulation 31(1) of the Performers Lists Regulations says a dental practitioner "may not perform any primary dental services unless that dental practitioner is included in the dental performers list".

GDC registration is UK-wide. The performers list is England-specific, belongs to the practitioner rather than the practice, and is the one that catches people out on a Monday morning.

## Two permissions, two registers

They are granted by different bodies for different reasons, and holding one tells you nothing about the other.

- **GDC registration** is the licence to practise dentistry at all. Section 38(2) of the Dentists Act 1984 makes practising without it an offence punishable on summary conviction by a fine.
- **The dental performers list** is NHS England's list of who may deliver NHS primary dental care. Regulation 3(1)(b) of the 2013 Regulations requires NHS England to prepare, maintain and publish it, and regulation 3(2) says it must be available for public inspection.
- **The one exception is narrow.** Regulation 31(2) disapplies the list requirement only during the first three months of foundation training. Nothing else in Part 3 creates a grace period for a locum who has applied but not yet been admitted.

![Week view of the practice diary, with one column per clinician and the gaps across the week](/screenshots/schedule-week.png)

*The diary in week view, one column per clinician.*

> **A performers list place belongs to the practitioner, not to the practice.** Your contract does not extend to them, and an application in progress is not inclusion. If the list entry is not there on the day, the NHS work cannot be done by that person, however good their CV is.

There is also an ongoing duty that a long-term locum will hit. Regulation 9(1A) requires a practitioner on a list to declare to NHS England in each reporting period that they continue to perform the regulated services, with reporting periods running in twelve-month blocks from 1 January 2024.

## Indemnity is theirs, and you should see it

GDC Standard 1.8 requires that "you must have appropriate arrangements in place for patients to seek compensation if they have suffered harm". Standard 1.8.1 puts it plainly: you must have appropriate insurance or indemnity in place so that patients can claim any compensation they are owed.

That duty sits on the locum personally, not on your practice policy. Standard 1.8.2 adds that they should keep to the terms of their cover and contact the provider as soon as possible when a claim is made, which is a reason to know who their provider is before they start rather than after.

## What the notes have to carry

This is the part that quietly goes wrong during cover, and the GDC is specific about it. Standard 4.1 requires you to "make and keep contemporaneous, complete and accurate patient records", and Standard 4.1.4 adds the line that matters here: you must record the name or initials of the treating clinician.

> **Standard 4.1.4 is the whole locum problem in one sentence.** The record must carry the name or initials of the treating clinician. A fortnight of notes entered under the absent principal's login does not meet it, and tidying them afterwards runs into 4.1.5, which requires amendments to be clearly marked up and dated.

Three more sub-points of the same standard bear on a handover:

- **Complete and accurate every time** (4.1.1), including an up-to-date medical history, with radiographs, consent forms and referral letters forming part of the record.
- **Amendments clearly marked up and dated** (4.1.5), which is what stops a tidy-up after the locum leaves from looking like a rewrite.
- **Referrals recorded in the notes** (4.1.6), with a written prescription where one is needed. A referral made during cover and not written down is a referral nobody follows up.

Continuity has its own standard. Standard 1.7.8 says you should take steps to ensure that arrangements are made promptly for the continuing care of the patient, and a planned absence is the easiest version of that duty to discharge.

![Patient record, activity tab: clinical alerts, active plan and a timeline filtered by visits, treatments, finances and communications](/screenshots/patient-timeline.png)

*A patient timeline, with visits and treatments in order.*

## NHS cover and private cover are not the same job

| | Private cover only | NHS primary dental services |
|---|---|---|
| GDC registration | ✓ Required | ✓ Required |
| Dental performers list | ✗ Not required | ✓ Required, reg. 31(1) |
| Indemnity in their own name | ✓ Required, Standard 1.8.1 | ✓ Required, Standard 1.8.1 |
| Name or initials in the notes | ✓ Required, Standard 4.1.4 | ✓ Required, Standard 4.1.4 |
| Annual declaration to NHS England | Not applicable | ✓ Each reporting period, reg. 9(1A) |

The table is the whole reason to ask one question first: is any of this cover NHS, even one session a week. If it is, the list entry stops being paperwork and becomes the thing that decides whether the day can go ahead.

## Six things to settle before the cover starts

1. **Check the GDC register** and keep a dated note that you did, with the registration number.
2. **Check the performers list entry** if any of the work is NHS, and check it names the right practitioner rather than the practice.
3. **Ask for their indemnity certificate** and the provider's name, and diary the expiry if the cover runs past it.
4. **Give them their own login** before the first patient. This is not an IT preference: Standard 4.1.4 cannot be met if every note from a fortnight carries somebody else's initials.
5. **Agree who completes unfinished treatment** and tell the patients concerned, so continuity under Standard 1.7.8 is arranged rather than assumed.
6. **Read the period's notes on your return** and close what was left open, while both of you can still remember it.

## What this article does not answer

Two things, and pretending otherwise would be worse than saying so.

The performers list above is the English one. Scotland, Wales and Northern Ireland run their own arrangements for NHS dental practitioners under their own rules, so if your practice is outside England, confirm the equivalent requirement with your health board before the cover is booked.

The second is money: whether a locum is employed or self-employed, and how that is taxed, depends on the facts of the engagement and is a question for your accountant with the agreement in front of them. This article describes the sources it cites and is not legal advice.

## The one thing your software has to get right

Everything above is procedure except for one data point, and software is the only place it can live: every note and every treatment line has to carry who performed it, and that must survive a change of user. It is the same attribution you need to pay an associate and to audit who opened a record, so it is not a quirk of locum cover.

A single-handed practice can track an absence with a spreadsheet and a folder. With three surgeries and a locum rotating through them, the thing that breaks is not the rota, it is the attribution: a fortnight of notes ends up under whoever was logged in.

[Dentalpin](/en/pricing/) stores the clinician on every clinical note and on every quote and invoice line, gives each clinician their own column in the diary, and lets you filter a patient's timeline by who treated them. It is open source and self-hostable with a public API, so the attribution data can be pulled out for payroll or for your accountant without asking anyone's permission.

## Sources

- Dentists Act 1984, section 38, prohibition on practice of dentistry by laymen: [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/1984/24/section/38) (accessed 18 October 2026)
- The National Health Service (Performers Lists) (England) Regulations 2013 (S.I. 2013/335), regulations 3, 9 and 31: [legislation.gov.uk](https://www.legislation.gov.uk/uksi/2013/335/regulation/31) (accessed 18 October 2026)
- General Dental Council, Standards for the Dental Team, Principle 4, standard 4.1 and sub-points 4.1.1 to 4.1.6: [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle4/principle4.aspx) (accessed 18 October 2026)
- General Dental Council, Standards for the Dental Team, Principle 1, standards 1.7.8 and 1.8: [standards.gdc-uk.org](https://standards.gdc-uk.org/pages/principle1/principle1.aspx) (accessed 18 October 2026)
