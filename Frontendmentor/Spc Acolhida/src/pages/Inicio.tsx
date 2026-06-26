import AcessMore from "../components/Inicio/AcessMore";
import acolhida from '../assets/images/acolhida.png'

export function Inicio() {
  return (
    <div>
      <h1 className="text-[18px] text-center lg:text-left p-8 font-semibold uppercase">
        Serviços <span className="text-[#00509D]">mais acessados pela equipe da SPC</span>
      </h1>
      <AcessMore />
      <img src={acolhida} alt="acolhida" className="hidden lg:block" />
    </div>
  );
}