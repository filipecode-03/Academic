import {
  ShoppingCart,
  Handshake,
  File,
  ShoppingBag,
} from "lucide-react";

const itens = [
  {
    titulo: "Pregões",
    Icon: ShoppingCart,
  },
  {
    titulo: "Adesões",
    Icon: Handshake,
  },
  {
    titulo: "Dispensa de Licitação",
    Icon: File,
  },
  {
    titulo: "IRP",
    Icon: ShoppingBag,
  },
];

function Andamento() {
  return (
    <section className="bg-[#F8F8F8] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#003049]">
          Acompanhe o andamento dos processos
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Consulte rapidamente o andamento dos principais procedimentos
          administrativos da Operação Acolhida.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {itens.map(({ titulo, Icon }) => (
            <div
              key={titulo}
              className="
                bg-white
                rounded-2xl
                shadow-md
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
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-[#003049]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <Icon
                  size={46}
                  className="text-white"
                />
              </div>

              <h3 className="font-semibold text-lg text-[#003049]">
                {titulo}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Andamento;