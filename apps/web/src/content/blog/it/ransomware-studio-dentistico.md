---
title: "Ransomware nello studio dentistico: il piano dello studio piccolo"
description: "Cosa fare nella prima ora di un attacco ransomware in uno studio dentistico, quale backup sopravvive alla cifratura e cosa impone il GDPR nelle 72 ore successive."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [ransomware, sicurezza, gdpr, backup, gestione-studio]
---

Il piano di uno studio piccolo contro il ransomware sta in un foglio: un backup scollegato dalla rete che sia già stato ripristinato almeno una volta, l'elenco di chi si chiama nella prima ora, sistemi aggiornati con secondo fattore su ogni accesso da remoto, e la consapevolezza che una violazione di dati fa partire un termine di 72 ore. Niente di tutto questo si improvvisa la mattina in cui l'agenda non si apre.

Quello che segue è quel foglio, in ordine: cosa si ferma davvero, cosa si fa nei primi sessanta minuti, cosa richiede la norma e quali misure spostano davvero le probabilità.

## Quello che si ferma è lo studio, non il computer

Il ransomware cifra i dati e chiede un riscatto. In uno studio dentistico significa che l'agenda del giorno non si apre, la cartella clinica non c'è, le radiografie non si vedono e la fatturazione è ferma, tutto insieme e quasi sempre di prima mattina.

Il problema clinico arriva prima di quello informatico. Senza le allerte mediche di un paziente non si sa a quale anestetico è allergico, ed è per questo che uno studio senza accesso ai propri dati non può continuare a lavorare come se nulla fosse.

ENISA, l'agenzia europea per la cibersicurezza, ha pubblicato a luglio 2023 la sua prima analisi delle minacce al settore sanitario. Il ransomware pesa per il 54 per cento delle minacce del settore, i dati dei pazienti sono il bene più colpito con il 30 per cento, e solo il 27 per cento delle organizzazioni interpellate aveva un programma dedicato di difesa dal ransomware.

> **Il numero che giustifica lo sforzo è quanti pazienti avete in agenda domani.** Uno studio con tre riuniti e quaranta appuntamenti al giorno non sta discutendo di informatica, sta decidendo se apre la settimana prossima. Tutto il resto costa poco al confronto.

![Agenda dello studio in vista giornaliera con gli appuntamenti divisi per riunito](/screenshots/schedule-day.png)

*È questa la schermata che smette di aprirsi, ed è la prima di cui qualcuno si accorge.*

## La prima ora, in ordine

L'ordine conta, perché le decisioni dei primi minuti stabiliscono se restano le prove e se il backup si salva.

1. **Scollegate dalla rete la postazione colpita**, cavo e Wi-Fi. Impedisce alla cifratura di avanzare verso il server e verso le altre postazioni.
2. **Scollegate anche il disco o il NAS dei backup.** Se era attaccato, è un bersaglio e non un rifugio.
3. **Non cancellate ancora nulla.** Prima fate un'immagine del disco colpito: è quella che permette un tentativo di decifratura più avanti ed è anche la prova.
4. **Annotate l'ora in cui ve ne siete accorti.** Il termine di notifica decorre da quando lo studio viene a conoscenza della violazione, quindi quell'ora è un dato giuridico.
5. **Chiamate.** Il vostro tecnico informatico, e segnalate l'attacco alla Polizia postale, come il Garante stesso raccomanda.
6. **Concordate cosa dice la segreteria.** I pazienti che telefonano per confermare l'appuntamento chiederanno, e una frase concordata vale più di cinque risposte improvvisate.
7. **Sporgete denuncia.** L'attacco è un reato, e la denuncia entra nel fascicolo che dovrete poter mostrare.

## Le 72 ore che iniziano a correre

L'articolo 33 del GDPR impone al titolare del trattamento di notificare la violazione all'autorità di controllo senza ingiustificato ritardo e, ove possibile, entro 72 ore dal momento in cui ne è venuto a conoscenza, a meno che sia improbabile che comporti un rischio per i diritti e le libertà delle persone.

Il Garante lo ribadisce con le stesse parole e aggiunge la meccanica pratica: le notifiche oltre le 72 ore devono essere accompagnate dai motivi del ritardo, dal 1° luglio 2021 la notifica si invia esclusivamente tramite la procedura telematica nei servizi online dell'Autorità, e se la violazione comporta un rischio elevato per i diritti delle persone il titolare deve comunicarla a tutti gli interessati, ai sensi dell'articolo 34.

> **Annotate la violazione anche se decidete di non notificarla.** Il registro delle violazioni è un obbligo autonomo: il titolare deve documentare tutte le violazioni di dati personali, a prescindere dalla notifica, proprio perché l'Autorità possa verificarne il rispetto.

| Cosa è successo | Notificare al Garante? | Avvisare i pazienti? |
|---|---|---|
| Solo cifratura, ripristino in poche ore da un backup pulito | ~ Da valutare e documentare | ✗ Di norma no, senza rischio elevato |
| Cartelle cliniche cifrate e nessun backup utilizzabile | ✓ Sì | ✓ Probabilmente sì |
| Gli attaccanti pubblicano o minacciano di pubblicare i dati | ✓ Sì | ✓ Sì |
| Un portatile cifrato senza dati di pazienti | ✗ Non è una violazione di dati personali | ✗ No |

Questo non è un parere legale e ogni caso si valuta a sé. La regola pratica che le autorità pubblicano è però sempre la stessa: nel dubbio si notifica.

## Il backup che sopravvive alla cifratura

Il ransomware cifra tutto ciò su cui la macchina infetta può scrivere. Ci rientrano il disco USB attaccato da due anni e la cartella del NAS montata come unità di rete.

Il NCSC britannico è esplicito: tenere backup offline, separati e in un altro luogo, preferibilmente fuori dallo studio; non lasciare i supporti di backup permanentemente collegati alla rete, perché "gli attaccanti prendono di mira i dispositivi di backup collegati"; verificare con regolarità che il ripristino funzioni; e analizzare i backup prima di ripristinarli.

| Dove sta il backup | Sopravvive a un ransomware | Lavoro mensile |
|---|---|---|
| Una cartella sullo stesso server | ✗ Viene cifrata con il resto | ✓ Nessuno |
| Disco USB collegato in permanenza | ✗ Viene cifrato con il resto | ✓ Nessuno |
| Disco che si collega, si copia e si stacca | ✓ Sì, se era staccato durante l'attacco | ~ Qualcuno deve ricordarsene |
| Backup in cloud con versioni o immutabilità | ✓ Sì, se l'attaccante non ha quelle credenziali | ✓ Nessuno, una volta automatizzato |
| Cartella sincronizzata (Drive, OneDrive, Dropbox) | ✗ Sincronizza sopra i file già cifrati | ✓ Nessuno |

Poi arriva il passaggio che trasforma un backup in un piano: ripristinarlo una volta all'anno su un'altra macchina e cronometrare. Quel numero è il vostro tempo reale di ripartenza, e l'articolo 32, paragrafo 1, lettera d) chiede esattamente questo, verificare e valutare regolarmente l'efficacia delle misure.

![Cartella del paziente con odontogramma, allerte cliniche e piano di cura attivo](/screenshots/dental-chart.png)

*Le allerte mediche della cartella sono la parte che nessuno ricostruisce a memoria in una mattina.*

## Cosa abbassa davvero il rischio

Nessuna misura da sola evita un ransomware, ma poche chiudono le vie di ingresso abituali in uno studio piccolo.

- **Aggiornate appena esce la patch**, con priorità su tutto ciò che è esposto a internet: router, firewall, apparato VPN. Il Garante stesso ricorda di "mantenere costantemente aggiornati il sistema operativo oltre che i software e le app che vengono utilizzati più spesso".
- **Secondo fattore su ogni accesso da remoto.** Se qualcuno lavora da casa, quella porta ha bisogno di MFA, e non va installato sullo stesso dispositivo che amministra i backup.
- **Account con i soli permessi necessari.** La segreteria non deve essere amministratore del server, e il ransomware eredita esattamente i diritti di chi lo ha aperto.
- **Macro disattivate** nei documenti di ufficio, ancora oggi una via di ingresso ordinaria via posta elettronica.
- **Nessuna password condivisa.** Un account per persona non è burocrazia, è l'unica cosa che permette poi di capire da dove sono entrati.
- **Desktop remoto chiuso su internet.** Se serve l'accesso da fuori, passa da una VPN con MFA e non da una porta aperta.

## Pagare, e perché la risposta ufficiale è no

Il NCSC ricorda che le forze dell'ordine "non incoraggiano, non avallano e non giustificano il pagamento delle richieste di riscatto", e ne dà le ragioni: non c'è garanzia di riavere accesso ai dati, la macchina resta infetta, e il denaro finisce a gruppi criminali. Anche il Garante sconsiglia il pagamento, perché espone a un esborso senza alcuna garanzia di sblocco.

> **Pagare non chiude la pratica.** Anche se i file tornano, la violazione c'è stata, il termine dell'articolo 33 è decorso comunque, e documentarla e valutare la comunicazione ai pazienti resta un vostro obbligo.

Prima di dare i dati per persi, controllate No More Ransom, il progetto sostenuto da Europol che pubblica strumenti gratuiti di decifratura per le famiglie già rotte. Non copre tutto, e la verifica costa cinque minuti.

## Il foglio da scrivere oggi

Scrivetelo, stampatelo e tenetene una copia fuori dal sistema che andrebbe ripristinato. Un piano che esiste solo dentro il server cifrato non è un piano.

1. **Chi si chiama**, con nomi e numeri: tecnico informatico, titolare dello studio, Polizia postale, assicurazione se avete una copertura cyber.
2. **Dove sono i backup**, con quali credenziali ci si accede e chi le ha oltre al tecnico.
3. **Come si ripristina**, per passaggi, scritto da qualcuno che l'ha fatto almeno una volta.
4. **Cosa risponde la segreteria** al paziente che telefona, in due frasi concordate.
5. **Chi decide sulla notifica** al Garante e con quale consulente o DPO.
6. **La data dell'ultima prova di ripristino** e quanto è durata.

Con questo un ransomware smette di essere una crisi senza orizzonte e diventa una giornata pessima con un finale noto.

In Dentalpin il backup è un dump PostgreSQL standard più la cartella degli allegati, quindi potete scriverlo su una destinazione che il server dello studio non controlla e ripristinarlo senza dipendere da nessuno. Le condizioni della versione ospitata e di quella su server proprio sono in [prezzi](/it/prezzi/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articoli 32, 33 e 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 27 agosto 2026.
- Garante per la protezione dei dati personali, *Violazione dei dati personali (Data Breach)*. [garanteprivacy.it](https://www.garanteprivacy.it/regolamentoue/databreach). Consultato il 27 agosto 2026.
- Garante per la protezione dei dati personali, *Ransomware*. [garanteprivacy.it](https://www.garanteprivacy.it/temi/cybersecurity/ransomware). Consultato il 27 agosto 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Consultato il 27 agosto 2026.
- ENISA, *Health Threat Landscape* (5 luglio 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Consultato il 27 agosto 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Consultato il 27 agosto 2026.

Questo non è un parere legale. La valutazione del rischio di una violazione concreta e la decisione di notificarla dipendono dal caso, ed è opportuno confermarle con il proprio consulente o con il DPO.
