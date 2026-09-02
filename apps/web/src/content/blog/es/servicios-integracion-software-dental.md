---
title: "Montar servicios de integración sobre software dental open source"
description: "El software libre no se cobra, el servicio sí: instalación, migración, copias probadas y soporte. Qué permite la licencia y por qué firmas contrato de encargado."
pubDate: 2026-09-02
tags: [open-source, integradores, servicios, rgpd, software-dental]
---

Sí se puede montar un negocio de servicios sobre software dental open source, y lo que cobras no es el programa. Cobras la instalación, la migración de datos, las copias de seguridad que alguien ha restaurado de verdad, las actualizaciones y estar localizable cuando la clínica no arranca un lunes por la mañana. Dos cosas deciden si el negocio se sostiene: qué te deja hacer la licencia y el hecho de que, en cuanto tocas datos de pacientes, pasas a ser encargado del tratamiento con un contrato que firmar.

Nada de eso es un obstáculo. Es el trabajo, y es facturable.

## Lo que vendes no es el software, es que funcione un lunes a las nueve

Una clínica pequeña no compra tecnología, compra que su agenda abra. El catálogo de servicios que sale de ahí es corto y se repite en cada instalación.

- **Instalación y bastionado.** Servidor, certificado, cortafuegos, usuarios del sistema y una configuración que no dependa de que tú te acuerdes de cómo la dejaste.
- **Migración de datos.** Sacar pacientes, historias, presupuestos y citas del programa anterior, y cuadrar los totales antes de dar por buena la carga.
- **Copias de seguridad probadas.** Una copia que nunca se ha restaurado no es una copia, es un fichero. La restauración de prueba es un entregable con fecha.
- **Actualizaciones.** Versiones menores, la mayor de PostgreSQL cada pocos años y la ventana de mantenimiento acordada con la clínica.
- **Soporte con horario escrito.** No «cuando pueda». De tal hora a tal hora, por este canal, con este tiempo de respuesta.
- **Formación del equipo.** Dos sesiones cortas al principio y una a los tres meses valen más que un manual de cincuenta páginas.

![Pantalla de inicio con las citas del día, quién está en la clínica, los pagos vencidos y los últimos pacientes](/screenshots/home.png)

*La pantalla que el equipo mira a primera hora. Cuando no carga, la clínica llama a quien le montó el servidor.*

## Lee la licencia antes de poner precio

Open source no significa «haz lo que quieras». Muchos productos de este mercado se publican bajo Business Source License 1.1, que es una plantilla con casillas, y las casillas cambian de proyecto a proyecto.

El texto base de la BSL 1.1 concede, literalmente, «the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work». El uso en producción, que es justo lo que hace tu cliente, depende del Additional Use Grant que rellene quien publica.

| Lo que quieres hacer | Bajo una BSL 1.1 |
|---|---|
| Leer y auditar el código | ✓ Concedido en el texto base |
| Modificarlo para un cliente | ✓ Concedido en el texto base |
| Instalarlo en el servidor de una clínica | ~ Depende del Additional Use Grant |
| Cobrar tu tiempo por instalarlo y mantenerlo | ~ La licencia regula el software, no tus horas |
| Revenderlo como SaaS multicliente propio | ✗ Suele ser la restricción expresa |

Esa cuarta fila es la que más se malinterpreta. Una licencia de software pone condiciones al uso y la distribución del software, no a que factures consultoría; lo que sí puede impedirte es el montaje concreto sobre el que querrías facturarla.

> **La frontera está en montar tu propio SaaS, no en cobrar por instalar.** Alojar la instancia de una clínica para esa clínica y cobrarle el mantenimiento es un caso distinto de levantar una plataforma multicliente que compite con quien publica el software. Si tu modelo se acerca a esa línea, la propia licencia dice qué hacer: comprar una licencia comercial al licenciante o abstenerte.

Cuando dudes, pregunta antes de firmar con el cliente. Los proyectos con BSL suelen incluir una línea de contacto para acuerdos alternativos de licencia, y esa conversación cuesta un correo.

Esto no es asesoramiento legal. Es la lectura de un texto público, y el contrato concreto lo tiene que ver un abogado.

## En cuanto tocas datos de pacientes eres encargado del tratamiento

Aquí es donde la mayoría de los proyectos de informático de barrio se meten en un lío evitable. Si administras el servidor donde vive la historia clínica, tratas datos de salud por cuenta de la clínica, y el RGPD te da un nombre: encargado del tratamiento.

La Agencia Española de Protección de Datos enumera lo que ese contrato tiene que contener. Entre otras cosas: «Objeto, duración, naturaleza y la finalidad del tratamiento», «Tipo de datos personales y categorías de interesados», la «Obligación del encargado de tratar los datos personales únicamente siguiendo instrucciones documentadas del responsable», las «Condiciones para que el responsable pueda dar su autorización previa, específica o general, a las subcontrataciones» y la «Asistencia al responsable, siempre que sea posible, en la atención al ejercicio de derechos de los interesados».

Traducido a tu día a día, son cuatro decisiones concretas:

1. **Firma el contrato antes de tocar el primer dato**, no después de la migración. La fecha del contrato debería ser anterior al primer acceso.
2. **Declara a tus subcontratistas.** Si el servidor está en un proveedor de alojamiento, ese proveedor es un subencargado y la clínica tiene que poder autorizarlo.
3. **Documenta las instrucciones.** Un correo del responsable pidiendo una exportación es una instrucción documentada; una llamada no deja rastro.
4. **Pacta qué pasa al final.** Devolución o supresión de los datos cuando termine el servicio, con constancia escrita de lo que hiciste.

> **El contrato de encargado no es papeleo, es tu límite de responsabilidad.** Sin él, cualquier incidente se discute sin un documento que diga qué te habían pedido hacer y qué no. Con él, tienes por escrito el alcance de lo que administrabas.

## Los tres modelos de cobro que se sostienen

Los tres funcionan. Lo que no funciona es mezclarlos sin decirlo, porque el cliente acaba creyendo que el mantenimiento va incluido en la instalación.

| Modelo | Qué cubre | Cuándo encaja |
|---|---|---|
| Proyecto cerrado | Instalación, migración y formación, con precio y alcance fijos | Apertura de clínica o cambio de programa |
| Cuota mensual | Copias, actualizaciones, monitorización y soporte en horario | Clínicas sin informático propio, que es casi todas |
| Bolsa de horas | Trabajo puntual fuera del alcance de la cuota | Integraciones, informes a medida, cambios de hardware |

La cuota mensual es la que convierte esto en un negocio y no en una sucesión de proyectos. Es también la que exige la disciplina de tener monitorización, porque cobrar una cuota sin saber si el servidor sigue haciendo copias es vender un seguro sin mirar el riesgo.

## La instalación que puedes repetir en la siguiente clínica

La primera instalación se tarda. La quinta es rentable solo si la primera dejó un procedimiento escrito.

1. **Inventaria lo que hay.** Qué programa usan, qué versión, dónde están los datos y quién tiene la contraseña de administrador hoy.
2. **Monta un entorno de pruebas** con datos reales copiados, nunca contra la instalación que la clínica está usando.
3. **Migra y cuadra números.** Número de pacientes, de citas futuras, de presupuestos abiertos y saldo pendiente. Si un total no cuadra, no has terminado.
4. **Corre una semana en paralelo** con el programa antiguo todavía disponible en lectura.
5. **Haz una restauración de prueba** desde la copia, cronometrada, y anota cuánto tardó.
6. **Forma al equipo** en dos sesiones cortas, una de agenda y recepción, otra de gabinete.
7. **Cambia de sistema un día de poca carga**, no un lunes ni la víspera de vacaciones.
8. **Entrega las credenciales por escrito** a la persona responsable de la clínica, con la lista de servicios y dónde está cada cosa.

![Diagrama del stack autoalojado: navegador, Caddy en el puerto 443, frontend Nuxt, API y base de datos PostgreSQL](/diagrams/install-stack.svg)

*Las piezas de las que te haces responsable al firmar el mantenimiento. Cada caja tiene alguien que la actualiza, y ese alguien eres tú.*

## El SLA que la clínica va a preguntar, aunque no lo llame así

Ningún gabinete pide un SLA con esas palabras. Pide saber a quién llama el martes a las ocho y media. Pon por escrito estas cinco respuestas y habrás escrito el acuerdo:

- **Horario de cobertura** y qué pasa fuera de él, incluidos sábados si la clínica abre.
- **Tiempo de respuesta y tiempo de resolución objetivo**, que no son lo mismo y conviene separarlos.
- **Cuánta información se puede perder** en el peor caso, es decir, cada cuánto se hace copia.
- **Cuánto se tarda en volver a estar en marcha** desde la última copia, medido en una prueba real y no estimado.
- **Quién es el titular del servidor y de los datos**, que debe ser siempre la clínica, aunque tú lo administres.

## Escribe tú la cláusula de salida

El día que dejéis de trabajar juntos llega en todos los contratos, y llega mejor si estaba previsto. Es también el argumento comercial más fuerte que tienes frente a un proveedor cerrado.

- **Las credenciales las tiene la clínica**, en un gestor de contraseñas que sea suyo, desde el primer día.
- **Los datos salen en un formato abierto** documentado, y lo demuestras una vez al año exportando de verdad.
- **El procedimiento está escrito** en un documento que la clínica conserva, no en tu cabeza.
- **La licencia sobrevive a tu empresa.** Con software libre o de fuente disponible, otro informático puede continuar sin renegociar con nadie.

> **Un proveedor que se va sin dejar el sistema en manos de la clínica no es un proveedor, es un candado.** Lo que hace atractivo tu servicio frente a una licencia cerrada es exactamente eso: que la clínica podría cambiarte y no perdería nada.

## Dónde encaja Dentalpin

Dentalpin se publica bajo BSL 1.1 y su fichero `LICENSE` está resuelto en las mismas casillas de arriba: la limitación de uso prohíbe «providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work», la fecha de cambio son cuatro años desde la publicación y la licencia de destino es Apache 2.0. Para un integrador eso significa que instalar, alojar y mantener la instancia de una clínica concreta cae en un sitio distinto al de montar un SaaS dental competidor, y que si tu modelo se acerca a esa línea el propio fichero remite a hablar de acuerdos alternativos con el licenciante. Lo que la clínica paga por el producto está en la [página de precios](/es/precios/).

## Fuentes

- [Business Source License 1.1, texto de la licencia](https://mariadb.com/bsl11/), MariaDB. Consultado el 2 de septiembre de 2026.
- [¿Cuál sería el contenido del contrato de encargo de tratamiento?](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/8-responsable-y-encargado-del-tratamiento/FAQ-0238-cual-seria-el-contenido-del-contrato-de-encargo-de-tratamiento), Agencia Española de Protección de Datos. Consultado el 2 de septiembre de 2026.
- Fichero `LICENSE` del repositorio de Dentalpin. Consultado el 2 de septiembre de 2026.
