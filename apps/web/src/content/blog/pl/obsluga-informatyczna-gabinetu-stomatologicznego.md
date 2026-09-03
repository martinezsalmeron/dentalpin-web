---
title: "Obsługa informatyczna gabinetu stomatologicznego: co ustalić na piśmie"
description: "Serwer gabinetu w rękach lokalnego informatyka: wymagana umowa powierzenia, kopie naprawdę odtworzone, klucze do systemu, czasy reakcji i zasady zakończenia współpracy."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [self-hosting, rodo, kopie-zapasowe, dostawcy, gabinet-stomatologiczny]
---

Jeśli twój gabinet trzyma program na własnym serwerze, a administruje nim informatyk z zewnątrz, cztery rzeczy muszą być na piśmie, zanim cokolwiek dotknie: umowa powierzenia przetwarzania danych, obowiązkowa od chwili, gdy ma dostęp do danych pacjentów; co dokładnie znaczy „robię kopie”, wraz z odtworzeniem testowym opatrzonym datą; kto ma dane administratora i gdzie leżą dane; oraz w ile godzin odpowiada w poniedziałek, kiedy kalendarz wizyt się nie otwiera. Reszta to szczegóły.

Nic z tego nie wymaga dwudziestostronicowej umowy. Mieści się na dwóch kartkach i w półgodzinnym spotkaniu, a to spotkanie kosztuje mniej niż pierwsza noc bez grafiku.

## Twój informatyk jest podmiotem przetwarzającym od pierwszego dnia

Gabinet jest administratorem danych swoich pacjentów. Osoba lub firma, która administruje serwerem z tymi danymi, jest podmiotem przetwarzającym, nawet jeśli nigdy nie otworzy dokumentacji medycznej i nawet jeśli od piętnastu lat naprawia wam drukarki.

UODO ujmuje to jednoznacznie: „przetwarzanie przez podmiot przetwarzający odbywa się na podstawie pisemnej umowy między administratorem i podmiotem przetwarzającym”. Formę potwierdza art. 28 ust. 9 RODO: umowa ma formę pisemną, w tym formę elektroniczną.

> **Ustna umowa z informatykiem, który obsługuje gabinet od lat, nie jest umową powierzenia.** Osobiste zaufanie nie zastępuje dokumentu, a przed Prezesem UODO odpowiada gabinet, nie on.

To nie jest biurokracja na wszelki wypadek. Umowa jest miejscem, w którym wreszcie zapisuje się, kto robi kopie, jak często aktualizowany jest serwer i co dzieje się w dniu, w którym kończycie współpracę. Czyli dokładnie te trzy punkty, których nikt nie pamięta z ustaleń wtedy, kiedy są potrzebne.

![Schemat instalacji na własnym serwerze: przeglądarka łączy się przez HTTPS z Caddy, który kieruje /api/* do backendu, a resztę do frontendu Nuxt; backend rozmawia z PostgreSQL](/diagrams/install-stack.svg)

*Jeden serwer, cztery procesy i baza danych. Każdy prostokąt na schemacie to coś, co ktoś musi utrzymywać.*

## Zapisy, które art. 28 układa za ciebie

Treść umowy nie zależy od inwencji stron. W przełożeniu na język gabinetu:

- **Udokumentowane polecenia.** Dostawca przetwarza dane wyłącznie tak, jak wskazuje gabinet, a polecenia istnieją na piśmie, choćby w mailu.
- **Poufność.** Każdy, kto ma dostęp do serwera, jest nią związany, łącznie z technikiem, który wpada we wtorek wymienić dysk.
- **Bezpieczeństwo.** Środki z art. 32 wymienione po kolei: szyfrowanie, kontrola dostępu, kopie, aktualizacje.
- **Dalsze powierzenie.** Jeśli maszyna stoi w cudzej serwerowni albo kopie trafiają do zewnętrznego dostawcy przestrzeni, to jest podpowierzenie i wymaga twojej zgody. Albo zatwierdzasz z góry imienną listę, albo umawiacie się, że o każdej zmianie informuje cię wcześniej na piśmie i możesz się sprzeciwić.
- **Pomoc przy prawach pacjentów.** Kiedy ktoś prosi o swoją dokumentację albo o jej usunięcie, dostawca musi umieć ją wyjąć z systemu.
- **Zwrot albo usunięcie na koniec.** Po zakończeniu usługi dane są zwracane lub niszczone, zależnie od twojego wyboru.
- **Audyty.** Udostępnia informacje niezbędne do wykazania zgodności i umożliwia kontrole.

Ten ostatni punkt UODO rozwija w sposób, który wiele gabinetów pomija: administrator „jest zobowiązany do stałej kontroli, czy podmiot przetwarzający przetwarza dane zgodnie z prawem”, a kontrole mogą być też doraźne. Obowiązek nie kończy się w dniu podpisania umowy. W jednej ze spraw Prezes UODO nałożył karę pieniężną właśnie dlatego, że administrator nie miał żadnych dokumentów potwierdzających weryfikację warunków współpracy.

## Co mówi się ustnie, a co powinno być zapisane

| Zobowiązanie | Jak zwykle się to ustala | Jak powinno brzmieć |
|---|---|---|
| Kopie zapasowe | ~ „Robię kopie co noc” | ✓ Częstotliwość, miejsce, szyfrowanie i kto dostaje powiadomienie o błędzie |
| Odtworzenie | ✗ Nigdy nie testowane | ✓ Jeden udokumentowany test rocznie, z datą i wynikiem |
| Aktualizacje | ~ „Kiedy wyjdzie coś ważnego” | ✓ Ustalone okno miesięczne i uprzedzenie przed dużymi wersjami |
| Czas reakcji | ✗ „Dzwoń, to zajrzę” | ✓ Godziny, kanał i czas odpowiedzi zależny od wagi zgłoszenia |
| Dostępy | ~ Jedno wspólne konto administratora | ✓ Konta imienne i odebranie dostępu w dniu odejścia |
| Koniec współpracy | ✗ Nieuregulowany | ✓ Zwrot albo usunięcie danych i przekazanie haseł |

Żadna pozycja z prawej kolumny nie kosztuje pieniędzy. Kosztuje jedną niewygodną, dwudziestominutową rozmowę.

## „Robię kopie co noc” jeszcze nic nie mówi

Art. 32 ust. 1 RODO nie żąda kopii zapasowych. Żąda dwóch trudniejszych rzeczy: zdolności do szybkiego przywrócenia dostępności danych osobowych i dostępu do nich w razie incydentu fizycznego lub technicznego, oraz regularnego testowania, mierzenia i oceniania skuteczności zastosowanych środków.

Czytane dosłownie znaczy to, że kopia, której nikt nigdy nie odtworzył, niczego nie dowodzi, bo przepis mierzy odtworzenie, a nie plik.

> **Kopii nie sprawdza się w dniu, w którym jest potrzebna.** Sprawdza się ją w zwykły wtorek, bez pośpiechu, odtwarzając na osobnej maszynie i weryfikując trzy liczby: ilu jest pacjentów, jaki jest ostatni rachunek i jaka była ostatnia zapisana wizyta.

Poproś, żeby ten test był produktem z datą, a nie obietnicą. Dwuwierszowy mail raz w roku o treści „odtworzono kopię z 14 maja na serwerze testowym, 3412 pacjentów, ostatni rachunek 2026/0871” jest wart więcej niż każdy zapis umowny.

## Dwie daty, które już są w kalendarzu, niezależnie od ciebie

Część utrzymania nie zależy od niczyjej opinii, bo ma opublikowaną datę.

1. **Duża wersja PostgreSQL.** Projekt daje każdej dużej wersji pięć lat wsparcia od premiery. PostgreSQL 14 dostaje ostatnią aktualizację 12 listopada 2026 roku, a 15 dnia 11 listopada 2027 roku. Jeśli twoja baza działa na jednej z nich, migracja ma już termin i powinna mieć budżet.
2. **Certyfikat.** Certyfikaty Let's Encrypt są ważne 90 dni, a odnawianie zalecane jest co 60 dni. Sam wystawca zaznacza, że nie da się zmienić tych okresów i że nie ma wyjątków. Działa dodatkowo opcjonalny program certyfikatów sześciodniowych, odnawianych co trzy dni. Wszystko jest zautomatyzowane do dnia, w którym ktoś zamknie port 80 i odnowienie po cichu przestanie działać.

Obie daty trafiają do umowy jako okno serwisowe, a nie jako przysługa. Do drugiej dopisuje się nazwisko: kto pilnuje, że odnowienie nadal się odbywa.

## Klucze należą do gabinetu, nawet jeśli używa ich on

To miejsce, w którym najwięcej gabinetów utyka, i rzadko przez złą wolę dostawcy. Po prostu nikt o tym nie rozmawiał.

- **Hasło administratora leży w menedżerze haseł gabinetu**, a nie tylko na laptopie informatyka.
- **Konta imienne, nigdy wspólne konto „admin”.** Jeśli trzy osoby korzystają z tego samego dostępu, rejestr dostępu jest bezużyteczny w dniu, w którym trzeba go przeczytać.
- **Domena i DNS zarejestrowane na gabinet.** Domena zarejestrowana przez dostawcę to przyszła negocjacja przebrana za wygodę.
- **Jedna kopia w miejscu, którego on nie kontroluje.** To nie jest nieufność: jeśli ransomware wejdzie przez jego stanowisko, jego kopie i twoje leżą po tej samej stronie.
- **Odebranie dostępu tego samego dnia.** Kiedy ktoś odchodzi od dostawcy albo z gabinetu, dostęp znika tego dnia, i umawiacie się na to wcześniej, żeby nie trzeba było prosić o to jak o przysługę.

![Ekran startowy z dzisiejszymi wizytami, informacją kto jest w gabinecie, zaległymi płatnościami i ostatnio przyjętymi pacjentami](/screenshots/home.png)

*To ekran, który musi być otwarty o wpół do dziewiątej. Wszystko, co ustalasz z informatykiem, istnieje po to, żeby się pojawił.*

## Czas reakcji, w godzinach i po polsku

Umowa serwisowa dla gabinetu z trzema fotelami nie potrzebuje korporacyjnego słownictwa. Potrzebuje trzech wierszy.

- **Gabinet nie może pracować.** Kalendarz wizyt się nie otwiera, serwer nie odpowiada. Ten wiersz ustala się z numerem telefonu, a nie adresem mailowym, i z liczbą godzin.
- **Działa, ale z utrudnieniami.** Drukarka, jedno stanowisko, niedziałająca integracja. Tego samego albo następnego dnia roboczego.
- **Pytanie albo usprawnienie.** Tydzień i to w zupełności wystarczy.

Dopisz dwa szczegóły, o których wszyscy zapominają: co dzieje się w wakacje i między świętami, oraz kto odpowiada, kiedy twój informatyk jest na zwolnieniu. Jednoosobowy dostawca jest dla małego gabinetu całkowicie w porządku, pod warunkiem że zastępstwo jest gdzieś zapisane.

## Zasady wyjścia podpisuje się na wejściu

Zmiana informatyka jest normalna i nie musi być dramatem. Staje się nim, kiedy nikt jej nie przewidział.

Art. 28 ust. 3 lit. g RODO daje ci prawo już teraz: po zakończeniu usługi dane są usuwane albo zwracane. Uszczegółów je, dopóki współpraca układa się dobrze.

1. **W jakim formacie przekazywana jest baza danych**, jako pełny zrzut, a nie częściowy eksport do arkusza.
2. **Które hasła i dostępy przechodzą**, i w ciągu ilu dni.
3. **Kto prowadzi przekazanie**, i ile godzin jest w cenie.
4. **Potwierdzenie usunięcia.** Usunięcie powinno objąć także kopie w systemach dostawcy, z pisemnym potwierdzeniem.

> **Żadnego z tych czterech punktów nie negocjuje się dobrze w dniu rozstania.** Negocjuje się je pierwszego dnia, kiedy obu stronom zależy, żeby współpraca zaczęła się czysto.

## Półgodzinne spotkanie

Jeśli chcesz zamknąć temat jutro, oto porządek spotkania:

1. Podpisać umowę powierzenia z punktami z art. 28 ust. 3.
2. Zapisać, gdzie trafiają kopie, jak często i kto dostaje powiadomienie o błędzie.
3. Wyznaczyć datę najbliższego odtworzenia testowego.
4. Zanotować, która wersja PostgreSQL działa dziś i kiedy kończy się jej wsparcie.
5. Wpisać hasło administratora do menedżera haseł gabinetu.
6. Zamienić konta wspólne na imienne.
7. Ustalić trzy poziomy czasu reakcji i zastępstwo na czas urlopu.
8. Spisać zasady zakończenia współpracy.

Nic z tej listy nie wymaga wiedzy informatycznej. Wymaga, żeby ktoś z gabinetu usiadł na pół godziny z osobą, która administruje serwerem.

## Gdzie w tym wszystkim jest Dentalpin

Dentalpin to program dla gabinetu stomatologicznego o otwartym kodzie, instalowany na własnym serwerze przez `docker compose`, więc te ustalenia dotyczą go dokładnie tak samo jak każdej innej instalacji na własnym sprzęcie: program nie pobiera opłat licencyjnych, a praca, która naprawdę kosztuje, to ta opisana powyżej. Co jest w zestawie, widać na [stronie cennika](/pl/cennik/), a szerszy obraz obowiązków przy własnym serwerze jest w tekście o [samodzielnym hostingu oprogramowania medycznego](/pl/blog/samodzielny-hosting-oprogramowania-medycznego/).

Ten artykuł jest ogólną wskazówką, a nie poradą prawną. Konkretną umowę dla swojego gabinetu skonsultuj z prawnikiem.

## Źródła

- UODO, [„Powierzenie przetwarzania danych trzeba udokumentować”](https://uodo.gov.pl/pl/138/2485), dostęp 3 września 2026 r.
- UODO, [„Czy administrator musi kontrolować podmiot przetwarzający?”](https://uodo.gov.pl/pl/676/4258), dostęp 3 września 2026 r.
- Rozporządzenie (UE) 2016/679 (RODO), art. 28 ust. 1, 3 i 9 oraz art. 32 ust. 1. Tekst urzędowy sprawdzony na [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) 3 września 2026 r.
- PostgreSQL Global Development Group, [„Versioning Policy”](https://www.postgresql.org/support/versioning/), dostęp 3 września 2026 r.
- Let's Encrypt, [„FAQ”](https://letsencrypt.org/docs/faq/), dostęp 3 września 2026 r.
