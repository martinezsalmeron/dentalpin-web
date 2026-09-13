---
title: "El día que se va internet: cómo sigue trabajando una clínica dental sin conexión"
description: "Qué deja de funcionar en una clínica dental cuando cae la línea, qué se puede seguir haciendo, qué preparar antes y cómo cuadrar el día cuando vuelve."
pubDate: 2026-09-13
tags: [continuidad, infraestructura, agenda, gestion]
---

Si tu software vive en el navegador contra el servidor de otro, una caída de línea para la clínica entera, agenda, historia clínica y odontograma incluidos. Si vive en un servidor dentro de la clínica, pierdes recordatorios, cita online, receta electrónica y probablemente el datáfono, pero sigues pudiendo abrir la agenda del día y escribir en la historia.

Cuál de las dos tienes es la pregunta que decide todo lo demás, y conviene saber la respuesta hoy y no el martes que toque. Lo que sigue es qué se cae exactamente, qué conviene tener preparado, qué apuntar mientras dura y en qué orden cuadrarlo después.

## Dónde corre el software decide lo que pierdes

No hay una respuesta única para "¿puedo trabajar sin internet?", porque hay tres arquitecturas distintas detrás de la palabra software y cada una se comporta de una forma.

| Qué necesitas hacer | Navegador contra servidor remoto | Servidor dentro de la clínica | Programa instalado en cada puesto |
|---|---|---|---|
| Abrir la agenda del día | ✗ No | ✓ Sí | ✓ Sí |
| Leer la historia y el odontograma | ✗ No | ✓ Sí | ✓ Sí |
| Escribir notas, presupuestos y facturas | ✗ No | ✓ Sí | ✓ Sí |
| Ver radiografías ya almacenadas | ✗ No | ✓ Sí | ~ Según dónde vivan las imágenes |
| Recordatorios, cita online y portal | ✗ No | ✗ No | ✗ No |
| Copia de seguridad fuera de la clínica | ✗ No | ~ Se reanuda al volver | ~ Se reanuda al volver |

La fila que sorprende a mucha gente es la de las radiografías. Un equipo de rayos puede estar conectado por red local y guardar en una carpeta de la clínica, o puede subir a un servicio del fabricante, y desde recepción las dos cosas se parecen hasta el día que no hay línea.

![Esquema del despliegue: navegador, Caddy en el puerto 443, frontend Nuxt, API y PostgreSQL con sus volúmenes de datos](/diagrams/install-stack.svg)

*El navegador, Caddy, el frontend, la API y la base de datos. El esquema no dice dónde está esa caja, y esa es exactamente la pregunta que hay que responder antes de un apagón.*

## Lo que se cae, en el orden en que lo vas a notar

- **La cita online deja de entrar.** Nadie te avisa de esto: simplemente no se reservan huecos durante esas horas, y no hay forma de saber cuántos se perdieron.
- **Los recordatorios no salen.** SMS, WhatsApp y correo se envían desde fuera de la clínica, así que la tanda de mañana no sale aunque el software local funcione.
- **El datáfono depende de cómo esté conectado.** Los que van por la red de la clínica se quedan mudos; los que llevan su propia SIM suelen seguir cobrando. Es una pregunta de una línea para tu proveedor de cobros y conviene hacerla antes.
- **La receta electrónica y las consultas a terceros paran.** Todo lo que es un envío a un sistema externo se queda esperando, y eso incluye la facturación telemática.
- **La copia de seguridad a la nube no se hace esa noche** si la línea sigue caída al cerrar. No es grave un día, sí lo es si nadie mira los avisos durante dos semanas.
- **El correo y el teléfono fijo por IP también son internet.** Muchas clínicas descubren en ese momento que su único teléfono pasaba por el mismo router.

## El SLA de tu proveedor no es el SLA de tu línea

Un 99,9 % de disponibilidad suena a que no pasa nada nunca. Son 43 minutos al mes y 8 horas y 46 minutos al año. Un 99,5 %, que también se publica, son unas tres horas y media al mes y casi 44 horas al año.

Esas cifras, además, solo cubren el servidor del proveedor. Tu conexión es un contrato aparte.

> **La mayoría de las caídas de una clínica pequeña empiezan en la acera, no en el centro de datos.** Una obra, un armario de fibra abierto o un router de siete años no aparecen en el SLA de nadie, y son la causa habitual de una mañana sin línea.

## El kit de apagón

Nada de esto es caro y todo hay que montarlo antes, porque el momento de buscarlo no es cuando recepción tiene a cuatro personas esperando.

1. **Imprime la agenda del día siguiente antes de cerrar.** Una hoja, con nombre, hora, sillón y tratamiento previsto. Es la pieza que convierte un apagón en una molestia en lugar de en un día perdido.
2. **Ten una segunda vía de datos probada**, un router con SIM o los datos compartidos desde un móvil. Probada quiere decir que alguien la ha encendido alguna vez, no que existe en un cajón.
3. **Pon un SAI en el servidor y también en el router**, porque un servidor vivo detrás de un router muerto no sirve de nada.
4. **Ten consentimientos y hojas de evolución en papel ya impresos**, los cinco o seis que usas de verdad.
5. **Guarda la lista de teléfonos del día fuera del sistema**, que es lo que te permite avisar a quien viene a las 17:00.
6. **Escribe quién hace qué**: quién llama al operador, quién avisa a los pacientes, quién se encarga de apuntar lo que pasa.

![Agenda en vista de día con las citas de la jornada repartidas por franjas horarias](/screenshots/schedule-day.png)

*Esta es la pantalla que tiene que poder salir en papel la noche anterior, no la mañana en que hace falta.*

## Lo que hay que apuntar mientras dura

Trabajar sin conexión no es el problema. El problema es volver y no saber qué pasó entre las nueve y la una.

- **Quién vino y quién no**, con la hora real, para que las ausencias queden registradas donde toca.
- **Qué se hizo en cada paciente**, con el detalle que pondrías en la historia clínica, no un resumen de tres palabras.
- **Los lotes y referencias de implantes y material** que normalmente rellena el software solo. Esto es lo que más se pierde y lo más difícil de reconstruir después.
- **Todo cobro que se acepte**, importe, forma de pago y a qué tratamiento corresponde.
- **Los datos de los pacientes nuevos**, completos, porque una ficha creada de memoria tres horas después es una ficha con errores.
- **Quién llamó y para qué**, incluidas las cancelaciones, que son las que descuadran la agenda del día siguiente.

> **Lo que no se apunta durante la caída no se recupera después.** El software vuelve con todo lo que tenía antes de las nueve, y lo que pasó mientras tanto solo existe en el papel que alguien haya rellenado.

## Cuadrar el día cuando vuelve la línea

El orden importa, porque algunas cosas dependen de otras y porque la tentación es empezar por lo fácil.

1. **Comprueba primero que la copia de seguridad de anoche se hizo**, y lanza una ahora si no.
2. **Da de alta a los pacientes nuevos** antes de tocar nada más, porque todo lo demás cuelga de su ficha.
3. **Pasa las notas clínicas del papel**, paciente por paciente, el mismo día. Al día siguiente ya nadie recuerda qué quería decir una abreviatura.
4. **Registra los cobros** y cuádralos con lo que diga el datáfono y la caja.
5. **Ajusta la agenda**: ausencias, cancelaciones recogidas por teléfono y lo que se movió a otro día.
6. **Revisa qué recordatorios no salieron** y decide cuáles tiene sentido mandar todavía. Un recordatorio de una cita que ya pasó hace más daño que ninguno.
7. **Guarda el papel hasta comprobar que todo está pasado**, y destrúyelo después como el resto de documentación clínica.

## Lo que el RGPD espera que hayas pensado

La disponibilidad no es un extra de la seguridad, es una de las tres propiedades que el reglamento nombra. El artículo 32.1 pide, entre las medidas técnicas y organizativas apropiadas:

> **b) la capacidad de garantizar la confidencialidad, integridad, disponibilidad y resiliencia permanentes de los sistemas y servicios de tratamiento; c) la capacidad de restaurar la disponibilidad y el acceso a los datos personales de forma rápida en caso de incidente físico o técnico.**

Una caída de línea de dos horas no es por sí misma una brecha que haya que notificar. Lo que sí encaja en ese artículo es no poder acceder a la historia clínica de un paciente que está sentado en el sillón, o perder el trabajo de una mañana porque nadie había pensado en el papel.

Esto no es asesoramiento legal. Si tienes dudas sobre tu caso concreto, tu delegado de protección de datos o tu asesoría son quienes deben responderlas.

## Cinco preguntas para tu proveedor antes de necesitarlas

- **¿Qué parte exacta del producto sigue funcionando si la clínica se queda sin línea?** Vale una lista, no un "está todo en la nube, no te preocupes".
- **¿Dónde está físicamente la base de datos** y qué hace falta para llegar a ella sin vosotros.
- **¿Publicáis un SLA, con qué porcentaje y qué compensa** si no se cumple.
- **¿Qué pasa con los recordatorios que no salieron?** ¿Se reintentan solos, se pierden, se acumulan y salen todos de golpe?
- **¿Puedo sacar la agenda de mañana en PDF o CSV yo solo**, sin abrir un ticket.

Las respuestas a estas cinco dicen más sobre un producto que la mitad de su página de características.

En Dentalpin el sistema entero se puede instalar en un equipo de la clínica, así que un corte de línea es un corte de comunicaciones y no un corte de historia clínica: la agenda, el odontograma y la facturación siguen abiertos en la red local mientras fuera no hay nada. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/), y si quieres ver cómo queda el montaje antes de decidir, [instalarlo lleva tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículo 32, apartado 1, letras b) y c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 13 de septiembre de 2026.
