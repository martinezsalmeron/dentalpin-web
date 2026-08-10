---
title: "Backup nello studio dentistico: cosa salvare e ogni quanto"
description: "Cosa deve entrare nel backup di uno studio odontoiatrico, ogni quanto farlo, dove tenere le copie e come dimostrare che il ripristino funziona prima di averne bisogno."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [backup, sicurezza, gdpr, gestione-studio]
---

Salva il database e i file allegati tutti i giorni, tieni tre copie su due supporti diversi con una fuori dallo studio, e ripristina una di quelle copie almeno una volta l'anno per verificare che tenga. Se nessuno ha mai ripristinato, non hai un backup. Hai un archivio che dai per buono.

Qui sotto trovi cosa entra in quella copia, ogni quanto ha senso farla e come controllarla senza dipendere da quello che ti dicono al telefono.

## Cosa entra nel backup, e cosa resta quasi sempre fuori

Uno studio odontoiatrico non tiene i dati in un posto solo, li tiene in due. Nel database ci sono i pazienti, l'agenda, l'odontogramma, i piani di cura, i preventivi e le fatture. Le radiografie, i PDF firmati e le scansioni vivono come file, spesso in un'altra cartella o in un altro servizio.

Un backup che copre solo il database sembra completo fino al giorno in cui lo ripristini e scopri che le radiografie non ci sono.

| Cosa salvare | Perché conta | Incluso di default? |
|---|---|---|
| Database | Pazienti, agenda, odontogramma, preventivi, fatturazione | ✓ Quasi sempre |
| Radiografie e immagini cliniche | Fanno parte della cartella clinica e occupano quasi tutto lo spazio | ✗ Spesso escluse per dimensione |
| Consensi e documenti firmati | Sono la prova che il consenso c'è stato | ~ Dipende da dove il gestionale li archivia |
| Configurazione del sistema | Senza, il ripristino richiede ore in più | ✗ Quasi mai |
| Chiavi e certificati di fatturazione | Senza, non riesci a riemettere | ✗ Quasi mai |

> **Guarda quanto pesa il backup prima di fidartene.** Cinque anni di radiografie non stanno in un archivio da 200 MB. Se la copia di stanotte pesa molto meno dei tuoi dati, qualcosa resta fuori, e sai già cosa.

![Cartella clinica di un paziente con odontogramma, allerte cliniche e piano di cura attivo](/screenshots/dental-chart.png)

*Questo è ciò che un ripristino deve restituire intero, non solo l'elenco dei pazienti.*

## Ogni quanto: la domanda vera è quanto lavoro puoi perdere

La frequenza non si decide per abitudine, si decide in base a quanto lavoro sei disposto a rifare. Tra l'ultimo backup e il guasto c'è un buco, e quel buco lo riempie qualcuno a mano, a memoria.

| Frequenza | Cosa perdi nel caso peggiore | A chi conviene |
|---|---|---|
| Settimanale | Fino a sei giorni di cartelle e incassi | ✗ Insufficiente per qualsiasi studio attivo |
| Giornaliera, di notte | Una giornata di lavoro | ~ Il minimo ragionevole |
| Ogni poche ore | Mezza mattinata | ✓ Studi con più riuniti e volumi alti |
| Continua | Minuti | ✓ Se il fornitore la offre senza lavoro in più |

Metti un numero su quel buco. Riuniti per ore per fatturato medio è il conto che trasforma la decisione in un confronto economico invece che in una questione di gusti.

## La regola 3-2-1, e perché la copia nella stessa stanza non conta

La CISA, l'agenzia statunitense per la cybersicurezza, riassume la prassi accettata in tre numeri: tre copie di ogni file importante (una principale e due di backup), su due supporti diversi, con una copia conservata fuori sede.

- **Tre copie**, perché anche la seconda si rompe. Un disco di backup comprato lo stesso giorno dell'originale tende a morire nello stesso periodo.
- **Due supporti diversi**, perché lo stesso guasto porta via due dispositivi identici in una volta, dal bug del firmware allo sbalzo di tensione.
- **Una copia fuori dallo studio**, perché un furto, un incendio o un allagamento si prendono insieme il server e il disco USB nel cassetto accanto.
- **Una copia offline o immutabile**, perché il ransomware cifra tutto ciò su cui la macchina infetta può scrivere, disco di backup sempre collegato compreso.

| | Disco USB in studio | NAS in studio | Copia cifrata fuori sede |
|---|---|---|---|
| Guasto del disco principale | ✓ Copre | ✓ Copre | ✓ Copre |
| Furto o incendio | ✗ Si perde con l'originale | ✗ Si perde con l'originale | ✓ Copre |
| Ransomware | ~ Solo se era scollegato | ✗ Di solito viene cifrato anche lui | ✓ Se immutabile o versionata |
| Lavoro mensile richiesto | Cambiare e portare via il disco | Controllare che stia ancora girando | ✓ Nessuno una volta automatizzata |

## Cosa chiede la norma, e cosa devi decidere tu

Il GDPR non parla di dischi, parla di ripristino. L'articolo 32, paragrafo 1, lettera c) impone la capacità di ripristinare tempestivamente la disponibilità e l'accesso dei dati personali in caso di incidente fisico o tecnico, e la lettera d) impone una procedura per testare e valutare regolarmente l'efficacia di quelle misure. Un backup che nessuno ha provato non soddisfa né l'una né l'altra.

Sulla conservazione, il quadro italiano lascia allo studio una decisione che molti non sanno di dover prendere. Il Garante per la protezione dei dati personali chiarisce che, quando un periodo specifico non è stabilito da norme, è il titolare a doverlo determinare, conservando i dati "per un arco di tempo non superiore al conseguimento delle finalità per le quali i dati sono trattati" e indicando quel periodo, o i criteri per stabilirlo, nell'informativa al paziente.

> **Se nessuno nello studio sa dire per quanti anni tenete le cartelle, il periodo non è stato deciso.** È una scelta che il titolare deve fare, mettere per iscritto e comunicare ai pazienti, e la strategia di backup deve reggere proprio quel numero.

![Elenco fatture con gli stati emessa, pagata, pagata in parte, scaduta e bozza](/screenshots/invoices.png)

*Anche la fatturazione ha i suoi obblighi di conservazione e deve sopravvivere al ripristino.*

## La prova di ripristino, passo per passo

È mezz'ora l'anno, ed è l'unica cosa che distingue un backup da una cartella con dentro file pesanti.

1. **Prendi una copia a caso**, non quella di stanotte. Quella di tre settimane fa dice molto di più su quanto il processo regga nel tempo.
2. **Ripristinala su un'altra macchina o un altro server**, mai sopra il sistema in produzione.
3. **Cronometra** dall'inizio al momento in cui l'agenda di domani si apre. Quel numero è il tuo tempo reale di ripartenza e quasi sempre sorprende.
4. **Apri tre pazienti precisi** e verifica che ci siano odontogramma, radiografie e ultimo preventivo.
5. **Controlla la fatturazione dell'ultimo trimestre**, la parte che nessuno guarda finché non manca.
6. **Annota data, durata e chi l'ha fatto.** Quel registro è anche la tua prova di diligenza rispetto all'articolo 32.

## Gli errori che riducono un backup a niente

- **Nessuno legge gli avvisi di errore.** Un processo che fallisce da undici settimane manda una mail ogni notte a una casella che non apre più nessuno.
- **La copia sta sulla stessa macchina**, in un'altra cartella o su un'altra partizione. Protegge da una cancellazione per sbaglio e da nient'altro.
- **Il disco di backup resta collegato**, quindi il ransomware lo cifra insieme al resto.
- **La copia non è cifrata.** Un disco perso con le cartelle di tutto lo studio è una violazione da notificare, non un contrattempo.
- **Solo il tecnico che l'ha montato sa ripristinare**, e non lavora più con voi. Scrivi la procedura e tienila fuori dal sistema che dovresti ripristinare.
- **Il backup è del fornitore e nessuno ha mai chiesto un export proprio.** Se il fornitore sparisce, la copia sparisce con lui.

In Dentalpin il backup è un dump standard di PostgreSQL più la cartella dei file, quindi lo automatizzi con gli strumenti che già usi e lo ripristini senza chiedere permesso a noi né aspettare nessuno. Cosa comprendono la versione ospitata e quella installata sul tuo server sta in [prezzi](/it/prezzi/), e se vuoi provare un ripristino prima di decidere, [installarlo richiede tre minuti](/it/blog/installare-dentalpin-in-tre-minuti/).

## Fonti

- Regolamento (UE) 2016/679 (GDPR), articolo 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultato il 10 agosto 2026.
- Garante per la protezione dei dati personali, chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942). Consultato il 10 agosto 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Consultato il 10 agosto 2026.

Questo non è un parere legale. I termini di conservazione applicabili al tuo studio dipendono dal caso concreto e vanno confermati con il tuo consulente o con l'ordine professionale.
