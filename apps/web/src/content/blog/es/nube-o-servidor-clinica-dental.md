---
title: "Nube o servidor propio para una clínica dental: cómo decidir"
description: "Nube o servidor en la clínica: qué cambia de verdad, qué exige el RGPD en los dos casos y las cinco preguntas que deciden la respuesta para tu clínica dental."
pubDate: 2026-08-09
tags: [nube, servidor, infraestructura, rgpd]
---

La decisión no se juega en la seguridad, se juega en quién responde cuando algo falla y en cuánto tarda la clínica en volver a trabajar. Elige nube si nadie en la clínica quiere ser responsable de copias de seguridad ni de actualizaciones. Elige servidor propio si necesitas seguir atendiendo cuando se cae internet, o si quieres tener los datos físicamente bajo tu control. Los dos son legales y los dos te exigen exactamente el mismo papeleo.

Lo que sigue es cómo llegar a tu respuesta sin depender de lo que te cuente un comercial.

## Lo que no cambia con ninguna de las dos opciones

El responsable del tratamiento eres tú, la clínica, en los dos casos. El proveedor de software o de alojamiento es un encargado del tratamiento, y eso trae dos obligaciones que no desaparecen porque el servidor esté en tu recepción.

El RGPD exige que elijas solo encargados que ofrezcan garantías suficientes: el artículo 28.1 dice que el responsable "elegirá únicamente un encargado que ofrezca garantías suficientes para aplicar medidas técnicas y organizativas apropiados". Y el 28.3 exige que esa relación se rija por "un contrato u otro acto jurídico" que vincule al encargado.

La segunda obligación es la que más clínicas incumplen sin saberlo. El artículo 32.1.c exige "la capacidad de restaurar la disponibilidad y el acceso a los datos personales de forma rápida en caso de incidente físico o técnico".

> **Un servidor en el cuarto de la esterilización sin restauración probada incumple el artículo 32 igual que una nube sin copias.** La ley no pregunta dónde está el disco, pregunta si puedes recuperar los datos y en cuánto tiempo. Si nadie ha probado nunca a restaurar la copia, la respuesta honesta es que no lo sabes.

A eso se suma el plazo de conservación. La Ley 41/2002 obliga a los centros sanitarios a conservar la documentación clínica "como mínimo, cinco años contados desde la fecha del alta". Sea cual sea la opción que elijas, tiene que aguantar ese plazo, incluida la posibilidad de que tu proveedor deje de existir antes.

![Agenda del día en Dentalpin con las citas por sillón y su estado](/screenshots/schedule-day.png)

*Esta es la pantalla que tiene que abrirse a las nueve de la mañana, decidas lo que decidas.*

## Las tres opciones reales, no dos

Casi todas las comparaciones plantean "nube contra servidor propio" y se dejan fuera la tercera, que es la que eligen muchas clínicas técnicas: tu propia instancia, pero alojada en un servidor alquilado.

| | Nube del proveedor | Servidor en la clínica | Instancia propia en un VPS |
|---|---|---|---|
| Quién aplica las actualizaciones | ✓ El proveedor | ✗ Alguien de la clínica o su informático | ~ Tú, pero sin tocar hardware |
| Si se cae internet | ✗ No se puede trabajar | ✓ Sigue funcionando en la red local | ✗ No se puede trabajar |
| Quién responde de la copia de seguridad | ~ La hace el proveedor, comprobarla es tuyo | ✗ Tuya entera | ✗ Tuya entera |
| Hardware que mantener | ✓ Ninguno | ✗ Equipo, disco, SAI y su recambio | ✓ Ninguno |
| Coste inicial | ✓ Ninguno | ✗ Compra del equipo | ~ Bajo |
| Dónde están los datos | En la infraestructura del proveedor | En tu local | En el centro de datos que elijas |
| Qué necesitas para irte | Un export completo que te tienen que dar | ✓ Ya los tienes | ✓ Ya los tienes |

Los dos extremos de esa tabla no compiten en lo mismo. La nube te quita trabajo de encima y te ata a un proveedor. El servidor propio te da control y te da un trabajo que alguien tiene que hacer todos los meses.

## La prueba que decide: qué pasa el día que falla

Antes de comparar precios, pon número a dos cosas.

1. **Cuánto tiempo puede estar la clínica sin el software.** Si la respuesta es "media mañana, tirando de papel", casi cualquier opción vale. Si es "una hora", necesitas un plan escrito, y lo necesitas también con servidor propio.
2. **Cuánto cuesta esa parada.** Sillones por horas por facturación media. Es el único número que convierte esta decisión en una comparación económica en vez de una cuestión de gustos.
3. **Quién levanta el teléfono a las nueve de un lunes.** Con nube es el soporte del proveedor y tiene horario publicado. Con servidor propio es tu informático, y conviene saber su tiempo de respuesta real antes de necesitarlo.
4. **Qué se pierde entre la última copia y el fallo.** Una copia nocturna significa perder un día de trabajo. Si eso no es aceptable, la frecuencia de copia es un requisito, no un detalle.
5. **Cómo sales.** Pide el procedimiento de export completo por escrito antes de firmar, no cuando te quieras ir.

> **La caída más frecuente no es la del proveedor, es la de tu línea.** Un sistema en la nube se para en el router de la clínica, no en el centro de datos. Una clínica con una sola fibra y sin respaldo 4G tiene un punto único de fallo aunque haya elegido el proveedor más sólido del mercado.

## Lo que la nube no arregla y el servidor propio tampoco

Un servidor bajo el mostrador de recepción no es automáticamente más privado. Con el sistema operativo sin actualizar, el disco sin cifrar y la copia de seguridad en un disco USB guardado en el mismo cuarto, es peor que una nube mantenida: un robo o un incendio se lleva el original y la copia a la vez.

Al revés también falla. Una nube no te exime de comprobar nada: sigues necesitando el contrato del artículo 28, y sigues necesitando saber cada cuánto se prueban las restauraciones.

- **Cifrado del disco**, en los dos modelos. Es lo que convierte un portátil o un servidor robado en un problema de hardware y no en una brecha de datos.
- **Una copia fuera del edificio**, siempre. La regla práctica es tener tres copias, en dos soportes distintos, y una de ellas fuera de la clínica.
- **Una restauración probada** al menos una vez al año, con el reloj en la mano y anotando cuánto tardó.
- **Control de accesos por persona**, no una contraseña compartida en un post-it, que es el fallo que hace irrelevante todo lo anterior.

![Historia clínica de un paciente en Dentalpin con odontograma, alertas clínicas y plan activo](/screenshots/dental-chart.png)

*Esto es lo que una restauración tiene que devolver intacto, no solo la lista de pacientes.*

## Elige la nube si

- **Nadie en la clínica quiere ser el responsable técnico.** Es la razón buena, y es suficiente por sí sola.
- **Trabajas en varias sedes** y quieres la misma agenda en todas sin montar una VPN.
- **Tu conexión es estable y tienes un respaldo** de datos móviles que ya has probado.
- **Prefieres coste mensual previsible** a una compra de hardware cada cinco o seis años.

## Elige servidor propio si

- **Una caída de internet no puede parar la consulta.** Es el argumento más fuerte y el más concreto.
- **Quieres poder irte cualquier día** sin depender de que alguien te genere un export.
- **Ya tienes informático** o alguien que mantiene los equipos con criterio.
- **Te importa dónde están físicamente los datos**, por política propia o por exigencia de un tercero.

Si dudas, hay una salida intermedia honesta: empieza en la opción que menos trabajo te dé y guarda un export completo tuyo cada mes. Eso te deja cambiar de opinión más adelante sin haber apostado nada irreversible.

En Dentalpin esta decisión no obliga a cambiar de software: el mismo producto se ejecuta en nuestra nube o en tu propio servidor con `docker compose`, con la misma base de datos PostgreSQL y el mismo export. Si quieres probar la opción autoalojada antes de decidir, [instalarlo lleva tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y las condiciones de las dos formas están en [precios](/es/precios/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículos 28 y 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32016R0679). Consultado el 9 de agosto de 2026.
- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículo 17. [BOE-A-2002-22188](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188). Consultado el 9 de agosto de 2026.
- AEPD, preguntas frecuentes sobre responsable y encargado del tratamiento. [aepd.es](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/8-responsable-y-encargado-del-tratamiento). Consultado el 9 de agosto de 2026.

Esto no es asesoramiento legal. Los plazos de conservación y las obligaciones concretas dependen de tu comunidad autónoma y de tu caso, y conviene confirmarlos con tu asesoría o tu colegio profesional.
