---
title: "Dentalpin und DENSoffice im Vergleich: Kaufpreis, Monatsmiete und was DENS wirklich veröffentlicht"
description: "Ehrlicher Vergleich zwischen DENSoffice von DENS und Dentalpin: veröffentlichte Preise, KZBV-Eignungsfeststellung, TI-Anbindung, Module und Vertragslaufzeiten."
pubDate: 2026-09-03
tags: [vergleich, densoffice, dens, praxissoftware, zahnarztsoftware]
---

DENS ist einer der wenigen deutschen Anbieter, bei denen eine Praxis vor dem Verkaufsgespräch rechnen kann: auf zahnarztsoftware.de liegen ein Angebots-PDF mit Kaufpreis und Monatsmiete und zwei Preisblätter für Support und Schulung. Wer wissen will, was eine deutsche Praxissoftware wirklich kostet, findet hier mehr Zahlen als bei fast jedem Wettbewerber, und dieser Vergleich ist deshalb einer der wenigen, in dem sich beide Seiten gegenüberstellen lassen.

> **Alles über DENSoffice in diesem Text stammt von zahnarztsoftware.de**, abgerufen am 3. September 2026, und ist unten mit URL verlinkt. Was DENS nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir weggelassen, weil sie sich widersprechen und keine davon von DENS stammt.

## In dreißig Sekunden

**DENSoffice ist eine gewachsene deutsche Praxisverwaltung mit vollständiger Kassenabrechnung.** Die DENS GmbH sitzt in Teltow bei Berlin, beschreibt sich selbst als "von Zahnarzt geführtes Familienunternehmen" und hat im Dezember 2024 von der KZBV erneut die Eignungsfeststellung für DENSoffice erhalten. BEMA, GOZ, EBZ für ZE, PA und KB, die Telematikinfrastruktur und die VDDS-Schnittstellen sind da, in Modulen, die im Angebot einzeln aufgeführt werden.

**Dentalpin ist Open Source und gehört Ihnen.** Der Code liegt auf GitHub, die Installation läuft mit einem `docker compose` auf Ihrem eigenen Server, der Kern kostet nichts, und alles, was die Oberfläche kann, kann auch die öffentliche API. Klinisch ist es vollständig: Zahnschema, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Auswertungen.

**Die Frage, die entscheidet: Rechnen Sie mit der KZV ab?** Wenn ja, ist DENSoffice heute die Antwort und Dentalpin nicht, und daran ändert kein Argument über Lizenzen etwas. Wenn Sie rein privat abrechnen, außerhalb Deutschlands arbeiten oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest dieses Textes.

## Was DENSoffice ist

DENSoffice ist die Praxissoftware der DENS GmbH, Berliner Str. 13 in 14513 Teltow, eingetragen beim Amtsgericht Potsdam unter HRB 31195 P, Geschäftsführerin ist Gabriele Rohleder. Die Firma betreibt die Gattungsdomain zahnarztsoftware.de als ihren Hauptauftritt, was beim Suchen leicht zu Verwechslungen führt.

Die Selbstbeschreibung ist ungewöhnlich direkt. Auf der Seite mit den Gründen für DENS steht: "Mittlerweile verwenden über 2000 Zahnarztpraxen in ganz Deutschland das leicht erlernbare und effektive Praxisverwaltungsprogramm DENSoffice." Dazu kommen zwei Sätze über die Eigentümerstruktur, die in diesem Markt selten so offen stehen: "DENS ist ein sehr familiär geführtes und innovatives Unternehmen" und "DENS muss keine Dividenden ausschütten und ist auch keinen Aktionären gegenüber in einer Bringschuld."

Am 3. Dezember 2024 meldete die Firma: "Mit Freude informieren wir unsere Kunden, dass DENS von der KZBV erneut die Eignungsfeststellung für DENSoffice erhalten hat." Für eine deutsche Praxis ist das die Zeile, auf die es ankommt, und bei uns ist sie leer.

### Ein Produkt, das aus Modulen besteht

Der Aufbau steht im Angebots-PDF vollständig, und das ist die beste Modulübersicht, die DENS veröffentlicht. Die Abrechnung ist in Einzelteile zerlegt:

- **DENSkch** dokumentiert und rechnet Leistungen ab, **DENSgoz** ist die "GOZ-Abrechnung mit über 1200 aktuellen Faktorbegründungen", **DENSdta** die "Papierlose Abrechnung mittels DTA (USB, HDD, Online)".
- **DENSze/EBZ**, **DENSpar/EBZ** und **DENSkb/EBZ** sind das ZE-, das Parodontologie- und das Kieferbruchmodul, jeweils "inkl. EBZ".
- **DENSvisuell** ist die "Detailbefundung mittels moderner Zahngrafik", also das Befundschema, und nicht etwa die Patientenaufklärung. Die heißt **DENS.marketing** und wird als "Einzigartiges Patientenaufklärungssystem mit ZE-Umsatzmotor" beschrieben.
- **DENSlabor**, **DENSip**, **DENSmakro**, **DENSausk**, **DENSrecall**, **DENSrtg**, **DENStodo**, **DENSconnect**, **DENStext** und **DENSscan/extdok** decken Eigenlabor, Prophylaxe, Leistungsketten, Auswertungen, Recall, Röntgenanbindung, Aufgaben, interne Nachrichten, Texte und das Scannen von Patientenunterlagen ab.
- **DENSmehrplatz** ist die "Lizenz zum Betrieb eines Netzwerks mit bis zu 25 eingesetzten PC-Arbeitsplätzen".

Als Zusatzsoftware kommen DENS.onTIME für die Terminplanung, DENS.fakt für die Rechnungsübergabe an VDDS-Rechenzentren, DENS.sms, DENS.ecash für Zahlungsterminals, DENS.touch für die Leistungseingabe und DENS.video für Intraoralkameras dazu.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

### Telematikinfrastruktur und Schnittstellen

Hier ist DENSoffice vollständig. Das Modul **DENS.TI-ready** ist im Angebot als "PVS-Anbindung zur TI" beschrieben, "inkl. VSDM, elektr. Patientenakte (ePA), Komfortsignatur (QES), elektr. Medikationsplan (eMP) - NFDM, elektr. Arbeitsunfähigkeitsbescheinigung (eAU), Kommunikation in der Medizin (KIM), elektr. Rezept (e.Rx) & elektr. Zahnbonusheft", dazu die elektronische Medikationsliste (eML).

Wie ernst das gemeint ist, sieht man weniger an der Produktseite als an einer Nebensache: die eigene Sitemap führt mehr als zwanzig Seiten zu einzelnen secunet-Konnektor-Fehlercodes. Das schreibt niemand, der die TI nur auf dem Papier unterstützt.

Bei den Schnittstellen nennt die eigene Übersicht:

- **VDDS.** "DENSoffice unterstützt alle Systeme, die den Branchenstandard VDDSmedia (VDDS MEDIA) verwenden", dazu VDDS-RZ und VDDS-RZ-XML.
- **Bildgebung.** Namentlich aufgeführt sind unter anderem Carestream, DÜRR Dental (DBSWIN, VistaSoft), Planmeca Romexis, Dentsply Sirona Sidexis, Vatech, Acteon, Owandy, Air Techniques, MyRay/Cefla, KaVo und Morita.
- **Rechenzentren und Factoring.** BFS health finance, DZR, Health AG, PVS dental und ZAB über VDDS-RZ.
- **Anbieterwechsel.** Die "Systemwechsel-Schnittstelle (SWS2)" und AzP für die Übergabe von Patienten- und Behandlungsdaten.

Der KI-Telefonassistent Ella, den die Website prominent zeigt, ist ausdrücklich ein Partnerprodukt der Ella Group und nicht Teil von DENSoffice. DENS schreibt, man arbeite "gemeinsam mit Ella daran, die Möglichkeiten einer noch tieferen Integration in DENSoffice kontinuierlich auszubauen".

## Was DENSoffice kostet

Der übliche Satz dieser Vergleichsreihe wäre hier zu pauschal. DENS hat keine Preisseite, aber die Startseite verlinkt am 3. September 2026 drei PDFs, und zusammen ergeben sie ein erstaunlich vollständiges Bild.

Das **Sonderangebot-PDF** ist ein ausgefülltes Bestellformular für "die Praxissoftware DENSoffice EXPERIENCED inkl. Updateservice und Zugriff auf die DENS-Anwenderhotline" mit den oben genannten Modulen, Installation, Einrichtung der Kartenlesegeräte, einer Teamschulung per Remote und bis zu vier Stunden Individualisierung. Darunter steht:

> **"Sparen Sie 4.000,-€ und bestellen Sie jetzt zum Aktionspreis von nur 9.900,- EUR* (statt regulär 13.900,-EUR*)"**, und in der Zeile darunter: "Die Lizenzgebühren betragen für dieses Angebot insgesamt nur 290,-- EUR*/Monat." Der Stern löst sich auf in "Alle Preise verstehen sich zzgl. Anfahrt und MwSt."

Das ist also beides: ein einmaliger Betrag im mittleren vierstelligen Bereich für Software, Installation und Schulung, und danach eine laufende Lizenzgebühr von 290 € netto im Monat. Das PDF nennt keinen Gültigkeitszeitraum für die Aktion, es liegt seit September 2025 im Upload-Verzeichnis und war ein Jahr später noch verlinkt.

Das **Preisblatt für Zusatzdienste** (Stand 01.07.2025) regelt, was danach dazukommt:

- **Aufnahme und Erstanalyse von Problemstellungen: kostenfrei.** Das ist die wichtigste Zeile darin.
- **120 € pro Stunde** für einen DENS-Spezialisten aus der Hotline, "berechnet mit 30 € pro angefangenen 15 Minuten", für Einrichtungen, Individualisierungen und das Anpassen von Leistungskatalogen.
- **180 € je angefangene Stunde** für einen Spezialisten aus der Entwicklungsabteilung, wenn es um "Datenbank - Analyse und Bearbeitung bzw. Datenrettung" geht.
- **120 € pro Stunde** für Schulungen, mit dem Paket "5 Updateschulungen zum Preis von 4" für 480 €.
- **120 € pro Stunde** für die Abrechnungsunterstützung, die im PDF "Abrechnungsfeuerwehr" heißt, und ein Zeitguthaben von zehn Stunden für die HKP-Erstellung und die DTA-Vorbereitung an die KZV für 1.000 €.

Das **EDV-Support-Preisblatt** bepreist die Telematik-Hardware einzeln: Ersteinrichtung eines Konnektors 279 €, Passwort-Reset bei secunet-Konnektoren 199 €, Firmware-Update je Konnektor 99 €, Einrichtung je Kartenterminal 89 €, KIM-Grundinstallation für einen PC 129 € und 59 € je weiterem Arbeitsplatz. Nach Aufwand kostet ein geplanter Termin 38 € je angefangene 15 Minuten, außerplanmäßige Sofortunterstützung 45 €.

> **Eine Ungenauigkeit im eigenen Dokument, die man kennen sollte.** Das EDV-Preisblatt trägt in der Überschrift "Netto-Preis-Blatt vom 01.01.2024" und in der Fußzeile "Stand: 01.05.2024". Beide Daten liegen mehr als zwei Jahre zurück. Lassen Sie sich die aktuellen Sätze schriftlich bestätigen, bevor Sie mit diesen Zahlen kalkulieren.

### Was im Vertrag steht

Die AGB sind der Teil, den vor der Unterschrift kaum jemand liest, und bei DENS stehen dort drei Sätze, die eine Kalkulation über fünf Jahre verändern.

Zur Laufzeit: "Der Lizenzvertrag endet mit dem Schluss des auf den Vertragsabschluss folgenden Kalenderjahres. Er verlängert sich jeweils um ein Jahr, wenn er nicht durch eine Partei spätestens drei Monate zuvor gekündigt wird."

Zum Preis: "DENS ist berechtigt, das Lizenzentgelte nach Ablauf des ersten Vertragsjahres zu erhöhen." Steigt der Preis um mehr als fünf Prozent im Jahr, räumen die AGB dem Kunden ein Kündigungsrecht mit vier Wochen Frist ein.

Zur Hotline: "DENS stellt dem Kunden montags bis freitags in der Zeit von 08.00 Uhr bis 16.00 Uhr eine Hotline zur Verfügung." Die Rufnummer ist gebührenfrei.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Sie installieren sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, und bedient wird sie im Browser.

Der Kern umfasst Terminkalender, Patienten, Zahnschema, Patientenakte, Kostenvoranschläge und Abrechnung. Dazu kommen Parodontalstatus, Auswertungen, ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt, und WhatsApp als Benachrichtigungskanal. Es gibt keine Gebühr pro Behandlungsstuhl, pro Behandler oder pro Patient, und kein Modul wird einzeln hinzugebucht.

Was es in Deutschland heute **nicht** gibt: keine KZV-Abrechnung nach BEMA oder GOZ, keine KZBV-Eignungsfeststellung, keine Anbindung an die Telematikinfrastruktur, kein EBZ, kein Einlesen der elektronischen Gesundheitskarte, keine VDDS-Schnittstelle, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Parodontalstatus in Dentalpin mit sechs Messstellen je Zahn](/screenshots/periodontogram.png)

*Der Parodontalstatus erfasst Taschentiefe, Rezession und Bluten je Messstelle. Bei DENSoffice ist die Parodontologie ein eigenes Modul.*

## Nebeneinander

| | DENSoffice | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, Kauf plus Monatsmiete | Open Source (BSL 1.1) |
| Veröffentlichte Preise | ✓ Angebots-PDF und zwei Preisblätter | ~ 0 € selbst gehostet, Betreuung auf Anfrage |
| Einstiegskosten | ~ 9.900 € Aktionspreis, regulär 13.900 €, zzgl. MwSt | ✓ Keine |
| Laufende Lizenzgebühr | ~ 290 € netto im Monat für das Angebotspaket | ✓ Keine |
| Aufbau | Ein Produkt aus über zwanzig einzeln benannten Modulen | Ein Umfang, nichts zubuchbar |
| Betriebsart | Server-Client in der Praxis | Self-Hosting auf Ihrem Server, Browser |
| Gehosteter Cloud-Betrieb | ✗ Auf zahnarztsoftware.de nicht beschrieben | ~ Sie hosten selbst |
| Arbeitsplätze je Lizenz | ~ DENSmehrplatz bis zu 25 PC-Arbeitsplätze | ✓ Unbegrenzt |
| Systemvoraussetzungen | ✗ Nicht veröffentlicht | ✓ Docker und ein Browser |
| KZBV-Eignungsfeststellung | ✓ Erneut erteilt, Dezember 2024 | ✗ Keine |
| KZV-Abrechnung (BEMA/GOZ) | ✓ Kernfunktion, inkl. DTA | ✗ Nicht vorhanden |
| EBZ | ✓ ZE, PA und KB | ✗ Nicht vorhanden |
| Telematikinfrastruktur | ✓ VSDM, ePA, eMP, eAU, KIM, e-Rezept, QES | ✗ Nicht vorhanden |
| VDDS-Schnittstellen | ✓ VDDSmedia, VDDS-RZ, VDDS-RZ-XML | ✗ Nicht vorhanden |
| Röntgenanbindung | ✓ Elf Hersteller namentlich genannt | ~ Über die API, nicht über VDDS |
| Verbreitung | ✓ "über 2000 Zahnarztpraxen" laut eigener Website | ✗ Seit 2026 |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Deutschsprachiger Support | ✓ Gebührenfreie Hotline, Mo bis Fr 08 bis 16 Uhr | ~ Community in GitHub Discussions |
| Vertragsbindung | ~ Jahresvertrag, drei Monate Kündigungsfrist | ✓ Keine |
| Preiserhöhung | ~ Nach dem ersten Vertragsjahr zulässig | ✓ Kein Preis, der steigen könnte |
| Datenübernahme beim Wechsel | ✓ SWS2 und AzP, aus Zahn32 kostenfrei | ✓ Voller Datenbankzugriff und API |
| Öffentliche API | ✗ Auf zahnarztsoftware.de keine Entwicklerdokumentation beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |

Zwei Zeilen sagen genau das und nichts weiter. "Systemvoraussetzungen nicht veröffentlicht" heißt, dass wir auf zahnarztsoftware.de keine Seite mit Betriebssystemen, Hardware oder Netzanforderungen gefunden haben. Dass von "PC-Arbeitsplätzen" die Rede ist und dass DENS 2019 den Umstieg auf Windows 10 empfahl, legt eine Windows-Installation nahe, aber wir schreiben hier nicht hin, was wir nicht belegen können: fragen Sie danach. Bei der API gilt dasselbe. Öffentlich beschrieben sind die VDDS-Standards und benannte Partnerprodukte, ob es für Kunden mehr gibt, wissen wir nicht.

## Wählen Sie DENSoffice, wenn

- **Sie mit der KZV abrechnen.** Das ist die halbe Software einer deutschen Praxis. DENSoffice bringt BEMA, GOZ mit über 1200 Faktorbegründungen, die papierlose DTA und EBZ für ZE, PA und KB mit, und die KZBV hat die Eignung im Dezember 2024 erneut festgestellt. Bei uns fehlt das ganz.
- **Sie die Telematikinfrastruktur brauchen.** VSDM, ePA, eMP, eAU, KIM, e-Rezept, Komfortsignatur und das elektronische Zahnbonusheft sind in DENS.TI-ready benannt, und die Fehlercode-Seiten zu den secunet-Konnektoren zeigen, dass jemand dort täglich damit arbeitet. Diese Zeile ist bei uns leer.
- **Sie eine Hotline wollen, die ans Telefon geht.** Gebührenfrei, montags bis freitags von 08 bis 16 Uhr, mit einer Erstanalyse, die laut eigenem Preisblatt nichts kostet. Wir haben GitHub Discussions und sonst nichts.
- **Sie Ihr Röntgen an die Praxissoftware anbinden müssen.** Elf Hersteller stehen namentlich auf der Schnittstellenseite, angebunden über VDDSmedia. Wir sind nicht Mitglied im VDDS und sprechen den Standard nicht.
- **Sie Wert auf einen inhabergeführten Anbieter legen.** "DENS muss keine Dividenden ausschütten und ist auch keinen Aktionären gegenüber in einer Bringschuld" ist ein Satz, den in diesem Markt sonst kaum jemand schreiben kann, und für eine Praxis, die sich an einen Anbieter bindet, ist er ein Argument.

Wenn drei dieser fünf Punkte auf Sie zutreffen, ist die ehrliche Antwort, sich DENSoffice anzusehen und diesen Text als Hintergrund zu behalten.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie außerhalb der deutschen Kassenabrechnung arbeiten**, rein privat abrechnen oder die Abrechnung ohnehin außerhalb der Praxissoftware erledigen.
- **Sie keinen vierstelligen Einstiegsbetrag ausgeben wollen**, um überhaupt zu sehen, ob eine Software zu Ihren Abläufen passt. Unsere Demo läuft ohne Anmeldung, eine eigene Installation kostet nichts außer dem Server.
- **Sie mehr als 25 Arbeitsplätze haben** oder wollen, dass die Zahl der Arbeitsplätze keine Lizenzfrage mehr ist.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche API. Kein Ticket, keine Freigabe, keine Zusatzlizenz und kein Stundensatz von 120 €.

> **Prüfen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, und eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Denken Sie dabei an die drei Monate Kündigungsfrist zum Jahresende, die in den DENS-AGB stehen: der Zeitpunkt für einen Test ist das Frühjahr, nicht der Dezember.

## Wie ein Umzug wirklich abläuft

1. **Fordern Sie den Export über SWS2 oder AzP an**, bevor Sie irgendetwas kündigen. DENS nennt beide Schnittstellen auf der eigenen Übersichtsseite für die Übergabe von Patienten- und Behandlungsdaten, also sind sie da.
2. **Klären Sie schriftlich, was der Export enthält.** Gescannte Dokumente aus DENSscan, Bilder aus den angebundenen Röntgensystemen und eigene Texte aus DENStext liegen nicht zwangsläufig in derselben Datei wie die Kartei.
3. **Rechnen Sie den Aufwand mit ein.** Datenbankarbeiten durch die Entwicklungsabteilung stehen im Preisblatt mit 180 € je angefangene Stunde. Fragen Sie vorher, ob ein Export darunter fällt.
4. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie arbeiten wollen.
5. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen an, bevor es irgendetwas schreibt.
6. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie. Das ist der Schritt, an dem Migrationen scheitern.
7. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
8. **Behalten Sie das alte System schreibgeschützt**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

![Patientenakte in Dentalpin, Reiter Aktivität: klinische Warnhinweise, laufender Behandlungsplan und ein nach Besuchen, Behandlungen, Zahlungen und Kommunikation filterbarer Verlauf](/screenshots/patient-timeline.png)

*Der Verlauf einer Akte nach dem Import. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

Eine Sache macht DENS beim Wechsel besser als fast alle: für Zahn32 bietet die Firma "kostenfreie Datenübernahmen" an, dazu eine "kostenlose Probedatenübernahme" und den Parallelbetrieb beider Programme. Wenn Sie von Zahn32 kommen, ist das ein echtes Argument, und es steht hier, weil es stimmt.

Was Dentalpin kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

## Quellen

Alle am 3. September 2026 abgerufen.

- Firmierung, Sitz, Amtsgericht Potsdam HRB 31195 P, Geschäftsführerin und USt-ID: [zahnarztsoftware.de/impressum](https://zahnarztsoftware.de/impressum/)
- "Mittlerweile verwenden über 2000 Zahnarztpraxen in ganz Deutschland...", "von Zahnarzt geführtes Familienunternehmen", "DENS muss keine Dividenden ausschütten..." und die gebührenfreie Programm-Hotline: [zahnarztsoftware.de/gute-gruende-fuer-dens](https://zahnarztsoftware.de/gute-gruende-fuer-dens/)
- "Mit Freude informieren wir unsere Kunden, dass DENS von der KZBV erneut die Eignungsfeststellung für DENSoffice erhalten hat", 3. Dezember 2024: [zahnarztsoftware.de/dens-erhaelt-erneut-die-eignungsfeststellung](https://zahnarztsoftware.de/dens-erhaelt-erneut-die-eignungsfeststellung/)
- Modulliste, DENSmehrplatz "bis zu 25 eingesetzten PC-Arbeitsplätzen", DENS.TI-ready, DENSvisuell, DENS.marketing, der Aktionspreis von 9.900 € statt 13.900 € und die Lizenzgebühr von 290 € im Monat: [Sonderangebot DENSoffice EXPERIENCED (PDF)](https://zahnarztsoftware.de/wp-content/uploads/2025/09/Sonderangebot2025.pdf), verlinkt von [zahnarztsoftware.de](https://zahnarztsoftware.de/)
- Stundensätze 120 € und 180 €, "Aufnahme und Erstanalyse von Problemstellungen: Kostenfrei", Updateschulungspaket 480 € und Abrechnungsunterstützung 1.000 €, Stand 01.07.2025: [Preisblatt für Zusatzdienste (PDF)](https://zahnarztsoftware.de/wp-content/uploads/2025/06/HotlinePreise_2025.pdf)
- Konnektor-, Kartenterminal- und KIM-Preise sowie 38 € und 45 € je angefangene 15 Minuten, mit den beiden abweichenden Datumsangaben 01.01.2024 und 01.05.2024: [DENS EDV-Support Netto-Preis-Blatt (PDF)](https://zahnarztsoftware.de/wp-content/uploads/2024/05/EDVPreise_2024.pdf)
- VDDSmedia, VDDS-RZ, VDDS-RZ-XML, die elf namentlich genannten Röntgenhersteller, die TI-Komponenten und die Systemwechsel-Schnittstelle SWS2 sowie AzP: [zahnarztsoftware.de/schnittstellen](https://zahnarztsoftware.de/schnittstellen/)
- Laufzeit des Lizenzvertrags, die Drei-Monats-Frist, das Recht zur Preiserhöhung nach dem ersten Vertragsjahr und die Hotline von 08.00 bis 16.00 Uhr: [zahnarztsoftware.de/agb](https://zahnarztsoftware.de/agb/)
- "kostenfreie Datenübernahmen von Zahn32 nach DENSoffice", die kostenlose Probedatenübernahme und der Parallelbetrieb: [zahnarztsoftware.de/zahn32](https://zahnarztsoftware.de/zahn32/)
- Ella als Partnerprodukt der Ella Group und "gemeinsam mit Ella daran, die Möglichkeiten einer noch tieferen Integration in DENSoffice kontinuierlich auszubauen": [zahnarztsoftware.de/ki-assistenz-mit-ella](https://zahnarztsoftware.de/ki-assistenz-mit-ella/)
- Die Empfehlung zum Umstieg auf Windows 10, 17. September 2019: [zahnarztsoftware.de/ende-von-win-7](https://zahnarztsoftware.de/ende-von-win-7/)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei DENS etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde.
