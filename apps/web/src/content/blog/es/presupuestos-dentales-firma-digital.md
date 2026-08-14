---
title: "Presupuestos dentales con firma digital: validez y flujo"
description: "Qué nivel de firma electrónica da validez a un presupuesto dental, qué pasa en España cuando el paciente lo impugna y cómo montar el flujo sin papel."
pubDate: 2026-08-14
tags: [presupuestos, firma-electronica, clinica-dental, software-dental]
---

Un presupuesto firmado en la tableta de recepción es válido. El Reglamento eIDAS prohíbe negarle efectos jurídicos a una firma por el mero hecho de ser electrónica, así que el debate no es si vale, sino qué tendrás que demostrar el día que el paciente diga que nunca aceptó ese importe.

Ahí está la única distinción que importa: solo la firma electrónica cualificada equivale automáticamente a la manuscrita. Las demás valen, y la carga de probarlo es tuya.

## Los tres niveles, y qué te juegas con cada uno

El artículo 3.10 del eIDAS define firma electrónica como "los datos en formato electrónico anejos a otros datos electrónicos o asociados de manera lógica con ellos que utiliza el firmante para firmar". Con esa definición, marcar una casilla ya es una firma electrónica. Lo que no es, es una firma avanzada ni cualificada.

| | Firma simple | Firma avanzada | Firma cualificada |
|---|---|---|---|
| Ejemplo típico | Casilla aceptada, garabato en la tableta, respuesta por email | Firma con verificación de identidad y sellado de integridad | Certificado cualificado y dispositivo cualificado de creación |
| Admisible como prueba | ✓ Artículo 25.1 | ✓ Artículo 25.1 | ✓ Artículo 25.1 |
| Equivale a la firma manuscrita | ✗ No de forma automática | ✗ No de forma automática | ✓ Artículo 25.2 |
| Vinculación unívoca al firmante | ✗ No exigida | ✓ Artículo 26.a y 26.b | ✓ Incluida |
| Detecta cualquier cambio posterior | ✗ No exigida | ✓ Artículo 26.d | ✓ Incluida |
| Quién carga con la prueba si se impugna | La clínica | La clínica | ~ Se invierte, ver más abajo |
| Fricción para el paciente | ✓ Ninguna | ~ Media | ✗ Alta, necesita certificado |

> **Solo la cualificada equivale a la manuscrita.** El artículo 25.2 del eIDAS lo dice en una línea: "Una firma electrónica cualificada tendrá un efecto jurídico equivalente al de una firma manuscrita". El 25.1 protege a las demás de que se las rechace por electrónicas, que no es lo mismo que darles ese efecto.

![Presupuesto de un paciente con los tratamientos, los totales, la validez y el plan vinculado](/screenshots/budgets.png)

*Un presupuesto con sus tratamientos, su total y su fecha de validez: lo que el paciente acepta cuando firma.*

## Qué cambia en España cuando alguien impugna

La Ley 6/2020 remite en su artículo 3 a la Ley de Enjuiciamiento Civil, y ahí está la diferencia práctica entre los niveles de firma.

El artículo 326.3 de la LEC dice que, si se impugna la autenticidad o la integridad de un documento electrónico respaldado por un servicio de confianza **no** cualificado, se procede como con cualquier documento privado: cotejo pericial, otros medios de prueba y valoración según las reglas de la sana crítica. Es decir, te toca a ti.

El 326.4 cambia el reparto cuando el servicio sí es cualificado y figuraba en la lista de confianza en el momento relevante: "se presumirá que el documento reúne la característica cuestionada y que el servicio de confianza se ha prestado correctamente".

> **La carga de comprobar se le da la vuelta.** El mismo artículo 326.4 sigue: "Si aun así se impugnare el documento electrónico, la carga de realizar la comprobación corresponderá a quien haya presentado la impugnación", con las costas a su cargo si el resultado es negativo y una multa de 300 a 1200 euros si el tribunal considera temeraria la impugnación.

Esto no es asesoramiento legal. Qué nivel de firma le conviene a tu clínica depende de tus importes, de tu volumen y de tu seguro de responsabilidad civil, y conviene confirmarlo con tu asesoría o con tu colegio profesional.

## Qué tiene que guardar el presupuesto firmado

La firma sin el resto es un adorno. Lo que sostiene un presupuesto meses después es el conjunto:

- **La versión exacta que se firmó.** No el presupuesto de hoy, sino el PDF congelado en el momento de la aceptación, con sus tratamientos, sus importes y su fecha de validez.
- **Quién firmó y cómo se comprobó.** Nombre, documento, y qué se usó para verificar que era esa persona y no su acompañante.
- **Cuándo se firmó, con una fecha oponible.** Una fecha guardada en tu propia base de datos la fija quien controla la base de datos, que eres tú.
- **La evidencia técnica de la firma.** El artículo 26.d del eIDAS pide que cualquier modificación posterior sea detectable, y eso solo se demuestra conservando lo que permite verificarlo.
- **La copia que se entregó al paciente.** Si no puedes acreditar que se la llevó, el presupuesto firmado prueba el importe y no prueba la información previa.
- **El vínculo con el plan de tratamiento.** Un presupuesto aceptado que nadie puede relacionar con lo que después se ejecutó no sirve para responder a una reclamación.

![Plan de tratamiento de un paciente dividido en fases](/screenshots/treatment-plan.png)

*El plan de tratamiento por fases: lo que se ejecuta después de aceptar, y lo que hay que poder enlazar con el presupuesto firmado.*

## El flujo, paso a paso

1. **Cierra el presupuesto antes de enviarlo.** Genera un documento con número, fecha y validez, y bloquéalo. Si se puede editar después de firmado, no has firmado nada.
2. **Envíalo por un canal que deje rastro**, con el documento adjunto o enlazado a un enlace que caduque, no como un mensaje que dice "ya lo hemos hablado".
3. **Identifica al firmante antes de la firma**, no después. Es el paso que se salta siempre y el único que no se puede reconstruir a posteriori.
4. **Deja constancia de la lectura**, con el documento visible entero antes del botón de aceptar.
5. **Firma y sella.** Guarda el documento firmado junto con la evidencia que permita verificar la firma más adelante.
6. **Entrega la copia al paciente** en el momento, por correo electrónico o descarga, y registra ese envío.
7. **Archiva el firmado como inmutable** y deja el presupuesto editable como una versión nueva. Cuando el paciente pide cambiar dos tratamientos, se emite otro presupuesto, no se toca el aceptado.
8. **Enlázalo con el plan de tratamiento** para que la ejecución y la aceptación queden en la misma ficha.

El paso 7 es el que decide si dentro de dos años tienes un documento o una hoja de cálculo con el estado actual.

## Los fallos que dejan un presupuesto firmado sin valor

- **Se firma un documento que sigue siendo editable.** Cualquier cambio posterior, aunque sea corregir una errata, destruye la integridad que le daba valor.
- **La firma se guarda como imagen suelta.** Un PNG del garabato pegado a un PDF no vincula nada: cualquiera puede pegarlo en otro documento.
- **Nadie conserva la evidencia de verificación.** El documento firmado se guarda, y el registro que permitía comprobar la firma se pierde con el proveedor.
- **El paciente nunca recibió copia.** El presupuesto está firmado y no hay forma de acreditar que se le entregó.
- **Se firma en el móvil de recepción** con la cuenta abierta de otra persona, así que el registro dice quién estaba conectado, no quién firmó.
- **Los presupuestos aceptados no se distinguen de los caducados.** Sin estado ni fecha de validez, el listado no responde a la única pregunta útil.

## Cómo comprobar el tuyo en diez minutos

1. **Abre un presupuesto aceptado el año pasado** y comprueba si puedes recuperar el documento tal y como se firmó, no el estado de hoy.
2. **Edita un tratamiento de ese presupuesto** y mira si el sistema te deja hacerlo sin dejar rastro.
3. **Busca dónde está la evidencia de la firma** y comprueba si puedes exportarla sin depender del proveedor.
4. **Pide el listado de presupuestos aceptados y no ejecutados**, que es el mismo dato que necesitas para el seguimiento comercial.
5. **Exporta un presupuesto firmado en un formato que puedas abrir sin el programa** y comprueba si la firma sigue siendo verificable fuera de él.

En Dentalpin el presupuesto se cierra con su número, su validez y sus tratamientos, la aceptación queda registrada con su fecha y su autor junto al plan de tratamiento del paciente, y todo sale en un volcado estándar de PostgreSQL cuando lo pidas. Las condiciones de la versión alojada y de la autoalojada están en [precios](/es/precios/).

## Fuentes

- Reglamento (UE) n.º 910/2014 del Parlamento Europeo y del Consejo, de 23 de julio de 2014, relativo a la identificación electrónica y los servicios de confianza para las transacciones electrónicas en el mercado interior, artículos 3, 25 y 26. [EUR-Lex 32014R0910](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014R0910). Consultado el 14 de agosto de 2026.
- Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza, artículo 3. [BOE-A-2020-14046](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046). Consultado el 14 de agosto de 2026.
- Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil, artículo 326, apartados 3 y 4, en la redacción dada por la disposición final segunda de la Ley 6/2020. [BOE-A-2000-323](https://www.boe.es/buscar/act.php?id=BOE-A-2000-323). Consultado el 14 de agosto de 2026.
