# Roraima Mangas — Agent Instructions

## Contexto

Projeto de e-commerce full stack desenvolvido com Next.js, React, TypeScript, Prisma, PostgreSQL, Tailwind e shadcn/ui.

## Regras

- Antes de alterar código, analise a implementação existente.
- Não invente arquivos, funções ou estruturas.
- Preserve arquitetura e regras de negócio existentes.
- Não usar Supabase.
- Não executar comandos destrutivos no banco.
- Não usar `prisma migrate reset`.
- Não usar `db push --force-reset`.
- Categorias foram removidas e não devem ser reintroduzidas.
- Admin não deve possuir link visível na loja pública.
- Reutilize componentes existentes quando possível.
- Use shadcn/ui e Lucide quando fizer sentido.
- Não adicionar dependências sem necessidade.
- Prefira validação com:
  - `npx tsc --noEmit`
  - `npm run build`
- Se migration for necessária, criar migration segura e não aplicá-la sem instrução explícita.
