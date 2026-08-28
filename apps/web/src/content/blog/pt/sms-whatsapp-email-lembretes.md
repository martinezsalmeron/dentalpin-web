---
title: "SMS, WhatsApp ou email: quanto custa mesmo cada lembrete de consulta"
description: "Um SMS para Portugal custa cerca de 310 vezes um email, e os acentos duplicam a fatura porque não estão no GSM-7. Preços publicados e o que chega de facto."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [lembretes, sms, whatsapp, email, custos, agenda]
---

Um lembrete por email custa 0,00016 dólares, um por WhatsApp menos de um cêntimo, e um SMS para um telemóvel português custa 0,0501 dólares na tarifa pública da Twilio, cerca de 310 vezes o email. É esta a resposta curta. O que decide mesmo a sua fatura não é o canal escolhido, mas quantas mensagens envia por consulta, quantos acentos leva o texto (sim, os acentos custam dinheiro) e quantos pacientes respondem.

Todos os preços abaixo saem da página de tarifas de cada fornecedor, consultada a 28 de agosto de 2026. Nenhum é uma estimativa nem vem de um comparador.

> **A Twilio publica as tarifas em dólares, não em euros.** Ficam aqui tal como as publica, porque convertê-las ao câmbio de hoje daria um número que amanhã já não se consegue verificar. O seu fornecedor fatura em euros e com a margem dele por cima.

## Quanto custa uma mensagem, canal a canal

Três formas de faturar diferentes, e já aí está metade da história.

| Canal | Preço por mensagem | Como é faturado | Recebe respostas? |
|---|---|---|---|
| Email (Amazon SES, plano Essentials) | 0,16 $ por cada 1.000 envios | Por email enviado, chegue ou não | ✓ Sim |
| WhatsApp (Twilio mais a tarifa da Meta) | 0,005 $ da Twilio, mais a tarifa da Meta | Só quando o modelo é entregue | ✓ Sim |
| SMS para Portugal (Twilio) | 0,0501 $ | Por segmento, não por mensagem | ~ Só se enviar a partir de um número |

A coluna da direita é a que quase ninguém olha antes de assinar, e é a que parte o fluxo do "responda SIM para confirmar". Voltamos a ela mais abaixo.

O SMS é o único canal cujo preço depende do país de destino. Estas são as tarifas que a Twilio publica para os mercados vizinhos:

| Destino | Preço por segmento |
|---|---|
| Polónia | 0,0457 $ |
| Portugal | 0,0501 $ |
| Reino Unido | 0,056 $ |
| França | 0,0798 $ |
| Espanha | 0,0875 $ |
| Itália | 0,0927 $ |
| Alemanha | 0,112 $ |

O mesmo lembrete custa mais do dobro para a Alemanha do que para Portugal. Se tem pacientes emigrantes com número estrangeiro, já está a pagar essa diferença.

## Um til pode duplicar a fatura do SMS

Aqui está o erro caro, e não é o software que o comete: é quem escreve o modelo.

Um SMS não é faturado à mensagem, é faturado ao segmento. Com a codificação GSM-7 cabem 160 caracteres num segmento, e 153 por segmento quando a mensagem se parte em várias, porque sete caracteres vão para o cabeçalho que as liga.

Assim que entra um carácter que o GSM-7 não sabe representar, a mensagem inteira muda para a codificação UCS-2 e o limite cai para 70 caracteres, ou 67 por segmento numa mensagem partida. A Twilio nomeia quatro coisas que o provocam: os emojis, os alfabetos não latinos, os caracteres latinos estendidos e as aspas ou plicas tipográficas.

E aqui chega o pormenor que atinge qualquer modelo escrito em português correto. O conjunto GSM-7 tem 128 caracteres, e inclui o ç, o ü, o é e o à, mas **não inclui o ã, o õ, o á, o í, o ó nem o ú**.

> **"Amanhã" e "clínica" já o tiram do segmento barato.** O til e o acento agudo não estão no GSM-7, por isso um lembrete escrito com a ortografia correta viaja em UCS-2 e conta 67 caracteres por segmento em vez de 153. Um texto de 120 caracteres passa de um segmento para dois, e um de 140 para três.

Tirar os acentos para poupar não é a resposta: uma mensagem sem acentos parece uma burla, e um paciente que não confirma custa muito mais do que o segundo segmento. O que funciona é contar a sério.

Três verificações que valem dinheiro todos os meses:

- **Conte 67 caracteres por segmento**, não 153, se o modelo levar acentos. É a conta real e quase nenhum orçamento a faz.
- **Conte os caracteres do modelo já preenchido**, com o nome mais comprido da sua base de pacientes lá dentro, não com o texto de exemplo.
- **Escreva o modelo num editor de texto simples.** O processador de texto substitui aspas e travessões por versões tipográficas sem avisar, e essas também não estão no GSM-7.

A Twilio cobra ainda 0,001 $ por cada mensagem que termina em estado falhado, por isso uma lista de telemóveis desatualizada também tem preço, ainda que pequeno.

![Agenda do dia com as consultas de cada profissional, as horas e o estado de cada uma](/screenshots/schedule-day.png)

*Um dia de agenda. Cada consulta deste ecrã é pelo menos uma mensagem por mês na fatura.*

## No WhatsApp, o preço depende de o paciente responder

A Meta mudou o modelo a 1 de julho de 2025 e desde então fatura por mensagem, já não por conversa de 24 horas. Cobra quando o modelo é entregue, não quando é enviado.

Os modelos são classificados em marketing, utilidade e autenticação, e um lembrete de consulta é de utilidade. O que torna o preço difícil de prever é aquilo que a Meta deixa grátis:

- **Tudo o que passa dentro de uma janela de atendimento aberta.** As mensagens fora de modelo e os modelos de utilidade não são cobrados enquanto essa janela estiver aberta, e é o paciente que a abre ao escrever-lhe.
- **As janelas de entrada gratuita duram 72 horas** e nelas não se cobra nenhuma mensagem, modelos incluídos. Abrem a partir de um anúncio de clique para o WhatsApp ou do botão de ação de uma página.
- **Os escalões de volume baixam a tarifa** de utilidade e autenticação conforme o que envia no mês. São específicos de cada mercado e categoria, agregam ao nível da carteira de negócio e reiniciam todos os meses.

A consequência prática é contraintuitiva: um lembrete que convida a responder sai mais barato do que um lembrete mudo, porque a resposta abre a janela e a mensagem seguinte dessa conversa é gratuita.

A Meta publica as tarifas por mercado e moeda em fichas descarregáveis, com os valores em vigor desde 1 de julho de 2026, quando Espanha, Itália, Polónia e Reino Unido passaram a ter tarifa própria em vez da regional. Por cima disso, o seu fornecedor põe a dele: a Twilio cobra 0,005 $ por mensagem, o mesmo valor para todos os mercados, e passa a da Meta adiante.

**Os limites de envio quase de certeza não o afetam.** O WhatsApp escalona quantos números diferentes pode contactar em 24 horas fora de uma janela de atendimento: 250, depois 2.000, depois 10.000, 100.000 e ilimitado. Uma clínica com quarenta consultas por dia escreve a quarenta números, por isso o primeiro escalão sobra. A subida é automática quando a qualidade é boa e usou pelo menos metade do limite nos últimos sete dias, e aplica-se em menos de seis horas.

## O canal mais barato é também o que pior chega

A 0,16 $ por cada mil, o email não compete: é cerca de cem vezes mais barato do que qualquer outra coisa. O problema é que o preço paga-se por envio e a entrega não vem incluída.

O Gmail e o Yahoo apertaram os requisitos em fevereiro de 2024 e são hoje o filtro real. Vale a pena separar o que se aplica a toda a gente do que só se aplica a quem envia muito, porque quase todos os artigos sobre isto misturam as duas coisas.

| Requisito | A quem se aplica | O que exige |
|---|---|---|
| SPF ou DKIM | ✓ A todos os remetentes | Pelo menos um dos dois, sempre |
| SPF, DKIM e DMARC | ~ Só acima de 5.000 por dia para o Gmail | Os três, com DMARC ainda que em `p=none` |
| Cancelamento num clique | ~ Só acima de 5.000 por dia | Cabeçalho `List-Unsubscribe` com um clique |
| Taxa de spam | ✓ A todos | Abaixo de 0,3 % nas Postmaster Tools |

> **O limiar dos 5.000 diários não é o seu, e não é aí que vai falhar.** Uma clínica não chega lá nem de perto. O que se lhe aplica desde o primeiro email é a autenticação do domínio e a taxa de queixas, e é aí que desaparece um lembrete enviado a partir de uma conta gratuita sem SPF nem DKIM configurados.

A Google recomenda ainda ficar abaixo de 0,10 % de queixas e nunca se aproximar de 0,30 %. O Yahoo pede o mesmo teto de 0,3 % e exige tratar os cancelamentos em dois dias. São limiares baixos: com 800 emails por mês, três pacientes a marcar spam já o colocam nos 0,375 %.

## O remetente bonito é o que não pode receber respostas

Um remetente alfanumérico é aquele "CLINICA" que aparece em vez de um número. A Twilio oferece-o sem custo em 150 países, e tem uma limitação que decide o desenho de todo o fluxo: só serve para enviar SMS, nunca para os receber.

Se o seu lembrete diz "responda SIM para confirmar", com um remetente alfanumérico essa resposta não vai a lado nenhum. Para a receber tem de alugar um número, e isso já se paga. Estes são os preços de aluguer mensal que a Twilio publica:

- **Reino Unido**, número móvel: 2,50 $ por mês.
- **Alemanha**, número móvel: 30 $ por mês.
- **Itália**, número móvel: 45 $ por mês.
- **Portugal**, número móvel: 135 $ por mês.

Portugal é, dos quatro, o mais caro de longe, mais de cinquenta vezes o do Reino Unido. Vale a pena olhar para esse número antes de decidir que a confirmação por SMS é o plano. O WhatsApp e o email não têm este problema: são os dois bidirecionais desde o primeiro dia.

## Quanto isto soma num mês a sério

Imagine uma clínica com quarenta consultas por dia, cinco dias e meio por semana: cerca de 800 lembretes por mês, um por consulta. Com as tarifas publicadas acima, e sem contar a margem do seu fornecedor:

| Canal | 800 lembretes por mês |
|---|---|
| Email | 0,13 $ |
| WhatsApp, só a parte da Twilio | 4,00 $ mais a tarifa da Meta |
| SMS sem acentos, um segmento | 40,08 $ |
| SMS com acentos, dois segmentos | 80,16 $ |
| SMS com acentos, 140 caracteres, três segmentos | 120,24 $ |

A linha de baixo não é um cenário raro. É um lembrete com o nome da clínica, a data, a hora, a morada e um telefone para desmarcar, escrito em português correto.

Junte um segundo lembrete no próprio dia e todos os valores duplicam outra vez. Essa decisão, mandar um ou dois, mexe com mais dinheiro do que a escolha do canal.

![Ficha de paciente com o histórico de atividade filtrável por consultas, tratamentos, finanças e comunicações](/screenshots/patient-timeline.png)

*O histórico de um paciente, com as comunicações como filtro. É onde se confirma se a mensagem foi entregue ou apenas enviada.*

## Como repartir os canais sem complicar

1. **Pergunte o canal preferido na primeira consulta** e guarde-o na ficha. É o dado que evita mais reclamações e o que quase ninguém regista.
2. **Ponha o email por omissão** para o lembrete com antecedência, porque a esse preço mais vale mandá-lo a toda a gente.
3. **Deixe o SMS para o aviso do próprio dia**, que é quando o custo por mensagem se justifica face ao valor do espaço na agenda.
4. **Use o WhatsApp onde os seus pacientes já o usam**, e escreva o modelo a convidar à resposta, o que confirma a consulta e abre a janela gratuita.
5. **Reveja o modelo de SMS uma vez por trimestre** a contar caracteres, com o nome mais comprido da sua base lá dentro.
6. **Meça entregas, não envios.** Um relatório de "800 enviados" não diz nada; o número que interessa é quantos foram entregues e quantos falharam.

O número que nenhuma folha de cálculo lhe vai dar é quantas mensagens o seu software envia por consulta sem que lhe peçam. Contá-las durante um mês vale a pena antes de negociar a tarifa.

No Dentalpin a agenda, a ficha e o registo de comunicações partilham a mesma base de dados, por isso a contagem do que foi enviado e do que foi entregue sai do mesmo sítio de onde sai a agenda, e o software é open source: pode vê-lo nos [preços](/pt/precos/). Dito isto, a parte deste artigo que lhe poupa dinheiro a sério não depende do programa que usa, mas de contar caracteres e de não mandar três mensagens onde basta uma.

## Fontes

- Preços de SMS da Twilio por país, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/pt), páginas de Portugal, Espanha, França, Alemanha, Itália, Polónia e Reino Unido, consultadas a 28 de agosto de 2026.
- Preços de WhatsApp na Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), consultada a 28 de agosto de 2026.
- Limites de caracteres e segmentos de um SMS, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), consultada a 28 de agosto de 2026.
- Conjunto de caracteres GSM-7, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), consultada a 28 de agosto de 2026.
- Preços da WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consultada a 28 de agosto de 2026.
- Limites de envio da WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), consultada a 28 de agosto de 2026.
- Preços da Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), consultada a 28 de agosto de 2026.
- Diretrizes da Google para remetentes de email, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), consultada a 28 de agosto de 2026.
- Boas práticas da Yahoo para remetentes, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), consultada a 28 de agosto de 2026.
