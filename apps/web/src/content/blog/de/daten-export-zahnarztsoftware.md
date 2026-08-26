---
title: "Daten aus der Zahnarztsoftware exportieren: das Format, auf dem Sie bestehen sollten"
description: "Welchen Export Sie vor der Unterschrift verlangen sollten: die vier Datenblöcke, die Formate, die wirklich tragen, und wie Sie ihn jährlich prüfen."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [datenexport, migration, vertrag, dsgvo, patientenakte]
---

Verlangen Sie einen vollständigen Export in offenen Formaten: die Datenbank als CSV je Tabelle oder als vollständigen SQL-Dump, Dokumente und Bilder als Originaldateien (PDF, JPG, DICOM) und ein Verzeichnis, das jede Datei ihrem Patienten zuordnet. Lassen Sie das in den Vertrag schreiben, mit Frist, kostenfrei und von Ihnen selbst auslösbar. Und öffnen Sie den Export einmal im Jahr, denn ein Export, den Sie nie geöffnet haben, ist kein Ausweg, sondern ein Versprechen.

Das Format entscheidet allein darüber, ob das in sechs Jahren noch eine Patientenakte ist oder ein Ordner voller Dateien, den niemand mehr lesen kann.

## Ein Export ist keine Datensicherung

Das sind zwei verschiedene Dinge, und fast jedes Verkaufsgespräch vermischt sie. Eine Datensicherung stellt das System so wieder her, wie es war, innerhalb derselben Software. Ein Export erlaubt Ihnen, Ihre Daten ohne diese Software zu lesen.

Die Probe ist einfach. Wenn Ihr Anbieter heute Nacht verschwände, würde Ihnen die Sicherung helfen? Wenn nur seine Software die Datei öffnet, lautet die Antwort nein.

> **Die Frage ist nicht "machen Sie Backups?", sondern "was kann ich ohne Sie öffnen?".** Die erste bejaht jeder. Die zweite teilt Anbieter in zwei sehr unterschiedliche Gruppen.

Sie brauchen beides. Die Sicherung ist für die Festplatte, die an einem Dienstag ausfällt. Der Export ist für den Tag des Softwarewechsels, für den Tag, an dem der Anbieter schließt, und für den Tag, an dem jemand eine Akte von vor acht Jahren verlangt.

## Das Recht gibt Ihnen das Gesetz, das Format nicht

Beim Kauf einer Praxisverwaltungssoftware sind Sie der Verantwortliche und der Anbieter der Auftragsverarbeiter. Artikel 28 Absatz 3 Buchstabe g DSGVO verpflichtet den Auftragsverarbeiter, nach Wahl des Verantwortlichen alle personenbezogenen Daten nach Abschluss der Erbringung der Verarbeitungsleistungen zu löschen oder zurückzugeben und vorhandene Kopien zu löschen, sofern keine gesetzliche Aufbewahrungspflicht besteht.

Dieses Recht ist real und es ist Ihres. Was der Artikel an keiner Stelle sagt: in welchem Format.

> **Ein PDF mit neunhundert Seiten erfüllt Artikel 28 Absatz 3 Buchstabe g.** Daten herauszugeben und sie in etwas Brauchbarem herauszugeben sind nicht dieselbe Pflicht, und nur die erste steht in der Verordnung. Die zweite muss in Ihrem Vertrag stehen.

Genau das ist der Unterschied zwischen einem Anbieterwechsel in zwei Wochen und einem Wechsel in sechs Monaten, während jemand Behandlungsdokumentation abtippt.

## Die Aufbewahrungspflicht überlebt den Vertrag

Hier hört das Format auf, eine technische Vorliebe zu sein. § 630f Absatz 3 BGB verpflichtet den Behandelnden, "die Behandlungsakte für die Dauer von zehn Jahren nach Abschluss der Behandlung aufzubewahren", soweit nicht nach anderen Vorschriften andere Fristen gelten.

Diese Frist endet nicht an dem Tag, an dem Sie das Abonnement kündigen. Sie läuft weiter, und geradestehen muss dafür die Praxis, nicht der Anbieter, den Sie gerade verlassen haben.

Die richtige Frage lautet also nicht "kann ich meine Daten mitnehmen?", sondern "kann ich sie in zehn Jahren lesen, auf einem Rechner, den es noch nicht gibt, ohne Lizenz für irgendetwas?". Darauf gibt es nur eine Familie von Antworten, und das sind offene Formate.

## Die vier Blöcke, die herauskommen müssen

Unvollständige Exporte scheitern fast immer an derselben Stelle. Terminkalender und Stammdaten bekommen Sie, die klinischen Daten und die Dateien bleiben drin. Verlangen Sie alle vier schriftlich.

| Block | Was herauskommen muss | Format, das trägt |
|---|---|---|
| Patienten | Kontaktdaten, Kostenträger, medizinische Warnhinweise, vorliegende Einwilligungen | CSV oder SQL, ein Datensatz je Patient mit stabiler ID |
| Klinisch | Zahnschema, Parodontalstatus, datierte und signierte Einträge, Behandlungspläne, Verordnungen | CSV oder SQL, mit Zahn, Fläche, Zustand und Datum in eigenen Feldern |
| Abrechnung | Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Zahlungen, Salden, Status | CSV oder SQL, Rechnungsnummer und Status unverändert |
| Dateien | Röntgenbilder, Fotos, PDFs, unterschriebene Einwilligungen | Die Originaldateien plus ein Verzeichnis, das sie den Patienten zuordnet |

![Patientenakte mit Zahnschema, klinischen Warnhinweisen, laufendem Behandlungsplan und nächstem Termin](/screenshots/dental-chart.png)

*Ein Zahnschema am Bildschirm: Zahn, Fläche, Zustand und Datum. Genau diese vier Felder müssen den Export überleben.*

Der vierte Block kommt am häufigsten kaputt an. Sie erhalten einen Ordner mit zwölftausend Dateien namens `IMG_0043.jpg` und keine Möglichkeit zu erkennen, wem welche gehört. Ein Verzeichnis ist eine Tabelle mit zwei Spalten, Dateiname und Patienten-ID, und ohne sie ist der Ordner wertlos.

## Formate, die tragen, und Formate, die es nicht tun

Es gibt eine einzige Regel: Können Sie es ohne das Programm öffnen, das es erzeugt hat?

| Format | Wofür | Ohne die Software lesbar? |
|---|---|---|
| CSV | Tabellen: Patienten, Termine, Rechnungen, Einträge | ✓ Jede Tabellenkalkulation, jede Sprache |
| SQL-Dump | Die ganze Datenbank samt Beziehungen | ✓ Mit installiertem PostgreSQL oder MySQL |
| JSON oder XML | Verschachtelte Strukturen, Pläne mit ihren Stufen | ✓ Lesbar und dokumentierbar |
| PDF, JPG, PNG | Unterschriebene Dokumente, klinische Fotografie | ✓ Standards, überall zu öffnen |
| DICOM | Röntgenbilder und Volumina | ✓ Internationaler Standard für medizinische Bilddaten |
| PDF als Datenauszug | Nichts. Das ist die gedruckte Akte | ✗ Ein Mensch liest es, migrieren lässt es sich nicht |
| Herstellerformat (.dat, deren .bak) | Rückspielen in die eigene Software | ✗ Nur wer es geschrieben hat, öffnet es |
| Screenshots oder Druckauswertungen | Etwas nachschlagen | ✗ Keine Daten, ein Bild von Daten |

Bei Röntgenbildern lohnt sich Deutlichkeit. DICOM ist nach Aussage der Organisation, die den Standard pflegt, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", verwaltet von der Medical Imaging & Technology Alliance, einer Division der NEMA. Wenn Ihre Software Röntgenbilder weder als DICOM noch in einem gängigen Bildformat ablegt, fragen Sie heute, wie sie herauskommen.

## Die Klauseln, die vor der Unterschrift hineingehören

Verhandelt wird das vor der Unterschrift, solange man Sie als Kunden will. Danach gibt es kein Gespräch mehr, sondern eine Preisliste.

1. **Umfang.** "Alle vom Kunden erfassten Daten und alle angehängten Dateien", nicht "Patientendaten". Die zweite Formulierung lässt die klinischen Daten still draußen.
2. **Format.** Benannt: CSV oder SQL-Dump für die Datenbank, Originaldateien für Anhänge, dazu ein Verzeichnis, das beides verbindet.
3. **Dokumentation.** Eine Beschreibung der Tabellen und Felder. Ein CSV mit vierzig Spalten namens `feld_17` ist ein Rätsel, kein Export.
4. **Selbstbedienung.** Sie lösen ihn selbst aus, aus der Software heraus, wann Sie wollen. Braucht es ein Ticket, gehört der Zeitpunkt dem Anbieter.
5. **Frist.** Ohne Selbstbedienung eine konkrete Zahl von Tagen ab Anforderung. Dreißig sind angemessen.
6. **Kosten.** Null. Eine Exportgebühr ist eine Ausstiegsmaut, und die will man vor der Unterschrift schwarz auf weiß sehen, nicht danach.
7. **Nach der Kündigung.** Wie lange Sie ihn noch herunterladen können, und eine schriftlich bestätigte Löschung auf Ihre Anforderung, die Ihnen Artikel 28 Absatz 3 Buchstabe g gerade erlaubt.
8. **Im Insolvenzfall.** Was mit Ihren Daten geschieht. Die Antwort kann schlecht sein, aber Sie müssen sie kennen.

![Rechnungsliste mit den Status gestellt, bezahlt, teilweise bezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Jede Rechnung trägt einen Status und ein Datum. Nimmt der Export die Beträge mit, verliert aber den Status, muss die Buchhaltung von Hand rekonstruiert werden.*

## So prüfen Sie den Export einmal im Jahr

Eine Stunde im Jahr, und der einzige Weg zu erfahren, ob das Versprochene existiert.

1. **Auslösen und Zeit messen.** Dauert es drei Tage, haben Sie etwas Wichtiges gelernt.
2. **Ein CSV öffnen.** Kopfzeilen lesbar, Umlaute korrekt. Steht dort `M�ller`, ist die Kodierung kaputt, und jetzt ist der Moment, das zu sagen.
3. **Zählen.** Zeilen in der Patienten-CSV gegen die Patientenzahl, die die Software anzeigt. Bei Abweichung fragen, bevor Sie die Antwort brauchen.
4. **Drei Patienten zufällig auswählen** und die Akte am Bildschirm mit dem Export vergleichen. Vor allem Zahnschema und Einträge.
5. **Ein Röntgenbild öffnen**, direkt aus dem exportierten Ordner, ohne den Umweg über die Software.
6. **Das Verzeichnis prüfen.** Nehmen Sie eine Datei aus dem Ordner und finden Sie allein über den Export heraus, zu wem sie gehört.
7. **Verschlüsselt und außerhalb der Praxis ablegen**, und das Datum notieren. Dieses Datum ist die Antwort, wenn jemand fragt, wann zuletzt geprüft wurde.

> **Beim ersten Mal finden Sie etwas.** Fast immer sind es die Bilder oder das Zahnschema. An einem gewöhnlichen Dienstag kostet das eine E-Mail. Am Tag des Wechsels kostet es die ganze Migration.

## Warnsignale

Keines davon unterstellt böse Absicht. Jedes ist ein Grund, sich das vor der Unterschrift vorführen zu lassen.

- **"Sie bekommen es als PDF."** Gut zum Lesen, unbrauchbar zum Migrieren. Fragen Sie, was es sonst gibt.
- **"Das macht der Support."** Dann gehört der Zeitpunkt nicht Ihnen. Lassen Sie die Zahl der Tage schriftlich geben.
- **"Dafür fällt eine Extraktionsgebühr an."** Eine Ausstiegsmaut. Verhandeln Sie jetzt, solange es geht.
- **"Die Bilder kommen getrennt."** Getrennt ist in Ordnung. Ohne Verzeichnis nicht.
- **"Das Zahnschema wird nicht exportiert, es wird gedruckt."** Das deutlichste Signal überhaupt: die strukturierten klinischen Daten bleiben drin.
- **Keine Felddokumentation.** Ohne sie kostet eine Migration so viel wie Abtippen.

## Was Sie heute Nachmittag prüfen können

Sie müssen nicht bis zur Verlängerung warten. Öffnen Sie heute Ihre Software, suchen Sie die Exportfunktion und sehen Sie sich an, was sie anbietet. Finden Sie sie nicht in fünf Minuten, ist das bereits die Antwort.

Dentalpin ist Open Source und die Datenbank ist PostgreSQL, der Export ist also keine Funktion, die man erbitten muss: Sie können die gesamte Datenbank jederzeit dumpen, und Anhänge liegen genau so auf der Platte, wie sie hochgeladen wurden. Es läuft auf Ihrem eigenen Server oder als gehostete Version, und die [Preise](/de/preise/) sind veröffentlicht.

## Quellen

Alle abgerufen am 26. August 2026.

- § 630f Absatz 3 BGB, Aufbewahrung der Patientenakte. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__630f.html)
- Verordnung (EU) 2016/679 (DSGVO), Artikel 28 Absatz 3 Buchstabe g. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- DICOM, internationaler Standard für medizinische Bilddaten, verwaltet von der Medical Imaging & Technology Alliance, einer Division der NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

Dies ist keine Rechtsberatung. Aufbewahrungsfristen hängen vom Dokument und von weiteren Vorschriften ab, lassen Sie sie bestätigen, bevor etwas gelöscht wird.
