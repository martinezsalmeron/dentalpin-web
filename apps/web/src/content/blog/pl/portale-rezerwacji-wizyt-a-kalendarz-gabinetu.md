---
title: "Portale rezerwacji wizyt a kalendarz gabinetu: co naprawdę się synchronizuje i czyje są dane"
description: "Przed podłączeniem ZnanyLekarz do kalendarza: synchronizacja w jedną czy dwie strony, termin dany przez telefon i kto jest administratorem jakich danych."
pubDate: 2026-10-02
translationKey: portales-cita-online-agenda-dental
tags: [kalendarz-wizyt, rezerwacja-online, rodo, zarzadzanie-gabinetem]
---

Przed podłączeniem portalu rezerwacji do kalendarza gabinetu trzeba ustalić cztery rzeczy, a żadnej z nich nie ma w prezentacji: czy synchronizacja idzie w dwie strony czy w jedną, co dzieje się z terminem, który recepcja właśnie wydała przez telefon, które pola dokumentacji faktycznie przechodzą na drugą stronę, i kto jest administratorem jakich danych. Przy ostatnim pytaniu polityka prywatności ZnanyLekarz jest precyzyjniejsza niż większość branży: rola jest nie jedna, a trzy.

Te cztery odpowiedzi decydują, czy portal jest dodatkową recepcją, czy drugim kalendarzem, który od teraz prowadzicie ręcznie.

> **Nie chodzi tu o kalendarz otwarty na własnej stronie.** To osobna decyzja i ma swój wpis: [rezerwacja wizyt online](/pl/blog/rezerwacja-wizyt-online-w-gabinecie-stomatologicznym/). Tutaj pacjent rezerwuje na platformie podmiotu trzeciego, na której znajduje się też jego pierwszy kontakt z Wami i często opinia.

## Kto jest kim: ZnanyLekarz sp. z o.o. i grupa Docplanner

Polityka prywatności opublikowana na `znanylekarz.pl` podaje polski podmiot w całości: ZnanyLekarz sp. z o.o., ul. Kolejowa 5/7, 01-217 Warszawa, KRS 0000347997, część grupy spółek Docplanner.

Ten sam dokument wyjaśnia, że w grupie "różne podmioty pełnią różne role i mają różne obowiązki". To nie jest formuła grzecznościowa: zmienia to, do kogo i w jakiej sprawie się zwracacie.

## Trzy role, nie jedna

| Jakie dane | Rola portalu | Co to oznacza dla gabinetu |
|---|---|---|
| Dane Waszych pacjentów przetwarzane na Platformie | ✓ Podmiot przetwarzający | Potrzebna umowa z art. 28 RODO, a polecenia dajecie Wy |
| Relacja handlowa: umowa, faktury, windykacja | Niezależny administrator | ✗ Nie negocjuje się tego w Waszej umowie |
| Infrastruktura techniczna i architektura produktu | ~ Współadministratorzy w grupie Docplanner | Istnieje wewnętrzna umowa o podziale obowiązków, której nie podpisujecie |
| Opinie w Google Business Profile | Google, jako niezależny administrator | ✗ Nie zarządza nimi ani portal, ani Wy |

Pierwszy wiersz jest dosłowny: "Kiedy korzystacie Państwo z naszej Platformy w celu przetwarzania danych osobowych swoich klientów, pacjentów lub pracowników, pełnicie Państwo rolę administratora danych, a my pełnimy rolę podmiotu przetwarzającego dane".

To jednocześnie dobra wiadomość i obowiązek. Dane pacjentów zostają Wasze, a art. 28 RODO wymaga podpisanej umowy powierzenia o określonej treści minimalnej. Opisujemy ją w [umowie powierzenia przetwarzania danych](/pl/blog/umowa-powierzenia-przetwarzania-danych-w-gabinecie-stomatologicznym/).

Drugi wiersz zaskakuje. Dla własnej relacji handlowej z Wami portal decyduje sam, i tak to zapisuje: w tych celach ZnanyLekarz sp. z o.o. samodzielnie ustala, jak przetwarzać dane, i sam za to odpowiada.

> **Opinie w Google Business Profile nie są w rękach portalu.** Polityka mówi to wprost: Google staje się niezależnym administratorem tych danych i przetwarza je do własnych celów, może przekazać je do państwa trzeciego, a opinie pozostawione w Google Business Profile "są zarządzane przez Google jako administratora, a nie przez nas".

![Widok tygodniowy kalendarza wizyt, z osobną kolumną dla każdego lekarza](/screenshots/schedule-week.png)

*Kalendarz wizyt w widoku tygodniowym, jedna kolumna na lekarza.*

## Jedna strona czy dwie, i dlaczego pyta się o każde pole

Opis techniczny, który grupa publikuje, znajduje się na stronie integracji rynku hiszpańskiego i mówi o "solidnym i bezpiecznym dwukierunkowym API" ze stałym przepływem danych: wizyty zarezerwowane na portalu pojawiają się od razu w zintegrowanym programie, a zmiany wprowadzone w lokalnym kalendarzu odbijają się na portalu.

To opis techniczny, nie zobowiązanie umowne. Nie podaje opóźnienia, nie podaje okna ponowienia i nie mówi, co się dzieje, gdy łącze padnie w środku dnia.

Przede wszystkim "dwukierunkowy" to zdanie o kalendarzu. Nie mówi nic o kartotece, a tam właśnie pojawiają się niespodzianki: portal może zapisywać wizyty, nie dotykając kartoteki, albo tworzyć duplikat przy każdym nowym pacjencie, który zarezerwuje. Oba zachowania nazywają się "integracją" w ulotce.

## Termin trzydziestu sekund

To, co psuje integrację, nie jest zwykłą rezerwacją, a jednoczesną. Recepcja wydaje termin przez telefon o 10:14:30, a ktoś rezerwuje go na portalu o 10:14:45, kiedy opublikowana dostępność jeszcze się nie zaktualizowała.

Żadna ze stron nie publikuje, co się wtedy dzieje. Tego pytania nie da się więc rozstrzygnąć czytaniem: rozstrzyga je pisemna odpowiedź przed podpisem i test po nim.

> **Sprawdźcie to sami, prawdziwym terminem i stoperem.** Zablokujcie termin w kalendarzu i zmierzcie, jak długo jest jeszcze widoczny na portalu. Potem na odwrót. Liczba, która z tego wyjdzie, to Wasze ryzyko podwójnej rezerwacji, i jest to jedyna liczba w tej decyzji, której nikt Wam nie wpisze do umowy.

![Karta pacjenta, zakładka danych osobowych z polami kontaktowymi](/screenshots/patients.png)

*Zakładka danych pacjenta, z polami, które integracja może zapisywać.*

## Co ustalić na piśmie przed podłączeniem czegokolwiek

1. **Poproście o kierunek każdego pola**, po kolei: co portal zapisuje w Waszej kartotece, a co z niej czyta.
2. **Ustalcie, co dzieje się przy kolizji** terminów i kto rozstrzyga, jako procedurę, a nie dobrą wolę.
3. **Podpiszcie umowę powierzenia** przed uruchomieniem, nie po pierwszym pacjencie.
4. **Poproście o listę podprocesorów** i zapiszcie datę, w której ją otrzymaliście.
5. **Zdecydujcie, które pola nie przechodzą nigdy**: alergie, opisy wizyt, zaległości. Portal rezerwacji nie potrzebuje diagramu zębowego.
6. **Ustalcie wyjście przed wejściem**: jak eksportujecie historię wizyt, co dzieje się z profilem, co dzieje się z opiniami.
7. **Zrób pilotaż z jednym lekarzem** i jednym przedziałem tygodnia, przez dwa tygodnie.
8. **Wpiszcie integrację do rejestru czynności przetwarzania**, bo to nowy przepływ danych.

Punktu szóstego nie robi prawie nikt i to on kosztuje potem najwięcej. Pytanie o wyjście w chwili, gdy sprzedaje się Wam wejście, to jedyny moment, w którym dostaniecie odpowiedź na piśmie.

## Co musi umieć Wasz własny program

Integracja jest warta tyle, ile kalendarz, który za nią stoi. To decyduje, czy portal pomaga, czy podwaja pracę.

- **Własne API** na kalendarz i pacjentów, żeby integracja nie zależała od wpisania Was na czyjąś listę.
- **Prawdziwe blokady dostępności**, na lekarza i na fotel, które portal czyta, a nie zgaduje.
- **Źródło każdej wizyty**, żeby przed przedłużeniem abonamentu wiedzieć, ile przyszło z portalu, a ile z telefonu.
- **Pola kontaktowe oddzielone od danych klinicznych**, żeby integracja nie mogła czytać ani zapisywać tego, co jej nie dotyczy.
- **Rejestr dostępu** z użytkownikiem, datą i operacją, także dla dostępów integracji. Piszemy o tym w [rejestrze dostępu do dokumentacji](/pl/blog/rejestr-dostepu-do-dokumentacji-medycznej/).
- **Pełny eksport historii wizyt**, bo w dniu zmiany portalu ta historia jest wszystkim, co zostaje.

W Dentalpin kalendarz ma własne API, źródło każdej wizyty jest zapisywane, a pola kontaktowe leżą oddzielnie od klinicznych, więc można podłączyć dowolny portal bez czekania na certyfikację. Kod jest opublikowany, a [cennik](/pl/cennik/) również.

To nie jest porada prawna. Umowa powierzenia i rejestr czynności zależą od tego, jak Wasz gabinet przetwarza dane, i warto je przejrzeć przed uruchomieniem integracji; skargę, jeśli będzie potrzebna, składa się do Prezesa UODO.

## Źródła

- ZnanyLekarz sp. z o.o., polityka prywatności Platformy dla Profesjonalistów, punkty 1.1 (niezależny administrator), 1.2 (współadministratorzy), 2 (podmiot przetwarzający) oraz fragment o Wizytówce Google. Dostęp 2 października 2026. <https://www.znanylekarz.pl/prywatnosc>
- Doctoralia, "Integraciones Agenda online", strona integracji rynku hiszpańskiego tej samej grupy, o dwukierunkowym API. Dostęp 2 października 2026. <https://pro.doctoralia.es/integraciones>
- Rozporządzenie (UE) 2016/679, art. 28, o podmiocie przetwarzającym i minimalnej treści umowy powierzenia. Dostęp 2 października 2026.
