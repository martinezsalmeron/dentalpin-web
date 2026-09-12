---
title: "Allergies and medical alerts: make them impossible to miss"
description: "Six fields per allergy, three valid answers when there are none, and the four screens an alert has to appear on by itself. With the official sources."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [allergies, medical-alerts, clinical-records, patient-safety, gdpr]
---

An allergy only protects the patient if it lives in a field of its own and shows up unprompted on the screens where you prescribe and where you treat. Record six things for each one: the substance, what happened to the patient, how severe it was, whether it is still current, whether it is confirmed or only reported, and when and who said so.

When there are none, that gets written down too. A blank allergy field does not say the patient has no allergies. It says nobody has asked yet, and those two statements lead to different decisions.

## Six fields per allergy, and none of them is free text

An allergy typed into the notes box disappears the day that box runs to eleven lines. It stops being filterable, it stops being able to warn anyone, and it stops being migratable to another system.

| Field | What goes in it | Example |
|---|---|---|
| Substance | The active ingredient or material, never just the brand | Amoxicillin, latex, chlorhexidine, nickel |
| Manifestation | What actually happened, in clinical terms | Urticaria, angioedema, bronchospasm, anaphylaxis |
| Severity | How bad the reaction that already happened was | Mild, moderate, severe |
| Criticality | Potential harm from a future exposure | Low, high, unable to assess |
| Clinical status | Whether the allergy is still current | Active, inactive, resolved |
| Verification | Where the information comes from | Unconfirmed, confirmed, refuted, entered in error |
| Date and source | When it was recorded and who reported it | 12/03/2024, the patient; allergy clinic report |

Those fields are not a convention we invented. They are the elements of the HL7 FHIR AllergyIntolerance resource, the standard health systems use to exchange this information, and using its value sets is what lets an allergy survive a change of software.

> **Severity and criticality are two different fields, and merging them empties both.** FHIR puts severity on the specific reaction that occurred (mild, moderate or severe) and criticality on the substance, as an estimate of the potential harm of a future exposure. Software that offers only one dropdown makes you choose which of the two you lose.

![Patient record on the info tab, medical history expanded, with the allergies section showing NSAIDs flagged at high criticality](/screenshots/patients.png)

*Medical history kept as separate fields: allergies, medications, systemic diseases and special conditions. The orange tag beside the allergy is its criticality level.*

## "None known" is data. An empty field is not

The UK NICE guideline CG183 on drug allergy asks clinicians to document a patient's drug allergy status as one of three things: drug allergy, none known, or unable to ascertain. All three are information and all three get recorded.

A blank field is none of the three. It is the absence of the question, and in a practice where several people enter records it is impossible to tell apart from an oversight.

> **An empty field and a recorded "none known" look almost identical on screen and mean opposite things.** The first says nobody asked. The second says somebody asked and the answer was no. If the software cannot tell them apart, the practice cannot tell whose history is still missing.

## Allergy, intolerance and side effect are not the same thing

The same NICE guideline asks that drug allergy status be documented separately from adverse drug reactions and be clearly visible to every clinician who prescribes. FHIR carries this in a field with two values, allergy or intolerance, separating the immune mechanism from everything that is not one.

In practice the distinction runs like this:

- **Allergy.** There is an immune mechanism behind it. Urticaria, angioedema, bronchospasm or anaphylaxis after exposure.
- **Intolerance.** The patient reacts badly with no such mechanism involved.
- **Side effect.** A known effect of the drug. Nausea on an antibiotic is the everyday example.

Filing all three under allergies is convenient on the day and expensive afterwards, because it removes treatment options the patient actually tolerates and it dilutes the real allergies among entries that are not.

## Most penicillin allergy is not penicillin allergy

This is where the distinction above costs the most, in money and in outcomes, and there is an official figure to size it.

> **The CDC puts it like this: 10% of US patients reported a penicillin allergy and, when clinicians evaluated them, fewer than 1% were truly allergic.** The CDC adds that penicillin-specific IgE antibodies may decrease over time, so some patients go on to tolerate later what they did not tolerate before.

None of that entitles a dental practice to ignore a reported allergy. What it changes is what gets written down, because a label with no history behind it can never be reviewed.

If the record says "allergic to penicillin" and nothing else, that label follows the patient for life. If it records the actual reaction, the year it happened and who asserted it, an allergist has something to evaluate and, where appropriate, remove.

## The alerts that are not allergies

The allergy box is the famous one, but half of what has to be seen before you start is not an allergy at all.

- **Anticoagulants and antiplatelets.** They change the planning of any bleeding procedure, and they are medication rather than allergy, so they need a field of their own.
- **Bisphosphonates and denosumab.** Both oral and intravenous routes matter, and what you need at hand is the drug, the indication and the start date.
- **Infective endocarditis risk.** The 2023 European Society of Cardiology endocarditis guideline recommends antibiotic prophylaxis for patients at high risk before at-risk dental procedures, and defines both terms. High risk: previous endocarditis, surgically or transcatheter-implanted prosthetic valves, cardiac valve repair material, congenital heart disease (excluding isolated valve abnormalities) and a ventricular assist device as destination therapy. At-risk procedures: extractions, oral surgery, and any manipulation of the gingival or periapical region, including scaling and root canal treatment.
- **Pregnancy and breastfeeding.** With a date, because it is the only alert on this list that expires by itself.
- **Diabetes, epilepsy and immunosuppression.** They change the appointment, not only the treatment.

That third point is the one that most often arrives late, because scaling sits on the at-risk list and tends to be booked as a routine hygiene visit. The same guideline recommends professional dental cleaning and follow-up at least twice a year for high-risk patients, so these are frequent appointments and the alert has to reach the schedule, not just the record.

## Information you have to go looking for is not an alert

An allergy recorded perfectly on a tab nobody opens protects the patient exactly as much as no record at all. These are the four screens it has to surface on by itself:

1. **The record header**, visible before you open any tab.
2. **The charting screen**, where the work happens and where today's treatment gets decided.
3. **The prescription**, at the moment the drug is chosen.
4. **The schedule**, before the patient walks in, which is while there is still time to prepare something.

![Patient record with clinical alerts highlighted in red beside the odontogram, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*The clinical alert pinned to the left column, next to the odontogram. Nothing has to be opened to see it, and it stays there when you switch tabs.*

## Who sees it, and who can change it

Under the GDPR, health data is a special category. Article 9(1) prohibits processing it unless one of the exceptions in 9(2) applies, and Article 5(1)(c) adds data minimisation: adequate, relevant and limited to what is necessary.

That does not stop reception from seeing an alert. It does force a decision about what each role needs to see, and it is rarely the same thing:

- **Reception** needs to know the appointment requires preparation, not the diagnosis behind it.
- **The surgery** needs the full alert.
- **Everyone** needs the change stamped with date, time and author, because Article 5(1)(f) requires appropriate technical and organisational measures, and deleting an allergy without a trace is not one.

Article 5(1)(d) supplies the half that gets forgotten: data must be accurate and kept up to date. An allergy that testing has refuted gets updated, not left in place just in case.

## Keeping it current

1. **Fill it in completely at the first visit**, including "none known" where that is the answer.
2. **Confirm it in one line at every visit.** This is not repeating the history, it is asking whether there is new medication or a new diagnosis.
3. **Re-read it before prescribing or giving an injection.** That is the only moment an alert can still prevent the harm.
4. **Update verification and date when a report arrives**, and record where it came from.
5. **Review the whole thing when reactivating a lapsed patient.** Two years away is two years of new medication.

## Where software helps and where it does not

No system takes the history for you. What the software decides is whether the answer can be stored in a field with a status, a criticality and a date or ends up in a paragraph of free text, and which screens it reappears on without anyone having to remember to look.

Dentalpin keeps allergies, medication, systemic diseases and special conditions as separate medical history fields with a criticality level, and pins the alerts next to the odontogram and in the record header. Plans are on [pricing](/en/pricing/).

This is not legal or clinical advice. The professional guidelines that apply to you and the national law where your practice operates govern over any general recommendation in this article.

## Sources

- HL7 FHIR R4, AllergyIntolerance resource (type, category, criticality, clinicalStatus, verificationStatus and reaction.severity elements): <https://hl7.org/fhir/R4/allergyintolerance.html> (consulted 12 September 2026).
- NICE clinical guideline CG183, *Drug allergy: diagnosis and management*, recommendations on documenting drug allergy status. Full National Clinical Guideline Centre text: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (consulted 12 September 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (consulted 12 September 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), pp. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (consulted 12 September 2026).
- Regulation (EU) 2016/679 (GDPR), Articles 5(1)(c), 5(1)(d), 5(1)(f) and 9(1). Official text on EUR-Lex: <https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679> (consulted 12 September 2026).
