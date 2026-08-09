---
title: "Cloud or your own server for a dental practice: how to decide"
description: "Cloud or an in-practice server: what actually changes, what HIPAA and GDPR require either way, and the five questions that decide it for your dental practice."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [cloud, self-hosted, infrastructure, hipaa]
---

This decision is not settled by security. It is settled by who answers when something breaks and how long the practice takes to get back to work. Choose cloud if nobody in the practice wants to own backups and updates. Choose your own server if you need to keep treating patients when the internet drops, or you want the data physically under your control. Both are legal, and both put you on the hook for exactly the same paperwork.

What follows is how to reach your own answer without relying on what a salesperson tells you.

## What neither option changes

You are the covered entity, or the controller, either way. The software or hosting provider works on your behalf, and that brings obligations that do not disappear because the server sits in your own back office.

In the United States, a cloud provider that stores patient data is a business associate and needs a signed business associate agreement under 45 CFR 164.504(e) and 45 CFR 164.308(b). Encryption does not get either party out of it. HHS is explicit: "Lacking an encryption key for the encrypted data it receives and maintains does not exempt a CSP from business associate status and associated obligations under the HIPAA Rules."

In the EU, GDPR article 28(1) says the controller "shall use only processors providing sufficient guarantees to implement appropriate technical and organisational measures", and article 28(3) requires a contract. Article 32(1)(c) is the one most practices fail without knowing: you must have "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident".

> **A server in the sterilisation room with an untested restore fails that test exactly like a cloud with no backups.** The rule does not ask where the disk is. It asks whether you can get the data back, and how fast. If nobody has ever tried a restore, the honest answer is that you do not know.

Retention is the other constraint. Record retention periods for dental records are set by state or national law rather than by your software, and whichever option you pick has to outlive that period, including the possibility that your vendor does not.

![Day schedule in Dentalpin showing appointments by chair and their status](/screenshots/schedule-day.png)

*This is the screen that has to open at nine in the morning, whatever you decided.*

## There are three options, not two

Most comparisons frame this as cloud versus your own server and leave out the third, which is the one technically minded practices often land on: your own instance, running on a rented server.

| | Vendor cloud | Server in the practice | Your own instance on a VPS |
|---|---|---|---|
| Who applies updates | ✓ The vendor | ✗ Someone at the practice or their IT contractor | ~ You, but with no hardware to touch |
| When the internet drops | ✗ Nobody can work | ✓ Keeps running on the local network | ✗ Nobody can work |
| Who owns the backup | ~ Vendor runs it, verifying it is on you | ✗ Entirely yours | ✗ Entirely yours |
| Hardware to maintain | ✓ None | ✗ Machine, disk, UPS and their replacement | ✓ None |
| Up-front cost | ✓ None | ✗ Buying the machine | ~ Low |
| Where the data sits | Vendor infrastructure | Your premises | The data centre you choose |
| What you need in order to leave | A full export they have to give you | ✓ You already hold it | ✓ You already hold it |

The two ends of that table are not competing on the same thing. Cloud takes work off your desk and ties you to a supplier. Your own server gives you control and gives someone a job to do every month.

## The test that decides it: what happens on the day it fails

Before comparing prices, put a number on two things.

1. **How long the practice can run without the software.** If the answer is "half a morning, on paper", almost any option works. If it is "one hour", you need a written plan, and you need it with your own server too.
2. **What that downtime costs.** Chairs times hours times average billing. It is the only number that turns this into an economic comparison rather than a matter of taste.
3. **Who picks up the phone at nine on a Monday.** With cloud it is the vendor's support desk and it has published hours. With your own server it is your IT contractor, and it is worth knowing their real response time before you need it.
4. **What is lost between the last backup and the failure.** A nightly backup means losing a day of work. If that is unacceptable, backup frequency is a requirement, not a detail.
5. **How you leave.** Ask for the full export procedure in writing before you sign, not when you want to go.

> **The most common outage is not the vendor's, it is your line.** A cloud system stops at the practice router, not at the data centre. A practice with one fibre connection and no mobile failover has a single point of failure however solid the vendor is.

## What cloud does not fix, and neither does your own server

A machine under the reception desk is not automatically more private. With an unpatched operating system, an unencrypted disk and the backup on a USB drive in the same room, it is worse than a maintained cloud: one burglary or one fire takes the original and the copy together.

It fails the other way too. Cloud does not excuse you from checking anything. You still need the contract, and you still need to know how often restores are tested. HHS makes the same point about service level agreements: they can cover backup and data recovery, but their terms have to stay consistent with the business associate agreement and the HIPAA Rules rather than replace them.

- **Disk encryption**, in both models. It is what turns a stolen laptop or server into a hardware problem instead of a breach.
- **One copy off site**, always. The working rule is three copies, on two kinds of media, one of them out of the building.
- **A tested restore** at least once a year, timed, with the result written down.
- **Per-person access control**, not a shared password on a sticky note, which is the failure that makes everything above irrelevant.

![Patient record in Dentalpin with odontogram, clinical alerts and the active treatment plan](/screenshots/dental-chart.png)

*This is what a restore has to bring back intact, not just the patient list.*

## Choose cloud if

- **Nobody at the practice wants to be the technical owner.** That is a good reason, and it is enough on its own.
- **You run more than one location** and want the same schedule everywhere without building a VPN.
- **Your connection is solid and you have a failover** on mobile data that you have actually tested.
- **You prefer a predictable monthly cost** to buying hardware every five or six years.

## Choose your own server if

- **An internet outage cannot stop the surgery.** It is the strongest and most concrete argument on this side.
- **You want to be able to leave on any given day** without depending on somebody generating an export for you.
- **You already have IT support** or someone who maintains the machines properly.
- **Where the data physically sits matters to you**, by your own policy or because a third party requires it.

If you are torn, there is an honest middle path: start with whichever option costs you the least work, and take a full export of your own every month. That leaves you free to change your mind later without having bet anything irreversible.

With Dentalpin this decision does not mean changing software: the same product runs in our cloud or on your own server with `docker compose`, on the same PostgreSQL database and with the same export. If you want to try the self-hosted option before deciding, [installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/), and the terms for both are on [pricing](/en/pricing/).

## Sources

- HHS, Guidance on HIPAA and Cloud Computing. [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html). Consulted 9 August 2026.
- HHS, Business Associates. [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html). Consulted 9 August 2026.
- Regulation (EU) 2016/679 (GDPR), articles 28 and 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679). Consulted 9 August 2026.

This is not legal advice. Retention periods and the obligations that apply to you depend on your state or country, and are worth confirming with your own adviser or professional body.
