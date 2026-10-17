---
title: "Dentist CPD requirements: hours, cycles and who actually checks"
description: "A UK dentist needs 100 verifiable CPD hours every five years, at least 10 in any two-year period, plus an annual statement. What the GDC requires and what a practice should log."
pubDate: 2026-10-17
translationKey: formacion-continuada-obligatoria-dentista
tags: [cpd, gdc, compliance, practice-management, registration]
---

A dentist registered with the General Dental Council needs a minimum of 100 hours of verifiable CPD in each five-year cycle, with at least 10 verifiable hours in any consecutive two-year period. On top of the hours there is a separate duty that catches more people out: a CPD statement at every annual renewal, even in a year where you did no CPD at all. Miss either and the GDC's Registrar may remove you from the register, which means you cannot practise dentistry in the UK.

Note the word "verifiable". It is doing most of the work in that sentence, and it is the reason a reading week that felt productive may count for nothing.

## The two numbers, and why the second one exists

The headline figure is the 100 hours. The one that changes how you plan is the 10 hours in any two-year period.

That second rule exists to stop the predictable pattern: four quiet years, then a panic. The GDC applies it across the boundary too, so it holds when one cycle ends and the next begins. A dentist who finishes a cycle on a sprint and then does nothing for eighteen months can breach the two-year minimum while technically starting their new cycle with hours in hand.

> **The two-year rule is checked on a rolling basis, not at the end.** Any consecutive two-year window has to contain 10 verifiable hours. There is no version of that requirement you can satisfy retrospectively by overshooting later.

## The hours depend on your title, and on all of them

The whole registered team is covered, with different figures, and the GDC sets them by title.

| Title | Verifiable hours per five-year cycle |
|---|---|
| Dentist | 100 |
| Dental therapist, dental hygienist, orthodontic therapist, clinical dental technician | 75 |
| Dental nurse, dental technician | 50 |
| Temporary registrant dentist | 20 |

- **Two titles means the higher number, not the sum.** A registrant holding more than one title meets the higher requirement. Someone registered as both a hygienist and a dental nurse is on 75, not 125.
- **The practice has every figure on its register.** A six-person practice usually spans three of those rows, which is why one shared spreadsheet beats everyone tracking their own.
- **The hours are individual, and so are the cycles.** They run from each person's own cycle start, so nothing lines up neatly in a team.

![Weekly view of the practice schedule with one column per clinician](/screenshots/schedule-week.png)

*The schedule in week view. A course day that is not blocked here gets filled with patients.*

## The annual statement is a separate duty

This is the part that removes people from the register, and it has nothing to do with how much CPD you did.

A CPD statement forms part of annual renewal. The GDC is explicit that it applies even if you have not completed any CPD during that year, so "nothing to declare" is not a reason to skip it. It is a declaration, not an upload of certificates.

In practice that makes two dates per registrant, not one: the renewal date each year and the end of the five-year cycle. The first is the one that comes round often enough to be forgotten.

## What happens if you fall short

The GDC's own page sets out the sequence, and it is worth reading it as a sequence rather than as a single threat.

1. **A shortfall is identified**, either in the hours or in a missing annual statement.
2. **You get a further opportunity to show compliance** before any removal decision is taken.
3. **The Registrar may remove you from the register.** The consequence the GDC states plainly is that you will not be able to practise dentistry in the UK.
4. **You have a right of appeal** against the decision.

> **Removal is administrative, not a fitness-to-practise finding.** That is cold comfort on the day, because the effect on the diary is the same: a clinician who cannot see patients, and a list of appointments nobody can cover.

This is not legal advice. It is what the sources listed at the end say, consulted on 17 October 2026.

## Verifiable, and what that rules out

The GDC's scheme counts verifiable CPD. The practical test is whether the activity can be evidenced afterwards, which means documentation from the provider rather than your own recollection.

Keep the evidence attached to the entry, not in a drawer. Six years later the person who needs the certificate is usually the clinician themselves, on their way to a new practice, and the practice that cannot produce it looks careless about everything else too.

The GDC also publishes a separate list of recommended CPD topics. Recommended is the operative word there: it is guidance on what to spend the hours on, not an additional set of minimums, and the figures that circulate for individual topics are worth checking against the GDC's own page rather than a course provider's.

## A practice-level register, in four columns

For a single-handed dentist this is one tab in a spreadsheet. For a practice with associates, hygienists and nurses it is the only way anyone knows where they stand.

1. **Who, and every title they hold.** The title sets the figure, and more than one title means the higher one.
2. **Cycle start and renewal date.** Two dates per person, both individual. This is the column that makes the rest work.
3. **Each activity, with hours and provider.** Date, hours, what it covered, and whether the evidence is attached.
4. **Running total against their figure, and the two-year window.** Not just the headline total: a total of 60 hours tells you nothing about whether the last two years contain 10.

![Home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*The screen the team opens each morning. A renewal date that appears nowhere like this is a date that gets missed.*

## One register for the practice, or several for the individuals

Both work, and the GDC does not care which you choose: the obligation sits on each registrant, and the eGDC account is where the authoritative position lives.

What changes with size is whether anyone notices in time. With one dentist, the renewal email is enough. With eight registrants on three different hour requirements and eight different renewal dates, a shared register that someone owns is the difference between a reminder and a removal.

It is worth being clear about what software does here and what it does not. [Dentalpin](/en/pricing/) has no per-clinician CPD record today, so the hours stay in your spreadsheet and in eGDC. What it does solve is the date: a course day blocks out in that clinician's schedule like any other appointment, and a renewal or cycle-end date goes in where the team sees it each morning. It is open source, can be self-hosted, and has a public API, so a practice that keeps its CPD register in its own tool can connect the two.

## Sources

- General Dental Council, Enhanced CPD: hours by title, the 10 hours in any two-year period, the annual CPD statement, and removal from the register by the Registrar: [gdc-uk.org](https://gdc-uk.org/professionals/cpd/enhanced-cpd) (consulted 17 October 2026)
