import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqI({index, openFaq, toggleFaq}) {

    /* const [icon, setIcon] = useState(iconMore);

  const isOpen = openFaq === index; // Verifica se o FAQ está aberto

  const toggleAnswerAndIcon = () => {
    toggleFaq(index); // Alterna o estado do FAQ ao clicar
  }

  // Verifica se o FAQ está aberto
  const isOpen = openFaq === index;

  // Define o ícone com base na condição de aberto/fechado
  const icon = isOpen ? iconMinus : iconMore;

    */

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
            <span className='leading-5.5 font-semibold text-[#2f1533]'>What is Frontend Mentor, and how will it help me?</span>
            <img src={icon} alt="icon" />
          </button>
          {isOpen && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
              </p>
            </div>
          )}
          <hr className='border-[#f9f0ff] border-1 mx-auto my-4' />
        </div>
    )
  }
export default FaqI