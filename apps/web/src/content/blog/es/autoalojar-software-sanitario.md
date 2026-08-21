---
title: "Autoalojar software sanitario: lo que nadie te cuenta"
description: "Autoalojar no cuesta licencia, cuesta operación: una copia restaurada, el certificado, la versión mayor de PostgreSQL y alguien localizable. Qué asumes de verdad."
pubDate: 2026-08-19
tags: [autoalojado, docker, postgresql, seguridad, rgpd]
---

Autoalojar software sanitario no es gratis: gratis es la licencia. Lo que asumes son cuatro trabajos que no se acaban nunca: una copia de seguridad que has restaurado de verdad, un certificado que se renueva solo hasta que deja de hacerlo, una actualización mayor de PostgreSQL cada pocos años y una persona localizable el lunes a las ocho de la mañana. Si esos cuatro trabajos tienen dueño, autoalojar sale bien y sale barato. Si no lo tienen, tu servidor es un proveedor de software con una sola persona en plantilla y sin turno de guardia.

Lo que sigue es lo que no aparece en el tutorial de instalación, con la fuente técnica o legal de cada punto.

## Instalar es un día, operar son cinco años

La instalación se ha vuelto genuinamente fácil. Tres ficheros, un `docker compose up`, y en unos minutos hay una aplicación funcionando con su certificado. Esa parte ya no es el problema, y por eso engaña.

El problema es lo que viene después, que no tiene fecha de fin: parches del sistema operativo, espacio en disco, avisos que nadie lee, la migración de la base de datos dentro de tres años y la noche que se cae el servidor.

> **La instalación es un evento, la operación es un contrato contigo mismo.** Nadie abandona un servidor el primer día. Se abandona en el mes catorce, cuando la persona que lo montó ha cambiado de trabajo y el correo de errores va a su dirección antigua.

![Esquema de una instalación autoalojada: el navegador entra por HTTPS a Caddy, que reparte /api/* al backend y el resto al frontend Nuxt; el backend habla con PostgreSQL](/diagrams/install-stack.svg)

*Cuatro procesos y una base de datos. Cada caja de este esquema es algo que alguien tiene que actualizar.*

## Lo que la ley te sigue pidiendo, esté donde esté el servidor

Autoalojar no te añade obligaciones legales nuevas. Te quita a la persona que las estaba cumpliendo por ti.

La clínica es responsable del tratamiento de los datos de sus pacientes tanto si el servidor está en el armario de la recepción como si está en un centro de datos ajeno. El artículo 32 del RGPD exige, entre las medidas técnicas y organizativas, dos cosas que se leen como una lista de tareas de sistemas:

- **Artículo 32.1.c**: la capacidad de restaurar la disponibilidad de los datos personales y el acceso a ellos de forma rápida en caso de incidente físico o técnico.
- **Artículo 32.1.d**: un proceso de verificación, evaluación y valoración regulares de la eficacia de las medidas técnicas y organizativas. La prueba periódica no es una buena práctica opcional, está en el texto del artículo.

A eso se suma el artículo 33.1: una violación de seguridad se notifica a la autoridad de control sin dilación indebida y, de ser posible, a más tardar 72 horas después de que se haya tenido constancia de ella.

> **Setenta y dos horas cuentan desde que lo sabes, no desde que lo entiendes.** Si el servidor es tuyo, nadie te va a llamar para avisarte de que ha pasado algo. Ese aviso también tienes que montarlo tú.

Esto no es asesoramiento legal. Los detalles de aplicación en tu país y en tu caso conviene confirmarlos con tu asesoría o tu colegio profesional.

## Los datos no están en el contenedor

Es el malentendido más caro de los primeros meses. La documentación de Docker lo dice sin rodeos: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

Traducido a la práctica: puedes borrar y recrear los contenedores todas las veces que quieras, pero lo que hay que copiar son los volúmenes. Y en una instalación sanitaria típica hay al menos dos:

- **La base de datos**, con pacientes, agenda, historia clínica, presupuestos y facturación.
- **Los archivos subidos**, que son las radiografías, las fotos clínicas y los PDF firmados. Suelen ocupar mucho más que la base de datos y suelen ser lo que se olvida.

Un volcado de la base de datos sin la carpeta de archivos restaura una clínica sin ninguna imagen. Técnicamente es una copia; en la práctica es media.

**Y no se copia en caliente a lo bruto.** La documentación de PostgreSQL es tajante sobre copiar el directorio de datos con el servidor arrancado: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". Lo que sí funciona con el servidor en marcha es `pg_dump`, cuyos volcados "are internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

La CNIL, como autoridad de control, resume las precauciones elementales de una copia en cuatro líneas: hacer copias frecuentes, "stocker au moins une sauvegarde sur un site géographiquement distinct du site d'exploitation", "isoler au moins une sauvegarde hors ligne, déconnectée du réseau de l'entreprise" y "tester régulièrement l'intégrité des sauvegardes et la capacité de les restaurer".

Esa última línea es la que decide todo, y tiene su propia guía: [qué guardar y cada cuánto](/es/blog/copias-seguridad-clinica-dental/).

## El certificado se renueva solo hasta que alguien cierra el puerto 80

Los certificados de Let's Encrypt "are valid for 90 days" y la propia entidad recomienda "renewing 90 day certificates every 60 days". El cliente ACME lo hace sin que nadie se lo pida, así que el asunto desaparece de la cabeza de todo el mundo.

Hasta que falla, y falla de una manera concreta. El desafío HTTP-01 "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard".

Es decir, si alguien cierra el puerto 80 en el cortafuegos porque "todo va por HTTPS", la renovación deja de funcionar en silencio. La web sigue perfecta durante treinta días y luego, un martes cualquiera, el navegador de recepción muestra una advertencia de seguridad a pantalla completa.

1. **Deja el puerto 80 abierto** aunque solo redirija a HTTPS, o cambia al desafío DNS-01, que valida con un registro TXT en `_acme-challenge.tu-dominio` y necesita que tu proveedor de DNS tenga API.
2. **Vigila la fecha de caducidad desde fuera** del servidor, con cualquier comprobación externa. Una alerta que vive en la máquina caída no avisa de nada.
3. **Comprueba a los 65 días** que la renovación se produjo de verdad, no que el proceso arrancó.
4. **Apunta quién recibe el aviso** y confirma que esa dirección sigue existiendo cuando esa persona se vaya.

## La actualización que sí duele

Los parches menores son rutina. La documentación de PostgreSQL garantiza que "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Actualizar de la 17.4 a la 17.6 es reiniciar un contenedor.

La versión mayor es otra cosa: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades". Un contenedor de PostgreSQL 17 no arranca sobre un directorio de datos escrito por la 16. Si tienes la imagen fijada en `latest`, el día que el proveedor de la imagen mueva la etiqueta, tu base de datos no arrancará y el mensaje de error no será obvio a las ocho de la mañana.

Los caminos que documenta el proyecto son tres: volcar y restaurar con `pg_dumpall`, usar `pg_upgrade`, que es más rápido, o replicar. Elegir uno es media hora de lectura; descubrirlo durante una caída es un día perdido.

1. **Fija la versión mayor** en la configuración, nunca `latest`, ni para la aplicación ni para la base de datos.
2. **Mira el calendario de soporte** de tu versión una vez al año y planifica el salto antes de que quede sin actualizaciones de seguridad.
3. **Haz la migración sobre una copia**, en otra máquina, y cronometra cuánto tarda.
4. **Guarda el volcado anterior** hasta que la clínica lleve una semana trabajando sobre la versión nueva.

## Quién contesta el lunes a las ocho

Esta es la pregunta que decide, y no es técnica.

Una clínica dental abre a las ocho o a las nueve y tiene la agenda llena desde el primer hueco. Si el servidor no arranca, no hay historia clínica, no hay consentimientos y no hay forma de saber quién viene. La pregunta relevante no es si sabes arreglarlo, es si esa persona está disponible, con portátil, en ese momento.

![Pantalla de inicio con las citas del día, quién está en la clínica, pagos vencidos y pacientes recientes](/screenshots/home.png)

*Esta es la pantalla que tiene que estar en pie a las ocho. Todo lo demás puede esperar al mediodía.*

Respuestas honestas que he visto funcionar: el informático de la clínica con un contrato de horas y un teléfono; el propio dentista, si le gusta esto y lo asume; o un proveedor gestionado. Respuestas que no funcionan: el sobrino, y "ya lo miraré".

## Autoalojar o no: la tabla

| | Servidor propio | Servicio gestionado |
|---|---|---|
| Licencia | ✓ Sin cuota si el software es libre | ✗ Cuota mientras lo uses |
| Dónde viven los datos | ✓ En tu máquina | ~ Donde diga el contrato |
| Parches del sistema | ✗ Los aplicas tú | ✓ Los aplica el proveedor |
| Copia de seguridad | ✗ La montas y la pruebas tú | ~ La hace el proveedor, la pruebas igual |
| Un lunes a las 8:00 | ✗ Depende de quién esté disponible | ✓ Depende de su compromiso de servicio |
| Versión mayor de PostgreSQL | ✗ La planificas tú | ✓ La planifica el proveedor |
| Si el proveedor cierra | ✓ Sigue funcionando | ✗ Depende del export que te den |
| Coste real | ~ Servidor barato, horas caras | ~ Cuota previsible, horas ajenas |

La columna de la derecha no te libera de nada legalmente: sigues siendo responsable del tratamiento y sigues teniendo que probar que puedes restaurar. Lo que compra es que otra persona haga el trabajo, y un número al que llamar cuando no lo ha hecho.

## Las tres preguntas antes de decidir

1. **¿Quién es el dueño del servidor con nombre y apellidos?** No el cargo, la persona. Si la respuesta tarda más de cinco segundos, no hay dueño.
2. **¿Cuándo fue la última restauración completa que alguien hizo de verdad?** Si la respuesta es "nunca", no tienes copias, tienes ficheros grandes.
3. **¿Qué pasa el día que esa persona se va?** Escribe el procedimiento ahora, guárdalo fuera del sistema que hay que restaurar, y que lo lea alguien más.

Si las tres tienen respuesta, autoalojar es una decisión excelente: control total sobre los datos, sin cuota y sin depender de que nadie siga existiendo. Si alguna se queda en el aire, empieza por resolverla y decide después.

En Dentalpin la instalación autoalojada son cuatro contenedores y dos volúmenes, el de la base de datos y el de los archivos subidos, así que la copia es un volcado estándar de PostgreSQL más una carpeta y se automatiza con las herramientas que ya uses. Las condiciones de la versión autoalojada y de la alojada están en [precios](/es/precios/), y si quieres probar la restauración antes de comprometerte a nada, [instalarlo lleva tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículos 32 y 33. Texto oficial en [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) y en el [capítulo 4 publicado por la CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Consultados el 19 de agosto de 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Consultado el 19 de agosto de 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Consultado el 19 de agosto de 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Consultado el 19 de agosto de 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Consultado el 19 de agosto de 2026.
- Let's Encrypt, *FAQ* y *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) y [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Consultados el 19 de agosto de 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Consultado el 19 de agosto de 2026.
