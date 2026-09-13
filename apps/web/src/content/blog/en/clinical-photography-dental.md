---
title: "Clinical photography in dentistry: organising and protecting the images"
description: "Where patient photographs belong, what consent publishing them needs, what the file metadata gives away and how long you keep them. With official sources."
pubDate: 2026-09-13
translationKey: fotografia-clinica-dental
tags: [clinical-photography, clinical-records, gdpr, consent, backups]
---

A clinical photograph is part of the clinical record. It belongs in the patient's file, under the same permissions, the same backup and the same retention period as everything else, not in a phone's camera roll or a shared folder on the front desk machine.

Two things get confused constantly: taking the photograph to diagnose and treat, which needs no data protection consent, and publishing it, which needs one of its own, explicit and revocable.

This is not legal advice. Every official source is listed at the end, consulted on 13 September 2026.

## The photograph is a health record, even on a phone

Article 4(15) of the GDPR defines data concerning health as "personal data related to the physical or mental health of a natural person, including the provision of health care services, which reveal information about his or her health status".

An intraoral photograph is exactly that. It reveals the state of someone's mouth, it was taken while providing care, and it sits in the special category that Article 9(1) prohibits processing unless an exception applies.

> **If the photograph informs the diagnosis or the plan, it is part of the record.** Where the file happens to live does not change that. An image in a personal camera roll is still a clinical record, just one nobody controls.

That is the practical case against the personal phone. Taking the picture with a phone is not the problem. The camera roll syncing to a personal cloud account is, along with the fact that anyone holding the handset can scroll through it and the practice can neither audit it nor delete it.

![Patient record showing the dental chart, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The screen someone will use to look for that photograph in two years' time. If the image does not hang off here, it does not exist.*

## Where images end up, and what each place costs you

| Where the image lives | Who can see it | What happens on a records request |
|---|---|---|
| Personal phone camera roll | ✗ Whoever is holding the phone | ✗ Nobody knows which photos exist or whose they are |
| Network folder named per patient | ~ Everyone with folder access | ~ Found by hand, and duplicates get missed |
| Camera memory card | ✗ Whoever has the card | ✗ Never surfaces: nobody looks there |
| Messaging app thread with the lab | ✗ Outside the practice, unlogged | ✗ No local copy to hand over |
| Attached to the patient record | ✓ Only staff with permission | ✓ Comes out with the rest of the record |

The difference between the first rows and the last is not image quality. It is whether anyone can answer "show me every photograph of this patient" and "who has opened them" within a minute.

## Two consents, and only one of them is optional

Article 9(1) prohibits processing health data as a general rule. Article 9(2) lists the exceptions, and the one that carries a dental practice through its working day is point (h): processing "necessary for the purposes of preventive or occupational medicine (...) medical diagnosis, the provision of health or social care or treatment".

Photographing to diagnose, plan and track progress sits there. It needs no separate data protection consent, in exactly the way writing up today's notes needs none.

Publishing is different. There is no provision of care to shelter under, so the basis becomes point (a): "the data subject has given explicit consent to the processing of those personal data for one or more specified purposes".

> **Consent to treatment does not cover the website, the conference slide or the Instagram post.** They are separate purposes with a separate legal basis, and the consent has to say which one it covers.

Two consequences that get forgotten:

- **It is revocable.** A consent that cannot be withdrawn as easily as it was given is not consent, and withdrawal means taking the image down rather than leaving it up because it is already out there.
- **For a child, the person with parental responsibility gives it**, and the child in the photograph turns eighteen at some point. A consent signed in 2019 by a parent is a weak thing to rely on in 2032.

## A patient photograph is not automatically biometric data

This is the expensive confusion in the other direction, the one that makes careful practices freeze. Recital 51 of the GDPR is explicit:

"The processing of photographs should not systematically be considered to be processing of special categories of personal data as they are covered by the definition of biometric data only when processed through a specific technical means allowing the unique identification or authentication of a natural person."

So a photograph of an arch is health data, with everything that implies, but it is not biometric data merely by being a photograph. It becomes biometric the day it is run through face matching, which is precisely what some consumer cloud galleries do without being asked.

## The metadata says things you did not

An image file carries more than pixels. The Exif format, standardised by CIPA as DC-008, defines a dedicated GPS Info block alongside the date, the time and the camera model.

Three concrete checks:

1. **Find out whether your camera or phone writes coordinates.** If the practice is also somebody's home address, that coordinate is a fact about a person rather than about a tooth.
2. **Set the camera clock.** A series dated three years out is useless as evidence of progress, and two patients' series interleave the moment anything sorts by date.
3. **Read the filename before you send it.** `smith-jane-preop.jpg` travels with the file to the lab, to a colleague's inbox and into both downloads folders.

> **Anonymising is not a black bar over the eyes.** An intraoral photograph has no face to cover and can still carry the patient's name in the filename, the exact date in the Exif and the practice coordinates beside it.

## A photographic series you can actually repeat

The value of clinical photography is comparison, and only what is taken the same way compares. Before arguing about cameras, fix the series and the framing:

1. **Decide a fixed set** and write it down. A common working set is eight shots: extraoral frontal at rest, frontal smiling, profile, intraoral frontal in occlusion, right lateral, left lateral, upper occlusal and lower occlusal.
2. **Fix the distance and the height.** If one series is shot standing and the next sitting, the before-and-after measures the photographer's posture.
3. **Fix the light.** Same flash, same white balance, or the colour shifts between visits and any shade comparison is worthless.
4. **Take the whole series even when you do not need all of it.** Reshooting the missing one six months later is not an option.
5. **Download and attach the same day.** What stays on the card "for later" is what goes missing.
6. **Do not edit the clinical image.** Cropping, brightening or saturating turns a record into an illustration. If a presentation needs a retouched version, make it a separate file and leave the original untouched.

Point 6 is the most commonly skipped and the most expensive. An edited photograph documents nothing, because the change from treatment can no longer be told apart from the change from the filter.

## Backups: the images are nearly all of the weight

In a paperless practice the record text takes almost no space and the images take nearly all of it. That changes two practical decisions.

- **Do the arithmetic before choosing where they live.** Multiply the size of one series by the cases you photograph in a year and you have your real annual growth. That number decides whether the backup fits where you think it does.
- **Check the backup includes the files, not just the database.** This is the classic failure: the software is backed up, and the images sit in a folder nobody added to the job.
- **Restore one image for real, once.** A backup that has never been restored is a hypothesis.

![Patient record, activity tab: clinical alerts, active plan and a timeline filterable by visits, treatments, financial and communications](/screenshots/patient-timeline.png)

*A timeline with an author and a date on every entry. That is what turns a pile of files into a record.*

## Who can open them, and how you would know

Permissions on images are usually looser than on the rest of the record, and there is no good reason for that. A photograph of an arch is data concerning health in exactly the way the medical history is.

Two questions worth being able to answer without thinking: which roles can view images for a patient they are not treating, and whether there is a log of who opened what. If the answer to the second is no, image access is not controlled, it is merely permitted.

## How long you keep them

Photographs inherit the retention period of the record they belong to, because they are part of it. The figure is national, so take yours from your own rules rather than from another country's post.

For an NHS dental practice in England, the NHS Business Services Authority states the periods plainly: clinical care records for 11 years, finance related records for 2 years, and the PR form for 2 years from the end date of the course of treatment, pointing to NHS England's Records Management Code of Practice for the detail.

Keeping everything forever is not the safe answer either. Indefinite retention with no criterion runs against the GDPR's storage limitation principle and multiplies the damage of any single breach.

## Ten minutes to find out where you stand

1. **Pick up the phone the photographs get taken on** and count the patient images in the camera roll right now.
2. **Check whether that camera roll syncs** to a personal cloud photo account.
3. **Open a recent photograph and read its properties**: date, time, and whether there are coordinates.
4. **Find every image for one named patient.** Time yourself.
5. **Check your backup covers the image folder** and when it was last restored.
6. **Find the publication consent** for the last photograph you posted on social media. If it does not turn up, that is this week's job.

In Dentalpin images attach to the patient record rather than living in a separate folder, permissions and the access log are the same ones that cover the rest of the record, and everything comes out as a standard PostgreSQL dump plus the files, with no proprietary format in the way. The code is open, so that can be audited instead of taken on trust, and the terms for the hosted and self-hosted versions are on the [pricing](/en/pricing/) page.

## Sources

All consulted on 13 September 2026.

- Regulation (EU) 2016/679 (GDPR), articles 4(15) and 9, and recital 51. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
- NHS Business Services Authority, "How long should NHS dental practices keep patient records for?". [faq.nhsbsa.nhs.uk](https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01913/en-us).
- NHS England, Records Management Code of Practice. [transform.england.nhs.uk](https://transform.england.nhs.uk/information-governance/guidance/records-management-code/).
- CIPA DC-008 / DC-X008, "Exchangeable image file format for digital still cameras: Exif Version 2.32", GPS Info IFD. [cipa.jp](https://www.cipa.jp/std/documents/e/DC-X008-Translation-2019-E.pdf).
