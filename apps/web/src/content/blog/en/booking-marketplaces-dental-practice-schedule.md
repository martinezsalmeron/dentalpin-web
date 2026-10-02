---
title: "Booking marketplaces and your schedule: what really syncs, and who owns the data"
description: "Before you connect a booking marketplace to your schedule: is the sync two-way, what happens to a slot booked by phone, and who controls which data."
pubDate: 2026-10-02
translationKey: portales-cita-online-agenda-dental
tags: [scheduling, online-booking, gdpr, practice-management]
---

Before you connect a booking marketplace to your schedule, four things need settling, and none of them is in the demo: whether the sync runs both ways or only one, what happens to the slot your front desk gave away by phone thirty seconds ago, which fields of the patient record actually cross, and who is the controller of what. Doctoralia publishes that its API is bidirectional. Its own privacy policy splits the roles three ways, and one of those three is not the one most practices assume.

Those four answers decide whether the marketplace is an extra front desk or a second schedule you now keep by hand.

> **This is not about opening your own schedule on your own website.** That is a different decision and it has its own post, [online appointment booking](/en/blog/online-dental-appointment-booking/). Here the patient books on somebody else's platform, which is also where your first contact with them, and often the review, lives.

## The brand changes by market, the four questions do not

There is no single marketplace for English-speaking practices the way Doctoralia covers Spain or Doctolib covers France and Germany. The worked example below is Doctoralia, for one reason: of the platforms consulted it is the one that publishes the mechanics in enough detail to quote.

Run the same four questions against whichever platform your market uses. If it will not answer them in writing, that is the answer.

## Two-way sync, in the platform's own words

Doctoralia describes the mechanism on its integrations page, which is published in Spanish. Translated, it says that through a robust and secure bidirectional API it facilitates a constant flow of data. It then names both directions: appointments booked on the marketplace appear immediately in the integrated software, and any change made in the local calendar is reflected instantly on the marketplace.

That is a technical description, not a contractual commitment. Read it as what it is: the platform states that it writes to your schedule and reads from it, without publishing a latency figure, a retry window, or what happens when the connection drops mid-morning.

The same page publishes the list of integrated practice management systems. If yours is not on it, there is no official API, and what you will be sold is a second calendar.

> **Check who owns the partners before you read the list as a ranking.** The footer of Doctoralia's own site groups Clinic Cloud, TuoTempo and Noa under "other products". Those are products of the same group, Docplanner, not third parties that passed a certification.

## The thirty-second gap

The case that breaks an integration is not the ordinary booking, it is the simultaneous one. Your front desk gives a slot away by phone at 10:14:30 and somebody books it on the marketplace at 10:14:45, while the published availability has not caught up.

Neither side publishes what happens then. So the question is not answered by reading. It is answered by asking for it in writing before you sign, and by testing it in a two-week pilot.

> **Test this yourself, with a real slot and a stopwatch.** Block a slot in your schedule and time how long it takes to disappear from the marketplace. Then do it the other way round. Whatever number you get is your double-booking risk, and it is the one figure in this decision nobody will put in a contract.

![Weekly schedule view with each clinician's appointments in their own column](/screenshots/schedule-week.png)

*The schedule in week view, one column per clinician.*

## Who controls what, in three roles rather than one

This is the part almost nobody reads, and Doctoralia's privacy policy sets it out more precisely than most of the sector. The same supplier holds three different positions at once.

| Which data | The platform's role | What it means for the practice |
|---|---|---|
| Your commercial relationship: contract, billing, complaints | Independent controller | ✗ Not your decision, and not negotiable in the contract |
| Technical infrastructure and product architecture | ~ Joint controller with other group companies | There is an internal allocation agreement you do not sign |
| Your patients' data processed on their platform | ✓ Processor | You need a processor contract and you give the instructions |
| Reviews on your Google Business Profile | Google, as independent controller | ✗ Managed by neither the platform nor you |

The third row is the one that matters to you, and the policy is literal about it: when you use their professionals platform to process the personal data of your own clients, patients or employees, you act as controller and they act as processor.

That sentence is good news and an obligation in the same breath. Your patients' data stays yours, and Article 28 of the GDPR requires a signed processor contract with a defined minimum content. We cover it in [the data processing agreement](/en/blog/data-processing-agreement-dental-software/).

The first row is the surprise. For its own commercial relationship with you, the platform decides alone, and says so: it decides independently how to process that personal data and is solely responsible for those activities.

## Your profile and your reviews do not behave like your patient records

Two things the same policy publishes, and they change how you plan an exit.

The first is that a professional profile can exist without you being a customer. Its definition of "professionals" includes those with public profiles on its website regardless of whether they have a commercial relationship with the company. Cancelling the service and disappearing from the platform are not the same operation.

The second is the retention period and what follows it. The policy sets profile retention at the lifetime of the account plus six years, and describes withdrawing a public profile as removing it from the public domain rather than deleting it: it is kept internally.

> **Reviews can come back.** The policy says it plainly: if they withdraw your profile they stop showing the reviews, but if you later create a new professional profile on their website, they may publish those reviews again on the new profile. A review from 2021 can resurface on a profile created in 2027.

On Google, the policy is explicit that the platform is not your intermediary: reviews on your Google Business Profile are managed by Google as controller and not by them. It adds that Google may transfer the data to third countries.

![Patient record with the personal details tab and the contact fields](/screenshots/patients.png)

*The patient details tab, holding the fields an integration might write to.*

## What to agree in writing before you connect anything

1. **Ask for the direction of every field**, one by one: what the platform writes into your record and what it reads from it. "Bidirectional" describes the schedule, not necessarily the chart.
2. **Settle what happens on a collision** and who resolves it, as a procedure rather than a good intention.
3. **Sign the processor contract** before the integration goes live, not after the first patient.
4. **Ask for the list of sub-processors** and record the date you were given it. Doctoralia publishes its own, so this is not an odd request.
5. **Decide which fields never cross**: allergies, clinical notes, outstanding balances. A booking platform does not need the odontogram.
6. **Agree the exit before the entry**: how you export the appointment history, what happens to the profile, and what happens to the reviews.
7. **Pilot with one clinician** and one part of the week, with the paper schedule nearby, for two weeks.
8. **Record the integration in your processing register**, because it is a new data flow and it has to be documented.

Step six is the one nobody does and the one that costs most later. Asking about the exit while they are selling you the entry is the only moment you will get an answer in writing.

## What your own software has to be able to do

An integration is only as good as the schedule behind it. This is what decides whether the marketplace helps you or doubles your work.

- **An API of your own** over your schedule and your patients, so the integration does not depend on the platform adding you to its list.
- **Real availability blocks**, per clinician and per chair, for the platform to read instead of guess.
- **A recorded source for every appointment**, so you know how many came from the platform and how many from the phone before you renew the fee.
- **Contact fields kept separate from clinical ones**, so an integration can never read or write what it has no business touching.
- **An access log** with user, timestamp and operation, including the accesses made by an integration. We cover it in [audit trails on the clinical record](/en/blog/audit-trail-dental-records/).
- **A full export of the appointment history**, because the day you change platform that history is all you keep.

In Dentalpin the schedule has its own API, every appointment records where it came from, and contact fields sit separately from clinical ones, so you can connect whichever platform you like without waiting to be certified. The code is published and so is the [pricing](/en/pricing/).

This is not legal advice. The instrument that governs the relationship depends on where you practise, a processor contract under the GDPR or a business associate agreement under HIPAA, and it is worth reviewing with your own adviser before you switch an integration on.

## Sources

- Doctoralia, "Integraciones Agenda online", `pro.doctoralia.es/integraciones`: bidirectional API, the list of integrated partners and the integration seal. Consulted 2 October 2026. <https://pro.doctoralia.es/integraciones>
- Doctoralia Internet S.L., privacy policy for the professionals platform, sections 1.1 (independent controller), 1.2 (joint controllers), 2 (processor), the Google Business Profile section and the retention table. Consulted 2 October 2026. <https://www.doctoralia.es/privacidad>
- Regulation (EU) 2016/679, Article 28, on the processor and the minimum content of the processor contract. Consulted 2 October 2026.
