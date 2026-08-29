---
title: "Kartenzahlung am Empfang: Zahlungen abstimmen, ohne von Hand zu vergleichen"
description: "Warum die Bankgutschrift nie zur Tageseinnahme passt, welche drei Summen wann abzugleichen sind und was vor der Unterschrift beim Acquirer zu klären ist."
pubDate: 2026-08-29
translationKey: tpv-datafono-clinica-dental
tags: [kartenzahlung, kartenterminal, abstimmung, praxisorganisation, praxisverwaltungssoftware]
---

Eine Praxis mit Kartenterminal hat jeden Tag drei verschiedene Summen, und nur zwei davon sollen übereinstimmen: was die Praxissoftware als Kartenzahlung ausweist, und der Kassenschnitt des Terminals. Die dritte, die Gutschrift auf dem Konto, passt zu keiner von beiden, und das ist auch nicht ihre Aufgabe.

Fast jeder Empfang, der die Abstimmung der Kartenzahlungen aufgegeben hat, hat sie aus demselben Grund aufgegeben. Es wurde versucht, die Bankgutschrift gegen die Tageseinnahme zu stellen, und das geht nie auf.

## Drei Summen, und welche zu welcher gehört

Sie auseinanderzuhalten ist bereits die halbe Arbeit. Jede entsteht an einer anderen Stelle und auf einem anderen Weg, und genau das macht den Vergleich überhaupt aussagekräftig.

- **Die Kartenzahlungen laut Software.** Was der Empfang heute Patient für Patient als mit Karte bezahlt erfasst hat.
- **Der Kassenschnitt des Terminals.** Die Summe, die das Gerät selbst seit dem letzten Abschluss autorisiert hat, meist nach Kartenart aufgeschlüsselt.
- **Die Gutschrift der Bank.** Was der Acquirer auf das Konto überweist, nach eigenem Kalender und auf eigene Art abgerechnet.

Die Regel passt in zwei Zeilen. Software gegen Terminal, **täglich**, und beide müssen auf denselben Betrag kommen. Terminal gegen Bank, **einmal im Monat**, und beide werden nicht auf denselben Betrag kommen.

> **Die Bankgutschrift gegen einen einzelnen Tag zu stellen ist die unmögliche Aufgabe, an der die Abstimmung scheitert.** Die Gutschrift kommt verzögert, gebündelt und teils bereits abzüglich Gebühren. Ein Abgleich mit einem einzelnen Tag kann selbst dann nicht aufgehen, wenn alles richtig gemacht wurde.

## Der Tagesabschluss in fünf Minuten

Immer dieselbe Reihenfolge ist der Grund, warum es bei fünf Minuten bleibt: niemand muss dabei etwas entscheiden.

1. **Machen Sie den Kassenschnitt jeden Tag zur gleichen Zeit**, nach dem letzten Patienten und bevor irgendetwas ausgeschaltet wird. Ein Terminal, das abgeschlossen wird, wenn jemand daran denkt, vermischt Tage und lässt sich nicht mehr vergleichen.
2. **Nehmen Sie die Summe des Kassenschnitts**, nach Kartenart aufgeschlüsselt, sofern das Gerät sie so ausdruckt.
3. **Ziehen Sie die Kartenzahlungen des Tages aus der Software**, mit Betrag und Patient.
4. **Vergleichen Sie die beiden Summen.** Stimmen sie überein, notieren Sie beide Zahlen und sind fertig.
5. **Weichen sie ab, suchen Sie den Vorgang, nicht die Differenz.** Sortieren Sie beide Listen nach Betrag, dann fällt der überzählige oder fehlende Posten von allein auf.
6. **Korrigieren Sie am selben Tag**, mit einer Notiz, was passiert ist. Eine morgen erklärte Differenz ist eine Differenz. Im Oktober erklärt ist sie eine Diskussion.

Schritt fünf wird am häufigsten übersprungen. Nach "es fehlen 47 Euro" zu suchen führt nirgendwohin. Nach "auf dem Terminal steht ein Vorgang über 47 Euro, der in der Software fehlt" zu suchen findet den Patienten in dreißig Sekunden.

![Rechnungsliste mit den Status gestellt, bezahlt, teilweise bezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Die Zahlungsliste des Tages ist die Zahl, gegen die der Kassenschnitt gestellt wird. Muss sie von Hand rekonstruiert werden, findet die Abstimmung nach zwei Wochen nicht mehr statt.*

## Warum die Bank nie passt

Die Abweichungen zwischen Terminal und Bank sind fast nie Fehler. So funktioniert das System, und wer sie kennt, spart sich Anrufe beim Acquirer, die zu nichts führen.

| Ursache | Was sie bewirkt |
|---|---|
| Cut-off-Zeit des Terminals | Eine Zahlung um 20:30 Uhr kann in den Schnitt von morgen fallen |
| Wochenenden und Feiertage | Freitag, Samstag und Sonntag kommen oft als eine Gutschrift am Montag oder Dienstag |
| Direkt einbehaltene Gebühren | Je nach Vertrag kommt die Gutschrift netto, und der Bruttobetrag steht auf keiner Zeile |
| Rückerstattungen | Werden von der Auszahlung abgezogen statt getrennt gutgeschrieben |
| Rückbelastungen und Reklamationen | Tauchen Wochen später auf, ohne zugehörigen Termin |

Keine dieser fünf Ursachen ist ein Fehler des Empfangs. Die echten Fehler stecken vollständig im anderen Vergleich, Software gegen Terminal.

## Die Abweichungen, die wirklich Fehler sind

Zwischen Software und Terminal gibt es nur fünf übliche Ursachen, und alle lassen sich sofort beheben, wenn sie am selben Tag auffallen.

- **Die nicht erfasste Zahlung.** Der Patient zahlt, das Telefon klingelt, gebucht wird nichts. Mit Abstand der häufigste Fall.
- **Die falsche Zahlungsart.** Bar kassiert und als Karte erfasst, oder umgekehrt. Die Tagessumme stimmt, die Abstimmung nicht.
- **Die geteilte Zahlung.** Ein Teil Karte, ein Teil bar, als ein einziger Zahlungseingang gebucht.
- **Die halbe Rückerstattung.** Am Terminal erstattet, in der Akte nie storniert, sodass der Patient weiterhin als bezahlt geführt wird.
- **Der abgelehnte Vorgang, der trotzdem gebucht wurde.** Das Terminal hat abgelehnt, der Patient hat anders gezahlt, und beide Buchungen sind geblieben.

> **Halten Sie die Belegnummer des Terminals bei der Zahlung fest.** Die Vorgangsnummer, oder Autorisierungscode und die letzten vier Ziffern, macht aus einem halben Nachmittag Suche eine Suche von dreißig Sekunden. Es kostet nichts und ist das Einzige, was zusätzlich zu notieren sich lohnt.

## Was Kartenzahlung wirklich kostet

Hier liegt ein Missverständnis, das in Verhandlungen Geld kostet. Das Interbankenentgelt ist das, was die Bank des Patienten der Bank der Praxis berechnet, und die Verordnung (EU) 2015/751 deckelt es bei 0,2 % für Debitkarten von Verbrauchern und 0,3 % für Kreditkarten.

Dieser Deckel ist nicht das, was die Praxis zahlt. Die Praxis zahlt das Disagio, in dem zusätzlich das Systementgelt (Visa, Mastercard) und die Marge des Acquirers stecken. Der Abstand zwischen beiden Zahlen ist groß, und dort findet die Verhandlung tatsächlich statt.

Veröffentlichte Preise zeigen die Größenordnung. SumUp nennt einen Tarif ohne Monatsgebühr mit **1,39 % je Zahlung vor Ort** und einen Tarif für **19 € im Monat, der EC- und Kreditkarten auf 0,79 % senkt** (abgerufen am 29. August 2026). Gemessen an einem Interbankendeckel von 0,2 % ist die Differenz der Preis der Dienstleistung, nicht der Regulierung.

Bank-Acquirer veröffentlichen dagegen kaum etwas und verhandeln je Vertrag, sodass die einzige belastbare Zahl die aus Ihrem eigenen Vertrag ist.

## Die Gebühr an den Patienten weitergeben geht nicht

Das ist der erste Gedanke, den das Disagio auslöst, und in Deutschland ist er versperrt. § 270a BGB, "Vereinbarungen über Entgelte für die Nutzung bargeldloser Zahlungsmittel", sagt:

> **"Eine Vereinbarung, durch die der Schuldner verpflichtet wird, ein Entgelt für die Nutzung einer SEPA-Basislastschrift, einer SEPA-Firmenlastschrift, einer SEPA-Überweisung oder einer Zahlungskarte zu entrichten, ist unwirksam."**

Für Zahlungskarten gilt das laut Satz 2 der Vorschrift bei Zahlungsvorgängen mit Verbrauchern, auf die Kapitel II der Verordnung (EU) 2015/751 anwendbar ist, also genau bei den gedeckelten Verbraucherkarten. Ein Mindestbetrag für Kartenzahlung ist derselbe Gedanke in anderer Verpackung. Erlaubt ist der umgekehrte Weg: ein Nachlass für eine bestimmte Zahlungsart.

Dies ist keine Rechtsberatung, und im Einzelfall entscheidet das Ihr eigener Berater.

![Auswertungen der Praxis mit dem Verlauf der Aktivität](/screenshots/reports.png)

*Ein Monat an Summen je Zahlungsart ist das, wogegen ein Terminalvertrag gelesen wird. Ein falsch berechnetes Disagio zeigt sich im Muster, nicht an einer einzelnen Zahlung.*

## Was vor der Unterschrift zu klären ist

Diese sechs Fragen bewegen die tatsächlichen Kosten stärker als das Feilschen um den Prozentsatz, und die ersten drei entscheiden, ob eine Abstimmung überhaupt möglich ist.

1. **Ist der Satz pauschal oder interchange++?** Ein Pauschalsatz verdeckt, welche Karten teuer sind, und macht es unmöglich zu prüfen, ob der Interbankendeckel bei Ihnen ankommt.
2. **Kommt die Gutschrift brutto mit Monatsrechnung oder netto nach Abzug?** Das entscheidet, ob die Bankzeile jemals einem Kassenschnitt entsprechen kann.
3. **Wie lautet die Cut-off-Zeit, und an welchen Tagen wird ausgezahlt?** Ohne das lässt sich nicht sagen, zu welchem Tag eine Abendzahlung gehört.
4. **Was kommt zum Prozentsatz hinzu?** Gerätemiete, Monatsmindestumsatz, PCI-Gebühr, Kosten je Autorisierung. Addieren und durch Ihren Kartenumsatz teilen: das ist Ihr echter Satz.
5. **Wie lang ist die Kündigungsfrist, und wie werden Preise angepasst?** Eine einseitige Erhöhung mit vierzehn Tagen Frist ist etwas anderes als eine vereinbarte jährliche Anpassung.
6. **Kann ich Vorgänge als CSV exportieren, mit derselben Belegnummer, die das Terminal druckt?** Wenn nicht, bleibt die Monatsabstimmung für immer Handarbeit.

## Womit diese Woche anfangen

1. **Legen Sie die Uhrzeit des Kassenschnitts fest** und halten Sie sie jeden Tag ein.
2. **Notieren Sie ab sofort die Belegnummer** zu jeder Kartenzahlung.
3. **Vergleichen Sie morgen die beiden Summen** und schreiben Sie beide auf, ob sie passen oder nicht.
4. **Holen Sie den Terminalvertrag hervor** und rechnen Sie den echten Prozentsatz der letzten drei Monate aus.
5. **Reservieren Sie einen Tag im Monat**, um Kassenschnitte, Gutschriften und die Gebührenabrechnung gegeneinander zu stellen.

Dentalpin spricht nicht mit dem Kartenterminal, und das gehört klar gesagt: nichts, was in einer Software erfasst wird, ersetzt den Kassenschnitt des Geräts. Was Dentalpin tut, ist jede Zahlung mit ihrer Zahlungsart in dem Moment zu erfassen, in dem sie eingeht, und die Belegnummer daneben festzuhalten, sodass die Kartenliste des Tages ohne Export vorliegt und der Vergleich gegen eine Zahl läuft, die niemand nachträglich zusammengesetzt hat. Was in welcher Version enthalten ist, steht unter [Preise](/de/preise/).

## Quellen

- Europäische Union. *Verordnung (EU) 2015/751 des Europäischen Parlaments und des Rates vom 29. April 2015 über Interbankenentgelte für kartengebundene Zahlungsvorgänge*, Artikel 3 und 4 (Obergrenzen von 0,2 % und 0,3 %). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32015R0751). Abgerufen am 29. August 2026.
- Deutschland. *Bürgerliches Gesetzbuch, § 270a: Vereinbarungen über Entgelte für die Nutzung bargeldloser Zahlungsmittel*. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/bgb/__270a.html). Abgerufen am 29. August 2026.
- SumUp. *Preise* (Tarif ohne Monatsgebühr mit 1,39 % vor Ort; Zahlungen Plus, 19 €/Monat, 0,79 % auf EC- und Kreditkarten). [sumup.com](https://www.sumup.com/de-de/preise/). Abgerufen am 29. August 2026.
