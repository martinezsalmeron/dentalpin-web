---
title: "Inviare una radiografia o un referto: conta il canale, non il consenso"
description: "Il Garante chiede che il referto viaggi come allegato protetto e che la password passi da un canale diverso. Cosa significa per uno studio odontoiatrico."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [gdpr, privacy, cartella-clinica, sicurezza]
---

L'ortodontista chiede la panoramica, il laboratorio chiede le fotografie, il paziente chiede il referto "su WhatsApp". Il consenso è la parte facile di tutti e tre: quasi sempre c'è, e quando manca si ottiene in trenta secondi. Il difficile è il canale, e per l'invio di un referto al paziente il Garante ha scritto tre cautele che pochi studi applicano: il referto viaggia come allegato e non nel corpo del messaggio, il file è protetto con una chiave comunicata su un canale diverso da quello dell'invio, e l'indirizzo e-mail va convalidato prima.

Questo non è un parere legale. È la lettura delle fonti ufficiali citate in fondo, consultate il 7 ottobre 2026.

## Non è nessuna delle altre quattro domande

Cinque cose si confondono sempre, e quattro hanno già risposta altrove.

- **I promemoria degli appuntamenti** non contengono dati clinici. Sono una data e un'ora, e il problema lì è di consenso: vedi [i promemoria via WhatsApp](/it/blog/promemoria-appuntamenti-whatsapp/) e [il confronto fra i canali](/it/blog/sms-whatsapp-email-promemoria/).
- **Il diritto di accesso** stabilisce cosa devi consegnare ed entro quando quando [il paziente chiede la cartella clinica](/it/blog/paziente-chiede-la-cartella-clinica/). Risolve il cosa, non il come.
- **Il GDPR dello studio** è la cornice generale: [basi giuridiche, registro, tempi di conservazione](/it/blog/gdpr-studio-dentistico/).
- **Qui** si risponde alla domanda di tutti i giorni che viene dopo: hai già deciso che qualcosa deve uscire e a chi. Resta per quale via.

Consenso e sicurezza sono due strati indipendenti. Il consenso rende lecita la comunicazione e non dice nulla su cosa accade se l'invio sbaglia destinatario. Un invio perfettamente consentito all'indirizzo sbagliato resta una violazione di dati, e nessun modulo di consenso la ripara dopo.

## Le tre cautele del Garante, scritte dal 2009

Le "Linee guida in tema di referti on-line" del 19 novembre 2009, pubblicate in Gazzetta Ufficiale n. 288 dell'11 dicembre 2009, dedicano uno scenario specifico a questo caso. Conviene esserne precisi sul perimetro: lo "Scenario 2" riguarda l'ipotesi in cui il titolare *"intenda inviare copia del referto alla casella di posta elettronica dell'interessato, a seguito di sua richiesta"*. Non è una disciplina generale di qualunque invio fra professionisti, ed è il caso più frequente in uno studio.

La prima cautela riguarda dove si mette il documento, e sembra un dettaglio formale finché non si pensa agli archivi di posta e alle anteprime dei messaggi:

> **Allegato, non corpo del messaggio.** Il Garante prescrive la *"spedizione del referto in forma di allegato a un messaggio e-mail e non come testo compreso nella body part del messaggio"*.

La seconda è la regola che quasi tutti gli studi violano senza accorgersene, e sta tutta nella parte finale:

> **La chiave passa da un altro canale.** La seconda cautela chiede che *"il file contenente il referto dovrà essere protetto con modalità idonee a impedire l'illecita o fortuita acquisizione delle informazioni trasmesse da parte di soggetti diversi da quello cui sono destinati, che potranno consistere in una password per l'apertura del file o in una chiave crittografica rese note agli interessati tramite canali di comunicazione differenti da quelli utilizzati per la spedizione dei referti."*

Mandare il PDF protetto e la password nella stessa email non è un invio protetto. È un invio con la chiave attaccata alla porta.

La terza cautela è quella che nessuno ricorda e che previene l'errore più comune: la *"convalida degli indirizzi e-mail tramite apposita procedura di verifica on-line, in modo da evitare la spedizione di documenti elettronici, pur protetti con tecniche di cifratura, verso soggetti diversi dall'utente richiedente il servizio"*. Cifrare non serve a nulla se l'indirizzo è sbagliato.

## L'eccezione che il Garante prevede, e che va letta bene

Qui le linee guida contengono un passaggio che va riportato per intero, perché chi cita solo la regola della password dà un'informazione incompleta. La protezione del file *"può non essere osservata qualora l'interessato ne faccia espressa e consapevole richiesta"*, e il motivo è spiegato: l'invio alla casella indicata dall'interessato *"non configura un trasferimento di dati sanitari tra diversi titolari del trattamento, bensì una comunicazione di dati tra la struttura sanitaria e l'interessato effettuata su specifica richiesta di quest'ultimo"*.

Vale la pena capire cosa questa eccezione copre e cosa no. Copre il paziente che, informato, chiede il proprio referto in chiaro alla propria casella. Non copre l'invio al laboratorio, non copre l'invio al collega, e non trasforma la messaggistica in un canale ammesso: resta un'eccezione sul tipo di protezione del file, per il solo rapporto fra struttura e paziente.

In pratica significa che la richiesta espressa e consapevole va raccolta e annotata, non data per implicita perché il paziente ha scritto "mandatemelo per email".

![Cartella di un paziente con odontogramma, avvisi clinici, piano di cure attivo e prossimo appuntamento](/screenshots/dental-chart.png)

*La cartella da cui esce il documento richiesto: odontogramma, avvisi clinici e piano di cure attivo.*

## Perché la crittografia end-to-end non chiude la questione

L'argomento ricorrente è che WhatsApp cifra end-to-end, quindi va bene. Non va bene, perché il trasporto non è mai stato l'unico problema. Fuori dalla cifratura resta quasi tutto ciò che conta qui.

- **I metadati.** Chi scrive a uno studio odontoiatrico, quando e con quale frequenza. Una conversazione settimanale con uno studio dentistico è essa stessa un'informazione sulla salute.
- **Il dispositivo.** Il messaggio viene decifrato su un telefono, di solito quello personale di qualcuno dello staff, con la sua galleria fotografica e i suoi permessi alle app.
- **Il backup.** Una radiografia inviata via messaggistica finisce nel backup automatico del telefono e nel rullino. Lì la cifratura end-to-end non c'entra più nulla.
- **Il rapporto col fornitore.** Un servizio di messaggistica di consumo non è responsabile del trattamento per conto dello studio ai sensi dell'art. 28 GDPR, e non c'è alcun contratto.

> **L'oggetto e il corpo del messaggio non sono mai cifrati.** È il dettaglio che annulla metà degli invii fatti bene: l'allegato è protetto e l'oggetto recita "Radiografia sig.ra Conti". Il nome del paziente è appena passato in chiaro.

## I canali, uno per uno

| Canale | Adatto al contenuto clinico? | Cosa lo decide |
|---|---|---|
| Email con allegato protetto e password su altro canale | ✓ Sì | È la modalità descritta dal Garante |
| Email con S/MIME o PGP fra partner abituali | ✓ Sì | Nessuna password da scambiare a ogni invio |
| Email con il referto nel corpo del messaggio | ✗ No | Escluso esplicitamente dalle linee guida |
| Email non protetta al paziente che lo chiede | ~ Solo su richiesta espressa e consapevole | L'eccezione prevista dalle linee guida, da annotare |
| Email non protetta a terzi | ✗ No | Art. 32 GDPR, fuori dall'eccezione |
| WhatsApp e messaggistica di consumo | ✗ No | Metadati, backup del telefono, nessun contratto |
| Fax | ✗ No | Trasmissione non cifrata ed errori di selezione |
| Consegna a mano in studio su supporto cifrato | ✓ Sì | Nessuna trasmissione, identità verificata di persona |
| Portale del paziente con sessione autenticata | ✓ Sì | Autenticazione, registro accessi, nessuna chiave fuori banda |

## Come si fa un invio che regge

1. **Stabilisci la base giuridica prima del canale.** Richiesta del paziente, invio consentito a un collega, o obbligo di legge. Se non è nessuna delle tre, cifrare non risolve niente.
2. **Convalida l'indirizzo.** È la terza cautela delle linee guida, e l'errore di destinatario è la causa più comune di violazione in uno studio: nessuna cifratura lo corregge.
3. **Metti il documento in allegato.** Mai nel corpo del messaggio, come prescrivono le linee guida.
4. **Proteggi il file alla creazione.** Un contenitore con cifratura AES a 256 bit o superiore.
5. **Comunica la password da un canale diverso.** Telefono, SMS o a voce. La stessa email non è un canale diverso. Se il paziente chiede espressamente il file in chiaro, annota la richiesta invece di presumerla.
6. **Lascia oggetto e corpo privi di dati.** Nessun nome, nessun numero di cartella, nessuna diagnosi. "Documentazione richiesta" basta.
7. **Registra l'invio in cartella.** Cosa, a chi, quando e con quale base. Senza questo non puoi dimostrare dopo che la comunicazione era legittima.
8. **Cancella la copia di lavoro.** Il PDF generato per l'invio non deve restare sul computer della reception.

Il punto 5 è quello che si sbaglia più spesso senza alcuna cattiva intenzione, e il punto 6 quello che quasi nessuno sa che esista. Insieme spiegano la maggior parte degli invii che sembrano corretti e non lo sono.

![Cronologia di un paziente con avvisi clinici, piano attivo e filtri per visite, trattamenti, movimenti finanziari e comunicazioni](/screenshots/patient-timeline.png)

*La scheda attività di una cartella, con il filtro delle comunicazioni accanto agli altri tipi di voce.*

## La consegna a mano non è una soluzione di ripiego

Prima di installare qualunque cosa, resta la via che nessun fornitore pubblicizza perché non vende niente: consegnare al paziente la sua impegnativa e la sua radiografia in studio, su un supporto cifrato. Non c'è trasmissione, l'identità si verifica guardando la persona, e il passaggio si annota in cartella. Per un paziente che viene comunque all'appuntamento è la strada più breve.

Per il laboratorio e per il collega con cui si lavora ogni settimana la risposta è diversa e migliore: scambiarsi le chiavi pubbliche una volta e usare la cifratura asimmetrica, che non richiede di condividere alcuna password a ogni invio.

## La conclusione onesta è smettere di mandare file

Tutto quanto sopra è un elenco di precauzioni per un invio che, fatto in altro modo, non avviene. Se il documento viene prelevato da una sessione autenticata invece di viaggiare come allegato, sparisce esattamente ciò che crea problemi: nessuna password su un secondo canale, nessun file nel backup di qualcun altro, e un registro degli accessi con data e ora.

È quello che fa un [portale del paziente](/it/blog/portale-paziente-odontoiatrico/), ed è il motivo per cui la raccomandazione di questo articolo è quella e non l'email cifrata. In Dentalpin il documento viene pubblicato sul portale e ogni accesso è registrato con autore e data, così l'invio per email resta ai casi senza alternativa. Il codice è aperto, quindi il registro si verifica invece di crederci, e il [prezzo è pubblicato](/it/prezzi/).

## Fonti

- Garante per la protezione dei dati personali, "Linee guida in tema di referti on-line", 19 novembre 2009, in Gazzetta Ufficiale n. 288 dell'11 dicembre 2009: [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1679033). Consultato il 7 ottobre 2026.
- Regolamento (UE) 2016/679 (GDPR), articoli 9, 28 e 32: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 7 ottobre 2026.
