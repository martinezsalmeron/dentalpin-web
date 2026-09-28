---
title: "Dentalpin frente a Dentasys: una cuota plana de 80 € o tu propio servidor"
description: "Comparativa entre Dentasys, software dental 100% nube con cuota plana de 80 €/mes, y Dentalpin, open source y autoalojable. Con fuentes y fechas."
pubDate: 2026-09-28
tags: [comparativa, dentasys, software-dental]
---

Dentasys es uno de los pocos fabricantes de software dental en España que publica su precio, y además lo publica como una sola cifra: **80 € al mes más IVA por toda la clínica, con usuarios y doctores ilimitados**. Eso convierte esta comparativa en la más fácil de hacer con exactitud de todo el mercado español, y en la más difícil de ganar hablando solo de dinero.

Nosotros hacemos Dentalpin, así que no somos neutrales. Exactos sí podemos ser.

> **Cómo se ha hecho esta comparativa.** Todo lo que se afirma aquí sobre Dentasys sale de páginas que publica Dentasys, consultadas el 28 de septiembre de 2026 y enlazadas al final. Nada de blogs agregadores. Y hay una sección entera sobre cuándo Dentasys es la mejor opción, porque en varias cosas lo es.

## En treinta segundos

**Dentasys es el producto más terminado para una clínica que no quiere saber nada de servidores.** Es 100% nube, publica un teléfono de soporte, trae puente con Sidexis, Vistasoft y Romexis, fichaje laboral, visor DICOM en 3D y una recepcionista telefónica con IA que atiende llamadas 24 horas. Nada de eso lo tenemos nosotros.

**Dentalpin es open source y se autoaloja.** Sin licencia por sillón, por dentista ni por paciente, con el código publicado, la base de datos en el servidor que tú elijas y una API REST completa. A cambio, alguien tiene que ocuparse de ese servidor y de las copias.

Y la pregunta que de verdad decide no es la madurez, porque **los dos productos son nuevos**: su propio historial de versiones empieza en enero de 2026, y su página de Testimonios no publica ningún testimonio sino una invitación a un programa de acceso anticipado. Lo que decide es quién asume el riesgo operativo y dónde vive la historia clínica.

![Pantalla de inicio de Dentalpin: citas de hoy, quién está en clínica, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es Dentasys

Software de gestión para clínicas dentales prestado como servicio por internet, en palabras de su propio aviso legal. Es 100% nube, "sin servidor en la clínica", y se usa desde el navegador.

Su titular, publicado en el aviso legal y en el pie de todas las páginas, es **una persona física: BUITRAGO LINDARTE ANDRÉS CAMILO, NIF 55277751B**, con domicilio fiscal en Segur de Calafell (Tarragona), epígrafe IAE 845 y alta en el Censo de Empresarios de la AEAT. No hay sociedad detrás de la marca en las páginas consultadas. Su página *Sobre Nosotros* lo firma Andrés Buitrago como fundador y CEO, con "más de 12 años trabajando en el sector dental".

Lo que trae, según sus propias páginas de producto:

- **Historia clínica y odontograma.** Odontograma interactivo con periodontograma integrado, odontopediatría con dentición temporal y mixta, registro del estado inicial frente a la evolución, anamnesis personalizable, vademécum y alertas visuales de alergias.
- **Consentimientos.** Firma biométrica en tablet o iPad, validez eIDAS, sellado de tiempo de la ACCV y generación automática de PDF.
- **Presupuestos y facturación.** Emisión desde el odontograma, estados de borrador, entregado y aceptado, financiación y pagos fraccionados, series ilimitadas con rectificativas y abonos, y generación de los ficheros de VeriFactu.
- **Agenda y WhatsApp.** API oficial de WhatsApp Business, plantillas con variables, mensajes en castellano, euskera, catalán y gallego, y estados de enviado y leído.
- **Dos IA distintas.** Un chatbot por WhatsApp que confirma y reagenda desde febrero de 2026, y desde julio de 2026 una recepcionista telefónica con voz que consulta la agenda real, da y anula citas, habla español, catalán e inglés y se presenta siempre como asistente virtual.
- **Radiología.** Visor DICOM y CBCT en 3D dentro de la ficha, y un puente hacia Sidexis 4 / XG, Vistasoft y Romexis que abre la ficha del paciente en el software de rayos con un clic. Requiere tener el agente DentaSys Bridge corriendo en el PC de la clínica.
- **Y lo que no es clínico.** Control de jornada laboral con geolocalización cifrada y referencia al artículo 34.9 del Estatuto de los Trabajadores, inventario con alertas de reposición, chat interno, gastos con retenciones de IRPF, domiciliaciones, comisiones por doctor y caja diaria.

La plataforma está en español, catalán e inglés desde mayo de 2026.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras (tu servidor, el proveedor cloud que prefieras, o la máquina de la clínica) y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, recordatorios, recalls e informes. Verifactu va dentro como módulo incluido, no como producto aparte. Cada funcionalidad es un módulo que activas o desactivas, y el catálogo añade inventario, órdenes de laboratorio, gastos y exportación para la gestoría. El producto está en nueve idiomas, y el catalán no es uno de ellos.

También hay un copiloto de IA que ejecuta tareas sobre tus datos respetando los permisos de cada usuario, y viene desactivado de fábrica.

Es igual de joven que Dentasys, y se nota en las dos direcciones.

![Periodontograma de Dentalpin con los seis puntos de sondaje por diente](/screenshots/periodontogram.png)

*El periodontograma, con los seis puntos de sondaje registrados diente a diente.*

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos, y las ausencias van acotadas a las páginas que se consultaron.

| | Dentasys | Dentalpin |
|---|---|---|
| Modelo | Suscripción SaaS | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | ~ Solo nube, sin servidor en la clínica | ✓ Tu servidor, tu proveedor o local |
| Precio publicado | ✓ 80 €/mes + IVA por clínica | ✓ 0 €, todo incluido |
| Usuarios y doctores | ✓ Ilimitados en la cuota | ✓ Ilimitados, sin cuota |
| Verifactu | ✓ Genera los ficheros | ✓ Módulo incluido |
| Puente con equipos de RX | ✓ Sidexis 4 / XG, Vistasoft, Romexis | ✗ Sin puentes con nombre publicados |
| Visor DICOM y CBCT en 3D | ✓ Desde mayo de 2026 | ✗ No |
| Recepcionista telefónica con IA | ✓ Voz, 24/7, tres idiomas | ✗ No |
| Fichaje del art. 34.9 ET | ✓ Incluido | ✗ No |
| Teléfono de soporte publicado | ✓ +34 634 40 71 28 | ✗ Telegram y GitHub |
| Idiomas del producto | Español, catalán e inglés | Nueve, sin catalán |
| Dónde viven los datos | ~ AWS, sin región ni país publicados | ✓ Donde tú decidas |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| API | ~ API de Citas Web para tu página | ✓ REST completa, documentada con OpenAPI |
| Encargado del tratamiento | ✗ Sin contrato del art. 28 RGPD en las páginas consultadas | ✓ No hay encargado: corre en tu infraestructura |
| Probarlo sin hablar con nadie | ~ Vídeos y demo guiada de 30 min, sin prueba gratuita | ✓ Demo pública y `docker compose up` |
| Historial publicado | Versiones de enero a julio de 2026 | Desde 2026 |
| Clínicas usándolo | ✗ No publica ninguna cifra | ✗ Muy pocas todavía |

Sobre el precio conviene ser preciso, porque la cifra plana esconde tres variables que sí están publicadas.

> **Los 80 € no son la factura entera, y Dentasys lo dice.** Cada mensaje de WhatsApp que inicia conversación cuesta **0,07 € a tarifa Meta** (recibir y responder dentro de la sesión de 24 horas es gratis), la recepcionista telefónica añade **5 €/mes de línea más 0,30 € por minuto atendido**, y traer los datos de otra plataforma son **500 € + IVA**. Con plan anual la cuota baja a 70 €/mes y la migración va incluida. Nada de esto está escondido: está en su página de precios.

Y hay una segunda cosa que conviene mirar antes de firmar, porque son sus propios documentos los que no encajan.

> **Su aviso legal remite a los Términos y Condiciones para "las condiciones de disponibilidad, soporte y responsabilidad del servicio contratado", y los Términos consultados no las contienen**: son cinco cláusulas breves sin SLA, sin compromiso de exportación y sin contrato de encargado del tratamiento. La Política de Privacidad describe los datos de quien contrata (nombre, email, teléfono, nombre de la clínica y facturación) y las notificaciones de WhatsApp, pero no el tratamiento de la historia clínica de tus pacientes. Su página de eliminación de datos sí es clara: se pide por email, se resuelve en 30 días como máximo y "esta acción es irreversible", sin mencionar que te entreguen una copia antes. Si te interesa Dentasys, eso es exactamente lo que hay que preguntarles.

## Elige Dentasys si

Y esto va en serio, no es un trámite:

- **No quieres servidor ni informático, ni ahora ni nunca.** Es 100% nube y esa es su propuesta entera. Dentalpin se autoaloja, y eso significa que alguien tiene que ocuparse de las actualizaciones y de las copias.
- **Tu clínica está en Cataluña o trabaja en catalán.** Su producto está en catalán, sus plantillas de WhatsApp salen en castellano, euskera, catalán y gallego, y su recepcionista telefónica habla catalán. Nosotros estamos en nueve idiomas y ninguno es el catalán.
- **Trabajas con Sidexis, Vistasoft o Romexis** y quieres el puente ya hecho en vez de montarlo. El suyo está publicado con nombre y versión, y nosotros no publicamos ninguno.
- **Quieres que una IA conteste el teléfono.** Es su producto de julio de 2026, con voz, agenda real y registro de la conversación en la ficha. Nosotros no tenemos nada equivalente.
- **Necesitas el fichaje laboral dentro del mismo programa.** El artículo 34.9 del Estatuto de los Trabajadores obliga a registrar la jornada, y lo tienen integrado.
- **Quieres una cuota previsible y un número al que llamar.** 80 € + IVA sin límite de doctores, y un teléfono publicado en todas sus páginas. Sus propias páginas dicen además "Sin Permanencia" y "Soporte Real, equipo en España", y sus Términos no recogen ningún plazo mínimo.

Un producto que resuelve el teléfono, el fichaje y el puente de radiología resuelve tres problemas reales que nosotros no resolvemos.

## Elige Dentalpin si

- **Quieres saber en qué país están los datos de tus pacientes.** Su página de seguridad habla de centros de datos con certificaciones ISO 27001, SOC 2 y PCI DSS, que son del proveedor, y la página que titula Testimonios nombra AWS, pero **ninguna de las dos publica región ni país**. Aquí eliges tú el servidor y el sitio.
- **Quieres leer el contrato antes de firmar.** Qué pasa si el servicio se cae, qué SLA hay, quién es encargado del tratamiento de la historia clínica y cómo te llevas los datos. Si el software corre en tu infraestructura, esas cuatro preguntas dejan de existir.
- **Te preocupa la salida.** Una baja cuyo procedimiento publicado borra de forma irreversible, sin mencionar ninguna copia entregada antes, es un riesgo distinto a una base de datos PostgreSQL que ya es tuya.
- **Quieres auditar el código** que guarda historias clínicas. Está publicado en GitHub, con su licencia.
- **Quieres integrar más allá de las citas.** La única API que aparece en sus páginas es la de citas para tu web; la nuestra es REST completa con OpenAPI, y por eso puedes conectar lo que quieras sin pedir permiso.
- **La cuota, aunque sea plana, no te cuadra.** 960 € + IVA al año es poco dinero para una clínica grande y bastante para una consulta de un sillón que empieza. Aquí no hay cuota, hay un servidor.

![Listado de facturas de Dentalpin con los estados emitida, pagada, pago parcial, vencida y borrador](/screenshots/invoices.png)

*El listado de facturas, con el estado de cobro de cada una y lo que queda pendiente.*

## Cómo sería migrar

El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito:

1. **Subes el fichero** y el sistema lo valida antes de tocar nada.
2. **Ves un preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
3. **Revisas las propuestas**: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y tú decides fila a fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
4. **Ejecutas**, y la importación corre respetando tus decisiones.

Para salir de Dentasys hacia cualquier sitio, la pregunta previa es en qué formato te entregan los datos, porque sus páginas no lo dicen. Pídelo por escrito antes de contratar, no el día que quieras irte.

## Lo honesto

Dentasys hace bien dos cosas que aquí se valoran mucho. Publica su precio entero, incluidas las variables que lo mueven, cuando casi nadie en el mercado español publica ninguno. Y ha priorizado el teléfono, el fichaje y el puente de radiología, que son trabajo real de una recepción y no casillas de marketing. Si tu clínica quiere exactamente eso y nada de servidores, la elección sensata hoy es la suya.

Lo que no se puede leer en sus páginas es el contrato del servicio. No hay SLA, no hay condiciones de disponibilidad donde su propio aviso legal dice que están, no hay contrato de encargado del tratamiento para datos de salud y no hay una salida documentada. Son cuatro preguntas, no cuatro acusaciones, y se resuelven con un email antes de firmar.

Lo nuestro es la apuesta contraria: que el software que guarda historias clínicas no debería ser una caja negra alquilada. Es igual de joven que el suyo y tiene menos cosas hechas. Puedes [ver lo que cuesta](/es/precios/), que es cero, [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 28 de septiembre de 2026:

- [Software de gestión para clínicas dentales · Dentasys](https://www.dentasys.es/es/software-clinica-dental): descripción del producto, nube sin servidor en la clínica y funcionalidades.
- [Precios](https://www.dentasys.es/es/pricing): "80€ /mes + IVA", Licencia PRO, "Usuarios y Doctores ILIMITADOS", "Pacientes Ilimitados", el listado de lo incluido, WhatsApp a "0.07€ /mensaje enviado (tarifa Meta)", asistente de voz a "5€ /mes por la línea de teléfono" más "0,30€ /minuto de llamada atendida por la IA", migración de "500€ + IVA" y el plan anual a 70 €/mes con la migración incluida.
- [Gestión clínica integral](https://www.dentasys.es/es/features/clinical-records): odontograma, odontopediatría, periodontograma integrado, firma biométrica y alertas de alergias.
- [Inteligencia de negocio](https://www.dentasys.es/es/features/finance): estados de presupuesto, financiación, series de facturación, VeriFactu y exportación para la gestoría.
- [Automatización](https://www.dentasys.es/es/features/automation): API oficial de WhatsApp Business, plantillas multilingües y chatbot.
- [Integraciones](https://www.dentasys.es/es/integrations): "Compatible con Sidexis 4 / XG (Dentsply Sirona)", "Vistasoft (Dürr Dental)", "Romexis (Planmeca)", el agente DentaSys Bridge en el PC de la clínica, y la API de Citas Web.
- [Novedades](https://www.dentasys.es/es/changelog): versiones de enero de 2026 (v2.0.0, odontograma 3D con periodontograma integrado) a julio de 2026 (v3.0.0, recepcionista telefónica con IA), incluido el visor DICOM/CBCT de mayo de 2026 y la plataforma en español, catalán e inglés.
- [Seguridad](https://www.dentasys.es/es/security): SSL/TLS, "centros de datos de clase mundial con certificaciones de seguridad ISO 27001, SOC 2 y PCI DSS" y copias automáticas y redundantes, sin región ni país.
- [Testimonios](https://www.dentasys.es/es/testimonials): "Infraestructura AWS con cifrado en tránsito y reposo, 2FA por WhatsApp y registro de auditoría completo", el fichaje con geolocalización cifrada AES-256 y el artículo 34.9 ET, y "Estamos buscando clínicas innovadoras para nuestro programa de acceso anticipado".
- [Sobre nosotros](https://www.dentasys.es/es/about): Andrés Buitrago, fundador y CEO, "más de 12 años trabajando en el sector dental".
- [Aviso legal](https://www.dentasys.es/es/legal): titular BUITRAGO LINDARTE ANDRÉS CAMILO, NIF 55277751B, domicilio en Calafell, epígrafe IAE 845, Censo de Empresarios de la AEAT, y la remisión a los Términos para disponibilidad, soporte y responsabilidad. Última actualización 03/09/2026.
- [Términos y condiciones](https://www.dentasys.es/es/terms): las cinco cláusulas del servicio. Última actualización 21/09/2026.
- [Política de privacidad](https://www.dentasys.es/es/privacy) y [Solicitud de eliminación de datos](https://www.dentasys.es/es/data-deletion): alcance de los datos descritos, plazo máximo de 30 días y "esta acción es irreversible".
- [Precios de Dentalpin](/es/precios/), [licencia](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de Dentasys.
