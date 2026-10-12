---
title: "Dentalpin frente a MR Dental Cloud: $0 autoalojado contra $350 al mes en la nube"
description: "Comparativa con fuentes: MR Dental Cloud publica tarifa desde $350 MXN y un Trust Center completo. Dentalpin es open source y gratis autoalojado."
pubDate: 2026-10-12
tags: [comparativa, mr-dental-cloud, software-dental, mexico]
---

MR Dental Cloud publica su tarifa, publica su arquitectura de seguridad y publica una tabla con los diez marcos normativos que dice cubrir. En un mercado donde la mitad de los proveedores remite a "consúltanos", eso ya es más de lo que ofrecen casi todos los competidores que aparecen en esta sección, y es el mejor punto de partida posible para comparar.

Nosotros hacemos Dentalpin, así que no somos neutrales. Lo que sí podemos ser es exactos.

> **Cómo está hecha esta comparativa.** Todo lo que aquí se afirma sobre MR Dental Cloud sale de páginas que publica MR Desarrollos Inteligentes en mrdentalcloud.com, con enlace y fecha al final. Su sitio es una aplicación de React y no devuelve texto a un `curl`, así que se consultó con un navegador que ejecuta JavaScript. Ningún comparador ni ranking de "los diez mejores": se contradicen entre sí y varios los escribe un competidor. Y hay una sección entera sobre cuándo ellos son la mejor opción, porque la hay.

## En treinta segundos

**MR Dental Cloud** gana en cosas concretas. Es un navegador y nada más, cuesta $350 al mes en el plan Básico, su bot de WhatsApp agenda citas solo a las tres de la mañana, exporta el expediente en HL7 FHIR R4 y su contrato se rige por ley mexicana y tribunales mexicanos. Su documentación de seguridad es la más detallada de cualquier proveedor dental que hayamos leído en este mercado.

**Dentalpin** es open source y gratis autoalojado, sin costo por dentista, por sillón ni por paciente, con el código publicado y el expediente donde tú decidas. A cambio no tenemos bot de WhatsApp y alguien tiene que ocuparse del servidor.

La pregunta que decide no es el precio. Es si te conviene un plan que limita dentistas y pacientes y que no dice en qué país vive el expediente, a cambio de no administrar nada y de un bot que contesta solo.

![Pantalla de inicio de Dentalpin con las citas del día, quién está en el consultorio, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es MR Dental Cloud

Una plataforma dental en la nube de MR Desarrollos Inteligentes, hecha para México y vendida en Latinoamérica. Su pie de página dice "Hecho con 🦷 en México" y su barra superior trae un selector de país y moneda que llega en pesos de forma predeterminada.

Lo clínico y lo administrativo, con sus propias palabras:

- **Odontograma** "anatómico por superficie y raíz real", adulto y pediátrico, que genera el plan de tratamiento y el presupuesto por fases con un clic.
- **Expediente clínico** con historia clínica, notas de evolución, firma digital, consentimiento informado y bitácora de auditoría que describen como inmutable.
- **Agenda multi-doctor** con recordatorios y confirmaciones automáticas por WhatsApp a 24, 12, 4 y 1 hora, y sincronización en ambos sentidos con Google Calendar.
- **Bot de WhatsApp** que consulta la agenda en vivo, propone horarios reales, confirma, reagenda y cobra anticipos. Su página aclara algo que conviene reconocer: el bot responde con las tarifas que tú configures y "nunca inventa montos".
- **Inventario con reorden automático, recetas digitales y mantenimiento preventivo** de unidades y equipos.
- **Interoperabilidad**: exportación en HL7 FHIR R4 de cinco tipos de recurso, webhooks firmados con HMAC-SHA256, catálogos CIE-10 y CDT/ADA, e identificadores CURP, INE y NSS.

La parte que de verdad distingue a este proveedor es su documentación. Publican una política de seguridad versionada, cuya versión 2.0 lleva fecha del 12 de octubre de 2026, y un Trust Center con una tabla de diez marcos normativos, el estado de cada uno y el detalle de qué controles lo sostienen. También publican qué proveedores de inteligencia artificial usan, Google Gemini y modelos GPT de OpenAI, y que no entrenan modelos con datos de usuarios.

Y publican con precisión lo que *no* tienen, cosa rarísima en este mercado. Sobre ISO 27001 dicen "Aunque no contamos con certificación formal", y la fila de su propia tabla dice "Alineado" y no "Implementado". SOC 2 aparece como "Ready", con "reportes de readiness" disponibles bajo solicitud. Eso es honestidad técnica y hay que decirlo.

![Expediente del paciente en Dentalpin con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*Expediente del paciente: odontograma, alertas clínicas, plan activo y próxima cita en la misma pantalla.*

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma, agenda, expediente clínico, planes de tratamiento, presupuestos con firma, cobros, recordatorios, reportes y una API REST documentada con OpenAPI. También un asistente de IA que trabaja sobre tus datos respetando los permisos de cada usuario.

Igual que ellos, somos de 2026. Y nuestro WhatsApp es otra cosa: manda recordatorios, confirmaciones y recalls con plantillas aprobadas, y cuando el paciente contesta, alguien de tu equipo le responde desde la ficha dentro de la ventana de 24 horas. No contesta un bot.

## Lo que cuesta cada uno

Su página de precios publica dos planes y los compara renglón por renglón. Las cifras van en pesos y advierten que cambian con el selector de país.

| Plan | Precio | Dentistas | Consultorios | Pacientes |
|---|---|---|---|---|
| Básico | $350 MXN /mes | Hasta 5 | 1 | Limitados |
| Premium | $750 MXN /mes | Hasta 10 | Hasta 2 | Ilimitados |

Lo que viene con los dos planes está publicado y es generoso: implementación sin costo, acompañamiento en la configuración inicial, ayuda para migrar desde otro software sin costo adicional, prueba de 30 días sin tarjeta de crédito, sin permanencia mínima y cancelación desde el panel "sin llamadas". El plan anual da un mes extra sin costo. Hay además una garantía de devolución de 30 días naturales desde la compra, "sin necesidad de justificación", y un tercer plan llamado Clínica que se cotiza según la operación.

Dos precios más que publican y que no están en la página de precios. Su política de reembolsos nombra a **Paddle.com como Merchant of Record**, es decir que quien te factura la suscripción y gestiona impuestos y reembolsos no es el proveedor mexicano sino el distribuidor. Y una página de promoción publica "Prueba 1 mes por $50 MXN", con renovación automática y pago con tarjeta, OXXO o SPEI.

> **"Pacientes: Limitados" es el único renglón de su tarifa sin número.** El plan Básico limita pacientes y ni la tabla de precios, ni las preguntas frecuentes, ni el JSON-LD de su portada dicen cuántos. Es la primera pregunta que hay que hacer por escrito antes de contratar, porque un consultorio con tres años de historia tiene más pacientes de los que cabe suponer y el tope decide si $350 es tu precio o solo el de entrada.

Del lado nuestro, el núcleo autoalojado es $0 MXN y así se queda, sin tope de pacientes, de dentistas ni de consultorios. Si prefieres no tocar el servidor, el plan Gestionado son $899 MXN al mes ($8,990 al año en lugar de $10,788) más una puesta en marcha de $4,900, y el servidor lo contratas tú directo al proveedor por unos $300 a $350 al mes. La [página de precios](/es-mx/precios/) trae la suma completa, incluida la parte que cobra otro.

## Dónde viven los datos y quién responde

Aquí está la diferencia más importante entre los dos productos, y no es el precio.

MR Dental Cloud documenta su arquitectura con un detalle poco común: cifrado AES-256-GCM a nivel de campo antes de persistir, derivación de claves por clínica con HKDF, rotación de claves maestras cada 90 días, Row Level Security forzado en más de 22 tablas clínicas, detección de exportaciones masivas por encima de 50 lecturas en cinco minutos, análisis de comportamiento de usuario con puntaje de riesgo, RTO menor a 5 minutos y RPO menor a 1 minuto con recuperación a un punto en el tiempo.

Lo que no aparece en ninguna de las páginas consultadas es **en qué país están esos datos, ni qué proveedor de nube los aloja**. Su política de privacidad habla de "proveedores tecnológicos necesarios para la operación del servicio (procesadores de pago, servicios de correo electrónico, infraestructura en la nube)" sin nombrar ninguno ni dar región. Para un consultorio mexicano que tiene que informar transferencias en su propio aviso de privacidad, eso es un dato que falta, y la pregunta se hace por escrito.

Sobre quién hay detrás, lo publicado también es poco. El responsable es "MR Desarrollos Inteligentes" y **no aparece forma legal, RFC ni domicilio en ninguna página consultada**; las solicitudes de derechos ARCO se dirigen a mrsmartdev.com, que es otro dominio. A su favor, y es un punto real: sus condiciones se rigen por "las leyes de los Estados Unidos Mexicanos" con jurisdicción en tribunales mexicanos, que es lo que un consultorio en México quiere leer y lo que varios competidores de esta misma sección no ofrecen.

## COFEPRIS y la NOM-004, con sus dos redacciones

Su portada lleva un sello que dice "COFEPRIS · Autorizado". Conviene leer qué alcance le da su propio Trust Center, porque es distinto de lo que el sello sugiere: la fila COFEPRIS tiene como alcance "Registro sanitario institucional" y como detalle "Registro COFEPRIS, responsable sanitario vinculado, sello institucional en documentos clínicos, pie de firma profesional". Es decir, el sistema guarda y estampa *el registro de tu consultorio* en los documentos clínicos. En las páginas consultadas no se publica ningún número de autorización ni referencia de registro del propio software.

Con la NOM-004 pasa algo parecido y es el dato más útil de esta comparativa. Sus dos redacciones conviven en el mismo sitio:

- **La de la portada**, en las preguntas frecuentes: el expediente "cumple con la NOM-004-SSA3-2012 vigente en México".
- **La de sus páginas legales**: "MR Dental Cloud no garantiza el cumplimiento automático de obligaciones regulatorias del usuario", y el aviso legal de su política de seguridad añade que "la conformidad regulatoria final depende de la configuración, operación y políticas internas de cada organización cliente".

> **La segunda redacción es la correcta y es la suya.** Ningún software cumple la NOM-004 por ti: la norma obliga al profesional de salud, y lo que un sistema puede hacer es darte la estructura, las firmas y la bitácora para demostrarlo. Su aviso legal lo dice con precisión. La de la portada va más lejos de lo que su propio departamento legal sostiene, y si contratas conviene que sepas cuál de las dos frases está en el contrato. Nuestra posición es idéntica a la segunda, y lo que la norma pide dentro del expediente está en [Expediente clínico dental en México](/es-mx/blog/expediente-clinico-dental-nom-004/).

Una observación más del mismo tipo, por simetría. Su portada tiene una sección titulada "Datos verificables · Lo que sí podemos comprobar" que dice "No publicamos testimonios ni calificaciones que no podamos respaldar". Tres pantallas más arriba, la misma portada declara "Excelente 5.0 de 5 basado en 130 opiniones de clientes", "MÁS DE 100 CLÍNICAS", "50,000+ CITAS AL MES" y una "reducción de no-shows del 85%". Las cuatro cifras son suyas y ninguna trae fuente. No es una acusación: es que la sección de al lado fija el estándar y ahí no se cumple.

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | MR Dental Cloud | Dentalpin |
|---|---|---|
| Modelo | SaaS, suscripción mensual | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | ✓ Navegador, nada que administrar | ~ Tu servidor, o gestionado por nosotros |
| Precio publicado | ✓ Dos planes, $350 y $750 MXN | ✓ $0 MXN autoalojado |
| Moneda del contrato | ✓ Pesos, con selector de país | ✓ Pesos, o ninguna si lo autoalojas |
| Prueba sin costo | ✓ 30 días sin tarjeta | ✓ Demo pública, o instálalo |
| Garantía de devolución | ✓ 30 días sin justificación | ~ No aplica, el núcleo es gratis |
| Límite de dentistas | ✗ 5 en Básico, 10 en Premium | ✓ Sin límite |
| Límite de pacientes | ✗ "Limitados" en Básico, sin número | ✓ Sin límite |
| Consultorios incluidos | ✗ 1 en Básico, 2 en Premium | ✓ Varios en una instalación |
| Bot de WhatsApp que agenda solo | ✓ 24/7, con agenda en vivo | ✗ No lo tenemos |
| Inventario | ✓ Con reorden automático | ~ Módulo de la comunidad, se instala |
| Exportación HL7 FHIR R4 | ✓ Cinco tipos de recurso | ✗ No la tenemos |
| Webhooks firmados | ✓ HMAC-SHA256 | ~ No documentados como tales |
| Documentación de seguridad | ✓ Trust Center y política versionada | ~ El código, que es otra cosa |
| ISO 27001 | ~ "Alineado", sin certificación, lo dicen ellos | ✗ Igual, sin certificación |
| Timbrado CFDI 4.0 | ✗ No aparece en sus páginas | ✗ No timbra |
| Dónde viven los datos | ✗ Sin proveedor ni región publicados | ✓ Donde tú decidas, México incluido |
| Exportación de datos | ✓ FHIR, JSON y PDF, por tu cuenta | ✓ PostgreSQL, vuelcas la base entera |
| API documentada | ~ Declarada, sin documentación pública | ✓ REST completa, OpenAPI |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| Razón social, RFC y domicilio | ✗ No publicados | ~ Sin contrato si lo autoalojas |
| Ley aplicable | ✓ México, tribunales mexicanos | ~ Sin contrato si lo autoalojas |
| Quién te factura | ~ Paddle.com, Merchant of Record | ✓ Nosotros, o nadie |
| Años en el mercado | ~ No publican año de fundación | ✗ Desde 2026 |

## Elige MR Dental Cloud si

Y esto va en serio, no es un trámite:

- **Quieres que alguien conteste el WhatsApp del consultorio a las tres de la mañana.** Su bot consulta la agenda en vivo, ofrece solo horarios libres, respeta tu hora de comida y los días bloqueados, cobra anticipos y no inventa precios. Nosotros no tenemos eso y no vale la pena disimularlo: es la diferencia más grande entre los dos productos.
- **No tienes a nadie técnico y no quieres tenerlo.** Es un navegador. Dentalpin autoalojado necesita un servidor, y un servidor necesita a alguien que lo cuide.
- **Tu consultorio es chico y cabe en el plan Básico.** Cinco dentistas por $350 al mes, con implementación y migración incluidas, es un precio real y publicado, no un "consúltanos".
- **Quieres poder enseñarle a tu asesor una tabla de cumplimiento.** Su Trust Center con diez marcos, su política de seguridad versionada y sus reportes bajo solicitud son más documentación de la que publica cualquier otro proveedor de esta sección, nosotros incluidos.
- **Necesitas intercambiar el expediente con otro sistema de salud.** Exportan HL7 FHIR R4 con cinco tipos de recurso y firman sus webhooks. Nosotros no hacemos FHIR.
- **Quieres contratar con ley y tribunales mexicanos.** Sus condiciones lo dicen, y en esta sección eso no es lo habitual.
- **Te tranquiliza una garantía de devolución.** Treinta días naturales, sin justificación, gestionada por Paddle.

## Elige Dentalpin si

- **Tu consultorio tiene más de cinco dentistas, o piensa tenerlos.** Su Básico se queda en cinco y el Premium en diez. Aquí no hay costo por dentista, por usuario ni por sillón en ningún caso.
- **No quieres descubrir un tope de pacientes a los dos años.** El renglón "Limitados" de su plan Básico no tiene número publicado. En el nuestro no hay renglón.
- **Te importa dónde vive el expediente de tus pacientes.** Sus páginas no nombran proveedor de nube ni país. Autoalojando eliges tú, México incluido. Conviene que sepas que nuestro plan Gestionado corre hoy en Ashburn, Estados Unidos, y lo decimos en nuestra propia página de precios.
- **Quieres saber con quién firmas.** No publican forma legal, RFC ni domicilio, y los derechos ARCO se ejercen en otro dominio. Autoalojando no hay contrato que firmar.
- **Vas a abrir un segundo o un tercer consultorio.** Su Premium llega a dos. Una misma instalación nuestra puede alojar varios y la cuota no se mueve.
- **Quieres integrar o automatizar de verdad.** Nuestra API REST está documentada con OpenAPI y es pública. La suya se declara en el Trust Center, pero no encontramos documentación para desarrolladores en ninguna página publicada.
- **Quieres leer el código que guarda expedientes clínicos.** Está en GitHub, y si nosotros desaparecemos mañana tu consultorio sigue trabajando.

![Ficha del paciente en Dentalpin con las alertas clínicas, el plan activo y la actividad filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*La pestaña de actividad del paciente, con el historial filtrable por visitas, tratamientos, movimientos financieros y comunicaciones.*

## Cómo sería migrar

Esta es la parte donde MR Dental Cloud se porta mejor que la mayoría, y hay que decirlo antes de los pasos: sus preguntas frecuentes dicen que "los datos son siempre tuyos: puedes exportarlos cuando quieras", y su Trust Center respalda la frase con exportación FHIR R4, portabilidad en JSON por el artículo de GDPR y exportación del expediente en PDF conforme a la norma. No dependes de un correo ni de un plazo.

Dos cláusulas suyas que conviene conocer antes, porque no son trampas pero muerden:

> **Una cuenta de prueba sin actividad durante 30 días consecutivos se elimina sola.** Sus condiciones y su política de privacidad lo dicen igual: se borra "junto con todos los datos asociados, sin generación de respaldos ni posibilidad de recuperación", y el correo "podrá quedar restringido para futuros registros". Si vas a evaluarlos, evalúalos en semanas seguidas y no uses la cuenta de prueba como expediente real, que es exactamente lo que su propia página pide.

La segunda es que, tras cancelar, la información administrativa no regulada "podrá eliminarse tras 30 días". El expediente clínico se conserva conforme a la normativa sanitaria, pero lo administrativo tiene reloj. Saca todo antes de cancelar, no después.

El camino sería este:

1. **Exporta el expediente en FHIR R4** desde su sistema, con los cinco tipos de recurso que publican, y guárdalo antes de tocar la suscripción.
2. **Exporta aparte las imágenes clínicas.** Radiografías y fotos intraorales viven en el almacenamiento de archivos y son lo que se suele quedar fuera de cualquier exportación estructurada.
3. **Pide también el volcado en JSON** por la vía de portabilidad que documentan, porque trae campos administrativos que FHIR no modela.
4. **Sube los archivos** a Dentalpin. El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge) y valida antes de tocar nada.
5. **Revisa el preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
6. **Revisa las propuestas** de equivalencia: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y tú decides fila a fila. Lo que puntúa por encima de 0,9 se acepta en bloque.
7. **Ejecuta** la importación respetando tus decisiones.
8. **Cancela al final**, no al principio, y confirma por escrito que ya tienes lo administrativo.

El paso 6 es donde fallan casi todas las migraciones. Dos consultorios nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce cobros mal registrados que nadie detecta hasta meses después.

## Lo honesto

MR Dental Cloud es un producto serio y en varios renglones nos gana. El bot de WhatsApp que agenda solo, la exportación FHIR R4, la implementación incluida, los tribunales mexicanos y una documentación de seguridad que nadie más en este mercado publica son ventajas reales, no detalles. Si tu consultorio cabe en cinco dentistas y tu problema es que nadie contesta el WhatsApp, ellos lo resuelven hoy y nosotros no.

Lo que un consultorio mexicano debe pesar son cuatro cosas que salen de sus propias páginas. El plan Básico limita pacientes sin decir cuántos. No se publica en qué país ni con qué proveedor viven los datos. No hay razón social, RFC ni domicilio del responsable. Y la frase de la portada sobre la NOM-004 va más lejos que la de sus páginas legales, que es la correcta. Ninguna de las cuatro es un defecto oculto, y por eso se pueden poner en una tabla.

Dentalpin es la apuesta contraria: que el software del consultorio no debería ser una caja negra, que no deberías pagar más por contratar a otro dentista y que el expediente de tus pacientes debería vivir donde tú decidas. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada o [levantarlo en tu servidor en tres minutos](/es-mx/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

Si lo que te detiene es la facturación, el detalle de lo que exige el SAT está en [CFDI 4.0 en el consultorio dental](/es-mx/blog/cfdi-consultorio-dental/). CFDI, SAT y timbrado no aparecen ni una vez en las páginas de MR Dental Cloud que consultamos, y nosotros tampoco timbramos, así que en ese renglón empatan y los dos te dejan la tarea.

## Fuentes

Todas consultadas el 12 de octubre de 2026, con un navegador que ejecuta JavaScript porque su sitio no devuelve texto sin él:

- [MR Dental Cloud](https://www.mrdentalcloud.com/): el odontograma "anatómico por superficie y raíz real" adulto y pediátrico, el presupuesto por fases, los recordatorios por WhatsApp a 24, 12, 4 y 1 hora, la sincronización en ambos sentidos con Google Calendar, inventario con reorden, recetas digitales y mantenimiento de equipos, los sellos "COFEPRIS · Autorizado", "NOM-004-SSA3", "HL7 FHIR · Interoperable" y "LFPDPPP", la sección "Datos verificables · Lo que sí podemos comprobar", las cifras "Excelente 5.0 de 5 basado en 130 opiniones de clientes", "MÁS DE 100 CLÍNICAS", "50,000+ CITAS AL MES" y "reducción de no-shows del 85%", el pie "Hecho con 🦷 en México" y las preguntas frecuentes en JSON-LD, incluidas la que dice que el expediente "cumple con la NOM-004-SSA3-2012 vigente en México", la que dice "los datos son siempre tuyos: puedes exportarlos cuando quieras", la de monedas configurables (MXN, COP, CLP, PEN, ARS o USD) y la del bot que "nunca inventa montos".
- [Precios · MR Dental Cloud](https://www.mrdentalcloud.com/precios): los dos planes ($350 y $750 MXN al mes), los topes de dentistas (5 y 10), de consultorios (1 y 2) y de pacientes ("Limitados" e "Ilimitados"), el plan anual con un mes extra, la prueba de 30 días sin tarjeta, la implementación sin costo, la migración incluida, la ausencia de permanencia mínima, la cancelación desde el panel, los métodos de pago (tarjeta y PayPal) y el tercer plan Clínica "que se cotiza según tu operación".
- [Política de Seguridad y Cumplimiento Regulatorio · MR Dental Cloud](https://www.mrdentalcloud.com/security-compliance) (versión 2.0, 12 de octubre de 2026): el cifrado AES-256-GCM a nivel de campo, la derivación de claves por clínica con HKDF, la rotación de claves cada 90 días, Row Level Security en más de 22 tablas, la retención de auditoría de 7 años, la exportación FHIR R4, los catálogos CIE-10 y CDT/ADA, los identificadores CURP, INE y NSS, el RTO menor a 5 minutos y el RPO menor a 1 minuto, el "Aunque no contamos con certificación formal" de ISO 27001, el "SOC 2 Ready" y el aviso legal según el cual "la conformidad regulatoria final depende de la configuración, operación y políticas internas de cada organización cliente".
- [Trust Center · MR Dental Cloud](https://www.mrdentalcloud.com/trust): la tabla de diez marcos normativos con su alcance y estado, incluida la fila COFEPRIS con alcance "Registro sanitario institucional" y detalle "Registro COFEPRIS, responsable sanitario vinculado, sello institucional en documentos clínicos, pie de firma profesional", la fila ISO 27001 marcada "Alineado", los cinco recursos FHIR exportables, los webhooks HMAC-SHA256, las integraciones externas con API Key y OAuth2, y la sección de transparencia en IA que nombra Google Gemini y modelos GPT de OpenAI y declara que no se entrenan modelos con datos de usuarios.
- [Política de Privacidad y Aviso de Privacidad · MR Dental Cloud](https://www.mrdentalcloud.com/privacy-policy) (19 de febrero de 2026): el responsable "MR Desarrollos Inteligentes" sin forma legal, RFC ni domicilio, los derechos ARCO dirigidos a mrsmartdev.com, la cláusula de transferencias que menciona "infraestructura en la nube" sin nombrar proveedor ni región, la eliminación automática de cuentas de prueba sin actividad durante 30 días "sin generación de respaldos ni posibilidad de recuperación", y la declaración de que MR Dental Cloud es encargado del tratamiento y el consultorio el responsable.
- [Condiciones del Servicio · MR Dental Cloud](https://www.mrdentalcloud.com/terms-of-service) (19 de febrero de 2026): la ley de los Estados Unidos Mexicanos y la jurisdicción de tribunales mexicanos, Paddle.com como Merchant of Record, la garantía de devolución de 30 días, la eliminación de información administrativa no regulada 30 días después de cancelar, el límite de responsabilidad al monto pagado en los últimos 12 meses, y "MR Dental Cloud no garantiza el cumplimiento automático de obligaciones regulatorias del usuario".
- [Política de Reembolsos · MR Dental Cloud](https://www.mrdentalcloud.com/refund-policy) (6 de mayo de 2026): la garantía de 30 días naturales "sin necesidad de justificación", Paddle como Merchant of Record responsable de pagos, impuestos y reembolsos, y el plazo de 5 a 10 días hábiles para que el reembolso se refleje.
- [Promoción de validación · MR Dental Cloud](https://www.mrdentalcloud.com/promo-50): "Prueba 1 mes por $50 MXN", con renovación automática y pago con tarjeta, OXXO o SPEI.
- [Mapa del sitio de MR Dental Cloud](https://www.mrdentalcloud.com/sitemap.xml): el inventario de páginas publicadas, consultado para comprobar que no existe página de documentación para desarrolladores ni página alguna sobre CFDI, SAT o timbrado.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de MR Desarrollos Inteligentes.
