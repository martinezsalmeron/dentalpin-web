---
title: "Zugriffsprotokoll der Patientenakte: was protokolliert werden muss"
description: "Welche Felder ein Zugriffsprotokoll auf die Patientenakte speichern muss, wie lange es aufbewahrt wird und wie die monatliche Kontrolle in zwanzig Minuten gelingt."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [patientenakte, datenschutz, dsgvo, protokollierung, praxisverwaltung]
---

Ein Zugriffsprotokoll auf die Patientenakte muss bei jedem Öffnen einer Akte fünf Dinge festhalten: wer geöffnet hat, wann, welche Patientin oder welcher Patient, welche Aktion und von wo aus. Aufbewahrt wird es sechs Monate bis ein Jahr, geschützt so, dass niemand die eigenen Zeilen ändern kann, und angesehen wird es regelmäßig, denn ein Protokoll, das niemand liest, entdeckt nichts. Das ist der gesamte Aufbau, und der Rest dieses Artikels erklärt, warum jedes Teil dazugehört.

Dies ist keine Rechtsberatung. Alle amtlichen Quellen stehen am Ende, abgerufen am 27. August 2026.

## Ein Recht sagt, wer hinein darf, das Protokoll sagt, wer drin war

Das sind zwei verschiedene Dinge, und eine Praxis, die das eine hat, glaubt meistens, beides zu haben. Das Zugriffsrecht ist eine Entscheidung im Voraus: die Rezeption öffnet keine Behandlungsdokumentation. Das Protokoll ist eine Tatsache im Nachhinein: am Dienstag um 12:40 Uhr hat diese namentlich benannte Person diese Akte geöffnet.

Nur das Zweite beantwortet eine Frage. Wenn eine Patientin wissen will, wer ihre Akte eingesehen hat, oder wenn zu beurteilen ist, ob eine Datenpanne Gesundheitsdaten betroffen hat, schweigt die Rechteliste zu beidem.

> **Neugier ist die häufigste Form des unbefugten Zugriffs, und kein Rechtekonzept fängt sie ab.** Das Behandlungsteam hat legitimen Zugriff auf die Akten. Unterscheiden können muss man den Zugriff, der zu einem Termin an diesem Tag gehört, von dem, der zu gar nichts gehört.

## Die fünf Felder jeder Protokollzeile

Die französische Aufsichtsbehörde CNIL wird hier konkret. Zu protokollieren sind die "opérations de création, consultation, partage, modification et suppression", also Anlegen, Einsehen, Weitergeben, Ändern und Löschen, jeweils mit der Kennung der handelnden Person, dem Datum, der Uhrzeit, der Art des Vorgangs und dem Bezug zum betroffenen Datensatz.

Auf eine Zahnarztpraxis übertragen sieht das so aus.

| Feld | Was gespeichert wird | Unverzichtbar? |
|---|---|---|
| Wer | Das persönliche Benutzerkonto | ✓ Ja |
| Wann | Datum und Uhrzeit | ✓ Ja |
| Welche Akte | Kennung der geöffneten Patientenakte | ✓ Ja |
| Welche Aktion | Ansehen, anlegen, ändern, exportieren, löschen | ✓ Ja |
| Von wo | IP-Adresse oder Arbeitsplatz | ~ Bei Fernzugriff |
| Was sich geändert hat | Wert vorher und Wert nachher | ~ Bei Änderungen |
| Warum | Kurze Begründung des Zugriffs | ✗ Nur bei Notfallzugriff |

Die ersten vier sind nicht verhandelbar, denn fehlt eines davon, beantwortet die Zeile gar nichts mehr. Ein Protokoll ohne Aktenbezug sagt, dass jemand irgendwo hineingesehen hat. Ein Protokoll, das Ansehen nicht von Löschen trennt, lässt genau die Unterscheidung weg, auf die es ankommt.

Das fünfte Feld hängt von der Praxis ab. Wird die Software nur an den Rechnern in der Praxis geöffnet, bringt die IP-Adresse wenig; gibt es einen Zugang von zu Hause, ist sie das Feld, das einen normalen Aufruf von einem um drei Uhr nachts trennt.

![Patientenakte im Reiter Aktivität, mit klinischen Warnhinweisen, laufendem Behandlungsplan und einer nach Terminen, Behandlungen und Kommunikation filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Die dokumentierte Aktivität zu einer Patientenakte, gebündelt in einer Zeitleiste.*

## Was das deutsche Recht dazu bereits sagt

Der Punkt, an dem das BGB überraschend deutlich wird, ist die Änderungshistorie. § 630f Absatz 1 Satz 2 lautet: "Berichtigungen und Änderungen von Eintragungen in der Behandlungsakte sind nur zulässig, wenn neben dem ursprünglichen Inhalt erkennbar bleibt, wann sie vorgenommen worden sind."

Satz 3 stellt klar, dass dies keine Papierregel ist: "Dies ist auch für elektronisch geführte Behandlungsakten sicherzustellen."

Das ist eine gesetzliche Pflicht zur Nachvollziehbarkeit von Änderungen, und sie hat eine praktische Folge, die beim Softwarekauf oft übersehen wird. Eine Software, die einen Eintrag überschreibt, ohne den alten Stand und den Änderungszeitpunkt erkennbar zu lassen, erfüllt diese Anforderung nicht.

Die DSGVO kommt von der anderen Seite zum selben Ergebnis. Artikel 5 Absatz 2 macht den Verantwortlichen dafür rechenschaftspflichtig, die Einhaltung nachweisen zu können, und Artikel 32 verlangt geeignete technische Maßnahmen für die Sicherheit der Verarbeitung. Nachweisen, wer auf welche Daten zugegriffen hat, geht mit Protokoll oder gar nicht.

> **Änderungshistorie und Zugriffsprotokoll sind nicht dasselbe.** Die eine hält fest, was am Inhalt der Akte passiert ist, das andere, wer sie überhaupt geöffnet hat. Eine Praxis braucht beides, und viele Systeme liefern nur das Erste.

Für den Klinikbereich hat die Datenschutzkonferenz die Orientierungshilfe Krankenhausinformationssysteme veröffentlicht, die in zwei Fassungen vorliegt, 2011 und 2014. Sie behandelt die normativen Vorgaben für den Zugriff auf elektronische Patientendaten sowie die technischen Anforderungen an Gestaltung und Betrieb solcher Systeme. Sie richtet sich an Krankenhäuser, ist aber die ausführlichste deutsche Auseinandersetzung mit der Frage und lohnt das Nachlesen auch für eine Praxis.

## Wie lange aufbewahren

Eine deutsche Zahl gibt es nicht, aber die beiden europäischen Aufsichtsbehörden, die eine nennen, liegen nah beieinander.

Die CNIL empfiehlt, Protokolldaten "sur une période glissante comprise entre six mois et un an" aufzubewahren, also in einem gleitenden Zeitraum von sechs Monaten bis einem Jahr, mit Ausnahmen bei gesetzlicher Pflicht, Rechtsstreit oder Vorfallanalyse.

Das italienische Garante setzt für Zugriffsprotokolle von Systemadministratoren eine Untergrenze: sie sind "per un congruo periodo, non inferiore a sei mesi" aufzubewahren, nie weniger als sechs Monate.

Sechs Monate sind damit der sinnvolle Boden. Darunter findet eine Beschwerde, die im Frühjahr zu einem Vorgang aus dem Herbst eingeht, nichts mehr zum Nachsehen.

## Die monatliche Kontrolle in zwanzig Minuten

Ein Protokoll, das erst geöffnet wird, wenn das Problem schon da ist, kommt zu spät. Die regelmäßige Durchsicht macht daraus eine Erkennung, und sie passt in eine kurze Routine.

1. **Filtern Sie Zugriffe außerhalb der Sprechzeiten.** Eine nachts, sonntags oder feiertags geöffnete Akte verlangt eine Erklärung, auch wenn es fast immer eine gibt.
2. **Gleichen Sie die Zugriffe des Tages mit dem Terminkalender ab.** Wer fünf Akten geöffnet und drei Patienten hatte, hat zwei offene Punkte.
3. **Suchen Sie nach den Namen, die alle kennen.** Die Akte einer Angehörigen aus dem Praxisteam, eines Kollegen oder einer stadtbekannten Person wird am häufigsten ohne Anlass geöffnet.
4. **Prüfen Sie Konten ausgeschiedener Personen.** Ein deaktiviertes Konto darf keine neuen Zeilen erzeugen, und wenn doch, ist das Problem ernst.
5. **Sehen Sie sich Exporte an.** Die Patientendatenbank herunterzuladen ist eine andere Handlung als sie anzusehen, und sie sollte selten sein.
6. **Notieren Sie Datum und Ergebnis der Durchsicht**, auch wenn das Ergebnis "nichts" lautet. Dieses Blatt ist der Nachweis, dass die Kontrolle existiert.

Eine Grenze, die man im Team offen aussprechen sollte: die CNIL untersagt ausdrücklich, Protokolldaten für sachfremde Zwecke wie die Arbeitszeiterfassung zu verwenden. Protokolle dienen der Sicherheit. Jede andere Nutzung zerstört das Vertrauen, das dafür sorgt, dass niemand sie abgeschaltet haben will.

![Auswertungen der Praxis mit den Kennzahlen des Zeitraums](/screenshots/reports.png)

*Die monatliche Durchsicht funktioniert als feste Routine am besten, neben den übrigen Zahlen des Monats.*

## Drei Fehler, die das Protokoll wertlos machen

**Das Sammelkonto.** Melden sich vier Personen als "rezeption" an, protokolliert das System zuverlässig, dass "rezeption" die Akte geöffnet hat, und das identifiziert niemanden. Es ist der Fehler, der alles andere aushebelt, und der häufigste dazu.

**Das Protokoll, das der Administrator ändern kann.** Kann die Praxisinhaberin Zeilen bearbeiten oder löschen, beweist das Protokoll gegenüber Dritten nichts mehr. Die CNIL formuliert das als Pflicht, zu verhindern, dass Beschäftigte die Aufzeichnung ihrer eigenen Aktivität verändern, und das Garante verlangt Protokolle mit "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità", also Vollständigkeit, Unveränderbarkeit und prüfbarer Integrität.

**Das gelöschte Konto.** Wird beim Ausscheiden das Benutzerkonto gelöscht statt deaktiviert, verlieren die zugehörigen Protokollzeilen ihren Bezug. Deaktivieren erhält die Nachvollziehbarkeit, Löschen zerstört sie.

## Patienten dürfen fragen, und man muss antworten können

Zwei europäische Länder haben das bereits ausformuliert, und sie zeigen, wohin die Anforderung geht.

Portugal geht am weitesten. Artikel 29 der Lei 58/2019 bestimmt, dass "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais", die betroffene Person also über jeden Zugriff auf ihre Daten zu benachrichtigen ist, und nennt unter den Maßnahmen ausdrücklich ein elektronisches Register der Zugriffe und der abgerufenen Daten.

Italien regelt es auf Antrag. Nach den Leitlinien des Garante zum Dossier sanitario kann eine Patientin verlangen, "conoscere gli accessi eseguiti sul proprio dossier" zu erfahren, mit der zugreifenden Stelle sowie Datum und Uhrzeit, und der Verantwortliche hat fünfzehn Tage Zeit zu antworten.

In Deutschland kommt die Auskunftsanfrage nach Artikel 15 DSGVO ohnehin. Der Unterschied zwischen einer Praxis, die in zehn Minuten antwortet, und einer, die gar nicht antworten kann, liegt an einem Detail: steht in jeder Protokollzeile der Bezug zur Patientenakte.

## Was Software leisten kann und was nicht

Kein Protokoll verhindert, dass jemand auf den Bildschirm nebenan sieht, und keines ersetzt das Gespräch darüber, dass man die Akte einer bekannten Person nicht aus Neugier öffnet. Es sorgt aber dafür, dass dieses Gespräch mit Fakten statt mit Verdacht geführt werden kann.

In Dentalpin wird jedes Öffnen einer Akte mit Konto, Datum und Patientenbezug protokolliert, und Konten werden deaktiviert, ohne ihre Historie zu löschen. Die Konditionen der gehosteten und der selbst betriebenen Variante stehen unter [Preise](/de/preise/).

## Quellen

- § 630f BGB, Dokumentation der Behandlung, Absatz 1. [dejure.org](https://dejure.org/gesetze/BGB/630f.html). Abgerufen am 27. August 2026.
- Verordnung (EU) 2016/679 (DSGVO), Artikel 5 Absatz 2, Artikel 15 und Artikel 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 27. August 2026.
- Datenschutzkonferenz, *Orientierungshilfe Krankenhausinformationssysteme*, Fassungen 2011 und 2014. [LfDI Baden-Württemberg](https://www.baden-wuerttemberg.datenschutz.de/krankenhausinformationssysteme-oh-kis/). Abgerufen am 27. August 2026.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (Stand 14. März 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Abgerufen am 27. August 2026.
- Garante per la protezione dei dati personali, Provvedimento vom 27. November 2008 zu Systemadministratoren. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Abgerufen am 27. August 2026.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4. Juni 2015. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Abgerufen am 27. August 2026.
- Lei n.º 58/2019 vom 8. August, Artikel 29. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Abgerufen am 27. August 2026.

Aufbewahrungsfristen und Prüfintervalle hängen von Ihrer konkreten Praxissituation ab. Klären Sie das mit Ihrer Rechtsberatung oder Ihrem Datenschutzbeauftragten.
