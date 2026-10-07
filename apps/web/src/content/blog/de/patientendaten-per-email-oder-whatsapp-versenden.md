---
title: "Röntgenbild oder Befundbericht versenden: der Kanal entscheidet, nicht die Einwilligung"
description: "Anhang nach dem Stand der Technik verschlüsseln, Passwort über einen anderen Weg, kein Patientenname im Betreff. Was die Kammer zu E-Mail und WhatsApp sagt."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [dsgvo, datenschutz, patientenakte, praxissicherheit]
---

Der Kieferorthopäde möchte das Panoramaröntgenbild, das Labor möchte die Fotos, der Patient möchte seinen Befundbericht "per WhatsApp". Die Einwilligung ist in allen drei Fällen der einfache Teil. Schwierig ist der Kanal, und dazu gibt es in Deutschland eine ungewöhnlich konkrete Antwort: Dokument verschlüsseln und als Anhang versenden, Passwort über einen anderen Kommunikationsweg, kein Patientenname in Betreff oder Nachrichtentext. Für Messenger lautet die Antwort schlicht nein.

Dies ist keine Rechtsberatung. Es ist die Lesart der am Ende genannten Quellen, abgerufen am 7. Oktober 2026.

## Das sind nicht die vier anderen Fragen

Fünf Dinge werden regelmäßig verwechselt, und vier davon sind an anderer Stelle beantwortet.

- **Terminerinnerungen** enthalten keine Behandlungsdaten. Sie sind eine Uhrzeit, und die Frage dort ist eine der Einwilligung, siehe [WhatsApp-Terminerinnerungen](/de/blog/whatsapp-terminerinnerungen-zahnarztpraxis/) und [den Kanalvergleich](/de/blog/sms-whatsapp-oder-email-erinnerungen/).
- **Das Auskunftsrecht** klärt, was Sie herausgeben müssen, wenn [der Patient seine Akte anfordert](/de/blog/patient-fordert-patientenakte-an/). Es klärt das Was, nicht das Wie.
- **Die DSGVO der Praxis** ist der Rahmen: [Rechtsgrundlagen, Verzeichnis, Fristen](/de/blog/dsgvo-zahnarztpraxis/).
- **Hier** geht es um die alltägliche Frage danach: Sie wissen, dass etwas raus muss und an wen. Offen ist nur, auf welchem Weg.

## Zwei Rechtsgrundlagen, nicht eine

Das Merkblatt "Versand von Patientendaten" der Landeszahnärztekammer Baden-Württemberg (8/2020) setzt genau dort an, wo die meisten Praxen nur die halbe Prüfung machen:

> **Neben der DSGVO gilt das Strafrecht.** *"Neben den Vorgaben der EU-Datenschutz-Grundverordnung (Art. 32 EU-DSGVO) hat der Zahnarzt bei der Übermittlung von Patientendaten an Dritte auch die Schweigepflicht nach § 203 Strafgesetzbuch zu berücksichtigen."*

Eine Übermittlung an Dritte ist nach dem Merkblatt nur in drei Fällen möglich: wenn der Patient eingewilligt hat, wenn der Zahnarzt gesetzlich zur Übermittlung verpflichtet ist (genannt werden unter anderem die KZV zum Zweck der Abrechnung nach § 295 SGB V und die zahnärztliche Stelle) oder *"zur Wahrung berechtigter Interessen des Zahnarztes"*, etwa bei der zivilrechtlichen Geltendmachung von Honorarforderungen.

Eine Einordnung gehört dazu, und das Merkblatt sagt sie selbst: die Fragen und Antworten sind *"nicht durch die Aufsichtsbehörden geprüft worden"*. Es ist eine Kammerempfehlung mit hohem Praxiswert, keine Position einer Aufsichtsbehörde.

![Patientenakte mit Zahnschema, klinischen Warnhinweisen, laufendem Behandlungsplan und nächstem Termin](/screenshots/dental-chart.png)

*Die Akte, aus der das Angeforderte stammt: Zahnschema, Warnhinweise und laufender Behandlungsplan.*

## E-Mail: der Anhang wird verschlüsselt, nicht die Mail

Die Reihenfolge im Merkblatt ist eindeutig: *"Beim Versenden eines personenbezogenen Dokumentes wird dieses Dokument verschlüsselt und dann als E-Mail Anhang versendet."* Daraus folgt der Satz, der in der Praxis am häufigsten übersehen wird:

> **Betreff und Nachrichtentext werden nie verschlüsselt.** *"Dabei ist auch zu beachten, dass der Betreff der E-Mail und der E-Mailtext selber nicht verschlüsselt werden und deshalb hierin keine Patientennamen auftauchen dürfen."* Ein korrekt verschlüsselter Anhang mit "Röntgenbild Frau Müller" im Betreff ist kein korrekter Versand.

Zur Stärke der Verschlüsselung wird das Merkblatt konkret: bei Packprogrammen im ZIP- oder RAR-Format *"muss darauf geachtet werden, dass die Schlüssellänge mindestens 256 Bit-AES beträgt"*. Genannt werden 7zip als freies Werkzeug und serverbasierte Anbieter wie Cryptshare.

Für das Passwort gilt der Satz, an dem die meisten Versände scheitern: *"Das Passwort sollte auf einem anderen Kommunikationsweg dem Empfänger zugänglich gemacht werden, also z. B. per Telefon, Brief oder SMS."* Dieselbe Mail ist kein anderer Kommunikationsweg.

Für regelmäßige Partner empfiehlt das Merkblatt den besseren Weg: GnuPG beziehungsweise PGP, vom BSI gerade kleineren Unternehmen empfohlen, mit öffentlichem und privatem Schlüssel. Der Vorteil steht wörtlich darin: *"Ein Passwort wird nicht geteilt und nicht übermittelt."* Für den Zahntechniker und für Überweiser ist das nach einmaligem Schlüsseltausch der bequemste und sicherste Weg.

## Messenger: die Antwort ist nein

> **WhatsApp ist für Patientendaten ungeeignet.** *"Die meisten Messenger-Dienste, wie z.B. WhatsApp sind zur Übermittlung von Patientendaten aus datenschutzrechtlicher Sicht ungeeignet."*

Das Argument der Ende-zu-Ende-Verschlüsselung trägt hier nicht, weil der Transport nie das einzige Problem war. Verschlüsselt wird der Inhalt, nicht die Metadaten, nicht das Gerät, nicht die Sicherung.

- **Metadaten** zeigen, wer wie oft mit einer Zahnarztpraxis kommuniziert. Das ist selbst eine Gesundheitsinformation.
- **Das Endgerät** ist meist ein privates Handy mit eigener Fotogalerie und eigenen App-Berechtigungen.
- **Die Sicherung** schiebt das Röntgenbild in ein Consumer-Backup, in dem die Ende-zu-Ende-Verschlüsselung keine Rolle mehr spielt.
- **Ein Auftragsverarbeitungsvertrag** nach Art. 28 DSGVO existiert mit einem Consumer-Messenger nicht.

## Fax wird generell nicht empfohlen

Das überrascht die Praxen, die Fax für den sicheren Weg halten. Das Merkblatt ist deutlich: der Versand per Fax *"wird von den Landesdatenschutzbehörden als kritisch gesehen"*, und: *"Insbesondere da es sich um sensible personenbezogene Daten handelt, wird davon generell abgeraten."*. Genannt werden Fehlwahl, unverschlüsselte Übertragung, Fernwartungszugriffe auf Faxgeräte und Rufumleitungen beim Empfänger.

| Weg | Für Behandlungsdaten geeignet? | Was entscheidet |
|---|---|---|
| E-Mail, Anhang AES-256, Passwort separat | ✓ Ja | Der im Merkblatt beschriebene Weg |
| E-Mail mit GnuPG/PGP | ✓ Ja, der beste für Stammpartner | Kein Passwortaustausch nötig |
| E-Mail unverschlüsselt | ✗ Nein | Art. 32 DSGVO und § 203 StGB |
| WhatsApp und andere Messenger | ✗ Nein | Ausdrücklich als ungeeignet bezeichnet |
| Fax | ✗ Nein | Von den Landesdatenschutzbehörden generell abgeraten |
| Post im verschlossenen Umschlag | ~ Möglich | Briefgeheimnis, aber ohne Nachweis |
| Persönliche Mitgabe auf CD oder USB-Stick | ✓ Ja | Keine Übertragung, Identität vor Ort geprüft |

## Die unaufwendige Lösung nennt das Merkblatt selbst

Bevor eine Praxis Verschlüsselungssoftware einrichtet, lohnt der Blick auf den Weg, den das Merkblatt als *"völlig DSGVO konform"* bezeichnet: *"dem Patienten seine Überweisung samt Röntgenfoto (z.B. auf CD oder USB-Stick) persönlich in der Praxis mitzugeben."*

Es gibt keine Übertragung, die Identität wird am Empfang geprüft, und der Vorgang lässt sich in der Akte dokumentieren. Für den Patienten, der ohnehin zum Termin kommt, ist das der kürzere Weg.

![Aktivitätsverlauf eines Patienten mit klinischen Warnhinweisen, laufendem Plan und Filtern nach Besuchen, Behandlungen, Finanzen und Kommunikation](/screenshots/patient-timeline.png)

*Der Aktivitätsverlauf einer Akte, mit dem Filter für Kommunikation neben den übrigen Eintragsarten.*

## Der ehrliche Schluss: besser gar nicht versenden

Alles oben ist eine Liste von Vorsichtsmaßnahmen für einen Versand, der auf anderem Weg entfällt. Wird das Dokument über eine authentifizierte Sitzung abgerufen statt als Anhang verschickt, verschwinden genau die drei Problemstellen: kein Passwort über einen zweiten Kanal, keine Datei in einem fremden Backup, und ein Zugriffsprotokoll mit Zeitpunkt.

Das leistet ein [Patientenportal](/de/blog/patientenportal-zahnarztpraxis/), und deshalb ist es die Empfehlung dieses Artikels und nicht die verschlüsselte E-Mail. In Dentalpin wird das Dokument im Portal bereitgestellt und jeder Zugriff mit Urheber und Zeitpunkt protokolliert, sodass der E-Mail-Versand den Fällen bleibt, in denen es keine Alternative gibt. Der Quellcode ist offen, das Protokoll also prüfbar statt Glaubenssache, und der [Preis ist veröffentlicht](/de/preise/).

## Quellen

- Landeszahnärztekammer Baden-Württemberg, Merkblatt "Versand von Patientendaten", 8/2020 (Kammerempfehlung, nach eigenem Hinweis nicht durch die Aufsichtsbehörden geprüft): [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/user_upload/Merkblatt-Versand-Patientendaten.pdf). Abgerufen am 7. Oktober 2026.
- Verordnung (EU) 2016/679 (DSGVO), Art. 9, 28 und 32: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Abgerufen am 7. Oktober 2026.
- § 203 Strafgesetzbuch, Verletzung von Privatgeheimnissen: [gesetze-im-internet.de](https://www.gesetze-im-internet.de/stgb/__203.html). Abgerufen am 7. Oktober 2026.
