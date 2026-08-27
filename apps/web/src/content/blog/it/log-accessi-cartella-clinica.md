---
title: "Log degli accessi alla cartella clinica: cosa registrare e come rileggerlo"
description: "Quali campi deve conservare il log degli accessi alla cartella clinica, per quanto tempo tenerlo e come rileggerlo ogni mese in venti minuti."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [cartella-clinica, sicurezza, gdpr, tracciabilita, gestione-studio]
---

Il log degli accessi alla cartella clinica deve conservare cinque informazioni ogni volta che qualcuno apre una scheda: chi ha aperto, quando, quale paziente, quale azione e da dove. Si conserva da sei mesi a un anno, si protegge in modo che nessuno possa modificare le proprie righe, e si rilegge con regolarità, perché un log che nessuno guarda non rileva niente. Questo è l'impianto completo, e il resto dell'articolo spiega perché ogni pezzo è al suo posto.

Questo non è un parere legale. Tutte le fonti ufficiali sono in fondo, consultate il 27 agosto 2026.

## Un permesso dice chi può entrare, il log dice chi è entrato

Sono due cose diverse, e lo studio che ha la prima di solito crede di avere entrambe. Il permesso è una decisione presa prima: la segreteria non apre le cartelle cliniche. Il log è un fatto registrato dopo: martedì alle 12:40 questa persona ha aperto la scheda di questo paziente.

Solo il secondo risponde a una domanda. Quando un paziente chiede chi ha consultato la sua cartella, o quando bisogna valutare se una violazione ha toccato dati sanitari, l'elenco dei permessi non dice niente né sull'una né sull'altra.

> **La curiosità è la forma più frequente di accesso indebito, e nessun permesso la intercetta.** Il personale clinico ha accesso legittimo alle cartelle. Quello che serve poter distinguere è l'accesso che corrisponde a un appuntamento di quel giorno da quello che non corrisponde a nulla.

## I cinque campi di ogni riga

L'autorità francese CNIL è la più concreta sul formato: vanno tracciate le "opérations de création, consultation, partage, modification et suppression", ciascuna con l'identificativo di chi ha operato, la data, l'ora, il tipo di operazione e il riferimento al dato coinvolto.

Tradotto in uno studio odontoiatrico, ecco cosa deve contenere ogni riga.

| Campo | Cosa conserva | Indispensabile? |
|---|---|---|
| Chi | L'account nominativo della persona | ✓ Sì |
| Quando | Data e ora | ✓ Sì |
| Quale paziente | Identificativo della scheda aperta | ✓ Sì |
| Quale azione | Consultare, creare, modificare, esportare, cancellare | ✓ Sì |
| Da dove | Indirizzo IP o postazione | ~ Se c'è accesso da remoto |
| Cosa è cambiato | Valore prima e valore dopo | ~ Sulle modifiche |
| Perché | Breve motivazione dell'accesso | ✗ Solo negli accessi d'urgenza |

I primi quattro non si negoziano, perché togliendone uno la riga smette di rispondere a qualcosa. Un log senza paziente dice che qualcuno ha guardato qualcosa. Un log che non separa la consultazione dalla cancellazione butta via proprio la distinzione che conta.

Il quinto dipende dall'uso. Se il gestionale si apre solo dalle postazioni dello studio l'indirizzo IP aggiunge poco; se c'è un accesso da casa, è il campo che separa una consultazione normale da una alle tre di notte.

![Scheda paziente nella sezione attività, con avvisi clinici, piano di cura in corso e una linea temporale filtrabile per visite, trattamenti e comunicazioni](/screenshots/patient-timeline.png)

*L'attività registrata su un paziente, raccolta in un'unica linea temporale.*

## Il Garante ha già scritto quasi tutto

L'Italia è, su questo argomento, uno dei paesi con le indicazioni più precise, e vengono da due provvedimenti diversi.

Il primo riguarda le caratteristiche tecniche del log. Il provvedimento del 27 novembre 2008 sugli amministratori di sistema chiede registrazioni degli accessi logici con "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità", e ne fissa la conservazione "per un congruo periodo, non inferiore a sei mesi".

Il secondo riguarda il diritto del paziente. Le Linee guida in materia di Dossier sanitario del 4 giugno 2015 stabiliscono che l'interessato "può avanzare una formale richiesta al titolare del trattamento o a un suo delegato, al fine di conoscere gli accessi eseguiti sul proprio dossier con l'indicazione della struttura/reparto che ha effettuato l'accesso, nonché della data e dell'ora dello stesso".

E fissano anche il tempo di risposta: il titolare "deve fornire riscontro alla suddetta richiesta dell'interessato entro 15 giorni dal suo ricevimento", con trenta giorni quando la richiesta comporta operazioni complesse.

> **Quindici giorni sono pochi se il log non contiene l'identificativo del paziente.** La differenza tra uno studio che risponde in dieci minuti e uno che non può rispondere si decide in fase di configurazione, non quando arriva la richiesta.

Il GDPR chiude il quadro dal lato dell'obbligo generale. L'articolo 5, paragrafo 2, rende il titolare responsabile di poter dimostrare la conformità, e l'articolo 32 impone misure tecniche adeguate alla sicurezza del trattamento.

## Per quanto tempo conservarlo

Il minimo italiano è quello del provvedimento del 2008: sei mesi, mai meno.

La CNIL francese indica una forbice per i log in generale: conservarli "sur une période glissante comprise entre six mois et un an", in una finestra mobile da sei mesi a un anno, con eccezioni in caso di obbligo di legge, contenzioso o analisi di un incidente.

Sei mesi è quindi il pavimento e un anno il tetto ragionevole. Sotto i sei mesi, un reclamo che arriva in primavera su un fatto dell'autunno non trova più niente da esaminare.

## Come rileggerlo in venti minuti al mese

Un log che si apre solo quando il problema è già successo arriva tardi. La rilettura periodica è ciò che lo trasforma in rilevazione, e sta in una routine breve.

1. **Filtra gli accessi fuori orario.** Una scheda aperta di notte, di domenica o in un festivo merita una spiegazione, anche se quasi sempre c'è.
2. **Incrocia gli accessi del giorno con l'agenda.** Se qualcuno ha aperto cinque cartelle e aveva tre pazienti, due restano da spiegare.
3. **Cerca i pazienti che conoscono tutti.** La scheda di un familiare di qualcuno dello studio, di un collega o di una persona nota in paese è quella che si apre più spesso senza motivo.
4. **Controlla gli account di chi non lavora più qui.** Un account disattivato non dovrebbe produrre righe nuove, e se le produce il problema è serio.
5. **Rivedi le esportazioni.** Scaricare l'anagrafica pazienti è un'azione diversa dal consultarla, e dovrebbe essere rara.
6. **Annota la data della rilettura e cosa hai trovato**, anche quando la risposta è "niente". Quel foglio è la prova che il controllo esiste.

Un limite da dire ad alta voce davanti al personale: la CNIL vieta di riutilizzare i dati di log per finalità estranee, come il controllo dell'orario di lavoro. I log servono alla sicurezza. Usarli per altro distrugge la fiducia che impedisce a chiunque di volerli disattivati.

![Schermata dei report dello studio con gli indicatori del periodo](/screenshots/reports.png)

*La rilettura mensile funziona meglio come routine fissa, accanto agli altri numeri del mese.*

## Tre errori che svuotano il log

**L'account condiviso.** Se quattro persone entrano come "segreteria", il log registra fedelmente che è stata "segreteria" ad aprire la scheda, il che non identifica nessuno. È il difetto che annulla tutto il resto, ed è il più diffuso.

**Il log che l'amministratore può modificare.** Se il titolare dello studio può correggere o cancellare righe, il log non prova più niente davanti a terzi. È esattamente il motivo per cui il Garante chiede inalterabilità e verificabilità dell'integrità, e la CNIL chiede di impedire che il personale alteri la registrazione della propria attività.

**L'account cancellato.** Quando qualcuno lascia lo studio e il suo account viene eliminato invece che disattivato, le sue righe di log restano senza titolare. Disattivare conserva la tracciabilità, cancellare la distrugge.

## Dove l'Europa sta andando

Il Portogallo ha spinto la stessa idea un passo più avanti. L'articolo 29 della Lei 58/2019 prevede che "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais", cioè che l'interessato vada notificato di ogni accesso ai suoi dati, e cita fra le misure un registro elettronico degli accessi e dei dati consultati.

È la stessa logica delle Linee guida del Garante, con la differenza che lì la notifica è attiva invece che su richiesta. Uno studio che oggi registra l'identificativo del paziente su ogni riga è già pronto per entrambe.

## Cosa può fare il gestionale e cosa no

Nessun log impedisce a qualcuno di leggere lo schermo accanto, e nessuno sostituisce la conversazione in cui si spiega che la cartella di un conoscente non si apre per curiosità. Quello che fa è permettere di avere quella conversazione con i fatti davanti invece che con i sospetti.

In Dentalpin ogni apertura di una scheda viene registrata con account, data e paziente e gli account si disattivano senza cancellare quello che hanno fatto. Le condizioni della versione ospitata e di quella installata sul proprio server sono su [prezzi](/it/prezzi/).

## Fonti

- Garante per la protezione dei dati personali, *Misure e accorgimenti prescritti ai titolari dei trattamenti effettuati con strumenti elettronici relativamente alle attribuzioni delle funzioni di amministratore di sistema*, 27 novembre 2008. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Consultato il 27 agosto 2026.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4 giugno 2015. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Consultato il 27 agosto 2026.
- Regolamento (UE) 2016/679 (GDPR), articoli 5, paragrafo 2, e 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 27 agosto 2026.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (aggiornato il 14 marzo 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Consultato il 27 agosto 2026.
- Lei n.º 58/2019 dell'8 agosto, articolo 29. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Consultato il 27 agosto 2026.

Le Linee guida del 2015 sono nate per il dossier sanitario delle strutture sanitarie. L'applicazione al tuo studio dipende dal caso concreto: verificala con il tuo consulente o con il tuo responsabile della protezione dei dati.
