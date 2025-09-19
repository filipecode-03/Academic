import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqIIII({index, openFaq, toggleFaq}) {

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
            <span className='leading-5.5 font-semibold text-[#2f1533]'>How can I get help if I'm stuck on a Front-end Mentor challenge?</span>
            <img src={icon} alt="icon" />
          </button>
          {isOpen && (
            <div className='font-normal text-[#8c6991]'>
              <p>
                The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.
              </p>
            </div>
          )}
          <hr className='border-[#f9f0ff] border-1 mx-auto my-2' />
        </div>
    )
}

export default FaqIIII