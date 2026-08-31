---
title: "Ein Open-Source-Projekt bewerten, bevor Sie ihm Ihre Praxis anvertrauen"
description: "Fünf öffentliche Prüfungen zeigen, ob ein Open-Source-Projekt zehn Jahre in Ihrer Praxis trägt: Pflege, Beteiligte, Sicherheit, Lizenz und Ausstieg."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, bewertung, sicherheit, lizenzen, vertrag]
---

Prüfen Sie fünf Dinge, in dieser Reihenfolge: ob das Projekt gepflegt wird, wie viele Menschen es tatsächlich pflegen, was an dem Tag passiert, an dem jemand eine Sicherheitslücke findet, was die Lizenz genau sagt, und wie Sie wieder herauskommen. Alle fünf lassen sich an einem Nachmittag aus öffentlichen Seiten beantworten, und für vier davon gibt es einen veröffentlichten Maßstab. Die Schwelle setzen also nicht Sie.

Dass der Quellcode öffentlich ist, ist nicht die Antwort. Es ist das, was Ihnen erlaubt, die Fragen zu stellen, und fast niemand stellt sie.

> **Der übliche Fehler ist, das Produkt zu bewerten statt das Projekt.** Jede Demo sieht gut aus. Ob Sie in sechs Jahren noch eine Software haben, die Ihre Patientenakten öffnet, entscheidet sich daran, wer sie pflegt, in welchem Takt, und was passiert, wenn ein Fehler auftaucht.

## Die fünf Prüfungen, und wo sie stattfinden

Keine davon braucht ein Verkaufsgespräch. Alle stammen aus dem öffentlichen Repository des Projekts und aus zwei kostenlosen Diensten, die bewerten, was sie dort finden.

| Prüfung | Worauf Sie achten | Warnzeichen |
|---|---|---|
| Pflege | ✓ Regelmäßige, aktuelle Commits und Versionen | ✗ Monate Stille und eine zwei Jahre alte Version |
| Beteiligte | ✓ Mehrere Personen dürfen veröffentlichen | ✗ Eine einzige Person zeichnet fast alles |
| Sicherheit | ✓ Eine `SECURITY.md` mit Kontakt | ✗ Keine Stelle, um eine Lücke zu melden |
| Lizenz | ✓ Der Name steht auf der OSI-Liste | ✗ "Eigene Lizenz", ohne veröffentlichten Text |
| Ausstieg | ✓ Dokumentierter Export, gängige Datenbank | ✗ Eigenes, undokumentiertes Format |

## 1. "Gepflegt" hat eine Definition, und es ist nicht Ihre

Die OpenSSF veröffentlicht Scorecard, ein Werkzeug, das ein Repository analysiert und jeden Aspekt von 0 bis 10 bewertet. Die Prüfung *Maintained* ist die nützlichste der neunzehn, weil sie aus einem Eindruck eine Schwelle macht.

Für die Höchstpunktzahl verlangt sie **mindestens einen Commit pro Woche in den vorangegangenen 90 Tagen**, und sie bewertet nur Projekte, die älter als 90 Tage sind. Das ist die Latte, und sie ist veröffentlicht.

Damit allein können Sie jedes Repository öffnen und sehen, auf welche Seite es fällt:

- **Das Datum des letzten Commits** sagt Ihnen, ob jemand diesen Monat oder im letzten Jahr am Code gearbeitet hat.
- **Der Takt der Releases** zählt mehr als ihre Zahl. Zwölf Versionen in einem Jahr und seit vierzehn Monaten nichts ist ein stehendes Projekt, kein stabiles.
- **Offene Tickets ohne Antwort** sind das ehrlichste Signal überhaupt. Ein gesundes Projekt hat nicht null Tickets, es hat beantwortete Tickets.

## 2. Wie viele Menschen es wirklich tragen

Ein Projekt mit tausend Sternen und einem einzigen Autor ist ein Ein-Personen-Projekt. Die CHAOSS-Community innerhalb der Linux Foundation hat genau dafür eine Kennzahl.

Sie heißt *Contributor Absence Factor*, früher *Bus Factor*, und beantwortet eine direkte Frage: "Wie hoch ist das Risiko für ein Projekt, wenn die aktivsten Personen gehen?" Berechnet wird sie als die kleinste Zahl von Mitwirkenden, die zusammen 50% aller Beiträge stellen.

Ist diese Zahl eins, dann lautet die Antwort: Das Risiko tragen Sie.

> **Ein Absence Factor von eins disqualifiziert ein Projekt nicht, aber er ändert den Vertrag, den Sie brauchen.** Wenn Sie es in der Praxis betreiben, wollen Sie entweder ein Unternehmen dahinter, das erreichbar ist, oder einen IT-Dienstleister, der diesen Code bereits gelesen hat.

![Patientenakte mit klinischen Warnhinweisen, aktivem Behandlungsplan und einer nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Jahre an Patientenakten in einer Software. Genau das hängt daran, ob es das Projekt in sechs Jahren noch gibt.*

## 3. Was am Tag der ersten Sicherheitslücke passiert

Diese Prüfung überspringen die meisten, dabei geht sie am schnellsten. Suchen Sie im Repository nach einer `SECURITY.md`: Danach sucht die Prüfung *Security-Policy* von Scorecard, und ihr Fehlen bedeutet, dass wer eine Lücke findet, sie nirgendwo melden kann.

Das OpenSSF Best Practices Badge macht daraus Zahlen. Unter seinen Kriterien der Stufe *passing*: Die anfängliche Reaktionszeit des Projekts auf jede in den letzten 6 Monaten eingegangene Schwachstellenmeldung MUSS 14 Tage oder weniger betragen. Ebenso verlangt es, dass die Release Notes jede öffentlich bekannte behobene Schwachstelle nennen, der bereits eine CVE zugewiesen war.

Ein Projekt mit diesem Abzeichen hat sich schriftlich dazu verpflichtet. Eines ohne tut es vielleicht trotzdem, aber dann müssen Sie es selbst in der Versionshistorie nachprüfen.

> **Das ist keine gute Absicht mehr, sondern europäisches Recht.** Die Verordnung (EU) 2024/2847, der Cyber Resilience Act, ist am 10. Dezember 2024 in Kraft getreten. Die Meldepflichten für aktiv ausgenutzte Schwachstellen gelten **ab dem 11. September 2026**, der Großteil der Verordnung ab dem 11. Dezember 2027.

Diese Verordnung verpflichtet nicht Sie als Praxis, sondern denjenigen, der das Produkt herstellt oder bereitstellt. Sie schafft aber eine Rolle, die man kennen sollte: Organisationen, die quelloffene Software dauerhaft unterstützen (im englischen Text *open-source software steward*). Artikel 24 verlangt von ihnen eine zentrale Kontaktstelle für Schwachstellenmeldungen und eine Politik der koordinierten Offenlegung.

Für Ihre Bewertung heißt das: Ab September 2026 hat ein ernsthaftes europäisches Projekt eine Adresse, an die man Lücken meldet, weil das Gesetz sie verlangt. Fehlt sie, wissen Sie etwas über das Projekt. Dies ist keine Rechtsberatung.

## 4. Die Lizenz, in zwei Minuten

Die Open Source Initiative pflegt die maßgebliche Definition mit zehn nummerierten Kriterien und veröffentlicht die Liste der anerkannten Lizenzen unter `opensource.org/licenses`.

Die Prüfung ist wörtlich zu nehmen: Suchen Sie den genauen Lizenznamen in dieser Liste. GPL, AGPL, Apache 2.0 und MIT stehen darauf. Lizenzen der Kategorie *source available* nicht, was sie nicht schlecht macht, sondern zu etwas anderem.

Was eine Lizenz entscheidet und was nicht, füllt einen eigenen Artikel, und den finden Sie unter [Open Source oder proprietär im Gesundheitswesen](/de/blog/open-source-software-gesundheitswesen/). Für diese Bewertung reicht eine Regel: Veröffentlicht das Projekt seinen Lizenztext nicht, sind Sie nicht mit dem Hinsehen fertig, sondern mit der Bewertung.

## 5. Wie Sie wieder herauskommen

Ein Open-Source-Projekt, das Sie nicht verlassen können, hat dasselbe Problem wie ein proprietäres, nur mit mehr Zwischenschritten.

1. **Suchen Sie die Export-Dokumentation**, bevor Sie irgendetwas installieren. Wenn es sie gibt, steht sie im Repository, nicht in einer Vertriebsmail.
2. **Prüfen Sie das Datenbanksystem.** PostgreSQL oder MySQL heißt, dass jeder kompetente IT-Dienstleister Ihre Daten lesen kann, ohne jemanden um Erlaubnis zu fragen.
3. **Ziehen Sie am ersten Tag eine Kopie**, nicht an dem Tag, an dem Sie wechseln wollen. Ein Export, den Sie nie getestet haben, ist kein Export.
4. **Lesen Sie, was die Kopie mitnimmt und was nicht.** Röntgenbilder und angehängte Dokumente liegen meist außerhalb der Datenbank, und meist sind genau sie es, die fehlen.

Welches Format Sie verlangen sollten, steht in [Daten aus der Praxissoftware exportieren](/de/blog/daten-export-zahnarztsoftware/).

## Bewerten, ohne Informatiker zu sein

Die beiden genannten Werkzeuge sind öffentlich und kostenlos, und beide lassen sich auf ein fremdes Projekt anwenden:

- **OpenSSF Scorecard** analysiert das Repository und liefert neunzehn Prüfungen mit Punktwerten von 0 bis 10, darunter *Maintained*, *Security-Policy*, *Code-Review*, *License* und *Vulnerabilities*, das den Code gegen die OSV-Datenbank bekannter Schwachstellen abgleicht.
- **Das OpenSSF Best Practices Badge** ist eine öffentliche Selbstauskunft des Projekts, gegliedert in sechs Blöcke: Grundlagen, Änderungskontrolle, Meldewege, Qualität, Sicherheit und Analyse.

Beide messen Prozesse, also genau das, was eine Demo nicht zeigt. Keines misst, ob die Software zu einer Zahnarztpraxis passt, und wer das verwechselt, installiert ein vorbildliches Projekt ohne Zahnschema.

## Zwei Wochen mit echten Daten, vor der Entscheidung

Keine Kennzahl ersetzt das, und es ist der billigste Punkt der Liste.

1. **Installieren Sie es auf einer Maschine, die nicht produktiv ist.** Ein alter Laptop oder ein Server für fünf Euro im Monat genügen, um zu sehen, ob sich das Projekt so installiert, wie es seine Dokumentation beschreibt.
2. **Legen Sie zwanzig echte Patienten an**, mit Behandlungen und Kostenvoranschlägen. Zwanzig echte Akten zeigen mehr als zweihundert erfundene.
3. **Fahren Sie einen kompletten Tag parallel.** Termin, Behandlung, Dokumentation, Kostenvoranschlag, Zahlung. Fehlt ein Schritt in dieser Kette, zeigt er sich hier.
4. **Öffnen Sie ein Ticket mit einer echten Frage** und zählen Sie die Tage bis zur Antwort. Nur so prüfen Sie Punkt 3, ohne auf einen echten Vorfall zu warten.
5. **Exportieren Sie alles und löschen Sie es.** Was mit zwanzig Patienten funktioniert, funktioniert auch mit zweitausend.

![Startseite mit den heutigen Terminen, wer in der Praxis ist, überfälligen Zahlungen und dem Tagesverlauf](/screenshots/home.png)

*Der Bildschirm, in dem das Praxisteam jeden Morgen arbeitet. Zwei Wochen echter Betrieb sagen darüber mehr als jede Punktzahl.*

## Was keine dieser Kennzahlen sagt

Es lohnt zu wissen, wo diese Methode endet.

- **Ob das Projekt zu Ihrer Arbeitsweise passt.** Das beantwortet nur der zweiwöchige Test.
- **Ob der Code sicher ist.** Öffentlicher Code ist prüfbar, nicht geprüft. Das sind zwei verschiedene Dinge, und nur das zweite schützt jemanden.
- **Wer nach der DSGVO verantwortlich ist.** Das bleiben Sie, welche Software Sie auch einsetzen.
- **Ob am Freitagnachmittag jemand ans Telefon geht.** Das entscheidet ein Supportvertrag, und den gibt es für freie wie für proprietäre Software.

Dentalpin ist eines der Projekte, die man durch diese Liste schicken kann: Der Code ist öffentlich, die Lizenz ist die BSL 1.1, die nicht auf der OSI-Liste steht und das sollte man so sagen, die Datenbank ist PostgreSQL und die [Preise](/de/preise/) sind veröffentlicht. Wenden Sie die fünf Prüfungen darauf an, bevor Sie es installieren, wie auf jedes andere auch.

## Quellen

- OpenSSF Scorecard, Repository und Dokumentation der Prüfungen, `github.com/ossf/scorecard` und `docs/checks.md` (abgerufen am 31. August 2026).
- OpenSSF Best Practices Badge, Kriterien der Stufe *passing*, `bestpractices.dev/en/criteria/0` (abgerufen am 31. August 2026).
- CHAOSS, Kennzahl *Contributor Absence Factor*, `chaoss.community` (abgerufen am 31. August 2026).
- Open Source Initiative, *The Open Source Definition* und Liste der anerkannten Lizenzen, `opensource.org/osd` und `opensource.org/licenses` (abgerufen am 31. August 2026).
- Verordnung (EU) 2024/2847 (Cyber Resilience Act), Text auf EUR-Lex und die offizielle Seite der Europäischen Kommission zu ihrer Anwendung, `digital-strategy.ec.europa.eu` (abgerufen am 31. August 2026).
