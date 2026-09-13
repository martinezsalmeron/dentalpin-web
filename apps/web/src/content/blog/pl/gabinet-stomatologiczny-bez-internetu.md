---
title: "Dzień, w którym pada internet: jak pracuje gabinet stomatologiczny bez łącza"
description: "Co przestaje działać w gabinecie stomatologicznym, gdy padnie łącze, co działa dalej, co przygotować wcześniej i jak uzupełnić dzień po powrocie łącza."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [ciaglosc-dzialania, infrastruktura, kalendarz-wizyt, zarzadzanie-gabinetem]
---

Jeśli program działa w przeglądarce po stronie cudzego serwera, awaria łącza zatrzymuje cały gabinet, razem z kalendarzem wizyt, dokumentacją medyczną i diagramem zębowym. Jeśli działa na serwerze stojącym w gabinecie, tracisz przypomnienia, rezerwację online, e-receptę i najpewniej terminal płatniczy, ale kalendarz dnia i dokumentacja pozostają otwarte.

To, który z tych dwóch przypadków dotyczy ciebie, przesądza o całej reszcie, i warto to sprawdzić dzisiaj, a nie we wtorek, w który to się stanie. Poniżej jest to, co dokładnie przestaje działać, co trzeba mieć przygotowane, co zapisywać w trakcie i w jakiej kolejności uzupełnić wszystko potem.

## To, gdzie działa program, przesądza o tym, co tracisz

Na pytanie "czy da się pracować bez internetu" nie ma jednej odpowiedzi, bo za słowem program kryją się trzy różne architektury i każda zachowuje się inaczej.

| Co musisz zrobić | Przeglądarka po stronie zdalnego serwera | Serwer w gabinecie | Program zainstalowany na każdym stanowisku |
|---|---|---|---|
| Otworzyć kalendarz wizyt na dziś | ✗ Nie | ✓ Tak | ✓ Tak |
| Zajrzeć do dokumentacji i diagramu zębowego | ✗ Nie | ✓ Tak | ✓ Tak |
| Zapisać opis wizyty, kosztorys i fakturę | ✗ Nie | ✓ Tak | ✓ Tak |
| Obejrzeć zapisane wcześniej zdjęcia RTG | ✗ Nie | ✓ Tak | ~ Zależnie od tego, gdzie leżą zdjęcia |
| Przypomnienia, rezerwacja online, portal pacjenta | ✗ Nie | ✗ Nie | ✗ Nie |
| Kopia zapasowa poza gabinetem | ✗ Nie | ~ Ruszy po powrocie łącza | ~ Ruszy po powrocie łącza |

Wiersz, który zaskakuje najwięcej osób, to ten ze zdjęciami RTG. Czujnik może być wpięty do sieci lokalnej i zapisywać w katalogu w gabinecie albo wysyłać do usługi producenta, a z rejestracji jedno i drugie wygląda tak samo aż do dnia, w którym nie ma łącza.

![Schemat instalacji: przeglądarka, Caddy na porcie 443, frontend Nuxt, API i PostgreSQL z wolumenami danych](/diagrams/install-stack.svg)

*Przeglądarka, Caddy, frontend, API i baza danych. Schemat nie mówi, gdzie fizycznie stoi ta maszyna, a to jest dokładnie pytanie, na które trzeba odpowiedzieć przed awarią.*

## Co przestaje działać, w kolejności, w jakiej to zauważysz

- **Rezerwacja online zatrzymuje się bezgłośnie.** Nikt cię nie powiadomi: w tych godzinach po prostu nie wpływają żadne rezerwacje i nie ma sposobu, by policzyć, ile przepadło.
- **Przypomnienia nie wychodzą.** SMS-y, WhatsApp i e-maile wysyłane są spoza gabinetu, więc jutrzejsza partia nie wyjdzie, nawet jeśli program lokalny działa.
- **Terminal płatniczy zależy od tego, jak jest podłączony.** Te w sieci gabinetu milkną, te z własną kartą SIM zwykle dalej przyjmują płatności. To pytanie na jedną linijkę do dostawcy terminala i zadaje się je wcześniej.
- **Wszystko, co jest wysyłką do zewnętrznego systemu, czeka w kolejce.** Dotyczy to e-recepty, e-skierowania i raportowania zdarzeń medycznych.
- **Kopia zapasowa poza gabinetem tej nocy się nie wykona**, jeśli przy zamykaniu łącze nadal leży. Jedna noc to nie problem. Dwa tygodnie, przez które nikt nie czyta powiadomień o błędach, już tak.
- **Poczta i telefon w technologii VoIP to również internet.** Wiele gabinetów właśnie w tym momencie odkrywa, że ich jedyny numer szedł przez ten sam router.

## SLA dostawcy to nie jest SLA twojego łącza

Dostępność na poziomie 99,9 % brzmi, jakby nigdy nic się nie działo. To 43 minuty miesięcznie i 8 godzin 46 minut rocznie. Publikowane bywa też 99,5 %, czyli około trzy i pół godziny miesięcznie i prawie 44 godziny rocznie.

Te liczby i tak obejmują wyłącznie serwer dostawcy. Twoje łącze to osobna umowa, a zwykły abonament firmowy najczęściej nie niesie ze sobą żadnego zobowiązania co do dostępności.

> **Większość awarii w małym gabinecie zaczyna się na chodniku, a nie w centrum danych.** Roboty drogowe, otwarta szafka światłowodowa albo siedmioletni router nie figurują w niczyim SLA, a to one zwykle odpowiadają za poranek bez łącza.

## Zestaw awaryjny

Nic z tego nie jest drogie i wszystko musi istnieć wcześniej, bo moment na szukanie nie jest wtedy, gdy w rejestracji czekają cztery osoby.

1. **Wydrukuj harmonogram na następny dzień przed zamknięciem.** Jedna kartka: nazwisko, godzina, fotel i planowany zabieg. To ten element, który zamienia awarię w niedogodność zamiast w stracony dzień.
2. **Miej sprawdzoną drugą drogę transmisji danych**, router z kartą SIM albo udostępnianie internetu z telefonu. Sprawdzoną znaczy, że ktoś już ją kiedyś włączył, a nie że leży w szufladzie.
3. **Postaw UPS przed serwerem i również przed routerem**, bo żywy serwer za martwym routerem nikomu się nie przyda.
4. **Trzymaj wydrukowane zgody i karty przebiegu leczenia**, te pięć czy sześć, których naprawdę używasz.
5. **Przechowuj listę telefonów na dany dzień poza systemem**, to ona pozwala uprzedzić pacjenta umówionego na 17.
6. **Zapisz, kto co robi**: kto dzwoni do operatora, kto obdzwania pacjentów, kto odpowiada za notowanie tego, co się dzieje.

![Kalendarz wizyt w widoku dnia z wizytami rozłożonymi na przedziały godzinowe](/screenshots/schedule-day.png)

*To jest widok, który musi dać się wydrukować poprzedniego wieczoru, a nie tego ranka, kiedy jest potrzebny.*

## Co notować, póki trwa awaria

Praca bez łącza nie jest problemem. Problemem jest wrócić i nie wiedzieć, co działo się między dziewiątą a trzynastą.

- **Kto przyszedł, a kto nie**, z rzeczywistą godziną, żeby nieobecności trafiły tam, gdzie powinny.
- **Co zrobiono u każdego pacjenta**, z takim poziomem szczegółu, jaki wpisujesz do dokumentacji, a nie streszczenie w trzech słowach.
- **Numery serii implantów i materiałów**, które program zwykle uzupełnia sam. To przepada najczęściej i najtrudniej to potem odtworzyć.
- **Każdą przyjętą płatność**, kwotę, formę i to, do jakiego zabiegu się odnosi.
- **Komplet danych nowych pacjentów**, bo karta założona z pamięci trzy godziny później to karta z błędami.
- **Kto dzwonił i w jakiej sprawie**, łącznie z odwołaniami, bo to one rozsypują harmonogram na następny dzień.

> **Czego nie zapiszesz w trakcie awarii, tego potem nie odzyskasz.** Program wraca ze wszystkim, co miał o dziewiątej, a to, co zdarzyło się w międzyczasie, istnieje wyłącznie na kartce, którą ktoś wypełnił.

## Uzupełnianie dnia po powrocie łącza

Kolejność ma znaczenie, bo jedne rzeczy zależą od drugich, a pokusa jest taka, żeby zacząć od łatwych.

1. **Najpierw sprawdź, czy nocna kopia zapasowa się wykonała**, i uruchom kolejną teraz, jeśli się nie wykonała.
2. **Załóż karty nowych pacjentów przed wszystkim innym**, bo cała reszta się do nich podpina.
3. **Przepisz opisy wizyt z papieru**, pacjent po pacjencie, tego samego dnia. Nazajutrz nikt już nie pamięta, co miał znaczyć skrót.
4. **Wprowadź płatności** i uzgodnij je z terminalem oraz z kasą.
5. **Popraw kalendarz wizyt**: nieobecności, odwołania przyjęte przez telefon i wszystko, co zostało przełożone.
6. **Sprawdź, które przypomnienia nie wyszły**, i zdecyduj, które nadal warto wysłać. Przypomnienie o wizycie, która już się odbyła, szkodzi bardziej niż jego brak.
7. **Zachowaj papier, dopóki nie potwierdzisz, że wszystko jest wprowadzone**, a potem zniszcz go jak resztę dokumentacji medycznej.

## Czego RODO oczekuje, że przemyślisz

Dostępność nie jest dodatkiem do bezpieczeństwa, to jedna z trzech właściwości, które rozporządzenie wymienia z nazwy. Artykuł 32 ustęp 1 wskazuje wśród odpowiednich środków technicznych i organizacyjnych:

> **b) zdolność do ciągłego zapewnienia poufności, integralności, dostępności i odporności systemów i usług przetwarzania; c) zdolność do szybkiego przywrócenia dostępności danych osobowych i dostępu do nich w razie incydentu fizycznego lub technicznego.**

Dwugodzinna awaria łącza sama w sobie nie jest naruszeniem podlegającym zgłoszeniu. Pod ten przepis podpada natomiast sytuacja, w której nie da się dotrzeć do dokumentacji pacjenta siedzącego już w fotelu, albo strata całego poranka pracy, bo nikt nie pomyślał o papierze.

To nie jest porada prawna. W konkretnej sprawie odpowiedzi udzieli inspektor ochrony danych albo prawnik.

## Pięć pytań do dostawcy, zanim odpowiedzi będą potrzebne

- **Które dokładnie części programu działają dalej, gdy gabinet straci łącze?** Lista jest dobrą odpowiedzią. "Wszystko jest w chmurze, proszę się nie martwić" nie jest.
- **Gdzie fizycznie stoi baza danych** i co byłoby potrzebne, żeby się do niej dostać bez was.
- **Czy publikujecie SLA, na jakim poziomie i co rekompensuje**, gdy nie zostanie dotrzymane.
- **Co dzieje się z przypomnieniami, które nie wyszły?** Są ponawiane, przepadają, czy gromadzą się i wychodzą wszystkie naraz.
- **Czy sam wyeksportuję jutrzejszy harmonogram do PDF albo CSV**, bez zakładania zgłoszenia.

Odpowiedzi na te pięć pytań mówią o produkcie więcej niż połowa jego strony z funkcjami.

Dentalpin można zainstalować na komputerze stojącym w gabinecie, dzięki czemu awaria łącza staje się awarią komunikacji, a nie awarią dokumentacji medycznej: kalendarz wizyt, diagram zębowy i faktury pozostają otwarte w sieci lokalnej, podczas gdy na zewnątrz nic nie jest osiągalne. Warunki wersji hostowanej i wersji instalowanej u siebie są w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), artykuł 32 ustęp 1 litery b) i c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Dostęp 13 września 2026 r.
