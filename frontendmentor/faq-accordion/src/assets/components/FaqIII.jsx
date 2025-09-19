import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqIII({index, openFaq, toggleFaq}) {

      const isOpen = openFaq === index;
    
      // Alterna o estado do FAQ ao clicar
      const toggleAnswerAndIcon = () => {
        toggleFaq(index); // Alterna entre abrir e fechar o FAQ
      }
    
      // Define o ícone com base na condição de aberto/fechado
      const icon = isOpen ? iconMinus : iconMore;
  
    /*
    const [showAnswer, setShowAnswer] = useState(false);
    const [icon, setIcon] = useState(iconMore);
  
    const toggleAnswerAndIcon = () => {
      setShowAnswer(!showAnswer);
      setIcon(showAnswer ? iconMore : iconMinus);
    } */
    return (
        <div>
          <button onClick={toggleAnswerAndIcon}
          className='cursor-pointer w-full text-left flex justify-between items-center group'>
            <span className='leading-5.5 font-semibold text-[#2f1533]'>Can I use Frontend Mentor projects in my portfolio?</span>
            <img src={icon} alt="icon" />
          </button>
          {isOpen && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
              </p>
            </div>
          )}
          <hr className='border-[#f9f0ff] border-1 mx-auto my-4' />
        </div>
    )
}

export default FaqIII