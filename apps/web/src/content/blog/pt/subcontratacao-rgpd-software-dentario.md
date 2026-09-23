---
title: "O contrato de subcontratação com o fornecedor do software dentário: o que tem de dizer"
description: "O que o artigo 28.º do RGPD exige no contrato com o seu software de gestão: instruções documentadas, subcontratantes, auditorias, dever de sigilo e fim do contrato."
pubDate: 2026-09-23
tags: [rgpd, protecao-de-dados, contratos, fornecedores, dados-de-saude]
translationKey: contrato-encargado-tratamiento-software-dental
---

O fornecedor do seu software trata dados de pacientes por sua conta, é subcontratante para efeitos do RGPD, e o artigo 28.º obriga a um contrato escrito com conteúdo definido: objeto, duração, natureza e finalidade do tratamento, tipo de dados, categorias de titulares e as oito obrigações das alíneas a) a h). Em Portugal acresce uma camada que o RGPD não prevê: a Lei 58/2019 sujeita a dever de sigilo os prestadores de serviços do responsável pelo tratamento de dados de saúde, e exige que o titular seja notificado de qualquer acesso aos seus dados.

Isto não é aconselhamento jurídico. Todas as fontes oficiais estão no fim, consultadas a 23 de setembro de 2026.

## Quem é subcontratante à volta de um software dentário

Subcontratante é quem trata dados por sua conta, seguindo as suas instruções, sem decidir as finalidades. Num software de gestão de clínica dentária raramente é uma só empresa.

A lista costuma incluir quem vende o programa, quem aloja o servidor onde vive a base de dados, quem guarda a cópia de segurança e quem entra por acesso remoto quando liga para o suporte. Todos eles veem histórico clínico.

O n.º 10 do artigo 28.º fecha a porta das traseiras: o subcontratante que determine as finalidades e os meios do tratamento é considerado responsável pelo tratamento quanto a esse tratamento. É a regra que transforma uma cláusula de uso secundário de dados num problema diferente e maior.

![Ficha de paciente com o separador de informação aberto: contactos, contacto de emergência e antecedentes com alergias e doenças](/screenshots/patients.png)

*São estas as categorias de dados que o contrato tem de descrever, e é por isso que escrever "dados de pacientes" não chega.*

## As oito obrigações que o contrato tem de estipular

O n.º 3 do artigo 28.º começa por fixar o enquadramento e depois enumera o que o contrato estipula "designadamente".

| Alínea | A que fica obrigado o subcontratante | O que significa numa clínica |
|---|---|---|
| a) | Tratar os dados apenas mediante instruções documentadas suas | Nada de usar a base de pacientes para fins próprios |
| b) | Assegurar o compromisso de confidencialidade de quem acede | Inclui os técnicos de suporte, não só os funcionários |
| c) | Adotar todas as medidas do artigo 32.º | Cifragem, cópias, controlo de acessos, e quais por escrito |
| d) | Respeitar as condições para contratar outro subcontratante | A lista de subcontratantes e o seu direito de oposição |
| e) | Prestar-lhe assistência nos direitos dos titulares | Poder exportar tudo o que respeita a um paciente que pede |
| f) | Prestar assistência quanto aos artigos 32.º a 36.º | Avisar de uma violação a tempo das suas 72 horas |
| g) | Apagar ou devolver os dados no fim da prestação | À escolha do responsável, não à dele |
| h) | Disponibilizar a informação de conformidade e permitir auditorias | Incluindo inspeções por si ou por auditor que mandate |

O parágrafo a seguir à alínea h) é o que mais falta nos contratos: o subcontratante informa imediatamente o responsável se, na sua opinião, uma instrução violar o regulamento.

> **Um contrato que copia o artigo 28.º não cumpre o artigo 28.º.** O Comité Europeu para a Proteção de Dados di-lo sem rodeios: o contrato de tratamento "não deve simplesmente reproduzir as disposições do RGPD" e tem de incluir informações sobre as medidas de segurança a adotar, a obrigação de obter aprovação antes de as alterar, e a sua revisão regular. Um anexo de segurança com três linhas genéricas é exatamente o que essa frase afasta.

## O dever de sigilo da Lei 58/2019 alcança o fornecedor

Esta é a camada portuguesa por cima do artigo 28.º, e não se deduz do regulamento.

O n.º 4 do artigo 29.º da Lei 58/2019 estende o dever de sigilo bem para lá da equipa clínica. Estão obrigados "os titulares de órgãos, trabalhadores e prestadores de serviços do responsável pelo tratamento de dados de saúde e de dados genéticos, o encarregado de proteção de dados", além dos profissionais de saúde com acesso a dados de saúde.

A empresa que faz o suporte remoto é um prestador de serviços do responsável pelo tratamento. O dever de sigilo alcança-a por força da lei, e o contrato deve refleti-lo em vez de o ignorar.

> **O n.º 6 do mesmo artigo é um requisito de software, não de contrato.** "O titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais, cabendo ao responsável pelo tratamento assegurar a disponibilização desse mecanismo de rastreabilidade e notificação." Um programa sem registo de acessos não permite cumprir isto, e a obrigação é da clínica.

O n.º 1 do mesmo artigo fixa ainda o princípio pelo qual se desenham os perfis de utilizador: o acesso rege-se "pelo princípio da necessidade de conhecer a informação".

## A lista de subcontratantes é a parte que ninguém lê

Um software em nuvem raramente se sustenta sozinho. Por baixo há normalmente um fornecedor de infraestrutura, um de cópias de segurança, um de envio de SMS e, cada vez mais, um de funcionalidades de inteligência artificial.

O n.º 2 do artigo 28.º dá-lhe duas formas de autorização e convém saber qual assinou. Pode ser específica, para um subcontratante concreto, ou geral, e nesse caso o subcontratante tem de o informar de qualquer aumento ou substituição, **dando-lhe a oportunidade de se opor**.

O Comité Europeu concretiza o que precisa para decidir: uma lista dos subcontratantes previstos com, para cada um, a localização, a atividade que lhe será atribuída e a prova das garantias aplicadas. Acrescenta que dar acesso geral a uma página atualizada de vez em quando não chega, porque tem de o informar ativamente de cada novo subcontratante previsto.

Três perguntas resolvem quase tudo:

- **Onde está a lista, e quem avisa quando muda?** Uma página publicada não é uma notificação.
- **Quantos dias tenho para me opor, e com que consequência?**
- **O que fica fora do Espaço Económico Europeu?** A alínea a) cobre as transferências, por isso isto vai no contrato.

## A cláusula de treino de modelos que pode recusar

É aqui que os contratos de fornecedores se mexeram nos últimos anos, e assina-se sem ler.

A forma é reconhecível. Numa secção sobre dados do cliente, a clínica concede ao fornecedor uma licença sobre esses dados para treinar ou melhorar modelos, para análise comparativa, ou para qualquer outra finalidade que sirva a atividade do fornecedor, por vezes garantindo a clínica que obteve os consentimentos necessários. Não é hipótese: há fornecedores do setor que publicam condições desta forma.

Uma cláusula assim dificilmente encaixa na alínea a). Quem usa os dados para fins próprios deixa de os tratar apenas mediante instruções documentadas, e o n.º 10 do artigo 28.º diz o que acontece a seguir.

A resposta cabe numa frase acrescentada ao contrato, limitando o uso dos dados à execução da prestação.

![Ficha clínica de um paciente com o odontograma, alertas clínicos, plano de tratamento em curso e próxima consulta](/screenshots/dental-chart.png)

*É isto que tem de voltar às suas mãos antes de autorizar qualquer apagamento, e num formato que outro programa consiga ler.*

## O que acontece aos dados no fim do contrato

A alínea g) dá-lhe a escolha entre apagar e devolver, e é a cláusula que mais vezes fica em branco.

A escolha não é totalmente livre, porque os prazos de conservação do processo clínico continuam a correr depois de o contrato de software terminar. Mandar apagar tudo antes de ter recuperado o histórico deixa-o em incumprimento de outra norma, e depois de fechada a conta não há exportação possível.

A ordem correta, e o contrato deve fixar os dois passos:

1. **Primeiro a exportação**, em formato documentado, com prazo em dias e custo, se existir.
2. **Depois a verificação**, sobre um conjunto de dados aberto fora do ambiente do fornecedor.
3. **Só então o apagamento**, confirmado por escrito, cópias incluídas.

"Devolução ou apagamento à escolha do responsável", sem formato e sem prazo, não é executável no dia em que precisa.

## Ter servidor próprio muda o contrato de sítio, não o elimina

É o equívoco mais comum nas clínicas que instalam o programa numa máquina sua. Se a base de dados está na clínica, é tentador assumir que já não há subcontratantes.

Continua a haver, apenas outros:

1. **O suporte que entra por acesso remoto** vê processos clínicos durante toda a sessão.
2. **A cópia de segurança externa**, assim que sai da clínica, onde quer que aterre.
3. **O fornecedor de alojamento**, se o servidor está alugado num centro de dados.
4. **O informático externo** que administra o sistema, mesmo sendo a mesma pessoa de sempre.
5. **O próprio fabricante do software**, quando a manutenção inclui acesso para atualizar ou diagnosticar.

O que muda mesmo é que as medidas do artigo 32.º passam a ser suas. A cifragem, as cópias testadas e o controlo de acessos deixam de ser a promessa contratual de outro.

## Como rever o contrato que já assinou

Uma primeira passagem não exige advogado.

1. **Encontre o documento.** Se só tem um contrato de serviço sem anexo de proteção de dados, a resposta já está dada.
2. **Percorra as oito alíneas** da tabela acima e marque as que faltam.
3. **Localize a lista de subcontratantes** e o mecanismo de oposição, com prazo.
4. **Confirme o dever de sigilo** dos prestadores, à luz do artigo 29.º da Lei 58/2019.
5. **Leia a secção sobre dados do cliente**, à procura de licenças, treino de modelos ou análises agregadas.
6. **Peça por escrito o que faltar.** Uma adenda assinada corrige um contrato; um email não corrige, mas data a conversa.

## O que pode exigir ao software para isto ser verificável

Três das oito alíneas dependem do que o programa faz, não do que o contrato promete. A alínea e) precisa de uma exportação completa de um paciente. A alínea g) precisa de uma exportação completa da clínica. A alínea h), e em Portugal também o n.º 6 do artigo 29.º, precisa de registo de acessos.

O Dentalpin é código aberto, por isso as medidas técnicas do artigo 32.º auditam-se lendo o código em vez de acreditar num anexo, e os dados vivem numa base PostgreSQL de onde sai uma exportação padrão quando quiser. Pode alojá-lo por sua conta ou contratá-lo gerido, e os [preços](/pt/precos/) estão publicados.

## Fontes

Todas consultadas a 23 de setembro de 2026.

- Regulamento (UE) 2016/679 (RGPD), artigo 28.º na íntegra e artigo 32.º. [Serviço das Publicações da UE, CELEX 32016R0679](https://publications.europa.eu/resource/celex/32016R0679)
- Lei n.º 58/2019, de 8 de agosto, artigo 29.º, tratamento de dados de saúde e dados genéticos. [Diário da República](https://diariodarepublica.pt/dr/detalhe/lei/58-2019-123815982)
- Comité Europeu para a Proteção de Dados, Orientações 07/2020 sobre os conceitos de responsável pelo tratamento e de subcontratante, pontos 126 e 152. [edpb.europa.eu](https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_pt.pdf)
