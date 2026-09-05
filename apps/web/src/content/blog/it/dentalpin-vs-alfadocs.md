---
title: "Dentalpin e AlfaDocs a confronto: cloud in abbonamento o server tuo"
description: "Confronto onesto tra AlfaDocs e Dentalpin: piani, fatturazione elettronica, Sistema TS, API e dove finiscono i dati del tuo studio. Con fonti e date."
pubDate: 2026-08-06
updatedDate: 2026-09-05
tags: [confronto, alfadocs, gestionale-dentistico]
---

AlfaDocs e Dentalpin risolvono lo stesso problema in due modi opposti: loro ti danno un gestionale in cloud pronto il giorno stesso, con la parte fiscale italiana già dentro, noi ti diamo il codice e il database da tenere sul tuo server. Se ti serve che il gestionale emetta la fattura elettronica e mandi le spese al Sistema TS, la risposta è già qui: AlfaDocs lo fa, Dentalpin oggi no.

Noi facciamo Dentalpin, quindi non siamo neutrali. Possiamo però essere esatti.

> **Tutto quello che qui si dice di AlfaDocs viene da alfadocs.com**, consultato il 6 agosto 2026, con le URL in fondo. Quello che non pubblicano non compare qui, e i siti comparatori li abbiamo lasciati fuori: si contraddicono tra loro e nessuno di quei numeri viene da AlfaDocs.

## In trenta secondi

**AlfaDocs è un gestionale italiano interamente in cloud, venduto a piani.** Il loro sito scrive "Alfadocs è 100% in cloud, accessibile da qualsiasi dispositivo" e "Scelto da oltre 5.000 studi in tutta Italia". Sulla conformità sono espliciti: "Supporta fatturazione elettronica, invio al Sistema TS e gestione conforme alle normative vigenti", e fra le funzionalità elencano anche il Fascicolo Sanitario Elettronico 2.0.

**Dentalpin è open source e resta tuo.** Il codice sta su GitHub, l'installazione va sul tuo server con un `docker compose`, non ci sono canoni per riunito né per odontoiatra, e non ci sono piani da cui sbloccare le funzioni. Sul lato clinico è completo: odontogramma, parodontogramma, cartella clinica, piano di cura, preventivi, fatture e report.

La domanda che decide è una sola: **gli adempimenti italiani devono uscire dal gestionale, oppure li gestisci già altrove?** Se devono uscire dal gestionale, oggi la risposta è AlfaDocs. Se il commercialista o un programma contabile separato coprono già quella parte, il resto di questo testo ti riguarda.

![Cartella di un paziente in Dentalpin con odontogramma, allerte cliniche, piano attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella clinica in Dentalpin: odontogramma, allerte, piano di cura attivo e prossimo appuntamento nella stessa schermata.*

## Cosa è AlfaDocs

AlfaDocs si presenta come "il gestionale per dentisti che aumenta efficienza e redditività del tuo studio da subito", ed è una piattaforma unica in cloud, senza versione da installare.

Le aree che elencano sulle loro pagine coprono l'intero giro dello studio: agenda, prenotazione online, relazione con il paziente, cartella clinica e immagini, gestione documentale con firma elettronica, analisi economica e fatturazione, automazione dei pagamenti, uno **Scribe AI Powered** e il **Fascicolo Sanitario Elettronico 2.0**.

Il prodotto è venduto in tre piani, e vale la pena leggere cosa sta dove perché è lì che si decide il preventivo:

- **Light**, "per chi digitalizza l'essenziale": diario clinico e anamnesi digitale, agenda e promemoria automatici, firma on-click, WhatsApp, contabilità di base e invio al Sistema Tessera Sanitaria.
- **Smart**, il piano con il badge "Più scelto", pensato per chi gestisce cura e amministrazione dello studio: aggiunge la cartella clinica completa, preventivi e piani di cura, la fatturazione elettronica con SDI, l'analisi e il controllo di gestione, operatori/magazzino/prescrizioni e gli strumenti di marketing.
- **Elite**, "per poliambulatori e studi su più sedi": aggiunge il multi-archivio per più sedi, la prenotazione online, le API e l'automazione dei workflow, l'integrazione radiografica, capacità estese di firma/accessi/SMS e un account manager dedicato.

> **La fatturazione elettronica con SDI resta dal piano Smart in su e le API restano solo su Elite, ma l'invio al Sistema TS è già nel piano Light.** Non è una critica, è il modello: chi vende a piani mette le funzioni che costano di più nei piani che costano di più. Conta però quando confronti, perché nemmeno il piano di ingresso di AlfaDocs e Dentalpin fanno le stesse cose, e nemmeno il piano alto e Dentalpin le fanno.

Una nota che sul loro sito c'è e altrove non si trova: nel piè di pagina la società indicata è **AlfaDocs GmbH**, con la formula "German technology, Italian design". Prodotto pensato per l'Italia, società tedesca.

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa da solo sul tuo server, nel cloud che scegli o su una macchina in studio; se preferisci non occupartene, il piano Gestito lo installa e lo sorveglia per te, ma il server resta a tuo nome, aperto da te su Hetzner.

Il nucleo comprende agenda, pazienti, odontogramma, parodontogramma, cartella clinica, piani di cura, preventivi, fatture e report. C'è anche un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. L'interfaccia è disponibile anche in italiano. Non ci sono piani che sbloccano funzioni: i moduli ci sono tutti, dal primo giorno, sia in self-hosted sia nel piano Gestito.

Quello che in Italia oggi **non** c'è, ed è meglio dirlo qui che alla terza schermata: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, nessun Fascicolo Sanitario Elettronico, nessuna contabilità.

![Scheda paziente in Dentalpin, tab attività: allerte cliniche, piano attivo e cronologia filtrabile per visite, trattamenti, movimenti economici e comunicazioni](/screenshots/patient-timeline.png)

*La cronologia del paziente si filtra per visite, trattamenti, movimenti economici e comunicazioni.*

## Fianco a fianco

Solo righe verificabili. Dove non c'è un dato pubblico, lo scriviamo.

| | AlfaDocs | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale a piani | Open source (BSL 1.1, Apache 2.0 dopo quattro anni), con hosting gestito opzionale a pagamento |
| Prezzo pubblicato | ✗ Nessun importo sulla pagina Piani & Prezzi | ~ Self-hosted: 0 €. Gestito: server Hetzner pubblicato (circa 16 €/mese), canone del servizio su preventivo |
| Distribuzione | "100% in cloud, accessibile da qualsiasi dispositivo" | Il tuo server, il cloud che scegli, o un server Hetzner a tuo nome che installiamo e sorvegliamo noi (piano Gestito) |
| Fatturazione elettronica allo SDI | ✓ Dal piano Smart | ✗ Non presente |
| Invio al Sistema Tessera Sanitaria | ✓ Incluso già dal piano Light | ✗ Non presente |
| Fascicolo Sanitario Elettronico 2.0 | ✓ Elencato fra le funzioni | ✗ Non presente |
| Contabilità e magazzino | ✓ Contabilità di base dal piano Light, magazzino dal piano Smart | ✗ Non li facciamo |
| Prenotazione online | ✓ Dal piano Elite (modulo attivabile a parte sugli altri piani) | ~ Non nel nucleo |
| API | ~ Integrazioni personalizzate solo su Elite | ✓ REST documentata con OpenAPI, per tutti |
| Funzioni dietro un piano superiore | ✗ Tre piani più account manager dedicato su Elite | ✓ Stesso prodotto completo in self-hosted e nel piano Gestito, nessuna funzione bloccata |
| Interfaccia in italiano | ✓ Sì | ✓ Sì |
| Base installata | ✓ "oltre 5.000 studi in tutta Italia" | ✗ Ancora pochissima |
| Assistenza | ~ Account manager dedicato su Elite, dettaglio non pubblicato per Light e Smart | ~ GitHub e community in self-hosted, tempi di risposta contrattuali nel piano Gestito |
| Codice sorgente | ✗ Non pubblicato | ✓ Su GitHub, per intero |
| Dove stanno i dati | Sull'infrastruttura cloud del fornitore | ✓ Sul tuo server, sempre |

La riga sulla prenotazione online dice esattamente questo e niente di più: non fa parte del nucleo di Dentalpin oggi. Se per te è decisiva, è una domanda da fare a noi prima di installare, non una conclusione da trarre da qui. Anche la riga sull'interfaccia in italiano è cambiata da quando questo confronto è stato scritto: a inizio agosto Dentalpin era ancora solo in inglese e spagnolo, oggi il pannello è disponibile anche in italiano.

> **Nessuno dei due pubblica una tariffa finale, ma per ragioni diverse.** AlfaDocs scrive che "i piani Alfadocs sono configurabili in base alla specializzazione e alle esigenze dello studio" e rimanda alla prova gratuita per il prezzo esatto. Da noi il self-hosted resta zero euro e non c'è niente da configurare; se invece vuoi che ce ne occupiamo noi, il canone del piano Gestito te lo diciamo solo dopo aver sentito il tuo studio, proprio come fanno loro. In mezzo, il confronto onesto lo fai solo chiedendo un preventivo a entrambi sul piano che ti serve davvero.

## Scegli AlfaDocs se

Questa sezione non è un atto dovuto, è la parte onesta del confronto:

- **Vuoi che gli adempimenti italiani escano dal gestionale.** Fattura elettronica, Sistema TS e FSE 2.0 sono sulle loro pagine e non sulle nostre, e il Sistema TS ce l'hanno già nel piano più economico. Da sola, questa riga chiude la valutazione per molti studi.
- **Non vuoi aprire nemmeno un account di hosting.** Il loro cloud è pronto da subito e non tocchi mai un pannello di infrastruttura. Nel piano Gestito di Dentalpin il server resta tecnicamente tuo, aperto a tuo nome su Hetzner: siamo noi a installarlo e sorvegliarlo, ma un account lo devi comunque avere.
- **Vuoi contabilità, magazzino e prenotazione online nello stesso programma.** Stanno nei loro piani, la contabilità di base già dal piano Light. Noi la contabilità non la facciamo, e prenotazione online e magazzino non sono nel nucleo.
- **Ti serve un account manager dedicato incluso nel prezzo del software.** Sul piano Elite lo indicano. Da noi la stessa cosa esiste solo nel piano Gestito, a parte; in self-hosted risponde la community su GitHub.

Cinquemila studi risolvono problemi che noi ancora non sappiamo di avere.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **Non vuoi che una funzione dipenda dal piano.** Da noi non esistono piani: quello che c'è, c'è per tutti, anche l'API.
- **La fatturazione la gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare sul serio.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica, senza ticket e senza passare al piano superiore.
- **Vuoi poter verificare il codice** che custodisce le cartelle cliniche dei tuoi pazienti. È pubblicato.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito, per odontoiatra o per paziente.
- **Vuoi restare padrone del server anche se non vuoi gestirlo tu.** Il piano Gestito lo installiamo e lo sorvegliamo noi, ma il server è aperto a tuo nome su Hetzner: se un giorno fai a meno di noi, non c'è nulla da migrare.

![Elenco fatture in Dentalpin con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione lavora con serie configurabili e pagamenti parziali. L'invio allo SDI non è coperto.*

## Come funziona davvero la migrazione

Se dopo tutto questo vuoi provare, il passaggio si fa così e non diversamente:

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 di affinità si accetta in blocco, sul resto decidi tu.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
6. **Decidi chi emette le fatture dal giorno del passaggio**, e solo dopo metti il sistema vecchio in sola lettura.

> **Il passaggio 4 è dove falliscono quasi tutte le migrazioni.** Due studi non codificano mai i trattamenti allo stesso modo, e un'equivalenza indovinata in silenzio produce fatture sbagliate che nessuno scopre per mesi.

Il percorso completo sta in [questa guida](/it/blog/cambiare-gestionale-dentistico/), e quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), che è una pagina corta. Puoi anche [installarlo in tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/) e giudicare da solo.

## Fonti

Tutte consultate il 6 agosto 2026, riverificate il 5 settembre 2026.

- Piani Light, Smart ed Elite, contenuto di ciascuno e assenza di importi: [alfadocs.com/prezzi](https://www.alfadocs.com/prezzi). Alla riverifica i tre piani sono cambiati: il Sistema TS e la contabilità di base sono scesi nel piano Light, mentre la cartella clinica completa e la prenotazione online sono salite rispettivamente a Smart ed Elite; il testo sopra è stato corretto di conseguenza. Nessun importo pubblicato, invariato.
- "100% in cloud", "oltre 5.000 studi in tutta Italia", fatturazione elettronica, Sistema TS, FSE 2.0 e Scribe AI Powered: [alfadocs.com/dentisti](https://www.alfadocs.com/dentisti). Invariato alla riverifica. (Nota: la pagina dei prezzi mostra ora un contatore separato di "11.000+ Studi in Italia" e la pagina prodotto per dentisti parla altrove di "4.000+ utenti"; non abbiamo cambiato la cifra citata sopra perché la frase esatta da cui è tratta, su questa stessa pagina, non è cambiata.)
- Moduli, posizionamento e società indicata nel piè di pagina: [alfadocs.com/it/gestionale-per-dentisti](https://www.alfadocs.com/it/gestionale-per-dentisti). Invariato alla riverifica, inclusa la formula "AlfaDocs GmbH - German technology, Italian design".
- Licenza, codice e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/). Alla riverifica del 5 settembre 2026 risultano disponibili anche l'interfaccia in italiano e un piano Gestito di hosting a pagamento, entrambi assenti il 6 agosto 2026; il testo sopra è stato corretto di conseguenza.

Manca qualcosa, o in AlfaDocs è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato. Vale anche se sei di AlfaDocs.
