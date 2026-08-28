---
title: "Radiografías digitales: cómo almacenarlas y compartirlas sin perderlas"
description: "Cómo guardar las radiografías dentales: por qué DICOM, cuántos años conservarlas en España, dónde deben vivir y cómo compartirlas sin exponer datos."
pubDate: 2026-08-28
tags: [radiografias, dicom, historia-clinica, rgpd, gestion]
---

Guarda cada radiografía dentro de la historia clínica del paciente, en un formato que puedas abrir sin el programa del fabricante del sensor, y con una copia fuera de la clínica. En España el plazo mínimo de conservación de la documentación clínica es de cinco años desde el alta de cada proceso asistencial, y la radiografía forma parte de esa documentación.

Lo que sigue es cómo se cumple eso en la práctica: qué formato pedir, dónde tiene que vivir el archivo, cuánto espacio vas a necesitar y cómo entregar una imagen sin convertirla en una brecha de datos.

## El formato importa más que el disco

Una radiografía digital no es solo un mapa de píxeles. Lleva pegados el paciente, la fecha, el equipo, la técnica y los parámetros de exposición, y esa parte es la que convierte una imagen en documentación clínica.

El estándar internacional para eso es DICOM, que NEMA define como el estándar para transmitir, almacenar, recuperar, imprimir, procesar y mostrar información de imagen médica. Se puede descargar gratis, así que cualquiera puede comprobar lo que dice.

- **DICOM PS3.10** define el formato de archivo, que es el que te permite copiar una imagen a otro sitio y que siga siendo legible.
- **DICOM PS3.2** define la conformidad, y obliga a que cada fabricante publique un documento describiendo qué implementa de verdad. Ese documento se pide antes de comprar, no después.
- **Un JPEG exportado no es lo mismo.** Sirve para enseñárselo a un paciente y no sirve como archivo, porque pierde los metadatos y muchas veces la profundidad de bits.

> **La prueba que decide si tienes un archivo o un rehén.** Coge una radiografía de hace dos años, cópiala a un pendrive y ábrela en un ordenador donde no esté instalado el programa del sensor. Si no se abre, no tienes un archivo clínico, tienes un archivo dentro de un producto.

## Cinco años es el suelo, no el objetivo

La Ley 41/2002 obliga a los centros sanitarios a conservar la documentación clínica "como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial". Es un mínimo estatal, y varias comunidades autónomas han fijado plazos más largos.

Dos matices que se olvidan casi siempre:

- **El plazo cuenta desde el alta de cada proceso, no desde la fecha de la radiografía.** Un paciente en tratamiento durante tres años arrastra sus imágenes hasta cinco años después del final, no cinco años después de la toma.
- **La misma ley da al paciente derecho de acceso y a obtener copia** de los datos que figuran en su historia clínica. Si no puedes entregar la imagen, el plazo de conservación es lo de menos.

| Decisión | Lo que suele hacerse | Lo que hay que poder demostrar |
|---|---|---|
| Cuándo se borra una imagen | ✗ Nunca se decide, se borra cuando falta espacio | ✓ Un criterio escrito y aplicado igual para todos |
| Quién puede borrarla | ✗ Cualquiera con acceso a la carpeta | ✓ Un permiso concreto, con registro |
| Dónde está la copia más antigua | ~ En un disco del armario | ✓ En un soporte que alguien ha leído este año |

## La imagen vive en la ficha, no en una carpeta

El fallo más común no es perder las radiografías, es no encontrarlas. Una carpeta llamada `2019-11-14` con doce archivos numerados es papel digitalizado, no historia clínica.

Cuando la imagen está enlazada al paciente y a la visita, tres cosas dejan de ser un problema: buscarla, saber por qué se hizo y saber quién la ha mirado.

![Historia clínica de un paciente con odontograma, alertas clínicas y plan de tratamiento activo](/screenshots/dental-chart.png)

*La ficha donde acaba enlazada la imagen, junto al diente que documenta y al plan que la justificó.*

| | Carpeta en el ordenador del gabinete | Carpeta compartida en el servidor | Enlazada a la historia clínica |
|---|---|---|---|
| Encontrar la imagen de un paciente | ✗ Depende de cómo se nombró aquel día | ~ Solo si alguien mantiene la convención | ✓ Está en la ficha |
| Entra en la copia de seguridad | ✗ Casi nunca | ~ Si alguien se acordó de incluirla | ✓ Con el resto de los datos |
| Sobrevive al cambio de ordenador | ✗ Se queda en el equipo viejo | ~ Si se migra el recurso compartido | ✓ Va con la base de datos |
| Registro de quién la ha visto | ✗ Ninguno | ✗ Ninguno | ~ Solo si el software audita accesos |

## Cuánto espacio vas a necesitar, medido y no estimado

No hay una cifra general que sirva, porque depende del sensor, de la resolución y de si haces volumetría. Lo que sí hay es una forma de saberlo en diez minutos.

1. **Mira el tamaño de la carpeta de imágenes de los últimos doce meses.** Es el único dato que describe tu clínica y no la de otro.
2. **Divídelo entre el número de pacientes atendidos** en ese periodo. Ya tienes tu media real por paciente.
3. **Multiplícalo por los pacientes que esperas y por los años que tienes que conservar.** Ese es el tamaño de tu archivo dentro de cinco años.
4. **Comprueba aparte lo que ocupa la volumetría**, si la haces. Un volumen 3D no está en la misma escala que una periapical, y una sola exploración puede pesar más que un año de intraorales.
5. **Contrasta ese número con el espacio que te da tu proveedor** y con lo que costaría el siguiente escalón. La sorpresa suele estar ahí.

> **Un archivo que crece sin control acaba decidiendo por ti.** Cuando el disco se llena un martes por la mañana, la decisión ya no es qué conservar, es qué borrar deprisa. Ese es el momento en el que desaparecen las imágenes de los pacientes que ya no vienen, que son justo las que reclamará alguien dentro de tres años.

## La copia de seguridad que se deja las imágenes fuera

Las radiografías son casi todo el volumen de datos de una clínica, así que son lo primero que se excluye de una copia para que termine a tiempo. La copia sigue funcionando, sigue avisando de que ha ido bien y ya no protege lo que más ocupa.

- **Comprueba el tamaño de la copia**, no solo el aviso de que terminó. Si pesa mucho menos que tus datos, las imágenes se están quedando fuera.
- **Restaura una copia entera al menos una vez al año** y abre tres pacientes con radiografías. Lo tratamos en detalle en la guía de [copias de seguridad](/es/blog/copias-seguridad-clinica-dental/).
- **Cifra el soporte que sale de la clínica.** Un disco perdido con imágenes clínicas es una brecha de datos notificable.

## Compartirlas sin convertirlo en un incidente

Una radiografía identifica a una persona y describe su salud, así que es un dato de categoría especial. El RGPD exige medidas técnicas y organizativas apropiadas al riesgo, y el correo ordinario con un adjunto no lo es cuando existe alternativa.

- **Con el paciente:** tiene derecho a una copia. Entrégale el DICOM si va a ir a un especialista, y añade una versión visible sin software especial para que pueda abrirla en casa.
- **Con otro profesional:** un enlace temporal o un portal es mejor que un adjunto, porque caduca y deja registro. Si tiene que ser correo, va cifrado y con la contraseña por otro canal.
- **Con el laboratorio:** manda solo lo que necesita para el trabajo. Un caso de prótesis no requiere el histórico radiológico completo.
- **Deja constancia de cada entrega.** Fecha, a quién, por qué vía y qué se envió. Ese registro es la respuesta a una reclamación dos años después.

![Ficha de paciente en la pestaña de actividad, con alertas clínicas, plan activo y una línea de tiempo filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*La línea de tiempo del paciente, que es donde se ve en qué visita se hizo cada prueba.*

## Cuando cambias de software, las imágenes son lo que se queda

En una migración, la base de datos se suele negociar y las imágenes se olvidan. Pide por escrito, antes de firmar, tres cosas concretas.

1. **Un export de las imágenes en DICOM**, no una carpeta de capturas de pantalla ni un visor propietario.
2. **El vínculo entre cada imagen y su paciente y su fecha**, en un archivo legible. Sin eso tienes veinte mil ficheros y ningún historial.
3. **Una prueba de export ahora**, con diez pacientes reales, no una promesa para el día que te vayas.

Esa conversación se tiene mejor antes de contratar, y está en la lista de [preguntas que conviene hacer antes de firmar](/es/blog/preguntas-antes-de-firmar-software-dental/).

En Dentalpin las imágenes se guardan enlazadas a la historia clínica y en el sistema de archivos, así que entran en la misma copia de seguridad que la base de datos y puedes llevártelas cuando quieras. Las condiciones están en [precios](/es/precios/).

## Fuentes

- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículos 17 y 18. [BOE-A-2002-22188](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188). Consultado el 28 de agosto de 2026.
- DICOM, *the international standard to transmit, store, retrieve, print, process, and display medical imaging information*, y la lista de partes vigentes (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Consultado el 28 de agosto de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 9, 15 y 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 28 de agosto de 2026.

Esto no es asesoramiento legal. Los plazos concretos dependen de tu comunidad autónoma y de tu caso, y conviene confirmarlos con tu asesoría o tu colegio profesional.
