---
title: "Cómo evaluar un proyecto open source antes de confiarle tu clínica"
description: "Cinco comprobaciones públicas para saber si un proyecto open source aguantará diez años en tu clínica: mantenimiento, gente, seguridad, licencia y salida."
pubDate: 2026-08-31
tags: [open-source, evaluacion, seguridad, licencias, contratos]
---

Mira cinco cosas, en este orden: si el proyecto está mantenido, cuánta gente lo mantiene de verdad, qué pasa el día que alguien encuentra un fallo de seguridad, qué dice exactamente la licencia y cómo se sale. Las cinco se comprueban desde páginas públicas en una tarde y cuatro tienen un estándar publicado detrás, así que el umbral no lo pones tú.

Que el código sea público no es la respuesta. Es lo que te permite hacer las preguntas, y casi nadie las hace.

> **El error habitual es evaluar el producto y no el proyecto.** La demo se ve bien en todos los casos. Lo que decide si dentro de seis años sigues teniendo un programa que abre tu historia clínica es quién lo mantiene, con qué ritmo y qué hace cuando aparece un fallo.

## Las cinco comprobaciones, y dónde se miran

Ninguna requiere hablar con un comercial. Todas salen del repositorio público del proyecto y de dos servicios gratuitos que puntúan lo que encuentran allí.

| Comprobación | Qué buscas | Señal de alarma |
|---|---|---|
| Mantenimiento | ✓ Commits y versiones recientes y regulares | ✗ Meses sin actividad y una versión de hace dos años |
| Gente | ✓ Varias personas con permiso para publicar | ✗ Una sola persona firma casi todo |
| Seguridad | ✓ Un fichero `SECURITY.md` con un contacto | ✗ No hay dónde avisar de un fallo |
| Licencia | ✓ El nombre figura en la lista de la OSI | ✗ «Licencia propia», sin texto publicado |
| Salida | ✓ Exportación documentada y base de datos estándar | ✗ Formato propio y sin documentar |

## 1. «Mantenido» tiene una definición, y no es la tuya

La OpenSSF publica Scorecard, una herramienta que analiza un repositorio y puntúa cada aspecto de 0 a 10. Su comprobación *Maintained* es la más útil de las diecinueve porque convierte una impresión en un umbral.

Para la puntuación máxima pide **al menos un commit por semana durante los 90 días anteriores**, y solo evalúa proyectos con más de 90 días de vida. Ese es el listón, y está publicado.

Con eso ya puedes mirar cualquier repositorio y saber en qué lado cae:

- **La fecha del último commit** te dice si alguien tocó el código este mes o el año pasado.
- **El ritmo de versiones** importa más que el número. Doce versiones en un año y ninguna desde hace catorce meses es un proyecto parado, no un proyecto estable.
- **Las incidencias abiertas sin responder** son la señal más honesta de todas. Un proyecto sano no tiene cero incidencias, tiene incidencias contestadas.

## 2. Cuánta gente lo sostiene de verdad

Un proyecto con mil estrellas y un único autor es un proyecto de una persona. La comunidad CHAOSS, dentro de la Linux Foundation, tiene una métrica para exactamente esto.

Se llama *Contributor Absence Factor*, antes conocida como *Bus Factor*, y responde a una pregunta directa: «¿Qué riesgo corre el proyecto si se van las personas más activas?». La calcula como el número más pequeño de personas que suman el 50% de las contribuciones.

Si ese número es uno, la respuesta es que el riesgo lo asumes tú.

> **Un factor de ausencia de uno no descalifica un proyecto, pero cambia el contrato.** Si vas a instalarlo en tu clínica, quieres o bien una empresa detrás que responda, o bien un informático de confianza que ya haya leído ese código.

![Ficha de paciente con las alertas clínicas, el plan de tratamiento activo y la línea de tiempo filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*Años de historia clínica dentro de un programa. Esto es lo que depende de que el proyecto siga vivo dentro de seis años.*

## 3. Qué pasa el día que alguien encuentra un fallo

Esta es la comprobación que más gente se salta y la que más rápido se hace. Busca en el repositorio un fichero `SECURITY.md`: es lo que rastrea la comprobación *Security-Policy* de Scorecard, y su ausencia significa que quien encuentre un fallo no tiene dónde avisar.

El OpenSSF Best Practices Badge pone cifras a lo que viene después. Entre sus criterios de nivel *passing*: «el tiempo de respuesta inicial del proyecto para cualquier informe de vulnerabilidad recibido en los últimos 6 meses DEBE ser menor o igual a 14 días». También exige que las notas de versión identifiquen toda vulnerabilidad conocida corregida que ya tuviera un CVE asignado.

Un proyecto que publica ese distintivo ha declarado esas cosas por escrito. Uno que no lo publica puede estar haciéndolas igual, pero tendrás que comprobarlo tú en su historial de versiones.

> **Esto dejó de ser buena voluntad y pasó a ser regulación europea.** El Reglamento (UE) 2024/2847, el Reglamento de Ciberresiliencia, entró en vigor el 10 de diciembre de 2024. Las obligaciones de notificación de vulnerabilidades explotadas activamente se aplican **desde el 11 de septiembre de 2026**, y el grueso del reglamento desde el 11 de diciembre de 2027.

Ese reglamento no te obliga a ti como clínica: obliga a quien fabrica o distribuye el producto. Pero crea una figura nueva que conviene conocer: la de las organizaciones que sostienen de forma continuada un software de código abierto, que el texto inglés llama *open-source software steward*. Su artículo 24 les exige un punto de contacto único para recibir informes de vulnerabilidad y una política de divulgación coordinada.

Traducido a tu evaluación: a partir de septiembre de 2026, un proyecto europeo serio tiene una dirección donde avisar de un fallo, porque se la exige la ley. Si no la tiene, sabes algo del proyecto. Esto no es asesoramiento legal.

## 4. La licencia, en dos minutos

La Open Source Initiative mantiene la definición de referencia, con diez criterios numerados, y publica la lista de licencias aprobadas en `opensource.org/licenses`.

La comprobación es literal: busca el nombre exacto de la licencia en esa lista. GPL, AGPL, Apache 2.0 y MIT están. Las licencias de tipo «código disponible» no, y eso no las hace malas, las hace otra cosa.

Lo que la licencia decide y lo que no decide da para un artículo entero, y lo tienes en [software libre frente a propietario en sanidad](/es/blog/software-libre-sanidad/). Para esta evaluación basta con una regla: si el proyecto no publica el texto de su licencia, no has terminado de mirar, has terminado de evaluarlo.

## 5. Cómo se sale

Un proyecto open source que no puedes abandonar tiene el mismo problema que uno propietario, con más pasos.

1. **Localiza la documentación de exportación** antes de instalar nada. Si existe, estará en el repositorio, no en un correo comercial.
2. **Comprueba el motor de base de datos.** PostgreSQL o MySQL significan que cualquier informático puede leer tus datos sin pedir permiso a nadie.
3. **Descarga una copia el primer día**, no el día que quieras irte. Una exportación que nunca has probado no es una exportación.
4. **Lee qué se lleva la copia y qué no.** Las radiografías y los documentos adjuntos suelen vivir fuera de la base de datos, y suelen ser lo que falta.

El detalle de qué formato exigir está en [exportar tus datos](/es/blog/exportar-datos-software-dental/).

## Puntuarlo sin ser informático

Las dos herramientas que ya has visto son públicas y gratuitas, y las dos se pueden consultar sobre un proyecto ajeno:

- **OpenSSF Scorecard** analiza el repositorio y devuelve diecinueve comprobaciones puntuadas de 0 a 10, entre ellas *Maintained*, *Security-Policy*, *Code-Review*, *License* y *Vulnerabilities*, que cruza el código con la base de datos OSV de vulnerabilidades conocidas.
- **OpenSSF Best Practices Badge** es una autoevaluación pública del propio proyecto, organizada en seis bloques: fundamentos, control de cambios, notificación, calidad, seguridad y análisis.

Las dos miden proceso, que es justo lo que no puedes ver desde la demo. Ninguna mide si el programa sirve para una clínica dental, y confundir las dos cosas lleva a instalar un proyecto ejemplar que no tiene odontograma.

## Dos semanas con datos reales, antes de decidir

Ninguna métrica sustituye a esto, y es lo más barato de la lista.

1. **Instálalo en una máquina que no sea la de producción.** Un portátil viejo o un servidor de cinco euros al mes bastan para saber si el proyecto se instala como dice su documentación.
2. **Mete veinte pacientes de verdad**, con sus tratamientos y sus presupuestos. Veinte fichas reales enseñan más que doscientas inventadas.
3. **Haz un día completo en paralelo.** Cita, visita, nota clínica, presupuesto, cobro. Si algo del circuito no existe, aparece aquí.
4. **Abre una incidencia con una duda real** y cuenta los días hasta la respuesta. Es la única forma de comprobar el punto 3 sin esperar a tener un problema.
5. **Exporta todo y bórralo.** Si la salida funciona con tus veinte pacientes, funcionará con dos mil.

![Pantalla de inicio con las citas del día, quién está en la clínica, los pagos vencidos y la línea de tiempo de la jornada](/screenshots/home.png)

*La pantalla en la que trabaja el equipo cada mañana. Dos semanas de uso real dicen de ella lo que ninguna puntuación va a decirte.*

## Lo que ninguna de estas métricas te dice

Conviene saber dónde se acaba este método.

- **Si el proyecto encaja con tu forma de trabajar.** Eso solo lo dice la prueba de dos semanas.
- **Si el código es seguro.** Que sea público lo hace auditable, no auditado. Son cosas distintas y solo la segunda protege a alguien.
- **Quién responde ante el RGPD.** Sigues siendo tú, uses el software que uses.
- **Si tendrás a quien llamar un viernes por la tarde.** Eso lo decide un contrato de soporte, y existe con proyectos libres y con proyectos propietarios.

Dentalpin es uno de los proyectos que se pueden mirar con esta lista: el código es público, la licencia es la BSL 1.1, que no figura en la lista de la OSI y conviene decirlo así, la base de datos es PostgreSQL y los [precios](/es/precios/) están publicados. Aplícale las cinco comprobaciones antes de instalarlo, igual que a cualquier otro.

## Fuentes

- OpenSSF Scorecard, repositorio y documentación de comprobaciones, `github.com/ossf/scorecard` y `docs/checks.md` (consultado el 31 de agosto de 2026).
- OpenSSF Best Practices Badge, criterios de nivel *passing*, `bestpractices.dev/en/criteria/0` (consultado el 31 de agosto de 2026).
- CHAOSS, métrica *Contributor Absence Factor*, `chaoss.community` (consultado el 31 de agosto de 2026).
- Open Source Initiative, *The Open Source Definition* y lista de licencias aprobadas, `opensource.org/osd` y `opensource.org/licenses` (consultado el 31 de agosto de 2026).
- Reglamento (UE) 2024/2847 (Reglamento de Ciberresiliencia), texto en EUR-Lex y página oficial de la Comisión Europea sobre su aplicación, `digital-strategy.ec.europa.eu` (consultado el 31 de agosto de 2026).
