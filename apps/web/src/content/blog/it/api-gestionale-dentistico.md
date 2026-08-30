---
title: "L'API del tuo gestionale dentistico: cosa dovresti poter fare con i tuoi dati"
description: "Cosa deve permetterti l'API di un gestionale odontoiatrico: leggere, scrivere, ricevere avvisi e uscire. Le domande da fare prima di firmare e come provarla."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, integrazioni, contratti, esportazione-dati, gdpr]
---

Dovresti poter leggere e scrivere, da fuori del programma, le quattro cose su cui gira lo studio: pazienti, appuntamenti, preventivi e fatture. Con le tue credenziali, senza chiedere il permesso a nessuno e senza attivare un modulo a parte. Questo è l'esame pratico, e pochissimi gestionali odontoiatrici lo superano per intero.

La legge ti garantisce parecchio meno di così, ma qualcosa te la garantisce. Conviene sapere cosa prima di sederti a trattare.

## Un'API è la seconda porta del programma

Lo schermo è la porta da cui passano le persone. L'API è la porta da cui passano gli altri programmi, con la stessa serratura e gli stessi permessi.

Quando c'è, il modulo di prenotazione del sito scrive direttamente in agenda e nessuno ridigita niente. Quando non c'è, ogni integrazione diventa una persona che ricopia dati da uno schermo all'altro.

![Scheda di un paziente a schermo con i dati anagrafici, i contatti e i dati di fatturazione](/screenshots/patients.png)

*La scheda di un paziente, con anagrafica, contatti e dati di fatturazione divisi in schede.*

## Le quattro cose che un'API deve permetterti

- **Leggere.** Estrarre l'elenco pazienti, gli appuntamenti di un intervallo di date, i preventivi accettati del trimestre. È quello che alimenta un report o un cruscotto.
- **Scrivere.** Creare un appuntamento, registrare un paziente, segnare una fattura come incassata. Senza scrittura, l'integrazione serve a guardare e poco altro.
- **Avvisarti.** Un webhook è il programma che chiama il tuo sistema quando succede qualcosa, invece del tuo sistema che chiede ogni cinque minuti se è successo.
- **Lasciarti uscire.** Uno scarico completo di tutto, che non è l'API e non la sostituisce.

> **Un'API non è un backup e non è un'esportazione.** Sposta un dato adesso, non ricostruisce lo studio la mattina in cui il server non parte. Se l'API ti viene presentata come risposta a "come tiro fuori i miei dati", manca metà della risposta.

## Cosa ti garantisce la legge e cosa no

Qui c'è un equivoco che costa caro. Il diritto alla portabilità del GDPR è del paziente, non dello studio.

L'articolo 20, paragrafo 1 dà all'interessato il diritto di ricevere i dati personali che lo riguardano "in un formato strutturato, di uso comune e leggibile da dispositivo automatico" e di trasmetterli a un altro titolare. Il paragrafo 2 aggiunge il diritto alla trasmissione diretta da un titolare all'altro "se tecnicamente fattibile". L'articolo 15, paragrafo 3 impone di fornire una copia, in formato elettronico di uso comune quando la richiesta arriva per via elettronica.

In uno studio odontoiatrico il titolare del trattamento di norma sei tu e il fornitore del gestionale è il responsabile. Il paziente esercita quindi quel diritto verso lo studio, e lo studio ha bisogno di un software che sappia soddisfarlo. Il GDPR, da solo, non ti dà un'API opponibile al tuo fornitore.

Quello che comincia a dartene una è il regolamento europeo sui dati, il Data Act (regolamento (UE) 2023/2854), applicabile dal 12 settembre 2025:

- **Interfacce aperte e gratuite.** L'articolo 30, paragrafo 2 obbliga i fornitori di servizi di trattamento dati a mettere interfacce aperte a disposizione di tutti i clienti a titolo gratuito, con informazioni sufficienti "per consentire lo sviluppo di software che comunichi con i servizi".
- **Esportazione al cambio.** L'articolo 30, paragrafo 5 obbliga a esportare, su richiesta del cliente, tutti i dati esportabili in un formato strutturato, di uso comune e leggibile da dispositivo automatico.
- **Niente costi di uscita dal 2027.** L'articolo 29, paragrafo 1 vieta qualsiasi onere di passaggio a partire dal 12 gennaio 2027. Fino ad allora sono ammessi oneri ridotti, non superiori al costo effettivo.

> **Questi obblighi riguardano il cambio di fornitore, non la tua automazione quotidiana.** E si applicano a quello che il regolamento chiama servizio di trattamento dati, definito all'articolo 2, punto 8 come in sostanza un servizio cloud. Se il tuo gestionale è in licenza su un server dello studio, quel capitolo non è la tua leva. La tua leva è il contratto.

Questo non è un parere legale. Riferimenti e date di consultazione sono in fondo.

## Esportazione, API e webhook risolvono problemi diversi

| | Esportazione | API | Webhook |
|---|---|---|---|
| A cosa serve | Portare via tutto | Spostare un dato adesso | Sapere che è successo qualcosa |
| Ogni quanto | ✓ Una tantum o mensile | ✓ In continuo | ✓ Nell'istante |
| Serve per migrare | ✓ Sì, è il suo compito | ~ Lenta e a pezzi | ✗ No |
| Serve per integrare | ✗ No | ✓ Sì | ✓ Sì |
| Vale come backup | ~ Solo se conservata fuori | ✗ No | ✗ No |
| Di solito inclusa | ✓ Quasi sempre | ~ Dipende dal fornitore | ~ Dipende dal fornitore |

## Le sette domande da fare prima di firmare

1. **Dov'è la documentazione e posso leggerla adesso, senza firmare nulla?** Un URL pubblico che apri oggi dice più di qualsiasi risposta commerciale. Se ti mandano un PDF, chiedi di che anno è.
2. **È inclusa nel canone o è un modulo a parte?** E se è a parte, quanto costa e con quale tetto di chiamate. Un'API a consumo cambia il disegno di tutto quello che ci costruisci sopra.
3. **È in sola lettura?** Metà del valore sta nella scrittura. Un'API in sola lettura non può creare l'appuntamento che un paziente ha appena prenotato sul tuo sito.
4. **Quali entità copre esattamente?** Pazienti, appuntamenti, preventivi, prestazioni, fatture, documenti, odontogramma. Fatti dare l'elenco, non la promessa, e verifica se la cartella clinica è dentro o fuori.
5. **Ci sono webhook e quali eventi emettono?** Senza, ogni integrazione finisce a interrogare in ciclo, che è la strada più breve verso un limite di chiamate.
6. **Quali sono i limiti?** Chiamate al minuto, dimensione della pagina, numero di credenziali. Un limite pubblicato è un buon segno; un limite che nessuno sa dirti lo scoprirai in produzione.
7. **Cosa succede il giorno in cui me ne vado?** Che l'API resti attiva durante il preavviso, con accesso completo in lettura, va scritto nel contratto accanto alla clausola di esportazione.

## Cinque cose che si sistemano da sole quando c'è un'API

- **Il sito scrive in agenda.** Il paziente prenota, l'appuntamento compare, la sera nessuno trascrive niente.
- **I numeri del trimestre per il commercialista.** Un report che si genera da solo il primo del mese, invece di un pomeriggio di esportazioni e quadrature a mano.
- **I richiami sul canale che già usi.** Se il tuo fornitore di messaggistica non è integrato, con l'API lo colleghi tu. Senza API aspetti che lo faccia il produttore.
- **Un cruscotto di indicatori tuo.** Utilizzo del riunito, accettazione dei preventivi e insoluti, con le tue definizioni e non con quelle del fornitore.
- **Ripulire i duplicati in blocco.** Trovarli leggendo tutta la banca dati è mezz'ora. Farlo schermata per schermata è un mese.

![Vista giornaliera dell'agenda con gli appuntamenti disposti in colonne e fasce orarie](/screenshots/schedule-day.png)

*L'agenda in vista giornaliera, con gli appuntamenti disposti in colonne e fasce orarie.*

## Come provarla in venti minuti senza essere programmatore

1. **Chiedi l'URL della documentazione.** Aprilo dal telefono davanti al commerciale. O si carica, o hai già saputo qualcosa.
2. **Cerca la sezione sull'autenticazione.** Deve spiegare come si ottiene una credenziale senza telefonare all'assistenza.
3. **Chiedi un ambiente di prova.** La prima chiamata non si fa mai sui dati reali dello studio.
4. **Copia l'esempio dalla documentazione stessa.** Quasi tutte portano una riga pronta da incollare in un terminale:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.esempio.it/v1/patients
```

5. **Prova una scrittura.** Creare un appuntamento di prova e vederlo comparire in agenda è il momento in cui sai se l'integrazione è reale.
6. **Cerca la parola "limite" nella documentazione.** Se non c'è, chiedi per iscritto e conserva la risposta.

Se uno di questi sei passaggi richiede una riunione, anche quella è una risposta.

## Dove si colloca DentalPin

In DentalPin ogni funzionalità espone un endpoint REST documentato in OpenAPI, incluso nel prezzo e con i webhook, perché il prodotto si installa sul tuo server e un'integrazione non dovrebbe dipendere da una nostra autorizzazione. Cosa è compreso si vede su [prezzi](/it/prezzi/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articoli 15 paragrafo 3, 20 paragrafo 1 e 20 paragrafo 2: [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679). Consultato il 30 agosto 2026.
- Regolamento (UE) 2023/2854 (Data Act), articoli 2 punto 8, 29 paragrafi 1 e 2, 30 paragrafi 2 e 5, e 50: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32023R2854). Consultato il 30 agosto 2026.
