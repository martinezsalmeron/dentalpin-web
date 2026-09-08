---
title: "IA en la clínica dental: qué es real hoy"
description: "Qué hace de verdad la IA en una clínica dental, qué está regulado como producto sanitario y cómo comprobar en diez minutos si lo que te venden lo es."
pubDate: 2026-09-08
tags: [ia, radiologia, producto-sanitario, normativa]
---

Hoy funcionan tres cosas: marcar hallazgos en una radiografía como segunda lectura, convertir voz y papeleo en texto, y ordenar a quién hay que llamar. Nada más. Ningún sistema autorizado diagnostica solo, y el software que señala una caries en una radiografía no es una función más del programa de gestión: es un producto sanitario con marcado CE y número de organismo notificado.

Esa es la línea que separa lo real de lo que se promete en una feria. Y lo mejor de esa línea es que la puedes comprobar tú, sin saber nada de modelos.

## La única pregunta que ordena el mercado

Si una función usa datos del paciente para informar una decisión de diagnóstico o de tratamiento, es un producto sanitario y está regulada. Si no, no lo está.

No es una interpretación. El anexo VIII del Reglamento (UE) 2017/745 lo dice en la regla 11: "Los programas informáticos destinados a proporcionar información que se utiliza para tomar decisiones con fines terapéuticos o de diagnóstico se clasifican en la clase IIa", y suben a IIb o III según el daño que pueda causar esa decisión. La misma regla cierra con "Todos los demás programas informáticos se clasifican en la clase I".

Esa clase decide quién lo revisa. El artículo 52.7 deja que el fabricante de clase I declare la conformidad por sí mismo, mientras que el artículo 52.6 manda a los de clase IIa a los anexos IX u XI, donde interviene un organismo notificado.

> **El marcado CE de un producto sanitario lleva número.** El artículo 20.5 del MDR exige que el marcado vaya seguido del número de identificación del organismo notificado, y añade que ese número "figurará también en todo material publicitario que mencione que un producto cumple los requisitos de marcado CE". Si la web dice "certificado CE" y no hay cuatro dígitos por ninguna parte, falta la mitad de la frase.

![Ficha de un paciente con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*El sitio donde tiene que acabar un hallazgo para que cuente. Una marca en un visor que no llega a la historia clínica no ha pasado.*

## Lo que sí funciona hoy

Tres familias, y solo la primera está regulada.

- **Lectura asistida de radiografías.** Software que marca radiolucideces compatibles con caries, pérdida ósea o lesiones periapicales en una periapical o una aleta de mordida. Funciona como segunda lectura simultánea, no como sustituto de la tuya.
- **Dictado y transcripción.** Pasar la nota de la visita de voz a texto, o extraer los datos de un documento que llega escaneado. No informa un diagnóstico por sí solo, así que no es producto sanitario, pero sí manda audio con datos de salud a algún sitio.
- **Priorización administrativa.** Ordenar la lista de recall, señalar los presupuestos que llevan tres semanas sin respuesta, estimar qué huecos de mañana tienen más riesgo de ausencia. Es un criterio de gestión, y ahí la IA aporta orden, no juicio clínico.

Lo interesante es que las dos últimas familias, que son las que más tiempo ahorran de verdad en una clínica pequeña, son también las que nadie enseña en el estand.

## Lo que se promete y no existe

Merece la pena decirlo con la etiqueta oficial delante, porque es más contundente que cualquier opinión.

La FDA autorizó el 27 de marzo de 2023 el software Overjet Caries Assist con el número de expediente K222746, en clase II. Su indicación de uso autorizada dice que es un software "destinado a ayudar a la detección y segmentación de caries en radiografías de aleta de mordida y periapicales", que "proporciona información adicional para que el dentista la use en su diagnóstico", y que "no está destinado a sustituir la revisión completa del dentista ni su juicio clínico".

El mismo expediente publica sus límites, y son los que nadie cuenta:

- **No está validado en dentición temporal ni mixta.** El propio documento dice que "no se ha establecido la seguridad y la eficacia del sistema en dentición primaria o mixta". La población autorizada son pacientes de doce años o más con dentición permanente.
- **Solo lo puede usar un dentista colegiado.** Está en las advertencias, con esas palabras.
- **No es la única herramienta de decisión.** "No debe utilizarse como única herramienta de decisión para el diagnóstico o el tratamiento", literal.
- **Falla donde se solapan los dientes.** Está entrenado para no predecir en zonas de solapamiento marcado, precisamente para no llenarte la radiografía de falsos positivos.

> **Una autorización no es una promesa de acierto, es una descripción de alcance.** Lo que el regulador aprueba es una frase muy concreta sobre qué hace el software y con quién. Pedirle esa frase al proveedor cuesta un correo, y es más informativa que cualquier porcentaje de precisión sin estudio detrás.

## Qué es real y qué no

| Lo que se promete | Estado real | Qué lo respalda |
|---|---|---|
| Marcar caries en una radiografía | ✓ Real, como segunda lectura | Producto sanitario clase IIa, regla 11 |
| Medir hueso para planificar un implante | ✓ Real, como segunda lectura | Misma regla, misma clase |
| Dictar la nota clínica y transcribirla | ✓ Real, sin marcado CE | No informa el diagnóstico por sí solo |
| Ordenar a quién llamar para revisión | ✓ Real, sin marcado CE | Criterio de gestión, no clínico |
| Chatbot que atiende a pacientes en la web | ~ Real, con obligación de avisar | Artículo 50.1 del reglamento de IA |
| Diagnóstico autónomo sin dentista | ✗ No existe hoy | Ninguna autorización cubre eso |
| Plan de tratamiento generado y aceptado solo | ✗ No existe hoy | Sería decisión terapéutica: regla 11 |

## Lo que la norma ya te pide a ti

Aquí hay una confusión que sale cara: casi todo el mundo mira la fecha equivocada.

El Reglamento (UE) 2024/1689, el reglamento de IA, clasifica en su artículo 6.1 como alto riesgo los sistemas que son componentes de seguridad de productos cubiertos por la legislación de su anexo I, y el punto 11 de ese anexo es precisamente el reglamento de productos sanitarios. Las obligaciones del capítulo III para esos sistemas se aplican desde el 2 de agosto de 2028, después de que el Reglamento (UE) 2026/1744 modificara el artículo 113. Para los sistemas de alto riesgo del anexo III la fecha es el 2 de diciembre de 2027.

Pero dos cosas te aplican ya:

1. **Formación del personal, desde el 2 de febrero de 2025.** El artículo 4, en la redacción que le dio el reglamento de 2026, dice que proveedores y responsables del despliegue "adoptarán medidas para apoyar la promoción de la alfabetización en materia de IA" de su personal y de quien se encargue en su nombre del funcionamiento de esos sistemas. No exige un curso concreto: exige que la persona que mira la marca en la radiografía sepa qué está mirando.
2. **Avisar de que es una IA, desde el 2 de agosto de 2026.** El artículo 50.1 obliga a que las personas "estén informadas de que están interactuando con un sistema de IA", salvo cuando resulte evidente. Un chatbot en la web de la clínica que se presenta con nombre de persona entra de lleno.

Y todo lo que salga de la clínica hacia un proveedor de IA sigue siendo dato de salud, con la misma cadena de contratos y bases jurídicas que ya cubre el [RGPD en la clínica dental](/es/blog/rgpd-clinica-dental/).

![Ficha de un paciente con la pestaña de actividad abierta: alertas clínicas, plan activo y una línea de tiempo filtrable por visitas, tratamientos, movimientos económicos y comunicaciones](/screenshots/patient-timeline.png)

*Quién decidió qué y cuándo. Si una sugerencia automática cambia algo del paciente, este es el sitio donde tiene que poder reconstruirse.*

## Cómo comprobar una promesa de IA en diez minutos

1. **Pregunta si esa función concreta es un producto sanitario.** No si "la plataforma" lo es. Un mismo proveedor puede tener un módulo con marcado CE y otras veinte funciones que no lo son.
2. **Busca los cuatro dígitos.** Si dicen marcado CE como producto sanitario, el número del organismo notificado tiene que estar en el material promocional, por el artículo 20.5.
3. **Pide la indicación de uso literal.** Es una frase corta y existe siempre. Léela buscando dos cosas: qué población cubre y si dice que sustituye o que ayuda.
4. **Pregunta por la dentición.** Si tu clínica ve niños y el software está validado solo en dentición permanente, la mitad de tu agenda queda fuera de su alcance.
5. **Pregunta dónde se procesan las imágenes y el audio**, cuánto se conservan y si se usan para entrenar. Que la respuesta esté en el contrato, no en una llamada.
6. **Prueba con veinte radiografías tuyas ya diagnosticadas.** Los falsos positivos se ven en una tarde y son el coste real: cada marca que no es nada se paga en tiempo de sillón y en confianza del equipo.

Si el proveedor no puede contestar a los puntos 1, 2 y 3 por escrito, la conversación no es sobre IA clínica. Es sobre otra cosa.

## Lo que esto significa para el software de gestión

Un programa de gestión no necesita marcado CE, y casi ninguno lo tiene, porque agenda, cobros, recordatorios y consultas no informan un diagnóstico. Lo que sí le puedes exigir es que no te bloquee: que las radiografías se puedan enviar a un lector externo y volver, y que cualquier sugerencia automática quede registrada con quién la aceptó.

En Dentalpin el asistente de IA se mueve solo en esa zona administrativa, revalida los permisos de quien pregunta, pide confirmación antes de escribir y deja cada acción en el registro de auditoría, y deliberadamente no sugiere diagnósticos ni tratamientos. Cómo se despliega, en tu servidor o alojado, está en [precios](/es/precios/).

## Fuentes

- Reglamento (UE) 2017/745 sobre los productos sanitarios, versión consolidada de 9 de julio de 2024: anexo VIII, regla 11 (clasificación del software); artículo 52, apartados 6 y 7 (procedimientos de evaluación de la conformidad); artículo 20.5 (número del organismo notificado). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02017R0745-20240709). Consultado el 8 de septiembre de 2026.
- Reglamento (UE) 2024/1689 (reglamento de IA): artículo 4 (alfabetización), artículo 6.1 y anexo I punto 11 (alto riesgo), artículo 50.1 (transparencia), artículo 113 (fechas de aplicación). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=OJ:L_202401689). Consultado el 8 de septiembre de 2026.
- Reglamento (UE) 2026/1744 de 8 de julio de 2026 (Digital Omnibus on AI), publicado en el DOUE el 24 de julio de 2026 y en vigor desde el 27 de julio de 2026: nueva redacción del artículo 4 y del artículo 113, párrafo tercero, letra c). [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng). Consultado el 8 de septiembre de 2026.
- FDA, expediente 510(k) K222746, Overjet Caries Assist, decisión de 27 de marzo de 2023, 21 CFR 892.2070, clase II, código de producto MYN: carta de autorización, indicación de uso y apartado 9 de advertencias y limitaciones. [accessdata.fda.gov](https://www.accessdata.fda.gov/cdrh_docs/pdf22/K222746.pdf). Consultado el 8 de septiembre de 2026.

Las citas de normas y expedientes están traducidas del texto oficial en la fecha indicada. Esto no es asesoramiento legal: si vas a contratar una herramienta de lectura de imagen, revisa el caso concreto con tu asesoría y con tu colegio.
