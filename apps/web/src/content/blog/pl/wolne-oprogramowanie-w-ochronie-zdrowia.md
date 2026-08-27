---
title: "Wolne czy własnościowe oprogramowanie w ochronie zdrowia: co naprawdę się zmienia"
description: "Co licencja programu medycznego rzeczywiście przesądza, czego nie przesądza i jak w dziesięć minut sprawdzić, do której kategorii trafiasz."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [wolne-oprogramowanie, open-source, licencje, rodo, umowa]
---

Licencja nie decyduje o tym, czy program jest dobry dla twojego gabinetu. Decyduje o trzech konkretnych sprawach: kto będzie mógł go utrzymywać, jeśli dostawca zniknie, czy możesz uruchomić go na własnym serwerze i na jakich warunkach będziesz mógł z niego korzystać za dziesięć lat.

Cała reszta, czyli cena, wsparcie, faktyczne bezpieczeństwo i odpowiedzialność wobec RODO, zależy od dostawcy i od sposobu wdrożenia. Nic z tego nie jest zapisane w licencji, a mieszanie obu list to najprostszy sposób na złą decyzję.

## Kategorie są trzy, nie dwie

Zwykła rozmowa przeciwstawia "otwarte" i "zamknięte", a pomija kategorię, w której znajduje się dziś rosnąca część rynku.

Open Source Initiative utrzymuje definicję odniesienia, obecnie w wersji 1.9. Pierwsze zdanie jest tym, o którym najczęściej się zapomina: "otwarte oprogramowanie to nie tylko dostęp do kodu źródłowego". Definicja wymaga dodatkowo, żeby licencja pozwalała na dalszą dystrybucję, pozwalała na dzieła pochodne i nie zabraniała nikomu używania programu "w określonej dziedzinie działalności".

Free Software Foundation ujmuje to samo w czterech wolnościach: uruchamiać program wedle uznania, badać jego działanie i zmieniać go, rozpowszechniać kopie oraz rozpowszechniać własne zmodyfikowane wersje. Dla wolności 1 i 3, dodaje ten tekst, "dostęp do kodu źródłowego jest warunkiem koniecznym".

| | Wolne / open source | Kod dostępny | Własnościowe |
|---|---|---|---|
| Widzisz kod | ✓ Każdy | ✓ Opublikowany | ✗ Nie, poza depozytem |
| Możesz go zmieniać | ✓ Tak | ✓ Tak | ✗ Nie |
| Dowolne zastosowanie | ✓ Bez wyłączeń | ~ Część zastosowań wyłączona | ~ To, co mówi umowa |
| Możesz go rozpowszechniać | ✓ Tak | ~ Z tymi samymi ograniczeniami | ✗ Nie |
| Spełnia definicję OSI | ✓ Tak | ✗ Nie | ✗ Nie |
| Typowe licencje | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Umowa producenta |

Środkowa kolumna jest realna i rośnie. Business Source License 1.1 publikuje kod i pozwala go zmieniać, ale zastrzega niektóre zastosowania, i mówi to we własnym tekście wprost: "ta licencja nie jest licencją otwartego oprogramowania". Zobowiązuje też utwór do przejścia na prawdziwą wolną licencję w ustalonym terminie.

> **"Kod jest publiczny" i "to open source" to nie to samo zdanie.** Dostawca może pokazać każdą linijkę i mimo to zakazać konkretnych zastosowań. To nie jest nieuczciwe, to inna kategoria, a jedynym sposobem, żeby wiedzieć która, jest przeczytanie licencji.

## O czym licencja decyduje

- **Kto może utrzymywać program, gdy dostawcy już nie ma.** Mając kod i prawo do jego zmiany, każdy kompetentny programista może załatać system. Nie jest to darmowe ani natychmiastowe, ale jest możliwe, a to właśnie ta różnica liczy się w dniu ogłoszenia.
- **Gdzie program działa.** Wolna licencja pozwala zainstalować go na własnym sprzęcie. Abonament własnościowy w chmurze prawie nigdy na to nie pozwala, niezależnie od kwoty.
- **Czy możesz sprawdzić, co robi z danymi.** Lektura kodu to jedyny sposób, żeby ustalić, co wychodzi z gabinetu i jak często, zamiast wierzyć odpowiedzi handlowca.
- **Co będzie za dziesięć lat.** Wolna licencja nie wygasa. Abonament wygasa, a razem z nim dostęp do programu, w którym leży dokumentacja medyczna.

## O czym licencja nie decyduje

Tu mieszczą się niemal wszystkie nieporozumienia.

- **Kto odpowiada na gruncie RODO.** Artykuł 4 pkt 7 wskazuje jako administratora tego, kto "ustala cele i sposoby przetwarzania danych osobowych", a artykuł 24 ust. 1 nakłada na niego obowiązek wykazania zgodności. To gabinet, niezależnie od programu. Przy hostingu u osoby trzeciej artykuł 28 wymaga umowy powierzenia, a ustęp 3 lit. g nakazuje zwrot lub usunięcie danych po zakończeniu usługi.
- **Czy program jest wyrobem medycznym.** Rozporządzenie (UE) 2017/745 definiuje wyrób medyczny jako narzędzie, aparat, urządzenie, oprogramowanie, implant, odczynnik, materiał lub inny artykuł przeznaczony przez producenta do celu medycznego. Rozstrzyga przewidziane zastosowanie, nigdy licencja.
- **Czy jest bezpieczny.** Publiczny kod jest możliwy do zbadania, a nie zbadany. To dwie różne rzeczy i tylko druga kogokolwiek chroni.
- **Ile kosztuje.** Istnieje wolne oprogramowanie z drogimi umowami serwisowymi i tanie oprogramowanie własnościowe.
- **Czy ktoś odbierze telefon w piątek o dwudziestej.** O tym decyduje umowa serwisowa, a sprzedają ją obie kategorie.

![Karta pacjenta z alertami klinicznymi, aktywnym planem leczenia i osią czasu filtrowaną według wizyt, zabiegów, płatności i wiadomości](/screenshots/patient-timeline.png)

*Lata dokumentacji medycznej wewnątrz jednego programu. Licencja nie zmienia tego, kto za te dane odpowiada: nadal gabinet.*

## "Wolne" nie znaczy "darmowe"

Free Software Foundation zaczyna swoją definicję właśnie od tego rozróżnienia: chodzi "o wolność, nie o cenę", i o słowie "free" trzeba myśleć jak w "wolności słowa", a nie jak w "darmowym piwie". Ta sama strona przypomina, że mogłeś zapłacić za swoje kopie i mimo to zachować wszystkie wolności.

W praktyce pieniądze nie znikają. Zmieniają miejsce.

| Pozycja | Własnościowe, hostowane u dostawcy | Wolne, na twoim serwerze |
|---|---|---|
| Licencja | ~ Za użytkownika, za fotel lub za lokalizację | ✓ Bez opłaty licencyjnej |
| Serwer i przestrzeń | ✓ W abonamencie | ✗ Po twojej stronie |
| Kopie zapasowe | ✓ U dostawcy, na jego zasadach | ✗ Twoje, i trzeba je testować |
| Aktualizacje | ✓ Wgrywane za ciebie | ~ Twoje albo firmy zewnętrznej |
| Wsparcie | ✓ W cenie albo na umowę | ~ Społeczność albo osobna umowa |
| Odejście | ~ Zależy od ich eksportu | ✓ Masz już dane i kod |

Mały, porządnie postawiony serwer kosztuje niewiele. Czas osoby, która go aktualizuje, pilnuje kopii i odpowiada, gdy coś się psuje, nie jest zerowy, a to właśnie tej liczby nikt nie wpisuje do arkusza. Przed decyzją warto przeczytać, co naprawdę oznacza [samodzielny hosting oprogramowania medycznego](/pl/blog/samodzielny-hosting-oprogramowania-medycznego/).

## Jak przeczytać licencję w dziesięć minut

Do pierwszego przejścia nie potrzeba prawnika. Potrzeba otworzyć pięć rzeczy i zanotować, co mówią.

1. **Znajdź plik LICENSE w publicznym repozytorium.** Jeśli repozytorium nie ma, odpowiedź już jest: to oprogramowanie własnościowe. To niczego nie dyskwalifikuje, mówi tylko, jakie pytania zadać dalej.
2. **Sprawdź, czy nazwa licencji figuruje na liście OSI.** GPL, AGPL, Apache i MIT są tam. BSL i rodzina "source available" nie.
3. **Poszukaj słów "Use Limitation" albo "Additional Use Grant".** Jeśli któreś zastosowania są wyłączone, to nie jest wolna licencja, choćby kod był w pełni jawny.
4. **Poszukaj "Change Date".** Niektóre licencje stają się wolne po upływie terminu, często czterech lat, a to zmienia rachunek w dłuższej perspektywie.
5. **Zapytaj, czy opublikowany kod to ten, który działa u ciebie.** Repozytorium zatrzymane na wersji sprzed dwóch lat nie jest siatką bezpieczeństwa.
6. **Poproś o pełny eksport przed podpisaniem umowy.** [Format, którego trzeba wymagać](/pl/blog/eksport-danych-z-programu-stomatologicznego/), liczy się bardziej niż licencja w dniu, w którym zechcesz odejść.

> **Jeśli zdążysz zrobić tylko jedną kontrolę, zrób ostatnią.** Otwarty i przetestowany eksport chroni cię we wszystkich trzech kategoriach. Wolna licencja bez danych do eksportu nie uratuje żadnej migracji.

![Ekran raportów gabinetu](/screenshots/reports.png)

*Raporty odtwarza się z danych. Dlatego użytecznym pytaniem przed podpisem jest to, w jakim formacie dane wychodzą, a nie na jakiej licencji weszły.*

## Co zmienia się w grudniu 2027

Rozporządzenie (UE) 2024/2847 z 23 października 2024, znane jako akt o cyberodporności, ustala wymogi cyberbezpieczeństwa dla produktów z elementami cyfrowymi. Artykuł 71 przewiduje stosowanie od **11 grudnia 2027**, przy czym artykuł 14 stosuje się od 11 września 2026, a rozdział IV od 11 czerwca 2026.

Przepis jest skierowany do producentów i dystrybutorów, nie do twojego gabinetu, ale zmienia to, od kogo możesz czegoś wymagać.

- **Oprogramowanie komercyjne jest objęte, otwarte czy nie.** Rozstrzyga to, że jest dostarczane w ramach działalności handlowej.
- **Niezmonetyzowane wolne oprogramowanie jest poza zakresem.** Motyw 18 precyzuje, że dostarczanie produktów będących wolnym i otwartym oprogramowaniem, "które nie są monetyzowane przez ich producentów, nie powinno być uznawane za działalność handlową".
- **Pojawia się nowa figura, "opiekun oprogramowania otwartego"**, zdefiniowana w artykule 3 pkt 14 dla osób prawnych, które trwale wspierają rozwój otwartych projektów przeznaczonych do celów komercyjnych, z lżejszymi obowiązkami niż producent.

Praktyczny wniosek dla gabinetu jest krótki: od tej daty projekt społecznościowy bez firmy za plecami i produkt komercyjny nie odpowiadają tak samo, i warto wiedzieć, który z nich się instaluje.

## W ochronie zdrowia to już istnieje

To nie jest hipoteza laboratoryjna. GNU Health opisuje się jako "wolny ekosystem zdrowia cyfrowego, w którym medycyna społeczna spotyka się z nowoczesną informatyką medyczną" i publikuje wdrożenia w szpitalach i ministerstwach zdrowia kilku krajów. OpenEMR przedstawia się jako "najpopularniejsze otwarte rozwiązanie do elektronicznej dokumentacji medycznej i zarządzania praktyką" i podaje, że ma certyfikat ONC w Stanach Zjednoczonych.

Żadne z nich nie jest programem stomatologicznym, i o to właśnie chodzi: pytanie o licencję ma taką samą odpowiedź w każdej specjalizacji.

## Pytanie, które rozstrzyga

Jest tylko jedno: **jeśli ta firma zniknie jutro, co nadal działa?**

Jeśli odpowiedź obejmuje kod źródłowy, dane w otwartym formacie i serwer, który kontrolujesz, licencja zrobiła swoje. Jeśli nie obejmuje żadnej z tych trzech rzeczy, żaden zapis umowy tego nie zastąpi.

Dentalpin należy do kategorii środkowej i warto powiedzieć to precyzyjnie: kod jest jawny na licencji BSL 1.1, z ograniczeniem użycia wykluczającym prowadzenie konkurencyjnego SaaS, i z automatycznym przejściem na Apache 2.0, czyli prawdziwą wolną licencję, cztery lata po każdej publikacji. Instaluje się na twoim serwerze, bazą danych jest PostgreSQL, a [cennik](/pl/cennik/) jest opublikowany.

## Źródła

Wszystkie sprawdzone 27 sierpnia 2026.

- Open Source Initiative, *The Open Source Definition*, wersja 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, cztery wolności. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, tekst licencji i adnotacja "is not an Open Source license". [mariadb.com](https://mariadb.com/bsl11/)
- Rozporządzenie (UE) 2016/679 (RODO), art. 4 pkt 7, art. 24 ust. 1, art. 28 ust. 1 i ust. 3 lit. g. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016R0679)
- Rozporządzenie (UE) 2017/745 w sprawie wyrobów medycznych, art. 2 pkt 1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32017R0745)
- Rozporządzenie (UE) 2024/2847 (akt o cyberodporności), motyw 18, art. 3 pkt 14 i art. 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32024R2847)
- GNU Health, strona projektu. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, strona projektu. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, plik LICENSE w repozytorium (Business Source License 1.1).

To nie jest porada prawna. Kwalifikacja programu jako wyrobu medycznego i podział odpowiedzialności za dane osobowe zależą od konkretnego przypadku. Skonsultuj to z doradcą przed podjęciem decyzji.
