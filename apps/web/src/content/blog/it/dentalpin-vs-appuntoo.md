---
title: "Dentalpin e Appuntoo a confronto: due modi diversi di essere gratis"
description: "Confronto tra Appuntoo e Dentalpin: piano free a 30 pazienti, prezzi pubblicati, invio al Sistema TS e cosa manca a ciascuno dei due per uno studio odontoiatrico."
pubDate: 2026-08-09
tags: [confronto, appuntoo, gestionale-dentistico]
---

Appuntoo e Dentalpin sono due dei pochi gestionali che si possono usare senza pagare, e la parola "gratis" nei due casi vuol dire cose diverse: loro hanno un piano free fino a 30 pazienti, noi non abbiamo un limite ma il server te lo gestisci tu. La differenza che conta però non è il prezzo, è che Appuntoo non pubblica un odontogramma e noi sì.

Noi facciamo Dentalpin, quindi non siamo neutrali. Possiamo però essere esatti.

> **Tutto quello che qui si dice di Appuntoo viene da appuntoo.com**, consultato il 9 agosto 2026 e linkato in fondo con la URL. Nessun portale comparatore: si contraddicono tra loro e nessuno di loro è Appuntoo. Appuntoo pubblica i suoi prezzi sul proprio sito, quindi in questo confronto le cifre ci sono davvero, cosa che in questo mercato capita raramente.

## In trenta secondi

**Appuntoo è un gestionale per professionisti sanitari, non un gestionale odontoiatrico.** Il suo sito lo propone a fisioterapisti, psicologi, nutrizionisti, dentisti, osteopati, logopedisti e altri. Fa benissimo le cose che tutti questi mestieri hanno in comune: calendario, prenotazioni online, promemoria WhatsApp, anamnesi, fatturazione e invio al Sistema Tessera Sanitaria. Il prezzo è pubblicato e parte da zero.

**Dentalpin è un gestionale odontoiatrico e basta.** Odontogramma, parodontogramma, piano di cura e preventivi sono il centro del prodotto, non un modulo. È open source, si installa sul tuo server, non ha limiti di pazienti né di operatori. In compenso non manda niente al Sistema TS e l'interfaccia non è ancora in italiano.

**La domanda che decide: la tua parte clinica sta in una scheda o in un odontogramma?** Se registri l'anamnesi e qualche nota, Appuntoo copre tutto il resto meglio di noi e costa poco. Se il lavoro quotidiano è dente per dente, con piani di cura e preventivi, quel pezzo in Appuntoo non c'è.

![Schermata iniziale di Dentalpin con gli appuntamenti di oggi, chi è in studio, i pagamenti scaduti e i pazienti recenti](/screenshots/home.png)

*Il quadro della giornata in Dentalpin, con i dati dello studio dimostrativo che arriva con l'installazione.*

## Cosa è Appuntoo

Appuntoo si presenta come "il gestionale che tiene il tuo studio in ordine" ed è pubblicato da HeavylyTrade SRLS, partita IVA IT04635090618.

Non è pensato per una sola specialità. Il sito elenca fisioterapisti, psicologi, nutrizionisti, dentisti, osteopati, logopedisti, dermatologi, oculisti, podologi, pediatri, medici specialisti, studi e poliambulatori. Questa è una scelta di prodotto, non un difetto, e spiega bene sia i suoi punti di forza sia quello che gli manca per l'odontoiatria.

Le funzionalità pubblicate sono queste: anagrafica pazienti, anamnesi, calendario, certificati e documenti, collaboratori, fatturazione, notifiche email, prenotazioni online, promemoria WhatsApp e statistiche.

Sull'anamnesi il sito è preciso: "La storia clinica di ogni paziente, in un posto solo", con "Campi a etichette per patologie, traumi e farmaci" e "Testo libero per l'anamnesi prossima". I moduli sono personalizzabili con sei tipi di campo, ed esistono modelli già pronti citati per fisioterapisti, psicologi, nutrizionisti e logopedisti.

**Quello che non compare sulle pagine consultate**: odontogramma, parodontogramma, preventivi e piano di cura. Non sono elencati nell'indice delle funzionalità né descritti nella pagina dell'anamnesi, dove i modelli citati sono di altre professioni.

## Quanto costa Appuntoo

Lo pubblica, e questo va detto prima di qualsiasi confronto. Tre piani, prezzi al mese e IVA esclusa:

| Piano | Prezzo | Account | Pazienti | Promemoria WhatsApp |
|---|---|---|---|---|
| Free | ✓ 0 € | 1 professionista | ~ Fino a 30 | ✗ Non inclusi |
| Professionista | 34,99 € + IVA | 1 professionista | ✓ Illimitati | ✓ 100 al mese |
| Studio | 79,99 € + IVA | ✓ Fino a 30 collaboratori | ✓ Illimitati | ✓ 300 al mese |

Il piano Free comprende le prenotazioni online e le notifiche email illimitate. L'invio al Sistema Tessera Sanitaria e la fatturazione compaiono dal piano Professionista. Il piano Studio aggiunge la gestione stanze e il multi-sede.

> **Trenta pazienti è un limite vero, non un dettaglio.** Uno studio odontoiatrico avviato li supera nel primo mese, quindi per quasi tutti i lettori il confronto reale non è con il piano Free ma con i 34,99 € o i 79,99 € al mese. Vale la pena saperlo prima di provarlo.

## Cosa è Dentalpin

Dentalpin è un gestionale odontoiatrico pubblicato sotto Business Source License 1.1: gratuito per qualunque studio, leggibile, forkabile, e quattro anni dopo ogni rilascio la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, sul cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, anagrafica pazienti, odontogramma, parodontogramma, cartella clinica, piani di cura, preventivi con firma, fatturazione, pagamenti, richiami e report. Non ci sono piani né limiti: né di pazienti, né di operatori, né di riuniti. Tutto quello che fa l'interfaccia lo fa anche l'API REST documentata con OpenAPI.

Quello che in Italia oggi **non** c'è, ed è meglio dirlo qui che alla terza schermata: nessun invio delle spese al Sistema Tessera Sanitaria, nessuna emissione di fattura elettronica verso lo SDI, nessuna contabilità e nessun promemoria WhatsApp compreso nel prodotto. L'interfaccia dell'applicazione esiste in inglese e spagnolo, ma non in italiano.

![Cartella del paziente in Dentalpin con l'odontogramma, gli alert clinici, il piano attivo e il prossimo appuntamento](/screenshots/dental-chart.png)

*L'odontogramma registra lo stato dente per dente e collega ogni trattamento al piano di cura e al preventivo.*

## Fianco a fianco

Solo righe verificabili. Dove Appuntoo non pubblica un dato, la riga lo dice invece di ipotizzarlo.

| | Appuntoo | Dentalpin |
|---|---|---|
| Modello | SaaS, licenza commerciale | Open source (BSL 1.1 → Apache 2.0 dopo 4 anni) |
| Prezzo pubblicato | ✓ Sì, tre piani sul sito | ✓ 0 €, tutto incluso |
| Costo per uno studio con più operatori | ~ 79,99 € al mese + IVA | ✓ 0 € |
| Limite di pazienti nel piano gratuito | ✗ 30 | ✓ Nessuno |
| Specializzazione | ~ Multi professione sanitaria | ✓ Solo odontoiatria |
| Odontogramma | ✗ Non pubblicato fra le funzionalità | ✓ Sì |
| Parodontogramma | ✗ Non pubblicato fra le funzionalità | ✓ Sì |
| Preventivi e piano di cura | ✗ Non pubblicati fra le funzionalità | ✓ Sì, con firma |
| Anamnesi | ✓ Moduli personalizzabili, sei tipi di campo | ✓ Cartella clinica strutturata |
| Invio al Sistema Tessera Sanitaria | ✓ Dal piano Professionista | ✗ Non presente |
| Fattura elettronica allo SDI | ~ Non citata sulle pagine consultate | ✗ Non presente |
| Imposta di bollo automatica | ✓ Sulle fatture esenti sopra soglia | ✗ Non presente |
| Promemoria WhatsApp | ✓ 100 o 300 al mese secondo il piano | ~ Come canale di notifica, da configurare |
| Prenotazioni online per il paziente | ✓ Senza registrazione | ✗ Non presente |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese e spagnolo |
| Manutenzione del server | ✓ Nessuna, è un servizio | ✗ A carico tuo |
| Dove stanno i dati | ~ Sui loro server | ✓ Sul tuo server, sempre |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |

Le righe con "non citata" e "non documentata" dicono esattamente questo e niente di più: non lo abbiamo trovato sulle pagine pubbliche che abbiamo letto. Se stai valutando Appuntoo sul serio sono due domande da fare a loro, non due conclusioni da trarre da qui.

## Come funziona la fatturazione in Appuntoo

Questa parte merita il dettaglio, perché è dove loro sono avanti a noi e perché il loro sito è insolitamente esplicito anche sui limiti.

L'invio al Sistema TS parte dalla riga della fattura: "scegli tipo spesa e natura IVA, già precompilati con i tuoi default, e trasmetti". Il protocollo della ricevuta viene registrato e resta lo storico delle operazioni. Numero e anno della fattura sono proposti in automatico, e sulle fatture esenti sopra la soglia di legge viene aggiunta l'imposta di bollo.

Due limiti, dichiarati da loro:

- **Le fatture di pazienti con identificativo fiscale estero non sono inviabili al Sistema TS.** Se hai molti pazienti stranieri, è una domanda da fare prima di firmare.
- **Una fattura già trasmessa al TS non è modificabile né eliminabile** finché non viene cancellata dal Sistema TS. È il comportamento corretto, ma cambia il modo di lavorare in segreteria.

> **Sul Sistema TS, oggi, Appuntoo fa una cosa che Dentalpin non fa.** Non è una sfumatura: per uno studio in Italia quell'invio è un obbligo che torna ogni anno, e se vuoi che se ne occupi il gestionale, noi non siamo la risposta.

## Scegli Appuntoo se

- **Vuoi che sia il gestionale a mandare le spese al Sistema TS.** Loro lo fanno dal piano Professionista, noi no. È la ragione principale per cui questo confronto esiste.
- **Ti serve l'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Non vuoi un server da gestire.** Appuntoo è un servizio: non c'è niente da installare, aggiornare o salvare. Per uno studio senza nessuno che si occupi di informatica, questo da solo può chiudere la discussione.
- **Vuoi che i pazienti prenotino da soli**, senza registrarsi, e ricevano un promemoria WhatsApp. Sono funzioni comprese nei loro piani e da noi non ci sono in quella forma.
- **La tua parte clinica è un'anamnesi e qualche documento.** Se lavori anche in altre discipline, o se lo studio ospita più professioni, il loro modello a moduli personalizzabili è pensato esattamente per quello.
- **Vuoi sapere quanto spendi al mese senza chiamare nessuno.** Il prezzo è sul sito, con l'IVA dichiarata a parte.

Se tre di questi sei punti ti riguardano, la risposta onesta è Appuntoo, e a 34,99 € al mese è una risposta ragionevole.

## Scegli Dentalpin se

- **Il tuo lavoro si registra dente per dente.** Odontogramma, parodontogramma, piano di cura e preventivi sono il centro del prodotto. Sulle pagine pubbliche di Appuntoo non sono elencati, e non è un caso: loro servono dodici professioni, noi una.
- **Hai più di 30 pazienti e non vuoi pagare un canone.** Il nostro limite non esiste, su nessun piano, perché non ci sono piani. Il [prezzo](/it/prezzi/) sta su una pagina sola.
- **Sei uno studio con più operatori.** Il confronto lì non è 0 € contro 0 €, è 0 € contro 79,99 € al mese più IVA.
- **Vuoi i dati sul tuo server.** Il database è PostgreSQL, sta dove lo metti tu, e il dump lo fai quando vuoi senza chiedere il permesso a nessuno.
- **Vuoi poter leggere il codice.** È su GitHub per intero, il che significa che un tuo consulente può verificare come vengono trattati i dati dei pazienti invece di fidarsi di una scheda prodotto.
- **Hai qualcuno che sa gestire un server**, in studio o a contratto. Questo è il punto che decide davvero, e se la risposta è no il resto dell'elenco non conta.

![Elenco fatture di Dentalpin con gli stati emessa, pagata, parziale, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione lavora con serie configurabili e pagamenti parziali. L'invio al Sistema TS non è coperto.*

## Come funziona davvero una migrazione

Il passaggio da un gestionale all'altro è il momento in cui si perdono i dati, non l'installazione. L'ordine conta:

1. **Chiedi l'esportazione al fornitore attuale, per iscritto e prima di disdire.** Chiedi il formato e chiedi un campione, non una promessa. Sulle pagine pubbliche di Appuntoo non abbiamo trovato una procedura di esportazione documentata, quindi è una domanda da fare a loro.
2. **Verifica cosa contiene davvero l'estrazione.** Anagrafiche e appuntamenti escono quasi sempre. Anamnesi, allegati e documenti sono la parte che si perde.
3. **Installa Dentalpin in parallelo**, su una macchina di prova, e caricaci l'estrazione. Nessuno spegne il vecchio programma prima di aver visto il nuovo con i propri pazienti dentro.
4. **Metti in conto che l'odontogramma va rifatto.** Se arrivi da un gestionale che non ne aveva uno, non c'è niente da importare: lo stato dente per dente si popola dalla prima visita in poi.
5. **Controlla un campione a mano.** Venti cartelle scelte a caso, confrontate schermata contro schermata, dicono più di qualsiasi report di importazione.
6. **Tieni il vecchio sistema attivo per un anno**, o conserva l'esportazione. Costa poco e copre il caso in cui manchi qualcosa che nessuno aveva pensato di controllare.

> **Non disdire il contratto prima di avere l'esportazione in mano.** È l'errore che rende una migrazione impossibile invece che noiosa, e capita con qualunque fornitore, non solo con questo.

## Fonti

Tutte le pagine sono di Appuntoo e sono state consultate il 9 agosto 2026.

- Appuntoo, [home](https://www.appuntoo.com/): posizionamento, professioni servite, funzionalità principali, ragione sociale HeavylyTrade SRLS e partita IVA IT04635090618 nel piè di pagina.
- Appuntoo, [prezzi](https://www.appuntoo.com/prezzi/): piano Free a 0 € con 1 account professionista e fino a 30 pazienti, Professionista a 34,99 € al mese più IVA con pazienti illimitati e 100 promemoria WhatsApp al mese, Studio a 79,99 € al mese più IVA con fino a 30 account collaboratori, gestione stanze, multi-sede e 300 promemoria WhatsApp al mese.
- Appuntoo, [funzionalità](https://www.appuntoo.com/funzionalita/): anagrafica pazienti, anamnesi, calendario, certificati e documenti, collaboratori, fatturazione, notifiche email, prenotazioni online, promemoria WhatsApp e statistiche.
- Appuntoo, [fatturazione](https://www.appuntoo.com/funzionalita/fatturazione/): invio al Sistema Tessera Sanitaria con tipo spesa e natura IVA precompilati, registrazione del protocollo della ricevuta, numerazione automatica, imposta di bollo sulle fatture esenti sopra soglia, impossibilità di inviare al Sistema TS le fatture di pazienti con identificativo fiscale estero e blocco delle fatture già trasmesse.
- Appuntoo, [anamnesi](https://www.appuntoo.com/funzionalita/anamnesi/): moduli personalizzabili con sei tipi di campo, campi a etichette per patologie, traumi e farmaci, testo libero per l'anamnesi prossima, esportazione in PDF.

Quello che Appuntoo non pubblica non compare in questa pagina. In particolare, sulle pagine consultate non sono elencati odontogramma, parodontogramma, preventivi e piano di cura, non è documentata un'API pubblica e non è descritta una procedura di esportazione dei dati.
