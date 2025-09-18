import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqI() {

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
              What is Frontend Mentor, and how will it help me?
            </button>
            <button onClick={toggleAnswerAndIcon} className='cursor-pointer flex items-center justify-center'><img src={icon} alt="more icon" className='w-15 h-15 object-contain'/></button>
          </div>
          {showAnswer && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
              </p>
            </div>
          )}
        </div>
    )
}

export default FaqI