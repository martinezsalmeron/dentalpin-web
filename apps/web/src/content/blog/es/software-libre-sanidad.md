---
title: "Software libre o propietario en sanidad: qué cambia para tu clínica"
description: "Qué decide de verdad la licencia de un programa sanitario, qué no decide, y cómo comprobar en diez minutos en qué condiciones tienes el código."
pubDate: 2026-08-27
tags: [software-libre, open-source, licencias, rgpd, contratos]
---

La licencia no decide si un programa es bueno para tu clínica. Decide tres cosas concretas: quién puede mantenerlo si el proveedor desaparece, si puedes ejecutarlo en tu propio servidor y bajo qué condiciones podrás seguir usándolo dentro de diez años.

Todo lo demás, el precio, el soporte, la seguridad real y quién responde ante el RGPD, depende del proveedor y de cómo despliegues el sistema, no del texto de la licencia. Confundir las dos listas es el error que hace que esta decisión se tome mal.

## Son tres categorías, no dos

La conversación habitual opone «libre» a «propietario» y se deja fuera la categoría donde está buena parte del sector hoy.

La Open Source Initiative mantiene la definición de referencia, en su versión 1.9. Su primera frase es la que más se olvida: «el código abierto no significa solo acceso al código fuente». La definición exige además que la licencia permita la redistribución, permita obras derivadas y no restrinja el uso «en un campo de actividad específico».

La Free Software Foundation lo formula como cuatro libertades: usar el programa como quieras, estudiar cómo funciona y cambiarlo, redistribuir copias y distribuir tus versiones modificadas. Para las libertades 1 y 3, dice el texto, «el acceso al código fuente es un requisito previo».

| | Libre / open source | Código disponible | Propietario |
|---|---|---|---|
| Ves el código | ✓ Sí, cualquiera | ✓ Sí, publicado | ✗ No, salvo depósito pactado |
| Puedes modificarlo | ✓ Sí | ✓ Sí | ✗ No |
| Puedes usarlo para cualquier fin | ✓ Sin restricción de campo | ~ Hay usos excluidos | ~ Lo que diga el contrato |
| Puedes redistribuirlo | ✓ Sí | ~ Con las mismas limitaciones | ✗ No |
| Cumple la definición de la OSI | ✓ Sí | ✗ No | ✗ No |
| Licencias típicas | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Contrato del fabricante |

La categoría del medio es real y crece. La Business Source License 1.1, por ejemplo, publica el código y permite modificarlo, pero reserva algunos usos y lo dice sin rodeos en su propio texto: «esta licencia no es una licencia de código abierto», y añade que la obra pasará a una licencia libre en una fecha pactada.

> **«Código público» y «open source» no son sinónimos.** Un proveedor puede enseñarte todo el código y seguir prohibiéndote usos concretos. No es engañoso, es una categoría distinta, y la única forma de saber en cuál estás es leer la licencia.

## Lo que la licencia sí decide

- **Quién puede mantener el programa cuando el proveedor no está.** Con el código y permiso para modificarlo, cualquier informático competente puede parchear el sistema. No es gratis ni inmediato, pero es posible, y esa es la diferencia que importa el día del anuncio.
- **Dónde se ejecuta.** Una licencia libre te permite instalarlo en tu servidor. Una licencia propietaria en la nube casi nunca lo permite, por mucho que pagues.
- **Si puedes auditar qué hace con los datos.** Ver el código es la única manera de comprobar qué se envía fuera y con qué frecuencia, en lugar de fiarte de la respuesta de un comercial.
- **Qué pasa dentro de diez años.** Una licencia libre no caduca. Una suscripción sí, y con ella el acceso al programa que dibuja tu historia clínica.

## Lo que la licencia no decide

Aquí es donde se cuelan casi todos los malentendidos.

- **Quién responde ante el RGPD.** El artículo 4.7 define como responsable del tratamiento a quien «determina los fines y medios del tratamiento», y el 24.1 le atribuye la obligación de demostrar el cumplimiento. Esa eres tú, uses el software que uses. Si alojas en un tercero, el artículo 28 exige contrato de encargado, y su apartado 3.g obliga a devolver o suprimir los datos al terminar.
- **Si el programa es un producto sanitario.** El Reglamento (UE) 2017/745 define producto sanitario como «todo instrumento, dispositivo, equipo, programa informático, implante, reactivo, material u otro artículo» destinado por el fabricante a alguno de los fines médicos que enumera. Lo decide la finalidad, nunca la licencia.
- **Si es seguro.** Que el código sea público lo hace auditable, no auditado. Son dos cosas distintas y solo la segunda protege a alguien.
- **Cuánto cuesta.** Hay software libre con contratos de soporte caros y software propietario barato.
- **Si tendrás a quien llamar un viernes a las ocho.** Eso lo decide un contrato de soporte, y existe en las dos categorías.

![Ficha de paciente con las alertas clínicas, el plan de tratamiento activo y la línea de tiempo filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*Años de historia clínica dentro de un programa. La licencia no cambia quién responde de estos datos: sigues siendo tú.*

## «Libre» no quiere decir «gratis»

La Free Software Foundation lo aclara en la primera línea de su definición: se trata «de libertad, no de precio», y propone pensar en «free» como en «libertad de expresión», no como en «barra libre». El mismo texto recuerda que puedes haber pagado por tus copias y conservar igualmente todas las libertades.

En la práctica, el dinero no desaparece, cambia de sitio.

| Partida | Licencia propietaria en la nube | Libre, en tu servidor |
|---|---|---|
| Licencia | ~ Cuota por usuario, sillón o clínica | ✓ Sin coste de licencia |
| Servidor y almacenamiento | ✓ Incluidos en la cuota | ✗ A tu cargo |
| Copias de seguridad | ✓ Del proveedor, con su política | ✗ Tuyas, y hay que probarlas |
| Actualizaciones | ✓ Automáticas | ~ Tuyas o de quien contrates |
| Soporte | ✓ Incluido o contratado | ~ Comunidad, o contrato aparte |
| Salir | ~ Depende de su exportación | ✓ Ya tienes datos y código |

Un servidor pequeño y bien hecho cuesta poco. El tiempo de la persona que lo actualiza, vigila las copias y responde cuando algo falla no es cero, y ese es el número que casi nadie pone en la hoja de cálculo. Antes de decidir, conviene leer qué implica de verdad [alojar tú mismo software sanitario](/es/blog/autoalojar-software-sanitario/).

## Cómo leer una licencia en diez minutos

No hace falta ser abogado. Hace falta abrir cinco cosas y anotar qué dicen.

1. **Busca el fichero LICENSE en su repositorio público.** Si no hay repositorio, la respuesta ya está: es propietario, y eso no lo descalifica, solo te dice qué preguntas hacer después.
2. **Comprueba si el nombre de la licencia figura en la lista de la OSI.** GPL, AGPL, Apache y MIT están. BSL y las licencias de tipo «source available» no.
3. **Busca las palabras «Use Limitation» o «Additional Use Grant».** Si hay usos excluidos, no es una licencia libre, por mucho que el código esté publicado.
4. **Busca una «Change Date».** Algunas licencias se convierten en libres pasado un plazo, normalmente cuatro años, y eso cambia el cálculo a largo plazo.
5. **Pregunta si el código publicado es el mismo que ejecutas.** Un repositorio con la versión de hace dos años no te sirve de red de seguridad.
6. **Pide una exportación completa antes de firmar.** El [formato que hay que exigir](/es/blog/exportar-datos-software-dental/) importa más que la licencia el día que quieras irte.

> **Si solo puedes hacer una comprobación, haz la última.** Una exportación abierta y probada te protege en las tres categorías. Una licencia libre sin datos exportables no salva una migración.

![Pantalla de informes de la clínica](/screenshots/reports.png)

*Los informes se reconstruyen desde los datos. Por eso la pregunta útil antes de firmar es en qué formato salen, no con qué licencia entraron.*

## Lo que cambia en diciembre de 2027

El Reglamento (UE) 2024/2847, de 23 de octubre de 2024, conocido como Reglamento de Ciberresiliencia, fija requisitos de ciberseguridad para los productos con elementos digitales. Su artículo 71 establece que se aplica desde el **11 de diciembre de 2027**, con el artículo 14 desde el 11 de septiembre de 2026 y el capítulo IV desde el 11 de junio de 2026.

Es una norma dirigida a fabricantes y distribuidores, no a tu clínica, pero cambia a quién puedes reclamar.

- **El software comercial queda dentro, sea libre o propietario.** Lo que decide es que se suministre en el marco de una actividad comercial.
- **El software libre no monetizado queda fuera.** El considerando 18 precisa que el suministro de programas libres y de código abierto «que no sean monetizados por sus fabricantes no debe considerarse una actividad comercial».
- **Aparece una figura nueva, el «administrador de comunidad de programas informáticos de código abierto»**, definida en el artículo 3.14 para las personas jurídicas que sostienen de forma continuada el desarrollo de proyectos libres destinados a actividades comerciales, con obligaciones más ligeras que las de un fabricante.

La lectura práctica para una clínica es corta: a partir de esa fecha, un proyecto comunitario sin empresa detrás y un producto comercial no responden igual, y conviene saber cuál de los dos estás instalando.

## Esto ya existe en sanidad

No es una hipótesis de laboratorio. GNU Health se describe como «el ecosistema libre de salud digital, donde la medicina social se encuentra con la informática sanitaria de última generación» y publica despliegues en hospitales y ministerios de varios países. OpenEMR se presenta como «la solución de historia clínica electrónica y gestión de consulta de código abierto más popular» y anuncia su certificación ONC en Estados Unidos.

Ninguno de los dos es un programa dental, y ese es justo el punto: la pregunta de la licencia se responde igual en cualquier especialidad.

## La pregunta que decide

Es una sola: **si mañana esta empresa desaparece, ¿qué me queda funcionando?**

Si la respuesta incluye el código, los datos en un formato abierto y un servidor que controlas, la licencia ha hecho su trabajo. Si no incluye ninguna de las tres, ninguna cláusula la va a sustituir.

Dentalpin se sitúa en la categoría del medio y conviene decirlo con precisión: el código es público y la licencia es la BSL 1.1, con una limitación de uso que impide ofrecer un SaaS competidor, y con conversión automática a Apache 2.0, una licencia libre, cuatro años después de cada publicación. Se instala en tu servidor, la base de datos es PostgreSQL y los [precios](/es/precios/) están publicados.

## Fuentes

Todas consultadas el 27 de agosto de 2026.

- Open Source Initiative, *The Open Source Definition*, versión 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, las cuatro libertades. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, texto de la licencia y aviso «is not an Open Source license». [mariadb.com](https://mariadb.com/bsl11/)
- Reglamento (UE) 2016/679 (RGPD), artículos 4.7, 24.1, 28.1 y 28.3.g. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679)
- Reglamento (UE) 2017/745 sobre los productos sanitarios, artículo 2.1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32017R0745)
- Reglamento (UE) 2024/2847 (Reglamento de Ciberresiliencia), considerando 18, artículo 3.14 y artículo 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R2847)
- GNU Health, página del proyecto. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, página del proyecto. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, fichero LICENSE del repositorio (Business Source License 1.1).

Esto no es asesoramiento legal. La calificación de un programa como producto sanitario y el reparto de responsabilidades en materia de protección de datos dependen del caso concreto. Consúltalo con tu asesor antes de tomar decisiones.
