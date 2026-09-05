---
title: "Dentalpin und teemer im Vergleich: Cloud aus Hamburg gegen Open Source auf dem eigenen Server"
description: "Ehrlicher Vergleich zwischen teemer von ARZ.dent und Dentalpin: KZBV-Zulassung seit 2014, TI, Preismodell, Zwei-Jahres-Vertrag und wo die Daten liegen."
pubDate: 2026-09-05
tags: [vergleich, teemer, arz-dent, praxissoftware, zahnarztsoftware]
---

teemer ist die deutsche Praxissoftware, die es sich leisten kann, alles in die Cloud zu legen: nach eigener Angabe ist sie seit 2014 als erste cloudbasierte Lösung bei der KZBV zugelassen. Wer das liest und trotzdem über Self-Hosting nachdenkt, hat meistens einen von zwei Gründen, und dieser Text handelt von beiden.

Wir bauen Dentalpin, sind also nicht neutral. Genau sein können wir trotzdem.

> **Alles über teemer in diesem Text stammt von teemer.de**, abgerufen am 5. September 2026, jede Aussage unten mit URL. Was ARZ.dent nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Fachportalen und Vergleichsseiten haben wir bewusst weggelassen, auch dort, wo sie schmeichelhaft gewesen wären.

## In dreißig Sekunden

**teemer ist eine vollständige deutsche Praxisverwaltung, die in der Cloud läuft.** Herausgeber ist die ARZ.dent GmbH in Hamburg, Teil der ARZ Haan Gruppe, nach eigener Angabe mit rund 50 Mitarbeitenden. Kassenabrechnung, Telematikinfrastruktur, eRezept, eAU und EBZ sind enthalten, Röntgengeräte hängen über VDDS Media daran, und Backups und Updates macht der Anbieter.

**Dentalpin ist Open Source und läuft auf Ihrem eigenen Server.** Der Code liegt auf GitHub, die Installation ist ein `docker compose`, es gibt keine Gebühr je Behandler, je Stuhl oder je Standort, und alles, was die Oberfläche kann, kann auch die öffentliche API. Für eine deutsche Kassenpraxis fehlt allerdings genau das, was teemer stark macht.

**Die Frage, die entscheidet: rechnen Sie mit der KZV ab?** Wenn ja, ist teemer heute die Antwort und wir sind es nicht. Wenn Sie rein privat abrechnen, außerhalb Deutschlands arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest.

![Agenda von Dentalpin als Board: Termine in Spalten nach Status, mit Patient, Behandler und Uhrzeit je Karte](/screenshots/schedule-canban.png)

*Die Agenda von Dentalpin in der Board-Ansicht, mit den Demodaten der Installation.*

## Was teemer ist

teemer ist die "webbasierte Zahnarztsoftware in der teemer-Cloud", entwickelt und vermarktet von der ARZ.dent GmbH, Sierichstraße 39 in 22301 Hamburg, Amtsgericht Hamburg HRB 157076, Geschäftsführer Stefan Mühr.

Die Muttergesellschaft ist kein Softwarehaus, sondern ein Abrechner. Die eigene Seite beschreibt die ARZ Haan Gruppe als "einen der führenden Anbieter von Abrechnungsdienstleistungen im Gesundheitswesen" und nennt "mehr als 100 Millionen Verordnungen" im Jahr bei einem "Gesamtabrechnungsvolumen von mehr als 10 Milliarden Euro". Das erklärt, warum das Produkt vom Abrechnungsende her gedacht ist.

Zur Verbreitung sagt das FAQ einen Satz: "Wir sind stolz seit geraumer Zeit die 500er-Marke geknackt zu haben und wachsen kontinuierlich." Gemeint sind Anwender, nicht Praxen, und mehr Zahlen dazu stehen dort nicht.

### Eine Cloud, die trotzdem einen PC in der Praxis braucht

Das ist der interessanteste technische Punkt und er steht offen im FAQ. Für teemer brauchen Sie "eine Internetverbindung von mindestens 16Mbit/s und einen leistungsfähigen PC, auf dem wir unsere mehrfach zertifizierte Verschlüsselungstechnologie healthconnect installieren können". Danach genügen "Computer oder Laptops mit Internetverbindung und einen Internetbrowser".

Der Grund dafür ist zugleich das beste Datenschutzargument, das ARZ.dent hat. Alle Daten liegen "georedundant in unserem konzerneigenen Rechenzentrum", und die Verschlüsselung passiert vorher: sensible Daten werden "vor der Übertragung ins Rechenzentrum noch in der Praxis sicher verschlüsselt und auch nur dort wieder entschlüsselt". Der Satz, auf den es ankommt, lautet: "Klardaten verlassen niemals die Praxis."

Backups sind damit Sache des Anbieters ("Wir speichern deine verschlüsselten Daten georeduntant und mehrfach täglich"), Updates ebenfalls: sie laufen zentral und nachts, neue Releases erscheinen "im Regelfall dienstags und donnerstags ab ca. 22 Uhr". Zur Verfügbarkeit nennt das FAQ eine konkrete Zahl, was selten ist: "Unsere aktuelle Downtime beträgt gerade einmal 0,213 %."

Fällt das Internet aus, gibt es "für eine essenzielle Daten (Terminbuch, Patientenstamm, etc.) für Notfälle einen Offlinemodus". Behandeln und abrechnen können Sie damit nicht.

### Kassenabrechnung, TI und Schnittstellen

Hier ist teemer vollständig, und für eine deutsche Praxis ist das die halbe Entscheidung.

- **KZBV.** Auf die Frage "Ist die Software bei der KZBV zugelassen?" antwortet ARZ.dent: "Ja. Die teemer Praxissoftware ist bereits seit 2014 als erste cloudbasierte Lösung bei der KZBV zugelassen." Bei uns ist diese Zeile leer.
- **Vollständiger PVS-Ersatz.** "Ja, die teemer Praxissoftware beinhaltet auch alle Funktionen einer klassischen Abrechnungssoftware."
- **Telematikinfrastruktur.** "Alle TI-Funktionen sind bei unserer inkludiert", und an anderer Stelle: "Ebenso erfüllen wir alle gesetzlichen Anforderungen der Telematikinfrastruktur." Die Produktseite nennt "eRezept, eAU, EBZ per Apple Watch" und die Komfortsignatur, die sich laut ARZ.dent über die Uhr in "weniger als zwei Sekunden" freigeben lässt.
- **Röntgen.** "Die Einbindung von Röntgengeräten erfolgt generell über die Standardschnittstelle VDDS Media. Zusätzlich wird die Anbindung an Sidexis (Slida) angeboten." Bilddaten können nach teemer zurückgespielt werden.
- **Kartenterminals.** "Verwendet werden können generell alle Geräte, die den Standard CTAPI unterstützen (z. B. Ingenico, German Telematics und Cherry)."
- **Abrechnungsdienstleister.** Über die Standardschnittstelle VDDS-RZ arbeitet teemer mit dem konzerneigenen Factoring RZH.dental "als auch mit allen anderen gängigen Abrechnungs-dienstleistern".

Zwei Grenzen nennt ARZ.dent selbst. MKG-Leistungen sind "aktuell noch nicht inkludiert". Und der Aufbau ist bewusst starr: "Die teemer Praxissoftware ist nicht modular aufgebaut. Deshalb können einzelne Systembestandteile nicht separat erworben werden." Die Online-Terminbuchung ist davon ausgenommen, sie steht auf der Produktseite in der Vorteilsliste ausdrücklich als "Online-Terminbuchung (Add-on)".

### Was teemer kostet

Einen Euro-Betrag veröffentlicht ARZ.dent nicht, aber im Unterschied zu den meisten Wettbewerbern beschreibt die Firma das Modell vollständig.

> **teemer nennt keinen Preis, wohl aber die Preisformel.** Am Anfang stehen einmalige Kosten "für Customizing der Cloud und das teemer-Training", danach laufende monatliche Kosten, und die "berechnen sich aus der Anzahl der bei dir tätigen Behandler (exkl. Prophylaxe) und deiner angebundenen Standorte". Berechnet wird ab Go-live, also ab dem Zeitpunkt, "zu dem die Praxissteuerung eingerichtet ist". Die Prophylaxe ausgenommen zu haben ist fair und ungewöhnlich, doch die Rechnung wächst weiter mit jedem neuen Behandler und jedem neuen Standort.

Die Vertragsbedingungen stehen ebenso offen im FAQ, und sie sind der Teil, den man vor der Unterschrift kennen sollte. Die Laufzeit beginnt "spätestens mit der Aufschaltung" und läuft "für eine Dauer von zwei Jahren", verlängert sich ohne Kündigung "jeweils automatisch um ein weiteres Jahr", und gekündigt werden kann "mit einer Frist von sechs Monaten zum Ende der Vertragslaufzeit".

Zwei Jahre plus sechs Monate Frist heißt: die Entscheidung fällt zweieinhalb Jahre im Voraus, nicht im Monat des Ärgers.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Installiert wird sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, bedient wird sie im Browser.

Der Umfang: Terminkalender, Patienten, Zahnschema, Patientenakte, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Zahlungen, Recall und Auswertungen. Dazu ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt. Es gibt keine Gebühr je Behandlungsstuhl, je Behandler oder je Patient, und nichts wird einzeln hinzugebucht.

Was es in Deutschland heute **nicht** gibt, und das ist die kurze Fassung des ganzen Vergleichs: keine KZV-Abrechnung nach BEMA oder GOZ, keine KZBV-Zulassung, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, keine VDDS-Schnittstelle, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Parodontalstatus in Dentalpin mit sechs Messstellen je Zahn, Taschentiefe, Rezession und Blutungsindex](/screenshots/periodontogram.png)

*Der Parodontalstatus erfasst sechs Messstellen je Zahn. In teemer lassen sich die Sondierungstiefen laut Produktseite per Sprache erfassen.*

## Nebeneinander

Nur belegbare Zeilen. Wo teemer nichts veröffentlicht, steht das da und nicht unsere Vermutung.

| | teemer | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, webbasiert | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Kein Euro-Betrag auf der Website | ✓ 0 €, selbst gehostet |
| Preismodell | ~ Einmalige Startkosten, dann monatlich je Behandler (exkl. Prophylaxe) und Standort | ✓ Keine Gebühr je Behandler oder Standort |
| Vertragslaufzeit | ✗ Zwei Jahre, danach je ein weiteres Jahr | ✓ Keine |
| Kündigungsfrist | ✗ Sechs Monate zum Ende der Laufzeit | ✓ Keine |
| Betriebsart | Cloud im konzerneigenen Rechenzentrum | Self-Hosting auf Ihrem Server |
| Wo die Daten liegen | Georedundant im Rechenzentrum der Gruppe | ✓ Auf Ihrem Server |
| Verschlüsselung | ✓ In der Praxis, "Klardaten verlassen niemals die Praxis" | ~ TLS und Ihre eigene Serverkonfiguration |
| Voraussetzung vor Ort | ~ Mind. 16 Mbit/s und ein PC für healthconnect | ~ Ein Server mit Docker |
| Endgeräte | ✓ Windows und macOS, Apps für iPhone, iPad und Apple Watch | ~ Browser, keine eigenen Apps |
| Backups | ✓ Mehrfach täglich, georedundant, durch den Anbieter | ~ Ihre Aufgabe |
| Updates | ✓ Zentral und nachts durch ARZ.dent | ~ Sie entscheiden, wann |
| Verfügbarkeit | ✓ "Downtime 0,213 %" laut eigenem FAQ | ~ So gut wie Ihr Server |
| Betrieb ohne Internet | ~ Offlinemodus für Terminbuch und Patientenstamm | ✓ Läuft im eigenen Netz weiter |
| KZBV-Zulassung | ✓ Seit 2014, nach eigener Angabe als erste Cloud-Lösung | ✗ Keine |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Ersetzt die klassische Abrechnungssoftware | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ Alle TI-Funktionen inkludiert, eRezept, eAU, EBZ | ✗ Nicht vorhanden |
| Röntgenanbindung | ✓ VDDS Media, zusätzlich Sidexis (Slida) | ~ Über die API, nicht über VDDS |
| Kartenlesegeräte | ✓ Alle Geräte mit CTAPI-Standard | ✗ Nicht vorhanden |
| Abrechnungsdienstleister | ✓ VDDS-RZ, RZH.dental und andere | ✗ Nicht vorhanden |
| Aufbau | Nicht modular, Online-Terminbuchung als Add-on | Ein Umfang, nichts zubuchbar |
| MKG-Leistungen | ✗ "aktuell noch nicht inkludiert" | ✗ Nicht vorhanden |
| Verbreitung | ✓ Über 500 Anwender nach eigener Angabe | ✗ Seit 2026 |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Einführung und Schulung | ✓ Onboarding mit persönlicher Consultant, teemUPs, Schulungen | ~ Dokumentation und GitHub Discussions |
| Öffentliche API | ✗ Auf teemer.de nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Zwei Zeilen sagen genau das und nichts weiter. "Auf teemer.de nicht beschrieben" heißt, dass wir dort keine Entwicklerdokumentation gefunden haben, nicht, dass es für Kunden keine gibt: fragen Sie danach. Und bei der Verschlüsselung steht bei uns bewusst ein gelber Punkt, weil eine Ende-zu-Ende-Trennung wie healthconnect bei einer selbst gehosteten Installation schlicht ein anderes Problem löst.

## Wählen Sie teemer, wenn

Das ist keine Pflichtübung, das sind die Gründe:

- **Sie mit der KZV abrechnen.** teemer ersetzt die Abrechnungssoftware vollständig und ist nach eigener Angabe seit 2014 bei der KZBV zugelassen. Bei uns fehlt beides, und daran ändert kein Argument über Lizenzen etwas.
- **Sie die Telematikinfrastruktur brauchen.** eRezept, eAU, EBZ und die Komfortsignatur sind enthalten, Kartenterminals mit CTAPI werden unterstützt. Diese Zeile ist bei uns leer.
- **Sie keinen Server und keine Backups mehr wollen.** Georedundante Sicherung mehrfach täglich, nächtliche Updates und eine veröffentlichte Downtime von 0,213 Prozent sind genau das, was Self-Hosting Ihnen abverlangt und was teemer Ihnen abnimmt.
- **Sie mobil und an mehreren Standorten arbeiten.** iPad, iPhone und Apple Watch sind hier keine Beigabe, sondern der Arbeitsweg: Anamnese am iPad, PA-Sondierungstiefen per Sprache, Signaturen über die Uhr.
- **Sie Ihr Röntgen anbinden müssen.** VDDS Media plus Sidexis. Wir sind nicht Mitglied im VDDS und sprechen den Standard nicht.
- **Sie deutschsprachigen Support und ein Onboarding wollen**, das jemand begleitet. Es gibt eine persönliche Software Consultant, Schulungen und Anwendertreffen. Wir haben GitHub Discussions.

Wenn drei dieser sechs Punkte zutreffen, ist die ehrliche Antwort, sich teemer anzusehen und diesen Text als Hintergrund zu behalten.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie sich nicht zweieinhalb Jahre im Voraus binden wollen.** Bei uns gibt es keine Laufzeit und keine Kündigungsfrist, weil es keinen Vertrag gibt.
- **Ihre Rechnung nicht mit dem Team wachsen soll.** Ein weiterer Behandler oder ein zweiter Standort ändert bei uns nichts an den Kosten.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche und dokumentierte API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

> **Testen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Und rechnen Sie mit der Sechs-Monats-Frist: wer zum Ende einer Zwei-Jahres-Laufzeit wechseln will, muss ein halbes Jahr vorher entschieden haben.

## Wie ein Umzug wirklich abläuft

1. **Klären Sie zuerst die Kassenabrechnung.** Wenn Sie mit der KZV abrechnen, endet die Liste hier, und der ehrliche Rat ist, bei einem zugelassenen System zu bleiben.
2. **Fragen Sie schriftlich nach dem Export**, bevor Sie kündigen. teemer.de beschreibt die Datenübernahme in das System hinein ausführlich, einen Export aus dem System heraus aber nicht. Was Sie bekommen, in welchem Format und bis wann, gehört vor die Kündigung, nicht danach.
3. **Rechnen Sie die Frist rückwärts.** Sechs Monate zum Ende der Laufzeit, sonst verlängert sich der Vertrag um ein weiteres Jahr.
4. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie danach arbeiten wollen.
5. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen und Beispielzeilen an, bevor es irgendetwas schreibt.
6. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie.
7. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
8. **Behalten Sie den Zugang zum alten System**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

> **Schritt 6 ist der, an dem Migrationen scheitern.** Zwei Praxen kodieren Leistungen nie gleich, und **eine stillschweigend geratene Zuordnung erzeugt falsche Rechnungen, die monatelang niemand bemerkt**.

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

## Das Ehrliche

teemer hat in Deutschland etwas, das wir nicht haben, und es ist nicht das Marketing: eine KZBV-Zulassung seit 2014, die vollständige TI und ein Konzern hinter der Abrechnung. Für eine Kassenpraxis, die morgen arbeiten muss, ist das heute die vernünftige Wahl, und es wäre unredlich, das anders zu schreiben.

Dentalpin ist die andere Wette: dass die Software einer Praxis kein gemietetes Blackbox-Abo sein sollte. Was das kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 5. September 2026 abgerufen.

- Produktbeschreibung "webbasierte Zahnarztsoftware in der teemer-Cloud" und die Produktübersicht: [teemer.de](https://teemer.de/) und [teemer.de/produkte](https://teemer.de/produkte/)
- "Lizenzfrei", "Kompatibel mit Windows & MacOS", "Online-Terminbuchung (Add-on)", "Patentierte Verschlüsselungs-technik", die Apps für iPad, iPhone und Apple Watch, die PA-Befundaufnahme per Spracherfassung, "eRezept, eAU, EBZ per Apple Watch", die Komfortsignatur, das Kanban-System am Empfang, SumUp und Zettle sowie teemfactor über die Schwestergesellschaft RZH: [teemer.de/produkte/praxissoftware](https://teemer.de/produkte/praxissoftware/)
- KZBV-Zulassung "bereits seit 2014 als erste cloudbasierte Lösung", "über 500 Anwender", die Voraussetzungen (16 Mbit/s und healthconnect), "Klardaten verlassen niemals die Praxis", die georedundante Speicherung mehrfach täglich, die nächtlichen Updates und Releases dienstags und donnerstags, "Downtime 0,213 %", der Offlinemodus, VDDS Media und Sidexis (Slida), CTAPI, VDDS-RZ und RZH.dental, "beinhaltet auch alle Funktionen einer klassischen Abrechnungssoftware", "nicht modular aufgebaut", MKG-Leistungen "aktuell noch nicht inkludiert", das Preismodell je Behandler und Standort, die Berechnung ab Go-live sowie Vertragslaufzeit und Kündigungsfrist: [teemer.de/faq](https://teemer.de/faq/)
- ARZ.dent als Teil der ARZ Haan Gruppe, rund 50 Mitarbeitende, "mehr als 100 Millionen Verordnungen" und "mehr als 10 Milliarden Euro" Abrechnungsvolumen: [teemer.de/ueber-uns/teemer](https://teemer.de/ueber-uns/teemer/)
- Firmierung, Sitz, Amtsgericht Hamburg HRB 157076, USt-IdNr. und Geschäftsführer Stefan Mühr: [teemer.de/impressum](https://teemer.de/impressum)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei ARZ.dent etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde. Das gilt auch, wenn Sie bei teemer arbeiten.
