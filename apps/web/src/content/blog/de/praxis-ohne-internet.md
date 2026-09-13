---
title: "Der Tag, an dem das Internet ausfällt: Zahnarztpraxis ohne Verbindung weiterführen"
description: "Was in der Zahnarztpraxis ausfällt, wenn die Leitung weg ist, was weiterläuft, was Sie vorher vorbereiten und wie Sie den Tag danach nacharbeiten."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [notfallplan, praxis-it, terminplanung, praxisorganisation]
---

Läuft Ihre Software im Browser gegen den Server eines anderen, legt ein Leitungsausfall die ganze Praxis still, Terminkalender, Patientenakte und Zahnschema eingeschlossen. Läuft sie auf einem Server in der Praxis, verlieren Sie Erinnerungen, Online-Terminbuchung, die Anwendungen der Telematikinfrastruktur und vermutlich das Kartenterminal, aber der Terminkalender und die Dokumentation bleiben offen.

Welcher der beiden Fälle bei Ihnen zutrifft, entscheidet alles Weitere, und das klärt man heute und nicht an dem Dienstag, an dem es passiert. Im Folgenden steht, was genau ausfällt, was vorbereitet sein muss, was währenddessen aufgeschrieben wird und in welcher Reihenfolge Sie danach nacharbeiten.

## Wo die Software läuft, entscheidet, was Sie verlieren

Auf die Frage "können wir ohne Internet arbeiten" gibt es keine einheitliche Antwort, weil sich hinter dem Wort Software drei verschiedene Architekturen verbergen und jede sich anders verhält.

| Was Sie tun müssen | Browser gegen entfernten Server | Server in der Praxis | Programm auf jedem Arbeitsplatz |
|---|---|---|---|
| Den Terminkalender des Tages öffnen | ✗ Nein | ✓ Ja | ✓ Ja |
| Akte und Zahnschema einsehen | ✗ Nein | ✓ Ja | ✓ Ja |
| Befunde, Kostenvoranschläge und Rechnungen schreiben | ✗ Nein | ✓ Ja | ✓ Ja |
| Bereits gespeicherte Röntgenbilder ansehen | ✗ Nein | ✓ Ja | ~ Je nachdem, wo die Bilder liegen |
| Erinnerungen, Online-Terminbuchung, Patientenportal | ✗ Nein | ✗ Nein | ✗ Nein |
| Datensicherung außer Haus | ✗ Nein | ~ Läuft nach, sobald die Leitung zurück ist | ~ Läuft nach, sobald die Leitung zurück ist |

Die Zeile, die die meisten überrascht, ist die mit den Röntgenbildern. Ein Sensor kann im lokalen Netz hängen und in einen Ordner in der Praxis schreiben, oder er lädt zum Dienst des Herstellers hoch, und am Empfang sehen beide Varianten gleich aus, bis zu dem Tag, an dem keine Leitung da ist.

![Schema der Installation: Browser, Caddy auf Port 443, Nuxt-Frontend, API und PostgreSQL mit seinen Datenvolumes](/diagrams/install-stack.svg)

*Browser, Caddy, Frontend, API und Datenbank. Das Schema sagt nicht, wo dieser Rechner physisch steht, und genau das ist die Frage, die vor einem Ausfall beantwortet sein sollte.*

## Was ausfällt, in der Reihenfolge, in der Sie es merken

- **Die Online-Terminbuchung hört lautlos auf.** Niemand sagt Ihnen Bescheid: in diesen Stunden werden schlicht keine Termine gebucht, und es gibt keine Möglichkeit zu erfahren, wie viele verloren gingen.
- **Erinnerungen gehen nicht raus.** SMS, WhatsApp und E-Mail werden von außerhalb der Praxis versendet, der Schwung für morgen verlässt das Haus also nicht, selbst wenn die lokale Software läuft.
- **Das Kartenterminal hängt davon ab, wie es angebunden ist.** Geräte im Praxisnetz verstummen, Geräte mit eigener SIM-Karte kassieren meist weiter. Das ist eine Frage von einer Zeile an Ihren Zahlungsdienstleister, und sie gehört vorher gestellt.
- **Alles, was in ein fremdes System geht, bleibt liegen.** Die TI-Anwendungen ebenso wie der Rechnungsversand an das Abrechnungsunternehmen.
- **Die Sicherung außer Haus läuft in dieser Nacht nicht**, wenn die Leitung zum Feierabend noch weg ist. Eine Nacht ist nicht schlimm. Zwei Wochen, in denen niemand die Fehlermeldungen liest, schon.
- **E-Mail und ein IP-Telefon sind ebenfalls Internet.** Viele Praxen stellen genau in diesem Moment fest, dass ihre einzige Rufnummer über denselben Router lief.

## Das SLA Ihres Anbieters ist nicht das SLA Ihrer Leitung

99,9 % Verfügbarkeit klingt, als passiere nie etwas. Das sind 43 Minuten im Monat und 8 Stunden 46 Minuten im Jahr. Die ebenfalls veröffentlichten 99,5 % sind rund dreieinhalb Stunden im Monat und fast 44 Stunden im Jahr.

Diese Zahlen decken ohnehin nur den Server des Anbieters ab. Ihr Anschluss ist ein eigener Vertrag, und ein normaler Geschäftsanschluss bringt meist gar keine Verfügbarkeitszusage mit.

> **Die meisten Ausfälle einer kleinen Praxis beginnen am Bordstein, nicht im Rechenzentrum.** Eine Baustelle, ein geöffneter Glasfaserverteiler oder ein sieben Jahre alter Router stehen in niemandes SLA, und sie sind die übliche Ursache für einen Vormittag ohne Leitung.

## Das Ausfallpaket

Nichts davon ist teuer, und alles muss vorher existieren, denn der Moment zum Suchen ist nicht der, in dem vier Personen am Empfang warten.

1. **Drucken Sie den Terminplan für den nächsten Tag vor dem Schließen aus.** Ein Blatt: Name, Uhrzeit, Behandlungsstuhl und geplante Leistung. Das ist das Stück, das aus einem Ausfall ein Ärgernis statt eines verlorenen Tages macht.
2. **Halten Sie einen zweiten, getesteten Datenweg bereit**, einen Router mit SIM-Karte oder den Hotspot eines Telefons. Getestet heißt, dass ihn schon einmal jemand eingeschaltet hat, nicht dass er in einer Schublade liegt.
3. **Setzen Sie eine USV vor den Server und auch vor den Router**, denn ein laufender Server hinter einem toten Router nützt niemandem.
4. **Halten Sie Einwilligungen und Dokumentationsbögen gedruckt bereit**, die fünf oder sechs, die Sie wirklich benutzen.
5. **Bewahren Sie die Telefonliste des Tages außerhalb des Systems auf**, damit lässt sich der Patient von 17 Uhr noch erreichen.
6. **Schreiben Sie auf, wer was tut**: wer den Anbieter anruft, wer die Patienten anruft, wer dafür zuständig ist, mitzuschreiben.

![Terminkalender in der Tagesansicht mit den Terminen über die Zeitschienen verteilt](/screenshots/schedule-day.png)

*Das ist die Ansicht, die am Abend vorher auf Papier müssen kann, nicht an dem Morgen, an dem man sie braucht.*

## Was währenddessen aufgeschrieben wird

Ohne Verbindung zu arbeiten ist nicht das Problem. Das Problem ist, zurückzukommen und nicht zu wissen, was zwischen neun und eins passiert ist.

- **Wer da war und wer nicht**, mit der tatsächlichen Uhrzeit, damit Terminausfälle dort landen, wo sie hingehören.
- **Was bei jedem Patienten gemacht wurde**, in der Tiefe, die Sie auch in die Akte schreiben würden, kein Dreiwortprotokoll.
- **Chargen und Artikelnummern von Implantaten und Material**, die die Software sonst selbst einträgt. Das geht am häufigsten verloren und lässt sich am schwersten rekonstruieren.
- **Jede angenommene Zahlung**, Betrag, Zahlungsart und zugehörige Leistung.
- **Die vollständigen Daten neuer Patienten**, denn eine drei Stunden später aus dem Gedächtnis angelegte Karteikarte ist eine Karteikarte mit Fehlern.
- **Wer angerufen hat und weshalb**, Absagen eingeschlossen, denn die bringen den Plan für morgen durcheinander.

> **Was während des Ausfalls nicht notiert wird, kommt danach nicht zurück.** Die Software kehrt mit allem zurück, was sie um neun Uhr hatte, und was dazwischen geschah, existiert nur auf dem Papier, das jemand ausgefüllt hat.

## Nacharbeiten, wenn die Leitung zurück ist

Die Reihenfolge zählt, weil manches aufeinander aufbaut und weil die Versuchung groß ist, mit dem Einfachen anzufangen.

1. **Prüfen Sie zuerst, ob die Sicherung der letzten Nacht gelaufen ist**, und starten Sie jetzt eine, falls nicht.
2. **Legen Sie zuerst die neuen Patienten an**, alles andere hängt daran.
3. **Übertragen Sie die Behandlungsdokumentation vom Papier**, Patient für Patient, am selben Tag. Morgen weiß niemand mehr, was eine Abkürzung bedeuten sollte.
4. **Erfassen Sie die Zahlungen** und gleichen Sie sie mit Terminal und Kasse ab.
5. **Korrigieren Sie den Terminkalender**: Ausfälle, telefonisch entgegengenommene Absagen und alles, was verschoben wurde.
6. **Sehen Sie nach, welche Erinnerungen nicht rausgegangen sind**, und entscheiden Sie, welche noch sinnvoll sind. Eine Erinnerung an einen bereits vergangenen Termin richtet mehr Schaden an als gar keine.
7. **Heben Sie das Papier auf, bis alles nachweislich erfasst ist**, und vernichten Sie es danach wie die übrige Behandlungsdokumentation.

## Was die DSGVO von Ihnen erwartet

Verfügbarkeit ist kein Zusatz zur Sicherheit, sie ist eine der drei Eigenschaften, die die Verordnung benennt. Artikel 32 Absatz 1 nennt unter den geeigneten technischen und organisatorischen Maßnahmen:

> **b) die Fähigkeit, die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme und Dienste im Zusammenhang mit der Verarbeitung auf Dauer sicherzustellen; c) die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen.**

Ein zweistündiger Leitungsausfall ist für sich genommen keine meldepflichtige Verletzung. Was sehr wohl unter diesen Artikel fällt, ist der Fall, dass Sie an die Akte eines Patienten nicht herankommen, der bereits im Stuhl sitzt, oder dass die Arbeit eines Vormittags verloren geht, weil niemand an Papier gedacht hatte.

Dies ist keine Rechtsberatung. Für Ihren konkreten Fall sind Ihr Datenschutzbeauftragter oder Ihr Anwalt die richtigen Ansprechpartner.

## Fünf Fragen an Ihren Anbieter, bevor Sie die Antworten brauchen

- **Welche Teile des Produkts laufen genau weiter, wenn die Praxis ihre Leitung verliert?** Eine Liste ist eine gute Antwort. "Alles liegt in der Cloud, keine Sorge" ist keine.
- **Wo steht die Datenbank physisch**, und was wäre nötig, um ohne Sie an sie heranzukommen.
- **Veröffentlichen Sie ein SLA, mit welchem Prozentsatz und was ersetzt es**, wenn es gerissen wird.
- **Was passiert mit Erinnerungen, die nicht rausgingen?** Werden sie erneut versucht, verfallen sie, oder stauen sie sich und gehen auf einmal raus.
- **Kann ich den Terminplan von morgen selbst als PDF oder CSV exportieren**, ohne ein Ticket zu öffnen.

Die Antworten auf diese fünf sagen mehr über ein Produkt aus als die halbe Funktionsseite.

Dentalpin lässt sich auf einem Rechner in der Praxis installieren, damit wird ein Leitungsausfall zu einem Kommunikationsausfall und nicht zu einem Ausfall der Patientenakte: Terminkalender, Zahnschema und Rechnungen bleiben im lokalen Netz offen, während draußen nichts erreichbar ist. Die Bedingungen der gehosteten und der selbst betriebenen Variante stehen unter [Preise](/de/preise/), und wer den Aufbau vorher sehen will: [die Installation dauert drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/).

## Quellen

- Verordnung (EU) 2016/679 (DSGVO), Artikel 32 Absatz 1 Buchstaben b und c. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 13. September 2026.
