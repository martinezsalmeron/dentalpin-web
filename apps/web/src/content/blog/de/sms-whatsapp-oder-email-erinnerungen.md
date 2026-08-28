---
title: "SMS, WhatsApp oder E-Mail: was eine Terminerinnerung wirklich kostet"
description: "Eine SMS nach Deutschland kostet rund 700 Mal so viel wie eine E-Mail, ein typografisches Anführungszeichen verdoppelt die Rechnung. Veröffentlichte Tarife."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [terminerinnerungen, sms, whatsapp, email, kosten, terminkalender]
---

Eine Erinnerung per E-Mail kostet 0,00016 Dollar, eine per WhatsApp weniger als einen Cent, und eine SMS an eine deutsche Mobilnummer kostet im veröffentlichten Twilio-Tarif 0,112 Dollar, also rund 700 Mal so viel wie die E-Mail. Das ist die kurze Antwort. Was Ihre Rechnung wirklich bestimmt, ist nicht der Kanal, sondern wie viele Nachrichten Sie pro Termin verschicken, ob im Text ein Emoji oder ein typografisches Anführungszeichen steckt, und wie viele Patienten antworten.

Alle Preise unten stammen von der Tarifseite des jeweiligen Anbieters, abgerufen am 28. August 2026. Keine Schätzung, kein Vergleichsportal.

> **Deutschland ist in dieser Aufstellung das teuerste SMS-Ziel.** 0,112 Dollar pro Segment sind das Zweieinhalbfache des polnischen Tarifs. Wer Preise aus einem internationalen Artikel übernimmt, rechnet die eigene Praxis systematisch zu günstig.

## Was eine Nachricht kostet, Kanal für Kanal

Drei verschiedene Abrechnungslogiken, und darin steckt schon die halbe Geschichte.

| Kanal | Preis pro Nachricht | Abrechnung | Empfängt Antworten? |
|---|---|---|---|
| E-Mail (Amazon SES, Tarif Essentials) | 0,16 $ je 1.000 Sendungen | Pro versendeter E-Mail, ob zugestellt oder nicht | ✓ Ja |
| WhatsApp (Twilio plus Meta-Tarif) | 0,005 $ Twilio, plus Meta-Tarif | Nur wenn die Vorlage zugestellt wird | ✓ Ja |
| SMS nach Deutschland (Twilio) | 0,112 $ | Pro Segment, nicht pro Nachricht | ~ Nur beim Versand über eine Nummer |

Die rechte Spalte schaut sich vor der Unterschrift fast niemand an, und genau sie bricht den Ablauf "Antworten Sie mit JA zur Bestätigung". Dazu unten mehr.

Die SMS ist der einzige Kanal, dessen Preis vom Zielland abhängt. Das sind die von Twilio veröffentlichten Tarife für die Nachbarmärkte:

| Ziel | Preis pro Segment |
|---|---|
| Polen | 0,0457 $ |
| Portugal | 0,0501 $ |
| Vereinigtes Königreich | 0,056 $ |
| Frankreich | 0,0798 $ |
| Spanien | 0,0875 $ |
| Italien | 0,0927 $ |
| Deutschland | 0,112 $ |

Dieselbe Erinnerung kostet nach Deutschland zweieinhalb Mal so viel wie nach Polen. Bei Patienten mit ausländischer Mobilnummer zahlen Sie den Unterschied bereits heute.

## Ein Anführungszeichen kann die SMS-Rechnung verdoppeln

Hier steckt der teure Fehler, und die Software macht ihn nicht. Ihn macht, wer die Vorlage schreibt.

Eine SMS wird nicht pro Nachricht abgerechnet, sondern pro Segment. In der GSM-7-Kodierung passen 160 Zeichen in ein Segment, und 153 pro Segment, sobald die Nachricht in mehrere geteilt wird, weil sieben Zeichen für den verbindenden Header draufgehen.

Sobald ein Zeichen vorkommt, das GSM-7 nicht abbilden kann, wechselt die ganze Nachricht in die UCS-2-Kodierung und das Limit fällt auf 70 Zeichen, beziehungsweise 67 pro Segment bei geteilten Nachrichten. Twilio nennt vier Auslöser: Emojis, nicht lateinische Schriften, erweiterte lateinische Zeichen sowie typografische Anführungszeichen und Apostrophe.

Für deutsche Texte ist das eine gute Nachricht: ä, ö und ü gehören zum GSM-7-Zeichensatz, eine Terminerinnerung in korrektem Deutsch bleibt also im günstigen Segment. Anders als im Spanischen oder Polnischen sind hier nicht die Umlaute das Problem, sondern das typografische Anführungszeichen.

> **Das typografische Anführungszeichen ist teurer als das Emoji, weil es niemand sieht.** Ein in Word geschriebener und in die Vorlage kopierter Text bringt typografische Apostrophe unbemerkt mit, und aus einer 90 Zeichen langen Erinnerung werden zwei Segmente. Bei 800 Erinnerungen im Monat sind das 179,20 $ statt 89,60 $.

Zwei Prüfungen, die jeden Monat Geld wert sind:

- **Zählen Sie die Zeichen der fertig gefüllten Vorlage**, mit dem längsten Patientennamen aus Ihrer Kartei darin, nicht mit dem Beispieltext.
- **Schreiben Sie die Vorlage in einem reinen Texteditor.** Die Textverarbeitung ersetzt Anführungszeichen und Striche ohne Hinweis.

Twilio berechnet zusätzlich 0,001 $ für jede Nachricht, die im Status "fehlgeschlagen" endet. Eine ungepflegte Nummernliste hat also ebenfalls einen Preis, wenn auch einen kleinen.

![Tagesansicht des Terminkalenders mit den Terminen jedes Behandlers, den Uhrzeiten und dem Status](/screenshots/schedule-day.png)

*Ein Tag im Terminkalender. Jeder Termin auf diesem Bildschirm ist mindestens eine Nachricht pro Monat auf der Rechnung.*

## Bei WhatsApp hängt der Preis davon ab, ob der Patient antwortet

Meta hat das Modell am 1. Juli 2025 umgestellt und rechnet seither pro Nachricht ab, nicht mehr pro 24-Stunden-Konversation. Berechnet wird bei Zustellung der Vorlage, nicht beim Versand.

Vorlagen werden in Marketing, Utility und Authentifizierung eingeteilt, und eine Terminerinnerung ist Utility. Schwer vorhersehbar wird der Preis durch das, was Meta kostenlos lässt:

- **Alles innerhalb eines offenen Kundenservice-Fensters.** Nachrichten ohne Vorlage und Utility-Vorlagen werden nicht berechnet, solange dieses Fenster offen ist, und geöffnet wird es vom Patienten, wenn er Ihnen schreibt.
- **Free-Entry-Point-Fenster dauern 72 Stunden**, und darin wird keine Nachricht berechnet, Vorlagen eingeschlossen. Sie öffnen sich über eine Click-to-WhatsApp-Anzeige oder den Call-to-Action-Button einer Seite.
- **Mengenstufen senken den Tarif** für Utility und Authentifizierung je nach Monatsvolumen. Sie gelten je Markt und Kategorie, werden über das gesamte Unternehmensportfolio hinweg zusammengerechnet und setzen sich monatlich zurück.

Die praktische Folge ist kontraintuitiv: Eine Erinnerung, die zur Antwort einlädt, ist günstiger als eine stumme, denn die Antwort öffnet das Fenster und die nächste Nachricht dieser Konversation ist kostenlos.

Meta veröffentlicht die Tarife je Markt und Währung als herunterladbare Tarifkarten, mit den seit dem 1. Juli 2026 geltenden Beträgen, als Spanien, Italien, Polen und das Vereinigte Königreich vom Regional- auf einen eigenen Markttarif wechselten. Darauf legt Ihr Anbieter seinen eigenen: Twilio berechnet 0,005 $ pro Nachricht, denselben Betrag für alle Märkte, und reicht den Meta-Tarif durch.

**Die Versandlimits betreffen Sie mit hoher Wahrscheinlichkeit nicht.** WhatsApp staffelt, wie viele verschiedene Nummern Sie innerhalb von rollierenden 24 Stunden außerhalb eines Servicefensters anschreiben dürfen: 250, dann 2.000, dann 10.000, 100.000 und unbegrenzt. Eine Praxis mit vierzig Terminen am Tag schreibt an vierzig Nummern, die erste Stufe reicht also bei Weitem. Der Aufstieg erfolgt automatisch, wenn die Qualität stimmt und Sie in den letzten sieben Tagen mindestens die Hälfte Ihres Limits genutzt haben, und greift innerhalb von sechs Stunden.

## Der günstigste Kanal ist zugleich der, der am schlechtesten ankommt

Mit 0,16 $ je tausend spielt die E-Mail in einer eigenen Liga: rund hundert Mal günstiger als alles andere. Der Haken ist, dass der Preis pro Versand anfällt und die Zustellung nicht enthalten ist.

Gmail und Yahoo haben ihre Anforderungen im Februar 2024 verschärft und sind heute der eigentliche Filter. Es lohnt sich, zu trennen, was für alle gilt und was nur für Großversender, denn die meisten Artikel dazu vermischen beides.

| Anforderung | Für wen | Was verlangt wird |
|---|---|---|
| SPF oder DKIM | ✓ Für alle Absender | Mindestens eines von beiden, immer |
| SPF, DKIM und DMARC | ~ Erst ab 5.000 täglich an Gmail | Alle drei, DMARC auch mit `p=none` |
| Abmeldung mit einem Klick | ~ Erst ab 5.000 täglich | `List-Unsubscribe`-Header mit Ein-Klick-Abmeldung |
| Spam-Rate | ✓ Für alle | Unter 0,3 % in den Postmaster Tools |

> **Die Schwelle von 5.000 Nachrichten am Tag ist nicht Ihre, und dort wird es auch nicht scheitern.** Keine Praxis kommt annähernd dorthin. Ab der ersten E-Mail gelten dagegen die Domain-Authentifizierung und die Beschwerderate, und genau daran verschwindet eine Erinnerung, die aus einem kostenlosen Postfach ohne SPF und DKIM verschickt wird.

Google empfiehlt zusätzlich, unter 0,10 % Beschwerden zu bleiben und sich 0,30 % nie zu nähern. Yahoo verlangt dieselbe Obergrenze von 0,3 % und die Bearbeitung von Abmeldungen binnen zwei Tagen. Das sind niedrige Schwellen: Bei 800 E-Mails im Monat bringen drei Patienten mit einem Klick auf "Spam" Sie schon auf 0,375 %.

## Der schöne Absender ist der, der keine Antworten empfangen kann

Eine alphanumerische Absenderkennung ist das "ZAHNARZT", das statt einer Nummer erscheint. Twilio bietet sie in 150 Ländern kostenlos an, mit einer Einschränkung, die den ganzen Ablauf bestimmt: Sie kann SMS nur senden, niemals empfangen.

Wenn in Ihrer Erinnerung steht "Antworten Sie mit JA zur Bestätigung", läuft diese Antwort bei einer alphanumerischen Kennung ins Leere. Um sie zu empfangen, müssen Sie eine Nummer mieten, und die kostet. Twilio veröffentlicht diese monatlichen Mietpreise:

- **Vereinigtes Königreich**, Mobilnummer: 2,50 $ im Monat.
- **Deutschland**, Mobilnummer: 30 $ im Monat.
- **Italien**, Mobilnummer: 45 $ im Monat.
- **Portugal**, Mobilnummer: 135 $ im Monat.

Für eine deutsche Praxis sind 30 $ im Monat verkraftbar, aber sie kommen zu den Nachrichtenkosten hinzu und stehen selten im Angebot. WhatsApp und E-Mail haben dieses Problem nicht, beide sind vom ersten Tag an beidseitig.

## Was das in einem echten Monat ergibt

Nehmen wir eine Praxis mit vierzig Terminen am Tag, fünfeinhalb Tage die Woche: rund 800 Erinnerungen im Monat, eine pro Termin. Zu den oben veröffentlichten Tarifen, ohne die Marge Ihres Anbieters:

| Kanal | 800 Erinnerungen im Monat |
|---|---|
| E-Mail | 0,13 $ |
| WhatsApp, nur der Twilio-Anteil | 4,00 $ plus Meta-Tarif |
| SMS nach Deutschland, ein Segment | 89,60 $ |
| SMS nach Deutschland, zwei Segmente | 179,20 $ |

Die untere Zeile ist kein Ausnahmefall. Sie tritt ein, wenn jemand den Text aus Word einfügt oder wenn die Nachricht die Praxisadresse enthält und über 160 Zeichen hinausgeht.

Kommt eine zweite Erinnerung am selben Tag hinzu, verdoppeln sich alle Zahlen erneut. Diese Entscheidung, eine Nachricht oder zwei, bewegt mehr Geld als die Wahl des Kanals.

![Patientenakte mit dem nach Besuchen, Behandlungen, Finanzen und Kommunikation filterbaren Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Patientenakte mit Kommunikation als Filter. Hier prüft man, ob eine Nachricht zugestellt oder nur versendet wurde.*

## Wie Sie die Kanäle aufteilen, ohne es kompliziert zu machen

1. **Fragen Sie den bevorzugten Kanal beim ersten Termin ab** und hinterlegen Sie ihn in der Akte. Das ist das Feld, das die meisten Beschwerden verhindert und das fast niemand erfasst.
2. **Setzen Sie die E-Mail als Standard** für die Erinnerung im Voraus, denn zu diesem Preis kann sie ohnehin an alle gehen.
3. **Behalten Sie die SMS für den Hinweis am selben Tag**, wo sich die Kosten pro Nachricht gegen den Wert des Termins leicht rechtfertigen lassen.
4. **Nutzen Sie WhatsApp dort, wo Ihre Patienten es ohnehin nutzen**, und formulieren Sie die Vorlage als Einladung zur Antwort: Das bestätigt den Termin und öffnet zugleich das kostenlose Fenster.
5. **Prüfen Sie die SMS-Vorlage einmal im Quartal** mit Zeichenzählung, mit dem längsten Namen aus Ihrer Kartei darin.
6. **Messen Sie Zustellungen, nicht Versendungen.** Ein Bericht mit "800 versendet" sagt nichts; entscheidend ist, wie viele zugestellt wurden und wie viele fehlschlugen.

Die Zahl, die Ihnen keine Tabelle liefert, ist die Anzahl der Nachrichten, die Ihre Software pro Termin ungefragt verschickt. Sie einen Monat lang zu zählen lohnt sich, bevor Sie über Tarife verhandeln.

In Dentalpin liegen Terminkalender, Patientenakte und Kommunikationsprotokoll in derselben Datenbank, sodass die Zählung des Versendeten und des Zugestellten aus derselben Quelle kommt wie der Terminkalender selbst, und die Software ist Open Source, einsehbar über die [Preise](/de/preise/). Davon abgesehen hängt der Teil dieses Artikels, der wirklich Geld spart, nicht vom Programm ab, sondern vom Zeichenzählen und davon, nicht drei Nachrichten zu schicken, wo eine genügt.

## Quellen

- SMS-Preise von Twilio nach Land, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/de), Seiten für Deutschland, Spanien, Frankreich, Portugal, Italien, Polen und das Vereinigte Königreich, abgerufen am 28. August 2026.
- WhatsApp-Preise bei Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), abgerufen am 28. August 2026.
- Zeichenbegrenzung und Segmente einer SMS, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), abgerufen am 28. August 2026.
- GSM-7-Zeichensatz, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), abgerufen am 28. August 2026.
- Preise der WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), abgerufen am 28. August 2026.
- Versandlimits der WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), abgerufen am 28. August 2026.
- Preise von Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), abgerufen am 28. August 2026.
- Google-Richtlinien für E-Mail-Absender, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), abgerufen am 28. August 2026.
- Yahoo Best Practices für Absender, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), abgerufen am 28. August 2026.
