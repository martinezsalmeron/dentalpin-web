---
title: "Storing dental X-rays: keeping them, finding them and sharing them safely"
description: "How to store dental radiographs: why DICOM matters, how long you must keep them in the UK and the US, where the files belong and how to share them safely."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [radiographs, dicom, clinical-records, data-protection, practice-management]
---

Store every radiograph inside the patient's clinical record, in a format you can open without the sensor manufacturer's own software, and keep one copy off site. In England, NHS dental clinical care records are kept for eleven years. In the United States there is no federal retention period at all, because HIPAA does not set one.

What follows is how that works in practice: which format to insist on, where the file has to live, how much space you will actually need, and how to hand an image to someone without turning it into a breach.

## The format matters more than the disk

A digital radiograph is not just a grid of pixels. It carries the patient, the date, the device, the technique and the exposure settings, and that is the part that turns an image into a clinical record.

The international standard for this is DICOM, which NEMA describes as "the international standard to transmit, store, retrieve, print, process, and display medical imaging information". It is free to download, so anyone can check what it actually says.

- **DICOM PS3.10** defines the file format, which is what lets you copy an image somewhere else and still read it.
- **DICOM PS3.2** defines conformance, and requires every vendor to publish a statement of what they really implement. You ask for that document before you buy, not after.
- **An exported JPEG is not the same thing.** It is fine for showing a patient on screen and useless as an archive, because it drops the metadata and usually the bit depth too.

> **The test that tells you whether you have an archive or a hostage.** Take a radiograph from two years ago, copy it to a USB stick and open it on a computer where the sensor software is not installed. If it will not open, you do not have a clinical archive. You have a file locked inside a product.

## How long you keep them depends on where you practise

There is no single answer, and the two most common answers are very far apart.

In England, the NHS Business Services Authority sets out the retention periods for NHS dental practices and gives eleven years for clinical care records, pointing to the NHS England Records Management Code of Practice for the detail.

In the United States, HHS is explicit that the HIPAA Privacy Rule does not include a retention period: "State laws generally govern how long medical records are to be retained." What HIPAA does require is that safeguards apply "for whatever period such information is maintained by a covered entity, including through disposal".

| Question | What usually happens | What you should be able to show |
|---|---|---|
| When an image gets deleted | ✗ Never decided, deleted when the disk fills | ✓ A written rule applied the same way to everyone |
| Who is allowed to delete it | ✗ Anyone with access to the folder | ✓ A specific permission, with a log |
| Where the oldest copy is | ~ On a drive in a cupboard | ✓ On media somebody has actually read this year |

> **Write your retention period down before you need it.** A rule you can point to is a defensible decision. Deleting images because the server was full is the same act without the defence, and it is the version that surfaces years later when a complaint arrives.

## The image belongs in the record, not in a folder

The common failure is not losing radiographs. It is not finding them. A folder called `2019-11-14` holding twelve numbered files is digitised paper, not a clinical record.

Once the image is linked to the patient and the appointment, three things stop being problems: finding it, knowing why it was taken, and knowing who has looked at it.

![Patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The record the image ends up attached to, next to the tooth it documents and the plan that justified it.*

| | Folder on the operatory PC | Shared folder on the server | Linked to the clinical record |
|---|---|---|---|
| Finding one patient's image | ✗ Depends how it was named that day | ~ Only while someone keeps the convention | ✓ It is on the record |
| Included in the backup | ✗ Almost never | ~ If someone remembered to add it | ✓ With everything else |
| Survives a change of computer | ✗ Stays on the old machine | ~ If the share gets migrated | ✓ Travels with the database |
| Record of who viewed it | ✗ None | ✗ None | ~ Only if the software logs access |

## Work out the storage you need, do not guess it

No general figure helps, because it depends on your sensor, your resolution and whether you take volumetric scans. There is a way to know in ten minutes.

1. **Check the size of your image folder for the last twelve months.** It is the only number that describes your practice rather than someone else's.
2. **Divide it by the patients seen in that period.** That is your real average per patient.
3. **Multiply by the patients you expect and the years you must retain.** That is the size of your archive in a decade.
4. **Measure CBCT separately** if you take it. A 3D volume is not on the same scale as a periapical, and one scan can outweigh a year of intraorals.
5. **Compare that number with the storage your vendor includes** and with what the next tier costs. The surprise is usually there.

## The backup that quietly leaves the images out

Radiographs are most of the data volume in a dental practice, so they are the first thing excluded when a backup job needs to finish overnight. The job still runs, still reports success, and no longer protects the bulk of your records.

- **Check the size of the backup**, not just the success email. If it is far smaller than your data, the images are being skipped.
- **Restore a full backup at least once a year** and open three patients with radiographs. The full drill is in the guide to [dental clinic backups](/en/blog/dental-clinic-backups/).
- **Encrypt anything that leaves the building.** A lost drive full of clinical images is a reportable breach, not an inconvenience.

## Sharing without creating an incident

A radiograph identifies a person and describes their health, so it is sensitive under every regime that applies to you. Plain email with an attachment is rarely the appropriate control when something better exists.

- **With the patient:** they have a right to a copy. Give them the DICOM if they are going on to a specialist, plus a viewable version they can open at home without special software.
- **With another clinician:** a time-limited link or a portal beats an attachment, because it expires and leaves a trail. If it has to be email, encrypt it and send the password another way.
- **With the lab:** send only what the work needs. A crown case does not require the patient's whole radiographic history.
- **Log every handover.** Date, who, by what route, what was sent. That log is your answer when someone asks two years later.

![Patient record on the activity tab, with clinical alerts, the active plan and a timeline filterable by visits, treatments, financials and communications](/screenshots/patient-timeline.png)

*The patient timeline, which is where you see which visit an image was taken at.*

## When you change software, the images are what gets left behind

In a migration the database gets negotiated and the images get forgotten. Ask for three specific things in writing, before you sign.

1. **An export of the images in DICOM**, not a folder of screen captures and not a proprietary viewer.
2. **The link between each image and its patient and date**, in a readable file. Without it you have twenty thousand files and no history.
3. **A test export now**, with ten real patients, rather than a promise for the day you leave.

That conversation goes better before you commit, and it belongs on the list of [questions to ask before signing](/en/blog/questions-before-signing-dental-software/).

In Dentalpin images are stored linked to the clinical record and on the file system, so they land in the same backup as the database and you can take them with you whenever you want. The terms are on the [pricing page](/en/pricing/).

## Sources

- NHS Business Services Authority, *How long should NHS dental practices keep patient records for?* [faq.nhsbsa.nhs.uk](https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-01913/en-us). Consulted 28 August 2026.
- U.S. Department of Health and Human Services, HIPAA FAQ 580, *Does the HIPAA Privacy Rule require covered entities to keep patients' medical records for any period of time?* [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/faq/580/does-hipaa-require-covered-entities-to-keep-medical-records-for-any-period/index.html). Consulted 28 August 2026.
- DICOM standard, current edition and part list (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Consulted 28 August 2026.

This is not legal advice. Retention periods depend on your jurisdiction and your circumstances, and are worth confirming with your regulator or your indemnity provider.
