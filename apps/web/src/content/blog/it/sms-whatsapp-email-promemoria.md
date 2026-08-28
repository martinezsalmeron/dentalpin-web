---
title: "SMS, WhatsApp o email: quanto costa davvero un promemoria appuntamento"
description: "Un SMS verso l'Italia costa circa 580 volte una email e un apostrofo tipografico raddoppia la fattura. Tariffe pubblicate dai fornitori e cosa arriva davvero."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [promemoria, sms, whatsapp, email, costi, agenda]
---

Un promemoria via email costa 0,00016 dollari, uno via WhatsApp meno di un centesimo, e un SMS verso un cellulare italiano costa 0,0927 dollari nella tariffa pubblica di Twilio, circa 580 volte la email. Questa è la risposta breve. A decidere la fattura non è il canale che scegli, ma quanti messaggi mandi per appuntamento, se nel testo finisce un'emoji o un apostrofo tipografico, e quanti pazienti rispondono.

Tutti i prezzi qui sotto vengono dalla pagina tariffe di ciascun fornitore, consultata il 28 agosto 2026. Nessuno è una stima e nessuno arriva da un comparatore.

> **Twilio pubblica le tariffe in dollari, non in euro.** Sono riportate così come le pubblica, perché convertirle al cambio di oggi darebbe una cifra che domani non si può più verificare. Il tuo fornitore fatturerà in euro e con il proprio margine sopra.

## Quanto costa un messaggio, canale per canale

Tre modi di fatturare diversi, e lì sta già metà della storia.

| Canale | Prezzo per messaggio | Come si fattura | Riceve risposte? |
|---|---|---|---|
| Email (Amazon SES, piano Essentials) | 0,16 $ ogni 1.000 invii | Per email inviata, che arrivi o no | ✓ Sì |
| WhatsApp (Twilio più la tariffa Meta) | 0,005 $ di Twilio, più la tariffa Meta | Solo quando il modello viene consegnato | ✓ Sì |
| SMS verso l'Italia (Twilio) | 0,0927 $ | Per segmento, non per messaggio | ~ Solo se invii da un numero |

La colonna di destra quasi nessuno la guarda prima di firmare, ed è quella che rompe il flusso del "rispondi SÌ per confermare". Ci torniamo più sotto.

L'SMS è l'unico canale il cui prezzo dipende dal paese di destinazione. Queste sono le tariffe che Twilio pubblica per i mercati vicini:

| Destinazione | Prezzo per segmento |
|---|---|
| Polonia | 0,0457 $ |
| Portogallo | 0,0501 $ |
| Regno Unito | 0,056 $ |
| Francia | 0,0798 $ |
| Spagna | 0,0875 $ |
| Italia | 0,0927 $ |
| Germania | 0,112 $ |

Lo stesso promemoria costa il doppio verso l'Italia rispetto alla Polonia. Se segui pazienti con numero estero, quella differenza la stai già pagando.

## Un apostrofo può raddoppiare la fattura degli SMS

Qui sta l'errore caro, e non lo commette il software: lo commette chi scrive il modello.

Un SMS non si fattura a messaggio, si fattura a segmento. Con la codifica GSM-7 in un segmento entrano 160 caratteri, e 153 per segmento quando il messaggio si spezza in più parti, perché sette caratteri se ne vanno nell'intestazione che le tiene insieme.

Appena entra un carattere che GSM-7 non sa rappresentare, l'intero messaggio passa alla codifica UCS-2 e il limite crolla a 70 caratteri, o 67 per segmento in un messaggio spezzato. Twilio indica quattro cause: le emoji, gli alfabeti non latini, i caratteri latini estesi e le virgolette o gli apostrofi tipografici.

Per l'italiano è una buona notizia: à, è, é, ì, ò e ù fanno tutte parte del set GSM-7, quindi un promemoria scritto correttamente resta nel segmento economico. A differenza dello spagnolo o del polacco, qui il problema non sono gli accenti ma l'apostrofo tipografico, che in italiano compare in ogni riga.

> **L'apostrofo curvo costa più dell'emoji, perché nessuno lo vede.** Un testo scritto in Word e incollato nel modello si porta dietro apostrofi tipografici senza che nulla lo segnali, e un promemoria di 90 caratteri passa da un segmento a due. Su 800 promemoria al mese sono 148,32 $ invece di 74,16 $.

Due verifiche che valgono soldi ogni mese:

- **Conta i caratteri del modello già compilato**, con dentro il nome più lungo della tua anagrafica, non con il testo di esempio.
- **Scrivi il modello in un editor di testo semplice.** Il programma di videoscrittura sostituisce virgolette e trattini senza avvisare.

Twilio addebita inoltre 0,001 $ per ogni messaggio che finisce in stato fallito, quindi anche un elenco di cellulari non aggiornato ha un prezzo, per quanto piccolo.

![Agenda della giornata con gli appuntamenti di ciascun professionista, gli orari e lo stato](/screenshots/schedule-day.png)

*Una giornata di agenda. Ogni appuntamento di questa schermata è almeno un messaggio al mese in fattura.*

## Su WhatsApp il prezzo dipende da se il paziente risponde

Meta ha cambiato modello il 1 luglio 2025 e da allora fattura a messaggio, non più a conversazione di 24 ore. L'addebito scatta alla consegna del modello, non all'invio.

I modelli sono classificati in marketing, utilità e autenticazione, e un promemoria di appuntamento è di utilità. A rendere il prezzo difficile da prevedere è tutto ciò che Meta lascia gratuito:

- **Tutto quello che passa dentro una finestra di assistenza aperta.** I messaggi fuori modello e i modelli di utilità non vengono addebitati finché quella finestra è aperta, e ad aprirla è il paziente quando ti scrive.
- **Le finestre di ingresso gratuito durano 72 ore** e al loro interno non si paga alcun messaggio, modelli compresi. Si aprono da un annuncio click-to-WhatsApp o dal pulsante di invito all'azione di una pagina.
- **Le fasce di volume abbassano la tariffa** di utilità e autenticazione in base a quanto invii nel mese. Sono specifiche per mercato e categoria, si sommano a livello di portafoglio aziendale e si azzerano ogni mese.

La conseguenza pratica è controintuitiva: un promemoria che invita a rispondere costa meno di uno muto, perché la risposta apre la finestra e il messaggio successivo di quella conversazione è gratis.

Meta pubblica le tariffe per mercato e valuta in schede scaricabili, con gli importi in vigore dal 1 luglio 2026, quando Spagna, Italia, Polonia e Regno Unito sono passati da tariffa regionale a tariffa propria. Sopra a quella, il tuo fornitore mette la sua: Twilio addebita 0,005 $ a messaggio, la stessa cifra per tutti i mercati, e ribalta quella di Meta.

**I limiti di invio quasi certamente non ti riguardano.** WhatsApp scaglia quanti numeri diversi puoi contattare in 24 ore mobili fuori da una finestra di assistenza: 250, poi 2.000, poi 10.000, 100.000 e illimitato. Uno studio con quaranta appuntamenti al giorno scrive a quaranta numeri, quindi il primo scaglione avanza. La salita è automatica quando la qualità è buona e hai usato almeno metà del limite negli ultimi sette giorni, e si applica entro sei ore.

## Il canale più economico è anche quello che arriva peggio

A 0,16 $ ogni mille, la email non compete: è circa cento volte più economica di qualunque altra cosa. Il problema è che il prezzo si paga sull'invio e la consegna non è inclusa.

Gmail e Yahoo hanno irrigidito i requisiti a febbraio 2024 e oggi sono il filtro vero. Conviene separare ciò che vale per tutti da ciò che vale solo per chi invia molto, perché quasi tutti gli articoli sull'argomento mescolano le due cose.

| Requisito | A chi si applica | Cosa richiede |
|---|---|---|
| SPF o DKIM | ✓ A tutti i mittenti | Almeno uno dei due, sempre |
| SPF, DKIM e DMARC | ~ Solo oltre 5.000 al giorno verso Gmail | Tutti e tre, DMARC anche in `p=none` |
| Disiscrizione con un clic | ~ Solo oltre 5.000 al giorno | Intestazione `List-Unsubscribe` con un clic |
| Tasso di spam | ✓ A tutti | Sotto lo 0,3 % nei Postmaster Tools |

> **La soglia dei 5.000 messaggi al giorno non è la tua, e non è lì che si romperà.** Nessuno studio ci si avvicina. Quello che invece si applica dalla prima email è l'autenticazione del dominio e il tasso di reclami, ed è esattamente lì che sparisce un promemoria inviato da una casella gratuita senza SPF né DKIM.

Google raccomanda inoltre di restare sotto lo 0,10 % di reclami e di non avvicinarsi mai allo 0,30 %. Yahoo chiede lo stesso tetto dello 0,3 % ed esige di gestire le disiscrizioni entro due giorni. Sono soglie basse: con 800 email al mese, tre pazienti che premono "spam" ti portano già allo 0,375 %.

## Il mittente che fa bella figura è quello che non può ricevere risposte

Un mittente alfanumerico è quel "STUDIO" che compare al posto di un numero. Twilio lo offre senza costi in 150 paesi, e ha un limite che decide il disegno dell'intero flusso: serve solo a inviare SMS, mai a riceverli.

Se il tuo promemoria dice "rispondi SÌ per confermare", con un mittente alfanumerico quella risposta non arriva da nessuna parte. Per riceverla devi affittare un numero, e quello si paga. Questi sono i canoni mensili pubblicati da Twilio:

- **Regno Unito**, numero mobile: 2,50 $ al mese.
- **Germania**, numero mobile: 30 $ al mese.
- **Italia**, numero mobile: 45 $ al mese.
- **Portogallo**, numero mobile: 135 $ al mese.

Quarantacinque dollari al mese sono sostenibili per uno studio, ma si sommano al costo dei messaggi e raramente compaiono nel preventivo. WhatsApp e email questo problema non ce l'hanno: sono bidirezionali dal primo giorno.

## Quanto fa in un mese vero

Prendiamo uno studio con quaranta appuntamenti al giorno, cinque giorni e mezzo a settimana: circa 800 promemoria al mese, uno per appuntamento. Alle tariffe pubblicate sopra, senza contare il margine del tuo fornitore:

| Canale | 800 promemoria al mese |
|---|---|
| Email | 0,13 $ |
| WhatsApp, solo la parte Twilio | 4,00 $ più la tariffa Meta |
| SMS verso l'Italia, un segmento | 74,16 $ |
| SMS verso l'Italia, due segmenti | 148,32 $ |

L'ultima riga non è uno scenario esotico. È quello che succede se qualcuno incolla il testo da Word, o se il messaggio contiene l'indirizzo dello studio e supera i 160 caratteri.

Aggiungi un secondo promemoria in giornata e tutte le cifre raddoppiano di nuovo. Quella decisione, uno o due messaggi, sposta più denaro della scelta del canale.

![Scheda paziente con lo storico filtrabile per visite, trattamenti, finanze e comunicazioni](/screenshots/patient-timeline.png)

*Lo storico di un paziente con le comunicazioni come filtro. È qui che si verifica se un messaggio è stato consegnato o solo inviato.*

## Come dividere i canali senza complicarsi

1. **Chiedi il canale preferito alla prima visita** e salvalo in scheda. È il dato che evita più reclami e quello che quasi nessuno registra.
2. **Metti la email come impostazione predefinita** per il promemoria in anticipo, perché a quel prezzo tanto vale mandarla a tutti.
3. **Tieni l'SMS per l'avviso in giornata**, dove il costo per messaggio si giustifica facilmente contro il valore del posto in agenda.
4. **Usa WhatsApp dove i tuoi pazienti già lo usano**, e scrivi il modello invitando a rispondere: conferma l'appuntamento e apre la finestra gratuita nello stesso momento.
5. **Rivedi il modello SMS una volta a trimestre** contando i caratteri, con dentro il nome più lungo della tua anagrafica.
6. **Misura le consegne, non gli invii.** Un rapporto che dice "800 inviati" non dice nulla; il numero utile è quanti sono stati consegnati e quanti sono falliti.

Il numero che nessun foglio di calcolo ti darà è quanti messaggi il tuo software manda per appuntamento senza che nessuno glielo chieda. Contarli per un mese vale la pena prima di rinegoziare una tariffa.

In Dentalpin agenda, scheda paziente e registro delle comunicazioni stanno nello stesso database, quindi il conteggio di ciò che è stato inviato e di ciò che è stato consegnato esce dallo stesso posto da cui esce l'agenda, e il software è open source, visibile dai [prezzi](/it/prezzi/). Detto questo, la parte di questo articolo che fa davvero risparmiare non dipende dal programma che usi, ma dal contare i caratteri e dal non mandare tre messaggi dove ne basta uno.

## Fonti

- Prezzi SMS di Twilio per paese, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/it), pagine di Italia, Spagna, Francia, Portogallo, Germania, Polonia e Regno Unito, consultate il 28 agosto 2026.
- Prezzi WhatsApp su Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), consultata il 28 agosto 2026.
- Limiti di caratteri e segmenti di un SMS, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), consultata il 28 agosto 2026.
- Set di caratteri GSM-7, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), consultata il 28 agosto 2026.
- Prezzi della WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consultata il 28 agosto 2026.
- Limiti di invio della WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), consultata il 28 agosto 2026.
- Prezzi di Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), consultata il 28 agosto 2026.
- Linee guida di Google per i mittenti email, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), consultata il 28 agosto 2026.
- Buone pratiche Yahoo per i mittenti, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), consultata il 28 agosto 2026.
