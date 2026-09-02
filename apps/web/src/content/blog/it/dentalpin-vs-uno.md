---
title: "Dentalpin e UNO di Dental Trey a confronto: licenza, canoni e cosa resta add-on"
description: "Confronto tra UNO (Dental Trey, gruppo Henry Schein One) e Dentalpin: licenza da 1.900 €, canoni pubblicati, Tessera Sanitaria, cartelle specialistiche e proprietà dei dati."
pubDate: 2026-09-02
tags: [confronto, uno, dental-trey, gestionale-dentistico]
---

Questo confronto serve a uno studio italiano che sta valutando UNO e vuole sapere dove finisce il prezzo esposto e dove comincia il preventivo. UNO è uno dei pochi gestionali in Italia che pubblica sia il costo della licenza sia i canoni mensili, quindi qui si può fare un confronto sui numeri invece che sulle impressioni.

> **Tutto quello che qui si dice di UNO viene da dentaltrey-uno.it**, consultato il 2 settembre 2026, ed è linkato in fondo con la URL. Quello che Dental Trey non pubblica non compare qui, e le cifre dei siti comparatori sono state lasciate fuori di proposito.

## In trenta secondi

**UNO è un gestionale italiano maturo, di Dental Trey s.r.l., dentro il gruppo Henry Schein ONE.** Il sito dichiara 8mila professionisti in Italia e oltre 30 anni di sviluppo di gestionali per dentisti. La parte clinica è la sua forza vera: cartella diagnosi, perio, igiene, implantare, gnatologica e ortodontica, ciascuna con la sua struttura.

**Dentalpin è open source e resta tuo.** Il codice è su GitHub, l'installazione va sul tuo server, non ci sono licenze da comprare né canoni, e tutto quello che fa l'interfaccia passa dall'API pubblica.

**La domanda che decide: quanto pesa nel tuo studio la profondità delle cartelle specialistiche e la conformità italiana?** Se lavori molto su parodontologia, implantologia e ortodonzia e vuoi che sia il gestionale a mandare le spese al Sistema Tessera Sanitaria, la risposta onesta oggi è UNO. Se cerchi possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

## Cosa è UNO

UNO è il gestionale della divisione PMS di Dental Trey, azienda che secondo la sua pagina *Chi Siamo* opera nel mercato italiano delle forniture dentali dal 1981 e ha cinque divisioni, di cui una è appunto il software gestionale.

**L'appartenenza al gruppo è dichiarata da loro, non dedotta.** La stessa pagina scrive che "Nel 2015 Dental Trey si è rafforzata grazie all'entrata nel gruppo Henry Schein Inc." e che "La divisione informatica Dental Trey è parte del gruppo internazionale Henry Schein ONE composto da una serie di software-houses che distribuiscono i loro gestionali su 8 mercati nazionali". È lo stesso gruppo di Dentrix, Dentally e Software of Excellence.

Sul lato clinico la pagina *Area Clinica* elenca una struttura a cartelle separate:

- **Cartella diagnosi**, con esame obiettivo, screening perio, carie, occlusale e ATM, sincronizzata con le cartelle specialistiche.
- **Cartella clinica**, con odontogramma interattivo, preventivi, progetti di terapia e diario clinico con dettatura vocale.
- **Cartella Perio**, che il loro sito dice sviluppata seguendo le indicazioni del Dr. Pierpaolo Cortellini, con sequenze di sondaggio personalizzabili, soglia della tasca configurabile e comparazione di due stati acquisiti in periodi diversi.
- **Cartella implantare**, sviluppata secondo le indicazioni del Dr. Mauro Merli, con librerie impianti personalizzabili.
- **Cartella orto**, **cartella gnatologica**, **Tutorial 3D** e **Gipsoteca** per archiviare i file .stl delle impronte digitali.

Questa è profondità clinica reale, ed è la ragione principale per cui uno studio sceglie UNO.

![Schermata iniziale di Dentalpin con gli appuntamenti del giorno, i pagamenti scaduti e i pazienti recenti](/screenshots/home.png)

*Il quadro della giornata in Dentalpin. L'interfaccia dello studio dimostrativo è in spagnolo, cosa che più avanti conta.*

### E i prezzi li pubblica, cosa rara in questo mercato

La pagina *Scegli il tuo Piano* espone due cose che quasi nessun concorrente italiano espone insieme: il costo della licenza e quello dei canoni.

- **Licenza d'uso** "a partire da € 1.900 per 3 posti di lavoro", con pagamento mensile dei canoni di assistenza e aggiornamento.
- **UNO Start-Up**, "Canone Start-Up da € 26,5/mese", massimo 4 posti di lavoro.
- **UNO Full**, "Canone Full da € 76/mese", posti di lavoro illimitati.
- **UNO Full Digital**, "Canone Full Digital da € 130/mese", posti di lavoro illimitati.

La stessa pagina cita la possibilità di un finanziamento di 12 mesi a tasso agevolato con prima rata dopo 3 mesi, oppure un leasing BNP a 36 mesi che comprende licenze, servizi e 3 anni di canone.

> **La riga da leggere nella tabella dei piani è l'asterisco.** Sulla loro pagina l'asterisco significa "Attivabile come add on", e su tutti e tre i piani lo portano sia "Fatturazione elettronica" sia "Invio telematico Tessera Sanitaria". I due adempimenti che in Italia sono quotidiani non sono compresi in nessun piano: si aggiungono. La pagina *Amministrazione* lo conferma parlando del "modulo opzionale per la gestione della Fatturazione Elettronica".

Altre voci marcate come add-on su tutti i piani: conservazione sostitutiva, APP segreteria digitale, firma elettronica SmartSign, My Business Cloud completo, backup Basic e Pro. Nel piano Start-Up sono add-on o assenti anche il magazzino, la sterilizzazione, le cartelle igiene, parodontale e implantare, il Tutorial 3D e la Gipsoteca.

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, nel cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. In opzione si aggiungono parodontogramma, report, un agente IA che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica. Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani da cui sbloccare i moduli.

Quello che in Italia oggi **non** c'è: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, e l'interfaccia esiste in inglese e spagnolo ma non in italiano.

![Parodontogramma di Dentalpin con i sei siti di sondaggio per ogni dente](/screenshots/periodontogram.png)

*Il parodontogramma registra sei siti per dente. UNO struttura la stessa area in cartelle separate per perio, igiene e implantologia.*

## Fianco a fianco

| | UNO (Dental Trey) | Dentalpin |
|---|---|---|
| Modello | Licenza d'uso + canone | Open source (BSL 1.1) |
| Prezzo licenza pubblicato | ✓ Da 1.900 € per 3 posti di lavoro | ✓ 0 €, nessuna licenza da comprare |
| Canone mensile pubblicato | ✓ Da 26,5 €, 76 € e 130 €/mese | ✓ Nessun canone |
| Posti di lavoro | ~ Max 4 su Start-Up, illimitati su Full | ✓ Nessun limite |
| Fatturazione elettronica (SDI) | ~ Modulo opzionale, add-on su tutti i piani | ✗ Non presente |
| Sistema Tessera Sanitaria | ~ "Invio telematico" add-on su tutti i piani | ✗ Non presente |
| Cartelle specialistiche | ✓ Perio, igiene, implantare, orto, gnatologica | ✗ Cartella unica più parodontogramma |
| Base installata | ✓ 8mila professionisti in Italia | ✗ Dal 2026 |
| Anni sul mercato | ✓ Oltre 30 anni di gestionali per dentisti | ✗ Dal 2026 |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese e spagnolo |
| Assistenza telefonica | ✓ Numero verde, teleassistenza e rete on-site | ✗ Community su GitHub |
| Connettori di migrazione | ✓ Undici gestionali elencati sul loro sito | ~ Importazione da export generico |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ Non dichiarato sulle pagine consultate, i KPI stanno in cloud | ✓ Sul tuo server, sempre |

La riga "non documentata" dice esattamente questo e niente di più: non l'abbiamo trovata sulle pagine pubbliche che abbiamo letto. Se stai valutando UNO sul serio, è una domanda da fare a loro, non una conclusione da trarre da qui.

## Scegli UNO se

- **Il tuo studio vive di parodontologia, implantologia o ortodonzia.** Le cartelle specialistiche di UNO sono strutturate una per una, con nomi e protocolli, e noi abbiamo una cartella clinica generale più il parodontogramma. Non è la stessa cosa e non fingiamo che lo sia.
- **Vuoi che sia il gestionale a mandare le spese al Sistema Tessera Sanitaria.** Loro lo offrono come add-on, noi non lo facciamo affatto. In Italia questo da solo può chiudere il discorso.
- **Ti serve un'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Vuoi un numero verde e qualcuno che venga in studio.** La loro pagina *Assistenza* pubblica numero verde, teleassistenza e una rete di consulenti sul territorio. Da noi risponde la community su GitHub.
- **Stai migrando da un gestionale italiano diffuso.** Pubblicano i connettori esistenti, fra cui Xdent, Orisdent Q e Orisdent EVO, e un Conversion Team che controlla i dati prima del passaggio. È un vantaggio concreto.
- **Vuoi contabilità, assicurazioni e magazzino nello stesso programma.** La contabilità noi non la facciamo.

Se tre di questi sei punti ti riguardano, la risposta onesta è UNO.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **Non vuoi che il conto cresca con lo studio.** Nessuna licenza per posto di lavoro, nessun canone, nessun add-on da attivare per arrivare a quello che ti serve.
- **La fatturazione la gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica, senza ticket e senza licenze aggiuntive.
- **Ti manca un modulo.** Puoi costruirlo, e resta al suo posto dopo un aggiornamento.

> **Provaci prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e listino.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura delle prestazioni riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
6. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili e pagamenti parziali. L'invio allo SDI non è coperto.*

Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

## Fonti

Tutte consultate il 2 settembre 2026.

- Claim sui professionisti, oltre 30 anni di sviluppo e ragione sociale Dental Trey s.r.l.: [dentaltrey-uno.it](https://www.dentaltrey-uno.it/)
- Licenza da 1.900 €, canoni dei tre piani, add-on e limiti di posti di lavoro: [dentaltrey-uno.it/scegli-il-tuo-piano](https://www.dentaltrey-uno.it/scegli-il-tuo-piano/)
- Ingresso nel gruppo Henry Schein nel 2015 e appartenenza a Henry Schein ONE: [dentaltrey-uno.it/chi-siamo](https://www.dentaltrey-uno.it/chi-siamo/)
- Cartelle diagnosi, perio, igiene, implantare, orto e gnatologica, Gipsoteca e odontogramma: [dentaltrey-uno.it/software-per-dentisti/area-clinica](https://www.dentaltrey-uno.it/software-per-dentisti/area-clinica/)
- Modulo opzionale di fatturazione elettronica, Tessera Sanitaria e gestione assicurazioni: [dentaltrey-uno.it/software-per-dentisti/amministrazione](https://www.dentaltrey-uno.it/software-per-dentisti/amministrazione/)
- Connettori di migrazione e dati trasferiti: [dentaltrey-uno.it/conversione-dati](https://www.dentaltrey-uno.it/conversione-dati/)
- Numero verde, teleassistenza e assistenza on-site: [dentaltrey-uno.it/assistenza](https://www.dentaltrey-uno.it/assistenza/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e [dentalpin.com/it/prezzi](/it/prezzi/)

Manca qualcosa, o in UNO è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
