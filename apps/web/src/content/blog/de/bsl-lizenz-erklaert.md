---
title: "Was die BSL-Lizenz ist und was sie Ihnen erlaubt"
description: "Die BSL erlaubt Download, Audit und Betrieb auf dem eigenen Server, verbietet den Weiterverkauf als SaaS und läuft ab: jede Version wird nach vier Jahren offen."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [lizenzen, open-source, bsl, vertraege, zahnarztsoftware]
---

Die Business Source License lässt Sie den Quellcode herunterladen, lesen, verändern und auf Ihrem eigenen Server betreiben, ohne dafür zu zahlen. Sie verbietet eine einzige Sache: dieselbe Software als kommerziellen Dienst weiterzuverkaufen, der dem Herausgeber Konkurrenz macht. Und sie läuft ab, denn jede Version wechselt spätestens vier Jahre nach ihrer Veröffentlichung automatisch in eine echte Open-Source-Lizenz.

Diesen dritten Teil liest fast niemand, und genau er entscheidet, ob die Lizenz zu Ihnen passt.

> **Die BSL ist keine Open-Source-Lizenz, und sie sagt das selbst.** Ihr eigener Hinweis beginnt so: „The Business Source License (this document, or the 'License') is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License."

## Die fünf Felder, die der Herausgeber ausfüllt

Die BSL ist keine feste Lizenz wie MIT oder GPL, deren Text immer identisch ist. Sie ist eine Vorlage mit fünf Lücken, und wer die Software veröffentlicht, füllt sie aus.

Das heißt: „steht unter BSL" sagt Ihnen noch nicht, was Sie tun dürfen. Sie müssen in die Felder schauen.

| Parameter | Was er festlegt |
|---|---|
| Licensor | Wer die Software herausgibt und bei wem Sie kaufen, falls Sie eine kommerzielle Lizenz brauchen |
| Licensed Work | Welche Software und welche genauen Versionen diese Lizenz abdeckt |
| Additional Use Grant | Welche produktive Nutzung kostenlos erlaubt ist |
| Change Date | Das Datum, an dem diese Version von selbst die Lizenz wechselt |
| Change License | Die Open-Source-Lizenz, in die sie an diesem Tag übergeht |

Zwei dieser fünf Felder sind die ganze Verhandlung: der **Additional Use Grant**, der festlegt, wie weit Sie die Software produktiv kostenlos nutzen dürfen, und das **Change Date**, das festlegt, wann die Einschränkung keine Rolle mehr spielt.

Das von den Lizenzautoren selbst veröffentlichte Beispiel ist MariaDB MaxScale. Dessen Additional Use Grant lautet: „You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production." Unter drei Servern kostenlos, darüber kommerzielle Lizenz.

## Was die BSL erlaubt und was nicht

Der Grundtext gewährt das Recht zu kopieren, zu verändern, abgeleitete Werke zu erstellen, weiterzugeben und nicht produktiv zu nutzen. Die produktive Nutzung hängt an dem Feld von oben.

| Handlung | Unter einer BSL-Lizenz |
|---|---|
| Den gesamten Code herunterladen und lesen | ✓ Immer erlaubt |
| Ihn für den eigenen Fall anpassen | ✓ Immer erlaubt |
| Ihn mit beigefügter Lizenz weitergeben | ✓ Immer erlaubt |
| Ihn zum Testen und Entwickeln nutzen | ✓ Immer erlaubt |
| Ihn produktiv einsetzen | ~ Nur so weit, wie der Additional Use Grant reicht |
| Ihn als konkurrierenden kommerziellen Dienst verkaufen | ✗ Erfordert eine kommerzielle Lizenz |

Nur die gelbe Zeile muss man genau lesen. „Produktiv" meint die echte Nutzung, aus der wirtschaftlicher Wert entsteht, also Ihre Praxis mit echten Patienten, nicht eine Testinstallation auf einem Notebook.

## Keine Open-Source-Lizenz zu sein ist kein Mangel, aber eine Information

Die Open Source Initiative pflegt die Open Source Definition, und deren Klausel 6 lautet, dass „die Lizenz niemanden darin einschränken darf, das Programm in einem bestimmten Tätigkeitsfeld einzusetzen". Eine BSL schränkt genau das ein: ein Tätigkeitsfeld, nämlich einen konkurrierenden SaaS-Dienst aufzubauen.

Deshalb steht sie nicht auf der Liste der von der OSI anerkannten Lizenzen, und deshalb nimmt ihr eigener Text die Frage vorweg.

In der Praxis erreicht Sie das an zwei konkreten Stellen:

- **In einer Ausschreibung oder einem Lastenheft**, das mit diesen Worten „quelloffene Software" verlangt, erfüllt eine BSL die formale Anforderung nicht, obwohl der gesamte Code veröffentlicht ist.
- **Beim Audit durch Ihren IT-Dienstleister** ändert sich dagegen nichts. Er kann den Code lesen, bauen und genauso prüfen, was mit den Daten geschieht.

## Das Change Date ist die Klausel, die Sie wirklich schützt

Das unterscheidet die BSL von proprietärer Software, die zufällig ihren Code zeigt. Die Einschränkung hat ein Ablaufdatum, und es steht in der Datei selbst.

Version 1.1 der Lizenz hat eine Obergrenze gesetzt: Das Change Date darf höchstens vier Jahre nach der ersten öffentlichen Verbreitung dieser Version liegen. Und die Ziellizenz muss GPL v2, GPL v3 oder eine damit kompatible sein, also eine echte Open-Source-Lizenz.

> **Das Change Date gilt Version für Version, nicht für das ganze Projekt.** Die Version, die Sie dieses Jahr installiert haben, hat ihr eigenes Datum, und eine in zwei Jahren veröffentlichte hat ihres. Die Uhr Ihrer Installation lief an dem Tag an, an dem diese Version erschien, nicht an dem Tag, an dem Sie sie installiert haben.

![Patientenakte mit klinischen Warnhinweisen, aktivem Behandlungsplan und einer nach Terminen, Behandlungen, Zahlungen und Kommunikation filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Jahre an Patientenakten in einem Programm. Das Change Date entscheidet, was Sie mit diesem Programm tun können, wenn der Herausgeber verschwindet.*

Anders gesagt: Die BSL gibt Ihnen eine Quellcodehinterlegung, die Sie nie aushandeln mussten. Wenn der Anbieter schließt, wird die Version, die Sie betreiben, trotzdem an ihrem Stichtag Open Source, und jeder fähige Entwickler kann sie ab da pflegen. Bei einer klassischen proprietären Lizenz gibt es diesen Tag nicht.

## Wie Sie jede BSL-Lizenz in fünf Minuten lesen

Für den ersten Durchgang brauchen Sie keinen Anwalt. Öffnen Sie die Datei `LICENSE` im Repository und suchen Sie diese fünf Dinge, in dieser Reihenfolge:

1. **Prüfen Sie die Lizenzversion.** Dort muss „Business Source License 1.1" stehen. Die 1.0 kannte die Vier-Jahres-Grenze noch nicht.
2. **Lesen Sie den Additional Use Grant vollständig.** Das ist der eine Satz, der entscheidet, ob Ihre tatsächliche Nutzung kostenlos ist. Fehlt er, gewährt der Grundtext nur nicht produktive Nutzung.
3. **Sehen Sie sich das Change Date an.** Es kann ein festes Datum oder eine Formel sein („vier Jahre nach Veröffentlichung"). Alles jenseits von vier Jahren fällt aus dem, was die 1.1 zulässt.
4. **Sehen Sie sich die Change License an.** Steht dort Apache 2.0, GPL oder MPL, wissen Sie genau, was Sie an diesem Tag bekommen, denn das sind Standardlizenzen mit öffentlichem Text.
5. **Suchen Sie das Licensed Work.** Nennt es bestimmte Versionen, gilt die Lizenz für diese, und spätere können unter anderen Bedingungen erscheinen.

Wenn alle fünf ausgefüllt und lesbar sind, wissen Sie über diese Software bereits mehr als die meisten, die sie installieren.

> **Das ist keine Rechtsberatung.** Es ist die Lektüre eines öffentlichen Dokuments. Für einen unterschriebenen Vertrag, eine Ausschreibung oder jede Frage zu Ihrem konkreten Fall muss die Antwort von einem Anwalt kommen.

## Was das für eine Zahnarztpraxis ändert

Die meisten dieser Klauseln sind mit Blick auf Softwarefirmen geschrieben, nicht auf eine Praxis. Übersetzt in das, was Sie betrifft:

- **Die Einschränkung der BSL trifft Sie so gut wie nie.** Sie verbietet einen konkurrierenden SaaS-Dienst. Eine Praxis, die das Programm für ihre eigenen Patienten nutzt, fällt nicht darunter, solange der Additional Use Grant diese Nutzung abdeckt.
- **Sie können es auf Ihrem eigenen Server installieren** und betreiben, ohne um Erlaubnis zu fragen oder etwas freizuschalten. Das ist der größte praktische Unterschied zu Software mit Lizenz pro Arbeitsplatz.
- **Ihr IT-Dienstleister kann es wirklich prüfen.** Er kann lesen, was gespeichert wird, wo, und was die Praxis verlässt, ohne mit irgendwem eine Geheimhaltungsvereinbarung zu unterschreiben.
- **Sie haben einen schriftlichen Ausweg.** Das Change Date steht in der Datei, nicht in einem Vertriebsversprechen.

![Schaubild des selbst gehosteten Aufbaus: Browser, Caddy auf Port 443, Nuxt-Frontend, API und PostgreSQL-Datenbank](/diagrams/install-stack.svg)

*Der Aufbau, den eine solche Lizenz erlaubt: alles läuft auf einem Server, der Ihnen gehört, ohne Freischaltung beim Hersteller.*

## Die Lizenz von Dentalpin, Feld für Feld

Dentalpin erscheint unter BSL 1.1, Sie können also genau die fünf Prüfungen von oben daran vornehmen. Seine Datei `LICENSE` sagt wörtlich:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** „You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work."
- **Change Date:** vier Jahre nach der Veröffentlichung des lizenzierten Werks.
- **Change License:** Apache License, Version 2.0.

In den häufigen Fragen zum Produkt fassen wir es so zusammen: kostenlos für jede Praxis und jeden Entwickler, mit der einzigen Einschränkung, es nicht als konkurrierende Dental-SaaS anzubieten, und mit automatischem Übergang zu Apache 2.0 nach vier Jahren. Was es kostet und was enthalten ist, steht auf der [Preisseite](/de/preise/).

## Quellen

- [Business Source License 1.1, Lizenztext](https://mariadb.com/bsl11/), MariaDB. Abgerufen am 1. September 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Abgerufen am 1. September 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Abgerufen am 1. September 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Abgerufen am 1. September 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Abgerufen am 1. September 2026.
- Datei `LICENSE` im Repository von Dentalpin. Abgerufen am 1. September 2026.
