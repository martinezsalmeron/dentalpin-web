---
title: "Einem LLM Schreibzugriff auf klinische Daten geben, ohne fahrlässig zu werden"
description: "Das Modell schreibt nie: es schlägt eine enge Operation vor, der Code prüft Rechte erneut, ein Mensch bestätigt jede Änderung. Architektur und Grenzen."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ki, llm, architektur, sicherheit, dsgvo]
---

Die kurze Antwort lautet: das Modell schreibt nie. Es schlägt den Aufruf einer engen, typisierten Operation vor, der eigene Code prüft die Berechtigungen der fragenden Person erneut, und alles, was Daten verändert, hält an, bis ein Mensch bestätigt. Das LLM versteht den Satz, ausgeführt wird er von ganz normalem Backend-Code.

Es folgt die Aufteilung der Verantwortung, die das vertretbar macht, was Aufsichtsbehörden inzwischen zu handelnden Agenten sagen, und warum der Bestätigungsdialog der Teil ist, den man am leichtesten falsch baut.

## Die drei Eigenschaften, die ein Agent nicht zugleich haben darf

Die spanische Datenschutzbehörde hat im Februar 2026 Orientierungen zu agentischer KI veröffentlicht, die die Rule of 2 in ihrer für KI-Agenten reformulierten Fassung aufgreifen. Sie setzt eine Untergrenze an Garantien, die nie unterschritten werden darf, und stützt sich auf drei Eigenschaften:

1. **Unkontrollierte Eingaben verarbeiten**, also Text, der in den Kontext des Modells gelangt, ohne von einer berechtigten Person geschrieben worden zu sein.
2. **Zugriff auf sensible Daten**, was in einer Zahnarztpraxis per Definition die gesamte Patientenakte bedeutet.
3. **Automatische Aktionen ausführen**, mit Wirkung innerhalb oder außerhalb der Organisation.

Ein Agent, der alle drei vereint, sollte nicht zugelassen werden. Das Dokument geht die Fälle einzeln durch: wo unkontrollierte Eingaben den Zugriff auf sensible Daten auslösen können, ist jede automatische Aktion mit Wirkung inner- oder außerhalb der Organisation ohne menschliche Aufsicht zu verhindern.

> **Ein Praxisassistent hat die ersten beiden Eigenschaften von Anfang an.** Er liest Text, den Patientinnen und Dritte geschrieben haben, und arbeitet auf Gesundheitsdaten, also besonderen Kategorien nach Artikel 9 DSGVO. Die einzige der drei, auf die Sie verzichten können, ist die dritte, und der Verzicht bedeutet genau das: kein Schreibvorgang ohne einen Menschen davor.

Das ist eine Architekturentscheidung, und sie fällt, bevor die erste Zeile Code entsteht. Alles Weitere folgt daraus.

## Schreibzugriff heißt Werkzeuge, nicht Datenbankzugang

Einem Modell Schreibzugriff zu geben ist nicht dasselbe wie eine PostgreSQL-Verbindung oder ein Endpunkt, der SQL annimmt. Es heißt, einen kleinen Katalog von Operationen zu veröffentlichen, jede mit typisierten Parametern und denselben Prüfungen, die die Oberfläche schon durchläuft.

Bei einem Satz wie "verschiebe Marta von Dienstag auf Donnerstag um zehn" sieht der Weg so aus:

1. **Das Modell bekommt den Satz und den Werkzeugkatalog**, nie das Datenbankschema.
2. **Es liefert einen Vorschlag**: welche Operation mit welchen Argumenten. Bis hierher ist nichts passiert, das ist Text.
3. **Das Backend validiert die Argumente** mit demselben Schema, das ein Formular validiert, und weist zurück, was nicht passt.
4. **Die Berechtigungen werden erneut geprüft**, für die fragende Person, am Ausführungspunkt.
5. **Verändert die Operation Daten, hält sie an** und verlangt eine ausdrückliche Bestätigung, mit Anzeige der bevorstehenden Änderung.
6. **Sie wird ausgeführt und protokolliert**: welches Werkzeug, welche Argumente, wer gefragt und wer bestätigt hat.

Schritt 4 ist der, den Teams überspringen. Die Werkzeugliste zu filtern, bevor sie zum Modell geht, ist ein sinnvoller Hinweis, aber keine Zugriffskontrolle. Die Kontrolle muss dort sitzen, wo der Aufruf ausgeführt wird, denn das ist die einzige Stelle, die alle Aufrufe passieren.

![KI-Assistent von Dentalpin mit der Liste der verfügbaren Arbeitsabläufe und einem offenen Gespräch](/screenshots/ai-copilot.png)

*Der Agent schlägt vor, der Katalog links ist alles, was er überhaupt anfragen kann.*

## Geringste Rechte, angewendet auf den Agenten statt auf die Nutzerin

Die spanischen Orientierungen sind eindeutig: das Grundprinzip in einer agentischen Umgebung ist das der geringsten Rechte, zusammen mit einer Begrenzung von Rechteausweitung und Identitätsvererbung. Praktisch bleibt eine prüfbare Regel: der Agent darf nichts sehen und nichts tun, was die fragende Person nicht auch am Bildschirm dürfte.

- **Keine eigene Identität.** Der Agent handelt mit der Sitzung der schreibenden Person, nicht mit einem Dienstkonto mit weiten Rechten. Ein Dienstkonto macht aus jedem Modellfehler einen Vollzugriff.
- **Getrennt je Praxis.** Ein Agent, der mehrere Praxen bedient, muss Speicher und Kontext trennen, sonst mischt er Daten aus unbeteiligten Akten.
- **Keine Werkzeuge, die die Reichweite erweitern.** Jedes veröffentlichte Werkzeug ist zusätzliche Angriffsfläche, und dasselbe Dokument weist darauf hin, dass das Hinzufügen von Werkzeugen der übliche Weg ist, versehentlich Rechte zu vergeben.
- **Nichts Unumkehrbares.** Löschen, Patienten zusammenführen oder eine gestellte Rechnung stornieren sind keine Agentenoperationen, wie viele Bestätigungen man auch davorsetzt.

## Ein Bestätigungsdialog ist keine menschliche Aufsicht

Hier halten sich die meisten Teams schon für fertig. Aufsicht muss echt sein, und die deutschen Aufsichtsbehörden haben präzise gesagt, was das bedeutet.

Die Datenschutzkonferenz schreibt in ihrer Orientierungshilfe vom 6. Mai 2024: "Entscheidungen mit Rechtswirkung dürfen gemäß Art. 22 Abs. 1 DS-GVO grundsätzlich nur von Menschen getroffen werden." Erarbeitet eine KI-Anwendung Vorschläge mit Rechtswirkung, muss das Verfahren so gestaltet sein, "dass dem entscheidenden Menschen ein tatsächlicher Entscheidungsspielraum zukommt und nicht maßgeblich aufgrund des KI-Vorschlags entschieden wird".

Und der Satz, der jede Bestätigungsschaltfläche auf die Probe stellt, steht direkt danach: "Eine lediglich formelle Beteiligung eines Menschen im Entscheidungsprozess ist nicht ausreichend." Dieselbe Stelle nennt auch, was Aufsicht in der Praxis kaputt macht, nämlich unzureichende Personalressourcen, Zeitdruck und fehlende Transparenz über den Entscheidungsweg, die nicht dazu führen dürfen, dass Ergebnisse ungeprüft übernommen werden.

> **Wer bestätigt, muss auch nein sagen können.** Die Person braucht Sicht auf die bevorstehende Änderung, Zeit und Stand, um abzulehnen, und darf für das Ablehnen keinen Preis zahlen. Ein Knopf, der vierzig Mal am Tag ungelesen gedrückt wird, ist eine automatische Signatur mit Zwischenschritten.

Die spanische Behörde benennt zusätzlich eine Versuchung: die gesamte Verantwortung auf die Nutzerin oder auf die menschliche Aufsicht zu verschieben. Geht etwas schief, ist es bequem, auf den Klick zu zeigen statt auf das Design, das den Fehler möglich gemacht hat. Keine der beiden Rollen ersetzt die Sorgfaltspflicht derjenigen, die über den Aufbau des Systems entscheiden.

## Wie viel Autonomie vertretbar ist, je nachdem was die Aktion berührt

| | Nur lesende Abfragen | Schreibvorgänge mit Bestätigung | Autonome Schreibvorgänge |
|---|---|---|---|
| Unkontrollierter Text im Kontext | ✓ Vertretbar | ~ Nur mit echter Bestätigung | ✗ Vereint alle drei Eigenschaften |
| Erreicht Daten nach Artikel 9 | ~ Mit geringsten Rechten | ~ Mit geringsten Rechten | ✗ Nicht vertretbar |
| Ohne Datenbank-Restore rückgängig | ✓ Nichts zurückzunehmen | ✓ Ja | ✗ Je nach Operation |
| Artikel 22 im Spiel | ✓ Nein | ~ Je nach Wirkung auf den Patienten | ✗ Ja, wenn er den Patienten betrifft |
| Auf wen das Protokoll zeigt | Auf die fragende Person | Auf Fragende und Bestätigende | Auf niemanden |

Die letzte Spalte ist kein Fall, den man besser bauen sollte. Es ist ein Fall, den man nicht baut, solange die anderen beiden Eigenschaften bestehen.

## Das Protokoll muss die Entscheidung rekonstruieren, nicht nur den Schreibvorgang

Das `UPDATE` zu speichern genügt nicht. Rekonstruierbar sein muss die ganze Kette: was gefragt wurde, was das Modell vorschlug, was validiert wurde, wer bestätigt hat und welche Daten sich bewegt haben.

Die spanischen Orientierungen nennen das Nachvollziehbarkeit der Daten über ihren gesamten Lebenszyklus und verlangen Protokolle über die verarbeiteten Informationen, die genutzten Quellen und die einbezogenen Dienste. Die französische CNIL fordert dasselbe aus Nutzersicht: für jede ausgeführte Aufgabe sollten die verwendeten personenbezogenen Daten, die beteiligten Agenten, die aufgerufenen Drittdienste und deren zeitliche Reihenfolge erkennbar sein.

![Patientenakte in Dentalpin, Reiter Aktivität, mit der nach Terminen, Behandlungen und Kommunikation filterbaren Chronik](/screenshots/patient-timeline.png)

*In der Chronik der Patientenakte muss eine Änderung des Agenten genauso auftauchen wie jede andere.*

## Was wir dem Modell bewusst nicht gegeben haben

Den Umfang zu beschneiden hat mehr Risiko entfernt als jede nachträgliche Maßnahme.

- **Klinischer Freitext verlässt die Praxis nicht.** Patientenkennungen werden vor dem Versand an den KI-Anbieter durch deterministische Token ersetzt, und Freitext aus der Behandlungsdokumentation bleibt ganz von diesem Weg fern.
- **Keine Diagnose, keine Therapieempfehlung.** Eine Behandlung vorzuschlagen verändert, was das Produkt ist, und die Pflichten, die daran hängen. Terminkalender, Zahlungen, Recalls und Suchen sind das nicht.
- **Keine eigenständige Aktion auf Daten.** Die Morgenübersicht entsteht aus deterministischen Abfragen, ohne LLM und ohne Patientendaten, die nach außen gehen. Das ist die nützlichste Lehre des Projekts: ein guter Teil dessen, was man von einem Agenten erwartet, braucht überhaupt kein Modell.

## Vor dem Produktivgang

1. **Schreiben Sie die Liste der Operationen auf**, die der Agent aufrufen darf, und begründen Sie jede. Passt sie nicht auf eine Seite, ist sie zu groß.
2. **Testen Sie eine indirekte Injektion**: Stellen Sie Anweisungen in ein Freitextfeld, das ein Patient füllt, und prüfen Sie, dass der Agent ihnen nicht folgt. Die spanischen Orientierungen unterscheiden direkte von indirekter Injektion, die Anweisungen in den Quellen versteckt, die der Agent liest.
3. **Versuchen Sie eine Rechteausweitung**: melden Sie sich mit einem eingeschränkten Konto an und fragen Sie nach etwas außerhalb seines Bereichs. Tut der Agent es, saß die Prüfung an der falschen Stelle.
4. **Lesen Sie das Protokoll eines ganzen Gesprächs** und prüfen Sie, ob ein Dritter den Ablauf rekonstruieren könnte.
5. **Zählen Sie die Bestätigungen pro Tag.** Sind es viele, verfällt die Aufsicht von selbst, und das ist ein Designproblem, kein Personalproblem.
6. **Dokumentieren Sie, was zum KI-Anbieter geht**, auf welcher Rechtsgrundlage und unter welchem Vertrag nach Artikel 28.

Bei Dentalpin arbeitet der Agent genau so: er ruft dieselben Operationen wie die Oberfläche auf, prüft die Berechtigungen am Ausführungspunkt erneut, tokenisiert Patientendaten vor dem Versand, hält bei jedem Schreibvorgang für eine Bestätigung an und legt jeden Aufruf im Audit-Log ab. Wenn Sie das auf Ihrem eigenen Server ansehen möchten, stehen die Bedingungen unter [Preise](/de/preise/).

## Quellen

- Konferenz der unabhängigen Datenschutzaufsichtsbehörden des Bundes und der Länder (DSK), *Künstliche Intelligenz und Datenschutz*, Orientierungshilfe vom 6. Mai 2024, Version 1.0, Abschnitt 1.6 "Keine automatisierte Letztentscheidung". [datenschutzkonferenz-online.de](https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf). Abgerufen am 17. August 2026.
- AEPD (spanische Aufsichtsbehörde), *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2, Februar 2026: Rule of 2 (S. 41-43), Artikel 22 (S. 39-40), Prompt-Injection (S. 51-52), Nachvollziehbarkeit (S. 68-69), Rechteverwaltung (S. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Abgerufen am 17. August 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles*, Juli 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Abgerufen am 17. August 2026.
- Verordnung (EU) 2016/679 (DSGVO), Artikel 9, 22, 28 und 32.

Dies ist keine Rechtsberatung. Trifft Ihr System Entscheidungen, die Patienten betreffen, prüfen Sie den konkreten Fall vor dem Produktivgang mit Ihrer Datenschutzbeauftragten.
