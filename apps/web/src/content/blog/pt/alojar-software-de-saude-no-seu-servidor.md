---
title: "Alojar software de saúde no seu servidor: o que ninguém lhe conta"
description: "Alojar por conta própria não custa licença, custa operação: um restauro já testado, o certificado, a versão maior do PostgreSQL e alguém contactável às oito."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [auto-alojamento, docker, postgresql, seguranca, rgpd]
---

Alojar software de saúde no seu próprio servidor não é grátis: grátis é a licença. O que assume são quatro tarefas que nunca terminam: uma cópia de segurança que restaurou mesmo, um certificado que se renova sozinho até ao dia em que deixa de se renovar, uma atualização de versão maior do PostgreSQL de poucos em poucos anos, e uma pessoa contactável às oito da manhã de uma segunda-feira. Se essas quatro tarefas tiverem dono, alojar por conta própria é uma boa decisão e uma decisão barata. Se não tiverem, o seu servidor é uma empresa de software com uma só pessoa ao serviço e sem escala de prevenção.

O que se segue é aquilo que o tutorial de instalação não diz, com a fonte técnica ou legal de cada ponto.

## Instalar é um dia, operar são cinco anos

A instalação tornou-se genuinamente simples. Três documentos, um `docker compose up`, e minutos depois há uma aplicação a funcionar com o certificado dela. Essa parte já não é o problema, e é precisamente por isso que engana.

O problema é tudo o que vem a seguir, e não tem data de fim: as correções do sistema operativo, o espaço em disco, os avisos que ninguém lê, a migração da base de dados daqui a três anos, e a noite em que o servidor não volta a arrancar.

> **A instalação é um acontecimento, a operação é um compromisso permanente.** Ninguém abandona um servidor no primeiro dia. Abandona-o ao décimo quarto mês, quando a pessoa que o montou mudou de emprego e os avisos de erro continuam a seguir para o endereço antigo.

![Esquema de uma instalação no servidor próprio: o navegador chega a Caddy por HTTPS, que encaminha /api/* para o backend e o resto para o frontend Nuxt; o backend fala com o PostgreSQL](/diagrams/install-stack.svg)

*Quatro processos e uma base de dados. Cada caixa deste esquema é algo que alguém tem de manter atualizado.*

## O que a lei continua a exigir, esteja o servidor onde estiver

Alojar por conta própria não acrescenta obrigações legais. Retira apenas a parte que estava a cumprir algumas delas por si.

A clínica é responsável pelo tratamento dos dados dos seus pacientes, quer o servidor esteja no armário da receção quer esteja num centro de dados alheio. O artigo 32.º do RGPD enumera, entre as medidas técnicas e organizativas, dois pontos que se leem como uma lista de tarefas de sistemas:

- **Artigo 32.º, n.º 1, alínea c)**: a capacidade de restabelecer a disponibilidade e o acesso aos dados pessoais de forma atempada, em caso de incidente físico ou técnico.
- **Artigo 32.º, n.º 1, alínea d)**: um processo para testar, apreciar e avaliar regularmente a eficácia das medidas técnicas e organizativas. O teste periódico não é uma boa prática opcional, está no texto do artigo.

A isto acresce o artigo 33.º, n.º 1: uma violação de dados é notificada à autoridade de controlo sem demora injustificada e, se possível, no prazo máximo de 72 horas após ter tido conhecimento dela.

> **As setenta e duas horas contam a partir do momento em que sabe, não do momento em que percebe.** Se o servidor é seu, ninguém lhe vai telefonar a dizer que aconteceu alguma coisa. Esse alerta também é seu para montar.

Isto não é aconselhamento jurídico. A aplicação concreta ao seu caso convém confirmá-la com o seu consultor ou com a sua ordem profissional.

## Os dados não estão no contentor

É o mal-entendido mais caro dos primeiros meses. A documentação do Docker diz-lo sem rodeios: "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

Na prática: pode destruir e recriar os contentores as vezes que quiser, mas o que é preciso copiar são os volumes. E uma instalação clínica típica tem pelo menos dois.

- **A base de dados**, com pacientes, agenda, histórico clínico, orçamentos e faturas.
- **Os documentos carregados**, ou seja, as radiografias, as fotografias clínicas e os PDF assinados. Costumam ocupar muito mais do que a base de dados e costumam ser o que se esquece.

Uma exportação da base de dados sem a pasta dos documentos restaura uma clínica sem uma única imagem. Tecnicamente é uma cópia de segurança; na prática é metade de uma.

**E não se copia a quente com um `cp`.** A documentação do PostgreSQL é taxativa sobre copiar a diretoria de dados com o servidor a correr: "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". O que funciona com o servidor ligado é o `pg_dump`, cujas exportações são "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

A autoridade de controlo francesa resume as precauções elementares em quatro linhas que servem em qualquer país: fazer cópias frequentes, guardar pelo menos uma cópia num local geograficamente distinto do de exploração, isolar pelo menos uma cópia fora de linha e desligada da rede, e testar regularmente a integridade das cópias e a capacidade de as restaurar.

Essa última linha decide tudo, e tem um guia próprio: [o que guardar e de quanto em quanto tempo](/pt/blog/copias-seguranca-clinica-dentaria/).

## O certificado renova-se sozinho até alguém fechar a porta 80

Os certificados da Let's Encrypt "are valid for 90 days", e a própria entidade recomenda "renewing 90 day certificates every 60 days". O cliente ACME trata disso sem que ninguém peça, pelo que o assunto desaparece da cabeça de toda a gente.

Até falhar, e falha de uma maneira muito concreta. O desafio HTTP-01 "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

Ou seja, se alguém fechar a porta 80 na firewall porque "está tudo em HTTPS de qualquer forma", a renovação deixa de funcionar em silêncio. O site continua perfeito durante trinta dias e depois, numa terça-feira qualquer, o navegador da receção passa a mostrar um aviso de segurança que ocupa a página toda.

1. **Deixe a porta 80 aberta** ainda que só redirecione para HTTPS, ou passe ao desafio DNS-01, que valida com um registo TXT em `_acme-challenge.o-seu-dominio` e exige um fornecedor de DNS com API.
2. **Vigie a data de validade a partir de fora** do servidor, com qualquer verificação externa. Um alerta que vive na máquina que caiu não avisa ninguém.
3. **Confirme ao 65.º dia** que a renovação aconteceu mesmo, não que a tarefa arrancou.
4. **Anote quem recebe o aviso** e confirme que esse endereço continua a existir quando essa pessoa sair.

## A atualização que dói mesmo

As correções menores são rotina. O PostgreSQL garante que "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Passar da 17.4 para a 17.6 é reiniciar um contentor.

A versão maior é outra coisa: "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." Um contentor de PostgreSQL 17 não arranca sobre uma diretoria de dados escrita pela 16. Se tem a imagem fixada em `latest`, no dia em que a etiqueta mudar a base de dados não sobe, e a mensagem de erro não vai ser óbvia às oito da manhã.

O projeto documenta três caminhos: exportar e restaurar com o `pg_dumpall`, usar o `pg_upgrade`, que é mais rápido, ou replicar. Escolher um é meia hora de leitura. Descobri-lo durante uma paragem custa um dia.

1. **Fixe a versão maior** na configuração, nunca `latest`, nem para a aplicação nem para a base de dados.
2. **Veja o calendário de suporte** da sua versão uma vez por ano e planeie o salto antes de ficar sem correções de segurança.
3. **Faça a migração sobre uma cópia**, noutra máquina, e cronometre-a.
4. **Guarde a exportação anterior** até a clínica ter trabalhado uma semana inteira sobre a versão nova.

## Quem responde às oito de segunda-feira

Esta é a pergunta que decide, e não é técnica.

Uma clínica dentária abre às oito ou às nove com a agenda já cheia. Se o servidor não arrancar, não há histórico clínico, não há consentimentos e não há forma de saber quem vem. A pergunta relevante não é se sabe resolver, é se essa pessoa está disponível, com um computador à frente, naquele momento.

![Página inicial com as consultas do dia, quem está na clínica, pagamentos em atraso e pacientes recentes](/screenshots/home.png)

*É este o painel que tem de estar de pé às oito. Todo o resto pode esperar pelo meio-dia.*

Respostas honestas que funcionam: o informático da clínica, com contrato de horas e um número de telefone; o próprio médico dentista, se gostar disto e o assumir; ou um serviço gerido por terceiros. Respostas que não funcionam: o sobrinho, e "logo vejo isso".

## Alojar por conta própria ou não: a tabela

| | Servidor próprio | Serviço gerido |
|---|---|---|
| Licença | ✓ Sem mensalidade se o software for livre | ✗ Mensalidade enquanto o usar |
| Onde vivem os dados | ✓ Na sua máquina | ~ Onde o contrato disser |
| Correções do sistema | ✗ Aplica-as a clínica | ✓ Aplica-as o fornecedor |
| Cópias de segurança | ✗ Monta-as e testa-as a clínica | ~ Faz-nas o fornecedor, testa-as na mesma |
| Segunda-feira às 8h00 | ✗ Depende de quem estiver disponível | ✓ Depende do compromisso de serviço |
| Versão maior do PostgreSQL | ✗ Planeia-a a clínica | ✓ Planeia-a o fornecedor |
| Se o fornecedor fechar | ✓ Continua a funcionar | ✗ Depende da exportação que entregarem |
| Custo real | ~ Servidor barato, horas caras | ~ Mensalidade previsível, horas de outros |

A coluna da direita não a liberta de nada em termos legais: continua a ser responsável pelo tratamento e continua a ter de demonstrar que consegue restaurar. O que compra é que outra pessoa faça o trabalho, e um número para ligar quando não o fez.

## As três perguntas antes de decidir

1. **Quem é o dono do servidor, com nome próprio?** Não o cargo, a pessoa. Se a resposta demorar mais de cinco segundos, não há dono.
2. **Quando foi o último restauro completo que alguém fez a sério?** Se a resposta for "nunca", não tem cópias de segurança, tem documentos grandes.
3. **O que acontece no dia em que essa pessoa sair?** Escreva o procedimento agora, guarde-o fora do sistema que é preciso restaurar, e peça a outra pessoa que o leia.

Se as três tiverem resposta, alojar por conta própria é uma excelente decisão: controlo total dos dados, sem mensalidade e sem depender de nenhuma empresa continuar a existir. Se alguma ficar no ar, resolva-a primeiro e decida depois.

No Dentalpin a instalação no servidor próprio são quatro contentores e dois volumes, o da base de dados e o dos documentos carregados, pelo que a cópia de segurança é uma exportação padrão do PostgreSQL mais uma pasta, e automatiza-se com as ferramentas que já usa. As condições da versão auto-alojada e da alojada estão nos [preços](/pt/precos/), e se quiser ensaiar um restauro antes de se comprometer com o que quer que seja, [instalar leva três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigos 32.º e 33.º. Texto em [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32) e no [capítulo 4 publicado pela CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Consultados a 19 de agosto de 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Consultado a 19 de agosto de 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Consultado a 19 de agosto de 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Consultado a 19 de agosto de 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Consultado a 19 de agosto de 2026.
- Let's Encrypt, *FAQ* e *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) e [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Consultados a 19 de agosto de 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Consultado a 19 de agosto de 2026.
