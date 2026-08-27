---
title: "Permissões de acesso na clínica dentária: quem pode ver o quê"
description: "Como repartir permissões numa clínica dentária: o que vê a receção, o que vê o pessoal clínico e porque a conta partilhada estraga tudo o resto."
pubDate: 2026-08-27
translationKey: permisos-acceso-personal-clinica
tags: [permissoes, seguranca, rgpd, processo-clinico, cnpd]
---

Cada pessoa da clínica deve ver apenas o que o seu trabalho exige hoje: a receção trabalha com a agenda, os contactos e os recebimentos; o pessoal clínico abre o histórico clínico e o odontograma; os relatórios de toda a clínica e a gestão de contas ficam com a direção. Chegar lá resume-se a três coisas: uma conta com nome próprio por pessoa, permissões atribuídas por perfil e não uma a uma, e uma lista escrita de quem tem o quê.

Isto não é aconselhamento jurídico. Todas as fontes oficiais estão no fim, consultadas a 27 de agosto de 2026.

## A necessidade de conhecer está escrita na lei portuguesa

A Lei n.º 58/2019, que executa o RGPD na ordem jurídica nacional, dedica o artigo 29.º ao tratamento de dados de saúde. O primeiro número é o que interessa a uma clínica: o acesso a estes dados rege-se pelo "princípio da necessidade de conhecer a informação".

O mesmo artigo exige que o tratamento seja feito por "um profissional obrigado a sigilo ou por outra pessoa sujeita a dever de confidencialidade", com medidas de segurança adequadas. E vai mais longe do que a maioria das legislações europeias: prevê que o titular dos dados seja notificado dos acessos realizados aos seus dados pessoais, o que só é possível se existir um registo fiável de quem abriu o quê.

O RGPD aponta no mesmo sentido pelos artigos 29.º e 32.º, n.º 4: quem atua sob a autoridade do responsável e tem acesso a dados pessoais só os pode tratar seguindo as suas instruções.

> **A pergunta que resolve quase todos os casos duvidosos é "precisa disto para trabalhar hoje?".** Se a resposta for não, o acesso está a mais, por muita antiguidade e confiança que a pessoa tenha.

## Quatro perfis cobrem quase qualquer clínica

Não é preciso um organigrama complicado. Uma clínica de um a cinco gabinetes funciona com quatro perfis e algumas exceções com nome próprio.

| | Receção | Higienista | Médico dentista | Direção |
|---|---|---|---|---|
| Agenda da clínica | ✓ Completa | ✓ Completa | ✓ Completa | ✓ Completa |
| Contactos e consentimentos | ✓ Editar | ~ Consultar | ✓ Editar | ✓ Editar |
| Histórico clínico e odontograma | ✗ Sem acesso | ✓ Os seus doentes | ✓ Completo | ~ Só se tratar |
| Radiografias e imagens | ✗ Sem acesso | ✓ Os seus doentes | ✓ Completo | ~ Só se tratar |
| Orçamentos | ~ Consultar e cobrar | ✗ Sem acesso | ✓ Criar e assinar | ✓ Completo |
| Faturas e caixa do dia | ✓ Sim | ✗ Sem acesso | ~ O seu trabalho | ✓ Completo |
| Relatórios de toda a clínica | ✗ Sem acesso | ✗ Sem acesso | ~ A sua produção | ✓ Completo |
| Contas e permissões | ✗ Sem acesso | ✗ Sem acesso | ✗ Sem acesso | ✓ Completo |

Há dois ajustes que aparecem sempre. A receção precisa de saber o motivo da consulta para organizar o gabinete, e uma etiqueta de tratamento na marcação chega sem abrir o histórico.

Os alertas médicos são a exceção que confirma a regra. Uma alergia a um anestésico tem de estar à vista de quem vai tratar, sem a procurar, e por isso fica no topo da ficha e não a três cliques de distância.

![Agenda da clínica em vista de dia com as marcações distribuídas por gabinete](/screenshots/schedule-day.png)

*É este o painel com que a receção trabalha o dia inteiro.*

## A conta partilhada é o verdadeiro problema

A maioria das clínicas não tem um problema de permissões mal repartidas. Tem uma conta chamada "rececao" que quatro pessoas conhecem, e outra chamada "clinica" a que todos recorrem quando o dia está cheio.

Com uma conta partilhada cai tudo o resto. O registo de acessos deixa de identificar alguém, a saída de uma pessoa obriga a mudar a palavra-passe de todas, e perante uma reclamação não consegue mostrar quem abriu o histórico nem quando.

> **Uma conta por pessoa não é burocracia, é o que torna verificável tudo o resto.** Criar cinco contas leva dez minutos e evita a conversa em que não consegue explicar quem consultou a ficha de um doente que por acaso é vizinho de alguém da clínica.

O NCSC britânico resume o ciclo como uma política de entradas, mudanças e saídas: a gestão de contas tem de prever as três, para que o acesso "seja revogado quando deixa de ser necessário, ou alterado para quem muda de funções".

## O registo de acessos é o que transforma a permissão em prova

Uma permissão diz quem pode abrir um histórico. O registo diz quem o abriu. Só o segundo serve quando é preciso responder a uma reclamação ou avaliar se houve uma violação de dados.

Vale a pena registar pouca coisa, mas sempre:

- **Quem**, com conta identificada, nunca uma genérica.
- **Quando**, com data e hora.
- **Que doente**, e não apenas que painel.
- **O que fez**, distinguindo consultar de alterar.
- **De onde**, se houver acesso remoto.

Falta quase sempre uma regra: o registo tem de ser difícil de alterar por quem tem direitos de administração na clínica. Se a direção pode reescrevê-lo, deixa de provar seja o que for perante terceiros.

![Ficha de doente no separador de atividade, com alertas clínicos, plano ativo e uma linha temporal filtrável](/screenshots/patient-timeline.png)

*A atividade de um doente reunida numa única linha temporal, com filtros por consultas, tratamentos e comunicações.*

## Entradas e saídas, em sete passos

O risco raramente está no acesso que dá. Está no que ninguém retira.

1. **Crie a conta em nome da pessoa**, com o endereço real, antes do primeiro dia.
2. **Atribua um perfil, não permissões avulsas.** As permissões dadas caso a caso acumulam-se e ninguém se lembra porquê.
3. **Faça assinar o compromisso de confidencialidade** e guarde-o com o contrato.
4. **Ative um segundo fator** se o programa for acessível de fora da clínica.
5. **Refaça o perfil quando alguém muda de funções**, retirando o anterior. Uma promoção soma acessos e quase nunca subtrai.
6. **Desative a conta no próprio dia da saída**, antes de a pessoa sair, não na semana seguinte.
7. **Desative, não apague.** Uma conta apagada deixa o registo de acessos sem dono e perde-se a rasto do que foi feito.

## Os casos que não cabem no organigrama

Meia clínica está fora destes quatro perfis, e são precisamente os acessos que ninguém revê.

| Quem | O que precisa mesmo | O que tem de acontecer antes |
|---|---|---|
| Substituto por duas semanas | Agenda e histórico dos doentes que trata | Conta própria com data de fim, nunca a da direção |
| Estudante em estágio | O que vê o clínico que o acompanha, na presença dele | Conta própria, sem acesso a faturas, compromisso assinado |
| Contabilista | Valores, datas e séries de fatura | Contrato de subcontratação e acesso limitado à faturação |
| Informático externo | O servidor e as cópias de segurança, não os históricos | Contrato de subcontratação, conta identificada, acesso registado |
| Laboratório de prótese | O trabalho, o doente e os prazos | Enviar o caso, não dar acesso ao programa |
| Antigo sócio | Nada, além do que diga o acordo de saída | Desativar a conta e deixar registo da data |

O contabilista e o informático são subcontratantes, e o RGPD exige um contrato com cada um. É o papel que mais vezes falta numa clínica que, de resto, tem tudo em ordem.

## Reveja uma vez por ano, em meia hora

A CNIL francesa recomenda "uma revisão periódica, no mínimo anual, das autorizações" para detetar contas sem uso e voltar a alinhar os direitos com as funções reais. É a medida mais barata desta página.

A revisão cabe em quatro perguntas: quem tem conta e continua a trabalhar aqui, quem mudou de funções e ficou com as permissões antigas, que contas não são usadas há três meses, e que fornecedores externos ainda entram.

> **Escreva o resultado numa folha com data.** É essa folha que mostra quando lhe perguntarem como controla os acessos, e é ela que lhe recorda no ano seguinte o que decidiu neste.

## O que o programa pode fazer, e o que não pode

Nenhum sistema impede que alguém leia o painel do lado, e nenhum substitui a conversa sobre não abrir o histórico de um doente conhecido por curiosidade. O que pode fazer é tornar a repartição fácil de manter e deixar rasto.

No Dentalpin os perfis vêm definidos por função, cada abertura de ficha fica registada com a conta, a data e o doente, e as contas desativam-se sem apagar o que fizeram. As condições da versão alojada e da versão no seu servidor estão em [preços](/pt/precos/).

## Fontes

- Lei n.º 58/2019, de 8 de agosto, artigo 29.º. [Diário da República](https://diariodarepublica.pt/dr/detalhe/lei/58-2019-123815982). Consultado a 27 de agosto de 2026.
- Regulamento (UE) 2016/679 (RGPD), artigos 9.º, 29.º e 32.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 27 de agosto de 2026.
- CNIL, *Sécurité: Gérer les habilitations* (atualizado a 13 de março de 2024). [cnil.fr](https://www.cnil.fr/fr/securite-gerer-les-habilitations). Consultado a 27 de agosto de 2026.
- NCSC, *10 Steps to Cyber Security: Identity and access management*. [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management). Consultado a 27 de agosto de 2026.

Cada clínica reparte as funções à sua maneira, e a justificação de um acesso concreto depende do caso. Confirme com o seu jurista ou com o encarregado de proteção de dados.
