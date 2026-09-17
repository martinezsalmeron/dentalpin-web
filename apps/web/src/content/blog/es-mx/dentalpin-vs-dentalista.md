---
title: "Dentalpin frente a DENTALISTA: precio por clínica, odontograma y dónde viven tus datos"
description: "Comparativa entre DENTALISTA, software dental mexicano con precio por clínica, y Dentalpin, open source y gratis. Con precios publicados, fuentes y fechas."
pubDate: 2026-09-17
tags: [comparativa, dentalista, software-dental, mexico]
---

DENTALISTA publica tres cosas que casi nadie publica en este mercado: su tarifa completa en pesos, la razón social que factura y la región donde viven los datos de tus pacientes. Con eso ya está por delante de la mayoría de lo que vas a encontrar buscando software dental en México.

Nosotros hacemos Dentalpin, así que no somos neutrales. Lo que sí podemos ser es exactos.

> **Cómo está hecha esta comparativa.** Todo lo que aquí se afirma sobre DENTALISTA sale de páginas que publica DENTALISTA en dentalista.app, con enlace y fecha al final. Ningún comparador ni ranking de "los diez mejores": se contradicen entre sí y varios los escribe un competidor. Y hay una sección entera sobre cuándo DENTALISTA es la mejor opción, porque la hay.

## En treinta segundos

**DENTALISTA es el producto que entra a trabajar el lunes sin que nadie toque un servidor.** Tu consultorio abre el navegador en su propio subdominio, paga una cuota por clínica sin importar cuántas doctoras tengas, y su aviso de privacidad dice que el sistema se aloja en Amazon Web Services, en su región de México.

**Dentalpin es open source y gratis si lo instalas tú**, sin costo por usuario, por profesional ni por consultorio, con el código publicado y el odontograma, el periodontograma y el inventario adentro desde el primer día. A cambio, alguien tiene que ocuparse del servidor y de los respaldos.

La pregunta que decide no es el precio de entrada. Es si lo que tu consultorio necesita hoy está en el paquete que puedes pagar, y si te importa que el expediente viva en territorio mexicano.

![Pantalla de inicio de Dentalpin con las citas del día, quién está en el consultorio, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La vista del día con los datos del consultorio de demostración que trae la instalación.*

## Qué es DENTALISTA

Un sistema de gestión para clínicas dentales en modalidad de software como servicio. Sus términos identifican al proveedor como GRUPOALISTA, S.A.S. de C.V., RFC GRU171010DR0, con domicilio en la colonia Chapalita de Guadalajara, Jalisco, y teléfono publicado.

Cada clínica es una cuenta con su propio subdominio. Su página de seguridad describe el aislamiento por `clinic_id` con RLS forzado en la base de datos, cifrado en tránsito y en reposo, y respaldos automáticos.

Los módulos que describe su propia página, agrupados en tres paquetes acumulativos:

- **Expediente clínico** conforme a la NOM-004, con bitácora de visitas y firma, en el paquete Lite.
- **Agenda y citas** por doctora, sillón y estado de la cita, también en Lite.
- **Legal y cumplimiento**, con avisos, consentimientos y derechos ARCO de la LFPDPPP, en Lite.
- **Odontograma interactivo** de doble vista, con caras y notas, y **planes de tratamiento con firma y PDF**, desde Pro.
- **Finanzas y cobranza** con ingresos por doctora, abonos y saldos, **recursos humanos** y **permisos granulares**, desde Deluxe.

Su propia página marca tres módulos como **Próximamente**: recordatorios de cita por WhatsApp y SMS, inventario y portal del paciente. Sus términos añaden que lo marcado así "no forma parte de lo contratado y no genera obligación de entrega en una fecha determinada", lo cual es una frase honesta y conviene leerla antes de firmar contando con ellos.

Tres cosas que no aparecen en ninguna de las cinco páginas de su sitio: la palabra periodontograma, cualquier mención de radiografías o imagen, y cualquier documentación de API. Tampoco publican cifra de clientes ni testimonios.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras y no pagas licencia por sillón, por dentista ni por paciente.

Agenda, expediente clínico, odontograma, periodontograma, planes de tratamiento, presupuestos con firma, cobros, recordatorios por WhatsApp, inventario, órdenes de laboratorio e informes. Todos los módulos entran en la misma instalación, sin paquete que los separe. Y un copiloto de IA que ejecuta operaciones sobre tus datos reales respetando los permisos de cada usuario.

Nosotros tampoco timbramos CFDI ante el SAT, y conviene decirlo en la misma frase que ellos: en México la facturación electrónica sigue saliendo del sistema que ya uses para eso.

![Expediente del paciente en Dentalpin con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*El expediente del paciente con el odontograma, las alertas clínicas y el plan de tratamiento en la misma pantalla.*

## Lo que cuesta cada uno

DENTALISTA publica tres paquetes, todos en pesos y todos por clínica, sin cobro por usuario. Su página de precios los publica sin IVA, y sus términos precisan que al importe se le suma el 16 por ciento. La tercera columna es esa suma, hecha por nosotros sobre sus cifras.

| Paquete de DENTALISTA | Al mes, sin IVA | Con IVA | Lo que suma |
|---|---|---|---|
| Lite | $599 | $694.84 | Expediente, agenda, bitácora y cumplimiento |
| Pro | $999 | $1,158.84 | Odontograma y planes de tratamiento con firma |
| Deluxe | $1,299 | $1,506.84 | Finanzas, recursos humanos y permisos granulares |

> **El dato que decide no es el precio de entrada, es en qué paquete aparece el odontograma.** Según la propia tabla de DENTALISTA, Lite incluye expediente, agenda y cumplimiento; el odontograma interactivo y los planes de tratamiento con firma entran desde Pro. Un consultorio que quiera odontograma empieza en $999 más IVA al mes, no en $599.

Pagando por año descuentan el 10 por ciento en cualquiera de los tres paquetes, cobrado por adelantado por los doce meses. La migración de tus historiales, en papel o desde otro sistema, es un servicio aparte que cotizan por volumen y cuyo precio no está publicado.

Del lado nuestro, el núcleo autoalojado es $0 MXN y así se queda. Si prefieres no tocar el servidor, el plan Gestionado son $899 MXN al mes más una puesta en marcha de $4,900, y el servidor lo contratas tú directo al proveedor por unos $300 a $350 al mes. La [página de precios](/es-mx/precios/) trae el desglose completo.

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | DENTALISTA | Dentalpin |
|---|---|---|
| Modelo | Suscripción SaaS | Open source (BSL 1.1, Apache 2.0 a los cuatro años) |
| Despliegue | ✓ Navegador, con tu propio subdominio | ~ Tu servidor, o gestionado por nosotros |
| Precio publicado | ✓ $599 a $1,299 MXN al mes, más IVA | ✓ $0 MXN autoalojado |
| Unidad de cobro | ✓ Por clínica, sin cobro por usuario | ✓ Por instalación, sin cobro por usuario |
| Odontograma | ~ Desde el paquete Pro | ✓ Incluido |
| Periodontograma | ✗ No aparece en las páginas consultadas | ✓ Incluido |
| Recordatorios por WhatsApp | ✗ Marcado como próximamente | ✓ Funcionando |
| Inventario | ✗ Marcado como próximamente | ✓ Incluido |
| Portal del paciente | ✗ Marcado como próximamente | ✓ Incluido |
| Varias sucursales | ✗ Una cuenta por sucursal, sin reportes consolidados | ✓ Una instalación puede alojar varios consultorios |
| Timbrado de CFDI | ✗ No timbra | ✗ No timbra |
| Dónde viven los datos | ✓ AWS, región de México | ~ Donde tú decidas; en Gestionado, Ashburn, Estados Unidos |
| Exportar tus datos al salir | ✓ Incluida en todos los paquetes, sin costo | ✓ Copia completa de PostgreSQL |
| Permanencia | ✓ Ninguna, cancelas desde el sistema | ✓ Ninguna |
| Tiempos de respuesta comprometidos | ✓ 72, 48 o 24 horas hábiles según paquete | ~ Por contrato solo en el plan Gestionado |
| Razón social y domicilio publicados | ✓ GRUPOALISTA, S.A.S. de C.V., Guadalajara | ✓ Publicados |
| Código auditable | ✗ No publicado | ✓ En GitHub |
| API documentada | ✗ No aparece en las páginas consultadas | ✓ REST con OpenAPI |
| Clientes declarados | ✗ No publica cifras | ✗ Muy pocos todavía |

Sobre dónde viven los datos conviene la precisión, porque en un expediente clínico es la pregunta seria.

> **El "tus datos aquí México" de su portada se sostiene, y es una fila que ganan ellos.** Su aviso de privacidad nombra a Amazon Web Services como encargado de la infraestructura "en su región de México", y sitúa fuera del país solo el procesador de pagos (Stripe) y el correo transaccional (Resend). Nuestro plan Gestionado corre hoy en Ashburn, Estados Unidos, y lo decimos en nuestra propia página de precios. Autoalojando eliges tú, México incluido.

## Una nota sobre la norma que citan

Su apartado de preguntas frecuentes dice que el expediente electrónico no es obligatorio para consultorios privados, que la NOM-004-SSA3-2012 lo permite de manera optativa, y que la obligación de conservarlo cinco años viene de la NOM-013-SSA2-2015.

Las dos reglas están en la NOM-004, no repartidas. El texto publicado en el DOF pone la conservación mínima de cinco años desde el último acto médico en su numeral 5.4, y el carácter optativo de los medios electrónicos en el 5.12. Sus propios términos y su aviso de privacidad citan la NOM-004 para ese mismo deber de conservación, así que la referencia a la NOM-013 aparece solo en las preguntas frecuentes.

No cambia nada de su producto ni del plazo que te aplica, que son cinco años en cualquier caso. Si quieres el detalle de lo que la norma pide dentro del expediente, está en [Expediente clínico dental en México](/es-mx/blog/expediente-clinico-dental-nom-004/).

## Elige DENTALISTA si

Y esto va en serio, no es un trámite:

- **No quieres administrar un servidor.** Es la razón número uno y no tiene vuelta. Abres el navegador y trabajas. Dentalpin se autoaloja, y alguien tiene que ocuparse de la máquina, de las actualizaciones y de los respaldos.
- **Quieres que el expediente viva en México y que el proveedor lo ponga por escrito.** Su aviso de privacidad nombra la región mexicana de AWS. Nuestro plan Gestionado no está hoy en México, y no vamos a disimularlo.
- **Quieres proveedor con RFC, domicilio, teléfono y tribunales en México.** Sus términos identifican a GRUPOALISTA, S.A.S. de C.V., RFC GRU171010DR0, y someten cualquier controversia a los tribunales de Guadalajara. Publicar la razón social que factura no es lo habitual en este mercado.
- **Quieres saber cuándo te van a contestar.** Comprometen la primera respuesta en 72, 48 o 24 horas hábiles según el paquete, y aclaran que es tiempo de primer contacto y no de solución. Esa distinción, escrita, vale más que un "soporte premium" sin número.
- **Quieres poder irte sin pelear.** La exportación del padrón y del expediente completo está en todos los paquetes y sin costo adicional, y conservas treinta días naturales de acceso tras el fin del periodo pagado para llevártelo todo.
- **Quieres un consultorio de una o dos doctoras funcionando esta semana.** Cuota por clínica, sin permanencia, alta guiada en cuatro pasos, demo de 60 minutos con datos de ejemplo y, según sus términos, una prueba de 5 días con acceso completo y sin tarjeta.

Y una cosa más que dice algo bueno de cómo escriben su web: marcan como "próximamente" lo que no existe todavía, y sus términos dicen que eso no genera obligación de entrega. Es lo contrario de vender un roadmap como si fuera producto.

## Elige Dentalpin si

- **Haces periodoncia.** El periodontograma no aparece en ninguna página de su sitio. Aquí entra en la instalación, con el sondaje de seis puntos por diente.
- **Necesitas hoy los recordatorios, el inventario o el portal del paciente.** Los tres están marcados como próximamente en su web, sin fecha. Los tres funcionan en la nuestra.
- **Tienes más de un consultorio.** Sus preguntas frecuentes dicen que cada clínica es una cuenta y que todavía no hay reportes consolidados entre sucursales. Una instalación nuestra aloja varios consultorios y los reporta juntos.
- **No quieres que el odontograma dependa del paquete.** Ahí van todos los módulos en la misma instalación, sin subir de nivel.
- **Quieres auditar el código** que guarda expedientes clínicos. Está publicado en GitHub.
- **Quieres integrar y automatizar.** Hay una API REST documentada con OpenAPI, no un formulario cerrado.

![Periodontograma con el sondaje de seis puntos por diente](/screenshots/periodontogram.png)

*El periodontograma, con los seis puntos de sondaje por diente.*

## Cómo sería migrar

El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y a propósito no es un botón único:

1. **Subes el archivo** y el sistema lo valida antes de tocar nada.
2. **Ves una vista previa** con conteos y filas de muestra. Todavía no se escribió nada.
3. **Revisas las propuestas**: el sistema compara el catálogo de tratamientos de origen contra el tuyo y tú decides fila por fila, aceptar, revincular, crear nuevo o ignorar.
4. **Ejecutas**, y la importación corre respetando tus decisiones.

El paso 3 es donde fallan casi todas las migraciones. Dos consultorios nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce cobros mal registrados que nadie detecta hasta meses después.

Si vas en la otra dirección, la salida de DENTALISTA está escrita y es de las mejores que hemos leído en este mercado. Sus términos dicen que el expediente es propiedad de la clínica, que la exportación del padrón y del expediente completo está en todos los paquetes sin costo, y que los expedientes clínicos no se borran por falta de pago porque el deber de conservación de la clínica no se extingue por dejar de pagar.

## Lo honesto

Para un consultorio mexicano de una o dos doctoras que hoy trabaja en papel y WhatsApp, y que sobre todo quiere ordenar agenda, expediente y cobranza, DENTALISTA resuelve el problema con menos fricción que nosotros. Entras desde el navegador, la tarifa está publicada en pesos, el contrato está escrito con claridad poco común y el expediente se queda en territorio mexicano.

Dentalpin es la apuesta contraria: que el software del consultorio no debería ser una caja negra rentada, que todos los módulos deberían venir dentro y que el expediente de tus pacientes debería vivir donde tú decidas. Es más joven y se nota. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada o [levantarlo en tu servidor en tres minutos](/es-mx/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

Ninguno de los dos timbra CFDI, así que en las dos opciones la facturación electrónica sigue saliendo de tu sistema actual. Si quieres el detalle de lo que exige, está en [CFDI 4.0 en el consultorio dental](/es-mx/blog/cfdi-consultorio-dental/).

## Fuentes

Todas consultadas el 17 de septiembre de 2026:

- [DENTALISTA](https://dentalista.app/): módulos por paquete, los tres marcados como próximamente, aislamiento por clínica con RLS, alta en cuatro pasos, tiempos de respuesta por paquete y preguntas frecuentes sobre permanencia, usuarios, CFDI, sucursales y expediente electrónico.
- [Precios y paquetes · DENTALISTA](https://dentalista.app/precios/): Lite $599, Pro $999 y Deluxe $1,299 MXN al mes por clínica, IVA no incluido; 10 por ciento de descuento anual; contenido de cada paquete; migración, automatizaciones e integraciones a cotizar; demo de 60 minutos.
- [Términos y Condiciones · DENTALISTA](https://dentalista.app/legal/terminos/): GRUPOALISTA, S.A.S. de C.V., RFC GRU171010DR0; IVA del 16 por ciento sobre los precios publicados; prueba de 5 días sin tarjeta; módulos próximamente sin obligación de entrega; propiedad de los datos de pacientes y papel de encargado; exportación sin costo y 30 días de acceso tras cancelar; tiempos de primera respuesta; tribunales de Guadalajara. Última actualización que declara la página: 1 de septiembre de 2026.
- [Aviso de Privacidad · DENTALISTA](https://dentalista.app/legal/privacidad/): Amazon Web Services en su región de México para la infraestructura, Stripe en Estados Unidos e Irlanda, Resend en Estados Unidos; conservación del expediente tras la cancelación; derechos ARCO. Última actualización que declara la página: 1 de septiembre de 2026.
- [Cancelación y Reembolsos · DENTALISTA](https://dentalista.app/legal/reembolsos/): sin permanencia, la cancelación surte efecto al final del periodo pagado, sin reembolso proporcional, reembolso íntegro de cobros duplicados o erróneos. Última actualización que declara la página: 1 de septiembre de 2026.
- [NOM-004-SSA3-2012, Del expediente clínico](https://sidof.segob.gob.mx/notas/docFuente/5272787), publicada en el DOF el 15 de octubre de 2012: numeral 5.4, conservación mínima de cinco años desde el último acto médico; numeral 5.12, uso optativo de medios electrónicos.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de DENTALISTA.
