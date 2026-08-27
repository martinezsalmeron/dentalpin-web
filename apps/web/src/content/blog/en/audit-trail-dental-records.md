---
title: "Audit trails for dental records: what to log and how to review it"
description: "Which fields an access log on a dental record has to capture, how long to keep it, and a monthly review routine that takes twenty minutes."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [clinical-records, security, hipaa, gdpr, audit]
---

An audit trail on a patient record has to capture five things every time somebody opens a chart: who opened it, when, which patient, what they did and where from. Keep it for six months to a year, protect it so nobody can edit their own lines, and actually look at it on a schedule, because a log nobody reads detects nothing. That is the whole build, and the rest of this article explains why each piece is there.

This is not legal advice. Every official source is listed at the end, consulted on 27 August 2026.

## A permission says who may enter, a log says who did

These are two different things, and a practice that has one usually believes it has both. A permission is a decision made in advance: reception does not open clinical records. A log is a fact recorded afterwards: on Tuesday at 12:40, this named person opened this patient's chart.

Only the second one answers a question. When a patient asks who has seen their record, or when you have to work out whether a breach touched health data, the permissions list is silent on both.

> **Curiosity is the most common form of improper access, and no permission model catches it.** Clinical staff have legitimate access to records. What you need to be able to separate is the access that matches an appointment that day from the access that matches nothing.

## The five fields every line needs

The US Security Rule states the obligation without prescribing a format. 45 CFR 164.312(b) requires covered entities to "implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information".

HHS is explicit that the rule is "scalable, and technology neutral", so it does not tell you which fields to store. In a dental practice, these are the ones that make each line answer something.

| Field | What it stores | Essential? |
|---|---|---|
| Who | The individual's named account | ✓ Yes |
| When | Date and time | ✓ Yes |
| Which patient | Identifier of the chart opened | ✓ Yes |
| What action | View, create, amend, export or delete | ✓ Yes |
| Where from | IP address or device | ~ If there is remote access |
| What changed | Previous and new value | ~ On amendments |
| Why | Short justification for the entry | ✗ Emergency access only |

The first four are not optional, because dropping any one of them stops the line from answering a question. A log without the patient says somebody looked at something. A log that does not separate viewing from deleting is missing the distinction that matters most.

The named account is the one to get right first. 45 CFR 164.312(a)(2)(i) asks you to "assign a unique name and/or number for identifying and tracking user identity", which is the technical way of saying that a shared login makes everything downstream worthless.

![Patient record on the activity tab, showing clinical alerts, the active treatment plan and a timeline filtered by visits, treatments and communications](/screenshots/patient-timeline.png)

*Recorded activity on one patient, gathered into a single timeline.*

## What the rules actually require

Under HIPAA the obligation is twofold. Audit controls under 164.312(b) put the mechanism in place, and the information system activity review under the administrative safeguards requires procedures to regularly review records of system activity such as audit logs and access reports. Having the log and never reading it satisfies one half and fails the other.

Under the GDPR and the UK GDPR the route is different but the destination is the same. Article 5(2) makes the controller responsible for demonstrating compliance, and Article 32 requires appropriate technical measures for the security of processing. Demonstrating who accessed what is not possible without a log.

> **The Security Rule deliberately does not tell you how often to review.** It asks you to base that on your own risk analysis, which for a small practice usually means monthly, plus immediately after any incident.

## How long to keep it

There is no single number, but the two European regulators that publish one land in the same place.

France's CNIL recommends keeping traces "sur une période glissante comprise entre six mois et un an", a rolling window of six months to a year, with exceptions where there is a legal obligation, litigation or an incident to analyse.

Italy's Garante sets a floor for system administrator access logs: they must be kept "per un congruo periodo, non inferiore a sei mesi", never less than six months.

Six months is the sensible floor. Below that, a complaint arriving in spring about something that happened in autumn has nothing left to examine.

## A twenty minute monthly review

A log you only open once there is already a problem arrives too late. The periodic review is what turns it into detection, and it fits into a short routine.

1. **Filter for out of hours access.** Any chart opened at night, on a Sunday or on a holiday deserves an explanation, even though there almost always is one.
2. **Cross the day's accesses against the schedule.** If somebody opened five records and had three patients, two are unaccounted for.
3. **Look for the patients everybody knows.** A staff member's relative, a colleague, or the local celebrity is the chart most often opened for no reason.
4. **Check accounts belonging to people who have left.** A deactivated user should have no new lines at all, and if it does you have a serious problem.
5. **Review exports.** Downloading the patient database is a different action from viewing it, and it should be rare.
6. **Write down the date and what you found**, even when the answer is "nothing". That sheet is the evidence that the control exists.

One boundary worth stating out loud to the team: the CNIL is explicit that logging data must not be repurposed for unrelated functions such as tracking working hours. Logs are for security. Using them for anything else destroys the trust that keeps people from wanting them switched off.

![Practice reports screen showing the indicators for the period](/screenshots/reports.png)

*The monthly review works best as a fixed routine, alongside the rest of the month's numbers.*

## Three mistakes that leave a log worthless

**The shared account.** If four people sign in as "reception", the log faithfully records that "reception" opened the chart, which identifies nobody. It is the failure that cancels out everything else, and it is the most common one.

**The log the administrator can edit.** If the practice owner can amend or delete lines, the log stops proving anything to a third party. The CNIL frames this as making sure personnel cannot alter the record of their own activity, and the Garante requires logs to have "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità", meaning completeness, inalterability and a way to verify their integrity.

**The deleted user.** When somebody leaves and their account is deleted rather than deactivated, their lines in the log are orphaned. Deactivating preserves traceability. Deleting destroys it.

## Patients can ask, and you have to be able to answer

Two European countries have already made this concrete, and they show where the bar is heading.

Portugal is the strictest. Article 29 of Lei 58/2019 states that "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais", the data subject must be notified of any access to their personal data, and lists an "electronic register of accesses and of the data accessed" among the required measures.

Italy handles it on request. The Garante's dossier sanitario guidelines let a patient formally ask to know the accesses made to their own record, with the unit that accessed it plus the date and time, and the controller has fifteen days to respond.

Elsewhere the subject access request arrives anyway. The difference between a practice that answers in ten minutes and one that cannot answer at all is whether the log stores a patient identifier on every line.

## What software can and cannot do

No log stops somebody reading a screen over a colleague's shoulder, and none replaces the conversation about not opening a familiar name out of curiosity. What it does is let you have that conversation with facts in front of you rather than suspicions.

In Dentalpin every chart opened is recorded with the user, the date and the patient and users are deactivated without erasing what they did. Terms for the hosted and self hosted versions are on [pricing](/en/pricing/).

## Sources

- 45 CFR 164.312, Technical safeguards, paragraphs (a)(2)(i) and (b). [Cornell LII](https://www.law.cornell.edu/cfr/text/45/164.312). Consulted on 27 August 2026.
- HHS, *Summary of the HIPAA Security Rule*. [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html). Consulted on 27 August 2026.
- Regulation (EU) 2016/679 (GDPR), Articles 5(2) and 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted on 27 August 2026.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (updated 14 March 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Consulted on 27 August 2026.
- Garante per la protezione dei dati personali, provvedimento on system administrators, 27 November 2008. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Consulted on 27 August 2026.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4 June 2015. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Consulted on 27 August 2026.
- Lei n.º 58/2019 of 8 August, Article 29. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Consulted on 27 August 2026.

Retention periods and review frequency depend on the jurisdiction your practice operates in. Check this with your own adviser or data protection officer.
