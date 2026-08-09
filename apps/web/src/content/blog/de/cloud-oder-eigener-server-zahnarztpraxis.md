---
title: "Cloud oder eigener Server in der Zahnarztpraxis: so entscheiden Sie"
description: "Cloud oder Server in der Praxis: was sich wirklich unterscheidet, was DSGVO und Paragraf 203 StGB in beiden Fällen verlangen und die fünf Fragen, die es entscheiden."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [cloud, server, praxis-it, dsgvo]
---

Diese Entscheidung fällt nicht bei der Sicherheit. Sie fällt bei der Frage, wer antwortet, wenn etwas kaputtgeht, und wie lange die Praxis braucht, um wieder zu arbeiten. Nehmen Sie die Cloud, wenn niemand in der Praxis Sicherungen und Updates verantworten will. Nehmen Sie einen eigenen Server, wenn Sie weiterbehandeln müssen, sobald die Leitung ausfällt, oder wenn Sie die Daten physisch in Ihrer Hand behalten wollen. Beides ist zulässig, und beides verlangt Ihnen genau denselben Papierkram ab.

Wie Sie zu Ihrer eigenen Antwort kommen, ohne sich auf einen Vertriebstermin zu verlassen, steht hier.

## Die deutsche Besonderheit: Paragraf 203 StGB gilt zusätzlich

Vor der DSGVO steht in Deutschland die Schweigepflicht. Wer als Zahnärztin oder Zahnarzt einen Dienstleister einschaltet, offenbart ihm Patientengeheimnisse, und das Strafrecht regelt, wann das erlaubt ist.

Paragraf 203 Absatz 3 StGB erlaubt es ausdrücklich: die Genannten "dürfen fremde Geheimnisse gegenüber sonstigen Personen offenbaren, die an ihrer beruflichen oder dienstlichen Tätigkeit mitwirken, soweit dies für die Inanspruchnahme der Tätigkeit der sonstigen mitwirkenden Personen erforderlich ist".

Absatz 4 zieht die Grenze auf der anderen Seite. Strafbar macht sich danach auch, wer als Berufsgeheimnisträger "nicht dafür Sorge getragen hat, dass eine sonstige mitwirkende Person [...] zur Geheimhaltung verpflichtet wurde".

> **Damit ist die Verpflichtung des Dienstleisters zur Verschwiegenheit keine Formalie, sondern eine strafbewehrte Pflicht der Praxisinhaberin.** Sie trifft Sie bei einem Cloud-Anbieter genauso wie bei dem IT-Betrieb, der Ihren Server im Nebenraum wartet und dabei die Patientenakte sieht.

## Was sich mit keiner der beiden Optionen ändert

Verantwortlicher im Sinne der DSGVO bleibt in beiden Fällen die Praxis. Der Software- oder Hosting-Anbieter ist Auftragsverarbeiter, und daraus folgen zwei Pflichten, die nicht verschwinden, weil der Rechner in Ihrem Hinterzimmer steht.

Artikel 28 Absatz 1 verlangt eine begründete Auswahl. Der Verantwortliche arbeitet danach "nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten, dass geeignete technische und organisatorische Maßnahmen so durchgeführt werden, dass die Verarbeitung im Einklang mit den Anforderungen dieser Verordnung erfolgt". Absatz 3 verlangt zusätzlich einen Vertrag.

Die zweite Pflicht übersehen die meisten Praxen. Artikel 32 Absatz 1 Buchstabe c fordert "die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen".

> **Ein Server im Sterilisationsraum ohne getestete Wiederherstellung erfüllt Artikel 32 genauso wenig wie eine Cloud ohne Sicherung.** Die Norm fragt nicht, wo die Festplatte steht. Sie fragt, ob Sie die Daten zurückbekommen, und wie schnell. Wenn nie jemand eine Wiederherstellung versucht hat, lautet die ehrliche Antwort: Sie wissen es nicht.

![Tagesplan in Dentalpin mit den Terminen je Behandlungsstuhl und ihrem Status](/screenshots/schedule-day.png)

*Das ist der Bildschirm, der um neun Uhr aufgehen muss, wie Sie sich auch entscheiden.*

## Es sind drei Optionen, nicht zwei

Die meisten Vergleiche stellen Cloud gegen Praxisserver und lassen die dritte weg, die technisch versierte Praxen oft wählen: die eigene Installation, aber auf einem gemieteten Server.

| | Cloud des Anbieters | Server in der Praxis | Eigene Installation auf einem VPS |
|---|---|---|---|
| Wer spielt Updates ein | ✓ Der Anbieter | ✗ Jemand aus der Praxis oder das IT-Büro | ~ Sie, aber ohne Hardware |
| Wenn die Leitung ausfällt | ✗ Niemand kann arbeiten | ✓ Läuft im lokalen Netz weiter | ✗ Niemand kann arbeiten |
| Wer verantwortet die Sicherung | ~ Der Anbieter macht sie, prüfen müssen Sie | ✗ Vollständig Sie | ✗ Vollständig Sie |
| Zu wartende Hardware | ✓ Keine | ✗ Rechner, Platte, USV und deren Ersatz | ✓ Keine |
| Anschaffungskosten | ✓ Keine | ✗ Kauf des Rechners | ~ Gering |
| Wo die Daten liegen | Beim Anbieter | In Ihren Räumen | Im gewählten Rechenzentrum |
| Was Sie zum Wechseln brauchen | Einen vollständigen Export, den man Ihnen geben muss | ✓ Sie haben ihn schon | ✓ Sie haben ihn schon |

Die beiden Enden dieser Tabelle konkurrieren nicht um dasselbe. Die Cloud nimmt Ihnen Arbeit ab und bindet Sie an einen Anbieter. Der eigene Server gibt Ihnen Kontrolle und gibt jemandem jeden Monat eine Aufgabe.

## Der Test, der entscheidet: der Tag, an dem es ausfällt

Bevor Sie Preise vergleichen, beziffern Sie zwei Dinge.

1. **Wie lange die Praxis ohne die Software auskommt.** Lautet die Antwort "einen halben Vormittag, auf Papier", passt fast jede Option. Lautet sie "eine Stunde", brauchen Sie einen schriftlichen Plan, und zwar auch mit eigenem Server.
2. **Was dieser Stillstand kostet.** Behandlungsstühle mal Stunden mal durchschnittlicher Umsatz. Das ist die einzige Zahl, die aus der Entscheidung einen wirtschaftlichen Vergleich statt einer Geschmacksfrage macht.
3. **Wer montags um neun ans Telefon geht.** In der Cloud ist es der Support des Anbieters mit veröffentlichten Zeiten. Beim eigenen Server ist es Ihr IT-Betrieb, und dessen tatsächliche Reaktionszeit sollten Sie kennen, bevor Sie sie brauchen.
4. **Was zwischen der letzten Sicherung und dem Ausfall verloren geht.** Eine nächtliche Sicherung bedeutet einen verlorenen Arbeitstag. Ist das nicht hinnehmbar, wird die Sicherungsfrequenz zur Anforderung und nicht zum Detail.
5. **Wie Sie wieder herauskommen.** Lassen Sie sich das Verfahren für den vollständigen Export schriftlich geben, bevor Sie unterschreiben, nicht erst beim Wechsel.

> **Der häufigste Ausfall ist nicht der des Anbieters, sondern der Ihrer Leitung.** Ein Cloud-System endet am Router der Praxis, nicht im Rechenzentrum. Eine Praxis mit einer einzigen Glasfaserleitung und ohne Mobilfunk-Rückfallebene hat einen einzelnen Ausfallpunkt, auch beim solidesten Anbieter am Markt.

## Was die Cloud nicht löst, und der eigene Server auch nicht

Ein Rechner unter dem Empfangstresen ist nicht automatisch vertraulicher. Mit ungepatchtem Betriebssystem, unverschlüsselter Platte und der Sicherung auf einer USB-Platte im selben Raum ist er schlechter als eine gepflegte Cloud: ein Einbruch oder ein Brand nimmt Original und Kopie zusammen mit.

Umgekehrt gilt dasselbe. Die Cloud entbindet Sie von nichts: Sie brauchen weiterhin den Vertrag nach Artikel 28, und Sie brauchen weiterhin die Auskunft, wie oft Wiederherstellungen getestet werden.

- **Festplattenverschlüsselung**, in beiden Modellen. Sie macht aus einem gestohlenen Notebook oder Server ein Hardwareproblem statt einer Datenpanne.
- **Eine Kopie außer Haus**, immer. Die Faustregel lautet drei Kopien, auf zwei verschiedenen Medien, eine davon außerhalb der Praxis.
- **Eine getestete Wiederherstellung** mindestens einmal im Jahr, mit der Uhr gestoppt und dem Ergebnis notiert.
- **Persönliche Zugänge**, kein gemeinsames Passwort am Monitor, denn das ist der Fehler, der alles Übrige entwertet.

![Patientenakte in Dentalpin mit Zahnschema, klinischen Warnhinweisen und laufendem Behandlungsplan](/screenshots/dental-chart.png)

*Das muss eine Wiederherstellung unversehrt zurückbringen, nicht nur die Patientenliste.*

## Nehmen Sie die Cloud, wenn

- **Niemand in der Praxis technisch verantwortlich sein will.** Das ist der gute Grund, und er genügt für sich allein.
- **Sie mehrere Standorte betreiben** und überall denselben Terminkalender wollen, ohne ein VPN aufzubauen.
- **Ihre Leitung stabil ist und Sie eine Rückfallebene** über Mobilfunk haben, die Sie wirklich getestet haben.
- **Sie planbare monatliche Kosten** einem Hardwarekauf alle fünf bis sechs Jahre vorziehen.

## Nehmen Sie den eigenen Server, wenn

- **Ein Leitungsausfall die Behandlung nicht stoppen darf.** Das ist auf dieser Seite das stärkste und konkreteste Argument.
- **Sie an jedem beliebigen Tag wechseln können wollen**, ohne darauf zu warten, dass jemand einen Export für Sie erzeugt.
- **Sie bereits IT-Betreuung haben** oder jemanden, der die Geräte mit Verstand pflegt.
- **Ihnen wichtig ist, wo die Daten physisch liegen**, aus eigener Richtlinie oder weil ein Dritter es verlangt.

Wenn Sie schwanken, gibt es einen ehrlichen Mittelweg: Fangen Sie mit der Option an, die Ihnen am wenigsten Arbeit macht, und ziehen Sie sich jeden Monat einen eigenen vollständigen Export. Damit können Sie später ohne unumkehrbaren Einsatz umentscheiden.

Bei Dentalpin erzwingt diese Entscheidung keinen Softwarewechsel: dasselbe Produkt läuft in unserer Cloud oder mit `docker compose` auf Ihrem eigenen Server, auf derselben PostgreSQL-Datenbank und mit demselben Export. Wenn Sie die selbst betriebene Variante vorher ausprobieren wollen, [dauert die Installation drei Minuten](/de/blog/dentalpin-in-drei-minuten-installieren/), und die Konditionen beider Wege stehen unter [Preise](/de/preise/).

## Quellen

- Paragraf 203 StGB, Absätze 3 und 4. [gesetze-im-internet.de](https://www.gesetze-im-internet.de/stgb/__203.html). Abgerufen am 9. August 2026.
- Verordnung (EU) 2016/679 (DSGVO), Artikel 28 und 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679). Abgerufen am 9. August 2026.

Dies ist keine Rechtsberatung. Aufbewahrungsfristen und die für Sie geltenden Pflichten hängen vom Einzelfall ab und sollten mit Ihrer Rechtsberatung oder Ihrer Zahnärztekammer geklärt werden.
