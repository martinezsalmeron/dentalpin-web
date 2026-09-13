---
title: "Il giorno in cui salta la linea: far lavorare lo studio dentistico senza internet"
description: "Cosa smette di funzionare nello studio dentistico quando salta la linea, cosa continua, cosa preparare prima e in che ordine sistemare la giornata quando torna."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [continuita, infrastruttura, agenda, gestione-studio]
---

Se il gestionale gira nel browser contro il server di qualcun altro, una caduta di linea ferma tutto lo studio, agenda, cartella clinica e odontogramma compresi. Se gira su un server dentro lo studio, perdi i promemoria, la prenotazione online, gli invii telematici e con ogni probabilità il POS, ma l'agenda del giorno e la cartella restano aperte.

Sapere quale delle due situazioni è la tua decide tutto il resto, ed è una verifica da fare oggi e non il martedì in cui capita. Qui sotto c'è cosa cade esattamente, cosa conviene avere pronto, cosa annotare mentre dura e in che ordine rimettere tutto a posto dopo.

## Dove gira il gestionale decide cosa perdi

Non esiste una risposta unica a "si può lavorare senza internet", perché dietro la parola gestionale ci sono tre architetture diverse e ognuna si comporta a modo suo.

| Cosa devi fare | Browser contro server remoto | Server dentro lo studio | Programma installato su ogni postazione |
|---|---|---|---|
| Aprire l'agenda del giorno | ✗ No | ✓ Sì | ✓ Sì |
| Consultare cartella e odontogramma | ✗ No | ✓ Sì | ✓ Sì |
| Scrivere note, preventivi e fatture | ✗ No | ✓ Sì | ✓ Sì |
| Vedere le radiografie già archiviate | ✗ No | ✓ Sì | ~ Dipende da dove stanno le immagini |
| Promemoria, prenotazione online, portale paziente | ✗ No | ✗ No | ✗ No |
| Backup fuori dallo studio | ✗ No | ~ Riprende al ritorno della linea | ~ Riprende al ritorno della linea |

La riga che sorprende di più è quella delle radiografie. Un sensore può essere collegato alla rete locale e scrivere in una cartella dello studio, oppure caricare sul servizio del produttore, e dalla reception le due cose sembrano identiche fino al giorno in cui la linea non c'è.

![Schema dell'installazione: browser, Caddy sulla porta 443, frontend Nuxt, API e PostgreSQL con i suoi volumi di dati](/diagrams/install-stack.svg)

*Il browser, Caddy, il frontend, l'API e il database. Lo schema non dice dove si trova fisicamente quella macchina, ed è esattamente la domanda a cui rispondere prima di un guasto.*

## Cosa cade, nell'ordine in cui te ne accorgi

- **La prenotazione online si ferma in silenzio.** Nessuno ti avvisa: semplicemente in quelle ore non entra nessun appuntamento, e non c'è modo di sapere quanti se ne sono persi.
- **I promemoria non partono.** SMS, WhatsApp e email escono da fuori dello studio, quindi il giro di domani non parte nemmeno se il gestionale locale funziona.
- **Il POS dipende da come è collegato.** Quelli che passano dalla rete dello studio ammutoliscono, quelli con SIM propria di solito continuano a incassare. È una domanda di una riga al tuo fornitore di incassi, e si fa prima.
- **Tutto ciò che è un invio verso un sistema esterno resta in coda.** La fatturazione elettronica allo SDI e l'invio delle spese al Sistema Tessera Sanitaria rientrano qui.
- **Il backup fuori sede quella notte non si fa** se alla chiusura la linea è ancora giù. Una notte non è grave. Due settimane senza che nessuno legga gli avvisi di errore lo sono.
- **Anche la posta elettronica e il telefono VoIP sono internet.** Molti studi scoprono proprio in quel momento che il loro unico numero passava dallo stesso router.

## Lo SLA del fornitore non è lo SLA della tua linea

Un 99,9 % di disponibilità dà l'impressione che non succeda mai niente. Sono 43 minuti al mese e 8 ore e 46 minuti all'anno. Il 99,5 % che pure si trova pubblicato sono circa tre ore e mezza al mese e quasi 44 ore all'anno.

Quelle cifre comunque coprono solo il server del fornitore. La tua connessione è un contratto a parte, e una linea business ordinaria quasi mai porta con sé un impegno di disponibilità.

> **La maggior parte dei guasti di uno studio piccolo comincia sul marciapiede, non nel data center.** Uno scavo, un armadio della fibra aperto o un router di sette anni non compaiono nello SLA di nessuno, e sono la causa abituale di una mattinata senza linea.

## Il kit da guasto

Niente di tutto questo è costoso e tutto deve esistere prima, perché il momento per cercarlo non è quello in cui alla reception ci sono quattro persone in attesa.

1. **Stampa l'agenda del giorno dopo prima di chiudere.** Un foglio: nome, ora, riunito e prestazione prevista. È il pezzo che trasforma un guasto in una seccatura invece che in una giornata persa.
2. **Tieni pronta una seconda via dati già provata**, un router con SIM o l'hotspot di un telefono. Provata vuol dire che qualcuno l'ha già accesa, non che esiste in un cassetto.
3. **Metti un gruppo di continuità sul server e anche sul router**, perché un server vivo dietro a un router morto non serve a niente.
4. **Tieni consensi e schede di decorso già stampati**, i cinque o sei che usi davvero.
5. **Conserva la lista dei telefoni del giorno fuori dal gestionale**, è quella che ti permette di avvisare chi arriva alle 17.
6. **Metti per iscritto chi fa cosa**: chi chiama l'operatore, chi avvisa i pazienti, chi si occupa di annotare quello che succede.

![Agenda in vista giornaliera con gli appuntamenti distribuiti sulle fasce orarie](/screenshots/schedule-day.png)

*Questa è la schermata che deve poter uscire su carta la sera prima, non la mattina in cui serve.*

## Cosa annotare mentre dura

Lavorare senza connessione non è il problema. Il problema è tornare e non sapere cosa è successo tra le nove e l'una.

- **Chi è venuto e chi no**, con l'ora reale, così le mancate presentazioni finiscono registrate dove devono.
- **Cosa è stato fatto a ogni paziente**, col dettaglio che metteresti in cartella, non un riassunto di tre parole.
- **Lotti e codici di impianti e materiali** che di solito il gestionale compila da solo. È la cosa che si perde più spesso e la più difficile da ricostruire dopo.
- **Ogni incasso**, importo, forma di pagamento e prestazione a cui si riferisce.
- **I dati completi dei pazienti nuovi**, perché un'anagrafica scritta a memoria tre ore dopo è un'anagrafica con errori dentro.
- **Chi ha telefonato e per cosa**, disdette comprese, che sono quelle che scombinano l'agenda del giorno dopo.

> **Quello che non si annota durante il guasto non si recupera dopo.** Il gestionale torna con tutto quello che aveva alle nove, e quello che è successo nel frattempo esiste solo sulla carta che qualcuno ha compilato.

## Rimettere a posto la giornata quando la linea torna

L'ordine conta, perché alcune cose dipendono dalle altre e perché la tentazione è cominciare da quelle facili.

1. **Controlla prima di tutto che il backup della notte sia andato**, e lanciane uno adesso se non è così.
2. **Crea per prime le anagrafiche dei pazienti nuovi**, perché tutto il resto ci si appende sopra.
3. **Riporta le note cliniche dalla carta**, paziente per paziente, lo stesso giorno. Domani nessuno si ricorda più cosa voleva dire un'abbreviazione.
4. **Registra gli incassi** e riconciliali con il POS e con la cassa.
5. **Sistema l'agenda**: assenze, disdette prese al telefono e tutto quello che è stato spostato.
6. **Guarda quali promemoria non sono partiti** e decidi quali ha ancora senso mandare. Un promemoria per un appuntamento già passato fa più danno che non mandarlo.
7. **Tieni la carta finché non hai verificato che sia tutto inserito**, poi distruggila come il resto della documentazione clinica.

## Cosa il GDPR si aspetta che tu abbia previsto

La disponibilità non è un accessorio della sicurezza, è una delle tre proprietà che il regolamento nomina. L'articolo 32, paragrafo 1, elenca fra le misure tecniche e organizzative adeguate:

> **b) la capacità di assicurare su base permanente la riservatezza, l'integrità, la disponibilità e la resilienza dei sistemi e dei servizi di trattamento; c) la capacità di ripristinare tempestivamente la disponibilità e l'accesso dei dati personali in caso di incidente fisico o tecnico.**

Una caduta di linea di due ore non è di per sé una violazione da notificare. Quello che rientra davvero in quell'articolo è non riuscire ad accedere alla cartella di un paziente già seduto al riunito, o perdere il lavoro di una mattina perché nessuno aveva pensato alla carta.

Questo non è un parere legale. Per il tuo caso concreto, il responsabile della protezione dei dati o il tuo consulente sono le persone a cui chiedere.

## Cinque domande al fornitore prima di averne bisogno

- **Quali parti esatte del prodotto continuano a funzionare se lo studio perde la linea?** Un elenco è una buona risposta. "È tutto in cloud, non si preoccupi" non lo è.
- **Dove si trova fisicamente il database** e cosa servirebbe per arrivarci senza di voi.
- **Pubblicate uno SLA, con che percentuale e cosa risarcisce** se non viene rispettato.
- **Che fine fanno i promemoria non partiti?** Vengono ritentati, si perdono, oppure si accumulano e partono tutti insieme.
- **Posso esportarmi da solo l'agenda di domani in PDF o CSV**, senza aprire un ticket.

Le risposte a queste cinque dicono di un prodotto più di metà della sua pagina delle funzionalità.

Dentalpin si può installare su una macchina dello studio, così una caduta di linea diventa un guasto delle comunicazioni e non della cartella clinica: agenda, odontogramma e fatture restano aperti sulla rete locale mentre fuori non è raggiungibile nulla. Le condizioni della versione ospitata e di quella installata da te sono su [prezzi](/it/prezzi/), e se vuoi vedere com'è il montaggio prima di decidere, [installarlo richiede tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articolo 32, paragrafo 1, lettere b) e c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 13 settembre 2026.
