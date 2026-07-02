# PedeJah - Roadmap Oficial

## Diretrizes do Roadmap

O roadmap organiza a evolução do produto por versões e sprints pequenas. Nenhuma versão ou sprint deve ser iniciada sem aprovação explícita.

Status possíveis:

- `Planejada`: ainda não iniciada.
- `Em andamento`: execução aprovada e ativa.
- `Concluída`: entregue e validada.
- `Bloqueada`: depende de decisão ou recurso externo.

## Versão 0.1 - Fundação do Produto

Objetivo: estabelecer base técnica, documentação oficial e primeira estrutura visual pública.

Prioridade: alta.

Dependências: ambiente local e stack oficial.

Funcionalidades:

- Base Next.js 16 com TypeScript e Tailwind CSS.
- Layout global.
- Header responsivo.
- Documentação oficial do produto.
- Design System documentado.
- Roadmap, arquitetura e decisões iniciais.
- Regras de trabalho com IA.

## Versão 0.2 - Frontend Público da Loja

Objetivo: criar a primeira experiência pública que o cliente final verá ao acessar o link ou QR Code de uma loja contratante.

Prioridade: alta.

Dependências:

- Aprovação da versão 0.1.
- Design System documentado.

Funcionalidades previstas:

- Identidade da loja.
- Banner ou capa.
- Status aberto ou fechado.
- Cidade e informações essenciais.
- Tempo estimado.
- Modalidades de atendimento.
- Categorias.
- Produtos.
- Detalhes de produto em etapa futura.
- Carrinho em etapa futura.
- Checkout em etapa futura.
- Validação visual completa.

## Versão 0.3 - Protótipo Operacional

Objetivo: iniciar experiência interna sem backend real, validando fluxo de pedidos com dados locais ou mockados.

Prioridade: alta.

Dependências:

- Aprovação da loja pública inicial.
- Definição de fluxos principais.

Funcionalidades previstas:

- Layout de dashboard.
- Sidebar interna.
- Lista ou quadro de pedidos.
- Estados básicos de pedido.
- Componentes de formulário.
- Empty states, loading e erros simulados.

## Versão 1.0 - Produto Mínimo Operável

Objetivo: permitir uso real inicial por estabelecimentos.

Prioridade: alta após validação do protótipo.

Dependências:

- Autenticação definida.
- Banco de dados definido.
- Modelo multiestabelecimento definido.
- Estratégia de deploy definida.

Funcionalidades previstas:

- Autenticação.
- Cadastro de estabelecimento.
- Gestão de cardápio.
- Criação e acompanhamento de pedidos.
- Persistência em banco.
- Atualizações em tempo real.
- Histórico.
- Métricas essenciais.

## Sprints

### Sprint 1 - Base Técnica Inicial

Status: Concluída.

Objetivo:

- Criar base Next.js 16 com TypeScript, Tailwind CSS e App Router.
- Implementar layout global, fonte Geist, metadata básica e Header responsivo.

Checklist:

- Estrutura inicial organizada.
- Layout global.
- Fonte Geist.
- Metadata básica.
- Header responsivo.
- Menu hambúrguer simples no mobile.
- Build validado.
- Chrome DevTools validado em desktop, tablet e mobile.

Observações:

- Não foram implementados hero, footer, cards, CTA, backend, banco, autenticação ou APIs.

### Sprint 1.5 - DNA do Produto

Status: Concluída.

Objetivo:

- Criar documentação oficial para orientar produto, design, arquitetura, roadmap, decisões e trabalho assistido por IA.

Checklist:

- Criar `docs/PROJECT.md`.
- Criar `docs/DESIGN.md`.
- Criar `docs/ROADMAP.md`.
- Criar `docs/ARCHITECTURE.md`.
- Criar `docs/DECISIONS.md`.
- Criar `docs/AI_RULES.md`.
- Revisar consistência entre documentos.
- Não implementar interface.
- Não instalar dependências.

Observações:

- Esta sprint não altera funcionalidades.

### Sprint 1.6 - Mentalidade de Produto

Status: Concluída.

Objetivo:

- Ajustar a documentação para deixar claro que o frontend público do PedeJah é uma ferramenta de vendas, não apenas um cardápio digital.

Checklist:

- Atualizar `docs/PROJECT.md` com a filosofia de produto orientada a vendas.
- Atualizar `docs/DESIGN.md` com princípios de produto e objetivos por tela.
- Criar `docs/PRODUCT_RULES.md` com regras de negócio e conversão.
- Atualizar `docs/DECISIONS.md` com a decisão de desenvolvimento guiado por negócio e experiência do usuário.
- Atualizar `docs/AI_RULES.md` com perguntas de produto obrigatórias antes de implementar telas.
- Não implementar interface.
- Não alterar componentes.
- Não alterar páginas.
- Não instalar bibliotecas.

Observações:

- Esta sprint muda a forma de pensar e priorizar as próximas telas, mas não altera código de produto.

### Sprint 1.7 - Mapeamento Completo do Storefront

Status: Concluída.

Objetivo:

- Criar a documentação completa da experiência do cliente final, mapeando navegação, telas, estados, componentes compartilhados e fluxo do QR Code até entrega ou conclusão do pedido.

Checklist:

- Criar `docs/STOREFRONT.md`.
- Mapear jornada completa do cliente final.
- Mapear telas futuras do Storefront.
- Documentar estados globais.
- Documentar componentes compartilhados.
- Tornar `docs/STOREFRONT.md` obrigatório para futuras implementações do frontend público.
- Atualizar `docs/AI_RULES.md`.
- Não implementar interface.
- Não alterar componentes.
- Não alterar páginas.
- Não instalar bibliotecas.

Observações:

- Esta sprint documenta a experiência do cliente final e deve orientar todas as próximas sprints do frontend público.

### Sprint 2 - Storefront Foundation + StoreBanner

Status: Concluída.

Objetivo:

- Implementar a fundação visual e estrutural do frontend público da loja fictícia Jah Burgers, entregando somente o primeiro bloco visual `StoreBanner`.

Checklist:

- Confirmar escopo antes de iniciar.
- Usar `docs/DESIGN.md`.
- Usar `docs/PRODUCT_RULES.md`.
- Usar `docs/STOREFRONT.md`.
- Usar a loja fictícia Jah Burgers como demonstração.
- Criar rota pública da loja fictícia.
- Criar dados mockados separados da interface.
- Criar componente `StoreBanner` independente e reutilizável.
- Exibir identidade da loja.
- Exibir banner ou capa.
- Exibir status `Aberta`.
- Exibir cidade `Florianópolis - SC`.
- Exibir tempo estimado `35-45 min`.
- Exibir modalidades `Entrega` e `Retirada`.
- Não implementar StoreInfo.
- Não implementar categorias.
- Não implementar produtos.
- Não implementar carrinho.
- Não implementar checkout.
- Não implementar modal ou detalhes de produto.
- Não criar landing page institucional do PedeJah.
- Não criar Hero institucional.
- Não criar backend, banco, autenticação ou APIs.
- Validar desktop, tablet e mobile no Chrome DevTools.
- Verificar console do navegador.
- Verificar ausência de overflow horizontal.
- Atualizar documentação se houver decisão nova.

Observações:

- A Sprint 2 focou na experiência pública da loja, não na venda institucional do PedeJah.
- `docs/STOREFRONT.md` é documento obrigatório para qualquer implementação do frontend público do cliente final.

### Sprint 2.1 - Storefront Premium Mobile-First

Status: Concluída.

Objetivo:

- Evoluir a tela da loja fictícia Jah Burgers para uma experiência premium mobile-first inspirada no modelo visual 03 do Stitch, sem copiar o HTML gerado.

Checklist:

- Usar o modelo 03 apenas como referência visual aprovada.
- Evoluir `StoreBanner` para uma seção `StoreHero` imersiva.
- Criar mocks locais para categorias e produtos.
- Implementar `StoreHero`.
- Implementar `StoreSearch`.
- Implementar `CategorySelector`.
- Implementar `ProductPreview`.
- Implementar `ProductCard`.
- Manter `page.tsx` apenas como composição de blocos.
- Não implementar carrinho funcional.
- Não implementar checkout.
- Não implementar modal de produto.
- Não implementar backend, API ou banco de dados.
- Não instalar dependências novas.
- Validar com lint, build e Chrome DevTools em mobile, tablet e desktop.

Observações:

- O dourado/amarelo foi tratado como cor de tema da Jah Burgers, não como cor global do PedeJah.
- A implementação prioriza identidade da loja, descoberta rápida, categorias e produtos destacados.

### Sprint 3 - Design System Implementável

Status: Planejada.

Objetivo:

- Transformar padrões documentados em componentes reutilizáveis somente quando houver necessidade real.

Checklist previsto:

- Definir componentes prioritários.
- Evitar biblioteca pesada sem justificativa.
- Garantir acessibilidade.
- Validar estados e responsividade.

Observações:

- Não criar componentes genéricos sem uso previsto.

### Sprint 4 - Protótipo de Dashboard

Status: Planejada.

Objetivo:

- Criar a primeira estrutura interna de operação com dados mockados.

Checklist previsto:

- Layout interno.
- Navegação interna.
- Estados de pedido simulados.
- Componentes reutilizáveis mínimos.
- Validação visual completa.

Observações:

- Backend real não deve ser iniciado sem sprint própria.
