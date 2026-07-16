import type { ReactNode } from 'react'

interface InviteFormPanelProps {
  children: ReactNode
}

/**
 * Coluna da direita: é aqui que mora o "efeito de scroll" pedido.
 *
 * Como funciona (de fora pra dentro):
 *
 * 1. <section> (div pai / "parentWrapper")
 *    - Tem a cor de fundo do projeto (bg-parent).
 *    - É mais alta que a tela (min-h-[130vh]) e tem um padding-top
 *      (peek) só pra deixar essa cor de fundo visível ANTES do card
 *      branco aparecer, quando a página carrega.
 *    - margin-left: mesma largura do painel fixo da imagem, pra não
 *      ficar por baixo dele.
 *
 * 2. <div> (o card do formulário / "stickyCard")
 *    - position: sticky + top-0: quando o usuário rola a página, esse
 *      card "sobe" e gruda no topo da viewport, cobrindo o fundo do
 *      elemento pai — dando a impressão de que ele estava por baixo do
 *      bg e "emerge" por cima conforme você rola. É esse o efeito de
 *      "parece que ele está de baixo no bg da div pai".
 *    - h-screen + overflow-y-auto: depois que ele gruda no topo, o
 *      SCROLL DO FORMULÁRIO em si (o conteúdo interno, que pode ser bem
 *      mais alto que a tela) passa a rolar dentro dele, sem mover o
 *      card. Isso é o "efeito de scroll do formulário".
 *
 * Ajuste os valores de altura/peek/cor conforme o design do Figma.
 */
export default function InviteFormPanel({ children }: InviteFormPanelProps) {
  return (
    <section
      className="ml-[45%] min-h-[130vh] bg-neutral-900 pt-[12vh]"
    >
      <div className="h-screen overflow-y-auto rounded-t-[2.5rem] bg-white shadow-2xl">
        <div className="mx-auto w-full max-w-md px-8 py-12">{children}</div>
      </div>
    </section>
  )
}
