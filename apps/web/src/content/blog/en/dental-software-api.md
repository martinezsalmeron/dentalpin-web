---
title: "Your dental software's API: what you should be able to do with your own data"
description: "What a dental practice management API must let you do: read, write, get notified and get out. The questions to ask before signing, and how to test it."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, integrations, contracts, data-export, gdpr]
---

You should be able to read and write, from outside the program, the four things a practice runs on: patients, appointments, treatment plans and invoices. With your own credentials, without asking anyone's permission, and without buying a separate module. That is the practical test, and very little dental software passes all of it.

The law guarantees you considerably less than that, but it does guarantee something. Worth knowing which before you sit down to negotiate.

## An API is the program's second door

The screen is the door people walk through. The API is the door other programs walk through, with the same lock and the same permissions.

When it exists, the booking form on your website writes straight into the schedule and nobody retypes anything. When it does not, every integration turns into a person copying data from one screen to another.

![A patient record on screen showing personal details, contact information and billing data](/screenshots/patients.png)

*A patient record, with personal details, contact information and billing data across tabs.*

## The four things an API has to let you do

- **Read.** Pull the patient list, the appointments in a date range, the accepted treatment plans for the quarter. This is what feeds a report or a dashboard.
- **Write.** Create an appointment, register a patient, mark an invoice paid. Without writes, an integration is for looking at things and not much else.
- **Tell you.** A webhook is the program calling your system when something happens, instead of your system asking every five minutes whether it has.
- **Let you leave.** A bulk download of everything, which is not the API and does not replace it.

> **An API is not a backup and it is not an export.** It moves one record now; it will not rebuild the practice on the morning the server does not boot. If the API is offered as the answer to "how do I get my data out", half the answer is missing.

## What the law guarantees, and where you are

This depends on where your practice is, and the difference matters more than vendors usually admit.

**In the EU and the EEA**, GDPR Article 20(1) gives the data subject the right to receive their personal data "in a structured, commonly used and machine-readable format" and to transmit it to another controller. Article 20(2) adds the right to have it transmitted controller to controller "where technically feasible". Article 15(3) requires a copy, in a commonly used electronic form when the request arrives electronically. The UK retained the same wording in UK GDPR after leaving the EU.

Note who holds that right. In a dental practice you are normally the controller and your software vendor is the processor, so the patient exercises Article 20 against the practice. The practice then needs software that can actually comply. GDPR does not, on its own, give you an API against your vendor.

**In the United States**, the equivalent floor is the HIPAA right of access. 45 CFR 164.524(c)(2)(ii) is the part worth quoting at a vendor: where the information is held electronically and the individual asks for an electronic copy, the covered entity "must provide the individual with access to the protected health information in the electronic form and format requested by the individual, if it is readily producible in such form and format".

**In the EU only**, the Data Act (Regulation (EU) 2023/2854) has applied since 12 September 2025 and goes further:

- **Open interfaces, free of charge.** Article 30(2) requires providers of data processing services to make open interfaces available to all customers free of charge, carrying enough information "to enable the development of software to communicate with the services".
- **Export on switching.** Article 30(5) requires exporting all exportable data, at the customer's request, in a structured, commonly used and machine-readable format.
- **No exit fees from 2027.** Article 29(1) bans switching charges from 12 January 2027. Reduced charges, capped at actual cost, are permitted until then.

> **Those obligations are about switching vendors, not about your day-to-day automation.** They also apply to what the Regulation calls a data processing service, defined in Article 2(8) as essentially a cloud service. If your software is licensed and installed on a server in the practice, that chapter is not your lever. Your contract is.

None of this is legal advice. Sources and consultation dates are at the end.

## Export, API and webhooks solve different problems

| | Export | API | Webhooks |
|---|---|---|---|
| What it is for | Taking everything with you | Moving one record now | Knowing something happened |
| How often | ✓ One-off or monthly | ✓ Continuous | ✓ The moment it happens |
| Good for migrating | ✓ Yes, that is the job | ~ Slow and piecemeal | ✗ No |
| Good for integrating | ✗ No | ✓ Yes | ✓ Yes |
| Works as a backup | ~ Only if stored off-site | ✗ No | ✗ No |
| Usually included | ✓ Nearly always | ~ Vendor dependent | ~ Vendor dependent |

## Seven questions to ask before signing

1. **Where are the docs, and can I read them right now without signing anything?** A public URL you can open today tells you more than any sales answer. If they send a PDF, ask what year it is from.
2. **Is it included, or a separate module?** And if separate, what it costs and what the call allowance is. A metered API changes the design of everything you build on top of it.
3. **Is it read-only?** Half the value is in writes. A read-only API cannot create the appointment a patient just booked on your website.
4. **Exactly which entities does it cover?** Patients, appointments, treatment plans, procedures, invoices, documents, the dental chart. Ask for the list rather than the promise, and check whether the clinical record is inside it or outside.
5. **Are there webhooks, and which events fire?** Without them every integration ends up polling in a loop, which is the fastest route to a rate limit.
6. **What are the limits?** Calls per minute, page size, number of credentials. A published limit is a good sign; a limit nobody can tell you is one you will discover in production.
7. **What happens the day I leave?** That the API stays live through the notice period, with full read access, belongs in the contract next to the export clause.

## Five things that fix themselves once there is an API

- **The website writes into the schedule.** The patient books, the appointment appears, nobody transcribes anything in the evening.
- **Quarterly numbers for the accountant.** A report that runs itself on the first of the month, instead of an afternoon of exporting and reconciling by hand.
- **Reminders through the channel you already use.** If your messaging provider is not integrated, an API lets you connect it. Without one, you wait for the vendor to do it.
- **Your own KPI dashboard.** Chair utilisation, case acceptance and outstanding balances, on your definitions rather than the vendor's.
- **Cleaning duplicates in bulk.** Finding them by reading the whole database is half an hour. Doing it screen by screen is a month.

![Day view of the appointment schedule with appointments laid out in columns and time slots](/screenshots/schedule-day.png)

*The schedule in day view, with appointments laid out across columns and time slots.*

## How to test an API in twenty minutes without being a developer

1. **Ask for the documentation URL.** Open it on your phone in front of the salesperson. Either it loads or you have learned something.
2. **Find the authentication section.** It should explain how to obtain a credential without phoning support.
3. **Ask for a test environment.** Never make the first call against the practice's live data.
4. **Copy the example out of the docs.** Nearly all of them ship a line you can paste into a terminal:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.example.com/v1/patients
```

5. **Try a write.** Creating a test appointment and watching it appear in the schedule is the moment you know the integration is real.
6. **Search the docs for the word "limit".** If it is not there, ask in writing and keep the answer.

If any of those six steps requires a meeting, that is an answer too.

## Where DentalPin fits

In DentalPin every feature exposes a REST endpoint documented with OpenAPI, included in the price and with webhooks, because the product installs on your own server and an integration should not depend on us authorising it. What is included is on [pricing](/en/pricing/).

## Sources

- Regulation (EU) 2016/679 (GDPR), Articles 15(3), 20(1) and 20(2): [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679). Consulted 30 August 2026.
- Regulation (EU) 2023/2854 (Data Act), Articles 2(8), 29(1), 29(2), 30(2), 30(5) and 50: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R2854). Consulted 30 August 2026.
- 45 CFR 164.524, HIPAA right of access, form and format: [ecfr.gov](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.524). Consulted 30 August 2026.
