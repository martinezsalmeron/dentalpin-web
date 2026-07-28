---
title: "Dentalpin frente a Gesden: qué cambia realmente para tu clínica"
description: "Comparativa honesta entre Gesden, el software dental más usado de España, y Dentalpin, que es open source y gratuito. Con fuentes y sin adjetivos."
pubDate: 2026-07-28
tags: [comparativa, gesden, software-dental]
---

Si diriges una clínica en España y buscas software de gestión, Gesden aparece el primero. Es razonable: lleva más de treinta años en el mercado y su fabricante, Infomed, declara **14.000 clínicas** usándolo.

Nosotros hacemos Dentalpin, así que no somos neutrales. Lo que sí podemos hacer es ser exactos: todo lo que se afirma aquí sobre Gesden sale de las páginas que publica Infomed, con enlace y fecha al final. Y hay una sección entera sobre cuándo Gesden es mejor opción que nosotros, porque la hay.

## Qué es Gesden

Software de gestión para clínica dental de Infomed, en dos líneas de producto:

- **Gesden G5** — aplicación de escritorio, requiere Windows 10 o superior.
- **Gesden ONE** — versión en la nube, accesible desde navegador.

G5 se ofrece en tres versiones según número de licencias: *Easy* (hasta 3), *Profesional* (hasta 6) y *Grandes Clínicas/Multicentro* (ilimitadas).

Funcionalmente es un producto profundo y maduro: historia clínica con odontograma, periodontograma con comparación de evolución, agenda multigabinete y multicentro, presupuestos, ciclo completo de facturación, ayuda con compañías aseguradoras, más de 150 tipos de informes configurables, recalls, control de gastos y proveedores, y módulo de ortodoncia.

Alrededor del núcleo hay **módulos opcionales** que se contratan aparte: `dentIA` (análisis de radiografías con IA), `CLINIPAD` (firma digital), SMS y emailing, `ONE PAY` (cobros), Dashboard, `DIDACTIC` (casos en 3D), agenda móvil y cita online. Verifactu es también un producto separado.

Infomed declara además más de 50 técnicos de soporte, más de 40 en I+D y más de 400 migraciones al año.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras —tu servidor, el proveedor cloud que elijas— y no pagas licencia por sillón, por dentista ni por paciente.

Odontograma, periodontograma SEPA, agenda, historia clínica, planes de tratamiento, presupuestos con firma, facturación, pagos, recalls e informes. Verifactu incluido como módulo, no como producto aparte. Y un asistente de IA que ejecuta tareas sobre tus datos reales respetando los permisos de cada usuario.

Es mucho más joven. Eso importa y volvemos a ello.

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | Gesden | Dentalpin |
|---|---|---|
| Modelo | Licencia comercial | Open source (BSL 1.1 → Apache 2.0 a los 4 años) |
| Despliegue | G5 escritorio (Windows 10+) · ONE en la nube | Tu servidor, tu proveedor, o local |
| Precio publicado | No publica precios en su web | 0 €, todos los módulos incluidos |
| Módulos | Varios opcionales, contratados aparte | Todos incluidos |
| Verifactu | Producto separado | Módulo incluido |
| Dónde viven los datos | Según producto y despliegue | Donde tú decidas |
| Código auditable | No | Sí, en GitHub |
| API | No documentada públicamente | REST completa, OpenAPI generada |
| Años en el mercado | Más de 30 | Desde 2026 |
| Clínicas usándolo | 14.000 declaradas | Muy pocas todavía |

Sobre el precio conviene ser preciso, porque circula mucho ruido. **Infomed no publica tarifas en su web**: remite a consultar con su coordinador de zona. Hay blogs que citan cifras muy distintas entre sí —desde 99 €/mes hasta licencias perpetuas de 2.000-3.000 €— y ninguno es Infomed. Si te importa el número, pídeselo a ellos.

## Elige Gesden si

Y esto va en serio, no es un trámite:

- **Quieres un teléfono al que llamar.** Más de 50 técnicos de soporte y treinta años de rodaje en clínicas españolas. Nosotros tenemos un canal de Telegram y GitHub. Si el software para y facturas 8.000 € ese día, la diferencia es real.
- **Necesitas migrar y que alguien se encargue.** 400 migraciones al año es un músculo que no se improvisa.
- **Tu clínica ya funciona con Gesden y todo el mundo lo sabe usar.** Cambiar de software cuesta semanas de productividad. Que exista algo gratis no es razón suficiente.
- **Dependes de integraciones concretas** con tus equipos de diagnóstico por imagen y ya funcionan.
- **No tienes a nadie técnico ni quieres tenerlo.** Dentalpin se autoaloja. Alguien tiene que ocuparse del servidor y las copias.

Un producto con 14.000 clínicas detrás resuelve problemas que nosotros todavía no sabemos que existen.

## Elige Dentalpin si

- **Te incomoda que tus datos clínicos vivan donde no decides tú.** Aquí eligen tú y tu servidor.
- **La factura crece con la clínica y no te cuadra.** Abrir un gabinete no debería subir la cuota.
- **Tienes o contratas perfil técnico.** Entonces el autoalojamiento es una tarde, no un problema.
- **Quieres integrar y automatizar.** Todo es una API documentada, no un formulario cerrado.
- **Quieres poder auditar el código** que guarda historias clínicas. Está publicado.
- **Verifactu sin producto adicional.** Va dentro.

## Cómo sería migrar

El módulo `migration_import` importa a través de [dental-bridge](https://github.com/dentaltix/dental-bridge), y no es un botón único a propósito: subes el fichero, ves un preview con recuentos y filas de muestra antes de escribir nada, y llegas a un paso de propuestas donde el sistema mapea el catálogo de tratamientos del origen contra el tuyo y tú decides fila a fila (aceptar, revincular, crear nuevo, ignorar). Lo que puntúa por encima de 0,9 se acepta en bloque.

Ese paso es donde fallan casi todas las migraciones. Dos clínicas nunca codifican los tratamientos igual, y una equivalencia adivinada en silencio produce facturas mal emitidas que nadie detecta hasta meses después.

## Lo honesto

Gesden es un producto maduro con una base de clientes enorme y un soporte que nosotros no tenemos. Si tu prioridad es que alguien responda al teléfono mañana, es la elección sensata hoy.

Dentalpin es la apuesta contraria: que el software de tu clínica no debería ser una caja negra alquilada. Es más joven y se nota. Puedes [probar la demo](https://demo.dentalpin.com) sin instalar nada, o [levantarlo en tu servidor en tres minutos](/es/blog/instalar-dentalpin-en-tres-minutos/) y juzgarlo tú.

## Fuentes

Todas consultadas el 28 de julio de 2026:

- [Gesden G5 — Infomed](https://www.infomedsoftware.com/software/gesden/gesden-g5/): versiones, funcionalidades, módulos opcionales, requisitos Windows, cifras de clínicas, soporte y migraciones.
- [Gesden ONE](https://www.gesdenone.com/): producto cloud.
- [Licencia de Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) y [código fuente](https://github.com/martinezsalmeron/dentalpin).

¿Ves algo mal o desactualizado en esta comparativa? [Dínoslo](https://github.com/martinezsalmeron/dentalpin/discussions) y lo corregimos. Vale también si eres de Infomed.
