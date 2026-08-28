---
title: "SMS, WhatsApp or email: what an appointment reminder really costs"
description: "A US text costs about 80 times an email, a UK one about 350, and a curly quote can double the bill. Published rates from each provider, and what actually lands."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [reminders, sms, whatsapp, email, costs, scheduling]
---

An email reminder costs $0.00016 to send. A US text costs $0.0083 plus a carrier fee of $0.0035 to $0.005, so about a cent and a quarter. A UK text costs $0.056, roughly 350 times the email. That is the short answer. What actually decides your bill is not the channel but how many messages you send per appointment, whether the text contains an emoji or a curly quote, and how many patients reply.

Every price below comes from the provider's own rate page, consulted on 28 August 2026. None of it is an estimate or a figure from a comparison site.

> **The number on the rate card is not the number on your invoice.** US carriers add their own pass-through fee per message, your provider adds a margin, and a text longer than 160 characters is billed twice. Budget from the delivered cost, not the headline rate.

## What one message costs, channel by channel

Three different billing models, and that is half the story.

| Channel | Price per message | How it is billed | Can it receive replies? |
|---|---|---|---|
| Email (Amazon SES, Essentials) | $0.16 per 1,000 sends | Per email sent, inbox or spam folder | ✓ Yes |
| WhatsApp (Twilio plus Meta's rate) | $0.005 Twilio, plus Meta's fee | Only when the template is delivered | ✓ Yes |
| SMS to the US (Twilio) | $0.0083 plus carrier fee | Per segment, not per message | ✓ Yes, from a 10DLC or toll-free number |
| SMS to the UK (Twilio) | $0.056 | Per segment | ~ Only from a number, not an alphanumeric sender |

US carrier fees are published per network: $0.0035 on AT&T, $0.0045 on T-Mobile and Verizon, $0.005 on US Cellular and $0.004 on everything else. That puts a delivered US text between $0.0118 and $0.0133.

SMS is the only channel whose price depends on where you are sending. For a practice with international patients, the spread matters:

| Destination | Price per segment |
|---|---|
| United States | $0.0083 plus carrier fee |
| Poland | $0.0457 |
| Portugal | $0.0501 |
| United Kingdom | $0.056 |
| France | $0.0798 |
| Spain | $0.0875 |
| Italy | $0.0927 |
| Germany | $0.112 |

A text to Germany costs nine times what the same text costs to a US number. That is worth knowing before you promise SMS confirmations to everyone on the list.

## A curly quote can double your SMS bill

Here is the expensive mistake, and the software does not make it. Whoever writes the template does.

SMS is billed per segment, not per message. Under GSM-7 encoding one segment holds 160 characters, and 153 per segment once a message splits into several, because seven characters go to the header that stitches them together.

The moment you include one character GSM-7 cannot represent, the whole message switches to UCS-2 and the limit collapses to 70 characters, or 67 per segment in a split message. Twilio names four triggers: emoji, non-Latin scripts, extended Latin characters, and smart or curly quotation marks.

> **The curly apostrophe costs more than the emoji, because nobody sees it.** Text written in Word and pasted into a template carries typographic apostrophes silently, and a 90 character reminder goes from one segment to two. Across 800 reminders a month on a UK number, that is $89.60 instead of $44.80.

Two checks worth real money every month:

- **Count the characters of the rendered template**, with the longest patient name in your database inserted, not with the sample text.
- **Write templates in a plain text editor.** A word processor substitutes quotes and dashes without telling you.

Twilio also charges $0.001 for every message that ends in a failed state, so a dirty mobile list has a price too, even if a small one.

![A day of the schedule showing each clinician's appointments, times and status](/screenshots/schedule-day.png)

*One day of the schedule. Every appointment on this screen is at least one message a month on the invoice.*

## On WhatsApp, the price depends on whether the patient replies

Meta changed the model on 1 July 2025 and now bills per message rather than per 24 hour conversation. The charge lands when the template is delivered, not when it is sent.

Templates are classified as marketing, utility or authentication, and an appointment reminder is utility. What makes the cost hard to predict is everything Meta leaves free:

- **Anything inside an open customer service window.** Non-template messages and utility templates are not charged while that window is open, and the patient opens it by writing to you.
- **Free entry point windows last 72 hours** and nothing sent inside them is charged, templates included. They open from a click-to-WhatsApp ad or a page call-to-action button.
- **Volume tiers lower the utility and authentication rate** according to what you send in a month. They are specific to each market and category, aggregate across your whole business portfolio, and reset monthly.

The practical consequence is counterintuitive: a reminder that invites a reply is cheaper than one that does not, because the reply opens the window and the next message in that conversation is free.

Meta publishes its rates per market and currency as downloadable rate cards, with the amounts in force since 1 July 2026, when Spain, Italy, Poland and the United Kingdom moved from regional to market-specific pricing. On top of that your provider adds its own: Twilio charges $0.005 per message, the same figure for every market, and passes Meta's fee through.

**The sending limits almost certainly do not affect you.** WhatsApp tiers how many unique numbers you can message in a rolling 24 hours outside a customer service window: 250, then 2,000, then 10,000, 100,000 and unlimited. A practice with forty appointments a day writes to forty numbers, so the first tier is plenty. Scaling is automatic when quality is high and you have used at least half your current limit in the last seven days, and it applies within six hours.

## The cheapest channel is also the one that lands worst

At $0.16 per thousand, email does not compete on price: it is roughly a hundred times cheaper than anything else. The catch is that you pay per send and delivery is not included.

Gmail and Yahoo tightened their requirements in February 2024 and they are the real filter now. It is worth separating what applies to everyone from what only applies to high volume senders, because most articles on this blend the two.

| Requirement | Who it applies to | What it takes |
|---|---|---|
| SPF or DKIM | ✓ Every sender | At least one of the two, always |
| SPF, DKIM and DMARC | ~ Only above 5,000 a day to Gmail | All three, DMARC may be `p=none` |
| One-click unsubscribe | ~ Only above 5,000 a day | A `List-Unsubscribe` header supporting one click |
| Spam rate | ✓ Every sender | Below 0.3% in Postmaster Tools |

> **The 5,000 a day threshold is not yours, and it is not the part that will fail.** No dental practice comes close. What does apply from the very first email is domain authentication and the complaint rate, and that is where a reminder sent from a free mailbox with no SPF or DKIM quietly disappears.

Google additionally recommends staying below 0.10% complaints and never approaching 0.30%. Yahoo asks for the same 0.3% ceiling and requires unsubscribes to be honoured within two days. These are low thresholds: at 800 emails a month, three patients hitting the spam button puts you at 0.375%.

## The pretty sender is the one that cannot receive replies

An alphanumeric sender ID is the "DENTALCARE" that shows up instead of a number. Twilio offers it at no cost across 150 locales, and it carries one limitation that decides the design of the whole flow: it can only send SMS, never receive them.

If your reminder says "reply YES to confirm", with an alphanumeric sender that reply goes nowhere. To receive it you have to lease a number, and that is not free. Twilio's published monthly leasing prices:

- **United Kingdom**, mobile number: $2.50 a month.
- **United States**, 10DLC long code: registration and onboarding fees apply before you can send at all.
- **Germany**, mobile number: $30 a month.
- **Italy**, mobile number: $45 a month.
- **Portugal**, mobile number: $135 a month.

In the US the barrier is not the monthly fee but A2P 10DLC registration, which has to be completed before a standard long code will carry your traffic. WhatsApp and email have neither problem: both are two-way from day one.

## What this adds up to in a real month

Take a practice with forty appointments a day, five and a half days a week: about 800 reminders a month, one per appointment. At the published rates above, before your provider's margin:

| Channel | 800 reminders a month |
|---|---|
| Email | $0.13 |
| WhatsApp, the Twilio part only | $4.00 plus Meta's rate |
| SMS to a US number, one segment | $9.44 to $10.64 |
| SMS to a UK number, one segment | $44.80 |
| SMS to a UK number, two segments | $89.60 |

That last row is not an exotic scenario. It is what happens when someone pastes the text from Word, or when the message includes the practice address and tips past 160 characters.

Add a second reminder on the day and every figure doubles again. That decision, one message or two, moves more money than the choice of channel does.

![Patient record showing the activity history filtered by visits, treatments, financials and communications](/screenshots/patient-timeline.png)

*A patient's history with communications as a filter. This is where you check whether a message was delivered or merely sent.*

## How to split the channels without overcomplicating it

1. **Ask for the preferred channel at the first visit** and store it on the record. It is the field that prevents the most complaints and the one almost nobody captures.
2. **Make email the default** for the advance reminder, because at that price you may as well send it to everyone.
3. **Keep SMS for the same-day nudge**, where the cost per message is easy to justify against the value of the slot.
4. **Use WhatsApp where your patients already do**, and write the template inviting a reply, which confirms the appointment and opens the free window at the same time.
5. **Review the SMS template once a quarter** counting characters, with your longest patient name in it.
6. **Measure deliveries, not sends.** A report saying "800 sent" tells you nothing; the number that matters is how many were delivered and how many bounced.

The figure no spreadsheet will hand you is how many messages your software sends per appointment without being asked. Counting them for a month is worth doing before you renegotiate a rate.

In Dentalpin the schedule, the patient record and the communication log share one database, so the count of what was sent and what was delivered comes from the same place as the schedule itself, and the software is open source: you can look at it on [pricing](/en/pricing/). That said, the part of this article that saves you money does not depend on which program you run. It depends on counting characters and not sending three messages where one will do.

## Sources

- Twilio SMS pricing by country, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/us), pages for the United States, United Kingdom, Spain, France, Portugal, Germany, Italy and Poland, consulted 28 August 2026.
- Twilio WhatsApp pricing, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), consulted 28 August 2026.
- SMS character limits and segments, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), consulted 28 August 2026.
- WhatsApp Business Platform pricing, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consulted 28 August 2026.
- WhatsApp Business Platform messaging limits, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), consulted 28 August 2026.
- Amazon SES pricing, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), consulted 28 August 2026.
- Google email sender guidelines, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), consulted 28 August 2026.
- Yahoo sender best practices, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), consulted 28 August 2026.
