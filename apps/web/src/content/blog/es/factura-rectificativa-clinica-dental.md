---
title: "Una factura ya emitida está mal: rectificativa, abono y lo que el software no puede hacer"
description: "Cómo se corrige una factura dental ya emitida: factura rectificativa del artículo 15, serie propia, plazo de cuatro años y por qué Verifactu impide borrarla."
pubDate: 2026-09-24
tags: [facturacion, rectificativa, verifactu, gestion-clinica]
---

Una factura emitida no se edita y no se borra: se corrige emitiendo un segundo documento, la factura rectificativa, que identifica a la primera y la deja donde estaba. El Reglamento de facturación lo dice en una sola frase del artículo 15.4: "La rectificación se realizará mediante la emisión de una nueva factura en la que se haga constar los datos identificativos de la factura rectificada".

Eso es lo que choca con la costumbre de la clínica. En la agenda o en la historia clínica un error se arregla cambiando el dato. En facturación no, y desde Verifactu tampoco técnicamente.

## Por qué el botón de borrar no está

El Real Decreto 1007/2023, que regula los requisitos de los programas de facturación, define qué cuenta como alterar un registro, y la definición incluye borrarlo:

> **"Se entenderá por alteración de los registros de facturación la ocultación o eliminación de cualquier registro de facturación originalmente generado y registrado por el sistema informático".** Y a continuación: "Cualquier necesidad de corrección o anulación de los datos registrados deberá ser realizada mediante al menos un registro de facturación adicional posterior, de forma que se conserven inalterables los datos originalmente registrados" (artículo 8.2.a).

Para el caso de la factura emitida por error, el mismo reglamento crea un registro específico. El artículo 11.1 dice que "procederá la generación de un registro de facturación de anulación cuando se haya emitido erróneamente una factura y sea por lo tanto necesario anular su correspondiente registro de facturación de alta", y el apartado 2 obliga a que ese registro lleve el número, la serie y la fecha de la factura que anula.

Es decir: incluso anular deja rastro. La anulación es un apunte más, encadenado al anterior por su huella o *hash*, y el original sigue en el sistema.

## Cuándo la rectificativa es obligatoria

El artículo 15 del Real Decreto 1619/2012 distingue dos motivos, y ninguno de los dos es opcional:

- **La factura original no cumple algún requisito** de los artículos 6 o 7 del propio reglamento: falta un dato obligatorio, el NIF está mal, el domicilio no es el del destinatario (artículo 15.1).
- **Las cuotas se determinaron incorrectamente**, o se han producido las circunstancias del artículo 80 de la Ley del IVA que modifican la base imponible (artículo 15.2). El artículo 80.Dos cubre el caso de la clínica: cuando "queden sin efecto total o parcialmente las operaciones gravadas o se altere el precio después del momento en que la operación se haya efectuado".

El plazo lo fija el apartado 3: **tan pronto como se tenga constancia de las circunstancias**, y en todo caso dentro de los cuatro años desde el devengo. No hay que esperar al cierre del trimestre ni pedir permiso a nadie.

![Listado de facturas con los estados emitida, pagada, pagada parcialmente, vencida y borrador](/screenshots/invoices.png)

*El listado de facturas con sus estados. Una rectificativa no hace desaparecer una línea de esta lista: añade otra.*

## La serie es obligatoria, no una preferencia

Esto se olvida con frecuencia y es lo primero que mira una inspección. El artículo 6.1.a) del Reglamento de facturación permite series separadas "cuando existan razones que lo justifiquen", pero después cierra la puerta: "será obligatoria, en todo caso, la expedición en series específicas de las facturas siguientes: [...] 2.º Las rectificativas".

Así que una clínica que emite `2026/0412` y corrige con `2026/0413` está incumpliendo, aunque los importes cuadren. La rectificativa va en su propia serie, con su propia numeración correlativa.

## Los casos que aparecen de verdad en una clínica

| Situación | Qué se emite |
|---|---|
| Importe equivocado descubierto al día siguiente | ✓ Rectificativa que identifica la original |
| Nombre o NIF mal, tratamiento correcto | ✓ Rectificativa: falta un requisito del art. 6 |
| Cobro ya pasado por el datáfono | ~ Rectificativa más devolución del cobro; son dos cosas |
| Tratamiento interrumpido a mitad | ✓ Rectificativa por el importe no prestado (art. 80.Dos) |
| El paciente pide la factura a nombre de su empresa | ✗ No es una rectificación: el destinatario sería otro |
| Duplicada dos veces el mismo día | ✓ Anulación de una de las dos, no borrado |
| Anticipo que luego se convierte en tratamiento | ~ No siempre es rectificativa: depende de si ya se facturó el anticipo |

Dos filas merecen explicación porque son las que más discusiones generan en recepción.

**La factura a nombre de un tercero no es un error de la factura.** Si el tratamiento se prestó a la paciente y la factura se expidió a su nombre, cambiar el destinatario no rectifica nada: crea una operación distinta con otro obligado. Ese cambio se decide antes de emitir, no después, y es una conversación con la gestoría, no con el programa.

**El anticipo ya facturado no se sustituye.** Si se emitió factura por el pago anticipado, esa factura existe y es válida; la del tratamiento recoge el resto. Solo hay rectificativa si el anticipo se devuelve o el tratamiento decae.

> **Rectificar no es lo mismo que devolver el dinero.** La rectificativa arregla el documento; el reintegro al paciente es un movimiento de caja o una devolución en el datáfono, con su propia fecha y su propio justificante. Confundirlos es lo que deja un saldo fantasma en la ficha del paciente meses después.

## Varias facturas en un solo documento

El artículo 15.4 lo permite de forma expresa: "Se podrá efectuar la rectificación de varias facturas en un único documento de rectificación, siempre que se identifiquen todas las facturas rectificadas". Sirve para el error repetido, por ejemplo un precio mal cargado en el tarifario durante dos semanas.

La condición está en la segunda mitad de la frase, y es la que el programa tiene que cumplir: **todas** las facturas afectadas identificadas, no "las facturas de marzo".

## El IVA en odontología cambia el tamaño del problema, no su forma

La mayor parte de lo que factura una clínica dental está exento. El artículo 20.Uno.3.º de la Ley del IVA exime "la asistencia a personas físicas por profesionales médicos o sanitarios", y el 20.Uno.5.º añade "las prestaciones de servicios realizadas en el ámbito de sus respectivas profesiones por estomatólogos, odontólogos, mecánicos dentistas y protésicos dentales, así como la entrega, reparación y colocación de prótesis dentales y ortopedias maxilares realizadas por los mismos".

Conviene decirlo claro: **la exención no exime de facturar ni de rectificar bien.** La obligación del artículo 15 es de facturación, no de cuota, y la continuidad de la numeración se comprueba igual en una clínica sin IVA repercutido que en una con él. Lo que cambia es que la mayoría de las rectificativas de una clínica no mueven cuota, solo importe y datos.

## Lo que el programa tiene que hacer, y lo que no

- **No ofrecer edición sobre una factura emitida.** Si el campo de importe sigue siendo editable después de emitir, el problema es el programa.
- **Crear la rectificativa con enlace al original**, arrastrando número, serie y fecha de la factura rectificada, no copiándolos a mano.
- **Mantener la serie específica** de rectificativas separada de la de facturas ordinarias, con su contador propio.
- **Registrar quién y cuándo.** El artículo 8.2.b) del RD 1007/2023 exige trazabilidad encadenada y añade que "cualquier funcionalidad o mecanismo que permita alterar u ocultar el rastro de las operaciones supone un incumplimiento de este requisito".
- **Que la ficha del paciente muestre las dos**, original y rectificativa, y no solo el saldo resultante. El saldo correcto con el historial oculto es exactamente lo que no se puede explicar a los dos años.
- **Separar el documento del cobro**, para que devolver 80 € no reescriba la factura ni emitir una rectificativa mueva la caja por su cuenta.

![Panel de informes de la clínica](/screenshots/reports.png)

*Los informes son donde se detecta un hueco en la numeración, no en el listado de facturas del mes.*

## El procedimiento, en orden

1. **Comprueba si el error está en el documento o en la operación.** Un dato mal escrito es el artículo 15.1; un tratamiento que no se prestó es el 15.2 con el artículo 80 de la Ley del IVA detrás.
2. **No toques la original.** Ni el importe, ni el nombre, ni la fecha.
3. **Emite la rectificativa en su serie**, identificando la factura rectificada por número, serie y fecha.
4. **Expresa la rectificación**, que el artículo 15.5 permite hacer de dos formas: indicando directamente el importe de la rectificación o dejando los datos como quedan después, señalando también ese importe.
5. **Entrégala al paciente** y deja constancia de la entrega en su ficha.
6. **Gestiona el dinero aparte**: devolución, compensación en la siguiente factura o nota en la deuda pendiente.
7. **Avisa a la gestoría** si el trimestre ya está presentado, porque ahí la corrección tiene su propio camino.

## Lo que este artículo no cubre

- **La factura del trimestre ya declarado** se corrige en el documento y además en la declaración, y eso es cosa de tu asesoría. Los informes que necesita están en [este otro artículo](/es/blog/informes-para-la-gestoria/).
- **El descuadre de caja del día** no es un error de factura. Va por [el arqueo diario](/es/blog/caja-diaria-clinica-dental/).
- **La factura impagada** no se rectifica por estar impagada: se persigue. Eso es [control de deuda del paciente](/es/blog/control-deuda-pacientes/).
- **Qué obliga Verifactu y desde cuándo** es un tema entero y está en [el artículo específico](/es/blog/verifactu-clinicas-dentales/).

## Dónde encaja el software

En Dentalpin una factura emitida deja de ser editable, la rectificativa se crea desde la propia factura con su serie separada y el enlace al original, el cobro y el documento son registros distintos, y la ficha del paciente muestra la cadena completa en lugar del resultado. Está incluido, sin coste por usuario: los detalles están en la [página de precios](/es/precios/).

**Esto no es asesoramiento fiscal.** Las fuentes oficiales están debajo, con la fecha en que se consultaron; para un caso concreto, habla con tu asesoría o con la propia AEAT.

## Fuentes

- Real Decreto 1619/2012, de 30 de noviembre, por el que se aprueba el Reglamento por el que se regulan las obligaciones de facturación, artículos 6.1.a) y 15. Texto consolidado en el BOE, última actualización publicada el 31/03/2026. Consultado el 24 de septiembre de 2026. <https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696>
- Real Decreto 1007/2023, de 5 de diciembre, por el que se aprueba el Reglamento que establece los requisitos de los sistemas y programas informáticos de facturación, artículos 8 y 11. Texto consolidado en el BOE. Consultado el 24 de septiembre de 2026. <https://www.boe.es/buscar/act.php?id=BOE-A-2023-24840>
- Ley 37/1992, de 28 de diciembre, del Impuesto sobre el Valor Añadido, artículos 20.Uno.3.º, 20.Uno.5.º y 80. Texto consolidado en el BOE. Consultado el 24 de septiembre de 2026. <https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740>
