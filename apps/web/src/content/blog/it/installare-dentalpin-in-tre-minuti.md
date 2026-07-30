---
title: "Installare Dentalpin sul tuo server in tre minuti"
description: "Fino a poco fa installare Dentalpin voleva dire clonare il repository e compilare due immagini. Non più. Adesso sono tre file, tre valori e un comando."
pubDate: 2026-07-30
tags: [self-hosting, docker, installazione]
---

Fino a poco fa installare Dentalpin voleva dire clonare il repository e compilare le due immagini sul proprio server. La nostra documentazione parlava di mezz'ora, ed era ottimista: compilare il frontend con Nuxt chiede 4 GB di memoria e mette in ginocchio qualsiasi VPS modesto.

Adesso è finita. Le immagini vengono pubblicate a ogni release e il tuo server deve solo scaricarle.

| | Prima | Adesso |
|---|---|---|
| Passaggi | Clonare il repo, compilare 2 immagini | ✓ Scaricare 3 file |
| Tempo | ~ 30 minuti | ✓ 3 minuti |
| Memoria necessaria | ✗ 4 GB per compilare Nuxt | ✓ Solo quella che serve per l'esecuzione |
| Certificato TLS | ✗ Lo monti tu | ✓ Automatico al primo avvio |
| CORS | ✗ Configurazione manuale | ✓ Non esiste, origine unica |

## I tre minuti

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# modifica .env: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Punta un dominio alla macchina, metti `PUBLIC_URL=https://tuo-dominio` e il certificato viene emesso da solo al primo avvio. Non c'è niente da rinnovare e nessun nginx da configurare.

> **Vuoi solo dare un'occhiata prima di decidere?** Metti `SEED_ON_STARTUP=1` e parti con uno studio dimostrativo: pazienti, agenda, preventivi e fatture con cui giocare. Per uno studio vero lascia il valore a `0`.

![Schermata iniziale di Dentalpin con lo studio dimostrativo: appuntamenti di oggi, chi è in studio, pagamenti scaduti e pazienti recenti](/screenshots/home.png)

*Questo è quello che vedi entrando con `SEED_ON_STARTUP=1`, senza aver creato un solo paziente.*

## Perché c'è Caddy davanti

Le due versioni precedenti esponevano backend e frontend su porte diverse, e chi installava doveva risolvere da solo il proxy inverso, il TLS e l'elenco delle origini ammesse per il CORS. Tre occasioni per sbagliare prima di vedere la prima schermata.

Adesso un container Caddy serve tutto da un'origine unica: `/api/*` va al backend, il resto all'interfaccia. Il browser non parla mai con due indirizzi, quindi **il CORS smette di essere un problema**. E Caddy chiede il certificato a Let's Encrypt senza che nessuno glielo ricordi.

![Schema dell'installazione: il browser entra in HTTPS su Caddy, che smista /api/* al backend e tutto il resto al frontend Nuxt; il backend parla con PostgreSQL](/diagrams/install-stack.svg)

*Quattro container e una sola porta aperta. L'unica cosa esposta a internet è Caddy.*

## Un'immagine per tutte le installazioni

È il dettaglio di cui siamo più contenti, perché non è costato nemmeno una riga di codice nuovo.

L'immagine del frontend viene compilata con una URL di API predefinita. Di solito questo obbligherebbe a compilare un'immagine per ogni installazione, che è esattamente quello che volevamo evitare. Non serve: Nuxt legge quella URL attraverso `runtimeConfig`, quindi la variabile `NUXT_PUBLIC_API_BASE_URL` la sovrascrive all'avvio del container. Quello che è stato compilato è solo il valore predefinito.

Un'immagine, qualsiasi dominio. L'abbiamo verificato prima di pubblicare: quello che l'applicazione serve porta la URL della tua installazione, non quella del build.

## Aggiornare

```bash
# in .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Le migrazioni vengono applicate da sole prima che l'API torni ad accettare richieste.

> **Fissa la versione invece di lasciare `latest`.** Così un aggiornamento non ti arriva a sorpresa il giorno in cui riavvii per un altro motivo. E **fai il backup prima**: [qui spieghiamo come](https://github.com/martinezsalmeron/dentalpin/discussions/112). Sono due volumi Docker, uno con il database e uno con i file caricati. Tutti e due, non solo il primo.

## Una lezione della prima ora

La prima versione di queste immagini è uscita solo per `amd64`. Il ragionamento sembrava sensato: qualsiasi VPS si affitti oggi è x86, e costruire anche per ARM costa tempo di integrazione continua.

È durato venti minuti. Il tempo che ci è servito per seguire le nostre stesse istruzioni da un Mac con Apple Silicon:

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

Il primo comando dell'installazione. Esattamente quello che questo lavoro doveva sistemare.

> L'errore non è stato tecnico ma di criterio: abbiamo pensato al server di produzione e **dimenticato che quasi tutti provano le cose prima sul proprio portatile**. E le istanze ARM di Hetzner sono le più economiche d'Europa, rivolte proprio a questo pubblico.

Adesso ogni architettura si costruisce sulla sua macchina e si pubblica un unico manifest per immagine. Se ne manca una delle due, la release non esce.

Hai installato Dentalpin e qualcosa non è andato come raccontato qui? Scrivilo nelle [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Che l'installazione funzioni al primo colpo è, in questo momento, quello che ci interessa di più.
