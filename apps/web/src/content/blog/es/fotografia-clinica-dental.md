---
title: "Fotografía clínica dental: organizar y proteger las imágenes"
description: "Dónde guardar las fotos de pacientes, qué consentimiento hace falta para publicarlas y cuánto hay que conservarlas. Con fuentes oficiales."
pubDate: 2026-09-13
tags: [fotografia-clinica, historia-clinica, rgpd, consentimiento-informado, copias-de-seguridad]
---

Una fotografía clínica es documentación clínica. Va en la historia del paciente, con los mismos permisos, la misma copia de seguridad y el mismo plazo de conservación que el resto, y no en el carrete de un móvil ni en una carpeta suelta de recepción.

Y hay dos cosas distintas que se confunden todo el rato: hacer la foto para diagnosticar y tratar, que no necesita consentimiento para el dato, y publicarla, que sí necesita uno propio, explícito y revocable.

Esto no es asesoramiento legal. Todas las fuentes oficiales están al final, consultadas el 13 de septiembre de 2026.

## La foto es historia clínica, aunque esté en un móvil

El artículo 3 de la Ley 41/2002 define documentación clínica como "el soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial". Una fotografía intraoral es exactamente eso: un soporte con información asistencial.

El artículo 15.1 lo remata por el otro lado. La historia incorpora "la información que se considere trascendental para el conocimiento veraz y actualizado del estado de salud del paciente", y el paciente tiene derecho a que quede constancia "por escrito o en el soporte técnico más adecuado".

> **Si la foto influye en el diagnóstico o en el plan, es historia clínica.** El sitio donde está guardada no cambia eso: una imagen en el carrete de un móvil personal sigue siendo documentación clínica, solo que fuera de control.

Esa es la razón práctica por la que el móvil personal es mal sitio. No es que hacer la foto con el teléfono esté mal, es que el carrete se sincroniza con una cuenta personal, lo ve quien coge el aparato, y la clínica no puede ni auditarlo ni borrarlo.

![Ficha de paciente con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*La pantalla desde la que alguien va a buscar la foto dentro de dos años: si la imagen no cuelga de aquí, no existe.*

## Dónde acaban las imágenes y qué cuesta cada sitio

| Dónde está la imagen | Quién la ve | Qué pasa cuando el paciente pide su historia |
|---|---|---|
| Carrete del móvil personal | ✗ Quien tenga el teléfono | ✗ Nadie sabe qué fotos hay ni de quién |
| Carpeta de red por nombre de paciente | ~ Todo el que entre en la carpeta | ~ Se busca a mano y se falla con los duplicados |
| Disco de la cámara o tarjeta SD | ✗ Quien tenga la tarjeta | ✗ No aparece: nadie la mira |
| Servicio de mensajería con el laboratorio | ✗ Fuera de la clínica, sin registro | ✗ No hay copia local que entregar |
| Adjunta al registro del paciente | ✓ Solo quien tenga permiso | ✓ Sale con el resto de la historia |

La diferencia entre las dos primeras filas y la última no es la calidad de la imagen, es si alguien puede responder en un minuto a "enséñame todas las fotos de este paciente" y a "quién las ha abierto".

## Dos consentimientos, y solo uno es opcional

El artículo 9.1 del RGPD prohíbe con carácter general tratar "datos relativos a la salud". El 9.2 levanta la prohibición en varios casos, y el que sostiene el trabajo diario de una clínica es la letra h): el tratamiento necesario "para fines de medicina preventiva o laboral (...) diagnóstico médico, prestación de asistencia o tratamiento de tipo sanitario".

Fotografiar para diagnosticar, planificar y comparar la evolución cabe ahí. No hace falta un consentimiento de protección de datos para eso, igual que no hace falta para escribir la evolución del día.

Publicar es otra cosa. Ahí no hay asistencia sanitaria que ampare nada, y la base pasa a ser la letra a): "el interesado dio su consentimiento explícito para el tratamiento de dichos datos personales con uno o más de los fines especificados".

> **El consentimiento para tratar no cubre la web, el congreso ni Instagram.** La AEPD lo dijo para un caso literalmente dental en su Informe 11/2007: publicar fotografías, radiografías y moldes en la página web y en folletos es una cesión de datos de salud que exige consentimiento "libre, inequívoco, específico, informado y expreso", y que "no cabrá deducir (...) de los actos que lleve a cabo el afectado".

Ese informe se dictó bajo la LO 15/1999, hoy sustituida por el RGPD y la LO 3/2018, así que las referencias de artículos han cambiado. El criterio de fondo no: consentimiento propio, separado y por escrito para publicar, y conservado para poder demostrarlo.

Dos consecuencias que se olvidan:

- **Es revocable.** Un consentimiento que no se puede retirar tan fácil como se dio no es consentimiento, y retirarlo obliga a bajar la imagen, no a dejarla porque ya está publicada.
- **En menores lo presta quien tenga la patria potestad o la representación legal**, como recordó la propia AEPD en ese informe. Y el niño de la foto cumple dieciocho algún día.

## Una foto de paciente no es, por defecto, un dato biométrico

Esta es la confusión más cara en sentido contrario, porque hace que clínicas prudentes se paralicen. El considerando 51 del RGPD es explícito:

"El tratamiento de fotografías no debe considerarse sistemáticamente tratamiento de categorías especiales de datos personales, pues únicamente se encuentran comprendidas en la definición de datos biométricos cuando el hecho de ser tratadas con medios técnicos específicos permita la identificación o la autenticación unívocas de una persona física".

Traducido: la foto de una arcada es dato de salud, con todo lo que eso implica, pero no es dato biométrico por el hecho de ser una foto. Se convierte en biométrico el día que se pasa por un sistema de reconocimiento facial, que es justo lo que hace alguna galería en la nube de consumo sin preguntar.

## Los metadatos cuentan cosas que tú no has contado

Un archivo de imagen lleva dentro más que píxeles. El formato Exif, normalizado por CIPA en el estándar DC-008, define un bloque específico de información GPS además de la fecha, la hora y el modelo de cámara.

Tres comprobaciones concretas:

1. **Mira si tu cámara o tu móvil escribe coordenadas.** Si la clínica es también un domicilio, esa coordenada es un dato sobre alguien, no sobre un diente.
2. **Pon en hora el reloj de la cámara.** Una serie fechada con tres años de retraso no sirve para demostrar una evolución, y las series de dos pacientes se entremezclan al ordenar por fecha.
3. **Mira el nombre del archivo antes de enviarlo.** `martinez-lopez-ana-prequirurgico.jpg` viaja con el archivo hasta el laboratorio, hasta el correo del compañero y hasta la papelera de descargas de los dos.

> **Anonimizar no es tapar los ojos con una barra negra.** En una imagen intraoral no hay cara que tapar y aun así el archivo puede llevar el nombre en el nombre, la fecha exacta en el Exif y la coordenada de la clínica al lado.

## Una serie fotográfica que se pueda repetir

El valor de la fotografía clínica está en la comparación, y solo se compara lo que se toma igual. Antes de discutir de cámaras, fija la serie y el encuadre:

1. **Decide un conjunto fijo** y escríbelo. Un ejemplo de trabajo habitual son ocho tomas: extraoral frontal en reposo, frontal sonriendo, perfil, intraoral frontal en oclusión, lateral derecha, lateral izquierda, oclusal superior y oclusal inferior.
2. **Fija la distancia y la altura.** Si una serie se toma de pie y la siguiente sentado, el "antes y después" mide la postura del fotógrafo.
3. **Fija la luz.** El mismo flash y el mismo balance de blancos, o el color cambia entre visitas y las comparaciones de tono no valen nada.
4. **Toma la serie completa aunque no la necesites toda.** Repetir la que falta seis meses después es imposible.
5. **Descarga y adjunta el mismo día.** Lo que se queda en la tarjeta "para luego" es lo que se pierde.
6. **No edites la imagen clínica.** Recortar, aclarar o saturar convierte un registro en una ilustración. Si hace falta una versión retocada para una presentación, que sea un archivo aparte y que el original se quede intacto.

El punto 6 es el que más se salta y el que más caro sale. Una foto editada ya no documenta nada, porque no se puede distinguir el cambio del tratamiento del cambio del filtro.

## Copias de seguridad: las imágenes son casi todo el peso

En una clínica sin papel, el texto de las historias ocupa poco y las imágenes ocupan casi todo. Eso cambia dos decisiones prácticas.

- **Haz la cuenta antes de elegir dónde guardarlas.** Multiplica el tamaño de una serie por los casos que fotografías al año y tendrás el crecimiento anual real. Esa cifra decide si la copia cabe donde crees.
- **Comprueba que la copia incluye los archivos, no solo la base de datos.** Es el fallo clásico: se respalda el programa, y las imágenes viven en una carpeta que nadie metió en el trabajo de copia.
- **Restaura una imagen de verdad, una vez.** Una copia que nunca se ha restaurado es una hipótesis.

![Ficha de paciente con la línea de tiempo filtrable por visitas, tratamientos, finanzas y comunicaciones](/screenshots/patient-timeline.png)

*Una línea de tiempo con autor y fecha en cada entrada: es lo que convierte un montón de archivos en un registro.*

## Quién puede abrirlas, y cómo se sabe

Los permisos sobre imágenes suelen ser más laxos que sobre el resto de la historia, y no hay ninguna razón para que lo sean. La foto de una arcada es un dato relativo a la salud igual que la anamnesis.

Dos cosas que conviene poder responder sin pensar: qué perfiles pueden ver las imágenes de un paciente que no están tratando, y si queda registro de quién abrió qué. Si la respuesta a la segunda es "no", el acceso a imágenes no está controlado, está permitido.

## Cuánto tiempo se guardan

Las fotos heredan el plazo de la historia clínica, porque son parte de ella. El artículo 17.1 de la Ley 41/2002 obliga a conservar la documentación clínica "como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial", y el 17.2 añade que también se conservará a efectos judiciales conforme a la legislación aplicable.

Ese "como mínimo" es importante por dos motivos. Varias comunidades autónomas han fijado plazos más largos en su propia normativa, y el plazo relevante para un litigio no es el mismo que el sanitario. Comprueba el que se aplica en la tuya antes de borrar nada.

Y al revés: guardar para siempre tampoco es la respuesta correcta. Conservar sin plazo ni criterio choca con la limitación del plazo de conservación del RGPD, y multiplica el daño de cualquier incidente.

## Diez minutos para saber cómo estás

1. **Coge el móvil con el que se hacen las fotos** y mira cuántas imágenes de pacientes hay en el carrete ahora mismo.
2. **Comprueba si ese carrete se sincroniza** con una cuenta personal de fotos en la nube.
3. **Abre una foto reciente y mira sus propiedades**: fecha, hora y si hay coordenadas.
4. **Busca todas las imágenes de un paciente concreto.** Cronometra cuánto tardas.
5. **Mira si tu copia de seguridad incluye la carpeta de imágenes** y cuándo se restauró por última vez.
6. **Busca el consentimiento de publicación** de la última foto que subisteis a redes. Si no aparece, esa es la tarea de esta semana.

En Dentalpin las imágenes se adjuntan al registro del paciente en lugar de vivir en una carpeta aparte, los permisos y el registro de accesos son los mismos que para el resto de la historia, y todo sale en un volcado estándar de PostgreSQL más los archivos, sin formatos propietarios de por medio. El código es abierto, así que eso se audita en vez de creerse, y las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/).

## Fuentes

Todas consultadas el 13 de septiembre de 2026.

- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, artículos 3, 15 y 17. [BOE-A-2002-22188](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188).
- Reglamento (UE) 2016/679 (RGPD), artículos 4.15 y 9, y considerando 51. [EUR-Lex CELEX 32016R0679](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
- Agencia Española de Protección de Datos, Informe 11/2007, "Publicación de imágenes, radiografías y moldes dentales". [aepd.es](https://www.aepd.es/documento/2007-0011.pdf). Dictado bajo la LO 15/1999, hoy derogada.
- CIPA DC-008 / DC-X008, "Exchangeable image file format for digital still cameras: Exif Version 2.32", apartado GPS Info IFD. [cipa.jp](https://www.cipa.jp/std/documents/e/DC-X008-Translation-2019-E.pdf).
