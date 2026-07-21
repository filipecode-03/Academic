import magic from '../assets/images/MagicWand.svg'
import game from '../assets/images/GameController.svg'
import voice from '../assets/images/MicrophoneStage.svg'
import comunit from '../assets/images/UsersThree.svg'
import music from '../assets/images/MusicNotes.svg'

function More() {
    return (
        <section className='py-12 px-6 grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <div className="rounded-3xl p-6 bg-[#18181B] border border-[#27272A]">
                <img src={magic} alt="magic" />
                <h2 className='text-[20px] font-extrabold leading-[120%] mt-4'>A maior biblioteca de músicas de Karaokê!</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Nossa IA remove a voz de qualquer música e a deixa pronta pra cantar, num passe de mágica!</p>
            </div>
            <div className="rounded-3xl p-6 bg-[#18181B] border border-[#27272A]">
                <img src={game} alt="game" />
                <h2 className='text-[20px] font-extrabold leading-[120%] mt-4'>Experiência gamificada</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Sua performance é pontuada de acordo com nosso algoritmo ultra preciso. Desafie-se, ganhe reconhecimento e comemore sua evolução!</p>
            </div>
            <div className="rounded-3xl p-6 bg-[#18181B] border border-[#27272A]">
                <img src={voice} alt="voice" />
                <h2 className='text-[20px] font-extrabold leading-[120%] mt-4'>Grave suas performances</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Seja para compartilhar com os amigos ou para acompanhar sua evolução, nosso recurso de gravação de áudio e vídeo permite que você aproveite a experiência ao máximo! </p>
            </div>
            <div className="rounded-3xl p-6 bg-[#18181B] border border-[#27272A]">
                <img src={comunit} alt="comunit" />
                <h2 className='text-[20px] font-extrabold leading-[120%] mt-4'>Compartilhe com a comunidade</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Compartilhe suas gravações com a comunidade, interaja e explore a performance vocal de outras pessoas no seu feed!</p>
            </div>
            <div className="rounded-3xl p-6 bg-[#18181B] border border-[#27272A]">
                <img src={music} alt="music" />
                <h2 className='text-[20px] font-extrabold leading-[120%] mt-4'>Letras em tempo-real</h2>
                <p className='text-[#A1A1AA] leading-[160%] mt-2'>Nunca perca o ritmo com as letras das músicas sincronizadas e exibidas em tempo real. Você também pode ativar a voz original da música para ajudar.</p>
            </div>
        </section>
    )
}

export default More