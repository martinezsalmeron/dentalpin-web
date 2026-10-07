---
title: "Enviar una radiografía o un informe: por qué el canal importa más que el consentimiento"
description: "La AEPD solo admite enviar información sanitaria por correo si los datos van cifrados, y no se pronuncia sobre la mensajería. Qué hacer con la panorámica."
pubDate: 2026-10-07
tags: [rgpd, proteccion-de-datos, historia-clinica, seguridad]
---

El paciente pide su informe "por WhatsApp", el ortodoncista pide la panorámica y el laboratorio pide las fotos. El consentimiento no es la parte difícil de ninguno de los tres casos: casi siempre existe, y cuando no existe se pide en treinta segundos. Lo difícil es el canal. La posición de la AEPD sobre el correo electrónico es una sola frase y tiene una condición dentro: en un centro sanitario hay que evitar enviar información sanitaria por correo, salvo que los datos vayan cifrados.

Esto no es asesoramiento legal. Es la lectura de las fuentes oficiales que se citan al final, consultadas el 7 de octubre de 2026.

## Esto no es ninguna de las otras cuatro preguntas

Conviene separarlo desde el principio, porque son cinco cosas distintas y cuatro ya tienen su respuesta en otro sitio.

- **Los recordatorios de cita** no llevan contenido clínico. Son un mensaje con una fecha y una hora, y el problema ahí es de consentimiento y de canal comercial, que es lo que cubren [los recordatorios por WhatsApp](/es/blog/recordatorios-cita-whatsapp-dental/) y [la comparación de canales](/es/blog/sms-whatsapp-email-recordatorios/).
- **El derecho de acceso** decide qué tienes que entregar y en qué plazo cuando [el paciente pide su historia clínica](/es/blog/paciente-pide-su-historia-clinica/). Resuelve el qué, y dice muy poco del cómo.
- **El RGPD de la clínica** es el marco general: [bases jurídicas, registro y plazos](/es/blog/rgpd-clinica-dental/).
- **Esto** es la pregunta de todos los días que nadie contesta: ya has decidido que hay que enviarlo y a quién, y lo que falta es por dónde.

> **El consentimiento legitima la comunicación, no la hace segura.** Son dos capas independientes del artículo 32 del RGPD: una autoriza que el dato salga, la otra decide qué pasa si el envío se equivoca de destinatario. Un envío perfectamente consentido a la dirección equivocada sigue siendo una brecha.

## Lo que dice la AEPD, que es poco y es concreto

La Agencia responde a esta pregunta en una de sus preguntas frecuentes para profesionales sanitarios, la FAQ-1638, titulada "¿Puedo enviarle a un paciente sus informes médicos por correo electrónico?". La respuesta empieza recordando el riesgo y termina en una regla con una excepción:

> **La frase exacta de la AEPD.** *"En un centro sanitario debe evitarse enviar información sanitaria mediante correos electrónicos o redes públicas abiertas, salvo que los datos se hayan cifrado."*

Hay que leer con cuidado lo que esa frase hace y lo que no hace. Lo que hace es convertir el cifrado en la condición que vuelve aceptable el correo electrónico, no en una recomendación. Lo que no hace es pronunciarse sobre la mensajería: la FAQ no menciona WhatsApp ni ningún otro servicio de mensajes.

La misma respuesta añade dos cosas que suelen olvidarse en una clínica pequeña. Enumera entre las conductas a evitar *"dejar el ordenador encendido cuando el usuario no esté presente"* y *"compartir claves y contraseñas"*, y exige cifrar *"el contenido de dispositivos portátiles o memorias USB, cuando se vaya a sacar información fuera de las instalaciones sanitarias"*.

![Historia clínica de un paciente con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*La ficha de la que sale lo que se pide: el odontograma, las alertas y el plan de tratamiento del paciente.*

## Por qué el cifrado de extremo a extremo no cierra el tema

La respuesta que circula es que WhatsApp cifra de extremo a extremo y por tanto vale. No vale, y el motivo es que el transporte nunca fue el único problema. Lo que queda fuera del cifrado es casi todo lo que importa aquí.

- **Los metadatos.** Quién habla con la clínica, cuándo y con qué frecuencia. Que una persona mantenga una conversación semanal con una clínica dental es en sí mismo un dato sobre su salud, y eso viaja en claro.
- **El dispositivo.** El mensaje se descifra en un móvil, normalmente el personal de alguien del equipo, con sus aplicaciones, su pantalla de bloqueo y sus permisos.
- **La copia de seguridad.** Una radiografía enviada por un servicio de mensajes acaba en la copia automática del teléfono y en la galería de imágenes. Ahí ya no hay cifrado de extremo a extremo, hay una nube de consumo.
- **La relación con el proveedor.** Un servicio de mensajería de consumo no es un encargado del tratamiento de la clínica, no hay contrato del artículo 28 del RGPD y no hay nadie a quien reclamar.

> **El asunto del correo y el cuerpo del mensaje no se cifran nunca.** Es el detalle que invalida la mitad de los envíos que se hacen bien: se adjunta el PDF cifrado y se escribe "Radiografía de Marta Ruiz" en el asunto. El nombre del paciente acaba de viajar en claro de todas formas.

## Los canales, uno a uno

| Canal | ¿Sirve para contenido clínico? | Qué lo decide |
|---|---|---|
| Correo con adjunto cifrado y clave aparte | ✓ Sí | Es la condición que pone la AEPD |
| Correo sin cifrar | ✗ No | La FAQ-1638 lo excluye salvo cifrado |
| WhatsApp u otra mensajería de consumo | ✗ No | Metadatos, copia del móvil y sin contrato de encargado |
| Entrega en mano en la clínica, en CD o USB cifrado | ✓ Sí | No hay transmisión y la identidad se comprueba en persona |
| Correo postal en sobre cerrado | ~ Sirve, con reservas | Protegido, pero sin acuse ni trazabilidad útil |
| Fax | ✗ No | Transmisión sin cifrar y errores de marcación |
| Portal del paciente con sesión autenticada | ✓ Sí | Autenticación, registro de acceso y sin clave fuera de banda |

## Cómo se hace un envío que aguanta una inspección

1. **Decide la base antes del canal.** Petición del propio paciente, derivación consentida o una obligación legal. Si no hay ninguna de las tres, el envío no se arregla cifrándolo.
2. **Comprueba la identidad y la dirección.** El error de destinatario es la causa más común de brecha en una clínica, y no lo corrige ningún cifrado.
3. **Cifra el archivo, no el mensaje.** Un contenedor con cifrado AES de al menos 256 bits, generado al crear el archivo.
4. **Manda la contraseña por otro canal.** Por teléfono, por SMS o en persona. En el mismo correo no es otro canal.
5. **Deja el asunto y el cuerpo limpios.** Sin nombre, sin número de historia, sin diagnóstico. "Documentación solicitada" basta.
6. **Anota el envío en la ficha.** Qué se envió, a quién, cuándo y con qué base. Sin eso no puedes demostrar después que el envío fue legítimo.
7. **Borra el archivo temporal.** El PDF que generaste para adjuntarlo no tiene por qué quedarse en el escritorio del ordenador de recepción.

El punto 4 es el que más se incumple sin mala intención, y el punto 5 el que casi nadie sabe que existe. Entre los dos explican la mayoría de los envíos que parecen correctos y no lo son.

## La respuesta de baja tecnología sigue siendo válida

Hay una salida que ningún proveedor de software menciona porque no vende nada: dar al paciente su derivación y su radiografía en mano, en la clínica, en un CD o un USB. No hay transmisión, la identidad se comprueba mirando a la persona y el acto queda registrado en la ficha.

Para el laboratorio y para el ortodoncista con los que se trabaja cada semana, la respuesta es distinta y mejor: intercambiar claves públicas una vez y usar cifrado asimétrico, que no requiere compartir ninguna contraseña en cada envío.

![Cronología de un paciente con alertas clínicas, plan activo y filtros por visitas, tratamientos, movimientos financieros y comunicaciones](/screenshots/patient-timeline.png)

*La pestaña de actividad de un paciente, con el filtro de comunicaciones entre los demás tipos de registro.*

## La conclusión honesta es dejar de enviar archivos

Todo lo anterior es una lista de precauciones para un envío que, hecho de otra forma, no hace falta. Si el documento se recoge desde una sesión autenticada en lugar de viajar como adjunto, desaparecen las tres cosas que dan problemas: no hay contraseña fuera de banda, no hay archivo en una copia de seguridad ajena y queda constancia de quién lo abrió y cuándo.

Eso es lo que hace un [portal del paciente](/es/blog/portal-del-paciente-dental/), y es la razón por la que es la recomendación de este artículo y no el correo cifrado. En Dentalpin el documento se publica en el portal y el acceso queda registrado con su autor y su fecha, así que el envío por correo se reserva para los casos en los que no hay alternativa. El código es abierto, de modo que el registro de accesos se audita en lugar de creerse, y el [precio está publicado](/es/precios/).

## Fuentes

- Agencia Española de Protección de Datos, preguntas frecuentes, Salud · Profesionales sanitarios, FAQ-1638, "¿Puedo enviarle a un paciente sus informes médicos por correo electrónico?": [aepd.es](https://www.aepd.es/preguntas-frecuentes/16-salud/2-profesionales-sanitarios/FAQ-1638-puedo-enviarle-a-un-paciente-sus-informes-medicos-por-correo-electronico). Consultada el 7 de octubre de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 9, 28 y 32: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 7 de octubre de 2026.
