---
title: "Auditoría de accesos a la historia clínica: qué registrar y cómo revisarlo"
description: "Qué campos debe guardar el registro de accesos a la historia clínica, cuánto tiempo conservarlo y cómo revisarlo cada mes sin que ocupe la mañana."
pubDate: 2026-08-27
tags: [historia-clinica, seguridad, rgpd, auditoria, gestion]
---

Un registro de accesos a la historia clínica tiene que guardar cinco cosas cada vez que alguien abre una ficha: quién entró, cuándo, a qué paciente, qué hizo y desde dónde. Se conserva entre seis meses y un año, se protege para que nadie pueda editar sus propias líneas, y se revisa de vez en cuando, porque un registro que nadie mira no detecta nada. Ese es el montaje completo, y el resto de este artículo explica por qué cada pieza está ahí.

Esto no es asesoramiento legal. Todas las fuentes oficiales están al final, consultadas el 27 de agosto de 2026.

## Un permiso dice quién puede entrar, el registro dice quién entró

Son dos cosas distintas y la clínica que tiene una suele creer que tiene las dos. El permiso es una decisión previa: recepción no abre historias clínicas. El registro es un hecho posterior: el martes a las 12:40 alguien abrió la ficha de un paciente concreto.

Solo el segundo sirve cuando hay que responder algo. Si un paciente pregunta quién ha visto su historia, o si hay que valorar si una brecha afectó a datos de salud, la lista de permisos no contesta ninguna de las dos preguntas.

> **La curiosidad es el acceso indebido más frecuente, y no lo detecta ningún permiso.** El personal clínico tiene acceso legítimo a las historias; lo que hay que poder distinguir es el acceso que corresponde a una cita de ese día del que no corresponde a nada.

## Los cinco campos que tiene que guardar cada línea

La CNIL francesa lo concreta bastante bien para cualquier sistema con datos personales: hay que trazar las "opérations de création, consultation, partage, modification et suppression", y cada traza lleva el identificador del autor, la fecha, la hora, el tipo de operación y la referencia del dato afectado.

Traducido a una clínica dental, esto es lo que debería tener cada línea del registro.

| Campo | Qué se guarda | ¿Imprescindible? |
|---|---|---|
| Quién | Usuario nominal de la persona | ✓ Sí |
| Cuándo | Fecha y hora | ✓ Sí |
| Qué paciente | Identificador de la ficha abierta | ✓ Sí |
| Qué acción | Consultar, crear, modificar, exportar o borrar | ✓ Sí |
| Desde dónde | IP o dispositivo | ~ Si hay acceso remoto |
| Qué cambió | Valor anterior y valor nuevo | ~ En las modificaciones |
| Motivo | Texto corto que justifica la entrada | ✗ Solo en accesos de urgencia |

Los cuatro primeros no son negociables porque sin uno de ellos la línea deja de responder a una pregunta. Un registro sin paciente dice que alguien miró algo. Un registro sin acción no distingue leer de borrar, que es justo la distinción que importa.

El quinto depende de si se entra desde fuera. Si el software solo se abre desde los ordenadores de la clínica, la IP añade poco; si hay acceso desde casa, es el campo que separa una consulta normal de una a las tres de la mañana.

![Ficha de paciente en la pestaña de actividad, con alertas clínicas, plan de tratamiento activo y una línea de tiempo filtrable por visitas, tratamientos y comunicaciones](/screenshots/patient-timeline.png)

*La actividad registrada sobre un paciente, reunida en una sola línea de tiempo.*

## Lo que pide la ley española, y lo que deja a cada comunidad

La Ley 41/2002 no describe un formato de log, pero deja escrito que tiene que existir. Su artículo 16.7 dice que "las Comunidades Autónomas regularán el procedimiento para que quede constancia del acceso a la historia clínica y de su uso".

Esa frase hace dos cosas. Confirma que dejar constancia del acceso es obligación legal, y traslada el detalle a la normativa autonómica, que es donde hay que mirar el plazo y la forma concretos según dónde esté la clínica.

El resto del artículo 16 explica para qué sirve el registro. El apartado 4 limita al personal de administración a "los datos de la historia clínica relacionados con sus propias funciones", y el apartado 6 sujeta al deber de secreto a todo el que accede. Un registro es lo único que permite comprobar si esos dos límites se respetaron.

El RGPD llega a lo mismo por otro camino. El artículo 5.2 obliga al responsable a poder demostrar que cumple, y el artículo 32 exige medidas técnicas apropiadas para la seguridad del tratamiento. Demostrar quién accedió a qué es exactamente el tipo de prueba que ninguna de las dos cosas se puede hacer sin log.

> **La custodia de las historias es responsabilidad de la dirección del centro**, según el artículo 14 de la misma ley. En una clínica de dos sillones esa dirección es el titular, y no hay nadie más a quien preguntar por qué no existe el registro.

## Cuánto tiempo se guarda

No hay una cifra única, pero las dos referencias europeas que sí publican una coinciden bastante.

La CNIL recomienda conservar las trazas "sur une période glissante comprise entre six mois et un an", es decir en una ventana móvil de entre seis meses y un año, con excepciones si hay una obligación legal, un litigio o un incidente que analizar.

El Garante italiano, para los registros de acceso de los administradores de sistema, fija un mínimo: hay que conservarlos "per un congruo periodo, non inferiore a sei mesi", nunca menos de seis meses.

Seis meses es, en la práctica, el suelo razonable. Por debajo de eso, una reclamación que llega en primavera sobre algo ocurrido en otoño se queda sin nada que mirar.

## Cómo revisarlo en veinte minutos al mes

Un registro que solo se abre cuando ya hay un problema llega tarde. La revisión periódica es lo que lo convierte en detección, y cabe en una rutina corta.

1. **Filtra los accesos fuera de horario.** Cualquier apertura de ficha de madrugada, en domingo o en un festivo merece una explicación, aunque casi siempre la haya.
2. **Cruza los accesos del día con la agenda.** Si alguien abrió cinco historias y solo tenía tres pacientes, sobran dos.
3. **Busca a los pacientes conocidos.** La ficha de un familiar del equipo, de un compañero o de alguien del pueblo es la que más se abre sin motivo.
4. **Mira los accesos del personal que ya no está.** Un usuario dado de baja no debería tener líneas nuevas, y si las tiene el problema es grave.
5. **Revisa las exportaciones.** Descargar la base de pacientes es una acción distinta de consultarla, y debería ser rara.
6. **Anota la fecha de la revisión y lo que encontraste**, aunque sea "nada". Esa hoja es la prueba de que el control existe.

La CNIL insiste, además, en un límite que conviene decir en voz alta ante el equipo: los logs no se usan para controlar horarios ni rendimiento. Están para seguridad, y usarlos para otra cosa rompe la confianza que hace que nadie los desactive.

![Pantalla de informes de la clínica con los indicadores del periodo](/screenshots/reports.png)

*La revisión mensual funciona mejor como rutina fija, junto al resto de números del mes.*

## Tres errores que dejan el registro sin valor

**La cuenta compartida.** Si cuatro personas entran como "recepcion", el log registra impecablemente que fue "recepcion" quien abrió la ficha, lo cual no identifica a nadie. Es el fallo que anula todo lo demás, y es el más común.

**El log que edita el administrador.** Si el titular de la clínica puede modificar o borrar líneas del registro, el registro deja de probar nada frente a un tercero. La CNIL lo formula como que hay que impedir que el personal pueda alterar la traza de su propia actividad, y el Garante italiano exige que los logs tengan "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità".

**El usuario borrado.** Cuando alguien deja la clínica y se elimina su usuario en lugar de desactivarlo, sus líneas del registro se quedan huérfanas. Desactivar conserva la trazabilidad; borrar la destruye.

## El paciente puede preguntar, y hay que poder contestar

En Portugal la ley lo pone por escrito de la forma más exigente de Europa: el artículo 29.º de la Lei 58/2019 dice que "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais" y enumera entre las medidas el "registo eletrónico dos acessos e dos dados acedidos".

En Italia el Garante lo plantea a petición: el paciente puede pedir "conoscere gli accessi eseguiti sul proprio dossier" con la unidad que accedió, la fecha y la hora, y hay quince días para responder.

En España no existe un derecho de notificación automática equivalente, pero el derecho de acceso del RGPD se ejerce igual y la pregunta llega igual. La diferencia entre una clínica que contesta en diez minutos y una que no puede contestar es si el log guarda el identificador del paciente en cada línea.

## Qué puede hacer el software y qué no

Ningún registro impide que alguien mire una pantalla ajena, y ninguno sustituye la conversación en la que se explica que la historia de un conocido no se abre por curiosidad. Lo que sí hace es que esa conversación se pueda tener con datos delante en lugar de con sospechas.

En Dentalpin cada apertura de una ficha queda registrada con usuario, fecha y paciente y los usuarios se desactivan sin borrar lo que hicieron. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/).

## Fuentes

- Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, artículos 14 y 16. [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188). Consultado el 27 de agosto de 2026.
- Reglamento (UE) 2016/679 (RGPD), artículos 5.2 y 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado el 27 de agosto de 2026.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (actualizado el 14 de marzo de 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Consultado el 27 de agosto de 2026.
- Garante per la protezione dei dati personali, *Misure e accorgimenti prescritti ai titolari dei trattamenti effettuati con strumenti elettronici relativamente alle attribuzioni delle funzioni di amministratore di sistema*, 27 de noviembre de 2008. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Consultado el 27 de agosto de 2026.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4 de junio de 2015. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Consultado el 27 de agosto de 2026.
- Lei n.º 58/2019, de 8 de agosto, artículo 29.º. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Consultado el 27 de agosto de 2026.

El plazo y la forma concretos dependen de la normativa de tu comunidad autónoma. Contrástalo con tu asesoría o con tu delegado de protección de datos.
