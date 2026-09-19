---
title: "Phased dental treatment plans: what order, what the patient sees, what the software has to hold"
description: "Why a dental treatment plan is sequenced in phases, what has to happen before each one closes, and what the software does when a patient accepts only part of it."
pubDate: 2026-09-19
translationKey: plan-tratamiento-dental-por-fases
tags: [treatment-plan, quotes, practice-management, dental-software]
---

The order of a dental treatment plan is not a matter of taste: pain and infection first, then active disease, then rebuilding, then maintenance. Restoring a mouth that still has active disease means doing the work twice, and the European Federation of Periodontology guideline puts that sequence in writing as four steps, each re-evaluated before the next one opens.

Below is that sequence with its source, what has to happen before a phase closes, and the half almost no article covers: what the software does when the patient accepts phase one and leaves the rest hanging.

This is not a clinical protocol. What a particular patient needs is a decision for the clinician treating them.

## The order the evidence does settle

Periodontics is where the idea of a phase is best documented, because the EFP published its clinical practice guideline for stage I to III periodontitis in 2020 and organises it exactly this way. Its own graphic adaptation sets out four steps:

1. **Step 1.** Behaviour change: patient control of supragingival biofilm, professional cleaning and risk factor control such as smoking and diabetes. The document says this step "should be frequently re-evaluated".
2. **Step 2.** Subgingival instrumentation. It is applied "in all periodontitis patients, irrespective of the stage of their disease" and is re-evaluated after an adequate healing period.
3. **Step 3.** Only for the sites that did not respond adequately to step 2: repeated subgingival instrumentation, or resective or regenerative surgery. With moderately deep residual pockets of 4 to 5 mm, the guideline recommends repeating non-surgical instrumentation first.
4. **Step 4.** Supportive periodontal care, with visits "at intervals of 3 to a maximum of 12 months", tailored to each patient's risk profile.

The same document sets the endpoint of active treatment as no pockets deeper than 4 mm with bleeding on probing. That sentence is what makes a phase a phase: there is a measurable condition deciding whether the plan moves forward or repeats the step.

> **Re-evaluation is the boundary between phases, not paperwork.** If the software lets a phase close with no record of the measurement that closes it, the plan is a list of treatments ordered by intention rather than by evidence.

For the most destroyed cases, the EFP stage IV guideline (June 2022) adds what comes after: orthodontic tooth movement, splinting, occlusal adjustment and tooth or implant supported fixed and removable prostheses. It states that the periodontal component "should follow the CPG for the treatment of periodontitis in stages I-III", and that a definitive diagnosis and frequent re-evaluations during and after treatment come before planning. In practice that is several clinicians sharing one running order.

![Treatment plan split into stages, with the treatments in each one](/screenshots/treatment-plan.png)

*A treatment plan with its stages, each holding the treatments that belong to it.*

## What has to happen before a phase closes

Writing "phase 1, phase 2, phase 3" on a sheet of paper orders nothing. What orders it is saying what closes each one, and that is decided before the plan is ever shown to the patient.

- **The exit condition.** A measurement, not a feeling: probing depths coming down, a lesion healing, a root canal still symptom free at the agreed interval. If the [periodontal chart](/en/blog/periodontal-charting-software/) is what closes the phase, it belongs in the record rather than in the clinician's memory.
- **What can be pulled forward.** There is nearly always work in a later phase that does not depend on the earlier one. Flag it, because that is what lets a last minute gap in the schedule get used without breaking the sequence.
- **What can never be pulled forward.** The short list is the important one, and it is the one the software should stop the front desk booking by accident.
- **Who decides.** In a practice with several clinicians, someone signs off the re-evaluation. If the record does not say who, the next phase opens on its own.

## The patient accepts one part and leaves the rest

This is the common case and the one a badly built plan loses. There are three ways to hold it together and only one survives an eight month treatment.

| | One quote for the whole plan | One quote per phase | Plan with phases and linked quotes |
|---|---|---|---|
| Partial acceptance | ✗ All or nothing | ✓ Accept the phase they accept | ✓ Accepted phase by phase |
| What happens to the rest | ✗ Lost with the quote | ~ Left as a loose quote | ✓ Still in the plan, pending |
| A price rise mid plan | ✗ Reopens the whole plan | ✓ Only affects what is unissued | ✓ Only affects what is unissued |
| Clinical traceability | ~ The plan runs separately | ✗ Each quote runs separately | ✓ Treatment, phase and quote joined |
| Front desk workload | ✓ A single document | ✗ Several documents to reconcile | ~ More setup at the start |

The middle column wins in the short term and is what half the profession runs: a quote per phase, signed when the phase comes round. What it loses is the thread, because the phase three nobody accepted stops existing the moment that quote expires.

![Quote list showing accepted, pending and expired states](/screenshots/budgets.png)

*One phase as a quote, with its treatments, its total and its validity date.*

What was left unaccepted is not a dead quote, it is the next conversation. How that follow-up works is in [following up on treatment quotes](/en/blog/follow-up-dental-treatment-quotes/).

## A plan that runs for months

Eight months is plenty of time for things the plan treated as fixed to change. Three always do:

- **The fee schedule goes up.** What was accepted and signed is honoured; what has not been presented yet goes out at the new price. What to version and how is in [how a treatment price is set](/en/blog/dental-fee-schedule/).
- **The clinician changes.** One associate starts phase two and another finishes it. The plan has to record who did each treatment rather than who signed the plan, or the month end pay run comes out wrong.
- **The plan itself changes.** A re-evaluation can turn phase three into something else. That is not corrected on top of the original: it is versioned, because what the patient accepted has to stay readable exactly as they accepted it.

> **In Germany the procedure itself enforces what is only good practice elsewhere.** There a prosthetic plan goes to the insurer first, and per the KZBV, if it turns out during treatment that the plan has to be changed, it must be submitted again. A plan that changes with no trace of its previous version is the problem that rule solves.

## What the patient is actually shown

A phased plan explains better than a long quote, and that is the commercial half of it, but it only works if what is shown is honest:

- **What happens in each phase and why it comes first.** One line per phase is enough.
- **What each phase costs on its own**, not only the total, which is the number that frightens people.
- **What happens if they stop after phase two.** That is the question patients do not ask out loud. Answering it up front avoids the bad conversation six months later.
- **How long it takes.** A rough date per phase is worth more than one overall deadline.

If the plan comes out of the first appointment, what to record that day is in [the first visit protocol](/en/blog/first-dental-visit-protocol/).

## Where the software comes in

A phased plan survives on paper for about a phase and a half. After that the treatment has to know which phase it belongs to, the phase has to know what closes it, and the quote has to know which phase it came from. In Dentalpin that is plans with stages, quotes tied to each stage and the patient timeline showing where the plan currently stands; it is open source, it can run on the practice's own server, and what it costs is on [pricing](/en/pricing/).

## Sources

- European Federation of Periodontology (EFP), graphic adaptation of the four steps of "Treatment of stage I-III periodontitis – The EFP S3-level clinical guideline": [efp.org](https://www.efp.org/fileadmin/uploads/efp/Photos/Continuing_Education/Teatment-stage-Perio_Steps-ALL_071022-3.pdf). Consulted 19 September 2026.
- Sanz M. et al., "Treatment of stage I-III periodontitis – The EFP S3 level clinical practice guideline", *Journal of Clinical Periodontology*, 2020: [doi 10.1111/jcpe.13290](https://onlinelibrary.wiley.com/doi/10.1111/jcpe.13290). Consulted 19 September 2026.
- EFP, "Guideline on treatment of stage IV periodontitis", published June 2022: [efp.org](https://www.efp.org/education/continuing-education/clinical-guidelines/guideline-on-treatment-of-stage-iv-periodontitis/). Consulted 19 September 2026.
- Herrera D. et al., "Treatment of stage IV periodontitis: The EFP S3 level clinical practice guideline", *Journal of Clinical Periodontology* 49(S24), 4-71, 10 June 2022, abstract consulted at the [University of Birmingham research portal](https://research.birmingham.ac.uk/en/publications/treatment-of-stage-iv-periodontitis-the-efp-s3-level-clinical-pra/). Consulted 19 September 2026.
- Kassenzahnärztliche Bundesvereinigung (KZBV), "Zahnersatz: Antrag bis Abrechnung": [kzbv.de](https://www.kzbv.de/patienten/patient-und-krankenkasse/zahnersatz/zahnersatz-antrag-bis-abrechnung/). Consulted 19 September 2026.
