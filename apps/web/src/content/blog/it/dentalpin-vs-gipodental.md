---
title: "Dentalpin e GipoDental a confronto: due modi opposti di far girare uno studio"
description: "Confronto tra GipoDental (Gruppo Docplanner) e Dentalpin: piani, prezzi, fattura elettronica, invio al Sistema TS, integrazione MioDottore e proprietà dei dati."
pubDate: 2026-08-06
tags: [confronto, gipodental, gipo, gestionale-dentistico]
---

Questo confronto è per studi italiani che stanno guardando GipoDental e vogliono sapere cosa cambia scegliendo un gestionale aperto, e per chi deve dare un parere tecnico per conto dello studio. La risposta breve: GipoDental copre gli adempimenti italiani e la visibilità online, Dentalpin no, e in cambio ti lascia il codice e i dati.

> **Tutto quello che qui si dice di GipoDental viene da gipo.it**, consultato il 6 agosto 2026, con le URL in fondo. Quello che GIPO non pubblica non compare qui. I siti comparatori li abbiamo lasciati fuori di proposito: si contraddicono tra loro e nessuno di loro è GIPO.

## In trenta secondi

**GipoDental è un gestionale cloud dentro un gruppo che possiede anche il portale dei pazienti.** Il loro sito lo presenta come "Il gestionale semplice per studi dentistici", con odontogramma e piani di cura, fatturazione elettronica, invio al sistema per le spese sanitarie e integrazione con MioDottore per le prenotazioni online. Assistenza, aggiornamenti e comunicazioni ai pazienti sono dichiarati senza costi aggiuntivi.

**Dentalpin è open source e resta tuo.** Il codice sta su GitHub, l'installazione va sul tuo server, il nucleo non costa niente e tutto quello che fa l'interfaccia lo fa anche l'API pubblica. Sul lato clinico c'è tutto: odontogramma, parodontogramma, piano di cura, preventivi, fatture, report.

**La domanda che decide: quanto vale per te arrivare ai pazienti nuovi?** Se la risposta è "molto", GipoDental sta dentro lo stesso gruppo di MioDottore e quel pezzo lo copre. Se i pazienti li hai già e quello che cerchi è possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

## Cosa è GipoDental

GipoDental è il gestionale per studi dentistici di GIPO, in cloud, con aggiornamenti continui. La linea principale dell'azienda è GipoNext, "Il gestionale medico che evolve insieme al tuo centro", rivolto a poliambulatori e studi medici; GipoDental è la versione per l'odontoiatria.

Sulle pagine di prodotto elencano, tra le altre cose:

- **Odontogramma e piani di cura**, insieme alla fatturazione, nel piano di ingresso.
- **Fatturazione elettronica** e "Invio sistema 730", cioè le spese sanitarie che ogni studio italiano deve trasmettere.
- **Lettura della tessera sanitaria** per l'anagrafica del paziente.
- **Firma digitale su tablet** per i documenti.
- **Fatturazione automatica con listini predefiniti.**
- **Campagne email e SMS** verso i pazienti.
- **Conservazione digitale a norma**, che sta nel piano superiore.

> **GIPO fa parte del Gruppo Docplanner, e questo cambia la natura del prodotto.** La ragione sociale sul loro sito è Docplanner Italy Srl, con sede a Roma, e lo stesso gruppo possiede MioDottore. GipoDental è integrato con MioDottore per le prenotazioni online dal sito dello studio e dai social. Non è un difetto, è la differenza principale: stai comprando un gestionale che è anche un canale di acquisizione pazienti.

![Cartella del paziente con odontogramma, allerte cliniche, piano di cura attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*L'odontogramma dentro la cartella del paziente, con le allerte cliniche in alto e il piano di cura attivo di fianco.*

### I piani, e cosa non dicono

GipoDental si vende a piani, e le pagine dei prezzi elencano cosa c'è dentro ciascuno:

- **Starter**: odontogramma e piani di cura, fatturazione, integrazione portale MioDottore, invio sistema 730, assegnazione.
- **Plus**: tutto Starter, più gestione cassa, prenotazione wizard, gestione compensi, referti, gestione magazzino e conservazione digitale a norma.

Su GipoNext i piani sono tre, Starter, Plus e VIP.

> **GIPO ha una pagina dei prezzi e non ci mette dei prezzi.** Sia su GipoDental sia su GipoNext la cifra è sostituita da "Prezzo calcolato individualmente", e i pulsanti portano a parlare con un consulente. Vale la pena dirlo con precisione, perché è diverso dal non avere affatto una pagina: sai quali funzioni stanno in quale piano, non sai quanto costa nessuno dei due. Quello che dichiarano incluso senza sovrapprezzo è che "Non sono previsti costi aggiuntivi per assistenza, aggiornamenti e comunicazioni ai pazienti".

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, sul cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. Si aggiungono parodontogramma, report, un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è, ed è meglio saperlo subito: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, nessuna conservazione digitale a norma, nessuna lettura della tessera sanitaria, nessun portale di prenotazione con un pubblico suo, e l'interfaccia esiste in inglese e spagnolo ma non in italiano.

## Fianco a fianco

| | GipoDental | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale a piani | Open source (BSL 1.1) |
| Proprietà | Docplanner Italy Srl | Progetto indipendente |
| Prezzo pubblicato | ✗ "Prezzo calcolato individualmente" | ✓ 0 €, tutto incluso |
| Funzioni divise per piano | ✗ Starter e Plus | ✓ Tutti i moduli inclusi |
| Fatturazione elettronica | ✓ Elencata tra le funzioni | ✗ Non presente |
| Invio spese sanitarie (sistema 730) | ✓ Elencato nel piano Starter | ✗ Non presente |
| Conservazione digitale a norma | ✓ Nel piano Plus | ✗ Non presente |
| Lettura tessera sanitaria | ✓ Sì | ✗ Non presente |
| Prenotazioni online con portale | ✓ Integrazione MioDottore, stesso gruppo | ✗ Non presente |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese e spagnolo |
| Assistenza e aggiornamenti | ✓ Dichiarati senza costi aggiuntivi | ~ Community su GitHub |
| Distribuzione | Cloud, sui loro sistemi | Sul tuo server, o sul cloud che scegli |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ Sul loro cloud | ✓ Sul tuo server, sempre |

La riga con "non documentata" dice esattamente questo e niente di più: non l'abbiamo trovata sulle pagine pubbliche che abbiamo letto il 6 agosto 2026. Se stai valutando GipoDental sul serio, è una domanda da fare a loro, non una conclusione da trarre da qui.

## Scegli GipoDental se

- **Vuoi che gli adempimenti partano dal gestionale.** Fattura elettronica e invio delle spese sanitarie sono il lavoro quotidiano di uno studio italiano, e loro li coprono. Noi no, ed è la ragione principale per cui questo confronto esiste.
- **I pazienti nuovi sono il tuo problema, non l'organizzazione.** L'integrazione con MioDottore mette lo studio davanti a persone che stanno già cercando un dentista. Non abbiamo niente di paragonabile, e nessun software autoalloggiato ce l'ha.
- **Ti serve l'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Vuoi la conservazione digitale a norma dentro il prodotto.** È nel loro piano Plus, e da noi non c'è.
- **Non vuoi gestire un server.** Il loro è cloud, si aggiorna da solo, e assistenza e aggiornamenti sono dichiarati dentro il prezzo. Da noi il server è tuo, con tutto quello che comporta.

Se tre di questi cinque punti ti riguardano, la risposta onesta è GipoDental. Per uno studio italiano che parte oggi sono tre punti facili da raggiungere.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **Gli adempimenti li gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi sapere quanto costa prima di parlare con qualcuno.** Il nostro prezzo sta su una pagina; per il loro serve un consulente.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica, documentata con OpenAPI. Nessun ticket e nessuna licenza in più.
- **Non vuoi che le funzioni stiano dietro un piano.** Magazzino, referti e cassa da noi non sono un livello superiore, ci sono e basta.

![Cartella del paziente, scheda attività: allerte cliniche, piano attivo e cronologia filtrabile per visite, trattamenti, movimenti e comunicazioni](/screenshots/patient-timeline.png)

*La cronologia del paziente filtrabile per visite, trattamenti, movimenti economici e comunicazioni.*

> **Provalo prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia dei tuoi dati.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Chiedi anche cosa succede alle prenotazioni online.** Se arrivano da un portale del fornitore, quel canale non si sposta con i dati, e va sostituito prima e non dopo.
3. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
4. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
5. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
6. **Decidi prima come gestirai fattura elettronica e spese sanitarie.** Se oggi escono dal gestionale, dopo il passaggio non escono più da lì, e va concordato con il commercialista prima della migrazione.
7. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
8. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI e al Sistema TS non è coperto.*

Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

## Fonti

Tutte consultate il 6 agosto 2026.

- GipoDental, funzioni, cloud, integrazione MioDottore e assistenza senza costi aggiuntivi: [gipo.it/it/prodotto/il-software/gipodental](https://gipo.it/it/prodotto/il-software/gipodental)
- Piani Starter e Plus di GipoDental e "Prezzo calcolato individualmente": [gipo.it/prezzi-gipodental](https://gipo.it/prezzi-gipodental)
- GipoNext, piani Starter, Plus e VIP e la stessa formula sul prezzo: [gipo.it/prezzi](https://gipo.it/prezzi)
- Ragione sociale Docplanner Italy Srl e gamma di prodotti: [gipo.it](https://www.gipo.it/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/)

Manca qualcosa, o in GipoDental è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
