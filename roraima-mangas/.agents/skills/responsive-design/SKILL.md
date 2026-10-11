---
name: responsive-design
description: Use esta skill para criar e revisar layouts responsivos no Roraima Mangas em desktop, tablet e mobile.
---

# Responsive Design — Roraima Mangas

## Objetivo

Garantir que cada interface seja realmente adaptada para cada tamanho de tela, e não apenas comprimida.

## Princípios

- trabalhar mobile-first quando adequado;
- preservar boa leitura;
- evitar overflow horizontal;
- adaptar hierarquia;
- adaptar número de colunas;
- adaptar densidade de informação.

## Desktop

Aproveitar largura disponível sem deixar o conteúdo excessivamente espalhado.

Usar containers quando apropriado.

Componentes de leitura longa não devem ocupar toda a viewport.

## Tablet

Não tratar tablet como desktop pequeno.

Reavaliar:

- grids;
- barras laterais;
- formulários;
- tabelas;
- cabeçalhos;
- ações.

## Mobile

No mobile:

- priorizar ações principais;
- reduzir elementos decorativos;
- reorganizar informações;
- usar Sheet/Drawer quando apropriado;
- evitar tabelas largas sem estratégia;
- permitir rolagem somente quando necessário;
- preservar áreas de toque confortáveis.

## Grids

Cards devem alterar colunas progressivamente.

Exemplo conceitual:

- mobile: 1 ou 2;
- tablet: 2 ou 3;
- desktop: 4.

Não fixar uma quantidade sem analisar largura e tamanho mínimo do card.

## Imagens

- usar proporções consistentes;
- evitar distorção;
- evitar imagens gigantes desnecessárias;
- prever crop;
- preservar object-fit adequado.

## Admin

No painel:

- sidebar desktop pode virar drawer mobile;
- cabeçalhos devem empilhar quando necessário;
- botões podem ocupar largura total no mobile;
- formulários de duas colunas devem virar uma;
- tabelas devem usar estratégia responsiva.

## Regra final

Testar mentalmente e estruturalmente em:

- 320px;
- 375px;
- 768px;
- 1024px;
- 1280px;
- 1440px+.