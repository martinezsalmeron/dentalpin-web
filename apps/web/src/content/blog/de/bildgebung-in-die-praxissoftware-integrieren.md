---
title: "Bildgebung in die Praxissoftware integrieren: Sensor, DVT und Intraoralscanner"
description: "Was Integration wirklich heißt: DICOM Modality Worklist, wo das Bild landet, warum Intraoralscanner anders sind und was vor der Unterschrift schriftlich gehört."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [bildgebung, dicom, intraoralscanner, schnittstellen, praxis-it]
---

Entscheidend ist nicht, ob Ihre Praxissoftware Bilder anzeigen kann. Entscheidend sind drei Dinge: das Gerät bekommt den Patienten aus der Akte, statt dass jemand den Namen erneut tippt, das Bild kommt an genau diese Akte und diesen Termin gebunden zurück, und Sie können es jederzeit in DICOM exportieren. Fehlt das Erste, betreiben Sie zwei Patientenstämme in derselben Praxis.

Im Folgenden steht, wie Sie prüfen, welchen Fall Sie haben: welcher Mechanismus das löst, worin sich vier Integrationsstufen unterscheiden, die alle mit demselben Wort verkauft werden, und was vor der Unterschrift schriftlich gehört.

## Das Problem ist nicht der Betrachter, es sind zwei Patientenstämme

Fast jede Bildgebungssoftware bringt ihre eigene Patientendatenbank mit. Jemand hat sie in der Woche gefüllt, in der der Sensor installiert wurde, und seitdem läuft sie neben der Praxisverwaltungssoftware her.

Beide starten identisch und laufen von allein auseinander. Ein Umlaut, der einmal aufgelöst getippt wurde, ein Geburtsdatum um kurz vor neun, ein Patient, der nur in einem der beiden Systeme angelegt ist.

- **In der Bildsoftware entstehen Dubletten**, und jede davon trägt einen Teil der Röntgenhistorie.
- **Die rechtfertigende Indikation verliert den Anschluss.** Das Bild existiert, hängt aber nicht am Termin, der es begründet hat.
- **Solange die Geräte dieselben bleiben, fällt das niemandem auf.** Es fällt an dem Tag auf, an dem eine vollständige Akte herausgegeben wird, oder beim Softwarewechsel.

> **Der schnelle Test sind die Namen.** Öffnen Sie die Bildsoftware und suchen Sie die drei Patienten mit den meisten Terminen des letzten Jahres. Steht einer zweimal drin oder anders geschrieben als in der Akte, dann ist Ihre Integration eine Schaltfläche, die ein zweites Programm öffnet.

![Patientenakte im Reiter mit den Stammdaten, mit Name, Kontakt und Verwaltungsangaben](/screenshots/patients.png)

*Die Akte, aus der Name und Geburtsdatum einer Aufnahme stammen sollten.*

## In Deutschland ist DICOM bei der Weitergabe nicht optional

Die Landeszahnärztekammer Baden-Württemberg schreibt in ihrer Information *Bildgebende Verfahren. DICOM in der Zahnarztpraxis* von 09/2019, es sei "vom Länderausschuss Röntgenverordnung 2014 beschlossen" worden, "dass in der Zahnheilkunde die Umsetzung der Vorgaben der DIN 6862-2 verbindlich zum 01.01.2020 zu erfolgen hat".

Dieselbe Information hält fest, die Norm schreibe vor, "dass die Weitergabe von digitalen Bilddaten an eine weiterbehandelnde Einrichtung im Regelfall im DICOM-Format zu erfolgen hat", und dass die Norm je Modalität Vorgaben für die Metadaten im Datei-Header macht.

Für den Praxisalltag heißt das: Ein Export, der nur JPEG kann, erfüllt die Weitergabe im Regelfall nicht. Das ist eine Anforderung an das Gerät und an die Software gleichzeitig, und deshalb gehört sie in die Angebotsanfrage.

> **Das ist keine Rechtsberatung.** Was in Ihrem Bundesland und in Ihrer Konstellation konkret gilt, klären Sie mit Ihrer Zahnärztekammer oder Ihrem Rechtsbeistand. Die zitierte Information der LZK BW ist frei abrufbar und der Ausgangspunkt dafür.

## Die Arbeitsliste ist der Mechanismus

Der Standard dahinter ist DICOM, herausgegeben von der NEMA, und zugleich ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. Die Hälfte des Titels, die *workflow* heißt, nutzt in Zahnarztpraxen kaum jemand.

Der Mechanismus ist die DICOM Modality Worklist, in der genannten LZK-Information Schritt für Schritt beschrieben. Der Ablauf ist in der Klinik und in der Praxis mit einem Sensor derselbe:

1. **Die Aufnahme wird aus der Praxissoftware beauftragt**, der Patient ist in seiner Akte bereits identifiziert.
2. **Der Auftrag landet auf einer Liste**, wahlweise eine Liste je Gerät oder eine gemeinsame.
3. **Das Gerät liest die Liste an seiner eigenen Konsole** und übernimmt die Patientendaten von dort. Niemand tippt sie erneut.
4. **Die Aufnahme wird erstellt** und die Bilder werden im Gerät mit diesen Daten verknüpft.
5. **Die Bilder gehen ins Archiv**, der Auftrag wird als erledigt markiert und verschwindet von der Liste.

Schritt drei nimmt den Tippfehler heraus, Schritt fünf sorgt dafür, dass das Bild von selbst in der Akte auftaucht. Ein System, das nur Schritt fünf kann, erspart Ihnen die Suche nach der Datei. Eines, das beides kann, macht den zweiten Patientenstamm überflüssig.

## VDDS-media und der Weg zu DICOM

In Deutschland kommt eine zweite Abkürzung dazu. VDDS-media ist die Schnittstelle des Verbands der Deutschen Dental-Software Unternehmen für den "Austausch von Bildern und Objekten" mit der Praxissoftware. Die aktuell gültige Fassung ist Version 1.4, und der VDDS stellt die Spezifikation nach eigener Angabe allen Interessenten kostenlos zur Verfügung.

Der Verband beschreibt selbst, dass er die Röntgenbildübergabe auf DICOM umstellt: Das Profil Basic Dental Workflow (BDW) soll VDDS-media dafür ablösen und liegt nach seiner eigenen Darstellung als sogenannter Frozen Draft vor. Der VDDS beschreibt dazu gestufte Zertifizierungsstufen, von der Übergabe des Auftrags mit den Patientendaten bis hin zur Unterstützung von 3D-Bilddaten.

Praktisch heißt das für eine Praxis, die gerade auswählt: Fragen Sie nach beidem. VDDS-media ist heute in vielen Häusern das, was tatsächlich läuft; die Zertifizierungsstufe im BDW sagt, wie weit ein Anbieter beim Nachfolger ist.

## Vier Stufen, ein Wort

"Integriert mit Ihrem Röntgen" bezeichnet sehr Verschiedenes. Das sind die vier Stufen, die in Praxen wirklich vorkommen, von schwach nach stark.

| Stufe | Was sie tatsächlich tut | Patient zweimal getippt | Bild kommt in die Akte zurück |
|---|---|---|---|
| Schaltfläche öffnet den Betrachter | Startet das zweite Programm | ✗ Ja | ✗ Nein |
| Übergabe je Patient | Reicht die Patienten-ID beim Start weiter | ✓ Nein | ~ Herstellerabhängig |
| Arbeitsliste und DICOM-Ablage | Auftrag hin, Bilder zurück | ✓ Nein | ✓ Ja |
| DICOM-Webdienste | Zusätzlich Abfrage und Abruf über das Web | ✓ Nein | ✓ Ja |

Die letzte Stufe ist DICOMweb, vom Standard selbst als "the DICOM Standard for web-based medical imaging" und als Satz von REST-Diensten beschrieben. Auf einem Datenblatt stehen die Namen QIDO-RS zum Suchen, WADO-RS zum Abrufen, STOW-RS zum Speichern und UPS-RS für Arbeitslisten.

> **Fragen Sie die Stufe beim Namen ab, nicht das Adjektiv.** "Kompatibel" und "angebunden" bedeuten im Angebot nichts. "Arbeitet als Modality Worklist SCP" und "nimmt STOW-RS entgegen" bedeuten etwas, und beides lässt sich vor dem Kauf prüfen.

## Der Intraoralscanner ist ein eigenes Thema

Ein Intraoralscanner liefert keine Röntgenbilder, sondern Oberflächennetze, und legt sie standardmäßig nicht in DICOM ab. Heraus kommen die Netzformate der 3D-Fertigung, allen voran STL und OBJ, und viele Hersteller halten den Fall in ihrem eigenen Cloud-Portal, mit eigenem Login und eigener Patientenliste.

Der Standard ist hinterhergezogen. DICOM Supplement 205 "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", Supplement 208 hat dasselbe für OBJ, für MTL-Materialbibliotheken und für Texturen als JPG oder PNG ergänzt.

- **Fragen Sie, wo der Fall liegt**, nicht wo er angezeigt wird. Lautet die Antwort Herstellerportal, steht das Archiv nicht in Ihrer Praxis.
- **Fragen Sie, ob der Export die Zuordnung zum Patienten mitnimmt**, nicht nur die Dateien. Zwanzigtausend namenlose Netze sind keine Dokumentation.
- **Fragen Sie, was passiert, wenn Sie den Scanner nicht mehr bezahlen.** Dieselbe Frage stellt jeder zur Praxissoftware und fast niemand zum Portal des digitalen Workflows.

![Patientenakte im Reiter Aktivität, mit klinischen Warnhinweisen, aktivem Plan und einer nach Terminen, Behandlungen, Zahlungen und Kommunikation filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Eine Patienten-Zeitleiste, an der sichtbar wird, zu welchem Termin eine Untersuchung gehört.*

## In zwanzig Minuten herausfinden, was Sie heute haben

Dafür braucht es kein Audit, sondern sechs Prüfungen an einem echten Patienten, von denen keine etwas kaputt macht.

1. **Legen Sie einen neuen Patienten in der Praxissoftware an** und sehen Sie nach, ob er ohne weiteres Zutun in der Bildsoftware erscheint.
2. **Starten Sie am Gerät eine Aufnahme** und prüfen Sie, ob der Patient schon eingetragen ist oder gesucht werden muss.
3. **Machen Sie eine Aufnahme und gehen Sie zurück in die Akte.** Zählen Sie die Sekunden bis das Bild da ist, und wenn es nicht kommt, notieren Sie, wo es stattdessen lag.
4. **Suchen Sie die Datei auf der Platte.** Liegt sie in einem Ordner mit dem Herstellernamen und ist von der Sicherung nicht erfasst, haben Sie bereits einen Befund.
5. **Exportieren Sie dieses Bild auf einen Stick und öffnen Sie es an einem Rechner** ohne Herstellersoftware.
6. **Wiederholen Sie Punkt eins mit dem Intraoralscanner**, der fast immer außen vor bleibt.

Das Ergebnis ist mehr wert als jeder Prospekt, weil es Ihre Praxis beschreibt. Wenn Punkt vier Sie beunruhigt, geht die Anleitung zum [Röntgenbilder speichern](/de/blog/roentgenbilder-speichern/) auf Format und Archiv ein.

## Was schriftlich gehört

Das verhandelt man vor der Unterschrift und nicht danach, und es passt in fünf Zeilen einer E-Mail.

- **Die DICOM Conformance Statements von Gerät und Software.** Teil PS3.2 des Standards verpflichtet jeden Hersteller, zu veröffentlichen, was er tatsächlich umsetzt. Das Dokument existiert also und Sie können es anfordern.
- **Ob die Software als Arbeitslisten-Server arbeitet**, und mit welchen Geräten sie getestet ist, mit Namen und Versionen.
- **Die VDDS-media-Fassung und, falls vorhanden, die BDW-Zertifizierungsstufe.**
- **Wo die Bilddateien liegen**, in welchem Pfad oder Dienst, und ob sie in derselben Sicherung stecken wie alles andere.
- **Wie der vollständige Export aussieht**, in DICOM und mit der Zuordnung Patient und Datum in einer lesbaren Datei, jetzt an zehn Patienten vorgeführt. Diese Frage steht auch auf der Liste der [Fragen vor dem Kauf](/de/blog/fragen-vor-dem-kauf-zahnarztsoftware/).

Bei Dentalpin liegen die Bilder an der Patientenakte verknüpft und im Dateisystem Ihres eigenen Servers, stecken damit in derselben Sicherung wie alles andere und lassen sich mitnehmen. Die Konditionen stehen unter [Preise](/de/preise/).

## Quellen

- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019 (Beschluss des Länderausschusses Röntgenverordnung 2014, DIN 6862-2 verbindlich zum 01.01.2020, Ablauf der DICOM Modality Worklist). [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Abgerufen am 4. September 2026.
- VDDS e.V., Schnittstelle VDDS-media, Version 1.4, Spezifikation kostenlos. [vdds.de](https://www.vdds.de/schnittstellen/vdds-media/). Abgerufen am 4. September 2026.
- VDDS e.V., *DICOM-Umsetzung: aktueller Stand und Ziele* (Profil Basic Dental Workflow, Frozen Draft, Zertifizierungsstufen). [vdds.de](https://www.vdds.de/blog/dicom-umsetzung-aktueller-stand-und-ziele/). Abgerufen am 4. September 2026.
- DICOM, aktuelle Ausgabe und Teileliste (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Abgerufen am 4. September 2026.
- DICOMweb, Definition und die Dienste QIDO-RS, WADO-RS, STOW-RS und UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Abgerufen am 4. September 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Abgerufen am 4. September 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL, Texturen). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Abgerufen am 4. September 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Abgerufen am 4. September 2026.
