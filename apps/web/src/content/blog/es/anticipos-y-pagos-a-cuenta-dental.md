---
title: "Anticipos y pagos a cuenta: el dinero que todavía no es ingreso"
description: "Un anticipo no es ingreso hasta que el tratamiento se hace. Qué registrar al cobrarlo, cómo atarlo al presupuesto, los cuatro finales posibles y qué debe enseñar el software."
pubDate: 2026-09-29
tags: [anticipos, presupuestos, facturacion, gestion-clinica, software-dental]
---

Un anticipo no es un ingreso de la clínica: es dinero del paciente que la clínica debe hasta que el tratamiento esté hecho. Hasta entonces figura en el pasivo del balance, no en la cuenta de resultados. De ahí salen las tres reglas del día a día: el cobro se ata al presupuesto que lo justifica, el saldo del paciente se ve separado de lo facturado, y el dinero pasa a ingreso a medida que se entrega el tratamiento, no el día que entra en caja.

La consecuencia práctica incomoda a mucha clínica que va bien de caja: parte de lo que hay en el banco en septiembre es trabajo de noviembre, y si nadie lo separa, el resultado del año sale inflado.

Esto no es asesoramiento fiscal ni contable. Abajo está la norma que sostiene cada afirmación, con la fecha en que se consultó.

## Un anticipo es una deuda con el paciente

La norma contable internacional lo dice sin rodeos. La NIIF 15 establece en su párrafo 106 que si un cliente paga antes de que la entidad le transfiera el bien o el servicio, la entidad presenta el contrato como un pasivo por contrato, y define ese pasivo como «la obligación de la entidad de transferir bienes o servicios a un cliente por los que ha recibido una contraprestación».

El Plan General de Contabilidad español llega al mismo sitio por su cuenta. La cuenta 438, «Anticipos de clientes», recoge las «entregas de clientes, normalmente en efectivo, en concepto de "a cuenta" de suministros futuros», y el propio texto añade la línea que resuelve la discusión: «Figurará en el pasivo corriente del balance».

> **Un anticipo cobrado y no ejecutado no mejora el resultado del ejercicio.** Mejora la tesorería, que es otra cosa. Confundir las dos es lo que lleva a repartir o reinvertir dinero que todavía hay que devolver en forma de tratamiento.

Nada de esto exige llevar la contabilidad en la clínica. Exige que el software de gestión deje ver, en cualquier momento, cuánto dinero de pacientes está cobrado y sin ejecutar.

## Qué se registra el día que entra el dinero

Un anticipo sin contexto es un apunte de caja que dentro de seis meses no sabe explicar nadie. Con seis datos deja de serlo:

- **El presupuesto al que pertenece.** Es el dato que convierte una entrega de dinero en un compromiso concreto. Un anticipo suelto, sin tratamiento asociado, es la causa número uno de discusión en el mostrador.
- **El importe y la fecha exacta**, no el mes.
- **La forma de cobro**: efectivo, tarjeta, transferencia o financiera. Si entró por datáfono, el apunte tiene que poder cuadrarse con la liquidación del banco.
- **Quién lo cobró.** Un nombre, no «recepción».
- **Qué cubre y qué no.** Si el presupuesto tiene fases, decir a cuáles se aplica evita la conversación de «yo pensaba que la corona estaba pagada».
- **Qué pasa si el tratamiento no se hace.** Se escribe antes, no cuando el paciente lo pregunta.

![Presupuesto dental en pantalla con los tratamientos, los totales, la validez y el plan asociado](/screenshots/budgets.png)

*Un presupuesto aceptado con sus tratamientos y su total. Es el documento al que tiene que quedar enganchado cualquier pago a cuenta.*

## Los cuatro finales de un anticipo

Solo hay cuatro, y el sistema tiene que saber contarlos todos. Los problemas aparecen siempre en el segundo y el cuarto.

| Situación | Qué pasa con el dinero | ¿Es ingreso? |
|---|---|---|
| El tratamiento se completa | Se aplica a la factura del tratamiento y el saldo del paciente vuelve a cero | ✓ Sí, al facturar |
| El tratamiento se hace en parte | Se aplica a lo entregado; el resto sigue siendo saldo a favor del paciente | ~ Solo la parte entregada |
| El paciente renuncia y pide el dinero | Se devuelve según lo pactado por escrito y el saldo vuelve a cero | ✗ No |
| El paciente desaparece sin reclamar | Sigue siendo un saldo a favor suyo mientras no se regularice | ✗ No |

El cuarto caso es el que más clínicas llevan mal. Dar de baja un saldo antiguo de paciente es una decisión contable con consecuencias, así que se toma con vuestro asesor y con el histórico delante, no borrando una línea.

## Cuándo nace el impuesto, y por qué aquí casi nunca

La regla europea es que el cobro anticipado adelanta el devengo. La Directiva 2006/112/CE dice en su artículo 65 que «en aquellos casos en que las entregas de bienes o las prestaciones de servicios originen pagos anticipados a cuenta, el impuesto será exigible en el momento del cobro del precio y en las cuantías efectivamente cobradas».

Esa regla solo muerde si la operación lleva impuesto. La mayor parte de la odontología no lo lleva: el artículo 132.1.c) de la misma directiva exime «la asistencia a personas físicas realizada en el ejercicio de profesiones médicas y sanitarias definidas como tales por el Estado miembro de que se trate», y el criterio que decide es la finalidad terapéutica del tratamiento.

> **Lo que decide no es si hay anticipo, sino si el tratamiento está exento.** Si lo está, el cobro anticipado no genera IVA. Si no lo está, el impuesto se devenga el día del cobro y no el día del sillón.

Dónde cae cada tratamiento es una pregunta nacional y con matices. Está desarrollada en [¿los tratamientos dentales llevan IVA?](/es/blog/iva-tratamientos-dentales/), y conviene revisarla con vuestro asesor antes de decidir cómo se emite el documento del anticipo.

![Listado de facturas con su estado: emitidas, cobradas, cobradas en parte, vencidas y borradores](/screenshots/invoices.png)

*Un listado de facturas donde se distingue lo cobrado de lo cobrado en parte. Sin esa diferencia, un anticipo aplicado a medias es invisible.*

## El circuito, paso a paso

1. **El paciente acepta el presupuesto** y queda registrada la aceptación con su fecha.
2. **Se acuerda el anticipo por escrito**: importe, a qué fases cubre y qué pasa si el tratamiento se interrumpe.
3. **Se cobra y se registra contra ese presupuesto**, nunca como un cobro suelto en caja.
4. **Se entrega al paciente un justificante** del pago a cuenta, con el concepto y el presupuesto de referencia.
5. **El saldo del paciente sube** y se ve en su ficha como dinero pendiente de aplicar.
6. **Según avanza el tratamiento se factura lo hecho** y el anticipo se va aplicando a esas facturas.
7. **Al terminar, el saldo queda en cero.** Si no queda en cero, o falta trabajo o sobra dinero, y las dos cosas hay que resolverlas antes de cerrar el caso.

## Los errores que salen caro

- **Cobrar el anticipo sin presupuesto aceptado.** Deja a la clínica sin el documento que explica a qué se comprometió, que es justo el que hace falta si hay discusión.
- **Meterlo en la caja del día como una venta más.** El arqueo cuadra y el resultado del mes miente.
- **No distinguir anticipo de deuda.** Son lo contrario: uno es dinero que la clínica debe, otro es dinero que le deben. Llevar el segundo es otro trabajo, y está en [controlar la deuda de pacientes](/es/blog/control-deuda-pacientes/).
- **Emitir factura completa al cobrar la señal.** Factura lo no hecho, y luego obliga a rectificar cuando el plan cambia.
- **Dejar saldos vivos años.** Un paciente que vuelve a los tres años con un resguardo tiene razón, y para entonces el dinero ya se contó como ingreso.

## Qué tiene que poder enseñarte el sistema

Tres pantallas, y con eso basta: el saldo a favor de un paciente concreto, la lista de todos los pacientes con saldo a favor, y el total de anticipos cobrados y no ejecutados a una fecha. Si las tres se sacan exportando a una hoja de cálculo, el número está desactualizado en cuanto alguien cobra en el mostrador.

Dentalpin guarda cada pago a cuenta enganchado al presupuesto que lo justifica, lo va aplicando a las facturas según se entrega el tratamiento y deja el saldo del paciente visible en su ficha junto al plan y a las facturas. Lo que incluye cada versión está en [precios](/es/precios/).

## Fuentes

- IFRS Foundation. *IFRS 15 Revenue from Contracts with Customers*, párrafo 106 y definición de «contract liability» del Apéndice A. [ifrs.org](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/). Consultado el 29 de septiembre de 2026.
- España. *Real Decreto 1514/2007, por el que se aprueba el Plan General de Contabilidad*, cuenta 438 «Anticipos de clientes» (texto consolidado). [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2007-19884). Consultado el 29 de septiembre de 2026.
- Unión Europea. *Directiva 2006/112/CE relativa al sistema común del IVA*, artículos 65 y 132.1.c). [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/dir/2006/112/oj/eng). Consultado el 29 de septiembre de 2026.
- Comisión Europea, Fiscalidad y Unión Aduanera. *Chargeable event*, regla especial para pagos a cuenta. [taxation-customs.ec.europa.eu](https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/chargeable-event_en). Consultado el 29 de septiembre de 2026.
