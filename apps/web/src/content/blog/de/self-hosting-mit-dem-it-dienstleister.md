---
title: "Selbst hosten mit dem IT-Dienstleister: was Sie vereinbaren müssen"
description: "Praxisserver in der Hand eines lokalen IT-Dienstleisters: der nötige AV-Vertrag, wirklich getestete Sicherungen, Zugänge, Reaktionszeiten und die Ausstiegsklausel."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [selfhosting, dsgvo, datensicherung, dienstleister, zahnarztpraxis]
---

Wenn Ihre Praxis ihre Software selbst hostet und ein externer IT-Dienstleister den Server betreut, gehören vier Dinge schriftlich fest, bevor er irgendetwas anfasst: der Auftragsverarbeitungsvertrag, der Pflicht ist, sobald er an Patientendaten kommt; was genau „ich mache Sicherungen“ bedeutet, samt einer datierten Testwiederherstellung; wer die Administratorzugänge hat und wo die Daten liegen; und in wie vielen Stunden er antwortet, wenn montags der Terminkalender nicht aufgeht. Alles Weitere ist Detail.

Nichts davon braucht einen zwanzigseitigen Vertrag. Es passt auf zwei Seiten und in ein halbstündiges Gespräch, und dieses Gespräch ist billiger als die erste Nacht ohne Terminkalender.

## Ihr IT-Dienstleister ist vom ersten Tag an Auftragsverarbeiter

Die Praxis ist Verantwortliche für die Daten ihrer Patientinnen und Patienten. Wer den Server betreut, auf dem diese Daten liegen, ist Auftragsverarbeiter, auch wenn er nie eine Patientenakte öffnet und auch wenn er seit fünfzehn Jahren Ihre Drucker repariert.

Art. 28 Abs. 3 DSGVO verlangt, dass die Verarbeitung auf Grundlage eines Vertrags erfolgt, der den Auftragsverarbeiter an den Verantwortlichen bindet. Zur Form hält das Bayerische Landesamt für Datenschutzaufsicht fest, der Vertrag könne „schriftlich oder in einem elektronischen Format abgefasst sein“. Das Landesamt stellt dafür eine Formulierungshilfe bereit, was den häufigsten Einwand erledigt: dass niemand in der Praxis so etwas aufsetzen könne.

> **Eine mündliche Absprache mit dem IT-Betreuer von immer ist kein AV-Vertrag.** Persönliches Vertrauen ersetzt das Dokument nicht, und wer ohne dieses Dokument gegenüber der Aufsichtsbehörde geradesteht, ist die Praxis, nicht er.

Das ist keine defensive Bürokratie. Der Vertrag ist die Stelle, an der endlich steht, wer die Sicherungen macht, in welchem Rhythmus der Server aktualisiert wird und was an dem Tag passiert, an dem die Zusammenarbeit endet. Genau die drei Punkte, an deren Vereinbarung sich niemand erinnert, wenn sie gebraucht werden.

![Schema einer selbst gehosteten Installation: der Browser erreicht Caddy über HTTPS, das /api/* an das Backend und alles Übrige an das Nuxt-Frontend weiterleitet; das Backend spricht mit PostgreSQL](/diagrams/install-stack.svg)

*Ein Server, vier Prozesse und eine Datenbank. Jeder Kasten im Schema ist etwas, das jemand pflegen muss.*

## Die Klauseln, die Art. 28 Ihnen schon vorschreibt

Der Inhalt bleibt nicht Ihrer Fantasie überlassen. In die Sprache der Praxis übersetzt:

- **Dokumentierte Weisungen.** Der Dienstleister verarbeitet Daten nur so, wie die Praxis es vorgibt, und die Vorgaben liegen schriftlich vor, und sei es als E-Mail.
- **Vertraulichkeit.** Wer Zugriff auf den Server hat, ist darauf verpflichtet, auch der Techniker, der an einem Dienstag eine Festplatte tauscht.
- **Sicherheit.** Die Maßnahmen aus Art. 32, einzeln benannt: Verschlüsselung, Zugriffskontrolle, Sicherungen, Updates.
- **Unterauftragsverarbeiter.** Steht die Maschine im Rechenzentrum eines Dritten oder gehen die Sicherungen zu einem Speicheranbieter, ist das ein Unterauftrag und braucht Ihre Genehmigung. Entweder Sie genehmigen vorab eine namentliche Liste, oder es wird vereinbart, dass man Sie über jede Änderung vorher informiert und Sie widersprechen können.
- **Unterstützung bei Betroffenenrechten.** Wenn jemand seine Akte oder deren Löschung verlangt, muss der Dienstleister sie aus dem System holen können.
- **Rückgabe oder Löschung am Ende.** Nach Abschluss der Leistung werden die Daten zurückgegeben oder gelöscht, nach Ihrer Wahl.
- **Nachweise und Kontrolle.** Er stellt die Informationen bereit, mit denen sich die Einhaltung belegen lässt, und lässt Überprüfungen zu.

Der letzte Punkt hat eine praktische Lesart, die viele Praxen überspringen: Die Pflicht, nur einen Auftragsverarbeiter mit hinreichenden Garantien einzusetzen, endet nicht am Tag der Unterschrift. Sie läuft weiter. Wer seit zwei Jahren nicht nach den Sicherungen gefragt hat, hat sie nicht kontrolliert.

## Was mündlich gesagt wird und was schriftlich stehen sollte

| Zusage | Wie sie üblicherweise vereinbart wird | Wie sie stehen sollte |
|---|---|---|
| Datensicherung | ~ „Ich sichere jede Nacht“ | ✓ Rhythmus, Ziel, Verschlüsselung und wer die Meldung bekommt, wenn es fehlschlägt |
| Wiederherstellung | ✗ Nie getestet | ✓ Ein dokumentierter Test pro Jahr, mit Datum und Ergebnis |
| Updates | ~ „Wenn etwas Wichtiges kommt“ | ✓ Vereinbartes Monatsfenster und Vorankündigung großer Versionswechsel |
| Reaktionszeit | ✗ „Rufen Sie an, ich schaue“ | ✓ Zeiten, Kanal und Reaktionsfristen nach Schweregrad |
| Zugänge | ~ Ein geteilter Administratorzugang | ✓ Personenbezogene Konten, gesperrt am Tag des Ausscheidens |
| Ende der Zusammenarbeit | ✗ Nicht geregelt | ✓ Rückgabe oder Löschung der Daten und Übergabe der Zugangsdaten |

Keine Zeile der rechten Spalte kostet Geld. Sie kostet ein unbequemes Gespräch von zwanzig Minuten, einmal.

## „Ich sichere jede Nacht“ sagt noch gar nichts

Art. 32 Abs. 1 DSGVO verlangt keine Sicherungen. Er verlangt zwei anspruchsvollere Dinge: die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen, und ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der Maßnahmen.

Wörtlich gelesen heißt das: Eine Sicherung, die nie jemand zurückgespielt hat, beweist nichts, denn gemessen wird die Wiederherstellung und nicht die Datei.

> **Eine Sicherung prüft man nicht an dem Tag, an dem man sie braucht.** Man prüft sie an einem gewöhnlichen Dienstag, ohne Eile, auf einem separaten Rechner, und kontrolliert drei Zahlen: wie viele Patienten erfasst sind, welche die letzte Rechnung ist und welcher der zuletzt eingetragene Termin war.

Verlangen Sie diesen Test als datierte Leistung, nicht als Zusage. Eine zweizeilige Mail einmal im Jahr mit „Sicherung vom 14. Mai auf einem Testserver wiederhergestellt, 3.412 Patienten, letzte Rechnung 2026/0871“ ist mehr wert als jede Klausel.

## Zwei Termine, die längst im Kalender stehen

Ein Teil der Wartung hängt von niemandes Meinung ab, weil er ein veröffentlichtes Datum hat.

1. **Die PostgreSQL-Hauptversion.** Das Projekt unterstützt jede Hauptversion fünf Jahre ab Erscheinen. PostgreSQL 14 erhält sein letztes Update am 12. November 2026, Version 15 am 11. November 2027. Läuft Ihre Datenbank auf einer davon, hat der Wechsel bereits eine Frist und sollte ein Budget haben.
2. **Das Zertifikat.** Zertifikate von Let's Encrypt sind 90 Tage gültig, empfohlen wird die Erneuerung alle 60 Tage. Let's Encrypt weist ausdrücklich darauf hin, dass sich diese Laufzeiten nicht anpassen lassen und es keine Ausnahmen gibt. Daneben existiert ein optionales Programm mit sechstägigen Zertifikaten, die alle drei Tage erneuert werden. Das läuft alles automatisch, bis eines Tages jemand Port 80 schließt und die Erneuerung still stehen bleibt.

Beide Termine gehören als Wartungsfenster in den Vertrag, nicht als Gefallen. Zum zweiten gehört ein Name: wer überwacht, dass die Erneuerung noch stattfindet.

## Die Schlüssel gehören der Praxis, auch wenn er sie benutzt

An dieser Stelle sitzen die meisten Praxen fest, und selten aus bösem Willen des Dienstleisters. Es hat nur niemand angesprochen.

- **Das Administratorpasswort liegt im Passwortmanager der Praxis**, nicht nur auf dem Notebook des Dienstleisters.
- **Personenbezogene Konten, niemals ein geteiltes „admin“.** Wenn drei Leute denselben Zugang benutzen, ist das Zugriffsprotokoll an dem Tag wertlos, an dem man es lesen muss.
- **Domain und DNS auf den Namen der Praxis.** Eine vom Dienstleister registrierte Domain ist eine künftige Verhandlung im Gewand einer Gefälligkeit.
- **Eine Sicherungskopie an einem Ort, den er nicht kontrolliert.** Das ist kein Misstrauen: Kommt Ransomware über seinen Arbeitsplatz herein, liegen seine Kopien und Ihre auf derselben Seite.
- **Sperrung am selben Tag.** Verlässt jemand den Dienstleister oder die Praxis, wird der Zugang an diesem Tag entzogen, und das wird vorher vereinbart, damit man nicht darum bitten muss.

![Startbildschirm mit den heutigen Terminen, wer gerade in der Praxis ist, überfälligen Zahlungen und den zuletzt behandelten Patienten](/screenshots/home.png)

*Das ist der Bildschirm, der um halb neun offen sein muss. Alles, was Sie mit dem IT-Dienstleister vereinbaren, existiert dafür, dass er erscheint.*

## Die Reaktionszeit, in Stunden und auf Deutsch

Eine Servicevereinbarung für eine Praxis mit drei Behandlungsstühlen braucht kein Konzernvokabular. Sie braucht drei Zeilen.

- **Die Praxis kann nicht arbeiten.** Der Terminkalender öffnet nicht, der Server antwortet nicht. Diese Zeile bekommt eine Telefonnummer statt einer Mailadresse, und eine Stundenzahl.
- **Es läuft, aber schlecht.** Ein Drucker, ein Arbeitsplatz, eine ausgefallene Schnittstelle. Am selben oder am nächsten Werktag.
- **Frage oder Verbesserung.** Eine Woche, und das genügt.

Ergänzen Sie die beiden Details, die alle vergessen: was im August und zwischen den Jahren gilt, und wer antwortet, wenn Ihr Dienstleister krank ist. Ein Ein-Personen-Betrieb ist für eine kleine Praxis völlig in Ordnung, solange die Vertretung irgendwo schriftlich steht.

## Die Ausstiegsklausel unterschreibt man beim Einstieg

Den IT-Dienstleister zu wechseln ist normal und muss kein Drama sein. Es wird eines, wenn niemand vorgesorgt hat.

Art. 28 Abs. 3 Buchst. g DSGVO gibt Ihnen das Recht bereits: Nach Abschluss der Leistung werden die Daten gelöscht oder zurückgegeben. Machen Sie es konkret, solange das Verhältnis gut ist.

1. **In welchem Format die Datenbank übergeben wird**, als vollständiger Dump und nicht als Teilexport in eine Tabelle.
2. **Welche Zugangsdaten übergehen**, und innerhalb wie vieler Tage.
3. **Wer den Übergang begleitet**, und wie viele Stunden enthalten sind.
4. **Löschnachweis.** Die Löschung sollte die Kopien in den Systemen des Dienstleisters einschließen, mit schriftlicher Bestätigung.

> **Keiner dieser vier Punkte lässt sich am Tag des Abschieds gut verhandeln.** Man verhandelt sie am ersten Tag, wenn beide Seiten wollen, dass die Zusammenarbeit sauber beginnt.

## Das halbstündige Gespräch

Wenn Sie das morgen erledigen wollen, ist das die Tagesordnung:

1. Den AV-Vertrag mit den Punkten aus Art. 28 Abs. 3 unterschreiben.
2. Aufschreiben, wohin die Sicherungen gehen, in welchem Rhythmus und wer die Fehlermeldung bekommt.
3. Ein Datum für die nächste Testwiederherstellung festlegen.
4. Notieren, welche PostgreSQL-Version heute läuft und wann deren Support endet.
5. Das Administratorpasswort in den Passwortmanager der Praxis legen.
6. Geteilte Zugänge in personenbezogene Konten umwandeln.
7. Die drei Reaktionszeiten und die Urlaubsvertretung vereinbaren.
8. Die Ausstiegsklausel formulieren.

Nichts auf dieser Liste verlangt IT-Kenntnisse. Es verlangt, dass sich jemand aus der Praxis eine halbe Stunde mit der Person zusammensetzt, die den Server betreut.

## Wo Dentalpin hineinpasst

Dentalpin ist Open-Source-Praxisverwaltungssoftware für die Zahnarztpraxis, die mit `docker compose` auf Ihrem eigenen Server läuft. Diese Vereinbarung gilt also genauso wie für jede andere selbst gehostete Installation: Die Software kostet keine Lizenz, und die Arbeit, die tatsächlich Geld kostet, ist die, über die Sie gerade gelesen haben. Was enthalten ist, steht auf der [Preisseite](/de/preise/), und die Installation ist Schritt für Schritt in [Dentalpin in drei Minuten installieren](/de/blog/dentalpin-in-drei-minuten-installieren/) beschrieben.

Dieser Beitrag ist eine allgemeine Orientierung und keine Rechtsberatung. Für den konkreten Vertrag Ihrer Praxis lassen Sie ihn prüfen.

## Quellen

- Bayerisches Landesamt für Datenschutzaufsicht, [„Auftragsverarbeitung“](https://www.lda.bayern.de/de/thema_auftragsverarbeitung.html), abgerufen am 3. September 2026, samt der dort bereitgestellten [Formulierungshilfe für einen Auftragsverarbeitungsvertrag](https://www.lda.bayern.de/media/muster/formulierungshilfe_av.pdf).
- Verordnung (EU) 2016/679 (DSGVO), Art. 28 Abs. 1, 3 und 9 sowie Art. 32 Abs. 1. Amtlicher Text abgerufen über [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) am 3. September 2026.
- PostgreSQL Global Development Group, [„Versioning Policy“](https://www.postgresql.org/support/versioning/), abgerufen am 3. September 2026.
- Let's Encrypt, [„FAQ“](https://letsencrypt.org/docs/faq/), abgerufen am 3. September 2026.
