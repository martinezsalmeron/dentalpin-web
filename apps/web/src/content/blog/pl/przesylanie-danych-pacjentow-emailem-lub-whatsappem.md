---
title: "Wysyłanie zdjęcia pantomograficznego albo opisu: kanał waży więcej niż zgoda"
description: "Minimum to zaszyfrowany plik z hasłem nadanym przy jego tworzeniu, a hasło innym kanałem. Co to znaczy w gabinecie stomatologicznym i dlaczego nie WhatsApp."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [rodo, ochrona-danych, dokumentacja-medyczna, bezpieczenstwo]
---

Ortodonta prosi o pantomogram, pracownia protetyczna prosi o zdjęcia, pacjent prosi o opis "na WhatsAppie". Zgoda jest w każdym z tych trzech przypadków częścią łatwą: zwykle już jest, a gdy jej nie ma, uzyskuje się ją w trzydzieści sekund. Trudny jest kanał. Polska ma na to opisane minimum złożone z trzech elementów: uprzedzenie pacjenta o zagrożeniach, zaszyfrowany plik z hasłem nadanym w chwili jego tworzenia, i hasło przesłane innym bezpiecznym kanałem.

To nie jest porada prawna. To lektura źródeł wskazanych na końcu, sprawdzonych 7 października 2026 r.

## To nie jest żadne z pozostałych czterech pytań

Pięć spraw stale się ze sobą myli, a cztery mają już odpowiedź w innym miejscu.

- **Przypomnienia o wizytach** nie zawierają treści klinicznych. To data i godzina, a problemem jest tam zgoda: zobacz [przypomnienia przez WhatsApp](/pl/blog/przypomnienia-o-wizytach-przez-whatsapp/) i [porównanie kanałów](/pl/blog/sms-whatsapp-czy-email-przypomnienia/).
- **Prawo dostępu** rozstrzyga, co trzeba wydać i w jakim terminie, gdy [pacjent wnosi o dokumentację](/pl/blog/udostepnianie-dokumentacji-medycznej-pacjentowi/). Rozstrzyga co, a niemal nic nie mówi o tym jak.
- **RODO w gabinecie** to ogólne ramy: [podstawy przetwarzania, rejestr, okresy przechowywania](/pl/blog/rodo-w-gabinecie-stomatologicznym/).
- **Tutaj** odpowiadamy na codzienne pytanie, które pojawia się potem: już wiesz, że coś ma wyjść i do kogo. Zostaje pytanie, którą drogą.

> **Zgoda czyni przekazanie legalnym, nie czyni go bezpiecznym.** To dwie niezależne warstwy art. 32 RODO. Przesyłka w pełni objęta zgodą, ale wysłana na zły adres, pozostaje naruszeniem ochrony danych, i żadna klauzula tego nie naprawia po fakcie.

## Minimum opisane dla sektora ochrony zdrowia

Kodeks postępowania dla sektora ochrony zdrowia wydany zgodnie z art. 40 RODO, w wersji z 11 grudnia 2023 r. opublikowanej na stronie UODO, opisuje dokładnie to, czego brakuje w przepisach: konkretny poziom zabezpieczenia.

Punkt 6.5.13 ustawia zasadę ogólną: podmiot *"dowolnie zabezpiecza transmisję danych w postaci elektronicznej zgodnie z przeprowadzoną analizą ryzyka"*, z zastrzeżeniem, że: *"Poziom bezpieczeństwa nie może być niższy od poziomu bezpieczeństwa gwarantowanego przez minimalne zabezpieczenie"* wskazane w punkcie następnym. A punkt 6.5.14 wymienia trzy elementy tego minimum:

1. **Uprzedzenie pacjenta**, czyli *"uprzedniego poinformowania Pacjenta o zagrożeniach, dotyczących ochrony danych osobowych, związanych z proponowanym kanałem komunikacji"*.
2. **Zaszyfrowany plik**, czyli *"utworzenia plików zawierających zaszyfrowane informacje za pomocą bezpiecznych programów do szyfrowania"*.
3. **Hasło nadane przy tworzeniu pliku**, czyli *"wprowadzenia hasła zabezpieczającego plik w chwili tworzenia tego pliku"*.

> **Hasło nie jedzie razem z plikiem.** Kodeks nie zostawia tu pola na interpretację: *"Klucz taki powinien zostać przesłany do odbiorcy innym, bezpiecznym kanałem komunikacji. Bezpiecznym kanałem komunikacyjnym do przekazania hasła jest np. sms przesłany na telefon Pacjenta, przekazanie hasła pocztą tradycyjną, przekazanie hasła do rąk własnych Pacjenta lub osoby przez niego upoważnionej."*

Potrzebne jest tu uczciwe zastrzeżenie co do statusu tego dokumentu. Kodeks powstał po stronie branżowej, przy udziale Centrum e-Zdrowia i Ministerstwa Zdrowia, a jego twórcy *"deklarują chęć wystąpienia o jego zatwierdzenie do Prezesa UODO"*. Jest więc kodeksem sektorowym, a nie stanowiskiem organu nadzorczego. Opisane minimum ma wartość praktyczną, bo pokazuje, co branża uznaje za wystarczające, nie bo organ je zatwierdził.

![Dokumentacja pacjenta z diagramem zębowym, ostrzeżeniami klinicznymi, aktywnym planem leczenia i najbliższą wizytą](/screenshots/dental-chart.png)

*Dokumentacja, z której pochodzi żądany plik: diagram zębowy, ostrzeżenia kliniczne i aktywny plan leczenia.*

## Dlaczego szyfrowanie end-to-end niczego nie zamyka

Powracający argument brzmi: WhatsApp szyfruje end-to-end, więc jest w porządku. Nie jest, bo transport nigdy nie był jedynym problemem. Poza szyfrowaniem zostaje prawie wszystko, co się tu liczy.

- **Metadane.** Kto kontaktuje się z gabinetem stomatologicznym, kiedy i jak często. Cotygodniowa rozmowa z gabinetem stomatologicznym sama w sobie jest informacją o zdrowiu.
- **Urządzenie.** Wiadomość jest odszyfrowywana na telefonie, zwykle prywatnym telefonie kogoś z zespołu, z jego galerią zdjęć i uprawnieniami aplikacji.
- **Kopia zapasowa.** Zdjęcie pantomograficzne wysłane komunikatorem trafia do automatycznej kopii telefonu i do galerii. Tam szyfrowanie end-to-end nie odgrywa już żadnej roli.
- **Relacja z dostawcą.** Konsumencki komunikator nie jest podmiotem przetwarzającym dla gabinetu w rozumieniu art. 28 RODO i nie ma żadnej umowy powierzenia.

> **Temat i treść wiadomości nigdy nie są zaszyfrowane.** To szczegół, który unieważnia połowę poprawnie wykonanych wysyłek: załącznik jest zabezpieczony, a temat brzmi "Pantomogram pani Nowak". Nazwisko pacjenta właśnie pojechało otwartym tekstem.

## Kanały, po kolei

| Kanał | Nadaje się do treści klinicznych? | Co o tym decyduje |
|---|---|---|
| E-mail z zaszyfrowanym plikiem, hasło innym kanałem | ✓ Tak | To opisane minimum |
| E-mail z S/MIME albo PGP między stałymi partnerami | ✓ Tak | Nie trzeba wymieniać hasła przy każdej wysyłce |
| E-mail bez zabezpieczenia pliku | ✗ Nie | Poniżej minimum i art. 32 RODO |
| WhatsApp i komunikatory konsumenckie | ✗ Nie | Metadane, kopia z telefonu, brak umowy powierzenia |
| Faks | ✗ Nie | Transmisja bez szyfrowania i błędy wybierania numeru |
| List w zamkniętej kopercie | ~ Dopuszczalne | Chronione, ale bez użytecznego śladu |
| Wydanie do rąk własnych w gabinecie, na nośniku szyfrowanym | ✓ Tak | Brak transmisji, tożsamość sprawdzana na miejscu |
| Portal pacjenta z uwierzytelnioną sesją | ✓ Tak | Uwierzytelnienie, rejestr dostępu, brak hasła poza kanałem |

## Jak wykonać wysyłkę, która się obroni

1. **Ustal podstawę przed kanałem.** Wniosek pacjenta, uzgodnione skierowanie albo obowiązek prawny. Jeśli nie ma żadnej z tych trzech, szyfrowanie niczego nie naprawia.
2. **Potwierdź tożsamość i adres.** Błędny adresat to najczęstsza przyczyna naruszenia w gabinecie i żadne szyfrowanie go nie koryguje.
3. **Uprzedź pacjenta o zagrożeniach kanału.** To pierwszy element minimum, a nie uprzejmość.
4. **Zaszyfruj plik przy jego tworzeniu.** Kontener z szyfrowaniem AES 256 bitów lub silniejszym.
5. **Hasło przekaż inną drogą.** SMS, poczta tradycyjna albo do rąk własnych. Ten sam e-mail nie jest inną drogą.
6. **Zostaw temat i treść bez danych.** Bez nazwiska, bez numeru dokumentacji, bez rozpoznania. "Żądana dokumentacja" wystarczy.
7. **Załącz tylko to, o co poproszono.** Jedno zdjęcie to nie cała dokumentacja medyczna.
8. **Odnotuj udostępnienie w wykazie.** Kodeks odsyła tu do wykazu z art. 27 ust. 4 ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta. Bez wpisu nie wykażesz później, że udostępnienie było zgodne z prawem.
9. **Usuń kopię roboczą.** PDF wygenerowany do wysyłki nie ma po co zostawać na komputerze w recepcji.

Punkt 5 jest łamany najczęściej i bez złej woli, a punkt 6 to ten, o którego istnieniu prawie nikt nie wie. Razem tłumaczą większość wysyłek, które wyglądają poprawnie, a poprawne nie są.

![Historia aktywności pacjenta z ostrzeżeniami klinicznymi, aktywnym planem i filtrami wizyt, zabiegów, płatności i komunikacji](/screenshots/patient-timeline.png)

*Zakładka aktywności w dokumentacji, z filtrem komunikacji obok pozostałych rodzajów wpisów.*

## Wydanie do rąk własnych nadal jest najprostszą drogą

Przed instalowaniem czegokolwiek zostaje rozwiązanie, którego żaden dostawca nie promuje, bo nic na nim nie sprzedaje: wydać pacjentowi skierowanie i zdjęcie w gabinecie, na szyfrowanym nośniku. Nie ma transmisji, tożsamość sprawdza się patrząc na osobę, a czynność odnotowuje się w dokumentacji. Dla pacjenta, który i tak przychodzi na wizytę, to krótsza droga.

Dla pracowni protetycznej i dla kolegi, z którym pracuje się co tydzień, odpowiedź jest inna i lepsza: raz wymienić klucze publiczne i używać szyfrowania asymetrycznego, które nie wymaga dzielenia się hasłem przy każdej wysyłce.

## Uczciwy wniosek: przestać wysyłać pliki

Wszystko powyżej to lista środków ostrożności dla wysyłki, która wykonana inaczej po prostu nie zachodzi. Jeśli dokument jest pobierany z uwierzytelnionej sesji, a nie jedzie jako załącznik, znikają dokładnie te trzy miejsca, które sprawiają kłopot: żadnego hasła drugim kanałem, żadnego pliku w czyjejś kopii zapasowej, i rejestr z informacją, kto i kiedy go otworzył.

Robi to [portal pacjenta](/pl/blog/portal-pacjenta-w-gabinecie-stomatologicznym/) i dlatego właśnie on jest rekomendacją tego artykułu, a nie zaszyfrowany e-mail. W Dentalpin dokument publikuje się w portalu, a każdy dostęp zapisuje się z autorem i datą, więc wysyłka e-mailem zostaje dla przypadków bez alternatywy. Kod jest otwarty, więc rejestr się audytuje, a nie przyjmuje na wiarę, a [cennik jest opublikowany](/pl/cennik/).

## Źródła

- Kodeks postępowania dla sektora ochrony zdrowia wydany zgodnie z art. 40 RODO, Warszawa, 11 grudnia 2023 r., punkty 6.5.12-6.5.15, opublikowany na stronie Urzędu Ochrony Danych Osobowych: [uodo.gov.pl](https://uodo.gov.pl/pl/file/4525). Sprawdzono 7 października 2026 r. Kodeks sektorowy, którego twórcy deklarują wystąpienie o zatwierdzenie do Prezesa UODO; nie jest stanowiskiem organu nadzorczego.
- Rozporządzenie (UE) 2016/679 (RODO), art. 9, 28 i 32: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Sprawdzono 7 października 2026 r.
