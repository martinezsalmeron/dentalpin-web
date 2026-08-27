---
title: "Ransomware in a dental practice: the small clinic's plan"
description: "What to do in the first hour of a ransomware attack on a dental practice, which backup actually survives encryption, and what the 72-hour breach deadline requires."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [ransomware, security, gdpr, backups, practice-management]
---

A small practice's ransomware plan fits on one sheet of paper: an offline backup you have actually restored, a list of who you call in the first hour, patched systems with MFA on every remote entry point, and the knowledge that a reportable breach starts a 72-hour clock. None of that can be improvised on the morning the schedule will not open.

This is that sheet, in order: what actually stops, what you do in the first sixty minutes, what the law requires, and which measures genuinely move the odds.

## What stops is the practice, not the computer

Ransomware encrypts files and demands payment. In a dental practice that means the day's schedule will not open, clinical records are gone, radiographs will not display and billing has stopped, all at once and usually first thing in the morning.

The clinical problem arrives before the IT problem. Without a patient's medical alerts you do not know what they are allergic to, which is why a practice locked out of its records cannot simply carry on seeing people.

ENISA, the EU cybersecurity agency, published its first health-sector threat landscape in July 2023. Ransomware accounted for "54% of cybersecurity threats in the health sector", patient data including electronic health records were "the most targeted assets (30%)", and only "27% of surveyed organisations in the health sector have a dedicated ransomware defence programme".

> **The number that justifies the effort is tomorrow's appointment list.** A three-chair practice with forty patients a day is not debating an IT problem, it is deciding whether it opens next week. Everything below is cheap next to that.

![Practice schedule in week view with appointments spread across chairs](/screenshots/schedule-week.png)

*This is the screen that stops opening, and it is the first one anyone notices.*

## The first hour, in order

Order matters, because the decisions made in the first few minutes decide whether you keep your evidence and whether the backup survives.

1. **Disconnect the affected machine from the network**, cable and Wi-Fi. It stops the encryption spreading to the server and the other workstations.
2. **Disconnect the backup drive or NAS as well.** If it was plugged in, it is a target, not a refuge.
3. **Do not wipe anything yet.** Take an image of the affected disk first. That image is what allows a decryption attempt later, and it is also the evidence.
4. **Write down the time you noticed.** The notification clock runs from when the practice becomes aware of the breach, so that timestamp is a legal fact rather than a detail.
5. **Call.** Your IT support, and your national cyber incident body. In the UK that is the NCSC and Action Fraud; elsewhere it is the national CERT.
6. **Agree what reception says.** Patients ringing to confirm appointments will ask, and one agreed sentence beats five improvised ones.
7. **Report it to the police.** The attack is a crime, and the report becomes part of the file you will have to be able to show.

## The 72-hour clock

Article 33 of the GDPR requires the controller to notify the supervisory authority of a personal data breach without undue delay and, where feasible, not later than 72 hours after becoming aware of it, unless the breach is unlikely to result in a risk to the rights and freedoms of individuals. Article 34 adds that where the risk is high, the affected individuals have to be told too.

Encrypted dental records are rarely a low-risk case. Health data is a special category, and most current ransomware exfiltrates before it encrypts, so the scenario to assess is not only loss of availability.

> **Document the breach even if you decide not to report it.** Article 33(5) requires the controller to document any personal data breach, including its effects and the remedial action taken. A short record with the date, the scope and the reasoning behind a no-report decision is exactly what an inspection asks for.

| What happened | Notify the supervisory authority? | Tell patients? |
|---|---|---|
| Encryption only, restored within hours from a clean backup | ~ Assess and document the reasoning | ✗ Usually not, absent high risk |
| Clinical records encrypted, no usable backup | ✓ Yes | ✓ Probably yes |
| Attackers publish or threaten to publish data | ✓ Yes | ✓ Yes |
| An encrypted laptop holding no patient data | ✗ Not a personal data breach | ✗ No |

This is not legal advice and every case is assessed on its own facts. The working rule most regulators publish is the same one: if in doubt, notify.

## The backup that survives encryption

Ransomware encrypts everything the infected machine can write to. That includes the USB drive that has been plugged in for two years and the NAS folder mapped as a network drive.

The NCSC is explicit. Keep "offline backups that are kept separate, in a different location (ideally offsite), from your network and systems", make sure backup devices "are not permanently connected to your network" because "attackers will target connected backup devices", test regularly that restoring works, and "scan backups for malware before you restore files".

| Where the backup lives | Survives ransomware | Monthly effort |
|---|---|---|
| A folder on the same server | ✗ Encrypted with everything else | ✓ None |
| USB drive left permanently connected | ✗ Encrypted with everything else | ✓ None |
| Drive connected, copied, then removed | ✓ Yes, if it was off during the attack | ~ Someone has to remember |
| Cloud backup with versioning or immutability | ✓ Yes, if the attacker lacks those credentials | ✓ None once automated |
| File-sync folder (Drive, OneDrive, Dropbox) | ✗ Syncs the encrypted files over the good ones | ✓ None |

Then the step that turns a backup into a plan: restore it once a year onto a different machine and time it. That number is your real recovery time, and Article 32(1)(d) asks for exactly this, a process for regularly testing and evaluating the effectiveness of your measures.

![Patient record activity tab with clinical alerts, active treatment plan and a filterable timeline](/screenshots/patient-timeline.png)

*Medical alerts and treatment history are the part nobody can reconstruct from memory over one morning.*

## What actually moves the odds

No single control prevents ransomware, but a handful close the routes into a small practice.

- **Patch as soon as the update ships.** The NCSC asks you to install security updates as soon as they become available, with priority on anything facing the internet: the router, the firewall, the VPN appliance.
- **MFA on every remote entry point.** If anyone works from home, that door needs a second factor. The NCSC adds a detail people miss: it should not be installed on the same device used to administer the backups.
- **Accounts with only the permissions they need.** The receptionist does not need to be a server administrator, and ransomware inherits exactly the rights of whoever opened it.
- **Macros disabled** in office documents, still an ordinary way in by email.
- **No shared logins.** One account per person is not bureaucracy, it is the only thing that lets you work out afterwards how they got in.
- **RDP closed to the internet.** If remote access is needed, put it behind a VPN with MFA rather than an open port.

## Paying, and why the official answer is no

The NCSC states that law enforcement "do not encourage, endorse, nor condone the payment of ransom demands", and gives the reasons plainly: "there is no guarantee that you will get access to your data or computer", "your computer will still be infected", and "you will be paying criminal groups".

> **Paying does not close the file.** Even if the files come back, the breach happened, the Article 33 clock ran anyway, and documenting it and assessing whether patients must be told is still your obligation.

Before writing data off, check No More Ransom, the Europol-backed project that publishes free decryptors for ransomware families that have been broken. It does not cover everything, and checking costs five minutes.

## The sheet to write today

Write it, print it, and keep a copy outside the system you would be restoring. A plan that only exists on the encrypted server is not a plan.

1. **Who gets called**, with names and numbers: IT support, the practice owner, the national cyber body, and your insurer if you carry cyber cover.
2. **Where the backups are**, which credentials open them, and who holds those besides the IT person.
3. **How to restore**, in steps, written by somebody who has done it at least once.
4. **What reception tells a patient who rings**, in two agreed sentences.
5. **Who decides on notification**, and which adviser or DPO is consulted.
6. **The date of the last restore test** and how long it took.

With that, ransomware stops being an open-ended crisis and becomes a very bad day with a known ending.

In Dentalpin a backup is a standard PostgreSQL dump plus the attachments directory, so you can push it somewhere the practice server does not control and restore it without waiting for anyone. The terms for the hosted and self-hosted versions are on the [pricing page](/en/pricing/).

## Sources

- Regulation (EU) 2016/679 (GDPR), Articles 32, 33 and 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 27 August 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Consulted 27 August 2026.
- ENISA, *Health Threat Landscape* (5 July 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Consulted 27 August 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Consulted 27 August 2026.

This is not legal advice. Whether a particular breach is reportable, and to whom, depends on your jurisdiction and the facts, and is worth confirming with your data protection adviser.
