---
title: "Dental implant records: lot numbers, UDI and real traceability"
description: "What to record for every implant you place, how to read a UDI, who fills in the implant card, and how to find every patient carrying a given lot in under a minute."
pubDate: 2026-08-24
translationKey: registro-implantes-trazabilidad
tags: [implants, traceability, clinical-records, compliance]
---

For every implant you place you need to be able to retrieve six things: manufacturer, product reference, lot or batch number, serial number if the product carries one, the UDI, and the date it was placed, all tied to the patient and the tooth position. That is what answers the two questions a recall raises.

The first question is easy and most practices have it covered: what is in this patient. The second is the one that breaks: which patients are carrying an implant from this lot.

> **The one minute test.** Take a lot number from two years ago and work out how many patients received one. If that means opening charts one at a time, you do not have an implant register, you have a drawer of stickers.

## The minimum record for each implant

Everything you need is printed on the package label, usually on a peel-off sticker designed to go straight into the chart. The work is not getting the data, it is putting it somewhere searchable.

- **Manufacturer and product reference.** Brand and the exact model, with diameter and length. A safety notice rarely covers an entire range.
- **Lot or batch number.** This is the key to the second question. Without it there is no way to narrow down who needs a call.
- **Serial number**, where the product carries one. It identifies that specific piece rather than any other from the same lot.
- **The UDI.** The identifier the manufacturer assigns, which lets anyone outside your practice recognise the device without ambiguity.
- **Date placed.** What later lets you sort, calculate survival and answer an insurer.
- **Tooth position and the clinician who placed it.** Two facts that are not on the box and the first two anyone looks for at a review.

Add whatever happens afterwards: the removal date if the implant is explanted, and why. A register that only knows about placements overstates what is still in service.

![Patient chart showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*A patient's dental chart. Tooth position is half the record: a lot number with no tooth attached is no use at a clinical review.*

## A UDI is two codes, and only one of them changes per box

The FDA's own description of the format is the clearest one, and it applies to the same two-part structure used in Europe.

The **device identifier (DI)** is, in the FDA's words, "a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device". Every box of the same reference shares it.

The **production identifier (PI)** is "a conditional, variable portion of a UDI that identifies one or more of the following when included on the label of a device": the lot or batch number, the serial number, the expiration date, the manufacturing date.

That distinction decides what you store. Saving only the DI tells you the model but not the batch, which is exactly what a recall asks about. Store both, or store the lot separately.

Two more things worth knowing about the US system. Labelers must present the UDI in two forms, "easily readable plain-text" and a machine-readable AIDC form, so the barcode on the box is meant to be scanned into a record rather than typed. And the database behind it, GUDID, is searchable by anyone through AccessGUDID.

## The implant card, if you practise in the EU

In the European Union the manufacturer ships an implant card with the device and the practice fills it in. Under the MDCG 2019-8 guidance the manufacturer supplies the device name, device type, serial or lot number, the UDI, its own name and address, and its website.

Three fields are left blank for you:

1. **Patient name or patient ID.**
2. **Name and address of the health institution** that performed the implantation.
3. **Date of implantation.**

> **Not every dental device gets a card.** The Regulation exempts a closed list: sutures, staples, dental fillings, dental braces, tooth crowns, screws, wedges, plates, wires, pins, clips and connectors. Fillings, braces and crowns are named there; the implant fixture itself is not on that list. In practice the manufacturer settles it, by shipping a card with the product or not shipping one.

The working rule is simple. If a card arrives, complete it and give it to the patient. Card or no card, the data goes in the chart, because that duty is yours and does not depend on what was in the box.

The MDCG 2021-11 list of suggested device types for the card is worth a glance for what it does not contain: eighty-eight entries, explicitly non-exhaustive, and not one dental item among them.

## Where the register lives

The three usual ways of keeping this behave very differently when the hard question arrives.

| | Sticker in the paper chart | Separate spreadsheet | Field on the patient record |
|---|---|---|---|
| See what a patient carries | ✓ Immediate | ✗ Manual lookup | ✓ Immediate |
| List every patient in a lot | ✗ Chart by chart | ✓ Filter by lot | ✓ Filter by lot |
| Survives staff turnover | ~ If the handwriting holds up | ✗ Usually lives on one desktop | ✓ It is in the system |
| Can be exported | ✗ | ✓ | ~ Depends on the software |
| Ties the implant to the tooth | ~ If someone writes it down | ✗ Rarely | ✓ With an odontogram |

The spreadsheet is not a joke. It solves lot search, which is the hard half, and plenty of practices have run on one for years. Its weakness is that it sits outside the clinical record and depends on somebody remembering to update it.

![Patient record on the activity tab, with clinical alerts, the active plan and a timeline of visits](/screenshots/patient-timeline.png)

*A patient's activity, visit by visit. The lot number belongs to the surgical note, not to a notebook in a drawer.*

## How long to keep it

Retention is national, and implant retention periods are long enough to outlive most software.

France requires traceability data for implantable devices to be kept for twenty years after the device is removed, ten if the patient has died, and forty years for devices derived from blood products. Germany sets twenty years from implantation for the product groups its regulation lists in an annex, and for those same groups requires that the affected patients can be identified within three working days. Dental implants are not among the groups that annex names.

> **Twenty years is longer than your practice management system will live.** An implant placed in a forty year old outlasts the software that recorded it, so ask any vendor how the implant register exports, and whether the UDI and lot come out as fields or buried in free text.

Wherever you practise, check the retention rule that applies to you. This is not legal advice, and the sources at the end are the ones to read.

## The chairside flow, step by step

1. **Before opening the package**, check expiry and reference against the plan. It is the last moment when sending the box back is still an option.
2. **Peel the label** onto the consent form or the surgical note, whichever paper actually gets scanned.
3. **Enter reference, lot, serial, UDI, date, tooth and clinician** on the patient record then and there, not at the end of the day.
4. **Fill in the implant card** with patient, institution and date, and hand it over with the manufacturer's information.
5. **Note in the chart that you handed it over.** The card leaves with the patient and gets lost; your note is what survives.
6. **If it comes out**, record the removal date and the reason against the same implant, without deleting the original entry.

Step three is the one that collapses when surgery runs long. If the system cannot take it in thirty seconds, gloved or straight afterwards, it will be recorded badly.

## What software can do about it

An implant register is a clear case of data that only works as a field, never as a comment. In Dentalpin the implant is recorded against the tooth in the odontogram with its reference, lot, serial and UDI, so a lot search returns the list of patients without opening a single chart, and those fields come out in the export. It is free and you can run it on your own server; [pricing](/en/pricing/) is published.

That said, if a safety notice lands tomorrow, a well kept spreadsheet saves you and a folder of stickers does not. That is the difference that matters, and it does not depend on which software you use.

## Sources

- US Food and Drug Administration, *UDI Basics*, on the device identifier, the production identifier and AIDC. Consulted 24 August 2026: [fda.gov](https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system/udi-basics)
- MDCG 2019-8 v2, *Guidance document Implant Card relating to the application of Article 18 Regulation (EU) 2017/745*, March 2020. Consulted 24 August 2026: [European Commission PDF](https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2019_8_implant_guidance_card_en_0.pdf)
- MDCG 2021-11, *Guidance on Implant Card – 'Device types'*, May 2021. Consulted 24 August 2026: [European Commission PDF](https://health.ec.europa.eu/document/download/498f68ec-ce00-425d-a722-69ac2be6c1b9_en)
- European Commission, *Factsheet for manufacturers of implantable medical devices*, on Article 18 and the exemptions in its paragraph 3. Consulted 24 August 2026: [European Commission PDF](https://health.ec.europa.eu/document/download/aefcab91-11e1-4532-abb7-3d88e221b998_en)
- European Commission, *Unique Device Identifier (UDI)*. Consulted 24 August 2026: [health.ec.europa.eu](https://health.ec.europa.eu/medical-devices-topics-interest/unique-device-identifier-udi_en)
- Code de la santé publique, articles R5212-33 to R5212-45, for the French retention periods. Consulted 24 August 2026: [Légifrance](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000053924277)
- Medizinprodukte-Betreiberverordnung, § 16 and Anlage 3, for the German periods. Consulted 24 August 2026: [gesetze-im-internet.de](https://www.gesetze-im-internet.de/mpbetreibv_2025/)
