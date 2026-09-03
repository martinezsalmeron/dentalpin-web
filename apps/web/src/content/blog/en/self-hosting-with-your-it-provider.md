---
title: "Self-hosting with your IT provider: what to agree in writing"
description: "Running your own dental server with a local IT provider: the contract you legally need, backups with a dated restore test, who holds the keys, and the exit clause."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [self-hosting, gdpr, hipaa, backups, dental-software]
---

If your practice self-hosts and a local IT provider runs the server, four things belong in writing before they touch anything: the data processing contract, which the law requires the moment they can reach patient records; what "I take backups" actually means, including a dated restore test; who holds the administrator credentials and where the data physically lives; and how many hours it takes them to answer on the Monday the schedule will not open. Everything else is detail.

None of this needs a twenty page agreement. It fits on two sides of paper and one half-hour meeting, and that meeting is cheaper than the first night without a schedule.

## Your IT provider is a processor from day one

The practice is the controller of its patients' data. Whoever administers the server holding that data is a processor, even if they never open a clinical record and even if they have been fixing your printers for fifteen years.

The obligation has a different name depending on where you practise, and the same shape everywhere.

- **UK and EU.** Article 28(3) of the (UK) GDPR requires the relationship to be governed by a contract binding the processor to the controller, and Article 28(9) adds the form: "in writing, including in electronic form".
- **United States.** Under the HIPAA Security Rule, a covered entity may let a business associate "create, receive, maintain, or transmit electronic protected health information on the covered entity's behalf only if the covered entity obtains satisfactory assurances, in accordance with § 164.314(a), that the business associate will appropriately safeguard the information" (45 CFR 164.308(b)(1)). Section 164.314(a)(2)(i) then requires that contract to make the associate comply with the Security Rule, bind its own subcontractors the same way, and report security incidents to you.

> **A handshake with the IT provider you have always used is not that contract.** Personal trust does not replace the document, and the party answering to the regulator when it is missing is the practice, not them.

This is not defensive paperwork. The contract is where it finally gets written down who takes the backups, how often the server is patched, and what happens the day you stop working together, which are exactly the three things nobody remembers agreeing when they matter.

![Diagram of a self-hosted install: the browser reaches Caddy over HTTPS, which routes /api/* to the backend and everything else to the Nuxt frontend; the backend talks to PostgreSQL](/diagrams/install-stack.svg)

*One server, four processes and a database. Every box in the diagram is something somebody has to keep current.*

## The clauses the regulation already writes for you

Article 28(3) does not leave the contents to your imagination. Translated into practice language:

- **Documented instructions.** The provider processes data only as the practice tells them to, and the instructions exist in writing, even if that writing is an email.
- **Confidentiality.** Everyone with server access is bound by it, including the technician who comes in on a Tuesday to swap a disk.
- **Security.** The technical measures of Article 32, named individually: encryption, access control, backups, patching.
- **Sub-processors.** If the box sits in someone else's data centre, or the backups go to a storage provider, that is sub-processing and it needs your authorisation. Either you approve a named list up front, or you agree that they notify you of any change in advance and you can object.
- **Help with patient rights.** When someone asks for their record or its deletion, the provider must be able to get it out of the system.
- **Return or deletion at the end.** When the service ends, the data is returned or destroyed, at your choice.
- **Audit.** They make available the information needed to show they comply, and they accept checks.

That last point has a practical reading most practices skip. The duty to use only a processor offering sufficient guarantees does not expire on signature day. It is continuous. If you have not asked about the backups in two years, you have not checked them.

## What gets said out loud, and what should be on paper

| Commitment | How it usually gets agreed | How it should read |
|---|---|---|
| Backups | ~ "I back it up every night" | ✓ Frequency, destination, encryption, and who gets the alert when one fails |
| Restore | ✗ Never actually tested | ✓ One documented test a year, with a date and a result |
| Updates | ~ "When something important comes out" | ✓ An agreed monthly window, with notice before major upgrades |
| Response time | ✗ "Call me and I'll look at it" | ✓ Hours, channel, and response times by severity |
| Access | ~ One shared admin account | ✓ Named accounts, revoked the same day somebody leaves |
| End of the relationship | ✗ Not considered | ✓ Return or deletion of the data, and handover of credentials |

Nothing in the right-hand column costs money. It costs one twenty-minute conversation you would rather not have, once.

## "I back it up every night" does not tell you anything yet

Article 32(1) of the GDPR does not ask for backups. It asks for two harder things: "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident", and "a process for regularly testing, assessing and evaluating the effectiveness" of the measures.

The HIPAA Security Rule reads the same way from the other side of the Atlantic. The data backup plan is a requirement to "create and maintain retrievable exact copies of electronic protected health information", the disaster recovery plan is "procedures to restore any loss of data", and testing and revision of the contingency plan is an addressable specification, which means you either implement it or document why you did not.

> **A backup is not tested on the day you need it.** It is tested on an ordinary Tuesday, unhurried, restored onto a separate machine, checking three numbers: how many patients there are, what the last invoice is, and what the last appointment recorded was.

Ask for that test as a dated deliverable rather than a promise. A two line email once a year saying "restored the 14 May backup on a test server, 3,412 patients, last invoice 2026/0871" is worth more than any clause.

## Two dates already in the calendar whether you look or not

Some maintenance is not a matter of anyone's judgement, because it has a published date.

1. **The PostgreSQL major version.** The project supports each major version for five years from release. PostgreSQL 14 gets its final update on 12 November 2026 and 15 on 11 November 2027. If your database sits on either, the upgrade already has a deadline and should have a budget.
2. **The certificate.** Let's Encrypt certificates are valid for 90 days and renewal is recommended every 60. Let's Encrypt states there is no way to adjust those lifetimes and no exceptions. There is also an optional short-lived programme with six day certificates, renewed every three. All of it is automated until the day somebody closes port 80 and renewal quietly stops working.

Both dates belong in the contract as a maintenance window, not as a favour. The second one comes with a name attached: who watches that renewal is still happening.

## The keys belong to the practice, even if they use them

This is where most practices get stuck, and rarely because the provider acted in bad faith. Nobody discussed it.

- **The administrator password lives in the practice password manager**, not only on the provider's laptop.
- **Named accounts, never a shared "admin".** If three people use the same login, the access log is useless the day you have to read it.
- **Domain and DNS in the practice's name.** A domain registered by your provider is a future negotiation disguised as convenience.
- **One backup copy somewhere they do not control.** This is not suspicion. If ransomware arrives through their workstation, their copies and yours are on the same side of the fence.
- **Same-day offboarding.** When someone leaves the provider or the practice, access is revoked that day, agreed in advance so nobody has to ask for it as a favour.

![Home screen showing today's appointments, who is currently in the practice, overdue payments and the most recent patients](/screenshots/home.png)

*This is the screen that has to be up at half past eight. Everything you agree with your IT provider exists so that it appears.*

## Response times, in hours and in plain English

A service agreement for a three-chair practice does not need enterprise vocabulary. It needs three rows.

- **The practice cannot work.** The schedule will not open, the server does not answer. This row gets a phone number rather than an email address, and a number of hours.
- **It works, with pain.** A printer, one workstation, a broken integration. Same day or next working day.
- **Question or improvement.** A week, and it does not matter.

Add the two details everyone forgets: what happens in August and at Christmas, and who answers when your provider is ill. A one-person provider is perfectly reasonable for a small practice, as long as the cover is written down somewhere.

## The exit clause gets signed on the way in

Changing IT provider is normal and does not have to be painful. It becomes painful when nobody planned for it.

Article 28(3)(g) already gives you the right: when the service ends, the data is deleted or returned. Make it concrete while the relationship is good.

1. **What format the database is handed over in**, as a complete dump rather than a partial export to a spreadsheet.
2. **Which credentials transfer**, and within how many days.
3. **Who supports the transition**, and how many hours are included.
4. **Proof of deletion.** Destruction should cover the copies in the provider's own systems, with written confirmation.

> **None of those four is negotiated well on the day you leave.** They are negotiated on day one, when both sides want the relationship to start cleanly.

## The half-hour meeting

If you want this settled tomorrow, here is the agenda:

1. Sign the processing contract, or the business associate agreement if you are in the US.
2. Write down where the backups go, how often, and who gets the failure alert.
3. Put a date on the next restore test.
4. Record which PostgreSQL version runs today and when its support ends.
5. Put the administrator password into the practice password manager.
6. Turn shared logins into named accounts.
7. Agree the three response-time rows and the holiday cover.
8. Write the exit clause.

Nothing on that list requires technical knowledge. It requires somebody from the practice to sit down for half an hour with the person who administers the server.

## Where Dentalpin fits

Dentalpin is open source dental practice software that installs on your own server with `docker compose`, so this agreement applies exactly as it would to any other self-hosted system: the software charges no licence, and the work that genuinely costs money is what you have just read. If you want to see what is included before deciding who operates it, it is on the [pricing page](/en/pricing/), and the install is described step by step in [installing Dentalpin in three minutes](/en/blog/install-dentalpin-in-three-minutes/).

This article is general guidance, not legal advice. Check your own contract with your adviser.

## Sources

- Regulation (EU) 2016/679 (GDPR / UK GDPR), [Article 28](https://www.legislation.gov.uk/eur/2016/679/article/28) and [Article 32](https://www.legislation.gov.uk/eur/2016/679/article/32), official text consulted 3 September 2026.
- 45 CFR 164.308 and 164.314, HIPAA Security Rule, consulted via the [eCFR](https://www.ecfr.gov/current/title-45/section-164.308) on 3 September 2026.
- PostgreSQL Global Development Group, [Versioning Policy](https://www.postgresql.org/support/versioning/), consulted 3 September 2026.
- Let's Encrypt, [FAQ](https://letsencrypt.org/docs/faq/), consulted 3 September 2026.
