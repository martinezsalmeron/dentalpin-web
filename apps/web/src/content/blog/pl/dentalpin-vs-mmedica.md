---
title: "Dentalpin a mMedica: stomatologia jako płatny moduł kontra otwarty kod"
description: "Porównanie mMedica i Dentalpin: roczna licencja za stanowisko, moduł Stomatologia 394 zł netto i rozliczenia NFZ kontra otwarty kod na własnym serwerze."
pubDate: 2026-10-09
tags: [porownanie, mmedica, asseco, program-stomatologiczny, oprogramowanie-stomatologiczne]
---

Jeśli twój gabinet ma kontrakt z NFZ, to porównanie prawdopodobnie kończy się na jednym akapicie, i lepiej napisać to na początku niż na końcu. mMedica rozlicza świadczenia gwarantowane ze stomatologii, wystawia e-recepty i e-skierowania, a my nie robimy żadnej z tych trzech rzeczy.

Jest jednak druga połowa rynku, dla której dalsza część ma sens, i jest jeszcze jedna rzecz, która wyróżnia to porównanie. mMedica nie jest chmurą. Instalujesz ją u siebie, na swoim serwerze, na bezpłatnym PostgreSQL, i to jest dokładnie ten sam model wdrożenia co nasz.

Robimy Dentalpin, więc nie jesteśmy bezstronni. Możemy natomiast być dokładni.

> **Skąd pochodzą tu informacje o mMedica.** Wszystko, co niżej napisano o mMedica, pochodzi ze stron i dokumentów publikowanych przez Asseco pod adresem `mmedica.asseco.pl`, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci. Jest też osobna sekcja o tym, kiedy mMedica jest lepszym wyborem niż my, i w tym tekście jest ona krótsza niż lista powodów, ale cięższa.

## W trzydzieści sekund

**mMedica** to system dla przychodni i praktyk lekarskich, w którym stomatologia jest dopłacanym modułem, a nie produktem. Rdzeń obsługuje rejestrację, gabinet, e-recepty, e-skierowania, eZLA i sprawozdawczość do NFZ, a Moduł Stomatologiczny dokłada do tego diagram zębowy ze świadczeniami gwarantowanymi wstępnie zmapowanymi na rozliczenia. Licencja jest roczna i liczona za stanowisko.

**Dentalpin** to program stomatologiczny na otwartej licencji, który stawiasz na swoim serwerze i otwierasz w przeglądarce. Ma odontogram, parodontogram z sześcioma pomiarami na ząb, dokumentację, plany leczenia, kosztorysy, fakturowanie i pełne REST API, nie ma polskiego interfejsu i nie integruje się z żadnym polskim systemem centralnym.

Pytanie, które o tym decyduje, jest jedno: czy rozliczasz NFZ. Jeśli tak, mMedica robi rzecz, której u nas nie ma i której nie da się obejść sprytem. Jeśli nie, zaczyna się rozmowa o tym, za co właściwie płacisz rocznie.

![Karta pacjenta w Dentalpin z odontogramem, alertami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*Karta pacjenta w Dentalpin: odontogram, alerty kliniczne, aktywny plan i najbliższa wizyta na jednym ekranie.*

## Czym jest mMedica

Producentem jest Asseco Poland S.A., a sam produkt opisany jest na stronie o mMedica jako "Kompleksowe oprogramowanie dla przychodni i praktyk lekarskich". Stopka dodaje "Oprogramowanie dla przychodni i małych szpitali", co dobrze pokazuje skalę: to system dla placówki medycznej w ogóle, a nie dla gabinetu stomatologicznego w szczególności.

W rdzeniu, czyli w programie podstawowym, są między innymi kartoteka pacjentów, terminarz, rezerwacje, gabinet, wystawianie e-recept i e-skierowań, eZLA, raporty rozliczeniowe i eksport danych sprawozdawczych do NFZ. Program występuje w sześciu wersjach: PS, PS+, Standard, Standard+, Komercja i Komercja+. Przy dwóch ostatnich cennik stawia jednoznaczną adnotację: "Ta wersja nie obsługuje rozliczeń z NFZ".

Wokół rdzenia jest kilkadziesiąt modułów dodatkowych, zamawianych osobno, od Elektronicznej Dokumentacji Medycznej i eRejestracji przez Teleporadę, eArchiwum i bazę leków Pharmindex po system kolejkowy z wyświetlaczami. Stomatologia jest jednym z nich.

### Co dokładnie robi Moduł Stomatologiczny

Ich własny opis jest konkretny i warto go oddać wiernie, bo to najlepiej napisana część tej oferty. Sednem jest diagram zębowy, na którym "Wykonany zabieg wystarczy oznaczyć na diagramie odpowiednim symbolem graficznym, a dane rozliczeniowe zostaną automatycznie uzupełnione".

- **Stan wyjściowy uzębienia** można oznaczyć na diagramie przed rozpoczęciem leczenia, co ich strona uzasadnia wprost: zmniejsza ryzyko "błędnego sprawozdania usługi wykonanej na wcześniej usuniętym zębie".
- **Świadczenia NFZ są wstępnie zdefiniowane** z zakresu profilaktyki, protetyki, leczenia zachowawczego i endodoncji, a zakres "został określony (zdefiniowany) zgodnie z załącznikiem do Rozporządzenia Ministra Zdrowia w sprawie świadczeń gwarantowanych z zakresu leczenia stomatologicznego".
- **Automatyzacja rozliczeń** obejmuje "automatyczne uzupełnianie wszystkich danych łącznie z wyliczaniem krotności", czyli tę część pracy, którą w gabinecie z kontraktem robi się wieczorem.
- **Kontrola limitów** pilnuje częstotliwości świadczeń limitowanych: symbol wykonanego badania "po określonym czasie zostaje automatycznie wyłączony", co jest informacją, że kolejne można już rozliczyć.
- **Usługi nierefundowane i własne symbole** definiujesz sam, z materiałami i poziomem szczegółowości. Ich strona podaje jako przykłady piaskowanie oraz dodatkowe zakresy w rodzaju chirurgii czy ortodoncji, więc te dwa ostatnie nie są częścią wstępnej konfiguracji.
- **Dwa tryby pracy**: diagram jako element wizyty w funkcji Gabinetu albo samo wprowadzanie danych rozliczeniowych, "co pozwala znacznie uprościć i przyspieszyć przygotowanie sprawozdań dla NFZ".

Opublikowana instrukcja modułu trzyma notację FDI zatwierdzoną przez WHO i Komitet Techniczny ISO/TC 106, z kodami umiejscowienia dla ćwiartek i sekstantów, z uzębieniem mlecznym i z powierzchniami oznaczanymi literami D, M, B, P i O. Symbole można wiązać ze świadczeniami i procedurami ICD-9.

Jedna rzecz wymaga uczciwego zastrzeżenia, bo dotyczy czegoś, co my mamy, a oni raczej nie. W module istnieje widok "Periodontologia", ale jest on zdefiniowaną przez użytkownika warstwą diagramu, do której przypisuje się symbole, na przykład kiretażu. W całej opublikowanej instrukcji modułu nie pojawia się ani pomiar głębokości kieszonek, ani recesja, ani wskaźnik krwawienia, więc parodontogram w sensie pomiarowym jest u nich nieobecny na konsultowanych stronach i w tym dokumencie, a nie "pewnie gdzieś jest".

## Czym jest Dentalpin

Program do zarządzania gabinetem stomatologicznym wydawany na licencji open source (BSL 1.1). Stawiasz go przez `docker compose up` na swoim serwerze albo u dowolnego dostawcy hostingu, a pracujesz w przeglądarce, bez instalowania czegokolwiek na stanowiskach.

Nie ma opłaty za stanowisko, za użytkownika, za fotel ani za lekarza. Odontogram, parodontogram z sześcioma punktami pomiarowymi na ząb, dokumentacja, plany leczenia, kosztorysy, fakturowanie, zdjęcia i RTG oraz raporty są w tej samej instalacji, a każda funkcja wystawia endpoint z automatycznie generowaną specyfikacją OpenAPI.

Czego nie ma i co w polskim gabinecie boli najbardziej: polskiego interfejsu, polskiego wsparcia, e-recepty, e-skierowania, raportowania zdarzeń medycznych do P1, rozliczeń z NFZ i podłączonego KSeF. Jesteśmy też znacznie młodsi, bo od 2026 roku.

![Parodontogram w Dentalpin z sześcioma pomiarami głębokości kieszonki na każdy ząb](/screenshots/periodontogram.png)

*Parodontogram z sześcioma punktami pomiarowymi na ząb, czyli ten zakres, którego opublikowana instrukcja Modułu Stomatologicznego nie opisuje.*

## Ile to realnie kosztuje

Cennik mMedica jest opublikowany w całości, pozycja po pozycji, pod adresem `mmedica.asseco.pl/cennik-mmedica`, i w tej serii jest to rzadkość warta pochwały. Trzy zdania z jego legendy decydują o wszystkim, co niżej: "Podane ceny stanowią roczną opłatę abonamentową za licencje i aktualizacje", "Ceny netto w złotych polskich. Do cen należy doliczyć podatek VAT w wysokości 23%" oraz "Ceny obowiązują do 31.12.2026 r.".

Program podstawowy wycenia się za pierwsze stanowisko i za każde kolejne osobno.

| Wersja | Pierwsze stanowisko | Każde kolejne | Uwaga z cennika |
|---|---|---|---|
| mMedica PS | 375,00 zł | 242,00 zł | |
| mMedica PS+ | 515,00 zł | 336,00 zł | |
| mMedica Standard | 558,00 zł | 368,00 zł | |
| mMedica Standard+ | 698,00 zł | 462,00 zł | |
| mMedica Komercja | 461,00 zł | 298,00 zł | Nie obsługuje rozliczeń z NFZ |
| mMedica Komercja+ | 698,00 zł | 460,00 zł | Nie obsługuje rozliczeń z NFZ |

Do tego dochodzą dwa moduły, które gabinet stomatologiczny realnie potrzebuje. Moduł **Stomatologia** kosztuje 394,00 zł za pierwsze stanowisko i 240,00 zł za każde kolejne, i jest "Dostępny dla wersji mM PS+, mM Standard, mM Standard+, mM Komercja, mM Komercja+", czyli nie dla najtańszej wersji PS. Moduł **Elektroniczna Dokumentacja Medyczna** to 52,00 zł za każde stanowisko w wersjach Standard i Komercja albo 29,00 zł w wersjach z plusem, i tu jest pułapka konfiguracyjna: cennik nie wymienia PS ani PS+ wśród wersji, dla których ten moduł jest dostępny.

Policzmy to na trzech realnych gabinetach, netto, za rok.

| Gabinet | Program podstawowy | Stomatologia | EDM | Razem netto / rok |
|---|---|---|---|---|
| Solo, prywatny, 1 stanowisko (Komercja) | 461,00 zł | 394,00 zł | 52,00 zł | **907,00 zł** |
| Prywatny, 3 stanowiska (Komercja) | 1 057,00 zł | 874,00 zł | 156,00 zł | **2 087,00 zł** |
| Z kontraktem NFZ, 3 stanowiska (Standard) | 1 294,00 zł | 874,00 zł | 156,00 zł | **2 324,00 zł** |

Po doliczeniu 23% VAT to odpowiednio 1 115,61 zł, 2 567,01 zł i 2 858,52 zł za rok. Solowy gabinet prywatny płaci więc około 75 zł netto miesięcznie, a trzystanowiskowy z kontraktem około 194 zł netto, i trzeba to powiedzieć wprost: jak na system, który rozlicza NFZ i wystawia e-recepty, to jest tanio.

> **Czego cennik nie mówi, a co warto wyjaśnić przed zamówieniem.** Opłata jest roczna i obejmuje "licencje i aktualizacje", a licencje modułów "są udzielane na takie same okresy, jakie obowiązują dla programów podstawowych, do których są zamawiane". Na żadnej z konsultowanych stron nie znaleźliśmy natomiast informacji, co dzieje się z programem i z dostępem do dokumentacji, jeśli opłaty za kolejny rok nie wniesiesz. Przy dokumentacji, którą ustawa każe trzymać 20 lat, to jedno pytanie na piśmie.

Dentalpin kosztuje 0 zł i nie ma w nim stanowisk do policzenia. Płacisz za serwer i za czas osoby, która go utrzyma, i te dwie pozycje są prawdziwym kosztem, którego nie udajemy, że nie ma. Nasz [cennik](/pl/cennik/) jest krótki z innego powodu niż ich.

Ceny samej migracji nie publikuje żadna ze stron. Strona migracji opisuje pięć kroków ustalanych indywidualnie i promocję dla nowych klientów: dwunastomiesięczna licencja "w cenie odpowiadającej 9 miesiącom abonamentu, czyli z rabatem 25%", przy czym wdrożenie, szkolenia i wsparcie są z niej wyłączone. Konfigurator pod adresem `/konfigurator/` nie pokazuje kwot, tylko dobiera wersję i przekazuje zapytanie przedstawicielowi.

## To, czego nie przeskoczymy

Ta sekcja jest ważniejsza od cennika i trzeba ją napisać bez osłon.

Program podstawowy mMedica wystawia e-recepty i e-skierowania, obsługuje eZLA, eksportuje dane sprawozdawcze do NFZ i importuje potwierdzenia, a Moduł Stomatologiczny dokłada do tego gotowe mapowanie świadczeń gwarantowanych na rozliczenia i kontrolę limitów. Dla gabinetu z kontraktem to nie jest wygoda, to jest warunek wykonywania umowy.

Dentalpin nie robi z tego nic. Nie integruje się z P1, nie wystawia e-recept, nie rozlicza NFZ i nie ma podłączonego KSeF.

> **W tych wierszach tabeli nie ma czego punktować.** Gabinet z kontraktem NFZ, który wybierze Dentalpin, będzie potrzebował drugiego systemu obok, czyli zapłaci dwa razy i będzie prowadził dwie kartoteki. To nie jest scenariusz, który chcielibyśmy komukolwiek doradzić, i nie udajemy, że otwarty kod to równoważy.

Jest też różnica w tym, co każdy z tych produktów nazywa asystentem AI. Asystent mMedica odpowiada na pytania o obsługę programu, wyłącznie na podstawie ich dokumentacji, stron i FAQ, działa w wersji testowej i jest w czasie testów bezpłatny, a ich strona wprost zaznacza, że nie korzysta z danych pacjentów. Nasz asystent działa odwrotnie: wykonuje zadania na twoich danych, w granicach uprawnień zalogowanego użytkownika. To dwa różne narzędzia o tej samej nazwie i warto wiedzieć, które z nich się zamawia.

## Jedno porównanie, dwa razy ten sam model wdrożenia

W tej serii prawie każde porównanie ma ten sam szkielet: ich chmura przeciw twojemu serwerowi. Tutaj nie ma go wcale, i to jest najciekawsza rzecz w całym tym tekście.

mMedica instaluje się u ciebie. Wymagania sprzętowe mówią o stanowiskach z systemem "Windows z aktywnym wsparciem i aktualizacjami od Microsoft" i o serwerze na "Windows lub Windows Server z aktywnym wsparciem i aktualizacjami od Microsoft, Linux/UNIX", a dla mniejszych wdrożeń dopuszczają rozwiązanie, które zna każdy gabinet: "Przy instalacjach do 15 stanowisk jedna ze stacji roboczych może pełnić funkcję serwera". Silnikiem bazy jest, zgodnie z legendą cennika, "bezpłatny serwer bazy danych PostgreSQL", a opublikowana instrukcja migracji silnika dotyczy przejścia na PostgreSQL 17.

Czyli: oba produkty stoją na twoim sprzęcie, oba trzymają dane w PostgreSQL, oba wymagają kogoś, kto zrobi kopię zapasową. Nie możemy w tym porównaniu powiedzieć, że u nas dane są twoje, a u nich nie, bo byłoby to nieprawdą.

Różnice są trzy i wszystkie są realne. Ich stanowiska są aplikacją na Windows, a nasze przeglądarką na czymkolwiek. Ich licencja jest roczna i liczona za stanowisko, a nasza nie istnieje. I ich kodu nie przeczytasz, a nasz leży na GitHubie.

## mMedica i Dentalpin obok siebie

Tylko wiersze, które dają się sprawdzić. Gdzie danej nie ma na konsultowanych stronach, jest to napisane.

| | mMedica | Dentalpin |
|---|---|---|
| Model | Licencja komercyjna, roczna | Open source (BSL 1.1) |
| Wdrożenie | Własny serwer, stanowiska na Windows | Własny serwer, praca w przeglądarce |
| Silnik bazy danych | PostgreSQL | PostgreSQL |
| Opublikowany cennik | ✓ Pełny, pozycja po pozycji | ✓ 0 zł, wszystko w środku |
| Opłata za kolejne stanowisko | ✗ 298,00 do 462,00 zł za program plus 240,00 zł za moduł | ✓ Brak |
| Stomatologia | ~ Płatny moduł, 394,00 zł netto | ✓ Jest produktem |
| Rozliczenia NFZ | ✓ Świadczenia gwarantowane zmapowane | ✗ Nie ma |
| Kontrola limitów świadczeń | ✓ Tak | ✗ Nie ma |
| e-recepta i e-skierowanie | ✓ W programie podstawowym | ✗ Nie ma |
| EDM i P1 | ✓ Modułem, 29,00 do 52,00 zł netto | ✗ Nie ma |
| KSeF | Moduł "Jednolity Plik Kontrolny / KSeF", 21,00 zł netto | Nie podłączony |
| Polski interfejs | ✓ Tak | ✗ Nie |
| Wsparcie po polsku | ✓ Wsparcie techniczne, partnerzy, przedstawiciele | ✗ Tylko GitHub |
| Odontogram | ✓ Diagram FDI, powierzchnie D/M/B/P/O | ✓ Tak |
| Parodontogram pomiarowy | ✗ Brak na konsultowanych stronach | ✓ 6 punktów na ząb |
| Dostęp do bazy danych | ✓ PostgreSQL u ciebie | ✓ PostgreSQL u ciebie |
| Udokumentowane REST API | ✗ Brak publicznej dokumentacji | ✓ Pełne, z OpenAPI |
| Kod źródłowy | ✗ Zamknięty | ✓ Publiczny |
| Asystent AI | ~ O obsłudze programu, w testach | ✓ Działa na twoich danych |
| Liczba wdrożeń | ~ "Tysiące Klientów", bez liczby | ✗ Bardzo niewiele |
| Skala dostawcy | ✓ Asseco Poland S.A. | ✗ Projekt od 2026 |
| Migracja | ✓ Robi autoryzowany partner | ~ Modułem, robisz sam |

## Wybierz mMedica, jeśli

To nie jest sekcja z grzeczności. W polskim gabinecie stomatologicznym te powody wygrywają częściej niż wszystko, co możemy postawić obok.

- **Rozliczasz NFZ.** Świadczenia gwarantowane są u nich zmapowane zgodnie z załącznikiem do rozporządzenia, krotność wylicza się sama, a limity pilnuje program. U nas nie ma tego w ogóle i nie da się tego nadrobić konfiguracją.
- **Musisz wystawiać e-recepty i e-skierowania z jednego miejsca.** Są w programie podstawowym, razem z eZLA. To różnica między jednym systemem a dwoma.
- **Chcesz płacić mało i wiedzieć ile.** Solowy gabinet prywatny to 907 zł netto za rok z modułem stomatologicznym i EDM. Cennik jest opublikowany w całości, a to w tej branży wciąż wyjątek.
- **Potrzebujesz dostawcy o rozpoznawalnej skali.** Producentem jest Asseco Poland S.A., jest sieć autoryzowanych partnerów i przedstawicieli, infolinia, szkolenia i webinary. My mamy dyskusje na GitHubie, po angielsku.
- **Chcesz, żeby ktoś przeniósł dane za ciebie.** Migracją zajmuje się autoryzowany partner, który analizuje eksport z twojego obecnego systemu i ustala zakres indywidualnie.
- **Prowadzisz coś więcej niż stomatologię.** Jeśli w tym samym podmiocie jest POZ, medycyna pracy, rehabilitacja albo gabinet pielęgniarski, to wszystko są u nich moduły do tego samego rdzenia, a nie drugi system.
- **Twój zespół pracuje na Windows i tak ma zostać.** Aplikacja jest tam, gdzie oni już są, a jedno ze stanowisk może pełnić funkcję serwera przy wdrożeniach do 15 stanowisk.

## Wybierz Dentalpin, jeśli

- **Nie rozliczasz NFZ i nie zamierzasz.** Wtedy znika jedyny argument, którego nie da się podważyć, a zostaje rozmowa o licencji za stanowisko.
- **Rachunek nie ma rosnąć razem z gabinetem.** Czwarte stanowisko to u nich 240 zł netto rocznie za sam moduł stomatologiczny plus od 298 zł za program podstawowy, licząc po najtańszej wersji, która ten moduł obsługuje. U nas kolejne stanowisko to kolejna zakładka w przeglądarce.
- **Nie chcesz, żeby stomatologia była dopłatą.** U nich diagram zębowy jest modułem do systemu dla przychodni, u nas jest powodem, dla którego ten program istnieje. Widać to w tym, co każdy z nich ma w parodontologii.
- **Potrzebujesz parodontogramu z pomiarami.** Sześć punktów na ząb z historią pomiarów to u nas standard, a w ich opublikowanej instrukcji modułu nie ma ani pomiaru kieszonek, ani wskaźnika krwawienia.
- **Chcesz integrować bez rozmowy handlowej.** Każda funkcja wystawia endpoint, a OpenAPI generuje się samo. Publicznej dokumentacji API mMedica nie znaleźliśmy na żadnej z konsultowanych stron.
- **Zależy ci na tym, żeby kod dokumentacji medycznej dał się przeczytać.** Nasz jest na GitHubie. To jedyny wiersz tabeli, w którym porównanie jest zerojedynkowe.
- **Nie chcesz, żeby stanowiska były przywiązane do Windows.** Praca idzie w przeglądarce, więc sprzęt przy fotelu nie decyduje o wyborze programu.

![Lista faktur w Dentalpin ze statusami wystawiona, zapłacona, częściowo zapłacona, przeterminowana i szkic](/screenshots/invoices.png)

*Lista faktur z sumą pozostałą do zapłaty przy każdej pozycji.*

## Jak wyglądałaby migracja

Tu trzeba być szczerym: w tę stronę migruje się rzadziej niż w drugą, i ma to dobry powód, opisany w sekcji o NFZ. Jeśli jednak twój gabinet jest prywatny, to startujesz z lepszej pozycji niż klient większości systemów chmurowych, bo baza stoi u ciebie.

1. **Ustal, czy rozliczasz NFZ.** Jeśli tak, przerwij tutaj. Dalsze kroki mają sens tylko dla gabinetu, który nie sprawozdaje świadczeń gwarantowanych i nie wystawia e-recept z programu.
2. **Zrób kopię zapasową bazy PostgreSQL**, zanim cokolwiek ruszysz. Ich własna instrukcja migracji silnika bazy zaczyna się od tego samego zdania i jest to dobra rada niezależnie od kierunku.
3. **Wyciągnij dane z bazy.** PostgreSQL stoi na twoim serwerze, więc nie potrzebujesz eksportu od dostawcy, co jest w tym porównaniu nietypową zaletą ich modelu, nie naszego.
4. **Postaw Dentalpin** przez `docker compose up` i wczytaj dane modułem `migration_import`. System waliduje je przed zapisaniem czegokolwiek.
5. **Zobacz podgląd** z liczbami i przykładowymi wierszami. Nic jeszcze nie zostało zapisane.
6. **Przejrzyj mapowanie świadczeń i symboli** z ich diagramu na twój katalog zabiegów i zdecyduj pozycja po pozycji. To krok, w którym migracje się psują, bo ich symbole są wiązane z procedurami ICD-9 i z krotnością, a twój cennik prywatny jest własną konfiguracją.
7. **Uruchom import**, a potem sprawdź ręcznie dwa najbliższe tygodnie terminarza, zanim wyłączysz stary system.

Krok szósty jest tym, na którym warto zwolnić. Dwa gabinety nigdy nie kodują zabiegów tak samo, a **cicho zgadnięta równoważność daje źle wystawione faktury, których nikt nie zauważy przez miesiące**.

## Uczciwie na koniec

mMedica jest produktem, przeciw któremu trudno argumentować tam, gdzie jest mocna, i nie będziemy udawać inaczej. Dla gabinetu z kontraktem NFZ jest to dziś wybór sensowny, a my nie jesteśmy w tej rozmowie alternatywą. Za 907 zł netto rocznie solowa praktyka prywatna dostaje u nich diagram zębowy, e-recepty i opublikowany cennik, a to nie jest oferta, którą podważa się hasłem o otwartym kodzie.

Jest też coś, co wypada im zapisać na plus, bo pokazuje, jak rzadkie jest to w tej branży. Pełny cennik leży publicznie, pozycja po pozycji, z adnotacjami o dostępności każdego modułu i z datą ważności, a wymagania sprzętowe podają konkretne liczby i uczciwie mówią, których systemów Windows już nie wspierają.

Pytań mimo to zostaje kilka, i wszystkie są na rozmowę przed zamówieniem, nie powodem do odrzucenia. Na konsultowanych stronach nie ma liczby wdrożeń ani roku rozpoczęcia produktu, jest tylko "Zaufało nam tysiące Klientów" na stronie głównej. Nie ma publicznej dokumentacji API. Nie ma informacji, co dzieje się po nieopłaceniu kolejnego roku. Instrukcja Modułu Stomatologicznego, którą publikują, jest w wersji 9.0.0 z 16 lutego 2023 roku, podczas gdy instrukcja Modułu Komercyjnego na tej samej stronie z dokumentacją jest w wersji 12.9.0 z 21 września 2026 roku, więc opis stomatologii, na którym opiera się część tego tekstu, może być starszy niż sam moduł. I jest nowy produkt chmurowy, mMedica Cloud Lite, zapowiadany dla najmniejszych podmiotów na webinarze 10 marca 2026 roku, bez opublikowanej ceny i bez podanej lokalizacji danych, więc o niego też warto zapytać.

Dentalpin jest zakładem w inną stronę: że kod trzymający dokumentację medyczną powinien dać się przeczytać, że stomatologia nie powinna być dopłatą do systemu dla przychodni i że rachunek nie powinien rosnąć z każdym kolejnym stanowiskiem. Płaci się za to brakiem polskiego interfejsu, brakiem polskiego wsparcia i brakiem wszystkiego, co w Polsce łączy gabinet z państwem. W tabeli wyżej widać to gołym okiem i nie próbowaliśmy tego ukryć.

Możesz [sprawdzić demo](https://demo.dentalpin.com) bez instalowania czegokolwiek albo [postawić go na swoim serwerze w trzy minuty](/pl/blog/instalacja-dentalpin-w-trzy-minuty/) i ocenić sam. Jeśli po przeczytaniu tego tekstu wybierzesz mMedica, uznamy, że porównanie zadziałało.

## Źródła

Wszystkie konsultowane 9 października 2026 roku:

- [Cennik mMedica](https://mmedica.asseco.pl/cennik-mmedica/): ceny programów podstawowych za pierwsze i każde kolejne stanowisko (mMedica PS 375,00 / 242,00, PS+ 515,00 / 336,00, Standard 558,00 / 368,00, Standard+ 698,00 / 462,00, Komercja 461,00 / 298,00, Komercja+ 698,00 / 460,00), adnotacja "Ta wersja nie obsługuje rozliczeń z NFZ" przy obu wersjach Komercja, moduł Stomatologia 394,00 / 240,00 z uwagą "Dostępny dla wersji mM PS+, mM Standard, mM Standard+, mM Komercja, mM Komercja+", moduł Elektroniczna Dokumentacja Medyczna 52,00 / 52,00 dla wersji Standard i Komercja oraz 29,00 / 29,00 dla wersji z plusem, moduł Jednolity Plik Kontrolny / KSeF 21,00 / 13,00, oraz legenda: "Podane ceny stanowią roczną opłatę abonamentową za licencje i aktualizacje", "Ceny netto w złotych polskich. Do cen należy doliczyć podatek VAT w wysokości 23%", "Ceny obowiązują do 31.12.2026 r.", "Program mMedica korzysta z bezpłatnego serwera bazy danych PostgreSQL", "Licencje na moduły dodatkowe są udzielane na takie same okresy, jakie obowiązują dla programów podstawowych, do których są zamawiane".
- [Stomatologia · Moduły dodatkowe mMedica](https://mmedica.asseco.pl/moduly-dodatkowe/stomatologia/): diagram zębowy, "Wykonany zabieg wystarczy oznaczyć na diagramie odpowiednim symbolem graficznym, a dane rozliczeniowe zostaną automatycznie uzupełnione", oznaczanie stanu uzębienia przed leczeniem i uzasadnienie "błędnego sprawozdania usługi wykonanej na wcześniej usuniętym zębie", wstępna konfiguracja świadczeń z zakresu profilaktyki, protetyki, leczenia zachowawczego i endodoncji "zgodnie z załącznikiem do Rozporządzenia Ministra Zdrowia w sprawie świadczeń gwarantowanych z zakresu leczenia stomatologicznego", definiowanie własnych świadczeń i usług nierefundowanych (przykłady: chirurgia, ortodoncja, piaskowanie) z materiałami, "automatyczne uzupełnianie wszystkich danych łącznie z wyliczaniem krotności", kontrola limitów ("po określonym czasie zostaje automatycznie wyłączony"), dwa tryby pracy (w funkcji Gabinetu albo do uzupełniania danych rozliczeniowych).
- [Moduł Stomatologiczny · Instrukcja użytkownika, wersja 9.0.0 z 16.02.2023](https://mmedica.asseco.pl/assets/Dokumentacja/mM-Modul-Stomatologiczny.pdf): notacja FDI zatwierdzona przez WHO i Komitet Techniczny ISO/TC 106, kody umiejscowienia dla jamy ustnej, szczęki, żuchwy, ćwiartek i sekstantów, uzębienie mleczne, powierzchnie D (dystalna), M (mezjalna), B (bukalis), P (palati) i O (okluzyjna), widok "Periodontologia" jako definiowana przez użytkownika warstwa diagramu z przypisywanymi symbolami (przykład z instrukcji: kiretaż w obrębie ćwiartki), wiązanie symboli ze świadczeniami i procedurami ICD-9, symbole ortodontyczne dodane w wersji 5.9.0. W całym dokumencie nie występuje pomiar głębokości kieszonek, recesja ani wskaźnik krwawienia.
- [O mMedica](https://mmedica.asseco.pl/o-mmedica/): "Kompleksowe oprogramowanie dla przychodni i praktyk lekarskich", sześć wersji programu (PS, PS+, Standard, Standard+, Komercja, Komercja+), funkcje programu podstawowego z kartoteką pacjentów, terminarzem, rezerwacjami, gabinetem, "Wystawianie e-Recept", "Wystawianie e-Skierowań", eZLA, eksportem danych sprawozdawczych do NFZ i raportami rozliczeniowymi, stopka "Oprogramowanie dla przychodni i małych szpitali".
- [Strona główna mMedica](https://mmedica.asseco.pl/): "Zaufało nam tysiące Klientów" bez podanej liczby wdrożeń, wsparcie techniczne, obsługa zgłoszeń, szkolenia, webinary, FAQ, dokumentacja i przedstawiciele. Na stronie nie ma roku rozpoczęcia produktu.
- [Wymagania sprzętowe mMedica](https://mmedica.asseco.pl/wymagania-sprzetowe/): stanowiska na "Windows z aktywnym wsparciem i aktualizacjami od Microsoft", serwer na "Windows lub Windows Server z aktywnym wsparciem i aktualizacjami od Microsoft, Linux/UNIX", "Przy instalacjach do 15 stanowisk jedna ze stacji roboczych może pełnić funkcję serwera", stanowisko dwurdzeniowe 1,8 GHz z 4 GB RAM i rozdzielczością minimum 1920 x 1080, serwer czterordzeniowy 2,4 GHz z 8 GB RAM i 10 GB wolnego dysku, oświadczenie, że "firma Asseco Poland S.A. również nie będzie miała możliwości wspierania wdrożeń aplikacji mMedica opartej o ww wersje systemów operacyjnych" po zakończeniu wsparcia Microsoftu.
- [Elektroniczna Dokumentacja Medyczna · Moduły dodatkowe mMedica](https://mmedica.asseco.pl/moduly-dodatkowe/elektroniczna-dokumentacja-medyczna/): tworzenie dokumentów elektronicznych XML przy autoryzacji wizyty, wymóg podania przyczyny każdej zmiany, repozytoria dające "zdalny dostęp do Elektronicznej Dokumentacji Medycznej indeksowanej na platformie P1", uwaga "Zamówienie oraz instalacja modułu EDM nie wymusza konieczności przejścia podmiotu na dokumentację elektroniczną".
- [Asystent mMedica](https://mmedica.asseco.pl/asystent-mmedica/): odpowiedzi wyłącznie na podstawie dokumentacji, stron, FAQ i wewnętrznej bazy wiedzy mMedica, zaznaczenie, że nie korzysta z danych pacjentów, wersja testowa z zapisami na listę oczekujących i "Bezpłatne testy" przez cały okres testów.
- [Migracja do mMedica](https://mmedica.asseco.pl/migracja-do-mmedica/): pięć kroków ustalanych indywidualnie, analiza dostępnych danych i sposobu ich eksportu, wdrożenie po stronie autoryzowanego partnera, promocja dla nowych klientów "w cenie odpowiadającej 9 miesiącom abonamentu, czyli z rabatem 25%" z wyłączeniem wdrożenia, szkoleń i wsparcia. Cena migracji nie jest opublikowana.
- [Konfigurator mMedica](https://mmedica.asseco.pl/konfigurator/): dobór wersji po typie jednostki, sposobie finansowania (NFZ, Komercja, Komercja + NFZ), specjalizacji (w tym Stomatologia) i opcjach dodatkowych, wynik w postaci rekomendowanej wersji i przycisku "Zamawiam wycenę", zgoda na informacje handlowe od Asseco Poland S.A. Strona nie podaje kwot.
- [Migracja do PostgreSQL 17 · dokumentacja mMedica](https://mmedica.asseco.pl/wp-content/uploads/2025/10/Migracja_do_PostgreSQL_17.pdf): zalecenie przeprowadzenia migracji z autoryzowanym partnerem, wymagana wersja aplikacji 11.9.0, zdanie "Przed przystąpieniem do prac należy wykonać kopię zapasową bazy danych i zapisać ją w bezpiecznym miejscu".
- [Premiera mMedica Cloud Lite](https://mmedica.asseco.pl/premiera-mmedica-cloud-lite/): "nowego systemu gabinetowego stworzonego z myślą o najmniejszych podmiotach medycznych", webinar 10 marca 2026 roku, bez opublikowanej ceny i bez podanej lokalizacji danych.
- [Licencja Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) i [kod źródłowy](https://github.com/martinezsalmeron/dentalpin).

Mapa strony pod adresem `mmedica.asseco.pl/sitemap.xml` przekierowuje na `sitemap_index.xml` (HTTP 200) i wymienia dziesięć map składowych; `page-sitemap.xml` podaje 23 adresy, a `moduly-dodatkowe-sitemap.xml` 49. Przegląd objął jedenaście stron i dwa dokumenty, wymienione wyżej. Wszystkie wnioski o tym, czego nie ma (liczba wdrożeń, rok rozpoczęcia produktu, publiczna dokumentacja API, warunki po nieopłaceniu kolejnego roku, parodontogram z pomiarami), dotyczą tych stron i dokumentów. Na żadnej z nich nie pada nazwa Dentalpin.

Niniejszy tekst nie stanowi porady prawnej. Obowiązki w zakresie dokumentacji medycznej, EDM, raportowania do P1 i rozliczeń z NFZ warto potwierdzić u źródła albo z własnym doradcą.

Widzisz tu coś błędnego albo nieaktualnego? [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions), a poprawimy. Dotyczy to również osób z Asseco.
