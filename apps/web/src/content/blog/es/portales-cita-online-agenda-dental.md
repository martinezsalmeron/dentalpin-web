---
title: "Portales de cita online y tu agenda: qué sincroniza de verdad y de quién son los datos"
description: "Antes de conectar Doctoralia a tu agenda: si la sincronización es bidireccional, qué pasa con el hueco que acabas de dar por teléfono y quién es responsable de qué."
pubDate: 2026-10-02
tags: [agenda, citas-online, rgpd, gestion-clinica]
---

Antes de conectar un portal de citas a tu agenda hay cuatro cosas que decidir, y ninguna aparece en la demo: si la sincronización va en los dos sentidos o solo en uno, qué ocurre con el hueco que recepción acaba de dar por teléfono, qué campos de la ficha del paciente cruzan de verdad, y quién es responsable del tratamiento de cada cosa. Doctoralia publica que su API es bidireccional. Su propia política de privacidad reparte los papeles en tres, y uno de ellos no es el que casi nadie espera.

Esas cuatro respuestas deciden si el portal es una recepción más o una segunda agenda que vas a mantener a mano.

> **Este post no habla de abrir tu propia agenda en tu propia web.** Eso es otra decisión y la tenemos aparte, en [reserva de citas online](/es/blog/reserva-citas-online-dental/). Aquí el paciente reserva en la plataforma de un tercero, y ahí viven también su primer contacto contigo y, muchas veces, la reseña.

## La sincronización bidireccional, en las palabras del propio portal

Doctoralia describe el mecanismo en su página de integraciones: "A través de una API bidireccional robusta y segura, facilitamos un flujo de datos constante". Y concreta las dos direcciones: "Las citas reservadas en Doctoralia aparecen de manera inmediata en el software integrado, y cualquier cambio realizado en la agenda local se refleja al instante en nuestro marketplace".

Eso es una descripción técnica, no una promesa contractual. Conviene leerla como lo que es: el portal declara que escribe en tu agenda y que lee de ella, sin publicar latencia, ni ventana de reintento, ni qué pasa cuando la conexión se cae a media mañana.

La misma página publica la lista de programas de gestión integrados. Aparecen Clinic Cloud, TuoTempo, Nubimed, MN, DASI, Ofimedic, iSalus, Axon, Salus, Archimed, Optimydent, Clinni y Flow. Si el tuyo no está, no hay API oficial y lo que te venderán es un calendario aparte.

Un detalle de esa lista que conviene saber antes de leerla como un ranking: el pie de la propia web de Doctoralia agrupa Clinic Cloud, TuoTempo y Noa bajo "Otros productos". Son productos del mismo grupo, Docplanner, no terceros que pasaron una homologación.

## El hueco de los treinta segundos

El caso que rompe una integración no es la reserva normal, es la simultánea. Recepción da un hueco por teléfono a las 10:14:30 y alguien lo reserva en el portal a las 10:14:45, cuando la disponibilidad publicada todavía no se había actualizado.

Ninguna de las dos partes publica qué sucede entonces. Por eso la pregunta no se resuelve leyendo: se resuelve pidiéndolo por escrito antes de firmar y probándolo en un piloto de dos semanas.

> **Prueba esto tú, con un hueco real y un cronómetro.** Bloquea un hueco en tu agenda y mira cuánto tarda en desaparecer del portal. Luego hazlo al revés. El número que salga es tu riesgo de doble cita, y es el único dato de esta decisión que nadie te va a dar por escrito.

![Vista semanal de la agenda con las citas de cada profesional en su columna](/screenshots/schedule-week.png)

*La agenda en vista semanal, con una columna por profesional.*

## Quién es responsable de qué, en tres papeles y no en uno

Aquí está la parte que casi nadie mira, y la política de privacidad de Doctoralia la explica con más precisión que la mayoría del sector. El mismo proveedor ocupa tres posiciones distintas a la vez.

| Qué datos | Papel del portal | Qué implica para la clínica |
|---|---|---|
| Tu relación comercial: contrato, facturación, reclamaciones | Responsable independiente | ✗ No lo decides tú, ni se negocia en el contrato |
| Infraestructura técnica y arquitectura del producto | ~ Corresponsable con otras empresas del grupo | Hay un acuerdo interno de reparto que tú no firmas |
| Los datos de tus pacientes que tratas en su plataforma | ✓ Encargado del tratamiento | Necesitas contrato del artículo 28 y das instrucciones |
| Las reseñas de tu perfil de empresa en Google | Google, como responsable independiente | ✗ No las gestiona el portal ni tú |

La fila tercera es la que te interesa y es literal: "Cuando utilizas nuestra Plataforma de Profesionales para tratar datos personales de tus propios clientes, pacientes o empleados, Tú actúas como Responsable del Tratamiento y Nosotros actuamos como Encargado del Tratamiento".

Esa frase es buena noticia y una obligación al mismo tiempo. Significa que los datos de tus pacientes siguen siendo tuyos, y significa que el artículo 28 del RGPD te exige un contrato de encargo firmado, con su contenido mínimo. Lo tenemos desarrollado en [el contrato de encargado del tratamiento](/es/blog/contrato-encargado-tratamiento-software-dental/).

La fila primera es la que sorprende. Para su propia relación comercial contigo, el portal decide solo: "Doctoralia decide de forma independiente cómo tratar los datos personales y es la única responsable de dichas actividades".

## Tu perfil y tus reseñas no funcionan como tu ficha de paciente

Dos cosas que publica la misma política y que cambian cómo se planifica una salida.

La primera es que el perfil profesional puede existir sin que tú seas cliente. Su definición de "Profesionales" incluye a "profesionales con perfiles públicos en nuestro Sitio Web (independientemente de si tienen una relación comercial con nosotros o no)". Darse de baja del servicio y desaparecer de la plataforma no son la misma operación.

La segunda es el plazo y lo que ocurre después. La política fija la conservación del perfil en "vida útil de la cuenta + 6 años", y describe la retirada del perfil público como una retirada del dominio público, no una supresión: se conserva de forma interna.

> **Las reseñas pueden volver.** La política lo dice sin rodeos: si retiran tu perfil dejan de mostrar las opiniones, pero "si posteriormente creas un nuevo perfil de Profesional en nuestro Sitio Web, podremos volver a publicar dichas opiniones en ese nuevo perfil". Una reseña de 2021 puede reaparecer en un perfil nuevo de 2027.

Y sobre Google, la política es explícita en que ahí el portal no es tu intermediario: "las opiniones publicadas en tu Perfil de Empresa en Google son gestionadas por Google en calidad de responsable del tratamiento y no por Nosotros". Añade que Google "podrá transferir tus datos a terceros países".

![Ficha de paciente con la pestaña de datos personales y los campos de contacto](/screenshots/patients.png)

*La pestaña de datos del paciente, con los campos que una integración puede llegar a escribir.*

## Qué acordar por escrito antes de conectar nada

1. **Pide la dirección de cada campo**, uno por uno: qué escribe el portal en tu ficha y qué lee de ella. "Bidireccional" describe la agenda, no necesariamente la ficha.
2. **Fija qué pasa con el solape** y quién lo resuelve, con un procedimiento, no con una buena intención.
3. **Firma el contrato del artículo 28** antes de activar la integración, no después del primer paciente.
4. **Pide la lista de subencargados** y guarda la fecha en que te la dieron. Doctoralia publica la suya, así que no es una petición rara.
5. **Decide qué campos no cruzan nunca**: alergias, notas clínicas, importes pendientes. Un portal de citas no necesita el odontograma.
6. **Acuerda la salida antes de la entrada**: cómo exportas el histórico de citas, qué pasa con el perfil y qué pasa con las reseñas.
7. **Haz el piloto con un solo profesional** y una franja de la semana, con la agenda de papel cerca, durante dos semanas.
8. **Anota la integración en tu registro de actividades de tratamiento**, porque es un flujo de datos nuevo y hay que documentarlo.

El paso seis es el que nadie hace y el que más cuesta después. Preguntar por la salida mientras te están vendiendo la entrada es el único momento en que vas a obtener una respuesta por escrito.

## Lo que tu propio programa tiene que poder hacer

La integración solo es tan buena como la agenda que hay detrás. Esto es lo que decide si el portal te ayuda o te duplica el trabajo.

- **Una API propia** sobre tu agenda y tus pacientes, para que la integración no dependa de que el portal te incluya en su lista.
- **Bloqueos de disponibilidad reales**, por profesional y por gabinete, que el portal lea en lugar de adivinar.
- **Distinguir el origen de cada cita**, para saber cuántas vienen del portal y cuántas del teléfono antes de renovar la cuota.
- **Campos de contacto separados de los clínicos**, para que una integración nunca pueda escribir ni leer lo que no le toca.
- **Registro de accesos** con usuario, fecha y operación, incluidos los accesos de una integración. Lo tratamos en [auditoría de accesos a la historia clínica](/es/blog/auditoria-accesos-historia-clinica/).
- **Exportación completa del histórico de citas**, porque el día que cambies de portal ese histórico es lo único que te quedará.

En Dentalpin la agenda tiene API propia, el origen de cada cita queda registrado y los campos de contacto viven separados de los clínicos, así que puedes conectar el portal que quieras sin depender de una homologación. El código está publicado y los [precios](/es/precios/) también.

Esto no es asesoramiento legal. El contrato de encargo y el registro de actividades dependen de cómo trates los datos en tu clínica, y conviene revisarlos con tu asesoría antes de activar una integración.

## Fuentes

- Doctoralia, "Integraciones Agenda online", `pro.doctoralia.es/integraciones`: API bidireccional, lista de partners integrados y sello de integración. Consultado el 2 de octubre de 2026. <https://pro.doctoralia.es/integraciones>
- Doctoralia Internet S.L., Política de Privacidad de la Plataforma de Profesionales, apartados 1.1 (responsable independiente), 1.2 (corresponsables), 2 (encargado del tratamiento), el apartado sobre Perfil de Empresa en Google y la tabla de plazos de conservación. Consultado el 2 de octubre de 2026. <https://www.doctoralia.es/privacidad>
- Reglamento (UE) 2016/679, artículo 28, sobre el encargado del tratamiento y el contenido mínimo del contrato de encargo. Consultado el 2 de octubre de 2026.
