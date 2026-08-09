---
title: "Dentalpin e OrisDent Q a confronto: una suite intera o il tuo server"
description: "Confronto tra OrisDent Q (OrisLine, Gruppo Henry Schein ONE) e Dentalpin: suite, fattura elettronica, Sistema TS, prezzi non pubblicati e proprietà dei dati."
pubDate: 2026-08-09
tags: [confronto, orisdent, orisline, gestionale-dentistico]
---

OrisDent Q e Dentalpin partono da due idee opposte di cosa debba essere un gestionale: OrisLine vende una suite che copre studio, laboratorio, immagini, firma e comunicazione con il paziente, noi diamo il codice e il database da tenere sul tuo server. Se ti serve che il gestionale emetta la fattura elettronica e mandi le spese al Sistema TS, la risposta sta già qui: OrisDent Q lo fa, Dentalpin oggi no.

Noi facciamo Dentalpin, quindi non siamo neutrali. Possiamo però essere esatti.

> **Tutto quello che qui si dice di OrisDent Q viene da orisline.com**, consultato il 9 agosto 2026, con le URL in fondo. Quello che OrisLine non pubblica non compare qui, e i siti comparatori li abbiamo lasciati fuori di proposito: si contraddicono tra loro e nessuno di quei numeri viene da OrisLine.

## In trenta secondi

**OrisDent Q è un gestionale italiano installato in studio, ed è il centro di una famiglia di prodotti molto ampia.** Il sito di OrisLine dichiara "Dal 1995 ideiamo, sviluppiamo e commercializziamo, a livello nazionale ed internazionale" e "OrisLine conta più di 30.000 licenze installate in oltre 90 paesi nel mondo". Sugli adempimenti italiani è esplicito: OrisDent Q "gestisce le fatture elettroniche attive e passive, invia le spese al sistema TS".

**Dentalpin è open source e resta tuo.** Il codice sta su GitHub, l'installazione va sul tuo server con un `docker compose`, il nucleo non costa niente e tutto quello che fa l'interfaccia passa anche dall'API pubblica. Sul lato clinico è completo: odontogramma, parodontogramma, cartella clinica, piani di cura, preventivi, fatture e report.

**La domanda che decide è una sola: gli adempimenti fiscali italiani devono uscire dal gestionale?** Se sì, oggi la risposta è OrisDent Q e non noi. Se quella parte la coprono già il commercialista o un programma contabile separato, e quello che cerchi è possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

![Cartella di un paziente in Dentalpin con odontogramma, allerte cliniche, piano di cura attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella clinica in Dentalpin: odontogramma, allerte, piano attivo e prossimo appuntamento nella stessa schermata.*

## Cosa è OrisDent Q

OrisDent Q è il gestionale per studi odontoiatrici di OrisLine, presentato sul loro sito come "Il software innovativo e moderno per potenziare il tuo Studio Dentistico". Nella pagina dedicata agli studi è indicato come installazione "on premise", cioè sui computer dello studio, mentre **OrisDent Air** è la versione in cloud della stessa casa ("Il tuo Studio in Cloud è sicuro e smart").

Le aree che elencano sulle loro pagine coprono il giro completo dello studio:

- **Cartella clinica e piano di cura**, con collegamento diretto alle cartelle specialistiche ortodontica, parodontale e gnatologica.
- **Sezione contabile completa**, con fatture elettroniche attive e passive e invio delle spese al Sistema TS.
- **Piani di pagamento a rate**, visualizzati automaticamente nello scadenzario.
- **Business Monitor**, la parte di analisi dell'andamento dello studio.
- **Gestione documentale con firma elettronica avanzata**, tramite codice OTP o tablet.
- **Interfacciamento diretto** con i sistemi radiografici digitali e gli scanner intraorali.
- **Strumenti per il GDPR**: credenziali di autenticazione, policy di accesso e ruoli, e un sistema di backup automatico remoto.

Attorno al gestionale c'è il resto della famiglia, ed è la differenza vera rispetto a un prodotto singolo: OrisDent Air, OrisPaperLess, dentIA, OrisCommunication, Online Booking, MyEduco, OrisCeph Q per la cefalometria, OrisLab Q e MyLab per il laboratorio, My.Doc, OrisSafe e l'assistente Maia.

Un dettaglio concreto che vale più di molte righe di brochure: in un articolo del 21 dicembre 2023 sul loro sito, OrisLine scrive di aver reso disponibile il Passaporto Implantare in OrisDent Q "disponibile senza costi aggiuntivi", con registrazione dei codici UDI, associazione dei codici UDI ai pazienti e lettura tramite lettori di codici a barre e QR compatibili.

> **OrisLine non pubblica prezzi sul proprio sito (consultato il 9 agosto 2026).** Le pagine di prodotto rimandano a "Richiedi info", "Scarica la brochure", "Richiedi demo" e a un modulo per "una consulenza gratuita e senza impegno". Non c'è un listino, né un prezzo di partenza, né una distinzione pubblica di cosa costi a parte tra i prodotti della famiglia.

Una cosa che sul loro sito c'è e che altrove si legge di rado: la società indicata è **Henry Schein ONE Italia srl** (Via Giovanni Amendola 7, Cernusco sul Naviglio, P. IVA IT11654690152), e la pagina "Chi siamo" dichiara "Siamo parte del Gruppo Henry Schein ONE, con sede in Italia". Non è un giudizio, è il quadro in cui si firma un contratto: OrisDent Q non è il prodotto di un piccolo editore locale.

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa sul tuo server, nel cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, parodontogramma, cartella clinica, piani di cura, preventivi, fatture e report. Ci sono anche un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani: i moduli ci sono tutti dal primo giorno.

Quello che in Italia oggi **non** c'è, ed è meglio dirlo qui che alla terza schermata: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, nessuna contabilità, nessuna cefalometria e nessun modulo per il laboratorio odontotecnico. L'interfaccia esiste in inglese, spagnolo, francese e portoghese, ma non in italiano.

![Elenco delle fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI non è coperto.*

## Fianco a fianco

Solo righe verificabili. Dove non c'è un dato pubblico, lo scriviamo invece di dedurlo.

| | OrisDent Q | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale | Open source (BSL 1.1, Apache 2.0 dopo quattro anni) |
| Installazione | On premise, con OrisDent Air come versione cloud | Sul tuo server, cloud o macchina in studio |
| Prezzo pubblicato | ✗ Nessun listino sul sito | ✓ 0 €, tutto incluso |
| Cosa costa a parte | ~ Non pubblicato: la famiglia ha molti prodotti separati | ✓ Niente, i moduli sono tutti inclusi |
| Fattura elettronica (SDI) | ✓ Attive e passive, dichiarato da loro | ✗ Non presente |
| Sistema Tessera Sanitaria | ✓ Invio delle spese, dichiarato da loro | ✗ Non presente |
| Contabilità | ✓ Sezione contabile completa | ✗ Non la facciamo |
| Cartelle specialistiche | ✓ Ortodontica, parodontale, gnatologica | ~ Odontogramma e parodontogramma, non le altre |
| Tracciabilità UDI e Passaporto Implantare | ✓ Sì, senza costi aggiuntivi secondo un loro articolo del 2023 | ✗ Non presente |
| Firma elettronica avanzata | ✓ OTP o tablet | ~ Preventivi firmabili, non firma elettronica avanzata |
| Radiografie e scanner intraorali | ✓ Interfacciamento diretto | ~ Non integrato |
| Laboratorio odontotecnico | ✓ OrisLab Q e MyLab | ✗ Non presente |
| Anni sul mercato | ✓ "Dal 1995" | ✗ Dal 2026 |
| Diffusione | ✓ "più di 30.000 licenze installate in oltre 90 paesi" | ✗ Dal 2026 |
| Assistenza | ✓ Telefonica, remota ed email, più OrisLine Academy | ~ Community su GitHub |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese, spagnolo, francese e portoghese |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ In studio con Q, in cloud con Air | ✓ Sul tuo server, sempre |

Le due righe con "non pubblicato" e "non documentata" dicono esattamente questo e niente di più: non l'abbiamo trovato sulle pagine pubbliche che abbiamo letto. Se stai valutando OrisDent Q sul serio, sono due domande da fare a loro, non due conclusioni da trarre da qui.

Il dato delle 30.000 licenze è riferito da OrisLine a sé stessa come azienda, non al solo OrisDent Q, e la famiglia comprende anche i prodotti per il laboratorio. Lo riportiamo come lo scrivono loro.

## Scegli OrisDent Q se

- **Vuoi che sia il gestionale a emettere la fattura elettronica e a mandare le spese al Sistema TS.** In Italia è la routine di ogni studio, loro la coprono e noi no. È la ragione principale per cui questo confronto esiste.
- **Ti serve la contabilità dentro lo stesso programma.** La loro sezione contabile è completa, con attive e passive. Noi la contabilità non la facciamo, e non è in programma.
- **Registri impianti e devi tracciare gli UDI.** Il Passaporto Implantare e la lettura dei codici UDI ci sono già da loro, e da noi no.
- **Lo studio ha un laboratorio, o ci lavora ogni giorno.** OrisLab Q e MyLab sono nella stessa casa e parlano con il gestionale. Da noi non c'è niente di equivalente.
- **Ti serve l'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Vuoi un fornitore unico con un numero da chiamare** e un percorso di formazione. Loro pubblicano assistenza telefonica, remota ed email e la OrisLine Academy con webinar e corsi one to one. Da noi risponde la community su GitHub.

Se tre di questi sei punti ti riguardano, la risposta onesta è OrisDent Q. Preferiremmo essere la risposta a tutto, in Italia oggi non lo siamo.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **Gli adempimenti li gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi sapere quanto costa prima di parlare con un commerciale.** Il nostro numero sta su una pagina, il loro no.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica, documentata con OpenAPI. Nessun ticket, nessuna autorizzazione, nessuna licenza in più.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito né per odontoiatra, e nessun piano da cui sbloccare le funzioni che ti servono.
- **Ti manca un modulo.** Puoi costruirlo, e resta al suo posto dopo un aggiornamento.

> **Provalo prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale, è cambiarlo senza aver provato il passaggio su una copia.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
6. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Elenco dei pazienti recenti e degli appuntamenti della giornata nella schermata iniziale di Dentalpin](/screenshots/home.png)

*Il quadro della giornata: appuntamenti, chi è in studio, pagamenti scaduti e pazienti recenti. L'interfaccia dello studio dimostrativo è in spagnolo, cosa che più sopra conta.*

Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

## Fonti

Tutte consultate il 9 agosto 2026.

- Famiglia di prodotti, ragione sociale e assenza di prezzi: [orisline.com](https://orisline.com/it/)
- Funzioni di OrisDent Q, fatture elettroniche attive e passive, invio al Sistema TS, contabilità, firma elettronica, GDPR e backup: [orisline.com/it/software-per-dentisti-orisdent-q](https://orisline.com/it/software-per-dentisti-orisdent-q/)
- OrisDent Q on premise e OrisDent Air in cloud, soluzioni per lo studio: [orisline.com/it/software-studio-dentistico](https://orisline.com/it/software-studio-dentistico/)
- "Dal 1995", "più di 30.000 licenze installate in oltre 90 paesi" e appartenenza al Gruppo Henry Schein ONE: [orisline.com/it/orisline-sviluppo-software-per-dentisti](https://orisline.com/it/orisline-sviluppo-software-per-dentisti/)
- Passaporto Implantare e codici UDI senza costi aggiuntivi, articolo del 21 dicembre 2023: [orisline.com/it/news/orisdent-gestisce-gia-il-passaporto-implantare](https://orisline.com/it/news/orisdent-gestisce-gia-il-passaporto-implantare/)
- Assistenza telefonica, remota ed email, assistente Maia e OrisLine Academy: [orisline.com/it/supporto-tecnico-orisline-e-formazione](https://orisline.com/it/supporto-tecnico-orisline-e-formazione/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [la pagina dei prezzi](/it/prezzi/)

Manca qualcosa, o in OrisDent Q è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
