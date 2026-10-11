---
name: ui-ux-fullstack
description: Use esta skill para revisar, desenhar ou melhorar interfaces full stack do projeto Roraima Mangas, mantendo consistência visual, usabilidade e integração correta com a lógica existente.
---

# UI/UX Full Stack — Roraima Mangas

## Objetivo

Criar interfaces profissionais, consistentes, rápidas de usar e visualmente refinadas sem quebrar a arquitetura existente.

## Regras gerais

Antes de modificar qualquer interface:

- analise os componentes existentes;
- identifique o layout atual;
- identifique componentes reutilizáveis;
- verifique shadcn/ui já instalado;
- verifique Lucide já instalado;
- preserve APIs, services, schemas e regras de negócio quando a tarefa for apenas visual;
- não invente novos padrões se o projeto já possui um equivalente adequado.

## Hierarquia visual

Toda tela deve ter hierarquia clara entre:

1. título;
2. descrição/contexto;
3. ação principal;
4. ações secundárias;
5. conteúdo;
6. informações auxiliares.

Evite páginas onde todos os elementos possuem o mesmo peso visual.

## Espaçamento

Use uma escala consistente de espaçamento.

Evite:

- gaps aleatórios;
- margens diferentes sem motivo;
- conteúdo colado às bordas;
- excesso de espaço vertical.

## Tipografia

Priorize:

- legibilidade;
- pesos tipográficos coerentes;
- contraste adequado;
- tamanhos consistentes entre páginas.

Não use tamanho grande apenas para parecer moderno.

## Componentes

Prefira reutilizar:

- Button;
- Card;
- Input;
- Select;
- Dialog;
- Sheet;
- DropdownMenu;
- Tabs;
- Badge;
- Tooltip;
- Skeleton;
- Alert;
- Table;
- Separator;

quando disponíveis no projeto.

## Estados

Todo componente interativo importante deve considerar:

- default;
- hover;
- focus;
- active;
- disabled;
- loading;
- empty;
- error;
- success.

## Feedback

Ações administrativas devem oferecer feedback visual claro.

Exemplos:

- salvando;
- salvo;
- falhou;
- excluindo;
- nenhum resultado;
- nenhum item cadastrado.

## Performance

Não sacrificar performance por aparência.

Evitar:

- animações pesadas;
- grandes dependências sem necessidade;
- layout shift;
- re-renderizações desnecessárias;
- efeitos visuais que exigem JavaScript quando CSS resolve.

## Acessibilidade

Garantir:

- foco visível;
- labels;
- contraste;
- área de clique confortável;
- navegação por teclado quando aplicável;
- semântica adequada.

## Regra final

Não redesenhar por redesenhar.

Toda mudança visual deve melhorar pelo menos um destes aspectos:

- compreensão;
- velocidade de uso;
- hierarquia;
- consistência;
- responsividade;
- feedback;
- percepção de qualidade.