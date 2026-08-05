---
title: "Dentalpin e OrisDent Q a confronto: cosa copre la suite OrisLine e cosa no"
description: "Confronto tra OrisDent Q di OrisLine e Dentalpin: prezzi pubblicati, fattura elettronica, invio al sistema TS, desktop o cloud e proprietà dei dati."
pubDate: 2026-08-05
tags: [confronto, orisdent, orisline, gestionale-dentistico]
---

Questo confronto è per studi italiani che stanno valutando OrisDent Q e vogliono sapere che cosa cambia davvero scegliendo un gestionale open source al suo posto. La risposta corta sta nelle prime righe: se ti serve che il software emetta la fattura elettronica e invii le spese al sistema TS, oggi quella parte la copre OrisDent Q e non noi.

> **Tutto quello che qui si dice di OrisLine viene da orisline.com**, consultato il 5 agosto 2026, con la URL in fondo. Quello che l'azienda non pubblica non compare qui. I siti comparatori li abbiamo lasciati fuori di proposito: si contraddicono tra loro e nessuno di essi è OrisLine.

## In trenta secondi

**OrisDent Q è un gestionale odontoiatrico italiano dentro una gamma molto larga.** Sulla stessa home il produttore elenca dodici prodotti, dal gestionale di studio al software per il laboratorio odontotecnico, e OrisDent Q copre cartella clinica, contabilità, fattura elettronica attiva e passiva e invio delle spese al sistema TS. In Italia questi ultimi due punti non sono un dettaglio.

**Dentalpin è open source e resta tuo.** Il codice è su GitHub, l'installazione va sul tuo server, il nucleo non costa niente e tutto quello che fa l'interfaccia lo fa anche l'API pubblica. Sul lato clinico è completo: odontogramma, parodontogramma, piano di cura, preventivi, fatture, report.

**La domanda che decide: vuoi un fornitore unico che copra anche gli adempimenti fiscali italiani?** Se sì, la risposta onesta è OrisDent Q. Se la fatturazione la gestisci già con il commercialista e quello che cerchi è possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

## Che cosa è OrisDent Q

OrisDent Q è il gestionale per studi odontoiatrici pubblicato sotto il marchio OrisLine. La sua pagina prodotto dice che "OrisDent è disponibile in diverse versioni e in modalità desktop e in cloud", quindi la scelta tra installazione locale e nuvola è dichiarata da loro, non dedotta da noi.

Sulla cartella clinica la stessa pagina elenca quattro schede specialistiche: odontoiatrica, ortodontica, parodontale e gnatologica. Sul lato amministrativo dichiara che il software "gestisce le fatture elettroniche attive e passive" e che "invia le spese al sistema TS".

Altre funzioni citate sulle pagine consultate:

- **Business Monitor**, la parte di analisi con obiettivi e marginalità sulle singole prestazioni.
- **OrisPaperless** per la conservazione digitale dei documenti e la Firma Elettronica Avanzata, via OTP o su tablet.
- **Interfacciamento diretto** con radiografie digitali e scanner intraorali.
- **dentIA**, la loro intelligenza artificiale, che riconosce gli elementi dentali sulle radiografie e propone un piano di cura che resta da confermare all'odontoiatra.
- **OrisDent Air**, la versione dichiarata in cloud, con SMS automatici di promemoria: "Invia SMS mirati ed automatici ai pazienti per ricordare la visita e diminuire gli appuntamenti mancati".

La gamma va oltre lo studio. Accanto a OrisDent ci sono OrisCeph Q per la cefalometria, Online Booking, OrisCommunication, OrisSafe e OrisLab Q, che la loro pagina descrive come "il software leader in Italia per la gestione del laboratorio odontotecnico", disponibile "in 3 diverse versioni". Se il tuo studio lavora a stretto contatto con un laboratorio, quella continuità esiste da un lato solo del confronto.

> **Il sito orisline.com è pubblicato da Henry Schein ONE Italia S.r.l.** Lo dicono il piè di pagina e la privacy policy, che indicano P. IVA IT11654690152 e sede operativa a Cernusco sul Naviglio. Vale la pena saperlo prima di firmare: il fornitore fa parte di un gruppo internazionale, con quello che comporta in termini di solidità e di distanza dalle decisioni di prodotto.

![Scheda paziente di Dentalpin con odontogramma, allerte cliniche e piano di cura attivo](/screenshots/dental-chart.png)

*La scheda paziente in Dentalpin. L'interfaccia dello studio dimostrativo è in spagnolo, cosa che più avanti conta.*

## Che cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, nel cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. In opzione si aggiungono parodontogramma, report, un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica.

Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono versioni: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è, ed è la ragione per cui questo confronto non finisce a nostro favore su tutta la linea: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, nessun interfacciamento dichiarato con radiografie digitali e scanner intraorali, e l'interfaccia dell'applicazione non esiste ancora in italiano.

## Fianco a fianco

| | OrisDent Q | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale | Open source (BSL 1.1) |
| Prezzo pubblicato | ✗ Nessuna tariffa sulle pagine consultate | ✓ 0 €, tutto incluso |
| Funzioni divise per versione | ~ "diverse versioni", contenuto non esposto | ✓ Tutti i moduli inclusi |
| Fattura elettronica (SDI) | ✓ Attiva e passiva, dichiarata da loro | ✗ Non presente |
| Invio spese al sistema TS | ✓ Dichiarato sulla pagina prodotto | ✗ Non presente |
| Desktop o cloud | ✓ Entrambi, dichiarato da loro | ~ Applicazione web, ospitata da te |
| Radiografie e scanner intraorali | ✓ Interfacciamento diretto dichiarato | ✗ Non dichiarato |
| Software per il laboratorio | ✓ OrisLab Q nella stessa gamma | ✗ Non esiste |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese, spagnolo, francese e portoghese |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ Sul tuo server o sui loro, secondo la versione | ✓ Sul tuo server, sempre |

Le righe con "non documentata" e "non dichiarato" dicono esattamente questo e niente di più: non l'abbiamo trovato sulle pagine pubbliche che abbiamo letto. Se stai valutando OrisDent Q sul serio, sono domande da fare a loro, non conclusioni da trarre da qui.

> **Sulle pagine consultate non compare nessuna tariffa.** OrisLine propone una demo gratuita e un contatto commerciale, e non pubblica un listino per OrisDent Q, OrisDent Air o OrisLab Q. È il comportamento normale di questo mercato, ma significa che il confronto sul prezzo lo puoi fare solo dopo un preventivo, e che il preventivo arriva dopo aver dato i tuoi dati.

## Scegli OrisDent Q se

- **Vuoi che sia il gestionale a fare la fattura elettronica e l'invio al sistema TS.** Sono due adempimenti quotidiani per uno studio italiano, loro li dichiarano entrambi, noi nessuno dei due. Se questo pesa, il confronto finisce qui.
- **Ti serve un'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Lavori molto con il laboratorio odontotecnico.** OrisLab Q sta nella stessa gamma e ha vent'anni di storia alle spalle, stando alle testimonianze che loro stessi pubblicano. Noi il laboratorio non lo copriamo.
- **Vuoi radiografie e scanner intraorali collegati senza lavoro tuo.** Loro dichiarano l'interfacciamento diretto, e per uno studio con diagnostica in casa è tempo risparmiato tutti i giorni.
- **Vuoi un fornitore unico con un numero da chiamare.** Dietro OrisLine c'è Henry Schein ONE Italia, un gruppo grande con assistenza commerciale. Da noi risponde la community su GitHub.

Se tre di questi cinque punti ti riguardano, la risposta onesta è OrisDent Q. Preferiremmo essere la risposta a tutto, ma in Italia oggi non lo siamo.

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI e al sistema TS non è coperto.*

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **La fatturazione la gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica. Nessun ticket, nessuna autorizzazione, nessuna licenza in più.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito, per odontoiatra o per paziente, e nessuna versione da cui sbloccare le funzioni che ti servono.
- **Vuoi sapere il prezzo prima di parlare con qualcuno.** Il nostro sta su una [pagina corta](/it/prezzi/) e non richiede un preventivo.

> **Provaci prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Verifica separatamente la continuità della numerazione delle fatture**, perché è l'unico pezzo che il tuo commercialista noterà subito se si rompe.
6. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
7. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Schermata iniziale di Dentalpin: appuntamenti di oggi, chi è in studio, pagamenti scaduti e pazienti recenti](/screenshots/home.png)

*Il quadro della giornata: agenda, pagamenti scaduti e pazienti recenti sulla stessa schermata.*

## Fonti

Tutte consultate il 5 agosto 2026.

- Gamma prodotti, testimonianze e dati societari nel piè di pagina: [orisline.com/it](https://orisline.com/it/)
- Versioni desktop e cloud, cartelle specialistiche, fatture elettroniche attive e passive, invio al sistema TS, Business Monitor, OrisPaperless e interfacciamento con radiografie e scanner: [orisline.com/it/software-per-dentisti-orisdent-q](https://orisline.com/it/software-per-dentisti-orisdent-q/)
- OrisDent Air in cloud, SMS di promemoria e firma elettronica avanzata: [orisline.com/it/gestionale-studio-dentistico-cloud](https://orisline.com/it/gestionale-studio-dentistico-cloud/)
- OrisLab Q per il laboratorio odontotecnico: [orisline.com/it/orislab-q](https://orisline.com/it/orislab-q/)
- dentIA, riconoscimento sulle radiografie e proposta di piano di cura: [orisline.com/it/dentia](https://orisline.com/it/dentia/)
- Titolare del trattamento, ragione sociale e sedi: [orisline.com/it/privacy-policy-customers](https://orisline.com/it/privacy-policy-customers/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/)

Manca qualcosa, o in OrisLine è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
