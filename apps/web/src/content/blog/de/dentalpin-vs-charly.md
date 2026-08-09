---
title: "Dentalpin und charly (solutio) im Vergleich: zwei Server, zwei Lizenzen"
description: "Ehrlicher Vergleich zwischen charly von solutio und Dentalpin: Systemvoraussetzungen, veröffentlichte Preise, KZV-Abrechnung, Telematikinfrastruktur und Datenhoheit, mit dem, was Dentalpin in Deutschland heute nicht leistet."
pubDate: 2026-08-08
tags: [vergleich, charly, solutio, praxissoftware]
---

Von allen deutschen Praxisverwaltungen ist charly die, die technisch am nächsten an Dentalpin liegt: beide laufen auf einem Server in Ihrer Verantwortung, beide legen ihre Daten in PostgreSQL ab, beide gibt es unter macOS. Der Unterschied liegt nicht in der Betriebsart, sondern in der Lizenz und in dem, was die Software für eine deutsche Kassenpraxis abrechnen kann.

> **Alles über charly in diesem Text stammt von solutio.de**, abgerufen am 8. August 2026, und ist unten mit URL verlinkt. Was solutio nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir weggelassen, weil sie sich widersprechen und keine davon von solutio stammt.

## In dreißig Sekunden

**charly ist die vollständige deutsche Praxisverwaltung, und sie ist alt genug, um es zu sein.** solutio beschreibt sich auf der eigenen Karriereseite als "Seit 30 Jahren im Markt etabliert" und schreibt dort, dass "3.700 Kunden" dem Unternehmen vertrauen. Abrechnung, Telematikinfrastruktur, Röntgenschnittstellen und deutschsprachiger Support kommen aus einer Hand.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Rechnen Sie mit der KZV ab?** Wenn ja, ist charly heute die Antwort und Dentalpin nicht, und daran ändert kein Argument über Lizenzen etwas. Wenn Sie rein privat abrechnen, außerhalb Deutschlands arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest dieses Textes.

## Was charly ist

charly ist das Praxisverwaltungssystem der solutio GmbH & Co. KG aus Holzgerlingen, eingetragen beim Amtsgericht Stuttgart unter HRA 735969. Auf der Startseite steht es als "universelles Praxisverwaltungssystem", auf der Produktseite als "eine Lösung, die alle Arbeitsabläufe in der Zahnarztpraxis begleitet".

Der Funktionsumfang deckt den ganzen Praxisalltag ab: Patientenaufnahme, Terminplanung, Befunddokumentation mit Hygieneindizes, Parodontalstatus und Implantatberichten, Behandlungsplanung mit Kostenvoranschlag, Materialwirtschaft nach RKI und MPG, Sterilisationsdokumentation, Qualitätsmanagement und ein MIS-Dashboard für das Controlling. solutio nennt als Praxisformen ausdrücklich "Gemeinschaftspraxis, Einzelpraxis, Praxisgemeinschaft oder ÜBAG".

Um das Kernprodukt herum verkauft solutio eine "charly family": **charly analytics**, **charly anamnese pro**, **charly documents** und **charly factoring**. Dazu kommen charly-Web, charly-KI und vier Apps für Anamnesen, Termine, MIS-Dashboard und Fotos. Vertrieben wird das Ganze als "charly Abo".

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

### Was solutio zum Preis sagt

Hier ist charly interessanter als die meisten Anbieter in diesem Markt, und der übliche Satz "veröffentlicht keine Preise" wäre schlicht falsch.

Auf der Seite zu den charly e-Produkten stehen Beträge, und zwar konkrete: **EBZ-Zahnersatz 690,00 € einmalig zuzüglich 19 % Umsatzsteuer, dazu 11,50 € monatliche Softwarepflege**. EBZ-Kieferbruch und Kiefergelenkserkrankungen liegen bei 590,00 € und 9,83 € im Monat, EBZ-Parodontalerkrankungen bei 490,00 € und 8,17 €, EBZ-Kieferorthopädie bei 290,00 € und 4,83 €. charly documents ist mit 0,79 € je Dokument zuzüglich Umsatzsteuer ausgewiesen.

> **Was fehlt, ist der Grundpreis.** solutio beziffert einzelne Zusatzmodule auf den Cent genau, aber für charly selbst gibt es keine veröffentlichte Zahl: `solutio.de/preise` lieferte am 8. August 2026 HTTP 404, und der solutioshop ist laut eigener Angabe "exklusiv für registrierte Kunden zugänglich". Sie können also ausrechnen, was ein EBZ-Modul kostet, aber nicht, was die Software kostet, in die Sie es einbauen.

### Wie charly betrieben wird

Das ist der Teil, der diesen Vergleich von den anderen deutschen unterscheidet. charly ist kein Cloud-Produkt, sondern eine Server-Client-Installation in Ihrer Praxis, und solutio veröffentlicht die Anforderungen dafür vollständig.

- **Serverbetriebssysteme**: Windows Server 2016 bis 2025 "mit Desktopdarstellung", Windows 10 Pro und Windows 11 Pro, sowie macOS 15 Sequoia und macOS 26 Tahoe.
- **Datenbank**: PostgreSQL 15 oder 16, wobei PostgreSQL 13 laut solutio "keine Freigabe für Neuinstallationen" mehr hat.
- **Arbeitsspeicher**: mindestens 24 GB frei allein für die Software bis 10 Anwender, 36 GB bis 20 und 48 GB bis 50.
- **Netz**: ein korrekt konfiguriertes IPv4-Netz mit fester IP für den Server und lokalem DNS.
- **Platten**: die Datenbank gehört laut solutio auf eine gespiegelte SSD (RAID1), getrennt vom Systemlaufwerk.

Seit der charly-VM-Technologie läuft das Ganze in einem Container. solutio beschreibt ihn als "eine abgeschlossene Umgebung, in der charly in einer konsistenten und isolierten Form" ausgeführt wird, und schreibt, die Technologie gebe "die Möglichkeit, charly unter jedem beliebigen Betriebssystem anwenden zu können". Zum Mac bekennt sich das Unternehmen ausdrücklich: man werde "auch zukünftig die Mac-Technologie vollumfänglich unterstützen".

Fürs Homeoffice gibt es charly@home. Das ist ausdrücklich kein Cloud-Zugang, sondern eine "aktive VPN-Verbindung zwischen Ihrem mobilen Arbeitsplatz und Ihrer Praxis", also Fernzugriff auf Ihren eigenen Server.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, und darunter liegt ebenfalls PostgreSQL.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Dazu kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient, und kein Modul wird einzeln hinzugebucht.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Kostenvoranschlag in Dentalpin: Behandlungen, Summen, Gültigkeit und der verknüpfte Behandlungsplan](/screenshots/budgets.png)

*Ein Kostenvoranschlag mit Positionen, Gültigkeitsdatum und dem daraus entstehenden Behandlungsplan.*

## Nebeneinander

| | charly (solutio) | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, "charly Abo" | Open Source (BSL 1.1) |
| Veröffentlichter Grundpreis | ✗ Keiner, `solutio.de/preise` lieferte am 08.08.2026 HTTP 404 | ✓ 0 €, alles inbegriffen |
| Veröffentlichte Modulpreise | ✓ Ja, EBZ-Module und charly documents beziffert | Entfällt, es gibt keine Zusatzmodule |
| Betriebsart | ✓ Server in der Praxis, Fernzugriff per VPN | ✓ Self-Hosting auf Ihrem Server |
| Serverbetriebssystem | ✓ Windows und macOS, per charly-VM containerisiert | ~ Linux, Zugriff über den Browser |
| Datenbank | PostgreSQL 15 oder 16 | PostgreSQL |
| Jahre am Markt | ✓ "Seit 30 Jahren im Markt etabliert" | ✗ Seit 2026 |
| Verbreitung | ✓ "3.700 Kunden vertrauen solutio" | ✗ Seit 2026 |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion | ✗ Nicht vorhanden |
| EBZ und Telematikinfrastruktur | ✓ Eigene e-Produkte: KIM, NFDM, eMP, ePA, eAU, E-Rezept | ✗ Nicht vorhanden |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Deutschsprachiger Support | ✓ Vom Hersteller, mit Schulungen und E-Learning | ~ Community in GitHub Discussions |
| Röntgen- und Geräteschnittstellen | ✓ Umfangreiche Liste über VDDS | ✗ Nicht vorhanden |
| Öffentliche API | ✗ Auf solutio.de keine Entwicklerdokumentation beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Die Zeile zur API heißt genau das und nichts weiter: Auf den öffentlichen Seiten von solutio ist keine Entwicklerdokumentation beschrieben, die Schnittstellenseite listet Anbindungen nach dem VDDS-Standard. Ob es für Kunden mehr gibt, wissen wir nicht.

## Wählen Sie charly, wenn

- **Sie mit der KZV abrechnen.** Das ist die halbe Software einer deutschen Praxis, und solutio baut sie seit drei Jahrzehnten. Bei uns fehlt sie ganz.
- **Sie EBZ und Telematikinfrastruktur brauchen.** solutio verkauft dafür eigene Produkte und beziffert sie sogar öffentlich. Wir haben dafür nichts.
- **Ihre Praxis auf Macs läuft.** charly ist eine der wenigen deutschen Praxisverwaltungen, die macOS auf dem Server ausdrücklich freigibt, und solutio bekennt sich schriftlich dazu.
- **Sie Röntgen, Kamera und PA-Sonde angebunden haben wollen.** Die Schnittstellenliste ist lang und gewachsen, unsere ist leer.
- **Ihr Team heute eine deutschsprachige Oberfläche und jemanden am Telefon braucht.** Beides trifft auf uns nicht zu, und das lässt sich nicht schönreden.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei charly zu bleiben.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.
- **Sie wissen wollen, was es kostet, bevor Sie telefonieren.** Der Preis steht auf einer Seite, und die Module sind nicht einzeln bepreist, weil es keine gibt.
- **Sie den Server ohnehin selbst betreiben.** Sie tun es bei charly bereits, nur eben unter einer Lizenz, die Ihnen nicht gehört.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Der teure Fehler ist nicht, die Software zu wechseln, sondern sie zu wechseln, ohne den Wechsel vorher an einer Kopie geprobt zu haben.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den vollständigen Export bei solutio an**, bevor Sie irgendetwas kündigen: Patienten, Behandlungshistorie, Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Bilder und den Leistungskatalog.
2. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
3. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
4. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
5. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
6. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 8. August 2026 abgerufen.

- Selbstbeschreibung als "universelles Praxisverwaltungssystem": [solutio.de](https://www.solutio.de/)
- Funktionsumfang, Praxisformen und charly Abo: [solutio.de/software/zahnarztsoftware-charly-by-solutio](https://www.solutio.de/software/zahnarztsoftware-charly-by-solutio/)
- charly family, charly-Web, charly-KI und die vier Apps: [solutio.de/software](https://www.solutio.de/software/)
- Preise der EBZ-Module und von charly documents: [solutio.de/charly-e-produkte](https://www.solutio.de/charly-e-produkte/)
- Systemvoraussetzungen, Serverbetriebssysteme und PostgreSQL-Versionen: [solutio.de/systemvoraussetzungen](https://www.solutio.de/systemvoraussetzungen/) und [solutio.de/systemvoraussetzungen/server](https://www.solutio.de/systemvoraussetzungen/server)
- charly-VM und das Bekenntnis zur Mac-Technologie: [solutio.de, 09.08.2024](https://www.solutio.de/2024/08/09/moderne-losungen-fur-zukunftssicherheit-charly-vm-technologie/)
- charly@home und die VPN-Verbindung in die Praxis: [solutio.de/charlyhome](https://www.solutio.de/charlyhome/)
- Schnittstellen nach VDDS: [solutio.de/schnittstellen](https://www.solutio.de/schnittstellen/)
- "Seit 30 Jahren im Markt etabliert" und "3.700 Kunden vertrauen solutio": [solutio.de/unternehmen/karriere](https://www.solutio.de/unternehmen/karriere/)
- Firmierung, Sitz und Handelsregister: [solutio.de/impressum](https://www.solutio.de/impressum/)
- `solutio.de/preise` lieferte HTTP 404, `solutioshop.de` ist nur nach Anmeldung zugänglich.
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei solutio etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
