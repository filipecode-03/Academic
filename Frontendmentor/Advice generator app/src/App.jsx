import dividerMobile from './images/pattern-divider-mobile.svg'
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState(null)

  // Função para buscar conselho
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()

      setAdvice(data.slip.advice)
      setAdviceId(data.slip.id)
    } catch (error) {
      console.error('Erro ao buscar conselho:', error)
    }
  }

  // Buscar ao carregar a página
  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="font-['Manrope'] bg-[#202632] min-h-screen pt-40 text-center px-8">
      <div className="bg-[#313A49] lg:w-[40%] lg:mx-auto rounded-[10px] px-5 pt-10 lg:mt-12">
        <h1 className='text-[#53FFAB] tracking-[5px] font-semibold text-[12px]'>ADVICE #{adviceId}</h1>
        <p className='text-white text-[24px] my-6 font-bold px-4'>
          "{advice}"
        </p>
        <img src={dividerMobile} alt="divider" className='mx-auto w-[90%] block lg:hidden' />
        <img src={dividerDesktop} alt="divider" className='mx-auto hidden lg:block' />
        <button onClick={fetchAdvice} className='box bg-[#53FFAB] cursor-pointer p-4 rounded-full relative top-6.5'>
          <img src={dice} alt="dice icon" />
        </button>
      </div>
    </div>
  )
}

export default App
