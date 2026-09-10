---
title: "What computers does a dental practice actually need?"
description: "How many machines the front desk and each operatory need, what Windows 11 requires today, when replacement becomes unavoidable, and what not to buy."
pubDate: 2026-09-10
translationKey: hardware-clinica-dental
tags: [hardware, workstations, windows, infrastructure, operatory]
---

A two or three chair practice needs fewer and cheaper machines than most quotes assume: one workstation at the front desk, one per operatory, and not much else. What decides the spend is not the size of the practice. It is one question: whether your practice management software is an installed Windows program or runs in a browser.

With desktop software, every workstation has to run the program and there is almost always a server behind it. In a browser, any machine that opens Chrome or Firefox comfortably will do, and the heavy lifting happens on the server, wherever that server lives.

## The question that sets the budget

Before you look at a single model, work out which of the two worlds you are in. It changes the number of machines, how powerful they need to be, and what they cost to keep running.

- **Desktop software.** The program is installed on every workstation and the data sits on a server in the practice. You need that server, cabling that reaches it, local backups and someone to maintain it. The vendor publishes the requirements, and you ask for them in writing before you buy anything.
- **Browser-based software.** The workstation only has to open a tab. A mid-range laptop from four years ago is fine, and what deserves attention is the connection and the screen, not the processor.
- **The mixed case.** Management runs in a browser and imaging (radiography, intraoral scanner) is still a Windows program. This is the most common situation, and it means the operatory machine is sized by the imaging software, not by the practice management one.

> **Ask for the system requirements in writing before you sign.** A vendor who will not publish or send the minimum requirements for their own product is letting the hardware bill turn up after the contract, when there is nothing left to negotiate.

## Windows 11 minimums, and what you should actually buy

Microsoft publishes minimum requirements for Windows 11, and they are low. They exist so the operating system will start, not so a front desk can work with fifteen tabs open and a radiograph loading.

| Component | Microsoft's published minimum | What to buy instead |
|---|---|---|
| Processor | 1 GHz, 2 or more cores, 64-bit | 4 cores or more, from the last five years |
| Memory | 4 GB | 16 GB, with 8 GB as the absolute floor |
| Storage | 64 GB | 256 GB SSD or larger, never a spinning disk |
| Firmware | UEFI, Secure Boot capable | The same, verified before purchase |
| TPM | Version 2.0 | Version 2.0, enabled from the factory |
| Graphics | DirectX 12 with a WDDM 2.0 driver | Integrated graphics are enough |
| Display | 720p, larger than 9 inches | 24 inch, 1080p at the front desk |

The two numbers that change daily life are memory and the drive. A machine with 8 GB and an SSD beats one with 16 GB and a mechanical disk, and moving from a spinning disk to an SSD is the one upgrade everybody notices on the first morning.

![A day view of a dental schedule on a front desk screen, one column per operatory with open slots visible](/screenshots/schedule-day.png)

*A day view with one column per operatory: the screen the front desk keeps open from the moment the practice opens.*

## Where the money is worth spending

Components do not all show up at the front desk in the same way. This is the section that saves the most budget.

| Where to spend | Noticeable in the practice? | Why |
|---|---|---|
| SSD instead of a mechanical disk | ✓ Every day | Boot time, opening records, searching |
| Memory from 8 GB to 16 GB | ✓ At the front desk | Many tabs plus imaging at once |
| Large screen at the front desk | ✓ Every day | A multi-chair schedule without scrolling |
| Wired network in the operatory | ✓ With heavy imaging | A radiograph over congested Wi-Fi makes people wait |
| Second screen at the front desk | ~ Depends on the workflow | Useful when invoicing and greeting overlap |
| High-end processor | ✗ Almost never | The bottleneck is the drive and the network |
| Dedicated graphics card | ✗ Almost never | Unless imaging software demands it in writing |
| A "healthcare" machine at a premium | ✗ No | No certification justifies the price on its own |

The Wi-Fi row saves the most arguments. An operatory that sends large images goes on cable wherever cable is possible, and where it is not, the access point belongs in the corridor by the operatory rather than in the back office.

## The date that decides when you replace machines

Windows 10 reached end of support on 14 October 2025. Since then Microsoft has not shipped security updates or fixes for those machines unless they are enrolled in the Extended Security Updates programme.

> **The consumer extension runs through 12 October 2027**, and enrolment stays open until that same date (consulted 10 September 2026). It is a deadline, not an alternative to replacing hardware: it delivers critical security patches only, with no technical support and no improvements.

For a practice that turns replacement into a calendar rather than an emergency. A machine that cannot move to Windows 11 because it lacks TPM 2.0 or Secure Boot has a known replacement date, and the cost can be split across two financial years instead of swapping five machines in the same month.

## Home or Pro: the difference that matters with patient data

In a shop they look like the same computer with two labels. For a practice they are not, and the difference is disk encryption.

> **BitLocker cannot be enabled on Windows Home.** Microsoft lists it as available on Pro, Enterprise, Pro Education and Education. An unencrypted front desk laptop that disappears on a Friday is a patient data breach; encrypted, it is a machine to replace.

Two details worth knowing before you argue about it with a supplier:

- **Device encryption does exist on every edition**, but it turns on automatically only where the machine meets certain prerequisites, and from Windows 11 version 24H2 those prerequisites were relaxed, so more machines qualify than used to.
- **BitLocker with start-up integrity checking needs TPM 1.2 or later.** Without a TPM you can still encrypt, but the machine has to start from a key on a USB stick, which at a front desk ends up taped to the computer and protects nothing.

Ask for the Pro edition on the quote. Upgrading from Home afterwards is possible, but it is billed separately and it always lands in the worst possible week.

## Front desk, operatory and office want different machines

One model for the whole practice is easy to buy and unpleasant to use. Three profiles cover any small practice.

1. **Front desk.** The workstation that runs the most hours and opens the most windows. Big screen, 16 GB, SSD and a keyboard someone can type on. This is where saving money shows up as a patient watching you wait.
2. **Operatory.** Sized by the imaging software, if there is any. Without imaging, a modest machine or a tablet with a keyboard is enough. What it does need is to be cleanable: a smooth surface, no vents facing up, and a mount that keeps it out of the splash zone.
3. **Office or principal.** A laptop, so the numbers can be reviewed away from the practice without carrying a copy of the database on a USB stick.

![A patient record open on the odontogram, with clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*The patient record as it looks during a visit: odontogram, alerts and the active plan on one screen.*

## The server, only if you genuinely need one

A server in the building makes sense in two cases: when desktop management software requires it, or when you have decided to self-host web software so the data never leaves the premises.

In either case what you need is less impressive than what gets sold:

- **A dedicated machine, not the front desk one.** Sharing the server with a workstation means a mid-morning restart stops the whole practice.
- **An SSD and a copy that leaves the building.** The server is not the backup. It is precisely the machine that fails.
- **A UPS.** A power cut in the middle of a write is the quickest way to corrupt a database, and a UPS costs less than an afternoon of recovery.
- **Someone to call.** In writing, with hours and a response time. A server with no maintenance agreement is a server with no maintenance.

## Before you buy, in this order

1. **Ask your software vendor for minimum and recommended requirements**, in writing, imaging software included.
2. **Inventory what you already own**: processor, memory, drive, Windows edition, and whether it supports Windows 11.
3. **Separate what can be upgraded from what has to be replaced.** Plenty of machines need only an SSD and memory, which is an afternoon rather than a capital purchase.
4. **Decide the edition**, Pro wherever patient data lands.
5. **Look at the network before the machines.** If the operatory is on Wi-Fi and imaging crawls, no new computer fixes it.
6. **Buy by profile**, not one model for every position.
7. **Keep invoices and serial numbers with the inventory.** On the day of an incident, that list is worth more than the machine.

## What you do not need to buy

Four line items turn up in almost every quote and almost never earn their place in a small practice: the dedicated graphics card with no written requirement asking for it, the high-end processor to open a browser, the machine that costs more for being sold "for healthcare", and the server bought just in case before anyone checked whether the software needs one.

The fifth is more expensive than the other four together: replacing every workstation at once because nobody looked at the inventory until a machine stopped starting.

If your management software runs in a browser, the requirements for a workstation are the browser's requirements and little else. Dentalpin is that kind of software: it runs in Chrome or Firefox on any reasonable machine, and it can be hosted in the practice or outside it, so the server decision is yours rather than the licence's. The plans are on the [pricing page](/en/pricing/).

This is not technical advice for your specific installation. Your imaging software's requirements outrank any general recommendation in this article.

## Sources

- Microsoft, Windows 11 system requirements: <https://www.microsoft.com/en-us/windows/windows-11-specifications> (consulted 10 September 2026).
- Microsoft, Windows 10 support ended on 14 October 2025: <https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025> (consulted 10 September 2026).
- Microsoft, Windows 10 Extended Security Updates: <https://www.microsoft.com/en-us/windows/extended-security-updates> (consulted 10 September 2026).
- Microsoft, BitLocker overview, supported editions and system requirements: <https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/> (consulted 10 September 2026).
