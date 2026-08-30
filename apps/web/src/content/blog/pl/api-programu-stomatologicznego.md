---
title: "API programu stomatologicznego: co powinieneś móc zrobić z własnymi danymi"
description: "Co musi umożliwiać API programu dla gabinetu stomatologicznego: odczyt, zapis, powiadomienia i wyjście. Pytania przed podpisaniem umowy i sposób na test."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, integracje, umowa, eksport-danych, rodo]
---

Powinieneś móc odczytywać i zapisywać spoza programu cztery rzeczy, na których stoi gabinet: pacjentów, wizyty, kosztorysy i faktury. Własnymi danymi dostępowymi, bez proszenia kogokolwiek o zgodę i bez wykupywania osobnego modułu. To jest egzamin praktyczny i bardzo niewiele programów stomatologicznych zdaje go w całości.

Prawo gwarantuje ci wyraźnie mniej, ale coś jednak gwarantuje. Warto wiedzieć co, zanim siądziesz do negocjacji.

## API to drugie drzwi programu

Ekran to drzwi, którymi wchodzą ludzie. API to drzwi, którymi wchodzą inne programy, z tym samym zamkiem i tymi samymi uprawnieniami.

Kiedy API istnieje, formularz rezerwacji na stronie gabinetu zapisuje się wprost w kalendarzu wizyt i nikt niczego nie przepisuje. Kiedy go nie ma, każda integracja zamienia się w osobę przepisującą dane z jednego ekranu na drugi.

![Karta pacjenta na ekranie z danymi osobowymi, kontaktowymi i rozliczeniowymi](/screenshots/patients.png)

*Karta pacjenta z danymi osobowymi, kontaktowymi i rozliczeniowymi rozłożonymi na zakładki.*

## Cztery rzeczy, na które API musi pozwalać

- **Odczyt.** Pobranie listy pacjentów, wizyt z zakresu dat, przyjętych kosztorysów z kwartału. To karmi każdy raport i każdy pulpit.
- **Zapis.** Utworzenie wizyty, założenie karty pacjenta, oznaczenie faktury jako opłaconej. Bez zapisu integracja służy do patrzenia i niewiele więcej.
- **Powiadamianie.** Webhook to program dzwoniący do twojego systemu, kiedy coś się wydarzy, zamiast twojego systemu pytającego co pięć minut, czy się wydarzyło.
- **Wypuszczenie cię.** Zbiorcze pobranie wszystkiego, które nie jest API i go nie zastępuje.

> **API to nie kopia zapasowa i nie eksport.** Przenosi jeden rekord teraz, nie odbuduje gabinetu tego ranka, kiedy serwer nie wstanie. Jeśli API jest odpowiedzią na pytanie „jak wyjmę swoje dane", brakuje połowy odpowiedzi.

## Co gwarantuje prawo, a czego nie

Jest tu pomyłka, która drogo kosztuje. Prawo do przenoszenia danych z RODO należy do pacjenta, nie do gabinetu.

Artykuł 20 ustęp 1 daje osobie, której dane dotyczą, prawo otrzymania jej danych osobowych „w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego" oraz przesłania ich innemu administratorowi. Ustęp 2 dodaje prawo do przesłania danych bezpośrednio między administratorami, „o ile jest to technicznie możliwe". Artykuł 15 ustęp 3 nakazuje wydanie kopii, a przy wniosku złożonym drogą elektroniczną w powszechnie stosowanej formie elektronicznej.

W gabinecie stomatologicznym administratorem jesteś zwykle ty, a dostawca programu jest podmiotem przetwarzającym. Pacjent realizuje więc to prawo wobec gabinetu, a gabinet potrzebuje programu, który potrafi je wykonać. Samo RODO nie daje ci API wobec dostawcy.

To, co zaczyna ci coś dawać, to europejski akt w sprawie danych, Data Act (rozporządzenie (UE) 2023/2854), stosowany od 12 września 2025 roku:

- **Otwarte interfejsy, bezpłatnie.** Artykuł 30 ustęp 2 nakazuje dostawcom usług przetwarzania danych udostępniać otwarte interfejsy wszystkim klientom nieodpłatnie, wraz z informacjami wystarczającymi, „aby umożliwić opracowanie oprogramowania komunikującego się z usługami".
- **Eksport przy zmianie dostawcy.** Artykuł 30 ustęp 5 nakazuje wyeksportować na żądanie klienta wszystkie dane możliwe do wyeksportowania w formacie ustrukturyzowanym, powszechnie używanym i nadającym się do odczytu maszynowego.
- **Bez opłat za odejście od 2027 roku.** Artykuł 29 ustęp 1 zakazuje pobierania opłat za zmianę dostawcy od 12 stycznia 2027 roku. Do tego czasu dopuszczalne są opłaty obniżone, nieprzekraczające rzeczywistych kosztów.

> **Te obowiązki dotyczą zmiany dostawcy, nie twojej codziennej automatyzacji.** Odnoszą się też do tego, co rozporządzenie nazywa usługą przetwarzania danych i definiuje w artykule 2 punkt 8 zasadniczo jako usługę w chmurze. Jeśli twój program działa na licencji na serwerze w gabinecie, ten rozdział nie jest twoją dźwignią. Twoją dźwignią jest umowa.

To nie jest porada prawna. Odesłania i daty dostępu znajdują się na końcu.

## Eksport, API i webhooki rozwiązują różne problemy

| | Eksport | API | Webhooki |
|---|---|---|---|
| Do czego służy | Zabranie wszystkiego | Przeniesienie rekordu teraz | Wiedza, że coś się stało |
| Jak często | ✓ Jednorazowo lub co miesiąc | ✓ Na bieżąco | ✓ W momencie zdarzenia |
| Nadaje się do migracji | ✓ Tak, po to jest | ~ Wolno i po kawałku | ✗ Nie |
| Nadaje się do integracji | ✗ Nie | ✓ Tak | ✓ Tak |
| Działa jak kopia zapasowa | ~ Tylko trzymany poza gabinetem | ✗ Nie | ✗ Nie |
| Zwykle w cenie | ✓ Prawie zawsze | ~ Zależnie od dostawcy | ~ Zależnie od dostawcy |

## Siedem pytań przed podpisaniem umowy

1. **Gdzie jest dokumentacja i czy mogę ją przeczytać teraz, bez podpisywania czegokolwiek?** Publiczny adres, który otworzysz dzisiaj, mówi więcej niż każda odpowiedź handlowca. Jeśli przyślą PDF, zapytaj, z którego jest roku.
2. **Czy jest w abonamencie, czy to osobny moduł?** A jeśli osobny, to ile kosztuje i jaki ma limit wywołań. API rozliczane od użycia zmienia projekt wszystkiego, co na nim zbudujesz.
3. **Czy jest tylko do odczytu?** Połowa wartości leży w zapisie. API tylko do odczytu nie utworzy wizyty, którą pacjent właśnie zarezerwował na twojej stronie.
4. **Jakie obiekty dokładnie obejmuje?** Pacjentów, wizyty, kosztorysy, procedury, faktury, dokumenty, diagram zębowy. Poproś o listę, nie o obietnicę, i sprawdź, czy dokumentacja medyczna jest w środku, czy poza.
5. **Czy są webhooki i jakie zdarzenia wysyłają?** Bez nich każda integracja kończy odpytywaniem w pętli, a to najkrótsza droga do limitu wywołań.
6. **Jakie są limity?** Wywołania na minutę, wielkość strony, liczba kluczy. Opublikowany limit to dobry znak; limit, którego nikt nie potrafi ci podać, poznasz na produkcji.
7. **Co się stanie w dniu, w którym odejdę?** To, że API zostaje czynne przez okres wypowiedzenia z pełnym dostępem do odczytu, powinno stać w umowie obok klauzuli o eksporcie.

## Pięć rzeczy, które załatwiają się same, gdy jest API

- **Strona zapisuje w kalendarzu wizyt.** Pacjent rezerwuje, wizyta pojawia się sama, wieczorem nikt nic nie przepisuje.
- **Kwartalne liczby dla księgowej.** Raport generujący się sam pierwszego dnia miesiąca zamiast popołudnia z eksportem i ręcznym uzgadnianiem.
- **Przypomnienia kanałem, którego już używasz.** Jeśli twój dostawca wiadomości nie jest zintegrowany, przez API podłączysz go sam. Bez API czekasz, aż zrobi to producent.
- **Własny pulpit wskaźników.** Wykorzystanie fotela, akceptacja kosztorysów i zaległości płatnicze, według twoich definicji, a nie definicji producenta.
- **Czyszczenie duplikatów hurtem.** Znalezienie ich przez odczyt całej bazy to pół godziny. Ekran po ekranie to miesiąc.

![Widok dnia w kalendarzu wizyt z wizytami rozłożonymi w kolumnach i przedziałach godzinowych](/screenshots/schedule-day.png)

*Kalendarz wizyt w widoku dnia, z wizytami rozłożonymi w kolumnach i przedziałach godzinowych.*

## Jak przetestować API w dwadzieścia minut, nie będąc programistą

1. **Poproś o adres dokumentacji.** Otwórz go w telefonie przy handlowcu. Albo się wczyta, albo już czegoś się dowiedziałeś.
2. **Znajdź sekcję o uwierzytelnianiu.** Musi wyjaśniać, jak zdobyć klucz bez dzwonienia na wsparcie.
3. **Poproś o środowisko testowe.** Pierwszego wywołania nigdy nie robi się na prawdziwych danych gabinetu.
4. **Skopiuj przykład z samej dokumentacji.** Niemal każda podaje linię gotową do wklejenia w terminalu:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.przyklad.pl/v1/patients
```

5. **Sprawdź zapis.** Utworzenie wizyty testowej i zobaczenie jej w kalendarzu to moment, w którym wiesz, czy integracja jest prawdziwa.
6. **Poszukaj w dokumentacji słowa „limit".** Jeśli go nie ma, zapytaj pisemnie i zachowaj odpowiedź.

Jeśli któryś z tych sześciu kroków wymaga spotkania, to też jest odpowiedź.

## Gdzie w tym wszystkim jest DentalPin

W DentalPin każda funkcja wystawia endpoint REST udokumentowany w OpenAPI, wliczony w cenę i z webhookami, bo produkt instaluje się na twoim serwerze, a integracja nie powinna zależeć od naszej zgody. Co wchodzi w skład, widać w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), art. 15 ust. 3, art. 20 ust. 1 i ust. 2: [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016R0679). Dostęp 30 sierpnia 2026 r.
- Rozporządzenie (UE) 2023/2854 (Data Act), art. 2 pkt 8, art. 29 ust. 1 i 2, art. 30 ust. 2 i 5 oraz art. 50: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32023R2854). Dostęp 30 sierpnia 2026 r.
