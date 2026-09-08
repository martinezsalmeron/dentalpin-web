---
title: "Dentalpin frente a Dendoo: tarifa publicada, contrato publicado y una cosa que falta"
description: "Comparativa entre Dendoo, software dental en la nube con tarifa y contrato públicos, y Dentalpin, open source y autoalojable. Con precios, fuentes y fechas."
pubDate: 2026-09-08
tags: [comparativa, dendoo, software-dental]
---

Dendoo publica más que casi cualquier competidor español: la tarifa completa con sus extras, el contrato entero con su SLA y un centro de ayuda con guías paso a paso. Eso merece reconocerse antes que nada. Lo que no publica en ninguna página consultada es quién firma ese contrato.

Hacemos Dentalpin, así que no somos neutrales. Exactos sí podemos ser.

> **Cómo está hecha esta comparativa.** Todo lo que se afirma aquí sobre Dendoo sale de páginas que publica Dendoo en `dendoo.es`, con enlace y fecha al final. Ningún blog agregador: se contradicen entre sí y algunos los escriben competidores. Y hay una sección entera sobre cuándo Dendoo es la mejor opción, porque la hay.

## En treinta segundos

**Dendoo** es un programa de gestión dental en la nube que se abre en el navegador y no pide servidor, ni instalación, ni informático. Publica tres planes con sus precios, cobra sin permanencia y mantiene un plan gratuito limitado indefinido. Para una consulta de un sillón que quiere empezar el lunes, eso resuelve el problema entero.

**Dentalpin** es open source y solo dental. El código está publicado, no hay licencia por sillón ni por profesional, y el servidor está a nombre de tu clínica. A cambio somos de 2026, no tenemos control horario del personal ni un teléfono de soporte, y alguien tiene que ocuparse de ese servidor.

La pregunta que decide no es el precio, porque los dos son baratos. Es cuánto te importa saber con qué empresa estás contratando la custodia de tus historias clínicas.

![Pantalla de inicio de Dentalpin: citas de hoy, quién está en clínica, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La pantalla de inicio de Dentalpin, con los datos de demostración que trae la instalación.*

## Qué es Dendoo

Un SaaS dental accesible desde navegador en ordenador o tableta. Su propia página lo resume sin adornos: "basta un navegador en ordenador o tableta y tu usuario para empezar".

El producto cubre agenda interactiva en tiempo real, ficha de paciente con historial médico, odontograma, periodontograma y ficha de ortodoncia (incluida la miofuncional), planes de tratamiento, pagos y cuotas, facturación con envío automático al paciente, órdenes de laboratorio, roles y permisos, y control horario y vacaciones del personal.

En informes publican una lista larga: pagos y descuentos, cálculo automático de salarios de los doctores, servicios prestados por paciente, diagnósticos por grupos, número de visitas y un informe de morosos.

También publican lo que no hacen, y eso es raro y honesto: su propia página dice que el producto "no incluye inventario ni app móvil".

> **Dendoo publica su tarifa dos veces y no coinciden.** La página de planes fija Agenda en 19 €/mes, Pro en 25 €/mes y Clínica en 59 €/mes + IVA. La sección de preguntas frecuentes de la portada, bajo "¿Qué planes de pago existen?", dice "Plan Pro: 20 €/mes + IVA (1 usuario). Plan Clínica: 50 €/mes + IVA (10 usuarios, 120 GB)", y no menciona el plan Agenda. Antes de firmar, pide por escrito cuál de las dos rige.

Sobre el IVA, el contrato zanja lo que la tabla deja a medias: en la página de planes el rótulo "+ IVA" solo acompaña al plan Clínica, pero la cláusula 4.2 dice que "Todos los precios se muestran sin IVA, salvo mención expresa".

Lo que la tabla de planes no cuenta es dónde crece la factura:

- **WhatsApp no entra en ningún plan.** Aparece como "Opcional" en los tres y cuesta 19 €/mes + IVA por canal conectado. Sobre el plan Pro, eso casi duplica la cuota.
- **Los usuarios adicionales se pagan aparte**, 15 €/mes + IVA en Pro y 10 €/mes + IVA en Clínica.
- **Los informes financieros no están en el plan Agenda.** Ese plan trae ficha clínica "Básica" y tope de 500 pacientes.
- **La configuración recurrente y la formación se facturan a 60 €/hora + IVA.** La puesta en marcha inicial básica sí va incluida en los planes de pago, y la corrección de errores entra en el soporte.
- **Las integraciones y la API están "disponibles bajo solicitud en planes de pago"**, con un coste que "se acuerda según el alcance del proyecto". No hay documentación pública de esa API en las páginas consultadas.

El plan gratuito es real y conviene decirlo con precisión: tras el mes de prueba, la cuenta puede pasar a modo gratuito limitado con 1 usuario, 10 GB, hasta 500 pacientes y funciones básicas, sin WhatsApp, sin pagos avanzados, sin facturación avanzada, sin informes financieros y sin soporte operativo.

En seguridad publican AWS, TLS 1.2, cifrado AES 256, copias diarias, autenticación por correo o teléfono y restricción por IP, con los datos en "dos centros AWS europeos". El contrato lo confirma en la cláusula 16.6 como "alojamiento en infraestructura segura dentro del Espacio Económico Europeo", sin nombrar región ni país.

### Lo que el contrato dice y la portada no

El contrato completo está publicado en la página de registro, con veintitrés cláusulas. Es más de lo que publica la mayoría del mercado, y por eso mismo se puede leer.

La cláusula 1.1 define al proveedor así, literalmente: "La entidad que ostenta la marca Dendoo y concede al Usuario el derecho a utilizar el Software bajo las condiciones de este Contrato (por ejemplo: Dendoo S.L. o simplemente 'Dendoo' sin especificar más detalles)".

> **El contrato no identifica a la empresa con la que contratas.** Nombra "Dendoo S.L." como ejemplo, no como parte. En las páginas consultadas no hay aviso legal (`dendoo.es/aviso-legal` devuelve un 404), ni CIF, ni denominación social, ni registro mercantil. Lo único que consta es una dirección postal en la política de privacidad, Calle Anna Frank 8, 3C, 28052 Madrid, y un correo, `info@dendoo.es`. Esto no es asesoramiento legal, y no dice nada sobre la calidad del producto, pero es un dato que querrás resolver antes de firmar un encargo de tratamiento del artículo 28 del RGPD.

Otras cosas que solo están en el contrato:

1. **La disponibilidad comprometida es del 99,5% mensual** (cláusula 17.1), no el "99,9% de disponibilidad" que anuncia la portada. Si baja de ahí, la cláusula 17.3 da un crédito de servicio de hasta el 50% de la cuota del mes.
2. **La prueba dura 30 días naturales** y, si no contratas, el acceso se limita o desactiva "sin necesidad de aviso adicional".
3. **Tienes 30 días para descargar tus datos** tras la baja o el bloqueo, "p. ej. en formato CSV" (cláusula 5.3). Pasado ese plazo pueden borrarlos.
4. **No hay reembolsos** del período ya abonado (cláusula 4.4), y la baja voluntaria se pide por correo, con desactivación en hasta 30 días.
5. **Se paga por transferencia o domiciliación**, mensualmente por adelantado. En las páginas consultadas no se ofrece pago con tarjeta.
6. **La ley aplicable es la española** y el fuero es el de los juzgados de Madrid (cláusula 12.2), lo que sí ata el contrato a España aunque la entidad no aparezca.
7. **El servicio es solo para profesionales.** La cláusula 1.2 excluye expresamente la contratación por consumidores.

Y una ausencia que en España pesa: **la palabra Verifactu no aparece en ninguna de las páginas consultadas**, ni en la portada, ni en la de planes, ni en el contrato, ni en los índices del blog y del centro de ayuda. Facturación tienen, y bien descrita. Si Verifactu es tu problema de este año, pregúntaselo directamente y pide la respuesta por escrito. Nosotros lo contamos en [Verifactu para clínicas dentales](/es/blog/verifactu-clinicas-dentales/).

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras (tu servidor, el proveedor cloud que elijas) y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, recalls, trabajos de laboratorio, almacén e informes. Verifactu va dentro, no como producto aparte. Y hay API documentada y un asistente de IA que ejecuta tareas sobre tus datos respetando los permisos de cada usuario.

Somos de 2026 y se nota. Volvemos a ello.

![Periodontograma de Dentalpin con los seis puntos de sondaje por diente](/screenshots/periodontogram.png)

*El periodontograma, con los seis puntos de sondaje por diente.*

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | Dendoo | Dentalpin |
|---|---|---|
| Modelo | Licencia de uso SaaS | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | ✓ Navegador, sin servidor propio | ~ Tu servidor, tu proveedor, o local |
| Precio publicado | ✓ 19, 25 y 59 €/mes + IVA | ✓ 0 €, todo incluido |
| Coherencia de la tarifa | ✗ Dos cifras distintas por plan | ✓ Una sola |
| Plan gratuito | ~ Limitado: 1 usuario, 500 pacientes | ✓ Completo |
| WhatsApp | ✗ 19 €/mes + IVA por canal | ✓ Incluido |
| Control horario del personal | ✓ Con vacaciones e informes | ✗ No lo tenemos |
| Almacén e inventario | ✗ "No incluye inventario" | ✓ Incluido |
| Verifactu | ✗ No aparece en las páginas consultadas | ✓ Módulo incluido |
| SLA publicado | ✓ 99,5% con créditos de servicio | ✗ Te lo alojas tú |
| Entidad que contrata | ✗ El contrato no la identifica | ✓ Sin contrato: licencia pública |
| Dónde viven los datos | ~ EEE, sin región nombrada | ✓ Donde tú decidas |
| Código auditable | ✗ No | ✓ Publicado en GitHub |
| API documentada | ~ Bajo solicitud, coste por proyecto | ✓ REST completa, OpenAPI |
| Soporte | ✓ Chat en español e inglés | ✗ Telegram y GitHub |
| Centro de ayuda | ✓ Guías paso a paso publicadas | ~ Documentación técnica |
| Permanencia | ✓ Ninguna | ✓ Ninguna |

Sobre las cifras de implantación conviene ser cuidadoso, porque circulan tres números distintos por la misma web y no miden lo mismo.

**El único dato de implantación publicado son "más de 1000 clínicas en todo el mundo"**, al pie de la página de planes. Los otros dos números de la portada no son clientes: los "más de 120 clientes" son las personas a las que escucharon al diseñar el producto (gerentes, higienistas, contables y pacientes), y las "quince clínicas piloto" son la muestra donde midieron una subida del 12 % en aceptación de presupuestos.

No publican fecha de fundación en ninguna página consultada. La fecha más antigua que aparece es la última actualización de la política de privacidad, 28.10.2024.

## Elige Dendoo si

Y esto va en serio, no es un trámite:

- **No quieres saber nada de servidores.** Abres el navegador y trabajas. Dentalpin se autoaloja y alguien tiene que ocuparse del servidor y de las copias. Esa diferencia es la más grande de esta tabla.
- **Quieres a alguien al otro lado del chat, en español.** Tienen soporte por chat en los tres planes y un centro de ayuda con guías paso a paso. Nosotros tenemos Telegram y GitHub.
- **Necesitas control horario del personal.** Horario laboral por empleado, seguimiento de horas trabajadas, informes y vacaciones. Nosotros no lo tenemos, y no es un módulo que se improvise.
- **Quieres un compromiso de disponibilidad por escrito.** Un SLA del 99,5% con créditos de servicio es más de lo que puede ofrecerte un producto que alojas tú, porque en el nuestro el que responde del servidor eres tú.
- **Tu consulta es pequeña y quieres empezar hoy sin pagar.** El plan gratuito limitado es real, indefinido y suficiente para un profesional con menos de 500 pacientes.
- **Te encaja el cálculo automático de salarios por doctor.** Es una función concreta y bien publicada para clínicas que liquidan a profesionales por producción.

Un producto que publica su contrato entero, su SLA y su tarifa está haciendo algo que la mayoría del mercado español no hace.

![Listado de facturas de Dentalpin con los estados emitida, pagada, pago parcial, vencida y borrador](/screenshots/invoices.png)

*El listado de facturas, con el estado de cobro de cada una y lo que queda pendiente.*

## Elige Dentalpin si

- **Quieres saber con quién contratas.** Aquí no hay contrato de servicio: hay una licencia pública y un repositorio con nombre y apellidos.
- **Te incomoda que tus historias clínicas vivan donde no decides tú.** "Dentro del EEE" es correcto y es más de lo que publican muchos, pero no es lo mismo que tu servidor.
- **Verifactu te corre prisa.** Va dentro, sin producto adicional y sin preguntar.
- **La factura crece con la clínica y no te cuadra.** Diez usuarios, WhatsApp en dos canales y 100 GB extra suman todos los meses. Aquí abrir un gabinete no sube la cuota. Puedes verlo en [precios](/es/precios/).
- **Quieres integrar y automatizar.** Nuestra API está documentada y publicada, no cotizada por proyecto.
- **Quieres poder auditar el código** que guarda historias clínicas. Está publicado.
- **Necesitas almacén dentro del programa.** Ellos dicen que no lo incluyen.

## Cómo sería migrar

El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito:

1. **Exportas desde Dendoo.** Su contrato reconoce el derecho a descargar tus datos "p. ej. en formato CSV" y te da 30 días desde la baja para hacerlo. Sácalo antes de cancelar nada.
2. **Subes el fichero** y el sistema lo valida antes de tocar nada.
3. **Ves un preview** con recuentos y filas de muestra. Todavía no se ha escrito nada.
4. **Revisas las propuestas**: el sistema mapea el catálogo de tratamientos del origen contra el tuyo y tú decides fila a fila (aceptar, revincular, crear nuevo o ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.
5. **Ejecutas**, y la importación corre respetando tus decisiones.

**El paso 4 es donde fallan casi todas las migraciones.** Dos clínicas nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después.

## Lo honesto

Dendoo hace bien lo difícil de este mercado: publica precios, publica el contrato y publica el SLA. Si tu clínica es pequeña, no quiere servidores y quiere empezar esta semana, es una opción sensata y barata, y el plan gratuito te deja probarlo sin riesgo.

Nuestra objeción no es al producto, es a que después de leer la tarifa, el contrato y la política de privacidad sigas sin saber a qué empresa le estás confiando las historias clínicas. Pregúntaselo. Si te dan un CIF y una denominación social, media comparativa se cae.

Dentalpin es la apuesta contraria: que el software de tu clínica no debería ser una caja negra alquilada. Es más joven y se nota. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 8 de septiembre de 2026.

- Dendoo, página de inicio, con las cifras de disponibilidad, seguridad, clientes escuchados, clínicas piloto y las preguntas frecuentes de precio: <https://dendoo.es/>
- Dendoo, planes y precios, con la tabla de los tres planes, los extras, el modo gratuito limitado y la línea de implantación: <https://dendoo.es/planes-precios>
- Dendoo, contrato de licencia y condiciones del servicio, en la página de registro (cláusulas 1.1, 1.2, 4.1, 4.2, 4.3, 4.4, 5.1, 5.3, 12.2, 16.6, 17.1 y 17.3): <https://dendoo.es/empieza>
- Dendoo, política de privacidad, con la dirección postal y la fecha de última actualización de 28.10.2024: <https://dendoo.es/policy>
- Dendoo, funcionalidades para médicos: <https://dendoo.es/funcionalidades-para-medicos>
- Dendoo, centro de ayuda y documentación: <https://help.dendoo.net/es/>
- Dendoo, aviso legal: `https://dendoo.es/aviso-legal` devolvió HTTP 404.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).
- Dentalpin, precios: [/es/precios/](/es/precios/)

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de Dendoo.
</content>
</invoke>
