# PedeJah - Regras de Produto

## Finalidade

Este documento define regras de negócio e conversão para o frontend público do PedeJah. Ele não fala de código, framework ou implementação visual. Ele orienta como a experiência deve vender mais para os estabelecimentos contratantes.

O PedeJah não deve ser tratado apenas como cardápio digital. A loja pública é uma ferramenta de vendas, e cada decisão deve ajudar o cliente final a encontrar produtos, confiar na loja e concluir um pedido.

O PedeJah também não deve ser tratado como produto para uma loja específica. Ele é uma plataforma SaaS para vários tipos de estabelecimentos, incluindo hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais. A Jah Burgers é apenas uma loja fictícia de demonstração.

## Storefront Engine vs Store Configuration

O comportamento principal da loja deve ser consistente para todos os clientes do PedeJah. A personalização de cada estabelecimento deve vir dos dados de configuração, não da criação de componentes específicos para cada loja.

Storefront Engine:

- Estrutura e comportamento reutilizável para descoberta, seleção, compra, checkout e acompanhamento.
- Componentes como `StoreHero`, `StoreInfo`, `StoreSearch`, `CategorySelector`, `ProductGrid`, `ProductList`, `ProductCard`, `ProductDetail`, `Cart`, `Checkout` e `OrderTracking`.
- Deve funcionar para qualquer tipo de loja suportada pelo PedeJah.

Store Configuration:

- Dados variáveis por cliente: nome, logo, banner, cores do tema, slogan, cidade, status, horários, modalidades, promoções, categorias, produtos, imagens, preços, adicionais, ingredientes e ordem dos blocos permitidos.
- Hoje esses dados vêm de mocks.
- Futuramente os mesmos dados devem vir de banco, API ou painel administrativo.

Regras:

- Nunca criar componente específico apenas para hamburgueria, açaíteria ou pizzaria se um componente genérico resolver.
- Nunca colocar regra de negócio específica de uma loja dentro de componente visual.
- Novas lojas devem ser adicionadas por novos mocks ou configurações, não por telas duplicadas.
- Componentes devem consumir dados, não conhecer a origem dos dados.

## Princípios de Conversão

- O cliente deve conseguir localizar qualquer item em poucos segundos.
- O caminho entre abrir a loja e iniciar um pedido deve ser curto.
- A ação principal de cada tela deve ser óbvia.
- Produtos devem receber mais destaque do que informações institucionais.
- Informações essenciais devem aparecer antes das informações secundárias.
- Nunca esconder informações importantes atrás de muitos cliques.
- Sempre destacar promoções, combos e produtos mais vendidos quando existirem.
- Toda interação deve aumentar confiança, não criar dúvida.
- A experiência deve ser mobile-first.

## Regras Para Loja Aberta ou Fechada

- Se a loja estiver fechada, mostrar isso imediatamente.
- O status da loja deve aparecer antes da lista de produtos.
- Quando a loja estiver fechada, a interface deve explicar se ainda é possível navegar, agendar ou apenas consultar o cardápio.
- A loja aberta deve transmitir disponibilidade para compra de forma clara.

## Regras Para Tempo e Modalidade

- O tempo estimado de entrega ou preparo deve aparecer antes da lista de produtos.
- Modalidades disponíveis, como Entrega e Retirada, devem ser visíveis sem exigir navegação extra.
- Se uma modalidade estiver indisponível, isso deve ser comunicado antes do checkout.

## Regras Para Produtos

- Produtos disponíveis devem ter prioridade sobre produtos indisponíveis.
- Produtos esgotados nunca devem atrapalhar a navegação.
- Produto esgotado deve ser claramente identificado.
- Nome, preço e disponibilidade são informações essenciais.
- Descrição deve ajudar a decidir, não ocupar espaço excessivo.
- Imagem deve apoiar a venda quando disponível, mas a tela deve funcionar sem imagem.
- Produtos mais vendidos, combos e promoções devem ganhar destaque quando existirem.

## Regras Para Categorias

- Categorias devem ajudar o cliente a reduzir busca, não adicionar fricção.
- Categorias principais devem ser fáceis de tocar em mobile.
- O cliente deve entender rapidamente onde estão os principais grupos de produtos da loja, como hambúrgueres, açaís, pizzas, cafés, doces, pratos, bebidas, combos ou promoções, conforme a configuração do estabelecimento.
- A navegação por categoria deve preservar contexto e não fazer o cliente se perder.

## Regras Para Ações de Compra

- O botão "Adicionar ao carrinho" deve estar sempre visível quando possível na tela de produto.
- A ação de compra deve ter texto claro e direto.
- O cliente nunca deve precisar procurar como avançar.
- Quantidade, adicionais e observações devem ser fáceis de entender.
- A interface deve evitar passos intermediários desnecessários.

## Regras Para Carrinho

- O carrinho deve mostrar claramente itens, quantidades, subtotal e próximos passos.
- O cliente deve conseguir revisar sem medo de perder o pedido.
- Remover ou alterar item deve ser simples, mas não acidental.
- O carrinho deve reduzir abandono, não parecer uma etapa burocrática.

## Regras Para Checkout

- O checkout deve pedir apenas informações necessárias.
- Campos obrigatórios devem ser evidentes.
- Erros devem explicar exatamente o que precisa ser corrigido.
- Entrega, retirada, pagamento e confirmação devem ser apresentados com clareza.
- O cliente deve sempre saber quanto falta para concluir.

## Regras Para Confiança

- A loja deve parecer real, ativa e profissional.
- Nome da loja, cidade, status e tempo estimado devem ser fáceis de verificar.
- Informações de contato, horários e endereço devem estar disponíveis quando fizer sentido.
- Feedbacks de ação devem ser claros: item adicionado, erro, carregamento ou indisponibilidade.
- A interface não deve parecer improvisada.

## Regras Para Priorização de Conteúdo

Ordem de prioridade no frontend público da loja:

1. Status da loja e possibilidade de compra.
2. Tempo estimado e modalidades.
3. Categorias.
4. Produtos e preços.
5. Promoções e destaques.
6. Informações complementares da loja.
7. Marca PedeJah, quando aplicável.

## Regras Para Sprints Futuras

- Antes de implementar uma tela, definir qual ação de negócio ela deve estimular.
- Se uma informação não ajuda o cliente a comprar ou confiar, ela deve ser questionada.
- Se uma etapa adiciona clique sem reduzir dúvida ou erro, ela deve ser evitada.
- Toda tela pública deve ser avaliada por velocidade, clareza e conversão.
- Validação visual deve sempre incluir mobile, pois a maior parte dos acessos tende a vir de celular.
