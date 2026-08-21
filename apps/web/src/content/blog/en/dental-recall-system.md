---
title: "Dental recall: how to bring patients back for their check-up"
description: "How to build a recall system that works: who sets the interval, where the due list comes from, what the message should say and the numbers that measure it."
pubDate: 2026-08-21
translationKey: recall-dental-revisiones
tags: [recall, check-ups, schedule, patient-retention]
---

A recall system is two things: a next-review date stored on every patient's clinical record, and a weekly routine that pulls the list of who is overdue and contacts them. That date is not six months by default. It is set at the end of each visit, based on that person's risk, and recorded along with whether they agreed to it. Everything after that is logistics: a channel people actually read, enough notice to rearrange a day, and one follow-up for anyone who does not reply.

What usually breaks is not the wording of the message. It is that the date was never entered, so there is no list to pull and the practice ends up combing through records by hand whenever someone remembers.

## Six months is a habit, not a rule

The recall interval is a clinical decision made per patient, not a constant applied to the whole database. NICE guideline CG19, the most explicit published reference on this, says so in its first recommendation: the interval should be determined specifically for each patient and tailored to their needs, based on an assessment of disease levels and risk of or from dental disease.

Three more practical rules come from the same guideline. The interval is chosen at the end of a review or after treatment is completed, not once the patient has left. It is discussed with the patient and recorded, along with their agreement or disagreement. And it is looked at again at each subsequent visit and adjusted according to how things went.

| | Under 18 | 18 and over |
|---|---|---|
| Shortest interval | 3 months | 3 months |
| Longest interval | 12 months | 24 months |
| Intervals assigned | 3, 6, 9 or 12 months | 3, 6, 9, 12, 15, 18, 21 or 24 months |
| When it is decided | At the end of the review or treatment | At the end of the review or treatment |
| Where it is recorded | Clinical record, with the patient's agreement | Clinical record, with the patient's agreement |

CG19 is guidance for the UK, so outside it the figures are a reference rather than an obligation. The structure carries over everywhere: the interval gets decided, justified, recorded and revisited.

> **For adults, the evidence does not separate six-monthly check-ups from risk-based ones.** A 2020 Cochrane review covering two trials and 1,736 participants found little to no difference in the number of tooth surfaces with caries, gingival bleeding or oral-health-related quality of life over four years, either between risk-based and six-month intervals (high-certainty evidence) or when comparing 24 months with either of them. For children and adolescents, the review says the evidence is uncertain.

That is not permission to stop contacting anyone. It is the argument for making the interval a field with reasoning behind it rather than a constant. If the software only knows how to add six months, it is making by default the decision the guideline asks you to make patient by patient.

## The list comes from the record, not from a spreadsheet

A recall that lives in a spreadsheet goes out of sync within a month. Someone books over the phone, nobody crosses them off, and the next reminder goes out anyway. The list has to be a query over data that already sits in the clinical record.

| Field | What it is for | If it is missing |
|---|---|---|
| Next review date | This is what generates the weekly list | ✗ There is no list: records get checked by hand |
| Assigned interval and who set it | Tells you whether a nine-month gap is clinical judgement or an oversight | ~ Nobody dares change it |
| Reason for the review | Lets you write something specific instead of a generic nudge | ~ The message says "check-up" and lands flat |
| Preferred channel | Reaching people where they actually reply | ✗ You keep using a channel they asked you not to |
| Date of last recall contact | Not writing three times in one month | ✗ Reminders duplicate and people opt out |
| Patient status | Removing anyone the list should not include | ✗ You write to patients who have left or died |
| Unfinished treatment | Separates "a check-up is due" from "something was left half done" | ~ Two different conversations get merged |

- **Enter the date before the patient leaves the operatory.** It is the only moment anyone genuinely knows when that person should come back, and it is what the guideline explicitly recommends.
- **Store the interval, not just the resulting date.** When a patient reschedules, the date moves; the twelve-month reasoning has to survive that change.
- **Keep "next review" separate from "next appointment".** Someone can have an appointment next week to finish a root canal and a review due in fourteen months. If it is one field, one of the two is lost.

![Patient record with the activity tab open: clinical alerts, active treatment plan, next appointment and a chronological history of visits, treatments and communications](/screenshots/patient-timeline.png)

*A patient's activity in order, filterable by visits, treatments and communications: when they last came in and what has been sent to them since.*

## Overdue, and by how much: that is three lists, not one

Putting someone a week past their date and someone who has not been seen in three years into the same batch produces a message that suits neither. The usual split is three groups and three different messages.

1. **Coming due.** Due in two to four weeks. The message is a friendly heads-up with a way to book, and this group responds best of the three because nobody has drifted yet.
2. **Recently overdue.** Past their date by less than one full interval. Here the message names the last visit, because a concrete date works better than a vague formula.
3. **Lapsed.** More than two intervals without appearing. Check the contact details and whether they are still a patient of the practice before writing. Winning them back is a different job from recall and deserves its own campaign.

The first two groups are recall proper and fit inside the weekly routine. The third is an occasional campaign, once or twice a year, done deliberately and without rushing.

> **An overdue patient is not a defector.** The most common reason someone is past their date is that nobody told them, and the tone of the message should assume that until proven otherwise.

## The message: channel, timing and content

There is evidence on the channel, though it needs reading carefully. A 2013 Cochrane review of eight randomised trials and 6,615 participants compared text message reminders with sending nothing and with phone calls.

Text messages improved attendance compared with no reminder, at a risk ratio of 1.14 (95% CI 1.03 to 1.26). Against phone calls they came out level, at a risk ratio of 0.99 (0.95 to 1.02). Attendance was 67.8% with no reminder, 78.6% with a text message and 80.3% with a phone call, and the messages cost 55% to 65% less than the calls. The review itself rates the evidence low to moderate quality.

> **This is evidence about reminding someone of a booked appointment, not about inviting them to make one.** Those are different situations and the second is harder. What does carry over is the comparison between channels: written messages performed like calls at a fraction of the cost, and that settles where to start.

With that in mind, what the message needs to carry:

- **The practice name in the first line.** A message that does not identify itself at a glance gets deleted before it is read.
- **When they were last seen and what is due now.** "Your last check-up was in March 2025" is far more concrete than "it has been a while".
- **How long it will take.** The unspoken objection to a check-up is time, and "about twenty minutes" defuses it.
- **A one-step way to reply.** Replying to the message itself, a link, or a number someone actually answers. If booking requires a phone call during working hours, half the group drops out there.
- **A clear way out.** How to stop the messages or switch channel. Losing a contact is cheaper than earning a complaint.

## The weekly routine

Recall works because it happens every week, not because the message is clever. Half an hour in the diary, with one named person responsible.

1. **Pull the due and overdue list**, filtered by next review date.
2. **Drop anyone who already has an appointment** booked, which is the filter that prevents the single most irritating reminder there is.
3. **Check for deceased patients and changed contact details** since the last batch.
4. **Split into the two groups** above and use the wording that belongs to each.
5. **Send by each patient's preferred channel**, not by whatever is convenient that morning.
6. **Record the contact date on the record**, so the same person does not come up again next week.
7. **Review the previous batch**: who booked, who did not reply, and who asked to be left alone.

Anyone who does not reply gets one more message, ten to fourteen days later, and that is where it stops. A third attempt in the same cycle wins few appointments and loses contacts.

## Four numbers tell you whether it works

| Metric | How it is calculated | What it decides |
|---|---|---|
| List coverage | Active patients with a next review date, over all active patients | If it is low, the problem is not the message: dates are not being set at the end of visits |
| Response rate | Appointments booked over reminders sent, per batch | Compares channels and wording, and a bad batch shows up within a week |
| Overdue backlog | How many are past their date and still have no appointment | If it grows month on month, the weekly routine is not happening |
| Interval adherence | How many attend within the interval they were assigned | Separates a system that sends messages from one that gets people through the door |

Coverage is the one to look at first and the one almost nobody looks at. A practice where 40% of active patients have no next review date does not have a recall problem, it has half a database that is invisible to any reminder it sends.

![Schedule report screen showing total appointments for the period, completion rate, no-show rate, first visits, hours worked per clinician and chair utilisation](/screenshots/reports.png)

*Completion and no-show rates for the period alongside chair utilisation: the figures you need to work out whether a batch of reminders achieved anything.*

## Where to start

1. **Measure coverage today** by counting how many active patients have a next review date. That number is your baseline.
2. **Add the step at the end of the visit**: before the patient stands up, the interval is decided, recorded and discussed with them.
3. **Pull the first overdue list** and remove anyone who already has an appointment.
4. **Write two templates**, one for coming due and one for recently overdue, carrying the five elements above.
5. **Block half an hour a week** in one specific person's calendar.
6. **Log reminders sent and appointments booked** per batch for two months.
7. **Change one thing at a time**, the wording or the channel, so you know which of the two moved the number.

DentalPin includes recalls alongside the schedule, the clinical record and the reports, with communications stored on the patient's record, which is what you need in order to know who was contacted and when. What each version includes is on [pricing](/en/pricing/).

This is not clinical advice: a patient's recall interval is always decided by the clinician treating them.

## Sources

- National Institute for Health and Care Excellence. *Dental checks: intervals between oral health reviews* (CG19), recommendations 1 to 8. [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/n/nicecg19/ch5/). Accessed 21 August 2026.
- Fee PA, Riley P, Worthington HV, Clarkson JE, Boyers D, Beirne PV. *Recall intervals for oral health in primary care patients*. Cochrane Database of Systematic Reviews, 14 October 2020, DOI 10.1002/14651858.CD004346.pub5. [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256238/). Accessed 21 August 2026.
- Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J. *Mobile phone messaging reminders for attendance at healthcare appointments*. Cochrane Database of Systematic Reviews, 5 December 2013, DOI 10.1002/14651858.CD007458.pub3. [cochrane.org](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments). Accessed 21 August 2026.
