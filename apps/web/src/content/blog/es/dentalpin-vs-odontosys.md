---
title: "Dentalpin frente a Odontosys: casi 25 años en la nube o tu propio servidor"
description: "Comparativa entre Odontosys, software dental en la nube usado en más de 20 países de habla hispana, y Dentalpin, open source y autoalojable. Con fuentes."
pubDate: 2026-09-09
tags: [comparativa, odontosys, software-dental]
---

Odontosys es de los productos que llevan tanto tiempo funcionando que casi nadie los busca por publicidad: llegan por el colega que lo usa. Empezó hace casi veinticinco años como un encargo entre primos y hoy su web declara más de 400 usuarios activos en más de veinte países de habla hispana.

Nosotros hacemos Dentalpin, así que no somos neutrales. Exactos sí podemos ser.

> **Cómo está hecha esta comparativa.** Todo lo que se afirma aquí sobre Odontosys sale de páginas que publica la propia empresa en `odontosys.com` y de su ficha en Google Play, con enlace y fecha al final. Ningún blog agregador: se contradicen entre sí y algunos los escriben competidores. Y hay una sección entera sobre cuándo Odontosys es la mejor opción, porque la hay.

## En treinta segundos

**Odontosys** es un servicio gestionado, y ahí está su fuerza. Ellos alojan, ellos cifran, ellos hacen dos copias de seguridad diarias fuera de AWS, ellos importan tus datos del programa anterior y ellos contestan al WhatsApp. Si tu clínica no quiere tener nunca una conversación sobre servidores, eso es exactamente lo que estás comprando.

**Dentalpin** es open source y se instala donde tú decidas: sin licencia por sillón, por dentista ni por paciente, con el código publicado y la base de datos en una máquina que controlas.

La pregunta que decide es cuánta infraestructura quieres tener. Si la respuesta es ninguna, ellos ya la tienen montada y nosotros te pedimos un servidor.

![Pantalla de inicio de Dentalpin con las citas de hoy, quién está en clínica, los pagos vencidos y los pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es Odontosys

Software de gestión para clínicas dentales en la nube, con aplicación web y apps para iOS y Android. Cada clínica trabaja en su propio subdominio: su página de eliminación de datos pone como ejemplo `clinica.odontosys.com`.

El origen lo cuentan ellos en su página *Acerca de*: "Odontosys nació hace casi 25 años, cuando un odontólogo le pidió a su primo Fernando Yaquinta, analista de sistemas, un software de gestión a su medida". El bloque de cifras de esa misma página redondea a "25 años de trayectoria", "+400 usuarios activos" y "+20 países", y la propia empresa se describe como "una empresa pequeña que crece de manera continua".

Conviene leer esa cifra con precisión: **son usuarios, no clínicas**. Dos de sus testimonios están firmados por clínicas de Montevideo de doce y diez usuarios, así que un puñado de clínicas medianas ya explica una parte apreciable de los 400.

El catálogo cubre la gestión completa de una clínica dental:

- **Agenda** con confirmación automática de citas por WhatsApp y email, y estados visuales de la cita (confirmada, cancelada, en sala de espera, asistencia).
- **Historia clínica** con "odontograma, periodontograma, notas, procedimientos y anamnesis", más imágenes y radiografías en la ficha de cada paciente.
- **Cuentas y presupuestos**: presupuestos de tratamiento, cuentas de pacientes, planes de pago y registro de cobros. Su ficha de Google Play añade que los cobros y recibos se llevan "en una o varias monedas", que es un detalle que importa en Latinoamérica y que casi nadie más publica.
- **Laboratorio**, con el seguimiento de cada trabajo y aviso automático cuando llega y el paciente no tiene turno.
- **Reportes** de ingresos por mes, profesional o forma de pago, deuda de pacientes, caja diaria y pacientes nuevos, exportables a PDF o CSV.
- **Roles, permisos y auditoría** de quién cambió cada turno, cobro o anotación.

Sobre integraciones, su política de privacidad es concreta: Google Calendar para sincronizar agendas, permiso de envío de correo para que los avisos salgan de tu propia casilla, y la API de WhatsApp Business de Meta para los recordatorios, con la precisión de que "Odontosys no almacena el contenido de las conversaciones: solo registra si el mensaje fue enviado".

### El precio no está publicado, y explican por qué

No hay página de tarifas. `odontosys.com/precios/` y `/planes/` devolvieron un 404 el día de esta consulta. Lo que sí hay es la razón, escrita por ellos en su FAQ.

> **"¿Por qué no publican el precio?"** Su respuesta: "Porque el precio se ajusta a la cantidad de dispositivos que tu clínica necesita conectar, y preferimos darte un número final, sin sorpresas ni cargos extra al momento de poner en marcha el programa". Y añaden: "Pídenos la cotización y la tienes en el día". Es más de lo que publica la mayoría del sector, pero sigue siendo una cotización, no una tarifa: **el coste crece con el número de dispositivos conectados**, y ese es el número que hay que pedir por escrito antes de firmar.

### Dónde viven los datos, y qué pasa cuando te vas

Aquí es donde su documentación legal es mejor que la media del mercado, y hay que decirlo.

La información se aloja en Amazon Web Services, cifrada en tránsito y en reposo ("TLS 1.2+ y AES-256"), con "dos respaldos diarios que se almacenan en servidores externos ubicados en otras zonas geográficas". Las certificaciones que citan (ISO 27001, SOC 2, PCI DSS) son las de AWS como infraestructura, no una certificación propia de Odontosys, y su texto se lee así.

Lo que **no** dicen las páginas consultadas es en qué región de AWS están los datos. Para una clínica española eso es relevante, porque su política de privacidad declara cumplir el RGPD y la Ley N.º 18.331 de Protección de Datos Personales de Uruguay, y el país de alojamiento es una de las preguntas del encargo de tratamiento del artículo 28.

La salida está escrita y es de las más claras que hemos leído en esta serie:

1. **Puedes exportar cuando quieras** a Excel o CSV desde el propio programa, sin pedir permiso.
2. **Si te das de baja, primero te entregan el respaldo.** Su política dice literalmente que "Odontosys nunca eliminará información sin antes entregarle un respaldo completo de sus datos": un comprimido con las bases en `.xlsx` y un enlace privado de Google Drive con las imágenes y radiografías.
3. **Eliges cómo se borra**: suspensión con los datos guardados seis meses y purga irreversible después, o destrucción total en 72 horas hábiles si lo pides expresamente.
4. **Ellos responden en cinco días hábiles** a la solicitud, enviada por correo con el identificador o el subdominio de tu clínica.

Sobre quién es la empresa, hay un hueco que conviene resolver antes de firmar: **en las páginas consultadas no aparece razón social, ni número de registro, ni domicilio fiscal**. No hay aviso legal. Lo que consta es la marca Odontosys, el nombre del fundador, un correo, un WhatsApp uruguayo y la marca hermana Clinicsys en `clinicsys.uy`. Esto no es asesoramiento legal y no dice nada sobre la calidad del producto, pero un encargado de tratamiento se identifica con nombre y CIF en el contrato.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras (tu servidor, el proveedor cloud que elijas) y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma SEPA, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, laboratorio, inventario, recalls e informes. Verifactu incluido como módulo, no como producto aparte. Y un asistente de IA que ejecuta tareas sobre tus datos reales respetando los permisos de cada usuario.

Es mucho más joven. Eso importa y volvemos a ello.

![Ficha de paciente en Dentalpin con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*Ficha de paciente: odontograma, alertas clínicas, plan activo y próxima cita en la misma pantalla.*

## Cara a cara

Solo filas verificables. Donde su web no publica el dato, lo decimos así en vez de suponerlo.

| | Odontosys | Dentalpin |
|---|---|---|
| Modelo | Suscripción, software propietario | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | Nube en AWS, web y apps móviles | Tu servidor, tu proveedor, o local |
| Precio publicado | ✗ No publica tarifas | ✓ 0 €, todo incluido |
| Cómo se calcula el precio | Por dispositivos conectados, en cotización | ✓ No hay cuota, ni por sillón ni por usuario |
| Años en el mercado | ✓ Casi 25 | ✗ Desde 2026 |
| Base instalada publicada | ✓ +400 usuarios en +20 países | ✗ Muy pocas clínicas todavía |
| Apps móviles nativas | ✓ iOS y Android | ✗ Aplicación web, sin apps nativas |
| Copias de seguridad | ✓ Dos diarias, fuera de AWS | ~ Las haces tú: el servidor es tuyo |
| Región de alojamiento | ~ AWS, sin región publicada | ✓ Donde tú decidas |
| Exportar tus datos | ✓ A Excel/CSV cuando quieras | ✓ Acceso directo a PostgreSQL |
| Baja del servicio | ✓ Respaldo entregado antes de borrar | ✓ No hay baja: es tu instalación |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| API documentada | ~ No aparece en las páginas consultadas | ✓ REST completa, OpenAPI |
| Verifactu | ~ No aparece en las páginas consultadas | ✓ Módulo incluido |
| Migración desde tu software | ✓ La hacen ellos | ~ Módulo de importación, la conduces tú |

La fila de Verifactu es la que más pesa si tu clínica está en España, y merece la precisión completa.

> **Verifactu no aparece en ninguna de las páginas de Odontosys que consultamos.** Su FAQ declara que se usa "en más de 20 países de Latinoamérica y España", y sus documentos legales están escritos sobre el RGPD y la ley uruguaya. Ni la portada, ni las características, ni la privacidad, ni la ficha de Google Play mencionan Verifactu ni el Real Decreto 1007/2023. Eso no significa que no lo tengan: significa que no lo publican, y que es la primera pregunta que hay que hacerles si facturas en España, con [las fechas de enero y julio de 2027](/es/blog/verifactu-clinicas-dentales/) delante.

## Elige Odontosys si

Y esto va en serio, no es un trámite:

- **No quieres tener servidor, nunca.** Ellos alojan, cifran, respaldan dos veces al día fuera de AWS y restauran. Con Dentalpin ese trabajo es tuyo o de tu informático, y no desaparece por ser open source.
- **Quieres apps nativas en el móvil.** Publican iOS y Android sincronizadas con la versión web. Nosotros somos una aplicación web que se adapta al móvil, que no es lo mismo.
- **Quieres que la migración la haga otro.** Su FAQ lo dice claro: "nosotros nos encargamos de importar tus datos (siempre que tu software actual permita exportarlos)".
- **Trabajas en Latinoamérica y facturas en varias monedas.** Es una funcionalidad que publican y que en España casi nadie necesita, pero que en una clínica que cobra en dos monedas decide la compra.
- **Valoras hablar con la persona que escribe el programa.** Se describen como empresa pequeña cuyo objetivo es "conocer el nombre de cada uno de nuestros clientes", con el número directo para llamar o escribir por WhatsApp. Eso es difícil de replicar y no se compra con código abierto.

Casi veinticinco años atendiendo clínicas resuelven problemas que un producto de 2026 todavía no sabe que existen.

## Elige Dentalpin si

- **Quieres saber en qué país están las historias clínicas.** En su web no está publicado; en tu servidor lo decides tú.
- **Tienes o contratas perfil técnico.** Entonces el autoalojamiento es una tarde, no un problema.
- **El precio por dispositivo te limita.** Si el coste sube cada vez que enchufas una tablet en un gabinete nuevo, el crecimiento de la clínica se convierte en una negociación anual. Nuestra [página de precios](/es/precios/) es un cero.
- **Facturas en España y necesitas Verifactu con fecha.** Va dentro, sin producto adicional.
- **Quieres integrar y automatizar.** Todo es una API documentada con OpenAPI, no un formulario cerrado.
- **Quieres poder auditar el código** que guarda historias clínicas. Está publicado.

![Informes de Dentalpin con la producción por profesional, los cobros y los pacientes nuevos](/screenshots/reports.png)

*Los informes de la instalación de demostración, con la producción y los cobros del periodo.*

## Cómo sería migrar

Odontosys exporta a Excel y CSV desde el propio programa, así que la parte que más migraciones bloquea, sacar los datos del sistema anterior, aquí no es un problema. Del lado nuestro:

1. **Exportas desde Odontosys** en Excel o CSV, o pides el respaldo completo al darte de baja, que incluye además las imágenes por Google Drive.
2. **Subes el fichero** y el sistema lo valida antes de tocar nada.
3. **Ves un preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
4. **Revisas las propuestas**: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y tú decides fila a fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
5. **Ejecutas**, y la importación corre respetando tus decisiones.

El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y el paso 4 no es un botón único a propósito.

> **Dos clínicas nunca codifican los tratamientos igual.** Una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después, y por eso la revisión fila a fila es obligatoria aunque tarde una tarde.

Las radiografías merecen una nota aparte: van por separado del CSV en cualquier migración, y conviene descargarlas y comprobar que abren antes de cerrar la cuenta antigua.

## Lo honesto

Odontosys hace bien lo que dice que hace, y su documentación de salida es mejor que la de vendedores mucho más grandes: exportación libre, respaldo entregado antes de borrar y dos modalidades de eliminación con plazos escritos. Si tu clínica quiere un servicio gestionado y una persona al otro lado del WhatsApp, es una elección sensata hoy.

Lo que no publican es el precio, la región donde viven los datos, la razón social ni nada sobre Verifactu, y esas cuatro preguntas se responden en un correo antes de firmar. Pídelas por escrito, sea cual sea el proveedor que elijas.

Dentalpin es la apuesta contraria: que el software de tu clínica no debería ser una caja negra alquilada. Es más joven y se nota. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 9 de septiembre de 2026:

- [Odontosys, portada](https://odontosys.com/): descripción del producto, características, testimonios, sección *Acerca de* con las cifras de trayectoria, usuarios y países, y las preguntas frecuentes sobre precio, seguridad, migración y baja del servicio.
- [Odontosys, política de privacidad](https://odontosys.com/privacidad.html) (actualizada en julio de 2026): alojamiento en AWS, cifrado, respaldos, RGPD y Ley N.º 18.331 de Uruguay, rol de encargado del tratamiento, integraciones de Google y WhatsApp.
- [Odontosys, política e instrucciones para la eliminación de datos](https://odontosys.com/eliminacion-de-datos.html) (actualizada en junio de 2026): plazos, entrega obligatoria de respaldo, opciones A y B de eliminación, ejemplo de subdominio.
- [Odontosys en Google Play](https://play.google.com/store/apps/details?id=com.app.odontosys.com) (última actualización 25 de julio de 2026): módulo de laboratorio, cobros en una o varias monedas, roles y auditoría, reportes y exportación.
- Odontosys, tarifas: `odontosys.com/precios/` y `odontosys.com/planes/` devolvieron HTTP 404. El centro de ayuda `help.odontosys.com` devolvió HTTP 403 y no se usó como fuente.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).
- Dentalpin, precios: [/es/precios/](/es/precios/)

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de Odontosys.
