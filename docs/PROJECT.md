# PedeJah - Manual Principal do Projeto

## Visão do Produto

O PedeJah é um SaaS para lanchonetes, hamburguerias, açaíterias e operações de delivery que precisam organizar pedidos com rapidez, clareza e baixo atrito operacional.

O produto deve ser simples o suficiente para ser adotado por equipes pequenas sem treinamento pesado, mas estruturado o bastante para evoluir para uma plataforma completa de gestão de pedidos, cardápio, atendimento, acompanhamento e operação.

## Direção Inicial do Frontend

O desenvolvimento inicial do frontend não começará pela landing page institucional do PedeJah. A primeira experiência pública a ser construída será a tela de uma loja fictícia de demonstração, representando o que o cliente final verá ao acessar o link ou QR Code de uma loja contratante.

Essa escolha prioriza o valor central do produto: permitir que estabelecimentos apresentem sua loja, categorias e produtos de forma simples, clara e pronta para evoluir para carrinho e checkout.

O PedeJah não está sendo criado para uma loja específica. Ele é uma plataforma SaaS para múltiplos tipos de estabelecimentos, como hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais. A mesma estrutura base do Storefront deve atender esses clientes por configuração, sem duplicar telas ou criar componentes por tipo de loja.

### Storefront Engine vs Store Configuration

A experiência pública da loja deve ser separada em duas camadas:

- Storefront Engine: estrutura, componentes e comportamentos reutilizáveis do Storefront.
- Store Configuration: dados, conteúdo, tema e regras configuráveis de cada estabelecimento.

O Storefront Engine deve ser genérico, reutilizável e configurável. Componentes como `StoreHero`, `StoreInfo`, `StoreSearch`, `CategorySelector`, `ProductGrid`, `ProductList`, `ProductCard`, `ProductDetail`, `Cart`, `Checkout` e `OrderTracking` devem funcionar para qualquer tipo de loja.

A Store Configuration deve concentrar dados que mudam por cliente: nome da loja, logo, banner, cores do tema, slogan, cidade, status, horário de funcionamento, modalidades de entrega ou retirada, promoções, categorias, produtos, imagens, preços, adicionais, ingredientes e ordem dos blocos permitidos.

Componentes devem consumir dados, não conhecer a origem desses dados. Hoje os dados vêm de mocks. Futuramente os mesmos contratos devem poder ser alimentados por banco, API ou painel administrativo.

### Loja Fictícia de Demonstração

- Nome: Jah Burgers.
- Tipo: Hamburgueria artesanal.
- Cidade: Florianópolis - SC.
- Status: Aberta.
- Tempo estimado: 35-45 min.
- Modalidades: Entrega e Retirada.

A Jah Burgers é apenas uma loja fictícia de demonstração para validar a experiência inicial. Ela não é o centro do produto e não deve gerar componentes, regras ou estruturas específicas de hamburgueria.

### Experiência Inicial do Cliente Final

A tela pública da loja deve preparar a base para:

- Identidade da loja.
- Banner ou capa.
- Status aberto ou fechado.
- Tempo estimado.
- Modalidades disponíveis.
- Categorias.
- Produtos.
- Detalhes de produto em sprint futura.
- Carrinho em sprint futura.
- Checkout em sprint futura.

## Propósito

Reduzir a desorganização comum em operações de alimentação que dependem de mensagens soltas, anotações manuais, planilhas ou ferramentas genéricas para controlar pedidos.

O PedeJah deve centralizar o fluxo operacional, reduzir erros de atendimento, dar visibilidade ao status dos pedidos e permitir que o negócio trabalhe com mais previsibilidade.

## Missão

Criar uma plataforma acessível, rápida e confiável para pequenos e médios negócios de alimentação gerenciarem pedidos de forma profissional sem complexidade desnecessária.

## Objetivos

- Permitir que pedidos sejam cadastrados, acompanhados e concluídos de forma organizada.
- Reduzir retrabalho, perda de informações e ruído entre atendimento, cozinha e entrega.
- Criar uma experiência clara para operadores com diferentes níveis de familiaridade digital.
- Evoluir o produto por sprints pequenas, sempre com validação antes de ampliar escopo.
- Manter uma base técnica limpa, escalável e fácil de manter.
- Garantir que o Storefront seja reutilizável por diferentes tipos de estabelecimento a partir de dados de configuração.

## Público-Alvo

- Lanchonetes independentes.
- Hamburguerias artesanais.
- Açaíterias.
- Restaurantes pequenos com delivery.
- Negócios de alimentação que recebem pedidos por balcão, WhatsApp, telefone ou canais digitais.
- Equipes enxutas que precisam de controle operacional sem sistemas complexos de ERP.

## Diferenciais

- Interface simples e direta para operação diária.
- Fluxo focado em pedidos, não em burocracia administrativa.
- Design limpo e profissional, adequado para uso recorrente.
- Arquitetura preparada para evoluir para tempo real, autenticação, múltiplos estabelecimentos e integrações.
- Desenvolvimento documentado para permitir continuidade por humanos ou IA sem depender de memória da conversa.

## Problemas Que o Sistema Resolve

- Pedidos perdidos em conversas ou anotações.
- Falta de clareza sobre status do pedido.
- Erros por comunicação informal entre atendimento e preparo.
- Dificuldade para priorizar pedidos em horários de pico.
- Ausência de histórico estruturado.
- Ferramentas grandes demais para operações pequenas.
- Falta de padrão visual e técnico em soluções improvisadas.

## Filosofia do Produto

O PedeJah deve ser simples antes de completo, rápido antes de decorativo, claro antes de sofisticado, confiável antes de experimental e modular antes de acoplado.

Cada funcionalidade deve resolver um problema operacional real. Funcionalidades sem impacto claro devem ser adiadas ou removidas.

O PedeJah não é apenas um sistema de pedidos. Ele é uma plataforma criada para aumentar as vendas dos estabelecimentos.

Toda decisão técnica ou visual deve considerar primeiro a experiência do cliente final. A interface pública da loja deve reduzir dúvidas, encurtar caminhos e facilitar que o cliente encontre produtos, entenda opções e avance para o pedido com confiança.

Para o frontend público da loja, estética é importante, mas conversão é prioridade. Cada tela deve ser avaliada pela capacidade de gerar pedidos com menos atrito.

## Funcionalidades Previstas

- Frontend público de loja contratante.
- Loja fictícia de demonstração.
- Página institucional do PedeJah em etapa futura.
- Cadastro e autenticação de usuários.
- Gestão de estabelecimentos.
- Gestão de cardápio.
- Cadastro de produtos, categorias, adicionais e variações.
- Criação de pedidos.
- Kanban ou lista de pedidos por status.
- Atualização de status em tempo real.
- Histórico de pedidos.
- Painel operacional para atendimento.
- Painel de cozinha ou preparo.
- Controle básico de entrega ou retirada.
- Dashboard com métricas essenciais.
- Notificações e feedbacks operacionais.
- Configurações do estabelecimento.
- Integrações futuras com canais externos.

## Tecnologias Oficiais

- Next.js 16.
- React 19.
- TypeScript.
- Tailwind CSS.
- App Router.
- ESLint.
- npm como gerenciador de pacotes enquanto não houver decisão formal contrária.

## Organização de Pastas

Estrutura atual:

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  header.tsx
docs/
  VISION.md
  PROJECT.md
  DESIGN.md
  PRODUCT_RULES.md
  STOREFRONT.md
  ROADMAP.md
  ARCHITECTURE.md
  DECISIONS.md
  AI_RULES.md
```

Diretrizes futuras:

- `app/`: rotas, layouts e arquivos específicos do App Router, separando site institucional, loja pública e painel administrativo quando essas áreas forem criadas.
- `components/`: componentes reutilizáveis de interface.
- `features/`: módulos de produto quando houver domínio funcional claro.
- `lib/`: utilitários, clientes, validações e integrações compartilhadas.
- `types/`: tipos globais ou contratos compartilhados.
- `docs/`: documentação oficial e decisões permanentes.

## Padrões de Nomenclatura

- Componentes React: PascalCase para nome exportado.
- Arquivos de componentes: manter consistência local e nomes claros.
- Funções e variáveis: camelCase.
- Tipos e interfaces: PascalCase.
- Constantes globais: UPPER_SNAKE_CASE quando representarem valores fixos de domínio.
- Rotas: nomes curtos, sem abreviações obscuras.

## Convenções de Código

- Usar TypeScript com tipagem explícita quando isso melhorar clareza.
- Evitar `any` salvo quando houver justificativa documentada.
- Preferir componentes pequenos e focados.
- Separar lógica de domínio de interface quando a complexidade crescer.
- Evitar abstrações prematuras.
- Evitar dependências pesadas sem necessidade real.
- Manter acessibilidade como requisito.
- Não implementar backend, banco, autenticação ou APIs sem sprint aprovada.

## Estratégia de Desenvolvimento

O projeto será desenvolvido por sprints pequenas, com escopo fechado e aprovação explícita antes de avançar.

Cada sprint deve ter objetivo claro, declarar o que será e o que não será implementado, preservar comportamento existente, atualizar documentação quando decisões forem tomadas e ser validada antes da entrega.

## Fluxo de Trabalho

1. Ler toda documentação em `docs/`.
2. Confirmar o escopo da sprint atual.
3. Verificar estado do projeto.
4. Implementar apenas o que foi autorizado.
5. Rodar validações técnicas.
6. Validar visualmente no Chrome DevTools quando houver interface.
7. Atualizar `ROADMAP.md` e `DECISIONS.md` quando aplicável.
8. Listar arquivos criados ou modificados.
9. Aguardar aprovação antes da próxima sprint.

## Checklist Obrigatório Antes de Concluir Qualquer Sprint

- Escopo da sprint foi respeitado.
- Nenhuma funcionalidade fora da sprint foi adicionada.
- Documentação necessária foi atualizada.
- Código compila quando houver código.
- Lint passa ou falhas são documentadas quando houver código.
- Interface foi validada em desktop, tablet e mobile quando houver alteração visual.
- Console do navegador foi verificado quando houver alteração visual.
- Overflow horizontal foi verificado quando houver alteração visual.
- Arquivos criados/modificados foram listados na entrega.
- Próxima sprint não foi iniciada sem aprovação.

## Padrões de Qualidade

- Clareza operacional.
- Responsividade.
- Acessibilidade.
- Performance adequada.
- Baixo acoplamento.
- Componentes reutilizáveis.
- Código legível.
- Documentação atualizada.
- Decisões registradas.

## Uso Obrigatório da Documentação

Antes de qualquer alteração futura, a pessoa ou IA responsável deve ler:

- `docs/VISION.md` para entender a visão central do produto e orientar decisões futuras.
- `docs/PROJECT.md` para visão geral e regras de produto.
- `docs/DESIGN.md` para padrões visuais.
- `docs/PRODUCT_RULES.md` para regras de negócio e conversão.
- `docs/STOREFRONT.md` para jornada, telas, estados e navegação do cliente final.
- `docs/ROADMAP.md` para escopo e ordem de evolução.
- `docs/ARCHITECTURE.md` para decisões técnicas.
- `docs/DECISIONS.md` para histórico de decisões.
- `docs/AI_RULES.md` quando a execução for assistida por IA.

Nenhuma decisão importante deve depender de memória, conversa anterior ou interpretação implícita.
