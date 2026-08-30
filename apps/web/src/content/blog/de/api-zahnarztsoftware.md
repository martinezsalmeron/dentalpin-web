---
title: "Die API Ihrer Zahnarztsoftware: was Sie mit Ihren eigenen Daten tun können sollten"
description: "Was eine API in der Praxisverwaltungssoftware leisten muss: lesen, schreiben, benachrichtigen, gehen lassen. Die Fragen vor der Unterschrift und ein Test."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, schnittstellen, vertrag, datenexport, dsgvo]
---

Sie sollten von außerhalb des Programms lesen und schreiben können, was die Praxis trägt: Patienten, Termine, Kostenvoranschläge und Rechnungen. Mit Ihren eigenen Zugangsdaten, ohne jemanden um Erlaubnis zu fragen und ohne ein separates Modul zu buchen. Das ist die praktische Prüfung, und kaum eine Zahnarztsoftware besteht sie vollständig.

Das Gesetz garantiert Ihnen deutlich weniger, aber es garantiert etwas. Man sollte wissen, was, bevor man in die Verhandlung geht.

## Eine API ist die zweite Tür des Programms

Der Bildschirm ist die Tür für Menschen. Die API ist die Tür für andere Programme, mit demselben Schloss und denselben Rechten.

Wo sie existiert, schreibt das Buchungsformular der Praxiswebsite direkt in den Terminkalender und niemand tippt etwas nach. Wo sie fehlt, wird jede Schnittstelle zu einer Person, die Daten von einem Bildschirm auf den anderen überträgt.

![Patientenakte am Bildschirm mit Stammdaten, Kontaktdaten und Abrechnungsdaten](/screenshots/patients.png)

*Eine Patientenakte mit Stammdaten, Kontaktdaten und Abrechnungsdaten in Reitern.*

## Die vier Dinge, die eine API können muss

- **Lesen.** Die Patientenliste ziehen, die Termine eines Zeitraums, die angenommenen Kostenvoranschläge des Quartals. Das speist jede Auswertung und jedes Dashboard.
- **Schreiben.** Einen Termin anlegen, einen Patienten aufnehmen, eine Rechnung als bezahlt markieren. Ohne Schreibzugriff taugt eine Schnittstelle zum Ansehen und sonst wenig.
- **Bescheid geben.** Ein Webhook ist das Programm, das Ihr System anruft, wenn etwas passiert, statt Ihres Systems, das alle fünf Minuten fragt, ob etwas passiert ist.
- **Sie gehen lassen.** Ein vollständiger Download von allem, der nicht die API ist und sie nicht ersetzt.

> **Eine API ist keine Datensicherung und kein Export.** Sie bewegt einen Datensatz jetzt, sie baut die Praxis nicht an dem Morgen wieder auf, an dem der Server nicht startet. Wird Ihnen die API als Antwort auf „wie komme ich an meine Daten" verkauft, fehlt die halbe Antwort.

## Was das Gesetz garantiert und was nicht

Hier steckt eine teure Verwechslung. Das Recht auf Datenübertragbarkeit aus der DSGVO gehört dem Patienten, nicht der Praxis.

Artikel 20 Absatz 1 gibt der betroffenen Person das Recht, die sie betreffenden personenbezogenen Daten „in einem strukturierten, gängigen und maschinenlesbaren Format" zu erhalten und einem anderen Verantwortlichen zu übermitteln. Absatz 2 ergänzt das Recht, die Daten direkt von Verantwortlichem zu Verantwortlichem übermitteln zu lassen, „soweit dies technisch machbar ist". Artikel 15 Absatz 3 verpflichtet zur Herausgabe einer Kopie, in einem gängigen elektronischen Format, wenn der Antrag elektronisch gestellt wird.

In einer Zahnarztpraxis sind in der Regel Sie der Verantwortliche und Ihr Softwareanbieter der Auftragsverarbeiter. Der Patient macht dieses Recht also gegenüber der Praxis geltend, und die Praxis braucht eine Software, die es erfüllen kann. Die DSGVO allein verschafft Ihnen keine API gegenüber Ihrem Anbieter.

Was Ihnen dort etwas verschafft, ist der europäische Datenrechtsakt, der Data Act (Verordnung (EU) 2023/2854), anwendbar seit dem 12. September 2025:

- **Offene Schnittstellen, kostenlos.** Artikel 30 Absatz 2 verpflichtet Anbieter von Datenverarbeitungsdiensten, allen Kunden offene Schnittstellen unentgeltlich bereitzustellen, mit ausreichenden Informationen, „um die Entwicklung von Software zu ermöglichen, die mit den Diensten kommuniziert".
- **Export beim Wechsel.** Artikel 30 Absatz 5 verpflichtet dazu, auf Verlangen des Kunden alle exportierbaren Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu exportieren.
- **Keine Wechselentgelte ab 2027.** Artikel 29 Absatz 1 verbietet Wechselentgelte ab dem 12. Januar 2027. Bis dahin sind ermäßigte Entgelte zulässig, begrenzt auf die tatsächlichen Kosten.

> **Diese Pflichten betreffen den Anbieterwechsel, nicht Ihre tägliche Automatisierung.** Und sie gelten für das, was die Verordnung Datenverarbeitungsdienst nennt und in Artikel 2 Nummer 8 im Kern als Cloud-Dienst definiert. Läuft Ihre Software lizenziert auf einem Server in der Praxis, ist dieses Kapitel nicht Ihr Hebel. Ihr Hebel ist der Vertrag.

Dies ist keine Rechtsberatung. Fundstellen und Abrufdaten stehen am Ende.

## Export, API und Webhooks lösen verschiedene Probleme

| | Export | API | Webhooks |
|---|---|---|---|
| Wofür | Alles mitnehmen | Einen Datensatz jetzt bewegen | Erfahren, dass etwas passiert ist |
| Wie oft | ✓ Einmalig oder monatlich | ✓ Laufend | ✓ Im Moment des Ereignisses |
| Taugt zum Wechsel | ✓ Ja, dafür ist er da | ~ Langsam und stückweise | ✗ Nein |
| Taugt zur Anbindung | ✗ Nein | ✓ Ja | ✓ Ja |
| Taugt als Datensicherung | ~ Nur außerhalb gelagert | ✗ Nein | ✗ Nein |
| Meist enthalten | ✓ Fast immer | ~ Je nach Anbieter | ~ Je nach Anbieter |

## Sieben Fragen vor der Unterschrift

1. **Wo ist die Dokumentation, und kann ich sie jetzt lesen, ohne etwas zu unterschreiben?** Eine öffentliche URL, die Sie heute öffnen, sagt mehr als jede Vertriebsantwort. Kommt ein PDF, fragen Sie nach dem Jahr.
2. **Ist sie im Preis enthalten oder ein eigenes Modul?** Und wenn eigenes Modul: was es kostet und welches Abrufkontingent gilt. Eine nach Nutzung abgerechnete API verändert den Zuschnitt von allem, was Sie darauf bauen.
3. **Ist sie nur lesend?** Die Hälfte des Werts steckt im Schreiben. Eine lesende API kann den Termin nicht anlegen, den ein Patient gerade auf Ihrer Website gebucht hat.
4. **Welche Objekte deckt sie genau ab?** Patienten, Termine, Kostenvoranschläge, Leistungen, Rechnungen, Dokumente, Zahnschema. Lassen Sie sich die Liste geben, nicht das Versprechen, und prüfen Sie, ob die Patientenakte darin vorkommt.
5. **Gibt es Webhooks und welche Ereignisse werden ausgelöst?** Ohne sie fragt jede Anbindung im Dauertakt nach, und das ist der kürzeste Weg in ein Abruflimit.
6. **Wie lauten die Limits?** Aufrufe pro Minute, Seitengröße, Anzahl der Zugangsdaten. Ein veröffentlichtes Limit ist ein gutes Zeichen; ein Limit, das Ihnen niemand nennen kann, lernen Sie im Betrieb kennen.
7. **Was passiert an dem Tag, an dem ich gehe?** Dass die API während der Kündigungsfrist aktiv bleibt, mit vollem Lesezugriff, gehört neben die Exportklausel in den Vertrag.

## Fünf Dinge, die sich mit einer API von selbst erledigen

- **Die Website schreibt in den Terminkalender.** Der Patient bucht, der Termin erscheint, abends überträgt niemand etwas nach.
- **Die Quartalszahlen für den Steuerberater.** Eine Auswertung, die sich am Ersten selbst erzeugt, statt eines Nachmittags mit Export und Handabgleich.
- **Erinnerungen über den Kanal, den Sie schon nutzen.** Ist Ihr Messaging-Anbieter nicht angebunden, binden Sie ihn mit einer API selbst an. Ohne API warten Sie auf den Hersteller.
- **Ein eigenes Kennzahlen-Dashboard.** Stuhlauslastung, Annahmequote der Kostenvoranschläge und offene Posten, nach Ihren Definitionen statt denen des Herstellers.
- **Dubletten im Block bereinigen.** Sie über die ganze Datenbank zu finden, dauert eine halbe Stunde. Bildschirm für Bildschirm dauert es einen Monat.

![Tagesansicht des Terminkalenders mit Terminen in Spalten und Zeitfenstern](/screenshots/schedule-day.png)

*Der Terminkalender in der Tagesansicht, mit Terminen in Spalten und Zeitfenstern.*

## Wie Sie sie in zwanzig Minuten testen, ohne zu programmieren

1. **Fragen Sie nach der URL der Dokumentation.** Öffnen Sie sie vor dem Vertrieb auf dem Telefon. Entweder sie lädt, oder Sie wissen schon etwas.
2. **Suchen Sie den Abschnitt zur Authentifizierung.** Er muss erklären, wie man Zugangsdaten erhält, ohne den Support anzurufen.
3. **Bitten Sie um eine Testumgebung.** Der erste Aufruf geht nie gegen die echten Praxisdaten.
4. **Kopieren Sie das Beispiel aus der Dokumentation.** Fast alle liefern eine Zeile zum Einfügen ins Terminal:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.beispiel.de/v1/patients
```

5. **Testen Sie einen Schreibzugriff.** Einen Testtermin anzulegen und ihn im Kalender auftauchen zu sehen, ist der Moment, in dem Sie wissen, ob die Anbindung echt ist.
6. **Suchen Sie in der Dokumentation nach „Limit".** Steht es nicht da, fragen Sie schriftlich nach und heben Sie die Antwort auf.

Wenn einer dieser sechs Schritte einen Termin erfordert, ist auch das eine Antwort.

## Wo DentalPin steht

Bei DentalPin stellt jede Funktion einen REST-Endpunkt bereit, dokumentiert mit OpenAPI, im Preis enthalten und mit Webhooks, weil das Produkt auf Ihrem eigenen Server läuft und eine Anbindung nicht davon abhängen sollte, dass wir sie freigeben. Was enthalten ist, steht unter [Preise](/de/preise/).

## Quellen

- Verordnung (EU) 2016/679 (DSGVO), Artikel 15 Absatz 3, Artikel 20 Absatz 1 und Absatz 2: [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679). Abgerufen am 30. August 2026.
- Verordnung (EU) 2023/2854 (Data Act), Artikel 2 Nummer 8, Artikel 29 Absatz 1 und 2, Artikel 30 Absatz 2 und 5, Artikel 50: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R2854). Abgerufen am 30. August 2026.
