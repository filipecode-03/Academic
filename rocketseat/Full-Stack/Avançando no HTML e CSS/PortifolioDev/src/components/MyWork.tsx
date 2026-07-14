import project1 from '../assets/images/Thumbnail_Project-01.png'
import project2 from '../assets/images/Thumbnail_Project-02.png'
import project3 from '../assets/images/Thumbnail_Project-03.png'
import project4 from '../assets/images/Thumbnail_Project-04.png'
import project5 from '../assets/images/Thumbnail_Project-05.png'
import project6 from '../assets/images/Thumbnail_Project-06.png'

function MyWork() {
    return (
        <section className='bg-[#16181D] px-30 pt-18 pb-36'>
            <section className='text-center'>
                <h2 className='font-["Inconsolata"] text-[20px] text-[#E3646E]'>Meu Trabalho</h2>
                <h3 className='text-white text-[24px] font-["Asap"] font-bold'>Veja os projetos em destaque</h3>
            </section>
            <section className='mt-14 grid grid-cols-3 gap-6 w-260 mx-auto'>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project1} alt="project1" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Travelgram</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Rede social onde as pessoas mostram os registros de suas viagens pelo mundo</p>
                    </div>
                </div>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project2} alt="project2" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Tach News</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Homepage de um portal de notícias sobre a área de tecnologia</p>
                    </div>
                </div>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project3} alt="project3" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Página de receita</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Página com o passo a passo de uma receita para cupcakes</p>
                    </div>
                </div>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project4} alt="project4" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Zingen</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Landing Page completa e responsiva de um aplicativo de Karaokê</p>
                    </div>
                </div>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project5} alt="project5" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Refund</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Um sistema para pedido e acompanhamento de reembolso </p>
                    </div>
                </div>
                <div className="p-3 rounded-xl bg-[#292C34] border border-transparent transition-all duration-300 ease-out hover:border-[#C0C4CE] cursor-pointer">
                    <img src={project6} alt="project6" className='rounded-lg' />
                    <div className='mt-5'>
                        <h4 className='text-[#E2E4E9] font-bold font-["Asap"]'>Página de turismo</h4>
                        <p className='font-["Maven_Pro"] mt-2 text-[14px] text-[#C0C4CE]'>Página com as principais informações para quem quer viajar para Busan</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MyWork