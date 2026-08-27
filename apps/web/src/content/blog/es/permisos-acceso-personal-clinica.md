---
title: "Accesos del personal en la clínica dental: quién puede ver qué"
description: "Cómo repartir los permisos en una clínica dental: qué ve recepción, qué ve el personal clínico y por qué la cuenta compartida lo estropea todo."
pubDate: 2026-08-27
tags: [permisos, seguridad, rgpd, historia-clinica, gestion]
---

Cada persona de la clínica debería ver solo lo que su trabajo necesita: recepción trabaja con la agenda, los datos de contacto y los cobros; el personal clínico entra en la historia y el odontograma; los informes de toda la clínica y la gestión de usuarios se quedan en el titular. La ley española lo dice casi con esas palabras, y cumplirlo se reduce a tres cosas: un usuario por persona, permisos por perfil y una lista escrita de quién tiene qué.

Esto no es asesoramiento legal. Todas las fuentes oficiales están al final, consultadas el 27 de agosto de 2026.

## La necesidad de saber ya está escrita en la ley

La Ley 41/2002, de autonomía del paciente, es explícita en su artículo 16. El apartado 4 dice que "el personal de administración y gestión de los centros sanitarios sólo puede acceder a los datos de la historia clínica relacionados con sus propias funciones".

No es una recomendación de buenas prácticas. Es el criterio con el que se mide un acceso indebido, y el apartado 6 cierra el círculo: "el personal que accede a los datos de la historia clínica en el ejercicio de sus funciones queda sujeto al deber de secreto".

El RGPD apunta en la misma dirección desde otro ángulo. Sus artículos 29 y 32.4 exigen que cualquier persona que actúe bajo la autoridad del responsable y tenga acceso a datos personales los trate únicamente siguiendo sus instrucciones.

> **La pregunta que resuelve casi todos los casos dudosos es "¿lo necesita para hacer su trabajo hoy?".** Si la respuesta es no, el acceso sobra, aunque la persona sea de máxima confianza y lleve quince años en la clínica.

## Cuatro perfiles cubren casi cualquier clínica

No hace falta un organigrama complicado. En la práctica, una clínica de uno a cinco sillones funciona con cuatro perfiles y algunas excepciones nominales.

| | Recepción | Higienista | Odontólogo | Titular |
|---|---|---|---|---|
| Agenda de la clínica | ✓ Completa | ✓ Completa | ✓ Completa | ✓ Completa |
| Datos de contacto y consentimientos | ✓ Editar | ~ Ver | ✓ Editar | ✓ Editar |
| Historia clínica y odontograma | ✗ Sin acceso | ✓ Sus pacientes | ✓ Completo | ~ Solo si trata |
| Radiografías e imágenes | ✗ Sin acceso | ✓ Sus pacientes | ✓ Completo | ~ Solo si trata |
| Presupuestos | ~ Ver y cobrar | ✗ Sin acceso | ✓ Crear y firmar | ✓ Completo |
| Facturación y caja del día | ✓ Sí | ✗ Sin acceso | ~ Lo suyo | ✓ Completo |
| Informes de toda la clínica | ✗ Sin acceso | ✗ Sin acceso | ~ Su producción | ✓ Completo |
| Usuarios y permisos | ✗ Sin acceso | ✗ Sin acceso | ✗ Sin acceso | ✓ Completo |

Dos matices que casi siempre hay que ajustar. El primero, recepción necesita ver el motivo de la cita para organizar el sillón, y eso no es lo mismo que abrir la historia: una etiqueta de tratamiento en la agenda basta.

El segundo, las alertas médicas son la excepción que confirma la regla. Una alergia a un anestésico tiene que verla quien va a tratar al paciente, sin buscarla, y por eso conviene que aparezca en la ficha antes que cualquier otra cosa.

![Agenda de la clínica en vista de día con las citas repartidas por sillón](/screenshots/schedule-day.png)

*Esta es la pantalla con la que trabaja recepción durante toda la jornada.*

## La cuenta compartida es el problema, no el permiso

La mayoría de las clínicas no tienen un problema de permisos mal repartidos. Tienen un usuario llamado "recepcion" que conocen cuatro personas, y otro llamado "clinica" con el que entra todo el mundo cuando hay prisa.

Con una cuenta compartida se cae todo lo demás. El registro de accesos deja de identificar a nadie, la baja de una persona obliga a cambiar la contraseña de todos, y ante una reclamación no puedes demostrar quién abrió una historia ni cuándo.

> **Un usuario por persona no es burocracia, es lo único que hace verificable el resto.** Cuesta diez minutos crear cinco usuarios y ahorra la conversación imposible de explicar quién consultó la ficha de un paciente que era también vecino de alguien del equipo.

El NCSC británico lo formula como política de "joiners, movers and leavers": el proceso de gestión de cuentas tiene que contemplar altas, cambios de puesto y bajas, de forma que el acceso "se revoque cuando ya no sea necesario, o se modifique para quien cambia de función".

## El registro de accesos es lo que convierte un permiso en prueba

Un permiso dice quién puede entrar. Un registro dice quién entró. Solo el segundo sirve cuando hay que responder a una reclamación o valorar si hubo una brecha.

Lo que conviene que quede registrado es corto:

- **Quién**, con el usuario nominal, nunca con un genérico.
- **Cuándo**, con fecha y hora.
- **A qué paciente**, no solo a qué pantalla.
- **Qué hizo**, distinguiendo consultar de modificar.
- **Desde dónde**, si la clínica permite acceso remoto.

Y una regla que se olvida: el registro tiene que ser difícil de borrar por quien tiene permisos de administración en la clínica. Si el titular puede editar el log, el log ya no prueba nada frente a terceros.

![Ficha de paciente en la pestaña de actividad, con alertas clínicas, plan activo y una línea de tiempo filtrable](/screenshots/patient-timeline.png)

*La actividad de un paciente reunida en una sola línea de tiempo, con filtros por visitas, tratamientos y comunicaciones.*

## Altas y bajas: el día que alguien entra y el día que se va

El riesgo no está en el permiso que das, está en el que nadie retira. Estos siete pasos cubren el ciclo completo.

1. **Crea el usuario a nombre de la persona**, con su correo real, antes de su primer día.
2. **Asigna el perfil, no permisos sueltos.** Los permisos individuales se acumulan y nadie recuerda por qué están.
3. **Firma el compromiso de confidencialidad** y guárdalo con el contrato.
4. **Activa el segundo factor** si el software se usa desde fuera de la clínica.
5. **Revisa el perfil cuando cambia de puesto**, quitando lo anterior. Un ascenso suma accesos y casi nunca resta.
6. **Desactiva el usuario el mismo día de la baja**, antes de que se vaya, no la semana siguiente.
7. **No borres el usuario**, desactívalo. Si lo eliminas, el registro de accesos se queda sin dueño y pierdes la trazabilidad de lo que hizo.

## Los casos que no encajan en el organigrama

Media clínica se sale de los cuatro perfiles, y son exactamente los accesos que nadie revisa.

| Quién | Qué necesita de verdad | Qué hay que hacer antes |
|---|---|---|
| Sustituto por dos semanas | Agenda e historia de los pacientes que trata | Usuario propio con fecha de caducidad, no el del titular |
| Estudiante en prácticas | Lo que vea el tutor con él delante | Usuario propio, sin acceso a facturación, y compromiso firmado |
| Gestoría o asesoría fiscal | Importes, fechas y series de factura | Contrato de encargado del tratamiento y acceso solo a facturación |
| Informático externo | Servidor y copias, no historias | Contrato de encargado, usuario nominal y acceso registrado |
| Laboratorio protésico | El trabajo, el paciente y las fechas | Enviar el caso, no dar acceso a la clínica |
| Antiguo socio | Nada, salvo lo que diga el acuerdo de salida | Desactivar el usuario y dejar constancia de la fecha |

La gestoría y el informático son encargados del tratamiento, y el RGPD exige un contrato con cada uno. Es el papel que más veces falta en una clínica que por lo demás lo tiene todo en orden.

## Revísalo una vez al año, en media hora

La CNIL francesa recomienda hacer "una revisión periódica, como mínimo anual, de las habilitaciones" para detectar cuentas sin uso y realinear los derechos con las funciones reales. Es la medida más barata de toda esta lista.

La revisión cabe en cuatro preguntas: quién tiene usuario y sigue trabajando aquí, quién cambió de puesto y conserva permisos del anterior, qué cuentas no se han usado en tres meses, y qué proveedores externos siguen entrando.

> **Escribe el resultado en una hoja con la fecha.** Esa hoja es la que enseñas si alguien pregunta cómo controlas los accesos, y es también la que te recuerda el año que viene lo que decidiste este.

## Lo que puede hacer el software y lo que no

Ningún programa impide que alguien mire la pantalla de al lado, y ninguno sustituye la conversación en la que se explica por qué la historia de un paciente conocido no se abre por curiosidad. Lo que sí puede hacer es que el reparto sea fácil de mantener y que quede registrado.

En Dentalpin los perfiles vienen definidos por rol, cada acceso a una ficha queda en el registro con usuario, fecha y paciente, y los usuarios se desactivan sin borrar el historial de lo que hicieron. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/).

## Fuentes

- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículos 14 y 16. [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188). Consultado el 27 de agosto de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 29 y 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 27 de agosto de 2026.
- CNIL, *Sécurité: Gérer les habilitations* (actualizado el 13 de marzo de 2024). [cnil.fr](https://www.cnil.fr/fr/securite-gerer-les-habilitations). Consultado el 27 de agosto de 2026.
- NCSC, *10 Steps to Cyber Security: Identity and access management*. [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management). Consultado el 27 de agosto de 2026.

Cada clínica tiene su reparto de funciones, y la valoración de un acceso concreto depende del caso. Contrástalo con tu asesoría o con tu delegado de protección de datos.
