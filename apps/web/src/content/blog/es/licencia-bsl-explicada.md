---
title: "Qué es la licencia BSL y qué te deja hacer"
description: "La BSL deja descargar, auditar y ejecutar el software en tu servidor, prohíbe revenderlo como SaaS y caduca: cada versión pasa a open source en cuatro años."
pubDate: 2026-09-01
tags: [licencias, open-source, bsl, contratos, software-dental]
---

La Business Source License te deja descargar el código, leerlo, modificarlo y ejecutarlo en tu propio servidor sin pagar nada. Prohíbe una sola cosa: revender ese mismo software como servicio comercial que compita con quien lo publica. Y tiene fecha de caducidad, porque cada versión pasa automáticamente a una licencia open source de verdad como máximo cuatro años después de publicarse.

Esa tercera parte es la que casi nadie lee y es la que decide si te conviene.

> **La BSL no es una licencia open source, y lo dice ella misma.** Su propio aviso legal abre así: «The Business Source License (this document, or the "License") is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License».

## Las cinco casillas que rellena quien publica

La BSL no es una licencia cerrada como la MIT o la GPL, donde el texto es siempre idéntico. Es una plantilla con cinco huecos, y quien publica el software los rellena.

Eso significa que «está bajo BSL» no te dice todavía qué puedes hacer. Tienes que mirar las casillas.

| Casilla | Qué define |
|---|---|
| Licensor | Quién publica el software y a quién le compras si necesitas una licencia comercial |
| Licensed Work | Qué software y qué versiones exactas cubre esta licencia |
| Additional Use Grant | Qué uso en producción se permite sin pagar |
| Change Date | La fecha en la que esa versión cambia sola de licencia |
| Change License | La licencia open source a la que pasa ese día |

Dos de esas cinco son la negociación entera: el **Additional Use Grant**, que marca hasta dónde puedes usarlo gratis en producción, y la **Change Date**, que marca cuándo deja de importar la restricción.

El ejemplo publicado por los propios autores de la licencia es MariaDB MaxScale. Su Additional Use Grant dice: «You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production». Menos de tres servidores, gratis. A partir de ahí, licencia comercial.

## Lo que la BSL permite y lo que no

El texto base concede copiar, modificar, crear obras derivadas, redistribuir y hacer uso no productivo. El uso en producción depende de la casilla que hemos visto.

| Acción | Bajo una licencia BSL |
|---|---|
| Descargar y leer todo el código | ✓ Permitido siempre |
| Modificarlo para tu caso | ✓ Permitido siempre |
| Redistribuirlo con la licencia adjunta | ✓ Permitido siempre |
| Usarlo en pruebas y en desarrollo | ✓ Permitido siempre |
| Usarlo en producción | ~ Solo hasta donde llegue el Additional Use Grant |
| Revenderlo como servicio comercial competidor | ✗ Necesitas licencia comercial |

La fila ámbar es la única que hay que leer con cuidado. «Producción» significa el uso real del que sale valor de negocio, es decir, tu clínica atendiendo pacientes de verdad, no una instalación de prueba en un portátil.

## Que no sea open source no es un defecto, pero sí un dato

La Open Source Initiative mantiene la definición de open source y su cláusula 6 dice que «la licencia no debe restringir a nadie el uso del programa en un campo de actividad específico». Una BSL restringe justamente eso: un campo de actividad, el de montar un SaaS competidor.

Por eso no aparece en la lista de licencias aprobadas por la OSI, y por eso su propio texto se adelanta a decirlo.

En la práctica esto te afecta en dos sitios concretos:

- **En un concurso público o un pliego** que exija «software de código abierto» con esas palabras, una BSL no cumple el requisito formal aunque el código esté publicado entero.
- **En la auditoría de tu informático**, donde no cambia nada: puede leer el código, compilarlo y verificar qué hace con los datos exactamente igual.

## La fecha de cambio es la cláusula que de verdad te protege

Aquí está lo que hace distinta a la BSL de un software propietario que además enseña el código. La restricción tiene caducidad y está escrita en el propio fichero.

La versión 1.1 de la licencia puso un tope: la fecha de cambio no puede pasar de cuatro años desde la primera distribución pública de esa versión. Y la licencia de destino tiene que ser GPL v2, GPL v3 o una compatible, es decir, una licencia open source real.

> **La fecha de cambio se aplica versión a versión, no al proyecto entero.** La versión que instalaste este año tiene su propia fecha, y la que se publique dentro de dos años tendrá la suya. Eso significa que el reloj de tu instalación empezó a correr el día que se publicó esa versión, no el día que la instalaste.

![Ficha de paciente con las alertas clínicas, el plan de tratamiento activo y la línea de tiempo filtrable por visitas, tratamientos, cobros y comunicaciones](/screenshots/patient-timeline.png)

*Años de historia clínica dentro de un programa. La fecha de cambio es lo que decide qué puedes hacer con ese programa si quien lo publica desaparece.*

Dicho de otra forma: la BSL te da un depósito en garantía que no has tenido que negociar. Si el proveedor cierra, la versión que estás ejecutando se convierte igualmente en open source el día que le tocaba, y cualquier informático puede mantenerla desde ahí. Con una licencia propietaria clásica, ese día no existe.

## Cómo leer cualquier licencia BSL en cinco minutos

No hace falta un abogado para la primera lectura. Abre el fichero `LICENSE` del repositorio y busca estas cinco cosas, en este orden:

1. **Comprueba la versión de la licencia.** Tiene que poner «Business Source License 1.1». La 1.0 no tenía el tope de cuatro años.
2. **Lee el Additional Use Grant entero.** Es la única frase que decide si tu uso real es gratis. Si no hay ninguna, el texto base solo concede uso no productivo.
3. **Mira la Change Date.** Puede ser una fecha fija o una fórmula («cuatro años desde la publicación»). Cualquier cosa por encima de cuatro años se sale de lo que permite la 1.1.
4. **Mira la Change License.** Si pone Apache 2.0, GPL o MPL, sabes exactamente qué tendrás ese día porque son licencias estándar con texto público.
5. **Busca el Licensed Work.** Si nombra versiones concretas, la licencia aplica a esas y las siguientes pueden cambiar de condiciones.

Si las cinco están rellenas y son legibles, ya sabes más de ese software que la mayoría de quien lo instala.

> **Esto no es asesoramiento legal.** Es una lectura de un texto público. Para un contrato firmado, para un pliego o para cualquier duda sobre tu caso concreto, la respuesta la tiene que dar un abogado.

## Qué cambia esto para una clínica

La mayoría de estas cláusulas están escritas pensando en empresas de software, no en un gabinete. Traducido a lo que te afecta:

- **La restricción de la BSL casi nunca te toca.** Prohíbe montar un SaaS competidor. Una clínica que usa el programa para atender a sus pacientes no está en ese supuesto, siempre que el Additional Use Grant cubra ese uso.
- **Puedes instalarlo en tu propio servidor** y ejecutarlo sin pedir permiso ni activar nada, que es la diferencia práctica más grande frente a un software con licencia por puesto.
- **Tu informático puede auditarlo de verdad.** Puede leer qué se guarda, dónde y qué sale hacia fuera, sin firmar un acuerdo de confidencialidad con nadie.
- **Tienes una salida escrita.** La fecha de cambio está en el fichero, no en una promesa comercial.

![Diagrama del stack autoalojado: navegador, Caddy en el puerto 443, frontend Nuxt, API y base de datos PostgreSQL](/diagrams/install-stack.svg)

*El montaje que permite una licencia de este tipo: todo corriendo en un servidor tuyo, sin activación contra el fabricante.*

## La licencia de Dentalpin, casilla por casilla

Dentalpin se publica bajo BSL 1.1, así que puedes hacerle exactamente las cinco comprobaciones de arriba. Su fichero `LICENSE` dice, literalmente:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** «You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work».
- **Change Date:** cuatro años desde la publicación de la obra licenciada.
- **Change License:** Apache License, Version 2.0.

En las preguntas frecuentes del producto lo resumimos así: gratis para cualquier clínica y cualquier desarrollador, con la única restricción de no lanzarlo como SaaS dental competidor, y con paso automático a Apache 2.0 a los cuatro años. Lo que cuesta y lo que incluye está en la [página de precios](/es/precios/).

## Fuentes

- [Business Source License 1.1, texto de la licencia](https://mariadb.com/bsl11/), MariaDB. Consultado el 1 de septiembre de 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Consultado el 1 de septiembre de 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Consultado el 1 de septiembre de 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Consultado el 1 de septiembre de 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Consultado el 1 de septiembre de 2026.
- Fichero `LICENSE` del repositorio de Dentalpin. Consultado el 1 de septiembre de 2026.
