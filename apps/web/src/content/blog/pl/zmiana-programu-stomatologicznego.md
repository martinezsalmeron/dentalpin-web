---
title: "Zmiana programu stomatologicznego bez utraty dokumentacji medycznej"
description: "Jak zmienić program stomatologiczny bez utraty dokumentacji medycznej i faktur: co wyeksportować, jak przetestować import i gdzie zawodzi większość migracji."
pubDate: 2026-07-30
translationKey: migrar-software-dental
tags: [migracja, program-stomatologiczny, dokumentacja-medyczna]
---

Migracja bez strat sprowadza się do trzech zasad: wyeksportuj wszystko, zanim wypowiesz starą umowę, i to w formacie, który otworzysz bez tamtego programu. Przetestuj import na kopii, zanim dotkniesz danych prawdziwego gabinetu. I nie przyjmuj żadnego automatycznego dopasowania katalogów zabiegów, dopóki nie sprawdzisz go wiersz po wierszu. Kto traci dane, prawie zawsze pominął pierwszą zasadę, ufając, że „nowy dostawca się tym zajmie”.

Nie trzeba być technikiem, żeby zrobić to dobrze. Trzeba to zrobić w tej kolejności.

## Zanim cokolwiek ruszysz: wyeksportuj i sprawdź

Poproś dostawcę, którego zostawiasz, o pełny eksport, a nie o wybór tego, co on uzna za istotne. To minimum musi wyjść z jego systemu i trafić do twojego w otwartym formacie (CSV, XML albo baza danych, którą odczytasz bez licencji):

- **Pełna karta pacjenta**: dane kontaktowe, podpisane zgody i data założenia karty.
- **Dokumentacja medyczna i diagram zębowy**, z datą każdego wpisu, a nie tylko stan na dziś.
- **Kosztorysy i faktury**, z oryginalną numeracją. Luka w numeracji to pierwsza rzecz, która rzuca się w oczy podczas kontroli.
- **Zdjęcia i zdjęcia rentgenowskie**, które prawie zawsze leżą poza główną bazą danych i pamięta się o nich ostatniego dnia.
- **Katalog zabiegów** dokładnie tak, jak jest zakodowany w starym systemie, a nie same nazwy widoczne na ekranie.
- **Historyczny kalendarz wizyt**, jeśli będziesz musiał później wykazać obecności i nieobecności.

![Aktywność pacjenta w Dentalpin: zaplanowana wizyta, utworzony plan leczenia, odbyta wizyta i wykonany zabieg, każdy wiersz z datą](/screenshots/patient-timeline.png)

*To właśnie eksport musi zachować: każdy wpis ze swoją datą, a nie tylko stan na dziś.*

> **Eksport to twoja siatka bezpieczeństwa, a nie formalność przy pożegnaniu.** Poproś o niego na kilka tygodni przed podpisaniem umowy z nowym dostawcą, otwórz go i sprawdź samodzielnie. Jeśli dostawca, którego zostawiasz, utrudnia wydanie kompletu danych, to jest informacja o tym, jak traktuje twoje dane, i masz ją, zanim odejdziesz.

## Etap, na którym zawodzi większość migracji

Dwa gabinety prawie nigdy nie kodują zabiegów tak samo. Jeden nazywa „leczeniem kanałowym” to, co drugi dzieli na trzy pozycje w zależności od zęba i liczby kanałów. Kiedy nowy program próbuje automatycznie zestawić stary katalog ze swoim, część wierszy pasuje w sposób oczywisty, a część nie.

Błędem nie jest to, że dopasowanie się myli. Błędem jest przyjęcie wątpliwego dopasowania bez spojrzenia na nie.

> **Po cichu zgadnięte dopasowanie tworzy źle wystawione faktury, których nikt nie zauważa przez wiele miesięcy.** To nie jest usterka programu, tylko błąd procesu: jeśli nikt nie sprawdzi wiersz po wierszu tego, co system proponuje, błąd dziedziczy każdy pacjent, u którego ten zabieg pojawi się od teraz.

Zanim zaakceptujesz import masowy, poproś o pokazanie proponowanego dopasowania z licznikami: ilu pacjentów, ile pozycji w kosztorysach i ile faktur zależy od każdego zabiegu, który ma zostać przypisany na nowo.

## Jak to przetestować bez ryzyka dla gabinetu

1. **Wygeneruj pełny eksport** ze starego systemu i odłóż go osobno, poza oboma systemami, zanim cokolwiek zainstalujesz.
2. **Uruchom import w środowisku testowym**, a nie na danych produkcyjnych nowego systemu.
3. **Porównaj liczby**: pacjentów, kosztorysów, faktur i przyszłych wizyt. Jeśli się nie zgadzają, zatrzymaj się w tym miejscu.
4. **Popracuj kilka tygodni równolegle**, jeśli wielkość gabinetu na to pozwala: fakturuj dalej w starym systemie, sprawdzając, czy nowy pokazuje to samo.
5. **Zamroź stary system w trybie tylko do odczytu**, kiedy zaufasz nowemu. Nie kasuj go i nie wypowiadaj jeszcze abonamentu.

## Czego wymagać od obecnego dostawcy

- **Pełnego eksportu, a nie API ograniczonego do tego, co dostawca chce pokazać.**
- **Otwartego i udokumentowanego formatu**, żeby odbierający nie musiał zgadywać, co oznacza każde pole.
- **Rozsądnego terminu**, a nie groźby usunięcia danych kilka dni po wypowiedzeniu umowy.
- **Zdjęć w oryginalnej rozdzielczości**, a nie skompresowanych miniatur.

Potwierdź też w swojej okręgowej izbie lekarskiej albo u swojego doradcy, jakie okresy przechowywania dokumentacji medycznej obowiązują w twoim przypadku. To nie jest pole, na którym przyjmuje się liczbę bez sprawdzenia jej u źródła.

## Lista kontrolna przed podpisaniem umowy z nowym dostawcą

| Co sprawdzić | Dlaczego to ważne |
|---|---|
| Format eksportu, który wydaje obecny dostawca | Decyduje o tym, czy potrzebujesz narzędzia pośredniego, czy zaimportujesz dane bezpośrednio |
| Czy nowy system pokazuje podgląd, zanim cokolwiek zapisze | Bez podglądu błąd dopasowania zostaje zastosowany, zanim go zobaczysz |
| Czy dopasowanie zabiegów sprawdza się wiersz po wierszu, czy tylko zbiorczo | Tryb zbiorczy jest szybki i to właśnie tam wkrada się błąd |
| Czy zdjęcia migrują razem z kartą, czy osobno | Osobno oznacza, że ktoś musi je potem powiązać ręcznie |
| Czy możesz zachować stary system w trybie tylko do odczytu | Bez tego nie będziesz miał do czego porównać, jeśli coś później nie zagra |

![Lista faktur z kolejną numeracją od FAC-2026-0001 do FAC-2026-0008 oraz statusem płatności każdej z nich](/screenshots/invoices.png)

*Numeracja musi trafić do nowego systemu w całości. Lukę widać z zewnątrz jako pierwszą.*

W Dentalpin rozwiązaliśmy to modułem importu (`migration_import`), który przechodzi przez te same cztery etapy co ten przewodnik: wgrywasz plik, oglądasz podgląd z licznikami, zanim cokolwiek zostanie zapisane, sprawdzasz dopasowanie katalogu zabiegów wiersz po wierszu (to, co osiąga pewność co najmniej 0,9, możesz przyjąć zbiorczo, a próg da się obniżyć; o reszcie decydujesz sam) i dopiero wtedy uruchamiasz import. Cały przepływ jest udokumentowany w [dental-bridge](https://github.com/dentaltix/dental-bridge), a co ile kosztuje, sprawdzisz w [cenniku](/pl/cennik/).

Trafiłeś na etap migracji, którego tutaj brakuje? [Napisz o tym](https://github.com/martinezsalmeron/dentalpin/discussions), a go dopiszemy.
