---
title: "Esportare i dati dal gestionale odontoiatrico: il formato da pretendere"
description: "Quale esportazione chiedere al gestionale prima di firmare: i quattro blocchi che deve contenere, i formati che reggono e come verificarla una volta l'anno."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [esportazione-dati, migrazione, contratto, gdpr, cartella-clinica]
---

Chiedete un'esportazione completa in formati aperti: la banca dati in CSV per tabella o un dump SQL, documenti e immagini come file originali (PDF, JPG, DICOM) e un indice che leghi ogni file al suo paziente. Fatela scrivere nel contratto, con un termine, a costo zero e avviabile da voi senza telefonare a nessuno. Poi apritela una volta l'anno, perché un'esportazione che non avete mai aperto non è una via d'uscita, è una promessa.

Il formato è l'unica cosa che decide se fra sei anni quella resta una cartella clinica o diventa una cartella di file che nessuno sa più leggere.

## Un'esportazione non è un backup

Sono due cose diverse, e quasi ogni conversazione commerciale le confonde. Un backup ripristina il sistema com'era, dentro lo stesso software. Un'esportazione vi permette di leggere i vostri dati senza quel software.

La prova è semplice. Se il vostro fornitore sparisse stanotte, il backup vi servirebbe a qualcosa? Se il file lo apre solo il loro programma, la risposta è no.

> **La domanda non è "fate i backup?", è "cosa posso aprire senza di voi?".** Alla prima rispondono di sì tutti. La seconda divide i fornitori in due gruppi molto diversi.

Servono entrambi. Il backup è per il disco che si guasta di martedì. L'esportazione è per il giorno in cui cambiate gestionale, per il giorno in cui il fornitore chiude e per il giorno in cui qualcuno vi chiede una cartella di otto anni fa.

## La legge vi dà il diritto, non il formato

Quando acquistate un gestionale, voi siete il titolare del trattamento e il fornitore è il responsabile. L'articolo 28, paragrafo 3, lettera g) del GDPR obbliga il responsabile, a scelta del titolare, a cancellare o restituire tutti i dati personali dopo il termine della prestazione dei servizi, e a cancellare le copie esistenti salvo obblighi di conservazione previsti dalla legge.

Quel diritto è reale ed è vostro. Quello che l'articolo non dice, da nessuna parte, è in quale formato.

> **Un PDF di novecento pagine soddisfa l'articolo 28, paragrafo 3, lettera g).** Restituire i dati e restituirli in qualcosa di utilizzabile non sono lo stesso obbligo, e solo il primo sta nel regolamento. Il secondo deve stare nel vostro contratto.

È tutta qui la differenza fra lasciare un fornitore in due settimane e lasciarlo in sei mesi mentre qualcuno ridigita cartelle cliniche.

## L'obbligo di conservazione sopravvive al contratto

È qui che il formato smette di essere una preferenza tecnica. Il tempo per cui dovete poter produrre una cartella si misura in anni, e non si ferma il giorno in cui disdite l'abbonamento. Verificate il termine che si applica al vostro studio prima di cancellare qualsiasi cosa.

Il contatore continua a correre, e chi risponde della cartella siete voi, non il fornitore che avete appena lasciato.

La domanda giusta quindi non è "posso portarmi via i dati?" ma "riuscirò a leggerli fra dieci anni, su un computer che ancora non esiste, senza licenza di niente?". A quello esiste una sola famiglia di risposte, e sono i formati aperti.

## I quattro blocchi che devono uscire

Le esportazioni incomplete falliscono quasi sempre nello stesso punto. Vi restituiscono l'agenda e l'anagrafica, e tengono dentro il clinico e i file. Chiedeteli tutti e quattro per iscritto.

| Blocco | Cosa deve uscire | Formato che regge |
|---|---|---|
| Pazienti | Recapiti, assicurazione, allerte mediche, consensi acquisiti | CSV o SQL, un record per paziente con un identificativo stabile |
| Clinico | Odontogramma, parodontogramma, note datate e firmate, piani di cura, prescrizioni | CSV o SQL, con dente, superficie, stato e data in campi distinti |
| Contabile | Preventivi, fatture con la loro numerazione, incassi, saldi, stati | CSV o SQL, mantenendo numero fattura e stato così come sono |
| File | Radiografie, fotografie, PDF, consensi firmati | I file originali, più un indice che li leghi ai pazienti |

![Scheda paziente con l'odontogramma, le allerte cliniche, il piano di cura attivo e il prossimo appuntamento](/screenshots/dental-chart.png)

*Un odontogramma a schermo: dente, superficie, stato e data. Sono questi quattro campi a dover sopravvivere all'esportazione.*

Il quarto blocco è quello che arriva rotto più spesso. Vi consegnano una cartella con dodicimila file chiamati `IMG_0043.jpg` e nessun modo di sapere di chi sia ciascuno. Un indice è una tabella a due colonne, nome del file e identificativo del paziente, e senza di essa la cartella non vale nulla.

## Formati che reggono e formati che non reggono

La regola è una sola: riuscite ad aprirlo senza il programma che lo ha prodotto?

| Formato | Serve per | Leggibile senza il gestionale? |
|---|---|---|
| CSV | Tabelle: pazienti, appuntamenti, fatture, note | ✓ Qualsiasi foglio di calcolo, qualsiasi linguaggio |
| Dump SQL | L'intera banca dati, relazioni comprese | ✓ Con PostgreSQL o MySQL installato |
| JSON o XML | Strutture annidate, piani con le loro fasi | ✓ Leggibile e documentabile |
| PDF, JPG, PNG | Documenti firmati, fotografia clinica | ✓ Standard, si aprono ovunque |
| DICOM | Radiografie e volumi | ✓ Standard internazionale per le immagini mediche |
| PDF come estrazione dati | Niente. È la cartella stampata | ✗ Una persona lo legge, nulla lo migra |
| Formato proprietario (.dat, il loro .bak) | Ripristinare nel loro stesso software | ✗ Lo apre solo chi lo ha scritto |
| Screenshot o stampe | Consultare un dato singolo | ✗ Non è dato, è un'immagine del dato |

Sulle radiografie conviene essere espliciti. DICOM è, secondo l'organizzazione che lo mantiene, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", gestito dalla Medical Imaging & Technology Alliance, una divisione di NEMA. Se il vostro gestionale archivia le radiografie in qualcosa che non è DICOM né un formato immagine comune, chiedete oggi come escono.

## Le clausole da chiedere prima di firmare

Si negozia prima della firma, finché vi vogliono come cliente. Dopo non c'è più una conversazione, c'è un listino.

1. **Perimetro.** "Tutti i dati inseriti dal cliente e tutti i file allegati", non "i dati dei pazienti". La seconda formulazione lascia fuori il clinico senza dirlo.
2. **Formato.** Nominato: CSV o dump SQL per la banca dati, file originali per gli allegati, più un indice che li colleghi.
3. **Documentazione.** Una descrizione delle tabelle e dei campi. Un CSV con quaranta colonne chiamate `campo_17` è un rebus, non un'esportazione.
4. **Autonomia.** La avviate voi, dal gestionale, quando volete. Se serve un ticket, il tempo lo decidono loro.
5. **Termine.** In assenza di autonomia, un numero preciso di giorni dalla richiesta. Trenta è ragionevole.
6. **Costo.** Zero. Un costo di estrazione è un pedaggio d'uscita, e conviene vederlo scritto prima di firmare, non dopo.
7. **Dopo la disdetta.** Per quanto tempo potete ancora scaricarla, e una cancellazione certificata per iscritto quando la chiedete, che è ciò che l'articolo 28, paragrafo 3, lettera g) vi permette di pretendere.
8. **Se chiudono.** Che fine fanno i vostri dati in una procedura concorsuale. La risposta può essere brutta, ma dovete conoscerla.

![Elenco fatture con gli stati emessa, pagata, parzialmente pagata, scaduta e bozza](/screenshots/invoices.png)

*Ogni fattura porta uno stato e una data. Se l'esportazione porta via gli importi ma perde lo stato, la contabilità va ricostruita a mano.*

## Come verificare l'esportazione una volta l'anno

È un'ora all'anno, ed è l'unico modo di sapere se quello che vi hanno promesso esiste.

1. **Avviatela e cronometrate.** Se impiega tre giorni, avete appena imparato qualcosa di importante.
2. **Aprite un CSV.** Intestazioni leggibili e accenti corretti. Se leggete `Rossi �`, la codifica è rotta ed è adesso il momento di dirlo.
3. **Contate.** Righe nel CSV dei pazienti contro il numero di pazienti che mostra il gestionale. Se non torna, chiedete perché prima di averne bisogno.
4. **Prendete tre pazienti a caso** e confrontate la scheda a schermo con quello che è uscito. Guardate soprattutto odontogramma e note.
5. **Aprite una radiografia** direttamente dalla cartella esportata, senza passare dal gestionale.
6. **Verificate l'indice.** Prendete un file dalla cartella e risalite al paziente usando solo l'esportazione.
7. **Conservatela cifrata e fuori dallo studio**, e annotate la data. Quella data è la risposta il giorno in cui vi chiederanno quando è stata verificata l'ultima volta.

> **La prima volta troverete qualcosa.** Quasi sempre sono le immagini o l'odontogramma. Trovarlo in un martedì qualunque costa una mail. Trovarlo il giorno in cui ve ne andate costa l'intera migrazione.

## I segnali d'allarme

Nessuno di questi accusa qualcuno di malafede. Tutti sono un motivo per farsi fare una dimostrazione prima di firmare.

- **"Ve lo diamo in PDF."** Va bene per leggere, inutile per migrare. Chiedete cos'altro c'è.
- **"Lo lancia l'assistenza."** Allora il tempo non è vostro. Fatevi mettere per iscritto il numero di giorni.
- **"C'è un costo di estrazione."** È un pedaggio d'uscita. Negoziatelo adesso, finché si può.
- **"Le immagini vanno a parte."** A parte va benissimo. Senza indice no.
- **"L'odontogramma non si esporta, si stampa."** Il segnale più chiaro di tutti: il dato clinico strutturato resta dentro.
- **Nessuna documentazione dei campi.** Senza, migrare costa quanto ridigitare.

## Cosa potete verificare oggi pomeriggio

Non serve aspettare il rinnovo. Aprite il gestionale oggi, cercate la funzione di esportazione e guardate cosa offre. Se non la trovate in cinque minuti, quella è già la risposta.

Dentalpin è open source e la banca dati è PostgreSQL, quindi esportare non è una funzione da richiedere: potete fare il dump dell'intera banca dati quando volete, e gli allegati stanno su disco esattamente come sono stati caricati. Si installa sul vostro server o si usa nella versione gestita, e i [prezzi](/it/prezzi/) sono pubblicati.

## Fonti

Tutte consultate il 26 agosto 2026.

- Regolamento (UE) 2016/679 (GDPR), articolo 28, paragrafo 3, lettera g). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- DICOM, standard internazionale per le immagini mediche, gestito dalla Medical Imaging & Technology Alliance, divisione di NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

Questo non è un parere legale. I termini di conservazione dipendono dal documento e dal tipo di struttura: fateli confermare prima di cancellare qualcosa.
