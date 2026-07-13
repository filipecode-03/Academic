import Profile from '../assets/images/Avatar.png'

function Header() {
    return (
        <header className="text-center bg-[url('../assets/images/Background_Intro.png')] bg-cover bg-center">
            <img src={Profile} alt="profile" className='mx-auto' />
            <h2>Hello World! Meu nome é <span className='text-[#E3646E]'>Martina Santos</span> e sou</h2>
            <h1>Desenvolvedora Fullstack</h1>
        </header>
    )
}

export default Header