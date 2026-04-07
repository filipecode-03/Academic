import logo from '../assets/images/logo-mastercraft.svg'
import bookmark from '../assets/images/icon-bookmark.svg'

function SectionOne({setIsModalOpen, setSelectedCard}) {
    return (
        <section className='bg-white text-center shadow-2xs p-10 pt-15 rounded-[10px] lg:w-[55%] lg:mx-auto'>
            <img src={logo} alt="logo" className='absolute z-11 -top-7 left-56 lg:left-185' />
            <h1 className='font-bold text-[25px] leading-8 w-[80%] mx-auto'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='mt-5 text-[18px]'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex justify-between gap-3 mt-5'>
                <button onClick={() => {
                    setIsModalOpen(true)
                    setSelectedCard(null)}}  
                    className='bg-[#3CB4AB] w-full lg:w-fit p-3 lg:px-8 rounded-full text-white font-medium'>Back this project</button>
                <img src={bookmark} alt="bookmark" />
            </div>
        </section>
    )
}

export default SectionOne