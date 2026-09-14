---
title: "Sistema Tessera Sanitaria: l'invio delle spese dallo studio odontoiatrico"
description: "Chi invia, con quali canali, che cosa contiene ogni record e quanto costa sbagliare: la sanzione è di 100 euro per ogni documento di spesa, non per file."
pubDate: 2026-09-14
tags: [tessera-sanitaria, fatturazione, italia, gestionale-odontoiatrico]
---

Gli iscritti all'albo dei medici chirurghi e degli odontoiatri trasmettono al Sistema Tessera Sanitaria i dati dei documenti fiscali emessi verso le persone fisiche, e per farlo hanno tre canali: una pagina web sul portale, un web service che invia un documento alla volta, un web service che invia un file zip con molti documenti insieme. Ogni trasmissione restituisce un numero di protocollo, che è la ricevuta. La sanzione per un dato omesso, tardivo o errato è di 100 euro per ogni singolo documento di spesa, non per file.

Questo articolo è la parte operativa dell'adempimento: i canali, il contenuto di un record, il campo che segnala i contanti, l'opposizione del paziente, le correzioni e la delega a un terzo. Le scadenze e il divieto di fattura elettronica al paziente stanno nell'altro articolo, [fatturazione elettronica e Sistema Tessera Sanitaria](/it/blog/fatturazione-elettronica-studio-odontoiatrico/).

Non è un parere fiscale né legale. Tutto quello che segue viene dalle fonti ufficiali linkate in fondo, consultate il 14 settembre 2026.

## Chi invia, e che cosa

L'obbligo nasce dall'articolo 3, comma 3, del decreto legislativo 175/2014. L'elenco dei soggetti tenuti si chiude con "gli iscritti all'Albo dei medici chirurghi e degli odontoiatri", che "inviano al Sistema tessera sanitaria, (…), i dati relativi alle prestazioni erogate dal 2015 (…) ai fini della loro messa a disposizione dell'Agenzia delle entrate".

Il portale del Sistema TS lo riassume in una riga: "A partire dal 2016 tutte le strutture e le figure professionali che erogano prestazioni sanitarie sono obbligate ad inviare al Sistema TS le fatture emesse nei confronti dei propri pazienti".

Quello che viaggia non è il documento, sono i suoi dati. Una fattura diventa un record con la data di pagamento, il codice fiscale cifrato del paziente, l'importo e una manciata di codici, e il PDF resta in studio.

## I tre canali di invio

La risoluzione 22/E dell'Agenzia delle Entrate elenca i modi in cui "l'inoltro dei dati di spesa può avvenire", e sono gli stessi che le istruzioni operative per medici e odontoiatri descrivono dal 2015.

1. **Data entry sul portale.** "Utilizzo di una pagina web dedicata, data entry di ogni singola spesa sul sito www.sistemats.it". Le istruzioni operative la chiamano funzione di "Gestione del documento di spesa" e con essa il medico "può effettuare l'inserimento, la cancellazione o la variazione di un documento fiscale".
2. **Web service sincrono.** "Invio di ogni singola spesa". Una chiamata, un documento fiscale con le sue voci.
3. **Web service asincrono.** "Invio di un file zip, contenente un file xml, con uno o più documenti". È la modalità con cui un gestionale svuota mesi di fatture in una volta sola.

Qualunque sia il canale, la ricevuta è la stessa: "Ogni trasmissione produce da parte del Sistema TS l'emissione di un numero di protocollo che viene restituito come attestazione dell'invio e che costituisce la chiave di ricerca per individuare la trasmissione".

L'esito dell'elaborazione si consulta poi sul portale o via web service, e arriva "sottoforma di file .pdf e, nel caso di segnalazione o errori, anche sottoforma di file .csv con l'elenco analitico di tutti i codici di errore riscontrati". Quel csv è il documento da conservare, perché è l'unico posto dove un errore ha un nome.

![Elenco di fatture con numero, paziente, stato, date e importo, con l'importo ancora da incassare evidenziato](/screenshots/invoices.png)

*Un elenco di fatture, ciascuna con il proprio stato e, dove c'è, l'importo ancora da incassare.*

## Che cosa contiene un record di spesa

I campi sono pochi e quasi tutti obbligatori. Questi sono quelli che descrivono il documento, con la descrizione delle specifiche tecniche del web service asincrono, versione 2.5 del 20 dicembre 2020.

| Campo | Che cosa dice | Obbligatorio |
|---|---|---|
| `dataPagamento` | La data in cui il paziente ha pagato | ✓ Sempre |
| `flagPagamentoAnticipato` | Vale "1" se il pagamento precede l'emissione | ~ Solo in quel caso |
| `tipoDocumento` | "F" per la fattura, "D" per il documento commerciale | ✓ Sempre |
| `cfCittadino` | Codice fiscale del paziente, cifrato | ~ Assente in caso di opposizione |
| `flagOpposizione` | "1" se il paziente si oppone all'invio dei dati | ✓ Sempre |
| `pagamentoTracciato` | "SI" oppure "NO (Contanti)" | ~ Dal 2020, salvo alcune tipologie |
| `tipoSpesa` | Il codice della tipologia di spesa | ✓ Sempre |
| `importo` | L'importo della singola voce di spesa | ✓ Sempre |
| `flagOperazione` | "I", "V", "R" o "C" | ✓ Sempre |

Il codice fiscale del professionista che emette il documento viaggia a parte, anch'esso cifrato, nella sezione del file dedicata al proprietario.

## L'anno lo decide la data di pagamento

Le specifiche non lasciano margine: "La data di pagamento determina l'anno d'imposta di riferimento", con l'esempio dei documenti pagati nel 2015 che finiscono nella dichiarazione dell'anno dopo.

Da lì discendono due vincoli che in studio si incontrano prima o poi.

- **La data di pagamento non può cadere in un altro anno.** "L'anno della data di pagamento non può essere diverso dall'anno in corso (tranne che per il mese di gennaio in cui è possibile acquisire i pagamenti dell'anno precedente)".
- **Se il paziente ha pagato prima della fattura, va detto.** La data di pagamento deve essere uguale o successiva a quella di emissione, e può precederla solo valorizzando a "1" il flag del pagamento anticipato.

Per ricostruire tutto questo a distanza di mesi serve sapere quando ogni importo è stato incassato, non solo quanto è stato fatturato.

![Scheda paziente, sezione attività: filtri per visite, trattamenti, finanziario, comunicazioni e documenti sopra una cronologia di eventi con data](/screenshots/patient-timeline.png)

*La cronologia di un paziente, filtrabile per tipo di evento, con la data di ciascuno.*

## Contanti, tracciato e pagamenti misti

Il campo `pagamentoTracciato` vale "SI (pagamento tracciato come previsto dall'art. 85 DDLB 2020)" oppure "NO (Contanti)". È "obbligatorio dal 1/1/2020 per tutte le spese tranne che per le tipologie TK, FC, AD, FV e per quelle inviate da strutture specialistiche pubbliche o private accreditate", quindi fuori da quelle tipologie uno studio privato lo valorizza sempre.

> **Basta una parte pagata in contanti perché l'intero documento vada come non tracciato.** Il Sistema TS risponde così alla domanda sul pagamento misto: se una prestazione è pagata in parte in contanti e in parte in modo tracciato, il documento di spesa va inviato "non tracciato". Il campo viaggia con la spesa fino alla precompilata del paziente, quindi la scelta non resta in segreteria.

Due regole minori che tolgono altrettanti dubbi ricorrenti, entrambe dal Sistema TS.

- **Bollo e IVA seguono la spesa.** "L'imposta di bollo e l'Iva esposte in fattura/ricevuta seguono il trattamento della spesa sanitaria cui si riferiscono e confluiscono nella relativa tipologia di spesa".
- **I voucher si separano.** Nel documento va tenuto "distinto l'importo versato direttamente dal contribuente da quello oggetto del voucher", e la quota coperta dal voucher va comunicata con il codice "AA".

## Le dodici tipologie di spesa

Il campo `tipoSpesa` è l'unico che richiede una decisione, e le specifiche sono il solo posto dove i codici sono definiti. Li riporto tutti, con le parole delle specifiche: quale codice spetti a ciascuna voce è una valutazione fiscale da fare con il commercialista, non un'impostazione di default del software.

| Codice | Che cosa copre, secondo le specifiche |
|---|---|
| `SR` | Prestazioni di assistenza specialistica ambulatoriale esclusa la chirurgia estetica, visita generica o specialistica, prestazioni diagnostiche e strumentali, prestazione chirurgica, ricoveri, certificazione medica |
| `SP` | "Prestazioni Sanitarie" |
| `PI` | "Protesica e integrativa" |
| `IC` | "Prestazioni di chirurgia estetica e di medicina estetica (ambulatoriale o ospedaliera)" |
| `AD` | "Acquisto o affitto di dispositivo medico CE" |
| `AA` | "Altre spese" |
| `TK` | Ticket, quota fissa, franchigia, pronto soccorso e accesso diretto |
| `FC` | "Farmaco, anche omeopatico" |
| `AS` | Prestazioni della farmacia dei servizi, da ECG e spirometria al controllo della pressione |
| `CT` | "Cure Termali" |
| `FV` | "Farmaco per uso veterinario" |
| `SV` | Spese veterinarie per le tipologie di animali individuate dal decreto 289/2001 |

C'è poi il caso della fattura mista, che l'Agenzia delle Entrate risolve in due modi a seconda di come è scritta. Se dal documento si distingue la quota sanitaria da quella non sanitaria, "entrambe le spese vanno comunicate distintamente al Sistema TS", con l'importo non sanitario sotto il codice AA. Se non si distingue, "l'intera spesa va trasmessa al Sistema TS (salvo il caso dell'opposizione del paziente) con la tipologia 'altre spese' (codice AA)".

## L'opposizione del paziente

Il campo `flagOpposizione` "indica la volontà del cittadino di opporsi all'invio dei dati di spesa all'Agenzia delle Entrate ai fini della predisposizione della dichiarazione Precompilata". Vale "1" con opposizione, e se assente o valorizzato a "0" indica assenza di opposizione.

La conseguenza tecnica è netta: il codice fiscale del paziente "deve essere assente se flagOpposizione = 1". Il documento si trasmette comunque, senza la persona a cui si riferisce.

Il cittadino ha poi due strade proprie, che l'Agenzia delle Entrate pubblica sulla scheda aggiornata il 30 settembre 2025. Per le spese del 2025 sono l'area autenticata del sito del Sistema Tessera Sanitaria, "dal 9 febbraio 2026 al 9 marzo 2026", dove si selezionano le singole voci, oppure la comunicazione diretta all'Agenzia "dal 1° ottobre 2025 al 2 febbraio 2026", per tipologia di spesa, via e-mail o telefono con il modello e il documento di identità.

Una cosa che l'opposizione non cambia è la forma della fattura. La FAQ dell'Agenzia è esplicita: "Le prestazioni sanitarie rese nei confronti dei consumatori finali sono sempre escluse dalla fatturazione elettronica attraverso il Sistema di Interscambio, anche nel caso di opposizione".

## Variazioni, rimborsi e cancellazioni

Un record non si corregge riscrivendolo, si corregge dichiarando che operazione si sta facendo. Il campo `flagOperazione` ammette quattro valori: "I" per l'inserimento di un nuovo record, "V" per la variazione, "R" per il rimborso, "C" per la cancellazione. Nel caso del rimborso la data di pagamento deve coincidere con quella di emissione.

> **La sanzione si conta per documento, non per file.** La risoluzione 22/E del 23 maggio 2022 chiude la questione: il concetto di "comunicazione" si riferisce "ad ogni singolo documento di spesa errato, omesso, o tardivamente inviato al Sistema tessera sanitaria, a nulla rilevando il mezzo di trasmissione (uno o plurimi file)". Sono 100 euro ciascuno, senza cumulo giuridico, fino a un massimo di 50.000.

La stessa norma prevede due vie d'uscita, e vale la pena conoscerle prima di averne bisogno. Per gli errori la sanzione non si applica se i dati corretti partono "entro i cinque giorni successivi alla scadenza", oppure entro cinque giorni dalla segnalazione dell'Agenzia. Se la comunicazione corretta arriva entro sessanta giorni dalla scadenza, la sanzione "è ridotta a un terzo con un massimo di euro 20.000", ed è definibile con il ravvedimento operoso usando il codice tributo 8912.

Entrambe le riduzioni si contano dalla scadenza dell'invio, non dalla data del documento. Una fattura sbagliata a marzo non ha sessanta giorni di tempo da marzo.

## Delegare l'invio a un terzo

L'invio può farlo il commercialista, e la delega ha una procedura sua, descritta nelle istruzioni operative del Sistema TS, documento del 18 dicembre 2015.

1. **Il medico entra nella propria area riservata** del Sistema TS e usa la funzione "Gestione deleghe" per indicare il soggetto terzo, con le informazioni che lo identificano.
2. **Il Sistema TS verifica due cose**: che il soggetto indicato "disponga di una abilitazione valida come intermediario fiscale (soggetto abilitato ad Entratel)" e che ci sia corrispondenza tra la PEC fornita e il codice fiscale indicato.
3. **Il delegato riceve un link via PEC** e accettando la delega viene abilitato automaticamente alla trasmissione per conto del delegante.

> **La delega sposta il lavoro, non la responsabilità.** Le istruzioni operative lo scrivono in una riga sola: "Anche in caso di delega il medico rimane responsabile dei dati trasmessi". Chi firma i dati resta lo stesso anche quando a caricarli è lo studio del commercialista.

## Che cosa deve saper fare il gestionale

Tradotto in requisiti, l'adempimento chiede poche cose precise. Sono anche le domande da fare a un fornitore prima di firmare.

- **Registrare la data di pagamento** separata dalla data della fattura, e gestire acconti e pagamenti parziali, perché è quella data a decidere l'anno.
- **Segnare come è stato incassato ogni documento**, con il caso misto risolto a favore del "non tracciato" e non lasciato all'interpretazione di chi compila.
- **Tenere la tipologia di spesa sulla voce**, non sul documento intero, altrimenti la fattura mista va gestita a mano ogni volta.
- **Conservare il flag di opposizione sul paziente**, così che una scelta espressa una volta non si perda al primo cambio di software.
- **Produrre il tracciato o un export pulito**, con il protocollo e l'esito archiviati accanto ai documenti che li hanno generati.

Su Dentalpin va detto com'è: la fatturazione registra la data di pagamento separatamente e gestisce i pagamenti parziali, ma **oggi non trasmette le spese al Sistema Tessera Sanitaria e non emette fatture elettroniche verso lo SDI**. Uno studio in Italia deve coprire quella parte con il commercialista o con un software contabile separato, e il [prezzo di Dentalpin](/it/prezzi/) va valutato tenendo conto di quel pezzo mancante.

## Fonti

- Sistema Tessera Sanitaria, [730 Spese Sanitarie, Web services per l'invio dei dati di spesa sanitaria, modalità asincrona](https://sistemats1.sanita.finanze.it/portale/documents/20182/34450/730%20Spese%20Sanitarie%20-%20WS%20Asincrono%20-%20Invio%20dati%20di%20spesa%20%20sanitaria%2020_12_2020.pdf/4c2acd7d-3a0b-13f4-27eb-a02ff8bf9c1f), versione 2.5 del 20 dicembre 2020: tracciato del documento di spesa, campi e codici di `tipoSpesa`. Consultato il 14 settembre 2026.
- Sistema Tessera Sanitaria, [Spese Sanitarie, istruzioni operative medici e odontoiatri](https://sistemats1.sanita.finanze.it/portale/documents/20182/34450/Spese%20Sanitarie%20%E2%80%93%20Istruzioni%20operative%20medici%20e%20odontoiatri.pdf/00807ed3-5088-a734-2721-e98e86e48216), versione 2.0 del 18 dicembre 2015: canali di invio, protocollo, esiti e delega. Consultato il 14 settembre 2026.
- Sistema Tessera Sanitaria, [Spese sanitarie](https://sistemats1.sanita.finanze.it/portale/spese-sanitarie) e [FAQ sulle modalità di invio](https://sistemats1.sanita.finanze.it/portale/it/modalita-di-invio): soggetti obbligati, pagamento misto, bollo e IVA, voucher. Consultati il 14 settembre 2026.
- Agenzia delle Entrate, [risoluzione n. 22/E del 23 maggio 2022](https://www.agenziaentrate.gov.it/portale/documents/20143/4419706/Risoluzione+TS.pdf/969aef16-87b8-70ed-38ea-4900023c1d86): articolo 3, comma 5-bis, del decreto legislativo 175/2014, canali di trasmissione e sanzione per singolo documento. Consultata il 14 settembre 2026.
- Agenzia delle Entrate, [Opposizione all'utilizzo delle spese sanitarie (730 precompilato)](https://www.agenziaentrate.gov.it/portale/schede/comunicazioni/opposizioni-utilizzo-delle-spese/opposizione-utilizzo-dati-spesesanitarie-730-precompilato/infogen-2017-opposizione-730-precompilato), scheda aggiornata il 30 settembre 2025. Consultata il 14 settembre 2026.
- Agenzia delle Entrate, [FAQ su fatture per prestazioni sanitarie e dichiarazione precompilata](https://www.agenziaentrate.gov.it/portale/it/web/guest/schede/comunicazioni/fatture-e-corrispettivi/faq-fe/risposte-alle-domande-piu-frequenti-categoria/prestazioni-sanitarie): opposizione e fattura elettronica, fatture miste. Consultate il 14 settembre 2026.
