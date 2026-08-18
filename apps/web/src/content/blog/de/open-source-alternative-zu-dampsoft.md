---
title: "Open-Source-Alternative zu Dampsoft: was es heute wirklich gibt"
description: "Welche quelloffenen Alternativen zu Dampsoft es heute gibt, mit der Lizenz jedes Produkts von der Herstellerseite und dem, was in Deutschland dagegen spricht."
pubDate: 2026-08-18
tags: [vergleich, dampsoft, open-source, praxisverwaltungssoftware]
---

Die ehrliche Antwort steht vor dem Rest des Textes: Wenn Ihre Praxis mit der KZV abrechnet, gibt es heute keine quelloffene Praxisverwaltung, die DS-WIN ersetzen kann, und der Grund dafür steht auf einer Seite der KZBV.

Wir bauen Dentalpin und stehen selbst auf der Liste weiter unten. Neutral sind wir also nicht. Genau können wir sein.

> **Woher die Angaben stammen.** Alles über Dampsoft kommt von dampsoft.de, alles über die anderen Produkte von der Seite ihres jeweiligen Herstellers, und alles über die Abrechnung von der KZBV. Jede Quelle steht unten mit URL und Abrufdatum. Zahlen aus Vergleichsportalen haben wir weggelassen, weil sie sich widersprechen und keine davon vom Hersteller stammt.

## In dreißig Sekunden

**Die Liste ist kurz, und in Deutschland ist sie kürzer als anderswo.** Als lebende quelloffene Dentalprodukte bleiben Apexo unter GPLv3 und Dentalpin unter BSL 1.1 übrig. OpenMolar bezeichnet sich selbst als eingestellt, und Open Dental ist seit Version 24.4 nach eigener Aussage proprietär.

**Dampsoft ist die vollständige deutsche Praxisverwaltung.** Seit 1986 am Markt, nach eigenen Angaben mehr als 12.500 Kunden und mehr als 450 Mitarbeiter, mit KZV-Abrechnung, Anbindung an die Telematikinfrastruktur und deutschsprachigem Support. Nichts auf dieser Seite hat davon etwas.

**Die Frage, die vorher kommt: Muss Ihre Software mit der KZV abrechnen?** Wenn ja, endet die Suche hier, und der Rest ist Lektüre für später. Wenn Sie privat abrechnen, ein Praxislabor oder eine Praxis außerhalb der vertragszahnärztlichen Versorgung führen, oder wenn Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag, lohnt der Rest.

![Patientenakte in Dentalpin mit Zahnschema, klinischen Warnhinweisen, laufendem Behandlungsplan und nächstem Termin](/screenshots/dental-chart.png)

*Die Patientenakte in Dentalpin, mit den Demodaten, die die Installation mitbringt.*

## Warum die Liste in Deutschland kürzer ist als in anderen Märkten

Das ist kein Zufall und keine Frage der Verbreitung. Es ist eine Zulassungsfrage, und die KZBV beschreibt sie selbst.

Praxisverwaltungssysteme müssen laut KZBV "unter anderem in der Lage sein, Daten zu zahnärztlichen Leistungen für die Abrechnung mit der Kassenzahnärztlichen Vereinigung (KZV) aufzubereiten und in elektronischer Form zu übermitteln". Dafür gibt die KZBV den Herstellern nicht nur eine Spezifikation, sondern Code: "Die KZBV stellt den Softwareherstellern konkrete Vorgaben in Form von Programmmodulen zur Verfügung, die in die Praxisverwaltungsprogramme integriert werden."

Wer diese Module integriert hat und das Verfahren durchlaufen hat, steht auf der Herstellerliste. Und der Satz, mit dem die KZBV diese Liste einleitet, entscheidet das Thema dieses Textes:

> **"Die Auflistung enthält nur kommerzielle Praxisverwaltungssysteme (PVS), die die Eignungsfeststellung gemäß den Pflichtvorgaben für zahnärztliche Praxisverwaltungssysteme erhalten haben."** Kein quelloffenes System steht darauf, und zwar per Definition der Liste selbst. DS-Win und DS4 von DAMPSOFT stehen beide darauf, ebenso ivoris, EVIDENT, LinuDent, Z1 und charly by solutio (abgerufen am 18. August 2026).

Die Eignungsfeststellung ist dabei weniger, als ihr Name vermuten lässt. Die KZBV schreibt in ihrer Checkliste zur PVS-Wahl selbst dazu: "damit wird nur bestätigt, dass die aktuellen vertraglichen Vorgaben zur Abrechnung erfüllt werden". Sie sagt nichts über Bedienbarkeit, Vertragsbedingungen oder darüber, was mit Ihren Daten beim Wechsel passiert.

## Was Dampsoft ist und warum trotzdem gesucht wird

Auf der eigenen Startseite beschreibt sich das Unternehmen als "Deutschlands führender Anbieter für Zahnarzt-Software", nennt "+ 12.500 zufriedene Kunden", "Seit 1986" und "mehr als 450 Mitarbeiter in ganz Deutschland". Zum 40. Jubiläum verweist die Unternehmensseite auf die EDV-Statistik 2025 der KZBV.

Auf der Produktseite stehen fünf Produkte nebeneinander:

- **DS-WIN**, "Bewährte Praxisverwaltung", ausdrücklich als **On-Premise** ausgewiesen, mit Patienten-, Hygiene- und Qualitätsmanagement.
- **DS4**, "Webbasierte Praxissoftware", als cloudfähig und webbasiert beschrieben.
- **e-connect**, "Der TI-Konnektor in der Cloud".
- **AIVA**, "KI-Sprachdokumentation".
- **ATHENA**, "Digitale Anamnese & Aufklärung", mit einem KI-Röntgencheck.

Dass ein Hersteller beide Betriebsarten selbst anbietet und die Praxis wählen lässt, ist ein Argument, das wir sonst für uns beanspruchen. Hier steht es auf ihrer Seite.

Wer trotzdem nach einer Alternative sucht, kommt meistens von einem dieser drei Punkte: von der Rechnung, die mit jedem Behandlungsstuhl mitwächst, davon dass Code und Datenbankschema nicht einsehbar sind, oder von der Frage, was mit den Daten passiert, wenn sich die Bedingungen ändern.

Zum ersten Punkt gehört eine Präzisierung, weil dazu viel Falsches im Umlauf ist. Dampsoft veröffentlicht keine Preise: `dampsoft.de/preise/` lieferte am 18. August 2026 HTTP 404, und auf Produkt- und Startseite steht keine Zahl.

Was Sie in Vergleichsportalen an Beträgen finden, stammt also nicht von Dampsoft. Wenn der Preis für Sie zählt, holen Sie ihn dort, wo er verbindlich ist.

## Open Source heißt beim Softwarewechsel drei verschiedene Dinge

Unter demselben Etikett werden drei Sachen verkauft, und es lohnt, sie zu trennen, bevor man auf Produkte schaut:

- **Die Lizenz.** Sie allein entscheidet, ob Sie den Code lesen, ändern und behalten dürfen, egal was mit dem Hersteller passiert. Sie ist auch das, was sich von einem Jahr aufs andere ändern kann, wie der Fall weiter unten zeigt.
- **Der Preis.** Kostenlos und quelloffen ist nicht dasselbe. Es gibt kostenlose proprietäre Software, und es gibt freie Software, für die man den Support bezahlt.
- **Der Ort der Daten.** Self-Hosting heißt, dass die Datenbank auf einer Maschine liegt, die Ihnen gehört. Das hängt nicht an der Lizenz, und es ist fast immer das, was gemeint ist, wenn jemand diese Frage stellt.

Geht es um die monatliche Rechnung, ist der Preis das Kriterium. Geht es darum, was mit den Patientenakten passiert, wenn der Anbieter die Konditionen ändert, sind es Lizenz und Self-Hosting.

## Die quelloffenen Alternativen, die es heute gibt

- **Apexo.** Beschreibt sich selbst als "an open-source, offline-first dental practice manager designed for speed, privacy, and clinical precision", lizenziert unter GNU GPLv3. Es listet Terminkalender, Patientenakten, Statistiken, Synchronisation, Offline-Betrieb und automatische Backups. Als Sprachen nennt es "EN, AR, ES, PL, KU". Deutsch ist nicht dabei, und von BEMA, GOZ oder E-Rechnung ist auf den abgerufenen Seiten keine Rede.
- **OpenMolar.** GPLv3, aus der Hand eines schottischen Zahnarztes, und das einzige Projekt dieser Liste, das seinen Zustand selbst benennt. OpenMolar1 sei "no longer utilised in practice, although development continues as a hobby project", OpenMolar2 "effectively a dead project as it has not been ported to Python3 or Qt5". Der Copyright-Vermerk endet bei 2020. Zum Lesen taugt der Code, als Praxissoftware nicht.
- **Open Dental.** Jahrelang die Antwort auf diese Frage, und heute nicht mehr. Es bleibt ein ernstzunehmendes Produkt und eines der ganz wenigen der Branche, die ihren Preis veröffentlichen: "$199 per month per location or office (12 month contract)" für alle Rechner eines Standorts und bis zu drei Zahnärzte, inklusive Telefonsupport und aller Releases. Von Deutschland oder einer deutschen Oberfläche ist auf der Bestellseite nicht die Rede.
- **GNU Health.** Freie Software für das Gesundheitswesen, die sich selbst als "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics" beschreibt. Auf den abgerufenen Seiten beschreibt sie keine zahnärztliche Praxisverwaltung, taugt also als Ersatz nicht, so richtig die Lizenz auch ist.
- **Dentalpin.** Unseres, deshalb steht es in einem eigenen Abschnitt und in der Tabelle, wo es sich Zeile für Zeile prüfen lässt.

> **"In version 24.4, the Open Dental license changed from open source GPL to proprietary."** Das ist Open Dentals eigener Satz auf der eigenen Lizenzseite. Sie fügen hinzu, der Wechsel habe die Kunden nicht betroffen ("There was no change in price, support, database access, or how the software was used") und nur die wenigen Programmierer, die den Quellcode selbst kompilierten. Das Produkt ist gut. Eine quelloffene Alternative ist es nicht mehr.

## Was Dentalpin ist

Eine Praxisverwaltung unter der Business Source License 1.1, die vier Jahre nach jedem Release automatisch in Apache 2.0 übergeht. Sie laden den Code, installieren ihn mit einem `docker compose` auf Ihrem Server und zahlen keine Lizenz pro Behandlungsstuhl, pro Behandler oder pro Patient.

Klinisch ist der Umfang vollständig: Terminkalender, Patientenstamm, Zahnschema, Parodontalstatus, Patientenakte, Behandlungspläne, Kostenvoranschläge, Rechnungen, Zahlungen, Recall und Auswertungen. Dazu ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche, mit den Rechten des angemeldeten Benutzers und einer Rückfrage vor jedem Schreibvorgang. Pläne gibt es nicht, die Module sind alle drin.

Was es in Deutschland heute **nicht** gibt, gehört hierhin und nicht ans Ende: keine KZV-Abrechnung nach BEMA oder GOZ, keine Eignungsfeststellung der KZBV, keine Anbindung an die Telematikinfrastruktur, kein Einlesen der elektronischen Gesundheitskarte, und die Oberfläche gibt es auf Englisch und Spanisch, nicht auf Deutsch.

Es ist ein Produkt von 2026, und man sieht es. Das zählt, und in der Tabelle steht es.

![Parodontalstatus in Dentalpin mit den sechs Messstellen je Zahn](/screenshots/periodontogram.png)

*Der Parodontalstatus erfasst sechs Messstellen je Zahn und schreibt jede Sitzung fort.*

## Nebeneinander

Nur überprüfbare Zeilen. Wo es keine öffentliche Angabe gibt, steht das da.

| | Dampsoft | Dentalpin |
|---|---|---|
| Lizenz | Kommerziell | Open Source (BSL 1.1 → Apache 2.0 nach 4 Jahren) |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |
| Veröffentlichter Preis | ✗ Keiner, `/preise/` liefert 404 | ✓ 0 €, alles inbegriffen |
| Eignungsfeststellung der KZBV | ✓ DS-Win und DS4 auf der Herstellerliste | ✗ Nicht vorhanden |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion der Praxisverwaltung | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ Eigenes Produkt, e-connect | ✗ Nicht vorhanden |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, Englisch und Spanisch |
| Betriebsart | ✓ On-Premise (DS-WIN) und webbasiert (DS4) | ✓ Self-Hosting, wo Sie wollen |
| Jahre am Markt | ✓ Seit 1986 | ✗ Seit 2026 |
| Kundenzahl | ✓ "+ 12.500 zufriedene Kunden" | ✗ Sehr wenige bisher |
| Support | ✓ "mehr als 450 Mitarbeiter in ganz Deutschland" | ✗ Community in GitHub Discussions |
| Öffentliche API | ~ Auf dampsoft.de nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |

Die Zeile "auf dampsoft.de nicht beschrieben" heißt genau das und nichts weiter: Auf den öffentlichen Seiten haben wir keine API-Dokumentation gefunden. Ob es eine für Kunden gibt, wissen wir nicht.

Die sechs grünen Zeilen in der Mitte gehören ihnen, und es gibt keine ehrliche Art, sie kleinzuschreiben.

## Wählen Sie Dampsoft, wenn

- **Sie mit der KZV abrechnen.** Das ist kein Randthema, sondern die halbe Software einer deutschen Praxis, und ohne Eignungsfeststellung ersetzt sie niemand.
- **Sie an der Telematikinfrastruktur hängen müssen.** Dampsoft verkauft dafür ein eigenes Produkt. Bei den quelloffenen Optionen dieser Seite gibt es dafür nichts.
- **Ihr Team eine deutschsprachige Oberfläche braucht.** Unsere ist es nicht, und Apexos auch nicht.
- **Sie jemanden am Telefon wollen, der für die Software geradesteht.** 450 Mitarbeiter sind ein Unterschied, den keine Lizenz ausgleicht.
- **Sie On-Premise wollen, ohne selbst zu betreiben.** DS-WIN läuft bei Ihnen, zuständig bleibt der Hersteller. Self-Hosting heißt, dass Backups und Updates Ihre Sache sind.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei Dampsoft zu bleiben.

## Wählen Sie eine quelloffene Alternative, wenn

- **Sie außerhalb der vertragszahnärztlichen Abrechnung arbeiten.** Reine Privatpraxen, Praxislabore und Praxen, deren Abrechnung ohnehin außerhalb der Praxissoftware läuft, verlieren den entscheidenden Punkt gar nicht erst.
- **Ihnen wichtig ist, was in fünf Jahren mit Ihren Daten passiert.** Die Lizenz ist das Einzige, was Ihnen den Code erhält, und der Fall Open Dental zeigt, dass Lizenzen sich ändern.
- **Sie die Software prüfen lassen wollen**, die Patientenakten speichert, durch sich selbst oder jemanden Ihres Vertrauens.
- **Die Rechnung mit der Praxis wächst und das nicht aufgeht.** Ein zusätzlicher Behandlungsstuhl sollte den Monatsbeitrag nicht erhöhen.
- **Sie gegen eine API integrieren wollen** statt gegen ein geschlossenes Modul.

Unter den lebenden Dentalprojekten passt Apexo besser, wenn Sie etwas Minimales und Offlinefähiges für eine kleine Praxis suchen, und Dentalpin, wenn Sie den vollständigen klinischen Zyklus mit Parodontalstatus und Behandlungsplänen brauchen. Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

![Auswertungen in Dentalpin mit Kennzahlen der Praxis und den Auswertungen zur Auswahl](/screenshots/reports.png)

*Die Auswertungen der Praxis. Sie laufen auf der Datenbank, die auf Ihrem eigenen Server liegt.*

## Was die KZBV selbst zu fragen empfiehlt

Der nützlichste Teil dieses Themas kommt nicht von uns und auch nicht von einem Hersteller. Die KZBV hat eine Checkliste für die PVS-Wahl veröffentlicht, und sie stellt genau die Fragen, die sonst erst beim Wechsel gestellt werden. Sie gelten für jedes System, auch für unseres:

1. **Liegt die Datenhoheit bei Ihnen?** Die Checkliste verlangt, dass die "Datenhoheit über sämtliche im Rahmen der Nutzung des PVS verarbeiteten Praxisdaten ausschließlich bei der Vertragszahnärztin/dem Vertragszahnarzt liegt".
2. **Gibt es ein definiertes Ausstiegsverfahren** für den Systemwechsel, und wird die Systemwechselschnittstelle der KZBV unterstützt?
3. **Ist die "vollständige Mitnahme von Patienten-, Abrechnungs- und Dokumentationsdaten möglich"**, und in welchem Format werden sie bereitgestellt?
4. **Was kostet der Export**, und in welcher Frist wird er geliefert? Beides gehört vor die Unterschrift, nicht in die Kündigung.
5. **Bleiben archivierte Daten "auch ohne aktiven Vertrag mit dem PVS-Hersteller" zugänglich?** Das ist die Frage, an der ein Wechsel Jahre später noch scheitert.
6. **Sind Mindestlaufzeit, Verlängerung und Kündigung "beidseitig fair und transparent"**, und erwerben Sie eine Lizenz oder abonnieren Sie einen Dienst?

Bei Open Source beantwortet die Lizenz die Punkte 1, 5 und 6 von selbst. Die Punkte 2 bis 4 muss man trotzdem stellen, denn eine offene Lizenz ersetzt kein Exportformat.

## Wie ein Wechsel wirklich abliefe

1. **Fordern Sie den vollständigen Export bei Ihrem jetzigen Anbieter an**, bevor Sie irgendetwas kündigen: Patienten, Behandlungshistorie, Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Bilder und den Behandlungskatalog. Schriftlich, und schauen Sie sich das Format an, das ankommt.
2. **Klären Sie die Abrechnung zuerst.** Wenn Sie mit der KZV abrechnen, entscheiden Sie vor allem anderen, womit das künftig passiert. Alles andere ist danach eine Detailfrage.
3. **Installieren Sie in einer Testumgebung**, nicht auf dem System, mit dem Sie später arbeiten wollen. Das steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/).
4. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen und Beispielzeilen, bevor es irgendetwas in die Datenbank schreibt.
5. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 Ähnlichkeit liegt, wird als Block übernommen, über den Rest entscheiden Sie.
6. **Vergleichen Sie die Zahlen** beider Systeme: Patienten, Rechnungen, künftige Termine. Wenn sie nicht stimmen, ist das jetzt ein Problem und nicht in sechs Monaten.
7. **Lassen Sie das alte System schreibgeschützt laufen**, bis Sie sicher sind. Der ganze Ablauf steht im [Leitfaden zum Softwarewechsel](/de/blog/zahnarztsoftware-wechseln/).

> **Schritt 5 ist die Stelle, an der Migrationen scheitern.** Zwei Praxen kodieren ihre Leistungen nie gleich, und eine stillschweigend geratene Entsprechung erzeugt falsche Rechnungen, die monatelang niemand bemerkt.

## Quellen

Alle am 18. August 2026 abgerufen.

- Dampsoft, Startseite: Selbstbeschreibung "Deutschlands führender Anbieter für Zahnarzt-Software", "+ 12.500 zufriedene Kunden", "Seit 1986", "mehr als 450 Mitarbeiter in ganz Deutschland": [dampsoft.de](https://www.dampsoft.de/)
- Dampsoft, Produktübersicht mit DS-WIN, DS4, e-connect, AIVA und ATHENA: [dampsoft.de/produkte](https://www.dampsoft.de/produkte/)
- Dampsoft, Unternehmensseite mit 40. Jubiläum und Verweis auf die EDV-Statistik 2025 der KZBV: [dampsoft.de/unternehmen](https://www.dampsoft.de/unternehmen/)
- `dampsoft.de/preise/` lieferte HTTP 404. Es gibt dort keine veröffentlichten Preise.
- KZBV, Herstellerliste und EDV-Statistik, mit dem Satz, dass die Auflistung nur kommerzielle PVS mit Eignungsfeststellung enthält: [kzbv.de](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/herstellerliste-und-edv-statistik/)
- KZBV, Programmmodule, zur Rolle der Abrechnungsmodule im PVS: [kzbv.de](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/programmmodule/)
- KZBV, Checkliste für die PVS-Wahl, zu Eignungsfeststellung, Datenhoheit, Systemwechselschnittstelle und Vertragsbedingungen: [kzbv.de](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/checkliste-fuer-die-pvs-wahl/)
- Apexo, Lizenz GPLv3, Offline-first-Ausrichtung, Funktionen und Sprachen: [apexo.app](https://apexo.app/)
- OpenMolar, Lizenz GPLv3 und der erklärte Zustand beider Projektzweige: [openmolar.com](https://openmolar.com/)
- Open Dental, Lizenzwechsel in Version 24.4: [opendental.com/site/license.html](https://www.opendental.com/site/license.html)
- Open Dental, veröffentlichter Preis und Leistungsumfang: [opendental.com/site/order.html](https://www.opendental.com/site/order.html)
- GNU Health, Selbstbeschreibung und Zuschnitt des Projekts: [gnuhealth.org](https://www.gnuhealth.org/)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei einem der genannten Produkte etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde. Das gilt auch, wenn Sie von Dampsoft, Apexo oder Open Dental sind.
