---
title: "Dentalpin a KS-SOMED: moduł stomatologiczny w systemie dla przychodni kontra otwarty kod"
description: "Porównanie KS-SOMED i Dentalpin: licencja 2 930 zł netto za stanowisko stomatologa, trzy warianty z trzema cennikami i własny serwer kontra otwarty kod."
pubDate: 2026-10-10
tags: [porownanie, ks-somed, kamsoft, program-stomatologiczny, oprogramowanie-stomatologiczne]
---

To jest to rzadkie porównanie, w którym nie zaczynamy od sporu o chmurę, bo obaj stawiamy program na twoim serwerze. KAMSOFT mówi to otwarcie na własnej stronie z pytaniami o EDM: "W przypadku systemów desktopowych TAK, potrzebna jest własna infrastruktura serwerowa i sieciowa", i w tym samym miejscu wskazuje KS-SOMED jako system "w klasycznej architekturze".

Spór jest więc o coś innego: o to, czy stomatologia ma być modułem w systemie dla przychodni wielospecjalistycznych, kupowanym per stanowisko z cennika liczącego blisko dwieście pozycji, czy osobnym programem, którego kod możesz przeczytać.

Robimy Dentalpin, więc nie jesteśmy bezstronni. Możemy natomiast być dokładni.

> **Skąd pochodzą tu informacje o KS-SOMED.** Wszystko, co niżej napisano o KS-SOMED, pochodzi ze stron i dokumentów publikowanych przez KAMSOFT S.A. pod adresami `kamsoft.pl`, `cennik.kamsoft.pl` i `edm.kamsoft.pl`, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci. Jest też osobna sekcja o tym, kiedy KS-SOMED jest lepszym wyborem niż my, i w tym tekście jest ona długa.

## W trzydzieści sekund

**KS-SOMED** to system medyczny KAMSOFT S.A., firmy działającej od 1985 roku, "przeznaczony przede wszystkim dla średnich i dużych placówek". Stomatologia jest w nim jednym z dziesięciu modułów, obok Okulistyki, Rehabilitacji, Medycyny Pracy i pracowni radiologicznej. Robi wszystko, co w Polsce łączy gabinet z państwem: e-recepty, eWUŚ, rozliczenia NFZ, indeksowanie EDM na platformie P1.

**Dentalpin** to program stomatologiczny na otwartej licencji, który uruchamiasz na swoim serwerze. Ma diagram zębowy, periodontogram, dokumentację, plany leczenia, kosztorysy, fakturowanie i pełne REST API, nie ma polskiego interfejsu, nie integruje się z żadnym polskim systemem centralnym i nie rozlicza NFZ.

Pytanie, które o tym decyduje, brzmi: czy twój gabinet jest jednym z wielu profili w placówce, czy jest całą placówką. KS-SOMED jest zbudowany na pierwszą odpowiedź i jego cennik to pokazuje.

![Karta pacjenta w Dentalpin z diagramem zębowym, alertami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*Karta pacjenta w Dentalpin: diagram zębowy, alerty kliniczne, aktywny plan i najbliższa wizyta na jednym ekranie.*

## Czym jest KS-SOMED

System dla przychodni i poradni ambulatoryjnych, "szczególnie tych średnich, większych lub wielospecjalistycznych". Sprzedawany modułowo, co KAMSOFT formułuje wprost: "Placówka płaci tylko za te elementy, które wykorzystuje".

Moduły wymienione na stronie produktu to Terminarz, Gabinet Lekarza, Gabinet Pielęgniarki, Stomatologia, Okulistyka, Rehabilitacja, Pracownia radiologiczna (RIS), Punkt pobrań, Medycyna Pracy i Menedżer. Stomatologia jest jednym z nich, nie rdzeniem.

Moduł stomatologiczny ich własna strona opisuje konkretnie:

- **Interaktywny diagram uzębienia** w trzech widokach: "poziomy, szczękowy, 3D", z gotowym zestawem zabiegów i automatycznym podpowiadaniem procedur dla danego rozpoznania.
- **Automatyczna aktualizacja diagramu po zabiegach**, z rejestrowaniem rozpoznań, zabiegów, materiałów i zdjęć bezpośrednio na diagramie.
- **Integracja ze sprzętem zewnętrznym**, na stronie nazwane wprost: "kamery wewnątrzustne, radiowizjografy".
- **Plany leczenia** obejmujące "rodzaj zabiegów, terminy realizacji i koszty".
- **Dokumentacja zdjęciowa** dołączana do wizyty i wydruk diagramu uzębienia dla pacjenta.
- **Cenniki usług i materiałów, umowy komercyjne, rabaty, abonamenty**, rozliczenia z kontrahentami, kontrola stanów magazynowych i ewidencja kosztów.

Opis tego samego modułu w cenniku dodaje wywiady stomatologiczne, recepty, zwolnienia lekarskie i wyniki badań. Integracje systemu, wymienione w jego FAQ, to OSOZ, Centralna e-Rejestracja, e-Zdrowie P1, eWUŚ, NFZ, ZUS oraz własna księgowość KS-FKW i kadry KS-ZZL.

## Czym jest Dentalpin

Program dla jednego zawodu, bez modułów dla innych specjalności, uruchamiany przez `docker compose up` na twoim serwerze albo u dowolnego dostawcy hostingu. Baza to PostgreSQL i masz do niej dostęp od pierwszego dnia. Kod jest publiczny na licencji BSL 1.1, cena to zero, a każda funkcja wystawia endpoint REST z dokumentacją OpenAPI generowaną automatycznie.

Czego nie ma i nie będzie udawać, że ma: polskiego interfejsu, polskiego wsparcia telefonicznego, e-recept, e-skierowań, rozliczeń NFZ, indeksowania EDM na P1 i integracji z radiowizjografem.

![Periodontogram w Dentalpin z sześcioma pomiarami głębokości kieszonki na każdy ząb](/screenshots/periodontogram.png)

*Periodontogram z sześcioma punktami pomiarowymi na ząb i historią pomiarów w czasie.*

## Ile to realnie kosztuje

Tu KAMSOFT robi coś, co w tej branży jest rzadkie i wypada im zapisać na plus: publikuje pełny cennik, pozycja po pozycji, z ceną netto i brutto, z adnotacją "Wszystkie ceny podane są w PLN" i z datą ważności "od 01.02.2026 do 31.01.2027". Nie trzeba dzwonić, żeby się dowiedzieć.

Trzeba natomiast umieć go przeczytać, bo gabinet stomatologiczny nie kupuje jednej pozycji. Rejestracja jest osobnym modułem z osobną licencją, więc realny punkt wyjścia dla solowej praktyki w pełnym KS-SOMED wygląda tak (ceny netto, za stanowisko):

| Pozycja z cennika | Licencja | Asysta i subskrypcja |
|---|---|---|
| KS-SOMED, Rejestracja | 2 000,00 zł | 468,00 zł |
| KS-SOMED, Gabinet stomatologa | 2 930,00 zł | 690,00 zł |
| **Razem, jedno stanowisko** | **4 930,00 zł** | **1 158,00 zł** |

Do tego dochodzą pozycje, które dla polskiego gabinetu w 2026 roku nie są opcjonalne. Podpisywanie podpisem elektronicznym (HZiCh, EDM, eRecepta, eZLA) to 640,00 zł netto za stanowisko plus 150,00 zł asysty. Archiwizacja EDM KS-ZSIRep to 793,00 zł netto za serwer plus 187,00 zł. Kopia w chmurze jest usługą płatną osobno, 611,00 zł netto za serwer na rok, i cennik mówi wprost, że "działa wyłącznie dla bazy danych Firebird".

> **Cennik nie podaje okresu przy pozycjach asysty w pełnym KS-SOMED.** Wolumetria mówi tylko "za stanowisko", podczas gdy w tym samym dokumencie inne pozycje są oznaczone jako "1R" albo "za licencję na rok". To pierwsze pytanie do handlowca, bo od odpowiedzi zależy, czy 1 158 zł to koszt jednorazowy, czy roczny.

A tu jest rzecz, której nie widać, dopóki nie otworzy się trzech cenników obok siebie: ten sam moduł stomatologiczny ma trzy różne ceny, zależnie od wariantu systemu.

| Wariant | Rejestracja | Gabinet stomatologa | Oznaczenie w cenniku |
|---|---|---|---|
| KS-SOMED | 2 000,00 zł | 2 930,00 zł | licencja |
| KS-GABINET | 935,00 zł | 1 440,00 zł | licencja |
| KS-SOMED Pakiet M | 620,00 zł | 1 120,00 zł | licencja 1R |

KS-GABINET jest najtańszą drogą do tego modułu i KAMSOFT podaje dla niego ograniczenie: praca "na maksymalnie czterech stanowiskach", z pełną kompatybilnością z KS-SOMED, więc licencję można potem rozszerzyć. Pakiet M jest adresowany wprost do stomatologów, a wszystkie jego pozycje noszą oznaczenie "1R", które w tych samych cennikach pojawia się przy wolumetrii "za licencję na rok". Licencja i asysta mają w nim przy tym identyczne kwoty: 1 120,00 zł i 1 120,00 zł za stanowisko stomatologa.

Jeśli szukasz jednego zdania pokazującego, dla jakiej skali ten system był projektowany, to jest nim pozycja Portal Pacjenta: pakiet za 69 050,00 zł netto za serwer, z asystą 18 260,00 zł. To nie jest cennik napisany z myślą o jednym fotelu.

## Czego nie ma na konsultowanych stronach

Trzy rzeczy, i wszystkie trzy to pytania przed zamówieniem, nie powody do odrzucenia.

1. **Periodontogram.** Słowo nie występuje w opisie modułu stomatologicznego, w jego opisie w cenniku ani w żadnej innej pozycji cennika KS-SOMED. Diagram uzębienia jest opisany szczegółowo, łącznie z widokiem 3D; pomiaru głębokości kieszonek, recesji ani wskaźnika krwawienia na konsultowanych stronach nie ma. Nie znaczy to, że tego nie ma w produkcie, znaczy, że nie jest opublikowane.
2. **Liczba wdrożeń.** Strona o firmie podaje rok powstania (1985), kapitał zakładowy 52 600 000 zł i KRS, ale ani liczby klientów, ani liczby placówek, ani liczby zatrudnionych. Studia przypadków podają rezultaty ("redukcja pustych wizyt o 20%", "wizyty szybsze o 10%") bez liczebności próby.
3. **Wymagania sprzętowe.** Strona produktu nie podaje żadnych: ani systemu operacyjnego, ani silnika bazy, ani parametrów serwera. Firebird pojawia się tylko w opisie usługi kopii w chmurze. Przy systemie, który stawiasz u siebie, to dokładnie ta informacja, której potrzebujesz najpierw.

## API i wymiana danych

Warto to rozdzielić, bo łatwo tu o nieścisłość w obie strony. KS-SOMED ma dokumentowaną ścieżkę integracyjną i cennik nazywa ją precyzyjnie: pozycja "Integracja z systemem zewnętrznym HL7, WEBSERVICE" pozwala "na wymianę danych z zewnętrznym systemem za pomocą ustandaryzowanych protokołów i technik wymiany danych (HL7, WEBSERVICE, REST API, SOAP API)".

Czyli API istnieje. Jest natomiast licencjonowane za system zewnętrzny i kosztuje 10 850,00 zł netto za każdy, a rozszerzenie do HL7CDA to kolejne 4 230,00 zł. Osobna pozycja "Eksport zleceń do formatu CSV" ma własną licencję za 834,00 zł netto.

To jest różnica modelu, nie jakości. U nich integracja jest produktem z ceną; u nas endpoint jest efektem ubocznym tego, że funkcja istnieje.

## KS-SOMED i Dentalpin obok siebie

| | KS-SOMED | Dentalpin |
|---|---|---|
| Model | Licencja komercyjna, modułowa | Open source (BSL 1.1) |
| Wdrożenie | ✓ Twój serwer, "klasyczna architektura" | ✓ Twój serwer lub dowolny hosting |
| Baza danych | Firebird, per opis kopii w chmurze | PostgreSQL |
| Opublikowany cennik | ✓ Pełny, pozycja po pozycji, z datą | ✓ 0 zł, wszystko w środku |
| Koszt stanowiska stomatologicznego | ✗ 2 930 zł + 2 000 zł rejestracja, netto | ✓ Brak |
| Opłata za kolejne stanowisko | ✗ Ta sama kwota od nowa | ✓ Brak |
| Na rynku od | ✓ Firma od 1985 roku | ✗ Od 2026 |
| Polski interfejs | ✓ Tak | ✗ Nie |
| Wsparcie po polsku | ✓ Tak, z serwisem telefonicznym | ✗ Tylko GitHub |
| e-recepta, e-skierowanie, eZLA | ✓ Tak; podpis elektroniczny 640 zł netto | ✗ Nie |
| EDM na platformie P1 | ✓ Tak, przez KS-EDM Suite | ✗ Nie |
| Rozliczenia NFZ i eWUŚ | ✓ Tak | ✗ Nie |
| Diagram zębowy | ✓ Poziomy, szczękowy, 3D | ✓ Tak |
| Periodontogram | ~ Brak na konsultowanych stronach | ✓ 6 punktów na ząb |
| Integracja ze sprzętem obrazowym | ✓ Tak; podłączenie urządzenia 6 710 zł netto | ✗ Nie ma |
| Inne moduły w tym samym systemie | ✓ Dziewięć, od RIS do medycyny pracy | ✗ Tylko stomatologia |
| Plany leczenia z kosztami | ✓ Tak | ✓ Tak |
| Magazyn | ✓ Tak, z ewidencją kosztów i abonamentami | ✓ Tak |
| REST API | ~ Jest, 10 850 zł netto za system | ✓ Pełne, z OpenAPI |
| Eksport do CSV | ~ Osobna licencja, 834 zł netto | ✓ Pełna baza |
| ISO/IEC 27001 | ✓ Certyfikat utrzymywany, per umowa PDO | ✗ Brak |
| Umowa powierzenia (art. 28 RODO) | ✓ Opublikowana, dwunastostronicowa | ~ Zależy od twojej instalacji |
| Kopie zapasowe w chmurze | ~ Usługa płatna, 611 zł netto za rok | ~ Zależy od twojej instalacji |
| Wymagania sprzętowe | ✗ Nieopublikowane na stronie produktu | ✓ Docker i PostgreSQL |
| Liczba wdrożeń | ✗ Nieopublikowana | ✗ Nieopublikowana |
| Kod źródłowy | ✗ Zamknięty | ✓ Publiczny |

## Wybierz KS-SOMED, jeśli

- **Masz kontrakt z NFZ.** To kończy rozmowę i lepiej napisać to wysoko niż nisko. e-recepty, eWUŚ, sprawozdawczość, rozliczenia JGP i indeksowanie EDM na P1 są u nich gotowe, a u nas nie ma ani jednej z tych rzeczy.
- **Twój gabinet stomatologiczny jest jednym z profili w większej placówce.** Jeśli pod jednym dachem działa też okulistyka, rehabilitacja albo medycyna pracy, to jeden system z jedną kartoteką i jednym terminarzem jest wart więcej niż wszystko, co możemy zaoferować. My mamy jeden zawód i to jest świadome ograniczenie.
- **Pracujesz z radiowizjografem albo kamerą wewnątrzustną i chcesz, żeby zdjęcie wpadało na diagram.** Oni to publikują jako gotową integrację z licencją i ceną. My nie integrujemy się z żadnym urządzeniem obrazowym.
- **Potrzebujesz dostawcy, który przejdzie kontrolę u twojego inspektora ochrony danych.** Utrzymywany certyfikat ISO/IEC 27001 i opublikowany, dwunastostronicowy regulamin przetwarzania danych w oparciu o art. 28 ust. 3 RODO, z wzorem Protokołu Usunięcia Danych w załączniku, to lepsza odpowiedź niż cokolwiek, co mamy my.
- **Chcesz, żeby ktoś przeniósł twoje dane za ciebie.** Ich FAQ mówi, że po konsultacji "nasi eksperci zajmują się migracją" obecnych baz pacjentów. U nas odpowiednikiem jest moduł importu i twój wieczór.
- **Zaczynasz mały, ale planujesz rosnąć.** KS-GABINET za 1 440,00 zł netto za stanowisko stomatologa jest tańszym wejściem z limitem czterech stanowisk i pełną kompatybilnością z KS-SOMED, więc rozszerzenie licencji nie wymaga zmiany systemu ani ponownego wdrożenia.
- **Chcesz znać cenę przed rozmową.** Ich pełny cennik leży publicznie, z datą ważności i podziałem netto/brutto. Większość polskiego rynku tego nie robi, a w tej serii opisaliśmy już kilku, którzy nie podają niczego.
- **Nie masz nikogo technicznego.** To prawda po obu stronach, bo oba systemy stoją na twoim serwerze, ale u nich jest dział serwisowy z numerem telefonu, a u nas są dyskusje na GitHubie po angielsku.

## Wybierz Dentalpin, jeśli

- **Nie masz kontraktu z NFZ i nie chcesz płacić za jego obsługę.** Rozliczenia NFZ, JGP, deklaracje i opieka koordynowana są w KS-SOMED wszędzie, bo tak zbudowano ten system. Prywatny gabinet płaci za architekturę, z której nie skorzysta.
- **Rachunek nie ma rosnąć z każdym fotelem.** Drugie stanowisko stomatologiczne to u nich ta sama kwota od nowa, bo licencja jest za stanowisko. Przy trzech fotelach i rejestracji różnica przestaje być kwestią gustu.
- **Prowadzisz pacjentów z chorobą przyzębia.** Sześć punktów pomiarowych na ząb, krwawienie i historia pomiarów w czasie są u nas podstawą karty. Na konsultowanych stronach KS-SOMED nie ma ani słowa o pomiarze głębokości kieszonek, a diagram uzębienia, choćby w 3D, nie jest tym samym narzędziem.
- **Chcesz dostępu do bazy, nie do eksportu.** Oba systemy trzymają dane u ciebie, i to jest ich wspólna mocna strona wobec całej chmurowej konkurencji. Różnica jest w tym, co możesz z tą bazą zrobić: u nas schemat PostgreSQL jest w repozytorium, a eksport do CSV nie jest pozycją cennika za 834 zł.
- **Potrzebujesz API bez licencji za każdy podłączony system.** 10 850,00 zł netto za pierwszy zewnętrzny system to rozsądna cena wdrożenia integracji i zła cena eksperymentu. U nas podłączasz się do endpointu i widzisz, czy pomysł działa.
- **Chcesz wiedzieć, na czym to stoi, przed podpisaniem.** Strona produktu nie podaje wymagań sprzętowych, systemu operacyjnego ani silnika bazy. U nas odpowiedź brzmi: Docker, PostgreSQL, trzy minuty, i możesz to sprawdzić zanim z kimkolwiek porozmawiasz.
- **Zależy ci, żeby kod dokumentacji medycznej dał się przeczytać.** To jedyny argument, którego KS-SOMED nie może zrównoważyć ceną ani modułem, i zarazem jedyny, który dla większości gabinetów nic nie znaczy. Jeśli dla ciebie znaczy, to jest to ta różnica.

![Raporty w Dentalpin z przychodami, obłożeniem i realizacją planów leczenia](/screenshots/reports.png)

*Raporty w Dentalpin: przychody, obłożenie i realizacja planów leczenia bez dokupowania modułu.*

## Jak wyglądałaby migracja

Uczciwie: baza stoi u ciebie, co jest dobrą pozycją wyjściową, ale narzędzia do jej opuszczenia są u nich osobnymi licencjami, i to jest w tej migracji rzecz najmniej oczywista.

1. **Ustal, czy masz licencję "Eksport zleceń do formatu CSV".** Jest osobną pozycją cennika za 834,00 zł netto. Jeśli jej nie masz, to pierwszy telefon jest o nią, nie o wypowiedzenie umowy.
2. **Zapytaj o dostęp do bazy Firebird na twoim serwerze.** Plik bazy jest fizycznie u ciebie, co jest twoją przewagą w tej rozmowie. Ustal na piśmie, co możesz z niego odczytać, zanim cokolwiek wypowiesz.
3. **Pobierz dokumentację EDM z repozytorium ZSIRep**, które według ich stron jest przechowywane lokalnie, "poza główną bazą operacyjną". To nie jest ten sam zbiór co kartoteka i trzeba go wziąć osobno.
4. **Postaw Dentalpin** przez `docker compose up` albo u dostawcy hostingu i zaimportuj dane modułem `migration_import`. System waliduje pliki przed zapisaniem czegokolwiek.
5. **Zobacz podgląd** z liczbami i przykładowymi wierszami. Nic jeszcze nie zostało zapisane.
6. **Przejrzyj mapowanie diagramu.** Ich diagram uzębienia i nasz diagram zębowy opisują to samo, ale symbole i powiązania z procedurami są ich konfiguracją, a nie standardem, więc to ten krok, na którym coś się rozjedzie.
7. **Zdecyduj, co z e-receptą, eWUŚ i P1.** Tych trzech rzeczy u nas nie ma, więc muszą trafić gdzie indziej albo zniknąć z twojego dnia. Odpowiedź "będę wystawiał e-recepty w gabinet.gov.pl" jest odpowiedzią, tylko trzeba ją podjąć świadomie, a nie odkryć w poniedziałek.
8. **Uruchom import**, a potem sprawdź ręcznie dwa najbliższe tygodnie kalendarza, zanim wyłączysz stary system.

Krok siódmy jest w tej migracji tym, który najczęściej ją zatrzymuje, i dobrze, bo lepiej zatrzymać ją tam niż po przeniesieniu danych.

## Uczciwie na koniec

KAMSOFT jest w tym porównaniu stroną silniejszą wszędzie tam, gdzie gabinet styka się z państwem, i nie ma sensu tego relatywizować. Czterdzieści lat na rynku, utrzymywany certyfikat ISO/IEC 27001, własna księgowość i kadry, dział serwisowy z numerem telefonu i e-recepta, która działa od pierwszego dnia. Dla przychodni wielospecjalistycznej z kontraktem NFZ nie jesteśmy alternatywą i nie udajemy, że jesteśmy.

Trzeba im też zapisać dwie rzeczy, które w tej branży są rzadkie. Publikują cały cennik, z datą ważności i opisem każdej pozycji, zamiast formularza kontaktowego. I publikują pełny regulamin przetwarzania danych osobowych w oparciu o art. 28 ust. 3 RODO, razem z wzorem protokołu usunięcia danych, czego większość opisanych tu dostawców nie robi wcale.

Jeden drobny cień na tym drugim punkcie, bo wypada go podać: ich prawo do audytu u dostawcy jest realne, ale wąskie. Audyt można przeprowadzić "w przypadkach wystąpienia udokumentowanego istotnego naruszenia", z miesięcznym wyprzedzeniem, koszty obu stron pokrywa w całości klient według stawki godzinowej dostawcy, a audytorem nie może być podmiot konkurencyjny wobec KAMSOFT. W okresie utrzymywania certyfikacji ISO/IEC 27001 uprawnienie realizuje się przez okazanie certyfikatu i wyciągu z raportu. Jest to zgodne z rynkowym standardem i warto wiedzieć, co się podpisuje.

Dentalpin jest zakładem w inną stronę: że stomatologia nie powinna być modułem w systemie dla przychodni, że licencja nie powinna liczyć foteli i że kod trzymający dokumentację medyczną powinien dać się przeczytać. Płaci się za to brakiem polskiego interfejsu, brakiem polskiego wsparcia i brakiem wszystkiego, co w Polsce łączy gabinet z NFZ i z P1. W tabeli wyżej widać to gołym okiem i nie próbowaliśmy tego ukryć.

Możesz [sprawdzić demo](https://demo.dentalpin.com) bez instalowania czegokolwiek, zobaczyć [nasz cennik](/pl/cennik/) albo [postawić go na swoim serwerze w trzy minuty](/pl/blog/instalacja-dentalpin-w-trzy-minuty/) i ocenić sam. Jeśli po przeczytaniu tego tekstu wybierzesz KS-SOMED, uznamy, że porównanie zadziałało.

## Źródła

Wszystkie konsultowane 10 października 2026 roku:

- [KS-SOMED · KAMSOFT](https://kamsoft.pl/ks-somed/): "kompleksowy system medyczny, przeznaczony przede wszystkim dla średnich i dużych placówek", numer katalogowy 2133PI04.00, "KS-SOMED jest systemem dla przychodni i poradni ambulatoryjnych", "szczególnie tych średnich, większych lub wielospecjalistycznych"; lista modułów (Terminarz, Gabinet Lekarza, Pielęgniarka, Stomatologia, Okulistyka, Rehabilitacja, Pracownia radiologiczna (RIS), Punkt pobrań, Medycyna Pracy, Menedżer); sekcja "Stomatologia — dokumentacja z wizualizacją leczenia" z "interaktywny diagram uzębienia (widok poziomy, szczękowy, 3D), gotowy zestaw zabiegów, automatyczne podpowiadanie procedur dla danego rozpoznania", "Integracja ze sprzętem zewnętrznym (np. kamery wewnątrzustne, radiowizjografy)", "Tworzenie kompleksowych planów leczenia obejmujących: rodzaj zabiegów, terminy realizacji i koszty", "rejestrowanie rozpoznań, zabiegów, materiałów i zdjęć bezpośrednio na diagramie", "drukowanie diagramu uzębienia i innych dokumentów dla pacjenta", "cenniki usług i materiałów, umowy komercyjne, rabaty, abonamenty oraz rozliczenia z kontrahentami", "kontrolę stanów magazynowych oraz ewidencję kosztów"; "Od ponad czterech dekad tworzymy rozwiązania"; FAQ z "Tak – to system modułowy", "Placówka płaci tylko za te elementy, które wykorzystuje", "Zapewnia pełną zgodność z RODO, bezpieczne kopie zapasowe w chmurze", "Po konsultacji i ustaleniu potrzeb placówki nasi eksperci zajmują się migracją" obecnych baz pacjentów, integracje "OSOZ (rejestracja online, powiadomienia, Portal Pacjenta)", Centralna e-Rejestracja, e-Zdrowie P1, eWUŚ, NFZ, ZUS, KS-FKW, KS-ZZL; warianty KS-SOMED M ("indywidualnych praktyk lekarskich, gabinetów specjalistycznych, stomatologów oraz niewielkich przychodni", "zaawansowana EDM bez wysokich kosztów wdrożenia", wybór między bezpłatną i komercyjną bazą danych) i KS-GABINET ("maksymalnie czterech stanowiskach", pełna kompatybilność z KS-SOMED); studia przypadków "redukcja pustych wizyt o 20%", "wizyty szybsze o 10%", "kilkadziesiąt godzin miesięcznie" bez podanej liczebności próby; strona nie podaje wymagań sprzętowych, systemu operacyjnego ani silnika bazy danych, i nie podaje liczby wdrożeń.
- [Cennik KS-SOMED](https://cennik.kamsoft.pl/cennik.html?produkt=KS-SOMED): "Cennik obowiązuje od 01.02.2026 do 31.01.2027", "Wszystkie ceny podane są w PLN", ceny netto i brutto. Licencje za stanowisko: Rejestracja 2 000,00 zł, Gabinet lekarza 2 470,00 zł, Gabinet stomatologa 2 930,00 zł, Gabinet okulisty 2 790,00 zł, Rehabilitacja 3 090,00 zł, Medycyna pracy 5 870,00 zł, Pracownia radiologiczna (RIS) 10 270,00 zł, Punkt pobrań 1 300,00 zł, Podpisywanie podpisem elektronicznym (HZiCh, EDM, eRecepta, eZLA) 640,00 zł. Asysta techniczna i subskrypcja na aktualizację, za stanowisko: Rejestracja 468,00 zł, Gabinet lekarza 579,00 zł, Gabinet stomatologa 690,00 zł, podpis elektroniczny 150,00 zł; wolumetria tych pozycji nie podaje okresu, w odróżnieniu od pozycji oznaczonych "1R" i "za licencję na rok" w tym samym cenniku. Archiwizacja EDM KS-ZSIRep 793,00 zł za serwer plus asysta 187,00 zł; Dostęp do repozytorium EDM ZSIRep przez WWW 7 440,00 zł. "Integracja z systemem zewnętrznym HL7, WEBSERVICE" 10 850,00 zł za system zewnętrzny, z opisem "Licencja pozwala na wymianę danych z zewnętrznym systemem za pomocą ustandaryzowanych protokołów i technik wymiany danych (HL7, WEBSERVICE, REST API, SOAP API)"; rozszerzenie HL7 2.3 do HL7CDA 4 230,00 zł. "Eksport zleceń do formatu CSV" 834,00 zł za licencję; Eksport danych do programu Symfonia 6 710,00 zł. Podłączenie urządzenia diagnostycznego 6 710,00 zł za urządzenie; podłączenie drukarki fiskalnej 665,00 zł; Dodatkowy podmiot gospodarczy 412,00 zł za NIP. "KS-SOMED - Kopia w chmurze - SAAS" 611,00 zł za serwer na rok, z opisem "cyklicznych kopii bezpieczeństwa bazy danych Firebird", zapisem "w przestrzeni chmurowej ownCloud" i zdaniem "usługa działa wyłącznie dla bazy danych Firebird". Pakiet Portal Pacjenta 69 050,00 zł za serwer, z asystą 18 260,00 zł; Portal Koordynatora 20 140,00 zł. Opis modułu stomatologicznego w cenniku: "rejestrowanie stanu uzębienia pacjenta", "zobrazowanie na diagramie uzębienia", "wypełnianie i przeglądanie formularzy wywiadów stomatologicznych", "drukowanie diagramu stanu uzębienia", recepty, zwolnienia lekarskie, zdjęcia. Słowo "periodontogram" ani "parodontogram" nie występuje w żadnej pozycji tego cennika.
- [Cennik KS-SOMED M](https://cennik.kamsoft.pl/cennik.html?produkt=KS-SOMED-M): "Cennik obowiązuje od 01.02.2026 do 31.01.2027". Wszystkie pozycje oznaczone "licencja 1R" i "subskrypcja i asysta 1R". Za stanowisko: Rejestracja 620,00 zł licencji i 620,00 zł asysty, Gabinet Stomatologa 1 120,00 zł i 1 120,00 zł, Gabinet lekarza 780,00 zł i 780,00 zł, Gabinet Okulisty 1 380,00 zł, Pracownia radiologiczna (RIS) 2 610,00 zł. Podłączenie urządzenia diagnostycznego 751,00 zł za urządzenie, plus "Usługa oprogramowania urządzenia diagnostycznego" 5 730,00 zł.
- [Cennik KS-GABINET](https://cennik.kamsoft.pl/cennik.html?produkt=KS-GLR): "Cennik obowiązuje od 01.02.2026 do 31.01.2027". Licencje za stanowisko: Rejestracja 935,00 zł, Gabinet lekarza 1 440,00 zł, Gabinet stomatologa 1 440,00 zł, Gabinet okulisty 1 440,00 zł, Podpisywanie podpisem elektronicznym 640,00 zł, Archiwizacja EDM ZSIRep 793,00 zł za serwer. Asysta techniczna i subskrypcja na aktualizację: Rejestracja 219,00 zł, Gabinet stomatologa 341,00 zł za stanowisko.
- [FAQ · KS-EDM Suite](https://edm.kamsoft.pl/faq): na pytanie o własną sieć, serwer i wsparcie informatyków odpowiedź "W przypadku systemów desktopowych TAK, potrzebna jest własna infrastruktura serwerowa i sieciowa"; "EDM Suite współpracuje zarówno z systemami w klasycznej architekturze (jak KS-SOMED)" obok rozwiązań webowych SERUM i MEDIPORTA; "Instalacja Repozytorium ZSIRep dla systemów desktopowych jest rozwiązaniem rekomendowanym"; "Obowiązek raportowania zdarzeń medycznych, indeksowania oraz udostępniania i wymiany EDM obejmuje również stomatologię"; "Moduł stomatolog w systemach KAMSOFT realizuje wytwarzanie EDM".
- [KS-EDM Suite · KAMSOFT](https://kamsoft.pl/ks-edm-suite/): "Bezpieczne przechowywanie EDM (także lokalne ZSIRep poza główną bazą operacyjną)", "Wdrożenie KS-EDM Suite (on-premise lub chmura)", wariant chmurowy z "Infrastruktura repozytorium w chmurze (m.in. centra danych w UE)".
- [Informacje o firmie · KAMSOFT](https://kamsoft.pl/informacje-o-firmie/): "Od momentu powstania w 1985 roku", "Od ponad czterech dekad", KAMSOFT S.A., 40-235 Katowice, ul. 1 Maja 133, KRS 0000345075 (Sąd Rejonowy Katowice-Wschód, Wydział VIII KRS), NIP 9542685559, REGON 241371988, "Kapitał zakładowy: 52.600.000 zł (w całości opłacony)". Strona nie podaje liczby pracowników, klientów ani wdrożeń.
- [Regulamin Przetwarzania Danych Osobowych TRK00.00/PDO/RODO/2025/R/01 · KAMSOFT](https://kamsoft.pl/pliki/Regulamin_PDO.pdf): dokument dwunastostronicowy, "ustalony w oparciu o treść art. 28 ust. 3 RODO"; § 5 o podpowierzeniu z ogólną zgodą i publikacją listy podpowierników pod adresem `kamsoft.pl/daneosobowe` oraz pięciodniowym terminem na sprzeciw; § 6 pkt 2 "Audyty mogą być przeprowadzane w sytuacjach szczególnych tj. w przypadkach wystąpienia udokumentowanego istotnego naruszenia zasad przetwarzania Danych Osobowych", "Każdy z audytów powinien być zapowiedziany przez Administratora z co najmniej miesięcznym wyprzedzeniem", "Koszty przeprowadzenia audytów po obu Stronach ponosi w całości Administrator" według stawki godzinowej z cennika, "audytorem (...) nie może być podmiot prowadzący działalność konkurencyjną względem Powiernika"; § 6 pkt 4 "Powiernik wdrożył i utrzymuje System Zarządzania Bezpieczeństwem Informacji zgodny z normą ISO/IEC 27001", z realizacją prawa do audytu przez okazanie certyfikatu i wyciągu z raportu; § 10 "Powiernik zobowiązuje się niezwłocznie usunąć, nie później niż w terminie 14 dni od dnia zaprzestania korzystania z Usług", z wzorem Protokołu Usunięcia Danych w załączniku.

*Ten tekst nie jest poradą prawną. Zakres obowiązków w zakresie EDM, e-recepty i rozliczeń z NFZ sprawdzaj w źródłach urzędowych.*
