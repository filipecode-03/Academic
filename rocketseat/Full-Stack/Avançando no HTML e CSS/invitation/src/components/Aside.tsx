import fast from '../assets/images/Background.png'
import logo from '../assets/images/Logo.svg'

function Aside() {
    return (
        <aside
          className="
            fixed
            top-8
            w-100
            h-[calc(100vh-4rem)]
          "
        >
          <div
            className="h-full p-8 rounded-3xl bg-center bg-cover bg-no-repeat overflow-hidden"
            style={{
              backgroundImage: `url(${fast})`,
            }}
          >
            <img src={logo} alt="logo" className='w-17' />
            <h1 className='mt-4 font-["Leckerli_One"] text-[40px] font-bold text-[#FF598B]'>Festivite</h1>
            <p className='font-["Open_Sans"] text-[#F9F9F9] mt-1'>Crie um convite digital para o seu evento</p>
          </div>
        </aside>
    )
}

export default Aside