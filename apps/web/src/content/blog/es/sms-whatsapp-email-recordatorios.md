---
title: "SMS, WhatsApp o email: lo que cuesta de verdad cada recordatorio"
description: "Un SMS a España cuesta unas 550 veces lo que un correo, y las tildes doblan la factura porque no están en GSM-7. Precios publicados y qué llega de verdad."
pubDate: 2026-08-28
tags: [recordatorios, sms, whatsapp, email, costes, agenda]
---

Un recordatorio por correo cuesta 0,00016 dólares, uno por WhatsApp menos de un céntimo, y un SMS a un móvil español cuesta 0,0875 dólares en la tarifa pública de Twilio: unas 550 veces el correo. Esa es la respuesta corta. Lo que decide tu factura de verdad no es cuál eliges, sino cuántos mensajes mandas por cita, cuántas tildes lleva el texto (sí, las tildes cuestan dinero) y cuántos pacientes te contestan.

Todos los precios de abajo salen de la página de tarifas de cada proveedor, consultada el 28 de agosto de 2026. Ninguno es una estimación ni viene de un comparador.

> **Twilio publica sus tarifas en dólares, no en euros.** Aquí van tal cual las publica, porque convertirlas a euros con el cambio de hoy daría una cifra que mañana ya no se puede comprobar. Tu proveedor te facturará en su moneda y con su margen encima.

## Lo que cuesta un mensaje, canal por canal

Tres formas de cobrar distintas, y esa es la mitad de la historia.

| Canal | Precio por mensaje | Cómo se cobra | ¿Recibe respuestas? |
|---|---|---|---|
| Correo (Amazon SES, plan Essentials) | 0,16 $ por cada 1.000 envíos | Por correo enviado, llegue o no a la bandeja | ✓ Sí |
| WhatsApp (Twilio más la tarifa de Meta) | 0,005 $ de Twilio, más la tarifa de Meta | Solo cuando la plantilla se entrega | ✓ Sí |
| SMS a España (Twilio) | 0,0875 $ | Por segmento, no por mensaje | ~ Solo si envías desde un número |

La columna de la derecha es la que casi nadie mira antes de firmar, y es la que rompe el flujo de "responde SÍ para confirmar". Volvemos a ella más abajo.

El SMS es el único canal cuyo precio depende del país al que escribes. Estas son las tarifas que Twilio publica para los mercados donde suele estar el lector de esta web:

| Destino | Precio por segmento |
|---|---|
| Polonia | 0,0457 $ |
| Portugal | 0,0501 $ |
| Reino Unido | 0,056 $ |
| Francia | 0,0798 $ |
| España | 0,0875 $ |
| Italia | 0,0927 $ |
| Alemania | 0,112 $ |

Un mismo recordatorio cuesta dos veces y media más en Alemania que en Polonia. Si tienes pacientes con móvil extranjero, ya lo estás pagando.

## Una tilde puede doblar la factura del SMS

Aquí está el error caro, y no lo comete el software: lo comete quien escribe la plantilla.

Un SMS no se cobra por mensaje, se cobra por segmento. Con la codificación GSM-7 caben 160 caracteres en un segmento, y 153 por segmento cuando el mensaje se parte en varios, porque siete caracteres se van en la cabecera que los une.

En cuanto metes un carácter que GSM-7 no sabe representar, el mensaje entero cambia a la codificación UCS-2 y el límite se desploma a 70 caracteres, o 67 por segmento en un mensaje partido. Twilio nombra cuatro cosas que lo provocan: los emojis, los alfabetos no latinos, los caracteres latinos extendidos y las comillas tipográficas.

Y aquí llega el detalle que afecta a cualquier plantilla escrita en castellano correcto. El juego GSM-7 tiene 128 caracteres, e incluye la ñ, la ü, la é y la à, pero **no incluye la á, la í, la ó ni la ú**.

> **"Clínica" y "día" ya te sacan del segmento barato.** Las tildes agudas sobre a, i, o y u no están en GSM-7, así que un recordatorio escrito con la ortografía correcta viaja en UCS-2 y cuenta 67 caracteres por segmento en vez de 153. Un texto de 120 caracteres pasa de un segmento a dos, y uno de 140 a tres.

Quitar las tildes para ahorrar no es la respuesta: un mensaje sin acentos parece un fraude, y el paciente que no confirma cuesta mucho más que el segundo segmento. Lo que sí funciona es contar de verdad.

Tres comprobaciones que valen dinero cada mes:

- **Cuenta 67 caracteres por segmento**, no 153, si la plantilla lleva tildes. Es la cuenta real y casi ningún presupuesto la hace.
- **Cuenta los caracteres de la plantilla ya renderizada**, con el nombre más largo de tu base de pacientes dentro, no con el texto de ejemplo.
- **Escribe la plantilla en un editor de texto plano.** El procesador de textos sustituye comillas y guiones por versiones tipográficas sin avisar, y esas tampoco están en GSM-7.

Twilio cobra además 0,001 $ por cada mensaje que termina en estado fallido, así que una lista de móviles sucia también tiene precio, aunque sea pequeño.

![Agenda del día con las citas de cada profesional, sus horas y su estado](/screenshots/schedule-day.png)

*Un día de agenda. Cada cita de esta pantalla es al menos un mensaje al mes que va a la factura.*

## En WhatsApp, el precio depende de si el paciente contesta

Meta cambió el modelo el 1 de julio de 2025 y desde entonces factura por mensaje, no por conversación de 24 horas. Se cobra cuando la plantilla se entrega, no cuando se envía.

Las plantillas se clasifican en marketing, utilidad y autenticación, y un recordatorio de cita es de utilidad. Lo que hace que el precio sea difícil de predecir es lo que Meta deja gratis:

- **Todo lo que va dentro de una ventana de atención abierta.** Los mensajes que no son plantilla y las plantillas de utilidad no se cobran mientras esa ventana esté abierta. La abre el paciente cuando te escribe.
- **Las ventanas de entrada gratuita duran 72 horas** y en ellas no se cobra ningún mensaje, plantillas incluidas. Se abren desde un anuncio de clic a WhatsApp o desde el botón de llamada a la acción de una página.
- **Los tramos por volumen bajan la tarifa** de utilidad y autenticación según lo que envías en el mes. Son específicos de cada mercado y categoría, se agregan a nivel de portafolio de negocio y se reinician cada mes.

La consecuencia práctica es contraintuitiva: un recordatorio que invita a contestar sale más barato que uno que no, porque la respuesta del paciente abre la ventana y el siguiente mensaje de esa conversación es gratis.

Meta publica sus tarifas por mercado y moneda en fichas descargables, con los importes vigentes desde el 1 de julio de 2026, cuando España, Italia, Polonia y Reino Unido pasaron a tener tarifa propia en vez de la regional. Sobre esa tarifa, tu proveedor pone la suya: Twilio cobra 0,005 $ por mensaje, la misma cifra para todos los mercados, y pasa la de Meta por encima.

**Los límites de envío casi seguro no te afectan.** WhatsApp escalona cuántos números distintos puedes contactar en 24 horas fuera de una ventana de atención: 250, luego 2.000, luego 10.000, 100.000 e ilimitado. Una clínica con cuarenta citas al día escribe a cuarenta números, así que el primer escalón le sobra. El ascenso es automático cuando la calidad es buena y has usado al menos la mitad de tu límite en los últimos siete días, y se aplica en menos de seis horas.

## El canal más barato es también el que peor llega

Con 0,16 $ por cada mil correos, el email no compite: es cien veces más barato que cualquier otra cosa. El problema es que el precio se paga por envío y la entrega no está incluida.

Gmail y Yahoo endurecieron sus requisitos en febrero de 2024 y hoy son el filtro real. Conviene separar lo que se aplica a todo el mundo de lo que solo se aplica a los que mandan mucho, porque casi todos los artículos sobre esto lo mezclan.

| Requisito | A quién se aplica | Qué exige |
|---|---|---|
| SPF o DKIM | ✓ A todos los remitentes | Al menos uno de los dos, siempre |
| SPF, DKIM y DMARC | ~ Solo por encima de 5.000 diarios a Gmail | Los tres, con DMARC aunque sea en `p=none` |
| Baja en un clic | ~ Solo por encima de 5.000 diarios | Cabecera `List-Unsubscribe` con baja en un clic |
| Tasa de spam | ✓ A todos | Por debajo del 0,3 % en Postmaster Tools |

> **El umbral de 5.000 mensajes diarios no es el tuyo, y no es la parte que te va a fallar.** Una clínica no llega ni de lejos. Lo que sí se le aplica desde el primer correo es la autenticación del dominio y la tasa de quejas, y ahí es donde se cae un recordatorio enviado desde una cuenta gratuita sin SPF ni DKIM configurados.

Google recomienda además quedarse por debajo del 0,10 % de quejas y no acercarse nunca al 0,30 %. Yahoo pide lo mismo por debajo del 0,3 % y exige atender las bajas en dos días. Son umbrales bajos: con 800 correos al mes, tres pacientes marcando spam ya te ponen en el 0,375 %.

## El remitente bonito es el que no puede recibir respuestas

Un remitente alfanumérico es ese "CLINICA" que aparece en vez de un número. Twilio lo ofrece sin coste en 150 países, y tiene una limitación que decide el diseño de todo el flujo: solo sirve para enviar SMS, no para recibirlos.

Si tu recordatorio dice "responde SÍ para confirmar", con un remitente alfanumérico esa respuesta no llega a ninguna parte. Para recibirla necesitas alquilar un número, y eso ya no es gratis. Twilio publica estos precios de alquiler mensual:

- **Reino Unido**, número móvil: 2,50 $ al mes.
- **Alemania**, número móvil: 30 $ al mes.
- **Italia**, número móvil: 45 $ al mes.
- **Portugal**, número móvil: 135 $ al mes.

Entre el más barato y el más caro de esos cuatro hay más de cincuenta veces de diferencia, así que conviene mirar la tarifa de tu país antes de decidir que la confirmación por SMS es el plan. WhatsApp y el correo no tienen este problema: los dos son bidireccionales desde el primer día.

## Lo que suma en un mes de verdad

Pongamos una clínica con cuarenta citas al día, cinco días y medio a la semana: unos 800 recordatorios al mes, uno por cita. Con las tarifas publicadas arriba, y sin contar el margen de tu proveedor:

| Canal | 800 recordatorios al mes |
|---|---|
| Correo | 0,13 $ |
| WhatsApp, solo la parte de Twilio | 4,00 $ más la tarifa de Meta |
| SMS sin tildes, un segmento | 70,00 $ |
| SMS con tildes, dos segmentos | 140,00 $ |
| SMS con tildes, 140 caracteres, tres segmentos | 210,00 $ |

La fila de abajo no es un escenario raro. Es un recordatorio con el nombre de la clínica, la fecha, la hora, la dirección y un teléfono para anular, escrito en castellano correcto.

Añade un segundo recordatorio el mismo día y todas las cifras se doblan otra vez. Esa decisión, mandar uno o dos, cuesta más dinero que la elección del canal.

![Ficha de paciente con el histórico de actividad filtrable por visitas, tratamientos, finanzas y comunicaciones](/screenshots/patient-timeline.png)

*El histórico de un paciente con las comunicaciones como filtro. Es donde se comprueba si el mensaje se entregó o solo se envió.*

## Cómo repartir los canales sin complicarlo

1. **Pregunta el canal preferido en la primera visita** y guárdalo en la ficha. Es el dato que más reclamaciones evita y el que casi nadie registra.
2. **Pon el correo por defecto** para el recordatorio con antelación, porque a ese precio da igual mandarlo a todos.
3. **Deja el SMS para el aviso del mismo día**, que es cuando el coste por mensaje se justifica porque el hueco vale mucho más.
4. **Usa WhatsApp donde tus pacientes ya lo usan**, y escribe la plantilla invitando a responder, que además de confirmar la cita abre la ventana gratuita.
5. **Revisa la plantilla de SMS una vez al trimestre** contando caracteres, con el nombre más largo de tu base dentro.
6. **Mide entregas, no envíos.** Un informe de "800 enviados" no dice nada; el número que importa es cuántos se entregaron y cuántos rebotaron.

Lo que ninguna hoja de cálculo te va a decir es cuántos mensajes manda tu software por cita sin que se lo pidas. Merece la pena contarlos un mes antes de negociar la tarifa.

En Dentalpin la agenda, la ficha y el registro de comunicaciones comparten base de datos, así que el recuento de lo enviado y lo entregado sale del mismo sitio del que sale la agenda, y el software es open source: puedes verlo en [precios](/es/precios/). Dicho eso, la parte de este artículo que te ahorra dinero de verdad no depende del programa que uses, sino de contar los caracteres y de no mandar tres mensajes donde basta uno.

## Fuentes

- Precios de SMS de Twilio por país, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/es), páginas de España, Francia, Portugal, Alemania, Italia, Polonia y Reino Unido, consultadas el 28 de agosto de 2026.
- Precios de WhatsApp en Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), consultada el 28 de agosto de 2026.
- Límites de caracteres y segmentos de un SMS, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), consultada el 28 de agosto de 2026.
- Juego de caracteres GSM-7, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), consultada el 28 de agosto de 2026.
- Precios de la WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consultada el 28 de agosto de 2026.
- Límites de envío de la WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), consultada el 28 de agosto de 2026.
- Precios de Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), consultada el 28 de agosto de 2026.
- Directrices para remitentes de correo de Google, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), consultada el 28 de agosto de 2026.
- Buenas prácticas para remitentes de Yahoo, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), consultada el 28 de agosto de 2026.
