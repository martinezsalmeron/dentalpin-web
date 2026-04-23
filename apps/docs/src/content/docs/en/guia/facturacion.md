---
title: Billing
description: Quotes, payment plans, Stripe checkout and Verifactu compliance.
---

## Quotes

Every treatment on the odontogram becomes a line in the quote. Amounts render right-aligned with **tabular-nums** active so decimals align.

## Payment plans

Split a quote into up to 24 instalments. Each instalment can:

- Be collected manually.
- Be sent as a **Stripe Checkout** link via email or WhatsApp.
- Be direct-debited via SEPA (roadmap).

## Verifactu

Dentalpin issues invoices in Verifactu format signed with the clinic's certificate. The record is pushed to the Spanish Tax Agency (AEAT) in real time and the invoice is stamped with QR + hash.

To enable, upload your certificate under **Settings → Billing → Certificate** and verify against a test tax ID.
