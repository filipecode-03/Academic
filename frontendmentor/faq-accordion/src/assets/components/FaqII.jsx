import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqII() {

  const [showAnswer, setShowAnswer] = useState(false);
  const [icon, setIcon] = useState(iconMore);

  const toggleAnswerAndIcon = () => {
    setShowAnswer(!showAnswer);
    setIcon(showAnswer ? iconMore : iconMinus);
  } 
    return (
        <div>
          <div className='flex items-center space-x-36'>
            <button
            onClick={toggleAnswerAndIcon}
            className='font-semibold text-[#2f1533] text-[18px] text-left leading-5.5 cursor-pointer'>
              Is Frontend Mentor free?
            </button>
            <button onClick={toggleAnswerAndIcon} className='cursor-pointer flex items-center justify-center'><img src={icon} alt="more icon" className='w-12 h-12 object-contain'/></button>
          </div>
          {showAnswer && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
              </p>
            </div>
          )}
        </div>
    )
}

export default FaqII