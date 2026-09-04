---
title: "Integrare radiologia e scanner intraorale con il gestionale dello studio"
description: "Cosa vuol dire davvero integrazione: worklist DICOM, dove finisce la radiografia, perché lo scanner intraorale è un caso a parte e cosa chiedere per iscritto."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [radiologia, dicom, scanner-intraorale, integrazione, gestione-studio]
---

L'integrazione che conta non è che il gestionale sappia aprire un'immagine. Sono tre cose precise: il sensore riceve il paziente dalla cartella clinica invece che dalle dita di qualcuno che ridigita il nome, l'immagine torna agganciata a quel paziente e a quella seduta, e la puoi esportare in DICOM quando vuoi. Se manca la prima, nello stesso studio convivono due anagrafiche pazienti.

Qui sotto trovi come capire in quale dei due casi ti trovi: il meccanismo che risolve la cosa, i quattro livelli di integrazione venduti tutti con la stessa parola, e cosa mettere per iscritto prima di firmare.

## Il problema non è il visualizzatore, sono due anagrafiche

Quasi tutti i software di imaging portano con sé la propria anagrafica pazienti. Qualcuno l'ha riempita la settimana in cui è stato installato il sensore, e da allora vive accanto a quella del gestionale.

Le due partono identiche e si separano da sole. Un cognome doppio scritto attaccato, una data di nascita digitata alle nove meno cinque, un paziente inserito da una parte e non dall'altra.

- **Nel software di imaging compaiono i doppioni**, e ciascuno si porta dietro un pezzo dello storico radiologico.
- **Si perde la giustificazione dell'esame.** L'immagine c'è, ma non è agganciata alla seduta che l'ha motivata.
- **Finché le apparecchiature restano le stesse non se ne accorge nessuno.** Si vede il giorno in cui va consegnata una cartella completa, o il giorno del cambio gestionale.

> **La prova veloce sono i nomi.** Apri il software di imaging e cerca i tre pazienti più visti dell'ultimo anno. Se uno compare due volte, o scritto diversamente dalla cartella, quella che hai è un pulsante che apre un altro programma.

![Cartella del paziente nella scheda dei dati anagrafici, con nome, contatti e informazioni amministrative](/screenshots/patients.png)

*La cartella da cui dovrebbero arrivare il nome e la data di nascita registrati su un esame.*

## La lista di lavoro è il meccanismo che risolve

Lo standard dietro tutto questo si chiama DICOM ed è pubblicato dalla NEMA. È anche norma ISO, la ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, e la metà del titolo che dice *workflow* nello studio odontoiatrico non la usa quasi nessuno.

Il meccanismo si chiama DICOM Modality Worklist. L'ordine dei dentisti del Baden-Württemberg ne descrive il flusso passo per passo nella sua nota su DICOM nello studio odontoiatrico, ed è lo stesso in ospedale e in uno studio con due riuniti:

1. **L'esame viene richiesto dal gestionale**, con il paziente già identificato nella sua cartella.
2. **La richiesta finisce in una lista**, una per apparecchiatura oppure una sola per tutte.
3. **L'apparecchiatura legge la lista dalla propria consolle** e da lì prende i dati del paziente. Nessuno li ridigita.
4. **Si esegue l'esame** e le immagini vengono associate a quei dati dentro l'apparecchiatura stessa.
5. **Le immagini partono verso l'archivio** e la richiesta, segnata come eseguita, sparisce dalla lista.

Il passo tre toglie di mezzo l'errore di battitura, il passo cinque fa comparire l'immagine da sola in cartella. Un sistema che fa solo il cinque ti risparmia la caccia al file. Uno che li fa entrambi elimina la seconda anagrafica.

## Quattro livelli, una parola sola

"Integrato con la tua radiologia" descrive cose molto diverse. Questi sono i quattro livelli che si incontrano davvero, dal più debole al più completo.

| Livello | Cosa fa davvero | Paziente digitato due volte | L'immagine torna in cartella |
|---|---|---|---|
| Un pulsante che apre il visualizzatore | Avvia l'altro programma | ✗ Sì | ✗ No |
| Passaggio del paziente | Trasmette l'identificativo all'avvio | ✓ No | ~ Dipende dal produttore |
| Worklist e invio DICOM | Richiesta all'andata, immagini al ritorno | ✓ No | ✓ Sì |
| Servizi web DICOM | In più, ricerca e recupero via web | ✓ No | ✓ Sì |

L'ultimo livello è DICOMweb, che lo standard stesso definisce "the DICOM Standard for web-based medical imaging" e descrive come un insieme di servizi REST. Su una scheda tecnica i nomi sono QIDO-RS per cercare, WADO-RS per recuperare, STOW-RS per archiviare e UPS-RS per le liste di lavoro.

> **Chiedi il livello con il suo nome, non con l'aggettivo.** "Compatibile" e "collegato" in un preventivo non vogliono dire niente. "Funziona come SCP Modality Worklist" e "accetta STOW-RS" vogliono dire qualcosa, ed entrambe si verificano prima di pagare.

## Lo scanner intraorale è un capitolo a parte

Uno scanner intraorale non produce radiografie ma mesh di superficie, e di serie non le salva in DICOM. Ne escono i formati mesh della fabbricazione 3D, in testa STL e OBJ, e molti produttori tengono il caso nel proprio portale in cloud, con account e anagrafica pazienti tutti suoi.

Lo standard è andato a prenderseli. Il Supplemento 205 di DICOM "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", e il 208 ha fatto lo stesso per l'OBJ, per le librerie di materiali MTL e per le texture in JPG o PNG.

- **Chiedi dove risiede il caso**, non dove si vede. Se la risposta è il portale del produttore dello scanner, l'archivio non è nel tuo studio.
- **Chiedi se l'export porta con sé il collegamento al paziente**, non solo i file. Ventimila mesh senza nome non sono una cartella.
- **Chiedi cosa succede quando smetti di pagare lo scanner.** È la domanda che tutti fanno sul gestionale e quasi nessuno sul portale del flusso digitale.

> **La mesh e la radiografia finiscono in due posti diversi, e il problema sta tutto in questa frase.** Un paziente con una CBCT in archivio, delle endorali in una cartella del PC del riunito e una scansione in un portale web ha tre cartelle, e chi ha firmato il consenso pensa di averne una.

![Cartella del paziente nella scheda attività, con avvisi clinici, piano attivo e una linea del tempo filtrabile per sedute, trattamenti, incassi e comunicazioni](/screenshots/patient-timeline.png)

*La linea del tempo di un paziente, dove si vede a quale seduta appartiene ogni esame.*

## Come scoprire in venti minuti cosa hai oggi

Non serve un audit. Servono sei verifiche, tutte su un paziente vero e nessuna irreversibile.

1. **Inserisci un paziente nuovo nel gestionale** e guarda se compare nel software di imaging senza che nessuno tocchi niente.
2. **Avvia un esame dall'apparecchiatura** e verifica se il paziente è già compilato o va cercato.
3. **Scatta un'immagine e torna in cartella.** Conta i secondi finché compare, e se non compare annota dov'era finita.
4. **Cerca il file sul disco.** Se sta in una cartella con il nome del produttore e il backup non la copre, hai già un risultato.
5. **Esporta quell'immagine su una chiavetta e aprila su un altro computer** senza il software del produttore installato.
6. **Ripeti il punto uno con lo scanner intraorale**, che è quasi sempre quello che resta fuori.

Quello che ne esce vale più di qualsiasi brochure, perché descrive il tuo studio. Se il punto quattro ti lascia inquieto, la guida su come [archiviare le radiografie](/it/blog/archiviare-radiografie/) entra nel formato e nell'archivio.

## Cosa mettere per iscritto

Tutto questo si tratta prima di firmare e non dopo, e sta in cinque righe di una mail.

- **Il DICOM conformance statement dell'apparecchiatura e quello del gestionale.** La parte PS3.2 dello standard obbliga ogni produttore a pubblicare cosa implementa davvero, quindi il documento esiste e si può chiedere.
- **Se il gestionale funziona da server di lista di lavoro**, e con quali apparecchiature è stato provato, con nomi e versioni.
- **Dove finiscono i file delle immagini**, in quale percorso o servizio, e se entrano nello stesso backup di tutto il resto.
- **Come si esporta tutto**, in DICOM e con il collegamento paziente e data in un file leggibile, dimostrato adesso su dieci pazienti.
- **Quanto costa ogni ponte.** I collegamenti verso una singola apparecchiatura si fatturano a parte più spesso di quanto la demo lasci intendere, e la domanda sta anche nell'elenco delle [domande da fare prima di firmare](/it/blog/domande-prima-di-firmare-gestionale/).

In Dentalpin le immagini sono salvate collegate alla cartella clinica e nel file system del tuo server, quindi entrano nello stesso backup di tutto il resto e te le porti via quando vuoi. Le condizioni sono su [prezzi](/it/prezzi/).

## Fonti

- DICOM, edizione in vigore ed elenco delle parti (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Consultato il 4 settembre 2026.
- DICOMweb, definizione e servizi QIDO-RS, WADO-RS, STOW-RS e UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Consultato il 4 settembre 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Consultato il 4 settembre 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL e texture). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Consultato il 4 settembre 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Consultato il 4 settembre 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, descrizione del flusso della DICOM Modality Worklist. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Consultato il 4 settembre 2026.
