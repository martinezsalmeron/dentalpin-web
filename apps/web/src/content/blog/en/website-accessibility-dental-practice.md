---
title: "Website accessibility for a dental practice: what the law actually requires in the UK and the US"
description: "Neither the Equality Act nor the ADA has a small-business exemption, and neither turns on whether your site takes bookings. The opposite of the EU rule."
pubDate: 2026-10-24
translationKey: accesibilidad-web-clinica-dental
tags: [compliance, website, accessibility, appointments]
---

If your practice is in the UK or the US, the answer is less comfortable than the one practices in the EU get. In Great Britain the Equality Act 2010 puts a duty to make reasonable adjustments on service providers, and that duty is owed to disabled people generally rather than triggered by a patient complaining. In the US the Department of Justice takes the position that the ADA's requirements for businesses open to the public extend to the goods and services they offer on the web. Neither regime, in the provisions consulted here, carries a small-business exemption, and neither turns on whether your site takes bookings.

This is not legal advice. It is a reading of the official sources listed at the end, consulted on 24 October 2026. Northern Ireland has its own disability discrimination legislation, which was not consulted here.

## Why the EU question does not help you

It is worth saying early, because the question circulating in dental groups online is an EU question wearing an English title.

The EU's accessibility regime attaches to a closed list of services, and the one that catches a website is "e-commerce services", defined as services provided at a distance, electronically, at the individual request of a consumer, for the purpose of concluding a contract. It also exempts microenterprises providing services. So in Spain, Italy or Poland a practice reasonably asks two questions: can a patient close an appointment on my site, and do I have fewer than ten staff.

In the UK and the US, both questions are close to irrelevant. The duties below do not come from a list of covered services and do not switch off below a headcount.

## Great Britain: the duty is anticipatory, and that is the whole point

Section 29 of the Equality Act 2010 sets the base rule for anyone "concerned with providing a service to the public". A service provider "must not discriminate against a person requiring the service by not providing the person with the service", and must not discriminate as to the terms of provision, by terminating provision, or "by subjecting B to any other detriment".

Section 29(7) then attaches the heavier obligation: "A duty to make reasonable adjustments applies to ... a service-provider". What that duty contains is in section 20, and it is three separate requirements.

1. **The first requirement** bites "where a provision, criterion or practice of A's puts a disabled person at a substantial disadvantage" compared with people who are not disabled, and obliges A "to take such steps as it is reasonable to have to take to avoid the disadvantage".
2. **The second requirement** is the same test applied "where a physical feature puts a disabled person at a substantial disadvantage".
3. **The third requirement** applies "where a disabled person would, but for the provision of an auxiliary aid, be put at a substantial disadvantage", and obliges A to take reasonable steps "to provide the auxiliary aid".

A website is not a physical feature, so the first and third requirements are the ones that matter: a booking practice that only works with a mouse is a practice, and an accessible alternative format is an auxiliary aid.

> **The duty is owed to disabled people in general, not to the patient in front of you.** Schedule 2, paragraph 2(2) is explicit: "the reference in section 20(3), (4) or (5) to a disabled person is to disabled persons generally." Paragraph 2(4) sets the relevant matter as "the provision of the service, or the exercise of the function, by A."

That is the sentence that decides how a practice should behave. You are not obliged to fix things once somebody complains. The duty is already running, measured against disabled people as a group, which is why waiting for a complaint is the wrong posture rather than a cautious one.

![Practice diary in day view, with appointments laid out by time and by operatory](/screenshots/schedule-day.png)

*The diary an online booking writes into: time, duration and the operatory it is assigned to.*

Two limits are real and worth knowing. Everything in section 20 is qualified by what is "reasonable", which is a proportionality test rather than a blank cheque. And Schedule 2, paragraph 2(7) provides that nothing in the paragraph requires a service provider to take a step which would fundamentally alter the service.

What failure means is in section 21. A failure to comply with any of the three requirements is a failure to comply with the duty, and section 21(2) is blunt about the consequence: "A discriminates against a disabled person if A fails to comply with that duty in relation to that person." It is not a regulatory box left unticked, it is discrimination under the Act, and section 21(3) routes enforcement through that framework rather than leaving it separately actionable.

## The US: Title III, and no technical standard to point at

The Department of Justice's own guidance explains that Title III of the ADA covers private businesses that are open to the public, which the Act calls "public accommodations", and that the Department's position is that these requirements extend to the goods and services those businesses offer on the web.

The part practices find frustrating is the next one, and it is better to know it than to be surprised by it. The DOJ guidance states that the Department has no regulation setting detailed technical standards for web accessibility. It points to the Web Content Accessibility Guidelines and Section 508 standards as guidance, saying "Existing technical standards provide helpful guidance", and leaves businesses to choose how they meet the ADA's nondiscrimination and effective communication requirements.

> **There is no certificate to buy and no conformance level the statute names.** The guidance points at WCAG without adopting it as the legal test, and the page itself states that the Department's guidance documents are not legally binding. A vendor selling "ADA compliance" as a product is selling something the DOJ has not defined.

No small-business exemption appears on that page. Practices sometimes reason by analogy from the fifteen-employee threshold in employment discrimination law, but that is a different title of a different part of the Act and it does not carry across to the public accommodations duty.

## What the two regimes have in common

Despite coming from opposite directions, they converge on something practical, and it is the useful part of the comparison.

- **Neither asks what kind of site you run.** The EU question about e-commerce services has no counterpart. A brochure site that a blind patient cannot read to find your phone number is already the thing both regimes are about.
- **Both are about outcomes, not audits.** "Substantial disadvantage" and "effective communication" describe what happens to a person, not whether a scanner returned zero errors.
- **Both are proportionate.** "Reasonable" in the Equality Act and the DOJ's flexibility about how to comply mean a two-chair practice is not held to the standard of a hospital group.
- **Neither is satisfied by an overlay widget.** That follows from the first three rather than from any provision, but it is worth saying, because the plug-in that promises compliance in one line of JavaScript addresses neither test.

## The table that settles the usual arguments

| What a practice says | Verdict |
|---|---|
| "We only have a brochure site, so the rules do not apply" | ✗ True under the EU regime, not under the Equality Act or Title III |
| "We have fewer than ten staff, so we are exempt" | ✗ No size threshold appears in the provisions consulted |
| "Nobody has complained" | ✗ Schedule 2 para 2(2) owes the duty to disabled persons generally |
| "We will fix it if someone asks" | ✗ Same point: the duty is already running |
| "We bought an accessibility overlay" | ~ May help some users, settles neither legal test on its own |
| "We target WCAG 2.2 AA and record what we fixed" | ✓ Not a statutory safe harbour, but it is the evidence both regimes reward |
| "Changing it would fundamentally alter the service" | ~ A real limit in Schedule 2 para 2(7), and one that has to be argued, not assumed |
| "Our booking page is run by a third party" | ~ Does not answer who provides the service to the patient; read the contract |

## What to do about it, in order

1. **Try to book an appointment on your own site using only the keyboard.** No mouse, no trackpad. Tab through it. Most practices find the problem in under two minutes, and it is usually a date picker.
2. **Turn on the screen reader already on your computer and do it again.** VoiceOver on a Mac, Narrator on Windows. You are listening for fields that announce nothing.
3. **Check contrast and text size on a phone.** Then check that the page still works when text is enlarged, which is where fixed-height containers fail.
4. **Give your patients a second route that is not the website.** A phone number that a person answers is an auxiliary route in the plain sense, and it costs nothing to publish prominently.
5. **Write down what you found, what you fixed and what you decided not to fix and why.** Both regimes turn on reasonableness, and reasonableness is evidenced by a dated record, not remembered.

![Home screen with today's appointments, who is in the practice, overdue payments and recent patients](/screenshots/home.png)

*The day at a glance: appointments, who is in, and what is outstanding. What the patient meets on the website is the other side of this screen.*

## The cheapest fixes are the ones no law names

Worth saying plainly, because the legal framing makes this feel bigger than it is. The things that actually shut patients out of a dental website are mundane and mostly free to fix.

- **Form fields without labels.** A screen reader announces "edit text" and the patient has no idea what goes in it.
- **Date pickers that need a mouse.** The single most common reason an online booking cannot be completed without one.
- **Low-contrast grey text** on the opening hours, which is the information people most often come for.
- **Images carrying information with no alternative text**, most often the practice address rendered as a graphic.
- **Autoplaying video**, which is a problem for far more people than it is a feature for.

None of those requires a redesign, and all of them are the same work whichever side of the Atlantic the practice is on.

## Where software helps and where it does not

No practice management system makes a website accessible. That lives in the website, with whoever builds it, and a vendor who tells you otherwise is describing something else.

What software decides is narrower and still useful: whether the booking a patient completes lands somewhere you can see. In [Dentalpin](/en/pricing/) online booking writes straight into the diary, so the practice knows exactly what is published and which slots are exposed, which is what step 1 above needs before you can test anything honestly. What it cannot do is tell you whether a reasonable adjustment was reasonable. That is a judgement about your practice, and where it matters, a question for a solicitor or attorney.

## Sources

- Equality Act 2010, section 29 (provision of services), section 20 (duty to make reasonable adjustments), section 21 (failure to comply), and Schedule 2, paragraph 2 (services and public functions: reasonable adjustments). Sections 29 and 20: [legislation.gov.uk/ukpga/2010/15/section/29](https://www.legislation.gov.uk/ukpga/2010/15/section/29) and [section/20](https://www.legislation.gov.uk/ukpga/2010/15/section/20). Section 21: [section/21](https://www.legislation.gov.uk/ukpga/2010/15/section/21). Schedule 2: [schedule/2](https://www.legislation.gov.uk/ukpga/2010/15/schedule/2). Consulted 24 October 2026.
- United States Department of Justice, "Guidance on Web Accessibility and the ADA", on the application of Title III to businesses open to the public and on the absence of a regulation setting detailed technical standards: [ada.gov/resources/web-guidance](https://www.ada.gov/resources/web-guidance/). Consulted 24 October 2026. The page states that the Department's guidance documents are not legally binding.
- For the EU comparison drawn above, the three transpositions of Directive (EU) 2019/882 consulted the same day: Spain's Ley 11/2023 (articles 2.2.f, 3.3 and annex VII), Italy's d.lgs. 82/2022 (articles 1, 2 and 3) and Poland's ustawa of 26 April 2024 (articles 3, 4 and 73).
