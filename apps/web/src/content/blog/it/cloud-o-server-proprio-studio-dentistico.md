---
title: "Cloud o server proprio nello studio dentistico: come decidere"
description: "Cloud o server in studio: cosa cambia davvero, cosa impongono il GDPR e il Garante in entrambi i casi e le cinque domande che decidono per il tuo studio odontoiatrico."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [cloud, server, infrastruttura, gdpr]
---

Questa decisione non si gioca sulla sicurezza. Si gioca su chi risponde quando qualcosa si rompe e su quanto tempo serve allo studio per tornare a lavorare. Scegli il cloud se nessuno in studio vuole farsi carico di backup e aggiornamenti. Scegli un server tuo se devi continuare a curare quando salta la linea, o se vuoi i dati fisicamente sotto il tuo controllo. Sono legali entrambi, ed entrambi ti impongono esattamente le stesse carte da firmare.

Qui sotto trovi come arrivare alla tua risposta senza dipendere da quello che ti racconta un commerciale.

## Quello che non cambia con nessuna delle due scelte

Il titolare del trattamento resta lo studio, in tutti e due i casi. Chi fornisce il software o l'hosting è responsabile del trattamento, e da questo nascono due obblighi che non spariscono perché il server sta nel tuo retro.

Il GDPR impone anzitutto una scelta motivata: l'articolo 28, paragrafo 1 prevede che il titolare "ricorre unicamente a responsabili del trattamento che presentino garanzie sufficienti per mettere in atto misure tecniche e organizzative adeguate". Il paragrafo 3 richiede che il rapporto sia disciplinato da un contratto.

Il secondo obbligo è quello che più studi disattendono senza saperlo. L'articolo 32, paragrafo 1, lettera c) richiede "la capacità di ripristinare tempestivamente la disponibilità e l'accesso dei dati personali in caso di incidente fisico o tecnico".

> **Un server nella sala di sterilizzazione senza un ripristino testato non supera quella verifica, esattamente come un cloud senza backup.** La norma non chiede dove sta il disco. Chiede se riesci a riavere i dati, e in quanto tempo. Se nessuno ha mai provato un ripristino, la risposta onesta è che non lo sai.

Il Garante lo ribadisce nella pagina sulle misure di sicurezza, dove elenca tra le misure attese quelle "atte a garantire il tempestivo ripristino della disponibilità dei dati" e ricorda che l'adeguatezza va valutata caso per caso, in rapporto ai rischi effettivamente individuati.

![Agenda della giornata in Dentalpin, con gli appuntamenti per riunito e il loro stato](/screenshots/schedule-day.png)

*Questa è la schermata che deve aprirsi alle nove, qualunque cosa tu decida.*

## Le opzioni sono tre, non due

Quasi tutti i confronti contrappongono cloud e server di studio e lasciano fuori la terza, quella che scelgono molti studi a proprio agio con la tecnica: la tua installazione, ma su un server affittato.

| | Cloud del fornitore | Server in studio | Installazione tua su un VPS |
|---|---|---|---|
| Chi applica gli aggiornamenti | ✓ Il fornitore | ✗ Qualcuno dello studio o il suo tecnico | ~ Tu, ma senza toccare hardware |
| Se salta la linea | ✗ Non si lavora | ✓ Continua a funzionare sulla rete locale | ✗ Non si lavora |
| Chi risponde del backup | ~ Lo fa il fornitore, verificarlo tocca a te | ✗ Interamente tuo | ✗ Interamente tuo |
| Hardware da mantenere | ✓ Nessuno | ✗ Macchina, disco, gruppo di continuità e ricambi | ✓ Nessuno |
| Costo iniziale | ✓ Nessuno | ✗ Acquisto della macchina | ~ Basso |
| Dove stanno i dati | Nell'infrastruttura del fornitore | Nei tuoi locali | Nel data center che scegli |
| Cosa ti serve per andartene | Un export completo che devono darti | ✓ Li hai già | ✓ Li hai già |

I due estremi della tabella non competono sulla stessa cosa. Il cloud ti toglie lavoro e ti lega a un fornitore. Il server tuo ti dà controllo e dà a qualcuno un lavoro da fare ogni mese.

## La prova che decide: il giorno in cui si guasta

Prima di confrontare i prezzi, metti un numero su due cose.

1. **Quanto tempo lo studio regge senza il gestionale.** Se la risposta è "mezza mattinata, su carta", va bene quasi qualunque opzione. Se è "un'ora", ti serve un piano scritto, e ti serve anche con il server tuo.
2. **Quanto costa quel fermo.** Riuniti per ore per fatturato medio. È l'unico numero che trasforma questa scelta in un confronto economico invece che in una questione di gusti.
3. **Chi risponde al telefono lunedì alle nove.** Con il cloud è l'assistenza del fornitore, con orari pubblicati. Con il server tuo è il tuo tecnico, e conviene conoscere il suo tempo di risposta reale prima di averne bisogno.
4. **Cosa si perde tra l'ultimo backup e il guasto.** Un backup notturno significa perdere una giornata di lavoro. Se non è accettabile, la frequenza diventa un requisito e non un dettaglio.
5. **Come esci.** Fatti dare per iscritto la procedura di export completo prima di firmare, non il giorno in cui vuoi cambiare.

> **Il guasto più frequente non è quello del fornitore, è quello della tua linea.** Un sistema in cloud si ferma al router dello studio, non nel data center. Uno studio con una sola fibra e senza una linea mobile di riserva ha un punto singolo di rottura anche con il fornitore più solido sul mercato.

## Quello che il cloud non risolve, e nemmeno il server tuo

Una macchina sotto il bancone dell'accettazione non è automaticamente più riservata. Con il sistema operativo non aggiornato, il disco non cifrato e il backup su un disco USB tenuto nella stessa stanza, vale meno di un cloud curato: un furto o un incendio si porta via originale e copia insieme.

Vale anche il contrario. Il cloud non ti esonera da nulla: ti serve comunque il contratto dell'articolo 28, e ti serve comunque sapere ogni quanto vengono provati i ripristini.

- **Cifratura del disco**, in entrambi i modelli. È ciò che trasforma un portatile o un server rubato in un problema di hardware invece che in una violazione di dati.
- **Una copia fuori sede**, sempre. La regola pratica è tre copie, su due supporti diversi, una fuori dallo studio.
- **Un ripristino testato** almeno una volta l'anno, cronometrato, con il risultato annotato.
- **Accessi nominali**, non una password condivisa attaccata al monitor, che è il difetto che rende inutile tutto il resto.

![Cartella clinica di un paziente in Dentalpin con odontogramma, allerte cliniche e piano di cura attivo](/screenshots/dental-chart.png)

*Questo è ciò che un ripristino deve restituire intatto, non solo l'elenco dei pazienti.*

## Scegli il cloud se

- **Nessuno in studio vuole essere il referente tecnico.** È la ragione buona, e basta da sola.
- **Lavori su più sedi** e vuoi la stessa agenda ovunque senza montare una VPN.
- **La tua linea è stabile e hai una riserva** su rete mobile che hai davvero provato.
- **Preferisci un costo mensile prevedibile** a un acquisto di hardware ogni cinque o sei anni.

## Scegli il server tuo se

- **Un'interruzione di linea non può fermare le cure.** È l'argomento più forte e più concreto da questa parte.
- **Vuoi poter cambiare in qualsiasi giorno** senza dipendere da qualcuno che ti generi un export.
- **Hai già un tecnico** o qualcuno che tiene le macchine con criterio.
- **Ti interessa dove stanno fisicamente i dati**, per politica tua o perché lo chiede un terzo.

Se sei indeciso, esiste una via di mezzo onesta: parti dall'opzione che ti costa meno lavoro e portati via ogni mese un export completo tuo. Così resti libero di cambiare idea più avanti senza aver scommesso nulla di irreversibile.

In Dentalpin questa decisione non obbliga a cambiare gestionale: lo stesso prodotto gira nel nostro cloud o sul tuo server con `docker compose`, sullo stesso database PostgreSQL e con lo stesso export. Se vuoi provare la versione installata da te prima di decidere, [l'installazione richiede tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/), e le condizioni di entrambe le formule sono su [prezzi](/it/prezzi/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articoli 28 e 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679). Consultato il 9 agosto 2026.
- Garante per la protezione dei dati personali, misure di sicurezza. [garanteprivacy.it](https://www.garanteprivacy.it/temi/cybersecurity/misure-di-sicurezza). Consultato il 9 agosto 2026.

Questo non è un parere legale. I tempi di conservazione e gli obblighi che ti riguardano dipendono dal caso concreto, e vanno confermati con il tuo consulente o con l'ordine professionale.
