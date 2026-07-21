import check from '../assets/images/Check.svg'
import line from '../assets/images/Line-148.png'

function Price() {
    return (
        <section className="py-12 lg:py-20 lg:px-8 px-6 flex flex-col gap-8">
            <div className="text-center lg:w-200 lg:mx-auto">
                <h3 className="font-meidum text-[14px] text-[#F7B733]">PLANOS E PREÇOS</h3>
                <h2 className="mt-2 font-extrabold text-[24px] lg:text-[48px] leading-[120%]">Assine e tenha acesso ilimitado a todas as funcionalidades</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center gap-8">
                <div className="p-6 lg:p-8 bg-[#18181B] rounded-3xl border border-[#27272A]">
                    <h3 className='text-[20px] font-extrabold'>Básico</h3>
                    <p className='leading-[160%] text-[#A1A1AA] mt-1'>Baixe o app e comece a cantar agora mesmo!</p>
                    <h2 className='text-[32px] font-extrabold mt-6'>Grátis</h2>
                    <button className='font-medium mt-6 text-center mx-auto w-full border-2 border-white px-6 py-3 rounded-lg'>Baixar agora</button>

                    <img src={line} alt="" className='mt-8 w-full' />

                    <div className='text-[#A1A1AA] flex flex-col gap-4 mt-8'>
                        <div className='flex items-center gap-2'>
                            <img src={check} alt="check" />
                            <p>Com anúncios</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={check} alt="check" />
                            <p>Até 5 músicas por dia</p>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={check} alt="check" />
                            <p>Cante apenas as músicas disponíveis no plano gratuito</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl lg:h-140 bg-linear-to-r from-[#FC4B1A] to-[#F7B733] p-0.75">
                    <div className="rounded-3xl lg:h-full bg-[#18181B]">
                        <div className="inline-flex items-center rounded-br-3xl rounded-tl-3xl bg-linear-to-r from-[#FC4B1A] to-[#F7B733] px-8 py-3 font-semibold tracking-wide text-black">
                            1 MÊS GRÁTIS
                        </div>
                        <div className='p-6 lg:p-8'>
                            <h3 className='text-[20px] font-extrabold'>Premium</h3>
                            <p className='leading-[160%] text-[#A1A1AA] mt-1'>Ideal para quem já cansou de passar vergonha no Karaokê</p>
                            <h2 className='text-[32px] font-extrabold mt-6'>R$ 24,90 <span className='text-[16px] font-normal text-[#A1A1AA]'>/mês</span></h2>
                            <button className='font-medium mt-6 text-center mx-auto w-full bg-white text-black px-6 py-3 rounded-lg'>Experimente de graça</button>
                            <img src={line} alt="" className='mt-8 w-full' />
                            <div className='text-[#A1A1AA] flex flex-col gap-4 mt-8'>
                                <div className='flex items-center gap-2'>
                                    <img src={check} alt="check" />
                                    <p>Sem interrupção de anúncios</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={check} alt="check" />
                                    <p>Cante quantas músicas quiser</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img src={check} alt="check" />
                                    <p>Cante todas as músicas da biblioteca</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 lg:p-8 bg-[#18181B] rounded-3xl border border-[#27272A]">
                    <h3 className='text-[20px] font-extrabold'>Família</h3>
                    <p className='leading-[160%] text-[#A1A1AA] mt-1'>Para aquelas famílias que adoram se reunir pra cantar</p>
                    <h2 className='text-[32px] font-extrabold mt-6'>R$ 21,90 <span className='text-[16px] font-normal text-[#A1A1AA]'>/mês por pessoa</span></h2>
                    <button className='font-medium mt-6 text-center mx-auto w-full border-2 border-white px-6 py-3 rounded-lg'>Assinar agora</button>

                    <img src={line} alt="" className='mt-8 w-full' />

                    <div className='text-[#A1A1AA] flex flex-col gap-4 mt-8'>
                        <div className='flex items-center gap-2'>
                            <img src={check} alt="check" />
                            <p>Sem interrupção de anúncios</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={check} alt="check" />
                            <p>Cante quantas músicas quiser</p>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={check} alt="check" />
                            <p>Cante todas as músicas da biblioteca</p>
                        </div>
                    </div>
                    <p className='text-[#A1A1AA] text-[14px] mt-6'>Mínimo de 4 pessoas no plano família.</p>
                </div>
            </div>
        </section>
    )
}

export default Price