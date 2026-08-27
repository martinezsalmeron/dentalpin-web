---
title: "Open Source oder proprietär im Gesundheitswesen: was sich wirklich ändert"
description: "Was die Lizenz einer Praxissoftware tatsächlich entscheidet, was nicht, und wie Sie in zehn Minuten prüfen, in welche Kategorie Sie einkaufen."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [open-source, lizenzen, dsgvo, praxissoftware, vertraege]
---

Die Lizenz entscheidet nicht, ob eine Software zu Ihrer Praxis passt. Sie entscheidet drei konkrete Dinge: wer das Programm weiterpflegen darf, wenn der Anbieter verschwindet, ob Sie es auf Ihrem eigenen Server betreiben können, und zu welchen Bedingungen Sie es in zehn Jahren noch nutzen dürfen.

Alles andere, der Preis, der Support, die tatsächliche Sicherheit und die Verantwortung nach der DSGVO, hängt vom Anbieter und von der Art des Betriebs ab. Nichts davon steht in der Lizenz, und wer beide Listen vermischt, entscheidet an der falschen Stelle.

## Es sind drei Kategorien, nicht zwei

Die übliche Diskussion stellt "quelloffen" gegen "proprietär" und übergeht die Kategorie, in der heute ein wachsender Teil des Marktes liegt.

Die Open Source Initiative pflegt die maßgebliche Definition, aktuell in Version 1.9. Ihr erster Satz ist der, den alle vergessen: "Open Source bedeutet nicht nur Zugang zum Quellcode." Die Definition verlangt zusätzlich, dass die Lizenz die Weitergabe erlaubt, abgeleitete Werke erlaubt und niemanden daran hindert, das Programm "in einem bestimmten Tätigkeitsbereich" einzusetzen.

Die Free Software Foundation formuliert dasselbe als vier Freiheiten: das Programm nach Belieben ausführen, seine Funktionsweise studieren und es ändern, Kopien weitergeben und eigene geänderte Fassungen verbreiten. Für die Freiheiten 1 und 3, heißt es dort, ist "der Zugang zum Quellcode eine Voraussetzung".

| | Quelloffen / Open Source | Quellcode einsehbar | Proprietär |
|---|---|---|---|
| Sie sehen den Code | ✓ Jeder | ✓ Veröffentlicht | ✗ Nein, außer bei Hinterlegung |
| Sie dürfen ihn ändern | ✓ Ja | ✓ Ja | ✗ Nein |
| Nutzung ohne Einschränkung | ✓ Kein Bereich ausgeschlossen | ~ Einzelne Nutzungen ausgeschlossen | ~ Was der Vertrag sagt |
| Sie dürfen ihn weitergeben | ✓ Ja | ~ Mit denselben Grenzen | ✗ Nein |
| Erfüllt die OSI-Definition | ✓ Ja | ✗ Nein | ✗ Nein |
| Typische Lizenzen | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Herstellervertrag |

Die mittlere Spalte ist real und sie wächst. Die Business Source License 1.1 veröffentlicht den Quellcode und erlaubt Änderungen, behält sich aber bestimmte Nutzungen vor, und sagt das im eigenen Text unmissverständlich: "Diese Lizenz ist keine Open-Source-Lizenz." Sie verpflichtet das Werk zugleich, an einem festgelegten Datum in eine echte freie Lizenz überzugehen.

> **"Der Code ist öffentlich" und "das ist Open Source" sind nicht dieselbe Aussage.** Ein Anbieter kann Ihnen jede Zeile zeigen und bestimmte Nutzungen trotzdem verbieten. Das ist nicht unredlich, es ist eine andere Kategorie, und nur die Lizenz verrät, welche.

## Was die Lizenz entscheidet

- **Wer die Software pflegt, wenn der Anbieter weg ist.** Mit dem Quellcode und der Erlaubnis, ihn zu ändern, kann jede kompetente Entwicklerin das System patchen. Das ist weder kostenlos noch sofort verfügbar, aber es ist möglich, und genau darauf kommt es am Tag der Ankündigung an.
- **Wo sie läuft.** Eine quelloffene Lizenz erlaubt die Installation auf Ihrer eigenen Hardware. Ein proprietäres Cloud-Abonnement erlaubt das fast nie, unabhängig vom Preis.
- **Ob Sie prüfen können, was mit den Daten geschieht.** Nur der Blick in den Code zeigt, was die Praxis verlässt und wie oft, statt sich auf eine Vertriebsauskunft zu verlassen.
- **Was in zehn Jahren gilt.** Eine quelloffene Lizenz läuft nicht ab. Ein Abonnement schon, und mit ihm der Zugriff auf das Programm, in dem die Patientenakten liegen.

## Was die Lizenz nicht entscheidet

Hier sitzen fast alle Missverständnisse.

- **Wer nach der DSGVO verantwortlich ist.** Artikel 4 Nummer 7 nennt als Verantwortlichen, wer "über die Zwecke und Mittel der Verarbeitung entscheidet", und Artikel 24 Absatz 1 verlangt von derselben Stelle den Nachweis der Einhaltung. Das ist die Praxis, egal welche Software läuft. Bei fremdem Hosting verlangt Artikel 28 einen Auftragsverarbeitungsvertrag, und Absatz 3 Buchstabe g die Rückgabe oder Löschung der Daten nach Ende der Leistung.
- **Ob das Programm ein Medizinprodukt ist.** Nach der Verordnung (EU) 2017/745 bezeichnet "Medizinprodukt" ein "Instrument, einen Apparat, ein Gerät, eine Software, ein Implantat, ein Reagenz, ein Material oder einen anderen Gegenstand", das der Hersteller für einen der dort aufgezählten medizinischen Zwecke bestimmt hat. Entscheidend ist die Zweckbestimmung, nie die Lizenz.
- **Ob sie sicher ist.** Offener Quellcode ist prüfbar, nicht geprüft. Das sind zwei verschiedene Dinge, und nur das zweite schützt jemanden.
- **Was sie kostet.** Es gibt quelloffene Software mit teuren Supportverträgen und günstige proprietäre Produkte.
- **Ob freitags um acht jemand ans Telefon geht.** Das regelt ein Supportvertrag, und den verkaufen beide Kategorien.

![Patientenakte mit klinischen Warnhinweisen, aktivem Behandlungsplan und einer nach Terminen, Behandlungen, Zahlungen und Nachrichten filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Jahre an Patientenakte in einem Programm. Die Lizenz ändert nichts daran, wer für diese Daten geradesteht: das bleibt die Praxis.*

## "Frei" heißt nicht "kostenlos"

Die Free Software Foundation stellt das gleich zu Beginn klar: Es geht "um Freiheit, nicht um den Preis", und man solle bei "free" an "freie Rede" denken, nicht an "Freibier". Auf derselben Seite steht, dass Sie für Ihre Kopien bezahlt haben können und trotzdem alle Freiheiten behalten.

In der Praxis verschwindet das Geld nicht. Es wandert.

| Posten | Proprietär, beim Anbieter gehostet | Quelloffen, auf Ihrem Server |
|---|---|---|
| Lizenz | ~ Pro Nutzer, pro Behandlungsstuhl oder pro Standort | ✓ Keine Lizenzgebühr |
| Server und Speicher | ✓ In der Gebühr enthalten | ✗ Ihre Sache |
| Datensicherung | ✓ Beim Anbieter, nach dessen Regeln | ✗ Ihre, und sie muss getestet werden |
| Updates | ✓ Werden eingespielt | ~ Ihre oder die eines Dienstleisters |
| Support | ✓ Enthalten oder vertraglich | ~ Community oder eigener Vertrag |
| Wechsel | ~ Hängt am Export des Anbieters | ✓ Daten und Code liegen schon bei Ihnen |

Ein kleiner, sauber aufgesetzter Server kostet wenig. Die Zeit der Person, die ihn aktualisiert, die Sicherungen kontrolliert und antwortet, wenn etwas klemmt, ist nicht null, und genau diese Zahl fehlt in fast jeder Kalkulation. Vor der Entscheidung lohnt sich der Blick darauf, was es konkret bedeutet, [Gesundheitssoftware selbst zu hosten](/de/blog/gesundheitssoftware-selbst-hosten/).

## Eine Lizenz in zehn Minuten lesen

Für den ersten Durchgang brauchen Sie keine Kanzlei. Sie brauchen fünf Stellen und Notizen dazu, was dort steht.

1. **Suchen Sie die Datei LICENSE im öffentlichen Repository.** Gibt es kein Repository, ist die Antwort schon da: proprietär. Das disqualifiziert nichts, es sagt Ihnen nur, welche Fragen als Nächstes kommen.
2. **Prüfen Sie, ob der Lizenzname auf der OSI-Liste steht.** GPL, AGPL, Apache und MIT stehen dort. BSL und die "Source available"-Familie nicht.
3. **Suchen Sie nach "Use Limitation" oder "Additional Use Grant".** Sind einzelne Nutzungen ausgeschlossen, ist es keine quelloffene Lizenz, so öffentlich der Code auch sein mag.
4. **Suchen Sie nach einem "Change Date".** Manche Lizenzen werden nach einer Frist frei, häufig nach vier Jahren, und das verändert die Rechnung auf lange Sicht.
5. **Fragen Sie, ob der veröffentlichte Code der laufende Code ist.** Ein Repository mit dem Stand von vor zwei Jahren ist kein Sicherheitsnetz.
6. **Verlangen Sie vor der Unterschrift einen vollständigen Export.** Das [Format, auf dem Sie bestehen sollten](/de/blog/daten-export-zahnarztsoftware/), zählt am Tag des Wechsels mehr als die Lizenz.

> **Wenn Sie nur eine Prüfung schaffen, machen Sie die letzte.** Ein offener, getesteter Export schützt Sie in allen drei Kategorien. Eine freie Lizenz ohne exportierbare Daten rettet keinen Umzug.

![Auswertungsbildschirm der Praxis](/screenshots/reports.png)

*Auswertungen werden aus den Daten neu berechnet. Deshalb ist die nützliche Frage vor der Unterschrift, in welchem Format die Daten herauskommen, und nicht, unter welcher Lizenz sie hereinkamen.*

## Was sich im Dezember 2027 ändert

Die Verordnung (EU) 2024/2847 vom 23. Oktober 2024, der Cyberresilienz-Rechtsakt, legt Cybersicherheitsanforderungen für Produkte mit digitalen Elementen fest. Artikel 71 bestimmt die Geltung ab dem **11. Dezember 2027**, Artikel 14 gilt bereits ab dem 11. September 2026 und Kapitel IV ab dem 11. Juni 2026.

Die Verordnung richtet sich an Hersteller und Händler, nicht an Ihre Praxis, aber sie ändert, bei wem Sie Ansprüche geltend machen können.

- **Kommerzielle Software fällt darunter, quelloffen oder nicht.** Entscheidend ist, dass sie im Rahmen einer Geschäftstätigkeit bereitgestellt wird.
- **Nicht monetarisierte freie Software fällt heraus.** Erwägungsgrund 18 stellt klar, dass die Bereitstellung freier und quelloffener Produkte, die "von ihren Herstellern nicht zu Geld gemacht werden", nicht als Geschäftstätigkeit gilt.
- **Es entsteht eine neue Rolle, der "Verwalter quelloffener Software"**, definiert in Artikel 3 Nummer 14 für juristische Personen, die die Entwicklung quelloffener Produkte für kommerzielle Zwecke dauerhaft unterstützen, mit leichteren Pflichten als ein Hersteller.

Für eine Praxis ist die Lesart kurz: Ab diesem Datum haften ein Gemeinschaftsprojekt ohne Firma dahinter und ein kommerzielles Produkt nicht gleich, und es lohnt sich zu wissen, welches von beiden installiert wird.

## Im Gesundheitswesen gibt es das längst

Das ist keine Laborhypothese. GNU Health beschreibt sich als "das freie digitale Gesundheitsökosystem, in dem Sozialmedizin auf moderne Gesundheitsinformatik trifft" und listet Installationen in Krankenhäusern und Gesundheitsministerien mehrerer Länder. OpenEMR bezeichnet sich als "die verbreitetste quelloffene Lösung für elektronische Patientenakten und Praxisverwaltung" und gibt an, in den Vereinigten Staaten ONC-zertifiziert zu sein.

Keines der beiden ist ein Dentalprodukt, und genau das ist der Punkt: Die Lizenzfrage beantwortet sich in jedem Fachgebiet gleich.

## Die Frage, die es entscheidet

Es ist nur eine: **Wenn dieses Unternehmen morgen verschwindet, was läuft dann noch?**

Enthält die Antwort den Quellcode, die Daten in einem offenen Format und einen Server, den Sie kontrollieren, hat die Lizenz ihre Arbeit getan. Enthält sie keines der drei, ersetzt das keine Vertragsklausel.

Dentalpin gehört in die mittlere Kategorie, und das gehört präzise gesagt: Der Code ist öffentlich unter der BSL 1.1, mit einer Nutzungsbeschränkung, die ein konkurrierendes SaaS-Angebot ausschließt, und mit automatischem Übergang auf Apache 2.0, eine echte Open-Source-Lizenz, vier Jahre nach jeder Veröffentlichung. Die Installation läuft auf Ihrem Server, die Datenbank ist PostgreSQL, und die [Preise](/de/preise/) sind veröffentlicht.

## Quellen

Alle abgerufen am 27. August 2026.

- Open Source Initiative, *The Open Source Definition*, Version 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, die vier Freiheiten. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, Lizenztext und der Hinweis "is not an Open Source license". [mariadb.com](https://mariadb.com/bsl11/)
- Verordnung (EU) 2016/679 (DSGVO), Artikel 4 Nummer 7, Artikel 24 Absatz 1, Artikel 28 Absatz 1 und Absatz 3 Buchstabe g. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679)
- Verordnung (EU) 2017/745 über Medizinprodukte, Artikel 2 Nummer 1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32017R0745)
- Verordnung (EU) 2024/2847 (Cyberresilienz-Rechtsakt), Erwägungsgrund 18, Artikel 3 Nummer 14 und Artikel 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2847)
- GNU Health, Projektseite. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, Projektseite. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, Datei LICENSE im Repository (Business Source License 1.1).

Das ist keine Rechtsberatung. Ob ein Programm als Medizinprodukt gilt und wie sich die datenschutzrechtliche Verantwortung verteilt, hängt vom Einzelfall ab. Klären Sie das vor einer Entscheidung mit Ihrer Beraterin oder Ihrem Berater.
