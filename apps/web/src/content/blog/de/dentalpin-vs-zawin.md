---
title: "Dentalpin und ZaWin im Vergleich: der Schweizer Marktführer gegen Open Source auf dem eigenen Server"
description: "Ehrlicher Vergleich zwischen ZaWin von Martin Engineering und Dentalpin: SSO-Tarif und LP+, UV/MV/IV, Cloud oder eigener Server, Preise und Datenhaltung."
pubDate: 2026-09-06
tags: [vergleich, zawin, martin-engineering, praxissoftware, zahnarztsoftware, schweiz]
---

ZaWin ist in der Schweiz die Software, an der man nicht vorbeikommt: über 40 Jahre am Markt, nach eigener Angabe täglich über 15.000 Anwender, und der SSO-Tarif ist darin so eingebaut, dass eine Praxis ihn gar nicht selbst nachführen muss. Wer das liest und trotzdem über Self-Hosting nachdenkt, hat dafür meistens zwei Gründe, und dieser Text handelt von beiden.

Wir bauen Dentalpin, sind also nicht neutral. Genau sein können wir trotzdem.

> **Alles über ZaWin in diesem Text stammt von zawin.ch**, abgerufen am 6. September 2026, jede Aussage unten mit URL. Was die Martin Engineering AG nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir bewusst weggelassen, auch dort, wo sie schmeichelhaft gewesen wären.

## In dreissig Sekunden

**ZaWin ist die Praxisadministration der Martin Engineering AG in Nänikon, gebaut für den Schweizer Abrechnungsalltag.** Der SSO-Tarif mit den neuen Leistungspaketen Plus, die elektronische Rechnungsstellung an UV, MV und IV, Sonderabrechnungen mit Schulen und Gemeinden, Medi-Data, die VDDS- und SLIDA-Schnittstelle zum Röntgen: das ist alles da, und die Firma pflegt es nach, wenn sich der Tarif ändert.

**Dentalpin ist Open Source und läuft auf Ihrem eigenen Server.** Der Code liegt auf GitHub, die Installation ist ein `docker compose`, es gibt keine Gebühr je Behandler, je Behandlungsstuhl oder je Standort, und alles, was die Oberfläche kann, kann auch die öffentliche API. Für eine Schweizer Praxis fehlt allerdings genau das, was ZaWin stark macht.

**Die Frage, die entscheidet: rechnen Sie über den SSO-Tarif mit den Sozialversicherern ab?** Wenn ja, ist ZaWin heute die Antwort und wir sind es nicht. Wenn Sie rein privat abrechnen, ausserhalb der Schweiz arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest.

![Wochenansicht der Agenda in Dentalpin: Termine je Behandler und Behandlungszimmer nebeneinander, mit Dauer und Status](/screenshots/schedule-week.png)

*Die Wochenansicht der Agenda in Dentalpin, mit den Demodaten der Installation.*

## Was ZaWin ist

ZaWin ist die Praxisadministrationssoftware der Martin Engineering AG, Gewerbestrasse 1 in 8606 Nänikon, mit einem zweiten Standort an der Via Luserte Sud 6 in 6572 Quartino. Die Beratung läuft in Nänikon auf Deutsch, im Tessin auf Italienisch und Französisch.

Die Firmengeschichte steht mit Jahreszahlen auf der eigenen Seite. 1981 die "Gründung der Firma Martin Engineering durch Pius A. Martin, El. Ing. HTL als Einzelgesellschaft", 1985 die Umwandlung in eine Aktiengesellschaft, 1995 die "Übernahme des Zahnarztbereichs der Firma Comparo CDS" bei einem eigenen Marktanteil von damals 25 Prozent, 1997 ein Management Buyout durch leitende Mitarbeiter.

Für die Jahre 1995 bis 2005 nennt dieselbe Chronik die "Entwicklung zum Schweizer Marktführer für Dentalsoftware mit fast 50 Mitarbeitern und über 1500 Kunden". 2022 steht dort "Über 10.000 Praxismitarbeiter arbeiten täglich mit ZaWin", die Startseite sagt heute "Täglich arbeiten über 15.000 Menschen mit unserer Software". 2023 übernahm Christian Martin, der Sohn des Firmengründers, das Unternehmen, 2024 kam die ZaWin Cloud dazu.

Die Marktführerschaft ist die Selbstbeschreibung des Herstellers ("Seit über 40 Jahren sind wir Marktführer im Bereich Dental Work Management"), kein von uns geprüfter Marktanteil.

### Der Schweizer Tarif ist der Kern, nicht ein Modul

Das ist der Teil, an dem sich in der Schweiz alles entscheidet, und ZaWin dokumentiert ihn in den eigenen News offen.

Zum 1. Januar 2025 trat ein aktualisierter Leistungskatalog in Kraft. Die Firma beschreibt ihn so: "Die Schweizerische Zahnärzte-Gesellschaft (SSO) hat gemeinsam mit den eidgenössischen Sozialversicherungspartnern UV/MV eine Anpassung beschlossen, die unter anderem ein neues Abrechnungsmodell zu Lasten der Sozialversicherer umfasst. Dabei werden die Tarifziffern einzelner Behandlungsschritte in sogenannten Leistungspaketen Plus (LP+) zusammengefasst."

Dazu kommt die Pflicht zur elektronischen Übermittlung: Rechnungen und Dossiers an UV, MV und IV können "ausschliesslich elektronisch übermittelt werden", mit einer Übergangsfrist bis zum 30. Juni 2025. Wer das nicht aus der Software heraus kann, kann diese Fälle nicht abrechnen.

> **Wie ein Anbieter mit einer Tarifänderung umgeht, sagt mehr als jede Funktionsliste.** ZaWin kündigte die neue Version für Ende November bis Anfang Dezember an, bat Kunden, das Update vor Jahresende zu installieren, und schrieb dazu einen Satz, der die beiden Betriebsarten schön trennt: "Für ZaWin Cloud-Kunden werden die Änderungen automatisch übernommen – hier ist keine Aktion Ihrerseits erforderlich."

Der nächste Wechsel ist schon angekündigt. Am 28. August 2026 meldete die Firma, dass die Zentrale Ausgleichsstelle die elektronische Übermittlung von IV-Rechnungen "ab dem 1. Januar 2027 neu an Swisscom und deren Plattform curaLINE vergeben" hat, heute läuft sie aus ZaWin über die MediData-Schnittstelle. Die eigene Zusage: "ZaWin wird die elektronische Rechnungsübermittlung an die ZAS auch unter der neuen Lösung unterstützen." Für Kunden bestehe "aktuell kein Handlungsbedarf".

### Kaufen oder mieten, und was das kostet

ZaWin verkauft zwei Modelle nebeneinander, und beide stehen auf der Startseite.

- **ZaWin kaufen** ist das klassische Modell: "Modulares Baukastenprinzip", "Funktionelle & finanzielle Anpassungsmöglichkeit", "Klassisch oder cloudbasiert". Sie kaufen, was Sie brauchen, und buchen später dazu.
- **ZaWin mieten** ist der "Cloudbasierte Komplett-Service" mit "Null Betriebsaufwand", "Ein Preis pro Monat", "Volle Funktionalität" und "Cloud Managed Röntgen-Integration".

Einen Frankenbetrag für diese beiden Modelle veröffentlicht die Firma auf den konsultierten Seiten nicht. Was sie veröffentlicht, sind drei Sonderpreise, und die sind ungewöhnlich konkret für diesen Markt.

> **Drei veröffentlichte Zahlen, und keine davon ist der Normalpreis.** Für Neugründungen gilt das "5 Franken Modell: Die volle ZaWin Power für 5 CHF pro Patient". Wer eine Praxis übernimmt, übernimmt "auch das ZaWin ihres Vorgängers für nur EINEN Franken". Und der Wartungsvertrag Plus mit Servicezeiten bis 20 Uhr und am Wochenende kostet laut News vom 4. Dezember 2024 "nur 1 Franken pro Tag". Was die Software selbst pro Monat kostet, erfahren Sie im Gespräch.

Für selbständige Dentalhygienikerinnen gibt es mit DHWin ein eigenes Produkt, inklusive "Massgeschneidertem Parostatus" und "einem speziellen Teilzeit Preismodell". Auch dort steht keine Zahl.

### Funktionen, Schnittstellen und die Cloud

Der Funktionsumfang ist in vier Bereiche geteilt: Patientendaten, Kommunikation, Rechnungswesen und Praxisorganisation. Die Punkte, die im Vergleich zählen:

- **Zahn-Status.** Die Software bietet "eine aktuelle Zahnübersicht des Patienten mit integrierter individueller Krankengeschichte", und durch "Einzeichnen der Operation im Zahnschema" werden Leistungen automatisch generiert. Einen eigenen Parodontalstatus nennen die konsultierten Seiten nur für DHWin.
- **KI-Bilddiagnostik.** Zusammen mit dem Schweizer Unternehmen Nostic werden Röntgenbilder auf Karies beurteilt, spezialisiert auf Bitewings, mit automatischem RX-Bildimporter direkt in ZaWin.
- **Röntgen-Schnittstelle.** Stammdaten gehen "über eine standardisierte VDDS- oder SLIDA-Schnittstelle an jedes gängige Röntgenprogramm", bei VDDS-Mesia zeigt ZaWin die Bilder selbst an.
- **Sonderabrechnungen.** Schulabrechnung, Factoring-Dienstleister, Medi-Data und KO-Ratenabrechnung, mit dem Zusatz "Als Zahnarzt müssen Sie nicht in Vorleistung bei den Kassen gehen".
- **SecureMail und SecurePrint.** Verschlüsselte Zustellung mit TAN-Authentifizierung per SMS, und wenn der Patient nicht reagiert, geht dieselbe Rechnung automatisch über eine externe Druckerei per A- oder B-Post raus. Das Porto läuft über ZaWin SMS Punkte.
- **Praxis-Zentren.** Rollenbasiertes Benutzermanagement über Standorte hinweg, zentrale Pflege von Formularen und Medikamentenplänen, ein "zentrales Datalake für Datenanalysen" und eine Cockpit-Funktion.

Die Cloud ist das jüngste Kapitel und die Firma formuliert das Versprechen deutlich: "Bisher dominierten lokale Server in jeder Praxis." In der ZaWin Cloud übernimmt der Anbieter Software-Upgrades, Virenschutz, Betriebssystem-Patching und tägliche Backups, und über die X-Ray Appliance hängen auch Röntgen- und Scannersoftware serverlos daran, entwickelt "in Zusammenarbeit mit Partnern wie Kaladent, Straumann, Jordi und vielen anderen".

Zur Datenhaltung ist die Datenschutzerklärung der Martin Engineering AG präzise, aber sie handelt von den Personendaten, die die Firma über Kunden und Website-Besucher bearbeitet: "Ihre Personendaten werden in der Schweiz gespeichert", und "Unser zentrale Dienstleister im IT-Bereich ist Microsoft. Microsoft speichert unsere Daten ausschliesslich in der Schweiz." Eine eigene Aussage dazu, wo die Patientendaten der ZaWin Cloud liegen, steht auf den konsultierten Seiten nicht. Fragen Sie danach und lassen Sie es sich schriftlich geben.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Installiert wird sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, bedient wird sie im Browser.

Der Umfang: Terminkalender, Patienten, Zahnschema, Patientenakte, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Zahlungen, Recall und Auswertungen. Dazu ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt. Es gibt keine Gebühr je Behandlungsstuhl, je Behandler oder je Patient, und nichts wird einzeln hinzugebucht.

Was es in der Schweiz heute **nicht** gibt, und das ist die kurze Fassung des ganzen Vergleichs: keine Abrechnung über den SSO-Tarif, keine Leistungspakete Plus, keine elektronische Übermittlung an UV, MV oder IV, keine Anbindung an MediData oder curaLINE, keine VDDS- oder SLIDA-Schnittstelle zum Röntgen, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

## Nebeneinander

Nur belegbare Zeilen. Wo ZaWin nichts veröffentlicht, steht das da und nicht unsere Vermutung.

| | ZaWin | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, Kauf oder Miete | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Kein Frankenbetrag für Kauf oder Miete | ✓ 0 CHF, selbst gehostet |
| Veröffentlichte Sonderpreise | ~ 5 CHF pro Patient für Neugründungen, 1 CHF bei Praxisübernahme | ✓ Keine Sonderfälle nötig |
| Wartungsvertrag Plus | ~ 1 Franken pro Tag, Service bis 20 Uhr und am Wochenende | ✗ Kein bezahlter Supportvertrag |
| Vertragslaufzeit | Auf den konsultierten Seiten nicht veröffentlicht | ✓ Keine |
| Betriebsart | ✓ Klassisch im Haus oder ZaWin Cloud | Self-Hosting auf Ihrem Server |
| Wo die Daten liegen | Für Kundendaten Schweiz laut Datenschutzerklärung, für die Cloud nicht ausgeführt | ✓ Auf Ihrem Server |
| Backups und Updates | ✓ In der Cloud durch den Anbieter, täglich | ~ Ihre Aufgabe |
| Jahre am Markt | ✓ Seit 1981, Software seit über 40 Jahren | ✗ Seit 2026 |
| Verbreitung | ✓ Über 15.000 tägliche Anwender nach eigener Angabe | ✗ Keine vergleichbare Zahl |
| SSO-Tarif und LP+ | ✓ Eingebaut und nachgeführt | ✗ Nicht vorhanden |
| Abrechnung UV/MV/IV | ✓ Elektronisch, heute über MediData, ab 2027 curaLINE | ✗ Nicht vorhanden |
| Sonderabrechnungen | ✓ Schulen, Gemeinden, Factoring, KO-Raten | ✗ Nicht vorhanden |
| Röntgenanbindung | ✓ VDDS und SLIDA, Bildanzeige bei VDDS-Mesia | ~ Über die API, nicht über VDDS |
| KI am Bild | ✓ Kariesbeurteilung auf Bitewings mit Nostic | ✗ Nicht vorhanden |
| KI in der Verwaltung | ✗ Auf zawin.ch nicht beschrieben | ✓ Agent mit Rückfrage vor jedem Schreibvorgang |
| Zahnschema | ✓ Mit automatischer Leistungsgenerierung | ✓ Erfassung je Fläche |
| Parodontalstatus | ~ Als Parostatus nur für DHWin genannt | ✓ Sechs Messstellen je Zahn |
| Patientenkommunikation | ✓ SecureMail mit SMS-TAN, SecurePrint per A- und B-Post | ~ Recall und Erinnerungen, kein Postversand |
| Mehrere Standorte | ✓ Rollenbasiert, mit Datalake und Cockpit | ✓ Ohne Aufpreis je Standort |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Einführung und Schulung | ✓ Onboarding in fünf Phasen, ZaCademy-Kurse | ~ Dokumentation und GitHub Discussions |
| Support | ✓ Hotline in Nänikon und im Tessin, drei Sprachen | ~ Community, keine Hotline |
| Hardware | ✓ Aus einer Hand, intern entwickelt | ~ Ihre Sache |
| Öffentliche API | ✗ Auf zawin.ch nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Zwei Zeilen sagen genau das und nichts weiter. "Auf zawin.ch nicht beschrieben" heisst, dass wir dort keine Entwicklerdokumentation gefunden haben, nicht, dass es für Kunden keine gibt: fragen Sie danach. Und beim Parodontalstatus steht ein gelber Punkt, weil die Zahn-Status-Seite von erfassten "Messungen" spricht, ein eigener Parostatus aber nur beim Produkt für Dentalhygienikerinnen genannt wird.

## Wählen Sie ZaWin, wenn

Das ist keine Pflichtübung, das sind die Gründe:

- **Sie über den SSO-Tarif abrechnen.** Die Leistungspakete Plus sind seit dem 1. Januar 2025 eingebaut, und die Firma steht dafür nach eigener Angabe "in engem Kontakt mit der SSO". Bei uns ist diese Zeile leer, und daran ändert kein Argument über Lizenzen etwas.
- **Sie Rechnungen an UV, MV oder IV stellen.** Elektronisch ist dort seit Mitte 2025 der einzige Weg. ZaWin macht das heute über MediData und hat die Umstellung auf curaLINE zum 1. Januar 2027 bereits angekündigt.
- **Sie mit Schulen, Gemeinden oder einem Factoring-Dienstleister abrechnen.** Diese Sonderfälle sind ausgebaut, inklusive des Punktes, dass die Praxis nicht in Vorleistung geht.
- **Sie Ihr Röntgen anbinden müssen.** VDDS und SLIDA, dazu die Kariesbeurteilung mit Nostic. Wir sind nicht Mitglied im VDDS und sprechen den Standard nicht.
- **Sie weder Server noch Backups mehr wollen.** In der Cloud übernimmt der Anbieter Updates, Virenschutz, Patching und tägliche Sicherungen, und Tarifänderungen kommen ohne Ihr Zutun an.
- **Sie eine Hotline auf Deutsch, Französisch oder Italienisch wollen** und ein Onboarding, das jemand begleitet. Es gibt zwei Standorte, feste Servicezeiten und ZaCademy-Kurse. Wir haben GitHub Discussions.

Wenn drei dieser sechs Punkte zutreffen, ist die ehrliche Antwort, sich ZaWin anzusehen und diesen Text als Hintergrund zu behalten.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie wissen wollen, was es kostet, bevor Sie telefonieren.** Ein Preis für Kauf oder Miete steht bei ZaWin nicht auf der Website. Bei uns steht er, und er ist null.
- **Ihre Rechnung nicht mit dem Team wachsen soll.** Ein weiterer Behandler, ein zweiter Behandlungsstuhl oder ein zweiter Standort ändert bei uns nichts an den Kosten.
- **Sie ausserhalb der Sozialversicherungsabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin ausserhalb der Praxissoftware erledigen.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche und dokumentierte API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

> **Testen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Und klären Sie vorher schriftlich, wie Sie im Ernstfall wieder herauskommen: eine Laufzeit oder Kündigungsfrist veröffentlicht ZaWin auf den konsultierten Seiten nicht.

![Rechnungsliste in Dentalpin mit den Zuständen gestellt, bezahlt, teilbezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Offene Posten in Dentalpin. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

## Wie ein Umzug wirklich abläuft

1. **Klären Sie zuerst die Abrechnung.** Wenn Sie Fälle zu Lasten von UV, MV oder IV abrechnen, endet die Liste hier, und der ehrliche Rat ist, bei einem System zu bleiben, das den SSO-Tarif führt.
2. **Fragen Sie schriftlich nach dem Export**, bevor Sie kündigen. Was Sie bekommen, in welchem Format und bis wann, gehört vor die Kündigung, nicht danach.
3. **Fragen Sie nach der Laufzeit.** Sie steht nicht auf der Website, also gehört sie in die Offerte, zusammen mit der Kündigungsfrist.
4. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie danach arbeiten wollen.
5. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen und Beispielzeilen an, bevor es irgendetwas schreibt.
6. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie.
7. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
8. **Behalten Sie den Zugang zum alten System**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

> **Schritt 6 ist der, an dem Migrationen scheitern.** Zwei Praxen kodieren Leistungen nie gleich, und **eine stillschweigend geratene Zuordnung erzeugt falsche Rechnungen, die monatelang niemand bemerkt**.

## Das Ehrliche

ZaWin hat in der Schweiz etwas, das wir nicht haben, und es ist nicht das Marketing: einen gepflegten SSO-Tarif, die elektronische Abrechnung an die Sozialversicherer und vierzig Jahre Beziehung zu den Praxen, die damit arbeiten. Für eine Praxis, die morgen abrechnen muss, ist das heute die vernünftige Wahl, und es wäre unredlich, das anders zu schreiben.

Dentalpin ist die andere Wette: dass die Software einer Praxis kein gemietetes Blackbox-Abo sein sollte, und dass der Preis auf der Website stehen darf. Was das kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 6. September 2026 abgerufen.

- "Seit über 40 Jahren sind wir Marktführer im Bereich Dental Work Management", "Täglich arbeiten über 15.000 Menschen mit unserer Software", die beiden Modelle ZaWin kaufen und ZaWin mieten, das "5 Franken Modell" und der Franken bei Praxisübernahme, DHWin mit Parostatus und Teilzeit-Preismodell, die Praxis-Zentren mit Datalake und Cockpit, die ZaWin Cloud, die X-Ray Appliance und die Partner Kaladent, Straumann und Jordi sowie beide Standorte: [zawin.ch](https://www.zawin.ch/)
- Zahn-Status, Zahnschema, digitale Anamnese und die KI-Bilddiagnostik mit Nostic: [zawin.ch/patientendaten](https://www.zawin.ch/patientendaten/)
- Debitoren, Gemeinschaftspraxen und die Sonderabrechnungen mit Schulen, Gemeinden, Factoring, Medi-Data und KO-Raten: [zawin.ch/rechnungswesen](https://www.zawin.ch/rechnungswesen/)
- Recall, SecureMail mit SMS-TAN und SecurePrint mit A- und B-Post: [zawin.ch/kommunikation](https://www.zawin.ch/kommunikation/)
- Leistungserfassung, Agenda und Online-Agenda, Planung mit Einheilzeiten, Praxis-Auswertung sowie die VDDS- und SLIDA-Röntgenschnittstelle: [zawin.ch/praxisorganisation](https://www.zawin.ch/praxisorganisation/)
- DSG-Assistent, Support-Modus und die verschlüsselte Speicherung in der ZaWin Cloud: [zawin.ch/datenschutz](https://www.zawin.ch/datenschutz/)
- Firmengeschichte von 1981 bis 2024, Marktanteil 1995, "über 1500 Kunden" und "Über 10.000 Praxismitarbeiter": [zawin.ch/ueber-uns](https://www.zawin.ch/ueber-uns/)
- Das Onboarding in fünf Phasen: [zawin.ch/onboarding](https://www.zawin.ch/onboarding/)
- SSO-Tarif und Leistungspakete Plus zum 1. Januar 2025, die elektronische Übermittlung an UV/MV/IV mit Frist zum 30. Juni 2025, die Ablösung von MediData durch curaLINE zum 1. Januar 2027 und der Wartungsvertrag Plus für "1 Franken pro Tag": [zawin.ch/news](https://www.zawin.ch/news/)
- Impressum der Martin Engineering AG und die Datenschutzerklärung mit "Ihre Personendaten werden in der Schweiz gespeichert": [zawin.ch/rechtliches](https://www.zawin.ch/rechtliches/)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei der Martin Engineering AG etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde. Das gilt auch, wenn Sie bei ZaWin arbeiten.
