---
title: "The data processing agreement with your dental software vendor: what it has to say"
description: "What a DPA under Article 28 GDPR and a HIPAA business associate agreement must contain, clause by clause: instructions, sub-processors, audits and end-of-contract data."
pubDate: 2026-09-23
tags: [gdpr, hipaa, data-protection, contracts, vendors]
translationKey: contrato-encargado-tratamiento-software-dental
---

Your practice management vendor handles patient data on your behalf, so the law makes you sign a specific contract with them before they do. In the UK and the EU that is a data processing agreement under Article 28 of the GDPR, which lists eight terms the contract must contain. In the United States it is a business associate agreement under 45 CFR 164.504(e), which lists its own. Either way the obligation sits on the practice, not just the vendor, and a contract that only points at the statute does not satisfy it.

This is not legal advice. Every official source is listed at the end, consulted on 23 September 2026.

## Which contract you need

The two regimes ask similar questions and use different words, and a practice usually only needs one of them.

- **UK and EU practices** need a processing agreement under Article 28 GDPR. The ICO calls the required terms "the minimum required, but the controller and processor may agree to supplement them with their own terms".
- **US practices** need a business associate agreement. 45 CFR 164.504(e) sets out what that contract must provide for when a vendor handles protected health information on your behalf, and those provisions are listed further down.
- **Practices with patients on both sides** need to satisfy both, and the instruments do not substitute for each other because they require different things.

![Patient record with the information tab open: contact details, emergency contact and medical history with allergies and systemic conditions](/screenshots/patients.png)

*These are the categories of data the contract has to describe, which is why "patient data" is not a sufficient description.*

## The eight terms Article 28 requires

Article 28(3) first sets the frame, namely the subject matter and duration of the processing, its nature and purpose, the type of personal data, the categories of data subjects and the controller's obligations and rights. It then says the contract shall stipulate, "in particular", the following.

| Point | What the processor must do | What it means with dental software |
|---|---|---|
| (a) | Process personal data only on your documented instructions | No use of your patient base for the vendor's own ends |
| (b) | Ensure everyone authorised to access data is bound by confidentiality | Support engineers included, not only employees |
| (c) | Take all measures required by Article 32 | Encryption, backups, access control, written down |
| (d) | Meet the conditions for engaging another processor | The sub-processor list and your right to object |
| (e) | Assist you in responding to data subject rights requests | You can export everything about one patient who asks |
| (f) | Assist you with Articles 32 to 36 | Breach notice early enough for your own 72 hours |
| (g) | Delete or return all the data when the service ends | Your choice, not theirs |
| (h) | Give you the information to demonstrate compliance and allow audits | Including inspections by you or an auditor you mandate |

The sentence after point (h) is the one most contracts leave out: the processor must tell you immediately if, in its opinion, one of your instructions infringes data protection law.

> **A contract that restates the GDPR does not comply with the GDPR.** The European Data Protection Board puts it plainly: the processing contract "should not merely restate the provisions of the GDPR", and needs to include or reference the security measures to be adopted, an obligation on the processor to get your approval before changing them, and a regular review of them. A three-line security annex is precisely what that rules out.

## What the US equivalent asks for instead

The business associate agreement is shorter and differently shaped, and two of its requirements have no direct Article 28 twin.

1. **No use or disclosure** other than as permitted or required by the contract, or as required by law.
2. **Appropriate safeguards**, and compliance with the Security Rule for electronic protected health information.
3. **Report to you** any use or disclosure not provided for by the contract that it becomes aware of, including breaches.
4. **Bind its subcontractors** to the same restrictions and conditions.
5. **Make the information available** to the patient under § 164.524, for amendment under § 164.526, and for an accounting of disclosures under § 164.528.
6. **Make its practices and records available** to the Secretary for a compliance determination.
7. **Return or destroy** the protected health information at termination, or, where that is infeasible, extend the protections and limit further uses.

Point 5 is the one to check against the software rather than the contract. An agreement that promises an accounting of disclosures, on a system with no access log, is a promise nobody can keep.

## The sub-processor list is the part nobody reads

Cloud dental software rarely stands alone. Underneath there is usually an infrastructure provider, a backup service, an SMS or WhatsApp gateway and, increasingly, an AI vendor.

Article 28(2) gives you two shapes of authorisation, and it is worth knowing which one you signed. It can be specific, naming one sub-processor for one activity, or general, in which case the processor must tell you about any addition or replacement and **give you the opportunity to object**.

The EDPB sets out what you need in order to decide: a list of intended sub-processors including, for each, its location, what it will be doing, and proof of the safeguards it has implemented. It also warns that general access to a page the vendor updates from time to time is not enough, because the processor has to actively inform you of each new intended sub-processor.

Three questions settle most of it:

- **Where does the list live, and who tells me when it changes?** A published page is not notice.
- **How long do I have to object, and what happens if I do?** A number of days, and a consequence.
- **What sits outside the UK or the EEA?** Point (a) covers transfers, so this belongs in the contract rather than in a sales call.

## The clause about AI training you are allowed to refuse

This is where vendor contracts have moved in the last few years, and it gets signed unread.

The shape is recognisable. In a customer data section, the practice grants the vendor a licence over that data to train or improve models, for benchmarking or competitive analysis, or for any other purpose supporting the vendor's business operations, sometimes with the practice warranting that it has obtained the necessary consents. This is not hypothetical; vendors in this sector publish terms of that shape.

It is hard to reconcile with point (a). A processor that uses the data for its own purposes is no longer processing only on your documented instructions, and Article 28(10) says what happens next: a processor that determines the purposes and means of processing is considered a controller in respect of it.

The answer is a single sentence added to the agreement, limiting use of the data to performing the contract. Some vendors already write it themselves, and their contracts are the easiest ones to sign.

![Patient clinical record with the odontogram, clinical alerts, active treatment plan and next appointment](/screenshots/dental-chart.png)

*This is what has to come back to you before you authorise any deletion, and in a format another system can read.*

## What happens to the data when the contract ends

Point (g) gives you the choice between deletion and return, and it is the clause most often left blank.

The choice is not entirely free, because clinical record retention rules keep running after the software contract stops. Instructing a vendor to delete everything before you have the record back leaves you in breach of a different obligation, and no export is possible once the account is closed.

> **Export first, delete second, and the contract should set out both steps.** In what format the data comes back, within how many days, at what cost if any, and only then deletion confirmed in writing. "Return or deletion at the controller's option" with no format and no deadline is not something you can enforce on the day you need it.

## Self-hosting moves the contract, it does not remove it

This is the most common misreading among practices that run their own server. If the database sits on a machine in the building, it is tempting to assume there are no processors left.

There still are, just different ones:

1. **Remote support** sees screens full of clinical records for the length of the session.
2. **Offsite backup**, the moment a copy leaves the building, wherever it lands.
3. **The hosting provider**, if the server is rented in a data centre rather than sitting under the desk.
4. **The external IT contractor** who administers the machine, even if it is the same person as always.
5. **The software vendor itself**, whenever maintenance includes access to diagnose or update.

What genuinely changes is that the Article 32 measures become yours. Encryption, tested backups and access control stop being somebody else's contractual promise.

## How to review the agreement you already signed

You do not need a law firm for the first pass.

1. **Find the document.** If all you have is a service contract with no data protection annex, you already have your answer.
2. **Walk the eight points** in the table above and mark the ones that are missing.
3. **Locate the sub-processor list** and the objection mechanism, with its deadline.
4. **Read the customer data section** looking for licences, model training or aggregated analytics.
5. **Find the end of the contract**: return format, deadline, deletion confirmation.
6. **Ask in writing for whatever is missing.** A signed addendum fixes a contract; an email reply does not fix it, but it does date the conversation.

## What to require from the software so this is checkable

Three of the eight points depend on what the program does rather than on what the contract promises. Point (e) needs a complete export of one patient. Point (g) needs a complete export of the practice. Point (h) needs you to be able to show who accessed what.

Dentalpin is open source, so the Article 32 measures can be audited by reading the code rather than trusting an annex, and the data sits in a PostgreSQL database that produces a standard dump whenever you want one. You can host it yourself or take it managed, and the [pricing](/en/pricing/) is published.

## Sources

All consulted on 23 September 2026.

- Regulation (EU) 2016/679 (GDPR), Article 28 in full and Article 32. [EU Publications Office, CELEX 32016R0679](https://publications.europa.eu/resource/celex/32016R0679)
- ICO, "What needs to be included in the contract?", UK GDPR accountability and governance guidance. [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/)
- European Data Protection Board, Guidelines 07/2020 on the concepts of controller and processor in the GDPR, paragraphs 126 and 152. [edpb.europa.eu](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf)
- 45 CFR 164.504(e)(2)(ii), business associate contract requirements. [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2023-title45-vol2/xml/CFR-2023-title45-vol2-sec164-504.xml)
