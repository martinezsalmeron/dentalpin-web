---
title: "Liquidar a los doctores colaboradores: la cuenta que tiene que salir del software"
description: "Cómo se calcula la liquidación de un dentista colaborador: qué se atribuye a quién, qué se descuenta antes del porcentaje y qué lleva la hoja mensual."
pubDate: 2026-09-15
tags: [liquidaciones, colaboradores, gestion, facturacion]
---

Una liquidación es un porcentaje aplicado sobre una base, y casi toda la discusión que acaba en una reunión incómoda es sobre la base, no sobre el porcentaje. Cuatro decisiones la definen: qué tratamiento se atribuye a qué profesional, qué se descuenta antes de aplicar el porcentaje, si se calcula sobre lo facturado o sobre lo cobrado, y qué pasa con un tratamiento que han tocado dos personas.

Si el software no puede responder a esas cuatro preguntas línea a línea, la hoja mensual no se puede comprobar. Y una hoja que no se puede comprobar se acaba discutiendo todos los meses.

## El porcentaje es lo último que hay que negociar

Dos acuerdos con porcentajes distintos pueden pagar cantidades muy distintas, y no siempre gana el número más alto. Supongamos un tratamiento facturado en 1.000 € con 300 € de laboratorio.

- **Un 40 % sobre la base neta de laboratorio** paga (1.000 − 300) × 0,40 = **280 €**.
- **Un 35 % sobre la base bruta** paga 1.000 × 0,35 = **350 €**.

El acuerdo del 35 % paga setenta euros más en ese tratamiento. No es un caso rebuscado: en prótesis, implantes y ortodoncia el laboratorio y el material son una parte grande de la factura, y ahí el efecto de la base se come cualquier diferencia de porcentaje razonable.

> **El porcentaje más alto no es siempre el que más paga.** Antes de discutir si es un 35 o un 40, hay que dejar escrito sobre qué importe se aplica, y comprobar que el software sabe calcular ese importe sin que nadie lo haga a mano.

## Cada tratamiento necesita un profesional propio, no el paciente

La atribución falla casi siempre por el mismo motivo: el software guarda el profesional en el sitio equivocado. Si el dato vive en la ficha del paciente ("dentista asignado") o en la cita, la liquidación sale mal en cuanto alguien cubre una baja, entra una urgencia o el higienista hace la fase de higiene de un plan largo.

El profesional tiene que ser un campo de la línea de tratamiento, junto al código y al importe. Estas son las tres preguntas que conviene hacerle al software antes de firmar nada:

- **¿Se puede atribuir cada línea por separado?** Un plan de tratamiento con nueve líneas puede tener tres profesionales distintos, y eso es lo normal, no la excepción.
- **¿El valor por defecto es quien lo hizo o quien tiene asignado al paciente?** El segundo es cómodo y es exactamente el que produce liquidaciones incorrectas.
- **¿Queda registrado quién cambió la atribución y cuándo?** Sin traza, cualquier corrección posterior es indistinguible de una manipulación, y eso es lo que envenena la conversación.

![Plan de tratamiento con sus fases y los tratamientos de cada una](/screenshots/treatment-plan.png)

*Un plan de tratamiento dividido en fases: cada fase agrupa tratamientos que pueden hacerse en sesiones distintas.*

## Qué se descuenta antes de aplicar el porcentaje

Aquí es donde los contratos se vuelven vagos. "Descontados los gastos de laboratorio" parece una frase clara hasta que llega la primera factura de laboratorio que incluye un implante, o un descuento comercial que alguien tiene que asumir.

| Concepto | Base bruta | Neta de laboratorio | Neta de laboratorio y material |
|---|---|---|---|
| Laboratorio | ✗ No se descuenta | ✓ Se descuenta | ✓ Se descuenta |
| Implantes y aligners | ✗ No se descuenta | ~ Según cómo facture el proveedor | ✓ Se descuenta |
| Material fungible | ✗ No se descuenta | ✗ No se descuenta | ✓ Se descuenta, con criterio pactado |
| Descuentos al paciente | ~ Hay que pactarlo | ~ Hay que pactarlo | ~ Hay que pactarlo |

Hay dos detalles que casi nadie escribe y que cambian el resultado todos los meses. El primero es si los importes que se descuentan van con IVA o sin IVA: una factura de laboratorio de 300 € más IVA no se descuenta igual que una de 300 € totales.

El segundo es quién asume los descuentos al paciente. Si recepción cierra un plan con un 10 % de descuento por pago al contado, ese 10 % puede salir entero de la clínica, salir entero del colaborador o repartirse. Las tres opciones son defendibles y la única indefendible es no haberlo decidido.

## ¿Sobre lo facturado o sobre lo cobrado?

Esta es la decisión que más dinero mueve y la que más exige al software. Determina quién soporta el riesgo de impago y cuándo cobra el colaborador.

| | Sobre lo facturado | Sobre lo cobrado | Mixto |
|---|---|---|---|
| Cuándo cobra el colaborador | ✓ Al emitir la factura | ✗ Según entra el dinero | ~ Al facturar, con regularización |
| Quién asume el impago | ✗ La clínica | ✓ Se reparte | ~ Se regulariza después |
| Qué necesita el software | ~ Atribución por línea | ✗ Además, cobros imputados a línea | ✗ Las dos cosas y un histórico |
| Facilidad de comprobación | ✓ Alta | ~ Media | ✗ Baja |

El modelo sobre lo cobrado suena más justo y es el que rompe más programas. Para aplicarlo, cada cobro parcial tiene que saber a qué líneas de tratamiento corresponde, y eso no es lo mismo que saber cuánto debe el paciente en total.

> **Un paciente con un plan de 3.000 € en doce mensualidades, tratado por dos profesionales, es la prueba de fuego.** Si el software solo sabe que ha pagado 250 € este mes pero no a qué tratamientos los imputa, el modelo sobre lo cobrado no se puede calcular y acaba en una hoja de cálculo paralela.

![Listado de facturas con los estados emitida, pagada, parcialmente pagada, vencida y borrador](/screenshots/invoices.png)

*Un listado de facturas donde cada una muestra su estado de cobro: lo que está pagado, lo que está parcialmente pagado y lo que está vencido.*

## Un tratamiento que han tocado dos

Pasa más de lo que parece: una endodoncia derivada internamente, una cirugía de implantes que coloca un profesional y restaura otro, una ortodoncia que sigue un especialista que viene dos días al mes. La factura es una sola línea y el trabajo fue de dos personas.

1. **Decidir la regla antes del caso, no después.** Atribuir al que termina, repartir por sesiones o repartir con un porcentaje fijo por tipo de tratamiento son tres reglas válidas; improvisar en cada caso no lo es.
2. **Comprobar si el software permite dividir la línea.** Si no deja partir un tratamiento en dos con dos profesionales, la única salida limpia es facturar cirugía y prótesis como conceptos separados.
3. **Registrar la sesión, no solo el tratamiento.** Si cada sesión queda anotada con su profesional, el reparto por sesiones se calcula solo y deja de ser una negociación.
4. **Escribir el caso raro en el contrato.** Qué pasa si el colaborador se va a mitad de un plan largo es la cláusula que nadie redacta y todo el mundo necesita.

## Qué tiene que mostrar la hoja mensual

La prueba de que una liquidación está bien hecha es que el profesional pueda reconstruirla desde sus tratamientos sin pedirle nada a nadie. Eso exige que la hoja traiga, por cada línea:

1. **Fecha y paciente**, con un identificador que permita abrir la historia.
2. **Tratamiento y código**, tal y como está en el presupuesto aceptado.
3. **Profesional atribuido**, y si la línea está repartida, el porcentaje de cada uno.
4. **Importe facturado**, antes de descuentos.
5. **Descuentos aplicados**, con su concepto, no un importe suelto.
6. **Importe cobrado en el período**, si el acuerdo es sobre lo cobrado.
7. **Deducciones**, cada una con su concepto y su documento de origen.
8. **Base, porcentaje e importe a liquidar**, en tres columnas separadas.

Debajo, tres cosas que suelen faltar: el total por profesional, una sección de regularizaciones de meses anteriores (un impago recuperado, una factura rectificada) y un número que cuadre con el arqueo del período. Sin esa última línea, la hoja es una afirmación.

> **Si la hoja no se puede recalcular desde los tratamientos, no es una liquidación, es una cifra.** El criterio práctico es sencillo: dale la hoja a alguien que no la haya hecho y pídele que llegue al mismo total. Si no puede, el problema es el informe, no la persona.

## Este post no te va a decir qué porcentaje pactar

No lo va a decir porque no hay ninguna fuente oficial que lo publique. Las cifras que circulan vienen de consultoras y de prensa del sector, se citan unas a otras y envejecen sin que nadie las revise.

Lo que sí se puede afirmar es que comparar dos porcentajes sin comparar sus bases no significa nada, y que la clínica de al lado no es una referencia útil si no sabes qué descuenta antes de aplicarlos.

## La parte fiscal depende del país, y en España es una retención

En España el colaborador que trabaja por cuenta propia factura a la clínica, y esa factura lleva retención de IRPF. La clínica es quien retiene y quien ingresa esa retención en Hacienda, así que el importe que transfiere al profesional no es el importe de la factura.

Según la Agencia Tributaria (consultado el 15 de septiembre de 2026), el tipo de retención de los rendimientos profesionales es "con carácter general del 15 %", con un 7 % para determinadas actividades. Su cuadro de tipos añade el caso de los "profesionales de nuevo inicio (año de inicio y los dos siguientes)", también al 7 %, citando el artículo 101.5 a) de la Ley del IRPF y el 95.1 de su reglamento. Las retenciones se declaran en los modelos 111 y 190.

Dos consecuencias prácticas para el software. La hoja de liquidación y la factura del colaborador tienen que cuadrar entre sí, y el importe transferido tiene que poder explicarse como base menos retención. Si el programa calcula la liquidación pero la retención se hace aparte en una hoja de cálculo, el descuadre aparece en el cierre trimestral.

Si el colaborador es realmente un profesional por cuenta propia o la relación es laboral no es algo que decida la etiqueta del contrato, y no es lo que trata este artículo. **Esto no es asesoramiento legal ni fiscal**: consúltalo con tu asesor y con las fuentes oficiales antes de firmar.

## Qué pedirle al software

Resumido en una frase: que el profesional sea un dato de la línea de tratamiento, que los cobros se imputen a líneas y que el informe mensual se pueda recalcular desde los datos. Con esas tres cosas, cualquier acuerdo razonable se puede liquidar; sin ellas, ningún acuerdo se puede comprobar.

En Dentalpin la atribución vive en la línea de tratamiento y los cobros se imputan a las líneas que pagan, que es lo que hace posible liquidar sobre lo cobrado sin una hoja de cálculo al lado. Si quieres ver cómo queda el informe con tus propios datos, está todo incluido y sin coste por usuario: lo tienes en la [página de precios](/es/precios/).

## Fuentes

- Agencia Tributaria, *7. Otras Obligaciones Fiscales. Retenciones*, sede electrónica, actualizado el 30 de abril de 2026. Consultado el 15 de septiembre de 2026. <https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/7-otras-obligaciones-fiscales-retenciones.html>
- Agencia Tributaria, *7.1 Cuadro. Relación de tipos de retención en porcentaje*, sede electrónica. Consultado el 15 de septiembre de 2026. <https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/7-otras-obligaciones-fiscales-retenciones/7_1-cuadro-relacion-tipos-retencion-porcentaje.html>
