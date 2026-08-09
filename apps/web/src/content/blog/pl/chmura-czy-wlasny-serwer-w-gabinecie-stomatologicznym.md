---
title: "Chmura czy własny serwer w gabinecie stomatologicznym: jak wybrać"
description: "Chmura czy serwer w gabinecie: co naprawdę się różni, czego RODO wymaga w obu przypadkach i pięć pytań, które rozstrzygają wybór dla gabinetu stomatologicznego."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [chmura, serwer, infrastruktura, rodo]
---

Ta decyzja nie rozstrzyga się na bezpieczeństwie. Rozstrzyga się na tym, kto odpowiada, gdy coś przestaje działać, i ile czasu gabinet potrzebuje, żeby wrócić do pracy. Wybierz chmurę, jeśli nikt w gabinecie nie chce odpowiadać za kopie zapasowe i aktualizacje. Wybierz własny serwer, jeśli musisz przyjmować pacjentów także wtedy, gdy padnie łącze, albo chcesz mieć dane fizycznie u siebie. Oba rozwiązania są legalne i oba wymagają dokładnie tych samych dokumentów.

Poniżej jest to, jak dojść do własnej odpowiedzi, nie opierając się na tym, co mówi handlowiec.

## Czego nie zmienia żadna z dwóch opcji

Administratorem danych jest gabinet, w obu wariantach. Dostawca programu lub hostingu jest podmiotem przetwarzającym, a z tego wynikają dwa obowiązki, które nie znikają dlatego, że serwer stoi w twoim zapleczu.

RODO wymaga najpierw uzasadnionego wyboru. Artykuł 28 ustęp 1 mówi, że administrator korzysta "wyłącznie z usług takich podmiotów przetwarzających, które zapewniają wystarczające gwarancje wdrożenia odpowiednich środków technicznych i organizacyjnych". Ustęp 3 dodaje, że przetwarzanie "odbywa się na podstawie umowy lub innego instrumentu prawnego".

Drugi obowiązek umyka najczęściej. Artykuł 32 ustęp 1 litera c wymaga "zdolności do szybkiego przywrócenia dostępności danych osobowych i dostępu do nich w razie incydentu fizycznego lub technicznego".

> **Serwer w sterylizatorni bez przetestowanego odtworzenia kopii spełnia ten wymóg tak samo słabo jak chmura bez kopii.** Przepis nie pyta, gdzie stoi dysk. Pyta, czy odzyskasz dane i jak szybko. Jeśli nikt nigdy nie próbował odtworzyć kopii, uczciwa odpowiedź brzmi: nie wiadomo.

Do tego dochodzi termin, o którym w Polsce trzeba pamiętać przy każdym takim wyborze. Zgodnie z ustawą o prawach pacjenta i Rzeczniku Praw Pacjenta podmiot udzielający świadczeń zdrowotnych przechowuje dokumentację medyczną przez okres 20 lat, liczony od końca roku kalendarzowego, w którym dokonano ostatniego wpisu.

> **Dwadzieścia lat to dłużej, niż działa większość firm i większość dysków.** Cokolwiek wybierzesz, musi przetrwać ten okres, łącznie z możliwością, że twojego dostawcy nie będzie już na rynku.

![Kalendarz wizyt na dany dzień w Dentalpin, z wizytami przy poszczególnych fotelach i ich statusem](/screenshots/schedule-day.png)

*To jest ekran, który musi się otworzyć o dziewiątej rano, niezależnie od tego, co wybierzesz.*

## Opcje są trzy, nie dwie

Prawie każde porównanie zestawia chmurę z serwerem w gabinecie i pomija trzecią możliwość, którą wybiera wiele gabinetów swobodnie czujących się z techniką: własna instalacja, ale na wynajętym serwerze.

| | Chmura dostawcy | Serwer w gabinecie | Własna instalacja na VPS |
|---|---|---|---|
| Kto instaluje aktualizacje | ✓ Dostawca | ✗ Ktoś z gabinetu albo jego informatyk | ~ Ty, ale bez dotykania sprzętu |
| Gdy padnie łącze | ✗ Nie da się pracować | ✓ Działa dalej w sieci lokalnej | ✗ Nie da się pracować |
| Kto odpowiada za kopię zapasową | ~ Robi ją dostawca, sprawdzenie należy do ciebie | ✗ W całości ty | ✗ W całości ty |
| Sprzęt do utrzymania | ✓ Żaden | ✗ Komputer, dysk, zasilacz awaryjny i ich wymiana | ✓ Żaden |
| Koszt na starcie | ✓ Żaden | ✗ Zakup sprzętu | ~ Niski |
| Gdzie są dane | W infrastrukturze dostawcy | W twoim lokalu | W wybranym centrum danych |
| Czego potrzebujesz, żeby odejść | Pełnego eksportu, który muszą ci wydać | ✓ Już je masz | ✓ Już je masz |

Dwa krańce tej tabeli nie konkurują o to samo. Chmura zdejmuje z ciebie pracę i wiąże cię z dostawcą. Własny serwer daje kontrolę i daje komuś zajęcie na każdy miesiąc.

## Próba, która rozstrzyga: dzień, w którym coś pada

Zanim porównasz ceny, policz dwie rzeczy.

1. **Ile czasu gabinet wytrzyma bez programu.** Jeśli odpowiedź brzmi "pół przedpołudnia, na papierze", wystarczy niemal każde rozwiązanie. Jeśli brzmi "godzinę", potrzebujesz spisanego planu, także przy własnym serwerze.
2. **Ile kosztuje ten przestój.** Fotele razy godziny razy średni przychód. To jedyna liczba, która zamienia ten wybór w rachunek ekonomiczny, a nie w kwestię gustu.
3. **Kto odbierze telefon w poniedziałek o dziewiątej.** W chmurze jest to wsparcie dostawcy z opublikowanymi godzinami. Przy własnym serwerze twój informatyk, a jego rzeczywisty czas reakcji lepiej poznać, zanim będzie potrzebny.
4. **Co przepada między ostatnią kopią a awarią.** Kopia nocna oznacza utratę jednego dnia pracy. Jeśli to nie do przyjęcia, częstotliwość kopii staje się wymaganiem, a nie szczegółem.
5. **Jak wychodzisz.** Poproś o procedurę pełnego eksportu na piśmie przed podpisaniem umowy, a nie w dniu, w którym chcesz zmienić dostawcę.

> **Najczęstsza awaria to nie awaria dostawcy, tylko twojego łącza.** System w chmurze zatrzymuje się na routerze w gabinecie, a nie w centrum danych. Gabinet z jednym światłowodem i bez zapasowego łącza mobilnego ma pojedynczy punkt awarii, nawet przy najsolidniejszym dostawcy na rynku.

## Czego chmura nie załatwia, a własny serwer też nie

Komputer pod ladą w rejestracji nie jest automatycznie bardziej poufny. Z nieaktualizowanym systemem, niezaszyfrowanym dyskiem i kopią na pendrivie w tej samej szafce jest gorszy niż utrzymywana chmura: włamanie albo pożar zabiera oryginał i kopię naraz.

W drugą stronę też zawodzi. Chmura nie zwalnia cię z niczego: nadal potrzebujesz umowy z artykułu 28 i nadal musisz wiedzieć, jak często testowane są odtworzenia kopii.

- **Szyfrowanie dysku**, w obu modelach. To ono zamienia skradziony laptop albo serwer w problem sprzętowy zamiast w naruszenie ochrony danych.
- **Jedna kopia poza budynkiem**, zawsze. Praktyczna zasada to trzy kopie, na dwóch różnych nośnikach, jedna poza gabinetem.
- **Przetestowane odtworzenie** przynajmniej raz w roku, z zegarkiem w ręku i zapisanym wynikiem.
- **Dostępy imienne**, a nie wspólne hasło na kartce przy monitorze, bo to ten błąd unieważnia wszystko powyżej.

![Dokumentacja pacjenta w Dentalpin z diagramem zębowym, alertami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*To musi wrócić w całości po odtworzeniu kopii, a nie tylko lista pacjentów.*

## Wybierz chmurę, jeśli

- **Nikt w gabinecie nie chce być osobą od techniki.** To dobry powód i sam w sobie wystarcza.
- **Pracujesz w kilku lokalizacjach** i chcesz mieć wszędzie ten sam kalendarz wizyt bez budowania VPN.
- **Twoje łącze jest stabilne i masz zapas** w postaci internetu mobilnego, który naprawdę sprawdziłeś.
- **Wolisz przewidywalny koszt miesięczny** od zakupu sprzętu co pięć albo sześć lat.

## Wybierz własny serwer, jeśli

- **Awaria łącza nie może zatrzymać przyjmowania pacjentów.** To najmocniejszy i najbardziej konkretny argument po tej stronie.
- **Chcesz móc odejść w dowolnym dniu**, nie czekając, aż ktoś wygeneruje ci eksport.
- **Masz już informatyka** albo kogoś, kto rozsądnie utrzymuje sprzęt.
- **Ma dla ciebie znaczenie, gdzie fizycznie leżą dane**, z własnej polityki albo dlatego, że wymaga tego ktoś trzeci.

Jeśli się wahasz, jest uczciwe wyjście pośrednie: zacznij od opcji, która kosztuje cię najmniej pracy, i co miesiąc rób własny pełny eksport. Zostawia ci to możliwość zmiany zdania później, bez postawienia czegokolwiek nieodwracalnego.

W Dentalpin ta decyzja nie wymusza zmiany programu: ten sam produkt działa w naszej chmurze albo na twoim serwerze przez `docker compose`, na tej samej bazie PostgreSQL i z tym samym eksportem. Warunki obu wariantów są na stronie [cennik](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), artykuły 28 i 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX:32016R0679). Dostęp 9 sierpnia 2026 r.
- Rzecznik Praw Pacjenta, okres przechowywania dokumentacji medycznej na podstawie ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta. [gov.pl](https://www.gov.pl/web/rpp/dostep-do-dokumentacji-medycznej-likwidacja-placowki-medycznej-smierc-lekarza-czas-przechowywania). Dostęp 9 sierpnia 2026 r.

To nie jest porada prawna. Terminy przechowywania i obowiązki, które cię dotyczą, zależą od konkretnego przypadku i warto potwierdzić je u własnego prawnika albo w izbie lekarskiej.
