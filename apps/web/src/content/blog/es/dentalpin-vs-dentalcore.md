---
title: "Dentalpin frente a DentalCore: la nube argentina o tu propio servidor"
description: "Comparativa entre DentalCore, software dental argentino con precios publicados y facturación ARCA, y Dentalpin, open source y autoalojable. Con fuentes."
pubDate: 2026-08-20
tags: [comparativa, dentalcore, software-dental]
---

DentalCore es de los pocos fabricantes de software dental que publica sus precios en la web, y el único de esta comparativa que emite factura electrónica de ARCA dentro del propio sistema. Si trabajas en Argentina, esas dos cosas pesan más que casi cualquier otra fila de esta tabla.

Nosotros hacemos Dentalpin, así que no somos neutrales. Exactos sí podemos ser.

> **Cómo está hecha esta comparativa.** Todo lo que se afirma aquí sobre DentalCore sale de páginas que publica la propia empresa en dentalcore.app: su portada, su tarifa, sus funcionalidades, sus términos, su política de privacidad y su propio blog. Con enlace y fecha al final. Ningún blog agregador: se contradicen entre sí y algunos los escriben competidores. Y hay una sección entera sobre cuándo DentalCore es la mejor opción, porque la hay.

## En treinta segundos

**DentalCore está construido para Argentina y no lo disimula.** Emite la factura fiscal con su CAE y el QR de ARCA en cada cobro, trae más de veinte convenios de obras sociales precargados y se vende con precios publicados desde un plan gratuito. Nada de eso lo tenemos nosotros.

**Dentalpin es open source y se instala donde tú decidas**, sin licencia por sillón, por dentista ni por paciente, con el código publicado y la base de datos en una máquina a nombre de tu clínica.

La pregunta que decide es geográfica antes que técnica. Si facturas en Argentina contra ARCA y liquidas a PAMI o a OSDE todos los meses, ellos ya resolvieron ese trabajo y nosotros no. Si lo que te preocupa es de quién es el servidor donde viven las historias clínicas, la respuesta cambia de lado.

![Pantalla de inicio de Dentalpin con las citas de hoy, quién está en clínica, los pagos vencidos y los pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es DentalCore

Software dental en la nube para Argentina y Latinoamérica. Su portada se presenta como "El primer CDSS dental de Latinoamérica", con "13 motores que cruzan datos del paciente, alertan sobre contraindicaciones y sugieren protocolos en tiempo real".

Lo firma una persona, y eso es parte de la propuesta. Su página *about* lo atribuye al odontólogo Alfredo Di Tullio (M.N. 40.973), de La Plata, que empezó a desarrollarlo en 2023 y publicó la primera versión en 2025, con la idea de ser "un odontólogo que aprendió a programar" en lugar de una empresa de tecnología entrando en odontología.

El catálogo clínico es largo y está declarado módulo a módulo: odontograma digital, periodontograma, tratamiento periodontal, endodoncia, cirugía, ortodoncia, rehabilitación oral, restauraciones, estética facial, patología oral, urgencias, ATM, blanqueamiento, odontopediatría, radiografías y derivaciones profesionales.

Alrededor hay tres cosas que en esta comparativa son suyas y no nuestras:

- **Facturación fiscal argentina.** Su web dice "Factura electrónica de ARCA y obras sociales, adentro del mismo sistema", y detalla que "Cada cobro emite la factura fiscal automáticamente, con su CAE y el QR de ARCA".
- **Obras sociales precargadas.** "20+ convenios pre-cargados (PAMI, OSDE, IOMA, Swiss Medical, Galeno, Sancor...)", con autocálculo de cobertura y copago y facturación por lotes con exportación a PDF y CSV.
- **Un asistente de voz en español.** Se llama Sani y va dentro del producto. El dispositivo de gabinete del mismo nombre figura en su web como "Próximamente", así que hoy no cuenta.

Añaden nueve automatizaciones de WhatsApp, portal del paciente, teleodontología, inventario, cuatro roles de usuario con registro de auditoría, y un módulo de patología oral con "100 patologías codificadas" que anuncian como "Gratis para siempre".

> **DentalCore sí publica su tarifa, y eso es raro en este mercado.** Starter gratis (1 profesional, 1 sede, 500 MB), Pro 69 USD al mes (hasta 5 profesionales, 1 sede, 16 GB, pacientes ilimitados), Premium 139 USD al mes (hasta 30 profesionales, 4 sedes, 48 GB) y Enterprise desde 399 USD al mes. Se cobra en dólares con la nota "Pagás en tu moneda local al tipo de cambio del día", y hay 15 días de prueba del plan Pro sin tarjeta (consultado el 20 de agosto de 2026).

A la tarifa hay que sumarle una condición que casi nadie publica y ellos sí: garantía de devolución del 100% del dinero dentro de los primeros 14 días desde la primera compra, sin justificar el motivo. La suscripción se renueva sola y se cancela desde el panel, sin reembolso de la parte no consumida.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma SEPA, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, recalls e informes. El asistente de IA ejecuta tareas sobre tus datos respetando los permisos de cada usuario.

Hay dos formas de tenerlo y en las dos el servidor está a nombre de tu clínica: lo montas tú, que es gratis, o lo instalamos y lo mantenemos nosotros por 89 € al mes más el servidor, que contratas tú directamente. El desglose está en [precios](/es/precios/).

Nuestra facturación cumple Verifactu, que es la norma española. **No emitimos comprobantes electrónicos de ARCA ni liquidamos obras sociales argentinas**, y conviene decirlo en la segunda línea y no en la penúltima.

![Periodontograma de Dentalpin con los seis puntos de sondaje por diente](/screenshots/periodontogram.png)

*El periodontograma, con los seis sitios por diente y el registro de sangrado y recesión.*

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | DentalCore | Dentalpin |
|---|---|---|
| Modelo | Software como servicio, cuatro planes | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | ~ Solo nube | ~ Tu servidor, tu proveedor o local |
| Precio publicado | ✓ De 0 a 399+ USD al mes | ✓ 0 € autoalojado · 89 €/mes gestionado |
| Plan gratuito alojado por el fabricante | ✓ Starter, 1 profesional y 500 MB | ✗ No lo ofrecemos |
| Prueba sin tarjeta | ✓ 15 días del plan Pro | ~ Demo pública, o lo instalas tú |
| Garantía de devolución | ✓ 100% dentro de los 14 días | ✗ No publicamos ninguna |
| Límite de profesionales | ✗ 5 en Pro, 30 en Premium | ✓ Sin límite |
| Límite de sedes | ✗ 1 en Pro, 4 en Premium | ✓ Sin límite |
| Almacenamiento | ✗ 16 GB en Pro, 48 GB en Premium | ✓ El de tu disco |
| Factura electrónica ARCA con CAE y QR | ✓ Dentro del sistema | ✗ No |
| Obras sociales argentinas | ✓ 20+ convenios precargados | ✗ No |
| Verifactu (España) | ✗ No lo mencionan | ✓ Incluido |
| Motores de apoyo a la decisión clínica | ✓ 13 declarados | ✗ No los tenemos |
| Dónde viven los datos | Supabase/AWS, posiblemente fuera de tu país | ✓ Donde tú decidas |
| Acceso tras cancelar | ~ 30 días para exportar | ✓ El servidor es tuyo |
| API documentada | ✗ No publican documentación | ✓ REST completa, OpenAPI, incluida |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| Registro de auditoría | ✓ Declarado, con 4 roles | ✓ Incluido |
| Comunidad profesional propia | ✓ Odontolatam | ✗ No |
| Años en el mercado | Desde 2025 | Desde 2026 |

Dos filas piden explicación, porque son las que de verdad separan a los dos productos.

**Los límites por plan.** El plan Pro de DentalCore cubre hasta cinco profesionales, una sede y 16 GB. Para una consulta de dos sillones eso sobra, y 69 USD al mes por todo el catálogo clínico es un precio honesto; para un centro con tres sedes, la conversación pasa a Premium o a Enterprise. Nosotros no tenemos esos escalones porque no tenemos plan: el límite es el disco de la máquina que pongas.

> **Qué pasa con tus datos si te vas.** Sus términos son explícitos: "Tras la cancelación, el Usuario tendrá 30 días para exportar sus datos", y pasado ese plazo "DentalCore podrá eliminar los datos almacenados". Es una política normal y está publicada, que ya es más de lo que hacen muchos. Pero es un mes para mover una historia clínica que la ley te obliga a conservar bastante más tiempo, así que conviene leerla antes de firmar y no después.

Para ser justos con el otro lado: sus términos también dejan claro que el responsable de los datos del paciente es el odontólogo y que "DentalCore actúa únicamente como ENCARGADO del tratamiento", que es exactamente el reparto correcto. Y su política de privacidad publica el cifrado en tránsito con TLS/HTTPS, el cifrado en reposo y las copias de seguridad automáticas.

## Elige DentalCore si

Y esto va en serio, no es un trámite:

- **Facturas en Argentina.** El CAE y el QR de ARCA salen del mismo sistema donde cobras. Reproducir eso por tu cuenta encima de cualquier otro software es un proyecto, no una tarde.
- **Liquidas obras sociales todos los meses.** Veinte convenios precargados con autocálculo de cobertura y copago y facturación por lotes es trabajo administrativo que ya está hecho.
- **No quieres tener servidor ni pensar en él.** Es un producto de nube, y su tarifa incluye la infraestructura. Dentalpin se autoaloja y alguien tiene que ocuparse de la máquina y de las copias.
- **Quieres empezar hoy y sin poner tarjeta.** Un plan gratuito y quince días de prueba del Pro es una puerta de entrada que nosotros no tenemos.
- **Te interesa la profundidad clínica por especialidad.** Endodoncia, ATM, rehabilitación oral, patología oral con cien cuadros codificados y motores que avisan de contraindicaciones. Nuestro registro clínico es más generalista, y decir lo contrario sería mentir.
- **Valoras que lo firme un odontólogo en ejercicio.** Su propio blog dice, sobre los grandes de la región, que "Nosotros estamos arrancando la curva". Esa honestidad suele acompañar a un producto que escucha.

## Elige Dentalpin si

- **Te incomoda que el acceso a tus historias clínicas dependa de un recibo.** Si el servidor es tuyo, un impago es un problema comercial, no un problema clínico.
- **Necesitas que el dato no salga de tu país o de tu clínica.** Su privacidad avisa de que la información puede almacenarse fuera de tu país de residencia. La nuestra la decides tú al elegir dónde instalas.
- **Creces por encima de los escalones.** Seis profesionales o dos sedes ya te mueven de plan allí, y aquí no mueven nada.
- **Quieres integrar sin abrir una negociación.** La API es REST, está documentada con OpenAPI y viene incluida. En dentalcore.app no encontramos documentación de API publicada el 20 de agosto de 2026.
- **Quieres poder auditar el código** que guarda historias clínicas de pacientes reales. Está publicado.
- **Facturas en España.** Verifactu va dentro y no como producto aparte.

![Listado de facturas de Dentalpin con los estados emitida, pagada, pago parcial, vencida y borrador](/screenshots/invoices.png)

*El listado de facturas, con el estado de cobro de cada una y lo que queda pendiente.*

## Cómo sería migrar

DentalCore da 30 días para exportar tras cancelar, así que el punto de partida existe y tiene fecha de caducidad. Empieza la exportación antes de dar de baja nada, no después. Del lado de acá, el módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito:

1. **Subes el fichero** y el sistema lo valida antes de tocar nada.
2. **Ves un preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
3. **Revisas las propuestas**: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y decides fila a fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
4. **Ejecutas**, y la importación corre respetando tus decisiones.

> **El paso 3 es donde fallan casi todas las migraciones.** Dos clínicas nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después.

## Lo honesto

Si tu consulta está en Argentina, DentalCore resuelve dos problemas concretos que nosotros no resolvemos: la factura fiscal de ARCA y la liquidación a obras sociales. Eso no se compensa con una licencia abierta, y pretender lo contrario sería venderte mal el software y peor la contabilidad.

Dentalpin es la apuesta contraria: que el software de tu clínica no debería ser una caja negra alquilada, y que el acceso a una historia clínica no debería depender de un recibo domiciliado. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 20 de agosto de 2026:

- [DentalCore · portada](https://dentalcore.app/): "El primer CDSS dental de Latinoamérica", 13 motores clínicos, factura electrónica de ARCA con CAE y QR, 20+ convenios precargados, 9 automatizaciones de WhatsApp, asistente de voz Sani, patología oral "Gratis para siempre", dispositivo Sani "Próximamente".
- [Tarifa de DentalCore](https://dentalcore.app/pricing): planes Starter, Pro, Premium y Enterprise, precios en dólares, límites de profesionales, sedes y almacenamiento, prueba de 15 días sin tarjeta, cobro en moneda local.
- [Funcionalidades de DentalCore](https://dentalcore.app/features): catálogo de módulos clínicos, obras sociales con autocálculo y facturación por lotes, portal del paciente, inventario, cuatro roles de usuario con registro de auditoría, Odontolatam.
- [Sobre DentalCore](https://dentalcore.app/about): Alfredo Di Tullio (M.N. 40.973), desarrollo desde 2023, primera versión en 2025.
- [Términos y condiciones de DentalCore](https://dentalcore.app/terms): responsable y encargado del tratamiento, 30 días para exportar tras la cancelación y posible eliminación posterior, disponibilidad sin garantía del 100%, ley argentina.
- [Política de privacidad de DentalCore](https://dentalcore.app/privacy): servidores de Supabase/AWS, posible almacenamiento fuera del país de residencia, cifrado en tránsito y en reposo, copias automáticas, Ley 25.326.
- [Política de devoluciones de DentalCore](https://dentalcore.app/refunds): garantía de devolución del 100% dentro de los 14 días, renovación automática, cancelación desde el panel.
- [Blog de DentalCore · benchmark 2026](https://dentalcore.app/blog/benchmark-software-dental-latinoamerica-2026): "arrancó comercialmente en 2025" y "Nosotros estamos arrancando la curva".
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de DentalCore.
