---
title: "Cos'è la licenza BSL e cosa ti permette di fare"
description: "La BSL permette di scaricare, verificare ed eseguire il software sul tuo server, vieta di rivenderlo come SaaS e scade: ogni versione diventa open source."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [licenze, open-source, bsl, contratti, gestionale-dentistico]
---

La Business Source License ti lascia scaricare il codice, leggerlo, modificarlo ed eseguirlo sul tuo server senza pagare nulla. Vieta una cosa sola: rivendere quello stesso software come servizio commerciale in concorrenza con chi lo pubblica. E ha una scadenza, perché ogni versione passa automaticamente a una vera licenza open source al massimo quattro anni dopo la pubblicazione.

È quella terza parte che quasi nessuno legge, ed è quella che decide se la licenza ti conviene.

> **La BSL non è una licenza open source, e lo dice da sola.** La sua stessa nota legale si apre così: «The Business Source License (this document, or the "License") is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License».

## Le cinque caselle che compila chi pubblica

La BSL non è una licenza fissa come la MIT o la GPL, dove il testo è sempre identico. È un modello con cinque spazi vuoti, e li compila chi pubblica il software.

Vuol dire che «è sotto BSL» non ti dice ancora cosa puoi fare. Devi guardare le caselle.

| Parametro | Cosa stabilisce |
|---|---|
| Licensor | Chi pubblica il software e da chi compri se ti serve una licenza commerciale |
| Licensed Work | Quale software e quali versioni esatte copre questa licenza |
| Additional Use Grant | Quanto uso in produzione è permesso gratuitamente |
| Change Date | La data in cui quella versione cambia licenza da sola |
| Change License | La licenza open source verso cui passa quel giorno |

Due di queste cinque sono l'intera trattativa: l'**Additional Use Grant**, che stabilisce fin dove puoi usarlo gratis in produzione, e la **Change Date**, che stabilisce quando la restrizione smette di contare.

L'esempio pubblicato dagli autori stessi della licenza è MariaDB MaxScale. Il suo Additional Use Grant recita: «You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production». Sotto i tre server è gratis, oltre serve una licenza commerciale.

## Cosa la BSL permette e cosa no

Il testo base concede di copiare, modificare, creare opere derivate, redistribuire e fare uso non produttivo. L'uso in produzione dipende dalla casella vista sopra.

| Azione | Sotto una licenza BSL |
|---|---|
| Scaricare e leggere tutto il codice | ✓ Sempre permesso |
| Modificarlo per il tuo caso | ✓ Sempre permesso |
| Redistribuirlo con la licenza allegata | ✓ Sempre permesso |
| Usarlo per test e sviluppo | ✓ Sempre permesso |
| Usarlo in produzione | ~ Solo fin dove arriva l'Additional Use Grant |
| Rivenderlo come servizio commerciale concorrente | ✗ Richiede una licenza commerciale |

La riga ambra è l'unica da leggere con attenzione. «Produzione» significa l'uso reale da cui esce valore economico, cioè il tuo studio che segue pazienti veri, non un'installazione di prova su un portatile.

## Non essere open source non è un difetto, ma è un dato

La Open Source Initiative mantiene la definizione di open source, e la sua clausola 6 dice che «la licenza non deve impedire a nessuno di usare il programma in un ambito di attività specifico». Una BSL limita esattamente questo: un ambito di attività, quello di costruire un SaaS concorrente.

Per questo non compare nell'elenco delle licenze approvate dalla OSI, e per questo il suo stesso testo anticipa la domanda.

In pratica ti riguarda in due punti precisi:

- **In un bando pubblico o in un capitolato** che chieda «software a codice aperto» con queste parole, una BSL non soddisfa il requisito formale anche se il codice è pubblicato per intero.
- **Nella verifica del tuo informatico**, dove invece non cambia nulla. Può leggere il codice, compilarlo e controllare cosa fa con i dati esattamente allo stesso modo.

## La data di cambio è la clausola che davvero ti protegge

È questo che distingue la BSL da un software proprietario che per caso mostra il codice. La restrizione ha una scadenza, ed è scritta nel file stesso.

La versione 1.1 della licenza ha messo un tetto: la data di cambio non può superare i quattro anni dalla prima distribuzione pubblica di quella versione. E la licenza di arrivo deve essere GPL v2, GPL v3 o una compatibile, quindi una licenza open source vera.

> **La data di cambio vale versione per versione, non per l'intero progetto.** La versione che hai installato quest'anno ha la sua data, e quella che uscirà fra due anni avrà la propria. L'orologio della tua installazione è partito il giorno in cui quella versione è stata pubblicata, non il giorno in cui l'hai installata.

![Cartella clinica del paziente con gli avvisi clinici, il piano di cure attivo e la cronologia filtrabile per visite, trattamenti, pagamenti e comunicazioni](/screenshots/patient-timeline.png)

*Anni di cartelle cliniche dentro un programma. La data di cambio decide cosa potrai farne se chi lo pubblica sparisce.*

Detto altrimenti: la BSL ti dà un deposito del codice sorgente che non hai dovuto negoziare. Se il fornitore chiude, la versione che stai eseguendo diventa comunque open source il giorno previsto, e da lì qualsiasi sviluppatore competente può mantenerla. Con una licenza proprietaria classica quel giorno non esiste.

## Come leggere qualsiasi licenza BSL in cinque minuti

Per la prima lettura non serve un avvocato. Apri il file `LICENSE` del repository e cerca queste cinque cose, in quest'ordine:

1. **Controlla la versione della licenza.** Deve indicare «Business Source License 1.1». La 1.0 non aveva il tetto dei quattro anni.
2. **Leggi l'Additional Use Grant per intero.** È l'unica frase che decide se il tuo uso reale è gratuito. Se non c'è, il testo base concede solo l'uso non produttivo.
3. **Guarda la Change Date.** Può essere una data fissa o una formula («quattro anni dalla pubblicazione»). Tutto ciò che va oltre i quattro anni esce da quello che la 1.1 consente.
4. **Guarda la Change License.** Se indica Apache 2.0, GPL o MPL sai esattamente cosa avrai quel giorno, perché sono licenze standard con testo pubblico.
5. **Cerca il Licensed Work.** Se nomina versioni precise, la licenza vale per quelle, e le successive possono uscire con condizioni diverse.

Se tutte e cinque sono compilate e leggibili, sai già di quel software più della maggior parte di chi lo installa.

> **Questo non è un parere legale.** È la lettura di un documento pubblico. Per un contratto firmato, per un bando o per qualsiasi dubbio sul tuo caso concreto la risposta deve darla un avvocato.

## Cosa cambia per uno studio odontoiatrico

La maggior parte di queste clausole è scritta pensando alle aziende di software, non a uno studio. Tradotto in ciò che ti tocca:

- **La restrizione della BSL non ti riguarda quasi mai.** Vieta di costruire un SaaS concorrente. Uno studio che usa il programma per i propri pazienti non rientra in quel caso, purché l'Additional Use Grant copra quell'uso.
- **Puoi installarlo sul tuo server** ed eseguirlo senza chiedere permesso né attivare nulla, che è la differenza pratica più grande rispetto a un software con licenza per postazione.
- **Il tuo informatico può verificarlo sul serio.** Può leggere cosa viene salvato, dove, e cosa esce dallo studio, senza firmare accordi di riservatezza con nessuno.
- **Hai una via d'uscita scritta.** La data di cambio è nel file, non in una promessa commerciale.

![Schema dell'installazione sul proprio server: browser, Caddy sulla porta 443, frontend Nuxt, API e database PostgreSQL](/diagrams/install-stack.svg)

*L'impianto che una licenza di questo tipo permette: tutto in esecuzione su un server tuo, senza attivazione verso il produttore.*

## La licenza di Dentalpin, casella per casella

Dentalpin è pubblicato sotto BSL 1.1, quindi puoi applicargli esattamente le cinque verifiche di sopra. Il suo file `LICENSE` dice, alla lettera:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** «You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work».
- **Change Date:** quattro anni dalla pubblicazione dell'opera licenziata.
- **Change License:** Apache License, Version 2.0.

Nelle domande frequenti del prodotto lo riassumiamo così: gratis per qualsiasi studio e qualsiasi sviluppatore, con l'unica restrizione di non lanciarlo come SaaS dentale concorrente, e con passaggio automatico ad Apache 2.0 dopo quattro anni. Quanto costa e cosa include è sulla [pagina dei prezzi](/it/prezzi/).

## Fonti

- [Business Source License 1.1, testo della licenza](https://mariadb.com/bsl11/), MariaDB. Consultato il 1 settembre 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Consultato il 1 settembre 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Consultato il 1 settembre 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Consultato il 1 settembre 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Consultato il 1 settembre 2026.
- File `LICENSE` del repository di Dentalpin. Consultato il 1 settembre 2026.
