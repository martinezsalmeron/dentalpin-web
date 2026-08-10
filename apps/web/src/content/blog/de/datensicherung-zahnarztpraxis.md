---
title: "Datensicherung in der Zahnarztpraxis: was gesichert wird und wie oft"
description: "Was in die Datensicherung einer Zahnarztpraxis gehört, wie oft sie laufen muss, wo die Kopien liegen und wie Sie beweisen, dass die Wiederherstellung wirklich funktioniert."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [datensicherung, sicherheit, dsgvo, praxis-it]
---

Sichern Sie die Datenbank und die angehängten Dateien täglich, halten Sie drei Kopien auf zwei verschiedenen Medien mit einer davon außerhalb der Praxis, und stellen Sie mindestens einmal im Jahr eine dieser Kopien wieder her, um zu prüfen, dass sie trägt. Wer noch nie wiederhergestellt hat, hat keine Datensicherung. Er hat eine Datei, von der er annimmt, dass sie in Ordnung ist.

Im Folgenden steht, was in diese Kopie gehört, in welchem Abstand sie sinnvoll ist und wie Sie das prüfen, ohne sich auf eine telefonische Zusage zu verlassen.

## Was in die Sicherung gehört, und was fast immer fehlt

Eine Zahnarztpraxis legt ihre Daten nicht an einer Stelle ab, sondern an zwei. In der Datenbank stehen Patienten, Terminkalender, Zahnschema, Behandlungspläne, Kostenvoranschläge und Rechnungen. Röntgenbilder, unterschriebene PDF und Scans liegen als Dateien, oft in einem anderen Ordner oder in einem anderen Dienst.

Eine Sicherung, die nur die Datenbank umfasst, wirkt vollständig, bis Sie sie zurückspielen und die Röntgenbilder fehlen.

| Was gesichert werden muss | Warum es zählt | Standardmäßig dabei? |
|---|---|---|
| Datenbank | Patienten, Terminkalender, Zahnschema, Kostenvoranschläge, Abrechnung | ✓ Fast immer |
| Röntgenbilder und klinische Aufnahmen | Teil der Patientenakte und fast der gesamte Speicherplatz | ✗ Werden wegen der Größe oft ausgenommen |
| Einwilligungen und unterschriebene Dokumente | Der Nachweis, dass die Einwilligung vorlag | ~ Je nachdem, wo die Software sie ablegt |
| Systemkonfiguration | Ohne sie dauert die Wiederherstellung Stunden länger | ✗ Selten |
| Schlüssel und Zertifikate der Abrechnung | Ohne sie können Sie nicht erneut abrechnen | ✗ Selten |

> **Sehen Sie sich die Größe der Sicherung an, bevor Sie ihr vertrauen.** Fünf Jahrgänge Röntgenbilder passen nicht in ein Archiv von 200 MB. Wiegt die Kopie von heute Nacht deutlich weniger als Ihre Daten, fehlt etwas, und Sie wissen bereits, was.

![Patientenakte mit Zahnschema, klinischen Warnhinweisen und laufendem Behandlungsplan](/screenshots/dental-chart.png)

*Das muss eine Wiederherstellung vollständig zurückbringen, nicht nur die Patientenliste.*

## Wie oft: die eigentliche Frage ist, wie viel Arbeit verloren gehen darf

Der Abstand richtet sich nicht nach Gewohnheit, sondern danach, wie viel Arbeit Sie bereit sind noch einmal zu machen. Zwischen der letzten Sicherung und dem Ausfall liegt eine Lücke, und die füllt jemand von Hand aus dem Gedächtnis.

| Abstand | Verlust im schlimmsten Fall | Für wen sinnvoll |
|---|---|---|
| Wöchentlich | Bis zu sechs Tage Dokumentation und Zahlungen | ✗ Für jede laufende Praxis zu wenig |
| Täglich, nachts | Ein Arbeitstag | ~ Das vernünftige Minimum |
| Alle paar Stunden | Ein halber Vormittag | ✓ Praxen mit mehreren Stühlen und hohem Durchsatz |
| Fortlaufend | Minuten | ✓ Wenn der Anbieter es ohne Zusatzaufwand anbietet |

Beziffern Sie diese Lücke. Behandlungsstühle mal Stunden mal durchschnittlicher Umsatz ist die Rechnung, die aus der Entscheidung einen wirtschaftlichen Vergleich macht statt einer Geschmacksfrage.

## Die 3-2-1-Regel, und warum die Kopie im selben Raum nicht zählt

Die US-Cybersicherheitsbehörde CISA fasst die anerkannte Praxis in drei Zahlen: drei Kopien jeder wichtigen Datei (eine primäre und zwei Sicherungen), auf zwei verschiedenen Medien, davon eine Kopie außerhalb des Gebäudes.

- **Drei Kopien**, weil die zweite ebenfalls ausfällt. Eine Sicherungsplatte, die am selben Tag gekauft wurde wie das Original, stirbt gern im selben Zeitraum.
- **Zwei verschiedene Medien**, weil derselbe Fehlerfall zwei baugleiche Geräte auf einmal mitnimmt, vom Firmware-Fehler bis zur Überspannung.
- **Eine Kopie außerhalb der Praxis**, weil Diebstahl, Brand oder Wasserschaden den Server und die USB-Platte in der Schublade daneben gemeinsam erwischen.
- **Eine Kopie offline oder unveränderbar**, weil Ransomware alles verschlüsselt, was der befallene Rechner beschreiben kann, und dazu gehört die Sicherungsplatte, die dauerhaft angesteckt ist.

| | USB-Platte in der Praxis | NAS in der Praxis | Verschlüsselte Kopie außer Haus |
|---|---|---|---|
| Ausfall der Hauptplatte | ✓ Deckt ab | ✓ Deckt ab | ✓ Deckt ab |
| Diebstahl oder Brand | ✗ Geht mit dem Original verloren | ✗ Geht mit dem Original verloren | ✓ Deckt ab |
| Ransomware | ~ Nur wenn sie abgesteckt war | ✗ Wird meist mitverschlüsselt | ✓ Wenn unveränderbar oder versioniert |
| Monatlicher Aufwand | Platte tauschen und mitnehmen | Prüfen, ob sie noch läuft | ✓ Keiner, sobald automatisiert |

## Was Recht und BSI verlangen

Die DSGVO spricht nicht von Festplatten, sie spricht von Wiederherstellung. Artikel 32 Absatz 1 Buchstabe c verlangt die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen. Buchstabe d verlangt ein Verfahren zur regelmäßigen Überprüfung und Bewertung der Wirksamkeit dieser Maßnahmen. Eine ungetestete Sicherung erfüllt beides nicht.

Dazu kommt die Aufbewahrungsfrist. Nach § 630f Absatz 3 BGB ist die Patientenakte für die Dauer von zehn Jahren nach Abschluss der Behandlung aufzubewahren, soweit nicht andere Vorschriften andere Fristen bestimmen. Ihre Sicherungsstrategie muss diesen Zeitraum überstehen, auch für den Fall, dass Sie zwischendurch die Software wechseln.

Das BSI führt im IT-Grundschutz-Kompendium eigens den Baustein CON.3 Datensicherungskonzept. Sein Kern ist unbequem und richtig: die Fachverantwortlichen legen fest, welche Anforderungen an die Datensicherung gelten, statt das dem Zufall oder dem Standard einer Software zu überlassen.

> **Zehn Jahre aufbewahren ist nicht dasselbe wie zehn Jahrgänge Sicherungen.** Das sind zwei getrennte Pflichten: die Sicherung holt Sie nach einem Ausfall zurück, das Archiv beantwortet in acht Jahren die Frage eines Patienten oder einer Prüfung. Software, die nur den letzten Monat zurückspielen kann, deckt die zweite nicht ab.

![Rechnungsliste mit den Zuständen gestellt, bezahlt, teilbezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Die Abrechnung hat eigene Aufbewahrungsfristen und muss die Wiederherstellung ebenfalls überstehen.*

## Die Wiederherstellungsprobe, Schritt für Schritt

Eine halbe Stunde im Jahr, und es ist das Einzige, was eine Datensicherung von einem Ordner mit großen Dateien unterscheidet.

1. **Nehmen Sie eine beliebige Kopie**, nicht die von heute Nacht. Die von vor drei Wochen sagt viel mehr darüber, ob der Ablauf dauerhaft trägt.
2. **Spielen Sie sie auf einem anderen Rechner oder Server ein**, niemals über das laufende System.
3. **Stoppen Sie die Zeit** vom Start bis zu dem Moment, in dem der Terminkalender von morgen offen ist. Diese Zahl ist Ihre echte Wiederanlaufzeit und überrascht fast immer.
4. **Öffnen Sie drei konkrete Patienten** und prüfen Sie, ob Zahnschema, Röntgenbilder und der letzte Kostenvoranschlag vorhanden sind.
5. **Prüfen Sie die Abrechnung des letzten Quartals**, den Teil, den niemand ansieht, bis er fehlt.
6. **Notieren Sie Datum, Dauer und die verantwortliche Person.** Diese Aufzeichnung ist zugleich Ihr Nachweis nach Artikel 32.

## Die Fehler, die eine Sicherung wertlos machen

- **Niemand liest die Fehlermeldungen.** Ein Sicherungsauftrag, der seit elf Wochen scheitert, schreibt jede Nacht an ein Postfach, das keiner mehr öffnet.
- **Die Kopie liegt auf derselben Maschine**, in einem anderen Ordner oder auf einer anderen Partition. Das schützt vor einem versehentlichen Löschen und sonst vor nichts.
- **Die Sicherungsplatte bleibt angesteckt**, also verschlüsselt Ransomware sie gleich mit.
- **Die Kopie ist nicht verschlüsselt.** Eine verlorene Platte mit der Dokumentation der gesamten Praxis ist eine meldepflichtige Datenpanne, keine Unannehmlichkeit.
- **Nur der IT-Dienstleister kennt den Weg zurück**, und der ist nicht mehr im Haus. Schreiben Sie den Ablauf auf und lagern Sie ihn außerhalb des Systems, das wiederhergestellt werden müsste.
- **Die Sicherung gehört dem Anbieter und niemand hat je einen eigenen Export verlangt.** Verschwindet der Anbieter, verschwindet die Kopie mit ihm.

Bei Dentalpin ist die Sicherung ein gewöhnlicher PostgreSQL-Dump plus das Dateiverzeichnis. Sie automatisieren sie mit den Werkzeugen, die Sie ohnehin einsetzen, und stellen sie wieder her, ohne uns zu fragen oder auf jemanden zu warten. Was die gehostete und die selbst betriebene Variante umfassen, steht unter [Preise](/de/preise/), und wenn Sie eine Wiederherstellung vorher üben wollen: [die Installation dauert drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/).

## Quellen

- Verordnung (EU) 2016/679 (DSGVO), Artikel 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 10. August 2026.
- § 630f Absatz 3 BGB, Dokumentation der Behandlung. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__630f.html). Abgerufen am 10. August 2026.
- BSI, IT-Grundschutz-Kompendium, Baustein CON.3 Datensicherungskonzept. [bsi.bund.de](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/03_CON_Konzepte_und_Vorgehensweisen/CON_3_Datensicherungskonzept_Edition_2023.pdf?__blob=publicationFile&v=3). Abgerufen am 10. August 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Abgerufen am 10. August 2026.

Dies ist keine Rechtsberatung. Welche Fristen für Ihre Praxis konkret gelten, hängt vom Einzelfall ab und gehört mit Ihrer Rechtsberatung oder Ihrer Zahnärztekammer geklärt.
