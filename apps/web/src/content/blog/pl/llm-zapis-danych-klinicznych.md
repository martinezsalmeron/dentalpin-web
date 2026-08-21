---
title: "Jak dać LLM-owi prawo zapisu danych klinicznych, żeby nie było to szaleństwo"
description: "Model nigdy nie zapisuje: proponuje wąską operację, kod ponownie sprawdza uprawnienia, a człowiek zatwierdza każdą zmianę. Architektura, granice i źródła."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ai, llm, architektura, bezpieczenstwo, rodo]
---

Krótka odpowiedź jest taka, że model nigdy nie zapisuje. Proponuje wywołanie jednej wąskiej, typowanej operacji, twój własny kod ponownie sprawdza uprawnienia osoby, która zapytała, a wszystko, co zmienia dane, zatrzymuje się do momentu, w którym człowiek to zatwierdzi. LLM rozumie zdanie, a wykonuje je zwykły kod backendu.

Poniżej jest podział odpowiedzialności, który czyni to obronnym, to co organy nadzoru mówią dziś o agentach wykonujących działania, i powód, dla którego okno potwierdzenia jest najłatwiejszym elementem do zepsucia.

## Trzy właściwości, których agent nie może mieć jednocześnie

Hiszpański organ ochrony danych opublikował w lutym 2026 roku wytyczne o agentowej sztucznej inteligencji, które przedstawiają tak zwaną regułę dwóch w wersji przeformułowanej dla agentów AI. Wyznacza ona minimalny poziom gwarancji, którego nie wolno przekroczyć, i opiera się na trzech właściwościach:

1. **Przetwarzanie niekontrolowanych treści**, czyli tekstu, który trafia do kontekstu modelu, choć nie napisała go osoba upoważniona.
2. **Dostęp do informacji wrażliwych**, co w gabinecie stomatologicznym oznacza z definicji całą dokumentację medyczną.
3. **Wykonywanie działań automatycznych** ze skutkiem wewnątrz organizacji albo poza nią.

Agent, który łączy wszystkie trzy, nie powinien być dopuszczony. Dokument omawia przypadki po kolei: tam, gdzie niekontrolowane treści mogą uruchomić dostęp do informacji wrażliwych, trzeba uniemożliwić każde automatyczne działanie bez nadzoru człowieka, zarówno wewnątrz organizacji, jak i na zewnątrz.

> **Asystent w gabinecie ma dwie pierwsze właściwości od pierwszego dnia.** Czyta tekst pisany przez pacjentów i osoby trzecie, a pracuje na danych o zdrowiu, czyli szczególnej kategorii z art. 9 RODO. Jedyna z trzech, z której możesz zrezygnować, to trzecia, a rezygnacja znaczy dokładnie tyle: żadnego zapisu bez człowieka przy ekranie.

To decyzja architektoniczna i podejmuje się ją przed napisaniem pierwszej linii kodu. Wszystko dalsze z niej wynika.

## Prawo zapisu to narzędzia, a nie dostęp do bazy

Danie modelowi prawa zapisu to nie połączenie z PostgreSQL ani endpoint przyjmujący SQL. To opublikowanie małego katalogu operacji, każdej z typowanymi parametrami i tą samą walidacją, którą wykonuje interfejs.

Dla zdania w rodzaju "przenieś Martę z wtorku na czwartek na dziesiątą" droga wygląda tak:

1. **Model dostaje zdanie i katalog narzędzi**, nigdy schemat bazy danych.
2. **Zwraca propozycję**: którą operację chce wywołać i z jakimi argumentami. Do tej pory nic się nie stało, to tekst.
3. **Backend waliduje argumenty** tym samym schematem, który waliduje formularz, i odrzuca to, co nie pasuje.
4. **Uprawnienia są sprawdzane ponownie**, dla osoby, która zapytała, w punkcie wykonania.
5. **Jeśli operacja zmienia dane, zatrzymuje się** i prosi o wyraźne potwierdzenie, pokazując, co ma się zmienić.
6. **Zostaje wykonana i zapisana w logu**: które narzędzie, jakie argumenty, kto poprosił i kto zatwierdził.

Krok 4 jest tym, który zespoły pomijają. Filtrowanie listy narzędzi przed wysłaniem jej do modelu jest przydatną podpowiedzią, ale nie jest kontrolą dostępu. Kontrola musi siedzieć tam, gdzie wywołanie jest wykonywane, bo to jedyne miejsce, przez które przechodzą wszystkie.

![Asystent AI w Dentalpin z listą dostępnych scenariuszy pracy i otwartą rozmową](/screenshots/ai-copilot.png)

*Agent proponuje; katalog po lewej to wszystko, o co może w ogóle poprosić.*

## Zasada minimalnych uprawnień, zastosowana do agenta, a nie do użytkownika

Hiszpańskie wytyczne mówią wprost: podstawową zasadą w środowisku agentowej AI jest zasada minimalnych uprawnień, wraz z ograniczeniem eskalacji uprawnień i dziedziczenia tożsamości. W praktyce zostaje jedna sprawdzalna reguła: agent nie może zobaczyć ani zrobić niczego, czego pytająca osoba nie mogłaby zrobić sama w programie.

- **Bez własnej tożsamości.** Agent działa w sesji osoby, która pisze, a nie na koncie serwisowym z szerokimi uprawnieniami. Konto serwisowe zamienia każdy błąd modelu w pełny dostęp.
- **Oddzielony per gabinet.** Ten sam agent obsługujący kilka podmiotów musi dzielić pamięć i kontekst na przegrody, inaczej pomiesza dane z niepowiązanych spraw.
- **Bez narzędzi, które poszerzają zasięg.** Każde opublikowane narzędzie to nowa powierzchnia ataku, a ten sam dokument zauważa, że dodawanie narzędzi to zwykły sposób przypadkowego nadawania uprawnień.
- **Nic nieodwracalnego.** Usuwanie, łączenie dwóch pacjentów albo anulowanie wystawionej faktury to nie operacje dla agenta, ile potwierdzeń by przed nimi nie postawić.

## Okno potwierdzenia to nie nadzór człowieka

Tutaj większość zespołów uważa, że już jest w porządku. Nadzór musi być prawdziwy, a organy nadzoru powiedziały konkretnie, co to znaczy.

Artykuł 22 RODO daje prawo do tego, by nie podlegać decyzji opartej wyłącznie na zautomatyzowanym przetwarzaniu, która wywołuje skutki prawne albo w podobny sposób istotnie wpływa na osobę. Hiszpański organ przypomina, że dołożenie agenta może oznaczać automatyzację, ale nie zawsze oznacza decyzję zautomatyzowaną w rozumieniu art. 22, a kiedy oznacza, trzeba przejść przez warunki z art. 22 ust. 2, zabezpieczenia z ust. 3 i ograniczenia z ust. 4 dotyczące szczególnych kategorii danych.

Francuska CNIL w nocie z lipca 2026 roku idzie do sedna: samo istnienie ludzkiej interwencji na wyjściu nie wystarcza, by wykluczyć, że decyzja jest wyłącznie zautomatyzowana, a powołując się na wyrok Trybunału Sprawiedliwości w sprawie SCHUFA, dodaje, że interwencja człowieka musi być rzeczywista, skuteczna i mieć wpływ na ostateczną decyzję, bo zatwierdzenie czysto formalne albo automatyczne nie jest wystarczające.

> **Jeśli osoba zatwierdzająca nie może powiedzieć nie, to nie nadzoruje.** Musi widzieć, co ma się zmienić, mieć czas i pozycję, żeby odmówić, i nie ponosić za odmowę żadnej ceny. Przycisk klikany czterdzieści razy dziennie bez czytania to automatyczny podpis z dodatkowymi krokami.

Jest jeszcze pokusa, którą hiszpański organ nazywa wprost: przeniesienie całej odpowiedzialności na użytkownika albo na nadzór człowieka. Kiedy coś się psuje, wygodnie jest wskazać tego, kto kliknął, a nie projekt, który błąd umożliwił. Żadna z tych dwóch ról nie zastępuje staranności tych, którzy decydują, jak system działa.

## Ile autonomii da się obronić, zależnie od tego, czego dotyka działanie

| | Zapytania tylko do odczytu | Zapisy z potwierdzeniem | Zapisy autonomiczne |
|---|---|---|---|
| Niekontrolowany tekst w kontekście | ✓ Dopuszczalne | ~ Tylko z realnym potwierdzeniem | ✗ Łączy trzy właściwości |
| Dosięga danych z art. 9 | ~ Przy minimalnych uprawnieniach | ~ Przy minimalnych uprawnieniach | ✗ Nie do obrony |
| Odwracalne bez odtwarzania bazy | ✓ Nie ma czego cofać | ✓ Tak | ✗ Zależy od operacji |
| Art. 22 w grze | ✓ Nie | ~ Zależnie od skutku dla pacjenta | ✗ Tak, jeśli dotyczy pacjenta |
| Na kogo wskazuje log | Na osobę, która zapytała | Na pytającego i zatwierdzającego | Na nikogo |

Ostatnia kolumna to nie przypadek do lepszego zaprojektowania. To przypadek, którego się nie buduje, dopóki pozostałe dwie właściwości są na miejscu.

## Log musi odtworzyć decyzję, a nie tylko zapis

Zachowanie `UPDATE` nie wystarcza. Odtworzyć trzeba cały łańcuch: o co poproszono, co zaproponował model, co zostało zwalidowane, kto zatwierdził i jakie dane się poruszyły.

Hiszpańskie wytyczne nazywają to identyfikowalnością danych w całym cyklu życia i wymagają logów przetwarzanych informacji z kroków rozumowania, wykorzystanych źródeł i wywołanych usług. CNIL prosi o to samo od strony użytkownika: dla każdego wykonanego zadania powinno być możliwe wskazanie danych osobowych, które zostały użyte, agentów, którzy działali, usług zewnętrznych, do których sięgnięto, i ich kolejności w czasie.

![Karta pacjenta w Dentalpin, zakładka aktywności, z historią filtrowalną po wizytach, zabiegach i komunikacji](/screenshots/patient-timeline.png)

*Historia pacjenta to miejsce, w którym zmiana wykonana przez agenta musi pojawić się tak samo jak każda inna.*

## Czego świadomie nie daliśmy modelowi

Przycięcie zakresu usunęło więcej ryzyka niż jakikolwiek środek dodany później.

- **Dowolny tekst kliniczny nie wychodzi.** Identyfikatory pacjenta są zamieniane na deterministyczne tokeny, zanim cokolwiek wyjdzie do dostawcy AI, a notatki kliniczne w formie dowolnego tekstu zostają poza tą drogą.
- **Żadnej diagnozy ani wskazań leczniczych.** Proponowanie leczenia zmienia to, czym produkt jest, i obowiązki, które za tym idą. Kalendarz wizyt, płatności, zaproszenia na kontrolę i wyszukiwanie to nie to.
- **Żadnego samodzielnego działania na danych.** Poranne podsumowanie powstaje z deterministycznych zapytań, bez LLM-a i bez danych pacjenta wychodzących na zewnątrz. To najbardziej użyteczna lekcja z całego projektu: spora część tego, o co ludzie proszą agenta, nie potrzebuje modelu.

## Przed wdrożeniem na produkcję

1. **Wypisz listę operacji, które agent może wywołać**, i uzasadnij każdą. Jeśli nie mieści się na jednej stronie, jest za duża.
2. **Przetestuj wstrzyknięcie pośrednie**: wpisz instrukcje w pole tekstowe wypełniane przez pacjenta i sprawdź, czy agent ich nie wykona. Hiszpańskie wytyczne odróżniają wstrzyknięcie bezpośrednie od pośredniego, które ukrywa instrukcje w źródłach czytanych przez agenta.
3. **Spróbuj podnieść uprawnienia**: zaloguj się na konto o ograniczonym zakresie i poproś o coś poza nim. Jeśli agent to zrobi, kontrola była w złym miejscu.
4. **Przeczytaj log całej jednej rozmowy** i sprawdź, czy osoba z zewnątrz odtworzyłaby przebieg zdarzeń.
5. **Policz potwierdzenia na dzień.** Jeśli jest ich dużo, nadzór zdegraduje się sam, a to problem projektu, nie ludzi.
6. **Udokumentuj, co wychodzi do dostawcy AI**, na jakiej podstawie prawnej i na podstawie jakiej umowy z art. 28.

W Dentalpin agent działa właśnie tak: wywołuje te same operacje co interfejs, ponownie sprawdza uprawnienia w punkcie wykonania, tokenizuje dane pacjenta przed ich wysłaniem, zatrzymuje się po potwierdzenie przy każdym zapisie i zostawia każde wywołanie w logu audytowym. Jeśli chcesz to obejrzeć na własnym serwerze, warunki są w [cenniku](/pl/cennik/).

## Źródła

- AEPD (hiszpański organ ochrony danych), *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, wersja 1.2, luty 2026: reguła dwóch (s. 41-43), art. 22 (s. 39-40), wstrzykiwanie promptów (s. 51-52), identyfikowalność (s. 68-69), zarządzanie uprawnieniami (s. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Dostęp 17 sierpnia 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles*, lipiec 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Dostęp 17 sierpnia 2026.
- Rozporządzenie (UE) 2016/679 (RODO), art. 9, 22, 28 i 32.
- TSUE, sprawa C-634/21 (SCHUFA Holding), wyrok z 7 grudnia 2023 r., cytowany w powyższej nocie CNIL.

To nie jest porada prawna. Jeśli twój system podejmuje decyzje dotyczące pacjentów, oceń konkretny przypadek z inspektorem ochrony danych przed uruchomieniem.
