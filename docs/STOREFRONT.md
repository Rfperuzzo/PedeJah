# PedeJah - Storefront

## Visão Geral

O Storefront é a experiência pública da loja contratante. É a interface que o cliente final acessa ao abrir o link da loja ou escanear um QR Code.

O objetivo do Storefront é transformar interesse em pedido. Ele deve permitir que o cliente entenda rapidamente onde está comprando, veja se a loja está aberta, encontre produtos, personalize itens, revise o carrinho, finalize o pedido e acompanhe o andamento até a entrega ou retirada.

O Storefront não pertence a uma loja específica. Ele é a estrutura base da plataforma SaaS do PedeJah para renderizar diferentes estabelecimentos, como hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais. A Jah Burgers é apenas mock/demo.

Quem utiliza:

- Cliente final da loja.
- Pessoas acessando por QR Code em mesa, balcão, embalagem, rede social ou WhatsApp.
- Clientes recorrentes que querem repetir pedidos com menos esforço.

Quando utiliza:

- Antes de comprar, para consultar produtos e preços.
- Durante a compra, para montar e enviar o pedido.
- Depois da compra, para acompanhar status.
- Futuramente, para consultar histórico ou repetir pedidos.

Problema que resolve:

- Reduz a dependência de atendimento manual.
- Evita cardápios confusos ou desatualizados.
- Acelera descoberta de produtos.
- Reduz dúvidas sobre status, tempo e modalidade.
- Cria uma experiência de compra profissional para lojas pequenas e médias.

## Princípios do Storefront

- Toda tela deve facilitar compra.
- Toda ação principal deve estar evidente.
- Produtos são prioridade.
- Nunca esconder preços.
- Nunca esconder botão de compra quando a compra for possível.
- Sempre facilitar retorno.
- Sempre reduzir toques.
- Sempre reduzir tempo.
- Sempre mostrar informações essenciais antes das secundárias.
- Sempre deixar claro se a loja aceita pedido no momento.
- Sempre preservar confiança durante o fluxo.
- Sempre considerar mobile como experiência principal.
- Nunca fazer o cliente procurar como avançar.
- Nunca bloquear navegação por informações promocionais secundárias.
- Estados de erro devem orientar recuperação.
- A estrutura do Storefront deve ser genérica, reutilizável e configurável.
- O comportamento principal deve ser consistente para todos os estabelecimentos.
- A personalização deve vir de dados de configuração, não de componentes específicos por loja.

## Storefront Engine vs Store Configuration

### Storefront Engine

A Engine do Storefront é composta por componentes e comportamentos reutilizáveis. Ela deve funcionar para qualquer tipo de loja suportada pelo PedeJah.

Componentes previstos da engine:

- `StoreHero`.
- `StoreInfo`.
- `StoreSearch`.
- `CategorySelector`.
- `ProductGrid` ou `ProductList`.
- `ProductCard`.
- `ProductDetail`.
- `Cart`.
- `Checkout`.
- `OrderTracking`.

Regras da engine:

- Nunca criar componente específico apenas para hamburgueria, açaíteria, pizzaria ou outro segmento se um componente genérico resolver.
- Nunca colocar regra de negócio específica de uma loja dentro de componente visual.
- Componentes devem consumir dados, não conhecer a origem dos dados.
- A mesma rota e a mesma estrutura devem conseguir renderizar lojas diferentes no futuro.

### Store Configuration

A configuração da loja contém os dados que mudam por cliente:

- Nome da loja.
- Logo.
- Banner.
- Cores do tema.
- Slogan.
- Cidade.
- Status.
- Horário de funcionamento.
- Modalidades de entrega ou retirada.
- Promoções.
- Categorias.
- Produtos.
- Imagens.
- Preços.
- Adicionais.
- Ingredientes.
- Ordem dos blocos permitidos.

Hoje esses dados vêm de mocks. Futuramente os mesmos dados devem vir de banco, API e painel administrativo.

Novas lojas devem ser criadas adicionando novos mocks ou configurações, não duplicando telas, rotas ou componentes.

## Jornada Completa

1. Abrir QR Code ou link da loja.
2. Carregar Storefront.
3. Ver identidade, status, tempo estimado e modalidades.
4. Explorar categorias.
5. Escolher categoria.
6. Encontrar produto.
7. Abrir produto.
8. Personalizar produto quando necessário.
9. Adicionar ao carrinho.
10. Revisar carrinho.
11. Iniciar checkout.
12. Informar dados necessários.
13. Escolher entrega ou retirada.
14. Escolher forma de pagamento.
15. Confirmar pedido.
16. Ver pedido confirmado.
17. Acompanhar status.
18. Receber ou retirar pedido.
19. Ver pedido entregue/concluído.
20. Futuramente, acessar histórico e repetir pedido.

## Telas Futuras

### Tela da Loja

Nome:

Tela da Loja.

Objetivo:

Permitir descoberta rápida de produtos, categorias e informações essenciais da loja.

Quem utiliza:

Cliente final acessando o link ou QR Code da loja.

Objetivo do usuário:

Entender se pode pedir agora e encontrar rapidamente o que deseja comprar.

Ação principal:

Selecionar um produto ou categoria.

Componentes previstos:

- Header da Loja.
- Banner da Loja.
- Informações da Loja.
- Status aberto/fechado.
- Tempo estimado.
- Modalidades.
- Busca.
- Categorias.
- Lista de produtos.
- Card Produto.
- Badges de promoção e mais vendido.
- Carrinho Flutuante.
- Footer.

Estados possíveis:

- Loja aberta.
- Loja fechada.
- Sem banner.
- Sem logo.
- Sem produtos.
- Categoria vazia.
- Pesquisa sem resultado.
- Produtos em destaque.
- Produtos esgotados.
- Carregando dados.
- Sem conexão.
- Erro interno.

Erros possíveis:

- Falha ao carregar loja.
- Falha ao carregar produtos.
- Loja não encontrada.
- Link inválido ou expirado.
- Sem conexão.

Observações:

Status, tempo estimado e modalidades devem aparecer antes da lista de produtos. Produtos e categorias devem ter prioridade sobre textos institucionais.

### Tela do Produto

Nome:

Produto.

Objetivo:

Convencer o cliente a adicionar o produto ao carrinho com clareza sobre preço, descrição, opções e disponibilidade.

Quem utiliza:

Cliente interessado em um produto específico.

Objetivo do usuário:

Entender o produto, personalizar quando necessário e adicionar ao carrinho.

Ação principal:

Adicionar ao carrinho.

Componentes previstos:

- Imagem do produto.
- Nome.
- Preço.
- Descrição.
- Badges de promoção, mais vendido ou indisponível.
- Grupos de adicionais.
- Variações.
- Seleção de quantidade.
- Observações.
- Resumo de preço.
- Botão Adicionar ao carrinho.
- Botão voltar ou fechar.

Estados possíveis:

- Produto disponível.
- Produto indisponível.
- Produto sem imagem.
- Produto em promoção.
- Produto mais vendido.
- Adicional obrigatório pendente.
- Adicional opcional selecionado.
- Quantidade alterada.
- Carregando.

Erros possíveis:

- Produto não encontrado.
- Produto ficou indisponível.
- Seleção obrigatória incompleta.
- Falha ao adicionar ao carrinho.

Observações:

O botão de compra deve estar sempre visível quando possível. Preço e disponibilidade nunca devem ficar escondidos.

### Carrinho

Nome:

Carrinho.

Objetivo:

Reduzir abandono de compra e permitir revisão clara do pedido.

Quem utiliza:

Cliente que já adicionou um ou mais produtos.

Objetivo do usuário:

Revisar itens, quantidades, valores e avançar para finalizar.

Ação principal:

Ir para checkout.

Componentes previstos:

- Lista de itens.
- Imagem ou identificador do produto.
- Nome do produto.
- Adicionais selecionados.
- Quantidade.
- Preço por item.
- Subtotal.
- Taxa de entrega futura.
- Total estimado.
- Campo de observação futura.
- Botão continuar comprando.
- Botão finalizar pedido.

Estados possíveis:

- Carrinho vazio.
- Carrinho com itens.
- Item indisponível.
- Preço atualizado.
- Quantidade alterada.
- Loja fechou durante a navegação.
- Carregando validação.

Erros possíveis:

- Item não disponível.
- Valor desatualizado.
- Falha ao atualizar quantidade.
- Falha ao remover item.
- Loja não aceita pedidos no momento.

Observações:

O carrinho deve ser uma etapa de confiança, não de fricção. O cliente deve entender claramente o que está comprando e quanto pagará.

### Checkout

Nome:

Checkout.

Objetivo:

Finalizar o pedido com o menor atrito possível.

Quem utiliza:

Cliente pronto para enviar o pedido.

Objetivo do usuário:

Informar dados necessários, escolher modalidade e confirmar compra.

Ação principal:

Confirmar pedido.

Componentes previstos:

- Resumo do pedido.
- Dados do cliente.
- Modalidade Entrega/Retirada.
- Endereço quando entrega.
- Observações.
- Forma de pagamento.
- Troco quando aplicável.
- Total.
- Botão confirmar pedido.
- Mensagens de validação.

Estados possíveis:

- Entrega selecionada.
- Retirada selecionada.
- Dados incompletos.
- Endereço inválido.
- Forma de pagamento pendente.
- Pedido pronto para envio.
- Enviando pedido.
- Loja fechada durante checkout.

Erros possíveis:

- Campos obrigatórios ausentes.
- Endereço fora da área de entrega.
- Forma de pagamento indisponível.
- Falha ao enviar pedido.
- Sessão expirada.
- Carrinho inválido.

Observações:

O checkout deve pedir apenas o necessário. Cada campo adicional deve ter motivo claro.

### Pedido Confirmado

Nome:

Pedido Confirmado.

Objetivo:

Confirmar sucesso, reduzir incerteza e orientar o próximo passo.

Quem utiliza:

Cliente que acabou de enviar o pedido.

Objetivo do usuário:

Ter certeza de que o pedido foi recebido e entender o que acontece agora.

Ação principal:

Acompanhar pedido.

Componentes previstos:

- Mensagem de sucesso.
- Número do pedido.
- Resumo do pedido.
- Tempo estimado.
- Modalidade escolhida.
- Dados de entrega ou retirada.
- Status inicial.
- Botão acompanhar pedido.
- Contato da loja quando aplicável.

Estados possíveis:

- Pedido enviado.
- Pedido aguardando confirmação da loja.
- Pedido confirmado automaticamente.
- Pedido pendente de pagamento futuro.

Erros possíveis:

- Pedido enviado, mas confirmação visual falhou.
- Falha ao recuperar status inicial.
- Pedido duplicado detectado.

Observações:

Esta tela deve gerar confiança imediata. O cliente não deve sentir necessidade de chamar a loja para confirmar.

### Acompanhamento

Nome:

Acompanhamento.

Objetivo:

Reduzir ansiedade após a compra e mostrar evolução do pedido.

Quem utiliza:

Cliente que já confirmou um pedido.

Objetivo do usuário:

Saber em qual etapa o pedido está e quando receberá ou poderá retirar.

Ação principal:

Consultar status atual.

Componentes previstos:

- Status atual.
- Linha do tempo.
- Tempo estimado.
- Resumo do pedido.
- Modalidade.
- Endereço ou instrução de retirada.
- Contato da loja.
- Ações futuras, como repetir pedido ou pedir ajuda.

Estados possíveis:

- Pedido recebido.
- Pedido confirmado.
- Em preparo.
- Saiu para entrega.
- Pronto para retirada.
- Entregue.
- Cancelado.
- Atrasado.
- Sem atualização recente.

Erros possíveis:

- Falha ao carregar status.
- Pedido não encontrado.
- Sem conexão.
- Atualização em tempo real indisponível.

Observações:

O acompanhamento deve ser claro e honesto. Se houver atraso ou cancelamento, a informação deve aparecer sem ambiguidade.

### Pedido Entregue

Nome:

Pedido Entregue.

Objetivo:

Encerrar a jornada com clareza e preparar recompra futura.

Quem utiliza:

Cliente que recebeu ou retirou o pedido.

Objetivo do usuário:

Confirmar conclusão e, futuramente, avaliar ou repetir pedido.

Ação principal:

Voltar para loja ou repetir pedido futuramente.

Componentes previstos:

- Status concluído.
- Resumo do pedido.
- Horário de conclusão.
- Botão voltar para loja.
- Ação futura para repetir pedido.
- Ação futura para avaliar pedido.

Estados possíveis:

- Pedido entregue.
- Pedido retirado.
- Pedido concluído manualmente.

Erros possíveis:

- Falha ao carregar detalhes finais.
- Status divergente.

Observações:

A conclusão deve manter tom profissional e deixar caminho simples para novo pedido.

### Histórico de Pedidos

Nome:

Histórico de Pedidos.

Objetivo:

Permitir consulta e repetição de pedidos anteriores em etapa futura.

Quem utiliza:

Cliente recorrente.

Objetivo do usuário:

Encontrar pedidos anteriores e repetir uma compra com pouco esforço.

Ação principal:

Repetir pedido ou visualizar detalhes.

Componentes previstos:

- Lista de pedidos anteriores.
- Data.
- Loja.
- Total.
- Status final.
- Itens principais.
- Botão repetir pedido.
- Filtros simples futuros.

Estados possíveis:

- Sem histórico.
- Histórico com pedidos.
- Pedido antigo indisponível para repetição.
- Produto anterior indisponível.
- Carregando.

Erros possíveis:

- Falha ao carregar histórico.
- Pedido não encontrado.
- Repetição indisponível.

Observações:

Histórico só deve existir quando houver autenticação, identificação segura ou estratégia clara de persistência.

## Estados Globais

### Loja Aberta

A loja aceita pedidos. A interface deve destacar disponibilidade, tempo estimado, modalidades e produtos.

### Loja Fechada

A loja não aceita pedidos imediatos. O status deve aparecer imediatamente, antes da navegação de produtos.

### Sem Conexão

A interface deve explicar que não foi possível atualizar dados e orientar tentativa novamente.

### Sem Produtos

A loja não possui produtos disponíveis. Deve haver mensagem clara, sem simular erro técnico.

### Produto Indisponível

O produto existe, mas não pode ser comprado. Deve ficar claro sem atrapalhar produtos disponíveis.

### Erro Interno

Falha inesperada. A mensagem deve ser objetiva e permitir nova tentativa.

### Pedido Enviado

O pedido foi recebido pelo sistema ou enviado para a loja. Deve haver confirmação visual clara.

### Pedido Cancelado

O pedido não seguirá. A interface deve explicar motivo quando disponível.

### Pedido Concluído

O pedido foi entregue ou retirado. A interface deve encerrar a jornada com clareza.

## Componentes Compartilhados

### Header da Loja

Mostra identidade da loja e apoia navegação. Pode conter nome, logo, status, acesso ao carrinho e retorno.

### Busca

Ajuda o cliente a encontrar produtos rapidamente. Deve retornar resultados úteis e estado vazio claro.

### Categorias

Organizam o cardápio e reduzem esforço de busca. Devem ser rápidas de acessar no mobile.

### Card Produto

Exibe produto na listagem. Deve mostrar nome, preço, descrição curta, disponibilidade e imagem quando houver.

### Carrinho Flutuante

Mantém acesso ao carrinho visível quando há itens. Deve mostrar quantidade e valor resumido quando possível.

### Modal Produto

Permite ver detalhes e personalizar sem perder contexto da loja. Deve priorizar adicionar ao carrinho.

### Botões

Executam ações principais e secundárias. Devem ter rótulos claros e estados de loading, disabled e erro.

### Badge Promoção

Destaca ofertas relevantes. Deve ajudar conversão sem poluir a lista.

### Badge Mais Vendido

Indica prova social e ajuda o cliente a decidir mais rápido.

### Badge Status

Comunica aberto, fechado, indisponível, novo, promoção ou preparo.

### Resumo do Pedido

Mostra itens, valores e principais escolhas. Deve aparecer no carrinho, checkout e confirmação.

### Footer

Mostra informações complementares da loja e, futuramente, assinatura discreta do PedeJah quando aplicável.

## Regras de Navegação

- O cliente deve conseguir voltar da tela de produto para a mesma posição da loja.
- O carrinho deve ser acessível depois que existir pelo menos um item.
- Estados de erro devem preservar dados já preenchidos quando possível.
- Checkout não deve apagar carrinho se houver erro de validação.
- Acompanhamento deve ser acessível após pedido confirmado.
- Histórico não deve ser exibido antes de existir estratégia de identificação segura.

## Referência Para Próximas Sprints

Antes de implementar qualquer tela do cliente final, esta documentação deve ser consultada para confirmar:

- Objetivo da tela.
- Ação principal.
- Estados necessários.
- Componentes previstos.
- Erros esperados.
- Regras de navegação.
- Relação com conversão e redução de atrito.
- Separação entre Storefront Engine e Store Configuration.
