---
title: "Zahnarztsoftware wechseln, ohne die Patientenakte zu verlieren"
description: "Praktischer Leitfaden für den Wechsel der Praxissoftware ohne Verlust von Patienten, Behandlungshistorie oder Rechnungen: was Sie exportieren, wie Sie es vorher testen und der Schritt, an dem fast jede Migration scheitert."
pubDate: 2026-07-30
tags: [migration, praxissoftware, patientenakte]
---

Ohne Verlust umzuziehen kommt auf drei Regeln hinaus: Exportieren Sie alles, bevor Sie den alten Vertrag kündigen, und zwar in einem Format, das Sie ohne diese Software lesen können. Testen Sie den Import mit einer Kopie, bevor Sie die echte Praxis anfassen. Und übernehmen Sie keine automatische Zuordnung zwischen Behandlungskatalogen, ohne sie Zeile für Zeile zu prüfen. Wer Daten verliert, hat fast immer die erste Regel übersprungen und darauf vertraut, dass "der neue Anbieter sich schon darum kümmert".

Man muss dafür nicht technisch sein. Man muss es nur in dieser Reihenfolge tun.

## Bevor Sie irgendetwas anfassen: exportieren und prüfen

Fordern Sie den vollständigen Export von dem Anbieter an, den Sie verlassen, nicht eine Auswahl dessen, was er für wichtig hält. Das hier muss mindestens aus seinem System heraus und in Ihrem ankommen, in einem offenen Format (CSV, XML oder eine Datenbank, die Sie ohne Lizenz abfragen können):

- **Die vollständige Patientenakte**: Kontaktdaten, unterschriebene Einwilligungen und Anlagedatum.
- **Behandlungshistorie und Zahnschema**, mit dem Datum jedes Eintrags, nicht nur dem heutigen Stand.
- **Kostenvoranschläge und Rechnungen**, mit ihrer ursprünglichen Nummerierung. Eine Lücke in der Nummernfolge fällt bei einer Prüfung als Erstes auf.
- **Bilder und Röntgenaufnahmen**, die fast immer außerhalb der Hauptdatenbank liegen und bis zum letzten Tag vergessen werden.
- **Den Behandlungskatalog** so, wie er im alten System kodiert ist, nicht nur die Namen, die auf dem Bildschirm stehen.
- **Den historischen Terminkalender**, falls Sie wahrgenommene und ausgefallene Termine später belegen müssen.

![Aktivität eines Patienten in Dentalpin: geplanter Termin, angelegter Behandlungsplan, wahrgenommener Termin und durchgeführte Behandlung, jede Zeile mit Datum](/screenshots/patient-timeline.png)

*Das muss ein Export erhalten: jeden Eintrag mit seinem Datum, nicht nur den Stand von heute.*

> **Der Export ist Ihr Sicherheitsnetz, keine Formalie beim Abschied.** Fordern Sie ihn Wochen vor der Unterschrift beim neuen Anbieter an, öffnen Sie ihn und prüfen Sie ihn selbst. Wenn der Anbieter, den Sie verlassen, sich beim vollständigen Export sperrt, ist das eine Information darüber, wie er mit Ihren Daten umgeht, und Sie haben sie, bevor Sie weg sind.

## Der Schritt, an dem fast jede Migration scheitert

Zwei Praxen kodieren ihre Behandlungen so gut wie nie gleich. Die eine nennt "Wurzelbehandlung", was die andere je nach Zahn und Zahl der Kanäle in drei Positionen aufteilt. Wenn die neue Software den alten Katalog automatisch auf ihren eigenen abbildet, gibt es Zeilen, die offensichtlich passen, und Zeilen, die es nicht tun.

Der Fehler ist nicht, dass die Zuordnung danebenliegt. Der Fehler ist, eine zweifelhafte Zuordnung zu übernehmen, ohne sie anzusehen.

> **Eine still geratene Zuordnung erzeugt falsch gestellte Rechnungen, die monatelang niemand bemerkt.** Das ist kein Softwarefehler, sondern ein Prozessfehler: Prüft niemand Zeile für Zeile, was das System vorschlägt, vererbt sich der Fehler auf jeden Patienten, bei dem diese Behandlung ab jetzt anfällt.

Bevor Sie einen Massenimport freigeben, lassen Sie sich die vorgeschlagene Zuordnung mit Zahlen zeigen: wie viele Patienten, wie viele Positionen in Kostenvoranschlägen und wie viele Rechnungen an jeder Behandlung hängen, die neu zugeordnet werden soll.

## Wie Sie es testen, ohne die echte Praxis zu riskieren

1. **Erzeugen Sie den vollständigen Export** aus dem alten System und legen Sie ihn getrennt ab, außerhalb beider Systeme, bevor Sie irgendetwas installieren.
2. **Lassen Sie den Import in einer Testumgebung laufen**, nicht auf den Produktivdaten des neuen Systems.
3. **Vergleichen Sie die Zahlen**: Patienten, Kostenvoranschläge, Rechnungen und künftige Termine. Wenn es nicht aufgeht, halten Sie hier an.
4. **Fahren Sie einige Wochen parallel**, wenn die Größe der Praxis es zulässt: Rechnen Sie weiter im alten System ab, während Sie prüfen, ob das neue dasselbe abbildet.
5. **Frieren Sie das alte System schreibgeschützt ein**, sobald Sie dem neuen vertrauen. Löschen Sie es nicht und kündigen Sie das Abo noch nicht.

## Was Sie von Ihrem jetzigen Anbieter verlangen sollten

- **Einen vollständigen Export, keine API, die nur zeigt, was der Anbieter zeigen will.**
- **Ein offenes und dokumentiertes Format**, damit die Gegenseite nicht raten muss, was jedes Feld bedeutet.
- **Eine angemessene Frist**, keine Löschandrohung wenige Tage nach der Kündigung.
- **Die Bilder in Originalauflösung**, keine komprimierte Vorschau.

Klären Sie außerdem mit Ihrer Kammer oder Ihrer Steuerkanzlei, welche Aufbewahrungsfristen für Behandlungsunterlagen bei Ihnen gelten. Die sind kein Feld, auf dem man eine Zahl ungeprüft übernimmt.

## Eine Checkliste vor der Unterschrift beim Neuen

| Was zu prüfen ist | Warum es zählt |
|---|---|
| Das Exportformat, das der jetzige Anbieter liefert | Entscheidet, ob Sie ein Zwischenwerkzeug brauchen oder direkt importieren können |
| Ob das neue System eine Vorschau zeigt, bevor es schreibt | Ohne Vorschau ist ein Zuordnungsfehler angewendet, bevor Sie ihn sehen |
| Ob die Zuordnung der Behandlungen Zeile für Zeile oder nur als Block geprüft wird | Der Block ist schnell und genau dort schleicht sich der Fehler ein |
| Ob die Bilder mit der Akte oder getrennt migriert werden | Getrennt heißt, dass jemand sie hinterher von Hand verknüpfen muss |
| Ob Sie das alte System schreibgeschützt behalten können | Ohne das haben Sie später nichts, womit Sie vergleichen könnten |

![Rechnungsliste mit fortlaufender Nummerierung FAC-2026-0001 bis FAC-2026-0008 und ihrem Zahlungsstatus](/screenshots/invoices.png)

*Die Nummerierung muss vollständig im neuen System ankommen. Eine Lücke sieht man von außen zuerst.*

Bei Dentalpin haben wir das mit einem Importmodul gelöst (`migration_import`), das dieselben vier Phasen durchläuft wie dieser Leitfaden: Datei hochladen, Vorschau mit Zahlen anzeigen, bevor irgendetwas geschrieben wird, die Zuordnung der Behandlungen Zeile für Zeile prüfen lassen (was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie) und erst dann ausführen. Der ganze Ablauf ist in [dental-bridge](https://github.com/dentaltix/dental-bridge) dokumentiert, und [Dentalpin auf dem eigenen Server zu installieren](/de/blog/dentalpin-in-drei-minuten-installieren/) dauert drei Minuten, falls Sie es anschließend mit Ihrem eigenen Export ausprobieren wollen.

Ist Ihnen ein Migrationsschritt begegnet, der hier fehlt? [Schreiben Sie es](https://github.com/martinezsalmeron/dentalpin/discussions), wir ergänzen ihn.
