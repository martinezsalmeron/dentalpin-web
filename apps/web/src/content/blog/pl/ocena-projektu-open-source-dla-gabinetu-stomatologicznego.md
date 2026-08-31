---
title: "Jak ocenić projekt open source, zanim powierzysz mu gabinet stomatologiczny"
description: "Pięć publicznych sprawdzeń, czy projekt open source wytrzyma dziesięć lat w gabinecie: utrzymanie, ludzie, bezpieczeństwo, licencja i wyjście z systemu."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, ocena, bezpieczenstwo, licencje, umowa]
---

Sprawdź pięć rzeczy, w tej kolejności: czy projekt jest utrzymywany, ile osób naprawdę go utrzymuje, co się dzieje w dniu, w którym ktoś znajdzie lukę bezpieczeństwa, co dokładnie mówi licencja i jak się z niego wychodzi. Wszystkie pięć da się sprawdzić z publicznych stron w jedno popołudnie, a cztery mają za sobą opublikowany standard, więc progu nie ustalasz ty.

To, że kod jest publiczny, nie jest odpowiedzią. To jest to, co pozwala ci zadać pytania, a prawie nikt ich nie zadaje.

> **Typowy błąd to ocenianie produktu zamiast projektu.** Każda prezentacja wygląda dobrze. O tym, czy za sześć lat nadal będziesz mieć program otwierający dokumentację medyczną, decyduje to, kto go utrzymuje, w jakim rytmie i co robi, gdy pojawia się błąd.

## Pięć sprawdzeń i miejsca, w których się je robi

Żadne z nich nie wymaga rozmowy z handlowcem. Wszystkie wynikają z publicznego repozytorium projektu i z dwóch bezpłatnych serwisów, które oceniają to, co tam znajdą.

| Sprawdzenie | Czego szukasz | Sygnał ostrzegawczy |
|---|---|---|
| Utrzymanie | ✓ Regularne, świeże commity i wydania | ✗ Miesiące ciszy i wydanie sprzed dwóch lat |
| Ludzie | ✓ Kilka osób może publikować | ✗ Jedna osoba podpisuje prawie wszystko |
| Bezpieczeństwo | ✓ Plik `SECURITY.md` z kontaktem | ✗ Brak miejsca na zgłoszenie luki |
| Licencja | ✓ Nazwa figuruje na liście OSI | ✗ „Licencja własna", bez opublikowanego tekstu |
| Wyjście | ✓ Udokumentowany eksport i standardowa baza danych | ✗ Zamknięty, nieudokumentowany format |

## 1. „Utrzymywany" ma definicję, i nie jest to twoja definicja

OpenSSF publikuje Scorecard, narzędzie, które analizuje repozytorium i ocenia każdy aspekt w skali od 0 do 10. Sprawdzenie *Maintained* jest najbardziej przydatne z dziewiętnastu, bo zamienia wrażenie w próg.

Za najwyższą ocenę wymaga **co najmniej jednego commita tygodniowo przez poprzednie 90 dni** i ocenia wyłącznie projekty starsze niż 90 dni. To jest poprzeczka i jest opublikowana.

Już samo to pozwala otworzyć dowolne repozytorium i zobaczyć, po której stronie leży:

- **Data ostatniego commita** mówi, czy ktoś tknął kod w tym miesiącu, czy w zeszłym roku.
- **Rytm wydań** znaczy więcej niż ich liczba. Dwanaście wersji w rok i nic od czternastu miesięcy to projekt stojący, a nie stabilny.
- **Otwarte zgłoszenia bez odpowiedzi** są najuczciwszym sygnałem ze wszystkich. Zdrowy projekt nie ma zera zgłoszeń, ma zgłoszenia, na które ktoś odpowiada.

## 2. Ile osób naprawdę go dźwiga

Projekt z tysiącem gwiazdek i jednym autorem jest projektem jednej osoby. Społeczność CHAOSS, działająca w ramach Linux Foundation, ma wskaźnik dokładnie do tego.

Nazywa się *Contributor Absence Factor*, wcześniej znany jako *Bus Factor*, i odpowiada na proste pytanie: „Jak duże jest ryzyko dla projektu, jeśli odejdą najbardziej aktywne osoby?" Liczy się go jako najmniejszą liczbę współtwórców odpowiadających za 50% wszystkich wkładów.

Jeśli ta liczba wynosi jeden, odpowiedź brzmi: ryzyko bierzesz na siebie ty.

> **Współczynnik równy jeden nie dyskwalifikuje projektu, ale zmienia umowę, której potrzebujesz.** Jeśli masz go uruchomić w gabinecie, potrzebujesz albo firmy, która odbiera telefon, albo zaufanego informatyka, który ten kod już przeczytał.

![Karta pacjenta z alertami klinicznymi, aktywnym planem leczenia i osią czasu filtrowaną według wizyt, zabiegów, płatności i komunikacji](/screenshots/patient-timeline.png)

*Lata dokumentacji medycznej w jednym programie. To właśnie zależy od tego, czy projekt będzie żył za sześć lat.*

## 3. Co się dzieje w dniu, w którym ktoś znajdzie lukę

To sprawdzenie pomija najwięcej osób, a robi się je najszybciej. Poszukaj w repozytorium pliku `SECURITY.md`: właśnie tego szuka sprawdzenie *Security-Policy* w Scorecard, a jego brak oznacza, że ten, kto znajdzie lukę, nie ma jej gdzie zgłosić.

OpenSSF Best Practices Badge nadaje temu, co dzieje się dalej, konkretne liczby. Wśród jego kryteriów poziomu *passing*: początkowy czas reakcji projektu na jakiekolwiek zgłoszenie podatności otrzymane w ciągu ostatnich 6 miesięcy MUSI wynosić 14 dni lub mniej. Wymaga też, by informacje o wydaniu wskazywały każdą znaną publicznie naprawioną podatność, której przypisano już numer CVE.

Projekt, który publikuje tę odznakę, zobowiązał się do tego na piśmie. Projekt, który jej nie publikuje, może robić to samo, ale sprawdzić to musisz sam w historii wydań.

> **To przestało być dobrą wolą, a stało się prawem europejskim.** Rozporządzenie (UE) 2024/2847, akt o cyberodporności, weszło w życie 10 grudnia 2024 roku. Obowiązki zgłaszania aktywnie wykorzystywanych podatności obowiązują **od 11 września 2026 roku**, a większość rozporządzenia od 11 grudnia 2027 roku.

To rozporządzenie nie obciąża ciebie jako gabinetu: obciąża tego, kto wytwarza lub dostarcza produkt. Tworzy jednak rolę, którą warto znać: organizacji trwale wspierających oprogramowanie open source, które tekst angielski nazywa *open-source software steward*. Jego artykuł 24 wymaga od nich pojedynczego punktu kontaktowego do przyjmowania zgłoszeń podatności oraz polityki skoordynowanego ujawniania.

W przełożeniu na twoją ocenę: od września 2026 poważny europejski projekt ma adres, pod którym zgłasza się luki, bo wymaga tego prawo. Jeśli go nie ma, właśnie się czegoś o nim dowiedziałeś. To nie jest porada prawna.

## 4. Licencja, w dwie minuty

Open Source Initiative utrzymuje wzorcową definicję, opartą na dziesięciu ponumerowanych kryteriach, i publikuje listę zatwierdzonych licencji pod adresem `opensource.org/licenses`.

Sprawdzenie jest dosłowne: poszukaj dokładnej nazwy licencji na tej liście. GPL, AGPL, Apache 2.0 i MIT tam są. Licencje typu *source available* nie, co nie czyni ich złymi, tylko czyni je inną kategorią.

Co licencja rozstrzyga, a czego nie, to temat na osobny artykuł i znajdziesz go w tekście o [wolnym i zamkniętym oprogramowaniu w ochronie zdrowia](/pl/blog/wolne-oprogramowanie-w-ochronie-zdrowia/). Do tej oceny wystarczy jedna zasada: jeśli projekt nie publikuje tekstu swojej licencji, nie skończyłeś patrzeć, skończyłeś go oceniać.

## 5. Jak się z niego wychodzi

Projekt open source, z którego nie da się wyjść, ma ten sam problem co zamknięty, tylko z większą liczbą kroków.

1. **Znajdź dokumentację eksportu**, zanim cokolwiek zainstalujesz. Jeśli istnieje, jest w repozytorium, a nie w mailu od handlowca.
2. **Sprawdź silnik bazy danych.** PostgreSQL albo MySQL oznaczają, że każdy kompetentny informatyk odczyta twoje dane, nie prosząc nikogo o zgodę.
3. **Zrób kopię pierwszego dnia**, a nie w dniu, w którym chcesz odejść. Eksport, którego nigdy nie testowałeś, nie jest eksportem.
4. **Przeczytaj, co kopia zabiera, a co zostawia.** Zdjęcia RTG i załączone dokumenty zwykle leżą poza bazą danych i zwykle to właśnie ich brakuje.

Jakiego formatu żądać, opisuje tekst o [eksporcie danych](/pl/blog/eksport-danych-z-programu-stomatologicznego/).

## Jak to ocenić, nie będąc informatykiem

Oba wymienione narzędzia są publiczne i bezpłatne, i oba można uruchomić na cudzym projekcie:

- **OpenSSF Scorecard** analizuje repozytorium i zwraca dziewiętnaście sprawdzeń ocenionych od 0 do 10, w tym *Maintained*, *Security-Policy*, *Code-Review*, *License* i *Vulnerabilities*, które zestawia kod z bazą znanych podatności OSV.
- **OpenSSF Best Practices Badge** to publiczna samoocena samego projektu, podzielona na sześć bloków: podstawy, kontrola zmian, zgłaszanie problemów, jakość, bezpieczeństwo i analiza.

Oba mierzą proces, czyli dokładnie to, czego nie widać na prezentacji. Żadne nie mierzy, czy program nadaje się do gabinetu stomatologicznego, a pomylenie tych dwóch rzeczy kończy się instalacją wzorowego projektu bez diagramu zębowego.

## Dwa tygodnie na prawdziwych danych, przed decyzją

Żaden wskaźnik tego nie zastąpi, a jest to najtańsza pozycja na liście.

1. **Zainstaluj go na maszynie, która nie jest produkcyjna.** Stary laptop albo serwer za dwadzieścia złotych miesięcznie wystarczą, by sprawdzić, czy projekt instaluje się tak, jak opisuje jego dokumentacja.
2. **Wprowadź dwudziestu prawdziwych pacjentów**, z ich zabiegami i kosztorysami. Dwadzieścia prawdziwych kart uczy więcej niż dwieście wymyślonych.
3. **Przepracuj równolegle jeden pełny dzień.** Wizyta, przyjęcie, wpis do dokumentacji, kosztorys, płatność. Jeśli w tym łańcuchu czegoś brakuje, wyjdzie to tutaj.
4. **Załóż zgłoszenie z prawdziwym pytaniem** i policz dni do odpowiedzi. To jedyny sposób na sprawdzenie punktu 3 bez czekania na realny problem.
5. **Wyeksportuj wszystko i usuń.** Jeśli wyjście działa przy dwudziestu pacjentach, zadziała przy dwóch tysiącach.

![Ekran startowy z dzisiejszymi wizytami, informacją o tym, kto jest w gabinecie, zaległymi płatnościami i osią czasu dnia](/screenshots/home.png)

*Ekran, na którym zespół pracuje każdego ranka. Dwa tygodnie realnego użycia powiedzą o nim to, czego nie powie żadna punktacja.*

## Czego żaden z tych wskaźników nie powie

Warto wiedzieć, gdzie ta metoda się kończy.

- **Czy projekt pasuje do twojego sposobu pracy.** Odpowiada na to wyłącznie dwutygodniowy test.
- **Czy kod jest bezpieczny.** Publiczny kod jest możliwy do audytu, a nie zaudytowany. To dwie różne rzeczy i tylko druga kogoś chroni.
- **Kto odpowiada w świetle RODO.** To nadal ty, niezależnie od używanego oprogramowania.
- **Czy w piątek po południu ktoś odbierze telefon.** O tym decyduje umowa serwisowa, a te istnieją zarówno przy wolnym, jak i przy zamkniętym oprogramowaniu.

Dentalpin jest jednym z projektów, które można przepuścić przez tę listę: kod jest publiczny, licencją jest BSL 1.1, której nie ma na liście OSI i warto to powiedzieć wprost, bazą danych jest PostgreSQL, a [cennik](/pl/cennik/) jest opublikowany. Zastosuj wobec niego te pięć sprawdzeń przed instalacją, tak samo jak wobec każdego innego.

## Źródła

- OpenSSF Scorecard, repozytorium i dokumentacja sprawdzeń, `github.com/ossf/scorecard` oraz `docs/checks.md` (dostęp 31 sierpnia 2026).
- OpenSSF Best Practices Badge, kryteria poziomu *passing*, `bestpractices.dev/en/criteria/0` (dostęp 31 sierpnia 2026).
- CHAOSS, wskaźnik *Contributor Absence Factor*, `chaoss.community` (dostęp 31 sierpnia 2026).
- Open Source Initiative, *The Open Source Definition* i lista zatwierdzonych licencji, `opensource.org/osd` oraz `opensource.org/licenses` (dostęp 31 sierpnia 2026).
- Rozporządzenie (UE) 2024/2847 (akt o cyberodporności), tekst w EUR-Lex i oficjalna strona Komisji Europejskiej o jego stosowaniu, `digital-strategy.ec.europa.eu` (dostęp 31 sierpnia 2026).
