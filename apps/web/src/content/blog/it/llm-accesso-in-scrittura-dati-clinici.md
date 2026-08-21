---
title: "Dare a un LLM accesso in scrittura ai dati clinici senza che sia una follia"
description: "Il modello non scrive mai: propone un'operazione ristretta, il codice ricontrolla i permessi e una persona conferma ogni modifica. Architettura e limiti."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ia, llm, architettura, sicurezza, gdpr]
---

La risposta breve è che il modello non scrive mai. Propone la chiamata a un'operazione ristretta e tipizzata, il tuo codice ricontrolla i permessi di chi ha chiesto, e qualunque cosa modifichi dei dati si ferma finché una persona non conferma. L'LLM interpreta la frase, eseguirla resta lavoro di back-end ordinario.

Qui sotto c'è la divisione delle responsabilità che rende tutto questo difendibile, cosa dicono le autorità sugli agenti che agiscono, e perché la finestra di conferma è il pezzo più facile da sbagliare.

## Le tre proprietà che un agente non può avere insieme

L'autorità spagnola per la protezione dei dati ha pubblicato a febbraio 2026 delle linee di orientamento sull'IA agentica che riprendono la cosiddetta regola del 2 nella versione riformulata per gli agenti di IA. Fissa una soglia di garanzie da non superare mai, costruita su tre proprietà:

1. **Trattare informazioni non controllate**, cioè testo che entra nel contesto del modello senza essere stato scritto da una persona autorizzata.
2. **Accedere a informazioni sensibili**, che in uno studio odontoiatrico significa per definizione tutta la cartella clinica.
3. **Eseguire azioni automatiche** con effetti dentro o fuori dall'organizzazione.

Un agente che le riunisce tutte e tre non dovrebbe essere ammesso. Il documento passa i casi uno per uno: quando informazioni non controllate possono innescare l'accesso a informazioni sensibili, va impedita ogni azione automatica senza supervisione umana, con effetto dentro o fuori dall'organizzazione.

> **Un assistente da studio ha le prime due proprietà di serie.** Legge testo scritto da pazienti e da terzi, e lavora su dati sulla salute, categoria particolare ai sensi dell'articolo 9 del GDPR. L'unica delle tre a cui puoi rinunciare è la terza, e rinunciarci significa esattamente questo: nessuna scrittura senza una persona davanti.

È una decisione di architettura, e si prende prima di scrivere una riga di codice. Tutto il resto ne è una conseguenza.

## Scrittura vuol dire strumenti, non accesso al database

Dare accesso in scrittura a un modello non è dargli una connessione a PostgreSQL né un endpoint che accetta SQL. È pubblicare un catalogo piccolo di operazioni, ognuna con i suoi parametri tipizzati e le stesse validazioni che l'interfaccia esegue già.

Per una frase come "sposta Marta da martedì a giovedì alle dieci", il percorso è questo:

1. **Il modello riceve la frase e il catalogo degli strumenti**, mai lo schema del database.
2. **Restituisce una proposta**: quale operazione vuole chiamare e con quali argomenti. Fino a qui non è successo niente, è testo.
3. **Il back-end valida gli argomenti** con lo stesso schema che valida un form, e rifiuta quello che non rientra.
4. **I permessi vengono ricontrollati** per la persona che ha chiesto, nel punto di esecuzione.
5. **Se l'operazione modifica dati si mette in pausa** e chiede una conferma esplicita, mostrando cosa sta per cambiare.
6. **Viene eseguita e registrata**: quale strumento, quali argomenti, chi ha chiesto e chi ha confermato.

Il passaggio 4 è quello che si salta. Filtrare la lista degli strumenti prima di mandarla al modello è un aiuto utile, ma non è un controllo di accesso: il controllo deve stare dove la chiamata viene eseguita, perché è l'unico punto attraversato da tutte.

![Assistente IA di Dentalpin con l'elenco dei flussi di lavoro disponibili e una conversazione aperta](/screenshots/ai-copilot.png)

*L'agente propone; il catalogo a sinistra è tutto quello che può arrivare a chiedere.*

## Privilegio minimo, applicato all'agente e non all'utente

Le linee spagnole sono esplicite: il principio di base in un ambiente di IA agentica è quello del privilegio minimo, con una restrizione dell'escalation dei privilegi e dell'ereditarietà dell'identità. In pratica si riduce a una regola verificabile: l'agente non può vedere né fare nulla che la persona che chiede non potrebbe fare dallo schermo.

- **Nessuna identità propria.** L'agente agisce con la sessione di chi scrive, non con un account di servizio dai permessi ampi. Un account di servizio trasforma qualsiasi errore del modello in un accesso totale.
- **Separato per studio.** Lo stesso agente che serve più strutture deve compartimentare memoria e contesto, altrimenti mescola dati di cartelle che non c'entrano.
- **Nessuno strumento che allarghi la portata.** Ogni strumento pubblicato è nuova superficie di attacco, e lo stesso documento segnala che aggiungere strumenti è il modo consueto di concedere privilegi senza accorgersene.
- **Niente di irreversibile.** Cancellare, unire due pazienti o annullare una fattura emessa non sono operazioni da agente, per quante conferme ci si metta davanti.

## Una finestra di conferma non è supervisione umana

Qui quasi tutti si considerano già in regola. La supervisione deve essere reale, e su questo il Garante è stato chiaro anni prima che si parlasse di agenti.

Nel decalogo per la realizzazione di servizi sanitari nazionali attraverso sistemi di intelligenza artificiale, di settembre 2023, il Garante enuclea tre principi cardine. Il secondo è il "principio di non esclusività della decisione algoritmica, secondo cui deve comunque esistere nel processo decisionale un intervento umano capace di controllare, validare ovvero smentire la decisione automatica (c.d. human in the loop)".

Quel verbo, smentire, è il punto. Il primo principio, quello di conoscibilità, aggiunge il diritto dell'interessato di conoscere l'esistenza di processi decisionali automatizzati e di ricevere informazioni significative sulla logica utilizzata, "sì da poterla comprendere". Il decalogo riguarda i servizi sanitari nazionali e i trattamenti di interesse pubblico, quindi non è la norma che regola direttamente uno studio privato, ma i tre principi descrivono bene cosa un'autorità considera supervisione vera.

> **Se la persona che conferma non può dire no, non sta supervisionando.** Deve vedere cosa sta per cambiare, avere tempo e autorevolezza per rifiutare, e non pagare nessun prezzo per il rifiuto. Un pulsante premuto quaranta volte al giorno senza leggere è una firma automatica con qualche passaggio in più.

C'è poi una tentazione che l'autorità spagnola nomina in modo diretto: spostare tutta la responsabilità sull'utente o sulla supervisione umana. Quando qualcosa va storto è comodo indicare chi ha cliccato invece del progetto che ha reso possibile l'errore. Nessuno dei due ruoli sostituisce la diligenza di chi decide come funziona il sistema.

## Quanta autonomia è difendibile, in base a cosa tocca l'azione

| | Interrogazioni in sola lettura | Scritture con conferma | Scritture autonome |
|---|---|---|---|
| Testo non controllato nel contesto | ✓ Tollerabile | ~ Solo con conferma reale | ✗ Riunisce le tre proprietà |
| Raggiunge dati dell'articolo 9 | ~ Con privilegio minimo | ~ Con privilegio minimo | ✗ Non difendibile |
| Reversibile senza ripristinare il database | ✓ Niente da annullare | ✓ Sì | ✗ Dipende dall'operazione |
| Articolo 22 in gioco | ✓ No | ~ Secondo l'effetto sul paziente | ✗ Sì, se riguarda il paziente |
| Chi indica il registro | Chi ha chiesto | Chi ha chiesto e chi ha confermato | Nessuno |

L'ultima colonna non è un caso da progettare meglio. È un caso da non costruire finché le altre due proprietà restano al loro posto.

## Il registro deve ricostruire la decisione, non solo la scrittura

Salvare l'`UPDATE` non basta. Quello che serve poter ricostruire è tutta la catena: cosa è stato chiesto, cosa ha proposto il modello, cosa è stato validato, chi ha confermato e quali dati si sono mossi.

Le linee spagnole lo chiamano tracciabilità del dato lungo tutto il suo ciclo di vita, e chiedono di conservare i log delle informazioni trattate dai passaggi di ragionamento, delle fonti consultate e dei servizi impiegati. La CNIL francese chiede la stessa cosa dal lato dell'utente: per ogni compito eseguito si dovrebbero poter identificare i dati personali coinvolti, gli agenti intervenuti, i servizi terzi chiamati e la loro cronologia.

![Scheda paziente di Dentalpin, scheda attività, con la cronologia filtrabile per visite, trattamenti e comunicazioni](/screenshots/patient-timeline.png)

*La cronologia del paziente è il posto dove una modifica fatta dall'agente deve comparire come tutte le altre.*

## Cosa abbiamo deciso di non dare al modello

Ridurre la portata ha eliminato più rischio di qualsiasi misura aggiunta dopo.

- **Il testo clinico libero non esce.** Gli identificativi del paziente vengono sostituiti da token deterministici prima di uscire verso il fornitore di IA, e le annotazioni cliniche in testo libero restano fuori da quel percorso.
- **Nessuna diagnosi e nessuna indicazione terapeutica.** Proporre un trattamento cambia cosa è il prodotto e gli obblighi che lo seguono. Agenda, incassi, richiami e ricerche non sono quello.
- **Nessuna azione proattiva sui dati.** Il riepilogo del mattino nasce da interrogazioni deterministiche, senza LLM e senza dati di paziente che escano. È la lezione più utile del progetto: buona parte di quello che si chiede a un agente non ha bisogno di un modello.

## Prima di andare in produzione

1. **Scrivi l'elenco delle operazioni che l'agente può chiamare** e giustificane ognuna. Se non sta in una pagina, è troppo grande.
2. **Prova un'iniezione indiretta**: metti istruzioni in un campo libero compilato da un paziente e verifica che l'agente non le segua. Le linee spagnole distinguono l'iniezione diretta da quella indiretta, che nasconde le istruzioni nelle fonti consultate dall'agente.
3. **Prova a scalare i privilegi**: entra con un utente limitato e chiedi qualcosa fuori dalla sua portata. Se l'agente lo fa, il controllo era nel posto sbagliato.
4. **Leggi il registro di una conversazione intera** e verifica che un terzo possa ricostruire cosa è accaduto.
5. **Conta le conferme al giorno.** Se sono molte, la supervisione si degrada da sola, e quello è un problema di progetto, non di persone.
6. **Documenta cosa esce verso il fornitore di IA**, con quale base giuridica e con quale contratto ai sensi dell'articolo 28.

In Dentalpin l'agente funziona così: chiama le stesse operazioni dell'interfaccia, rivalida i permessi nel punto di esecuzione, tokenizza i dati del paziente prima che escano, si ferma a chiedere conferma su ogni scrittura e lascia ogni chiamata nel log di audit. Se vuoi guardarlo con l'istanza sul tuo server, le condizioni sono su [prezzi](/it/prezzi/).

## Fonti

- Garante per la protezione dei dati personali, *Decalogo per la realizzazione di servizi sanitari nazionali attraverso sistemi di Intelligenza Artificiale*, settembre 2023: punto 4 (principi di conoscibilità, non esclusività e non discriminazione algoritmica) e punto 9 (supervisione umana). [garanteprivacy.it](https://www.garanteprivacy.it/documents/10160/0/Decalogo+per+la+realizzazione+di+servizi+sanitari+nazionali+attraverso+sistemi+di+Intelligenza+Artificiale.pdf). Consultato il 17 agosto 2026.
- AEPD (autorità spagnola), *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2, febbraio 2026: regola del 2 (pp. 41-43), articolo 22 (pp. 39-40), prompt injection (pp. 51-52), tracciabilità (pp. 68-69), gestione dei privilegi (pp. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Consultato il 17 agosto 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles*, luglio 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Consultato il 17 agosto 2026.
- Regolamento (UE) 2016/679 (GDPR), articoli 9, 22, 28 e 32.

Questo non è un parere legale. Se il tuo sistema prende decisioni che riguardano i pazienti, valuta il caso concreto con il tuo responsabile della protezione dei dati prima di metterlo in funzione.
