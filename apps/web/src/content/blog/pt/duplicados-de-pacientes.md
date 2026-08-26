---
title: "Pacientes duplicados: limpar a base sem perder nada"
description: "Como encontrar fichas de paciente duplicadas, decidir qual fica e juntá-las sem perder processo clínico nem faturas, e evitar que voltem a aparecer."
pubDate: 2026-08-26
translationKey: pacientes-duplicados-limpiar
tags: [duplicados, processo-clinico, qualidade-dos-dados, rgpd]
---

Não apague nenhuma das duas fichas. Escolhe-se uma ficha que fica, move-se para ela tudo o que está ligado à outra (consultas, orçamentos, faturas, imagens, consentimentos) e a ficha perdedora fica arquivada e ligada à primeira, nunca eliminada. E antes de juntar o primeiro par convém corrigir o momento em que as fichas são criadas, porque senão daqui a um ano limpa-se a mesma base outra vez.

O prejuízo de um duplicado não são duas linhas numa tabela. É a alergia estar anotada numa ficha enquanto a extração se prepara a partir da outra.

## De onde vêm os duplicados

Quase sempre dos mesmos cinco sítios, e nenhum é descuido de quem atende.

- **A ficha é criada antes de alguém procurar.** O telefone toca, há três pessoas à espera, e o botão de "novo paciente" está mais à mão do que a pesquisa.
- **A mesma pessoa entra por duas portas.** Marcação online, telefone, chegada ao balcão, mensagem. Se cada canal pode criar ficha sem verificar, cada canal produz duplicados.
- **O nome não é um dado estável.** Nomes com quatro apelidos, um deles escrito por extenso numa ficha e abreviado na outra, acentos que umas vezes aparecem e outras não, nomes compostos partidos ao meio.
- **A migração correu duas vezes**, ou importou pacientes que já existiam no sistema novo.
- **A família partilha os contactos.** O número da mãe está nas fichas dos três filhos, e qualquer pesquisa por telefone devolve quatro pessoas diferentes que não são duplicados.

## Procurar por sinais, não por nome

Listar todos os homónimos dá uma lista comprida e cheia de falsos positivos. O que resulta é cruzar dois sinais ao mesmo tempo e ordenar o resultado pela fiabilidade da combinação.

| Sinal | Fiabilidade | Para que serve |
|---|---|---|
| Número de identificação igual | ✓ Muito alta | Ver primeiro, é quase uma certeza |
| Telefone + data de nascimento | ✓ Alta | A combinação mais rentável numa clínica |
| Nome normalizado + data de nascimento | ✓ Alta | Encontra quem mudou de número |
| Mesmo endereço de e-mail | ~ Média | As famílias partilham a caixa de correio |
| Só o número de telefone | ✗ Baixa | Devolve famílias inteiras |
| Apelido + código postal | ✗ Baixa | Vizinhos e familiares |

Normalizar antes de comparar é metade do trabalho. No nome: tudo em minúsculas, fora acentos, fora pontos e hífenes, espaços reduzidos. No telefone: fora espaços e indicativo, e comparam-se os últimos nove dígitos.

É assim que "José Mª Nunes-Correia" e "jose maria nunes correia" caem no mesmo grupo, que é precisamente o que a pesquisa do balcão não faz.

![Ficha de paciente com o separador de dados aberto: nome, número de identificação, data de nascimento, telefone, e-mail e endereço](/screenshots/patients.png)

*Os campos que se comparam para decidir se duas fichas são a mesma pessoa. A data de nascimento é a que mais distingue e a que mais vezes está por preencher.*

## Qual fica: quase nunca a mais recente

A ficha recente costuma ser a criada à pressa: o nome bem escrito e mais nada lá dentro. A antiga é a que tem o odontograma, as radiografias e oito anos de histórico.

> **Fica a ficha com conteúdo clínico, não a que tem os contactos certos.** Um número de telefone copia-se em dez segundos. Um odontograma com doze tratamentos e as respetivas datas, não.

Quando ambas têm conteúdo real, a ordem de desempate é esta:

1. **A que tem histórico clínico e odontograma.** É a parte que não se reescreve sem perder datas e autoria.
2. **A que aparece em faturas emitidas.** Mudar uma fatura de ficha é simples, mas quantas menos se mexerem, melhor.
3. **A mais antiga**, porque o número de processo que o paciente ouve há anos é esse.

Os dados de identificação reconciliam-se campo a campo depois, não em bloco. No nome ganha muitas vezes a ficha nova, no histórico clínico ganha sempre a antiga.

## A junção, passo a passo

1. **Faça uma cópia antes de mexer em seja o que for.** Uma junção raramente tem botão para desfazer, e onde tem, não desfaz o que já foi impresso.
2. **Abra as duas fichas e liste o que está ligado a cada uma**: consultas passadas e futuras, orçamentos, faturas, pagamentos e dívidas, radiografias e fotografias, consentimentos assinados, notas clínicas, trabalhos de laboratório e tratamentos de ortodontia a decorrer.
3. **Decida qual fica** com a ordem acima e escreva a decisão antes de começar.
4. **Mova, não reescreva.** Copiar à mão uma nota clínica muda-lhe a data e o autor, e isso é exatamente o que um registo clínico não pode perder.
5. **Não renumere nem reemita nenhuma fatura.** Uma fatura emitida é um documento fechado: muda-se o paciente a que aponta, nunca o número, a data ou os valores.
6. **Arquive a ficha perdedora ligada à que ficou.** Quem procurar pelo número antigo tem de chegar à ficha certa, não a um erro.
7. **Registe quem juntou, quando e a partir de que ficha.** Daqui a dois anos essa nota é a única explicação para o salto no histórico.
8. **Reveja os alertas médicos da ficha resultante.** Alergias, anticoagulantes e pré-medicação são a primeira coisa que se perde numa junção mal feita.

> **As faturas são a parte que não admite improviso.** Uma numeração já emitida fica exatamente como está. Se a junção parecer obrigar a reemitir alguma coisa, deixou de ser uma junção, e essa decisão é de quem trata da contabilidade.

![Lista de faturas com os estados emitida, paga, paga em parte, vencida e rascunho](/screenshots/invoices.png)

*O que está ligado a uma ficha e não pode ser reescrito. Antes de juntar convém saber quantas faturas existem de cada lado e em que estado estão.*

## Os que parecem duplicados e não são

Juntar duas fichas que não eram a mesma pessoa é pior do que o problema inicial, porque mistura dois históricos clínicos.

- **Famílias com um único contacto.** Três irmãos com o número da mãe são três pacientes.
- **Pai e filho com o mesmo nome.** A data de nascimento separa-os, o nome não.
- **Gémeos.** Mesmo apelido, mesma data de nascimento, mesmo endereço, mesmo número. É o único caso em que é preciso ler o histórico antes de decidir.
- **Menores sem documento próprio.** Falta-lhes o sinal mais fiável, por isso comparam-se nome, data de nascimento e responsável.

Na dúvida não se junta: marca-se o par como revisto e pergunta-se ao paciente na consulta seguinte.

## O que a norma exige

Isto não é aconselhamento jurídico, mas há dois pontos a conhecer antes de limpar uma base de pacientes.

O artigo 5.º, n.º 1, alínea d) do RGPD exige que os dados pessoais sejam exatos e, se necessário, atualizados, e que sejam tomadas todas as medidas razoáveis para que os dados inexatos sejam apagados ou retificados sem demora. Uma base cheia de duplicados falha isso à partida, por isso limpá-la não é apenas higiene interna.

O artigo 16.º acrescenta o direito do paciente a obter sem demora injustificada a retificação dos dados inexatos e a que os dados incompletos sejam completados, inclusive através de uma declaração adicional. É exatamente a situação de quem tem meio histórico em cada ficha.

E a razão para arquivar em vez de apagar é o outro lado da mesma moeda: a obrigação de conservação recai sobre o processo clínico, não sobre o número de ficha onde ele calha estar. Apagar uma ficha perdedora com conteúdo clínico lá dentro continua a ser um problema, seja qual for o prazo aplicável.

## Para não voltarem a aparecer

Limpar sem mudar o circuito de admissão é trabalho que se repete. Cinco alterações que quebram o ciclo:

- **Procurar antes de criar, e fazer da procura o caminho fácil.** Se for preciso escrever o nome completo para encontrar alguém, cria-se ficha nova.
- **Data de nascimento obrigatória desde o primeiro contacto.** É o campo que transforma uma pesquisa ambígua numa certeza, e o que toda a gente salta.
- **Normalizar ao gravar**, não ao procurar. Acentos, espaços a mais e indicativos limpam-se uma vez, à entrada.
- **Fazer a marcação online corresponder à base** em vez de criar sempre ficha nova. É a porta que gera mais duplicados.
- **Um relatório de possíveis duplicados por semana.** Dez pares por semana revêem-se em cinco minutos; mil pares por ano não os revê ninguém.

## O que o software deve permitir

Uma junção segura depende de quatro coisas: uma pesquisa que tolere acentos e variantes, um relatório de duplicados que se possa rever par a par, uma junção que mova os registos em vez de os copiar, e um rasto de quem a fez e quando.

O Dentalpin tem esses quatro pontos e guarda a ficha juntada como alias da que ficou, por isso o número de processo antigo continua a levar ao sítio certo. Instala-se no seu próprio servidor ou usa-se na versão gerida, e os [preços](/pt/precos/) estão publicados no site.

## Fontes

Todas consultadas a 26 de agosto de 2026.

- Regulamento (UE) 2016/679 (RGPD), artigo 5.º, n.º 1, alíneas d) e e), e artigo 16.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- Commission nationale de l'informatique et des libertés, texto do Regulamento, capítulos II e III. [cnil.fr](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3)
