---
title: "Montar serviços de integração sobre software dentário open source"
description: "O software é gratuito, o serviço não: instalação, migração, cópias testadas e apoio. O que a licença permite e o contrato de subcontratante que tem de assinar."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, integradores, servicos, rgpd, software-dentario]
---

É possível montar um negócio de serviços sobre software dentário open source, e aquilo que cobra nunca é o programa. Cobra a instalação, a migração de dados, as cópias de segurança que alguém restaurou mesmo, as atualizações e estar contactável quando a clínica não consegue abrir a agenda numa segunda-feira de manhã. Duas coisas decidem se o negócio se aguenta: o que a licença lhe permite fazer e o facto de que, ao tocar em dados de pacientes, passa a ser subcontratante, com contrato para assinar.

Nenhuma das duas é um obstáculo. São o trabalho, e o trabalho fatura-se.

## O que vende não é software, é segunda-feira às nove

Uma clínica pequena não compra tecnologia. Compra a certeza de que a receção consegue abrir a agenda. O catálogo de serviços que sai daí é curto e repete-se em cada instalação.

- **Instalação e endurecimento.** Servidor, certificado, firewall, contas de sistema e uma configuração que não dependa de se lembrar de como a deixou.
- **Migração de dados.** Tirar pacientes, histórico clínico, orçamentos e consultas do programa anterior, e conciliar os totais antes de dar a carga por boa.
- **Cópias de segurança testadas.** Uma cópia que nunca foi restaurada não é uma cópia, é um ficheiro. O restauro de teste é um entregável com data.
- **Atualizações.** Versões menores, a atualização maior do PostgreSQL de poucos em poucos anos e uma janela de manutenção combinada com a clínica.
- **Apoio com horário escrito.** Não «quando puder». Este horário, este canal, este tempo de resposta.
- **Formação da equipa.** Duas sessões curtas no arranque e uma aos três meses valem mais do que um manual de cinquenta páginas.

![Ecrã inicial com as consultas do dia, quem está na clínica, os pagamentos em atraso e os últimos pacientes](/screenshots/home.png)

*O ecrã que a equipa olha logo pela manhã. Quando não carrega, a clínica liga a quem lhe montou o servidor.*

## Leia a licença antes de fazer um preço

Open source não quer dizer «faça o que quiser». Muitos produtos deste mercado são publicados sob Business Source License 1.1, que é um modelo com espaços por preencher, e esses espaços mudam de projeto para projeto.

O texto base da BSL 1.1 concede, literalmente, «the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work». O uso em produção, que é exatamente o que o seu cliente faz o dia todo, depende do Additional Use Grant que quem publica preencher.

| O que quer fazer | Sob uma BSL 1.1 |
|---|---|
| Ler e auditar o código | ✓ Concedido no texto base |
| Modificá-lo para um cliente | ✓ Concedido no texto base |
| Executá-lo no servidor de uma clínica | ~ Depende do Additional Use Grant |
| Faturar as suas horas de instalação e manutenção | ~ A licença rege o software, não o seu tempo |
| Revendê-lo como SaaS multicliente seu | ✗ É habitualmente a restrição expressa |

É a quarta linha que se lê ao contrário. Uma licença de software impõe condições ao uso e à distribuição do software, não à sua faturação de consultoria; o que pode impedir é a montagem concreta que queria faturar.

> **A fronteira está em montar o seu próprio SaaS, não em cobrar por instalar.** Alojar a instância de uma clínica para essa clínica e cobrar-lhe a manutenção é um caso diferente de levantar uma plataforma multicliente que concorre com quem publica o software. Se o seu modelo se aproxima dessa linha, a própria licença diz o que fazer: comprar uma licença comercial ao licenciante, ou abster-se.

Na dúvida, pergunte antes de assinar com o cliente. Os projetos sob BSL costumam publicar um contacto para acordos alternativos de licenciamento, e essa conversa custa um email.

Isto não é aconselhamento jurídico. É a leitura de um texto público, e o contrato concreto tem de passar por um advogado.

## Assim que toca em dados de pacientes é subcontratante

É aqui que muitas empresas de informática competentes criam um problema evitável. Se administra o servidor onde vive o histórico clínico, trata dados de saúde por conta da clínica, e o RGPD tem uma palavra para si.

A Comissão Nacional de Proteção de Dados diz-lhe diretamente que «os responsáveis pelos tratamentos e os subcontratantes têm um vasto conjunto de obrigações legais em matéria de tratamento de dados pessoais», e enumera-as: o registo de atividades de tratamento previsto no artigo 30.º do RGPD, cujo conteúdo difere consoante se seja responsável ou subcontratante, a notificação de violações de dados à CNPD prevista no artigo 33.º, a designação de encarregado de proteção de dados e a avaliação de impacto.

Traduzido para a sua semana de trabalho, são quatro decisões concretas:

1. **Assine o contrato antes de tocar no primeiro dado**, não depois da migração. A data do contrato deve ser anterior ao seu primeiro acesso.
2. **Declare os seus subcontratantes.** Se o servidor está num alojador, esse alojador é um deles, e a clínica tem de o poder autorizar.
3. **Documente as instruções.** Um email da clínica a pedir uma exportação é uma instrução documentada. Um telefonema não deixa rasto.
4. **Combine o que acontece no fim.** Devolução ou eliminação dos dados quando o serviço termina, com prova escrita do que fez.

> **O contrato de subcontratação não é papelada, é o limite da sua responsabilidade.** Sem ele, qualquer incidente discute-se sem um documento a dizer o que lhe tinham pedido e o que não. Com ele, o âmbito daquilo que administrava está por escrito.

## Os três modelos de cobrança que se aguentam

Os três funcionam. O que não funciona é misturá-los sem o dizer, porque o cliente acaba a acreditar que a manutenção vinha incluída na instalação.

| Modelo | O que cobre | Quando encaixa |
|---|---|---|
| Projeto fechado | Instalação, migração e formação, com preço e âmbito fixos | Abertura de clínica, ou mudança de programa |
| Avença mensal | Cópias, atualizações, monitorização e apoio dentro do horário | Clínicas sem informático próprio, ou seja, quase todas |
| Bolsa de horas | Trabalho pontual fora do âmbito da avença | Integrações, relatórios à medida, mudanças de equipamento |

A avença é o que transforma isto num negócio em vez de uma sucessão de obras. É também a que obriga à disciplina da monitorização, porque cobrar uma mensalidade sem saber se o servidor ainda faz cópias é vender um seguro sem olhar para o risco.

## Uma instalação que consiga repetir na clínica seguinte

A primeira instalação demora o que demora. A quinta só é rentável se a primeira deixou um procedimento escrito.

1. **Inventarie o que existe.** Que programa usam, que versão, onde estão os dados e quem tem hoje a palavra-passe de administrador.
2. **Monte um ambiente de testes** a partir de uma cópia dos dados reais, nunca contra a instalação que a clínica está a usar.
3. **Migre e concilie números.** Número de pacientes, consultas futuras, orçamentos abertos e saldo em dívida. Se um total não bate certo, não terminou.
4. **Corra uma semana em paralelo**, com o programa antigo ainda disponível para leitura.
5. **Faça um restauro de teste** cronometrado a partir da cópia, e anote quanto demorou.
6. **Dê formação em duas sessões curtas**, uma de receção e agenda, outra de gabinete.
7. **Mude de sistema num dia calmo**, nem segunda-feira nem véspera de férias.
8. **Entregue as credenciais por escrito** ao responsável da clínica, com a lista de serviços e onde está cada coisa.

![Diagrama da instalação no seu servidor: navegador, Caddy na porta 443, frontend Nuxt, API e base de dados PostgreSQL](/diagrams/install-stack.svg)

*As peças por que passa a ser responsável no dia em que assina a manutenção. Cada caixa tem alguém que a atualiza, e esse alguém é você.*

## O SLA que a clínica vai perguntar sem usar a palavra

Nenhuma clínica dentária pede um SLA. Pede saber a quem liga na terça-feira às oito e meia. Ponha estas cinco respostas por escrito e terá escrito o acordo:

- **Horário de cobertura**, e o que acontece fora dele, sábados incluídos se a clínica abrir.
- **Tempo de resposta e tempo de resolução previsto**, que não são a mesma coisa e convém separar.
- **Quanta informação se pode perder** no pior caso, ou seja, de quanto em quanto tempo se faz cópia.
- **Quanto tempo leva a voltar a trabalhar** a partir da última cópia, medido num teste real e não estimado.
- **Quem é o titular do servidor e dos dados**, que deve ser sempre a clínica, mesmo que seja você a administrar.

## Escreva você a cláusula de saída

O dia em que deixam de trabalhar juntos chega em todos os contratos, e corre melhor quando estava previsto. É também o argumento comercial mais forte que tem contra um fornecedor fechado.

- **As credenciais são da clínica**, num gestor de palavras-passe que lhe pertence, desde o primeiro dia.
- **Os dados saem num formato aberto** documentado, e demonstra-o uma vez por ano exportando a sério.
- **O procedimento está escrito** num documento que a clínica guarda, não na sua cabeça.
- **A licença sobrevive à sua empresa.** Com software livre ou de código disponível, outro informático pode continuar sem renegociar com ninguém.

> **Um fornecedor que sai sem deixar o sistema nas mãos da clínica não é um fornecedor, é um cadeado.** O que torna o seu serviço atrativo face a uma licença fechada é exatamente isso: a clínica poder substituí-lo e não perder nada.

## Onde encaixa o Dentalpin

O Dentalpin é publicado sob BSL 1.1 e o seu ficheiro `LICENSE` preenche as casas discutidas acima: a limitação de uso proíbe «providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work», a data de mudança são quatro anos após a publicação e a licença de destino é a Apache 2.0. Para um integrador, isso significa que instalar, alojar e manter a instância de uma clínica concreta fica num sítio diferente de lançar um SaaS dentário concorrente, e que se o seu modelo se aproximar dessa linha o próprio ficheiro remete para acordos alternativos com o licenciante. O que a clínica paga pelo produto está na [página de preços](/pt/precos/).

## Fontes

- [Business Source License 1.1, texto da licença](https://mariadb.com/bsl11/), MariaDB. Consultado a 2 de setembro de 2026.
- [Outras obrigações](https://www.cnpd.pt/organizacoes/outras-obrigacoes/), Comissão Nacional de Proteção de Dados. Consultado a 2 de setembro de 2026.
- [Orientações 07/2020 sobre os conceitos de responsável pelo tratamento e de subcontratante](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), Comité Europeu para a Proteção de Dados, versão final adotada a 7 de julho de 2021. Consultado a 2 de setembro de 2026.
- Ficheiro `LICENSE` do repositório do Dentalpin. Consultado a 2 de setembro de 2026.
