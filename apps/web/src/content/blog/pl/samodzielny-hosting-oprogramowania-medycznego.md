---
title: "Samodzielny hosting oprogramowania medycznego: czego nikt ci nie mówi"
description: "Własny serwer nie kosztuje licencji, kosztuje utrzymania: przetestowanego odtworzenia, certyfikatu, dużej wersji PostgreSQL i osoby dostępnej w poniedziałek o ósmej."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [self-hosting, docker, postgresql, bezpieczenstwo, rodo]
---

Hosting oprogramowania medycznego na własnym serwerze nie jest darmowy: darmowa jest licencja. To, co bierzesz na siebie, to cztery zadania, które nigdy się nie kończą: kopia zapasowa, którą naprawdę raz odtworzyłeś, certyfikat, który odnawia się sam do dnia, w którym przestaje, aktualizacja PostgreSQL do nowej dużej wersji co kilka lat, oraz osoba dostępna w poniedziałek o ósmej rano. Jeśli te cztery zadania mają właściciela, własny serwer to dobra i tania decyzja. Jeśli nie mają, twój serwer jest dostawcą oprogramowania z jednym pracownikiem i bez dyżuru.

Poniżej jest to, czego nie ma w instrukcji instalacji, wraz ze źródłem technicznym albo prawnym każdego punktu.

## Instalacja to jeden dzień, utrzymanie to pięć lat

Instalacja stała się naprawdę prosta. Trzy pliki, jedno `docker compose up` i po kilku minutach działa aplikacja z własnym certyfikatem. Ta część nie jest już problemem i właśnie dlatego myli.

Problemem jest wszystko, co przychodzi potem, i nie ma daty końcowej: poprawki systemu, miejsce na dysku, ostrzeżenia, których nikt nie czyta, migracja bazy danych za trzy lata i noc, w której serwer nie wstaje.

> **Instalacja to zdarzenie, utrzymanie to stałe zobowiązanie.** Nikt nie porzuca serwera pierwszego dnia. Porzuca się go w czternastym miesiącu, kiedy osoba, która go stawiała, zmieniła pracę, a maile o błędach nadal idą na jej stary adres.

![Schemat instalacji na własnym serwerze: przeglądarka łączy się przez HTTPS z Caddy, które kieruje /api/* do backendu, a resztę do frontendu Nuxt; backend rozmawia z PostgreSQL](/diagrams/install-stack.svg)

*Cztery procesy i jedna baza danych. Każdy prostokąt na tym schemacie to coś, co ktoś musi aktualizować.*

## Czego prawo wymaga od ciebie niezależnie od tego, gdzie stoi serwer

Własny serwer nie dokłada nowych obowiązków prawnych. Zabiera tylko podmiot, który część z nich wykonywał do tej pory za ciebie.

Gabinet jest administratorem danych swoich pacjentów niezależnie od tego, czy serwer stoi w szafce za rejestracją, czy w cudzej serwerowni. Artykuł 32 RODO wymienia wśród środków technicznych i organizacyjnych dwa punkty, które czyta się jak listę zadań administratora systemu:

- **Artykuł 32 ust. 1 lit. c**: zdolność do szybkiego przywrócenia dostępności danych osobowych i dostępu do nich w razie incydentu fizycznego lub technicznego.
- **Artykuł 32 ust. 1 lit. d**: regularne testowanie, mierzenie i ocenianie skuteczności środków technicznych i organizacyjnych. Regularny test nie jest opcjonalną dobrą praktyką, jest w treści artykułu.

Do tego dochodzi artykuł 33 ust. 1: naruszenie ochrony danych zgłasza się organowi nadzorczemu bez zbędnej zwłoki, w miarę możliwości nie później niż w ciągu 72 godzin od stwierdzenia naruszenia.

> **Siedemdziesiąt dwie godziny liczą się od chwili, gdy wiesz, a nie od chwili, gdy rozumiesz.** Jeśli serwer jest twój, nikt do ciebie nie zadzwoni, żeby powiedzieć, że coś się stało. Ten alarm też musisz zbudować sam.

To nie jest porada prawna. Zastosowanie tych przepisów w twoim gabinecie warto potwierdzić z własnym prawnikiem albo z izbą lekarską.

## Danych nie ma w kontenerze

To najdroższe nieporozumienie pierwszych miesięcy. Dokumentacja Dockera mówi to wprost: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

W praktyce: kontenery możesz kasować i tworzyć od nowa dowolną liczbę razy, ale kopiować trzeba wolumeny. A typowa instalacja medyczna ma ich co najmniej dwa.

- **Baza danych**, z pacjentami, kalendarzem wizyt, dokumentacją medyczną, kosztorysami i rozliczeniami.
- **Wgrane pliki**, czyli zdjęcia RTG, fotografie kliniczne i podpisane PDF-y. Zwykle ważą znacznie więcej niż baza i zwykle to o nich się zapomina.

Zrzut samej bazy bez katalogu plików odtwarza gabinet bez ani jednego obrazu. Technicznie to kopia zapasowa, praktycznie połowa kopii.

**I nie kopiuje się tego na gorąco zwykłym `cp`.** Dokumentacja PostgreSQL nie zostawia wątpliwości co do kopiowania katalogu danych przy działającym serwerze: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". Przy działającym serwerze działa `pg_dump`, którego zrzuty są "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

Francuski organ nadzorczy streszcza podstawowe zasady w czterech punktach, które sprawdzają się wszędzie: robić kopie często, trzymać co najmniej jedną kopię w miejscu geograficznie oddalonym od miejsca pracy systemu, izolować co najmniej jedną kopię offline i odłączoną od sieci oraz regularnie testować zarówno integralność kopii, jak i możliwość ich odtworzenia.

Ten ostatni punkt przesądza o wszystkim i ma własny poradnik: [co zapisywać i jak często](/pl/blog/kopie-zapasowe-w-gabinecie-stomatologicznym/).

## Certyfikat odnawia się sam, dopóki ktoś nie zamknie portu 80

Certyfikaty Let's Encrypt "are valid for 90 days", a sam wystawca zaleca "renewing 90 day certificates every 60 days". Klient ACME robi to bez pytania, więc temat znika wszystkim z głowy.

Aż do awarii, a ta wygląda bardzo konkretnie. Wyzwanie HTTP-01 "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

Czyli: jeśli ktoś zamknie port 80 na zaporze, bo "i tak wszystko idzie po HTTPS", odnowienie przestaje działać po cichu. Strona chodzi bez zarzutu przez trzydzieści dni, a potem, w zwykły wtorek, przeglądarka w rejestracji pokazuje ostrzeżenie bezpieczeństwa na cały ekran.

1. **Zostaw port 80 otwarty**, choćby tylko przekierowywał na HTTPS, albo przejdź na wyzwanie DNS-01, które sprawdza rekord TXT pod `_acme-challenge.twoja-domena` i wymaga dostawcy DNS z API.
2. **Pilnuj daty ważności spoza serwera**, dowolnym zewnętrznym monitoringiem. Alarm, który mieszka na maszynie, która padła, nie ostrzeże nikogo.
3. **Sprawdź w 65. dniu**, że odnowienie faktycznie nastąpiło, a nie że zadanie się uruchomiło.
4. **Zapisz, kto dostaje powiadomienie**, i sprawdź, czy ten adres nadal istnieje, gdy ta osoba odejdzie.

## Aktualizacja, która naprawdę boli

Poprawki mniejsze to rutyna. PostgreSQL gwarantuje, że "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Przejście z 17.4 na 17.6 to restart kontenera.

Duża wersja to inna historia: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." Kontener PostgreSQL 17 nie wystartuje na katalogu danych zapisanym przez wersję 16. Jeśli obraz masz przypięty do `latest`, w dniu, w którym etykieta się przesunie, baza nie wstanie, a komunikat błędu o ósmej rano nie będzie oczywisty.

Projekt opisuje trzy drogi: zrzut i odtworzenie przez `pg_dumpall`, szybsze `pg_upgrade` albo replikację. Wybór jednej z nich to pół godziny czytania. Odkrywanie tego w trakcie awarii kosztuje cały dzień.

1. **Przypnij dużą wersję** w konfiguracji, nigdy `latest`, ani dla aplikacji, ani dla bazy.
2. **Sprawdzaj kalendarz wsparcia** swojej wersji raz w roku i zaplanuj skok, zanim skończą się poprawki bezpieczeństwa.
3. **Przeprowadź migrację na kopii**, na innej maszynie, i zmierz czas.
4. **Zachowaj poprzedni zrzut**, dopóki gabinet nie przepracuje pełnego tygodnia na nowej wersji.

## Kto odbiera telefon w poniedziałek o ósmej

To jest pytanie, które rozstrzyga, i nie jest techniczne.

Gabinet stomatologiczny otwiera się o ósmej albo dziewiątej z kalendarzem wypełnionym od pierwszego terminu. Jeśli serwer nie wstanie, nie ma dokumentacji medycznej, nie ma zgód i nie da się sprawdzić, kto dzisiaj przyjdzie. Istotne pytanie nie brzmi, czy umiesz to naprawić, tylko czy ta osoba jest w tym momencie dostępna, z laptopem.

![Ekran startowy z dzisiejszymi wizytami, informacją, kto jest w gabinecie, zaległymi płatnościami i ostatnimi pacjentami](/screenshots/home.png)

*To jest ekran, który musi stać o ósmej. Cała reszta może poczekać do południa.*

Uczciwe odpowiedzi, które działają: informatyk gabinetu z umową na godziny i numerem telefonu, sam stomatolog, jeśli go to interesuje i bierze to na siebie, albo dostawca usługi zarządzanej. Odpowiedzi, które nie działają: siostrzeniec i "zajmę się tym później".

## Własny serwer czy nie: tabela

| | Własny serwer | Usługa zarządzana |
|---|---|---|
| Licencja | ✓ Bez abonamentu, jeśli program jest wolny | ✗ Abonament tak długo, jak go używasz |
| Gdzie są dane | ✓ Na twojej maszynie | ~ Tam, gdzie mówi umowa |
| Poprawki systemu | ✗ Wgrywasz je sam | ✓ Wgrywa je dostawca |
| Kopie zapasowe | ✗ Budujesz i testujesz sam | ~ Robi je dostawca, testujesz i tak |
| Poniedziałek, 8:00 | ✗ Zależy, kto jest dostępny | ✓ Zależy od jego zobowiązania serwisowego |
| Duża wersja PostgreSQL | ✗ Planujesz ją sam | ✓ Planuje ją dostawca |
| Jeśli dostawca zamknie firmę | ✓ Działa dalej | ✗ Zależy od eksportu, który dostaniesz |
| Rzeczywisty koszt | ~ Tani serwer, drogie godziny | ~ Przewidywalny abonament, cudze godziny |

Prawa kolumna nie zwalnia cię z niczego w sensie prawnym: nadal jesteś administratorem danych i nadal musisz umieć wykazać, że potrafisz odtworzyć dane. To, co kupujesz, to praca wykonana przez kogoś innego i numer, pod który można zadzwonić, gdy jej nie wykonał.

## Trzy pytania przed decyzją

1. **Kto jest właścicielem serwera, z imienia i nazwiska?** Nie stanowisko, tylko osoba. Jeśli odpowiedź zajmuje więcej niż pięć sekund, właściciela nie ma.
2. **Kiedy ktoś ostatnio naprawdę wykonał pełne odtworzenie?** Jeśli odpowiedź brzmi "nigdy", nie masz kopii zapasowych, masz duże pliki.
3. **Co się stanie w dniu, w którym ta osoba odejdzie?** Spisz procedurę teraz, trzymaj ją poza systemem, który trzeba odtworzyć, i daj ją przeczytać komuś jeszcze.

Jeśli wszystkie trzy mają odpowiedź, własny serwer jest znakomitą decyzją: pełna kontrola nad danymi, brak abonamentu i brak zależności od tego, czy jakaś firma nadal istnieje. Jeśli któraś zostaje w powietrzu, najpierw rozwiąż ją, a decyduj potem.

W Dentalpinie instalacja na własnym serwerze to cztery kontenery i dwa wolumeny, baza danych i wgrane pliki, więc kopia zapasowa jest standardowym zrzutem PostgreSQL plus katalogiem i automatyzuje się narzędziami, których już używasz. Warunki wersji na własnym serwerze i wersji hostowanej są w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), artykuły 32 i 33. Tekst na [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) oraz w [rozdziale 4 opublikowanym przez CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Dostęp 19 sierpnia 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Dostęp 19 sierpnia 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Dostęp 19 sierpnia 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Dostęp 19 sierpnia 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Dostęp 19 sierpnia 2026.
- Let's Encrypt, *FAQ* i *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) oraz [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Dostęp 19 sierpnia 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Dostęp 19 sierpnia 2026.
