---
title: "Instalar Dentalpin en tu servidor en tres minutos"
description: "Hasta esta semana instalar Dentalpin significaba clonar el repositorio y compilar dos imágenes. Ya no. Ahora son tres ficheros, tres valores y un comando."
pubDate: 2026-07-28
tags: [autoalojado, docker, instalación]
---

Hasta esta semana, instalar Dentalpin significaba clonar el repositorio y compilar las dos imágenes en tu propio servidor. Nuestra propia documentación lo cifraba en media hora, y era optimista: compilar el frontend con Nuxt pide 4 GB de memoria y castiga a cualquier VPS modesto.

Eso se acabó. Las imágenes se publican en cada release y tu servidor solo tiene que descargarlas.

| | Antes | Ahora |
|---|---|---|
| Pasos | Clonar repo, compilar 2 imágenes | ✓ Descargar 3 ficheros |
| Tiempo | ~ 30 minutos | ✓ 3 minutos |
| Memoria necesaria | ✗ 4 GB para compilar Nuxt | ✓ La que pida ejecutar |
| Certificado TLS | ✗ Lo montas tú | ✓ Automático al arrancar |
| CORS | ✗ Configuración manual | ✓ No existe, origen único |

## Los tres minutos

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# edita .env: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Apunta un dominio a la máquina, pon `PUBLIC_URL=https://tu-dominio` y el certificado se emite solo en el primer arranque. No hay nada que renovar ni ningún nginx que configurar.

> **¿Solo quieres mirar antes de decidir?** Pon `SEED_ON_STARTUP=1` y arrancarás con una clínica de demostración: pacientes, agenda, presupuestos y facturas con los que trastear. Para una clínica real, déjalo en `0`.

## Por qué Caddy delante

Las dos versiones anteriores exponían el backend y el frontend en puertos distintos, y quien instalaba tenía que resolver por su cuenta el proxy inverso, el TLS y la lista de orígenes permitidos para CORS. Tres oportunidades de equivocarse antes de ver la primera pantalla.

Ahora un contenedor de Caddy sirve todo desde un único origen: `/api/*` va al backend, el resto a la interfaz. El navegador nunca habla con dos sitios, así que **CORS deja de existir como problema**. Y Caddy pide el certificado a Let's Encrypt sin que nadie se lo recuerde.

## Una imagen para todas las instalaciones

Es el detalle del que estamos más contentos, porque no ha costado ni una línea de código nuevo.

La imagen del frontend se compila con una URL de API por defecto. Normalmente eso obligaría a compilar una imagen por despliegue, que es justo lo que queríamos evitar. No hace falta: Nuxt lee esa URL a través de `runtimeConfig`, así que la variable `NUXT_PUBLIC_API_BASE_URL` la sobreescribe al arrancar el contenedor. Lo que se compiló es solo el valor por defecto.

Una imagen, cualquier dominio. Lo verificamos antes de publicar: el payload que sirve la aplicación lleva la URL de tu instalación, no la que se compiló.

## Actualizar

```bash
# en .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Las migraciones se aplican solas antes de que la API acepte peticiones.

> **Fija la versión en lugar de dejar `latest`.** Así una actualización nunca te llega por sorpresa el día que reinicias por otro motivo. Y **haz copia de seguridad antes**: [aquí explicamos cómo](https://github.com/martinezsalmeron/dentalpin/discussions/112) — son dos volúmenes de Docker, uno con la base de datos y otro con los archivos subidos. Los dos, no solo el primero.

## Una lección de la primera hora

La primera versión de estas imágenes salió solo para `amd64`. El razonamiento parecía sensato: cualquier VPS que alquiles hoy es x86, y construir también para ARM cuesta tiempo de integración continua.

Duró veinte minutos. Lo que tardamos en seguir nuestras propias instrucciones desde un Mac con Apple Silicon:

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

El primer comando de la instalación. Exactamente lo que este trabajo existía para arreglar.

> El error no fue técnico sino de criterio: pensamos en el servidor de producción y **olvidamos que casi todo el mundo prueba las cosas primero en su portátil**. Y las instancias ARM de Hetzner son las más baratas de Europa, dirigidas justo a este público.

Ahora cada arquitectura se construye en su propia máquina y se publica un único manifiesto por imagen. Si falta una de las dos, la release no sale.

¿Te has instalado Dentalpin y algo no ha ido como aquí se cuenta? Cuéntalo en [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Que la instalación funcione a la primera es, ahora mismo, lo que más nos importa.
