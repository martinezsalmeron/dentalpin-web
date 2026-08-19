---
title: "Self hosting di software sanitario: quello che nessuno ti dice"
description: "Il self hosting non costa licenze, costa gestione: un ripristino davvero provato, il certificato, la versione maggiore di PostgreSQL e qualcuno reperibile alle otto."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [self-hosting, docker, postgresql, sicurezza, gdpr]
---

Ospitare software sanitario sul proprio server non è gratis: gratis è la licenza. Quello che ti prendi in carico sono quattro lavori che non finiscono mai: un backup che hai davvero ripristinato almeno una volta, un certificato che si rinnova da solo fino al giorno in cui smette di farlo, un aggiornamento di versione maggiore di PostgreSQL ogni pochi anni e una persona reperibile il lunedì alle otto. Se questi quattro lavori hanno un proprietario, il self hosting è una scelta ottima ed economica. Se non ce l'hanno, il tuo server è un fornitore di software con una sola persona in organico e senza reperibilità.

Quello che segue è ciò che il tutorial di installazione non dice, con la fonte tecnica o normativa di ogni punto.

## Installare è un giorno, gestire sono cinque anni

L'installazione è diventata davvero semplice. Tre file, un `docker compose up`, e pochi minuti dopo c'è un'applicazione che gira con il suo certificato. Quella parte non è più il problema, ed è proprio per questo che inganna.

Il problema è tutto ciò che viene dopo, e non ha una data di fine: le patch del sistema operativo, lo spazio su disco, gli avvisi che nessuno legge, la migrazione del database fra tre anni e la notte in cui il server non riparte.

> **L'installazione è un evento, la gestione è un impegno permanente.** Nessuno abbandona un server il primo giorno. Lo si abbandona al quattordicesimo mese, quando chi lo aveva configurato ha cambiato lavoro e le mail di errore continuano ad andare al suo vecchio indirizzo.

![Schema di un'installazione self hosted: il browser raggiunge Caddy in HTTPS, che instrada /api/* verso il backend e il resto verso il frontend Nuxt; il backend parla con PostgreSQL](/diagrams/install-stack.svg)

*Quattro processi e un database. Ogni riquadro di questo schema è qualcosa che qualcuno deve tenere aggiornato.*

## Quello che la legge continua a chiederti, ovunque sia il server

Il self hosting non aggiunge obblighi normativi. Toglie soltanto il soggetto che ne stava assolvendo una parte al posto tuo.

Lo studio è titolare del trattamento dei dati dei suoi pazienti, sia che il server stia nell'armadio dietro l'accettazione, sia che stia nel data center di qualcun altro. L'articolo 32 del GDPR elenca, fra le misure tecniche e organizzative, due punti che si leggono come una lista di attività sistemistiche:

- **Articolo 32, paragrafo 1, lettera c**: la capacità di ripristinare tempestivamente la disponibilità dei dati personali e l'accesso agli stessi in caso di incidente fisico o tecnico.
- **Articolo 32, paragrafo 1, lettera d**: una procedura per testare, verificare e valutare regolarmente l'efficacia delle misure tecniche e organizzative. La prova periodica non è una buona pratica facoltativa, sta nel testo dell'articolo.

Si aggiunge l'articolo 33, paragrafo 1: una violazione dei dati va notificata all'autorità di controllo senza ingiustificato ritardo e, ove possibile, entro 72 ore dal momento in cui se ne è venuti a conoscenza.

> **Le settantadue ore decorrono da quando lo sai, non da quando lo capisci.** Se il server è tuo, nessuno ti telefonerà per dirti che è successo qualcosa. Anche quell'allarme devi costruirlo tu.

Questo non è un parere legale. Come queste regole si applicano al tuo studio conviene confermarlo con il tuo consulente o con l'ordine professionale.

## I dati non stanno nel container

È il malinteso più costoso dei primi mesi. La documentazione di Docker lo dice senza giri di parole: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

In pratica: puoi distruggere e ricreare i container quante volte vuoi, ma ciò che va copiato sono i volumi. E un'installazione sanitaria tipica ne ha almeno due.

- **Il database**, con pazienti, agenda, cartella clinica, preventivi e fatturazione.
- **I file caricati**, cioè radiografie, fotografie cliniche e PDF firmati. Di solito pesano molto più del database e di solito sono quelli che ci si dimentica.

Un dump del database senza la cartella dei file ripristina uno studio senza nemmeno un'immagine. Tecnicamente è un backup, in pratica è mezzo backup.

**E non si copia a caldo con un `cp`.** La documentazione di PostgreSQL è netta sul copiare la directory dei dati con il server acceso: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". Quello che funziona a server acceso è `pg_dump`, i cui dump sono "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

L'autorità di controllo francese riassume le precauzioni elementari in quattro righe valide ovunque: fare backup frequenti, conservarne almeno uno in un sito geograficamente distinto da quello di esercizio, isolarne almeno uno offline e scollegato dalla rete, e testare regolarmente sia l'integrità dei backup sia la capacità di ripristinarli.

È quest'ultima riga a decidere tutto, e ha una guida dedicata: [cosa salvare e ogni quanto](/it/blog/backup-studio-dentistico/).

## Il certificato si rinnova da solo finché qualcuno chiude la porta 80

I certificati Let's Encrypt "are valid for 90 days", e l'ente stesso raccomanda "renewing 90 day certificates every 60 days". Il client ACME ci pensa senza che nessuno glielo chieda, così l'argomento esce dalla testa di tutti.

Finché non si rompe, e si rompe in un modo molto preciso. La challenge HTTP-01 "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

Cioè: se qualcuno chiude la porta 80 sul firewall perché "tanto passa tutto in HTTPS", il rinnovo smette di funzionare in silenzio. Il sito resta perfetto per trenta giorni e poi, un martedì qualunque, il browser dell'accettazione mostra un avviso di sicurezza a tutto schermo.

1. **Lascia aperta la porta 80** anche se serve solo a reindirizzare su HTTPS, oppure passa alla challenge DNS-01, che verifica con un record TXT su `_acme-challenge.tuo-dominio` e richiede un provider DNS con API.
2. **Controlla la data di scadenza dall'esterno** del server, con un qualsiasi controllo esterno. Un allarme che vive sulla macchina caduta non avvisa nessuno.
3. **Verifica al 65° giorno** che il rinnovo sia davvero avvenuto, non che il processo sia partito.
4. **Segna chi riceve l'avviso** e controlla che quell'indirizzo esista ancora quando quella persona se ne va.

## L'aggiornamento che fa male davvero

Le patch minori sono routine. PostgreSQL garantisce che "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Passare dalla 17.4 alla 17.6 significa riavviare un container.

La versione maggiore è un'altra storia: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." Un container PostgreSQL 17 non parte su una directory dati scritta dalla 16. Se hai l'immagine fissata su `latest`, il giorno in cui il tag si sposta il database non risale, e il messaggio di errore alle otto del mattino non sarà per niente ovvio.

Il progetto documenta tre strade: dump e ripristino con `pg_dumpall`, il più rapido `pg_upgrade`, o la replica. Sceglierne una è mezz'ora di lettura. Scoprirlo durante un fermo costa una giornata.

1. **Fissa la versione maggiore** nella configurazione, mai `latest`, né per l'applicazione né per il database.
2. **Guarda il calendario di supporto** della tua versione una volta all'anno e pianifica il salto prima che finiscano le correzioni di sicurezza.
3. **Fai la migrazione su una copia**, su un'altra macchina, e cronometrala.
4. **Conserva il dump precedente** finché lo studio non ha lavorato una settimana intera sulla nuova versione.

## Chi risponde il lunedì alle otto

È la domanda che decide, e non è tecnica.

Uno studio odontoiatrico apre alle otto o alle nove con l'agenda già piena. Se il server non parte, non c'è cartella clinica, non ci sono consensi e non c'è modo di sapere chi si presenterà. La domanda rilevante non è se sai ripararlo, ma se quella persona è disponibile, con un portatile, in quel momento.

![Schermata iniziale con gli appuntamenti di oggi, chi è in studio, i pagamenti scaduti e i pazienti recenti](/screenshots/home.png)

*Questa è la schermata che deve essere in piedi alle otto. Tutto il resto può aspettare mezzogiorno.*

Risposte oneste che funzionano: il tecnico informatico dello studio, con un contratto a ore e un numero di telefono; l'odontoiatra stesso, se la cosa gli piace e se la prende in carico; oppure un servizio gestito. Risposte che non funzionano: il nipote, e "ci guardo poi".

## Self hosting sì o no: la tabella

| | Server tuo | Servizio gestito |
|---|---|---|
| Licenza | ✓ Nessun canone se il software è libero | ✗ Un canone finché lo usi |
| Dove stanno i dati | ✓ Sulla tua macchina | ~ Dove dice il contratto |
| Patch di sistema | ✗ Le applichi tu | ✓ Le applica il fornitore |
| Backup | ✗ Lo costruisci e lo provi tu | ~ Lo fa lui, lo provi comunque tu |
| Lunedì alle 8:00 | ✗ Dipende da chi è disponibile | ✓ Dipende dal suo impegno di servizio |
| Versione maggiore di PostgreSQL | ✗ La pianifichi tu | ✓ La pianifica lui |
| Se il fornitore chiude | ✓ Continua a funzionare | ✗ Dipende dall'export che ti danno |
| Costo reale | ~ Server economico, ore care | ~ Canone prevedibile, ore altrui |

La colonna di destra non ti solleva da nulla sul piano normativo: resti titolare del trattamento e devi comunque poter dimostrare di saper ripristinare. Quello che compri è che il lavoro lo faccia qualcun altro, e un numero da chiamare quando non l'ha fatto.

## Le tre domande prima di decidere

1. **Chi è il proprietario del server, con nome e cognome?** Non il ruolo, la persona. Se la risposta richiede più di cinque secondi, un proprietario non c'è.
2. **Quando è stato l'ultimo ripristino completo fatto sul serio?** Se la risposta è "mai", non hai backup, hai file grossi.
3. **Cosa succede il giorno in cui quella persona se ne va?** Scrivi la procedura adesso, conservala fuori dal sistema che va ripristinato, e falla leggere a qualcun altro.

Se tutte e tre hanno una risposta, il self hosting è una scelta eccellente: controllo totale sui dati, nessun canone e nessuna dipendenza dal fatto che un'azienda continui a esistere. Se una resta in sospeso, risolvi prima quella e decidi dopo.

In Dentalpin l'installazione self hosted sono quattro container e due volumi, quello del database e quello dei file caricati, quindi il backup è un dump PostgreSQL standard più una cartella e si automatizza con gli strumenti che già usi. Le condizioni della versione self hosted e di quella ospitata sono su [prezzi](/it/prezzi/), e se vuoi provare un ripristino prima di impegnarti in qualunque cosa, [installarlo richiede tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articoli 32 e 33. Testo su [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) e nel [capitolo 4 pubblicato dalla CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Consultati il 19 agosto 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Consultato il 19 agosto 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Consultato il 19 agosto 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Consultato il 19 agosto 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Consultato il 19 agosto 2026.
- Let's Encrypt, *FAQ* e *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) e [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Consultati il 19 agosto 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Consultato il 19 agosto 2026.
