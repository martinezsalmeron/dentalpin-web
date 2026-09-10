---
title: "Dentalpin vs ABELDent: a genuinely free tier, a Windows-only cloud, and 1977"
description: "ABELDent has served practices since 1977 and gives a working version away free. Its cloud still runs on Windows workstations. Sourced, September 2026."
pubDate: 2026-09-10
tags: [comparison, abeldent, canada, dental-software]
---

ABELDent gives away a working copy of its real product, and its publisher says it has been serving healthcare professionals since 1977. Both facts change how this comparison has to be written.

We make Dentalpin, so we are not neutral. What we can be is accurate.

> **How this comparison is sourced.** Every claim about ABELDent below comes from a page or document they publish themselves, listed with the date consulted at the end. No aggregator blogs and no review sites. There is a section on when ABELDent is the better choice, because for a Canadian or US practice billing insurance it usually is.

## In thirty seconds

**ABELDent** is practice management software from ABELDent Inc., which describes itself as "Serving healthcare professionals since 1977" and states "5,000+" dental practices and "40,000+" users. It is sold in three forms: ABELDent Cloud, ABELDent Local Plus and a free version called ABELDent Freemium. Their home page scopes the product plainly: "Built for Canadian and U.S. dental practices."

**Dentalpin** is open source and costs nothing to license: no fee per chair, per dentist or per patient, the code published, the records on hardware you choose. In exchange it is from 2026, somebody has to own the server, and it does nothing for Canadian or US dental insurance.

The question that decides between them is not price, because both have a version that costs nothing. It is whether you want software you can read and move, or software from a company that has been serving healthcare practices since 1977, with a phone number that answers at two in the morning.

![Dentalpin home screen: today's appointments, who is in the clinic, overdue payments and recent patients](/screenshots/home.png)

*Dentalpin's home screen, with the demo data the installation ships with.*

## What ABELDent is

A Windows practice management system for dental practices in Canada and the United States, published by ABELDent Inc. of Burlington, Ontario, with a US office in Buffalo, New York. Their About page names Arun Rele (Chairman and CEO) and Bina Rele (VP Sales) as company owners, and notes six employees with thirty or more years of service, which is a fair signal of what kind of company this is.

There are three products, and their own comparison page is unusually clear about how the two paid ones differ:

- **ABELDent Cloud.** Live practice data sits in the "Microsoft Azure Cloud", data security is "Protected by Microsoft", server maintenance is "Automatic".
- **ABELDent Local Plus.** Live data sits on a "Local Server", data security is "Practice Responsibility", server maintenance is "Practice Responsibility". Local Plus comes with "Complimentary Microsoft SQL Server with purchase of SQL licenses through ABELDent, for every ABELDent workstation".
- **ABELDent Freemium.** Free, described as looking and feeling "identical to our premium software".

Functionally it is a mature, complete system. Their charting page publishes a "Visually appealing odontogram and periodontal chart", "Secure clinical notes with certification and built-in audit trails", customisable note templates and, unusually, "Supports voice controlled periodontal charting". Imaging is in the box for both paid products: "Bridge to many radiography software, direct capture intra-oral and photographic images, image store and management". Reporting comes in three layers, standard, analytic and a Report Generator for custom reports.

Two AI features are built in rather than bolted on. ABELDent Scribe turns conversations between provider and patient into "structured clinical notes" and lets you "Review, edit, and approve notes before saving". AI Radiograph Analysis identifies "potential conditions directly from dental images". Both are described as living inside ABELDent PCS, their Patient and Cloud Services layer.

### The one line that decides the deployment question

Their own product comparison table has a row most vendors would not print. Under "System Platform", the row "ABELDent Application Location" reads **"Local Workstations"** for ABELDent Cloud and "Local Workstations" for Local Plus. The same answer twice.

So ABELDent Cloud moves the database to Azure. It does not move the application to a browser. The cloud system requirements confirm it: "ABELDent Cloud is designed for use with Windows 10/11 Professional (English only)", it "does not support older or home operating systems", and "Apple Mac computers can be used using Boot Camp or Parallels emulation to run Windows".

> **A cloud product with a Windows-only client is a real constraint, not a detail.** It means every workstation is still a managed Windows machine, a Mac needs an emulator, and the interface is English only. If your reason for wanting cloud was to stop caring what is on the front desk PC, this does not deliver that.

There is one more line worth knowing before you size the hardware: "if you are using more than ten workstations, one workstation may need to run a Windows Server operating system".

### What ABELDent Freemium actually is

This is the part that makes the comparison interesting, because a free competitor deserves to be described accurately rather than dismissed.

Freemium is "a free version (no credit card required)" of the real product, "limited only by the performance constraints of a free Microsoft database". Their requirements page names that database: "MS SQL Server Express 2022 (or 2019) is the only database supported with the Freemium version of ABELDent". How many patients or years that ceiling represents is not published.

They also list who it is for, and dental practices are on the list: "Active Dental Practices that don't exceed the limitations of the free Microsoft database", alongside start-ups, hygiene practices and dental education programmes.

> **What free excludes is published in the footnote, and it matters.** "telephone support, one-on-one training, ongoing software updates, data migration, and the premium options described below are chargeable at our regular rates." Patient messaging is excluded outright: PCS "is not available in ABELDent Freemium". So Freemium is the software without the updates, the support, the migration or the patient communication.

That is a coherent product and an honest on-ramp. It is a different thing from free software: the price is zero, the code is not published, and the upgrade path runs to a subscription.

## What ABELDent costs

No price for the software appears anywhere on abeldent.com. Their FAQ answers the question by naming the four variables instead: how many workstations, whether data needs converting, how much training and support you need, and "Do you prefer to buy or rent the software license?"

That last one is worth flagging, because their product comparison page answers the same question differently: the "Pricing Model" row reads "Subscription" for both Cloud and Local Plus. Buy or rent on one page, subscription on another. Both are theirs, and a buyer should ask which applies to them.

Three prices *are* published, and none of them is the price of the software:

- **Support, by the hour.** Their Canadian support options form sets a "Bulk Rate of $150/hour plus taxes" for four hours or more bought up front, "$180/hour plus taxes" with a credit card on file, and "$240/hour plus taxes" pay as you go. A flat-rate monthly support plan also exists, with "no fixed term" and no figure.
- **Text messages, per segment.** "SMS messages are billed at $0.01 (one cent) per SMS message segment", charged monthly to the practice.
- **Guided Update Services, to move to v15.** "Regular List Price: $4,000", currently discounted to "$2,500" after the discount fell from 50% to 37.5% on 1 September 2026, less a "$500 credit" for completing their learning management system.

Purchases run through Microsoft Marketplace, which needs a Microsoft Work or School account. Those listings returned HTTP 403 to every request this run and are not used as a source here.

## What Dentalpin is

Open source dental practice management software. You download the code, install it wherever you want (your own server, whichever cloud you pick), and pay no licence per chair, per dentist or per patient.

Odontogram, periodontogram, scheduling, clinical records, treatment plans, quotes with signature capture, invoicing, payments, recalls and reports. Plus an AI assistant that carries out tasks against your real data, bounded by each user's permissions.

It runs in any modern browser, on Windows, macOS or Linux. What it does not have is imaging, electronic claims, provincial fee guides or anything else a North American practice bills insurance with, and it is from 2026 with none of ABELDent's accumulated mileage.

![Dentalpin periodontal chart showing the six measurement sites per tooth](/screenshots/periodontogram.png)

*The periodontal chart, recording six sites per tooth.*

## Side by side

| | ABELDent | Dentalpin |
|---|---|---|
| Model | Commercial licence | Open source (BSL 1.1) |
| In business since | ✓ 1977, per their About page | ✗ 2026 |
| Install base published | ✓ "5,000+" practices, "40,000+" users | ✗ None yet |
| Software price published | ✗ Not on any page consulted | ✓ Zero, all included |
| Free version | ✓ Freemium, no updates, support or messaging | ✓ The whole product |
| Source code | ✗ Not published | ✓ Published |
| Client platform | ✗ Windows only, English only | ✓ Any modern browser, any OS |
| Where the data sits | Azure (Cloud) or your server (Local Plus) | Wherever you install it |
| Data centre region published | ✗ Not named on any page consulted | ~ You chose the machine |
| Imaging | ✓ Direct capture and bridges included | ✗ None |
| Canadian and US insurance | ✓ Yes, with annual fee guide updates | ✗ Nothing |
| Staffed data conversion | ✓ From 51 named systems | ✗ Self-service import tool |
| Support | ✓ 24-hour option, published hours | ~ Community and docs |
| Security attestation | ✓ SOC badge and audit letter published | ✗ None |
| Licence transferable | ✗ Only with the sale of the whole practice | ✓ No licence to transfer |

Every green mark in the ABELDent column is theirs on the evidence of their own pages, and there are more of them than in most comparisons in this series. That is what forty-nine years buys.

## Choose ABELDent if

- **You bill Canadian or US dental insurance.** This is the whole argument and it is close to decisive. Electronic claims, and Software Maintenance that includes "Annual Fee Guide Updates (Subject to restrictions imposed by Provincial Associations)". We do none of it, and nobody should pretend a Spanish-built open source system is about to.
- **You want somebody to answer the phone at 3am.** Their published hours are Monday to Friday 8:30am to 5:00pm EST regular, the rest of the week covered by extended hours, and "Saturday, Sunday and Holidays - 24 hour support applies", with maintenance subscribers getting "24x7x365 Telephone Support".
- **You are moving off an old system and want somebody else to do it.** They publish 51 systems they have converted from by name, including Dentrix, Eaglesoft, Easy Dental, ClearDent, Softdent, Tracker, Maxident and Power Practice, and they offer a "free Data Conversion Evaluation" on a backup you send them.
- **You need imaging in the same product.** Direct capture and bridges to radiography software are included in both paid products. We have neither.
- **You want a security attestation you can hand to a lawyer.** Every page footer carries the AICPA SOC badge, linked to a document titled "Letter of Audit Completion SOC 2 Type 2 ABELSoft". We have nothing equivalent.
- **You want a free system to start on and a paid one to grow into.** Freemium to Local Plus to Cloud is a real path, and their own promise is that "you will not need to relearn ABELDent".

## Choose Dentalpin if

- **You want the code, not just the price.** Freemium costs nothing and so do we. The difference is that our source is published, so what the software does to your records is inspectable, and nobody can withdraw it.
- **Your practice is not Windows.** A browser is the only requirement. No Boot Camp, no Parallels, no English-only interface, no Windows Server on the eleventh workstation.
- **You are outside Canada and the United States.** ABELDent scopes itself to those two markets on its own home page, and the insurance machinery that justifies most of the price does nothing anywhere else.
- **You want free to include the updates.** Freemium explicitly excludes "ongoing software updates" and patient messaging. Ours are not a paid tier.
- **You expect to sell or restructure the practice.** ABELDent publishes an unusual rule: "ABELDent software licenses cannot be sold on their own. ABEL licenses can only be transferred by the owner as part of the sale of an entire practice", with two weeks' notice, the seller's balance paid in full, a transfer fee, and a maintenance plan the buyer must take on. There is no equivalent, because there is no licence.
- **You want to know which country your patient records sit in.** ABELDent names Microsoft Azure but no region or country on any page consulted. On a self-hosted install, you picked the machine.

## What migrating looks like

ABELDent runs conversions for you and has done so, in their words, "for thousands of North American dentists". They are also refreshingly blunt about why some conversions are hard: "Some vendors purposely encrypt or otherwise obscure data to make it difficult for their clients to move their data to another system."

One thing to pin down before you sign, though, because they say it plainly: "Our minimum objective is to convert the data that will help you get started with ABELDent quickly", and what they commit to converting is "Patient Demographics" and "Patient Appointments". Everything beyond that is answered by the free evaluation, on your data, with a quote. Ask for it in writing.

Ours is a tool you drive yourself, and the difference is real work that lands on somebody:

1. **Upload the file** and the system validates it before touching anything.
2. **See a preview** with entity counts and sample rows. Nothing has been written yet.
3. **Review the proposals**: the system maps the source treatment catalogue onto yours and you decide row by row (accept, relink, create new, or ignore). Anything scoring above 0.9 can be accepted in bulk.
4. **Execute**, and the import runs honouring your decisions.

![The Dentalpin AI assistant listing the workflows it can run against practice data](/screenshots/ai-copilot.png)

*The assistant works inside each user's permissions, so it cannot read or write anything that user could not.*

## The honest part

ABELDent is a well-run company selling a complete product into a market we do not serve. For a practice in Ontario or New York, the insurance billing alone settles it, and this comparison is not going to argue otherwise. Their free tier is real, their conversion team is real, and the amount they publish about their own terms is well above the average for this industry.

Two things are worth weighing anyway. Their cloud product is a Windows desktop application with the database moved to Azure, which is a smaller change than the word cloud suggests. And the price of the software is not published anywhere, so the number that decides whether you can afford it only exists inside a sales call.

Dentalpin is the other bet: that software holding clinical records should be readable and ownable by the practice it holds them for, and that free should mean the updates too. It is younger and it shows. You can [see what it costs](/en/pricing/), [try the demo](https://demo.dentalpin.com) without installing anything, or [stand it up on your own server in three minutes](/en/blog/install-dentalpin-in-three-minutes/) and judge it yourself.

## Sources

All ABELDent pages consulted on 10 September 2026:

- [Home](https://www.abeldent.com/): "Built for Canadian and U.S. dental practices", "5,000+ Dental Practices", "40,000+ ABELDent Users", "4.9 Google Approval Rating", the ABELDent Scribe and AI Radiograph Analysis descriptions, the "Electronic Claims" feature entry, and the Microsoft Marketplace purchase links.
- [About](https://www.abeldent.com/about/): "Serving healthcare professionals since 1977, ABELDent Inc.", the Burlington, Ontario and Buffalo, New York addresses, "company owners Arun Rele, Chairman & CEO and Bina Rele, V.P. Sales", and the six employees with thirty or more years of service.
- [ABELDent Product Comparison](https://www.abeldent.com/products/abeldent-solutions-comparison/): the "ABELDent Application Location: Local Workstations" row for both products, "Live Practice Data Location" (Local Server / Microsoft Azure Cloud), "Data Security" (Practice Responsibility / Protected by Microsoft), "Server Maintenance", and "Pricing Model: Subscription".
- [ABELDent Freemium](https://www.abeldent.com/products/free-dental-software/): "a free version (no credit card required)", "limited only by the performance constraints of a free Microsoft database", the list of who it is for, the footnote excluding "telephone support, one-on-one training, ongoing software updates, data migration", "this feature is not available in ABELDent Freemium" for PCS, the 90-day renewable LMS access, and "you will not need to relearn ABELDent".
- [ABELDent Freemium system requirements](https://www.abeldent.com/resources/system-requirements/abeldent-freemium-clinical-and-practice-management-system-requirements/): "MS SQL Server Express 2022 (or 2019) is the only database supported with the Freemium version of ABELDent", and Windows 11 or 10, 64 bit, English only.
- [ABELDent Cloud system requirements](https://www.abeldent.com/resources/system-requirements/abeldent-cloud-system-requirements/): "ABELDent Cloud is designed for use with Windows 10/11 Professional (English only)", "does not support older or home operating systems", the Boot Camp and Parallels note, and the Windows Server requirement above ten workstations.
- [ABELDent Cloud](https://www.abeldent.com/products/abeldent-cloud/) and [ABELDent Local Plus](https://www.abeldent.com/products/abeldent-local-plus/): the Azure description and "Complimentary Microsoft SQL Server with purchase of SQL licenses through ABELDent, for every ABELDent workstation".
- [Software and Support FAQ](https://www.abeldent.com/resources/software-and-support-faq/): the four cost factors including "Do you prefer to buy or rent the software license?", the support hours, and the 24-hour support option.
- [ABELDent Software Maintenance](https://www.abeldent.com/support/software-maintenance/): "Annual Fee Guide Updates (Subject to restrictions imposed by Provincial Associations)" and "24x7x365 Telephone Support".
- [Data Conversion FAQ](https://www.abeldent.com/resources/data-conversion-faq/): "for thousands of North American dentists", the list of 51 named source systems, "Some vendors purposely encrypt or otherwise obscure data to make it difficult for their clients to move their data to another system", the free Data Conversion Evaluation, and the minimum objective of "Patient Demographics" and "Patient Appointments".
- [License Transfer](https://www.abeldent.com/resources/license-transfer/): "ABELDent software licenses cannot be sold on their own. ABEL licenses can only be transferred by the owner as part of the sale of an entire practice", the two weeks' notice, the paid-in-full balance, the maintenance requirement and the transfer fee.
- [Charting and Perio Charting](https://www.abeldent.com/features/charting-and-perio-charting/): "Visually appealing odontogram and periodontal chart", "Secure clinical notes with certification and built-in audit trails" and "Supports voice controlled periodontal charting".
- [Cloud Protection for Dental Practices](https://www.abeldent.com/cloud-protection-for-dental-practices/): the encryption, controlled access, monitoring and backup description.
- [Guided Update Services Pricing](https://www.abeldent.com/guided-update-services-pricing/): "Regular List Price: $4,000", the discount falling from 50% to 37.5% on 1 September 2026, "$2,500" and the "$500 credit".
- [Patient and Cloud Services Terms and Conditions](https://www.abeldent.com/patient-and-cloud-services-terms-and-conditions/), effective 16 March 2026, version 1.0: "SMS messages are billed at $0.01 (one cent) per SMS message segment".
- [ABELDent Software Support/Service Payment Plans](https://www.myabel.com/Content/documents/dentalCDN/SupportOptionsFormDENTALCdn.pdf), the Canadian form dated 6 April 2022: the "$150/hour", "$180/hour" and "$240/hour plus taxes" rates and the flat-rate plan with "no fixed term".
- [Dentalpin's licence](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) and [source](https://github.com/martinezsalmeron/dentalpin).

The price of the software itself, the Azure region or country holding patient records, an uptime figure or SLA, any API or developer documentation, the licence transfer fee, the flat-rate support fee and the ceiling of the Freemium database appear on none of the pages consulted, and are stated as absent from those pages rather than absent from the product. The Microsoft Marketplace listings returned HTTP 403 this run and were not used. The SOC 2 letter linked from every page footer could not be read as text this run, so nothing about its auditor, scope or period is stated here beyond the document's own title.

Something wrong or out of date in this comparison? [Tell us](https://github.com/martinezsalmeron/dentalpin/discussions) and we will fix it. That goes for ABELDent too.
