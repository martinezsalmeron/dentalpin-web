---
title: "Instalacja Dentalpin na własnym serwerze w trzy minuty"
description: "Trzy pliki, trzy wartości w .env i jedno polecenie docker compose. Bez klonowania repozytorium, bez kompilowania obrazów i bez konfigurowania certyfikatu."
pubDate: 2026-09-25
translationKey: instalar-dentalpin-en-tres-minutos
tags: [self-hosting, docker, instalacja, gabinet-stomatologiczny]
---

Postawienie Dentalpin na własnym serwerze to dziś pobranie trzech plików, uzupełnienie trzech wartości w `.env` i jedno polecenie `docker compose`. Obrazy są gotowe i publikowane przy każdym wydaniu, więc twój serwer tylko je pobiera, zamiast kompilować cokolwiek u siebie.

Wcześniej instalacja oznaczała sklonowanie repozytorium i zbudowanie dwóch obrazów na miejscu. Kompilacja frontendu w Nuxt potrzebuje 4 GB pamięci, co przekreśla większość tanich VPS-ów, na jakich stoi typowy gabinet stomatologiczny.

| | Przedtem | Teraz |
|---|---|---|
| Kroki | Sklonuj repozytorium, zbuduj 2 obrazy | ✓ Pobierz 3 pliki |
| Czas | ~ 30 minut | ✓ 3 minuty |
| Potrzebna pamięć | ✗ 4 GB na kompilację Nuxt | ✓ Tyle, ile zużywa działająca aplikacja |
| Certyfikat TLS | ✗ Konfigurujesz sam | ✓ Wystawiany przy pierwszym starcie |
| CORS | ✗ Konfiguracja ręczna | ✓ Nie istnieje, jedno źródło |

## Te trzy minuty

```bash
curl -O https://raw.githubusercontent.com/dentalpin/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/dentalpin/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/dentalpin/dentalpin/main/.env.prod.example

# uzupełnij w .env: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Skieruj domenę na tę maszynę i ustaw `PUBLIC_URL=https://twoja-domena`. Certyfikat zostanie wystawiony sam przy pierwszym uruchomieniu, więc nie ma czego odnawiać ani żadnego nginxa do skonfigurowania.

Dwie z trzech wartości muszą być losowe i nie wolno ich zostawić pustych. Plik przykładowy podaje polecenie, którym je wygenerujesz:

1. **`PUBLIC_URL`** to publiczny adres instalacji. Na próbę lokalną zostaw `http://localhost`, na produkcję wpisz adres `https://` z domeną, która już wskazuje na ten serwer.
2. **`POSTGRES_PASSWORD`** to hasło do bazy. Kontener bazy nie wystartuje, jeśli zostawisz je puste.
3. **`SECRET_KEY`** generujesz przez `openssl rand -hex 32`, tak samo jak `BUDGET_PUBLIC_SECRET_KEY` obok niego.

> **Chcesz najpierw zobaczyć, zanim zdecydujesz?** Ustaw `SEED_ON_STARTUP=1`, a system wystartuje z gabinetem demonstracyjnym: pacjentami, kalendarzem, kosztorysami i fakturami, na których możesz spokojnie poklikać. Logujesz się jako `admin@demo.clinic` z hasłem `demo1234`. Przy prawdziwym gabinecie zostaw `0`.

![Ekran główny Dentalpin z gabinetem demonstracyjnym: dzisiejsze wizyty, kto jest w gabinecie, zaległe płatności i ostatni pacjenci](/screenshots/home.png)

*Tak wygląda pierwsze wejście przy `SEED_ON_STARTUP=1`, bez zakładania ani jednego pacjenta.*

## Dlaczego z przodu stoi Caddy

Wcześniejsze wersje wystawiały backend i frontend na osobnych portach. Osoba instalująca musiała sama rozwiązać reverse proxy, TLS i listę dozwolonych źródeł dla CORS, czyli trzy okazje do pomyłki przed zobaczeniem pierwszego ekranu.

Teraz jeden kontener Caddy serwuje całość z jednego źródła: `/api/*` i `/health*` trafiają do backendu, reszta do interfejsu. Przeglądarka nigdy nie rozmawia z dwoma adresami, więc **CORS przestaje być problemem do rozwiązania**. O certyfikat z Let's Encrypt Caddy prosi sam.

![Schemat instalacji: przeglądarka wchodzi przez HTTPS do Caddy, który kieruje /api/* do backendu, a pozostały ruch do frontendu Nuxt; backend rozmawia z PostgreSQL](/diagrams/install-stack.svg)

*Cztery kontenery i jeden otwarty port. Do internetu wystawiony jest wyłącznie Caddy.*

## Jeden obraz na wszystkie instalacje

Obraz frontendu jest budowany z domyślnym adresem API. Normalnie wymuszałoby to budowanie osobnego obrazu na każde wdrożenie, czyli dokładnie to, czego chcieliśmy uniknąć.

Nie jest to potrzebne, bo Nuxt czyta ten adres przez `runtimeConfig`. Zmienna `NUXT_PUBLIC_API_BASE_URL` nadpisuje go przy starcie kontenera, a to, co zostało skompilowane, jest tylko wartością domyślną.

Jeden obraz, dowolna domena. Ten sam obraz `ghcr.io/dentalpin/dentalpin-backend` i `ghcr.io/dentalpin/dentalpin-frontend` pobiera gabinet w Krakowie i gabinet w Lizbonie.

## Interfejs po polsku, komunikacja z pacjentem jeszcze nie

To jest różnica, którą warto znać przed instalacją, a nie po niej.

- **Interfejs dla zespołu jest po polsku.** Polski należy do dziesięciu języków, w jakich wydawany jest interfejs, i obejmuje rdzeń aplikacji oraz każdy moduł. Test parzystości kluczy w CI pilnuje, żeby tłumaczenia nie rozjechały się po cichu, a polskie liczebniki używają pełnych trzech form mnogich, więc nie zobaczysz „3 wizyt” tam, gdzie ma być „3 wizyty”.
- **Wiadomości do pacjentów jeszcze nie.** Szablony e-mail i PDF renderują się obecnie w pięciu językach: hiszpańskim, angielskim, francuskim, portugalskim i tamilskim. Polskiego wśród nich nie ma. Język komunikacji z pacjentem każdy gabinet wybiera niezależnie od języka interfejsu, więc dziś oznacza to wybór jednego z tych pięciu.

> **Jeśli wysyłasz pacjentom potwierdzenia i faktury PDF po polsku, to jest punkt, w którym instalacja nie wystarczy.** Dopisanie języka to wkład czysto tłumaczeniowy, bez pisania kodu, ale zanim ktoś go zrobi, warto policzyć, ile korespondencji twój gabinet wysyła automatycznie.

## Aktualizacja

```bash
# w .env
DENTALPIN_VERSION=2.4.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Migracje bazy wykonują się same, zanim API zacznie przyjmować żądania. Tagi wydań nie mają przedrostka `v`.

> **Przypnij wersję, zamiast zostawiać `latest`.** Inaczej aktualizacja przyjdzie do ciebie niespodziewanie w dniu, w którym restartujesz serwer z zupełnie innego powodu. I **zrób kopię zapasową przed aktualizacją**: dane siedzą w dwóch wolumenach Dockera, `pgdata` z bazą i `storage_data` z wgranymi plikami. W obu, nie tylko w pierwszym.

## Lekcja z pierwszej godziny

Pierwsza wersja tych obrazów wyszła wyłącznie dla `amd64`. Rozumowanie wydawało się sensowne: każdy VPS, jaki dziś wynajmujesz, jest x86, a budowanie także dla ARM kosztuje czas w CI.

Wystarczyło dwadzieścia minut. Tyle zajęło wykonanie własnej instrukcji na MacBooku z Apple Silicon:

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

Pierwsze polecenie instalacji. Dokładnie to, co ta praca miała naprawić.

Błąd nie był techniczny, tylko decyzyjny. Myśleliśmy o serwerze produkcyjnym i zapomnieliśmy, że prawie każdy testuje nowe rzeczy najpierw na własnym laptopie.

Dziś każda architektura budowana jest na własnej maszynie, a następnie obie trafiają do jednej listy manifestów na obraz. Pipeline wydania sprawdza, czy w manifeście są `amd64` i `arm64`, i przerywa wydanie, jeśli którejkolwiek brakuje.

Sama instalacja nic nie kosztuje, bo licencja jest darmowa; co dokładnie obejmuje, opisuje [cennik](/pl/cennik/). Kosztuje utrzymanie serwera, a to osobna rozmowa.

Instalacja przebiegła inaczej, niż opisano tutaj? Napisz na [kanale Telegram](https://t.me/dentalpin), gdzie prowadzimy wsparcie i pomoc przy instalacji. To, żeby instalacja działała za pierwszym razem, jest teraz dla nas najważniejsze.
