---
title: "Ransomware in der Zahnarztpraxis: der Plan der kleinen Praxis"
description: "Was in der ersten Stunde eines Ransomware-Angriffs auf eine Zahnarztpraxis zu tun ist, welche Datensicherung die Verschlüsselung übersteht und was die DSGVO in 72 Stunden verlangt."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [ransomware, sicherheit, dsgvo, datensicherung, praxis-it]
---

Der Ransomware-Plan einer kleinen Praxis passt auf ein Blatt: eine vom Netz getrennte Datensicherung, die schon einmal wirklich zurückgespielt wurde, eine Liste mit den Nummern für die erste Stunde, aktuelle Updates mit Zwei-Faktor-Authentisierung an jedem Fernzugang, und das Wissen, dass eine meldepflichtige Datenpanne eine Frist von 72 Stunden auslöst. Nichts davon lässt sich an dem Morgen improvisieren, an dem der Terminkalender nicht mehr aufgeht.

Was folgt, ist dieses Blatt, der Reihe nach: was tatsächlich stillsteht, was in den ersten sechzig Minuten passiert, was die DSGVO verlangt und welche Maßnahmen die Wahrscheinlichkeit wirklich senken.

## Still steht die Praxis, nicht der Rechner

Ransomware verschlüsselt Daten und fordert Lösegeld. In einer Zahnarztpraxis heißt das: der Terminkalender öffnet nicht, die Patientenakte ist weg, Röntgenbilder lassen sich nicht anzeigen und die Abrechnung steht, alles gleichzeitig und meist gleich am frühen Morgen.

Das klinische Problem kommt vor dem IT-Problem. Ohne die medizinischen Warnhinweise einer Akte wissen Sie nicht, gegen welches Anästhetikum eine Patientin allergisch ist, und genau deshalb kann eine Praxis ohne Zugriff auf ihre Daten nicht einfach weiterbehandeln.

Die ENISA, die europäische Agentur für Cybersicherheit, hat im Juli 2023 ihre erste Bedrohungslage für das Gesundheitswesen vorgelegt. Ransomware macht darin 54 Prozent der Bedrohungen des Sektors aus, Patientendaten sind mit 30 Prozent das am häufigsten angegriffene Gut, und nur 27 Prozent der befragten Einrichtungen hatten ein eigenes Programm zur Abwehr von Ransomware.

> **Die Zahl, die den Aufwand rechtfertigt, ist der Terminkalender von morgen.** Eine Praxis mit drei Behandlungsstühlen und vierzig Terminen am Tag diskutiert kein IT-Thema, sie entscheidet, ob sie nächste Woche öffnet. Alles Weitere ist daneben billig.

![Terminkalender der Praxis in der Tagesansicht mit den Terminen je Behandlungsstuhl](/screenshots/schedule-day.png)

*Das ist die Ansicht, die nicht mehr aufgeht, und die erste, die jemand vermisst.*

## Die erste Stunde, der Reihe nach

Die Reihenfolge zählt, weil die Entscheidungen der ersten Minuten darüber bestimmen, ob Spuren erhalten bleiben und ob die Datensicherung überlebt.

1. **Den betroffenen Rechner vom Netz trennen**, Kabel und WLAN. Das stoppt die Ausbreitung auf den Server und die übrigen Arbeitsplätze.
2. **Auch die Sicherungsplatte oder das NAS trennen.** War es angeschlossen, ist es ein Ziel und kein Rückzugsort.
3. **Noch nichts löschen.** Zuerst ein Abbild der betroffenen Platte ziehen: es ermöglicht einen späteren Entschlüsselungsversuch und ist zugleich das Beweismittel.
4. **Die Uhrzeit der Entdeckung notieren.** Die Meldefrist läuft ab dem Zeitpunkt, an dem die Praxis Kenntnis von der Verletzung erlangt, diese Uhrzeit ist also eine rechtliche Angabe.
5. **Anrufen.** IT-Dienstleister, danach die zuständige Datenschutzaufsichtsbehörde des Landes und, wenn vorhanden, die Cyberversicherung.
6. **Absprechen, was die Rezeption sagt.** Patientinnen und Patienten, die ihren Termin bestätigen wollen, werden fragen, und ein abgestimmter Satz ist besser als fünf improvisierte.
7. **Anzeige erstatten.** Der Angriff ist eine Straftat, und die Anzeige gehört zu den Unterlagen, die Sie später vorlegen können müssen.

## Die 72 Stunden, die zu laufen beginnen

Artikel 33 DSGVO verpflichtet den Verantwortlichen, eine Verletzung des Schutzes personenbezogener Daten unverzüglich und möglichst binnen 72 Stunden, nachdem sie ihm bekannt wurde, der zuständigen Aufsichtsbehörde zu melden, es sei denn, die Verletzung führt voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen. Artikel 34 verlangt zusätzlich die Benachrichtigung der Betroffenen, wenn das Risiko hoch ist.

Verschlüsselte Patientenakten sind selten ein Fall mit niedrigem Risiko. Gesundheitsdaten sind eine besondere Kategorie, und die meisten aktuellen Ransomware-Gruppen kopieren Daten ab, bevor sie verschlüsseln. Zu bewerten ist deshalb nicht nur der Verlust der Verfügbarkeit.

> **Dokumentieren Sie den Vorfall auch dann, wenn Sie nicht melden.** Artikel 33 Absatz 5 verlangt die Dokumentation jeder Verletzung, einschließlich der Folgen und der ergriffenen Abhilfemaßnahmen. Ein kurzer Eintrag mit Datum, Umfang und der Begründung, warum kein Risiko bestand, ist genau das, was eine Prüfung sehen will.

| Was passiert ist | Meldung an die Aufsichtsbehörde? | Patienten benachrichtigen? |
|---|---|---|
| Nur Verschlüsselung, Rücksicherung binnen Stunden aus sauberer Kopie | ~ Bewerten und die Begründung dokumentieren | ✗ In der Regel nein, ohne hohes Risiko |
| Patientenakten verschlüsselt, keine brauchbare Sicherung | ✓ Ja | ✓ Wahrscheinlich ja |
| Angreifer veröffentlichen Daten oder drohen damit | ✓ Ja | ✓ Ja |
| Ein verschlüsseltes Notebook ohne Patientendaten | ✗ Keine Datenschutzverletzung | ✗ Nein |

Das ist keine Rechtsberatung, und jeder Fall wird einzeln bewertet. Die praktische Regel der Aufsichtsbehörden ist überall dieselbe: im Zweifel melden.

## Die Datensicherung, die die Verschlüsselung übersteht

Ransomware verschlüsselt alles, worauf der befallene Rechner schreiben kann. Dazu gehören die USB-Platte, die seit zwei Jahren steckt, und der NAS-Ordner, der als Netzlaufwerk eingebunden ist.

Das britische NCSC formuliert es eindeutig: Sicherungen offline und an einem anderen Ort halten, idealerweise außerhalb des Gebäudes; Sicherungsmedien nicht dauerhaft mit dem Netz verbunden lassen, denn "Angreifer nehmen verbundene Sicherungsgeräte gezielt ins Visier"; die Rücksicherung regelmäßig testen; und Sicherungen vor dem Zurückspielen auf Schadsoftware prüfen.

| Wo die Sicherung liegt | Übersteht Ransomware | Aufwand pro Monat |
|---|---|---|
| Ordner auf demselben Server | ✗ Wird mitverschlüsselt | ✓ Keiner |
| Dauerhaft angeschlossene USB-Platte | ✗ Wird mitverschlüsselt | ✓ Keiner |
| Platte anstecken, sichern, abziehen | ✓ Ja, wenn sie beim Angriff getrennt war | ~ Jemand muss daran denken |
| Cloud-Sicherung mit Versionen oder Unveränderbarkeit | ✓ Ja, wenn die Angreifer die Zugangsdaten nicht haben | ✓ Keiner, wenn automatisiert |
| Synchronisierter Ordner (Drive, OneDrive, Dropbox) | ✗ Synchronisiert die verschlüsselten Dateien nach | ✓ Keiner |

Dann kommt der Schritt, der aus einer Sicherung einen Plan macht: einmal im Jahr auf einem anderen Rechner zurückspielen und die Zeit stoppen. Diese Zahl ist Ihre reale Wiederanlaufzeit, und Artikel 32 Absatz 1 Buchstabe d verlangt genau das, die regelmäßige Überprüfung und Bewertung der Wirksamkeit der Maßnahmen.

![Rechnungsliste mit den Zuständen gestellt, bezahlt, teilweise bezahlt, überfällig und Entwurf](/screenshots/invoices.png)

*Die Abrechnung steht mit still, und sie ist der Teil, den erst zwei Wochen später jemand vermisst.*

## Was das Risiko wirklich senkt

Keine einzelne Maßnahme verhindert Ransomware, aber ein paar wenige schließen die üblichen Wege in eine kleine Praxis.

- **Aktualisieren, sobald der Patch da ist**, mit Vorrang für alles, was zum Internet zeigt: Router, Firewall, VPN-Gerät.
- **Zwei-Faktor-Authentisierung an jedem Fernzugang.** Wer von zu Hause arbeitet, braucht dort einen zweiten Faktor, und der sollte nicht auf demselben Gerät liegen, mit dem die Sicherungen verwaltet werden.
- **Konten mit genau den nötigen Rechten.** Die Rezeption muss nicht Administrator des Servers sein, und Ransomware erbt exakt die Rechte derjenigen Person, die sie geöffnet hat.
- **Makros deaktivieren** in Office-Dokumenten, nach wie vor ein gewöhnlicher Weg über E-Mail.
- **Keine geteilten Zugangsdaten.** Ein Konto pro Person ist keine Bürokratie, sondern das Einzige, womit sich hinterher rekonstruieren lässt, wo der Einstieg war.
- **Remotedesktop nicht offen ins Internet.** Wenn Fernzugriff nötig ist, dann über VPN mit MFA und nicht über einen offenen Port.

Das BSI hat dafür einen eigenen Maßnahmenkatalog Ransomware veröffentlicht, Stand 24. Februar 2022. Das Arbeitsdokument "dient zur Vorbereitung auf einen Ransomware-Angriff und stellt die notwendigen präventiven Grundlagen vor" und richtet sich ausdrücklich an "Unternehmen und Behörden, die sich mit dem Thema noch nicht oder nur ansatzweise auseinandergesetzt haben". Das beschreibt eine Zahnarztpraxis ziemlich genau.

## Zahlen, und warum die amtliche Antwort Nein lautet

Das NCSC hält fest, dass Strafverfolgungsbehörden die Zahlung von Lösegeldforderungen "weder befürworten noch unterstützen oder gutheißen", und nennt die Gründe: es gibt keine Garantie, dass Sie wieder an Ihre Daten kommen, der Rechner bleibt infiziert, und das Geld geht an kriminelle Gruppen.

> **Zahlen schließt den Vorgang nicht ab.** Selbst wenn die Dateien zurückkommen, hat die Verletzung stattgefunden, die Frist aus Artikel 33 lief trotzdem, und Dokumentation sowie die Prüfung einer Benachrichtigung der Patientinnen und Patienten bleiben Ihre Pflicht.

Bevor Sie Daten abschreiben, lohnt der Blick auf No More Ransom, das von Europol unterstützte Projekt, das kostenlose Entschlüsselungswerkzeuge für bereits gebrochene Ransomware-Familien veröffentlicht. Es deckt nicht alles ab, und die Prüfung kostet fünf Minuten.

## Das Blatt, das heute entsteht

Schreiben, ausdrucken, und eine Kopie außerhalb des Systems aufbewahren, das man zurückspielen müsste. Ein Plan, den es nur auf dem verschlüsselten Server gibt, ist keiner.

1. **Wer angerufen wird**, mit Namen und Nummern: IT-Dienstleister, Praxisleitung, zuständige Aufsichtsbehörde, Cyberversicherung.
2. **Wo die Sicherungen liegen**, mit welchen Zugangsdaten man herankommt und wer sie außer der IT noch hat.
3. **Wie zurückgespielt wird**, in Schritten, geschrieben von jemandem, der es mindestens einmal getan hat.
4. **Was die Rezeption am Telefon sagt**, in zwei abgestimmten Sätzen.
5. **Wer über die Meldung entscheidet** und mit welcher Beratung oder welchem Datenschutzbeauftragten.
6. **Das Datum des letzten Rücksicherungstests** und wie lange er gedauert hat.

Damit ist Ransomware keine Krise ohne Horizont mehr, sondern ein sehr schlechter Tag mit bekanntem Ende.

Bei Dentalpin ist die Sicherung ein gewöhnlicher PostgreSQL-Dump plus das Anhangsverzeichnis. Sie können sie an ein Ziel schreiben, über das der Praxisserver keine Kontrolle hat, und sie zurückspielen, ohne auf jemanden zu warten. Die Konditionen der gehosteten und der selbst betriebenen Variante stehen unter [Preise](/de/preise/).

## Quellen

- Verordnung (EU) 2016/679 (DSGVO), Artikel 32, 33 und 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 27. August 2026.
- BSI, *Maßnahmenkatalog Ransomware*, Stand 24.02.2022. [bsi.bund.de](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Themen/Ransomware_Massnahmenkatalog.html). Abgerufen am 27. August 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Abgerufen am 27. August 2026.
- ENISA, *Health Threat Landscape* (5. Juli 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Abgerufen am 27. August 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Abgerufen am 27. August 2026.

Dies ist keine Rechtsberatung. Ob eine konkrete Datenpanne meldepflichtig ist und an welche Aufsichtsbehörde, hängt vom Einzelfall und vom Bundesland ab und sollte mit dem Datenschutzbeauftragten oder einer Rechtsberatung geklärt werden.
