/**
 * Painel fixo do lado esquerdo.
 *
 * `position: fixed` faz com que essa coluna NUNCA acompanhe o scroll da
 * página — ela fica "grudada" na tela o tempo todo, enquanto o painel do
 * formulário (à direita) rola normalmente por cima/ao lado dela.
 *
 * A largura aqui (w-[45%]) precisa ser IGUAL à margem esquerda usada no
 * wrapper do formulário (ver InviteFormPanel/App), senão o conteúdo da
 * direita fica sobrepondo ou deixando um vão em relação a este painel.
 */
export default function FixedImagePanel() {
  return (
    <aside
      className="fixed left-0 top-0 h-screen w-[45%] min-w-[320px] bg-neutral-800"
      aria-hidden="true"
    >
      {/* Substitua por <img src={...} className="h-full w-full object-cover" /> */}
      <div className="flex h-full w-full items-center justify-center text-neutral-500">
        imagem fixa (canto esquerdo)
      </div>
    </aside>
  )
}
