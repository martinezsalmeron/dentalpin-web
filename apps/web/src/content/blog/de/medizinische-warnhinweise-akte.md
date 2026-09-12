---
title: "Allergien und medizinische Warnhinweise: sichtbar bleiben"
description: "Sechs Felder pro Allergie, drei gültige Antworten wenn es keine gibt, und die vier Stellen, an denen der Hinweis von selbst erscheinen muss. Mit Quellen."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [allergien, warnhinweise, patientenakte, patientensicherheit, dsgvo]
---

Eine Allergie schützt die Patientin nur dann, wenn sie in einem eigenen Feld steht und dort von selbst erscheint, wo verordnet und wo behandelt wird. Sechs Dinge gehören zu jeder: die Substanz, was passiert ist, wie schwer, ob sie noch aktuell ist, ob sie bestätigt oder nur berichtet ist, und wann und von wem sie angegeben wurde.

Und wenn es keine gibt, wird auch das eingetragen. Ein leeres Allergiefeld sagt nicht, dass keine Allergie vorliegt. Es sagt, dass noch niemand gefragt hat, und beide Sätze führen zu unterschiedlichen Entscheidungen.

## Sechs Felder pro Allergie, und keines davon ist Freitext

Eine Allergie, die im Bemerkungsfeld steht, verschwindet an dem Tag, an dem dieses Feld elf Zeilen lang ist. Sie lässt sich nicht mehr filtern, sie kann niemanden mehr warnen, und sie lässt sich nicht in eine andere Software übernehmen.

| Feld | Was hineingehört | Beispiel |
|---|---|---|
| Substanz | Der Wirkstoff oder das Material, nie nur der Handelsname | Amoxicillin, Latex, Chlorhexidin, Nickel |
| Manifestation | Was tatsächlich passiert ist, klinisch benannt | Urtikaria, Angioödem, Bronchospasmus, Anaphylaxie |
| Schweregrad | Wie die bereits eingetretene Reaktion verlief | Leicht, mittel, schwer |
| Kritikalität | Der mögliche Schaden bei künftiger Exposition | Niedrig, hoch, nicht beurteilbar |
| Klinischer Status | Ob die Allergie heute noch besteht | Aktiv, inaktiv, abgeklungen |
| Verifizierung | Woher die Angabe stammt | Unbestätigt, bestätigt, widerlegt, Fehleintrag |
| Datum und Quelle | Wann erfasst und wer es gesagt hat | 12.03.2024, die Patientin selbst; Allergiebefund |

Diese Felder sind keine Hauskonvention. Es sind die Elemente der HL7-FHIR-Ressource AllergyIntolerance, des Standards, über den Gesundheitssysteme diese Angaben austauschen, und genau seine Wertelisten sorgen dafür, dass eine Allergie einen Softwarewechsel übersteht.

> **Schweregrad und Kritikalität sind zwei verschiedene Felder, und wer sie zusammenlegt, verliert beide.** FHIR hängt den Schweregrad an die konkrete Reaktion, die stattgefunden hat (leicht, mittel oder schwer), und die Kritikalität an die Substanz, als Schätzung des möglichen Schadens bei künftiger Exposition. Software mit nur einem Auswahlfeld zwingt zur Entscheidung, welches der beiden verloren geht.

![Patientenakte im Reiter Information, die medizinische Vorgeschichte aufgeklappt, im Abschnitt Allergien ist NSAR mit hoher Kritikalität markiert](/screenshots/patients.png)

*Die medizinische Vorgeschichte in getrennten Feldern: Allergien, Medikamente, systemische Erkrankungen und besondere Umstände. Die orange Markierung neben der Allergie ist ihre Kritikalität.*

## "Keine bekannt" ist eine Angabe, ein leeres Feld ist keine

Die britische NICE-Leitlinie CG183 zur Arzneimittelallergie verlangt, den Allergiestatus mit einer von drei Angaben zu dokumentieren: Arzneimittelallergie, keine bekannt, oder nicht ermittelbar. Alle drei sind Information, und alle drei werden eingetragen.

Das leere Feld ist keine davon. Es ist die fehlende Frage, und in einer Praxis, in der mehrere Personen dokumentieren, lässt es sich von einem Versehen nicht unterscheiden.

> **Ein leeres Feld und ein eingetragenes "keine bekannt" sehen auf den ersten Blick fast gleich aus und bedeuten das Gegenteil.** Das erste heißt, niemand hat gefragt. Das zweite heißt, es wurde gefragt und die Antwort war nein. Unterscheidet die Software das nicht, kann die Praxis nicht sagen, bei wem die Anamnese noch fehlt.

## Allergie, Unverträglichkeit und Nebenwirkung sind nicht dasselbe

Dieselbe NICE-Leitlinie verlangt, den Allergiestatus getrennt von unerwünschten Arzneimittelwirkungen zu dokumentieren und ihn für alle verordnenden Behandler klar sichtbar zu halten. FHIR bildet das in einem Feld mit zwei Werten ab, Allergie oder Unverträglichkeit, und trennt damit den immunologischen Mechanismus von allem, was keiner ist.

In der Praxis läuft die Unterscheidung so:

- **Allergie.** Dahinter steht ein immunologischer Mechanismus. Urtikaria, Angioödem, Bronchospasmus oder Anaphylaxie nach Exposition.
- **Unverträglichkeit.** Die Patientin reagiert schlecht, ohne dass dieser Mechanismus beteiligt ist.
- **Nebenwirkung.** Eine bekannte Wirkung des Präparats. Übelkeit unter einem Antibiotikum ist das Alltagsbeispiel.

Alle drei ins Allergiefeld zu schreiben ist am selben Tag bequem und danach teuer, weil es Therapieoptionen streicht, die vertragen werden, und weil es die echten Allergien zwischen Einträgen verdünnt, die keine sind.

## Eine Penicillinallergie ist fast nie eine Penicillinallergie

Hier kostet die Unterscheidung von oben am meisten, und es gibt eine offizielle Zahl, die das Ausmaß zeigt.

> **Die CDC formulieren es so: 10 % der US-Patienten gaben eine Penicillinallergie an, und bei klinischer Abklärung waren weniger als 1 % tatsächlich allergisch.** Dieselben CDC ergänzen, dass die spezifischen IgE-Antikörper mit der Zeit abnehmen können, sodass manche Patienten später vertragen, was sie früher nicht vertragen haben.

Nichts davon berechtigt eine Zahnarztpraxis, eine angegebene Allergie zu übergehen. Was sich ändert, ist die Dokumentation, denn ein Etikett ohne Vorgeschichte lässt sich nie überprüfen.

Steht in der Akte "Penicillinallergie" und sonst nichts, begleitet dieses Etikett den Patienten lebenslang. Stehen die konkrete Reaktion, das Jahr und die Quelle darin, hat ein Allergologe etwas, das er beurteilen und gegebenenfalls streichen kann.

## Die Warnhinweise, die keine Allergien sind

Das Allergiefeld ist das bekannteste, aber die Hälfte dessen, was vor Behandlungsbeginn zu sehen sein muss, ist keine Allergie.

- **Antikoagulanzien und Thrombozytenaggregationshemmer.** Sie ändern die Planung jedes blutigen Eingriffs und sind Medikation, nicht Allergie, brauchen also ein eigenes Feld.
- **Bisphosphonate und Denosumab.** Oral und intravenös sind beide relevant, und griffbereit gehören Wirkstoff, Indikation und Beginn.
- **Endokarditisrisiko.** Die Endokarditis-Leitlinie der Europäischen Gesellschaft für Kardiologie von 2023 empfiehlt eine Antibiotikaprophylaxe bei Hochrisikopatienten vor zahnärztlichen Risikoeingriffen und definiert beides. Hochrisiko: durchgemachte Endokarditis, chirurgisch oder kathetergestützt implantierte Klappenprothesen, Material zur Klappenrekonstruktion, angeborene Herzfehler (außer isolierten Klappenanomalien) und ein Herzunterstützungssystem als Dauertherapie. Risikoeingriffe: Extraktionen, oralchirurgische Eingriffe und jede Manipulation im gingivalen oder periapikalen Bereich, einschließlich Zahnsteinentfernung und Wurzelkanalbehandlung.
- **Schwangerschaft und Stillzeit.** Mit Datum, weil es der einzige Hinweis dieser Liste ist, der von selbst verfällt.
- **Diabetes, Epilepsie und Immunsuppression.** Sie ändern den Termin, nicht nur die Behandlung.

Der dritte Punkt kommt am häufigsten zu spät, weil die Zahnsteinentfernung auf der Risikoliste steht und meist als Routineprophylaxe eingetragen wird. Dieselbe europäische Leitlinie empfiehlt diesen Patienten professionelle Zahnreinigung und Kontrolle mindestens zweimal jährlich, das sind also häufige Termine, und der Hinweis muss im Terminkalender ankommen, nicht nur in der Akte.

## Eine Angabe, die man suchen muss, ist kein Warnhinweis

Eine sauber dokumentierte Allergie in einem Reiter, den niemand öffnet, schützt genauso gut wie gar keine Dokumentation. Das sind die vier Stellen, an denen sie von selbst erscheinen muss:

1. **Der Kopf der Patientenakte**, sichtbar bevor irgendein Reiter geöffnet wird.
2. **Die Ansicht des Zahnschemas**, wo gearbeitet und entschieden wird, was heute gemacht wird.
3. **Die Verordnung**, im Moment der Präparatewahl.
4. **Der Terminkalender**, bevor die Patientin zur Tür hereinkommt, solange noch Zeit bleibt, etwas vorzubereiten.

![Patientenakte mit rot hervorgehobenen klinischen Warnhinweisen neben dem Zahnschema, dem aktiven Behandlungsplan und dem nächsten Termin](/screenshots/dental-chart.png)

*Der klinische Warnhinweis fest in der linken Spalte, direkt neben dem Zahnschema. Es muss nichts geöffnet werden, und er bleibt beim Reiterwechsel stehen.*

## Wer ihn sieht und wer ihn ändern darf

Die DSGVO ordnet Gesundheitsdaten den besonderen Kategorien zu. Artikel 9 Absatz 1 verbietet ihre Verarbeitung, sofern keine der Ausnahmen aus Absatz 2 greift, und Artikel 5 Absatz 1 Buchstabe c ergänzt die Datenminimierung: dem Zweck angemessen, erheblich und auf das notwendige Maß beschränkt.

Das hindert die Rezeption nicht daran, einen Hinweis zu sehen. Es zwingt aber zu der Entscheidung, was jede Rolle sehen muss, und das ist selten dasselbe:

- **Die Rezeption** muss wissen, dass dieser Termin Vorbereitung braucht, nicht die Diagnose dahinter.
- **Das Behandlungszimmer** braucht den vollständigen Hinweis.
- **Alle** brauchen, dass die Änderung mit Datum, Uhrzeit und Bearbeiter festgehalten wird, denn Buchstabe f verlangt geeignete technische und organisatorische Maßnahmen, und eine Allergie spurlos zu löschen ist keine.

Buchstabe d liefert die Hälfte, die gern vergessen wird: die Daten müssen sachlich richtig und auf dem neuesten Stand sein. Eine durch Testung widerlegte Allergie wird aktualisiert und bleibt nicht vorsichtshalber stehen.

## Wie er aktuell bleibt

1. **Beim Erstbesuch wird vollständig ausgefüllt**, einschließlich "keine bekannt", wenn das die Antwort ist.
2. **Bei jedem Termin wird in einer Zeile bestätigt.** Das ist keine erneute Anamnese, sondern die Frage nach neuer Medikation oder neuer Diagnose.
3. **Vor jeder Verordnung und jeder Injektion wird nachgelesen.** Das ist der einzige Moment, in dem der Hinweis den Schaden noch verhindern kann.
4. **Trifft ein Befund ein, werden Verifizierung und Datum aktualisiert**, samt Herkunft der Angabe.
5. **Bei der Reaktivierung eines inaktiven Patienten wird alles neu durchgegangen.** Zwei Jahre ohne Termin sind zwei Jahre neue Medikamente.

## Wo Software hilft und wo nicht

Keine Software erhebt die Anamnese. Sie entscheidet nur, ob die Antwort in einem Feld mit Status, Kritikalität und Datum landet oder in einem Absatz Freitext, und an welchen Stellen sie wieder von selbst auftaucht, ohne dass jemand daran denken muss.

Dentalpin führt Allergien, Medikation, systemische Erkrankungen und besondere Umstände als getrennte Felder der medizinischen Vorgeschichte, mit Kritikalitätsstufe, und zeigt die Hinweise fest neben dem Zahnschema und im Kopf der Akte. Die Tarife stehen unter [Preise](/de/preise/).

Dies ist weder Rechtsberatung noch eine klinische Leitlinie. Die für Sie geltenden fachlichen Empfehlungen und das nationale Recht am Sitz Ihrer Praxis gehen jeder allgemeinen Empfehlung dieses Beitrags vor.

## Quellen

- HL7 FHIR R4, Ressource AllergyIntolerance (Elemente type, category, criticality, clinicalStatus, verificationStatus und reaction.severity): <https://hl7.org/fhir/R4/allergyintolerance.html> (abgerufen am 12. September 2026).
- NICE, Leitlinie CG183, *Drug allergy: diagnosis and management*, Empfehlungen zur Dokumentation des Allergiestatus. Volltext des National Clinical Guideline Centre: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (abgerufen am 12. September 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (abgerufen am 12. September 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), S. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (abgerufen am 12. September 2026).
- Verordnung (EU) 2016/679 (DSGVO), Artikel 5 Absatz 1 Buchstaben c, d und f sowie Artikel 9 Absatz 1. Amtlicher Text auf EUR-Lex: <https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679> (abgerufen am 12. September 2026).
