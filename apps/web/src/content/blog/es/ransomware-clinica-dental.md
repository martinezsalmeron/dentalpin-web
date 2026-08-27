---
title: "Ransomware en la clínica dental: el plan de la clínica pequeña"
description: "Qué hacer en la primera hora de un ransomware en una clínica dental, qué copia de seguridad sobrevive al cifrado y qué obliga el RGPD en las 72 horas siguientes."
pubDate: 2026-08-27
tags: [ransomware, seguridad, rgpd, copias-de-seguridad, gestion]
---

El plan de una clínica pequeña frente al ransomware cabe en un folio: una copia de seguridad desconectada que hayas restaurado alguna vez, una lista de a quién llamas en la primera hora, actualizaciones al día con segundo factor en todo acceso remoto, y saber que el RGPD te da 72 horas para notificar a la autoridad de control. Nada de eso se improvisa el día que la agenda no abre.

Lo que sigue es ese folio, en orden: qué se para exactamente, qué haces en los primeros sesenta minutos, qué exige la ley y qué medidas reducen de verdad la probabilidad.

## Lo que se para no es el ordenador, es la consulta

Un ransomware cifra archivos y pide un rescate. En una clínica dental eso significa que la agenda del día no abre, la historia clínica no está, las radiografías no se ven y la facturación se detiene, todo a la vez y normalmente a primera hora de la mañana.

El problema clínico llega antes que el problema informático. Sin las alertas médicas de un paciente no sabes si es alérgico a un anestésico, y esa es la razón por la que una clínica sin acceso a sus datos no puede seguir trabajando como si tal cosa.

ENISA, la agencia europea de ciberseguridad, publicó en julio de 2023 su primer análisis de amenazas del sector sanitario: el ransomware supone el 54 % de las amenazas del sector, los datos de pacientes son el activo más atacado con un 30 %, y solo el 27 % de las organizaciones encuestadas tenía un programa específico de defensa frente a ransomware.

> **La cuenta que decide es cuántos pacientes tienes citados mañana.** Una clínica con tres sillones y cuarenta citas diarias no está discutiendo un problema de informática, está decidiendo si abre la semana que viene. Ese número es el que justifica el tiempo que dedicas al plan.

![Agenda de la clínica en vista de día con las citas repartidas por sillón](/screenshots/schedule-day.png)

*Esta es la pantalla que deja de abrirse, y es la primera que alguien nota.*

## La primera hora, en orden

El orden importa porque las decisiones de los primeros minutos deciden si conservas pruebas y si la copia de seguridad se salva.

1. **Desconecta de la red el equipo afectado**, por cable y por wifi. INCIBE lo pone como primer paso: aislar el equipo para que el cifrado no siga avanzando hacia el servidor y hacia el resto de puestos.
2. **Desconecta también el disco o el NAS de copias.** Si estaba enchufado, es un objetivo, no un refugio.
3. **No formatees todavía.** INCIBE recomienda clonar el disco duro antes de desinfectar, porque esa copia es la que permite intentar el descifrado más adelante y es también la prueba.
4. **Escribe la hora en que lo detectaste.** El plazo de notificación cuenta desde que la clínica tiene constancia de la brecha, así que esa hora es un dato legal, no una anécdota.
5. **Llama.** A tu informático o proveedor, y al 017 de INCIBE, que es gratuito, atiende de 8 de la mañana a 11 de la noche los 365 días del año y orienta también a empresas y profesionales.
6. **Avisa a recepción de qué se dice por teléfono.** Los pacientes que llamen para confirmar su cita van a preguntar, y una respuesta acordada evita que cada persona improvise la suya.
7. **Denuncia.** El ataque es un delito y la denuncia es además parte del expediente que tendrás que poder enseñar.

## Las 72 horas que empiezan a contar

El artículo 33 del RGPD obliga al responsable del tratamiento a notificar la violación de seguridad a la autoridad de control sin dilación indebida y, de ser posible, en un plazo máximo de 72 horas desde que tenga constancia de ella, salvo que sea improbable que suponga un riesgo para los derechos y libertades de las personas.

La AEPD lo concreta: "El plazo para notificar a la autoridad de control es de 72 horas desde que la organización tiene constancia de la brecha", y añade que "cuando el riesgo sea alto el responsable también deberá comunicar la brecha a las personas afectadas", que es el artículo 34.

Un cifrado de historias clínicas rara vez es un caso de riesgo bajo. Los datos de salud son categoría especial, y la mayoría de los ransomware actuales exfiltran antes de cifrar, así que el escenario que hay que valorar no es solo la pérdida de disponibilidad.

> **Documenta la brecha aunque decidas no notificarla.** La AEPD recuerda que "el responsable tiene la obligación de documentar cualquier violación de la seguridad de los datos personales". Un registro con la fecha, el alcance y el razonamiento de por qué no había riesgo es exactamente lo que se pide en una inspección.

| Qué ocurrió | ¿Notificar a la AEPD? | ¿Avisar a los pacientes? |
|---|---|---|
| Cifrado sin exfiltración, restauras en horas desde copia limpia | ~ Valorar y documentar el razonamiento | ✗ Normalmente no, si no hay riesgo alto |
| Cifrado con historias clínicas afectadas y sin copia utilizable | ✓ Sí | ✓ Probablemente sí |
| Los atacantes publican o amenazan con publicar datos | ✓ Sí | ✓ Sí |
| Un portátil cifrado sin datos de pacientes | ✗ No procede como brecha de datos | ✗ No |

Esto no es asesoramiento legal y cada caso se valora por separado. La regla práctica es la que da la propia AEPD: ante la duda, se notifica.

## La copia de seguridad que sobrevive al cifrado

El ransomware cifra todo lo que el equipo infectado puede escribir. Eso incluye el disco USB que lleva dos años enchufado y la carpeta del NAS que está montada como unidad de red.

El NCSC británico es explícito en su guía: las copias deben mantenerse separadas y en otra ubicación, idealmente fuera del edificio, y los dispositivos de copia "no están conectados permanentemente" a la red, porque "los atacantes atacarán los dispositivos de copia conectados". Añade un paso que casi nadie da: analizar las copias en busca de malware antes de restaurar.

| Dónde está la copia | Sobrevive a un ransomware | Trabajo mensual |
|---|---|---|
| Carpeta en el mismo servidor | ✗ Se cifra con el resto | ✓ Ninguno |
| Disco USB permanentemente conectado | ✗ Se cifra con el resto | ✓ Ninguno |
| Disco que se conecta, se copia y se retira | ✓ Sí, si estaba fuera durante el ataque | ~ Alguien tiene que acordarse |
| Copia en la nube con versiones o inmutabilidad | ✓ Sí, si el atacante no tiene esas credenciales | ✓ Ninguno si está automatizada |
| Sincronización tipo carpeta compartida | ✗ Sincroniza los archivos ya cifrados | ✓ Ninguno |

Y la parte que convierte una copia en un plan: restaurarla una vez al año en un equipo distinto y cronometrar cuánto tarda. Ese número es tu tiempo real de recuperación, y el artículo 32.1.d del RGPD pide precisamente verificar y evaluar con regularidad la eficacia de las medidas.

![Historia clínica de un paciente con alertas clínicas, plan de tratamiento activo y próxima cita](/screenshots/dental-chart.png)

*Las alertas médicas de la ficha son la parte que no se puede reconstruir de memoria en una mañana.*

## Lo que reduce de verdad la probabilidad

Ninguna medida sola evita un ransomware, pero unas pocas cortan los caminos de entrada más habituales en una clínica pequeña.

- **Actualiza en cuanto salga el parche.** El NCSC pide instalar las actualizaciones de seguridad tan pronto como estén disponibles, y con prioridad en los equipos que dan a internet, como el router, el firewall o el VPN.
- **Segundo factor en todo acceso remoto.** Si alguien entra a la clínica desde casa, esa puerta necesita MFA. El NCSC añade un detalle que se pasa por alto: el segundo factor no debe estar instalado en el mismo dispositivo desde el que se administran las copias.
- **Cuentas con los permisos justos.** El usuario de recepción no necesita ser administrador del servidor, y el ransomware hereda exactamente los permisos de quien lo abrió.
- **Macros desactivadas** en los documentos de ofimática, que siguen siendo una vía de entrada corriente por correo.
- **Nadie comparte contraseña.** Una cuenta por persona no es burocracia: es lo único que permite saber después por dónde entró.
- **Escritorio remoto cerrado a internet.** Si hay que acceder desde fuera, que sea por VPN con MFA y no por un puerto abierto.

## Pagar o no pagar

Las tres respuestas oficiales que he podido consultar coinciden, y ninguna deja margen a la interpretación.

INCIBE lo formula así de corto: "NO PAGAR nunca el rescate", porque pagar no garantiza recuperar los datos, atrae ataques futuros y financia el negocio. El NCSC recuerda que las fuerzas de seguridad "no fomentan, respaldan ni consienten el pago de rescates", que no hay garantía de recuperar el acceso, que el equipo sigue infectado y que el dinero va a grupos criminales.

> **Pagar no cierra el expediente.** Aunque recuperes los archivos, la brecha existió, el plazo del artículo 33 corrió igual y la obligación de documentarla y valorar la comunicación a los pacientes sigue siendo tuya.

Antes de dar nada por perdido, INCIBE remite a No More Ransom, el proyecto donde se publican descifradores gratuitos para familias de ransomware ya rotas. No cubre todos los casos, y comprobarlo cuesta cinco minutos.

## El folio que hay que escribir hoy

Escríbelo, imprímelo y guarda una copia fuera del sistema que habría que restaurar. Un plan que solo existe dentro del servidor cifrado no es un plan.

1. **A quién se llama**, con nombre y teléfono: informático o proveedor, responsable de la clínica, 017, y la aseguradora si tienes cobertura de ciberriesgo.
2. **Dónde están las copias**, con qué credenciales se acceden y quién las tiene además del informático.
3. **Cómo se restaura**, en pasos, escrito por alguien que lo haya hecho al menos una vez.
4. **Qué se le dice al paciente que llama**, en dos frases acordadas.
5. **Quién decide sobre la notificación** a la AEPD y con qué asesoría se consulta.
6. **La fecha de la última prueba de restauración** y cuánto tardó.

Con eso, un ransomware pasa de ser una crisis indefinida a ser un día muy malo con final conocido.

En Dentalpin la copia es un volcado estándar de PostgreSQL más la carpeta de archivos, así que puedes sacarla a un destino que el servidor de la clínica no controle y restaurarla sin depender de nadie. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículos 32, 33 y 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 27 de agosto de 2026.
- AEPD, *Brechas de seguridad*. [aepd.es](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/brechas-de-seguridad). Consultado el 27 de agosto de 2026.
- INCIBE, *Ayuda ransomware*. [incibe.es](https://www.incibe.es/empresas/te-ayudamos/servicio-antiransomware). Consultado el 27 de agosto de 2026.
- INCIBE, *Línea de Ayuda en Ciberseguridad (017)*. [incibe.es](https://www.incibe.es/linea-de-ayuda-en-ciberseguridad). Consultado el 27 de agosto de 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Consultado el 27 de agosto de 2026.
- ENISA, *Health Threat Landscape* (5 de julio de 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Consultado el 27 de agosto de 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Consultado el 27 de agosto de 2026.

Esto no es asesoramiento legal. La valoración del riesgo de una brecha concreta y la decisión de notificarla dependen de tu caso, y conviene contrastarlas con tu asesoría o con el delegado de protección de datos.
