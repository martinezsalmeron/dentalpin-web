---
title: "Exportar os dados do software dentário: o formato que deve exigir"
description: "Que exportação pedir ao software dentário antes de assinar: os quatro blocos que tem de incluir, os formatos que aguentam e como testá-la uma vez por ano."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [exportacao-de-dados, migracao, contrato, rgpd, historico-clinico]
---

Peça uma exportação completa em formatos abertos: a base de dados em CSV por tabela ou um dump SQL, os documentos e as imagens como ficheiros originais (PDF, JPG, DICOM) e um índice que ligue cada ficheiro ao seu paciente. Que fique escrita no contrato, com prazo, sem custo e lançável por si sem telefonar a ninguém. E abra-a uma vez por ano, porque uma exportação que nunca abriu não é uma saída, é uma promessa.

O formato é a única coisa que decide se, daqui a seis anos, aquilo ainda é um histórico clínico ou é uma pasta de ficheiros que já ninguém consegue ler.

## Uma exportação não é uma cópia de segurança

São duas coisas diferentes, e quase todas as conversas comerciais as confundem. Uma cópia de segurança repõe o sistema tal como estava, dentro do mesmo software. Uma exportação permite-lhe ler os seus dados sem esse software.

O teste é simples. Se o seu fornecedor desaparecesse esta noite, a cópia de segurança servia-lhe de alguma coisa? Se o ficheiro só abre no software dele, a resposta é não.

> **A pergunta não é "fazem cópias de segurança?", é "o que é que eu consigo abrir sem vocês?".** À primeira responde toda a gente que sim. A segunda separa os fornecedores em dois grupos muito diferentes.

Precisa das duas. A cópia de segurança é para o disco que avaria numa terça-feira. A exportação é para o dia em que muda de software, para o dia em que o fornecedor fecha e para o dia em que alguém lhe pede um histórico de há oito anos.

## A lei dá-lhe o direito, não o formato

Quando contrata um software de gestão, o responsável pelo tratamento é a clínica e o fornecedor é o subcontratante. O artigo 28.º, n.º 3, alínea g) do RGPD obriga o subcontratante a, consoante a escolha do responsável, apagar ou devolver todos os dados pessoais depois de concluída a prestação de serviços, e a apagar as cópias existentes salvo obrigação legal de conservação.

Esse direito é real e é seu. O que o artigo não diz, em parte nenhuma, é em que formato.

> **Um PDF de novecentas páginas cumpre o artigo 28.º, n.º 3, alínea g).** Devolver os dados e devolvê-los em algo utilizável não são a mesma obrigação, e só a primeira está no regulamento. A segunda tem de estar no seu contrato.

É toda a diferença entre sair de um fornecedor em duas semanas e sair em seis meses a pagar a alguém para redigitar históricos clínicos.

## A obrigação de conservar sobrevive ao contrato

É aqui que o formato deixa de ser uma preferência técnica. O tempo durante o qual tem de conseguir produzir um histórico mede-se em anos, e não pára no dia em que cancela a subscrição. Confirme o prazo aplicável à sua situação antes de apagar seja o que for.

O contador continua a correr, e quem responde pelo histórico é a clínica, não o fornecedor de quem acabou de sair.

Por isso a pergunta certa não é "posso levar os meus dados?" mas "vou conseguir lê-los daqui a dez anos, num computador que ainda não existe, sem licença de nada?". A isso só há uma família de respostas, e são os formatos abertos.

## Os quatro blocos que têm de sair

As exportações incompletas falham quase sempre no mesmo sítio. Entregam a agenda e a ficha administrativa, e mantêm lá dentro o clínico e os ficheiros. Peça os quatro por escrito.

| Bloco | O que tem de sair | Formato que aguenta |
|---|---|---|
| Pacientes | Contactos, seguradora, alertas médicos, consentimentos existentes | CSV ou SQL, um registo por paciente com identificador estável |
| Clínico | Odontograma, periodontograma, notas com data e autor, planos de tratamento, prescrições | CSV ou SQL, com dente, face, estado e data em campos separados |
| Financeiro | Orçamentos, faturas com a sua numeração, pagamentos, saldos, estados | CSV ou SQL, mantendo o número da fatura e o estado tal como estão |
| Ficheiros | Radiografias, fotografias, PDF, consentimentos assinados | Os ficheiros originais, mais um índice que os ligue aos pacientes |

![Ficha de paciente com o odontograma, os alertas clínicos, o plano de tratamento ativo e a próxima consulta](/screenshots/dental-chart.png)

*Um odontograma no monitor: dente, face, estado e data. São estes quatro campos que têm de sobreviver à exportação.*

O quarto bloco é o que mais vezes chega partido. Entregam-lhe uma pasta com doze mil ficheiros chamados `IMG_0043.jpg` e nenhuma forma de saber de quem é cada um. Um índice é uma tabela de duas colunas, nome do ficheiro e identificador do paciente, e sem ela a pasta não vale nada.

## Formatos que aguentam e formatos que não

A regra é uma só: consegue abri-lo sem o programa que o gerou?

| Formato | Serve para | Lê-se sem o software? |
|---|---|---|
| CSV | Tabelas: pacientes, consultas, faturas, notas | ✓ Qualquer folha de cálculo, qualquer linguagem |
| Dump SQL | A base de dados inteira, com as relações | ✓ Com PostgreSQL ou MySQL instalado |
| JSON ou XML | Estruturas encadeadas, planos com as suas fases | ✓ Legível e documentável |
| PDF, JPG, PNG | Documentos assinados, fotografia clínica | ✓ São normas, abrem em qualquer lado |
| DICOM | Radiografias e volumes | ✓ Norma internacional de imagem médica |
| PDF como extração de dados | Nada. É a ficha impressa | ✗ Uma pessoa lê, nada migra |
| Formato proprietário (.dat, o .bak deles) | Repor no software deles | ✗ Só abre quem o escreveu |
| Capturas de monitor ou mapas para imprimir | Consultar um dado solto | ✗ Não é dado, é uma imagem do dado |

Sobre as radiografias convém ser explícito. DICOM é, nas palavras da organização que o mantém, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", gerido pela Medical Imaging & Technology Alliance, uma divisão da NEMA. Se o seu software guarda as radiografias em algo que não é DICOM nem um formato de imagem comum, pergunte hoje como saem.

## As cláusulas a pedir antes de assinar

Isto negoceia-se antes da assinatura, enquanto ainda o querem como cliente. Depois já não há conversa, há tabela de preços.

1. **Âmbito.** "Todos os dados introduzidos pelo cliente e todos os ficheiros anexados", e não "os dados dos pacientes". A segunda redação deixa o clínico de fora sem o dizer.
2. **Formato.** Nomeado: CSV ou dump SQL para a base de dados, ficheiros originais para os anexos, mais um índice que os relacione.
3. **Documentação.** Uma descrição das tabelas e dos campos. Um CSV com quarenta colunas chamadas `campo_17` é um enigma, não uma exportação.
4. **Autonomia.** É a clínica que a lança, a partir do software, quando quiser. Se for preciso abrir um pedido de suporte, o prazo é deles.
5. **Prazo.** Sem autonomia, um número concreto de dias a contar do pedido. Trinta é razoável.
6. **Custo.** Zero. Um custo de extração é uma portagem de saída, e é melhor vê-lo escrito antes de assinar do que depois.
7. **Depois da rescisão.** Durante quanto tempo ainda a pode descarregar, e um apagamento certificado por escrito quando o pedir, que é o que o artigo 28.º, n.º 3, alínea g) lhe permite exigir.
8. **Se fecharem.** O que acontece aos seus dados numa insolvência. A resposta pode ser má, mas precisa de a conhecer.

![Lista de faturas com os estados emitida, paga, parcialmente paga, vencida e rascunho](/screenshots/invoices.png)

*Cada fatura tem um estado e uma data. Se a exportação leva os valores mas perde o estado, a contabilidade tem de ser reconstruída à mão.*

## Como testar a exportação uma vez por ano

É uma hora por ano, e é a única maneira de saber se o que lhe prometeram existe.

1. **Lance-a e cronometre.** Se demorar três dias, acabou de aprender algo importante.
2. **Abra um CSV.** Cabeçalhos legíveis e acentos corretos. Se vir `Gon�alves`, a codificação está partida e é agora que se diz.
3. **Conte.** Número de linhas no CSV de pacientes contra o número de pacientes que o software mostra. Se não bater certo, pergunte porquê antes de precisar da resposta.
4. **Escolha três pacientes ao acaso** e compare a ficha no monitor com o que saiu. Olhe sobretudo para o odontograma e para as notas.
5. **Abra uma radiografia** diretamente da pasta exportada, sem passar pelo software.
6. **Verifique o índice.** Pegue num ficheiro da pasta e descubra de quem é usando apenas a exportação.
7. **Guarde-a cifrada e fora da clínica**, e anote a data. Essa data é a resposta no dia em que perguntarem quando foi verificada pela última vez.

> **Da primeira vez vai encontrar alguma coisa.** Quase sempre são as imagens ou o odontograma. Encontrá-lo numa terça-feira qualquer custa um e-mail. Encontrá-lo no dia em que sai custa a migração inteira.

## Sinais de alarme

Nenhum destes acusa ninguém de má-fé. Todos são motivo para pedir uma demonstração antes de assinar.

- **"Damos-lhe em PDF."** Serve para ler, não serve para migrar. Pergunte o que mais há.
- **"Tem de ser pedido ao suporte."** Então o prazo não é seu. Peça o número de dias por escrito.
- **"Tem um custo de extração."** É uma portagem de saída. Negoceie-a agora, enquanto é possível.
- **"As imagens vão à parte."** À parte está bem. Sem índice, não.
- **"O odontograma não se exporta, imprime-se."** O sinal mais claro de todos: o dado clínico estruturado fica lá dentro.
- **Não há documentação dos campos.** Sem ela, migrar custa o mesmo que redigitar.

## O que pode verificar esta tarde

Não é preciso esperar pela renovação. Entre no seu software hoje, procure a opção de exportar e veja o que oferece. Se não a encontrar em cinco minutos, isso já é a resposta.

O Dentalpin é open source e a base de dados é PostgreSQL, por isso exportar não é uma função que se tenha de pedir: pode fazer o dump da base de dados inteira quando quiser, e os anexos estão em disco tal como foram carregados. Instala-se no seu servidor ou usa-se na versão gerida, e os [preços](/pt/precos/) estão publicados.

## Fontes

Todas consultadas a 26 de agosto de 2026.

- Regulamento (UE) 2016/679 (RGPD), artigo 28.º, n.º 3, alínea g). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- DICOM, norma internacional para imagens médicas, gerida pela Medical Imaging & Technology Alliance, divisão da NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

Isto não é aconselhamento jurídico. Os prazos de conservação dependem do documento e do tipo de estabelecimento, confirme-os antes de apagar seja o que for.
