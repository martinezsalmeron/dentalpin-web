---
title: "Running a multi-location dental practice: what to share and what to keep separate"
description: "One patient database or several, how the schedule separates location from operatory, what the access rules actually require, and which numbers only mean something per site."
pubDate: 2026-09-05
translationKey: gestionar-varias-clinicas
tags: [multi-location, group-practice, scheduling, access-control]
---

Opening a second location forces four decisions, and the first one shapes the other three: one patient database or one per site, whether a patient's record opens from any location, how the schedule keeps location and operatory apart, and which site each dollar of production and each box of supplies belongs to.

For most two and three site groups the answer is a single shared database with per-role access limits. Everything else can be corrected as you go. That one cannot, because undoing it means merging duplicate patient records two years later.

## Shared database or one system per location

Both are defensible. The choice depends on whether your locations are a group or separate businesses that happen to share an owner.

| | Shared database | Separate system per location |
|---|---|---|
| Patient seen at two sites | ✓ One record | ✗ Two records that never meet |
| Duplicates | ~ Still happen, but you can find them | ✗ Structural, invisible by design |
| Group-level reporting | ✓ Direct | ✗ Reconciled by hand in a spreadsheet |
| Isolating access between sites | ~ Depends on the software's permissions | ✓ Complete by construction |
| Selling or closing one location | ✗ Data has to be separated | ✓ Hand over the whole system |
| Sites owned by different entities | ~ Needs a written arrangement | ✓ Each keeps its own |

The first row decides it if patients move between your sites. The second to last decides it if you plan to sell one. Very few two or three location groups are in the second case.

> **The question is not how many locations you have, it is how many patients attend two.** If nobody from the north office ever visits the south one, two separate systems cost you nothing. The moment your orthodontist works Tuesdays at one and Thursdays at the other, a shared database stops being a preference.

## What the access rules actually require

This part is not a matter of taste, and it differs by where you practise.

**In the United States**, the HIPAA minimum necessary standard at 45 CFR 164.502(b) requires a covered entity to make reasonable efforts to limit protected health information to the minimum necessary to accomplish the intended purpose. There is a nuance worth knowing before you over-restrict a clinician: 164.502(b)(2)(i) says the standard does not apply to disclosures to, or requests by, a health care provider for treatment.

The workforce rule sits one section further on. 45 CFR 164.514(d)(2)(i) requires the covered entity to identify the people or classes of people in its workforce who need access to protected health information to carry out their duties, and for each of them the categories of information to which access is needed. A multi-location group that never wrote that list down has skipped the part that gets asked for first.

**In the EU and the UK**, health data is a special category under Article 9(1) of Regulation (EU) 2016/679. That has a direct consequence for a small group: Article 30(5) exempts organisations with fewer than 250 employees from keeping a record of processing activities, but the exemption does not apply where the processing includes Article 9(1) special categories. A dental practice processes them daily, so the Article 30(1) record applies at any headcount.

If your locations belong to one legal entity, there is one controller and one record with the sites described inside it. If a partner owns the second site and you jointly decide purposes and means, Article 26(1) makes you joint controllers and requires an arrangement setting out your respective responsibilities, the essence of which has to be made available to the patient under Article 26(2).

- **Shared software is not the test.** Who determines the purposes and means of the processing is. Sharing one system does not merge two companies, and running separate systems does not avoid joint controllership if the decisions are taken together.
- **Access is limited, not granted on trust.** Article 32(4) requires that anyone acting under the controller's authority with access to personal data processes it only on the controller's instructions.
- **Security has a stated content.** Article 32(1)(b) names ongoing confidentiality, integrity, availability and resilience of processing systems, and Article 5(1)(f) protection against unauthorised processing and accidental loss.

This is not legal advice. It is what the sources listed at the end say, consulted on 5 September 2026.

## The schedule is the first thing that breaks

Multi-location schedules fail in the same place every time: somebody books a provider into two cities at once.

1. **Location is a property of the operatory, not of the appointment.** A chair sits in a building and stays there. If location hangs off the appointment, sooner or later a north office appointment lands in a south office chair.
2. **Every provider has hours per location.** Not general hours plus a note saying "Tuesdays downtown". The system has to be able to refuse a booking outside them.
3. **Travel time is blocked like clinical time.** Forty minutes between sites is forty minutes you cannot sell, and if it is not on the schedule somebody will sell it.
4. **Whoever answers the phone sees every location.** If front desk staff cannot see the other site's openings, the patient asking for the soonest available waits two weeks while a chair sits empty fifteen minutes away.
5. **The default view is the viewer's own site.** Seeing all three at once is useful once a day for the person coordinating, and noise for everyone else.

![Weekly schedule view with appointments laid out in columns](/screenshots/schedule-week.png)

*A week in columns. Across locations, each column has to be a specific operatory in a specific building, not a provider who appears to be in two cities.*

## Numbers only say something when compared

A three location group has an advantage a single practice does not: every number has two neighbours to compare against. Using it means measuring the same thing in all three.

| Metric | Unit | What usually explains a gap |
|---|---|---|
| Chair utilisation | % of open hours booked | Gaps not refilled, rarely a shortage of patients |
| No-show rate | % of booked appointments missed | When and how you remind, not the neighbourhood |
| Case acceptance | % accepted of presented | Who presents it and with what support, not price |
| Production per chair hour | Amount per open hour | Procedure mix, not how fast anyone works |
| New patients | Starts per month | Referral sources and local marketing, genuinely site-specific |
| Outstanding balances | Amount and age | How firmly the front desk collects |

Two rules that head off arguments. Production belongs to the site where the treatment was done, not the one that raised the invoice. And utilisation is calculated against each site's real open hours, because a location open four afternoons does not compare to one open five full days.

![Reporting dashboard showing the period's indicators](/screenshots/reports.png)

*Period reporting. With several sites, the same report filtered per location is what turns a group number into a specific conversation.*

## Money, cash and numbering

Accounting is where most groups improvise and where it shows first.

- **A separate invoice series per location.** It makes the daily reconciliation, the card terminal settlement and the conversation with your accountant straightforward. Whether your jurisdiction requires it, permits it or is indifferent is a question for your accountant, not for a software vendor.
- **Reconcile cash per site, daily.** A group-level reconciliation confirms a discrepancy exists without telling you where.
- **One card terminal per site, settled against that site's payments.** A terminal shared between locations turns every close into an investigation.
- **Split shared costs by a written rule.** Which rule matters less than writing it down and not changing it mid-year.

## Supplies, sterilisation and anything physical

What cannot move in one click cannot be managed centrally.

1. **Stock is counted per site.** A group-wide minimum is a number that never triggers a reorder in the building that ran out.
2. **Transfers between sites are recorded as movements**, with a date and a name. A box that turns up at the other office with no record is a box lost from inventory.
3. **Sterilisation traceability follows the autoclave**, and the autoclave lives at one address. Cycle, load and indicator results are recorded where they happened.
4. **Lot and expiry checks are local.** Nobody audits the implants at the other site from a desk here.

## Permissions: who sees the other locations

The normal case is that most of the team does not need to see the other building at all.

- **Front desk at one site:** the schedule for every location, clinical records only for patients they handle.
- **A clinician working at two:** clinical access at both, no access to either site's cash.
- **Practice coordinator or owner-operator:** everything, with the access audit log switched on precisely because they see everything.
- **A non-clinical owner:** aggregate reports, not clinical records. It is the most awkward rule to apply and the easiest one to defend when someone asks.

> **Schedule access and clinical record access are two permissions, not one.** Merging them is what ends up letting a receptionist at one location read the clinical notes of patients in another city they have never met.

## Setting it up, in order

Order matters, because steps 2 and 3 cost far more done the other way round.

1. **Write down which entity owns what** before anything else. That determines whether you are one controller or two joint controllers, and the structure follows from it rather than the reverse.
2. **Deduplicate before you merge anything.** Merging two dirty databases produces one dirty database twice the size, and inherited duplicates are much harder to spot afterwards.
3. **Define the locations and their operatories**, with each site's real opening hours.
4. **Assign permissions by role and by location** before the first user account exists. Nobody revisits them later.
5. **Open the invoice series** and agree the shared-cost split.
6. **Set the baseline for the metrics above**, using each site's own previous quarter.
7. **Re-run duplicate detection after thirty days.** That is when the ones your own team created while learning the shared system show up.

## Where this lives

None of the above needs any particular software. A two location group with a well kept spreadsheet and clear permissions runs better than one with an expensive system and no written rules.

What is worth checking before you sign is whether the price grows with locations, chairs or providers, because that is the cost nobody projects when opening the second site. [Dentalpin](/en/pricing/) has a multi-clinic module you switch on when you need it, a single installation can host several clinics, and the fee is flat: it does not move when you add operatories or providers. It is open source and self-hostable, so all three sites' data stays wherever you decide to keep it.

## Sources

- 45 CFR 164.502(b), *Standard: Minimum necessary*: [ecfr.gov](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502) (consulted 5 September 2026)
- 45 CFR 164.514(d)(2), *Implementation specifications: Minimum necessary uses of protected health information*: [ecfr.gov](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.514) (consulted 5 September 2026)
- Regulation (EU) 2016/679 (GDPR), Articles 5(1)(f), 9(1), 26(1), 26(2), 30(1), 30(5), 32(1)(b) and 32(4): [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679) (consulted 5 September 2026)
