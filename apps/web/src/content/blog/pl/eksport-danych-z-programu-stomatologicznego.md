---
title: "Eksport danych z programu stomatologicznego: format, którego trzeba wymagać"
description: "Jakiego eksportu żądać od programu stomatologicznego przed podpisaniem umowy: cztery bloki danych, formaty, które się bronią, i coroczny test."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [eksport-danych, migracja, umowa, rodo, dokumentacja-medyczna]
---

Zażądaj pełnego eksportu w otwartych formatach: baza danych jako CSV na tabelę albo zrzut SQL, dokumenty i zdjęcia jako oryginalne pliki (PDF, JPG, DICOM) oraz indeks wiążący każdy plik z pacjentem. Niech to znajdzie się w umowie, z terminem, bez opłaty i uruchamiane przez ciebie bez dzwonienia do kogokolwiek. A potem otwórz ten eksport raz w roku, bo eksport, którego nigdy nie otworzyłeś, nie jest wyjściem, tylko obietnicą.

Format jest jedyną rzeczą, która decyduje o tym, czy za sześć lat to nadal będzie dokumentacja medyczna, czy folder plików, którego nikt już nie umie odczytać.

## Eksport to nie kopia zapasowa

To dwie różne rzeczy i niemal każda rozmowa handlowa je miesza. Kopia zapasowa przywraca system do stanu sprzed awarii, wewnątrz tego samego programu. Eksport pozwala odczytać dane bez tego programu.

Sprawdzian jest prosty. Gdyby dostawca zniknął dziś w nocy, czy kopia zapasowa na coś by się przydała? Jeśli plik otwiera wyłącznie jego program, odpowiedź brzmi nie.

> **Pytanie nie brzmi "czy robicie kopie zapasowe?", tylko "co mogę otworzyć bez was?".** Na pierwsze wszyscy odpowiadają twierdząco. Drugie dzieli dostawców na dwie bardzo różne grupy.

Potrzebujesz obu. Kopia zapasowa jest na dysk, który pada we wtorek. Eksport jest na dzień zmiany programu, na dzień, w którym dostawca zamyka działalność, i na dzień, w którym ktoś prosi o dokumentację sprzed ośmiu lat.

## Prawo daje ci uprawnienie, ale nie format

Kupując program do obsługi gabinetu, to ty jesteś administratorem danych, a dostawca podmiotem przetwarzającym. Artykuł 28 ust. 3 lit. g) RODO nakazuje podmiotowi przetwarzającemu, zależnie od decyzji administratora, usunąć albo zwrócić wszelkie dane osobowe po zakończeniu świadczenia usług oraz usunąć istniejące kopie, chyba że prawo nakazuje ich przechowywanie.

To uprawnienie jest realne i należy do ciebie. Czego przepis nie mówi w żadnym miejscu, to w jakim formacie.

> **PDF na dziewięćset stron spełnia artykuł 28 ust. 3 lit. g).** Zwrócić dane i zwrócić je w postaci nadającej się do użytku to nie ten sam obowiązek, a w rozporządzeniu jest tylko pierwszy. Drugi musi znaleźć się w twojej umowie.

Na tym polega cała różnica między odejściem od dostawcy w dwa tygodnie a odejściem w pół roku, podczas gdy ktoś przepisuje dokumentację z powrotem do komputera.

## Obowiązek przechowywania przeżywa umowę

Tu format przestaje być kwestią techniczną. Czas, przez który musisz umieć wydać dokumentację, liczy się w latach i nie zatrzymuje się w dniu wypowiedzenia abonamentu. Sprawdź okres, który obowiązuje twój gabinet, zanim cokolwiek usuniesz.

Licznik biegnie dalej, a odpowiada za dokumentację gabinet, nie dostawca, od którego właśnie odszedł.

Właściwe pytanie nie brzmi więc "czy mogę zabrać swoje dane?", tylko "czy odczytam je za dziesięć lat, na komputerze, który jeszcze nie istnieje, bez licencji na cokolwiek?". Na to jest tylko jedna rodzina odpowiedzi i są to formaty otwarte.

## Cztery bloki, które muszą wyjść

Niepełne eksporty zawodzą prawie zawsze w tym samym miejscu. Oddają kalendarz wizyt i dane administracyjne, a zatrzymują w środku część kliniczną i pliki. Zażądaj wszystkich czterech na piśmie.

| Blok | Co musi wyjść | Format, który się broni |
|---|---|---|
| Pacjenci | Dane kontaktowe, płatnik, alerty medyczne, zebrane zgody | CSV lub SQL, jeden rekord na pacjenta ze stałym identyfikatorem |
| Kliniczny | Diagram zębowy, periodontogram, wpisy z datą i autorem, plany leczenia, zalecenia | CSV lub SQL, z zębem, powierzchnią, stanem i datą w osobnych polach |
| Rozliczenia | Kosztorysy, faktury wraz z numeracją, wpłaty, salda, statusy | CSV lub SQL, z zachowanym numerem faktury i statusem |
| Pliki | Zdjęcia rentgenowskie, fotografie, PDF-y, podpisane zgody | Oryginalne pliki plus indeks wiążący je z pacjentami |

![Karta pacjenta z diagramem zębowym, alertami klinicznymi, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*Diagram zębowy na ekranie: ząb, powierzchnia, stan i data. To właśnie te cztery pola muszą przetrwać eksport.*

Czwarty blok najczęściej przychodzi zepsuty. Dostajesz folder z dwunastoma tysiącami plików o nazwach `IMG_0043.jpg` i żadnego sposobu, by ustalić, czyj jest który. Indeks to tabela o dwóch kolumnach, nazwa pliku i identyfikator pacjenta, a bez niej folder jest nic niewart.

## Formaty, które się bronią, i te, które nie

Reguła jest jedna: czy otworzysz to bez programu, który to wytworzył?

| Format | Do czego | Czy da się odczytać bez programu? |
|---|---|---|
| CSV | Tabele: pacjenci, wizyty, faktury, wpisy | ✓ Dowolny arkusz kalkulacyjny, dowolny język |
| Zrzut SQL | Cała baza danych wraz z relacjami | ✓ Z zainstalowanym PostgreSQL lub MySQL |
| JSON albo XML | Struktury zagnieżdżone, plany z etapami | ✓ Czytelne i możliwe do udokumentowania |
| PDF, JPG, PNG | Podpisane dokumenty, fotografia kliniczna | ✓ To standardy, otworzą się wszędzie |
| DICOM | Zdjęcia rentgenowskie i badania objętościowe | ✓ Międzynarodowy standard obrazowania medycznego |
| PDF jako zrzut danych | Do niczego. To wydrukowana karta | ✗ Człowiek odczyta, nic tego nie zmigruje |
| Format własny dostawcy (.dat, jego .bak) | Przywrócenie w jego własnym programie | ✗ Otworzy to tylko ten, kto go napisał |
| Zrzuty ekranu albo raporty do druku | Sprawdzenie pojedynczej informacji | ✗ To nie dane, to obraz danych |

Przy zdjęciach rentgenowskich warto być dosłownym. DICOM to, słowami organizacji, która go utrzymuje, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", zarządzany przez Medical Imaging & Technology Alliance, oddział NEMA. Jeśli twój program zapisuje zdjęcia w czymś, co nie jest ani DICOM, ani powszechnym formatem graficznym, spytaj dziś, jak stamtąd wychodzą.

## Zapisy, o które trzeba poprosić przed podpisaniem

To negocjuje się przed podpisem, dopóki chcą cię jako klienta. Potem nie ma już rozmowy, jest cennik.

1. **Zakres.** "Wszystkie dane wprowadzone przez klienta i wszystkie załączone pliki", a nie "dane pacjentów". To drugie sformułowanie po cichu zostawia część kliniczną poza zakresem.
2. **Format.** Nazwany wprost: CSV albo zrzut SQL dla bazy, oryginalne pliki dla załączników, plus indeks, który je łączy.
3. **Dokumentacja.** Opis tabel i pól. CSV z czterdziestoma kolumnami o nazwach `pole_17` to zagadka, nie eksport.
4. **Samoobsługa.** Uruchamiasz go sam, z poziomu programu, kiedy chcesz. Jeśli trzeba zgłosić to do wsparcia, termin należy do nich.
5. **Termin.** Bez samoobsługi konkretna liczba dni od zgłoszenia. Trzydzieści jest rozsądne.
6. **Koszt.** Zero. Opłata za wydanie danych jest myto na wyjściu i lepiej zobaczyć ją na piśmie przed podpisem niż po nim.
7. **Po rozwiązaniu umowy.** Jak długo możesz jeszcze pobierać eksport oraz potwierdzone na piśmie usunięcie danych na twoje żądanie, czego pozwala wymagać właśnie artykuł 28 ust. 3 lit. g).
8. **Gdyby zamknęli działalność.** Co dzieje się z twoimi danymi w razie upadłości. Odpowiedź może być zła, ale musisz ją znać.

![Lista faktur ze statusami wystawiona, opłacona, częściowo opłacona, przeterminowana i wersja robocza](/screenshots/invoices.png)

*Każda faktura ma status i datę. Jeśli eksport zabierze kwoty, a zgubi status, rozliczenia trzeba odtworzyć ręcznie.*

## Jak sprawdzić eksport raz w roku

To godzina rocznie i jedyny sposób, by wiedzieć, czy obiecane rzeczywiście istnieje.

1. **Uruchom i zmierz czas.** Jeśli trwa trzy dni, właśnie dowiedziałeś się czegoś ważnego.
2. **Otwórz plik CSV.** Nagłówki czytelne, polskie znaki poprawne. Jeśli widzisz `Kowalczyk �`, kodowanie jest zepsute i to teraz trzeba o tym powiedzieć.
3. **Policz.** Liczba wierszy w CSV z pacjentami wobec liczby pacjentów pokazywanej przez program. Jeśli się nie zgadza, spytaj dlaczego, zanim będziesz tego potrzebować.
4. **Wybierz losowo trzech pacjentów** i porównaj kartę na ekranie z tym, co wyszło. Patrz przede wszystkim na diagram zębowy i wpisy.
5. **Otwórz zdjęcie rentgenowskie** prosto z wyeksportowanego folderu, z pominięciem programu.
6. **Sprawdź indeks.** Weź jeden plik z folderu i ustal, czyj jest, korzystając wyłącznie z eksportu.
7. **Zapisz całość zaszyfrowaną i poza gabinetem**, i zanotuj datę. Ta data jest odpowiedzią w dniu, w którym ktoś zapyta, kiedy ostatnio to sprawdzano.

> **Za pierwszym razem coś znajdziesz.** Prawie zawsze są to zdjęcia albo diagram zębowy. Znalezienie tego w zwykły wtorek kosztuje jednego maila. Znalezienie tego w dniu odejścia kosztuje całą migrację.

## Sygnały ostrzegawcze

Żaden z nich nie zarzuca nikomu złej woli. Każdy jest powodem, by poprosić o pokaz przed podpisaniem umowy.

- **"Damy to w PDF."** Nadaje się do czytania, nie nadaje się do migracji. Spytaj, co jeszcze jest.
- **"To uruchamia wsparcie."** Wtedy termin nie należy do ciebie. Poproś o liczbę dni na piśmie.
- **"Jest opłata za wydanie danych."** To myto na wyjściu. Negocjuj je teraz, dopóki się da.
- **"Zdjęcia idą osobno."** Osobno jest w porządku. Bez indeksu nie.
- **"Diagramu zębowego się nie eksportuje, się go drukuje."** Najczytelniejszy sygnał ze wszystkich: ustrukturyzowane dane kliniczne zostają w środku.
- **Brak dokumentacji pól.** Bez niej migracja kosztuje tyle, co przepisanie wszystkiego z ręki.

## Co możesz sprawdzić dziś po południu

Nie trzeba czekać na przedłużenie umowy. Wejdź dziś do swojego programu, znajdź opcję eksportu i zobacz, co oferuje. Jeśli nie znajdziesz jej w pięć minut, to już jest odpowiedź.

Dentalpin jest oprogramowaniem open source, a bazą danych jest PostgreSQL, więc eksport nie jest funkcją, o którą trzeba prosić: zrzut całej bazy możesz zrobić kiedy chcesz, a załączniki leżą na dysku dokładnie tak, jak zostały wgrane. Instaluje się na własnym serwerze albo działa w wersji zarządzanej, a [cennik](/pl/cennik/) jest opublikowany.

## Źródła

Wszystkie sprawdzone 26 sierpnia 2026 r.

- Rozporządzenie (UE) 2016/679 (RODO), artykuł 28 ust. 3 lit. g). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- DICOM, międzynarodowy standard obrazowania medycznego, zarządzany przez Medical Imaging & Technology Alliance, oddział NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

To nie jest porada prawna. Okresy przechowywania zależą od rodzaju dokumentacji i od przepisów, które obowiązują twój gabinet, potwierdź je, zanim cokolwiek usuniesz.
