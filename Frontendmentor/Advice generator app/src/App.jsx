import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'

function App() {

  return (
    <div className="font-['Manrope'] bg-[#202632] min-h-screen pt-40 text-center px-8">
      <div className="bg-[#313A49] rounded-[10px] px-5 pt-10 ">
        <h1 className='text-[#53FFAB] tracking-[5px] font-semibold text-[12px]'>ADVICE </h1>

        <img src={dividerMobile} alt="divider" className='mx-auto w-[90%]' />
        <button className='bg-[#53FFAB] p-4 rounded-full relative top-6.5'>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  )
}

export default App
