---
title: "Dentalpin e XDENT a confronto: cosa fa davvero ciascuno dei due oggi"
description: "Confronto onesto tra XDENT (CGM) e Dentalpin: prezzi pubblicati, piani, fatturazione elettronica, Sistema Tessera Sanitaria e proprietà dei dati. Con quello che Dentalpin in Italia ancora non fa."
pubDate: 2026-07-30
tags: [confronto, xdent, gestionale-dentistico]
---

Questo confronto è per studi che si chiedono se esista qualcosa fuori dai gestionali odontoiatrici italiani più diffusi, e per informatici che devono valutare un'alternativa per conto di uno studio. Se gestisci uno studio in Italia e ti serve che il gestionale emetta la fattura elettronica e invii le spese al Sistema Tessera Sanitaria, questo testo te lo dice nelle prime righe: Dentalpin oggi non copre quel pezzo.

> **Tutto quello che qui si dice di XDENT viene da xdent.it**, consultato il 30 luglio 2026, ed è linkato in fondo con la URL. Quello che CGM non pubblica non compare qui. Le cifre dei siti comparatori le abbiamo lasciate fuori di proposito: si contraddicono tra loro e nessuna viene da CGM.

## In trenta secondi

**XDENT è un gestionale italiano completo, di CompuGroup Medical.** Il suo sito dichiara più di 8.000 dentisti che lo usano ogni giorno in studi, centri e network in Italia, si presenta come "l'unico gestionale per studi dentistici nativo per Mac e Windows" ed è disponibile anche in cloud. La fatturazione elettronica è tra le funzionalità elencate, e questo in Italia non è un dettaglio.

**Dentalpin è open source e resta tuo.** Il codice è su GitHub, l'installazione va sul tuo server, il nucleo non costa niente e tutto quello che fa l'interfaccia lo fa anche l'API pubblica. Sul lato clinico è completo: odontogramma, parodontogramma, piano di cura, preventivi, fatture, report.

**La domanda che decide: ti serve che sia il gestionale a emettere la fattura elettronica verso lo SDI?** Se sì, oggi la risposta è XDENT e non noi. Se quella parte la gestisci già con il commercialista o con un altro strumento, e quello che cerchi è possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

## Cosa è XDENT

XDENT è il gestionale odontoiatrico di CGM (CompuGroup Medical) per il mercato italiano. Sulla sua home elenca dieci aree funzionali: Planner appuntamenti, Scheda paziente, Marketing e comunicazione, Segreteria Virtuale CGM AIDA, Assistente AI CGM SPEAKY, Firma Elettronica CGM E-SIGN, Fatturazione elettronica, Contabilità, Diagnostica per immagini e Business Intelligence.

**E pubblica un prezzo di partenza**, cosa rara in questo mercato e che va detta chiaramente. Alla pagina dei piani, il PIANO START costa "€ 20 al mese" e comprende Planning Mono-Operatore, Cartella Clinica, Anamnesi e Diario Clinico, Preventivi e Documenti, Fatturazione Paziente, Prima Nota, Gestione Immagini e Status.

Sopra ci sono altri due piani, e lì il prezzo non è esposto:

- **PLUS** aggiunge Planning Multi-Operatore, Esame Obiettivo, Schede Specialistiche, Comunicazioni e Richiami, Magazzino e Reportistica.
- **CLINIC**, segnalato come "Più richiesto", aggiunge Contabilità Avanzata (attiva e passiva), Prescrizioni e Ordini, Chat Interna, Magazzino Avanzato e Reportistica Avanzata.

La stessa pagina indica che ci sono funzionalità aggiuntive disponibili come add-on a pagamento.

> **Un prezzo pubblicato, anche solo di partenza, è più di quanto faccia quasi chiunque altro in questo settore.** Vale la pena dirlo prima di qualsiasi confronto: XDENT espone il costo del piano base, mentre PLUS e CLINIC, cioè quelli che servono a uno studio con più di un operatore, restano da chiedere.

![Schermata iniziale di Dentalpin: appuntamenti di oggi, chi è in studio, pagamenti scaduti e pazienti recenti](/screenshots/home.png)

*Il quadro della giornata in Dentalpin. L'interfaccia dello studio dimostrativo è in spagnolo, cosa che più avanti conta.*

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, nel cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. In opzione si aggiungono parodontogramma, report, un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, e l'interfaccia dell'applicazione esiste in inglese, spagnolo, francese e portoghese, ma non in italiano. La traduzione è aperta come contributo della community ([issue sul repository](https://github.com/martinezsalmeron/dentalpin/labels/i18n)), ma oggi non è rilasciata.

## Fianco a fianco

| | XDENT | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale | Open source (BSL 1.1) |
| Prezzo pubblicato, piano base | ✓ 20 € al mese (piano START) | ✓ 0 €, tutto incluso |
| Prezzo pubblicato, piani superiori | ✗ Non esposto per PLUS e CLINIC | ✓ Non esistono piani superiori |
| Funzioni divise per piano | ✗ Tre piani più add-on a pagamento | ✓ Tutti i moduli inclusi |
| Fatturazione elettronica (SDI) | ✓ Elencata tra le funzionalità | ✗ Non presente |
| Sistema Tessera Sanitaria | ~ Non citato nelle pagine consultate | ✗ Non presente |
| Base installata | ✓ "più di 8.000 dentisti" in Italia | ✗ Dal 2026 |
| Nativo Mac e Windows | ✓ Rivendicato sul loro sito | ~ Applicazione web, va su qualsiasi browser |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese, spagnolo, francese e portoghese |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ Locale o cloud, secondo il loro sito | ✓ Sul tuo server, sempre |

Le due righe con "non citato" e "non documentata" dicono esattamente questo e niente di più: non l'abbiamo trovato sulle pagine pubbliche che abbiamo letto. Se stai valutando XDENT sul serio, sono due domande da fare a loro, non due conclusioni da trarre da qui.

![Agenda giornaliera per professionista e per sala](/screenshots/schedule-day.png)

*L'agenda si sposta e si ridimensiona trascinando, rileva le sovrapposizioni e prende durata e colore dal catalogo dei trattamenti.*

## Scegli XDENT se

- **Vuoi che sia il gestionale a emettere la fattura elettronica.** In Italia è un obbligo quotidiano, e loro lo elencano tra le funzionalità. Noi no, ed è la ragione principale per cui questo confronto esiste.
- **Ti serve un'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Vuoi un fornitore unico con un numero da chiamare.** CGM è un gruppo grande con assistenza commerciale; da noi risponde la community su GitHub.
- **Lavori su Mac.** Lo rivendicano loro, ed è una scelta di campo che in odontoiatria non è comune.
- **Vuoi contabilità, magazzino e ordini nello stesso programma.** Sono nei loro piani superiori. Noi la contabilità non la facciamo.

Se tre di questi cinque punti ti riguardano, la risposta onesta è XDENT. Preferiremmo essere la risposta a tutto, ma in Italia oggi non lo siamo.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **La fatturazione la gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica. Nessun ticket, nessuna autorizzazione, nessuna licenza in più.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito, per odontoiatra o per paziente, e nessun piano da cui sbloccare le funzioni che ti servono.
- **Ti manca un modulo.** Puoi costruirlo, e resta al suo posto dopo un aggiornamento.

> **Provaci prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
6. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI non è coperto.*

Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

## Fonti

Tutte consultate il 30 luglio 2026.

- Funzionalità, base installata e supporto Mac e Windows: [xdent.it](https://www.xdent.it/)
- Piani, contenuto di START, PLUS e CLINIC e prezzo del piano START: [xdent.it/piani](https://www.xdent.it/piani/)
- CGM come gruppo e gamma odontoiatrica: [cgm.com](https://www.cgm.com/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/)

Manca qualcosa, o in XDENT è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
