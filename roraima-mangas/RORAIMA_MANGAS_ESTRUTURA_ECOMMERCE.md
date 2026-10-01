# Roraima Mangas --- Documentação da Estrutura do E-commerce

## 1. Visão geral do projeto

O **Roraima Mangas** é um e-commerce de produtos geek, com foco inicial
na venda de mangás.

Além de funcionar como um e-commerce real, o projeto está sendo
desenvolvido com uma segunda finalidade: servir como **base/template
reutilizável para futuros projetos de e-commerce**.

A arquitetura deve, portanto, priorizar:

-   simplicidade;
-   organização;
-   segurança;
-   facilidade de manutenção;
-   possibilidade de reutilização;
-   separação clara entre regras específicas do projeto e
    funcionalidades que podem ser reaproveitadas em outros e-commerces.

O projeto não utiliza Supabase.

------------------------------------------------------------------------

## 2. Modelo comercial do Roraima Mangas

O Roraima Mangas possui um modelo comercial específico.

### 2.1 Venda local

A empresa vende seus produtos **somente localmente**, para clientes:

-   da mesma cidade;
-   dentro do mesmo estado.

O projeto não precisa, neste momento, ser estruturado como um e-commerce
nacional com logística e cálculo de frete para todo o país.

------------------------------------------------------------------------

## 3. Experiência do cliente

O Roraima Mangas **não possui login de cliente**.

O cliente poderá acessar o site publicamente e:

1.  navegar pelos produtos;
2.  visualizar os detalhes dos produtos;
3.  adicionar produtos ao carrinho;
4.  revisar o carrinho;
5.  informar os dados necessários para realizar o pedido;
6.  enviar o pedido através do WhatsApp.

O WhatsApp será o canal utilizado para concluir o pedido.

### 3.1 Referência visual/funcional

Uma referência utilizada para o funcionamento desse modelo foi:

**Cube Quadros** https://www.cubequadros.com/

A referência representa o conceito de um e-commerce no qual o cliente
não precisa criar uma conta para comprar, podendo visualizar produtos,
utilizar o carrinho e encaminhar o pedido pelo WhatsApp.

A referência serve como inspiração para o fluxo, não como obrigação de
reproduzir sua implementação.

------------------------------------------------------------------------

## 4. Painel administrativo

O sistema deverá possuir uma área administrativa em:

``` text
/admin
```

Essa área será destinada ao administrador da loja.

O painel será o centro de controle do e-commerce e deverá permitir
administrar os conteúdos e dados utilizados pela loja.

Entre as responsabilidades previstas estão:

-   gerenciamento de produtos;
-   gerenciamento de categorias;
-   gerenciamento de coleções/seções;
-   gerenciamento de banners;
-   gerenciamento dos demais conteúdos administrativos necessários ao
    funcionamento da loja.

A área administrativa deve utilizar autenticação e autorização.

------------------------------------------------------------------------

## 5. Estrutura administrativa já implementada

Até o momento, o backend já possui os seguintes módulos.

### 5.1 Produtos

CRUD de produtos:

``` text
GET    /api/products
POST   /api/products
GET    /api/products/[id]
PATCH  /api/products/[id]
DELETE /api/products/[id]
```

O cadastro de produto possui atualmente informações como:

-   nome;
-   slug;
-   descrição;
-   preço;
-   preço comparativo;
-   SKU;
-   imagem;
-   status;
-   destaque;
-   indicador de novidade;
-   categoria;
-   datas de criação e atualização.

------------------------------------------------------------------------

### 5.2 Categorias

CRUD de categorias:

``` text
GET    /api/categories
POST   /api/categories
GET    /api/categories/[id]
PATCH  /api/categories/[id]
DELETE /api/categories/[id]
```

------------------------------------------------------------------------

### 5.3 Coleções

CRUD de coleções:

``` text
GET    /api/collections
POST   /api/collections
GET    /api/collections/[id]
PATCH  /api/collections/[id]
DELETE /api/collections/[id]
```

As coleções representam agrupamentos/seções de produtos que podem ser
utilizados na organização da loja.

------------------------------------------------------------------------

### 5.4 Relação Produto ↔ Coleção

Também existe o gerenciamento da associação entre produtos e coleções:

``` text
GET    /api/collections/[id]/products
POST   /api/collections/[id]/products
DELETE /api/collections/[id]/products/[productId]
```

A relação já foi testada e está funcionando.

------------------------------------------------------------------------

## 6. Autenticação e autorização

A autenticação administrativa utiliza:

-   NextAuth;
-   CredentialsProvider;
-   sessões JWT;
-   bcryptjs para senhas.

O administrador já possui usuário cadastrado e o login foi testado.

### 6.1 Autorização atual

As operações que modificam dados administrativos exigem autenticação.

Atualmente:

-   operações GET permanecem públicas quando destinadas à consulta;
-   operações POST, PATCH e DELETE administrativas exigem usuário
    autenticado.

A autorização atual verifica apenas se o usuário está autenticado.

Não existe, neste momento, necessidade de implementar `role` ou um
sistema complexo de permissões.

------------------------------------------------------------------------

## 7. Carrinho

O site público deverá possuir um carrinho de compras.

O cliente poderá:

-   adicionar produtos;
-   remover produtos;
-   alterar quantidades;
-   visualizar os itens;
-   visualizar o subtotal/total conforme as regras definidas para a
    loja.

Como não existe login de cliente, o carrinho deverá funcionar sem
depender de uma conta de usuário.

A implementação detalhada do armazenamento do carrinho ainda deverá ser
definida durante o desenvolvimento.

------------------------------------------------------------------------

## 8. Pedido via WhatsApp

O fluxo de compra do Roraima Mangas termina no WhatsApp.

O site deverá montar uma mensagem contendo as informações relevantes do
pedido, por exemplo:

-   produtos;
-   quantidades;
-   valores;
-   total;
-   dados fornecidos pelo cliente;
-   informações necessárias para contato/entrega local.

O cliente será direcionado ao WhatsApp para continuar a
negociação/conclusão do pedido.

O projeto atual não precisa implementar:

-   login de cliente;
-   checkout com pagamento dentro do site;
-   gateway de pagamento;
-   cálculo de frete nacional;
-   sistema completo de contas de clientes.

------------------------------------------------------------------------

## 9. Banners e conteúdo da loja

O administrador deverá conseguir controlar os banners apresentados no
site através do painel `/admin`.

A estrutura de banners deverá ser pensada de maneira reutilizável,
permitindo futuramente controlar informações como:

-   imagem;
-   título;
-   descrição;
-   link/ação;
-   ordem;
-   status de publicação.

A modelagem definitiva será definida antes da implementação do módulo.

------------------------------------------------------------------------

## 10. Escopo que NÃO pertence ao Roraima Mangas atual

É importante separar o projeto atual dos recursos que poderão existir em
outros e-commerces baseados neste template.

O Roraima Mangas **não terá, neste momento**:

-   cadastro/login de clientes;
-   área de conta do cliente;
-   checkout com pagamento no próprio site;
-   integração obrigatória com gateway de pagamento;
-   cálculo de frete nacional;
-   sistema de pedidos associado a contas de clientes;
-   estrutura de e-commerce nacional.

Esses recursos poderão ser adicionados posteriormente em outros projetos
que utilizem a mesma base.

------------------------------------------------------------------------

## 11. Conceito de template reutilizável

O projeto deve ser desenvolvido de modo que sua arquitetura possa servir
como base para outros e-commerces.

### 11.1 Funcionalidades potencialmente reutilizáveis

A base deverá permitir reaproveitar, conforme a necessidade:

-   autenticação administrativa;
-   painel administrativo;
-   produtos;
-   categorias;
-   coleções;
-   banners;
-   carrinho;
-   pedidos;
-   gerenciamento de conteúdo;
-   estrutura de API;
-   validação com Zod;
-   serviços;
-   Prisma;
-   PostgreSQL.

### 11.2 Funcionalidades específicas

Cada novo e-commerce poderá possuir regras próprias.

Exemplos:

-   venda apenas local;
-   venda nacional;
-   pagamento via WhatsApp;
-   pagamento dentro do site;
-   cálculo de frete;
-   login de clientes;
-   diferentes formas de entrega;
-   diferentes regras de estoque.

Portanto, o template não deve obrigar todos os projetos futuros a
utilizar todas as funcionalidades.

------------------------------------------------------------------------

## 12. Arquitetura técnica atual

### Frontend / aplicação

-   Next.js 16.3.6
-   React 19.2.8
-   TypeScript
-   App Router
-   Tailwind CSS
-   shadcn/ui
-   Lucide
-   React Hook Form
-   Zod
-   Zustand

### Backend

-   Next.js Route Handlers
-   TypeScript
-   Zod
-   NextAuth 4.24.15
-   bcryptjs

### Banco de dados

-   PostgreSQL
-   Prisma 7.10.0
-   @prisma/adapter-pg
-   pg

### Arquitetura desejada

``` text
Route Handler
      ↓
    Zod
      ↓
   Service
      ↓
   Prisma
      ↓
 PostgreSQL
```

------------------------------------------------------------------------

## 13. Estado atual do desenvolvimento

Já foram concluídos:

-   configuração inicial do PostgreSQL;
-   configuração do Prisma;
-   schema inicial;
-   migration inicial;
-   conexão com banco;
-   CRUD de produtos;
-   CRUD de categorias;
-   CRUD de coleções;
-   relação Produto ↔ Coleção;
-   autenticação administrativa;
-   proteção das operações administrativas com autenticação;
-   testes das principais operações.

A etapa de autorização básica dos endpoints administrativos está
concluída.

------------------------------------------------------------------------

# 14. Próximos passos do desenvolvimento

A partir desta documentação, o desenvolvimento deve seguir uma sequência
funcional.

## Etapa 1 --- Definir a estrutura completa do catálogo público

Antes de criar novas tabelas, definir como os dados atuais serão
apresentados no site:

-   página inicial;
-   categorias;
-   coleções;
-   listagem de produtos;
-   página individual do produto;
-   banners;
-   produtos em destaque;
-   produtos novos.

O objetivo é garantir que o backend suporte exatamente a experiência que
o cliente terá.

------------------------------------------------------------------------

## Etapa 2 --- Implementar o gerenciamento de banners

Criar a estrutura necessária para:

-   cadastrar banner;
-   editar banner;
-   excluir banner;
-   ativar/desativar banner;
-   ordenar banners.

Depois criar os endpoints administrativos correspondentes.

------------------------------------------------------------------------

## Etapa 3 --- Implementar o carrinho

Criar o carrinho sem exigir login.

Definir:

-   estrutura dos itens;
-   quantidade;
-   cálculo dos valores;
-   persistência do carrinho;
-   adição;
-   remoção;
-   alteração de quantidade;
-   limpeza do carrinho.

------------------------------------------------------------------------

## Etapa 4 --- Definir e implementar o fluxo do pedido

Como o pedido será concluído via WhatsApp, definir exatamente quais
dados o cliente deverá informar.

Depois implementar:

-   montagem do pedido;
-   validação dos dados;
-   geração da mensagem;
-   redirecionamento para WhatsApp.

A necessidade de persistir pedidos no banco deverá ser decidida antes da
implementação.

------------------------------------------------------------------------

## Etapa 5 --- Construir o painel administrativo `/admin`

Depois que os módulos principais estiverem definidos, construir o painel
administrativo.

O painel deverá permitir ao administrador controlar os recursos
existentes sem precisar utilizar o Insomnia ou acessar diretamente o
banco.

A estrutura deverá contemplar, conforme os módulos implementados:

-   produtos;
-   categorias;
-   coleções;
-   banners;
-   pedidos, caso sejam persistidos;
-   outras configurações administrativas necessárias.

------------------------------------------------------------------------

## Etapa 6 --- Construir o site público

Com o backend e o painel definidos, implementar a experiência do
cliente:

-   home;
-   catálogo;
-   categorias;
-   coleções;
-   produto;
-   carrinho;
-   envio do pedido pelo WhatsApp.

------------------------------------------------------------------------

## Etapa 7 --- Integração entre painel, API e frontend

Depois das interfaces estarem prontas, conectar:

``` text
/admin
   ↓
API
   ↓
Services
   ↓
Prisma
   ↓
PostgreSQL
```

e:

``` text
Loja pública
   ↓
API
   ↓
Services
   ↓
Prisma
   ↓
PostgreSQL
```

------------------------------------------------------------------------

## Etapa 8 --- Segurança e regras de negócio

Antes da finalização, revisar:

-   autenticação;
-   autorização;
-   validação de dados;
-   permissões administrativas;
-   tratamento de erros;
-   exposição de dados;
-   variáveis de ambiente;
-   regras de estoque;
-   integridade dos pedidos;
-   proteção das operações administrativas.

------------------------------------------------------------------------

## Etapa 9 --- Preparação para produção

Por último:

-   configuração para VPS;
-   variáveis de ambiente;
-   PostgreSQL de produção;
-   build;
-   execução da aplicação;
-   domínio;
-   HTTPS;
-   backups;
-   logs;
-   segurança do servidor;
-   procedimentos de atualização.

------------------------------------------------------------------------

# 15. Regra de desenvolvimento

O projeto continuará sendo desenvolvido **uma etapa por vez**.

Para cada etapa:

1.  explicar o objetivo;
2.  informar os arquivos envolvidos;
3.  fazer a menor alteração necessária;
4.  implementar;
5.  testar;
6.  analisar o resultado;
7.  somente então avançar.

Não criar várias funcionalidades simultaneamente.

Não alterar funcionalidades que já estejam funcionando sem necessidade.

Não alterar o schema do banco sem primeiro definir por que a alteração é
necessária.

------------------------------------------------------------------------

# 16. Princípio geral

O Roraima Mangas deve ser um e-commerce funcional por si só, mas sua
arquitetura também deve servir como uma **base reutilizável para futuros
projetos**.

A implementação deve distinguir:

**Base reutilizável** - autenticação administrativa; - catálogo; -
produtos; - categorias; - coleções; - banners; - carrinho; - pedidos; -
painel administrativo; - API; - banco de dados.

**Regras específicas do projeto** - venda local; - ausência de login de
cliente; - pedido concluído pelo WhatsApp; - ausência de pagamento
dentro do site; - ausência de cálculo de frete nacional.

Essa separação será importante para que futuros e-commerces possam
reutilizar a base sem carregar regras que não fazem parte de seus
modelos comerciais.
