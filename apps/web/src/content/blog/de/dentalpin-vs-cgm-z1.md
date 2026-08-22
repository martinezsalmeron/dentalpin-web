---
title: "Dentalpin und CGM Z1.PRO im Vergleich: Server in der Praxis gegen Open Source auf Ihrem Server"
description: "Ehrlicher Vergleich zwischen CGM Z1.PRO und Dentalpin: Betriebsart, Preismodell, TI-Komponenten und Module. Mit dem, was Dentalpin in Deutschland nicht kann."
pubDate: 2026-08-04
updatedDate: 2026-08-22
tags: [vergleich, cgm-z1-pro, praxissoftware]
---

Dieser Vergleich ist für Praxen, die vor der Entscheidung stehen, ob die nächste Praxissoftware wieder eine gekaufte Lizenz von einem großen Anbieter sein soll, und für IT-Dienstleister, die für eine Praxis eine Alternative bewerten. Wenn Sie eine Kassenpraxis in Deutschland führen und heute eine Ablösung für CGM Z1.PRO suchen, steht die ehrliche Antwort in den ersten Zeilen: Dentalpin füllt diese Rolle noch nicht aus.

> **Alles über CGM Z1.PRO in diesem Text stammt von cgm.com**, abgerufen am 4. August 2026, und ist unten mit URL verlinkt. Was CompuGroup Medical nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen und Fachblogs haben wir bewusst weggelassen, weil sie sich widersprechen und keine davon von CGM stammt.

## In dreißig Sekunden

**CGM Z1.PRO ist die vollständige deutsche Praxisverwaltung, die in Ihrer Praxis läuft.** CGM beschreibt sie als "Moderne Software für Zahnärzte, Kieferorthopäden und MKG-Chirurgen" und stellt sie in einer eigenen Übersicht ausdrücklich als serverbasiert dar, mit "Hosting in Ihrer Praxis". Die Basisversion enthält nach CGM-Angabe bereits sämtliche TI-Komponenten, die eine Zahnarztpraxis braucht.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Brauchen Sie TI-Anbindung und deutsche Abrechnung aus einer Hand?** Wenn ja, ist CGM heute die Antwort und Dentalpin nicht. Wenn Sie dagegen wissen wollen, was Ihre Software kostet, bevor Sie mit einem Berater telefonieren, und wenn Ihnen Eigentum an Code und Daten wichtig ist, lohnt der Rest dieses Textes.

## Was CGM Z1.PRO ist

CGM Z1.PRO ist die Zahnarztsoftware der CompuGroup Medical und wird auf der eigenen Produktseite als "Die All-in-One-Praxissoftware ist für jede Praxisform und -größe sowie jeden Fachbereich einsetzbar" beschrieben. Genannte Praxisformen sind "Einzelpraxis, Praxisgemeinschaften, Filial- und Großpraxen sowie MVZ".

Der Aufbau ist ausdrücklich modular. CGM schreibt: "Dank seines modularen Aufbaus (Baukastenprinzip) für jede Praxisform und -größe sowie alle Fachrichtungen geeignet." Die Expertenmodul-Seite nennt "Über 40 Spezialmodule" für CGM Z1.PRO und CGM Z1 und listet sieben Expertenmodule namentlich auf, darunter CGM Z1.PRO Parodontologie, CGM Z1.PRO Implantologie, CGM Z1.PRO MKG und CGM Z1.PRO PAR- und Karies-Risikobeurteilung.

Zur Telematikinfrastruktur ist die Aussage auf der Produktseite eindeutig: Z1.PRO "Enthält bereits in seiner Basisversion sämtliche TI-Komponenten, die Ihre Zahnarztpraxis benötigt, wie z.B. eAU, eRezept und EBZ", mit einem "Konnektor im Rechenzentrum". Das ist genau der Teil, an dem eine deutsche Kassenpraxis nicht vorbeikommt.

CGM veröffentlicht daneben drei weitere Dentalprodukte: CGM XDENT als "Individuell anpassbare Cloud-Software für die Zahnarztpraxis", CGM Z1 als "Der Klassiker unter den Zahnarztinformationssystemen" und CGM HIGHDENT PLUS als "Software für Universitätszahnkliniken & Großpraxen". Zu CGM Z1 schreibt CGM: "Mehr als 7.000 Zahnärzte nutzen CGM Z1 täglich", und Z1.PRO ist dessen Nachfolger.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema erfasst je Fläche, unterscheidet bestehende von geplanten Behandlungen und führt einen Änderungsverlauf pro Zahn.*

### Was CGM zum Preis sagt

Diese eine Zeile ist der Grund, warum ein Vergleich überhaupt schwierig ist, und sie stammt wörtlich von CGM:

> **"Eine standardisierte Preisangabe ist aufgrund der individuellen Anforderung jeder Praxis nicht möglich."** CGM verweist stattdessen auf ein Gespräch: "Vereinbaren Sie gerne zunächst ein unverbindliches Beratungsgespräch mit unseren zertifizierten Praxisberatern, die Ihnen gerne ein individuelles Angebot für Ihre Anforderungen erstellen."

Das ist keine Kritik, sondern die übliche Praxis im deutschen Markt, und CGM sagt es offener als die meisten. Zur Struktur der Kosten wird das Unternehmen in seiner Produktübersicht dann doch konkreter und stellt dem SaaS-Mietmodell von CGM XDENT für Z1.PRO eine "Marktübliche Einstiegsinvestition, dafür geringere laufende Kosten (Lizenz und Wartung)" gegenüber. Sie kaufen also eine Lizenz und zahlen Wartung, und die Höhe erfahren Sie im Gespräch.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung, die unter der Business Source License 1.1 veröffentlicht wird: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, in der Cloud Ihrer Wahl oder auf einem Rechner in der Praxis.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Optional kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal dazu. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch. Die Übersetzung ist als Aufgabe für die Community offen ([Issue im Repository](https://github.com/martinezsalmeron/dentalpin/labels/i18n)), ausgeliefert ist sie heute nicht.

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Plan und ein Verlauf, der sich nach Besuchen, Behandlungen, Finanzen und Kommunikation filtern lässt](/screenshots/patient-timeline.png)

*Der Verlauf einer Patientin an einer Stelle. Jede Zeile ist ein Ereignis mit Zeitstempel und Urheber, und der Filter oben schaltet zwischen Besuchen, Behandlungen, Finanzen und Kommunikation um.*

## Nebeneinander

| | CGM Z1.PRO | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Keiner, "Eine standardisierte Preisangabe ist [...] nicht möglich" | ✓ 0 €, alles inbegriffen |
| Kostenmodell | Einstiegsinvestition plus Lizenz und Wartung | Keine Lizenzgebühr, Kosten nur für Ihren Server |
| Systemarchitektur | Server, "Hosting in Ihrer Praxis" | Self-Hosting auf Ihrem Server |
| Betriebssystem | ✗ Windows | ✓ Browser, Server unter Linux |
| Zugriff | Lokal per Netzwerk oder Server, mehrere Standorte möglich | Über den Browser, von überall, wo Ihr Server erreichbar ist |
| Updates | Manuell, quartalsweise | Wann Sie wollen, Sie entscheiden |
| TI-Komponenten (eAU, eRezept, EBZ) | ✓ In der Basisversion enthalten | ✗ Nicht vorhanden |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kern des Produkts, CGM Z1 als Vorgänger für "Praxisverwaltung, Organisation und Abrechnung" beschrieben | ✗ Nicht vorhanden |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Support | ✓ Deutschlandweites Servicenetzwerk aus zertifizierten Softwarespezialisten | ~ Community in GitHub Discussions |
| Verbreitung | ✓ "Mehr als 7.000 Zahnärzte nutzen CGM Z1 täglich" | ✗ Seit 2026 |
| Zertifizierungen laut Hersteller | ✓ ISO 9001, DSGVO-konform, gematik-zertifiziert | ~ Keine, der Code ist stattdessen prüfbar |
| Module | Über 40 Spezialmodule, einzeln hinzubuchbar | Alle enthalten |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |
| Öffentliche API | ~ Auf cgm.com nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |

Zwei Zeilen brauchen eine Erklärung, damit sie nicht mehr behaupten als sie sollen.

**"Auf cgm.com nicht beschrieben" heißt genau das und nichts weiter.** Wir haben auf den öffentlichen Seiten keine Entwicklerdokumentation gefunden. Fachschnittstellen gibt es sehr wohl, CGM verkauft zum Beispiel das Modul CGM Z1.PRO eLAB-Z für den Austausch mit Dentallaboren. Ob es darüber hinaus eine API für Kunden gibt, wissen wir nicht.

**"Über 40 Spezialmodule" ist eine Zahl von CGM und kein Vorwurf.** Ein Baukasten ist für eine kieferorthopädische Praxis das richtige Modell, weil sie nur zahlt, was sie braucht. Der Unterschied zu uns ist die Richtung, nicht die Qualität: bei uns ist der Umfang fest und der Preis null, bei CGM ist der Umfang wählbar und der Preis individuell.

## Wählen Sie CGM Z1.PRO, wenn

- **Sie TI-Anbindung und Abrechnung aus einer Hand brauchen.** eAU, eRezept und EBZ sind laut CGM in der Basisversion enthalten. Bei uns gibt es davon nichts, und das ist für eine Kassenpraxis kein Detail, sondern die halbe Software.
- **Ihre Praxis ein Fachgebiet vertieft.** Die Expertenmodule für Kieferorthopädie, MKG, Parodontologie und Implantologie sind auf genau diesen Alltag gebaut. Ein einzelnes Produkt mit festem Umfang kann das nicht ersetzen.
- **Sie jemanden vor Ort wollen.** CGM wirbt mit einem "deutschlandweiten Servicenetzwerk aus zertifizierten Softwarespezialisten". Bei uns antwortet die Community, und das ist etwas anderes.
- **Ihr Team heute eine deutschsprachige Oberfläche braucht.** Unsere ist es noch nicht, und das lässt sich nicht schönreden.
- **Sie zu einer Größe gewachsen sind, die CGM ausdrücklich adressiert.** Filial- und Großpraxen sowie MVZ stehen namentlich auf der Produktseite, und für Universitätszahnkliniken gibt es mit CGM HIGHDENT PLUS ein eigenes Produkt.
- **Sie lieber in die Cloud wollen, aber bei CGM bleiben.** Dafür gibt es CGM XDENT, das CGM selbst als Cloud-Software mit "Hosting in Deutschland" führt. Sie müssen den Anbieter nicht wechseln, um die Betriebsart zu wechseln.

Wenn drei dieser sechs Punkte auf Sie zutreffen, ist die ehrliche Antwort, bei CGM zu bleiben. Wir wären lieber die Antwort auf alles, sind es in Deutschland aber heute nicht.

## Wählen Sie Dentalpin, wenn

- **Sie wissen wollen, was die Software kostet, bevor Sie telefonieren.** Unser Preis steht auf einer Seite und ist null. Bei jedem Anbieter, der erst ein Beratungsgespräch braucht, hängt Ihr Preis auch davon ab, wie gut Sie verhandeln.
- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie eine Praxis außerhalb der deutschen Kassenabrechnung führen**, rein privat abrechnen oder in einem Markt arbeiten, dessen Abrechnung ohnehin außerhalb der Praxissoftware läuft.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.
- **Ihre Kosten nicht mit der Praxis wachsen sollen.** Keine Gebühr pro Stuhl, pro Behandler oder pro Patient, und kein Modul, das Sie nachbuchen müssen.
- **Sie nicht an Windows gebunden sein wollen.** Die Oberfläche läuft im Browser, der Server unter Linux.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Der teure Fehler ist nicht, die Software zu wechseln, sondern sie zu wechseln, ohne den Wechsel vorher an einer Kopie geprobt zu haben.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den vollständigen Export bei Ihrem jetzigen Anbieter an**, bevor Sie irgendetwas kündigen: Patienten, Behandlungshistorie, Kostenvoranschläge, Rechnungen mit ihrer Nummerierung, Bilder und den Behandlungskatalog.
2. **Klären Sie schriftlich, was mit der TI-Anbindung passiert.** Das ist bei einem Wechsel weg von einem Anbieter mit eigenem Konnektor der Punkt, der am ehesten übersehen wird.
3. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
4. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
5. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
6. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
7. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Ein Kostenvoranschlag in Dentalpin: geplante Behandlungen, Summen, Gültigkeit und der verknüpfte Behandlungsplan](/screenshots/budgets.png)

*Ein Kostenvoranschlag mit Positionen, Summen und Gültigkeitsdatum. Angenommene Positionen werden zum Behandlungsplan, ohne dass jemand sie noch einmal eintippt.*

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 4. August 2026 abgerufen, und am 22. August 2026 ohne Änderungen erneut geprüft.

- Produktübersicht Zahnarztpraxis, Preisaussage und Servicenetzwerk: [cgm.com/deu_de/loesungen/zahnarztpraxis.html](https://www.cgm.com/deu_de/loesungen/zahnarztpraxis.html)
- Produktseite CGM Z1.PRO, Praxisformen, modularer Aufbau, TI-Komponenten in der Basisversion: [cgm.com/deu_de/produkte/zahnarztpraxis/cgm-z1-pro-1.html](https://www.cgm.com/deu_de/produkte/zahnarztpraxis/cgm-z1-pro-1.html)
- Gegenüberstellung CGM XDENT und CGM Z1.PRO (Systemarchitektur, Betriebssystem, Updates, Hosting, Kostenmodell): [cgm.com/deu_de/lp/cgm-dentalsysteme/smarte-softwareloesungen-fuer-moderne-zahnaerzte.html](https://www.cgm.com/deu_de/lp/cgm-dentalsysteme/smarte-softwareloesungen-fuer-moderne-zahnaerzte.html)
- CGM Z1, "Mehr als 7.000 Zahnärzte nutzen CGM Z1 täglich", Nachfolge durch Z1.PRO: [cgm.com/deu_de/loesungen/zahnarztpraxis/weitere-produkte-und-apps/cgm-z1.html](https://www.cgm.com/deu_de/loesungen/zahnarztpraxis/weitere-produkte-und-apps/cgm-z1.html)
- Expertenmodule und "Über 40 Spezialmodule": [cgm.com/deu_de/loesungen/zahnarztpraxis/experten-und-spezialmodule/cgm-z1-pro-expertenmodule.html](https://www.cgm.com/deu_de/loesungen/zahnarztpraxis/experten-und-spezialmodule/cgm-z1-pro-expertenmodule.html)
- Spezialmodule, darunter CGM Z1.PRO eLAB-Z: [cgm.com/deu_de/loesungen/zahnarztpraxis/experten-und-spezialmodule/cgm-z1-pro-spezialmodule.html](https://www.cgm.com/deu_de/loesungen/zahnarztpraxis/experten-und-spezialmodule/cgm-z1-pro-spezialmodule.html)
- CGM HIGHDENT PLUS, "Software für Universitätszahnkliniken & Großpraxen": [cgm.com/deu_de/produkte/zahnarztpraxis/cgm-highdent-plus.html](https://www.cgm.com/deu_de/produkte/zahnarztpraxis/cgm-highdent-plus.html)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [dentalpin.com/de/preise](/de/preise/)

Fehlt hier etwas, oder hat sich bei CGM etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
