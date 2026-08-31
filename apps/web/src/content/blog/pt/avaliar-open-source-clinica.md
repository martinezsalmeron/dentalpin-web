---
title: "Como avaliar um projeto open source antes de lhe confiar a clínica"
description: "Cinco verificações públicas para saber se um projeto open source aguenta dez anos na sua clínica: manutenção, pessoas, segurança, licença e saída."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, avaliacao, seguranca, licencas, contratos]
---

Veja cinco coisas, por esta ordem: se o projeto é mantido, quantas pessoas o mantêm de facto, o que acontece no dia em que alguém encontra uma falha de segurança, o que diz exatamente a licença e como se sai. As cinco verificam-se a partir de páginas públicas numa tarde, e quatro têm um padrão publicado por trás, pelo que não é você a definir o limite.

O código ser público não é a resposta. É o que lhe permite fazer as perguntas, e quase ninguém as faz.

> **O erro habitual é avaliar o produto e não o projeto.** Todas as demonstrações parecem boas. O que decide se daqui a seis anos ainda tem um programa capaz de abrir o seu histórico clínico é quem o mantém, a que ritmo, e o que faz quando aparece uma falha.

## As cinco verificações, e onde se fazem

Nenhuma exige falar com um comercial. Todas saem do repositório público do projeto e de dois serviços gratuitos que pontuam o que lá encontram.

| Verificação | O que procura | Sinal de alarme |
|---|---|---|
| Manutenção | ✓ Commits e versões recentes e regulares | ✗ Meses de silêncio e uma versão de há dois anos |
| Pessoas | ✓ Várias pessoas com permissão para publicar | ✗ Uma só pessoa assina quase tudo |
| Segurança | ✓ Um `SECURITY.md` com um contacto | ✗ Nenhum sítio onde avisar de uma falha |
| Licença | ✓ O nome consta da lista da OSI | ✗ «Licença própria», sem texto publicado |
| Saída | ✓ Exportação documentada e base de dados padrão | ✗ Formato proprietário e não documentado |

## 1. «Mantido» tem uma definição, e não é a sua

A OpenSSF publica o Scorecard, uma ferramenta que analisa um repositório e pontua cada aspeto de 0 a 10. A verificação *Maintained* é a mais útil das dezanove, porque transforma uma impressão num limite.

Para a pontuação máxima exige **pelo menos um commit por semana durante os 90 dias anteriores**, e só avalia projetos com mais de 90 dias de vida. É essa a fasquia, e está publicada.

Só com isso já pode abrir qualquer repositório e ver de que lado ele cai:

- **A data do último commit** diz-lhe se alguém mexeu no código este mês ou no ano passado.
- **O ritmo das versões** importa mais do que o número. Doze versões num ano e nada há catorze meses é um projeto parado, não um projeto estável.
- **Os problemas abertos sem resposta** são o sinal mais honesto de todos. Um projeto saudável não tem zero problemas, tem problemas respondidos.

## 2. Quantas pessoas o sustentam mesmo

Um projeto com mil estrelas e um único autor é um projeto de uma pessoa. A comunidade CHAOSS, dentro da Linux Foundation, tem uma métrica exatamente para isto.

Chama-se *Contributor Absence Factor*, antes conhecida como *Bus Factor*, e responde a uma pergunta direta: «Que risco corre o projeto se saírem as pessoas mais ativas?» Calcula-se como o menor número de contribuidores que somam 50% das contribuições.

Se esse número for um, a resposta é que o risco é seu.

> **Um fator de ausência de um não desqualifica um projeto, mas muda o contrato de que precisa.** Se o vai instalar na clínica, quer ou uma empresa por trás que responda, ou um informático de confiança que já tenha lido aquele código.

![Ficha de paciente com os alertas clínicos, o plano de tratamento ativo e a linha temporal filtrável por consultas, tratamentos, pagamentos e comunicações](/screenshots/patient-timeline.png)

*Anos de histórico clínico dentro de um programa. É isto que depende de o projeto continuar vivo daqui a seis anos.*

## 3. O que acontece no dia em que alguém encontra uma falha

Esta é a verificação que mais gente salta e a mais rápida de fazer. Procure no repositório um `SECURITY.md`: é o que a verificação *Security-Policy* do Scorecard procura, e a sua ausência significa que quem encontrar uma falha não tem onde avisar.

O OpenSSF Best Practices Badge põe números no que vem a seguir. Entre os seus critérios de nível *passing*: «o tempo de resposta inicial do projeto a qualquer relato de vulnerabilidade recebido nos últimos 6 meses DEVE ser igual ou inferior a 14 dias». Exige também que as notas de versão identifiquem qualquer vulnerabilidade conhecida corrigida que já tivesse um CVE atribuído.

Um projeto que publica esse distintivo comprometeu-se por escrito com essas coisas. Um que não o publica pode estar a fazê-las na mesma, mas terá de ser você a confirmá-lo no histórico de versões.

> **Isto deixou de ser boa vontade e passou a ser regulamento europeu.** O Regulamento (UE) 2024/2847, o Regulamento Ciber-Resiliência, entrou em vigor a 10 de dezembro de 2024. As obrigações de notificação de vulnerabilidades ativamente exploradas aplicam-se **desde 11 de setembro de 2026**, e o grosso do regulamento desde 11 de dezembro de 2027.

Esse regulamento não o obriga a si enquanto clínica: obriga quem fabrica ou fornece o produto. Mas cria uma figura que vale a pena conhecer: a das organizações que sustentam de forma continuada um software de código aberto, a que o texto inglês chama *open-source software steward*. O seu artigo 24 exige-lhes um ponto de contacto único para receber relatos de vulnerabilidade e uma política de divulgação coordenada.

Traduzido para a sua avaliação: a partir de setembro de 2026, um projeto europeu sério tem um endereço onde avisar de uma falha, porque a lei o exige. Se não o tem, ficou a saber algo sobre ele. Isto não é aconselhamento jurídico.

## 4. A licença, em dois minutos

A Open Source Initiative mantém a definição de referência, com dez critérios numerados, e publica a lista de licenças aprovadas em `opensource.org/licenses`.

A verificação é literal: procure o nome exato da licença nessa lista. GPL, AGPL, Apache 2.0 e MIT estão lá. As licenças do tipo *source available* não estão, o que não as torna más, torna-as outra categoria.

O que a licença decide e o que não decide dá um artigo inteiro, e tem-no em [software livre ou proprietário na saúde](/pt/blog/software-livre-na-saude/). Para esta avaliação basta uma regra: se o projeto não publica o texto da sua licença, não acabou de olhar, acabou de o avaliar.

## 5. Como se sai

Um projeto open source de onde não consegue sair tem o mesmo problema que um proprietário, com mais passos.

1. **Localize a documentação de exportação** antes de instalar seja o que for. Se existe, está no repositório, não num email comercial.
2. **Verifique o motor de base de dados.** PostgreSQL ou MySQL significam que qualquer informático competente consegue ler os seus dados sem pedir autorização a ninguém.
3. **Faça uma cópia no primeiro dia**, não no dia em que quiser sair. Uma exportação que nunca testou não é uma exportação.
4. **Leia o que a cópia leva e o que deixa.** As radiografias e os documentos anexos costumam viver fora da base de dados, e costumam ser o que falta.

O formato a exigir está detalhado em [exportar os seus dados](/pt/blog/exportar-dados-do-software/).

## Pontuar isto sem ser informático

As duas ferramentas já referidas são públicas e gratuitas, e ambas se aplicam a um projeto alheio:

- **O OpenSSF Scorecard** analisa o repositório e devolve dezanove verificações pontuadas de 0 a 10, entre elas *Maintained*, *Security-Policy*, *Code-Review*, *License* e *Vulnerabilities*, que cruza o código com a base de dados OSV de vulnerabilidades conhecidas.
- **O OpenSSF Best Practices Badge** é uma autoavaliação pública do próprio projeto, organizada em seis blocos: fundamentos, controlo de alterações, comunicação de problemas, qualidade, segurança e análise.

Ambos medem processo, que é precisamente o que uma demonstração não mostra. Nenhum mede se o programa serve para uma clínica dentária, e confundir as duas coisas leva a instalar um projeto exemplar sem odontograma.

## Duas semanas com dados reais, antes de decidir

Nenhuma métrica substitui isto, e é o ponto mais barato da lista.

1. **Instale-o numa máquina que não seja a de produção.** Um portátil antigo ou um servidor de cinco euros por mês chegam para saber se o projeto se instala como a documentação diz.
2. **Introduza vinte pacientes reais**, com os seus tratamentos e os seus orçamentos. Vinte fichas reais ensinam mais do que duzentas inventadas.
3. **Faça um dia completo em paralelo.** Marcação, consulta, nota clínica, orçamento, pagamento. Se falta alguma etapa do circuito, aparece aqui.
4. **Abra um problema com uma dúvida real** e conte os dias até à resposta. É a única forma de testar o ponto 3 sem esperar por um incidente a sério.
5. **Exporte tudo e apague.** Se a saída funciona com vinte pacientes, funciona com dois mil.

![Página inicial com as consultas do dia, quem está na clínica, os pagamentos em atraso e a linha temporal da jornada](/screenshots/home.png)

*Aquilo em que a clínica trabalha todas as manhãs. Duas semanas de uso real dizem o que nenhuma pontuação lhe vai dizer.*

## O que nenhuma destas métricas lhe diz

Vale a pena saber onde acaba este método.

- **Se o projeto encaixa na sua forma de trabalhar.** Isso só o teste de duas semanas responde.
- **Se o código é seguro.** Ser público torna-o auditável, não auditado. São coisas diferentes e só a segunda protege alguém.
- **Quem responde perante o RGPD.** Continua a ser você, use o software que usar.
- **Se terá a quem ligar a uma sexta-feira à tarde.** Isso decide-se num contrato de suporte, e existe tanto no software livre como no proprietário.

O Dentalpin é um dos projetos que se podem passar por esta lista: o código é público, a licença é a BSL 1.1, que não consta da lista da OSI e convém dizê-lo assim, a base de dados é PostgreSQL e os [preços](/pt/precos/) estão publicados. Aplique-lhe as cinco verificações antes de o instalar, tal como a qualquer outro.

## Fontes

- OpenSSF Scorecard, repositório e documentação das verificações, `github.com/ossf/scorecard` e `docs/checks.md` (consultado a 31 de agosto de 2026).
- OpenSSF Best Practices Badge, critérios de nível *passing*, `bestpractices.dev/en/criteria/0` (consultado a 31 de agosto de 2026).
- CHAOSS, métrica *Contributor Absence Factor*, `chaoss.community` (consultado a 31 de agosto de 2026).
- Open Source Initiative, *The Open Source Definition* e lista de licenças aprovadas, `opensource.org/osd` e `opensource.org/licenses` (consultado a 31 de agosto de 2026).
- Regulamento (UE) 2024/2847 (Regulamento Ciber-Resiliência), texto no EUR-Lex e página oficial da Comissão Europeia sobre a sua aplicação, `digital-strategy.ec.europa.eu` (consultado a 31 de agosto de 2026).
