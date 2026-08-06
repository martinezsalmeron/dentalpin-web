---
title: "Dentalpin e OrisDent Q a confronto: cosa copre ciascuno dei due nello studio italiano"
description: "Confronto tra OrisDent Q di OrisLine e Dentalpin: fatturazione elettronica, invio al Sistema TS, prezzi pubblicati, proprietà dei dati e del codice. Con quello che noi non facciamo."
pubDate: 2026-08-06
tags: [confronto, orisdent, gestionale-dentistico]
---

Questo confronto serve a uno studio italiano che sta valutando se esista qualcosa fuori dai gestionali odontoiatrici storici, e all'informatico che deve dare un parere per conto dello studio. La risposta breve sta nelle prime righe: se ti serve che sia il gestionale a emettere la fattura elettronica e a mandare le spese al Sistema Tessera Sanitaria, OrisDent Q lo fa e Dentalpin no.

> **Tutto quello che qui si dice di OrisDent viene da orisline.com**, consultato il 6 agosto 2026, con le URL in fondo. Quello che OrisLine non pubblica non compare qui. I siti comparatori li abbiamo lasciati fuori di proposito: si contraddicono tra loro e nessuno di loro è OrisLine.

## In trenta secondi

**OrisDent Q è un gestionale italiano maturo, al centro di un ecosistema ampio.** La sua pagina prodotto elenca cartella clinica odontoiatrica, ortodontica, parodontale e gnatologica, il percorso dal preventivo alla fatturazione, fatture elettroniche attive e passive, piani di pagamento con rateizzazione, scadenziario e Business Monitor. Intorno ci sono una decina di prodotti separati, dalla cefalometria al gestionale per il laboratorio.

**Dentalpin è open source e resta tuo.** Il codice sta su GitHub, l'installazione va sul tuo server, il nucleo non costa niente e tutto quello che fa l'interfaccia lo fa anche l'API pubblica. Sul lato clinico c'è tutto: odontogramma, parodontogramma, piano di cura, preventivi, fatture, report.

**La domanda che decide è sempre la stessa in Italia: gli adempimenti li fa il gestionale o li fai fuori?** Se vuoi che SDI e Sistema TS partano dal software, oggi la risposta è OrisDent e non noi. Se quella parte la gestisci già con il commercialista e quello che cerchi è possesso del codice e dei dati senza canoni, vale la pena leggere il resto.

## Cosa è OrisDent Q

OrisDent Q è il gestionale per studi odontoiatrici della linea OrisDent. La pagina prodotto dice che **"OrisDent è disponibile in diverse versioni e in modalità desktop e in cloud"**, e la versione cloud ha un nome suo, OrisDent Air, presentata come **"il gestionale Odontoiatrico in Cloud completo"** con **"Canone fisso, che include assistenza e aggiornamenti"**, senza installazione e utilizzabile da PC, tablet e smartphone.

Sul lato adempimenti la loro pagina dedicata è esplicita, ed è la parte che pesa di più in questo confronto:

- **Fatture attive.** "Le fatture elettroniche vengono generate e inviate al Sistema di Interscambio senza bisogno di sistemi aggiuntivi."
- **Spese sanitarie.** "Per le spese sanitarie, l'invio al sistema TS è automatico."
- **Fatture passive.** Con il servizio SDI Link "le fatture dai fornitori vengono ricevute e sincronizzate automaticamente", e dall'XML del fornitore si caricano i prodotti a magazzino.

Il resto del catalogo è venduto come prodotti distinti intorno al gestionale: OrisPaperLess per la dematerializzazione e la Firma Elettronica Avanzata, OrisCommunication per SMS, email e WhatsApp, Online Booking integrato con "Prenota con Google", dentIA sui piani di cura, OrisCeph Q per i tracciati cefalometrici, OrisLab Q e MyLab per il laboratorio, MyEduco per la fidelizzazione e OrisSafe per la sicurezza informatica.

C'è anche Maia, che il loro sito descrive come il **"primo servizio di intelligenza artificiale generativa dedicato agli odontoiatri"** e dichiara **"integrato senza costi aggiuntivi per tutti gli utenti"**. Sulle pagine che abbiamo letto Maia risponde a domande sul software e sui principali adempimenti normativi; non abbiamo trovato indicazioni che scriva dentro il gestionale.

> **Il proprietario del marchio è cambiato, e lo dice il loro stesso sito.** Il piè di pagina di orisline.com riporta "Henry Schein ONE Italia srl, Via Giovanni Amendola, 7 20063, Cernusco sul Naviglio (MI), P. IVA: IT11654690152". Vuol dire che OrisDent oggi appartiene allo stesso gruppo di Dentrix, Dentally e Software of Excellence. Non è un difetto, ma se stai valutando l'indipendenza del fornitore è un dato che vuoi sapere prima e non dopo.

![Cartella del paziente con odontogramma, allerte cliniche, piano di cura attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella del paziente in Dentalpin. L'interfaccia dello studio dimostrativo è in spagnolo, cosa che più sotto conta.*

**Sui prezzi non c'è niente da riportare.** Nelle pagine pubbliche di orisline.com consultate il 6 agosto 2026 non compare alcun listino, né per OrisDent Q né per OrisDent Air né per i servizi intorno. È il comportamento normale di questo mercato, e la conseguenza pratica è che il costo lo scopri solo dopo un preventivo.

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, sul cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. Si aggiungono parodontogramma, report, un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è, ed è meglio saperlo subito: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, nessun tracciato cefalometrico, e l'interfaccia esiste in inglese, spagnolo, francese e portoghese ma non in italiano.

![Un preventivo con i trattamenti, i totali, la validità e il piano di cura collegato](/screenshots/budgets.png)

*Un preventivo in Dentalpin: righe di trattamento, totali, data di validità e il piano di cura a cui è collegato.*

## Fianco a fianco

| | OrisDent Q | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale | Open source (BSL 1.1) |
| Distribuzione | Desktop e cloud (OrisDent Air) | Sul tuo server, o sul cloud che scegli |
| Prezzo pubblicato | ✗ Nessun listino sulle pagine consultate | ✓ 0 €, tutto incluso |
| Fatturazione elettronica (SDI) | ✓ Generazione e invio dal software | ✗ Non presente |
| Invio spese al Sistema TS | ✓ Dichiarato automatico | ✗ Non presente |
| Fatture passive dei fornitori | ✓ Servizio SDI Link | ✗ Non presente |
| Firma del paziente | ✓ Firma Elettronica Avanzata con OrisPaperLess | ~ Acquisizione della firma su preventivi e piani di cura |
| Cefalometria | ✓ OrisCeph Q | ✗ Non presente |
| Gestionale per il laboratorio | ✓ OrisLab Q e MyLab | ✗ Non presente |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese, spagnolo, francese e portoghese |
| Assistenza inclusa nel canone | ✓ Dichiarata per OrisDent Air | ~ Community su GitHub |
| Moduli e servizi | ~ Prodotti separati intorno al gestionale | ✓ Tutti inclusi |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ In studio o sul loro cloud | ✓ Sul tuo server, sempre |

Le righe con "non documentata" e "nessun listino" dicono esattamente questo e niente di più: non l'abbiamo trovato sulle pagine pubbliche che abbiamo letto il 6 agosto 2026. Se stai valutando OrisDent sul serio, sono due domande da fare a loro, non due conclusioni da trarre da qui.

## Scegli OrisDent Q se

- **Vuoi che gli adempimenti partano dal gestionale.** Fattura elettronica allo SDI e invio delle spese al Sistema TS sono il lavoro quotidiano di uno studio italiano, e loro li coprono entrambi. Noi no, ed è la ragione principale per cui questo confronto esiste.
- **Ti serve l'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Fai ortodonzia e vuoi la cefalometria dentro casa.** OrisCeph Q è un prodotto loro; da noi il tracciato non c'è.
- **Lavori a stretto contatto con un laboratorio.** OrisLab Q e MyLab sono pensati esattamente per quel passaggio, e non abbiamo niente di equivalente.
- **Vuoi un fornitore con un contratto di assistenza.** Su OrisDent Air l'assistenza è dichiarata dentro il canone. Da noi risponde la community su GitHub, che è un'altra cosa e va detto.

Se tre di questi cinque punti ti riguardano, la risposta onesta è OrisDent. Preferiremmo essere la risposta a tutto, ma in Italia oggi non lo siamo.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **Gli adempimenti li gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica. Nessun ticket, nessuna autorizzazione, nessuna licenza in più.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito, per odontoiatra o per paziente, e nessun servizio da aggiungere per sbloccare quello che ti serve.
- **Ti manca un modulo.** Puoi costruirlo, e resta al suo posto dopo un aggiornamento.

> **Provalo prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Decidi come chiudi l'anno fiscale.** Se le fatture continuano a uscire da un altro strumento, la numerazione va concordata con il commercialista prima del passaggio, non dopo.
6. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
7. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI non è coperto.*

Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

## Fonti

Tutte consultate il 6 agosto 2026.

- Funzionalità di OrisDent Q, moduli clinici e modalità desktop e cloud: [orisline.com/it/software-per-dentisti-orisdent-q](https://orisline.com/it/software-per-dentisti-orisdent-q/)
- Fatturazione elettronica, invio al Sistema TS e SDI Link: [orisline.com/it/fatturazione-elettronica](https://orisline.com/it/fatturazione-elettronica/)
- OrisDent Air, canone fisso con assistenza e aggiornamenti: [orisline.com/it/gestione-dello-studio-dentistico-in-cloud](https://orisline.com/it/gestione-dello-studio-dentistico-in-cloud/)
- Catalogo dei prodotti intorno al gestionale: [orisline.com/it/software-studio-dentistico](https://orisline.com/it/software-studio-dentistico/)
- Maia e la sua inclusione senza costi aggiuntivi: [orisline.com/it/maia](https://orisline.com/it/maia/)
- Ragione sociale e sede nel piè di pagina: [orisline.com/it](https://orisline.com/it/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/)

Manca qualcosa, o in OrisDent è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
