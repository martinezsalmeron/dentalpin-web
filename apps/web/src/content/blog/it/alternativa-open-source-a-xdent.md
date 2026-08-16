---
title: "Alternativa open source a XDENT: cosa esiste davvero"
description: "Quali alternative open source a XDENT esistono oggi per uno studio italiano, con la licenza di ciascuna verificata sul sito del suo produttore."
pubDate: 2026-08-16
tags: [confronto, xdent, open-source, gestionale-dentistico]
---

La lista delle alternative open source a XDENT è corta, e nell'ultimo anno si è accorciata ancora: Open Dental, che era la risposta ovvia, ha smesso di essere open source nella versione 24.4, e a dirlo è la sua stessa pagina di licenza.

Noi facciamo Dentalpin, che è una delle opzioni elencate qui sotto, quindi neutrali non siamo. Precisi sì.

> **Come è fatto questo confronto.** Tutto quello che qui si dice di XDENT viene da pagine pubblicate da CompuGroup Medical su xdent.it, e tutto quello che si dice delle altre opzioni viene dal sito di chi le produce, con link e data in fondo. Nessun dato arriva da siti comparatori: si contraddicono tra loro e alcuni li scrivono i concorrenti.

## In trenta secondi

**XDENT è il prodotto maturo, e su questo non c'è discussione.** Il suo sito dichiara più di 8.000 dentisti che lo usano ogni giorno in Italia, vent'anni di mercato e un numero di assistenza pubblicato. Nessuna alternativa open source ha niente di simile.

**Se per open source intendi "poter leggere e conservare il codice", oggi restano due prodotti dentali vivi**: Apexo, sotto GPLv3, e Dentalpin, sotto BSL 1.1 che diventa Apache 2.0 dopo quattro anni. Entrambi si installano sul tuo server e nessuno dei due chiede un canone di licenza.

C'è però una domanda che in Italia viene prima di tutte le altre: **ti serve che sia il gestionale a mandare le fatture allo SDI e le spese al Sistema Tessera Sanitaria?** Se la risposta è sì, oggi nessuna delle opzioni open source di questa pagina lo fa, e il resto del confronto non ti riguarda. XDENT lo offre, come add-on a pagamento sopra il piano base.

![Cartella del paziente in Dentalpin con l'odontogramma, gli avvisi clinici, il piano di cura attivo e il prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella del paziente in Dentalpin, con i dati dello studio dimostrativo che l'installazione porta con sé.*

## Cosa è XDENT e perché si cerca un'alternativa

Gestionale odontoiatrico italiano di CompuGroup Medical. La sua home lo presenta come "l'unico gestionale per studi dentistici nativo per Mac e Windows, ora con esclusive funzioni di AI" e propone "una soluzione modulare, scalabile e disponibile anche in cloud".

Le cifre che pubblica su di sé sono solide: "più di 8.000 dentisti in studi, centri e network dentali in Italia" e, poco sotto, "da 20 anni più di 8.000 dentisti hanno scelto XDENT". Il gruppo dichiara 30.000 clienti in Italia fra medici di base, farmacie, dentisti e specialisti.

**E pubblica un prezzo di partenza**, cosa rara in questo mercato e che va detta prima di ogni critica. Il PIANO START costa "€ 20 al mese" e comprende Planning Mono-Operatore, Cartella Clinica, Anamnesi e Diario Clinico, Preventivi e Documenti, Fatturazione Paziente, Prima Nota, Gestione Immagini e Status.

Sopra ci sono PLUS, che aggiunge Planning Multi-Operatore, Esame Obiettivo, Schede Specialistiche, Comunicazioni e Richiami, Magazzino e Reportistica, e CLINIC, segnalato come "Più richiesto", che aggiunge Contabilità Avanzata, Prescrizioni e Ordini, Chat Interna, Magazzino Avanzato e Reportistica Avanzata. Per quei due il prezzo non è esposto.

> **La stessa pagina elenca come "Funzionalità Aggiuntive" cose che molti danno per incluse.** Fra gli add-on ci sono "Versione Cloud", "Invio al Sistema TS e SDI", "App Smartphone e Tablet", "Agenda e Prenotazione Online", "Firma Digitale (CGM E-SIGN)", "Integrazione WhatsApp" e "Servizio di Backup Remoto" (consultato il 16 agosto 2026). Sono esattamente le voci da chiedere a preventivo, perché il conto reale di uno studio si decide lì e non sui 20 euro del piano base.

Chi cerca un'alternativa di solito parte da uno di questi tre punti: il costo che cresce add-on dopo add-on, il fatto che il codice e lo schema del database non siano leggibili, oppure la volontà di tenere il database su una macchina propria.

## Cosa significa open source quando cambi gestionale

Sotto la stessa etichetta si vendono tre cose diverse, e conviene separarle prima di guardare i prodotti:

- **La licenza.** È l'unica cosa che decide se puoi leggere, modificare e conservare il codice qualunque cosa succeda al produttore. È anche quella che può cambiare da un anno all'altro, come si è appena visto.
- **Il prezzo.** Gratuito e open source non sono la stessa cosa. Esiste software proprietario gratuito, ed esiste software libero per cui si paga l'assistenza.
- **I dati.** Autoospitare significa che il database sta su una macchina che controlli tu. È indipendente dalla licenza, ed è quasi sempre la cosa che cerca davvero chi fa questa domanda.

Se il problema è la fattura mensile, il criterio è il prezzo. Se il problema è cosa succede alle cartelle cliniche il giorno in cui il fornitore chiude o cambia listino, il criterio sono la licenza e l'autoospitamento.

## Le alternative open source che esistono oggi

- **Apexo.** Gestionale dentale "open-source, offline-first", licenziato sotto GNU GPLv3 secondo il suo stesso sito. Elenca calendario, cartelle dei pazienti, statistiche, sincronizzazione, funzionamento offline e backup, e dichiara "Global ready: EN, AR, ES, PL, KU". L'italiano non è tra le lingue elencate, e nelle pagine consultate non compare né la fatturazione elettronica né l'odontogramma, quindi sono due cose da verificare prima di adottarlo.
- **OpenMolar.** Progetto GPLv3 nato da un dentista scozzese, e l'unico di questa lista che dichiara da solo il proprio stato. Il suo sito dice che OpenMolar1 "is no longer utilised in practice, although development continues as a hobby project" e che OpenMolar2 "is effectively a dead project as it has not been ported to Python3 or Qt5". Il copyright in fondo alla pagina si ferma al 2020. Sul codice si può ancora studiare, uno studio non ci si appoggia.
- **Open Dental.** Per anni è stata la risposta a questa domanda, e non lo è più. Resta un prodotto serio ed è uno dei pochissimi del settore a pubblicare il listino: 199 dollari al mese per sede con contratto di 12 mesi, che coprono tutti i computer di quella sede e fino a 3 dentisti, assistenza telefonica e aggiornamenti inclusi.
- **GNU Health.** Software libero per la sanità, che il progetto descrive come "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics". Nelle pagine consultate non descrive la gestione di uno studio odontoiatrico, quindi non sostituisce XDENT per quanto la licenza sia quella giusta.
- **Dentalpin.** Il nostro, e per questo sta in una sezione a parte e nella tabella, dove si può controllare riga per riga.

> **"In version 24.4, the Open Dental license changed from open source GPL to proprietary."** È la frase di Open Dental sulla propria pagina di licenza. Aggiungono che il cambio non ha toccato i clienti ("There was no change in price, support, database access, or how the software was used") e che ha riguardato solo chi compilava il codice sorgente. Il prodotto è buono, ma un'alternativa open source non lo è più.

## Cosa è Dentalpin

Gestionale odontoiatrico pubblicato sotto Business Source License 1.1, che diventa automaticamente Apache 2.0 quattro anni dopo ogni release. Scarichi il codice, lo installi dove vuoi con un `docker compose` e non paghi licenza per riunito, per odontoiatra o per paziente.

Sul lato clinico c'è il ciclo completo: agenda, anagrafica, odontogramma, parodontogramma, cartella clinica, piani di cura, preventivi, fatture, pagamenti, richiami e report. C'è anche un assistente IA che esegue le stesse operazioni dell'interfaccia, con i permessi dell'utente che lo usa e una conferma richiesta prima di ogni scrittura. Non ci sono piani: i moduli ci sono tutti.

Quello che in Italia oggi **non** c'è va detto qui e non in fondo: nessuna emissione di fattura elettronica verso lo SDI, nessun invio delle spese al Sistema Tessera Sanitaria, e l'interfaccia esiste in inglese e spagnolo ma non in italiano. La traduzione è aperta come contributo della community, ma oggi non è rilasciata.

È un prodotto del 2026 e si vede. Conta, e ci torniamo nella tabella.

![Piano di cura in Dentalpin suddiviso nelle sue fasi, con i trattamenti di ciascuna](/screenshots/treatment-plan.png)

*Un piano di cura diviso in fasi: ogni fase porta i suoi trattamenti e il suo importo.*

## Fianco a fianco

Solo righe verificabili. Dove non c'è un dato pubblico, è scritto.

| | XDENT | Dentalpin |
|---|---|---|
| Licenza | Commerciale, proprietaria | Open source (BSL 1.1 → Apache 2.0 dopo 4 anni) |
| Codice sorgente | ✗ Non pubblicato | ✓ Su GitHub, per intero |
| Prezzo pubblicato, piano base | ✓ 20 € al mese (PIANO START) | ✓ 0 €, tutto incluso |
| Prezzo pubblicato, piani superiori | ✗ Non esposto per PLUS e CLINIC | ✓ Non esistono piani superiori |
| Invio a SDI e Sistema TS | ✓ Disponibile come add-on a pagamento | ✗ Non presente |
| Versione cloud | ~ Elencata tra le funzionalità aggiuntive | ✓ Installi dove vuoi, senza supplemento |
| Interfaccia in italiano | ✓ Sì | ✗ No, oggi inglese e spagnolo |
| Contabilità e magazzino | ✓ Nei piani PLUS e CLINIC | ✗ Non presenti |
| Anni sul mercato | ✓ 20 dichiarati | ✗ Dal 2026 |
| Base installata | ✓ "più di 8.000 dentisti" in Italia | ✗ Pochissimi studi finora |
| Assistenza | ✓ Numero pubblicato, 800.011.781 | ✗ Community su GitHub |
| API pubblica | ~ Non documentata sulle pagine pubbliche | ✓ REST, documentata con OpenAPI |
| Dove stanno i dati | ~ In studio o in cloud, secondo il loro sito | ✓ Sul tuo server, sempre |

Le righe con "non documentata" e "elencata tra le funzionalità aggiuntive" dicono esattamente questo e niente di più: è quello che si legge sulle pagine pubbliche. Se stai valutando XDENT sul serio, sono domande da fare a loro, non conclusioni da trarre da qui.

Le sei righe centrali sono loro, e non c'è modo onesto di mascherarle. Un prodotto con 8.000 studi alle spalle ha già risolto problemi che noi non sappiamo ancora di avere.

## Scegli XDENT se

- **Vuoi che sia il gestionale a mandare fatture e spese allo SDI e al Sistema TS.** In Italia è la routine di ogni mese, loro la coprono e nessuna opzione open source di questa pagina lo fa. È la ragione principale per cui questo testo esiste.
- **Ti serve l'interfaccia in italiano oggi.** La nostra non lo è ancora, e girarci intorno non serve a niente.
- **Vuoi un numero da chiamare quando il programma si ferma di martedì.** Un numero di assistenza pubblicato e un gruppo con 30.000 clienti in Italia sono una differenza reale, che nessuna licenza compensa.
- **Vuoi contabilità, magazzino, ordini e prescrizioni nello stesso programma.** Sono nei loro piani PLUS e CLINIC. Noi la contabilità non la facciamo.
- **Lavori su Mac.** Lo rivendicano loro, ed è una scelta di campo che in odontoiatria non è comune.
- **Non hai profilo tecnico e non vuoi averlo.** Le opzioni open source di questa pagina si autoospitano: qualcuno deve occuparsi del server e dei backup.

Se tre di questi sei punti ti riguardano, la risposta onesta è XDENT.

## Scegli un'alternativa open source se

- **Ti preoccupa cosa succede ai tuoi dati il giorno in cui cambiano le condizioni.** La licenza è l'unica cosa che ti lascia tenere il codice, e il caso Open Dental dimostra che le licenze cambiano.
- **Vuoi poter far verificare il software** che conserva cartelle cliniche, da te o da qualcuno di tua fiducia.
- **Il conto cresce add-on dopo add-on e non ti torna.** Aprire un riunito in più non dovrebbe far salire il canone mensile.
- **Hai o assumi un profilo tecnico.** Con quello, l'autoospitamento è un pomeriggio di lavoro e non un problema.
- **Vuoi integrare contro un'API** invece che contro un modulo chiuso.

Fra le opzioni dentali vive, Apexo va meglio se cerchi qualcosa di minimo e offline per uno studio piccolo, e Dentalpin se ti serve il ciclo clinico completo con parodontogramma e piani di cura. Quanto costa Dentalpin sta tutto sulla [pagina dei prezzi](/it/prezzi/), ed è una pagina corta.

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*L'elenco delle fatture, con lo stato di incasso di ciascuna e quanto resta da pagare.*

## Come sarebbe migrare da XDENT

1. **Chiedi l'export completo prima di disdire qualsiasi cosa**: pazienti, cartelle cliniche, preventivi, fatture con la loro numerazione, immagini e catalogo dei trattamenti. Chiedilo per iscritto e guarda che formato ti arriva.
2. **Installa Dentalpin in un ambiente di prova**, non su quello con cui vuoi poi lavorare. Si [monta in tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/).
3. **Carica l'export nel modulo di importazione** (`migration_import`). Mostra un'anteprima con i conteggi e le righe di esempio prima di scrivere qualsiasi cosa nel database.
4. **Controlla la mappatura dei trattamenti riga per riga.** Quello che supera 0,9 di somiglianza si accetta in blocco, sul resto decidi tu: accettare, ricollegare, creare nuovo o ignorare.
5. **Confronta i conteggi** dei due sistemi: pazienti, fatture, appuntamenti futuri. Se non tornano, il problema è adesso e non fra sei mesi.
6. **Tieni il vecchio sistema in sola lettura** finché non sei sicuro, e decidi come continuare a mandare allo SDI e al Sistema TS prima di spegnerlo.

> **Il passo 4 è dove falliscono quasi tutte le migrazioni.** Due studi non codificano mai i trattamenti allo stesso modo, e un'equivalenza indovinata in silenzio produce fatture sbagliate che nessuno scopre per mesi. Il percorso completo sta nella [guida al cambio di gestionale](/it/blog/cambiare-gestionale-dentistico/).

## Fonti

Tutte consultate il 16 agosto 2026:

- [XDENT](https://www.xdent.it/): descrizione del prodotto, supporto nativo Mac e Windows, base installata, vent'anni di mercato e clienti del gruppo CGM Italia.
- [XDENT · Piani](https://www.xdent.it/piani/): contenuto di START, PLUS e CLINIC, prezzo del PIANO START e l'elenco delle Funzionalità Aggiuntive, incluse Versione Cloud e Invio al Sistema TS e SDI.
- [Apexo](https://apexo.app/): licenza GPLv3, impostazione offline-first, funzionalità e lingue.
- [OpenMolar](https://openmolar.com/): licenza GPLv3 e lo stato dichiarato dei due rami del progetto.
- [Open Dental · License](https://www.opendental.com/site/license.html): il passaggio da GPL a proprietario nella versione 24.4.
- [Open Dental · Order](https://www.opendental.com/site/order.html): prezzo pubblicato e cosa copre.
- [GNU Health](https://www.gnuhealth.org/): descrizione del progetto e suo perimetro.
- [Licenza e codice di Dentalpin](https://github.com/martinezsalmeron/dentalpin).

Vedi qualcosa di sbagliato o non aggiornato? [Scrivicelo](https://github.com/martinezsalmeron/dentalpin/discussions) e lo correggiamo. Vale anche se sei di CGM, di Apexo o di Open Dental.
