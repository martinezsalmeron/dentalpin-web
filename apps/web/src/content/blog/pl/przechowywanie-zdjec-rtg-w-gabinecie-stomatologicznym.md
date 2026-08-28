---
title: "Zdjęcia RTG w gabinecie stomatologicznym: jak je przechowywać i udostępniać"
description: "Jak przechowywać cyfrowe zdjęcia RTG: dlaczego DICOM, ile lat trzeba je trzymać według ustawy o prawach pacjenta i jak je bezpiecznie udostępniać."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [rtg, dicom, dokumentacja-medyczna, rodo, zarzadzanie-gabinetem]
---

Zapisuj każde zdjęcie RTG w dokumentacji medycznej pacjenta, w formacie, który otworzysz bez programu producenta sensora, i trzymaj jedną kopię poza gabinetem. W Polsce miejsce przechowywania zmienia sam okres: dokumentacja medyczna to 20 lat, a zdjęcia rentgenowskie przechowywane poza dokumentacją medyczną pacjenta to 10 lat.

Poniżej jest to, jak wygląda to w praktyce: jakiego formatu żądać, gdzie zdjęcie ma leżeć, ile miejsca faktycznie zajmie i jak je przekazać, nie robiąc z tego incydentu.

## Format waży więcej niż dysk

Cyfrowe zdjęcie RTG to nie tylko siatka pikseli. Niesie ze sobą pacjenta, datę, aparat, technikę i parametry ekspozycji, i to właśnie ta część zamienia obraz w dokumentację.

Międzynarodowym standardem jest DICOM, który NEMA opisuje jako standard przesyłania, przechowywania, wyszukiwania, drukowania, przetwarzania i wyświetlania informacji obrazowej w medycynie. Można go pobrać bezpłatnie, więc każdy może sprawdzić, co w nim naprawdę stoi.

- **DICOM PS3.10** definiuje format pliku, czyli to, dzięki czemu skopiowane gdzie indziej zdjęcie nadal da się otworzyć.
- **DICOM PS3.2** definiuje zgodność i zobowiązuje każdego producenta do opublikowania dokumentu opisującego, co faktycznie wdrożył. O ten dokument pyta się przed zakupem, nie po.
- **Wyeksportowany JPEG to nie to samo.** Nadaje się do pokazania pacjentowi i nie nadaje się na archiwum, bo gubi metadane, a zwykle także głębię bitową.

> **Test, który mówi, czy masz archiwum, czy zakładnika.** Weź zdjęcie sprzed dwóch lat, skopiuj je na pendrive i otwórz na komputerze bez oprogramowania sensora. Jeśli się nie otworzy, nie masz archiwum medycznego, tylko plik zamknięty w środku cudzego produktu.

## Dwadzieścia lat albo dziesięć, i decyduje o tym miejsce

Ustawa o prawach pacjenta i Rzeczniku Praw Pacjenta w art. 29 nakazuje przechowywać dokumentację medyczną przez 20 lat, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu. Dla zdjęć rentgenowskich przechowywanych poza dokumentacją medyczną pacjenta przewiduje 10 lat, licząc od końca roku kalendarzowego, w którym zdjęcie wykonano.

To jest ten fragment, który w praktyce rozstrzyga cały spór o katalogi. Zdjęcie wpięte do dokumentacji pacjenta żyje w jej rytmie, a zdjęcie leżące w osobnym folderze na dysku aparatu ma własny, krótszy zegar i własne ryzyko.

| Decyzja | Jak bywa | Co musisz umieć pokazać |
|---|---|---|
| Kiedy zdjęcie jest kasowane | ✗ Nigdy nie ustalono, kasuje się przy braku miejsca | ✓ Spisana zasada stosowana tak samo wobec wszystkich |
| Kto może je skasować | ✗ Każdy, kto ma dostęp do folderu | ✓ Konkretne uprawnienie, z zapisem w rejestrze |
| Gdzie leży najstarsza kopia | ~ Na dysku w szafie | ✓ Na nośniku, który ktoś odczytał w tym roku |

## Zdjęcie mieszka w dokumentacji, nie w katalogu

Najczęstszy błąd to nie utrata zdjęć, tylko brak możliwości ich znalezienia. Folder o nazwie `2019-11-14` z dwunastoma ponumerowanymi plikami to zeskanowany papier, a nie dokumentacja medyczna.

Kiedy zdjęcie jest powiązane z pacjentem i wizytą, trzy rzeczy przestają być problemem: znalezienie go, wiedza po co zostało wykonane i wiedza kto je oglądał.

![Dokumentacja pacjenta z diagramem zębowym, ostrzeżeniami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*Karta, do której zdjęcie zostaje wpięte, obok zęba, który dokumentuje, i planu, który je uzasadnił.*

| | Folder na komputerze przy fotelu | Udział sieciowy na serwerze | Powiązane z dokumentacją |
|---|---|---|---|
| Znalezienie zdjęcia jednego pacjenta | ✗ Zależy od nazwy nadanej tamtego dnia | ~ Dopóki ktoś trzyma się konwencji | ✓ Jest w karcie pacjenta |
| Wchodzi do kopii zapasowej | ✗ Prawie nigdy | ~ Jeśli ktoś pamiętał, żeby dodać | ✓ Razem z resztą danych |
| Przeżywa wymianę komputera | ✗ Zostaje na starej maszynie | ~ Jeśli udział zostanie przeniesiony | ✓ Idzie razem z bazą danych |
| Zapis, kto je otwierał | ✗ Brak | ✗ Brak | ~ Tylko jeśli program rejestruje dostęp |

## Miejsce się mierzy, a nie szacuje

Żadna ogólna liczba nie pomoże, bo wszystko zależy od sensora, rozdzielczości i od tego, czy robisz CBCT. Jest za to sposób, żeby wiedzieć w dziesięć minut.

1. **Sprawdź rozmiar folderu ze zdjęciami z ostatnich dwunastu miesięcy.** To jedyna liczba, która opisuje twój gabinet, a nie czyjś inny.
2. **Podziel ją przez liczbę pacjentów** przyjętych w tym czasie. Masz swoją realną średnią na pacjenta.
3. **Pomnóż przez spodziewaną liczbę pacjentów i przez lata przechowywania.** To rozmiar twojego archiwum za dziesięć lat.
4. **CBCT policz osobno**, jeśli je wykonujesz. Objętość 3D nie jest w tej samej skali co zdjęcie zębowe, a jedno badanie potrafi ważyć więcej niż rok zdjęć wewnątrzustnych.
5. **Zestaw tę liczbę z miejscem wliczonym przez dostawcę** i z ceną kolejnego progu. Tam zwykle czeka niespodzianka.

> **Archiwum rosnące bez zasady w końcu decyduje za ciebie.** We wtorek rano, kiedy dysk się zapełni, pytanie nie brzmi już co zachować, tylko co szybko skasować. Znikają wtedy zdjęcia pacjentów, którzy przestali przychodzić, czyli dokładnie te, o które ktoś upomni się za trzy lata.

## Kopia zapasowa, która pomija zdjęcia

Zdjęcia RTG to prawie cała objętość danych gabinetu, więc wypadają pierwsze, kiedy kopia musi zmieścić się w nocy. Zadanie dalej się wykonuje, dalej melduje sukces i już nie chroni tego, co największe.

- **Sprawdź rozmiar kopii**, a nie tylko komunikat o powodzeniu. Jeśli waży dużo mniej niż twoje dane, zdjęcia zostają poza nią.
- **Odtwórz pełną kopię przynajmniej raz w roku** i otwórz trzech pacjentów ze zdjęciami. Cała procedura jest w przewodniku o [kopiach zapasowych](/pl/blog/kopie-zapasowe-w-gabinecie-stomatologicznym/).
- **Szyfruj każdy nośnik, który opuszcza gabinet.** Zgubiony dysk ze zdjęciami pacjentów to naruszenie ochrony danych, które się zgłasza.

## Udostępnianie bez incydentu

Zdjęcie RTG identyfikuje osobę i opisuje jej zdrowie, więc jest daną szczególnej kategorii. RODO wymaga środków odpowiednich do ryzyka, a załącznik w zwykłej poczcie nim nie jest, kiedy istnieje coś lepszego.

- **Pacjentowi:** ma prawo do kopii. Wydaj DICOM, jeśli idzie do specjalisty, i dołóż wersję, którą otworzy w domu bez specjalnego programu.
- **Innemu lekarzowi:** czasowy link albo portal biją załącznik, bo wygasają i zostawiają ślad. Jeśli musi być poczta, to zaszyfrowana, a hasło idzie inną drogą.
- **Do pracowni:** wysyłaj tylko to, czego wymaga praca. Korona nie potrzebuje całej historii radiologicznej pacjenta.
- **Zapisuj każde wydanie.** Data, odbiorca, droga, zawartość. Ten rejestr jest odpowiedzią na reklamację dwa lata później.

![Karta pacjenta na zakładce aktywności, z ostrzeżeniami klinicznymi, aktywnym planem i osią czasu filtrowaną według wizyt, zabiegów, płatności i kontaktów](/screenshots/patient-timeline.png)

*Oś czasu pacjenta, na której widać, przy której wizycie powstało dane badanie.*

## Przy zmianie programu zdjęcia zostają w tyle

W migracji negocjuje się bazę danych, a o zdjęciach się zapomina. Poproś na piśmie o trzy konkretne rzeczy, zanim podpiszesz.

1. **Eksport zdjęć w DICOM**, a nie folder zrzutów ekranu ani własna przeglądarka dostawcy.
2. **Powiązanie każdego zdjęcia z pacjentem i datą**, w czytelnym pliku. Bez tego masz dwadzieścia tysięcy plików i zero historii.
3. **Próbny eksport teraz**, na dziesięciu prawdziwych pacjentach, zamiast obietnicy na dzień odejścia.

Ta rozmowa idzie lepiej przed zobowiązaniem i jest na liście [pytań przed podpisaniem umowy](/pl/blog/pytania-przed-podpisaniem-umowy-na-program-stomatologiczny/).

W Dentalpin zdjęcia są powiązane z dokumentacją pacjenta i leżą na systemie plików, więc wchodzą do tej samej kopii zapasowej co baza danych i możesz je zabrać ze sobą, kiedy zechcesz. Warunki są w [cenniku](/pl/cennik/).

## Źródła

- Ustawa z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta, art. 29. [ELI, Sejm RP](https://api.sejm.gov.pl/eli/acts/DU/2009/417/text.html). Dostęp 28 sierpnia 2026.
- Standard DICOM, bieżące wydanie i wykaz części (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Dostęp 28 sierpnia 2026.
- Rozporządzenie (UE) 2016/679 (RODO), art. 9, 15 i 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Dostęp 28 sierpnia 2026.

To nie jest porada prawna. Terminy właściwe dla twojego przypadku warto potwierdzić z prawnikiem lub z izbą lekarską.
