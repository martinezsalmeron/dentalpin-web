---
title: "Sending an X-ray or a report: the channel matters more than the consent"
description: "HIPAA labels transmission encryption addressable, not required. The ICO says never put the password in the same email. What that means for a dental practice."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [hipaa, gdpr, data-protection, clinical-records, security]
---

The orthodontist wants the panoramic, the lab wants the photographs, the patient wants their report "on WhatsApp". Consent is the easy part of all three: it usually exists, and when it does not it takes thirty seconds to get. The hard part is the channel, and the two regimes a practice is most likely to work under answer it differently. US law leaves transmission encryption as a judgement call. UK guidance is specific about how to do it, down to where the password must not go.

This is not legal advice. It is a reading of the primary sources listed at the end, consulted on 7 October 2026.

## This is not the other four questions

Five things get run together, and four of them are answered elsewhere.

- **Appointment reminders** carry no clinical content. They are a date and a time, and the question there is consent and marketing channel: see [WhatsApp appointment reminders](/en/blog/whatsapp-appointment-reminders-dental/) and [the channel comparison](/en/blog/sms-whatsapp-email-reminders/).
- **The right of access** settles what you must hand over and by when, which is [a patient requesting their records](/en/blog/patient-requests-their-dental-records/). It settles the what, and says almost nothing about the how.
- **The practice's GDPR position** is the framework: [lawful bases, records, retention](/en/blog/gdpr-dental-clinic/).
- **This** is the everyday question that follows: you have already decided something must go out and to whom. What is left is which route.

Consent and security are two independent layers. Consent makes the disclosure lawful; it does nothing about what happens when the send goes wrong. A perfectly consented disclosure sent to the wrong address is still a breach, and no consent form fixes it after the fact.

## The United States: encryption is addressable, not required

This surprises people who assume HIPAA mandates encrypted email. The Security Rule's transmission security standard at 45 CFR 164.312(e)(1) is stated as an instruction: *"Implement technical security measures to guard against unauthorized access to electronic protected health information that is being transmitted over an electronic communications network."*

Then it lists two implementation specifications, and the label on each is the point:

> **Both specifications are marked Addressable.** *"Integrity controls (Addressable)"* and *"Encryption (Addressable). Implement a mechanism to encrypt electronic protected health information whenever deemed appropriate."*

Addressable does not mean optional. It means you assess whether the measure is reasonable and appropriate for your environment, implement it if it is, and document the reasoning if it is not. For a dental practice emailing a radiograph over the open internet, the honest outcome of that assessment is almost always that encryption is appropriate. What the rule gives you is the obligation to decide and record, not a free pass.

![Patient record showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The record the request comes out of: odontogram, clinical alerts and the active treatment plan.*

## The United Kingdom: the ICO says where the password must not go

The ICO's encryption guidance is more prescriptive, and the sentence that matters is about the second channel. On encrypted attachments it says the key *"is commonly derived from a shorter, more-memorable password that you share with the recipient"*, and then:

> **The password never travels with the file.** The guidance continues that *"you should communicate the key to the recipient over a separate communication channel (eg by disclosing the password over the telephone when you receive confirmation that the email has been delivered). Do not include the password within the same email as the encrypted file attachment."*

The ICO also names the failure mode, with a figure attached. Under the previous regime it fined Surrey County Council £120,000 after several misdirected-email incidents, one of which involved a staff member emailing a file containing special category data of 241 people to the wrong address. Its summary of why it mattered is one line: *"As the file was neither encrypted nor password protected, everyone who received the email could access the data."*

On fax, the same guidance is blunt about the limit: *"Due to the limitations of normal fax machines, it is generally not possible for you to overlay additional encryption measures when you send a fax"*, and it suggests considering whether another means of communication is more appropriate.

## Why end-to-end encryption does not settle it

The argument that WhatsApp is end-to-end encrypted and therefore fine mistakes the transport for the whole problem. What stays outside the encryption is most of what matters here.

- **Metadata.** Who contacts a dental practice, how often, and when. A weekly conversation with a dental practice is itself health information, and that pattern is not encrypted.
- **The device.** The message is decrypted on a phone, usually a staff member's personal one, with its own photo gallery and app permissions.
- **The backup.** A radiograph sent through a consumer messenger lands in the phone's automatic backup and camera roll. End-to-end encryption stops being relevant at that point.
- **The processor relationship.** A consumer messenger is not your business associate and not your processor. There is no agreement, and nobody to hold to one.

> **The subject line and the message body are never encrypted.** This invalidates half of the sends that are otherwise done correctly: the PDF is encrypted and the subject reads "X-ray for Sarah Dunn". The patient's name just travelled in clear anyway.

## The channels, one at a time

| Channel | Fit for clinical content? | What decides it |
|---|---|---|
| Email, encrypted attachment, password by another route | ✓ Yes | The route the ICO describes |
| Email with S/MIME or OpenPGP between regular partners | ✓ Yes | No password to share per send |
| Unencrypted email | ✗ No | Fails the ICO position; poor HIPAA risk outcome |
| WhatsApp or another consumer messenger | ✗ No | Metadata, phone backup, no processor agreement |
| Fax | ✗ No | Encryption cannot be layered on |
| Post in a sealed envelope | ~ Workable | Protected, but no useful audit trail |
| Handed over in person on encrypted USB | ✓ Yes | No transmission, identity checked face to face |
| Patient portal over an authenticated session | ✓ Yes | Authentication, access log, no out-of-band password |

## How to make a send that survives scrutiny

1. **Settle the basis before the channel.** A patient request, a consented referral, or a legal obligation. If it is none of those, encryption does not rescue it.
2. **Verify the identity and the address.** Misdirection is the most common cause of a practice breach, and no amount of encryption corrects it.
3. **Encrypt the file, not just the connection.** A container with AES-256 or better, set when the file is created.
4. **Send the password by a different route.** Phone, SMS, or in person. The same email is not a different route.
5. **Keep the subject and body clean.** No name, no record number, no diagnosis. "Requested documentation" is enough.
6. **Log the send in the record.** What went out, to whom, when, and on what basis. Without that you cannot later show the disclosure was legitimate.
7. **Delete the working copy.** The PDF you generated to attach has no reason to stay on the front desk machine.

Step 4 is the one most often broken without any bad intent, and step 5 is the one most people do not know exists. Between them they account for most sends that look correct and are not.

![Patient activity timeline with clinical alerts, active plan and filters for visits, treatments, financial movements and communications](/screenshots/patient-timeline.png)

*The activity tab of a record, with the communications filter alongside the other entry types.*

## The honest answer is to stop sending files

Everything above is a list of precautions for a transfer that, done another way, does not happen. If the document is collected over an authenticated session instead of travelling as an attachment, the three awkward parts disappear: no password on a second channel, no copy sitting in someone else's backup, and an access log with a timestamp.

That is what a [patient portal](/en/blog/dental-patient-portal/) does, and it is why this is the recommendation here rather than encrypted email. In Dentalpin the document is published to the portal and every access is logged with its author and timestamp, so email is reserved for the cases with no alternative. The source is open, so the access log is something you audit rather than take on trust, and the [price is published](/en/pricing/).

## Sources

- Information Commissioner's Office, "Encryption scenarios" (encrypted email, encrypted attachments and faxing sections): [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/encryption/encryption-scenarios/). Consulted 7 October 2026. The ICO notes this guidance is under review following the Data (Use and Access) Act.
- 45 CFR 164.312(e), Transmission security, HIPAA Security Rule, as published by the US Government Publishing Office: [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2023-title45-vol2/xml/CFR-2023-title45-vol2-sec164-312.xml). Consulted 7 October 2026.
- Regulation (EU) 2016/679 and the UK GDPR, Articles 9, 28 and 32: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulted 7 October 2026.
