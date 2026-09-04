---
title: "Dental imaging integration: connecting sensors and scanners to your software"
description: "What imaging integration actually means: DICOM modality worklist, where the image ends up, why intraoral scanners are different, and what to ask before you sign."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [imaging, dicom, intraoral-scanner, integration, practice-management]
---

The integration that matters is not whether your software can open an image. It is three specific things: the sensor gets the patient from the clinical record instead of someone typing the name again, the image comes back attached to that patient and that visit, and you can export it in DICOM whenever you want. Miss the first one and you are running two patient databases in the same practice.

What follows is how to check which one you have: the mechanism that fixes it, the four levels of integration that are all sold with the same word, and what to put in writing before you sign.

## The problem is not the viewer, it is two patient lists

Almost every imaging program ships with its own patient database. Someone filled it in the week the sensor was installed, and it has been running alongside the practice management system ever since.

The two start identical and drift apart on their own. A hyphenated surname typed without the hyphen, a date of birth entered at five to nine, a patient added in one system and not the other.

- **Duplicate patients appear inside the imaging program**, and each copy holds part of the radiographic history.
- **The reason for the exposure gets lost.** The image exists, but it is not attached to the appointment that justified it, so nobody can say why it was taken.
- **Nobody notices while the equipment stays the same.** It surfaces the day you have to hand a patient their complete record, or the day you change software.

> **The quick test is the names.** Open the imaging program and look up the three patients with the most visits last year. If one appears twice, or spelled differently from the clinical record, what you have is a button that opens another program.

![Patient record on the personal details tab, showing name, contact and administrative fields](/screenshots/patients.png)

*The record the name and date of birth on an exposure should come from.*

## The worklist is the mechanism that fixes it

The standard behind all of this is DICOM, published by NEMA. It is also an ISO standard, ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, and it is the workflow half of that title that almost no dental practice uses.

The mechanism is the DICOM Modality Worklist. The Baden-Württemberg dental chamber sets the flow out step by step in its guidance on DICOM in the dental practice, and it is the same in a hospital and in a two-chair practice with one sensor:

1. **The exposure is ordered from the practice management system**, with the patient already identified in their record.
2. **That order lands on a list**, either one list per device or a single list for all of them.
3. **The device reads the list at its own console** and takes the patient details from there. Nobody retypes anything.
4. **The exposure is taken** and the images are linked to those details inside the device itself.
5. **The images are sent to the archive** and the order is marked done and drops off the list.

Step three is what removes the typing error. Step five is what makes the image appear in the record on its own. A system that only does step five saves you hunting for a file; one that does both deletes the second patient database.

## Four levels are sold with the same word

"Integrates with your imaging" describes wildly different things. These are the four you actually meet, weakest first.

| Level | What it really does | Patient typed twice | Image returns to the record |
|---|---|---|---|
| A button that opens the viewer | Launches the other program | ✗ Yes | ✗ No |
| Per-patient link | Passes the patient ID on launch | ✓ No | ~ Vendor dependent |
| Worklist plus DICOM store | Order out, images back | ✓ No | ✓ Yes |
| DICOM web services | Also query and retrieve over the web | ✓ No | ✓ Yes |

That last level is DICOMweb, which the standard itself calls "the DICOM Standard for web-based medical imaging" and describes as a set of RESTful services. The names you will see on a spec sheet are QIDO-RS to search, WADO-RS to retrieve, STOW-RS to store and UPS-RS for worklist items.

> **Ask for the level by its name, not by the adjective.** "Compatible" and "connected" mean nothing in a quote. "Acts as a Modality Worklist SCP" and "accepts STOW-RS" do, and both can be verified before you pay.

## An intraoral scanner is a different problem

An intraoral scanner does not produce radiographs, it produces surface meshes, and by default it does not store them in DICOM. What comes out are the mesh formats used in 3D manufacturing, STL and OBJ first among them, and plenty of manufacturers keep the case in their own cloud portal, with its own login and its own patient list.

The standard has gone after them. DICOM Supplement 205 "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", and Supplement 208 did the same for OBJ, for the MTL material libraries and for texture maps in JPG or PNG.

- **Ask where the case lives**, not where it is displayed. If the answer is the scanner manufacturer's portal, the archive is not in your practice.
- **Ask whether the export carries the link to the patient**, not just the files. Twenty thousand unnamed meshes are not a record.
- **Ask what happens when you stop paying for the scanner.** It is the same question everyone asks about practice management software and almost nobody asks about the digital workflow portal.

> **The mesh and the radiograph end up in different places, and that is the problem in one sentence.** A patient with a CBCT in the archive, periapicals in a folder on the operatory PC and a scan in a web portal has three records, and the person who signed the consent form thinks they have one.

![Patient record on the activity tab, with clinical alerts, active plan and a timeline filterable by visits, treatments, payments and communications](/screenshots/patient-timeline.png)

*A patient timeline, which is where you see which visit each investigation belongs to.*

## How to find out what you have today, in twenty minutes

You do not need an audit. You need six checks, all on a real patient and none of them irreversible.

1. **Create a new patient in the practice management system** and see whether it shows up in the imaging program without anyone touching it.
2. **Start an exposure at the device** and see whether the patient is already filled in or has to be looked up.
3. **Take an image and go back to the record.** Count the seconds until it appears, and if it does not, write down where it was instead.
4. **Find the file on disk.** If it sits in a folder named after the manufacturer and your backup does not cover it, you already have a finding.
5. **Export that image to a USB stick and open it on another computer** with none of the manufacturer's software installed.
6. **Repeat step one with the intraoral scanner**, which is nearly always the one left out.

What comes out of that is worth more than any brochure, because it describes your practice. If step four leaves you uneasy, the guide on [storing dental X-rays](/en/blog/storing-dental-xrays/) covers the format and the archive.

## What to put in writing

All of this is negotiable before you sign and not after, and it fits in five lines of an email.

- **The DICOM conformance statement for the device and for the software.** Part PS3.2 of the standard requires every vendor to publish what they actually implement, so it exists and you can ask for it.
- **Whether the software acts as a worklist server**, and which devices it has been tested against, with names and versions.
- **Where the image files are stored**, on what path or in what service, and whether they are covered by the same backup as everything else.
- **How you get everything out**, in DICOM and with the patient-and-date link in a readable file, demonstrated now on ten patients.
- **What each connection costs.** Bridges to specific devices are billed separately more often than the demo suggests, and that question belongs on the list of [what to ask before signing](/en/blog/questions-before-signing-dental-software/).

In Dentalpin, images are stored linked to the clinical record and on your own server's filesystem, so they are covered by the same backup as everything else and you can take them with you. The terms are on [pricing](/en/pricing/).

## Sources

- DICOM, current edition and list of parts (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Consulted 4 September 2026.
- DICOMweb, definition and the QIDO-RS, WADO-RS, STOW-RS and UPS-RS services. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Consulted 4 September 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Consulted 4 September 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL and textures). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Consulted 4 September 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Consulted 4 September 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, description of the DICOM Modality Worklist flow. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Consulted 4 September 2026.
