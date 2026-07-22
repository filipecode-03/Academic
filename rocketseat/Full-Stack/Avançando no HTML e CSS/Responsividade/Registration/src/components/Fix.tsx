import Illustration from '../assets/images/Illustration.png'
import logo from '../assets/images/Frame 48095956.png'

function Fix() {
  return (
    <section className="fixed right-0 top-0 h-screen w-[50%] bg-[#FEE7D6] p-[64px]">
      <div>
        <img src={logo} alt="logo" />
        <h1 className="text-[40px] leading-12 font-semibold">
          Porque cada momento de <span className="text-[#E43A12]">aprendizado</span> conta
        </h1>
        <p className="mt-4 text-[#57534E]">
          Inscreva seu filho em nossa escola e veja-o florescer em um ambiente acolhedor, seguro e estimulante.
        </p>
      </div>
      <img src={Illustration} alt="Illustration" className='mx-auto mt-8' />
    </section>
  )
}

export default Fix