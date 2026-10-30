---
title: "Zdarzenia medyczne i indeks EDM: co gabinet stomatologiczny raportuje do P1"
description: "Komunikat ZM idzie do SIM za każde świadczenie, najpóźniej w 2 dni. Indeks EDM tylko wtedy, gdy wizyta wytworzyła dokument z listy. Terminy i wyjątki."
pubDate: 2026-10-30
tags: [zdarzenia-medyczne, edm, dokumentacja-medyczna, przepisy, gabinet-stomatologiczny]
---

Komunikat zdarzenia medycznego przekazuje się do SIM za każde udzielone świadczenie, niezależnie od tego, kto za nie płaci, najpóźniej w terminie 2 dni od dnia zakończenia zdarzenia. Indeks elektronicznej dokumentacji medycznej dołącza się tylko wtedy, gdy przy tym świadczeniu powstał dokument, który przepisy liczą do EDM. To są dwa osobne obowiązki, a typowa wizyta stomatologiczna spełnia pierwszy i nie wytwarza nic, co trafiłoby do drugiego.

> **Najczęstsze nieporozumienie dotyczy terminu.** Dwa dni nie są w ustawie, tylko w rozporządzeniu, i są liczone od zakończenia zdarzenia, a nie od dnia wizyty czy od wystawienia faktury. Przy leczeniu rozłożonym na kilka dni rozporządzenie dzieli ten termin na dwie części, co opisujemy niżej.

To nie jest porada prawna. Wszystkie przepisy niżej są cytowane z tekstów ogłoszonych w Dzienniku Ustaw, z datą sprawdzenia w sekcji *Źródła*, i każdy z nich jest linkowany, żeby dało się sprawdzić brzmienie samemu.

## Obowiązek dotyczy także gabinetu w pełni prywatnego

Przepis mówi o „usługodawcy”, a nie o placówce z kontraktem. Usługodawcą jest świadczeniodawca w rozumieniu art. 5 pkt 41 ustawy o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych, a pierwsza pozycja tej definicji to po prostu „podmiot wykonujący działalność leczniczą w rozumieniu przepisów o działalności leczniczej”.

Praktyka zawodowa lekarza dentysty i podmiot leczniczy mieszczą się w tym jednakowo. Umowa z NFZ nie jest tu żadnym warunkiem i nigdzie w tej definicji nie występuje.

Centrum e-Zdrowia pisze to samo o samym systemie: „System obejmuje zasięgiem wszystkie podmioty medyczne, niezależnie od źródła finansowania udzielanych w nich świadczeń”.

Data startu jest w ustawie i minęła dawno: art. 56 ust. 2a stanowi, że usługodawcy są obowiązani przekazywać do SIM dane zdarzenia medycznego „od dnia 1 lipca 2021 r.”.

![Karta pacjenta w zakładce aktywności: alerty kliniczne, aktywny plan leczenia i oś czasu z filtrami wizyt, zabiegów, finansów i komunikacji](/screenshots/patient-timeline.png)

*Oś czasu pacjenta w programie gabinetowym. Każda pozycja oznaczająca udzielone świadczenie jest osobnym zdarzeniem medycznym do zaraportowania.*

## Dwa obowiązki, które łatwo zlepić w jeden

Ustawa wylicza w art. 11 ust. 4 siedem grup danych zdarzenia medycznego. Sześć z nich opisuje samo świadczenie: dane usługodawcy, dane usługobiorcy, dane identyfikujące świadczenie, miejsce udzielenia, dane pracownika medycznego i inne dane identyfikujące zdarzenie.

Siódma, czyli pkt 6, to „dane dotyczące dokumentacji medycznej wytworzonej w związku z udzielonym świadczeniem zdrowotnym”. To jest indeks EDM, i cała różnica siedzi w słowie „wytworzonej”.

Rozporządzenie rozpisuje tę pozycję na pięć pól, i widać z nich, że do SIM nie idzie treść dokumentu: identyfikator nadawany przez system usługodawcy, rodzaj, data i godzina wytworzenia, tryb udostępniania oraz „adres repozytorium, w którym jest przechowywana dokumentacja medyczna”. Dokumentacja zostaje u usługodawcy, a do systemu trafia wskazanie, gdzie jej szukać.

Ten sam przepis określa formaty: dokumentacja prowadzona elektronicznie „zgodnie ze standardem HL7 oraz, w odniesieniu do dokumentacji obrazowej, w formacie DICOM”. Dla gabinetu stomatologicznego to zdanie o zdjęciach, nie o fakturach.

- **Komunikat ZM jest należny za świadczenie.** Jeśli doszło do udzielenia świadczenia zdrowotnego, jest zdarzenie medyczne do zaraportowania.
- **Indeks EDM jest należny za dokument.** Jeśli przy tym świadczeniu nie powstał żaden dokument z listy EDM, nie ma czego indeksować, a komunikat ZM nadal trzeba wysłać.
- **Kolejność bywa odwrotna, niż się wydaje.** Gabinet, który nie wytwarza EDM w ogóle, raportuje mimo to każdą wizytę.

## Termin: 2 dni, a przy leczeniu na kilka wizyt dwa terminy

Paragraf 6 ust. 1 rozporządzenia brzmi dosłownie: „Usługodawca przekazuje do SIM dane, o których mowa w § 2–5, niezwłocznie, lecz nie później niż w terminie 2 dni od dnia zakończenia zdarzenia medycznego”.

Ustęp 2 jest tym fragmentem, który w stomatologii stosuje się częściej, niż wygląda, bo leczenie endodontyczne i protetyczne rzadko zaczyna się i kończy tego samego dnia. Wtedy termin rozpada się na dwa:

1. **W ciągu 2 dni od dnia rozpoczęcia zdarzenia** idą dane usługodawcy, dane usługobiorcy, kod świadczenia wraz z datą i godziną rozpoczęcia oraz dane miejsca udzielenia świadczenia.
2. **Pozostałe dane** przekazuje się „w trakcie trwania zdarzenia medycznego lub niezwłocznie po jego zakończeniu”, najpóźniej w terminie 2 dni od dnia zakończenia.
3. **Jeżeli coś dojdzie później**, ust. 3 nakazuje przekazać dane uzupełniające niezwłocznie po ich uzyskaniu. Raz wysłany komunikat nie jest więc zamknięty, a § 7 ust. 1 wprost dopuszcza zmianę danych już przekazanych.

![Plan leczenia podzielony na etapy, z zabiegami i statusem każdego etapu](/screenshots/treatment-plan.png)

*Plan leczenia rozpisany na etapy. Jeżeli jeden etap zaczyna się i kończy w różnych dniach, rozporządzenie dzieli termin raportowania na dwie części.*

## Co jest EDM, a co tylko dokumentacją medyczną

Rodzaje EDM wylicza rozporządzenie Ministra Zdrowia z 8 maja 2018 r., którego aktualny tekst jednolity ogłoszono 6 sierpnia 2026 r. Od zmiany z 9 lipca 2025 r. lista ma dziewięć pozycji:

| Pozycja z § 1 | Powstaje w gabinecie stomatologicznym? |
|---|---|
| Informacja przy odmowie przyjęcia do szpitala | ✗ Nie |
| Informacja dla lekarza kierującego do poradni specjalistycznej lub leczenia szpitalnego | ~ Tak, gdy pacjent przyszedł ze skierowaniem od innego lekarza |
| Karta informacyjna z leczenia szpitalnego | ✗ Nie |
| Wyniki badań laboratoryjnych wraz z opisem | ~ Rzadko, przy badaniach zlecanych pacjentowi |
| Opis badań diagnostycznych innych niż laboratoryjne | ✓ Tak, to pozycja dotycząca opisu zdjęć |
| Karta profilaktycznego badania ucznia | ✗ Nie |
| Indywidualny Plan Opieki Medycznej | ✗ Nie |
| Karta medycznych czynności ratunkowych | ✗ Nie |
| Karta medyczna lotniczego zespołu ratownictwa medycznego | ✗ Nie |

Czego na tej liście nie ma, to zwykła historia zdrowia i choroby, wpis z wizyty, diagram zębowy, kosztorys i zgoda pacjenta. Są to oczywiście elementy dokumentacji medycznej i podlegają swoim przepisom, ale nie są EDM w rozumieniu art. 13a, więc nie mają indeksu w P1.

> **Dlatego kontrolna wizyta i wypełnienie ubytku dają komunikat ZM bez indeksu EDM.** Dopóki gabinet nie wytworzy opisu badania diagnostycznego ani informacji dla lekarza kierującego, indeksować nie ma czego. Obowiązek raportowania samego zdarzenia to nie zmienia.

## Pozycja, która w stomatologii decyduje: opis badania diagnostycznego

Piąta pozycja listy, „opis badań diagnostycznych, innych niż wskazane w pkt 4”, jest jedyną, którą gabinet stomatologiczny wytwarza regularnie. Dotyczy opisu, a nie samego pliku ze zdjęciem, i to rozróżnienie warto przegadać we własnym gabinecie, zanim zrobi to za nas kontrola.

Praktyka bywa tu różna. Zdjęcie punktowe wykonane i zinterpretowane przy fotelu w trakcie leczenia często nie kończy się odrębnym, podpisanym opisem, a tomografia zlecona do opisu radiologowi kończy się nim prawie zawsze. Przepis nie mówi, kiedy opis trzeba sporządzić, tylko że jeżeli istnieje, jest EDM.

Z tego wychodzi pytanie, które da się zadać własnemu programowi i własnej pracowni: które z naszych badań obrazowych kończą się dokumentem nazwanym opisem, kto go podpisuje i gdzie on leży. Odpowiedź na to jest jednocześnie odpowiedzią, co indeksujemy.

## E-recepta i e-skierowanie idą inną drogą

Recepty i skierowania też są elektroniczną dokumentacją medyczną, ale na podstawie samej ustawy, art. 2 pkt 6, a nie rozporządzenia o rodzajach EDM. Ich droga do SIM jest osobna i szybsza: art. 11 ust. 5 pkt 1 każe usługodawcy zamieszczać je w SIM „w czasie rzeczywistym”, razem z danymi o realizacji recepty i zmianie statusu skierowania.

Wynik badania histopatologicznego ma własny termin w pkt 2 tego samego ustępu, czyli niezwłocznie po sporządzeniu. Dla gabinetu, który wysyła materiał do pracowni, to jest przepis o tym, co dzieje się z wynikiem, a nie o jego własnym komunikacie ZM.

Tekst jednolity ustawy z 2026 roku dopisał do definicji EDM „kartę pacjenta”. Warto wiedzieć, czym ona jest, bo nazwa sugeruje coś, co gabinet wypełnia: to dokument generowany przez samo SIM na żądanie uprawnionego pracownika medycznego, odpowiednik podsumowania pacjenta z rozporządzenia o europejskiej przestrzeni danych dotyczących zdrowia. Nie jest to formularz do wytworzenia w gabinecie.

## Awaria i podwykonawstwo, czyli dwa realne wyjątki

**Awaria systemu** ma własny termin w art. 11 ust. 5a: dane zamieszcza się niezwłocznie po ustaniu awarii, nie później niż w terminie 3 dni od dnia jej usunięcia. Ustęp 5b dodaje rzecz, o której łatwo zapomnieć przy długim weekendzie, bo do tego terminu „nie wlicza się dni wolnych od pracy dla usługodawcy”, a ust. 5c pozwala ministrowi zdrowia wydłużyć go obwieszczeniem, gdy awaria trwa dłużej niż dzień.

**Podwykonawstwo** reguluje § 2a rozporządzenia, i jest to przepis dla każdego gabinetu, który zleca na zewnątrz tomografię albo pojedynczą procedurę. Zgodnie z jego brzmieniem dane o świadczeniu lub istotnej procedurze przekazuje do SIM podwykonawca, dołączając dane usługodawcy, który mu to zlecił, oraz identyfikator umowy, jeżeli dotyczy. Przy podpisywaniu umowy z pracownią warto więc ustalić, kto wysyła komunikat, bo przepis to rozstrzyga, a milcząca umowa nie.

## Czym to wysłać, jeżeli gabinet jest jednofotelowy

Rozporządzenie mówi tylko tyle, że dane idą w postaci elektronicznej, w formacie komunikatów opisanych w Biuletynie Informacji Publicznej ministra zdrowia (§ 7 ust. 1 i 2). Nie wskazuje żadnego produktu.

Centrum e-Zdrowia udostępnia bezpłatną aplikację gabinet.gov.pl i opisuje ją jako „bezpłatna aplikacja dedykowana pracownikom medycznym”. Na konsultowanej stronie z jej funkcjonalnościami wymienione są „Zdarzenia Medyczne” obok e-recept i e-skierowań. Indeksowanie EDM na tej liście nie występuje, więc dla gabinetu, który wytwarza opisy badań, to jest narzędzie do części obowiązku, nie do całości.

Warto też znać mechanizm sprawdzania, bo decyduje o tym, czy raport jest przyjęty. Paragraf 7 ust. 3 opisuje cykl: gabinet wysyła komunikat, jednostka podległa ministrowi (albo NFZ przy świadczeniach publicznych) go weryfikuje i odsyła komunikat zwrotny z potwierdzeniem albo wykazem błędów i braków, a usługodawca „niezwłocznie” przesyła poprawiony komunikat. Wysłanie nie jest więc końcem sprawy, dopóki nie wróciło potwierdzenie.

## Czego to wymaga od programu w gabinecie

Trzy rzeczy, i wszystkie trzy wynikają z przepisów wyżej, a nie z czyjegoś cennika:

1. **Daty i godziny rozpoczęcia oraz zakończenia świadczenia**, zapisywane osobno. Bez nich nie da się ani policzyć terminu z § 6 ust. 1, ani rozpoznać przypadku z ust. 2.
2. **Ślad, czy przy wizycie powstał dokument z listy EDM**, oraz miejsce jego przechowywania. Indeks wymaga identyfikatora, rodzaju, daty wytworzenia i adresu repozytorium, więc program musi te cztery rzeczy wiedzieć.
3. **Możliwość poprawienia tego, co już wysłane.** Paragraf 6 ust. 3 i § 7 ust. 1 zakładają uzupełnianie i zmianę danych, a § 7 ust. 3 pkt 6 wymaga poprawionego komunikatu po otrzymaniu wykazu błędów.

Pytanie do obecnego dostawcy jest przy tym konkretniejsze niż „czy obsługujecie P1”. Brzmi ono: czy wysyłacie komunikat ZM, czy indeksujecie EDM, i co się dzieje z komunikatem zwrotnym, gdy wróci z błędem.

W Polsce [Dentalpin](/pl/cennik/) nie wysyła komunikatów ZM do SIM i nie indeksuje EDM, i nie udajemy, że to robi. Prowadzi natomiast dokumentację po stronie gabinetu z datą i godziną rozpoczęcia oraz zakończenia każdego świadczenia, czyli dane, od których liczy się termin z § 6, i pozwala je wyeksportować. Jeżeli twój obecny program także tego nie wysyła, odpowiedź na powyższe trzy pytania jest tym, co warto mieć na piśmie przed podpisaniem kolejnej umowy.

Co ten artykuł pomija świadomie: sama treść wpisu po wizycie jest tematem osobnym i opisaliśmy ją w [dokumentacji medycznej po wizycie stomatologicznej](/pl/blog/dokumentacja-medyczna-po-wizycie-stomatologicznej/), a rejestracja samego gabinetu w RPWDL w [wpisie do rejestru](/pl/blog/wpis-do-rejestru-gabinet-stomatologiczny/).

## Źródła

- Ustawa z dnia 28 kwietnia 2011 r. o systemie informacji w ochronie zdrowia, tekst jednolity obwieszczony 17 września 2026 r., Dz. U. z 2026 r. poz. 1304 (ogłoszony 7 października 2026 r.): art. 2 pkt 6 (definicja EDM i karta pacjenta), art. 2 pkt 15 (usługodawca), art. 11 ust. 1, 4, 4a, 5, 5a, 5b i 5c, art. 13a oraz art. 56 ust. 2a: [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2026/1304/text/O/D20261304.pdf) (dostęp 30 października 2026)
- Rozporządzenie Ministra Zdrowia z dnia 26 czerwca 2020 r. w sprawie szczegółowego zakresu danych zdarzenia medycznego przetwarzanego w systemie informacji oraz sposobu i terminów przekazywania tych danych do Systemu Informacji Medycznej, tekst jednolity obwieszczony 26 czerwca 2025 r., Dz. U. z 2025 r. poz. 866 (ogłoszony 2 lipca 2025 r.): § 2 ust. 1 pkt 6 (indeks EDM, HL7 i DICOM), § 2a (podwykonawstwo), § 6 ust. 1–3 (terminy) oraz § 7 (postać i weryfikacja komunikatów): [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2025/866/text/O/D20250866.pdf) (dostęp 30 października 2026)
- Rozporządzenie Ministra Zdrowia z dnia 8 maja 2018 r. w sprawie rodzajów elektronicznej dokumentacji medycznej, tekst jednolity obwieszczony 30 lipca 2026 r., Dz. U. z 2026 r. poz. 1059 (ogłoszony 6 sierpnia 2026 r.): § 1, dziewięć rodzajów EDM: [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2026/1059/text/O/D20261059.pdf) (dostęp 30 października 2026)
- Rozporządzenie Ministra Zdrowia z dnia 9 lipca 2025 r. zmieniające rozporządzenie w sprawie rodzajów elektronicznej dokumentacji medycznej, Dz. U. z 2025 r. poz. 930: dodanie pkt 8 i 9, wejście w życie 26 lipca 2025 r.: [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2025/930/text/O/D20250930.pdf) (dostęp 30 października 2026)
- Ustawa z dnia 27 sierpnia 2004 r. o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych, tekst jednolity Dz. U. z 2024 r. poz. 146, art. 5 pkt 41 (definicja świadczeniodawcy): [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2024/146/text/O/D20240146.pdf) (dostęp 30 października 2026)
- Ustawa z dnia 15 maja 2026 r. o zmianie niektórych ustaw w związku z rozwojem usług e-zdrowia, Dz. U. z 2026 r. poz. 791: art. 30b ustawy o prawach pacjenta, karta pacjenta generowana przez SIM na żądanie pracownika medycznego: [eli.gov.pl](https://eli.gov.pl/api/acts/DU/2026/791/text/O/D20260791.pdf) (dostęp 30 października 2026)
- Centrum e-Zdrowia, „System e-zdrowie (P1)”: zakres systemu niezależnie od źródła finansowania świadczeń oraz gromadzenie indeksów EDM: [cez.gov.pl](https://www.cez.gov.pl/pl/nasze-produkty/e-zdrowie-p1) (dostęp 30 października 2026)
- Centrum e-Zdrowia, „Aplikacja gabinet.gov.pl”: bezpłatność, adresaci i lista funkcjonalności obejmująca Zdarzenia Medyczne: [cez.gov.pl](https://www.cez.gov.pl/pl/nasze-produkty/e-zdrowie-p1/nasze-produkty/e-zdrowie-p1/gabinetgovpl) (dostęp 30 października 2026)

Widzisz w tym artykule coś nieaktualnego? Teksty jednolite tych przepisów zmieniały się w 2025 i 2026 roku kilka razy. [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions), a poprawimy.
