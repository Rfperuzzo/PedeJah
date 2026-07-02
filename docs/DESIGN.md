# PedeJah - Design System Oficial

## Filosofia Visual

O visual do PedeJah deve ser moderno, minimalista e profissional, com foco em clareza operacional. A interface deve permitir leitura rápida, pouca carga cognitiva e ações evidentes.

O design deve evitar exageros decorativos. Espaço em branco, hierarquia clara, cantos arredondados e sombras suaves devem criar sensação de organização sem comprometer densidade de informação quando o produto evoluir para dashboard e operação.

## Personalidade da Marca

- Direta.
- Confiável.
- Ágil.
- Organizada.
- Próxima do pequeno empreendedor.
- Profissional sem parecer corporativa demais.

## Tom Visual

O tom visual deve ser limpo, leve e objetivo. O vermelho principal deve comunicar energia e ação, mas não deve dominar todas as telas. A base clara e neutra deve preservar conforto em uso prolongado.

## Emoções Que Queremos Transmitir

- Controle.
- Rapidez.
- Segurança.
- Simplicidade.
- Clareza.
- Confiança na operação.

## Inspirações de Qualidade

As referências abaixo devem orientar qualidade, acabamento e rigor visual. Não devem ser copiadas.

- Stripe: clareza, polimento e sensação de produto premium.
- Vercel: minimalismo, tipografia forte e organização.
- Linear: densidade bem resolvida, fluidez e foco em produtividade.
- Notion: simplicidade, leitura e flexibilidade.
- Framer: transições discretas e percepção moderna.

## Princípios de Produto

O frontend público do PedeJah não é apenas um cardápio digital. Ele é uma ferramenta de vendas para os estabelecimentos contratantes.

- O usuário deve encontrar qualquer produto rapidamente.
- O fluxo deve exigir o menor número possível de toques.
- A interface deve ser intuitiva mesmo para quem nunca utilizou o sistema.
- Produtos devem ser o foco principal da tela.
- Informações importantes devem aparecer antes das informações secundárias.
- Sempre privilegiar velocidade de compra.
- Nunca esconder informações essenciais.
- Toda interação deve gerar confiança.
- O cliente deve sentir que está utilizando um aplicativo profissional.
- A experiência deve ser mobile-first.
- A estética deve apoiar a compra, não competir com os produtos.
- Cada tela deve ter uma ação principal clara.
- O layout deve reduzir dúvidas antes de tentar encantar visualmente.

## Objetivo de Cada Tela

### Tela da Loja

Objetivo:

Permitir que o cliente encontre rapidamente produtos e categorias, entenda se a loja está aberta, veja tempo estimado e comece a compra com segurança.

### Tela do Produto

Objetivo:

Convencer o cliente a adicionar o produto ao carrinho, mostrando nome, imagem, preço, descrição, adicionais, disponibilidade e ação principal com clareza.

### Carrinho

Objetivo:

Reduzir abandono de compra, permitindo revisar itens, quantidades, valores e próximos passos sem confusão.

### Checkout

Objetivo:

Finalizar o pedido com o menor atrito possível, pedindo apenas as informações necessárias e mantendo o cliente seguro sobre entrega, retirada, pagamento e confirmação.

### Acompanhamento

Objetivo:

Reduzir ansiedade após a compra, mostrando status do pedido, previsão e informações relevantes sem exigir contato manual com a loja.

### Perfil da Loja

Objetivo:

Transmitir confiança e credibilidade, mostrando dados essenciais como nome, localização, horários, formas de atendimento e informações de contato.

## Paleta Oficial

### Cores Principais

- Vermelho principal: `#E53935`
- Vermelho hover: `#D8322F`
- Fundo claro: `#F8FAFC`
- Superfície: `#FFFFFF`
- Texto escuro: `#111827`
- Texto secundário: `#6B7280`
- Verde sucesso: `#10B981`

### Cores de Apoio

- Borda clara: `#E5E7EB`
- Borda suave: `#E2E8F0`
- Fundo neutro: `#F1F5F9`
- Aviso: `#F59E0B`
- Erro: `#EF4444`
- Informação: `#2563EB`

### Uso da Cor

- Vermelho deve marcar ações principais, estados ativos e elementos de marca.
- Verde deve representar conclusão, sucesso ou confirmação.
- Cinzas devem sustentar layout, divisões, textos secundários e estados neutros.
- Cores fortes devem ser usadas com moderação para preservar hierarquia.

## Customização Por Loja

O frontend público da loja deve permitir identidade visual por estabelecimento sem comprometer consistência e usabilidade.

Essa customização deve acontecer por dados e tokens de configuração, não por componentes específicos para cada tipo de estabelecimento. A mesma estrutura visual base deve atender hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais.

Elementos customizáveis previstos:

- Logo da loja.
- Nome da loja.
- Banner ou capa.
- Cor principal da loja.
- Tipo de estabelecimento.
- Cidade ou área de atendimento.
- Status aberto ou fechado.
- Tempo estimado.
- Modalidades de atendimento.
- Categorias.
- Produtos.
- Tema visual derivado da identidade da loja.
- Slogan.
- Horário de funcionamento.
- Promoções.
- Imagens.
- Preços.
- Adicionais.
- Ingredientes.
- Ordem dos blocos permitidos.

Regras:

- A cor principal da loja deve ser usada em ações, destaques e estados ativos, sem reduzir contraste.
- A identidade da loja deve aparecer antes da marca PedeJah na experiência do cliente final.
- O layout deve funcionar mesmo sem logo ou banner enviados pela loja.
- O tema da loja não pode quebrar legibilidade, responsividade ou acessibilidade.
- A estrutura visual deve ser consistente entre lojas, mudando apenas tokens e conteúdo.
- Componentes visuais devem consumir dados de configuração e manter comportamento consistente entre lojas.
- Diferenças de segmento devem aparecer em conteúdo, categorias, produtos, imagens, adicionais e tema, não em componentes duplicados.

## Storefront Engine vs Store Configuration

O Design System deve proteger a separação entre a estrutura base do Storefront e a identidade de cada loja.

Storefront Engine:

- Define composição, hierarquia, responsividade, estados, padrões de navegação e componentes reutilizáveis.
- Inclui blocos como `StoreHero`, `StoreInfo`, `StoreSearch`, `CategorySelector`, `ProductGrid`, `ProductList`, `ProductCard`, `ProductDetail`, `Cart`, `Checkout` e `OrderTracking`.
- Deve manter a experiência principal consistente para todos os clientes do PedeJah.

Store Configuration:

- Define conteúdo e identidade de cada estabelecimento: nome, logo, banner, cores, slogan, cidade, status, horários, modalidades, promoções, categorias, produtos, imagens, preços, adicionais, ingredientes e ordem dos blocos permitidos.
- Pode mudar a personalidade da loja sem alterar a responsabilidade dos componentes.
- Não deve criar variações visuais que prejudiquem contraste, leitura, responsividade ou conversão.

## Loja de Demonstração

A loja fictícia usada nas primeiras sprints públicas será:

- Nome: Jah Burgers.
- Tipo: Hamburgueria artesanal.
- Cidade: Florianópolis - SC.
- Status: Aberta.
- Tempo estimado: 35-45 min.
- Modalidades: Entrega e Retirada.

Essa loja deve orientar textos, exemplos, categorias e produtos mockados quando a sprint autorizar implementação.

A Jah Burgers é apenas demonstração. O visual noir/dourado, textos, produtos e categorias associados a ela devem ser tratados como configuração ou mock da loja, não como identidade global do Storefront ou padrão obrigatório para outros segmentos.

## Tipografia

- Fonte oficial: Geist.
- Títulos devem ser claros, com peso entre 600 e 700.
- Texto de corpo deve priorizar legibilidade.
- Textos de apoio devem usar cor secundária.
- Evitar textos muito grandes dentro de painéis operacionais.
- Não usar letter-spacing negativo.
- Não escalar fonte com largura de viewport.

## Espaçamentos

Usar escala previsível baseada em Tailwind:

- `4px`: ajustes finos.
- `8px`: separação mínima entre elementos relacionados.
- `12px`: espaçamento interno compacto.
- `16px`: padrão para grupos simples.
- `24px`: separação entre blocos.
- `32px`: separação entre seções.
- `48px+`: seções institucionais ou áreas de respiro.

## Containers

- Conteúdo principal deve ter largura máxima consistente.
- Landing pages futuras podem usar `max-w-6xl` ou similar.
- Dashboards podem usar áreas mais largas, priorizando densidade.
- Containers não devem criar aparência de cards aninhados.

## Grid

- Usar grid responsivo somente quando houver benefício real de alinhamento.
- Em mobile, priorizar coluna única.
- Em tablet, usar 2 colunas apenas quando conteúdo mantiver legibilidade.
- Em desktop, usar 3 ou mais colunas somente para listas ou métricas.

## Radius

- Botões principais: arredondamento alto quando forem ações isoladas.
- Cards e painéis: até 8px, salvo decisão visual específica.
- Inputs: 8px a 12px.
- Modais: 12px.
- Evitar excesso de elementos arredondados sem função.

## Sombras

Sombras devem ser suaves e funcionais:

- Usar sombras para separar elementos flutuantes, menus, dialogs e dropdowns.
- Evitar sombras pesadas em layouts operacionais.
- Preferir borda leve quando a hierarquia puder ser resolvida sem sombra.

## Ícones

- Usar ícones para ações reconhecíveis.
- Preferir biblioteca leve apenas quando aprovada em sprint futura.
- Ícones devem ter tamanho consistente.
- Ícones não devem substituir texto quando a ação não for óbvia.
- Todos os botões somente com ícone devem ter label acessível.

## Animações

- Animações devem ser discretas, rápidas e funcionais.
- Usar transições para hover, abertura de menu, feedback de estado e dialogs.
- Evitar animações decorativas longas.
- Respeitar acessibilidade e evitar movimento excessivo.

## Microinterações

- Hover deve indicar clicabilidade sem alterar layout.
- Focus visível é obrigatório em controles interativos.
- Loading deve comunicar processamento.
- Estados de erro devem explicar o problema de forma objetiva.
- Feedback de sucesso deve ser breve e claro.

## Responsividade

- Mobile deve ser tratado como experiência completa.
- Tablet deve ser validado como breakpoint próprio.
- Desktop deve usar espaço com moderação.
- Não pode haver overflow horizontal.
- Menus e dialogs devem caber em telas pequenas.

## Hierarquia Visual

- A ação principal de cada tela deve ser evidente.
- Informações secundárias devem ter menor contraste.
- Elementos agrupados devem ficar próximos.
- Estados e status devem ser fáceis de escanear.

## Padrões de Componentes Futuros

### Header

- Objetivo: orientar navegação principal e reforçar marca.
- Comportamento: fixo ou sticky somente quando útil; responsivo; menu mobile simples.
- Quando utilizar: páginas institucionais e áreas com navegação geral.
- Quando não utilizar: telas internas que usem sidebar completa.
- Boas práticas: links claros, botão principal único, sem excesso de itens.

#### Especificação Para Sprint 2

- Escopo: tela inicial da loja fictícia Jah Burgers.
- Header institucional do PedeJah não deve ser o foco desta sprint.
- A navegação deve favorecer a experiência do cliente final da loja.
- A identidade principal exibida deve ser a da loja, não a landing institucional do PedeJah.
- Caso exista topo fixo ou área de navegação, ela deve apoiar acesso a categorias, status da loja e informações essenciais.
- Responsividade: validar desktop, tablet e mobile.
- Overflow: a tela não pode gerar rolagem horizontal em nenhum breakpoint.
- Console: qualquer erro visual ou de hidratação deve ser corrigido antes da entrega.
- Restrições: não criar landing page institucional do PedeJah, Hero institucional, Footer institucional, dashboard, backend, banco, autenticação ou checkout durante a Sprint 2.

### Loja Pública

- Objetivo: apresentar a loja contratante para o cliente final e permitir navegação pelo cardápio.
- Comportamento: deve carregar rápido, destacar identidade da loja, mostrar status operacional e organizar categorias/produtos.
- Quando utilizar: link público ou QR Code de uma loja específica.
- Quando não utilizar: páginas institucionais do PedeJah ou painel administrativo.
- Boas práticas: priorizar leitura rápida, categorias acessíveis, produtos escaneáveis, preço claro e indicação de disponibilidade.

### Banner de Loja

- Objetivo: comunicar identidade e contexto da loja.
- Comportamento: deve funcionar com imagem real, gradiente simples ou fallback neutro.
- Quando utilizar: topo da loja pública.
- Quando não utilizar: dashboards internos ou listagens densas.
- Boas práticas: não esconder informações essenciais sobre imagem com baixo contraste; manter altura controlada em mobile.

### Categorias de Cardápio

- Objetivo: permitir navegação rápida entre grupos de produtos.
- Comportamento: podem ser horizontais, fixas ou roláveis conforme sprint aprovada.
- Quando utilizar: lojas com múltiplos grupos de produtos.
- Quando não utilizar: cardápios muito pequenos sem necessidade de agrupamento.
- Boas práticas: rótulos curtos, estado ativo claro e boa área de toque.

### Produto de Cardápio

- Objetivo: exibir produto de forma clara e acionável.
- Comportamento: deve mostrar nome, descrição curta, preço, disponibilidade e imagem quando houver.
- Quando utilizar: listagens públicas de produtos.
- Quando não utilizar: métricas, relatórios ou dados administrativos.
- Boas práticas: evitar texto truncado demais, preservar alinhamento de preço e garantir leitura em mobile.

### Hero

- Objetivo: comunicar proposta principal em páginas institucionais.
- Comportamento: mostrar marca, valor e ação principal sem poluição.
- Quando utilizar: landing page e página pública de produto.
- Quando não utilizar: dashboard, fluxos operacionais e telas de configuração.
- Boas práticas: não criar hero sem conteúdo aprovado.

### Footer

- Objetivo: concentrar links institucionais e informações complementares.
- Comportamento: discreto e organizado.
- Quando utilizar: páginas públicas.
- Quando não utilizar: áreas internas de operação.
- Boas práticas: evitar excesso de links iniciais.

### Dashboard

- Objetivo: apresentar visão operacional e métricas úteis.
- Comportamento: denso, escaneável e responsivo.
- Quando utilizar: área autenticada.
- Quando não utilizar: páginas institucionais.
- Boas práticas: priorizar dados acionáveis, estados claros e filtros úteis.

### Sidebar

- Objetivo: navegação persistente em áreas internas.
- Comportamento: colapsável em telas menores.
- Quando utilizar: dashboard com múltiplas seções.
- Quando não utilizar: landing page simples.
- Boas práticas: hierarquia curta, labels claros e estado ativo evidente.

### Cards

- Objetivo: agrupar informações relacionadas.
- Comportamento: não devem ser usados como decoração.
- Quando utilizar: itens repetidos, métricas e resumos.
- Quando não utilizar: seções inteiras da página ou cards dentro de cards.
- Boas práticas: radius moderado, borda suave, conteúdo objetivo.

### Buttons

- Objetivo: executar ações.
- Comportamento: estados hover, focus, disabled e loading.
- Quando utilizar: comandos claros.
- Quando não utilizar: navegação comum que deve ser link.
- Boas práticas: um botão primário por contexto; labels verbais e diretos.

### Inputs

- Objetivo: capturar dados.
- Comportamento: label visível, estado de erro e foco claro.
- Quando utilizar: formulários e filtros.
- Quando não utilizar: seleção fechada que pede dropdown ou segmented control.
- Boas práticas: mensagens de erro próximas ao campo.

### Tables

- Objetivo: comparar e listar dados estruturados.
- Comportamento: responsivas, com cabeçalhos claros.
- Quando utilizar: pedidos, produtos, histórico e relatórios.
- Quando não utilizar: pequenos conjuntos visuais que cabem melhor em lista.
- Boas práticas: ações por linha devem ser previsíveis.

### Dialogs

- Objetivo: confirmar ou executar tarefas focadas.
- Comportamento: foco preso, fechamento claro e acessível.
- Quando utilizar: confirmação crítica, formulário curto e detalhes.
- Quando não utilizar: fluxos longos.
- Boas práticas: título claro, ação primária e ação de cancelamento.

### Dropdown

- Objetivo: oferecer seleção ou ações secundárias.
- Comportamento: abrir próximo ao gatilho e fechar ao selecionar.
- Quando utilizar: listas curtas de opções.
- Quando não utilizar: ações principais ou navegação essencial.
- Boas práticas: opções curtas, sem menus profundos.

### Badges

- Objetivo: indicar status, categoria ou estado.
- Comportamento: cores consistentes por significado.
- Quando utilizar: status de pedido, plano e disponibilidade.
- Quando não utilizar: decoração ou texto comum.
- Boas práticas: contraste adequado e rótulo curto.

### Toast

- Objetivo: feedback temporário.
- Comportamento: aparecer brevemente sem bloquear fluxo.
- Quando utilizar: sucesso, erro recuperável e aviso.
- Quando não utilizar: informações críticas que exigem ação.
- Boas práticas: texto curto e sem empilhar excesso.

### Loading

- Objetivo: indicar processamento.
- Comportamento: proporcional ao contexto.
- Quando utilizar: envio, carregamento de listas e transições.
- Quando não utilizar: ações instantâneas.
- Boas práticas: evitar tela inteira quando só uma área está carregando.

### Empty State

- Objetivo: explicar ausência de dados e sugerir próximo passo.
- Comportamento: simples, útil e sem tom promocional.
- Quando utilizar: listas vazias e histórico sem registros.
- Quando não utilizar: erros técnicos.
- Boas práticas: incluir ação quando apropriado.

### Erro

- Objetivo: comunicar problema e recuperação.
- Comportamento: claro, direto e sem culpa no usuário.
- Quando utilizar: falhas de validação, rede ou permissão.
- Quando não utilizar: estados vazios.
- Boas práticas: explicar o que aconteceu e o que fazer.

### Skeleton

- Objetivo: preservar layout durante carregamento.
- Comportamento: ocupar espaço semelhante ao conteúdo final.
- Quando utilizar: listas, cards e tabelas carregando.
- Quando não utilizar: carregamentos muito rápidos.
- Boas práticas: evitar skeletons que mudem tamanho do layout.

### Formulários

- Objetivo: coletar ou editar dados com segurança.
- Comportamento: validação clara e ordem lógica.
- Quando utilizar: cadastro, edição e configurações.
- Quando não utilizar: ações simples que cabem em botão ou controle direto.
- Boas práticas: agrupar campos relacionados e reduzir campos obrigatórios.

### Menu Mobile

- Objetivo: preservar navegação em telas pequenas.
- Comportamento: abrir e fechar de forma simples, com foco em links essenciais.
- Quando utilizar: navegação pública ou interna compactada.
- Quando não utilizar: quando a tela exige navegação operacional complexa sem adaptação.
- Boas práticas: evitar animações grandes e manter toque confortável.
