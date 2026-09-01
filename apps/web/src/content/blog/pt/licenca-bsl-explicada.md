---
title: "O que é a licença BSL e o que lhe permite fazer"
description: "A BSL permite descarregar, auditar e executar o software no seu servidor, proíbe revendê-lo como SaaS e caduca: cada versão passa a open source em quatro anos."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [licencas, open-source, bsl, contratos, software-dentario]
---

A Business Source License deixa-o descarregar o código, lê-lo, modificá-lo e executá-lo no seu próprio servidor sem pagar nada. Proíbe uma única coisa: revender esse mesmo software como serviço comercial que concorra com quem o publica. E tem prazo de validade, porque cada versão passa automaticamente para uma licença open source a sério, no máximo quatro anos depois de ter sido publicada.

Essa terceira parte é a que quase ninguém lê e é a que decide se a licença lhe serve.

> **A BSL não é uma licença open source, e é ela própria que o diz.** O seu aviso legal começa assim: «The Business Source License (this document, or the "License") is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License».

## As cinco casas que quem publica preenche

A BSL não é uma licença fechada como a MIT ou a GPL, em que o texto é sempre igual. É um modelo com cinco espaços por preencher, e quem publica o software é que os preenche.

Isso significa que «está sob BSL» ainda não lhe diz o que pode fazer. Tem de olhar para os espaços.

| Parâmetro | O que define |
|---|---|
| Licensor | Quem publica o software e a quem compra se precisar de uma licença comercial |
| Licensed Work | Que software e que versões exactas esta licença cobre |
| Additional Use Grant | Que utilização em produção é permitida sem pagar |
| Change Date | A data em que essa versão muda de licença sozinha |
| Change License | A licença open source para a qual passa nesse dia |

Duas destas cinco são a negociação inteira: o **Additional Use Grant**, que marca até onde pode usá-lo gratuitamente em produção, e a **Change Date**, que marca quando a restrição deixa de contar.

O exemplo publicado pelos próprios autores da licença é o MariaDB MaxScale. O seu Additional Use Grant diz: «You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production». Menos de três servidores, gratuito. A partir daí, licença comercial.

## O que a BSL permite e o que não permite

O texto base concede copiar, modificar, criar obras derivadas, redistribuir e fazer uso não produtivo. A utilização em produção depende da casa que vimos acima.

| Acção | Sob uma licença BSL |
|---|---|
| Descarregar e ler todo o código | ✓ Sempre permitido |
| Modificá-lo para o seu caso | ✓ Sempre permitido |
| Redistribuí-lo com a licença anexa | ✓ Sempre permitido |
| Usá-lo em testes e em desenvolvimento | ✓ Sempre permitido |
| Usá-lo em produção | ~ Só até onde chegar o Additional Use Grant |
| Revendê-lo como serviço comercial concorrente | ✗ Exige licença comercial |

A linha âmbar é a única que exige leitura atenta. «Produção» significa a utilização real de onde sai valor de negócio, ou seja, a sua clínica a atender pacientes verdadeiros, não uma instalação de teste num portátil.

## Não ser open source não é um defeito, mas é um dado

A Open Source Initiative mantém a definição de open source, e a sua cláusula 6 diz que «a licença não pode restringir ninguém na utilização do programa num campo de actividade específico». Uma BSL restringe exactamente isso: um campo de actividade, o de montar um SaaS concorrente.

É por isso que não consta da lista de licenças aprovadas pela OSI, e por isso que o seu próprio texto se antecipa e o afirma.

Na prática isto chega-lhe em dois sítios concretos:

- **Num concurso público ou num caderno de encargos** que exija «software de código aberto» com essas palavras, uma BSL não cumpre o requisito formal, mesmo estando todo o código publicado.
- **Na auditoria do seu informático**, onde não muda nada. Pode ler o código, compilá-lo e verificar o que faz com os dados exactamente da mesma maneira.

## A data de mudança é a cláusula que de facto o protege

É isto que distingue a BSL de um software proprietário que por acaso mostra o código. A restrição tem prazo, e está escrita no próprio ficheiro.

A versão 1.1 da licença pôs um tecto: a data de mudança não pode ultrapassar quatro anos desde a primeira distribuição pública dessa versão. E a licença de destino tem de ser a GPL v2, a GPL v3 ou uma compatível, ou seja, uma licença open source a sério.

> **A data de mudança aplica-se versão a versão, não ao projecto inteiro.** A versão que instalou este ano tem a sua própria data, e a que sair daqui a dois anos terá a dela. O relógio da sua instalação começou a contar no dia em que essa versão foi publicada, não no dia em que a instalou.

![Ficha de paciente com os alertas clínicos, o plano de tratamento activo e a linha temporal filtrável por consultas, tratamentos, pagamentos e comunicações](/screenshots/patient-timeline.png)

*Anos de histórico clínico dentro de um programa. A data de mudança é o que decide o que pode fazer com esse programa se quem o publica desaparecer.*

Dito de outra forma: a BSL dá-lhe um depósito de código em garantia que não teve de negociar. Se o fornecedor fechar, a versão que está a executar torna-se na mesma open source no dia previsto, e qualquer programador competente pode mantê-la a partir daí. Com uma licença proprietária clássica, esse dia não existe.

## Como ler qualquer licença BSL em cinco minutos

Não é preciso um advogado para a primeira leitura. Abra o ficheiro `LICENSE` do repositório e procure estas cinco coisas, por esta ordem:

1. **Confirme a versão da licença.** Tem de dizer «Business Source License 1.1». A 1.0 não tinha o tecto de quatro anos.
2. **Leia o Additional Use Grant por inteiro.** É a única frase que decide se a sua utilização real é gratuita. Se não existir nenhum, o texto base só concede uso não produtivo.
3. **Veja a Change Date.** Pode ser uma data fixa ou uma fórmula («quatro anos depois da publicação»). Qualquer coisa acima de quatro anos sai do que a 1.1 permite.
4. **Veja a Change License.** Se disser Apache 2.0, GPL ou MPL, sabe exactamente o que terá nesse dia, porque são licenças padrão com texto público.
5. **Procure o Licensed Work.** Se nomear versões concretas, a licença aplica-se a essas, e as seguintes podem sair com outras condições.

Se as cinco estiverem preenchidas e legíveis, já sabe mais sobre esse software do que a maioria de quem o instala.

> **Isto não é aconselhamento jurídico.** É a leitura de um documento público. Para um contrato assinado, para um concurso ou para qualquer dúvida sobre o seu caso concreto, a resposta tem de vir de um advogado.

## O que isto muda para uma clínica dentária

A maioria destas cláusulas está escrita a pensar em empresas de software, não num consultório. Traduzido para o que lhe toca:

- **A restrição da BSL quase nunca o apanha.** Proíbe montar um SaaS concorrente. Uma clínica que usa o programa para atender os seus pacientes não está nesse caso, desde que o Additional Use Grant cubra essa utilização.
- **Pode instalá-lo no seu próprio servidor** e executá-lo sem pedir autorização nem activar nada, que é a maior diferença prática face a um software com licença por posto.
- **O seu informático pode auditá-lo a sério.** Pode ler o que fica guardado, onde, e o que sai para fora, sem assinar um acordo de confidencialidade com ninguém.
- **Tem uma saída escrita.** A data de mudança está no ficheiro, não numa promessa comercial.

![Diagrama da instalação alojada no seu servidor: navegador, Caddy na porta 443, frontend Nuxt, API e base de dados PostgreSQL](/diagrams/install-stack.svg)

*A montagem que uma licença deste tipo permite: tudo a correr num servidor seu, sem activação contra o fabricante.*

## A licença do Dentalpin, casa a casa

O Dentalpin é publicado sob BSL 1.1, por isso pode fazer-lhe exactamente as cinco verificações acima. O seu ficheiro `LICENSE` diz, literalmente:

- **Licensor:** DentalPin Contributors.
- **Licensed Work:** DentalPin.
- **Use Limitation:** «You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work».
- **Change Date:** quatro anos depois da publicação da obra licenciada.
- **Change License:** Apache License, Version 2.0.

Nas perguntas frequentes do produto resumimo-lo assim: gratuito para qualquer clínica e qualquer programador, com a única restrição de não o lançar como SaaS dentário concorrente, e com passagem automática para Apache 2.0 ao fim de quatro anos. O que custa e o que inclui está na [página de preços](/pt/precos/).

## Fontes

- [Business Source License 1.1, texto da licença](https://mariadb.com/bsl11/), MariaDB. Consultado a 1 de Setembro de 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Consultado a 1 de Setembro de 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Consultado a 1 de Setembro de 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Consultado a 1 de Setembro de 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Consultado a 1 de Setembro de 2026.
- Ficheiro `LICENSE` do repositório do Dentalpin. Consultado a 1 de Setembro de 2026.
