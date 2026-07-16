import FixedImagePanel from './components/FixedImagePanel'
import InviteFormPanel from './components/InviteFormPanel'

function App() {
  return (
    // relative + overflow-x-hidden no container raiz evita barra de
    // rolagem horizontal causada pelo painel fixo.
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <FixedImagePanel />

      <InviteFormPanel>
        {/* Formulário sem estilização — só a estrutura, como pedido.
            Troque pelos campos reais do Figma. */}
        <form className="flex flex-col gap-4">
          <h1>Formulário de convite</h1>

          <label>
            Nome completo
            <input type="text" name="name" />
          </label>

          <label>
            E-mail
            <input type="email" name="email" />
          </label>

          <label>
            Você vai comparecer?
            <select name="rsvp">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
          </label>

          <label>
            Número de acompanhantes
            <input type="number" name="guests" min={0} />
          </label>

          <label>
            Mensagem (opcional)
            <textarea name="message" rows={4} />
          </label>

          {/* Bloco só pra garantir que o formulário fique mais alto que a
              tela e o scroll interno do card fique visível no teste. */}
          <div style={{ height: '40vh' }} />

          <button type="submit">Enviar</button>
        </form>
      </InviteFormPanel>
    </div>
  )
}

export default App
