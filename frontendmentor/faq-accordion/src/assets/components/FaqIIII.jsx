import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqIIII() {

  const [showAnswer, setShowAnswer] = useState(false);
  const [icon, setIcon] = useState(iconMore);

  const toggleAnswerAndIcon = () => {
    setShowAnswer(!showAnswer);
    setIcon(showAnswer ? iconMore : iconMinus);
  } 
    return (
        <div>
          <div className='flex items-center space-x-9'>
            <button
            onClick={toggleAnswerAndIcon}
            className='font-semibold text-[#2f1533] text-[18px] text-left leading-5.5 cursor-pointer'>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </button>
            <button onClick={toggleAnswerAndIcon} className='cursor-pointer flex items-center justify-center'><img src={icon} alt="more icon" className='w-15 h-15 object-contain'/></button>
          </div>
          {showAnswer && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.
              </p>
            </div>
          )}
        </div>
    )
}

export default FaqIIII