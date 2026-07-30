---
title: "Dentalpin und Dampsoft im Vergleich: was jedes von beiden heute wirklich kann"
description: "Ehrlicher Vergleich zwischen Dampsoft (DS-WIN, DS4) und Dentalpin: Betriebsart, Preise, KZV-Abrechnung, Telematikinfrastruktur und Datenhoheit. Mit dem, was Dentalpin in Deutschland heute noch nicht leistet."
pubDate: 2026-07-30
tags: [vergleich, dampsoft, praxissoftware]
---

Dieser Vergleich ist für Praxen, die sich fragen, ob es außerhalb der etablierten deutschen Praxissoftware etwas gibt, und für Entwicklerinnen und IT-Dienstleister, die für eine Praxis eine Alternative bewerten sollen. Wenn Sie eine Kassenpraxis in Deutschland führen und heute eine Ablösung für DS-WIN suchen, sagt Ihnen dieser Text in den ersten Zeilen, dass Dentalpin diese Rolle noch nicht ausfüllt, und warum.

> **Alles über Dampsoft in diesem Text stammt von dampsoft.de**, abgerufen am 30. Juli 2026, und ist unten mit URL verlinkt. Was Dampsoft nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen und Fachblogs haben wir bewusst weggelassen, weil sie sich widersprechen und keine davon von Dampsoft stammt.

## In dreißig Sekunden

**Dampsoft ist die vollständige deutsche Praxisverwaltung.** Sie ist seit den Achtzigern auf genau den Arbeitsalltag zugeschnitten, den eine deutsche Praxis hat: Abrechnung, Anbindung an die Telematikinfrastruktur, deutschsprachiger Support am Telefon. Dampsoft veröffentlicht zwei Betriebsarten nebeneinander, DS-WIN On-Premise und das webbasierte DS4.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Muss Ihre Software selbst mit der KZV abrechnen und an der Telematikinfrastruktur hängen?** Wenn ja, ist Dampsoft heute die Antwort und Dentalpin nicht. Wenn Ihre Abrechnung anders läuft, Sie privat abrechnen oder Sie vor allem Eigentum an Code und Daten suchen, lohnt der Rest dieses Textes.

## Was Dampsoft ist

Dampsoft entwickelt Praxissoftware für Zahnarztpraxen und beschreibt sich auf der eigenen Unternehmensseite so: "Wir entwickeln Praxissoftware, die den Arbeitsalltag von Zahnärzten und Praxisteams einfacher und effizienter macht." Auf derselben Seite feiert das Unternehmen sein 40. Jubiläum, was die Gründung in die Mitte der Achtziger legt, und verweist am 24. Juli 2026 auf die EDV-Statistik 2025 der KZBV unter der Überschrift, sie festige die Marktführung.

Auf der Produktseite stehen fünf Produkte nebeneinander:

- **DS-WIN**, "Bewährte Praxisverwaltung", ausdrücklich als **On-Premise** ausgewiesen, mit Patienten-, Hygiene- und Qualitätsmanagement.
- **DS4**, "Webbasierte Praxissoftware", als cloudfähig und webbasiert beschrieben.
- **e-connect**, "Der TI-Konnektor in der Cloud".
- **AIVA**, KI-Sprachdokumentation.
- **ATHENA**, digitale Anamnese und Aufklärung, mit einem KI-Röntgencheck.

Dass ein Hersteller beide Betriebsarten selbst anbietet und die Wahl der Praxis überlässt, ist ein Argument, das wir sonst für uns beanspruchen. Hier steht es auf ihrer Seite.

![Startseite von Dentalpin: heutige Termine, wer gerade in der Praxis ist, überfällige Zahlungen und zuletzt behandelte Patienten](/screenshots/home.png)

*Der Tagesüberblick in Dentalpin. Die Oberfläche der Demo-Praxis ist auf Spanisch, was weiter unten noch eine Rolle spielt.*

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung, die unter der Business Source License 1.1 veröffentlicht wird: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, in der Cloud Ihrer Wahl oder auf einem Rechner in der Praxis.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Optional kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal dazu. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine Anbindung an die Telematikinfrastruktur, kein Einlesen der elektronischen Gesundheitskarte, und die Oberfläche der Anwendung liegt bislang auf Spanisch und Englisch vor. Deutsch steht auf der Roadmap, ist aber heute nicht ausgeliefert.

## Nebeneinander

| | Dampsoft | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Auf dampsoft.de am 30.07.2026 keiner, `/preise/` existiert nicht | ✓ 0 €, alles inbegriffen |
| Betriebsart | ✓ On-Premise (DS-WIN) und webbasiert (DS4) | ✓ Self-Hosting auf Ihrem Server |
| Jahre am Markt | ✓ 40. Jubiläum, also seit Mitte der Achtziger | ✗ Seit 2026 |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion der Praxisverwaltung | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ Eigenes Produkt, e-connect | ✗ Nicht vorhanden |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Heute Spanisch und Englisch |
| Deutschsprachiger Support | ✓ Vom Hersteller | ~ Community in GitHub Discussions |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |
| Öffentliche API | ~ Auf dampsoft.de nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| KI im Produkt | ✓ AIVA für Sprachdokumentation, KI-Röntgencheck in ATHENA | ✓ Agent, der Operationen ausführt und vor dem Schreiben fragt |

Die Zeile "Auf dampsoft.de nicht beschrieben" heißt genau das und nichts weiter: Wir haben auf den öffentlichen Seiten keine API-Dokumentation gefunden. Ob es eine für Kunden gibt, wissen wir nicht.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema erfasst je Fläche, unterscheidet bestehende von geplanten Behandlungen und führt einen Änderungsverlauf pro Zahn.*

## Wählen Sie Dampsoft, wenn

- **Sie mit der KZV abrechnen.** Das ist kein Nebenschauplatz, sondern die halbe Software einer deutschen Praxis, und Dampsoft baut sie seit vier Jahrzehnten.
- **Sie an der Telematikinfrastruktur hängen müssen.** Dampsoft verkauft dafür ein eigenes Produkt. Bei uns gibt es dafür gar nichts.
- **Ihr Team heute eine deutschsprachige Oberfläche braucht.** Unsere ist es noch nicht, und das lässt sich nicht schönreden.
- **Sie jemanden am Telefon wollen, der für die Software geradesteht.** Bei uns antwortet die Community, und das ist etwas anderes.
- **Sie On-Premise wollen, ohne selbst zu betreiben.** DS-WIN läuft bei Ihnen, aber der Hersteller bleibt zuständig. Self-Hosting bei uns heißt, dass Backups und Updates Ihre Sache sind.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei Dampsoft zu bleiben. Wir wären lieber die Antwort auf alles, sind es in Deutschland aber heute nicht.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie eine Praxis außerhalb der deutschen Kassenabrechnung führen** oder in einem Markt arbeiten, dessen Abrechnung Sie ohnehin außerhalb der Praxissoftware erledigen.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.
- **Ihre Kosten nicht mit der Praxis wachsen sollen.** Keine Gebühr pro Stuhl, pro Behandler oder pro Patient.
- **Sie ein Modul brauchen, das es nicht gibt.** Sie können es bauen, und es bleibt nach einem Update bestehen.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Der teure Fehler ist nicht, die Software zu wechseln, sondern sie zu wechseln, ohne den Wechsel vorher an einer Kopie geprobt zu haben.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den vollständigen Export bei Ihrem jetzigen Anbieter an**, bevor Sie irgendetwas kündigen: Patienten, Behandlungshistorie, Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Bilder und den Behandlungskatalog.
2. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
3. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
4. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
5. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
6. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Rechnungsliste mit den Zuständen gestellt, bezahlt, teilweise bezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Die Abrechnung in Dentalpin arbeitet mit konfigurierbaren Nummernkreisen und Teilzahlungen. Die deutsche KZV-Abrechnung ist damit nicht abgedeckt.*

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 30. Juli 2026 abgerufen.

- Produktübersicht Dampsoft (DS-WIN, DS4, e-connect, AIVA, ATHENA): [dampsoft.de/produkte](https://www.dampsoft.de/produkte/)
- Selbstbeschreibung, 40. Jubiläum und Hinweis auf die EDV-Statistik 2025 der KZBV vom 24.07.2026: [dampsoft.de/unternehmen](https://www.dampsoft.de/unternehmen/)
- `dampsoft.de/preise/` lieferte HTTP 404, es gab dort keine veröffentlichten Preise.
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [dentalpin.com/de/preise](/de/preise/)

Fehlt hier etwas, oder hat sich bei Dampsoft etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
