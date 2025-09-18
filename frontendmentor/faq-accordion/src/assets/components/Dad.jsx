import iconStar from '../images/icon-star.svg';
import FaqI from './FaqI';
import FaqII from './FaqII';
import FaqIII from './FaqIII';
import FaqIIII from './FaqIIII';

function Dad() {
    return (
        <main className='w-screen h-screen bg-[#f9f0ff] relative font-["Work_Sans"] overflow-x-hidden'>
            <div className='space-y-5 bg-white absolute z-10 top-[50px] left-[30px] right-[30px] rounded-[10px] p-[25px] mb-[60px]'>
                <div className='flex space-x-6'>
                    <img src={iconStar} alt="star icon" className='w-[28px]'/>
                    <h1 className='font-bold text-[#2f1533] text-[36px]'>FAQs</h1>
                </div>
                <FaqI />
                <hr className='border-[#f9f0ff] border-1' />
                <FaqII />
                <hr className='border-[#f9f0ff] border-1' />
                <FaqIII />
                <hr className='border-[#f9f0ff] border-1' />
                <FaqIIII />
                <hr className='border-[#f9f0ff] border-1' />
            </div>
        </main>
    )
}

export default Dad