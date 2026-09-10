---
title: "Quali computer servono davvero a uno studio dentistico?"
description: "Quante postazioni servono in segreteria e a ogni riunito, cosa chiede Windows 11 oggi, quando la sostituzione diventa inevitabile e cosa non conviene comprare."
pubDate: 2026-09-10
translationKey: hardware-clinica-dental
tags: [hardware, postazioni, windows, infrastruttura, riunito]
---

Uno studio con due o tre riuniti ha bisogno di meno macchine, e più economiche, di quante ne prevedano quasi tutti i preventivi: una postazione in segreteria, una per riunito e poco altro. A decidere la spesa non è la dimensione dello studio, è una sola domanda: il gestionale è un programma Windows installato oppure funziona nel browser?

Con il software installato ogni postazione deve far girare il programma e dietro c'è quasi sempre un server. Nel browser va bene qualsiasi macchina che apra Chrome o Firefox senza affanno, e il lavoro pesante lo fa il server, ovunque si trovi.

## La domanda che fissa il budget

Prima di guardare un solo modello, capite in quale dei due mondi vi trovate. Cambia il numero di postazioni, la potenza che serve e quanto costa mantenerle.

- **Software installato.** Il programma sta su ogni postazione e i dati vivono su un server dello studio. Servono quel server, un cablaggio che lo raggiunga, copie di sicurezza locali e qualcuno che se ne occupi. I requisiti li pubblica il produttore, e si fanno mettere per iscritto prima di comprare qualsiasi cosa.
- **Software nel browser.** La postazione deve solo aprire una scheda. Un portatile di fascia media di quattro anni fa basta, e quel che merita attenzione è la connessione e lo schermo, non il processore.
- **Il caso misto.** La gestione gira nel browser e l'imaging (radiologia, scanner intraorale) resta un programma Windows. È la situazione più diffusa, e significa che la postazione al riunito la dimensiona il software di imaging, non il gestionale.

> **Fatevi dare i requisiti per iscritto prima di firmare.** Un fornitore che non pubblica né invia i requisiti minimi del proprio prodotto sta lasciando che la spesa in hardware arrivi dopo il contratto, quando non c'è più niente da trattare.

## I minimi di Windows 11, e cosa conviene comprare davvero

Microsoft pubblica i requisiti minimi di Windows 11, e sono bassi. Servono a far partire il sistema, non a far lavorare una segreteria con quindici schede aperte e una radiografia in caricamento.

| Componente | Minimo pubblicato da Microsoft | Cosa conviene comprare |
|---|---|---|
| Processore | 1 GHz, 2 o più core, 64 bit | 4 core o più, degli ultimi cinque anni |
| Memoria | 4 GB | 16 GB, con 8 GB come limite minimo assoluto |
| Archiviazione | 64 GB | SSD da 256 GB o più, mai un disco meccanico |
| Firmware | UEFI compatibile con Secure Boot | Lo stesso, verificato prima dell'acquisto |
| TPM | Versione 2.0 | Versione 2.0, attivo di fabbrica |
| Grafica | DirectX 12 con driver WDDM 2.0 | La grafica integrata nel processore basta |
| Schermo | 720p da più di 9 pollici | 24 pollici e 1080p in segreteria |

I due numeri che cambiano la giornata sono la memoria e il disco. Una macchina con 8 GB e SSD lavora meglio di una con 16 GB e disco meccanico, e il passaggio a SSD è l'unico acquisto che tutti notano già la prima mattina.

![Agenda del giorno su uno schermo di segreteria, con una colonna per riunito e gli spazi liberi visibili](/screenshots/schedule-day.png)

*La vista giornaliera con una colonna per riunito: lo schermo che la segreteria tiene aperto da quando lo studio apre.*

## Dove i soldi si vedono e dove no

Non tutti i componenti si notano allo stesso modo dal bancone. Questa è la sezione che fa risparmiare più budget.

| Dove spendere | Si nota nello studio? | Perché |
|---|---|---|
| SSD al posto del disco meccanico | ✓ Tutti i giorni | Avvio, apertura delle cartelle, ricerche |
| Memoria da 8 a 16 GB | ✓ In segreteria | Molte schede e l'imaging insieme |
| Schermo grande in segreteria | ✓ Tutti i giorni | Agenda con più riuniti senza scorrere |
| Rete via cavo al riunito | ✓ Con imaging pesante | Una radiografia su wi-fi saturo fa aspettare |
| Secondo schermo in segreteria | ~ Dipende dal flusso | Utile quando fatturazione e accoglienza si sovrappongono |
| Processore di fascia alta | ✗ Quasi mai | Il collo di bottiglia sono disco e rete |
| Scheda grafica dedicata | ✗ Quasi mai | Salvo richiesta scritta del software di imaging |
| Macchina "per la sanità" con sovrapprezzo | ✗ No | Nessuna certificazione giustifica il prezzo da sola |

La riga del wi-fi è quella che evita più discussioni. Un riunito che manda immagini pesanti va via cavo ogni volta che il cavo è possibile, e quando non lo è, l'access point sta nel corridoio davanti al riunito, non nell'ufficio in fondo.

## La data che decide quando sostituire

Windows 10 ha smesso di ricevere supporto il 14 ottobre 2025. Da allora Microsoft non pubblica aggiornamenti di sicurezza né correzioni per quelle macchine, a meno che non siano iscritte al programma di aggiornamenti di sicurezza estesi.

> **L'estensione per i privati arriva fino al 12 ottobre 2027**, e l'iscrizione resta aperta fino a quella stessa data (consultato il 10 settembre 2026). È una scadenza, non un'alternativa alla sostituzione: porta solo correzioni di sicurezza critiche, senza supporto tecnico e senza migliorie.

Per uno studio questo trasforma la sostituzione in un calendario invece che in un'emergenza. Una macchina che non può passare a Windows 11 per mancanza di TPM 2.0 o di Secure Boot ha una data di sostituzione nota, e la spesa si divide su due esercizi invece di cambiare cinque postazioni nello stesso mese.

## Home o Pro: la differenza che conta con i dati dei pazienti

In negozio sembrano lo stesso computer con due etichette. Per uno studio non lo sono, e la differenza si chiama cifratura del disco.

> **BitLocker non si attiva su Windows Home.** Microsoft lo indica disponibile su Pro, Enterprise, Pro Education e Education. Un portatile della segreteria non cifrato che sparisce un venerdì è una violazione di dati sanitari; cifrato, è una macchina da rimpiazzare.

Due precisazioni utili prima di discuterne con il fornitore:

- **La crittografia del dispositivo esiste in tutte le edizioni**, ma si attiva da sola solo sulle macchine che soddisfano certi requisiti, e da Windows 11 versione 24H2 quei requisiti sono stati allentati, quindi le macchine idonee sono più di prima.
- **BitLocker con verifica dell'integrità all'avvio richiede TPM 1.2 o successivo.** Senza TPM si può cifrare lo stesso, ma la macchina parte con una chiave su una penna USB, che in segreteria finisce attaccata al computer con lo scotch e non protegge più niente.

Chiedete l'edizione Pro già nel preventivo della macchina. Passare da Home a Pro dopo si può, ma si paga a parte e capita sempre nella settimana peggiore.

## Segreteria, riunito e ufficio chiedono cose diverse

Un modello unico per tutto lo studio è comodo da comprare e scomodo da usare. Tre profili coprono qualsiasi studio piccolo.

1. **Segreteria.** È la postazione che lavora più ore e apre più finestre. Schermo grande, 16 GB, SSD e una tastiera decente. È qui che il risparmio si paga in attesa davanti al paziente.
2. **Riunito.** La dimensiona il software di imaging, se c'è. Senza imaging basta una macchina modesta o un tablet con tastiera. Quel che serve davvero è poterla disinfettare: superficie liscia, niente feritoie rivolte verso l'alto e un supporto che la tenga fuori dalla zona degli spruzzi.
3. **Ufficio o direzione.** Un portatile, per guardare i numeri fuori dallo studio senza portarsi via una copia del database su una chiavetta.

![Cartella clinica aperta sull'odontogramma, con gli avvisi clinici e il piano di cure in corso](/screenshots/dental-chart.png)

*La cartella del paziente durante la visita: odontogramma, avvisi e piano in corso sullo stesso schermo.*

## Il server, solo se serve davvero

Un server in studio ha senso in due casi: quando il gestionale installato lo richiede, oppure quando avete deciso di ospitare voi stessi un software web perché i dati non escano dall'edificio.

In entrambi i casi quel che serve è meno spettacolare di quel che viene venduto:

- **Una macchina dedicata, non quella della segreteria.** Condividere il server con una postazione di lavoro significa che un riavvio a metà mattina ferma tutto lo studio.
- **Disco SSD e una copia che esce dall'edificio.** Il server non è la copia di sicurezza. È esattamente la macchina che si rompe.
- **Un gruppo di continuità.** Un'interruzione di corrente a metà di una scrittura è il modo più rapido di corrompere un database, e un gruppo di continuità costa meno di un pomeriggio di recupero.
- **Qualcuno da chiamare.** Per iscritto, con orari e tempi di intervento. Un server senza manutenzione concordata è un server senza manutenzione.

## Prima di comprare, in quest'ordine

1. **Chiedete al fornitore del software i requisiti minimi e consigliati**, per iscritto, software di imaging compreso.
2. **Fate l'inventario di quello che avete già**: processore, memoria, disco, edizione di Windows e compatibilità con Windows 11.
3. **Separate ciò che si aggiorna da ciò che si sostituisce.** Molte postazioni hanno bisogno solo di un SSD e di memoria, e quello è un pomeriggio, non un investimento.
4. **Decidete l'edizione**, Pro ovunque passino dati dei pazienti.
5. **Guardate la rete prima delle macchine.** Se il riunito è in wi-fi e l'imaging arranca, nessun computer nuovo lo risolve.
6. **Comprate per profili**, non un modello unico per tutte le postazioni.
7. **Tenete fatture e numeri di serie insieme all'inventario.** Il giorno dell'incidente quella lista vale più della macchina.

## Cosa non serve comprare

Quattro voci compaiono in quasi tutti i preventivi e quasi mai si giustificano in uno studio piccolo: la scheda grafica dedicata senza un requisito scritto che la chieda, il processore di fascia alta per aprire un browser, la macchina che costa di più perché venduta "per la sanità", e il server comprato per sicurezza prima di sapere se il software ne ha bisogno.

La quinta costa più delle altre quattro messe insieme: rinnovare tutte le postazioni nello stesso momento perché nessuno ha guardato l'inventario finché una macchina non si è accesa più.

Se il gestionale funziona nel browser, i requisiti di una postazione sono quelli del browser e poco altro. Dentalpin è di questo tipo: si usa da Chrome o Firefox su qualsiasi macchina ragionevole e si può ospitare in studio o fuori, quindi la decisione sul server è vostra e non imposta dalla licenza. I piani sono nella pagina [prezzi](/it/prezzi/).

Questo non è un parere tecnico sulla vostra installazione specifica. I requisiti del vostro software di imaging prevalgono su qualsiasi raccomandazione generale di questo articolo.

## Fonti

- Microsoft, requisiti di sistema di Windows 11: <https://www.microsoft.com/en-us/windows/windows-11-specifications> (consultato il 10 settembre 2026).
- Microsoft, fine del supporto di Windows 10 il 14 ottobre 2025: <https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025> (consultato il 10 settembre 2026).
- Microsoft, programma di aggiornamenti di sicurezza estesi per Windows 10: <https://www.microsoft.com/en-us/windows/extended-security-updates> (consultato il 10 settembre 2026).
- Microsoft, BitLocker: edizioni supportate e requisiti di sistema: <https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/> (consultato il 10 settembre 2026).
