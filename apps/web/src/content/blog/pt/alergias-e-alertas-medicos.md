---
title: "Alergias e alertas médicos: que se vejam sempre"
description: "Seis campos por cada alergia, três respostas válidas quando não há nenhuma e os quatro sítios onde o alerta tem de aparecer sozinho. Com as fontes oficiais."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [alergias, alertas-clinicos, historico-clinico, seguranca-do-paciente, rgpd]
---

Uma alergia só protege o paciente se ocupar um campo próprio e aparecer sozinha onde se prescreve e onde se trata. Por cada uma registam-se seis coisas: a substância, o que aconteceu ao paciente, com que gravidade, se continua em vigor, se está confirmada ou apenas referida, e quando e por quem foi comunicada.

E quando não há nenhuma, isso também se escreve. Um campo de alergias em branco não diz que o paciente não tem alergias, diz que ninguém perguntou ainda, e as duas frases levam a decisões diferentes.

## Seis campos por alergia, e nenhum em texto livre

Uma alergia escrita na caixa de observações perde-se no dia em que essa caixa tem onze linhas. Deixa de poder ser filtrada, deixa de poder avisar seja quem for e deixa de poder ser migrada para outro programa.

| Campo | O que se regista | Exemplo |
|---|---|---|
| Substância | O princípio ativo ou o material, nunca só a marca | Amoxicilina, látex, clorexidina, níquel |
| Manifestação | O que aconteceu de facto, em termos clínicos | Urticária, angioedema, broncospasmo, anafilaxia |
| Gravidade | Como foi a reação que já ocorreu | Ligeira, moderada, grave |
| Criticidade | O dano possível numa exposição futura | Baixa, alta, não avaliável |
| Estado clínico | Se a alergia continua em vigor hoje | Ativa, inativa, resolvida |
| Verificação | De onde vem a informação | Não confirmada, confirmada, refutada, erro de registo |
| Data e origem | Quando foi registada e quem o disse | 12/03/2024, a própria paciente; relatório de imunoalergologia |

Estes campos não são uma convenção nossa. São os do recurso AllergyIntolerance do HL7 FHIR, a norma com que os sistemas de saúde trocam esta informação, e usar os mesmos valores é o que permite que a alergia sobreviva a uma mudança de programa.

> **Gravidade e criticidade são dois campos distintos, e confundi-los esvazia ambos.** O FHIR coloca a gravidade na reação concreta que ocorreu (ligeira, moderada ou grave) e a criticidade na substância, como estimativa do dano potencial de uma exposição futura. Um programa que oferece apenas uma lista obriga a escolher qual das duas se perde.

![Ficha de paciente no separador de informação, com o histórico médico aberto e a secção de alergias a mostrar AINEs assinalado com criticidade alta](/screenshots/patients.png)

*O histórico médico em campos separados: alergias, medicamentos, doenças sistémicas e condições especiais. A etiqueta laranja ao lado da alergia é o nível de criticidade.*

## Sem alergias conhecidas é um dado, um campo vazio não é

A norma CG183 do NICE britânico sobre alergia a medicamentos pede que o estado alérgico do paciente seja documentado com uma de três hipóteses: alergia a medicamentos, nenhuma conhecida, ou não foi possível apurar. As três são informação e as três se registam.

O campo vazio não é nenhuma das três. É a ausência da pergunta e, numa clínica onde várias pessoas registam, é impossível distingui-lo de um esquecimento.

> **Um campo vazio e um "nenhuma conhecida" leem-se quase da mesma maneira e significam o contrário.** O primeiro diz que ninguém perguntou. O segundo diz que se perguntou e a resposta foi não. Se o programa não os distingue, a clínica não consegue saber a quem falta a anamnese.

## Alergia, intolerância e efeito adverso não são a mesma coisa

A mesma norma do NICE pede que o estado alérgico seja documentado em separado das reações adversas a medicamentos e que fique claramente visível para todos os profissionais que prescrevem. O FHIR guarda isto num campo com dois valores, alergia ou intolerância, que separa o mecanismo imunológico de tudo o que não é.

Na prática a distinção é esta:

- **Alergia.** Há um mecanismo imunitário por trás. Urticária, angioedema, broncospasmo ou anafilaxia após a exposição.
- **Intolerância.** O paciente reage mal sem que esse mecanismo esteja envolvido.
- **Efeito adverso.** Um efeito conhecido do fármaco. As náuseas com um antibiótico são o exemplo de todos os dias.

Arrumar as três coisas na casa das alergias é cómodo no próprio dia e caro depois, porque retira opções terapêuticas que o paciente tolera e porque dilui as alergias verdadeiras entre entradas que não o são.

## Quase nenhuma alergia à penicilina é alergia à penicilina

É aqui que a distinção anterior custa mais caro, e há um número oficial para lhe dar dimensão.

> **Os CDC apresentam-no assim: 10 % dos pacientes norte-americanos declararam ser alérgicos à penicilina e, avaliados clinicamente, menos de 1 % o era.** Os mesmos CDC acrescentam que os anticorpos IgE específicos podem diminuir com o tempo, pelo que há pacientes que passam a tolerar mais tarde o que antes não toleravam.

Nada disto autoriza uma clínica dentária a ignorar uma alergia declarada. O que muda é o que se escreve, porque um rótulo sem história por trás nunca poderá ser reavaliado.

Se a ficha diz "alérgico à penicilina" e mais nada, esse rótulo acompanha o paciente para o resto da vida. Se diz qual foi a reação, em que ano ocorreu e quem o afirmou, um imunoalergologista tem com que a avaliar e, se for caso disso, retirá-la.

## Os alertas que não são alergias

A casa das alergias é a mais conhecida, mas metade do que é preciso ver antes de começar não é uma alergia.

- **Anticoagulantes e antiagregantes.** Alteram o planeamento de qualquer procedimento hemorrágico e são medicação, não alergia, por isso precisam de um campo próprio.
- **Bifosfonatos e denosumab.** Contam por via oral e por via endovenosa, e o que é preciso ter à mão é o fármaco, a indicação e desde quando.
- **Risco de endocardite infecciosa.** A norma de endocardite da Sociedade Europeia de Cardiologia de 2023 recomenda profilaxia antibiótica em pacientes de alto risco antes dos procedimentos dentários de risco, e define as duas coisas. Alto risco: endocardite prévia, prótese valvular cirúrgica ou por cateter, material de reparação valvular, cardiopatia congénita (exceto anomalias valvulares isoladas) e dispositivo de assistência ventricular como terapêutica de destino. Procedimentos de risco: extrações, cirurgia oral e qualquer manipulação da região gengival ou periapical, incluindo a destartarização e a endodontia.
- **Gravidez e amamentação.** Com data, porque é o único alerta desta lista que caduca sozinho.
- **Diabetes, epilepsia e imunossupressão.** Mudam a consulta, não apenas o tratamento.

O terceiro ponto é o que mais vezes chega tarde, porque a destartarização entra na lista de procedimentos de risco e costuma ser marcada como uma higiene de rotina. A mesma norma europeia recomenda a estes pacientes higiene dentária profissional e seguimento pelo menos duas vezes por ano, ou seja, são consultas frequentes e o alerta tem de chegar à agenda, não só à ficha.

## Um dado que é preciso ir procurar não é um alerta

Uma alergia perfeitamente registada num separador que ninguém abre protege o paciente exatamente tanto como não a ter. Estes são os quatro sítios onde tem de sair sozinha:

1. **O cabeçalho da ficha**, visível antes de abrir qualquer separador.
2. **A vista do odontograma**, que é onde se trabalha e onde se decide o que se faz hoje.
3. **A prescrição**, no momento de escolher o fármaco.
4. **A agenda**, antes de o paciente entrar pela porta, enquanto ainda há tempo de preparar alguma coisa.

![Ficha de paciente com os alertas clínicos destacados a vermelho ao lado do odontograma, o plano de tratamento ativo e a próxima consulta](/screenshots/dental-chart.png)

*O alerta clínico fixo na coluna da esquerda, ao lado do odontograma. Não é preciso abrir nada para o ver e continua ali ao mudar de separador.*

## Quem o vê e quem o pode alterar

O RGPD classifica os dados de saúde como categoria especial. O artigo 9.º, n.º 1 proíbe tratá-los salvo se aplicar uma das exceções do n.º 2, e o artigo 5.º, n.º 1, alínea c) acrescenta a minimização: adequados, pertinentes e limitados ao necessário.

Isso não impede a receção de ver um alerta. Obriga, sim, a decidir o que cada função precisa de ver, e quase nunca é a mesma coisa:

- **A receção** precisa de saber que aquela consulta exige preparação prévia, não do diagnóstico que a motiva.
- **O gabinete** precisa do alerta completo.
- **Todos** precisam de que a alteração fique com data, hora e autor, porque a alínea f) do mesmo artigo exige medidas técnicas e organizativas adequadas, e apagar uma alergia sem deixar rasto não é uma delas.

A alínea d) traz a metade que se esquece: os dados devem ser exatos e estar atualizados. Uma alergia refutada por um exame atualiza-se, não fica ali por precaução.

## Como se mantém em dia

1. **Na primeira consulta preenche-se por inteiro**, incluindo a opção "nenhuma conhecida" quando é essa a resposta.
2. **Em cada consulta confirma-se numa linha.** Não é repetir a anamnese, é perguntar se há medicação ou diagnóstico novo.
3. **Antes de prescrever ou de anestesiar relê-se.** É o único momento em que o alerta ainda pode evitar o dano.
4. **Quando chega um relatório, atualiza-se a verificação e a data**, e regista-se de onde vem.
5. **Ao reativar um paciente inativo revê-se por inteiro.** Dois anos sem vir são dois anos de medicação nova.

## Onde o software ajuda e onde não ajuda

Nenhum programa faz a anamnese. O que o suporte decide é se a resposta pode ficar guardada num campo com estado, criticidade e data ou acaba num parágrafo de texto livre, e onde volta a sair sozinha sem que ninguém se lembre de a ir ver.

O Dentalpin guarda alergias, medicação, doenças sistémicas e condições especiais como campos separados do histórico médico, com nível de criticidade, e mostra os alertas fixos ao lado do odontograma e no cabeçalho da ficha. Os planos estão em [preços](/pt/precos/).

Isto não é aconselhamento jurídico nem uma norma clínica. As recomendações profissionais aplicáveis e a lei nacional do país onde a clínica exerce prevalecem sobre qualquer indicação geral deste artigo.

## Fontes

- HL7 FHIR R4, recurso AllergyIntolerance (elementos type, category, criticality, clinicalStatus, verificationStatus e reaction.severity): <https://hl7.org/fhir/R4/allergyintolerance.html> (consultado a 12 de setembro de 2026).
- NICE, norma clínica CG183, *Drug allergy: diagnosis and management*, recomendações sobre documentação do estado alérgico. Texto integral do National Clinical Guideline Centre: <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (consultado a 12 de setembro de 2026).
- CDC, *Penicillin Allergy*: <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (consultado a 12 de setembro de 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), pp. 3948-4042: <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (consultado a 12 de setembro de 2026).
- Regulamento (UE) 2016/679 (RGPD), artigos 5.º, n.º 1, alíneas c), d) e f), e 9.º, n.º 1. Texto oficial no EUR-Lex: <https://eur-lex.europa.eu/legal-content/PT/TXT/HTML/?uri=CELEX:32016R0679> (consultado a 12 de setembro de 2026).
