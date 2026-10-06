---
title: "CCTV in a dental practice: where a camera can go and where it certainly cannot"
description: "CCTV is a separate processing activity from the clinical record. What the ICO allows at reception, what it rules out, and why there is no fixed retention period."
pubDate: 2026-10-06
translationKey: videovigilancia-clinica-dental
tags: [gdpr, data-protection, cctv, security]
---

A camera at the entrance, in the corridor and over reception is defensible if you have a real security reason and you tell people it is there. A camera in the surgery, in the staff room, in the changing area or in a toilet is not. CCTV is not an extension of your practice management software: it is a separate processing activity with its own lawful basis, its own signage, its own retention decision and its own entry in your record of processing activities. Almost no practice has written that down.

This is not legal advice. It is a reading of the official sources listed at the end, consulted on 6 October 2026. The regulator quoted is the UK ICO; practices in the EU should read their own supervisory authority, because the answers differ by country more than you would expect.

## This is not the same thing as your clinical record

Four things get mixed together and only one of them lives inside the software.

- **The clinical record** is the processing that [GDPR in a dental practice](/en/blog/gdpr-dental-clinic/) covers: health data, a care purpose, long retention periods.
- **The access log** is who opened which record and when, which is what [an audit trail](/en/blog/audit-trail-dental-records/) covers.
- **Permissions** are what each user may see, which is what [staff access levels](/en/blog/staff-access-permissions-dental/) cover.
- **CCTV** is the camera on the wall. It produces no clinical record, it is not in the software, and none of the three above touches it.

> **Most practices install cameras for two reasons and declare one.** The declared reason is theft. The second, which rarely gets written down, is watching the team, and that one changes the legal analysis completely.

## There is no fixed retention period, and that catches people out

If you have read Spanish or Portuguese guidance you may be carrying a number in your head. Do not bring it here. The ICO is explicit that UK GDPR and the Data Protection Act 2018 set no prescribed minimum or maximum retention period for footage: *"it is the purpose of your processing that should determine your retention period"*.

That is harder than a fixed rule, not easier. It means you have to be able to say why your recorder keeps fourteen days rather than three, and "that is what it came set to" is not an answer. Most recorders ship configured to overwrite only when the disk fills, which can be months.

> **Write the number down and then check the recorder matches it.** A retention policy that exists on paper while the hardware keeps six months of footage is worse than no policy, because you have documented the standard you are failing.

## Where a camera may point

The governing principle is data minimisation. The ICO puts it plainly: *"Both fixed and mobile cameras should be focussed on a relevant space, and where wider surveillance is possible but unnecessary, this should be restricted."*

![Home dashboard showing today's appointments, who is in the practice, overdue payments and the day timeline](/screenshots/home.png)

*The screen that stays on at the front desk all day: patient names, appointments and outstanding balances in plain view.*

That screen is the detail nearly everyone misses. A camera placed behind the desk to watch the till also records the day's patient list, which quietly turns a security recording into a recording of health data. If the camera has to cover that area, the fix is a privacy mask over the monitor and the paperwork, not a shorter retention period.

Then there are the places where the answer is no, whatever the justification. The ICO identifies spaces where people have *"a heightened expectation of privacy"*, naming *"public toilets and changing rooms, where the use of visual or audio recording would not be expected"*, and says these need the most exceptional circumstances to justify. A surgery where a patient is reclined, sedated or partly undressed for an hour sits on the same side of that line.

| Area | Camera for security? | What decides it |
|---|---|---|
| Entrance and door | ✓ Yes, with signage | Legitimate interests, clear security purpose |
| Reception and waiting area | ~ Minimum coverage only | Identifiable patients and screens in shot |
| Corridors | ✓ Yes | Circulation space, no clinical activity |
| Surgery or operatory | ✗ No | Heightened expectation of privacy |
| Toilets, changing areas | ✗ No | Recording would not be expected at all |
| Staff room | ✗ No | Workers expect privacy there |
| Stock room, lab with no fixed workstation | ~ Depends | A permanent workstation raises the bar |
| Audio recording anywhere | ✗ No | Switch the capability off by default |

## Watching the team is a different question with a harder answer

If the purpose is staff supervision rather than security, the ICO's monitoring workers guidance applies and it is restrictive. You *"should target any monitoring at areas of particular risk and confine it to areas where expectations of privacy are low"*. On running the cameras all day, it is blunt: *"Continuous audio and video recording can be highly intrusive and you are unlikely to be able to justify it in most circumstances."*

Audio is treated as a step up in intrusion. The ICO says you *"should switch off by default any capability to record audio"*, and separately that you *"should not normally use surveillance systems to directly record conversations between members of the public"*. In a dental practice the conversation at reception is medical history, not background noise.

Covert monitoring is the one most likely to be attempted and the least likely to survive. The ICO's position is that you are *"unlikely to be able to justify covert monitoring in usual circumstances"*, and where it is attempted it needs senior authorisation, a DPIA and grounds to suspect criminal activity or equivalent misconduct.

## What to have in place before the installer arrives

1. **Write down the purpose.** Security of people and property is a purpose. "In case something happens" is not, and staff supervision is a different legal analysis.
2. **Ask whether you need it at all.** Record the alternatives you considered, because that is the evidence that the decision was proportionate.
3. **Do a DPIA.** The ICO expects one where CCTV covers private areas or is used to monitor staff, which covers most practice installations.
4. **Put up signs at every entrance to a monitored area.** They must make clear that recording is happening, who the controller is, how to exercise rights and where to get the rest of the information.
5. **Tell the team, individually and in advance.** A sign on the door is notice to patients, not consultation with staff.
6. **Set the retention period, then set the recorder to match.** And keep the reasoning next to the number.
7. **Lock down access.** Recorder in a restricted space, named individuals only, and unique credentials if it is reachable over the internet.
8. **Add it to your record of processing activities**, with its purpose, lawful basis, retention and recipients.

## What a software vendor can and cannot do about this

![Patient record, activity tab: clinical alerts, active plan and a timeline filterable by visits, treatments, financial activity and communications](/screenshots/patient-timeline.png)

*A patient's timeline: every visit, treatment and payment carries its date and the user who recorded it.*

Here is the honest half, and it is the one most vendors leave out. **Footage is not in your practice management software and the clinical audit trail does not cover it.** It is data about who was in the building and when, it lives on a recorder or in the installer's cloud, and the traceability any dental system offers stops at the surgery door.

Three things do depend on the software:

- **A real audit trail on the record**, so nobody is tempted to use a camera to work out who opened a file. That question is answered in the software, not in the video.
- **Permissions that exist and are used**, because the alternative to watching the team on camera is not giving them access they do not need.
- **The screen not being the leak.** Idle session lock, and no workstation left open with a patient list facing a camera or the waiting area.

In Dentalpin every access to the record is logged with its author and timestamp, permissions are set by role, and sessions lock themselves, which removes much of the reason practices end up pointing a camera at the front desk. The code is open, so that is audited rather than taken on trust, and the [price is published](/en/pricing/). The camera system still has to be declared separately, because that is what it is.

## Sources

- Information Commissioner's Office, "Guidance on video surveillance (including CCTV)", section "How can we comply with the data protection principles when using surveillance systems?": [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/how-can-we-comply-with-the-data-protection-principles-when-using-surveillance-systems/). Consulted 6 October 2026.
- Information Commissioner's Office, "Employment practices and data protection: monitoring workers", section on specific methods of monitoring: [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/specific-data-protection-considerations-for-different-ways-or-methods-of-monitoring-workers/). Consulted 6 October 2026.
- Regulation (EU) 2016/679 (GDPR), articles 5(1)(c), 6(1)(f), 9, 13, 30 and 35: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 6 October 2026.
