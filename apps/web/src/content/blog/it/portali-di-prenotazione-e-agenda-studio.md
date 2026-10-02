---
title: "Portali di prenotazione e la tua agenda: cosa si sincronizza davvero e di chi sono i dati"
description: "Prima di collegare Doctoralia all'agenda: sincronizzazione in uno o due sensi, lo slot dato al telefono, e chi è titolare di quali dati."
pubDate: 2026-10-02
translationKey: portales-cita-online-agenda-dental
tags: [agenda, prenotazioni-online, gdpr, gestione-studio]
---

Prima di collegare un portale di prenotazione alla tua agenda ci sono quattro cose da chiarire, e nessuna compare nella demo: se la sincronizzazione va nei due sensi o in uno solo, che fine fa lo slot che la segreteria ha appena dato al telefono, quali campi della cartella clinica passano davvero, e chi è titolare del trattamento di cosa. Sull'ultimo punto la privacy policy di Doctoralia è più precisa della media del settore: i ruoli sono tre, non uno.

Queste quattro risposte decidono se il portale è una seconda segreteria o una seconda agenda che da oggi terrai a mano.

> **Qui non si parla dell'agenda aperta sul tuo sito.** È un'altra decisione e ha il suo articolo: [la prenotazione online](/it/blog/prenotazione-online-studio-dentistico/). Qui il paziente prenota sulla piattaforma di un terzo, dove vivono anche il suo primo contatto con te e, spesso, la recensione.

## Chi è chi: Docplanner Italy, e non solo

La privacy policy pubblicata su `doctoralia.it` nomina l'entità italiana per esteso: Docplanner Italy S.r.l., sede legale in Piazzale delle Belle Arti n. 2, 00196 Roma, partita IVA 09244850963, parte del gruppo Docplanner.

Lo stesso documento spiega che dentro il gruppo "i diversi soggetti svolgono ruoli differenti". Non è una formula di cortesia: cambia a chi ti rivolgi e per cosa.

## Tre ruoli, non uno

| Quali dati | Ruolo del portale | Cosa comporta per lo studio |
|---|---|---|
| I dati dei tuoi pazienti trattati sulla Piattaforma Professionista | ✓ Responsabile del trattamento | Serve il contratto dell'art. 28 e le istruzioni le dai tu |
| Il rapporto commerciale: contratto, fatturazione, reclami | Autonomo titolare del trattamento | ✗ Non si negozia nel tuo contratto |
| Infrastruttura tecnica e architettura del prodotto | ~ Contitolari fra società del gruppo | Esiste un accordo interno di riparto che tu non firmi |
| L'account che il paziente crea sulla piattaforma | Rapporto diretto fra paziente e piattaforma | ✗ Fuori dal tuo perimetro |

La prima riga è letterale: "Quando utilizzi la Piattaforma Professionista per trattare i dati personali dei tuoi clienti, pazienti, dipendenti o collaboratori, agisci in qualità di titolare del trattamento e noi agiamo in qualità di responsabile del trattamento".

È una buona notizia e un obbligo nello stesso respiro. I dati dei tuoi pazienti restano tuoi, e l'art. 28 del GDPR ti chiede un contratto firmato con un contenuto minimo. Lo trattiamo in [la nomina del responsabile esterno](/it/blog/nomina-responsabile-esterno-gestionale-dentistico/).

La seconda riga è quella che sorprende. Per il proprio rapporto commerciale con te, il portale decide da solo, e lo scrive: per quelle finalità "DPI stabilisce come trattare i tuoi dati personali ed è l'unico soggetto che ne risponde".

> **"Responsabile" in italiano significa il contrario di quello che sembra.** La policy lo definisce bene: il responsabile del trattamento "non assume decisioni autonome su come i tuoi dati personali vengono trattati", si limita ad assistere il titolare. E il titolare, per i dati dei pazienti, sei tu.

![Vista settimanale dell'agenda, con una colonna per ciascun professionista](/screenshots/schedule-week.png)

*L'agenda in vista settimanale, una colonna per professionista.*

## Un senso o due, e la differenza sta nei campi

La descrizione tecnica che il gruppo pubblica è sulla pagina integrazioni del mercato spagnolo, e parla di "una API bidirezionale robusta e sicura" con un flusso di dati costante: gli appuntamenti prenotati sul marketplace compaiono subito nel software integrato, e le modifiche fatte nell'agenda locale si riflettono sul marketplace.

È una descrizione tecnica, non un impegno contrattuale. Non pubblica una latenza, non pubblica una finestra di ritentativo, e non dice cosa accade quando la connessione cade a metà mattina.

Soprattutto, "bidirezionale" è una frase sull'agenda. Non dice nulla sulla cartella, ed è lì che arrivano le sorprese: un portale può scrivere gli appuntamenti senza toccare l'anagrafica, oppure creare un doppione a ogni nuovo paziente che prenota. Entrambi i comportamenti si chiamano "integrazione" su un dépliant.

## Lo slot dei trenta secondi

Il caso che rompe un'integrazione non è la prenotazione normale, è quella simultanea. La segreteria dà uno slot al telefono alle 10:14:30 e qualcuno lo prenota sul portale alle 10:14:45, quando la disponibilità pubblicata non si era ancora aggiornata.

Nessuna delle due parti pubblica cosa succede allora. La domanda non si risolve leggendo: si risolve chiedendola per iscritto prima di firmare e provandola.

> **Provalo tu, con uno slot vero e un cronometro.** Blocca uno slot in agenda e misura quanto tempo resta visibile sul portale. Poi fai il contrario. Il numero che ottieni è il tuo rischio di doppia prenotazione, ed è l'unico dato di questa decisione che nessuno ti metterà per contratto.

![Cartella del paziente, scheda anagrafica con i campi di contatto](/screenshots/patients.png)

*La scheda anagrafica del paziente, con i campi che un'integrazione può scrivere.*

## Cosa mettere per iscritto prima di collegare qualsiasi cosa

1. **Chiedi la direzione di ogni campo**, uno per uno: cosa il portale scrive nella tua cartella e cosa ne legge.
2. **Stabilisci cosa accade in caso di conflitto** di slot e chi decide, come procedura e non come buona intenzione.
3. **Firma la nomina a responsabile** prima dell'attivazione, non dopo il primo paziente.
4. **Chiedi l'elenco dei sub-responsabili** e annota la data in cui ti è stato consegnato.
5. **Decidi quali campi non passano mai**: allergie, note cliniche, insoluti. Un portale di prenotazione non ha bisogno dell'odontogramma.
6. **Definisci l'uscita prima dell'ingresso**: come esporti lo storico degli appuntamenti, che fine fa il profilo, che fine fanno le recensioni.
7. **Fai un pilota con un solo professionista** e una fascia della settimana, per due settimane.
8. **Registra l'integrazione nel registro dei trattamenti**, perché è un flusso di dati nuovo.

Il punto sei è quello che nessuno fa e quello che costa più caro dopo. Chiedere dell'uscita mentre ti stanno vendendo l'ingresso è l'unico momento in cui otterrai una risposta scritta.

## Cosa deve saper fare il tuo gestionale

Un'integrazione vale quanto l'agenda che ha dietro. Questo decide se il portale ti aiuta o ti raddoppia il lavoro.

- **Una API tua** su agenda e pazienti, perché l'integrazione non dipenda dall'essere inserito in un elenco.
- **Blocchi di indisponibilità veri**, per professionista e per riunito, che il portale legge invece di indovinare.
- **L'origine di ogni appuntamento**, per sapere quanti arrivano dal portale e quanti dal telefono prima di rinnovare il canone.
- **Campi di contatto separati da quelli clinici**, perché un'integrazione non possa leggere né scrivere ciò che non la riguarda.
- **Un log degli accessi** con utente, data e operazione, compresi gli accessi di un'integrazione. Lo trattiamo in [log degli accessi alla cartella clinica](/it/blog/log-accessi-cartella-clinica/).
- **Un export completo dello storico appuntamenti**, perché il giorno in cui cambi portale quello storico è tutto ciò che ti resta.

In Dentalpin l'agenda ha una API propria, l'origine di ogni appuntamento viene registrata e i campi di contatto stanno separati da quelli clinici, così puoi collegare il portale che preferisci senza attendere una certificazione. Il codice è pubblicato e anche i [prezzi](/it/prezzi/).

Questo non è un parere legale. La nomina a responsabile e il registro dipendono da come il tuo studio tratta i dati, e vanno riletti con il tuo consulente prima di attivare un'integrazione; il reclamo, se serve, si presenta al Garante per la protezione dei dati personali.

## Fonti

- Docplanner Italy S.r.l., informativa privacy della Piattaforma Professionista su `doctoralia.it`, paragrafi 1.1 (autonomo titolare), 1.2 (contitolari), 2 (responsabile del trattamento) e le definizioni di responsabile e sub-responsabile. Consultato il 2 ottobre 2026. <https://www.doctoralia.it/privacy>
- Doctoralia, "Integraciones Agenda online", pagina integrazioni del mercato spagnolo del gruppo, sulla API bidirezionale. Consultato il 2 ottobre 2026. <https://pro.doctoralia.es/integraciones>
- Regolamento (UE) 2016/679, art. 28, sul responsabile del trattamento e il contenuto minimo del contratto. Consultato il 2 ottobre 2026.
