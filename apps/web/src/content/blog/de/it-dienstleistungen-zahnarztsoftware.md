---
title: "IT-Dienstleistungen rund um Open-Source-Zahnarztsoftware aufbauen"
description: "Die Software ist kostenlos, die Dienstleistung nicht: Installation, Migration, getestete Backups, Support. Was die Lizenz erlaubt und welcher AV-Vertrag fällig wird."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, systemhaus, dienstleistung, dsgvo, zahnarztsoftware]
---

Auf Open-Source-Zahnarztsoftware lässt sich ein tragfähiges Dienstleistungsgeschäft aufbauen, und abgerechnet wird nie das Programm. Abgerechnet werden die Installation, die Datenmigration, Sicherungen, die jemand tatsächlich zurückgespielt hat, die Updates und die Erreichbarkeit, wenn die Praxis am Montagmorgen ihren Terminkalender nicht öffnen kann. Zwei Dinge entscheiden, ob das Geschäft trägt: was die Lizenz zulässt, und die Tatsache, dass Sie in dem Moment, in dem Sie Patientendaten anfassen, Auftragsverarbeiter werden und einen Vertrag brauchen.

Beides ist kein Hindernis. Beides ist die Arbeit, und Arbeit ist abrechenbar.

## Sie verkaufen keine Software, Sie verkaufen Montag neun Uhr

Eine kleine Praxis kauft keine Technik. Sie kauft die Gewissheit, dass die Rezeption den Terminkalender öffnen kann. Der Leistungskatalog, der daraus folgt, ist kurz und wiederholt sich in jeder Praxis.

- **Installation und Härtung.** Server, Zertifikat, Firewall, Systemkonten und eine Konfiguration, die nicht davon abhängt, dass Sie sich erinnern.
- **Datenmigration.** Patienten, Patientenakten, Kostenvoranschläge und Termine aus dem alten Programm holen und die Summen abgleichen, bevor Sie die Übernahme freigeben.
- **Getestete Sicherungen.** Eine Sicherung, die nie zurückgespielt wurde, ist keine Sicherung, sondern eine Datei. Die Testwiederherstellung ist ein Ergebnis mit Datum.
- **Updates.** Nebenversionen, alle paar Jahre das große PostgreSQL-Upgrade und ein mit der Praxis vereinbartes Wartungsfenster.
- **Support mit schriftlichen Zeiten.** Nicht «wenn ich kann». Diese Zeiten, dieser Kanal, diese Reaktionszeit.
- **Schulung des Teams.** Zwei kurze Termine zum Start und einer nach drei Monaten bringen mehr als ein fünfzigseitiges Handbuch.

![Startbildschirm mit den heutigen Terminen, wer gerade in der Praxis ist, überfälligen Zahlungen und den letzten Patienten](/screenshots/home.png)

*Der Bildschirm, auf den das Team morgens als Erstes schaut. Lädt er nicht, ruft die Praxis den an, der den Server aufgesetzt hat.*

## Lesen Sie die Lizenz, bevor Sie einen Preis nennen

Open Source heißt nicht «machen Sie, was Sie wollen». Viele Produkte in diesem Markt erscheinen unter der Business Source License 1.1, und die ist eine Vorlage mit Leerstellen, die jedes Projekt anders ausfüllt.

Der Grundtext der BSL 1.1 gewährt wörtlich «the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work». Der Produktivbetrieb, also genau das, was Ihr Kunde den ganzen Tag macht, hängt am Additional Use Grant, den der Herausgeber einträgt.

| Was Sie vorhaben | Unter einer BSL 1.1 |
|---|---|
| Den Quellcode lesen und prüfen | ✓ Im Grundtext gewährt |
| Ihn für einen Kunden anpassen | ✓ Im Grundtext gewährt |
| Ihn auf dem Server einer Praxis betreiben | ~ Hängt vom Additional Use Grant ab |
| Ihre Stunden für Installation und Wartung abrechnen | ~ Die Lizenz regelt die Software, nicht Ihre Zeit |
| Ihn als eigenes mandantenfähiges SaaS weiterverkaufen | ✗ Meist die ausdrückliche Einschränkung |

Die vierte Zeile wird am häufigsten falsch gelesen. Eine Softwarelizenz stellt Bedingungen an Nutzung und Weitergabe der Software, nicht an Ihre Dienstleistungsrechnung; verhindern kann sie den konkreten Aufbau, den Sie abrechnen wollten.

> **Die Grenze verläuft beim eigenen SaaS, nicht beim bezahlten Aufsetzen.** Die Instanz einer Praxis für diese Praxis zu hosten und ihr die Wartung zu berechnen, ist ein anderer Fall als eine mandantenfähige Plattform, die dem Herausgeber Konkurrenz macht. Nähert sich Ihr Modell dieser Linie, sagt die Lizenz selbst, was zu tun ist: eine kommerzielle Lizenz beim Lizenzgeber erwerben oder es lassen.

Im Zweifel fragen Sie, bevor Sie beim Kunden unterschreiben. BSL-Projekte nennen in der Regel einen Kontakt für abweichende Lizenzvereinbarungen, und dieses Gespräch kostet eine E-Mail.

Das ist keine Rechtsberatung. Es ist die Lektüre eines öffentlichen Textes, und Ihren konkreten Vertrag muss ein Anwalt ansehen.

## Sobald Sie Patientendaten anfassen, sind Sie Auftragsverarbeiter

Hier schaffen sich viele fachlich gute IT-Betriebe ein vermeidbares Problem. Wer den Server administriert, auf dem die Patientenakte liegt, verarbeitet Gesundheitsdaten im Auftrag der Praxis, und die DSGVO hat dafür einen Begriff.

Der Landesbeauftragte für den Datenschutz Niedersachsen zitiert die Legaldefinition: «Auftragsverarbeiter ist nach der Legaldefinition des Art. 4 Nr. 8 DSGVO eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.» Die Verarbeitung im Auftrag ist «in Artikel 28 ff. DSGVO geregelt», und die Behörde empfiehlt ausdrücklich «die Verwendung der Formulierungshilfe für einen Auftragsverarbeitungsvertrag nach Art. 28 Abs. 3 DS-GVO».

Auf Ihre Arbeitswoche übersetzt sind das vier konkrete Entscheidungen:

1. **Unterschreiben Sie den Vertrag, bevor Sie den ersten Datensatz anfassen**, nicht nach der Migration. Das Vertragsdatum sollte vor Ihrem ersten Zugriff liegen.
2. **Benennen Sie Ihre Unterauftragsverarbeiter.** Steht der Server bei einem Hoster, ist dieser Hoster einer davon, und die Praxis muss ihn genehmigen können.
3. **Dokumentieren Sie die Weisungen.** Eine E-Mail der Praxis mit der Bitte um einen Export ist eine dokumentierte Weisung. Ein Telefonat hinterlässt nichts.
4. **Regeln Sie das Ende.** Rückgabe oder Löschung der Daten nach Ende der Leistung, mit schriftlichem Nachweis darüber, was Sie getan haben.

> **Der AV-Vertrag ist kein Papierkram, er ist die Grenze Ihrer Haftung.** Ohne ihn wird jeder Vorfall ohne ein Dokument diskutiert, das festhält, was man von Ihnen verlangt hatte und was nicht. Mit ihm steht der Umfang dessen, was Sie administriert haben, schriftlich fest.

## Die drei Abrechnungsmodelle, die tragen

Alle drei funktionieren. Was nicht funktioniert, ist sie stillschweigend zu mischen, denn dann glaubt der Kunde am Ende, die Wartung sei in der Installation enthalten.

| Modell | Was es abdeckt | Wann es passt |
|---|---|---|
| Festpreisprojekt | Installation, Migration und Schulung, fester Preis und fester Umfang | Praxisgründung oder Wechsel des Programms |
| Monatspauschale | Sicherungen, Updates, Monitoring und Support in vereinbarten Zeiten | Praxen ohne eigene IT, also fast alle |
| Stundenkontingent | Einzelarbeiten außerhalb der Pauschale | Schnittstellen, individuelle Auswertungen, Hardwaretausch |

Die Pauschale ist das, was daraus ein Geschäft macht statt einer Reihe von Projekten. Sie erzwingt auch die Disziplin des Monitorings, denn eine Monatspauschale zu kassieren, ohne zu wissen, ob der Server noch sichert, ist der Verkauf einer Versicherung ohne Blick auf das Risiko.

## Eine Installation, die Sie in der nächsten Praxis wiederholen können

Die erste Installation dauert, wie sie dauert. Die fünfte ist nur dann rentabel, wenn die erste eine schriftliche Vorgehensweise hinterlassen hat.

1. **Nehmen Sie den Bestand auf.** Welches Programm, welche Version, wo die Daten liegen und wer heute das Administratorkennwort hat.
2. **Bauen Sie eine Testumgebung** aus einer Kopie der echten Daten auf, nie gegen die Installation, mit der die Praxis arbeitet.
3. **Migrieren, dann Zahlen abgleichen.** Anzahl Patienten, künftige Termine, offene Kostenvoranschläge, offener Saldo. Stimmt eine Summe nicht, sind Sie nicht fertig.
4. **Fahren Sie eine Woche parallel**, das alte Programm bleibt lesend verfügbar.
5. **Spielen Sie testweise zurück**, mit Stoppuhr, und notieren Sie die Dauer.
6. **Schulen Sie in zwei kurzen Terminen**, einer für Rezeption und Terminkalender, einer am Behandlungsstuhl.
7. **Stellen Sie an einem ruhigen Tag um**, nicht montags und nicht am Tag vor dem Urlaub.
8. **Übergeben Sie die Zugangsdaten schriftlich** an die verantwortliche Person der Praxis, mit der Liste der Dienste und wo was liegt.

![Diagramm des selbst gehosteten Aufbaus: Browser, Caddy auf Port 443, Nuxt-Frontend, API und PostgreSQL-Datenbank](/diagrams/install-stack.svg)

*Die Bausteine, für die Sie mit der Unterschrift unter den Wartungsvertrag verantwortlich werden. Jeder Kasten hat jemanden, der ihn aktualisiert, und das sind Sie.*

## Das SLA, nach dem die Praxis fragt, ohne das Wort zu benutzen

Keine Zahnarztpraxis verlangt ein SLA. Sie will wissen, wen sie dienstags um halb neun anruft. Bringen Sie diese fünf Antworten zu Papier, und die Vereinbarung ist geschrieben:

- **Abgedeckte Zeiten** und was außerhalb gilt, samstags eingeschlossen, wenn die Praxis öffnet.
- **Reaktionszeit und angestrebte Wiederherstellungszeit**, die nicht dasselbe sind und getrennt gehören.
- **Wie viele Daten im schlimmsten Fall verloren gehen**, also wie oft gesichert wird.
- **Wie lange es bis zum Weiterarbeiten dauert**, gemessen in einem echten Test statt geschätzt.
- **Wem Server und Daten gehören**, und das muss immer die Praxis sein, auch wenn Sie administrieren.

## Schreiben Sie die Ausstiegsklausel selbst

Der Tag, an dem die Zusammenarbeit endet, kommt in jedem Vertrag, und er verläuft besser, wenn er vorgesehen war. Er ist zugleich Ihr stärkstes Verkaufsargument gegenüber einem geschlossenen Anbieter.

- **Die Zugangsdaten gehören der Praxis**, in einem Passwortmanager, der ihr gehört, vom ersten Tag an.
- **Die Daten gehen in einem dokumentierten offenen Format hinaus**, und Sie weisen das einmal im Jahr nach, indem Sie wirklich exportieren.
- **Die Vorgehensweise steht geschrieben** in einem Dokument, das die Praxis aufbewahrt, nicht in Ihrem Kopf.
- **Die Lizenz überlebt Ihre Firma.** Bei freier oder quelloffener Software kann ein anderer Dienstleister übernehmen, ohne mit jemandem neu zu verhandeln.

> **Ein Dienstleister, der geht, ohne das System in die Hände der Praxis zu legen, ist kein Dienstleister, sondern ein Schloss.** Was Ihr Angebot gegenüber einer geschlossenen Lizenz attraktiv macht, ist genau das: Die Praxis könnte Sie austauschen und verlöre nichts.

## Wo Dentalpin hineinpasst

Dentalpin erscheint unter BSL 1.1, und die `LICENSE`-Datei füllt genau die oben besprochenen Leerstellen: Die Nutzungsbeschränkung untersagt «providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work», das Änderungsdatum liegt vier Jahre nach der Veröffentlichung, und die Ziellizenz ist Apache 2.0. Für einen Integrator heißt das: Die Instanz einer benannten Praxis zu installieren, zu hosten und zu warten, liegt woanders als der Aufbau eines konkurrierenden Dental-SaaS, und nähert sich Ihr Modell dieser Linie, verweist die Datei selbst auf abweichende Lizenzvereinbarungen mit dem Lizenzgeber. Was die Praxis für das Produkt zahlt, steht auf der [Preisseite](/de/preise/).

## Quellen

- [Business Source License 1.1, Lizenztext](https://mariadb.com/bsl11/), MariaDB. Abgerufen am 2. September 2026.
- [Auftragsverarbeitung nach Art. 28 DSGVO](https://www.lfd.niedersachsen.de/auftragsverarbeitung/auftragsverarbeitung-nach-art-28-dsgvo-179673.html), Der Landesbeauftragte für den Datenschutz Niedersachsen. Abgerufen am 2. September 2026.
- [Leitlinien 07/2020 zu den Begriffen «Verantwortlicher» und «Auftragsverarbeiter» in der DSGVO](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), Europäischer Datenschutzausschuss, Endfassung angenommen am 7. Juli 2021. Abgerufen am 2. September 2026.
- `LICENSE`-Datei des Dentalpin-Repositorys. Abgerufen am 2. September 2026.
