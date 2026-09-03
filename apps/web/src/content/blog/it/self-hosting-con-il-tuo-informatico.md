---
title: "Self hosting con il tuo informatico: cosa mettere per iscritto"
description: "Server dello studio affidato a un informatico locale: la nomina a responsabile del trattamento, i backup davvero ripristinati, le chiavi, i tempi di risposta e l'uscita."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [self-hosting, gdpr, backup, fornitori, studio-dentistico]
---

Se il tuo studio ospita il gestionale sul proprio server e ad amministrarlo è un informatico esterno, quattro cose devono stare per iscritto prima che tocchi qualsiasi cosa: la nomina a responsabile del trattamento, obbligatoria da quando può accedere ai dati dei pazienti; che cosa significa esattamente «faccio i backup», con un ripristino di prova datato; chi ha le credenziali di amministratore e dove stanno i dati; e in quante ore risponde il lunedì in cui l'agenda non si apre. Il resto è dettaglio.

Niente di tutto questo richiede venti pagine di contratto. Sta in due fogli e in una riunione di mezz'ora, e quella mezz'ora costa meno della prima notte senza agenda.

## Il tuo informatico è responsabile del trattamento dal primo giorno

Lo studio è titolare del trattamento dei dati dei suoi pazienti. La persona o la società che amministra il server su cui quei dati stanno è responsabile del trattamento, anche se non apre mai una cartella clinica e anche se ti ripara le stampanti da quindici anni.

Il Garante lo descrive senza giri di parole: la designazione avviene «mediante un contratto (o altro atto giuridico conforme al diritto nazionale)» che deve disciplinare, fra le altre cose, «la natura, durata e finalità del trattamento», «le categorie di dati oggetto di trattamento» e «le misure tecniche e organizzative adeguate». L'articolo 28, paragrafo 9 del GDPR aggiunge la forma: per iscritto, anche in formato elettronico.

> **Un accordo a voce con l'informatico di sempre non è una nomina a responsabile.** La fiducia personale non sostituisce il documento, e chi risponde davanti al Garante quando manca è lo studio, non lui.

Non è burocrazia difensiva. Il contratto è il posto in cui finalmente si scrive chi fa i backup, ogni quanto si aggiorna il server e cosa succede il giorno in cui smettete di lavorare insieme, cioè esattamente i tre punti che nessuno ricorda di avere concordato quando servono.

![Schema di un'installazione self hosted: il browser raggiunge Caddy in HTTPS, che instrada /api/* verso il backend e il resto verso il frontend Nuxt; il backend parla con PostgreSQL](/diagrams/install-stack.svg)

*Un server, quattro processi e un database. Ogni riquadro dello schema è qualcosa che qualcuno deve mantenere.*

## Le clausole che l'articolo 28 scrive già al posto tuo

Il contenuto non è lasciato alla fantasia. Tradotto in linguaggio da studio:

- **Istruzioni documentate.** Il fornitore tratta i dati solo secondo quanto lo studio gli indica, e le indicazioni esistono per iscritto, anche se quello scritto è una mail.
- **Riservatezza.** Chi accede al server ne è vincolato, compreso il tecnico che passa un martedì a sostituire un disco.
- **Sicurezza.** Le misure dell'articolo 32, una per una: cifratura, controllo degli accessi, backup, aggiornamenti.
- **Sub-responsabili.** Se la macchina sta nel data center di terzi, o se i backup finiscono da un fornitore di archiviazione, quello è un sub-responsabile e serve la tua autorizzazione. O approvi in anticipo un elenco nominativo, o si concorda che ti avvisino per iscritto di ogni cambio e che tu possa opporti.
- **Aiuto sui diritti dei pazienti.** Quando qualcuno chiede la propria cartella o la cancellazione, il fornitore deve saperla tirare fuori dal sistema.
- **Restituzione o cancellazione alla fine.** Terminato il servizio, i dati vengono restituiti o distrutti, a tua scelta.
- **Verifiche.** Mette a disposizione le informazioni necessarie a dimostrare la conformità e accetta i controlli.

Quest'ultimo punto ha una lettura pratica che molti studi saltano: l'obbligo di scegliere un responsabile che offra garanzie sufficienti non si esaurisce il giorno della firma. È continuo. Se non chiedi dei backup da due anni, non li hai controllati.

## Quello che si dice a voce e quello che dovrebbe essere scritto

| Impegno | Come si concorda di solito | Come dovrebbe essere scritto |
|---|---|---|
| Backup | ~ «Faccio il backup tutte le notti» | ✓ Frequenza, destinazione, cifratura e chi riceve l'avviso quando fallisce |
| Ripristino | ✗ Mai provato | ✓ Una prova documentata all'anno, con data e risultato |
| Aggiornamenti | ~ «Quando esce qualcosa di importante» | ✓ Finestra mensile concordata e preavviso per le versioni maggiori |
| Tempo di risposta | ✗ «Chiamami e guardo» | ✓ Orari, canale e ore di risposta per gravità |
| Accessi | ~ Un account amministratore condiviso | ✓ Account nominativi e revoca il giorno stesso dell'uscita |
| Fine del rapporto | ✗ Non prevista | ✓ Restituzione o cancellazione dei dati e consegna delle credenziali |

Nessuna casella della colonna di destra costa denaro. Costa una conversazione scomoda di venti minuti, una volta sola.

## «Faccio il backup tutte le notti» non dice ancora niente

L'articolo 32, paragrafo 1 del GDPR non chiede backup. Chiede due cose più impegnative: la capacità di ripristinare tempestivamente la disponibilità e l'accesso dei dati personali in caso di incidente fisico o tecnico, e una procedura per testare, verificare e valutare regolarmente l'efficacia delle misure.

Letto alla lettera significa che un backup che nessuno ha mai ripristinato non dimostra nulla, perché ciò che la norma misura è il ripristino e non il file.

> **Il backup non si prova il giorno in cui serve.** Si prova un martedì qualsiasi, con calma, ripristinandolo su una macchina separata e controllando tre numeri: quanti pazienti ci sono, qual è l'ultima fattura e qual è stato l'ultimo appuntamento registrato.

Chiedi che quella prova sia un deliverable con data e non una promessa. Una mail di due righe all'anno che dice «ripristinato il backup del 14 maggio su un server di prova, 3.412 pazienti, ultima fattura 2026/0871» vale più di qualunque clausola.

## Due date già segnate sul calendario, che tu le guardi o no

Una parte della manutenzione non dipende dall'opinione di nessuno, perché ha una data pubblicata.

1. **La versione maggiore di PostgreSQL.** Il progetto garantisce cinque anni di supporto a ogni versione maggiore dal rilascio. PostgreSQL 14 riceve l'ultimo aggiornamento il 12 novembre 2026 e la 15 l'11 novembre 2027. Se il tuo database gira su una delle due, la migrazione ha già una scadenza e dovrebbe avere un budget.
2. **Il certificato.** I certificati Let's Encrypt durano 90 giorni e il rinnovo è consigliato ogni 60. L'ente precisa che non c'è modo di modificare queste durate e che non ci sono eccezioni. Esiste inoltre un programma opzionale di certificati da sei giorni, rinnovati ogni tre. È tutto automatico fino al giorno in cui qualcuno chiude la porta 80 e il rinnovo smette di funzionare in silenzio.

Le due date entrano nel contratto come finestra di manutenzione, non come favore. E la seconda arriva con un nome: chi controlla che il rinnovo continui ad avvenire.

## Le chiavi sono dello studio, anche se le usa lui

È qui che più studi restano incastrati, e raramente per malafede del fornitore. Semplicemente nessuno ne aveva parlato.

- **La password di amministratore sta nel gestore di password dello studio**, non solo sul portatile dell'informatico.
- **Account nominativi, mai un «admin» condiviso.** Se tre persone usano lo stesso accesso, il log degli accessi non serve a niente il giorno in cui bisogna leggerlo.
- **Dominio e DNS intestati allo studio.** Un dominio registrato dal fornitore è una trattativa futura travestita da comodità.
- **Una copia di backup in un posto che lui non controlla.** Non è diffidenza: se un ransomware entra dalla sua postazione, le sue copie e le tue stanno dalla stessa parte.
- **Revoca il giorno stesso.** Quando qualcuno lascia il fornitore o lo studio, l'accesso viene tolto quel giorno, e lo si concorda prima per non doverlo chiedere come un piacere.

![Schermata iniziale con gli appuntamenti di oggi, chi è presente in studio, i pagamenti scaduti e gli ultimi pazienti trattati](/screenshots/home.png)

*Questa è la schermata che deve essere aperta alle otto e mezza. Tutto quello che concordi con l'informatico esiste perché compaia.*

## Il tempo di risposta, in ore e in italiano

Un accordo di servizio per uno studio con tre riuniti non ha bisogno di vocabolario da multinazionale. Ha bisogno di tre righe.

- **Lo studio non può lavorare.** L'agenda non si apre, il server non risponde. Questa riga si concorda con un numero di telefono e non con una mail, e con un numero di ore.
- **Funziona ma male.** Una stampante, una postazione, un'integrazione caduta. Stesso giorno o giorno lavorativo successivo.
- **Domanda o miglioria.** Una settimana, e va benissimo.

Aggiungi i due dettagli che tutti dimenticano: cosa succede ad agosto e a Natale, e chi risponde se il tuo informatico è in malattia. Un fornitore composto da una sola persona va benissimo per uno studio piccolo, purché la sostituzione sia scritta da qualche parte.

## La clausola di uscita si firma all'ingresso

Cambiare informatico è normale e non deve essere un dramma. Lo diventa quando non è stato previsto.

L'articolo 28, paragrafo 3, lettera g del GDPR ti dà già il diritto: terminata la prestazione, i dati vengono cancellati o restituiti. Rendilo concreto mentre il rapporto è buono.

1. **In che formato viene consegnato il database**, come dump completo e non come esportazione parziale su un foglio di calcolo.
2. **Quali credenziali passano di mano**, ed entro quanti giorni.
3. **Chi accompagna la transizione**, e quante ore sono comprese.
4. **Prova della cancellazione.** La distruzione dovrebbe riguardare anche le copie presenti nei sistemi del fornitore, con conferma scritta.

> **Nessuna di queste quattro si negozia bene il giorno dell'addio.** Si negoziano il primo giorno, quando a entrambi conviene che il rapporto cominci pulito.

## La riunione di mezz'ora

Se vuoi chiudere la questione domani, questo è l'ordine del giorno:

1. Firmare la nomina a responsabile del trattamento con i punti dell'articolo 28, paragrafo 3.
2. Scrivere dove vanno i backup, ogni quanto e chi riceve l'avviso di errore.
3. Fissare una data per il prossimo ripristino di prova.
4. Annotare la versione di PostgreSQL in produzione e la sua data di fine supporto.
5. Mettere la password di amministratore nel gestore di password dello studio.
6. Trasformare gli account condivisi in account nominativi.
7. Concordare i tre livelli di tempo di risposta e la sostituzione durante le ferie.
8. Scrivere la clausola di uscita.

Niente di questa lista richiede competenze informatiche. Richiede che qualcuno dello studio si sieda mezz'ora con chi amministra il server.

## Dove si colloca Dentalpin

Dentalpin è un gestionale odontoiatrico open source che si installa sul tuo server con `docker compose`, quindi questo accordo vale esattamente come per qualsiasi altra installazione self hosted: il software non fa pagare licenze, e il lavoro che costa davvero è quello che hai appena letto. Se vuoi vedere cosa è incluso prima di decidere chi lo gestisce, è nella [pagina dei prezzi](/it/prezzi/), e l'installazione è descritta passo passo in [installare Dentalpin in tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/).

Questo articolo è un orientamento generale e non una consulenza legale. Per il contratto del tuo studio, fallo verificare.

## Fonti

- Garante per la protezione dei dati personali, [«Doveri: come trattare correttamente i dati»](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/8981258), consultato il 3 settembre 2026.
- Regolamento (UE) 2016/679 (GDPR), articolo 28 paragrafi 1, 3 e 9 e articolo 32 paragrafo 1. Testo ufficiale consultato su [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) il 3 settembre 2026.
- PostgreSQL Global Development Group, [«Versioning Policy»](https://www.postgresql.org/support/versioning/), consultato il 3 settembre 2026.
- Let's Encrypt, [«FAQ»](https://letsencrypt.org/docs/faq/), consultato il 3 settembre 2026.
