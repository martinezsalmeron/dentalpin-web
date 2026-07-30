---
title: "Como migrar de software dentário sem perder o histórico clínico"
description: "Guia prático para mudar de software dentário sem perder pacientes, histórico clínico nem faturas: o que exportar, como testar antes e o passo onde falham quase todas as migrações."
pubDate: 2026-07-30
tags: [migracao, software-dentario, historico-clinico]
---

Migrar sem perder nada resume-se a três regras: exporte tudo antes de cancelar o contrato antigo, num formato que consiga ler sem esse software; teste a importação com uma cópia antes de tocar na clínica real; e não dê como boa nenhuma correspondência automática entre catálogos de tratamentos sem a rever linha a linha. Quem perde dados quase sempre saltou a primeira regra, confiando que "o novo fornecedor trata disso".

Não precisa de ser técnico para fazer isto bem. Precisa é de o fazer por esta ordem.

## Antes de mexer em nada: exporte e verifique

Peça ao fornecedor que está a deixar o export completo, não uma seleção do que ele considera relevante. No mínimo, isto tem de sair do sistema dele e chegar ao seu num formato aberto (CSV, XML, ou uma base de dados que consiga consultar sem licença):

- **Ficha de paciente completa**: dados de contacto, consentimentos assinados e data de admissão.
- **Histórico clínico e odontograma**, datado registo a registo, não apenas o estado atual.
- **Orçamentos e faturas**, com a sua numeração original. Um salto na numeração é a primeira coisa que uma inspeção deteta.
- **Imagens e radiografias**, que quase sempre vivem fora da base de dados principal e ficam esquecidas até ao último dia.
- **Catálogo de tratamentos** tal como está codificado no sistema antigo, não apenas os nomes apresentados no sistema.
- **Histórico de marcações**, se um dia precisar de justificar presenças ou faltas.

![Atividade de um paciente no Dentalpin: consulta marcada, plano de tratamento criado, consulta concluída e tratamento realizado, cada linha com a sua data](/screenshots/patient-timeline.png)

*É isto que um export tem de conservar: cada registo com a sua data, não só o estado de hoje.*

> **O export é a sua rede de segurança, não uma formalidade de saída.** Peça-o semanas antes de assinar com o novo fornecedor, abra-o e verifique-o você mesmo. Se o fornecedor que está a deixar dificulta um export completo, isso já lhe diz algo sobre como trata os seus dados, e sabe-o antes de sair.

## O passo onde falham quase todas as migrações

Duas clínicas quase nunca codificam os tratamentos da mesma forma. Uma chama "endodontia" ao que outra divide em três códigos diferentes conforme o dente e o número de canais. Quando o software novo tenta corresponder automaticamente o catálogo antigo ao seu, há linhas que encaixam de forma evidente e outras que não.

O problema não é a correspondência ser imperfeita. É aceitar uma correspondência duvidosa sem a olhar.

> **Uma equivalência adivinhada em silêncio produz faturas mal emitidas que ninguém deteta senão meses depois.** Não é uma falha do software, é uma falha do processo: se ninguém revê linha a linha o que o sistema propõe, o erro é herdado por cada paciente faturado com esse tratamento a partir daí.

Antes de aceitar uma importação em bloco, peça para ver a correspondência proposta com contagens: quantos pacientes, quantas linhas de orçamento e quantas faturas dependem de cada tratamento que vai ser reatribuído.

## Como testar sem arriscar a clínica real

1. **Gere o export completo** do sistema antigo e guarde-o à parte, fora dos dois sistemas, antes de instalar seja o que for.
2. **Corra a importação num ambiente de teste**, não sobre os dados em produção do sistema novo.
3. **Compare contagens**: número de pacientes, orçamentos, faturas e marcações futuras. Se não baterem certo, pare aí.
4. **Faça os dois sistemas conviverem umas semanas**, se o volume da clínica permitir: continue a faturar no sistema antigo enquanto valida que o novo reflete o mesmo.
5. **Passe o sistema antigo para modo só de leitura** quando confiar no novo. Não o apague nem cancele a subscrição ainda.

## O que exigir ao seu fornecedor atual

- **Um export completo, não uma API limitada ao que lhe convém expor.**
- **Formato aberto e documentado**, para que quem o recebe não tenha de adivinhar o que significa cada campo.
- **Um prazo razoável**, não uma ameaça de apagar tudo poucos dias depois de cancelar.
- **As imagens na resolução original**, não uma miniatura comprimida.

Confirme também com a sua ordem profissional ou contabilista os prazos de conservação do histórico clínico que se aplicam a si: variam, e não é um número para dar como certo sem confirmar você mesmo.

## Uma checklist antes de assinar com o novo fornecedor

| O que verificar | Porque importa |
|---|---|
| Formato do export entregue pelo fornecedor atual | Determina se precisa de uma ferramenta intermédia ou pode importar diretamente |
| Se o sistema novo mostra uma pré-visualização antes de escrever seja o que for | Sem pré-visualização, um erro de correspondência é aplicado antes de o ver |
| Se a correspondência de tratamentos é revista linha a linha ou só em bloco | O bloco é rápido, e é aí que o erro se infiltra |
| Se as imagens migram junto com a ficha ou à parte | À parte significa que alguém tem de as ligar à mão depois |
| Se consegue manter o sistema antigo em modo só de leitura | Sem isso, não tem com que comparar se algo falhar mais tarde |

![Lista de faturas com numeração seguida de FAC-2026-0001 a FAC-2026-0008 e o estado de cobrança de cada uma](/screenshots/invoices.png)

*A numeração tem de chegar inteira ao sistema novo. Uma falha na sequência é a primeira coisa que se vê de fora.*

No Dentalpin resolvemos isto com um módulo de importação (`migration_import`) que segue as mesmas quatro fases deste guia: carrega o ficheiro, mostra uma pré-visualização com contagens antes de escrever seja o que for, deixa rever a correspondência de tratamentos linha a linha (o que pontua acima de 0,9 é aceite em bloco, o resto decide você) e só depois executa. O fluxo completo está documentado no [dental-bridge](https://github.com/dentaltix/dental-bridge), e [instalar o Dentalpin no seu próprio servidor](/pt/blog/instalar-dentalpin-em-tres-minutos/) demora três minutos se depois quiser testá-lo com o seu próprio export.

Encontrou um passo de migração que falta aqui? [Diga-nos](https://github.com/martinezsalmeron/dentalpin/discussions) e adicionamo-lo.
