import { ArrowRight } from 'lucide-react';
import image10 from '../assets/images/Image-10.png'
import image11 from '../assets/images/Image-11.png'
import image12 from '../assets/images/Image-12.png'
import image13 from '../assets/images/Image-13.png'
import image14 from '../assets/images/Image-14.png'
import image15 from '../assets/images/Image-15.png'
import image16 from '../assets/images/Image-16.png'
import image17 from '../assets/images/Image-17.png'
import image18 from '../assets/images/Image-18.png'
import ads from '../assets/images/Ads.png'

function Footer() {
    return (
        <footer className='flex items-center gap-8'>
            <section className='border-t border-gray-800 w-380'>
                <div className="pt-3 flex items-center text-[14px] font-semibold justify-between">
                  <p>Destaques da Inteligência Artificial</p>
                  <div className="flex items-center gap-2">
                      <p>Ver tudo</p>
                      <ArrowRight size={16} />
                  </div>
                </div>
                <article className='mt-6 flex flex-col gap-8'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                INTELIGÊNCIA ARTIFICIAL
                            </p>
                            <h2 className='font-extrabold mt-2'>Empresa surpreende o mundo ao anunciar um algoritmo capaz de prever eventos futuros com alta precisão.</h2>
                            <p className='line-clamp-4 mt-1 text-[14px]'>Em um avanço surpreendente da inteligência artificial, uma empresa anuncia o desenvolvimento de um algoritmo capaz de prever eventos futuros com notável precisão. Descubra como essa tecnologia está desafiando as fronteiras da previsão e quais são as implicações para diversas áreas, desde finanças até planejamento estratégico.</p>
                        </div>
                        <img src={image10} alt="image10" className='w-44' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                INTELIGÊNCIA ARTIFICIAL
                            </p>
                            <h2 className='font-extrabold mt-2'>Dispositivo portátil promete traduzir instantaneamente diferentes idiomas, facilitando a comunicação global.</h2>
                            <p className='line-clamp-4 mt-1 text-[14px]'>Em um mundo cada vez mais conectado, a comunicação sem fronteiras é essencial. Nesse contexto, um dispositivo portátil surge como um verdadeiro herói linguístico, prometendo quebrar as barreiras idiomáticas instantaneamente. Imagine poder se comunicar fluentemente em qualquer lugar do mundo, independentemente do idioma local. Este dispositivo não é mais uma visão futurista, mas uma realidade impressionante que está transformando a forma como nos conectamos globalmente. Nesta reportagem, mergulharemos nas funcionalidades deste dispositivo revolucionário e como ele está moldando uma nova era de compreensão global.</p>
                        </div>
                        <img src={image11} alt="image11" className='w-44' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                INTELIGÊNCIA ARTIFICIAL
                            </p>
                            <h2 className='font-extrabold mt-2 line-clamp-2'>Criados para auxiliar idosos, robôs de companhia ganham popularidade, oferecendo suporte emocional e físico aos usuários.</h2>
                            <p className='line-clamp-4 mt-1 text-[14px]'>A tecnologia não só avança, mas também busca tornar a vida mais significativa para todas as gerações. No cenário atual, os robôs sociais, projetados especialmente para oferecer apoio e companhia aos idosos, estão ganhando destaque. Mais do que meros assistentes, esses robôs são programados para fornecer suporte emocional e físico, preenchendo lacunas nas necessidades de cuidado. Nesta matéria, exploraremos como esses companheiros tecnológicos estão impactando positivamente a qualidade de vida da terceira idade e proporcionando uma nova perspectiva sobre o envelhecimento.</p>
                        </div>
                        <img src={image12} alt="image12" className='w-44' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                INTELIGÊNCIA ARTIFICIAL
                            </p>
                            <h2 className='font-extrabold mt-2'>Aplicativo utiliza inteligência artificial para ajudar usuários a manterem o foco e aumentarem a produtividade no dia a dia.</h2>
                            <p className='line-clamp-4 mt-1 text-[14px]'>No turbilhão da vida moderna, onde distrações são abundantes, um aplicativo inovador surge como um aliado indispensável para quem busca maior concentração e eficiência no cotidiano. Utilizando avançados algoritmos de inteligência artificial, este aplicativo promete mais do que simplesmente gerenciar tarefas; ele está programado para compreender os padrões de trabalho de cada usuário, oferecendo sugestões personalizadas para otimizar o tempo e maximizar a produtividade. Nesta matéria, exploraremos como essa ferramenta tecnológica está se tornando a chave para manter o foco em um mundo cada vez mais cheio de distrações, transformando a maneira como encaramos nossas responsabilidades diárias.</p>
                        </div>
                        <img src={image13} alt="image13" className='w-44' />
                    </div>
                </article>
            </section>
            <section>
                <img src={ads} alt="ads" className='w-full' />
                <div className='mt-8 border-t border-gray-800'>
                    <div className="pt-3 flex items-center text-[14px] font-semibold justify-between">
                        <p>Viu isso aqui</p>
                        <div className="flex items-center gap-2">
                            <p>Ver tudo</p>
                            <ArrowRight size={16} />
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col gap-8'>
                        <div className='flex items-center gap-4'>
                            <img src={image14} alt="image14" className='w-18' />
                            <div>
                                <p className="bg-[#1D4ED8] tracking-[4%] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                    SOFTWARE
                                </p>
                                <h2 className='font-extrabold tracking-[4%] mt-2 text-[14px] line-clamp-2'>Aplicativo utiliza inteligência artificial para ajudar usuários a manterem o foco e aumentarem a produtividade no dia a dia.</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={image15} alt="image15" className='w-18' />
                            <div>
                                <p className="bg-[#1D4ED8] tracking-[4%] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                    REALIDADE VIRTUAL
                                </p>
                                <h2 className='font-extrabold tracking-[4%] mt-2 text-[14px] line-clamp-2'>Óculos de realidade virtual com feedback tátil proporcionam uma experiência sensorial completa, imergindo usuários em ambientes digitais.</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={image16} alt="image16" className='w-18' />
                            <div>
                                <p className="bg-[#1D4ED8] tracking-[4%] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                    CRIPTOMOEDAS
                                </p>
                                <h2 className='font-extrabold tracking-[4%] mt-2 text-[14px] line-clamp-2'>Surge uma nova moeda digital baseada em tecnologias sustentáveis, buscando minimizar o impacto ambiental associado à mineração de criptomoedas.</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={image17} alt="image17" className='w-18' />
                            <div>
                                <p className="bg-[#1D4ED8] tracking-[4%] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                    DRONES
                                </p>
                                <h2 className='font-extrabold tracking-[4%] mt-2 text-[14px] line-clamp-2'>Empresas de e-commerce implementam frota de drones para entregas rápidas, transformando o cenário do comércio online.</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={image18} alt="image18" className='w-18' />
                            <div>
                                <p className="bg-[#1D4ED8] tracking-[4%] w-fit px-3 py-1 rounded-md text-[10px] font-medium">
                                    IMPRESSÃO 3D
                                </p>
                                <h2 className='font-extrabold tracking-[4%] mt-2 text-[14px] line-clamp-2'>Tecnologia inovadora permite a impressão 3D de órgãos humanos, revolucionando a medicina e a lista de espera por transplantes.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer