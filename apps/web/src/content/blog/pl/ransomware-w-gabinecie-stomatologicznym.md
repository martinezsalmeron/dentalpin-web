---
title: "Ransomware w gabinecie stomatologicznym: plan małego gabinetu"
description: "Co zrobić w pierwszej godzinie ataku ransomware na gabinet stomatologiczny, która kopia zapasowa przetrwa szyfrowanie i czego RODO wymaga w ciągu 72 godzin."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [ransomware, bezpieczenstwo, rodo, kopie-zapasowe, zarzadzanie-gabinetem]
---

Plan małego gabinetu na wypadek ransomware mieści się na jednej kartce: kopia zapasowa odłączona od sieci, którą ktoś już naprawdę odtworzył, lista osób do kontaktu w pierwszej godzinie, aktualne systemy z drugim składnikiem uwierzytelniania na każdym zdalnym dostępie oraz świadomość, że naruszenie ochrony danych uruchamia termin 72 godzin. Żadnej z tych rzeczy nie da się zaimprowizować rano, kiedy kalendarz wizyt się nie otwiera.

Poniżej jest ta kartka, po kolei: co faktycznie staje, co robisz w pierwszych sześćdziesięciu minutach, czego wymaga prawo i które zabezpieczenia realnie zmieniają prawdopodobieństwo.

## Staje gabinet, a nie komputer

Ransomware szyfruje dane i żąda okupu. W gabinecie stomatologicznym oznacza to, że kalendarz wizyt się nie otwiera, dokumentacji medycznej nie ma, zdjęcia RTG się nie wyświetlają, a rozliczenia stoją. Wszystko naraz i zwykle wcześnie rano.

Problem kliniczny pojawia się przed informatycznym. Bez alertów medycznych z karty pacjenta nie wiesz, na który środek znieczulający jest uczulony, i właśnie dlatego gabinet bez dostępu do własnych danych nie może po prostu przyjmować dalej.

ENISA, europejska agencja do spraw cyberbezpieczeństwa, opublikowała w lipcu 2023 roku pierwszą analizę zagrożeń dla ochrony zdrowia. Ransomware odpowiada tam za 54 procent zagrożeń w sektorze, dane pacjentów są najczęściej atakowanym zasobem z wynikiem 30 procent, a tylko 27 procent badanych podmiotów miało wydzielony program obrony przed ransomware.

> **Liczba, która uzasadnia cały ten wysiłek, to liczba pacjentów zapisanych na jutro.** Gabinet z trzema fotelami i czterdziestoma wizytami dziennie nie rozmawia o informatyce, tylko decyduje, czy otworzy w przyszłym tygodniu. Wszystko poniżej jest przy tym tanie.

![Kalendarz wizyt gabinetu w widoku dziennym z wizytami rozpisanymi na fotele](/screenshots/schedule-day.png)

*To ten ekran przestaje się otwierać i to jego brak ktoś zauważa pierwszy.*

## Pierwsza godzina, po kolei

Kolejność ma znaczenie, bo decyzje z pierwszych minut przesądzają, czy zostaną ślady i czy kopia zapasowa ocaleje.

1. **Odłącz zaatakowane stanowisko od sieci**, kabel i Wi-Fi. To zatrzymuje szyfrowanie w drodze do serwera i pozostałych stanowisk.
2. **Odłącz również dysk albo NAS z kopiami.** Jeśli był podpięty, jest celem, a nie schronieniem.
3. **Jeszcze niczego nie kasuj.** Najpierw zrób obraz zaatakowanego dysku: to on pozwala później spróbować odszyfrowania i jest jednocześnie dowodem.
4. **Zapisz godzinę wykrycia.** Termin zgłoszenia biegnie od stwierdzenia naruszenia, więc ta godzina jest informacją o znaczeniu prawnym.
5. **Dzwoń.** Do informatyka lub dostawcy oprogramowania, a incydent zgłoś do CERT Polska, zespołu reagowania działającego w NASK.
6. **Ustal, co mówi rejestracja.** Pacjenci dzwoniący w sprawie wizyt zapytają, a jedno uzgodnione zdanie jest lepsze niż pięć improwizowanych.
7. **Złóż zawiadomienie o przestępstwie.** Atak jest przestępstwem, a zawiadomienie staje się częścią dokumentacji, którą trzeba będzie umieć pokazać.

## Siedemdziesiąt dwie godziny, które zaczynają biec

Artykuł 33 RODO nakazuje administratorowi zgłosić naruszenie ochrony danych organowi nadzorczemu "bez zbędnej zwłoki", w miarę możliwości "nie później niż w terminie 72 godzin po stwierdzeniu naruszenia", chyba że jest mało prawdopodobne, by naruszenie skutkowało ryzykiem naruszenia praw lub wolności osób fizycznych. W Polsce organem tym jest Prezes UODO, a zgłoszenia składa się elektronicznie.

Zaszyfrowana dokumentacja medyczna rzadko jest przypadkiem o niskim ryzyku. Dane o zdrowiu należą do szczególnej kategorii, a większość dzisiejszych grup ransomware najpierw wykrada dane, a dopiero potem szyfruje, więc ocenie podlega nie tylko utrata dostępności.

> **Udokumentuj naruszenie, nawet jeśli go nie zgłaszasz.** Artykuł 33 ustęp 5 RODO wymaga dokumentowania wszelkich naruszeń wraz z ich skutkami i podjętymi działaniami zaradczymi. Krótki wpis z datą, zakresem i uzasadnieniem decyzji o niezgłaszaniu to dokładnie to, o co pyta kontrola.

| Co się wydarzyło | Zgłoszenie do UODO? | Zawiadomienie pacjentów? |
|---|---|---|
| Samo szyfrowanie, odtworzenie w kilka godzin z czystej kopii | ~ Ocenić i udokumentować uzasadnienie | ✗ Zwykle nie, przy braku wysokiego ryzyka |
| Zaszyfrowana dokumentacja i brak używalnej kopii | ✓ Tak | ✓ Prawdopodobnie tak |
| Napastnicy publikują dane albo grożą publikacją | ✓ Tak | ✓ Tak |
| Zaszyfrowany laptop bez danych pacjentów | ✗ To nie jest naruszenie ochrony danych | ✗ Nie |

To nie jest porada prawna, a każdy przypadek ocenia się osobno. Praktyczna zasada organów nadzorczych jest wszędzie ta sama: w razie wątpliwości się zgłasza.

## Kopia zapasowa, która przetrwa szyfrowanie

Ransomware szyfruje wszystko, do czego zainfekowany komputer może zapisywać. Mieści się w tym dysk USB podpięty od dwóch lat i katalog na NAS zamapowany jako dysk sieciowy.

Rządowy poradnik na gov.pl formułuje to wprost: "Upewnij się, że kopia zapasowa jest przechowywana poza Twoją siecią" i że nośniki kopii nie są do niej podłączone na stałe. Ten sam materiał zaleca włączenie automatycznych aktualizacji, uwierzytelnianie wieloskładnikowe, regularny przegląd i odbieranie nieużywanych uprawnień oraz wyłączenie makr, a na koniec: "opracuj procedurę reagowania na incydenty".

| Gdzie leży kopia | Przetrwa ransomware | Praca w miesiącu |
|---|---|---|
| Katalog na tym samym serwerze | ✗ Zostaje zaszyfrowany razem z resztą | ✓ Żadna |
| Dysk USB podłączony na stałe | ✗ Zostaje zaszyfrowany razem z resztą | ✓ Żadna |
| Dysk podłączany, kopiowany i odłączany | ✓ Tak, jeśli był odłączony w czasie ataku | ~ Ktoś musi pamiętać |
| Kopia w chmurze z wersjonowaniem lub niezmiennością | ✓ Tak, jeśli napastnik nie ma tych poświadczeń | ✓ Żadna po automatyzacji |
| Folder synchronizowany (Drive, OneDrive, Dropbox) | ✗ Nadpisuje kopie już zaszyfrowanymi plikami | ✓ Żadna |

Potem przychodzi krok, który zamienia kopię w plan: raz w roku odtworzyć ją na innym komputerze i zmierzyć czas. Ta liczba to twój realny czas powrotu do pracy, a artykuł 32 ustęp 1 litera d RODO wymaga dokładnie tego, regularnego testowania i oceniania skuteczności zabezpieczeń.

![Karta pacjenta z diagramem zębowym, alertami klinicznymi i aktywnym planem leczenia](/screenshots/dental-chart.png)

*Alerty medyczne w karcie to ta część, której nikt nie odtworzy z pamięci w jeden poranek.*

## Co naprawdę obniża ryzyko

Żadne pojedyncze zabezpieczenie nie wyklucza ransomware, ale kilka zamyka typowe drogi wejścia do małego gabinetu.

- **Aktualizuj, gdy tylko wyjdzie poprawka**, w pierwszej kolejności to, co widzi internet: router, zapora, urządzenie VPN.
- **Drugi składnik na każdym zdalnym dostępie.** Jeśli ktoś pracuje z domu, te drzwi potrzebują MFA, a nie powinno ono być zainstalowane na tym samym urządzeniu, z którego zarządza się kopiami.
- **Konta z dokładnie potrzebnymi uprawnieniami.** Rejestracja nie musi być administratorem serwera, a ransomware dziedziczy dokładnie te prawa, które miała osoba, która go otworzyła.
- **Wyłączone makra** w dokumentach biurowych, wciąż zwyczajna droga wejścia przez pocztę.
- **Żadnych współdzielonych haseł.** Jedno konto na osobę to nie biurokracja, tylko jedyny sposób, żeby później ustalić, którędy weszli.
- **Pulpit zdalny zamknięty od strony internetu.** Jeśli dostęp z zewnątrz jest potrzebny, prowadzi przez VPN z MFA, a nie przez otwarty port.

## Płacić czy nie płacić

Rządowy poradnik odpowiada jednym zdaniem: "Nie zaleca się płacenia okupu", bo nic nie gwarantuje odzyskania dostępu do danych. Brytyjskie NCSC dodaje pozostałe powody: komputer nadal jest zainfekowany, a pieniądze trafiają do grup przestępczych.

> **Zapłata nie zamyka sprawy.** Nawet jeśli pliki wrócą, naruszenie miało miejsce, termin z artykułu 33 i tak biegł, a udokumentowanie go oraz ocena zawiadomienia pacjentów nadal należą do gabinetu.

Zanim uznasz dane za stracone, sprawdź No More Ransom, wspierany przez Europol projekt publikujący darmowe narzędzia deszyfrujące dla złamanych już rodzin ransomware. Nie obejmuje wszystkiego, a sprawdzenie zajmuje pięć minut.

## Kartka, którą trzeba napisać dzisiaj

Napisz ją, wydrukuj i trzymaj kopię poza systemem, który trzeba by odtwarzać. Plan, który istnieje tylko na zaszyfrowanym serwerze, nie jest planem.

1. **Do kogo się dzwoni**, z nazwiskami i numerami: informatyk lub dostawca, kierownik gabinetu, CERT Polska, ubezpieczyciel, jeśli masz polisę cyber.
2. **Gdzie są kopie**, jakimi poświadczeniami się do nich wchodzi i kto je ma poza informatykiem.
3. **Jak się odtwarza**, krok po kroku, spisane przez kogoś, kto zrobił to co najmniej raz.
4. **Co rejestracja mówi dzwoniącemu pacjentowi**, w dwóch uzgodnionych zdaniach.
5. **Kto decyduje o zgłoszeniu** do UODO i z kim to konsultuje, prawnikiem albo inspektorem ochrony danych.
6. **Data ostatniego testu odtworzenia** i ile trwał.

Dzięki temu ransomware przestaje być kryzysem bez horyzontu, a staje się bardzo złym dniem o znanym zakończeniu.

W Dentalpin kopia to zwykły zrzut bazy PostgreSQL plus katalog z załącznikami, więc zapiszesz ją tam, gdzie serwer gabinetu nie ma kontroli, i odtworzysz bez czekania na kogokolwiek. Warunki wersji hostowanej i instalowanej na własnym serwerze są w [cenniku](/pl/cennik/).

## Źródła

- Rozporządzenie (UE) 2016/679 (RODO), artykuły 32, 33 i 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Dostęp 27 sierpnia 2026 r.
- UODO, *Zgłaszanie naruszeń*. [uodo.gov.pl](https://uodo.gov.pl/pl/525/2584). Dostęp 27 sierpnia 2026 r.
- Gov.pl, *Łagodzenie skutków ataków szkodliwego oprogramowania*. [gov.pl](https://www.gov.pl/web/baza-wiedzy/lagodzenie-skutkow-atakow-szkodliwego-oprogramowania). Dostęp 27 sierpnia 2026 r.
- CERT Polska, *Poradnik ransomware*. [cert.pl](https://cert.pl/uploads/docs/CERT_Polska_Poradnik_ransomware.pdf). Dostęp 27 sierpnia 2026 r.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Dostęp 27 sierpnia 2026 r.
- ENISA, *Health Threat Landscape* (5 lipca 2023 r.). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Dostęp 27 sierpnia 2026 r.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Dostęp 27 sierpnia 2026 r.

To nie jest porada prawna. Ocena ryzyka konkretnego naruszenia i decyzja o jego zgłoszeniu zależą od sytuacji i warto je potwierdzić z prawnikiem albo z inspektorem ochrony danych.
