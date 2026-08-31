---
title: "Come valutare un progetto open source prima di affidargli lo studio"
description: "Cinque verifiche pubbliche per capire se un progetto open source reggerà dieci anni nello studio: manutenzione, persone, sicurezza, licenza e uscita."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, valutazione, sicurezza, licenze, contratti]
---

Guardi cinque cose, in quest'ordine: se il progetto è mantenuto, quante persone lo mantengono davvero, cosa succede il giorno in cui qualcuno trova una falla di sicurezza, cosa dice esattamente la licenza e come si esce. Tutte e cinque si verificano da pagine pubbliche in un pomeriggio, e quattro hanno alle spalle uno standard pubblicato: la soglia non la fissa lei.

Che il codice sia pubblico non è la risposta. È ciò che le permette di fare le domande, e quasi nessuno le fa.

> **L'errore abituale è valutare il prodotto invece del progetto.** Ogni dimostrazione funziona bene. A decidere se fra sei anni avrà ancora un programma che apre le sue cartelle cliniche sono chi lo mantiene, con che ritmo, e cosa fa quando salta fuori un difetto.

## Le cinque verifiche, e dove si fanno

Nessuna richiede di parlare con un commerciale. Tutte si leggono dal repository pubblico del progetto e da due servizi gratuiti che valutano quello che vi trovano.

| Verifica | Cosa cerca | Segnale d'allarme |
|---|---|---|
| Manutenzione | ✓ Commit e versioni recenti e regolari | ✗ Mesi di silenzio e una versione di due anni fa |
| Persone | ✓ Più persone possono pubblicare | ✗ Una sola persona firma quasi tutto |
| Sicurezza | ✓ Un file `SECURITY.md` con un contatto | ✗ Nessun posto dove segnalare una falla |
| Licenza | ✓ Il nome compare nell'elenco OSI | ✗ "Licenza propria", senza testo pubblicato |
| Uscita | ✓ Export documentato e database standard | ✗ Formato proprietario e non documentato |

## 1. "Mantenuto" ha una definizione, e non è la sua

La OpenSSF pubblica Scorecard, uno strumento che analizza un repository e assegna a ogni aspetto un punteggio da 0 a 10. Il controllo *Maintained* è il più utile dei diciannove, perché trasforma un'impressione in una soglia.

Per il punteggio massimo chiede **almeno un commit a settimana nei 90 giorni precedenti**, e valuta soltanto progetti con più di 90 giorni di vita. Questa è l'asticella, ed è pubblicata.

Con questo soltanto può aprire qualsiasi repository e vedere da che parte cade:

- **La data dell'ultimo commit** le dice se qualcuno ha toccato il codice questo mese o l'anno scorso.
- **Il ritmo delle versioni** conta più del loro numero. Dodici versioni in un anno e niente da quattordici mesi è un progetto fermo, non un progetto stabile.
- **Le segnalazioni aperte senza risposta** sono il segnale più onesto di tutti. Un progetto sano non ha zero segnalazioni, ha segnalazioni a cui si risponde.

## 2. Quante persone lo reggono davvero

Un progetto con mille stelle e un solo autore è un progetto di una persona. La comunità CHAOSS, dentro la Linux Foundation, ha una metrica esattamente per questo.

Si chiama *Contributor Absence Factor*, prima nota come *Bus Factor*, e risponde a una domanda diretta: "Quanto è alto il rischio per un progetto se se ne vanno le persone più attive?" Si calcola come il numero più piccolo di contributori che insieme fanno il 50% dei contributi.

Se quel numero è uno, la risposta è che il rischio se lo prende lei.

> **Un fattore di assenza pari a uno non squalifica un progetto, ma cambia il contratto che le serve.** Se lo installa nello studio, le serve o un'azienda dietro che risponde, o un informatico di fiducia che quel codice lo ha già letto.

![Scheda paziente con gli avvisi clinici, il piano di cure attivo e la cronologia filtrabile per visite, trattamenti, incassi e comunicazioni](/screenshots/patient-timeline.png)

*Anni di cartelle cliniche dentro un programma. È questo che dipende dal fatto che il progetto sia ancora vivo fra sei anni.*

## 3. Cosa succede il giorno in cui qualcuno trova una falla

È la verifica che più persone saltano ed è la più veloce da fare. Cerchi nel repository un file `SECURITY.md`: è quello che cerca il controllo *Security-Policy* di Scorecard, e la sua assenza significa che chi trova una falla non ha dove segnalarla.

L'OpenSSF Best Practices Badge mette dei numeri su quello che viene dopo. Fra i suoi criteri di livello *passing*: il tempo di prima risposta del progetto a qualsiasi segnalazione di vulnerabilità ricevuta negli ultimi 6 mesi DEVE essere minore o uguale a 14 giorni. Chiede inoltre che le note di versione indichino ogni vulnerabilità nota corretta a cui fosse già stato assegnato un CVE.

Un progetto che espone quel distintivo si è impegnato per iscritto su questi punti. Uno che non lo espone magari li rispetta lo stesso, ma dovrà verificarlo lei nello storico delle versioni.

> **Non è più buona volontà, è diritto europeo.** Il Regolamento (UE) 2024/2847, il regolamento sulla ciberresilienza, è entrato in vigore il 10 dicembre 2024. Gli obblighi di segnalazione delle vulnerabilità attivamente sfruttate si applicano **dall'11 settembre 2026**, e il grosso del regolamento dall'11 dicembre 2027.

Quel regolamento non obbliga lei come studio: obbliga chi fabbrica o fornisce il prodotto. Crea però una figura che conviene conoscere, quella delle organizzazioni che sostengono in modo continuativo un software open source, che il testo inglese chiama *open-source software steward*. Il suo articolo 24 impone loro un punto di contatto unico per ricevere le segnalazioni di vulnerabilità e una politica di divulgazione coordinata.

Tradotto nella sua valutazione: da settembre 2026 un progetto europeo serio ha un indirizzo a cui segnalare una falla, perché glielo chiede la legge. Se non ce l'ha, ha imparato qualcosa su di lui. Questo non è un parere legale.

## 4. La licenza, in due minuti

La Open Source Initiative mantiene la definizione di riferimento, con dieci criteri numerati, e pubblica l'elenco delle licenze approvate su `opensource.org/licenses`.

La verifica è letterale: cerchi il nome esatto della licenza in quell'elenco. GPL, AGPL, Apache 2.0 e MIT ci sono. Le licenze di tipo *source available* no, il che non le rende cattive, le rende un'altra categoria.

Cosa decide la licenza e cosa non decide merita un articolo a sé, e lo trova in [software libero o proprietario in sanità](/it/blog/software-libero-sanita/). Per questa valutazione basta una regola: se il progetto non pubblica il testo della sua licenza, non ha finito di guardare, ha finito di valutarlo.

## 5. Come si esce

Un progetto open source da cui non riesce a uscire ha lo stesso problema di uno proprietario, con qualche passaggio in più.

1. **Trovi la documentazione di export** prima di installare qualsiasi cosa. Se esiste, è nel repository, non in una mail commerciale.
2. **Verifichi il motore del database.** PostgreSQL o MySQL significano che qualsiasi informatico competente può leggere i suoi dati senza chiedere il permesso a nessuno.
3. **Faccia una copia il primo giorno**, non il giorno in cui vuole andarsene. Un export che non ha mai provato non è un export.
4. **Legga cosa porta via la copia e cosa lascia.** Le radiografie e i documenti allegati di solito vivono fuori dal database, e di solito sono proprio quello che manca.

Il formato da pretendere è dettagliato in [esportare i suoi dati](/it/blog/esportare-dati-gestionale/).

## Dare un voto senza essere informatici

I due strumenti già citati sono pubblici e gratuiti, e si applicano entrambi al progetto di qualcun altro:

- **OpenSSF Scorecard** analizza il repository e restituisce diciannove controlli con punteggio da 0 a 10, fra cui *Maintained*, *Security-Policy*, *Code-Review*, *License* e *Vulnerabilities*, che incrocia il codice con il database OSV delle vulnerabilità note.
- **L'OpenSSF Best Practices Badge** è un'autovalutazione pubblica del progetto stesso, organizzata in sei blocchi: fondamenti, controllo delle modifiche, segnalazioni, qualità, sicurezza e analisi.

Entrambi misurano processo, che è esattamente ciò che una dimostrazione non mostra. Nessuno dei due misura se il programma va bene per uno studio odontoiatrico, e confondere le due cose porta a installare un progetto esemplare privo di odontogramma.

## Due settimane con dati veri, prima di decidere

Nessuna metrica sostituisce questo, ed è la voce più economica dell'elenco.

1. **Lo installi su una macchina che non sia quella di produzione.** Un portatile vecchio o un server da cinque euro al mese bastano per capire se il progetto si installa come dice la sua documentazione.
2. **Inserisca venti pazienti veri**, con i loro trattamenti e i loro preventivi. Venti schede vere insegnano più di duecento inventate.
3. **Faccia una giornata intera in parallelo.** Appuntamento, visita, nota clinica, preventivo, incasso. Se manca un passaggio del percorso, salta fuori qui.
4. **Apra una segnalazione con un dubbio reale** e conti i giorni fino alla risposta. È l'unico modo di provare il punto 3 senza aspettare un problema vero.
5. **Esporti tutto e cancelli.** Se l'uscita funziona con venti pazienti, funziona con duemila.

![Schermata iniziale con gli appuntamenti di oggi, chi è presente in studio, i pagamenti scaduti e la cronologia della giornata](/screenshots/home.png)

*La schermata in cui lo studio lavora ogni mattina. Due settimane di uso reale dicono su di essa quello che nessun punteggio le dirà.*

## Cosa nessuna di queste metriche le dice

Vale la pena sapere dove finisce questo metodo.

- **Se il progetto si adatta al suo modo di lavorare.** Solo la prova di due settimane risponde.
- **Se il codice è sicuro.** Codice pubblico vuol dire verificabile, non verificato. Sono due cose diverse e solo la seconda protegge qualcuno.
- **Chi risponde davanti al GDPR.** Resta lei, qualunque software usi.
- **Se ci sarà qualcuno da chiamare un venerdì pomeriggio.** Lo decide un contratto di assistenza, e ne esistono sia per il software libero sia per quello proprietario.

Dentalpin è uno dei progetti che si possono passare attraverso questo elenco: il codice è pubblico, la licenza è la BSL 1.1, che non figura nell'elenco OSI e va detto così, il database è PostgreSQL e i [prezzi](/it/prezzi/) sono pubblicati. Gli applichi le cinque verifiche prima di installarlo, come a qualsiasi altro.

## Fonti

- OpenSSF Scorecard, repository e documentazione dei controlli, `github.com/ossf/scorecard` e `docs/checks.md` (consultato il 31 agosto 2026).
- OpenSSF Best Practices Badge, criteri di livello *passing*, `bestpractices.dev/en/criteria/0` (consultato il 31 agosto 2026).
- CHAOSS, metrica *Contributor Absence Factor*, `chaoss.community` (consultato il 31 agosto 2026).
- Open Source Initiative, *The Open Source Definition* ed elenco delle licenze approvate, `opensource.org/osd` e `opensource.org/licenses` (consultato il 31 agosto 2026).
- Regolamento (UE) 2024/2847 (regolamento sulla ciberresilienza), testo su EUR-Lex e pagina ufficiale della Commissione europea sulla sua applicazione, `digital-strategy.ec.europa.eu` (consultato il 31 agosto 2026).
