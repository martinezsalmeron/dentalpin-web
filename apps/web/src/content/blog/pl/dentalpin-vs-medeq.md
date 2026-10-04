---
title: "Dentalpin a MedEQ: paszport sprzętu, BDO i sterylizacja kontra otwarty kod"
description: "Porównanie MedEQ i Dentalpin: plany 199, 399 i 699 zł netto, paszport unitu, BDO i sterylizacja kontra otwarty kod, własny serwer i baza PostgreSQL."
pubDate: 2026-10-04
tags: [porownanie, medeq, program-stomatologiczny, oprogramowanie-stomatologiczne]
---

MedEQ prowadzi paszport techniczny autoklawu, rejestr cykli sterylizacji i ewidencję odpadów BDO w tym samym systemie, w którym leży karta pacjenta. To nie dodatek do programu stomatologicznego, to połowa jego oferty, i my nie mamy z tego ani jednego modułu.

Druga rzecz, którą trzeba powiedzieć od razu: MedEQ nie wystawia e-recept i nie rozlicza NFZ, i mówi to otwarcie na własnych stronach. To nie przeoczenie, to decyzja produktowa.

Robimy Dentalpin, więc nie jesteśmy bezstronni. Możemy natomiast być dokładni.

> **Skąd pochodzą tu informacje o MedEQ.** Wszystko, co niżej napisano o MedEQ, pochodzi ze stron publikowanych pod adresem medeq.pl, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci. Jest też osobna sekcja o tym, kiedy MedEQ jest lepszym wyborem niż my, i w tym porównaniu jest ona dłuższa niż zwykle.

## W trzydzieści sekund

**MedEQ** to polski system chmurowy, który do karty zęba, parodontogramu i planu leczenia dokłada całą operacyjną stronę gabinetu: paszport unitu, autoklawu i aparatu RTG z terminami przeglądów, dziennik cykli sterylizacji, ewidencję odpadów BDO spiętą z rządowym portalem przez API, dziennik dostępu RODO, kadry z listami płac i finanse z OCR faktur. Interfejs i wsparcie są po polsku, siedem dni w tygodniu.

**Dentalpin** to program stomatologiczny na otwartej licencji, który uruchamiasz na swoim serwerze. Ma odontogram, parodontogram, dokumentację, plany leczenia, kosztorysy, fakturowanie i pełne REST API, nie ma polskiego interfejsu, nie integruje się z żadnym polskim systemem centralnym i nie ma żadnego z modułów compliance wymienionych wyżej.

Pytanie, które o tym decyduje, jest jedno: czy szukasz programu do leczenia, czy programu, który przy kontroli sanepidu poda ci dokumenty, których nie masz w segregatorze. Jeśli to drugie, dalsza część tego tekstu niewiele zmieni.

![Karta pacjenta w Dentalpin z odontogramem, alertami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*Karta pacjenta w Dentalpin: odontogram, alerty kliniczne, aktywny plan i najbliższa wizyta na jednym ekranie.*

## Czym jest MedEQ

System chmurowy sprzedawany do sześciu branż medycznych z jednego rdzenia: stomatologia, fizjoterapia, kosmetologia, podologia, dietetyka i przychodnia. Rdzeń to sprzęt, BDO, RODO, kadry i finanse, a każda branża dostaje własne funkcje na wierzchu.

W wersji stomatologicznej funkcje dentystyczne są włączane tylko gabinetom oznaczonym jako stomatologiczne, i ich strona wylicza je konkretnie:

- **Karta zęba** w notacji FDI, z powierzchniami M/O/D/B/L, trybem uzębienia mlecznego dobieranym z wieku i kosztem leczenia per ząb.
- **Parodontogram** z głębokością kieszonki w 6 punktach na ząb (DB/B/MB/ML/L/DL), oznaczeniem krwawienia (BOP) i podsumowaniem: najgłębsza kieszonka, liczba punktów ≥4 mm i ≥6 mm, procent BOP, z historią pomiarów w czasie.
- **Plan leczenia z kosztorysem**, z pozycjami z własnego cennika gabinetu, sumą i zapisaną datą akceptacji pacjenta.
- **Zlecenia obrazowe** z typami stomatologicznymi (pantomogram/OPG, RVG, skrzydłówki, cefalometria, CBCT) oraz upload i podgląd zdjęcia przy karcie.
- **Recall** z interwałem per pacjent, przypomnieniem SMS i automatycznym przesunięciem terminu po kontakcie.
- **Ankiety przedwizytowe i zgody podpisywane na tablecie**, zapisywane przy karcie.

Operacyjna połowa oferty jest tym, o co w tym porównaniu naprawdę idzie:

- **Paszport techniczny sprzętu**: zakup, gwarancja, przeglądy, kalibracje i serwis każdego urządzenia, z kodem QR naklejanym na unit i alertem przed terminem.
- **Sterylizacja**: rejestr cykli autoklawu z parametrami, kontrola wsadu i wynik wskaźnika, powiązane z paszportem urządzenia.
- **BDO**: po jednorazowym podłączeniu kluczy API karta ewidencji (KEO) powstaje w rządowym systemie automatycznie przy zapisie odbioru, kartę przekazania (KPO) wystawiasz z jednego ekranu, a odbiorcę znajdujesz po NIP.
- **RODO**: niemodyfikowalny dziennik dostępu, który loguje także odczyty dokumentacji, szyfrowanie treści klinicznej i PESEL w spoczynku (AES-256, klucz per gabinet, z rotacją), RCPD z art. 30 i umowa powierzenia generowane z aplikacji.
- **Kadry i listy płac** z ZUS, umowami, urlopami, badaniami i szkoleniami BHP.
- **Finanse**: OCR faktur kosztowych (według ich FAQ realizowany przez Claude), raport końca dnia z OCR paragonu z terminala i rachunek wyniku gabinetu.

Jedna rzecz zasługuje na osobne zdanie, bo jest mocniejsza niż typowe zapewnienia o bezpieczeństwie. Zatwierdzony wpis kliniczny jest blokowany i pieczętowany sumą kontrolną SHA-256, poprawkę robi się nową wersją ze śladem autora i czasu, a dziennik audytu jest append-only wymuszony na poziomie bazy danych. Retencja pilnuje ustawowych 20 lat z art. 29.

Podmiot prowadzący jest opublikowany w stopce każdej strony: Bartosz Krzyżaniak, NIP 5542905852, REGON 382177395, ul. Sportowa 20, 88-420 Rogowo, czyli jednoosobowa działalność gospodarcza, a nie spółka. To fakt o skali dostawcy, nie ocena produktu, i wypada go zestawić z naszą własną skalą.

Czego na dziewiętnastu konsultowanych stronach nie ma wcale: **liczby gabinetów, liczby użytkowników, roku założenia ani żadnej innej informacji o wielkości wdrożeń**. Jest jedna podpisana opinia klientki, lekarz stomatolog z Bydgoszczy.

## Czym jest Dentalpin

Program do zarządzania gabinetem stomatologicznym wydawany na licencji open source (BSL 1.1). Uruchamiasz go na swoim serwerze przez `docker compose up` albo u dowolnego dostawcy hostingu, a pracujesz w przeglądarce.

Nie ma opłaty za użytkownika, za stanowisko, za fotel ani za lekarza. Odontogram, parodontogram z sześcioma pomiarami na ząb, dokumentacja, plany leczenia, kosztorysy, fakturowanie, RTG i zdjęcia oraz raporty są w tej samej instalacji. Każda funkcja wystawia endpoint, a specyfikacja OpenAPI generuje się automatycznie.

Baza to PostgreSQL i masz do niej pełny dostęp od pierwszego dnia. Jest natomiast znacznie młodszy, nie ma polskiego interfejsu, nie ma aplikacji mobilnej, portal pacjenta jest u nas oznaczony jako "wkrótce", KSeF nie jest podłączony, a paszportu sprzętu, rejestru sterylizacji, modułu BDO i kadr nie ma wcale.

![Parodontogram w Dentalpin z sześcioma pomiarami głębokości kieszonki na każdy ząb](/screenshots/periodontogram.png)

*Parodontogram z sześcioma punktami pomiarowymi na ząb, czyli ten sam zakres, który MedEQ opisuje na swojej stronie dla stomatologów.*

## Ile to realnie kosztuje

Cennik MedEQ jest krótki i opublikowany, pod adresem `medeq.pl/cennik`, który przekierowuje na sekcję na stronie głównej. Trzy plany, wszystkie moduły w każdym z nich, różnią się tylko liczbą lokalizacji i miejsc w zespole.

| Plan | Netto / mc | Lokalizacje | Miejsca w zespole |
|---|---|---|---|
| Start | 199 zł | 1 | 3, w tym 2 specjalistów |
| Pro | 399 zł | 2 | 10, w tym 3 specjalistów |
| Klinika | 699 zł | 3, każda kolejna +249 zł/mc | 25, w tym 8 specjalistów |

Wszystkie ceny są netto, z doliczanym 23% VAT, więc plan Start to 244,77 zł brutto, Pro 490,77 zł, a Klinika 859,77 zł miesięcznie. Przy płatności rocznej strona podaje rabat około 15%.

Ceny za dodatkowe miejsca są opublikowane równie konkretnie: dodatkowy użytkownik to 69 zł w planie Start, 59 zł w Pro i 49 zł w Klinice, a **dodatkowy specjalista kosztuje 99 zł netto miesięcznie w każdym planie**. Dwóch dentystów z recepcjonistką mieści się w planie Start dokładnie. Trzeci dentysta dokłada do rachunku co najmniej te 99 zł.

> **Czego cennik nie mówi.** Karta planu wymienia obie pozycje osobno, dodatkowego użytkownika i dodatkowego specjalistę, ale żadna z konsultowanych stron nie rozstrzyga, czy dodatkowy specjalista liczy się również jako dodatkowy użytkownik. Przy trzecim i czwartym lekarzu to różnica kilkudziesięciu złotych miesięcznie, więc warto zapytać przed podpisem.

Dodatki są dwa i oba mają jawne stawki. E-wizyty z wideokonsultacją i przedpłatą kosztują 99 zł netto miesięcznie przy planie Start, 149 zł przy Pro i 199 zł przy Klinice. SMS-y kupuje się jednorazowymi pulami bez terminu ważności: 200 sztuk za 49 zł, 500 za 99 zł i 1500 za 249 zł netto, czyli od 24,5 do 16,6 gr za wiadomość.

To, czego w cenie nie ma, jest w tym cenniku równie ważne jak to, co jest. Migracja z CSV, Excela, JSON-a i zrzutu bazy jest bezpłatna, dostosowania pod gabinet są w cenie planu, nie ma setup fee, a za AI OCR nie ma dopłat. Warunki cenowe są też zamrażane: "Konta założone przed zmianami cennika zachowują swoje dotychczasowe warunki bezterminowo".

Umowa jest na czas nieokreślony, wypowiadasz ją w ustawieniach konta ze skutkiem na koniec opłaconego okresu, nie ma okresu zobowiązania, a poza ustawowym prawem odstąpienia regulamin daje **każdemu** klientowi umowne 14 dni na odstąpienie od pierwszej płatności bez podania przyczyny, z pełnym zwrotem. To lepsze warunki wyjścia niż w większości tej stawki.

Dentalpin kosztuje 0 zł i nie ma w nim planów, limitów miejsc ani opłat za lekarza. Płacisz za serwer, na którym go postawisz, i za czas osoby, która go utrzyma, a te dwie pozycje są prawdziwym kosztem i nie udajemy, że ich nie ma. Nasz [cennik](/pl/cennik/) jest krótki z innego powodu niż ich.

## Czego MedEQ świadomie nie robi

To najważniejszy akapit w tym tekście, bo w polskim gabinecie decyduje częściej niż cena. MedEQ **nie wystawia e-recept, nie obsługuje e-skierowań, nie raportuje zdarzeń medycznych do P1 i nie rozlicza NFZ**, i nie jest to luka, którą odkryliśmy, tylko stanowisko powtórzone na stronie głównej, na stronie dla stomatologów, na stronie bezpieczeństwa i w trzech miejscach w FAQ.

Ich własne sformułowanie na stronie bezpieczeństwa jest jednoznaczne: "Nie jest systemem EDM ani integratorem e-zdrowia, e-recepty czy P1". Na stronie dla stomatologów to samo: "e-receptę wystawiasz w gabinet.gov/IKP, a MedEQ robi całą resztę". Zamiast wystawiania recept jest moduł żądań recept, w którym pacjent lub personel zgłasza prośbę, a lekarz ją obsługuje i wystawia receptę w P1.

Konsekwencja jest prosta i oni sami ją opisują. Gabinet prywatny solo może mieć MedEQ jako jedyny system i wystawiać e-recepty obok, w darmowym portalu rządowym. Gabinet z kontraktem NFZ potrzebuje swojego dotychczasowego programu EDM i dokłada MedEQ obok niego, czyli płaci za dwa systemy.

> **Dla nas to nie jest pozycja do punktowania.** Dentalpin też nie integruje się z P1, e-receptą, e-skierowaniem ani NFZ, i w tym wierszu tabeli oba produkty mają czerwony znacznik. Różnica jest w tym, że oni zbudowali wokół tej decyzji spójną ofertę, a my po prostu jeszcze tam nie dotarliśmy.

## Trzy rzeczy, które MedEQ publikuje dwa razy i różnie

Każda z nich pochodzi z dwóch ich własnych stron i żadna nie jest zarzutem o złą wolę. Są to rozjazdy między stroną marketingową a dokumentem, i lepiej zapytać o nie przed podpisem niż po.

1. **Lokalizacja serwerów, podana na trzy sposoby.** Nagłówek na każdej podstronie mówi "Polski hosting (UE)", a blok zaufania "Serwery w polskim data center". FAQ na stronie głównej mówi "Serwery w UE (Niemcy/Polska, zależnie od regionu)". Strona bezpieczeństwa i lista subprocesorów mówią "UE (Polska / Francja)" i wskazują OVHcloud. Wszystkie trzy wersje mieszczą się w UE, więc zgodność z RODO to nie podważa, ale "polskie data center" i "Niemcy/Polska" i "Polska/Francja" to trzy różne odpowiedzi na to samo pytanie.
2. **KSeF: "gotowe" czy "jako moduł".** Blok zaufania na stronie głównej mówi "BDO i KSeF gotowe" oraz "Rejestr odpadów medycznych i e-faktury wbudowane". FAQ na stronie o KSeF mówi: "integrację KSeF prowadzimy jako moduł. Napisz, jeśli to dla Ciebie kluczowe, pokażemy status i dopniemy pod Twój sposób fakturowania". To nie jest to samo, a różnica jest istotna dla gabinetu, który wszedł w KSeF w 2026 roku. W tym samym FAQ przyznają też, że **wystawianie faktur sprzedażowych** realizują "na życzenie, w cenie planu Pro/Klinika", czyli dziś obsługiwany jest import faktur kosztowych.
3. **ZnanyLekarz: integracja czy import CSV.** Karta planu Pro wymienia "Integracje: ZnanyLekarz, Google Calendar". FAQ mówi: "Mamy import wizyt z plików CSV eksportowanych ze ZnanyLekarz. Bezpośrednia integracja API zależy od dostępu, jaki ci dostawcy udostępniają partnerom".

Do tego jeden rozjazd czysto umowny, wart uwagi przy wyjściu z systemu. EULA mówi o "30-dniowym oknie na eksport danych" po wygaśnięciu licencji, a umowa powierzenia w §8 mówi: "Po wypowiedzeniu lub rozwiązaniu Umowy Przyjmujący umożliwia Powierzającemu pobranie danych z Serwisu przez okres 15 dni". Przy dokumentacji medycznej, którą ustawa każe trzymać 20 lat, to różnica warta jednego pytania na piśmie.

## MedEQ i Dentalpin obok siebie

| | MedEQ | Dentalpin |
|---|---|---|
| Model | Licencja komercyjna, SaaS | Open source (BSL 1.1) |
| Wdrożenie | ✗ Tylko chmura dostawcy | ✓ Twój serwer lub dowolny hosting |
| Opublikowany cennik | ✓ 199, 399 i 699 zł netto/mc | ✓ 0 zł, wszystko w środku |
| Opłata za kolejnego lekarza | ✗ +99 zł netto/mc | ✓ Brak |
| Polski interfejs | ✓ Tak | ✗ Nie |
| Wsparcie po polsku | ✓ 7 dni w tygodniu | ✗ Tylko GitHub |
| Odontogram | ✓ FDI, powierzchnie M/O/D/B/L | ✓ Tak |
| Parodontogram | ✓ 6 punktów na ząb, BOP, historia | ✓ 6 punktów na ząb |
| Plan leczenia i kosztorys | ✓ Tak | ✓ Tak |
| e-recepta, e-skierowanie, P1, NFZ | ✗ Świadomie nie | ✗ Nie |
| Paszport sprzętu z QR | ✓ Tak | ✗ Nie ma |
| Rejestr cykli sterylizacji | ✓ Tak | ✗ Nie ma |
| Odpady BDO (KEO i KPO przez API) | ✓ Tak | ✗ Nie ma |
| Kadry i listy płac z ZUS | ✓ Tak | ✗ Nie ma |
| KSeF | ~ Jako moduł na życzenie | ✗ Nie podłączony |
| Dziennik dostępu do kart | ✓ Append-only, loguje odczyty | ✗ Nie ma |
| Szyfrowanie treści klinicznej | ✓ AES-256, klucz per gabinet | ~ Zależy od twojej instalacji |
| Lokalizacja danych | ~ UE, podana trzy razy różnie | ✓ Tam, gdzie postawisz serwer |
| Dostęp do bazy danych | ✗ Eksport, bez dostępu do bazy | ✓ PostgreSQL od pierwszego dnia |
| Eksport danych | ✓ ZIP z JSON, jednym kliknięciem | ✓ Pełna baza |
| REST API | ~ W planie Pro, bez publicznej dokumentacji | ✓ Pełne, z OpenAPI |
| ISO/IEC 27001 | ~ Ramy normy, bez certyfikatu | ✗ Brak |
| Zewnętrzne testy penetracyjne | ~ Oznaczone jako planowane | ✗ Brak |
| Okres próbny | ✓ 30 dni bez karty | ✓ Demo i instalacja własna |
| Migracja | ✓ W cenie planu, robi ją dostawca | ~ Modułem, robisz sam |
| Kod źródłowy | ✗ EULA zabrania dekompilacji | ✓ Publiczny |

## Wybierz MedEQ, jeśli

- **Boisz się kontroli sanepidu bardziej niż rachunku za oprogramowanie.** Paszport autoklawu z terminami, dziennik cykli sterylizacji i ewidencja BDO w jednym miejscu to dokładnie to, o co pyta inspektor, i my nie mamy z tego nic.
- **Prowadzisz BDO i nie chcesz logować się do rządowego portalu.** Automatyczne tworzenie karty KEO przez API przy każdym odbiorze odpadów jest realną integracją, nie obietnicą, a 15 marca przestaje być datą, przed którą odtwarza się historię z faktur.
- **Potrzebujesz dowodu, kto widział kartę pacjentki.** Niemodyfikowalny dziennik logujący również odczyty i pieczętowanie wpisów sumą SHA-256 to lepsza odpowiedź na skargę do PUODO niż segregator z politykami.
- **Chcesz, żeby ktoś przeniósł twoje dane za ciebie.** Migracja z CSV, Excela, JSON-a i zrzutu bazy jest w cenie każdego planu, a oni twierdzą, że największą dotychczasową zamknęli w jeden dzień roboczy.
- **Prowadzisz kadry gabinetu w Excelu.** Umowy, urlopy, szkolenia BHP i listy płac z ZUS w tym samym systemie, w którym leży karta pacjenta, to moduł, którego u nas nie ma wcale.
- **Chcesz mieć wsparcie po polsku w sobotę.** Mają je deklarowane siedem dni w tygodniu. My mamy dyskusje na GitHubie, po angielsku.
- **Potrzebujesz, żeby ktoś dopisał ci moduł.** Dostosowania są w cenie planu, a większe rzeczy ustalają zakresem i terminem. U nas odpowiednikiem jest "masz kod, dopisz sam", co dla większości gabinetów nie jest odpowiedzią.
- **Nie masz nikogo technicznego i nie chcesz mieć.** Dentalpin trzeba postawić na serwerze, zaktualizować i robić mu kopie. Tu wystarczy rejestracja i 30 dni na test bez karty.

## Wybierz Dentalpin, jeśli

- **Chcesz mieć dostęp do bazy, nie do eksportu.** Ich eksport jest dobry, jednym kliknięciem, ZIP z JSON-ami i załącznikami, i uczciwie napisali "bez vendor lock-in". To jednak nadal eksport. PostgreSQL stoi u ciebie i pytasz go o cokolwiek, kiedy chcesz.
- **Rachunek nie ma rosnąć razem z gabinetem.** Każdy lekarz powyżej limitu planu to u nich co najmniej 99 zł netto miesięcznie więcej, a u nas zero, bo ceny nie ma. Przy pięciu lekarzach i dwóch lokalizacjach różnica robi się realna.
- **Chcesz wiedzieć, gdzie leżą dane pacjentów, bez czytania trzech stron.** Leżą tam, gdzie postawisz serwer. Nie trzeba zestawiać nagłówka z FAQ i z listą subprocesorów, żeby to ustalić.
- **Zależy ci na tym, żeby kod dokumentacji medycznej dał się przeczytać.** Ich EULA zabrania dekompilacji i odtwarzania kodu, co jest normalne w komercyjnym SaaS i jest dokładnie tym, czego nie chcesz, jeśli to dla ciebie warunek.
- **Potrzebujesz API bez planu i bez rozmowy.** U nich Webhook i REST API są od planu Pro i nie znaleźliśmy publicznej dokumentacji. U nas każda funkcja wystawia endpoint, a OpenAPI generuje się samo.
- **Dokumentację chcesz trzymać dłużej niż subskrypcję.** Ich regulamin przewiduje 15 dni karencji, potem zawieszenie, potem trwałe usunięcie konta i danych, a okno na pobranie danych po rozwiązaniu umowy wynosi 15 albo 30 dni, zależnie od dokumentu. U ciebie na serwerze nie wygasa nic.

![Plan leczenia w Dentalpin rozbity na etapy z kosztem każdego etapu](/screenshots/treatment-plan.png)

*Plan leczenia rozbity na etapy, z kosztem każdego etapu osobno.*

## Jak wyglądałaby migracja

MedEQ publikuje eksport pełnych danych jednym kliknięciem, jako ZIP z plikami JSON (pacjenci, wizyty, notatki, faktury, sprzęt) plus załączniki. To najlepszy punkt startowy, jaki można mieć, i warto to powiedzieć wprost: z tego vendora wychodzi się łatwiej niż z większości.

1. **Pobierz eksport ze swojego konta**, zanim wypowiesz subskrypcję, i zrób to w trakcie opłaconego okresu. Po rozwiązaniu umowy okno na pobranie danych wynosi 15 dni według umowy powierzenia i 30 dni według EULA, więc nie opieraj planu na dłuższym z tych terminów.
2. **Postaw Dentalpin** przez `docker compose up` albo u dostawcy hostingu i zaimportuj pliki modułem `migration_import`. System waliduje je przed zapisaniem czegokolwiek.
3. **Zobacz podgląd** z liczbami i przykładowymi wierszami. Nic jeszcze nie zostało zapisane.
4. **Przejrzyj mapowanie cennika zabiegów** z ich kategorii na twój katalog i zdecyduj pozycja po pozycji. Odontogram i parodontogram mają po obu stronach ten sam zakres pomiarowy, więc tu rozjazdów być nie powinno, ale cennik jest twoją własną konfiguracją i przenosi się najgorzej.
5. **Ustal, co robisz ze sprzętem, sterylizacją, BDO i kadrami.** Tych czterech modułów u nas nie ma, więc ta część dokumentacji musi gdzieś wylądować, i odpowiedź "wrócę do Excela" jest odpowiedzią, tylko trzeba ją podjąć świadomie, a nie odkryć miesiąc później.
6. **Uruchom import**, a potem sprawdź ręcznie dwa najbliższe tygodnie kalendarza, zanim wyłączysz stary system.

Krok piąty jest w tej migracji tym, na którym rachunek może się nie zgodzić. Oszczędzasz abonament i tracisz cztery rejestry, które przy kontroli trzeba okazać.

## Uczciwie na koniec

MedEQ jest najlepiej dopasowanym do polskich przepisów produktem, jaki opisaliśmy w tej serii, i trzeba to powiedzieć bez owijania. Dla prywatnego gabinetu stomatologicznego bez kontraktu NFZ, który chce jednego systemu na kartę pacjenta, autoklaw, odpady, RODO i kadry, MedEQ pasuje dziś lepiej niż my, i 199 zł netto miesięcznie za komplet modułów jest ceną, której nie podważymy argumentem o otwartym kodzie.

Mają też rzadką cechę, którą warto nagrodzić uwagą: ich centrum zaufania samo przyznaje, że pracują według ram ISO/IEC 27001:2022, **ale certyfikatu akredytowanej jednostki nie mają**, a regularne zewnętrzne testy penetracyjne oznaczają jako planowane. Dostawca, który publikuje własną samoocenę z trzema statusami "częściowe" i dwoma "planowane", mówi prawdę w miejscu, w którym mógłby tego nie robić.

Co nie znaczy, że nie ma o co pytać. Żadna z dziewiętnastu konsultowanych stron nie podaje liczby wdrożeń, roku założenia ani żadnej miary skali, dostawcą jest jednoosobowa działalność gospodarcza, a **nigdzie nie ma opublikowanego wskaźnika dostępności ani SLA**: słowo SLA pada dokładnie raz, na karcie planu Klinika, a §11 regulaminu to klasyczne "dołoży wszelkich starań" z odpowiedzialnością ograniczoną do opłat z jednego miesiąca. Do tego trzy rozjazdy z sekcji wyżej. To są pytania na rozmowę przed podpisem, nie powody do odrzucenia.

Dentalpin jest zakładem w inną stronę: że kod trzymający dokumentację medyczną powinien dać się przeczytać, że baza ma stać tam, gdzie zdecydujesz, i że rachunek nie powinien rosnąć z każdym kolejnym lekarzem. Za to płaci się brakiem polskiego interfejsu, brakiem polskiego wsparcia i brakiem czterech modułów compliance, które w polskim gabinecie są obowiązkiem, a nie wygodą. W tabeli wyżej widać to gołym okiem i nie próbowaliśmy tego ukryć.

Możesz [sprawdzić demo](https://demo.dentalpin.com) bez instalowania czegokolwiek albo [postawić go na swoim serwerze w trzy minuty](/pl/blog/instalacja-dentalpin-w-trzy-minuty/) i ocenić sam. Jeśli po przeczytaniu tego tekstu wybierzesz MedEQ, uznamy, że porównanie zadziałało.

## Źródła

Wszystkie konsultowane 4 października 2026 roku:

- [Strona główna · MedEQ](https://medeq.pl/): cennik Start 199 zł, Pro 399 zł, Klinika 699 zł netto miesięcznie, "Wszystkie ceny netto (do ceny doliczamy 23% VAT)", rabat roczny 15%, dodatkowy użytkownik 69/59/49 zł i dodatkowy specjalista 99 zł netto/mc, limity lokalizacji i miejsc, kolejna lokalizacja +249 zł/mc, e-wizyty 99/149/199 zł netto/mc, pule SMS 200 za 49 zł, 500 za 99 zł i 1500 za 249 zł netto, "26 modułów w każdym planie", "30 dni gratis bez karty", "14 dni gwarancji zwrotu", "Bez okresu zobowiązania", płatności przez Przelewy24, tabela "Czego Twój EDM nie obejmuje" z przypisem "Zakres na podstawie publicznie dostępnych informacji (czerwiec 2026)", zdanie "NFZ, e-recepta i obrazowanie (RTG/DICOM) zostają po stronie Twojego EDM-a i systemu e-Zdrowie (P1) - świadomie ich nie dublujemy", migracja z CSV/Excel/JSON/zrzutu bazy w cenie planu i eksport bezpośrednio z Estomed, Proassist i KS-SOMED, "Największą migrację, jaką dotąd wykonaliśmy, zamknęliśmy w jeden dzień roboczy", Webhook i REST API w planie Pro, FAQ "Serwery w UE (Niemcy/Polska, zależnie od regionu)", FAQ o eksporcie "ZIP z plikami JSON (pacjenci, wizyty, notatki, faktury, sprzęt) plus załączniki", FAQ o PWA i braku pełnej pracy offline, FAQ "Konta założone przed zmianami cennika zachowują swoje dotychczasowe warunki bezterminowo", FAQ o ZnanyLekarz ("import wizyt z plików CSV"), FAQ o fakturach sprzedażowych "na życzenie, w cenie planu Pro/Klinika", 2FA z Google Authenticator, opinia Weroniki Gerczew z Bydgoszczy, stopka "© 2026 Bartosz Krzyżaniak. NIP: 5542905852 · REGON: 382177395", ul. Sportowa 20, 88-420 Rogowo, kontakt@medeq.pl, +48 790 332 667. Adres `medeq.pl/cennik` przekierowuje (HTTP 200 po jednym przekierowaniu) na `medeq.pl/#cennik`.
- [System dla gabinetu stomatologicznego · MedEQ](https://medeq.pl/dla/stomatologa): karta zęba w notacji FDI z powierzchniami M/O/D/B/L i trybem uzębienia mlecznego, parodontogram z 6 punktami (DB/B/MB/ML/L/DL), BOP, podsumowaniem "max kieszonka, punkty ≥4/≥6mm, % BOP" i historią pomiarów, plan leczenia z kosztorysem i zapisaną datą akceptacji, własny cennik zabiegów, recall z interwałem per pacjent, typy RTG (pantomogram/OPG, RVG, skrzydłówki, cefalometria, CBCT) z uploadem i podglądem, ankiety przedwizytowe, zgody podpisywane na tablecie, "E-recept nie wystawiamy i NFZ nie rozliczamy", "MedEQ to nie EDM - i celowo", moduł żądań recept, pieczętowanie zatwierdzonego wpisu sumą kontrolną SHA-256, dziennik audytu append-only wymuszony na poziomie bazy, AES-256 z osobnym kluczem per gabinet i rotacją, retencja 20 lat z art. 29, RCPD i DPA generowane z aplikacji, tabela "Co obejmuje MedEQ, a co system EDM", FAQ o URPL, o jednym fotelu ("plan Start (199 zł) obejmuje wszystkie moduły"), o powierzchniach, o parodontogramie i o e-receptach.
- [Bezpieczeństwo i RODO · MedEQ](https://medeq.pl/bezpieczenstwo): AES-256 w spoczynku i TLS 1.2+ w transmisji, klucz osobny dla każdej placówki, "Serwery i kopie zapasowe znajdują się w UE (OVHcloud, Polska i Francja)", 2FA i RBAC, dziennik audytu, notyfikacja naruszenia do 24 godzin, "Eksport pełnych danych jednym kliknięciem. Brak vendor lock-in", sekcja "Czym MedEQ nie jest (uczciwie)" ze zdaniem "Nie jest systemem EDM ani integratorem e-zdrowia, e-recepty czy P1", tabela subprocesorów, zastrzeżenie "Nie stanowi porady prawnej".
- [Centrum zaufania · MedEQ](https://medeq.pl/zaufanie): "MedEQ buduje i działa w oparciu o ramy normy ISO/IEC 27001:2022, ale nie posiada jeszcze certyfikatu wydanego przez akredytowaną jednostkę zewnętrzną. Poniższe statusy to nasza samoocena"; statusy "Częściowe" dla formalnej analizy ryzyka (SoA), szkoleń świadomości i monitoringu dostępności; "Planowane" dla certyfikacji przez jednostkę akredytowaną i dla regularnych zewnętrznych testów penetracyjnych.
- [Regulamin · MedEQ](https://medeq.pl/regulamin): okres próbny 30 dni, opłaty z góry za okres rozliczeniowy, karencja 15 dni przy braku płatności, potem zawieszenie i trwałe usunięcie konta i danych po kolejnych 15 dniach, umowa na czas nieokreślony, wypowiedzenie przez klienta skuteczne z końcem opłaconego okresu, wypowiedzenie przez dostawcę z 14-dniowym okresem, §11 "dołoży wszelkich starań" bez wskaźnika dostępności, odpowiedzialność ograniczona "do wysokości opłat uiszczonych (...) w ciągu 1 miesiąca poprzedzającego zdarzenie szkodzące", §12a umowne prawo odstąpienia 14 dni od pierwszej płatności dla każdego klienta, bez podania przyczyny, ze zwrotem w 14 dni.
- [Umowa powierzenia (DPA) · MedEQ](https://medeq.pl/dpa): prawo kontroli u przyjmującego z co najmniej 30-dniowym uprzedzeniem, usunięcie uchybień do 30 dni, §8 "Po wypowiedzeniu lub rozwiązaniu Umowy Przyjmujący umożliwia Powierzającemu pobranie danych z Serwisu przez okres 15 dni", potem usunięcie konta i kopii, powiadomienie o zmianach DPA z 21-dniowym wyprzedzeniem, prawo polskie.
- [Lista subprocesorów · MedEQ](https://medeq.pl/dpa/subprocesorzy): obowiązuje od 10 maja 2026; OVHcloud (UE, Polska/Francja) jako infrastruktura i hosting bazy, home.pl (H88 S.A.) jako poczta wychodząca, PayPro S.A. (Przelewy24) jako płatności, SMSAPI (LINK Mobility Poland) jako SMS, Google Ireland/LLC (UE/USA, SCC) dla e-wizyt i kalendarza, Anthropic PBC (USA, SCC) dla OCR i strukturyzacji notatki, OpenAI L.L.C. (USA, SCC) dla transkrypcji; aktualizacja listy z co najmniej 30-dniowym wyprzedzeniem.
- [EULA · MedEQ](https://medeq.pl/eula): obowiązuje od 15 września 2026; licencja niewyłączna i nieprzenoszalna na okres opłaconego abonamentu, zakaz "kopiowania, modyfikowania, dekompilacji lub odtwarzania kodu źródłowego", prawo eksportu własnych danych w dowolnym momencie, aktualizacje instalowane automatycznie, §6 "30-dniowego okna na eksport danych" po wygaśnięciu licencji, dostarczanie "as-is".
- [KSeF i finanse · MedEQ](https://medeq.pl/funkcje/ksef): OCR faktur kosztowych, raport końca dnia z OCR paragonu z terminala, "Integrację z KSeF prowadzimy jako moduł dopasowany do Twojego sposobu fakturowania", FAQ "Czy MedEQ wystawia faktury w KSeF?" z odpowiedzią "a integrację KSeF prowadzimy jako moduł. Napisz, jeśli to dla Ciebie kluczowe", FAQ "Nie ma dopłat za AI OCR (uczciwy fair use) - jest w cenie planu", terminy KSeF 1 lutego i 1 kwietnia 2026 oraz limit 10 000 zł do 31 grudnia 2026.
- [BDO i odpady · MedEQ](https://medeq.pl/funkcje/bdo): karta KEO tworzona automatycznie w BDO przez API po jednorazowym podłączeniu kluczy i wybraniu EUP, KPO wystawiane z jednego ekranu z PDF dla kierowcy, odbiorca wyszukiwany po NIP, statusy synchronizacji, kody 18 01 03*, archiwum 5 lat, sekcja "Uczciwie: co robisz Ty, a co druga strona" ze wskazaniem, że wpis do rejestru i roczne sprawozdanie składa gabinet w portalu.
- [Sterylizacja · MedEQ](https://medeq.pl/funkcje/sterylizacja): rejestr cykli autoklawu z parametrami i wynikiem, kontrola wsadu powiązana z cyklem i urządzeniem, powiązanie materiału zakaźnego z ewidencją BDO, cyfrowy dziennik zastępujący papierową książkę sterylizacji, eksport i wydruk historii.
- [RODO i bezpieczeństwo · MedEQ](https://medeq.pl/funkcje/rodo): dziennik dostępu obejmujący odczyty dokumentacji, szyfrowanie PESEL i treści klinicznej (AES-256, klucz per organizacja, rotacja), RCPD z art. 30 i DPA generowane z aplikacji, eksport danych z art. 20, ewidencja naruszeń i 72 godziny na zgłoszenie do PUODO, dostęp per rola i per lekarz.
- [Paszport sprzętu · MedEQ](https://medeq.pl/funkcje/paszport-sprzetu) i [Kadry i płace · MedEQ](https://medeq.pl/funkcje/kadry): historia urządzenia (zakup, gwarancja, przeglądy, kalibracje, serwis) z kodem QR i alertami terminów; pracownicy, umowy, urlopy, badania, szkolenia BHP i listy płac z ZUS.
- [Porównania · MedEQ](https://medeq.pl/alternatywa): "Nie wystawiamy e-recept i nie rozliczamy NFZ, więc w większości gabinetów MedEQ pracuje obok dotychczasowego programu, a nie zamiast niego"; ich własne strony porównawcze z Estomed, Proassist, Prodentis, Mediporta, Dr100, Medfile, KS-SOMED i MEDchart.
- [Licencja Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) i [kod źródłowy](https://github.com/martinezsalmeron/dentalpin).

Mapa strony pod adresem `medeq.pl/sitemap.xml` zwraca HTTP 200 i wymienia 81 adresów; przegląd objął 19 z nich, wymienione wyżej, bez wpisów blogowych. Wszystkie wnioski o tym, czego na stronach nie ma (liczba wdrożeń, rok założenia, wskaźnik dostępności i SLA, publiczna dokumentacja API, aplikacja mobilna na Androida lub iOS), dotyczą tych stron. Na żadnej z nich nie pada nazwa Dentalpin.

Niniejszy tekst nie stanowi porady prawnej. Terminy i obowiązki w zakresie BDO, KSeF, RODO i dokumentacji medycznej warto potwierdzić u źródła albo z własnym doradcą.

Widzisz tu coś błędnego albo nieaktualnego? [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions), a poprawimy. Dotyczy to również osób z MedEQ.
