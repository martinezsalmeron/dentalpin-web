---
title: "Cómo migrar de software dental sin perder la historia clínica"
description: "Guía práctica para cambiar de software dental sin perder pacientes, historia clínica ni facturas: qué exportar, cómo probarlo antes y el paso donde fallan casi todas las migraciones."
pubDate: 2026-07-30
tags: [migracion, software-dental, historia-clinica]
---

Migrar sin perder nada se reduce a tres reglas: exporta todo antes de cancelar el contrato antiguo, en un formato que puedas leer sin ese software; prueba la importación con una copia antes de tocar la clínica real; y no des por buena ninguna equivalencia automática entre catálogos de tratamientos sin revisarla fila a fila. Quien pierde datos casi siempre se saltó la primera regla, confiando en que "el proveedor nuevo ya se encarga".

No hace falta ser técnico para hacerlo bien. Hace falta hacerlo en este orden.

## Antes de tocar nada: exporta y verifica

Pide el export completo al proveedor que dejas, no una selección de lo que ellos consideran relevante. Como mínimo, esto tiene que salir de su sistema y llegar al tuyo en un formato abierto (CSV, XML o una base de datos que puedas consultar sin licencia):

- **Ficha de paciente completa**: datos de contacto, consentimientos firmados y fecha de alta.
- **Historia clínica y odontograma**, con fecha de cada anotación, no solo el estado actual.
- **Presupuestos y facturas**, con su numeración original. Un hueco en la numeración es lo primero que llama la atención en una inspección.
- **Imágenes y radiografías**, que casi siempre viven fuera de la base de datos principal y se olvidan hasta el último día.
- **Catálogo de tratamientos** tal y como está codificado en el sistema antiguo, no solo los nombres que ves en pantalla.
- **Agenda histórica**, si vas a necesitar justificar asistencias o ausencias.

> **El export es tu red de seguridad, no un trámite de salida.** Pídelo semanas antes de firmar con el nuevo proveedor, ábrelo y compruébalo tú mismo. Si el proveedor que dejas pone trabas para dártelo completo, esa es información sobre cómo trata tus datos, y la tienes antes de irte.

## El paso donde fallan casi todas las migraciones

Dos clínicas casi nunca codifican los tratamientos igual. Una llama "endodoncia" a lo que otra divide en tres códigos distintos según la pieza y el número de conductos. Cuando el software nuevo intenta emparejar automáticamente el catálogo antiguo con el suyo, hay filas que encajan de forma evidente y filas que no.

El error no es que la coincidencia falle. Es aceptar una coincidencia dudosa sin mirarla.

> **Una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después.** No es un fallo del software, es un fallo del proceso: si nadie revisa fila a fila lo que el sistema propone, el error se hereda en cada paciente que use ese tratamiento a partir de ahora.

Antes de aceptar una importación masiva, pide ver el mapeo propuesto con recuentos: cuántos pacientes, cuántas líneas de presupuesto y cuántas facturas dependen de cada tratamiento que se va a reasignar.

## Cómo probarlo sin arriesgar la clínica real

1. **Genera el export completo** del sistema antiguo y guárdalo aparte, fuera de ambos sistemas, antes de instalar nada.
2. **Corre la importación en un entorno de prueba**, no sobre los datos en producción del sistema nuevo.
3. **Compara recuentos**: número de pacientes, de presupuestos, de facturas y de citas futuras. Si no cuadran, para ahí.
4. **Convive en paralelo unas semanas** si el volumen de la clínica lo permite: sigue facturando en el sistema antiguo mientras validas que el nuevo refleja lo mismo.
5. **Congela el sistema antiguo en modo solo lectura** cuando confíes en el nuevo. No lo borres ni canceles la suscripción todavía.

## Qué exigir a tu proveedor actual

- **Un export completo, no una API limitada a lo que a ellos les interesa exponer.**
- **Formato abierto y documentado**, para que el que lo reciba no tenga que adivinar qué significa cada campo.
- **Un plazo razonable**, no una amenaza de borrado a los pocos días de darte de baja.
- **Las imágenes en su resolución original**, no una miniatura comprimida.

Confirma también con tu colegio profesional o tu asesoría los plazos de conservación de historia clínica que te aplican: varían y no son terreno para dar por buena una cifra sin comprobarla tú.

## Una checklist antes de firmar con el nuevo

| Qué revisar | Por qué importa |
|---|---|
| Formato del export que entrega el proveedor actual | Determina si necesitas una herramienta intermedia o puedes importar directo |
| Si el nuevo sistema muestra un preview antes de escribir nada | Sin preview, un error de mapeo se aplica antes de que lo veas |
| Si el mapeo de tratamientos se revisa fila a fila o solo en bloque | El bloque es rápido y es donde se cuela el error |
| Si las imágenes se migran junto con la ficha o aparte | Aparte significa que alguien tiene que enlazarlas a mano después |
| Si puedes conservar el sistema antiguo en solo lectura | Sin eso, no tienes con qué comparar si algo falla más adelante |

En Dentalpin resolvimos esto con un módulo de importación (`migration_import`) que pasa por las mismas cuatro fases de esta guía: sube el fichero, muestra un preview con recuentos antes de escribir nada, deja revisar el mapeo de tratamientos fila a fila (lo que puntúa por encima de 0,9 se acepta en bloque, el resto lo decides tú) y solo entonces ejecuta. Si quieres ver el flujo completo, está documentado en [dental-bridge](https://github.com/dentaltix/dental-bridge), y [instalar Dentalpin en tu propio servidor](/es/blog/instalar-dentalpin-en-tres-minutos/) lleva tres minutos si luego quieres probarlo con tu propio export.

¿Te has encontrado con un paso de migración que aquí falta? [Cuéntalo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo añadimos.
