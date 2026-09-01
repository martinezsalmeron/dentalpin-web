---
title: "Czym jest licencja BSL i na co ci pozwala"
description: "BSL pozwala pobrać, zbadać i uruchomić program na własnym serwerze, zabrania odsprzedaży jako SaaS i wygasa: każde wydanie staje się open source po czterech latach."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [licencje, open-source, bsl, umowa, program-stomatologiczny]
---

Business Source License pozwala ci pobrać kod, przeczytać go, zmienić i uruchomić na własnym serwerze bez płacenia. Zabrania jednej rzeczy: odsprzedawania tego samego programu jako komercyjnej usługi konkurującej z tym, kto go publikuje. I wygasa, ponieważ każde wydanie automatycznie przechodzi na prawdziwą licencję open source najpóźniej cztery lata po publikacji.

Tej trzeciej części prawie nikt nie czyta, a to ona decyduje, czy licencja ci odpowiada.

> **BSL nie jest licencją open source i mówi to sama o sobie.** Jej własna nota otwiera się tak: „The Business Source License (this document, or the 'License') is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License".

## Pięć pól, które wypełnia wydawca

BSL nie jest licencją sztywną jak MIT czy GPL, gdzie tekst jest zawsze taki sam. To wzór z pięcioma lukami, a wypełnia je ten, kto publikuje oprogramowanie.

To znaczy, że „jest na BSL" jeszcze nic ci nie mówi o tym, co wolno ci zrobić. Musisz zajrzeć do pól.

| Parametr | Co ustala |
|---|---|
| Licensor | Kto wydaje program i od kogo kupujesz, jeśli potrzebujesz licencji komercyjnej |
| Licensed Work | Jakie oprogramowanie i dokładnie które wersje obejmuje ta licencja |
| Additional Use Grant | Jakie użycie produkcyjne jest dozwolone bezpłatnie |
| Change Date | Data, w której to wydanie samo zmienia licencję |
| Change License | Licencja open source, na którą przechodzi tego dnia |

Dwa z tych pięciu pól to całe negocjacje: **Additional Use Grant**, który wyznacza, jak daleko możesz używać programu produkcyjnie za darmo, oraz **Change Date**, która wyznacza moment, w którym ograniczenie przestaje mieć znaczenie.

Przykładem opublikowanym przez samych autorów licencji jest MariaDB MaxScale. Jego Additional Use Grant brzmi: „You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production". Poniżej trzech serwerów bezpłatnie, powyżej licencja komercyjna.

## Co BSL pozwala, a czego nie

Tekst podstawowy przyznaje prawo do kopiowania, modyfikowania, tworzenia dzieł zależnych, redystrybucji i użytku nieprodukcyjnego. Użycie produkcyjne zależy od pola opisanego wyżej.

| Czynność | Na licencji BSL |
|---|---|
| Pobrać i przeczytać cały kod | ✓ Zawsze dozwolone |
| Zmienić go pod swój przypadek | ✓ Zawsze dozwolone |
| Rozpowszechniać go z dołączoną licencją | ✓ Zawsze dozwolone |
| Używać go do testów i rozwoju | ✓ Zawsze dozwolone |
| Używać go produkcyjnie | ~ Tylko w zakresie Additional Use Grant |
| Odsprzedawać jako konkurencyjną usługę komercyjną | ✗ Wymaga licencji komercyjnej |

Tylko pomarańczowy wiersz wymaga uważnego czytania. „Produkcja" oznacza rzeczywiste użycie, z którego powstaje wartość gospodarcza, czyli twój gabinet przyjmujący prawdziwych pacjentów, a nie instalację testową na laptopie.

## To, że nie jest open source, nie jest wadą, ale jest informacją

Open Source Initiative utrzymuje definicję open source, a jej klauzula 6 mówi, że „licencja nie może nikomu ograniczać korzystania z programu w określonej dziedzinie działalności". BSL ogranicza dokładnie to: jedną dziedzinę działalności, czyli budowanie konkurencyjnego SaaS-a.

Dlatego nie ma jej na liście licencji zatwierdzonych przez OSI i dlatego jej własny tekst uprzedza to pytanie.

W praktyce dotyczy cię to w dwóch konkretnych miejscach:

- **W przetargu publicznym albo w specyfikacji**, która żąda „oprogramowania o otwartym kodzie" tymi słowami, BSL nie spełnia wymogu formalnego, choć cały kod jest opublikowany.
- **W audycie twojego informatyka** nic się natomiast nie zmienia. Może przeczytać kod, zbudować go i sprawdzić, co robi z danymi, dokładnie tak samo.

## Data zmiany to klauzula, która naprawdę cię chroni

To właśnie odróżnia BSL od oprogramowania zamkniętego, które przy okazji pokazuje kod. Ograniczenie ma termin ważności i jest on zapisany w samym pliku.

Wersja 1.1 licencji wprowadziła górny limit: data zmiany nie może przekroczyć czterech lat od pierwszego publicznego udostępnienia danego wydania. A licencja docelowa musi być GPL v2, GPL v3 albo z nimi zgodna, czyli prawdziwa licencja open source.

> **Data zmiany działa wydanie po wydaniu, a nie dla całego projektu.** Wersja, którą zainstalowałeś w tym roku, ma własną datę, a ta, która ukaże się za dwa lata, będzie miała swoją. Zegar twojej instalacji ruszył w dniu publikacji tej wersji, a nie w dniu, w którym ją zainstalowałeś.

![Karta pacjenta z ostrzeżeniami klinicznymi, aktywnym planem leczenia i osią czasu filtrowaną według wizyt, zabiegów, płatności i komunikacji](/screenshots/patient-timeline.png)

*Lata dokumentacji medycznej wewnątrz jednego programu. Data zmiany decyduje o tym, co będziesz mógł z nim zrobić, jeśli wydawca zniknie.*

Inaczej mówiąc: BSL daje ci depozyt kodu źródłowego, którego nie musiałeś wynegocjować. Jeśli dostawca zamknie działalność, wersja, którą uruchamiasz, i tak stanie się open source w wyznaczonym dniu, a od tego momentu może ją utrzymywać każdy kompetentny programista. Przy klasycznej licencji zamkniętej taki dzień nie istnieje.

## Jak przeczytać dowolną licencję BSL w pięć minut

Do pierwszego czytania nie potrzebujesz prawnika. Otwórz plik `LICENSE` w repozytorium i poszukaj tych pięciu rzeczy, w tej kolejności:

1. **Sprawdź wersję licencji.** Musi być napisane „Business Source License 1.1". Wersja 1.0 nie miała limitu czterech lat.
2. **Przeczytaj cały Additional Use Grant.** To jedyne zdanie, które decyduje, czy twoje rzeczywiste użycie jest bezpłatne. Jeśli go nie ma, tekst podstawowy przyznaje wyłącznie użytek nieprodukcyjny.
3. **Zobacz Change Date.** Może to być stała data albo formuła („cztery lata od publikacji"). Wszystko powyżej czterech lat wykracza poza to, na co pozwala wersja 1.1.
4. **Zobacz Change License.** Jeśli widnieje Apache 2.0, GPL albo MPL, wiesz dokładnie, co dostaniesz tego dnia, bo to standardowe licencje z publicznym tekstem.
5. **Znajdź Licensed Work.** Jeśli wymienia konkretne wersje, licencja dotyczy właśnie ich, a kolejne mogą wyjść na innych warunkach.

Jeśli wszystkie pięć pól jest wypełnionych i czytelnych, wiesz o tym programie więcej niż większość osób, które go instalują.

> **To nie jest porada prawna.** To lektura publicznego dokumentu. Przy podpisanej umowie, przy przetargu albo przy wątpliwości co do twojej konkretnej sytuacji odpowiedzi musi udzielić prawnik.

## Co to zmienia dla gabinetu stomatologicznego

Większość tych klauzul napisano z myślą o firmach programistycznych, a nie o gabinecie. W przełożeniu na to, co dotyczy ciebie:

- **Ograniczenie BSL prawie nigdy cię nie dotyczy.** Zabrania budowania konkurencyjnego SaaS-a. Gabinet, który używa programu do obsługi własnych pacjentów, nie mieści się w tym przypadku, o ile Additional Use Grant obejmuje takie użycie.
- **Możesz zainstalować go na własnym serwerze** i uruchomić bez pytania o zgodę i bez aktywacji, co jest największą praktyczną różnicą wobec programu licencjonowanego na stanowisko.
- **Twój informatyk może go naprawdę zbadać.** Może przeczytać, co jest zapisywane, gdzie, i co wychodzi na zewnątrz, bez podpisywania z kimkolwiek umowy o poufności.
- **Masz zapisane wyjście.** Data zmiany jest w pliku, a nie w obietnicy handlowca.

![Schemat instalacji na własnym serwerze: przeglądarka, Caddy na porcie 443, frontend Nuxt, API i baza danych PostgreSQL](/diagrams/install-stack.svg)

*Układ, na który pozwala tego rodzaju licencja: wszystko działa na twoim serwerze, bez aktywacji u producenta.*

## Licencja Dentalpina, pole po polu

Dentalpin jest publikowany na BSL 1.1, więc możesz zastosować do niego dokładnie pięć powyższych sprawdzeń. Jego plik `LICENSE` mówi dosłownie:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** „You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work".
- **Change Date:** cztery lata od publikacji licencjonowanego dzieła.
- **Change License:** Apache License, Version 2.0.

W często zadawanych pytaniach o produkcie podsumowujemy to tak: za darmo dla każdego gabinetu i każdego programisty, z jedynym ograniczeniem polegającym na tym, że nie wolno uruchomić go jako konkurencyjnego SaaS-a stomatologicznego, oraz z automatycznym przejściem na Apache 2.0 po czterech latach. Ile kosztuje i co zawiera, znajdziesz na [stronie z cennikiem](/pl/cennik/).

## Źródła

- [Business Source License 1.1, tekst licencji](https://mariadb.com/bsl11/), MariaDB. Dostęp 1 września 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Dostęp 1 września 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Dostęp 1 września 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Dostęp 1 września 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Dostęp 1 września 2026.
- Plik `LICENSE` w repozytorium Dentalpina. Dostęp 1 września 2026.
