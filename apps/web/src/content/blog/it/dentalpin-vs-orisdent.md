---
title: "Dentalpin e OrisDent Q a confronto: cosa copre davvero ciascuno dei due"
description: "Confronto tra OrisDent Q di OrisLine e Dentalpin: fattura elettronica, Sistema TS, suite di prodotti, prezzi pubblicati e proprietà dei dati. Con quello che noi non facciamo."
pubDate: 2026-08-08
tags: [confronto, orisdent, orisline, gestionale-dentistico]
---

Questo confronto serve a uno studio italiano che sta valutando OrisDent Q e si chiede se abbia senso guardare anche fuori dai gestionali odontoiatrici tradizionali. La risposta breve sta nelle prossime righe: se ti serve che il software emetta la fattura elettronica e invii le spese al Sistema Tessera Sanitaria, oggi Dentalpin quel pezzo non lo fa e OrisDent Q sì.

> **Tutto quello che qui si dice di OrisDent Q viene da orisline.com**, consultato l'8 agosto 2026, con le URL in fondo. Quello che OrisLine non pubblica non compare qui. Le cifre dei siti comparatori le abbiamo lasciate fuori di proposito: si contraddicono tra loro e nessuna viene da OrisLine.

## In trenta secondi

**OrisDent Q non è un programma, è una linea di prodotti.** Sul suo sito OrisLine pubblica il gestionale di studio (OrisDent Q, disponibile "in modalità desktop e in cloud"), la versione interamente cloud OrisDent Air, il gestionale di laboratorio OrisLab Q, la cefalometria OrisCeph Q, la dematerializzazione OrisPaperLess, la comunicazione al paziente OrisCommunication, la prenotazione online, il programma di fidelizzazione MyEduco, i due canali verso il laboratorio My.Doc e MyLab, la sicurezza OrisSafe e l'assistente di intelligenza artificiale Maia. Sul piano contabile e fiscale italiano è completo: fatture elettroniche attive e passive e invio delle spese al Sistema TS.

**Dentalpin è open source e resta tuo.** Il codice sta su GitHub, l'installazione va sul tuo server, il nucleo non costa niente e tutto quello che fa l'interfaccia lo fa anche l'API pubblica. Sul lato clinico è completo: odontogramma, parodontogramma, piano di cura, preventivi, fatture e report.

**La domanda che decide: quanto del tuo lavoro quotidiano vive nella parte fiscale e nel rapporto con il laboratorio?** Se la risposta è "molto", oggi la risposta è OrisDent Q e non noi. Se quella parte la gestisci già con il commercialista e quello che cerchi è possesso del codice e dei dati senza canoni, il resto di questo testo ti riguarda.

## Cosa è OrisDent Q

OrisDent Q è il gestionale per studi odontoiatrici della linea OrisLine, che sul proprio sito si presenta come "il software innovativo e moderno per potenziare il tuo Studio Dentistico". Il sito indica che "OrisDent è disponibile in diverse versioni e in modalità desktop e in cloud", quindi la scelta tra installazione locale e cloud la fai dentro la loro gamma.

Dalla cartella clinica, scrive OrisLine, "è possibile gestire l'intero piano di trattamento del paziente, dal preventivo alla fatturazione", con cartelle specialistiche odontoiatrica, ortodontica, parodontale e gnatologica. La firma del paziente si raccoglie con la "Firma Elettronica Avanzata".

Sul lato amministrativo il sito è esplicito su tre cose che in Italia pesano ogni giorno:

- **Contabilità.** "OrisDent Q comprende una sezione contabile completa", con piani di pagamento rateali e scadenze visibili giorno per giorno.
- **Fatturazione elettronica.** "Gestisce le fatture elettroniche attive e passive", quindi non solo il ciclo attivo.
- **Sistema Tessera Sanitaria.** "Invia le spese al sistema TS", che è l'adempimento che ogni studio italiano si porta dietro.

Ci sono poi due cose che vale la pena riconoscere per nome, perché non sono ovvie nel resto del mercato.

**Il Passaporto Implantare.** Una loro pagina del 21 dicembre 2023 descrive un registro dei codici UDI dentro OrisDent Q: si possono "registrare i codici UDI dei dispositivi nel momento in cui arrivano in Studio", "associare i codici UDI ai pazienti" e "creare in modo semplice e veloce il Passaporto Implantare", con caricamento "in modo automatico e senza rischio di errori grazie al lettore bar code e Qr code". La stessa pagina indica che la funzione è già disponibile e senza costi aggiuntivi.

**Maia.** Una pagina del 16 aprile 2024 la presenta come "il primo servizio di Intelligenza Artificiale Generativa dedicato agli odontoiatri", "integrato senza costi aggiuntivi per tutti gli utenti", su chat, per formazione sul software, supporto tecnico e orientamento normativo.

> **OrisLine non pubblica i prezzi.** Sulle pagine di prodotto e di gamma consultate l'8 agosto 2026 non compare nessuna tariffa: i pulsanti sono "Richiedi info" e "Richiedi demo". Non è una critica, è la norma quasi ovunque in questo settore, ma significa che il costo lo scopri solo dopo aver parlato con loro.

Una cosa da dire per correttezza, perché la trovi nel piè di pagina del loro sito e non nella comunicazione di prodotto: OrisLine è il marchio di **Henry Schein One Italia Srl**, con sede in Via Giovanni Amendola 7, Cernusco sul Naviglio (MI), P. IVA IT11654690152. Non cambia nulla del prodotto, cambia con chi firmi.

![Cartella del paziente con odontogramma, allarmi clinici, piano attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella clinica in Dentalpin: odontogramma, allarmi, piano di cura attivo e prossimo appuntamento nella stessa schermata.*

## Cosa è Dentalpin

Dentalpin è un gestionale pubblicato sotto Business Source License 1.1: gratuito per qualsiasi studio, leggibile, forkabile, e quattro anni dopo ogni release la versione passa automaticamente ad Apache 2.0. Si installa con un `docker compose` sul tuo server, nel cloud che scegli o su una macchina in studio.

Il nucleo comprende agenda, pazienti, odontogramma, cartella clinica, preventivi e fatturazione. In opzione si aggiungono parodontogramma, report, un agente di intelligenza artificiale che esegue le stesse operazioni dell'interfaccia e si ferma a chiedere conferma prima di ogni scrittura, e WhatsApp come canale di notifica.

Non ci sono canoni per riunito, per odontoiatra o per paziente, e non ci sono piani da cui sbloccare funzioni: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è, ed è meglio saperlo prima di leggere la tabella:

- **Nessuna emissione di fattura elettronica verso lo SDI**, né sul ciclo attivo né su quello passivo.
- **Nessun invio delle spese al Sistema Tessera Sanitaria.**
- **Nessun modulo di laboratorio** e nessun canale verso l'odontotecnico.
- **Nessun registro UDI** e nessun Passaporto Implantare.
- **L'interfaccia dell'applicazione non esiste in italiano.** Oggi è in inglese e spagnolo, con altre lingue in roadmap e aperte come contributo della community sul [repository](https://github.com/martinezsalmeron/dentalpin).

## Fianco a fianco

| | OrisDent Q | Dentalpin |
|---|---|---|
| Modello | Licenza commerciale | Open source (BSL 1.1) |
| Prezzo pubblicato | ✗ Non pubblicato (consultato l'8/8/2026) | ✓ 0 €, tutto incluso |
| Fatturazione elettronica (SDI) | ✓ Attiva e passiva | ✗ Non presente |
| Sistema Tessera Sanitaria | ✓ Invio delle spese | ✗ Non presente |
| Contabilità | ✓ "Sezione contabile completa" | ✗ Non la facciamo |
| Registro UDI e Passaporto Implantare | ✓ Incluso, senza costi aggiuntivi | ✗ Non presente |
| Laboratorio odontotecnico | ✓ OrisLab Q, MyLab, My.Doc | ✗ Nessun modulo |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese e spagnolo |
| Intelligenza artificiale | ✓ Maia, inclusa senza costi aggiuntivi | ✓ Agente che conferma prima di scrivere |
| Desktop e cloud | ✓ Entrambi, secondo il loro sito | ~ Solo web, sul server che scegli tu |
| Cartelle specialistiche | ✓ Odontoiatrica, ortodontica, parodontale, gnatologica | ~ Odontogramma e parodontogramma |
| Codice sorgente | ✗ No | ✓ Su GitHub, per intero |
| API pubblica | ~ Non documentata sulle pagine consultate | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ Locale o cloud, secondo il loro sito | ✓ Sul tuo server, sempre |

Le due righe con "non documentata" e "secondo il loro sito" dicono esattamente questo e niente di più: non l'abbiamo trovato sulle pagine pubbliche che abbiamo letto. Se stai valutando OrisDent Q sul serio, sono due domande da fare a loro, non due conclusioni da trarre da qui.

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*La fatturazione in Dentalpin lavora con serie configurabili, pagamenti parziali e stati. L'invio allo SDI e al Sistema TS non è coperto.*

## Scegli OrisDent Q se

- **Vuoi che sia il gestionale a chiudere il cerchio fiscale.** Fattura elettronica attiva e passiva e invio al Sistema TS dentro lo stesso programma. È la ragione principale per cui questo confronto esiste, e noi lì non ci siamo.
- **Metti impianti e vuoi il registro UDI dove metti tutto il resto.** Un registro con lettore bar code dentro la cartella è un adempimento in meno gestito a parte.
- **Lavori molto con il laboratorio.** OrisLab Q, MyLab e My.Doc sono un pezzo di catena che noi non copriamo affatto.
- **Ti serve un'interfaccia in italiano oggi.** La nostra non lo è ancora, e non c'è modo di girarci intorno.
- **Vuoi un fornitore unico con un numero da chiamare.** Henry Schein One Italia è una struttura commerciale con assistenza e formazione; da noi risponde la community su GitHub.

Se tre di questi cinque punti ti riguardano, la risposta onesta è OrisDent Q. Preferiremmo essere la risposta a tutto, ma in Italia oggi non lo siamo.

## Scegli Dentalpin se

- **Il possesso del codice e dei dati conta più delle funzioni del primo giorno.** Il database è tuo, il codice si legge, e se domani noi non ci fossimo più la tua installazione continua a girare.
- **La parte fiscale la gestisci già altrove**, con il commercialista o con un gestionale contabile separato, e dal software clinico ti serve la parte clinica.
- **Vuoi integrare.** Tutto quello che fa l'interfaccia passa dalla stessa API pubblica. Nessun ticket, nessuna autorizzazione, nessuna licenza in più.
- **Non vuoi che il costo cresca con lo studio.** Nessun canone per riunito, per odontoiatra o per paziente, e nessun piano da cui sbloccare le funzioni che ti servono.
- **Vuoi sapere quanto costa prima di parlare con un commerciale.** Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

> **Provalo prima di disdire qualsiasi cosa.** La demo si apre senza registrazione e senza lasciare l'email, e un'installazione tua sta in piedi in [tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/). L'errore costoso non è cambiare gestionale: è cambiarlo senza aver provato il passaggio su una copia dei tuoi dati.

## Come funziona davvero la migrazione

1. **Chiedi l'export completo al fornitore attuale** prima di disdire qualsiasi cosa: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare.
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 si accetta in blocco, sul resto decidi tu. È il passaggio in cui le migrazioni falliscono.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri.
6. **Decidi prima chi emette le fatture.** Se il vecchio gestionale faceva SDI e Sistema TS, quel pezzo deve avere una casa nuova dal primo giorno, non dal primo controllo.
7. **Tieni il sistema vecchio in sola lettura** finché non sei sicuro. Il percorso completo è in [questa guida](/it/blog/cambiare-gestionale-dentistico/).

![Preventivo con trattamenti, totali, validità e piano di cura collegato](/screenshots/budgets.png)

*Un preventivo in Dentalpin: trattamenti, totali, validità e il piano di cura a cui è collegato.*

## Fonti

Tutte consultate l'8 agosto 2026, salvo la data indicata per le due pagine di news.

- Gamma di prodotti, ragione sociale e P. IVA nel piè di pagina: [orisline.com](https://orisline.com/it/) e [orisline.com/it/contatti](https://orisline.com/it/contatti/)
- OrisDent Q, moduli, contabilità, fatture elettroniche attive e passive, invio al Sistema TS, cartelle specialistiche e Firma Elettronica Avanzata: [orisline.com/it/software-per-dentisti-orisdent-q](https://orisline.com/it/software-per-dentisti-orisdent-q/)
- Versioni desktop e cloud e pagina di gamma per studi: [orisline.com/it/software-studio-dentistico](https://orisline.com/it/software-studio-dentistico/)
- OrisDent Air, gestionale interamente in cloud: [orisline.com/it/gestionale-studio-dentistico-cloud](https://orisline.com/it/gestionale-studio-dentistico-cloud/)
- Registro UDI e Passaporto Implantare, pagina del 21 dicembre 2023: [orisline.com/it/news/orisdent-gestisce-gia-il-passaporto-implantare](https://orisline.com/it/news/orisdent-gestisce-gia-il-passaporto-implantare/)
- Maia, pagina del 16 aprile 2024: [orisline.com/it/news/maia-assistente-digitale-per-lo-studio-dentistico](https://orisline.com/it/news/maia-assistente-digitale-per-lo-studio-dentistico/)
- Licenza e funzionalità di Dentalpin: [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) e la [pagina dei prezzi](/it/prezzi/)

Manca qualcosa, o in OrisDent è cambiato qualcosa che ci è sfuggito? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions): correggiamo il testo e diciamo cosa abbiamo cambiato.
