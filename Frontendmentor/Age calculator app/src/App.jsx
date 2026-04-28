import arrow from './images/icon-arrow.svg'

function App() {

  return (
    <div className="font-['Poppins'] pt-25 p-5 min-h-screen bg-[#F0F0F0]">
      <section className="bg-white p-8 rounded-t-[20px] rounded-bl-[20px] rounded-br-[70px]">
        <form action="">

          <button className='bg-[#864CFF] p-5 rounded-full mx-auto'>
            <img src={arrow} alt="arrow" className='w-8' />
          </button>
          <hr className='text-[#EDEDED] border-2' />
        </form>
      </section>
    </div>
  )
}

export default App
