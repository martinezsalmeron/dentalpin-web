---
title: Facturación
description: Presupuestos, planes de pago, cobros con Stripe y cumplimiento Verifactu.
---

## Presupuestos

Cada tratamiento del odontograma se convierte en una línea del presupuesto. Importes a la derecha con **tabular-nums** activo para alinear decimales.

## Planes de pago

Divide un presupuesto en hasta 24 cuotas. Cada cuota puede:

- Cobrarse manualmente al paciente.
- Enviarse como **enlace Stripe Checkout** por email o WhatsApp.
- Domiciliarse por SEPA (roadmap).

## Verifactu

Dentalpin emite facturas en formato Verifactu firmadas con el certificado de la clínica. El registro se sube a la AEAT en tiempo real y la factura queda sellada con QR y hash.

Para activarlo, sube tu certificado desde **Ajustes → Facturación → Certificado** y verifica con un NIF de prueba.
