---
title: "Dentalpin in drei Minuten auf dem eigenen Server installieren"
description: "Bis vor Kurzem hieß Dentalpin installieren: Repository klonen und zwei Images bauen. Nicht mehr. Jetzt sind es drei Dateien, drei Werte und ein Befehl."
pubDate: 2026-07-30
translationKey: instalar-dentalpin-en-tres-minutos
tags: [self-hosting, docker, installation]
---

Bis vor Kurzem hieß Dentalpin installieren, das Repository zu klonen und beide Images auf dem eigenen Server zu bauen. Unsere eigene Dokumentation veranschlagte dafür eine halbe Stunde, und das war optimistisch: Das Frontend mit Nuxt zu bauen verlangt 4 GB Arbeitsspeicher und bringt jeden schmalen VPS ins Schwitzen.

Damit ist Schluss. Die Images werden bei jedem Release veröffentlicht, und Ihr Server muss sie nur noch herunterladen.

| | Vorher | Jetzt |
|---|---|---|
| Schritte | Repo klonen, 2 Images bauen | ✓ 3 Dateien herunterladen |
| Dauer | ~ 30 Minuten | ✓ 3 Minuten |
| Nötiger Arbeitsspeicher | ✗ 4 GB zum Bauen von Nuxt | ✓ Nur was der Betrieb braucht |
| TLS-Zertifikat | ✗ Bauen Sie selbst | ✓ Automatisch beim Start |
| CORS | ✗ Manuelle Konfiguration | ✓ Entfällt, ein einziger Origin |

## Die drei Minuten

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# .env bearbeiten: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Zeigen Sie eine Domain auf die Maschine, setzen Sie `PUBLIC_URL=https://ihre-domain`, und das Zertifikat wird beim ersten Start von allein ausgestellt. Es gibt nichts zu erneuern und keinen nginx einzurichten.

> **Sie wollen erst schauen, bevor Sie entscheiden?** Setzen Sie `SEED_ON_STARTUP=1` und starten Sie mit einer Demo-Praxis: Patienten, Terminkalender, Kostenvoranschläge und Rechnungen zum Ausprobieren. Für eine echte Praxis lassen Sie den Wert auf `0`.

![Startseite von Dentalpin mit der Demo-Praxis: heutige Termine, wer gerade da ist, überfällige Zahlungen und zuletzt behandelte Patienten](/screenshots/home.png)

*Das sehen Sie nach dem Start mit `SEED_ON_STARTUP=1`, ohne einen einzigen Patienten angelegt zu haben.*

## Warum Caddy davor steht

Die beiden vorherigen Versionen stellten Backend und Frontend auf getrennten Ports bereit, und wer installierte, musste Reverse Proxy, TLS und die Liste erlaubter Origins für CORS selbst lösen. Drei Gelegenheiten, etwas falsch zu machen, bevor der erste Bildschirm erscheint.

Jetzt liefert ein Caddy-Container alles aus einem einzigen Origin: `/api/*` geht ans Backend, der Rest an die Oberfläche. Der Browser spricht nie mit zwei Adressen, **CORS hört damit auf, ein Problem zu sein**. Und Caddy holt das Zertifikat bei Let's Encrypt, ohne dass jemand daran denken muss.

![Aufbau der Installation: der Browser kommt per HTTPS zu Caddy, das /api/* ans Backend und alles Übrige ans Nuxt-Frontend verteilt; das Backend spricht mit PostgreSQL](/diagrams/install-stack.svg)

*Vier Container und ein einziger offener Port. Nach außen sichtbar ist nur Caddy.*

## Ein Image für alle Installationen

Das ist das Detail, über das wir uns am meisten freuen, weil es keine einzige neue Zeile Code gekostet hat.

Das Frontend-Image wird mit einer Standard-API-URL gebaut. Normalerweise zwingt das zu einem Image pro Deployment, also genau zu dem, was wir vermeiden wollten. Nötig ist es nicht: Nuxt liest diese URL über `runtimeConfig`, die Variable `NUXT_PUBLIC_API_BASE_URL` überschreibt sie also beim Start des Containers. Einkompiliert wurde nur der Standardwert.

Ein Image, jede beliebige Domain. Wir haben es vor der Veröffentlichung geprüft: Was die Anwendung ausliefert, trägt die URL Ihrer Installation, nicht die aus dem Build.

## Aktualisieren

```bash
# in .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Die Migrationen laufen von selbst, bevor die API wieder Anfragen annimmt.

> **Pinnen Sie die Version, statt `latest` stehen zu lassen.** So erreicht Sie ein Update nie überraschend an dem Tag, an dem Sie aus einem anderen Grund neu starten. Und **sichern Sie vorher**: [hier steht, wie](https://github.com/martinezsalmeron/dentalpin/discussions/112). Es sind zwei Docker-Volumes, eines mit der Datenbank und eines mit den hochgeladenen Dateien. Beide, nicht nur das erste.

## Eine Lektion aus der ersten Stunde

Die erste Fassung dieser Images erschien nur für `amd64`. Die Überlegung klang vernünftig: Jeder VPS, den man heute mietet, ist x86, und zusätzlich für ARM zu bauen kostet Zeit in der Integrationspipeline.

Sie hielt zwanzig Minuten. So lange brauchten wir, um der eigenen Anleitung auf einem Mac mit Apple Silicon zu folgen:

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

Der erste Befehl der Installation. Genau das, wofür diese Arbeit gedacht war.

> Der Fehler war nicht technisch, sondern eine Frage des Urteils: Wir dachten an den Produktionsserver und **vergaßen, dass fast alle Dinge zuerst auf dem eigenen Laptop ausprobieren**. Dazu kommt, dass die ARM-Instanzen bei Hetzner die günstigsten in Europa sind und sich an genau dieses Publikum richten.

Jetzt wird jede Architektur auf ihrer eigenen Maschine gebaut und pro Image ein einziges Manifest veröffentlicht. Fehlt eine der beiden, erscheint das Release nicht.

Sie haben Dentalpin installiert und etwas lief anders als hier beschrieben? Schreiben Sie es in die [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Dass die Installation beim ersten Versuch klappt, ist uns gerade wichtiger als alles andere.
