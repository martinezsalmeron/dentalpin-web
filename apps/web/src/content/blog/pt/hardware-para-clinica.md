---
title: "Que computadores precisa mesmo uma clínica dentária?"
description: "Quantos postos são precisos na receção e em cada gabinete, o que o Windows 11 exige hoje, quando a substituição se torna inevitável e o que não vale a pena comprar."
pubDate: 2026-09-10
translationKey: hardware-clinica-dental
tags: [hardware, postos-de-trabalho, windows, infraestrutura, gabinete]
---

Uma clínica de dois ou três gabinetes precisa de menos máquinas, e mais baratas, do que a maioria dos orçamentos assume: um posto na receção, um por gabinete e pouco mais. O que decide a despesa não é o tamanho da clínica, é uma única pergunta: o software de gestão é um programa de Windows instalado ou funciona no navegador?

Com software instalado, cada posto tem de correr o programa e há quase sempre um servidor por trás. No navegador, serve qualquer máquina que abra o Chrome ou o Firefox sem esforço, e o trabalho pesado fica do lado do servidor, esteja ele onde estiver.

## A pergunta que define o orçamento

Antes de olhar para um único modelo, perceba em qual dos dois mundos vai estar. Muda o número de postos, a potência que precisam e o custo de os manter.

- **Software instalado.** O programa é instalado em cada posto e os dados vivem num servidor da clínica. Precisa desse servidor, de cablagem que lhe chegue, de cópias de segurança locais e de alguém que o mantenha. Os requisitos são publicados pelo fornecedor, e pedem-se por escrito antes de comprar o que quer que seja.
- **Software no navegador.** O posto só tem de abrir um separador. Um portátil de gama média com quatro anos chega, e o que merece atenção é a ligação e o ecrã, não o processador.
- **O caso misto.** A gestão corre no navegador e a imagem (radiologia, scanner intraoral) continua a ser um programa de Windows. É a situação mais comum, e significa que o posto do gabinete é dimensionado pelo software de imagem, não pelo de gestão.

> **Peça os requisitos por escrito antes de assinar.** Um fornecedor que não publica nem envia os requisitos mínimos do próprio produto está a deixar a fatura do equipamento aparecer depois do contrato, quando já não há nada para negociar.

## Os mínimos do Windows 11, e o que convém comprar mesmo

A Microsoft publica os requisitos mínimos do Windows 11, e são baixos. Servem para o sistema arrancar, não para uma receção trabalhar com quinze separadores abertos e uma radiografia a carregar.

| Componente | Mínimo publicado pela Microsoft | O que convém comprar |
|---|---|---|
| Processador | 1 GHz, 2 ou mais núcleos, 64 bits | 4 núcleos ou mais, dos últimos cinco anos |
| Memória | 4 GB | 16 GB, com 8 GB como limite absoluto |
| Armazenamento | 64 GB | SSD de 256 GB ou mais, nunca disco mecânico |
| Firmware | UEFI compatível com Secure Boot | O mesmo, verificado antes da compra |
| TPM | Versão 2.0 | Versão 2.0, ativado de origem |
| Gráficos | DirectX 12 com controlador WDDM 2.0 | O gráfico integrado no processador chega |
| Ecrã | 720p com mais de 9 polegadas | 24 polegadas e 1080p na receção |

Os dois números que mudam o dia a dia são a memória e o disco. Uma máquina com 8 GB e SSD trabalha melhor do que uma com 16 GB e disco mecânico, e a passagem para SSD é a única compra que toda a gente nota logo na primeira manhã.

![Agenda do dia num ecrã de receção, com uma coluna por gabinete e os espaços livres visíveis](/screenshots/schedule-day.png)

*A vista de dia com uma coluna por gabinete: o ecrã que a receção tem aberto desde que a clínica abre.*

## Onde o dinheiro se nota e onde não

Nem todos os componentes se notam da mesma forma ao balcão. Esta é a secção que mais orçamento poupa.

| Onde gastar | Nota-se na clínica? | Porquê |
|---|---|---|
| SSD em vez de disco mecânico | ✓ Todos os dias | Arranque, abertura de fichas e pesquisas |
| Memória de 8 para 16 GB | ✓ Na receção | Muitos separadores e a imagem ao mesmo tempo |
| Ecrã grande na receção | ✓ Todos os dias | Agenda de vários gabinetes sem andar a deslizar |
| Rede por cabo no gabinete | ✓ Com imagem pesada | Uma radiografia por wi-fi saturado obriga a esperar |
| Segundo ecrã na receção | ~ Depende do fluxo | Útil quando faturar e atender se sobrepõem |
| Processador de gama alta | ✗ Quase nunca | O estrangulamento está no disco e na rede |
| Placa gráfica dedicada | ✗ Quase nunca | Salvo exigência escrita do software de imagem |
| Máquina "para a saúde" com acréscimo | ✗ Não | Nenhuma certificação justifica o preço por si só |

A linha do wi-fi é a que evita mais discussões. Um gabinete que envia imagens grandes vai por cabo sempre que for possível, e quando não for, o ponto de acesso fica no corredor do gabinete e não no escritório ao fundo.

## A data que decide quando substituir

O Windows 10 deixou de ter suporte a 14 de outubro de 2025. Desde então a Microsoft não publica atualizações de segurança nem correções para essas máquinas, salvo inscrição no programa de atualizações de segurança alargadas.

> **A extensão para consumidores vai até 12 de outubro de 2027**, e a inscrição mantém-se aberta até essa mesma data (consultado a 10 de setembro de 2026). É um prazo, não uma alternativa a substituir: traz apenas correções de segurança críticas, sem suporte técnico nem melhorias.

Para uma clínica, isso transforma a substituição num calendário em vez de uma urgência. Uma máquina que não pode passar para Windows 11 por falta de TPM 2.0 ou de Secure Boot tem data de substituição conhecida, e a despesa reparte-se por dois exercícios em vez de trocar cinco postos no mesmo mês.

## Home ou Pro: a diferença que conta com dados de pacientes

Na loja parecem o mesmo computador com duas etiquetas. Para uma clínica não são, e a diferença chama-se cifragem do disco.

> **O BitLocker não se ativa no Windows Home.** A Microsoft lista-o como disponível no Pro, Enterprise, Pro Education e Education. Um portátil da receção sem cifrar que desaparece numa sexta-feira é uma violação de dados de saúde; cifrado, é uma máquina para repor.

Dois pormenores a conhecer antes de o discutir com o fornecedor:

- **A cifragem de dispositivo existe em todas as edições**, mas só se ativa automaticamente em máquinas que cumprem certos requisitos, e a partir do Windows 11 versão 24H2 esses requisitos foram aliviados, pelo que há mais máquinas elegíveis.
- **O BitLocker com verificação de integridade no arranque exige TPM 1.2 ou posterior.** Sem TPM ainda é possível cifrar, mas a máquina arranca com uma chave numa pen, que numa receção acaba colada ao computador e deixa de proteger o que quer que seja.

Peça a edição Pro no orçamento do equipamento. Passar de Home para Pro depois é possível, mas fatura-se à parte e cai sempre na pior semana.

## Receção, gabinete e escritório pedem coisas diferentes

Um modelo único para toda a clínica é cómodo de comprar e mau de usar. Três perfis cobrem qualquer clínica pequena.

1. **Receção.** É o posto que mais horas trabalha e mais janelas abre. Ecrã grande, 16 GB, SSD e um teclado em que se possa escrever. É aqui que a poupança se paga em espera à frente do paciente.
2. **Gabinete.** É dimensionado pelo software de imagem, se existir. Sem imagem, chega uma máquina modesta ou um tablet com teclado. O que é preciso mesmo é poder desinfetar: superfície lisa, sem grelhas viradas para cima, e um suporte que a afaste da zona de salpico.
3. **Escritório ou direção.** Um portátil, para ver os números fora da clínica sem levar uma cópia da base de dados numa pen.

![Ficha de paciente aberta no odontograma, com alertas clínicos e o plano de tratamento em curso](/screenshots/dental-chart.png)

*A ficha do paciente como aparece durante a consulta: odontograma, alertas e plano em curso no mesmo ecrã.*

## O servidor, só se fizer mesmo falta

Um servidor na clínica justifica-se em dois casos: quando o software de gestão instalado o exige, ou quando decidiu alojar você mesmo um software web para que os dados não saiam do edifício.

Em qualquer dos dois, o que é preciso é menos espetacular do que o que se vende:

- **Uma máquina dedicada, não a da receção.** Partilhar o servidor com um posto de trabalho significa que um reinício a meio da manhã para a clínica inteira.
- **Disco SSD e uma cópia que sai do edifício.** O servidor não é a cópia de segurança. É exatamente a máquina que avaria.
- **Uma UPS.** Um corte de energia a meio de uma escrita é a forma mais rápida de corromper uma base de dados, e uma UPS custa menos do que uma tarde de recuperação.
- **Alguém a quem ligar.** Por escrito, com horário e tempo de resposta. Um servidor sem manutenção acordada é um servidor sem manutenção.

## Antes de comprar, por esta ordem

1. **Peça ao fornecedor de software os requisitos mínimos e recomendados**, por escrito, incluindo o software de imagem.
2. **Inventarie o que já tem**: processador, memória, disco, edição do Windows e se aceita Windows 11.
3. **Separe o que se atualiza do que se substitui.** Muitos postos precisam só de um SSD e de memória, e isso é uma tarde, não um investimento.
4. **Decida a edição**, Pro onde passarem dados de pacientes.
5. **Veja a rede antes dos computadores.** Se o gabinete está em wi-fi e a imagem se arrasta, nenhum computador novo resolve.
6. **Compre por perfis**, não um modelo único para todos os postos.
7. **Guarde faturas e números de série junto ao inventário.** No dia do incidente, essa lista vale mais do que o equipamento.

## O que não é preciso comprar

Quatro rubricas aparecem em quase todos os orçamentos e quase nunca se justificam numa clínica pequena: a placa gráfica dedicada sem um requisito escrito que a peça, o processador de gama alta para abrir um navegador, a máquina que custa mais por ser vendida "para a saúde", e o servidor comprado por precaução antes de se saber se o software precisa dele.

A quinta é mais cara do que as outras quatro juntas: renovar todos os postos ao mesmo tempo porque ninguém olhou para o inventário até uma máquina deixar de arrancar.

Se o software de gestão funciona no navegador, os requisitos de um posto são os do navegador e pouco mais. O Dentalpin é desse tipo: usa-se a partir do Chrome ou do Firefox em qualquer máquina razoável, e pode ser alojado na clínica ou fora dela, por isso a decisão do servidor é sua e não imposta pela licença. Os planos estão na página de [preços](/pt/precos/).

Isto não é aconselhamento técnico para a sua instalação concreta. Os requisitos do seu software de imagem mandam sobre qualquer recomendação geral deste artigo.

## Fontes

- Microsoft, requisitos de sistema do Windows 11: <https://www.microsoft.com/en-us/windows/windows-11-specifications> (consultado a 10 de setembro de 2026).
- Microsoft, fim do suporte do Windows 10 a 14 de outubro de 2025: <https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025> (consultado a 10 de setembro de 2026).
- Microsoft, programa de atualizações de segurança alargadas do Windows 10: <https://www.microsoft.com/en-us/windows/extended-security-updates> (consultado a 10 de setembro de 2026).
- Microsoft, BitLocker: edições compatíveis e requisitos de sistema: <https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/> (consultado a 10 de setembro de 2026).
