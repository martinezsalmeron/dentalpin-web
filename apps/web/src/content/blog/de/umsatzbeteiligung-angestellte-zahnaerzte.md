---
title: "Umsatzbeteiligung in der Zahnarztpraxis: die Rechnung, die die Software tragen muss"
description: "Wie die Umsatzbeteiligung eines angestellten Zahnarztes berechnet wird: Zuordnung der Leistungen, Abzüge vor dem Prozentsatz und die Monatsabrechnung."
pubDate: 2026-09-15
translationKey: liquidacion-doctores-colaboradores
tags: [umsatzbeteiligung, praxisorganisation, abrechnung, praxisverwaltungssoftware]
---

Eine Umsatzbeteiligung ist ein Prozentsatz auf eine Bemessungsgrundlage, und fast jeder Streit darüber ist ein Streit über die Grundlage, nicht über den Prozentsatz. Vier Entscheidungen legen sie fest: welche Leistung welchem Behandler zugeordnet wird, was vor dem Prozentsatz abgezogen wird, ob auf die gestellte Rechnung oder auf den Zahlungseingang gerechnet wird, und wie eine Leistung aufgeteilt wird, an der zwei Behandler beteiligt waren.

Kann die Software diese vier Fragen nicht Zeile für Zeile beantworten, ist die Monatsabrechnung nicht prüfbar. Und eine Abrechnung, die niemand nachrechnen kann, wird jeden Monat neu verhandelt.

## Der Prozentsatz ist das Letzte, worüber man verhandeln sollte

Zwei Vereinbarungen mit unterschiedlichen Prozentsätzen können sehr unterschiedliche Beträge ergeben, und die größere Zahl gewinnt nicht immer. Nehmen wir eine Leistung über 1.000 € mit 300 € Fremdlaborkosten.

- **25 % auf die Grundlage abzüglich Labor** ergeben (1.000 − 300) × 0,25 = **175 €**.
- **20 % auf die volle Grundlage** ergeben 1.000 × 0,20 = **200 €**.

Die Vereinbarung mit dem niedrigeren Prozentsatz zahlt in diesem Fall 25 € mehr. Das ist kein konstruierter Fall: bei Zahnersatz, Implantaten und Alignern machen Labor und Material einen großen Teil der Rechnung aus, und dort schlägt die Bemessungsgrundlage jeden vernünftigen Unterschied im Prozentsatz.

> **Der höhere Prozentsatz zahlt nicht automatisch mehr aus.** Bevor über 20 oder 25 gesprochen wird, gehört schriftlich festgehalten, worauf er angewendet wird, und die Software muss diesen Betrag ohne Nacharbeit liefern können.

## Der Behandler gehört an die Leistungszeile, nicht an den Patienten

Die Zuordnung scheitert fast immer aus demselben Grund: die Software führt den Behandler an der falschen Stelle. Steht er in der Patientenakte als zuständiger Zahnarzt oder am Termin, geht die Rechnung schief, sobald jemand eine Krankheitsvertretung übernimmt, ein Schmerzpatient dazwischenkommt oder die Dentalhygienikerin die PZR-Phase eines langen Plans übernimmt.

Der Behandler muss ein Feld der Leistungszeile sein, neben Gebührenziffer und Betrag. Drei Fragen, die vor jeder Unterschrift gestellt gehören:

- **Lässt sich jede Zeile einzeln zuordnen?** Ein Heil- und Kostenplan mit neun Positionen kann drei Behandler betreffen, und das ist der Normalfall, nicht die Ausnahme.
- **Ist der Vorgabewert der Behandelnde oder der zuständige Zahnarzt?** Der zweite ist bequem und erzeugt genau die falschen Abrechnungen.
- **Wird eine Änderung der Zuordnung protokolliert, mit wem und wann?** Ohne Protokoll ist eine berechtigte Korrektur von einer Verschiebung nicht zu unterscheiden, und genau das vergiftet das Verhältnis.

![Behandlungsplan mit seinen Phasen und den Leistungen je Phase](/screenshots/treatment-plan.png)

*Ein Behandlungsplan in Phasen gegliedert, jede Phase fasst Leistungen zusammen, die in getrennten Sitzungen erbracht werden können.*

## Was vor dem Prozentsatz abgezogen wird

Hier werden Verträge unscharf. "Abzüglich Laborkosten" liest sich klar, bis die erste Laborrechnung mit einem Implantataufbau kommt oder die Rezeption einen Plan mit Nachlass abschließt.

| Position | Volle Grundlage | Abzüglich Labor | Abzüglich Labor und Material |
|---|---|---|---|
| Fremdlabor | ✗ Kein Abzug | ✓ Abzug | ✓ Abzug |
| Implantate und Aligner | ✗ Kein Abzug | ~ Je nach Rechnungsstellung des Lieferanten | ✓ Abzug |
| Verbrauchsmaterial | ✗ Kein Abzug | ✗ Kein Abzug | ✓ Abzug nach schriftlicher Regel |
| Nachlässe an Patienten | ~ Muss vereinbart werden | ~ Muss vereinbart werden | ~ Muss vereinbart werden |
| Eigenlabor | ~ Muss vereinbart werden | ~ Muss vereinbart werden | ~ Muss vereinbart werden |

Zwei Punkte schreibt kaum jemand auf, und beide verschieben das Ergebnis jeden Monat. Der erste: werden Abzüge brutto oder netto gerechnet. Eine Laborrechnung über 300 € zuzüglich Umsatzsteuer ergibt einen anderen Abzug als 300 € insgesamt.

Der zweite: wer trägt Nachlässe an Patienten. Schließt die Rezeption einen Plan mit 10 % Nachlass bei Sofortzahlung ab, können diese 10 % vollständig die Praxis treffen, vollständig den Behandler, oder geteilt werden. Alle drei Varianten sind vertretbar. Nicht vertretbar ist nur, es nicht entschieden zu haben.

## Rechnungsstellung oder Zahlungseingang?

Das ist die Entscheidung, die das meiste Geld bewegt und die Software am stärksten fordert. Sie legt fest, wer das Ausfallrisiko trägt und wann der Behandler sein Geld sieht.

| | Auf die Rechnung | Auf den Zahlungseingang | Gemischt |
|---|---|---|---|
| Zeitpunkt der Gutschrift | ✓ Bei Rechnungsstellung | ✗ Sobald Geld eingeht | ~ Bei Rechnung, später korrigiert |
| Wer trägt den Ausfall | ✗ Die Praxis | ✓ Geteilt | ~ Wird nachträglich verrechnet |
| Was die Software können muss | ~ Zuordnung je Zeile | ✗ Zusätzlich Zahlungen auf Zeilen buchen | ✗ Beides, plus Historie |
| Nachvollziehbarkeit | ✓ Hoch | ~ Mittel | ✗ Gering |

Die Abrechnung auf den Zahlungseingang klingt gerechter und bringt mehr Programme an ihre Grenze. Dafür muss jede Teilzahlung wissen, welche Leistungszeilen sie ausgleicht, und das ist etwas anderes als der offene Gesamtsaldo des Patienten.

> **Ein Plan über 3.000 €, in zwölf Raten bezahlt, von zwei Behandlern erbracht, ist der Prüfstein.** Weiß die Software nur, dass diesen Monat 250 € eingegangen sind, aber nicht, auf welche Leistungen sie entfallen, ist die Abrechnung auf Zahlungseingang nicht rechenbar und landet in einer Tabelle daneben.

![Rechnungsliste mit den Zuständen gestellt, bezahlt, teilweise bezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Eine Rechnungsliste, in der jede Zeile ihren Zahlungsstand trägt und damit Bezahltes von Teilzahlungen und Überfälligem trennt.*

## Eine Leistung, zwei Behandler

Das kommt häufiger vor als gedacht: eine intern überwiesene Wurzelbehandlung, ein Implantat, das einer setzt und ein anderer versorgt, eine kieferorthopädische Behandlung durch einen Kollegen, der zwei Tage im Monat da ist. Eine Rechnungszeile, die Arbeit von zwei Personen.

1. **Die Regel vor dem Fall festlegen, nicht danach.** Dem zuordnen, der abschließt, nach Sitzungen teilen, oder nach einem festen Schlüssel je Leistungsart teilen: drei brauchbare Regeln. Von Fall zu Fall improvisieren ist keine.
2. **Prüfen, ob die Software eine Zeile teilen kann.** Trägt eine Leistung keine zwei Behandler mit zwei Anteilen, ist der saubere Weg, chirurgischen und prothetischen Teil getrennt abzurechnen.
3. **Die Sitzung erfassen, nicht nur die Leistung.** Trägt jede Sitzung ihren Behandler, rechnet sich die Aufteilung nach Sitzungen von selbst und hört auf, Verhandlungssache zu sein.
4. **Den unangenehmen Fall in den Vertrag schreiben.** Was passiert, wenn ein Behandler mitten in einem langen Plan geht, ist die Klausel, die niemand formuliert und jeder irgendwann braucht.

## Was die Monatsabrechnung zeigen muss

Der Prüfstein einer guten Abrechnung ist, dass der Behandler sie aus den eigenen Leistungen nachbauen kann, ohne jemanden fragen zu müssen. Dafür braucht jede Zeile:

1. **Datum und Patient**, mit einer Kennung, über die sich die Patientenakte öffnen lässt.
2. **Leistung und Gebührenziffer**, so wie im angenommenen Plan.
3. **Zugeordneter Behandler**, bei geteilten Zeilen der jeweilige Anteil.
4. **Berechneter Betrag**, vor Nachlässen.
5. **Gewährte Nachlässe**, mit Grund statt als Sammelbetrag.
6. **Eingang im Zeitraum**, wenn auf Zahlungseingang abgerechnet wird.
7. **Abzüge**, jeder mit Bezeichnung und Belegverweis.
8. **Grundlage, Prozentsatz und Betrag**, in drei getrennten Spalten.

Darunter fehlen meist drei Dinge: die Summe je Behandler, ein Abschnitt für Korrekturen aus Vormonaten (ein eingegangener Ausfall, eine Stornorechnung) und eine Zahl, die zum Tagesabschluss des Zeitraums passt. Ohne diese letzte Zeile ist die Abrechnung eine Behauptung.

> **Lässt sich die Abrechnung nicht aus den Leistungen nachrechnen, ist sie keine Rechnung, sondern eine Zahl.** Der praktische Test: geben Sie sie jemandem, der sie nicht erstellt hat, und lassen Sie ihn auf dieselbe Summe kommen. Gelingt das nicht, liegt es am Bericht, nicht an der Person.

## Dieser Beitrag nennt keinen Prozentsatz

Er nennt keinen, weil keine amtliche Quelle einen veröffentlicht. Die Zahlen, die kursieren, stammen von Beratungen und aus der Fachpresse, zitieren einander und altern, ohne dass jemand sie prüft.

Sagen lässt sich dagegen: zwei Prozentsätze ohne ihre Bemessungsgrundlagen zu vergleichen bedeutet nichts, und die Praxis nebenan ist kein brauchbarer Maßstab, solange unklar ist, was sie vorher abzieht.

## Angestellt oder frei: in Deutschland entscheidet das die Clearingstelle

Die Umsatzbeteiligung selbst ist eine Rechnung. Die Frage davor ist rechtlich die schwerere: Ist der Behandler angestellt, oder arbeitet er als freier Mitarbeiter auf eigene Rechnung? Vom Vertragstitel hängt das nicht ab.

Wer Sicherheit will, kann das klären lassen. Die Deutsche Rentenversicherung schreibt dazu auf ihrer Seite zum Statusfeststellungsverfahren, abgerufen am 15. September 2026: "Mit dem Statusfeststellungsverfahren können Personen klären lassen, ob sie abhängig beschäftigt oder selbständig tätig sind." Durchgeführt wird es von der Clearingstelle der Deutschen Rentenversicherung Bund, es ist kostenfrei, dauert im Durchschnitt drei Monate und kann auch vor Aufnahme der Tätigkeit beantragt werden.

Für die Software heißt das etwas sehr Konkretes: die Dokumentation, wer wann welche Leistung an welchem Patienten erbracht hat, ist genau der Nachweis, auf den es in so einem Verfahren ankommt. Eine saubere Zuordnung je Leistungszeile ist also nicht nur eine Abrechnungsfrage.

Dieser Beitrag wird in Deutschland, Österreich und der deutschsprachigen Schweiz gelesen, und das Verfahren oben ist das deutsche. Für Österreich und die Schweiz sind andere Träger zuständig, und die dortigen Regeln wurden hier nicht geprüft. **Dies ist keine Rechts- oder Steuerberatung**: Fragen Sie Ihren Steuerberater und die zuständige Stelle, bevor Sie unterschreiben.

## Was die Software können muss

In einem Satz: der Behandler gehört an die Leistungszeile, Zahlungen müssen auf Zeilen gebucht werden, und der Monatsbericht muss aus den Daten nachrechenbar sein. Mit diesen drei Punkten lässt sich jede vernünftige Vereinbarung abrechnen; ohne sie lässt sich keine prüfen.

In Dentalpin sitzt die Zuordnung an der Leistungszeile, und Zahlungen werden den Zeilen zugebucht, die sie ausgleichen. Genau das macht eine Abrechnung auf Zahlungseingang ohne Tabelle daneben rechenbar. Alles ist enthalten, ohne Kosten je Benutzer: die Einzelheiten stehen auf der [Preisseite](/de/preise/).

## Quellen

- Deutsche Rentenversicherung, *Das Statusfeststellungsverfahren*, abgerufen am 15. September 2026. <https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Arbeitnehmer-und-Selbststaendige/03_Selbststaendige/statusfeststellungsverfahren.html>
