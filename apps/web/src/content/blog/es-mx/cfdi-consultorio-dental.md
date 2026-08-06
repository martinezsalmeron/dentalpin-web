---
title: "CFDI 4.0 en el consultorio dental: qué tiene que salir del software"
description: "Qué exige el CFDI 4.0 en un consultorio dental: uso D01, régimen y código postal del paciente, IVA exento del cirujano dentista y plazos de cancelación."
pubDate: 2026-08-06
tags: [cfdi, facturacion-electronica, mexico]
---

Para facturarle a un paciente necesitas seis datos que antes no pedías: su RFC, su nombre tal como está en el padrón, el código postal de su domicilio fiscal, su régimen fiscal, la clave de uso del CFDI y la forma en que te pagó. Los tres del centro son los que incorporó la versión 4.0, y desde el 1 de abril de 2023 no hay otra versión con la que timbrar.

Lo demás sigue igual que siempre. Lo que cambia es que un dato incompleto ya no se corrige después: se rechaza en el timbrado o le tumba la deducción al paciente.

## Los datos del paciente que ya no son opcionales

El artículo 29-A del Código Fiscal de la Federación fija los requisitos del comprobante. Su fracción IV pide la clave del RFC, el nombre o razón social y el código postal del domicilio fiscal de la persona a favor de quien se expide, además de la clave de uso fiscal que el receptor le dará.

El SAT resume así el salto de versión en su página del Anexo 20: el campo "Nombre denominación o razón social del receptor" pasó a ser obligatorio, y se incorporaron los campos "Régimen fiscal del receptor" y "Domicilio fiscal del receptor", ambos de uso obligatorio.

> **El código postal es el del domicilio fiscal del paciente, no el de tu consultorio ni el de su casa.** La guía de llenado del SAT lo aclara en sus preguntas frecuentes: se registra el que corresponda al domicilio fiscal del receptor, tenga o no sucursales.

En la práctica eso significa pedir la constancia de situación fiscal una vez y guardarla en el expediente, porque el nombre tiene que coincidir con el padrón y el régimen cambia sin que el paciente te avise.

| Campo del CFDI 4.0 | De dónde sale | Fundamento |
|---|---|---|
| RFC, nombre y código postal del receptor | Constancia de situación fiscal del paciente | CFF art. 29-A, fracción IV |
| Régimen fiscal del receptor | La misma constancia, catálogo c_RegimenFiscal | Anexo 20, guía de llenado |
| Uso del CFDI | Lo elige el paciente, y debe ser compatible con su régimen | Anexo 20, guía de llenado |
| Clave de producto o servicio y de unidad | Catálogos c_ClaveProdServ y c_ClaveUnidad | CFF art. 29-A, fracción V |
| Forma de pago | Cómo te pagó: efectivo, transferencia, tarjeta | CFF art. 29-A, fracción VII, inciso c) |
| Objeto del impuesto | Si la operación es o no objeto de IVA | Anexo 20, guía de llenado |

## D01 existe para los honorarios dentales

La guía de llenado del Anexo 20 lista la clave D01, "Honorarios médicos, dentales y gastos hospitalarios", y precisa que aplica para persona física y no para persona moral. Es la clave que va a pedirte el paciente que quiere deducir.

La misma guía advierte que el uso lo elige el receptor y que el valor registrado en el campo del régimen fiscal debe corresponder a un valor válido para esa clave en el catálogo c_UsoCFDI. Si el paciente pide D01 pero su régimen no admite esa combinación, el comprobante se rechaza en el timbrado, no en la declaración anual.

Por eso el software tiene que dejar elegir el uso por factura, no fijarlo una vez en la configuración del consultorio. Un paciente que factura a su empresa y otro que deduce como gasto personal no llevan la misma clave.

## El cirujano dentista no traslada IVA

La Ley del Impuesto al Valor Agregado exenta en su artículo 15, fracción XIV, los servicios profesionales de medicina cuando su prestación requiera título de médico conforme a las leyes, siempre que los presten personas físicas, ya sea individualmente o por conducto de sociedades civiles o instituciones de asistencia o beneficencia privada autorizadas.

El reglamento de esa ley cierra la duda en su artículo 41: los servicios profesionales de medicina por los que no se está obligado al pago del impuesto son los de médico, médico veterinario o cirujano dentista, siempre que cumplan con los requisitos que establece la ley.

> **La exención va atada a la persona física, no al consultorio.** El texto de la ley condiciona la exención a que el servicio lo preste una persona física, individualmente o a través de una sociedad civil. Una clínica constituida como sociedad mercantil no está en ese supuesto, y la diferencia se ve en cada factura que emite.

Esto no es un detalle de contabilidad, es un campo del XML. El comprobante lleva un campo de objeto del impuesto y la guía explica que solo se desglosan impuestos a nivel concepto cuando la clave es "02", sí objeto de impuesto. Un sistema que aplique 16% a todo por omisión te obliga a corregir factura por factura.

## Si el paciente paga en efectivo, la factura sale y la deducción no

Este es el punto que más discusiones genera en recepción, y no depende de ti. El artículo 151, fracción I de la Ley del Impuesto sobre la Renta permite deducir los pagos por honorarios médicos y dentales prestados por personas con título profesional legalmente expedido y registrado, siempre que se efectúen mediante cheque nominativo, transferencia electrónica de fondos desde cuentas a nombre del contribuyente, o tarjeta de crédito, de débito o de servicios.

El efectivo no está en esa lista. Puedes emitir el CFDI perfectamente timbrado, con D01 y todos los campos correctos, y el paciente seguirá sin poder deducirlo.

> **Dilo antes del tratamiento, no al momento de cobrar.** Un paciente que iba a deducir treinta mil pesos de ortodoncia y pagó en efectivo descubre el problema en abril, cuando ya no hay forma de rehacerlo.

La ley prevé una salida acotada: las autoridades fiscales pueden liberar de la obligación de pagar por esos medios cuando las erogaciones se efectúen en poblaciones o zonas rurales sin servicios financieros.

![Listado de facturas con estados de emitida, pagada, pagada en parte, vencida y borrador](/screenshots/invoices.png)

*La forma de pago es un campo del comprobante, así que el sistema que emite necesita saber cómo cobró cada tratamiento.*

## Los pagos a plazos no siempre son parcialidades

Aquí es donde casi todo lo que se lee en internet sobre tratamientos largos está mal. El artículo 29-A, fracción VII, inciso a) del Código Fiscal cierra con un párrafo específico: tratándose de contribuyentes que presten servicios personales, cada pago que perciban por la prestación de servicios se considerará como una sola exhibición y no como una parcialidad.

Un dentista que cobra por honorarios está en ese supuesto. Cada cobro se factura como pago en una sola exhibición, y no hay que emitir después un complemento de recepción de pagos por cada abono.

El esquema de comprobante por el total más un complemento por cada pago recibido es el del inciso b), para cuando la contraprestación no se paga en una sola exhibición o se paga de forma diferida respecto del comprobante que ampara el valor total. Confirma con tu contador cuál de los dos te aplica antes de configurar el sistema, porque cambia cuántos comprobantes emites al año.

![Un presupuesto con sus tratamientos, totales, validez y plan de tratamiento vinculado](/screenshots/budgets.png)

*Un presupuesto aceptado documenta lo que el paciente autorizó. No es un comprobante fiscal, y el CFDI se emite cuando hay cobro.*

## Cuándo se timbra y hasta cuándo se puede cancelar

Los plazos son dos y se confunden a menudo:

1. **Veinticuatro horas para timbrar.** El reglamento del Código Fiscal, en su artículo 39, obliga a remitir el CFDI al SAT o al proveedor de certificación autorizado a más tardar dentro de las veinticuatro horas siguientes a que haya tenido lugar la operación de la que derivó la obligación de expedirlo.
2. **Hasta el mes de la declaración anual para cancelar.** El artículo 29-A permite cancelar a más tardar en el mes en el cual se deba presentar la declaración anual del ISR del ejercicio en que se expidió el comprobante, y siempre que la persona a favor de quien se expidió acepte la cancelación. Para personas físicas esa declaración se presenta en abril del año siguiente, según el artículo 150 de la Ley del ISR.

Además, quien cancela un CFDI de ingresos debe justificar y soportar documentalmente el motivo de la cancelación, y la autoridad puede verificarlo.

Hay un requisito nuevo que conviene tener presente: desde la reforma publicada el 7 de noviembre de 2025, el artículo 29-A incorporó una fracción IX que exige que los comprobantes amparen operaciones existentes, verdaderas o actos jurídicos reales, y dispone que los que no cumplan ese requisito se consideran falsos para efectos del Código.

## Los pacientes que no piden factura

La mayoría no la pide, y eso no te exime de comprobar el ingreso. Para esas operaciones existe la factura global, y la versión 4.0 incorporó los campos de periodicidad, meses y año precisamente para emitirlas.

Los ejemplos de la propia guía del SAT muestran la combinación que llevan: nombre del receptor "PUBLICO EN GENERAL", RFC genérico XAXX010101000, régimen fiscal del receptor 616 "Sin obligaciones fiscales" y uso del CFDI S01 "Sin efectos fiscales".

Lo que el consultorio necesita para armarla sin dolor es un registro de cobros del periodo que cuadre con lo que entró a caja. Ahí es donde suele romperse: no en el timbrado, sino en no saber qué se cobró y cómo.

## Qué preguntarle a tu proveedor de software

1. **Pregunta si timbra o solo imprime.** Un documento con aspecto de factura que no pasó por un proveedor de certificación autorizado no es un comprobante fiscal.
2. **Pide ver el XML, no el PDF.** El PDF es una representación impresa. Lo que vale es el XML timbrado, y es lo que tu paciente necesita conservar.
3. **Comprueba que el uso del CFDI se elija por factura**, y que el sistema no te obligue a una sola clave para todos los pacientes.
4. **Revisa cómo trata el IVA por omisión** y si puedes emitir sin traslado cuando corresponda.
5. **Pregunta qué pasa al cancelar**, si el sistema registra el motivo y si te avisa cuando el receptor no ha aceptado.
6. **Pide un export de tus comprobantes**, en XML, para llevártelos el día que cambies de proveedor.

Dentalpin cubre la parte de arriba de esa lista, la del consultorio: agenda, expediente clínico, odontograma, presupuestos y el registro de cobros con la forma de pago de cada uno, que es de donde salen los datos que después se timbran. Lo que no hace hoy, y conviene decirlo antes de que lo descubras instalándolo: no emite CFDI ni timbra ante el SAT, así que la facturación electrónica sigue saliendo del sistema que uses para eso. Es código abierto y gratis, y la [página de precios](/es-mx/precios/) es corta.

## Fuentes

Todo lo de abajo se consultó el 6 de agosto de 2026.

- [Formato de factura (Anexo 20)](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm), SAT, de donde salen la fecha del 1 de abril de 2023 y la lista de campos nuevos de la versión 4.0.
- [Anexo 20, Guía de llenado de los comprobantes fiscales digitales por Internet](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Anexo_20_Guia_de_llenado_CFDI.pdf), SAT, publicada el 31 de diciembre de 2021, con revisión más reciente del 16 de enero de 2026 según su control de cambios.
- [Código Fiscal de la Federación](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf), artículos 29 y 29-A, última reforma DOF 09-04-2026.
- [Reglamento del Código Fiscal de la Federación](https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_CFF.pdf), artículo 39.
- [Ley del Impuesto sobre la Renta](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf), artículos 150 y 151, última reforma DOF 01-04-2024.
- [Ley del Impuesto al Valor Agregado](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf), artículo 15, fracción XIV, última reforma DOF 12-11-2021.
- [Reglamento de la Ley del Impuesto al Valor Agregado](https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LIVA_250914.pdf), artículo 41, última reforma DOF 25-09-2014.

Esto no es asesoramiento legal ni fiscal. Los catálogos del SAT se actualizan, los plazos cambian, y la lectura que aplica a tu consultorio es la de tu contador.
