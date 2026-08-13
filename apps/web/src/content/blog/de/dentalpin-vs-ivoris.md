---
title: "Dentalpin und ivoris im Vergleich: der Anbieter, der seine Preisliste veröffentlicht"
description: "Ehrlicher Vergleich zwischen ivoris von Computer konkret und Dentalpin: veröffentlichte Mietpreise, Windows und SQL Server Express, KZV-Abrechnung und TI."
pubDate: 2026-08-13
tags: [vergleich, ivoris, computer-konkret, praxissoftware, zahnarztsoftware]
---

ivoris ist in einem Punkt die Ausnahme im deutschen Markt: Computer konkret legt eine vollständige Preisliste als PDF auf die eigene Website, mit einer Monatsmiete für jedes Produkt und jedes Modul. In allen anderen Vergleichen dieser Reihe steht an dieser Stelle, dass der Anbieter keine Preise veröffentlicht. Hier steht sie, und deshalb ist dieser Vergleich der einzige, in dem sich beide Seiten wirklich rechnen lassen.

> **Alles über ivoris in diesem Text stammt von ivoris.de**, abgerufen am 13. August 2026, und ist unten mit URL verlinkt. Was Computer konkret nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir weggelassen, weil sie sich widersprechen und keine davon von Computer konkret stammt.

## In dreißig Sekunden

**ivoris ist eine gewachsene deutsche Praxisverwaltung, aufgeteilt nach Fachrichtung.** Die Computer konkret AG in Falkenstein/Sachsen gibt 1990 als Gründungsjahr an und verkauft drei getrennte Produkte: ivoris dent für die Zahnarztpraxis, ivoris ortho für die Kieferorthopädie, ivoris clinic für Zahnkliniken und Hochschulambulanzen. Abrechnung, Telematikinfrastruktur, VDDS-Schnittstellen und die Hotline kommen aus einer Hand.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft mit einem `docker compose` auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Rechnen Sie mit der KZV ab?** Wenn ja, ist ivoris heute die Antwort und Dentalpin nicht, und daran ändert kein Argument über Lizenzen etwas. Wenn Sie rein privat abrechnen, außerhalb Deutschlands arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest dieses Textes.

## Was ivoris ist

ivoris ist die Praxissoftware der Computer konkret AG, Theodor-Körner-Straße 6 in 08223 Falkenstein, eingetragen beim Amtsgericht Chemnitz unter HRB 16107. Im Vorstand stehen Elisabeth Brand und Dipl.-Ing. Michael Brand, den Aufsichtsratsvorsitz führt Reinhold Kuhn.

Das Leitbild der Firma steht als Überschrift auf der Unternehmensseite: "Digital denken. Persönlich handeln." Darunter der Satz "Seit über 35 Jahren steht ivoris® für innovative Praxissoftware, persönliche Betreuung und eine starke Verbindung zur dentalen Welt."

Die Chronik nennt die Eckpunkte mit Jahreszahlen: 1990 die "Gründung von Computer konkret durch Michael Brand in Falkenstein/Sachsen", 2001 die "Markteinführung der Diagnostiksoftware für Zahnärzte ivoris® analyze light", 2012 die "erneute Eignungsfeststellung der KZBV für unsere Managementsoftware (197.20)" und 2019 die Zertifizierung von ivoris dent durch die Deutsche Gesellschaft für Parodontologie.

Eine Kunden- oder Praxenzahl veröffentlicht Computer konkret auf diesen Seiten nicht. Für die Kieferorthopädie beansprucht die Firma dagegen ausdrücklich die Spitze: die KFO-Seite ist mit "Die führende KFO-Software" überschrieben und beschreibt ivoris ortho als Software, die "seit über 35 Jahren als Marktführer perfekt auf die Anforderungen kieferorthopädischer Praxen abgestimmt ist". Das ist die Selbstbeschreibung des Herstellers, kein von uns geprüfter Marktanteil.

### Drei Produkte statt eines mit Modulen

Der Aufbau unterscheidet ivoris von den meisten Wettbewerbern in diesem Markt. Statt eines Produkts mit Fachmodulen gibt es drei Programme, die getrennt lizenziert werden:

- **ivoris dent** ist die "Managementsoftware für alle Bereiche der zahnärztlichen Dokumentation, Planung und Abrechnung BEMA, GOZ und AVL" mit papierloser Abrechnung für KCH, ZE, PAR und KBR.
- **ivoris ortho** ist dasselbe für die Kieferorthopädie, mit papierloser Abrechnung für KFO, PAR und KBR.
- **ivoris clinic** richtet sich an Zahnkliniken, Lehreinrichtungen und Praxen mit mehreren Abteilungen. Die Seite nennt Abteilungs- und Kostenstellenabrechnung, eine Kursverwaltung für Studierende mit Freigabeworkflow, DICOM-Worklist, HL7-Anbindung an "führenden Systemen wie SAP oder ORBIS" und die "Unterstützung von Windows Active Directory (AD) für sichere Nutzerverwaltung".

Dazu kommt eine zweite Familie für die Bildgebung: ivoris analyze light, analyze pro, analyze 3D, analyze connect für den Abgleich mit OnyxCeph, ivoris express und express ceph für die FRS-Auswertung.

Der Rest sind Module, die einzeln dazukommen: termin, wartezimmer, behandlerprofil, mandant für Praxisgemeinschaften und Kliniken, signature für die elektronische Unterschrift über signotec, sms, connect pro und connect web.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

### Telematikinfrastruktur, VDDS und die Kassenschnittstellen

Hier ist ivoris vollständig, und das ist in Deutschland der Teil, an dem sich alles andere entscheidet. Die Academy-Seite zur TI kündigt "Schulungen, Tutorials und Videoanleitungen zu allen TI-Themen" an, "von Konnektor und Kartenterminal über SMC-B/eHBA und Komfortsignatur bis zu eAU, eRezept, ePA und KIM". In der Preisliste ist die "Schnittstelle Telematikinfrastruktur (inkl. EBZ)" bei ivoris dent und ivoris ortho als Bestandteil des Produkts aufgeführt.

Bei den Schnittstellen sind die Systemvoraussetzungen konkret:

- **AzP.** "Laut Anforderung der Kassenzahnärztlichen Bundesvereinigung (KZBV) ist der Export zum Austausch zahnärztlicher Patientendaten (AzP) aus ivoris® möglich."
- **VDDS.** "Die Computer konkret AG ist seit 2002 Mitglied im Verband Deutscher Dental Software Hersteller e.V." und setzt VDDS-RZ, VDDS-media und VDDS-transfer um.
- **ABZ.** Für die ABZ eG stehen KFO-BEMA, KFO-GOZ und AVL/ZV im ABZ-Format zur Verfügung.
- **Röntgen.** ivoris "unterstützt die meisten am Markt befindlichen digitalen Röntgensysteme bzw. 3D-bildgebende Systeme".

Bei den Zertifizierungen listet die Unternehmensseite Qualitätsmanagement nach EN ISO 13485:2012-11 und EN ISO 9001:2008, die CE-Kennzeichnung mit der SLG-Prüfziffer CE 0494 gemäß MPG und EU-Richtlinie 93/42/EWG sowie EN ISO 14971, 62304 und 62366.

## Was ivoris kostet

Der übliche Satz dieser Vergleichsreihe wäre hier falsch. `ivoris.de/preise/` liefert am 13. August 2026 keine Seite mit einem Kontaktformular, sondern leitet direkt auf ein PDF mit dem Titel "Preisliste", gültig vom 1.7. bis 31.8.2026. Die Spalte heißt "Mietpreis/€", die Beträge sind Monatspreise, und am Fuß steht: "Alle Preise verstehen sich zuzüglich gesetzlicher Mehrwertsteuer."

Die Managementsoftware selbst:

- **ivoris dent** und **ivoris ortho** stehen mit je 215,00 € im Monat in der Liste.
- **ivoris dent light** und **ivoris ortho light** kosten je 18,00 €. Beide sind Einstiegsvarianten, die auf dem jeweils anderen Produkt aufsetzen, ortho light etwa "bis zu 30 Fälle/Quartal, inkl. EBZ KFO und basierend auf ivoris® dent".
- **Die Diagnostik** wird getrennt bepreist: analyze light 18,00 €, analyze pro 55,00 €, analyze 3D 47,00 €, analyze connect 18,00 €, express 6,00 € und express ceph 35,00 €.

Die Module, ebenfalls im Monat:

- **behandlerprofil** 75,00 €, und die Beschreibung dazu ist wichtig: "drei aktive Behandler mit eigenständigen Zahnarztnummern".
- **termin** 30,00 €, **wartezimmer** 15,00 € (setzt termin voraus), **signature** 15,00 €, **connect web** 25,00 €, **connect pro** 55,00 €.
- **mandant** 175,00 € "für Praxisgemeinschaften, Kliniken", inklusive einem behandlerprofil.
- **sms** hat keinen Monatspreis, die Liste vermerkt: "Abrechnung erfolgt mit 0,13 € pro SMS".

Dazu kommen einmalige Positionen in einer eigenen Spalte "Preis/€": die onboarding-pauschale für "Lizenzbereitstellung und Basiseinrichtung bis zu 3 Online-Stunden" mit 4.000,00 €, ein Online-Training mit 140,00 € je 60 Minuten, ein Training vor Ort mit 1.095,00 €, "transfer komplett" für die Übernahme von "Stammdaten, Pläne, Leistungen etc. soweit technisch möglich" mit 1.500,00 € und technische Dienstleistung mit 35,00 € je 15 Minuten. Eine Fußnote ergänzt, dass auch bei der Freischaltung von Modulen "eine Servicepauschale mit 35,00 € je 15 Minuten berechnet werden" kann.

Drei Einsteigerpakete stehen ebenfalls in der Liste. Wir zitieren ihre Beträge hier nicht: das PDF führt pro Paket zwei Zahlen in derselben Spalte, ohne dass aus dem Dokument hervorgeht, wofür die zweite steht. Wer ein Paket kalkuliert, sollte sich das bestätigen lassen.

Für den Vergleich zählt vor allem, was daraus folgt. Eine Praxis mit drei Behandlern, Terminmodul und Wartezimmer liegt allein bei der Software im mittleren dreistelligen Bereich pro Monat, bevor Diagnostik, Partnerprodukte, Windows-Lizenzen und der Server dazukommen. Das ist keine Kritik, sondern die Rechnung, die diese Preisliste überhaupt erst möglich macht.

### Wie ivoris betrieben wird

Computer konkret veröffentlicht seine Systemvoraussetzungen als PDF mit dem Stand "gültig ab 01.04.2025", und das Dokument ist ungewöhnlich auskunftsfreudig.

Der Betrieb ist eine klassische Server-Client-Installation in der Praxis:

- **Arbeitsstationen**: empfohlen Windows 11 Pro oder Enterprise, mindestens Windows 10 Pro oder Enterprise, dazu .NET Framework 3.5 und 4.8. Mehrkernprozessor ab 2 GHz, "keine ARM-Prozessoren", ab 4 GB RAM mit der Empfehlung 8 GB.
- **Server**: empfohlen Windows Server 2025, mindestens Windows Server 2016, mit "Deutsches Sprachpaket vorinstalliert". Ab zwei Arbeitsstationen wird ein dedizierter Server empfohlen, ab 3 GHz, ab 8 GB RAM mit der Empfehlung 16 GB, Hardware-RAID "dringend empfohlen".
- **Netz**: ab 100 MBit/s, empfohlen 1 GBit/s. "Kabellose und stromleitungsgebundene Netzwerke werden nicht empfohlen."
- **Andere Systeme**: "Abweichende Betriebssysteme wie Mac iOS, Android und Unix/Linux etc. werden nicht unterstützt." Virtualisierung über Hyper-V, Virtual PC oder VMware ist möglich, ebenso iMacs mit Bootcamp und iPads mit Terminal-Emulation.
- **Office**: Word, Excel und Outlook "jeweils ausschließlich in der 32 Bit-Variante". OpenOffice und vergleichbare Produkte werden nicht unterstützt.

Zur Cloud sagt das Dokument etwas, das man in diesem Markt selten liest. Sie wird "grundsätzlich unterstützt", aber als etwas, das Sie selbst aufbauen: "Die Installation, Administration, Datensicherheit und Datenschutz derartiger Lösungen liegen in der Verantwortung des Anwenders." Ein gehosteter Dienst von Computer konkret ist das nicht, eher die Erlaubnis, den Windows-Server woanders zu betreiben.

> **Die mitgelieferte Datenbank hat eine Obergrenze, und die steht im eigenen Dokument.** Die Installation enthält die kostenfreie Express-Variante des Microsoft SQL Server, "unterstützt Datenbankgrößen bis 10GB und ist begrenzt auf eine Arbeitsspeicher-Nutzung von 1GB". Bei größeren Einheiten kann laut Computer konkret ein Upgrade auf eine kostenpflichtige Variante nötig werden, wofür "dem Kunden gegenüber dem Lizenzgeber Microsoft zusätzliche Kosten" entstehen. Das ist eine Zahl, die in keiner Praxissoftware-Preisliste auftaucht, und eine gute Frage für das Verkaufsgespräch.

Ein zweiter Satz aus demselben Dokument gehört in jede Kalkulation: "Eine Netzwerklizenz von ivoris® beinhaltet die Installation von bis zu 10 Arbeitsplätzen. Bei mehr als 10 Arbeitsplätzen können weitere Netzwerklizenzen erworben werden."

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, und bedient wird sie im Browser.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Dazu kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient, und kein Modul wird einzeln hinzugebucht.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, keine VDDS-Schnittstelle, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Kostenvoranschlag in Dentalpin: Behandlungen, Summen, Gültigkeit und der verknüpfte Behandlungsplan](/screenshots/budgets.png)

*Ein Kostenvoranschlag mit Positionen, Gültigkeitsdatum und dem daraus entstehenden Behandlungsplan.*

## Nebeneinander

| | ivoris | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, Monatsmiete | Open Source (BSL 1.1) |
| Veröffentlichte Preise | ✓ Vollständige Preisliste als PDF | ~ 0 € selbst gehostet, Betreuung auf Anfrage |
| Aufbau | Drei Produkte: dent, ortho, clinic | Ein Produkt für alle Fachrichtungen |
| Module | ~ termin, wartezimmer, mandant und weitere einzeln bepreist | ✓ Ein Umfang, nichts zubuchbar |
| Betriebsart | Server-Client in der Praxis | Self-Hosting auf Ihrem Server, Browser |
| Client-Betriebssystem | ✗ Nur Windows 10 und 11, Pro oder Enterprise | ✓ Browser, unabhängig vom Betriebssystem |
| Mac, Linux, Android | ✗ "werden nicht unterstützt" | ✓ Im Browser gleichwertig |
| Serverbetriebssystem | Windows Server 2016 bis 2025, deutsches Sprachpaket | Linux |
| Datenbank | ~ SQL Server Express, bis 10 GB, Upgrade kostenpflichtig | ✓ PostgreSQL, ohne Größengrenze |
| Arbeitsplätze je Lizenz | ~ Netzwerklizenz bis 10, darüber weitere Lizenzen | ✓ Unbegrenzt |
| Jahre am Markt | ✓ Gründung 1990 | ✗ Seit 2026 |
| Zertifizierung als Medizinprodukt | ✓ CE 0494 nach MPG, EN ISO 13485 und 9001 | ✗ Keine |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ eAU, eRezept, ePA, KIM, EBZ | ✗ Nicht vorhanden |
| VDDS-Schnittstellen | ✓ Mitglied seit 2002: RZ, media, transfer | ✗ Nicht vorhanden |
| Export beim Anbieterwechsel | ✓ AzP-Export nach KZBV-Anforderung | ✓ Voller Datenbankzugriff und API |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Deutschsprachiger Support | ✓ Hotline, Academy, Training vor Ort | ~ Community in GitHub Discussions |
| Öffentliche API | ✗ Auf ivoris.de keine Entwicklerdokumentation beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Die Zeile zur API heißt genau das und nichts weiter: auf den öffentlichen Seiten von ivoris.de ist keine Entwicklerdokumentation beschrieben, die Schnittstellen richten sich an benannte Partnerprodukte und an die VDDS-Standards. Ob es für Kunden mehr gibt, wissen wir nicht.

## Wählen Sie ivoris, wenn

- **Sie mit der KZV abrechnen.** Das ist die halbe Software einer deutschen Praxis, und ivoris rechnet KCH, ZE, PAR, KBR und KFO papierlos ab. Bei uns fehlt sie ganz.
- **Sie kieferorthopädisch arbeiten.** ivoris ortho ist ein eigenes Produkt und keine Zusatzoption, und die Firma beansprucht in diesem Segment die Marktführerschaft für sich. Eine allgemeine Praxisverwaltung bringt das nicht mit, unsere auch nicht.
- **Sie eine Zahnklinik oder eine Hochschulambulanz betreiben.** Kursverwaltung für Studierende, Abteilungs- und Kostenstellenabrechnung, HL7 zu SAP oder ORBIS und Active Directory sind sehr spezifische Anforderungen, und ivoris clinic ist darauf gebaut.
- **Sie die TI und die VDDS-Welt vollständig brauchen.** eAU, eRezept, ePA, KIM, EBZ, dazu VDDS-RZ, media und transfer und der AzP-Export. Bei uns ist diese Zeile leer.
- **Sie eine Preisliste zum Rechnen wollen und ein zertifiziertes Medizinprodukt.** Beides veröffentlicht Computer konkret, das eine als PDF mit Monatspreisen, das andere als CE 0494 nach MPG. Für eine Praxis, die eine Investitionsentscheidung begründen muss, ist das mehr wert als jedes Lizenzargument.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei ivoris zu bleiben.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Ihre Arbeitsplätze nicht alle Windows sind.** Mac, Linux und Android sind bei ivoris ausdrücklich nicht unterstützt. Dentalpin läuft im Browser, also auch auf dem Mac am Empfang und auf dem Tablet im Behandlungszimmer.
- **Sie mehr als zehn Arbeitsplätze haben oder viel Bildmaterial ablegen.** Weder die Zahl der Arbeitsplätze noch die Größe der Datenbank ist bei uns eine Lizenzfrage.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Der teure Fehler ist nicht, die Software zu wechseln, sondern sie zu wechseln, ohne den Wechsel vorher an einer Kopie geprobt zu haben.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den AzP-Export an**, bevor Sie irgendetwas kündigen. Computer konkret nennt ihn in den eigenen Systemvoraussetzungen als Anforderung der KZBV, also ist er da, und er ist der sauberste Startpunkt, den ein deutscher Anbieterwechsel bietet.
2. **Klären Sie, was im AzP-Export nicht enthalten ist**: Dokumente aus dms.net, Bilder aus der analyze-Familie und Textbausteine liegen nicht zwangsläufig in derselben Datei wie die Kartei.
3. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
4. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
5. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
6. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
7. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 13. August 2026 abgerufen.

- Produktfamilie, Module und Startseite: [ivoris.de](https://www.ivoris.de/)
- ivoris dent, Funktionsumfang und Modulliste: [ivoris.de/zahnarztsoftware](https://www.ivoris.de/zahnarztsoftware/)
- "Die führende KFO-Software" und "seit über 35 Jahren als Marktführer": [ivoris.de/kfo-software](https://www.ivoris.de/kfo-software/)
- ivoris clinic, Kursverwaltung, DICOM-Worklist, HL7 zu SAP oder ORBIS und Active Directory: [ivoris.de/kliniksoftware](https://www.ivoris.de/kliniksoftware/)
- "Digital denken. Persönlich handeln.", Chronik mit 1990, 2001, 2012 und 2019 sowie die Zertifizierungen CE 0494, EN ISO 13485:2012-11, 9001:2008, 14971, 62304 und 62366: [ivoris.de/unternehmen](https://www.ivoris.de/unternehmen/)
- Module und Schnittstellenübersicht: [ivoris.de/module-schnittstellen](https://www.ivoris.de/module-schnittstellen/)
- TI-Themen "von Konnektor und Kartenterminal über SMC-B/eHBA und Komfortsignatur bis zu eAU, eRezept, ePA und KIM": [ivoris® Telematikinfrastruktur, Lernbereich der Academy](https://www.ivoris.de/support/info-center/ivoris-academy/ivoris-telematikinfrastruktur-academy/)
- Alle Preise, die Spalten "Mietpreis/€" und "Preis/€", die Gültigkeit vom 1.7. bis 31.8.2026, der Mehrwertsteuerhinweis sowie die Produktbeschreibungen zu dent, ortho, den light-Varianten, den Modulen und der Telematikschnittstelle: [Preisliste (PDF)](https://www.ivoris.de/site/assets/files/2244/2026-7-preisliste.pdf), erreichbar über [ivoris.de/preise](https://www.ivoris.de/preise/)
- Betriebssysteme, Hardware, Netz, SQL Server Express mit 10 GB, Netzwerklizenz bis 10 Arbeitsplätze, Cloud-Abschnitt, AzP, VDDS-Mitgliedschaft seit 2002 und ABZ: [Systemvoraussetzungen, gültig ab 01.04.2025 (PDF)](https://www.ivoris.de/Doku/Installation_Kopplungen/Systemvoraussetzungen.pdf)
- Firmierung, Sitz, Handelsregister und Vorstand: [ivoris.de/impressum](https://www.ivoris.de/impressum)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei ivoris etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
