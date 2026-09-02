---
title: "Alternatywa open source dla Estomed: co naprawdę istnieje"
description: "Jakie alternatywy open source dla Estomed istnieją dziś w polskim gabinecie, z licencją każdej sprawdzoną na stronie jej twórcy i jednym filtrem: e-Recepta."
pubDate: 2026-09-02
tags: [porownanie, estomed, open-source, program-stomatologiczny]
---

Lista alternatyw open source dla Estomed jest krótka, a w ostatnim roku skróciła się jeszcze bardziej: Open Dental, czyli odpowiedź oczywista przez wiele lat, przestał być open source w wersji 24.4, i mówi to jego własna strona licencji. W Polsce drugi filtr odsiewa prawie całą resztę, bo żadna z opcji na tej stronie nie wystawia e-Recepty.

Robimy Dentalpin, który jest jedną z opcji wymienionych niżej, więc bezstronni nie jesteśmy. Dokładni możemy być.

> **Skąd pochodzą tu informacje.** Wszystko, co napisano o Estomed, pochodzi ze stron publikowanych przez Estomed Sp. z o.o. na estomed.pl, a wszystko, co napisano o pozostałych opcjach, pochodzi ze stron ich twórców, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci.

## W trzydzieści sekund

**Estomed jest produktem dojrzałym i nie ma o czym dyskutować.** Jego własne strony podają rok 2003 jako początek programu, ponad dwie dekady na rynku i ponad 3500 gabinetów w Polsce i za granicą. Żadna alternatywa open source nie ma niczego podobnego.

**Jeśli przez open source rozumiesz "móc przeczytać i zachować kod", zostają dziś dwa żywe produkty dentystyczne**: Apexo na licencji GPLv3 oraz Dentalpin na BSL 1.1, która po czterech latach zmienia się w Apache 2.0. Oba instalujesz na własnym serwerze i żaden nie pobiera opłaty licencyjnej za stanowisko.

Jest jednak pytanie, które w Polsce wyprzedza wszystkie inne: **czy to program ma wystawiać e-Recepty, e-skierowania i prowadzić EDM w P1?** Jeśli tak, żadna z opcji open source na tej stronie tego dziś nie robi, a reszta porównania cię nie dotyczy. Estomed ma te trzy pozycje w najtańszym wariancie cennika.

![Periodontogram w Dentalpin z sześcioma pomiarami przy każdym zębie](/screenshots/periodontogram.png)

*Periodontogram z sześcioma punktami pomiarowymi na ząb, w programie, którego kod jest opublikowany.*

## Czym jest Estomed i dlaczego szuka się alternatywy

Program do zarządzania gabinetem stomatologicznym firmy Estomed Sp. z o.o. z Gdańska, ul. Hynka 32. Strona "O nas" podaje: "Program Estomed istnieje na rynku od 2003 roku" oraz współpracę "z ponad 3500 gabinetami stomatologicznymi w Polsce i za granicą".

**I publikuje pełny cennik**, co w tym rynku jest rzadkie i co należy powiedzieć przed jakąkolwiek krytyką. Są trzy warianty, wszystkie z opłatą jednorazową za stanowisko plus abonament miesięczny: Basic 2000 zł i 73 zł, Ultimate 2500 zł i 83 zł, Gold 3000 zł i 94 zł.

Zawartość wariantu Basic cytujemy w całości, bo to ona decyduje o wymowie tej strony: "Lista pacjentów, Karta pacjenta, Wydruki, Panel przeglądu, Integracja RTG, Panel periodontologiczny, Grupy pacjentów, Płatności elektroniczne, Recepty / e-Recepty, E-skierowania, EDM/P1, Grupy rabatowe, Rozliczenia, Technicy, Komunikacja z pacjentem (SMS, e-mail, czat, kampanie)".

> **Licencja jest dożywotnia, ale liczona za stanowisko.** Przypis pod cennikiem mówi wprost: "opłata jednorazowa, licencja dożywotnia (cena uwzględnia pierwszy rok abonamentu)", a kwota miesięczna obowiązuje "przy podpisaniu umowy na 12 miesięcy". Przy czterech stanowiskach opłata wejściowa w wariancie Basic to 8000 zł, i to jest pierwsza liczba do policzenia, nie szczegół.

Kto szuka alternatywy, zwykle wychodzi od jednego z trzech punktów: koszt rosnący z każdym dołożonym stanowiskiem, to, że kodu i schematu bazy nie da się przeczytać, albo chęć trzymania bazy na własnej maszynie. Cennik podaje też stawkę serwisową poza abonamentem: "500zł brutto – każda rozpoczęta godzina serwisowania".

## Co znaczy open source, kiedy zmieniasz program

Pod jedną etykietą sprzedaje się trzy różne rzeczy i warto je rozdzielić, zanim spojrzysz na produkty:

- **Licencja.** To jedyna rzecz, która decyduje, czy możesz czytać, zmieniać i zachować kod niezależnie od tego, co stanie się z producentem. To także rzecz, która potrafi zmienić się z roku na rok, co widać niżej.
- **Cena.** Darmowe i open source to nie to samo. Istnieje darmowe oprogramowanie zamknięte i istnieje wolne oprogramowanie, za którego wsparcie się płaci.
- **Dane.** Własny hosting znaczy, że baza stoi na maszynie, którą kontrolujesz. Jest niezależny od licencji i prawie zawsze to właśnie jego szuka ktoś, kto zadaje to pytanie.

Jeśli problemem jest rachunek co miesiąc, kryterium jest cena. Jeśli problemem jest to, co stanie się z dokumentacją medyczną w dniu, w którym dostawca zamknie działalność albo zmieni cennik, kryterium są licencja i własny hosting. Rozbieramy to osobno w [poradniku o ocenie projektu open source](/pl/blog/ocena-projektu-open-source-dla-gabinetu-stomatologicznego/).

## Jakie alternatywy open source istnieją dzisiaj

- **Apexo.** Program dentystyczny opisywany przez własną stronę jako "an open-source, offline-first dental practice manager designed for speed, privacy, and clinical precision", na licencji "GNU GPLv3". Wymienia kalendarz, kartoteki pacjentów, statystyki, synchronizację, pracę offline i kopie zapasowe, a jego repozytorium na GitHubie podaje GNU General Public License v3.0 i 787 commitów. **Deklaruje języki "EN, AR, ES, PL, KU", czyli jako jedyna opcja na tej stronie ma polski interfejs.** Na konsultowanych stronach nie pojawia się natomiast ani diagram zębowy, ani periodontogram, ani fakturowanie, więc to trzy rzeczy do sprawdzenia przed wdrożeniem.
- **OpenMolar.** Projekt GPLv3 założony przez szkockiego dentystę i jedyny z tej listy, który sam podaje swój stan. Jego strona mówi, że OpenMolar1 "is no longer utilised in practice, although development continues as a hobby project", a OpenMolar2 "is effectively a dead project as it has not been ported to Python3 or Qt5". Kod można studiować, gabinetu się na nim nie opiera.
- **Open Dental.** Przez lata był odpowiedzią na to pytanie i już nie jest. Pozostaje produktem poważnym i jednym z nielicznych w branży, które publikują cennik: 199 dolarów miesięcznie za lokalizację przy umowie na 12 miesięcy, co obejmuje wszystkie komputery w tej lokalizacji i do trzech dentystów, wsparcie telefoniczne i wszystkie wydania.
- **GNU Health.** Wolne oprogramowanie dla ochrony zdrowia, które projekt opisuje jako "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics". Na konsultowanej stronie wymienia wdrożenia szpitalne i ministerialne, a stomatologii nie wymienia wcale, więc Estomed nie zastępuje niezależnie od licencji.
- **Dentalpin.** Nasz, i dlatego stoi w osobnej sekcji oraz w tabeli, gdzie można go sprawdzić wiersz po wierszu.

> **"In version 24.4, the Open Dental license changed from open source GPL to proprietary."** To zdanie Open Dental z ich własnej strony licencji. Dodają, że zmiana nie dotknęła klientów i objęła tylko tych, którzy kompilowali kod źródłowy. Produkt jest dobry, alternatywą open source już nie jest, i to jest najlepszy argument za tym, żeby licencję sprawdzać samodzielnie, a nie pamiętać ją sprzed dwóch lat.

## Czym jest Dentalpin

Program do zarządzania gabinetem stomatologicznym wydany na Business Source License 1.1, która cztery lata po publikacji każdego wydania zmienia się automatycznie w Apache License 2.0. Pobierasz kod, stawiasz go przez `docker compose` tam, gdzie chcesz, i nie płacisz licencji za stanowisko, za fotel ani za lekarza.

Po stronie klinicznej jest pełny cykl: kalendarz wizyt, kartoteka, diagram zębowy, periodontogram, dokumentacja medyczna, plany leczenia, kosztorysy z podpisem, faktury, płatności, zapraszanie na wizyty kontrolne i raporty. Jest też asystent AI wykonujący te same operacje co interfejs, w granicach uprawnień użytkownika. Nie ma wariantów: moduły są wszystkie.

Czego w Polsce dziś **nie** ma, piszemy tutaj, a nie na końcu: żadnej e-Recepty, żadnego e-skierowania, żadnego EDM w P1, żadnej obsługi umowy z NFZ, a interfejs istnieje po angielsku i hiszpańsku, ale nie po polsku. Tłumaczenie jest otwarte jako wkład społeczności, lecz dziś nie jest wydane.

To produkt z 2026 roku i widać to. Ma znaczenie i wracamy do tego w tabeli.

![Plan leczenia w Dentalpin podzielony na etapy, z zabiegami przypisanymi do każdego etapu](/screenshots/treatment-plan.png)

*Plan leczenia rozbity na etapy, każdy z własnymi zabiegami i własną kwotą.*

## Zestawienie

Tylko wiersze, które da się sprawdzić. Tam, gdzie nie ma danych publicznych, tak jest napisane.

| | Estomed | Dentalpin |
|---|---|---|
| Licencja | Komercyjna, dożywotnia za stanowisko | Open source (BSL 1.1 → Apache 2.0 po 4 latach) |
| Kod źródłowy | ✗ Nieopublikowany | ✓ W całości na GitHubie |
| Opublikowany cennik | ✓ Pełny, trzy warianty | ✓ 0 zł, wszystko w komplecie |
| Opłata za stanowisko | ✗ 2000-3000 zł za każde | ✓ Brak |
| Abonament miesięczny | ✗ 73-94 zł przy umowie na 12 miesięcy | ✓ Nie ma abonamentu |
| e-Recepta i e-skierowanie | ✓ W wariancie Basic | ✗ Brak |
| EDM/P1 | ✓ W wariancie Basic | ✗ Brak |
| Periodontogram | ✓ Panel periodontologiczny w Basic | ✓ Tak |
| Lata na rynku | ✓ Od 2003 | ✗ Od 2026 |
| Gabinety korzystające | ✓ Ponad 3500 deklarowanych | ✗ Na razie bardzo niewiele |
| Interfejs po polsku | ✓ Tak | ✗ Nie, dziś angielski i hiszpański |
| Wsparcie po polsku | ✓ Tak, w abonamencie serwisowym | ~ Społeczność w GitHub Discussions |
| Serwis poza abonamentem | ✗ 500 zł brutto za rozpoczętą godzinę | ✓ Nie dotyczy |
| Publiczne API | ✗ Na estomed.pl brak dokumentacji dla programistów | ✓ REST z OpenAPI |
| Gdzie mieszkają dane | Na twoim sprzęcie, moduły online u dostawcy | ✓ Tam, gdzie zdecydujesz |

Sześć środkowych wierszy należy do nich i nie ma uczciwego sposobu, żeby je zamaskować. Produkt z 3500 gabinetami za sobą rozwiązał już problemy, o których my jeszcze nie wiemy, że istnieją.

## Wybierz Estomed, jeśli

- **Wystawiasz e-Recepty i e-skierowania.** Estomed ma je w najtańszym wariancie, żadna opcja open source z tej strony nie ma ich wcale. Ten jeden punkt kończy wybór dla większości gabinetów w Polsce.
- **Prowadzisz EDM zgodnie z P1.** To samo: pozycja "EDM/P1" stoi w ich cenniku, u nas nie ma jej w żadnej postaci.
- **Potrzebujesz polskiego interfejsu dzisiaj.** Nasz nim nie jest, a owijanie tego w bawełnę niczego nie zmienia. Z opcji open source polski deklaruje tylko Apexo.
- **Chcesz mieć do kogo zadzwonić po polsku**, kiedy program stanie we wtorek rano. Wsparcie w abonamencie serwisowym jest realną różnicą, której żadna licencja nie nadrabia.
- **Wolisz kupić raz, niż płacić bez końca.** Licencja dożywotnia jest realną alternatywą wobec modelu abonamentowego i w Polsce wciąż wielu ją wybiera.
- **Nie masz profilu technicznego i nie chcesz go mieć.** Opcje open source z tej strony hostuje się samodzielnie: ktoś musi zająć się serwerem i kopiami zapasowymi.

Jeśli trzy z tych sześciu punktów cię dotyczą, uczciwa odpowiedź brzmi Estomed.

![Kalendarz wizyt w Dentalpin w widoku tygodnia, z wizytami rozłożonymi na poszczególne dni](/screenshots/schedule-week.png)

*Widok tygodnia w kalendarzu wizyt, z obłożeniem każdego dnia na jednym ekranie.*

## Wybierz rozwiązanie open source, jeśli

- **Martwi cię, co stanie się z twoimi danymi w dniu, w którym zmienią się warunki.** Licencja jest jedyną rzeczą, która pozwala zachować kod, a przypadek Open Dental pokazuje, że licencje się zmieniają.
- **Chcesz móc zaudytować program**, który przechowuje dokumentację medyczną, sam albo cudzymi rękami.
- **Nie chcesz płacić za każde stanowisko.** Dołożenie komputera w rejestracji nie powinno kosztować dwóch tysięcy złotych.
- **Masz Maki albo Linuksa.** U nas liczy się przeglądarka, nie system na stanowisku.
- **Chcesz integrować się przez API**, a nie przez zamknięty moduł.

Wśród żywych opcji dentystycznych Apexo wypada lepiej, jeśli szukasz czegoś minimalnego i offline do małego gabinetu, zwłaszcza że ma polski interfejs. Dentalpin wypada lepiej, jeśli potrzebujesz pełnego cyklu klinicznego z periodontogramem i planami leczenia. Warunki obu naszych wariantów są na stronie [cennik](/pl/cennik/), a wybór między własnym serwerem a chmurą rozbieramy w [osobnym poradniku](/pl/blog/chmura-czy-wlasny-serwer-w-gabinecie-stomatologicznym/).

## Jak wyglądałaby migracja z Estomed

1. **Poproś Estomed o pełny eksport przed wypowiedzeniem czegokolwiek**: pacjenci, dokumentacja medyczna, kosztorysy, faktury z ich numeracją, zdjęcia i katalog zabiegów. Poproś na piśmie i zobacz, w jakim formacie to przyjdzie.
2. **Postaw Dentalpin w środowisku testowym**, nie na tym, na którym chcesz potem pracować.
3. **Wgraj eksport do modułu importu** (`migration_import`). Pokaże podgląd z liczbami i przykładowymi wierszami, zanim cokolwiek zapisze do bazy.
4. **Sprawdź dopasowanie zabiegów wiersz po wierszu.** To, co przekracza 0,9 podobieństwa, przyjmuje się hurtem, o reszcie decydujesz ty: przyjąć, przepiąć, utworzyć nowy albo pominąć.
5. **Porównaj liczby w obu systemach**: pacjenci, faktury, przyszłe wizyty. Jeśli się nie zgadzają, problem jest teraz, a nie za pół roku.
6. **Zostaw stary system w trybie do odczytu**, dopóki nie masz pewności, i rozstrzygnij, czym będziesz wystawiać e-Recepty, zanim go wyłączysz.

> **Krok czwarty jest tym, na którym wykłada się większość migracji.** Dwa gabinety nigdy nie kodują zabiegów tak samo, a po cichu zgadnięte dopasowanie daje źle wystawione faktury, których nikt nie zauważa przez kilka miesięcy. Całą drogę opisujemy w [poradniku o zmianie programu](/pl/blog/zmiana-programu-stomatologicznego/).

## Źródła

Wszystkie konsultowane 2 września 2026 roku:

- [Estomed · Cennik](https://estomed.pl/cennik/): warianty Basic, Ultimate i Gold, ceny za stanowisko i abonamenty, pełna lista pozycji wariantu Basic, przypisy o licencji dożywotniej i umowie na 12 miesięcy, stawka serwisowa 500 zł brutto za rozpoczętą godzinę.
- [O nas · Estomed](https://estomed.pl/o-nas/): rok 2003, ponad 3500 gabinetów, ponad 20 lat na rynku, dane spółki Estomed Sp. z o.o., ul. Hynka 32, Gdańsk.
- [Moduły · Estomed](https://estomed.pl/moduly/): lista modułów i integracji zewnętrznych, w tym panel periodontologiczny, EDM i moduł sterylizacji.
- [Apexo](https://apexo.app/): licencja GNU GPLv3, opis offline-first, funkcje i deklarowane języki "EN, AR, ES, PL, KU".
- [Apexo · repozytorium](https://github.com/elselawi/apexo): GNU General Public License v3.0 i opis projektu.
- [OpenMolar](https://openmolar.com/): licencja GPLv3 oraz deklarowany stan obu gałęzi projektu.
- [Open Dental · License](https://www.opendental.com/site/license.html): zmiana z GPL na licencję zamkniętą w wersji 24.4.
- [Open Dental · Order](https://www.opendental.com/site/order.html): 199 dolarów miesięcznie za lokalizację i co obejmuje.
- [GNU Health](https://www.gnuhealth.org/): opis projektu i jego zakres.
- [Licencja Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE): Business Source License 1.1, zmiana na Apache License 2.0 cztery lata po publikacji, oraz [kod źródłowy](https://github.com/martinezsalmeron/dentalpin).

Widzisz tu coś błędnego albo nieaktualnego? [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions), a poprawimy. Dotyczy to również osób z Estomed, Apexo i Open Dental.
