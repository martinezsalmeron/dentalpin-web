---
title: "La API de tu software dental: qué deberías poder hacer con tus propios datos"
description: "Qué tiene que dejarte hacer la API de tu software dental: leer, escribir, recibir avisos y salir. Las preguntas que hacer antes de firmar y cómo probarla."
pubDate: 2026-08-30
tags: [api, integraciones, contratos, exportar-datos, rgpd]
---

Deberías poder leer y escribir desde fuera del programa las cuatro cosas sobre las que gira la clínica: pacientes, citas, presupuestos y facturas. Con tus credenciales, sin pedir permiso a nadie y sin contratar un módulo aparte. Ese es el examen práctico, y casi ningún software dental lo aprueba entero.

La ley te garantiza bastante menos que eso, pero te garantiza algo. Conviene saber qué antes de sentarte a negociar.

## Una API es la segunda puerta del programa

La pantalla es la puerta por la que entran las personas. La API es la puerta por la que entran otros programas, con la misma cerradura y los mismos permisos.

Cuando existe, el formulario de reserva de la web escribe directamente en la agenda y nadie vuelve a teclear nada. Cuando no existe, cada integración se convierte en una persona copiando datos de una pantalla a otra.

![Ficha de un paciente en pantalla con sus datos personales, de contacto y de facturación](/screenshots/patients.png)

*La ficha de un paciente, con los datos personales, de contacto y de facturación en pestañas.*

## Las cuatro cosas que una API debe dejarte hacer

- **Leer.** Sacar la lista de pacientes, las citas de un rango de fechas, los presupuestos aceptados del trimestre. Es lo que alimenta un informe o un panel.
- **Escribir.** Crear una cita, dar de alta un paciente, marcar una factura como cobrada. Sin escritura, la integración sirve para mirar y poco más.
- **Avisarte.** Un webhook es el programa llamando a tu sistema cuando pasa algo, en vez de tu sistema preguntando cada cinco minutos si ha pasado.
- **Dejarte salir.** Una descarga masiva de todo, que no es la API y no la sustituye.

> **Una API no es una copia de seguridad ni es una exportación.** Sirve para mover un dato ahora, no para reconstruir la clínica el día que el servidor no arranca. Si te ofrecen la API como respuesta a "cómo saco mis datos", falta la mitad de la respuesta.

## Lo que la ley te garantiza y lo que no

Aquí hay una confusión que sale cara. El derecho a la portabilidad del RGPD es del paciente, no de la clínica.

El artículo 20.1 dice que el interesado tiene derecho a recibir los datos personales que le incumban "en un formato estructurado, de uso común y lectura mecánica" y a transmitirlos a otro responsable. El 20.2 añade el derecho a que se transmitan de responsable a responsable "cuando sea técnicamente posible". Y el artículo 15.3 obliga a entregar una copia, en formato electrónico de uso común cuando la petición llega por medios electrónicos.

En una clínica dental, la responsable del tratamiento sueles ser tú y tu proveedor de software es el encargado. Es decir: el paciente ejerce ese derecho contra la clínica, y la clínica necesita que el software sepa cumplirlo. La ley no te da, por sí sola, una API contra tu proveedor.

Lo que sí empieza a darte algo es el Reglamento de Datos europeo, el Data Act (Reglamento (UE) 2023/2854), aplicable desde el 12 de septiembre de 2025:

- **Interfaces abiertas y gratuitas.** El artículo 30.2 obliga a los proveedores de servicios de tratamiento de datos a poner interfaces abiertas a disposición de todos sus clientes de forma gratuita, con información suficiente "para permitir el desarrollo de software que se comunique con los servicios".
- **Exportación al cambiar.** El artículo 30.5 obliga a exportar, a petición del cliente, todos los datos exportables en formato estructurado, de uso común y lectura mecánica.
- **Sin cobrar por irte, desde 2027.** El artículo 29.1 prohíbe cualquier cargo por el cambio a partir del 12 de enero de 2027. Entre el 11 de enero de 2024 y esa fecha se permiten cargos reducidos que no superen el coste real.

> **Esas obligaciones son sobre el cambio de proveedor, no sobre tu automatización diaria.** Y aplican a lo que el reglamento llama servicio de tratamiento de datos, que en su artículo 2.8 es esencialmente un servicio en la nube. Si tu software está instalado en un servidor de la clínica bajo licencia, ese capítulo no es tu palanca: tu palanca es el contrato.

Esto no es asesoramiento legal. Las referencias y las fechas de consulta están al final.

## Exportación, API y webhooks resuelven problemas distintos

| | Exportación | API | Webhooks |
|---|---|---|---|
| Para qué sirve | Llevarte todo | Mover un dato ahora | Enterarte de que algo pasó |
| Cada cuánto | ✓ Puntual o mensual | ✓ Continuo | ✓ En el momento |
| Sirve para migrar | ✓ Sí, es su función | ~ Lenta y a trozos | ✗ No |
| Sirve para integrar | ✗ No | ✓ Sí | ✓ Sí |
| Sirve como copia de seguridad | ~ Solo si la guardas fuera | ✗ No | ✗ No |
| Suele estar incluida | ✓ Casi siempre | ~ Según proveedor | ~ Según proveedor |

## Las siete preguntas que hacer antes de firmar

1. **¿Dónde está la documentación y puedo verla ahora, sin firmar nada?** Una URL pública que puedes abrir hoy dice más que cualquier respuesta comercial. Si te mandan un PDF, pregunta de qué año es.
2. **¿Está incluida en la cuota o es un módulo aparte?** Y si es aparte, cuánto cuesta y con qué límite de llamadas. Una API que se paga por uso cambia el diseño de todo lo que construyas encima.
3. **¿Es de solo lectura?** La mitad del valor está en escribir. Una API que solo lee no puede crear la cita que reserva un paciente en tu web.
4. **¿Qué entidades cubre exactamente?** Pacientes, citas, presupuestos, tratamientos, facturas, documentos, odontograma. Pide la lista, no la promesa, y comprueba si la historia clínica está dentro o fuera.
5. **¿Hay webhooks y qué eventos emiten?** Sin ellos, cualquier integración acaba preguntando en bucle, que es la forma más rápida de chocar contra un límite de llamadas.
6. **¿Cuáles son los límites?** Llamadas por minuto, tamaño de página, número de credenciales. Un límite publicado es una buena señal; un límite que nadie sabe decirte es un límite que descubrirás en producción.
7. **¿Qué pasa el día que me voy?** Que la API siga activa durante el preaviso, con acceso completo de lectura, debería estar escrito en el contrato junto a la exportación.

## Cinco cosas que se arreglan solas cuando hay API

- **La web escribe en la agenda.** El paciente reserva, la cita aparece, nadie transcribe nada por la noche.
- **Los números del trimestre para la gestoría.** Un informe que se genera solo el día 1 en lugar de una tarde de exportar y cuadrar a mano.
- **Recordatorios por el canal que ya usas.** Si tu proveedor de mensajería no está integrado, con API lo conectas tú; sin API, esperas a que lo integren ellos.
- **Un panel de KPIs propio.** Ocupación de sillón, aceptación de presupuestos y deuda viva, con tus definiciones y no con las del fabricante.
- **Limpiar duplicados en bloque.** Detectarlos leyendo toda la base es media hora; hacerlo pantalla por pantalla es un mes.

![Agenda del día con las citas repartidas por columnas y franjas horarias](/screenshots/schedule-day.png)

*La agenda en vista de día, con las citas repartidas por columnas y franjas horarias.*

## Cómo probarla en veinte minutos sin ser programador

1. **Pide la URL de la documentación.** Ábrela en el móvil delante del comercial. O carga, o ya sabes algo.
2. **Busca el apartado de autenticación.** Debe explicar cómo se obtiene una credencial sin llamar a soporte.
3. **Pide acceso a un entorno de pruebas.** Nunca hagas la primera prueba contra los datos reales de la clínica.
4. **Copia el ejemplo de la propia documentación.** Casi todas traen una línea lista para pegar en un terminal:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.ejemplo.com/v1/patients
```

5. **Prueba una escritura.** Crear una cita de prueba y verla aparecer en la agenda es el momento en que sabes si la integración es real.
6. **Busca la palabra "límite" en la documentación.** Si no aparece, pregunta por escrito y guarda la respuesta.

Si alguno de estos seis pasos requiere una reunión, eso también es una respuesta.

## Dónde encaja DentalPin

En DentalPin cada funcionalidad expone un endpoint REST documentado con OpenAPI, incluido en el precio y con webhooks, porque el producto se instala en tu servidor y una integración no debería depender de que la autoricemos. Puedes ver qué entra en [precios](/es/precios/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículos 15.3, 20.1 y 20.2: [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679). Consultado el 30 de agosto de 2026.
- Reglamento (UE) 2023/2854 (Data Act), artículos 2.8, 29.1, 29.2, 30.2, 30.5 y 50: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32023R2854). Consultado el 30 de agosto de 2026.
