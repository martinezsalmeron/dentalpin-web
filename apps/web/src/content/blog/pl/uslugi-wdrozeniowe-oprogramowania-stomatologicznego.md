---
title: "Usługi wdrożeniowe na programie stomatologicznym open source"
description: "Program jest darmowy, usługa nie: wdrożenie, migracja, sprawdzone kopie i wsparcie. Co pozwala licencja i dlaczego podpisujesz umowę powierzenia danych."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, wdrozenia, uslugi-it, rodo, program-stomatologiczny]
---

Na programie stomatologicznym z otwartym kodem da się zbudować firmę usługową, a to, za co bierzesz pieniądze, nigdy nie jest sam program. Bierzesz za wdrożenie, migrację danych, kopie zapasowe, które ktoś naprawdę odtworzył, aktualizacje i za to, że jesteś pod telefonem, kiedy gabinet w poniedziałek rano nie może otworzyć kalendarza wizyt. O tym, czy taki biznes się utrzyma, decydują dwie rzeczy: na co pozwala licencja i to, że w chwili dotknięcia danych pacjentów stajesz się podmiotem przetwarzającym, z umową do podpisania.

Żadna z nich nie jest przeszkodą. Obie są pracą, a praca jest fakturowana.

## Sprzedajesz nie program, tylko poniedziałek o dziewiątej

Mały gabinet stomatologiczny nie kupuje technologii. Kupuje pewność, że rejestracja otworzy kalendarz wizyt. Katalog usług, który z tego wynika, jest krótki i powtarza się przy każdym wdrożeniu.

- **Instalacja i utwardzenie systemu.** Serwer, certyfikat, zapora, konta systemowe i konfiguracja, która nie zależy od tego, czy pamiętasz, jak ją zostawiłeś.
- **Migracja danych.** Wyciągnięcie pacjentów, dokumentacji medycznej, kosztorysów i wizyt ze starego programu, a potem uzgodnienie sum, zanim uznasz wczytanie za udane.
- **Sprawdzone kopie zapasowe.** Kopia, której nikt nigdy nie odtworzył, nie jest kopią, tylko plikiem. Testowe odtworzenie to produkt z datą.
- **Aktualizacje.** Wydania mniejsze, co kilka lat duża aktualizacja PostgreSQL i okno serwisowe uzgodnione z gabinetem.
- **Wsparcie z zapisanymi godzinami.** Nie «kiedy będę mógł». Te godziny, ten kanał, ten czas reakcji.
- **Szkolenie zespołu.** Dwa krótkie spotkania na starcie i jedno po trzech miesiącach dają więcej niż pięćdziesięciostronicowa instrukcja.

![Ekran główny z dzisiejszymi wizytami, informacją kto jest w gabinecie, zaległymi płatnościami i ostatnimi pacjentami](/screenshots/home.png)

*Ekran, na który zespół patrzy jako pierwszy rano. Kiedy się nie ładuje, gabinet dzwoni do tego, kto postawił serwer.*

## Przeczytaj licencję, zanim podasz cenę

Open source nie znaczy «rób, co chcesz». Wiele produktów na tym rynku wychodzi na Business Source License 1.1, a to szablon z lukami, które każdy projekt wypełnia inaczej.

Podstawowy tekst BSL 1.1 przyznaje dosłownie «the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work». Użycie produkcyjne, czyli dokładnie to, co twój klient robi przez cały dzień, zależy od Additional Use Grant, który wpisuje wydawca.

| Co chcesz zrobić | Na licencji BSL 1.1 |
|---|---|
| Przeczytać i zaudytować kod | ✓ Przyznane w tekście podstawowym |
| Zmodyfikować go dla klienta | ✓ Przyznane w tekście podstawowym |
| Uruchomić go na serwerze gabinetu | ~ Zależy od Additional Use Grant |
| Fakturować swoje godziny za wdrożenie i utrzymanie | ~ Licencja reguluje program, nie twój czas |
| Odsprzedawać go jako własny SaaS dla wielu klientów | ✗ To zwykle wyraźne ograniczenie |

Czwarty wiersz czyta się najczęściej opacznie. Licencja oprogramowania stawia warunki korzystaniu z programu i jego rozpowszechnianiu, a nie twojej fakturze za usługi; zablokować może konkretną konstrukcję, na której chciałeś zarabiać.

> **Granica przebiega przy stawianiu własnego SaaS, nie przy płatnym wdrożeniu.** Hostowanie instancji jednego gabinetu dla tego gabinetu i fakturowanie mu utrzymania to inny przypadek niż uruchomienie platformy dla wielu klientów, konkurującej z wydawcą programu. Jeśli twój model zbliża się do tej linii, licencja sama mówi, co zrobić: kupić licencję komercyjną u licencjodawcy albo się powstrzymać.

W razie wątpliwości zapytaj, zanim podpiszesz umowę z klientem. Projekty na BSL zwykle podają kontakt do rozmowy o alternatywnych warunkach licencyjnych, a taka rozmowa kosztuje jeden e-mail.

To nie jest porada prawna. To lektura publicznego tekstu, a konkretną umowę musi zobaczyć prawnik.

## Kiedy dotykasz danych pacjentów, jesteś podmiotem przetwarzającym

Tu wielu dobrych informatyków tworzy sobie problem, którego dało się uniknąć. Jeśli administrujesz serwerem, na którym leży dokumentacja medyczna, przetwarzasz dane o zdrowiu w imieniu gabinetu, a RODO ma na to nazwę.

Urząd Ochrony Danych Osobowych stawia sprawę wprost: «Przetwarzanie przez podmiot przetwarzający odbywa się na podstawie pisemnej umowy między administratorem i podmiotem przetwarzającym», a taka umowa «określa m.in. przedmiot i czas trwania przetwarzania, charakter i cel przetwarzania, rodzaj danych osobowych». Nie jest to formalność bez konsekwencji: w opisanej na tej samej stronie sprawie «UODO nałożył administracyjną karę pieniężną w kwocie 2,5 tys. zł na Sułkowicki Ośrodek Kultury» za powierzenie danych bez pisemnej umowy i brak weryfikacji gwarancji przetwarzającego.

W przełożeniu na twój tydzień pracy to cztery konkretne decyzje:

1. **Podpisz umowę, zanim dotkniesz pierwszego rekordu**, a nie po migracji. Data umowy powinna być wcześniejsza niż twój pierwszy dostęp.
2. **Zgłoś swoich podwykonawców.** Jeśli serwer stoi u dostawcy hostingu, ten dostawca jest podmiotem podpowierzonym i gabinet musi móc go zaakceptować.
3. **Dokumentuj polecenia.** E-mail z gabinetu z prośbą o eksport to udokumentowane polecenie. Rozmowa telefoniczna nie zostawia śladu.
4. **Ustal, co dzieje się na końcu.** Zwrot albo usunięcie danych po zakończeniu usługi, z pisemnym potwierdzeniem tego, co zrobiłeś.

> **Umowa powierzenia to nie papierologia, to granica twojej odpowiedzialności.** Bez niej każdy incydent omawia się bez dokumentu mówiącego, o co cię proszono, a o co nie. Z nią zakres tego, czym administrowałeś, jest spisany.

## Trzy modele rozliczeń, które się bronią

Wszystkie trzy działają. Nie działa mieszanie ich po cichu, bo klient kończy w przekonaniu, że utrzymanie było wliczone we wdrożenie.

| Model | Co obejmuje | Kiedy pasuje |
|---|---|---|
| Projekt ryczałtowy | Wdrożenie, migracja i szkolenie, stała cena i stały zakres | Otwarcie gabinetu albo zmiana programu |
| Abonament miesięczny | Kopie, aktualizacje, monitoring i wsparcie w ustalonych godzinach | Gabinety bez własnego informatyka, czyli prawie wszystkie |
| Pakiet godzin | Prace doraźne poza zakresem abonamentu | Integracje, raporty na zamówienie, wymiana sprzętu |

Abonament jest tym, co zamienia to w firmę zamiast w ciąg zleceń. Wymusza też dyscyplinę monitoringu, bo pobieranie miesięcznej opłaty bez wiedzy, czy serwer nadal wykonuje kopie, to sprzedawanie ubezpieczenia bez patrzenia na ryzyko.

## Wdrożenie, które powtórzysz w kolejnym gabinecie

Pierwsze wdrożenie trwa tyle, ile trwa. Piąte jest opłacalne tylko wtedy, gdy pierwsze zostawiło spisaną procedurę.

1. **Zrób inwentaryzację.** Jaki program, jaka wersja, gdzie leżą dane i kto ma dziś hasło administratora.
2. **Postaw środowisko testowe** na kopii prawdziwych danych, nigdy na instalacji, z której gabinet korzysta.
3. **Zmigruj, a potem uzgodnij liczby.** Liczba pacjentów, przyszłe wizyty, otwarte kosztorysy, saldo zaległości. Jeśli któraś suma się nie zgadza, nie skończyłeś.
4. **Przez tydzień pracuj równolegle**, ze starym programem dostępnym do odczytu.
5. **Wykonaj testowe odtworzenie** z kopii, z zegarkiem w ręku, i zapisz, ile trwało.
6. **Przeszkol w dwóch krótkich sesjach**, jednej dla rejestracji i kalendarza, drugiej przy fotelu.
7. **Przełącz się w spokojny dzień**, nie w poniedziałek i nie w przeddzień urlopu.
8. **Przekaż dane dostępowe na piśmie** osobie odpowiedzialnej w gabinecie, z listą usług i informacją, gdzie co leży.

![Schemat instalacji na własnym serwerze: przeglądarka, Caddy na porcie 443, frontend Nuxt, API i baza danych PostgreSQL](/diagrams/install-stack.svg)

*Elementy, za które odpowiadasz od dnia podpisania umowy serwisowej. Każdy prostokąt ma kogoś, kto go aktualizuje, i tym kimś jesteś ty.*

## SLA, o które gabinet zapyta, nie używając tego słowa

Żaden gabinet stomatologiczny nie prosi o SLA. Pyta, do kogo dzwoni we wtorek o wpół do dziewiątej. Zapisz te pięć odpowiedzi, a będziesz mieć spisaną umowę:

- **Godziny obsługi** i co dzieje się poza nimi, z sobotami włącznie, jeśli gabinet przyjmuje.
- **Czas reakcji i zakładany czas naprawy**, które nie są tym samym i warto je rozdzielić.
- **Ile danych można stracić** w najgorszym przypadku, czyli jak często wykonywana jest kopia.
- **Ile trwa powrót do pracy** z ostatniej kopii, zmierzone w prawdziwym teście, a nie oszacowane.
- **Czyj jest serwer i czyje są dane**, a to zawsze musi być gabinet, nawet jeśli administrujesz ty.

## Klauzulę wyjścia napisz sam

Dzień, w którym przestajecie współpracować, przychodzi w każdej umowie i przebiega lepiej, gdy był przewidziany. To także twój najmocniejszy argument handlowy wobec zamkniętego dostawcy.

- **Dane dostępowe należą do gabinetu**, w menedżerze haseł, który jest jego, od pierwszego dnia.
- **Dane wychodzą w udokumentowanym otwartym formacie**, a udowadniasz to raz w roku, robiąc prawdziwy eksport.
- **Procedura jest spisana** w dokumencie, który gabinet przechowuje, a nie w twojej głowie.
- **Licencja przeżyje twoją firmę.** Przy wolnym oprogramowaniu albo otwartym kodzie inny informatyk może przejąć pracę bez renegocjacji z kimkolwiek.

> **Dostawca, który odchodzi, nie zostawiając systemu w rękach gabinetu, nie jest dostawcą, tylko kłódką.** To, co czyni twoją usługę atrakcyjną wobec zamkniętej licencji, jest właśnie tym: gabinet mógłby cię zmienić i nic by nie stracił.

## Gdzie w tym mieści się Dentalpin

Dentalpin wychodzi na BSL 1.1, a jego plik `LICENSE` wypełnia dokładnie omawiane wyżej luki: ograniczenie użycia zakazuje «providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work», data zmiany to cztery lata od publikacji, a licencją docelową jest Apache 2.0. Dla wdrożeniowca oznacza to, że instalowanie, hostowanie i utrzymywanie instancji konkretnego gabinetu leży gdzie indziej niż uruchamianie konkurencyjnego SaaS stomatologicznego, a jeśli twój model zbliża się do tej linii, sam plik odsyła do rozmowy o alternatywnych warunkach z licencjodawcą. To, ile gabinet płaci za produkt, jest na [stronie cennika](/pl/cennik/).

## Źródła

- [Business Source License 1.1, tekst licencji](https://mariadb.com/bsl11/), MariaDB. Dostęp 2 września 2026 r.
- [Powierzenie przetwarzania danych trzeba udokumentować](https://uodo.gov.pl/pl/138/2485), Urząd Ochrony Danych Osobowych. Dostęp 2 września 2026 r.
- [Wytyczne 07/2020 dotyczące pojęć administratora i podmiotu przetwarzającego w RODO](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), Europejska Rada Ochrony Danych, wersja ostateczna przyjęta 7 lipca 2021 r. Dostęp 2 września 2026 r.
- Plik `LICENSE` z repozytorium Dentalpin. Dostęp 2 września 2026 r.
