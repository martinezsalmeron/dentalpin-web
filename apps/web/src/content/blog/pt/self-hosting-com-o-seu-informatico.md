---
title: "Self-hosting com o seu informático: o que acordar por escrito"
description: "Servidor da clínica entregue a um informático local: o contrato de subcontratação obrigatório, cópias mesmo testadas, acessos, tempos de resposta e cláusula de saída."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [self-hosting, rgpd, copias-seguranca, fornecedores, clinica-dentaria]
---

Se a sua clínica aloja o software no seu próprio servidor e quem o administra é um informático externo, há quatro coisas que têm de ficar por escrito antes de ele mexer em alguma coisa: o contrato de subcontratação, obrigatório assim que tem acesso a dados de pacientes; o que significa exactamente «faço cópias», com uma reposição de teste datada; quem tem as credenciais de administrador e onde estão os dados; e em quantas horas responde na segunda-feira em que a agenda não abre. O resto é pormenor.

Nada disto exige vinte páginas de contrato. Cabe em duas folhas e numa reunião de meia hora, e essa reunião custa menos do que a primeira noite sem agenda.

## O seu informático é subcontratante desde o primeiro dia

A clínica é responsável pelo tratamento dos dados dos seus pacientes. A pessoa ou empresa que administra o servidor onde esses dados estão é subcontratante, mesmo que nunca abra um histórico clínico e mesmo que lhe arranje as impressoras há quinze anos.

O artigo 28.º, n.º 3 do RGPD exige que a relação seja regulada por um contrato que vincule o subcontratante ao responsável pelo tratamento, e o n.º 9 do mesmo artigo fixa a forma: por escrito, incluindo em formato electrónico.

> **Um acordo verbal com o informático de sempre não é um contrato de subcontratação.** A confiança pessoal não substitui o documento, e quem responde perante a CNPD quando ele falta é a clínica, não ele.

Isto não é burocracia defensiva. O contrato é onde finalmente se escreve quem faz as cópias, com que frequência o servidor é actualizado e o que acontece no dia em que deixam de trabalhar juntos, que são exactamente os três pontos de que ninguém se lembra de ter falado quando são precisos.

![Esquema de uma instalação self-hosted: o navegador chega a Caddy por HTTPS, que encaminha /api/* para o backend e o resto para o frontend Nuxt; o backend fala com o PostgreSQL](/diagrams/install-stack.svg)

*Um servidor, quatro processos e uma base de dados. Cada caixa do esquema é algo que alguém tem de manter.*

## As cláusulas que o artigo 28.º já escreve por si

O conteúdo do contrato não fica ao critério de ninguém. Traduzido para linguagem de clínica:

- **Instruções documentadas.** O prestador trata os dados apenas segundo o que a clínica indica, e as indicações existem por escrito, ainda que esse escrito seja um email.
- **Confidencialidade.** Quem tem acesso ao servidor está obrigado a ela, incluindo o técnico que aparece numa terça-feira para trocar um disco.
- **Segurança.** As medidas do artigo 32.º, uma a uma: cifragem, controlo de acessos, cópias, actualizações.
- **Subcontratação seguinte.** Se a máquina está num centro de dados de terceiros, ou se as cópias vão para um fornecedor de armazenamento, isso é subcontratação e precisa da sua autorização. Ou aprova antecipadamente uma lista concreta, ou fica acordado que o avisam por escrito de qualquer alteração e que se pode opor.
- **Ajuda com os direitos dos pacientes.** Quando alguém pede o seu processo ou o seu apagamento, o prestador tem de o conseguir retirar do sistema.
- **Devolução ou apagamento no fim.** Terminado o serviço, os dados são devolvidos ou destruídos, à sua escolha.
- **Auditoria.** Disponibiliza a informação necessária para demonstrar que cumpre e aceita verificações.

Este último ponto tem uma leitura prática que muitas clínicas saltam: a obrigação de escolher um subcontratante com garantias suficientes não se esgota no dia da assinatura. É contínua. Se não voltou a perguntar pelas cópias há dois anos, não as verificou.

## O que se combina de boca e o que devia estar escrito

| Compromisso | Como costuma ser combinado | Como devia ficar escrito |
|---|---|---|
| Cópias de segurança | ~ «Faço cópias todas as noites» | ✓ Frequência, destino, cifragem e quem recebe o aviso quando falha |
| Reposição | ✗ Nunca foi testada | ✓ Um teste documentado por ano, com data e resultado |
| Actualizações | ~ «Quando sair alguma coisa importante» | ✓ Janela mensal acordada e aviso prévio das versões maiores |
| Tempo de resposta | ✗ «Ligue-me e eu vejo» | ✓ Horário, canal e horas de resposta consoante a gravidade |
| Acessos | ~ Uma conta de administrador partilhada | ✓ Contas nominais e revogação no próprio dia da saída |
| Fim da relação | ✗ Sem previsão | ✓ Devolução ou apagamento dos dados e entrega das credenciais |

Nenhuma das casas da direita custa dinheiro. Custa uma conversa incómoda de vinte minutos, uma vez.

## «Faço cópias todas as noites» ainda não diz nada

O artigo 32.º, n.º 1 do RGPD não pede cópias de segurança. Pede duas coisas mais exigentes: a capacidade de restabelecer a disponibilidade e o acesso aos dados pessoais de forma atempada no caso de um incidente físico ou técnico, e um processo para testar, apreciar e avaliar regularmente a eficácia das medidas.

Lido à letra, isto significa que uma cópia que ninguém repôs nunca não prova nada, porque o que a norma mede é a reposição e não o ficheiro.

> **A cópia não se testa no dia em que faz falta.** Testa-se numa terça-feira qualquer, sem pressa, reposta num equipamento à parte, conferindo três números: quantos pacientes existem, qual é a última factura e qual foi a última consulta registada.

Peça que esse teste seja um entregável com data e não uma promessa. Um email de duas linhas por ano a dizer «reposta a cópia de 14 de Maio num servidor de testes, 3.412 pacientes, última factura 2026/0871» vale mais do que qualquer cláusula.

A CNPD aprovou em 10 de Janeiro de 2023 uma directriz sobre medidas organizativas e de segurança dirigida precisamente «aos responsáveis pelos tratamentos e aos subcontratantes», depois de uma série de ataques a sistemas de informação. Vale a pena lê-la com o seu informático em cima da mesa, porque é a lista que a autoridade espera ver aplicada.

## Duas datas que já estão no calendário, olhe para elas ou não

Há manutenção que não depende da opinião de ninguém, porque tem data publicada.

1. **A versão maior do PostgreSQL.** O projecto dá cinco anos de suporte a cada versão maior a contar do lançamento. O PostgreSQL 14 recebe a última actualização a 12 de Novembro de 2026 e o 15 a 11 de Novembro de 2027. Se a sua base de dados está numa delas, a migração já tem prazo e devia ter orçamento.
2. **O certificado.** Os certificados Let's Encrypt são válidos 90 dias e recomenda-se renová-los a cada 60. A própria entidade avisa que não há forma de ajustar essa duração e que não há excepções. Existe ainda um programa opcional de certificados de seis dias, renovados de três em três. Está tudo automatizado até ao dia em que alguém fecha o porto 80 e a renovação deixa de funcionar em silêncio.

As duas datas entram no contrato como janela de manutenção, não como favor. E a segunda leva um nome associado: quem vigia que a renovação continua a acontecer.

## As chaves são da clínica, ainda que seja ele a usá-las

É aqui que mais clínicas ficam presas, e raramente por má fé do prestador. Ninguém falou do assunto.

- **A palavra-passe de administrador está no gestor de palavras-passe da clínica**, não apenas no portátil do informático.
- **Contas nominais, nunca uma conta «admin» partilhada.** Se três pessoas usam o mesmo acesso, o registo de acessos não serve para nada no dia em que for preciso lê-lo.
- **O domínio e o DNS em nome da clínica.** Um domínio registado pelo prestador é uma negociação futura disfarçada de comodidade.
- **Uma cópia de segurança num sítio que ele não controla.** Não é desconfiança: se um ransomware entrar pelo posto dele, as cópias dele e as suas estão do mesmo lado.
- **Revogação no próprio dia.** Quando alguém sai do prestador ou da clínica, o acesso é retirado nesse dia, e isso acorda-se antes para não ter de ser pedido como um favor.

![Ecrã inicial com as consultas do dia, quem está na clínica, os pagamentos em atraso e os últimos pacientes atendidos](/screenshots/home.png)

*Este é o ecrã que tem de estar aberto às oito e meia. Tudo o que se acorda com o informático existe para que ele apareça.*

## O tempo de resposta, em horas e em português corrente

Um acordo de serviço para uma clínica de três gabinetes não precisa de vocabulário de multinacional. Precisa de três linhas.

- **A clínica não consegue trabalhar.** A agenda não abre, o servidor não responde. Esta linha acorda-se com um número de telefone e não com um email, e com um número de horas.
- **Funciona com incómodos.** Uma impressora, um posto, uma integração em baixo. No próprio dia ou no dia útil seguinte.
- **Dúvida ou melhoria.** Uma semana, e não faz diferença.

Acrescente os dois pormenores de que toda a gente se esquece: o que acontece em Agosto e no Natal, e quem responde se o informático estiver de baixa. Um prestador de uma só pessoa serve perfeitamente uma clínica pequena, desde que a substituição esteja escrita nalgum lado.

## A cláusula de saída assina-se à entrada

Mudar de informático é normal e não tem de ser um drama. Passa a sê-lo quando não foi previsto.

A alínea g) do n.º 3 do artigo 28.º já lhe dá o direito: terminado o serviço, os dados são apagados ou devolvidos. Concretize-o enquanto a relação está boa.

1. **Em que formato é entregue a base de dados**, com o despejo completo e não uma exportação parcial para folha de cálculo.
2. **Que credenciais são transferidas**, e em quantos dias.
3. **Quem acompanha a transição**, e quantas horas estão incluídas.
4. **Prova de apagamento.** A destruição deve abranger as cópias existentes nos sistemas do prestador, com confirmação escrita.

> **Nenhuma destas quatro se negoceia bem no dia da saída.** Negoceiam-se no primeiro dia, quando as duas partes querem que a relação comece bem.

## A reunião de meia hora

Se quiser resolver isto amanhã, esta é a ordem de trabalhos:

1. Assinar o contrato de subcontratação com os pontos do artigo 28.º, n.º 3.
2. Escrever onde vão as cópias, com que frequência e quem recebe o aviso de falha.
3. Marcar data para a próxima reposição de teste.
4. Anotar a versão de PostgreSQL que corre hoje e a data de fim de suporte.
5. Pôr a palavra-passe de administrador no gestor de palavras-passe da clínica.
6. Transformar as contas partilhadas em contas nominais.
7. Acordar os três níveis de tempo de resposta e a substituição nas férias.
8. Redigir a cláusula de saída.

Nada desta lista exige saber informática. Exige que alguém da clínica se sente meia hora com quem administra o servidor.

## Onde encaixa o Dentalpin

O Dentalpin é software de gestão dentária open source que se instala no seu próprio servidor com `docker compose`, por isso este acordo aplica-se tal e qual como a qualquer outra instalação self-hosted: o software não cobra licença, e o trabalho que custa dinheiro é o que acabou de ler. Se quiser ver primeiro o que está incluído antes de decidir quem o opera, está na [página de preços](/pt/precos/), e o processo está descrito passo a passo em [instalar o Dentalpin em três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/).

Este artigo é orientação geral e não aconselhamento jurídico. Para o contrato concreto da sua clínica, confirme com o seu advogado.

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigos 28.º n.os 1, 3 e 9 e 32.º n.º 1. Texto oficial consultado em [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) a 3 de Setembro de 2026.
- CNPD, [«Diretriz sobre medidas de segurança»](https://www.cnpd.pt/comunicacao-publica/noticias/diretriz-sobre-medidas-de-seguranca/), Diretriz/2023/1 de 10 de Janeiro de 2023, consultado a 3 de Setembro de 2026.
- CNIL, [«Sous-traitance: exemple de clauses»](https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses), consultado a 3 de Setembro de 2026, quanto à autorização de subcontratantes seguintes e à prova escrita da destruição.
- PostgreSQL Global Development Group, [«Versioning Policy»](https://www.postgresql.org/support/versioning/), consultado a 3 de Setembro de 2026.
- Let's Encrypt, [«FAQ»](https://letsencrypt.org/docs/faq/), consultado a 3 de Setembro de 2026.
