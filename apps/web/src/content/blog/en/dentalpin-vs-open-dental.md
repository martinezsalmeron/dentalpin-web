---
title: "Dentalpin vs Open Dental: the other open one, and what changed"
description: "Open Dental went proprietary at version 24.4 and it publishes its prices. A sourced comparison with Dentalpin, which is open source and free to run."
pubDate: 2026-08-07
tags: [comparison, open-dental, dental-software]
---

For years Open Dental was the answer when a dentist asked whether any practice management software was open source. That answer changed, and Open Dental is the one who says so: **in version 24.4 the licence moved from GPL to proprietary**.

We make Dentalpin, so we are not neutral. What we can be is accurate, and the accurate version of this comparison is more interesting than the marketing one.

> **How this comparison is sourced.** Every claim about Open Dental below comes from a page Open Dental publishes, linked and dated at the end. No aggregator blogs, no review sites. There is a whole section on when Open Dental is the better choice, because for a lot of readers it is.

## In thirty seconds

**Open Dental publishes its prices**, which almost nobody in this market does. $199 per month per location in the US, dropping to $149 after twelve months, covering every computer in the office and up to three providers. Telephone support is in that number.

**Dentalpin is open source and has no licence fee**, on your own server, with the source published rather than shared under NDA. It is from 2026, it runs on Linux, and someone has to own the server.

The question that decides it: do you want the software to be someone's product with a support line, or your infrastructure with your name on the root password.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What Open Dental is

Windows practice management software, headquartered in the United States, and described on its own home page as "comprehensive, highly customizable dental practice management software at an affordable price for practices of any size."

The deployment is a MySQL server plus Windows workstations. Open Dental lists Windows 11 and Windows Server 2016 through 2025 as supported, notes that Home editions "are sometimes unacceptable because of connection and networking limits", and says Windows 10 S and 11 S are not supported at all because the software cannot be installed through the Microsoft Store. For the server specifically it adds that "as an alternative to Windows, the server can run Linux or MacOS-X".

There is a hosted option, Open Dental Cloud, and it is still a Windows story on the desk: "ODCloudClient must be installed on a Windows machine to bridge to third-party softwares", with 20 Mbps down and 10 Mbps up recommended.

The interoperability is the genuinely strong part. The home page advertises "100s of Bridges to Other Programs" and "20+ Clearinghouses", which is the kind of surface area that takes twenty years to build and cannot be reproduced by writing better code.

### The licence, precisely

This is the part worth reading twice, because the product name is now the opposite of the licence.

> **"In version 24.4, the Open Dental license changed from open source GPL to proprietary."** That is Open Dental's own wording. Versions from 24.4 onward are proprietary; the GPL applied before that. Source code, per their source code page, "is sometimes made available to certain large customers under a signed Non Disclosure Agreement."

Open Dental is clear that this changed the licence and not the deal: "There was no change in price, support, database access, or how the software was used." Database access in particular stays put, and they claim on the same page that "the database still remains more open than any other dental software on the market."

That is a fair claim and it matters. A practice on Open Dental can point a reporting tool straight at MySQL, and Open Dental publishes the database schema on its own site. Plenty of vendors treat their schema as a trade secret.

What it is not is open source. If you chose Open Dental because you could read and keep the code, version 24.4 is where that ended.

## What Dentalpin is

Open source dental practice management software under BSL 1.1, converting to Apache 2.0 after four years. You download it, run it on your own server or any cloud you pick, and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. The stack is a browser, Caddy, the API, the frontend and PostgreSQL, so the workstation is any machine with a browser rather than a Windows install.

It is far younger, it has nothing like Open Dental's bridge catalogue, and both of those are real. We come back to them.

![Patient record in Dentalpin showing the odontogram, clinical alerts, the active treatment plan and the next appointment](/screenshots/dental-chart.png)

*Patient record: odontogram, clinical alerts, active plan and next appointment on one screen.*

## Side by side

Verifiable rows only, and the price rows are unusual in this series because both products actually publish one.

| | Open Dental | Dentalpin |
|---|---|---|
| Licence | ✗ Proprietary since v24.4 (GPL before) | ✓ Open source, BSL 1.1 → Apache 2.0 after 4 years |
| Source code | ~ To certain large customers under NDA | ✓ Published on GitHub |
| Published price | ✓ $199/month/location, $149 after 12 months | ✓ No licence fee |
| Price outside the US | ✓ $89/month/location, free in developing countries | ✓ No licence fee |
| Providers included | ~ Up to 3, then $20/month each | ✓ No per-provider fee |
| Contract | ~ 12 months, then month to month | ✓ None |
| Money-back guarantee | ✓ 90 days | ~ Nothing to refund |
| Workstations | ✗ Windows | ✓ Any browser |
| Server | Windows Server, or Linux/macOS | Linux, Docker |
| Database access | ✓ Direct MySQL, schema published | ✓ Direct PostgreSQL |
| Third-party bridges | ✓ 100s of bridges, 20+ clearinghouses | ✗ Very few so far |
| API | ~ Routed through Open Dental's servers | ✓ Direct REST on your server, OpenAPI |
| Telephone support | ✓ Included in the monthly fee | ✗ Telegram and GitHub |
| Support languages | ✗ English only, per their own page | ~ Site in nine languages, community support |

Two rows need the detail behind them.

The **API** difference is architectural rather than a feature gap. Open Dental's API web service runs at Open Dental headquarters: a request goes to `api.opendental.com`, is validated there, and is passed down to the practice's own server through an eConnector before the answer travels back. Offices do not host the API themselves. On a self-hosted Dentalpin the API is on your machine and nothing leaves the building unless you send it.

The **monthly fee** is not the whole invoice, and Open Dental says so on the fees page. Several eServices are priced separately: eClipboard at $45/month/location, Web Sched Recall at $75/month/location, ODMobile at $35/month/location, eConfirmations at $25/month/location, and integrated texting at $5/month/location plus $0.04 per message. Data conversion from other software is explicitly not included.

> **Compare like for like before deciding.** A US office with four providers, texting and recall booking is not paying $199. It is paying the base fee, plus $20 for the fourth provider, plus whichever eServices it turned on. All of those figures are published, which is exactly why Open Dental is easy to budget for and most of this market is not.

## Choose Open Dental if

This section is not a formality. For a large share of readers, especially in the US, this is the right answer.

- **You are in the United States and you bill insurance.** 20+ clearinghouses and hundreds of bridges is the whole ballgame, and it is not something a 2026 product can claim.
- **You want a phone number in the price.** Full telephone support is inside the monthly fee, along with every release. We have a Telegram channel and a GitHub issue tracker.
- **You want to know the number before you talk to anyone.** Open Dental publishes US, Canadian and international rates, per-provider add-ons and per-service fees on a public page. Almost no other vendor in any market we have looked at does this.
- **You are in a developing country.** Their own fees page lists the licence as free there, which is a real and unusual commitment.
- **Your imaging and third-party tools already bridge to it.** Working integrations beat theoretical ones every single time.
- **You want a 90 day exit.** The money-back guarantee is published and dated in months, not left to a salesperson.

A product with that bridge catalogue solves problems we do not yet know exist.

## Choose Dentalpin if

- **"Open" mattering to you was the reason you were looking.** Open Dental has told you plainly that from 24.4 it is proprietary. Ours is published and stays published.
- **You do not want the API path to run through your vendor.** On a self-hosted install, it does not.
- **Your workstations are not all Windows.** A browser is a browser.
- **The bill should not grow with the practice.** No per-provider fee, no per-location fee, no per-chair fee.
- **You want to audit the code** that holds clinical records, or have someone audit it for you.
- **You have technical people, or will hire them.** That is the honest precondition for running it yourself. If you do not have them, the [pricing page](/en/pricing/) sets out a managed option where the server is still your clinic's.

![Dentalpin's AI assistant showing its available workflows](/screenshots/ai-copilot.png)

*The assistant runs tasks against real clinic data, bounded by the permissions of whoever is signed in.*

## What migrating looks like

The `migration_import` module imports through [dental-bridge](https://github.com/dentaltix/dental-bridge), and it is deliberately not one button:

1. **Upload the export** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

> **Step 3 is where most migrations go wrong.** Two practices never code procedures the same way, and a silently guessed equivalence produces claims and invoices that are wrong in ways nobody notices for months.

Coming from Open Dental has one advantage worth naming: the database is MySQL and you have direct access to it, so getting a complete export out is a query, not a support ticket. That is the same openness Open Dental advertises, and it works just as well on the way out as on the way in.

## The honest part

Open Dental is a serious product with an integration surface we cannot match and a pricing page more honest than most of this industry manages. If you are a US practice billing insurance through clearinghouses, it is very likely the right call today.

What we would not do is choose it for the name. It is proprietary from 24.4 by its own account, and if the reason you were searching was that you wanted the code, this is not the product that gives it to you any more. Dentalpin is the other bet: [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All consulted on 7 August 2026:

- [Open Dental home page](https://www.opendental.com/): product description, "100s of Bridges to Other Programs", "20+ Clearinghouses".
- [License](https://www.opendental.com/site/license.html): the change from GPL to proprietary in version 24.4, and the statements about price, support and database access.
- [Source Code](https://www.opendental.com/site/sourcecode.html): availability to certain large customers under NDA.
- [Fees](https://www.opendental.com/site/fees.html): US, Canadian, international and developing country rates, the reduced rate after 12 months, per-provider add-ons, eServices pricing and data conversion.
- [Order Open Dental](https://www.opendental.com/site/order.html): what the monthly fee includes, the 12 month contract and the 90 day money-back guarantee.
- [Computer Requirements](https://www.opendental.com/site/computerrequirements.html): supported Windows versions, Home edition and S mode caveats, Linux or macOS as an alternative server.
- [Open Dental Cloud Requirements](https://www.opendental.com/site/opendentalcloudrequirements.html): ODCloudClient on Windows, bandwidth.
- [API Developer Setup](https://www.opendental.com/site/apisetup.html) and [api.opendental.com](https://api.opendental.com/): where the API service runs and how requests reach the office.
- [International Customers](https://www.opendental.com/site/countries.html): "Open Dental support is limited to English-speaking users."
- [Database Schema](https://opendental.com/site/databaseschema.html): the published schema document.
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

Something wrong or out of date here? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for Open Dental too.
