---
title: "Self-hosting healthcare software: what nobody tells you"
description: "Self-hosting costs no licence, it costs operations: a restore you have actually run, the certificate, the major PostgreSQL upgrade and someone reachable at 8am."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [self-hosted, docker, postgresql, security, gdpr]
---

Self-hosting healthcare software is not free. The licence is free. What you take on are four jobs that never end: a backup you have actually restored, a certificate that renews itself right up until it does not, a major PostgreSQL upgrade every few years, and a person who is reachable at eight on a Monday morning. If those four jobs have an owner, self-hosting is a good decision and a cheap one. If they do not, your server is a software vendor with one member of staff and no on-call rota.

What follows is the part the install tutorial leaves out, with the technical or legal source for each point.

## Installing takes a day, running it takes five years

Installation has become genuinely easy. Three files, one `docker compose up`, and a few minutes later there is an application running with its own certificate. That part is no longer the problem, which is exactly why it misleads people.

The problem is everything after it, and it has no end date: operating system patches, disk space, alerts nobody reads, the database migration three years from now, and the night the server does not come back up.

> **Installation is an event. Operations is a standing commitment.** Nobody abandons a server on day one. They abandon it in month fourteen, when the person who set it up has changed jobs and the error emails still go to their old address.

![Diagram of a self-hosted install: the browser reaches Caddy over HTTPS, which routes /api/* to the backend and everything else to the Nuxt frontend; the backend talks to PostgreSQL](/diagrams/install-stack.svg)

*Four processes and a database. Every box in this diagram is something somebody has to keep updated.*

## What the law still asks of you, wherever the server sits

Self-hosting does not add legal obligations. It removes the party who was meeting some of them on your behalf.

The practice is the controller of its patients' data whether the server is in the cupboard behind reception or in somebody else's data centre. Article 32 of the GDPR, in the wording published on legislation.gov.uk, lists among the required technical and organisational measures two items that read like a sysadmin's task list:

- **Article 32(1)(c)**: "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident".
- **Article 32(1)(d)**: "a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing". Testing is not an optional good practice, it is in the text.

Article 33(1) adds the clock: a personal data breach is notified to the supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of it.

In the United States the framing is different and the work is the same. The HIPAA Security Rule requires covered entities to "establish and implement procedures for responding to emergencies or other occurrences that damage information systems that contain ePHI", including plans for "backing up its ePHI" and for "restoring any lost data".

> **Seventy-two hours runs from when you know, not from when you understand.** If the server is yours, nobody is going to phone you to say something happened. That alert is one more thing you have to build.

This is not legal advice. How these rules apply to your practice is worth confirming with your own adviser or professional body.

## The data is not in the container

This is the most expensive misunderstanding of the first few months. The Docker documentation puts it plainly: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

In practice: you can destroy and recreate containers as often as you like, but what needs backing up is the volumes. A typical healthcare install has at least two.

- **The database**, holding patients, the schedule, clinical records, quotes and invoicing.
- **The uploaded files**, meaning radiographs, clinical photographs and signed PDFs. They are usually far larger than the database, and they are usually the ones forgotten.

A database dump without the file storage restores a practice with no images in it. Technically that is a backup. In practice it is half of one.

**And you do not copy it hot with `cp`.** The PostgreSQL documentation is blunt about copying the data directory while the server runs: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". What does work on a running server is `pg_dump`, whose output is "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

The French supervisory authority summarises the elementary precautions in four lines that travel well: take frequent backups, keep at least one copy on a geographically separate site, keep at least one copy offline and disconnected from the network, and regularly test both the integrity of the backups and your ability to restore them.

That last line decides everything, and it has its own guide: [what to back up and how often](/en/blog/dental-clinic-backups/).

## The certificate renews itself until somebody closes port 80

Let's Encrypt certificates "are valid for 90 days", and they recommend "renewing 90 day certificates every 60 days". The ACME client does this unprompted, so the whole subject leaves everyone's mind.

Until it fails, and it fails in one specific way. The HTTP-01 challenge "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

So when somebody closes port 80 on the firewall because "everything goes over HTTPS anyway", renewal stops working silently. The site keeps working perfectly for thirty days, and then, on an ordinary Tuesday, the front desk browser shows a full-screen security warning.

1. **Leave port 80 open** even if it only redirects to HTTPS, or switch to the DNS-01 challenge, which validates with a TXT record at `_acme-challenge.your-domain` and needs a DNS provider with an API.
2. **Watch the expiry date from outside** the server, with any external check. An alert that lives on the machine that went down warns nobody.
3. **Check at day 65** that renewal actually happened, not that the timer fired.
4. **Write down who gets the alert**, and confirm that address still exists after that person leaves.

## The upgrade that does hurt

Minor patches are routine. PostgreSQL guarantees that "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Going from 17.4 to 17.6 is a container restart.

A major version is a different animal: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." A PostgreSQL 17 container will not start on a data directory written by 16. If your image is pinned to `latest`, then the day the tag moves, your database does not come up, and the error message will not be obvious at eight in the morning.

The project documents three routes: dump and restore with `pg_dumpall`, the faster `pg_upgrade`, or replication. Picking one is half an hour of reading. Discovering the choice mid-outage costs a day.

1. **Pin the major version** in your configuration, never `latest`, for the application and for the database alike.
2. **Look at your version's support calendar** once a year and plan the jump before it stops getting security fixes.
3. **Run the migration against a copy** on another machine first, and time it.
4. **Keep the previous dump** until the practice has worked a full week on the new version.

## Who answers at eight on a Monday

This is the question that decides it, and it is not a technical one.

A dental practice opens at eight or nine with the schedule already full. If the server does not start, there are no clinical records, no consent forms and no way of knowing who is coming in. The relevant question is not whether you know how to fix it. It is whether that person is available, with a laptop, at that moment.

![Home screen showing today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*This is the screen that has to be up at eight. Everything else can wait until lunchtime.*

Honest answers that work: the practice's IT contractor on a retainer with a phone number, the dentist themselves if they enjoy this and own it, or a managed provider. Answers that do not work: somebody's nephew, and "I'll look at it later".

## Self-host or not: the table

| | Your own server | Managed service |
|---|---|---|
| Licence | ✓ No fee if the software is free | ✗ A fee for as long as you use it |
| Where the data lives | ✓ On your machine | ~ Wherever the contract says |
| System patches | ✗ You apply them | ✓ The provider applies them |
| Backups | ✗ You build and test them | ~ They run them, you still test them |
| Monday at 08:00 | ✗ Depends who is available | ✓ Depends on their service commitment |
| Major PostgreSQL upgrade | ✗ You plan it | ✓ They plan it |
| If the vendor shuts down | ✓ It keeps running | ✗ Depends on the export they give you |
| Real cost | ~ Cheap server, expensive hours | ~ Predictable fee, somebody else's hours |

The right-hand column does not release you from anything legally. You are still the controller and you still have to be able to demonstrate that you can restore. What it buys is that somebody else does the work, and a number to call when they have not.

## The three questions to answer first

1. **Who owns the server, by name?** Not the job title, the person. If the answer takes more than five seconds, there is no owner.
2. **When did somebody last do a full restore for real?** If the answer is "never", you do not have backups. You have large files.
3. **What happens the day that person leaves?** Write the procedure down now, store it outside the system that has to be restored, and have somebody else read it.

If all three have answers, self-hosting is an excellent decision: full control of the data, no recurring fee, and no dependence on any company continuing to exist. If one of them hangs in the air, fix that first and decide afterwards.

A self-hosted Dentalpin install is four containers and two volumes, the database and the uploaded files, so a backup is a standard PostgreSQL dump plus a folder and automates with whatever tooling you already use. The terms for the self-hosted and hosted versions are on [pricing](/en/pricing/), and if you want to rehearse a restore before committing to anything, [installing it takes three minutes](/en/blog/install-dentalpin-in-three-minutes/).

## Sources

- Regulation (EU) 2016/679 (GDPR), articles 32 and 33. Text at [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) and in [chapter 4 as published by the CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Consulted 19 August 2026.
- U.S. Department of Health and Human Services, *HIPAA Security Rule*. [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html). Consulted 19 August 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Consulted 19 August 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Consulted 19 August 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Consulted 19 August 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Consulted 19 August 2026.
- Let's Encrypt, *FAQ* and *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) and [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Consulted 19 August 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Consulted 19 August 2026.
