---
title: "Dentalpin frente a Astra DentOS: timbrado de CFDI contra open source autoalojado"
description: "Comparativa entre Astra DentOS, software dental mexicano que timbra CFDI 4.0 desde el expediente, y Dentalpin, open source y gratis autoalojado. Con fuentes."
pubDate: 2026-10-11
tags: [comparativa, astra-dentos, software-dental, mexico]
---

Astra DentOS hace una cosa que nosotros no hacemos: timbra tus CFDI ante el SAT desde el mismo expediente donde acabas de registrar el tratamiento. Si eso es lo que vienes a resolver, la comparativa se acaba en el primer párrafo y la respuesta son ellos.

Nosotros hacemos Dentalpin, así que no somos neutrales. Lo que sí podemos ser es exactos, y empezar por la fila que perdemos.

> **Cómo está hecha esta comparativa.** Todo lo que aquí se afirma sobre Astra DentOS sale de páginas que publica AstraVertex en dentos.app, con enlace y fecha al final. Ningún comparador ni ranking de "los mejores programas dentales": se contradicen entre sí y varios los escribe un competidor. Y hay una sección entera sobre cuándo ellos son la mejor opción, porque la hay.

## En treinta segundos

**Astra DentOS** está armado alrededor del problema fiscal mexicano. Su propia página de características dice que el odontograma está "conectado a la facturación fiscal" y que el sistema "genera el CFDI 4.0 al instante", con timbres incluidos en cada plan y un flujo de QR en el recibo para que, en sus palabras, "El paciente se factura solo". Además publican dictado por voz del expediente, análisis de rayos X con visión IA y un teléfono en México.

**Dentalpin** es open source y gratis autoalojado, con el código publicado, API REST documentada y el expediente donde tú decidas. La cuota no sube cuando contratas a otro odontólogo ni cuando abres otro consultorio. A cambio, en México no timbramos nada.

La pregunta que decide es corta: si quieres facturar desde el expediente, ellos resuelven eso hoy y nosotros no. Si lo que te preocupa es dónde vive el expediente, qué pasa con tus datos si el proveedor cierra y qué dice el contrato que estás firmando, ahí la conversación cambia, porque en su sitio no hay contrato que leer.

![Pantalla de inicio de Dentalpin con las citas del día, quién está en el consultorio, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es Astra DentOS

Un producto en la nube para consultorios dentales en México, desarrollado y operado por AstraVertex, que se presenta como "Sistema Operativo" para la clínica y no como una agenda. Lo dicen con esas palabras en su página de características: "No ofrecemos agendas."

Su aviso de privacidad, con fecha del 12 de febrero de 2026, nombra a **AstraVertex Technology** y aclara el reparto de responsabilidades: el consultorio es el responsable de los datos de sus pacientes y AstraVertex actúa solo como encargado, citando el artículo 3 fracción IX de la LFPDPPP. En ninguna de las páginas consultadas aparece una razón social completa ni un RFC.

Lo que publican como alcance del producto, en sus propios términos:

- **Expediente y cumplimiento.** "NOM-004 y NOM-024 integradas", con el expediente descrito como "evidencia sólida" y no como captura.
- **Dictado clínico con IA.** Tres herramientas nombradas: Anamnesis Inteligente, Periodontograma de Voz y Notas SOAP de Evolución. El asistente de voz se llama Astra y el dictado usa Whisper, según su propia página.
- **Odontograma 3D** "conectado a la facturación fiscal".
- **Facturación CFDI 4.0** con timbrado ante el SAT dentro del producto, QR en el recibo y descarga de XML y PDF.
- **Consentimiento con firma remota** vinculada automáticamente al expediente.
- **Análisis de rayos X asistido con visión IA** y un resumen clínico por paciente al mes.
- **Sitio web del consultorio** incluido, en `clinica.dentos.app`.

Su base instalada declarada es "+500 Clínicas Digitalizadas". Es su cifra, publicada por ellos, y no hay forma de verificarla desde fuera.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras (tu servidor, el proveedor que elijas) y no pagas cuota por sillón, por odontólogo ni por paciente.

Agenda, pacientes, expediente clínico, odontograma, periodontograma, planes de tratamiento, presupuestos con firma, cobros, recordatorios, WhatsApp, informes y un copiloto de IA que ejecuta operaciones sobre tus datos reales respetando los permisos de cada usuario.

Y lo que no hacemos, dicho aquí y no al final: **en México no timbramos tus facturas ante el SAT ni emitimos CFDI**. Verás documentos de facturación en pantalla y no son comprobante fiscal. Sigue facturando con el sistema que uses hoy.

![Expediente de paciente en Dentalpin con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*El expediente del paciente: odontograma, alertas clínicas, plan activo y próxima cita en la misma pantalla.*

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | Astra DentOS | Dentalpin |
|---|---|---|
| Modelo | Suscripción mensual en la nube | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Precio publicado | ✓ Cinco planes, de $349 a $1,349 / mes + IVA | ✓ $0 MXN autoalojado, MXN 899 al mes gestionado |
| Timbrado de CFDI 4.0 | ✓ Dentro del producto, timbres incluidos | ✗ No timbramos ante el SAT ni emitimos CFDI |
| Dictado por voz del expediente | ✓ Anamnesis, notas SOAP y periodontograma | ✗ No |
| Análisis de rayos X con IA | ✓ Incluido en todos los planes | ✗ No |
| Sitio web del consultorio | ✓ `clinica.dentos.app` incluido | ✗ No |
| Soporte telefónico en México | ✓ Línea publicada (+52) 983 12 06575 | ✗ Telegram y GitHub |
| Odontograma y periodontograma | ✓ Ambos, por su página de planes | ✓ Ambos, con periodontograma SEPA |
| Cuota al crecer el equipo | ~ Por doctor: los planes van de 1 a 4 | ✓ Plana, sin costo por usuario ni consultorio |
| Términos y condiciones públicos | ✗ Ninguna de las 13 URL de su sitemap | ✓ Licencia publicada en GitHub |
| Dónde viven los datos | Ninguna página consultada lo dice | ✓ Donde tú decidas (Ashburn en el gestionado) |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| API documentada | ✗ No aparece en las páginas consultadas | ✓ REST completa, con OpenAPI |
| Exportar todo tu expediente | Solo se publica XML y PDF del CFDI | ✓ La base de datos es tuya |
| Certificación SIRES de la DGIS | ~ En proceso, por su propio blog | ✗ No iniciada |

Tres cosas de esa tabla necesitan el detalle completo, porque son las que deciden una firma.

## Lo que publican de precio, y lo que no

Los cinco planes están en su página, todos "/ mes + IVA", y lo que cambia entre ellos es el número de doctores y de timbres, no las funciones:

1. **IMPULSO IA**, $349 (regular $499): 1 doctor, 25 timbres al mes. Es para recién egresados y hay que mandar carta de liberación o título con antigüedad menor a un año a su correo después de suscribirse. "Este plan tiene una duración garantizada de 1 año."
2. **SMART IA**, $549 (regular $699): 1 doctor, 50 timbres.
3. **PRO DUO**, $700 (regular $850): 2 doctores, 65 timbres.
4. **PLAN INTEGRAL IA**, $849 (regular $999): 3 doctores, 80 timbres.
5. **PRO AI**, $1,349 (regular $1,499): 4 doctores, 100 timbres.

Su propio encabezado de precios lo resume: "Compara doctores y timbres mensuales. Todos incluyen las mismas herramientas clínicas y de IA."

Esa claridad tiene tres huecos, y los señalamos porque los tres salen de sus propias páginas:

- **El precio de Astra Pro no aparece.** Su sección de Astra describe dos niveles, Astra y Astra Pro, y marca Astra Pro como "Adicional en cualquier plan" sin ninguna cifra al lado. Las cuatro funciones listadas son las mismas en los dos niveles, así que no queda claro qué compras al pagar el adicional ni cuánto cuesta. Esa es la primera pregunta que vale la pena hacerles.
- **Los timbres tienen tope y no hay política de excedente publicada.** Cada plan trae su cuota (de 25 a 100 al mes) y al mismo tiempo la página dice "Sin bolsas, sin Timbres, sin sorpresas al final del mes". Ninguna página consultada dice qué pasa el día que un consultorio pasa de su cuota.
- **Las funciones de un plan dependen de qué página leas.** La sección de precios dice que todos los planes traen las mismas herramientas clínicas y de IA. Su página `conoce-astra-dentos` presenta PRO AI con asistente de voz, notas SOAP con IA, análisis de rayos X, soporte prioritario 24/7, respaldo en tiempo real y roles y permisos avanzados como si fueran de ese plan. Las dos páginas son suyas y no concuerdan.

Nuestro lado del precio, para que la comparación sea de peras con peras: el núcleo autoalojado cuesta **$0 MXN** y se queda en cero. Si prefieres que lo cuidemos nosotros, el plan Gestionado son **MXN 899 al mes** (MXN 8.990 al año en lugar de 10.788), con puesta en marcha de MXN 4.900, más el servidor que contratas tú directo al proveedor por unos MXN 300 a 350. Todo está desglosado en [precios](/es-mx/precios/).

## Las tres frases de su sitio que conviene leer dos veces

No son errores. Son afirmaciones que publican ellos y que cambian de significado cuando buscas la fuente.

- **"Multas hasta $300,000 MXN según NOM-004".** Está en su página de inicio y es su argumento de venta. Su propia página no la liga a ningún artículo ni a ninguna publicación oficial, así que es una cifra suya y no una fuente. Si el riesgo regulatorio es lo que te mueve a cambiar de software, confírmalo con tu abogado y no con la página de un proveedor.
- **"Una clínica dental promedio en México pierde $495,000 MXN al año".** Mismo caso, sin fuente en la página.
- **"Nuestro personal tiene prohibido el acceso a datos clínicos".** Está en su aviso de privacidad y es un compromiso fuerte. Al mismo tiempo, el producto manda el dictado clínico a un motor de IA (nombran Whisper en su página de inicio) y el aviso de privacidad **no nombra a ningún proveedor ni subencargado**. Preguntar quién procesa esa voz, y en qué país, es razonable antes de dictar un expediente completo.

> **Lo más sólido que se puede decir de su cumplimiento es lo que dicen ellos mismos.** Su entrada de blog del 5 de octubre de 2026 dice que Astra DentOS 1.1 "ya aparece en la página de la Dirección General de Información en Salud (DGIS) dentro del proceso de certificación SIRES", como "SIRES programado para pre revisión", que han "presentado formalmente nuestra solicitud de certificación" y que el producto "continúa en proceso de certificación". Es una solicitud en trámite, no un certificado, y el mérito es que lo publican así. Nosotros no hemos iniciado ese proceso.

## Lo que no hay en su sitio

Su sitemap tiene 13 direcciones y las revisamos todas. Esto es lo que no aparece en ninguna, y en los tres primeros casos importa bastante:

- **No hay términos y condiciones.** Hay aviso de privacidad y nada más. Se cobra con Stripe una suscripción mensual sin que haya en el sitio un documento que diga qué nivel de servicio se compromete, qué pasa al cancelar, si hay reembolso, qué plazo hay para recuperar tus datos ni qué ley aplica.
- **No se publica dónde viven los datos.** El aviso de privacidad habla de "servicios en la nube" y cifrado AES-256, y cita la ISO/IEC 27001, pero ninguna página consultada nombra proveedor, región ni país.
- **No hay procedimiento de exportación.** Lo único que se publica como descarga es el XML y el PDF del CFDI. Para el expediente completo no hay ni formato ni plazo.
- **No hay migración documentada** desde otro programa, ni gratis ni con precio.
- **No hay API ni documentación de integraciones.**
- **No hay respaldo publicado de las cifras de base instalada.** Los testimonios traen nombre y ciudad, lo que ya es más de lo que publica buena parte de este mercado.

Una última, menos grave pero vale decirla: su página de inicio promete "Ingenieros en vivo 24/7" y "Soporte 100% humano", mientras su página de soporte lista correo y un WhatsApp cuya "Atención inmediata" se reserva a clientes PRO AI, sin horario ni compromiso de respuesta. Las dos páginas son suyas.

## Elige Astra DentOS si

Y esto va en serio, no es un trámite:

- **Quieres timbrar desde el expediente.** Es la razón de ser del producto y nosotros no la cubrimos en México. Timbres incluidos en el plan, QR en el recibo y el CFDI generado al instante según su propia página. Si hoy estás pasando datos del expediente a un portal de facturación a mano, eso es la mitad de tu problema resuelto.
- **Quieres dictar la consulta en voz alta.** Anamnesis, notas SOAP y periodontograma por voz. No tenemos nada parecido.
- **Quieres un teléfono mexicano y alguien que te configure el sistema.** Publican línea con lada de Quintana Roo y prometen puesta en marcha en 24 horas. Nuestro soporte es Telegram y GitHub.
- **Acabas de salir de la carrera.** $349 al mes + IVA con precio garantizado un año, para un consultorio de un doctor, es una entrada barata a un producto que ya trae facturación.
- **Quieres que el expediente lo cuide alguien más.** Nuestro núcleo gratis es autoalojado: alguien tiene que ocuparse del servidor y de los respaldos.
- **Te importa que tu proveedor esté en el proceso SIRES de la DGIS.** Ellos lo iniciaron y lo publican; nosotros no.

Un producto que resolvió el timbrado dentro del expediente clínico resolvió algo que en México cuesta trabajo de verdad.

## Elige Dentalpin si

- **Te incomoda que el expediente de tus pacientes viva donde no decides tú.** Autoalojado, el servidor es tuyo y el país lo eliges tú. Y lo obvio hay que decirlo: nuestro plan gestionado está en Ashburn, Estados Unidos, así que en esa modalidad los datos tampoco están en México.
- **Vas a crecer y no quieres que la cuota crezca contigo.** Sus planes se escalonan de uno a cuatro doctores. Aquí contratas a quien necesites y abres los consultorios que quieras sin que la cuota se mueva.
- **Quieres leer el contrato antes de firmar.** La licencia está publicada y el código también. Hoy no hay términos y condiciones que leer en su sitio.
- **Quieres poder llevarte todo.** La base de datos es tuya y el formato está documentado, no hay que pedir una copia por correo.
- **Quieres integrar y automatizar.** API REST con OpenAPI, no un formulario de contacto.
- **Quieres auditar el código** que guarda expedientes clínicos. Está en GitHub.

![Listado de facturas de Dentalpin con los estados emitida, pagada, pago parcial, vencida y borrador](/screenshots/invoices.png)

*El listado de documentos de facturación, con el estado de cobro de cada uno y lo que queda pendiente. En México estos documentos no son comprobante fiscal.*

## Cómo sería migrar

Ellos no publican procedimiento de migración, así que lo que sigue es el nuestro. El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito:

1. **Subes el archivo** y el sistema lo valida antes de tocar nada.
2. **Ves una vista previa** con conteos y filas de muestra. Todavía no se ha escrito nada.
3. **Revisas las propuestas**: el sistema compara el catálogo de tratamientos del origen contra el tuyo y tú decides fila por fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
4. **Ejecutas**, y la importación corre respetando tus decisiones.

> **El paso 3 es donde fallan casi todas las migraciones.** Dos consultorios nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce cobros mal registrados que nadie detecta hasta meses después.

Si vas en la dirección contraria, de nosotros hacia ellos, la pregunta que hay que hacerles antes de firmar es cómo se saca el expediente completo de su plataforma, porque hoy eso no está publicado.

## Lo honesto

Astra DentOS resolvió el problema que más fricción diaria causa en un consultorio mexicano, que es facturar sin salir del expediente, y lo vende a un precio publicado y en pesos. Si eso es tu prioridad, hoy es la elección sensata y nosotros no competimos ahí.

Donde la conversación se invierte es en todo lo que rodea al producto: sin términos y condiciones públicos, sin país de alojamiento publicado y sin procedimiento de exportación, lo que estás comprando es la promesa y no el contrato. Dentalpin es la apuesta contraria: el código a la vista, el expediente donde tú decidas y una cuota que no crece con tu equipo, a cambio de que el timbrado lo sigas haciendo en otro lado.

Si la facturación es tu duda, lee antes [cómo funciona el CFDI en un consultorio dental](/es-mx/blog/cfdi-consultorio-dental/) y [qué pide la NOM-004 al expediente](/es-mx/blog/expediente-clinico-dental-nom-004/). Y puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada o [levantarlo en tu servidor en tres minutos](/es-mx/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

Esto no es asesoramiento legal ni fiscal.

## Fuentes

Todas consultadas el 11 de octubre de 2026:

- [Astra DentOS](https://dentos.app/): los cinco planes con precio actual y regular, doctores y timbres de cada uno ($349/$499, $549/$699, $700/$850, $849/$999, $1,349/$1,499, todos "/ mes + IVA"), la frase "Compara doctores y timbres mensuales. Todos incluyen las mismas herramientas clínicas y de IA", la lista incluida en todos los planes, las condiciones del programa IMPULSO IA y su "duración garantizada de 1 año", los dos niveles Astra y Astra Pro con "Adicional en cualquier plan" y sin precio, "Sin bolsas, sin Timbres, sin sorpresas al final del mes", "+500 Clínicas Digitalizadas", "El paciente se factura solo", el flujo de QR en el recibo con timbrado ante el SAT, Whisper como motor de dictado, el teléfono (+52) 983 12 06575, el cobro con Stripe, "Ingenieros en vivo 24/7", "Soporte 100% humano", "Multas hasta $300,000 MXN según NOM-004" y "Una clínica dental promedio en México pierde $495,000 MXN al año".
- [Características · Astra DentOS](https://dentos.app/caracteristicas): "No ofrecemos agendas.", "El expediente no es captura, es evidencia sólida.", "NOM-004 y NOM-024 integradas.", Anamnesis Inteligente, Periodontograma de Voz y Notas SOAP de Evolución, la firma remota vinculada automáticamente al expediente, el "Odontograma 3D conectado a la facturación fiscal" y "genera el CFDI 4.0 al instante". En esta página no aparecen API, integraciones, alojamiento, exportación ni migración.
- [Conoce Astra DentOS](https://dentos.app/conoce-astra-dentos): la lista de funciones por plan que atribuye a PRO AI el asistente de voz, las notas SOAP con IA, el análisis de rayos X, el soporte prioritario 24/7, el respaldo en tiempo real y los roles y permisos avanzados; el odontograma y el periodontograma en SMART IA; la exportación de CFDI en "XML y PDF en 1 clic"; y la ausencia de multisucursal, migración, alojamiento y términos de cancelación.
- [Aviso de Privacidad · Astra DentOS](https://dentos.app/privacidad) (última actualización 12 de febrero de 2026): AstraVertex Technology como encargado citando el artículo 3 fracción IX de la LFPDPPP, el consultorio como responsable, "Datos cifrados en reposo y en tránsito (SSL/TLS)" y AES-256, la referencia a la ISO/IEC 27001, "Nuestro personal tiene prohibido el acceso a datos clínicos", los derechos ARCO ejercidos ante el Responsable, y la ausencia de proveedores o subencargados nombrados, de plazo de conservación y de procedimiento de exportación.
- [Astra DentOS 1.1 en el proceso de certificación SIRES de la DGIS · Blog de Astra DentOS](https://dentos.app/blog/astra-dentos-1-1-certificacion-sires-dgis) (publicada el 5 de octubre de 2026): "ya aparece en la página de la Dirección General de Información en Salud (DGIS) dentro del proceso de certificación SIRES", "como SIRES programado para pre revisión", "Hemos completado las etapas documentales y presentado formalmente nuestra solicitud de certificación" y "Astra DentOS 1.1 continúa en proceso de certificación". El registro de la DGIS no se pudo consultar directamente en esta fecha, así que lo anterior se cita como lo que publica el proveedor y no como constancia oficial.
- [Soporte · Astra DentOS](https://dentos.app/soporte): correo soporte@dentos.app y WhatsApp Business con "Atención inmediata para clientes PRO AI", sin horarios, sin compromiso de respuesta y sin condiciones de cancelación, exportación ni alojamiento.
- [Mapa del sitio de Astra DentOS](https://dentos.app/sitemap.xml): las 13 direcciones publicadas, entre las que no hay página de términos y condiciones.
- [Precios de Dentalpin para México](/es-mx/precios/): el núcleo autoalojado a $0 MXN, el plan Gestionado a MXN 899 al mes y MXN 8.990 al año en lugar de 10.788, la puesta en marcha de MXN 4.900, el servidor de MXN 300 a 350 al mes contratado por ti, el centro de datos de Ashburn y la nota de que en México no timbramos ante el SAT ni emitimos CFDI.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de AstraVertex.
