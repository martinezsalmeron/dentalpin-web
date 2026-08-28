---
title: "SMS, WhatsApp czy email: ile naprawdę kosztuje przypomnienie o wizycie"
description: "Polskie znaki diakrytyczne podwajają koszt SMS-a, a email jest 285 razy tańszy. Ceny publikowane przez dostawców i to, co faktycznie dociera do pacjenta."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [przypomnienia, sms, whatsapp, email, koszty, kalendarz-wizyt]
---

Przypomnienie wysłane emailem kosztuje 0,00016 dolara, przez WhatsAppa mniej niż grosz, a SMS na polski numer komórkowy kosztuje w publicznym cenniku Twilio 0,0457 dolara, czyli około 285 razy tyle co email. To jest krótka odpowiedź. O wysokości rachunku decyduje jednak nie wybór kanału, tylko liczba wiadomości na jedną wizytę i, w polskim gabinecie przede wszystkim, obecność w treści polskich znaków.

Wszystkie ceny poniżej pochodzą ze stron cenowych poszczególnych dostawców, sprawdzonych 28 sierpnia 2026 roku. Żadna nie jest szacunkiem ani nie pochodzi z porównywarki.

> **Twilio publikuje ceny w dolarach, nie w złotych.** Podajemy je tak, jak je publikuje, bo przeliczenie po dzisiejszym kursie dałoby liczbę, której jutro nie da się już zweryfikować. Twój dostawca wystawi fakturę w złotych i doliczy własną marżę.

## Ile kosztuje jedna wiadomość, kanał po kanale

Trzy różne sposoby naliczania opłat, i w tym tkwi połowa problemu.

| Kanał | Cena za wiadomość | Jak jest naliczana | Odbiera odpowiedzi? |
|---|---|---|---|
| Email (Amazon SES, plan Essentials) | 0,16 $ za każde 1.000 wysyłek | Za wysłany email, niezależnie od doręczenia | ✓ Tak |
| WhatsApp (Twilio plus stawka Meta) | 0,005 $ Twilio, plus stawka Meta | Dopiero przy doręczeniu szablonu | ✓ Tak |
| SMS na numer polski (Twilio) | 0,0457 $ | Za segment, nie za wiadomość | ~ Tylko przy wysyłce z numeru |

Prawa kolumna to ta, w którą prawie nikt nie patrzy przed podpisaniem umowy, i to ona rozbija scenariusz "odpisz TAK, aby potwierdzić". Wracamy do niej niżej.

SMS jest jedynym kanałem, którego cena zależy od kraju odbiorcy. Polska jest w tym zestawieniu najtańsza:

| Kierunek | Cena za segment |
|---|---|
| Polska | 0,0457 $ |
| Portugalia | 0,0501 $ |
| Wielka Brytania | 0,056 $ |
| Francja | 0,0798 $ |
| Hiszpania | 0,0875 $ |
| Włochy | 0,0927 $ |
| Niemcy | 0,112 $ |

Ta sama wiadomość do Niemiec kosztuje dwa i pół raza więcej niż do Polski. Jeśli masz pacjentów z zagranicznym numerem, już za to płacisz.

## Polskie znaki podwajają rachunek za SMS

To jest najdroższy szczegół w całym artykule i dotyczy wyłącznie języków takich jak polski.

SMS nie jest rozliczany za wiadomość, tylko za segment. W kodowaniu GSM-7 w jednym segmencie mieści się 160 znaków, a 153 na segment, gdy wiadomość dzieli się na kilka części, bo siedem znaków zabiera nagłówek, który je łączy.

Problem w tym, że zestaw GSM-7 zawiera 128 znaków i **nie ma wśród nich ą, ć, ę, ł, ń, ó, ś, ź ani ż**. Są w nim é, ñ, ü i ç, ale żaden ze znaków, których potrzebuje polskie zdanie. Wystarczy jedna litera spoza zestawu, żeby cała wiadomość przeszła na kodowanie UCS-2, a limit spadł do 70 znaków, czyli 67 na segment w wiadomości dzielonej.

> **"Dziękujemy" kosztuje więcej niż "Dziekujemy".** Praktycznie każde naturalne polskie zdanie zawiera znak diakrytyczny, więc typowe przypomnienie na 120 znaków to nie jeden segment, tylko dwa. Przy 800 przypomnieniach miesięcznie różnica wynosi 73,12 $ zamiast 36,56 $.

Wnioski są trzy, i żaden nie polega na skracaniu polszczyzny:

1. **Zostaw polskie znaki i policz segmenty realnie**, przyjmując 67 znaków na segment, a nie 153. Wiadomość na 140 znaków to trzy segmenty, nie jeden.
2. **Zejdź poniżej 70 znaków**, jeśli chcesz zmieścić się w jednym segmencie z diakrytykami. "Gabinet X: wizyta 12.03 o 10:00. Odwołanie: 123 456 789" mieści się spokojnie.
3. **Nie usuwaj ogonków, żeby oszczędzić.** Wiadomość bez polskich znaków wygląda jak spam i to jest droższe niż różnica w cenie segmentu.

Twilio wymienia jeszcze trzy inne przyczyny przejścia na UCS-2: emoji, alfabety niełacińskie oraz typograficzne cudzysłowy i apostrofy. Ta ostatnia jest podstępna, bo tekst napisany w Wordzie i wklejony do szablonu nosi je niezauważalnie.

Twilio nalicza dodatkowo 0,001 $ za każdą wiadomość zakończoną statusem nieudanym, więc nieaktualna baza numerów też ma swoją cenę, choć niewielką.

![Kalendarz wizyt na jeden dzień z wizytami każdego lekarza, godzinami i statusem](/screenshots/schedule-day.png)

*Jeden dzień w kalendarzu wizyt. Każda wizyta na tym ekranie to co najmniej jedna wiadomość miesięcznie na fakturze.*

## Na WhatsAppie cena zależy od tego, czy pacjent odpisze

Meta zmieniła model 1 lipca 2025 roku i od tego czasu nalicza opłatę za wiadomość, a nie za 24-godzinną konwersację. Opłata pojawia się przy doręczeniu szablonu, nie przy wysyłce.

Szablony dzielą się na marketingowe, użytkowe i uwierzytelniające, a przypomnienie o wizycie jest użytkowe. Cenę trudno przewidzieć dlatego, że sporo rzeczy Meta zostawia za darmo:

- **Wszystko w otwartym oknie obsługi klienta.** Wiadomości spoza szablonu i szablony użytkowe nie są naliczane, dopóki to okno jest otwarte, a otwiera je pacjent, pisząc do ciebie.
- **Okna bezpłatnego wejścia trwają 72 godziny** i nic wysłanego w nich nie jest płatne, łącznie z szablonami. Otwiera je reklama typu kliknij, aby przejść do WhatsAppa, albo przycisk wezwania do działania na stronie.
- **Progi wolumenowe obniżają stawkę** użytkową i uwierzytelniającą w zależności od miesięcznej liczby wiadomości. Są ustalane osobno dla każdego rynku i kategorii, sumują się na poziomie całego portfela firmowego i zerują co miesiąc.

Praktyczny wniosek jest wbrew intuicji: przypomnienie, które zachęca do odpowiedzi, wychodzi taniej niż milczące, bo odpowiedź pacjenta otwiera okno, a kolejna wiadomość w tej rozmowie jest bezpłatna.

Meta publikuje stawki dla każdego rynku i waluty w plikach do pobrania, z kwotami obowiązującymi od 1 lipca 2026 roku, kiedy Polska, Hiszpania, Włochy i Wielka Brytania przeszły ze stawki regionalnej na własną. Na to nakłada się marża dostawcy: Twilio nalicza 0,005 $ za wiadomość, tę samą kwotę dla wszystkich rynków, a stawkę Meta przenosi dalej.

**Limity wysyłki prawie na pewno cię nie dotyczą.** WhatsApp stopniuje, do ilu różnych numerów można napisać w ruchomej dobie poza oknem obsługi: 250, potem 2.000, potem 10.000, 100.000 i bez limitu. Gabinet z czterdziestoma wizytami dziennie pisze do czterdziestu numerów, więc pierwszy próg w zupełności wystarcza. Awans jest automatyczny, gdy jakość jest dobra i w ostatnich siedmiu dniach wykorzystano co najmniej połowę limitu, i wchodzi w życie w ciągu sześciu godzin.

## Najtańszy kanał jest też tym, który najgorzej dociera

Przy 0,16 $ za tysiąc email nie ma konkurencji: jest około stu razy tańszy od czegokolwiek innego. Haczyk polega na tym, że płacisz za wysyłkę, a doręczenie nie wchodzi w cenę.

Gmail i Yahoo zaostrzyły wymagania w lutym 2024 roku i to one są dziś prawdziwym filtrem. Warto oddzielić to, co dotyczy wszystkich, od tego, co dotyczy tylko dużych nadawców, bo większość artykułów na ten temat miesza obie rzeczy.

| Wymóg | Kogo dotyczy | Czego wymaga |
|---|---|---|
| SPF albo DKIM | ✓ Każdego nadawcy | Co najmniej jednego z dwóch, zawsze |
| SPF, DKIM i DMARC | ~ Dopiero powyżej 5.000 dziennie do Gmaila | Wszystkich trzech, DMARC choćby w `p=none` |
| Wypisanie jednym kliknięciem | ~ Dopiero powyżej 5.000 dziennie | Nagłówek `List-Unsubscribe` z jednym kliknięciem |
| Wskaźnik spamu | ✓ Każdego nadawcy | Poniżej 0,3 % w Postmaster Tools |

> **Próg 5.000 wiadomości dziennie nie jest twój i nie na nim się przewrócisz.** Żaden gabinet się do niego nie zbliża. Od pierwszego maila obowiązuje natomiast uwierzytelnienie domeny i wskaźnik skarg, i to właśnie tam znika przypomnienie wysłane z darmowej skrzynki bez skonfigurowanego SPF i DKIM.

Google zaleca dodatkowo utrzymanie skarg poniżej 0,10 % i nieprzekraczanie nigdy 0,30 %. Yahoo wymaga tego samego pułapu 0,3 % i obsłużenia wypisania w ciągu dwóch dni. To niskie progi: przy 800 mailach miesięcznie trzech pacjentów klikających "spam" daje już 0,375 %.

## Ładny nadawca to ten, który nie odbierze odpowiedzi

Nadawca alfanumeryczny to ten "GABINET", który wyświetla się zamiast numeru. Twilio udostępnia go bez opłat w 150 krajach, a jego ograniczenie decyduje o kształcie całego procesu: służy wyłącznie do wysyłania SMS-ów, nigdy do ich odbierania.

Jeśli twoje przypomnienie brzmi "odpisz TAK, aby potwierdzić", przy nadawcy alfanumerycznym ta odpowiedź nie dotrze nigdzie. Żeby ją odebrać, trzeba wynająć numer, a to już kosztuje. Twilio publikuje takie miesięczne opłaty za najem, które pokazują skalę różnic między krajami:

- **Wielka Brytania**, numer komórkowy: 2,50 $ miesięcznie.
- **Niemcy**, numer komórkowy: 30 $ miesięcznie.
- **Włochy**, numer komórkowy: 45 $ miesięcznie.
- **Portugalia**, numer komórkowy: 135 $ miesięcznie.

Ponad pięćdziesięciokrotna różnica między najtańszym a najdroższym z tych czterech to powód, żeby sprawdzić stawkę dla Polski u swojego dostawcy, zanim potwierdzanie SMS-em stanie się planem. WhatsApp i email nie mają tego problemu, oba działają w dwie strony od pierwszego dnia.

## Ile to daje w prawdziwym miesiącu

Weźmy gabinet z czterdziestoma wizytami dziennie, pięć i pół dnia w tygodniu: około 800 przypomnień miesięcznie, po jednym na wizytę. Przy stawkach podanych wyżej, bez marży dostawcy:

| Kanał | 800 przypomnień miesięcznie |
|---|---|
| Email | 0,13 $ |
| WhatsApp, sama część Twilio | 4,00 $ plus stawka Meta |
| SMS bez polskich znaków, jeden segment | 36,56 $ |
| SMS z polskimi znakami, dwa segmenty | 73,12 $ |
| SMS z polskimi znakami, 140 znaków, trzy segmenty | 109,68 $ |

Ostatni wiersz to nie scenariusz skrajny. Tak wygląda przypomnienie zawierające nazwę gabinetu, datę, godzinę, adres i numer do odwołania, napisane poprawną polszczyzną.

Dołóż drugie przypomnienie tego samego dnia i wszystkie kwoty podwajają się jeszcze raz. Ta decyzja, jedna wiadomość czy dwie, przesuwa więcej pieniędzy niż wybór kanału.

![Karta pacjenta z historią aktywności filtrowaną według wizyt, zabiegów, finansów i komunikacji](/screenshots/patient-timeline.png)

*Historia pacjenta z komunikacją jako jednym z filtrów. To tutaj sprawdza się, czy wiadomość została doręczona, czy tylko wysłana.*

## Jak rozdzielić kanały bez komplikowania

1. **Zapytaj o preferowany kanał na pierwszej wizycie** i zapisz go w karcie. To dane, które zapobiegają największej liczbie skarg i których prawie nikt nie zbiera.
2. **Ustaw email jako domyślny** dla przypomnienia z wyprzedzeniem, bo przy tej cenie równie dobrze może iść do wszystkich.
3. **Zostaw SMS na powiadomienie tego samego dnia**, kiedy koszt jednej wiadomości łatwo obronić wartością wolnego terminu.
4. **Używaj WhatsAppa tam, gdzie pacjenci już go używają**, i napisz szablon tak, żeby zachęcał do odpowiedzi: potwierdza wizytę i otwiera bezpłatne okno jednocześnie.
5. **Przeliczaj szablon SMS raz na kwartał**, licząc 67 znaków na segment, jeśli zostawiasz polskie znaki.
6. **Mierz doręczenia, nie wysyłki.** Raport "800 wysłanych" nie mówi nic; liczy się, ile dotarło i ile się nie powiodło.

Liczby, której nie poda żaden arkusz, to ile wiadomości twój program wysyła na jedną wizytę, choć nikt go o to nie prosił. Policzenie ich przez miesiąc opłaca się przed negocjowaniem stawki.

W Dentalpin kalendarz wizyt, karta pacjenta i rejestr komunikacji leżą w tej samej bazie danych, więc zestawienie wysłanych i doręczonych wiadomości pochodzi stamtąd, skąd sam kalendarz, a program jest otwartoźródłowy i można go obejrzeć w [cenniku](/pl/cennik/). Niezależnie od tego, ta część artykułu, która realnie oszczędza pieniądze, nie zależy od programu, tylko od liczenia znaków i od tego, żeby nie wysyłać trzech wiadomości tam, gdzie wystarczy jedna.

## Źródła

- Cennik SMS Twilio według krajów, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/pl), strony Polski, Hiszpanii, Francji, Portugalii, Niemiec, Włoch i Wielkiej Brytanii, sprawdzone 28 sierpnia 2026.
- Cennik WhatsAppa w Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), sprawdzony 28 sierpnia 2026.
- Limity znaków i segmenty SMS-a, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), sprawdzone 28 sierpnia 2026.
- Zestaw znaków GSM-7, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), sprawdzony 28 sierpnia 2026.
- Cennik WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), sprawdzony 28 sierpnia 2026.
- Limity wysyłki WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), sprawdzone 28 sierpnia 2026.
- Cennik Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), sprawdzony 28 sierpnia 2026.
- Wytyczne Google dla nadawców poczty, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), sprawdzone 28 sierpnia 2026.
- Dobre praktyki Yahoo dla nadawców, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), sprawdzone 28 sierpnia 2026.
