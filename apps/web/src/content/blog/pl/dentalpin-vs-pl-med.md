---
title: "Dentalpin a PL-Med: bezpłatny pakiet FREE i cennik, którego nie da się pobrać"
description: "Porównanie PL-Med i Dentalpin: bezterminowy pakiet FREE, wersja na pendrive i opublikowany cennik pod domeną, która nie odpowiada. Ze źródłami."
pubDate: 2026-10-13
tags: [porownanie, pl-med, program-stomatologiczny, oprogramowanie-stomatologiczne]
---

PL-Med udostępnia bezterminowo pakiet funkcji FREE, bez rejestracji i bez opłaty, i jest to najmocniejsza rzecz po ich stronie w tym porównaniu. Ma też opublikowany cennik, którego dzisiaj nie da się pobrać, bo domena, na której ten plik leży, nie odpowiada.

Robimy Dentalpin, więc nie jesteśmy bezstronni. Możemy natomiast być dokładni.

> **Skąd pochodzą tu informacje o PL-Med.** Wszystko, co niżej napisano o PL-Med, pochodzi ze stron publikowanych pod adresem `pl-med.pl`, z linkiem i datą na końcu. Żadnych portali porównawczych: przeczą sobie nawzajem i część z nich piszą konkurenci. Przejrzeliśmy wszystkie piętnaście adresów z ich mapy strony, więc każde zdanie o tym, czego na tych stronach nie ma, dotyczy całej witryny, a nie jednej podstrony.

## W trzydzieści sekund

**PL-Med** to polski program dla gabinetu, instalowany na komputerze z systemem Windows, z polskim interfejsem i czterema numerami telefonu do firmy w Warszawie. Podają 23 lata obecności na rynku i 11 100 działających licencji. Pakiet FREE jest bezpłatny bezterminowo, a wersja TO-GO uruchamia się z pendrive'a bez instalacji na jakimkolwiek komputerze. Żadnej z tych czterech rzeczy nie mamy.

**Dentalpin** jest otwarty i w wariancie self-hosted kosztuje 0 zł, bez opłaty za użytkownika, za lekarza i za fotel. Stawiasz go na swoim serwerze, baza PostgreSQL stoi u ciebie, kod jest opublikowany. Nie ma polskiego interfejsu i nie ma polskiej infolinii.

Pytanie, które naprawdę rozstrzyga, jest jedno: czy twój gabinet potrzebuje narzędzi stomatologicznych nazwanych wprost, czyli diagramu zębowego, periodontogramu i kosztorysu, czy wystarczy mu kalendarz, dokumentacja i finanse w polskim interfejsie. Na konsultowanych stronach PL-Med żadne z tych trzech słów nie występuje.

![Ekran startowy Dentalpin: wizyty na dziś, kto jest w gabinecie, przeterminowane płatności i ostatni pacjenci](/screenshots/home.png)

*Ekran startowy z danymi demonstracyjnymi, które instalacja wgrywa na start.*

## Czym jest PL-Med

Program dla gabinetów i przychodni, sprzedawany przez PL-Med Software z adresem ul. Marcina Kasprzaka 31 lok. 126 w Warszawie. Nagłówek strony głównej brzmi "Oprogramowanie PL-Med 2026 nowość dla stomatologii i medycyny".

Produkt jest wielospecjalizacyjny, a stomatologia stoi na obu ich listach na pierwszym miejscu. Strona z wersjami wymienia jedenaście specjalizacji: Stomatologia, Medycyna Ogólna, Pracownia USG, Ginekologia, Chirurgia, Pediatria, Fizjoterapia i Rehabilitacja, Medycyna Pracy, Dermatologia, Medycyna Estetyczna, Kosmetologia oraz "Inna? (prosimy o kontakt)".

Wersji jest sześć, nie trzy, i warto je rozróżnić, bo różnią się architekturą:

- **FREE** to nie osobny produkt, a "bezpłatny pakiet opcji dostępny bez rejestracji w wersjach Light, TO-GO oraz PRO".
- **Light** to wersja jednostanowiskowa z obsługą dotykową, opisana jako program do "prowadzenia elektronicznej dokumentacji medycznej".
- **TO-GO** to Light na pendrive'ie, który "nie wymaga jakiejkolwiek instalacji na komputerach".
- **PRO** dokłada pracę wielostanowiskową i cztery moduły: Recepcja, Gabinet, Administracja, Sprzedaż/Magazyn, "oparte na systemie bazy danych MS-SQL Server 2008".
- **DB-Cloud** to ten sam zestaw modułów "z danymi w chmurze, umożliwiające pracę rozproszoną / zdalną", na bazie MySQL.
- **TO-GO DB-Cloud** łączy jedno z drugim: pendrive z dostępem do współdzielonej bazy "przez użytkowników znajdujących się w różnych lokalizacjach".

Trzy liczby podają na stronie głównej: **150 000 "kart pacjentów zgromadzonych w jednej bazie", 11 100 "aktualnie działających licencji w całej Polsce" i 129 "dostępnych raportów i analiz"**. Czwarta liczba to "23 lat obecności na rynku", przy czym akapit wyżej na tej samej stronie mówi "Przez kilkanaście lat obecności na rynku". Oba zdania są ich i oba są publiczne.

Licencja jest przypisana do konkretnego komputera, i to też jest na ich stronie, tylko nie w opisie produktu. Polityka prywatności mówi: "Zbieramy informacje od Ciebie, gdy złożysz zamówienie lub gdy zweryfikujemy twoją licencję na zarejestrowanym komputerze", a dalej, że mogą zbierać "niektóre dane identyfikacyjne z urządzenia z systemem Windows, takie jak numery seryjne, aby jednoznacznie zidentyfikować Twoje urządzenie do naszej licencji".

Dwie rzeczy robią u siebie dobrze i nie udajemy, że jest inaczej. SMS-y wysyła się **z własnego numeru, w ramach abonamentu u swojego operatora**, przez telefon z Androidem albo przez bramkę `serwersms.pl`, więc nie ma marży dostawcy na wiadomości. Kalendarz synchronizuje się z iCloud, a Dropbox, GoogleDrive i OneDrive można podłączyć do wymiany plików.

## Co dokładnie jest darmowe

To jest najciekawsza część tej oferty, bo bezpłatny pakiet od dostawcy programu instalowanego lokalnie jest w Polsce rzadkością. Ich własne zdanie jest precyzyjne i warto je przeczytać całe: "Pakiet opcji FREE oprogramowania PL-Med Software 2012 jest udostępniany bezpłatnie wszystkim lekarzom oraz osobom prowadzącym działalność o profilu medycznym, bezterminowo, na zasadach FREEWARE SOFTWARE, bez możliwości modyfikacji, kopiowania oraz udostępniania programu osobom trzecim".

Dwie rzeczy czyta się z tego naraz. **Bezterminowo i bez rejestracji**, co jest ofertą mocniejszą niż okres próbny u większości dostawców. I **freeware to nie otwarty kod**: wolno używać, nie wolno zmieniać ani kopiować, więc to inna rzecz niż licencja, na której stoi Dentalpin.

Czego pakiet FREE nie obejmuje, tego na ich stronach nie wyliczono, więc to pierwsze pytanie do zadania przy telefonie. Wiadomo natomiast, czym ogranicza się płatna wersja Light, bo to opisali: "wersja jednostanowiskowa z możliwością wykonywania naraz jednej operacji np. otworzenie w tym samym czasie tylko jednej karty pacjenta". Dla gabinetu, w którym recepcja i lekarz pracują równolegle, to jest informacja rozstrzygająca.

Wersję Light opisują jako dostępną "w bardzo przystępnej cenie". Kwoty przy tym zdaniu nie ma.

## Cennik, którego nie da się pobrać

Na stronie `pl-med.pl/program/pliki-do-pobrania/` jest pięć pozycji do pobrania: Pomoc zdalna, Wymagania sprzętowe, Cennik, Informacje ogólne i Demo. Trzy pierwsze prowadzą pod konkretne pliki, między innymi `Cennik PL-Med Software 2017.pdf` i `wymagania sprzętowe.pdf`.

Wszystkie te pliki leżą na hoście `download.pl-dent.pl`, i tu jest rzecz, którą sprawdzisz w pół minuty sam.

> **Domena `pl-dent.pl` nie istnieje w DNS.** Zapytania o `pl-dent.pl`, `download.pl-dent.pl` i `pldent.pl` zwracają NXDOMAIN zarówno u Google (`dns.google`), jak i u Cloudflare (`cloudflare-dns.com`), podczas gdy `pl-med.pl` rozwiązuje się normalnie z tego samego miejsca. To nie jest chwilowa awaria serwera, to brak wpisu dla całej domeny.

Konsekwencje są konkretne. Nie da się pobrać ani cennika, ani wymagań sprzętowych, ani instalatora `Instalator_online.exe`, ani narzędzia pomocy zdalnej, do którego odsyła przycisk "pobierz iConnect" na stronie głównej i na stronie kontaktu.

Dlatego **nie podajemy tu żadnej ceny PL-Med**. Nie dlatego, że jej nie publikują, bo publikują, ale dlatego, że dokumentu z cenami nie można dziś otworzyć, a przepisywanie kwot z portali porównawczych jest dokładnie tym, czego ta seria nie robi. Jeśli cena ma dla ciebie znaczenie, poproś o nią pod numerami, które działają.

Ta sama domena wraca w adresach e-mail. Strona kontaktu pokazuje `dorota.panczak@pl-med.pl` i `support@pl-med.pl`, ale odnośniki pod tymi napisami prowadzą do `dorota.panczak@pldent.pl` i `olgierd.boltuc@pldent.pl`. Z trzech odnośników kontaktowych tylko `info@pl-med.pl` wskazuje na domenę, która odpowiada. Telefony są pewniejszą drogą: 531 916 916, 531 917 917, 531 918 918 w sprzedaży i 531 914 914 we wsparciu, poniedziałek do piątku 8.00-16.00.

U nas cena działa inaczej i też nie jest w całości liczbą. Wariant self-hosted kosztuje 0 zł i zawiera cały produkt, a wariant zarządzany wyceniamy po rozmowie o twoim gabinecie, bo serwer kupujesz na własne konto. Nasz [cennik](/pl/cennik/) mówi to wprost.

## Czym jest Dentalpin

Otwarty program dla gabinetu stomatologicznego. Pobierasz kod, stawiasz go tam, gdzie chcesz (własny serwer, wybrany dostawca chmury, komputer w gabinecie) i nie płacisz licencji za użytkownika, za lekarza ani za fotel.

Diagram zębowy, periodontogram z sześcioma punktami na ząb, kalendarz wizyt, dokumentacja medyczna, plany leczenia, kosztorysy z podpisem, faktury, płatności, zaproszenia na kontrolę i raporty. Do tego pełne REST API z OpenAPI oraz asystent AI, który wykonuje zadania na twoich prawdziwych danych, respektując uprawnienia każdego użytkownika.

Jest znacznie młodszy, nie ma polskiego interfejsu i nie ma polskiej infolinii. To ma znaczenie i wracamy do tego niżej.

![Karta pacjenta w Dentalpin z diagramem zębowym, alertami klinicznymi, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*Karta pacjenta: diagram zębowy, alerty kliniczne, aktywny plan i najbliższa wizyta na jednym ekranie.*

## Twarzą w twarz

Tylko wiersze, które da się sprawdzić. Tam, gdzie na konsultowanych stronach nie ma danych, jest to napisane wprost.

| | PL-Med | Dentalpin |
|---|---|---|
| Model | Freeware (pakiet FREE) i licencje płatne | Open source (BSL 1.1) |
| Wdrożenie | Program na komputerze z Windows, dane lokalnie albo w chmurze (DB-Cloud) | Własny serwer, praca w przeglądarce |
| Polski interfejs | ✓ Tak | ✗ Nie |
| Wsparcie po polsku | ✓ Cztery numery, pon.-pt. 8.00-16.00 | ✗ Tylko GitHub |
| Wersja bezpłatna | ✓ Pakiet FREE, bezterminowo, bez rejestracji | ✓ Self-hosted, cały produkt |
| Praca bez serwera i administratora | ✓ Tak | ✗ Ktoś musi postawić serwer |
| Wersja na pendrive | ✓ TO-GO, bez instalacji na komputerze | ✗ Nie ma |
| Lata na rynku | ✓ 23 lata podane na ich stronie | ✗ Od 2026 |
| Skala dostawcy | ✓ 11 100 działających licencji | ✗ Projekt od 2026 |
| Opublikowany cennik | ✗ PDF pod domeną, która nie odpowiada | ~ 0 zł self-hosted, wariant zarządzany na zapytanie |
| Wymagania sprzętowe | ✗ PDF pod domeną, która nie odpowiada | ✓ Udokumentowane, obrazy Dockera |
| Baza danych | MS-SQL Server 2008 (PRO), MySQL (DB-Cloud) | PostgreSQL u ciebie |
| Gdzie leżą dane | Lokalnie, a w DB-Cloud bez podanego kraju | ✓ Tam, gdzie postawisz serwer |
| Licencja przypisana do komputera | ✗ Weryfikowana na zarejestrowanym komputerze | ✓ Bez weryfikacji urządzenia |
| Diagram zębowy | ✗ Nie nazwany na konsultowanych stronach | ✓ Tak |
| Periodontogram pomiarowy | ✗ Nie nazwany na konsultowanych stronach | ✓ Sześć punktów na ząb |
| Kosztorys i plan leczenia | ✗ Nie nazwane na konsultowanych stronach | ✓ Z podpisem pacjenta |
| e-recepta i e-skierowanie | ✗ Nie nazwane na konsultowanych stronach | ✗ Nie ma |
| Zdarzenia medyczne do P1 | ✗ Nie nazwane na konsultowanych stronach | ✗ Nie ma |
| Rozliczenia z NFZ | ✗ Nie nazwane na konsultowanych stronach | ✗ Nie ma |
| SMS | ✓ Z twojego numeru i twojego abonamentu | ~ Przez dostawcę, którego wybierzesz |
| Udokumentowane REST API | ✗ Nie ma na konsultowanych stronach | ✓ Pełne, z OpenAPI |
| Kod źródłowy | ✗ Zamknięty, licencja zabrania kopiowania | ✓ Publiczny na GitHubie |
| Dane rejestrowe dostawcy | ✗ Bez NIP, KRS i REGON na konsultowanych stronach | ✓ Licencja i kod publiczne |

## Wybierz PL-Med, jeśli

I to nie jest formalność, bo kilka z tych punktów to rzeczy, których nie mamy i nie będziemy mieć szybko.

- **Chcesz pracować po polsku.** Ich program ma polski interfejs, nasz nie ma. Dla gabinetu, w którym przy komputerze siedzi recepcja, a nie informatyk, to bywa cała rozmowa.
- **Chcesz mieć numer telefonu do człowieka.** Cztery numery, poniedziałek do piątku 8.00-16.00, pomoc zdalna i prezentacja w biurze albo przez internet. My mamy GitHuba, i jeśli program stanie we wtorek rano, ta różnica jest realna.
- **Nie masz serwera i nie chcesz go mieć.** PL-Med instaluje się na komputerze w gabinecie i na tym koniec. Dentalpin trzeba gdzieś postawić, a ktoś musi pilnować kopii zapasowych.
- **Potrzebujesz programu, który uruchomi się z pendrive'a.** Wersja TO-GO działa bez instalacji na dowolnym komputerze z Windows, a TO-GO DB-Cloud dokłada do tego wspólną bazę dla kilku lokalizacji. Nie mamy niczego podobnego.
- **Chcesz zacząć bezpłatnie, bez rejestracji i bez rozmowy handlowej.** Pakiet FREE jest bezterminowy, a opisali go jako dostępny bez rejestracji. Po sam program trzeba dziś napisać przez formularz wersji demo, bo odnośnik do instalatora prowadzi pod martwą domenę, ale to jedna wiadomość, nie negocjacje.
- **Wysyłasz dużo SMS-ów i nie chcesz płacić za nie dostawcy oprogramowania.** Wiadomości idą z twojego numeru w ramach abonamentu, który już masz.
- **Twój gabinet to jedno stanowisko.** Wtedy ograniczenie wersji Light do jednej operacji naraz nic cię nie kosztuje, a cała reszta zostaje.

Podane przez nich dwadzieścia trzy lata na rynku i 11 100 działających licencji oznaczają, że ten program przeszedł przez sytuacje, o których my jeszcze nie wiemy.

## Wybierz Dentalpin, jeśli

- **Potrzebujesz diagramu zębowego i periodontogramu nazwanych wprost.** Na żadnej z piętnastu konsultowanych stron PL-Med nie występuje ani "diagram zębowy", ani "periodontogram", ani "RTG". Moduł "Gabinet" jest wymieniony w opisie wersji PRO, ale odnośniki "Czytaj więcej" prowadzą na stronę z napisem "Zapraszamy wkrótce...", więc co jest w tym module, nie wiadomo z ich stron. U nas periodontogram ma sześć punktów pomiarowych na ząb i historię pomiarów.
- **Wyceniasz leczenie kosztorysem, który pacjent podpisuje.** To u nas osobny moduł powiązany z planem leczenia. Na ich stronach nie nazwano ani kosztorysu, ani planu leczenia.
- **Chcesz wiedzieć, w jakim kraju leżą dane twoich pacjentów.** W wersjach lokalnych leżą u ciebie, i to jest zaleta ich produktu. W DB-Cloud leżą w chmurze, której kraju ani dostawcy na tych stronach nie podano. U nas odpowiedź brzmi: tam, gdzie postawisz serwer.
- **Chcesz mieć dostęp do własnej bazy.** PostgreSQL stoi u ciebie, więc eksport nie jest prośbą do dostawcy. Słowo "eksport" nie pada na żadnej konsultowanej stronie PL-Med, podobnie jak "kopia zapasowa".
- **Nie chcesz licencji przypisanej do konkretnego komputera.** Ich polityka prywatności opisuje weryfikację licencji na zarejestrowanym komputerze i zbieranie numerów seryjnych urządzenia. U nas nie ma czego rejestrować.
- **Chcesz integrować bez rozmowy handlowej.** Każda funkcja wystawia endpoint, a OpenAPI generuje się samo. Na stronach PL-Med nie ma dokumentacji API.
- **Zależy ci, żeby kod trzymający dokumentację medyczną dał się przeczytać.** Nasz jest na GitHubie. To jedyny wiersz tabeli, w którym porównanie jest zerojedynkowe.

![Periodontogram w Dentalpin z sześcioma punktami pomiarowymi na każdym zębie](/screenshots/periodontogram.png)

*Periodontogram z sześcioma punktami pomiarowymi na ząb i historią kolejnych pomiarów.*

## Jak wyglądałaby migracja

Kolejność jest tu inna niż przy dostawcach chmurowych, bo dane PL-Med leżą na twoim komputerze, a nie na serwerze dostawcy. To jest dla ciebie dobra wiadomość: nie musisz nikogo prosić o eksport.

1. **Ustal, czy wystawiasz e-recepty i czy sprawozdajesz dokumentację do P1.** Jeśli tak, przerwij tutaj, bo my tego nie robimy. Na stronach PL-Med też tego nie nazwano, więc to pytanie zadaj obu stronom, zanim cokolwiek zmienisz.
2. **Zrób kopię bazy, dopóki stary program działa.** PRO trzyma dane w MS-SQL Server, DB-Cloud w MySQL, oba formaty da się odczytać poza programem. Zrób to przed wypowiedzeniem czegokolwiek.
3. **Poproś PL-Med o strukturę bazy albo o eksport do pliku.** Na konsultowanych stronach nie ma o tym nic, a mają cztery numery telefonu i to jest pytanie na telefon.
4. **Postaw Dentalpin** przez `docker compose up` i wczytaj dane modułem `migration_import`. System waliduje je, zanim cokolwiek zapisze.
5. **Zobacz podgląd** z liczbami i przykładowymi wierszami. Nic jeszcze nie zostało zapisane.
6. **Przejrzyj mapowanie zabiegów** z ich katalogu na twój i zdecyduj pozycja po pozycji: przyjąć, przepiąć, utworzyć nowy albo zignorować. Co punktuje powyżej 0,9, przyjmuje się hurtem.
7. **Uruchom import**, a potem sprawdź ręcznie dwa najbliższe tygodnie kalendarza, zanim wyłączysz stary program.

> **Krok szósty jest tym, na którym warto zwolnić.** Dwa gabinety nigdy nie kodują zabiegów tak samo, a cicho zgadnięta równoważność daje źle wystawione faktury, których nikt nie zauważy przez miesiące.

## Uczciwie na koniec

PL-Med ma rzeczy, których my nie mamy, i nie są to drobiazgi: polski interfejs, polski telefon, program działający bez serwera, bezterminowy pakiet bezpłatny i wersję na pendrive. Dla jednoosobowego gabinetu, który chce zacząć dziś i nie chce administrować niczym, to jest sensowna droga, a my nią nie jesteśmy.

Zostaje kilka pytań i wszystkie są na rozmowę przed zamówieniem, nie powody do odrzucenia. Cennik i wymagania sprzętowe są opublikowane, ale leżą pod domeną, która nie odpowiada, więc ani ceny, ani wymaganej wersji Windows nie da się dziś sprawdzić bez telefonu. Dwa z trzech adresów e-mail na stronie kontaktu wskazują na tę samą nieistniejącą domenę. Nagłówek mówi "PL-Med 2026", a opisy wersji mówią "PL-Med Software 2012"; najnowsza datowana treść na stronach wsparcia to komunikat o iCloud z 15 czerwca 2017. Bazą wskazaną dla wersji PRO jest MS-SQL Server 2008. Na stronach nie ma NIP, KRS ani REGON, tylko adres i telefony. I nie ma ani jednego słowa stomatologicznego: żadnego diagramu zębowego, periodontogramu, kosztorysu ani RTG, choć stomatologia stoi pierwsza na liście specjalizacji.

My z kolei nie mamy polskiego interfejsu, polskiego wsparcia ani niczego, co łączy gabinet z P1 i z NFZ, i w tabeli wyżej widać to gołym okiem. Nie próbowaliśmy tego ukryć.

Dentalpin jest zakładem w inną stronę: że kod trzymający dokumentację medyczną powinien dać się przeczytać, że rachunek nie powinien rosnąć z każdą kolejną osobą w gabinecie i że stomatologia nie powinna być pierwszą pozycją na liście jedenastu specjalizacji. Możesz [sprawdzić demo](https://demo.dentalpin.com) bez instalowania czegokolwiek albo [postawić go na swoim serwerze w trzy minuty](/pl/blog/instalacja-dentalpin-w-trzy-minuty/) i ocenić sam. Jeśli po przeczytaniu tego tekstu wybierzesz PL-Med, uznamy, że porównanie zadziałało.

## Źródła

Wszystkie konsultowane 13 października 2026 roku:

- [Strona główna · PL-Med](https://pl-med.pl/): nagłówek "Oprogramowanie PL-Med 2026 nowość dla stomatologii i medycyny"; "Przez kilkanaście lat obecności na rynku"; cztery liczby podane jako "150000 kart pacjentów zgromadzonych w jednej bazie", "11100 aktualnie działających licencji w całej Polsce", "129 dostępnych raportów i analiz" i "23 lat obecności na rynku"; wersje "PL-MED FREE", "PL-MED LIGHT/TO-GO" i "PL-MED PRO"; siedem specjalizacji ze Stomatologią na pierwszym miejscu; funkcje w czterech blokach (Dokumentacja medyczna, Organizacja pracy, Administracja raporty i analizy, Komunikacja i współpraca z urządzeniami mobilnymi); SMS "w ramach abonamentu u swojego operatora (z posiadanego numeru)" oraz przez bramkę `www.serwersms.pl`; "przestrzenie dyskowe w chmurze: Dropbox, GoogleDrive, OneDrive"; synchronizacja z iOS, Android i Windows Phone; adres "PL-Med Software, ul. Marcina Kasprzaka 31 lok. 126, 01-234 Warszawa"; telefony 531 916 916, 531 917 917, 531 918 918, 501 707 330, 502 18 17 19 i 531 914 914, pon.-pt. 8.00-16.00.
- [Wersje oprogramowania PL-Med](https://pl-med.pl/program/komfort-i-efektywnosc-pracy/): sześć wersji (FREE, Light, TO-GO, PRO, DB-Cloud, TO-GO DB-Cloud); zdanie o pakiecie FREE cytowane w tekście w całości, w tym "bezterminowo, na zasadach FREEWARE SOFTWARE, bez możliwości modyfikacji, kopiowania oraz udostępniania programu osobom trzecim" i "bezpłatny pakiet opcji dostępny bez rejestracji w wersjach Light, TO-GO oraz PRO"; Light "w bardzo przystępnej cenie" i jej ograniczenie "wersja jednostanowiskowa z możliwością wykonywania naraz jednej operacji np. otworzenie w tym samym czasie tylko jednej karty pacjenta"; TO-GO "nie wymaga jakiejkolwiek instalacji na komputerach" i działa "na dowolnym komputerze (notebook, tablet, komputer stacjonarny) z systemem Windows"; moduły "Recepcja, Gabinet, Administracja, Sprzedaż/Magazyn"; bazy "MS-SQL Server 2008" dla PRO i "MySQL" dla DB-Cloud; DB-Cloud "z danymi w chmurze, umożliwiające pracę rozproszoną / zdalną"; jedenaście specjalizacji.
- [Do pobrania · PL-Med](https://pl-med.pl/program/pliki-do-pobrania/): pięć pozycji (Pomoc zdalna, Wymagania sprzętowe, Cennik, Informacje ogólne, Demo), z odnośnikami do `download.pl-dent.pl/PLMED2017/Cennik PL-Med Software 2017.pdf`, `download.pl-dent.pl/PLMED2017/wymagania sprzętowe.pdf` i `download.pl-dent.pl/PLMED2015/Instalator_online.exe`.
- [Polityka prywatności · PL-Med](https://pl-med.pl/cookie-policy/): "Zbieramy informacje od Ciebie, gdy złożysz zamówienie lub gdy zweryfikujemy twoją licencję na zarejestrowanym komputerze"; "Możemy również zbierać niektóre dane identyfikacyjne z urządzenia z systemem Windows, takie jak numery seryjne, aby jednoznacznie zidentyfikować Twoje urządzenie do naszej licencji"; punkt "5. Zgodność z RODO" dotyczy danych osób zamawiających i rejestrujących licencję, a nie powierzenia przetwarzania danych pacjentów, o którym na tej stronie nie ma nic.
- [Wersja demo · PL-Med](https://pl-med.pl/wersja-demo/): "Wypróbuj wersję demo za darmo", link do pobrania wysyłany po podaniu adresu e-mail i nazwy kliniki; bez podanej długości okresu próbnego i bez wymagań systemowych.
- [Kontakt · PL-Med](https://pl-med.pl/kontakt/): te same telefony i godziny; napisy `dorota.panczak@pl-med.pl` i `support@pl-med.pl` z odnośnikami prowadzącymi do `dorota.panczak@pldent.pl` i `olgierd.boltuc@pldent.pl`.
- [Potrzebujesz pomocy? · PL-Med](https://pl-med.pl/wsparcie/) oraz [Synchronizacja z iCloud](https://pl-med.pl/wsparcie/icloud/): najnowsza datowana treść to komunikat "Synchronizacja z iCloud od 15.06.2017"; konfiguracja usług w chmurze przez okno "Moje usługi"; SMS-y przez aplikację SMS Gateway Ultimate na telefonie z Androidem.
- [Referencje · PL-Med](https://pl-med.pl/program/referencje/): trzy rekomendacje, dwa nazwane gabinety (Klinika Impladent, dr n. med. Adam Ziemlewski; Klinika Dental House, Marek Milcarz), bez liczby gabinetów.
- [Finanse · PL-Med](https://pl-med.pl/program/finanse/): rozliczenia z pacjentem na zakładkach Świadczenia, Płatności i Rachunki, wystawianie rachunku lub faktury z karty pacjenta.
- [Licencja Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) i [kod źródłowy](https://github.com/martinezsalmeron/dentalpin).

Mapa strony pod adresem `pl-med.pl/wp-sitemap.xml` wymienia piętnaście adresów i przegląd objął wszystkie. Wnioski o tym, czego nie ma, dotyczą zatem całej witryny: nie występują na niej słowa *diagram zębowy*, *periodontogram*, *RTG*, *kosztorys*, *plan leczenia*, *e-recepta*, *EDM*, *P1*, *NFZ*, *KSeF*, *eksport* ani *kopia zapasowa*, nie ma dokumentacji API, nie ma NIP, KRS ani REGON, i nie ma żadnej kwoty w złotych. Odnośniki "Czytaj więcej" pod czterema blokami funkcji oraz pozycja "Galeria" w menu prowadzą na `pl-med.pl/stona-w-przebudowie/` z napisem "Zapraszamy wkrótce...". Brak domeny `pl-dent.pl` sprawdzono 13 października 2026 roku w dwóch niezależnych resolwerach publicznych, [dns.google](https://dns.google/resolve?name=download.pl-dent.pl&type=A) i [cloudflare-dns.com](https://cloudflare-dns.com/dns-query?name=download.pl-dent.pl&type=A); oba zwróciły status 3 (NXDOMAIN) dla `pl-dent.pl`, `download.pl-dent.pl` i `pldent.pl`, przy poprawnym rozwiązaniu `pl-med.pl` w tym samym czasie. Nazwa Dentalpin nie pada na żadnej konsultowanej stronie PL-Med.

Widzisz tu coś błędnego albo nieaktualnego? [Napisz nam](https://github.com/martinezsalmeron/dentalpin/discussions) i poprawimy. Dotyczy to także osób z PL-Med.
