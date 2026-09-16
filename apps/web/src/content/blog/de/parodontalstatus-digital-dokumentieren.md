---
title: "Parodontalstatus digital dokumentieren: was bei jeder Sondierung erfasst wird"
description: "Was an jedem Zahn erfasst gehört, warum die Sondierungstiefe allein täuscht und was die PAR-Richtlinie des G-BA für den Parodontalstatus tatsächlich verlangt."
pubDate: 2026-09-16
translationKey: periodontograma-digital
tags: [parodontalstatus, patientenakte, zahnarztpraxis, praxissoftware]
---

Ein Parodontalstatus hält je Zahn die Sondierungstiefe und die Sondierungsblutung fest, dazu die Lage des Gingivarands, damit sich der Attachmentverlust ergibt, und pro Zahn Furkationsbefall, Lockerungsgrad und den parodontal bedingten Zahnverlust. Gelesen wird er im Vergleich datierter Serien, nie an einer einzelnen Zahl.

Im Folgenden steht, was in jedes Feld gehört, was die PAR-Richtlinie als Minimum verlangt und was eine Praxissoftware leisten muss, damit der Befund in drei Jahren noch mit dem heutigen vergleichbar ist.

## Was die PAR-Richtlinie verlangt, und was darüber hinausgeht

Hier lohnt sich der genaue Blick, denn der gesetzliche Mindestumfang und der klinische Standard sind nicht dasselbe. § 3 Absatz 3 der PAR-Richtlinie verlangt Sondierungstiefen und Sondierungsblutung an **mindestens zwei Stellen pro Zahn**, eine davon mesioapproximal, eine distoapproximal. Der international übliche Sechspunktbefund misst drei Stellen vestibulär und drei oral.

| Befund | Was die PAR-Richtlinie fordert | Klinisch üblich |
|---|---|---|
| Sondierungstiefe | ✓ Mindestens zwei Stellen pro Zahn | Sechs Stellen pro Zahn |
| Sondierungsblutung | ✓ An denselben Stellen | Sechs Stellen, ja oder nein |
| Gingivarand und Rezession | ✗ Nicht ausdrücklich gefordert | Sechs Stellen, Grundlage des Attachmentverlusts |
| Lockerungsgrad | ✓ Grad 0 bis III | Pro Zahn |
| Furkationsbefall | ✓ Grad 0 bis III | Pro Furkationseingang |
| Zahnverlust durch Parodontitis | ✓ Ausdrücklich Teil des Befunds | Geht in das Stadium ein |
| Röntgenologischer Knochenabbau | ✓ Mit der Angabe Knochenabbau (%/Alter) | Grundlage des Grads |

Die Richtlinie ist hier auch bei Details eindeutig: liegt die Sondierungstiefe zwischen zwei Millimetermarkierungen, wird gerundet, Werte unter 0,5 mm ab, Werte ab 0,5 mm auf. Die Röntgenaufnahmen müssen auswertbar und in der Regel nicht älter als zwölf Monate sein.

> **Die Angabe Knochenabbau (%/Alter) steht wörtlich in der Richtlinie.** Das ist genau der Quotient, aus dem sich der Grad ergibt, und er ist eine Division aus zwei Zahlen, die die Software längst hat. Trotzdem lassen ihn die meisten Programme von Hand eintragen.

![Parodontalstatus mit den Sondierungsstellen je Zahn und den erfassten Werten](/screenshots/periodontogram.png)

*Die Erfassung je Zahn, vestibulär und oral in getrennten Zeilen.*

## Warum die Sondierungstiefe allein täuscht

Zwei Gebisse mit derselben Zahl können in entgegengesetzten Situationen sein, und genau dafür gibt es das Attachmentniveau.

- **Bei Rezession verbirgt eine flache Tasche einen großen Verlust.** Ein Zahn mit 3 mm Rezession und 3 mm Tasche hat 6 mm Attachment verloren, und die Tiefenspalte zeigt ihn als unauffällig.
- **Bei entzündlich geschwollener Gingiva ist es umgekehrt.** Der Gingivarand ist nach koronal gewandert, die Sonde läuft 5 mm weit, und das Attachment kann intakt sein.
- **Deshalb stützt sich die Falldefinition auf den interdentalen Attachmentverlust**, nicht auf die Tiefe. Das Weltklassifikationstreffen 2017 definiert einen Parodontitisfall über einen nachweisbaren interdentalen Attachmentverlust an mindestens zwei nicht benachbarten Zähnen.

Den Gingivarand mitzuerfassen kostet ein Feld je Stelle und ist das Einzige, was aus einer Tabelle von Tiefen die Geschichte des Zahnhalteapparats macht.

## Stadium und Grad: die beiden Fragen, die früher eine waren

§ 4 der PAR-Richtlinie knüpft die Behandlungsbedürftigkeit an eine Diagnose **und** an eine Sondierungstiefe von 4 mm oder mehr. Die Diagnosen sind nach der jeweils gültigen Klassifikation anzugeben, also nach der gemeinsamen Klassifikation von American Academy of Periodontology und European Federation of Periodontology aus dem Jahr 2018.

| | Stadium I | Stadium II | Stadium III | Stadium IV |
|---|---|---|---|---|
| Interdentaler Attachmentverlust an der schlechtesten Stelle | 1 bis 2 mm | 3 bis 4 mm | ≥ 5 mm | ≥ 5 mm |
| Röntgenologischer Knochenabbau | Koronales Drittel (< 15%) | Koronales Drittel (15% bis 33%) | Bis ins mittlere Drittel und darüber hinaus | Bis ins mittlere Drittel und darüber hinaus |
| Parodontal bedingter Zahnverlust | Keiner | Keiner | ≤ 4 Zähne | ≥ 5 Zähne |
| Maximale Sondierungstiefe | ≤ 4 mm | ≤ 5 mm | ≥ 6 mm | ≥ 6 mm |

Die Ausdehnung wird getrennt beschrieben, und die Richtlinie übernimmt die Grenzen wörtlich: lokalisiert unter 30% der Zähne, generalisiert ab 30%, oder Molaren-Inzisiven-Muster.

Der Grad schätzt die Geschwindigkeit. Indirekt gilt der Knochenabbau geteilt durch das Lebensalter: unter 0,25 ist Grad A, 0,25 bis 1,0 ist Grad B, über 1,0 ist Grad C. Rauchen und Diabetes verschieben ihn, mit 10 Zigaretten pro Tag und einem HbA1c von 7,0% als Schwellen. Die parodontitisspezifische Anamnese nach § 3 Absatz 2 erhebt genau diese beiden Risikofaktoren, den HbA1c-Wert ausdrücklich mit Zahl.

Ausgangspunkt ist immer Grad B, von dem aus nach Belegen für A oder C gesucht wird. Liegt direkte Evidenz vor, also zwei datierte Befunde oder Aufnahmen, geht sie der indirekten Rechnung vor.

## Der Grad steuert den Recall, nicht nur die Diagnose

Das ist der praktische Punkt, an dem die Dokumentation den Terminkalender erreicht. § 13 der PAR-Richtlinie koppelt die Intervalle der unterstützenden Parodontitistherapie an den Grad:

1. **Grad A**: einmal im Kalenderjahr, mit einem Mindestabstand von zehn Monaten.
2. **Grad B**: einmal im Kalenderhalbjahr, mit einem Mindestabstand von fünf Monaten.
3. **Grad C**: einmal im Kalendertertial, mit einem Mindestabstand von drei Monaten.

Ab dem zweiten Jahr gehört einmal im Kalenderjahr die Untersuchung des Parodontalzustands dazu, mit demselben Befundumfang wie oben. Die erste Befundevaluation nach § 11 erfolgt drei bis sechs Monate nach Abschluss der antiinfektiösen Therapie.

> **Ein Grad, der nur in der Diagnose steht, terminiert niemand.** Wenn die Software den Grad kennt, kann sie die UPT-Intervalle und ihre Mindestabstände selbst vorschlagen. Wenn er in einem Freitextfeld liegt, macht das die Rezeption von Hand, und die Mindestabstände fallen genau dann auf, wenn sie unterschritten wurden.

Die europäische S3-Leitlinie zur Behandlung der Parodontitis in den Stadien I bis III formuliert das Ziel der Erhaltungsphase als Zustand ohne Taschen über 4 mm mit Sondierungsblutung, bei Intervallen zwischen drei und höchstens zwölf Monaten. Die antiinfektiöse Therapie nach § 9 setzt an Taschen mit 4 mm und mehr an, und Blutung und Suppuration auf Sondierung sollen dabei weitgehend beseitigt werden.

![Patientenakte im Reiter Aktivität, mit der nach Terminen und Behandlungen filterbaren Zeitleiste](/screenshots/patient-timeline.png)

*Jeder Eintrag behält sein Datum, was den Vergleich einer Sitzung mit der vorherigen erst möglich macht.*

## Was die Software leisten muss, damit die Serie vergleichbar bleibt

- **Die Reihenfolge der Stellen festlegen.** Erfasst eine Behandlerin von mesial nach distal und eine andere umgekehrt, hat Zahn 16 zwei Serien, die sich nicht übereinanderlegen lassen.
- **Festhalten, wer sondiert hat.** Die Streuung zwischen Behandlern ist real, und ohne diese Angabe lässt sich ein Sprung von 2 mm zwischen zwei Sitzungen nicht einordnen.
- **Den vorherigen Wert nie überschreiben.** Ein Status, der nur den aktuellen Stand hält, löscht genau die Daten, für die er existiert.
- **Das Attachmentniveau rechnen, nicht abfragen.** Tiefe plus Rezession ist eine Summe, die das Programm bilden kann.
- **Den Knochenabbau in Prozent und den Quotienten %/Alter ausgeben**, weil die Richtlinie genau diese Angabe verlangt.
- **Die Aufnahme verknüpfen, an der der Knochen gemessen wurde**, aus dem Befund heraus und nicht aus einem getrennten Ordner.
- **Alles mit Datum exportieren.** Ein Status, der nur im Programm eines Anbieters existiert, ist ein Bildschirm und keine Serie.

## In zehn Minuten selbst prüfen

1. **Eine langjährige PAR-Patientin öffnen** und den Verlauf der Stelle mesiovestibulär an Zahn 16 aufrufen. Zeigt das Programm nur den letzten Wert, gibt es keine Serie.
2. **Eine Rezession von 2 mm erfassen** und prüfen, ob das Attachmentniveau von selbst berechnet wird.
3. **An mehreren Stellen Blutung setzen** und den Blutungswert für das ganze Gebiss suchen.
4. **Nachsehen, wo der Furkationsgrad liegt** und ob die Eingänge eines Oberkiefermolaren getrennt erfasst werden.
5. **Eine Tiefe absichtlich ändern** und prüfen, ob die Änderung mit Datum und Benutzer protokolliert wird und der alte Wert lesbar bleibt.
6. **Die Liste der Stellen über 4 mm mit Blutung abfragen.** Das ist die Abfrage, die über den nächsten Schritt entscheidet.
7. **Den vollständigen Verlauf exportieren**, in einem Format, das sich ohne das Programm öffnen lässt.

Punkt 7 schiebt jede Praxis vor sich her, und nur er lässt sich an dem Tag, an dem er gebraucht wird, nicht mehr nachholen.

Das ist keine Rechtsberatung. Was im Einzelfall abrechenbar und dokumentationspflichtig ist, klären die KZV und der jeweils gültige Richtlinientext.

In Dentalpin wird jede Stelle mit Datum und Behandler gespeichert, das Attachmentniveau ergibt sich aus Tiefe und Gingivarand, frühere Messungen bleiben in der Zeitleiste der Patientenakte lesbar, und alles kommt als gewöhnlicher PostgreSQL-Dump heraus, sobald Sie danach fragen. Was die gehostete und die selbst betriebene Variante umfassen, steht in den [Preisen](/de/preise/).

## Quellen

- Gemeinsamer Bundesausschuss, *Richtlinie zur systematischen Behandlung von Parodontitis und anderer Parodontalerkrankungen (PAR-Richtlinie)*, §§ 3, 4, 9, 11 und 13. [g-ba.de](https://www.g-ba.de/downloads/62-492-2817/PAR-RL_2021-12-16_iK-2022-05-13.pdf). Abgerufen am 16. September 2026.
- American Academy of Periodontology und European Federation of Periodontology, *Staging and Grading Periodontitis*, Tabellen des Weltklassifikationstreffens 2017, nach Tonetti, Greenwell und Kornman, *J Periodontol* 2018;89(Suppl 1):S159-S172. [perio.org](https://www.perio.org/wp-content/uploads/2019/08/Staging-and-Grading-Periodontitis.pdf). Abgerufen am 16. September 2026.
- Papapanou et al., *Periodontitis: Consensus report of workgroup 2 of the 2017 World Workshop*, Falldefinition über den interdentalen Attachmentverlust. [aap.onlinelibrary.wiley.com](https://aap.onlinelibrary.wiley.com/doi/10.1002/JPER.17-0721). Abgerufen am 16. September 2026.
- European Federation of Periodontology, S3-Leitlinie zur Behandlung der Parodontitis in den Stadien I bis III (Sanz et al., *J Clin Periodontol* 2020), Schritte 3 und 4. [efp.org](https://www.efp.org/fileadmin/uploads/efp/Photos/Continuing_Education/Teatment-stage-Perio_Steps-ALL_071022-3.pdf). Abgerufen am 16. September 2026.
