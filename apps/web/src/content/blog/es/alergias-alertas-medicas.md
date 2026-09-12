---
title: "Alergias y alertas médicas: que se vean siempre"
description: "Seis campos por cada alergia, tres estados posibles cuando no hay ninguna y las pantallas donde la alerta tiene que aparecer sola. Con las fuentes oficiales."
pubDate: 2026-09-12
tags: [alergias, alertas-clinicas, historia-clinica, seguridad-del-paciente, rgpd]
---

Una alergia solo protege al paciente si vive en un campo propio y aparece sola en las pantallas donde se receta y se trata. Por cada una se anotan seis cosas: la sustancia, qué le pasó al paciente, con qué gravedad, si sigue vigente, si está confirmada o solo referida, y cuándo y quién lo contó.

Y cuando no hay ninguna, eso también se escribe. Un campo de alergias en blanco no dice que el paciente no tenga alergias, dice que nadie ha preguntado todavía, y las dos frases llevan a decisiones distintas.

## Seis campos por alergia, y ninguno es texto libre

Una alergia escrita en el cuadro de observaciones se pierde el día que ese cuadro tiene once líneas. Deja de poder filtrarse, deja de poder avisar y deja de poder migrarse a otro programa.

| Campo | Qué se anota | Ejemplo |
|---|---|---|
| Sustancia | El principio activo o el material, nunca solo la marca | Amoxicilina, látex, clorhexidina, níquel |
| Manifestación | Lo que le ocurrió al paciente, en términos clínicos | Urticaria, angioedema, broncoespasmo, anafilaxia |
| Gravedad | Cómo fue la reacción que ya ocurrió | Leve, moderada, grave |
| Criticidad | El daño posible de una exposición futura | Baja, alta, no evaluable |
| Estado clínico | Si la alergia sigue vigente hoy | Activa, inactiva, resuelta |
| Verificación | De dónde sale el dato | No confirmada, confirmada, refutada, error de registro |
| Fecha y origen | Cuándo se registró y quién lo dijo | 12/03/2024, la propia paciente; informe de alergología |

Esos campos no son una convención nuestra. Son los del recurso AllergyIntolerance de HL7 FHIR, el estándar con el que los sistemas sanitarios se intercambian esta información, y usar sus mismos valores es lo que permite que la alergia sobreviva a un cambio de programa.

> **Gravedad y criticidad son dos campos distintos, y confundirlos vacía los dos.** FHIR pone la gravedad en la reacción concreta que se produjo (leve, moderada o grave) y la criticidad en la sustancia, como estimación del daño potencial de una exposición futura. Un programa que solo ofrece un desplegable te obliga a elegir cuál de las dos pierdes.

![Ficha de paciente en la pestaña de información, con el historial médico desplegado y el apartado de alergias mostrando AINEs marcado con criticidad alta](/screenshots/patients.png)

*El historial médico como campos separados: alergias, medicamentos, enfermedades sistémicas y condiciones especiales. La etiqueta naranja junto a la alergia es el nivel de criticidad.*

## Sin alergias conocidas es un dato, no un campo vacío

La guía CG183 del NICE británico sobre alergia a medicamentos pide documentar el estado alérgico del paciente con una de tres opciones: alergia a medicamentos, ninguna conocida, o no se ha podido averiguar. Las tres son información y las tres se registran.

El campo en blanco no es ninguna de las tres. Es la ausencia de la pregunta, y en una clínica con varias personas registrando es imposible distinguirlo de un descuido.

> **Un campo vacío y un "ninguna conocida" se leen casi igual en pantalla y significan cosas opuestas.** El primero dice que nadie ha preguntado. El segundo dice que se preguntó y la respuesta fue que no. Si el programa no los distingue, la clínica no puede saber a quién le falta la anamnesis.

## Alergia, intolerancia y efecto adverso no son lo mismo

La misma guía del NICE pide que el estado alérgico se documente de forma separada de las reacciones adversas a medicamentos, y que sea claramente visible para todo profesional que prescriba. FHIR lo recoge en un campo con dos valores, alergia o intolerancia, que separa el mecanismo inmunológico del que no lo es.

En la práctica la distinción es esta:

- **Alergia.** Hay un mecanismo inmunitario detrás. Urticaria, angioedema, broncoespasmo o anafilaxia tras la exposición.
- **Intolerancia.** El paciente reacciona mal sin que medie ese mecanismo.
- **Efecto adverso.** Un efecto conocido del fármaco. Las náuseas con un antibiótico son el ejemplo de todos los días.

Anotar las tres cosas en la casilla de alergias es cómodo el primer día y caro después, porque retira opciones terapéuticas que el paciente sí tolera y porque diluye las alergias reales entre entradas que no lo son.

## Casi ninguna alergia a la penicilina es alergia a la penicilina

Este es el caso donde la distinción anterior cuesta más dinero y más salud, y hay una cifra oficial para ponerle tamaño.

> **Los CDC lo cuantifican así: un 10 % de los pacientes estadounidenses declaró ser alérgico a la penicilina y, al evaluarlos clínicamente, menos del 1 % lo era.** Los mismos CDC añaden que los anticuerpos IgE específicos pueden disminuir con el tiempo, de modo que hay pacientes que llegan a tolerar más adelante lo que no toleraban antes.

Nada de eso autoriza a una clínica dental a ignorar una alergia declarada. Lo que sí cambia es qué se anota, porque una etiqueta sin historia no se puede revisar nunca.

Si en la ficha consta "alérgico a la penicilina" y nada más, esa etiqueta acompañará al paciente el resto de su vida. Si consta la reacción concreta, el año en que ocurrió y quién lo afirmó, un alergólogo tiene con qué evaluarla y, si procede, retirarla.

## Las alertas que no son alergias

La casilla de alergias es la más conocida, pero la mitad de lo que hay que ver antes de empezar no son alergias.

- **Anticoagulantes y antiagregantes.** Cambian la planificación de cualquier procedimiento sangrante y son medicación, no alergia, así que necesitan su propio campo.
- **Bifosfonatos y denosumab.** Importan por vía oral y por vía intravenosa, y lo que hay que tener a mano es el fármaco, la indicación y desde cuándo.
- **Riesgo de endocarditis infecciosa.** La guía de endocarditis de la Sociedad Europea de Cardiología de 2023 recomienda profilaxis antibiótica en pacientes de alto riesgo antes de los procedimientos dentales de riesgo, y define las dos cosas. Alto riesgo: endocarditis previa, prótesis valvular quirúrgica o transcatéter, material de reparación valvular, cardiopatía congénita (salvo anomalías valvulares aisladas) y dispositivo de asistencia ventricular como terapia de destino. Procedimientos de riesgo: extracciones, cirugía oral y cualquier manipulación de la región gingival o periapical, incluidos el raspado y la endodoncia.
- **Embarazo y lactancia.** Con fecha, porque es la única alerta de esta lista que caduca sola.
- **Diabetes, epilepsia e inmunosupresión.** Cambian la cita, no solo el tratamiento.

Ese tercer punto es el que más a menudo llega tarde, porque el raspado entra en la lista de procedimientos de riesgo y suele agendarse como una limpieza de rutina. La misma guía europea recomienda a estos pacientes limpieza dental profesional y seguimiento al menos dos veces al año, así que son citas frecuentes y la alerta tiene que llegar a la agenda, no solo a la ficha.

## Un dato que hay que ir a buscar no es una alerta

Una alergia bien registrada en una pestaña que nadie abre protege al paciente exactamente igual que no tenerla. Estas son las cuatro pantallas donde tiene que salir sola:

1. **La cabecera de la ficha**, visible antes de entrar en ninguna pestaña.
2. **La pantalla del odontograma**, que es donde se trabaja y donde se decide qué se hace hoy.
3. **La prescripción**, en el momento de elegir el fármaco.
4. **La agenda**, antes de que el paciente entre por la puerta, que es cuando todavía da tiempo a preparar algo.

![Ficha de paciente con las alertas clínicas destacadas en rojo junto al odontograma, el plan de tratamiento activo y la próxima cita](/screenshots/dental-chart.png)

*La alerta clínica fijada en la columna izquierda, al lado del odontograma. No hay que abrir nada para verla y sigue ahí al cambiar de pestaña.*

## Quién la ve y quién la cambia

El RGPD clasifica los datos de salud como categoría especial. Su artículo 9.1 prohíbe tratarlos salvo que se aplique una de las excepciones del 9.2, y el artículo 5.1.c añade el principio de minimización: solo lo adecuado, pertinente y limitado a lo necesario.

Eso no impide que recepción vea una alerta. Sí obliga a decidir qué necesita ver cada rol, y casi nunca es lo mismo:

- **Recepción** necesita saber que esa cita requiere una preparación previa, no el diagnóstico que la motiva.
- **El gabinete** necesita la alerta completa.
- **Todos** necesitan que el cambio quede con fecha, hora y autor, porque el artículo 5.1.f exige medidas técnicas y organizativas apropiadas, y borrar una alergia sin dejar rastro no lo es.

El artículo 5.1.d añade la otra mitad, la que se olvida: los datos deben ser exactos y estar actualizados. Una alergia refutada por una prueba se actualiza, no se deja ahí por si acaso.

## Cómo se mantiene al día

1. **En la primera visita se rellena entera**, incluida la opción de "ninguna conocida" cuando corresponda.
2. **En cada visita se confirma en una línea.** No es repetir la anamnesis, es preguntar si hay medicación o diagnóstico nuevo.
3. **Antes de recetar o de infiltrar se relee.** Es el único momento en el que la alerta puede evitar el daño.
4. **Cuando llega un informe se actualiza la verificación y la fecha**, y se anota de dónde sale.
5. **Al reactivar a un paciente inactivo se revisa entera.** Dos años sin venir son dos años de medicación nueva.

## Dónde ayuda el software y dónde no

Ningún programa hace la anamnesis. Lo que decide el soporte es si la respuesta se puede guardar en un campo con estado, criticidad y fecha o acaba en un párrafo de texto libre, y en qué pantallas vuelve a salir sola sin que nadie se acuerde de mirarla.

Dentalpin guarda alergias, medicación, enfermedades sistémicas y condiciones especiales como campos separados del historial médico, con nivel de criticidad, y muestra las alertas fijas junto al odontograma y en la cabecera de la ficha. Los planes están en [precios](/es/precios/).

Esto no es asesoramiento legal ni una guía clínica. Las guías profesionales aplicables y la norma nacional y autonómica de tu clínica mandan sobre cualquier recomendación general de este artículo.

## Fuentes

- HL7 FHIR R4, recurso AllergyIntolerance (campos type, category, criticality, clinicalStatus, verificationStatus y reaction.severity): <https://hl7.org/fhir/R4/allergyintolerance.html> (consultado el 12 de septiembre de 2026).
- NICE, guía clínica CG183, *Drug allergy: diagnosis and management*, recomendaciones sobre documentación del estado alérgico. Texto completo del National Clinical Guideline Centre: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (consultado el 12 de septiembre de 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (consultado el 12 de septiembre de 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), pp. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (consultado el 12 de septiembre de 2026).
- Reglamento (UE) 2016/679 (RGPD), artículos 5.1.c, 5.1.d, 5.1.f y 9.1. Texto oficial en EUR-Lex: <https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32016R0679> (consultado el 12 de septiembre de 2026).
