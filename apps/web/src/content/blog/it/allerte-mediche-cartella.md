---
title: "Allergie e allerte mediche: che si vedano sempre"
description: "Sei campi per ogni allergia, tre risposte valide quando non ce n'è nessuna e i quattro punti in cui l'allerta deve comparire da sola. Con le fonti ufficiali."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [allergie, allerte-cliniche, cartella-clinica, sicurezza-del-paziente, gdpr]
---

Un'allergia protegge il paziente solo se occupa un campo suo e compare da sola dove si prescrive e dove si tratta. Per ognuna si annotano sei cose: la sostanza, che cosa è successo al paziente, con quale gravità, se è ancora attuale, se è confermata o soltanto riferita, e quando e da chi è stata segnalata.

E quando non ce n'è nessuna, anche quello si scrive. Un campo allergie vuoto non dice che il paziente non ha allergie, dice che nessuno ha ancora chiesto, e le due frasi portano a decisioni diverse.

## Sei campi per allergia, e nessuno in testo libero

Un'allergia scritta nel riquadro delle note sparisce il giorno in cui quel riquadro arriva a undici righe. Smette di essere filtrabile, smette di poter avvisare qualcuno e smette di poter essere migrata su un altro gestionale.

| Campo | Che cosa ci va | Esempio |
|---|---|---|
| Sostanza | Il principio attivo o il materiale, mai la sola marca | Amoxicillina, lattice, clorexidina, nichel |
| Manifestazione | Che cosa è successo davvero, in termini clinici | Orticaria, angioedema, broncospasmo, anafilassi |
| Gravità | Com'è stata la reazione già avvenuta | Lieve, moderata, grave |
| Criticità | Il danno possibile a un'esposizione futura | Bassa, alta, non valutabile |
| Stato clinico | Se l'allergia è ancora in essere oggi | Attiva, inattiva, risolta |
| Verifica | Da dove arriva il dato | Non confermata, confermata, smentita, errore di inserimento |
| Data e origine | Quando è stata registrata e chi l'ha detto | 12/03/2024, la paziente stessa; referto allergologico |

Questi campi non sono una convenzione nostra. Sono quelli della risorsa AllergyIntolerance di HL7 FHIR, lo standard con cui i sistemi sanitari si scambiano questa informazione, e usare i suoi stessi valori è ciò che permette a un'allergia di sopravvivere a un cambio di gestionale.

> **Gravità e criticità sono due campi distinti, e confonderli li svuota entrambi.** FHIR mette la gravità sulla reazione concreta che si è verificata (lieve, moderata o grave) e la criticità sulla sostanza, come stima del danno potenziale di un'esposizione futura. Un gestionale che offre un solo menù a tendina obbliga a scegliere quale dei due perdere.

![Scheda paziente nella sezione informazioni, con l'anamnesi aperta e la voce allergie che mostra i FANS contrassegnati con criticità alta](/screenshots/patients.png)

*L'anamnesi in campi separati: allergie, farmaci, malattie sistemiche e condizioni particolari. L'etichetta arancione accanto all'allergia è il livello di criticità.*

## "Nessuna allergia nota" è un dato, un campo vuoto no

La linea guida CG183 del NICE britannico sull'allergia ai farmaci chiede di documentare lo stato allergico del paziente con una di tre voci: allergia a farmaci, nessuna nota, oppure non accertabile. Tutte e tre sono informazione e tutte e tre si registrano.

Il campo vuoto non è nessuna delle tre. È l'assenza della domanda e, in uno studio dove registrano più persone, è impossibile distinguerlo da una dimenticanza.

> **Un campo vuoto e un "nessuna nota" si leggono quasi allo stesso modo e significano il contrario.** Il primo dice che nessuno ha chiesto. Il secondo dice che si è chiesto e la risposta è stata no. Se il gestionale non li distingue, lo studio non può sapere a chi manca ancora l'anamnesi.

## Allergia, intolleranza ed effetto avverso non sono la stessa cosa

La stessa linea guida NICE chiede che lo stato allergico sia documentato separatamente dalle reazioni avverse ai farmaci e che sia chiaramente visibile a chiunque prescriva. FHIR lo tiene in un campo a due valori, allergia o intolleranza, che separa il meccanismo immunologico da tutto ciò che non lo è.

In pratica la distinzione è questa:

- **Allergia.** C'è un meccanismo immunitario dietro. Orticaria, angioedema, broncospasmo o anafilassi dopo l'esposizione.
- **Intolleranza.** Il paziente reagisce male senza che quel meccanismo sia coinvolto.
- **Effetto avverso.** Un effetto noto del farmaco. La nausea con un antibiotico è l'esempio di tutti i giorni.

Mettere tutte e tre nella casella delle allergie è comodo il giorno stesso e caro dopo, perché toglie opzioni terapeutiche che il paziente tollera e perché diluisce le allergie vere tra voci che non lo sono.

## L'allergia alla penicillina quasi mai è allergia alla penicillina

È qui che la distinzione di sopra costa di più, e c'è un numero ufficiale che ne dà la misura.

> **I CDC la mettono così: il 10 % dei pazienti statunitensi dichiarava un'allergia alla penicillina e, alla valutazione clinica, meno dell'1 % lo era davvero.** Gli stessi CDC aggiungono che gli anticorpi IgE specifici possono diminuire nel tempo, per cui alcuni pazienti arrivano a tollerare più avanti ciò che prima non tolleravano.

Niente di tutto questo autorizza uno studio odontoiatrico a ignorare un'allergia dichiarata. Cambia invece che cosa si scrive, perché un'etichetta senza storia dietro non potrà mai essere riesaminata.

Se in cartella c'è "allergico alla penicillina" e nient'altro, quell'etichetta accompagna il paziente per tutta la vita. Se ci sono la reazione precisa, l'anno in cui è avvenuta e chi l'ha affermata, un allergologo ha di che valutarla e, se del caso, toglierla.

## Le allerte che non sono allergie

La casella delle allergie è la più nota, ma metà di quello che va visto prima di iniziare non è un'allergia.

- **Anticoagulanti e antiaggreganti.** Cambiano la pianificazione di qualsiasi intervento sanguinante e sono farmaci, non allergie, quindi vogliono un campo loro.
- **Bifosfonati e denosumab.** Contano sia per via orale sia per via endovenosa, e quello che serve a portata è il farmaco, l'indicazione e da quando.
- **Rischio di endocardite infettiva.** La linea guida sull'endocardite della Società Europea di Cardiologia del 2023 raccomanda la profilassi antibiotica nei pazienti ad alto rischio prima delle procedure odontoiatriche a rischio, e definisce entrambe. Alto rischio: endocardite pregressa, protesi valvolari impiantate chirurgicamente o per via transcatetere, materiale per la riparazione valvolare, cardiopatia congenita (escluse le anomalie valvolari isolate) e dispositivo di assistenza ventricolare come terapia di destinazione. Procedure a rischio: estrazioni, chirurgia orale e qualsiasi manipolazione della regione gengivale o periapicale, comprese la detartrasi e il trattamento canalare.
- **Gravidanza e allattamento.** Con la data, perché è l'unica allerta di questo elenco che scade da sola.
- **Diabete, epilessia e immunosoppressione.** Cambiano l'appuntamento, non solo il trattamento.

Il terzo punto è quello che più spesso arriva tardi, perché la detartrasi rientra nelle procedure a rischio e di solito viene messa in agenda come un'igiene di routine. La stessa linea guida europea raccomanda a questi pazienti igiene professionale e controllo almeno due volte l'anno, quindi sono appuntamenti frequenti e l'allerta deve arrivare in agenda, non solo in cartella.

## Un dato che bisogna andare a cercare non è un'allerta

Un'allergia registrata benissimo in una scheda che nessuno apre protegge il paziente esattamente quanto non averla registrata. Questi sono i quattro punti in cui deve uscire da sola:

1. **L'intestazione della cartella**, visibile prima di aprire qualunque sezione.
2. **La vista dell'odontogramma**, dove si lavora e dove si decide che cosa si fa oggi.
3. **La prescrizione**, nel momento in cui si sceglie il farmaco.
4. **L'agenda**, prima che il paziente entri dalla porta, finché c'è ancora tempo di preparare qualcosa.

![Scheda paziente con le allerte cliniche evidenziate in rosso accanto all'odontogramma, il piano di trattamento attivo e il prossimo appuntamento](/screenshots/dental-chart.png)

*L'allerta clinica fissa nella colonna di sinistra, accanto all'odontogramma. Non serve aprire nulla per vederla e resta lì cambiando sezione.*

## Chi la vede e chi la può cambiare

Il GDPR classifica i dati sanitari come categoria particolare. L'articolo 9, paragrafo 1 ne vieta il trattamento salvo che si applichi una delle eccezioni del paragrafo 2, e l'articolo 5, paragrafo 1, lettera c aggiunge la minimizzazione: adeguati, pertinenti e limitati a quanto necessario.

Questo non impedisce alla reception di vedere un'allerta. Obbliga però a decidere che cosa serve a ciascun ruolo, e quasi mai è la stessa cosa:

- **La reception** deve sapere che quell'appuntamento richiede una preparazione, non la diagnosi che la motiva.
- **Il riunito** ha bisogno dell'allerta completa.
- **Tutti** hanno bisogno che la modifica resti con data, ora e autore, perché la lettera f dello stesso articolo richiede misure tecniche e organizzative adeguate, e cancellare un'allergia senza lasciare traccia non lo è.

La lettera d porta la metà che si dimentica: i dati devono essere esatti e aggiornati. Un'allergia smentita da un test si aggiorna, non resta lì per sicurezza.

## Come si tiene aggiornata

1. **Alla prima visita si compila per intero**, compresa la voce "nessuna nota" quando è quella la risposta.
2. **A ogni seduta si conferma in una riga.** Non è rifare l'anamnesi, è chiedere se c'è terapia o diagnosi nuova.
3. **Prima di prescrivere o di anestetizzare si rilegge.** È l'unico momento in cui l'allerta può ancora evitare il danno.
4. **Quando arriva un referto si aggiornano verifica e data**, e si annota da dove viene.
5. **Al richiamo di un paziente inattivo si rivede tutta.** Due anni senza venire sono due anni di terapie nuove.

## Dove il gestionale aiuta e dove no

Nessun gestionale fa l'anamnesi al posto tuo. Quello che decide è se la risposta finisce in un campo con stato, criticità e data oppure in un paragrafo di testo libero, e in quali punti ricompare da sola senza che nessuno debba ricordarsi di andarla a guardare.

Dentalpin tiene allergie, farmaci, malattie sistemiche e condizioni particolari come campi separati dell'anamnesi, con il livello di criticità, e mostra le allerte fisse accanto all'odontogramma e nell'intestazione della cartella. I piani sono su [prezzi](/it/prezzi/).

Questo non è un parere legale né una linea guida clinica. Le raccomandazioni professionali applicabili e la normativa nazionale del paese in cui opera lo studio prevalgono su qualsiasi indicazione generale di questo articolo.

## Fonti

- HL7 FHIR R4, risorsa AllergyIntolerance (elementi type, category, criticality, clinicalStatus, verificationStatus e reaction.severity): <https://hl7.org/fhir/R4/allergyintolerance.html> (consultato il 12 settembre 2026).
- NICE, linea guida clinica CG183, *Drug allergy: diagnosis and management*, raccomandazioni sulla documentazione dello stato allergico. Testo integrale del National Clinical Guideline Centre: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (consultato il 12 settembre 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (consultato il 12 settembre 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), pp. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (consultato il 12 settembre 2026).
- Regolamento (UE) 2016/679 (GDPR), articolo 5, paragrafo 1, lettere c, d ed f, e articolo 9, paragrafo 1. Testo ufficiale su EUR-Lex: <https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679> (consultato il 12 settembre 2026).
