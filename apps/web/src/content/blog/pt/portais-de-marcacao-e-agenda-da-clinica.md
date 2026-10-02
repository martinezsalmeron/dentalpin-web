---
title: "Portais de marcação e a agenda da clínica: o que sincroniza de verdade e de quem são os dados"
description: "Antes de ligar a Doctoralia à agenda: sincronização num ou nos dois sentidos, a vaga dada ao telefone, e quem é responsável pelo tratamento de quê."
pubDate: 2026-10-02
translationKey: portales-cita-online-agenda-dental
tags: [agenda, marcacoes-online, rgpd, gestao-de-clinica]
---

Antes de ligar um portal de marcações à agenda da clínica há quatro coisas a decidir, e nenhuma aparece na demonstração: se a sincronização vai nos dois sentidos ou só num, o que acontece à vaga que a receção acabou de dar ao telefone, que campos do histórico clínico passam realmente, e quem é responsável pelo tratamento de cada coisa. Na última pergunta a política de privacidade da Doctoralia é mais precisa do que a média do setor: os papéis são três, não um.

Estas quatro respostas decidem se o portal é uma receção a mais ou uma segunda agenda que vai passar a manter à mão.

> **Não se trata aqui da agenda aberta no seu próprio site.** Essa é outra decisão e tem artigo próprio: [a marcação de consultas online](/pt/blog/marcacao-online-de-consultas/). Aqui o paciente marca na plataforma de um terceiro, onde vivem também o primeiro contacto com a clínica e, muitas vezes, a avaliação.

## O que se conseguiu confirmar esta semana, e o que não

A Doctoralia opera em Portugal: o rodapé do seu próprio site lista os treze países onde está presente, e Portugal é um deles.

O que não foi possível confirmar nesta pesquisa é o documento português. Em 2 de outubro de 2026, `doctoralia.pt` não respondeu a nenhum pedido, de modo que a entidade portuguesa, o seu NIPC e a política local não ficaram verificados.

> **Por isso este artigo não nomeia a entidade portuguesa.** As condições abaixo vêm das políticas do mesmo grupo publicadas em Espanha e em Itália, para a mesma Plataforma de Profissionais. Confirme a entidade e o NIPC no contrato antes de assinar, porque é quem responde perante a CNPD.

## Três papéis, não um

As políticas do grupo Docplanner descrevem a mesma estrutura em cada país onde foi possível lê-las, e separam o que o fornecedor decide do que a clínica decide.

| Que dados | Papel do portal | O que implica para a clínica |
|---|---|---|
| Os dados dos seus pacientes tratados na plataforma | ✓ Subcontratante | Precisa do contrato do artigo 28 e as instruções são suas |
| A relação comercial: contrato, faturas, reclamações | Responsável independente pelo tratamento | ✗ Não se negocia no seu contrato |
| Infraestrutura técnica e arquitetura do produto | ~ Responsabilidade conjunta entre empresas do grupo | Existe um acordo interno de repartição que não assina |
| A conta que o paciente cria na plataforma | Relação direta entre o paciente e a plataforma | ✗ Fora do seu perímetro |

A primeira linha é a que lhe interessa e está escrita sem rodeios: quando a clínica usa a plataforma para tratar dados pessoais dos seus próprios clientes, pacientes ou colaboradores, a clínica age como responsável pelo tratamento e o fornecedor age como subcontratante.

É boa notícia e obrigação na mesma frase. Os dados dos seus pacientes continuam seus, e o artigo 28 do RGPD exige um contrato assinado com conteúdo mínimo definido. Desenvolvemos isso em [a subcontratação do RGPD no seu software](/pt/blog/subcontratacao-rgpd-software-dentario/).

A segunda linha é a que surpreende. Para a sua própria relação comercial com a clínica, o portal decide sozinho e assume-o por escrito: nessas finalidades determina de forma independente como trata os dados e é o único responsável por essas atividades.

## Um sentido ou dois, e a diferença está nos campos

A descrição técnica que o grupo publica está na página de integrações do mercado espanhol e fala de uma API bidirecional robusta e segura, com um fluxo de dados constante: as marcações feitas no portal aparecem de imediato no software integrado, e qualquer alteração feita na agenda local reflete-se no portal.

É uma descrição técnica, não um compromisso contratual. Não publica latência, não publica janela de nova tentativa e não diz o que acontece quando a ligação cai a meio da manhã.

Sobretudo, "bidirecional" é uma frase sobre a agenda. Não diz nada sobre a ficha, e é aí que surgem as surpresas: um portal pode escrever as marcações sem tocar na ficha, ou criar um duplicado em cada novo paciente que marca. Os dois comportamentos chamam-se "integração" num folheto.

![Vista semanal da agenda, com uma coluna para cada profissional](/screenshots/schedule-week.png)

*A agenda em vista semanal, uma coluna por profissional.*

## A vaga dos trinta segundos

O caso que parte uma integração não é a marcação normal, é a simultânea. A receção dá uma vaga ao telefone às 10:14:30 e alguém marca-a no portal às 10:14:45, quando a disponibilidade publicada ainda não tinha sido atualizada.

Nenhuma das partes publica o que sucede então. A pergunta não se resolve a ler: resolve-se a pedi-la por escrito antes de assinar e a testá-la depois.

> **Teste isto você, com uma vaga real e um cronómetro.** Bloqueie uma vaga na agenda e meça quanto tempo continua visível no portal. Depois faça o inverso. O número que sair é o seu risco de marcação dupla, e é o único dado desta decisão que ninguém lhe põe no contrato.

![Ficha do paciente, separador de dados pessoais com os campos de contacto](/screenshots/patients.png)

*O separador de dados do paciente, com os campos que uma integração pode escrever.*

## O que combinar por escrito antes de ligar o que for

1. **Peça o sentido de cada campo**, um a um: o que o portal escreve na sua ficha e o que lê dela.
2. **Defina o que acontece num conflito** de vaga e quem decide, como procedimento e não como boa intenção.
3. **Assine o contrato de subcontratação** antes de ativar a integração, não depois do primeiro paciente.
4. **Peça a lista de subcontratantes** e anote a data em que lhe foi entregue.
5. **Decida que campos nunca passam**: alergias, notas clínicas, valores em dívida. Um portal de marcações não precisa do odontograma.
6. **Combine a saída antes da entrada**: como exporta o histórico de marcações, o que acontece ao perfil e o que acontece às avaliações.
7. **Faça um piloto com um só profissional** e uma faixa da semana, durante duas semanas.
8. **Registe a integração no registo de atividades de tratamento**, porque é um fluxo de dados novo.

O ponto seis é o que quase ninguém faz e o que custa mais caro depois. Perguntar pela saída enquanto lhe vendem a entrada é o único momento em que obtém resposta escrita.

## O que o seu próprio software tem de saber fazer

Uma integração só vale o que vale a agenda que está por trás. É isto que decide se o portal ajuda ou duplica o trabalho.

- **Uma API própria** sobre a agenda e os pacientes, para que a integração não dependa de entrar na lista de alguém.
- **Bloqueios de disponibilidade a sério**, por profissional e por gabinete, que o portal leia em vez de adivinhar.
- **A origem de cada marcação**, para saber quantas vêm do portal e quantas do telefone antes de renovar a mensalidade.
- **Campos de contacto separados dos clínicos**, para que uma integração nunca leia nem escreva o que não lhe diz respeito.
- **Registo de acessos** com utilizador, data e operação, incluindo os acessos de uma integração. Tratamos disso em [auditoria de acessos](/pt/blog/auditoria-de-acessos/).
- **Exportação completa do histórico de marcações**, porque no dia em que mudar de portal esse histórico é tudo o que lhe fica.

No Dentalpin a agenda tem API própria, a origem de cada marcação fica registada e os campos de contacto vivem separados dos clínicos, pelo que pode ligar o portal que quiser sem esperar por uma certificação. O código está publicado e os [preços](/pt/precos/) também.

Isto não é aconselhamento jurídico. O contrato de subcontratação e o registo dependem de como a sua clínica trata os dados, e convém revê-los com o seu consultor antes de ativar uma integração.

## Fontes

- Doctoralia, "Integraciones Agenda online", página de integrações do grupo, sobre a API bidirecional, a lista de parceiros integrados e o rodapé com os treze países onde o grupo opera, incluindo Portugal. Consultado em 2 de outubro de 2026. <https://pro.doctoralia.es/integraciones>
- Doctoralia Internet S.L., política de privacidade da Plataforma de Profissionais, pontos 1.1 (responsável independente), 1.2 (responsabilidade conjunta) e 2 (subcontratante). Consultado em 2 de outubro de 2026. <https://www.doctoralia.es/privacidad>
- Docplanner Italy S.r.l., política de privacidade equivalente, com a mesma estrutura de papéis para a mesma plataforma. Consultado em 2 de outubro de 2026. <https://www.doctoralia.it/privacy>
- `doctoralia.pt` não respondeu a nenhum pedido em 2 de outubro de 2026, pelo que a entidade portuguesa e a política local não foram verificadas nesta pesquisa.
- Regulamento (UE) 2016/679, artigo 28, sobre o subcontratante e o conteúdo mínimo do contrato. Consultado em 2 de outubro de 2026.
