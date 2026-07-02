# PedeJah - Registro de Decisões

## Finalidade

Este documento registra decisões importantes de produto, tecnologia, design e processo. Ele deve funcionar como histórico técnico e evitar que escolhas relevantes dependam de memória ou contexto de conversa.

Cada decisão futura deve registrar:

- Data.
- Status.
- Contexto.
- Decisão.
- Motivo.
- Consequências.

Formato recomendado:

```text
## YYYY-MM-DD - Título da decisão

Status: Aprovada | Substituída | Em revisão

Contexto:

Decisão:

Motivo:

Consequências:
```

## 2026-07-01 - Escolha do Next.js 16

Status: Aprovada.

Contexto:

O PedeJah precisa de uma base moderna para páginas públicas, layouts, rotas futuras, APIs futuras e eventual dashboard autenticado.

Decisão:

Usar Next.js 16 como framework principal.

Motivo:

Next.js oferece App Router, integração forte com React, bom suporte a renderização híbrida e estrutura adequada para evoluir de landing page para aplicação SaaS. A versão 16 mantém o projeto alinhado com a stack moderna definida para o produto.

Consequências:

- O projeto deve seguir padrões do App Router.
- Decisões de API, server actions e renderização devem considerar o ecossistema Next.js.
- Atualizações de segurança do Next devem ser acompanhadas.

## 2026-07-01 - Escolha do React 19

Status: Aprovada.

Contexto:

A interface do PedeJah será construída em componentes reutilizáveis e deve acompanhar a stack oficial do Next.js 16.

Decisão:

Usar React 19.

Motivo:

React é o padrão natural do Next.js e permite composição de interfaces complexas de forma incremental. A versão 19 mantém compatibilidade com a stack definida.

Consequências:

- Componentes devem seguir padrões modernos de React.
- Estado local deve ser usado com moderação.
- Componentes cliente devem ser declarados somente quando necessário.

## 2026-07-01 - Escolha do TypeScript

Status: Aprovada.

Contexto:

O produto tende a crescer em domínios como pedidos, produtos, usuários, permissões e estabelecimentos.

Decisão:

Usar TypeScript em todo o projeto.

Motivo:

TypeScript reduz erros, documenta contratos de dados e facilita manutenção por diferentes desenvolvedores ou agentes de IA.

Consequências:

- Tipos devem ser tratados como parte do design técnico.
- Evitar `any` sem justificativa.
- Contratos futuros de API e domínio devem ser tipados.

## 2026-07-01 - Escolha do Tailwind CSS

Status: Aprovada.

Contexto:

O projeto precisa de velocidade na construção visual, consistência e baixo overhead de CSS customizado.

Decisão:

Usar Tailwind CSS.

Motivo:

Tailwind permite criar interfaces responsivas com consistência, reduzindo alternância entre arquivos e evitando CSS global excessivo. É adequado para evolução incremental do Design System.

Consequências:

- Classes devem ser usadas com critério e sem poluir componentes.
- Padrões repetidos devem virar componentes quando houver uso real.
- Tokens visuais devem seguir `docs/DESIGN.md`.

## 2026-07-01 - Uso do App Router

Status: Aprovada.

Contexto:

O projeto será construído sobre Next.js moderno e deve permitir layouts por segmento, páginas públicas e áreas internas futuras.

Decisão:

Usar App Router.

Motivo:

O App Router é a arquitetura recomendada para aplicações Next.js modernas e facilita composição de layouts, rotas e renderização.

Consequências:

- Rotas devem ser organizadas dentro de `app/`.
- Layouts compartilhados devem ser planejados por contexto.
- APIs futuras devem respeitar a organização do App Router.

## 2026-07-01 - Desenvolvimento por Sprints Pequenas

Status: Aprovada.

Contexto:

O projeto está sendo construído de forma incremental e assistida por IA. Isso aumenta o risco de escopo crescer sem controle.

Decisão:

Trabalhar sempre por sprints pequenas e não avançar sem aprovação.

Motivo:

Sprints pequenas reduzem risco, facilitam revisão e mantêm alinhamento com o objetivo do produto.

Consequências:

- Escopo deve ser respeitado rigidamente.
- Próxima sprint só começa após aprovação.
- Roadmap deve refletir status de cada sprint.

## 2026-07-01 - Criação de Design System Documentado

Status: Aprovada.

Contexto:

O produto precisa manter consistência visual conforme novas telas e componentes forem criados.

Decisão:

Manter `docs/DESIGN.md` como Design System oficial antes de implementar novos componentes.

Motivo:

Documentar padrões antes de expandir a interface evita decisões inconsistentes e reduz retrabalho.

Consequências:

- Novos componentes devem seguir o Design System.
- Mudanças visuais relevantes devem atualizar `docs/DESIGN.md`.
- Inspirações externas não devem ser copiadas.

## 2026-07-01 - Documentação Oficial em `docs/`

Status: Aprovada.

Contexto:

A continuidade do projeto não deve depender de conversa anterior.

Decisão:

Centralizar documentação oficial em `docs/`.

Motivo:

Uma pasta dedicada torna a documentação fácil de localizar, revisar e atualizar.

Consequências:

- Arquivos oficiais devem ficar em `docs/`.
- O `PROJECT.md` da raiz deve apenas apontar para a documentação oficial.
- Toda sprint deve consultar a documentação antes de iniciar.

## 2026-07-01 - Criação de Regras Para IA

Status: Aprovada.

Contexto:

Parte do desenvolvimento será assistida por IA, o que exige regras explícitas de atuação.

Decisão:

Criar `docs/AI_RULES.md`.

Motivo:

Regras específicas para IA reduzem risco de escopo indevido, dependências desnecessárias, alterações não autorizadas e falta de atualização documental.

Consequências:

- Toda IA deve ler `docs/AI_RULES.md` antes de alterar o projeto.
- Decisões importantes tomadas com auxílio de IA devem ser registradas.
- Roadmap deve ser atualizado ao concluir sprints.

## 2026-07-01 - Sprint 2 Limitada ao Header

Status: Substituída.

Contexto:

Após a criação da documentação oficial, foi necessário garantir que a próxima sprint tivesse escopo estreito e verificável, evitando que a página pública avançasse para Hero, Footer, Cards ou outras seções antes da aprovação específica.

Decisão:

Definir a Sprint 2 como implementação exclusiva do Header institucional.

Motivo:

O Header é a base de navegação pública e precisa estar resolvido antes da expansão da landing page. Limitar a sprint ao Header reduz risco de escopo excessivo e facilita validação visual em desktop, tablet e mobile.

Consequências:

- A Sprint 2 não deve implementar Hero, Footer, Cards, formulários, dashboard ou seções adicionais.
- O `docs/DESIGN.md` deve guiar especificamente o Header.
- O Chrome DevTools deve ser usado para validar qualquer alteração visual feita no Header.

Esta decisão foi substituída pela decisão "Desenvolvimento Inicial Focado no Frontend Público da Loja Fictícia".

## 2026-07-01 - Desenvolvimento Inicial Focado no Frontend Público da Loja Fictícia

Status: Aprovada.

Contexto:

O PedeJah será vendido para lanchonetes, açaíterias, hamburguerias e deliverys, mas o valor principal para o lojista depende da experiência que o cliente final terá ao acessar o link ou QR Code da loja. Começar pela landing page institucional do SaaS não valida esse fluxo central.

Decisão:

O desenvolvimento inicial do frontend será focado na tela pública de uma loja fictícia de demonstração, não na landing page institucional do PedeJah.

A loja de demonstração será:

- Nome: Jah Burgers.
- Tipo: Hamburgueria artesanal.
- Cidade: Florianópolis - SC.
- Status: Aberta.
- Tempo estimado: 35-45 min.
- Modalidades: Entrega e Retirada.

Motivo:

A loja pública demonstra diretamente o produto que o estabelecimento contratante entregará aos seus clientes. Essa abordagem antecipa decisões importantes sobre identidade por loja, cardápio, categorias, produtos, status operacional e base futura para carrinho e checkout.

Consequências:

- A próxima sprint deve implementar a tela inicial da loja fictícia, mediante aprovação.
- O site institucional do PedeJah fica para etapa futura.
- O Design System deve prever customização por loja.
- A arquitetura deve separar site institucional, frontend público da loja, painel administrativo e backend/API futura.
- Não deve ser criado Hero institucional ou landing page do PedeJah agora.

## 2026-07-01 - Desenvolvimento Guiado por Conversão e Experiência do Usuário

Status: Aprovada.

Contexto:

O frontend público da loja é a experiência usada pelo cliente final para decidir o que comprar e iniciar um pedido. Tratar essa experiência apenas como cardápio digital reduziria o potencial do PedeJah como ferramenta de vendas para os estabelecimentos.

Decisão:

O desenvolvimento será guiado por objetivos de negócio e experiência do usuário, e não apenas por requisitos técnicos.

Motivo:

O sucesso do PedeJah depende da capacidade de aumentar pedidos para as lojas contratantes. Portanto, decisões de UX, layout, conteúdo, hierarquia visual e fluxo devem priorizar conversão, velocidade de compra, redução de dúvidas e confiança.

Consequências:

- Toda tela futura deve ter objetivo de negócio explícito.
- Produtos, categorias e ações de compra devem ter prioridade sobre informações secundárias.
- A documentação de produto deve orientar decisões antes da implementação.
- A IA deve avaliar cliques, clareza, velocidade e conversão antes de implementar telas.
- `docs/PRODUCT_RULES.md` passa a ser referência obrigatória para decisões de produto.

## 2026-07-01 - Modelo 03 Como Referência Visual do Storefront Premium

Status: Aprovada.

Contexto:

A Sprint de evolução do storefront precisava de uma referência visual aprovada antes de implementar novos componentes importantes, conforme regra definida em `docs/AI_RULES.md`.

Decisão:

Usar o modelo 03 gerado pelo Stitch como direção visual para a experiência premium mobile-first da loja fictícia Jah Burgers, sem copiar o HTML gerado e sem transformar a página em uma estrutura monolítica.

Motivo:

O modelo 03 oferece uma direção coerente para primeira dobra imersiva, atmosfera premium, hierarquia forte de loja, categorias acessíveis e produtos destacados. Essa direção combina com o objetivo do PedeJah de fazer o storefront parecer uma ferramenta profissional de vendas, não apenas um cardápio estático.

Consequências:

- O visual noir/dourado deve ser tratado como tema da Jah Burgers, não como identidade global do PedeJah.
- A implementação deve continuar modular, com componentes pequenos e reutilizáveis.
- Referências geradas por ferramentas visuais devem orientar composição, hierarquia e sensação de produto, mas não devem ser copiadas literalmente.
- Novos blocos visuais importantes devem continuar exigindo referência aprovada ou sprint específica de exploração.

## 2026-07-02 - Storefront Engine Separada da Configuração da Loja

Status: Aprovada.

Contexto:

O PedeJah está evoluindo a partir de uma loja fictícia de demonstração, a Jah Burgers, mas o produto não deve ser orientado a uma loja específica. Como SaaS, a plataforma precisa atender múltiplos tipos de estabelecimentos, como hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais.

Decisão:

Separar explicitamente o Storefront em duas camadas: Storefront Engine e Store Configuration.

A Storefront Engine concentra componentes e comportamentos reutilizáveis, como `StoreHero`, `StoreInfo`, `StoreSearch`, `CategorySelector`, `ProductGrid`, `ProductList`, `ProductCard`, `ProductDetail`, `Cart`, `Checkout` e `OrderTracking`.

A Store Configuration concentra dados variáveis por cliente, como nome, logo, banner, cores, slogan, cidade, status, horários, modalidades, promoções, categorias, produtos, imagens, preços, adicionais, ingredientes e ordem dos blocos permitidos.

Motivo:

Essa separação evita duplicação de componentes e impede que regras específicas da Jah Burgers ou de qualquer segmento sejam acopladas à interface. Também prepara o produto para um futuro painel administrativo, no qual lojistas poderão alterar dados e identidade sem exigir novas telas ou componentes.

Consequências:

- A Jah Burgers permanece apenas como mock/demo.
- Novas lojas devem ser adicionadas por mocks ou configurações, não por duplicação de telas.
- Componentes visuais do Storefront devem consumir contratos de dados e não conhecer a origem dos dados.
- Hoje os dados podem vir de mocks; futuramente devem vir de banco, API e painel administrativo.
- Componentes específicos por segmento só devem existir se houver necessidade real que um componente genérico não resolva.
