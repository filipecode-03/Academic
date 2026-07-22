import magic from '../assets/images/MagicWand.svg'
import game from '../assets/images/GameController.svg'
import voice from '../assets/images/MicrophoneStage.svg'
import comunit from '../assets/images/UsersThree.svg'
import music from '../assets/images/MusicNotes.svg'
import phone01 from '../assets/images/Tela1.png'
import phone02 from '../assets/images/Tela2.png'
import phone03 from '../assets/images/Tela3.png'

function More() {
    return (
        <section className='py-12 lg:py-20 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <div className="rounded-3xl p-6 lg:px-8 lg:py-10 bg-[#18181B] border border-[#27272A]">
                <img src={magic} alt="magic" />
                <h2 className='text-[20px] lg:text-[32px] font-extrabold leading-[120%] mt-4'>A maior biblioteca de músicas de Karaokê!</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Nossa IA remove a voz de qualquer música e a deixa pronta pra cantar, num passe de mágica!</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl lg:col-span-2 p-6 lg:px-8 lg:py-10 bg-[#18181B] border border-[#27272A]">
                {/* Conteúdo */}
                <img src={game} alt="game" />
                <div className='lg:w-[300px]'>
                    <h2 className="mt-4 text-[20px] lg:text-[32px] font-extrabold leading-[120%]">
                        Experiência gamificada
                    </h2>
                    <p className="mt-2 leading-[160%] text-[#A1A1AA]">
                        Sua performance é pontuada de acordo com nosso algoritmo ultra preciso. Desafie-se, ganhe reconhecimento e comemore sua evolução!
                    </p>
                </div>
                {/* Imagem decorativa */}
                <img
                    src={phone02}
                    alt=""
                    className="
                        w-[260px]
                        hidden
                        lg:block
                        lg:absolute
                        lg:right-8
                        lg:-top-45
                        
                        lg:pointer-events-none
                        lg:select-none
                    "
                />
            </div>
            <div className="rounded-3xl p-6 lg:px-8 lg:py-10 bg-[#18181B] border border-[#27272A]">
                <img src={voice} alt="voice" />
                <h2 className='text-[20px] lg:text-[32px] font-extrabold leading-[120%] mt-4'>Grave suas performances</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Seja para compartilhar com os amigos ou para acompanhar sua evolução, nosso recurso de gravação de áudio e vídeo permite que você aproveite a experiência ao máximo! </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl lg:col-span-2 p-6 lg:px-8 lg:pl-90 lg:py-10 bg-[#18181B] border border-[#27272A]">
                {/* Conteúdo */}
                <img src={comunit} alt="comunit" />
                <div className='lg:w-[268px]'>
                    <h2 className="mt-4 text-[20px] lg:text-[32px] font-extrabold leading-[120%]">
                        Compartilhe com a comunidade
                    </h2>
                    <p className="mt-2 leading-[160%] text-[#A1A1AA]">
                        Compartilhe suas gravações com a comunidade, interaja e explore a performance vocal de outras pessoas no seu feed!
                    </p>
                </div>
                {/* Imagem decorativa */}
                <img
                    src={phone01}
                    alt=""
                    className="
                        w-[280px]
                        hidden
                        lg:block
                        lg:absolute
                        lg:left-8
                        lg:bottom-8
                        
                        lg:pointer-events-none
                        lg:select-none
                    "
                />
            </div>
            <div className="relative overflow-hidden rounded-3xl lg:col-span-2 p-6 lg:px-8 lg:py-10 bg-[#18181B] border border-[#27272A]">
                {/* Conteúdo */}
                <img src={music} alt="game" />
                <div className='lg:w-[268px]'>
                    <h2 className="mt-4 text-[20px] lg:text-[32px] font-extrabold leading-[120%]">
                        Letras em tempo-real
                    </h2>
                    <p className="mt-2 leading-[160%] text-[#A1A1AA]">
                        Nunca perca o ritmo com as letras das músicas sincronizadas e exibidas em tempo real. Você também pode ativar a voz original da música para ajudar.
                    </p>
                </div>
                {/* Imagem decorativa */}
                <img
                    src={phone03}
                    alt=""
                    className="
                        w-[280px]
                        hidden
                        lg:block
                        lg:absolute
                        lg:right-8
                        lg:top-7
                        
                        lg:pointer-events-none
                        lg:select-none
                    "
                />
            </div>
        </section>
    )
}

export default More