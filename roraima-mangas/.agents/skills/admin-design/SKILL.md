---
name: admin-design
description: Use esta skill ao criar ou melhorar qualquer interface do painel administrativo do Roraima Mangas.
---

# Admin Design — Roraima Mangas

## Objetivo

Criar um painel administrativo profissional, organizado, consistente e rápido de usar.

O painel deve parecer um produto completo, não uma coleção de formulários isolados.

## Prioridades

1. clareza;
2. velocidade operacional;
3. consistência;
4. responsividade;
5. feedback;
6. acabamento visual.

## Estrutura

O Admin deve ter identidade própria.

Elementos esperados:

- sidebar;
- header/contexto da página;
- breadcrumb quando útil;
- título;
- descrição;
- ação principal;
- conteúdo.

## Sidebar

A sidebar deve:

- ter hierarquia clara;
- possuir item ativo;
- usar ícones consistentes;
- ter grupos lógicos se necessário;
- funcionar corretamente no mobile;
- não ocupar largura excessiva;
- não competir com o conteúdo.

## Dashboard

O dashboard deve ter propósito.

Pode mostrar:

- atalhos;
- métricas disponíveis;
- status;
- ações frequentes.

Não inventar métricas se os dados não existirem.

## Páginas de listagem

Cada listagem deve ter:

- título;
- descrição curta;
- botão principal;
- pesquisa/filtros quando existentes;
- tabela ou cards adequados;
- empty state;
- ações por item.

## Tabelas

Priorizar:

- alinhamento;
- densidade adequada;
- hierarquia;
- badges;
- ações agrupadas;
- cabeçalho legível.

Não sobrecarregar cada linha com botões grandes.

## Formulários

Agrupar campos semanticamente.

Exemplo:

- Informações básicas;
- Preço e estoque;
- Organização;
- Imagens;
- Exibição;
- Destaque/Novo.

Usar cards ou sections quando melhorar entendimento.

## Ações

Diferenciar:

- primária;
- secundária;
- destrutiva.

Excluir não deve ter o mesmo peso visual que salvar.

## Feedback

Toda operação deve indicar:

- carregamento;
- sucesso;
- falha;
- estado vazio.

## Responsividade

Desktop:
- aproveitar espaço.

Mobile:
- sidebar em Sheet/Drawer;
- formulário em uma coluna;
- ações empilhadas quando necessário;
- tabelas adaptadas.

## Visual

Preferir um estilo:

- limpo;
- moderno;
- sóbrio;
- profissional.

Evitar:

- gradientes excessivos;
- cores demais;
- sombras pesadas;
- bordas fortes em tudo;
- cartões desnecessários para cada pequeno bloco.

## shadcn/ui

Reutilizar componentes do shadcn quando fizer sentido.

Não adicionar componente shadcn apenas para aumentar quantidade de componentes.

## Regra final

Não mexer na lógica do negócio para resolver problema de aparência.

Caso uma mudança estrutural seja necessária, justificar pelo fluxo de uso.