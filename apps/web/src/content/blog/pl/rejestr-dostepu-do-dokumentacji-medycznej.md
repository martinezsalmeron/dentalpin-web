---
title: "Rejestr dostępu do dokumentacji medycznej: co zapisywać i jak to sprawdzać"
description: "Jakie pola musi zapisywać rejestr dostępu do dokumentacji medycznej, jak długo go przechowywać i jak przeglądać go co miesiąc w dwadzieścia minut."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [dokumentacja-medyczna, bezpieczenstwo, rodo, uodo, gabinet-stomatologiczny]
---

Rejestr dostępu do dokumentacji medycznej musi zapisywać pięć rzeczy przy każdym otwarciu kartoteki: kto otworzył, kiedy, którego pacjenta, jaka to była czynność i skąd. Przechowuje się go od sześciu miesięcy do roku, zabezpiecza tak, żeby nikt nie mógł edytować własnych wpisów, i przegląda regularnie, bo rejestr, do którego nikt nie zagląda, niczego nie wykrywa. To cała konstrukcja, a reszta tekstu wyjaśnia, po co jest w niej każdy element.

To nie jest porada prawna. Wszystkie źródła urzędowe znajdziesz na końcu, sprawdzone 27 sierpnia 2026 r.

## Uprawnienie mówi, kto może wejść, rejestr mówi, kto wszedł

To dwie różne rzeczy, a gabinet, który ma pierwszą, zwykle sądzi, że ma obie. Uprawnienie to decyzja podjęta wcześniej: rejestracja nie otwiera dokumentacji medycznej. Rejestr to fakt zapisany później: we wtorek o 12:40 ta imiennie wskazana osoba otworzyła kartotekę tego pacjenta.

Tylko to drugie odpowiada na jakiekolwiek pytanie. Kiedy pacjent chce wiedzieć, kto zaglądał do jego dokumentacji, albo kiedy trzeba ocenić, czy naruszenie objęło dane o zdrowiu, lista uprawnień milczy w obu sprawach.

> **Ciekawość jest najczęstszą formą nieuprawnionego dostępu i żadne uprawnienia jej nie zatrzymują.** Personel kliniczny ma legalny dostęp do dokumentacji. Odróżnić trzeba dostęp, któremu odpowiada wizyta z tego dnia, od takiego, któremu nie odpowiada nic.

## Pięć pól w każdym wierszu

Francuski organ nadzorczy CNIL jest tu najbardziej konkretny: rejestrować należy "opérations de création, consultation, partage, modification et suppression", czyli utworzenie, wgląd, udostępnienie, zmianę i usunięcie, każde z identyfikatorem osoby, datą, godziną, rodzajem operacji i odniesieniem do danych, których dotyczyło.

Przełożone na gabinet stomatologiczny wygląda to tak.

| Pole | Co zapisuje | Niezbędne? |
|---|---|---|
| Kto | Imienne konto osoby | ✓ Tak |
| Kiedy | Data i godzina | ✓ Tak |
| Który pacjent | Identyfikator otwartej kartoteki | ✓ Tak |
| Jaka czynność | Wgląd, utworzenie, zmiana, eksport, usunięcie | ✓ Tak |
| Skąd | Adres IP lub stanowisko | ~ Przy dostępie zdalnym |
| Co się zmieniło | Wartość przed i po | ~ Przy zmianach |
| Dlaczego | Krótkie uzasadnienie dostępu | ✗ Tylko przy dostępie awaryjnym |

Pierwsze cztery nie podlegają negocjacji, bo usunięcie któregokolwiek sprawia, że wiersz przestaje na cokolwiek odpowiadać. Rejestr bez pacjenta mówi, że ktoś na coś spojrzał. Rejestr, który nie oddziela wglądu od usunięcia, wyrzuca dokładnie to rozróżnienie, które ma znaczenie.

Piąte pole zależy od tego, jak pracujecie. Jeśli program otwiera się tylko na stanowiskach w gabinecie, adres IP niewiele wnosi; jeśli jest dostęp z domu, to właśnie on odróżnia zwykły wgląd od wglądu o trzeciej w nocy.

![Kartoteka pacjenta w zakładce aktywności, z ostrzeżeniami klinicznymi, aktywnym planem leczenia i osią czasu filtrowaną według wizyt, zabiegów i kontaktów](/screenshots/patient-timeline.png)

*Zapisana aktywność dotycząca jednego pacjenta, zebrana na jednej osi czasu.*

## Polskie przepisy mówią o tym wprost

Rozporządzenie Ministra Zdrowia w sprawie rodzajów, zakresu i wzorów dokumentacji medycznej stawia wymagania systemowi teleinformatycznemu, a nie tylko personelowi. W paragrafie 1 ustęp 6 wymaga zapewnienia "identyfikacji osoby sporządzającej dokumentację oraz dokonującej wpisu lub innej zmiany i zakresu dokonanych zmian".

Zaraz obok stoi drugie wymaganie: "stały dostęp do dokumentacji dla osób uprawnionych oraz zabezpieczenie przed dostępem osób nieuprawnionych". I trzecie, o czasie: system musi rejestrować "czas sporządzenia dokumentacji oraz dokonania wpisu lub innej zmiany".

To razem jest opis historii zmian, a nie rejestru wglądów, i warto tę różnicę widzieć. Przepis wymaga, żeby dało się ustalić, kto co wpisał i kiedy oraz w jakim zakresie zmienił. Nie mówi wprost, że trzeba zapisywać samo otwarcie kartoteki bez zmiany.

> **Historia zmian i rejestr dostępu to nie to samo.** Pierwsza pokazuje, co stało się z treścią dokumentacji, drugi, kto ją w ogóle otworzył. Gabinet potrzebuje obu, a wiele programów dostarcza tylko pierwszą.

Obowiązek zapisywania samych wglądów wynika z RODO. Artykuł 5 ustęp 2 nakłada na administratora rozliczalność, czyli zdolność wykazania zgodności, a artykuł 32 wymaga odpowiednich środków technicznych zapewniających bezpieczeństwo przetwarzania. Wykazanie, kto miał wgląd w dane o zdrowiu, robi się rejestrem albo nie robi się wcale.

Warto też sprawdzić Kodeks postępowania dla sektora ochrony zdrowia, wydany na podstawie artykułu 40 RODO i opublikowany przez UODO, bo porządkuje te wymagania w język placówki, a nie ustawy.

## Jak długo przechowywać

Polskie przepisy nie podają liczby dla logów dostępu, więc punktem odniesienia są europejskie organy nadzorcze, które są zgodne.

CNIL zaleca przechowywanie zapisów "sur une période glissante comprise entre six mois et un an", w ruchomym oknie od sześciu miesięcy do roku, z wyjątkami przy obowiązku prawnym, sporze albo analizie incydentu.

Włoski Garante ustala minimum dla logów dostępu administratorów systemu: należy je przechowywać "per un congruo periodo, non inferiore a sei mesi", nigdy krócej niż sześć miesięcy.

Sześć miesięcy to zatem rozsądna podłoga. Poniżej tego skarga, która wpływa wiosną w sprawie zdarzenia z jesieni, nie ma już czego badać.

## Przegląd w dwadzieścia minut miesięcznie

Rejestr otwierany dopiero wtedy, gdy problem już wystąpił, przychodzi za późno. To okresowy przegląd zamienia go w wykrywanie, a mieści się on w krótkiej rutynie.

1. **Odfiltruj dostępy poza godzinami pracy.** Kartoteka otwarta w nocy, w niedzielę albo w święto wymaga wyjaśnienia, choć prawie zawsze jakieś jest.
2. **Zestaw dostępy z danego dnia z kalendarzem wizyt.** Jeśli ktoś otworzył pięć kartotek, a miał trzech pacjentów, dwie zostają do wyjaśnienia.
3. **Poszukaj pacjentów, których znają wszyscy.** Kartoteka krewnego kogoś z gabinetu, kolegi po fachu albo osoby znanej w mieście jest otwierana bez powodu najczęściej.
4. **Sprawdź konta osób, które już tu nie pracują.** Konto wyłączone nie powinno generować nowych wierszy, a jeśli generuje, problem jest poważny.
5. **Przejrzyj eksporty.** Pobranie bazy pacjentów to inna czynność niż jej przeglądanie i powinno być rzadkie.
6. **Zapisz datę przeglądu i to, co znalazłeś**, nawet jeśli odpowiedź brzmi "nic". Ta kartka jest dowodem, że kontrola istnieje.

Jedna granica, którą warto powiedzieć zespołowi na głos: CNIL zakazuje wykorzystywania danych z logów do celów niezwiązanych, takich jak kontrola czasu pracy. Logi służą bezpieczeństwu. Użycie ich do czegokolwiek innego niszczy zaufanie, dzięki któremu nikt nie chce ich wyłączyć.

![Ekran raportów gabinetu ze wskaźnikami za dany okres](/screenshots/reports.png)

*Comiesięczny przegląd działa najlepiej jako stała rutyna, obok pozostałych liczb miesiąca.*

## Trzy błędy, które pozbawiają rejestr wartości

**Konto wspólne.** Jeśli cztery osoby logują się jako "rejestracja", rejestr wiernie zapisuje, że to "rejestracja" otworzyła kartotekę, co nie identyfikuje nikogo. To błąd, który unieważnia całą resztę, i zarazem najczęstszy.

**Rejestr, który administrator może zmienić.** Jeśli właściciel gabinetu może poprawiać albo kasować wiersze, rejestr przestaje cokolwiek dowodzić wobec osób trzecich. CNIL ujmuje to jako obowiązek uniemożliwienia personelowi zmieniania zapisu własnej aktywności, a Garante wymaga logów o cechach "completezza, inalterabilità e possibilità di verifica della loro integrità", czyli kompletnych, niezmienialnych i z możliwością weryfikacji integralności.

**Konto usunięte.** Kiedy ktoś odchodzi i jego konto zostaje skasowane zamiast wyłączone, jego wiersze w rejestrze tracą właściciela. Wyłączenie zachowuje możliwość ustalenia, kto co zrobił, usunięcie ją niszczy.

## Pacjent może zapytać, trzeba umieć odpowiedzieć

Dwa kraje europejskie już to rozstrzygnęły i pokazują, dokąd zmierza wymóg.

Portugalia idzie najdalej. Artykuł 29 ustawy Lei 58/2019 stanowi, że "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais", czyli że osobę, której dane dotyczą, należy powiadomić o każdym dostępie do jej danych, i wymienia wśród środków elektroniczny rejestr dostępów oraz danych, do których uzyskano dostęp.

Włochy załatwiają to na wniosek. Wytyczne Garante w sprawie dossier sanitario pozwalają pacjentowi formalnie zażądać informacji o dostępach do własnej dokumentacji, ze wskazaniem jednostki, daty i godziny, a administrator ma na odpowiedź piętnaście dni.

W Polsce wniosek z artykułu 15 RODO wpłynie tak samo. Różnica między gabinetem, który odpowiada w dziesięć minut, a takim, który nie odpowie wcale, sprowadza się do jednego: czy w każdym wierszu rejestru jest identyfikator pacjenta.

## Co program może, a czego nie

Żaden rejestr nie zapobiegnie temu, że ktoś przeczyta monitor obok, i żaden nie zastąpi rozmowy o tym, że dokumentacji znajomego nie otwiera się z ciekawości. Sprawia natomiast, że tę rozmowę można prowadzić z faktami przed sobą, a nie z podejrzeniami.

W Dentalpin każde otwarcie kartoteki zapisuje się z kontem, datą i pacjentem, a konta wyłącza się bez kasowania tego, co zrobiły. Warunki wersji hostowanej i instalowanej na własnym serwerze znajdziesz w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie Ministra Zdrowia z dnia 6 kwietnia 2020 r. w sprawie rodzajów, zakresu i wzorów dokumentacji medycznej oraz sposobu jej przetwarzania, § 1 ust. 6 i § 10 pkt 3, tekst jednolity Dz.U. 2024 poz. 798. [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2024/798/text.html). Sprawdzone 27 sierpnia 2026 r.
- Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO), art. 5 ust. 2, art. 15 i art. 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Sprawdzone 27 sierpnia 2026 r.
- UODO, *Kodeks postępowania dla sektora ochrony zdrowia wydany zgodnie z art. 40 RODO*. [uodo.gov.pl](https://uodo.gov.pl/pl/file/4525). Sprawdzone 27 sierpnia 2026 r.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (aktualizacja 14 marca 2024 r.). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Sprawdzone 27 sierpnia 2026 r.
- Garante per la protezione dei dati personali, provvedimento z 27 listopada 2008 r. o administratorach systemu. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Sprawdzone 27 sierpnia 2026 r.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4 czerwca 2015 r. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Sprawdzone 27 sierpnia 2026 r.
- Lei n.º 58/2019 z 8 sierpnia, art. 29. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Sprawdzone 27 sierpnia 2026 r.

Okresy przechowywania i częstotliwość przeglądów zależą od sytuacji konkretnego gabinetu. Skonsultuj je ze swoim doradcą lub inspektorem ochrony danych.
