---
title: "Dentalpin frente a Dentalink: la nube de Healthatom o tu propio servidor"
description: "Comparativa entre Dentalink, software dental en la nube con 15.000 clínicas declaradas, y Dentalpin, open source y autoalojable. Con fuentes y fechas."
pubDate: 2026-08-19
tags: [comparativa, dentalink, software-dental]
---

Dentalink es el producto dental de Healthatom y uno de los pocos fabricantes que llega a España desde Latinoamérica en lugar de al revés. Si estás comparando, la decisión no va de funcionalidades: va de si quieres tu historia clínica en la nube de otro o en un servidor a nombre de tu clínica.

Nosotros hacemos Dentalpin, así que no somos neutrales. Exactos sí podemos ser.

> **Cómo está hecha esta comparativa.** Todo lo que se afirma aquí sobre Dentalink sale de páginas que publica la propia empresa en softwaredentalink.com, en su centro de ayuda y en healthatom.com, con enlace y fecha al final. Ningún blog agregador: se contradicen entre sí y algunos los escriben competidores. Y hay una sección entera sobre cuándo Dentalink es la mejor opción, porque la hay.

## En treinta segundos

**Dentalink** es un producto rodado y grande. Su web declara más de 15.000 clientes en más de 20 países, la página española habla de 15 años perfeccionando el sistema, y hay un teléfono con prefijo +34 y soporte en horario local. Nada de eso lo tenemos nosotros.

**Dentalpin** es open source y se instala donde tú decidas: sin licencia por sillón, por dentista ni por paciente, con el código publicado y la base de datos en una máquina que controlas.

La pregunta que decide es corta. Si mañana dejas de pagar, ¿quién sigue teniendo acceso a las historias clínicas? En Dentalink la respuesta está publicada y la citamos más abajo.

![Pantalla de inicio de Dentalpin con las citas de hoy, quién está en clínica, los pagos vencidos y los pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es Dentalink

Software de gestión dental 100% en la nube, descrito en su propia web como "una marca de Healthatom". Se usa desde el navegador, sin instalar nada, y su centro de ayuda recomienda Google Chrome y una conexión estable de al menos 2 Mbps.

La información se aloja, según su propia página de planes, "en los servidores de Amazon Web Services". La página española añade certificación ISO 27001, cumplimiento del RGPD y facturación compatible con Verifactu, que describe como "Facturación electrónica inalterable y trazable".

El catálogo es amplio y está agrupado en su web en seis bloques: captación de pacientes, experiencia de pacientes, ingresos, fidelización, control de la operación e IA. Dentro hay odontograma y periodontograma, historia clínica, agenda, consentimientos informados, firma electrónica, módulo de ortodoncia, estética facial, control de caja y gastos, gestión de laboratorios e inventario, cálculo de pago a odontólogos, reportes en Excel y KPI, y una línea de funciones con IA que incluye análisis de RX, resumen clínico y notas clínicas.

Se vende en tres planes, **Basic**, **Pro** y **Titanium**, y ahí está el detalle que más cambia el cálculo:

- **El odontograma y el periodontograma están en los tres planes**, incluido el de entrada. Es la primera fila que hay que mirar en cualquier tarifa dental, y aquí sale bien.
- **El inventario, los reportes KPI, los reportes en Excel y el multicentro empiezan en Pro**, no en Basic.
- **Las encuestas NPS y el email marketing son exclusivos de Titanium.**
- **El módulo de ortodoncia es un adicional** en Basic y Pro, y viene incluido solo en Titanium.
- **Los pagos presenciales y online y la telemedicina son adicionales en los tres planes.**

Sobre el precio hay que ser preciso, porque es la pregunta que todo el mundo trae.

> **Dentalink no publica tarifas.** Los tres planes llevan el botón "Solicita tu cotización", y su propia web responde que "Dentalink ofrece pagos recurrentes mensuales, semestrales o anuales, y los precios varían según las necesidades" (consultado el 19 de agosto de 2026). Lo que sí publica, y es una condición buena, es que no hay permanencia: "Sin contratos o plazos mínimos de uso".

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma SEPA, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, recalls e informes. Verifactu va dentro, no como producto aparte, y el asistente de IA ejecuta tareas sobre tus datos respetando los permisos de cada usuario.

Hay dos formas de tenerlo y en las dos el servidor está a nombre de tu clínica: lo montas tú, que es gratis, o lo instalamos y lo mantenemos nosotros por 89 € al mes más el servidor, que contratas tú directamente. El desglose está en [precios](/es/precios/).

Es mucho más joven que Dentalink. Eso importa y volvemos a ello.

![Ficha de paciente en Dentalpin con el odontograma, las alertas clínicas, el plan de tratamiento activo y la próxima cita](/screenshots/dental-chart.png)

*Ficha de paciente: odontograma, alertas clínicas, plan activo y próxima cita en la misma pantalla.*

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | Dentalink | Dentalpin |
|---|---|---|
| Modelo | Software como servicio, tres planes | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | ✓ 100% en la nube, nada que instalar | ~ Tu servidor, tu proveedor o local |
| Precio publicado | ✗ "Solicita tu cotización" | ✓ 0 € autoalojado · 89 €/mes gestionado |
| Permanencia | ✓ "Sin contratos o plazos mínimos de uso" | ✓ Ninguna |
| Odontograma en el plan de entrada | ✓ En los tres planes | ✓ Incluido |
| Ortodoncia | ~ Adicional en Basic y Pro | ✓ Incluida |
| Multicentro | ~ Desde el plan Pro | ✓ Incluido |
| Dónde viven los datos | Servidores de AWS | ✓ Donde tú decidas |
| Acceso si dejas de pagar | ✗ Se deshabilita a los 45 días | ✓ El servidor es tuyo |
| Exportar tus datos | ✓ "En cualquier momento" | ✓ Volcado estándar de PostgreSQL |
| API | ~ Lectura y escritura, con coste asociado | ✓ REST completa, OpenAPI, incluida |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| ISO 27001 | ✓ Declarada en su web | ✗ No |
| Años en el mercado | ✓ 15 declarados | ✗ Desde 2026 |
| Clínicas usándolo | ✓ Más de 15.000 declaradas | ✗ Muy pocas todavía |
| Soporte en España | ✓ Teléfono +34 y horario local | ✗ Telegram y GitHub |

Dos filas piden explicación, porque son las que de verdad separan a los dos productos.

**La API.** Dentalink tiene una, y con documentación pública: su centro de ayuda dice que "Dentalink cuenta con un API de integración, con puertos de lectura y también de escritura", que solo la cuenta ADMIN puede crear clientes, y que "Esta API tiene un costo asociado". Eso es más de lo que ofrece la mayoría del mercado español, donde la API directamente no existe. La diferencia con nosotros no es tenerla, es que aquí no se contrata aparte.

> **El impago y los datos.** La propia web de Dentalink explica que "Si no se registra el pago tras 45 días del vencimiento, el acceso a la cuenta se deshabilita, impidiendo el acceso a la información". Es una política normal en software como servicio y está publicada, que ya es más de lo que hacen otros. Pero conviene leerla dos veces antes de firmar, porque describe exactamente qué pasa con tu historia clínica un mes y medio después de un recibo devuelto.

Para ser justos con el otro lado: también publican que puedes descargar tu información "en cualquier momento" y que puedes darte de baja cuando quieras y recuperarla avisando a tu ejecutivo de posventa.

## Elige Dentalink si

Y esto va en serio, no es un trámite:

- **No quieres tener servidor ni pensar en él.** Dentalink es 100% en línea y su web lo vende así: "sin instalación de software adicional". Dentalpin se autoaloja, y alguien tiene que ocuparse de la máquina y de las copias.
- **Quieres un teléfono en España al que llamar.** Publican un +34 y prometen "atención en tu idioma, en tu horario". Lo nuestro es un canal de Telegram y GitHub.
- **Te pesa la certificación.** Declaran ISO 27001 en su web. Nosotros no la tenemos, y si tu aseguradora o tu grupo la exige en el pliego, la conversación se acaba ahí.
- **Quieres cobrar y financiar dentro del software.** Pagos presenciales y online, créditos en línea y cobro en cuotas son parte de su catálogo. Nosotros no somos pasarela de pago.
- **Quince años y más de 15.000 clientes resuelven problemas** que un producto de 2026 todavía no sabe que existen. Es una ventaja real y no la vamos a disimular.

## Elige Dentalpin si

- **Quieres saber lo que cuesta antes de hablar con nadie.** El número está publicado y no depende de cuántos sillones declares en la llamada.
- **Te incomoda que el acceso a tus historias clínicas dependa de un recibo.** Si el servidor es tuyo, un impago es un problema comercial, no un problema clínico.
- **Necesitas ortodoncia o multicentro y no quieres subir de plan por ello.** Aquí van dentro.
- **Quieres integrar sin abrir una negociación.** La API es REST, está documentada con OpenAPI y viene incluida.
- **Quieres poder auditar el código** que guarda historias clínicas de pacientes reales. Está publicado.
- **Prefieres decidir tú dónde está el dato.** Puede ser un servidor en tu clínica, en Hetzner o donde tú digas.

![Listado de facturas de Dentalpin con los estados emitida, pagada, pago parcial, vencida y borrador](/screenshots/invoices.png)

*El listado de facturas, con el estado de cobro de cada una y lo que queda pendiente.*

## Cómo sería migrar

Dentalink publica que puedes descargar tu información en cualquier momento, así que el punto de partida existe. Del lado de acá, el módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito:

1. **Subes el fichero** y el sistema lo valida antes de tocar nada.
2. **Ves un preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
3. **Revisas las propuestas**: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y decides fila a fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
4. **Ejecutas**, y la importación corre respetando tus decisiones.

> **El paso 3 es donde fallan casi todas las migraciones.** Dos clínicas nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después.

## Lo honesto

Dentalink es un producto grande, con años encima, soporte local en España y una lista de funciones que en varios puntos es más larga que la nuestra. Si lo que quieres es no tener servidor y que alguien coja el teléfono, es una elección razonable hoy.

Dentalpin es la apuesta contraria: que el software de tu clínica no debería ser una caja negra alquilada, y que el acceso a una historia clínica no debería depender de un recibo domiciliado. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 19 de agosto de 2026:

- [Dentalink · portada](https://www.softwaredentalink.com/): "una marca de Healthatom", cifras de clientes, pacientes, citas y países.
- [Dentalink España · sobre nosotros](https://www.softwaredentalink.com/es/sobre-nosotros): 15 años, más de 15.000 clínicas, Verifactu, RGPD, ISO 27001, AWS, teléfono +34 y horario local.
- [Planes de Dentalink](https://www.softwaredentalink.com/b/planes): planes Basic, Pro y Titanium, qué incluye cada uno, "Solicita tu cotización", periodicidad de pago, permanencia, alojamiento en AWS, descarga de información, baja e impago a 45 días.
- [Funcionalidades de Dentalink](https://www.softwaredentalink.com/funcionalidades): catálogo de módulos por bloques.
- [Integración API · centro de ayuda de Dentalink](https://ayuda.softwaredentalink.com/es/articles/9493507-integracion-api): puertos de lectura y escritura, creación de clientes por la cuenta ADMIN, coste asociado.
- [Documentación de la API de Dentalink](https://api.dentalink.healthatom.com/docs/): documentación pública de los endpoints.
- [Healthatom](https://www.healthatom.com/): productos del grupo y cifras corporativas.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de Healthatom.
