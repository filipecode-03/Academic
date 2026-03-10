import close from '../assets/images/icon-close-modal.svg'
import { useEffect } from "react";

function BackProject({ setSelectedCard, setIsModalOpen, selectedCard }) {
    
    useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
    
    return (
        <div className="fixed inset-0 bg-black/30 z-12 overflow-y-auto">
            <div className='flex justify-center pt-40 pb-20'>
                <div className="bg-white rounded-[10px] p-6 w-[90%] text-gray-600">
                    <div className='flex items-center justify-between'>
                        <h2 className='font-bold text-black text-[20px]'>Back this project</h2>
                        <img src={close} alt="close" className='cursor-pointer' onClick={() => setIsModalOpen(false)} />
                    </div>
                    <p className='mt-5'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    <div onClick={() => setSelectedCard(1)}
                         className={`mt-5 border-3 rounded-[10px] p-8 cursor-pointer transition
                        ${selectedCard === 1 ? "border-[#3CB4AB]" : "border-gray-200"}`}>
                        <label className="flex text-black items-center gap-7 font-bold text-[18px]">
                            <input
                            type="radio"
                            name="pledge"
                            checked={selectedCard === 1}
                            onChange={() => setSelectedCard(1)}
                            className="appearance-none
                                        w-6 h-6
                                        rounded-full
                                        border-3 border-gray-200
                                        checked:bg-teal-400
                                        checked:border-gray-400"
                            />
                        Pledge with no reward
                        </label>
                        <p className='mt-5'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div>
                    <div onClick={() => setSelectedCard(2)}
                         className={`mt-5 border-3 rounded-[10px] py-8 cursor-pointer transition
                        ${selectedCard === 2 ? "border-[#3CB4AB]" : "border-gray-200"}`}>
                        <div className="flex items-center gap-7 px-8">
                            <input
                            type="radio"
                            name="pledge"
                            checked={selectedCard === 2}
                            onChange={() => setSelectedCard(2)}
                            className="appearance-none
                                        w-6 h-6
                                        rounded-full
                                        border-3 border-gray-200
                                        checked:bg-teal-400
                                        checked:border-gray-400"
                            />
                            <div>
                                <h3 className='font-bold text-black text-[18px]'>Bamboo Stand</h3>
                                <h4 className='text-[#3CB4AB] font-medium'>Pledge $25 or more</h4>
                            </div>
                        </div>
                        <p className='mt-5 px-8'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                        <div className='flex items-center gap-2 mt-5 px-8'>
                            <h5 className='text-black font-bold text-[22px]'>101</h5>
                            <p>left</p>
                        </div>
                        {selectedCard === 2 && (
                            <div className='mt-5 text-center'>
                                <hr className='text-gray-200 border-2' />
                                <p className='mt-5'>Enter your pledge</p>
                                <div className='flex items-center justify-center gap-5 mt-5'>
                                    <button className='p-4 pr-15 pl-6 border border-gray-400 rounded-full '>$ <span className='font-bold text-black'>25</span></button>
                                    <button className='text-white font-medium bg-[#3CB4AB] p-4 px-7 rounded-full'>Continue</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackProject