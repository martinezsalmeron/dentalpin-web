---
title: "Röntgenbilder speichern: aufbewahren, wiederfinden und weitergeben"
description: "Röntgenbilder in der Zahnarztpraxis speichern: warum DICOM, welche Frist das StrlSchG setzt, wohin die Datei gehört und wie Sie sie sicher weitergeben."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [roentgen, dicom, patientenakte, dsgvo, praxis-it]
---

Legen Sie jedes Röntgenbild in der Patientenakte ab, in einem Format, das Sie ohne die Software des Sensorherstellers öffnen können, und halten Sie eine Kopie außerhalb der Praxis. Das Strahlenschutzgesetz setzt die Frist: bei einer Untersuchung einer volljährigen Person zehn Jahre, bei einer minderjährigen Person bis zur Vollendung ihres 28. Lebensjahres.

Im Folgenden steht, wie das praktisch aussieht: welches Format Sie verlangen, wo die Datei liegen muss, wie viel Platz Sie tatsächlich brauchen und wie Sie ein Bild weitergeben, ohne daraus einen Vorfall zu machen.

## Das Format entscheidet mehr als die Festplatte

Ein digitales Röntgenbild ist nicht nur ein Raster aus Pixeln. Es trägt Patient, Datum, Gerät, Technik und Expositionsparameter mit sich, und genau dieser Teil macht aus einem Bild eine Aufzeichnung.

Der internationale Standard dafür ist DICOM, von der NEMA beschrieben als der Standard, um medizinische Bildinformationen zu übertragen, zu speichern, abzurufen, zu drucken, zu verarbeiten und darzustellen. Er ist kostenlos herunterzuladen, jeder kann also nachlesen, was dort steht.

- **DICOM PS3.10** definiert das Dateiformat, also das, womit Sie ein Bild woanders hin kopieren und trotzdem lesen können.
- **DICOM PS3.2** definiert die Konformität und verpflichtet jeden Hersteller, ein Dokument darüber zu veröffentlichen, was er tatsächlich umsetzt. Dieses Dokument verlangt man vor dem Kauf, nicht danach.
- **Ein exportiertes JPEG ist nicht dasselbe.** Es taugt, um einem Patienten etwas zu zeigen, und nicht als Archiv, weil die Metadaten verloren gehen und meist auch die Bittiefe.

> **Der Test, der zeigt, ob Sie ein Archiv haben oder eine Geisel.** Nehmen Sie ein Röntgenbild von vor zwei Jahren, kopieren Sie es auf einen USB-Stick und öffnen Sie es an einem Rechner ohne die Sensorsoftware. Öffnet es sich nicht, haben Sie kein klinisches Archiv, sondern eine Datei im Inneren eines Produkts.

## Zehn Jahre, und der Fall, in dem es länger dauert

Das Strahlenschutzgesetz regelt in § 85 die Aufbewahrung. Aufzeichnungen und Bilder sind aufzubewahren "im Falle von Behandlungen für eine Dauer von 30 Jahren", bei der Untersuchung "einer volljährigen Person für eine Dauer von zehn Jahren" und "bei einer minderjährigen Person bis zur Vollendung ihres 28. Lebensjahres".

Für eine Zahnarztpraxis heißt das im Regelfall zehn Jahre, denn ein Röntgenbild dient der Untersuchung. Die 30-Jahre-Zeile betrifft Behandlungen mit ionisierender Strahlung und nicht das, was am Behandlungsstuhl aufgenommen wird.

- **Die Frist für Minderjährige ist die, die im Alltag gerissen wird.** Eine Regel, die nur auf das Aufnahmedatum schaut, löscht Bilder von Patienten, die noch bis zu ihrem 28. Geburtstag Anspruch darauf haben.
- **Schreiben Sie die Frist auf, bevor Sie sie brauchen.** Eine Regel, auf die Sie zeigen können, ist eine belastbare Entscheidung. Löschen, weil die Platte voll war, ist derselbe Vorgang ohne Begründung.

| Entscheidung | Was üblicherweise passiert | Was Sie zeigen können müssen |
|---|---|---|
| Wann ein Bild gelöscht wird | ✗ Nie entschieden, gelöscht wird bei Platzmangel | ✓ Eine schriftliche, für alle gleich angewandte Regel |
| Wer löschen darf | ✗ Jeder mit Zugriff auf den Ordner | ✓ Ein konkretes Recht, mit Protokoll |
| Wo die älteste Kopie liegt | ~ Auf einer Platte im Schrank | ✓ Auf einem Medium, das dieses Jahr jemand gelesen hat |

## Das Bild gehört in die Akte, nicht in einen Ordner

Der häufigste Fehler ist nicht, Röntgenbilder zu verlieren. Es ist, sie nicht wiederzufinden. Ein Ordner namens `2019-11-14` mit zwölf durchnummerierten Dateien ist digitalisiertes Papier, keine Patientenakte.

Sobald das Bild an Patient und Termin hängt, hören drei Dinge auf, ein Problem zu sein: es zu finden, zu wissen warum es gemacht wurde, und zu wissen wer es gesehen hat.

![Patientenakte mit Zahnschema, klinischen Warnhinweisen und laufendem Behandlungsplan](/screenshots/dental-chart.png)

*Die Akte, an der das Bild am Ende hängt, neben dem Zahn den es dokumentiert und dem Plan der es begründet hat.*

| | Ordner am Rechner im Behandlungszimmer | Freigabe auf dem Praxisserver | An der Patientenakte |
|---|---|---|---|
| Das Bild eines Patienten finden | ✗ Hängt davon ab, wie es an dem Tag benannt wurde | ~ Nur solange jemand die Konvention hält | ✓ Es steht in der Akte |
| In der Datensicherung enthalten | ✗ Fast nie | ~ Wenn jemand daran gedacht hat | ✓ Zusammen mit den übrigen Daten |
| Übersteht den Rechnerwechsel | ✗ Bleibt auf dem alten Gerät | ~ Wenn die Freigabe mitgezogen wird | ✓ Zieht mit der Datenbank um |
| Protokoll, wer es angesehen hat | ✗ Keines | ✗ Keines | ~ Nur wenn die Software Zugriffe protokolliert |

## Den Platzbedarf messen, nicht schätzen

Eine allgemeine Zahl hilft nicht, weil alles vom Sensor, von der Auflösung und davon abhängt, ob Sie DVT machen. Was es gibt, ist ein Weg, es in zehn Minuten zu wissen.

1. **Sehen Sie sich die Größe Ihres Bildordners der letzten zwölf Monate an.** Das ist die einzige Zahl, die Ihre Praxis beschreibt und nicht eine fremde.
2. **Teilen Sie sie durch die Patienten in diesem Zeitraum.** Damit haben Sie Ihren echten Schnitt pro Patient.
3. **Multiplizieren Sie mit den erwarteten Patienten und den Aufbewahrungsjahren.** Das ist die Größe Ihres Archivs in zehn Jahren.
4. **Messen Sie DVT getrennt**, falls Sie es einsetzen. Ein 3D-Volumen liegt nicht in der Größenordnung eines Zahnfilms, und eine einzige Aufnahme kann schwerer wiegen als ein Jahr intraoraler Bilder.
5. **Vergleichen Sie die Zahl mit dem Speicher, den Ihr Anbieter enthält**, und mit dem Preis der nächsten Stufe. Dort sitzt meistens die Überraschung.

> **Ein Archiv, das ohne Regel wächst, entscheidet irgendwann für Sie.** An dem Dienstagmorgen, an dem die Platte voll ist, lautet die Frage nicht mehr was bleibt, sondern was schnell weg kann. Verschwinden werden die Bilder der Patienten, die nicht mehr kommen, also genau die, nach denen in drei Jahren jemand fragt.

## Die Datensicherung, die die Bilder auslässt

Röntgenbilder sind fast das gesamte Datenvolumen einer Praxis, also fliegen sie als Erstes aus einer Sicherung, die über Nacht fertig werden muss. Der Job läuft weiter, meldet weiter Erfolg, und schützt das Wesentliche nicht mehr.

- **Prüfen Sie die Größe der Sicherung**, nicht nur die Erfolgsmeldung. Wiegt sie deutlich weniger als Ihre Daten, bleiben die Bilder draußen.
- **Stellen Sie mindestens einmal im Jahr vollständig wieder her** und öffnen Sie drei Patienten mit Röntgenbildern. Der ganze Ablauf steht im Leitfaden zur [Datensicherung](/de/blog/datensicherung-zahnarztpraxis/).
- **Verschlüsseln Sie jedes Medium, das die Praxis verlässt.** Eine verlorene Platte mit klinischen Bildern ist eine meldepflichtige Datenpanne.

## Weitergeben, ohne einen Vorfall zu erzeugen

Ein Röntgenbild identifiziert eine Person und beschreibt ihre Gesundheit, es ist also eine besondere Kategorie personenbezogener Daten. Die DSGVO verlangt dem Risiko angemessene Maßnahmen, und ein Anhang in einer gewöhnlichen E-Mail ist keine, sobald es Besseres gibt.

- **An den Patienten:** er hat Anspruch auf eine Kopie. Geben Sie das DICOM mit, wenn er zum Spezialisten geht, und legen Sie eine Fassung dazu, die er zu Hause ohne Spezialsoftware öffnen kann.
- **An eine Kollegin:** ein befristeter Link oder ein Portal schlägt den Anhang, weil beides abläuft und eine Spur hinterlässt. Muss es E-Mail sein, dann verschlüsselt und mit dem Kennwort über einen anderen Weg.
- **An das Labor:** nur das, was die Arbeit braucht. Eine Krone verlangt nicht die gesamte Röntgenhistorie.
- **Dokumentieren Sie jede Herausgabe.** Datum, Empfänger, Weg, Inhalt. Dieses Protokoll ist Ihre Antwort, wenn zwei Jahre später jemand nachfragt.

![Patientenakte im Aktivitätsreiter mit klinischen Warnhinweisen, laufendem Plan und einer nach Terminen, Behandlungen, Zahlungen und Kommunikation filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Die Zeitleiste des Patienten, an der ablesbar ist, bei welchem Termin welche Aufnahme entstand.*

## Beim Softwarewechsel bleiben die Bilder liegen

In einer Migration wird die Datenbank verhandelt und die Bilder werden vergessen. Verlangen Sie drei konkrete Dinge schriftlich, bevor Sie unterschreiben.

1. **Einen Export der Bilder als DICOM**, keinen Ordner mit Bildschirmfotos und keinen herstellereigenen Betrachter.
2. **Die Verknüpfung von Bild, Patient und Datum** in einer lesbaren Datei. Ohne sie haben Sie zwanzigtausend Dateien und keine Historie.
3. **Einen Testexport jetzt**, mit zehn echten Patienten, statt einer Zusage für den Tag des Abschieds.

Dieses Gespräch führt sich vor der Unterschrift leichter, und es steht auf der Liste der [Fragen vor dem Kauf](/de/blog/fragen-vor-dem-kauf-zahnarztsoftware/).

In Dentalpin liegen die Bilder an der Patientenakte und im Dateisystem, kommen also in dieselbe Sicherung wie die Datenbank und lassen sich jederzeit mitnehmen. Die Konditionen stehen unter [Preise](/de/preise/).

## Quellen

- Strahlenschutzgesetz (StrlSchG), § 85 Aufzeichnungs- und Aufbewahrungspflichten. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/strlschg/__85.html). Abgerufen am 28. August 2026.
- DICOM-Standard, aktuelle Ausgabe und Teileübersicht (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Abgerufen am 28. August 2026.
- Verordnung (EU) 2016/679 (DSGVO), Artikel 9, 15 und 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 28. August 2026.

Das ist keine Rechtsberatung. Welche Frist für Ihren Fall gilt, klären Sie mit Ihrer Rechtsberatung oder Ihrer Zahnärztekammer.
