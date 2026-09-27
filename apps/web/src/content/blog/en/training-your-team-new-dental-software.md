---
title: "Training your team on new dental software: a two-week plan"
description: "How to train a dental team when the practice switches software: what each role handles on day one, what waits until week two, and why one group session fails."
pubDate: 2026-09-27
translationKey: formacion-equipo-software-dental
tags: [training, practice-management, dental-software, team]
---

Train by role, on your own practice data, and spread it over two weeks instead of one long afternoon. On day one each person needs exactly one screen they can handle unaided: the front desk needs the schedule, clinical staff need the chart. Billing, reports and anything that does not leave a patient standing at the desk can wait until week two.

The single three-hour session for the whole team is what most practices do, and it fails for a reason that has nothing to do with the software.

## Why one session for the whole team does not work

- **Each role uses a different part of the program.** The front desk will never open the odontogram and the dentist will never run the end-of-day reconciliation. In a joint session everyone spends two thirds of the time watching screens they will not touch.
- **Nobody retains what they will not use that same week.** Anything explained on Tuesday and first used three weeks later has to be explained again.
- **Almost nobody asks a question in front of the whole team.** The questions that matter are the ones people will not raise in a group, and they surface in the first week of real use.
- **It is done on demo data.** The demo treatment list is not yours, and half of the real questions start exactly there.

## What each role must handle on day one

The test is simple: that person has to do it without calling anyone, with a patient in front of them.

| Role | Must do unaided on day one | Can it wait until week two? |
|---|---|---|
| Front desk | Find a patient, book and move an appointment, take a payment | ✗ No |
| Hygienist | Open the chart, record the visit, see medical alerts | ✗ No |
| Dentist | Odontogram, treatment plan, quote | ✗ No |
| Practice owner | Invoicing, reports, user permissions | ✓ Yes |
| Practice manager | End-of-day reconciliation, the export your accountant asks for | ✓ Yes |

![Day view of the schedule with each chair's appointments, patient status and the open slots](/screenshots/schedule-day.png)

*The first screen the front desk has to run on its own: the whole day, chair by chair.*

## The two-week plan

1. **Week zero, before anyone is trained.** Create the real user accounts, one per person, with their permissions set. Training on a shared login teaches a habit that is hard to undo later.
2. **Day one, front desk, 45 minutes.** Schedule and payments only, using real patients from next week. End the session by having each person run the whole loop once, alone.
3. **Day one, clinical team, 45 minutes.** Open a chart, record a visit, read the alerts. No reports and no quotes yet.
4. **Days two to five, floor support.** Someone who already knows the software is in the practice, not on a phone line. This is the part that gets cut first and the part that decides the outcome.
5. **End of week one, friction list.** Write down what was awkward, unfiltered. That list is both the agenda for week two and what you take back to the vendor.
6. **Week two, money and reporting.** Invoicing, outstanding quotes, daily reconciliation and the handful of reports you actually read each month.
7. **End of week two, a short review per role.** Twenty minutes per group against the friction list, not a second full training day.

> **Do not migrate the data and train the team in the same week.** When something looks wrong you will not know whether it is an import error or someone who has not found the right screen yet, and you end up debugging both at once. Leave at least a week between a verified migration and the first day of real use.

## Before day one: what has to be ready

- **Accounts created and permissions set**, one per person. Who sees what is an owner's decision, not something improvised during training.
- **The treatment list reviewed row by row**, with your names and your fees. With a half-finished list, every quote in week one becomes a question.
- **The old system still readable.** It is the safety net for both weeks: when a number looks off, you compare in a minute instead of arguing about it.
- **One named person to answer questions**, with hours. Without that, questions pile up in a group chat and nobody answers them.
- **A lighter schedule on the first day.** Going live on a fully booked day is the fastest way to send the team back to paper.

![Patient chart with the odontogram, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*The clinical equivalent: if this is not second nature, the visit gets written up later, and sometimes not at all.*

## Signs the training did not land

They show up in week two or three, and all of them are fixable if you catch them.

- **Everything routes through one person.** If nobody invoices unless a particular person is in, you trained that person, not the team.
- **There is still a notebook at the front desk.** Writing the appointment on paper and entering it later means the schedule is not trusted yet.
- **Some accounts have never been used.** That almost always means two people are sharing one open session.
- **Notes are written at the end of the day, not at the chair.** Anything recorded from memory three hours later loses exactly what needed recording.

> **Training is not finished when the questions stop.** Sometimes they stop because people found a way around the step they did not understand. Ask directly: in week three, have each role run their loop once while you watch.

## What to ask the vendor about training

Negotiate this before signing, because afterwards it has a price.

- **Is training on our data or on a demo?** It is the difference you feel most in week one.
- **Is it split by role or one joint session?** If it is joint, ask for two and make each one shorter.
- **How many sessions are in the contract, and what does the next one cost?** A second round is nearly always needed, usually when someone new joins.
- **Is anything left in writing or recorded?** What is not documented gets paid for again with the next hire.
- **Who answers during the first week, and at what hours?** A line that opens at ten does not help a practice that opens at eight.

If you are still choosing, the rest of that list is in [what to ask your vendor before signing](/en/blog/questions-before-signing-dental-software/), and role permissions are covered in [who can see what](/en/blog/staff-access-permissions-dental/).

With Dentalpin this is easier for one concrete reason, and it is not the training material: because it runs on your own server, you can stand up a second practice instance with a copy of your data and let the team practise there, resetting and repeating, before anyone touches the live one. [Installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/) and [there is no licence cost](/en/pricing/), so a second instance adds no licence fee, only the machine you run it on, which can be the same one.

Have a training plan that worked better than this one? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fold it in.
