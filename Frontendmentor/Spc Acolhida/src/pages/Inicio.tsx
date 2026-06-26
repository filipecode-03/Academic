import AcessMore from "../components/Inicio/AcessMore";
import acolhida from '../assets/images/acolhida.png'
import Welcome from "../components/Inicio/Welcome";
import Andamento from "../components/Inicio/Andamento";
import Modelos from "../components/Inicio/Modelos";
import Metricas from "../components/Inicio/Métricas";

export function Inicio() {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl text-center lg:text-left p-8 font-semibold uppercase">
        Serviços <span className="text-[#00509D]">mais acessados pela equipe da SPC</span>
      </h1>
      <AcessMore />
      <img src={acolhida} alt="acolhida" className="hidden lg:block w-full mt-8" />
      <Welcome />
      <Andamento />
      <Modelos />
      <Metricas />
    </div>
  );
}