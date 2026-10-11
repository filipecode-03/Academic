---
name: motion-animation
description: Use esta skill ao melhorar animações, transições, hover, menus, carrosséis, banners e microinterações no Roraima Mangas.
---

# Motion & Animation — Roraima Mangas

## Objetivo

Usar movimento para dar acabamento, indicar interação e melhorar percepção de qualidade.

## Filosofia

A animação deve ser percebida como natural.

Ela não deve chamar mais atenção do que o conteúdo.

## Duração

Para interações pequenas:

- 120ms a 250ms.

Para entrada/saída de componentes:

- 180ms a 350ms.

Para carrosséis e banners:

- transições suaves, normalmente entre 350ms e 700ms.

Evitar animações lentas em navegação.

## Easing

Preferir curvas suaves.

Evitar movimento linear em elementos de interface.

## Hover

Bons usos:

- leve mudança de cor;
- underline animado;
- translate muito pequeno;
- scale entre aproximadamente 1.01 e 1.04;
- zoom sutil de imagem;
- mudança suave de borda/sombra.

Evitar:

- pulos;
- rotações exageradas;
- scale grande;
- sombras muito fortes.

## Menus

Dropdown:

- opacity;
- translateY pequeno;
- scale muito discreto.

Mobile:

- transição de painel;
- submenu hierárquico;
- boa indicação de navegação.

## Cards

Sugestões:

- imagem com zoom suave;
- pequena elevação;
- reveal discreto de ação;
- mudança sutil de borda.

## Banners

Pode usar:

- fade;
- slide;
- fade + scale muito pequeno.

Evitar cortes abruptos.

## Avisos promocionais

Podem usar:

- slide horizontal;
- fade;
- setas;
- autoplay;
- pausa ou reset do timer após interação.

## prefers-reduced-motion

Quando animações forem relevantes:

- respeitar `prefers-reduced-motion`;
- reduzir ou remover movimento não essencial.

## Dependências

Antes de adicionar biblioteca de animação:

1. verificar package.json;
2. verificar se Tailwind/CSS resolve;
3. reutilizar biblioteca já instalada.

Não instalar Motion/Framer Motion por padrão.