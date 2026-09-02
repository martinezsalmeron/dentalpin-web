---
title: "Costruire servizi di integrazione su un gestionale odontoiatrico open source"
description: "Il software è gratuito, il servizio no: installazione, migrazione, backup testati e assistenza. Cosa consente la licenza e il contratto da responsabile che devi firmare."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, integratori, servizi, gdpr, gestionale-odontoiatrico]
---

Su un gestionale odontoiatrico open source si può costruire un'attività di servizi che sta in piedi, e quello che fatturi non è mai il programma. Fatturi l'installazione, la migrazione dei dati, i backup che qualcuno ha davvero ripristinato, gli aggiornamenti e l'essere raggiungibile quando lo studio non riesce ad aprire l'agenda il lunedì mattina. Due cose decidono se l'attività regge: cosa ti permette di fare la licenza e il fatto che, nel momento in cui tocchi i dati dei pazienti, diventi responsabile del trattamento con un contratto da firmare.

Nessuna delle due è un ostacolo. Sono il lavoro, e il lavoro si fattura.

## Quello che vendi non è il software, è il lunedì alle nove

Uno studio piccolo non compra tecnologia. Compra la certezza che la segreteria riesca ad aprire l'agenda. Il catalogo di servizi che ne esce è corto e si ripete a ogni installazione.

- **Installazione e messa in sicurezza.** Server, certificato, firewall, utenze di sistema e una configurazione che non dipenda dal tuo ricordo di come l'avevi lasciata.
- **Migrazione dei dati.** Tirare fuori pazienti, cartelle cliniche, preventivi e appuntamenti dal gestionale precedente, e riconciliare i totali prima di dare il caricamento per buono.
- **Backup testati.** Un backup che nessuno ha mai ripristinato non è un backup, è un file. Il ripristino di prova è un risultato con una data sopra.
- **Aggiornamenti.** Versioni minori, l'aggiornamento maggiore di PostgreSQL ogni qualche anno e una finestra di manutenzione concordata con lo studio.
- **Assistenza con orari scritti.** Non «quando posso». Questi orari, questo canale, questo tempo di presa in carico.
- **Formazione del team.** Due sessioni brevi all'avvio e una a tre mesi valgono più di un manuale di cinquanta pagine.

![Schermata iniziale con gli appuntamenti di oggi, chi è presente in studio, i pagamenti scaduti e gli ultimi pazienti](/screenshots/home.png)

*La schermata che il team guarda per prima al mattino. Quando non si carica, lo studio chiama chi gli ha montato il server.*

## Leggi la licenza prima di fare un prezzo

Open source non vuol dire «fai quello che ti pare». Molti prodotti di questo mercato escono sotto Business Source License 1.1, che è un modello con delle caselle da riempire, e le caselle cambiano da progetto a progetto.

Il testo base della BSL 1.1 concede, testualmente, «the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work». L'uso in produzione, che è esattamente quello che il tuo cliente fa tutto il giorno, dipende dall'Additional Use Grant che compila chi pubblica.

| Cosa vuoi fare | Sotto una BSL 1.1 |
|---|---|
| Leggere e verificare il codice | ✓ Concesso dal testo base |
| Modificarlo per un cliente | ✓ Concesso dal testo base |
| Farlo girare sul server di uno studio | ~ Dipende dall'Additional Use Grant |
| Fatturare le tue ore di installazione e manutenzione | ~ La licenza regola il software, non il tuo tempo |
| Rivenderlo come SaaS multicliente tuo | ✗ Di norma è la restrizione espressa |

È la quarta riga quella che si legge al contrario. Una licenza software pone condizioni all'uso e alla distribuzione del software, non alla tua fattura di consulenza; quello che può impedirti è l'impianto preciso su cui volevi fatturarla.

> **Il confine è montare un SaaS tuo, non farsi pagare per installare.** Ospitare l'istanza di uno studio per quello studio e fatturargli la manutenzione è un caso diverso dall'alzare una piattaforma multicliente che fa concorrenza a chi pubblica il software. Se il tuo modello si avvicina a quella linea, la licenza stessa dice cosa fare: acquistare una licenza commerciale dal concedente, oppure astenersi.

Nel dubbio, chiedi prima di firmare con il cliente. I progetti sotto BSL pubblicano di solito un contatto per accordi di licenza alternativi, e quella conversazione costa una email.

Questo non è un parere legale. È la lettura di un testo pubblico, e il contratto vero lo deve vedere un avvocato.

## Nel momento in cui tocchi i dati dei pazienti sei responsabile del trattamento

È qui che parecchi informatici bravi si creano un problema evitabile. Se amministri il server dove vive la cartella clinica, tratti dati sanitari per conto dello studio, e il GDPR ha una parola per te.

Il Garante per la protezione dei dati personali è esplicito sul contratto: deve disciplinare «almeno le materie riportate al paragrafo 3 dell'articolo 28», tra cui «la natura, durata e finalità del trattamento o dei trattamenti assegnati», «le categorie di dati oggetto di trattamento» e «le misure tecniche e organizzative adeguate». Sulla sicurezza, titolare e responsabile devono adottare misure che garantiscano «un livello di sicurezza adeguato al rischio del trattamento», con un elenco che il Garante stesso definisce «una lista aperta e non esaustiva».

Tradotto nella tua settimana di lavoro, sono quattro decisioni concrete:

1. **Firma il contratto prima di toccare il primo dato**, non dopo la migrazione. La data del contratto dovrebbe precedere il tuo primo accesso.
2. **Dichiara i tuoi sub-responsabili.** Se il server sta da un fornitore di hosting, quel fornitore è un sub-responsabile e lo studio deve poterlo autorizzare.
3. **Documenta le istruzioni.** Una email dello studio che chiede un'esportazione è un'istruzione documentata. Una telefonata non lascia traccia.
4. **Concorda cosa succede alla fine.** Restituzione o cancellazione dei dati alla chiusura del servizio, con prova scritta di quello che hai fatto.

> **Il contratto da responsabile non è burocrazia, è il confine della tua responsabilità.** Senza, ogni incidente si discute senza un documento che dica cosa ti era stato chiesto di fare e cosa no. Con, il perimetro di quello che amministravi è scritto.

## I tre modelli di fatturazione che reggono

Funzionano tutti e tre. Quello che non funziona è mescolarli senza dirlo, perché il cliente finisce per credere che la manutenzione fosse compresa nell'installazione.

| Modello | Cosa copre | Quando ha senso |
|---|---|---|
| Progetto a corpo | Installazione, migrazione e formazione, prezzo e perimetro fissi | Apertura dello studio, o cambio di gestionale |
| Canone mensile | Backup, aggiornamenti, monitoraggio e assistenza negli orari concordati | Studi senza informatico interno, cioè quasi tutti |
| Pacchetto ore | Lavori puntuali fuori dal perimetro del canone | Integrazioni, report su misura, cambi di hardware |

Il canone è quello che trasforma tutto questo in un'attività invece che in una sequenza di cantieri. È anche quello che impone la disciplina del monitoraggio, perché incassare un canone senza sapere se il server fa ancora i backup è vendere un'assicurazione senza guardare il rischio.

## Un'installazione che puoi ripetere nello studio successivo

La prima installazione dura quello che dura. La quinta è redditizia solo se la prima ha lasciato una procedura scritta.

1. **Fai l'inventario di quello che c'è.** Che gestionale usano, che versione, dove stanno i dati e chi ha oggi la password di amministratore.
2. **Monta un ambiente di prova** partendo da una copia dei dati reali, mai contro l'installazione che lo studio sta usando.
3. **Migra, poi riconcilia i numeri.** Numero di pazienti, appuntamenti futuri, preventivi aperti, saldo a credito. Se un totale non torna, non hai finito.
4. **Fai girare una settimana in parallelo**, con il vecchio gestionale ancora consultabile in sola lettura.
5. **Esegui un ripristino di prova** cronometrato dal backup, e annota quanto è durato.
6. **Forma in due sessioni brevi**, una per segreteria e agenda, una al riunito.
7. **Fai il passaggio in una giornata scarica**, non di lunedì e non alla vigilia delle ferie.
8. **Consegna le credenziali per iscritto** al referente dello studio, con l'elenco dei servizi e dove sta ogni cosa.

![Diagramma dell'installazione sul proprio server: browser, Caddy sulla porta 443, frontend Nuxt, API e database PostgreSQL](/diagrams/install-stack.svg)

*I pezzi di cui diventi responsabile il giorno in cui firmi la manutenzione. Ogni riquadro ha qualcuno che lo aggiorna, e quel qualcuno sei tu.*

## Lo SLA che lo studio ti chiederà senza usare la parola

Nessuno studio odontoiatrico chiede uno SLA. Chiede di sapere chi chiama il martedì alle otto e mezza. Metti per iscritto queste cinque risposte e avrai scritto l'accordo:

- **Gli orari coperti**, e cosa succede fuori da quelli, sabati compresi se lo studio apre.
- **Tempo di presa in carico e tempo di risoluzione obiettivo**, che non sono la stessa cosa e conviene separarli.
- **Quanti dati si possono perdere** nel caso peggiore, cioè ogni quanto si fa il backup.
- **Quanto ci vuole a ripartire** dall'ultimo backup, misurato in una prova vera e non stimato.
- **Di chi sono il server e i dati**, che devono essere sempre dello studio, anche se li amministri tu.

## La clausola di uscita scrivila tu

Il giorno in cui smettete di lavorare insieme arriva in tutti i contratti, e arriva meglio se era previsto. È anche l'argomento commerciale più forte che hai contro un fornitore chiuso.

- **Le credenziali sono dello studio**, in un gestore di password che è suo, dal primo giorno.
- **I dati escono in un formato aperto** documentato, e lo dimostri una volta l'anno esportando davvero.
- **La procedura è scritta** in un documento che lo studio conserva, non nella tua testa.
- **La licenza sopravvive alla tua azienda.** Con software libero o a sorgente disponibile, un altro informatico può proseguire senza rinegoziare con nessuno.

> **Un fornitore che se ne va senza lasciare il sistema in mano allo studio non è un fornitore, è un lucchetto.** Quello che rende attraente il tuo servizio rispetto a una licenza chiusa è esattamente questo: lo studio potrebbe sostituirti e non perderebbe nulla.

## Dove si colloca Dentalpin

Dentalpin esce sotto BSL 1.1, e il suo file `LICENSE` riempie le stesse caselle viste sopra: la limitazione d'uso vieta «providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work», la data di cambio è a quattro anni dalla pubblicazione e la licenza di destinazione è Apache 2.0. Per un integratore questo significa che installare, ospitare e mantenere l'istanza di uno studio determinato sta in un posto diverso dal lanciare un SaaS odontoiatrico concorrente, e che se il tuo modello si avvicina a quella linea il file stesso rimanda ad accordi di licenza alternativi con il concedente. Quanto paga lo studio per il prodotto è sulla [pagina dei prezzi](/it/prezzi/).

## Fonti

- [Business Source License 1.1, testo della licenza](https://mariadb.com/bsl11/), MariaDB. Consultato il 2 settembre 2026.
- [Doveri, come trattare correttamente i dati](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/8981258), Garante per la protezione dei dati personali. Consultato il 2 settembre 2026.
- [Linee guida 07/2020 sui concetti di titolare del trattamento e responsabile del trattamento nel GDPR](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), Comitato europeo per la protezione dei dati, versione finale adottata il 7 luglio 2021. Consultato il 2 settembre 2026.
- File `LICENSE` del repository di Dentalpin. Consultato il 2 settembre 2026.
