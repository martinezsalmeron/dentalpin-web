---
title: "Recall dental: cómo traer de vuelta a los pacientes a revisión"
description: "Cómo montar un sistema de recall que funcione: quién decide el intervalo, cómo sale la lista de a quién le toca, qué dice el mensaje y cómo medirlo."
pubDate: 2026-08-21
tags: [recall, revisiones, agenda, fidelizacion]
---

Un sistema de recall son dos cosas: una fecha de próxima revisión guardada en la ficha de cada paciente, y una rutina semanal que saca la lista de quién la tiene vencida y le escribe. Esa fecha no es seis meses por defecto, se decide al final de cada visita según el riesgo de esa persona y se anota con su conformidad. El resto es logística: un canal que se lea, aviso con margen para reorganizarse y un segundo intento para quien no conteste.

Lo que suele fallar no es el mensaje, es que la fecha no está puesta. Sin ese campo relleno no hay lista que sacar, y la clínica acaba repasando fichas a mano el día que alguien se acuerda.

## Seis meses es una costumbre, no una regla

El intervalo de revisión es una decisión clínica por paciente, no una constante para toda la base de datos. La guía CG19 del NICE británico, que es la referencia publicada más explícita que existe sobre esto, lo dice en su primera recomendación: el intervalo se determina específicamente para cada paciente y se ajusta a sus necesidades, a partir de una valoración de su nivel de enfermedad y de su riesgo.

De la misma guía salen tres reglas prácticas más. El intervalo se elige al terminar la revisión o al completar el tratamiento, no cuando el paciente ya se ha marchado. Se anota en la historia clínica junto con si el paciente está de acuerdo o no. Y se vuelve a mirar en cada visita siguiente, para subirlo o bajarlo según cómo haya ido.

| | Menores de 18 años | 18 años o más |
|---|---|---|
| Intervalo más corto | 3 meses | 3 meses |
| Intervalo más largo | 12 meses | 24 meses |
| Valores que se asignan | 3, 6, 9 o 12 meses | 3, 6, 9, 12, 15, 18, 21 o 24 meses |
| Cuándo se decide | Al acabar la revisión o el tratamiento | Al acabar la revisión o el tratamiento |
| Dónde queda | Historia clínica, con la conformidad del paciente | Historia clínica, con la conformidad del paciente |

Es una guía del sistema británico, no una norma española, así que los plazos son una referencia y no una obligación aquí. Lo que sí se traslada entero es la estructura: el intervalo se decide, se justifica, se anota y se revisa.

> **Para adultos, la evidencia no distingue entre citar cada seis meses y citar según riesgo.** Una revisión Cochrane de 2020, sobre dos ensayos y 1.736 participantes, no encontró diferencias relevantes en superficies con caries, sangrado gingival ni calidad de vida oral a cuatro años, ni entre el intervalo según riesgo y el de seis meses (certeza alta) ni comparando 24 meses con cualquiera de los dos. Para niños y adolescentes, la propia revisión dice que la evidencia es incierta.

Eso no es un permiso para dejar de llamar a nadie. Es el argumento para que el intervalo sea un campo con criterio detrás en lugar de una constante. Si el software solo sabe sumar seis meses, está tomando por defecto la decisión que la guía pide tomar paciente a paciente.

## La lista sale de la ficha, no de una hoja aparte

Un recall que vive en una hoja de cálculo se desincroniza el primer mes: alguien pide cita por teléfono, nadie lo tacha, y el aviso siguiente sale igual. La lista tiene que ser una consulta sobre los datos que ya están en la historia clínica.

| Dato | Para qué sirve | Si falta |
|---|---|---|
| Fecha de próxima revisión | Es lo que genera la lista de cada semana | ✗ No hay lista: hay que repasar fichas a mano |
| Intervalo asignado y quién lo puso | Saber si un hueco de nueve meses es criterio clínico o un descuido | ~ Nadie se atreve a tocarlo |
| Motivo de la revisión | Escribir un mensaje concreto en vez de uno genérico | ~ El aviso dice "revisión" y no engancha |
| Canal preferido | Escribir por donde esa persona sí contesta | ✗ Insistes por un canal que pidió no usar |
| Fecha del último aviso de recall | No escribir tres veces en un mes | ✗ Se duplican los avisos y la gente se da de baja |
| Estado del paciente | Sacar de la lista a quien ya no procede | ✗ Escribes a pacientes que se fueron o fallecieron |
| Tratamiento pendiente sin cerrar | Distinguir "toca revisión" de "quedó algo a medias" | ~ Se mezclan dos conversaciones distintas |

- **Pon la fecha antes de que el paciente salga del gabinete.** Es el único momento en que alguien sabe de verdad cuándo tiene que volver esa persona, y es la recomendación explícita de la guía.
- **Guarda el intervalo, no solo la fecha resultante.** Cuando el paciente reprograma, la fecha se mueve; el criterio de doce meses tiene que sobrevivir a ese cambio.
- **Separa "próxima revisión" de "próxima cita".** Un paciente puede tener cita la semana que viene para acabar una endodoncia y la revisión a catorce meses vista. Si es el mismo campo, uno de los dos se pierde.

![Ficha de un paciente con la pestaña de actividad abierta: alertas clínicas, plan activo, próxima cita y el historial de visitas, tratamientos y comunicaciones en orden cronológico](/screenshots/patient-timeline.png)

*La actividad de un paciente en orden, con filtros por visitas, tratamientos y comunicaciones: cuándo vino por última vez y qué se le ha escrito desde entonces.*

## Vencido, y cuánto: son tres listas, no una

Meter en la misma tanda a quien se pasó de fecha hace una semana y a quien no viene desde hace tres años produce un mensaje que no le sirve a ninguno de los dos. El reparto habitual son tres grupos y tres mensajes distintos.

1. **Próximos.** Les toca dentro de dos a cuatro semanas. El mensaje es un aviso amable con una forma de pedir cita, y es el grupo con la mejor respuesta de los tres, porque nadie se ha descolgado todavía.
2. **Vencidos recientes.** Pasaron de fecha hace menos de un intervalo completo. Aquí el mensaje ya menciona cuándo fue la última visita, porque el dato concreto funciona mejor que la fórmula genérica.
3. **Descolgados.** Llevan más de dos intervalos sin aparecer. Antes de escribirles hay que comprobar los datos de contacto y si siguen siendo pacientes de la clínica; recuperarlos es un trabajo distinto del recall y merece su propia conversación.

Los dos primeros grupos son el recall propiamente dicho y caben en la rutina semanal. El tercero es una campaña puntual que se hace una o dos veces al año, con criterio y sin prisa.

> **Un vencido no es un moroso ni un desertor.** La razón más frecuente por la que alguien se pasa de fecha es que nadie le avisó, y el tono del mensaje debería asumir eso hasta que se demuestre lo contrario.

## El mensaje: por dónde, cuándo y qué dice

Sobre el canal hay evidencia, aunque hay que leerla con cuidado. Una revisión Cochrane de 2013, sobre ocho ensayos aleatorizados y 6.615 participantes, comparó recordatorios por SMS con no enviar nada y con llamar por teléfono.

El SMS mejoró la asistencia frente a no enviar nada, con un riesgo relativo de 1,14 (intervalo de confianza del 95 %: 1,03 a 1,26). Frente a la llamada telefónica quedó igualado, con un riesgo relativo de 0,99 (0,95 a 1,02). Las tasas de asistencia fueron del 67,8 % sin recordatorio, 78,6 % con mensaje y 80,3 % con llamada, y el mensaje costó entre un 55 % y un 65 % menos que la llamada. La propia revisión califica la evidencia de calidad baja a moderada.

> **Es evidencia sobre recordar una cita ya dada, no sobre invitar a pedir una.** Son dos situaciones distintas y la segunda es más difícil. Lo que sí se traslada es la comparación entre canales: el mensaje escrito rindió como la llamada por una fracción del coste, y esa parte decide por dónde empezar.

Con eso, lo que tiene que llevar el aviso:

- **El nombre de la clínica en la primera línea.** Un mensaje que no se identifica en el primer vistazo se borra antes de leerse entero.
- **Cuándo fue la última visita y qué toca ahora.** "Tu última revisión fue en marzo de 2025" concreta mucho más que "hace tiempo que no te vemos".
- **Cuánto va a durar.** La objeción silenciosa en una revisión es el tiempo, y decir "unos veinte minutos" la desactiva.
- **Una forma de contestar en un paso.** Responder al propio mensaje, un enlace o un teléfono al que se conteste de verdad. Si la respuesta requiere llamar en horario de mañana, la mitad del grupo se cae ahí.
- **Una salida clara.** Cómo pedir que no se le escriba más, o cambiar de canal. Sale más barato perder un contacto que ganar una queja.

## La rutina semanal

Un recall funciona porque pasa siempre, no porque el mensaje sea brillante. Media hora fija a la semana, con la misma persona a cargo.

1. **Saca la lista de vencidos y próximos** filtrando por fecha de próxima revisión.
2. **Descarta a quien ya tiene cita** en la agenda, que es el filtro que evita el aviso más molesto de todos.
3. **Comprueba las bajas y los datos de contacto** que hayan cambiado desde la última tanda.
4. **Divide en los dos grupos** de arriba y usa el texto que corresponde a cada uno.
5. **Envía por el canal preferido de cada paciente**, no por el que sea más cómodo esa mañana.
6. **Anota la fecha del aviso en la ficha**, para que la semana que viene no le vuelva a tocar.
7. **Repasa la tanda anterior**: quién pidió cita, quién no contestó y quién pidió no recibir más avisos.

Al que no contesta se le escribe una segunda vez, entre diez y catorce días después, y ahí se para. Un tercer aviso en el mismo ciclo gana pocas citas y pierde contactos.

## Cuatro números dicen si funciona

| Métrica | Cómo se calcula | Qué decisión desencadena |
|---|---|---|
| Cobertura de la lista | Pacientes activos con fecha de próxima revisión, sobre el total de activos | Si es baja, el problema no es el mensaje: la fecha no se está poniendo al terminar la visita |
| Tasa de respuesta | Citas pedidas entre avisos enviados, por tanda | Compara canales y textos, y una tanda mala se detecta en una semana |
| Vencidos acumulados | Cuántos pasaron de fecha y siguen sin cita | Si crece mes a mes, la rutina semanal no se está haciendo |
| Cumplimiento del intervalo | Cuántos vienen dentro del intervalo que se les asignó | Distingue el sistema que avisa del sistema que consigue que vengan |

La cobertura es la que hay que mirar primero y casi nadie mira. Una clínica con el 40 % de sus pacientes activos sin fecha de próxima revisión no tiene un problema de recall, tiene medio fichero invisible para cualquier aviso que envíe.

![Pantalla de informes de agenda con el total de citas del periodo, la tasa de completado, la de ausencias, las primeras visitas, las horas trabajadas por profesional y la ocupación por gabinete](/screenshots/reports.png)

*Las tasas de completado y de ausencias del periodo, junto a la ocupación por gabinete: los datos con los que se calcula si una tanda de avisos ha servido de algo.*

## Por dónde empezar

1. **Mide la cobertura hoy**, contando cuántos pacientes activos tienen fecha de próxima revisión. Ese número es tu punto de partida.
2. **Añade el paso al final de la visita**: antes de que el paciente se levante, intervalo decidido, anotado y comentado con él.
3. **Saca la primera lista de vencidos** y quítale los que ya tienen cita.
4. **Escribe dos plantillas**, una para próximos y otra para vencidos recientes, con los cinco elementos de arriba.
5. **Fija media hora semanal** en el calendario de una persona concreta.
6. **Apunta durante dos meses** avisos enviados y citas pedidas por tanda.
7. **Ajusta una sola cosa cada vez**, el texto o el canal, para saber cuál de las dos movió el número.

Dentalpin lleva recalls junto a la agenda, la historia clínica y los informes, con las comunicaciones guardadas en la ficha del paciente, que es lo que hace falta para saber a quién se avisó y cuándo. Lo que incluye cada versión está en [precios](/es/precios/).

Esto no es asesoramiento clínico: el intervalo de revisión de cada paciente lo decide siempre el profesional que le atiende.

## Fuentes

- National Institute for Health and Care Excellence. *Dental checks: intervals between oral health reviews* (CG19), recomendaciones 1 a 8. [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/n/nicecg19/ch5/). Consultado el 21 de agosto de 2026.
- Fee PA, Riley P, Worthington HV, Clarkson JE, Boyers D, Beirne PV. *Recall intervals for oral health in primary care patients*. Cochrane Database of Systematic Reviews, 14 de octubre de 2020, DOI 10.1002/14651858.CD004346.pub5. [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256238/). Consultado el 21 de agosto de 2026.
- Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J. *Mobile phone messaging reminders for attendance at healthcare appointments*. Cochrane Database of Systematic Reviews, 5 de diciembre de 2013, DOI 10.1002/14651858.CD007458.pub3. [cochrane.org](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments). Consultado el 21 de agosto de 2026.
