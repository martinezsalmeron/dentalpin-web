---
title: "Dentalpin a MyDr EDM: darmowy plan na dziesięć wizyt kontra brak limitu"
description: "Porównanie MyDr EDM i Dentalpin: plan Start na 10 wizyt w miesiącu, 129 i 339 zł brutto za lekarza, 399 zł za gabinet, kontra otwarty kod bez limitów."
pubDate: 2026-10-11
tags: [porownanie, mydr, mydr-edm, program-stomatologiczny, oprogramowanie-stomatologiczne]
---

MyDr EDM ma plan darmowy i jest to pierwsza rzecz, którą widzisz na ich cenniku. Ma też limit dziesięciu wizyt w miesiącu, po przekroczeniu którego nie dodasz w systemie kolejnej, i te dwie informacje trzeba czytać razem.

Robimy Dentalpin, więc nie jesteśmy bezstronni. Możemy natomiast być dokładni.

> **Skąd pochodzą tu informacje o MyDr EDM.** Wszystko, co niżej napisano o MyDr, pochodzi ze stron publikowanych przez MyDr Sp. z o.o. pod adresem `pro.mydr.pl`, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci. Jest też osobna sekcja o tym, kiedy MyDr jest lepszym wyborem niż my, i w tym porównaniu jest ona dłuższa niż u nas zwykle.

## W trzydzieści sekund

**MyDr EDM** to polski system medyczny w chmurze z osobną stroną dla stomatologii. Wystawia e-recepty, e-zwolnienia i e-skierowania, raportuje zdarzenia medyczne do systemu P1 i rozlicza umowę z NFZ. Żadnej z tych rzeczy nie robimy i nie udajemy, że robimy.

**Dentalpin** jest otwarty i kosztuje 0 zł, bez opłaty za użytkownika, za fotel i za pacjenta. Stawiasz go na swoim serwerze, baza PostgreSQL stoi u ciebie, a kod jest opublikowany.

Pytanie, które naprawdę rozstrzyga, jest jedno: czy wystawiasz e-recepty z programu i czy sprawozdajesz dokumentację do P1. Jeśli tak, to porównanie kończy się tutaj i wybór jest ich.

![Ekran startowy Dentalpin: wizyty na dziś, kto jest w gabinecie, przeterminowane płatności i ostatni pacjenci](/screenshots/home.png)

*Ekran startowy z danymi demonstracyjnymi, które instalacja wgrywa na start.*

## Czym jest MyDr EDM

System gabinetowy i EDM firmy MyDr Sp. z o.o. (ul. Puławska 465, 02-844 Warszawa, NIP 5252730290, KRS 0000704950), sprzedawany w chmurze. Ich własna strona z funkcjami mówi o tym wprost: "Program nie wymaga instalacji" i "wystarczy komputer i połączenie z internetem", a aktualizacje odbywają się automatycznie.

Produkt jest wielospecjalizacyjny, a stomatologia ma w nim własną stronę ofertową. Pod nagłówkiem "Najważniejsze funkcje" wymienione są tam trzy rzeczy:

- **Interaktywny diagram zębowy** z "funkcją automatycznych podpowiedzi, opisujących obserwacje i procedury".
- **Grafik pracy placówki**, w którym "zarejestrowani pacjenci mogą zapisywać się na wizyty on-line".
- **Konto i zapisy on-line pacjenta**, z natychmiastowym powiadomieniem gabinetu o każdej nowej rezerwacji.

Rdzeń systemu, wspólny dla wszystkich specjalizacji, jest wyraźnie mocniejszy niż ta trójka: prowadzenie EDM, wystawianie e-recept i e-zwolnień z podpowiedziami i ostrzeżeniami o niezgodnych kodach, e-skierowania, automatyczne raportowanie zdarzeń medycznych do systemu P1, kalendarz dla całego personelu, raporty finansowe i prowizyjne, przypomnienia o wizytach, płatności online oraz moduł do rozliczeń z NFZ, który po wczytaniu umowy rozlicza procedury i generuje raporty zużytych punktów.

Jest też aplikacja mobilna w App Store i Google Play, integracja z drukarkami fiskalnymi i terminalem Polskich e-Płatności, integracja z laboratoriami zewnętrznymi, moduł magazynowy i asystent interakcji między lekami. Na stronie głównej podają trzy liczby: **3 miliony realizowanych wizyt w miesiącu, 2,7 miliona wystawianych recept miesięcznie i 250 migracji z innych systemów rocznie**.

Dwie rzeczy, których na konsultowanych stronach nie ma, i warto to wiedzieć przed rozmową handlową, a nie po. Słowo *periodontogram* nie pada tam ani razu, podobnie jak *kosztorys* i *plan leczenia*. Diagram zębowy jest, pomiarów przyzębia i wyceny leczenia na tych stronach nie nazwano.

## Czym jest Dentalpin

Otwarty program dla gabinetu stomatologicznego. Pobierasz kod, stawiasz go tam, gdzie chcesz (własny serwer, wybrany dostawca chmury, komputer w gabinecie) i nie płacisz licencji za użytkownika, za fotel ani za pacjenta.

Diagram zębowy, periodontogram z sześcioma punktami na ząb, kalendarz wizyt, dokumentacja medyczna, plany leczenia, kosztorysy z podpisem, faktury, płatności, zaproszenia na kontrolę i raporty. Do tego pełne REST API z OpenAPI oraz asystent AI, który wykonuje zadania na twoich prawdziwych danych, respektując uprawnienia każdego użytkownika.

Jest znacznie młodszy i nie ma polskiego interfejsu. To ma znaczenie i wracamy do tego niżej.

![Karta pacjenta w Dentalpin z diagramem zębowym, alertami klinicznymi, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*Karta pacjenta: diagram zębowy, alerty kliniczne, aktywny plan i najbliższa wizyta na jednym ekranie.*

## Ile to kosztuje u nich

Tu MyDr zasługuje na uczciwe zdanie na plus, bo w tej branży jest ono rzadkie: **publikują pełny cennik, w dwóch wariantach, z kwotami przy każdej pozycji**. Ceny są brutto za 30 dni, a okres próbny trwa 7 dni.

Cennik dla lekarzy ma trzy abonamenty i w każdym z nich jest **jeden użytkownik**:

- **Start, bezpłatnie.** Najważniejsze funkcje systemu, darmowe SMS-y z kodem e-recepty, szablony i bezpłatna pomoc techniczna. Limit to **10 wizyt w miesiącu**, a ich własny opis mówi, co się dzieje dalej: "Po przekroczeniu limitu nie będzie możliwe dodawanie kolejnych wizyt w systemie". 1 GB miejsca na dysku i prowizja 2,99% od płatności online.
- **Optymalny, 129 zł brutto / 30 dni.** Znosi limit wizyt, dokłada darmowe konto dla recepcji, 8 GB dysku, prowizję 1,49%, darmowy import danych ze starego systemu oraz "Pakiet Bezpieczeństwo +", czyli dwuetapową weryfikację, dziennik aktywności i ograniczenie logowania do wybranych adresów IP.
- **Pro, 339 zł brutto / 30 dni.** Dokłada moduł NFZ, 10 GB dysku i narzędzia AI: Noa Scribe do dyktowania w polach karty wizyty i Noa Notes, które tworzy podsumowanie na podstawie rozmowy z pacjentem. Dwie kolejne funkcje AI, Noa Summary i Noa Evidence, są na ich cenniku oznaczone jako "wkrótce".

Gabinet, w którym pracuje więcej niż jedna osoba, trafia na drugi cennik, i to jest liczba, którą warto zobaczyć od razu:

- **2 do 7 użytkowników: 399 zł za placówkę brutto / 30 dni**, z funkcjami AI w cenie i Noa Scribe ograniczonym do 30 użyć na użytkownika.
- **8 i więcej użytkowników: od 799 zł za placówkę brutto / 30 dni**, z dopiskiem "Zapytaj o ofertę".
- **Rozliczenia z NFZ są tu osobną pozycją**: 249 zł za placówkę na 30 dni przy 2-7 użytkownikach i od 299 zł przy 8 i więcej.

> **Jedno zdanie z ich stron warto wyjaśnić przed podpisaniem.** Strona o zmianie systemu wymienia wśród korzyści "Wszystkie moduły w cenie – żadnych ukrytych opłat", a cennik dla placówek wycenia rozliczenia z NFZ osobno, na 249 zł i od 299 zł za placówkę na 30 dni. Oba zdania są ich, oba są publiczne i nie zakładamy tu złej woli. To po prostu pytanie do zadania doradcy, a nie powód do rezygnacji.

Dentalpin kosztuje 0 zł i nie ma w nim użytkowników do policzenia. Płacisz za serwer i za czas osoby, która go utrzyma, i to jest prawdziwy koszt, którego nie udajemy, że nie istnieje. Nasz [cennik](/pl/cennik/) jest krótki z innego powodu niż ich.

## Twarzą w twarz

Tylko wiersze, które da się sprawdzić. Tam, gdzie na konsultowanych stronach nie ma danych, jest to napisane wprost.

| | MyDr EDM | Dentalpin |
|---|---|---|
| Model | Abonament miesięczny | Open source (BSL 1.1) |
| Wdrożenie | Chmura, praca w przeglądarce | Własny serwer, praca w przeglądarce |
| Opublikowany cennik | ✓ Pełny, dla lekarzy i dla placówek | ✓ 0 zł, wszystko w środku |
| Plan darmowy | ~ Jest, limit 10 wizyt w miesiącu | ✓ Bez limitu wizyt |
| Użytkownicy w planach dla lekarzy | ✗ Jeden w każdym z trzech | ✓ Bez limitu |
| Gabinet z personelem | ✗ 399 zł brutto / 30 dni za 2-7 osób | ✓ 0 zł |
| e-recepta, e-zwolnienie, e-skierowanie | ✓ W abonamencie | ✗ Nie ma |
| Zdarzenia medyczne do P1 | ✓ Automatycznie | ✗ Nie ma |
| Rozliczenia z NFZ | ✓ W planie Pro, w placówce od 249 zł / 30 dni | ✗ Nie ma |
| Polski interfejs | ✓ Tak | ✗ Nie |
| Wsparcie po polsku | ✓ Czat, telefon 7:00-19:00, mail | ✗ Tylko GitHub |
| Migracja | ✓ Za darmo, "nawet 98%" danych, do 3 tygodni | ~ Modułem, robisz sam |
| Aplikacja mobilna | ✓ App Store i Google Play | ✗ Nie ma |
| Rezerwacja online i konto pacjenta | ✓ Zapisy on-line z powiadomieniem gabinetu | ✗ Portal pacjenta oznaczony jako "wkrótce" |
| Diagram zębowy | ✓ Z automatycznymi podpowiedziami | ✓ Tak |
| Periodontogram pomiarowy | ✗ Nie nazwany na konsultowanych stronach | ✓ Sześć punktów na ząb |
| Kosztorys i plan leczenia | ✗ Nie nazwane na konsultowanych stronach | ✓ Z podpisem pacjenta |
| Gdzie leżą dane | Chmura dostawcy, bez podanego kraju | ✓ Tam, gdzie zdecydujesz |
| Dostęp do bazy danych | ✗ Brak informacji na konsultowanych stronach | ✓ PostgreSQL u ciebie |
| Udokumentowane REST API | ✗ Link "API" w stopce prowadzi na stronę główną | ✓ Pełne, z OpenAPI |
| Kod źródłowy | ✗ Zamknięty | ✓ Publiczny na GitHubie |
| Funkcje AI | ✓ Noa Notes i Noa Scribe od planu Pro | ✓ Asystent na twoich danych |
| Regulamin i polityka prywatności | ✗ Nieosiągalne na konsultowanych stronach | ~ Licencja i kod publiczne |
| Skala dostawcy | ✓ 3 mln wizyt miesięcznie, 250 migracji rocznie | ✗ Projekt od 2026 |

## Wybierz MyDr EDM, jeśli

I to nie jest formalność, bo lista jest tu długa z konkretnego powodu.

- **Wystawiasz e-recepty z programu.** Stomatolog przepisuje antybiotyki i leki przeciwbólowe, więc dla większości gabinetów nie jest to funkcja opcjonalna. U nich jest w abonamencie, razem z SMS-em z kodem wysyłanym do pacjenta bez dopłaty, u nas jej nie ma.
- **Sprawozdajesz dokumentację do P1 albo rozliczasz NFZ.** To jedyna część tej rozmowy, w której nie jesteśmy alternatywą, i nie będziemy udawać, że jesteśmy.
- **Chcesz, żeby ktoś przeniósł dane za ciebie.** Ich strona migracji obiecuje "nawet 98% wszystkich danych", maksymalnie trzy tygodnie, przedstawiciela w placówce, który zakłada konta i wgrywa certyfikaty P1, i wszystko to bezpłatnie. 250 migracji rocznie to mięsień, którego nie da się zaimprowizować.
- **Potrzebujesz polskiego wsparcia przez telefon.** Czat w koncie, infolinia od 7:00 do 19:00 i mail. My mamy GitHuba i jeśli program stanie we wtorek rano, ta różnica jest całkiem realna.
- **Nikt u ciebie nie zajmuje się serwerami i nie chcesz, żeby się zaczął.** Dentalpin trzeba gdzieś postawić i ktoś musi pilnować kopii zapasowych. Ich strona migracji wymienia "Brak konieczności posiadania serwerów w placówce" jako korzyść i ma rację, że jest to korzyść.
- **Pracujesz solo i nie masz więcej niż dziesięć wizyt w miesiącu.** Wtedy plan Start jest darmowy tak samo jak my, a ma polski interfejs i e-recepty. To uczciwa oferta dla gabinetu, który się dopiero otwiera.
- **Chcesz, żeby pacjenci zapisywali się sami przez internet.** Konto pacjenta z przeglądaniem wolnych terminów i natychmiastowym powiadomieniem gabinetu o rezerwacji jest u nich jedną z trzech funkcji wymienionych na stronie dla stomatologii. U nas portal pacjenta jest oznaczony jako "wkrótce", czyli dziś go nie ma.
- **Chcesz asystenta AI do notatek z wizyty.** Noa Notes robi podsumowanie z rozmowy z pacjentem. Nasz asystent robi coś innego, nie to samo.

## Wybierz Dentalpin, jeśli

- **Twój gabinet to więcej niż jedna osoba i nie rozliczasz NFZ.** Higienistka i recepcja oznaczają u nich przejście na cennik dla placówek, czyli 399 zł brutto za 30 dni. U nas kolejna osoba to kolejna zakładka w przeglądarce.
- **Potrzebujesz periodontogramu z pomiarami.** Sześć punktów na ząb z historią pomiarów jest u nas standardem, a na konsultowanych stronach MyDr słowo *periodontogram* nie występuje. Dla gabinetu, który leczy przyzębie, to nie jest szczegół.
- **Wyceniasz leczenie kosztorysem, który pacjent podpisuje.** To u nas osobny moduł powiązany z planem leczenia. Na ich stronach nie nazwano ani kosztorysu, ani planu leczenia.
- **Chcesz wiedzieć, w jakim kraju leżą dane twoich pacjentów.** Ich strony mówią o "bezpiecznej chmurze" i nie podają lokalizacji. U nas leżą tam, gdzie postawisz serwer, i to jest cała odpowiedź.
- **Chcesz mieć dostęp do własnej bazy.** PostgreSQL stoi u ciebie, więc eksport nie jest prośbą do dostawcy. Na konsultowanych stronach MyDr nie znaleźliśmy ani formatu eksportu, ani warunków zakończenia współpracy.
- **Chcesz integrować bez rozmowy handlowej.** Każda funkcja wystawia endpoint, a OpenAPI generuje się samo. Link "API" w ich stopce prowadzi pod adres `api.edm.mydr.pl`, który w dniu konsultacji przekierowywał na stronę główną, a nie na dokumentację.
- **Zależy ci, żeby kod trzymający dokumentację medyczną dał się przeczytać.** Nasz jest na GitHubie. To jedyny wiersz tabeli, w którym porównanie jest zerojedynkowe.

![Periodontogram w Dentalpin z sześcioma punktami pomiarowymi na każdym zębie](/screenshots/periodontogram.png)

*Periodontogram z sześcioma punktami pomiarowymi na ząb i historią kolejnych pomiarów.*

## Jak wyglądałaby migracja

W tę stronę migruje się rzadziej niż w drugą i ma to dobry powód, opisany wyżej. Jeśli jednak twój gabinet jest prywatny, kolejność jest taka:

1. **Ustal, czy wystawiasz e-recepty z programu i czy sprawozdajesz do P1.** Jeśli tak, przerwij tutaj. Dalsze kroki mają sens tylko dla gabinetu, który tego nie robi.
2. **Poproś MyDr o eksport swoich danych** i o format, w jakim go dostaniesz. Na konsultowanych stronach nie ma o tym nic, więc to pytanie trzeba zadać, zanim wypowiesz abonament.
3. **Postaw Dentalpin** przez `docker compose up` i wczytaj dane modułem `migration_import`. System waliduje je, zanim cokolwiek zapisze.
4. **Zobacz podgląd** z liczbami i przykładowymi wierszami. Nic jeszcze nie zostało zapisane.
5. **Przejrzyj mapowanie zabiegów** z ich katalogu na twój i zdecyduj pozycja po pozycji: przyjąć, przepiąć, utworzyć nowy albo zignorować. Co punktuje powyżej 0,9, przyjmuje się hurtem.
6. **Uruchom import**, a potem sprawdź ręcznie dwa najbliższe tygodnie kalendarza, zanim wyłączysz stary system.

> **Krok piąty jest tym, na którym warto zwolnić.** Dwa gabinety nigdy nie kodują zabiegów tak samo, a cicho zgadnięta równoważność daje źle wystawione faktury, których nikt nie zauważy przez miesiące.

## Uczciwie na koniec

MyDr EDM robi w Polsce rzeczy, których my nie robimy, i nie są to drobiazgi. E-recepta, e-skierowanie, P1 i NFZ to dokładnie ta warstwa, która łączy gabinet z państwem, a dla większości praktyk stomatologicznych w Polsce przynajmniej pierwsza z tych czterech jest codziennością. Do tego dochodzi darmowa migracja z przedstawicielem na miejscu, infolinia po polsku i darmowy plan dla kogoś, kto dopiero zaczyna.

Nasza część tej rozmowy zaczyna się tam, gdzie gabinet ma personel, nie rozlicza NFZ i nie chce, żeby stomatologia była diagramem dołożonym do systemu dla przychodni. Przy dwóch osobach ich cennik przeskakuje na 399 zł brutto za 30 dni, a periodontogramu i kosztorysu na ich stronach nie nazwano. My nie mamy polskiego interfejsu, polskiego wsparcia ani niczego, co łączy gabinet z P1, i w tabeli wyżej widać to gołym okiem. Nie próbowaliśmy tego ukryć.

Zostaje kilka pytań, wszystkie na rozmowę przed zamówieniem, nie powody do odrzucenia. Nie ma opublikowanej liczby gabinetów ani roku powstania produktu. Nie ma osiągalnego regulaminu i polityki prywatności, co dla placówki medycznej oznacza, że o umowę powierzenia przetwarzania z artykułu 28 RODO trzeba poprosić osobno. Nie ma podanego kraju, w którym leżą dane, formatu eksportu ani warunków wyjścia. I nie ma publicznej dokumentacji API pod adresem, który sami linkują.

Dentalpin jest zakładem w inną stronę: że kod trzymający dokumentację medyczną powinien dać się przeczytać, że rachunek nie powinien rosnąć z każdą kolejną osobą w gabinecie i że stomatologia nie powinna być stroną ofertową w systemie dla przychodni. Możesz [sprawdzić demo](https://demo.dentalpin.com) bez instalowania czegokolwiek albo [postawić go na swoim serwerze w trzy minuty](/pl/blog/instalacja-dentalpin-w-trzy-minuty/) i ocenić sam. Jeśli po przeczytaniu tego tekstu wybierzesz MyDr, uznamy, że porównanie zadziałało.

## Źródła

Wszystkie konsultowane 11 października 2026 roku:

- [Stomatologia · MyDr](https://pro.mydr.pl/rozwiazania/stomatologia): "Program powstał przy współpracy z doświadczonymi stomatologami", trzy pozycje pod nagłówkiem "Najważniejsze funkcje" (Interaktywny diagram zębowy "wyposażony jest w funkcję automatycznych podpowiedzi, opisujących obserwacje i procedury", Grafik pracy placówki z zapisami on-line, Konto i zapisy on-line pacjenta), sekcja "Rozliczasz się z NFZ?" z automatycznym rozliczaniem procedur z wczytanej umowy i raportami zużytych punktów, odpowiedź doradcy w ciągu 48 godzin, kontakt pon.-pt. 7:00-19:00.
- [Cennik dla lekarzy · MyDr](https://pro.mydr.pl/cennik): okres próbny 7 dni; Start bezpłatnie z "10 wizyt w miesiącu" i objaśnieniem "Po przekroczeniu limitu nie będzie możliwe dodawanie kolejnych wizyt w systemie"; Optymalny 129 zł brutto / 30 dni; Pro 339 zł brutto / 30 dni; wiersz "Liczba użytkowników" podający 1 dla wszystkich trzech abonamentów; dysk 1 GB / 8 GB / 10 GB; prowizja od płatności online 2,99% / 1,49% / 1,49%; moduł NFZ tylko w Pro; "Pakiet Bezpieczeństwo +" (RODO, dwuetapowa weryfikacja, dziennik aktywności, ograniczenie logowania dla wybranych adresów IP) niedostępny w Start; darmowy import danych i szkolenie wstępne niedostępne w Start; Noa Scribe i Noa Notes tylko w Pro, Noa Summary i Noa Evidence oznaczone "wkrótce"; wsparcie techniczne "poprzez chat, mailowo lub telefonicznie (od 7:00 do19:00)".
- [Cennik dla placówek · MyDr](https://pro.mydr.pl/cennik-dla-placowek): "2-7 użytkowników 399 zł za placówkę brutto / 30 dni" z funkcjami AI w cenie, "8+ użytkowników od 799 zł za placówkę brutto / 30 dni" z przyciskiem "Zapytaj o ofertę", wiersz "Rozliczenia z NFZ" wyceniony na "249zł za placówkę/30 dni" (2-7) i "od 299zł za placówkę/30 dni" (8+), dysk 8 GB i 8-20 GB, Noa Scribe "Do 30 użyć/użytkownik" przy 2-7, integracja z drukarkami fiskalnymi i terminalem Polskich e-Płatności, integracja z laboratoriami zewnętrznymi, moduł magazynowy, "Drug assistant".
- [Funkcje · MyDr](https://pro.mydr.pl/funkcje): "Dostępny w chmurze, z gwarancją bezpieczeństwa", "możesz korzystać z programu z dowolnego miejsca, o dowolnej porze – wystarczy komputer i połączenie z internetem", "Aktualizacje odbywają się automatycznie"; prowadzenie EDM, wystawianie e-recept i e-zwolnień z ostrzeżeniami o niezgodnych kodach, "System P1 – MyDr EDM pozwoli Ci na automatyczne raportowanie zdarzeń medycznych do systemu P1", wystawianie e-skierowań; aplikacja mobilna w [App Store](https://apps.apple.com/pl/app/mydr/id1482090318) i Google Play.
- [Strona główna · MyDr](https://pro.mydr.pl/): "Program nie wymaga instalacji", trzy liczby podane jako "3 miliony realizowanych wizyt w miesiącu", "2,7 miliona wystawianych recept miesięcznie" i "250 migracji z innych systemów rocznie", oraz "Rozliczanie z NFZ – z poziomu systemu rozliczysz świadczenia wykonane w ramach NFZ, sprawdzisz status ubezpieczenia pacjenta, wystawisz kartę DiLO i e-zlecenie". Stopka na każdej stronie: "MyDr Sp. z o.o. ul. Puławska 465, 02-844 Warszawa NIP: 5252730290 KRS: 0000704950 IOD: Łukasz Łyczkowski".
- [Zmiana systemu na MyDr](https://pro.mydr.pl/zmiana-systemu-na-mydr): "Przenosimy nawet 98% wszystkich danych z Twojego obecnego oprogramowania", "Cały proces trwa maksymalnie 3 tygodnie", "Wdrożenie i wsparcie są w 100% bezpłatne", przedstawiciel w placówce, który "zakłada i konfiguruje konta lekarzy, pomaga instalować i wgrywać certyfikaty P1", pięć kroków procedury, oraz na liście korzyści po migracji "Wszystkie moduły w cenie – żadnych ukrytych opłat" i "Brak konieczności posiadania serwerów w placówce".
- [Zarządzanie placówką · MyDr](https://pro.mydr.pl/rozwiazania/zarzadzanie-placowka): kalendarz dla kilku oddziałów z jednego konta, raporty finansów, prowizji dla lekarzy, wizyt i pacjentów, automatyczne przypomnienia o wizytach, pobieranie płatności z wyprzedzeniem.
- [Połącz ZnanyLekarz i MyDr EDM · ZnanyLekarz](https://pro.znanylekarz.pl/produkty/polacz-systemy-z-mydr-edm): integracja w dwóch wariantach, "Podstawowa integracja" opisana jako dostępna "Bez dodatkowych kosztów" dla użytkowników MyDr EDM oraz "Pełna integracja". Żadna z konsultowanych stron po obu stronach nie opisuje powiązania kapitałowego między tymi firmami, więc nie zakładamy żadnego.
- [Licencja Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) i [kod źródłowy](https://github.com/martinezsalmeron/dentalpin).

Mapa strony pod adresem `pro.mydr.pl/sitemap.xml` wymienia 55 adresów. Przegląd objął dziewięć z nich, wymienionych wyżej. Wszystkie wnioski o tym, czego nie ma (periodontogram, kosztorys, plan leczenia, liczba gabinetów, rok powstania produktu, kraj przechowywania danych, format eksportu, warunki zakończenia współpracy), dotyczą tych stron. Adresy `pro.mydr.pl/regulamin` i `pro.mydr.pl/polityka-prywatnosci` zwracały 11 października 2026 roku HTTP 404 i żaden z nich nie występuje w mapie strony, choć baner cookie na każdej stronie powołuje się na "Politykę prywatności". Link "API" w stopce prowadzi pod `api.edm.mydr.pl`, który tego dnia przekierowywał na `pro.mydr.pl`. Nazwa Dentalpin nie pada na żadnej konsultowanej stronie.

Widzisz tu coś błędnego albo nieaktualnego? [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions) i poprawimy. Dotyczy to także osób z MyDr.
