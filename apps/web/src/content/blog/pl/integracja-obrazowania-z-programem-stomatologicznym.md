---
title: "Integracja RTG i skanera wewnątrzustnego z programem stomatologicznym"
description: "Co naprawdę znaczy integracja obrazowania: lista robocza DICOM, gdzie ląduje zdjęcie, czym różni się skaner wewnątrzustny i o co zapytać przed podpisaniem umowy."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [rtg, dicom, skaner-wewnatrzustny, integracja, zarzadzanie-gabinetem]
---

Integracja, która ma znaczenie, to nie to, czy program otworzy obraz. To trzy konkretne rzeczy: aparat pobiera pacjenta z dokumentacji medycznej zamiast tego, żeby ktoś jeszcze raz wpisywał nazwisko, zdjęcie wraca podpięte do tego pacjenta i do tej wizyty, a ty możesz je w każdej chwili wyeksportować w DICOM. Bez pierwszej z nich w jednym gabinecie działają dwie kartoteki pacjentów.

Poniżej jest to, jak sprawdzić, który przypadek masz u siebie: jaki mechanizm to rozwiązuje, czym różnią się cztery poziomy integracji sprzedawane pod tym samym słowem, i co powinno znaleźć się na piśmie przed podpisem.

## Problem to nie przeglądarka obrazów, tylko dwie kartoteki

Prawie każdy program do obrazowania ma własną bazę pacjentów. Ktoś ją wypełnił w tygodniu, w którym montowano sensor, i od tamtej pory działa obok programu do zarządzania gabinetem.

Obie zaczynają identycznie i same się rozjeżdżają. Nazwisko wpisane bez polskich znaków, data urodzenia klepnięta za pięć dziewiąta, pacjent założony po jednej stronie i nie po drugiej.

- **W programie do obrazowania pojawiają się duplikaty**, a każdy z nich zabiera część historii radiologicznej.
- **Ginie uzasadnienie badania.** Zdjęcie jest, ale nie wisi przy wizycie, która je uzasadniła.
- **Dopóki sprzęt się nie zmienia, nikt tego nie widzi.** Widać to w dniu wydania pełnej dokumentacji albo w dniu zmiany programu.

> **Szybki test to nazwiska.** Otwórz program do obrazowania i wyszukaj trzech pacjentów z największą liczbą wizyt w ostatnim roku. Jeśli któryś występuje dwa razy albo jest zapisany inaczej niż w dokumentacji, twoja integracja to przycisk otwierający drugi program.

![Karta pacjenta w zakładce danych osobowych, z nazwiskiem, kontaktem i informacjami administracyjnymi](/screenshots/patients.png)

*Karta, z której powinny pochodzić nazwisko i data urodzenia zapisane przy badaniu.*

## Lista robocza to mechanizm, który to rozwiązuje

Standard, który za tym stoi, nazywa się DICOM i wydaje go NEMA. Jest też normą ISO, ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, i to właśnie tej połowy tytułu, czyli *workflow*, prawie nikt w gabinecie stomatologicznym nie używa.

Mechanizm nazywa się DICOM Modality Worklist. Izba lekarsko-dentystyczna Badenii-Wirtembergii opisuje ten przebieg krok po kroku w swoim materiale o DICOM w gabinecie stomatologicznym, a wygląda on tak samo w szpitalu i w gabinecie z dwoma fotelami:

1. **Badanie zleca się z programu do zarządzania gabinetem**, gdy pacjent jest już zidentyfikowany w swojej karcie.
2. **Zlecenie trafia na listę**, jedną na każdy aparat albo jedną wspólną.
3. **Aparat odczytuje listę na własnej konsoli** i stamtąd pobiera dane pacjenta. Nikt ich nie wpisuje ponownie.
4. **Wykonuje się badanie**, a obrazy zostają powiązane z tymi danymi już w samym aparacie.
5. **Obrazy trafiają do archiwum**, a zlecenie zostaje oznaczone jako wykonane i znika z listy.

Krok trzeci usuwa literówkę, a krok piąty sprawia, że zdjęcie samo pojawia się w karcie. System, który robi tylko piąty, oszczędza ci szukania pliku. System, który robi oba, likwiduje drugą kartotekę.

## Cztery poziomy, jedno słowo

"Zintegrowany z twoim RTG" opisuje bardzo różne rzeczy. Oto cztery poziomy, które naprawdę spotyka się w gabinetach, od najsłabszego do najpełniejszego.

| Poziom | Co faktycznie robi | Pacjent wpisywany dwa razy | Zdjęcie wraca do karty |
|---|---|---|---|
| Przycisk otwierający przeglądarkę | Uruchamia drugi program | ✗ Tak | ✗ Nie |
| Przekazanie pacjenta | Podaje identyfikator przy uruchomieniu | ✓ Nie | ~ Zależnie od producenta |
| Lista robocza i wysyłka DICOM | Zlecenie w jedną stronę, obrazy w drugą | ✓ Nie | ✓ Tak |
| Usługi webowe DICOM | Dodatkowo wyszukiwanie i pobieranie przez web | ✓ Nie | ✓ Tak |

Ostatni poziom to DICOMweb, który sam standard określa jako "the DICOM Standard for web-based medical imaging" i opisuje jako zestaw usług REST. W specyfikacji zobaczysz nazwy QIDO-RS do wyszukiwania, WADO-RS do pobierania, STOW-RS do zapisu i UPS-RS do list roboczych.

> **Pytaj o poziom po nazwie, a nie o przymiotnik.** "Kompatybilny" i "połączony" w ofercie nie znaczą nic. "Działa jako Modality Worklist SCP" i "przyjmuje STOW-RS" znaczą, a jedno i drugie da się sprawdzić przed zapłatą.

## Skaner wewnątrzustny to osobna sprawa

Skaner wewnątrzustny nie robi zdjęć RTG, tylko siatki powierzchni, i domyślnie nie zapisuje ich w DICOM. Wychodzą z niego formaty siatek używane w wytwarzaniu 3D, przede wszystkim STL i OBJ, a wielu producentów trzyma przypadek we własnym portalu w chmurze, z własnym kontem i własną listą pacjentów.

Standard po nie sięgnął. Suplement 205 do DICOM "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", a suplement 208 zrobił to samo dla OBJ, dla bibliotek materiałów MTL i dla tekstur w JPG lub PNG.

- **Pytaj, gdzie leży przypadek**, a nie gdzie się go ogląda. Jeśli odpowiedzią jest portal producenta skanera, archiwum nie stoi w twoim gabinecie.
- **Pytaj, czy eksport zabiera powiązanie z pacjentem**, a nie same pliki. Dwadzieścia tysięcy bezimiennych siatek to nie dokumentacja.
- **Pytaj, co się stanie, gdy przestaniesz płacić za skaner.** To dokładnie to samo pytanie, które wszyscy zadają o program do zarządzania, a prawie nikt o portal cyfrowego workflow.

> **Siatka i zdjęcie RTG lądują w dwóch różnych miejscach i cały problem mieści się w tym zdaniu.** Pacjent z CBCT w archiwum, zdjęciami zębowymi w folderze na komputerze przy fotelu i skanem w portalu webowym ma trzy dokumentacje, a ten, kto podpisał zgodę, sądzi, że ma jedną.

![Karta pacjenta w zakładce aktywności, z alertami klinicznymi, aktywnym planem i osią czasu filtrowaną według wizyt, zabiegów, płatności i komunikacji](/screenshots/patient-timeline.png)

*Oś czasu pacjenta, na której widać, do której wizyty należy dane badanie.*

## Jak w dwadzieścia minut sprawdzić, co masz dzisiaj

Audyt nie jest potrzebny. Potrzeba sześciu sprawdzeń, każde na prawdziwym pacjencie i żadne nieodwracalne.

1. **Załóż nowego pacjenta w programie do zarządzania** i zobacz, czy pojawi się w programie do obrazowania, gdy nikt niczego nie dotknie.
2. **Rozpocznij badanie na aparacie** i sprawdź, czy pacjent jest już wpisany, czy trzeba go szukać.
3. **Zrób zdjęcie i wróć do karty.** Policz sekundy, aż się pojawi, a jeśli się nie pojawi, zapisz, gdzie zamiast tego wylądowało.
4. **Znajdź plik na dysku.** Jeśli leży w folderze z nazwą producenta, a kopia zapasowa go nie obejmuje, masz już wynik.
5. **Wyeksportuj to zdjęcie na pendrive i otwórz na innym komputerze** bez zainstalowanego programu producenta.
6. **Powtórz punkt pierwszy ze skanerem wewnątrzustnym**, bo to on najczęściej zostaje poza wszystkim.

To, co z tego wyjdzie, jest warte więcej niż każda ulotka, bo opisuje twój gabinet. Jeśli punkt czwarty cię niepokoi, poradnik o [przechowywaniu zdjęć RTG](/pl/blog/przechowywanie-zdjec-rtg-w-gabinecie-stomatologicznym/) wchodzi w format i w archiwum.

## Co powinno być na piśmie

To wszystko negocjuje się przed podpisem, a nie po nim, i mieści się w pięciu linijkach maila.

- **DICOM conformance statement aparatu i programu.** Część PS3.2 standardu zobowiązuje każdego producenta do opublikowania tego, co faktycznie wdrożył, więc ten dokument istnieje i można go zażądać.
- **Czy program działa jako serwer listy roboczej**, i z jakimi aparatami był testowany, z nazwami i wersjami.
- **Gdzie leżą pliki obrazów**, w jakiej ścieżce lub usłudze, i czy wchodzą do tej samej kopii zapasowej co reszta.
- **Jak wygląda pełny eksport**, w DICOM i z powiązaniem pacjent oraz data w czytelnym pliku, pokazany teraz na dziesięciu pacjentach.
- **Ile kosztuje każde połączenie.** Mosty do konkretnych aparatów są fakturowane osobno częściej, niż sugeruje prezentacja, a to pytanie jest też na liście [pytań przed podpisaniem umowy](/pl/blog/pytania-przed-podpisaniem-umowy-na-program-stomatologiczny/).

W Dentalpin obrazy zapisują się powiązane z dokumentacją medyczną i w systemie plików twojego własnego serwera, więc wchodzą do tej samej kopii zapasowej co reszta i możesz je zabrać ze sobą. Warunki są w [cenniku](/pl/cennik/).

## Źródła

- DICOM, obowiązujące wydanie i lista części (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Dostęp 4 września 2026.
- DICOMweb, definicja oraz usługi QIDO-RS, WADO-RS, STOW-RS i UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Dostęp 4 września 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Dostęp 4 września 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL, tekstury). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Dostęp 4 września 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Dostęp 4 września 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, opis przebiegu DICOM Modality Worklist. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Dostęp 4 września 2026.
