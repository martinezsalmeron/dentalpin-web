---
title: "Auditoria de acessos ao histórico clínico: o que registar e como rever"
description: "Que campos o registo de acessos ao histórico clínico tem de guardar, quanto tempo o conservar e como revê-lo todos os meses em vinte minutos."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [historico-clinico, seguranca, rgpd, auditoria, gestao]
---

Um registo de acessos ao histórico clínico tem de guardar cinco coisas sempre que alguém abre uma ficha: quem entrou, quando, que paciente, que ação e a partir de onde. Conserva-se entre seis meses e um ano, protege-se para que ninguém possa editar as suas próprias linhas, e revê-se com regularidade, porque um registo que ninguém lê não deteta nada. É esse o dispositivo completo, e o resto do artigo explica porque cada peça está lá.

Isto não é aconselhamento jurídico. Todas as fontes oficiais estão no fim, consultadas a 27 de agosto de 2026.

## Uma permissão diz quem pode entrar, o registo diz quem entrou

São coisas diferentes, e a clínica que tem a primeira costuma acreditar que tem as duas. A permissão é uma decisão tomada antes: a receção não abre históricos clínicos. O registo é um facto guardado depois: terça-feira às 12h40, esta pessoa abriu a ficha deste paciente.

Só o segundo responde a alguma pergunta. Quando um paciente quer saber quem consultou o seu histórico, ou quando é preciso avaliar se uma violação de dados atingiu dados de saúde, a lista de permissões não diz nada sobre nenhuma das duas.

> **A curiosidade é a forma mais comum de acesso indevido, e nenhuma permissão a apanha.** O pessoal clínico tem acesso legítimo aos históricos. O que é preciso conseguir distinguir é o acesso que corresponde a uma consulta desse dia daquele que não corresponde a nada.

## Os cinco campos de cada linha

A lei portuguesa é, neste ponto, a mais explícita da Europa, e voltamos a ela na secção seguinte. Para o formato, a autoridade francesa CNIL dá a lista prática: registar as "opérations de création, consultation, partage, modification et suppression", cada traço com o identificador do autor, a data, a hora, o tipo de operação e a referência do dado em causa.

Traduzido para uma clínica dentária, é isto que cada linha deve conter.

| Campo | O que guarda | Indispensável? |
|---|---|---|
| Quem | A conta nominal da pessoa | ✓ Sim |
| Quando | Data e hora | ✓ Sim |
| Que paciente | Identificador da ficha aberta | ✓ Sim |
| Que ação | Consultar, criar, alterar, exportar ou apagar | ✓ Sim |
| De onde | Endereço IP ou posto | ~ Se houver acesso remoto |
| O que mudou | Valor anterior e valor novo | ~ Nas alterações |
| Porquê | Justificação curta do acesso | ✗ Só em acessos de urgência |

Os quatro primeiros não se negoceiam, porque retirar um deles impede a linha de responder a alguma coisa. Um registo sem paciente diz que alguém olhou para algo. Um registo que não separa consultar de apagar deita fora a distinção que mais importa.

O quinto depende do uso. Se o software só abre a partir dos postos da clínica, o endereço IP acrescenta pouco; se houver acesso a partir de casa, é o campo que separa uma consulta normal de uma consulta às três da manhã.

![Ficha de paciente no separador de atividade, com alertas clínicos, plano de tratamento ativo e uma linha temporal filtrável por consultas, tratamentos e contactos](/screenshots/patient-timeline.png)

*A atividade registada sobre um paciente, reunida numa única linha temporal.*

## Em Portugal isto não é boa prática, é obrigação escrita

O artigo 29.º da Lei n.º 58/2019 é dos textos mais exigentes que existem sobre este assunto na União Europeia, e vale a pena ler as três partes.

Começa pelo princípio: "nos tratamentos de dados de saúde e de dados genéticos, o acesso a dados pessoais rege-se pelo princípio da necessidade de conhecer a informação".

Depois vai mais longe do que qualquer outro país e cria um dever de notificação: "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais, cabendo ao responsável pelo tratamento assegurar a disponibilização desse mecanismo de rastreabilidade e notificação".

E, na enumeração das medidas, nomeia a peça concreta: "registo eletrónico dos acessos e dos dados acedidos".

> **A notificação ao titular é a parte que apanha as clínicas de surpresa.** Não basta poder responder se alguém perguntar, a lei fala em assegurar o mecanismo de rastreabilidade e de notificação. Confirme com o seu encarregado de proteção de dados como o aplica ao seu caso concreto.

A Lei n.º 12/2005 completa o enquadramento pelo lado da confidencialidade. O artigo 4.º diz que "os responsáveis pelo tratamento da informação de saúde devem tomar as providências adequadas à proteção da sua confidencialidade" e que "as unidades do sistema de saúde devem impedir o acesso indevido de terceiros aos processos clínicos".

O RGPD chega ao mesmo ponto pelo artigo 5.º, n.º 2, que obriga o responsável a demonstrar a conformidade, e pelo artigo 32.º, que exige medidas técnicas adequadas à segurança do tratamento.

## Quanto tempo se conserva

A lei portuguesa não fixa um prazo para os registos de acesso, por isso a referência vem das outras autoridades europeias, que coincidem.

A CNIL recomenda conservar os traços "sur une période glissante comprise entre six mois et un an", numa janela móvel de seis meses a um ano, com exceções quando exista obrigação legal, litígio ou incidente por analisar.

O Garante italiano fixa um mínimo para os registos de acesso dos administradores de sistema: devem ser guardados "per un congruo periodo, non inferiore a sei mesi", nunca menos de seis meses.

Seis meses é o piso razoável. Abaixo disso, uma reclamação que chega na primavera sobre um facto do outono já não encontra nada para examinar.

## Como rever em vinte minutos por mês

Um registo que só se abre depois de haver problema chega tarde. A revisão periódica é o que o transforma em deteção, e cabe numa rotina curta.

1. **Filtre os acessos fora de horas.** Uma ficha aberta de madrugada, ao domingo ou num feriado merece explicação, ainda que quase sempre exista uma.
2. **Cruze os acessos do dia com a agenda.** Se alguém abriu cinco históricos e tinha três pacientes, faltam explicar dois.
3. **Procure os pacientes que todos conhecem.** A ficha de um familiar de alguém da clínica, de um colega ou de uma figura local é a que mais se abre sem motivo.
4. **Verifique as contas de quem já saiu.** Uma conta desativada não deveria produzir linhas novas, e se produz o problema é grave.
5. **Reveja as exportações.** Descarregar a base de pacientes é uma ação diferente de a consultar, e deveria ser rara.
6. **Anote a data da revisão e o que encontrou**, mesmo quando a resposta é "nada". Essa folha é a prova de que o controlo existe.

Um limite que convém dizer em voz alta perante o pessoal da clínica: a CNIL proíbe desviar os dados de registo para finalidades sem relação, como controlar horários de trabalho. Os registos servem para segurança. Usá-los para outra coisa destrói a confiança que faz com que ninguém os queira desligados.

![Página de relatórios da clínica com os indicadores do período](/screenshots/reports.png)

*A revisão mensal resulta melhor como rotina fixa, ao lado dos restantes números do mês.*

## Três erros que deixam o registo sem valor

**A conta partilhada.** Se quatro pessoas entram como "rececao", o registo guarda fielmente que foi "rececao" a abrir a ficha, o que não identifica ninguém. É a falha que anula todo o resto, e é a mais frequente.

**O registo que o administrador pode editar.** Se o titular da clínica consegue alterar ou apagar linhas, o registo deixa de provar seja o que for perante terceiros. A CNIL formula isto como impedir que o pessoal altere o registo da sua própria atividade, e o Garante italiano exige registos com "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità", ou seja completude, inalterabilidade e possibilidade de verificar a integridade.

**A conta apagada.** Quando alguém sai e a conta é eliminada em vez de desativada, as suas linhas do registo ficam órfãs. Desativar preserva a rastreabilidade, apagar destrói-a.

## O que o software pode fazer e o que não pode

Nenhum registo impede que alguém leia o monitor do lado, e nenhum substitui a conversa em que se explica que o histórico de um conhecido não se abre por curiosidade. O que faz é permitir ter essa conversa com factos à frente em vez de suspeitas.

No Dentalpin cada abertura de ficha fica registada com a conta de quem abriu, a data e o paciente e as contas desativam-se sem apagar o que fizeram. As condições das versões alojada e auto-alojada estão em [preços](/pt/precos/).

## Fontes

- Lei n.º 58/2019, de 8 de agosto, artigo 29.º. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Consultado a 27 de agosto de 2026.
- Lei n.º 12/2005, de 26 de janeiro, artigos 3.º e 4.º. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1660&tabela=leis&ficha=1&pagina=1). Consultado a 27 de agosto de 2026.
- Regulamento (UE) 2016/679 (RGPD), artigos 5.º, n.º 2, e 32.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 27 de agosto de 2026.
- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (atualizado a 14 de março de 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Consultado a 27 de agosto de 2026.
- Garante per la protezione dei dati personali, provvedimento de 27 de novembro de 2008 sobre administradores de sistema. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Consultado a 27 de agosto de 2026.

A aplicação concreta do artigo 29.º ao seu caso depende da sua organização. Confirme-a com o seu encarregado de proteção de dados.
