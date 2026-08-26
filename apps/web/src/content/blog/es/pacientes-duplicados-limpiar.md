---
title: "Pacientes duplicados: limpiar la base sin perder nada"
description: "Cómo detectar fichas duplicadas, decidir cuál se queda y fusionarlas sin perder historia clínica ni facturas, y cómo evitar que vuelvan a aparecer."
pubDate: 2026-08-26
tags: [pacientes-duplicados, historia-clinica, calidad-de-datos, rgpd]
---

No borres ninguna de las dos fichas. Se elige una superviviente, se mueve a ella todo lo que cuelga de la otra (citas, presupuestos, facturas, imágenes, consentimientos) y la perdedora se queda archivada y enlazada, nunca eliminada. Y antes de fusionar la primera pareja conviene arreglar el momento en que se crean las fichas, porque si no, dentro de un año hay que limpiar la misma base otra vez.

El daño de un duplicado no es tener dos filas en una tabla. Es que la alergia está anotada en una ficha y la extracción se hace mirando la otra.

## De dónde salen los duplicados

Casi siempre de los mismos cinco sitios, y ninguno es descuido del equipo.

- **La ficha se crea antes de buscar.** Suena el teléfono, hay tres personas esperando y el botón de "nuevo paciente" está más a mano que el buscador.
- **La misma persona entra por dos puertas.** Cita online, WhatsApp, teléfono y mostrador. Si cada canal puede crear ficha sin comprobar, cada canal crea duplicados.
- **El nombre no es un dato estable.** Dos apellidos en otro orden, tildes que unas veces están y otras no, "Mª Jose" y "María José", apellidos con guion, nombres compuestos partidos por la mitad.
- **La migración se ejecutó dos veces**, o importó pacientes que ya existían de antes en el sistema nuevo.
- **La familia comparte contacto.** El móvil de la madre está en la ficha de los tres hijos, y cualquier búsqueda por teléfono devuelve cuatro personas distintas que no son duplicados.

## Buscar por señales, no por nombre

Buscar "todos los que se llaman igual" produce una lista larga y llena de falsos positivos. Lo que funciona es cruzar dos señales a la vez y ordenar el resultado por lo fiable que sea la combinación.

| Señal | Fiabilidad | Para qué sirve |
|---|---|---|
| DNI o NIE idéntico | ✓ Muy alta | Revisar primero, es casi certeza |
| Móvil + fecha de nacimiento | ✓ Alta | La combinación más rentable en una clínica |
| Nombre normalizado + fecha de nacimiento | ✓ Alta | Encuentra los que cambiaron de teléfono |
| Correo electrónico idéntico | ~ Media | Las familias comparten correo |
| Solo el teléfono | ✗ Baja | Devuelve familias enteras |
| Apellidos + código postal | ✗ Baja | Vecinos y parientes |

Normalizar antes de comparar es la mitad del trabajo. Para el nombre: todo a minúsculas, fuera tildes, fuera puntos y guiones, espacios colapsados. Para el teléfono: fuera espacios y prefijo, y se comparan los últimos nueve dígitos.

Con eso, "José Mª Pérez-Gómez" y "jose maria perez gomez" caen en el mismo grupo, que es exactamente lo que no consigue el buscador del mostrador.

![Ficha de paciente con la pestaña de datos abierta: nombre, documento de identidad, fecha de nacimiento, teléfono, correo y dirección](/screenshots/patients.png)

*Los campos que se comparan para decidir si dos fichas son la misma persona. La fecha de nacimiento es la que más discrimina y la que más veces está vacía.*

## Cuál se queda: casi nunca la más nueva

La ficha reciente suele ser la que se creó por prisa, con el nombre bien escrito y nada más dentro. La antigua es la que tiene el odontograma, las radiografías y ocho años de historia.

> **Se queda la ficha con contenido clínico, no la que tiene los datos de contacto correctos.** Un teléfono se copia en diez segundos; un odontograma con doce tratamientos y sus fechas, no.

Cuando las dos tienen contenido, el orden de desempate es este:

1. **La que tenga historia clínica y odontograma.** Es lo que no se puede reescribir sin perder fechas ni autoría.
2. **La que aparezca en facturas emitidas.** Mover una factura es fácil, pero cuantas menos se toquen, mejor.
3. **La más antigua**, porque el número de historia que el paciente lleva años oyendo es ese.

Los datos demográficos se reconcilian campo a campo después, no se eligen en bloque. Del nombre suele ganar la ficha nueva, de la historia clínica siempre gana la antigua.

## La fusión, paso a paso

1. **Haz una copia antes de tocar nada.** Una fusión no suele tener botón de deshacer, y si lo tiene, no deshace lo que ya se imprimió.
2. **Abre las dos fichas y lista qué cuelga de cada una**: citas pasadas y futuras, presupuestos, facturas, pagos y deuda, radiografías y fotos, consentimientos firmados, notas clínicas, trabajos de laboratorio y tratamientos de ortodoncia en curso.
3. **Decide la superviviente** con el orden de arriba y anótalo antes de empezar.
4. **Mueve, no reescribas.** Copiar a mano una nota clínica de una ficha a otra le cambia la fecha y el autor, y eso es justo lo que un registro clínico no puede perder.
5. **No renumeres ni reemitas ninguna factura.** Una factura emitida es un documento cerrado: cambia a qué paciente apunta, nunca su número, su fecha ni sus importes.
6. **Archiva la ficha perdedora enlazada a la superviviente.** Quien busque por el número viejo tiene que llegar a la ficha buena, no a un error.
7. **Anota quién fusionó, cuándo y desde qué ficha.** Dentro de dos años esa nota es la única explicación de por qué hay un salto en la historia.
8. **Revisa las alertas médicas de la ficha resultante.** Alergias, anticoagulantes y premedicación son lo primero que se pierde en una fusión mal hecha.

> **Las facturas son la parte que no admite improvisación.** La numeración de una serie emitida tiene que quedarse exactamente como está. Si la fusión obliga a reemitir algo, no es una fusión: es una rectificativa, y esa decisión es de quien lleve la contabilidad.

![Listado de facturas con sus estados: emitidas, cobradas, parcialmente cobradas, vencidas y borradores](/screenshots/invoices.png)

*Lo que cuelga de una ficha y no puede reescribirse. Antes de fusionar conviene saber cuántas facturas hay a cada lado y en qué estado están.*

## Los que parecen duplicados y no lo son

Fusionar dos fichas que no eran la misma persona es un problema peor que el que se venía a resolver, porque mezcla dos historias clínicas.

- **Familias con el mismo contacto.** Tres hermanos con el móvil de la madre son tres pacientes.
- **Padre e hijo con el mismo nombre.** La fecha de nacimiento los separa, el nombre no.
- **Gemelos.** Mismos apellidos, misma fecha de nacimiento, mismo domicilio, mismo teléfono. Es el único caso en el que hay que mirar la historia antes de decidir.
- **Menores sin documento de identidad.** No tienen la señal más fiable, así que se comparan por nombre, fecha de nacimiento y tutor.

Ante la duda, no se fusiona: se marca la pareja como revisada y se pregunta al paciente en la siguiente visita.

## Qué dice la normativa

Esto no es asesoramiento legal, pero hay tres puntos que conviene conocer antes de limpiar una base de pacientes.

El artículo 5.1.d del RGPD exige que los datos personales sean "exactos y, si fuera necesario, actualizados", y que se adopten "todas las medidas razonables para que se supriman o rectifiquen sin dilación los datos personales que sean inexactos". Una base con duplicados incumple eso por definición, así que limpiarla no es solo higiene interna.

El artículo 16 añade el derecho del paciente a que se completen sus datos incompletos, "inclusive mediante una declaración complementaria". Es exactamente la situación de quien tiene media historia en cada ficha.

> **La ley española pide expresamente unidad, no dos fichas.** El artículo 15.4 de la Ley 41/2002 dice que "la historia clínica se llevará con criterios de unidad y de integración, en cada institución asistencial como mínimo, para facilitar el mejor y más oportuno conocimiento por los facultativos de los datos de un determinado paciente".

Y el motivo por el que se archiva en vez de borrar está en el artículo 17.1 de la misma ley: la documentación clínica se conserva "como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial". Borrar la ficha perdedora con contenido clínico dentro es incompatible con esa obligación.

## Que no vuelvan a aparecer

Limpiar sin cambiar el flujo de alta es trabajo que se repite. Cinco cambios que sí lo cortan:

- **Buscar antes de crear, y que buscar sea lo fácil.** Si el mostrador tiene que teclear el nombre completo para encontrar a alguien, va a crear ficha nueva.
- **Fecha de nacimiento obligatoria desde el primer contacto.** Es el campo que convierte una búsqueda ambigua en una certeza, y el que se salta todo el mundo.
- **Normalizar al guardar**, no al buscar. Tildes, espacios sobrantes y prefijos telefónicos se limpian una vez, cuando entran.
- **Que la cita online case contra la base**, en vez de crear siempre ficha nueva. Es la puerta que más duplicados genera desde que existe.
- **Un informe de posibles duplicados cada semana.** Diez parejas a la semana se revisan en cinco minutos; mil parejas al año no las revisa nadie.

## Qué debe permitirte el software

Una fusión segura depende de cuatro cosas: que exista un buscador que tolere tildes y variantes, un informe de duplicados que se pueda revisar en pareja, una fusión que mueva los registros en vez de copiarlos, y un rastro de quién la hizo y cuándo.

Dentalpin tiene esas cuatro y guarda la ficha fusionada como alias de la superviviente, así que el número de historia antiguo sigue llevando al sitio correcto. Se instala en tu propio servidor o se usa en la versión gestionada, y los [precios](/es/precios/) están publicados en la web.

## Fuentes

Todas consultadas el 26 de agosto de 2026.

- Reglamento (UE) 2016/679 (RGPD), artículos 5.1.d, 5.1.e y 16. Texto en español publicado por el BOE. [boe.es](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807)
- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículos 14.1, 15.4 y 17.1. [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188)
