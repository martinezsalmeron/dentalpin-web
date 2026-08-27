---
title: "Software livre ou proprietário na saúde: o que muda mesmo"
description: "O que a licença de um software de saúde decide de facto, o que não decide, e como verificar em dez minutos em que categoria está a entrar."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [software-livre, open-source, licencas, rgpd, contratos]
---

A licença não decide se um programa serve para a sua clínica. Decide três coisas concretas: quem pode mantê-lo se o fornecedor desaparecer, se pode instalá-lo no seu próprio servidor e em que condições poderá continuar a usá-lo daqui a dez anos.

Tudo o resto, o preço, o apoio técnico, a segurança real e a responsabilidade perante o RGPD, depende do fornecedor e da forma como o sistema é instalado. Nada disso está escrito na licença, e confundir as duas listas é a maneira mais rápida de decidir mal.

## São três categorias, não duas

A conversa habitual opõe «livre» a «proprietário» e deixa de fora a categoria onde está hoje uma parte crescente do mercado.

A Open Source Initiative mantém a definição de referência, na versão 1.9. A primeira frase é a que mais se esquece: «código aberto não significa apenas acesso ao código-fonte». A definição exige ainda que a licença permita a redistribuição, permita obras derivadas e não impeça ninguém «de usar o programa num domínio de actividade específico».

A Free Software Foundation diz o mesmo em quatro liberdades: executar o programa como quiser, estudar como funciona e alterá-lo, redistribuir cópias e distribuir as suas versões modificadas. Para as liberdades 1 e 3, acrescenta o texto, «o acesso ao código-fonte é uma condição prévia».

| | Livre / open source | Código disponível | Proprietário |
|---|---|---|---|
| Vê o código | ✓ Qualquer pessoa | ✓ Publicado | ✗ Não, salvo depósito acordado |
| Pode modificá-lo | ✓ Sim | ✓ Sim | ✗ Não |
| Uso para qualquer fim | ✓ Sem domínio excluído | ~ Há usos excluídos | ~ O que disser o contrato |
| Pode redistribuí-lo | ✓ Sim | ~ Com os mesmos limites | ✗ Não |
| Cumpre a definição da OSI | ✓ Sim | ✗ Não | ✗ Não |
| Licenças típicas | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Contrato do fabricante |

A coluna do meio é real e está a crescer. A Business Source License 1.1 publica o código e permite alterá-lo, mas reserva certos usos, e o próprio texto diz isso sem rodeios: «esta licença não é uma licença de código aberto». Compromete também a obra a passar para uma licença livre numa data fixada.

> **«O código é público» e «é open source» não são a mesma afirmação.** Um fornecedor pode mostrar todas as linhas e continuar a proibir usos concretos. Não é enganoso, é outra categoria, e só a leitura da licença permite saber qual.

## O que a licença decide

- **Quem pode manter o programa quando o fornecedor já não existe.** Com o código e permissão para o alterar, qualquer programador competente pode corrigir o sistema. Não é gratuito nem imediato, mas é possível, e é essa a diferença que conta no dia do anúncio.
- **Onde é executado.** Uma licença livre permite instalar no seu próprio equipamento. Uma subscrição proprietária na nuvem quase nunca permite, por muito que se pague.
- **Se pode auditar o que faz com os dados.** Ler o código é a única forma de confirmar o que sai da clínica e com que frequência, em vez de acreditar numa resposta comercial.
- **O que acontece daqui a dez anos.** Uma licença livre não caduca. Uma subscrição caduca, e leva com ela o acesso ao programa onde está o histórico clínico.

## O que a licença não decide

É aqui que se instalam quase todos os mal-entendidos.

- **Quem responde perante o RGPD.** O artigo 4.º, n.º 7, define como responsável pelo tratamento quem «determina as finalidades e os meios de tratamento», e o artigo 24.º, n.º 1, obriga essa mesma entidade a demonstrar a conformidade. É a clínica, seja qual for o programa. Se o alojamento for de terceiros, o artigo 28.º exige contrato de subcontratação, e a alínea g) do n.º 3 obriga a devolver ou apagar os dados no fim da prestação.
- **Se o programa é um dispositivo médico.** O Regulamento (UE) 2017/745 define dispositivo médico como «qualquer instrumento, aparelho, equipamento, software, implante, reagente, material ou outro artigo» destinado pelo fabricante a um fim médico. Decide o fim a que se destina, nunca a licença.
- **Se é seguro.** Código público é auditável, não auditado. São coisas diferentes e só a segunda protege alguém.
- **Quanto custa.** Há software livre com contratos de apoio caros e software proprietário barato.
- **Se alguém atende a uma sexta-feira às oito da noite.** Isso decide-se num contrato de assistência, e as duas categorias vendem um.

![Ficha de paciente com os alertas clínicos, o plano de tratamento activo e a linha de tempo filtrável por consultas, tratamentos, pagamentos e comunicações](/screenshots/patient-timeline.png)

*Anos de histórico clínico dentro de um programa. A licença não muda quem responde por estes dados: continua a ser a clínica.*

## «Livre» não quer dizer «grátis»

A Free Software Foundation abre a definição com essa distinção: trata-se «de liberdade, não de preço», e convém pensar em «free» como em «liberdade de expressão», não como em «entrada livre». A mesma página lembra que pode ter pago pelas cópias e manter na mesma todas as liberdades.

Na prática o dinheiro não desaparece. Muda de sítio.

| Rubrica | Proprietário, alojado pelo fornecedor | Livre, no seu servidor |
|---|---|---|
| Licença | ~ Por profissional, por gabinete ou por clínica | ✓ Sem custo de licença |
| Servidor e armazenamento | ✓ Incluídos na mensalidade | ✗ A seu cargo |
| Cópias de segurança | ✓ Do fornecedor, com a política dele | ✗ Suas, e há que testá-las |
| Actualizações | ✓ Aplicadas por eles | ~ Suas ou de quem contratar |
| Assistência | ✓ Incluída ou contratada | ~ Comunidade, ou contrato à parte |
| Sair | ~ Depende da exportação deles | ✓ Já tem dados e código |

Um servidor pequeno e bem montado custa pouco. O tempo da pessoa que o actualiza, vigia as cópias e responde quando algo falha não é zero, e é esse o número que ninguém põe na folha de cálculo. Antes de decidir, vale a pena ler o que implica mesmo [alojar software de saúde no seu servidor](/pt/blog/alojar-software-de-saude-no-seu-servidor/).

## Ler uma licença em dez minutos

Não é preciso um advogado para a primeira passagem. É preciso abrir cinco coisas e anotar o que dizem.

1. **Procure o documento LICENSE no repositório público.** Se não houver repositório, a resposta já está dada: é proprietário. Isso não desqualifica nada, só indica que perguntas fazer a seguir.
2. **Veja se o nome da licença consta da lista da OSI.** GPL, AGPL, Apache e MIT constam. A BSL e a família «source available» não.
3. **Procure as palavras «Use Limitation» ou «Additional Use Grant».** Se há usos excluídos, não é uma licença livre, por muito público que o código seja.
4. **Procure uma «Change Date».** Algumas licenças tornam-se livres passado um prazo, muitas vezes quatro anos, e isso muda a conta a longo prazo.
5. **Pergunte se o código publicado é o que está a correr.** Um repositório parado numa versão de há dois anos não é uma rede de segurança.
6. **Peça uma exportação completa antes de assinar.** O [formato que deve exigir](/pt/blog/exportar-dados-do-software/) conta mais do que a licença no dia em que quiser sair.

> **Se só fizer uma verificação, faça a última.** Uma exportação aberta e testada protege nas três categorias. Uma licença livre sem dados exportáveis não salva migração nenhuma.

![Ecrã de relatórios da clínica](/screenshots/reports.png)

*Os relatórios reconstroem-se a partir dos dados. Por isso a pergunta útil antes de assinar é em que formato os dados saem, não com que licença entraram.*

## O que muda em Dezembro de 2027

O Regulamento (UE) 2024/2847, de 23 de Outubro de 2024, conhecido como Regulamento Ciber-Resiliência, fixa requisitos de cibersegurança para produtos com elementos digitais. O artigo 71.º determina a aplicação a partir de **11 de Dezembro de 2027**, com o artigo 14.º desde 11 de Setembro de 2026 e o capítulo IV desde 11 de Junho de 2026.

É uma norma dirigida a fabricantes e distribuidores, não à sua clínica, mas muda a quem pode pedir contas.

- **O software comercial fica abrangido, seja livre ou proprietário.** O que decide é ser fornecido no âmbito de uma actividade comercial.
- **O software livre não monetizado fica de fora.** O considerando 18 esclarece que o fornecimento de software livre e de código-fonte aberto «que não sejam monetizados pelos seus fabricantes não deverá ser considerada como sendo uma atividade comercial».
- **Surge uma figura nova, o «administrador de software de código-fonte aberto»**, definida no artigo 3.º, n.º 14, para pessoas colectivas que sustentam de forma continuada o desenvolvimento de projectos livres destinados a actividades comerciais, com obrigações mais leves do que as de um fabricante.

A leitura prática para uma clínica é curta: a partir dessa data, um projecto comunitário sem empresa por trás e um produto comercial não respondem da mesma forma, e convém saber qual dos dois está a instalar.

## Isto já existe na saúde

Não é uma hipótese de laboratório. O GNU Health descreve-se como «o ecossistema livre de saúde digital, onde a medicina social encontra a informática de saúde de última geração» e publica instalações em hospitais e ministérios de vários países. O OpenEMR apresenta-se como «a solução open source de registo clínico electrónico e de gestão de consultório mais popular» e indica ter certificação ONC nos Estados Unidos.

Nenhum dos dois é um programa dentário, e é exactamente esse o ponto: a pergunta da licença responde-se igual em qualquer especialidade.

## A pergunta que decide

É só uma: **se esta empresa desaparecer amanhã, o que continua a funcionar?**

Se a resposta incluir o código, os dados num formato aberto e um servidor que controla, a licença fez o seu trabalho. Se não incluir nenhuma das três, não há cláusula que a substitua.

O Dentalpin está na categoria do meio, e convém dizê-lo com precisão: o código é público sob a BSL 1.1, com uma limitação de uso que impede oferecer um SaaS concorrente, e com conversão automática para Apache 2.0, uma licença livre, quatro anos depois de cada publicação. Instala-se no seu servidor, a base de dados é PostgreSQL e os [preços](/pt/precos/) estão publicados.

## Fontes

Todas consultadas a 27 de Agosto de 2026.

- Open Source Initiative, *The Open Source Definition*, versão 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, as quatro liberdades. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, texto da licença e aviso «is not an Open Source license». [mariadb.com](https://mariadb.com/bsl11/)
- Regulamento (UE) 2016/679 (RGPD), artigos 4.º/7, 24.º/1, 28.º/1 e 28.º/3, alínea g). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679)
- Regulamento (UE) 2017/745 relativo aos dispositivos médicos, artigo 2.º, n.º 1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32017R0745)
- Regulamento (UE) 2024/2847 (Ciber-Resiliência), considerando 18, artigo 3.º, n.º 14, e artigo 71.º. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32024R2847)
- GNU Health, página do projecto. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, página do projecto. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, documento LICENSE do repositório (Business Source License 1.1).

Isto não é aconselhamento jurídico. A qualificação de um programa como dispositivo médico e a repartição de responsabilidades em matéria de dados pessoais dependem do caso concreto. Consulte o seu advogado antes de decidir.
