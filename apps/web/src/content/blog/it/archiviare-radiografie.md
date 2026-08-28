---
title: "Radiografie digitali: archiviarle, ritrovarle e consegnarle"
description: "Come archiviare le radiografie odontoiatriche: perché il DICOM, quanti anni conservarle in Italia, dove sta il file e come consegnarlo in sicurezza."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [radiografie, dicom, cartella-clinica, gdpr, gestione-studio]
---

Archivia ogni radiografia dentro la cartella clinica del paziente, in un formato che riesci ad aprire senza il programma del produttore del sensore, e tieni una copia fuori dallo studio. In Italia la documentazione iconografica radiologica va conservata per un periodo non inferiore a dieci anni, e il visualizzatore del sensore non è un archivio.

Qui sotto c'è come si fa davvero: quale formato pretendere, dove deve stare il file, quanto spazio serve e come consegnare un'immagine senza trasformarla in un incidente.

## Il formato conta più del disco

Una radiografia digitale non è solo una griglia di pixel. Si porta dietro paziente, data, apparecchio, tecnica e parametri di esposizione, ed è quella parte a trasformare un'immagine in documentazione clinica.

Lo standard internazionale è il DICOM, che NEMA definisce come lo standard per trasmettere, archiviare, recuperare, stampare, elaborare e visualizzare informazioni di imaging medico. È scaricabile gratuitamente, quindi chiunque può verificare cosa dice.

- **DICOM PS3.10** definisce il formato del file, quello che ti permette di copiare un'immagine altrove e continuare a leggerla.
- **DICOM PS3.2** definisce la conformità e obbliga ogni produttore a pubblicare un documento su cosa implementa davvero. Quel documento si chiede prima di comprare, non dopo.
- **Un JPEG esportato non è la stessa cosa.** Va bene per mostrare qualcosa al paziente e non vale come archivio, perché perde i metadati e spesso anche la profondità di bit.

> **La prova che dice se hai un archivio o un ostaggio.** Prendi una radiografia di due anni fa, copiala su una chiavetta e aprila su un computer dove il software del sensore non è installato. Se non si apre, non hai un archivio clinico: hai un file chiuso dentro un prodotto.

## Dieci anni, e da quando si contano

Il Garante per la protezione dei dati personali, nei chiarimenti del 7 marzo 2019 sul trattamento dei dati sanitari, richiama espressamente la regola: "alla documentazione iconografica radiologica, che deve essere conservata per un periodo non inferiore a dieci anni (art. 4, d.m. 14 febbraio 1997)".

Dieci anni è un minimo, non un obiettivo, e due dettagli sfuggono quasi sempre.

- **Il conteggio parte dall'immagine, non dal paziente.** Un archivio ordinato per cartella e non per data rende impossibile applicare la regola senza aprire tutto a mano.
- **Scrivi la regola prima di averne bisogno.** Una decisione che puoi mostrare è difendibile. Cancellare perché il disco era pieno è lo stesso gesto senza alcuna difesa.

| Decisione | Cosa succede di solito | Cosa devi poter dimostrare |
|---|---|---|
| Quando si cancella un'immagine | ✗ Non si decide mai, si cancella quando manca spazio | ✓ Una regola scritta e applicata uguale per tutti |
| Chi può cancellarla | ✗ Chiunque abbia accesso alla cartella | ✓ Un permesso preciso, con registrazione |
| Dove sta la copia più vecchia | ~ Su un disco dentro un armadio | ✓ Su un supporto che qualcuno ha riletto quest'anno |

## L'immagine sta nella cartella clinica, non in una directory

L'errore più comune non è perdere le radiografie, è non ritrovarle. Una cartella chiamata `2019-11-14` con dodici file numerati è carta digitalizzata, non è cartella clinica.

Appena l'immagine è legata al paziente e all'appuntamento, tre cose smettono di essere un problema: trovarla, sapere perché è stata fatta e sapere chi l'ha guardata.

![Cartella clinica di un paziente con odontogramma, avvisi clinici e piano di cura in corso](/screenshots/dental-chart.png)

*La cartella a cui l'immagine finisce agganciata, accanto al dente che documenta e al piano che l'ha motivata.*

| | Cartella sul PC del riunito | Cartella condivisa sul server | Agganciata alla cartella clinica |
|---|---|---|---|
| Trovare l'immagine di un paziente | ✗ Dipende da come è stata nominata quel giorno | ~ Solo finché qualcuno tiene la convenzione | ✓ Sta nella cartella clinica |
| Entra nel backup | ✗ Quasi mai | ~ Se qualcuno si è ricordato di includerla | ✓ Insieme al resto dei dati |
| Sopravvive al cambio di computer | ✗ Resta sulla macchina vecchia | ~ Se la condivisione viene migrata | ✓ Segue la banca dati |
| Traccia di chi l'ha aperta | ✗ Nessuna | ✗ Nessuna | ~ Solo se il gestionale registra gli accessi |

## Lo spazio si misura, non si stima

Nessun numero generale serve, perché dipende dal sensore, dalla risoluzione e dal fatto che tu faccia o no cone beam. Quello che esiste è un modo per saperlo in dieci minuti.

1. **Guarda quanto pesa la cartella delle immagini degli ultimi dodici mesi.** È l'unico dato che descrive il tuo studio e non quello di un altro.
2. **Dividilo per i pazienti visti** in quel periodo. Hai la tua media reale per paziente.
3. **Moltiplica per i pazienti attesi e per gli anni di conservazione.** È la dimensione del tuo archivio fra dieci anni.
4. **Misura la CBCT a parte**, se la fai. Un volume 3D non è nell'ordine di grandezza di una endorale, e un solo esame può pesare più di un anno di intraorali.
5. **Confronta quel numero con lo spazio incluso dal fornitore** e con il costo dello scaglione successivo. La sorpresa di solito sta lì.

> **Un archivio che cresce senza regola finisce per decidere al posto tuo.** Il martedì mattina in cui il disco si riempie, la domanda non è più cosa conservare ma cosa cancellare in fretta. E spariscono le immagini dei pazienti che non vengono più, cioè esattamente quelle che qualcuno chiederà fra tre anni.

## Il backup che lascia fuori le immagini

Le radiografie sono quasi tutto il volume di dati di uno studio, quindi sono le prime a essere escluse quando un backup deve chiudersi entro la notte. Il processo continua a girare, continua a segnalare successo, e non protegge più la parte grossa.

- **Controlla la dimensione del backup**, non solo il messaggio di riuscita. Se pesa molto meno dei tuoi dati, le immagini stanno restando fuori.
- **Ripristina un backup completo almeno una volta l'anno** e apri tre pazienti con radiografie. La procedura sta nella guida al [backup](/it/blog/backup-studio-dentistico/).
- **Cifra ogni supporto che esce dallo studio.** Un disco perso con immagini cliniche è una violazione di dati da notificare.

## Consegnarle senza creare un incidente

Una radiografia identifica una persona e ne descrive la salute, quindi è un dato di categoria particolare. Il GDPR chiede misure adeguate al rischio, e l'allegato in una mail ordinaria non lo è quando esiste di meglio.

- **Al paziente:** ha diritto a una copia. Dagli il DICOM se va da uno specialista, e aggiungi una versione che riesca ad aprire a casa senza software particolari.
- **A un collega:** un link a scadenza o un portale battono l'allegato, perché scadono e lasciano traccia. Se deve essere mail, va cifrata e la password passa da un altro canale.
- **Al laboratorio:** manda solo quello che serve al lavoro. Una corona non richiede tutto lo storico radiologico del paziente.
- **Registra ogni consegna.** Data, destinatario, canale, contenuto. Quel registro è la risposta a una contestazione due anni dopo.

![Scheda paziente sulla linguetta attività, con avvisi clinici, piano in corso e una linea del tempo filtrabile per visite, trattamenti, pagamenti e comunicazioni](/screenshots/patient-timeline.png)

*La linea del tempo del paziente, dove si vede in quale visita è stato fatto ciascun esame.*

## Quando cambi gestionale, le immagini sono quello che resta indietro

In una migrazione si negozia la banca dati e ci si dimentica delle immagini. Chiedi tre cose precise per iscritto, prima di firmare.

1. **Un export delle immagini in DICOM**, non una cartella di schermate né un visualizzatore proprietario.
2. **Il legame fra ogni immagine, il suo paziente e la sua data**, in un file leggibile. Senza quello hai ventimila file e nessuno storico.
3. **Un export di prova adesso**, su dieci pazienti veri, invece di una promessa per il giorno in cui te ne vai.

È una conversazione che riesce meglio prima di impegnarsi, e sta nell'elenco delle [domande da fare prima di firmare](/it/blog/domande-prima-di-firmare-gestionale/).

In Dentalpin le immagini stanno agganciate alla cartella clinica e appoggiate sul file system, quindi entrano nello stesso backup della banca dati e puoi portartele via quando vuoi. Le condizioni sono su [prezzi](/it/prezzi/).

## Fonti

- Garante per la protezione dei dati personali, *Chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario*, 7 marzo 2019, che richiama l'art. 4 del d.m. 14 febbraio 1997. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942). Consultato il 28 agosto 2026.
- Standard DICOM, edizione corrente ed elenco delle parti (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Consultato il 28 agosto 2026.
- Regolamento (UE) 2016/679 (GDPR), articoli 9, 15 e 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 28 agosto 2026.

Questo non è un parere legale. I termini applicabili al tuo caso vanno confermati con il tuo consulente o con l'Ordine.
