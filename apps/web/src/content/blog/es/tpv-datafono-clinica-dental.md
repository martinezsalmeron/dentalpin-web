---
title: "TPV y datáfono en recepción: conciliar los cobros sin cuadrar a mano"
description: "Por qué el banco nunca coincide con la caja del día, qué tres cifras hay que comparar y cada cuánto, y qué preguntar al banco antes de firmar el datáfono."
pubDate: 2026-08-29
tags: [tpv, datafono, cobros, gestion-clinica, software-dental]
---

En una clínica con datáfono hay tres cifras distintas todos los días, y solo dos de ellas tienen que coincidir: lo que el software dice que se ha cobrado con tarjeta y el total del cierre del datáfono. La tercera, lo que entra en el banco, no va a cuadrar con ninguna de las dos, y no tiene que hacerlo.

Casi todas las recepciones que han renunciado a conciliar los cobros con tarjeta renunciaron por el mismo motivo: intentaron cuadrar el ingreso del banco contra la caja del día. Eso no cuadra nunca.

## Las tres cifras y cuál se compara con cuál

Separarlas es la mitad del trabajo. Cada una se genera en un sitio distinto y por un camino distinto, que es justo lo que las hace útiles.

- **Los cobros con tarjeta según el software.** Lo que recepción ha registrado hoy como pagado con tarjeta, paciente a paciente.
- **El cierre del datáfono.** El total que el propio terminal ha autorizado desde el último cierre, normalmente por tipo de tarjeta.
- **El abono del banco.** Lo que la entidad adquirente ingresa en la cuenta, con su propio calendario y su propia forma de descontar comisiones.

La regla operativa cabe en dos líneas. El software y el datáfono se comparan **todos los días** y tienen que dar el mismo número. El datáfono y el banco se comparan **una vez al mes** y no van a dar el mismo número.

> **Cuadrar el banco contra la caja del día es la tarea imposible que hace abandonar la conciliación.** El ingreso bancario llega con retraso, agrupado y a veces neto de comisiones. Compararlo con un día suelto no puede salir bien ni cuando todo está bien hecho.

## El cierre diario, en cinco minutos

Hacerlo siempre en el mismo orden es lo que lo mantiene en cinco minutos, porque nadie tiene que decidir nada mientras lo hace.

1. **Cerrad el datáfono a la misma hora**, después del último paciente y antes de apagar. Un terminal que se cierra cuando alguien se acuerda mezcla días y ya no sirve para comparar.
2. **Sacad el total del cierre**, desglosado por tipo de tarjeta si el terminal lo imprime.
3. **Sacad del software la lista de cobros con tarjeta del día**, con importe y paciente.
4. **Comparad los dos totales.** Si coinciden, anotad las dos cifras y habéis terminado.
5. **Si no coinciden, buscad la operación, no la diferencia.** Ordenad las dos listas por importe y la que sobra o falta aparece sola.
6. **Corregid el mismo día**, con una nota de qué pasó. Un descuadre explicado mañana es un descuadre; explicado en octubre es una discusión.

El paso cinco es el que más se salta. Buscar "faltan 47 euros" no lleva a ningún sitio; buscar "hay un cobro de 47 euros en el datáfono que no está en el software" lleva al paciente en treinta segundos.

![Listado de facturas con su estado: emitidas, cobradas, cobradas en parte, vencidas y borradores](/screenshots/invoices.png)

*La lista de cobros del día es la cifra contra la que se compara el cierre del terminal. Si hay que reconstruirla a mano, la conciliación se deja de hacer en dos semanas.*

## Por qué el banco nunca coincide

Las diferencias entre el datáfono y el banco casi nunca son errores. Son cómo funciona el sistema, y conocerlas evita llamadas al banco que no llevan a nada.

| Causa | Qué provoca |
|---|---|
| Hora de corte del terminal | Un cobro de las 20:30 puede entrar en el lote de mañana |
| Fines de semana y festivos | Viernes, sábado y domingo suelen llegar en un solo abono del lunes o el martes |
| Comisiones descontadas | Según el contrato, el abono llega neto y el importe bruto no aparece en ninguna línea |
| Devoluciones | Se restan del abono, no se ingresan aparte |
| Retrocesos y reclamaciones | Aparecen semanas después y sin cita asociada |

Ninguna de esas cinco es un fallo de recepción. Las que sí lo son están todas en la comparación anterior, la del software contra el datáfono.

## Los descuadres que sí son errores

Entre el software y el terminal solo hay cinco causas habituales, y todas se arreglan en el momento si se detectan el mismo día.

- **El cobro que no se registró.** El paciente paga, suena el teléfono y nadie lo apunta. Es, con diferencia, el más frecuente.
- **La forma de pago equivocada.** Cobrado en efectivo y registrado como tarjeta, o al revés. El total del día cuadra y la conciliación no.
- **El pago partido.** Parte con tarjeta y parte en efectivo, registrado como un solo cobro.
- **La devolución a medias.** Devuelto en el datáfono y no revertido en la ficha, así que el paciente sigue figurando como que pagó.
- **La operación denegada que se apuntó igual.** El terminal la rechazó, el paciente pagó de otra forma y quedaron los dos apuntes.

> **Guardad la referencia del datáfono junto al cobro.** El número de operación, o la autorización y los cuatro últimos dígitos, convierten un descuadre de una tarde en una búsqueda de treinta segundos. No cuesta nada y es lo único que hace falta anotar de más.

## Lo que de verdad cuesta cobrar con tarjeta

Aquí hay un malentendido que sale caro en las negociaciones. El Reglamento (UE) 2015/751 limita la **tasa de intercambio**, que es lo que el banco del paciente cobra al banco de la clínica: el 0,2 % en tarjetas de débito de consumidores y el 0,3 % en las de crédito.

Ese tope no es lo que paga la clínica. Lo que paga la clínica es la comisión de descuento, que incluye además la tasa del esquema (Visa, Mastercard) y el margen del adquirente. La distancia entre las dos cifras es grande y es donde está la negociación.

Se ve con tarifas publicadas. SumUp publica en su web un plan sin cuota con un **1,49 % por pago presencial**, y un plan de **19 €/mes que lo baja al 0,75 %** en tarjetas nacionales de débito y crédito (consultado el 29 de agosto de 2026). Sobre un tope de intercambio del 0,2 %, la diferencia es el precio del servicio, no del regulador.

Los bancos adquirentes, en cambio, casi nunca publican tarifas y negocian por contrato, así que la única cifra fiable es la del vuestro.

## Lo que no se puede hacer: repercutir el coste al paciente

Es la primera idea que aparece cuando alguien ve la comisión, y en España está prohibida sin matices. El artículo 35.3 del Real Decreto-ley 19/2018 dice:

> **"Los beneficiarios de las operaciones de pago no podrán exigir al ordenante el pago de gastos o cuotas adicionales por la utilización de cualesquiera instrumentos de pago."**

Conviene leer bien "cualesquiera". La norma española va más allá del mínimo europeo, que solo cubre las tarjetas de consumidor: aquí no hay recargo válido por ningún instrumento de pago. Tampoco un mínimo de importe para pagar con tarjeta, que es la versión disimulada de lo mismo.

Lo que sí permite el apartado 4 del mismo artículo es lo contrario: ofrecer un descuento a quien pague de una forma concreta. Esto no es asesoramiento legal, y para un caso concreto la respuesta la tiene vuestra asesoría.

![Panel de informes de la clínica con la evolución de la actividad](/screenshots/reports.png)

*Los totales por forma de pago de un mes sirven para revisar el contrato del datáfono. Una comisión mal aplicada se ve en el patrón, no en un cobro suelto.*

## Qué preguntar antes de firmar el datáfono

Estas seis preguntas cambian más el coste real que negociar el porcentaje a secas, y las tres primeras deciden si vais a poder conciliar o no.

1. **¿La tarifa es plana o interchange++?** Una tarifa plana esconde qué tarjetas os cuestan caras y hace imposible comprobar si el tope de intercambio se os está trasladando.
2. **¿El abono llega bruto con factura mensual, o neto de comisiones?** Esto decide si la línea del banco puede llegar a coincidir alguna vez con el cierre del terminal.
3. **¿Cuál es la hora de corte y qué días se abona?** Sin ese dato no se sabe a qué día pertenece un cobro de la tarde.
4. **¿Qué hay además del porcentaje?** Alquiler del terminal, mínimo mensual, cuota de PCI, coste por autorización. Sumadlos y dividid entre vuestra facturación con tarjeta: ese es vuestro porcentaje real.
5. **¿Cuál es el preaviso y cómo se revisan las tarifas?** Una subida unilateral con quince días de preaviso es distinta de una revisión anual pactada.
6. **¿Puedo exportar las operaciones en CSV con la misma referencia que imprime el terminal?** Si la respuesta es no, la conciliación mensual será manual para siempre.

## Por dónde empezar esta semana

1. **Fijad la hora del cierre del datáfono** y que sea siempre la misma.
2. **Empezad a anotar la referencia de la operación** junto a cada cobro con tarjeta.
3. **Comparad los dos totales mañana** y anotad las dos cifras, coincidan o no.
4. **Sacad el contrato del datáfono** y calculad el porcentaje real de los últimos tres meses.
5. **Marcad un día al mes** para cruzar cierres, abonos y la factura de comisiones.

Dentalpin no habla con el datáfono, y conviene decirlo claro: ningún registro del software sustituye al cierre del terminal. Lo que sí hace es registrar cada cobro con su forma de pago en el momento en que se hace y permitir guardar la referencia de la operación junto a él, así que la lista de cobros con tarjeta del día sale sin exportar nada y la comparación se hace contra un dato que no ha reconstruido nadie. Lo que incluye cada versión está en [precios](/es/precios/).

## Fuentes

- Unión Europea. *Reglamento (UE) 2015/751 del Parlamento Europeo y del Consejo, de 29 de abril de 2015, sobre las tasas de intercambio aplicadas a las operaciones de pago con tarjeta*, artículos 3 y 4 (topes del 0,2 % y el 0,3 %). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32015R0751). Consultado el 29 de agosto de 2026.
- España. *Real Decreto-ley 19/2018, de 23 de noviembre, de servicios de pago y otras medidas urgentes en materia financiera*, artículo 35, apartados 3 y 4 (texto consolidado). [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036). Consultado el 29 de agosto de 2026.
- SumUp. *Precios* (plan sin cuota al 1,49 % presencial; Pagos Plus, 19 €/mes, 0,75 % en tarjetas nacionales). [sumup.com](https://www.sumup.com/es-es/precios/). Consultado el 29 de agosto de 2026.
