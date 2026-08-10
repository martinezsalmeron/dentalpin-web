---
title: "Cópias de segurança numa clínica dentária: o que guardar e de quanto em quanto tempo"
description: "O que entra na cópia de segurança de uma clínica dentária, com que frequência a fazer, onde guardar as cópias e como provar que a reposição funciona antes de precisar dela."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [copias-de-seguranca, seguranca, rgpd, gestao]
---

Copie a base de dados e os documentos anexos todos os dias, guarde três cópias em dois suportes diferentes com uma delas fora da clínica, e reponha uma dessas cópias pelo menos uma vez por ano para confirmar que funciona. Se nunca ninguém repôs nada, não tem uma cópia de segurança. Tem um conjunto de dados que supõe estar bom.

A seguir está o que entra nessa cópia, com que frequência faz sentido, e como verificá-la sem depender do que lhe dizem ao telefone.

## O que entra na cópia, e o que fica quase sempre de fora

Uma clínica dentária não guarda os dados num sítio, guarda-os em dois. A base de dados leva os pacientes, a agenda, o odontograma, os planos de tratamento, os orçamentos e as faturas. As radiografias, os PDF assinados e os documentos digitalizados vivem separados, muitas vezes noutra pasta ou noutro serviço.

A cópia que só inclui a base de dados parece completa até ao dia em que a repõe e descobre que as radiografias não estão lá.

| O que guardar | Porque importa | Vai por omissão? |
|---|---|---|
| Base de dados | Pacientes, agenda, odontograma, orçamentos, faturação | ✓ Quase sempre |
| Radiografias e imagens clínicas | Fazem parte do histórico clínico e ocupam quase todo o espaço | ✗ Muitas vezes excluídas pelo tamanho |
| Consentimentos e documentos assinados | São a prova de que o consentimento existiu | ~ Depende de onde o software os guarda |
| Configuração do sistema | Sem ela a reposição demora mais horas | ✗ Quase nunca |
| Chaves e certificados de faturação | Sem eles não volta a emitir | ✗ Quase nunca |

> **Veja o tamanho da cópia antes de confiar nela.** Cinco anos de radiografias não cabem num conjunto de 200 MB. Se a cópia desta noite pesa muito menos do que os seus dados ocupam, alguma coisa está a ficar de fora, e já sabe o quê.

![Histórico clínico de um paciente com odontograma, alertas clínicos e plano de tratamento ativo](/screenshots/dental-chart.png)

*É isto que uma reposição tem de devolver inteiro, não apenas a lista de pacientes.*

## De quanto em quanto tempo: a pergunta é quanto trabalho pode perder

A frequência não se decide por hábito, decide-se pela quantidade de trabalho que aceita repetir. Entre a última cópia e a avaria há um intervalo, e alguém o preenche à mão, de memória.

| Frequência | O que perde no pior caso | Para quem faz sentido |
|---|---|---|
| Semanal | Até seis dias de registos e cobranças | ✗ Insuficiente para qualquer clínica em atividade |
| Diária, de noite | Um dia de trabalho | ~ O mínimo razoável |
| De poucas em poucas horas | Meia manhã | ✓ Clínicas com vários gabinetes e muito volume |
| Contínua | Minutos | ✓ Se o fornecedor a oferecer sem trabalho adicional |

Ponha um número nesse intervalo. Gabinetes vezes horas vezes faturação média é a conta que transforma isto numa comparação económica em vez de numa questão de gosto.

## A regra 3-2-1, e porque a cópia na mesma sala não conta

A CISA, a agência norte-americana de cibersegurança, resume a prática aceite em três números: três cópias de cada documento importante (uma principal e duas de segurança), em dois tipos de suporte diferentes e com uma cópia guardada fora das instalações.

- **Três cópias**, porque a segunda também falha. Um disco de segurança comprado no mesmo dia que o original tende a morrer pela mesma altura.
- **Dois suportes diferentes**, porque a mesma falha leva dois equipamentos iguais de uma vez, desde um problema de firmware a uma sobretensão.
- **Uma cópia fora da clínica**, porque um roubo, um incêndio ou uma inundação levam ao mesmo tempo o servidor e o disco USB da gaveta ao lado.
- **Uma cópia sem ligação ou imutável**, porque o ransomware cifra tudo aquilo em que o computador infetado consegue escrever, e isso inclui o disco de cópias que está sempre ligado.

| | Disco USB na clínica | NAS na clínica | Cópia cifrada no exterior |
|---|---|---|---|
| Avaria do disco principal | ✓ Protege | ✓ Protege | ✓ Protege |
| Roubo ou incêndio | ✗ Perde-se com o original | ✗ Perde-se com o original | ✓ Protege |
| Ransomware | ~ Só se estivesse desligado | ✗ Costuma ser cifrado também | ✓ Se for imutável ou com versões |
| Trabalho mensal que exige | Trocar e retirar o disco | Confirmar que continua a copiar | ✓ Nenhum depois de automatizada |

## O que a lei pede, e o prazo que tem de aguentar

O RGPD não fala de discos, fala de reposição. O artigo 32.º, n.º 1, alínea c) exige a capacidade de restabelecer a disponibilidade e o acesso aos dados pessoais de forma atempada em caso de incidente físico ou técnico, e a alínea d) exige testar e avaliar regularmente a eficácia dessas medidas. Uma cópia que ninguém testou falha nas duas.

A isso junta-se o prazo de conservação. O Código Deontológico da Ordem dos Médicos Dentistas determina que o prestador de cuidados de medicina dentária tenha um arquivo com todos os processos clínicos individuais dos doentes, qualquer que seja o formato, e que o conserve pelo prazo mínimo de 20 anos.

> **Conservar vinte anos não é o mesmo que ter vinte anos de cópias.** São duas obrigações distintas: a cópia serve para recuperar de uma avaria, o arquivo serve para responder a um doente ou a uma inspeção daqui a dez anos. Um software que só permite repor o último mês não cobre a segunda.

![Lista de faturas com os estados emitida, paga, parcialmente paga, vencida e rascunho](/screenshots/invoices.png)

*A faturação tem os seus próprios prazos de conservação e também tem de sobreviver à reposição.*

## O ensaio de reposição, passo a passo

É meia hora por ano, e é a única coisa que distingue uma cópia de segurança de uma pasta com dados pesados.

1. **Escolha uma cópia ao acaso**, não a desta noite. A de há três semanas diz muito mais sobre se o processo se aguenta ao longo do tempo.
2. **Reponha-a noutro equipamento ou servidor**, nunca por cima do sistema em produção.
3. **Cronometre** desde que começa até a agenda de amanhã abrir. Esse número é o seu tempo real de recuperação e quase sempre surpreende.
4. **Abra três pacientes concretos** e confirme que estão lá o odontograma, as radiografias e o último orçamento.
5. **Confirme a faturação do último trimestre**, a parte que ninguém consulta até faltar.
6. **Registe a data, o tempo e quem o fez.** Esse registo é também a sua prova de diligência perante o artigo 32.º.

## As falhas que reduzem uma cópia a nada

- **Ninguém lê os avisos de erro.** Uma tarefa que falha há onze semanas envia um aviso todas as noites para um endereço que já ninguém abre.
- **A cópia está na mesma máquina**, noutra pasta ou noutra partição. Isso protege de uma eliminação acidental e de mais nada.
- **O disco de cópias fica sempre ligado**, por isso o ransomware cifra-o com o resto.
- **A cópia não está cifrada.** Um disco perdido com o histórico de toda a clínica é uma violação de dados a notificar, não um contratempo.
- **Só o informático que a montou sabe repor**, e já não trabalha ali. Escreva o procedimento e guarde-o fora do sistema que teria de repor.
- **A cópia é do fornecedor e nunca ninguém pediu uma exportação própria.** Se o fornecedor desaparecer, a cópia desaparece com ele.

No Dentalpin a cópia é um dump normal de PostgreSQL mais a diretoria de documentos, por isso pode automatizá-la com as ferramentas que já usa e repô-la sem nos pedir autorização nem esperar por ninguém. As condições da versão alojada e da instalação no seu servidor estão em [preços](/pt/precos/), e para ensaiar uma reposição antes de decidir, [instalá-lo demora três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigo 32.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 10 de agosto de 2026.
- Ordem dos Médicos Dentistas, Código Deontológico, Título II. [omd.pt](https://www.omd.pt/deontologia/codigo-deontologico/titulo-ii-cap4/). Consultado a 10 de agosto de 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Consultado a 10 de agosto de 2026.

Isto não é aconselhamento jurídico. Os prazos concretos dependem do seu caso e convém confirmá-los com o seu jurista ou com a ordem profissional.
