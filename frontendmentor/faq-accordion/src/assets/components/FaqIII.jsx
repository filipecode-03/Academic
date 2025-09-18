import { useState } from 'react'
import iconMore from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg'

function FaqIII() {

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
              Can I use Frontend Mentor projects in my portfolio?
            </button>
            <button onClick={toggleAnswerAndIcon} className='cursor-pointer flex items-center justify-center'><img src={icon} alt="more icon" className='w-15 h-15 object-contain'/></button>
          </div>
          {showAnswer && (
            <div className='my-6 font-normal text-[#8c6991]'>
              <p>
                Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
              </p>
            </div>
          )}
        </div>
    )
}

export default FaqIII