---
title: "Kopie zapasowe w gabinecie stomatologicznym: co zapisywać i jak często"
description: "Co musi trafić do kopii zapasowej gabinetu stomatologicznego, jak często ją robić, gdzie trzymać kopie i jak sprawdzić, że odtworzenie naprawdę działa."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [kopie-zapasowe, bezpieczenstwo, rodo, zarzadzanie-gabinetem]
---

Kopiuj bazę danych i załączone pliki codziennie, trzymaj trzy kopie na dwóch różnych nośnikach, w tym jedną poza gabinetem, i przynajmniej raz w roku odtwórz jedną z nich, żeby sprawdzić, że działa. Jeśli nikt nigdy nie odtwarzał kopii, nie masz kopii zapasowej. Masz plik, o którym zakładasz, że jest dobry.

Poniżej jest to, co wchodzi do takiej kopii, jak często ma to sens i jak to sprawdzić, nie opierając się na zapewnieniach przez telefon.

## Co wchodzi do kopii, a co prawie zawsze zostaje poza nią

Gabinet stomatologiczny nie trzyma danych w jednym miejscu, tylko w dwóch. W bazie danych są pacjenci, kalendarz wizyt, diagram zębowy, plany leczenia, kosztorysy i faktury. Zdjęcia RTG, podpisane pliki PDF i skany żyją jako pliki, często w innym katalogu albo w innej usłudze.

Kopia obejmująca tylko bazę danych wygląda na kompletną aż do dnia, w którym ją odtworzysz i okaże się, że nie ma zdjęć RTG.

| Co zapisywać | Dlaczego to ważne | Domyślnie w kopii? |
|---|---|---|
| Baza danych | Pacjenci, kalendarz wizyt, diagram zębowy, kosztorysy, rozliczenia | ✓ Prawie zawsze |
| Zdjęcia RTG i zdjęcia kliniczne | Są częścią dokumentacji medycznej i zajmują niemal całe miejsce | ✗ Często pomijane ze względu na rozmiar |
| Zgody i podpisane dokumenty | To dowód, że zgoda została udzielona | ~ Zależy, gdzie program je przechowuje |
| Konfiguracja systemu | Bez niej odtworzenie trwa o wiele dłużej | ✗ Prawie nigdy |
| Klucze i certyfikaty do fakturowania | Bez nich nie wystawisz dokumentów ponownie | ✗ Prawie nigdy |

> **Zanim zaufasz kopii, sprawdź jej rozmiar.** Pięć lat zdjęć RTG nie mieści się w archiwum o wielkości 200 MB. Jeśli dzisiejsza nocna kopia waży znacznie mniej niż twoje dane, coś jest pomijane, i już wiesz co.

![Dokumentacja pacjenta z diagramem zębowym, ostrzeżeniami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*To musi wrócić w całości po odtworzeniu kopii, a nie sama lista pacjentów.*

## Jak często: prawdziwe pytanie brzmi, ile pracy możesz stracić

Częstotliwości nie ustala się z przyzwyczajenia, tylko na podstawie tego, ile pracy jesteś gotów wykonać drugi raz. Między ostatnią kopią a awarią zostaje luka, którą ktoś wypełnia ręcznie, z pamięci.

| Częstotliwość | Strata w najgorszym razie | Dla kogo ma sens |
|---|---|---|
| Raz w tygodniu | Nawet sześć dni dokumentacji i płatności | ✗ Za mało dla każdego działającego gabinetu |
| Codziennie, w nocy | Jeden dzień pracy | ~ Rozsądne minimum |
| Co kilka godzin | Pół przedpołudnia | ✓ Gabinety z kilkoma fotelami i dużym obłożeniem |
| Ciągła | Minuty | ✓ Jeśli dostawca oferuje to bez dodatkowej pracy |

Przelicz tę lukę na pieniądze. Fotele razy godziny razy średni przychód to rachunek, który zamienia tę decyzję w porównanie ekonomiczne, a nie w kwestię gustu.

## Zasada 3-2-1 i dlaczego kopia w tym samym pomieszczeniu się nie liczy

Amerykańska agencja cyberbezpieczeństwa CISA streszcza przyjętą praktykę w trzech liczbach: trzy kopie każdego ważnego pliku (jedna podstawowa i dwie zapasowe), na dwóch różnych nośnikach, przy czym jedna kopia przechowywana poza siedzibą.

- **Trzy kopie**, bo druga też się psuje. Dysk kupiony tego samego dnia co oryginał zwykle umiera w tym samym okresie.
- **Dwa różne nośniki**, bo ta sama awaria zabiera dwa identyczne urządzenia naraz, od błędu oprogramowania układowego po przepięcie.
- **Jedna kopia poza gabinetem**, bo kradzież, pożar albo zalanie zabierają jednocześnie serwer i dysk USB z szuflady obok.
- **Jedna kopia offline albo niezmienialna**, bo ransomware szyfruje wszystko, do czego zainfekowany komputer ma prawo zapisu, łącznie z dyskiem na kopie, który jest stale podłączony.

| | Dysk USB w gabinecie | NAS w gabinecie | Szyfrowana kopia poza gabinetem |
|---|---|---|---|
| Awaria dysku głównego | ✓ Chroni | ✓ Chroni | ✓ Chroni |
| Kradzież lub pożar | ✗ Ginie razem z oryginałem | ✗ Ginie razem z oryginałem | ✓ Chroni |
| Ransomware | ~ Tylko jeśli był odłączony | ✗ Zwykle zostaje zaszyfrowany | ✓ Jeśli jest niezmienialna lub wersjonowana |
| Praca co miesiąc | Wymiana i wynoszenie dysku | Sprawdzenie, czy nadal kopiuje | ✓ Żadna po zautomatyzowaniu |

## Czego wymaga prawo i jak długo to musi wytrzymać

RODO nie mówi o dyskach, mówi o przywracaniu. Artykuł 32 ust. 1 lit. c wymaga zdolności do szybkiego przywrócenia dostępności danych osobowych i dostępu do nich w razie incydentu fizycznego lub technicznego, a lit. d wymaga regularnego testowania i oceny skuteczności tych środków. Kopia, której nikt nie sprawdził, nie spełnia żadnego z tych wymogów.

Do tego dochodzi okres przechowywania. Zgodnie z art. 29 ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta dokumentacja medyczna jest przechowywana przez 20 lat, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu, z wyjątkami przewidzianymi w tym przepisie. Twoja strategia kopii musi wytrzymać ten okres, także wtedy, gdy po drodze zmienisz program.

> **Przechowywanie przez dwadzieścia lat to nie to samo co dwadzieścia lat kopii zapasowych.** To dwa różne obowiązki: kopia pozwala wrócić do pracy po awarii, archiwum pozwala odpowiedzieć pacjentowi albo kontroli za dwanaście lat. Program, który odtwarza tylko ostatni miesiąc, nie pokrywa tego drugiego.

![Lista faktur ze statusami wystawiona, opłacona, opłacona częściowo, przeterminowana i wersja robocza](/screenshots/invoices.png)

*Rozliczenia mają własne okresy przechowywania i też muszą przetrwać odtworzenie kopii.*

## Próba odtworzenia, krok po kroku

To pół godziny w roku i jedyna rzecz, która odróżnia kopię zapasową od katalogu z dużymi plikami.

1. **Wybierz kopię losowo**, nie tę z ostatniej nocy. Ta sprzed trzech tygodni mówi znacznie więcej o tym, czy proces działa trwale.
2. **Odtwórz ją na innym komputerze lub serwerze**, nigdy na działającym systemie.
3. **Zmierz czas** od startu do chwili, w której otwiera się jutrzejszy kalendarz wizyt. Ta liczba to twój realny czas powrotu do pracy i prawie zawsze zaskakuje.
4. **Otwórz trzech konkretnych pacjentów** i sprawdź, czy są diagram zębowy, zdjęcia RTG i ostatni kosztorys.
5. **Sprawdź rozliczenia z ostatniego kwartału**, bo to część, na którą nikt nie patrzy, dopóki nie zniknie.
6. **Zapisz datę, czas trwania i kto to zrobił.** Ten zapis jest zarazem twoim dowodem staranności wobec artykułu 32.

## Błędy, które sprowadzają kopię do zera

- **Nikt nie czyta komunikatów o błędach.** Zadanie, które nie działa od jedenastu tygodni, co noc wysyła wiadomość na skrzynkę, której już nikt nie otwiera.
- **Kopia leży na tej samej maszynie**, w innym katalogu albo na innej partycji. To chroni przed przypadkowym usunięciem i przed niczym więcej.
- **Dysk na kopie jest stale podłączony**, więc ransomware szyfruje go razem z resztą.
- **Kopia nie jest zaszyfrowana.** Zgubiony dysk z dokumentacją całego gabinetu to naruszenie ochrony danych podlegające zgłoszeniu, a nie drobna niedogodność.
- **Odtworzyć umie tylko informatyk, który to konfigurował**, a on już z wami nie pracuje. Spisz procedurę i trzymaj ją poza systemem, który trzeba by odtwarzać.
- **Kopia należy do dostawcy i nikt nigdy nie poprosił o własny eksport.** Jeśli dostawca zniknie, kopia zniknie razem z nim.

W Dentalpin kopia to zwykły zrzut bazy PostgreSQL plus katalog z plikami, więc zautomatyzujesz ją narzędziami, których już używasz, i odtworzysz bez pytania nas o zgodę i bez czekania na kogokolwiek. Warunki wersji hostowanej i instalowanej na własnym serwerze są w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), artykuł 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Dostęp 10 sierpnia 2026 r.
- Ustawa z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta, art. 29. [ISAP](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu20090520417). Dostęp 10 sierpnia 2026 r.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Dostęp 10 sierpnia 2026 r.

To nie jest porada prawna. Konkretne terminy zależą od twojej sytuacji i warto potwierdzić je u prawnika albo w izbie lekarsko-dentystycznej.
