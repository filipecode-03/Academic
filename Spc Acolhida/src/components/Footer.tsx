import patria from "../assets/images/patria.svg";
import eb from "../assets/images/eb.svg";
import fab from "../assets/images/fab.svg";
import mb from "../assets/images/mb.svg";

function Footer() {
  return (
    <footer className="bg-[#232323] text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start gap-5">

            <img
              src={patria}
              alt="Pátria Amada Brasil"
              className="w-52"
            />

            <div>
              <h3 className="font-bold text-xl">
                Operação Acolhida
              </h3>

              <p className="text-gray-400 mt-2 leading-relaxed">
                Portal institucional para acompanhamento
                de processos administrativos e documentos
                relacionados às aquisições da Operação
                Acolhida.
              </p>
            </div>

          </div>

          {/* Informações */}
          <div className="text-center lg:text-left">

            <h3 className="font-bold text-lg mb-5">
              Informações Institucionais
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                República Federativa do Brasil
              </p>

              <p>
                Exército Brasileiro • Força Aérea Brasileira •
                Marinha do Brasil
              </p>

              <p>
                <strong>Endereço:</strong><br />

                Unidade Gestora Executora<br />

                Rua Floriano Peixoto, 221<br />

                Centro - Boa Vista/RR<br />

                CEP: 69301-320
              </p>

            </div>

          </div>

          {/* Forças Armadas */}
          <div className="flex flex-col items-center">

            <h3 className="font-bold text-lg mb-5">
              Forças Armadas
            </h3>

            <div className="flex items-center gap-6">

              <img
                src={eb}
                alt="Exército Brasileiro"
                className="h-20 object-contain"
              />

              <img
                src={fab}
                alt="Força Aérea Brasileira"
                className="h-20 object-contain"
              />

              <img
                src={mb}
                alt="Marinha do Brasil"
                className="h-20 object-contain"
              />

            </div>

          </div>

        </div>

        {/* Linha divisória */}

        <div className="border-t border-white/10 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">

            <p>
              © 2025 Operação Acolhida. Todos os direitos reservados.
            </p>

            <p>
              Desenvolvido por <span className="text-white font-medium">Filipe Magalhães</span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;