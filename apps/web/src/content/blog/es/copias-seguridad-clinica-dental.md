---
title: "Copias de seguridad en una clínica dental: qué guardar y cada cuánto"
description: "Qué entra en la copia de seguridad de una clínica dental, cada cuánto hacerla, dónde guardarla y cómo comprobar que se puede restaurar antes de necesitarlo."
pubDate: 2026-08-10
tags: [copias-de-seguridad, seguridad, rgpd, gestion]
---

Copia la base de datos y los archivos adjuntos todos los días, guarda tres copias en dos soportes distintos con una de ellas fuera de la clínica, y restaura una al menos una vez al año para comprobar que funciona. Si nunca has restaurado, no tienes una copia de seguridad: tienes un fichero que supones que sirve.

Lo que sigue es qué entra en esa copia, cada cuánto tiene sentido hacerla y cómo comprobarla sin depender de que alguien te lo confirme por teléfono.

## Qué entra en la copia, y qué se queda fuera casi siempre

Una clínica dental no guarda sus datos en un sitio, los guarda en dos. La base de datos lleva los pacientes, la agenda, el odontograma, los planes de tratamiento, los presupuestos y las facturas. Las imágenes, los PDF firmados y los escaneados viven como archivos, muchas veces en otra carpeta o en otro servicio.

La copia que solo incluye la base de datos parece completa hasta el día que la restauras y descubres que las radiografías no están.

| Qué guardar | Por qué importa | ¿Entra por defecto? |
|---|---|---|
| Base de datos | Pacientes, agenda, odontograma, presupuestos, facturación | ✓ Casi siempre |
| Radiografías e imágenes clínicas | Son parte de la historia clínica y ocupan casi todo el espacio | ✗ Muchas veces se excluyen por tamaño |
| Consentimientos y documentos firmados | Son la prueba de que el consentimiento existió | ~ Según dónde los guarde el software |
| Configuración del sistema | Sin ella la restauración tarda horas más | ✗ Casi nunca |
| Claves y certificados de facturación | Sin ellos no puedes volver a emitir | ✗ Casi nunca |

> **Comprueba el tamaño de la copia antes de fiarte de ella.** Una clínica con cinco años de radiografías no cabe en un archivo de 200 MB. Si la copia de anoche pesa mucho menos de lo que ocupan tus datos, algo se está quedando fuera y ya sabes qué.

![Historia clínica de un paciente con odontograma, alertas clínicas y plan de tratamiento activo](/screenshots/dental-chart.png)

*Esto es lo que una restauración tiene que devolver entero, no solo el listado de pacientes.*

## Cada cuánto: la pregunta real es cuánto trabajo puedes perder

La frecuencia no se decide por costumbre, se decide por la cantidad de trabajo que estás dispuesto a repetir. Entre la última copia y el fallo hay un hueco, y ese hueco lo rellena alguien a mano con lo que recuerde.

| Frecuencia | Lo que pierdes en el peor caso | Para quién tiene sentido |
|---|---|---|
| Semanal | Hasta seis días de historia clínica y cobros | ✗ Insuficiente para cualquier clínica en activo |
| Diaria, de noche | Un día de trabajo | ~ El mínimo razonable |
| Cada pocas horas | Media mañana | ✓ Clínicas con varios sillones y mucha facturación |
| Continua | Minutos | ✓ Si el proveedor la ofrece sin trabajo extra |

Pon número a lo que cuesta ese hueco. Sillones por horas por facturación media es la cuenta que convierte esta decisión en una comparación económica en vez de en una cuestión de sensaciones.

## La regla 3-2-1, y por qué la copia en el mismo cuarto no cuenta

CISA, la agencia estadounidense de ciberseguridad, resume la práctica aceptada en tres números: tres copias del archivo (una principal y dos de respaldo), en dos tipos de soporte distintos y con una copia fuera del edificio.

- **Tres copias** porque la segunda también falla. Un disco de respaldo comprado el mismo día que el original tiende a morir en la misma época.
- **Dos soportes distintos** porque un mismo modo de fallo se lleva los dos iguales por delante, desde un fallo de firmware hasta un pico de tensión.
- **Una fuera de la clínica** porque un robo, un incendio o una inundación se llevan a la vez el servidor y el disco USB del cajón de al lado.
- **Una copia sin conexión o inmutable**, porque el ransomware cifra todo lo que el ordenador infectado puede escribir, y eso incluye el disco de copias que está siempre enchufado.

| | Disco USB en la clínica | NAS en la clínica | Copia cifrada fuera |
|---|---|---|---|
| Fallo del disco principal | ✓ Protege | ✓ Protege | ✓ Protege |
| Robo o incendio del local | ✗ Se pierde con el original | ✗ Se pierde con el original | ✓ Protege |
| Ransomware | ~ Solo si estaba desconectado | ✗ Suele cifrarse también | ✓ Si es inmutable o versionada |
| Trabajo mensual que exige | Cambiar y sacar el disco | Revisar que sigue copiando | ✓ Ninguno si está automatizada |

## Lo que la ley pide, y lo que no

El RGPD no habla de discos, habla de recuperación. El artículo 32.1.c exige poder restaurar la disponibilidad y el acceso a los datos personales de forma rápida en caso de incidente físico o técnico, y el 32.1.d exige verificar y evaluar regularmente la eficacia de esas medidas. Una copia que nadie ha probado no cumple ninguno de los dos.

A eso se suma el plazo de conservación. La Ley 41/2002 obliga a conservar la documentación clínica "como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial". Tu estrategia de copias tiene que aguantar ese plazo, incluido el supuesto de que cambies de software por el camino.

> **Conservar cinco años no es lo mismo que tener cinco años de copias.** Son dos obligaciones distintas: una copia sirve para recuperarte de un fallo, el archivo sirve para responder a un paciente o a una inspección dentro de cuatro años. Un software que solo te deja restaurar el último mes no cubre la segunda.

![Listado de facturas con los estados emitida, pagada, parcial, vencida y borrador](/screenshots/invoices.png)

*La facturación tiene su propio plazo de conservación y también tiene que sobrevivir a la restauración.*

## La prueba de restauración, paso a paso

Es media hora al año y es lo único que distingue una copia de seguridad de una carpeta con archivos grandes.

1. **Elige una copia al azar**, no la de anoche. La de hace tres semanas dice mucho más sobre si el proceso funciona de forma sostenida.
2. **Restáurala en un equipo o servidor distinto**, nunca encima del sistema en producción.
3. **Cronometra cuánto tarda** desde que empiezas hasta que la agenda de mañana se abre. Ese número es tu tiempo real de recuperación y casi siempre sorprende.
4. **Abre tres pacientes concretos** y comprueba que están el odontograma, las radiografías y el último presupuesto.
5. **Comprueba la facturación del último trimestre**, que es la parte que nadie mira hasta que falta.
6. **Anota la fecha, el tiempo y quién lo hizo.** Ese registro es también tu prueba de diligencia frente al artículo 32.

## Los fallos que dejan una copia en nada

- **Nadie mira los avisos de error.** Un trabajo de copia que lleva once semanas fallando manda un correo cada noche a una dirección que ya no lee nadie.
- **La copia está en la misma máquina**, en otra carpeta o en otra partición. Eso protege de un borrado accidental y de nada más.
- **El disco de copias vive enchufado** al mismo equipo, así que el ransomware lo cifra con el resto.
- **La copia no está cifrada.** Un disco perdido con la historia clínica de la clínica entera es una brecha de datos notificable, no un contratiempo.
- **Nadie sabe restaurarla salvo el informático** que la montó y ya no trabaja allí. Escribe el procedimiento y guárdalo fuera del sistema que hay que restaurar.
- **La copia depende del proveedor y nadie ha pedido nunca un export propio.** Si el proveedor desaparece, la copia desaparece con él.

En Dentalpin la copia es un volcado estándar de PostgreSQL más la carpeta de archivos, así que puedes automatizarla con las herramientas que ya uses y restaurarla sin pedirnos permiso ni esperar a nadie. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/), y si quieres probar la restauración antes de decidir, [instalarlo lleva tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/).

## Fuentes

- Reglamento (UE) 2016/679 (RGPD), artículo 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 10 de agosto de 2026.
- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículo 17. [BOE-A-2002-22188](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188). Consultado el 10 de agosto de 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Consultado el 10 de agosto de 2026.

Esto no es asesoramiento legal. Los plazos de conservación concretos dependen de tu comunidad autónoma y de tu caso, y conviene confirmarlos con tu asesoría o tu colegio profesional.
