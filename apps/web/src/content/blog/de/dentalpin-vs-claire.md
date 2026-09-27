---
title: "Dentalpin und claire im Vergleich: Cloud aus der eigenen Praxiskette gegen Open Source"
description: "Ehrlicher Vergleich zwischen claire von Patient21 SE und Dentalpin: Kassenabrechnung, EBZ, Telematik, die fehlende Preisangabe und wo die Patientendaten liegen."
pubDate: 2026-09-27
tags: [vergleich, claire, patient21, praxissoftware, zahnarztsoftware]
---

claire ist die einzige Praxissoftware in diesem Vergleich, die zuerst für die eigenen Praxen gebaut und erst danach verkauft wurde. Das ist eine ungewöhnliche Herkunft, es ist ein gutes Argument, und es ist der Grund, warum dieser Text an einer anderen Stelle kritisch wird als die übrigen.

Wir bauen Dentalpin, sind also nicht neutral. Genau sein können wir trotzdem.

> **Alles über claire in diesem Text stammt von claire.dental und software.patient21.com**, abgerufen am 27. September 2026, jede Aussage unten mit URL. Was Patient21 nicht selbst veröffentlicht, steht hier nicht. Die Monatspreise, die deutsche Vergleichsportale für claire nennen, haben wir bewusst weggelassen: sie stehen auf keiner Seite des Anbieters, und ein Preis aus dritter Hand ist kein Preis.

## In dreißig Sekunden

**claire ist eine vollständige deutsche Praxisverwaltung, die ausschließlich im Browser läuft.** Herausgeber ist die Patient21 SE in Berlin. Kassenabrechnung nach KCH, ZE, KB und PA, Privatabrechnung, das automatisierte Schreiben von HKP-ZEs, EBZ, Mahnwesen, Anbindung an Telematik, Rechenzentrum und Röntgensoftware sind nach eigener Funktionsübersicht enthalten. Entwickelt wird sie seit 2014 in den Praxen des eigenen Netzwerks.

**Dentalpin ist Open Source und läuft auf Ihrem eigenen Server.** Der Code liegt auf GitHub, die Installation ist ein `docker compose`, es gibt keine Gebühr je Behandler, je Stuhl oder je Standort, und alles, was die Oberfläche kann, kann auch die öffentliche API. Für eine deutsche Kassenpraxis fehlt allerdings genau das, was claire stark macht.

**Die Frage, die entscheidet: rechnen Sie mit der KZV ab?** Wenn ja, sind wir es nicht, und claire gehört auf Ihre Liste. Verlangen Sie dann als erstes die KZBV-Zulassung schriftlich, denn auf den Seiten des Anbieters steht dazu kein Wort, obwohl die Kassenabrechnung dort als Funktion geführt wird.

![Wochenansicht der Agenda in Dentalpin: Termine je Behandler in Spalten, mit Uhrzeit, Patient und Behandlungsart](/screenshots/schedule-week.png)

*Die Wochenansicht der Agenda in Dentalpin, mit den Demodaten der Installation.*

## Was claire ist

claire ist eine "komplette Praxisverwaltungssoftware", die als Webapplikation betrieben wird: "Als Webapplikation arbeiten Sie unabhängig vom Standort oder Betriebssystem über einen sicheren Webbrowser. Ob Mac, Windows oder Linux." Ein lokaler Server entfällt, Updates und Backups macht der Anbieter.

Herausgeber ist nach Impressum die Patient 21 SE, Joachimsthaler Straße 20, 10719 Berlin, Amtsgericht Charlottenburg HRB 234032 B, USt-IdNr. DE359596993, Vorstand Christopher Muhr und Nicolas Hantzsch, Aufsichtsratsvorsitzender Markus Boser. Das ist mehr Transparenz über die Firma, als in dieser Branche üblich ist.

### Die Herkunft ist das eigentliche Argument

Die Über-uns-Seite erzählt es in zwei Sätzen: "Aus dem Wunsch heraus, eine bessere Software für den eigenen Praxisalltag zu schaffen, begann 2014 die Entwicklung von claire. Heute wird claire in den Zahnarztpraxen unseres eigenen Praxisnetzwerks eingesetzt."

Dieses Netzwerk hat einen Namen, und auch den nennt der Anbieter selbst: "Diese Tools haben sich bei Dental21, einer der größten Dentalketten in Deutschland, bewährt." Auf patient21.com führt die Firma claire als eigenes Produkt neben Availy, Happy, Medpress und Medlog und betreibt gleichzeitig die Praxen.

Man sieht das der Funktionsliste an, und zwar an den Stellen, die sich niemand am Reißbrett ausdenkt: ein Tagesprotokoll mit zweistufigem Prüfprozess, "systemgenerierte Aufgaben z. B. für Patienten mit bewilligten HKPs ohne Folgetermine", ein Präsenzstatus, der zeigt, "wo sich Patienten befinden", und automatisierte Bonitätsabfragen bei der BFS. Das sind Antworten auf Probleme, die man an einem Empfang erlebt hat.

### Abrechnung, Telematik und Anbindungen

Hier ist claire auf dem Papier vollständig, und für eine deutsche Praxis ist das die halbe Entscheidung.

- **Kassen- und Privatabrechnung.** Die Funktionsübersicht nennt "KCH-, PA-, KB-, ZE- Planung und Abrechnung", "Privatpläne und -abrechnung", "Automatisiertes Schreiben von HKP-ZEs", Tagesprotokoll, Rechenzentrum und Mahnwesen. Bei uns ist diese Zeile leer.
- **EBZ.** Das "Elektronische Beantratungs- und Genehmigungverfahren (EBZ)" ist integriert, mitsamt Benachrichtigungen bei genehmigten und abgelehnten HKPs. Auch das fehlt bei uns.
- **Telematikinfrastruktur.** Die Liste führt eine "Anbindung Telematik". Patient21 verkauft dazu einen eigenen Remote TI Gateway, laut eigener Seite "cloudbasiert, ohne lokalen Konnektor" und auf "zertifizierter TI-Gateway-Infrastruktur in deutschen Rechenzentren".
- **Röntgen.** Eine "Anbindung Rö-Software" ist genannt. Welche Systeme oder welcher Standard, steht auf den konsultierten Seiten nicht.
- **Factoring und Rechenzentrum.** "Anbindung Rechenzentrum", "Erweiterte Anbindung mit BFS-Factoring" und eine automatisierte Bonitätsabfrage, letztere ausdrücklich "nur BFS".
- **Weitere Anbindungen.** rose, die Online-Terminbuchung und die KI-Dokumentation medlog, die Dokumentation "per Sprachdiktat oder Tastatur" strukturiert.

Vier Funktionen sind ausdrücklich optional: Online-Terminbuchung, integrierte Telefonie und Messaging, die Bonitätsabfrage und medlog. Was davon im Preis steckt, lässt sich von außen nicht beantworten, weil es keinen veröffentlichten Preis gibt.

### Was auf den eigenen Seiten fehlt

Drei Lücken sind es wert, sie vor einem Gespräch zu notieren. Keine davon heißt, dass die Funktion fehlt. Sie heißen, dass der Anbieter dazu nichts veröffentlicht.

1. **Die KZBV-Zulassung.** Auf keiner konsultierten Seite steht ein Wort dazu, und auch BEMA und GOZ kommen im Produktbereich nicht vor. Für eine Kassenpraxis ist das die erste Frage, nicht die letzte.
2. **Der Serverstandort der Patientendaten.** Die Cloud-Seite sagt, Daten seien "DSGVO-konform verschlüsselt" und würden "auf sicheren Servern gespeichert". Ein Land steht nicht dabei. Die Datenschutzerklärung nennt zwar einen Standort, aber nur für die Website: "Der Standort des Servers der Webseite liegt geografisch in Deutschland", gehostet bei der Raidboxes GmbH in Münster. Das ist die Marketingseite, nicht die Praxissoftware.
3. **Zahnschema und Parodontalstatus.** Die Funktionsliste nennt "Befundung", aber weder ein Zahnschema noch einen Parodontalstatus als Funktion. PA erscheint nur als Abrechnungsbereich. Bei einer Software für Zahnarztpraxen ist das vermutlich eine Lücke der Website und nicht des Produkts, nachfragen sollten Sie trotzdem.

### Was claire kostet

> **claire veröffentlicht keinen Preis, wohl aber ein Versprechen darüber.** Die Startseite sagt "Kostentransparenz ohne Überraschungen" und "volle Preisklarheit, ohne versteckte Kosten. Mit geringen Anfangsinvestitionen", und an keiner Stelle folgt eine Zahl. Unter claire.dental/preise, /kosten und /tarife steht am 27. September 2026 jeweils ein 404. Die einzige Eurozahl auf den konsultierten Seiten von Patient21 ist ein Marktrichtwert für den TI-Anschluss auf einer anderen Produktseite, nicht der Preis von claire.

Auch der Weg zum Produkt ist einer über Menschen. "Jetzt kostenlos testen" führt nicht in eine Testinstanz, sondern auf das Kontaktformular, und die Seite beschreibt danach drei Schritte: Formular ausfüllen, Terminvereinbarung, Demo. Ein Selbsttest ohne Gespräch ist nicht vorgesehen.

Vertragslaufzeit und Kündigungsfrist stehen auf den konsultierten Seiten ebenfalls nicht. Beides gehört vor die Unterschrift, nicht danach.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Installiert wird sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, bedient wird sie im Browser.

Der Kern ist immer enthalten: Terminkalender, Patienten, Zahnschema, Patientenakte, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Abrechnung, Röntgen und Bilder. Dazu kommen Optionen, die Sie ein- und ausschalten, unter anderem Erinnerungen, WhatsApp Business, mehrere Standorte, Laboraufträge, Materialverwaltung und ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt.

Was es in Deutschland heute **nicht** gibt, und das ist die kurze Fassung des ganzen Vergleichs: keine KZV-Abrechnung nach BEMA oder GOZ, keine KZBV-Zulassung, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, keine VDDS-Schnittstelle, keine Online-Terminbuchung, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Patientenakte in Dentalpin mit Zahnschema, klinischen Warnhinweisen, laufendem Behandlungsplan und nächstem Termin](/screenshots/dental-chart.png)

*Das Zahnschema in der Patientenakte. Auf den Seiten von claire ist an dieser Stelle von "Befundung" die Rede, ohne dass ein Zahnschema als Funktion genannt wird.*

## Nebeneinander

Nur belegbare Zeilen. Wo claire nichts veröffentlicht, steht das da und nicht unsere Vermutung.

| | claire | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, reine Cloud | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Kein Betrag auf den eigenen Seiten | ✓ 0 €, selbst gehostet |
| Preismodell | ✗ Nicht veröffentlicht | ✓ Keine Gebühr je Behandler, Stuhl oder Standort |
| Vertragslaufzeit und Kündigungsfrist | ✗ Nicht veröffentlicht | ✓ Keine |
| Selbst ausprobieren | ✗ "Jetzt kostenlos testen" führt zum Demo-Formular | ✓ Demo ohne Anmeldung, Installation selbst möglich |
| Betriebsart | Reine Cloud im Browser, kein lokaler Server | Self-Hosting auf Ihrem Server |
| Wo die Patientendaten liegen | ✗ Kein Serverstandort veröffentlicht | ✓ Auf Ihrem Server |
| Backups | ✓ Mehrfach täglich durch den Anbieter | ~ Ihre Aufgabe |
| Updates | ✓ Automatisch durch den Anbieter | ~ Sie entscheiden, wann |
| Verfügbarkeit | ~ Keine Zahl veröffentlicht | ~ So gut wie Ihr Server |
| Betrieb ohne Internet | ✗ Kein Offlinemodus beschrieben | ✓ Läuft im eigenen Netz weiter |
| Kassenabrechnung (KCH, ZE, KB, PA) | ✓ Enthalten | ✗ Nicht vorhanden |
| Privatabrechnung | ✓ Privatpläne und -abrechnung | ✗ Nicht nach GOZ |
| EBZ | ✓ Integriert, mit Benachrichtigungen | ✗ Nicht vorhanden |
| KZBV-Zulassung | ~ Auf den eigenen Seiten nicht genannt | ✗ Keine |
| Telematikinfrastruktur | ✓ Anbindung genannt, Remote TI Gateway als eigener Service | ✗ Nicht vorhanden |
| Röntgenanbindung | ✓ "Anbindung Rö-Software", Standard nicht genannt | ~ Über die API, nicht über VDDS |
| Rechenzentrum und Factoring | ✓ Rechenzentrum, BFS-Factoring, Bonitätsabfrage | ✗ Nicht vorhanden |
| Integrierte Telefonie | ✓ Optional, mit Anrufsteuerung und Messaging | ✗ Nicht vorhanden |
| Online-Terminbuchung | ✓ Optional, mit Wartelisten und Überbuchung | ✗ Patientenportal angekündigt, heute nicht vorhanden |
| Labor | ✓ Aufträge, Leistungskomplexe, XML-Import | ~ Laboraufträge als Option |
| Praxismanagement | ✓ Schichtplanung, Zeiterfassung, QM, Formulareditor | ~ Aufgaben und Materialverwaltung, kein QM |
| KI-Dokumentation | ✓ medlog, Sprachdiktat (optional) | ✓ KI-Agent über dieselbe API |
| Zahnschema | ~ Nur "Befundung" genannt | ✓ Zahnschema in der Akte |
| Parodontalstatus | ~ Nicht als Funktion genannt, PA nur als Abrechnungsbereich | ✓ Sechs Messstellen je Zahn |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Öffentliche API | ✗ Auf den eigenen Seiten nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Datenexport | ✗ Auf den eigenen Seiten nicht beschrieben | ✓ Ihre PostgreSQL-Datenbank |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |
| Verbreitung | ~ Keine Zahl veröffentlicht, im eigenen Praxisnetzwerk im Einsatz | ✗ Seit 2026 |
| Erfahrung im Produkt | ✓ Seit 2014 in den eigenen Praxen entwickelt | ✗ Seit 2026 |
| Einführung und Support | ✓ Persönliche Begleitung, Premium-Support | ~ Dokumentation und GitHub Discussions |

Zwei Zeilen sagen genau das und nichts weiter. "Auf den eigenen Seiten nicht beschrieben" heißt, dass wir dort keine Entwicklerdokumentation und keine Exportbeschreibung gefunden haben, nicht, dass es für Kunden keine gibt: fragen Sie danach. Und beim Zahnschema steht bei claire ein gelber Punkt und kein roter, weil eine Praxissoftware ohne Zahnschema in Deutschland nicht verkäuflich wäre und die Lücke deshalb mit hoher Wahrscheinlichkeit auf der Website liegt.

## Wählen Sie claire, wenn

Das ist keine Pflichtübung, das sind die Gründe:

- **Sie mit der KZV abrechnen.** KCH, ZE, KB und PA, HKP-ZEs automatisiert, EBZ integriert, Rechenzentrum und Mahnwesen dabei. Bei uns fehlt das vollständig, und daran ändert kein Argument über Lizenzen etwas.
- **Sie die Telematikinfrastruktur brauchen.** Die Anbindung ist genannt, und Patient21 verkauft dazu einen Remote TI Gateway ohne lokalen Konnektor. Diese Zeile ist bei uns leer.
- **Sie eine Software wollen, die jemand selbst benutzt.** claire wird seit 2014 in den Praxen des eigenen Netzwerks eingesetzt, und das merkt man den Detailfunktionen am Empfang an. Ein Anbieter, der sein Produkt jeden Tag selbst bedient, findet Fehler vor Ihnen.
- **Sie am Empfang Zeit verlieren.** Integrierte Telefonie mit Anrufsteuerung, Two-Way-Messaging, Präsenzstatus, systemgenerierte Aufgaben für bewilligte HKPs ohne Folgetermin. Davon haben wir nichts.
- **Sie Online-Terminbuchung brauchen**, mit Wartelisten, Überbuchung und Anbindung an Website und Google Business. Bei uns ist das Patientenportal angekündigt und heute nicht da.
- **Sie keinen Server und keine Backups mehr wollen.** Automatische Updates und mehrfach tägliche Backups sind genau das, was Self-Hosting Ihnen abverlangt.
- **Sie eine deutsche Oberfläche und deutschsprachige Begleitung wollen.** Unsere Oberfläche gibt es heute auf Englisch und Spanisch, und unser Support sind GitHub Discussions.

Wenn drei dieser sieben Punkte zutreffen, ist die ehrliche Antwort, sich claire anzusehen und diesen Text als Fragenliste für das Gespräch zu behalten.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie einen Preis sehen wollen, bevor Sie telefonieren.** Unser Preis steht auf einer Seite, die Sie ohne Formular lesen können.
- **Sie wissen müssen, in welchem Land die Patientendaten liegen.** Bei Self-Hosting ist die Antwort Ihr Serverraum oder Ihr Rechenzentrum, und Sie wählen es aus.
- **Ihre Rechnung nicht mit dem Team wachsen soll.** Ein weiterer Behandler oder ein zweiter Standort ändert bei uns nichts an den Kosten.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche und dokumentierte API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

Probieren Sie es aus, bevor Sie irgendetwas kündigen. Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/).

## Wie ein Umzug wirklich abläuft

1. **Klären Sie zuerst die Kassenabrechnung.** Wenn Sie mit der KZV abrechnen, endet die Liste hier, und der ehrliche Rat ist, bei einem zugelassenen System zu bleiben.
2. **Fragen Sie schriftlich nach dem Export**, bevor Sie kündigen. Auf den Seiten von claire ist kein Datenexport beschrieben. Was Sie bekommen, in welchem Format und bis wann, gehört vor die Kündigung.
3. **Fragen Sie im selben Schreiben nach Laufzeit und Kündigungsfrist.** Auch dazu steht auf den Seiten nichts, und bei reinen Cloud-Produkten ist beides selten null.
4. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie danach arbeiten wollen.
5. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen und Beispielzeilen an, bevor es irgendetwas schreibt.
6. **Prüfen Sie die Zuordnung der Leistungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie.
7. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
8. **Behalten Sie den Zugang zum alten System**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

> **Schritt 6 ist der, an dem Migrationen scheitern.** Zwei Praxen kodieren Leistungen nie gleich, und **eine stillschweigend geratene Zuordnung erzeugt falsche Rechnungen, die monatelang niemand bemerkt**.

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

## Das Ehrliche

claire hat etwas, das wir nicht haben, und es ist nicht das Marketing: die deutsche Kassenabrechnung, EBZ, die TI und zehn Jahre Entwicklung in echten Praxen, die man der Funktionsliste ansieht. Für eine Kassenpraxis, die morgen arbeiten muss, ist ein System dieser Art heute die vernünftige Wahl, und es wäre unredlich, das anders zu schreiben.

Was uns an claire stört, ist nicht das Produkt, sondern wie wenig davon man ohne Gespräch erfährt. Kein Preis, keine Laufzeit, kein Serverstandort, kein Export, und "Kostentransparenz ohne Überraschungen" als Überschrift über einem Absatz ohne Zahl. Wir machen es anders, und was das kostet, steht vollständig auf [der Preisseite](/de/preise/), die eine kurze Seite ist.

## Quellen

Alle am 27. September 2026 abgerufen.

- "Moderne Praxisverwaltung, einfach gemacht", "komplette Praxisverwaltungssoftware", die Cloud-Beschreibung "Als Webapplikation arbeiten Sie unabhängig vom Standort oder Betriebssystem", "Kostentransparenz ohne Überraschungen", "volle Preisklarheit, ohne versteckte Kosten. Mit geringen Anfangsinvestitionen", der Satz zu Dental21 als "einer der größten Dentalketten in Deutschland", die automatischen Updates und Backups sowie die drei Schritte bis zur Demo: [claire.dental](https://claire.dental/)
- Die vollständige Funktionsübersicht, darunter "KCH-, PA-, KB-, ZE- Planung und Abrechnung", "Automatisiertes Schreiben von HKP-ZEs", "Elektronisches Beantratungs- und Genehmigungverfahren (EBZ)", "Befundung", "Anbindung Telematik", "Anbindung Rechenzentrum", "Anbindung Rö-Software", "Erweiterte Anbindung mit BFS-Factoring", "Anbindung mit rose", die optionalen Funktionen, das Tagesprotokoll mit zweistufigem Prüfprozess, die "systemgenerierten Aufgaben", der Präsenzstatus, medlog und "DSGVO-konform verschlüsselt ... auf sicheren Servern": [claire.dental/funktionen](https://claire.dental/funktionen/)
- "begann 2014 die Entwicklung von claire", "Heute wird claire in den Zahnarztpraxen unseres eigenen Praxisnetzwerks eingesetzt" und Patient21 als "einer der führenden Healthtech-Startups auf dem deutschen Dentalmarkt": [claire.dental/uber-uns](https://claire.dental/uber-uns/)
- Firmierung Patient 21 SE, Sitz Joachimsthaler Straße 20 in 10719 Berlin, Amtsgericht Charlottenburg HRB 234032 B, USt-IdNr. DE359596993, Vorstand und Aufsichtsratsvorsitzender: [claire.dental/impressum](https://claire.dental/impressum/)
- Dass die drei Schritte zu einem Demo-Termin führen und nicht in eine Testinstanz: [claire.dental/kontakt](https://claire.dental/kontakt/)
- "Der Standort des Servers der Webseite liegt geografisch in Deutschland" und der Hoster Raidboxes GmbH in Münster, beides ausdrücklich zur Website: [claire.dental/datenschutzerklaerung](https://claire.dental/datenschutzerklaerung/)
- claire im Produktbereich von Patient21 neben Medlog, Availy, Happy, Medpress und DentaliQ.ortho: [software.patient21.com/claire](https://software.patient21.com/claire/)
- Der Remote TI Gateway "cloudbasiert, ohne lokalen Konnektor" auf "zertifizierter TI-Gateway-Infrastruktur in deutschen Rechenzentren" und der dort genannte Marktrichtwert für den TI-Anschluss: [software.patient21.com/ti](https://software.patient21.com/ti/)
- Der separate Abrechnungsservice mit GOZ/BEMA, BEL II und KZV-Quartalsabrechnung: [software.patient21.com/zahnarztliche-leistungsabrechnung](https://software.patient21.com/zahnarztliche-leistungsabrechnung/)
- Dass claire.dental/preise, /kosten und /tarife am 27. September 2026 jeweils HTTP 404 liefern: eigene Abfrage
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei Patient21 etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde. Das gilt auch, wenn Sie bei Patient21 arbeiten.
