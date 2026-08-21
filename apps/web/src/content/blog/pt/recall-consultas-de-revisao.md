---
title: "Recall dentário: como trazer os pacientes de volta à consulta de revisão"
description: "Como montar um sistema de recall que funciona: quem define o intervalo, de onde sai a lista de quem está em atraso, o que diz a mensagem e que números medir."
pubDate: 2026-08-21
translationKey: recall-dental-revisiones
tags: [recall, revisoes, agenda, fidelizacao]
---

Um sistema de recall são duas coisas: uma data de próxima revisão guardada no histórico clínico de cada paciente, e uma rotina semanal que retira a lista de quem já a ultrapassou e lhe escreve. Essa data não é seis meses por omissão. Decide-se no fim de cada consulta, conforme o risco daquela pessoa, e fica registada com a concordância dela. O resto é logística: um canal que seja lido, aviso com margem para reorganizar o dia e uma segunda tentativa para quem não responder.

O que costuma falhar não é a redacção da mensagem. É que a data nunca foi preenchida: sem ela não há lista nenhuma para retirar, e a clínica acaba a percorrer processos à mão no dia em que alguém se lembra.

## Seis meses é um hábito, não uma regra

O intervalo de revisão é uma decisão clínica tomada paciente a paciente, não uma constante aplicada a toda a base de dados. A norma CG19 do NICE britânico, a referência publicada mais explícita sobre isto, di-lo logo na primeira recomendação: o intervalo é determinado especificamente para cada paciente e ajustado às suas necessidades, a partir de uma avaliação do seu nível de doença e do seu risco.

Da mesma norma saem outras três regras práticas. O intervalo escolhe-se no fim da revisão ou depois de concluído o tratamento, não quando o paciente já saiu. É discutido com ele e registado, incluindo se concorda ou não. E é revisto em cada consulta seguinte, para ser alargado ou encurtado conforme o que aconteceu.

| | Menos de 18 anos | 18 anos ou mais |
|---|---|---|
| Intervalo mais curto | 3 meses | 3 meses |
| Intervalo mais longo | 12 meses | 24 meses |
| Valores atribuídos | 3, 6, 9 ou 12 meses | 3, 6, 9, 12, 15, 18, 21 ou 24 meses |
| Quando se decide | No fim da revisão ou do tratamento | No fim da revisão ou do tratamento |
| Onde fica registado | Histórico clínico, com a concordância do paciente | Histórico clínico, com a concordância do paciente |

É uma norma do sistema britânico, não uma obrigação portuguesa, por isso os prazos valem como referência. O que se transpõe por inteiro é a estrutura: o intervalo decide-se, justifica-se, regista-se e volta a rever-se.

> **Nos adultos, a evidência não distingue a revisão semestral da revisão baseada no risco.** Uma revisão Cochrane de 2020, sobre dois ensaios e 1736 participantes, não encontrou diferenças relevantes no número de superfícies dentárias com cárie, na hemorragia gengival nem na qualidade de vida oral ao fim de quatro anos, nem entre o intervalo por risco e o de seis meses (evidência de certeza elevada), nem comparando 24 meses com qualquer um dos dois. Para crianças e adolescentes, a própria revisão diz que a evidência é incerta.

Isto não é autorização para deixar de contactar seja quem for. É o argumento para que o intervalo seja um campo com um critério por trás em vez de uma constante. Se o software só sabe somar seis meses, está a tomar por omissão a decisão que a norma pede que se tome paciente a paciente.

## A lista sai do processo, não de uma folha à parte

Um recall que vive numa folha de cálculo dessincroniza-se ao fim de um mês. Alguém marca por telefone, ninguém risca o nome, e o aviso seguinte sai na mesma. A lista tem de ser uma consulta sobre dados que já estão no histórico clínico.

| Dado | Para que serve | Se faltar |
|---|---|---|
| Data da próxima revisão | É o que gera a lista de cada semana | ✗ Não há lista: percorrem-se processos à mão |
| Intervalo atribuído e por quem | Saber se um intervalo de nove meses é critério clínico ou esquecimento | ~ Ninguém se atreve a mexer-lhe |
| Motivo da revisão | Escrever uma mensagem concreta em vez de uma fórmula genérica | ~ O aviso diz "revisão" e não prende |
| Canal preferido | Escrever por onde aquela pessoa responde mesmo | ✗ Insiste por um canal que ela pediu para não usar |
| Data do último aviso de recall | Não escrever três vezes no mesmo mês | ✗ Os avisos duplicam-se e as pessoas cancelam a subscrição |
| Estado do paciente | Retirar da lista quem já não deve constar | ✗ Escreve a pacientes que saíram ou faleceram |
| Tratamento por concluir | Separar "está na altura da revisão" de "ficou algo a meio" | ~ Misturam-se duas conversas diferentes |

- **Preencha a data antes de o paciente sair do gabinete.** É o único momento em que alguém sabe verdadeiramente quando aquela pessoa deve voltar, e é o que a norma recomenda explicitamente.
- **Guarde o intervalo, não apenas a data resultante.** Quando o paciente remarca, a data desloca-se; o critério dos doze meses tem de sobreviver a essa mudança.
- **Separe "próxima revisão" de "próxima consulta".** Um paciente pode ter consulta para a semana para terminar uma endodontia e a revisão a catorze meses de distância. Se for o mesmo campo, um dos dois perde-se.

![Processo de um paciente com o separador de actividade aberto: alertas clínicos, plano de tratamento em curso, próxima consulta e o histórico cronológico de visitas, tratamentos e comunicações](/screenshots/patient-timeline.png)

*A actividade de um paciente por ordem, com filtros por visitas, tratamentos e comunicações: quando veio pela última vez e o que lhe foi enviado desde então.*

## Em atraso, e de quanto: são três listas, não uma

Juntar no mesmo envio quem passou da data há uma semana e quem não aparece há três anos produz uma mensagem que não serve a nenhum dos dois. A divisão habitual dá três grupos e três mensagens diferentes.

1. **A vencer.** Estão na altura dentro de duas a quatro semanas. A mensagem é um aviso cordial com uma forma de marcar, e é o grupo que melhor responde, porque ainda ninguém se desligou.
2. **Em atraso recente.** Passaram da data há menos de um intervalo completo. Aqui a mensagem refere a última visita, porque uma data concreta funciona melhor do que uma fórmula vaga.
3. **Desligados.** Mais de dois intervalos sem aparecer. Confirme os contactos e se continuam a ser pacientes da clínica antes de escrever; recuperá-los é um trabalho diferente do recall e merece campanha própria.

Os dois primeiros grupos são o recall propriamente dito e cabem na rotina semanal. O terceiro é uma campanha pontual, uma ou duas vezes por ano, feita com calma.

> **Quem está em atraso não é um desertor.** A razão mais frequente para alguém passar da data é que ninguém o avisou, e o tom da mensagem devia partir desse princípio até prova em contrário.

## A mensagem: por onde, quando e com o quê

Sobre o canal há evidência, embora precise de ser lida com cuidado. Uma revisão Cochrane de 2013, sobre oito ensaios aleatorizados e 6615 participantes, comparou lembretes por mensagem escrita com não enviar nada e com telefonar.

A mensagem escrita melhorou a comparência face a não enviar nada, com um risco relativo de 1,14 (intervalo de confiança de 95 %: 1,03 a 1,26). Face à chamada telefónica ficou empatada, com um risco relativo de 0,99 (0,95 a 1,02). As taxas de comparência foram de 67,8 % sem lembrete, 78,6 % com mensagem e 80,3 % com chamada, e a mensagem custou entre 55 % e 65 % menos do que a chamada. A própria revisão classifica a evidência como de qualidade baixa a moderada.

> **É evidência sobre lembrar uma consulta já marcada, não sobre convidar alguém a marcar.** São situações diferentes e a segunda é mais difícil. O que se transpõe é a comparação entre canais: o escrito rendeu como a chamada por uma fracção do custo, e isso chega para decidir por onde começar.

Posto isto, o que a mensagem tem de levar:

- **O nome da clínica logo na primeira linha.** Uma mensagem que não se identifica ao primeiro olhar é apagada antes de ser lida por inteiro.
- **Quando foi a última visita e o que está agora em falta.** "A sua última revisão foi em Março de 2025" é bem mais concreto do que "já há algum tempo que não o vemos".
- **Quanto tempo vai demorar.** A objecção silenciosa a uma revisão é o tempo, e "cerca de vinte minutos" desarma-a.
- **Uma forma de responder num passo.** Responder à própria mensagem, uma ligação, ou um número onde alguém atenda mesmo. Se marcar exigir telefonar em horário de expediente, metade do grupo fica pelo caminho.
- **Uma saída clara.** Como deixar de receber avisos, ou mudar de canal. Perder um contacto sai mais barato do que ganhar uma reclamação.

## A rotina semanal

Um recall funciona porque acontece todas as semanas, não porque a mensagem é brilhante. Meia hora fixa, com uma pessoa concreta responsável.

1. **Retire a lista de quem está a vencer e em atraso**, filtrando pela data da próxima revisão.
2. **Elimine quem já tem consulta marcada**, o filtro que evita o aviso mais irritante de todos.
3. **Verifique óbitos e contactos** alterados desde o envio anterior.
4. **Divida nos dois grupos** acima e use o texto que corresponde a cada um.
5. **Envie pelo canal preferido de cada paciente**, não pelo que der mais jeito naquela manhã.
6. **Registe a data do aviso no processo**, para que a mesma pessoa não volte a aparecer na semana seguinte.
7. **Reveja o envio anterior**: quem marcou, quem não respondeu e quem pediu para não ser mais contactado.

Quem não responde recebe uma segunda mensagem, dez a catorze dias depois, e fica por aí. Uma terceira tentativa no mesmo ciclo ganha poucas consultas e perde contactos.

## Quatro números dizem se resulta

| Métrica | Como se calcula | Que decisão desencadeia |
|---|---|---|
| Cobertura da lista | Pacientes activos com data de próxima revisão, sobre o total de activos | Se for baixa, o problema não é a mensagem: a data não está a ser preenchida no fim da consulta |
| Taxa de resposta | Consultas marcadas sobre avisos enviados, por envio | Compara canais e textos, e um envio mau nota-se numa semana |
| Atrasos acumulados | Quantos passaram da data e continuam sem consulta | Se cresce mês após mês, a rotina semanal não está a acontecer |
| Cumprimento do intervalo | Quantos vêm dentro do intervalo que lhes foi atribuído | Distingue o sistema que avisa do sistema que consegue que apareçam |

A cobertura é a primeira a olhar e a que quase ninguém olha. Uma clínica com 40 % dos pacientes activos sem data de próxima revisão não tem um problema de recall, tem metade da base de dados invisível para qualquer aviso que envie.

![Painel de relatórios da agenda com o total de consultas do período, a taxa de conclusão, a de faltas, as primeiras consultas, as horas trabalhadas por profissional e a ocupação por gabinete](/screenshots/reports.png)

*As taxas de conclusão e de faltas do período, ao lado da ocupação por gabinete: os dados com que se apura se um envio de avisos serviu de alguma coisa.*

## Por onde começar

1. **Meça a cobertura hoje**, contando quantos pacientes activos têm data de próxima revisão. Esse número é o seu ponto de partida.
2. **Acrescente o passo no fim da consulta**: antes de o paciente se levantar, intervalo decidido, registado e falado com ele.
3. **Retire a primeira lista de atrasos** e tire de lá quem já tem consulta.
4. **Escreva dois modelos**, um para quem está a vencer e outro para atrasos recentes, com os cinco elementos acima.
5. **Reserve meia hora por semana** na agenda de uma pessoa concreta.
6. **Registe durante dois meses** avisos enviados e consultas marcadas por envio.
7. **Altere uma coisa de cada vez**, o texto ou o canal, para saber qual das duas mexeu no número.

O DentalPin traz recalls a par da agenda, do histórico clínico e dos relatórios, com as comunicações guardadas no processo do paciente, que é o necessário para saber quem foi avisado e quando. O que cada versão inclui está em [preços](/pt/precos/).

Isto não é aconselhamento clínico: o intervalo de revisão de cada paciente é sempre decidido pelo profissional que o acompanha.

## Fontes

- National Institute for Health and Care Excellence. *Dental checks: intervals between oral health reviews* (CG19), recomendações 1 a 8. [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/n/nicecg19/ch5/). Consultado a 21 de Agosto de 2026.
- Fee PA, Riley P, Worthington HV, Clarkson JE, Boyers D, Beirne PV. *Recall intervals for oral health in primary care patients*. Cochrane Database of Systematic Reviews, 14 de Outubro de 2020, DOI 10.1002/14651858.CD004346.pub5. [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256238/). Consultado a 21 de Agosto de 2026.
- Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J. *Mobile phone messaging reminders for attendance at healthcare appointments*. Cochrane Database of Systematic Reviews, 5 de Dezembro de 2013, DOI 10.1002/14651858.CD007458.pub3. [cochrane.org](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments). Consultado a 21 de Agosto de 2026.
