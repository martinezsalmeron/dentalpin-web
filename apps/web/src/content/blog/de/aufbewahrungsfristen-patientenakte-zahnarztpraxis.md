---
title: "Wie lange muss die Zahnarztpraxis die Patientenakte aufbewahren und wie wird sie danach vernichtet"
description: "Zehn Jahre nach § 630f BGB, Röntgenaufnahmen nach eigener Frist, und warum viele Praxen länger aufbewahren. Welche Frist für welches Dokument gilt und was Löschen technisch heißt."
pubDate: 2026-09-16
translationKey: conservar-historia-clinica-dental-plazos
tags: [patientenakte, aufbewahrungsfristen, dsgvo, praxisverwaltungssoftware]
---

Zehn Jahre nach Abschluss der Behandlung, so steht es in § 630f Absatz 3 BGB. Der Satz endet aber mit einer Einschränkung, die in Zusammenfassungen gern verschwindet: "soweit nicht nach anderen Vorschriften andere Aufbewahrungsfristen bestehen". Für eine Zahnarztpraxis greift genau diese Einschränkung, denn Röntgenaufnahmen haben ihre eigene Frist, und die kann bis zum 28. Geburtstag des Patienten laufen.

Der zweite Teil des Problems ist kein juristischer. Eine Aufbewahrungsfrist ist wertlos, wenn niemand abfragen kann, welche Akten sie erreicht haben, und "löschen" ist bei einem Datensatz, der noch in drei Sicherungen liegt, keine Selbstverständlichkeit.

## Die Grundfrist steht in § 630f Absatz 3 BGB

Der Wortlaut ist kurz: "Der Behandelnde hat die Behandlungsakte für die Dauer von zehn Jahren nach Abschluss der Behandlung aufzubewahren, soweit nicht nach anderen Vorschriften andere Aufbewahrungsfristen bestehen."

Zwei Details entscheiden in der Praxis. Die Frist beginnt mit dem Abschluss der Behandlung, nicht mit der Anlage der Akte, und sie ist eine Mindestfrist, keine Löschpflicht zum Stichtag.

Was in die Akte gehört, regelt derselbe Paragraf in Absatz 2: sämtliche fachlich wesentlichen Maßnahmen und ihre Ergebnisse, "insbesondere die Anamnese, Diagnosen, Untersuchungen, Untersuchungsergebnisse, Befunde, Therapien und ihre Wirkungen, Eingriffe und ihre Wirkungen, Einwilligungen und Aufklärungen".

> **Die Einwilligungen sind Teil der Akte, nicht ein Ordner daneben.** In vielen Praxen liegen unterschriebene Aufklärungsbögen außerhalb der Software, und genau sie sind das Dokument, das im Streitfall gebraucht wird.

## Röntgenaufnahmen haben eine eigene Uhr

Das ist die Vorschrift, auf die § 630f verweist, und für eine Zahnarztpraxis ist sie die wichtigere. § 85 Absatz 2 des Strahlenschutzgesetzes verlangt, dass Aufzeichnungen, Röntgenbilder, digitale Bilddaten und sonstige Untersuchungsdaten aufbewahrt werden:

- **Bei Untersuchungen einer volljährigen Person** für eine Dauer von zehn Jahren.
- **Bei einer minderjährigen Person** bis zur Vollendung ihres 28. Lebensjahres.
- **Bei Behandlungen** für eine Dauer von 30 Jahren.

Für eine Praxis mit Kinderbehandlung heißt das konkret: das Bissflügelbild eines Achtjährigen bleibt zwanzig Jahre im Haus, während die übrige Akte desselben Kindes nach zehn Jahren die BGB-Frist erfüllt hätte.

Derselbe Absatz regelt noch etwas, das bei einer Praxisabgabe zählt. Die zuständige Behörde kann verlangen, dass die Aufzeichnungen und Bilddaten "im Falle der Praxisaufgabe oder sonstigen Einstellung des Betriebes" unverzüglich bei einer von ihr bestimmten Stelle hinterlegt werden.

| Unterlage | Vorschrift | Frist |
|---|---|---|
| Behandlungsakte | § 630f Abs. 3 BGB | 10 Jahre nach Abschluss der Behandlung |
| Röntgen, Untersuchung Erwachsener | § 85 Abs. 2 StrlSchG | 10 Jahre |
| Röntgen, Untersuchung Minderjähriger | § 85 Abs. 2 StrlSchG | Bis zur Vollendung des 28. Lebensjahres |
| Röntgen, Behandlung | § 85 Abs. 2 StrlSchG | 30 Jahre |

![Patientenakte mit geöffnetem Aktivitätsverlauf und den Einträgen zu Terminen, Behandlungen und Zahlungen](/screenshots/patient-timeline.png)

*Der Verlauf eines Patienten mit dem Datum jedes einzelnen Eintrags.*

## Warum viele Praxen trotzdem 30 Jahre aufbewahren

Der Grund steht nicht im Behandlungsvertragsrecht, sondern im Verjährungsrecht, und er wird oft als Gerücht weitergegeben statt als Norm zitiert.

Die regelmäßige Verjährungsfrist beträgt nach § 195 BGB drei Jahre. Für Behandlungsfehler ist aber § 199 Absatz 2 BGB einschlägig: "Schadensersatzansprüche, die auf der Verletzung des Lebens, des Körpers, der Gesundheit oder der Freiheit beruhen, verjähren ohne Rücksicht auf ihre Entstehung und die Kenntnis oder grob fahrlässige Unkenntnis in 30 Jahren."

Daraus folgt keine Aufbewahrungspflicht von 30 Jahren. Es folgt daraus, dass eine Praxis, die nach zehn Jahren vollständig löscht, im elften Jahr eine Behauptung nicht mehr widerlegen kann.

> **Das ist eine Abwägung, keine Rechtsfrage mit einer Antwort.** Längeres Aufbewahren senkt das Haftungsrisiko und erhöht das Datenschutzrisiko, und die DSGVO verlangt, dass die Praxis die gewählte Frist begründen kann.

## Das Datum, das zählt, ist der letzte Eintrag

Hier entscheidet sich, ob eine Frist umsetzbar ist oder nur in einem Verfahrensordner steht. Um zu wissen, welche Akten ihre Frist erreicht haben, braucht die Praxis eine Abfrage über das Datum des letzten Behandlungseintrags.

Die Abfrage, die Praxissoftware üblicherweise anbietet, ist eine andere: Patienten, die vor einem Stichtag angelegt wurden. Das liefert ein falsches Ergebnis, denn ein 2010 angelegter Patient kann vorgestern hier gewesen sein.

- **Datum des letzten Behandlungseintrags**, weil damit die Behandlung abgeschlossen ist.
- **Geburtsdatum**, weil die Röntgenfrist bei Minderjährigen daran hängt und nicht am Aufnahmedatum.
- **Kennzeichnung laufender Verfahren**, damit betroffene Akten von jeder Löschung ausgenommen sind.
- **Bilddaten getrennt betrachten**, weil sie meist in einem anderen Speicher liegen als die Akte.

## Was Vernichten technisch bedeutet

Auf Papier ist das ein Aktenvernichter. In einer Datenbank ist es eine Entscheidung mit mehreren Schritten, und der letzte wird fast immer vergessen.

1. **Löschen oder anonymisieren.** Eine unumkehrbare Anonymisierung nimmt den Datensatz aus dem Anwendungsbereich der DSGVO und erhält die Statistik, die die Praxis meist behalten will.
2. **Bilder und Anhänge einbeziehen.** Röntgenbilder, klinische Fotos und unterschriebene PDF liegen oft außerhalb der Datenbank und überleben das Löschen der Zeile.
3. **Den Sicherungszyklus mitrechnen.** Ein heute gelöschter Datensatz steht noch in der Sicherung von vorgestern, bis diese rotiert. Belastbar ist es, diesen Zeitraum dokumentiert zu haben, statt sofortige Löschung zu behaupten.
4. **Die Vernichtung dokumentieren.** Was, wann, nach welchem Kriterium und durch wen, ohne die gelöschten Daten dabei erneut aufzuschreiben.
5. **Das Verzeichnis von Verarbeitungstätigkeiten prüfen.** Artikel 30 DSGVO verlangt die vorgesehenen Löschfristen, und die dort eingetragene Frist sollte die sein, die tatsächlich ausgeführt wird.

Schritt vier ist der einzige, mit dem sich die Einhaltung später belegen lässt. Eine Vernichtung ohne Nachweis ist von einem Datenverlust nicht zu unterscheiden.

![Übersicht der verfügbaren Auswertungen in der Praxis](/screenshots/reports.png)

*Die Auswertungsübersicht, aus der Listen nach Datum erzeugt werden.*

## Was die Software dafür können muss

Nichts davon sieht in einer Vorführung gut aus, und deshalb wird es selten gezeigt. Es sind vier konkrete Punkte, und sie gehören vor die Unterschrift.

- **Nach dem Datum des letzten Behandlungseintrags suchen**, nicht nur nach dem Anlagedatum des Patienten.
- **Vollständig exportieren**, bevor vernichtet wird, damit die Unterlagen dem Patienten angeboten werden können statt einfach zu verschwinden.
- **Einen Patienten löschen oder anonymisieren**, ohne Buchhaltung und Rechnungen zu zerstören, für die eigene steuerliche Fristen gelten.
- **Den Vorgang protokollieren**, mit Benutzer und Zeitpunkt.

In Dentalpin hält die Akte das Datum des letzten Eintrags je Patient und ist danach abfragbar, das Löschen erfasst die zugehörigen Bilddaten und wird im Zugriffsprotokoll festgehalten. Der Quellcode ist offen einsehbar, die [Preise](/de/preise/) ebenfalls.

Dies ist keine Rechtsberatung. Die Frist, für die sich die Praxis entscheidet, gehört mit der Berufsordnung der zuständigen Zahnärztekammer und, wenn ein Verfahren anhängig ist, mit dem eigenen Rechtsbeistand abgeglichen.

## Quellen

- § 630f BGB, Dokumentation der Behandlung, gesetze-im-internet.de. Abgerufen am 16. September 2026. <https://www.gesetze-im-internet.de/bgb/__630f.html>
- § 195 und § 199 BGB, Verjährung, gesetze-im-internet.de. Abgerufen am 16. September 2026. <https://www.gesetze-im-internet.de/bgb/__199.html>
- § 85 Strahlenschutzgesetz, Aufzeichnungs- und Aufbewahrungspflichten, gesetze-im-internet.de. Abgerufen am 16. September 2026. <https://www.gesetze-im-internet.de/strlschg/__85.html>
- Verordnung (EU) 2016/679, Artikel 5 Absatz 1 Buchstabe e und Artikel 30. Abgerufen am 16. September 2026.
