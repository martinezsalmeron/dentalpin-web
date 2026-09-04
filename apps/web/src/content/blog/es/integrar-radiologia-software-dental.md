---
title: "Integrar radiología y escáner intraoral con el software de la clínica"
description: "Qué significa de verdad integrar la imagen con la gestión: lista de trabajo DICOM, dónde queda enlazada la radiografía y qué pedir por escrito antes de firmar."
pubDate: 2026-09-04
tags: [radiologia, dicom, escaner-intraoral, integracion, gestion]
---

La integración que importa no es que el software abra imágenes. Son tres cosas concretas: que el equipo reciba al paciente desde la ficha en vez de que alguien lo teclee otra vez, que la imagen vuelva enlazada a ese paciente y a esa visita, y que puedas sacarla en DICOM cuando quieras. Si falta la primera, tienes dos bases de datos de pacientes conviviendo en la misma clínica.

Lo que sigue es cómo se comprueba eso: qué mecanismo lo resuelve, en qué se diferencian los cuatro niveles de integración que se venden con la misma palabra, y qué preguntar antes de firmar.

## El problema no es el visor, son dos ficheros de pacientes

Casi todos los programas de imagen traen su propia base de datos de pacientes. Cuando el sensor se instaló, alguien la rellenó, y desde entonces convive con la del software de gestión.

Las dos empiezan iguales y se separan solas. Un apellido escrito sin tilde, una fecha de nacimiento tecleada a las nueve menos cinco, un paciente dado de alta en un sitio y no en el otro.

- **Aparecen pacientes duplicados dentro del programa de imagen**, y cada uno se lleva parte del historial radiológico.
- **Se pierde el motivo de la prueba.** La imagen existe, pero no está pegada a la visita que la justificó, así que nadie sabe por qué se hizo.
- **Nadie lo nota mientras el equipo sigue siendo el mismo.** Se nota el día que hay que entregar el historial completo de un paciente, o el día que se cambia de software.

> **La prueba rápida son los nombres.** Abre el programa de imagen y busca a los tres pacientes con más visitas del último año. Si alguno aparece dos veces, o escrito distinto que en la ficha, la integración que tienes es un botón que abre otro programa.

![Ficha de paciente en la pestaña de datos personales, con nombre, contacto y datos administrativos](/screenshots/patients.png)

*La ficha de la que deberían salir el nombre y la fecha de nacimiento que se registran en la exploración.*

## La lista de trabajo es el mecanismo que lo resuelve

El estándar que ordena esto se llama DICOM y lo publica NEMA. Es también norma ISO, ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, y esa última parte del título, *workflow*, es justo la que casi nadie usa en una clínica dental.

El mecanismo es la lista de trabajo, la DICOM Modality Worklist. La Landeszahnärztekammer de Baden-Wurtemberg la describe paso a paso en su documento sobre DICOM en la clínica dental, y el flujo es el mismo en un hospital y en un gabinete con un sensor:

1. **La exploración se pide desde el software de gestión**, con el paciente ya identificado en su ficha.
2. **Esa petición entra en una lista**, que puede ser una por equipo o una única para todos.
3. **El equipo lee la lista en su propia consola** y toma de ahí los datos del paciente. Nadie los vuelve a teclear.
4. **Se hace la exploración** y las imágenes quedan asociadas a esos datos dentro del propio equipo.
5. **Las imágenes se envían al archivo** y la petición se marca como hecha y desaparece de la lista.

El paso tres es el que quita el error humano, y el paso cinco es el que hace que la imagen aparezca sola en la ficha. Un sistema que solo hace el cinco te ahorra buscar el fichero; uno que hace los dos elimina el fichero de pacientes duplicado.

## Cuatro niveles se venden con la misma palabra

"Integrado con tu radiología" describe cosas muy distintas. Estas son las cuatro que se encuentran en una clínica, de menos a más.

| Nivel | Qué hace de verdad | Se teclea el paciente dos veces | La imagen vuelve sola a la ficha |
|---|---|---|---|
| Un botón que abre el visor | Lanza el otro programa | ✗ Sí | ✗ No |
| Enlace por paciente | Pasa el identificador al abrir | ✓ No | ~ Depende del fabricante |
| Lista de trabajo y envío DICOM | Petición de ida, imágenes de vuelta | ✓ No | ✓ Sí |
| Servicios web DICOM | Además, consulta y descarga por web | ✓ No | ✓ Sí |

El último nivel es DICOMweb, que el propio estándar define como "the DICOM Standard for web-based medical imaging" y describe como un conjunto de servicios REST. Los nombres que verás en una hoja técnica son QIDO-RS para buscar, WADO-RS para recuperar, STOW-RS para almacenar y UPS-RS para la lista de trabajo.

> **Pide el nivel por su nombre, no por el adjetivo.** "Compatible" y "conectado" no significan nada en una oferta. "Soporta Modality Worklist como SCP" y "acepta STOW-RS" sí, y ambas se pueden comprobar antes de pagar.

## El escáner intraoral es un problema distinto

Un escáner intraoral no produce radiografías, produce mallas de superficie, y por defecto no las guarda en DICOM. Salen mallas en los formatos que usa la fabricación 3D, empezando por STL y OBJ, y muchos fabricantes las dejan en su propio portal en la nube, con su propia cuenta y su propia lista de pacientes.

El estándar ha ido a buscarlos. El Suplemento 205 de DICOM "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", y el 208 hizo lo mismo con OBJ, con las bibliotecas de materiales MTL y con las texturas en JPG o PNG.

- **Pregunta dónde vive el caso**, no dónde se ve. Si la respuesta es el portal del fabricante del escáner, el archivo no está en tu clínica.
- **Pregunta si el export incluye el vínculo con el paciente**, no solo los ficheros. Veinte mil mallas sin nombre no son un historial.
- **Pregunta qué pasa cuando dejas de pagar el escáner.** Es la misma pregunta que se hace del software de gestión y casi nunca se hace del portal del laboratorio digital.

> **La malla y la radiografía acaban en sitios distintos y eso ya es el problema.** Un paciente con un TAC en el archivo, unas periapicales en la carpeta del gabinete y un escaneo en un portal web tiene tres historiales, y el que firma el consentimiento cree que tiene uno.

![Ficha de paciente en la pestaña de actividad, con alertas clínicas, plan activo y una línea de tiempo filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*La línea de tiempo de un paciente, que es donde se ve en qué visita entra cada prueba.*

## Cómo saber qué tienes hoy, en veinte minutos

No hace falta una auditoría. Hacen falta seis comprobaciones, todas con un paciente real y ninguna irreversible.

1. **Da de alta un paciente nuevo en la gestión** y mira si aparece en el programa de imagen sin tocar nada.
2. **Empieza una exploración desde el equipo** y comprueba si el paciente sale ya escrito o hay que buscarlo.
3. **Toma una imagen y vuelve a la ficha.** Cuenta los segundos hasta que aparece, y si no aparece, apunta dónde estaba.
4. **Busca el fichero en el disco.** Si está en una carpeta con el nombre del fabricante y no lo cubre tu copia de seguridad, ya tienes un hallazgo.
5. **Exporta esa imagen a un pendrive y ábrela en otro ordenador** sin el programa del fabricante instalado.
6. **Repite el punto uno con el escáner intraoral**, que casi siempre es el que se queda fuera.

Lo que salga de ahí vale más que cualquier folleto, porque describe tu clínica. Si el punto cuatro te deja intranquilo, la guía sobre [almacenar radiografías digitales](/es/blog/almacenar-radiografias-digitales/) entra en el formato y en el archivo.

## Lo que hay que pedir por escrito

Todo esto se negocia antes de firmar y no después, y cabe en cinco líneas de un correo.

- **La declaración de conformidad DICOM del equipo y la del software.** La parte PS3.2 del estándar obliga a cada fabricante a publicar qué implementa de verdad, así que existe y se puede pedir.
- **Si el software actúa como servidor de lista de trabajo**, y con qué equipos está probado, con nombres y versiones.
- **Dónde se guardan los ficheros de imagen**, en qué ruta o en qué servicio, y si entran en la misma copia de seguridad que el resto.
- **Cómo se exporta todo**, en DICOM y con el vínculo paciente-fecha en un fichero legible, con una prueba hecha ahora sobre diez pacientes.
- **Qué cuesta cada conexión.** Los puentes con equipos concretos se facturan aparte más veces de las que se dice en la demo, y esa pregunta está también en la lista de [qué preguntar antes de firmar](/es/blog/preguntas-antes-de-firmar-software-dental/).

En Dentalpin las imágenes se guardan enlazadas a la historia clínica y en el sistema de archivos de tu propio servidor, así que entran en la copia de seguridad con todo lo demás y puedes llevártelas. Las condiciones están en [precios](/es/precios/).

## Fuentes

- DICOM, edición vigente y lista de partes (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Consultado el 4 de septiembre de 2026.
- DICOMweb, definición y servicios QIDO-RS, WADO-RS, STOW-RS y UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Consultado el 4 de septiembre de 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Consultado el 4 de septiembre de 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL y texturas). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Consultado el 4 de septiembre de 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Consultado el 4 de septiembre de 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, descripción del flujo de la DICOM Modality Worklist. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Consultado el 4 de septiembre de 2026.
