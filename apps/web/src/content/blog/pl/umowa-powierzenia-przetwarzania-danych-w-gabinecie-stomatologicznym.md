---
title: "Umowa powierzenia przetwarzania danych z dostawcą programu: co musi w niej być"
description: "Czego art. 28 RODO wymaga w umowie z programem dla gabinetu stomatologicznego: udokumentowane polecenia, podwykonawcy, audyt i los danych po zakończeniu umowy."
pubDate: 2026-09-23
tags: [rodo, ochrona-danych, umowy, dostawcy, gabinet-stomatologiczny]
translationKey: contrato-encargado-tratamiento-software-dental
---

Dostawca programu przetwarza dane pacjentów w imieniu gabinetu, jest więc podmiotem przetwarzającym, a art. 28 RODO wymaga umowy o określonej treści: przedmiot i czas trwania przetwarzania, charakter i cel, rodzaj danych, kategorie osób, których dane dotyczą, oraz osiem obowiązków z liter a) do h). UODO stawia sprawę prosto: przetwarzanie przez podmiot przetwarzający odbywa się "na podstawie pisemnej umowy między administratorem i podmiotem przetwarzającym", a jej brak jest naruszeniem RODO. Administratorem jest gabinet, więc to jego naruszenie.

To nie jest porada prawna. Wszystkie źródła urzędowe znajdziesz na końcu, sprawdzone 23 września 2026 r.

## Kto jest podmiotem przetwarzającym wokół programu

Podmiot przetwarzający to ten, kto przetwarza dane w twoim imieniu, na twoje polecenie, nie decydując o celach. Przy programie dla gabinetu stomatologicznego rzadko jest to jedna firma.

Na liście są zwykle: dostawca programu, firma hostująca serwer z bazą danych, usługa kopii zapasowych i technik, który łączy się zdalnie, gdy dzwonisz na wsparcie. Każdy z nich widzi dokumentację medyczną.

Ustęp 10 art. 28 zamyka tylne drzwi: podmiot przetwarzający, który sam określa cele i sposoby przetwarzania, jest uznawany za administratora w odniesieniu do tego przetwarzania. To przepis, który zamienia klauzulę o wtórnym użyciu danych w zupełnie inny i większy problem.

![Karta pacjenta z otwartą zakładką informacji: dane kontaktowe, kontakt alarmowy oraz wywiad z alergiami i chorobami](/screenshots/patients.png)

*To są kategorie danych, które umowa ma opisać, i dlatego zapis "dane pacjentów" nie wystarcza.*

## Osiem obowiązków, które umowa musi przewidzieć

Ustęp 3 najpierw wyznacza ramy, a potem wylicza, co umowa stanowi "w szczególności".

| Litera | Do czego zobowiązany jest podmiot przetwarzający | Co to znaczy w gabinecie |
|---|---|---|
| a) | Przetwarza dane wyłącznie na udokumentowane polecenie administratora | Żadnego używania bazy pacjentów do własnych celów |
| b) | Zapewnia zobowiązanie do tajemnicy osób upoważnionych | Także techników wsparcia, nie tylko pracowników |
| c) | Podejmuje wszelkie środki wymagane na mocy art. 32 | Szyfrowanie, kopie, kontrola dostępu, i to na piśmie |
| d) | Przestrzega warunków korzystania z innego podmiotu przetwarzającego | Lista podwykonawców i twoje prawo sprzeciwu |
| e) | Pomaga przy realizacji praw osób, których dane dotyczą | Możliwość wyeksportowania wszystkiego o jednym pacjencie |
| f) | Pomaga w wywiązaniu się z art. 32 do 36 | Zgłoszenie naruszenia w czasie pozwalającym na twoje 72 godziny |
| g) | Usuwa lub zwraca dane po zakończeniu świadczenia usług | Według twojego wyboru, nie jego |
| h) | Udostępnia informacje niezbędne do wykazania zgodności i umożliwia audyty | W tym inspekcje przez ciebie lub audytora, którego upoważnisz |

Akapit po literze h) wypada z umów najczęściej: podmiot przetwarzający ma niezwłocznie poinformować administratora, jeżeli jego zdaniem wydane polecenie stanowi naruszenie przepisów.

> **Umowa, która przepisuje art. 28, nie spełnia art. 28.** Europejska Rada Ochrony Danych pisze to wprost: umowa o przetwarzaniu "nie powinna być jedynie powtórzeniem przepisów RODO", musi zawierać informacje o środkach bezpieczeństwa, obowiązek uzyskania zgody administratora przed wprowadzeniem zmian oraz regularny przegląd tych środków. Trzy ogólnikowe zdania w załączniku to dokładnie to, co ten fragment wyklucza.

## Dwadzieścia lat dokumentacji zmienia sens klauzuli o usunięciu danych

To jest polska warstwa nad art. 28 i nie wynika z RODO.

Art. 29 ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta nakazuje przechowywać dokumentację medyczną co do zasady przez 20 lat, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu, z wyjątkami wymienionymi w tym przepisie. Po upływie tych okresów dokumentację niszczy się w sposób uniemożliwiający identyfikację pacjenta.

Litera g) daje ci wybór między usunięciem a zwrotem danych. W gabinecie ten wybór nie jest w pełni swobodny, bo obowiązek przechowywania biegnie dalej, gdy umowa na program już się skończyła.

> **Polecenie "usuńcie wszystko" wydane przed odzyskaniem dokumentacji jest naruszeniem innego przepisu.** Właściwa kolejność to najpierw eksport, potem weryfikacja, a dopiero na końcu usunięcie. Po zamknięciu konta nie da się już niczego wyeksportować, a dwudziestoletni obowiązek zostaje przy gabinecie.

Trzy rzeczy, które warto mieć w umowie zapisane liczbowo:

1. **Format eksportu**, nazwany z konkretnej strony, a nie "w formacie uzgodnionym".
2. **Termin w dniach** na wydanie danych po rozwiązaniu umowy oraz koszt, jeśli jakiś jest.
3. **Pisemne potwierdzenie usunięcia**, łącznie z kopiami zapasowymi.

## Lista podwykonawców to część, której nikt nie czyta

Program w chmurze rzadko stoi sam. Pod spodem jest zwykle dostawca infrastruktury, usługa kopii zapasowych, bramka SMS i coraz częściej dostawca funkcji sztucznej inteligencji.

Ustęp 2 art. 28 przewiduje dwie formy zgody i warto wiedzieć, którą podpisałeś. Może być szczegółowa, dla konkretnego podmiotu, albo ogólna, a wtedy podmiot przetwarzający musi informować o każdym dodaniu lub zastąpieniu, **dając możliwość wyrażenia sprzeciwu**.

Europejska Rada Ochrony Danych precyzuje, czego potrzebujesz do decyzji: listy planowanych podwykonawców wraz z lokalizacją każdego z nich, zakresem powierzonych czynności i dowodem zastosowanych zabezpieczeń. Dodaje, że ogólny dostęp do strony aktualizowanej od czasu do czasu nie wystarcza, bo o każdym nowym planowanym podwykonawcy trzeba poinformować aktywnie.

Trzy pytania załatwiają niemal wszystko:

- **Gdzie jest lista i kto mnie zawiadamia o zmianie?** Opublikowana strona to nie zawiadomienie.
- **Ile mam dni na sprzeciw i co się wtedy dzieje?**
- **Co znajduje się poza Europejskim Obszarem Gospodarczym?** Litera a) obejmuje przekazywanie, więc to należy do umowy.

## Klauzula o trenowaniu modeli, której możesz odmówić

Tu umowy dostawców przesunęły się w ostatnich latach, a podpisuje się je bez czytania.

Kształt jest rozpoznawalny. W sekcji o danych klienta gabinet udziela dostawcy licencji na te dane w celu trenowania lub ulepszania modeli, do analiz porównawczych albo do dowolnego innego celu wspierającego działalność dostawcy, czasem z zapewnieniem gabinetu, że zebrał potrzebne zgody. To nie hipoteza: dostawcy w tej branży publikują warunki o takim kształcie.

Taka klauzula trudno mieści się w literze a). Kto używa danych do własnych celów, nie przetwarza ich już wyłącznie na udokumentowane polecenie, a ustęp 10 mówi, co wtedy następuje.

Odpowiedzią jest jedno zdanie dopisane do umowy, ograniczające użycie danych do wykonania usługi.

![Dokumentacja pacjenta z diagramem zębowym, ostrzeżeniami klinicznymi, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*To musi wrócić do twoich rąk, zanim zgodzisz się na jakiekolwiek usunięcie, i w formacie, który odczyta inny program.*

## Własny serwer przenosi umowę, a nie znosi jej

To najczęstsze nieporozumienie w gabinetach, które instalują program na własnym komputerze. Skoro baza stoi na miejscu, łatwo założyć, że podmiotów przetwarzających już nie ma.

Są nadal, tylko inne:

1. **Wsparcie łączące się zdalnie** widzi dokumentację przez cały czas trwania sesji.
2. **Zewnętrzna kopia zapasowa**, od chwili gdy kopia opuszcza gabinet.
3. **Dostawca hostingu**, jeśli serwer stoi w centrum danych, a nie na zapleczu.
4. **Zewnętrzny informatyk**, który administruje systemem, choćby to była ta sama osoba od lat.
5. **Sam producent programu**, gdy serwis obejmuje dostęp w celu aktualizacji lub diagnozy.

Zmienia się natomiast to, że środki z art. 32 stają się twoje. Szyfrowanie, sprawdzone kopie i zarządzanie uprawnieniami przestają być obietnicą umowną kogoś innego.

## Jak przejrzeć umowę, którą już podpisałeś

Do pierwszego przejścia nie potrzeba kancelarii.

1. **Znajdź dokument.** Jeśli masz tylko umowę serwisową bez załącznika o powierzeniu danych, odpowiedź już jest.
2. **Przejdź osiem liter** z tabeli powyżej i zaznacz te, których brakuje.
3. **Odszukaj listę podwykonawców** oraz tryb sprzeciwu wraz z terminem.
4. **Sprawdź zakończenie umowy**: format eksportu, termin, potwierdzenie usunięcia.
5. **Przeczytaj sekcję o danych klienta**, szukając licencji, trenowania modeli i analiz zbiorczych.
6. **Poproś na piśmie o to, czego brakuje.** Podpisany aneks poprawia umowę; e-mail jej nie poprawia, ale datuje rozmowę.

Warto pamiętać, skąd bierze się prawo do sprawdzenia dostawcy w trakcie trwania umowy. Art. 28 ust. 3 lit. h) nakłada na podmiot przetwarzający obowiązek udostępnienia informacji niezbędnych do wykazania zgodności oraz umożliwienia audytów, w tym inspekcji, przeprowadzanych przez administratora lub upoważnionego przez niego audytora.

## Czego wymagać od programu, żeby to było sprawdzalne

Trzy z ośmiu liter zależą od tego, co program potrafi, a nie od tego, co obiecuje umowa. Litera e) wymaga pełnego eksportu jednego pacjenta. Litera g) wymaga pełnego eksportu gabinetu. Litera h) wymaga pokazania, kto otworzył którą dokumentację.

Dentalpin ma otwarty kod, więc środki techniczne z art. 32 sprawdza się, czytając kod, zamiast wierzyć załącznikowi, a dane leżą w bazie PostgreSQL, z której w każdej chwili powstaje standardowy zrzut. Możesz go hostować sam albo wziąć w wersji zarządzanej, a [cennik](/pl/cennik/) jest opublikowany.

## Źródła

Wszystkie sprawdzone 23 września 2026 r.

- Rozporządzenie (UE) 2016/679 (RODO), art. 28 w całości oraz art. 32. [Urząd Publikacji UE, CELEX 32016R0679](https://publications.europa.eu/resource/celex/32016R0679)
- UODO, "Powierzenie przetwarzania danych trzeba udokumentować". [uodo.gov.pl](https://uodo.gov.pl/pl/138/2485)
- Ustawa z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta, art. 29. [ISAP](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu20090520417)
- Europejska Rada Ochrony Danych, Wytyczne 07/2020 dotyczące pojęć administratora i podmiotu przetwarzającego, pkt 126 i 152. [edpb.europa.eu](https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_pl.pdf)
