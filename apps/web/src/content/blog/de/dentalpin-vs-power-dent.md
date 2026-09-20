---
title: "Dentalpin und power.dent im Vergleich: der österreichische Platzhirsch gegen Open Source auf dem eigenen Server"
description: "Ehrlicher Vergleich von power.dent (Henry Schein One Austria) und Dentalpin: e-card, WAHonline, Registrierkassa, Laufzeiten, Preise und Datenhaltung."
pubDate: 2026-09-20
tags: [vergleich, power-dent, henry-schein-one, praxissoftware, zahnarztsoftware, oesterreich]
---

power.dent ist in Österreich die Software, an der man in der Ordination kaum vorbeikommt: nach eigener Angabe 1.450 Zahnarztpraxen, die e-card samt e-Rezept eingebaut, WAHonline für die Honorarnoten, und die ÖGK-Tarifupdates kommen als Download vom Hersteller. Wer das liest und trotzdem über eine offene Lösung auf dem eigenen Server nachdenkt, hat dafür meistens zwei Gründe, und dieser Text handelt von beiden.

Wir bauen Dentalpin, sind also nicht neutral. Genau sein können wir trotzdem.

> **Alles über power.dent in diesem Text stammt von powerdent.at**, abgerufen am 20. September 2026, samt den beiden Geschäftsbedingungen (Version 05/2026) und der Datenschutzerklärung (Stand 31. August 2026), die dort öffentlich als PDF liegen. Was die Henry Schein One Austria GmbH nicht selbst veröffentlicht, steht hier nicht. Zahlen aus Vergleichsportalen haben wir bewusst weggelassen, auch dort, wo sie schmeichelhaft gewesen wären.

## In dreißig Sekunden

**power.dent ist die Praxisverwaltung der Henry Schein One Austria GmbH in Wien, gebaut für den österreichischen Abrechnungsalltag.** e-card-Schnittstelle mit e-Rezept, ELDA, MedTrans, WAHonline, die Einnahmen-Ausgaben-Rechnung samt Registrierkassa und die Tarifupdates für die Patientenanteile der ÖGK: das ist alles da, gepflegt und in der Standardlieferung beschrieben. Dazu eine Hotline in Wien mit veröffentlichten Zeiten.

**Dentalpin ist Open Source und läuft auf Ihrem eigenen Server.** Der Code liegt auf GitHub, die Installation ist ein `docker compose`, es gibt keine Gebühr je Behandler, je Behandlungsstuhl oder je Standort, und alles, was die Oberfläche kann, kann auch die öffentliche API. Für eine österreichische Kassenordination fehlt allerdings genau das, was power.dent stark macht.

**Die Frage, die entscheidet: brauchen Sie e-card, e-Rezept und WAHonline aus der Software heraus?** Wenn ja, ist power.dent heute die Antwort und wir sind es nicht. Wenn Sie rein privat abrechnen, die Abrechnung ohnehin außerhalb der Praxissoftware erledigen oder vor allem Eigentum an Code und Daten suchen, lohnt der Rest.

![Wochenansicht der Agenda in Dentalpin: Termine je Behandler und Behandlungszimmer nebeneinander, mit Dauer und Status](/screenshots/schedule-week.png)

*Die Wochenansicht der Agenda in Dentalpin, mit den Demodaten der Installation.*

## Was power.dent ist

Herausgeber ist die Henry Schein One Austria GmbH, Schönngasse 15-17, 1020 Wien, FN 73410 g beim Handelsgericht Wien, UID-Nr. ATU15125709, Geschäftsführer Francesco Gallo. Die Konzernzugehörigkeit steht ebenfalls auf ihren eigenen Seiten: die Einwilligung im Newsletter-Formular der Startseite spricht von "Henry Schein One, LLC und seinen verbundenen Unternehmen", und die Datenschutzerklärung nennt die Henry Schein One Italia SRL als Empfängerin für den "Datenaustausch innerhalb der Unternehmensgruppe".

Die Selbstbeschreibung auf der Startseite lautet "Die führende Praxissoftware für Zahnärzte in Österreich". Das ist ihre Aussage, kein von uns geprüfter Marktanteil, und wir geben sie als Zitat weiter.

Die Zahlen stehen an zwei Stellen und sie sind nicht ganz dieselben. Die Zähler auf der Startseite laufen auf 37+ Jahre Erfahrung, 1.450+ Zahnarztpraxen, 7.430+ lizenzierte Plätze und 399.200+ Formularübermittlungen. Die FAQ schreibt dagegen "seit über 35 Jahren", "Mehr als 1.400 Zahnarztpraxen" und "über 7.000 Arbeitsplätze". Beides ist ihres, beides steht hier.

### Zwei Produkte, und der Unterschied ist echt

Das Haus verkauft nebeneinander zwei Betriebsarten, und die Geschäftsbedingungen beschreiben sie klarer als die Marketingseiten.

- **power.dent classic** ist laut Vertrag "eine On-Premise-Softwarelösung, die auf den EDV-Systemen des Kunden installiert und betrieben wird und nicht cloudbasiert ist". Die Produktseite nennt sie "Die Server-basierte Lösung vor Ort" und verspricht "die volle Kontrolle über Ihre Daten".
- **power.dent air** ist laut Vertrag "eine Software-as-a-Service-Lösung, die cloudbasiert betrieben wird". Ohne Internetverbindung geht dort nichts: "Kann ich offline weiterarbeiten? Nein."

Der Funktionsumfang der Standardlieferung steht in Punkt 16.1 beider Verträge. Für air: Patientenerfassung, Leistungseingabe, Einnahmen-/Ausgabenrechnung inklusive Registrierkassa, Schnittstellen zu Drittprogrammen (Röntgen, ELDA, MedTrans, VDDS), Recall, Mahnwesen, eCard-Schnittstelle mit e-Rezept, WAHonline und Statistiken. Classic nennt zusätzlich die Buchhaltungsüberleitung zu BMD, RZL und LSS, die FUS-Übermittlung, Dokumentenmanagement mit Importfunktion, Serienbriefe und Statistiken mit Quartals- und Jahresvergleich.

### Was ein Modul ist und was nicht

Die Liste der Zusatzsoftwaremodule steht ebenfalls im Vertrag, und sie ist länger, als die Produktseiten vermuten lassen: power.forms, power.termin365, power.webkalender, power.sms, power.arbeitszeitverwaltung, power.parodontologie, power.lager, power.edu, power.implantologie, die digitale Röntgenbildanbindung über VDDS, die Mehrbehandlerordination, die Registrierkassa-Sicherheitseinrichtung und die Telefonanruferkennung. Alle werden "gegen gesonderte Gebühr" bestellt.

**Der Parodontalstatus ist eines dieser Zusatzmodule, und er ist in keinem der drei veröffentlichten Bundles enthalten.** power.parodontologie erfasst laut Herstellerseite Taschenbefunde, Blutungs- und Plaque-Indizes und eine PDU-Befundung mit Verlaufsanzeige. In der Bundle-Tabelle für Basic, Pro und Enterprise taucht es nicht auf, ebenso wenig power.implantologie, power.edu und power.webkalender.

Ein Detail, das erst im Kleingedruckten auffällt: Punkt 2.4 hält fest, dass jedes zusätzlich bestellte Modul "einer eigenständigen Vertragslaufzeit mit gesondertem Beginn und Ende" unterliegt. Wer im dritten Jahr ein Modul dazubucht, hat danach zwei Enddaten statt einem.

Die eigenen Seiten widersprechen sich an einer Stelle, und wir geben beide Fassungen wieder: die Standardlieferung nennt "Schnittstellen zu Drittprogrammen (z. B. Röntgen, ELDA, MedTrans, VDDS)", während die digitale Röntgenbildanbindung über VDDS in derselben Urkunde als Zusatzmodul geführt wird. In den drei air-Bundles ist sie enthalten.

### Die Bundles ohne Zahlen

Die Seite zu power.dent air veröffentlicht eine vollständige Häkchentabelle für Basic, Pro und Enterprise. Alle drei starten mit dem "power.dent Grundmodul Einplatz" und enthalten Kalender mit SMS-Terminerinnerung, das Abo power.termin365, Anruferkennung, power.forms, die digitale Röntgenbildanbindung, Kassenabrechnung, SMS-Grundgebühr und die Registrierkassa-Sicherheitseinrichtung. Pro ergänzt Arbeitszeitverwaltung sowie "IMO/RCI & DentIA", Enterprise zusätzlich Lagerverwaltung und Mehrbehandlerordination.

> **Eine vollständige Paketübersicht ohne einen einzigen Betrag ist die ehrlichste Zusammenfassung dieser Preisseite.** Auf keiner konsultierten Seite steht ein Euro-Preis, weder für classic noch für air, weder je Platz noch je Bundle. Die FAQ antwortet auf "Was kostet power.dent air" mit "einem planbaren Modell mit regelmäßigen Kosten". Der einzige Eurobetrag in beiden veröffentlichten Verträgen sind die 40,00 EUR, die pro Mahnschreiben verrechnet werden dürfen.

### Laufzeit, Indexanpassung und Verfügbarkeit

Hier liegt der Teil, den man vor der Unterschrift kennen sollte, und er ist öffentlich nachlesbar.

- **24 Monate bei air, 12 Monate bei classic.** Punkt 2.2 der air-Bedingungen nennt "vierundzwanzig (24) Monate, sofern sich aus dem Angebot nicht etwas anderes ergibt", classic nennt zwölf.
- **Kündigungsfrist 60 Tage, sonst Verlängerung um 12 Monate.** Identisch in beiden Verträgen, Punkt 2.3.
- **90 Tage Lesezugriff nach Vertragsende.** Die Daten "bleiben jedoch weiterhin intakt und können weiterhin für 90 Tage ab Aussetzung/Vertragsbeendigung über die Software selbst eingesehen werden, aber sie können nicht geändert oder hinzugefügt werden".
- **Jährliche Indexanpassung bei air.** Punkt 5.6 erlaubt eine Anpassung an den Verbraucherpreisindex der Statistik Austria (Basis VPI 2020) mit Stichtag 31. Oktober, und ausdrücklich das Nachholen einer ausgelassenen Erhöhung im Folgejahr.
- **Erhöhung darüber hinaus mit 30 Tagen Vorlauf.** Über 20 Prozent gilt eine Vorankündigung per Einschreiben und eine Frist von drei Monaten, dem Kunden steht dann eine außerordentliche Kündigung mit sieben Tagen Frist per Einschreiben zu.
- **99 Prozent Verfügbarkeit im Jahr, als Bemühen.** Der Wortlaut ist "bemüht sich um eine Verfügbarkeit der bestellten Software von 99 % pro Jahr", angekündigte Wartung und höhere Gewalt werden nicht abgezogen. Das sind rechnerisch gut drei Tage im Jahr, und eine Gutschrift sieht der Vertrag nicht vor.
- **Lizenz-Audit.** HSO-AT darf die lizenzkonforme Nutzung "jederzeit nach mindestens 14-tägiger Ankündigung vor Ort oder remote" prüfen und dafür einen zur Verschwiegenheit verpflichteten Wirtschaftsprüfer oder Rechtsanwalt beiziehen.

Schulungen und der Datenimport aus einem Fremdsystem sind eigene, kostenpflichtige Leistungen. Für die Übernahme hält der Vertrag fest, dass HSO-AT "keine Haftung für die vollständige Übertragung/Import sämtlicher Daten" übernimmt.

### Wo die Daten liegen

Das ist die Stelle, an der power.dent mehr veröffentlicht als fast jeder andere Anbieter in diesem Markt, und das rechnen wir ihnen an.

Die FAQ bleibt vage und sagt "professionelle Rechenzentren innerhalb Europas". Die Datenschutzerklärung wird konkret und nennt für "PowerDent Air" als Rechenzentrum "AZURE DEVOPS SERVICES by Microsoft Ireland Operations, Ltd" mit Geschäftssitz Irland und der Grundlage "Innerhalb des EWR". Dieselbe Urkunde listet die weiteren Empfänger mit Zweck und Sitz auf, darunter drei mit dem ausdrücklichen Zweck "Kundendatenbank (inkl. Patientendaten)": Infomed Software, S.L. (Spanien, technischer Support, DentIA, ImageOne) sowie BEAT DATA SRL und PROACTIVITY SRL (beide Italien, Fehlerbehebung und Entwicklung von Anwendungsfunktionen). Für dieselbe Fehlerbehebung an "Power.Dent und zugehörige Dienste" steht UnTap aus Italien in der Liste, dort ohne die Zeile zur Kundendatenbank. Dazu Zendesk für Tickets und Salesforce als CRM in den USA unter dem EU-US Data Privacy Framework.

Zwei Sätze daneben sollte man mitlesen. Punkt 11.1 des air-Vertrags sagt, die Inhalte würden vor der Übertragung verschlüsselt und durch Codes geschützt, "die vom Kunden festgelegt und HSO-AT nicht bekannt sind". Der Auftragsverarbeitervertrag in Anhang A sagt an anderer Stelle, ein Drittlandtransfer sei "nicht auszuschließen", etwa in die Vereinigten Staaten, auf Basis von Angemessenheitsbeschlüssen oder Standardvertragsklauseln.

**Fragen Sie nach der aktuellen Unterauftragsverarbeiter-Liste und lassen Sie sie sich geben.** Der Vertrag verweist dafür auf `powerdent.at/kundenbereich/`. Auf der dort konsultierten Seite stehen Updates, Tarifdateien, Handbücher und die Auftragsverarbeitungs-Vereinbarung zum Ausfüllen, eine Liste der Unterauftragsverarbeiter aber nicht. Die tatsächliche Aufzählung steht in der Datenschutzerklärung, verlinkt im Fuß der Website.

Nicht veröffentlicht sind auf allen konsultierten Seiten: ein Preis, die Systemvoraussetzungen für classic (weder Windows noch macOS noch Linux werden irgendwo genannt), eine ISO-27001-Zertifizierung, eine API- oder Entwicklerdokumentation und das Wort Zahnschema. Die Datenschutzerklärung führt "Zahnstatus" und "Parodontalstatus" als verarbeitete Datenkategorien, die Produktseiten beschreiben das Befundschema selbst nicht. Wir schreiben dazu nichts hinein, was dort nicht steht.

## Was Dentalpin ist

Dentalpin ist eine Praxisverwaltung unter der Business Source License 1.1: kostenlos für jede Praxis, einsehbar, forkbar, und vier Jahre nach jedem Release geht die Version automatisch in Apache 2.0 über. Installiert wird sie mit einem `docker compose` auf Ihrem eigenen Server, darunter liegt PostgreSQL, bedient wird sie im Browser.

Der Umfang: Terminkalender, Patienten, Zahnschema, Patientenakte, Parodontalstatus, Behandlungsplanung, Kostenvoranschläge, Rechnungen, Zahlungen, Recall und Auswertungen. Dazu ein KI-Agent, der dieselben Operationen ausführt wie die Oberfläche und vor jedem Schreibvorgang nachfragt. Es gibt keine Gebühr je Behandlungsstuhl, je Behandler oder je Patient, und nichts wird einzeln hinzugebucht.

Was es in Österreich heute **nicht** gibt, und das ist die kurze Fassung des ganzen Vergleichs: keine e-card-Schnittstelle, kein e-Rezept, keine FUS-Übermittlung, kein ELDA und kein MedTrans, kein WAHonline, keine Registrierkassa mit Sicherheitseinrichtung, keine Buchhaltungsüberleitung zu BMD, RZL oder LSS, keine VDDS-Röntgenschnittstelle, und die Oberfläche gibt es auf Englisch und Spanisch, aber nicht auf Deutsch.

![Patientenakte in Dentalpin: Zahnschema, klinische Warnhinweise, laufender Behandlungsplan und nächster Termin](/screenshots/dental-chart.png)

*Das Zahnschema in Dentalpin erfasst je Fläche und unterscheidet bestehende von geplanten Behandlungen.*

## Nebeneinander

Nur belegbare Zeilen. Wo power.dent nichts veröffentlicht, steht das da und nicht unsere Vermutung.

| | power.dent | Dentalpin |
|---|---|---|
| Modell | Kommerzielle Lizenz, classic oder air | Open Source (BSL 1.1) |
| Veröffentlichter Preis | ✗ Kein Betrag auf den konsultierten Seiten | ✓ 0 €, selbst gehostet |
| Einziger Betrag im Vertrag | ~ 40,00 EUR je Mahnschreiben | ✓ Keine Gebühren |
| Vertragslaufzeit | ✗ 24 Monate (air), 12 Monate (classic) | ✓ Keine |
| Kündigungsfrist | ~ 60 Tage, sonst 12 Monate Verlängerung | ✓ Entfällt |
| Preisanpassung | ~ Jährlich nach VPI 2020, Nachholung möglich | ✓ Entfällt |
| Betriebsart | ✓ Vor Ort oder Cloud, beides im Angebot | Self-Hosting auf Ihrem Server |
| Wo die Daten liegen | Azure über Microsoft Ireland für air, Irland, laut Datenschutzerklärung | ✓ Auf Ihrem Server |
| Zugriff Dritter auf die Patientendatenbank | ~ Drei Auftragsverarbeiter in Spanien und Italien, benannt | ✓ Niemand außer Ihnen |
| Verfügbarkeit | ~ "bemüht sich" um 99 % im Jahr, ohne Gutschrift | ~ Ihre Aufgabe |
| Jahre am Markt | ✓ 37+ laut Startseite, "über 35" laut FAQ | ✗ Seit 2026 |
| Verbreitung | ✓ 1.450+ Ordinationen, 7.430+ Plätze | ✗ Keine vergleichbare Zahl |
| e-card und e-Rezept | ✓ In der Standardlieferung | ✗ Nicht vorhanden |
| ELDA, MedTrans, FUS | ✓ Genannt in der Standardlieferung | ✗ Nicht vorhanden |
| WAHonline | ✓ Elektronische Honorarnotenübermittlung | ✗ Nicht vorhanden |
| Registrierkassa | ✓ Inklusive, Sicherheitseinrichtung als Modul | ✗ Nicht vorhanden |
| ÖGK-Tarifupdates | ✓ Als Download im Kundenbereich gepflegt | ✗ Nicht vorhanden |
| Buchhaltungsüberleitung | ✓ BMD, RZL, LSS (classic) | ~ Export und API, keine fertige Überleitung |
| Röntgenanbindung | ✓ VDDS, in allen drei Bundles enthalten | ~ Über die API, nicht über VDDS |
| Parodontalstatus | ~ Kostenpflichtiges Modul, in keinem Bundle | ✓ Sechs Messstellen je Zahn, enthalten |
| Implantatdokumentation | ~ Kostenpflichtiges Modul, in keinem Bundle | ✓ Enthalten |
| Mehrere Behandler | ~ Modul, nur im Enterprise-Bundle | ✓ Ohne Aufpreis |
| Mehrere Standorte | ✓ Mit air standortübergreifend möglich | ✓ Ohne Aufpreis je Standort |
| Systemvoraussetzungen | ✗ Auf den konsultierten Seiten nicht veröffentlicht | ✓ Docker und PostgreSQL, dokumentiert |
| Öffentliche API | ✗ Auf powerdent.at nicht beschrieben | ✓ REST, mit OpenAPI dokumentiert |
| Quellcode einsehbar | ✗ Nein | ✓ Vollständig auf GitHub |
| Oberfläche auf Deutsch | ✓ Ja | ✗ Nein, heute Englisch und Spanisch |
| Schulung und Umstieg | ✓ Begleitet, Schulung kostenpflichtig | ~ Dokumentation und GitHub Discussions |
| Support | ✓ Hotline in Wien, Mo-Do 8:30-17:00, Fr 8:30-14:00 | ~ Community, keine Hotline |

Zwei Zeilen sagen genau das und nichts weiter. "Auf powerdent.at nicht beschrieben" heißt, dass wir dort keine Entwicklerdokumentation gefunden haben, nicht, dass es für Kunden keine gibt: fragen Sie danach. Und die Zeile zum Zugriff Dritter ist kein Vorwurf, sondern eine Angabe aus ihrer eigenen Datenschutzerklärung, die die meisten Mitbewerber schlicht nicht machen.

## Wählen Sie power.dent, wenn

Das ist keine Pflichtübung, das sind die Gründe:

- **Sie mit der e-card arbeiten.** Die Schnittstelle samt e-Rezept steht in der Standardlieferung beider Produkte, dazu gibt es im Kundenbereich ein eigenes Handbuch zum e-Rezept und eines zur Netzwerkanbindung der e-Card für Techniker. Bei uns ist diese Zeile leer, und daran ändert kein Argument über Lizenzen etwas.
- **Sie Honorarnoten elektronisch übermitteln.** WAHonline ist eingebaut, ebenso ELDA, MedTrans und bei classic die FUS-Übermittlung.
- **Sie eine Registrierkassa führen müssen.** In Österreich gilt die Registrierkassenpflicht laut USP "ab einem Jahresumsatz von 15.000 Euro je Betrieb und, wenn die Barumsätze dieses Betriebes 7.500 Euro im Jahr überschreiten", und jede Kasse braucht "einen Manipulationsschutz, eine technische Sicherheitseinrichtung". power.dent hat beides im Produkt, die Sicherheitseinrichtung mit Signaturkarte als Modul, und die air-Bedingungen sagen als Supportleistung die "Sicherstellung der laufenden Rechtskonformität der in Power.Dent air integrierten Registrierkassenfunktion" zu. Das ist kein Nebenpunkt, das ist Steuerrecht.
- **Sie wollen, dass Tarifänderungen jemand anderer nachführt.** Das Tarifupdate T260508 für die Patientenanteile Prothetik der ÖGK, gültig ab 1. Mai 2026, liegt im Kundenbereich zum Download.
- **Sie Ihr Röntgen anbinden müssen.** Die VDDS-Anbindung ist da und in allen drei air-Bundles enthalten. Wir sind nicht Mitglied im VDDS und sprechen den Standard nicht.
- **Sie eine Hotline auf Deutsch wollen**, mit Adresse in Wien, veröffentlichten Zeiten und einer begleiteten Einschulung vor Ort. Wir haben GitHub Discussions.

Wenn drei dieser sechs Punkte zutreffen, ist die ehrliche Antwort, sich power.dent anzusehen und diesen Text als Hintergrund zu behalten.

## Wählen Sie Dentalpin, wenn

- **Ihnen Eigentum an Code und Daten wichtiger ist als der Funktionsumfang am ersten Tag.** Die Datenbank ist Ihre, der Code ist einsehbar, und wenn es uns morgen nicht mehr gibt, läuft Ihre Installation weiter.
- **Sie wissen wollen, was es kostet, bevor Sie telefonieren.** Ein Preis steht bei power.dent auf keiner konsultierten Seite. Bei uns steht er, und er ist null.
- **Sie sich nicht zwei Jahre binden wollen.** 24 Monate bei air, 12 bei classic, 60 Tage Kündigungsfrist, und jedes nachbestellte Modul bringt seine eigene Laufzeit mit.
- **Ihre Rechnung nicht mit dem Team wachsen soll.** Ein weiterer Behandler, ein zweiter Behandlungsstuhl oder ein zweiter Standort ändert bei uns nichts an den Kosten, und Parodontalstatus und Implantatdokumentation sind enthalten statt zubuchbar.
- **Sie integrieren wollen.** Alles, was die Oberfläche tut, geht über dieselbe öffentliche und dokumentierte API. Kein Ticket, keine Freigabe, keine Zusatzlizenz.

> **Testen Sie uns, bevor Sie irgendetwas kündigen.** Die Demo läuft ohne Anmeldung und ohne E-Mail-Adresse, eine eigene Installation steht in [drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/). Und klären Sie vorher schriftlich, wie Sie im Ernstfall wieder herauskommen: die FAQ sagt "Kann ich meine Daten exportieren? Ja, jederzeit", ein Format nennt sie nicht, und der Vertrag gewährt nach Vertragsende 90 Tage Lesezugriff und keinen Export.

![Rechnungsliste in Dentalpin mit den Zuständen gestellt, bezahlt, teilbezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Offene Posten in Dentalpin. Ob eine Migration gelungen ist, sieht man hier und nicht in der Gesamtzahl der Patienten.*

## Wie ein Umzug wirklich abläuft

1. **Klären Sie zuerst die Abrechnung.** Wenn Sie e-card, e-Rezept oder WAHonline aus der Software heraus brauchen, endet die Liste hier, und der ehrliche Rat ist, bei einem System zu bleiben, das diese Schnittstellen führt.
2. **Klären Sie als zweites die Registrierkassa.** Wer die Umsatzgrenzen überschreitet, braucht die Sicherheitseinrichtung und die laufende Rechtskonformität, und das ist keine Frage, die man im Nachhinein löst.
3. **Fragen Sie schriftlich nach dem Export**, bevor Sie kündigen. Was Sie bekommen, in welchem Format und bis wann, gehört vor die Kündigung, nicht danach.
4. **Rechnen Sie die Laufzeit zurück.** 60 Tage vor Ablauf ist der letzte Termin, danach läuft der Vertrag um zwölf Monate weiter. Zusatzmodule haben eigene Enddaten.
5. **Installieren Sie Dentalpin in einer Testumgebung**, nicht auf den Daten, mit denen Sie danach arbeiten wollen.
6. **Laden Sie den Export in das Importmodul** (`migration_import`). Es zeigt eine Vorschau mit Zahlen und Beispielzeilen an, bevor es irgendetwas schreibt.
7. **Prüfen Sie die Zuordnung der Behandlungen Zeile für Zeile.** Was über 0,9 liegt, wird als Block übernommen, über den Rest entscheiden Sie.
8. **Vergleichen Sie die Zahlen** aus beiden Systemen: Patienten, Rechnungen, künftige Termine.
9. **Behalten Sie den Zugang zum alten System**, bis Sie sicher sind. Der ganze Ablauf steht in [diesem Leitfaden](/de/blog/zahnarztsoftware-wechseln/).

> **Schritt 7 ist der, an dem Migrationen scheitern.** Zwei Ordinationen kodieren Leistungen nie gleich, und **eine stillschweigend geratene Zuordnung erzeugt falsche Honorarnoten, die monatelang niemand bemerkt**.

## Das Ehrliche

power.dent hat in Österreich etwas, das wir nicht haben, und es ist nicht das Marketing: die e-card samt e-Rezept, WAHonline, die Registrierkassa mit Sicherheitseinrichtung, gepflegte ÖGK-Tarifupdates und dreieinhalb Jahrzehnte Beziehung zu den Ordinationen, die damit arbeiten. Für eine Praxis, die nächsten Monat abrechnen muss, ist das heute die vernünftige Wahl, und es wäre unredlich, das anders zu schreiben.

Dentalpin ist die andere Wette: dass die Software einer Ordination kein gemietetes Blackbox-Abo mit zwei Jahren Laufzeit sein sollte, und dass der Preis auf der Website stehen darf. Was das kostet, steht vollständig auf [der Preisseite](/de/preise/), und es ist eine kurze Seite.

Dieser Text ist keine Rechts- oder Steuerberatung. Die Angaben zur Registrierkassenpflicht stammen aus der unten verlinkten amtlichen Quelle und ersetzen kein Gespräch mit Ihrer Steuerberatung.

## Quellen

Alle am 20. September 2026 abgerufen.

- "Die führende Praxissoftware für Zahnärzte in Österreich", die Zähler mit 37+ Jahren, 1.450+ Zahnarztpraxen, 7.430+ lizenzierten Plätzen und 399.200+ Formularübermittlungen sowie die Kundenstimmen: [powerdent.at](https://powerdent.at/)
- Henry Schein One Austria GmbH, Schönngasse 15-17, FN 73410 g, Handelsgericht Wien, UID ATU15125709 und die Telefonnummern: [powerdent.at/impressum](https://powerdent.at/impressum/)
- "seit über 35 Jahren", "Mehr als 1.400 Zahnarztpraxen" und "über 7.000 Arbeitsplätze", WAHonline, die Cloud-Antworten zu Rechenzentren in Europa, "Kann ich offline weiterarbeiten? Nein", der Export "Ja, jederzeit" und das "planbare Modell mit regelmäßigen Kosten": [powerdent.at/faq](https://powerdent.at/faq/)
- power.dent classic als "Server-basierte Lösung vor Ort", power.dent air als Cloud-Lösung, das Grundmodul und die Modulübersicht: [powerdent.at/dentalsoftware-produkte](https://powerdent.at/dentalsoftware-produkte/)
- Die Bundles Basic, Pro und Enterprise mit "power.dent Grundmodul Einplatz", "IMO/RCI & DentIA" und ohne jeden Betrag: [powerdent.at/power-dent-air](https://powerdent.at/power-dent-air/)
- Taschenbefunde, Blutungs- und Plaque-Indizes sowie PDU-Befundung im Zusatzmodul: [powerdent.at/module/power-parodontologie](https://powerdent.at/module/power-parodontologie/)
- Geschäftsführer Francesco Gallo, Servicezeiten Mo-Do 8:30-17:00 und Fr 8:30-14:00, Links auf beide Vertragswerke: [powerdent.at/agb](https://powerdent.at/agb/)
- Vertragslaufzeit 24 Monate, 60 Tage Kündigungsfrist, 90 Tage Lesezugriff, eigene Laufzeit je Zusatzmodul, Indexanpassung nach VPI 2020, 40,00 EUR je Mahnschreiben, Lizenz-Audit, 99 % Verfügbarkeit, Standardlieferung nach Punkt 16.1 und die Liste der Zusatzsoftwaremodule: [Geschäftsbedingungen power.dent air (SaaS), Version 05/2026](https://powerdent.at/downloads/gescchaeftsbedingungen-powerdent-air-saas/)
- On-Premise-Definition, zwölf Monate Laufzeit, Buchhaltungsüberleitung zu BMD, RZL und LSS sowie FUS-Übermittlung: [Geschäftsbedingungen power.dent classic (onprem), Version 05/2026](https://powerdent.at/downloads/geschaeftsbedingungen-power-dent-classic-onprem/)
- Aktuelle Version 4.28.4.32 vom 9. September 2026, Tarifupdate T260508 für die Patientenanteile Prothetik der ÖGK ab 1. Mai 2026 sowie die Handbücher zu e-Rezept, Netzwerk-E-Card und dentIA: [powerdent.at/kundenbereich](https://powerdent.at/kundenbereich/)
- Azure über Microsoft Ireland Operations als Rechenzentrum für PowerDent Air, die Empfänger Infomed Software S.L., UnTap, BEAT DATA SRL und PROACTIVITY SRL mit dem Zweck "Kundendatenbank (inkl. Patientendaten)", Henry Schein One Italia SRL, Zendesk und Salesforce: [Datenschutzerklärung, Stand 31. August 2026](https://powerdent.at/wp-content/uploads/2026/08/Datenschutzerklaerung_HSO_2026-08-31.pdf)
- Registrierkassenpflicht ab 15.000 Euro Jahresumsatz und 7.500 Euro Barumsatz sowie der Manipulationsschutz: [USP, Unternehmensserviceportal, Stand 1. Januar 2026](https://www.usp.gv.at/steuern-finanzen/steuerliche-rechte-und-pflichten/registrierkassen.html)
- Lizenz und Funktionsumfang von Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) und [die Preisseite](/de/preise/)

Fehlt hier etwas, oder hat sich bei der Henry Schein One Austria GmbH etwas geändert, das wir übersehen haben? [Schreiben Sie es uns](https://github.com/martinezsalmeron/dentalpin/discussions), wir korrigieren den Text und schreiben dazu, was geändert wurde. Das gilt auch, wenn Sie bei power.dent arbeiten.
