---
title: "Exportar los datos de tu software dental: el formato que debes exigir"
description: "Qué exportación pedir a tu software dental antes de firmar: los cuatro bloques que debe incluir, en qué formato y cómo comprobar cada año que funciona."
pubDate: 2026-08-26
tags: [exportar-datos, migracion, contratos, rgpd, historia-clinica]
---

Pide una exportación completa en formatos abiertos: la base de datos en CSV por tabla o un volcado SQL, los documentos y las imágenes como ficheros originales (PDF, JPG, DICOM) y un índice que ate cada fichero a su paciente. Que esté escrita en el contrato, con plazo, sin coste y lanzable por ti sin llamar a nadie. Y ábrela una vez al año, porque una exportación que nunca has abierto no es una salida, es una promesa.

El formato es lo único que decide si dentro de seis años eso sigue siendo una historia clínica o es una carpeta de archivos que ya nadie puede leer.

## Una exportación no es una copia de seguridad

Son dos cosas distintas y se confunden en casi todas las conversaciones con un comercial. Una copia de seguridad sirve para restaurar el sistema tal como estaba, dentro del mismo programa. Una exportación sirve para leer tus datos sin ese programa.

La prueba es sencilla: si tu proveedor desapareciera esta noche, ¿la copia de seguridad te serviría de algo? Si el fichero solo lo abre su software, la respuesta es no.

> **La pregunta no es "¿hacéis copias?", es "¿qué puedo abrir yo sin vosotros?".** La primera la contesta todo el mundo que sí. La segunda separa a los proveedores en dos grupos muy distintos.

Necesitas las dos cosas. La copia de seguridad es para el disco que se rompe un martes. La exportación es para el día que cambias de programa, para el día que el proveedor cierra y para el día que un juzgado te pide una historia de hace ocho años.

## La ley te da el derecho, pero no el formato

Cuando contratas un software de gestión, tú eres el responsable del tratamiento y el proveedor es el encargado. El artículo 28.3.g del RGPD obliga al encargado a que, a elección del responsable, suprima o devuelva todos los datos personales cuando termina la prestación del servicio, y borre las copias existentes salvo que la ley exija conservarlas.

Ese derecho es real y es tuyo. Lo que el artículo no dice, en ninguna parte, es en qué formato.

> **Un PDF de novecientas páginas cumple el artículo 28.3.g.** Devolver los datos y devolverlos en algo utilizable no son la misma obligación, y solo la primera está en el reglamento. La segunda tiene que estar en tu contrato.

Esa es toda la diferencia entre salir de un proveedor en dos semanas y salir en seis meses pagando a alguien para que teclee historias clínicas.

## La obligación de conservar te sobrevive al contrato

Aquí es donde el formato deja de ser una preferencia técnica. El artículo 17.1 de la Ley 41/2002 obliga a los centros sanitarios a conservar la documentación clínica "para la debida asistencia al paciente durante el tiempo adecuado a cada caso y, como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial".

Ese plazo no se detiene el día que cancelas la suscripción. Sigue corriendo, y quien responde eres tú, no el proveedor del que te acabas de ir.

Así que la pregunta correcta no es "¿me puedo llevar los datos?" sino "¿podré leerlos dentro de cinco años, en un ordenador que todavía no existe, sin licencia de nada?". Solo hay una familia de respuestas a eso, y son los formatos abiertos.

## Los cuatro bloques que tienen que salir

Casi todas las exportaciones incompletas fallan por el mismo sitio: sacan la agenda y la ficha administrativa, y dejan dentro lo clínico y los ficheros. Pide los cuatro por escrito.

| Bloque | Qué tiene que salir | Formato que sirve |
|---|---|---|
| Pacientes | Datos de contacto, aseguradora, alertas médicas, consentimientos vigentes | CSV o SQL, un registro por paciente con su identificador |
| Clínico | Odontograma, periodontograma, evoluciones con fecha y autor, planes de tratamiento, prescripciones | CSV o SQL, con diente, cara, estado y fecha en campos separados |
| Económico | Presupuestos, facturas con su numeración, pagos, saldos, estados | CSV o SQL, con el número de factura y el estado tal cual |
| Ficheros | Radiografías, fotos, PDFs, consentimientos firmados | Los ficheros originales, más un índice que los ate al paciente |

![Ficha de paciente con el odontograma, las alertas clínicas, el plan de tratamiento activo y la próxima cita](/screenshots/dental-chart.png)

*Un odontograma en pantalla: diente, cara, estado y fecha. Esos cuatro campos son los que tienen que sobrevivir a la exportación.*

El cuarto bloque es el que más veces llega roto. Te dan una carpeta con doce mil ficheros llamados `IMG_0043.jpg` y ninguna forma de saber de quién es cada uno. Un índice es una tabla de dos columnas, nombre de fichero e identificador de paciente, y sin ella la carpeta no vale nada.

## Formatos que sirven y formatos que no

La regla es una sola: ¿puedes abrirlo sin el programa que lo generó?

| Formato | Para qué | ¿Se lee sin el programa? |
|---|---|---|
| CSV | Tablas: pacientes, citas, facturas, evoluciones | ✓ Cualquier hoja de cálculo, cualquier lenguaje |
| SQL (volcado) | La base de datos entera, con sus relaciones | ✓ Con PostgreSQL o MySQL instalado |
| JSON o XML | Estructuras anidadas, planes con sus fases | ✓ Legible y documentable |
| PDF, JPG, PNG | Documentos firmados, fotos clínicas | ✓ Estándares, se abren en cualquier sitio |
| DICOM | Radiografías y volúmenes | ✓ Estándar internacional de imagen médica |
| PDF como volcado de datos | Nada. Es la ficha impresa | ✗ Legible por una persona, inservible para migrar |
| Formato propietario (.dat, .bak del proveedor) | Restaurar en su propio software | ✗ Solo lo abre quien lo escribió |
| Captura de pantalla o informe imprimible | Consultar algo suelto | ✗ No es dato, es una imagen del dato |

Sobre las radiografías conviene ser explícito. DICOM es, en palabras de la organización que lo mantiene, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", y lo gestiona la Medical Imaging & Technology Alliance, una división de NEMA. Si tu software guarda las radiografías en algo que no es DICOM ni un formato de imagen común, pregúntale hoy cómo salen.

## Las cláusulas que hay que pedir antes de firmar

Esto se negocia antes de la firma, cuando todavía te quieren como cliente. Después ya no hay conversación, hay tarifa.

1. **Alcance.** "Todos los datos introducidos por el cliente y todos los ficheros adjuntos", no "los datos de pacientes". La segunda redacción deja fuera lo clínico si les conviene.
2. **Formato.** Nombrado: CSV o volcado SQL para la base de datos, ficheros originales para los adjuntos, más un índice que los relacione.
3. **Documentación.** Una descripción de las tablas y los campos. Un CSV con cuarenta columnas llamadas `campo_17` es un jeroglífico, no una exportación.
4. **Autoservicio.** Que puedas lanzarla tú, desde el programa, cuando quieras. Si hay que abrir un ticket, el plazo lo deciden ellos.
5. **Plazo.** Si no es autoservicio, un número de días concreto desde la solicitud. Treinta es razonable.
6. **Coste.** Cero. Un cargo por exportar es un peaje de salida, y conviene verlo escrito antes de firmar, no después.
7. **Después de la baja.** Cuánto tiempo puedes seguir descargándola, y un borrado certificado por escrito cuando tú lo pidas, que es lo que el artículo 28.3.g te permite exigir.
8. **Si cierran.** Qué pasa con tus datos en un concurso de acreedores. La respuesta puede ser mala, pero necesitas conocerla.

![Listado de facturas con los estados emitida, pagada, parcialmente pagada, vencida y borrador](/screenshots/invoices.png)

*Cada factura lleva un estado y una fecha. Si la exportación se lleva los importes pero pierde el estado, la contabilidad hay que reconstruirla a mano.*

## Cómo probar la exportación una vez al año

Es una hora al año, y es la única forma de saber si lo que te prometieron existe.

1. **Lánzala y cronométrala.** Si tarda tres días, ya sabes algo importante.
2. **Abre un CSV.** Que tenga cabeceras legibles y acentos correctos. Si ves `Mart�nez`, la codificación está mal y lo mejor es decirlo ahora.
3. **Cuenta.** Número de filas en el CSV de pacientes contra el número de pacientes que muestra el programa. Si no cuadra, pregunta por qué antes de necesitarlo.
4. **Elige tres pacientes al azar** y compara la ficha en pantalla con lo que salió. Mira sobre todo el odontograma y las evoluciones.
5. **Abre una radiografía** desde la carpeta exportada, sin pasar por el programa.
6. **Comprueba el índice.** Coge un fichero de la carpeta y averigua de quién es usando solo la exportación.
7. **Guárdala cifrada y fuera de la clínica**, y apunta la fecha. Esa fecha es la respuesta cuando alguien pregunte cuándo se comprobó por última vez.

> **La primera vez que hagas esto vas a encontrar algo.** Casi siempre son las imágenes o el odontograma. Encontrarlo un martes cualquiera cuesta un correo. Encontrarlo el día que te vas cuesta la migración entera.

## Señales de alarma

Ninguna de estas es una acusación de mala fe. Todas son motivo para pedir una demostración antes de firmar.

- **"Te lo damos en PDF."** Sirve para leer, no para migrar. Pregunta qué más hay.
- **"Hay que pedirlo a soporte."** Entonces el plazo no es tuyo. Pide el número de días por escrito.
- **"Tiene un coste de extracción."** Es un peaje de salida. Negócialo ahora, que es cuando se puede.
- **"Las imágenes van aparte."** Aparte está bien. Sin índice, no.
- **"El odontograma no se exporta, se imprime."** Es la señal más clara de todas: el dato clínico estructurado se queda dentro.
- **No hay documentación de campos.** Sin ella, migrar cuesta lo mismo que teclear.

## Lo que puedes comprobar hoy mismo

No hace falta esperar a la renovación. Entra en tu software esta tarde, busca la opción de exportar y mira qué te ofrece. Si no la encuentras en menos de cinco minutos, esa ya es la respuesta.

Dentalpin es open source y la base de datos es PostgreSQL, así que la exportación no es una función que haya que pedir: puedes volcar la base de datos entera cuando quieras y los ficheros adjuntos están en disco tal como se subieron. Se instala en tu servidor o se usa en la versión gestionada, y los [precios](/es/precios/) están publicados.

## Fuentes

Todas consultadas el 26 de agosto de 2026.

- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, artículo 17.1. [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188)
- Reglamento (UE) 2016/679 (RGPD), artículo 28, apartado 3, letra g). [boe.es](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807)
- DICOM, *the international standard for medical images and related information*, gestionado por la Medical Imaging & Technology Alliance (división de NEMA). [dicomstandard.org](https://www.dicomstandard.org/)

Esto no es asesoramiento legal. Los plazos de conservación dependen del tipo de documento y de la normativa autonómica, y conviene confirmarlos con tu asesor antes de borrar nada.
