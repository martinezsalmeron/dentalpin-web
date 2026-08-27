---
title: "Software libero o proprietario in sanità: cosa cambia davvero"
description: "Che cosa decide davvero la licenza di un gestionale sanitario, che cosa non decide, e come verificare in dieci minuti in quale categoria stai entrando."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [software-libero, open-source, licenze, gdpr, contratti]
---

La licenza non decide se un programma va bene per il tuo studio. Decide tre cose precise: chi potrà mantenerlo se il fornitore sparisce, se puoi installarlo su un server tuo e a quali condizioni potrai ancora usarlo fra dieci anni.

Tutto il resto, il prezzo, l'assistenza, la sicurezza reale e la responsabilità verso il GDPR, dipende dal fornitore e da come il sistema viene installato. Niente di tutto questo è scritto nella licenza, e confondere le due liste è il modo più rapido per sbagliare la scelta.

## Le categorie sono tre, non due

Il discorso abituale contrappone "libero" a "proprietario" e lascia fuori la categoria in cui oggi si trova una parte crescente del mercato.

La Open Source Initiative mantiene la definizione di riferimento, alla versione 1.9. La prima frase è quella che si dimentica più spesso: "open source non significa solo accesso al codice sorgente". La definizione richiede anche che la licenza consenta la redistribuzione, consenta le opere derivate e non impedisca a nessuno di usare il programma "in uno specifico campo di attività".

La Free Software Foundation dice la stessa cosa con quattro libertà: eseguire il programma come vuoi, studiarne il funzionamento e modificarlo, redistribuire copie e distribuire le tue versioni modificate. Per le libertà 1 e 3, precisa il testo, "l'accesso al codice sorgente è un prerequisito".

| | Libero / open source | Codice disponibile | Proprietario |
|---|---|---|---|
| Vedi il codice | ✓ Chiunque | ✓ Pubblicato | ✗ No, salvo deposito pattuito |
| Puoi modificarlo | ✓ Sì | ✓ Sì | ✗ No |
| Uso per qualsiasi scopo | ✓ Nessun campo escluso | ~ Alcuni usi esclusi | ~ Quello che dice il contratto |
| Puoi redistribuirlo | ✓ Sì | ~ Con gli stessi limiti | ✗ No |
| Rispetta la definizione OSI | ✓ Sì | ✗ No | ✗ No |
| Licenze tipiche | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Contratto del produttore |

La colonna centrale è reale e sta crescendo. La Business Source License 1.1 pubblica il codice e ne consente la modifica, ma si riserva alcuni usi, e lo dice nel proprio testo senza giri di parole: "questa licenza non è una licenza open source". Impegna anche l'opera a passare a una licenza libera in una data stabilita.

> **"Il codice è pubblico" e "è open source" non sono la stessa affermazione.** Un fornitore può mostrarti ogni riga e vietarti comunque usi specifici. Non è disonesto, è un'altra categoria, e l'unico modo per sapere in quale ti trovi è leggere la licenza.

## Cosa decide la licenza

- **Chi può mantenere il programma quando il fornitore non c'è più.** Con il codice e il permesso di modificarlo, qualsiasi sviluppatore competente può correggere il sistema. Non è gratis e non è immediato, ma è possibile, ed è questa la differenza che conta il giorno dell'annuncio.
- **Dove gira.** Una licenza libera ti permette di installarlo sul tuo hardware. Un abbonamento proprietario in cloud quasi mai lo consente, per quanto tu paghi.
- **Se puoi verificare cosa fa con i dati.** Leggere il codice è l'unico modo per accertare cosa esce dallo studio e con quale frequenza, invece di fidarti di una risposta commerciale.
- **Cosa succede fra dieci anni.** Una licenza libera non scade. Un abbonamento sì, e si porta via l'accesso al programma che contiene le cartelle cliniche.

## Cosa la licenza non decide

Qui si annidano quasi tutti i malintesi.

- **Chi risponde ai sensi del GDPR.** L'articolo 4, punto 7, definisce titolare del trattamento chi "determina le finalità e i mezzi del trattamento", e l'articolo 24, paragrafo 1, gli impone di dimostrare la conformità. È lo studio, qualunque software usi. Se l'hosting è di terzi, l'articolo 28 richiede un contratto con il responsabile, e la lettera g) del paragrafo 3 impone di restituire o cancellare i dati al termine del servizio.
- **Se il programma è un dispositivo medico.** Il regolamento (UE) 2017/745 definisce dispositivo medico "qualunque strumento, apparecchio, apparecchiatura, software, impianto, reagente, materiale o altro articolo" destinato dal fabbricante a una finalità medica. Decide la destinazione d'uso, mai la licenza.
- **Se è sicuro.** Il codice pubblico è verificabile, non verificato. Sono due cose diverse e solo la seconda protegge qualcuno.
- **Quanto costa.** Esiste software libero con contratti di assistenza cari e software proprietario economico.
- **Se qualcuno risponde il venerdì alle otto di sera.** Lo decide un contratto di assistenza, e lo vendono entrambe le categorie.

![Scheda paziente con gli avvisi clinici, il piano di cura attivo e la cronologia filtrabile per visite, trattamenti, pagamenti e comunicazioni](/screenshots/patient-timeline.png)

*Anni di cartella clinica dentro un programma. La licenza non cambia chi ne risponde: resta lo studio.*

## "Libero" non vuol dire "gratuito"

La Free Software Foundation apre la definizione proprio con questa distinzione: si tratta "di libertà, non di prezzo", e conviene pensare a "free" come in "libertà di parola", non come in "birra gratis". La stessa pagina ricorda che puoi aver pagato le tue copie e conservare comunque tutte le libertà.

In pratica il denaro non sparisce. Cambia posto.

| Voce | Proprietario, ospitato dal fornitore | Libero, sul tuo server |
|---|---|---|
| Licenza | ~ Per utente, per riunito o per sede | ✓ Nessun costo di licenza |
| Server e archiviazione | ✓ Compresi nel canone | ✗ A tuo carico |
| Backup | ✓ Del fornitore, con le sue regole | ✗ Tuoi, e vanno provati |
| Aggiornamenti | ✓ Applicati per te | ~ Tuoi o di chi incarichi |
| Assistenza | ✓ Inclusa o a contratto | ~ Comunità, o contratto separato |
| Andarsene | ~ Dipende dal loro export | ✓ Hai già dati e codice |

Un server piccolo e fatto bene costa poco. Il tempo della persona che lo aggiorna, controlla i backup e risponde quando qualcosa si rompe non è zero, ed è il numero che nessuno mette nel foglio di calcolo. Prima di decidere vale la pena leggere cosa comporta davvero fare [self-hosting di software sanitario](/it/blog/self-hosting-software-sanitario/).

## Leggere una licenza in dieci minuti

Per il primo passaggio non serve un avvocato. Servono cinque cose da aprire e da annotare.

1. **Cerca il file LICENSE nel repository pubblico.** Se non c'è un repository, la risposta è già arrivata: è proprietario. Questo non lo squalifica, ti dice solo quali domande fare dopo.
2. **Controlla se il nome della licenza è nell'elenco della OSI.** GPL, AGPL, Apache e MIT ci sono. La BSL e la famiglia "source available" no.
3. **Cerca le parole "Use Limitation" o "Additional Use Grant".** Se alcuni usi sono esclusi non è una licenza libera, per quanto pubblico sia il codice.
4. **Cerca una "Change Date".** Alcune licenze diventano libere dopo un periodo, spesso quattro anni, e questo cambia il conto sul lungo periodo.
5. **Chiedi se il codice pubblicato è quello che gira.** Un repository fermo a una versione di due anni fa non è una rete di sicurezza.
6. **Chiedi un export completo prima di firmare.** Il [formato da pretendere](/it/blog/esportare-dati-gestionale/) conta più della licenza il giorno in cui vorrai andartene.

> **Se puoi fare una sola verifica, fai l'ultima.** Un export aperto e provato ti protegge in tutte e tre le categorie. Una licenza libera senza dati esportabili non salva nessuna migrazione.

![Schermata dei report dello studio](/screenshots/reports.png)

*I report si ricostruiscono dai dati. Per questo la domanda utile prima di firmare riguarda il formato in cui i dati escono, non la licenza con cui sono entrati.*

## Cosa cambia a dicembre 2027

Il regolamento (UE) 2024/2847 del 23 ottobre 2024, noto come regolamento sulla ciberresilienza, fissa requisiti di cibersicurezza per i prodotti con elementi digitali. L'articolo 71 ne stabilisce l'applicazione dall'**11 dicembre 2027**, con l'articolo 14 dall'11 settembre 2026 e il capo IV dall'11 giugno 2026.

È una norma rivolta a fabbricanti e distributori, non al tuo studio, ma cambia a chi puoi chiedere conto.

- **Il software commerciale rientra, libero o proprietario che sia.** A decidere è la fornitura nel corso di un'attività commerciale.
- **Il software libero non monetizzato resta fuori.** Il considerando 18 precisa che la fornitura di prodotti liberi e open source "che non sono monetizzati dai loro fabbricanti non dovrebbe essere considerata un'attività commerciale".
- **Compare una figura nuova, il "gestore di software open source"**, definita all'articolo 3, punto 14, per le persone giuridiche che sostengono in modo continuativo lo sviluppo di progetti liberi destinati ad attività commerciali, con obblighi più leggeri di quelli di un fabbricante.

La lettura pratica per uno studio è breve: da quella data un progetto comunitario senza un'azienda dietro e un prodotto commerciale non rispondono allo stesso modo, e conviene sapere quale dei due si sta installando.

## In sanità esiste già

Non è un'ipotesi di laboratorio. GNU Health si descrive come "l'ecosistema libero di salute digitale, dove la medicina sociale incontra l'informatica sanitaria più avanzata" e pubblica installazioni in ospedali e ministeri della salute di diversi paesi. OpenEMR si presenta come "la soluzione open source per la cartella clinica elettronica e la gestione dello studio più diffusa" e dichiara la certificazione ONC negli Stati Uniti.

Nessuno dei due è un gestionale odontoiatrico, ed è proprio il punto: la domanda sulla licenza ha la stessa risposta in ogni specialità.

## La domanda che decide

È una sola: **se questa azienda sparisce domani, cosa continua a funzionare?**

Se la risposta comprende il codice, i dati in un formato aperto e un server che controlli, la licenza ha fatto il suo lavoro. Se non ne comprende nessuno dei tre, nessuna clausola la sostituisce.

Dentalpin sta nella categoria centrale, e conviene dirlo con precisione: il codice è pubblico sotto BSL 1.1, con una limitazione d'uso che esclude di farne un SaaS concorrente, e con conversione automatica ad Apache 2.0, una licenza libera a tutti gli effetti, quattro anni dopo ogni pubblicazione. Si installa sul tuo server, il database è PostgreSQL e i [prezzi](/it/prezzi/) sono pubblicati.

## Fonti

Tutte consultate il 27 agosto 2026.

- Open Source Initiative, *The Open Source Definition*, versione 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, le quattro libertà. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, testo della licenza e avviso "is not an Open Source license". [mariadb.com](https://mariadb.com/bsl11/)
- Regolamento (UE) 2016/679 (GDPR), articoli 4.7, 24.1, 28.1 e 28.3, lettera g). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679)
- Regolamento (UE) 2017/745 sui dispositivi medici, articolo 2, punto 1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32017R0745)
- Regolamento (UE) 2024/2847 (ciberresilienza), considerando 18, articolo 3, punto 14, e articolo 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R2847)
- GNU Health, sito del progetto. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, sito del progetto. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, file LICENSE del repository (Business Source License 1.1).

Questo non è un parere legale. La qualificazione di un programma come dispositivo medico e la ripartizione delle responsabilità sui dati personali dipendono dal caso concreto. Verificale con il tuo consulente prima di decidere.
