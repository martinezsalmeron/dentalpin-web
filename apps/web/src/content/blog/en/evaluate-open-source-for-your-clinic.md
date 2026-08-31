---
title: "How to evaluate an open source project before trusting your practice to it"
description: "Five public checks that tell you whether an open source project will still be there in ten years: maintenance, people, security handling, licence and exit."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, evaluation, security, licensing, contracts]
---

Check five things, in this order: whether the project is maintained, how many people actually maintain it, what happens the day someone finds a security flaw, what the licence actually says, and how you get out. All five are visible from public pages in an afternoon, and four of them have a published standard behind them, so you are not the one setting the bar.

The code being public is not the answer. It is what lets you ask the questions, and almost nobody asks them.

> **The common mistake is evaluating the product instead of the project.** Every demo looks fine. What decides whether you still have working software over your clinical records in six years is who maintains it, at what rhythm, and what they do when a flaw turns up.

## The five checks, and where to look

None of these needs a sales call. All of them come from the project's public repository and from two free services that score what they find there.

| Check | What you want to see | Warning sign |
|---|---|---|
| Maintenance | ✓ Recent, regular commits and releases | ✗ Months of silence and a two-year-old release |
| People | ✓ Several people able to ship | ✗ One person authors nearly everything |
| Security | ✓ A `SECURITY.md` with a contact | ✗ Nowhere to report a flaw |
| Licence | ✓ The name appears on the OSI list | ✗ "Our own licence", with no published text |
| Exit | ✓ Documented export, standard database | ✗ Proprietary, undocumented format |

## 1. "Maintained" has a definition, and it is not yours

The OpenSSF publishes Scorecard, a tool that analyses a repository and scores each aspect from 0 to 10. Its *Maintained* check is the most useful of the nineteen, because it turns a gut feeling into a threshold.

For the top score it asks for **at least one commit per week during the previous 90 days**, and it only assesses projects more than 90 days old. That is the bar, and it is published.

With that alone you can open any repository and see which side of it the project falls on:

- **The date of the last commit** tells you whether anyone touched the code this month or last year.
- **The release rhythm** matters more than the release count. Twelve releases in one year and nothing for the last fourteen months is a stalled project, not a stable one.
- **Open issues with no reply** are the most honest signal of the lot. A healthy project does not have zero issues, it has answered issues.

## 2. How many people actually hold it up

A project with a thousand stars and a single author is a one-person project. The CHAOSS community, part of the Linux Foundation, has a metric for exactly this.

It is called the *Contributor Absence Factor*, previously known as the Bus Factor, and it answers a blunt question: "How high is the risk to a project should the most active people leave?" It is calculated as the smallest number of contributors responsible for 50% of total contributions.

If that number is one, the answer is that the risk is yours.

> **An absence factor of one does not disqualify a project, but it changes the contract you need.** If you are going to run it in your practice, you want either a company behind it that answers the phone, or an IT provider who has already read that code.

![Patient record showing clinical alerts, the active treatment plan and a timeline filterable by visits, treatments, payments and communications](/screenshots/patient-timeline.png)

*Years of clinical records inside one piece of software. This is what depends on the project still being alive in six years.*

## 3. What happens the day someone finds a flaw

This is the check most people skip and the fastest one to run. Look in the repository for a `SECURITY.md` file: that is what Scorecard's *Security-Policy* check looks for, and its absence means whoever finds a flaw has nowhere to report it.

The OpenSSF Best Practices Badge puts numbers on what comes next. Among its passing-level criteria: "The project's initial response time for any vulnerability report received in the last 6 months MUST be less than or equal to 14 days." It also requires that release notes identify every publicly known run-time vulnerability fixed in that release that already had a CVE assignment.

A project that publishes the badge has committed to those things in writing. One that does not may well be doing them anyway, but you will have to verify it yourself in the release history.

> **This stopped being good practice and became European law.** Regulation (EU) 2024/2847, the Cyber Resilience Act, entered into force on 10 December 2024. The obligations to report actively exploited vulnerabilities apply **as of 11 September 2026**, and the bulk of the Regulation from 11 December 2027.

That Regulation does not bind you as a practice. It binds whoever manufactures or supplies the product. But it creates a category worth knowing about, the *open-source software steward*, and its Article 24 requires one to keep a single point of contact for vulnerability reports and a coordinated vulnerability disclosure policy.

Translated into your evaluation: from September 2026, a serious European project has an address where flaws get reported, because the law requires it. If it has none, that tells you something. This is not legal advice.

## 4. The licence, in two minutes

The Open Source Initiative maintains the reference definition, with ten numbered criteria, and publishes the list of approved licences at `opensource.org/licenses`.

The check is literal: look for the exact licence name on that list. GPL, AGPL, Apache 2.0 and MIT are on it. Source-available licences are not, which does not make them bad, it makes them a different category.

What a licence decides and what it does not is a whole article of its own, and you have it in [open source or proprietary in healthcare](/en/blog/open-source-vs-proprietary-healthcare/). For this evaluation one rule is enough: if the project does not publish its licence text, you have not finished looking, you have finished evaluating it.

## 5. How you get out

An open source project you cannot leave has the same problem as a proprietary one, with more steps.

1. **Find the export documentation** before you install anything. If it exists, it will be in the repository, not in an email from sales.
2. **Check the database engine.** PostgreSQL or MySQL mean any competent IT provider can read your data without asking anyone's permission.
3. **Take a copy on day one**, not on the day you want to leave. An export you have never tested is not an export.
4. **Read what the copy takes and what it leaves.** X-rays and attached documents usually live outside the database, and they are usually what turns out to be missing.

Which format to insist on is covered in [exporting your data](/en/blog/export-dental-software-data/).

## Scoring it without being a developer

The two tools above are public and free, and both can be run against somebody else's project:

- **OpenSSF Scorecard** analyses the repository and returns nineteen checks scored 0 to 10, among them *Maintained*, *Security-Policy*, *Code-Review*, *License* and *Vulnerabilities*, which cross-references the code against the OSV database of known vulnerabilities.
- **The OpenSSF Best Practices Badge** is a public self-assessment by the project itself, organised in six blocks: basics, change control, reporting, quality, security and analysis.

Both measure process, which is exactly what a demo cannot show you. Neither measures whether the software suits a dental practice, and confusing the two leads to installing an exemplary project with no odontogram in it.

## Two weeks on real data, before you decide

No metric replaces this, and it is the cheapest item on the list.

1. **Install it somewhere that is not production.** An old laptop or a five-euro server is enough to find out whether the project installs the way its documentation says it does.
2. **Enter twenty real patients**, with their treatments and their quotes. Twenty real records teach you more than two hundred invented ones.
3. **Run one full day in parallel.** Appointment, visit, clinical note, treatment plan, payment. If something in that circuit is missing, it shows up here.
4. **Open an issue with a genuine question** and count the days to a reply. It is the only way to test point 3 without waiting for a real incident.
5. **Export everything, then delete it.** If the exit works with twenty patients, it works with two thousand.

![Home screen with today's appointments, who is in the practice, overdue payments and the day's timeline](/screenshots/home.png)

*The screen the team works in every morning. Two weeks of real use tells you things about it that no score will.*

## What none of these metrics tell you

It is worth knowing where this method stops.

- **Whether the project fits how you work.** Only the two-week trial answers that.
- **Whether the code is secure.** Public code is auditable, not audited. Those are different things, and only the second one protects anybody.
- **Who answers under the GDPR.** That is still you, whatever software you run.
- **Whether someone picks up the phone on a Friday afternoon.** A support contract decides that, and those exist for free and proprietary software alike.

Dentalpin is one of the projects you can put through this list: the code is public, the licence is BSL 1.1, which is not on the OSI list and is worth saying plainly, the database is PostgreSQL and the [pricing](/en/pricing/) is published. Run the five checks on it before installing, the same as on anything else.

## Sources

- OpenSSF Scorecard, repository and check documentation, `github.com/ossf/scorecard` and `docs/checks.md` (consulted 31 August 2026).
- OpenSSF Best Practices Badge, passing-level criteria, `bestpractices.dev/en/criteria/0` (consulted 31 August 2026).
- CHAOSS, *Contributor Absence Factor* metric, `chaoss.community` (consulted 31 August 2026).
- Open Source Initiative, *The Open Source Definition* and the approved licence list, `opensource.org/osd` and `opensource.org/licenses` (consulted 31 August 2026).
- Regulation (EU) 2024/2847 (Cyber Resilience Act), text on EUR-Lex and the European Commission's official page on its application, `digital-strategy.ec.europa.eu` (consulted 31 August 2026).
