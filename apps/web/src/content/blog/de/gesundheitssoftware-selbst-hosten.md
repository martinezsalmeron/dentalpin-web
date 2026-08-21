---
title: "Gesundheitssoftware selbst hosten: was Ihnen niemand sagt"
description: "Selbst hosten kostet keine Lizenz, es kostet Betrieb: eine wirklich getestete Wiederherstellung, das Zertifikat, das PostgreSQL-Hauptversionsupdate und jemanden, der rangeht."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [selfhosting, docker, postgresql, sicherheit, dsgvo]
---

Gesundheitssoftware selbst zu hosten ist nicht kostenlos: kostenlos ist die Lizenz. Was Sie übernehmen, sind vier Aufgaben, die nie enden: eine Sicherung, die Sie tatsächlich einmal zurückgespielt haben, ein Zertifikat, das sich von allein erneuert, bis es das eines Tages nicht mehr tut, alle paar Jahre ein PostgreSQL-Update auf eine neue Hauptversion, und eine Person, die montags um acht erreichbar ist. Haben diese vier Aufgaben einen Verantwortlichen, ist Selbsthosting eine gute und günstige Entscheidung. Haben sie keinen, ist Ihr Server ein Softwarehersteller mit einer einzigen Mitarbeiterin und ohne Rufbereitschaft.

Was jetzt kommt, steht in keiner Installationsanleitung, jeweils mit der technischen oder rechtlichen Quelle dazu.

## Installieren dauert einen Tag, Betreiben fünf Jahre

Die Installation ist wirklich einfach geworden. Drei Dateien, ein `docker compose up`, und wenige Minuten später läuft eine Anwendung samt eigenem Zertifikat. Dieser Teil ist nicht mehr das Problem, und genau deshalb täuscht er.

Das Problem ist alles danach, und das hat kein Enddatum: Betriebssystem-Updates, Speicherplatz, Warnmeldungen, die niemand liest, die Datenbankmigration in drei Jahren und die Nacht, in der der Server nicht wieder hochkommt.

> **Die Installation ist ein Ereignis, der Betrieb ist eine Dauerverpflichtung.** Niemand gibt einen Server am ersten Tag auf. Aufgegeben wird er im vierzehnten Monat, wenn die Person, die ihn aufgesetzt hat, den Arbeitgeber gewechselt hat und die Fehlermails weiterhin an ihre alte Adresse gehen.

![Schema einer selbst gehosteten Installation: der Browser erreicht Caddy über HTTPS, das /api/* an das Backend und alles Übrige an das Nuxt-Frontend weiterleitet; das Backend spricht mit PostgreSQL](/diagrams/install-stack.svg)

*Vier Prozesse und eine Datenbank. Jeder Kasten in diesem Schema ist etwas, das jemand aktuell halten muss.*

## Was das Gesetz weiterhin verlangt, egal wo der Server steht

Selbsthosting bringt keine neuen rechtlichen Pflichten. Es nimmt Ihnen nur denjenigen weg, der einen Teil davon bisher für Sie erfüllt hat.

Die Praxis ist Verantwortliche für die Daten ihrer Patientinnen und Patienten, ob der Server im Schrank hinter der Anmeldung steht oder in einem fremden Rechenzentrum. Artikel 32 DSGVO nennt unter den technischen und organisatorischen Maßnahmen zwei Punkte, die sich wie eine Aufgabenliste für die Systembetreuung lesen:

- **Artikel 32 Absatz 1 Buchstabe c**: die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen.
- **Artikel 32 Absatz 1 Buchstabe d**: ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen. Der regelmäßige Test ist keine freiwillige gute Praxis, er steht im Artikeltext.

Dazu kommt Artikel 33 Absatz 1: eine Verletzung des Schutzes personenbezogener Daten wird der Aufsichtsbehörde unverzüglich und möglichst binnen 72 Stunden gemeldet, nachdem sie bekannt geworden ist.

> **Die 72 Stunden laufen ab dem Moment, in dem Sie es wissen, nicht ab dem Moment, in dem Sie es verstehen.** Gehört der Server Ihnen, ruft Sie niemand an, um Ihnen zu sagen, dass etwas passiert ist. Auch diese Meldekette müssen Sie selbst aufbauen.

Das ist keine Rechtsberatung. Wie diese Vorgaben auf Ihre Praxis wirken, klären Sie am besten mit Ihrer Rechtsberatung oder Ihrer Kammer.

## Die Daten liegen nicht im Container

Das ist das teuerste Missverständnis der ersten Monate. Die Docker-Dokumentation sagt es ohne Umschweife: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

In der Praxis: Sie können Container beliebig oft löschen und neu erstellen, aber sichern müssen Sie die Volumes. Und eine typische Installation im Gesundheitsbereich hat mindestens zwei davon.

- **Die Datenbank**, mit Patientenakte, Terminkalender, Behandlungsdokumentation, Kostenvoranschlägen und Abrechnung.
- **Die hochgeladenen Dateien**, also Röntgenbilder, klinische Fotos und unterschriebene PDF. Sie sind meist deutlich größer als die Datenbank, und sie sind meist das, was vergessen wird.

Ein Datenbankexport ohne den Dateiordner stellt eine Praxis ohne ein einziges Bild wieder her. Technisch ist das eine Sicherung, praktisch die Hälfte davon.

**Und im laufenden Betrieb kopiert man nicht einfach mit `cp`.** Die PostgreSQL-Dokumentation ist beim Kopieren des Datenverzeichnisses bei laufendem Server eindeutig: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". Was bei laufendem Server funktioniert, ist `pg_dump`, dessen Exporte "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running" sind.

Die französische Aufsichtsbehörde fasst die Grundvorkehrungen in vier Zeilen zusammen, die überall gelten: häufig sichern, mindestens eine Kopie an einem geografisch getrennten Standort aufbewahren, mindestens eine Kopie offline und vom Netz getrennt halten, und regelmäßig sowohl die Integrität der Sicherungen als auch die Fähigkeit testen, sie zurückzuspielen.

Diese letzte Zeile entscheidet alles, und sie hat einen eigenen Leitfaden: [was gesichert gehört und wie oft](/de/blog/datensicherung-zahnarztpraxis/).

## Das Zertifikat erneuert sich von allein, bis jemand Port 80 schließt

Let's-Encrypt-Zertifikate "are valid for 90 days", und die Zertifizierungsstelle empfiehlt selbst "renewing 90 day certificates every 60 days". Der ACME-Client erledigt das ungefragt, weshalb das Thema aus dem Kopf aller Beteiligten verschwindet.

Bis es scheitert, und es scheitert auf eine sehr bestimmte Weise. Die HTTP-01-Challenge "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

Schließt also jemand Port 80 in der Firewall, weil "ohnehin alles über HTTPS läuft", funktioniert die Erneuerung stillschweigend nicht mehr. Die Seite läuft dreißig Tage lang einwandfrei, und dann zeigt der Browser an der Anmeldung an einem gewöhnlichen Dienstag eine bildschirmfüllende Sicherheitswarnung.

1. **Lassen Sie Port 80 offen**, auch wenn er nur auf HTTPS weiterleitet, oder wechseln Sie zur DNS-01-Challenge, die über einen TXT-Eintrag unter `_acme-challenge.ihre-domain` prüft und einen DNS-Anbieter mit API voraussetzt.
2. **Überwachen Sie das Ablaufdatum von außerhalb** des Servers, mit einer beliebigen externen Prüfung. Eine Warnung, die auf der ausgefallenen Maschine liegt, warnt niemanden.
3. **Prüfen Sie am 65. Tag**, dass die Erneuerung wirklich stattgefunden hat, nicht nur, dass der Timer gelaufen ist.
4. **Halten Sie fest, wer die Warnung bekommt**, und prüfen Sie, ob diese Adresse noch existiert, wenn die Person die Praxis verlässt.

## Das Update, das wirklich weh tut

Kleine Updates sind Routine. PostgreSQL sichert zu: "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Von 17.4 auf 17.6 heißt: Container neu starten.

Eine neue Hauptversion ist etwas anderes: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." Ein PostgreSQL-17-Container startet nicht auf einem Datenverzeichnis, das Version 16 geschrieben hat. Steht Ihr Image auf `latest`, kommt die Datenbank an dem Tag nicht hoch, an dem das Tag umgezogen wird, und die Fehlermeldung ist um acht Uhr morgens alles andere als selbsterklärend.

Das Projekt dokumentiert drei Wege: exportieren und zurückspielen mit `pg_dumpall`, das schnellere `pg_upgrade`, oder Replikation. Sich für einen zu entscheiden kostet eine halbe Stunde Lesen. Das mitten im Ausfall herauszufinden kostet einen Tag.

1. **Fixieren Sie die Hauptversion** in der Konfiguration, niemals `latest`, weder für die Anwendung noch für die Datenbank.
2. **Sehen Sie einmal im Jahr in den Supportkalender** Ihrer Version und planen Sie den Sprung, bevor die Sicherheitsupdates auslaufen.
3. **Führen Sie die Migration auf einer Kopie durch**, auf einer anderen Maschine, und stoppen Sie die Zeit.
4. **Bewahren Sie den vorherigen Export auf**, bis die Praxis eine volle Woche auf der neuen Version gearbeitet hat.

## Wer geht montags um acht ans Telefon

Das ist die Frage, die entscheidet, und sie ist nicht technisch.

Eine Zahnarztpraxis öffnet um acht oder neun, und der Terminkalender ist ab dem ersten Slot voll. Startet der Server nicht, gibt es keine Patientenakte, keine Einwilligungen und keine Möglichkeit zu wissen, wer heute kommt. Die relevante Frage ist nicht, ob Sie das reparieren könnten, sondern ob diese Person in diesem Moment verfügbar ist, mit Notebook.

![Startbildschirm mit den heutigen Terminen, wer in der Praxis ist, überfälligen Zahlungen und zuletzt behandelten Patienten](/screenshots/home.png)

*Das ist der Bildschirm, der um acht stehen muss. Alles andere kann bis mittags warten.*

Ehrliche Antworten, die funktionieren: der IT-Dienstleister der Praxis mit Stundenvertrag und Telefonnummer, die Zahnärztin selbst, wenn ihr das liegt und sie es übernimmt, oder ein Managed-Service-Anbieter. Antworten, die nicht funktionieren: der Neffe, und "das schaue ich mir später an".

## Selbst hosten oder nicht: die Tabelle

| | Eigener Server | Managed Service |
|---|---|---|
| Lizenz | ✓ Keine Gebühr bei freier Software | ✗ Gebühr, solange Sie es nutzen |
| Wo die Daten liegen | ✓ Auf Ihrer Maschine | ~ Dort, wo der Vertrag es sagt |
| Systemupdates | ✗ Sie spielen sie ein | ✓ Der Anbieter spielt sie ein |
| Datensicherung | ✗ Sie bauen und testen sie | ~ Er sichert, Sie testen trotzdem |
| Montag, 8:00 Uhr | ✗ Hängt davon ab, wer erreichbar ist | ✓ Hängt von seiner Servicezusage ab |
| PostgreSQL-Hauptversion | ✗ Sie planen sie | ✓ Er plant sie |
| Wenn der Anbieter aufhört | ✓ Es läuft weiter | ✗ Hängt vom Export ab, den Sie bekommen |
| Tatsächliche Kosten | ~ Günstiger Server, teure Stunden | ~ Planbare Gebühr, fremde Stunden |

Die rechte Spalte entlastet Sie rechtlich von nichts: Sie bleiben Verantwortliche und müssen weiterhin nachweisen können, dass Sie wiederherstellen können. Was sie kauft, ist, dass jemand anderes die Arbeit macht, und eine Nummer, die Sie anrufen können, wenn er es nicht getan hat.

## Die drei Fragen vor der Entscheidung

1. **Wem gehört der Server, mit Vor- und Nachnamen?** Nicht die Funktion, die Person. Dauert die Antwort länger als fünf Sekunden, gibt es keinen Verantwortlichen.
2. **Wann hat zuletzt jemand eine vollständige Wiederherstellung wirklich durchgeführt?** Lautet die Antwort "nie", haben Sie keine Sicherungen, sondern große Dateien.
3. **Was passiert an dem Tag, an dem diese Person geht?** Schreiben Sie das Verfahren jetzt auf, legen Sie es außerhalb des Systems ab, das wiederhergestellt werden muss, und lassen Sie es jemand anderen lesen.

Haben alle drei eine Antwort, ist Selbsthosting eine ausgezeichnete Entscheidung: volle Kontrolle über die Daten, keine laufende Gebühr, keine Abhängigkeit davon, dass ein Unternehmen weiter existiert. Bleibt eine offen, klären Sie zuerst diese und entscheiden Sie danach.

Bei Dentalpin besteht die selbst gehostete Installation aus vier Containern und zwei Volumes, der Datenbank und den hochgeladenen Dateien, also ist die Sicherung ein normaler PostgreSQL-Export plus ein Ordner und lässt sich mit den Werkzeugen automatisieren, die Sie ohnehin einsetzen. Die Konditionen für die selbst gehostete und die gehostete Variante stehen unter [Preise](/de/preise/), und wenn Sie eine Wiederherstellung proben wollen, bevor Sie sich auf irgendetwas festlegen: [die Installation dauert drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/).

## Quellen

- Verordnung (EU) 2016/679 (DSGVO), Artikel 32 und 33. Text auf [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) und in [Kapitel 4 in der Veröffentlichung der CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Abgerufen am 19. August 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Abgerufen am 19. August 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Abgerufen am 19. August 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Abgerufen am 19. August 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Abgerufen am 19. August 2026.
- Let's Encrypt, *FAQ* und *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) und [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Abgerufen am 19. August 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Abgerufen am 19. August 2026.
