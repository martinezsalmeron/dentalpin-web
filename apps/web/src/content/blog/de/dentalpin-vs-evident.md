---
title: "Dentalpin und EVIDENT im Vergleich: Module gegen einen festen Umfang"
description: "Ehrlicher Vergleich zwischen EVIDENT und Dentalpin: Modulaufbau, Systemvoraussetzungen, Datenbank, Telematikinfrastruktur, veröffentlichte Preise und das, was Dentalpin in Deutschland heute nicht leistet."
pubDate: 2026-08-11
tags: [vergleich, evident, praxissoftware, zahnarztsoftware]
---

EVIDENT verkauft seine Praxisverwaltung als Baukasten: ein Basismodul, darauf Fach-Module für Zahnärzte, Kieferchirurgen und Kieferorthopäden, dazu optionale Module und die TI-Anwendungen. Dentalpin geht den umgekehrten Weg, ein fester Umfang ohne Zubuchen, und genau daran entscheidet sich dieser Vergleich.

> **Alles über EVIDENT in diesem Text stammt von evident.de**, abgerufen am 11. August 2026, und ist unten mit URL verlinkt. Was EVIDENT nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir weggelassen, weil sie sich widersprechen und keine davon von EVIDENT stammt.

## In dreißig Sekunden

**EVIDENT ist eine gewachsene deutsche Praxisverwaltung mit einer ungewöhnlichen Spezialisierung.** Das Unternehmen führt seine Ursprünge auf 1975 zurück, spricht von "50 Jahre Erfahrung, Innovation und Verlässlichkeit" und adressiert ausdrücklich auch Oralchirurgen, Kieferchirurgen und Kieferorthopäden. Abrechnung, TI-Anwendungen, Schulungen und Support kommen aus einer Hand in Bad Kreuznach.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft mit einem `docker compose` auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Rechnen Sie mit der KZV ab?** Wenn ja, ist EVIDENT heute die Antwort und Dentalpin nicht, und daran ändert kein Argument über Lizenzen etwas. Wenn Sie rein privat abrechnen, außerhalb Deutschlands arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest dieses Textes.

## Was EVIDENT ist

EVIDENT ist die Praxissoftware der EVIDENT GmbH aus Bad Kreuznach, eingetragen beim Amtsgericht Bad Kreuznach unter HRB 20931, Geschäftsführerin ist Christina Berg. Auf der Startseite steht der Satz "Seit über 50 Jahren entwickeln wir innovative Dentalsoftware".

Die Chronik des Unternehmens erzählt die Geschichte in Jahreszahlen: 1975 die Anfänge als DIALOG, 2000 die Gründung der EVIDENT GmbH aus der Verschmelzung, 2001 "EVIDENT begrüßt den 1000. Anwender", 2005 "Mehr als 1.500 Anwender". Der letzte veröffentlichte Kundenstand steht bei 2009: "Über 1.800 Kunden und ein Marktanteil von 75 Prozent bei den kieferchirurgischen Praxen."

Diese eine Zeile ist der interessanteste Satz auf der ganzen Seite. Ein Marktanteil in den kieferchirurgischen Praxen ist eine Spezialisierung, die kaum ein Wettbewerber in diesem Markt für sich beansprucht, und sie erklärt den Modulaufbau: Es gibt ein Facharztmodul ZA, eines für MKG und eines für KFO, dazu eine Belegarztabrechnung, die eine reine Zahnarztpraxis nie braucht.

### Wie der Baukasten aufgebaut ist

EVIDENT beschreibt die Software als "modular aufgebaut". Auf der Modulseite ist der Aufbau in vier Gruppen sortiert:

- **Das Basismodul** trägt Patientenkarteiführung und Verwaltung, dazu Abrechnung, Planung, Laborverwaltung und Recall. Mehrplatzlizenz, Mandantenfähigkeit und ein Standort-Modul stehen daneben.
- **Die Fach-Module** teilen sich nach Fachrichtung: Facharztmodul ZA mit PA und Individualprophylaxe, Kieferbruch, Implantologie und Behandlungsplaner, Facharztmodul MKG mit Belegarztabrechnung, Facharztmodul KFO mit Stapelrechnung Kasse und Privat.
- **Die optionalen Module** decken den Rest ab: Patientenarchiv, GoBD-Export-Modul, Bankeinzug, Electronic Cash, Praxis-Profil, HVM-Auswertung, ein Orga-Manager mit Personalakte, Urlaubsplaner und Arbeitszeitverwaltung, Multi-Media-Module, 3D-Vision und das Termin-Informationssystem TIS.
- **Die TI-Module** stehen für sich, dazu gleich mehr.

Die Schnittstellenliste ist lang und deutsch: TAPI-Anrufverwaltung, VDDS-Stammdaten, VDDS-RZ-Client, VDDS-Labor-Client, ParoStatus, DIOS MP, synMedico, Nelly, rose-metrics und Doctos.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

### Telematikinfrastruktur

Hier ist EVIDENT vollständig, und das ist in Deutschland der Teil, an dem sich alles andere entscheidet. Die TI-Seite nennt eLABZ, ePA ("Elektronische Patientenakte (ePA) für alle"), eBZ, eArztbrief, eRezept, KIM, eAU, eBonusheft, eMP und NFDM.

Bei den Konnektoren nennt das Unternehmen in seinen technischen Unterlagen CGM/Kocobox und T-Systems/Telekom als kompatibel und schreibt dazu, unterstützt würden "die seitens der Kassen(zahn-)ärztlichen Bundesvereinigung zugelassenen Geräte".

### Was EVIDENT zum Preis sagt

Nichts, und die Suche danach ist schnell erledigt. Am 11. August 2026 lieferten `evident.de/preise/`, `evident.de/preis/` und `evident.de/kosten/` jeweils HTTP 404, und auf keiner der Produkt-, Modul- oder TI-Seiten steht ein Betrag.

> **Kein einziger Preis, und der Baukasten macht das teurer als es klingt.** Bei einer Software mit einem festen Umfang wäre eine fehlende Preisseite eine fehlende Zahl. Bei einem modularen Aufbau ist es eine fehlende Zahl pro Modul, und welche Module Ihre Praxis am Ende braucht, wissen Sie erst nach dem Beratungsgespräch.

Auch das Training Center arbeitet ohne veröffentlichte Preise. Es benennt seine Formate genau, "Online-Workshops, Webinare oder individuelle Termine via Internet", ein "Video-Portal mit vielen praktischen Tutorials", ein "EVIDENT Online-Set 10 x 30" mit "300 Minuten individuelles Online-Training" und eine "Webinar-Flatrate", und wirbt mit 10 Prozent Rabatt bei Buchung acht Wochen im Voraus. Was die Formate kosten, erfahren Sie auf Anfrage.

### Wie EVIDENT betrieben wird

EVIDENT veröffentlicht seine Systemvoraussetzungen als PDF, und das ist mehr Offenheit, als die meisten Anbieter in diesem Markt zeigen. Das Dokument trägt den Stand 01.01.2026 und ist nach eigener Angabe "Gültig bis zum 01.07.2026"; die im Dokument genannte Adresse für eine neuere Fassung lieferte am 11. August 2026 HTTP 404.

Der Betrieb ist eine klassische Server-Client-Installation in Ihrer Praxis, ohne Cloud-Variante und ohne Browserzugang:

- **Arbeitsplätze**: Windows 11 in Professional oder Enterprise, Windows 10 in Professional, Ultimate oder Enterprise, jeweils 64 Bit. Mindestens ein Intel Core i3 der 8. Generation mit 8 GB RAM, empfohlen ein i5 der 8. Generation oder neuer mit 16 GB.
- **Server**: Windows Server 2025, 2022, 2019 oder 2016, "jeweils Standard", empfohlen wird Server 2025.
- **Arbeitsspeicher am Server**: "Datenserver mind. 16 GB, als Terminalserver mind. 16 GB + 1 GB x Client".
- **Platten**: mindestens eine 500-GB-SATA-Platte, empfohlen "zwei 1 TB SSD-Festplatten in einem performanten RAID-Verbund".
- **Netz**: 1 Gbit/s als Minimum.
- **Virtualisierung**: ausdrücklich möglich, mit dem Hinweis, ein physikalisches Plattensystem in die VM einzubinden.

Zur Datenbank ist das Dokument ungewöhnlich deutlich: "WICHTIG: Auf einem Server empfehlen wir, IMMER die SQL-Datenbankart in der Version Firebird 2.5 zu verwenden." Für die Sicherung empfiehlt EVIDENT "eine Replikation der EVIDENT-Daten mit den SQL-Firebird-Tools" und eine Sicherung dieser Kopie.

> **Firebird 2.5 ist beim Hersteller der Datenbank abgekündigt.** Das Firebird-Projekt schreibt auf der eigenen Seite: "Firebird 2.5 has reached end-of-life and not maintained by the Firebird Project anymore", letzte Fassung 2.5.9 vom 24. Juni 2019. Kommerziellen Support für diesen Stand gibt es weiterhin von Dritten. Das ist keine Bewertung von uns, sondern die Angabe des Datenbankherstellers neben der Empfehlung von EVIDENT, und eine gute Frage für das Verkaufsgespräch.

Was Sie an Datenwachstum einplanen sollten, nennt EVIDENT ebenfalls: die Abrechnungsdaten wachsen um "ca. 1 bis 1,5 GB im Jahr", Bilder und eingescannte Unterlagen nicht eingerechnet.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, und bedient wird sie im Browser.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Dazu kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient, und kein Modul wird einzeln hinzugebucht.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, keine VDDS-Schnittstelle, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Kostenvoranschlag in Dentalpin: Behandlungen, Summen, Gültigkeit und der verknüpfte Behandlungsplan](/screenshots/budgets.png)

*Ein Kostenvoranschlag mit Positionen, Gültigkeitsdatum und dem daraus entstehenden Behandlungsplan.*

## Nebeneinander

| | EVIDENT | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, modular | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Keiner, `/preise/` lieferte am 11.08.2026 HTTP 404 | ✓ 0 €, alles inbegriffen |
| Module | ~ Basis-, Fach-, optionale und TI-Module getrennt | ✓ Ein Umfang, nichts zubuchbar |
| Betriebsart | Server-Client in der Praxis | Self-Hosting auf Ihrem Server, Browser |
| Client-Betriebssystem | ✗ Nur Windows 10 und 11, 64 Bit | ✓ Browser, unabhängig vom Betriebssystem |
| Serverbetriebssystem | Windows Server 2016 bis 2025, Standard | Linux |
| Datenbank | Firebird 2.5, laut EVIDENT empfohlen | PostgreSQL |
| Jahre am Markt | ✓ Ursprünge 1975, GmbH seit 2000 | ✗ Seit 2026 |
| Verbreitung | ✓ "Über 1.800 Kunden" (Chronik 2009) | ✗ Seit 2026 |
| Kieferchirurgie und KFO | ✓ Eigene Facharztmodule MKG und KFO | ~ Ein Modell für alle Fachrichtungen |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ KIM, ePA, eAU, eRezept, eBZ, NFDM, eMP, eBonusheft | ✗ Nicht vorhanden |
| VDDS-Schnittstellen | ✓ Stammdaten, RZ-Client, Labor-Client | ✗ Nicht vorhanden |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Deutschsprachiger Support | ✓ Vom Hersteller, mit Training Center | ~ Community in GitHub Discussions |
| Öffentliche API | ✗ Auf evident.de keine Entwicklerdokumentation beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Die Zeile zur API heißt genau das und nichts weiter: Auf den öffentlichen Seiten von evident.de ist keine Entwicklerdokumentation beschrieben, die Schnittstellenseite listet Anbindungen an benannte Partnerprodukte. Ob es für Kunden mehr gibt, wissen wir nicht.

## Wählen Sie EVIDENT, wenn

- **Sie mit der KZV abrechnen.** Das ist die halbe Software einer deutschen Praxis, und EVIDENT baut sie seit Jahrzehnten. Bei uns fehlt sie ganz.
- **Sie kieferchirurgisch oder kieferorthopädisch arbeiten.** Facharztmodul MKG mit Belegarztabrechnung und Facharztmodul KFO mit Stapelrechnung sind genau die Teile, die eine allgemeine Praxisverwaltung nicht mitbringt. Wir haben dafür nichts.
- **Sie die TI vollständig brauchen.** KIM, ePA, eAU, eRezept, eBZ, NFDM und eMP stehen benannt auf der Herstellerseite. Bei uns ist diese Zeile leer.
- **Sie Röntgen, Labor und Rechenzentrum über VDDS angebunden haben.** Diese Schnittstellen sind der Alltag einer deutschen Praxis, und unsere Liste ist leer.
- **Ihr Team eine deutschsprachige Oberfläche, Schulungen mit Fortbildungspunkten und jemanden am Telefon braucht.** EVIDENT nennt als eigenen Anspruch, "keine einzige Anfrage länger als einen Tag unbeantwortet zu lassen". Das lässt sich bei uns nicht schönreden.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei EVIDENT zu bleiben.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Ihre Arbeitsplätze nicht alle Windows sind.** EVIDENT gibt Windows 10 und 11 frei, sonst nichts. Dentalpin läuft im Browser, also auch auf dem Mac am Empfang und auf dem Tablet im Behandlungszimmer.
- **Sie wissen wollen, was es kostet, bevor Sie telefonieren.** Der Preis steht auf einer Seite, und einzelne Module sind nicht bepreist, weil es keine gibt.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Der teure Fehler ist nicht, die Software zu wechseln, sondern sie zu wechseln, ohne den Wechsel vorher an einer Kopie geprobt zu haben.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den vollständigen Export bei EVIDENT an**, bevor Sie irgendetwas kündigen: Patienten, Behandlungshistorie, Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Bilder und den Leistungskatalog.
2. **Klären Sie, welche Module Ihre Daten halten.** Bei einem modularen System liegen Archiv, Multi-Media und Orga-Manager nicht zwangsläufig im selben Export wie die Kartei.
3. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
4. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
5. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
6. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
7. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 11. August 2026 abgerufen.

- "Seit über 50 Jahren entwickeln wir innovative Dentalsoftware" und der modulare Aufbau: [evident.de](https://www.evident.de/)
- Zielgruppen, Basismodul und Modulgruppen: [evident.de/zahnarztsoftware](https://www.evident.de/zahnarztsoftware/)
- Vollständige Modulliste, Fach-Module und Schnittstellen: [evident.de/zahnarztsoftware/software-module](https://www.evident.de/zahnarztsoftware/software-module/)
- TI-Anwendungen eLABZ, ePA, eBZ, eArztbrief, eRezept, KIM, eAU, eBonusheft, eMP, NFDM: [evident.de/zahnarztsoftware/software-module/telematikinfrastruktur](https://www.evident.de/zahnarztsoftware/software-module/telematikinfrastruktur/)
- Digitale Unterschrift und kontaktloses Anmeldesystem: [evident.de/zahnarztsoftware/software-module/systemerweiterungen](https://www.evident.de/zahnarztsoftware/software-module/systemerweiterungen/)
- Chronik, "50 Jahre Erfahrung, Innovation und Verlässlichkeit", die Anwenderzahlen 2001 und 2005 sowie "Über 1.800 Kunden und ein Marktanteil von 75 Prozent bei den kieferchirurgischen Praxen" (2009): [evident.de/unternehmen](https://www.evident.de/unternehmen/)
- Betriebssysteme, Arbeitsspeicher, Platten, Netz, Virtualisierung, Firebird-2.5-Empfehlung, Datenwachstum und die zugelassenen Konnektoren, Dokument mit Stand 01.01.2026: [Hard- und Software-Voraussetzungen (PDF)](https://www.evident.de/wp-content/uploads/2025/01/Hard-_und_Software_Voraussetzungen.pdf), verlinkt von [evident.de/service/technische-voraussetzungen-downloads](https://www.evident.de/service/technische-voraussetzungen-downloads/)
- Support-Anspruch "keine einzige Anfrage länger als einen Tag unbeantwortet zu lassen": [evident.de/service](https://www.evident.de/service/)
- Online-Set 10 x 30, Webinar-Flatrate und Fortbildungspunkte: [evident.de/training-center](https://www.evident.de/training-center/)
- Firmierung, Sitz, Handelsregister und Geschäftsführung: [evident.de/impressum](https://www.evident.de/impressum/)
- Abkündigung von Firebird 2.5 und letzte Fassung 2.5.9 vom 24. Juni 2019: [firebirdsql.org](https://firebirdsql.org/en/firebird-2-5/)
- `evident.de/preise/`, `evident.de/preis/` und `evident.de/kosten/` lieferten HTTP 404.
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei EVIDENT etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
