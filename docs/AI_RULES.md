# PedeJah - Manual de Trabalho Para IA

## Objetivo

Este documento define como agentes de IA devem trabalhar no projeto PedeJah. Ele complementa a documentação de produto, design, arquitetura e roadmap.

## Regras Obrigatórias

- Sempre ler toda a documentação em `docs/` antes de modificar o projeto.
- Nunca implementar funcionalidades fora da sprint atual.
- Nunca iniciar a próxima sprint sem aprovação explícita.
- Nunca alterar páginas, componentes ou estilos quando a sprint for apenas documental.
- Nunca quebrar componentes existentes.
- Nunca remover alterações do usuário sem autorização.
- Sempre preferir componentes reutilizáveis quando houver repetição real.
- Nunca criar abstrações sem necessidade concreta.
- Nunca instalar dependências sem justificar tecnicamente.
- Nunca instalar bibliotecas pesadas sem aprovação.
- Sempre registrar decisões importantes em `docs/DECISIONS.md`.
- Sempre atualizar `docs/ROADMAP.md` ao concluir uma sprint.
- Sempre validar no Chrome DevTools após alterações visuais.
- Sempre que uma Sprint alterar a interface do Storefront, utilizar o Chrome DevTools antes e depois da implementação para validar a experiência em diferentes viewports.
- Nunca utilizar o Chrome DevTools apenas para verificar overflow; analisar também UX, UI, alinhamento, responsividade, contraste e consistência visual.
- Sempre verificar desktop, tablet e mobile após alterações visuais.
- Sempre verificar console do navegador após alterações visuais.
- Sempre verificar overflow horizontal após alterações visuais.
- Sempre que houver referência visual aprovada, como mockup do Stitch ou futura referência oficial, a Sprint de interface só pode ser considerada concluída se o resultado estiver visualmente equivalente à referência aprovada.
- Se houver diferença relevante de composição, hierarquia, espaçamento, responsividade ou acabamento visual em relação à referência aprovada, continuar refinando antes de concluir a Sprint.
- Antes de criar qualquer novo componente visual do Storefront, verificar se já existe um componente equivalente que possa ser reutilizado ou adaptado, preservando a arquitetura LEGO e evitando duplicação de componentes com a mesma responsabilidade.
- Nunca tratar a Jah Burgers como centro do produto; ela é apenas mock/demo da plataforma SaaS multiestabelecimento.
- Nunca criar componente específico apenas para hamburgueria, açaíteria, pizzaria ou outro segmento se um componente genérico do Storefront resolver.
- Nunca colocar regra de negócio específica de uma loja dentro de componente visual.
- Sempre separar Storefront Engine de Store Configuration em decisões de interface, dados e arquitetura.
- Sempre listar arquivos criados e modificados na entrega.

## Antes de Começar Uma Sprint

1. Ler `docs/PROJECT.md`.
2. Ler `docs/DESIGN.md`.
3. Ler `docs/PRODUCT_RULES.md`.
4. Ler `docs/STOREFRONT.md` quando a sprint envolver frontend público do cliente final.
5. Ler `docs/ROADMAP.md`.
6. Ler `docs/ARCHITECTURE.md`.
7. Ler `docs/DECISIONS.md`.
8. Ler este arquivo.
9. Confirmar o escopo da sprint solicitada.
10. Identificar explicitamente o que não deve ser feito.
11. Para qualquer tela, responder internamente às perguntas de produto antes de implementar.

## Perguntas de Produto Antes de Implementar Telas

Antes de implementar qualquer tela, a IA deve responder internamente:

1. Quem utilizará esta tela?
2. Qual o objetivo dessa pessoa?
3. Qual ação principal esperamos que ela execute?
4. Como reduzir a quantidade de cliques?
5. Como tornar essa ação mais rápida?
6. Existe alguma informação desnecessária ocupando espaço?
7. Existe alguma forma de melhorar a conversão?

Essas respostas não precisam aparecer na interface, mas devem orientar decisões de estrutura, hierarquia, conteúdo, estados e fluxo.

## Durante a Implementação

- Trabalhar com o menor conjunto de mudanças necessário.
- Respeitar a arquitetura existente.
- Usar padrões já definidos antes de criar novos.
- Evitar refatorações não solicitadas.
- Não misturar documentação, interface e backend na mesma sprint sem aprovação.
- Em caso de conflito entre documentos, pausar e registrar o conflito antes de continuar.

## Depois da Implementação

- Rodar `npm run lint` quando houver código.
- Rodar `npm run build` quando houver código.
- Validar no Chrome DevTools quando houver mudança visual.
- Quando a mudança visual envolver o Storefront, tratar o Chrome DevTools como inspetor de qualidade visual antes e depois da implementação, não apenas como ferramenta de debug.
- Atualizar `docs/ROADMAP.md` com status da sprint.
- Atualizar `docs/DECISIONS.md` se houver decisão nova.
- Informar limitações, alertas e validações não realizadas.

## Regras Para Dependências

Dependências só podem ser adicionadas quando:

- Resolverem problema real da sprint.
- Forem leves ou justificadas pelo ganho técnico.
- Não duplicarem capacidade já existente.
- Forem compatíveis com Next.js 16, React 19 e TypeScript.
- A decisão for registrada em `docs/DECISIONS.md` quando relevante.

## Regras Para Interface

- Seguir `docs/DESIGN.md`.
- Seguir `docs/PRODUCT_RULES.md`.
- Antes de implementar qualquer tela do cliente final, consultar `docs/STOREFRONT.md` para garantir consistência da navegação e da experiência do usuário.
- Nenhum componente visual importante deve ser implementado sem uma referência visual previamente aprovada, salvo quando o objetivo da sprint for especificamente explorar conceitos de design.
- Quando houver referência visual aprovada, garantir equivalência visual de composição, hierarquia, espaçamento, responsividade e acabamento antes de concluir a sprint.
- Antes de criar componentes visuais do Storefront, procurar componente equivalente existente para reutilização ou adaptação.
- Componentes do Storefront devem consumir dados de loja, categoria, produto, carrinho, checkout e pedido sem conhecer se a origem é mock, API, banco ou painel administrativo.
- Novas lojas devem ser adicionadas por mocks ou configurações, não por duplicação de telas, rotas ou componentes visuais.
- Não copiar layouts das referências.
- Não criar hero, footer, cards ou CTA sem sprint aprovada.
- Não alterar Header sem solicitação explícita.
- Garantir responsividade.
- Garantir foco visível e acessibilidade básica.

## Regras Para Backend

- Não criar APIs sem sprint aprovada.
- Não criar banco de dados sem decisão registrada.
- Não implementar autenticação sem sprint específica.
- Não simular backend real como se estivesse pronto.

## Regras Para Comunicação

- Ser objetivo sobre o que foi feito.
- Não prometer etapas futuras como se já estivessem aprovadas.
- Informar arquivos alterados.
- Informar comandos executados.
- Aguardar aprovação antes de avançar.

## Prioridade das Instruções

Quando houver conflito:

1. Instruções explícitas do usuário na sprint atual.
2. `docs/AI_RULES.md`.
3. `docs/PROJECT.md`.
4. `docs/PRODUCT_RULES.md`.
5. `docs/STOREFRONT.md` quando a mudança envolver Storefront.
6. `docs/ARCHITECTURE.md`.
7. `docs/DESIGN.md`.
8. `docs/ROADMAP.md`.
9. `docs/DECISIONS.md`.

Conflitos relevantes devem ser resolvidos atualizando a documentação.
