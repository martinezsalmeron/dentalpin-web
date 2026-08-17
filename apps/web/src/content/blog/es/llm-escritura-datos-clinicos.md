---
title: "Cómo dar a un LLM acceso de escritura a datos clínicos sin que sea una locura"
description: "El modelo no escribe: propone una operación acotada, tu código revalida permisos y una persona confirma cada cambio. Arquitectura, límites y fuentes."
pubDate: 2026-08-17
tags: [ia, llm, arquitectura, seguridad, rgpd]
---

La respuesta corta es que el modelo no escribe nunca. Propone una llamada a una operación acotada y tipada, tu código vuelve a comprobar los permisos de quien pregunta, y cualquier cosa que cambie datos se detiene a que una persona la confirme. El LLM interpreta la frase; ejecutar es trabajo del backend de siempre.

Lo que sigue es el reparto de responsabilidades que hace eso defendible, qué dice la AEPD sobre agentes que actúan, y por qué el diálogo de confirmación es la parte más fácil de hacer mal.

## Las tres propiedades que un agente no puede reunir a la vez

La AEPD publicó en febrero de 2026 unas orientaciones sobre inteligencia artificial agéntica que recogen la llamada regla de 2, reformulada para agentes de IA. La idea es fijar un umbral de garantías que no hay que cruzar nunca, y se apoya en tres propiedades:

1. **Procesar información no controlada**, es decir, texto que entra en el contexto del modelo y que no ha escrito una persona autorizada.
2. **Acceder a información sensible**, que en una clínica es toda la historia clínica por definición.
3. **Ejecutar acciones automáticas** con efecto dentro o fuera de la organización.

Un agente que reúne las tres no se debe permitir. El documento lo dice caso por caso: si hay posibilidad de tratar información no controlada que pueda activar el acceso a información sensible, "se debe impedir cualquier acción automática sin supervisión humana que tenga efecto dentro o fuera de la organización".

> **Un asistente de clínica tiene las dos primeras propiedades de serie.** Lee texto que escriben pacientes y terceros, y trabaja sobre categorías especiales de datos del artículo 9 del RGPD. La única de las tres que puedes recortar es la tercera, y recortarla significa exactamente esto: ninguna escritura sin una persona delante.

Esa es la decisión de arquitectura, y se toma antes de escribir código. Todo lo demás son consecuencias.

## Escritura significa herramientas, no acceso a la base de datos

Dar acceso de escritura a un modelo no es darle una conexión a PostgreSQL ni un endpoint que acepte SQL. Es publicar un catálogo pequeño de operaciones, cada una con sus parámetros tipados y sus validaciones, las mismas que usa la interfaz.

El recorrido de una frase como "pásame a Marta del martes al jueves a las diez" queda así:

1. **El modelo recibe la frase y el catálogo de herramientas disponibles**, no el esquema de la base de datos.
2. **Devuelve una propuesta**: qué operación quiere llamar y con qué argumentos. Hasta aquí no ha pasado nada, es texto.
3. **El backend valida los argumentos** contra el mismo esquema que valida un formulario, y rechaza lo que no encaje.
4. **Se vuelven a comprobar los permisos** de la persona que ha preguntado, en el punto de ejecución.
5. **Si la operación modifica datos, se para** y se pide confirmación explícita, mostrando qué va a cambiar.
6. **Se ejecuta y se registra**: qué herramienta, con qué argumentos, quién la pidió y quién la confirmó.

El paso 4 es el que la gente se salta. Filtrar las herramientas antes de mandárselas al modelo está bien como ayuda, pero no es un control de acceso: el control tiene que estar en el punto donde la llamada se ejecuta, porque es el único sitio por el que pasan todas.

![Asistente de IA de Dentalpin con la lista de flujos de trabajo disponibles y una conversación abierta](/screenshots/ai-copilot.png)

*El agente propone; el catálogo de la izquierda es todo lo que puede llegar a pedir.*

## El principio de menor privilegio, aplicado al agente y no al usuario

La AEPD es explícita en que el principio básico en un entorno de IA agéntica es el de menor privilegio, y que hay que "restringir la escalada de privilegios y la herencia de identidad". En la práctica eso se traduce en una regla fácil de comprobar: el agente no puede ver ni hacer nada que la persona que pregunta no pudiera hacer desde la pantalla.

- **Sin identidad propia.** El agente actúa con la sesión de quien escribe, no con una cuenta de servicio con permisos amplios. Una cuenta de servicio convierte cualquier fallo del modelo en un acceso total.
- **Aislado por clínica.** El mismo agente sirviendo a varias organizaciones necesita compartimentar la memoria y el contexto, o acaba mezclando datos de tratamientos distintos.
- **Sin herramientas que amplíen el alcance.** Cada herramienta nueva que se publica es superficie de ataque nueva, y el documento de la AEPD señala que incorporar herramientas es la forma indirecta habitual de dar privilegios sin darse cuenta.
- **Nada irreversible.** Borrar, fusionar pacientes o anular una factura emitida no son operaciones para un agente, por mucha confirmación que lleven.

## Un diálogo de confirmación no es supervisión humana

Esta es la parte donde casi todo el mundo cree que ya ha cumplido. La supervisión tiene que ser real, y las autoridades llevan años diciendo qué significa eso.

El artículo 22 del RGPD reconoce el derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado que produzca efectos jurídicos o afecte significativamente a la persona. La AEPD recuerda que la incorporación de un agente "puede implicar automatización, pero no siempre implicará decisiones automatizadas en el sentido del artículo 22", y que cuando las haya, hay que evaluar las condiciones del 22.2, las medidas del 22.3 y los límites del 22.4 para categorías especiales de datos.

La CNIL, en su nota de julio de 2026 sobre IA agéntica, va al fondo del asunto: la sola existencia de una intervención humana a la salida no basta para descartar que la decisión sea automatizada, y recordando la sentencia SCHUFA del Tribunal de Justicia, la intervención humana "doit être réelle, effective et exercer une influence sur la décision finale ; une validation purement formelle ou automatique est insuffisante".

> **Si la persona que confirma no puede decir que no, no está supervisando.** Necesita ver qué va a cambiar, tener tiempo y criterio para negarse, y que negarse no le cueste nada. Un botón que se pulsa cuarenta veces al día sin leer es una firma automática con pasos extra.

Y hay una tentación que la AEPD nombra directamente: "desplazar toda la responsabilidad al usuario o a la supervisión humana". Cuando algo falla es cómodo culpar a quien pulsó el botón, en lugar de al diseño que hizo posible el fallo. Ninguno de los dos roles reemplaza la diligencia de quien decide cómo funciona el sistema.

## Qué autonomía es defendible según lo que toca la acción

| | Consultas de solo lectura | Escrituras con confirmación | Escrituras autónomas |
|---|---|---|---|
| Texto no controlado en el contexto | ✓ Tolerable | ~ Solo con confirmación real | ✗ Reúne las tres propiedades |
| Alcanza datos del artículo 9 | ~ Con menor privilegio | ~ Con menor privilegio | ✗ No defendible |
| Se puede deshacer sin restaurar la base | ✓ Nada que deshacer | ✓ Sí | ✗ Depende de la operación |
| Artículo 22 en juego | ✓ No | ~ Según el efecto sobre el paciente | ✗ Sí, si afecta al paciente |
| A quién señala el registro | Quien preguntó | Quien preguntó y quien confirmó | A nadie |

La última columna no es un caso a resolver mejor, es un caso a no construir mientras las otras dos propiedades sigan ahí.

## El registro tiene que servir para reconstruir la decisión, no solo la escritura

Guardar el `UPDATE` no vale. Lo que hay que poder reconstruir es la cadena entera: qué se pidió, qué propuso el modelo, qué se validó, quién confirmó y qué datos se movieron.

La AEPD lo enmarca como trazabilidad del dato, "la capacidad de conocer todo el ciclo de vida del dato", y añade que supone guardar registros de la información procesada por los procesos de razonamiento, las fuentes accedidas y los servicios empleados. La CNIL pide lo mismo desde el lado del usuario: para cada tarea ejecutada debería poder identificar los datos movilizados, los agentes que intervinieron, los servicios de terceros consultados y su cronología.

![Ficha de paciente en Dentalpin con la pestaña de actividad y la cronología filtrable por visitas, tratamientos y comunicaciones](/screenshots/patient-timeline.png)

*La cronología del paciente es donde un cambio hecho por el agente tiene que aparecer como cualquier otro.*

## Lo que decidimos no darle al modelo

Recortar el alcance resolvió más riesgo que cualquier medida técnica posterior.

- **El texto clínico libre no sale.** Los identificadores del paciente se sustituyen por tokens deterministas antes de salir hacia el proveedor de IA, y las notas clínicas en texto libre se quedan fuera de ese camino.
- **Nada de diagnóstico ni de indicación terapéutica.** Sugerir un tratamiento cambia la categoría del producto y las obligaciones que lleva detrás. Agenda, cobros, recordatorios y consultas no son eso.
- **Ninguna acción proactiva sobre datos.** El resumen que llega cada mañana por email se genera con consultas deterministas, sin LLM y sin datos de paciente saliendo a ningún sitio. Es la lección más útil de todo el proyecto: buena parte de lo que la gente pide a un agente no necesita un modelo.

## Antes de ponerlo en producción

1. **Escribe la lista de operaciones que el agente puede llamar** y justifica cada una. Si no la puedes escribir en una página, es demasiado grande.
2. **Prueba una inyección indirecta**: mete instrucciones en un campo de texto que rellene un paciente y comprueba que el agente no las obedece. La AEPD distingue la inyección directa de la indirecta, que oculta las instrucciones en las fuentes que el agente consulta.
3. **Intenta escalar privilegios**: entra con un usuario limitado y pide algo fuera de su alcance. Si el agente lo hace, el control estaba en el sitio equivocado.
4. **Mira el registro de una conversación completa** y comprueba que un tercero podría reconstruir qué pasó.
5. **Cuenta cuántas confirmaciones al día genera.** Si son muchas, la supervisión se degradará sola, y eso es un problema de diseño, no de la persona.
6. **Documenta qué sale hacia el proveedor de IA**, con qué base jurídica y con qué contrato del artículo 28.

En Dentalpin el agente funciona así: llama a las mismas operaciones que la interfaz, revalida los permisos en el punto de ejecución, tokeniza los datos del paciente antes de que salgan, se detiene a pedir confirmación en cualquier escritura y deja cada llamada en el registro de auditoría. Si quieres verlo con la instancia en tu propio servidor, las condiciones están en [precios](/es/precios/).

## Fuentes

- AEPD, *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2 de febrero de 2026: regla de 2 (pp. 41-43), artículo 22 (pp. 39-40), inyección de prompts (pp. 51-52), trazabilidad (pp. 68-69), gestión de privilegios (pp. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Consultado el 17 de agosto de 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles : équation à inconnues multiples pour les utilisateurs*, julio de 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Consultado el 17 de agosto de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 9, 22, 28 y 32.
- TJUE, asunto C-634/21 (SCHUFA Holding), sentencia de 7 de diciembre de 2023, citada en la nota de la CNIL anterior.

Esto no es asesoramiento legal. Si el sistema toma decisiones que afectan a pacientes, conviene revisar el caso concreto con tu delegado de protección de datos o tu asesoría antes de ponerlo en marcha.
