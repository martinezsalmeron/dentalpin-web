---
title: "Dentalpin frente a Luna Salud: odontograma con CPOD, tarifa en pesos y el módulo que ningún plan nombra"
description: "Comparativa entre Luna Salud, expediente médico multiespecialidad con odontograma FDI y cálculo de CPOD, y Dentalpin, open source y gratis. Con precios publicados y fuentes."
pubDate: 2026-10-01
tags: [comparativa, luna-salud, software-dental, mexico]
---

Luna Salud no es software dental. Es un expediente clínico electrónico para dieciséis especialidades médicas que, desde hace poco, trae una página de odontología con odontograma de notación FDI y cálculo automático de CPOD. Esa diferencia de origen explica casi todo lo que sigue, lo bueno y lo que falta.

Nosotros hacemos Dentalpin, así que no somos neutrales. Lo que sí podemos ser es exactos.

> **Cómo está hecha esta comparativa.** Todo lo que aquí se afirma sobre Luna Salud sale de páginas que publica Luna Salud en lunasalud.mx, con enlace y fecha al final. Ningún comparador ni ranking de "los mejores software dentales": se contradicen entre sí y varios los escribe un competidor. Y hay una sección entera sobre cuándo Luna Salud es la mejor opción, porque la hay.

## En treinta segundos

**Luna Salud es la opción si tu consultorio no es solo dental.** Si atiendes odontología junto con medicina general, nutrición o psicología, o si tienes un área de hospitalización, no vas a encontrar otro sistema mexicano que cubra las dieciséis especialidades con el mismo expediente. Trae telemedicina, transcripción automática de la consulta con IA, recetas electrónicas conectadas a farmacias y visor de estudios DICOM, y publica su tarifa completa en pesos.

**Dentalpin es open source y gratis si lo instalas tú**, sin costo por usuario ni por consultorio, con odontograma y periodontograma completos y todos los módulos en la misma instalación. A cambio, alguien tiene que ocuparse del servidor y de los respaldos, no timbramos CFDI y no hacemos telemedicina.

La pregunta que decide es si tu consultorio es dental o es una clínica con dentistas dentro. Si es lo segundo, la amplitud de Luna Salud gana sin discusión. Si es lo primero, hay una cosa en su tarifa que conviene mirar antes de firmar, y está tres secciones más abajo.

![Pantalla de inicio de Dentalpin con las citas del día, quién está en el consultorio, pagos vencidos y pacientes recientes](/screenshots/home.png)

*La vista del día con los datos del consultorio de demostración que trae la instalación.*

## Qué es Luna Salud

Un expediente clínico electrónico en la nube para clínicas privadas y profesionales independientes en México. Su portada lo define como "un software de expediente clínico electrónico que integra manejo de ingresos, agendamiento de citas médicas y todo lo necesario para la gestión eficiente de tu clínica", y su misión declarada es "democratizar el acceso a tecnología de expediente clínico electrónico de alta calidad".

La empresa es **Para Salud & Healthtech Luna SAPI de CV**, con domicilio en Aristóteles 77 int. 101, Polanco, Miguel Hidalgo, Ciudad de México, C.P. 11550, según sus propios términos y condiciones. Se rige por "las leyes Federales de los Estados Unidos Mexicanos" con tribunales en Cuauhtémoc. Es más identidad legal publicada de la que ofrecen varios competidores de este mercado, y hay que reconocérselo. **No aparece ningún RFC en las páginas consultadas.**

En su portada publica "+500 profesionales confían en Luna". Es su cifra, sin fuente ni fecha, y así conviene leerla.

El catálogo cubre psicología, dermatología, fisioterapia, ginecología, pediatría, nutrición, medicina estética, endocrinología, cardiología, cirugía, oftalmología, psiquiatría, traumatología, medicina deportiva, medicina general y odontología, más un módulo de hospitalización con censo de camas, farmacia y cuenta del paciente.

### Qué trae de verdad el lado dental

Esta es la parte que importa aquí, y es mejor de lo que suele ser cuando un sistema médico general añade una pestaña dental:

- **Odontograma interactivo con notación FDI (ISO 3950)**, 32 dientes permanentes y 20 temporales, numerados del 11 al 48 y del 51 al 85. Se marcan caries con superficie afectada, restauraciones, coronas, puentes, implantes y dientes faltantes.
- **Cálculo automático del índice CPOD/DMFT** a partir de las marcas del odontograma, graficado entre visitas para ver la evolución.
- **Índices periodontales como signos vitales**: índice gingival, índice de placa y profundidad de bolsa, con gráfica de evolución.
- **Plantilla de nota dental de 15 secciones**, con examen extraoral e intraoral, evaluación periodontal y hallazgos radiográficos.
- **Plan de tratamiento por pieza**, con costos, prioridad y estado, y consentimiento informado que el paciente firma desde su celular.
- **Portal del paciente con odontograma**, donde el paciente ve su propia boca con código de colores.
- **Visor de imágenes integrado** que abre radiografías y estudios DICOM (.dcm) hasta 20 MB, con zoom, rotación e inversión.

Se activa desde Cuenta › Organización › Perfil Clínico, y su centro de ayuda aclara que funciona en cuentas que ya existían con otra especialidad.

> **Lo que no hay es periodontograma.** La palabra no aparece en ninguna página consultada, ni en la de odontología ni en el artículo de ayuda. Lo que hay son índices periodontales agregados, que es otra cosa: un índice gingival resume la boca, un periodontograma registra los seis sitios de cada diente. Si haces periodoncia en serio, esa es la diferencia.

Dos límites más que ellos mismos publican sobre el visor: no lee JPEG 2000, JPEG-LS ni HTJ2K, y todavía no permite medir distancias ni ángulos ni dibujar anotaciones sobre la imagen. Tampoco aparece en ninguna página consultada una integración con sensores intraorales: las imágenes se suben ya exportadas.

## Qué es Dentalpin

Software de gestión dental open source. Te descargas el código, lo instalas donde quieras y no pagas licencia por sillón, por dentista ni por paciente.

Agenda, expediente clínico, odontograma, periodontograma, planes de tratamiento, presupuestos con firma, cobros, recordatorios por WhatsApp, inventario, órdenes de laboratorio e informes. Todos los módulos entran en la misma instalación, sin plan que los separe. Y un copiloto de IA que ejecuta operaciones sobre tus datos reales respetando los permisos de cada usuario.

Nosotros no timbramos CFDI ante el SAT, no hacemos telemedicina y no tenemos módulo de hospitalización. Conviene decirlo en la misma frase que lo demás, porque son tres filas que ellos ganan.

![Expediente del paciente en Dentalpin con el odontograma, las alertas clínicas, el plan activo y la próxima cita](/screenshots/dental-chart.png)

*El expediente del paciente con el odontograma, las alertas clínicas y el plan de tratamiento en la misma pantalla.*

## Lo que cuesta cada uno

Luna Salud publica su tarifa completa en pesos, en su propia página, y eso ya lo pone por delante de la mitad de este mercado. Estas son sus cifras tal como las muestra hoy:

| Plan de Luna Salud | Al mes | Al año | Usuarios incluidos |
|---|---|---|---|
| Esencial | $350 MXN | $1,900 MXN | 3 |
| Premium | $800 MXN | $5,600 MXN | 5 |
| Enterprise | Sin cifra | Sin cifra | Sin cifra |

Al pie: "Precios sin IVA. Se aplicará 16% de IVA para clientes en México". La prueba son 14 días y los usuarios extra se cobran aparte, "por usuario adicional sobre los incluidos en tu plan", sin que aparezca el importe por usuario en la página.

Tres cosas que conviene mirar despacio antes de hacer la cuenta.

**La primera es la diferencia entre pagar al mes y pagar al año.** Doce meses de Esencial a $350 son $4,200, y el plan anual cuesta $1,900. Es menos de la mitad. En Premium la diferencia es parecida, $9,600 contra $5,600. Son las cifras que publican hoy y así las reproducimos, pero un descuento de ese tamaño es justo lo que hay que confirmar por escrito antes de firmar, no después.

**La segunda es que la facturación electrónica se cotiza aparte.** Su tabla de planes marca "Facturación Electrónica" en los tres niveles, pero más abajo aparecen los "Folios de Facturación" como módulo adicional: "Paquetes de folios para facturación electrónica (CFDI). Cumple con los requisitos del SAT para tu clínica en México". Su artículo de ayuda lo confirma: el módulo "se cotiza por separado según tu volumen mensual de facturas". Ninguna página consultada nombra al PAC que timbra ni dice si es CFDI 4.0.

**Y la tercera es la que decide para un consultorio dental.**

> **Ningún plan de Luna Salud nombra el odontograma.** Revisamos la tabla completa de comparación de planes: las palabras "odontograma", "dental", "CPOD" y "periodontal" no aparecen ni una sola vez en toda la página de precios. El módulo dental existe, está documentado y se ve bien, pero en qué plan entra no está publicado. Es la pregunta que hay que hacerles por escrito antes de contratar.

Del lado nuestro, el núcleo autoalojado es $0 MXN y así se queda. Si prefieres no tocar el servidor, el plan gestionado son $899 MXN al mes ($8,990 al año) más una puesta en marcha de $4,900, y el servidor lo contratas tú directo al proveedor por unos $300 a $350 al mes. La [página de precios](/es-mx/precios/) trae el desglose completo.

## Cara a cara

Solo filas verificables. Donde no hay dato público, lo decimos.

| | Luna Salud | Dentalpin |
|---|---|---|
| Modelo | Suscripción SaaS | Open source (BSL 1.1, Apache 2.0 a los cuatro años) |
| Despliegue | ✓ Navegador, sin instalar nada | ~ Tu servidor, o gestionado por nosotros |
| Precio publicado | ✓ $350 a $800 MXN al mes | ✓ $0 MXN autoalojado |
| Moneda del cobro | ✓ Pesos mexicanos | ✓ Pesos mexicanos |
| Unidad de cobro | ~ Por usuario, con 3 o 5 incluidos | ✓ Por instalación, sin cobro por usuario |
| Alcance | ✓ 16 especialidades médicas | ~ Solo odontología |
| Odontograma | ✓ Notación FDI (ISO 3950) | ✓ Incluido |
| Cálculo automático de CPOD/DMFT | ✓ Sí, graficado entre visitas | ✗ No lo calculamos |
| Periodontograma | ✗ No aparece en ninguna página | ✓ Seis sitios por diente |
| Índices periodontales | ✓ Gingival, placa y profundidad de bolsa | ~ Dentro del periodontograma |
| Plan dental incluido en qué plan | ✗ No publicado | ✓ No hay planes |
| Timbrado de CFDI 4.0 | ~ Módulo aparte, sin PAC nombrado | ✗ No timbramos |
| Telemedicina | ✓ Videoconsulta integrada | ✗ No la tenemos |
| Transcripción de la consulta con IA | ✓ Incluida en los tres planes | ✗ No la tenemos |
| Recetas electrónicas a farmacia | ✓ Integración con Prescrypto | ✗ No la tenemos |
| Hospitalización | ✓ Censo, camas, farmacia y cuenta | ✗ No lo tenemos |
| Visor DICOM | ✓ Lee .dcm, hasta 20 MB | ✗ No lo tenemos |
| Integración con sensor intraoral | ✗ No aparece en las páginas consultadas | ✗ No la tenemos |
| Acceso a la API | ~ Solo en el plan Enterprise | ✓ REST con OpenAPI, incluida |
| Dónde viven los datos | ✗ Ninguna página nombra región ni país | ✓ Donde tú decidas |
| Exportación de datos | ✓ PDF por paciente, hojas de cálculo y volcado completo sin costo | ✓ Acceso directo a tu base de datos |
| Migración desde tu sistema actual | ✓ "Migración sin costo" en su portada | ~ Importador propio, sin servicio incluido |
| Código auditable | ✗ No publicado | ✓ En GitHub |
| Entidad legal publicada | ✓ Para Salud & Healthtech Luna SAPI de CV | ✓ Publicada |
| RFC publicado | ✗ No aparece | ✗ No aparece |
| Prueba gratuita | ✓ 14 días | ✓ Demo pública y autoalojado gratis |
| Clientes declarados | ~ "+500 profesionales", sin fuente | ✗ Muy pocos todavía |

## Lo de NOM-013 está bien usado, y conviene decirlo

Hay un patrón feo en este mercado: citar una norma oficial que no viene al caso para que la página se vea cumplidora. Aquí no pasa.

Su página de odontología dice que el cálculo automático de CPOD es "Ideal para documentación NOM-013 y reportes de salud pública". La [NOM-013-SSA2-2015](https://dof.gob.mx/nota_detalle.php?codigo=5462039&fecha=23/11/2016) es, literalmente, la norma "Para la prevención y control de enfermedades bucales", publicada en el Diario Oficial de la Federación el 23 de noviembre de 2016, y entre sus objetivos están las medidas de vigilancia epidemiológica en materia de salud pública. El CPOD es justo el índice que esa vigilancia usa. La cita encaja.

Lo que sí falta en el lado dental es la otra norma. **NOM-004 no aparece ni una vez en la página de odontología.** Sí aparece en su página de expediente médico, con una formulación que vale la pena leer con atención: "Bitácora clínica automática diseñada para alinearse con la NOM-004 y NOM-024". "Diseñada para alinearse" no es "cumple", y la diferencia no es casual ni es nuestra, es la que ellos eligieron escribir.

![Periodontograma de Dentalpin con los seis sitios de sondaje de cada diente](/screenshots/periodontogram.png)

*El periodontograma registra los seis sitios por diente, que es el nivel de detalle que un índice agregado no guarda.*

## Dónde viven tus datos

Su página de seguridad describe infraestructura en Amazon Web Services, cifrado AES-256 y TLS 1.2+, videoconsultas cifradas de extremo a extremo y "99.9% disponibilidad con respaldos automáticos". Nombra la LFPDPPP, la NOM-024 y la NOM-004, y declara el expediente "Alineado con NOM-004-SSA3-2012".

Dos matices sobre esa página, ninguno de los cuales es una acusación.

- **Las certificaciones que cita son de AWS, no suyas.** El texto dice "Infraestructura en Amazon Web Services (AWS)" con "certificaciones ISO 27001, HIPAA y SOC 2". Eso describe al proveedor de nube, que es un dato real y bueno, pero no es una auditoría del producto.
- **Ninguna página consultada nombra la región ni el país donde se alojan los datos.** AWS opera decenas de regiones repartidas por el mundo, y la propia página de infraestructura de AWS lista hoy México (Central) como región todavía por abrir. En cuál de ellas corre tu expediente no está publicado, y para un consultorio que quiere el expediente en territorio mexicano esa es la pregunta, no un detalle.

Nosotros no estamos en mejor posición para presumir: nuestro plan gestionado corre hoy en Ashburn, Estados Unidos, y lo decimos en nuestra propia página de precios. La diferencia es que autoalojando eliges tú, México incluido.

## Lo que mejor hacen, y casi nadie lo hace

La salida. Su artículo de ayuda sobre qué pasa con tus datos si cancelas es de los documentos más honestos que hemos leído en esta categoría, y merece citarse entero en lo esencial:

- **Expediente completo en PDF** por paciente, con datos demográficos, historia clínica, notas de consulta, diagnósticos, tratamientos y archivos adjuntos.
- **Listas de pacientes, pagos e informes** exportables como hojas de cálculo.
- **Volcado completo sin costo** preparado por su equipo para consultorios con muchos pacientes.
- Y una advertencia que casi nadie escribe: el expediente clínico **no se destruye** mientras siga dentro del plazo de conservación, porque "el expediente clínico no puede destruirse mientras esté dentro del plazo de conservación que exige la NOM-004". Su propio plazo declarado es "un mínimo de 6 años desde la última consulta".

Recomiendan exportar antes de cancelar, mientras la cuenta sigue abierta. Es el consejo correcto y va en contra de su interés comercial inmediato. Esa sección es la razón por la que esta comparativa no tiene ninguna frase dura sobre ellos.

## Elige Luna Salud si

- **Tu consultorio no es solo dental.** Si en la misma recepción se atiende odontología y nutrición, o medicina general y psicología, Dentalpin no te sirve y Luna Salud sí. Ese es el caso completo, y es grande.
- **Quieres telemedicina de verdad**, con videoconsulta integrada en el expediente. Nosotros no la tenemos.
- **La transcripción automática de la consulta te ahorra horas.** Dictas, el sistema redacta la nota. Está en los tres planes y nosotros no ofrecemos nada equivalente.
- **Recetas electrónicas conectadas a farmacias** por la integración con Prescrypto, que es infraestructura real y no una casilla.
- **Tienes camas.** El módulo de hospitalización con censo, farmacia y cuenta del paciente no tiene equivalente aquí.
- **No quieres ni oír hablar de un servidor.** Abres el navegador y ya está. Con nosotros, autoalojar significa que alguien se ocupa de las actualizaciones y los respaldos.
- **El CPOD graficado entre visitas te importa** para reportes de salud pública. Lo calculan solos y nosotros no.
- **Quieres que alguien te migre los datos**: su portada ofrece "Migración sin costo".

## Elige Dentalpin si

- **Haces periodoncia y necesitas periodontograma**, no un índice gingival. Seis sitios por diente, registrados visita a visita.
- **Vas a crecer de tres usuarios.** Su Esencial incluye 3 y el Premium 5, y a partir de ahí se cobra por usuario adicional con un importe que no publican. Aquí el número de usuarios no cambia el precio porque no hay precio.
- **Quieres saber en qué plan entra el odontograma antes de pagar.** Con nosotros no hay planes que separen módulos.
- **Quieres el expediente en un servidor que tú eliges**, en México si así lo decides, con la región bajo tu control y no bajo la de nadie.
- **Quieres leer el código** que guarda la historia clínica de tus pacientes, o que lo lea tu informático.
- **Necesitas la API desde el primer día.** La suya aparece solo en el plan Enterprise, que no publica precio.
- **$0 MXN importa.** Si tienes quien administre un servidor, el software no cuesta.

## Cómo funciona la migración, paso a paso

Si decides venir, el camino es este y conviene hacerlo en este orden:

1. **Exporta desde Luna Salud antes de cancelar nada.** Su propia ayuda insiste en esto: mientras la cuenta sigue activa tienes acceso completo. Pide el volcado completo por chat o correo, que lo preparan sin costo.
2. **Pide los tres formatos**: el PDF por paciente, las hojas de cálculo de pacientes, pagos e informes, y el volcado completo. Cada uno sirve para algo distinto en el paso siguiente.
3. **Levanta Dentalpin** con `docker compose up`. El [instalador en tres minutos](/es-mx/blog/instalar-dentalpin-en-tres-minutos/) tiene el detalle.
4. **Carga el padrón de pacientes** desde la hoja de cálculo con el importador, que mapea columnas a campos antes de escribir nada.
5. **Adjunta los PDF de expediente** al paciente que corresponde. El histórico clínico se conserva como documento, legible y buscable, aunque las notas no vuelvan a ser campos estructurados.
6. **Rehaz el odontograma del paciente activo** en su primera visita de revisión. Es media hora de trabajo repartida en meses y queda con tu criterio, no con el de un conversor.
7. **Deja la cuenta anterior viva un trimestre.** Cancelar el primer día es el error que más caro sale en cualquier migración, con cualquier proveedor.

Y una cosa que no cambia: tu obligación de conservar el expediente sigue siendo tuya, migres o no. Guarda el volcado completo aunque ya no uses el sistema.

## Fuentes

Todas consultadas el 1 de octubre de 2026.

- [lunasalud.mx](https://www.lunasalud.mx/): portada, definición del producto, "+500 profesionales confían en Luna", migración sin costo.
- [lunasalud.mx/software/odontologia](https://www.lunasalud.mx/software/odontologia): odontograma FDI (ISO 3950), CPOD/DMFT, NOM-013, portal del paciente con odontograma, galería de imágenes dentales.
- [lunasalud.mx/ayuda/odontologia-odontograma-dental](https://www.lunasalud.mx/ayuda/odontologia-odontograma-dental): índices gingival, de placa y de profundidad de bolsa, plantilla de nota de 15 secciones, activación desde Perfil Clínico.
- [lunasalud.mx/planes](https://www.lunasalud.mx/planes): tarifa, usuarios incluidos, IVA, usuarios adicionales, folios de facturación, acceso API en Enterprise.
- [lunasalud.mx/terminos-y-condiciones](https://www.lunasalud.mx/terminos-y-condiciones): Para Salud & Healthtech Luna SAPI de CV, domicilio, ley aplicable y tribunales.
- [lunasalud.mx/seguridad-privacidad](https://www.lunasalud.mx/seguridad-privacidad): AWS, AES-256, TLS 1.2+, LFPDPPP, NOM-024, NOM-004.
- [lunasalud.mx/expediente-medico-electronico](https://www.lunasalud.mx/expediente-medico-electronico): "diseñada para alinearse con la NOM-004 y NOM-024".
- [lunasalud.mx/ayuda/que-pasa-con-tus-datos-si-cancelas-tu-suscripcion](https://www.lunasalud.mx/ayuda/que-pasa-con-tus-datos-si-cancelas-tu-suscripcion): exportación, plazo de 6 años, no destrucción dentro del plazo.
- [lunasalud.mx/ayuda/modulo-facturacion-cfdi](https://www.lunasalud.mx/ayuda/modulo-facturacion-cfdi): "se cotiza por separado según tu volumen mensual de facturas".
- [lunasalud.mx/ayuda/visor-de-imagenes-radiografias-dicom](https://www.lunasalud.mx/ayuda/visor-de-imagenes-radiografias-dicom): formatos, DICOM .dcm, 20 MB, límites de códec y de medición.
- [lunasalud.mx/sobre-nosotros](https://www.lunasalud.mx/sobre-nosotros): misión.
- [AWS, Regiones y Zonas de Disponibilidad](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/): México (Central) figura como región próxima a abrir.
- [DOF, NOM-013-SSA2-2015](https://dof.gob.mx/nota_detalle.php?codigo=5462039&fecha=23/11/2016): "Para la prevención y control de enfermedades bucales", publicada el 23 de noviembre de 2016.

Si algo de esto cambió en su web después de esa fecha, escríbenos y lo corregimos. Y si trabajas en Luna Salud y creemos algo que no es, dínoslo: se corrige el mismo día.
