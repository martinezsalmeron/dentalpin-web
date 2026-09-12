---
title: "Alergie i ostrzeżenia medyczne: żeby zawsze były widoczne"
description: "Sześć pól na każdą alergię, trzy poprawne odpowiedzi gdy alergii nie ma i cztery miejsca, w których ostrzeżenie musi pojawić się samo. Ze źródłami."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [alergie, ostrzezenia-kliniczne, dokumentacja-medyczna, bezpieczenstwo-pacjenta, rodo]
---

Alergia chroni pacjenta tylko wtedy, gdy ma własne pole i pojawia się sama tam, gdzie wypisujesz receptę i gdzie leczysz. Przy każdej zapisuje się sześć rzeczy: substancję, co się pacjentowi stało, jak ciężko, czy jest nadal aktualna, czy jest potwierdzona czy tylko zgłoszona, oraz kiedy i kto ją podał.

A kiedy alergii nie ma, to też się zapisuje. Puste pole alergii nie mówi, że pacjent ich nie ma. Mówi, że nikt jeszcze nie zapytał, a te dwa zdania prowadzą do różnych decyzji.

## Sześć pól na alergię, i żadne z nich nie jest tekstem dowolnym

Alergia wpisana w okienko uwag ginie w dniu, w którym to okienko ma jedenaście linijek. Przestaje się filtrować, przestaje kogokolwiek ostrzegać i przestaje dać się przenieść do innego programu.

| Pole | Co się w nim zapisuje | Przykład |
|---|---|---|
| Substancja | Substancja czynna albo materiał, nigdy sama nazwa handlowa | Amoksycylina, lateks, chlorheksydyna, nikiel |
| Objaw | Co się faktycznie stało, w kategoriach klinicznych | Pokrzywka, obrzęk naczynioruchowy, skurcz oskrzeli, anafilaksja |
| Ciężkość | Jak przebiegła reakcja, która już wystąpiła | Łagodna, umiarkowana, ciężka |
| Krytyczność | Możliwa szkoda przy kolejnej ekspozycji | Niska, wysoka, nie do oceny |
| Status kliniczny | Czy alergia jest dziś nadal aktualna | Aktywna, nieaktywna, ustąpiła |
| Weryfikacja | Skąd pochodzi informacja | Niepotwierdzona, potwierdzona, wykluczona, błąd wpisu |
| Data i źródło | Kiedy wpisano i kto to powiedział | 12.03.2024, sama pacjentka; wynik z poradni alergologicznej |

Te pola nie są naszą wewnętrzną konwencją. To elementy zasobu AllergyIntolerance ze standardu HL7 FHIR, którym systemy ochrony zdrowia wymieniają się tą informacją, a używanie jego wartości jest tym, co pozwala alergii przetrwać zmianę programu.

> **Ciężkość i krytyczność to dwa różne pola, a połączenie ich opróżnia oba.** FHIR umieszcza ciężkość przy konkretnej reakcji, która wystąpiła (łagodna, umiarkowana lub ciężka), a krytyczność przy substancji, jako ocenę możliwej szkody przy przyszłej ekspozycji. Program z jedną listą rozwijaną zmusza do wyboru, które z tych dwóch tracisz.

![Karta pacjenta w zakładce informacji, z rozwiniętym wywiadem medycznym i sekcją alergii pokazującą NLPZ oznaczone wysoką krytycznością](/screenshots/patients.png)

*Wywiad medyczny w osobnych polach: alergie, leki, choroby ogólnoustrojowe i szczególne okoliczności. Pomarańczowa etykieta obok alergii to poziom krytyczności.*

## "Brak znanych alergii" to dana, puste pole nią nie jest

Brytyjskie wytyczne NICE CG183 o alergii na leki wymagają udokumentowania statusu alergicznego pacjenta jednym z trzech wpisów: alergia na leki, brak znanych, albo nie udało się ustalić. Wszystkie trzy są informacją i wszystkie trzy się zapisuje.

Puste pole nie jest żadnym z tych trzech. Jest brakiem pytania, a w gabinecie, w którym dokumentuje kilka osób, nie da się go odróżnić od przeoczenia.

> **Puste pole i wpisane "brak znanych" wyglądają na ekranie niemal tak samo i znaczą coś przeciwnego.** Pierwsze mówi, że nikt nie zapytał. Drugie mówi, że zapytano i odpowiedź brzmiała nie. Jeśli program ich nie rozróżnia, gabinet nie wie, u kogo wywiadu wciąż brakuje.

## Alergia, nietolerancja i działanie niepożądane to nie to samo

Te same wytyczne NICE wymagają, by status alergiczny był dokumentowany oddzielnie od działań niepożądanych leków i był wyraźnie widoczny dla każdego, kto ordynuje leki. FHIR zapisuje to w polu o dwóch wartościach, alergia albo nietolerancja, oddzielając mechanizm immunologiczny od wszystkiego, co nim nie jest.

W praktyce rozróżnienie wygląda tak:

- **Alergia.** Stoi za nią mechanizm immunologiczny. Pokrzywka, obrzęk naczynioruchowy, skurcz oskrzeli lub anafilaksja po ekspozycji.
- **Nietolerancja.** Pacjent reaguje źle, ale bez udziału tego mechanizmu.
- **Działanie niepożądane.** Znany efekt leku. Nudności po antybiotyku to codzienny przykład.

Wrzucenie wszystkich trzech do rubryki alergii jest wygodne tego samego dnia i kosztowne później, bo odbiera opcje terapeutyczne, które pacjent toleruje, i rozcieńcza prawdziwe alergie wśród wpisów, które nimi nie są.

## Alergia na penicylinę prawie nigdy nie jest alergią na penicylinę

Tu powyższe rozróżnienie kosztuje najwięcej, a jest oficjalna liczba, która pokazuje skalę.

> **CDC ujmuje to tak: 10 % pacjentów w Stanach Zjednoczonych zgłaszało alergię na penicylinę, a po ocenie klinicznej uczulonych było mniej niż 1 %.** To samo CDC dodaje, że swoiste przeciwciała IgE mogą z czasem zanikać, więc część pacjentów zaczyna później tolerować to, czego wcześniej nie tolerowała.

Nic z tego nie upoważnia gabinetu stomatologicznego do zignorowania zgłoszonej alergii. Zmienia się natomiast to, co się zapisuje, bo etykiety bez historii nigdy nie da się zweryfikować.

Jeśli w dokumentacji widnieje "uczulenie na penicylinę" i nic więcej, ta etykieta zostanie z pacjentem do końca życia. Jeśli widnieje konkretna reakcja, rok jej wystąpienia i kto ją podał, alergolog ma co ocenić i, jeśli są podstawy, zdjąć.

## Ostrzeżenia, które nie są alergiami

Rubryka alergii jest najbardziej znana, ale połowa tego, co trzeba zobaczyć przed rozpoczęciem, alergią nie jest.

- **Leki przeciwzakrzepowe i przeciwpłytkowe.** Zmieniają planowanie każdego zabiegu z krwawieniem, a są lekami, nie alergią, więc potrzebują własnego pola.
- **Bisfosfoniany i denosumab.** Liczy się i droga doustna, i dożylna, a pod ręką trzeba mieć lek, wskazanie i datę rozpoczęcia.
- **Ryzyko infekcyjnego zapalenia wsierdzia.** Wytyczne Europejskiego Towarzystwa Kardiologicznego z 2023 roku zalecają profilaktykę antybiotykową u pacjentów wysokiego ryzyka przed zabiegami stomatologicznymi obarczonymi ryzykiem i definiują jedno i drugie. Wysokie ryzyko: przebyte zapalenie wsierdzia, protezy zastawkowe wszczepione chirurgicznie lub przezcewnikowo, materiał użyty do naprawy zastawki, wrodzone wady serca (poza izolowanymi wadami zastawkowymi) oraz urządzenie wspomagające pracę komory jako terapia docelowa. Zabiegi ryzykowne: ekstrakcje, chirurgia jamy ustnej i każda manipulacja w obrębie dziąsła lub okolicy okołowierzchołkowej, w tym skaling i leczenie kanałowe.
- **Ciąża i karmienie piersią.** Z datą, bo to jedyne ostrzeżenie z tej listy, które wygasa samo.
- **Cukrzyca, padaczka i immunosupresja.** Zmieniają wizytę, nie tylko leczenie.

Trzeci punkt najczęściej dociera za późno, bo skaling znajduje się na liście zabiegów ryzykownych, a wpisuje się go zwykle jako rutynową higienizację. Te same wytyczne europejskie zalecają takim pacjentom profesjonalne oczyszczanie zębów i kontrolę co najmniej dwa razy w roku, są to więc wizyty częste, a ostrzeżenie musi trafić do kalendarza wizyt, nie tylko do karty.

## Dana, której trzeba szukać, nie jest ostrzeżeniem

Alergia wzorowo zapisana w zakładce, której nikt nie otwiera, chroni pacjenta dokładnie tak samo jak jej brak. Oto cztery miejsca, w których musi pokazać się sama:

1. **Nagłówek karty pacjenta**, widoczny przed otwarciem jakiejkolwiek zakładki.
2. **Widok diagramu zębowego**, czyli tam, gdzie się pracuje i gdzie zapada decyzja, co robimy dzisiaj.
3. **Recepta**, w chwili wyboru leku.
4. **Kalendarz wizyt**, zanim pacjent wejdzie przez drzwi, póki jest jeszcze czas coś przygotować.

![Karta pacjenta z ostrzeżeniami klinicznymi wyróżnionymi na czerwono obok diagramu zębowego, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*Ostrzeżenie kliniczne przypięte w lewej kolumnie, tuż obok diagramu zębowego. Nie trzeba nic otwierać, żeby je zobaczyć, i zostaje na miejscu przy zmianie zakładki.*

## Kto je widzi i kto może je zmienić

RODO zalicza dane o zdrowiu do szczególnych kategorii. Artykuł 9 ustęp 1 zakazuje ich przetwarzania, chyba że zachodzi jeden z wyjątków z ustępu 2, a artykuł 5 ustęp 1 litera c dokłada minimalizację: adekwatne, stosowne oraz ograniczone do tego, co niezbędne.

To nie znaczy, że rejestracja nie może widzieć ostrzeżenia. Znaczy, że trzeba rozstrzygnąć, czego potrzebuje każda rola, a prawie nigdy nie jest to to samo:

- **Rejestracja** potrzebuje wiedzieć, że ta wizyta wymaga wcześniejszego przygotowania, a nie rozpoznania, które za tym stoi.
- **Gabinet** potrzebuje pełnego ostrzeżenia.
- **Wszyscy** potrzebują, żeby zmiana została z datą, godziną i autorem, bo litera f tego samego artykułu wymaga odpowiednich środków technicznych i organizacyjnych, a skasowanie alergii bez śladu nim nie jest.

Litera d dokłada połowę, o której się zapomina: dane muszą być prawidłowe i w razie potrzeby uaktualniane. Alergię wykluczoną testem się aktualizuje, a nie zostawia na wszelki wypadek.

## Jak utrzymać to w aktualności

1. **Na pierwszej wizycie wypełnia się w całości**, łącznie z opcją "brak znanych", gdy taka jest odpowiedź.
2. **Na każdej wizycie potwierdza się w jednej linijce.** To nie jest powtarzanie wywiadu, tylko pytanie o nowe leki lub nowe rozpoznanie.
3. **Przed wypisaniem recepty i przed znieczuleniem czyta się ponownie.** To jedyny moment, w którym ostrzeżenie może jeszcze zapobiec szkodzie.
4. **Gdy przychodzi wynik, aktualizuje się weryfikację i datę**, i zapisuje, skąd pochodzi.
5. **Przy powrocie nieaktywnego pacjenta przegląda się wszystko od nowa.** Dwa lata przerwy to dwa lata nowych leków.

## Gdzie program pomaga, a gdzie nie

Żaden program nie zbierze wywiadu za ciebie. Program rozstrzyga tylko, czy odpowiedź da się zapisać w polu ze statusem, krytycznością i datą, czy wyląduje w akapicie tekstu dowolnego, i w których miejscach wróci sama, bez konieczności pamiętania o niej.

Dentalpin trzyma alergie, leki, choroby ogólnoustrojowe i szczególne okoliczności jako osobne pola wywiadu medycznego, z poziomem krytyczności, i pokazuje ostrzeżenia na stałe obok diagramu zębowego oraz w nagłówku karty. Plany są na stronie [cennik](/pl/cennik/).

To nie jest porada prawna ani wytyczna kliniczna. Obowiązujące zalecenia zawodowe i prawo krajowe kraju, w którym działa gabinet, mają pierwszeństwo przed każdą ogólną wskazówką z tego artykułu.

## Źródła

- HL7 FHIR R4, zasób AllergyIntolerance (elementy type, category, criticality, clinicalStatus, verificationStatus i reaction.severity): <https://hl7.org/fhir/R4/allergyintolerance.html> (dostęp 12 września 2026).
- NICE, wytyczne kliniczne CG183, *Drug allergy: diagnosis and management*, zalecenia dotyczące dokumentowania statusu alergicznego. Pełny tekst National Clinical Guideline Centre: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (dostęp 12 września 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (dostęp 12 września 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), s. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (dostęp 12 września 2026).
- Rozporządzenie (UE) 2016/679 (RODO), art. 5 ust. 1 lit. c, d i f oraz art. 9 ust. 1. Tekst oficjalny w EUR-Lex: <https://eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX:32016R0679> (dostęp 12 września 2026).
