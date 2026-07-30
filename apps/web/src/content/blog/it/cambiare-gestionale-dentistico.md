---
title: "Cambiare gestionale dentistico senza perdere la cartella clinica"
description: "Guida pratica per cambiare gestionale odontoiatrico senza perdere pazienti, cartelle cliniche o fatture: cosa esportare, come provarlo prima e il passaggio in cui fallisce quasi ogni migrazione."
pubDate: 2026-07-30
tags: [migrazione, gestionale-dentistico, cartella-clinica]
---

Migrare senza perdere niente si riduce a tre regole: esporta tutto prima di disdire il contratto vecchio, in un formato che tu possa leggere senza quel software; prova l'importazione su una copia prima di toccare lo studio vero; e non dare per buona nessuna corrispondenza automatica tra cataloghi di trattamenti senza controllarla riga per riga. Chi perde dati quasi sempre ha saltato la prima regola, fidandosi del fatto che "al resto ci pensa il nuovo fornitore".

Non serve essere tecnici per farlo bene. Serve farlo in quest'ordine.

## Prima di toccare qualsiasi cosa: esporta e verifica

Chiedi l'export completo al fornitore che stai lasciando, non una selezione di quello che lui considera rilevante. Come minimo, questo deve uscire dal suo sistema e arrivare nel tuo in un formato aperto (CSV, XML o un database che puoi interrogare senza licenza):

- **La scheda paziente completa**: dati di contatto, consensi firmati e data di apertura.
- **Cartella clinica e odontogramma**, con la data di ogni annotazione, non solo lo stato di oggi.
- **Preventivi e fatture**, con la numerazione originale. Un buco nella numerazione è la prima cosa che salta all'occhio in un controllo.
- **Immagini e radiografie**, che quasi sempre vivono fuori dal database principale e vengono dimenticate fino all'ultimo giorno.
- **Il catalogo dei trattamenti** così come è codificato nel sistema vecchio, non solo i nomi che vedi a schermo.
- **Lo storico dell'agenda**, se ti servirà giustificare presenze e assenze.

![Attività di un paziente in Dentalpin: appuntamento programmato, piano di cura creato, appuntamento completato e trattamento eseguito, ogni riga con la sua data](/screenshots/patient-timeline.png)

*Questo è ciò che un export deve conservare: ogni annotazione con la sua data, non solo lo stato di oggi.*

> **L'export è la tua rete di sicurezza, non una formalità di uscita.** Chiedilo settimane prima di firmare con il nuovo fornitore, aprilo e controllalo tu. Se chi stai lasciando fa resistenza a dartelo completo, quella è un'informazione su come tratta i tuoi dati, e ce l'hai prima di andartene.

## Il passaggio in cui fallisce quasi ogni migrazione

Due studi non codificano quasi mai i trattamenti allo stesso modo. Uno chiama "endodonzia" quello che un altro divide in tre codici diversi a seconda dell'elemento e del numero di canali. Quando il software nuovo prova ad abbinare in automatico il catalogo vecchio al suo, ci sono righe che combaciano in modo evidente e righe che non combaciano.

L'errore non è che l'abbinamento sbagli. È accettare un abbinamento dubbio senza guardarlo.

> **Una corrispondenza indovinata in silenzio produce fatture sbagliate che nessuno scopre per mesi.** Non è un difetto del software, è un difetto del processo: se nessuno controlla riga per riga quello che il sistema propone, l'errore si eredita su ogni paziente che da adesso in poi userà quel trattamento.

Prima di accettare un'importazione massiva, chiedi di vedere la mappatura proposta con i conteggi: quanti pazienti, quante righe di preventivo e quante fatture dipendono da ogni trattamento che verrà riassegnato.

## Come provarlo senza rischiare lo studio vero

1. **Genera l'export completo** del sistema vecchio e mettilo da parte, fuori da entrambi i sistemi, prima di installare qualsiasi cosa.
2. **Esegui l'importazione in un ambiente di prova**, non sui dati in produzione del sistema nuovo.
3. **Confronta i conteggi**: numero di pazienti, di preventivi, di fatture e di appuntamenti futuri. Se non tornano, fermati qui.
4. **Convivi in parallelo per qualche settimana** se il volume dello studio lo permette: continua a fatturare nel sistema vecchio mentre verifichi che il nuovo rifletta le stesse cose.
5. **Congela il sistema vecchio in sola lettura** quando ti fidi del nuovo. Non cancellarlo e non disdire ancora l'abbonamento.

## Cosa pretendere dal fornitore attuale

- **Un export completo, non una API limitata a quello che a lui conviene esporre.**
- **Formato aperto e documentato**, così chi lo riceve non deve indovinare cosa significa ogni campo.
- **Un tempo ragionevole**, non la minaccia di cancellazione pochi giorni dopo la disdetta.
- **Le immagini nella risoluzione originale**, non un'anteprima compressa.

Verifica anche con il tuo commercialista o con l'ordine professionale i tempi di conservazione della documentazione clinica che si applicano a te: cambiano, e non sono terreno su cui dare per buona una cifra senza controllarla.

## Una checklist prima di firmare con il nuovo

| Cosa controllare | Perché conta |
|---|---|
| Il formato dell'export che consegna il fornitore attuale | Decide se ti serve uno strumento intermedio o puoi importare direttamente |
| Se il sistema nuovo mostra un'anteprima prima di scrivere | Senza anteprima, un errore di mappatura è già applicato quando lo vedi |
| Se la mappatura dei trattamenti si controlla riga per riga o solo in blocco | Il blocco è veloce ed è lì che si infila l'errore |
| Se le immagini migrano insieme alla scheda o a parte | A parte significa che qualcuno dovrà ricollegarle a mano dopo |
| Se puoi tenere il sistema vecchio in sola lettura | Senza quello non hai niente con cui confrontare se qualcosa non torna |

![Elenco fatture con numerazione progressiva da FAC-2026-0001 a FAC-2026-0008 e il loro stato di incasso](/screenshots/invoices.png)

*La numerazione deve arrivare intera nel sistema nuovo. Un buco è la prima cosa che si vede da fuori.*

In Dentalpin abbiamo risolto la cosa con un modulo di importazione (`migration_import`) che segue le stesse quattro fasi di questa guida: carica il file, mostra un'anteprima con i conteggi prima di scrivere qualsiasi cosa, lascia controllare la mappatura dei trattamenti riga per riga (quello che supera 0,9 si accetta in blocco, sul resto decidi tu) e solo allora esegue. Il flusso completo è documentato in [dental-bridge](https://github.com/dentaltix/dental-bridge), e [installare Dentalpin sul tuo server](/it/blog/installare-dentalpin-in-tre-minuti/) richiede tre minuti se poi vuoi provarlo con il tuo export.

Ti sei imbattuto in un passaggio della migrazione che qui manca? [Raccontacelo](https://github.com/martinezsalmeron/dentalpin/discussions) e lo aggiungiamo.
