---
title: "Duplicati in anagrafica pazienti: ripulirla senza perdere nulla"
description: "Come individuare le schede paziente duplicate, decidere quale resta e unirle senza perdere cartella clinica o fatture, ed evitare che ne nascano altre."
pubDate: 2026-08-26
translationKey: pacientes-duplicados-limpiar
tags: [duplicati, cartella-clinica, qualita-dei-dati, gdpr]
---

Non cancellate nessuna delle due schede. Si sceglie una scheda superstite, ci si sposta dentro tutto quello che è agganciato all'altra (appuntamenti, preventivi, fatture, immagini, consensi) e la scheda perdente resta archiviata e collegata, mai eliminata. E prima di unire la prima coppia conviene sistemare il momento in cui le schede vengono create, altrimenti fra un anno si ripulisce la stessa anagrafica.

Il danno di un duplicato non sono due righe in una tabella. È l'allergia annotata su una scheda mentre l'estrazione si programma dall'altra.

## Da dove arrivano i duplicati

Quasi sempre dagli stessi cinque punti, e nessuno è disattenzione del personale.

- **La scheda si crea prima di cercare.** Il telefono squilla, tre persone aspettano, e il pulsante "nuovo paziente" è più a portata di mano della ricerca.
- **La stessa persona entra da due porte.** Prenotazione online, telefono, accesso diretto, messaggio. Se ogni canale può creare una scheda senza verificare, ogni canale produce duplicati.
- **Il nome non è un dato stabile.** Cognomi doppi, apostrofi, "De Luca" e "Deluca", nomi composti spezzati a metà, accenti scritti a volte sì e a volte no.
- **La migrazione è stata lanciata due volte**, oppure ha importato pazienti già presenti nel gestionale nuovo.
- **La famiglia condivide i recapiti.** Il cellulare della madre sta sulle schede dei tre figli, e qualsiasi ricerca per numero restituisce quattro persone diverse che non sono duplicati.

## Cercare per indizi, non per nome

Elencare tutti gli omonimi produce una lista lunga e piena di falsi positivi. Quello che funziona è incrociare due indizi insieme e ordinare il risultato in base a quanto è affidabile la combinazione.

| Indizio | Affidabilità | A cosa serve |
|---|---|---|
| Codice fiscale identico | ✓ Molto alta | Da guardare per primo, è quasi una certezza |
| Cellulare + data di nascita | ✓ Alta | La combinazione più redditizia in studio |
| Nome normalizzato + data di nascita | ✓ Alta | Trova chi ha cambiato numero |
| Stesso indirizzo e-mail | ~ Media | Le famiglie condividono la casella |
| Solo il numero di telefono | ✗ Bassa | Restituisce interi nuclei familiari |
| Cognome + CAP | ✗ Bassa | Vicini di casa e parenti |

Normalizzare prima di confrontare è metà del lavoro. Per il nome: tutto minuscolo, via gli accenti, via punti e apostrofi, spazi compattati. Per il telefono: via spazi e prefisso, poi si confrontano le ultime nove cifre.

Così "D'Angelo, Maria Chiara" e "maria chiara dangelo" finiscono nello stesso gruppo, che è esattamente ciò che la ricerca alla reception non fa.

![Scheda paziente con la scheda anagrafica aperta: nome, codice identificativo, data di nascita, telefono, e-mail e indirizzo](/screenshots/patients.png)

*I campi che si confrontano per decidere se due schede sono la stessa persona. La data di nascita è quella che discrimina di più ed è anche quella lasciata vuota più spesso.*

## Quale resta: quasi mai la più recente

La scheda recente di solito è quella creata di fretta: il nome scritto bene e nient'altro dentro. Quella vecchia contiene l'odontogramma, le radiografie e otto anni di storia.

> **Resta la scheda con contenuto clinico, non quella con i recapiti giusti.** Un numero di telefono si ricopia in dieci secondi. Un odontogramma con dodici trattamenti e le loro date no.

Quando entrambe hanno contenuto vero, l'ordine per decidere è questo:

1. **Quella con cartella clinica e odontogramma.** È la parte che non si può riscrivere senza perdere date e autore.
2. **Quella che compare su fatture già emesse.** Riagganciare una fattura è semplice, ma meno se ne toccano, meglio è.
3. **La più vecchia**, perché il numero di cartella che il paziente sente da anni è quello.

I dati anagrafici si riconciliano campo per campo dopo, non si scelgono in blocco. Sul nome vince spesso la scheda nuova, sulla storia clinica vince sempre la vecchia.

## L'unione, passo per passo

1. **Fate una copia prima di toccare qualsiasi cosa.** Un'unione raramente ha un pulsante di annullamento, e dove c'è non annulla quello che è già stato stampato.
2. **Aprite le due schede ed elencate cosa è agganciato a ciascuna**: appuntamenti passati e futuri, preventivi, fatture, pagamenti e insoluti, radiografie e fotografie, consensi firmati, annotazioni cliniche, lavori odontotecnici e trattamenti ortodontici in corso.
3. **Decidete la scheda superstite** con l'ordine qui sopra e scrivete la decisione prima di iniziare.
4. **Spostate, non riscrivete.** Ricopiare a mano un'annotazione clinica ne cambia data e autore, ed è esattamente ciò che una cartella clinica non può permettersi di perdere.
5. **Non rinumerate e non riemettete nessuna fattura.** Una fattura emessa è un documento chiuso: si cambia il paziente a cui punta, mai il numero, la data o gli importi.
6. **Archiviate la scheda perdente collegata alla superstite.** Chi cerca il vecchio numero deve arrivare alla scheda giusta, non a un errore.
7. **Registrate chi ha unito, quando e da quale scheda.** Fra due anni quella nota sarà l'unica spiegazione del salto nella storia clinica.
8. **Ricontrollate le allerte mediche della scheda risultante.** Allergie, anticoagulanti e premedicazione sono la prima cosa che si perde in un'unione fatta male.

> **Le fatture sono la parte che non tollera improvvisazione.** Una numerazione già emessa resta esattamente com'è. Se l'unione sembra costringere a riemettere qualcosa, non è più un'unione, e quella decisione spetta a chi tiene la contabilità.

![Elenco fatture con gli stati emessa, incassata, incassata in parte, scaduta e bozza](/screenshots/invoices.png)

*Quello che è agganciato a una scheda e non si può riscrivere. Prima di unire conviene sapere quante fatture ci sono da ciascun lato e in che stato.*

## Quelli che sembrano duplicati e non lo sono

Unire due schede che non erano la stessa persona è peggio del problema di partenza, perché mescola due storie cliniche.

- **Famiglie con un solo recapito.** Tre fratelli sul cellulare della madre sono tre pazienti.
- **Padre e figlio con lo stesso nome.** La data di nascita li separa, il nome no.
- **Gemelli.** Stesso cognome, stessa data di nascita, stesso indirizzo, stesso numero. È l'unico caso in cui bisogna leggere la storia prima di decidere.
- **Minori senza codice proprio registrato.** Manca l'indizio più affidabile, quindi si confrontano nome, data di nascita e genitore di riferimento.

Nel dubbio non si unisce: si segna la coppia come verificata e si chiede al paziente alla visita successiva.

## Cosa chiede la normativa

Questo non è un parere legale, ma due punti vanno conosciuti prima di ripulire un'anagrafica.

L'articolo 5, paragrafo 1, lettera d) del GDPR chiede che i dati personali siano esatti e, se necessario, aggiornati, e che siano adottate tutte le misure ragionevoli perché i dati inesatti siano cancellati o rettificati senza ritardo. Un'anagrafica piena di duplicati non lo rispetta per costruzione, quindi ripulirla non è solo igiene interna.

L'articolo 16 aggiunge il diritto del paziente a ottenere senza ingiustificato ritardo la rettifica dei dati inesatti e l'integrazione di quelli incompleti, anche fornendo una dichiarazione integrativa. È esattamente la posizione di chi ha metà storia clinica su ciascuna scheda.

Il motivo per cui si archivia invece di cancellare è l'altro lato della stessa cosa: l'obbligo di conservazione riguarda la documentazione clinica, non il numero di scheda sotto cui si trova. Cancellare una scheda perdente che contiene contenuto clinico resta un problema qualunque sia il termine applicabile.

## Perché non ne nascano altri mille

Ripulire senza cambiare il percorso di accettazione è lavoro destinato a ripetersi. Cinque cambiamenti che interrompono il ciclo:

- **Cercare prima di creare, e rendere la ricerca la strada facile.** Se alla reception serve il nome completo per trovare qualcuno, verrà creata una scheda nuova.
- **Data di nascita obbligatoria dal primo contatto.** È il campo che trasforma una ricerca ambigua in una certezza, ed è quello che tutti saltano.
- **Normalizzare al salvataggio**, non alla ricerca. Accenti, spazi in eccesso e prefissi si puliscono una volta sola, in entrata.
- **Far corrispondere la prenotazione online all'anagrafica** invece di creare sempre una scheda nuova. È la porta che genera più duplicati.
- **Un report di possibili duplicati ogni settimana.** Dieci coppie a settimana si controllano in cinque minuti, mille coppie all'anno non le controlla nessuno.

## Cosa deve permettervi il gestionale

Un'unione sicura dipende da quattro cose: una ricerca che tolleri accenti e varianti, un report di duplicati verificabile coppia per coppia, un'unione che sposti i record invece di copiarli, e una traccia di chi l'ha fatta e quando.

Dentalpin ha questi quattro punti e conserva la scheda unita come alias della superstite, così il vecchio numero di cartella porta ancora al posto giusto. Si installa sul vostro server oppure si usa nella versione gestita, e i [prezzi](/it/prezzi/) sono pubblicati sul sito.

## Fonti

Tutte consultate il 26 agosto 2026.

- Regolamento (UE) 2016/679 (GDPR), articolo 5, paragrafo 1, lettere d) ed e), e articolo 16. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- Commission nationale de l'informatique et des libertés, testo del Regolamento, capi II e III. [cnil.fr](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3)
