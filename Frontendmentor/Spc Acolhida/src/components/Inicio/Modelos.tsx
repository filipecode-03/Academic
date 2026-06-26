import { FilePen, FilePlus2 } from "lucide-react";

const documentos = [
  {
    titulo: "DIEx",
    descricao: "Documento Interno de Execução",
    Icon: FilePen,
  },
  {
    titulo: "DAN",
    descricao: "Documento de Apresentação de Necessidade",
    Icon: FilePlus2,
  },
];

function Modelos() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Modelos de Solicitação de Demanda
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Acesse os documentos padronizados utilizados na formalização
          das demandas da Operação Acolhida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {documentos.map(({ titulo, descricao, Icon }) => (
            <div
              key={titulo}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-100
                p-8
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                cursor-pointer
              "
            >
                <Icon
                    size={80}
                    className="text-black"
                />
              <h3 className="text-xl font-bold mt-3">
                {titulo}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {descricao}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Modelos;