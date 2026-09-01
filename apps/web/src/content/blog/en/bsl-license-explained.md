---
title: "What the BSL license is and what it lets you do"
description: "The BSL lets you download, audit and run the software on your own server, bars reselling it as a SaaS, and expires: every version turns open source in four years."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [licensing, open-source, bsl, contracts, dental-software]
---

The Business Source License lets you download the code, read it, modify it and run it on your own server without paying anything. It bars one thing: reselling that same software as a commercial service competing with whoever published it. And it expires, because every version turns automatically into a real open source license at most four years after it was published.

That third part is the one almost nobody reads, and it is the one that decides whether the license suits you.

> **The BSL is not an open source license, and it says so itself.** Its own notice opens with this: "The Business Source License (this document, or the 'License') is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License."

## The five blanks the publisher fills in

The BSL is not a fixed license like MIT or the GPL, where the text is always identical. It is a template with five blanks, and whoever publishes the software fills them in.

That means "it is under BSL" does not yet tell you what you can do. You have to look at the blanks.

| Parameter | What it decides |
|---|---|
| Licensor | Who publishes the software, and who you buy from if you need a commercial license |
| Licensed Work | Which software and exactly which versions this license covers |
| Additional Use Grant | How much production use is allowed for free |
| Change Date | The date that version changes license on its own |
| Change License | The open source license it turns into on that day |

Two of those five are the entire negotiation: the **Additional Use Grant**, which sets how far you can use it in production for free, and the **Change Date**, which sets when the restriction stops mattering.

The worked example published by the license authors themselves is MariaDB MaxScale. Its Additional Use Grant reads: "You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production." Under three servers, free. Above that, commercial license.

## What the BSL allows and what it does not

The base text grants you the right to copy, modify, create derivative works, redistribute and make non-production use. Production use depends on the blank above.

| Action | Under a BSL license |
|---|---|
| Download and read all the code | ✓ Always allowed |
| Modify it for your own case | ✓ Always allowed |
| Redistribute it with the license attached | ✓ Always allowed |
| Use it for testing and development | ✓ Always allowed |
| Use it in production | ~ Only as far as the Additional Use Grant reaches |
| Resell it as a competing commercial service | ✗ Needs a commercial license |

The amber row is the only one that needs careful reading. "Production" means real use that business value comes out of, which is your practice seeing actual patients, not a trial install on a laptop.

## Not being open source is not a flaw, but it is a fact worth knowing

The Open Source Initiative maintains the Open Source Definition, and its clause 6 says "the license must not restrict anyone from making use of the program in a specific field of endeavor." A BSL restricts exactly that: one field of endeavor, running a competing SaaS.

That is why it is not on the OSI list of approved licenses, and why its own text gets ahead of the question and says so.

In practice this reaches you in two specific places:

- **In a public tender or a procurement rule** that demands "open source software" in those words, a BSL does not meet the formal requirement even though the whole codebase is published.
- **In your IT provider's audit**, where it changes nothing. They can read the code, build it and verify what it does with the data exactly the same way.

## The change date is the clause that actually protects you

This is what separates the BSL from proprietary software that happens to show you the code. The restriction has an expiry date, and it is written into the file itself.

Version 1.1 of the license set a cap: the change date cannot be more than four years from the first public distribution of that version. And the destination license has to be GPL v2, GPL v3 or one compatible with them, which is to say a real open source license.

> **The change date applies version by version, not to the project as a whole.** The version you installed this year has its own date, and one published two years from now will have its own. Your install's clock started the day that version was published, not the day you installed it.

![Patient record showing clinical alerts, the active treatment plan and a timeline filtered by visits, treatments, payments and communications](/screenshots/patient-timeline.png)

*Years of clinical records inside one program. The change date is what decides what you can do with that program if the publisher disappears.*

Put another way: the BSL hands you a source code escrow you never had to negotiate. If the vendor shuts down, the version you are running still becomes open source on the day it was due, and any competent developer can maintain it from there. With a classic proprietary license, that day does not exist.

## How to read any BSL license in five minutes

You do not need a lawyer for the first pass. Open the repository's `LICENSE` file and look for these five things, in this order:

1. **Check the license version.** It has to say "Business Source License 1.1". Version 1.0 had no four-year cap.
2. **Read the Additional Use Grant in full.** It is the one sentence that decides whether your real use is free. If there is none, the base text only grants non-production use.
3. **Look at the Change Date.** It can be a fixed date or a formula ("four years from publication"). Anything beyond four years falls outside what 1.1 permits.
4. **Look at the Change License.** If it says Apache 2.0, GPL or MPL, you know exactly what you will get that day, because those are standard licenses with public text.
5. **Find the Licensed Work.** If it names specific versions, the license applies to those, and later ones can ship under different terms.

If all five are filled in and legible, you already know more about that software than most of the people installing it.

> **This is not legal advice.** It is a reading of a public document. For a signed contract, a tender, or any question about your own situation, that answer has to come from a lawyer.

## What this changes for a dental practice

Most of these clauses are written with software companies in mind, not a practice. Translated into what reaches you:

- **The BSL restriction almost never applies to you.** It bars running a competing SaaS. A practice using the program to see its own patients is not in that situation, as long as the Additional Use Grant covers that use.
- **You can install it on your own server** and run it without asking permission or activating anything, which is the biggest practical difference from per-seat licensed software.
- **Your IT provider can genuinely audit it.** They can read what is stored, where, and what leaves the building, without signing an NDA with anyone.
- **You have a written way out.** The change date is in the file, not in a sales promise.

![Diagram of the self-hosted stack: browser, Caddy on port 443, Nuxt frontend, API and PostgreSQL database](/diagrams/install-stack.svg)

*The setup a license like this permits: everything running on a server you own, with no activation call back to the vendor.*

## Dentalpin's license, blank by blank

Dentalpin is published under BSL 1.1, so you can run all five checks above on it. Its `LICENSE` file says, verbatim:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** "You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work."
- **Change Date:** four years from the date the licensed work is published.
- **Change License:** Apache License, Version 2.0.

Our own product FAQ sums it up this way: free for any clinic and any developer, with the single restriction that you cannot launch it as a competing dental SaaS, and with an automatic move to Apache 2.0 after four years. What it costs and what is included is on the [pricing page](/en/pricing/).

## Sources

- [Business Source License 1.1, license text](https://mariadb.com/bsl11/), MariaDB. Consulted 1 September 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Consulted 1 September 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Consulted 1 September 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Consulted 1 September 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Consulted 1 September 2026.
- The `LICENSE` file in the Dentalpin repository. Consulted 1 September 2026.
