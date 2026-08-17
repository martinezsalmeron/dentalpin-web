---
title: "How to give an LLM write access to clinical data without it being reckless"
description: "The model never writes: it proposes a narrow typed operation, your code re-checks permissions, a person confirms every change. Architecture and limits."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ai, llm, architecture, security, gdpr]
---

The short answer is that the model never writes. It proposes a call to one narrow, typed operation, your own code re-checks the permissions of the person who asked, and anything that changes data stops until a human confirms it. The LLM parses the sentence; executing it is ordinary backend work.

What follows is the division of responsibility that makes that defensible, what European regulators now say about agents that take actions, and why the confirmation dialog is the easiest part to get wrong.

## The three properties an agent must not combine

Spain's data protection authority published guidance on agentic AI in February 2026 that sets out the rule of 2 as reformulated for AI agents. It sets a floor of guarantees you never cross, built on three properties:

1. **Processing uncontrolled input**, meaning text that reaches the model's context without an authorised person having written it.
2. **Access to sensitive data**, which in a dental practice is the entire clinical record by definition.
3. **Taking automatic actions** with effects inside or outside the organisation.

An agent holding all three should not be allowed. The guidance spells out the cases: where uncontrolled input can trigger access to sensitive data, any automatic action with an effect inside or outside the organisation must be blocked unless a human supervises it.

> **A practice assistant has the first two properties by default.** It reads text written by patients and third parties, and it works on special category data under Article 9 GDPR. The only one of the three you can give up is the third, and giving it up means precisely this: no write without a person in front of it.

That is an architectural decision, and it is taken before any code is written. Everything below follows from it.

## Write access means tools, not a database connection

Giving a model write access is not handing it a PostgreSQL connection or an endpoint that accepts SQL. It is publishing a small catalogue of operations, each with typed parameters and the same validation the user interface runs.

For a sentence like "move Marta from Tuesday to Thursday at ten", the path looks like this:

1. **The model gets the sentence and the tool catalogue**, never the database schema.
2. **It returns a proposal**: which operation it wants to call, with which arguments. Nothing has happened yet, this is text.
3. **The backend validates the arguments** against the same schema that validates a form, and rejects whatever does not fit.
4. **Permissions are re-checked** for the person who asked, at the execution point.
5. **If the operation changes data it pauses** for explicit confirmation, showing what is about to change.
6. **It executes and it is logged**: which tool, which arguments, who asked and who confirmed.

Step 4 is the one teams skip. Filtering the tool list before it reaches the model is a useful hint, but it is not access control. The control has to sit where the call is executed, because that is the only place every call passes through.

![Dentalpin AI assistant showing the list of available workflows and an open conversation](/screenshots/ai-copilot.png)

*The agent proposes; the catalogue on the left is the whole of what it can ask for.*

## Least privilege, applied to the agent rather than the user

The AEPD guidance is explicit that least privilege is the basic principle in an agentic environment, and that privilege escalation and identity inheritance have to be restricted. In practice that reduces to one testable rule: the agent can neither see nor do anything the person asking could not do on screen.

- **No identity of its own.** The agent acts with the session of whoever typed the request, not a service account with broad rights. A service account turns any model failure into total access.
- **Isolated per organisation.** One agent serving several practices has to compartmentalise memory and context, or it will mix data from unrelated records.
- **No tools that widen the blast radius.** Every tool you publish is new attack surface, and the same guidance notes that adding tools is the usual way privileges get granted by accident.
- **Nothing irreversible.** Deleting records, merging patients or voiding an issued invoice are not agent operations, however many confirmations you put in front of them.

## A confirmation dialog is not human oversight

This is where most teams believe they are already done. Oversight has to be real, and regulators have been specific about what that means.

Article 22 GDPR gives people the right not to be subject to a decision based solely on automated processing that produces legal effects or similarly significantly affects them. The AEPD notes that adding an agent may involve automation without necessarily involving automated decisions in the Article 22 sense, and that where it does, you have to work through the conditions in 22(2), the safeguards in 22(3) and the limits in 22(4) on special category data.

France's CNIL, in its July 2026 note on agentic AI, gets to the point: a human intervention at the output alone does not necessarily stop a decision from counting as solely automated, and citing the Court of Justice's SCHUFA judgment, that human intervention must be real, effective and actually influence the final decision, since a purely formal or automatic validation is not enough.

> **If the person confirming cannot say no, they are not supervising.** They need to see what is about to change, have time and standing to refuse, and pay no price for refusing. A button pressed forty times a day without reading is an automatic signature with extra steps.

There is also a temptation the AEPD names directly: shifting the whole responsibility onto the user or onto human supervision. When something breaks it is convenient to blame whoever clicked, rather than the design that made the failure possible. Neither role replaces the diligence owed by whoever decides how the system works.

## How much autonomy is defensible, by what the action touches

| | Read-only queries | Writes with confirmation | Autonomous writes |
|---|---|---|---|
| Uncontrolled text in context | ✓ Tolerable | ~ Only with real confirmation | ✗ Combines all three properties |
| Reaches Article 9 data | ~ With least privilege | ~ With least privilege | ✗ Not defensible |
| Undoable without a database restore | ✓ Nothing to undo | ✓ Yes | ✗ Depends on the operation |
| Article 22 in play | ✓ No | ~ Depends on the effect on the patient | ✗ Yes, where it affects the patient |
| Who the log points at | The person who asked | Who asked and who confirmed | Nobody |

The last column is not a case to engineer better. It is a case not to build while the other two properties are still there.

## The log has to reconstruct the decision, not just the write

Storing the `UPDATE` is not enough. What you need to be able to rebuild is the whole chain: what was asked, what the model proposed, what was validated, who confirmed and which data moved.

The AEPD frames this as data traceability, the ability to know the full life cycle of a piece of data, and adds that it means keeping logs of the information processed by the reasoning steps, the sources accessed and the services used. The CNIL asks for the same thing from the user's side: for each task executed, you should be able to identify the personal data involved, the agents that acted, the third-party services called and the order it happened in.

![Dentalpin patient record on the activity tab, with the timeline filtered by visits, treatments and communications](/screenshots/patient-timeline.png)

*The patient timeline is where a change made by the agent has to show up like any other.*

## What we deliberately did not give the model

Cutting scope removed more risk than any control added afterwards.

- **Free-text clinical notes stay put.** Patient identifiers are replaced with deterministic tokens before anything leaves for the AI provider, and free-text clinical data stays off that path entirely.
- **No diagnosis, no treatment recommendation.** Suggesting a treatment changes what the product is and the obligations that come with it. Scheduling, payments, recalls and lookups are not that.
- **No proactive action on data.** The morning digest is generated by deterministic queries, with no LLM involved and no patient data leaving. That is the most useful lesson of the whole project: a good share of what people ask an agent for does not need a model at all.

## Before you ship it

1. **Write out the list of operations the agent may call** and justify each one. If it does not fit on a page, it is too large.
2. **Test an indirect injection**: put instructions in a text field a patient fills in and check the agent ignores them. The AEPD separates direct injection from indirect, which hides instructions in the sources the agent consults.
3. **Try to escalate**: sign in as a limited user and ask for something out of scope. If the agent does it, your check was in the wrong place.
4. **Read the log of one whole conversation** and confirm a third party could reconstruct what happened.
5. **Count the confirmations per day.** If there are many, oversight will degrade on its own, and that is a design problem rather than a people problem.
6. **Document what leaves for the AI provider**, on what legal basis, under which Article 28 contract.

In Dentalpin the agent works this way: it calls the same operations the interface does, re-checks permissions at the execution point, tokenizes patient data before it leaves, pauses for confirmation on every write and lands each call in the audit log. If you want to run it on your own server to look at it, the terms are on [pricing](/en/pricing/).

## Sources

- AEPD, *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2, February 2026: rule of 2 (pp. 41-43), Article 22 (pp. 39-40), prompt injection (pp. 51-52), traceability (pp. 68-69), privilege management (pp. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Consulted 17 August 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles : équation à inconnues multiples pour les utilisateurs*, July 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Consulted 17 August 2026.
- Regulation (EU) 2016/679 (GDPR), Articles 9, 22, 28 and 32.
- CJEU, Case C-634/21 (SCHUFA Holding), judgment of 7 December 2023, as cited in the CNIL note above.

This is not legal advice. If your system makes decisions that affect patients, review the specific case with your data protection officer or counsel before going live.
