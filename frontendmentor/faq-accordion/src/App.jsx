import { useState } from 'react'
import pictureBg from './assets/images/background-pattern-desktop.svg'
import pictureBgMobile from './assets/images/background-pattern-mobile.svg'
import iconStar from './assets/images/icon-star.svg'
import FaqI from './assets/components/FaqI'
import FaqII from './assets/components/FaqII'
import FaqIII from './assets/components/FaqIII'
import FaqIIII from './assets/components/FaqIIII'

function App() {

  const [openFaq, setOpenFaq] = useState(null); // Nenhum FAQ está aberto inicialmente

  // Função para alternar entre os FAQs
  const toggleFaq = (faqIndex) => {
    setOpenFaq(openFaq === faqIndex ? null : faqIndex); // Fecha o FAQ se já estiver aberto
  };

  return (
        <main className='min-h-screen relative flex items-center justify-center font-["Work_Sans"]'>
          <div className='absolute inset-0'>
            <img src={pictureBg} alt="picture background" className='hidden md:block w-full object-cover' />
            <img src={pictureBgMobile} alt="picture background mobile" className='md:hidden w-full object-cover' />
            <div className='w-full h-full bg-[#f9f0ff]'></div>
          </div>
          <div className='relative z-10 w-full max-w-[435px] bg-white rounded-lg p-6'>
            <div className='flex gap-6 items-center mb-6 w-full'>
              <img src={iconStar} alt="star icon"/>
              <h1 className='font-bold text-[#2f1533] text-[36px]'>FAQs</h1>
            </div>
              <div className='space-y-6'>
                <FaqI index={1} openFaq={openFaq} toggleFaq={toggleFaq} />
                <FaqII index={2} openFaq={openFaq} toggleFaq={toggleFaq} />
                <FaqIII index={3} openFaq={openFaq} toggleFaq={toggleFaq} />
                <FaqIIII index={4} openFaq={openFaq} toggleFaq={toggleFaq} />
              </div>
          </div>
        </main>
  )
}

export default App
