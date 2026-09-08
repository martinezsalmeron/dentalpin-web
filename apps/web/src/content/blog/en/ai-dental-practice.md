---
title: "AI in the dental practice: what is real today"
description: "What AI actually does in a dental practice, which features are regulated as medical devices, and how to check a vendor's claim in ten minutes."
pubDate: 2026-09-08
translationKey: ia-clinica-dental
tags: [ai, radiography, medical-device, regulation]
---

Three things work today: flagging findings on a radiograph as a second read, turning speech and paperwork into text, and deciding who to call next. That is the list. No cleared system diagnoses on its own, and software that marks a carious lesion on a radiograph is not just another feature of your practice management system. It is a regulated medical device, and its clearance says so in writing.

That line is what separates the real from the trade-show promise. The useful part is that you can check it yourself, without knowing anything about models.

## The question that sorts the whole market

If a feature uses patient data to inform a diagnostic or treatment decision, it is a medical device. If it does not, it is not.

In the United States that means an FDA clearance with a number you can look up. In the EU and the UK it means a classification rule: Annex VIII, Rule 11 of Regulation (EU) 2017/745 puts "software intended to provide information which is used to take decisions with diagnosis or therapeutic purposes" in class IIa at minimum, rising to IIb or III depending on the harm the decision could cause, and ends with "All other software is classified as class I".

That class decides who checks the work. Article 52(7) lets a class I manufacturer self-declare conformity; Article 52(6) sends class IIa manufacturers to Annex IX or XI, where a notified body is involved.

> **A CE mark on a medical device carries a number.** MDR Article 20(5) requires the notified body's identification number to follow the CE marking, and says that number "shall also be indicated in any promotional material which mentions that a device fulfils the requirements for CE marking". If a page says "CE certified" and there are no four digits anywhere, half the sentence is missing.

![Patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Where a finding has to end up before it counts. A mark in a viewer that never reaches the clinical record has not happened.*

## What genuinely works

Three families, and only the first one is regulated.

- **Assisted radiograph reading.** Software that marks radiolucencies consistent with caries, bone loss or periapical lesions on bitewings and periapicals. It runs as a concurrent second read, not as a replacement for yours.
- **Dictation and transcription.** Turning a chairside note into text, or pulling structured data out of a scanned referral. It does not inform a diagnosis by itself, so it is not a device, but it does send audio containing health data somewhere.
- **Administrative prioritisation.** Ordering the recall list, surfacing quotes that have gone three weeks without an answer, estimating which of tomorrow's slots carry the most no-show risk. That is a management judgement, and it is where AI adds sequencing rather than clinical opinion.

The quiet part is that the last two families save the most time in a small practice, and they are the ones nobody demonstrates on the stand.

## What is promised and does not exist

It lands harder with the official label in front of it than as an opinion.

On 27 March 2023 the FDA cleared Overjet Caries Assist under 510(k) number K222746, as a class II device under 21 CFR 892.2070, product code MYN. Its authorised Indications for Use read: "a radiological, automated, concurrent-read, computer-assisted detection (CADe) software intended to aid in the detection and segmentation of caries on bitewing and periapical radiographs. The device provides additional information for the dentist to use in their diagnosis of a tooth surface suspected of being carious. The device is not intended as a replacement for a complete dentist's review or their clinical judgment."

The same file publishes its limits, and those are the part nobody quotes:

- **Not validated on primary or mixed dentition.** The warnings say "the safety and effectiveness of the system has not been established on primary or mixed dentition". The cleared population is patients aged twelve and over with permanent teeth.
- **Licensed dentists only.** "The device should only be used by licensed dentists", in those words.
- **Not the sole decision-making tool.** It "should not be relied upon as the sole decision-making tool for diagnosis or treatment".
- **It backs off where teeth overlap.** It is trained not to predict in areas of significant overlap, precisely to avoid flooding the image with false positives.

> **A clearance is not a promise of accuracy, it is a description of scope.** What a regulator signs off on is one narrow sentence about what the software does and for whom. Asking a vendor for that sentence costs one email, and it tells you more than any accuracy percentage with no study behind it.

## Real, partly real, and not yet

| The claim | Where it actually stands | What backs it |
|---|---|---|
| Marking caries on a radiograph | ✓ Real, as a second read | Cleared device, class II in the US and IIa in the EU |
| Measuring bone for implant planning | ✓ Real, as a second read | Same rule, same class |
| Dictating and transcribing the clinical note | ✓ Real, no clearance needed | Does not inform the diagnosis by itself |
| Ordering who to call for recall | ✓ Real, no clearance needed | Management criterion, not a clinical one |
| A chatbot answering patients on your site | ~ Real, with a duty to disclose | Article 50(1) of the EU AI Act |
| Autonomous diagnosis with no dentist | ✗ Does not exist today | No authorisation covers it |
| A treatment plan generated and accepted alone | ✗ Does not exist today | That is a therapeutic decision: Rule 11 |

## What the rules already ask of you

There is an expensive confusion here, because most people watch the wrong date.

Regulation (EU) 2024/1689, the AI Act, classifies as high risk under Article 6(1) any AI system that is a safety component of a product covered by the legislation in its Annex I, and point 11 of that Annex is the Medical Devices Regulation itself. The Chapter III obligations for those systems apply from 2 August 2028, after Regulation (EU) 2026/1744 amended Article 113. For Annex III high-risk systems the date is 2 December 2027.

Two things already apply, though:

1. **Staff AI literacy, since 2 February 2025.** Article 4, as replaced by the 2026 regulation, requires providers and deployers to "take measures to support the development of AI literacy" of their staff and of others operating those systems on their behalf. It does not prescribe a course. It expects the person looking at the mark on the radiograph to know what they are looking at.
2. **Saying it is an AI, since 2 August 2026.** Article 50(1) requires people interacting directly with an AI system to be informed of that, unless it is obvious. A website chatbot introduced with a human first name is squarely inside that.

None of this is only European. Whatever the regulator, everything leaving the practice for an AI vendor is still health data, with the same contracts and lawful bases covered in [GDPR in the dental clinic](/en/blog/gdpr-dental-clinic/).

![Patient record with the activity tab open: clinical alerts, active plan and a timeline filterable by visits, treatments, financial movements and communications](/screenshots/patient-timeline.png)

*Who decided what, and when. If an automated suggestion changes something on a patient, this is where it has to be reconstructable.*

## Checking an AI claim in ten minutes

1. **Ask whether that specific feature is a regulated device.** Not whether "the platform" is. One vendor can have one cleared module and twenty features that are nothing of the kind.
2. **Look for the number.** A US claim has a 510(k), De Novo or PMA number you can search in FDA's public database. An EU claim has a four-digit notified body number, which Article 20(5) requires in the promotional material itself.
3. **Ask for the indications for use, verbatim.** It is a short sentence and it always exists. Read it for two things: which population it covers, and whether it says replace or aid.
4. **Ask about dentition.** If you treat children and the software is cleared only for permanent teeth, half your book is outside its scope.
5. **Ask where images and audio are processed**, how long they are kept, and whether they train anything. Get the answer in the contract, not on a call.
6. **Run it against twenty of your own already-diagnosed radiographs.** False positives show up in an afternoon, and they are the real cost: every mark that turns out to be nothing is paid for in chair time and in the team's trust.

If a vendor cannot answer points 1, 2 and 3 in writing, the conversation is not about clinical AI. It is about something else.

## What this means for practice management software

A practice management system does not need a clearance, and almost none has one, because scheduling, payments, reminders and reporting do not inform a diagnosis. What you can demand instead is that it does not lock you in: radiographs should be able to go out to an external reader and come back, and any automated suggestion should be recorded along with who accepted it.

In Dentalpin the AI assistant stays inside that administrative zone, revalidates the permissions of whoever asked, stops for confirmation before writing anything and leaves every action in the audit log, and deliberately does not suggest diagnoses or treatments. How it deploys, on your own server or hosted, is on [pricing](/en/pricing/).

## Sources

- Regulation (EU) 2017/745 on medical devices, consolidated version of 9 July 2024: Annex VIII, Rule 11 (software classification); Article 52(6) and (7) (conformity assessment); Article 20(5) (notified body number). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02017R0745-20240709). Consulted 8 September 2026.
- Regulation (EU) 2024/1689 (AI Act): Article 4 (AI literacy), Article 6(1) and Annex I point 11 (high risk), Article 50(1) (transparency), Article 113 (dates of application). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689). Consulted 8 September 2026.
- Regulation (EU) 2026/1744 of 8 July 2026 (Digital Omnibus on AI), published in the Official Journal on 24 July 2026, in force since 27 July 2026: replacement of Article 4 and amendment of Article 113, third paragraph, point (c). [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng). Consulted 8 September 2026.
- FDA 510(k) K222746, Overjet Caries Assist, decision of 27 March 2023, 21 CFR 892.2070, class II, product code MYN: clearance letter, Indications for Use, and section 9, Warnings and Limitations. [accessdata.fda.gov](https://www.accessdata.fda.gov/cdrh_docs/pdf22/K222746.pdf). Consulted 8 September 2026.
- FDA, Artificial Intelligence-Enabled Medical Devices, the agency's public list of authorised AI-enabled devices, which states that it "is not a comprehensive resource of AI-enabled medical devices". [fda.gov](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices). Consulted 8 September 2026.

This is not legal advice. If you are about to buy an image-reading tool, review your own case with your adviser and your regulator before signing.
