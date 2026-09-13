---
title: "GOZ und BEMA: was die Abrechnung von der Software braucht"
description: "BEMA geht papierlos an die KZV, GOZ als Rechnung an den Patienten. Was beide Wege von der Praxissoftware verlangen, mit den Quellen von KZBV und Gesetz."
pubDate: 2026-09-13
tags: [goz, bema, abrechnung, praxissoftware, deutschland]
---

Eine deutsche Zahnarztpraxis rechnet in zwei Systemen gleichzeitig ab: BEMA-Leistungen gehen papierlos an die Kassenzahnärztliche Vereinigung, GOZ-Leistungen als Rechnung an die Zahlungspflichtigen. Daraus folgen drei Anforderungen an die Praxisverwaltungssoftware, die es in keiner anderen Branche gibt. Jede Leistung braucht Zahnbezug und Befund. Zwei Gebührenordnungen laufen am selben Behandlungsfall nebeneinander. Und der Heil- und Kostenplan geht seit 2023 elektronisch an die Krankenkasse.

Das ist die Antwort. Der Rest dieses Beitrags zeigt, welche Pflichtangabe aus welcher Vorschrift kommt, welche Module die KZBV vorschreibt und woran ein Systemwechsel scheitert.

Dies ist keine Rechtsberatung. Alle Angaben stammen aus den unten verlinkten amtlichen Quellen und den Veröffentlichungen der KZBV, konsultiert am 13. September 2026.

## Zwei Wege, ein Behandlungsfall

Der Einheitliche Bewertungsmaßstab für zahnärztliche Leistungen wird nach § 87 Abs. 1 Satz 1 SGB V von der Kassenzahnärztlichen Bundesvereinigung und dem Spitzenverband Bund der Krankenkassen als Bestandteil der Bundesmantelverträge vereinbart. Er bestimmt, so § 87 Abs. 2 SGB V, den Inhalt der abrechnungsfähigen Leistungen "und ihr wertmäßiges, in Punkten ausgedrücktes Verhältnis zueinander".

Die Gebührenordnung für Zahnärzte ist dagegen eine Bundesverordnung mit einem im Text festgeschriebenen Preis. Was daraus praktisch folgt, steht in der Tabelle.

| | BEMA | GOZ |
|---|---|---|
| Gilt für | Gesetzlich Versicherte | Privat Versicherte und private Leistungen bei gesetzlich Versicherten |
| Rechtsgrundlage | § 87 Abs. 1 SGB V, festgelegt im Bewertungsausschuss | Gebührenordnung für Zahnärzte |
| Punktwert | ~ Regional zwischen KZV und Kassen vereinbart | ✓ Bundesweit fest, 5,62421 Cent |
| Steigerungsfaktor | Nicht vorgesehen | Ein- bis Dreieinhalbfaches des Gebührensatzes |
| Empfänger der Abrechnung | Die Kassenzahnärztliche Vereinigung | Die Zahlungspflichtigen |
| Form der Übermittlung | ✗ Nur papierlos, mit den Abrechnungsmodulen der KZBV | ✓ Rechnung nach Anlage 2 GOZ aus der eigenen Software |
| Genehmigung vor Behandlungsbeginn | ✗ Bei Zahnersatz, Kieferorthopädie und Kieferbruch über das EBZ | ✓ Keine |
| Pflichtangabe je Position | Zahnbezug und Befund, § 295 Abs. 1 SGB V | Datum, Nummer, Zahn, Betrag, Steigerungssatz, § 10 Abs. 2 GOZ |

> **Der GOZ-Punktwert steht in der Verordnung selbst.** § 5 Abs. 1 Satz 3 GOZ: "Der Punktwert beträgt 5,62421 Cent." § 2 Abs. 1 Satz 2 verbietet ausdrücklich, mit den Zahlungspflichtigen eine abweichende Punktzahl oder einen abweichenden Punktwert zu vereinbaren. Verhandelbar ist allein der Steigerungsfaktor, und auch der nur innerhalb des Rahmens aus § 5.

## Zahnbezug und Befund sind keine Kür

§ 295 Abs. 1 Satz 1 Nr. 2 SGB V verlangt, in den Abrechnungsunterlagen die erbrachten Leistungen einschließlich des Tages aufzuzeichnen und zu übermitteln, "bei ärztlicher Behandlung mit Diagnosen, bei zahnärztlicher Behandlung mit Zahnbezug und Befunden". Dieselbe Formulierung taucht in Absatz 2 wieder auf, für die Daten, welche die Vereinigungen quartalsweise an die Krankenkassen weitergeben.

Das ist die Stelle, an der ein allgemeines Praxis- oder Terminprogramm ausfällt. Eine Rechnungszeile mit Betrag und Datum genügt nicht, wenn der Zahn fehlt.

Für die private Seite steht die gleiche Anforderung in § 10 Abs. 2 Nr. 2 GOZ, nur ausführlicher: Nummer und Bezeichnung der einzelnen berechneten Leistung "einschließlich einer verständlichen Bezeichnung des behandelten Zahnes" und einer gegebenenfalls genannten Mindestdauer, dazu Betrag und Steigerungssatz.

![Patientenakte mit Zahnschema, klinischen Warnhinweisen, laufendem Behandlungsplan und nächstem Termin](/screenshots/dental-chart.png)

*Ein Zahnschema mit dem Befund je Zahn. Beide Gebührenordnungen knüpfen ihre Pflichtangaben an genau diese Zuordnung von Leistung zu Zahn.*

## Was auf jeder GOZ-Rechnung stehen muss

Nach § 10 Abs. 1 GOZ wird die Vergütung erst fällig, wenn eine der Verordnung entsprechende Rechnung nach Anlage 2 erteilt worden ist. Eine unvollständige Rechnung ist also nicht nur formal falsch, sie macht die Forderung nicht fällig.

§ 10 Abs. 2 GOZ zählt auf, was die Rechnung "insbesondere" enthalten muss:

- **Das Datum der Erbringung der Leistung**, nicht das Datum der Rechnungsstellung.
- **Nummer und Bezeichnung jeder Leistung**, mit verständlicher Bezeichnung des behandelten Zahnes sowie Betrag und Steigerungssatz.
- **Bei Auslagen nach § 9** Art, Umfang und Ausführung der einzelnen Leistungen und deren Preise, dazu die direkt zurechenbaren Materialien mit Preis, "insbesondere Bezeichnung, Gewicht und Tagespreis der verwendeten Legierungen".
- **Bei gesondert berechnungsfähigen Kosten** Art, Menge und Preis der verwendeten Materialien.
- **Bei Entschädigungen nach § 8** den Betrag, die Art der Entschädigung und die Berechnung.

Dazu kommen drei Pflichten, die eine Software entweder erzwingt oder die im Alltag untergehen.

> **Über dem 2,3fachen Satz verlangt § 10 Abs. 3 GOZ eine schriftliche Begründung.** Sie muss "auf die einzelne Leistung bezogen" und für die Zahlungspflichtigen verständlich und nachvollziehbar sein. Ein Textbaustein, der pauschal unter der Rechnung steht, erfüllt das nicht, weil er nicht auf die einzelne Leistung bezogen ist.

Die zweite: Wird eine nicht im Gebührenverzeichnis enthaltene Leistung nach § 6 Abs. 1 GOZ analog berechnet, muss die herangezogene Leistung verständlich beschrieben und nach § 10 Abs. 4 GOZ mit dem Hinweis "entsprechend" sowie Nummer und Bezeichnung der als gleichwertig erachteten Leistung versehen werden.

Die dritte betrifft das Labor. Wurden zahntechnische Leistungen in Auftrag gegeben, ist nach § 10 Abs. 3 GOZ eine entsprechende Rechnung des Dentallabors beizufügen; in der Zahnarztrechnung selbst genügt dann der Gesamtbetrag.

Und vor der Behandlung greift § 9 Abs. 2 GOZ: Übersteigen die voraussichtlichen Kosten für zahntechnische Leistungen insgesamt 1.000 Euro, ist ein Kostenvoranschlag des Labors anzubieten und auf Verlangen in Textform vorzulegen. Zeichnet sich eine Überschreitung um mehr als 15 vom Hundert ab, sind die Zahlungspflichtigen unverzüglich in Textform zu unterrichten.

## Die KZV-Abrechnung läuft nur über Module der KZBV

Hier endet der Spielraum bei der Softwarewahl, und das ist der Punkt, den Praxen beim Vergleich am häufigsten übersehen.

> **Seit 2012 müssen alle Praxen papierlos mit ihrer KZV abrechnen.** Die KZBV schreibt dazu: sie "entwickelte die notwendigen Abrechnungsmodule für die Praxisverwaltungssoftware und stellt sie allen Herstellern von Praxisverwaltungssoftware (PVS) zur Verfügung". Und weiter: "Jeder PVS-Hersteller, der ein Abrechnungsprogramm für konservierend-chirurgische Leistungen anbietet, ist verpflichtet, darin auch die Abrechnungssoftware für die übrigen Leistungsbereiche einzuarbeiten."

Die Module haben Versionen und feste Gültigkeitszeiträume. Wer ein Update verpasst, reicht eine Abrechnung ein, die das Sendemodul nicht mehr annimmt. Stand der Übersicht auf der KZBV-Seite ist der 11. September 2026:

| Modul | Aktuelle Version | Nachfolger |
|---|---|---|
| Knr12-Modul | 5.7 bis 09/2026 | 5.8 ab 10/2026 |
| KCH-Abrechnungsmodul | 6.7 bis III/2026 | 6.8 ab IV/2026 |
| KBR-Abrechnungsmodul | 6.2 bis 09/2026 | 6.3 ab 10/2026 |
| KFO-Abrechnungsmodul | 7.0 bis III/2026 | 7.1 ab IV/2026 |
| PAR-Abrechnungsmodul | 5.6 bis 09/2026 | 5.7 ab 10/2026 |
| ZE-Abrechnungsmodul | 7.6 bis 09/2026 | 7.7 ab 10/2026 |
| Sendemodul für KCH, KBR, KFO, PAR und ZE | 3.5 bis 09/2026 | 3.6 ab 10/2026 |

Auch die Laborrechnung ist Teil des Datenstroms. KZBV und der Verband Deutscher Zahntechniker-Innungen haben sich auf eine Datensatzbeschreibung verständigt, die eine einheitliche Übermittlung der Abrechnungsdaten im XML-Format vom Labor an die Praxis gewährleistet.

Wichtig für die Bewertung eines Angebots: Das Eignungsfeststellungsverfahren der KZBV sagt weniger, als sein Name vermuten lässt. Die KZBV schreibt selbst, damit werde "nur bestätigt, dass die aktuellen vertraglichen Vorgaben zur Abrechnung (Anlage 1 zum BMV-Z) erfüllt werden". Über Datenexport, Vertragslaufzeit oder Archivierung sagt es nichts.

## Zahnersatz: elektronisch beantragt, dann erst behandelt

§ 87 Abs. 1a SGB V verlangt vom Vertragszahnarzt, vor Beginn der Behandlung einen kostenfreien Heil- und Kostenplan zu erstellen, "der den Befund, die Regelversorgung und die tatsächlich geplante Versorgung ... nach Art, Umfang und Kosten beinhaltet". Im Heil- und Kostenplan sind außerdem Angaben zum Herstellungsort des Zahnersatzes zu machen.

Seit dem 1. Januar 2023 ist das Elektronische Beantragungs- und Genehmigungsverfahren verpflichtend. Die KZBV beziffert den Stand auf rund 29 Millionen versendete EBZ-Anträge. Der Ablauf, wie die KZBV ihn beschreibt:

1. **Heil- und Kostenplan elektronisch vorbereiten.** Befund, Regelversorgung, geplante Therapie und voraussichtliche Gesamtkosten.
2. **Zusammenfassung aushändigen und unterschreiben lassen.** Die Patientin oder der Patient erhält das ausgedruckte Formular "Informationen zu Ihrem Zahnersatz" mit dem voraussichtlichen Festzuschuss inklusive Bonus. Erst nach dieser Einwilligung geht der Plan an die Kasse.
3. **Genehmigung abwarten.** Die Krankenkasse prüft, bewilligt und setzt den Festzuschuss fest. Leitet sie ein Gutachterverfahren ein, kann sich die Frist auf bis zu sechs Wochen verlängern.
4. **Behandeln.** Begonnen wird grundsätzlich erst nach der Festsetzung, Ausnahme sind akute Reparaturen. Die Zusage gilt ein halbes Jahr, in dieser Zeit muss der Zahnersatz eingegliedert sein.
5. **Abrechnen.** Ändert sich der Plan währenddessen, muss er der Kasse erneut vorgelegt werden.

Die Höhe des Zuschusses regelt § 55 Abs. 1 SGB V: 60 Prozent der festgesetzten Beträge für die jeweilige Regelversorgung, 70 Prozent "für eigene Bemühungen zur Gesunderhaltung der Zähne", nachgewiesen über die Untersuchungen der letzten fünf Jahre, und 75 Prozent, wenn diese Untersuchungen in den letzten zehn Kalenderjahren ohne Unterbrechung in Anspruch genommen wurden. Wer unzumutbar belastet würde, erhält nach § 55 Abs. 2 SGB V zusätzlich einen Betrag in Höhe von 40 Prozent. Der Gemeinsame Bundesausschuss hat die Festzuschussbeträge mit Wirkung zum 1. Januar 2026 angepasst.

![Kostenvoranschlag mit den geplanten Behandlungen, Summen, Gültigkeitsdauer und dem verknüpften Behandlungsplan](/screenshots/budgets.png)

*Ein Kostenvoranschlag mit Positionen, Summen und Gültigkeitsdatum. Beim gesetzlich versicherten Zahnersatz entscheidet nicht dieses Dokument über den Zuschuss, sondern der genehmigte Heil- und Kostenplan.*

Bei der Rechnungslegung kommt eine Pflicht dazu, die leicht untergeht: Nach § 87 Abs. 1a SGB V ist eine Durchschrift der Rechnung des gewerblichen oder praxiseigenen Labors beizufügen, dazu die Erklärung nach Anhang XIII Abschnitt 1 der Verordnung (EU) 2017/745 in der jeweils geltenden Fassung. Beides gehört damit in dieselbe Akte wie der Plan, und beides muss auffindbar bleiben, solange die Aufbewahrungsfristen laufen.

## Woran ein Systemwechsel scheitert

Die KZBV hat für die Wahl eines Praxisverwaltungssystems eine eigene Checkliste veröffentlicht, und ihr Schwerpunkt liegt nicht auf Funktionen, sondern auf dem Ausgang. Die Fragen, die dort stehen, sind vor jeder Unterschrift die richtigen:

- **Liegt die Datenhoheit über sämtliche Patienten-, Abrechnungs- und Dokumentationsdaten ausschließlich bei der Praxis**, und zwar für die Dauer der Aufbewahrungs- und Verjährungsfristen?
- **Ist vertraglich geregelt, in welchem Format die Daten bereitgestellt werden**, und gibt es jederzeit die Möglichkeit, eine vollständige Datenkopie zu exportieren?
- **Unterstützt das System die KZBV-Systemwechselschnittstelle**, und fallen Kosten für Import oder Export an?
- **Bleiben archivierte Daten auch ohne aktiven Vertrag zugänglich**, und wie lange bleiben sie nach Vertragsende verfügbar?
- **Ist geregelt, was bei Praxisaufgabe, Übergabe oder Produktende des Herstellers passiert?**

Der Grund für diese Fragen sind die Fristen. Sie überdauern fast jeden Softwarevertrag.

| Unterlage | Frist | Grundlage |
|---|---|---|
| Behandlungsakte | 10 Jahre nach Abschluss der Behandlung | § 630f Abs. 3 BGB |
| Röntgenbilder und digitale Bilddaten einer Behandlung | 30 Jahre | § 85 Abs. 2 Nr. 1 StrlSchG |
| Röntgenbilder einer Untersuchung, volljährige Person | 10 Jahre | § 85 Abs. 2 Nr. 2 Buchst. a StrlSchG |
| Röntgenbilder einer Untersuchung, minderjährige Person | Bis zur Vollendung des 28. Lebensjahres | § 85 Abs. 2 Nr. 2 Buchst. b StrlSchG |

Die KZBV verweist in ihrer Checkliste zusätzlich auf § 8 Abs. 3 BMV-Z und auf die Verjährungsfrist nach § 197 Abs. 1 Nr. 1 BGB. Für die Dokumentationspflicht selbst gilt § 630f Abs. 1 BGB: Berichtigungen und Änderungen sind nur zulässig, wenn neben dem ursprünglichen Inhalt erkennbar bleibt, wann sie vorgenommen wurden, und das ist "auch für elektronisch geführte Behandlungsakten sicherzustellen". Eine Software, die einen Eintrag stillschweigend überschreibt, verstößt gegen diesen Satz.

## Was das für die Softwarewahl heißt

Zwei Ebenen sollten Sie getrennt beurteilen, weil sie unterschiedlich austauschbar sind.

Die KZV-Abrechnung ist vorgegeben. Wer gesetzlich Versicherte behandelt, braucht ein System mit den Abrechnungsmodulen der KZBV und mit EBZ-Anbindung, und dabei bleibt es, solange die Module auf diesem Weg verteilt werden. Dort zu vergleichen lohnt sich bei Preis, Support und Vertragsbedingungen, nicht bei der Frage, ob die Abrechnung enthalten ist.

Die Dokumentation ist es nicht. Zahnschema, Befunde, Behandlungsplanung, Kostenvoranschläge und die Nachweise, die zehn oder dreißig Jahre lesbar bleiben müssen, hängen nicht am Abrechnungsmodul. Genau dort entscheidet sich, ob Sie Ihre Daten bei einem Wechsel mitnehmen können.

Dentalpin rechnet in Deutschland heute weder nach BEMA mit der KZV ab noch nach GOZ, es ist nicht an die Telematikinfrastruktur angebunden, liest keine elektronische Gesundheitskarte und hat keine deutsche Oberfläche. Für eine Praxis mit gesetzlich Versicherten ist es damit kein Ersatz für das Praxisverwaltungssystem. Was es gibt, ist eine Datenbank auf Ihrem eigenen Server, Dokumentation mit Zahnschema und Parodontalstatus und ein Export ohne Lizenzschranke, also die Antwort auf die Exportfragen der KZBV-Checkliste. Die Bedingungen stehen auf [der Preisseite](/de/preise/).

## Quellen

Alle konsultiert am 13. September 2026.

- [§ 2 GOZ, Abweichende Vereinbarung](https://www.gesetze-im-internet.de/goz_1987/__2.html), gesetze-im-internet.de. Absatz 1 zum Verbot abweichender Punktzahlen und Punktwerte, Absatz 2 zur Schriftform vor Erbringung der Leistung.
- [§ 5 GOZ, Bemessung der Gebühren](https://www.gesetze-im-internet.de/goz_1987/__5.html), gesetze-im-internet.de. Absatz 1 zum Punktwert von 5,62421 Cent und zum Rahmen vom Einfachen bis Dreieinhalbfachen, Absatz 2 zum 2,3fachen Satz als Durchschnittsfall.
- [§ 6 GOZ, Gebühren für andere Leistungen](https://www.gesetze-im-internet.de/goz_1987/__6.html), gesetze-im-internet.de. Absatz 1 zur analogen Berechnung.
- [§ 9 GOZ, Ersatz von Auslagen für zahntechnische Leistungen](https://www.gesetze-im-internet.de/goz_1987/__9.html), gesetze-im-internet.de. Absatz 2 zur Schwelle von 1.000 Euro und zur Unterrichtung bei mehr als 15 vom Hundert.
- [§ 10 GOZ, Fälligkeit und Abrechnung der Vergütung](https://www.gesetze-im-internet.de/goz_1987/__10.html), gesetze-im-internet.de. Absatz 1 zur Fälligkeit, Absatz 2 zu den Pflichtangaben, Absatz 3 zur Begründung über dem 2,3fachen Satz und zur Laborrechnung, Absatz 4 zum Hinweis "entsprechend".
- [§ 55 SGB V, Leistungsanspruch bei Zahnersatz](https://www.gesetze-im-internet.de/sgb_5/__55.html), gesetze-im-internet.de. Absatz 1 zu 60, 70 und 75 Prozent, Absatz 2 zur unzumutbaren Belastung.
- [§ 87 SGB V, Bundesmantelvertrag, einheitlicher Bewertungsmaßstab](https://www.gesetze-im-internet.de/sgb_5/__87.html), gesetze-im-internet.de. Absatz 1 zum Bewertungsmaßstab, Absatz 1a zum Heil- und Kostenplan, zum Herstellungsort und zur Erklärung nach Anhang XIII der Verordnung (EU) 2017/745, Absatz 2 zur Bewertung in Punkten.
- [§ 295 SGB V, Abrechnung ärztlicher Leistungen](https://www.gesetze-im-internet.de/sgb_5/__295.html), gesetze-im-internet.de. Absatz 1 Satz 1 Nummer 2 zu Zahnbezug und Befunden.
- [§ 630f BGB, Dokumentation der Behandlung](https://www.gesetze-im-internet.de/bgb/__630f.html), gesetze-im-internet.de. Absatz 1 zur Nachvollziehbarkeit von Änderungen, Absatz 3 zur Zehnjahresfrist.
- [§ 85 StrlSchG, Aufzeichnungspflichten und Aufbewahrung](https://www.gesetze-im-internet.de/strlschg/__85.html), gesetze-im-internet.de. Absatz 2 zu den Fristen von 30 und 10 Jahren und zur Frist bei minderjährigen Personen.
- [Papierlose Abrechnung](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/papierlose-abrechnung/), KZBV. Pflicht seit 2012, Verteilung der Abrechnungsmodule an die PVS-Hersteller, XML-Datensatz für Laborabrechnungsdaten mit dem VDZI.
- [Programmmodule](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/programmmodule/), KZBV, Stand 11. September 2026. Versionen und Gültigkeitszeiträume der Abrechnungs- und Sendemodule.
- [Checkliste für die PVS-Wahl](https://www.kzbv.de/zahnaerzte/digitales/praxissoftware/checkliste-fuer-die-pvs-wahl/), KZBV. Aussagekraft des Eignungsfeststellungsverfahrens, Datenhoheit, Systemwechselschnittstelle, Archivierung und die genannten Aufbewahrungsfristen.
- [Elektronisches Beantragungs- und Genehmigungsverfahren (EBZ)](https://www.kzbv.de/zahnaerzte/digitales/elektronisches-beantragungs-und-genehmigungsverfahren/), KZBV. Verpflichtende Nutzung seit 1. Januar 2023 und die Zahl der versendeten Anträge.
- [Zahnersatz: Antrag bis Abrechnung](https://www.kzbv.de/patienten/patient-und-krankenkasse/zahnersatz/zahnersatz-antrag-bis-abrechnung/), KZBV. Ablauf des elektronischen Heil- und Kostenplans, Formular "Informationen zu Ihrem Zahnersatz", Gutachterverfahren mit bis zu sechs Wochen, Geltungsdauer der Zusage von einem halben Jahr.
- [Festzuschüsse](https://www.kzbv.de/zahnaerzte/rechtsgrundlagen/festzuschuesse/), KZBV. Anpassung der Festzuschussbeträge durch den Gemeinsamen Bundesausschuss zum 1. Januar 2026.
- [BEMA und GOZ](https://www.kzbv.de/zahnaerzte/rechtsgrundlagen/bema-und-goz/), KZBV. Der Bewertungsmaßstab als Grundlage der Abrechnung mit der gesetzlichen Krankenversicherung.
