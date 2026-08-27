---
title: "Permessi di accesso nello studio odontoiatrico: chi può vedere cosa"
description: "Come dividere i permessi nello studio odontoiatrico: cosa serve alla segreteria, cosa al personale clinico e perché l'account condiviso rovina tutto."
pubDate: 2026-08-27
translationKey: permisos-acceso-personal-clinica
tags: [permessi, sicurezza, gdpr, cartella-clinica, gestione-studio]
---

Ogni persona dello studio dovrebbe vedere solo ciò che il suo lavoro richiede oggi: la segreteria lavora con agenda, recapiti e incassi, il personale clinico apre la cartella clinica e l'odontogramma, mentre i report di tutto lo studio e la gestione degli account restano al titolare. Per arrivarci servono tre cose: un account nominativo per persona, permessi assegnati per ruolo e non uno a uno, e un elenco scritto di chi ha cosa.

Questo non è un parere legale. Tutte le fonti ufficiali sono in fondo, consultate il 27 agosto 2026.

## L'accesso selettivo è previsto dalla norma, non è una buona intenzione

Il Codice privacy (d.lgs. 196/2003) dedica l'articolo 2-septies ai dati genetici, biometrici e relativi alla salute. Tra le misure di garanzia che possono essere prescritte l'articolo elenca tecniche di cifratura, pseudonimizzazione, misure di minimizzazione, formazione degli incaricati e "procedure per accessi selettivi ai dati".

Accessi selettivi vuol dire esattamente questo: non tutti vedono tutto, e chi vede una cartella lo fa perché la sua mansione lo richiede.

Il GDPR arriva allo stesso punto da un'altra strada. Gli articoli 29 e 32, paragrafo 4, impongono che chiunque agisca sotto l'autorità del titolare e abbia accesso a dati personali li tratti soltanto su sua istruzione, e i dati sanitari sono categoria particolare ai sensi dell'articolo 9.

> **La domanda che risolve quasi tutti i casi dubbi è "gli serve per lavorare oggi?".** Se la risposta è no, quell'accesso è di troppo, per quanta anzianità e fiducia abbia la persona.

## Quattro ruoli coprono quasi ogni studio

Non serve un organigramma complicato. Uno studio da uno a cinque riuniti funziona con quattro ruoli più qualche eccezione nominativa.

| | Segreteria | Igienista | Odontoiatra | Titolare |
|---|---|---|---|---|
| Agenda dello studio | ✓ Completa | ✓ Completa | ✓ Completa | ✓ Completa |
| Recapiti e consensi | ✓ Modifica | ~ Consultazione | ✓ Modifica | ✓ Modifica |
| Cartella clinica e odontogramma | ✗ Nessun accesso | ✓ Suoi pazienti | ✓ Completo | ~ Solo se cura |
| Radiografie e immagini | ✗ Nessun accesso | ✓ Suoi pazienti | ✓ Completo | ~ Solo se cura |
| Preventivi | ~ Vedere e incassare | ✗ Nessun accesso | ✓ Creare e firmare | ✓ Completo |
| Fatture e cassa del giorno | ✓ Sì | ✗ Nessun accesso | ~ Le proprie | ✓ Completo |
| Report di tutto lo studio | ✗ Nessun accesso | ✗ Nessun accesso | ~ La propria produzione | ✓ Completo |
| Account e permessi | ✗ Nessun accesso | ✗ Nessun accesso | ✗ Nessun accesso | ✓ Completo |

Due correzioni servono quasi sempre. La segreteria deve sapere per cosa viene il paziente, altrimenti non organizza il riunito, e per questo basta una sigla di prestazione sull'appuntamento senza aprire la cartella.

Le allerte mediche sono l'eccezione che conferma la regola. Un'allergia a un anestetico deve vederla subito chi sta per intervenire, senza cercarla, quindi sta in testa alla scheda e non tre clic più in basso.

![Agenda dello studio in vista giornaliera con gli appuntamenti divisi per riunito](/screenshots/schedule-day.png)

*È la schermata su cui la segreteria lavora per tutta la giornata.*

## L'account condiviso è il vero problema

La maggior parte degli studi non ha permessi mal distribuiti. Ha un account chiamato "segreteria" che conoscono in quattro, e uno chiamato "studio" a cui tutti tornano quando la giornata è piena.

Con un account condiviso cade tutto il resto. Il registro degli accessi non identifica più nessuno, quando una persona se ne va bisogna cambiare la password a tutte, e davanti a un reclamo non potete dimostrare chi ha aperto la cartella né quando.

> **Un account per persona non è burocrazia, è ciò che rende verificabile tutto il resto.** Creare cinque account richiede dieci minuti ed evita la conversazione in cui non riuscite a spiegare chi ha consultato la scheda di un paziente che è anche il vicino di casa di una collaboratrice.

Il NCSC britannico lo formula come regola per ingressi, cambi di mansione e uscite: la gestione degli account deve coprire tutti e tre, in modo che l'accesso "venga revocato quando non serve più" o modificato per chi cambia ruolo.

## Il registro degli accessi trasforma un permesso in prova

Un permesso dice chi può aprire una cartella. Il registro dice chi l'ha aperta. Solo il secondo serve quando c'è da rispondere a un reclamo o da valutare una violazione dei dati.

Vale la pena registrare poche cose, sempre le stesse:

- **Chi**, con account nominativo, mai generico.
- **Quando**, con data e ora.
- **Quale paziente**, non solo quale schermata.
- **Cosa ha fatto**, distinguendo la consultazione dalla modifica.
- **Da dove**, se l'accesso da fuori è consentito.

Una regola sfugge quasi sempre: il registro deve essere difficile da modificare per chi ha i diritti di amministrazione dello studio. Se il titolare può riscriverlo, davanti a un terzo non prova più nulla.

![Scheda paziente nella sezione attività, con allerte cliniche, piano in corso e una cronologia filtrabile](/screenshots/patient-timeline.png)

*L'attività di un paziente raccolta in un'unica cronologia, filtrabile per visite, trattamenti e comunicazioni.*

## Ingressi e uscite, in sette passaggi

Il rischio raramente sta nell'accesso che concedete. Sta in quello che nessuno toglie.

1. **Create l'account a nome della persona**, con il suo indirizzo reale, prima del primo giorno.
2. **Assegnate un ruolo, non permessi sciolti.** I permessi dati caso per caso si accumulano e nessuno ricorda più perché.
3. **Fate firmare l'impegno alla riservatezza** e conservatelo con il contratto.
4. **Attivate un secondo fattore** se il gestionale è raggiungibile da fuori studio.
5. **Rifate il ruolo quando qualcuno cambia mansione**, togliendo il precedente. Una promozione aggiunge accessi e quasi mai ne toglie.
6. **Disattivate l'account il giorno stesso dell'uscita**, prima che la persona vada via, non la settimana dopo.
7. **Disattivate, non cancellate.** Un account cancellato lascia il registro senza titolare e la tracciabilità sparisce.

## I casi che non stanno nell'organigramma

Metà studio sta fuori da questi quattro ruoli, e sono esattamente gli accessi che nessuno rivede.

| Chi | Cosa gli serve davvero | Cosa fare prima |
|---|---|---|
| Sostituto per due settimane | Agenda e cartelle dei pazienti che cura | Account proprio con data di scadenza, mai quello del titolare |
| Studente in tirocinio | Quello che vede il tutor, in sua presenza | Account proprio, nessun accesso alle fatture, impegno firmato |
| Commercialista | Importi, date e numerazione delle fatture | Nomina a responsabile del trattamento e accesso solo alle fatture |
| Tecnico informatico esterno | Server e backup, non le cartelle | Nomina a responsabile, account nominativo, accesso registrato |
| Laboratorio odontotecnico | Il lavoro, il paziente e le scadenze | Inviare il caso, non dare accesso al gestionale |
| Ex socio | Nulla, oltre a quanto previsto dall'accordo di uscita | Disattivare l'account e annotare la data |

Commercialista e tecnico informatico sono responsabili del trattamento, e il GDPR richiede un contratto con ciascuno. È il documento che manca più spesso in uno studio per il resto in ordine.

## Rivedete una volta all'anno, in mezz'ora

L'autorità francese CNIL raccomanda "una revisione periodica, almeno annuale, delle abilitazioni" per individuare account inutilizzati e riallineare i diritti alle mansioni effettive. È la misura meno costosa di questa pagina.

La revisione sta in quattro domande: chi ha un account e lavora ancora qui, chi ha cambiato mansione tenendosi i vecchi permessi, quali account non vengono usati da tre mesi, e quali fornitori esterni entrano ancora.

> **Scrivete il risultato su un foglio con la data.** È il foglio che mostrate se vi chiedono come controllate gli accessi, ed è quello che l'anno prossimo vi ricorderà cosa avevate deciso.

## Cosa può fare il gestionale e cosa no

Nessun sistema impedisce di leggere lo schermo accanto, e nessuno sostituisce la conversazione sul fatto che la cartella di un paziente conosciuto non si apre per curiosità. Quello che può fare è rendere la divisione facile da mantenere e lasciarne traccia.

In Dentalpin i ruoli sono predefiniti, ogni apertura di cartella viene registrata con account, data e paziente, e gli account si disattivano senza cancellare quello che hanno fatto. Le condizioni della versione ospitata e di quella su server proprio sono in [prezzi](/it/prezzi/).

## Fonti

- D.lgs. 196/2003 (Codice in materia di protezione dei dati personali), articolo 2-septies. [Normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196). Consultato il 27 agosto 2026.
- Regolamento (UE) 2016/679 (GDPR), articoli 9, 29 e 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 27 agosto 2026.
- CNIL, *Sécurité: Gérer les habilitations* (aggiornato il 13 marzo 2024). [cnil.fr](https://www.cnil.fr/fr/securite-gerer-les-habilitations). Consultato il 27 agosto 2026.
- NCSC, *10 Steps to Cyber Security: Identity and access management*. [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management). Consultato il 27 agosto 2026.

Ogni studio divide i compiti a modo suo, e la legittimità di un accesso specifico dipende dal caso. Verificatela con il vostro consulente o con il DPO.
