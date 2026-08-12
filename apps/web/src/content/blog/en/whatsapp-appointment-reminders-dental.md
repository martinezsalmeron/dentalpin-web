---
title: "WhatsApp appointment reminders: what the rules actually allow"
description: "An appointment reminder is not marketing, but WhatsApp still demands opt-in and its policy restricts health information. What you can send, and what you cannot."
pubDate: 2026-08-12
translationKey: recordatorios-cita-whatsapp-dental
tags: [whatsapp, reminders, gdpr, hipaa, scheduling]
---

You can remind patients of appointments over WhatsApp, and in most cases no marketing consent is required by law, because a reminder for an appointment the patient already booked is not marketing. What you do need is the permission WhatsApp itself demands by contract, which is a separate thing, and a message that does not say what the treatment is. That last part is where most practices slip.

What follows separates the two rule sets that get confused, and ends with what the message may say. This is not legal advice.

## A reminder is not marketing, which is why it is allowed

Start with the law everyone misquotes. In the EU and the UK, the rule on unsolicited messages comes from Article 13(1) of Directive 2002/58/EC, which requires prior consent for electronic mail used "for the purposes of direct marketing". Article 13(2) then adds the soft opt-in for a business messaging its own customers about "its own similar products or services", with a free and easy way to object in every message.

Both sentences are about marketing. A note saying your appointment is Thursday at ten is not marketing, so the consent rule in Article 13 is not the rule that governs it.

In the United States the answer is even more explicit. Asked whether appointment reminders are allowed without an authorization, the Department of Health and Human Services answers: "Yes, appointment reminders are considered part of treatment of an individual and, therefore, can be made without an authorization."

What always applies is data protection. The fact that someone is your patient is health data, and Article 9(1) GDPR prohibits processing it by default. Article 9(2)(h) lifts that prohibition where processing is necessary for "the provision of health or social care or treatment or the management of health or social care systems and services". Running your own schedule sits inside that.

> **These are two independent gates and you have to clear both.** The law lets you send the reminder without asking permission; WhatsApp does not. The reverse is also true: for a promotional message the law wants consent even after Meta has approved your template.

This table settles most of the questions that come up at the front desk.

| Message | Is it marketing? | GDPR basis | Consent required by law? | WhatsApp category |
|---|---|---|---|---|
| Reminder for an appointment already booked | ✗ No | Art. 9(2)(h), provision of care | ✗ Not required | Utility |
| Confirming, moving or cancelling that appointment | ✗ No | Art. 9(2)(h) | ✗ Not required | Utility |
| "You are due for your annual check-up" | ~ Depends how it is written | Art. 9(2)(h) or consent | ~ Treat it as required | Marketing |
| Whitening or aligner offer | ✓ Yes | Consent, art. 9(2)(a) | ✓ Yes, prior and explicit | Marketing |

Row three is the one that catches people out. "You are due for a check-up, call us to book" defends itself as continuity of care. "Book your check-up now and get a free scale and polish" is advertising and needs prior consent.

![Day view of the schedule showing each clinician's appointments, times and status](/screenshots/schedule-day.png)

*A single day in the schedule: each appointment with its time, its clinician and its current status.*

## What WhatsApp demands, which is not what the law demands

WhatsApp is not a neutral pipe like SMS. It is a service with a contract, and for this particular case its Business Messaging Policy is stricter than the law. It says you may only contact someone if "(a) they have given you their mobile phone number; and (b) you have received opt-in permission from the recipient confirming that they wish to receive subsequent messages or calls from you".

Prior permission, in other words, for any message at all. There is no service-message exemption.

- **You choose how to collect it.** The policy says you are "solely responsible for determining the method of opt-in" and for making sure it complies with the law that applies to you. A tick box on the registration form is fine if it is recorded.
- **You open the conversation with an approved template.** "You may only initiate conversations using an approved Message Template", and WhatsApp reserves the right to "review, approve, pause and reject any Message Template at any time".
- **Opt-outs count wherever they arrive.** You must respect "all requests (either on or off WhatsApp) by a person to block, discontinue, or otherwise opt out of communications". A patient who says it at the desk has opted out.

> **The line almost nobody has read.** The same policy says: "Don't use WhatsApp for telemedicine or to send or request any health related information, if applicable regulations prohibit distribution of such information to systems that do not meet heightened requirements to handle health related information." In practice: the channel is for appointment logistics, not for clinical content.

## What the message may say, and what it may not

This is where a practice creates a real problem, and it has nothing to do with consent. The message lands on a lock screen, on a phone that may be sitting on a kitchen table, and the patient is not always the person who reads it.

HHS makes the same point about answering machines: covered entities "should take care to limit the amount of information disclosed on the answering machine", and it suggests "leaving only its name and number and other information necessary to confirm an appointment". A reminder needs four things, and none of them is clinical.

1. **Who is writing.** The practice name, so it does not read as a scam.
2. **When and where.** Date, time, and the address if you have more than one site.
3. **How to confirm or cancel.** A one-word reply, or a number somebody answers.
4. **How to stop receiving them.** One sentence, every time.

What stays out, even though the software has it to hand: the planned treatment, the diagnosis, the clinician's name where it gives away the speciality, the outstanding balance, and any reference to what happened at the last visit. "Reminder: your appointment is Thursday at 10:00" is enough and reveals nothing. "Reminder: your root canal on tooth 26, Thursday at 10:00" turns a notification into a disclosure.

> **How far a regulator will go on this.** On 12 February 2026 the Italian data protection authority issued guidelines on using patients' phone numbers for public screening campaigns (doc. web 10221629). Even for public health, it requires the privacy notice to be updated first, the sender to be identified in the message, the right to object to be stated with a simple way to exercise it, and contacts collected in services with heightened anonymity protection to be excluded.

## How to keep the permission provable

Consent you cannot evidence does not exist. This is admin work, not legal work.

1. **Ask in writing at registration**, on the same form where you take the mobile number, with a separate tick box for WhatsApp.
2. **Store the date and the exact wording** the patient agreed to, not just a yes or a no.
3. **Log every message sent** against the patient record, with its date and its content.
4. **Log the opt-outs too**, with the date and the channel they arrived by.
5. **Re-check the numbers once a year.** A recycled mobile number sends your reminders to a stranger.

![Patient record on the activity tab, with the history filterable by visits, treatments, financial and communications](/screenshots/patient-timeline.png)

*One patient's history, with communications as one of the filters on the list.*

## What it costs since July 2025

Meta changed the model on 1 July 2025 and now bills per message rather than per 24-hour conversation. You are charged when the template is delivered.

Templates are classified as utility, marketing or authentication, and an appointment reminder is a utility template. There is also a 24-hour customer service window that opens when the patient messages you, and utility templates delivered inside an open window are free. In practice, if your reminder invites a reply and the patient replies, the next message in that conversation costs nothing.

## When the patient does not use WhatsApp, or does not want to

You need a fallback and it should be boring. SMS depends on no contract with Meta and the legal reasoning is identical: the reminder is not marketing, the promotion is. Email is for anything that needs an attachment. The phone still works for the older patient who does not read messages.

Record the preferred channel on the patient record and honour it. It is the single field that prevents the most complaints and the one almost nobody keeps.

In Dentalpin the schedule, the patient record and the communications log share one database, so what was sent stays where you would later look for it; the software is open source and the terms are on the [pricing page](/en/pricing/). That said, the part of this article that saves you trouble is not which system you run, it is what you put in the message.

## Sources

- WhatsApp Business Messaging Policy, [whatsappbusiness.com/policy](https://whatsappbusiness.com/policy/), consulted 12 August 2026.
- WhatsApp Business Platform pricing, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consulted 12 August 2026.
- US Department of Health and Human Services, HIPAA FAQ 286, ["Are appointment reminders allowed under the HIPAA Privacy Rule without authorizations?"](https://www.hhs.gov/hipaa/for-professionals/faq/286/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html), consulted 12 August 2026.
- US Department of Health and Human Services, HIPAA FAQ 198, on leaving reminder messages, [hhs.gov](https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html), consulted 12 August 2026.
- Regulation (EU) 2016/679 (GDPR), articles 6 and 9, [EUR-Lex CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679), consulted 12 August 2026.
- Directive 2002/58/EC, article 13, [EUR-Lex CELEX 32002L0058](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058), consulted 12 August 2026.
- Garante per la protezione dei dati personali, guidelines of 12 February 2026, doc. web [10221629](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10221629), consulted 12 August 2026.
