---
title: "Una fattura già emessa è sbagliata: nota di credito, rettifica e ciò che il gestionale non può fare"
description: "Come si corregge una fattura già emessa in uno studio odontoiatrico: nota di variazione ex art. 26, il limite di un anno e il divieto di fattura elettronica via SdI."
pubDate: 2026-09-24
translationKey: factura-rectificativa-clinica-dental
tags: [fatturazione, nota-di-credito, sistema-tessera-sanitaria, gestionale-odontoiatrico]
---

Una fattura già consegnata al paziente non si modifica e non si cancella: si corregge emettendo un secondo documento che richiama il primo, e il primo resta dov'è. Nel linguaggio dell'Agenzia delle Entrate quel secondo documento è una nota di variazione, disciplinata dall'articolo 26 del decreto IVA, e la variazione in diminuzione è una **facoltà** del cedente o prestatore, non un automatismo.

È il punto che stride con l'abitudine dello studio. Nell'agenda o nella cartella clinica un errore si sistema cambiando il dato. In contabilità mai.

## Prima di tutto: la fattura al paziente non passa dallo SdI

Questa è la differenza italiana e va stabilita subito, perché decide come si corregge. L'Agenzia delle Entrate lo scrive nelle proprie FAQ sulle prestazioni sanitarie:

> **"I soggetti che inviano al Sistema tessera sanitaria i dati delle spese sanitarie sostenute dai cittadini ai fini della predisposizione della dichiarazione dei redditi precompilata, non possono emettere fatture elettroniche tramite il Sistema di Interscambio"** (articolo 10-bis del decreto-legge 119/2018). E lo stesso divieto è previsto "anche per i soggetti che, sebbene non inclusi tra quelli che inviano i dati al Sistema TS, effettuano comunque prestazioni sanitarie nei confronti delle persone fisiche" (articolo 9-bis, comma 2, del decreto-legge 135/2018).

Conseguenza pratica: per la fattura al paziente **non esiste la strada dello scarto o dell'annullamento tramite SdI**, perché quella fattura non è mai entrata nello SdI. La correzione è un documento dello studio, con la sua numerazione, e il paziente deve riceverlo.

Il rovescio è che la fattura al laboratorio, alla società, al fornitore o a un altro soggetto IVA segue invece la strada elettronica ordinaria, con le sue regole. Nello stesso studio convivono i due mondi, ed è la prima cosa da chiarire con il commercialista.

## Il limite di un anno, e quando non si applica

L'articolo 26 non ha un unico termine, ne ha due, e confonderli costa il diritto alla detrazione. La circolare 20/E del 29 dicembre 2021 dell'Agenzia delle Entrate lo riassume così.

Il comma 2 elenca ora "unicamente i casi di mancato pagamento «in conseguenza di dichiarazione di nullità, annullamento, revoca, risoluzione, rescissione e simili o in conseguenza dell'applicazione di abbuoni o sconti previsti contrattualmente»". E per questi, dice la stessa circolare, il cedente o prestatore "**può** effettuare variazioni in diminuzione della base imponibile e della conseguente imposta, **senza specifici limiti di tempo**, con riferimento a operazioni per le quali abbia già emesso fattura con addebito di IVA".

Poi il paletto: "Resta fermo, in ogni caso, il limite temporale di un anno prescritto nel successivo comma 3 per le variazioni conseguenti a mancato pagamento per sopravvenuto accordo fra le parti o per rettifica di inesattezze della fatturazione".

Tradotto per lo studio:

- **Il piano di cura che si risolve, l'abbuono previsto in contratto, la nullità**: nessun termine specifico.
- **L'accordo raggiunto dopo con il paziente, e la correzione di un'inesattezza di fatturazione**: un anno.

La seconda riga è quella che riguarda la maggior parte degli errori quotidiani. **Un importo battuto male è una inesattezza di fatturazione, quindi ha un anno di tempo**, non quattro e non cinque.

> **L'anno è il termine che riguarda gli errori di tutti i giorni.** Un importo battuto male non è una risoluzione del contratto: è una "rettifica di inesattezze della fatturazione", quindi cade nel comma 3 e ha dodici mesi, non un tempo indefinito. Una fattura sbagliata trovata durante la revisione di fine anno può essere già fuori termine.

![Elenco fatture con gli stati emessa, pagata, pagata parzialmente, scaduta e bozza](/screenshots/invoices.png)

*Un elenco fatture con i suoi stati. Una nota di credito non fa scomparire una riga: ne aggiunge una.*

## I casi che capitano davvero

| Situazione | Che cosa si emette |
|---|---|
| Importo sbagliato, visto il giorno dopo | ✓ Nota di variazione, entro un anno (comma 3) |
| Nome o codice fiscale errato, prestazione corretta | ✓ Rettifica dell'inesattezza, entro un anno |
| Il pagamento con carta è già passato | ~ Nota di credito più rimborso: due operazioni |
| Piano di cura interrotto a metà | ✓ Nota di variazione sulla parte non eseguita |
| Il paziente chiede la fattura alla sua società | ✗ Non è una rettifica: il committente sarebbe un altro |
| Emessa due volte nello stesso giorno | ✓ Nota di credito su una delle due, non cancellazione |
| Acconto che poi diventa fattura di cura | ~ Non è automaticamente una rettifica |

Due righe meritano una frase, perché sono quelle che tengono occupata la segreteria.

**Una fattura intestata a un terzo non è una fattura corretta.** Se la prestazione è stata resa alla paziente e la fattura è stata intestata alla paziente, rifarla alla società non ripara un difetto: crea un'altra operazione con un altro committente. Si decide prima di emettere, anche perché quella fattura non andrebbe più al Sistema TS nello stesso modo.

**Una fattura di acconto non si sostituisce.** Esiste e vale; la fattura della cura raccoglie il residuo. Si emette nota di credito solo se l'acconto viene restituito o la cura decade.

## La trasmissione al Sistema TS è un secondo binario

Se la fattura al paziente è già stata trasmessa al Sistema Tessera Sanitaria, la nota di credito che la corregge non sistema da sola quella trasmissione: sono due adempimenti distinti e vivono in due posti diversi.

Qui vale la regola di questo sito di non affermare nulla che non si possa citare: le operazioni ammesse sui documenti di spesa già inviati sono definite nelle **specifiche tecniche pubblicate dal Sistema TS per ciascun anno**, che questo articolo non ha potuto scaricare (il sito ha risposto HTTP 403 alla consultazione del 24 settembre 2026). Quindi la frase utile è una domanda da fare al proprio fornitore di software e al commercialista:

- **Che cosa fa il gestionale con la trasmissione al Sistema TS quando emetto una nota di credito?**
- **Chi verifica che l'importo che il paziente troverà nel 730 precompilato sia quello corretto, e quando?**

Uno studio che non sa rispondere a queste due domande scoprirà la differenza a dichiarazione aperta, con il paziente al telefono.

## Cosa deve fare il gestionale

- **Non offrire un campo modificabile su una fattura emessa.** Se l'importo è ancora editabile dopo l'emissione, il problema è il gestionale.
- **Creare la nota di variazione dalla fattura**, portandosi dietro numero e data dell'originale invece di farli ribattere.
- **Tenere la numerazione continua e senza salti**, note di credito comprese, perché un numero mancante si veda invece di mancare in silenzio.
- **Registrare chi ha corretto, quando e perché**, e conservare il motivo insieme al documento.
- **Mostrare la scheda contabile del paziente come una catena**, originale e nota di credito, non il solo saldo. Un saldo giusto con lo storico nascosto è esattamente ciò che non si riesce a spiegare due anni dopo.
- **Distinguere il documento dall'incasso**, perché rimborsare 80 € non riscriva una fattura e una nota di credito non muova la cassa da sola.
- **Segnalare la scadenza dell'anno** sui documenti rettificabili, dato che è il termine che passa senza che nessuno se ne accorga.

![Cruscotto dei report dello studio](/screenshots/reports.png)

*È nei report che un salto nella numerazione si vede, non nell'elenco delle fatture del mese.*

## L'ordine delle operazioni

1. **Stabilire se il documento è sbagliato o se la prestazione è cambiata.** Un nome battuto male è una inesattezza; una cura non eseguita è una riduzione della base.
2. **Non toccare la fattura originale.** Né importo, né intestazione, né data.
3. **Verificare il termine**: un anno per l'inesattezza di fatturazione e per l'accordo sopravvenuto, nessun termine specifico per i casi del comma 2.
4. **Emettere la nota di variazione** con numero e data della fattura originale.
5. **Consegnarla al paziente** e annotare la consegna nella sua scheda.
6. **Gestire il denaro a parte**: rimborso, compensazione sulla fattura successiva o annotazione sull'insoluto.
7. **Chiedere al commercialista** che cosa cambia nella trasmissione al Sistema TS e nella liquidazione già presentata.

## Cosa questo articolo non copre

- **Il pacchetto trimestrale per il commercialista** è [un altro articolo](/it/blog/report-per-il-commercialista/).
- **La cassa che la sera non torna** non è un errore di fattura: è la [chiusura di cassa](/it/blog/chiusura-cassa-studio-dentistico/).
- **Una fattura non pagata** non si corregge perché è insoluta, si recupera: [gestione degli insoluti](/it/blog/gestione-insoluti-pazienti/).
- **Che cosa impongono la fatturazione elettronica e il Sistema Tessera Sanitaria, e con quali scadenze**, è un tema intero e sta [in questo articolo](/it/blog/fatturazione-elettronica-studio-odontoiatrico/), insieme a [quello dedicato al Sistema TS](/it/blog/sistema-tessera-sanitaria-studio-dentistico/).
- **Il mancato pagamento legato a procedure concorsuali** ha un suo comma, il 3-bis, e regole proprie che non sono quelle di un errore di fatturazione.

## Dove si inserisce il software

In Dentalpin una fattura emessa non è più modificabile, la nota di variazione nasce dalla fattura con numero e data dell'originale, incasso e documento sono record distinti, e la scheda del paziente mostra la catena intera invece del risultato. È incluso, senza costo per utente: i dettagli sono nella [pagina dei prezzi](/it/prezzi/).

**Questo non è un parere fiscale.** Le fonti ufficiali sono sotto con la data di consultazione; per un caso concreto rivolgersi al proprio commercialista o all'Agenzia delle Entrate.

## Fonti

- Agenzia delle Entrate, circolare n. 20/E del 29 dicembre 2021, *Modifiche alla disciplina delle variazioni in diminuzione dell'imponibile IVA o dell'imposta dovuta di cui all'articolo 26 del DPR n. 633 del 1972*. Consultata il 24 settembre 2026. <https://www.agenziaentrate.gov.it/portale/documents/20143/4002800/20211229+Circolare+modifiche+art_26+DPR+633.pdf/43918cfd-473c-d487-457c-e4103e9f31a0>
- Agenzia delle Entrate, *Fatture e corrispettivi - Risposte alle domande più frequenti: fatture per prestazioni sanitarie e dichiarazione precompilata (professionisti)*. Consultata il 24 settembre 2026. <https://www.agenziaentrate.gov.it/portale/schede/comunicazioni/fatture-e-corrispettivi/faq-fe/risposte-alle-domande-piu-frequenti-categoria/prestazioni-sanitarie-professionisti>
- Sistema Tessera Sanitaria, *Spese sanitarie - Documenti e specifiche tecniche*. Il portale ha risposto HTTP 403 il 24 settembre 2026 e le specifiche non sono state consultate: le operazioni ammesse sui documenti già trasmessi vanno verificate lì. <https://sistemats1.sanita.finanze.it/portale/it/spese-sanitarie/documenti-e-specifiche-tecniche-ricevute-e-codici-di-errore>
