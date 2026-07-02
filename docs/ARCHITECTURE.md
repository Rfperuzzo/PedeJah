# PedeJah - Arquitetura Técnica

## Arquitetura Geral

O PedeJah utiliza Next.js 16 com App Router, React 19, TypeScript e Tailwind CSS. A arquitetura deve começar simples e evoluir por necessidade, preservando separação entre rotas, componentes, lógica de domínio e integrações.

O projeto deve evitar complexidade prematura. Novas camadas devem ser criadas quando houver repetição real, regra de negócio clara ou necessidade de isolar responsabilidades.

## Áreas do Produto

O projeto deve separar claramente quatro áreas, mesmo que nem todas sejam implementadas no início.

### 1. Site Institucional do PedeJah

Área pública voltada para vender o SaaS para lojistas. Deve apresentar proposta de valor, planos, recursos, prova social e contato.

Status: futuro. Não é o foco inicial do frontend.

### 2. Frontend Público da Loja

Área pública acessada pelo cliente final da loja contratante via link ou QR Code. Deve exibir identidade da loja, banner, status, categorias, produtos e futuramente carrinho e checkout.

Status: foco inicial do frontend.

O frontend público da loja deve ser tratado como Storefront Engine, não como uma tela específica para a Jah Burgers ou para hamburguerias. A mesma rota e a mesma estrutura devem conseguir renderizar lojas diferentes no futuro a partir de mocks, banco, API ou painel administrativo.

Loja de demonstração:

- Nome: Jah Burgers.
- Tipo: Hamburgueria artesanal.
- Cidade: Florianópolis - SC.
- Status: Aberta.
- Tempo estimado: 35-45 min.
- Modalidades: Entrega e Retirada.

A Jah Burgers é apenas mock/demo. Novas lojas devem ser adicionadas por novos mocks ou configurações, não por duplicação de telas ou criação de componentes específicos por segmento.

### 3. Painel Administrativo do Lojista

Área autenticada para o lojista gerenciar operação, produtos, categorias, pedidos, horários, formas de atendimento e configurações.

Status: futuro. Não deve ser implementado sem sprint própria.

### 4. Backend/API Futura

Camada responsável por persistência, autenticação, regras de negócio, pedidos, cardápio, integrações e comunicação em tempo real.

Status: futuro. Não deve ser implementado sem decisão técnica e sprint específica.

## Estrutura de Pastas

Estrutura atual:

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  header.tsx
docs/
```

Estrutura recomendada conforme evolução:

```text
app/
  (marketing)/
  (storefront)/
  (admin)/
components/
  ui/
  layout/
features/
  storefront/
  orders/
  menu/
  establishments/
lib/
  api/
  auth/
  db/
  realtime/
  utils/
types/
docs/
```

## Storefront Engine vs Store Configuration

O Storefront deve manter separação explícita entre engine reutilizável e configuração da loja.

Storefront Engine:

- Componentes e comportamentos compartilhados: `StoreHero`, `StoreInfo`, `StoreSearch`, `CategorySelector`, `ProductGrid`, `ProductList`, `ProductCard`, `ProductDetail`, `Cart`, `Checkout` e `OrderTracking`.
- Deve funcionar para hamburguerias, açaíterias, pizzarias, cafeterias, confeitarias, restaurantes, food trucks e deliverys locais.
- Não deve conter regra de negócio específica de uma loja ou segmento dentro de componente visual.
- Deve consumir contratos de dados estáveis, sem depender se a origem é mock, API, banco ou painel administrativo.

Store Configuration:

- Dados variáveis por estabelecimento: nome, logo, banner, cores do tema, slogan, cidade, status, horários, modalidades de entrega ou retirada, promoções, categorias, produtos, imagens, preços, adicionais, ingredientes e ordem dos blocos permitidos.
- Hoje pode ser representada por mocks locais.
- Futuramente deve ser alimentada por banco, API e painel administrativo sem exigir reescrita dos componentes visuais.

Regra arquitetural:

- Nunca criar componente específico apenas para hamburgueria, açaíteria ou pizzaria se um componente genérico resolver.
- Novas lojas devem ser criadas adicionando dados de configuração, não duplicando rotas, telas ou componentes com a mesma responsabilidade.

## Estrutura dos Componentes

Componentes devem ser organizados por nível de reutilização:

- `components/ui/`: botões, inputs, dialogs, badges e padrões genéricos.
- `components/layout/`: Header, Sidebar, containers e estruturas de página.
- `features/*/components/`: componentes específicos de domínio, como lista de pedidos.

Regras:

- Componentes devem ter responsabilidade clara.
- Componentes de UI não devem conhecer regras de negócio.
- Componentes de domínio podem combinar UI com dados do domínio.
- Componentes visuais do Storefront devem conhecer apenas contratos genéricos de loja, categoria, produto, carrinho, checkout e pedido.
- Evitar componentes muito grandes.
- Evitar criar biblioteca interna antes de haver uso concreto.

## Fluxo de Dados

Fase inicial:

- Página pública de loja com dados fictícios ou mockados.
- Mocks devem representar configurações de loja, não componentes específicos de uma loja.
- Estado local apenas quando necessário para interação simples.
- Nenhum backend real.
- Nenhuma API real.

Fase de protótipo:

- Dados mockados por feature.
- Contratos TypeScript representando entidades futuras.
- Separação clara entre dados simulados e interface.

Fase com backend:

- Rotas de API ou server actions definidas por caso de uso.
- Validação de entrada obrigatória.
- Camada de acesso a dados isolada em `lib/db` ou equivalente.
- Evitar chamadas diretas ao banco dentro de componentes de interface.

## Estratégia Para APIs Futuras

APIs devem ser criadas somente quando houver necessidade aprovada.

Diretrizes:

- Contratos de entrada e saída devem ser tipados.
- Validação deve ocorrer no servidor.
- Erros devem ter formato previsível.
- APIs devem representar casos de uso, não apenas tabelas.
- Manter compatibilidade para integrações futuras.

Possíveis domínios:

- Estabelecimentos.
- Usuários.
- Produtos.
- Categorias.
- Adicionais.
- Pedidos.
- Status de pedido.
- Relatórios.

## Estratégia Para Comunicação em Tempo Real

Tempo real será importante para pedidos, cozinha e atendimento. A escolha técnica deve ser adiada até haver definição de backend e infraestrutura.

Opções futuras:

- WebSockets.
- Server-Sent Events.
- Serviço gerenciado de realtime.
- Revalidação periódica como etapa intermediária.

Diretrizes:

- Não acoplar interface a uma tecnologia específica antes da decisão.
- Criar abstração em `lib/realtime` quando a implementação for aprovada.
- Garantir reconexão, feedback de estado e consistência de pedido.

## Estratégia Para Autenticação

Autenticação será necessária antes de uso real.

Requisitos futuros:

- Login seguro.
- Sessão persistente.
- Separação por estabelecimento.
- Controle de permissões por papel.
- Proteção de rotas internas.

Papéis previstos:

- Dono.
- Gerente.
- Atendente.
- Cozinha ou preparo.
- Entregador ou operador de entrega.

Diretrizes:

- Não implementar autenticação sem sprint específica.
- Registrar escolha da solução em `DECISIONS.md`.
- Considerar segurança, manutenção e integração com Next.js.

## Estratégia Para Banco de Dados

Banco de dados será definido em sprint futura.

Entidades prováveis:

- User.
- Establishment.
- Product.
- Category.
- OptionGroup.
- Option.
- Order.
- OrderItem.
- Customer.
- Address.
- Payment.

Diretrizes:

- Modelar pensando em multiestabelecimento.
- Preservar histórico de pedidos.
- Evitar apagar dados críticos sem estratégia de auditoria.
- Definir migrations e seed quando banco for escolhido.
- Não acoplar UI diretamente ao modelo físico do banco.

## Estratégia Para Escalabilidade

Escalabilidade deve ser pragmática:

- Primeiro garantir clareza e correção.
- Depois otimizar gargalos reais.
- Separar domínios para facilitar evolução.
- Evitar dependências que limitem deploy futuro.
- Usar cache e streaming apenas quando fizer sentido.
- Projetar multiestabelecimento desde o modelo de dados.

## Princípios SOLID

Aplicação prática:

- Single Responsibility: cada componente, função ou módulo deve ter motivo claro para existir.
- Open/Closed: extensões devem evitar reescrever partes estáveis.
- Liskov Substitution: tipos e contratos devem ser previsíveis.
- Interface Segregation: evitar contratos grandes demais.
- Dependency Inversion: domínios não devem depender diretamente de detalhes externos quando houver complexidade.

SOLID deve orientar decisões, não criar abstrações artificiais.

## Separação de Responsabilidades

- Interface: apresentação e interação.
- Estado local: interações simples e temporárias.
- Domínio: regras de pedido, cardápio, status e permissões.
- Infraestrutura: APIs, banco, autenticação, realtime e integrações.
- Documentação: decisões, regras e orientação de continuidade.

## Boas Práticas

- Ler documentação antes de alterar.
- Manter escopo da sprint.
- Validar build e lint.
- Usar Chrome DevTools para alterações visuais.
- Registrar decisões técnicas.
- Priorizar acessibilidade.
- Evitar dependências sem justificativa.
- Preferir nomes claros a comentários excessivos.
- Manter componentes reutilizáveis somente quando houver uso real.
