---
title: "Self-hosting con tu informático de confianza: qué acordar"
description: "Lo que hay que dejar por escrito con el informático que lleva tu servidor: contrato de encargado, copias restauradas, accesos, tiempos de respuesta y salida."
pubDate: 2026-09-03
tags: [autoalojado, rgpd, copias-seguridad, proveedores, clinica-dental]
---

Si tu clínica se autoaloja y del servidor se encarga un informático externo, hay cuatro cosas que tienen que estar por escrito antes de que toque nada: el contrato de encargado del tratamiento, obligatorio en cuanto accede a datos de pacientes; qué significa exactamente «hago copias», con una restauración de prueba fechada; quién tiene las credenciales de administrador y dónde están los datos; y en cuántas horas contesta el lunes que la agenda no abre. Lo demás son detalles.

Nada de esto exige veinte páginas de contrato. Cabe en dos folios y en una reunión de media hora, y esa reunión es más barata que la primera noche sin agenda.

## Tu informático es encargado del tratamiento desde el primer día

La clínica es responsable del tratamiento de los datos de sus pacientes. La persona o empresa que administra el servidor donde están esos datos es encargada del tratamiento, aunque nunca abra una historia clínica y aunque lleve quince años arreglándote las impresoras.

La Agencia Española de Protección de Datos lo dice sin rodeos: «Las relaciones entre el responsable y el encargado deben formalizarse en un contrato o en un acto jurídico que vincule al encargado respecto al responsable». El artículo 28.9 del RGPD añade la forma: por escrito, incluido el formato electrónico.

> **Un acuerdo verbal con el informático de siempre no es un contrato de encargado.** La confianza personal no sustituye al documento, y quien responde ante la autoridad de control si falta es la clínica, no él.

Esto no es papeleo defensivo. El contrato es donde por fin se escribe quién hace las copias, cada cuánto se actualiza el servidor y qué pasa el día que dejáis de trabajar juntos, que son exactamente las tres cosas que nadie recuerda haber acordado cuando hacen falta.

![Esquema de una instalación autoalojada: el navegador entra por HTTPS a Caddy, que reparte /api/* al backend y el resto al frontend Nuxt; el backend habla con PostgreSQL](/diagrams/install-stack.svg)

*Un servidor, cuatro procesos y una base de datos. Cada caja del esquema es algo que alguien tiene que mantener.*

## Los siete puntos que el artículo 28 ya te escribe

El RGPD no te deja el contenido a la imaginación. El artículo 28.3 enumera lo que el contrato tiene que cubrir, y traducido a la clínica queda así:

- **Instrucciones documentadas.** El informático trata los datos solo siguiendo lo que la clínica le indica, y las indicaciones se dejan por escrito, aunque sea en un correo.
- **Confidencialidad.** Quien accede al servidor está obligado a la confidencialidad, incluido el becario que va un martes a cambiar un disco.
- **Seguridad.** Las medidas técnicas del artículo 32, con nombre y apellidos: cifrado, control de accesos, copias, actualizaciones.
- **Subcontratación.** Si el servidor está en un centro de datos de terceros o las copias van a un proveedor de almacenamiento, eso es subcontratación y necesita tu autorización. La CNIL francesa lo ilustra bien: o autorizas por adelantado una lista concreta de subencargados, o pactas que te avisen con antelación de cualquier cambio y puedas oponerte.
- **Ayuda con los derechos de los pacientes.** Cuando alguien pide su historia o su borrado, el informático tiene que poder sacarla del sistema.
- **Devolución o borrado al terminar.** Al acabar el servicio, los datos se devuelven o se destruyen, a tu elección.
- **Auditoría.** El proveedor pone a tu disposición la información necesaria para demostrar que cumple, y admite comprobaciones.

Ese último punto tiene una lectura práctica que muchas clínicas se saltan: la obligación de elegir un encargado con garantías suficientes no se agota el día de la firma. Es continua. Si en dos años no has vuelto a preguntar por las copias, no las has comprobado.

## Lo que se dice de palabra y lo que debería estar escrito

| Compromiso | Cómo suele acordarse | Cómo debería figurar |
|---|---|---|
| Copias de seguridad | ~ «Hago copias todas las noches» | ✓ Frecuencia, destino, cifrado y quién recibe el aviso si falla |
| Restauración | ✗ Nunca se ha probado | ✓ Una prueba anual documentada, con fecha y resultado |
| Actualizaciones | ~ «Cuando salga algo importante» | ✓ Ventana mensual acordada y aviso previo de las mayores |
| Tiempo de respuesta | ✗ «Llámame y lo miro» | ✓ Horario, canal y horas de respuesta según gravedad |
| Accesos | ~ Una cuenta de administrador compartida | ✓ Cuentas nominales y baja el mismo día que alguien se va |
| Fin de la relación | ✗ Sin previsión | ✓ Devolución o borrado de los datos y entrega de credenciales |

Ninguna de las casillas de la derecha cuesta dinero. Cuestan una conversación incómoda de veinte minutos, una vez.

## «Hago copias todas las noches» no dice nada todavía

El artículo 32.1 del RGPD no pide copias de seguridad. Pide dos cosas más exigentes: «la capacidad de restaurar la disponibilidad y el acceso a los datos personales de forma rápida en caso de incidente físico o técnico», y «un proceso de verificación, evaluación y valoración regulares de la eficacia» de las medidas.

Leído literalmente, eso significa que una copia que nadie ha restaurado nunca no demuestra nada, porque lo que la norma mide es la restauración, no el fichero.

> **La copia no se prueba el día que la necesitas.** Se prueba un martes cualquiera, sin prisa, restaurando sobre un entorno aparte y comprobando tres números: cuántos pacientes hay, cuál es la última factura y cuál fue la última cita registrada.

Pide que esa prueba sea un entregable con fecha, no una promesa. Un correo de dos líneas al año que diga «restaurada la copia del 14 de mayo en un servidor de pruebas, 3.412 pacientes, última factura 2026/0871» vale más que cualquier cláusula.

## Dos fechas que ya están en el calendario, las mires o no

Hay mantenimiento que no depende de la opinión de nadie porque tiene fecha publicada.

1. **La versión mayor de PostgreSQL.** El proyecto da cinco años de soporte a cada versión mayor desde su publicación. PostgreSQL 14 recibe su última actualización el 12 de noviembre de 2026 y la 15 el 11 de noviembre de 2027. Si tu base de datos está en una de ellas, la migración ya tiene fecha límite y conviene que tenga presupuesto.
2. **El certificado.** Los certificados de Let's Encrypt duran 90 días y se recomienda renovarlos cada 60. La propia entidad avisa de que no hay forma de ajustar esa duración y de que no hay excepciones. Existe además un programa opcional de certificados de seis días, que se renuevan cada tres. Todo eso está automatizado hasta el día que alguien cierra el puerto 80 y la renovación deja de funcionar en silencio.

Las dos fechas van al contrato como ventana de mantenimiento, no como favor. Y la segunda va con aviso: quien vigila que la renovación siga ocurriendo.

## Las llaves son de la clínica, aunque las use él

Este es el punto donde más clínicas se quedan atrapadas, y no por mala fe del proveedor sino porque nadie lo habló.

- **La contraseña de administrador está en el gestor de contraseñas de la clínica**, no solo en el portátil del informático.
- **Cuentas nominales, nunca una cuenta «admin» compartida.** Si tres personas usan la misma, el registro de accesos no sirve para nada el día que hay que mirarlo.
- **El dominio y el DNS a nombre de la clínica.** Un dominio registrado por el proveedor es una negociación futura disfrazada de comodidad.
- **Una copia de seguridad en un sitio que él no controla.** No es desconfianza: si un ransomware entra por su equipo, sus copias y las tuyas están en el mismo lado.
- **Bajas el mismo día.** Cuando alguien deja la empresa proveedora o la clínica, su acceso se retira ese día, y eso se pacta por adelantado para que no haya que pedirlo como un favor.

![Pantalla de inicio con las citas del día, quién está en la clínica, los pagos vencidos y los últimos pacientes atendidos](/screenshots/home.png)

*Esta es la pantalla que tiene que estar levantada a las ocho y media. Todo lo que se acuerda con el informático existe para que aparezca.*

## El tiempo de respuesta, en horas y en cristiano

Un SLA para una clínica de tres sillones no necesita vocabulario de multinacional. Necesita tres filas.

- **La clínica no puede trabajar.** La agenda no abre, el servidor no responde. Aquí se pacta un teléfono, no un correo, y un número de horas.
- **Funciona con molestias.** Una impresora, un puesto, una integración caída. Se pacta el mismo día o el siguiente laborable.
- **Consulta o mejora.** Se pacta una semana y da igual.

Añade dos detalles que se olvidan siempre: qué pasa en agosto y en Navidad, y quién contesta si el informático está de baja. Un proveedor de una sola persona es perfectamente válido para una clínica pequeña, siempre que la suplencia esté escrita en algún sitio.

## La cláusula de salida se firma al entrar

Cambiar de informático es normal y no tiene por qué ser un drama. Lo es cuando no se previó.

El artículo 28.3.g del RGPD ya te da el derecho: al terminar el servicio, los datos se devuelven o se borran. Concrétalo mientras la relación es buena.

1. **En qué formato se entrega la base de datos**, con el volcado completo y no una exportación parcial a Excel.
2. **Qué credenciales se traspasan** y en cuántos días.
3. **Quién acompaña la transición** y cuántas horas están incluidas.
4. **Prueba de borrado.** La CNIL recomienda que la destrucción incluya todas las copias en los sistemas del proveedor y que quede constancia escrita. Pídelo también tú.

> **Ninguna de estas cuatro se negocia bien el día que te vas.** Se negocian el primer día, cuando a los dos os interesa que la relación empiece bien.

## La reunión de media hora

Si mañana quieres dejarlo resuelto, esta es la agenda:

1. Firmar el contrato de encargado del tratamiento, con los siete puntos del artículo 28.3.
2. Escribir dónde se guardan las copias, cada cuánto y quién recibe el aviso de fallo.
3. Poner fecha a la próxima restauración de prueba.
4. Anotar la versión de PostgreSQL que corre hoy y su fecha de fin de soporte.
5. Meter la contraseña de administrador en el gestor de contraseñas de la clínica.
6. Convertir las cuentas compartidas en cuentas nominales.
7. Acordar las tres franjas de tiempo de respuesta y la suplencia en vacaciones.
8. Escribir la cláusula de salida.

Nada de esta lista requiere saber informática. Requiere que alguien de la clínica se siente media hora con la persona que administra el servidor.

## Dónde encaja Dentalpin

Dentalpin es software de gestión dental open source que se instala en tu propio servidor con `docker compose`, así que este acuerdo aplica igual que a cualquier otra instalación autoalojada: el software no cobra licencia, y el trabajo que sí cuesta dinero es el que acabas de leer. Si prefieres ver primero qué incluye antes de decidir quién lo opera, está en la [página de precios](/es/precios/), y el proceso de instalación está descrito paso a paso en [instalar Dentalpin en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/).

Este artículo es orientación general, no asesoramiento jurídico. Para el contrato concreto de tu clínica, contrasta con tu asesor.

## Fuentes

- Agencia Española de Protección de Datos, [«¿Cuál sería el contenido del contrato de encargo de tratamiento?»](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/8-responsable-y-encargado-del-tratamiento/FAQ-0238-cual-seria-el-contenido-del-contrato-de-encargo-de-tratamiento), consultado el 3 de septiembre de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 28.1, 28.3, 28.9 y 32.1. Texto oficial consultado en [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) el 3 de septiembre de 2026.
- CNIL, [«Sous-traitance: exemple de clauses»](https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses), consultado el 3 de septiembre de 2026, sobre autorización de subencargados y prueba escrita de la destrucción de datos.
- PostgreSQL Global Development Group, [«Versioning Policy»](https://www.postgresql.org/support/versioning/), consultado el 3 de septiembre de 2026.
- Let's Encrypt, [«FAQ»](https://letsencrypt.org/docs/faq/), consultado el 3 de septiembre de 2026.
