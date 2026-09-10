---
title: "Qué ordenadores necesita una clínica dental"
description: "Cuántos equipos hacen falta en recepción y en cada gabinete, qué mínimos pide Windows 11 hoy, cuándo toca renovar y qué no merece la pena comprar."
pubDate: 2026-09-10
tags: [hardware, equipos, windows, infraestructura, gabinete]
---

Una clínica de dos o tres gabinetes necesita menos máquinas, y más baratas, de lo que suele presupuestarse: un equipo en recepción, uno por gabinete y poco más. Lo que decide el gasto no es el tamaño de la clínica, es una sola pregunta: si el software de gestión es un programa de Windows instalado en cada puesto o funciona en el navegador.

Con software de escritorio, cada puesto tiene que mover el programa y casi siempre hay un servidor detrás. En navegador, sirve cualquier equipo que abra Chrome o Firefox con soltura, y el trabajo pesado se lo lleva el servidor, esté en la clínica o fuera.

## La pregunta que decide el presupuesto

Antes de mirar un solo modelo, averigua en cuál de los dos mundos vas a estar. Cambia el número de máquinas, su potencia y lo que cuesta mantenerlas.

- **Software de escritorio.** El programa se instala en cada puesto y los datos viven en un servidor de la clínica. Necesitas ese servidor, una red cableada que lo alcance, copias de seguridad locales y una persona que lo mantenga. Los requisitos los publica el fabricante y hay que pedírselos por escrito antes de comprar nada.
- **Software en navegador.** El puesto solo necesita abrir una pestaña. Un portátil de gama media de hace cuatro años cumple, y lo que hay que cuidar es la conexión y la pantalla, no el procesador.
- **El caso mixto.** La gestión va en navegador y la imagen (radiología, escáner intraoral) sigue siendo un programa de Windows. Es la situación más común, y significa que el equipo del gabinete lo dimensiona el software de imagen, no el de gestión.

> **Pide los requisitos por escrito antes de firmar nada.** Un fabricante que no publica ni envía los requisitos mínimos de su producto está dejando que el gasto en equipos aparezca después de la firma, cuando ya no se puede negociar.

## Los mínimos de Windows 11, y lo que de verdad conviene comprar

Microsoft publica los requisitos mínimos de Windows 11, y son bajos. Sirven para que el sistema arranque, no para que una recepción trabaje con quince pestañas abiertas y la radiografía cargando.

| Componente | Mínimo publicado por Microsoft | Lo que conviene comprar |
|---|---|---|
| Procesador | 1 GHz, 2 o más núcleos, 64 bits | 4 núcleos o más, de los últimos cinco años |
| Memoria | 4 GB | 16 GB, y 8 GB como suelo absoluto |
| Almacenamiento | 64 GB | SSD de 256 GB o más, nunca disco mecánico |
| Firmware | UEFI con Secure Boot | Igual, y comprobado antes de comprar |
| TPM | Versión 2.0 | Versión 2.0, activado de fábrica |
| Gráficos | DirectX 12 con controlador WDDM 2.0 | El integrado del procesador basta |
| Pantalla | 720p de más de 9 pulgadas | 24 pulgadas y 1080p en recepción |

Los dos números que cambian el día a día son la memoria y el disco. Un equipo con 8 GB y SSD va mejor que uno con 16 GB y disco mecánico, y el salto de disco mecánico a SSD es la única compra que todo el mundo nota el primer día.

![Agenda del día en pantalla de recepción, con una columna por gabinete y los huecos libres visibles](/screenshots/schedule-day.png)

*La vista de día de una agenda, con una columna por gabinete: la pantalla que recepción tiene abierta desde que abre la clínica.*

## Dónde merece la pena el dinero y dónde no

No todos los componentes se notan igual desde el mostrador. Esta es la parte que más presupuesto ahorra.

| Dónde gastar | ¿Se nota en la clínica? | Por qué |
|---|---|---|
| SSD en lugar de disco mecánico | ✓ Todos los días | Arranque, apertura de fichas y búsquedas |
| Memoria de 8 a 16 GB | ✓ En recepción | Muchas pestañas y la imagen a la vez |
| Pantalla grande en recepción | ✓ Todos los días | Agenda de varios gabinetes sin desplazarse |
| Red por cable en el gabinete | ✓ Con imagen pesada | Una radiografía por wifi saturado se hace esperar |
| Segunda pantalla en recepción | ~ Según el flujo | Útil si se factura y se atiende a la vez |
| Procesador de gama alta | ✗ Casi nunca | El cuello de botella está en el disco y la red |
| Tarjeta gráfica dedicada | ✗ Casi nunca | Salvo software de imagen que la exija por escrito |
| Equipo "para sanidad" con recargo | ✗ No | No existe una certificación que justifique el precio por sí sola |

La fila del wifi es la que más discusiones ahorra. Un gabinete que envía imágenes grandes va por cable siempre que se pueda, y si no se puede, el punto de acceso va en el pasillo del gabinete, no en el despacho del fondo.

## La fecha que decide cuándo renovar

Windows 10 dejó de recibir soporte el 14 de octubre de 2025. Desde entonces Microsoft no publica actualizaciones de seguridad ni correcciones para esos equipos, salvo que estén inscritos en el programa de actualizaciones de seguridad extendidas.

> **El programa de extensión para consumidores llega hasta el 12 de octubre de 2027**, y la inscripción sigue abierta hasta esa misma fecha (consultado el 10 de septiembre de 2026). Es una prórroga con fecha de caducidad, no una alternativa a renovar: solo trae parches de seguridad críticos, sin soporte técnico ni mejoras.

Para una clínica eso convierte la renovación en un calendario, no en una urgencia. Un equipo que no puede pasar a Windows 11 por falta de TPM 2.0 o de Secure Boot tiene fecha de sustitución conocida, y se puede repartir el gasto en dos ejercicios en lugar de cambiar cinco máquinas el mismo mes.

## Home o Pro: la diferencia que sí importa con datos de pacientes

En la tienda parecen el mismo ordenador con dos etiquetas. Para una clínica no lo son, y la diferencia se llama cifrado de disco.

> **BitLocker no se activa en Windows Home.** Microsoft lo lista como disponible en Pro, Enterprise, Pro Education y Education. Un portátil de recepción sin cifrar que desaparece un viernes es una brecha de datos de pacientes; cifrado, es un problema de reponer el equipo.

Dos matices que conviene conocer antes de discutirlo con el proveedor:

- **El cifrado de dispositivo sí existe en todas las ediciones**, pero solo se activa automáticamente en equipos que cumplen ciertos requisitos, y a partir de Windows 11 versión 24H2 esos requisitos se relajaron, así que hay más máquinas que lo admiten.
- **BitLocker con verificación de integridad al arrancar necesita TPM 1.2 o posterior.** Sin TPM se puede cifrar igual, pero hace falta arrancar con una llave en un USB, que en un mostrador acaba pegada al equipo con celo y deja de proteger nada.

Pide la edición Pro en el presupuesto del equipo. Cambiar de Home a Pro después se puede, pero se paga aparte y siempre cae en la semana peor.

## Recepción, gabinete y despacho piden cosas distintas

Un solo modelo para toda la clínica es cómodo de comprar y malo de usar. Tres perfiles cubren cualquier clínica pequeña.

1. **Recepción.** Es el puesto que más horas trabaja y el que más ventanas abre. Pantalla grande, 16 GB, SSD y teclado decente. Aquí es donde el ahorro se nota en forma de esperas delante del paciente.
2. **Gabinete.** Lo dimensiona el software de imagen, si lo hay. Sin imagen, basta un equipo modesto o una tableta con teclado. Lo que sí hace falta es que se limpie: superficie lisa, sin ranuras, y un soporte que lo aleje de la zona de salpicadura.
3. **Despacho o dirección.** Un portátil, para poder mirar los números fuera de la clínica sin llevarse una copia de la base de datos en un pendrive.

![Ficha de paciente abierta en el odontograma, con alertas clínicas y el plan de tratamiento activo](/screenshots/dental-chart.png)

*La ficha del paciente tal como se ve durante la visita: odontograma, alertas y plan activo en la misma pantalla.*

## El servidor: solo si de verdad hace falta

Un servidor en la clínica tiene sentido en dos casos: cuando el software de gestión es de escritorio y lo exige, o cuando has decidido alojar tú mismo un software web para que los datos no salgan del edificio.

En cualquiera de los dos, lo que hace falta es menos espectacular de lo que se vende:

- **Un equipo dedicado, no el de recepción.** Compartir el servidor con un puesto de trabajo significa que un reinicio a media mañana deja a toda la clínica parada.
- **Disco SSD y copia fuera del edificio.** El servidor no es la copia de seguridad. Es exactamente la máquina que se estropea.
- **Un SAI.** Un corte de luz a mitad de escritura es la forma más rápida de corromper una base de datos, y un SAI cuesta menos que una tarde de recuperación.
- **Alguien a quien llamar.** Escrito, con horario y tiempo de respuesta. Un servidor sin mantenimiento acordado es un servidor sin mantenimiento.

## Antes de comprar, esta secuencia

1. **Pregunta al proveedor de software sus requisitos mínimos y recomendados**, por escrito, incluido el software de imagen.
2. **Inventaría lo que ya tienes**: procesador, memoria, disco, edición de Windows y si admite Windows 11.
3. **Separa lo que se actualiza de lo que se sustituye.** Muchos equipos solo necesitan un SSD y memoria, y eso es una tarde, no un presupuesto.
4. **Decide la edición**, Pro donde haya datos de pacientes.
5. **Mira la red antes que los equipos.** Si el gabinete va por wifi y la imagen tarda, ningún ordenador nuevo lo arregla.
6. **Compra por perfiles**, no un modelo único para todos los puestos.
7. **Guarda las facturas y los números de serie en el mismo sitio que el inventario.** El día del incidente, esa lista vale más que el equipo.

## Lo que no hace falta comprar

Cuatro gastos aparecen en casi todos los presupuestos y casi nunca se justifican en una clínica pequeña: la tarjeta gráfica dedicada sin un requisito escrito que la pida, el procesador de gama alta para abrir un navegador, el equipo con recargo por ser "para sanidad" y el servidor que se compra por si acaso antes de saber si el software lo necesita.

El quinto es más caro que los cuatro anteriores juntos: renovar todos los puestos a la vez porque nadie miró el inventario hasta que un equipo dejó de arrancar.

Si el software de gestión funciona en el navegador, los requisitos del puesto son los del navegador y poco más. Dentalpin es de ese tipo: se usa desde Chrome o Firefox en cualquier equipo razonable, y puede alojarse en la clínica o fuera, así que la decisión de servidor la tomas tú y no la impone la licencia. Los planes están en [precios](/es/precios/).

Esto no es asesoramiento técnico para tu instalación concreta. Los requisitos de tu software de imagen mandan sobre cualquier recomendación general de este artículo.

## Fuentes

- Microsoft, requisitos del sistema de Windows 11: <https://www.microsoft.com/en-us/windows/windows-11-specifications> (consultado el 10 de septiembre de 2026).
- Microsoft, fin del soporte de Windows 10 el 14 de octubre de 2025: <https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025> (consultado el 10 de septiembre de 2026).
- Microsoft, programa de actualizaciones de seguridad extendidas de Windows 10: <https://www.microsoft.com/en-us/windows/extended-security-updates> (consultado el 10 de septiembre de 2026).
- Microsoft, BitLocker: ediciones compatibles y requisitos de sistema: <https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/> (consultado el 10 de septiembre de 2026).
