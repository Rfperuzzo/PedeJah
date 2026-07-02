# PedeJah - Visao do Produto

## O que e o PedeJah

O PedeJah e uma plataforma SaaS para estabelecimentos de alimentacao venderem, receberem e organizarem pedidos com uma experiencia moderna, clara e configuravel.

O PedeJah nao e um sistema feito para uma unica lanchonete, hamburgueria ou loja especifica. Ele deve atender diferentes tipos de negocios de alimentacao usando a mesma base de produto, com personalizacao feita por dados de cada estabelecimento.

A plataforma deve servir hamburguerias, acaiterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks, deliverys locais e outros negocios que precisam apresentar produtos, receber pedidos e operar com mais clareza.

## O problema que resolvemos

Muitos estabelecimentos pequenos e medios vendem por canais improvisados, como mensagens soltas, cardapios desatualizados, anotacoes manuais e processos dificeis de acompanhar.

Isso cria pedidos perdidos, duvidas do cliente, retrabalho, erros de atendimento, falta de padrao visual e pouca confianca no momento da compra.

O PedeJah resolve esse problema oferecendo uma experiencia publica de pedido para o cliente final e um ambiente de gestao para o lojista configurar a loja e acompanhar a operacao.

## Para quem estamos construindo

O produto e construido para dois publicos principais:

- Cliente final: pessoa que acessa o link ou QR Code da loja para consultar produtos, montar um pedido, finalizar a compra e acompanhar o status.
- Lojista: dono, gerente ou operador do estabelecimento que precisa configurar a loja, organizar produtos, receber pedidos e manter a operacao sob controle.

O cliente final nunca deve precisar entender o PedeJah como sistema. Ele deve sentir que esta usando uma experiencia moderna, rapida e confiavel de pedido da propria loja.

O lojista nunca deve precisar editar codigo. Toda personalizacao deve acontecer por configuracao da loja.

## Os dois mundos do produto

### Storefront

O Storefront e a home/cardapio publico que o cliente final acessa ao abrir o link da loja ou escanear um QR Code.

Ele deve mostrar identidade da loja, status, horarios, modalidades, categorias, produtos, promocoes, imagens, precos, adicionais, carrinho, checkout e acompanhamento do pedido conforme a evolucao do produto.

O Storefront deve vender melhor para o lojista e reduzir atrito para o cliente final. Sua experiencia deve ser clara, mobile-first, rapida, confiavel e orientada a conversao.

### Painel Administrativo

O Painel Administrativo e o ambiente onde o lojista configura e opera a loja.

Ele deve permitir configurar nome, logo, banner, cores, slogan, horarios, modalidades, promocoes, categorias, produtos, imagens, precos, adicionais e demais dados da loja. Tambem deve permitir receber, acompanhar e organizar pedidos quando essa etapa for implementada.

O Painel Administrativo deve alimentar a configuracao do Storefront sem exigir alteracao manual de codigo, duplicacao de telas ou criacao de componentes por estabelecimento.

## Storefront Engine vs Store Configuration

O Storefront deve ser separado em duas camadas permanentes.

Storefront Engine:

- Estrutura e comportamento reutilizavel do Storefront.
- Componentes genericos para loja, busca, categorias, produtos, detalhes, carrinho, checkout e acompanhamento.
- Experiencia principal consistente para todos os estabelecimentos.
- Deve funcionar para diferentes tipos de negocio sem conhecer se a loja e hamburgueria, acaiteria, pizzaria, cafeteria, restaurante, food truck ou outro delivery.

Store Configuration:

- Dados e identidade de cada estabelecimento.
- Nome, logo, banner, cores, slogan, cidade, status, horarios, modalidades, promocoes, categorias, produtos, imagens, precos, adicionais, ingredientes e ordem dos blocos permitidos.
- Origem futura dos dados configurados pelo lojista no Painel Administrativo.

Componentes devem consumir dados de configuracao. Eles nao devem conhecer a origem dos dados nem conter regras especificas de uma loja ou nicho quando uma solucao generica resolver.

## O papel da Jah Burgers

A Jah Burgers e apenas uma loja ficticia de demonstracao.

Ela existe para validar a experiencia inicial do Storefront, testar composicao visual, demonstrar categorias e produtos, e orientar mocks enquanto o produto ainda nao possui lojas reais configuradas.

A Jah Burgers nao e o centro do produto. Nenhum componente, regra, tela ou decisao estrutural deve ser criado como se o PedeJah fosse uma plataforma apenas para hamburguerias.

## Principios que nunca devem mudar

- O PedeJah e uma plataforma SaaS para varios estabelecimentos de alimentacao.
- O cliente final deve sentir uma experiencia moderna de pedido, nao um sistema generico.
- O lojista deve configurar a loja sem editar codigo.
- A Engine do Storefront deve ser reutilizavel.
- A personalizacao deve vir da configuracao da loja.
- Componentes devem ser genericos sempre que puderem atender mais de um tipo de negocio.
- A mesma estrutura deve conseguir renderizar lojas diferentes.
- Design, arquitetura, frontend, backend e painel administrativo devem preservar a visao multiestabelecimento.
- Cada decisao deve reduzir atrito, aumentar confianca e facilitar pedidos.

## O que o PedeJah nao e

- Nao e um sistema criado apenas para a Jah Burgers.
- Nao e um produto exclusivo para hamburguerias.
- Nao e apenas um cardapio digital estatico.
- Nao e uma colecao de telas duplicadas por tipo de loja.
- Nao e uma ferramenta que exige que o lojista edite codigo.
- Nao e um painel administrativo desconectado da experiencia do cliente final.
- Nao e uma interface bonita sem compromisso com venda, clareza e operacao.

## Como o produto deve crescer

O PedeJah deve crescer por sprints pequenas, sempre preservando a separacao entre experiencia publica, configuracao da loja e operacao do lojista.

Novas lojas devem surgir por configuracoes, mocks ou dados cadastrados, nao por duplicacao de paginas e componentes. Uma acaiteria, por exemplo, deve usar a mesma Engine do Storefront, mudando nome, cores, imagens, categorias, produtos, adicionais e precos.

O Painel Administrativo deve evoluir para ser a fonte natural da configuracao das lojas. O Storefront deve apenas consumir esses dados e renderizar a experiencia correta para cada estabelecimento.

## Regra final de decisao

Sempre que houver duvida sobre uma decisao tecnica, arquitetural ou visual, pergunte:

"Esta decisao aproxima ou afasta o PedeJah da visao descrita neste documento?"

Se afastar, a decisao deve ser revista antes da implementacao.
